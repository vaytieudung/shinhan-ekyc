!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e(((t = 'undefined' != typeof globalThis ? globalThis : t || self).ZXing = {}));
})(this, function (t) {
  'use strict';
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
    ***************************************************************************** */ var e =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (t, e) {
        t.__proto__ = e;
      }) ||
    function (t, e) {
      for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    };
  var r,
    n = (function (t) {
      function r(e) {
        var r,
          n,
          i,
          s = this.constructor,
          o = t.call(this, e) || this;
        return (
          Object.defineProperty(o, 'name', { value: s.name, enumerable: !1 }),
          (r = o),
          (n = s.prototype),
          (i = Object.setPrototypeOf) ? i(r, n) : (r.__proto__ = n),
          (function (t, e) {
            void 0 === e && (e = t.constructor);
            var r = Error.captureStackTrace;
            r && r(t, e);
          })(o),
          o
        );
      }
      return (
        (function (t, r) {
          function n() {
            this.constructor = t;
          }
          e(t, r), (t.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
        })(r, t),
        r
      );
    })(Error);
  class i extends n {
    constructor(t) {
      super(t), (this.message = t);
    }
    getKind() {
      return this.constructor.kind;
    }
  }
  i.kind = 'Exception';
  class s extends i {}
  s.kind = 'ArgumentException';
  class o extends i {}
  o.kind = 'IllegalArgumentException';
  class a {
    constructor(t) {
      if (((this.binarizer = t), null === t)) throw new o('Binarizer must be non-null.');
    }
    getWidth() {
      return this.binarizer.getWidth();
    }
    getHeight() {
      return this.binarizer.getHeight();
    }
    getBlackRow(t, e) {
      return this.binarizer.getBlackRow(t, e);
    }
    getBlackMatrix() {
      return (
        (null !== this.matrix && void 0 !== this.matrix) || (this.matrix = this.binarizer.getBlackMatrix()), this.matrix
      );
    }
    isCropSupported() {
      return this.binarizer.getLuminanceSource().isCropSupported();
    }
    crop(t, e, r, n) {
      const i = this.binarizer.getLuminanceSource().crop(t, e, r, n);
      return new a(this.binarizer.createBinarizer(i));
    }
    isRotateSupported() {
      return this.binarizer.getLuminanceSource().isRotateSupported();
    }
    rotateCounterClockwise() {
      const t = this.binarizer.getLuminanceSource().rotateCounterClockwise();
      return new a(this.binarizer.createBinarizer(t));
    }
    rotateCounterClockwise45() {
      const t = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
      return new a(this.binarizer.createBinarizer(t));
    }
    toString() {
      try {
        return this.getBlackMatrix().toString();
      } catch (t) {
        return '';
      }
    }
  }
  class l extends i {
    static getChecksumInstance() {
      return new l();
    }
  }
  l.kind = 'ChecksumException';
  class h {
    constructor(t) {
      this.source = t;
    }
    getLuminanceSource() {
      return this.source;
    }
    getWidth() {
      return this.source.getWidth();
    }
    getHeight() {
      return this.source.getHeight();
    }
  }
  class c {
    static arraycopy(t, e, r, n, i) {
      for (; i--; ) r[n++] = t[e++];
    }
    static currentTimeMillis() {
      return Date.now();
    }
  }
  class u extends i {}
  u.kind = 'IndexOutOfBoundsException';
  class d extends u {
    constructor(t, e) {
      super(e), (this.index = t), (this.message = e);
    }
  }
  d.kind = 'ArrayIndexOutOfBoundsException';
  class g {
    static fill(t, e) {
      for (let r = 0, n = t.length; r < n; r++) t[r] = e;
    }
    static fillWithin(t, e, r, n) {
      g.rangeCheck(t.length, e, r);
      for (let i = e; i < r; i++) t[i] = n;
    }
    static rangeCheck(t, e, r) {
      if (e > r) throw new o('fromIndex(' + e + ') > toIndex(' + r + ')');
      if (e < 0) throw new d(e);
      if (r > t) throw new d(r);
    }
    static asList(...t) {
      return t;
    }
    static create(t, e, r) {
      return Array.from({ length: t }).map((t) => Array.from({ length: e }).fill(r));
    }
    static createInt32Array(t, e, r) {
      return Array.from({ length: t }).map((t) => Int32Array.from({ length: e }).fill(r));
    }
    static equals(t, e) {
      if (!t) return !1;
      if (!e) return !1;
      if (!t.length) return !1;
      if (!e.length) return !1;
      if (t.length !== e.length) return !1;
      for (let r = 0, n = t.length; r < n; r++) if (t[r] !== e[r]) return !1;
      return !0;
    }
    static hashCode(t) {
      if (null === t) return 0;
      let e = 1;
      for (const r of t) e = 31 * e + r;
      return e;
    }
    static fillUint8Array(t, e) {
      for (let r = 0; r !== t.length; r++) t[r] = e;
    }
    static copyOf(t, e) {
      return t.slice(0, e);
    }
    static copyOfUint8Array(t, e) {
      if (t.length <= e) {
        const r = new Uint8Array(e);
        return r.set(t), r;
      }
      return t.slice(0, e);
    }
    static copyOfRange(t, e, r) {
      const n = r - e,
        i = new Int32Array(n);
      return c.arraycopy(t, e, i, 0, n), i;
    }
    static binarySearch(t, e, r) {
      void 0 === r && (r = g.numberComparator);
      let n = 0,
        i = t.length - 1;
      for (; n <= i; ) {
        const s = (i + n) >> 1,
          o = r(e, t[s]);
        if (o > 0) n = s + 1;
        else {
          if (!(o < 0)) return s;
          i = s - 1;
        }
      }
      return -n - 1;
    }
    static numberComparator(t, e) {
      return t - e;
    }
  }
  class f {
    static numberOfTrailingZeros(t) {
      let e;
      if (0 === t) return 32;
      let r = 31;
      return (
        (e = t << 16),
        0 !== e && ((r -= 16), (t = e)),
        (e = t << 8),
        0 !== e && ((r -= 8), (t = e)),
        (e = t << 4),
        0 !== e && ((r -= 4), (t = e)),
        (e = t << 2),
        0 !== e && ((r -= 2), (t = e)),
        r - ((t << 1) >>> 31)
      );
    }
    static numberOfLeadingZeros(t) {
      if (0 === t) return 32;
      let e = 1;
      return (
        t >>> 16 == 0 && ((e += 16), (t <<= 16)),
        t >>> 24 == 0 && ((e += 8), (t <<= 8)),
        t >>> 28 == 0 && ((e += 4), (t <<= 4)),
        t >>> 30 == 0 && ((e += 2), (t <<= 2)),
        (e -= t >>> 31),
        e
      );
    }
    static toHexString(t) {
      return t.toString(16);
    }
    static toBinaryString(t) {
      return String(parseInt(String(t), 2));
    }
    static bitCount(t) {
      return (
        (t = ((t = (858993459 & (t -= (t >>> 1) & 1431655765)) + ((t >>> 2) & 858993459)) + (t >>> 4)) & 252645135),
        (t += t >>> 8),
        63 & (t += t >>> 16)
      );
    }
    static truncDivision(t, e) {
      return Math.trunc(t / e);
    }
    static parseInt(t, e) {
      return parseInt(t, e);
    }
  }
  (f.MIN_VALUE_32_BITS = -2147483648), (f.MAX_VALUE = Number.MAX_SAFE_INTEGER);
  class w {
    constructor(t, e) {
      void 0 === t
        ? ((this.size = 0), (this.bits = new Int32Array(1)))
        : ((this.size = t), (this.bits = null == e ? w.makeArray(t) : e));
    }
    getSize() {
      return this.size;
    }
    getSizeInBytes() {
      return Math.floor((this.size + 7) / 8);
    }
    ensureCapacity(t) {
      if (t > 32 * this.bits.length) {
        const e = w.makeArray(t);
        c.arraycopy(this.bits, 0, e, 0, this.bits.length), (this.bits = e);
      }
    }
    get(t) {
      return 0 != (this.bits[Math.floor(t / 32)] & (1 << (31 & t)));
    }
    set(t) {
      this.bits[Math.floor(t / 32)] |= 1 << (31 & t);
    }
    flip(t) {
      this.bits[Math.floor(t / 32)] ^= 1 << (31 & t);
    }
    getNextSet(t) {
      const e = this.size;
      if (t >= e) return e;
      const r = this.bits;
      let n = Math.floor(t / 32),
        i = r[n];
      i &= ~((1 << (31 & t)) - 1);
      const s = r.length;
      for (; 0 === i; ) {
        if (++n === s) return e;
        i = r[n];
      }
      const o = 32 * n + f.numberOfTrailingZeros(i);
      return o > e ? e : o;
    }
    getNextUnset(t) {
      const e = this.size;
      if (t >= e) return e;
      const r = this.bits;
      let n = Math.floor(t / 32),
        i = ~r[n];
      i &= ~((1 << (31 & t)) - 1);
      const s = r.length;
      for (; 0 === i; ) {
        if (++n === s) return e;
        i = ~r[n];
      }
      const o = 32 * n + f.numberOfTrailingZeros(i);
      return o > e ? e : o;
    }
    setBulk(t, e) {
      this.bits[Math.floor(t / 32)] = e;
    }
    setRange(t, e) {
      if (e < t || t < 0 || e > this.size) throw new o();
      if (e === t) return;
      e--;
      const r = Math.floor(t / 32),
        n = Math.floor(e / 32),
        i = this.bits;
      for (let s = r; s <= n; s++) {
        const o = (2 << (s < n ? 31 : 31 & e)) - (1 << (s > r ? 0 : 31 & t));
        i[s] |= o;
      }
    }
    clear() {
      const t = this.bits.length,
        e = this.bits;
      for (let r = 0; r < t; r++) e[r] = 0;
    }
    isRange(t, e, r) {
      if (e < t || t < 0 || e > this.size) throw new o();
      if (e === t) return !0;
      e--;
      const n = Math.floor(t / 32),
        i = Math.floor(e / 32),
        s = this.bits;
      for (let o = n; o <= i; o++) {
        const a = ((2 << (o < i ? 31 : 31 & e)) - (1 << (o > n ? 0 : 31 & t))) & 4294967295;
        if ((s[o] & a) !== (r ? a : 0)) return !1;
      }
      return !0;
    }
    appendBit(t) {
      this.ensureCapacity(this.size + 1),
        t && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)),
        this.size++;
    }
    appendBits(t, e) {
      if (e < 0 || e > 32) throw new o('Num bits must be between 0 and 32');
      this.ensureCapacity(this.size + e);
      for (let r = e; r > 0; r--) this.appendBit(1 == ((t >> (r - 1)) & 1));
    }
    appendBitArray(t) {
      const e = t.size;
      this.ensureCapacity(this.size + e);
      for (let r = 0; r < e; r++) this.appendBit(t.get(r));
    }
    xor(t) {
      if (this.size !== t.size) throw new o("Sizes don't match");
      const e = this.bits;
      for (let r = 0, n = e.length; r < n; r++) e[r] ^= t.bits[r];
    }
    toBytes(t, e, r, n) {
      for (let i = 0; i < n; i++) {
        let n = 0;
        for (let e = 0; e < 8; e++) this.get(t) && (n |= 1 << (7 - e)), t++;
        e[r + i] = n;
      }
    }
    getBitArray() {
      return this.bits;
    }
    reverse() {
      const t = new Int32Array(this.bits.length),
        e = Math.floor((this.size - 1) / 32),
        r = e + 1,
        n = this.bits;
      for (let i = 0; i < r; i++) {
        let r = n[i];
        (r = ((r >> 1) & 1431655765) | ((1431655765 & r) << 1)),
          (r = ((r >> 2) & 858993459) | ((858993459 & r) << 2)),
          (r = ((r >> 4) & 252645135) | ((252645135 & r) << 4)),
          (r = ((r >> 8) & 16711935) | ((16711935 & r) << 8)),
          (r = ((r >> 16) & 65535) | ((65535 & r) << 16)),
          (t[e - i] = r);
      }
      if (this.size !== 32 * r) {
        const e = 32 * r - this.size;
        let n = t[0] >>> e;
        for (let i = 1; i < r; i++) {
          const r = t[i];
          (n |= r << (32 - e)), (t[i - 1] = n), (n = r >>> e);
        }
        t[r - 1] = n;
      }
      this.bits = t;
    }
    static makeArray(t) {
      return new Int32Array(Math.floor((t + 31) / 32));
    }
    equals(t) {
      if (!(t instanceof w)) return !1;
      const e = t;
      return this.size === e.size && g.equals(this.bits, e.bits);
    }
    hashCode() {
      return 31 * this.size + g.hashCode(this.bits);
    }
    toString() {
      let t = '';
      for (let e = 0, r = this.size; e < r; e++) 0 == (7 & e) && (t += ' '), (t += this.get(e) ? 'X' : '.');
      return t;
    }
    clone() {
      return new w(this.size, this.bits.slice());
    }
  }
  !(function (t) {
    (t[(t.OTHER = 0)] = 'OTHER'),
      (t[(t.PURE_BARCODE = 1)] = 'PURE_BARCODE'),
      (t[(t.POSSIBLE_FORMATS = 2)] = 'POSSIBLE_FORMATS'),
      (t[(t.TRY_HARDER = 3)] = 'TRY_HARDER'),
      (t[(t.CHARACTER_SET = 4)] = 'CHARACTER_SET'),
      (t[(t.ALLOWED_LENGTHS = 5)] = 'ALLOWED_LENGTHS'),
      (t[(t.ASSUME_CODE_39_CHECK_DIGIT = 6)] = 'ASSUME_CODE_39_CHECK_DIGIT'),
      (t[(t.ASSUME_GS1 = 7)] = 'ASSUME_GS1'),
      (t[(t.RETURN_CODABAR_START_END = 8)] = 'RETURN_CODABAR_START_END'),
      (t[(t.NEED_RESULT_POINT_CALLBACK = 9)] = 'NEED_RESULT_POINT_CALLBACK'),
      (t[(t.ALLOWED_EAN_EXTENSIONS = 10)] = 'ALLOWED_EAN_EXTENSIONS');
  })(r || (r = {}));
  var A,
    C = r;
  class E extends i {
    static getFormatInstance() {
      return new E();
    }
  }
  (E.kind = 'FormatException'),
    (function (t) {
      (t[(t.Cp437 = 0)] = 'Cp437'),
        (t[(t.ISO8859_1 = 1)] = 'ISO8859_1'),
        (t[(t.ISO8859_2 = 2)] = 'ISO8859_2'),
        (t[(t.ISO8859_3 = 3)] = 'ISO8859_3'),
        (t[(t.ISO8859_4 = 4)] = 'ISO8859_4'),
        (t[(t.ISO8859_5 = 5)] = 'ISO8859_5'),
        (t[(t.ISO8859_6 = 6)] = 'ISO8859_6'),
        (t[(t.ISO8859_7 = 7)] = 'ISO8859_7'),
        (t[(t.ISO8859_8 = 8)] = 'ISO8859_8'),
        (t[(t.ISO8859_9 = 9)] = 'ISO8859_9'),
        (t[(t.ISO8859_10 = 10)] = 'ISO8859_10'),
        (t[(t.ISO8859_11 = 11)] = 'ISO8859_11'),
        (t[(t.ISO8859_13 = 12)] = 'ISO8859_13'),
        (t[(t.ISO8859_14 = 13)] = 'ISO8859_14'),
        (t[(t.ISO8859_15 = 14)] = 'ISO8859_15'),
        (t[(t.ISO8859_16 = 15)] = 'ISO8859_16'),
        (t[(t.SJIS = 16)] = 'SJIS'),
        (t[(t.Cp1250 = 17)] = 'Cp1250'),
        (t[(t.Cp1251 = 18)] = 'Cp1251'),
        (t[(t.Cp1252 = 19)] = 'Cp1252'),
        (t[(t.Cp1256 = 20)] = 'Cp1256'),
        (t[(t.UnicodeBigUnmarked = 21)] = 'UnicodeBigUnmarked'),
        (t[(t.UTF8 = 22)] = 'UTF8'),
        (t[(t.ASCII = 23)] = 'ASCII'),
        (t[(t.Big5 = 24)] = 'Big5'),
        (t[(t.GB18030 = 25)] = 'GB18030'),
        (t[(t.EUC_KR = 26)] = 'EUC_KR');
    })(A || (A = {}));
  class m {
    constructor(t, e, r, ...n) {
      (this.valueIdentifier = t),
        (this.name = r),
        (this.values = 'number' == typeof e ? Int32Array.from([e]) : e),
        (this.otherEncodingNames = n),
        m.VALUE_IDENTIFIER_TO_ECI.set(t, this),
        m.NAME_TO_ECI.set(r, this);
      const i = this.values;
      for (let t = 0, e = i.length; t !== e; t++) {
        const e = i[t];
        m.VALUES_TO_ECI.set(e, this);
      }
      for (const t of n) m.NAME_TO_ECI.set(t, this);
    }
    getValueIdentifier() {
      return this.valueIdentifier;
    }
    getName() {
      return this.name;
    }
    getValue() {
      return this.values[0];
    }
    static getCharacterSetECIByValue(t) {
      if (t < 0 || t >= 900) throw new E('incorect value');
      const e = m.VALUES_TO_ECI.get(t);
      if (void 0 === e) throw new E('incorect value');
      return e;
    }
    static getCharacterSetECIByName(t) {
      const e = m.NAME_TO_ECI.get(t);
      if (void 0 === e) throw new E('incorect value');
      return e;
    }
    equals(t) {
      if (!(t instanceof m)) return !1;
      const e = t;
      return this.getName() === e.getName();
    }
  }
  (m.VALUE_IDENTIFIER_TO_ECI = new Map()),
    (m.VALUES_TO_ECI = new Map()),
    (m.NAME_TO_ECI = new Map()),
    (m.Cp437 = new m(A.Cp437, Int32Array.from([0, 2]), 'Cp437')),
    (m.ISO8859_1 = new m(A.ISO8859_1, Int32Array.from([1, 3]), 'ISO-8859-1', 'ISO88591', 'ISO8859_1')),
    (m.ISO8859_2 = new m(A.ISO8859_2, 4, 'ISO-8859-2', 'ISO88592', 'ISO8859_2')),
    (m.ISO8859_3 = new m(A.ISO8859_3, 5, 'ISO-8859-3', 'ISO88593', 'ISO8859_3')),
    (m.ISO8859_4 = new m(A.ISO8859_4, 6, 'ISO-8859-4', 'ISO88594', 'ISO8859_4')),
    (m.ISO8859_5 = new m(A.ISO8859_5, 7, 'ISO-8859-5', 'ISO88595', 'ISO8859_5')),
    (m.ISO8859_6 = new m(A.ISO8859_6, 8, 'ISO-8859-6', 'ISO88596', 'ISO8859_6')),
    (m.ISO8859_7 = new m(A.ISO8859_7, 9, 'ISO-8859-7', 'ISO88597', 'ISO8859_7')),
    (m.ISO8859_8 = new m(A.ISO8859_8, 10, 'ISO-8859-8', 'ISO88598', 'ISO8859_8')),
    (m.ISO8859_9 = new m(A.ISO8859_9, 11, 'ISO-8859-9', 'ISO88599', 'ISO8859_9')),
    (m.ISO8859_10 = new m(A.ISO8859_10, 12, 'ISO-8859-10', 'ISO885910', 'ISO8859_10')),
    (m.ISO8859_11 = new m(A.ISO8859_11, 13, 'ISO-8859-11', 'ISO885911', 'ISO8859_11')),
    (m.ISO8859_13 = new m(A.ISO8859_13, 15, 'ISO-8859-13', 'ISO885913', 'ISO8859_13')),
    (m.ISO8859_14 = new m(A.ISO8859_14, 16, 'ISO-8859-14', 'ISO885914', 'ISO8859_14')),
    (m.ISO8859_15 = new m(A.ISO8859_15, 17, 'ISO-8859-15', 'ISO885915', 'ISO8859_15')),
    (m.ISO8859_16 = new m(A.ISO8859_16, 18, 'ISO-8859-16', 'ISO885916', 'ISO8859_16')),
    (m.SJIS = new m(A.SJIS, 20, 'SJIS', 'Shift_JIS')),
    (m.Cp1250 = new m(A.Cp1250, 21, 'Cp1250', 'windows-1250')),
    (m.Cp1251 = new m(A.Cp1251, 22, 'Cp1251', 'windows-1251')),
    (m.Cp1252 = new m(A.Cp1252, 23, 'Cp1252', 'windows-1252')),
    (m.Cp1256 = new m(A.Cp1256, 24, 'Cp1256', 'windows-1256')),
    (m.UnicodeBigUnmarked = new m(A.UnicodeBigUnmarked, 25, 'UnicodeBigUnmarked', 'UTF-16BE', 'UnicodeBig')),
    (m.UTF8 = new m(A.UTF8, 26, 'UTF8', 'UTF-8')),
    (m.ASCII = new m(A.ASCII, Int32Array.from([27, 170]), 'ASCII', 'US-ASCII')),
    (m.Big5 = new m(A.Big5, 28, 'Big5')),
    (m.GB18030 = new m(A.GB18030, 29, 'GB18030', 'GB2312', 'EUC_CN', 'GBK')),
    (m.EUC_KR = new m(A.EUC_KR, 30, 'EUC_KR', 'EUC-KR'));
  class _ extends i {}
  _.kind = 'UnsupportedOperationException';
  class I {
    static decode(t, e) {
      const r = this.encodingName(e);
      return this.customDecoder
        ? this.customDecoder(t, r)
        : 'undefined' == typeof TextDecoder || this.shouldDecodeOnFallback(r)
        ? this.decodeFallback(t, r)
        : new TextDecoder(r).decode(t);
    }
    static shouldDecodeOnFallback(t) {
      return !I.isBrowser() && 'ISO-8859-1' === t;
    }
    static encode(t, e) {
      const r = this.encodingName(e);
      return this.customEncoder
        ? this.customEncoder(t, r)
        : 'undefined' == typeof TextEncoder
        ? this.encodeFallback(t)
        : new TextEncoder().encode(t);
    }
    static isBrowser() {
      return 'undefined' != typeof window && '[object Window]' === {}.toString.call(window);
    }
    static encodingName(t) {
      return 'string' == typeof t ? t : t.getName();
    }
    static encodingCharacterSet(t) {
      return t instanceof m ? t : m.getCharacterSetECIByName(t);
    }
    static decodeFallback(t, e) {
      const r = this.encodingCharacterSet(e);
      if (I.isDecodeFallbackSupported(r)) {
        let e = '';
        for (let r = 0, n = t.length; r < n; r++) {
          let n = t[r].toString(16);
          n.length < 2 && (n = '0' + n), (e += '%' + n);
        }
        return decodeURIComponent(e);
      }
      if (r.equals(m.UnicodeBigUnmarked)) return String.fromCharCode.apply(null, new Uint16Array(t.buffer));
      throw new _(`Encoding ${this.encodingName(e)} not supported by fallback.`);
    }
    static isDecodeFallbackSupported(t) {
      return t.equals(m.UTF8) || t.equals(m.ISO8859_1) || t.equals(m.ASCII);
    }
    static encodeFallback(t) {
      const e = btoa(unescape(encodeURIComponent(t))).split(''),
        r = [];
      for (let t = 0; t < e.length; t++) r.push(e[t].charCodeAt(0));
      return new Uint8Array(r);
    }
  }
  class S {
    static castAsNonUtf8Char(t, e = null) {
      const r = e ? e.getName() : this.ISO88591;
      return I.decode(new Uint8Array([t]), r);
    }
    static guessEncoding(t, e) {
      if (null != e && void 0 !== e.get(C.CHARACTER_SET)) return e.get(C.CHARACTER_SET).toString();
      const r = t.length;
      let n = !0,
        i = !0,
        s = !0,
        o = 0,
        a = 0,
        l = 0,
        h = 0,
        c = 0,
        u = 0,
        d = 0,
        g = 0,
        f = 0,
        w = 0,
        A = 0;
      const E = t.length > 3 && 239 === t[0] && 187 === t[1] && 191 === t[2];
      for (let e = 0; e < r && (n || i || s); e++) {
        const r = 255 & t[e];
        s &&
          (o > 0
            ? 0 == (128 & r)
              ? (s = !1)
              : o--
            : 0 != (128 & r) &&
              (0 == (64 & r)
                ? (s = !1)
                : (o++, 0 == (32 & r) ? a++ : (o++, 0 == (16 & r) ? l++ : (o++, 0 == (8 & r) ? h++ : (s = !1)))))),
          n && (r > 127 && r < 160 ? (n = !1) : r > 159 && (r < 192 || 215 === r || 247 === r) && A++),
          i &&
            (c > 0
              ? r < 64 || 127 === r || r > 252
                ? (i = !1)
                : c--
              : 128 === r || 160 === r || r > 239
              ? (i = !1)
              : r > 160 && r < 224
              ? (u++, (g = 0), d++, d > f && (f = d))
              : r > 127
              ? (c++, (d = 0), g++, g > w && (w = g))
              : ((d = 0), (g = 0)));
      }
      return (
        s && o > 0 && (s = !1),
        i && c > 0 && (i = !1),
        s && (E || a + l + h > 0)
          ? S.UTF8
          : i && (S.ASSUME_SHIFT_JIS || f >= 3 || w >= 3)
          ? S.SHIFT_JIS
          : n && i
          ? (2 === f && 2 === u) || 10 * A >= r
            ? S.SHIFT_JIS
            : S.ISO88591
          : n
          ? S.ISO88591
          : i
          ? S.SHIFT_JIS
          : s
          ? S.UTF8
          : S.PLATFORM_DEFAULT_ENCODING
      );
    }
    static format(t, ...e) {
      let r = -1;
      return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function (t, n, i, s, o, a) {
        if ('%%' === t) return '%';
        if (void 0 === e[++r]) return;
        t = s ? parseInt(s.substr(1)) : void 0;
        let l,
          h = o ? parseInt(o.substr(1)) : void 0;
        switch (a) {
          case 's':
            l = e[r];
            break;
          case 'c':
            l = e[r][0];
            break;
          case 'f':
            l = parseFloat(e[r]).toFixed(t);
            break;
          case 'p':
            l = parseFloat(e[r]).toPrecision(t);
            break;
          case 'e':
            l = parseFloat(e[r]).toExponential(t);
            break;
          case 'x':
            l = parseInt(e[r]).toString(h || 16);
            break;
          case 'd':
            l = parseFloat(parseInt(e[r], h || 10).toPrecision(t)).toFixed(0);
        }
        l = 'object' == typeof l ? JSON.stringify(l) : (+l).toString(h);
        let c = parseInt(i),
          u = i && i[0] + '' == '0' ? '0' : ' ';
        for (; l.length < c; ) l = void 0 !== n ? l + u : u + l;
        return l;
      });
    }
    static getBytes(t, e) {
      return I.encode(t, e);
    }
    static getCharCode(t, e = 0) {
      return t.charCodeAt(e);
    }
    static getCharAt(t) {
      return String.fromCharCode(t);
    }
  }
  (S.SHIFT_JIS = m.SJIS.getName()),
    (S.GB2312 = 'GB2312'),
    (S.ISO88591 = m.ISO8859_1.getName()),
    (S.EUC_JP = 'EUC_JP'),
    (S.UTF8 = m.UTF8.getName()),
    (S.PLATFORM_DEFAULT_ENCODING = S.UTF8),
    (S.ASSUME_SHIFT_JIS = !1);
  class p {
    constructor(t = '') {
      this.value = t;
    }
    enableDecoding(t) {
      return (this.encoding = t), this;
    }
    append(t) {
      return (
        'string' == typeof t
          ? (this.value += t.toString())
          : this.encoding
          ? (this.value += S.castAsNonUtf8Char(t, this.encoding))
          : (this.value += String.fromCharCode(t)),
        this
      );
    }
    appendChars(t, e, r) {
      for (let n = e; e < e + r; n++) this.append(t[n]);
      return this;
    }
    length() {
      return this.value.length;
    }
    charAt(t) {
      return this.value.charAt(t);
    }
    deleteCharAt(t) {
      this.value = this.value.substr(0, t) + this.value.substring(t + 1);
    }
    setCharAt(t, e) {
      this.value = this.value.substr(0, t) + e + this.value.substr(t + 1);
    }
    substring(t, e) {
      return this.value.substring(t, e);
    }
    setLengthToZero() {
      this.value = '';
    }
    toString() {
      return this.value;
    }
    insert(t, e) {
      this.value = this.value.substr(0, t) + e + this.value.substr(t + e.length);
    }
  }
  class T {
    constructor(t, e, r, n) {
      if (
        ((this.width = t),
        (this.height = e),
        (this.rowSize = r),
        (this.bits = n),
        null == e && (e = t),
        (this.height = e),
        t < 1 || e < 1)
      )
        throw new o('Both dimensions must be greater than 0');
      null == r && (r = Math.floor((t + 31) / 32)),
        (this.rowSize = r),
        null == n && (this.bits = new Int32Array(this.rowSize * this.height));
    }
    static parseFromBooleanArray(t) {
      const e = t.length,
        r = t[0].length,
        n = new T(r, e);
      for (let i = 0; i < e; i++) {
        const e = t[i];
        for (let t = 0; t < r; t++) e[t] && n.set(t, i);
      }
      return n;
    }
    static parseFromString(t, e, r) {
      if (null === t) throw new o('stringRepresentation cannot be null');
      const n = new Array(t.length);
      let i = 0,
        s = 0,
        a = -1,
        l = 0,
        h = 0;
      for (; h < t.length; )
        if ('\n' === t.charAt(h) || '\r' === t.charAt(h)) {
          if (i > s) {
            if (-1 === a) a = i - s;
            else if (i - s !== a) throw new o('row lengths do not match');
            (s = i), l++;
          }
          h++;
        } else if (t.substring(h, h + e.length) === e) (h += e.length), (n[i] = !0), i++;
        else {
          if (t.substring(h, h + r.length) !== r) throw new o('illegal character encountered: ' + t.substring(h));
          (h += r.length), (n[i] = !1), i++;
        }
      if (i > s) {
        if (-1 === a) a = i - s;
        else if (i - s !== a) throw new o('row lengths do not match');
        l++;
      }
      const c = new T(a, l);
      for (let t = 0; t < i; t++) n[t] && c.set(Math.floor(t % a), Math.floor(t / a));
      return c;
    }
    get(t, e) {
      const r = e * this.rowSize + Math.floor(t / 32);
      return 0 != ((this.bits[r] >>> (31 & t)) & 1);
    }
    set(t, e) {
      const r = e * this.rowSize + Math.floor(t / 32);
      this.bits[r] |= (1 << (31 & t)) & 4294967295;
    }
    unset(t, e) {
      const r = e * this.rowSize + Math.floor(t / 32);
      this.bits[r] &= ~((1 << (31 & t)) & 4294967295);
    }
    flip(t, e) {
      const r = e * this.rowSize + Math.floor(t / 32);
      this.bits[r] ^= (1 << (31 & t)) & 4294967295;
    }
    xor(t) {
      if (this.width !== t.getWidth() || this.height !== t.getHeight() || this.rowSize !== t.getRowSize())
        throw new o('input matrix dimensions do not match');
      const e = new w(Math.floor(this.width / 32) + 1),
        r = this.rowSize,
        n = this.bits;
      for (let i = 0, s = this.height; i < s; i++) {
        const s = i * r,
          o = t.getRow(i, e).getBitArray();
        for (let t = 0; t < r; t++) n[s + t] ^= o[t];
      }
    }
    clear() {
      const t = this.bits,
        e = t.length;
      for (let r = 0; r < e; r++) t[r] = 0;
    }
    setRegion(t, e, r, n) {
      if (e < 0 || t < 0) throw new o('Left and top must be nonnegative');
      if (n < 1 || r < 1) throw new o('Height and width must be at least 1');
      const i = t + r,
        s = e + n;
      if (s > this.height || i > this.width) throw new o('The region must fit inside the matrix');
      const a = this.rowSize,
        l = this.bits;
      for (let r = e; r < s; r++) {
        const e = r * a;
        for (let r = t; r < i; r++) l[e + Math.floor(r / 32)] |= (1 << (31 & r)) & 4294967295;
      }
    }
    getRow(t, e) {
      null == e || e.getSize() < this.width ? (e = new w(this.width)) : e.clear();
      const r = this.rowSize,
        n = this.bits,
        i = t * r;
      for (let t = 0; t < r; t++) e.setBulk(32 * t, n[i + t]);
      return e;
    }
    setRow(t, e) {
      c.arraycopy(e.getBitArray(), 0, this.bits, t * this.rowSize, this.rowSize);
    }
    rotate180() {
      const t = this.getWidth(),
        e = this.getHeight();
      let r = new w(t),
        n = new w(t);
      for (let t = 0, i = Math.floor((e + 1) / 2); t < i; t++)
        (r = this.getRow(t, r)),
          (n = this.getRow(e - 1 - t, n)),
          r.reverse(),
          n.reverse(),
          this.setRow(t, n),
          this.setRow(e - 1 - t, r);
    }
    getEnclosingRectangle() {
      const t = this.width,
        e = this.height,
        r = this.rowSize,
        n = this.bits;
      let i = t,
        s = e,
        o = -1,
        a = -1;
      for (let t = 0; t < e; t++)
        for (let e = 0; e < r; e++) {
          const l = n[t * r + e];
          if (0 !== l) {
            if ((t < s && (s = t), t > a && (a = t), 32 * e < i)) {
              let t = 0;
              for (; 0 == ((l << (31 - t)) & 4294967295); ) t++;
              32 * e + t < i && (i = 32 * e + t);
            }
            if (32 * e + 31 > o) {
              let t = 31;
              for (; l >>> t == 0; ) t--;
              32 * e + t > o && (o = 32 * e + t);
            }
          }
        }
      return o < i || a < s ? null : Int32Array.from([i, s, o - i + 1, a - s + 1]);
    }
    getTopLeftOnBit() {
      const t = this.rowSize,
        e = this.bits;
      let r = 0;
      for (; r < e.length && 0 === e[r]; ) r++;
      if (r === e.length) return null;
      const n = r / t;
      let i = (r % t) * 32;
      const s = e[r];
      let o = 0;
      for (; 0 == ((s << (31 - o)) & 4294967295); ) o++;
      return (i += o), Int32Array.from([i, n]);
    }
    getBottomRightOnBit() {
      const t = this.rowSize,
        e = this.bits;
      let r = e.length - 1;
      for (; r >= 0 && 0 === e[r]; ) r--;
      if (r < 0) return null;
      const n = Math.floor(r / t);
      let i = 32 * Math.floor(r % t);
      const s = e[r];
      let o = 31;
      for (; s >>> o == 0; ) o--;
      return (i += o), Int32Array.from([i, n]);
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    getRowSize() {
      return this.rowSize;
    }
    equals(t) {
      if (!(t instanceof T)) return !1;
      const e = t;
      return (
        this.width === e.width && this.height === e.height && this.rowSize === e.rowSize && g.equals(this.bits, e.bits)
      );
    }
    hashCode() {
      let t = this.width;
      return (
        (t = 31 * t + this.width),
        (t = 31 * t + this.height),
        (t = 31 * t + this.rowSize),
        (t = 31 * t + g.hashCode(this.bits)),
        t
      );
    }
    toString(t = 'X ', e = '  ', r = '\n') {
      return this.buildToString(t, e, r);
    }
    buildToString(t, e, r) {
      let n = new p();
      for (let i = 0, s = this.height; i < s; i++) {
        for (let r = 0, s = this.width; r < s; r++) n.append(this.get(r, i) ? t : e);
        n.append(r);
      }
      return n.toString();
    }
    clone() {
      return new T(this.width, this.height, this.rowSize, this.bits.slice());
    }
  }
  class R extends i {
    static getNotFoundInstance() {
      return new R();
    }
  }
  R.kind = 'NotFoundException';
  class N extends h {
    constructor(t) {
      super(t), (this.luminances = N.EMPTY), (this.buckets = new Int32Array(N.LUMINANCE_BUCKETS));
    }
    getBlackRow(t, e) {
      const r = this.getLuminanceSource(),
        n = r.getWidth();
      null == e || e.getSize() < n ? (e = new w(n)) : e.clear(), this.initArrays(n);
      const i = r.getRow(t, this.luminances),
        s = this.buckets;
      for (let t = 0; t < n; t++) s[(255 & i[t]) >> N.LUMINANCE_SHIFT]++;
      const o = N.estimateBlackPoint(s);
      if (n < 3) for (let t = 0; t < n; t++) (255 & i[t]) < o && e.set(t);
      else {
        let t = 255 & i[0],
          r = 255 & i[1];
        for (let s = 1; s < n - 1; s++) {
          const n = 255 & i[s + 1];
          (4 * r - t - n) / 2 < o && e.set(s), (t = r), (r = n);
        }
      }
      return e;
    }
    getBlackMatrix() {
      const t = this.getLuminanceSource(),
        e = t.getWidth(),
        r = t.getHeight(),
        n = new T(e, r);
      this.initArrays(e);
      const i = this.buckets;
      for (let n = 1; n < 5; n++) {
        const s = Math.floor((r * n) / 5),
          o = t.getRow(s, this.luminances),
          a = Math.floor((4 * e) / 5);
        for (let t = Math.floor(e / 5); t < a; t++) {
          i[(255 & o[t]) >> N.LUMINANCE_SHIFT]++;
        }
      }
      const s = N.estimateBlackPoint(i),
        o = t.getMatrix();
      for (let t = 0; t < r; t++) {
        const r = t * e;
        for (let i = 0; i < e; i++) {
          (255 & o[r + i]) < s && n.set(i, t);
        }
      }
      return n;
    }
    createBinarizer(t) {
      return new N(t);
    }
    initArrays(t) {
      this.luminances.length < t && (this.luminances = new Uint8ClampedArray(t));
      const e = this.buckets;
      for (let t = 0; t < N.LUMINANCE_BUCKETS; t++) e[t] = 0;
    }
    static estimateBlackPoint(t) {
      const e = t.length;
      let r = 0,
        n = 0,
        i = 0;
      for (let s = 0; s < e; s++) t[s] > i && ((n = s), (i = t[s])), t[s] > r && (r = t[s]);
      let s = 0,
        o = 0;
      for (let r = 0; r < e; r++) {
        const e = r - n,
          i = t[r] * e * e;
        i > o && ((s = r), (o = i));
      }
      if (n > s) {
        const t = n;
        (n = s), (s = t);
      }
      if (s - n <= e / 16) throw new R();
      let a = s - 1,
        l = -1;
      for (let e = s - 1; e > n; e--) {
        const i = e - n,
          o = i * i * (s - e) * (r - t[e]);
        o > l && ((a = e), (l = o));
      }
      return a << N.LUMINANCE_SHIFT;
    }
  }
  (N.LUMINANCE_BITS = 5),
    (N.LUMINANCE_SHIFT = 8 - N.LUMINANCE_BITS),
    (N.LUMINANCE_BUCKETS = 1 << N.LUMINANCE_BITS),
    (N.EMPTY = Uint8ClampedArray.from([0]));
  class D extends N {
    constructor(t) {
      super(t), (this.matrix = null);
    }
    getBlackMatrix() {
      if (null !== this.matrix) return this.matrix;
      const t = this.getLuminanceSource(),
        e = t.getWidth(),
        r = t.getHeight();
      if (e >= D.MINIMUM_DIMENSION && r >= D.MINIMUM_DIMENSION) {
        const n = t.getMatrix();
        let i = e >> D.BLOCK_SIZE_POWER;
        0 != (e & D.BLOCK_SIZE_MASK) && i++;
        let s = r >> D.BLOCK_SIZE_POWER;
        0 != (r & D.BLOCK_SIZE_MASK) && s++;
        const o = D.calculateBlackPoints(n, i, s, e, r),
          a = new T(e, r);
        D.calculateThresholdForBlock(n, i, s, e, r, o, a), (this.matrix = a);
      } else this.matrix = super.getBlackMatrix();
      return this.matrix;
    }
    createBinarizer(t) {
      return new D(t);
    }
    static calculateThresholdForBlock(t, e, r, n, i, s, o) {
      const a = i - D.BLOCK_SIZE,
        l = n - D.BLOCK_SIZE;
      for (let i = 0; i < r; i++) {
        let h = i << D.BLOCK_SIZE_POWER;
        h > a && (h = a);
        const c = D.cap(i, 2, r - 3);
        for (let r = 0; r < e; r++) {
          let i = r << D.BLOCK_SIZE_POWER;
          i > l && (i = l);
          const a = D.cap(r, 2, e - 3);
          let u = 0;
          for (let t = -2; t <= 2; t++) {
            const e = s[c + t];
            u += e[a - 2] + e[a - 1] + e[a] + e[a + 1] + e[a + 2];
          }
          const d = u / 25;
          D.thresholdBlock(t, i, h, d, n, o);
        }
      }
    }
    static cap(t, e, r) {
      return t < e ? e : t > r ? r : t;
    }
    static thresholdBlock(t, e, r, n, i, s) {
      for (let o = 0, a = r * i + e; o < D.BLOCK_SIZE; o++, a += i)
        for (let i = 0; i < D.BLOCK_SIZE; i++) (255 & t[a + i]) <= n && s.set(e + i, r + o);
    }
    static calculateBlackPoints(t, e, r, n, i) {
      const s = i - D.BLOCK_SIZE,
        o = n - D.BLOCK_SIZE,
        a = new Array(r);
      for (let i = 0; i < r; i++) {
        a[i] = new Int32Array(e);
        let r = i << D.BLOCK_SIZE_POWER;
        r > s && (r = s);
        for (let s = 0; s < e; s++) {
          let e = s << D.BLOCK_SIZE_POWER;
          e > o && (e = o);
          let l = 0,
            h = 255,
            c = 0;
          for (let i = 0, s = r * n + e; i < D.BLOCK_SIZE; i++, s += n) {
            for (let e = 0; e < D.BLOCK_SIZE; e++) {
              const r = 255 & t[s + e];
              (l += r), r < h && (h = r), r > c && (c = r);
            }
            if (c - h > D.MIN_DYNAMIC_RANGE)
              for (i++, s += n; i < D.BLOCK_SIZE; i++, s += n)
                for (let e = 0; e < D.BLOCK_SIZE; e++) l += 255 & t[s + e];
          }
          let u = l >> (2 * D.BLOCK_SIZE_POWER);
          if (c - h <= D.MIN_DYNAMIC_RANGE && ((u = h / 2), i > 0 && s > 0)) {
            const t = (a[i - 1][s] + 2 * a[i][s - 1] + a[i - 1][s - 1]) / 4;
            h < t && (u = t);
          }
          a[i][s] = u;
        }
      }
      return a;
    }
  }
  (D.BLOCK_SIZE_POWER = 3),
    (D.BLOCK_SIZE = 1 << D.BLOCK_SIZE_POWER),
    (D.BLOCK_SIZE_MASK = D.BLOCK_SIZE - 1),
    (D.MINIMUM_DIMENSION = 5 * D.BLOCK_SIZE),
    (D.MIN_DYNAMIC_RANGE = 24);
  class y {
    constructor(t, e) {
      (this.width = t), (this.height = e);
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    isCropSupported() {
      return !1;
    }
    crop(t, e, r, n) {
      throw new _('This luminance source does not support cropping.');
    }
    isRotateSupported() {
      return !1;
    }
    rotateCounterClockwise() {
      throw new _('This luminance source does not support rotation by 90 degrees.');
    }
    rotateCounterClockwise45() {
      throw new _('This luminance source does not support rotation by 45 degrees.');
    }
    toString() {
      const t = new Uint8ClampedArray(this.width);
      let e = new p();
      for (let r = 0; r < this.height; r++) {
        const n = this.getRow(r, t);
        for (let t = 0; t < this.width; t++) {
          const r = 255 & n[t];
          let i;
          (i = r < 64 ? '#' : r < 128 ? '+' : r < 192 ? '.' : ' '), e.append(i);
        }
        e.append('\n');
      }
      return e.toString();
    }
  }
  class O extends y {
    constructor(t) {
      super(t.getWidth(), t.getHeight()), (this.delegate = t);
    }
    getRow(t, e) {
      const r = this.delegate.getRow(t, e),
        n = this.getWidth();
      for (let t = 0; t < n; t++) r[t] = 255 - (255 & r[t]);
      return r;
    }
    getMatrix() {
      const t = this.delegate.getMatrix(),
        e = this.getWidth() * this.getHeight(),
        r = new Uint8ClampedArray(e);
      for (let n = 0; n < e; n++) r[n] = 255 - (255 & t[n]);
      return r;
    }
    isCropSupported() {
      return this.delegate.isCropSupported();
    }
    crop(t, e, r, n) {
      return new O(this.delegate.crop(t, e, r, n));
    }
    isRotateSupported() {
      return this.delegate.isRotateSupported();
    }
    invert() {
      return this.delegate;
    }
    rotateCounterClockwise() {
      return new O(this.delegate.rotateCounterClockwise());
    }
    rotateCounterClockwise45() {
      return new O(this.delegate.rotateCounterClockwise45());
    }
  }
  class M extends y {
    constructor(t) {
      super(t.width, t.height),
        (this.canvas = t),
        (this.tempCanvasElement = null),
        (this.buffer = M.makeBufferFromCanvasImageData(t));
    }
    static makeBufferFromCanvasImageData(t) {
      const e = t.getContext('2d').getImageData(0, 0, t.width, t.height);
      return M.toGrayscaleBuffer(e.data, t.width, t.height);
    }
    static toGrayscaleBuffer(t, e, r) {
      const n = new Uint8ClampedArray(e * r);
      for (let e = 0, r = 0, i = t.length; e < i; e += 4, r++) {
        let i;
        if (0 === t[e + 3]) i = 255;
        else {
          i = (306 * t[e] + 601 * t[e + 1] + 117 * t[e + 2] + 512) >> 10;
        }
        n[r] = i;
      }
      return n;
    }
    getRow(t, e) {
      if (t < 0 || t >= this.getHeight()) throw new o('Requested row is outside the image: ' + t);
      const r = this.getWidth(),
        n = t * r;
      return (
        null === e
          ? (e = this.buffer.slice(n, n + r))
          : (e.length < r && (e = new Uint8ClampedArray(r)), e.set(this.buffer.slice(n, n + r))),
        e
      );
    }
    getMatrix() {
      return this.buffer;
    }
    isCropSupported() {
      return !0;
    }
    crop(t, e, r, n) {
      return super.crop(t, e, r, n), this;
    }
    isRotateSupported() {
      return !0;
    }
    rotateCounterClockwise() {
      return this.rotate(-90), this;
    }
    rotateCounterClockwise45() {
      return this.rotate(-45), this;
    }
    getTempCanvasElement() {
      if (null === this.tempCanvasElement) {
        const t = this.canvas.ownerDocument.createElement('canvas');
        (t.width = this.canvas.width), (t.height = this.canvas.height), (this.tempCanvasElement = t);
      }
      return this.tempCanvasElement;
    }
    rotate(t) {
      const e = this.getTempCanvasElement(),
        r = e.getContext('2d'),
        n = t * M.DEGREE_TO_RADIANS,
        i = this.canvas.width,
        s = this.canvas.height,
        o = Math.ceil(Math.abs(Math.cos(n)) * i + Math.abs(Math.sin(n)) * s),
        a = Math.ceil(Math.abs(Math.sin(n)) * i + Math.abs(Math.cos(n)) * s);
      return (
        (e.width = o),
        (e.height = a),
        r.translate(o / 2, a / 2),
        r.rotate(n),
        r.drawImage(this.canvas, i / -2, s / -2),
        (this.buffer = M.makeBufferFromCanvasImageData(e)),
        this
      );
    }
    invert() {
      return new O(this);
    }
  }
  M.DEGREE_TO_RADIANS = Math.PI / 180;
  class B {
    constructor(t, e, r) {
      (this.deviceId = t), (this.label = e), (this.kind = 'videoinput'), (this.groupId = r || void 0);
    }
    toJSON() {
      return { kind: this.kind, groupId: this.groupId, deviceId: this.deviceId, label: this.label };
    }
  }
  var b,
    P =
      (globalThis || global || self || window
        ? (globalThis || global || self || window || void 0).__awaiter
        : void 0) ||
      function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(t) {
            try {
              l(n.next(t));
            } catch (t) {
              s(t);
            }
          }
          function a(t) {
            try {
              l(n.throw(t));
            } catch (t) {
              s(t);
            }
          }
          function l(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(o, a);
          }
          l((n = n.apply(t, e || [])).next());
        });
      };
  class L {
    constructor(t, e = 500, r) {
      (this.reader = t),
        (this.timeBetweenScansMillis = e),
        (this._hints = r),
        (this._stopContinuousDecode = !1),
        (this._stopAsyncDecode = !1),
        (this._timeBetweenDecodingAttempts = 0);
    }
    get hasNavigator() {
      return 'undefined' != typeof navigator;
    }
    get isMediaDevicesSuported() {
      return this.hasNavigator && !!navigator.mediaDevices;
    }
    get canEnumerateDevices() {
      return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices);
    }
    get timeBetweenDecodingAttempts() {
      return this._timeBetweenDecodingAttempts;
    }
    set timeBetweenDecodingAttempts(t) {
      this._timeBetweenDecodingAttempts = t < 0 ? 0 : t;
    }
    set hints(t) {
      this._hints = t || null;
    }
    get hints() {
      return this._hints;
    }
    listVideoInputDevices() {
      return P(this, void 0, void 0, function* () {
        if (!this.hasNavigator) throw new Error("Can't enumerate devices, navigator is not present.");
        if (!this.canEnumerateDevices) throw new Error("Can't enumerate devices, method not supported.");
        const t = yield navigator.mediaDevices.enumerateDevices(),
          e = [];
        for (const r of t) {
          const t = 'video' === r.kind ? 'videoinput' : r.kind;
          if ('videoinput' !== t) continue;
          const n = {
            deviceId: r.deviceId || r.id,
            label: r.label || 'Video device ' + (e.length + 1),
            kind: t,
            groupId: r.groupId,
          };
          e.push(n);
        }
        return e;
      });
    }
    getVideoInputDevices() {
      return P(this, void 0, void 0, function* () {
        return (yield this.listVideoInputDevices()).map((t) => new B(t.deviceId, t.label));
      });
    }
    findDeviceById(t) {
      return P(this, void 0, void 0, function* () {
        const e = yield this.listVideoInputDevices();
        return e ? e.find((e) => e.deviceId === t) : null;
      });
    }
    decodeFromInputVideoDevice(t, e) {
      return P(this, void 0, void 0, function* () {
        return yield this.decodeOnceFromVideoDevice(t, e);
      });
    }
    decodeOnceFromVideoDevice(t, e) {
      return P(this, void 0, void 0, function* () {
        let r;
        this.reset(), (r = t ? { deviceId: { exact: t } } : { facingMode: 'environment' });
        const n = { video: r };
        return yield this.decodeOnceFromConstraints(n, e);
      });
    }
    decodeOnceFromConstraints(t, e) {
      return P(this, void 0, void 0, function* () {
        const r = yield navigator.mediaDevices.getUserMedia(t);
        return yield this.decodeOnceFromStream(r, e);
      });
    }
    decodeOnceFromStream(t, e) {
      return P(this, void 0, void 0, function* () {
        this.reset();
        const r = yield this.attachStreamToVideo(t, e);
        return yield this.decodeOnce(r);
      });
    }
    decodeFromInputVideoDeviceContinuously(t, e, r) {
      return P(this, void 0, void 0, function* () {
        return yield this.decodeFromVideoDevice(t, e, r);
      });
    }
    decodeFromVideoDevice(t, e, r) {
      return P(this, void 0, void 0, function* () {
        let n;
        n = t ? { deviceId: { exact: t } } : { facingMode: 'environment' };
        const i = { video: n };
        return yield this.decodeFromConstraints(i, e, r);
      });
    }
    decodeFromConstraints(t, e, r) {
      return P(this, void 0, void 0, function* () {
        const n = yield navigator.mediaDevices.getUserMedia(t);
        return yield this.decodeFromStream(n, e, r);
      });
    }
    decodeFromStream(t, e, r) {
      return P(this, void 0, void 0, function* () {
        this.reset();
        const n = yield this.attachStreamToVideo(t, e);
        return yield this.decodeContinuously(n, r);
      });
    }
    stopAsyncDecode() {
      this._stopAsyncDecode = !0;
    }
    stopContinuousDecode() {
      this._stopContinuousDecode = !0;
    }
    attachStreamToVideo(t, e) {
      return P(this, void 0, void 0, function* () {
        const r = this.prepareVideoElement(e);
        return (
          this.addVideoSource(r, t), (this.videoElement = r), (this.stream = t), yield this.playVideoOnLoadAsync(r), r
        );
      });
    }
    playVideoOnLoadAsync(t) {
      return new Promise((e, r) => this.playVideoOnLoad(t, () => e()));
    }
    playVideoOnLoad(t, e) {
      (this.videoEndedListener = () => this.stopStreams()),
        (this.videoCanPlayListener = () => this.tryPlayVideo(t)),
        t.addEventListener('ended', this.videoEndedListener),
        t.addEventListener('canplay', this.videoCanPlayListener),
        t.addEventListener('playing', e),
        this.tryPlayVideo(t);
    }
    isVideoPlaying(t) {
      return t.currentTime > 0 && !t.paused && !t.ended && t.readyState > 2;
    }
    tryPlayVideo(t) {
      return P(this, void 0, void 0, function* () {
        if (this.isVideoPlaying(t)) console.warn('Trying to play video that is already playing.');
        else
          try {
            yield t.play();
          } catch (t) {
            console.warn('It was not possible to play the video.');
          }
      });
    }
    getMediaElement(t, e) {
      const r = document.getElementById(t);
      if (!r) throw new s(`element with id '${t}' not found`);
      if (r.nodeName.toLowerCase() !== e.toLowerCase()) throw new s(`element with id '${t}' must be an ${e} element`);
      return r;
    }
    decodeFromImage(t, e) {
      if (!t && !e) throw new s('either imageElement with a src set or an url must be provided');
      return e && !t ? this.decodeFromImageUrl(e) : this.decodeFromImageElement(t);
    }
    decodeFromVideo(t, e) {
      if (!t && !e) throw new s('Either an element with a src set or an URL must be provided');
      return e && !t ? this.decodeFromVideoUrl(e) : this.decodeFromVideoElement(t);
    }
    decodeFromVideoContinuously(t, e, r) {
      if (void 0 === t && void 0 === e) throw new s('Either an element with a src set or an URL must be provided');
      return e && !t ? this.decodeFromVideoUrlContinuously(e, r) : this.decodeFromVideoElementContinuously(t, r);
    }
    decodeFromImageElement(t) {
      if (!t) throw new s('An image element must be provided.');
      this.reset();
      const e = this.prepareImageElement(t);
      let r;
      return (
        (this.imageElement = e),
        (r = this.isImageLoaded(e) ? this.decodeOnce(e, !1, !0) : this._decodeOnLoadImage(e)),
        r
      );
    }
    decodeFromVideoElement(t) {
      const e = this._decodeFromVideoElementSetup(t);
      return this._decodeOnLoadVideo(e);
    }
    decodeFromVideoElementContinuously(t, e) {
      const r = this._decodeFromVideoElementSetup(t);
      return this._decodeOnLoadVideoContinuously(r, e);
    }
    _decodeFromVideoElementSetup(t) {
      if (!t) throw new s('A video element must be provided.');
      this.reset();
      const e = this.prepareVideoElement(t);
      return (this.videoElement = e), e;
    }
    decodeFromImageUrl(t) {
      if (!t) throw new s('An URL must be provided.');
      this.reset();
      const e = this.prepareImageElement();
      this.imageElement = e;
      const r = this._decodeOnLoadImage(e);
      return (e.src = t), r;
    }
    decodeFromVideoUrl(t) {
      if (!t) throw new s('An URL must be provided.');
      this.reset();
      const e = this.prepareVideoElement(),
        r = this.decodeFromVideoElement(e);
      return (e.src = t), r;
    }
    decodeFromVideoUrlContinuously(t, e) {
      if (!t) throw new s('An URL must be provided.');
      this.reset();
      const r = this.prepareVideoElement(),
        n = this.decodeFromVideoElementContinuously(r, e);
      return (r.src = t), n;
    }
    _decodeOnLoadImage(t) {
      return new Promise((e, r) => {
        (this.imageLoadedListener = () => this.decodeOnce(t, !1, !0).then(e, r)),
          t.addEventListener('load', this.imageLoadedListener);
      });
    }
    _decodeOnLoadVideo(t) {
      return P(this, void 0, void 0, function* () {
        return yield this.playVideoOnLoadAsync(t), yield this.decodeOnce(t);
      });
    }
    _decodeOnLoadVideoContinuously(t, e) {
      return P(this, void 0, void 0, function* () {
        yield this.playVideoOnLoadAsync(t), this.decodeContinuously(t, e);
      });
    }
    isImageLoaded(t) {
      return !!t.complete && 0 !== t.naturalWidth;
    }
    prepareImageElement(t) {
      let e;
      return (
        void 0 === t && ((e = document.createElement('img')), (e.width = 200), (e.height = 200)),
        'string' == typeof t && (e = this.getMediaElement(t, 'img')),
        t instanceof HTMLImageElement && (e = t),
        e
      );
    }
    prepareVideoElement(t) {
      let e;
      return (
        t ||
          'undefined' == typeof document ||
          ((e = document.createElement('video')), (e.width = 200), (e.height = 200)),
        'string' == typeof t && (e = this.getMediaElement(t, 'video')),
        t instanceof HTMLVideoElement && (e = t),
        e.setAttribute('autoplay', 'true'),
        e.setAttribute('muted', 'true'),
        e.setAttribute('playsinline', 'true'),
        e
      );
    }
    decodeOnce(t, e = !0, r = !0) {
      this._stopAsyncDecode = !1;
      const n = (i, s) => {
        if (this._stopAsyncDecode)
          return (
            s(new R('Video stream has ended before any code could be detected.')), void (this._stopAsyncDecode = void 0)
          );
        try {
          i(this.decode(t));
        } catch (t) {
          const o = (t instanceof l || t instanceof E) && r;
          if ((e && t instanceof R) || o) return setTimeout(n, this._timeBetweenDecodingAttempts, i, s);
          s(t);
        }
      };
      return new Promise((t, e) => n(t, e));
    }
    decodeContinuously(t, e) {
      this._stopContinuousDecode = !1;
      const r = () => {
        if (this._stopContinuousDecode) this._stopContinuousDecode = void 0;
        else
          try {
            const n = this.decode(t);
            e(n, null), setTimeout(r, this.timeBetweenScansMillis);
          } catch (t) {
            e(null, t);
            const n = t instanceof R;
            (t instanceof l || t instanceof E || n) && setTimeout(r, this._timeBetweenDecodingAttempts);
          }
      };
      r();
    }
    decode(t) {
      const e = this.createBinaryBitmap(t);
      return this.decodeBitmap(e);
    }
    createBinaryBitmap(t) {
      const e = this.getCaptureCanvasContext(t);
      this.drawImageOnCanvas(e, t);
      const r = this.getCaptureCanvas(t),
        n = new M(r),
        i = new D(n);
      return new a(i);
    }
    getCaptureCanvasContext(t) {
      if (!this.captureCanvasContext) {
        const e = this.getCaptureCanvas(t).getContext('2d');
        this.captureCanvasContext = e;
      }
      return this.captureCanvasContext;
    }
    getCaptureCanvas(t) {
      if (!this.captureCanvas) {
        const e = this.createCaptureCanvas(t);
        this.captureCanvas = e;
      }
      return this.captureCanvas;
    }
    drawImageOnCanvas(t, e) {
      t.drawImage(e, 0, 0);
    }
    decodeBitmap(t) {
      return this.reader.decode(t, this._hints);
    }
    createCaptureCanvas(t) {
      if ('undefined' == typeof document) return this._destroyCaptureCanvas(), null;
      const e = document.createElement('canvas');
      let r, n;
      return (
        void 0 !== t &&
          (t instanceof HTMLVideoElement
            ? ((r = t.videoWidth), (n = t.videoHeight))
            : t instanceof HTMLImageElement && ((r = t.naturalWidth || t.width), (n = t.naturalHeight || t.height))),
        (e.style.width = r + 'px'),
        (e.style.height = n + 'px'),
        (e.width = r),
        (e.height = n),
        e
      );
    }
    stopStreams() {
      this.stream && (this.stream.getVideoTracks().forEach((t) => t.stop()), (this.stream = void 0)),
        !1 === this._stopAsyncDecode && this.stopAsyncDecode(),
        !1 === this._stopContinuousDecode && this.stopContinuousDecode();
    }
    reset() {
      this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas();
    }
    _destroyVideoElement() {
      this.videoElement &&
        (void 0 !== this.videoEndedListener && this.videoElement.removeEventListener('ended', this.videoEndedListener),
        void 0 !== this.videoPlayingEventListener &&
          this.videoElement.removeEventListener('playing', this.videoPlayingEventListener),
        void 0 !== this.videoCanPlayListener &&
          this.videoElement.removeEventListener('loadedmetadata', this.videoCanPlayListener),
        this.cleanVideoSource(this.videoElement),
        (this.videoElement = void 0));
    }
    _destroyImageElement() {
      this.imageElement &&
        (void 0 !== this.imageLoadedListener && this.imageElement.removeEventListener('load', this.imageLoadedListener),
        (this.imageElement.src = void 0),
        this.imageElement.removeAttribute('src'),
        (this.imageElement = void 0));
    }
    _destroyCaptureCanvas() {
      (this.captureCanvasContext = void 0), (this.captureCanvas = void 0);
    }
    addVideoSource(t, e) {
      try {
        t.srcObject = e;
      } catch (r) {
        t.src = URL.createObjectURL(e);
      }
    }
    cleanVideoSource(t) {
      try {
        t.srcObject = null;
      } catch (e) {
        t.src = '';
      }
      this.videoElement.removeAttribute('src');
    }
  }
  class F {
    constructor(t, e, r = null == e ? 0 : 8 * e.length, n, i, s = c.currentTimeMillis()) {
      (this.text = t),
        (this.rawBytes = e),
        (this.numBits = r),
        (this.resultPoints = n),
        (this.format = i),
        (this.timestamp = s),
        (this.text = t),
        (this.rawBytes = e),
        (this.numBits = null == r ? (null == e ? 0 : 8 * e.length) : r),
        (this.resultPoints = n),
        (this.format = i),
        (this.resultMetadata = null),
        (this.timestamp = null == s ? c.currentTimeMillis() : s);
    }
    getText() {
      return this.text;
    }
    getRawBytes() {
      return this.rawBytes;
    }
    getNumBits() {
      return this.numBits;
    }
    getResultPoints() {
      return this.resultPoints;
    }
    getBarcodeFormat() {
      return this.format;
    }
    getResultMetadata() {
      return this.resultMetadata;
    }
    putMetadata(t, e) {
      null === this.resultMetadata && (this.resultMetadata = new Map()), this.resultMetadata.set(t, e);
    }
    putAllMetadata(t) {
      null !== t && (null === this.resultMetadata ? (this.resultMetadata = t) : (this.resultMetadata = new Map(t)));
    }
    addResultPoints(t) {
      const e = this.resultPoints;
      if (null === e) this.resultPoints = t;
      else if (null !== t && t.length > 0) {
        const r = new Array(e.length + t.length);
        c.arraycopy(e, 0, r, 0, e.length), c.arraycopy(t, 0, r, e.length, t.length), (this.resultPoints = r);
      }
    }
    getTimestamp() {
      return this.timestamp;
    }
    toString() {
      return this.text;
    }
  }
  !(function (t) {
    (t[(t.AZTEC = 0)] = 'AZTEC'),
      (t[(t.CODABAR = 1)] = 'CODABAR'),
      (t[(t.CODE_39 = 2)] = 'CODE_39'),
      (t[(t.CODE_93 = 3)] = 'CODE_93'),
      (t[(t.CODE_128 = 4)] = 'CODE_128'),
      (t[(t.DATA_MATRIX = 5)] = 'DATA_MATRIX'),
      (t[(t.EAN_8 = 6)] = 'EAN_8'),
      (t[(t.EAN_13 = 7)] = 'EAN_13'),
      (t[(t.ITF = 8)] = 'ITF'),
      (t[(t.MAXICODE = 9)] = 'MAXICODE'),
      (t[(t.PDF_417 = 10)] = 'PDF_417'),
      (t[(t.QR_CODE = 11)] = 'QR_CODE'),
      (t[(t.RSS_14 = 12)] = 'RSS_14'),
      (t[(t.RSS_EXPANDED = 13)] = 'RSS_EXPANDED'),
      (t[(t.UPC_A = 14)] = 'UPC_A'),
      (t[(t.UPC_E = 15)] = 'UPC_E'),
      (t[(t.UPC_EAN_EXTENSION = 16)] = 'UPC_EAN_EXTENSION');
  })(b || (b = {}));
  var k,
    v = b;
  !(function (t) {
    (t[(t.OTHER = 0)] = 'OTHER'),
      (t[(t.ORIENTATION = 1)] = 'ORIENTATION'),
      (t[(t.BYTE_SEGMENTS = 2)] = 'BYTE_SEGMENTS'),
      (t[(t.ERROR_CORRECTION_LEVEL = 3)] = 'ERROR_CORRECTION_LEVEL'),
      (t[(t.ISSUE_NUMBER = 4)] = 'ISSUE_NUMBER'),
      (t[(t.SUGGESTED_PRICE = 5)] = 'SUGGESTED_PRICE'),
      (t[(t.POSSIBLE_COUNTRY = 6)] = 'POSSIBLE_COUNTRY'),
      (t[(t.UPC_EAN_EXTENSION = 7)] = 'UPC_EAN_EXTENSION'),
      (t[(t.PDF417_EXTRA_METADATA = 8)] = 'PDF417_EXTRA_METADATA'),
      (t[(t.STRUCTURED_APPEND_SEQUENCE = 9)] = 'STRUCTURED_APPEND_SEQUENCE'),
      (t[(t.STRUCTURED_APPEND_PARITY = 10)] = 'STRUCTURED_APPEND_PARITY');
  })(k || (k = {}));
  var x,
    V,
    U,
    H,
    G,
    X,
    W = k;
  class z {
    constructor(t, e, r, n, i = -1, s = -1) {
      (this.rawBytes = t),
        (this.text = e),
        (this.byteSegments = r),
        (this.ecLevel = n),
        (this.structuredAppendSequenceNumber = i),
        (this.structuredAppendParity = s),
        (this.numBits = null == t ? 0 : 8 * t.length);
    }
    getRawBytes() {
      return this.rawBytes;
    }
    getNumBits() {
      return this.numBits;
    }
    setNumBits(t) {
      this.numBits = t;
    }
    getText() {
      return this.text;
    }
    getByteSegments() {
      return this.byteSegments;
    }
    getECLevel() {
      return this.ecLevel;
    }
    getErrorsCorrected() {
      return this.errorsCorrected;
    }
    setErrorsCorrected(t) {
      this.errorsCorrected = t;
    }
    getErasures() {
      return this.erasures;
    }
    setErasures(t) {
      this.erasures = t;
    }
    getOther() {
      return this.other;
    }
    setOther(t) {
      this.other = t;
    }
    hasStructuredAppend() {
      return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
    }
    getStructuredAppendParity() {
      return this.structuredAppendParity;
    }
    getStructuredAppendSequenceNumber() {
      return this.structuredAppendSequenceNumber;
    }
  }
  class Y {
    exp(t) {
      return this.expTable[t];
    }
    log(t) {
      if (0 === t) throw new o();
      return this.logTable[t];
    }
    static addOrSubtract(t, e) {
      return t ^ e;
    }
  }
  class Z {
    constructor(t, e) {
      if (0 === e.length) throw new o();
      this.field = t;
      const r = e.length;
      if (r > 1 && 0 === e[0]) {
        let t = 1;
        for (; t < r && 0 === e[t]; ) t++;
        t === r
          ? (this.coefficients = Int32Array.from([0]))
          : ((this.coefficients = new Int32Array(r - t)),
            c.arraycopy(e, t, this.coefficients, 0, this.coefficients.length));
      } else this.coefficients = e;
    }
    getCoefficients() {
      return this.coefficients;
    }
    getDegree() {
      return this.coefficients.length - 1;
    }
    isZero() {
      return 0 === this.coefficients[0];
    }
    getCoefficient(t) {
      return this.coefficients[this.coefficients.length - 1 - t];
    }
    evaluateAt(t) {
      if (0 === t) return this.getCoefficient(0);
      const e = this.coefficients;
      let r;
      if (1 === t) {
        r = 0;
        for (let t = 0, n = e.length; t !== n; t++) {
          const n = e[t];
          r = Y.addOrSubtract(r, n);
        }
        return r;
      }
      r = e[0];
      const n = e.length,
        i = this.field;
      for (let s = 1; s < n; s++) r = Y.addOrSubtract(i.multiply(t, r), e[s]);
      return r;
    }
    addOrSubtract(t) {
      if (!this.field.equals(t.field)) throw new o('GenericGFPolys do not have same GenericGF field');
      if (this.isZero()) return t;
      if (t.isZero()) return this;
      let e = this.coefficients,
        r = t.coefficients;
      if (e.length > r.length) {
        const t = e;
        (e = r), (r = t);
      }
      let n = new Int32Array(r.length);
      const i = r.length - e.length;
      c.arraycopy(r, 0, n, 0, i);
      for (let t = i; t < r.length; t++) n[t] = Y.addOrSubtract(e[t - i], r[t]);
      return new Z(this.field, n);
    }
    multiply(t) {
      if (!this.field.equals(t.field)) throw new o('GenericGFPolys do not have same GenericGF field');
      if (this.isZero() || t.isZero()) return this.field.getZero();
      const e = this.coefficients,
        r = e.length,
        n = t.coefficients,
        i = n.length,
        s = new Int32Array(r + i - 1),
        a = this.field;
      for (let t = 0; t < r; t++) {
        const r = e[t];
        for (let e = 0; e < i; e++) s[t + e] = Y.addOrSubtract(s[t + e], a.multiply(r, n[e]));
      }
      return new Z(a, s);
    }
    multiplyScalar(t) {
      if (0 === t) return this.field.getZero();
      if (1 === t) return this;
      const e = this.coefficients.length,
        r = this.field,
        n = new Int32Array(e),
        i = this.coefficients;
      for (let s = 0; s < e; s++) n[s] = r.multiply(i[s], t);
      return new Z(r, n);
    }
    multiplyByMonomial(t, e) {
      if (t < 0) throw new o();
      if (0 === e) return this.field.getZero();
      const r = this.coefficients,
        n = r.length,
        i = new Int32Array(n + t),
        s = this.field;
      for (let t = 0; t < n; t++) i[t] = s.multiply(r[t], e);
      return new Z(s, i);
    }
    divide(t) {
      if (!this.field.equals(t.field)) throw new o('GenericGFPolys do not have same GenericGF field');
      if (t.isZero()) throw new o('Divide by 0');
      const e = this.field;
      let r = e.getZero(),
        n = this;
      const i = t.getCoefficient(t.getDegree()),
        s = e.inverse(i);
      for (; n.getDegree() >= t.getDegree() && !n.isZero(); ) {
        const i = n.getDegree() - t.getDegree(),
          o = e.multiply(n.getCoefficient(n.getDegree()), s),
          a = t.multiplyByMonomial(i, o),
          l = e.buildMonomial(i, o);
        (r = r.addOrSubtract(l)), (n = n.addOrSubtract(a));
      }
      return [r, n];
    }
    toString() {
      let t = '';
      for (let e = this.getDegree(); e >= 0; e--) {
        let r = this.getCoefficient(e);
        if (0 !== r) {
          if ((r < 0 ? ((t += ' - '), (r = -r)) : t.length > 0 && (t += ' + '), 0 === e || 1 !== r)) {
            const e = this.field.log(r);
            0 === e ? (t += '1') : 1 === e ? (t += 'a') : ((t += 'a^'), (t += e));
          }
          0 !== e && (1 === e ? (t += 'x') : ((t += 'x^'), (t += e)));
        }
      }
      return t;
    }
  }
  class K extends i {}
  K.kind = 'ArithmeticException';
  class q extends Y {
    constructor(t, e, r) {
      super(), (this.primitive = t), (this.size = e), (this.generatorBase = r);
      const n = new Int32Array(e);
      let i = 1;
      for (let r = 0; r < e; r++) (n[r] = i), (i *= 2), i >= e && ((i ^= t), (i &= e - 1));
      this.expTable = n;
      const s = new Int32Array(e);
      for (let t = 0; t < e - 1; t++) s[n[t]] = t;
      (this.logTable = s),
        (this.zero = new Z(this, Int32Array.from([0]))),
        (this.one = new Z(this, Int32Array.from([1])));
    }
    getZero() {
      return this.zero;
    }
    getOne() {
      return this.one;
    }
    buildMonomial(t, e) {
      if (t < 0) throw new o();
      if (0 === e) return this.zero;
      const r = new Int32Array(t + 1);
      return (r[0] = e), new Z(this, r);
    }
    inverse(t) {
      if (0 === t) throw new K();
      return this.expTable[this.size - this.logTable[t] - 1];
    }
    multiply(t, e) {
      return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.size - 1)];
    }
    getSize() {
      return this.size;
    }
    getGeneratorBase() {
      return this.generatorBase;
    }
    toString() {
      return 'GF(0x' + f.toHexString(this.primitive) + ',' + this.size + ')';
    }
    equals(t) {
      return t === this;
    }
  }
  (q.AZTEC_DATA_12 = new q(4201, 4096, 1)),
    (q.AZTEC_DATA_10 = new q(1033, 1024, 1)),
    (q.AZTEC_DATA_6 = new q(67, 64, 1)),
    (q.AZTEC_PARAM = new q(19, 16, 1)),
    (q.QR_CODE_FIELD_256 = new q(285, 256, 0)),
    (q.DATA_MATRIX_FIELD_256 = new q(301, 256, 1)),
    (q.AZTEC_DATA_8 = q.DATA_MATRIX_FIELD_256),
    (q.MAXICODE_FIELD_64 = q.AZTEC_DATA_6);
  class Q extends i {}
  Q.kind = 'ReedSolomonException';
  class j extends i {}
  j.kind = 'IllegalStateException';
  class J {
    constructor(t) {
      this.field = t;
    }
    decode(t, e) {
      const r = this.field,
        n = new Z(r, t),
        i = new Int32Array(e);
      let s = !0;
      for (let t = 0; t < e; t++) {
        const e = n.evaluateAt(r.exp(t + r.getGeneratorBase()));
        (i[i.length - 1 - t] = e), 0 !== e && (s = !1);
      }
      if (s) return;
      const o = new Z(r, i),
        a = this.runEuclideanAlgorithm(r.buildMonomial(e, 1), o, e),
        l = a[0],
        h = a[1],
        c = this.findErrorLocations(l),
        u = this.findErrorMagnitudes(h, c);
      for (let e = 0; e < c.length; e++) {
        const n = t.length - 1 - r.log(c[e]);
        if (n < 0) throw new Q('Bad error location');
        t[n] = q.addOrSubtract(t[n], u[e]);
      }
    }
    runEuclideanAlgorithm(t, e, r) {
      if (t.getDegree() < e.getDegree()) {
        const r = t;
        (t = e), (e = r);
      }
      const n = this.field;
      let i = t,
        s = e,
        o = n.getZero(),
        a = n.getOne();
      for (; s.getDegree() >= ((r / 2) | 0); ) {
        let t = i,
          e = o;
        if (((i = s), (o = a), i.isZero())) throw new Q('r_{i-1} was zero');
        s = t;
        let r = n.getZero();
        const l = i.getCoefficient(i.getDegree()),
          h = n.inverse(l);
        for (; s.getDegree() >= i.getDegree() && !s.isZero(); ) {
          const t = s.getDegree() - i.getDegree(),
            e = n.multiply(s.getCoefficient(s.getDegree()), h);
          (r = r.addOrSubtract(n.buildMonomial(t, e))), (s = s.addOrSubtract(i.multiplyByMonomial(t, e)));
        }
        if (((a = r.multiply(o).addOrSubtract(e)), s.getDegree() >= i.getDegree()))
          throw new j('Division algorithm failed to reduce polynomial?');
      }
      const l = a.getCoefficient(0);
      if (0 === l) throw new Q('sigmaTilde(0) was zero');
      const h = n.inverse(l);
      return [a.multiplyScalar(h), s.multiplyScalar(h)];
    }
    findErrorLocations(t) {
      const e = t.getDegree();
      if (1 === e) return Int32Array.from([t.getCoefficient(1)]);
      const r = new Int32Array(e);
      let n = 0;
      const i = this.field;
      for (let s = 1; s < i.getSize() && n < e; s++) 0 === t.evaluateAt(s) && ((r[n] = i.inverse(s)), n++);
      if (n !== e) throw new Q('Error locator degree does not match number of roots');
      return r;
    }
    findErrorMagnitudes(t, e) {
      const r = e.length,
        n = new Int32Array(r),
        i = this.field;
      for (let s = 0; s < r; s++) {
        const o = i.inverse(e[s]);
        let a = 1;
        for (let t = 0; t < r; t++)
          if (s !== t) {
            const r = i.multiply(e[t], o),
              n = 0 == (1 & r) ? 1 | r : -2 & r;
            a = i.multiply(a, n);
          }
        (n[s] = i.multiply(t.evaluateAt(o), i.inverse(a))), 0 !== i.getGeneratorBase() && (n[s] = i.multiply(n[s], o));
      }
      return n;
    }
  }
  !(function (t) {
    (t[(t.UPPER = 0)] = 'UPPER'),
      (t[(t.LOWER = 1)] = 'LOWER'),
      (t[(t.MIXED = 2)] = 'MIXED'),
      (t[(t.DIGIT = 3)] = 'DIGIT'),
      (t[(t.PUNCT = 4)] = 'PUNCT'),
      (t[(t.BINARY = 5)] = 'BINARY');
  })(x || (x = {}));
  class $ {
    decode(t) {
      this.ddata = t;
      let e = t.getBits(),
        r = this.extractBits(e),
        n = this.correctBits(r),
        i = $.convertBoolArrayToByteArray(n),
        s = $.getEncodedData(n),
        o = new z(i, s, null, null);
      return o.setNumBits(n.length), o;
    }
    static highLevelDecode(t) {
      return this.getEncodedData(t);
    }
    static getEncodedData(t) {
      let e = t.length,
        r = x.UPPER,
        n = x.UPPER,
        i = '',
        s = 0;
      for (; s < e; )
        if (n === x.BINARY) {
          if (e - s < 5) break;
          let o = $.readCode(t, s, 5);
          if (((s += 5), 0 === o)) {
            if (e - s < 11) break;
            (o = $.readCode(t, s, 11) + 31), (s += 11);
          }
          for (let r = 0; r < o; r++) {
            if (e - s < 8) {
              s = e;
              break;
            }
            const r = $.readCode(t, s, 8);
            (i += S.castAsNonUtf8Char(r)), (s += 8);
          }
          n = r;
        } else {
          let o = n === x.DIGIT ? 4 : 5;
          if (e - s < o) break;
          let a = $.readCode(t, s, o);
          s += o;
          let l = $.getCharacter(n, a);
          l.startsWith('CTRL_')
            ? ((r = n), (n = $.getTable(l.charAt(5))), 'L' === l.charAt(6) && (r = n))
            : ((i += l), (n = r));
        }
      return i;
    }
    static getTable(t) {
      switch (t) {
        case 'L':
          return x.LOWER;
        case 'P':
          return x.PUNCT;
        case 'M':
          return x.MIXED;
        case 'D':
          return x.DIGIT;
        case 'B':
          return x.BINARY;
        case 'U':
        default:
          return x.UPPER;
      }
    }
    static getCharacter(t, e) {
      switch (t) {
        case x.UPPER:
          return $.UPPER_TABLE[e];
        case x.LOWER:
          return $.LOWER_TABLE[e];
        case x.MIXED:
          return $.MIXED_TABLE[e];
        case x.PUNCT:
          return $.PUNCT_TABLE[e];
        case x.DIGIT:
          return $.DIGIT_TABLE[e];
        default:
          throw new j('Bad table');
      }
    }
    correctBits(t) {
      let e, r;
      this.ddata.getNbLayers() <= 2
        ? ((r = 6), (e = q.AZTEC_DATA_6))
        : this.ddata.getNbLayers() <= 8
        ? ((r = 8), (e = q.AZTEC_DATA_8))
        : this.ddata.getNbLayers() <= 22
        ? ((r = 10), (e = q.AZTEC_DATA_10))
        : ((r = 12), (e = q.AZTEC_DATA_12));
      let n = this.ddata.getNbDatablocks(),
        i = t.length / r;
      if (i < n) throw new E();
      let s = t.length % r,
        o = new Int32Array(i);
      for (let e = 0; e < i; e++, s += r) o[e] = $.readCode(t, s, r);
      try {
        new J(e).decode(o, i - n);
      } catch (t) {
        throw new E(t);
      }
      let a = (1 << r) - 1,
        l = 0;
      for (let t = 0; t < n; t++) {
        let e = o[t];
        if (0 === e || e === a) throw new E();
        (1 !== e && e !== a - 1) || l++;
      }
      let h = new Array(n * r - l),
        c = 0;
      for (let t = 0; t < n; t++) {
        let e = o[t];
        if (1 === e || e === a - 1) h.fill(e > 1, c, c + r - 1), (c += r - 1);
        else for (let t = r - 1; t >= 0; --t) h[c++] = 0 != (e & (1 << t));
      }
      return h;
    }
    extractBits(t) {
      let e = this.ddata.isCompact(),
        r = this.ddata.getNbLayers(),
        n = (e ? 11 : 14) + 4 * r,
        i = new Int32Array(n),
        s = new Array(this.totalBitsInLayer(r, e));
      if (e) for (let t = 0; t < i.length; t++) i[t] = t;
      else {
        let t = n + 1 + 2 * f.truncDivision(f.truncDivision(n, 2) - 1, 15),
          e = n / 2,
          r = f.truncDivision(t, 2);
        for (let t = 0; t < e; t++) {
          let n = t + f.truncDivision(t, 15);
          (i[e - t - 1] = r - n - 1), (i[e + t] = r + n + 1);
        }
      }
      for (let o = 0, a = 0; o < r; o++) {
        let l = 4 * (r - o) + (e ? 9 : 12),
          h = 2 * o,
          c = n - 1 - h;
        for (let e = 0; e < l; e++) {
          let r = 2 * e;
          for (let n = 0; n < 2; n++)
            (s[a + r + n] = t.get(i[h + n], i[h + e])),
              (s[a + 2 * l + r + n] = t.get(i[h + e], i[c - n])),
              (s[a + 4 * l + r + n] = t.get(i[c - n], i[c - e])),
              (s[a + 6 * l + r + n] = t.get(i[c - e], i[h + n]));
        }
        a += 8 * l;
      }
      return s;
    }
    static readCode(t, e, r) {
      let n = 0;
      for (let i = e; i < e + r; i++) (n <<= 1), t[i] && (n |= 1);
      return n;
    }
    static readByte(t, e) {
      let r = t.length - e;
      return r >= 8 ? $.readCode(t, e, 8) : $.readCode(t, e, r) << (8 - r);
    }
    static convertBoolArrayToByteArray(t) {
      let e = new Uint8Array((t.length + 7) / 8);
      for (let r = 0; r < e.length; r++) e[r] = $.readByte(t, 8 * r);
      return e;
    }
    totalBitsInLayer(t, e) {
      return ((e ? 88 : 112) + 16 * t) * t;
    }
  }
  ($.UPPER_TABLE = [
    'CTRL_PS',
    ' ',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'CTRL_LL',
    'CTRL_ML',
    'CTRL_DL',
    'CTRL_BS',
  ]),
    ($.LOWER_TABLE = [
      'CTRL_PS',
      ' ',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      'CTRL_US',
      'CTRL_ML',
      'CTRL_DL',
      'CTRL_BS',
    ]),
    ($.MIXED_TABLE = [
      'CTRL_PS',
      ' ',
      '\\1',
      '\\2',
      '\\3',
      '\\4',
      '\\5',
      '\\6',
      '\\7',
      '\b',
      '\t',
      '\n',
      '\\13',
      '\f',
      '\r',
      '\\33',
      '\\34',
      '\\35',
      '\\36',
      '\\37',
      '@',
      '\\',
      '^',
      '_',
      '`',
      '|',
      '~',
      '\\177',
      'CTRL_LL',
      'CTRL_UL',
      'CTRL_PL',
      'CTRL_BS',
    ]),
    ($.PUNCT_TABLE = [
      '',
      '\r',
      '\r\n',
      '. ',
      ', ',
      ': ',
      '!',
      '"',
      '#',
      '$',
      '%',
      '&',
      "'",
      '(',
      ')',
      '*',
      '+',
      ',',
      '-',
      '.',
      '/',
      ':',
      ';',
      '<',
      '=',
      '>',
      '?',
      '[',
      ']',
      '{',
      '}',
      'CTRL_UL',
    ]),
    ($.DIGIT_TABLE = [
      'CTRL_PS',
      ' ',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      ',',
      '.',
      'CTRL_UL',
      'CTRL_US',
    ]);
  class tt {
    constructor() {}
    static round(t) {
      return NaN === t
        ? 0
        : t <= Number.MIN_SAFE_INTEGER
        ? Number.MIN_SAFE_INTEGER
        : t >= Number.MAX_SAFE_INTEGER
        ? Number.MAX_SAFE_INTEGER
        : (t + (t < 0 ? -0.5 : 0.5)) | 0;
    }
    static distance(t, e, r, n) {
      const i = t - r,
        s = e - n;
      return Math.sqrt(i * i + s * s);
    }
    static sum(t) {
      let e = 0;
      for (let r = 0, n = t.length; r !== n; r++) {
        e += t[r];
      }
      return e;
    }
  }
  class et {
    static floatToIntBits(t) {
      return t;
    }
  }
  et.MAX_VALUE = Number.MAX_SAFE_INTEGER;
  class rt {
    constructor(t, e) {
      (this.x = t), (this.y = e);
    }
    getX() {
      return this.x;
    }
    getY() {
      return this.y;
    }
    equals(t) {
      if (t instanceof rt) {
        const e = t;
        return this.x === e.x && this.y === e.y;
      }
      return !1;
    }
    hashCode() {
      return 31 * et.floatToIntBits(this.x) + et.floatToIntBits(this.y);
    }
    toString() {
      return '(' + this.x + ',' + this.y + ')';
    }
    static orderBestPatterns(t) {
      const e = this.distance(t[0], t[1]),
        r = this.distance(t[1], t[2]),
        n = this.distance(t[0], t[2]);
      let i, s, o;
      if (
        (r >= e && r >= n
          ? ((s = t[0]), (i = t[1]), (o = t[2]))
          : n >= r && n >= e
          ? ((s = t[1]), (i = t[0]), (o = t[2]))
          : ((s = t[2]), (i = t[0]), (o = t[1])),
        this.crossProductZ(i, s, o) < 0)
      ) {
        const t = i;
        (i = o), (o = t);
      }
      (t[0] = i), (t[1] = s), (t[2] = o);
    }
    static distance(t, e) {
      return tt.distance(t.x, t.y, e.x, e.y);
    }
    static crossProductZ(t, e, r) {
      const n = e.x,
        i = e.y;
      return (r.x - n) * (t.y - i) - (r.y - i) * (t.x - n);
    }
  }
  class nt {
    constructor(t, e) {
      (this.bits = t), (this.points = e);
    }
    getBits() {
      return this.bits;
    }
    getPoints() {
      return this.points;
    }
  }
  class it extends nt {
    constructor(t, e, r, n, i) {
      super(t, e), (this.compact = r), (this.nbDatablocks = n), (this.nbLayers = i);
    }
    getNbLayers() {
      return this.nbLayers;
    }
    getNbDatablocks() {
      return this.nbDatablocks;
    }
    isCompact() {
      return this.compact;
    }
  }
  class st {
    constructor(t, e, r, n) {
      (this.image = t),
        (this.height = t.getHeight()),
        (this.width = t.getWidth()),
        null == e && (e = st.INIT_SIZE),
        null == r && (r = (t.getWidth() / 2) | 0),
        null == n && (n = (t.getHeight() / 2) | 0);
      const i = (e / 2) | 0;
      if (
        ((this.leftInit = r - i),
        (this.rightInit = r + i),
        (this.upInit = n - i),
        (this.downInit = n + i),
        this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width)
      )
        throw new R();
    }
    detect() {
      let t = this.leftInit,
        e = this.rightInit,
        r = this.upInit,
        n = this.downInit,
        i = !1,
        s = !0,
        o = !1,
        a = !1,
        l = !1,
        h = !1,
        c = !1;
      const u = this.width,
        d = this.height;
      for (; s; ) {
        s = !1;
        let g = !0;
        for (; (g || !a) && e < u; )
          (g = this.containsBlackPoint(r, n, e, !1)), g ? (e++, (s = !0), (a = !0)) : a || e++;
        if (e >= u) {
          i = !0;
          break;
        }
        let f = !0;
        for (; (f || !l) && n < d; )
          (f = this.containsBlackPoint(t, e, n, !0)), f ? (n++, (s = !0), (l = !0)) : l || n++;
        if (n >= d) {
          i = !0;
          break;
        }
        let w = !0;
        for (; (w || !h) && t >= 0; )
          (w = this.containsBlackPoint(r, n, t, !1)), w ? (t--, (s = !0), (h = !0)) : h || t--;
        if (t < 0) {
          i = !0;
          break;
        }
        let A = !0;
        for (; (A || !c) && r >= 0; )
          (A = this.containsBlackPoint(t, e, r, !0)), A ? (r--, (s = !0), (c = !0)) : c || r--;
        if (r < 0) {
          i = !0;
          break;
        }
        s && (o = !0);
      }
      if (!i && o) {
        const i = e - t;
        let s = null;
        for (let e = 1; null === s && e < i; e++) s = this.getBlackPointOnSegment(t, n - e, t + e, n);
        if (null == s) throw new R();
        let o = null;
        for (let e = 1; null === o && e < i; e++) o = this.getBlackPointOnSegment(t, r + e, t + e, r);
        if (null == o) throw new R();
        let a = null;
        for (let t = 1; null === a && t < i; t++) a = this.getBlackPointOnSegment(e, r + t, e - t, r);
        if (null == a) throw new R();
        let l = null;
        for (let t = 1; null === l && t < i; t++) l = this.getBlackPointOnSegment(e, n - t, e - t, n);
        if (null == l) throw new R();
        return this.centerEdges(l, s, a, o);
      }
      throw new R();
    }
    getBlackPointOnSegment(t, e, r, n) {
      const i = tt.round(tt.distance(t, e, r, n)),
        s = (r - t) / i,
        o = (n - e) / i,
        a = this.image;
      for (let r = 0; r < i; r++) {
        const n = tt.round(t + r * s),
          i = tt.round(e + r * o);
        if (a.get(n, i)) return new rt(n, i);
      }
      return null;
    }
    centerEdges(t, e, r, n) {
      const i = t.getX(),
        s = t.getY(),
        o = e.getX(),
        a = e.getY(),
        l = r.getX(),
        h = r.getY(),
        c = n.getX(),
        u = n.getY(),
        d = st.CORR;
      return i < this.width / 2
        ? [new rt(c - d, u + d), new rt(o + d, a + d), new rt(l - d, h - d), new rt(i + d, s - d)]
        : [new rt(c + d, u + d), new rt(o + d, a - d), new rt(l - d, h + d), new rt(i - d, s - d)];
    }
    containsBlackPoint(t, e, r, n) {
      const i = this.image;
      if (n) {
        for (let n = t; n <= e; n++) if (i.get(n, r)) return !0;
      } else for (let n = t; n <= e; n++) if (i.get(r, n)) return !0;
      return !1;
    }
  }
  (st.INIT_SIZE = 10), (st.CORR = 1);
  class ot {
    static checkAndNudgePoints(t, e) {
      const r = t.getWidth(),
        n = t.getHeight();
      let i = !0;
      for (let t = 0; t < e.length && i; t += 2) {
        const s = Math.floor(e[t]),
          o = Math.floor(e[t + 1]);
        if (s < -1 || s > r || o < -1 || o > n) throw new R();
        (i = !1),
          -1 === s ? ((e[t] = 0), (i = !0)) : s === r && ((e[t] = r - 1), (i = !0)),
          -1 === o ? ((e[t + 1] = 0), (i = !0)) : o === n && ((e[t + 1] = n - 1), (i = !0));
      }
      i = !0;
      for (let t = e.length - 2; t >= 0 && i; t -= 2) {
        const s = Math.floor(e[t]),
          o = Math.floor(e[t + 1]);
        if (s < -1 || s > r || o < -1 || o > n) throw new R();
        (i = !1),
          -1 === s ? ((e[t] = 0), (i = !0)) : s === r && ((e[t] = r - 1), (i = !0)),
          -1 === o ? ((e[t + 1] = 0), (i = !0)) : o === n && ((e[t + 1] = n - 1), (i = !0));
      }
    }
  }
  class at {
    constructor(t, e, r, n, i, s, o, a, l) {
      (this.a11 = t),
        (this.a21 = e),
        (this.a31 = r),
        (this.a12 = n),
        (this.a22 = i),
        (this.a32 = s),
        (this.a13 = o),
        (this.a23 = a),
        (this.a33 = l);
    }
    static quadrilateralToQuadrilateral(t, e, r, n, i, s, o, a, l, h, c, u, d, g, f, w) {
      const A = at.quadrilateralToSquare(t, e, r, n, i, s, o, a);
      return at.squareToQuadrilateral(l, h, c, u, d, g, f, w).times(A);
    }
    transformPoints(t) {
      const e = t.length,
        r = this.a11,
        n = this.a12,
        i = this.a13,
        s = this.a21,
        o = this.a22,
        a = this.a23,
        l = this.a31,
        h = this.a32,
        c = this.a33;
      for (let u = 0; u < e; u += 2) {
        const e = t[u],
          d = t[u + 1],
          g = i * e + a * d + c;
        (t[u] = (r * e + s * d + l) / g), (t[u + 1] = (n * e + o * d + h) / g);
      }
    }
    transformPointsWithValues(t, e) {
      const r = this.a11,
        n = this.a12,
        i = this.a13,
        s = this.a21,
        o = this.a22,
        a = this.a23,
        l = this.a31,
        h = this.a32,
        c = this.a33,
        u = t.length;
      for (let d = 0; d < u; d++) {
        const u = t[d],
          g = e[d],
          f = i * u + a * g + c;
        (t[d] = (r * u + s * g + l) / f), (e[d] = (n * u + o * g + h) / f);
      }
    }
    static squareToQuadrilateral(t, e, r, n, i, s, o, a) {
      const l = t - r + i - o,
        h = e - n + s - a;
      if (0 === l && 0 === h) return new at(r - t, i - r, t, n - e, s - n, e, 0, 0, 1);
      {
        const c = r - i,
          u = o - i,
          d = n - s,
          g = a - s,
          f = c * g - u * d,
          w = (l * g - u * h) / f,
          A = (c * h - l * d) / f;
        return new at(r - t + w * r, o - t + A * o, t, n - e + w * n, a - e + A * a, e, w, A, 1);
      }
    }
    static quadrilateralToSquare(t, e, r, n, i, s, o, a) {
      return at.squareToQuadrilateral(t, e, r, n, i, s, o, a).buildAdjoint();
    }
    buildAdjoint() {
      return new at(
        this.a22 * this.a33 - this.a23 * this.a32,
        this.a23 * this.a31 - this.a21 * this.a33,
        this.a21 * this.a32 - this.a22 * this.a31,
        this.a13 * this.a32 - this.a12 * this.a33,
        this.a11 * this.a33 - this.a13 * this.a31,
        this.a12 * this.a31 - this.a11 * this.a32,
        this.a12 * this.a23 - this.a13 * this.a22,
        this.a13 * this.a21 - this.a11 * this.a23,
        this.a11 * this.a22 - this.a12 * this.a21,
      );
    }
    times(t) {
      return new at(
        this.a11 * t.a11 + this.a21 * t.a12 + this.a31 * t.a13,
        this.a11 * t.a21 + this.a21 * t.a22 + this.a31 * t.a23,
        this.a11 * t.a31 + this.a21 * t.a32 + this.a31 * t.a33,
        this.a12 * t.a11 + this.a22 * t.a12 + this.a32 * t.a13,
        this.a12 * t.a21 + this.a22 * t.a22 + this.a32 * t.a23,
        this.a12 * t.a31 + this.a22 * t.a32 + this.a32 * t.a33,
        this.a13 * t.a11 + this.a23 * t.a12 + this.a33 * t.a13,
        this.a13 * t.a21 + this.a23 * t.a22 + this.a33 * t.a23,
        this.a13 * t.a31 + this.a23 * t.a32 + this.a33 * t.a33,
      );
    }
  }
  class lt extends ot {
    sampleGrid(t, e, r, n, i, s, o, a, l, h, c, u, d, g, f, w, A, C, E) {
      const m = at.quadrilateralToQuadrilateral(n, i, s, o, a, l, h, c, u, d, g, f, w, A, C, E);
      return this.sampleGridWithTransform(t, e, r, m);
    }
    sampleGridWithTransform(t, e, r, n) {
      if (e <= 0 || r <= 0) throw new R();
      const i = new T(e, r),
        s = new Float32Array(2 * e);
      for (let e = 0; e < r; e++) {
        const r = s.length,
          o = e + 0.5;
        for (let t = 0; t < r; t += 2) (s[t] = t / 2 + 0.5), (s[t + 1] = o);
        n.transformPoints(s), ot.checkAndNudgePoints(t, s);
        try {
          for (let n = 0; n < r; n += 2) t.get(Math.floor(s[n]), Math.floor(s[n + 1])) && i.set(n / 2, e);
        } catch (t) {
          throw new R();
        }
      }
      return i;
    }
  }
  class ht {
    static setGridSampler(t) {
      ht.gridSampler = t;
    }
    static getInstance() {
      return ht.gridSampler;
    }
  }
  ht.gridSampler = new lt();
  class ct {
    constructor(t, e) {
      (this.x = t), (this.y = e);
    }
    toResultPoint() {
      return new rt(this.getX(), this.getY());
    }
    getX() {
      return this.x;
    }
    getY() {
      return this.y;
    }
  }
  class ut {
    constructor(t) {
      (this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799])), (this.image = t);
    }
    detect() {
      return this.detectMirror(!1);
    }
    detectMirror(t) {
      let e = this.getMatrixCenter(),
        r = this.getBullsEyeCorners(e);
      if (t) {
        let t = r[0];
        (r[0] = r[2]), (r[2] = t);
      }
      this.extractParameters(r);
      let n = this.sampleGrid(
          this.image,
          r[this.shift % 4],
          r[(this.shift + 1) % 4],
          r[(this.shift + 2) % 4],
          r[(this.shift + 3) % 4],
        ),
        i = this.getMatrixCornerPoints(r);
      return new it(n, i, this.compact, this.nbDataBlocks, this.nbLayers);
    }
    extractParameters(t) {
      if (!(this.isValidPoint(t[0]) && this.isValidPoint(t[1]) && this.isValidPoint(t[2]) && this.isValidPoint(t[3])))
        throw new R();
      let e = 2 * this.nbCenterLayers,
        r = new Int32Array([
          this.sampleLine(t[0], t[1], e),
          this.sampleLine(t[1], t[2], e),
          this.sampleLine(t[2], t[3], e),
          this.sampleLine(t[3], t[0], e),
        ]);
      this.shift = this.getRotation(r, e);
      let n = 0;
      for (let t = 0; t < 4; t++) {
        let e = r[(this.shift + t) % 4];
        this.compact ? ((n <<= 7), (n += (e >> 1) & 127)) : ((n <<= 10), (n += ((e >> 2) & 992) + ((e >> 1) & 31)));
      }
      let i = this.getCorrectedParameterData(n, this.compact);
      this.compact
        ? ((this.nbLayers = 1 + (i >> 6)), (this.nbDataBlocks = 1 + (63 & i)))
        : ((this.nbLayers = 1 + (i >> 11)), (this.nbDataBlocks = 1 + (2047 & i)));
    }
    getRotation(t, e) {
      let r = 0;
      t.forEach((t, n, i) => {
        r = (r << 3) + (((t >> (e - 2)) << 1) + (1 & t));
      }),
        (r = ((1 & r) << 11) + (r >> 1));
      for (let t = 0; t < 4; t++) if (f.bitCount(r ^ this.EXPECTED_CORNER_BITS[t]) <= 2) return t;
      throw new R();
    }
    getCorrectedParameterData(t, e) {
      let r, n;
      e ? ((r = 7), (n = 2)) : ((r = 10), (n = 4));
      let i = r - n,
        s = new Int32Array(r);
      for (let e = r - 1; e >= 0; --e) (s[e] = 15 & t), (t >>= 4);
      try {
        new J(q.AZTEC_PARAM).decode(s, i);
      } catch (t) {
        throw new R();
      }
      let o = 0;
      for (let t = 0; t < n; t++) o = (o << 4) + s[t];
      return o;
    }
    getBullsEyeCorners(t) {
      let e = t,
        r = t,
        n = t,
        i = t,
        s = !0;
      for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
        let t = this.getFirstDifferent(e, s, 1, -1),
          o = this.getFirstDifferent(r, s, 1, 1),
          a = this.getFirstDifferent(n, s, -1, 1),
          l = this.getFirstDifferent(i, s, -1, -1);
        if (this.nbCenterLayers > 2) {
          let r =
            (this.distancePoint(l, t) * this.nbCenterLayers) / (this.distancePoint(i, e) * (this.nbCenterLayers + 2));
          if (r < 0.75 || r > 1.25 || !this.isWhiteOrBlackRectangle(t, o, a, l)) break;
        }
        (e = t), (r = o), (n = a), (i = l), (s = !s);
      }
      if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers) throw new R();
      this.compact = 5 === this.nbCenterLayers;
      let o = new rt(e.getX() + 0.5, e.getY() - 0.5),
        a = new rt(r.getX() + 0.5, r.getY() + 0.5),
        l = new rt(n.getX() - 0.5, n.getY() + 0.5),
        h = new rt(i.getX() - 0.5, i.getY() - 0.5);
      return this.expandSquare([o, a, l, h], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
    }
    getMatrixCenter() {
      let t, e, r, n;
      try {
        let i = new st(this.image).detect();
        (t = i[0]), (e = i[1]), (r = i[2]), (n = i[3]);
      } catch (i) {
        let s = this.image.getWidth() / 2,
          o = this.image.getHeight() / 2;
        (t = this.getFirstDifferent(new ct(s + 7, o - 7), !1, 1, -1).toResultPoint()),
          (e = this.getFirstDifferent(new ct(s + 7, o + 7), !1, 1, 1).toResultPoint()),
          (r = this.getFirstDifferent(new ct(s - 7, o + 7), !1, -1, 1).toResultPoint()),
          (n = this.getFirstDifferent(new ct(s - 7, o - 7), !1, -1, -1).toResultPoint());
      }
      let i = tt.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4),
        s = tt.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4);
      try {
        let o = new st(this.image, 15, i, s).detect();
        (t = o[0]), (e = o[1]), (r = o[2]), (n = o[3]);
      } catch (o) {
        (t = this.getFirstDifferent(new ct(i + 7, s - 7), !1, 1, -1).toResultPoint()),
          (e = this.getFirstDifferent(new ct(i + 7, s + 7), !1, 1, 1).toResultPoint()),
          (r = this.getFirstDifferent(new ct(i - 7, s + 7), !1, -1, 1).toResultPoint()),
          (n = this.getFirstDifferent(new ct(i - 7, s - 7), !1, -1, -1).toResultPoint());
      }
      return (
        (i = tt.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4)),
        (s = tt.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4)),
        new ct(i, s)
      );
    }
    getMatrixCornerPoints(t) {
      return this.expandSquare(t, 2 * this.nbCenterLayers, this.getDimension());
    }
    sampleGrid(t, e, r, n, i) {
      let s = ht.getInstance(),
        o = this.getDimension(),
        a = o / 2 - this.nbCenterLayers,
        l = o / 2 + this.nbCenterLayers;
      return s.sampleGrid(
        t,
        o,
        o,
        a,
        a,
        l,
        a,
        l,
        l,
        a,
        l,
        e.getX(),
        e.getY(),
        r.getX(),
        r.getY(),
        n.getX(),
        n.getY(),
        i.getX(),
        i.getY(),
      );
    }
    sampleLine(t, e, r) {
      let n = 0,
        i = this.distanceResultPoint(t, e),
        s = i / r,
        o = t.getX(),
        a = t.getY(),
        l = (s * (e.getX() - t.getX())) / i,
        h = (s * (e.getY() - t.getY())) / i;
      for (let t = 0; t < r; t++) this.image.get(tt.round(o + t * l), tt.round(a + t * h)) && (n |= 1 << (r - t - 1));
      return n;
    }
    isWhiteOrBlackRectangle(t, e, r, n) {
      (t = new ct(t.getX() - 3, t.getY() + 3)),
        (e = new ct(e.getX() - 3, e.getY() - 3)),
        (r = new ct(r.getX() + 3, r.getY() - 3)),
        (n = new ct(n.getX() + 3, n.getY() + 3));
      let i = this.getColor(n, t);
      if (0 === i) return !1;
      let s = this.getColor(t, e);
      return s === i && ((s = this.getColor(e, r)), s === i && ((s = this.getColor(r, n)), s === i));
    }
    getColor(t, e) {
      let r = this.distancePoint(t, e),
        n = (e.getX() - t.getX()) / r,
        i = (e.getY() - t.getY()) / r,
        s = 0,
        o = t.getX(),
        a = t.getY(),
        l = this.image.get(t.getX(), t.getY()),
        h = Math.ceil(r);
      for (let t = 0; t < h; t++) (o += n), (a += i), this.image.get(tt.round(o), tt.round(a)) !== l && s++;
      let c = s / r;
      return c > 0.1 && c < 0.9 ? 0 : c <= 0.1 === l ? 1 : -1;
    }
    getFirstDifferent(t, e, r, n) {
      let i = t.getX() + r,
        s = t.getY() + n;
      for (; this.isValid(i, s) && this.image.get(i, s) === e; ) (i += r), (s += n);
      for (i -= r, s -= n; this.isValid(i, s) && this.image.get(i, s) === e; ) i += r;
      for (i -= r; this.isValid(i, s) && this.image.get(i, s) === e; ) s += n;
      return (s -= n), new ct(i, s);
    }
    expandSquare(t, e, r) {
      let n = r / (2 * e),
        i = t[0].getX() - t[2].getX(),
        s = t[0].getY() - t[2].getY(),
        o = (t[0].getX() + t[2].getX()) / 2,
        a = (t[0].getY() + t[2].getY()) / 2,
        l = new rt(o + n * i, a + n * s),
        h = new rt(o - n * i, a - n * s);
      return (
        (i = t[1].getX() - t[3].getX()),
        (s = t[1].getY() - t[3].getY()),
        (o = (t[1].getX() + t[3].getX()) / 2),
        (a = (t[1].getY() + t[3].getY()) / 2),
        [l, new rt(o + n * i, a + n * s), h, new rt(o - n * i, a - n * s)]
      );
    }
    isValid(t, e) {
      return t >= 0 && t < this.image.getWidth() && e > 0 && e < this.image.getHeight();
    }
    isValidPoint(t) {
      let e = tt.round(t.getX()),
        r = tt.round(t.getY());
      return this.isValid(e, r);
    }
    distancePoint(t, e) {
      return tt.distance(t.getX(), t.getY(), e.getX(), e.getY());
    }
    distanceResultPoint(t, e) {
      return tt.distance(t.getX(), t.getY(), e.getX(), e.getY());
    }
    getDimension() {
      return this.compact
        ? 4 * this.nbLayers + 11
        : this.nbLayers <= 4
        ? 4 * this.nbLayers + 15
        : 4 * this.nbLayers + 2 * (f.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
    }
  }
  class dt {
    decode(t, e = null) {
      let r = null,
        n = new ut(t.getBlackMatrix()),
        i = null,
        s = null;
      try {
        let t = n.detectMirror(!1);
        (i = t.getPoints()), this.reportFoundResultPoints(e, i), (s = new $().decode(t));
      } catch (t) {
        r = t;
      }
      if (null == s)
        try {
          let t = n.detectMirror(!0);
          (i = t.getPoints()), this.reportFoundResultPoints(e, i), (s = new $().decode(t));
        } catch (t) {
          if (null != r) throw r;
          throw t;
        }
      let o = new F(s.getText(), s.getRawBytes(), s.getNumBits(), i, v.AZTEC, c.currentTimeMillis()),
        a = s.getByteSegments();
      null != a && o.putMetadata(W.BYTE_SEGMENTS, a);
      let l = s.getECLevel();
      return null != l && o.putMetadata(W.ERROR_CORRECTION_LEVEL, l), o;
    }
    reportFoundResultPoints(t, e) {
      if (null != t) {
        let r = t.get(C.NEED_RESULT_POINT_CALLBACK);
        null != r &&
          e.forEach((t, e, n) => {
            r.foundPossibleResultPoint(t);
          });
      }
    }
    reset() {}
  }
  class gt {
    decode(t, e) {
      try {
        return this.doDecode(t, e);
      } catch (r) {
        if (e && !0 === e.get(C.TRY_HARDER) && t.isRotateSupported()) {
          const r = t.rotateCounterClockwise(),
            n = this.doDecode(r, e),
            i = n.getResultMetadata();
          let s = 270;
          null !== i && !0 === i.get(W.ORIENTATION) && (s += i.get(W.ORIENTATION) % 360),
            n.putMetadata(W.ORIENTATION, s);
          const o = n.getResultPoints();
          if (null !== o) {
            const t = r.getHeight();
            for (let e = 0; e < o.length; e++) o[e] = new rt(t - o[e].getY() - 1, o[e].getX());
          }
          return n;
        }
        throw new R();
      }
    }
    reset() {}
    doDecode(t, e) {
      const r = t.getWidth(),
        n = t.getHeight();
      let i = new w(r);
      const s = e && !0 === e.get(C.TRY_HARDER),
        o = Math.max(1, n >> (s ? 8 : 5));
      let a;
      a = s ? n : 15;
      const l = Math.trunc(n / 2);
      for (let s = 0; s < a; s++) {
        const a = Math.trunc((s + 1) / 2),
          h = l + o * (0 == (1 & s) ? a : -a);
        if (h < 0 || h >= n) break;
        try {
          i = t.getBlackRow(h, i);
        } catch (t) {
          continue;
        }
        for (let t = 0; t < 2; t++) {
          if (1 === t && (i.reverse(), e && !0 === e.get(C.NEED_RESULT_POINT_CALLBACK))) {
            const t = new Map();
            e.forEach((e, r) => t.set(r, e)), t.delete(C.NEED_RESULT_POINT_CALLBACK), (e = t);
          }
          try {
            const n = this.decodeRow(h, i, e);
            if (1 === t) {
              n.putMetadata(W.ORIENTATION, 180);
              const t = n.getResultPoints();
              null !== t &&
                ((t[0] = new rt(r - t[0].getX() - 1, t[0].getY())), (t[1] = new rt(r - t[1].getX() - 1, t[1].getY())));
            }
            return n;
          } catch (t) {}
        }
      }
      throw new R();
    }
    static recordPattern(t, e, r) {
      const n = r.length;
      for (let t = 0; t < n; t++) r[t] = 0;
      const i = t.getSize();
      if (e >= i) throw new R();
      let s = !t.get(e),
        o = 0,
        a = e;
      for (; a < i; ) {
        if (t.get(a) !== s) r[o]++;
        else {
          if (++o === n) break;
          (r[o] = 1), (s = !s);
        }
        a++;
      }
      if (o !== n && (o !== n - 1 || a !== i)) throw new R();
    }
    static recordPatternInReverse(t, e, r) {
      let n = r.length,
        i = t.get(e);
      for (; e > 0 && n >= 0; ) t.get(--e) !== i && (n--, (i = !i));
      if (n >= 0) throw new R();
      gt.recordPattern(t, e + 1, r);
    }
    static patternMatchVariance(t, e, r) {
      const n = t.length;
      let i = 0,
        s = 0;
      for (let r = 0; r < n; r++) (i += t[r]), (s += e[r]);
      if (i < s) return Number.POSITIVE_INFINITY;
      const o = i / s;
      r *= o;
      let a = 0;
      for (let i = 0; i < n; i++) {
        const n = t[i],
          s = e[i] * o,
          l = n > s ? n - s : s - n;
        if (l > r) return Number.POSITIVE_INFINITY;
        a += l;
      }
      return a / i;
    }
  }
  class ft extends gt {
    static findStartPattern(t) {
      const e = t.getSize(),
        r = t.getNextSet(0);
      let n = 0,
        i = Int32Array.from([0, 0, 0, 0, 0, 0]),
        s = r,
        o = !1;
      for (let a = r; a < e; a++)
        if (t.get(a) !== o) i[n]++;
        else {
          if (5 === n) {
            let e = ft.MAX_AVG_VARIANCE,
              r = -1;
            for (let t = ft.CODE_START_A; t <= ft.CODE_START_C; t++) {
              const n = gt.patternMatchVariance(i, ft.CODE_PATTERNS[t], ft.MAX_INDIVIDUAL_VARIANCE);
              n < e && ((e = n), (r = t));
            }
            if (r >= 0 && t.isRange(Math.max(0, s - (a - s) / 2), s, !1)) return Int32Array.from([s, a, r]);
            (s += i[0] + i[1]), (i = i.slice(2, i.length - 1)), (i[n - 1] = 0), (i[n] = 0), n--;
          } else n++;
          (i[n] = 1), (o = !o);
        }
      throw new R();
    }
    static decodeCode(t, e, r) {
      gt.recordPattern(t, r, e);
      let n = ft.MAX_AVG_VARIANCE,
        i = -1;
      for (let t = 0; t < ft.CODE_PATTERNS.length; t++) {
        const r = ft.CODE_PATTERNS[t],
          s = this.patternMatchVariance(e, r, ft.MAX_INDIVIDUAL_VARIANCE);
        s < n && ((n = s), (i = t));
      }
      if (i >= 0) return i;
      throw new R();
    }
    decodeRow(t, e, r) {
      const n = r && !0 === r.get(C.ASSUME_GS1),
        i = ft.findStartPattern(e),
        s = i[2];
      let o = 0;
      const a = new Uint8Array(20);
      let h;
      switch (((a[o++] = s), s)) {
        case ft.CODE_START_A:
          h = ft.CODE_CODE_A;
          break;
        case ft.CODE_START_B:
          h = ft.CODE_CODE_B;
          break;
        case ft.CODE_START_C:
          h = ft.CODE_CODE_C;
          break;
        default:
          throw new E();
      }
      let c = !1,
        u = !1,
        d = '',
        g = i[0],
        f = i[1];
      const w = Int32Array.from([0, 0, 0, 0, 0, 0]);
      let A = 0,
        m = 0,
        _ = s,
        I = 0,
        S = !0,
        p = !1,
        T = !1;
      for (; !c; ) {
        const t = u;
        switch (
          ((u = !1),
          (A = m),
          (m = ft.decodeCode(e, w, f)),
          (a[o++] = m),
          m !== ft.CODE_STOP && (S = !0),
          m !== ft.CODE_STOP && (I++, (_ += I * m)),
          (g = f),
          (f += w.reduce((t, e) => t + e, 0)),
          m)
        ) {
          case ft.CODE_START_A:
          case ft.CODE_START_B:
          case ft.CODE_START_C:
            throw new E();
        }
        switch (h) {
          case ft.CODE_CODE_A:
            if (m < 64)
              (d +=
                T === p
                  ? String.fromCharCode(' '.charCodeAt(0) + m)
                  : String.fromCharCode(' '.charCodeAt(0) + m + 128)),
                (T = !1);
            else if (m < 96) (d += T === p ? String.fromCharCode(m - 64) : String.fromCharCode(m + 64)), (T = !1);
            else
              switch ((m !== ft.CODE_STOP && (S = !1), m)) {
                case ft.CODE_FNC_1:
                  n && (0 === d.length ? (d += ']C1') : (d += String.fromCharCode(29)));
                  break;
                case ft.CODE_FNC_2:
                case ft.CODE_FNC_3:
                  break;
                case ft.CODE_FNC_4_A:
                  !p && T ? ((p = !0), (T = !1)) : p && T ? ((p = !1), (T = !1)) : (T = !0);
                  break;
                case ft.CODE_SHIFT:
                  (u = !0), (h = ft.CODE_CODE_B);
                  break;
                case ft.CODE_CODE_B:
                  h = ft.CODE_CODE_B;
                  break;
                case ft.CODE_CODE_C:
                  h = ft.CODE_CODE_C;
                  break;
                case ft.CODE_STOP:
                  c = !0;
              }
            break;
          case ft.CODE_CODE_B:
            if (m < 96)
              (d +=
                T === p
                  ? String.fromCharCode(' '.charCodeAt(0) + m)
                  : String.fromCharCode(' '.charCodeAt(0) + m + 128)),
                (T = !1);
            else
              switch ((m !== ft.CODE_STOP && (S = !1), m)) {
                case ft.CODE_FNC_1:
                  n && (0 === d.length ? (d += ']C1') : (d += String.fromCharCode(29)));
                  break;
                case ft.CODE_FNC_2:
                case ft.CODE_FNC_3:
                  break;
                case ft.CODE_FNC_4_B:
                  !p && T ? ((p = !0), (T = !1)) : p && T ? ((p = !1), (T = !1)) : (T = !0);
                  break;
                case ft.CODE_SHIFT:
                  (u = !0), (h = ft.CODE_CODE_A);
                  break;
                case ft.CODE_CODE_A:
                  h = ft.CODE_CODE_A;
                  break;
                case ft.CODE_CODE_C:
                  h = ft.CODE_CODE_C;
                  break;
                case ft.CODE_STOP:
                  c = !0;
              }
            break;
          case ft.CODE_CODE_C:
            if (m < 100) m < 10 && (d += '0'), (d += m);
            else
              switch ((m !== ft.CODE_STOP && (S = !1), m)) {
                case ft.CODE_FNC_1:
                  n && (0 === d.length ? (d += ']C1') : (d += String.fromCharCode(29)));
                  break;
                case ft.CODE_CODE_A:
                  h = ft.CODE_CODE_A;
                  break;
                case ft.CODE_CODE_B:
                  h = ft.CODE_CODE_B;
                  break;
                case ft.CODE_STOP:
                  c = !0;
              }
        }
        t && (h = h === ft.CODE_CODE_A ? ft.CODE_CODE_B : ft.CODE_CODE_A);
      }
      const N = f - g;
      if (((f = e.getNextUnset(f)), !e.isRange(f, Math.min(e.getSize(), f + (f - g) / 2), !1))) throw new R();
      if (((_ -= I * A), _ % 103 !== A)) throw new l();
      const D = d.length;
      if (0 === D) throw new R();
      D > 0 && S && (d = h === ft.CODE_CODE_C ? d.substring(0, D - 2) : d.substring(0, D - 1));
      const y = (i[1] + i[0]) / 2,
        O = g + N / 2,
        M = a.length,
        B = new Uint8Array(M);
      for (let t = 0; t < M; t++) B[t] = a[t];
      const b = [new rt(y, t), new rt(O, t)];
      return new F(d, B, 0, b, v.CODE_128, new Date().getTime());
    }
  }
  (ft.CODE_PATTERNS = [
    Int32Array.from([2, 1, 2, 2, 2, 2]),
    Int32Array.from([2, 2, 2, 1, 2, 2]),
    Int32Array.from([2, 2, 2, 2, 2, 1]),
    Int32Array.from([1, 2, 1, 2, 2, 3]),
    Int32Array.from([1, 2, 1, 3, 2, 2]),
    Int32Array.from([1, 3, 1, 2, 2, 2]),
    Int32Array.from([1, 2, 2, 2, 1, 3]),
    Int32Array.from([1, 2, 2, 3, 1, 2]),
    Int32Array.from([1, 3, 2, 2, 1, 2]),
    Int32Array.from([2, 2, 1, 2, 1, 3]),
    Int32Array.from([2, 2, 1, 3, 1, 2]),
    Int32Array.from([2, 3, 1, 2, 1, 2]),
    Int32Array.from([1, 1, 2, 2, 3, 2]),
    Int32Array.from([1, 2, 2, 1, 3, 2]),
    Int32Array.from([1, 2, 2, 2, 3, 1]),
    Int32Array.from([1, 1, 3, 2, 2, 2]),
    Int32Array.from([1, 2, 3, 1, 2, 2]),
    Int32Array.from([1, 2, 3, 2, 2, 1]),
    Int32Array.from([2, 2, 3, 2, 1, 1]),
    Int32Array.from([2, 2, 1, 1, 3, 2]),
    Int32Array.from([2, 2, 1, 2, 3, 1]),
    Int32Array.from([2, 1, 3, 2, 1, 2]),
    Int32Array.from([2, 2, 3, 1, 1, 2]),
    Int32Array.from([3, 1, 2, 1, 3, 1]),
    Int32Array.from([3, 1, 1, 2, 2, 2]),
    Int32Array.from([3, 2, 1, 1, 2, 2]),
    Int32Array.from([3, 2, 1, 2, 2, 1]),
    Int32Array.from([3, 1, 2, 2, 1, 2]),
    Int32Array.from([3, 2, 2, 1, 1, 2]),
    Int32Array.from([3, 2, 2, 2, 1, 1]),
    Int32Array.from([2, 1, 2, 1, 2, 3]),
    Int32Array.from([2, 1, 2, 3, 2, 1]),
    Int32Array.from([2, 3, 2, 1, 2, 1]),
    Int32Array.from([1, 1, 1, 3, 2, 3]),
    Int32Array.from([1, 3, 1, 1, 2, 3]),
    Int32Array.from([1, 3, 1, 3, 2, 1]),
    Int32Array.from([1, 1, 2, 3, 1, 3]),
    Int32Array.from([1, 3, 2, 1, 1, 3]),
    Int32Array.from([1, 3, 2, 3, 1, 1]),
    Int32Array.from([2, 1, 1, 3, 1, 3]),
    Int32Array.from([2, 3, 1, 1, 1, 3]),
    Int32Array.from([2, 3, 1, 3, 1, 1]),
    Int32Array.from([1, 1, 2, 1, 3, 3]),
    Int32Array.from([1, 1, 2, 3, 3, 1]),
    Int32Array.from([1, 3, 2, 1, 3, 1]),
    Int32Array.from([1, 1, 3, 1, 2, 3]),
    Int32Array.from([1, 1, 3, 3, 2, 1]),
    Int32Array.from([1, 3, 3, 1, 2, 1]),
    Int32Array.from([3, 1, 3, 1, 2, 1]),
    Int32Array.from([2, 1, 1, 3, 3, 1]),
    Int32Array.from([2, 3, 1, 1, 3, 1]),
    Int32Array.from([2, 1, 3, 1, 1, 3]),
    Int32Array.from([2, 1, 3, 3, 1, 1]),
    Int32Array.from([2, 1, 3, 1, 3, 1]),
    Int32Array.from([3, 1, 1, 1, 2, 3]),
    Int32Array.from([3, 1, 1, 3, 2, 1]),
    Int32Array.from([3, 3, 1, 1, 2, 1]),
    Int32Array.from([3, 1, 2, 1, 1, 3]),
    Int32Array.from([3, 1, 2, 3, 1, 1]),
    Int32Array.from([3, 3, 2, 1, 1, 1]),
    Int32Array.from([3, 1, 4, 1, 1, 1]),
    Int32Array.from([2, 2, 1, 4, 1, 1]),
    Int32Array.from([4, 3, 1, 1, 1, 1]),
    Int32Array.from([1, 1, 1, 2, 2, 4]),
    Int32Array.from([1, 1, 1, 4, 2, 2]),
    Int32Array.from([1, 2, 1, 1, 2, 4]),
    Int32Array.from([1, 2, 1, 4, 2, 1]),
    Int32Array.from([1, 4, 1, 1, 2, 2]),
    Int32Array.from([1, 4, 1, 2, 2, 1]),
    Int32Array.from([1, 1, 2, 2, 1, 4]),
    Int32Array.from([1, 1, 2, 4, 1, 2]),
    Int32Array.from([1, 2, 2, 1, 1, 4]),
    Int32Array.from([1, 2, 2, 4, 1, 1]),
    Int32Array.from([1, 4, 2, 1, 1, 2]),
    Int32Array.from([1, 4, 2, 2, 1, 1]),
    Int32Array.from([2, 4, 1, 2, 1, 1]),
    Int32Array.from([2, 2, 1, 1, 1, 4]),
    Int32Array.from([4, 1, 3, 1, 1, 1]),
    Int32Array.from([2, 4, 1, 1, 1, 2]),
    Int32Array.from([1, 3, 4, 1, 1, 1]),
    Int32Array.from([1, 1, 1, 2, 4, 2]),
    Int32Array.from([1, 2, 1, 1, 4, 2]),
    Int32Array.from([1, 2, 1, 2, 4, 1]),
    Int32Array.from([1, 1, 4, 2, 1, 2]),
    Int32Array.from([1, 2, 4, 1, 1, 2]),
    Int32Array.from([1, 2, 4, 2, 1, 1]),
    Int32Array.from([4, 1, 1, 2, 1, 2]),
    Int32Array.from([4, 2, 1, 1, 1, 2]),
    Int32Array.from([4, 2, 1, 2, 1, 1]),
    Int32Array.from([2, 1, 2, 1, 4, 1]),
    Int32Array.from([2, 1, 4, 1, 2, 1]),
    Int32Array.from([4, 1, 2, 1, 2, 1]),
    Int32Array.from([1, 1, 1, 1, 4, 3]),
    Int32Array.from([1, 1, 1, 3, 4, 1]),
    Int32Array.from([1, 3, 1, 1, 4, 1]),
    Int32Array.from([1, 1, 4, 1, 1, 3]),
    Int32Array.from([1, 1, 4, 3, 1, 1]),
    Int32Array.from([4, 1, 1, 1, 1, 3]),
    Int32Array.from([4, 1, 1, 3, 1, 1]),
    Int32Array.from([1, 1, 3, 1, 4, 1]),
    Int32Array.from([1, 1, 4, 1, 3, 1]),
    Int32Array.from([3, 1, 1, 1, 4, 1]),
    Int32Array.from([4, 1, 1, 1, 3, 1]),
    Int32Array.from([2, 1, 1, 4, 1, 2]),
    Int32Array.from([2, 1, 1, 2, 1, 4]),
    Int32Array.from([2, 1, 1, 2, 3, 2]),
    Int32Array.from([2, 3, 3, 1, 1, 1, 2]),
  ]),
    (ft.MAX_AVG_VARIANCE = 0.25),
    (ft.MAX_INDIVIDUAL_VARIANCE = 0.7),
    (ft.CODE_SHIFT = 98),
    (ft.CODE_CODE_C = 99),
    (ft.CODE_CODE_B = 100),
    (ft.CODE_CODE_A = 101),
    (ft.CODE_FNC_1 = 102),
    (ft.CODE_FNC_2 = 97),
    (ft.CODE_FNC_3 = 96),
    (ft.CODE_FNC_4_A = 101),
    (ft.CODE_FNC_4_B = 100),
    (ft.CODE_START_A = 103),
    (ft.CODE_START_B = 104),
    (ft.CODE_START_C = 105),
    (ft.CODE_STOP = 106);
  class wt extends gt {
    constructor(t = !1, e = !1) {
      super(),
        (this.usingCheckDigit = t),
        (this.extendedMode = e),
        (this.decodeRowResult = ''),
        (this.counters = new Int32Array(9));
    }
    decodeRow(t, e, r) {
      let n = this.counters;
      n.fill(0), (this.decodeRowResult = '');
      let i,
        s,
        o = wt.findAsteriskPattern(e, n),
        a = e.getNextSet(o[1]),
        h = e.getSize();
      do {
        wt.recordPattern(e, a, n);
        let t = wt.toNarrowWidePattern(n);
        if (t < 0) throw new R();
        (i = wt.patternToChar(t)), (this.decodeRowResult += i), (s = a);
        for (let t of n) a += t;
        a = e.getNextSet(a);
      } while ('*' !== i);
      this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
      let c,
        u = 0;
      for (let t of n) u += t;
      if (a !== h && 2 * (a - s - u) < u) throw new R();
      if (this.usingCheckDigit) {
        let t = this.decodeRowResult.length - 1,
          e = 0;
        for (let r = 0; r < t; r++) e += wt.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(r));
        if (this.decodeRowResult.charAt(t) !== wt.ALPHABET_STRING.charAt(e % 43)) throw new l();
        this.decodeRowResult = this.decodeRowResult.substring(0, t);
      }
      if (0 === this.decodeRowResult.length) throw new R();
      c = this.extendedMode ? wt.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
      let d = (o[1] + o[0]) / 2,
        g = s + u / 2;
      return new F(c, null, 0, [new rt(d, t), new rt(g, t)], v.CODE_39, new Date().getTime());
    }
    static findAsteriskPattern(t, e) {
      let r = t.getSize(),
        n = t.getNextSet(0),
        i = 0,
        s = n,
        o = !1,
        a = e.length;
      for (let l = n; l < r; l++)
        if (t.get(l) !== o) e[i]++;
        else {
          if (i === a - 1) {
            if (
              this.toNarrowWidePattern(e) === wt.ASTERISK_ENCODING &&
              t.isRange(Math.max(0, s - Math.floor((l - s) / 2)), s, !1)
            )
              return [s, l];
            (s += e[0] + e[1]), e.copyWithin(0, 2, 2 + i - 1), (e[i - 1] = 0), (e[i] = 0), i--;
          } else i++;
          (e[i] = 1), (o = !o);
        }
      throw new R();
    }
    static toNarrowWidePattern(t) {
      let e,
        r = t.length,
        n = 0;
      do {
        let i = 2147483647;
        for (let e of t) e < i && e > n && (i = e);
        (n = i), (e = 0);
        let s = 0,
          o = 0;
        for (let i = 0; i < r; i++) {
          let a = t[i];
          a > n && ((o |= 1 << (r - 1 - i)), e++, (s += a));
        }
        if (3 === e) {
          for (let i = 0; i < r && e > 0; i++) {
            let r = t[i];
            if (r > n && (e--, 2 * r >= s)) return -1;
          }
          return o;
        }
      } while (e > 3);
      return -1;
    }
    static patternToChar(t) {
      for (let e = 0; e < wt.CHARACTER_ENCODINGS.length; e++)
        if (wt.CHARACTER_ENCODINGS[e] === t) return wt.ALPHABET_STRING.charAt(e);
      if (t === wt.ASTERISK_ENCODING) return '*';
      throw new R();
    }
    static decodeExtended(t) {
      let e = t.length,
        r = '';
      for (let n = 0; n < e; n++) {
        let e = t.charAt(n);
        if ('+' === e || '$' === e || '%' === e || '/' === e) {
          let i = t.charAt(n + 1),
            s = '\0';
          switch (e) {
            case '+':
              if (!(i >= 'A' && i <= 'Z')) throw new E();
              s = String.fromCharCode(i.charCodeAt(0) + 32);
              break;
            case '$':
              if (!(i >= 'A' && i <= 'Z')) throw new E();
              s = String.fromCharCode(i.charCodeAt(0) - 64);
              break;
            case '%':
              if (i >= 'A' && i <= 'E') s = String.fromCharCode(i.charCodeAt(0) - 38);
              else if (i >= 'F' && i <= 'J') s = String.fromCharCode(i.charCodeAt(0) - 11);
              else if (i >= 'K' && i <= 'O') s = String.fromCharCode(i.charCodeAt(0) + 16);
              else if (i >= 'P' && i <= 'T') s = String.fromCharCode(i.charCodeAt(0) + 43);
              else if ('U' === i) s = '\0';
              else if ('V' === i) s = '@';
              else if ('W' === i) s = '`';
              else {
                if ('X' !== i && 'Y' !== i && 'Z' !== i) throw new E();
                s = '';
              }
              break;
            case '/':
              if (i >= 'A' && i <= 'O') s = String.fromCharCode(i.charCodeAt(0) - 32);
              else {
                if ('Z' !== i) throw new E();
                s = ':';
              }
          }
          (r += s), n++;
        } else r += e;
      }
      return r;
    }
  }
  (wt.ALPHABET_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%'),
    (wt.CHARACTER_ENCODINGS = [
      52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274,
      82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42,
    ]),
    (wt.ASTERISK_ENCODING = 148);
  class At extends gt {
    constructor() {
      super(...arguments), (this.narrowLineWidth = -1);
    }
    decodeRow(t, e, r) {
      let n = this.decodeStart(e),
        i = this.decodeEnd(e),
        s = new p();
      At.decodeMiddle(e, n[1], i[0], s);
      let o = s.toString(),
        a = null;
      null != r && (a = r.get(C.ALLOWED_LENGTHS)), null == a && (a = At.DEFAULT_ALLOWED_LENGTHS);
      let l = o.length,
        h = !1,
        c = 0;
      for (let t of a) {
        if (l === t) {
          h = !0;
          break;
        }
        t > c && (c = t);
      }
      if ((!h && l > c && (h = !0), !h)) throw new E();
      const u = [new rt(n[1], t), new rt(i[0], t)];
      return new F(o, null, 0, u, v.ITF, new Date().getTime());
    }
    static decodeMiddle(t, e, r, n) {
      let i = new Int32Array(10),
        s = new Int32Array(5),
        o = new Int32Array(5);
      for (i.fill(0), s.fill(0), o.fill(0); e < r; ) {
        gt.recordPattern(t, e, i);
        for (let t = 0; t < 5; t++) {
          let e = 2 * t;
          (s[t] = i[e]), (o[t] = i[e + 1]);
        }
        let r = At.decodeDigit(s);
        n.append(r.toString()),
          (r = this.decodeDigit(o)),
          n.append(r.toString()),
          i.forEach(function (t) {
            e += t;
          });
      }
    }
    decodeStart(t) {
      let e = At.skipWhiteSpace(t),
        r = At.findGuardPattern(t, e, At.START_PATTERN);
      return (this.narrowLineWidth = (r[1] - r[0]) / 4), this.validateQuietZone(t, r[0]), r;
    }
    validateQuietZone(t, e) {
      let r = 10 * this.narrowLineWidth;
      r = r < e ? r : e;
      for (let n = e - 1; r > 0 && n >= 0 && !t.get(n); n--) r--;
      if (0 !== r) throw new R();
    }
    static skipWhiteSpace(t) {
      const e = t.getSize(),
        r = t.getNextSet(0);
      if (r === e) throw new R();
      return r;
    }
    decodeEnd(t) {
      t.reverse();
      try {
        let e,
          r = At.skipWhiteSpace(t);
        try {
          e = At.findGuardPattern(t, r, At.END_PATTERN_REVERSED[0]);
        } catch (n) {
          n instanceof R && (e = At.findGuardPattern(t, r, At.END_PATTERN_REVERSED[1]));
        }
        this.validateQuietZone(t, e[0]);
        let n = e[0];
        return (e[0] = t.getSize() - e[1]), (e[1] = t.getSize() - n), e;
      } finally {
        t.reverse();
      }
    }
    static findGuardPattern(t, e, r) {
      let n = r.length,
        i = new Int32Array(n),
        s = t.getSize(),
        o = !1,
        a = 0,
        l = e;
      i.fill(0);
      for (let h = e; h < s; h++)
        if (t.get(h) !== o) i[a]++;
        else {
          if (a === n - 1) {
            if (gt.patternMatchVariance(i, r, At.MAX_INDIVIDUAL_VARIANCE) < At.MAX_AVG_VARIANCE) return [l, h];
            (l += i[0] + i[1]), c.arraycopy(i, 2, i, 0, a - 1), (i[a - 1] = 0), (i[a] = 0), a--;
          } else a++;
          (i[a] = 1), (o = !o);
        }
      throw new R();
    }
    static decodeDigit(t) {
      let e = At.MAX_AVG_VARIANCE,
        r = -1,
        n = At.PATTERNS.length;
      for (let i = 0; i < n; i++) {
        let n = At.PATTERNS[i],
          s = gt.patternMatchVariance(t, n, At.MAX_INDIVIDUAL_VARIANCE);
        s < e ? ((e = s), (r = i)) : s === e && (r = -1);
      }
      if (r >= 0) return r % 10;
      throw new R();
    }
  }
  (At.PATTERNS = [
    Int32Array.from([1, 1, 2, 2, 1]),
    Int32Array.from([2, 1, 1, 1, 2]),
    Int32Array.from([1, 2, 1, 1, 2]),
    Int32Array.from([2, 2, 1, 1, 1]),
    Int32Array.from([1, 1, 2, 1, 2]),
    Int32Array.from([2, 1, 2, 1, 1]),
    Int32Array.from([1, 2, 2, 1, 1]),
    Int32Array.from([1, 1, 1, 2, 2]),
    Int32Array.from([2, 1, 1, 2, 1]),
    Int32Array.from([1, 2, 1, 2, 1]),
    Int32Array.from([1, 1, 3, 3, 1]),
    Int32Array.from([3, 1, 1, 1, 3]),
    Int32Array.from([1, 3, 1, 1, 3]),
    Int32Array.from([3, 3, 1, 1, 1]),
    Int32Array.from([1, 1, 3, 1, 3]),
    Int32Array.from([3, 1, 3, 1, 1]),
    Int32Array.from([1, 3, 3, 1, 1]),
    Int32Array.from([1, 1, 1, 3, 3]),
    Int32Array.from([3, 1, 1, 3, 1]),
    Int32Array.from([1, 3, 1, 3, 1]),
  ]),
    (At.MAX_AVG_VARIANCE = 0.38),
    (At.MAX_INDIVIDUAL_VARIANCE = 0.5),
    (At.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14]),
    (At.START_PATTERN = Int32Array.from([1, 1, 1, 1])),
    (At.END_PATTERN_REVERSED = [Int32Array.from([1, 1, 2]), Int32Array.from([1, 1, 3])]);
  class Ct extends gt {
    constructor() {
      super(...arguments), (this.decodeRowStringBuffer = '');
    }
    static findStartGuardPattern(t) {
      let e,
        r = !1,
        n = 0,
        i = Int32Array.from([0, 0, 0]);
      for (; !r; ) {
        (i = Int32Array.from([0, 0, 0])), (e = Ct.findGuardPattern(t, n, !1, this.START_END_PATTERN, i));
        let s = e[0];
        n = e[1];
        let o = s - (n - s);
        o >= 0 && (r = t.isRange(o, s, !1));
      }
      return e;
    }
    static checkChecksum(t) {
      return Ct.checkStandardUPCEANChecksum(t);
    }
    static checkStandardUPCEANChecksum(t) {
      let e = t.length;
      if (0 === e) return !1;
      let r = parseInt(t.charAt(e - 1), 10);
      return Ct.getStandardUPCEANChecksum(t.substring(0, e - 1)) === r;
    }
    static getStandardUPCEANChecksum(t) {
      let e = t.length,
        r = 0;
      for (let n = e - 1; n >= 0; n -= 2) {
        let e = t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
        if (e < 0 || e > 9) throw new E();
        r += e;
      }
      r *= 3;
      for (let n = e - 2; n >= 0; n -= 2) {
        let e = t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
        if (e < 0 || e > 9) throw new E();
        r += e;
      }
      return (1e3 - r) % 10;
    }
    static decodeEnd(t, e) {
      return Ct.findGuardPattern(t, e, !1, Ct.START_END_PATTERN, new Int32Array(Ct.START_END_PATTERN.length).fill(0));
    }
    static findGuardPatternWithoutCounters(t, e, r, n) {
      return this.findGuardPattern(t, e, r, n, new Int32Array(n.length));
    }
    static findGuardPattern(t, e, r, n, i) {
      let s = t.getSize(),
        o = 0,
        a = (e = r ? t.getNextUnset(e) : t.getNextSet(e)),
        l = n.length,
        h = r;
      for (let r = e; r < s; r++)
        if (t.get(r) !== h) i[o]++;
        else {
          if (o === l - 1) {
            if (gt.patternMatchVariance(i, n, Ct.MAX_INDIVIDUAL_VARIANCE) < Ct.MAX_AVG_VARIANCE)
              return Int32Array.from([a, r]);
            a += i[0] + i[1];
            let t = i.slice(2, i.length - 1);
            for (let e = 0; e < o - 1; e++) i[e] = t[e];
            (i[o - 1] = 0), (i[o] = 0), o--;
          } else o++;
          (i[o] = 1), (h = !h);
        }
      throw new R();
    }
    static decodeDigit(t, e, r, n) {
      this.recordPattern(t, r, e);
      let i = this.MAX_AVG_VARIANCE,
        s = -1,
        o = n.length;
      for (let t = 0; t < o; t++) {
        let r = n[t],
          o = gt.patternMatchVariance(e, r, Ct.MAX_INDIVIDUAL_VARIANCE);
        o < i && ((i = o), (s = t));
      }
      if (s >= 0) return s;
      throw new R();
    }
  }
  (Ct.MAX_AVG_VARIANCE = 0.48),
    (Ct.MAX_INDIVIDUAL_VARIANCE = 0.7),
    (Ct.START_END_PATTERN = Int32Array.from([1, 1, 1])),
    (Ct.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1])),
    (Ct.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1])),
    (Ct.L_PATTERNS = [
      Int32Array.from([3, 2, 1, 1]),
      Int32Array.from([2, 2, 2, 1]),
      Int32Array.from([2, 1, 2, 2]),
      Int32Array.from([1, 4, 1, 1]),
      Int32Array.from([1, 1, 3, 2]),
      Int32Array.from([1, 2, 3, 1]),
      Int32Array.from([1, 1, 1, 4]),
      Int32Array.from([1, 3, 1, 2]),
      Int32Array.from([1, 2, 1, 3]),
      Int32Array.from([3, 1, 1, 2]),
    ]);
  class Et {
    constructor() {
      (this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5]),
        (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])),
        (this.decodeRowStringBuffer = '');
    }
    decodeRow(t, e, r) {
      let n = this.decodeRowStringBuffer,
        i = this.decodeMiddle(e, r, n),
        s = n.toString(),
        o = Et.parseExtensionString(s),
        a = [new rt((r[0] + r[1]) / 2, t), new rt(i, t)],
        l = new F(s, null, 0, a, v.UPC_EAN_EXTENSION, new Date().getTime());
      return null != o && l.putAllMetadata(o), l;
    }
    decodeMiddle(t, e, r) {
      let n = this.decodeMiddleCounters;
      (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
      let i = t.getSize(),
        s = e[1],
        o = 0;
      for (let e = 0; e < 5 && s < i; e++) {
        let i = Ct.decodeDigit(t, n, s, Ct.L_AND_G_PATTERNS);
        r += String.fromCharCode('0'.charCodeAt(0) + (i % 10));
        for (let t of n) s += t;
        i >= 10 && (o |= 1 << (4 - e)), 4 !== e && ((s = t.getNextSet(s)), (s = t.getNextUnset(s)));
      }
      if (5 !== r.length) throw new R();
      let a = this.determineCheckDigit(o);
      if (Et.extensionChecksum(r.toString()) !== a) throw new R();
      return s;
    }
    static extensionChecksum(t) {
      let e = t.length,
        r = 0;
      for (let n = e - 2; n >= 0; n -= 2) r += t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
      r *= 3;
      for (let n = e - 1; n >= 0; n -= 2) r += t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
      return (r *= 3), r % 10;
    }
    determineCheckDigit(t) {
      for (let e = 0; e < 10; e++) if (t === this.CHECK_DIGIT_ENCODINGS[e]) return e;
      throw new R();
    }
    static parseExtensionString(t) {
      if (5 !== t.length) return null;
      let e = Et.parseExtension5String(t);
      return null == e ? null : new Map([[W.SUGGESTED_PRICE, e]]);
    }
    static parseExtension5String(t) {
      let e;
      switch (t.charAt(0)) {
        case '0':
          e = '£';
          break;
        case '5':
          e = '$';
          break;
        case '9':
          switch (t) {
            case '90000':
              return null;
            case '99991':
              return '0.00';
            case '99990':
              return 'Used';
          }
          e = '';
          break;
        default:
          e = '';
      }
      let r = parseInt(t.substring(1)),
        n = r % 100;
      return e + (r / 100).toString() + '.' + (n < 10 ? '0' + n : n.toString());
    }
  }
  class mt {
    constructor() {
      (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])), (this.decodeRowStringBuffer = '');
    }
    decodeRow(t, e, r) {
      let n = this.decodeRowStringBuffer,
        i = this.decodeMiddle(e, r, n),
        s = n.toString(),
        o = mt.parseExtensionString(s),
        a = [new rt((r[0] + r[1]) / 2, t), new rt(i, t)],
        l = new F(s, null, 0, a, v.UPC_EAN_EXTENSION, new Date().getTime());
      return null != o && l.putAllMetadata(o), l;
    }
    decodeMiddle(t, e, r) {
      let n = this.decodeMiddleCounters;
      (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
      let i = t.getSize(),
        s = e[1],
        o = 0;
      for (let e = 0; e < 2 && s < i; e++) {
        let i = Ct.decodeDigit(t, n, s, Ct.L_AND_G_PATTERNS);
        r += String.fromCharCode('0'.charCodeAt(0) + (i % 10));
        for (let t of n) s += t;
        i >= 10 && (o |= 1 << (1 - e)), 1 !== e && ((s = t.getNextSet(s)), (s = t.getNextUnset(s)));
      }
      if (2 !== r.length) throw new R();
      if (parseInt(r.toString()) % 4 !== o) throw new R();
      return s;
    }
    static parseExtensionString(t) {
      return 2 !== t.length ? null : new Map([[W.ISSUE_NUMBER, parseInt(t)]]);
    }
  }
  class _t {
    static decodeRow(t, e, r) {
      let n = Ct.findGuardPattern(
        e,
        r,
        !1,
        this.EXTENSION_START_PATTERN,
        new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0),
      );
      try {
        return new Et().decodeRow(t, e, n);
      } catch (r) {
        return new mt().decodeRow(t, e, n);
      }
    }
  }
  _t.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
  class It extends Ct {
    constructor() {
      super(), (this.decodeRowStringBuffer = ''), (It.L_AND_G_PATTERNS = It.L_PATTERNS.map((t) => Int32Array.from(t)));
      for (let t = 10; t < 20; t++) {
        let e = It.L_PATTERNS[t - 10],
          r = new Int32Array(e.length);
        for (let t = 0; t < e.length; t++) r[t] = e[e.length - t - 1];
        It.L_AND_G_PATTERNS[t] = r;
      }
    }
    decodeRow(t, e, r) {
      let n = It.findStartGuardPattern(e),
        i = null == r ? null : r.get(C.NEED_RESULT_POINT_CALLBACK);
      if (null != i) {
        const e = new rt((n[0] + n[1]) / 2, t);
        i.foundPossibleResultPoint(e);
      }
      let s = this.decodeMiddle(e, n, this.decodeRowStringBuffer),
        o = s.rowOffset,
        a = s.resultString;
      if (null != i) {
        const e = new rt(o, t);
        i.foundPossibleResultPoint(e);
      }
      let h = It.decodeEnd(e, o);
      if (null != i) {
        const e = new rt((h[0] + h[1]) / 2, t);
        i.foundPossibleResultPoint(e);
      }
      let c = h[1],
        u = c + (c - h[0]);
      if (u >= e.getSize() || !e.isRange(c, u, !1)) throw new R();
      let d = a.toString();
      if (d.length < 8) throw new E();
      if (!It.checkChecksum(d)) throw new l();
      let g = (n[1] + n[0]) / 2,
        f = (h[1] + h[0]) / 2,
        w = this.getBarcodeFormat(),
        A = [new rt(g, t), new rt(f, t)],
        m = new F(d, null, 0, A, w, new Date().getTime()),
        _ = 0;
      try {
        let r = _t.decodeRow(t, e, h[1]);
        m.putMetadata(W.UPC_EAN_EXTENSION, r.getText()),
          m.putAllMetadata(r.getResultMetadata()),
          m.addResultPoints(r.getResultPoints()),
          (_ = r.getText().length);
      } catch (t) {}
      let I = null == r ? null : r.get(C.ALLOWED_EAN_EXTENSIONS);
      if (null != I) {
        let t = !1;
        for (let e in I)
          if (_.toString() === e) {
            t = !0;
            break;
          }
        if (!t) throw new R();
      }
      return w === v.EAN_13 || v.UPC_A, m;
    }
    static checkChecksum(t) {
      return It.checkStandardUPCEANChecksum(t);
    }
    static checkStandardUPCEANChecksum(t) {
      let e = t.length;
      if (0 === e) return !1;
      let r = parseInt(t.charAt(e - 1), 10);
      return It.getStandardUPCEANChecksum(t.substring(0, e - 1)) === r;
    }
    static getStandardUPCEANChecksum(t) {
      let e = t.length,
        r = 0;
      for (let n = e - 1; n >= 0; n -= 2) {
        let e = t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
        if (e < 0 || e > 9) throw new E();
        r += e;
      }
      r *= 3;
      for (let n = e - 2; n >= 0; n -= 2) {
        let e = t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
        if (e < 0 || e > 9) throw new E();
        r += e;
      }
      return (1e3 - r) % 10;
    }
    static decodeEnd(t, e) {
      return It.findGuardPattern(t, e, !1, It.START_END_PATTERN, new Int32Array(It.START_END_PATTERN.length).fill(0));
    }
  }
  class St extends It {
    constructor() {
      super(), (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]));
    }
    decodeMiddle(t, e, r) {
      let n = this.decodeMiddleCounters;
      (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
      let i = t.getSize(),
        s = e[1],
        o = 0;
      for (let e = 0; e < 6 && s < i; e++) {
        let i = It.decodeDigit(t, n, s, It.L_AND_G_PATTERNS);
        r += String.fromCharCode('0'.charCodeAt(0) + (i % 10));
        for (let t of n) s += t;
        i >= 10 && (o |= 1 << (5 - e));
      }
      (r = St.determineFirstDigit(r, o)),
        (s = It.findGuardPattern(t, s, !0, It.MIDDLE_PATTERN, new Int32Array(It.MIDDLE_PATTERN.length).fill(0))[1]);
      for (let e = 0; e < 6 && s < i; e++) {
        let e = It.decodeDigit(t, n, s, It.L_PATTERNS);
        r += String.fromCharCode('0'.charCodeAt(0) + e);
        for (let t of n) s += t;
      }
      return { rowOffset: s, resultString: r };
    }
    getBarcodeFormat() {
      return v.EAN_13;
    }
    static determineFirstDigit(t, e) {
      for (let r = 0; r < 10; r++)
        if (e === this.FIRST_DIGIT_ENCODINGS[r]) return (t = String.fromCharCode('0'.charCodeAt(0) + r) + t);
      throw new R();
    }
  }
  St.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
  class pt extends It {
    constructor() {
      super(), (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]));
    }
    decodeMiddle(t, e, r) {
      const n = this.decodeMiddleCounters;
      (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
      let i = t.getSize(),
        s = e[1];
      for (let e = 0; e < 4 && s < i; e++) {
        let e = It.decodeDigit(t, n, s, It.L_PATTERNS);
        r += String.fromCharCode('0'.charCodeAt(0) + e);
        for (let t of n) s += t;
      }
      s = It.findGuardPattern(t, s, !0, It.MIDDLE_PATTERN, new Int32Array(It.MIDDLE_PATTERN.length).fill(0))[1];
      for (let e = 0; e < 4 && s < i; e++) {
        let e = It.decodeDigit(t, n, s, It.L_PATTERNS);
        r += String.fromCharCode('0'.charCodeAt(0) + e);
        for (let t of n) s += t;
      }
      return { rowOffset: s, resultString: r };
    }
    getBarcodeFormat() {
      return v.EAN_8;
    }
  }
  class Tt extends It {
    constructor() {
      super(...arguments), (this.ean13Reader = new St());
    }
    getBarcodeFormat() {
      return v.UPC_A;
    }
    decode(t, e) {
      return this.maybeReturnResult(this.ean13Reader.decode(t));
    }
    decodeRow(t, e, r) {
      return this.maybeReturnResult(this.ean13Reader.decodeRow(t, e, r));
    }
    decodeMiddle(t, e, r) {
      return this.ean13Reader.decodeMiddle(t, e, r);
    }
    maybeReturnResult(t) {
      let e = t.getText();
      if ('0' === e.charAt(0)) {
        let r = new F(e.substring(1), null, null, t.getResultPoints(), v.UPC_A);
        return null != t.getResultMetadata() && r.putAllMetadata(t.getResultMetadata()), r;
      }
      throw new R();
    }
    reset() {
      this.ean13Reader.reset();
    }
  }
  class Rt extends It {
    constructor() {
      super(), (this.decodeMiddleCounters = new Int32Array(4));
    }
    decodeMiddle(t, e, r) {
      const n = this.decodeMiddleCounters.map((t) => t);
      (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
      const i = t.getSize();
      let s = e[1],
        o = 0;
      for (let e = 0; e < 6 && s < i; e++) {
        const i = Rt.decodeDigit(t, n, s, Rt.L_AND_G_PATTERNS);
        r += String.fromCharCode('0'.charCodeAt(0) + (i % 10));
        for (let t of n) s += t;
        i >= 10 && (o |= 1 << (5 - e));
      }
      return Rt.determineNumSysAndCheckDigit(new p(r), o), s;
    }
    decodeEnd(t, e) {
      return Rt.findGuardPatternWithoutCounters(t, e, !0, Rt.MIDDLE_END_PATTERN);
    }
    checkChecksum(t) {
      return It.checkChecksum(Rt.convertUPCEtoUPCA(t));
    }
    static determineNumSysAndCheckDigit(t, e) {
      for (let r = 0; r <= 1; r++)
        for (let n = 0; n < 10; n++)
          if (e === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[r][n]) return t.insert(0, '0' + r), void t.append('0' + n);
      throw R.getNotFoundInstance();
    }
    getBarcodeFormat() {
      return v.UPC_E;
    }
    static convertUPCEtoUPCA(t) {
      const e = t
          .slice(1, 7)
          .split('')
          .map((t) => t.charCodeAt(0)),
        r = new p();
      r.append(t.charAt(0));
      let n = e[5];
      switch (n) {
        case 0:
        case 1:
        case 2:
          r.appendChars(e, 0, 2), r.append(n), r.append('0000'), r.appendChars(e, 2, 3);
          break;
        case 3:
          r.appendChars(e, 0, 3), r.append('00000'), r.appendChars(e, 3, 2);
          break;
        case 4:
          r.appendChars(e, 0, 4), r.append('00000'), r.append(e[4]);
          break;
        default:
          r.appendChars(e, 0, 5), r.append('0000'), r.append(n);
      }
      return t.length >= 8 && r.append(t.charAt(7)), r.toString();
    }
  }
  (Rt.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1])),
    (Rt.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [
      Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]),
      Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1]),
    ]);
  class Nt extends gt {
    constructor(t) {
      super();
      let e = null == t ? null : t.get(C.POSSIBLE_FORMATS),
        r = [];
      null != e &&
        (e.indexOf(v.EAN_13) > -1 ? r.push(new St()) : e.indexOf(v.UPC_A) > -1 && r.push(new Tt()),
        e.indexOf(v.EAN_8) > -1 && r.push(new pt()),
        e.indexOf(v.UPC_E) > -1 && r.push(new Rt())),
        0 === r.length && (r.push(new St()), r.push(new pt()), r.push(new Rt())),
        (this.readers = r);
    }
    decodeRow(t, e, r) {
      for (let n of this.readers)
        try {
          const i = n.decodeRow(t, e, r),
            s = i.getBarcodeFormat() === v.EAN_13 && '0' === i.getText().charAt(0),
            o = null == r ? null : r.get(C.POSSIBLE_FORMATS),
            a = null == o || o.includes(v.UPC_A);
          if (s && a) {
            const t = i.getRawBytes(),
              e = new F(i.getText().substring(1), t, t.length, i.getResultPoints(), v.UPC_A);
            return e.putAllMetadata(i.getResultMetadata()), e;
          }
          return i;
        } catch (t) {}
      throw new R();
    }
    reset() {
      for (let t of this.readers) t.reset();
    }
  }
  class Dt extends gt {
    constructor() {
      super(),
        (this.decodeFinderCounters = new Int32Array(4)),
        (this.dataCharacterCounters = new Int32Array(8)),
        (this.oddRoundingErrors = new Array(4)),
        (this.evenRoundingErrors = new Array(4)),
        (this.oddCounts = new Array(this.dataCharacterCounters.length / 2)),
        (this.evenCounts = new Array(this.dataCharacterCounters.length / 2));
    }
    getDecodeFinderCounters() {
      return this.decodeFinderCounters;
    }
    getDataCharacterCounters() {
      return this.dataCharacterCounters;
    }
    getOddRoundingErrors() {
      return this.oddRoundingErrors;
    }
    getEvenRoundingErrors() {
      return this.evenRoundingErrors;
    }
    getOddCounts() {
      return this.oddCounts;
    }
    getEvenCounts() {
      return this.evenCounts;
    }
    parseFinderValue(t, e) {
      for (let r = 0; r < e.length; r++)
        if (gt.patternMatchVariance(t, e[r], Dt.MAX_INDIVIDUAL_VARIANCE) < Dt.MAX_AVG_VARIANCE) return r;
      throw new R();
    }
    static count(t) {
      return tt.sum(new Int32Array(t));
    }
    static increment(t, e) {
      let r = 0,
        n = e[0];
      for (let i = 1; i < t.length; i++) e[i] > n && ((n = e[i]), (r = i));
      t[r]++;
    }
    static decrement(t, e) {
      let r = 0,
        n = e[0];
      for (let i = 1; i < t.length; i++) e[i] < n && ((n = e[i]), (r = i));
      t[r]--;
    }
    static isFinderPattern(t) {
      let e = t[0] + t[1],
        r = e / (e + t[2] + t[3]);
      if (r >= Dt.MIN_FINDER_PATTERN_RATIO && r <= Dt.MAX_FINDER_PATTERN_RATIO) {
        let e = Number.MAX_SAFE_INTEGER,
          r = Number.MIN_SAFE_INTEGER;
        for (let n of t) n > r && (r = n), n < e && (e = n);
        return r < 10 * e;
      }
      return !1;
    }
  }
  (Dt.MAX_AVG_VARIANCE = 0.2),
    (Dt.MAX_INDIVIDUAL_VARIANCE = 0.45),
    (Dt.MIN_FINDER_PATTERN_RATIO = 9.5 / 12),
    (Dt.MAX_FINDER_PATTERN_RATIO = 12.5 / 14);
  class yt {
    constructor(t, e) {
      (this.value = t), (this.checksumPortion = e);
    }
    getValue() {
      return this.value;
    }
    getChecksumPortion() {
      return this.checksumPortion;
    }
    toString() {
      return this.value + '(' + this.checksumPortion + ')';
    }
    equals(t) {
      if (!(t instanceof yt)) return !1;
      const e = t;
      return this.value === e.value && this.checksumPortion === e.checksumPortion;
    }
    hashCode() {
      return this.value ^ this.checksumPortion;
    }
  }
  class Ot {
    constructor(t, e, r, n, i) {
      (this.value = t),
        (this.startEnd = e),
        (this.value = t),
        (this.startEnd = e),
        (this.resultPoints = new Array()),
        this.resultPoints.push(new rt(r, i)),
        this.resultPoints.push(new rt(n, i));
    }
    getValue() {
      return this.value;
    }
    getStartEnd() {
      return this.startEnd;
    }
    getResultPoints() {
      return this.resultPoints;
    }
    equals(t) {
      if (!(t instanceof Ot)) return !1;
      const e = t;
      return this.value === e.value;
    }
    hashCode() {
      return this.value;
    }
  }
  class Mt {
    constructor() {}
    static getRSSvalue(t, e, r) {
      let n = 0;
      for (let e of t) n += e;
      let i = 0,
        s = 0,
        o = t.length;
      for (let a = 0; a < o - 1; a++) {
        let l;
        for (l = 1, s |= 1 << a; l < t[a]; l++, s &= ~(1 << a)) {
          let t = Mt.combins(n - l - 1, o - a - 2);
          if (
            (r && 0 === s && n - l - (o - a - 1) >= o - a - 1 && (t -= Mt.combins(n - l - (o - a), o - a - 2)),
            o - a - 1 > 1)
          ) {
            let r = 0;
            for (let t = n - l - (o - a - 2); t > e; t--) r += Mt.combins(n - l - t - 1, o - a - 3);
            t -= r * (o - 1 - a);
          } else n - l > e && t--;
          i += t;
        }
        n -= l;
      }
      return i;
    }
    static combins(t, e) {
      let r, n;
      t - e > e ? ((n = e), (r = t - e)) : ((n = t - e), (r = e));
      let i = 1,
        s = 1;
      for (let e = t; e > r; e--) (i *= e), s <= n && ((i /= s), s++);
      for (; s <= n; ) (i /= s), s++;
      return i;
    }
  }
  class Bt {
    constructor(t, e) {
      e ? (this.decodedInformation = null) : ((this.finished = t), (this.decodedInformation = e));
    }
    getDecodedInformation() {
      return this.decodedInformation;
    }
    isFinished() {
      return this.finished;
    }
  }
  class bt {
    constructor(t) {
      this.newPosition = t;
    }
    getNewPosition() {
      return this.newPosition;
    }
  }
  class Pt extends bt {
    constructor(t, e) {
      super(t), (this.value = e);
    }
    getValue() {
      return this.value;
    }
    isFNC1() {
      return this.value === Pt.FNC1;
    }
  }
  Pt.FNC1 = '$';
  class Lt extends bt {
    constructor(t, e, r) {
      super(t),
        r
          ? ((this.remaining = !0), (this.remainingValue = this.remainingValue))
          : ((this.remaining = !1), (this.remainingValue = 0)),
        (this.newString = e);
    }
    getNewString() {
      return this.newString;
    }
    isRemaining() {
      return this.remaining;
    }
    getRemainingValue() {
      return this.remainingValue;
    }
  }
  class Ft extends bt {
    constructor(t, e, r) {
      if ((super(t), e < 0 || e > 10 || r < 0 || r > 10)) throw new E();
      (this.firstDigit = e), (this.secondDigit = r);
    }
    getFirstDigit() {
      return this.firstDigit;
    }
    getSecondDigit() {
      return this.secondDigit;
    }
    getValue() {
      return 10 * this.firstDigit + this.secondDigit;
    }
    isFirstDigitFNC1() {
      return this.firstDigit === Ft.FNC1;
    }
    isSecondDigitFNC1() {
      return this.secondDigit === Ft.FNC1;
    }
    isAnyFNC1() {
      return this.firstDigit === Ft.FNC1 || this.secondDigit === Ft.FNC1;
    }
  }
  Ft.FNC1 = 10;
  class kt {
    constructor() {}
    static parseFieldsInGeneralPurpose(t) {
      if (!t) return null;
      if (t.length < 2) throw new R();
      let e = t.substring(0, 2);
      for (let r of kt.TWO_DIGIT_DATA_LENGTH)
        if (r[0] === e)
          return r[1] === kt.VARIABLE_LENGTH ? kt.processVariableAI(2, r[2], t) : kt.processFixedAI(2, r[1], t);
      if (t.length < 3) throw new R();
      let r = t.substring(0, 3);
      for (let e of kt.THREE_DIGIT_DATA_LENGTH)
        if (e[0] === r)
          return e[1] === kt.VARIABLE_LENGTH ? kt.processVariableAI(3, e[2], t) : kt.processFixedAI(3, e[1], t);
      for (let e of kt.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH)
        if (e[0] === r)
          return e[1] === kt.VARIABLE_LENGTH ? kt.processVariableAI(4, e[2], t) : kt.processFixedAI(4, e[1], t);
      if (t.length < 4) throw new R();
      let n = t.substring(0, 4);
      for (let e of kt.FOUR_DIGIT_DATA_LENGTH)
        if (e[0] === n)
          return e[1] === kt.VARIABLE_LENGTH ? kt.processVariableAI(4, e[2], t) : kt.processFixedAI(4, e[1], t);
      throw new R();
    }
    static processFixedAI(t, e, r) {
      if (r.length < t) throw new R();
      let n = r.substring(0, t);
      if (r.length < t + e) throw new R();
      let i = r.substring(t, t + e),
        s = r.substring(t + e),
        o = '(' + n + ')' + i,
        a = kt.parseFieldsInGeneralPurpose(s);
      return null == a ? o : o + a;
    }
    static processVariableAI(t, e, r) {
      let n,
        i = r.substring(0, t);
      n = r.length < t + e ? r.length : t + e;
      let s = r.substring(t, n),
        o = r.substring(n),
        a = '(' + i + ')' + s,
        l = kt.parseFieldsInGeneralPurpose(o);
      return null == l ? a : a + l;
    }
  }
  (kt.VARIABLE_LENGTH = []),
    (kt.TWO_DIGIT_DATA_LENGTH = [
      ['00', 18],
      ['01', 14],
      ['02', 14],
      ['10', kt.VARIABLE_LENGTH, 20],
      ['11', 6],
      ['12', 6],
      ['13', 6],
      ['15', 6],
      ['17', 6],
      ['20', 2],
      ['21', kt.VARIABLE_LENGTH, 20],
      ['22', kt.VARIABLE_LENGTH, 29],
      ['30', kt.VARIABLE_LENGTH, 8],
      ['37', kt.VARIABLE_LENGTH, 8],
      ['90', kt.VARIABLE_LENGTH, 30],
      ['91', kt.VARIABLE_LENGTH, 30],
      ['92', kt.VARIABLE_LENGTH, 30],
      ['93', kt.VARIABLE_LENGTH, 30],
      ['94', kt.VARIABLE_LENGTH, 30],
      ['95', kt.VARIABLE_LENGTH, 30],
      ['96', kt.VARIABLE_LENGTH, 30],
      ['97', kt.VARIABLE_LENGTH, 3],
      ['98', kt.VARIABLE_LENGTH, 30],
      ['99', kt.VARIABLE_LENGTH, 30],
    ]),
    (kt.THREE_DIGIT_DATA_LENGTH = [
      ['240', kt.VARIABLE_LENGTH, 30],
      ['241', kt.VARIABLE_LENGTH, 30],
      ['242', kt.VARIABLE_LENGTH, 6],
      ['250', kt.VARIABLE_LENGTH, 30],
      ['251', kt.VARIABLE_LENGTH, 30],
      ['253', kt.VARIABLE_LENGTH, 17],
      ['254', kt.VARIABLE_LENGTH, 20],
      ['400', kt.VARIABLE_LENGTH, 30],
      ['401', kt.VARIABLE_LENGTH, 30],
      ['402', 17],
      ['403', kt.VARIABLE_LENGTH, 30],
      ['410', 13],
      ['411', 13],
      ['412', 13],
      ['413', 13],
      ['414', 13],
      ['420', kt.VARIABLE_LENGTH, 20],
      ['421', kt.VARIABLE_LENGTH, 15],
      ['422', 3],
      ['423', kt.VARIABLE_LENGTH, 15],
      ['424', 3],
      ['425', 3],
      ['426', 3],
    ]),
    (kt.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
      ['310', 6],
      ['311', 6],
      ['312', 6],
      ['313', 6],
      ['314', 6],
      ['315', 6],
      ['316', 6],
      ['320', 6],
      ['321', 6],
      ['322', 6],
      ['323', 6],
      ['324', 6],
      ['325', 6],
      ['326', 6],
      ['327', 6],
      ['328', 6],
      ['329', 6],
      ['330', 6],
      ['331', 6],
      ['332', 6],
      ['333', 6],
      ['334', 6],
      ['335', 6],
      ['336', 6],
      ['340', 6],
      ['341', 6],
      ['342', 6],
      ['343', 6],
      ['344', 6],
      ['345', 6],
      ['346', 6],
      ['347', 6],
      ['348', 6],
      ['349', 6],
      ['350', 6],
      ['351', 6],
      ['352', 6],
      ['353', 6],
      ['354', 6],
      ['355', 6],
      ['356', 6],
      ['357', 6],
      ['360', 6],
      ['361', 6],
      ['362', 6],
      ['363', 6],
      ['364', 6],
      ['365', 6],
      ['366', 6],
      ['367', 6],
      ['368', 6],
      ['369', 6],
      ['390', kt.VARIABLE_LENGTH, 15],
      ['391', kt.VARIABLE_LENGTH, 18],
      ['392', kt.VARIABLE_LENGTH, 15],
      ['393', kt.VARIABLE_LENGTH, 18],
      ['703', kt.VARIABLE_LENGTH, 30],
    ]),
    (kt.FOUR_DIGIT_DATA_LENGTH = [
      ['7001', 13],
      ['7002', kt.VARIABLE_LENGTH, 30],
      ['7003', 10],
      ['8001', 14],
      ['8002', kt.VARIABLE_LENGTH, 20],
      ['8003', kt.VARIABLE_LENGTH, 30],
      ['8004', kt.VARIABLE_LENGTH, 30],
      ['8005', 6],
      ['8006', 18],
      ['8007', kt.VARIABLE_LENGTH, 30],
      ['8008', kt.VARIABLE_LENGTH, 12],
      ['8018', 18],
      ['8020', kt.VARIABLE_LENGTH, 25],
      ['8100', 6],
      ['8101', 10],
      ['8102', 2],
      ['8110', kt.VARIABLE_LENGTH, 70],
      ['8200', kt.VARIABLE_LENGTH, 70],
    ]);
  class vt {
    constructor(t) {
      (this.buffer = new p()), (this.information = t);
    }
    decodeAllCodes(t, e) {
      let r = e,
        n = null;
      for (;;) {
        let e = this.decodeGeneralPurposeField(r, n),
          i = kt.parseFieldsInGeneralPurpose(e.getNewString());
        if (
          (null != i && t.append(i),
          (n = e.isRemaining() ? '' + e.getRemainingValue() : null),
          r === e.getNewPosition())
        )
          break;
        r = e.getNewPosition();
      }
      return t.toString();
    }
    isStillNumeric(t) {
      if (t + 7 > this.information.getSize()) return t + 4 <= this.information.getSize();
      for (let e = t; e < t + 3; ++e) if (this.information.get(e)) return !0;
      return this.information.get(t + 3);
    }
    decodeNumeric(t) {
      if (t + 7 > this.information.getSize()) {
        let e = this.extractNumericValueFromBitArray(t, 4);
        return new Ft(this.information.getSize(), 0 === e ? Ft.FNC1 : e - 1, Ft.FNC1);
      }
      let e = this.extractNumericValueFromBitArray(t, 7);
      return new Ft(t + 7, (e - 8) / 11, (e - 8) % 11);
    }
    extractNumericValueFromBitArray(t, e) {
      return vt.extractNumericValueFromBitArray(this.information, t, e);
    }
    static extractNumericValueFromBitArray(t, e, r) {
      let n = 0;
      for (let i = 0; i < r; ++i) t.get(e + i) && (n |= 1 << (r - i - 1));
      return n;
    }
    decodeGeneralPurposeField(t, e) {
      this.buffer.setLengthToZero(), null != e && this.buffer.append(e), this.current.setPosition(t);
      let r = this.parseBlocks();
      return null != r && r.isRemaining()
        ? new Lt(this.current.getPosition(), this.buffer.toString(), r.getRemainingValue())
        : new Lt(this.current.getPosition(), this.buffer.toString());
    }
    parseBlocks() {
      let t, e;
      do {
        let r = this.current.getPosition();
        if (
          (this.current.isAlpha()
            ? ((e = this.parseAlphaBlock()), (t = e.isFinished()))
            : this.current.isIsoIec646()
            ? ((e = this.parseIsoIec646Block()), (t = e.isFinished()))
            : ((e = this.parseNumericBlock()), (t = e.isFinished())),
          !(r !== this.current.getPosition()) && !t)
        )
          break;
      } while (!t);
      return e.getDecodedInformation();
    }
    parseNumericBlock() {
      for (; this.isStillNumeric(this.current.getPosition()); ) {
        let t = this.decodeNumeric(this.current.getPosition());
        if ((this.current.setPosition(t.getNewPosition()), t.isFirstDigitFNC1())) {
          let e;
          return (
            (e = t.isSecondDigitFNC1()
              ? new Lt(this.current.getPosition(), this.buffer.toString())
              : new Lt(this.current.getPosition(), this.buffer.toString(), t.getSecondDigit())),
            new Bt(!0, e)
          );
        }
        if ((this.buffer.append(t.getFirstDigit()), t.isSecondDigitFNC1())) {
          let t = new Lt(this.current.getPosition(), this.buffer.toString());
          return new Bt(!0, t);
        }
        this.buffer.append(t.getSecondDigit());
      }
      return (
        this.isNumericToAlphaNumericLatch(this.current.getPosition()) &&
          (this.current.setAlpha(), this.current.incrementPosition(4)),
        new Bt(!1)
      );
    }
    parseIsoIec646Block() {
      for (; this.isStillIsoIec646(this.current.getPosition()); ) {
        let t = this.decodeIsoIec646(this.current.getPosition());
        if ((this.current.setPosition(t.getNewPosition()), t.isFNC1())) {
          let t = new Lt(this.current.getPosition(), this.buffer.toString());
          return new Bt(!0, t);
        }
        this.buffer.append(t.getValue());
      }
      return (
        this.isAlphaOr646ToNumericLatch(this.current.getPosition())
          ? (this.current.incrementPosition(3), this.current.setNumeric())
          : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) &&
            (this.current.getPosition() + 5 < this.information.getSize()
              ? this.current.incrementPosition(5)
              : this.current.setPosition(this.information.getSize()),
            this.current.setAlpha()),
        new Bt(!1)
      );
    }
    parseAlphaBlock() {
      for (; this.isStillAlpha(this.current.getPosition()); ) {
        let t = this.decodeAlphanumeric(this.current.getPosition());
        if ((this.current.setPosition(t.getNewPosition()), t.isFNC1())) {
          let t = new Lt(this.current.getPosition(), this.buffer.toString());
          return new Bt(!0, t);
        }
        this.buffer.append(t.getValue());
      }
      return (
        this.isAlphaOr646ToNumericLatch(this.current.getPosition())
          ? (this.current.incrementPosition(3), this.current.setNumeric())
          : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) &&
            (this.current.getPosition() + 5 < this.information.getSize()
              ? this.current.incrementPosition(5)
              : this.current.setPosition(this.information.getSize()),
            this.current.setIsoIec646()),
        new Bt(!1)
      );
    }
    isStillIsoIec646(t) {
      if (t + 5 > this.information.getSize()) return !1;
      let e = this.extractNumericValueFromBitArray(t, 5);
      if (e >= 5 && e < 16) return !0;
      if (t + 7 > this.information.getSize()) return !1;
      let r = this.extractNumericValueFromBitArray(t, 7);
      if (r >= 64 && r < 116) return !0;
      if (t + 8 > this.information.getSize()) return !1;
      let n = this.extractNumericValueFromBitArray(t, 8);
      return n >= 232 && n < 253;
    }
    decodeIsoIec646(t) {
      let e = this.extractNumericValueFromBitArray(t, 5);
      if (15 === e) return new Pt(t + 5, Pt.FNC1);
      if (e >= 5 && e < 15) return new Pt(t + 5, '0' + (e - 5));
      let r,
        n = this.extractNumericValueFromBitArray(t, 7);
      if (n >= 64 && n < 90) return new Pt(t + 7, '' + (n + 1));
      if (n >= 90 && n < 116) return new Pt(t + 7, '' + (n + 7));
      switch (this.extractNumericValueFromBitArray(t, 8)) {
        case 232:
          r = '!';
          break;
        case 233:
          r = '"';
          break;
        case 234:
          r = '%';
          break;
        case 235:
          r = '&';
          break;
        case 236:
          r = "'";
          break;
        case 237:
          r = '(';
          break;
        case 238:
          r = ')';
          break;
        case 239:
          r = '*';
          break;
        case 240:
          r = '+';
          break;
        case 241:
          r = ',';
          break;
        case 242:
          r = '-';
          break;
        case 243:
          r = '.';
          break;
        case 244:
          r = '/';
          break;
        case 245:
          r = ':';
          break;
        case 246:
          r = ';';
          break;
        case 247:
          r = '<';
          break;
        case 248:
          r = '=';
          break;
        case 249:
          r = '>';
          break;
        case 250:
          r = '?';
          break;
        case 251:
          r = '_';
          break;
        case 252:
          r = ' ';
          break;
        default:
          throw new E();
      }
      return new Pt(t + 8, r);
    }
    isStillAlpha(t) {
      if (t + 5 > this.information.getSize()) return !1;
      let e = this.extractNumericValueFromBitArray(t, 5);
      if (e >= 5 && e < 16) return !0;
      if (t + 6 > this.information.getSize()) return !1;
      let r = this.extractNumericValueFromBitArray(t, 6);
      return r >= 16 && r < 63;
    }
    decodeAlphanumeric(t) {
      let e = this.extractNumericValueFromBitArray(t, 5);
      if (15 === e) return new Pt(t + 5, Pt.FNC1);
      if (e >= 5 && e < 15) return new Pt(t + 5, '0' + (e - 5));
      let r,
        n = this.extractNumericValueFromBitArray(t, 6);
      if (n >= 32 && n < 58) return new Pt(t + 6, '' + (n + 33));
      switch (n) {
        case 58:
          r = '*';
          break;
        case 59:
          r = ',';
          break;
        case 60:
          r = '-';
          break;
        case 61:
          r = '.';
          break;
        case 62:
          r = '/';
          break;
        default:
          throw new j('Decoding invalid alphanumeric value: ' + n);
      }
      return new Pt(t + 6, r);
    }
    isAlphaTo646ToAlphaLatch(t) {
      if (t + 1 > this.information.getSize()) return !1;
      for (let e = 0; e < 5 && e + t < this.information.getSize(); ++e)
        if (2 === e) {
          if (!this.information.get(t + 2)) return !1;
        } else if (this.information.get(t + e)) return !1;
      return !0;
    }
    isAlphaOr646ToNumericLatch(t) {
      if (t + 3 > this.information.getSize()) return !1;
      for (let e = t; e < t + 3; ++e) if (this.information.get(e)) return !1;
      return !0;
    }
    isNumericToAlphaNumericLatch(t) {
      if (t + 1 > this.information.getSize()) return !1;
      for (let e = 0; e < 4 && e + t < this.information.getSize(); ++e) if (this.information.get(t + e)) return !1;
      return !0;
    }
  }
  class xt {
    constructor(t) {
      (this.information = t), (this.generalDecoder = new vt(t));
    }
    getInformation() {
      return this.information;
    }
    getGeneralDecoder() {
      return this.generalDecoder;
    }
  }
  class Vt extends xt {
    constructor(t) {
      super(t);
    }
    encodeCompressedGtin(t, e) {
      t.append('(01)');
      let r = t.length();
      t.append('9'), this.encodeCompressedGtinWithoutAI(t, e, r);
    }
    encodeCompressedGtinWithoutAI(t, e, r) {
      for (let r = 0; r < 4; ++r) {
        let n = this.getGeneralDecoder().extractNumericValueFromBitArray(e + 10 * r, 10);
        n / 100 == 0 && t.append('0'), n / 10 == 0 && t.append('0'), t.append(n);
      }
      Vt.appendCheckDigit(t, r);
    }
    static appendCheckDigit(t, e) {
      let r = 0;
      for (let n = 0; n < 13; n++) {
        let i = t.charAt(n + e).charCodeAt(0) - '0'.charCodeAt(0);
        r += 0 == (1 & n) ? 3 * i : i;
      }
      (r = 10 - (r % 10)), 10 === r && (r = 0), t.append(r);
    }
  }
  Vt.GTIN_SIZE = 40;
  class Ut extends Vt {
    constructor(t) {
      super(t);
    }
    parseInformation() {
      let t = new p();
      t.append('(01)');
      let e = t.length(),
        r = this.getGeneralDecoder().extractNumericValueFromBitArray(Ut.HEADER_SIZE, 4);
      return (
        t.append(r),
        this.encodeCompressedGtinWithoutAI(t, Ut.HEADER_SIZE + 4, e),
        this.getGeneralDecoder().decodeAllCodes(t, Ut.HEADER_SIZE + 44)
      );
    }
  }
  Ut.HEADER_SIZE = 4;
  class Ht extends xt {
    constructor(t) {
      super(t);
    }
    parseInformation() {
      let t = new p();
      return this.getGeneralDecoder().decodeAllCodes(t, Ht.HEADER_SIZE);
    }
  }
  Ht.HEADER_SIZE = 5;
  class Gt extends Vt {
    constructor(t) {
      super(t);
    }
    encodeCompressedWeight(t, e, r) {
      let n = this.getGeneralDecoder().extractNumericValueFromBitArray(e, r);
      this.addWeightCode(t, n);
      let i = this.checkWeight(n),
        s = 1e5;
      for (let e = 0; e < 5; ++e) i / s == 0 && t.append('0'), (s /= 10);
      t.append(i);
    }
  }
  class Xt extends Gt {
    constructor(t) {
      super(t);
    }
    parseInformation() {
      if (this.getInformation().getSize() != Xt.HEADER_SIZE + Gt.GTIN_SIZE + Xt.WEIGHT_SIZE) throw new R();
      let t = new p();
      return (
        this.encodeCompressedGtin(t, Xt.HEADER_SIZE),
        this.encodeCompressedWeight(t, Xt.HEADER_SIZE + Gt.GTIN_SIZE, Xt.WEIGHT_SIZE),
        t.toString()
      );
    }
  }
  (Xt.HEADER_SIZE = 5), (Xt.WEIGHT_SIZE = 15);
  class Wt extends Xt {
    constructor(t) {
      super(t);
    }
    addWeightCode(t, e) {
      t.append('(3103)');
    }
    checkWeight(t) {
      return t;
    }
  }
  class zt extends Xt {
    constructor(t) {
      super(t);
    }
    addWeightCode(t, e) {
      e < 1e4 ? t.append('(3202)') : t.append('(3203)');
    }
    checkWeight(t) {
      return t < 1e4 ? t : t - 1e4;
    }
  }
  class Yt extends Vt {
    constructor(t) {
      super(t);
    }
    parseInformation() {
      if (this.getInformation().getSize() < Yt.HEADER_SIZE + Vt.GTIN_SIZE) throw new R();
      let t = new p();
      this.encodeCompressedGtin(t, Yt.HEADER_SIZE);
      let e = this.getGeneralDecoder().extractNumericValueFromBitArray(
        Yt.HEADER_SIZE + Vt.GTIN_SIZE,
        Yt.LAST_DIGIT_SIZE,
      );
      t.append('(392'), t.append(e), t.append(')');
      let r = this.getGeneralDecoder().decodeGeneralPurposeField(
        Yt.HEADER_SIZE + Vt.GTIN_SIZE + Yt.LAST_DIGIT_SIZE,
        null,
      );
      return t.append(r.getNewString()), t.toString();
    }
  }
  (Yt.HEADER_SIZE = 8), (Yt.LAST_DIGIT_SIZE = 2);
  class Zt extends Vt {
    constructor(t) {
      super(t);
    }
    parseInformation() {
      if (this.getInformation().getSize() < Zt.HEADER_SIZE + Vt.GTIN_SIZE) throw new R();
      let t = new p();
      this.encodeCompressedGtin(t, Zt.HEADER_SIZE);
      let e = this.getGeneralDecoder().extractNumericValueFromBitArray(
        Zt.HEADER_SIZE + Vt.GTIN_SIZE,
        Zt.LAST_DIGIT_SIZE,
      );
      t.append('(393'), t.append(e), t.append(')');
      let r = this.getGeneralDecoder().extractNumericValueFromBitArray(
        Zt.HEADER_SIZE + Vt.GTIN_SIZE + Zt.LAST_DIGIT_SIZE,
        Zt.FIRST_THREE_DIGITS_SIZE,
      );
      r / 100 == 0 && t.append('0'), r / 10 == 0 && t.append('0'), t.append(r);
      let n = this.getGeneralDecoder().decodeGeneralPurposeField(
        Zt.HEADER_SIZE + Vt.GTIN_SIZE + Zt.LAST_DIGIT_SIZE + Zt.FIRST_THREE_DIGITS_SIZE,
        null,
      );
      return t.append(n.getNewString()), t.toString();
    }
  }
  (Zt.HEADER_SIZE = 8), (Zt.LAST_DIGIT_SIZE = 2), (Zt.FIRST_THREE_DIGITS_SIZE = 10);
  class Kt extends Gt {
    constructor(t, e, r) {
      super(t), (this.dateCode = r), (this.firstAIdigits = e);
    }
    parseInformation() {
      if (this.getInformation().getSize() != Kt.HEADER_SIZE + Kt.GTIN_SIZE + Kt.WEIGHT_SIZE + Kt.DATE_SIZE)
        throw new R();
      let t = new p();
      return (
        this.encodeCompressedGtin(t, Kt.HEADER_SIZE),
        this.encodeCompressedWeight(t, Kt.HEADER_SIZE + Kt.GTIN_SIZE, Kt.WEIGHT_SIZE),
        this.encodeCompressedDate(t, Kt.HEADER_SIZE + Kt.GTIN_SIZE + Kt.WEIGHT_SIZE),
        t.toString()
      );
    }
    encodeCompressedDate(t, e) {
      let r = this.getGeneralDecoder().extractNumericValueFromBitArray(e, Kt.DATE_SIZE);
      if (38400 == r) return;
      t.append('('), t.append(this.dateCode), t.append(')');
      let n = r % 32;
      r /= 32;
      let i = (r % 12) + 1;
      r /= 12;
      let s = r;
      s / 10 == 0 && t.append('0'),
        t.append(s),
        i / 10 == 0 && t.append('0'),
        t.append(i),
        n / 10 == 0 && t.append('0'),
        t.append(n);
    }
    addWeightCode(t, e) {
      t.append('('), t.append(this.firstAIdigits), t.append(e / 1e5), t.append(')');
    }
    checkWeight(t) {
      return t % 1e5;
    }
  }
  function qt(t) {
    try {
      if (t.get(1)) return new Ut(t);
      if (!t.get(2)) return new Ht(t);
      switch (vt.extractNumericValueFromBitArray(t, 1, 4)) {
        case 4:
          return new Wt(t);
        case 5:
          return new zt(t);
      }
      switch (vt.extractNumericValueFromBitArray(t, 1, 5)) {
        case 12:
          return new Yt(t);
        case 13:
          return new Zt(t);
      }
      switch (vt.extractNumericValueFromBitArray(t, 1, 7)) {
        case 56:
          return new Kt(t, '310', '11');
        case 57:
          return new Kt(t, '320', '11');
        case 58:
          return new Kt(t, '310', '13');
        case 59:
          return new Kt(t, '320', '13');
        case 60:
          return new Kt(t, '310', '15');
        case 61:
          return new Kt(t, '320', '15');
        case 62:
          return new Kt(t, '310', '17');
        case 63:
          return new Kt(t, '320', '17');
      }
    } catch (e) {
      throw (console.log(e), new j('unknown decoder: ' + t));
    }
  }
  (Kt.HEADER_SIZE = 8), (Kt.WEIGHT_SIZE = 20), (Kt.DATE_SIZE = 16);
  class Qt {
    constructor(t, e, r, n) {
      (this.leftchar = t), (this.rightchar = e), (this.finderpattern = r), (this.maybeLast = n);
    }
    mayBeLast() {
      return this.maybeLast;
    }
    getLeftChar() {
      return this.leftchar;
    }
    getRightChar() {
      return this.rightchar;
    }
    getFinderPattern() {
      return this.finderpattern;
    }
    mustBeLast() {
      return null == this.rightchar;
    }
    toString() {
      return (
        '[ ' +
        this.leftchar +
        ', ' +
        this.rightchar +
        ' : ' +
        (null == this.finderpattern ? 'null' : this.finderpattern.getValue()) +
        ' ]'
      );
    }
    static equals(t, e) {
      return (
        t instanceof Qt &&
        Qt.equalsOrNull(t.leftchar, e.leftchar) &&
        Qt.equalsOrNull(t.rightchar, e.rightchar) &&
        Qt.equalsOrNull(t.finderpattern, e.finderpattern)
      );
    }
    static equalsOrNull(t, e) {
      return null === t ? null === e : Qt.equals(t, e);
    }
    hashCode() {
      return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
    }
  }
  class jt {
    constructor(t, e, r) {
      (this.pairs = t), (this.rowNumber = e), (this.wasReversed = r);
    }
    getPairs() {
      return this.pairs;
    }
    getRowNumber() {
      return this.rowNumber;
    }
    isReversed() {
      return this.wasReversed;
    }
    isEquivalent(t) {
      return this.checkEqualitity(this, t);
    }
    toString() {
      return '{ ' + this.pairs + ' }';
    }
    equals(t, e) {
      return t instanceof jt && this.checkEqualitity(t, e) && t.wasReversed === e.wasReversed;
    }
    checkEqualitity(t, e) {
      if (!t || !e) return;
      let r;
      return (
        t.forEach((t, n) => {
          e.forEach((e) => {
            t.getLeftChar().getValue() === e.getLeftChar().getValue() &&
              t.getRightChar().getValue() === e.getRightChar().getValue() &&
              t.getFinderPatter().getValue() === e.getFinderPatter().getValue() &&
              (r = !0);
          });
        }),
        r
      );
    }
  }
  class Jt extends Dt {
    constructor() {
      super(...arguments), (this.pairs = new Array(Jt.MAX_PAIRS)), (this.rows = new Array()), (this.startEnd = [2]);
    }
    decodeRow(t, e, r) {
      (this.pairs.length = 0), (this.startFromEven = !1);
      try {
        return Jt.constructResult(this.decodeRow2pairs(t, e));
      } catch (t) {}
      return (this.pairs.length = 0), (this.startFromEven = !0), Jt.constructResult(this.decodeRow2pairs(t, e));
    }
    reset() {
      (this.pairs.length = 0), (this.rows.length = 0);
    }
    decodeRow2pairs(t, e) {
      let r,
        n = !1;
      for (; !n; )
        try {
          this.pairs.push(this.retrieveNextPair(e, this.pairs, t));
        } catch (t) {
          if (t instanceof R) {
            if (!this.pairs.length) throw new R();
            n = !0;
          }
        }
      if (this.checkChecksum()) return this.pairs;
      if (((r = !!this.rows.length), this.storeRow(t, !1), r)) {
        let t = this.checkRowsBoolean(!1);
        if (null != t) return t;
        if (((t = this.checkRowsBoolean(!0)), null != t)) return t;
      }
      throw new R();
    }
    checkRowsBoolean(t) {
      if (this.rows.length > 25) return (this.rows.length = 0), null;
      (this.pairs.length = 0), t && (this.rows = this.rows.reverse());
      let e = null;
      try {
        e = this.checkRows(new Array(), 0);
      } catch (t) {
        console.log(t);
      }
      return t && (this.rows = this.rows.reverse()), e;
    }
    checkRows(t, e) {
      for (let r = e; r < this.rows.length; r++) {
        let e = this.rows[r];
        this.pairs.length = 0;
        for (let e of t) this.pairs.push(e.getPairs());
        if ((this.pairs.push(e.getPairs()), !Jt.isValidSequence(this.pairs))) continue;
        if (this.checkChecksum()) return this.pairs;
        let n = new Array(t);
        n.push(e);
        try {
          return this.checkRows(n, r + 1);
        } catch (t) {
          console.log(t);
        }
      }
      throw new R();
    }
    static isValidSequence(t) {
      for (let e of Jt.FINDER_PATTERN_SEQUENCES) {
        if (t.length > e.length) continue;
        let r = !0;
        for (let n = 0; n < t.length; n++)
          if (t[n].getFinderPattern().getValue() != e[n]) {
            r = !1;
            break;
          }
        if (r) return !0;
      }
      return !1;
    }
    storeRow(t, e) {
      let r = 0,
        n = !1,
        i = !1;
      for (; r < this.rows.length; ) {
        let e = this.rows[r];
        if (e.getRowNumber() > t) {
          i = e.isEquivalent(this.pairs);
          break;
        }
        (n = e.isEquivalent(this.pairs)), r++;
      }
      i ||
        n ||
        Jt.isPartialRow(this.pairs, this.rows) ||
        (this.rows.push(r, new jt(this.pairs, t, e)), this.removePartialRows(this.pairs, this.rows));
    }
    removePartialRows(t, e) {
      for (let r of e)
        if (r.getPairs().length !== t.length) for (let e of r.getPairs()) for (let r of t) if (Qt.equals(e, r)) break;
    }
    static isPartialRow(t, e) {
      for (let r of e) {
        let e = !0;
        for (let n of t) {
          let t = !1;
          for (let e of r.getPairs())
            if (n.equals(e)) {
              t = !0;
              break;
            }
          if (!t) {
            e = !1;
            break;
          }
        }
        if (e) return !0;
      }
      return !1;
    }
    getRows() {
      return this.rows;
    }
    static constructResult(t) {
      let e = qt(
          class {
            static buildBitArray(t) {
              let e = 2 * t.length - 1;
              null == t[t.length - 1].getRightChar() && (e -= 1);
              let r = new w(12 * e),
                n = 0,
                i = t[0].getRightChar().getValue();
              for (let t = 11; t >= 0; --t) 0 != (i & (1 << t)) && r.set(n), n++;
              for (let e = 1; e < t.length; ++e) {
                let i = t[e],
                  s = i.getLeftChar().getValue();
                for (let t = 11; t >= 0; --t) 0 != (s & (1 << t)) && r.set(n), n++;
                if (null != i.getRightChar()) {
                  let t = i.getRightChar().getValue();
                  for (let e = 11; e >= 0; --e) 0 != (t & (1 << e)) && r.set(n), n++;
                }
              }
              return r;
            }
          }.buildBitArray(t),
        ).parseInformation(),
        r = t[0].getFinderPattern().getResultPoints(),
        n = t[t.length - 1].getFinderPattern().getResultPoints(),
        i = [r[0], r[1], n[0], n[1]];
      return new F(e, null, null, i, v.RSS_EXPANDED, null);
    }
    checkChecksum() {
      let t = this.pairs.get(0),
        e = t.getLeftChar(),
        r = t.getRightChar();
      if (null == r) return !1;
      let n = r.getChecksumPortion(),
        i = 2;
      for (let t = 1; t < this.pairs.size(); ++t) {
        let e = this.pairs.get(t);
        (n += e.getLeftChar().getChecksumPortion()), i++;
        let r = e.getRightChar();
        null != r && ((n += r.getChecksumPortion()), i++);
      }
      return (n %= 211), 211 * (i - 4) + n == e.getValue();
    }
    static getNextSecondBar(t, e) {
      let r;
      return (
        t.get(e) ? ((r = t.getNextUnset(e)), (r = t.getNextSet(r))) : ((r = t.getNextSet(e)), (r = t.getNextUnset(r))),
        r
      );
    }
    retrieveNextPair(t, e, r) {
      let n,
        i = e.length % 2 == 0;
      this.startFromEven && (i = !i);
      let s = !0,
        o = -1;
      do {
        this.findNextPair(t, e, o),
          (n = this.parseFoundFinderPattern(t, r, i)),
          null == n ? (o = Jt.getNextSecondBar(t, this.startEnd[0])) : (s = !1);
      } while (s);
      let a,
        l = this.decodeDataCharacter(t, n, i, !0);
      if (!this.isEmptyPair(e) && e[e.length - 1].mustBeLast()) throw new R();
      try {
        a = this.decodeDataCharacter(t, n, i, !1);
      } catch (t) {
        (a = null), console.log(t);
      }
      return new Qt(l, a, n, !0);
    }
    isEmptyPair(t) {
      return 0 === t.length;
    }
    findNextPair(t, e, r) {
      let n = this.getDecodeFinderCounters();
      (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
      let i,
        s = t.getSize();
      if (r >= 0) i = r;
      else if (this.isEmptyPair(e)) i = 0;
      else {
        i = e[e.length - 1].getFinderPattern().getStartEnd()[1];
      }
      let o = e.length % 2 != 0;
      this.startFromEven && (o = !o);
      let a = !1;
      for (; i < s && ((a = !t.get(i)), a); ) i++;
      let l = 0,
        h = i;
      for (let e = i; e < s; e++)
        if (t.get(e) != a) n[l]++;
        else {
          if (3 == l) {
            if ((o && Jt.reverseCounters(n), Jt.isFinderPattern(n)))
              return (this.startEnd[0] = h), void (this.startEnd[1] = e);
            o && Jt.reverseCounters(n), (h += n[0] + n[1]), (n[0] = n[2]), (n[1] = n[3]), (n[2] = 0), (n[3] = 0), l--;
          } else l++;
          (n[l] = 1), (a = !a);
        }
      throw new R();
    }
    static reverseCounters(t) {
      let e = t.length;
      for (let r = 0; r < e / 2; ++r) {
        let n = t[r];
        (t[r] = t[e - r - 1]), (t[e - r - 1] = n);
      }
    }
    parseFoundFinderPattern(t, e, r) {
      let n, i, s;
      if (r) {
        let e = this.startEnd[0] - 1;
        for (; e >= 0 && !t.get(e); ) e--;
        e++, (n = this.startEnd[0] - e), (i = e), (s = this.startEnd[1]);
      } else (i = this.startEnd[0]), (s = t.getNextUnset(this.startEnd[1] + 1)), (n = s - this.startEnd[1]);
      let o,
        a = this.getDecodeFinderCounters();
      c.arraycopy(a, 0, a, 1, a.length - 1), (a[0] = n);
      try {
        o = this.parseFinderValue(a, Jt.FINDER_PATTERNS);
      } catch (t) {
        return null;
      }
      return new Ot(o, [i, s], i, s, e);
    }
    decodeDataCharacter(t, e, r, n) {
      let i = this.getDataCharacterCounters();
      for (let t = 0; t < i.length; t++) i[t] = 0;
      if (n) Jt.recordPatternInReverse(t, e.getStartEnd()[0], i);
      else {
        Jt.recordPattern(t, e.getStartEnd()[1], i);
        for (let t = 0, e = i.length - 1; t < e; t++, e--) {
          let r = i[t];
          (i[t] = i[e]), (i[e] = r);
        }
      }
      let s = tt.sum(new Int32Array(i)) / 17,
        o = (e.getStartEnd()[1] - e.getStartEnd()[0]) / 15;
      if (Math.abs(s - o) / o > 0.3) throw new R();
      let a = this.getOddCounts(),
        l = this.getEvenCounts(),
        h = this.getOddRoundingErrors(),
        c = this.getEvenRoundingErrors();
      for (let t = 0; t < i.length; t++) {
        let e = (1 * i[t]) / s,
          r = e + 0.5;
        if (r < 1) {
          if (e < 0.3) throw new R();
          r = 1;
        } else if (r > 8) {
          if (e > 8.7) throw new R();
          r = 8;
        }
        let n = t / 2;
        0 == (1 & t) ? ((a[n] = r), (h[n] = e - r)) : ((l[n] = r), (c[n] = e - r));
      }
      this.adjustOddEvenCounts(17);
      let u = 4 * e.getValue() + (r ? 0 : 2) + (n ? 0 : 1) - 1,
        d = 0,
        g = 0;
      for (let t = a.length - 1; t >= 0; t--) {
        if (Jt.isNotA1left(e, r, n)) {
          let e = Jt.WEIGHTS[u][2 * t];
          g += a[t] * e;
        }
        d += a[t];
      }
      let f = 0;
      for (let t = l.length - 1; t >= 0; t--)
        if (Jt.isNotA1left(e, r, n)) {
          let e = Jt.WEIGHTS[u][2 * t + 1];
          f += l[t] * e;
        }
      let w = g + f;
      if (0 != (1 & d) || d > 13 || d < 4) throw new R();
      let A = (13 - d) / 2,
        C = Jt.SYMBOL_WIDEST[A],
        E = 9 - C,
        m = Mt.getRSSvalue(a, C, !0),
        _ = Mt.getRSSvalue(l, E, !1),
        I = Jt.EVEN_TOTAL_SUBSET[A],
        S = Jt.GSUM[A];
      return new yt(m * I + _ + S, w);
    }
    static isNotA1left(t, e, r) {
      return !(0 == t.getValue() && e && r);
    }
    adjustOddEvenCounts(t) {
      let e = tt.sum(new Int32Array(this.getOddCounts())),
        r = tt.sum(new Int32Array(this.getEvenCounts())),
        n = !1,
        i = !1;
      e > 13 ? (i = !0) : e < 4 && (n = !0);
      let s = !1,
        o = !1;
      r > 13 ? (o = !0) : r < 4 && (s = !0);
      let a = e + r - t,
        l = 1 == (1 & e),
        h = 0 == (1 & r);
      if (1 == a)
        if (l) {
          if (h) throw new R();
          i = !0;
        } else {
          if (!h) throw new R();
          o = !0;
        }
      else if (-1 == a)
        if (l) {
          if (h) throw new R();
          n = !0;
        } else {
          if (!h) throw new R();
          s = !0;
        }
      else {
        if (0 != a) throw new R();
        if (l) {
          if (!h) throw new R();
          e < r ? ((n = !0), (o = !0)) : ((i = !0), (s = !0));
        } else if (h) throw new R();
      }
      if (n) {
        if (i) throw new R();
        Jt.increment(this.getOddCounts(), this.getOddRoundingErrors());
      }
      if ((i && Jt.decrement(this.getOddCounts(), this.getOddRoundingErrors()), s)) {
        if (o) throw new R();
        Jt.increment(this.getEvenCounts(), this.getOddRoundingErrors());
      }
      o && Jt.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
    }
  }
  (Jt.SYMBOL_WIDEST = [7, 5, 4, 3, 1]),
    (Jt.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204]),
    (Jt.GSUM = [0, 348, 1388, 2948, 3988]),
    (Jt.FINDER_PATTERNS = [
      Int32Array.from([1, 8, 4, 1]),
      Int32Array.from([3, 6, 4, 1]),
      Int32Array.from([3, 4, 6, 1]),
      Int32Array.from([3, 2, 8, 1]),
      Int32Array.from([2, 6, 5, 1]),
      Int32Array.from([2, 2, 9, 1]),
    ]),
    (Jt.WEIGHTS = [
      [1, 3, 9, 27, 81, 32, 96, 77],
      [20, 60, 180, 118, 143, 7, 21, 63],
      [189, 145, 13, 39, 117, 140, 209, 205],
      [193, 157, 49, 147, 19, 57, 171, 91],
      [62, 186, 136, 197, 169, 85, 44, 132],
      [185, 133, 188, 142, 4, 12, 36, 108],
      [113, 128, 173, 97, 80, 29, 87, 50],
      [150, 28, 84, 41, 123, 158, 52, 156],
      [46, 138, 203, 187, 139, 206, 196, 166],
      [76, 17, 51, 153, 37, 111, 122, 155],
      [43, 129, 176, 106, 107, 110, 119, 146],
      [16, 48, 144, 10, 30, 90, 59, 177],
      [109, 116, 137, 200, 178, 112, 125, 164],
      [70, 210, 208, 202, 184, 130, 179, 115],
      [134, 191, 151, 31, 93, 68, 204, 190],
      [148, 22, 66, 198, 172, 94, 71, 2],
      [6, 18, 54, 162, 64, 192, 154, 40],
      [120, 149, 25, 75, 14, 42, 126, 167],
      [79, 26, 78, 23, 69, 207, 199, 175],
      [103, 98, 83, 38, 114, 131, 182, 124],
      [161, 61, 183, 127, 170, 88, 53, 159],
      [55, 165, 73, 8, 24, 72, 5, 15],
      [45, 135, 194, 160, 58, 174, 100, 89],
    ]),
    (Jt.FINDER_PAT_A = 0),
    (Jt.FINDER_PAT_B = 1),
    (Jt.FINDER_PAT_C = 2),
    (Jt.FINDER_PAT_D = 3),
    (Jt.FINDER_PAT_E = 4),
    (Jt.FINDER_PAT_F = 5),
    (Jt.FINDER_PATTERN_SEQUENCES = [
      [Jt.FINDER_PAT_A, Jt.FINDER_PAT_A],
      [Jt.FINDER_PAT_A, Jt.FINDER_PAT_B, Jt.FINDER_PAT_B],
      [Jt.FINDER_PAT_A, Jt.FINDER_PAT_C, Jt.FINDER_PAT_B, Jt.FINDER_PAT_D],
      [Jt.FINDER_PAT_A, Jt.FINDER_PAT_E, Jt.FINDER_PAT_B, Jt.FINDER_PAT_D, Jt.FINDER_PAT_C],
      [Jt.FINDER_PAT_A, Jt.FINDER_PAT_E, Jt.FINDER_PAT_B, Jt.FINDER_PAT_D, Jt.FINDER_PAT_D, Jt.FINDER_PAT_F],
      [
        Jt.FINDER_PAT_A,
        Jt.FINDER_PAT_E,
        Jt.FINDER_PAT_B,
        Jt.FINDER_PAT_D,
        Jt.FINDER_PAT_E,
        Jt.FINDER_PAT_F,
        Jt.FINDER_PAT_F,
      ],
      [
        Jt.FINDER_PAT_A,
        Jt.FINDER_PAT_A,
        Jt.FINDER_PAT_B,
        Jt.FINDER_PAT_B,
        Jt.FINDER_PAT_C,
        Jt.FINDER_PAT_C,
        Jt.FINDER_PAT_D,
        Jt.FINDER_PAT_D,
      ],
      [
        Jt.FINDER_PAT_A,
        Jt.FINDER_PAT_A,
        Jt.FINDER_PAT_B,
        Jt.FINDER_PAT_B,
        Jt.FINDER_PAT_C,
        Jt.FINDER_PAT_C,
        Jt.FINDER_PAT_D,
        Jt.FINDER_PAT_E,
        Jt.FINDER_PAT_E,
      ],
      [
        Jt.FINDER_PAT_A,
        Jt.FINDER_PAT_A,
        Jt.FINDER_PAT_B,
        Jt.FINDER_PAT_B,
        Jt.FINDER_PAT_C,
        Jt.FINDER_PAT_C,
        Jt.FINDER_PAT_D,
        Jt.FINDER_PAT_E,
        Jt.FINDER_PAT_F,
        Jt.FINDER_PAT_F,
      ],
      [
        Jt.FINDER_PAT_A,
        Jt.FINDER_PAT_A,
        Jt.FINDER_PAT_B,
        Jt.FINDER_PAT_B,
        Jt.FINDER_PAT_C,
        Jt.FINDER_PAT_D,
        Jt.FINDER_PAT_D,
        Jt.FINDER_PAT_E,
        Jt.FINDER_PAT_E,
        Jt.FINDER_PAT_F,
        Jt.FINDER_PAT_F,
      ],
    ]),
    (Jt.MAX_PAIRS = 11);
  class $t extends yt {
    constructor(t, e, r) {
      super(t, e), (this.count = 0), (this.finderPattern = r);
    }
    getFinderPattern() {
      return this.finderPattern;
    }
    getCount() {
      return this.count;
    }
    incrementCount() {
      this.count++;
    }
  }
  class te extends Dt {
    constructor() {
      super(...arguments), (this.possibleLeftPairs = []), (this.possibleRightPairs = []);
    }
    decodeRow(t, e, r) {
      const n = this.decodePair(e, !1, t, r);
      te.addOrTally(this.possibleLeftPairs, n), e.reverse();
      let i = this.decodePair(e, !0, t, r);
      te.addOrTally(this.possibleRightPairs, i), e.reverse();
      for (let t of this.possibleLeftPairs)
        if (t.getCount() > 1)
          for (let e of this.possibleRightPairs)
            if (e.getCount() > 1 && te.checkChecksum(t, e)) return te.constructResult(t, e);
      throw new R();
    }
    static addOrTally(t, e) {
      if (null == e) return;
      let r = !1;
      for (let n of t)
        if (n.getValue() === e.getValue()) {
          n.incrementCount(), (r = !0);
          break;
        }
      r || t.push(e);
    }
    reset() {
      (this.possibleLeftPairs.length = 0), (this.possibleRightPairs.length = 0);
    }
    static constructResult(t, e) {
      let r = 4537077 * t.getValue() + e.getValue(),
        n = new String(r).toString(),
        i = new p();
      for (let t = 13 - n.length; t > 0; t--) i.append('0');
      i.append(n);
      let s = 0;
      for (let t = 0; t < 13; t++) {
        let e = i.charAt(t).charCodeAt(0) - '0'.charCodeAt(0);
        s += 0 == (1 & t) ? 3 * e : e;
      }
      (s = 10 - (s % 10)), 10 === s && (s = 0), i.append(s.toString());
      let o = t.getFinderPattern().getResultPoints(),
        a = e.getFinderPattern().getResultPoints();
      return new F(i.toString(), null, 0, [o[0], o[1], a[0], a[1]], v.RSS_14, new Date().getTime());
    }
    static checkChecksum(t, e) {
      let r = (t.getChecksumPortion() + 16 * e.getChecksumPortion()) % 79,
        n = 9 * t.getFinderPattern().getValue() + e.getFinderPattern().getValue();
      return n > 72 && n--, n > 8 && n--, r === n;
    }
    decodePair(t, e, r, n) {
      try {
        let i = this.findFinderPattern(t, e),
          s = this.parseFoundFinderPattern(t, r, e, i),
          o = null == n ? null : n.get(C.NEED_RESULT_POINT_CALLBACK);
        if (null != o) {
          let n = (i[0] + i[1]) / 2;
          e && (n = t.getSize() - 1 - n), o.foundPossibleResultPoint(new rt(n, r));
        }
        let a = this.decodeDataCharacter(t, s, !0),
          l = this.decodeDataCharacter(t, s, !1);
        return new $t(1597 * a.getValue() + l.getValue(), a.getChecksumPortion() + 4 * l.getChecksumPortion(), s);
      } catch (t) {
        return null;
      }
    }
    decodeDataCharacter(t, e, r) {
      let n = this.getDataCharacterCounters();
      for (let t = 0; t < n.length; t++) n[t] = 0;
      if (r) gt.recordPatternInReverse(t, e.getStartEnd()[0], n);
      else {
        gt.recordPattern(t, e.getStartEnd()[1] + 1, n);
        for (let t = 0, e = n.length - 1; t < e; t++, e--) {
          let r = n[t];
          (n[t] = n[e]), (n[e] = r);
        }
      }
      let i = r ? 16 : 15,
        s = tt.sum(new Int32Array(n)) / i,
        o = this.getOddCounts(),
        a = this.getEvenCounts(),
        l = this.getOddRoundingErrors(),
        h = this.getEvenRoundingErrors();
      for (let t = 0; t < n.length; t++) {
        let e = n[t] / s,
          r = Math.floor(e + 0.5);
        r < 1 ? (r = 1) : r > 8 && (r = 8);
        let i = Math.floor(t / 2);
        0 == (1 & t) ? ((o[i] = r), (l[i] = e - r)) : ((a[i] = r), (h[i] = e - r));
      }
      this.adjustOddEvenCounts(r, i);
      let c = 0,
        u = 0;
      for (let t = o.length - 1; t >= 0; t--) (u *= 9), (u += o[t]), (c += o[t]);
      let d = 0,
        g = 0;
      for (let t = a.length - 1; t >= 0; t--) (d *= 9), (d += a[t]), (g += a[t]);
      let f = u + 3 * d;
      if (r) {
        if (0 != (1 & c) || c > 12 || c < 4) throw new R();
        let t = (12 - c) / 2,
          e = te.OUTSIDE_ODD_WIDEST[t],
          r = 9 - e,
          n = Mt.getRSSvalue(o, e, !1),
          i = Mt.getRSSvalue(a, r, !0),
          s = te.OUTSIDE_EVEN_TOTAL_SUBSET[t],
          l = te.OUTSIDE_GSUM[t];
        return new yt(n * s + i + l, f);
      }
      {
        if (0 != (1 & g) || g > 10 || g < 4) throw new R();
        let t = (10 - g) / 2,
          e = te.INSIDE_ODD_WIDEST[t],
          r = 9 - e,
          n = Mt.getRSSvalue(o, e, !0),
          i = Mt.getRSSvalue(a, r, !1),
          s = te.INSIDE_ODD_TOTAL_SUBSET[t],
          l = te.INSIDE_GSUM[t];
        return new yt(i * s + n + l, f);
      }
    }
    findFinderPattern(t, e) {
      let r = this.getDecodeFinderCounters();
      (r[0] = 0), (r[1] = 0), (r[2] = 0), (r[3] = 0);
      let n = t.getSize(),
        i = !1,
        s = 0;
      for (; s < n && ((i = !t.get(s)), e !== i); ) s++;
      let o = 0,
        a = s;
      for (let e = s; e < n; e++)
        if (t.get(e) !== i) r[o]++;
        else {
          if (3 === o) {
            if (Dt.isFinderPattern(r)) return [a, e];
            (a += r[0] + r[1]), (r[0] = r[2]), (r[1] = r[3]), (r[2] = 0), (r[3] = 0), o--;
          } else o++;
          (r[o] = 1), (i = !i);
        }
      throw new R();
    }
    parseFoundFinderPattern(t, e, r, n) {
      let i = t.get(n[0]),
        s = n[0] - 1;
      for (; s >= 0 && i !== t.get(s); ) s--;
      s++;
      const o = n[0] - s,
        a = this.getDecodeFinderCounters(),
        l = new Int32Array(a.length);
      c.arraycopy(a, 0, l, 1, a.length - 1), (l[0] = o);
      const h = this.parseFinderValue(l, te.FINDER_PATTERNS);
      let u = s,
        d = n[1];
      return r && ((u = t.getSize() - 1 - u), (d = t.getSize() - 1 - d)), new Ot(h, [s, n[1]], u, d, e);
    }
    adjustOddEvenCounts(t, e) {
      let r = tt.sum(new Int32Array(this.getOddCounts())),
        n = tt.sum(new Int32Array(this.getEvenCounts())),
        i = !1,
        s = !1,
        o = !1,
        a = !1;
      t
        ? (r > 12 ? (s = !0) : r < 4 && (i = !0), n > 12 ? (a = !0) : n < 4 && (o = !0))
        : (r > 11 ? (s = !0) : r < 5 && (i = !0), n > 10 ? (a = !0) : n < 4 && (o = !0));
      let l = r + n - e,
        h = (1 & r) == (t ? 1 : 0),
        c = 1 == (1 & n);
      if (1 === l)
        if (h) {
          if (c) throw new R();
          s = !0;
        } else {
          if (!c) throw new R();
          a = !0;
        }
      else if (-1 === l)
        if (h) {
          if (c) throw new R();
          i = !0;
        } else {
          if (!c) throw new R();
          o = !0;
        }
      else {
        if (0 !== l) throw new R();
        if (h) {
          if (!c) throw new R();
          r < n ? ((i = !0), (a = !0)) : ((s = !0), (o = !0));
        } else if (c) throw new R();
      }
      if (i) {
        if (s) throw new R();
        Dt.increment(this.getOddCounts(), this.getOddRoundingErrors());
      }
      if ((s && Dt.decrement(this.getOddCounts(), this.getOddRoundingErrors()), o)) {
        if (a) throw new R();
        Dt.increment(this.getEvenCounts(), this.getOddRoundingErrors());
      }
      a && Dt.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
    }
  }
  (te.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126]),
    (te.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81]),
    (te.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715]),
    (te.INSIDE_GSUM = [0, 336, 1036, 1516]),
    (te.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1]),
    (te.INSIDE_ODD_WIDEST = [2, 4, 6, 8]),
    (te.FINDER_PATTERNS = [
      Int32Array.from([3, 8, 2, 1]),
      Int32Array.from([3, 5, 5, 1]),
      Int32Array.from([3, 3, 7, 1]),
      Int32Array.from([3, 1, 9, 1]),
      Int32Array.from([2, 7, 4, 1]),
      Int32Array.from([2, 5, 6, 1]),
      Int32Array.from([2, 3, 8, 1]),
      Int32Array.from([1, 5, 7, 1]),
      Int32Array.from([1, 3, 9, 1]),
    ]);
  class ee extends gt {
    constructor(t) {
      super(), (this.readers = []);
      const e = t ? t.get(C.POSSIBLE_FORMATS) : null,
        r = t && void 0 !== t.get(C.ASSUME_CODE_39_CHECK_DIGIT);
      e &&
        ((e.includes(v.EAN_13) || e.includes(v.UPC_A) || e.includes(v.EAN_8) || e.includes(v.UPC_E)) &&
          this.readers.push(new Nt(t)),
        e.includes(v.CODE_39) && this.readers.push(new wt(r)),
        e.includes(v.CODE_128) && this.readers.push(new ft()),
        e.includes(v.ITF) && this.readers.push(new At()),
        e.includes(v.RSS_14) && this.readers.push(new te()),
        e.includes(v.RSS_EXPANDED) &&
          (console.warn('RSS Expanded reader IS NOT ready for production yet! use at your own risk.'),
          this.readers.push(new Jt()))),
        0 === this.readers.length &&
          (this.readers.push(new Nt(t)),
          this.readers.push(new wt()),
          this.readers.push(new Nt(t)),
          this.readers.push(new ft()),
          this.readers.push(new At()),
          this.readers.push(new te()));
    }
    decodeRow(t, e, r) {
      for (let n = 0; n < this.readers.length; n++)
        try {
          return this.readers[n].decodeRow(t, e, r);
        } catch (t) {}
      throw new R();
    }
    reset() {
      this.readers.forEach((t) => t.reset());
    }
  }
  class re {
    constructor(t, e, r) {
      (this.ecCodewords = t), (this.ecBlocks = [e]), r && this.ecBlocks.push(r);
    }
    getECCodewords() {
      return this.ecCodewords;
    }
    getECBlocks() {
      return this.ecBlocks;
    }
  }
  class ne {
    constructor(t, e) {
      (this.count = t), (this.dataCodewords = e);
    }
    getCount() {
      return this.count;
    }
    getDataCodewords() {
      return this.dataCodewords;
    }
  }
  class ie {
    constructor(t, e, r, n, i, s) {
      (this.versionNumber = t),
        (this.symbolSizeRows = e),
        (this.symbolSizeColumns = r),
        (this.dataRegionSizeRows = n),
        (this.dataRegionSizeColumns = i),
        (this.ecBlocks = s);
      let o = 0;
      const a = s.getECCodewords(),
        l = s.getECBlocks();
      for (let t of l) o += t.getCount() * (t.getDataCodewords() + a);
      this.totalCodewords = o;
    }
    getVersionNumber() {
      return this.versionNumber;
    }
    getSymbolSizeRows() {
      return this.symbolSizeRows;
    }
    getSymbolSizeColumns() {
      return this.symbolSizeColumns;
    }
    getDataRegionSizeRows() {
      return this.dataRegionSizeRows;
    }
    getDataRegionSizeColumns() {
      return this.dataRegionSizeColumns;
    }
    getTotalCodewords() {
      return this.totalCodewords;
    }
    getECBlocks() {
      return this.ecBlocks;
    }
    static getVersionForDimensions(t, e) {
      if (0 != (1 & t) || 0 != (1 & e)) throw new E();
      for (let r of ie.VERSIONS) if (r.symbolSizeRows === t && r.symbolSizeColumns === e) return r;
      throw new E();
    }
    toString() {
      return '' + this.versionNumber;
    }
    static buildVersions() {
      return [
        new ie(1, 10, 10, 8, 8, new re(5, new ne(1, 3))),
        new ie(2, 12, 12, 10, 10, new re(7, new ne(1, 5))),
        new ie(3, 14, 14, 12, 12, new re(10, new ne(1, 8))),
        new ie(4, 16, 16, 14, 14, new re(12, new ne(1, 12))),
        new ie(5, 18, 18, 16, 16, new re(14, new ne(1, 18))),
        new ie(6, 20, 20, 18, 18, new re(18, new ne(1, 22))),
        new ie(7, 22, 22, 20, 20, new re(20, new ne(1, 30))),
        new ie(8, 24, 24, 22, 22, new re(24, new ne(1, 36))),
        new ie(9, 26, 26, 24, 24, new re(28, new ne(1, 44))),
        new ie(10, 32, 32, 14, 14, new re(36, new ne(1, 62))),
        new ie(11, 36, 36, 16, 16, new re(42, new ne(1, 86))),
        new ie(12, 40, 40, 18, 18, new re(48, new ne(1, 114))),
        new ie(13, 44, 44, 20, 20, new re(56, new ne(1, 144))),
        new ie(14, 48, 48, 22, 22, new re(68, new ne(1, 174))),
        new ie(15, 52, 52, 24, 24, new re(42, new ne(2, 102))),
        new ie(16, 64, 64, 14, 14, new re(56, new ne(2, 140))),
        new ie(17, 72, 72, 16, 16, new re(36, new ne(4, 92))),
        new ie(18, 80, 80, 18, 18, new re(48, new ne(4, 114))),
        new ie(19, 88, 88, 20, 20, new re(56, new ne(4, 144))),
        new ie(20, 96, 96, 22, 22, new re(68, new ne(4, 174))),
        new ie(21, 104, 104, 24, 24, new re(56, new ne(6, 136))),
        new ie(22, 120, 120, 18, 18, new re(68, new ne(6, 175))),
        new ie(23, 132, 132, 20, 20, new re(62, new ne(8, 163))),
        new ie(24, 144, 144, 22, 22, new re(62, new ne(8, 156), new ne(2, 155))),
        new ie(25, 8, 18, 6, 16, new re(7, new ne(1, 5))),
        new ie(26, 8, 32, 6, 14, new re(11, new ne(1, 10))),
        new ie(27, 12, 26, 10, 24, new re(14, new ne(1, 16))),
        new ie(28, 12, 36, 10, 16, new re(18, new ne(1, 22))),
        new ie(29, 16, 36, 14, 16, new re(24, new ne(1, 32))),
        new ie(30, 16, 48, 14, 22, new re(28, new ne(1, 49))),
      ];
    }
  }
  ie.VERSIONS = ie.buildVersions();
  class se {
    constructor(t) {
      const e = t.getHeight();
      if (e < 8 || e > 144 || 0 != (1 & e)) throw new E();
      (this.version = se.readVersion(t)),
        (this.mappingBitMatrix = this.extractDataRegion(t)),
        (this.readMappingMatrix = new T(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight()));
    }
    getVersion() {
      return this.version;
    }
    static readVersion(t) {
      const e = t.getHeight(),
        r = t.getWidth();
      return ie.getVersionForDimensions(e, r);
    }
    readCodewords() {
      const t = new Int8Array(this.version.getTotalCodewords());
      let e = 0,
        r = 4,
        n = 0;
      const i = this.mappingBitMatrix.getHeight(),
        s = this.mappingBitMatrix.getWidth();
      let o = !1,
        a = !1,
        l = !1,
        h = !1;
      do {
        if (r !== i || 0 !== n || o)
          if (r !== i - 2 || 0 !== n || 0 == (3 & s) || a)
            if (r !== i + 4 || 2 !== n || 0 != (7 & s) || l)
              if (r !== i - 2 || 0 !== n || 4 != (7 & s) || h) {
                do {
                  r < i && n >= 0 && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, i, s)),
                    (r -= 2),
                    (n += 2);
                } while (r >= 0 && n < s);
                (r += 1), (n += 3);
                do {
                  r >= 0 && n < s && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, i, s)),
                    (r += 2),
                    (n -= 2);
                } while (r < i && n >= 0);
                (r += 3), (n += 1);
              } else (t[e++] = 255 & this.readCorner4(i, s)), (r -= 2), (n += 2), (h = !0);
            else (t[e++] = 255 & this.readCorner3(i, s)), (r -= 2), (n += 2), (l = !0);
          else (t[e++] = 255 & this.readCorner2(i, s)), (r -= 2), (n += 2), (a = !0);
        else (t[e++] = 255 & this.readCorner1(i, s)), (r -= 2), (n += 2), (o = !0);
      } while (r < i || n < s);
      if (e !== this.version.getTotalCodewords()) throw new E();
      return t;
    }
    readModule(t, e, r, n) {
      return (
        t < 0 && ((t += r), (e += 4 - ((r + 4) & 7))),
        e < 0 && ((e += n), (t += 4 - ((n + 4) & 7))),
        this.readMappingMatrix.set(e, t),
        this.mappingBitMatrix.get(e, t)
      );
    }
    readUtah(t, e, r, n) {
      let i = 0;
      return (
        this.readModule(t - 2, e - 2, r, n) && (i |= 1),
        (i <<= 1),
        this.readModule(t - 2, e - 1, r, n) && (i |= 1),
        (i <<= 1),
        this.readModule(t - 1, e - 2, r, n) && (i |= 1),
        (i <<= 1),
        this.readModule(t - 1, e - 1, r, n) && (i |= 1),
        (i <<= 1),
        this.readModule(t - 1, e, r, n) && (i |= 1),
        (i <<= 1),
        this.readModule(t, e - 2, r, n) && (i |= 1),
        (i <<= 1),
        this.readModule(t, e - 1, r, n) && (i |= 1),
        (i <<= 1),
        this.readModule(t, e, r, n) && (i |= 1),
        i
      );
    }
    readCorner1(t, e) {
      let r = 0;
      return (
        this.readModule(t - 1, 0, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(t - 1, 1, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(t - 1, 2, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(0, e - 2, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(0, e - 1, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(1, e - 1, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(2, e - 1, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(3, e - 1, t, e) && (r |= 1),
        r
      );
    }
    readCorner2(t, e) {
      let r = 0;
      return (
        this.readModule(t - 3, 0, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(t - 2, 0, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(t - 1, 0, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(0, e - 4, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(0, e - 3, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(0, e - 2, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(0, e - 1, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(1, e - 1, t, e) && (r |= 1),
        r
      );
    }
    readCorner3(t, e) {
      let r = 0;
      return (
        this.readModule(t - 1, 0, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(t - 1, e - 1, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(0, e - 3, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(0, e - 2, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(0, e - 1, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(1, e - 3, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(1, e - 2, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(1, e - 1, t, e) && (r |= 1),
        r
      );
    }
    readCorner4(t, e) {
      let r = 0;
      return (
        this.readModule(t - 3, 0, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(t - 2, 0, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(t - 1, 0, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(0, e - 2, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(0, e - 1, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(1, e - 1, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(2, e - 1, t, e) && (r |= 1),
        (r <<= 1),
        this.readModule(3, e - 1, t, e) && (r |= 1),
        r
      );
    }
    extractDataRegion(t) {
      const e = this.version.getSymbolSizeRows(),
        r = this.version.getSymbolSizeColumns();
      if (t.getHeight() !== e) throw new o('Dimension of bitMatrix must match the version size');
      const n = this.version.getDataRegionSizeRows(),
        i = this.version.getDataRegionSizeColumns(),
        s = (e / n) | 0,
        a = (r / i) | 0,
        l = new T(a * i, s * n);
      for (let e = 0; e < s; ++e) {
        const r = e * n;
        for (let s = 0; s < a; ++s) {
          const o = s * i;
          for (let a = 0; a < n; ++a) {
            const h = e * (n + 2) + 1 + a,
              c = r + a;
            for (let e = 0; e < i; ++e) {
              const r = s * (i + 2) + 1 + e;
              if (t.get(r, h)) {
                const t = o + e;
                l.set(t, c);
              }
            }
          }
        }
      }
      return l;
    }
  }
  class oe {
    constructor(t, e) {
      (this.numDataCodewords = t), (this.codewords = e);
    }
    static getDataBlocks(t, e) {
      const r = e.getECBlocks();
      let n = 0;
      const i = r.getECBlocks();
      for (let t of i) n += t.getCount();
      const s = new Array(n);
      let a = 0;
      for (let t of i)
        for (let e = 0; e < t.getCount(); e++) {
          const e = t.getDataCodewords(),
            n = r.getECCodewords() + e;
          s[a++] = new oe(e, new Uint8Array(n));
        }
      const l = s[0].codewords.length - r.getECCodewords(),
        h = l - 1;
      let c = 0;
      for (let e = 0; e < h; e++) for (let r = 0; r < a; r++) s[r].codewords[e] = t[c++];
      const u = 24 === e.getVersionNumber(),
        d = u ? 8 : a;
      for (let e = 0; e < d; e++) s[e].codewords[l - 1] = t[c++];
      const g = s[0].codewords.length;
      for (let e = l; e < g; e++)
        for (let r = 0; r < a; r++) {
          const n = u ? (r + 8) % a : r,
            i = u && n > 7 ? e - 1 : e;
          s[n].codewords[i] = t[c++];
        }
      if (c !== t.length) throw new o();
      return s;
    }
    getNumDataCodewords() {
      return this.numDataCodewords;
    }
    getCodewords() {
      return this.codewords;
    }
  }
  class ae {
    constructor(t) {
      (this.bytes = t), (this.byteOffset = 0), (this.bitOffset = 0);
    }
    getBitOffset() {
      return this.bitOffset;
    }
    getByteOffset() {
      return this.byteOffset;
    }
    readBits(t) {
      if (t < 1 || t > 32 || t > this.available()) throw new o('' + t);
      let e = 0,
        r = this.bitOffset,
        n = this.byteOffset;
      const i = this.bytes;
      if (r > 0) {
        const s = 8 - r,
          o = t < s ? t : s,
          a = s - o,
          l = (255 >> (8 - o)) << a;
        (e = (i[n] & l) >> a), (t -= o), (r += o), 8 === r && ((r = 0), n++);
      }
      if (t > 0) {
        for (; t >= 8; ) (e = (e << 8) | (255 & i[n])), n++, (t -= 8);
        if (t > 0) {
          const s = 8 - t,
            o = (255 >> s) << s;
          (e = (e << t) | ((i[n] & o) >> s)), (r += t);
        }
      }
      return (this.bitOffset = r), (this.byteOffset = n), e;
    }
    available() {
      return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
    }
  }
  !(function (t) {
    (t[(t.PAD_ENCODE = 0)] = 'PAD_ENCODE'),
      (t[(t.ASCII_ENCODE = 1)] = 'ASCII_ENCODE'),
      (t[(t.C40_ENCODE = 2)] = 'C40_ENCODE'),
      (t[(t.TEXT_ENCODE = 3)] = 'TEXT_ENCODE'),
      (t[(t.ANSIX12_ENCODE = 4)] = 'ANSIX12_ENCODE'),
      (t[(t.EDIFACT_ENCODE = 5)] = 'EDIFACT_ENCODE'),
      (t[(t.BASE256_ENCODE = 6)] = 'BASE256_ENCODE');
  })(V || (V = {}));
  class le {
    static decode(t) {
      const e = new ae(t),
        r = new p(),
        n = new p(),
        i = new Array();
      let s = V.ASCII_ENCODE;
      do {
        if (s === V.ASCII_ENCODE) s = this.decodeAsciiSegment(e, r, n);
        else {
          switch (s) {
            case V.C40_ENCODE:
              this.decodeC40Segment(e, r);
              break;
            case V.TEXT_ENCODE:
              this.decodeTextSegment(e, r);
              break;
            case V.ANSIX12_ENCODE:
              this.decodeAnsiX12Segment(e, r);
              break;
            case V.EDIFACT_ENCODE:
              this.decodeEdifactSegment(e, r);
              break;
            case V.BASE256_ENCODE:
              this.decodeBase256Segment(e, r, i);
              break;
            default:
              throw new E();
          }
          s = V.ASCII_ENCODE;
        }
      } while (s !== V.PAD_ENCODE && e.available() > 0);
      return n.length() > 0 && r.append(n.toString()), new z(t, r.toString(), 0 === i.length ? null : i, null);
    }
    static decodeAsciiSegment(t, e, r) {
      let n = !1;
      do {
        let i = t.readBits(8);
        if (0 === i) throw new E();
        if (i <= 128) return n && (i += 128), e.append(String.fromCharCode(i - 1)), V.ASCII_ENCODE;
        if (129 === i) return V.PAD_ENCODE;
        if (i <= 229) {
          const t = i - 130;
          t < 10 && e.append('0'), e.append('' + t);
        } else
          switch (i) {
            case 230:
              return V.C40_ENCODE;
            case 231:
              return V.BASE256_ENCODE;
            case 232:
              e.append(String.fromCharCode(29));
              break;
            case 233:
            case 234:
              break;
            case 235:
              n = !0;
              break;
            case 236:
              e.append('[)>05'), r.insert(0, '');
              break;
            case 237:
              e.append('[)>06'), r.insert(0, '');
              break;
            case 238:
              return V.ANSIX12_ENCODE;
            case 239:
              return V.TEXT_ENCODE;
            case 240:
              return V.EDIFACT_ENCODE;
            case 241:
              break;
            default:
              if (254 !== i || 0 !== t.available()) throw new E();
          }
      } while (t.available() > 0);
      return V.ASCII_ENCODE;
    }
    static decodeC40Segment(t, e) {
      let r = !1;
      const n = [];
      let i = 0;
      do {
        if (8 === t.available()) return;
        const s = t.readBits(8);
        if (254 === s) return;
        this.parseTwoBytes(s, t.readBits(8), n);
        for (let t = 0; t < 3; t++) {
          const s = n[t];
          switch (i) {
            case 0:
              if (s < 3) i = s + 1;
              else {
                if (!(s < this.C40_BASIC_SET_CHARS.length)) throw new E();
                {
                  const t = this.C40_BASIC_SET_CHARS[s];
                  r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), (r = !1)) : e.append(t);
                }
              }
              break;
            case 1:
              r ? (e.append(String.fromCharCode(s + 128)), (r = !1)) : e.append(String.fromCharCode(s)), (i = 0);
              break;
            case 2:
              if (s < this.C40_SHIFT2_SET_CHARS.length) {
                const t = this.C40_SHIFT2_SET_CHARS[s];
                r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), (r = !1)) : e.append(t);
              } else
                switch (s) {
                  case 27:
                    e.append(String.fromCharCode(29));
                    break;
                  case 30:
                    r = !0;
                    break;
                  default:
                    throw new E();
                }
              i = 0;
              break;
            case 3:
              r ? (e.append(String.fromCharCode(s + 224)), (r = !1)) : e.append(String.fromCharCode(s + 96)), (i = 0);
              break;
            default:
              throw new E();
          }
        }
      } while (t.available() > 0);
    }
    static decodeTextSegment(t, e) {
      let r = !1,
        n = [],
        i = 0;
      do {
        if (8 === t.available()) return;
        const s = t.readBits(8);
        if (254 === s) return;
        this.parseTwoBytes(s, t.readBits(8), n);
        for (let t = 0; t < 3; t++) {
          const s = n[t];
          switch (i) {
            case 0:
              if (s < 3) i = s + 1;
              else {
                if (!(s < this.TEXT_BASIC_SET_CHARS.length)) throw new E();
                {
                  const t = this.TEXT_BASIC_SET_CHARS[s];
                  r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), (r = !1)) : e.append(t);
                }
              }
              break;
            case 1:
              r ? (e.append(String.fromCharCode(s + 128)), (r = !1)) : e.append(String.fromCharCode(s)), (i = 0);
              break;
            case 2:
              if (s < this.TEXT_SHIFT2_SET_CHARS.length) {
                const t = this.TEXT_SHIFT2_SET_CHARS[s];
                r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), (r = !1)) : e.append(t);
              } else
                switch (s) {
                  case 27:
                    e.append(String.fromCharCode(29));
                    break;
                  case 30:
                    r = !0;
                    break;
                  default:
                    throw new E();
                }
              i = 0;
              break;
            case 3:
              if (!(s < this.TEXT_SHIFT3_SET_CHARS.length)) throw new E();
              {
                const t = this.TEXT_SHIFT3_SET_CHARS[s];
                r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), (r = !1)) : e.append(t), (i = 0);
              }
              break;
            default:
              throw new E();
          }
        }
      } while (t.available() > 0);
    }
    static decodeAnsiX12Segment(t, e) {
      const r = [];
      do {
        if (8 === t.available()) return;
        const n = t.readBits(8);
        if (254 === n) return;
        this.parseTwoBytes(n, t.readBits(8), r);
        for (let t = 0; t < 3; t++) {
          const n = r[t];
          switch (n) {
            case 0:
              e.append('\r');
              break;
            case 1:
              e.append('*');
              break;
            case 2:
              e.append('>');
              break;
            case 3:
              e.append(' ');
              break;
            default:
              if (n < 14) e.append(String.fromCharCode(n + 44));
              else {
                if (!(n < 40)) throw new E();
                e.append(String.fromCharCode(n + 51));
              }
          }
        }
      } while (t.available() > 0);
    }
    static parseTwoBytes(t, e, r) {
      let n = (t << 8) + e - 1,
        i = Math.floor(n / 1600);
      (r[0] = i), (n -= 1600 * i), (i = Math.floor(n / 40)), (r[1] = i), (r[2] = n - 40 * i);
    }
    static decodeEdifactSegment(t, e) {
      do {
        if (t.available() <= 16) return;
        for (let r = 0; r < 4; r++) {
          let r = t.readBits(6);
          if (31 === r) {
            const e = 8 - t.getBitOffset();
            return void (8 !== e && t.readBits(e));
          }
          0 == (32 & r) && (r |= 64), e.append(String.fromCharCode(r));
        }
      } while (t.available() > 0);
    }
    static decodeBase256Segment(t, e, r) {
      let n = 1 + t.getByteOffset();
      const i = this.unrandomize255State(t.readBits(8), n++);
      let s;
      if (
        ((s =
          0 === i
            ? (t.available() / 8) | 0
            : i < 250
            ? i
            : 250 * (i - 249) + this.unrandomize255State(t.readBits(8), n++)),
        s < 0)
      )
        throw new E();
      const o = new Uint8Array(s);
      for (let e = 0; e < s; e++) {
        if (t.available() < 8) throw new E();
        o[e] = this.unrandomize255State(t.readBits(8), n++);
      }
      r.push(o);
      try {
        e.append(I.decode(o, S.ISO88591));
      } catch (t) {
        throw new j('Platform does not support required encoding: ' + t.message);
      }
    }
    static unrandomize255State(t, e) {
      const r = t - (((149 * e) % 255) + 1);
      return r >= 0 ? r : r + 256;
    }
  }
  (le.C40_BASIC_SET_CHARS = [
    '*',
    '*',
    '*',
    ' ',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]),
    (le.C40_SHIFT2_SET_CHARS = [
      '!',
      '"',
      '#',
      '$',
      '%',
      '&',
      "'",
      '(',
      ')',
      '*',
      '+',
      ',',
      '-',
      '.',
      '/',
      ':',
      ';',
      '<',
      '=',
      '>',
      '?',
      '@',
      '[',
      '\\',
      ']',
      '^',
      '_',
    ]),
    (le.TEXT_BASIC_SET_CHARS = [
      '*',
      '*',
      '*',
      ' ',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ]),
    (le.TEXT_SHIFT2_SET_CHARS = le.C40_SHIFT2_SET_CHARS),
    (le.TEXT_SHIFT3_SET_CHARS = [
      '`',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      '{',
      '|',
      '}',
      '~',
      String.fromCharCode(127),
    ]);
  class he {
    constructor() {
      this.rsDecoder = new J(q.DATA_MATRIX_FIELD_256);
    }
    decode(t) {
      const e = new se(t),
        r = e.getVersion(),
        n = e.readCodewords(),
        i = oe.getDataBlocks(n, r);
      let s = 0;
      for (let t of i) s += t.getNumDataCodewords();
      const o = new Uint8Array(s),
        a = i.length;
      for (let t = 0; t < a; t++) {
        const e = i[t],
          r = e.getCodewords(),
          n = e.getNumDataCodewords();
        this.correctErrors(r, n);
        for (let e = 0; e < n; e++) o[e * a + t] = r[e];
      }
      return le.decode(o);
    }
    correctErrors(t, e) {
      const r = new Int32Array(t);
      try {
        this.rsDecoder.decode(r, t.length - e);
      } catch (t) {
        throw new l();
      }
      for (let n = 0; n < e; n++) t[n] = r[n];
    }
  }
  class ce {
    constructor(t) {
      (this.image = t), (this.rectangleDetector = new st(this.image));
    }
    detect() {
      const t = this.rectangleDetector.detect();
      let e = this.detectSolid1(t);
      if (((e = this.detectSolid2(e)), (e[3] = this.correctTopRight(e)), !e[3])) throw new R();
      e = this.shiftToModuleCenter(e);
      const r = e[0],
        n = e[1],
        i = e[2],
        s = e[3];
      let o = this.transitionsBetween(r, s) + 1,
        a = this.transitionsBetween(i, s) + 1;
      1 == (1 & o) && (o += 1), 1 == (1 & a) && (a += 1), 4 * o < 7 * a && 4 * a < 7 * o && (o = a = Math.max(o, a));
      let l = ce.sampleGrid(this.image, r, n, i, s, o, a);
      return new nt(l, [r, n, i, s]);
    }
    static shiftPoint(t, e, r) {
      let n = (e.getX() - t.getX()) / (r + 1),
        i = (e.getY() - t.getY()) / (r + 1);
      return new rt(t.getX() + n, t.getY() + i);
    }
    static moveAway(t, e, r) {
      let n = t.getX(),
        i = t.getY();
      return n < e ? (n -= 1) : (n += 1), i < r ? (i -= 1) : (i += 1), new rt(n, i);
    }
    detectSolid1(t) {
      let e = t[0],
        r = t[1],
        n = t[3],
        i = t[2],
        s = this.transitionsBetween(e, r),
        o = this.transitionsBetween(r, n),
        a = this.transitionsBetween(n, i),
        l = this.transitionsBetween(i, e),
        h = s,
        c = [i, e, r, n];
      return (
        h > o && ((h = o), (c[0] = e), (c[1] = r), (c[2] = n), (c[3] = i)),
        h > a && ((h = a), (c[0] = r), (c[1] = n), (c[2] = i), (c[3] = e)),
        h > l && ((c[0] = n), (c[1] = i), (c[2] = e), (c[3] = r)),
        c
      );
    }
    detectSolid2(t) {
      let e = t[0],
        r = t[1],
        n = t[2],
        i = t[3],
        s = this.transitionsBetween(e, i),
        o = ce.shiftPoint(r, n, 4 * (s + 1)),
        a = ce.shiftPoint(n, r, 4 * (s + 1));
      return (
        this.transitionsBetween(o, e) < this.transitionsBetween(a, i)
          ? ((t[0] = e), (t[1] = r), (t[2] = n), (t[3] = i))
          : ((t[0] = r), (t[1] = n), (t[2] = i), (t[3] = e)),
        t
      );
    }
    correctTopRight(t) {
      let e = t[0],
        r = t[1],
        n = t[2],
        i = t[3],
        s = this.transitionsBetween(e, i),
        o = this.transitionsBetween(r, i),
        a = ce.shiftPoint(e, r, 4 * (o + 1)),
        l = ce.shiftPoint(n, r, 4 * (s + 1));
      (s = this.transitionsBetween(a, i)), (o = this.transitionsBetween(l, i));
      let h = new rt(i.getX() + (n.getX() - r.getX()) / (s + 1), i.getY() + (n.getY() - r.getY()) / (s + 1)),
        c = new rt(i.getX() + (e.getX() - r.getX()) / (o + 1), i.getY() + (e.getY() - r.getY()) / (o + 1));
      return this.isValid(h)
        ? this.isValid(c)
          ? this.transitionsBetween(a, h) + this.transitionsBetween(l, h) >
            this.transitionsBetween(a, c) + this.transitionsBetween(l, c)
            ? h
            : c
          : h
        : this.isValid(c)
        ? c
        : null;
    }
    shiftToModuleCenter(t) {
      let e = t[0],
        r = t[1],
        n = t[2],
        i = t[3],
        s = this.transitionsBetween(e, i) + 1,
        o = this.transitionsBetween(n, i) + 1,
        a = ce.shiftPoint(e, r, 4 * o),
        l = ce.shiftPoint(n, r, 4 * s);
      (s = this.transitionsBetween(a, i) + 1),
        (o = this.transitionsBetween(l, i) + 1),
        1 == (1 & s) && (s += 1),
        1 == (1 & o) && (o += 1);
      let h,
        c,
        u = (e.getX() + r.getX() + n.getX() + i.getX()) / 4,
        d = (e.getY() + r.getY() + n.getY() + i.getY()) / 4;
      return (
        (e = ce.moveAway(e, u, d)),
        (r = ce.moveAway(r, u, d)),
        (n = ce.moveAway(n, u, d)),
        (i = ce.moveAway(i, u, d)),
        (a = ce.shiftPoint(e, r, 4 * o)),
        (a = ce.shiftPoint(a, i, 4 * s)),
        (h = ce.shiftPoint(r, e, 4 * o)),
        (h = ce.shiftPoint(h, n, 4 * s)),
        (l = ce.shiftPoint(n, i, 4 * o)),
        (l = ce.shiftPoint(l, r, 4 * s)),
        (c = ce.shiftPoint(i, n, 4 * o)),
        (c = ce.shiftPoint(c, e, 4 * s)),
        [a, h, l, c]
      );
    }
    isValid(t) {
      return t.getX() >= 0 && t.getX() < this.image.getWidth() && t.getY() > 0 && t.getY() < this.image.getHeight();
    }
    static sampleGrid(t, e, r, n, i, s, o) {
      return ht
        .getInstance()
        .sampleGrid(
          t,
          s,
          o,
          0.5,
          0.5,
          s - 0.5,
          0.5,
          s - 0.5,
          o - 0.5,
          0.5,
          o - 0.5,
          e.getX(),
          e.getY(),
          i.getX(),
          i.getY(),
          n.getX(),
          n.getY(),
          r.getX(),
          r.getY(),
        );
    }
    transitionsBetween(t, e) {
      let r = Math.trunc(t.getX()),
        n = Math.trunc(t.getY()),
        i = Math.trunc(e.getX()),
        s = Math.trunc(e.getY()),
        o = Math.abs(s - n) > Math.abs(i - r);
      if (o) {
        let t = r;
        (r = n), (n = t), (t = i), (i = s), (s = t);
      }
      let a = Math.abs(i - r),
        l = Math.abs(s - n),
        h = -a / 2,
        c = n < s ? 1 : -1,
        u = r < i ? 1 : -1,
        d = 0,
        g = this.image.get(o ? n : r, o ? r : n);
      for (let t = r, e = n; t !== i; t += u) {
        let r = this.image.get(o ? e : t, o ? t : e);
        if ((r !== g && (d++, (g = r)), (h += l), h > 0)) {
          if (e === s) break;
          (e += c), (h -= a);
        }
      }
      return d;
    }
  }
  class ue {
    constructor() {
      this.decoder = new he();
    }
    decode(t, e = null) {
      let r, n;
      if (null != e && e.has(C.PURE_BARCODE)) {
        const e = ue.extractPureBits(t.getBlackMatrix());
        (r = this.decoder.decode(e)), (n = ue.NO_POINTS);
      } else {
        const e = new ce(t.getBlackMatrix()).detect();
        (r = this.decoder.decode(e.getBits())), (n = e.getPoints());
      }
      const i = r.getRawBytes(),
        s = new F(r.getText(), i, 8 * i.length, n, v.DATA_MATRIX, c.currentTimeMillis()),
        o = r.getByteSegments();
      null != o && s.putMetadata(W.BYTE_SEGMENTS, o);
      const a = r.getECLevel();
      return null != a && s.putMetadata(W.ERROR_CORRECTION_LEVEL, a), s;
    }
    reset() {}
    static extractPureBits(t) {
      const e = t.getTopLeftOnBit(),
        r = t.getBottomRightOnBit();
      if (null == e || null == r) throw new R();
      const n = this.moduleSize(e, t);
      let i = e[1];
      const s = r[1];
      let o = e[0];
      const a = (r[0] - o + 1) / n,
        l = (s - i + 1) / n;
      if (a <= 0 || l <= 0) throw new R();
      const h = n / 2;
      (i += h), (o += h);
      const c = new T(a, l);
      for (let e = 0; e < l; e++) {
        const r = i + e * n;
        for (let i = 0; i < a; i++) t.get(o + i * n, r) && c.set(i, e);
      }
      return c;
    }
    static moduleSize(t, e) {
      const r = e.getWidth();
      let n = t[0];
      const i = t[1];
      for (; n < r && e.get(n, i); ) n++;
      if (n === r) throw new R();
      const s = n - t[0];
      if (0 === s) throw new R();
      return s;
    }
  }
  ue.NO_POINTS = [];
  !(function (t) {
    (t[(t.L = 0)] = 'L'), (t[(t.M = 1)] = 'M'), (t[(t.Q = 2)] = 'Q'), (t[(t.H = 3)] = 'H');
  })(U || (U = {}));
  class de {
    constructor(t, e, r) {
      (this.value = t), (this.stringValue = e), (this.bits = r), de.FOR_BITS.set(r, this), de.FOR_VALUE.set(t, this);
    }
    getValue() {
      return this.value;
    }
    getBits() {
      return this.bits;
    }
    static fromString(t) {
      switch (t) {
        case 'L':
          return de.L;
        case 'M':
          return de.M;
        case 'Q':
          return de.Q;
        case 'H':
          return de.H;
        default:
          throw new s(t + 'not available');
      }
    }
    toString() {
      return this.stringValue;
    }
    equals(t) {
      if (!(t instanceof de)) return !1;
      const e = t;
      return this.value === e.value;
    }
    static forBits(t) {
      if (t < 0 || t >= de.FOR_BITS.size) throw new o();
      return de.FOR_BITS.get(t);
    }
  }
  (de.FOR_BITS = new Map()),
    (de.FOR_VALUE = new Map()),
    (de.L = new de(U.L, 'L', 1)),
    (de.M = new de(U.M, 'M', 0)),
    (de.Q = new de(U.Q, 'Q', 3)),
    (de.H = new de(U.H, 'H', 2));
  class ge {
    constructor(t) {
      (this.errorCorrectionLevel = de.forBits((t >> 3) & 3)), (this.dataMask = 7 & t);
    }
    static numBitsDiffering(t, e) {
      return f.bitCount(t ^ e);
    }
    static decodeFormatInformation(t, e) {
      const r = ge.doDecodeFormatInformation(t, e);
      return null !== r ? r : ge.doDecodeFormatInformation(t ^ ge.FORMAT_INFO_MASK_QR, e ^ ge.FORMAT_INFO_MASK_QR);
    }
    static doDecodeFormatInformation(t, e) {
      let r = Number.MAX_SAFE_INTEGER,
        n = 0;
      for (const i of ge.FORMAT_INFO_DECODE_LOOKUP) {
        const s = i[0];
        if (s === t || s === e) return new ge(i[1]);
        let o = ge.numBitsDiffering(t, s);
        o < r && ((n = i[1]), (r = o)), t !== e && ((o = ge.numBitsDiffering(e, s)), o < r && ((n = i[1]), (r = o)));
      }
      return r <= 3 ? new ge(n) : null;
    }
    getErrorCorrectionLevel() {
      return this.errorCorrectionLevel;
    }
    getDataMask() {
      return this.dataMask;
    }
    hashCode() {
      return (this.errorCorrectionLevel.getBits() << 3) | this.dataMask;
    }
    equals(t) {
      if (!(t instanceof ge)) return !1;
      const e = t;
      return this.errorCorrectionLevel === e.errorCorrectionLevel && this.dataMask === e.dataMask;
    }
  }
  (ge.FORMAT_INFO_MASK_QR = 21522),
    (ge.FORMAT_INFO_DECODE_LOOKUP = [
      Int32Array.from([21522, 0]),
      Int32Array.from([20773, 1]),
      Int32Array.from([24188, 2]),
      Int32Array.from([23371, 3]),
      Int32Array.from([17913, 4]),
      Int32Array.from([16590, 5]),
      Int32Array.from([20375, 6]),
      Int32Array.from([19104, 7]),
      Int32Array.from([30660, 8]),
      Int32Array.from([29427, 9]),
      Int32Array.from([32170, 10]),
      Int32Array.from([30877, 11]),
      Int32Array.from([26159, 12]),
      Int32Array.from([25368, 13]),
      Int32Array.from([27713, 14]),
      Int32Array.from([26998, 15]),
      Int32Array.from([5769, 16]),
      Int32Array.from([5054, 17]),
      Int32Array.from([7399, 18]),
      Int32Array.from([6608, 19]),
      Int32Array.from([1890, 20]),
      Int32Array.from([597, 21]),
      Int32Array.from([3340, 22]),
      Int32Array.from([2107, 23]),
      Int32Array.from([13663, 24]),
      Int32Array.from([12392, 25]),
      Int32Array.from([16177, 26]),
      Int32Array.from([14854, 27]),
      Int32Array.from([9396, 28]),
      Int32Array.from([8579, 29]),
      Int32Array.from([11994, 30]),
      Int32Array.from([11245, 31]),
    ]);
  class fe {
    constructor(t, ...e) {
      (this.ecCodewordsPerBlock = t), (this.ecBlocks = e);
    }
    getECCodewordsPerBlock() {
      return this.ecCodewordsPerBlock;
    }
    getNumBlocks() {
      let t = 0;
      const e = this.ecBlocks;
      for (const r of e) t += r.getCount();
      return t;
    }
    getTotalECCodewords() {
      return this.ecCodewordsPerBlock * this.getNumBlocks();
    }
    getECBlocks() {
      return this.ecBlocks;
    }
  }
  class we {
    constructor(t, e) {
      (this.count = t), (this.dataCodewords = e);
    }
    getCount() {
      return this.count;
    }
    getDataCodewords() {
      return this.dataCodewords;
    }
  }
  class Ae {
    constructor(t, e, ...r) {
      (this.versionNumber = t), (this.alignmentPatternCenters = e), (this.ecBlocks = r);
      let n = 0;
      const i = r[0].getECCodewordsPerBlock(),
        s = r[0].getECBlocks();
      for (const t of s) n += t.getCount() * (t.getDataCodewords() + i);
      this.totalCodewords = n;
    }
    getVersionNumber() {
      return this.versionNumber;
    }
    getAlignmentPatternCenters() {
      return this.alignmentPatternCenters;
    }
    getTotalCodewords() {
      return this.totalCodewords;
    }
    getDimensionForVersion() {
      return 17 + 4 * this.versionNumber;
    }
    getECBlocksForLevel(t) {
      return this.ecBlocks[t.getValue()];
    }
    static getProvisionalVersionForDimension(t) {
      if (t % 4 != 1) throw new E();
      try {
        return this.getVersionForNumber((t - 17) / 4);
      } catch (t) {
        throw new E();
      }
    }
    static getVersionForNumber(t) {
      if (t < 1 || t > 40) throw new o();
      return Ae.VERSIONS[t - 1];
    }
    static decodeVersionInformation(t) {
      let e = Number.MAX_SAFE_INTEGER,
        r = 0;
      for (let n = 0; n < Ae.VERSION_DECODE_INFO.length; n++) {
        const i = Ae.VERSION_DECODE_INFO[n];
        if (i === t) return Ae.getVersionForNumber(n + 7);
        const s = ge.numBitsDiffering(t, i);
        s < e && ((r = n + 7), (e = s));
      }
      return e <= 3 ? Ae.getVersionForNumber(r) : null;
    }
    buildFunctionPattern() {
      const t = this.getDimensionForVersion(),
        e = new T(t);
      e.setRegion(0, 0, 9, 9), e.setRegion(t - 8, 0, 8, 9), e.setRegion(0, t - 8, 9, 8);
      const r = this.alignmentPatternCenters.length;
      for (let t = 0; t < r; t++) {
        const n = this.alignmentPatternCenters[t] - 2;
        for (let i = 0; i < r; i++)
          (0 === t && (0 === i || i === r - 1)) ||
            (t === r - 1 && 0 === i) ||
            e.setRegion(this.alignmentPatternCenters[i] - 2, n, 5, 5);
      }
      return (
        e.setRegion(6, 9, 1, t - 17),
        e.setRegion(9, 6, t - 17, 1),
        this.versionNumber > 6 && (e.setRegion(t - 11, 0, 3, 6), e.setRegion(0, t - 11, 6, 3)),
        e
      );
    }
    toString() {
      return '' + this.versionNumber;
    }
  }
  (Ae.VERSION_DECODE_INFO = Int32Array.from([
    31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361,
    96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283,
    152622, 158308, 161089, 167017,
  ])),
    (Ae.VERSIONS = [
      new Ae(
        1,
        new Int32Array(0),
        new fe(7, new we(1, 19)),
        new fe(10, new we(1, 16)),
        new fe(13, new we(1, 13)),
        new fe(17, new we(1, 9)),
      ),
      new Ae(
        2,
        Int32Array.from([6, 18]),
        new fe(10, new we(1, 34)),
        new fe(16, new we(1, 28)),
        new fe(22, new we(1, 22)),
        new fe(28, new we(1, 16)),
      ),
      new Ae(
        3,
        Int32Array.from([6, 22]),
        new fe(15, new we(1, 55)),
        new fe(26, new we(1, 44)),
        new fe(18, new we(2, 17)),
        new fe(22, new we(2, 13)),
      ),
      new Ae(
        4,
        Int32Array.from([6, 26]),
        new fe(20, new we(1, 80)),
        new fe(18, new we(2, 32)),
        new fe(26, new we(2, 24)),
        new fe(16, new we(4, 9)),
      ),
      new Ae(
        5,
        Int32Array.from([6, 30]),
        new fe(26, new we(1, 108)),
        new fe(24, new we(2, 43)),
        new fe(18, new we(2, 15), new we(2, 16)),
        new fe(22, new we(2, 11), new we(2, 12)),
      ),
      new Ae(
        6,
        Int32Array.from([6, 34]),
        new fe(18, new we(2, 68)),
        new fe(16, new we(4, 27)),
        new fe(24, new we(4, 19)),
        new fe(28, new we(4, 15)),
      ),
      new Ae(
        7,
        Int32Array.from([6, 22, 38]),
        new fe(20, new we(2, 78)),
        new fe(18, new we(4, 31)),
        new fe(18, new we(2, 14), new we(4, 15)),
        new fe(26, new we(4, 13), new we(1, 14)),
      ),
      new Ae(
        8,
        Int32Array.from([6, 24, 42]),
        new fe(24, new we(2, 97)),
        new fe(22, new we(2, 38), new we(2, 39)),
        new fe(22, new we(4, 18), new we(2, 19)),
        new fe(26, new we(4, 14), new we(2, 15)),
      ),
      new Ae(
        9,
        Int32Array.from([6, 26, 46]),
        new fe(30, new we(2, 116)),
        new fe(22, new we(3, 36), new we(2, 37)),
        new fe(20, new we(4, 16), new we(4, 17)),
        new fe(24, new we(4, 12), new we(4, 13)),
      ),
      new Ae(
        10,
        Int32Array.from([6, 28, 50]),
        new fe(18, new we(2, 68), new we(2, 69)),
        new fe(26, new we(4, 43), new we(1, 44)),
        new fe(24, new we(6, 19), new we(2, 20)),
        new fe(28, new we(6, 15), new we(2, 16)),
      ),
      new Ae(
        11,
        Int32Array.from([6, 30, 54]),
        new fe(20, new we(4, 81)),
        new fe(30, new we(1, 50), new we(4, 51)),
        new fe(28, new we(4, 22), new we(4, 23)),
        new fe(24, new we(3, 12), new we(8, 13)),
      ),
      new Ae(
        12,
        Int32Array.from([6, 32, 58]),
        new fe(24, new we(2, 92), new we(2, 93)),
        new fe(22, new we(6, 36), new we(2, 37)),
        new fe(26, new we(4, 20), new we(6, 21)),
        new fe(28, new we(7, 14), new we(4, 15)),
      ),
      new Ae(
        13,
        Int32Array.from([6, 34, 62]),
        new fe(26, new we(4, 107)),
        new fe(22, new we(8, 37), new we(1, 38)),
        new fe(24, new we(8, 20), new we(4, 21)),
        new fe(22, new we(12, 11), new we(4, 12)),
      ),
      new Ae(
        14,
        Int32Array.from([6, 26, 46, 66]),
        new fe(30, new we(3, 115), new we(1, 116)),
        new fe(24, new we(4, 40), new we(5, 41)),
        new fe(20, new we(11, 16), new we(5, 17)),
        new fe(24, new we(11, 12), new we(5, 13)),
      ),
      new Ae(
        15,
        Int32Array.from([6, 26, 48, 70]),
        new fe(22, new we(5, 87), new we(1, 88)),
        new fe(24, new we(5, 41), new we(5, 42)),
        new fe(30, new we(5, 24), new we(7, 25)),
        new fe(24, new we(11, 12), new we(7, 13)),
      ),
      new Ae(
        16,
        Int32Array.from([6, 26, 50, 74]),
        new fe(24, new we(5, 98), new we(1, 99)),
        new fe(28, new we(7, 45), new we(3, 46)),
        new fe(24, new we(15, 19), new we(2, 20)),
        new fe(30, new we(3, 15), new we(13, 16)),
      ),
      new Ae(
        17,
        Int32Array.from([6, 30, 54, 78]),
        new fe(28, new we(1, 107), new we(5, 108)),
        new fe(28, new we(10, 46), new we(1, 47)),
        new fe(28, new we(1, 22), new we(15, 23)),
        new fe(28, new we(2, 14), new we(17, 15)),
      ),
      new Ae(
        18,
        Int32Array.from([6, 30, 56, 82]),
        new fe(30, new we(5, 120), new we(1, 121)),
        new fe(26, new we(9, 43), new we(4, 44)),
        new fe(28, new we(17, 22), new we(1, 23)),
        new fe(28, new we(2, 14), new we(19, 15)),
      ),
      new Ae(
        19,
        Int32Array.from([6, 30, 58, 86]),
        new fe(28, new we(3, 113), new we(4, 114)),
        new fe(26, new we(3, 44), new we(11, 45)),
        new fe(26, new we(17, 21), new we(4, 22)),
        new fe(26, new we(9, 13), new we(16, 14)),
      ),
      new Ae(
        20,
        Int32Array.from([6, 34, 62, 90]),
        new fe(28, new we(3, 107), new we(5, 108)),
        new fe(26, new we(3, 41), new we(13, 42)),
        new fe(30, new we(15, 24), new we(5, 25)),
        new fe(28, new we(15, 15), new we(10, 16)),
      ),
      new Ae(
        21,
        Int32Array.from([6, 28, 50, 72, 94]),
        new fe(28, new we(4, 116), new we(4, 117)),
        new fe(26, new we(17, 42)),
        new fe(28, new we(17, 22), new we(6, 23)),
        new fe(30, new we(19, 16), new we(6, 17)),
      ),
      new Ae(
        22,
        Int32Array.from([6, 26, 50, 74, 98]),
        new fe(28, new we(2, 111), new we(7, 112)),
        new fe(28, new we(17, 46)),
        new fe(30, new we(7, 24), new we(16, 25)),
        new fe(24, new we(34, 13)),
      ),
      new Ae(
        23,
        Int32Array.from([6, 30, 54, 78, 102]),
        new fe(30, new we(4, 121), new we(5, 122)),
        new fe(28, new we(4, 47), new we(14, 48)),
        new fe(30, new we(11, 24), new we(14, 25)),
        new fe(30, new we(16, 15), new we(14, 16)),
      ),
      new Ae(
        24,
        Int32Array.from([6, 28, 54, 80, 106]),
        new fe(30, new we(6, 117), new we(4, 118)),
        new fe(28, new we(6, 45), new we(14, 46)),
        new fe(30, new we(11, 24), new we(16, 25)),
        new fe(30, new we(30, 16), new we(2, 17)),
      ),
      new Ae(
        25,
        Int32Array.from([6, 32, 58, 84, 110]),
        new fe(26, new we(8, 106), new we(4, 107)),
        new fe(28, new we(8, 47), new we(13, 48)),
        new fe(30, new we(7, 24), new we(22, 25)),
        new fe(30, new we(22, 15), new we(13, 16)),
      ),
      new Ae(
        26,
        Int32Array.from([6, 30, 58, 86, 114]),
        new fe(28, new we(10, 114), new we(2, 115)),
        new fe(28, new we(19, 46), new we(4, 47)),
        new fe(28, new we(28, 22), new we(6, 23)),
        new fe(30, new we(33, 16), new we(4, 17)),
      ),
      new Ae(
        27,
        Int32Array.from([6, 34, 62, 90, 118]),
        new fe(30, new we(8, 122), new we(4, 123)),
        new fe(28, new we(22, 45), new we(3, 46)),
        new fe(30, new we(8, 23), new we(26, 24)),
        new fe(30, new we(12, 15), new we(28, 16)),
      ),
      new Ae(
        28,
        Int32Array.from([6, 26, 50, 74, 98, 122]),
        new fe(30, new we(3, 117), new we(10, 118)),
        new fe(28, new we(3, 45), new we(23, 46)),
        new fe(30, new we(4, 24), new we(31, 25)),
        new fe(30, new we(11, 15), new we(31, 16)),
      ),
      new Ae(
        29,
        Int32Array.from([6, 30, 54, 78, 102, 126]),
        new fe(30, new we(7, 116), new we(7, 117)),
        new fe(28, new we(21, 45), new we(7, 46)),
        new fe(30, new we(1, 23), new we(37, 24)),
        new fe(30, new we(19, 15), new we(26, 16)),
      ),
      new Ae(
        30,
        Int32Array.from([6, 26, 52, 78, 104, 130]),
        new fe(30, new we(5, 115), new we(10, 116)),
        new fe(28, new we(19, 47), new we(10, 48)),
        new fe(30, new we(15, 24), new we(25, 25)),
        new fe(30, new we(23, 15), new we(25, 16)),
      ),
      new Ae(
        31,
        Int32Array.from([6, 30, 56, 82, 108, 134]),
        new fe(30, new we(13, 115), new we(3, 116)),
        new fe(28, new we(2, 46), new we(29, 47)),
        new fe(30, new we(42, 24), new we(1, 25)),
        new fe(30, new we(23, 15), new we(28, 16)),
      ),
      new Ae(
        32,
        Int32Array.from([6, 34, 60, 86, 112, 138]),
        new fe(30, new we(17, 115)),
        new fe(28, new we(10, 46), new we(23, 47)),
        new fe(30, new we(10, 24), new we(35, 25)),
        new fe(30, new we(19, 15), new we(35, 16)),
      ),
      new Ae(
        33,
        Int32Array.from([6, 30, 58, 86, 114, 142]),
        new fe(30, new we(17, 115), new we(1, 116)),
        new fe(28, new we(14, 46), new we(21, 47)),
        new fe(30, new we(29, 24), new we(19, 25)),
        new fe(30, new we(11, 15), new we(46, 16)),
      ),
      new Ae(
        34,
        Int32Array.from([6, 34, 62, 90, 118, 146]),
        new fe(30, new we(13, 115), new we(6, 116)),
        new fe(28, new we(14, 46), new we(23, 47)),
        new fe(30, new we(44, 24), new we(7, 25)),
        new fe(30, new we(59, 16), new we(1, 17)),
      ),
      new Ae(
        35,
        Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
        new fe(30, new we(12, 121), new we(7, 122)),
        new fe(28, new we(12, 47), new we(26, 48)),
        new fe(30, new we(39, 24), new we(14, 25)),
        new fe(30, new we(22, 15), new we(41, 16)),
      ),
      new Ae(
        36,
        Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
        new fe(30, new we(6, 121), new we(14, 122)),
        new fe(28, new we(6, 47), new we(34, 48)),
        new fe(30, new we(46, 24), new we(10, 25)),
        new fe(30, new we(2, 15), new we(64, 16)),
      ),
      new Ae(
        37,
        Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
        new fe(30, new we(17, 122), new we(4, 123)),
        new fe(28, new we(29, 46), new we(14, 47)),
        new fe(30, new we(49, 24), new we(10, 25)),
        new fe(30, new we(24, 15), new we(46, 16)),
      ),
      new Ae(
        38,
        Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
        new fe(30, new we(4, 122), new we(18, 123)),
        new fe(28, new we(13, 46), new we(32, 47)),
        new fe(30, new we(48, 24), new we(14, 25)),
        new fe(30, new we(42, 15), new we(32, 16)),
      ),
      new Ae(
        39,
        Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
        new fe(30, new we(20, 117), new we(4, 118)),
        new fe(28, new we(40, 47), new we(7, 48)),
        new fe(30, new we(43, 24), new we(22, 25)),
        new fe(30, new we(10, 15), new we(67, 16)),
      ),
      new Ae(
        40,
        Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
        new fe(30, new we(19, 118), new we(6, 119)),
        new fe(28, new we(18, 47), new we(31, 48)),
        new fe(30, new we(34, 24), new we(34, 25)),
        new fe(30, new we(20, 15), new we(61, 16)),
      ),
    ]),
    (function (t) {
      (t[(t.DATA_MASK_000 = 0)] = 'DATA_MASK_000'),
        (t[(t.DATA_MASK_001 = 1)] = 'DATA_MASK_001'),
        (t[(t.DATA_MASK_010 = 2)] = 'DATA_MASK_010'),
        (t[(t.DATA_MASK_011 = 3)] = 'DATA_MASK_011'),
        (t[(t.DATA_MASK_100 = 4)] = 'DATA_MASK_100'),
        (t[(t.DATA_MASK_101 = 5)] = 'DATA_MASK_101'),
        (t[(t.DATA_MASK_110 = 6)] = 'DATA_MASK_110'),
        (t[(t.DATA_MASK_111 = 7)] = 'DATA_MASK_111');
    })(H || (H = {}));
  class Ce {
    constructor(t, e) {
      (this.value = t), (this.isMasked = e);
    }
    unmaskBitMatrix(t, e) {
      for (let r = 0; r < e; r++) for (let n = 0; n < e; n++) this.isMasked(r, n) && t.flip(n, r);
    }
  }
  Ce.values = new Map([
    [H.DATA_MASK_000, new Ce(H.DATA_MASK_000, (t, e) => 0 == ((t + e) & 1))],
    [H.DATA_MASK_001, new Ce(H.DATA_MASK_001, (t, e) => 0 == (1 & t))],
    [H.DATA_MASK_010, new Ce(H.DATA_MASK_010, (t, e) => e % 3 == 0)],
    [H.DATA_MASK_011, new Ce(H.DATA_MASK_011, (t, e) => (t + e) % 3 == 0)],
    [H.DATA_MASK_100, new Ce(H.DATA_MASK_100, (t, e) => 0 == ((Math.floor(t / 2) + Math.floor(e / 3)) & 1))],
    [H.DATA_MASK_101, new Ce(H.DATA_MASK_101, (t, e) => (t * e) % 6 == 0)],
    [H.DATA_MASK_110, new Ce(H.DATA_MASK_110, (t, e) => (t * e) % 6 < 3)],
    [H.DATA_MASK_111, new Ce(H.DATA_MASK_111, (t, e) => 0 == ((t + e + ((t * e) % 3)) & 1))],
  ]);
  class Ee {
    constructor(t) {
      const e = t.getHeight();
      if (e < 21 || 1 != (3 & e)) throw new E();
      this.bitMatrix = t;
    }
    readFormatInformation() {
      if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo) return this.parsedFormatInfo;
      let t = 0;
      for (let e = 0; e < 6; e++) t = this.copyBit(e, 8, t);
      (t = this.copyBit(7, 8, t)), (t = this.copyBit(8, 8, t)), (t = this.copyBit(8, 7, t));
      for (let e = 5; e >= 0; e--) t = this.copyBit(8, e, t);
      const e = this.bitMatrix.getHeight();
      let r = 0;
      const n = e - 7;
      for (let t = e - 1; t >= n; t--) r = this.copyBit(8, t, r);
      for (let t = e - 8; t < e; t++) r = this.copyBit(t, 8, r);
      if (((this.parsedFormatInfo = ge.decodeFormatInformation(t, r)), null !== this.parsedFormatInfo))
        return this.parsedFormatInfo;
      throw new E();
    }
    readVersion() {
      if (null !== this.parsedVersion && void 0 !== this.parsedVersion) return this.parsedVersion;
      const t = this.bitMatrix.getHeight(),
        e = Math.floor((t - 17) / 4);
      if (e <= 6) return Ae.getVersionForNumber(e);
      let r = 0;
      const n = t - 11;
      for (let e = 5; e >= 0; e--) for (let i = t - 9; i >= n; i--) r = this.copyBit(i, e, r);
      let i = Ae.decodeVersionInformation(r);
      if (null !== i && i.getDimensionForVersion() === t) return (this.parsedVersion = i), i;
      r = 0;
      for (let e = 5; e >= 0; e--) for (let i = t - 9; i >= n; i--) r = this.copyBit(e, i, r);
      if (((i = Ae.decodeVersionInformation(r)), null !== i && i.getDimensionForVersion() === t))
        return (this.parsedVersion = i), i;
      throw new E();
    }
    copyBit(t, e, r) {
      return (this.isMirror ? this.bitMatrix.get(e, t) : this.bitMatrix.get(t, e)) ? (r << 1) | 1 : r << 1;
    }
    readCodewords() {
      const t = this.readFormatInformation(),
        e = this.readVersion(),
        r = Ce.values.get(t.getDataMask()),
        n = this.bitMatrix.getHeight();
      r.unmaskBitMatrix(this.bitMatrix, n);
      const i = e.buildFunctionPattern();
      let s = !0;
      const o = new Uint8Array(e.getTotalCodewords());
      let a = 0,
        l = 0,
        h = 0;
      for (let t = n - 1; t > 0; t -= 2) {
        6 === t && t--;
        for (let e = 0; e < n; e++) {
          const r = s ? n - 1 - e : e;
          for (let e = 0; e < 2; e++)
            i.get(t - e, r) ||
              (h++, (l <<= 1), this.bitMatrix.get(t - e, r) && (l |= 1), 8 === h && ((o[a++] = l), (h = 0), (l = 0)));
        }
        s = !s;
      }
      if (a !== e.getTotalCodewords()) throw new E();
      return o;
    }
    remask() {
      if (null === this.parsedFormatInfo) return;
      const t = Ce.values[this.parsedFormatInfo.getDataMask()],
        e = this.bitMatrix.getHeight();
      t.unmaskBitMatrix(this.bitMatrix, e);
    }
    setMirror(t) {
      (this.parsedVersion = null), (this.parsedFormatInfo = null), (this.isMirror = t);
    }
    mirror() {
      const t = this.bitMatrix;
      for (let e = 0, r = t.getWidth(); e < r; e++)
        for (let r = e + 1, n = t.getHeight(); r < n; r++) t.get(e, r) !== t.get(r, e) && (t.flip(r, e), t.flip(e, r));
    }
  }
  class me {
    constructor(t, e) {
      (this.numDataCodewords = t), (this.codewords = e);
    }
    static getDataBlocks(t, e, r) {
      if (t.length !== e.getTotalCodewords()) throw new o();
      const n = e.getECBlocksForLevel(r);
      let i = 0;
      const s = n.getECBlocks();
      for (const t of s) i += t.getCount();
      const a = new Array(i);
      let l = 0;
      for (const t of s)
        for (let e = 0; e < t.getCount(); e++) {
          const e = t.getDataCodewords(),
            r = n.getECCodewordsPerBlock() + e;
          a[l++] = new me(e, new Uint8Array(r));
        }
      const h = a[0].codewords.length;
      let c = a.length - 1;
      for (; c >= 0; ) {
        if (a[c].codewords.length === h) break;
        c--;
      }
      c++;
      const u = h - n.getECCodewordsPerBlock();
      let d = 0;
      for (let e = 0; e < u; e++) for (let r = 0; r < l; r++) a[r].codewords[e] = t[d++];
      for (let e = c; e < l; e++) a[e].codewords[u] = t[d++];
      const g = a[0].codewords.length;
      for (let e = u; e < g; e++)
        for (let r = 0; r < l; r++) {
          const n = r < c ? e : e + 1;
          a[r].codewords[n] = t[d++];
        }
      return a;
    }
    getNumDataCodewords() {
      return this.numDataCodewords;
    }
    getCodewords() {
      return this.codewords;
    }
  }
  !(function (t) {
    (t[(t.TERMINATOR = 0)] = 'TERMINATOR'),
      (t[(t.NUMERIC = 1)] = 'NUMERIC'),
      (t[(t.ALPHANUMERIC = 2)] = 'ALPHANUMERIC'),
      (t[(t.STRUCTURED_APPEND = 3)] = 'STRUCTURED_APPEND'),
      (t[(t.BYTE = 4)] = 'BYTE'),
      (t[(t.ECI = 5)] = 'ECI'),
      (t[(t.KANJI = 6)] = 'KANJI'),
      (t[(t.FNC1_FIRST_POSITION = 7)] = 'FNC1_FIRST_POSITION'),
      (t[(t.FNC1_SECOND_POSITION = 8)] = 'FNC1_SECOND_POSITION'),
      (t[(t.HANZI = 9)] = 'HANZI');
  })(G || (G = {}));
  class _e {
    constructor(t, e, r, n) {
      (this.value = t),
        (this.stringValue = e),
        (this.characterCountBitsForVersions = r),
        (this.bits = n),
        _e.FOR_BITS.set(n, this),
        _e.FOR_VALUE.set(t, this);
    }
    static forBits(t) {
      const e = _e.FOR_BITS.get(t);
      if (void 0 === e) throw new o();
      return e;
    }
    getCharacterCountBits(t) {
      const e = t.getVersionNumber();
      let r;
      return (r = e <= 9 ? 0 : e <= 26 ? 1 : 2), this.characterCountBitsForVersions[r];
    }
    getValue() {
      return this.value;
    }
    getBits() {
      return this.bits;
    }
    equals(t) {
      if (!(t instanceof _e)) return !1;
      const e = t;
      return this.value === e.value;
    }
    toString() {
      return this.stringValue;
    }
  }
  (_e.FOR_BITS = new Map()),
    (_e.FOR_VALUE = new Map()),
    (_e.TERMINATOR = new _e(G.TERMINATOR, 'TERMINATOR', Int32Array.from([0, 0, 0]), 0)),
    (_e.NUMERIC = new _e(G.NUMERIC, 'NUMERIC', Int32Array.from([10, 12, 14]), 1)),
    (_e.ALPHANUMERIC = new _e(G.ALPHANUMERIC, 'ALPHANUMERIC', Int32Array.from([9, 11, 13]), 2)),
    (_e.STRUCTURED_APPEND = new _e(G.STRUCTURED_APPEND, 'STRUCTURED_APPEND', Int32Array.from([0, 0, 0]), 3)),
    (_e.BYTE = new _e(G.BYTE, 'BYTE', Int32Array.from([8, 16, 16]), 4)),
    (_e.ECI = new _e(G.ECI, 'ECI', Int32Array.from([0, 0, 0]), 7)),
    (_e.KANJI = new _e(G.KANJI, 'KANJI', Int32Array.from([8, 10, 12]), 8)),
    (_e.FNC1_FIRST_POSITION = new _e(G.FNC1_FIRST_POSITION, 'FNC1_FIRST_POSITION', Int32Array.from([0, 0, 0]), 5)),
    (_e.FNC1_SECOND_POSITION = new _e(G.FNC1_SECOND_POSITION, 'FNC1_SECOND_POSITION', Int32Array.from([0, 0, 0]), 9)),
    (_e.HANZI = new _e(G.HANZI, 'HANZI', Int32Array.from([8, 10, 12]), 13));
  class Ie {
    static decode(t, e, r, n) {
      const i = new ae(t);
      let s = new p();
      const o = new Array();
      let a = -1,
        l = -1;
      try {
        let t,
          r = null,
          h = !1;
        do {
          if (i.available() < 4) t = _e.TERMINATOR;
          else {
            const e = i.readBits(4);
            t = _e.forBits(e);
          }
          switch (t) {
            case _e.TERMINATOR:
              break;
            case _e.FNC1_FIRST_POSITION:
            case _e.FNC1_SECOND_POSITION:
              h = !0;
              break;
            case _e.STRUCTURED_APPEND:
              if (i.available() < 16) throw new E();
              (a = i.readBits(8)), (l = i.readBits(8));
              break;
            case _e.ECI:
              const c = Ie.parseECIValue(i);
              if (((r = m.getCharacterSetECIByValue(c)), null === r)) throw new E();
              break;
            case _e.HANZI:
              const u = i.readBits(4),
                d = i.readBits(t.getCharacterCountBits(e));
              u === Ie.GB2312_SUBSET && Ie.decodeHanziSegment(i, s, d);
              break;
            default:
              const g = i.readBits(t.getCharacterCountBits(e));
              switch (t) {
                case _e.NUMERIC:
                  Ie.decodeNumericSegment(i, s, g);
                  break;
                case _e.ALPHANUMERIC:
                  Ie.decodeAlphanumericSegment(i, s, g, h);
                  break;
                case _e.BYTE:
                  Ie.decodeByteSegment(i, s, g, r, o, n);
                  break;
                case _e.KANJI:
                  Ie.decodeKanjiSegment(i, s, g);
                  break;
                default:
                  throw new E();
              }
          }
        } while (t !== _e.TERMINATOR);
      } catch (t) {
        throw new E();
      }
      return new z(t, s.toString(), 0 === o.length ? null : o, null === r ? null : r.toString(), a, l);
    }
    static decodeHanziSegment(t, e, r) {
      if (13 * r > t.available()) throw new E();
      const n = new Uint8Array(2 * r);
      let i = 0;
      for (; r > 0; ) {
        const e = t.readBits(13);
        let s = (((e / 96) << 8) & 4294967295) | e % 96;
        (s += s < 959 ? 41377 : 42657), (n[i] = (s >> 8) & 255), (n[i + 1] = 255 & s), (i += 2), r--;
      }
      try {
        e.append(I.decode(n, S.GB2312));
      } catch (t) {
        throw new E(t);
      }
    }
    static decodeKanjiSegment(t, e, r) {
      if (13 * r > t.available()) throw new E();
      const n = new Uint8Array(2 * r);
      let i = 0;
      for (; r > 0; ) {
        const e = t.readBits(13);
        let s = (((e / 192) << 8) & 4294967295) | e % 192;
        (s += s < 7936 ? 33088 : 49472), (n[i] = s >> 8), (n[i + 1] = s), (i += 2), r--;
      }
      try {
        e.append(I.decode(n, S.SHIFT_JIS));
      } catch (t) {
        throw new E(t);
      }
    }
    static decodeByteSegment(t, e, r, n, i, s) {
      if (8 * r > t.available()) throw new E();
      const o = new Uint8Array(r);
      for (let e = 0; e < r; e++) o[e] = t.readBits(8);
      let a;
      a = null === n ? S.guessEncoding(o, s) : n.getName();
      try {
        e.append(I.decode(o, a));
      } catch (t) {
        throw new E(t);
      }
      i.push(o);
    }
    static toAlphaNumericChar(t) {
      if (t >= Ie.ALPHANUMERIC_CHARS.length) throw new E();
      return Ie.ALPHANUMERIC_CHARS[t];
    }
    static decodeAlphanumericSegment(t, e, r, n) {
      const i = e.length();
      for (; r > 1; ) {
        if (t.available() < 11) throw new E();
        const n = t.readBits(11);
        e.append(Ie.toAlphaNumericChar(Math.floor(n / 45))), e.append(Ie.toAlphaNumericChar(n % 45)), (r -= 2);
      }
      if (1 === r) {
        if (t.available() < 6) throw new E();
        e.append(Ie.toAlphaNumericChar(t.readBits(6)));
      }
      if (n)
        for (let t = i; t < e.length(); t++)
          '%' === e.charAt(t) &&
            (t < e.length() - 1 && '%' === e.charAt(t + 1)
              ? e.deleteCharAt(t + 1)
              : e.setCharAt(t, String.fromCharCode(29)));
    }
    static decodeNumericSegment(t, e, r) {
      for (; r >= 3; ) {
        if (t.available() < 10) throw new E();
        const n = t.readBits(10);
        if (n >= 1e3) throw new E();
        e.append(Ie.toAlphaNumericChar(Math.floor(n / 100))),
          e.append(Ie.toAlphaNumericChar(Math.floor(n / 10) % 10)),
          e.append(Ie.toAlphaNumericChar(n % 10)),
          (r -= 3);
      }
      if (2 === r) {
        if (t.available() < 7) throw new E();
        const r = t.readBits(7);
        if (r >= 100) throw new E();
        e.append(Ie.toAlphaNumericChar(Math.floor(r / 10))), e.append(Ie.toAlphaNumericChar(r % 10));
      } else if (1 === r) {
        if (t.available() < 4) throw new E();
        const r = t.readBits(4);
        if (r >= 10) throw new E();
        e.append(Ie.toAlphaNumericChar(r));
      }
    }
    static parseECIValue(t) {
      const e = t.readBits(8);
      if (0 == (128 & e)) return 127 & e;
      if (128 == (192 & e)) {
        return (((63 & e) << 8) & 4294967295) | t.readBits(8);
      }
      if (192 == (224 & e)) {
        return (((31 & e) << 16) & 4294967295) | t.readBits(16);
      }
      throw new E();
    }
  }
  (Ie.ALPHANUMERIC_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'), (Ie.GB2312_SUBSET = 1);
  class Se {
    constructor(t) {
      this.mirrored = t;
    }
    isMirrored() {
      return this.mirrored;
    }
    applyMirroredCorrection(t) {
      if (!this.mirrored || null === t || t.length < 3) return;
      const e = t[0];
      (t[0] = t[2]), (t[2] = e);
    }
  }
  class pe {
    constructor() {
      this.rsDecoder = new J(q.QR_CODE_FIELD_256);
    }
    decodeBooleanArray(t, e) {
      return this.decodeBitMatrix(T.parseFromBooleanArray(t), e);
    }
    decodeBitMatrix(t, e) {
      const r = new Ee(t);
      let n = null;
      try {
        return this.decodeBitMatrixParser(r, e);
      } catch (t) {
        n = t;
      }
      try {
        r.remask(), r.setMirror(!0), r.readVersion(), r.readFormatInformation(), r.mirror();
        const t = this.decodeBitMatrixParser(r, e);
        return t.setOther(new Se(!0)), t;
      } catch (t) {
        if (null !== n) throw n;
        throw t;
      }
    }
    decodeBitMatrixParser(t, e) {
      const r = t.readVersion(),
        n = t.readFormatInformation().getErrorCorrectionLevel(),
        i = t.readCodewords(),
        s = me.getDataBlocks(i, r, n);
      let o = 0;
      for (const t of s) o += t.getNumDataCodewords();
      const a = new Uint8Array(o);
      let l = 0;
      for (const t of s) {
        const e = t.getCodewords(),
          r = t.getNumDataCodewords();
        this.correctErrors(e, r);
        for (let t = 0; t < r; t++) a[l++] = e[t];
      }
      return Ie.decode(a, r, n, e);
    }
    correctErrors(t, e) {
      const r = new Int32Array(t);
      try {
        this.rsDecoder.decode(r, t.length - e);
      } catch (t) {
        throw new l();
      }
      for (let n = 0; n < e; n++) t[n] = r[n];
    }
  }
  class Te extends rt {
    constructor(t, e, r) {
      super(t, e), (this.estimatedModuleSize = r);
    }
    aboutEquals(t, e, r) {
      if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
        const e = Math.abs(t - this.estimatedModuleSize);
        return e <= 1 || e <= this.estimatedModuleSize;
      }
      return !1;
    }
    combineEstimate(t, e, r) {
      const n = (this.getX() + e) / 2,
        i = (this.getY() + t) / 2,
        s = (this.estimatedModuleSize + r) / 2;
      return new Te(n, i, s);
    }
  }
  class Re {
    constructor(t, e, r, n, i, s, o) {
      (this.image = t),
        (this.startX = e),
        (this.startY = r),
        (this.width = n),
        (this.height = i),
        (this.moduleSize = s),
        (this.resultPointCallback = o),
        (this.possibleCenters = []),
        (this.crossCheckStateCount = new Int32Array(3));
    }
    find() {
      const t = this.startX,
        e = this.height,
        r = t + this.width,
        n = this.startY + e / 2,
        i = new Int32Array(3),
        s = this.image;
      for (let o = 0; o < e; o++) {
        const e = n + (0 == (1 & o) ? Math.floor((o + 1) / 2) : -Math.floor((o + 1) / 2));
        (i[0] = 0), (i[1] = 0), (i[2] = 0);
        let a = t;
        for (; a < r && !s.get(a, e); ) a++;
        let l = 0;
        for (; a < r; ) {
          if (s.get(a, e))
            if (1 === l) i[1]++;
            else if (2 === l) {
              if (this.foundPatternCross(i)) {
                const t = this.handlePossibleCenter(i, e, a);
                if (null !== t) return t;
              }
              (i[0] = i[2]), (i[1] = 1), (i[2] = 0), (l = 1);
            } else i[++l]++;
          else 1 === l && l++, i[l]++;
          a++;
        }
        if (this.foundPatternCross(i)) {
          const t = this.handlePossibleCenter(i, e, r);
          if (null !== t) return t;
        }
      }
      if (0 !== this.possibleCenters.length) return this.possibleCenters[0];
      throw new R();
    }
    static centerFromEnd(t, e) {
      return e - t[2] - t[1] / 2;
    }
    foundPatternCross(t) {
      const e = this.moduleSize,
        r = e / 2;
      for (let n = 0; n < 3; n++) if (Math.abs(e - t[n]) >= r) return !1;
      return !0;
    }
    crossCheckVertical(t, e, r, n) {
      const i = this.image,
        s = i.getHeight(),
        o = this.crossCheckStateCount;
      (o[0] = 0), (o[1] = 0), (o[2] = 0);
      let a = t;
      for (; a >= 0 && i.get(e, a) && o[1] <= r; ) o[1]++, a--;
      if (a < 0 || o[1] > r) return NaN;
      for (; a >= 0 && !i.get(e, a) && o[0] <= r; ) o[0]++, a--;
      if (o[0] > r) return NaN;
      for (a = t + 1; a < s && i.get(e, a) && o[1] <= r; ) o[1]++, a++;
      if (a === s || o[1] > r) return NaN;
      for (; a < s && !i.get(e, a) && o[2] <= r; ) o[2]++, a++;
      if (o[2] > r) return NaN;
      const l = o[0] + o[1] + o[2];
      return 5 * Math.abs(l - n) >= 2 * n ? NaN : this.foundPatternCross(o) ? Re.centerFromEnd(o, a) : NaN;
    }
    handlePossibleCenter(t, e, r) {
      const n = t[0] + t[1] + t[2],
        i = Re.centerFromEnd(t, r),
        s = this.crossCheckVertical(e, i, 2 * t[1], n);
      if (!isNaN(s)) {
        const e = (t[0] + t[1] + t[2]) / 3;
        for (const t of this.possibleCenters) if (t.aboutEquals(e, s, i)) return t.combineEstimate(s, i, e);
        const r = new Te(i, s, e);
        this.possibleCenters.push(r),
          null !== this.resultPointCallback &&
            void 0 !== this.resultPointCallback &&
            this.resultPointCallback.foundPossibleResultPoint(r);
      }
      return null;
    }
  }
  class Ne extends rt {
    constructor(t, e, r, n) {
      super(t, e), (this.estimatedModuleSize = r), (this.count = n), void 0 === n && (this.count = 1);
    }
    getEstimatedModuleSize() {
      return this.estimatedModuleSize;
    }
    getCount() {
      return this.count;
    }
    aboutEquals(t, e, r) {
      if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
        const e = Math.abs(t - this.estimatedModuleSize);
        return e <= 1 || e <= this.estimatedModuleSize;
      }
      return !1;
    }
    combineEstimate(t, e, r) {
      const n = this.count + 1,
        i = (this.count * this.getX() + e) / n,
        s = (this.count * this.getY() + t) / n,
        o = (this.count * this.estimatedModuleSize + r) / n;
      return new Ne(i, s, o, n);
    }
  }
  class De {
    constructor(t) {
      (this.bottomLeft = t[0]), (this.topLeft = t[1]), (this.topRight = t[2]);
    }
    getBottomLeft() {
      return this.bottomLeft;
    }
    getTopLeft() {
      return this.topLeft;
    }
    getTopRight() {
      return this.topRight;
    }
  }
  class ye {
    constructor(t, e) {
      (this.image = t),
        (this.resultPointCallback = e),
        (this.possibleCenters = []),
        (this.crossCheckStateCount = new Int32Array(5)),
        (this.resultPointCallback = e);
    }
    getImage() {
      return this.image;
    }
    getPossibleCenters() {
      return this.possibleCenters;
    }
    find(t) {
      const e = null != t && void 0 !== t.get(C.TRY_HARDER),
        r = null != t && void 0 !== t.get(C.PURE_BARCODE),
        n = this.image,
        i = n.getHeight(),
        s = n.getWidth();
      let o = Math.floor((3 * i) / (4 * ye.MAX_MODULES));
      (o < ye.MIN_SKIP || e) && (o = ye.MIN_SKIP);
      let a = !1;
      const l = new Int32Array(5);
      for (let t = o - 1; t < i && !a; t += o) {
        (l[0] = 0), (l[1] = 0), (l[2] = 0), (l[3] = 0), (l[4] = 0);
        let e = 0;
        for (let i = 0; i < s; i++)
          if (n.get(i, t)) 1 == (1 & e) && e++, l[e]++;
          else if (0 == (1 & e))
            if (4 === e)
              if (ye.foundPatternCross(l)) {
                if (!0 !== this.handlePossibleCenter(l, t, i, r)) {
                  (l[0] = l[2]), (l[1] = l[3]), (l[2] = l[4]), (l[3] = 1), (l[4] = 0), (e = 3);
                  continue;
                }
                if (((o = 2), !0 === this.hasSkipped)) a = this.haveMultiplyConfirmedCenters();
                else {
                  const e = this.findRowSkip();
                  e > l[2] && ((t += e - l[2] - o), (i = s - 1));
                }
                (e = 0), (l[0] = 0), (l[1] = 0), (l[2] = 0), (l[3] = 0), (l[4] = 0);
              } else (l[0] = l[2]), (l[1] = l[3]), (l[2] = l[4]), (l[3] = 1), (l[4] = 0), (e = 3);
            else l[++e]++;
          else l[e]++;
        if (ye.foundPatternCross(l)) {
          !0 === this.handlePossibleCenter(l, t, s, r) &&
            ((o = l[0]), this.hasSkipped && (a = this.haveMultiplyConfirmedCenters()));
        }
      }
      const h = this.selectBestPatterns();
      return rt.orderBestPatterns(h), new De(h);
    }
    static centerFromEnd(t, e) {
      return e - t[4] - t[3] - t[2] / 2;
    }
    static foundPatternCross(t) {
      let e = 0;
      for (let r = 0; r < 5; r++) {
        const n = t[r];
        if (0 === n) return !1;
        e += n;
      }
      if (e < 7) return !1;
      const r = e / 7,
        n = r / 2;
      return (
        Math.abs(r - t[0]) < n &&
        Math.abs(r - t[1]) < n &&
        Math.abs(3 * r - t[2]) < 3 * n &&
        Math.abs(r - t[3]) < n &&
        Math.abs(r - t[4]) < n
      );
    }
    getCrossCheckStateCount() {
      const t = this.crossCheckStateCount;
      return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), t;
    }
    crossCheckDiagonal(t, e, r, n) {
      const i = this.getCrossCheckStateCount();
      let s = 0;
      const o = this.image;
      for (; t >= s && e >= s && o.get(e - s, t - s); ) i[2]++, s++;
      if (t < s || e < s) return !1;
      for (; t >= s && e >= s && !o.get(e - s, t - s) && i[1] <= r; ) i[1]++, s++;
      if (t < s || e < s || i[1] > r) return !1;
      for (; t >= s && e >= s && o.get(e - s, t - s) && i[0] <= r; ) i[0]++, s++;
      if (i[0] > r) return !1;
      const a = o.getHeight(),
        l = o.getWidth();
      for (s = 1; t + s < a && e + s < l && o.get(e + s, t + s); ) i[2]++, s++;
      if (t + s >= a || e + s >= l) return !1;
      for (; t + s < a && e + s < l && !o.get(e + s, t + s) && i[3] < r; ) i[3]++, s++;
      if (t + s >= a || e + s >= l || i[3] >= r) return !1;
      for (; t + s < a && e + s < l && o.get(e + s, t + s) && i[4] < r; ) i[4]++, s++;
      if (i[4] >= r) return !1;
      const h = i[0] + i[1] + i[2] + i[3] + i[4];
      return Math.abs(h - n) < 2 * n && ye.foundPatternCross(i);
    }
    crossCheckVertical(t, e, r, n) {
      const i = this.image,
        s = i.getHeight(),
        o = this.getCrossCheckStateCount();
      let a = t;
      for (; a >= 0 && i.get(e, a); ) o[2]++, a--;
      if (a < 0) return NaN;
      for (; a >= 0 && !i.get(e, a) && o[1] <= r; ) o[1]++, a--;
      if (a < 0 || o[1] > r) return NaN;
      for (; a >= 0 && i.get(e, a) && o[0] <= r; ) o[0]++, a--;
      if (o[0] > r) return NaN;
      for (a = t + 1; a < s && i.get(e, a); ) o[2]++, a++;
      if (a === s) return NaN;
      for (; a < s && !i.get(e, a) && o[3] < r; ) o[3]++, a++;
      if (a === s || o[3] >= r) return NaN;
      for (; a < s && i.get(e, a) && o[4] < r; ) o[4]++, a++;
      if (o[4] >= r) return NaN;
      const l = o[0] + o[1] + o[2] + o[3] + o[4];
      return 5 * Math.abs(l - n) >= 2 * n ? NaN : ye.foundPatternCross(o) ? ye.centerFromEnd(o, a) : NaN;
    }
    crossCheckHorizontal(t, e, r, n) {
      const i = this.image,
        s = i.getWidth(),
        o = this.getCrossCheckStateCount();
      let a = t;
      for (; a >= 0 && i.get(a, e); ) o[2]++, a--;
      if (a < 0) return NaN;
      for (; a >= 0 && !i.get(a, e) && o[1] <= r; ) o[1]++, a--;
      if (a < 0 || o[1] > r) return NaN;
      for (; a >= 0 && i.get(a, e) && o[0] <= r; ) o[0]++, a--;
      if (o[0] > r) return NaN;
      for (a = t + 1; a < s && i.get(a, e); ) o[2]++, a++;
      if (a === s) return NaN;
      for (; a < s && !i.get(a, e) && o[3] < r; ) o[3]++, a++;
      if (a === s || o[3] >= r) return NaN;
      for (; a < s && i.get(a, e) && o[4] < r; ) o[4]++, a++;
      if (o[4] >= r) return NaN;
      const l = o[0] + o[1] + o[2] + o[3] + o[4];
      return 5 * Math.abs(l - n) >= n ? NaN : ye.foundPatternCross(o) ? ye.centerFromEnd(o, a) : NaN;
    }
    handlePossibleCenter(t, e, r, n) {
      const i = t[0] + t[1] + t[2] + t[3] + t[4];
      let s = ye.centerFromEnd(t, r),
        o = this.crossCheckVertical(e, Math.floor(s), t[2], i);
      if (
        !isNaN(o) &&
        ((s = this.crossCheckHorizontal(Math.floor(s), Math.floor(o), t[2], i)),
        !isNaN(s) && (!n || this.crossCheckDiagonal(Math.floor(o), Math.floor(s), t[2], i)))
      ) {
        const t = i / 7;
        let e = !1;
        const r = this.possibleCenters;
        for (let n = 0, i = r.length; n < i; n++) {
          const i = r[n];
          if (i.aboutEquals(t, o, s)) {
            (r[n] = i.combineEstimate(o, s, t)), (e = !0);
            break;
          }
        }
        if (!e) {
          const e = new Ne(s, o, t);
          r.push(e),
            null !== this.resultPointCallback &&
              void 0 !== this.resultPointCallback &&
              this.resultPointCallback.foundPossibleResultPoint(e);
        }
        return !0;
      }
      return !1;
    }
    findRowSkip() {
      if (this.possibleCenters.length <= 1) return 0;
      let t = null;
      for (const e of this.possibleCenters)
        if (e.getCount() >= ye.CENTER_QUORUM) {
          if (null != t)
            return (
              (this.hasSkipped = !0), Math.floor((Math.abs(t.getX() - e.getX()) - Math.abs(t.getY() - e.getY())) / 2)
            );
          t = e;
        }
      return 0;
    }
    haveMultiplyConfirmedCenters() {
      let t = 0,
        e = 0;
      const r = this.possibleCenters.length;
      for (const r of this.possibleCenters)
        r.getCount() >= ye.CENTER_QUORUM && (t++, (e += r.getEstimatedModuleSize()));
      if (t < 3) return !1;
      const n = e / r;
      let i = 0;
      for (const t of this.possibleCenters) i += Math.abs(t.getEstimatedModuleSize() - n);
      return i <= 0.05 * e;
    }
    selectBestPatterns() {
      const t = this.possibleCenters.length;
      if (t < 3) throw new R();
      const e = this.possibleCenters;
      let r;
      if (t > 3) {
        let n = 0,
          i = 0;
        for (const t of this.possibleCenters) {
          const e = t.getEstimatedModuleSize();
          (n += e), (i += e * e);
        }
        r = n / t;
        let s = Math.sqrt(i / t - r * r);
        e.sort((t, e) => {
          const n = Math.abs(e.getEstimatedModuleSize() - r),
            i = Math.abs(t.getEstimatedModuleSize() - r);
          return n < i ? -1 : n > i ? 1 : 0;
        });
        const o = Math.max(0.2 * r, s);
        for (let t = 0; t < e.length && e.length > 3; t++) {
          const n = e[t];
          Math.abs(n.getEstimatedModuleSize() - r) > o && (e.splice(t, 1), t--);
        }
      }
      if (e.length > 3) {
        let t = 0;
        for (const r of e) t += r.getEstimatedModuleSize();
        (r = t / e.length),
          e.sort((t, e) => {
            if (e.getCount() === t.getCount()) {
              const n = Math.abs(e.getEstimatedModuleSize() - r),
                i = Math.abs(t.getEstimatedModuleSize() - r);
              return n < i ? 1 : n > i ? -1 : 0;
            }
            return e.getCount() - t.getCount();
          }),
          e.splice(3);
      }
      return [e[0], e[1], e[2]];
    }
  }
  (ye.CENTER_QUORUM = 2), (ye.MIN_SKIP = 3), (ye.MAX_MODULES = 57);
  class Oe {
    constructor(t) {
      this.image = t;
    }
    getImage() {
      return this.image;
    }
    getResultPointCallback() {
      return this.resultPointCallback;
    }
    detect(t) {
      this.resultPointCallback = null == t ? null : t.get(C.NEED_RESULT_POINT_CALLBACK);
      const e = new ye(this.image, this.resultPointCallback).find(t);
      return this.processFinderPatternInfo(e);
    }
    processFinderPatternInfo(t) {
      const e = t.getTopLeft(),
        r = t.getTopRight(),
        n = t.getBottomLeft(),
        i = this.calculateModuleSize(e, r, n);
      if (i < 1) throw new R('No pattern found in proccess finder.');
      const s = Oe.computeDimension(e, r, n, i),
        o = Ae.getProvisionalVersionForDimension(s),
        a = o.getDimensionForVersion() - 7;
      let l = null;
      if (o.getAlignmentPatternCenters().length > 0) {
        const t = r.getX() - e.getX() + n.getX(),
          s = r.getY() - e.getY() + n.getY(),
          o = 1 - 3 / a,
          h = Math.floor(e.getX() + o * (t - e.getX())),
          c = Math.floor(e.getY() + o * (s - e.getY()));
        for (let t = 4; t <= 16; t <<= 1)
          try {
            l = this.findAlignmentInRegion(i, h, c, t);
            break;
          } catch (t) {
            if (!(t instanceof R)) throw t;
          }
      }
      const h = Oe.createTransform(e, r, n, l, s),
        c = Oe.sampleGrid(this.image, h, s);
      let u;
      return (u = null === l ? [n, e, r] : [n, e, r, l]), new nt(c, u);
    }
    static createTransform(t, e, r, n, i) {
      const s = i - 3.5;
      let o, a, l, h;
      return (
        null !== n
          ? ((o = n.getX()), (a = n.getY()), (l = s - 3), (h = l))
          : ((o = e.getX() - t.getX() + r.getX()), (a = e.getY() - t.getY() + r.getY()), (l = s), (h = s)),
        at.quadrilateralToQuadrilateral(
          3.5,
          3.5,
          s,
          3.5,
          l,
          h,
          3.5,
          s,
          t.getX(),
          t.getY(),
          e.getX(),
          e.getY(),
          o,
          a,
          r.getX(),
          r.getY(),
        )
      );
    }
    static sampleGrid(t, e, r) {
      return ht.getInstance().sampleGridWithTransform(t, r, r, e);
    }
    static computeDimension(t, e, r, n) {
      const i = tt.round(rt.distance(t, e) / n),
        s = tt.round(rt.distance(t, r) / n);
      let o = Math.floor((i + s) / 2) + 7;
      switch (3 & o) {
        case 0:
          o++;
          break;
        case 2:
          o--;
          break;
        case 3:
          throw new R('Dimensions could be not found.');
      }
      return o;
    }
    calculateModuleSize(t, e, r) {
      return (this.calculateModuleSizeOneWay(t, e) + this.calculateModuleSizeOneWay(t, r)) / 2;
    }
    calculateModuleSizeOneWay(t, e) {
      const r = this.sizeOfBlackWhiteBlackRunBothWays(
          Math.floor(t.getX()),
          Math.floor(t.getY()),
          Math.floor(e.getX()),
          Math.floor(e.getY()),
        ),
        n = this.sizeOfBlackWhiteBlackRunBothWays(
          Math.floor(e.getX()),
          Math.floor(e.getY()),
          Math.floor(t.getX()),
          Math.floor(t.getY()),
        );
      return isNaN(r) ? n / 7 : isNaN(n) ? r / 7 : (r + n) / 14;
    }
    sizeOfBlackWhiteBlackRunBothWays(t, e, r, n) {
      let i = this.sizeOfBlackWhiteBlackRun(t, e, r, n),
        s = 1,
        o = t - (r - t);
      o < 0
        ? ((s = t / (t - o)), (o = 0))
        : o >= this.image.getWidth() &&
          ((s = (this.image.getWidth() - 1 - t) / (o - t)), (o = this.image.getWidth() - 1));
      let a = Math.floor(e - (n - e) * s);
      return (
        (s = 1),
        a < 0
          ? ((s = e / (e - a)), (a = 0))
          : a >= this.image.getHeight() &&
            ((s = (this.image.getHeight() - 1 - e) / (a - e)), (a = this.image.getHeight() - 1)),
        (o = Math.floor(t + (o - t) * s)),
        (i += this.sizeOfBlackWhiteBlackRun(t, e, o, a)),
        i - 1
      );
    }
    sizeOfBlackWhiteBlackRun(t, e, r, n) {
      const i = Math.abs(n - e) > Math.abs(r - t);
      if (i) {
        let i = t;
        (t = e), (e = i), (i = r), (r = n), (n = i);
      }
      const s = Math.abs(r - t),
        o = Math.abs(n - e);
      let a = -s / 2;
      const l = t < r ? 1 : -1,
        h = e < n ? 1 : -1;
      let c = 0;
      const u = r + l;
      for (let r = t, d = e; r !== u; r += l) {
        const l = i ? d : r,
          u = i ? r : d;
        if ((1 === c) === this.image.get(l, u)) {
          if (2 === c) return tt.distance(r, d, t, e);
          c++;
        }
        if (((a += o), a > 0)) {
          if (d === n) break;
          (d += h), (a -= s);
        }
      }
      return 2 === c ? tt.distance(r + l, n, t, e) : NaN;
    }
    findAlignmentInRegion(t, e, r, n) {
      const i = Math.floor(n * t),
        s = Math.max(0, e - i),
        o = Math.min(this.image.getWidth() - 1, e + i);
      if (o - s < 3 * t) throw new R('Alignment top exceeds estimated module size.');
      const a = Math.max(0, r - i),
        l = Math.min(this.image.getHeight() - 1, r + i);
      if (l - a < 3 * t) throw new R('Alignment bottom exceeds estimated module size.');
      return new Re(this.image, s, a, o - s, l - a, t, this.resultPointCallback).find();
    }
  }
  class Me {
    constructor() {
      this.decoder = new pe();
    }
    getDecoder() {
      return this.decoder;
    }
    decode(t, e) {
      let r, n;
      if (null != e && void 0 !== e.get(C.PURE_BARCODE)) {
        const i = Me.extractPureBits(t.getBlackMatrix());
        (r = this.decoder.decodeBitMatrix(i, e)), (n = Me.NO_POINTS);
      } else {
        const i = new Oe(t.getBlackMatrix()).detect(e);
        (r = this.decoder.decodeBitMatrix(i.getBits(), e)), (n = i.getPoints());
      }
      r.getOther() instanceof Se && r.getOther().applyMirroredCorrection(n);
      const i = new F(r.getText(), r.getRawBytes(), void 0, n, v.QR_CODE, void 0),
        s = r.getByteSegments();
      null !== s && i.putMetadata(W.BYTE_SEGMENTS, s);
      const o = r.getECLevel();
      return (
        null !== o && i.putMetadata(W.ERROR_CORRECTION_LEVEL, o),
        r.hasStructuredAppend() &&
          (i.putMetadata(W.STRUCTURED_APPEND_SEQUENCE, r.getStructuredAppendSequenceNumber()),
          i.putMetadata(W.STRUCTURED_APPEND_PARITY, r.getStructuredAppendParity())),
        i
      );
    }
    reset() {}
    static extractPureBits(t) {
      const e = t.getTopLeftOnBit(),
        r = t.getBottomRightOnBit();
      if (null === e || null === r) throw new R();
      const n = this.moduleSize(e, t);
      let i = e[1],
        s = r[1],
        o = e[0],
        a = r[0];
      if (o >= a || i >= s) throw new R();
      if (s - i != a - o && ((a = o + (s - i)), a >= t.getWidth())) throw new R();
      const l = Math.round((a - o + 1) / n),
        h = Math.round((s - i + 1) / n);
      if (l <= 0 || h <= 0) throw new R();
      if (h !== l) throw new R();
      const c = Math.floor(n / 2);
      (i += c), (o += c);
      const u = o + Math.floor((l - 1) * n) - a;
      if (u > 0) {
        if (u > c) throw new R();
        o -= u;
      }
      const d = i + Math.floor((h - 1) * n) - s;
      if (d > 0) {
        if (d > c) throw new R();
        i -= d;
      }
      const g = new T(l, h);
      for (let e = 0; e < h; e++) {
        const r = i + Math.floor(e * n);
        for (let i = 0; i < l; i++) t.get(o + Math.floor(i * n), r) && g.set(i, e);
      }
      return g;
    }
    static moduleSize(t, e) {
      const r = e.getHeight(),
        n = e.getWidth();
      let i = t[0],
        s = t[1],
        o = !0,
        a = 0;
      for (; i < n && s < r; ) {
        if (o !== e.get(i, s)) {
          if (5 == ++a) break;
          o = !o;
        }
        i++, s++;
      }
      if (i === n || s === r) throw new R();
      return (i - t[0]) / 7;
    }
  }
  Me.NO_POINTS = new Array();
  class Be {
    PDF417Common() {}
    static getBitCountSum(t) {
      return tt.sum(t);
    }
    static toIntArray(t) {
      if (null == t || !t.length) return Be.EMPTY_INT_ARRAY;
      const e = new Int32Array(t.length);
      let r = 0;
      for (const n of t) e[r++] = n;
      return e;
    }
    static getCodeword(t) {
      const e = g.binarySearch(Be.SYMBOL_TABLE, 262143 & t);
      return e < 0 ? -1 : (Be.CODEWORD_TABLE[e] - 1) % Be.NUMBER_OF_CODEWORDS;
    }
  }
  (Be.NUMBER_OF_CODEWORDS = 929),
    (Be.MAX_CODEWORDS_IN_BARCODE = Be.NUMBER_OF_CODEWORDS - 1),
    (Be.MIN_ROWS_IN_BARCODE = 3),
    (Be.MAX_ROWS_IN_BARCODE = 90),
    (Be.MODULES_IN_CODEWORD = 17),
    (Be.MODULES_IN_STOP_PATTERN = 18),
    (Be.BARS_IN_MODULE = 8),
    (Be.EMPTY_INT_ARRAY = new Int32Array([])),
    (Be.SYMBOL_TABLE = Int32Array.from([
      66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600, 66614, 66626,
      66628, 66632, 66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798, 66802, 66804,
      66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936, 66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042,
      67044, 67048, 67062, 67118, 67150, 67164, 67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398, 67404,
      67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692,
      67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800, 67822, 67826, 67828, 67842, 67848, 67870,
      67872, 67900, 67904, 67960, 67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068, 68072, 68086, 68104, 68112,
      68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536,
      68546, 68548, 68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764,
      68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996,
      69e3, 69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108, 69142, 69158, 69164, 69190, 69208,
      69230, 69254, 69260, 69272, 69296, 69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444,
      69448, 69456, 69470, 69478, 69484, 69554, 69556, 69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764,
      69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918, 69920, 69948, 69952, 70008,
      70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152, 70174, 70176, 70264, 70384, 70412,
      70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630, 70636, 70664, 70672, 70686,
      70688, 70716, 70720, 70776, 70896, 71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452, 71480,
      71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758,
      71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910, 71916, 71930, 71950,
      71964, 71992, 72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180,
      72206, 72220, 72248, 72304, 72318, 72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600,
      72624, 72638, 72654, 72668, 72674, 72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838,
      72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950, 72966, 72972, 72984, 73008, 73022, 73056, 73084,
      73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226, 73234, 73236, 73250, 73252, 73256,
      73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420,
      73432, 73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858, 73860,
      73872, 73886, 73888, 73916, 73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160,
      74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272, 74360, 74480, 74502, 74508, 74544, 74558, 74592,
      74620, 74638, 74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812, 74992, 75232, 75288, 75326,
      75360, 75388, 75456, 75512, 75576, 75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736,
      75758, 75808, 75836, 75840, 75896, 76016, 76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296,
      77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688, 77702, 77708, 77720,
      77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966, 77980, 78008, 78018, 78024, 78032, 78046,
      78060, 78074, 78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268, 78278, 78284, 78296, 78322,
      78324, 78350, 78364, 78448, 78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768,
      78782, 78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352,
      79368, 79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740, 79772, 79800,
      79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894, 79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006,
      80024, 80048, 80062, 80078, 80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224, 80252, 80270, 80284,
      80312, 80328, 80336, 80350, 80358, 80364, 80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632,
      80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828, 80844, 80856, 80878, 80882, 80884, 80914,
      80916, 80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990, 80998, 81004, 81026, 81028, 81040, 81054, 81056,
      81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160, 81168, 81182, 81184, 81212, 81216, 81272, 81286, 81292,
      81304, 81328, 81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500, 81506, 81508,
      81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734,
      81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180, 82184, 82192, 82206, 82208, 82236, 82240,
      82296, 82316, 82328, 82352, 82366, 82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672,
      82694, 82700, 82712, 82736, 82750, 82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960,
      82974, 82976, 83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552, 83580, 83648, 83704, 83740,
      83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028,
      84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184, 85240, 85488, 85560, 85616, 85630, 85728,
      85756, 85764, 85768, 85776, 85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966, 85980, 86048,
      86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536,
      89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998, 90012, 90040, 90190,
      90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512,
      90526, 90528, 90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884,
      90888, 90896, 90910, 90912, 90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108,
      91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360, 91388, 91584, 91640, 91664, 91678, 91680, 91708, 91712,
      91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100, 92104, 92112, 92126, 92134,
      92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248, 93304, 93424,
      93664, 93720, 93744, 93758, 93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110,
      94112, 94140, 94150, 94156, 94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398,
      94414, 94428, 94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664,
      94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844, 94912, 94968, 94990, 95004,
      95032, 95088, 95102, 95112, 95120, 95134, 95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280,
      95294, 95328, 95356, 95424, 95480, 95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030,
      96032, 96060, 96064, 96120, 96152, 96176, 96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296, 96310, 96322,
      96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416, 96444, 96454, 96460, 96472,
      96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632, 96646, 96652, 96664, 96688,
      96702, 96718, 96732, 96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008,
      97030, 97036, 97048, 97072, 97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260,
      97326, 97330, 97332, 97358, 97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488,
      97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668, 97672, 97680, 97694, 97696, 97724, 97734, 97740,
      97752, 97774, 97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998,
      98012, 98018, 98020, 98024, 98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932,
      98968, 99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386, 99398, 99416,
      99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548, 99554, 99556, 99560, 99574, 99590, 99596, 99608, 99632,
      99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792, 99806, 99814, 99820, 99834, 99858, 99860,
      99874, 99880, 99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044,
      100056, 100078, 100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396,
      100410, 100422, 100428, 100440, 100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578,
      100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732, 100750, 100792, 100802, 100808, 100816, 100830,
      100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988, 101056, 101112, 101148, 101176, 101232, 101246,
      101250, 101252, 101256, 101264, 101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362, 101364, 101410,
      101412, 101416, 101430, 101442, 101448, 101456, 101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536,
      101564, 101580, 101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696, 101752, 101766, 101784,
      101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986, 101988, 101992, 102030, 102044,
      102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232, 102254, 102282,
      102290, 102292, 102306, 102308, 102312, 102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534,
      102552, 102576, 102590, 102606, 102620, 102626, 102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780,
      102798, 102812, 102840, 102850, 102856, 102864, 102878, 102886, 102892, 102906, 102936, 102974, 103008, 103036,
      103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366, 103372, 103384,
      103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048, 104062, 104160,
      104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326, 104332, 104344, 104368, 104382,
      104398, 104412, 104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528, 104542, 104550, 104570, 104578,
      104580, 104592, 104606, 104608, 104636, 104652, 104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768,
      104824, 104838, 104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080,
      105200, 105240, 105278, 105312, 105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564,
      105570, 105572, 105576, 105614, 105628, 105656, 105666, 105672, 105680, 105702, 105722, 105742, 105756, 105784,
      105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932, 105970, 105972, 106006, 106022, 106028, 106054,
      106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174, 106190, 106210, 106212, 106216, 106250, 106258,
      106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414, 106418, 106420,
      106566, 106572, 106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758,
      106764, 106776, 106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974,
      106982, 106988, 107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394,
      107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502, 107506, 107508, 107544, 107568,
      107582, 107616, 107644, 107712, 107768, 108016, 108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292,
      108296, 108304, 108318, 108320, 108348, 108352, 108408, 108422, 108428, 108440, 108464, 108478, 108494, 108508,
      108514, 108516, 108520, 108592, 108640, 108668, 108736, 108792, 109040, 109536, 109680, 109694, 109792, 109820,
      110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348, 110360, 110384,
      110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686, 110714, 110722,
      110724, 110728, 110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856, 110864, 110878,
      110880, 110908, 110912, 110968, 110982, 111e3, 111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134,
      111136, 111164, 111168, 111224, 111344, 111372, 111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590,
      111632, 111646, 111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514,
      112516, 112520, 112528, 112542, 112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836,
      112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022, 113026, 113028, 113032, 113040, 113054,
      113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264, 113278, 113376, 113404, 113416, 113424, 113440,
      113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708, 113734, 113740, 113752, 113778,
      113780, 113798, 113804, 113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968,
      113982, 114016, 114044, 114076, 114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212,
      114216, 114242, 114244, 114248, 114256, 114270, 114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364,
      114380, 114420, 114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532, 114536, 114842, 114866, 114868,
      114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250, 115252, 115278, 115292, 115298,
      115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494,
      115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762, 115764, 115790, 115804, 115810, 115812, 115816,
      115830, 115854, 115868, 115896, 115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024, 116080,
      116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206, 116210, 116212,
      116246, 116262, 116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400,
      116414, 116430, 116444, 116450, 116452, 116456, 116498, 116500, 116514, 116520, 116534, 116546, 116548, 116552,
      116560, 116574, 116582, 116588, 116602, 116654, 116694, 116714, 116762, 116782, 116786, 116788, 116814, 116828,
      116834, 116836, 116840, 116854, 116878, 116892, 116920, 116930, 116936, 116944, 116958, 116966, 116972, 116986,
      117006, 117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230,
      117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568,
      117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750, 117782, 117798,
      117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988, 117992, 118022,
      118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210, 118212, 118216, 118224, 118238, 118246, 118266,
      118306, 118312, 118338, 118352, 118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460,
      118476, 118514, 118516, 118574, 118578, 118580, 118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700,
      118730, 118738, 118740, 118830, 118834, 118836, 118862, 118876, 118882, 118884, 118888, 118902, 118926, 118940,
      118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068, 119096, 119152, 119166, 119170,
      119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278, 119282, 119284, 119324, 119352,
      119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686,
      119692, 119704, 119728, 119742, 119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060,
      120256, 120312, 120324, 120328, 120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638,
      120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812, 120870, 120876,
      120890, 120902, 120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038, 121058, 121060,
      121064, 121078, 121100, 121112, 121136, 121150, 121184, 121212, 121244, 121282, 121284, 121288, 121296, 121318,
      121338, 121356, 121368, 121392, 121406, 121440, 121468, 121536, 121592, 121656, 121730, 121732, 121736, 121744,
      121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924, 121928, 121936, 121950, 121958, 121978, 121986,
      121988, 121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144,
      122172, 122176, 122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460,
      122466, 122468, 122472, 122510, 122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662,
      122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770, 122772, 122786, 122788, 122792, 123018, 123026,
      123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154, 123156, 123170, 123172, 123176, 123190, 123202,
      123204, 123208, 123216, 123238, 123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412, 123426, 123428,
      123432, 123446, 123458, 123464, 123472, 123486, 123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552,
      123580, 123590, 123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740, 123746, 123748, 123752,
      123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984, 123998, 124006, 124012, 124026,
      124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148, 124162, 124164,
      124168, 124176, 124190, 124192, 124220, 124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380,
      124386, 124388, 124392, 124406, 124442, 124462, 124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572,
      124600, 124610, 124612, 124616, 124624, 124646, 124666, 124694, 124710, 124716, 124730, 124742, 124748, 124760,
      124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964, 124968, 124982,
      124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072, 125086, 125088,
      125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192, 125200, 125216, 125244, 125248,
      125304, 125318, 125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412, 125416, 125430, 125444, 125448,
      125456, 125472, 125504, 125560, 125680, 125702, 125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852,
      125880, 125890, 125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044,
      126050, 126052, 126056, 126094, 126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236,
      126264, 126320, 126334, 126338, 126340, 126344, 126352, 126366, 126368, 126412, 126450, 126452, 126486, 126502,
      126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580, 126598, 126604, 126616, 126640, 126654, 126670,
      126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760, 126774, 126786, 126788, 126792, 126800, 126814,
      126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178, 127186, 127188,
      127254, 127270, 127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394,
      127396, 127400, 127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628,
      127640, 127664, 127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784,
      127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922, 127924, 128022, 128038, 128044,
      128058, 128070, 128076, 128088, 128110, 128114, 128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220,
      128226, 128228, 128232, 128246, 128262, 128268, 128280, 128304, 128318, 128352, 128380, 128398, 128412, 128440,
      128450, 128452, 128456, 128464, 128478, 128486, 128492, 128506, 128522, 128530, 128532, 128546, 128548, 128552,
      128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656, 128670, 128672,
      128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868, 128872, 128886,
      128918, 128934, 128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258, 129306, 129326,
      129330, 129332, 129358, 129372, 129378, 129380, 129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490,
      129492, 129562, 129582, 129586, 129588, 129614, 129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720,
      129730, 129732, 129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880,
      129902, 129906, 129908, 129930, 129938, 129940, 129954, 129956, 129960, 129974, 130010,
    ])),
    (Be.CODEWORD_TABLE = Int32Array.from([
      2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511,
      873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815,
      814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739,
      2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752, 1719,
      692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646,
      643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324,
      603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909, 2509,
      2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836, 834, 832, 830, 2494, 827,
      2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629, 1821, 2638,
      2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576,
      569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462,
      2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415,
      2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155, 2152, 378,
      377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422,
      1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720,
      2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334,
      2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653, 1651, 1649,
      1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900, 910, 2503,
      2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697,
      2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650,
      2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345,
      1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262, 257, 2101, 253,
      2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052, 202, 2050, 2044,
      2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266, 1264, 1261, 1268,
      155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010,
      1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294,
      2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541,
      1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250, 498, 495,
      1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405,
      2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434, 1477, 1475, 2478, 2472, 2470,
      2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389,
      1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660, 2347, 1657,
      2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608, 2605,
      2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524,
      2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903, 911, 2721, 1844,
      2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858,
      1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981,
      138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117, 1977, 114,
      1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950, 1948, 1945, 94, 93, 91, 1959, 88,
      1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091, 49, 47, 1917, 44,
      1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035,
      70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871,
      28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147,
      2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338, 2143, 335, 2141, 348, 347, 346,
      1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298, 2127, 320, 318, 316,
      313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256,
      2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039,
      2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062,
      211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309,
      2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291,
      579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269,
      2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482,
      1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537,
      1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445,
      1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434,
      2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400,
      2398, 2395, 1703, 2392, 1701, 2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611,
      2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592, 2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562,
      2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835,
      1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758,
      808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639,
      628, 2339, 647, 644, 1645, 1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608,
      1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486,
      833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523,
      540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462,
      1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407,
      1405, 382, 1402, 380, 1417, 1415, 1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676,
      674, 668, 2363, 665, 2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644,
      1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668, 2665,
      2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300,
      296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312,
      1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249,
      1262, 2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167,
      170, 1164, 167, 1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573,
      1588, 520, 518, 512, 2268, 508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526,
      1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455,
      799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677,
      675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532,
      895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758,
      142, 141, 1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120,
      118, 115, 1109, 1108, 1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076,
      1074, 1072, 98, 1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54,
      1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944,
      1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23,
      983, 981, 978, 975, 33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137,
      323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245,
      244, 242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186,
      2036, 183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300,
      2286, 2284, 2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533,
      1569, 1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475,
      2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379,
      1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800,
      2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686,
      1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636, 1633,
      1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560,
      1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358,
      2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672, 669,
      666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848,
      847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343, 255,
      251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210, 1242,
      1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152, 157, 1173, 1171,
      1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227,
      472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769,
      764, 720, 712, 2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516,
      885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106,
      102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060, 87, 1075,
      1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029,
      1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17,
      14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349, 1381, 329,
      327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254,
      1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231, 1229, 1226, 217,
      1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563,
      1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770,
      768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717,
      2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626,
      1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504, 1501, 1498, 1509, 1442,
      1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708,
      1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289,
      2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143,
      149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582, 510, 1556, 1553, 452, 448,
      1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709, 662, 660, 657, 1673, 1671,
      916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979,
      1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996,
      37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950,
      947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325, 1364, 1362, 288, 285, 1334,
      1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219, 1217, 1215, 1212,
      200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455,
      451, 1507, 1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681,
      1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665,
      1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222, 2068, 2065, 1149, 1147, 1144, 1141, 146,
      1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425, 388, 1440, 2205, 1705,
      658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3, 997, 38, 1013, 1010,
      1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35,
      1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182,
      1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913,
      912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429,
      1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954, 1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879,
      1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270, 2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540,
      1484, 1481, 1478, 1491, 1700,
    ]));
  class be {
    constructor(t, e) {
      (this.bits = t), (this.points = e);
    }
    getBits() {
      return this.bits;
    }
    getPoints() {
      return this.points;
    }
  }
  class Pe {
    static detectMultiple(t, e, r) {
      let n = t.getBlackMatrix(),
        i = Pe.detect(r, n);
      return i.length || ((n = n.clone()), n.rotate180(), (i = Pe.detect(r, n))), new be(n, i);
    }
    static detect(t, e) {
      const r = new Array();
      let n = 0,
        i = 0,
        s = !1;
      for (; n < e.getHeight(); ) {
        const o = Pe.findVertices(e, n, i);
        if (null != o[0] || null != o[3]) {
          if (((s = !0), r.push(o), !t)) break;
          null != o[2]
            ? ((i = Math.trunc(o[2].getX())), (n = Math.trunc(o[2].getY())))
            : ((i = Math.trunc(o[4].getX())), (n = Math.trunc(o[4].getY())));
        } else {
          if (!s) break;
          (s = !1), (i = 0);
          for (const t of r)
            null != t[1] && (n = Math.trunc(Math.max(n, t[1].getY()))),
              null != t[3] && (n = Math.max(n, Math.trunc(t[3].getY())));
          n += Pe.ROW_STEP;
        }
      }
      return r;
    }
    static findVertices(t, e, r) {
      const n = t.getHeight(),
        i = t.getWidth(),
        s = new Array(8);
      return (
        Pe.copyToResult(s, Pe.findRowsWithPattern(t, n, i, e, r, Pe.START_PATTERN), Pe.INDEXES_START_PATTERN),
        null != s[4] && ((r = Math.trunc(s[4].getX())), (e = Math.trunc(s[4].getY()))),
        Pe.copyToResult(s, Pe.findRowsWithPattern(t, n, i, e, r, Pe.STOP_PATTERN), Pe.INDEXES_STOP_PATTERN),
        s
      );
    }
    static copyToResult(t, e, r) {
      for (let n = 0; n < r.length; n++) t[r[n]] = e[n];
    }
    static findRowsWithPattern(t, e, r, n, i, s) {
      const o = new Array(4);
      let a = !1;
      const l = new Int32Array(s.length);
      for (; n < e; n += Pe.ROW_STEP) {
        let e = Pe.findGuardPattern(t, i, n, r, !1, s, l);
        if (null != e) {
          for (; n > 0; ) {
            const o = Pe.findGuardPattern(t, i, --n, r, !1, s, l);
            if (null == o) {
              n++;
              break;
            }
            e = o;
          }
          (o[0] = new rt(e[0], n)), (o[1] = new rt(e[1], n)), (a = !0);
          break;
        }
      }
      let h = n + 1;
      if (a) {
        let n = 0,
          i = Int32Array.from([Math.trunc(o[0].getX()), Math.trunc(o[1].getX())]);
        for (; h < e; h++) {
          const e = Pe.findGuardPattern(t, i[0], h, r, !1, s, l);
          if (null != e && Math.abs(i[0] - e[0]) < Pe.MAX_PATTERN_DRIFT && Math.abs(i[1] - e[1]) < Pe.MAX_PATTERN_DRIFT)
            (i = e), (n = 0);
          else {
            if (n > Pe.SKIPPED_ROW_COUNT_MAX) break;
            n++;
          }
        }
        (h -= n + 1), (o[2] = new rt(i[0], h)), (o[3] = new rt(i[1], h));
      }
      return h - n < Pe.BARCODE_MIN_HEIGHT && g.fill(o, null), o;
    }
    static findGuardPattern(t, e, r, n, i, s, o) {
      g.fillWithin(o, 0, o.length, 0);
      let a = e,
        l = 0;
      for (; t.get(a, r) && a > 0 && l++ < Pe.MAX_PIXEL_DRIFT; ) a--;
      let h = a,
        u = 0,
        d = s.length;
      for (let e = i; h < n; h++) {
        if (t.get(h, r) !== e) o[u]++;
        else {
          if (u === d - 1) {
            if (Pe.patternMatchVariance(o, s, Pe.MAX_INDIVIDUAL_VARIANCE) < Pe.MAX_AVG_VARIANCE)
              return new Int32Array([a, h]);
            (a += o[0] + o[1]), c.arraycopy(o, 2, o, 0, u - 1), (o[u - 1] = 0), (o[u] = 0), u--;
          } else u++;
          (o[u] = 1), (e = !e);
        }
      }
      return u === d - 1 && Pe.patternMatchVariance(o, s, Pe.MAX_INDIVIDUAL_VARIANCE) < Pe.MAX_AVG_VARIANCE
        ? new Int32Array([a, h - 1])
        : null;
    }
    static patternMatchVariance(t, e, r) {
      let n = t.length,
        i = 0,
        s = 0;
      for (let r = 0; r < n; r++) (i += t[r]), (s += e[r]);
      if (i < s) return 1 / 0;
      let o = i / s;
      r *= o;
      let a = 0;
      for (let i = 0; i < n; i++) {
        let n = t[i],
          s = e[i] * o,
          l = n > s ? n - s : s - n;
        if (l > r) return 1 / 0;
        a += l;
      }
      return a / i;
    }
  }
  (Pe.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5])),
    (Pe.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3])),
    (Pe.MAX_AVG_VARIANCE = 0.42),
    (Pe.MAX_INDIVIDUAL_VARIANCE = 0.8),
    (Pe.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3])),
    (Pe.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1])),
    (Pe.MAX_PIXEL_DRIFT = 3),
    (Pe.MAX_PATTERN_DRIFT = 5),
    (Pe.SKIPPED_ROW_COUNT_MAX = 25),
    (Pe.ROW_STEP = 5),
    (Pe.BARCODE_MIN_HEIGHT = 10);
  class Le {
    constructor(t, e) {
      if (0 === e.length) throw new o();
      this.field = t;
      let r = e.length;
      if (r > 1 && 0 === e[0]) {
        let t = 1;
        for (; t < r && 0 === e[t]; ) t++;
        t === r
          ? (this.coefficients = new Int32Array([0]))
          : ((this.coefficients = new Int32Array(r - t)),
            c.arraycopy(e, t, this.coefficients, 0, this.coefficients.length));
      } else this.coefficients = e;
    }
    getCoefficients() {
      return this.coefficients;
    }
    getDegree() {
      return this.coefficients.length - 1;
    }
    isZero() {
      return 0 === this.coefficients[0];
    }
    getCoefficient(t) {
      return this.coefficients[this.coefficients.length - 1 - t];
    }
    evaluateAt(t) {
      if (0 === t) return this.getCoefficient(0);
      if (1 === t) {
        let t = 0;
        for (let e of this.coefficients) t = this.field.add(t, e);
        return t;
      }
      let e = this.coefficients[0],
        r = this.coefficients.length;
      for (let n = 1; n < r; n++) e = this.field.add(this.field.multiply(t, e), this.coefficients[n]);
      return e;
    }
    add(t) {
      if (!this.field.equals(t.field)) throw new o('ModulusPolys do not have same ModulusGF field');
      if (this.isZero()) return t;
      if (t.isZero()) return this;
      let e = this.coefficients,
        r = t.coefficients;
      if (e.length > r.length) {
        let t = e;
        (e = r), (r = t);
      }
      let n = new Int32Array(r.length),
        i = r.length - e.length;
      c.arraycopy(r, 0, n, 0, i);
      for (let t = i; t < r.length; t++) n[t] = this.field.add(e[t - i], r[t]);
      return new Le(this.field, n);
    }
    subtract(t) {
      if (!this.field.equals(t.field)) throw new o('ModulusPolys do not have same ModulusGF field');
      return t.isZero() ? this : this.add(t.negative());
    }
    multiply(t) {
      return t instanceof Le ? this.multiplyOther(t) : this.multiplyScalar(t);
    }
    multiplyOther(t) {
      if (!this.field.equals(t.field)) throw new o('ModulusPolys do not have same ModulusGF field');
      if (this.isZero() || t.isZero()) return new Le(this.field, new Int32Array([0]));
      let e = this.coefficients,
        r = e.length,
        n = t.coefficients,
        i = n.length,
        s = new Int32Array(r + i - 1);
      for (let t = 0; t < r; t++) {
        let r = e[t];
        for (let e = 0; e < i; e++) s[t + e] = this.field.add(s[t + e], this.field.multiply(r, n[e]));
      }
      return new Le(this.field, s);
    }
    negative() {
      let t = this.coefficients.length,
        e = new Int32Array(t);
      for (let r = 0; r < t; r++) e[r] = this.field.subtract(0, this.coefficients[r]);
      return new Le(this.field, e);
    }
    multiplyScalar(t) {
      if (0 === t) return new Le(this.field, new Int32Array([0]));
      if (1 === t) return this;
      let e = this.coefficients.length,
        r = new Int32Array(e);
      for (let n = 0; n < e; n++) r[n] = this.field.multiply(this.coefficients[n], t);
      return new Le(this.field, r);
    }
    multiplyByMonomial(t, e) {
      if (t < 0) throw new o();
      if (0 === e) return new Le(this.field, new Int32Array([0]));
      let r = this.coefficients.length,
        n = new Int32Array(r + t);
      for (let t = 0; t < r; t++) n[t] = this.field.multiply(this.coefficients[t], e);
      return new Le(this.field, n);
    }
    toString() {
      let t = new p();
      for (let e = this.getDegree(); e >= 0; e--) {
        let r = this.getCoefficient(e);
        0 !== r &&
          (r < 0 ? (t.append(' - '), (r = -r)) : t.length() > 0 && t.append(' + '),
          (0 !== e && 1 === r) || t.append(r),
          0 !== e && (1 === e ? t.append('x') : (t.append('x^'), t.append(e))));
      }
      return t.toString();
    }
  }
  class Fe extends class {
    add(t, e) {
      return (t + e) % this.modulus;
    }
    subtract(t, e) {
      return (this.modulus + t - e) % this.modulus;
    }
    exp(t) {
      return this.expTable[t];
    }
    log(t) {
      if (0 === t) throw new o();
      return this.logTable[t];
    }
    inverse(t) {
      if (0 === t) throw new K();
      return this.expTable[this.modulus - this.logTable[t] - 1];
    }
    multiply(t, e) {
      return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.modulus - 1)];
    }
    getSize() {
      return this.modulus;
    }
    equals(t) {
      return t === this;
    }
  } {
    constructor(t, e) {
      super(), (this.modulus = t), (this.expTable = new Int32Array(t)), (this.logTable = new Int32Array(t));
      let r = 1;
      for (let n = 0; n < t; n++) (this.expTable[n] = r), (r = (r * e) % t);
      for (let e = 0; e < t - 1; e++) this.logTable[this.expTable[e]] = e;
      (this.zero = new Le(this, new Int32Array([0]))), (this.one = new Le(this, new Int32Array([1])));
    }
    getZero() {
      return this.zero;
    }
    getOne() {
      return this.one;
    }
    buildMonomial(t, e) {
      if (t < 0) throw new o();
      if (0 === e) return this.zero;
      let r = new Int32Array(t + 1);
      return (r[0] = e), new Le(this, r);
    }
  }
  Fe.PDF417_GF = new Fe(Be.NUMBER_OF_CODEWORDS, 3);
  class ke {
    constructor() {
      this.field = Fe.PDF417_GF;
    }
    decode(t, e, r) {
      let n = new Le(this.field, t),
        i = new Int32Array(e),
        s = !1;
      for (let t = e; t > 0; t--) {
        let r = n.evaluateAt(this.field.exp(t));
        (i[e - t] = r), 0 !== r && (s = !0);
      }
      if (!s) return 0;
      let o = this.field.getOne();
      if (null != r)
        for (const e of r) {
          let r = this.field.exp(t.length - 1 - e),
            n = new Le(this.field, new Int32Array([this.field.subtract(0, r), 1]));
          o = o.multiply(n);
        }
      let a = new Le(this.field, i),
        h = this.runEuclideanAlgorithm(this.field.buildMonomial(e, 1), a, e),
        c = h[0],
        u = h[1],
        d = this.findErrorLocations(c),
        g = this.findErrorMagnitudes(u, c, d);
      for (let e = 0; e < d.length; e++) {
        let r = t.length - 1 - this.field.log(d[e]);
        if (r < 0) throw l.getChecksumInstance();
        t[r] = this.field.subtract(t[r], g[e]);
      }
      return d.length;
    }
    runEuclideanAlgorithm(t, e, r) {
      if (t.getDegree() < e.getDegree()) {
        let r = t;
        (t = e), (e = r);
      }
      let n = t,
        i = e,
        s = this.field.getZero(),
        o = this.field.getOne();
      for (; i.getDegree() >= Math.round(r / 2); ) {
        let t = n,
          e = s;
        if (((n = i), (s = o), n.isZero())) throw l.getChecksumInstance();
        i = t;
        let r = this.field.getZero(),
          a = n.getCoefficient(n.getDegree()),
          h = this.field.inverse(a);
        for (; i.getDegree() >= n.getDegree() && !i.isZero(); ) {
          let t = i.getDegree() - n.getDegree(),
            e = this.field.multiply(i.getCoefficient(i.getDegree()), h);
          (r = r.add(this.field.buildMonomial(t, e))), (i = i.subtract(n.multiplyByMonomial(t, e)));
        }
        o = r.multiply(s).subtract(e).negative();
      }
      let a = o.getCoefficient(0);
      if (0 === a) throw l.getChecksumInstance();
      let h = this.field.inverse(a);
      return [o.multiply(h), i.multiply(h)];
    }
    findErrorLocations(t) {
      let e = t.getDegree(),
        r = new Int32Array(e),
        n = 0;
      for (let i = 1; i < this.field.getSize() && n < e; i++)
        0 === t.evaluateAt(i) && ((r[n] = this.field.inverse(i)), n++);
      if (n !== e) throw l.getChecksumInstance();
      return r;
    }
    findErrorMagnitudes(t, e, r) {
      let n = e.getDegree(),
        i = new Int32Array(n);
      for (let t = 1; t <= n; t++) i[n - t] = this.field.multiply(t, e.getCoefficient(t));
      let s = new Le(this.field, i),
        o = r.length,
        a = new Int32Array(o);
      for (let e = 0; e < o; e++) {
        let n = this.field.inverse(r[e]),
          i = this.field.subtract(0, t.evaluateAt(n)),
          o = this.field.inverse(s.evaluateAt(n));
        a[e] = this.field.multiply(i, o);
      }
      return a;
    }
  }
  class ve {
    constructor(t, e, r, n, i) {
      t instanceof ve ? this.constructor_2(t) : this.constructor_1(t, e, r, n, i);
    }
    constructor_1(t, e, r, n, i) {
      const s = null == e || null == r,
        o = null == n || null == i;
      if (s && o) throw new R();
      s
        ? ((e = new rt(0, n.getY())), (r = new rt(0, i.getY())))
        : o && ((n = new rt(t.getWidth() - 1, e.getY())), (i = new rt(t.getWidth() - 1, r.getY()))),
        (this.image = t),
        (this.topLeft = e),
        (this.bottomLeft = r),
        (this.topRight = n),
        (this.bottomRight = i),
        (this.minX = Math.trunc(Math.min(e.getX(), r.getX()))),
        (this.maxX = Math.trunc(Math.max(n.getX(), i.getX()))),
        (this.minY = Math.trunc(Math.min(e.getY(), n.getY()))),
        (this.maxY = Math.trunc(Math.max(r.getY(), i.getY())));
    }
    constructor_2(t) {
      (this.image = t.image),
        (this.topLeft = t.getTopLeft()),
        (this.bottomLeft = t.getBottomLeft()),
        (this.topRight = t.getTopRight()),
        (this.bottomRight = t.getBottomRight()),
        (this.minX = t.getMinX()),
        (this.maxX = t.getMaxX()),
        (this.minY = t.getMinY()),
        (this.maxY = t.getMaxY());
    }
    static merge(t, e) {
      return null == t ? e : null == e ? t : new ve(t.image, t.topLeft, t.bottomLeft, e.topRight, e.bottomRight);
    }
    addMissingRows(t, e, r) {
      let n = this.topLeft,
        i = this.bottomLeft,
        s = this.topRight,
        o = this.bottomRight;
      if (t > 0) {
        let e = r ? this.topLeft : this.topRight,
          i = Math.trunc(e.getY() - t);
        i < 0 && (i = 0);
        let o = new rt(e.getX(), i);
        r ? (n = o) : (s = o);
      }
      if (e > 0) {
        let t = r ? this.bottomLeft : this.bottomRight,
          n = Math.trunc(t.getY() + e);
        n >= this.image.getHeight() && (n = this.image.getHeight() - 1);
        let s = new rt(t.getX(), n);
        r ? (i = s) : (o = s);
      }
      return new ve(this.image, n, i, s, o);
    }
    getMinX() {
      return this.minX;
    }
    getMaxX() {
      return this.maxX;
    }
    getMinY() {
      return this.minY;
    }
    getMaxY() {
      return this.maxY;
    }
    getTopLeft() {
      return this.topLeft;
    }
    getTopRight() {
      return this.topRight;
    }
    getBottomLeft() {
      return this.bottomLeft;
    }
    getBottomRight() {
      return this.bottomRight;
    }
  }
  class xe {
    constructor(t, e, r, n) {
      (this.columnCount = t),
        (this.errorCorrectionLevel = n),
        (this.rowCountUpperPart = e),
        (this.rowCountLowerPart = r),
        (this.rowCount = e + r);
    }
    getColumnCount() {
      return this.columnCount;
    }
    getErrorCorrectionLevel() {
      return this.errorCorrectionLevel;
    }
    getRowCount() {
      return this.rowCount;
    }
    getRowCountUpperPart() {
      return this.rowCountUpperPart;
    }
    getRowCountLowerPart() {
      return this.rowCountLowerPart;
    }
  }
  class Ve {
    constructor() {
      this.buffer = '';
    }
    static form(t, e) {
      let r = -1;
      return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function (t, n, i, s, o, a) {
        if ('%%' === t) return '%';
        if (void 0 === e[++r]) return;
        t = s ? parseInt(s.substr(1)) : void 0;
        let l,
          h = o ? parseInt(o.substr(1)) : void 0;
        switch (a) {
          case 's':
            l = e[r];
            break;
          case 'c':
            l = e[r][0];
            break;
          case 'f':
            l = parseFloat(e[r]).toFixed(t);
            break;
          case 'p':
            l = parseFloat(e[r]).toPrecision(t);
            break;
          case 'e':
            l = parseFloat(e[r]).toExponential(t);
            break;
          case 'x':
            l = parseInt(e[r]).toString(h || 16);
            break;
          case 'd':
            l = parseFloat(parseInt(e[r], h || 10).toPrecision(t)).toFixed(0);
        }
        l = 'object' == typeof l ? JSON.stringify(l) : (+l).toString(h);
        let c = parseInt(i),
          u = i && i[0] + '' == '0' ? '0' : ' ';
        for (; l.length < c; ) l = void 0 !== n ? l + u : u + l;
        return l;
      });
    }
    format(t, ...e) {
      this.buffer += Ve.form(t, e);
    }
    toString() {
      return this.buffer;
    }
  }
  class Ue {
    constructor(t) {
      (this.boundingBox = new ve(t)), (this.codewords = new Array(t.getMaxY() - t.getMinY() + 1));
    }
    getCodewordNearby(t) {
      let e = this.getCodeword(t);
      if (null != e) return e;
      for (let r = 1; r < Ue.MAX_NEARBY_DISTANCE; r++) {
        let n = this.imageRowToCodewordIndex(t) - r;
        if (n >= 0 && ((e = this.codewords[n]), null != e)) return e;
        if (
          ((n = this.imageRowToCodewordIndex(t) + r), n < this.codewords.length && ((e = this.codewords[n]), null != e))
        )
          return e;
      }
      return null;
    }
    imageRowToCodewordIndex(t) {
      return t - this.boundingBox.getMinY();
    }
    setCodeword(t, e) {
      this.codewords[this.imageRowToCodewordIndex(t)] = e;
    }
    getCodeword(t) {
      return this.codewords[this.imageRowToCodewordIndex(t)];
    }
    getBoundingBox() {
      return this.boundingBox;
    }
    getCodewords() {
      return this.codewords;
    }
    toString() {
      const t = new Ve();
      let e = 0;
      for (const r of this.codewords)
        null != r ? t.format('%3d: %3d|%3d%n', e++, r.getRowNumber(), r.getValue()) : t.format('%3d:    |   %n', e++);
      return t.toString();
    }
  }
  Ue.MAX_NEARBY_DISTANCE = 5;
  class He {
    constructor() {
      this.values = new Map();
    }
    setValue(t) {
      t = Math.trunc(t);
      let e = this.values.get(t);
      null == e && (e = 0), e++, this.values.set(t, e);
    }
    getValue() {
      let t = -1,
        e = new Array();
      for (const [r, n] of this.values.entries()) {
        const i = { getKey: () => r, getValue: () => n };
        i.getValue() > t
          ? ((t = i.getValue()), (e = []), e.push(i.getKey()))
          : i.getValue() === t && e.push(i.getKey());
      }
      return Be.toIntArray(e);
    }
    getConfidence(t) {
      return this.values.get(t);
    }
  }
  class Ge extends Ue {
    constructor(t, e) {
      super(t), (this._isLeft = e);
    }
    setRowNumbers() {
      for (let t of this.getCodewords()) null != t && t.setRowNumberAsRowIndicatorColumn();
    }
    adjustCompleteIndicatorColumnRowNumbers(t) {
      let e = this.getCodewords();
      this.setRowNumbers(), this.removeIncorrectCodewords(e, t);
      let r = this.getBoundingBox(),
        n = this._isLeft ? r.getTopLeft() : r.getTopRight(),
        i = this._isLeft ? r.getBottomLeft() : r.getBottomRight(),
        s = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
        o = this.imageRowToCodewordIndex(Math.trunc(i.getY())),
        a = -1,
        l = 1,
        h = 0;
      for (let r = s; r < o; r++) {
        if (null == e[r]) continue;
        let n = e[r],
          i = n.getRowNumber() - a;
        if (0 === i) h++;
        else if (1 === i) (l = Math.max(l, h)), (h = 1), (a = n.getRowNumber());
        else if (i < 0 || n.getRowNumber() >= t.getRowCount() || i > r) e[r] = null;
        else {
          let t;
          t = l > 2 ? (l - 2) * i : i;
          let s = t >= r;
          for (let n = 1; n <= t && !s; n++) s = null != e[r - n];
          s ? (e[r] = null) : ((a = n.getRowNumber()), (h = 1));
        }
      }
    }
    getRowHeights() {
      let t = this.getBarcodeMetadata();
      if (null == t) return null;
      this.adjustIncompleteIndicatorColumnRowNumbers(t);
      let e = new Int32Array(t.getRowCount());
      for (let t of this.getCodewords())
        if (null != t) {
          let r = t.getRowNumber();
          if (r >= e.length) continue;
          e[r]++;
        }
      return e;
    }
    adjustIncompleteIndicatorColumnRowNumbers(t) {
      let e = this.getBoundingBox(),
        r = this._isLeft ? e.getTopLeft() : e.getTopRight(),
        n = this._isLeft ? e.getBottomLeft() : e.getBottomRight(),
        i = this.imageRowToCodewordIndex(Math.trunc(r.getY())),
        s = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
        o = this.getCodewords(),
        a = -1;
      for (let e = i; e < s; e++) {
        if (null == o[e]) continue;
        let r = o[e];
        r.setRowNumberAsRowIndicatorColumn();
        let n = r.getRowNumber() - a;
        0 === n ||
          (1 === n
            ? (a = r.getRowNumber())
            : r.getRowNumber() >= t.getRowCount()
            ? (o[e] = null)
            : (a = r.getRowNumber()));
      }
    }
    getBarcodeMetadata() {
      let t = this.getCodewords(),
        e = new He(),
        r = new He(),
        n = new He(),
        i = new He();
      for (let s of t) {
        if (null == s) continue;
        s.setRowNumberAsRowIndicatorColumn();
        let t = s.getValue() % 30,
          o = s.getRowNumber();
        switch ((this._isLeft || (o += 2), o % 3)) {
          case 0:
            r.setValue(3 * t + 1);
            break;
          case 1:
            i.setValue(t / 3), n.setValue(t % 3);
            break;
          case 2:
            e.setValue(t + 1);
        }
      }
      if (
        0 === e.getValue().length ||
        0 === r.getValue().length ||
        0 === n.getValue().length ||
        0 === i.getValue().length ||
        e.getValue()[0] < 1 ||
        r.getValue()[0] + n.getValue()[0] < Be.MIN_ROWS_IN_BARCODE ||
        r.getValue()[0] + n.getValue()[0] > Be.MAX_ROWS_IN_BARCODE
      )
        return null;
      let s = new xe(e.getValue()[0], r.getValue()[0], n.getValue()[0], i.getValue()[0]);
      return this.removeIncorrectCodewords(t, s), s;
    }
    removeIncorrectCodewords(t, e) {
      for (let r = 0; r < t.length; r++) {
        let n = t[r];
        if (null == t[r]) continue;
        let i = n.getValue() % 30,
          s = n.getRowNumber();
        if (s > e.getRowCount()) t[r] = null;
        else
          switch ((this._isLeft || (s += 2), s % 3)) {
            case 0:
              3 * i + 1 !== e.getRowCountUpperPart() && (t[r] = null);
              break;
            case 1:
              (Math.trunc(i / 3) === e.getErrorCorrectionLevel() && i % 3 === e.getRowCountLowerPart()) ||
                (t[r] = null);
              break;
            case 2:
              i + 1 !== e.getColumnCount() && (t[r] = null);
          }
      }
    }
    isLeft() {
      return this._isLeft;
    }
    toString() {
      return 'IsLeft: ' + this._isLeft + '\n' + super.toString();
    }
  }
  class Xe {
    constructor(t, e) {
      (this.ADJUST_ROW_NUMBER_SKIP = 2),
        (this.barcodeMetadata = t),
        (this.barcodeColumnCount = t.getColumnCount()),
        (this.boundingBox = e),
        (this.detectionResultColumns = new Array(this.barcodeColumnCount + 2));
    }
    getDetectionResultColumns() {
      this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]),
        this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
      let t,
        e = Be.MAX_CODEWORDS_IN_BARCODE;
      do {
        (t = e), (e = this.adjustRowNumbersAndGetCount());
      } while (e > 0 && e < t);
      return this.detectionResultColumns;
    }
    adjustIndicatorColumnRowNumbers(t) {
      null != t && t.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
    }
    adjustRowNumbersAndGetCount() {
      let t = this.adjustRowNumbersByRow();
      if (0 === t) return 0;
      for (let t = 1; t < this.barcodeColumnCount + 1; t++) {
        let e = this.detectionResultColumns[t].getCodewords();
        for (let r = 0; r < e.length; r++) null != e[r] && (e[r].hasValidRowNumber() || this.adjustRowNumbers(t, r, e));
      }
      return t;
    }
    adjustRowNumbersByRow() {
      return this.adjustRowNumbersFromBothRI(), this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI();
    }
    adjustRowNumbersFromBothRI() {
      if (null == this.detectionResultColumns[0] || null == this.detectionResultColumns[this.barcodeColumnCount + 1])
        return;
      let t = this.detectionResultColumns[0].getCodewords(),
        e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
      for (let r = 0; r < t.length; r++)
        if (null != t[r] && null != e[r] && t[r].getRowNumber() === e[r].getRowNumber())
          for (let e = 1; e <= this.barcodeColumnCount; e++) {
            let n = this.detectionResultColumns[e].getCodewords()[r];
            null != n &&
              (n.setRowNumber(t[r].getRowNumber()),
              n.hasValidRowNumber() || (this.detectionResultColumns[e].getCodewords()[r] = null));
          }
    }
    adjustRowNumbersFromRRI() {
      if (null == this.detectionResultColumns[this.barcodeColumnCount + 1]) return 0;
      let t = 0,
        e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
      for (let r = 0; r < e.length; r++) {
        if (null == e[r]) continue;
        let n = e[r].getRowNumber(),
          i = 0;
        for (let e = this.barcodeColumnCount + 1; e > 0 && i < this.ADJUST_ROW_NUMBER_SKIP; e--) {
          let s = this.detectionResultColumns[e].getCodewords()[r];
          null != s && ((i = Xe.adjustRowNumberIfValid(n, i, s)), s.hasValidRowNumber() || t++);
        }
      }
      return t;
    }
    adjustRowNumbersFromLRI() {
      if (null == this.detectionResultColumns[0]) return 0;
      let t = 0,
        e = this.detectionResultColumns[0].getCodewords();
      for (let r = 0; r < e.length; r++) {
        if (null == e[r]) continue;
        let n = e[r].getRowNumber(),
          i = 0;
        for (let e = 1; e < this.barcodeColumnCount + 1 && i < this.ADJUST_ROW_NUMBER_SKIP; e++) {
          let s = this.detectionResultColumns[e].getCodewords()[r];
          null != s && ((i = Xe.adjustRowNumberIfValid(n, i, s)), s.hasValidRowNumber() || t++);
        }
      }
      return t;
    }
    static adjustRowNumberIfValid(t, e, r) {
      return null == r || r.hasValidRowNumber() || (r.isValidRowNumber(t) ? (r.setRowNumber(t), (e = 0)) : ++e), e;
    }
    adjustRowNumbers(t, e, r) {
      let n = r[e],
        i = this.detectionResultColumns[t - 1].getCodewords(),
        s = i;
      null != this.detectionResultColumns[t + 1] && (s = this.detectionResultColumns[t + 1].getCodewords());
      let o = new Array(14);
      (o[2] = i[e]),
        (o[3] = s[e]),
        e > 0 && ((o[0] = r[e - 1]), (o[4] = i[e - 1]), (o[5] = s[e - 1])),
        e > 1 && ((o[8] = r[e - 2]), (o[10] = i[e - 2]), (o[11] = s[e - 2])),
        e < r.length - 1 && ((o[1] = r[e + 1]), (o[6] = i[e + 1]), (o[7] = s[e + 1])),
        e < r.length - 2 && ((o[9] = r[e + 2]), (o[12] = i[e + 2]), (o[13] = s[e + 2]));
      for (let t of o) if (Xe.adjustRowNumber(n, t)) return;
    }
    static adjustRowNumber(t, e) {
      return (
        null != e &&
        !(!e.hasValidRowNumber() || e.getBucket() !== t.getBucket()) &&
        (t.setRowNumber(e.getRowNumber()), !0)
      );
    }
    getBarcodeColumnCount() {
      return this.barcodeColumnCount;
    }
    getBarcodeRowCount() {
      return this.barcodeMetadata.getRowCount();
    }
    getBarcodeECLevel() {
      return this.barcodeMetadata.getErrorCorrectionLevel();
    }
    setBoundingBox(t) {
      this.boundingBox = t;
    }
    getBoundingBox() {
      return this.boundingBox;
    }
    setDetectionResultColumn(t, e) {
      this.detectionResultColumns[t] = e;
    }
    getDetectionResultColumn(t) {
      return this.detectionResultColumns[t];
    }
    toString() {
      let t = this.detectionResultColumns[0];
      null == t && (t = this.detectionResultColumns[this.barcodeColumnCount + 1]);
      let e = new Ve();
      for (let r = 0; r < t.getCodewords().length; r++) {
        e.format('CW %3d:', r);
        for (let t = 0; t < this.barcodeColumnCount + 2; t++) {
          if (null == this.detectionResultColumns[t]) {
            e.format('    |   ');
            continue;
          }
          let n = this.detectionResultColumns[t].getCodewords()[r];
          null != n ? e.format(' %3d|%3d', n.getRowNumber(), n.getValue()) : e.format('    |   ');
        }
        e.format('%n');
      }
      return e.toString();
    }
  }
  class We {
    constructor(t, e, r, n) {
      (this.rowNumber = We.BARCODE_ROW_UNKNOWN),
        (this.startX = Math.trunc(t)),
        (this.endX = Math.trunc(e)),
        (this.bucket = Math.trunc(r)),
        (this.value = Math.trunc(n));
    }
    hasValidRowNumber() {
      return this.isValidRowNumber(this.rowNumber);
    }
    isValidRowNumber(t) {
      return t !== We.BARCODE_ROW_UNKNOWN && this.bucket === (t % 3) * 3;
    }
    setRowNumberAsRowIndicatorColumn() {
      this.rowNumber = Math.trunc(3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3));
    }
    getWidth() {
      return this.endX - this.startX;
    }
    getStartX() {
      return this.startX;
    }
    getEndX() {
      return this.endX;
    }
    getBucket() {
      return this.bucket;
    }
    getValue() {
      return this.value;
    }
    getRowNumber() {
      return this.rowNumber;
    }
    setRowNumber(t) {
      this.rowNumber = t;
    }
    toString() {
      return this.rowNumber + '|' + this.value;
    }
  }
  We.BARCODE_ROW_UNKNOWN = -1;
  class ze {
    static initialize() {
      for (let t = 0; t < Be.SYMBOL_TABLE.length; t++) {
        let e = Be.SYMBOL_TABLE[t],
          r = 1 & e;
        for (let n = 0; n < Be.BARS_IN_MODULE; n++) {
          let i = 0;
          for (; (1 & e) === r; ) (i += 1), (e >>= 1);
          (r = 1 & e),
            ze.RATIOS_TABLE[t] || (ze.RATIOS_TABLE[t] = new Array(Be.BARS_IN_MODULE)),
            (ze.RATIOS_TABLE[t][Be.BARS_IN_MODULE - n - 1] = Math.fround(i / Be.MODULES_IN_CODEWORD));
        }
      }
      this.bSymbolTableReady = !0;
    }
    static getDecodedValue(t) {
      let e = ze.getDecodedCodewordValue(ze.sampleBitCounts(t));
      return -1 !== e ? e : ze.getClosestDecodedValue(t);
    }
    static sampleBitCounts(t) {
      let e = tt.sum(t),
        r = new Int32Array(Be.BARS_IN_MODULE),
        n = 0,
        i = 0;
      for (let s = 0; s < Be.MODULES_IN_CODEWORD; s++) {
        let o = e / (2 * Be.MODULES_IN_CODEWORD) + (s * e) / Be.MODULES_IN_CODEWORD;
        i + t[n] <= o && ((i += t[n]), n++), r[n]++;
      }
      return r;
    }
    static getDecodedCodewordValue(t) {
      let e = ze.getBitValue(t);
      return -1 === Be.getCodeword(e) ? -1 : e;
    }
    static getBitValue(t) {
      let e = 0;
      for (let r = 0; r < t.length; r++) for (let n = 0; n < t[r]; n++) e = (e << 1) | (r % 2 == 0 ? 1 : 0);
      return Math.trunc(e);
    }
    static getClosestDecodedValue(t) {
      let e = tt.sum(t),
        r = new Array(Be.BARS_IN_MODULE);
      if (e > 1) for (let n = 0; n < r.length; n++) r[n] = Math.fround(t[n] / e);
      let n = et.MAX_VALUE,
        i = -1;
      this.bSymbolTableReady || ze.initialize();
      for (let t = 0; t < ze.RATIOS_TABLE.length; t++) {
        let e = 0,
          s = ze.RATIOS_TABLE[t];
        for (let t = 0; t < Be.BARS_IN_MODULE; t++) {
          let i = Math.fround(s[t] - r[t]);
          if (((e += Math.fround(i * i)), e >= n)) break;
        }
        e < n && ((n = e), (i = Be.SYMBOL_TABLE[t]));
      }
      return i;
    }
  }
  (ze.bSymbolTableReady = !1),
    (ze.RATIOS_TABLE = new Array(Be.SYMBOL_TABLE.length).map((t) => new Array(Be.BARS_IN_MODULE)));
  class Ye {
    constructor() {
      (this.segmentCount = -1), (this.fileSize = -1), (this.timestamp = -1), (this.checksum = -1);
    }
    getSegmentIndex() {
      return this.segmentIndex;
    }
    setSegmentIndex(t) {
      this.segmentIndex = t;
    }
    getFileId() {
      return this.fileId;
    }
    setFileId(t) {
      this.fileId = t;
    }
    getOptionalData() {
      return this.optionalData;
    }
    setOptionalData(t) {
      this.optionalData = t;
    }
    isLastSegment() {
      return this.lastSegment;
    }
    setLastSegment(t) {
      this.lastSegment = t;
    }
    getSegmentCount() {
      return this.segmentCount;
    }
    setSegmentCount(t) {
      this.segmentCount = t;
    }
    getSender() {
      return this.sender || null;
    }
    setSender(t) {
      this.sender = t;
    }
    getAddressee() {
      return this.addressee || null;
    }
    setAddressee(t) {
      this.addressee = t;
    }
    getFileName() {
      return this.fileName;
    }
    setFileName(t) {
      this.fileName = t;
    }
    getFileSize() {
      return this.fileSize;
    }
    setFileSize(t) {
      this.fileSize = t;
    }
    getChecksum() {
      return this.checksum;
    }
    setChecksum(t) {
      this.checksum = t;
    }
    getTimestamp() {
      return this.timestamp;
    }
    setTimestamp(t) {
      this.timestamp = t;
    }
  }
  class Ze {
    static parseLong(t, e) {
      return parseInt(t, e);
    }
  }
  class Ke extends i {}
  Ke.kind = 'NullPointerException';
  class qe extends i {}
  class Qe extends class {
    writeBytes(t) {
      this.writeBytesOffset(t, 0, t.length);
    }
    writeBytesOffset(t, e, r) {
      if (null == t) throw new Ke();
      if (e < 0 || e > t.length || r < 0 || e + r > t.length || e + r < 0) throw new u();
      if (0 !== r) for (let n = 0; n < r; n++) this.write(t[e + n]);
    }
    flush() {}
    close() {}
  } {
    constructor(t = 32) {
      if ((super(), (this.count = 0), t < 0)) throw new o('Negative initial size: ' + t);
      this.buf = new Uint8Array(t);
    }
    ensureCapacity(t) {
      t - this.buf.length > 0 && this.grow(t);
    }
    grow(t) {
      let e = this.buf.length << 1;
      if ((e - t < 0 && (e = t), e < 0)) {
        if (t < 0) throw new qe();
        e = f.MAX_VALUE;
      }
      this.buf = g.copyOfUint8Array(this.buf, e);
    }
    write(t) {
      this.ensureCapacity(this.count + 1), (this.buf[this.count] = t), (this.count += 1);
    }
    writeBytesOffset(t, e, r) {
      if (e < 0 || e > t.length || r < 0 || e + r - t.length > 0) throw new u();
      this.ensureCapacity(this.count + r), c.arraycopy(t, e, this.buf, this.count, r), (this.count += r);
    }
    writeTo(t) {
      t.writeBytesOffset(this.buf, 0, this.count);
    }
    reset() {
      this.count = 0;
    }
    toByteArray() {
      return g.copyOfUint8Array(this.buf, this.count);
    }
    size() {
      return this.count;
    }
    toString(t) {
      return t ? ('string' == typeof t ? this.toString_string(t) : this.toString_number(t)) : this.toString_void();
    }
    toString_void() {
      return new String(this.buf).toString();
    }
    toString_string(t) {
      return new String(this.buf).toString();
    }
    toString_number(t) {
      return new String(this.buf).toString();
    }
    close() {}
  }
  function je() {
    if ('undefined' != typeof window) return window.BigInt || null;
    if ('undefined' != typeof global) return global.BigInt || null;
    if ('undefined' != typeof self) return self.BigInt || null;
    throw new Error("Can't search globals for BigInt!");
  }
  let Je;
  function $e(t) {
    if ((void 0 === Je && (Je = je()), null === Je)) throw new Error('BigInt is not supported!');
    return Je(t);
  }
  !(function (t) {
    (t[(t.ALPHA = 0)] = 'ALPHA'),
      (t[(t.LOWER = 1)] = 'LOWER'),
      (t[(t.MIXED = 2)] = 'MIXED'),
      (t[(t.PUNCT = 3)] = 'PUNCT'),
      (t[(t.ALPHA_SHIFT = 4)] = 'ALPHA_SHIFT'),
      (t[(t.PUNCT_SHIFT = 5)] = 'PUNCT_SHIFT');
  })(X || (X = {}));
  class tr {
    static decode(t, e) {
      let r = new p(''),
        n = m.ISO8859_1;
      r.enableDecoding(n);
      let i = 1,
        s = t[i++],
        o = new Ye();
      for (; i < t[0]; ) {
        switch (s) {
          case tr.TEXT_COMPACTION_MODE_LATCH:
            i = tr.textCompaction(t, i, r);
            break;
          case tr.BYTE_COMPACTION_MODE_LATCH:
          case tr.BYTE_COMPACTION_MODE_LATCH_6:
            i = tr.byteCompaction(s, t, n, i, r);
            break;
          case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
            r.append(t[i++]);
            break;
          case tr.NUMERIC_COMPACTION_MODE_LATCH:
            i = tr.numericCompaction(t, i, r);
            break;
          case tr.ECI_CHARSET:
            m.getCharacterSetECIByValue(t[i++]);
            break;
          case tr.ECI_GENERAL_PURPOSE:
            i += 2;
            break;
          case tr.ECI_USER_DEFINED:
            i++;
            break;
          case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            i = tr.decodeMacroBlock(t, i, o);
            break;
          case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case tr.MACRO_PDF417_TERMINATOR:
            throw new E();
          default:
            i--, (i = tr.textCompaction(t, i, r));
        }
        if (!(i < t.length)) throw E.getFormatInstance();
        s = t[i++];
      }
      if (0 === r.length()) throw E.getFormatInstance();
      let a = new z(null, r.toString(), null, e);
      return a.setOther(o), a;
    }
    static decodeMacroBlock(t, e, r) {
      if (e + tr.NUMBER_OF_SEQUENCE_CODEWORDS > t[0]) throw E.getFormatInstance();
      let n = new Int32Array(tr.NUMBER_OF_SEQUENCE_CODEWORDS);
      for (let r = 0; r < tr.NUMBER_OF_SEQUENCE_CODEWORDS; r++, e++) n[r] = t[e];
      r.setSegmentIndex(f.parseInt(tr.decodeBase900toBase10(n, tr.NUMBER_OF_SEQUENCE_CODEWORDS)));
      let i = new p();
      (e = tr.textCompaction(t, e, i)), r.setFileId(i.toString());
      let s = -1;
      for (t[e] === tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (s = e + 1); e < t[0]; )
        switch (t[e]) {
          case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            switch (t[++e]) {
              case tr.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                let n = new p();
                (e = tr.textCompaction(t, e + 1, n)), r.setFileName(n.toString());
                break;
              case tr.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                let i = new p();
                (e = tr.textCompaction(t, e + 1, i)), r.setSender(i.toString());
                break;
              case tr.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                let s = new p();
                (e = tr.textCompaction(t, e + 1, s)), r.setAddressee(s.toString());
                break;
              case tr.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                let o = new p();
                (e = tr.numericCompaction(t, e + 1, o)), r.setSegmentCount(f.parseInt(o.toString()));
                break;
              case tr.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                let a = new p();
                (e = tr.numericCompaction(t, e + 1, a)), r.setTimestamp(Ze.parseLong(a.toString()));
                break;
              case tr.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                let l = new p();
                (e = tr.numericCompaction(t, e + 1, l)), r.setChecksum(f.parseInt(l.toString()));
                break;
              case tr.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                let h = new p();
                (e = tr.numericCompaction(t, e + 1, h)), r.setFileSize(Ze.parseLong(h.toString()));
                break;
              default:
                throw E.getFormatInstance();
            }
            break;
          case tr.MACRO_PDF417_TERMINATOR:
            e++, r.setLastSegment(!0);
            break;
          default:
            throw E.getFormatInstance();
        }
      if (-1 !== s) {
        let n = e - s;
        r.isLastSegment() && n--, r.setOptionalData(g.copyOfRange(t, s, s + n));
      }
      return e;
    }
    static textCompaction(t, e, r) {
      let n = new Int32Array(2 * (t[0] - e)),
        i = new Int32Array(2 * (t[0] - e)),
        s = 0,
        o = !1;
      for (; e < t[0] && !o; ) {
        let r = t[e++];
        if (r < tr.TEXT_COMPACTION_MODE_LATCH) (n[s] = r / 30), (n[s + 1] = r % 30), (s += 2);
        else
          switch (r) {
            case tr.TEXT_COMPACTION_MODE_LATCH:
              n[s++] = tr.TEXT_COMPACTION_MODE_LATCH;
              break;
            case tr.BYTE_COMPACTION_MODE_LATCH:
            case tr.BYTE_COMPACTION_MODE_LATCH_6:
            case tr.NUMERIC_COMPACTION_MODE_LATCH:
            case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case tr.MACRO_PDF417_TERMINATOR:
              e--, (o = !0);
              break;
            case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
              (n[s] = tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE), (r = t[e++]), (i[s] = r), s++;
          }
      }
      return tr.decodeTextCompaction(n, i, s, r), e;
    }
    static decodeTextCompaction(t, e, r, n) {
      let i = X.ALPHA,
        s = X.ALPHA,
        o = 0;
      for (; o < r; ) {
        let r = t[o],
          a = '';
        switch (i) {
          case X.ALPHA:
            if (r < 26) a = String.fromCharCode(65 + r);
            else
              switch (r) {
                case 26:
                  a = ' ';
                  break;
                case tr.LL:
                  i = X.LOWER;
                  break;
                case tr.ML:
                  i = X.MIXED;
                  break;
                case tr.PS:
                  (s = i), (i = X.PUNCT_SHIFT);
                  break;
                case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  n.append(e[o]);
                  break;
                case tr.TEXT_COMPACTION_MODE_LATCH:
                  i = X.ALPHA;
              }
            break;
          case X.LOWER:
            if (r < 26) a = String.fromCharCode(97 + r);
            else
              switch (r) {
                case 26:
                  a = ' ';
                  break;
                case tr.AS:
                  (s = i), (i = X.ALPHA_SHIFT);
                  break;
                case tr.ML:
                  i = X.MIXED;
                  break;
                case tr.PS:
                  (s = i), (i = X.PUNCT_SHIFT);
                  break;
                case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  n.append(e[o]);
                  break;
                case tr.TEXT_COMPACTION_MODE_LATCH:
                  i = X.ALPHA;
              }
            break;
          case X.MIXED:
            if (r < tr.PL) a = tr.MIXED_CHARS[r];
            else
              switch (r) {
                case tr.PL:
                  i = X.PUNCT;
                  break;
                case 26:
                  a = ' ';
                  break;
                case tr.LL:
                  i = X.LOWER;
                  break;
                case tr.AL:
                  i = X.ALPHA;
                  break;
                case tr.PS:
                  (s = i), (i = X.PUNCT_SHIFT);
                  break;
                case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  n.append(e[o]);
                  break;
                case tr.TEXT_COMPACTION_MODE_LATCH:
                  i = X.ALPHA;
              }
            break;
          case X.PUNCT:
            if (r < tr.PAL) a = tr.PUNCT_CHARS[r];
            else
              switch (r) {
                case tr.PAL:
                  i = X.ALPHA;
                  break;
                case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  n.append(e[o]);
                  break;
                case tr.TEXT_COMPACTION_MODE_LATCH:
                  i = X.ALPHA;
              }
            break;
          case X.ALPHA_SHIFT:
            if (((i = s), r < 26)) a = String.fromCharCode(65 + r);
            else
              switch (r) {
                case 26:
                  a = ' ';
                  break;
                case tr.TEXT_COMPACTION_MODE_LATCH:
                  i = X.ALPHA;
              }
            break;
          case X.PUNCT_SHIFT:
            if (((i = s), r < tr.PAL)) a = tr.PUNCT_CHARS[r];
            else
              switch (r) {
                case tr.PAL:
                  i = X.ALPHA;
                  break;
                case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  n.append(e[o]);
                  break;
                case tr.TEXT_COMPACTION_MODE_LATCH:
                  i = X.ALPHA;
              }
        }
        '' !== a && n.append(a), o++;
      }
    }
    static byteCompaction(t, e, r, n, i) {
      let s = new Qe(),
        o = 0,
        a = 0,
        l = !1;
      switch (t) {
        case tr.BYTE_COMPACTION_MODE_LATCH:
          let t = new Int32Array(6),
            r = e[n++];
          for (; n < e[0] && !l; )
            switch (((t[o++] = r), (a = 900 * a + r), (r = e[n++]), r)) {
              case tr.TEXT_COMPACTION_MODE_LATCH:
              case tr.BYTE_COMPACTION_MODE_LATCH:
              case tr.NUMERIC_COMPACTION_MODE_LATCH:
              case tr.BYTE_COMPACTION_MODE_LATCH_6:
              case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case tr.MACRO_PDF417_TERMINATOR:
                n--, (l = !0);
                break;
              default:
                if (o % 5 == 0 && o > 0) {
                  for (let t = 0; t < 6; ++t) s.write(Number($e(a) >> $e(8 * (5 - t))));
                  (a = 0), (o = 0);
                }
            }
          n === e[0] && r < tr.TEXT_COMPACTION_MODE_LATCH && (t[o++] = r);
          for (let e = 0; e < o; e++) s.write(t[e]);
          break;
        case tr.BYTE_COMPACTION_MODE_LATCH_6:
          for (; n < e[0] && !l; ) {
            let t = e[n++];
            if (t < tr.TEXT_COMPACTION_MODE_LATCH) o++, (a = 900 * a + t);
            else
              switch (t) {
                case tr.TEXT_COMPACTION_MODE_LATCH:
                case tr.BYTE_COMPACTION_MODE_LATCH:
                case tr.NUMERIC_COMPACTION_MODE_LATCH:
                case tr.BYTE_COMPACTION_MODE_LATCH_6:
                case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                case tr.MACRO_PDF417_TERMINATOR:
                  n--, (l = !0);
              }
            if (o % 5 == 0 && o > 0) {
              for (let t = 0; t < 6; ++t) s.write(Number($e(a) >> $e(8 * (5 - t))));
              (a = 0), (o = 0);
            }
          }
      }
      return i.append(I.decode(s.toByteArray(), r)), n;
    }
    static numericCompaction(t, e, r) {
      let n = 0,
        i = !1,
        s = new Int32Array(tr.MAX_NUMERIC_CODEWORDS);
      for (; e < t[0] && !i; ) {
        let o = t[e++];
        if ((e === t[0] && (i = !0), o < tr.TEXT_COMPACTION_MODE_LATCH)) (s[n] = o), n++;
        else
          switch (o) {
            case tr.TEXT_COMPACTION_MODE_LATCH:
            case tr.BYTE_COMPACTION_MODE_LATCH:
            case tr.BYTE_COMPACTION_MODE_LATCH_6:
            case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case tr.MACRO_PDF417_TERMINATOR:
              e--, (i = !0);
          }
        (n % tr.MAX_NUMERIC_CODEWORDS == 0 || o === tr.NUMERIC_COMPACTION_MODE_LATCH || i) &&
          n > 0 &&
          (r.append(tr.decodeBase900toBase10(s, n)), (n = 0));
      }
      return e;
    }
    static decodeBase900toBase10(t, e) {
      let r = $e(0);
      for (let n = 0; n < e; n++) r += tr.EXP900[e - n - 1] * $e(t[n]);
      let n = r.toString();
      if ('1' !== n.charAt(0)) throw new E();
      return n.substring(1);
    }
  }
  (tr.TEXT_COMPACTION_MODE_LATCH = 900),
    (tr.BYTE_COMPACTION_MODE_LATCH = 901),
    (tr.NUMERIC_COMPACTION_MODE_LATCH = 902),
    (tr.BYTE_COMPACTION_MODE_LATCH_6 = 924),
    (tr.ECI_USER_DEFINED = 925),
    (tr.ECI_GENERAL_PURPOSE = 926),
    (tr.ECI_CHARSET = 927),
    (tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928),
    (tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923),
    (tr.MACRO_PDF417_TERMINATOR = 922),
    (tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913),
    (tr.MAX_NUMERIC_CODEWORDS = 15),
    (tr.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0),
    (tr.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1),
    (tr.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2),
    (tr.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3),
    (tr.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4),
    (tr.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5),
    (tr.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6),
    (tr.PL = 25),
    (tr.LL = 27),
    (tr.AS = 27),
    (tr.ML = 28),
    (tr.AL = 28),
    (tr.PS = 29),
    (tr.PAL = 29),
    (tr.PUNCT_CHARS = ';<>@[\\]_`~!\r\t,:\n-.$/"|*()?{}\''),
    (tr.MIXED_CHARS = '0123456789&\r\t,:#-.$/+%*=^'),
    (tr.EXP900 = je()
      ? (function () {
          let t = [];
          t[0] = $e(1);
          let e = $e(900);
          t[1] = e;
          for (let r = 2; r < 16; r++) t[r] = t[r - 1] * e;
          return t;
        })()
      : []),
    (tr.NUMBER_OF_SEQUENCE_CODEWORDS = 2);
  class er {
    constructor() {}
    static decode(t, e, r, n, i, s, o) {
      let a,
        l = new ve(t, e, r, n, i),
        h = null,
        c = null;
      for (let r = !0; ; r = !1) {
        if (
          (null != e && (h = er.getRowIndicatorColumn(t, l, e, !0, s, o)),
          null != n && (c = er.getRowIndicatorColumn(t, l, n, !1, s, o)),
          (a = er.merge(h, c)),
          null == a)
        )
          throw R.getNotFoundInstance();
        let i = a.getBoundingBox();
        if (!r || null == i || !(i.getMinY() < l.getMinY() || i.getMaxY() > l.getMaxY())) break;
        l = i;
      }
      a.setBoundingBox(l);
      let u = a.getBarcodeColumnCount() + 1;
      a.setDetectionResultColumn(0, h), a.setDetectionResultColumn(u, c);
      let d = null != h;
      for (let e = 1; e <= u; e++) {
        let r,
          n = d ? e : u - e;
        if (void 0 !== a.getDetectionResultColumn(n)) continue;
        (r = 0 === n || n === u ? new Ge(l, 0 === n) : new Ue(l)), a.setDetectionResultColumn(n, r);
        let i = -1,
          h = i;
        for (let e = l.getMinY(); e <= l.getMaxY(); e++) {
          if (((i = er.getStartColumn(a, n, e, d)), i < 0 || i > l.getMaxX())) {
            if (-1 === h) continue;
            i = h;
          }
          let c = er.detectCodeword(t, l.getMinX(), l.getMaxX(), d, i, e, s, o);
          null != c && (r.setCodeword(e, c), (h = i), (s = Math.min(s, c.getWidth())), (o = Math.max(o, c.getWidth())));
        }
      }
      return er.createDecoderResult(a);
    }
    static merge(t, e) {
      if (null == t && null == e) return null;
      let r = er.getBarcodeMetadata(t, e);
      if (null == r) return null;
      let n = ve.merge(er.adjustBoundingBox(t), er.adjustBoundingBox(e));
      return new Xe(r, n);
    }
    static adjustBoundingBox(t) {
      if (null == t) return null;
      let e = t.getRowHeights();
      if (null == e) return null;
      let r = er.getMax(e),
        n = 0;
      for (let t of e) if (((n += r - t), t > 0)) break;
      let i = t.getCodewords();
      for (let t = 0; n > 0 && null == i[t]; t++) n--;
      let s = 0;
      for (let t = e.length - 1; t >= 0 && ((s += r - e[t]), !(e[t] > 0)); t--);
      for (let t = i.length - 1; s > 0 && null == i[t]; t--) s--;
      return t.getBoundingBox().addMissingRows(n, s, t.isLeft());
    }
    static getMax(t) {
      let e = -1;
      for (let r of t) e = Math.max(e, r);
      return e;
    }
    static getBarcodeMetadata(t, e) {
      let r, n;
      return null == t || null == (r = t.getBarcodeMetadata())
        ? null == e
          ? null
          : e.getBarcodeMetadata()
        : null == e || null == (n = e.getBarcodeMetadata())
        ? r
        : r.getColumnCount() !== n.getColumnCount() &&
          r.getErrorCorrectionLevel() !== n.getErrorCorrectionLevel() &&
          r.getRowCount() !== n.getRowCount()
        ? null
        : r;
    }
    static getRowIndicatorColumn(t, e, r, n, i, s) {
      let o = new Ge(e, n);
      for (let a = 0; a < 2; a++) {
        let l = 0 === a ? 1 : -1,
          h = Math.trunc(Math.trunc(r.getX()));
        for (let a = Math.trunc(Math.trunc(r.getY())); a <= e.getMaxY() && a >= e.getMinY(); a += l) {
          let e = er.detectCodeword(t, 0, t.getWidth(), n, h, a, i, s);
          null != e && (o.setCodeword(a, e), (h = n ? e.getStartX() : e.getEndX()));
        }
      }
      return o;
    }
    static adjustCodewordCount(t, e) {
      let r = e[0][1],
        n = r.getValue(),
        i = t.getBarcodeColumnCount() * t.getBarcodeRowCount() - er.getNumberOfECCodeWords(t.getBarcodeECLevel());
      if (0 === n.length) {
        if (i < 1 || i > Be.MAX_CODEWORDS_IN_BARCODE) throw R.getNotFoundInstance();
        r.setValue(i);
      } else n[0] !== i && r.setValue(i);
    }
    static createDecoderResult(t) {
      let e = er.createBarcodeMatrix(t);
      er.adjustCodewordCount(t, e);
      let r = new Array(),
        n = new Int32Array(t.getBarcodeRowCount() * t.getBarcodeColumnCount()),
        i = [],
        s = new Array();
      for (let o = 0; o < t.getBarcodeRowCount(); o++)
        for (let a = 0; a < t.getBarcodeColumnCount(); a++) {
          let l = e[o][a + 1].getValue(),
            h = o * t.getBarcodeColumnCount() + a;
          0 === l.length ? r.push(h) : 1 === l.length ? (n[h] = l[0]) : (s.push(h), i.push(l));
        }
      let o = new Array(i.length);
      for (let t = 0; t < o.length; t++) o[t] = i[t];
      return er.createDecoderResultFromAmbiguousValues(t.getBarcodeECLevel(), n, Be.toIntArray(r), Be.toIntArray(s), o);
    }
    static createDecoderResultFromAmbiguousValues(t, e, r, n, i) {
      let s = new Int32Array(n.length),
        o = 100;
      for (; o-- > 0; ) {
        for (let t = 0; t < s.length; t++) e[n[t]] = i[t][s[t]];
        try {
          return er.decodeCodewords(e, t, r);
        } catch (t) {
          if (!(t instanceof l)) throw t;
        }
        if (0 === s.length) throw l.getChecksumInstance();
        for (let t = 0; t < s.length; t++) {
          if (s[t] < i[t].length - 1) {
            s[t]++;
            break;
          }
          if (((s[t] = 0), t === s.length - 1)) throw l.getChecksumInstance();
        }
      }
      throw l.getChecksumInstance();
    }
    static createBarcodeMatrix(t) {
      let e = Array.from({ length: t.getBarcodeRowCount() }, () => new Array(t.getBarcodeColumnCount() + 2));
      for (let t = 0; t < e.length; t++) for (let r = 0; r < e[t].length; r++) e[t][r] = new He();
      let r = 0;
      for (let n of t.getDetectionResultColumns()) {
        if (null != n)
          for (let t of n.getCodewords())
            if (null != t) {
              let n = t.getRowNumber();
              if (n >= 0) {
                if (n >= e.length) continue;
                e[n][r].setValue(t.getValue());
              }
            }
        r++;
      }
      return e;
    }
    static isValidBarcodeColumn(t, e) {
      return e >= 0 && e <= t.getBarcodeColumnCount() + 1;
    }
    static getStartColumn(t, e, r, n) {
      let i = n ? 1 : -1,
        s = null;
      if ((er.isValidBarcodeColumn(t, e - i) && (s = t.getDetectionResultColumn(e - i).getCodeword(r)), null != s))
        return n ? s.getEndX() : s.getStartX();
      if (((s = t.getDetectionResultColumn(e).getCodewordNearby(r)), null != s)) return n ? s.getStartX() : s.getEndX();
      if (
        (er.isValidBarcodeColumn(t, e - i) && (s = t.getDetectionResultColumn(e - i).getCodewordNearby(r)), null != s)
      )
        return n ? s.getEndX() : s.getStartX();
      let o = 0;
      for (; er.isValidBarcodeColumn(t, e - i); ) {
        e -= i;
        for (let r of t.getDetectionResultColumn(e).getCodewords())
          if (null != r) return (n ? r.getEndX() : r.getStartX()) + i * o * (r.getEndX() - r.getStartX());
        o++;
      }
      return n ? t.getBoundingBox().getMinX() : t.getBoundingBox().getMaxX();
    }
    static detectCodeword(t, e, r, n, i, s, o, a) {
      i = er.adjustCodewordStartColumn(t, e, r, n, i, s);
      let l,
        h = er.getModuleBitCount(t, e, r, n, i, s);
      if (null == h) return null;
      let c = tt.sum(h);
      if (n) l = i + c;
      else {
        for (let t = 0; t < h.length / 2; t++) {
          let e = h[t];
          (h[t] = h[h.length - 1 - t]), (h[h.length - 1 - t] = e);
        }
        (l = i), (i = l - c);
      }
      if (!er.checkCodewordSkew(c, o, a)) return null;
      let u = ze.getDecodedValue(h),
        d = Be.getCodeword(u);
      return -1 === d ? null : new We(i, l, er.getCodewordBucketNumber(u), d);
    }
    static getModuleBitCount(t, e, r, n, i, s) {
      let o = i,
        a = new Int32Array(8),
        l = 0,
        h = n ? 1 : -1,
        c = n;
      for (; (n ? o < r : o >= e) && l < a.length; ) t.get(o, s) === c ? (a[l]++, (o += h)) : (l++, (c = !c));
      return l === a.length || (o === (n ? r : e) && l === a.length - 1) ? a : null;
    }
    static getNumberOfECCodeWords(t) {
      return 2 << t;
    }
    static adjustCodewordStartColumn(t, e, r, n, i, s) {
      let o = i,
        a = n ? -1 : 1;
      for (let l = 0; l < 2; l++) {
        for (; (n ? o >= e : o < r) && n === t.get(o, s); ) {
          if (Math.abs(i - o) > er.CODEWORD_SKEW_SIZE) return i;
          o += a;
        }
        (a = -a), (n = !n);
      }
      return o;
    }
    static checkCodewordSkew(t, e, r) {
      return e - er.CODEWORD_SKEW_SIZE <= t && t <= r + er.CODEWORD_SKEW_SIZE;
    }
    static decodeCodewords(t, e, r) {
      if (0 === t.length) throw E.getFormatInstance();
      let n = 1 << (e + 1),
        i = er.correctErrors(t, r, n);
      er.verifyCodewordCount(t, n);
      let s = tr.decode(t, '' + e);
      return s.setErrorsCorrected(i), s.setErasures(r.length), s;
    }
    static correctErrors(t, e, r) {
      if ((null != e && e.length > r / 2 + er.MAX_ERRORS) || r < 0 || r > er.MAX_EC_CODEWORDS)
        throw l.getChecksumInstance();
      return er.errorCorrection.decode(t, r, e);
    }
    static verifyCodewordCount(t, e) {
      if (t.length < 4) throw E.getFormatInstance();
      let r = t[0];
      if (r > t.length) throw E.getFormatInstance();
      if (0 === r) {
        if (!(e < t.length)) throw E.getFormatInstance();
        t[0] = t.length - e;
      }
    }
    static getBitCountForCodeword(t) {
      let e = new Int32Array(8),
        r = 0,
        n = e.length - 1;
      for (; !((1 & t) !== r && ((r = 1 & t), n--, n < 0)); ) e[n]++, (t >>= 1);
      return e;
    }
    static getCodewordBucketNumber(t) {
      return t instanceof Int32Array
        ? this.getCodewordBucketNumber_Int32Array(t)
        : this.getCodewordBucketNumber_number(t);
    }
    static getCodewordBucketNumber_number(t) {
      return er.getCodewordBucketNumber(er.getBitCountForCodeword(t));
    }
    static getCodewordBucketNumber_Int32Array(t) {
      return (t[0] - t[2] + t[4] - t[6] + 9) % 9;
    }
    static toString(t) {
      let e = new Ve();
      for (let r = 0; r < t.length; r++) {
        e.format('Row %2d: ', r);
        for (let n = 0; n < t[r].length; n++) {
          let i = t[r][n];
          0 === i.getValue().length
            ? e.format('        ', null)
            : e.format('%4d(%2d)', i.getValue()[0], i.getConfidence(i.getValue()[0]));
        }
        e.format('%n');
      }
      return e.toString();
    }
  }
  (er.CODEWORD_SKEW_SIZE = 2), (er.MAX_ERRORS = 3), (er.MAX_EC_CODEWORDS = 512), (er.errorCorrection = new ke());
  class rr {
    decode(t, e = null) {
      let r = rr.decode(t, e, !1);
      if (null == r || 0 === r.length || null == r[0]) throw R.getNotFoundInstance();
      return r[0];
    }
    decodeMultiple(t, e = null) {
      try {
        return rr.decode(t, e, !0);
      } catch (t) {
        if (t instanceof E || t instanceof l) throw R.getNotFoundInstance();
        throw t;
      }
    }
    static decode(t, e, r) {
      const n = new Array(),
        i = Pe.detectMultiple(t, e, r);
      for (const t of i.getPoints()) {
        const e = er.decode(i.getBits(), t[4], t[5], t[6], t[7], rr.getMinCodewordWidth(t), rr.getMaxCodewordWidth(t)),
          r = new F(e.getText(), e.getRawBytes(), void 0, t, v.PDF_417);
        r.putMetadata(W.ERROR_CORRECTION_LEVEL, e.getECLevel());
        const s = e.getOther();
        null != s && r.putMetadata(W.PDF417_EXTRA_METADATA, s), n.push(r);
      }
      return n.map((t) => t);
    }
    static getMaxWidth(t, e) {
      return null == t || null == e ? 0 : Math.trunc(Math.abs(t.getX() - e.getX()));
    }
    static getMinWidth(t, e) {
      return null == t || null == e ? f.MAX_VALUE : Math.trunc(Math.abs(t.getX() - e.getX()));
    }
    static getMaxCodewordWidth(t) {
      return Math.floor(
        Math.max(
          Math.max(
            rr.getMaxWidth(t[0], t[4]),
            (rr.getMaxWidth(t[6], t[2]) * Be.MODULES_IN_CODEWORD) / Be.MODULES_IN_STOP_PATTERN,
          ),
          Math.max(
            rr.getMaxWidth(t[1], t[5]),
            (rr.getMaxWidth(t[7], t[3]) * Be.MODULES_IN_CODEWORD) / Be.MODULES_IN_STOP_PATTERN,
          ),
        ),
      );
    }
    static getMinCodewordWidth(t) {
      return Math.floor(
        Math.min(
          Math.min(
            rr.getMinWidth(t[0], t[4]),
            (rr.getMinWidth(t[6], t[2]) * Be.MODULES_IN_CODEWORD) / Be.MODULES_IN_STOP_PATTERN,
          ),
          Math.min(
            rr.getMinWidth(t[1], t[5]),
            (rr.getMinWidth(t[7], t[3]) * Be.MODULES_IN_CODEWORD) / Be.MODULES_IN_STOP_PATTERN,
          ),
        ),
      );
    }
    reset() {}
  }
  class nr extends i {}
  nr.kind = 'ReaderException';
  class ir {
    decode(t, e) {
      return this.setHints(e), this.decodeInternal(t);
    }
    decodeWithState(t) {
      return (null !== this.readers && void 0 !== this.readers) || this.setHints(null), this.decodeInternal(t);
    }
    setHints(t) {
      this.hints = t;
      const e = null != t && void 0 !== t.get(C.TRY_HARDER),
        r = null == t ? null : t.get(C.POSSIBLE_FORMATS),
        n = new Array();
      if (null != r) {
        const i = r.some(
          (t) =>
            t === v.UPC_A ||
            t === v.UPC_E ||
            t === v.EAN_13 ||
            t === v.EAN_8 ||
            t === v.CODABAR ||
            t === v.CODE_39 ||
            t === v.CODE_93 ||
            t === v.CODE_128 ||
            t === v.ITF ||
            t === v.RSS_14 ||
            t === v.RSS_EXPANDED,
        );
        i && !e && n.push(new ee(t)),
          r.includes(v.QR_CODE) && n.push(new Me()),
          r.includes(v.DATA_MATRIX) && n.push(new ue()),
          r.includes(v.AZTEC) && n.push(new dt()),
          r.includes(v.PDF_417) && n.push(new rr()),
          i && e && n.push(new ee(t));
      }
      0 === n.length &&
        (e || n.push(new ee(t)),
        n.push(new Me()),
        n.push(new ue()),
        n.push(new dt()),
        n.push(new rr()),
        e && n.push(new ee(t))),
        (this.readers = n);
    }
    reset() {
      if (null !== this.readers) for (const t of this.readers) t.reset();
    }
    decodeInternal(t) {
      if (null === this.readers) throw new nr('No readers where selected, nothing can be read.');
      for (const e of this.readers)
        try {
          return e.decode(t, this.hints);
        } catch (t) {
          if (t instanceof nr) continue;
        }
      throw new R('No MultiFormat Readers were able to detect the code.');
    }
  }
  var sr;
  !(function (t) {
    (t[(t.ERROR_CORRECTION = 0)] = 'ERROR_CORRECTION'),
      (t[(t.CHARACTER_SET = 1)] = 'CHARACTER_SET'),
      (t[(t.DATA_MATRIX_SHAPE = 2)] = 'DATA_MATRIX_SHAPE'),
      (t[(t.MIN_SIZE = 3)] = 'MIN_SIZE'),
      (t[(t.MAX_SIZE = 4)] = 'MAX_SIZE'),
      (t[(t.MARGIN = 5)] = 'MARGIN'),
      (t[(t.PDF417_COMPACT = 6)] = 'PDF417_COMPACT'),
      (t[(t.PDF417_COMPACTION = 7)] = 'PDF417_COMPACTION'),
      (t[(t.PDF417_DIMENSIONS = 8)] = 'PDF417_DIMENSIONS'),
      (t[(t.AZTEC_LAYERS = 9)] = 'AZTEC_LAYERS'),
      (t[(t.QR_VERSION = 10)] = 'QR_VERSION');
  })(sr || (sr = {}));
  var or = sr;
  class ar {
    constructor(t) {
      (this.field = t), (this.cachedGenerators = []), this.cachedGenerators.push(new Z(t, Int32Array.from([1])));
    }
    buildGenerator(t) {
      const e = this.cachedGenerators;
      if (t >= e.length) {
        let r = e[e.length - 1];
        const n = this.field;
        for (let i = e.length; i <= t; i++) {
          const t = r.multiply(new Z(n, Int32Array.from([1, n.exp(i - 1 + n.getGeneratorBase())])));
          e.push(t), (r = t);
        }
      }
      return e[t];
    }
    encode(t, e) {
      if (0 === e) throw new o('No error correction bytes');
      const r = t.length - e;
      if (r <= 0) throw new o('No data bytes provided');
      const n = this.buildGenerator(e),
        i = new Int32Array(r);
      c.arraycopy(t, 0, i, 0, r);
      let s = new Z(this.field, i);
      s = s.multiplyByMonomial(e, 1);
      const a = s.divide(n)[1].getCoefficients(),
        l = e - a.length;
      for (let e = 0; e < l; e++) t[r + e] = 0;
      c.arraycopy(a, 0, t, r + l, a.length);
    }
  }
  class lr {
    constructor() {}
    static applyMaskPenaltyRule1(t) {
      return lr.applyMaskPenaltyRule1Internal(t, !0) + lr.applyMaskPenaltyRule1Internal(t, !1);
    }
    static applyMaskPenaltyRule2(t) {
      let e = 0;
      const r = t.getArray(),
        n = t.getWidth(),
        i = t.getHeight();
      for (let t = 0; t < i - 1; t++) {
        const i = r[t];
        for (let s = 0; s < n - 1; s++) {
          const n = i[s];
          n === i[s + 1] && n === r[t + 1][s] && n === r[t + 1][s + 1] && e++;
        }
      }
      return lr.N2 * e;
    }
    static applyMaskPenaltyRule3(t) {
      let e = 0;
      const r = t.getArray(),
        n = t.getWidth(),
        i = t.getHeight();
      for (let t = 0; t < i; t++)
        for (let s = 0; s < n; s++) {
          const o = r[t];
          s + 6 < n &&
            1 === o[s] &&
            0 === o[s + 1] &&
            1 === o[s + 2] &&
            1 === o[s + 3] &&
            1 === o[s + 4] &&
            0 === o[s + 5] &&
            1 === o[s + 6] &&
            (lr.isWhiteHorizontal(o, s - 4, s) || lr.isWhiteHorizontal(o, s + 7, s + 11)) &&
            e++,
            t + 6 < i &&
              1 === r[t][s] &&
              0 === r[t + 1][s] &&
              1 === r[t + 2][s] &&
              1 === r[t + 3][s] &&
              1 === r[t + 4][s] &&
              0 === r[t + 5][s] &&
              1 === r[t + 6][s] &&
              (lr.isWhiteVertical(r, s, t - 4, t) || lr.isWhiteVertical(r, s, t + 7, t + 11)) &&
              e++;
        }
      return e * lr.N3;
    }
    static isWhiteHorizontal(t, e, r) {
      (e = Math.max(e, 0)), (r = Math.min(r, t.length));
      for (let n = e; n < r; n++) if (1 === t[n]) return !1;
      return !0;
    }
    static isWhiteVertical(t, e, r, n) {
      (r = Math.max(r, 0)), (n = Math.min(n, t.length));
      for (let i = r; i < n; i++) if (1 === t[i][e]) return !1;
      return !0;
    }
    static applyMaskPenaltyRule4(t) {
      let e = 0;
      const r = t.getArray(),
        n = t.getWidth(),
        i = t.getHeight();
      for (let t = 0; t < i; t++) {
        const i = r[t];
        for (let t = 0; t < n; t++) 1 === i[t] && e++;
      }
      const s = t.getHeight() * t.getWidth();
      return Math.floor((10 * Math.abs(2 * e - s)) / s) * lr.N4;
    }
    static getDataMaskBit(t, e, r) {
      let n, i;
      switch (t) {
        case 0:
          n = (r + e) & 1;
          break;
        case 1:
          n = 1 & r;
          break;
        case 2:
          n = e % 3;
          break;
        case 3:
          n = (r + e) % 3;
          break;
        case 4:
          n = (Math.floor(r / 2) + Math.floor(e / 3)) & 1;
          break;
        case 5:
          (i = r * e), (n = (1 & i) + (i % 3));
          break;
        case 6:
          (i = r * e), (n = ((1 & i) + (i % 3)) & 1);
          break;
        case 7:
          (i = r * e), (n = ((i % 3) + ((r + e) & 1)) & 1);
          break;
        default:
          throw new o('Invalid mask pattern: ' + t);
      }
      return 0 === n;
    }
    static applyMaskPenaltyRule1Internal(t, e) {
      let r = 0;
      const n = e ? t.getHeight() : t.getWidth(),
        i = e ? t.getWidth() : t.getHeight(),
        s = t.getArray();
      for (let t = 0; t < n; t++) {
        let n = 0,
          o = -1;
        for (let a = 0; a < i; a++) {
          const i = e ? s[t][a] : s[a][t];
          i === o ? n++ : (n >= 5 && (r += lr.N1 + (n - 5)), (n = 1), (o = i));
        }
        n >= 5 && (r += lr.N1 + (n - 5));
      }
      return r;
    }
  }
  (lr.N1 = 3), (lr.N2 = 3), (lr.N3 = 40), (lr.N4 = 10);
  class hr {
    constructor(t, e) {
      (this.width = t), (this.height = e);
      const r = new Array(e);
      for (let n = 0; n !== e; n++) r[n] = new Uint8Array(t);
      this.bytes = r;
    }
    getHeight() {
      return this.height;
    }
    getWidth() {
      return this.width;
    }
    get(t, e) {
      return this.bytes[e][t];
    }
    getArray() {
      return this.bytes;
    }
    setNumber(t, e, r) {
      this.bytes[e][t] = r;
    }
    setBoolean(t, e, r) {
      this.bytes[e][t] = r ? 1 : 0;
    }
    clear(t) {
      for (const e of this.bytes) g.fill(e, t);
    }
    equals(t) {
      if (!(t instanceof hr)) return !1;
      const e = t;
      if (this.width !== e.width) return !1;
      if (this.height !== e.height) return !1;
      for (let t = 0, r = this.height; t < r; ++t) {
        const r = this.bytes[t],
          n = e.bytes[t];
        for (let t = 0, e = this.width; t < e; ++t) if (r[t] !== n[t]) return !1;
      }
      return !0;
    }
    toString() {
      const t = new p();
      for (let e = 0, r = this.height; e < r; ++e) {
        const r = this.bytes[e];
        for (let e = 0, n = this.width; e < n; ++e)
          switch (r[e]) {
            case 0:
              t.append(' 0');
              break;
            case 1:
              t.append(' 1');
              break;
            default:
              t.append('  ');
          }
        t.append('\n');
      }
      return t.toString();
    }
  }
  class cr {
    constructor() {
      this.maskPattern = -1;
    }
    getMode() {
      return this.mode;
    }
    getECLevel() {
      return this.ecLevel;
    }
    getVersion() {
      return this.version;
    }
    getMaskPattern() {
      return this.maskPattern;
    }
    getMatrix() {
      return this.matrix;
    }
    toString() {
      const t = new p();
      return (
        t.append('<<\n'),
        t.append(' mode: '),
        t.append(this.mode ? this.mode.toString() : 'null'),
        t.append('\n ecLevel: '),
        t.append(this.ecLevel ? this.ecLevel.toString() : 'null'),
        t.append('\n version: '),
        t.append(this.version ? this.version.toString() : 'null'),
        t.append('\n maskPattern: '),
        t.append(this.maskPattern.toString()),
        this.matrix ? (t.append('\n matrix:\n'), t.append(this.matrix.toString())) : t.append('\n matrix: null\n'),
        t.append('>>\n'),
        t.toString()
      );
    }
    setMode(t) {
      this.mode = t;
    }
    setECLevel(t) {
      this.ecLevel = t;
    }
    setVersion(t) {
      this.version = t;
    }
    setMaskPattern(t) {
      this.maskPattern = t;
    }
    setMatrix(t) {
      this.matrix = t;
    }
    static isValidMaskPattern(t) {
      return t >= 0 && t < cr.NUM_MASK_PATTERNS;
    }
  }
  cr.NUM_MASK_PATTERNS = 8;
  class ur extends i {}
  ur.kind = 'WriterException';
  class dr {
    constructor() {}
    static clearMatrix(t) {
      t.clear(255);
    }
    static buildMatrix(t, e, r, n, i) {
      dr.clearMatrix(i),
        dr.embedBasicPatterns(r, i),
        dr.embedTypeInfo(e, n, i),
        dr.maybeEmbedVersionInfo(r, i),
        dr.embedDataBits(t, n, i);
    }
    static embedBasicPatterns(t, e) {
      dr.embedPositionDetectionPatternsAndSeparators(e),
        dr.embedDarkDotAtLeftBottomCorner(e),
        dr.maybeEmbedPositionAdjustmentPatterns(t, e),
        dr.embedTimingPatterns(e);
    }
    static embedTypeInfo(t, e, r) {
      const n = new w();
      dr.makeTypeInfoBits(t, e, n);
      for (let t = 0, e = n.getSize(); t < e; ++t) {
        const e = n.get(n.getSize() - 1 - t),
          i = dr.TYPE_INFO_COORDINATES[t],
          s = i[0],
          o = i[1];
        if ((r.setBoolean(s, o, e), t < 8)) {
          const n = r.getWidth() - t - 1,
            i = 8;
          r.setBoolean(n, i, e);
        } else {
          const n = 8,
            i = r.getHeight() - 7 + (t - 8);
          r.setBoolean(n, i, e);
        }
      }
    }
    static maybeEmbedVersionInfo(t, e) {
      if (t.getVersionNumber() < 7) return;
      const r = new w();
      dr.makeVersionInfoBits(t, r);
      let n = 17;
      for (let t = 0; t < 6; ++t)
        for (let i = 0; i < 3; ++i) {
          const s = r.get(n);
          n--, e.setBoolean(t, e.getHeight() - 11 + i, s), e.setBoolean(e.getHeight() - 11 + i, t, s);
        }
    }
    static embedDataBits(t, e, r) {
      let n = 0,
        i = -1,
        s = r.getWidth() - 1,
        o = r.getHeight() - 1;
      for (; s > 0; ) {
        for (6 === s && (s -= 1); o >= 0 && o < r.getHeight(); ) {
          for (let i = 0; i < 2; ++i) {
            const a = s - i;
            if (!dr.isEmpty(r.get(a, o))) continue;
            let l;
            n < t.getSize() ? ((l = t.get(n)), ++n) : (l = !1),
              255 !== e && lr.getDataMaskBit(e, a, o) && (l = !l),
              r.setBoolean(a, o, l);
          }
          o += i;
        }
        (i = -i), (o += i), (s -= 2);
      }
      if (n !== t.getSize()) throw new ur('Not all bits consumed: ' + n + '/' + t.getSize());
    }
    static findMSBSet(t) {
      return 32 - f.numberOfLeadingZeros(t);
    }
    static calculateBCHCode(t, e) {
      if (0 === e) throw new o('0 polynomial');
      const r = dr.findMSBSet(e);
      for (t <<= r - 1; dr.findMSBSet(t) >= r; ) t ^= e << (dr.findMSBSet(t) - r);
      return t;
    }
    static makeTypeInfoBits(t, e, r) {
      if (!cr.isValidMaskPattern(e)) throw new ur('Invalid mask pattern');
      const n = (t.getBits() << 3) | e;
      r.appendBits(n, 5);
      const i = dr.calculateBCHCode(n, dr.TYPE_INFO_POLY);
      r.appendBits(i, 10);
      const s = new w();
      if ((s.appendBits(dr.TYPE_INFO_MASK_PATTERN, 15), r.xor(s), 15 !== r.getSize()))
        throw new ur('should not happen but we got: ' + r.getSize());
    }
    static makeVersionInfoBits(t, e) {
      e.appendBits(t.getVersionNumber(), 6);
      const r = dr.calculateBCHCode(t.getVersionNumber(), dr.VERSION_INFO_POLY);
      if ((e.appendBits(r, 12), 18 !== e.getSize())) throw new ur('should not happen but we got: ' + e.getSize());
    }
    static isEmpty(t) {
      return 255 === t;
    }
    static embedTimingPatterns(t) {
      for (let e = 8; e < t.getWidth() - 8; ++e) {
        const r = (e + 1) % 2;
        dr.isEmpty(t.get(e, 6)) && t.setNumber(e, 6, r), dr.isEmpty(t.get(6, e)) && t.setNumber(6, e, r);
      }
    }
    static embedDarkDotAtLeftBottomCorner(t) {
      if (0 === t.get(8, t.getHeight() - 8)) throw new ur();
      t.setNumber(8, t.getHeight() - 8, 1);
    }
    static embedHorizontalSeparationPattern(t, e, r) {
      for (let n = 0; n < 8; ++n) {
        if (!dr.isEmpty(r.get(t + n, e))) throw new ur();
        r.setNumber(t + n, e, 0);
      }
    }
    static embedVerticalSeparationPattern(t, e, r) {
      for (let n = 0; n < 7; ++n) {
        if (!dr.isEmpty(r.get(t, e + n))) throw new ur();
        r.setNumber(t, e + n, 0);
      }
    }
    static embedPositionAdjustmentPattern(t, e, r) {
      for (let n = 0; n < 5; ++n) {
        const i = dr.POSITION_ADJUSTMENT_PATTERN[n];
        for (let s = 0; s < 5; ++s) r.setNumber(t + s, e + n, i[s]);
      }
    }
    static embedPositionDetectionPattern(t, e, r) {
      for (let n = 0; n < 7; ++n) {
        const i = dr.POSITION_DETECTION_PATTERN[n];
        for (let s = 0; s < 7; ++s) r.setNumber(t + s, e + n, i[s]);
      }
    }
    static embedPositionDetectionPatternsAndSeparators(t) {
      const e = dr.POSITION_DETECTION_PATTERN[0].length;
      dr.embedPositionDetectionPattern(0, 0, t),
        dr.embedPositionDetectionPattern(t.getWidth() - e, 0, t),
        dr.embedPositionDetectionPattern(0, t.getWidth() - e, t);
      dr.embedHorizontalSeparationPattern(0, 7, t),
        dr.embedHorizontalSeparationPattern(t.getWidth() - 8, 7, t),
        dr.embedHorizontalSeparationPattern(0, t.getWidth() - 8, t);
      dr.embedVerticalSeparationPattern(7, 0, t),
        dr.embedVerticalSeparationPattern(t.getHeight() - 7 - 1, 0, t),
        dr.embedVerticalSeparationPattern(7, t.getHeight() - 7, t);
    }
    static maybeEmbedPositionAdjustmentPatterns(t, e) {
      if (t.getVersionNumber() < 2) return;
      const r = t.getVersionNumber() - 1,
        n = dr.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[r];
      for (let t = 0, r = n.length; t !== r; t++) {
        const i = n[t];
        if (i >= 0)
          for (let t = 0; t !== r; t++) {
            const r = n[t];
            r >= 0 && dr.isEmpty(e.get(r, i)) && dr.embedPositionAdjustmentPattern(r - 2, i - 2, e);
          }
      }
    }
  }
  (dr.POSITION_DETECTION_PATTERN = Array.from([
    Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
    Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
    Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
    Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
    Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
    Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
    Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
  ])),
    (dr.POSITION_ADJUSTMENT_PATTERN = Array.from([
      Int32Array.from([1, 1, 1, 1, 1]),
      Int32Array.from([1, 0, 0, 0, 1]),
      Int32Array.from([1, 0, 1, 0, 1]),
      Int32Array.from([1, 0, 0, 0, 1]),
      Int32Array.from([1, 1, 1, 1, 1]),
    ])),
    (dr.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
      Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
      Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
      Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
      Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
      Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
      Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
      Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
      Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
      Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
      Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
      Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
      Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
      Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
      Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
      Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
      Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
      Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
      Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
      Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
      Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
      Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
      Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
      Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
      Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
      Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
      Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
      Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
      Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
      Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
      Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
      Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
      Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
      Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
      Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
    ])),
    (dr.TYPE_INFO_COORDINATES = Array.from([
      Int32Array.from([8, 0]),
      Int32Array.from([8, 1]),
      Int32Array.from([8, 2]),
      Int32Array.from([8, 3]),
      Int32Array.from([8, 4]),
      Int32Array.from([8, 5]),
      Int32Array.from([8, 7]),
      Int32Array.from([8, 8]),
      Int32Array.from([7, 8]),
      Int32Array.from([5, 8]),
      Int32Array.from([4, 8]),
      Int32Array.from([3, 8]),
      Int32Array.from([2, 8]),
      Int32Array.from([1, 8]),
      Int32Array.from([0, 8]),
    ])),
    (dr.VERSION_INFO_POLY = 7973),
    (dr.TYPE_INFO_POLY = 1335),
    (dr.TYPE_INFO_MASK_PATTERN = 21522);
  class gr {
    constructor(t, e) {
      (this.dataBytes = t), (this.errorCorrectionBytes = e);
    }
    getDataBytes() {
      return this.dataBytes;
    }
    getErrorCorrectionBytes() {
      return this.errorCorrectionBytes;
    }
  }
  class fr {
    constructor() {}
    static calculateMaskPenalty(t) {
      return (
        lr.applyMaskPenaltyRule1(t) +
        lr.applyMaskPenaltyRule2(t) +
        lr.applyMaskPenaltyRule3(t) +
        lr.applyMaskPenaltyRule4(t)
      );
    }
    static encode(t, e, r = null) {
      let n = fr.DEFAULT_BYTE_MODE_ENCODING;
      const i = null !== r && void 0 !== r.get(or.CHARACTER_SET);
      i && (n = r.get(or.CHARACTER_SET).toString());
      const s = this.chooseMode(t, n),
        o = new w();
      if (s === _e.BYTE && (i || fr.DEFAULT_BYTE_MODE_ENCODING !== n)) {
        const t = m.getCharacterSetECIByName(n);
        void 0 !== t && this.appendECI(t, o);
      }
      this.appendModeInfo(s, o);
      const a = new w();
      let l;
      if ((this.appendBytes(t, s, a, n), null !== r && void 0 !== r.get(or.QR_VERSION))) {
        const t = Number.parseInt(r.get(or.QR_VERSION).toString(), 10);
        l = Ae.getVersionForNumber(t);
        const n = this.calculateBitsNeeded(s, o, a, l);
        if (!this.willFit(n, l, e)) throw new ur('Data too big for requested version');
      } else l = this.recommendVersion(e, s, o, a);
      const h = new w();
      h.appendBitArray(o);
      const c = s === _e.BYTE ? a.getSizeInBytes() : t.length;
      this.appendLengthInfo(c, l, s, h), h.appendBitArray(a);
      const u = l.getECBlocksForLevel(e),
        d = l.getTotalCodewords() - u.getTotalECCodewords();
      this.terminateBits(d, h);
      const g = this.interleaveWithECBytes(h, l.getTotalCodewords(), d, u.getNumBlocks()),
        f = new cr();
      f.setECLevel(e), f.setMode(s), f.setVersion(l);
      const A = l.getDimensionForVersion(),
        C = new hr(A, A),
        E = this.chooseMaskPattern(g, e, l, C);
      return f.setMaskPattern(E), dr.buildMatrix(g, e, l, E, C), f.setMatrix(C), f;
    }
    static recommendVersion(t, e, r, n) {
      const i = this.calculateBitsNeeded(e, r, n, Ae.getVersionForNumber(1)),
        s = this.chooseVersion(i, t),
        o = this.calculateBitsNeeded(e, r, n, s);
      return this.chooseVersion(o, t);
    }
    static calculateBitsNeeded(t, e, r, n) {
      return e.getSize() + t.getCharacterCountBits(n) + r.getSize();
    }
    static getAlphanumericCode(t) {
      return t < fr.ALPHANUMERIC_TABLE.length ? fr.ALPHANUMERIC_TABLE[t] : -1;
    }
    static chooseMode(t, e = null) {
      if (m.SJIS.getName() === e && this.isOnlyDoubleByteKanji(t)) return _e.KANJI;
      let r = !1,
        n = !1;
      for (let e = 0, i = t.length; e < i; ++e) {
        const i = t.charAt(e);
        if (fr.isDigit(i)) r = !0;
        else {
          if (-1 === this.getAlphanumericCode(i.charCodeAt(0))) return _e.BYTE;
          n = !0;
        }
      }
      return n ? _e.ALPHANUMERIC : r ? _e.NUMERIC : _e.BYTE;
    }
    static isOnlyDoubleByteKanji(t) {
      let e;
      try {
        e = I.encode(t, m.SJIS);
      } catch (t) {
        return !1;
      }
      const r = e.length;
      if (r % 2 != 0) return !1;
      for (let t = 0; t < r; t += 2) {
        const r = 255 & e[t];
        if ((r < 129 || r > 159) && (r < 224 || r > 235)) return !1;
      }
      return !0;
    }
    static chooseMaskPattern(t, e, r, n) {
      let i = Number.MAX_SAFE_INTEGER,
        s = -1;
      for (let o = 0; o < cr.NUM_MASK_PATTERNS; o++) {
        dr.buildMatrix(t, e, r, o, n);
        let a = this.calculateMaskPenalty(n);
        a < i && ((i = a), (s = o));
      }
      return s;
    }
    static chooseVersion(t, e) {
      for (let r = 1; r <= 40; r++) {
        const n = Ae.getVersionForNumber(r);
        if (fr.willFit(t, n, e)) return n;
      }
      throw new ur('Data too big');
    }
    static willFit(t, e, r) {
      return e.getTotalCodewords() - e.getECBlocksForLevel(r).getTotalECCodewords() >= (t + 7) / 8;
    }
    static terminateBits(t, e) {
      const r = 8 * t;
      if (e.getSize() > r) throw new ur('data bits cannot fit in the QR Code' + e.getSize() + ' > ' + r);
      for (let t = 0; t < 4 && e.getSize() < r; ++t) e.appendBit(!1);
      const n = 7 & e.getSize();
      if (n > 0) for (let t = n; t < 8; t++) e.appendBit(!1);
      const i = t - e.getSizeInBytes();
      for (let t = 0; t < i; ++t) e.appendBits(0 == (1 & t) ? 236 : 17, 8);
      if (e.getSize() !== r) throw new ur('Bits size does not equal capacity');
    }
    static getNumDataBytesAndNumECBytesForBlockID(t, e, r, n, i, s) {
      if (n >= r) throw new ur('Block ID too large');
      const o = t % r,
        a = r - o,
        l = Math.floor(t / r),
        h = l + 1,
        c = Math.floor(e / r),
        u = c + 1,
        d = l - c,
        g = h - u;
      if (d !== g) throw new ur('EC bytes mismatch');
      if (r !== a + o) throw new ur('RS blocks mismatch');
      if (t !== (c + d) * a + (u + g) * o) throw new ur('Total bytes mismatch');
      n < a ? ((i[0] = c), (s[0] = d)) : ((i[0] = u), (s[0] = g));
    }
    static interleaveWithECBytes(t, e, r, n) {
      if (t.getSizeInBytes() !== r) throw new ur('Number of bits and data bytes does not match');
      let i = 0,
        s = 0,
        o = 0;
      const a = new Array();
      for (let l = 0; l < n; ++l) {
        const h = new Int32Array(1),
          c = new Int32Array(1);
        fr.getNumDataBytesAndNumECBytesForBlockID(e, r, n, l, h, c);
        const u = h[0],
          d = new Uint8Array(u);
        t.toBytes(8 * i, d, 0, u);
        const g = fr.generateECBytes(d, c[0]);
        a.push(new gr(d, g)), (s = Math.max(s, u)), (o = Math.max(o, g.length)), (i += h[0]);
      }
      if (r !== i) throw new ur('Data bytes does not match offset');
      const l = new w();
      for (let t = 0; t < s; ++t)
        for (const e of a) {
          const r = e.getDataBytes();
          t < r.length && l.appendBits(r[t], 8);
        }
      for (let t = 0; t < o; ++t)
        for (const e of a) {
          const r = e.getErrorCorrectionBytes();
          t < r.length && l.appendBits(r[t], 8);
        }
      if (e !== l.getSizeInBytes())
        throw new ur('Interleaving error: ' + e + ' and ' + l.getSizeInBytes() + ' differ.');
      return l;
    }
    static generateECBytes(t, e) {
      const r = t.length,
        n = new Int32Array(r + e);
      for (let e = 0; e < r; e++) n[e] = 255 & t[e];
      new ar(q.QR_CODE_FIELD_256).encode(n, e);
      const i = new Uint8Array(e);
      for (let t = 0; t < e; t++) i[t] = n[r + t];
      return i;
    }
    static appendModeInfo(t, e) {
      e.appendBits(t.getBits(), 4);
    }
    static appendLengthInfo(t, e, r, n) {
      const i = r.getCharacterCountBits(e);
      if (t >= 1 << i) throw new ur(t + ' is bigger than ' + ((1 << i) - 1));
      n.appendBits(t, i);
    }
    static appendBytes(t, e, r, n) {
      switch (e) {
        case _e.NUMERIC:
          fr.appendNumericBytes(t, r);
          break;
        case _e.ALPHANUMERIC:
          fr.appendAlphanumericBytes(t, r);
          break;
        case _e.BYTE:
          fr.append8BitBytes(t, r, n);
          break;
        case _e.KANJI:
          fr.appendKanjiBytes(t, r);
          break;
        default:
          throw new ur('Invalid mode: ' + e);
      }
    }
    static getDigit(t) {
      return t.charCodeAt(0) - 48;
    }
    static isDigit(t) {
      const e = fr.getDigit(t);
      return e >= 0 && e <= 9;
    }
    static appendNumericBytes(t, e) {
      const r = t.length;
      let n = 0;
      for (; n < r; ) {
        const i = fr.getDigit(t.charAt(n));
        if (n + 2 < r) {
          const r = fr.getDigit(t.charAt(n + 1)),
            s = fr.getDigit(t.charAt(n + 2));
          e.appendBits(100 * i + 10 * r + s, 10), (n += 3);
        } else if (n + 1 < r) {
          const r = fr.getDigit(t.charAt(n + 1));
          e.appendBits(10 * i + r, 7), (n += 2);
        } else e.appendBits(i, 4), n++;
      }
    }
    static appendAlphanumericBytes(t, e) {
      const r = t.length;
      let n = 0;
      for (; n < r; ) {
        const i = fr.getAlphanumericCode(t.charCodeAt(n));
        if (-1 === i) throw new ur();
        if (n + 1 < r) {
          const r = fr.getAlphanumericCode(t.charCodeAt(n + 1));
          if (-1 === r) throw new ur();
          e.appendBits(45 * i + r, 11), (n += 2);
        } else e.appendBits(i, 6), n++;
      }
    }
    static append8BitBytes(t, e, r) {
      let n;
      try {
        n = I.encode(t, r);
      } catch (t) {
        throw new ur(t);
      }
      for (let t = 0, r = n.length; t !== r; t++) {
        const r = n[t];
        e.appendBits(r, 8);
      }
    }
    static appendKanjiBytes(t, e) {
      let r;
      try {
        r = I.encode(t, m.SJIS);
      } catch (t) {
        throw new ur(t);
      }
      const n = r.length;
      for (let t = 0; t < n; t += 2) {
        const n = (((255 & r[t]) << 8) & 4294967295) | (255 & r[t + 1]);
        let i = -1;
        if ((n >= 33088 && n <= 40956 ? (i = n - 33088) : n >= 57408 && n <= 60351 && (i = n - 49472), -1 === i))
          throw new ur('Invalid byte sequence');
        const s = 192 * (i >> 8) + (255 & i);
        e.appendBits(s, 13);
      }
    }
    static appendECI(t, e) {
      e.appendBits(_e.ECI.getBits(), 4), e.appendBits(t.getValue(), 8);
    }
  }
  (fr.ALPHANUMERIC_TABLE = Int32Array.from([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1,
    -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    34, 35, -1, -1, -1, -1, -1,
  ])),
    (fr.DEFAULT_BYTE_MODE_ENCODING = m.UTF8.getName());
  class wr {
    write(t, e, r, n = null) {
      if (0 === t.length) throw new o('Found empty contents');
      if (e < 0 || r < 0) throw new o('Requested dimensions are too small: ' + e + 'x' + r);
      let i = de.L,
        s = wr.QUIET_ZONE_SIZE;
      null !== n &&
        (void 0 !== n.get(or.ERROR_CORRECTION) && (i = de.fromString(n.get(or.ERROR_CORRECTION).toString())),
        void 0 !== n.get(or.MARGIN) && (s = Number.parseInt(n.get(or.MARGIN).toString(), 10)));
      const a = fr.encode(t, i, n);
      return this.renderResult(a, e, r, s);
    }
    writeToDom(t, e, r, n, i = null) {
      'string' == typeof t && (t = document.querySelector(t));
      const s = this.write(e, r, n, i);
      t && t.appendChild(s);
    }
    renderResult(t, e, r, n) {
      const i = t.getMatrix();
      if (null === i) throw new j();
      const s = i.getWidth(),
        o = i.getHeight(),
        a = s + 2 * n,
        l = o + 2 * n,
        h = Math.max(e, a),
        c = Math.max(r, l),
        u = Math.min(Math.floor(h / a), Math.floor(c / l)),
        d = Math.floor((h - s * u) / 2),
        g = Math.floor((c - o * u) / 2),
        f = this.createSVGElement(h, c);
      for (let t = 0, e = g; t < o; t++, e += u)
        for (let r = 0, n = d; r < s; r++, n += u)
          if (1 === i.get(r, t)) {
            const t = this.createSvgRectElement(n, e, u, u);
            f.appendChild(t);
          }
      return f;
    }
    createSVGElement(t, e) {
      const r = document.createElementNS(wr.SVG_NS, 'svg');
      return r.setAttributeNS(null, 'height', t.toString()), r.setAttributeNS(null, 'width', e.toString()), r;
    }
    createSvgRectElement(t, e, r, n) {
      const i = document.createElementNS(wr.SVG_NS, 'rect');
      return (
        i.setAttributeNS(null, 'x', t.toString()),
        i.setAttributeNS(null, 'y', e.toString()),
        i.setAttributeNS(null, 'height', r.toString()),
        i.setAttributeNS(null, 'width', n.toString()),
        i.setAttributeNS(null, 'fill', '#000000'),
        i
      );
    }
  }
  (wr.QUIET_ZONE_SIZE = 4), (wr.SVG_NS = 'http://www.w3.org/2000/svg');
  class Ar {
    encode(t, e, r, n, i) {
      if (0 === t.length) throw new o('Found empty contents');
      if (e !== v.QR_CODE) throw new o('Can only encode QR_CODE, but got ' + e);
      if (r < 0 || n < 0) throw new o(`Requested dimensions are too small: ${r}x${n}`);
      let s = de.L,
        a = Ar.QUIET_ZONE_SIZE;
      null !== i &&
        (void 0 !== i.get(or.ERROR_CORRECTION) && (s = de.fromString(i.get(or.ERROR_CORRECTION).toString())),
        void 0 !== i.get(or.MARGIN) && (a = Number.parseInt(i.get(or.MARGIN).toString(), 10)));
      const l = fr.encode(t, s, i);
      return Ar.renderResult(l, r, n, a);
    }
    static renderResult(t, e, r, n) {
      const i = t.getMatrix();
      if (null === i) throw new j();
      const s = i.getWidth(),
        o = i.getHeight(),
        a = s + 2 * n,
        l = o + 2 * n,
        h = Math.max(e, a),
        c = Math.max(r, l),
        u = Math.min(Math.floor(h / a), Math.floor(c / l)),
        d = Math.floor((h - s * u) / 2),
        g = Math.floor((c - o * u) / 2),
        f = new T(h, c);
      for (let t = 0, e = g; t < o; t++, e += u)
        for (let r = 0, n = d; r < s; r++, n += u) 1 === i.get(r, t) && f.setRegion(n, e, u, u);
      return f;
    }
  }
  Ar.QUIET_ZONE_SIZE = 4;
  class Cr extends y {
    constructor(t, e, r, n, i, s, a, l) {
      if (
        (super(s, a),
        (this.yuvData = t),
        (this.dataWidth = e),
        (this.dataHeight = r),
        (this.left = n),
        (this.top = i),
        n + s > e || i + a > r)
      )
        throw new o('Crop rectangle does not fit within image data.');
      l && this.reverseHorizontal(s, a);
    }
    getRow(t, e) {
      if (t < 0 || t >= this.getHeight()) throw new o('Requested row is outside the image: ' + t);
      const r = this.getWidth();
      (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
      const n = (t + this.top) * this.dataWidth + this.left;
      return c.arraycopy(this.yuvData, n, e, 0, r), e;
    }
    getMatrix() {
      const t = this.getWidth(),
        e = this.getHeight();
      if (t === this.dataWidth && e === this.dataHeight) return this.yuvData;
      const r = t * e,
        n = new Uint8ClampedArray(r);
      let i = this.top * this.dataWidth + this.left;
      if (t === this.dataWidth) return c.arraycopy(this.yuvData, i, n, 0, r), n;
      for (let r = 0; r < e; r++) {
        const e = r * t;
        c.arraycopy(this.yuvData, i, n, e, t), (i += this.dataWidth);
      }
      return n;
    }
    isCropSupported() {
      return !0;
    }
    crop(t, e, r, n) {
      return new Cr(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + e, r, n, !1);
    }
    renderThumbnail() {
      const t = this.getWidth() / Cr.THUMBNAIL_SCALE_FACTOR,
        e = this.getHeight() / Cr.THUMBNAIL_SCALE_FACTOR,
        r = new Int32Array(t * e),
        n = this.yuvData;
      let i = this.top * this.dataWidth + this.left;
      for (let s = 0; s < e; s++) {
        const e = s * t;
        for (let s = 0; s < t; s++) {
          const t = 255 & n[i + s * Cr.THUMBNAIL_SCALE_FACTOR];
          r[e + s] = 4278190080 | (65793 * t);
        }
        i += this.dataWidth * Cr.THUMBNAIL_SCALE_FACTOR;
      }
      return r;
    }
    getThumbnailWidth() {
      return this.getWidth() / Cr.THUMBNAIL_SCALE_FACTOR;
    }
    getThumbnailHeight() {
      return this.getHeight() / Cr.THUMBNAIL_SCALE_FACTOR;
    }
    reverseHorizontal(t, e) {
      const r = this.yuvData;
      for (let n = 0, i = this.top * this.dataWidth + this.left; n < e; n++, i += this.dataWidth) {
        const e = i + t / 2;
        for (let n = i, s = i + t - 1; n < e; n++, s--) {
          const t = r[n];
          (r[n] = r[s]), (r[s] = t);
        }
      }
    }
    invert() {
      return new O(this);
    }
  }
  Cr.THUMBNAIL_SCALE_FACTOR = 2;
  class Er extends y {
    constructor(t, e, r, n, i, s, a) {
      if (
        (super(e, r),
        (this.dataWidth = n),
        (this.dataHeight = i),
        (this.left = s),
        (this.top = a),
        4 === t.BYTES_PER_ELEMENT)
      ) {
        const n = e * r,
          i = new Uint8ClampedArray(n);
        for (let e = 0; e < n; e++) {
          const r = t[e],
            n = (r >> 16) & 255,
            s = (r >> 7) & 510,
            o = 255 & r;
          i[e] = ((n + s + o) / 4) & 255;
        }
        this.luminances = i;
      } else this.luminances = t;
      if (
        (void 0 === n && (this.dataWidth = e),
        void 0 === i && (this.dataHeight = r),
        void 0 === s && (this.left = 0),
        void 0 === a && (this.top = 0),
        this.left + e > this.dataWidth || this.top + r > this.dataHeight)
      )
        throw new o('Crop rectangle does not fit within image data.');
    }
    getRow(t, e) {
      if (t < 0 || t >= this.getHeight()) throw new o('Requested row is outside the image: ' + t);
      const r = this.getWidth();
      (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
      const n = (t + this.top) * this.dataWidth + this.left;
      return c.arraycopy(this.luminances, n, e, 0, r), e;
    }
    getMatrix() {
      const t = this.getWidth(),
        e = this.getHeight();
      if (t === this.dataWidth && e === this.dataHeight) return this.luminances;
      const r = t * e,
        n = new Uint8ClampedArray(r);
      let i = this.top * this.dataWidth + this.left;
      if (t === this.dataWidth) return c.arraycopy(this.luminances, i, n, 0, r), n;
      for (let r = 0; r < e; r++) {
        const e = r * t;
        c.arraycopy(this.luminances, i, n, e, t), (i += this.dataWidth);
      }
      return n;
    }
    isCropSupported() {
      return !0;
    }
    crop(t, e, r, n) {
      return new Er(this.luminances, r, n, this.dataWidth, this.dataHeight, this.left + t, this.top + e);
    }
    invert() {
      return new O(this);
    }
  }
  class mr extends m {
    static forName(t) {
      return this.getCharacterSetECIByName(t);
    }
  }
  class _r {}
  _r.ISO_8859_1 = m.ISO8859_1;
  class Ir {
    isCompact() {
      return this.compact;
    }
    setCompact(t) {
      this.compact = t;
    }
    getSize() {
      return this.size;
    }
    setSize(t) {
      this.size = t;
    }
    getLayers() {
      return this.layers;
    }
    setLayers(t) {
      this.layers = t;
    }
    getCodeWords() {
      return this.codeWords;
    }
    setCodeWords(t) {
      this.codeWords = t;
    }
    getMatrix() {
      return this.matrix;
    }
    setMatrix(t) {
      this.matrix = t;
    }
  }
  class Sr {
    static singletonList(t) {
      return [t];
    }
    static min(t, e) {
      return t.sort(e)[0];
    }
  }
  class pr extends class {
    constructor(t) {
      this.previous = t;
    }
    getPrevious() {
      return this.previous;
    }
  } {
    constructor(t, e, r) {
      super(t), (this.value = e), (this.bitCount = r);
    }
    appendTo(t, e) {
      t.appendBits(this.value, this.bitCount);
    }
    add(t, e) {
      return new pr(this, t, e);
    }
    addBinaryShift(t, e) {
      return (
        console.warn('addBinaryShift on SimpleToken, this simply returns a copy of this token'), new pr(this, t, e)
      );
    }
    toString() {
      let t = this.value & ((1 << this.bitCount) - 1);
      return (t |= 1 << this.bitCount), '<' + f.toBinaryString(t | (1 << this.bitCount)).substring(1) + '>';
    }
  }
  class Tr extends pr {
    constructor(t, e, r) {
      super(t, 0, 0), (this.binaryShiftStart = e), (this.binaryShiftByteCount = r);
    }
    appendTo(t, e) {
      for (let r = 0; r < this.binaryShiftByteCount; r++)
        (0 === r || (31 === r && this.binaryShiftByteCount <= 62)) &&
          (t.appendBits(31, 5),
          this.binaryShiftByteCount > 62
            ? t.appendBits(this.binaryShiftByteCount - 31, 16)
            : 0 === r
            ? t.appendBits(Math.min(this.binaryShiftByteCount, 31), 5)
            : t.appendBits(this.binaryShiftByteCount - 31, 5)),
          t.appendBits(e[this.binaryShiftStart + r], 8);
    }
    addBinaryShift(t, e) {
      return new Tr(this, t, e);
    }
    toString() {
      return '<' + this.binaryShiftStart + '::' + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + '>';
    }
  }
  function Rr(t, e, r) {
    return new pr(t, e, r);
  }
  const Nr = ['UPPER', 'LOWER', 'DIGIT', 'MIXED', 'PUNCT'],
    Dr = new pr(null, 0, 0),
    yr = [
      Int32Array.from([0, 327708, 327710, 327709, 656318]),
      Int32Array.from([590318, 0, 327710, 327709, 656318]),
      Int32Array.from([262158, 590300, 0, 590301, 932798]),
      Int32Array.from([327709, 327708, 656318, 0, 327710]),
      Int32Array.from([327711, 656380, 656382, 656381, 0]),
    ];
  const Or = (function (t) {
    for (let e of t) g.fill(e, -1);
    return (t[0][4] = 0), (t[1][4] = 0), (t[1][0] = 28), (t[3][4] = 0), (t[2][4] = 0), (t[2][0] = 15), t;
  })(g.createInt32Array(6, 6));
  class Mr {
    constructor(t, e, r, n) {
      (this.token = t), (this.mode = e), (this.binaryShiftByteCount = r), (this.bitCount = n);
    }
    getMode() {
      return this.mode;
    }
    getToken() {
      return this.token;
    }
    getBinaryShiftByteCount() {
      return this.binaryShiftByteCount;
    }
    getBitCount() {
      return this.bitCount;
    }
    latchAndAppend(t, e) {
      let r = this.bitCount,
        n = this.token;
      if (t !== this.mode) {
        let e = yr[this.mode][t];
        (n = Rr(n, 65535 & e, e >> 16)), (r += e >> 16);
      }
      let i = 2 === t ? 4 : 5;
      return (n = Rr(n, e, i)), new Mr(n, t, 0, r + i);
    }
    shiftAndAppend(t, e) {
      let r = this.token,
        n = 2 === this.mode ? 4 : 5;
      return (r = Rr(r, Or[this.mode][t], n)), (r = Rr(r, e, 5)), new Mr(r, this.mode, 0, this.bitCount + n + 5);
    }
    addBinaryShiftChar(t) {
      let e = this.token,
        r = this.mode,
        n = this.bitCount;
      if (4 === this.mode || 2 === this.mode) {
        let t = yr[r][0];
        (e = Rr(e, 65535 & t, t >> 16)), (n += t >> 16), (r = 0);
      }
      let i =
          0 === this.binaryShiftByteCount || 31 === this.binaryShiftByteCount
            ? 18
            : 62 === this.binaryShiftByteCount
            ? 9
            : 8,
        s = new Mr(e, r, this.binaryShiftByteCount + 1, n + i);
      return 2078 === s.binaryShiftByteCount && (s = s.endBinaryShift(t + 1)), s;
    }
    endBinaryShift(t) {
      if (0 === this.binaryShiftByteCount) return this;
      let e = this.token;
      return (
        (e = (function (t, e, r) {
          return new Tr(t, e, r);
        })(e, t - this.binaryShiftByteCount, this.binaryShiftByteCount)),
        new Mr(e, this.mode, 0, this.bitCount)
      );
    }
    isBetterThanOrEqualTo(t) {
      let e = this.bitCount + (yr[this.mode][t.mode] >> 16);
      return (
        this.binaryShiftByteCount < t.binaryShiftByteCount
          ? (e += Mr.calculateBinaryShiftCost(t) - Mr.calculateBinaryShiftCost(this))
          : this.binaryShiftByteCount > t.binaryShiftByteCount && t.binaryShiftByteCount > 0 && (e += 10),
        e <= t.bitCount
      );
    }
    toBitArray(t) {
      let e = [];
      for (let r = this.endBinaryShift(t.length).token; null !== r; r = r.getPrevious()) e.unshift(r);
      let r = new w();
      for (const n of e) n.appendTo(r, t);
      return r;
    }
    toString() {
      return S.format('%s bits=%d bytes=%d', Nr[this.mode], this.bitCount, this.binaryShiftByteCount);
    }
    static calculateBinaryShiftCost(t) {
      return t.binaryShiftByteCount > 62 ? 21 : t.binaryShiftByteCount > 31 ? 20 : t.binaryShiftByteCount > 0 ? 10 : 0;
    }
  }
  Mr.INITIAL_STATE = new Mr(Dr, 0, 0, 0);
  const Br = (function (t) {
    const e = S.getCharCode(' '),
      r = S.getCharCode('.'),
      n = S.getCharCode(',');
    t[0][e] = 1;
    const i = S.getCharCode('Z'),
      s = S.getCharCode('A');
    for (let e = s; e <= i; e++) t[0][e] = e - s + 2;
    t[1][e] = 1;
    const o = S.getCharCode('z'),
      a = S.getCharCode('a');
    for (let e = a; e <= o; e++) t[1][e] = e - a + 2;
    t[2][e] = 1;
    const l = S.getCharCode('9'),
      h = S.getCharCode('0');
    for (let e = h; e <= l; e++) t[2][e] = e - h + 2;
    (t[2][n] = 12), (t[2][r] = 13);
    const c = [
      '\0',
      ' ',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '\b',
      '\t',
      '\n',
      '\v',
      '\f',
      '\r',
      '',
      '',
      '',
      '',
      '',
      '@',
      '\\',
      '^',
      '_',
      '`',
      '|',
      '~',
      '',
    ];
    for (let e = 0; e < c.length; e++) t[3][S.getCharCode(c[e])] = e;
    const u = [
      '\0',
      '\r',
      '\0',
      '\0',
      '\0',
      '\0',
      '!',
      "'",
      '#',
      '$',
      '%',
      '&',
      "'",
      '(',
      ')',
      '*',
      '+',
      ',',
      '-',
      '.',
      '/',
      ':',
      ';',
      '<',
      '=',
      '>',
      '?',
      '[',
      ']',
      '{',
      '}',
    ];
    for (let e = 0; e < u.length; e++) S.getCharCode(u[e]) > 0 && (t[4][S.getCharCode(u[e])] = e);
    return t;
  })(g.createInt32Array(5, 256));
  class br {
    constructor(t) {
      this.text = t;
    }
    encode() {
      const t = S.getCharCode(' '),
        e = S.getCharCode('\n');
      let r = Sr.singletonList(Mr.INITIAL_STATE);
      for (let n = 0; n < this.text.length; n++) {
        let i,
          s = n + 1 < this.text.length ? this.text[n + 1] : 0;
        switch (this.text[n]) {
          case S.getCharCode('\r'):
            i = s === e ? 2 : 0;
            break;
          case S.getCharCode('.'):
            i = s === t ? 3 : 0;
            break;
          case S.getCharCode(','):
            i = s === t ? 4 : 0;
            break;
          case S.getCharCode(':'):
            i = s === t ? 5 : 0;
            break;
          default:
            i = 0;
        }
        i > 0 ? ((r = br.updateStateListForPair(r, n, i)), n++) : (r = this.updateStateListForChar(r, n));
      }
      return Sr.min(r, (t, e) => t.getBitCount() - e.getBitCount()).toBitArray(this.text);
    }
    updateStateListForChar(t, e) {
      const r = [];
      for (let n of t) this.updateStateForChar(n, e, r);
      return br.simplifyStates(r);
    }
    updateStateForChar(t, e, r) {
      let n = 255 & this.text[e],
        i = Br[t.getMode()][n] > 0,
        s = null;
      for (let o = 0; o <= 4; o++) {
        let a = Br[o][n];
        if (a > 0) {
          if ((null == s && (s = t.endBinaryShift(e)), !i || o === t.getMode() || 2 === o)) {
            const t = s.latchAndAppend(o, a);
            r.push(t);
          }
          if (!i && Or[t.getMode()][o] >= 0) {
            const t = s.shiftAndAppend(o, a);
            r.push(t);
          }
        }
      }
      if (t.getBinaryShiftByteCount() > 0 || 0 === Br[t.getMode()][n]) {
        let n = t.addBinaryShiftChar(e);
        r.push(n);
      }
    }
    static updateStateListForPair(t, e, r) {
      const n = [];
      for (let i of t) this.updateStateForPair(i, e, r, n);
      return this.simplifyStates(n);
    }
    static updateStateForPair(t, e, r, n) {
      let i = t.endBinaryShift(e);
      if ((n.push(i.latchAndAppend(4, r)), 4 !== t.getMode() && n.push(i.shiftAndAppend(4, r)), 3 === r || 4 === r)) {
        let t = i.latchAndAppend(2, 16 - r).latchAndAppend(2, 1);
        n.push(t);
      }
      if (t.getBinaryShiftByteCount() > 0) {
        let r = t.addBinaryShiftChar(e).addBinaryShiftChar(e + 1);
        n.push(r);
      }
    }
    static simplifyStates(t) {
      let e = [];
      for (const r of t) {
        let t = !0;
        for (const n of e) {
          if (n.isBetterThanOrEqualTo(r)) {
            t = !1;
            break;
          }
          r.isBetterThanOrEqualTo(n) && (e = e.filter((t) => t !== n));
        }
        t && e.push(r);
      }
      return e;
    }
  }
  class Pr {
    constructor() {}
    static encodeBytes(t) {
      return Pr.encode(t, Pr.DEFAULT_EC_PERCENT, Pr.DEFAULT_AZTEC_LAYERS);
    }
    static encode(t, e, r) {
      let n,
        i,
        s,
        a,
        l,
        h = new br(t).encode(),
        c = f.truncDivision(h.getSize() * e, 100) + 11,
        u = h.getSize() + c;
      if (r !== Pr.DEFAULT_AZTEC_LAYERS) {
        if (((n = r < 0), (i = Math.abs(r)), i > (n ? Pr.MAX_NB_BITS_COMPACT : Pr.MAX_NB_BITS)))
          throw new o(S.format('Illegal value %s for layers', r));
        (s = Pr.totalBitsInLayer(i, n)), (a = Pr.WORD_SIZE[i]);
        let t = s - (s % a);
        if (((l = Pr.stuffBits(h, a)), l.getSize() + c > t)) throw new o('Data to large for user specified layer');
        if (n && l.getSize() > 64 * a) throw new o('Data to large for user specified layer');
      } else {
        (a = 0), (l = null);
        for (let t = 0; ; t++) {
          if (t > Pr.MAX_NB_BITS) throw new o('Data too large for an Aztec code');
          if (((n = t <= 3), (i = n ? t + 1 : t), (s = Pr.totalBitsInLayer(i, n)), u > s)) continue;
          (null != l && a === Pr.WORD_SIZE[i]) || ((a = Pr.WORD_SIZE[i]), (l = Pr.stuffBits(h, a)));
          let e = s - (s % a);
          if (!(n && l.getSize() > 64 * a) && l.getSize() + c <= e) break;
        }
      }
      let d,
        g = Pr.generateCheckWords(l, s, a),
        w = l.getSize() / a,
        A = Pr.generateModeMessage(n, i, w),
        C = (n ? 11 : 14) + 4 * i,
        E = new Int32Array(C);
      if (n) {
        d = C;
        for (let t = 0; t < E.length; t++) E[t] = t;
      } else {
        d = C + 1 + 2 * f.truncDivision(f.truncDivision(C, 2) - 1, 15);
        let t = f.truncDivision(C, 2),
          e = f.truncDivision(d, 2);
        for (let r = 0; r < t; r++) {
          let n = r + f.truncDivision(r, 15);
          (E[t - r - 1] = e - n - 1), (E[t + r] = e + n + 1);
        }
      }
      let m = new T(d);
      for (let t = 0, e = 0; t < i; t++) {
        let r = 4 * (i - t) + (n ? 9 : 12);
        for (let n = 0; n < r; n++) {
          let i = 2 * n;
          for (let s = 0; s < 2; s++)
            g.get(e + i + s) && m.set(E[2 * t + s], E[2 * t + n]),
              g.get(e + 2 * r + i + s) && m.set(E[2 * t + n], E[C - 1 - 2 * t - s]),
              g.get(e + 4 * r + i + s) && m.set(E[C - 1 - 2 * t - s], E[C - 1 - 2 * t - n]),
              g.get(e + 6 * r + i + s) && m.set(E[C - 1 - 2 * t - n], E[2 * t + s]);
        }
        e += 8 * r;
      }
      if ((Pr.drawModeMessage(m, n, d, A), n)) Pr.drawBullsEye(m, f.truncDivision(d, 2), 5);
      else {
        Pr.drawBullsEye(m, f.truncDivision(d, 2), 7);
        for (let t = 0, e = 0; t < f.truncDivision(C, 2) - 1; t += 15, e += 16)
          for (let t = 1 & f.truncDivision(d, 2); t < d; t += 2)
            m.set(f.truncDivision(d, 2) - e, t),
              m.set(f.truncDivision(d, 2) + e, t),
              m.set(t, f.truncDivision(d, 2) - e),
              m.set(t, f.truncDivision(d, 2) + e);
      }
      let _ = new Ir();
      return _.setCompact(n), _.setSize(d), _.setLayers(i), _.setCodeWords(w), _.setMatrix(m), _;
    }
    static drawBullsEye(t, e, r) {
      for (let n = 0; n < r; n += 2)
        for (let r = e - n; r <= e + n; r++) t.set(r, e - n), t.set(r, e + n), t.set(e - n, r), t.set(e + n, r);
      t.set(e - r, e - r),
        t.set(e - r + 1, e - r),
        t.set(e - r, e - r + 1),
        t.set(e + r, e - r),
        t.set(e + r, e - r + 1),
        t.set(e + r, e + r - 1);
    }
    static generateModeMessage(t, e, r) {
      let n = new w();
      return (
        t
          ? (n.appendBits(e - 1, 2), n.appendBits(r - 1, 6), (n = Pr.generateCheckWords(n, 28, 4)))
          : (n.appendBits(e - 1, 5), n.appendBits(r - 1, 11), (n = Pr.generateCheckWords(n, 40, 4))),
        n
      );
    }
    static drawModeMessage(t, e, r, n) {
      let i = f.truncDivision(r, 2);
      if (e)
        for (let e = 0; e < 7; e++) {
          let r = i - 3 + e;
          n.get(e) && t.set(r, i - 5),
            n.get(e + 7) && t.set(i + 5, r),
            n.get(20 - e) && t.set(r, i + 5),
            n.get(27 - e) && t.set(i - 5, r);
        }
      else
        for (let e = 0; e < 10; e++) {
          let r = i - 5 + e + f.truncDivision(e, 5);
          n.get(e) && t.set(r, i - 7),
            n.get(e + 10) && t.set(i + 7, r),
            n.get(29 - e) && t.set(r, i + 7),
            n.get(39 - e) && t.set(i - 7, r);
        }
    }
    static generateCheckWords(t, e, r) {
      let n = t.getSize() / r,
        i = new ar(Pr.getGF(r)),
        s = f.truncDivision(e, r),
        o = Pr.bitsToWords(t, r, s);
      i.encode(o, s - n);
      let a = e % r,
        l = new w();
      l.appendBits(0, a);
      for (const t of Array.from(o)) l.appendBits(t, r);
      return l;
    }
    static bitsToWords(t, e, r) {
      let n,
        i,
        s = new Int32Array(r);
      for (n = 0, i = t.getSize() / e; n < i; n++) {
        let r = 0;
        for (let i = 0; i < e; i++) r |= t.get(n * e + i) ? 1 << (e - i - 1) : 0;
        s[n] = r;
      }
      return s;
    }
    static getGF(t) {
      switch (t) {
        case 4:
          return q.AZTEC_PARAM;
        case 6:
          return q.AZTEC_DATA_6;
        case 8:
          return q.AZTEC_DATA_8;
        case 10:
          return q.AZTEC_DATA_10;
        case 12:
          return q.AZTEC_DATA_12;
        default:
          throw new o('Unsupported word size ' + t);
      }
    }
    static stuffBits(t, e) {
      let r = new w(),
        n = t.getSize(),
        i = (1 << e) - 2;
      for (let s = 0; s < n; s += e) {
        let o = 0;
        for (let r = 0; r < e; r++) (s + r >= n || t.get(s + r)) && (o |= 1 << (e - 1 - r));
        (o & i) === i
          ? (r.appendBits(o & i, e), s--)
          : 0 == (o & i)
          ? (r.appendBits(1 | o, e), s--)
          : r.appendBits(o, e);
      }
      return r;
    }
    static totalBitsInLayer(t, e) {
      return ((e ? 88 : 112) + 16 * t) * t;
    }
  }
  (Pr.DEFAULT_EC_PERCENT = 33),
    (Pr.DEFAULT_AZTEC_LAYERS = 0),
    (Pr.MAX_NB_BITS = 32),
    (Pr.MAX_NB_BITS_COMPACT = 4),
    (Pr.WORD_SIZE = Int32Array.from([
      4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12,
      12, 12,
    ]));
  class Lr {
    encode(t, e, r, n) {
      return this.encodeWithHints(t, e, r, n, null);
    }
    encodeWithHints(t, e, r, n, i) {
      let s = _r.ISO_8859_1,
        o = Pr.DEFAULT_EC_PERCENT,
        a = Pr.DEFAULT_AZTEC_LAYERS;
      return (
        null != i &&
          (i.has(or.CHARACTER_SET) && (s = mr.forName(i.get(or.CHARACTER_SET).toString())),
          i.has(or.ERROR_CORRECTION) && (o = f.parseInt(i.get(or.ERROR_CORRECTION).toString())),
          i.has(or.AZTEC_LAYERS) && (a = f.parseInt(i.get(or.AZTEC_LAYERS).toString()))),
        Lr.encodeLayers(t, e, r, n, s, o, a)
      );
    }
    static encodeLayers(t, e, r, n, i, s, a) {
      if (e !== v.AZTEC) throw new o('Can only encode AZTEC, but got ' + e);
      let l = Pr.encode(S.getBytes(t, i), s, a);
      return Lr.renderResult(l, r, n);
    }
    static renderResult(t, e, r) {
      let n = t.getMatrix();
      if (null == n) throw new j();
      let i = n.getWidth(),
        s = n.getHeight(),
        o = Math.max(e, i),
        a = Math.max(r, s),
        l = Math.min(o / i, a / s),
        h = (o - i * l) / 2,
        c = (a - s * l) / 2,
        u = new T(o, a);
      for (let t = 0, e = c; t < s; t++, e += l)
        for (let r = 0, s = h; r < i; r++, s += l) n.get(r, t) && u.setRegion(s, e, l, l);
      return u;
    }
  }
  (t.AbstractExpandedDecoder = xt),
    (t.ArgumentException = s),
    (t.ArithmeticException = K),
    (t.AztecCode = Ir),
    (t.AztecCodeReader = dt),
    (t.AztecCodeWriter = Lr),
    (t.AztecDecoder = $),
    (t.AztecDetector = ut),
    (t.AztecDetectorResult = it),
    (t.AztecEncoder = Pr),
    (t.AztecHighLevelEncoder = br),
    (t.AztecPoint = ct),
    (t.BarcodeFormat = v),
    (t.Binarizer = h),
    (t.BinaryBitmap = a),
    (t.BitArray = w),
    (t.BitMatrix = T),
    (t.BitSource = ae),
    (t.BrowserAztecCodeReader = class extends L {
      constructor(t = 500) {
        super(new dt(), t);
      }
    }),
    (t.BrowserBarcodeReader = class extends L {
      constructor(t = 500, e) {
        super(new ee(e), t, e);
      }
    }),
    (t.BrowserCodeReader = L),
    (t.BrowserDatamatrixCodeReader = class extends L {
      constructor(t = 500) {
        super(new ue(), t);
      }
    }),
    (t.BrowserMultiFormatReader = class extends L {
      constructor(t = null, e = 500) {
        const r = new ir();
        r.setHints(t), super(r, e);
      }
      decodeBitmap(t) {
        return this.reader.decodeWithState(t);
      }
    }),
    (t.BrowserPDF417Reader = class extends L {
      constructor(t = 500) {
        super(new rr(), t);
      }
    }),
    (t.BrowserQRCodeReader = class extends L {
      constructor(t = 500) {
        super(new Me(), t);
      }
    }),
    (t.BrowserQRCodeSvgWriter = wr),
    (t.CharacterSetECI = m),
    (t.ChecksumException = l),
    (t.Code128Reader = ft),
    (t.Code39Reader = wt),
    (t.DataMatrixDecodedBitStreamParser = le),
    (t.DataMatrixReader = ue),
    (t.DecodeHintType = C),
    (t.DecoderResult = z),
    (t.DefaultGridSampler = lt),
    (t.DetectorResult = nt),
    (t.EAN13Reader = St),
    (t.EncodeHintType = or),
    (t.Exception = i),
    (t.FormatException = E),
    (t.GenericGF = q),
    (t.GenericGFPoly = Z),
    (t.GlobalHistogramBinarizer = N),
    (t.GridSampler = ot),
    (t.GridSamplerInstance = ht),
    (t.HTMLCanvasElementLuminanceSource = M),
    (t.HybridBinarizer = D),
    (t.ITFReader = At),
    (t.IllegalArgumentException = o),
    (t.IllegalStateException = j),
    (t.InvertedLuminanceSource = O),
    (t.LuminanceSource = y),
    (t.MathUtils = tt),
    (t.MultiFormatOneDReader = ee),
    (t.MultiFormatReader = ir),
    (t.MultiFormatWriter = class {
      encode(t, e, r, n, i) {
        let s;
        switch (e) {
          case v.QR_CODE:
            s = new Ar();
            break;
          default:
            throw new o('No encoder available for format ' + e);
        }
        return s.encode(t, e, r, n, i);
      }
    }),
    (t.NotFoundException = R),
    (t.OneDReader = gt),
    (t.PDF417DecodedBitStreamParser = tr),
    (t.PDF417DecoderErrorCorrection = ke),
    (t.PDF417Reader = rr),
    (t.PDF417ResultMetadata = Ye),
    (t.PerspectiveTransform = at),
    (t.PlanarYUVLuminanceSource = Cr),
    (t.QRCodeByteMatrix = hr),
    (t.QRCodeDataMask = Ce),
    (t.QRCodeDecodedBitStreamParser = Ie),
    (t.QRCodeDecoderErrorCorrectionLevel = de),
    (t.QRCodeDecoderFormatInformation = ge),
    (t.QRCodeEncoder = fr),
    (t.QRCodeEncoderQRCode = cr),
    (t.QRCodeMaskUtil = lr),
    (t.QRCodeMatrixUtil = dr),
    (t.QRCodeMode = _e),
    (t.QRCodeReader = Me),
    (t.QRCodeVersion = Ae),
    (t.QRCodeWriter = Ar),
    (t.RGBLuminanceSource = Er),
    (t.RSS14Reader = te),
    (t.RSSExpandedReader = Jt),
    (t.ReaderException = nr),
    (t.ReedSolomonDecoder = J),
    (t.ReedSolomonEncoder = ar),
    (t.ReedSolomonException = Q),
    (t.Result = F),
    (t.ResultMetadataType = W),
    (t.ResultPoint = rt),
    (t.StringUtils = S),
    (t.UnsupportedOperationException = _),
    (t.VideoInputDevice = B),
    (t.WhiteRectangleDetector = st),
    (t.WriterException = ur),
    (t.ZXingArrays = g),
    (t.ZXingCharset = mr),
    (t.ZXingInteger = f),
    (t.ZXingStandardCharsets = _r),
    (t.ZXingStringBuilder = p),
    (t.ZXingStringEncoding = I),
    (t.ZXingSystem = c),
    (t.createAbstractExpandedDecoder = qt),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
