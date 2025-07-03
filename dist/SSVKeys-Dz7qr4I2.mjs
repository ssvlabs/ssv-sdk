import bls from "bls-eth-wasm";
import crypto$1 from "crypto";
import { keccak256, toHex, sha256 as sha256$1, toBytes, fromHex, getAddress } from "viem";
import { ValidatorConstraint, registerDecorator, IsNotEmpty, IsDefined, IsInt, IsString, validateSync, IsOptional, IsNumber, Length, ValidateNested } from "class-validator";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
(async () => {
  await bls.init(bls.BLS12_381);
})();
class SSVKeysException extends Error {
  constructor(message) {
    super(message);
    Object.defineProperty(this, "trace", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.trace = this.stack;
    this.stack = `${this.name}: ${this.message}`;
  }
}
class KeyStoreDataFormatError extends SSVKeysException {
  constructor(data, message) {
    super(message);
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = data;
  }
}
class KeyStoreInvalidError extends SSVKeysException {
  constructor(data, message) {
    super(message);
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = data;
  }
}
class KeyStorePasswordError extends SSVKeysException {
  constructor(message) {
    super(message);
  }
}
class EthereumWalletError extends SSVKeysException {
  constructor(message) {
    super(message);
  }
}
class PrivateKeyFormatError extends SSVKeysException {
  constructor(data, message) {
    super(message);
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = data;
  }
}
class OwnerAddressFormatError extends SSVKeysException {
  constructor(data, message) {
    super(message);
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = data;
  }
}
class OwnerNonceFormatError extends SSVKeysException {
  constructor(data, message) {
    super(message);
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = data;
  }
}
var forge$C = {
  // default options
  options: {
    usePureJavaScript: false
  }
};
var api = {};
var baseN$1 = api;
var _reverseAlphabets = {};
api.encode = function(input, alphabet, maxline) {
  if (typeof alphabet !== "string") {
    throw new TypeError('"alphabet" must be a string.');
  }
  if (maxline !== void 0 && typeof maxline !== "number") {
    throw new TypeError('"maxline" must be a number.');
  }
  var output = "";
  if (!(input instanceof Uint8Array)) {
    output = _encodeWithByteBuffer(input, alphabet);
  } else {
    var i = 0;
    var base = alphabet.length;
    var first = alphabet.charAt(0);
    var digits = [0];
    for (i = 0; i < input.length; ++i) {
      for (var j = 0, carry = input[i]; j < digits.length; ++j) {
        carry += digits[j] << 8;
        digits[j] = carry % base;
        carry = carry / base | 0;
      }
      while (carry > 0) {
        digits.push(carry % base);
        carry = carry / base | 0;
      }
    }
    for (i = 0; input[i] === 0 && i < input.length - 1; ++i) {
      output += first;
    }
    for (i = digits.length - 1; i >= 0; --i) {
      output += alphabet[digits[i]];
    }
  }
  if (maxline) {
    var regex = new RegExp(".{1," + maxline + "}", "g");
    output = output.match(regex).join("\r\n");
  }
  return output;
};
api.decode = function(input, alphabet) {
  if (typeof input !== "string") {
    throw new TypeError('"input" must be a string.');
  }
  if (typeof alphabet !== "string") {
    throw new TypeError('"alphabet" must be a string.');
  }
  var table = _reverseAlphabets[alphabet];
  if (!table) {
    table = _reverseAlphabets[alphabet] = [];
    for (var i = 0; i < alphabet.length; ++i) {
      table[alphabet.charCodeAt(i)] = i;
    }
  }
  input = input.replace(/\s/g, "");
  var base = alphabet.length;
  var first = alphabet.charAt(0);
  var bytes = [0];
  for (var i = 0; i < input.length; i++) {
    var value = table[input.charCodeAt(i)];
    if (value === void 0) {
      return;
    }
    for (var j = 0, carry = value; j < bytes.length; ++j) {
      carry += bytes[j] * base;
      bytes[j] = carry & 255;
      carry >>= 8;
    }
    while (carry > 0) {
      bytes.push(carry & 255);
      carry >>= 8;
    }
  }
  for (var k = 0; input[k] === first && k < input.length - 1; ++k) {
    bytes.push(0);
  }
  if (typeof Buffer !== "undefined") {
    return Buffer.from(bytes.reverse());
  }
  return new Uint8Array(bytes.reverse());
};
function _encodeWithByteBuffer(input, alphabet) {
  var i = 0;
  var base = alphabet.length;
  var first = alphabet.charAt(0);
  var digits = [0];
  for (i = 0; i < input.length(); ++i) {
    for (var j = 0, carry = input.at(i); j < digits.length; ++j) {
      carry += digits[j] << 8;
      digits[j] = carry % base;
      carry = carry / base | 0;
    }
    while (carry > 0) {
      digits.push(carry % base);
      carry = carry / base | 0;
    }
  }
  var output = "";
  for (i = 0; input.at(i) === 0 && i < input.length() - 1; ++i) {
    output += first;
  }
  for (i = digits.length - 1; i >= 0; --i) {
    output += alphabet[digits[i]];
  }
  return output;
}
var forge$B = forge$C;
var baseN = baseN$1;
var util$1 = forge$B.util = forge$B.util || {};
(function() {
  if (typeof process !== "undefined" && process.nextTick && !process.browser) {
    util$1.nextTick = process.nextTick;
    if (typeof setImmediate === "function") {
      util$1.setImmediate = setImmediate;
    } else {
      util$1.setImmediate = util$1.nextTick;
    }
    return;
  }
  if (typeof setImmediate === "function") {
    util$1.setImmediate = function() {
      return setImmediate.apply(void 0, arguments);
    };
    util$1.nextTick = function(callback) {
      return setImmediate(callback);
    };
    return;
  }
  util$1.setImmediate = function(callback) {
    setTimeout(callback, 0);
  };
  if (typeof window !== "undefined" && typeof window.postMessage === "function") {
    let handler = function(event) {
      if (event.source === window && event.data === msg) {
        event.stopPropagation();
        var copy = callbacks.slice();
        callbacks.length = 0;
        copy.forEach(function(callback) {
          callback();
        });
      }
    };
    var msg = "forge.setImmediate";
    var callbacks = [];
    util$1.setImmediate = function(callback) {
      callbacks.push(callback);
      if (callbacks.length === 1) {
        window.postMessage(msg, "*");
      }
    };
    window.addEventListener("message", handler, true);
  }
  if (typeof MutationObserver !== "undefined") {
    var now = Date.now();
    var attr = true;
    var div = document.createElement("div");
    var callbacks = [];
    new MutationObserver(function() {
      var copy = callbacks.slice();
      callbacks.length = 0;
      copy.forEach(function(callback) {
        callback();
      });
    }).observe(div, { attributes: true });
    var oldSetImmediate = util$1.setImmediate;
    util$1.setImmediate = function(callback) {
      if (Date.now() - now > 15) {
        now = Date.now();
        oldSetImmediate(callback);
      } else {
        callbacks.push(callback);
        if (callbacks.length === 1) {
          div.setAttribute("a", attr = !attr);
        }
      }
    };
  }
  util$1.nextTick = util$1.setImmediate;
})();
util$1.isNodejs = typeof process !== "undefined" && process.versions && process.versions.node;
util$1.globalScope = function() {
  if (util$1.isNodejs) {
    return commonjsGlobal;
  }
  return typeof self === "undefined" ? window : self;
}();
util$1.isArray = Array.isArray || function(x) {
  return Object.prototype.toString.call(x) === "[object Array]";
};
util$1.isArrayBuffer = function(x) {
  return typeof ArrayBuffer !== "undefined" && x instanceof ArrayBuffer;
};
util$1.isArrayBufferView = function(x) {
  return x && util$1.isArrayBuffer(x.buffer) && x.byteLength !== void 0;
};
function _checkBitsParam(n) {
  if (!(n === 8 || n === 16 || n === 24 || n === 32)) {
    throw new Error("Only 8, 16, 24, or 32 bits supported: " + n);
  }
}
util$1.ByteBuffer = ByteStringBuffer;
function ByteStringBuffer(b) {
  this.data = "";
  this.read = 0;
  if (typeof b === "string") {
    this.data = b;
  } else if (util$1.isArrayBuffer(b) || util$1.isArrayBufferView(b)) {
    if (typeof Buffer !== "undefined" && b instanceof Buffer) {
      this.data = b.toString("binary");
    } else {
      var arr = new Uint8Array(b);
      try {
        this.data = String.fromCharCode.apply(null, arr);
      } catch (e) {
        for (var i = 0; i < arr.length; ++i) {
          this.putByte(arr[i]);
        }
      }
    }
  } else if (b instanceof ByteStringBuffer || typeof b === "object" && typeof b.data === "string" && typeof b.read === "number") {
    this.data = b.data;
    this.read = b.read;
  }
  this._constructedStringLength = 0;
}
util$1.ByteStringBuffer = ByteStringBuffer;
var _MAX_CONSTRUCTED_STRING_LENGTH = 4096;
util$1.ByteStringBuffer.prototype._optimizeConstructedString = function(x) {
  this._constructedStringLength += x;
  if (this._constructedStringLength > _MAX_CONSTRUCTED_STRING_LENGTH) {
    this.data.substr(0, 1);
    this._constructedStringLength = 0;
  }
};
util$1.ByteStringBuffer.prototype.length = function() {
  return this.data.length - this.read;
};
util$1.ByteStringBuffer.prototype.isEmpty = function() {
  return this.length() <= 0;
};
util$1.ByteStringBuffer.prototype.putByte = function(b) {
  return this.putBytes(String.fromCharCode(b));
};
util$1.ByteStringBuffer.prototype.fillWithByte = function(b, n) {
  b = String.fromCharCode(b);
  var d = this.data;
  while (n > 0) {
    if (n & 1) {
      d += b;
    }
    n >>>= 1;
    if (n > 0) {
      b += b;
    }
  }
  this.data = d;
  this._optimizeConstructedString(n);
  return this;
};
util$1.ByteStringBuffer.prototype.putBytes = function(bytes) {
  this.data += bytes;
  this._optimizeConstructedString(bytes.length);
  return this;
};
util$1.ByteStringBuffer.prototype.putString = function(str) {
  return this.putBytes(util$1.encodeUtf8(str));
};
util$1.ByteStringBuffer.prototype.putInt16 = function(i) {
  return this.putBytes(
    String.fromCharCode(i >> 8 & 255) + String.fromCharCode(i & 255)
  );
};
util$1.ByteStringBuffer.prototype.putInt24 = function(i) {
  return this.putBytes(
    String.fromCharCode(i >> 16 & 255) + String.fromCharCode(i >> 8 & 255) + String.fromCharCode(i & 255)
  );
};
util$1.ByteStringBuffer.prototype.putInt32 = function(i) {
  return this.putBytes(
    String.fromCharCode(i >> 24 & 255) + String.fromCharCode(i >> 16 & 255) + String.fromCharCode(i >> 8 & 255) + String.fromCharCode(i & 255)
  );
};
util$1.ByteStringBuffer.prototype.putInt16Le = function(i) {
  return this.putBytes(
    String.fromCharCode(i & 255) + String.fromCharCode(i >> 8 & 255)
  );
};
util$1.ByteStringBuffer.prototype.putInt24Le = function(i) {
  return this.putBytes(
    String.fromCharCode(i & 255) + String.fromCharCode(i >> 8 & 255) + String.fromCharCode(i >> 16 & 255)
  );
};
util$1.ByteStringBuffer.prototype.putInt32Le = function(i) {
  return this.putBytes(
    String.fromCharCode(i & 255) + String.fromCharCode(i >> 8 & 255) + String.fromCharCode(i >> 16 & 255) + String.fromCharCode(i >> 24 & 255)
  );
};
util$1.ByteStringBuffer.prototype.putInt = function(i, n) {
  _checkBitsParam(n);
  var bytes = "";
  do {
    n -= 8;
    bytes += String.fromCharCode(i >> n & 255);
  } while (n > 0);
  return this.putBytes(bytes);
};
util$1.ByteStringBuffer.prototype.putSignedInt = function(i, n) {
  if (i < 0) {
    i += 2 << n - 1;
  }
  return this.putInt(i, n);
};
util$1.ByteStringBuffer.prototype.putBuffer = function(buffer) {
  return this.putBytes(buffer.getBytes());
};
util$1.ByteStringBuffer.prototype.getByte = function() {
  return this.data.charCodeAt(this.read++);
};
util$1.ByteStringBuffer.prototype.getInt16 = function() {
  var rval = this.data.charCodeAt(this.read) << 8 ^ this.data.charCodeAt(this.read + 1);
  this.read += 2;
  return rval;
};
util$1.ByteStringBuffer.prototype.getInt24 = function() {
  var rval = this.data.charCodeAt(this.read) << 16 ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2);
  this.read += 3;
  return rval;
};
util$1.ByteStringBuffer.prototype.getInt32 = function() {
  var rval = this.data.charCodeAt(this.read) << 24 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 8 ^ this.data.charCodeAt(this.read + 3);
  this.read += 4;
  return rval;
};
util$1.ByteStringBuffer.prototype.getInt16Le = function() {
  var rval = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8;
  this.read += 2;
  return rval;
};
util$1.ByteStringBuffer.prototype.getInt24Le = function() {
  var rval = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16;
  this.read += 3;
  return rval;
};
util$1.ByteStringBuffer.prototype.getInt32Le = function() {
  var rval = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16 ^ this.data.charCodeAt(this.read + 3) << 24;
  this.read += 4;
  return rval;
};
util$1.ByteStringBuffer.prototype.getInt = function(n) {
  _checkBitsParam(n);
  var rval = 0;
  do {
    rval = (rval << 8) + this.data.charCodeAt(this.read++);
    n -= 8;
  } while (n > 0);
  return rval;
};
util$1.ByteStringBuffer.prototype.getSignedInt = function(n) {
  var x = this.getInt(n);
  var max = 2 << n - 2;
  if (x >= max) {
    x -= max << 1;
  }
  return x;
};
util$1.ByteStringBuffer.prototype.getBytes = function(count) {
  var rval;
  if (count) {
    count = Math.min(this.length(), count);
    rval = this.data.slice(this.read, this.read + count);
    this.read += count;
  } else if (count === 0) {
    rval = "";
  } else {
    rval = this.read === 0 ? this.data : this.data.slice(this.read);
    this.clear();
  }
  return rval;
};
util$1.ByteStringBuffer.prototype.bytes = function(count) {
  return typeof count === "undefined" ? this.data.slice(this.read) : this.data.slice(this.read, this.read + count);
};
util$1.ByteStringBuffer.prototype.at = function(i) {
  return this.data.charCodeAt(this.read + i);
};
util$1.ByteStringBuffer.prototype.setAt = function(i, b) {
  this.data = this.data.substr(0, this.read + i) + String.fromCharCode(b) + this.data.substr(this.read + i + 1);
  return this;
};
util$1.ByteStringBuffer.prototype.last = function() {
  return this.data.charCodeAt(this.data.length - 1);
};
util$1.ByteStringBuffer.prototype.copy = function() {
  var c = util$1.createBuffer(this.data);
  c.read = this.read;
  return c;
};
util$1.ByteStringBuffer.prototype.compact = function() {
  if (this.read > 0) {
    this.data = this.data.slice(this.read);
    this.read = 0;
  }
  return this;
};
util$1.ByteStringBuffer.prototype.clear = function() {
  this.data = "";
  this.read = 0;
  return this;
};
util$1.ByteStringBuffer.prototype.truncate = function(count) {
  var len = Math.max(0, this.length() - count);
  this.data = this.data.substr(this.read, len);
  this.read = 0;
  return this;
};
util$1.ByteStringBuffer.prototype.toHex = function() {
  var rval = "";
  for (var i = this.read; i < this.data.length; ++i) {
    var b = this.data.charCodeAt(i);
    if (b < 16) {
      rval += "0";
    }
    rval += b.toString(16);
  }
  return rval;
};
util$1.ByteStringBuffer.prototype.toString = function() {
  return util$1.decodeUtf8(this.bytes());
};
function DataBuffer(b, options) {
  options = options || {};
  this.read = options.readOffset || 0;
  this.growSize = options.growSize || 1024;
  var isArrayBuffer = util$1.isArrayBuffer(b);
  var isArrayBufferView = util$1.isArrayBufferView(b);
  if (isArrayBuffer || isArrayBufferView) {
    if (isArrayBuffer) {
      this.data = new DataView(b);
    } else {
      this.data = new DataView(b.buffer, b.byteOffset, b.byteLength);
    }
    this.write = "writeOffset" in options ? options.writeOffset : this.data.byteLength;
    return;
  }
  this.data = new DataView(new ArrayBuffer(0));
  this.write = 0;
  if (b !== null && b !== void 0) {
    this.putBytes(b);
  }
  if ("writeOffset" in options) {
    this.write = options.writeOffset;
  }
}
util$1.DataBuffer = DataBuffer;
util$1.DataBuffer.prototype.length = function() {
  return this.write - this.read;
};
util$1.DataBuffer.prototype.isEmpty = function() {
  return this.length() <= 0;
};
util$1.DataBuffer.prototype.accommodate = function(amount, growSize) {
  if (this.length() >= amount) {
    return this;
  }
  growSize = Math.max(growSize || this.growSize, amount);
  var src = new Uint8Array(
    this.data.buffer,
    this.data.byteOffset,
    this.data.byteLength
  );
  var dst = new Uint8Array(this.length() + growSize);
  dst.set(src);
  this.data = new DataView(dst.buffer);
  return this;
};
util$1.DataBuffer.prototype.putByte = function(b) {
  this.accommodate(1);
  this.data.setUint8(this.write++, b);
  return this;
};
util$1.DataBuffer.prototype.fillWithByte = function(b, n) {
  this.accommodate(n);
  for (var i = 0; i < n; ++i) {
    this.data.setUint8(b);
  }
  return this;
};
util$1.DataBuffer.prototype.putBytes = function(bytes, encoding) {
  if (util$1.isArrayBufferView(bytes)) {
    var src = new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    var len = src.byteLength - src.byteOffset;
    this.accommodate(len);
    var dst = new Uint8Array(this.data.buffer, this.write);
    dst.set(src);
    this.write += len;
    return this;
  }
  if (util$1.isArrayBuffer(bytes)) {
    var src = new Uint8Array(bytes);
    this.accommodate(src.byteLength);
    var dst = new Uint8Array(this.data.buffer);
    dst.set(src, this.write);
    this.write += src.byteLength;
    return this;
  }
  if (bytes instanceof util$1.DataBuffer || typeof bytes === "object" && typeof bytes.read === "number" && typeof bytes.write === "number" && util$1.isArrayBufferView(bytes.data)) {
    var src = new Uint8Array(bytes.data.byteLength, bytes.read, bytes.length());
    this.accommodate(src.byteLength);
    var dst = new Uint8Array(bytes.data.byteLength, this.write);
    dst.set(src);
    this.write += src.byteLength;
    return this;
  }
  if (bytes instanceof util$1.ByteStringBuffer) {
    bytes = bytes.data;
    encoding = "binary";
  }
  encoding = encoding || "binary";
  if (typeof bytes === "string") {
    var view;
    if (encoding === "hex") {
      this.accommodate(Math.ceil(bytes.length / 2));
      view = new Uint8Array(this.data.buffer, this.write);
      this.write += util$1.binary.hex.decode(bytes, view, this.write);
      return this;
    }
    if (encoding === "base64") {
      this.accommodate(Math.ceil(bytes.length / 4) * 3);
      view = new Uint8Array(this.data.buffer, this.write);
      this.write += util$1.binary.base64.decode(bytes, view, this.write);
      return this;
    }
    if (encoding === "utf8") {
      bytes = util$1.encodeUtf8(bytes);
      encoding = "binary";
    }
    if (encoding === "binary" || encoding === "raw") {
      this.accommodate(bytes.length);
      view = new Uint8Array(this.data.buffer, this.write);
      this.write += util$1.binary.raw.decode(view);
      return this;
    }
    if (encoding === "utf16") {
      this.accommodate(bytes.length * 2);
      view = new Uint16Array(this.data.buffer, this.write);
      this.write += util$1.text.utf16.encode(view);
      return this;
    }
    throw new Error("Invalid encoding: " + encoding);
  }
  throw Error("Invalid parameter: " + bytes);
};
util$1.DataBuffer.prototype.putBuffer = function(buffer) {
  this.putBytes(buffer);
  buffer.clear();
  return this;
};
util$1.DataBuffer.prototype.putString = function(str) {
  return this.putBytes(str, "utf16");
};
util$1.DataBuffer.prototype.putInt16 = function(i) {
  this.accommodate(2);
  this.data.setInt16(this.write, i);
  this.write += 2;
  return this;
};
util$1.DataBuffer.prototype.putInt24 = function(i) {
  this.accommodate(3);
  this.data.setInt16(this.write, i >> 8 & 65535);
  this.data.setInt8(this.write, i >> 16 & 255);
  this.write += 3;
  return this;
};
util$1.DataBuffer.prototype.putInt32 = function(i) {
  this.accommodate(4);
  this.data.setInt32(this.write, i);
  this.write += 4;
  return this;
};
util$1.DataBuffer.prototype.putInt16Le = function(i) {
  this.accommodate(2);
  this.data.setInt16(this.write, i, true);
  this.write += 2;
  return this;
};
util$1.DataBuffer.prototype.putInt24Le = function(i) {
  this.accommodate(3);
  this.data.setInt8(this.write, i >> 16 & 255);
  this.data.setInt16(this.write, i >> 8 & 65535, true);
  this.write += 3;
  return this;
};
util$1.DataBuffer.prototype.putInt32Le = function(i) {
  this.accommodate(4);
  this.data.setInt32(this.write, i, true);
  this.write += 4;
  return this;
};
util$1.DataBuffer.prototype.putInt = function(i, n) {
  _checkBitsParam(n);
  this.accommodate(n / 8);
  do {
    n -= 8;
    this.data.setInt8(this.write++, i >> n & 255);
  } while (n > 0);
  return this;
};
util$1.DataBuffer.prototype.putSignedInt = function(i, n) {
  _checkBitsParam(n);
  this.accommodate(n / 8);
  if (i < 0) {
    i += 2 << n - 1;
  }
  return this.putInt(i, n);
};
util$1.DataBuffer.prototype.getByte = function() {
  return this.data.getInt8(this.read++);
};
util$1.DataBuffer.prototype.getInt16 = function() {
  var rval = this.data.getInt16(this.read);
  this.read += 2;
  return rval;
};
util$1.DataBuffer.prototype.getInt24 = function() {
  var rval = this.data.getInt16(this.read) << 8 ^ this.data.getInt8(this.read + 2);
  this.read += 3;
  return rval;
};
util$1.DataBuffer.prototype.getInt32 = function() {
  var rval = this.data.getInt32(this.read);
  this.read += 4;
  return rval;
};
util$1.DataBuffer.prototype.getInt16Le = function() {
  var rval = this.data.getInt16(this.read, true);
  this.read += 2;
  return rval;
};
util$1.DataBuffer.prototype.getInt24Le = function() {
  var rval = this.data.getInt8(this.read) ^ this.data.getInt16(this.read + 1, true) << 8;
  this.read += 3;
  return rval;
};
util$1.DataBuffer.prototype.getInt32Le = function() {
  var rval = this.data.getInt32(this.read, true);
  this.read += 4;
  return rval;
};
util$1.DataBuffer.prototype.getInt = function(n) {
  _checkBitsParam(n);
  var rval = 0;
  do {
    rval = (rval << 8) + this.data.getInt8(this.read++);
    n -= 8;
  } while (n > 0);
  return rval;
};
util$1.DataBuffer.prototype.getSignedInt = function(n) {
  var x = this.getInt(n);
  var max = 2 << n - 2;
  if (x >= max) {
    x -= max << 1;
  }
  return x;
};
util$1.DataBuffer.prototype.getBytes = function(count) {
  var rval;
  if (count) {
    count = Math.min(this.length(), count);
    rval = this.data.slice(this.read, this.read + count);
    this.read += count;
  } else if (count === 0) {
    rval = "";
  } else {
    rval = this.read === 0 ? this.data : this.data.slice(this.read);
    this.clear();
  }
  return rval;
};
util$1.DataBuffer.prototype.bytes = function(count) {
  return typeof count === "undefined" ? this.data.slice(this.read) : this.data.slice(this.read, this.read + count);
};
util$1.DataBuffer.prototype.at = function(i) {
  return this.data.getUint8(this.read + i);
};
util$1.DataBuffer.prototype.setAt = function(i, b) {
  this.data.setUint8(i, b);
  return this;
};
util$1.DataBuffer.prototype.last = function() {
  return this.data.getUint8(this.write - 1);
};
util$1.DataBuffer.prototype.copy = function() {
  return new util$1.DataBuffer(this);
};
util$1.DataBuffer.prototype.compact = function() {
  if (this.read > 0) {
    var src = new Uint8Array(this.data.buffer, this.read);
    var dst = new Uint8Array(src.byteLength);
    dst.set(src);
    this.data = new DataView(dst);
    this.write -= this.read;
    this.read = 0;
  }
  return this;
};
util$1.DataBuffer.prototype.clear = function() {
  this.data = new DataView(new ArrayBuffer(0));
  this.read = this.write = 0;
  return this;
};
util$1.DataBuffer.prototype.truncate = function(count) {
  this.write = Math.max(0, this.length() - count);
  this.read = Math.min(this.read, this.write);
  return this;
};
util$1.DataBuffer.prototype.toHex = function() {
  var rval = "";
  for (var i = this.read; i < this.data.byteLength; ++i) {
    var b = this.data.getUint8(i);
    if (b < 16) {
      rval += "0";
    }
    rval += b.toString(16);
  }
  return rval;
};
util$1.DataBuffer.prototype.toString = function(encoding) {
  var view = new Uint8Array(this.data, this.read, this.length());
  encoding = encoding || "utf8";
  if (encoding === "binary" || encoding === "raw") {
    return util$1.binary.raw.encode(view);
  }
  if (encoding === "hex") {
    return util$1.binary.hex.encode(view);
  }
  if (encoding === "base64") {
    return util$1.binary.base64.encode(view);
  }
  if (encoding === "utf8") {
    return util$1.text.utf8.decode(view);
  }
  if (encoding === "utf16") {
    return util$1.text.utf16.decode(view);
  }
  throw new Error("Invalid encoding: " + encoding);
};
util$1.createBuffer = function(input, encoding) {
  encoding = encoding || "raw";
  if (input !== void 0 && encoding === "utf8") {
    input = util$1.encodeUtf8(input);
  }
  return new util$1.ByteBuffer(input);
};
util$1.fillString = function(c, n) {
  var s2 = "";
  while (n > 0) {
    if (n & 1) {
      s2 += c;
    }
    n >>>= 1;
    if (n > 0) {
      c += c;
    }
  }
  return s2;
};
util$1.xorBytes = function(s1, s2, n) {
  var s3 = "";
  var b = "";
  var t = "";
  var i = 0;
  var c = 0;
  for (; n > 0; --n, ++i) {
    b = s1.charCodeAt(i) ^ s2.charCodeAt(i);
    if (c >= 10) {
      s3 += t;
      t = "";
      c = 0;
    }
    t += String.fromCharCode(b);
    ++c;
  }
  s3 += t;
  return s3;
};
util$1.hexToBytes = function(hex) {
  var rval = "";
  var i = 0;
  if (hex.length & true) {
    i = 1;
    rval += String.fromCharCode(parseInt(hex[0], 16));
  }
  for (; i < hex.length; i += 2) {
    rval += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return rval;
};
util$1.bytesToHex = function(bytes) {
  return util$1.createBuffer(bytes).toHex();
};
util$1.int32ToBytes = function(i) {
  return String.fromCharCode(i >> 24 & 255) + String.fromCharCode(i >> 16 & 255) + String.fromCharCode(i >> 8 & 255) + String.fromCharCode(i & 255);
};
var _base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var _base64Idx = [
  /*43 -43 = 0*/
  /*'+',  1,  2,  3,'/' */
  62,
  -1,
  -1,
  -1,
  63,
  /*'0','1','2','3','4','5','6','7','8','9' */
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  /*15, 16, 17,'=', 19, 20, 21 */
  -1,
  -1,
  -1,
  64,
  -1,
  -1,
  -1,
  /*65 - 43 = 22*/
  /*'A','B','C','D','E','F','G','H','I','J','K','L','M', */
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  /*'N','O','P','Q','R','S','T','U','V','W','X','Y','Z' */
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  /*91 - 43 = 48 */
  /*48, 49, 50, 51, 52, 53 */
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  /*97 - 43 = 54*/
  /*'a','b','c','d','e','f','g','h','i','j','k','l','m' */
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  /*'n','o','p','q','r','s','t','u','v','w','x','y','z' */
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51
];
var _base58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
util$1.encode64 = function(input, maxline) {
  var line = "";
  var output = "";
  var chr1, chr2, chr3;
  var i = 0;
  while (i < input.length) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    line += _base64.charAt(chr1 >> 2);
    line += _base64.charAt((chr1 & 3) << 4 | chr2 >> 4);
    if (isNaN(chr2)) {
      line += "==";
    } else {
      line += _base64.charAt((chr2 & 15) << 2 | chr3 >> 6);
      line += isNaN(chr3) ? "=" : _base64.charAt(chr3 & 63);
    }
    if (maxline && line.length > maxline) {
      output += line.substr(0, maxline) + "\r\n";
      line = line.substr(maxline);
    }
  }
  output += line;
  return output;
};
util$1.decode64 = function(input) {
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  var output = "";
  var enc1, enc2, enc3, enc4;
  var i = 0;
  while (i < input.length) {
    enc1 = _base64Idx[input.charCodeAt(i++) - 43];
    enc2 = _base64Idx[input.charCodeAt(i++) - 43];
    enc3 = _base64Idx[input.charCodeAt(i++) - 43];
    enc4 = _base64Idx[input.charCodeAt(i++) - 43];
    output += String.fromCharCode(enc1 << 2 | enc2 >> 4);
    if (enc3 !== 64) {
      output += String.fromCharCode((enc2 & 15) << 4 | enc3 >> 2);
      if (enc4 !== 64) {
        output += String.fromCharCode((enc3 & 3) << 6 | enc4);
      }
    }
  }
  return output;
};
util$1.encodeUtf8 = function(str) {
  return unescape(encodeURIComponent(str));
};
util$1.decodeUtf8 = function(str) {
  return decodeURIComponent(escape(str));
};
util$1.binary = {
  raw: {},
  hex: {},
  base64: {},
  base58: {},
  baseN: {
    encode: baseN.encode,
    decode: baseN.decode
  }
};
util$1.binary.raw.encode = function(bytes) {
  return String.fromCharCode.apply(null, bytes);
};
util$1.binary.raw.decode = function(str, output, offset) {
  var out = output;
  if (!out) {
    out = new Uint8Array(str.length);
  }
  offset = offset || 0;
  var j = offset;
  for (var i = 0; i < str.length; ++i) {
    out[j++] = str.charCodeAt(i);
  }
  return output ? j - offset : out;
};
util$1.binary.hex.encode = util$1.bytesToHex;
util$1.binary.hex.decode = function(hex, output, offset) {
  var out = output;
  if (!out) {
    out = new Uint8Array(Math.ceil(hex.length / 2));
  }
  offset = offset || 0;
  var i = 0, j = offset;
  if (hex.length & 1) {
    i = 1;
    out[j++] = parseInt(hex[0], 16);
  }
  for (; i < hex.length; i += 2) {
    out[j++] = parseInt(hex.substr(i, 2), 16);
  }
  return output ? j - offset : out;
};
util$1.binary.base64.encode = function(input, maxline) {
  var line = "";
  var output = "";
  var chr1, chr2, chr3;
  var i = 0;
  while (i < input.byteLength) {
    chr1 = input[i++];
    chr2 = input[i++];
    chr3 = input[i++];
    line += _base64.charAt(chr1 >> 2);
    line += _base64.charAt((chr1 & 3) << 4 | chr2 >> 4);
    if (isNaN(chr2)) {
      line += "==";
    } else {
      line += _base64.charAt((chr2 & 15) << 2 | chr3 >> 6);
      line += isNaN(chr3) ? "=" : _base64.charAt(chr3 & 63);
    }
    if (maxline && line.length > maxline) {
      output += line.substr(0, maxline) + "\r\n";
      line = line.substr(maxline);
    }
  }
  output += line;
  return output;
};
util$1.binary.base64.decode = function(input, output, offset) {
  var out = output;
  if (!out) {
    out = new Uint8Array(Math.ceil(input.length / 4) * 3);
  }
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  offset = offset || 0;
  var enc1, enc2, enc3, enc4;
  var i = 0, j = offset;
  while (i < input.length) {
    enc1 = _base64Idx[input.charCodeAt(i++) - 43];
    enc2 = _base64Idx[input.charCodeAt(i++) - 43];
    enc3 = _base64Idx[input.charCodeAt(i++) - 43];
    enc4 = _base64Idx[input.charCodeAt(i++) - 43];
    out[j++] = enc1 << 2 | enc2 >> 4;
    if (enc3 !== 64) {
      out[j++] = (enc2 & 15) << 4 | enc3 >> 2;
      if (enc4 !== 64) {
        out[j++] = (enc3 & 3) << 6 | enc4;
      }
    }
  }
  return output ? j - offset : out.subarray(0, j);
};
util$1.binary.base58.encode = function(input, maxline) {
  return util$1.binary.baseN.encode(input, _base58, maxline);
};
util$1.binary.base58.decode = function(input, maxline) {
  return util$1.binary.baseN.decode(input, _base58, maxline);
};
util$1.text = {
  utf8: {},
  utf16: {}
};
util$1.text.utf8.encode = function(str, output, offset) {
  str = util$1.encodeUtf8(str);
  var out = output;
  if (!out) {
    out = new Uint8Array(str.length);
  }
  offset = offset || 0;
  var j = offset;
  for (var i = 0; i < str.length; ++i) {
    out[j++] = str.charCodeAt(i);
  }
  return output ? j - offset : out;
};
util$1.text.utf8.decode = function(bytes) {
  return util$1.decodeUtf8(String.fromCharCode.apply(null, bytes));
};
util$1.text.utf16.encode = function(str, output, offset) {
  var out = output;
  if (!out) {
    out = new Uint8Array(str.length * 2);
  }
  var view = new Uint16Array(out.buffer);
  offset = offset || 0;
  var j = offset;
  var k = offset;
  for (var i = 0; i < str.length; ++i) {
    view[k++] = str.charCodeAt(i);
    j += 2;
  }
  return output ? j - offset : out;
};
util$1.text.utf16.decode = function(bytes) {
  return String.fromCharCode.apply(null, new Uint16Array(bytes.buffer));
};
util$1.deflate = function(api2, bytes, raw) {
  bytes = util$1.decode64(api2.deflate(util$1.encode64(bytes)).rval);
  if (raw) {
    var start = 2;
    var flg = bytes.charCodeAt(1);
    if (flg & 32) {
      start = 6;
    }
    bytes = bytes.substring(start, bytes.length - 4);
  }
  return bytes;
};
util$1.inflate = function(api2, bytes, raw) {
  var rval = api2.inflate(util$1.encode64(bytes)).rval;
  return rval === null ? null : util$1.decode64(rval);
};
var _setStorageObject = function(api2, id, obj) {
  if (!api2) {
    throw new Error("WebStorage not available.");
  }
  var rval;
  if (obj === null) {
    rval = api2.removeItem(id);
  } else {
    obj = util$1.encode64(JSON.stringify(obj));
    rval = api2.setItem(id, obj);
  }
  if (typeof rval !== "undefined" && rval.rval !== true) {
    var error = new Error(rval.error.message);
    error.id = rval.error.id;
    error.name = rval.error.name;
    throw error;
  }
};
var _getStorageObject = function(api2, id) {
  if (!api2) {
    throw new Error("WebStorage not available.");
  }
  var rval = api2.getItem(id);
  if (api2.init) {
    if (rval.rval === null) {
      if (rval.error) {
        var error = new Error(rval.error.message);
        error.id = rval.error.id;
        error.name = rval.error.name;
        throw error;
      }
      rval = null;
    } else {
      rval = rval.rval;
    }
  }
  if (rval !== null) {
    rval = JSON.parse(util$1.decode64(rval));
  }
  return rval;
};
var _setItem = function(api2, id, key, data) {
  var obj = _getStorageObject(api2, id);
  if (obj === null) {
    obj = {};
  }
  obj[key] = data;
  _setStorageObject(api2, id, obj);
};
var _getItem = function(api2, id, key) {
  var rval = _getStorageObject(api2, id);
  if (rval !== null) {
    rval = key in rval ? rval[key] : null;
  }
  return rval;
};
var _removeItem = function(api2, id, key) {
  var obj = _getStorageObject(api2, id);
  if (obj !== null && key in obj) {
    delete obj[key];
    var empty = true;
    for (var prop in obj) {
      empty = false;
      break;
    }
    if (empty) {
      obj = null;
    }
    _setStorageObject(api2, id, obj);
  }
};
var _clearItems = function(api2, id) {
  _setStorageObject(api2, id, null);
};
var _callStorageFunction = function(func, args, location) {
  var rval = null;
  if (typeof location === "undefined") {
    location = ["web", "flash"];
  }
  var type;
  var done = false;
  var exception = null;
  for (var idx in location) {
    type = location[idx];
    try {
      if (type === "flash" || type === "both") {
        if (args[0] === null) {
          throw new Error("Flash local storage not available.");
        }
        rval = func.apply(this, args);
        done = type === "flash";
      }
      if (type === "web" || type === "both") {
        args[0] = localStorage;
        rval = func.apply(this, args);
        done = true;
      }
    } catch (ex) {
      exception = ex;
    }
    if (done) {
      break;
    }
  }
  if (!done) {
    throw exception;
  }
  return rval;
};
util$1.setItem = function(api2, id, key, data, location) {
  _callStorageFunction(_setItem, arguments, location);
};
util$1.getItem = function(api2, id, key, location) {
  return _callStorageFunction(_getItem, arguments, location);
};
util$1.removeItem = function(api2, id, key, location) {
  _callStorageFunction(_removeItem, arguments, location);
};
util$1.clearItems = function(api2, id, location) {
  _callStorageFunction(_clearItems, arguments, location);
};
util$1.isEmpty = function(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};
util$1.format = function(format) {
  var re = /%./g;
  var match;
  var part;
  var argi = 0;
  var parts = [];
  var last = 0;
  while (match = re.exec(format)) {
    part = format.substring(last, re.lastIndex - 2);
    if (part.length > 0) {
      parts.push(part);
    }
    last = re.lastIndex;
    var code = match[0][1];
    switch (code) {
      case "s":
      case "o":
        if (argi < arguments.length) {
          parts.push(arguments[argi++ + 1]);
        } else {
          parts.push("<?>");
        }
        break;
      case "%":
        parts.push("%");
        break;
      default:
        parts.push("<%" + code + "?>");
    }
  }
  parts.push(format.substring(last));
  return parts.join("");
};
util$1.formatNumber = function(number, decimals, dec_point, thousands_sep) {
  var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
  var d = dec_point === void 0 ? "," : dec_point;
  var t = thousands_sep === void 0 ? "." : thousands_sep, s2 = n < 0 ? "-" : "";
  var i = parseInt(n = Math.abs(+n || 0).toFixed(c), 10) + "";
  var j = i.length > 3 ? i.length % 3 : 0;
  return s2 + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
util$1.formatSize = function(size) {
  if (size >= 1073741824) {
    size = util$1.formatNumber(size / 1073741824, 2, ".", "") + " GiB";
  } else if (size >= 1048576) {
    size = util$1.formatNumber(size / 1048576, 2, ".", "") + " MiB";
  } else if (size >= 1024) {
    size = util$1.formatNumber(size / 1024, 0) + " KiB";
  } else {
    size = util$1.formatNumber(size, 0) + " bytes";
  }
  return size;
};
util$1.bytesFromIP = function(ip) {
  if (ip.indexOf(".") !== -1) {
    return util$1.bytesFromIPv4(ip);
  }
  if (ip.indexOf(":") !== -1) {
    return util$1.bytesFromIPv6(ip);
  }
  return null;
};
util$1.bytesFromIPv4 = function(ip) {
  ip = ip.split(".");
  if (ip.length !== 4) {
    return null;
  }
  var b = util$1.createBuffer();
  for (var i = 0; i < ip.length; ++i) {
    var num = parseInt(ip[i], 10);
    if (isNaN(num)) {
      return null;
    }
    b.putByte(num);
  }
  return b.getBytes();
};
util$1.bytesFromIPv6 = function(ip) {
  var blanks = 0;
  ip = ip.split(":").filter(function(e) {
    if (e.length === 0) ++blanks;
    return true;
  });
  var zeros = (8 - ip.length + blanks) * 2;
  var b = util$1.createBuffer();
  for (var i = 0; i < 8; ++i) {
    if (!ip[i] || ip[i].length === 0) {
      b.fillWithByte(0, zeros);
      zeros = 0;
      continue;
    }
    var bytes = util$1.hexToBytes(ip[i]);
    if (bytes.length < 2) {
      b.putByte(0);
    }
    b.putBytes(bytes);
  }
  return b.getBytes();
};
util$1.bytesToIP = function(bytes) {
  if (bytes.length === 4) {
    return util$1.bytesToIPv4(bytes);
  }
  if (bytes.length === 16) {
    return util$1.bytesToIPv6(bytes);
  }
  return null;
};
util$1.bytesToIPv4 = function(bytes) {
  if (bytes.length !== 4) {
    return null;
  }
  var ip = [];
  for (var i = 0; i < bytes.length; ++i) {
    ip.push(bytes.charCodeAt(i));
  }
  return ip.join(".");
};
util$1.bytesToIPv6 = function(bytes) {
  if (bytes.length !== 16) {
    return null;
  }
  var ip = [];
  var zeroGroups = [];
  var zeroMaxGroup = 0;
  for (var i = 0; i < bytes.length; i += 2) {
    var hex = util$1.bytesToHex(bytes[i] + bytes[i + 1]);
    while (hex[0] === "0" && hex !== "0") {
      hex = hex.substr(1);
    }
    if (hex === "0") {
      var last = zeroGroups[zeroGroups.length - 1];
      var idx = ip.length;
      if (!last || idx !== last.end + 1) {
        zeroGroups.push({ start: idx, end: idx });
      } else {
        last.end = idx;
        if (last.end - last.start > zeroGroups[zeroMaxGroup].end - zeroGroups[zeroMaxGroup].start) {
          zeroMaxGroup = zeroGroups.length - 1;
        }
      }
    }
    ip.push(hex);
  }
  if (zeroGroups.length > 0) {
    var group = zeroGroups[zeroMaxGroup];
    if (group.end - group.start > 0) {
      ip.splice(group.start, group.end - group.start + 1, "");
      if (group.start === 0) {
        ip.unshift("");
      }
      if (group.end === 7) {
        ip.push("");
      }
    }
  }
  return ip.join(":");
};
util$1.estimateCores = function(options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = {};
  }
  options = options || {};
  if ("cores" in util$1 && !options.update) {
    return callback(null, util$1.cores);
  }
  if (typeof navigator !== "undefined" && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency > 0) {
    util$1.cores = navigator.hardwareConcurrency;
    return callback(null, util$1.cores);
  }
  if (typeof Worker === "undefined") {
    util$1.cores = 1;
    return callback(null, util$1.cores);
  }
  if (typeof Blob === "undefined") {
    util$1.cores = 2;
    return callback(null, util$1.cores);
  }
  var blobUrl = URL.createObjectURL(new Blob([
    "(",
    function() {
      self.addEventListener("message", function(e) {
        var st = Date.now();
        var et = st + 4;
        self.postMessage({ st, et });
      });
    }.toString(),
    ")()"
  ], { type: "application/javascript" }));
  sample([], 5, 16);
  function sample(max, samples, numWorkers) {
    if (samples === 0) {
      var avg = Math.floor(max.reduce(function(avg2, x) {
        return avg2 + x;
      }, 0) / max.length);
      util$1.cores = Math.max(1, avg);
      URL.revokeObjectURL(blobUrl);
      return callback(null, util$1.cores);
    }
    map(numWorkers, function(err, results) {
      max.push(reduce2(numWorkers, results));
      sample(max, samples - 1, numWorkers);
    });
  }
  function map(numWorkers, callback2) {
    var workers = [];
    var results = [];
    for (var i = 0; i < numWorkers; ++i) {
      var worker = new Worker(blobUrl);
      worker.addEventListener("message", function(e) {
        results.push(e.data);
        if (results.length === numWorkers) {
          for (var i2 = 0; i2 < numWorkers; ++i2) {
            workers[i2].terminate();
          }
          callback2(null, results);
        }
      });
      workers.push(worker);
    }
    for (var i = 0; i < numWorkers; ++i) {
      workers[i].postMessage(i);
    }
  }
  function reduce2(numWorkers, results) {
    var overlaps = [];
    for (var n = 0; n < numWorkers; ++n) {
      var r1 = results[n];
      var overlap = overlaps[n] = [];
      for (var i = 0; i < numWorkers; ++i) {
        if (n === i) {
          continue;
        }
        var r2 = results[i];
        if (r1.st > r2.st && r1.st < r2.et || r2.st > r1.st && r2.st < r1.et) {
          overlap.push(i);
        }
      }
    }
    return overlaps.reduce(function(max, overlap2) {
      return Math.max(max, overlap2.length);
    }, 0);
  }
};
var forge$A = forge$C;
forge$A.cipher = forge$A.cipher || {};
forge$A.cipher.algorithms = forge$A.cipher.algorithms || {};
forge$A.cipher.createCipher = function(algorithm, key) {
  var api2 = algorithm;
  if (typeof api2 === "string") {
    api2 = forge$A.cipher.getAlgorithm(api2);
    if (api2) {
      api2 = api2();
    }
  }
  if (!api2) {
    throw new Error("Unsupported algorithm: " + algorithm);
  }
  return new forge$A.cipher.BlockCipher({
    algorithm: api2,
    key,
    decrypt: false
  });
};
forge$A.cipher.createDecipher = function(algorithm, key) {
  var api2 = algorithm;
  if (typeof api2 === "string") {
    api2 = forge$A.cipher.getAlgorithm(api2);
    if (api2) {
      api2 = api2();
    }
  }
  if (!api2) {
    throw new Error("Unsupported algorithm: " + algorithm);
  }
  return new forge$A.cipher.BlockCipher({
    algorithm: api2,
    key,
    decrypt: true
  });
};
forge$A.cipher.registerAlgorithm = function(name, algorithm) {
  name = name.toUpperCase();
  forge$A.cipher.algorithms[name] = algorithm;
};
forge$A.cipher.getAlgorithm = function(name) {
  name = name.toUpperCase();
  if (name in forge$A.cipher.algorithms) {
    return forge$A.cipher.algorithms[name];
  }
  return null;
};
var BlockCipher = forge$A.cipher.BlockCipher = function(options) {
  this.algorithm = options.algorithm;
  this.mode = this.algorithm.mode;
  this.blockSize = this.mode.blockSize;
  this._finish = false;
  this._input = null;
  this.output = null;
  this._op = options.decrypt ? this.mode.decrypt : this.mode.encrypt;
  this._decrypt = options.decrypt;
  this.algorithm.initialize(options);
};
BlockCipher.prototype.start = function(options) {
  options = options || {};
  var opts = {};
  for (var key in options) {
    opts[key] = options[key];
  }
  opts.decrypt = this._decrypt;
  this._finish = false;
  this._input = forge$A.util.createBuffer();
  this.output = options.output || forge$A.util.createBuffer();
  this.mode.start(opts);
};
BlockCipher.prototype.update = function(input) {
  if (input) {
    this._input.putBuffer(input);
  }
  while (!this._op.call(this.mode, this._input, this.output, this._finish) && !this._finish) {
  }
  this._input.compact();
};
BlockCipher.prototype.finish = function(pad) {
  if (pad && (this.mode.name === "ECB" || this.mode.name === "CBC")) {
    this.mode.pad = function(input) {
      return pad(this.blockSize, input, false);
    };
    this.mode.unpad = function(output) {
      return pad(this.blockSize, output, true);
    };
  }
  var options = {};
  options.decrypt = this._decrypt;
  options.overflow = this._input.length() % this.blockSize;
  if (!this._decrypt && this.mode.pad) {
    if (!this.mode.pad(this._input, options)) {
      return false;
    }
  }
  this._finish = true;
  this.update();
  if (this._decrypt && this.mode.unpad) {
    if (!this.mode.unpad(this.output, options)) {
      return false;
    }
  }
  if (this.mode.afterFinish) {
    if (!this.mode.afterFinish(this.output, options)) {
      return false;
    }
  }
  return true;
};
var forge$z = forge$C;
forge$z.cipher = forge$z.cipher || {};
var modes = forge$z.cipher.modes = forge$z.cipher.modes || {};
modes.ecb = function(options) {
  options = options || {};
  this.name = "ECB";
  this.cipher = options.cipher;
  this.blockSize = options.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = new Array(this._ints);
  this._outBlock = new Array(this._ints);
};
modes.ecb.prototype.start = function(options) {
};
modes.ecb.prototype.encrypt = function(input, output, finish) {
  if (input.length() < this.blockSize && !(finish && input.length() > 0)) {
    return true;
  }
  for (var i = 0; i < this._ints; ++i) {
    this._inBlock[i] = input.getInt32();
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  for (var i = 0; i < this._ints; ++i) {
    output.putInt32(this._outBlock[i]);
  }
};
modes.ecb.prototype.decrypt = function(input, output, finish) {
  if (input.length() < this.blockSize && !(finish && input.length() > 0)) {
    return true;
  }
  for (var i = 0; i < this._ints; ++i) {
    this._inBlock[i] = input.getInt32();
  }
  this.cipher.decrypt(this._inBlock, this._outBlock);
  for (var i = 0; i < this._ints; ++i) {
    output.putInt32(this._outBlock[i]);
  }
};
modes.ecb.prototype.pad = function(input, options) {
  var padding = input.length() === this.blockSize ? this.blockSize : this.blockSize - input.length();
  input.fillWithByte(padding, padding);
  return true;
};
modes.ecb.prototype.unpad = function(output, options) {
  if (options.overflow > 0) {
    return false;
  }
  var len = output.length();
  var count = output.at(len - 1);
  if (count > this.blockSize << 2) {
    return false;
  }
  output.truncate(count);
  return true;
};
modes.cbc = function(options) {
  options = options || {};
  this.name = "CBC";
  this.cipher = options.cipher;
  this.blockSize = options.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = new Array(this._ints);
  this._outBlock = new Array(this._ints);
};
modes.cbc.prototype.start = function(options) {
  if (options.iv === null) {
    if (!this._prev) {
      throw new Error("Invalid IV parameter.");
    }
    this._iv = this._prev.slice(0);
  } else if (!("iv" in options)) {
    throw new Error("Invalid IV parameter.");
  } else {
    this._iv = transformIV(options.iv, this.blockSize);
    this._prev = this._iv.slice(0);
  }
};
modes.cbc.prototype.encrypt = function(input, output, finish) {
  if (input.length() < this.blockSize && !(finish && input.length() > 0)) {
    return true;
  }
  for (var i = 0; i < this._ints; ++i) {
    this._inBlock[i] = this._prev[i] ^ input.getInt32();
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  for (var i = 0; i < this._ints; ++i) {
    output.putInt32(this._outBlock[i]);
  }
  this._prev = this._outBlock;
};
modes.cbc.prototype.decrypt = function(input, output, finish) {
  if (input.length() < this.blockSize && !(finish && input.length() > 0)) {
    return true;
  }
  for (var i = 0; i < this._ints; ++i) {
    this._inBlock[i] = input.getInt32();
  }
  this.cipher.decrypt(this._inBlock, this._outBlock);
  for (var i = 0; i < this._ints; ++i) {
    output.putInt32(this._prev[i] ^ this._outBlock[i]);
  }
  this._prev = this._inBlock.slice(0);
};
modes.cbc.prototype.pad = function(input, options) {
  var padding = input.length() === this.blockSize ? this.blockSize : this.blockSize - input.length();
  input.fillWithByte(padding, padding);
  return true;
};
modes.cbc.prototype.unpad = function(output, options) {
  if (options.overflow > 0) {
    return false;
  }
  var len = output.length();
  var count = output.at(len - 1);
  if (count > this.blockSize << 2) {
    return false;
  }
  output.truncate(count);
  return true;
};
modes.cfb = function(options) {
  options = options || {};
  this.name = "CFB";
  this.cipher = options.cipher;
  this.blockSize = options.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = null;
  this._outBlock = new Array(this._ints);
  this._partialBlock = new Array(this._ints);
  this._partialOutput = forge$z.util.createBuffer();
  this._partialBytes = 0;
};
modes.cfb.prototype.start = function(options) {
  if (!("iv" in options)) {
    throw new Error("Invalid IV parameter.");
  }
  this._iv = transformIV(options.iv, this.blockSize);
  this._inBlock = this._iv.slice(0);
  this._partialBytes = 0;
};
modes.cfb.prototype.encrypt = function(input, output, finish) {
  var inputLength = input.length();
  if (inputLength === 0) {
    return true;
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  if (this._partialBytes === 0 && inputLength >= this.blockSize) {
    for (var i = 0; i < this._ints; ++i) {
      this._inBlock[i] = input.getInt32() ^ this._outBlock[i];
      output.putInt32(this._inBlock[i]);
    }
    return;
  }
  var partialBytes = (this.blockSize - inputLength) % this.blockSize;
  if (partialBytes > 0) {
    partialBytes = this.blockSize - partialBytes;
  }
  this._partialOutput.clear();
  for (var i = 0; i < this._ints; ++i) {
    this._partialBlock[i] = input.getInt32() ^ this._outBlock[i];
    this._partialOutput.putInt32(this._partialBlock[i]);
  }
  if (partialBytes > 0) {
    input.read -= this.blockSize;
  } else {
    for (var i = 0; i < this._ints; ++i) {
      this._inBlock[i] = this._partialBlock[i];
    }
  }
  if (this._partialBytes > 0) {
    this._partialOutput.getBytes(this._partialBytes);
  }
  if (partialBytes > 0 && !finish) {
    output.putBytes(this._partialOutput.getBytes(
      partialBytes - this._partialBytes
    ));
    this._partialBytes = partialBytes;
    return true;
  }
  output.putBytes(this._partialOutput.getBytes(
    inputLength - this._partialBytes
  ));
  this._partialBytes = 0;
};
modes.cfb.prototype.decrypt = function(input, output, finish) {
  var inputLength = input.length();
  if (inputLength === 0) {
    return true;
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  if (this._partialBytes === 0 && inputLength >= this.blockSize) {
    for (var i = 0; i < this._ints; ++i) {
      this._inBlock[i] = input.getInt32();
      output.putInt32(this._inBlock[i] ^ this._outBlock[i]);
    }
    return;
  }
  var partialBytes = (this.blockSize - inputLength) % this.blockSize;
  if (partialBytes > 0) {
    partialBytes = this.blockSize - partialBytes;
  }
  this._partialOutput.clear();
  for (var i = 0; i < this._ints; ++i) {
    this._partialBlock[i] = input.getInt32();
    this._partialOutput.putInt32(this._partialBlock[i] ^ this._outBlock[i]);
  }
  if (partialBytes > 0) {
    input.read -= this.blockSize;
  } else {
    for (var i = 0; i < this._ints; ++i) {
      this._inBlock[i] = this._partialBlock[i];
    }
  }
  if (this._partialBytes > 0) {
    this._partialOutput.getBytes(this._partialBytes);
  }
  if (partialBytes > 0 && !finish) {
    output.putBytes(this._partialOutput.getBytes(
      partialBytes - this._partialBytes
    ));
    this._partialBytes = partialBytes;
    return true;
  }
  output.putBytes(this._partialOutput.getBytes(
    inputLength - this._partialBytes
  ));
  this._partialBytes = 0;
};
modes.ofb = function(options) {
  options = options || {};
  this.name = "OFB";
  this.cipher = options.cipher;
  this.blockSize = options.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = null;
  this._outBlock = new Array(this._ints);
  this._partialOutput = forge$z.util.createBuffer();
  this._partialBytes = 0;
};
modes.ofb.prototype.start = function(options) {
  if (!("iv" in options)) {
    throw new Error("Invalid IV parameter.");
  }
  this._iv = transformIV(options.iv, this.blockSize);
  this._inBlock = this._iv.slice(0);
  this._partialBytes = 0;
};
modes.ofb.prototype.encrypt = function(input, output, finish) {
  var inputLength = input.length();
  if (input.length() === 0) {
    return true;
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  if (this._partialBytes === 0 && inputLength >= this.blockSize) {
    for (var i = 0; i < this._ints; ++i) {
      output.putInt32(input.getInt32() ^ this._outBlock[i]);
      this._inBlock[i] = this._outBlock[i];
    }
    return;
  }
  var partialBytes = (this.blockSize - inputLength) % this.blockSize;
  if (partialBytes > 0) {
    partialBytes = this.blockSize - partialBytes;
  }
  this._partialOutput.clear();
  for (var i = 0; i < this._ints; ++i) {
    this._partialOutput.putInt32(input.getInt32() ^ this._outBlock[i]);
  }
  if (partialBytes > 0) {
    input.read -= this.blockSize;
  } else {
    for (var i = 0; i < this._ints; ++i) {
      this._inBlock[i] = this._outBlock[i];
    }
  }
  if (this._partialBytes > 0) {
    this._partialOutput.getBytes(this._partialBytes);
  }
  if (partialBytes > 0 && !finish) {
    output.putBytes(this._partialOutput.getBytes(
      partialBytes - this._partialBytes
    ));
    this._partialBytes = partialBytes;
    return true;
  }
  output.putBytes(this._partialOutput.getBytes(
    inputLength - this._partialBytes
  ));
  this._partialBytes = 0;
};
modes.ofb.prototype.decrypt = modes.ofb.prototype.encrypt;
modes.ctr = function(options) {
  options = options || {};
  this.name = "CTR";
  this.cipher = options.cipher;
  this.blockSize = options.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = null;
  this._outBlock = new Array(this._ints);
  this._partialOutput = forge$z.util.createBuffer();
  this._partialBytes = 0;
};
modes.ctr.prototype.start = function(options) {
  if (!("iv" in options)) {
    throw new Error("Invalid IV parameter.");
  }
  this._iv = transformIV(options.iv, this.blockSize);
  this._inBlock = this._iv.slice(0);
  this._partialBytes = 0;
};
modes.ctr.prototype.encrypt = function(input, output, finish) {
  var inputLength = input.length();
  if (inputLength === 0) {
    return true;
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  if (this._partialBytes === 0 && inputLength >= this.blockSize) {
    for (var i = 0; i < this._ints; ++i) {
      output.putInt32(input.getInt32() ^ this._outBlock[i]);
    }
  } else {
    var partialBytes = (this.blockSize - inputLength) % this.blockSize;
    if (partialBytes > 0) {
      partialBytes = this.blockSize - partialBytes;
    }
    this._partialOutput.clear();
    for (var i = 0; i < this._ints; ++i) {
      this._partialOutput.putInt32(input.getInt32() ^ this._outBlock[i]);
    }
    if (partialBytes > 0) {
      input.read -= this.blockSize;
    }
    if (this._partialBytes > 0) {
      this._partialOutput.getBytes(this._partialBytes);
    }
    if (partialBytes > 0 && !finish) {
      output.putBytes(this._partialOutput.getBytes(
        partialBytes - this._partialBytes
      ));
      this._partialBytes = partialBytes;
      return true;
    }
    output.putBytes(this._partialOutput.getBytes(
      inputLength - this._partialBytes
    ));
    this._partialBytes = 0;
  }
  inc32(this._inBlock);
};
modes.ctr.prototype.decrypt = modes.ctr.prototype.encrypt;
modes.gcm = function(options) {
  options = options || {};
  this.name = "GCM";
  this.cipher = options.cipher;
  this.blockSize = options.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = new Array(this._ints);
  this._outBlock = new Array(this._ints);
  this._partialOutput = forge$z.util.createBuffer();
  this._partialBytes = 0;
  this._R = 3774873600;
};
modes.gcm.prototype.start = function(options) {
  if (!("iv" in options)) {
    throw new Error("Invalid IV parameter.");
  }
  var iv = forge$z.util.createBuffer(options.iv);
  this._cipherLength = 0;
  var additionalData;
  if ("additionalData" in options) {
    additionalData = forge$z.util.createBuffer(options.additionalData);
  } else {
    additionalData = forge$z.util.createBuffer();
  }
  if ("tagLength" in options) {
    this._tagLength = options.tagLength;
  } else {
    this._tagLength = 128;
  }
  this._tag = null;
  if (options.decrypt) {
    this._tag = forge$z.util.createBuffer(options.tag).getBytes();
    if (this._tag.length !== this._tagLength / 8) {
      throw new Error("Authentication tag does not match tag length.");
    }
  }
  this._hashBlock = new Array(this._ints);
  this.tag = null;
  this._hashSubkey = new Array(this._ints);
  this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey);
  this.componentBits = 4;
  this._m = this.generateHashTable(this._hashSubkey, this.componentBits);
  var ivLength = iv.length();
  if (ivLength === 12) {
    this._j0 = [iv.getInt32(), iv.getInt32(), iv.getInt32(), 1];
  } else {
    this._j0 = [0, 0, 0, 0];
    while (iv.length() > 0) {
      this._j0 = this.ghash(
        this._hashSubkey,
        this._j0,
        [iv.getInt32(), iv.getInt32(), iv.getInt32(), iv.getInt32()]
      );
    }
    this._j0 = this.ghash(
      this._hashSubkey,
      this._j0,
      [0, 0].concat(from64To32(ivLength * 8))
    );
  }
  this._inBlock = this._j0.slice(0);
  inc32(this._inBlock);
  this._partialBytes = 0;
  additionalData = forge$z.util.createBuffer(additionalData);
  this._aDataLength = from64To32(additionalData.length() * 8);
  var overflow = additionalData.length() % this.blockSize;
  if (overflow) {
    additionalData.fillWithByte(0, this.blockSize - overflow);
  }
  this._s = [0, 0, 0, 0];
  while (additionalData.length() > 0) {
    this._s = this.ghash(this._hashSubkey, this._s, [
      additionalData.getInt32(),
      additionalData.getInt32(),
      additionalData.getInt32(),
      additionalData.getInt32()
    ]);
  }
};
modes.gcm.prototype.encrypt = function(input, output, finish) {
  var inputLength = input.length();
  if (inputLength === 0) {
    return true;
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  if (this._partialBytes === 0 && inputLength >= this.blockSize) {
    for (var i = 0; i < this._ints; ++i) {
      output.putInt32(this._outBlock[i] ^= input.getInt32());
    }
    this._cipherLength += this.blockSize;
  } else {
    var partialBytes = (this.blockSize - inputLength) % this.blockSize;
    if (partialBytes > 0) {
      partialBytes = this.blockSize - partialBytes;
    }
    this._partialOutput.clear();
    for (var i = 0; i < this._ints; ++i) {
      this._partialOutput.putInt32(input.getInt32() ^ this._outBlock[i]);
    }
    if (partialBytes <= 0 || finish) {
      if (finish) {
        var overflow = inputLength % this.blockSize;
        this._cipherLength += overflow;
        this._partialOutput.truncate(this.blockSize - overflow);
      } else {
        this._cipherLength += this.blockSize;
      }
      for (var i = 0; i < this._ints; ++i) {
        this._outBlock[i] = this._partialOutput.getInt32();
      }
      this._partialOutput.read -= this.blockSize;
    }
    if (this._partialBytes > 0) {
      this._partialOutput.getBytes(this._partialBytes);
    }
    if (partialBytes > 0 && !finish) {
      input.read -= this.blockSize;
      output.putBytes(this._partialOutput.getBytes(
        partialBytes - this._partialBytes
      ));
      this._partialBytes = partialBytes;
      return true;
    }
    output.putBytes(this._partialOutput.getBytes(
      inputLength - this._partialBytes
    ));
    this._partialBytes = 0;
  }
  this._s = this.ghash(this._hashSubkey, this._s, this._outBlock);
  inc32(this._inBlock);
};
modes.gcm.prototype.decrypt = function(input, output, finish) {
  var inputLength = input.length();
  if (inputLength < this.blockSize && !(finish && inputLength > 0)) {
    return true;
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  inc32(this._inBlock);
  this._hashBlock[0] = input.getInt32();
  this._hashBlock[1] = input.getInt32();
  this._hashBlock[2] = input.getInt32();
  this._hashBlock[3] = input.getInt32();
  this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock);
  for (var i = 0; i < this._ints; ++i) {
    output.putInt32(this._outBlock[i] ^ this._hashBlock[i]);
  }
  if (inputLength < this.blockSize) {
    this._cipherLength += inputLength % this.blockSize;
  } else {
    this._cipherLength += this.blockSize;
  }
};
modes.gcm.prototype.afterFinish = function(output, options) {
  var rval = true;
  if (options.decrypt && options.overflow) {
    output.truncate(this.blockSize - options.overflow);
  }
  this.tag = forge$z.util.createBuffer();
  var lengths = this._aDataLength.concat(from64To32(this._cipherLength * 8));
  this._s = this.ghash(this._hashSubkey, this._s, lengths);
  var tag = [];
  this.cipher.encrypt(this._j0, tag);
  for (var i = 0; i < this._ints; ++i) {
    this.tag.putInt32(this._s[i] ^ tag[i]);
  }
  this.tag.truncate(this.tag.length() % (this._tagLength / 8));
  if (options.decrypt && this.tag.bytes() !== this._tag) {
    rval = false;
  }
  return rval;
};
modes.gcm.prototype.multiply = function(x, y) {
  var z_i = [0, 0, 0, 0];
  var v_i = y.slice(0);
  for (var i = 0; i < 128; ++i) {
    var x_i = x[i / 32 | 0] & 1 << 31 - i % 32;
    if (x_i) {
      z_i[0] ^= v_i[0];
      z_i[1] ^= v_i[1];
      z_i[2] ^= v_i[2];
      z_i[3] ^= v_i[3];
    }
    this.pow(v_i, v_i);
  }
  return z_i;
};
modes.gcm.prototype.pow = function(x, out) {
  var lsb = x[3] & 1;
  for (var i = 3; i > 0; --i) {
    out[i] = x[i] >>> 1 | (x[i - 1] & 1) << 31;
  }
  out[0] = x[0] >>> 1;
  if (lsb) {
    out[0] ^= this._R;
  }
};
modes.gcm.prototype.tableMultiply = function(x) {
  var z = [0, 0, 0, 0];
  for (var i = 0; i < 32; ++i) {
    var idx = i / 8 | 0;
    var x_i = x[idx] >>> (7 - i % 8) * 4 & 15;
    var ah = this._m[i][x_i];
    z[0] ^= ah[0];
    z[1] ^= ah[1];
    z[2] ^= ah[2];
    z[3] ^= ah[3];
  }
  return z;
};
modes.gcm.prototype.ghash = function(h, y, x) {
  y[0] ^= x[0];
  y[1] ^= x[1];
  y[2] ^= x[2];
  y[3] ^= x[3];
  return this.tableMultiply(y);
};
modes.gcm.prototype.generateHashTable = function(h, bits) {
  var multiplier = 8 / bits;
  var perInt = 4 * multiplier;
  var size = 16 * multiplier;
  var m = new Array(size);
  for (var i = 0; i < size; ++i) {
    var tmp = [0, 0, 0, 0];
    var idx = i / perInt | 0;
    var shft = (perInt - 1 - i % perInt) * bits;
    tmp[idx] = 1 << bits - 1 << shft;
    m[i] = this.generateSubHashTable(this.multiply(tmp, h), bits);
  }
  return m;
};
modes.gcm.prototype.generateSubHashTable = function(mid, bits) {
  var size = 1 << bits;
  var half = size >>> 1;
  var m = new Array(size);
  m[half] = mid.slice(0);
  var i = half >>> 1;
  while (i > 0) {
    this.pow(m[2 * i], m[i] = []);
    i >>= 1;
  }
  i = 2;
  while (i < half) {
    for (var j = 1; j < i; ++j) {
      var m_i = m[i];
      var m_j = m[j];
      m[i + j] = [
        m_i[0] ^ m_j[0],
        m_i[1] ^ m_j[1],
        m_i[2] ^ m_j[2],
        m_i[3] ^ m_j[3]
      ];
    }
    i *= 2;
  }
  m[0] = [0, 0, 0, 0];
  for (i = half + 1; i < size; ++i) {
    var c = m[i ^ half];
    m[i] = [mid[0] ^ c[0], mid[1] ^ c[1], mid[2] ^ c[2], mid[3] ^ c[3]];
  }
  return m;
};
function transformIV(iv, blockSize) {
  if (typeof iv === "string") {
    iv = forge$z.util.createBuffer(iv);
  }
  if (forge$z.util.isArray(iv) && iv.length > 4) {
    var tmp = iv;
    iv = forge$z.util.createBuffer();
    for (var i = 0; i < tmp.length; ++i) {
      iv.putByte(tmp[i]);
    }
  }
  if (iv.length() < blockSize) {
    throw new Error(
      "Invalid IV length; got " + iv.length() + " bytes and expected " + blockSize + " bytes."
    );
  }
  if (!forge$z.util.isArray(iv)) {
    var ints = [];
    var blocks = blockSize / 4;
    for (var i = 0; i < blocks; ++i) {
      ints.push(iv.getInt32());
    }
    iv = ints;
  }
  return iv;
}
function inc32(block) {
  block[block.length - 1] = block[block.length - 1] + 1 & 4294967295;
}
function from64To32(num) {
  return [num / 4294967296 | 0, num & 4294967295];
}
var forge$y = forge$C;
forge$y.aes = forge$y.aes || {};
forge$y.aes.startEncrypting = function(key, iv, output, mode) {
  var cipher = _createCipher$1({
    key,
    output,
    decrypt: false,
    mode
  });
  cipher.start(iv);
  return cipher;
};
forge$y.aes.createEncryptionCipher = function(key, mode) {
  return _createCipher$1({
    key,
    output: null,
    decrypt: false,
    mode
  });
};
forge$y.aes.startDecrypting = function(key, iv, output, mode) {
  var cipher = _createCipher$1({
    key,
    output,
    decrypt: true,
    mode
  });
  cipher.start(iv);
  return cipher;
};
forge$y.aes.createDecryptionCipher = function(key, mode) {
  return _createCipher$1({
    key,
    output: null,
    decrypt: true,
    mode
  });
};
forge$y.aes.Algorithm = function(name, mode) {
  if (!init) {
    initialize();
  }
  var self2 = this;
  self2.name = name;
  self2.mode = new mode({
    blockSize: 16,
    cipher: {
      encrypt: function(inBlock, outBlock) {
        return _updateBlock$1(self2._w, inBlock, outBlock, false);
      },
      decrypt: function(inBlock, outBlock) {
        return _updateBlock$1(self2._w, inBlock, outBlock, true);
      }
    }
  });
  self2._init = false;
};
forge$y.aes.Algorithm.prototype.initialize = function(options) {
  if (this._init) {
    return;
  }
  var key = options.key;
  var tmp;
  if (typeof key === "string" && (key.length === 16 || key.length === 24 || key.length === 32)) {
    key = forge$y.util.createBuffer(key);
  } else if (forge$y.util.isArray(key) && (key.length === 16 || key.length === 24 || key.length === 32)) {
    tmp = key;
    key = forge$y.util.createBuffer();
    for (var i = 0; i < tmp.length; ++i) {
      key.putByte(tmp[i]);
    }
  }
  if (!forge$y.util.isArray(key)) {
    tmp = key;
    key = [];
    var len = tmp.length();
    if (len === 16 || len === 24 || len === 32) {
      len = len >>> 2;
      for (var i = 0; i < len; ++i) {
        key.push(tmp.getInt32());
      }
    }
  }
  if (!forge$y.util.isArray(key) || !(key.length === 4 || key.length === 6 || key.length === 8)) {
    throw new Error("Invalid key parameter.");
  }
  var mode = this.mode.name;
  var encryptOp = ["CFB", "OFB", "CTR", "GCM"].indexOf(mode) !== -1;
  this._w = _expandKey(key, options.decrypt && !encryptOp);
  this._init = true;
};
forge$y.aes._expandKey = function(key, decrypt) {
  if (!init) {
    initialize();
  }
  return _expandKey(key, decrypt);
};
forge$y.aes._updateBlock = _updateBlock$1;
registerAlgorithm$1("AES-ECB", forge$y.cipher.modes.ecb);
registerAlgorithm$1("AES-CBC", forge$y.cipher.modes.cbc);
registerAlgorithm$1("AES-CFB", forge$y.cipher.modes.cfb);
registerAlgorithm$1("AES-OFB", forge$y.cipher.modes.ofb);
registerAlgorithm$1("AES-CTR", forge$y.cipher.modes.ctr);
registerAlgorithm$1("AES-GCM", forge$y.cipher.modes.gcm);
function registerAlgorithm$1(name, mode) {
  var factory = function() {
    return new forge$y.aes.Algorithm(name, mode);
  };
  forge$y.cipher.registerAlgorithm(name, factory);
}
var init = false;
var Nb = 4;
var sbox;
var isbox;
var rcon;
var mix;
var imix;
function initialize() {
  init = true;
  rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var xtime = new Array(256);
  for (var i = 0; i < 128; ++i) {
    xtime[i] = i << 1;
    xtime[i + 128] = i + 128 << 1 ^ 283;
  }
  sbox = new Array(256);
  isbox = new Array(256);
  mix = new Array(4);
  imix = new Array(4);
  for (var i = 0; i < 4; ++i) {
    mix[i] = new Array(256);
    imix[i] = new Array(256);
  }
  var e = 0, ei = 0, e2, e4, e8, sx, sx2, me, ime;
  for (var i = 0; i < 256; ++i) {
    sx = ei ^ ei << 1 ^ ei << 2 ^ ei << 3 ^ ei << 4;
    sx = sx >> 8 ^ sx & 255 ^ 99;
    sbox[e] = sx;
    isbox[sx] = e;
    sx2 = xtime[sx];
    e2 = xtime[e];
    e4 = xtime[e2];
    e8 = xtime[e4];
    me = sx2 << 24 ^ // 2
    sx << 16 ^ // 1
    sx << 8 ^ // 1
    (sx ^ sx2);
    ime = (e2 ^ e4 ^ e8) << 24 ^ // E (14)
    (e ^ e8) << 16 ^ // 9
    (e ^ e4 ^ e8) << 8 ^ // D (13)
    (e ^ e2 ^ e8);
    for (var n = 0; n < 4; ++n) {
      mix[n][e] = me;
      imix[n][sx] = ime;
      me = me << 24 | me >>> 8;
      ime = ime << 24 | ime >>> 8;
    }
    if (e === 0) {
      e = ei = 1;
    } else {
      e = e2 ^ xtime[xtime[xtime[e2 ^ e8]]];
      ei ^= xtime[xtime[ei]];
    }
  }
}
function _expandKey(key, decrypt) {
  var w = key.slice(0);
  var temp, iNk = 1;
  var Nk = w.length;
  var Nr1 = Nk + 6 + 1;
  var end = Nb * Nr1;
  for (var i = Nk; i < end; ++i) {
    temp = w[i - 1];
    if (i % Nk === 0) {
      temp = sbox[temp >>> 16 & 255] << 24 ^ sbox[temp >>> 8 & 255] << 16 ^ sbox[temp & 255] << 8 ^ sbox[temp >>> 24] ^ rcon[iNk] << 24;
      iNk++;
    } else if (Nk > 6 && i % Nk === 4) {
      temp = sbox[temp >>> 24] << 24 ^ sbox[temp >>> 16 & 255] << 16 ^ sbox[temp >>> 8 & 255] << 8 ^ sbox[temp & 255];
    }
    w[i] = w[i - Nk] ^ temp;
  }
  if (decrypt) {
    var tmp;
    var m0 = imix[0];
    var m1 = imix[1];
    var m2 = imix[2];
    var m3 = imix[3];
    var wnew = w.slice(0);
    end = w.length;
    for (var i = 0, wi = end - Nb; i < end; i += Nb, wi -= Nb) {
      if (i === 0 || i === end - Nb) {
        wnew[i] = w[wi];
        wnew[i + 1] = w[wi + 3];
        wnew[i + 2] = w[wi + 2];
        wnew[i + 3] = w[wi + 1];
      } else {
        for (var n = 0; n < Nb; ++n) {
          tmp = w[wi + n];
          wnew[i + (3 & -n)] = m0[sbox[tmp >>> 24]] ^ m1[sbox[tmp >>> 16 & 255]] ^ m2[sbox[tmp >>> 8 & 255]] ^ m3[sbox[tmp & 255]];
        }
      }
    }
    w = wnew;
  }
  return w;
}
function _updateBlock$1(w, input, output, decrypt) {
  var Nr = w.length / 4 - 1;
  var m0, m1, m2, m3, sub;
  if (decrypt) {
    m0 = imix[0];
    m1 = imix[1];
    m2 = imix[2];
    m3 = imix[3];
    sub = isbox;
  } else {
    m0 = mix[0];
    m1 = mix[1];
    m2 = mix[2];
    m3 = mix[3];
    sub = sbox;
  }
  var a, b, c, d, a2, b2, c2;
  a = input[0] ^ w[0];
  b = input[decrypt ? 3 : 1] ^ w[1];
  c = input[2] ^ w[2];
  d = input[decrypt ? 1 : 3] ^ w[3];
  var i = 3;
  for (var round = 1; round < Nr; ++round) {
    a2 = m0[a >>> 24] ^ m1[b >>> 16 & 255] ^ m2[c >>> 8 & 255] ^ m3[d & 255] ^ w[++i];
    b2 = m0[b >>> 24] ^ m1[c >>> 16 & 255] ^ m2[d >>> 8 & 255] ^ m3[a & 255] ^ w[++i];
    c2 = m0[c >>> 24] ^ m1[d >>> 16 & 255] ^ m2[a >>> 8 & 255] ^ m3[b & 255] ^ w[++i];
    d = m0[d >>> 24] ^ m1[a >>> 16 & 255] ^ m2[b >>> 8 & 255] ^ m3[c & 255] ^ w[++i];
    a = a2;
    b = b2;
    c = c2;
  }
  output[0] = sub[a >>> 24] << 24 ^ sub[b >>> 16 & 255] << 16 ^ sub[c >>> 8 & 255] << 8 ^ sub[d & 255] ^ w[++i];
  output[decrypt ? 3 : 1] = sub[b >>> 24] << 24 ^ sub[c >>> 16 & 255] << 16 ^ sub[d >>> 8 & 255] << 8 ^ sub[a & 255] ^ w[++i];
  output[2] = sub[c >>> 24] << 24 ^ sub[d >>> 16 & 255] << 16 ^ sub[a >>> 8 & 255] << 8 ^ sub[b & 255] ^ w[++i];
  output[decrypt ? 1 : 3] = sub[d >>> 24] << 24 ^ sub[a >>> 16 & 255] << 16 ^ sub[b >>> 8 & 255] << 8 ^ sub[c & 255] ^ w[++i];
}
function _createCipher$1(options) {
  options = options || {};
  var mode = (options.mode || "CBC").toUpperCase();
  var algorithm = "AES-" + mode;
  var cipher;
  if (options.decrypt) {
    cipher = forge$y.cipher.createDecipher(algorithm, options.key);
  } else {
    cipher = forge$y.cipher.createCipher(algorithm, options.key);
  }
  var start = cipher.start;
  cipher.start = function(iv, options2) {
    var output = null;
    if (options2 instanceof forge$y.util.ByteBuffer) {
      output = options2;
      options2 = {};
    }
    options2 = options2 || {};
    options2.output = output;
    options2.iv = iv;
    start.call(cipher, options2);
  };
  return cipher;
}
var forge$x = forge$C;
forge$x.pki = forge$x.pki || {};
var oids$2 = forge$x.pki.oids = forge$x.oids = forge$x.oids || {};
function _IN(id, name) {
  oids$2[id] = name;
  oids$2[name] = id;
}
function _I_(id, name) {
  oids$2[id] = name;
}
_IN("1.2.840.113549.1.1.1", "rsaEncryption");
_IN("1.2.840.113549.1.1.4", "md5WithRSAEncryption");
_IN("1.2.840.113549.1.1.5", "sha1WithRSAEncryption");
_IN("1.2.840.113549.1.1.7", "RSAES-OAEP");
_IN("1.2.840.113549.1.1.8", "mgf1");
_IN("1.2.840.113549.1.1.9", "pSpecified");
_IN("1.2.840.113549.1.1.10", "RSASSA-PSS");
_IN("1.2.840.113549.1.1.11", "sha256WithRSAEncryption");
_IN("1.2.840.113549.1.1.12", "sha384WithRSAEncryption");
_IN("1.2.840.113549.1.1.13", "sha512WithRSAEncryption");
_IN("1.3.101.112", "EdDSA25519");
_IN("1.2.840.10040.4.3", "dsa-with-sha1");
_IN("1.3.14.3.2.7", "desCBC");
_IN("1.3.14.3.2.26", "sha1");
_IN("1.3.14.3.2.29", "sha1WithRSASignature");
_IN("2.16.840.1.101.3.4.2.1", "sha256");
_IN("2.16.840.1.101.3.4.2.2", "sha384");
_IN("2.16.840.1.101.3.4.2.3", "sha512");
_IN("2.16.840.1.101.3.4.2.4", "sha224");
_IN("2.16.840.1.101.3.4.2.5", "sha512-224");
_IN("2.16.840.1.101.3.4.2.6", "sha512-256");
_IN("1.2.840.113549.2.2", "md2");
_IN("1.2.840.113549.2.5", "md5");
_IN("1.2.840.113549.1.7.1", "data");
_IN("1.2.840.113549.1.7.2", "signedData");
_IN("1.2.840.113549.1.7.3", "envelopedData");
_IN("1.2.840.113549.1.7.4", "signedAndEnvelopedData");
_IN("1.2.840.113549.1.7.5", "digestedData");
_IN("1.2.840.113549.1.7.6", "encryptedData");
_IN("1.2.840.113549.1.9.1", "emailAddress");
_IN("1.2.840.113549.1.9.2", "unstructuredName");
_IN("1.2.840.113549.1.9.3", "contentType");
_IN("1.2.840.113549.1.9.4", "messageDigest");
_IN("1.2.840.113549.1.9.5", "signingTime");
_IN("1.2.840.113549.1.9.6", "counterSignature");
_IN("1.2.840.113549.1.9.7", "challengePassword");
_IN("1.2.840.113549.1.9.8", "unstructuredAddress");
_IN("1.2.840.113549.1.9.14", "extensionRequest");
_IN("1.2.840.113549.1.9.20", "friendlyName");
_IN("1.2.840.113549.1.9.21", "localKeyId");
_IN("1.2.840.113549.1.9.22.1", "x509Certificate");
_IN("1.2.840.113549.1.12.10.1.1", "keyBag");
_IN("1.2.840.113549.1.12.10.1.2", "pkcs8ShroudedKeyBag");
_IN("1.2.840.113549.1.12.10.1.3", "certBag");
_IN("1.2.840.113549.1.12.10.1.4", "crlBag");
_IN("1.2.840.113549.1.12.10.1.5", "secretBag");
_IN("1.2.840.113549.1.12.10.1.6", "safeContentsBag");
_IN("1.2.840.113549.1.5.13", "pkcs5PBES2");
_IN("1.2.840.113549.1.5.12", "pkcs5PBKDF2");
_IN("1.2.840.113549.1.12.1.1", "pbeWithSHAAnd128BitRC4");
_IN("1.2.840.113549.1.12.1.2", "pbeWithSHAAnd40BitRC4");
_IN("1.2.840.113549.1.12.1.3", "pbeWithSHAAnd3-KeyTripleDES-CBC");
_IN("1.2.840.113549.1.12.1.4", "pbeWithSHAAnd2-KeyTripleDES-CBC");
_IN("1.2.840.113549.1.12.1.5", "pbeWithSHAAnd128BitRC2-CBC");
_IN("1.2.840.113549.1.12.1.6", "pbewithSHAAnd40BitRC2-CBC");
_IN("1.2.840.113549.2.7", "hmacWithSHA1");
_IN("1.2.840.113549.2.8", "hmacWithSHA224");
_IN("1.2.840.113549.2.9", "hmacWithSHA256");
_IN("1.2.840.113549.2.10", "hmacWithSHA384");
_IN("1.2.840.113549.2.11", "hmacWithSHA512");
_IN("1.2.840.113549.3.7", "des-EDE3-CBC");
_IN("2.16.840.1.101.3.4.1.2", "aes128-CBC");
_IN("2.16.840.1.101.3.4.1.22", "aes192-CBC");
_IN("2.16.840.1.101.3.4.1.42", "aes256-CBC");
_IN("2.5.4.3", "commonName");
_IN("2.5.4.4", "surname");
_IN("2.5.4.5", "serialNumber");
_IN("2.5.4.6", "countryName");
_IN("2.5.4.7", "localityName");
_IN("2.5.4.8", "stateOrProvinceName");
_IN("2.5.4.9", "streetAddress");
_IN("2.5.4.10", "organizationName");
_IN("2.5.4.11", "organizationalUnitName");
_IN("2.5.4.12", "title");
_IN("2.5.4.13", "description");
_IN("2.5.4.15", "businessCategory");
_IN("2.5.4.17", "postalCode");
_IN("2.5.4.42", "givenName");
_IN("1.3.6.1.4.1.311.60.2.1.2", "jurisdictionOfIncorporationStateOrProvinceName");
_IN("1.3.6.1.4.1.311.60.2.1.3", "jurisdictionOfIncorporationCountryName");
_IN("2.16.840.1.113730.1.1", "nsCertType");
_IN("2.16.840.1.113730.1.13", "nsComment");
_I_("2.5.29.1", "authorityKeyIdentifier");
_I_("2.5.29.2", "keyAttributes");
_I_("2.5.29.3", "certificatePolicies");
_I_("2.5.29.4", "keyUsageRestriction");
_I_("2.5.29.5", "policyMapping");
_I_("2.5.29.6", "subtreesConstraint");
_I_("2.5.29.7", "subjectAltName");
_I_("2.5.29.8", "issuerAltName");
_I_("2.5.29.9", "subjectDirectoryAttributes");
_I_("2.5.29.10", "basicConstraints");
_I_("2.5.29.11", "nameConstraints");
_I_("2.5.29.12", "policyConstraints");
_I_("2.5.29.13", "basicConstraints");
_IN("2.5.29.14", "subjectKeyIdentifier");
_IN("2.5.29.15", "keyUsage");
_I_("2.5.29.16", "privateKeyUsagePeriod");
_IN("2.5.29.17", "subjectAltName");
_IN("2.5.29.18", "issuerAltName");
_IN("2.5.29.19", "basicConstraints");
_I_("2.5.29.20", "cRLNumber");
_I_("2.5.29.21", "cRLReason");
_I_("2.5.29.22", "expirationDate");
_I_("2.5.29.23", "instructionCode");
_I_("2.5.29.24", "invalidityDate");
_I_("2.5.29.25", "cRLDistributionPoints");
_I_("2.5.29.26", "issuingDistributionPoint");
_I_("2.5.29.27", "deltaCRLIndicator");
_I_("2.5.29.28", "issuingDistributionPoint");
_I_("2.5.29.29", "certificateIssuer");
_I_("2.5.29.30", "nameConstraints");
_IN("2.5.29.31", "cRLDistributionPoints");
_IN("2.5.29.32", "certificatePolicies");
_I_("2.5.29.33", "policyMappings");
_I_("2.5.29.34", "policyConstraints");
_IN("2.5.29.35", "authorityKeyIdentifier");
_I_("2.5.29.36", "policyConstraints");
_IN("2.5.29.37", "extKeyUsage");
_I_("2.5.29.46", "freshestCRL");
_I_("2.5.29.54", "inhibitAnyPolicy");
_IN("1.3.6.1.4.1.11129.2.4.2", "timestampList");
_IN("1.3.6.1.5.5.7.1.1", "authorityInfoAccess");
_IN("1.3.6.1.5.5.7.3.1", "serverAuth");
_IN("1.3.6.1.5.5.7.3.2", "clientAuth");
_IN("1.3.6.1.5.5.7.3.3", "codeSigning");
_IN("1.3.6.1.5.5.7.3.4", "emailProtection");
_IN("1.3.6.1.5.5.7.3.8", "timeStamping");
var forge$w = forge$C;
var asn1$8 = forge$w.asn1 = forge$w.asn1 || {};
asn1$8.Class = {
  UNIVERSAL: 0,
  APPLICATION: 64,
  CONTEXT_SPECIFIC: 128,
  PRIVATE: 192
};
asn1$8.Type = {
  NONE: 0,
  BOOLEAN: 1,
  INTEGER: 2,
  BITSTRING: 3,
  OCTETSTRING: 4,
  NULL: 5,
  OID: 6,
  ODESC: 7,
  EXTERNAL: 8,
  REAL: 9,
  ENUMERATED: 10,
  EMBEDDED: 11,
  UTF8: 12,
  ROID: 13,
  SEQUENCE: 16,
  SET: 17,
  PRINTABLESTRING: 19,
  IA5STRING: 22,
  UTCTIME: 23,
  GENERALIZEDTIME: 24,
  BMPSTRING: 30
};
asn1$8.create = function(tagClass, type, constructed, value, options) {
  if (forge$w.util.isArray(value)) {
    var tmp = [];
    for (var i = 0; i < value.length; ++i) {
      if (value[i] !== void 0) {
        tmp.push(value[i]);
      }
    }
    value = tmp;
  }
  var obj = {
    tagClass,
    type,
    constructed,
    composed: constructed || forge$w.util.isArray(value),
    value
  };
  if (options && "bitStringContents" in options) {
    obj.bitStringContents = options.bitStringContents;
    obj.original = asn1$8.copy(obj);
  }
  return obj;
};
asn1$8.copy = function(obj, options) {
  var copy;
  if (forge$w.util.isArray(obj)) {
    copy = [];
    for (var i = 0; i < obj.length; ++i) {
      copy.push(asn1$8.copy(obj[i], options));
    }
    return copy;
  }
  if (typeof obj === "string") {
    return obj;
  }
  copy = {
    tagClass: obj.tagClass,
    type: obj.type,
    constructed: obj.constructed,
    composed: obj.composed,
    value: asn1$8.copy(obj.value, options)
  };
  if (options && !options.excludeBitStringContents) {
    copy.bitStringContents = obj.bitStringContents;
  }
  return copy;
};
asn1$8.equals = function(obj1, obj2, options) {
  if (forge$w.util.isArray(obj1)) {
    if (!forge$w.util.isArray(obj2)) {
      return false;
    }
    if (obj1.length !== obj2.length) {
      return false;
    }
    for (var i = 0; i < obj1.length; ++i) {
      if (!asn1$8.equals(obj1[i], obj2[i])) {
        return false;
      }
    }
    return true;
  }
  if (typeof obj1 !== typeof obj2) {
    return false;
  }
  if (typeof obj1 === "string") {
    return obj1 === obj2;
  }
  var equal = obj1.tagClass === obj2.tagClass && obj1.type === obj2.type && obj1.constructed === obj2.constructed && obj1.composed === obj2.composed && asn1$8.equals(obj1.value, obj2.value);
  if (options && options.includeBitStringContents) {
    equal = equal && obj1.bitStringContents === obj2.bitStringContents;
  }
  return equal;
};
asn1$8.getBerValueLength = function(b) {
  var b2 = b.getByte();
  if (b2 === 128) {
    return void 0;
  }
  var length;
  var longForm = b2 & 128;
  if (!longForm) {
    length = b2;
  } else {
    length = b.getInt((b2 & 127) << 3);
  }
  return length;
};
function _checkBufferLength(bytes, remaining, n) {
  if (n > remaining) {
    var error = new Error("Too few bytes to parse DER.");
    error.available = bytes.length();
    error.remaining = remaining;
    error.requested = n;
    throw error;
  }
}
var _getValueLength = function(bytes, remaining) {
  var b2 = bytes.getByte();
  remaining--;
  if (b2 === 128) {
    return void 0;
  }
  var length;
  var longForm = b2 & 128;
  if (!longForm) {
    length = b2;
  } else {
    var longFormBytes = b2 & 127;
    _checkBufferLength(bytes, remaining, longFormBytes);
    length = bytes.getInt(longFormBytes << 3);
  }
  if (length < 0) {
    throw new Error("Negative length: " + length);
  }
  return length;
};
asn1$8.fromDer = function(bytes, options) {
  if (options === void 0) {
    options = {
      strict: true,
      parseAllBytes: true,
      decodeBitStrings: true
    };
  }
  if (typeof options === "boolean") {
    options = {
      strict: options,
      parseAllBytes: true,
      decodeBitStrings: true
    };
  }
  if (!("strict" in options)) {
    options.strict = true;
  }
  if (!("parseAllBytes" in options)) {
    options.parseAllBytes = true;
  }
  if (!("decodeBitStrings" in options)) {
    options.decodeBitStrings = true;
  }
  if (typeof bytes === "string") {
    bytes = forge$w.util.createBuffer(bytes);
  }
  var byteCount = bytes.length();
  var value = _fromDer(bytes, bytes.length(), 0, options);
  if (options.parseAllBytes && bytes.length() !== 0) {
    var error = new Error("Unparsed DER bytes remain after ASN.1 parsing.");
    error.byteCount = byteCount;
    error.remaining = bytes.length();
    throw error;
  }
  return value;
};
function _fromDer(bytes, remaining, depth, options) {
  var start;
  _checkBufferLength(bytes, remaining, 2);
  var b1 = bytes.getByte();
  remaining--;
  var tagClass = b1 & 192;
  var type = b1 & 31;
  start = bytes.length();
  var length = _getValueLength(bytes, remaining);
  remaining -= start - bytes.length();
  if (length !== void 0 && length > remaining) {
    if (options.strict) {
      var error = new Error("Too few bytes to read ASN.1 value.");
      error.available = bytes.length();
      error.remaining = remaining;
      error.requested = length;
      throw error;
    }
    length = remaining;
  }
  var value;
  var bitStringContents;
  var constructed = (b1 & 32) === 32;
  if (constructed) {
    value = [];
    if (length === void 0) {
      for (; ; ) {
        _checkBufferLength(bytes, remaining, 2);
        if (bytes.bytes(2) === String.fromCharCode(0, 0)) {
          bytes.getBytes(2);
          remaining -= 2;
          break;
        }
        start = bytes.length();
        value.push(_fromDer(bytes, remaining, depth + 1, options));
        remaining -= start - bytes.length();
      }
    } else {
      while (length > 0) {
        start = bytes.length();
        value.push(_fromDer(bytes, length, depth + 1, options));
        remaining -= start - bytes.length();
        length -= start - bytes.length();
      }
    }
  }
  if (value === void 0 && tagClass === asn1$8.Class.UNIVERSAL && type === asn1$8.Type.BITSTRING) {
    bitStringContents = bytes.bytes(length);
  }
  if (value === void 0 && options.decodeBitStrings && tagClass === asn1$8.Class.UNIVERSAL && // FIXME: OCTET STRINGs not yet supported here
  // .. other parts of forge expect to decode OCTET STRINGs manually
  type === asn1$8.Type.BITSTRING && length > 1) {
    var savedRead = bytes.read;
    var savedRemaining = remaining;
    var unused = 0;
    if (type === asn1$8.Type.BITSTRING) {
      _checkBufferLength(bytes, remaining, 1);
      unused = bytes.getByte();
      remaining--;
    }
    if (unused === 0) {
      try {
        start = bytes.length();
        var subOptions = {
          // enforce strict mode to avoid parsing ASN.1 from plain data
          strict: true,
          decodeBitStrings: true
        };
        var composed = _fromDer(bytes, remaining, depth + 1, subOptions);
        var used = start - bytes.length();
        remaining -= used;
        if (type == asn1$8.Type.BITSTRING) {
          used++;
        }
        var tc = composed.tagClass;
        if (used === length && (tc === asn1$8.Class.UNIVERSAL || tc === asn1$8.Class.CONTEXT_SPECIFIC)) {
          value = [composed];
        }
      } catch (ex) {
      }
    }
    if (value === void 0) {
      bytes.read = savedRead;
      remaining = savedRemaining;
    }
  }
  if (value === void 0) {
    if (length === void 0) {
      if (options.strict) {
        throw new Error("Non-constructed ASN.1 object of indefinite length.");
      }
      length = remaining;
    }
    if (type === asn1$8.Type.BMPSTRING) {
      value = "";
      for (; length > 0; length -= 2) {
        _checkBufferLength(bytes, remaining, 2);
        value += String.fromCharCode(bytes.getInt16());
        remaining -= 2;
      }
    } else {
      value = bytes.getBytes(length);
      remaining -= length;
    }
  }
  var asn1Options = bitStringContents === void 0 ? null : {
    bitStringContents
  };
  return asn1$8.create(tagClass, type, constructed, value, asn1Options);
}
asn1$8.toDer = function(obj) {
  var bytes = forge$w.util.createBuffer();
  var b1 = obj.tagClass | obj.type;
  var value = forge$w.util.createBuffer();
  var useBitStringContents = false;
  if ("bitStringContents" in obj) {
    useBitStringContents = true;
    if (obj.original) {
      useBitStringContents = asn1$8.equals(obj, obj.original);
    }
  }
  if (useBitStringContents) {
    value.putBytes(obj.bitStringContents);
  } else if (obj.composed) {
    if (obj.constructed) {
      b1 |= 32;
    } else {
      value.putByte(0);
    }
    for (var i = 0; i < obj.value.length; ++i) {
      if (obj.value[i] !== void 0) {
        value.putBuffer(asn1$8.toDer(obj.value[i]));
      }
    }
  } else {
    if (obj.type === asn1$8.Type.BMPSTRING) {
      for (var i = 0; i < obj.value.length; ++i) {
        value.putInt16(obj.value.charCodeAt(i));
      }
    } else {
      if (obj.type === asn1$8.Type.INTEGER && obj.value.length > 1 && // leading 0x00 for positive integer
      (obj.value.charCodeAt(0) === 0 && (obj.value.charCodeAt(1) & 128) === 0 || // leading 0xFF for negative integer
      obj.value.charCodeAt(0) === 255 && (obj.value.charCodeAt(1) & 128) === 128)) {
        value.putBytes(obj.value.substr(1));
      } else {
        value.putBytes(obj.value);
      }
    }
  }
  bytes.putByte(b1);
  if (value.length() <= 127) {
    bytes.putByte(value.length() & 127);
  } else {
    var len = value.length();
    var lenBytes = "";
    do {
      lenBytes += String.fromCharCode(len & 255);
      len = len >>> 8;
    } while (len > 0);
    bytes.putByte(lenBytes.length | 128);
    for (var i = lenBytes.length - 1; i >= 0; --i) {
      bytes.putByte(lenBytes.charCodeAt(i));
    }
  }
  bytes.putBuffer(value);
  return bytes;
};
asn1$8.oidToDer = function(oid) {
  var values = oid.split(".");
  var bytes = forge$w.util.createBuffer();
  bytes.putByte(40 * parseInt(values[0], 10) + parseInt(values[1], 10));
  var last, valueBytes, value, b;
  for (var i = 2; i < values.length; ++i) {
    last = true;
    valueBytes = [];
    value = parseInt(values[i], 10);
    do {
      b = value & 127;
      value = value >>> 7;
      if (!last) {
        b |= 128;
      }
      valueBytes.push(b);
      last = false;
    } while (value > 0);
    for (var n = valueBytes.length - 1; n >= 0; --n) {
      bytes.putByte(valueBytes[n]);
    }
  }
  return bytes;
};
asn1$8.derToOid = function(bytes) {
  var oid;
  if (typeof bytes === "string") {
    bytes = forge$w.util.createBuffer(bytes);
  }
  var b = bytes.getByte();
  oid = Math.floor(b / 40) + "." + b % 40;
  var value = 0;
  while (bytes.length() > 0) {
    b = bytes.getByte();
    value = value << 7;
    if (b & 128) {
      value += b & 127;
    } else {
      oid += "." + (value + b);
      value = 0;
    }
  }
  return oid;
};
asn1$8.utcTimeToDate = function(utc) {
  var date = /* @__PURE__ */ new Date();
  var year = parseInt(utc.substr(0, 2), 10);
  year = year >= 50 ? 1900 + year : 2e3 + year;
  var MM = parseInt(utc.substr(2, 2), 10) - 1;
  var DD = parseInt(utc.substr(4, 2), 10);
  var hh = parseInt(utc.substr(6, 2), 10);
  var mm = parseInt(utc.substr(8, 2), 10);
  var ss = 0;
  if (utc.length > 11) {
    var c = utc.charAt(10);
    var end = 10;
    if (c !== "+" && c !== "-") {
      ss = parseInt(utc.substr(10, 2), 10);
      end += 2;
    }
  }
  date.setUTCFullYear(year, MM, DD);
  date.setUTCHours(hh, mm, ss, 0);
  if (end) {
    c = utc.charAt(end);
    if (c === "+" || c === "-") {
      var hhoffset = parseInt(utc.substr(end + 1, 2), 10);
      var mmoffset = parseInt(utc.substr(end + 4, 2), 10);
      var offset = hhoffset * 60 + mmoffset;
      offset *= 6e4;
      if (c === "+") {
        date.setTime(+date - offset);
      } else {
        date.setTime(+date + offset);
      }
    }
  }
  return date;
};
asn1$8.generalizedTimeToDate = function(gentime) {
  var date = /* @__PURE__ */ new Date();
  var YYYY = parseInt(gentime.substr(0, 4), 10);
  var MM = parseInt(gentime.substr(4, 2), 10) - 1;
  var DD = parseInt(gentime.substr(6, 2), 10);
  var hh = parseInt(gentime.substr(8, 2), 10);
  var mm = parseInt(gentime.substr(10, 2), 10);
  var ss = parseInt(gentime.substr(12, 2), 10);
  var fff = 0;
  var offset = 0;
  var isUTC = false;
  if (gentime.charAt(gentime.length - 1) === "Z") {
    isUTC = true;
  }
  var end = gentime.length - 5, c = gentime.charAt(end);
  if (c === "+" || c === "-") {
    var hhoffset = parseInt(gentime.substr(end + 1, 2), 10);
    var mmoffset = parseInt(gentime.substr(end + 4, 2), 10);
    offset = hhoffset * 60 + mmoffset;
    offset *= 6e4;
    if (c === "+") {
      offset *= -1;
    }
    isUTC = true;
  }
  if (gentime.charAt(14) === ".") {
    fff = parseFloat(gentime.substr(14), 10) * 1e3;
  }
  if (isUTC) {
    date.setUTCFullYear(YYYY, MM, DD);
    date.setUTCHours(hh, mm, ss, fff);
    date.setTime(+date + offset);
  } else {
    date.setFullYear(YYYY, MM, DD);
    date.setHours(hh, mm, ss, fff);
  }
  return date;
};
asn1$8.dateToUtcTime = function(date) {
  if (typeof date === "string") {
    return date;
  }
  var rval = "";
  var format = [];
  format.push(("" + date.getUTCFullYear()).substr(2));
  format.push("" + (date.getUTCMonth() + 1));
  format.push("" + date.getUTCDate());
  format.push("" + date.getUTCHours());
  format.push("" + date.getUTCMinutes());
  format.push("" + date.getUTCSeconds());
  for (var i = 0; i < format.length; ++i) {
    if (format[i].length < 2) {
      rval += "0";
    }
    rval += format[i];
  }
  rval += "Z";
  return rval;
};
asn1$8.dateToGeneralizedTime = function(date) {
  if (typeof date === "string") {
    return date;
  }
  var rval = "";
  var format = [];
  format.push("" + date.getUTCFullYear());
  format.push("" + (date.getUTCMonth() + 1));
  format.push("" + date.getUTCDate());
  format.push("" + date.getUTCHours());
  format.push("" + date.getUTCMinutes());
  format.push("" + date.getUTCSeconds());
  for (var i = 0; i < format.length; ++i) {
    if (format[i].length < 2) {
      rval += "0";
    }
    rval += format[i];
  }
  rval += "Z";
  return rval;
};
asn1$8.integerToDer = function(x) {
  var rval = forge$w.util.createBuffer();
  if (x >= -128 && x < 128) {
    return rval.putSignedInt(x, 8);
  }
  if (x >= -32768 && x < 32768) {
    return rval.putSignedInt(x, 16);
  }
  if (x >= -8388608 && x < 8388608) {
    return rval.putSignedInt(x, 24);
  }
  if (x >= -2147483648 && x < 2147483648) {
    return rval.putSignedInt(x, 32);
  }
  var error = new Error("Integer too large; max is 32-bits.");
  error.integer = x;
  throw error;
};
asn1$8.derToInteger = function(bytes) {
  if (typeof bytes === "string") {
    bytes = forge$w.util.createBuffer(bytes);
  }
  var n = bytes.length() * 8;
  if (n > 32) {
    throw new Error("Integer too large; max is 32-bits.");
  }
  return bytes.getSignedInt(n);
};
asn1$8.validate = function(obj, v, capture, errors) {
  var rval = false;
  if ((obj.tagClass === v.tagClass || typeof v.tagClass === "undefined") && (obj.type === v.type || typeof v.type === "undefined")) {
    if (obj.constructed === v.constructed || typeof v.constructed === "undefined") {
      rval = true;
      if (v.value && forge$w.util.isArray(v.value)) {
        var j = 0;
        for (var i = 0; rval && i < v.value.length; ++i) {
          rval = v.value[i].optional || false;
          if (obj.value[j]) {
            rval = asn1$8.validate(obj.value[j], v.value[i], capture, errors);
            if (rval) {
              ++j;
            } else if (v.value[i].optional) {
              rval = true;
            }
          }
          if (!rval && errors) {
            errors.push(
              "[" + v.name + '] Tag class "' + v.tagClass + '", type "' + v.type + '" expected value length "' + v.value.length + '", got "' + obj.value.length + '"'
            );
          }
        }
      }
      if (rval && capture) {
        if (v.capture) {
          capture[v.capture] = obj.value;
        }
        if (v.captureAsn1) {
          capture[v.captureAsn1] = obj;
        }
        if (v.captureBitStringContents && "bitStringContents" in obj) {
          capture[v.captureBitStringContents] = obj.bitStringContents;
        }
        if (v.captureBitStringValue && "bitStringContents" in obj) {
          if (obj.bitStringContents.length < 2) {
            capture[v.captureBitStringValue] = "";
          } else {
            var unused = obj.bitStringContents.charCodeAt(0);
            if (unused !== 0) {
              throw new Error(
                "captureBitStringValue only supported for zero unused bits"
              );
            }
            capture[v.captureBitStringValue] = obj.bitStringContents.slice(1);
          }
        }
      }
    } else if (errors) {
      errors.push(
        "[" + v.name + '] Expected constructed "' + v.constructed + '", got "' + obj.constructed + '"'
      );
    }
  } else if (errors) {
    if (obj.tagClass !== v.tagClass) {
      errors.push(
        "[" + v.name + '] Expected tag class "' + v.tagClass + '", got "' + obj.tagClass + '"'
      );
    }
    if (obj.type !== v.type) {
      errors.push(
        "[" + v.name + '] Expected type "' + v.type + '", got "' + obj.type + '"'
      );
    }
  }
  return rval;
};
var _nonLatinRegex = /[^\\u0000-\\u00ff]/;
asn1$8.prettyPrint = function(obj, level, indentation) {
  var rval = "";
  level = level || 0;
  indentation = indentation || 2;
  if (level > 0) {
    rval += "\n";
  }
  var indent = "";
  for (var i = 0; i < level * indentation; ++i) {
    indent += " ";
  }
  rval += indent + "Tag: ";
  switch (obj.tagClass) {
    case asn1$8.Class.UNIVERSAL:
      rval += "Universal:";
      break;
    case asn1$8.Class.APPLICATION:
      rval += "Application:";
      break;
    case asn1$8.Class.CONTEXT_SPECIFIC:
      rval += "Context-Specific:";
      break;
    case asn1$8.Class.PRIVATE:
      rval += "Private:";
      break;
  }
  if (obj.tagClass === asn1$8.Class.UNIVERSAL) {
    rval += obj.type;
    switch (obj.type) {
      case asn1$8.Type.NONE:
        rval += " (None)";
        break;
      case asn1$8.Type.BOOLEAN:
        rval += " (Boolean)";
        break;
      case asn1$8.Type.INTEGER:
        rval += " (Integer)";
        break;
      case asn1$8.Type.BITSTRING:
        rval += " (Bit string)";
        break;
      case asn1$8.Type.OCTETSTRING:
        rval += " (Octet string)";
        break;
      case asn1$8.Type.NULL:
        rval += " (Null)";
        break;
      case asn1$8.Type.OID:
        rval += " (Object Identifier)";
        break;
      case asn1$8.Type.ODESC:
        rval += " (Object Descriptor)";
        break;
      case asn1$8.Type.EXTERNAL:
        rval += " (External or Instance of)";
        break;
      case asn1$8.Type.REAL:
        rval += " (Real)";
        break;
      case asn1$8.Type.ENUMERATED:
        rval += " (Enumerated)";
        break;
      case asn1$8.Type.EMBEDDED:
        rval += " (Embedded PDV)";
        break;
      case asn1$8.Type.UTF8:
        rval += " (UTF8)";
        break;
      case asn1$8.Type.ROID:
        rval += " (Relative Object Identifier)";
        break;
      case asn1$8.Type.SEQUENCE:
        rval += " (Sequence)";
        break;
      case asn1$8.Type.SET:
        rval += " (Set)";
        break;
      case asn1$8.Type.PRINTABLESTRING:
        rval += " (Printable String)";
        break;
      case asn1$8.Type.IA5String:
        rval += " (IA5String (ASCII))";
        break;
      case asn1$8.Type.UTCTIME:
        rval += " (UTC time)";
        break;
      case asn1$8.Type.GENERALIZEDTIME:
        rval += " (Generalized time)";
        break;
      case asn1$8.Type.BMPSTRING:
        rval += " (BMP String)";
        break;
    }
  } else {
    rval += obj.type;
  }
  rval += "\n";
  rval += indent + "Constructed: " + obj.constructed + "\n";
  if (obj.composed) {
    var subvalues = 0;
    var sub = "";
    for (var i = 0; i < obj.value.length; ++i) {
      if (obj.value[i] !== void 0) {
        subvalues += 1;
        sub += asn1$8.prettyPrint(obj.value[i], level + 1, indentation);
        if (i + 1 < obj.value.length) {
          sub += ",";
        }
      }
    }
    rval += indent + "Sub values: " + subvalues + sub;
  } else {
    rval += indent + "Value: ";
    if (obj.type === asn1$8.Type.OID) {
      var oid = asn1$8.derToOid(obj.value);
      rval += oid;
      if (forge$w.pki && forge$w.pki.oids) {
        if (oid in forge$w.pki.oids) {
          rval += " (" + forge$w.pki.oids[oid] + ") ";
        }
      }
    }
    if (obj.type === asn1$8.Type.INTEGER) {
      try {
        rval += asn1$8.derToInteger(obj.value);
      } catch (ex) {
        rval += "0x" + forge$w.util.bytesToHex(obj.value);
      }
    } else if (obj.type === asn1$8.Type.BITSTRING) {
      if (obj.value.length > 1) {
        rval += "0x" + forge$w.util.bytesToHex(obj.value.slice(1));
      } else {
        rval += "(none)";
      }
      if (obj.value.length > 0) {
        var unused = obj.value.charCodeAt(0);
        if (unused == 1) {
          rval += " (1 unused bit shown)";
        } else if (unused > 1) {
          rval += " (" + unused + " unused bits shown)";
        }
      }
    } else if (obj.type === asn1$8.Type.OCTETSTRING) {
      if (!_nonLatinRegex.test(obj.value)) {
        rval += "(" + obj.value + ") ";
      }
      rval += "0x" + forge$w.util.bytesToHex(obj.value);
    } else if (obj.type === asn1$8.Type.UTF8) {
      try {
        rval += forge$w.util.decodeUtf8(obj.value);
      } catch (e) {
        if (e.message === "URI malformed") {
          rval += "0x" + forge$w.util.bytesToHex(obj.value) + " (malformed UTF8)";
        } else {
          throw e;
        }
      }
    } else if (obj.type === asn1$8.Type.PRINTABLESTRING || obj.type === asn1$8.Type.IA5String) {
      rval += obj.value;
    } else if (_nonLatinRegex.test(obj.value)) {
      rval += "0x" + forge$w.util.bytesToHex(obj.value);
    } else if (obj.value.length === 0) {
      rval += "[null]";
    } else {
      rval += obj.value;
    }
  }
  return rval;
};
var forge$v = forge$C;
forge$v.md = forge$v.md || {};
forge$v.md.algorithms = forge$v.md.algorithms || {};
var forge$u = forge$C;
var hmac = forge$u.hmac = forge$u.hmac || {};
hmac.create = function() {
  var _key = null;
  var _md = null;
  var _ipadding = null;
  var _opadding = null;
  var ctx = {};
  ctx.start = function(md, key) {
    if (md !== null) {
      if (typeof md === "string") {
        md = md.toLowerCase();
        if (md in forge$u.md.algorithms) {
          _md = forge$u.md.algorithms[md].create();
        } else {
          throw new Error('Unknown hash algorithm "' + md + '"');
        }
      } else {
        _md = md;
      }
    }
    if (key === null) {
      key = _key;
    } else {
      if (typeof key === "string") {
        key = forge$u.util.createBuffer(key);
      } else if (forge$u.util.isArray(key)) {
        var tmp = key;
        key = forge$u.util.createBuffer();
        for (var i = 0; i < tmp.length; ++i) {
          key.putByte(tmp[i]);
        }
      }
      var keylen = key.length();
      if (keylen > _md.blockLength) {
        _md.start();
        _md.update(key.bytes());
        key = _md.digest();
      }
      _ipadding = forge$u.util.createBuffer();
      _opadding = forge$u.util.createBuffer();
      keylen = key.length();
      for (var i = 0; i < keylen; ++i) {
        var tmp = key.at(i);
        _ipadding.putByte(54 ^ tmp);
        _opadding.putByte(92 ^ tmp);
      }
      if (keylen < _md.blockLength) {
        var tmp = _md.blockLength - keylen;
        for (var i = 0; i < tmp; ++i) {
          _ipadding.putByte(54);
          _opadding.putByte(92);
        }
      }
      _key = key;
      _ipadding = _ipadding.bytes();
      _opadding = _opadding.bytes();
    }
    _md.start();
    _md.update(_ipadding);
  };
  ctx.update = function(bytes) {
    _md.update(bytes);
  };
  ctx.getMac = function() {
    var inner = _md.digest().bytes();
    _md.start();
    _md.update(_opadding);
    _md.update(inner);
    return _md.digest();
  };
  ctx.digest = ctx.getMac;
  return ctx;
};
var forge$t = forge$C;
var md5 = forge$t.md5 = forge$t.md5 || {};
forge$t.md.md5 = forge$t.md.algorithms.md5 = md5;
md5.create = function() {
  if (!_initialized$3) {
    _init$3();
  }
  var _state = null;
  var _input = forge$t.util.createBuffer();
  var _w = new Array(16);
  var md = {
    algorithm: "md5",
    blockLength: 64,
    digestLength: 16,
    // 56-bit length of message so far (does not including padding)
    messageLength: 0,
    // true message length
    fullMessageLength: null,
    // size of message length in bytes
    messageLengthSize: 8
  };
  md.start = function() {
    md.messageLength = 0;
    md.fullMessageLength = md.messageLength64 = [];
    var int32s = md.messageLengthSize / 4;
    for (var i = 0; i < int32s; ++i) {
      md.fullMessageLength.push(0);
    }
    _input = forge$t.util.createBuffer();
    _state = {
      h0: 1732584193,
      h1: 4023233417,
      h2: 2562383102,
      h3: 271733878
    };
    return md;
  };
  md.start();
  md.update = function(msg, encoding) {
    if (encoding === "utf8") {
      msg = forge$t.util.encodeUtf8(msg);
    }
    var len = msg.length;
    md.messageLength += len;
    len = [len / 4294967296 >>> 0, len >>> 0];
    for (var i = md.fullMessageLength.length - 1; i >= 0; --i) {
      md.fullMessageLength[i] += len[1];
      len[1] = len[0] + (md.fullMessageLength[i] / 4294967296 >>> 0);
      md.fullMessageLength[i] = md.fullMessageLength[i] >>> 0;
      len[0] = len[1] / 4294967296 >>> 0;
    }
    _input.putBytes(msg);
    _update$3(_state, _w, _input);
    if (_input.read > 2048 || _input.length() === 0) {
      _input.compact();
    }
    return md;
  };
  md.digest = function() {
    var finalBlock = forge$t.util.createBuffer();
    finalBlock.putBytes(_input.bytes());
    var remaining = md.fullMessageLength[md.fullMessageLength.length - 1] + md.messageLengthSize;
    var overflow = remaining & md.blockLength - 1;
    finalBlock.putBytes(_padding$3.substr(0, md.blockLength - overflow));
    var bits, carry = 0;
    for (var i = md.fullMessageLength.length - 1; i >= 0; --i) {
      bits = md.fullMessageLength[i] * 8 + carry;
      carry = bits / 4294967296 >>> 0;
      finalBlock.putInt32Le(bits >>> 0);
    }
    var s2 = {
      h0: _state.h0,
      h1: _state.h1,
      h2: _state.h2,
      h3: _state.h3
    };
    _update$3(s2, _w, finalBlock);
    var rval = forge$t.util.createBuffer();
    rval.putInt32Le(s2.h0);
    rval.putInt32Le(s2.h1);
    rval.putInt32Le(s2.h2);
    rval.putInt32Le(s2.h3);
    return rval;
  };
  return md;
};
var _padding$3 = null;
var _g = null;
var _r = null;
var _k$2 = null;
var _initialized$3 = false;
function _init$3() {
  _padding$3 = String.fromCharCode(128);
  _padding$3 += forge$t.util.fillString(String.fromCharCode(0), 64);
  _g = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    1,
    6,
    11,
    0,
    5,
    10,
    15,
    4,
    9,
    14,
    3,
    8,
    13,
    2,
    7,
    12,
    5,
    8,
    11,
    14,
    1,
    4,
    7,
    10,
    13,
    0,
    3,
    6,
    9,
    12,
    15,
    2,
    0,
    7,
    14,
    5,
    12,
    3,
    10,
    1,
    8,
    15,
    6,
    13,
    4,
    11,
    2,
    9
  ];
  _r = [
    7,
    12,
    17,
    22,
    7,
    12,
    17,
    22,
    7,
    12,
    17,
    22,
    7,
    12,
    17,
    22,
    5,
    9,
    14,
    20,
    5,
    9,
    14,
    20,
    5,
    9,
    14,
    20,
    5,
    9,
    14,
    20,
    4,
    11,
    16,
    23,
    4,
    11,
    16,
    23,
    4,
    11,
    16,
    23,
    4,
    11,
    16,
    23,
    6,
    10,
    15,
    21,
    6,
    10,
    15,
    21,
    6,
    10,
    15,
    21,
    6,
    10,
    15,
    21
  ];
  _k$2 = new Array(64);
  for (var i = 0; i < 64; ++i) {
    _k$2[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296);
  }
  _initialized$3 = true;
}
function _update$3(s2, w, bytes) {
  var t, a, b, c, d, f, r, i;
  var len = bytes.length();
  while (len >= 64) {
    a = s2.h0;
    b = s2.h1;
    c = s2.h2;
    d = s2.h3;
    for (i = 0; i < 16; ++i) {
      w[i] = bytes.getInt32Le();
      f = d ^ b & (c ^ d);
      t = a + f + _k$2[i] + w[i];
      r = _r[i];
      a = d;
      d = c;
      c = b;
      b += t << r | t >>> 32 - r;
    }
    for (; i < 32; ++i) {
      f = c ^ d & (b ^ c);
      t = a + f + _k$2[i] + w[_g[i]];
      r = _r[i];
      a = d;
      d = c;
      c = b;
      b += t << r | t >>> 32 - r;
    }
    for (; i < 48; ++i) {
      f = b ^ c ^ d;
      t = a + f + _k$2[i] + w[_g[i]];
      r = _r[i];
      a = d;
      d = c;
      c = b;
      b += t << r | t >>> 32 - r;
    }
    for (; i < 64; ++i) {
      f = c ^ (b | ~d);
      t = a + f + _k$2[i] + w[_g[i]];
      r = _r[i];
      a = d;
      d = c;
      c = b;
      b += t << r | t >>> 32 - r;
    }
    s2.h0 = s2.h0 + a | 0;
    s2.h1 = s2.h1 + b | 0;
    s2.h2 = s2.h2 + c | 0;
    s2.h3 = s2.h3 + d | 0;
    len -= 64;
  }
}
var forge$s = forge$C;
var pem = forge$s.pem = forge$s.pem || {};
pem.encode = function(msg, options) {
  options = options || {};
  var rval = "-----BEGIN " + msg.type + "-----\r\n";
  var header;
  if (msg.procType) {
    header = {
      name: "Proc-Type",
      values: [String(msg.procType.version), msg.procType.type]
    };
    rval += foldHeader(header);
  }
  if (msg.contentDomain) {
    header = { name: "Content-Domain", values: [msg.contentDomain] };
    rval += foldHeader(header);
  }
  if (msg.dekInfo) {
    header = { name: "DEK-Info", values: [msg.dekInfo.algorithm] };
    if (msg.dekInfo.parameters) {
      header.values.push(msg.dekInfo.parameters);
    }
    rval += foldHeader(header);
  }
  if (msg.headers) {
    for (var i = 0; i < msg.headers.length; ++i) {
      rval += foldHeader(msg.headers[i]);
    }
  }
  if (msg.procType) {
    rval += "\r\n";
  }
  rval += forge$s.util.encode64(msg.body, options.maxline || 64) + "\r\n";
  rval += "-----END " + msg.type + "-----\r\n";
  return rval;
};
pem.decode = function(str) {
  var rval = [];
  var rMessage = /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g;
  var rHeader = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/;
  var rCRLF = /\r?\n/;
  var match;
  while (true) {
    match = rMessage.exec(str);
    if (!match) {
      break;
    }
    var type = match[1];
    if (type === "NEW CERTIFICATE REQUEST") {
      type = "CERTIFICATE REQUEST";
    }
    var msg = {
      type,
      procType: null,
      contentDomain: null,
      dekInfo: null,
      headers: [],
      body: forge$s.util.decode64(match[3])
    };
    rval.push(msg);
    if (!match[2]) {
      continue;
    }
    var lines = match[2].split(rCRLF);
    var li = 0;
    while (match && li < lines.length) {
      var line = lines[li].replace(/\s+$/, "");
      for (var nl = li + 1; nl < lines.length; ++nl) {
        var next = lines[nl];
        if (!/\s/.test(next[0])) {
          break;
        }
        line += next;
        li = nl;
      }
      match = line.match(rHeader);
      if (match) {
        var header = { name: match[1], values: [] };
        var values = match[2].split(",");
        for (var vi = 0; vi < values.length; ++vi) {
          header.values.push(ltrim(values[vi]));
        }
        if (!msg.procType) {
          if (header.name !== "Proc-Type") {
            throw new Error('Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".');
          } else if (header.values.length !== 2) {
            throw new Error('Invalid PEM formatted message. The "Proc-Type" header must have two subfields.');
          }
          msg.procType = { version: values[0], type: values[1] };
        } else if (!msg.contentDomain && header.name === "Content-Domain") {
          msg.contentDomain = values[0] || "";
        } else if (!msg.dekInfo && header.name === "DEK-Info") {
          if (header.values.length === 0) {
            throw new Error('Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.');
          }
          msg.dekInfo = { algorithm: values[0], parameters: values[1] || null };
        } else {
          msg.headers.push(header);
        }
      }
      ++li;
    }
    if (msg.procType === "ENCRYPTED" && !msg.dekInfo) {
      throw new Error('Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".');
    }
  }
  if (rval.length === 0) {
    throw new Error("Invalid PEM formatted message.");
  }
  return rval;
};
function foldHeader(header) {
  var rval = header.name + ": ";
  var values = [];
  var insertSpace = function(match, $1) {
    return " " + $1;
  };
  for (var i = 0; i < header.values.length; ++i) {
    values.push(header.values[i].replace(/^(\S+\r\n)/, insertSpace));
  }
  rval += values.join(",") + "\r\n";
  var length = 0;
  var candidate = -1;
  for (var i = 0; i < rval.length; ++i, ++length) {
    if (length > 65 && candidate !== -1) {
      var insert = rval[candidate];
      if (insert === ",") {
        ++candidate;
        rval = rval.substr(0, candidate) + "\r\n " + rval.substr(candidate);
      } else {
        rval = rval.substr(0, candidate) + "\r\n" + insert + rval.substr(candidate + 1);
      }
      length = i - candidate - 1;
      candidate = -1;
      ++i;
    } else if (rval[i] === " " || rval[i] === "	" || rval[i] === ",") {
      candidate = i;
    }
  }
  return rval;
}
function ltrim(str) {
  return str.replace(/^\s+/, "");
}
var forge$r = forge$C;
forge$r.des = forge$r.des || {};
forge$r.des.startEncrypting = function(key, iv, output, mode) {
  var cipher = _createCipher({
    key,
    output,
    decrypt: false,
    mode: mode || (iv === null ? "ECB" : "CBC")
  });
  cipher.start(iv);
  return cipher;
};
forge$r.des.createEncryptionCipher = function(key, mode) {
  return _createCipher({
    key,
    output: null,
    decrypt: false,
    mode
  });
};
forge$r.des.startDecrypting = function(key, iv, output, mode) {
  var cipher = _createCipher({
    key,
    output,
    decrypt: true,
    mode: mode || (iv === null ? "ECB" : "CBC")
  });
  cipher.start(iv);
  return cipher;
};
forge$r.des.createDecryptionCipher = function(key, mode) {
  return _createCipher({
    key,
    output: null,
    decrypt: true,
    mode
  });
};
forge$r.des.Algorithm = function(name, mode) {
  var self2 = this;
  self2.name = name;
  self2.mode = new mode({
    blockSize: 8,
    cipher: {
      encrypt: function(inBlock, outBlock) {
        return _updateBlock(self2._keys, inBlock, outBlock, false);
      },
      decrypt: function(inBlock, outBlock) {
        return _updateBlock(self2._keys, inBlock, outBlock, true);
      }
    }
  });
  self2._init = false;
};
forge$r.des.Algorithm.prototype.initialize = function(options) {
  if (this._init) {
    return;
  }
  var key = forge$r.util.createBuffer(options.key);
  if (this.name.indexOf("3DES") === 0) {
    if (key.length() !== 24) {
      throw new Error("Invalid Triple-DES key size: " + key.length() * 8);
    }
  }
  this._keys = _createKeys(key);
  this._init = true;
};
registerAlgorithm("DES-ECB", forge$r.cipher.modes.ecb);
registerAlgorithm("DES-CBC", forge$r.cipher.modes.cbc);
registerAlgorithm("DES-CFB", forge$r.cipher.modes.cfb);
registerAlgorithm("DES-OFB", forge$r.cipher.modes.ofb);
registerAlgorithm("DES-CTR", forge$r.cipher.modes.ctr);
registerAlgorithm("3DES-ECB", forge$r.cipher.modes.ecb);
registerAlgorithm("3DES-CBC", forge$r.cipher.modes.cbc);
registerAlgorithm("3DES-CFB", forge$r.cipher.modes.cfb);
registerAlgorithm("3DES-OFB", forge$r.cipher.modes.ofb);
registerAlgorithm("3DES-CTR", forge$r.cipher.modes.ctr);
function registerAlgorithm(name, mode) {
  var factory = function() {
    return new forge$r.des.Algorithm(name, mode);
  };
  forge$r.cipher.registerAlgorithm(name, factory);
}
var spfunction1 = [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756];
var spfunction2 = [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344];
var spfunction3 = [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584];
var spfunction4 = [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928];
var spfunction5 = [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080];
var spfunction6 = [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312];
var spfunction7 = [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154];
var spfunction8 = [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696];
function _createKeys(key) {
  var pc2bytes0 = [0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964], pc2bytes1 = [0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697], pc2bytes2 = [0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272], pc2bytes3 = [0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144], pc2bytes4 = [0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256], pc2bytes5 = [0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488], pc2bytes6 = [0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746], pc2bytes7 = [0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568], pc2bytes8 = [0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578], pc2bytes9 = [0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488], pc2bytes10 = [0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800], pc2bytes11 = [0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744], pc2bytes12 = [0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128], pc2bytes13 = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261];
  var iterations = key.length() > 8 ? 3 : 1;
  var keys = [];
  var shifts = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0];
  var n = 0, tmp;
  for (var j = 0; j < iterations; j++) {
    var left = key.getInt32();
    var right = key.getInt32();
    tmp = (left >>> 4 ^ right) & 252645135;
    right ^= tmp;
    left ^= tmp << 4;
    tmp = (right >>> -16 ^ left) & 65535;
    left ^= tmp;
    right ^= tmp << -16;
    tmp = (left >>> 2 ^ right) & 858993459;
    right ^= tmp;
    left ^= tmp << 2;
    tmp = (right >>> -16 ^ left) & 65535;
    left ^= tmp;
    right ^= tmp << -16;
    tmp = (left >>> 1 ^ right) & 1431655765;
    right ^= tmp;
    left ^= tmp << 1;
    tmp = (right >>> 8 ^ left) & 16711935;
    left ^= tmp;
    right ^= tmp << 8;
    tmp = (left >>> 1 ^ right) & 1431655765;
    right ^= tmp;
    left ^= tmp << 1;
    tmp = left << 8 | right >>> 20 & 240;
    left = right << 24 | right << 8 & 16711680 | right >>> 8 & 65280 | right >>> 24 & 240;
    right = tmp;
    for (var i = 0; i < shifts.length; ++i) {
      if (shifts[i]) {
        left = left << 2 | left >>> 26;
        right = right << 2 | right >>> 26;
      } else {
        left = left << 1 | left >>> 27;
        right = right << 1 | right >>> 27;
      }
      left &= -15;
      right &= -15;
      var lefttmp = pc2bytes0[left >>> 28] | pc2bytes1[left >>> 24 & 15] | pc2bytes2[left >>> 20 & 15] | pc2bytes3[left >>> 16 & 15] | pc2bytes4[left >>> 12 & 15] | pc2bytes5[left >>> 8 & 15] | pc2bytes6[left >>> 4 & 15];
      var righttmp = pc2bytes7[right >>> 28] | pc2bytes8[right >>> 24 & 15] | pc2bytes9[right >>> 20 & 15] | pc2bytes10[right >>> 16 & 15] | pc2bytes11[right >>> 12 & 15] | pc2bytes12[right >>> 8 & 15] | pc2bytes13[right >>> 4 & 15];
      tmp = (righttmp >>> 16 ^ lefttmp) & 65535;
      keys[n++] = lefttmp ^ tmp;
      keys[n++] = righttmp ^ tmp << 16;
    }
  }
  return keys;
}
function _updateBlock(keys, input, output, decrypt) {
  var iterations = keys.length === 32 ? 3 : 9;
  var looping;
  if (iterations === 3) {
    looping = decrypt ? [30, -2, -2] : [0, 32, 2];
  } else {
    looping = decrypt ? [94, 62, -2, 32, 64, 2, 30, -2, -2] : [0, 32, 2, 62, 30, -2, 64, 96, 2];
  }
  var tmp;
  var left = input[0];
  var right = input[1];
  tmp = (left >>> 4 ^ right) & 252645135;
  right ^= tmp;
  left ^= tmp << 4;
  tmp = (left >>> 16 ^ right) & 65535;
  right ^= tmp;
  left ^= tmp << 16;
  tmp = (right >>> 2 ^ left) & 858993459;
  left ^= tmp;
  right ^= tmp << 2;
  tmp = (right >>> 8 ^ left) & 16711935;
  left ^= tmp;
  right ^= tmp << 8;
  tmp = (left >>> 1 ^ right) & 1431655765;
  right ^= tmp;
  left ^= tmp << 1;
  left = left << 1 | left >>> 31;
  right = right << 1 | right >>> 31;
  for (var j = 0; j < iterations; j += 3) {
    var endloop = looping[j + 1];
    var loopinc = looping[j + 2];
    for (var i = looping[j]; i != endloop; i += loopinc) {
      var right1 = right ^ keys[i];
      var right2 = (right >>> 4 | right << 28) ^ keys[i + 1];
      tmp = left;
      left = right;
      right = tmp ^ (spfunction2[right1 >>> 24 & 63] | spfunction4[right1 >>> 16 & 63] | spfunction6[right1 >>> 8 & 63] | spfunction8[right1 & 63] | spfunction1[right2 >>> 24 & 63] | spfunction3[right2 >>> 16 & 63] | spfunction5[right2 >>> 8 & 63] | spfunction7[right2 & 63]);
    }
    tmp = left;
    left = right;
    right = tmp;
  }
  left = left >>> 1 | left << 31;
  right = right >>> 1 | right << 31;
  tmp = (left >>> 1 ^ right) & 1431655765;
  right ^= tmp;
  left ^= tmp << 1;
  tmp = (right >>> 8 ^ left) & 16711935;
  left ^= tmp;
  right ^= tmp << 8;
  tmp = (right >>> 2 ^ left) & 858993459;
  left ^= tmp;
  right ^= tmp << 2;
  tmp = (left >>> 16 ^ right) & 65535;
  right ^= tmp;
  left ^= tmp << 16;
  tmp = (left >>> 4 ^ right) & 252645135;
  right ^= tmp;
  left ^= tmp << 4;
  output[0] = left;
  output[1] = right;
}
function _createCipher(options) {
  options = options || {};
  var mode = (options.mode || "CBC").toUpperCase();
  var algorithm = "DES-" + mode;
  var cipher;
  if (options.decrypt) {
    cipher = forge$r.cipher.createDecipher(algorithm, options.key);
  } else {
    cipher = forge$r.cipher.createCipher(algorithm, options.key);
  }
  var start = cipher.start;
  cipher.start = function(iv, options2) {
    var output = null;
    if (options2 instanceof forge$r.util.ByteBuffer) {
      output = options2;
      options2 = {};
    }
    options2 = options2 || {};
    options2.output = output;
    options2.iv = iv;
    start.call(cipher, options2);
  };
  return cipher;
}
var forge$q = forge$C;
var pkcs5 = forge$q.pkcs5 = forge$q.pkcs5 || {};
var crypto;
if (forge$q.util.isNodejs && !forge$q.options.usePureJavaScript) {
  crypto = crypto$1;
}
forge$q.pbkdf2 = pkcs5.pbkdf2 = function(p, s2, c, dkLen, md, callback) {
  if (typeof md === "function") {
    callback = md;
    md = null;
  }
  if (forge$q.util.isNodejs && !forge$q.options.usePureJavaScript && crypto.pbkdf2 && (md === null || typeof md !== "object") && (crypto.pbkdf2Sync.length > 4 || (!md || md === "sha1"))) {
    if (typeof md !== "string") {
      md = "sha1";
    }
    p = Buffer.from(p, "binary");
    s2 = Buffer.from(s2, "binary");
    if (!callback) {
      if (crypto.pbkdf2Sync.length === 4) {
        return crypto.pbkdf2Sync(p, s2, c, dkLen).toString("binary");
      }
      return crypto.pbkdf2Sync(p, s2, c, dkLen, md).toString("binary");
    }
    if (crypto.pbkdf2Sync.length === 4) {
      return crypto.pbkdf2(p, s2, c, dkLen, function(err2, key) {
        if (err2) {
          return callback(err2);
        }
        callback(null, key.toString("binary"));
      });
    }
    return crypto.pbkdf2(p, s2, c, dkLen, md, function(err2, key) {
      if (err2) {
        return callback(err2);
      }
      callback(null, key.toString("binary"));
    });
  }
  if (typeof md === "undefined" || md === null) {
    md = "sha1";
  }
  if (typeof md === "string") {
    if (!(md in forge$q.md.algorithms)) {
      throw new Error("Unknown hash algorithm: " + md);
    }
    md = forge$q.md[md].create();
  }
  var hLen = md.digestLength;
  if (dkLen > 4294967295 * hLen) {
    var err = new Error("Derived key is too long.");
    if (callback) {
      return callback(err);
    }
    throw err;
  }
  var len = Math.ceil(dkLen / hLen);
  var r = dkLen - (len - 1) * hLen;
  var prf = forge$q.hmac.create();
  prf.start(md, p);
  var dk = "";
  var xor, u_c, u_c1;
  if (!callback) {
    for (var i = 1; i <= len; ++i) {
      prf.start(null, null);
      prf.update(s2);
      prf.update(forge$q.util.int32ToBytes(i));
      xor = u_c1 = prf.digest().getBytes();
      for (var j = 2; j <= c; ++j) {
        prf.start(null, null);
        prf.update(u_c1);
        u_c = prf.digest().getBytes();
        xor = forge$q.util.xorBytes(xor, u_c, hLen);
        u_c1 = u_c;
      }
      dk += i < len ? xor : xor.substr(0, r);
    }
    return dk;
  }
  var i = 1, j;
  function outer() {
    if (i > len) {
      return callback(null, dk);
    }
    prf.start(null, null);
    prf.update(s2);
    prf.update(forge$q.util.int32ToBytes(i));
    xor = u_c1 = prf.digest().getBytes();
    j = 2;
    inner();
  }
  function inner() {
    if (j <= c) {
      prf.start(null, null);
      prf.update(u_c1);
      u_c = prf.digest().getBytes();
      xor = forge$q.util.xorBytes(xor, u_c, hLen);
      u_c1 = u_c;
      ++j;
      return forge$q.util.setImmediate(inner);
    }
    dk += i < len ? xor : xor.substr(0, r);
    ++i;
    outer();
  }
  outer();
};
var forge$p = forge$C;
var sha256 = forge$p.sha256 = forge$p.sha256 || {};
forge$p.md.sha256 = forge$p.md.algorithms.sha256 = sha256;
sha256.create = function() {
  if (!_initialized$2) {
    _init$2();
  }
  var _state = null;
  var _input = forge$p.util.createBuffer();
  var _w = new Array(64);
  var md = {
    algorithm: "sha256",
    blockLength: 64,
    digestLength: 32,
    // 56-bit length of message so far (does not including padding)
    messageLength: 0,
    // true message length
    fullMessageLength: null,
    // size of message length in bytes
    messageLengthSize: 8
  };
  md.start = function() {
    md.messageLength = 0;
    md.fullMessageLength = md.messageLength64 = [];
    var int32s = md.messageLengthSize / 4;
    for (var i = 0; i < int32s; ++i) {
      md.fullMessageLength.push(0);
    }
    _input = forge$p.util.createBuffer();
    _state = {
      h0: 1779033703,
      h1: 3144134277,
      h2: 1013904242,
      h3: 2773480762,
      h4: 1359893119,
      h5: 2600822924,
      h6: 528734635,
      h7: 1541459225
    };
    return md;
  };
  md.start();
  md.update = function(msg, encoding) {
    if (encoding === "utf8") {
      msg = forge$p.util.encodeUtf8(msg);
    }
    var len = msg.length;
    md.messageLength += len;
    len = [len / 4294967296 >>> 0, len >>> 0];
    for (var i = md.fullMessageLength.length - 1; i >= 0; --i) {
      md.fullMessageLength[i] += len[1];
      len[1] = len[0] + (md.fullMessageLength[i] / 4294967296 >>> 0);
      md.fullMessageLength[i] = md.fullMessageLength[i] >>> 0;
      len[0] = len[1] / 4294967296 >>> 0;
    }
    _input.putBytes(msg);
    _update$2(_state, _w, _input);
    if (_input.read > 2048 || _input.length() === 0) {
      _input.compact();
    }
    return md;
  };
  md.digest = function() {
    var finalBlock = forge$p.util.createBuffer();
    finalBlock.putBytes(_input.bytes());
    var remaining = md.fullMessageLength[md.fullMessageLength.length - 1] + md.messageLengthSize;
    var overflow = remaining & md.blockLength - 1;
    finalBlock.putBytes(_padding$2.substr(0, md.blockLength - overflow));
    var next, carry;
    var bits = md.fullMessageLength[0] * 8;
    for (var i = 0; i < md.fullMessageLength.length - 1; ++i) {
      next = md.fullMessageLength[i + 1] * 8;
      carry = next / 4294967296 >>> 0;
      bits += carry;
      finalBlock.putInt32(bits >>> 0);
      bits = next >>> 0;
    }
    finalBlock.putInt32(bits);
    var s2 = {
      h0: _state.h0,
      h1: _state.h1,
      h2: _state.h2,
      h3: _state.h3,
      h4: _state.h4,
      h5: _state.h5,
      h6: _state.h6,
      h7: _state.h7
    };
    _update$2(s2, _w, finalBlock);
    var rval = forge$p.util.createBuffer();
    rval.putInt32(s2.h0);
    rval.putInt32(s2.h1);
    rval.putInt32(s2.h2);
    rval.putInt32(s2.h3);
    rval.putInt32(s2.h4);
    rval.putInt32(s2.h5);
    rval.putInt32(s2.h6);
    rval.putInt32(s2.h7);
    return rval;
  };
  return md;
};
var _padding$2 = null;
var _initialized$2 = false;
var _k$1 = null;
function _init$2() {
  _padding$2 = String.fromCharCode(128);
  _padding$2 += forge$p.util.fillString(String.fromCharCode(0), 64);
  _k$1 = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ];
  _initialized$2 = true;
}
function _update$2(s2, w, bytes) {
  var t1, t2, s0, s1, ch, maj, i, a, b, c, d, e, f, g, h;
  var len = bytes.length();
  while (len >= 64) {
    for (i = 0; i < 16; ++i) {
      w[i] = bytes.getInt32();
    }
    for (; i < 64; ++i) {
      t1 = w[i - 2];
      t1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
      t2 = w[i - 15];
      t2 = (t2 >>> 7 | t2 << 25) ^ (t2 >>> 18 | t2 << 14) ^ t2 >>> 3;
      w[i] = t1 + w[i - 7] + t2 + w[i - 16] | 0;
    }
    a = s2.h0;
    b = s2.h1;
    c = s2.h2;
    d = s2.h3;
    e = s2.h4;
    f = s2.h5;
    g = s2.h6;
    h = s2.h7;
    for (i = 0; i < 64; ++i) {
      s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
      ch = g ^ e & (f ^ g);
      s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
      maj = a & b | c & (a ^ b);
      t1 = h + s1 + ch + _k$1[i] + w[i];
      t2 = s0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 >>> 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 >>> 0;
    }
    s2.h0 = s2.h0 + a | 0;
    s2.h1 = s2.h1 + b | 0;
    s2.h2 = s2.h2 + c | 0;
    s2.h3 = s2.h3 + d | 0;
    s2.h4 = s2.h4 + e | 0;
    s2.h5 = s2.h5 + f | 0;
    s2.h6 = s2.h6 + g | 0;
    s2.h7 = s2.h7 + h | 0;
    len -= 64;
  }
}
var forge$o = forge$C;
var _crypto$1 = null;
if (forge$o.util.isNodejs && !forge$o.options.usePureJavaScript && !process.versions["node-webkit"]) {
  _crypto$1 = crypto$1;
}
var prng = forge$o.prng = forge$o.prng || {};
prng.create = function(plugin) {
  var ctx = {
    plugin,
    key: null,
    seed: null,
    time: null,
    // number of reseeds so far
    reseeds: 0,
    // amount of data generated so far
    generated: 0,
    // no initial key bytes
    keyBytes: ""
  };
  var md = plugin.md;
  var pools = new Array(32);
  for (var i = 0; i < 32; ++i) {
    pools[i] = md.create();
  }
  ctx.pools = pools;
  ctx.pool = 0;
  ctx.generate = function(count, callback) {
    if (!callback) {
      return ctx.generateSync(count);
    }
    var cipher = ctx.plugin.cipher;
    var increment = ctx.plugin.increment;
    var formatKey = ctx.plugin.formatKey;
    var formatSeed = ctx.plugin.formatSeed;
    var b = forge$o.util.createBuffer();
    ctx.key = null;
    generate();
    function generate(err) {
      if (err) {
        return callback(err);
      }
      if (b.length() >= count) {
        return callback(null, b.getBytes(count));
      }
      if (ctx.generated > 1048575) {
        ctx.key = null;
      }
      if (ctx.key === null) {
        return forge$o.util.nextTick(function() {
          _reseed(generate);
        });
      }
      var bytes = cipher(ctx.key, ctx.seed);
      ctx.generated += bytes.length;
      b.putBytes(bytes);
      ctx.key = formatKey(cipher(ctx.key, increment(ctx.seed)));
      ctx.seed = formatSeed(cipher(ctx.key, ctx.seed));
      forge$o.util.setImmediate(generate);
    }
  };
  ctx.generateSync = function(count) {
    var cipher = ctx.plugin.cipher;
    var increment = ctx.plugin.increment;
    var formatKey = ctx.plugin.formatKey;
    var formatSeed = ctx.plugin.formatSeed;
    ctx.key = null;
    var b = forge$o.util.createBuffer();
    while (b.length() < count) {
      if (ctx.generated > 1048575) {
        ctx.key = null;
      }
      if (ctx.key === null) {
        _reseedSync();
      }
      var bytes = cipher(ctx.key, ctx.seed);
      ctx.generated += bytes.length;
      b.putBytes(bytes);
      ctx.key = formatKey(cipher(ctx.key, increment(ctx.seed)));
      ctx.seed = formatSeed(cipher(ctx.key, ctx.seed));
    }
    return b.getBytes(count);
  };
  function _reseed(callback) {
    if (ctx.pools[0].messageLength >= 32) {
      _seed();
      return callback();
    }
    var needed = 32 - ctx.pools[0].messageLength << 5;
    ctx.seedFile(needed, function(err, bytes) {
      if (err) {
        return callback(err);
      }
      ctx.collect(bytes);
      _seed();
      callback();
    });
  }
  function _reseedSync() {
    if (ctx.pools[0].messageLength >= 32) {
      return _seed();
    }
    var needed = 32 - ctx.pools[0].messageLength << 5;
    ctx.collect(ctx.seedFileSync(needed));
    _seed();
  }
  function _seed() {
    ctx.reseeds = ctx.reseeds === 4294967295 ? 0 : ctx.reseeds + 1;
    var md2 = ctx.plugin.md.create();
    md2.update(ctx.keyBytes);
    var _2powK = 1;
    for (var k = 0; k < 32; ++k) {
      if (ctx.reseeds % _2powK === 0) {
        md2.update(ctx.pools[k].digest().getBytes());
        ctx.pools[k].start();
      }
      _2powK = _2powK << 1;
    }
    ctx.keyBytes = md2.digest().getBytes();
    md2.start();
    md2.update(ctx.keyBytes);
    var seedBytes = md2.digest().getBytes();
    ctx.key = ctx.plugin.formatKey(ctx.keyBytes);
    ctx.seed = ctx.plugin.formatSeed(seedBytes);
    ctx.generated = 0;
  }
  function defaultSeedFile(needed) {
    var getRandomValues = null;
    var globalScope = forge$o.util.globalScope;
    var _crypto2 = globalScope.crypto || globalScope.msCrypto;
    if (_crypto2 && _crypto2.getRandomValues) {
      getRandomValues = function(arr) {
        return _crypto2.getRandomValues(arr);
      };
    }
    var b = forge$o.util.createBuffer();
    if (getRandomValues) {
      while (b.length() < needed) {
        var count = Math.max(1, Math.min(needed - b.length(), 65536) / 4);
        var entropy = new Uint32Array(Math.floor(count));
        try {
          getRandomValues(entropy);
          for (var i2 = 0; i2 < entropy.length; ++i2) {
            b.putInt32(entropy[i2]);
          }
        } catch (e) {
          if (!(typeof QuotaExceededError !== "undefined" && e instanceof QuotaExceededError)) {
            throw e;
          }
        }
      }
    }
    if (b.length() < needed) {
      var hi, lo, next;
      var seed = Math.floor(Math.random() * 65536);
      while (b.length() < needed) {
        lo = 16807 * (seed & 65535);
        hi = 16807 * (seed >> 16);
        lo += (hi & 32767) << 16;
        lo += hi >> 15;
        lo = (lo & 2147483647) + (lo >> 31);
        seed = lo & 4294967295;
        for (var i2 = 0; i2 < 3; ++i2) {
          next = seed >>> (i2 << 3);
          next ^= Math.floor(Math.random() * 256);
          b.putByte(next & 255);
        }
      }
    }
    return b.getBytes(needed);
  }
  if (_crypto$1) {
    ctx.seedFile = function(needed, callback) {
      _crypto$1.randomBytes(needed, function(err, bytes) {
        if (err) {
          return callback(err);
        }
        callback(null, bytes.toString());
      });
    };
    ctx.seedFileSync = function(needed) {
      return _crypto$1.randomBytes(needed).toString();
    };
  } else {
    ctx.seedFile = function(needed, callback) {
      try {
        callback(null, defaultSeedFile(needed));
      } catch (e) {
        callback(e);
      }
    };
    ctx.seedFileSync = defaultSeedFile;
  }
  ctx.collect = function(bytes) {
    var count = bytes.length;
    for (var i2 = 0; i2 < count; ++i2) {
      ctx.pools[ctx.pool].update(bytes.substr(i2, 1));
      ctx.pool = ctx.pool === 31 ? 0 : ctx.pool + 1;
    }
  };
  ctx.collectInt = function(i2, n) {
    var bytes = "";
    for (var x = 0; x < n; x += 8) {
      bytes += String.fromCharCode(i2 >> x & 255);
    }
    ctx.collect(bytes);
  };
  ctx.registerWorker = function(worker) {
    if (worker === self) {
      ctx.seedFile = function(needed, callback) {
        function listener2(e) {
          var data = e.data;
          if (data.forge && data.forge.prng) {
            self.removeEventListener("message", listener2);
            callback(data.forge.prng.err, data.forge.prng.bytes);
          }
        }
        self.addEventListener("message", listener2);
        self.postMessage({ forge: { prng: { needed } } });
      };
    } else {
      var listener = function(e) {
        var data = e.data;
        if (data.forge && data.forge.prng) {
          ctx.seedFile(data.forge.prng.needed, function(err, bytes) {
            worker.postMessage({ forge: { prng: { err, bytes } } });
          });
        }
      };
      worker.addEventListener("message", listener);
    }
  };
  return ctx;
};
var forge$n = forge$C;
(function() {
  if (forge$n.random && forge$n.random.getBytes) {
    forge$n.random;
    return;
  }
  (function(jQuery2) {
    var prng_aes = {};
    var _prng_aes_output = new Array(4);
    var _prng_aes_buffer = forge$n.util.createBuffer();
    prng_aes.formatKey = function(key2) {
      var tmp = forge$n.util.createBuffer(key2);
      key2 = new Array(4);
      key2[0] = tmp.getInt32();
      key2[1] = tmp.getInt32();
      key2[2] = tmp.getInt32();
      key2[3] = tmp.getInt32();
      return forge$n.aes._expandKey(key2, false);
    };
    prng_aes.formatSeed = function(seed) {
      var tmp = forge$n.util.createBuffer(seed);
      seed = new Array(4);
      seed[0] = tmp.getInt32();
      seed[1] = tmp.getInt32();
      seed[2] = tmp.getInt32();
      seed[3] = tmp.getInt32();
      return seed;
    };
    prng_aes.cipher = function(key2, seed) {
      forge$n.aes._updateBlock(key2, seed, _prng_aes_output, false);
      _prng_aes_buffer.putInt32(_prng_aes_output[0]);
      _prng_aes_buffer.putInt32(_prng_aes_output[1]);
      _prng_aes_buffer.putInt32(_prng_aes_output[2]);
      _prng_aes_buffer.putInt32(_prng_aes_output[3]);
      return _prng_aes_buffer.getBytes();
    };
    prng_aes.increment = function(seed) {
      ++seed[3];
      return seed;
    };
    prng_aes.md = forge$n.md.sha256;
    function spawnPrng() {
      var ctx = forge$n.prng.create(prng_aes);
      ctx.getBytes = function(count, callback) {
        return ctx.generate(count, callback);
      };
      ctx.getBytesSync = function(count) {
        return ctx.generate(count);
      };
      return ctx;
    }
    var _ctx = spawnPrng();
    var getRandomValues = null;
    var globalScope = forge$n.util.globalScope;
    var _crypto2 = globalScope.crypto || globalScope.msCrypto;
    if (_crypto2 && _crypto2.getRandomValues) {
      getRandomValues = function(arr) {
        return _crypto2.getRandomValues(arr);
      };
    }
    if (forge$n.options.usePureJavaScript || !forge$n.util.isNodejs && !getRandomValues) {
      _ctx.collectInt(+/* @__PURE__ */ new Date(), 32);
      if (typeof navigator !== "undefined") {
        var _navBytes = "";
        for (var key in navigator) {
          try {
            if (typeof navigator[key] == "string") {
              _navBytes += navigator[key];
            }
          } catch (e) {
          }
        }
        _ctx.collect(_navBytes);
        _navBytes = null;
      }
      if (jQuery2) {
        jQuery2().mousemove(function(e) {
          _ctx.collectInt(e.clientX, 16);
          _ctx.collectInt(e.clientY, 16);
        });
        jQuery2().keypress(function(e) {
          _ctx.collectInt(e.charCode, 8);
        });
      }
    }
    if (!forge$n.random) {
      forge$n.random = _ctx;
    } else {
      for (var key in _ctx) {
        forge$n.random[key] = _ctx[key];
      }
    }
    forge$n.random.createInstance = spawnPrng;
    forge$n.random;
  })(typeof jQuery !== "undefined" ? jQuery : null);
})();
var forge$m = forge$C;
var piTable = [
  217,
  120,
  249,
  196,
  25,
  221,
  181,
  237,
  40,
  233,
  253,
  121,
  74,
  160,
  216,
  157,
  198,
  126,
  55,
  131,
  43,
  118,
  83,
  142,
  98,
  76,
  100,
  136,
  68,
  139,
  251,
  162,
  23,
  154,
  89,
  245,
  135,
  179,
  79,
  19,
  97,
  69,
  109,
  141,
  9,
  129,
  125,
  50,
  189,
  143,
  64,
  235,
  134,
  183,
  123,
  11,
  240,
  149,
  33,
  34,
  92,
  107,
  78,
  130,
  84,
  214,
  101,
  147,
  206,
  96,
  178,
  28,
  115,
  86,
  192,
  20,
  167,
  140,
  241,
  220,
  18,
  117,
  202,
  31,
  59,
  190,
  228,
  209,
  66,
  61,
  212,
  48,
  163,
  60,
  182,
  38,
  111,
  191,
  14,
  218,
  70,
  105,
  7,
  87,
  39,
  242,
  29,
  155,
  188,
  148,
  67,
  3,
  248,
  17,
  199,
  246,
  144,
  239,
  62,
  231,
  6,
  195,
  213,
  47,
  200,
  102,
  30,
  215,
  8,
  232,
  234,
  222,
  128,
  82,
  238,
  247,
  132,
  170,
  114,
  172,
  53,
  77,
  106,
  42,
  150,
  26,
  210,
  113,
  90,
  21,
  73,
  116,
  75,
  159,
  208,
  94,
  4,
  24,
  164,
  236,
  194,
  224,
  65,
  110,
  15,
  81,
  203,
  204,
  36,
  145,
  175,
  80,
  161,
  244,
  112,
  57,
  153,
  124,
  58,
  133,
  35,
  184,
  180,
  122,
  252,
  2,
  54,
  91,
  37,
  85,
  151,
  49,
  45,
  93,
  250,
  152,
  227,
  138,
  146,
  174,
  5,
  223,
  41,
  16,
  103,
  108,
  186,
  201,
  211,
  0,
  230,
  207,
  225,
  158,
  168,
  44,
  99,
  22,
  1,
  63,
  88,
  226,
  137,
  169,
  13,
  56,
  52,
  27,
  171,
  51,
  255,
  176,
  187,
  72,
  12,
  95,
  185,
  177,
  205,
  46,
  197,
  243,
  219,
  71,
  229,
  165,
  156,
  119,
  10,
  166,
  32,
  104,
  254,
  127,
  193,
  173
];
var s = [1, 2, 3, 5];
var rol = function(word, bits) {
  return word << bits & 65535 | (word & 65535) >> 16 - bits;
};
var ror = function(word, bits) {
  return (word & 65535) >> bits | word << 16 - bits & 65535;
};
forge$m.rc2 = forge$m.rc2 || {};
forge$m.rc2.expandKey = function(key, effKeyBits) {
  if (typeof key === "string") {
    key = forge$m.util.createBuffer(key);
  }
  effKeyBits = effKeyBits || 128;
  var L2 = key;
  var T = key.length();
  var T1 = effKeyBits;
  var T8 = Math.ceil(T1 / 8);
  var TM = 255 >> (T1 & 7);
  var i;
  for (i = T; i < 128; i++) {
    L2.putByte(piTable[L2.at(i - 1) + L2.at(i - T) & 255]);
  }
  L2.setAt(128 - T8, piTable[L2.at(128 - T8) & TM]);
  for (i = 127 - T8; i >= 0; i--) {
    L2.setAt(i, piTable[L2.at(i + 1) ^ L2.at(i + T8)]);
  }
  return L2;
};
var createCipher = function(key, bits, encrypt) {
  var _finish = false, _input = null, _output = null, _iv = null;
  var mixRound, mashRound;
  var i, j, K = [];
  key = forge$m.rc2.expandKey(key, bits);
  for (i = 0; i < 64; i++) {
    K.push(key.getInt16Le());
  }
  if (encrypt) {
    mixRound = function(R) {
      for (i = 0; i < 4; i++) {
        R[i] += K[j] + (R[(i + 3) % 4] & R[(i + 2) % 4]) + (~R[(i + 3) % 4] & R[(i + 1) % 4]);
        R[i] = rol(R[i], s[i]);
        j++;
      }
    };
    mashRound = function(R) {
      for (i = 0; i < 4; i++) {
        R[i] += K[R[(i + 3) % 4] & 63];
      }
    };
  } else {
    mixRound = function(R) {
      for (i = 3; i >= 0; i--) {
        R[i] = ror(R[i], s[i]);
        R[i] -= K[j] + (R[(i + 3) % 4] & R[(i + 2) % 4]) + (~R[(i + 3) % 4] & R[(i + 1) % 4]);
        j--;
      }
    };
    mashRound = function(R) {
      for (i = 3; i >= 0; i--) {
        R[i] -= K[R[(i + 3) % 4] & 63];
      }
    };
  }
  var runPlan = function(plan) {
    var R = [];
    for (i = 0; i < 4; i++) {
      var val = _input.getInt16Le();
      if (_iv !== null) {
        if (encrypt) {
          val ^= _iv.getInt16Le();
        } else {
          _iv.putInt16Le(val);
        }
      }
      R.push(val & 65535);
    }
    j = encrypt ? 0 : 63;
    for (var ptr = 0; ptr < plan.length; ptr++) {
      for (var ctr = 0; ctr < plan[ptr][0]; ctr++) {
        plan[ptr][1](R);
      }
    }
    for (i = 0; i < 4; i++) {
      if (_iv !== null) {
        if (encrypt) {
          _iv.putInt16Le(R[i]);
        } else {
          R[i] ^= _iv.getInt16Le();
        }
      }
      _output.putInt16Le(R[i]);
    }
  };
  var cipher = null;
  cipher = {
    /**
     * Starts or restarts the encryption or decryption process, whichever
     * was previously configured.
     *
     * To use the cipher in CBC mode, iv may be given either as a string
     * of bytes, or as a byte buffer.  For ECB mode, give null as iv.
     *
     * @param iv the initialization vector to use, null for ECB mode.
     * @param output the output the buffer to write to, null to create one.
     */
    start: function(iv, output) {
      if (iv) {
        if (typeof iv === "string") {
          iv = forge$m.util.createBuffer(iv);
        }
      }
      _finish = false;
      _input = forge$m.util.createBuffer();
      _output = output || new forge$m.util.createBuffer();
      _iv = iv;
      cipher.output = _output;
    },
    /**
     * Updates the next block.
     *
     * @param input the buffer to read from.
     */
    update: function(input) {
      if (!_finish) {
        _input.putBuffer(input);
      }
      while (_input.length() >= 8) {
        runPlan([
          [5, mixRound],
          [1, mashRound],
          [6, mixRound],
          [1, mashRound],
          [5, mixRound]
        ]);
      }
    },
    /**
     * Finishes encrypting or decrypting.
     *
     * @param pad a padding function to use, null for PKCS#7 padding,
     *           signature(blockSize, buffer, decrypt).
     *
     * @return true if successful, false on error.
     */
    finish: function(pad) {
      var rval = true;
      if (encrypt) {
        if (pad) {
          rval = pad(8, _input, !encrypt);
        } else {
          var padding = _input.length() === 8 ? 8 : 8 - _input.length();
          _input.fillWithByte(padding, padding);
        }
      }
      if (rval) {
        _finish = true;
        cipher.update();
      }
      if (!encrypt) {
        rval = _input.length() === 0;
        if (rval) {
          if (pad) {
            rval = pad(8, _output, !encrypt);
          } else {
            var len = _output.length();
            var count = _output.at(len - 1);
            if (count > len) {
              rval = false;
            } else {
              _output.truncate(count);
            }
          }
        }
      }
      return rval;
    }
  };
  return cipher;
};
forge$m.rc2.startEncrypting = function(key, iv, output) {
  var cipher = forge$m.rc2.createEncryptionCipher(key, 128);
  cipher.start(iv, output);
  return cipher;
};
forge$m.rc2.createEncryptionCipher = function(key, bits) {
  return createCipher(key, bits, true);
};
forge$m.rc2.startDecrypting = function(key, iv, output) {
  var cipher = forge$m.rc2.createDecryptionCipher(key, 128);
  cipher.start(iv, output);
  return cipher;
};
forge$m.rc2.createDecryptionCipher = function(key, bits) {
  return createCipher(key, bits, false);
};
var forge$l = forge$C;
forge$l.jsbn = forge$l.jsbn || {};
var dbits;
function BigInteger$4(a, b, c) {
  this.data = [];
  if (a != null)
    if ("number" == typeof a) this.fromNumber(a, b, c);
    else if (b == null && "string" != typeof a) this.fromString(a, 256);
    else this.fromString(a, b);
}
forge$l.jsbn.BigInteger = BigInteger$4;
function nbi() {
  return new BigInteger$4(null);
}
function am1(i, x, w, j, c, n) {
  while (--n >= 0) {
    var v = x * this.data[i++] + w.data[j] + c;
    c = Math.floor(v / 67108864);
    w.data[j++] = v & 67108863;
  }
  return c;
}
function am2(i, x, w, j, c, n) {
  var xl = x & 32767, xh = x >> 15;
  while (--n >= 0) {
    var l = this.data[i] & 32767;
    var h = this.data[i++] >> 15;
    var m = xh * l + h * xl;
    l = xl * l + ((m & 32767) << 15) + w.data[j] + (c & 1073741823);
    c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
    w.data[j++] = l & 1073741823;
  }
  return c;
}
function am3(i, x, w, j, c, n) {
  var xl = x & 16383, xh = x >> 14;
  while (--n >= 0) {
    var l = this.data[i] & 16383;
    var h = this.data[i++] >> 14;
    var m = xh * l + h * xl;
    l = xl * l + ((m & 16383) << 14) + w.data[j] + c;
    c = (l >> 28) + (m >> 14) + xh * h;
    w.data[j++] = l & 268435455;
  }
  return c;
}
if (typeof navigator === "undefined") {
  BigInteger$4.prototype.am = am3;
  dbits = 28;
} else if (navigator.appName == "Microsoft Internet Explorer") {
  BigInteger$4.prototype.am = am2;
  dbits = 30;
} else if (navigator.appName != "Netscape") {
  BigInteger$4.prototype.am = am1;
  dbits = 26;
} else {
  BigInteger$4.prototype.am = am3;
  dbits = 28;
}
BigInteger$4.prototype.DB = dbits;
BigInteger$4.prototype.DM = (1 << dbits) - 1;
BigInteger$4.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger$4.prototype.FV = Math.pow(2, BI_FP);
BigInteger$4.prototype.F1 = BI_FP - dbits;
BigInteger$4.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
function int2char(n) {
  return BI_RM.charAt(n);
}
function intAt(s2, i) {
  var c = BI_RC[s2.charCodeAt(i)];
  return c == null ? -1 : c;
}
function bnpCopyTo(r) {
  for (var i = this.t - 1; i >= 0; --i) r.data[i] = this.data[i];
  r.t = this.t;
  r.s = this.s;
}
function bnpFromInt(x) {
  this.t = 1;
  this.s = x < 0 ? -1 : 0;
  if (x > 0) this.data[0] = x;
  else if (x < -1) this.data[0] = x + this.DV;
  else this.t = 0;
}
function nbv(i) {
  var r = nbi();
  r.fromInt(i);
  return r;
}
function bnpFromString(s2, b) {
  var k;
  if (b == 16) k = 4;
  else if (b == 8) k = 3;
  else if (b == 256) k = 8;
  else if (b == 2) k = 1;
  else if (b == 32) k = 5;
  else if (b == 4) k = 2;
  else {
    this.fromRadix(s2, b);
    return;
  }
  this.t = 0;
  this.s = 0;
  var i = s2.length, mi = false, sh = 0;
  while (--i >= 0) {
    var x = k == 8 ? s2[i] & 255 : intAt(s2, i);
    if (x < 0) {
      if (s2.charAt(i) == "-") mi = true;
      continue;
    }
    mi = false;
    if (sh == 0)
      this.data[this.t++] = x;
    else if (sh + k > this.DB) {
      this.data[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
      this.data[this.t++] = x >> this.DB - sh;
    } else
      this.data[this.t - 1] |= x << sh;
    sh += k;
    if (sh >= this.DB) sh -= this.DB;
  }
  if (k == 8 && (s2[0] & 128) != 0) {
    this.s = -1;
    if (sh > 0) this.data[this.t - 1] |= (1 << this.DB - sh) - 1 << sh;
  }
  this.clamp();
  if (mi) BigInteger$4.ZERO.subTo(this, this);
}
function bnpClamp() {
  var c = this.s & this.DM;
  while (this.t > 0 && this.data[this.t - 1] == c) --this.t;
}
function bnToString(b) {
  if (this.s < 0) return "-" + this.negate().toString(b);
  var k;
  if (b == 16) k = 4;
  else if (b == 8) k = 3;
  else if (b == 2) k = 1;
  else if (b == 32) k = 5;
  else if (b == 4) k = 2;
  else return this.toRadix(b);
  var km = (1 << k) - 1, d, m = false, r = "", i = this.t;
  var p = this.DB - i * this.DB % k;
  if (i-- > 0) {
    if (p < this.DB && (d = this.data[i] >> p) > 0) {
      m = true;
      r = int2char(d);
    }
    while (i >= 0) {
      if (p < k) {
        d = (this.data[i] & (1 << p) - 1) << k - p;
        d |= this.data[--i] >> (p += this.DB - k);
      } else {
        d = this.data[i] >> (p -= k) & km;
        if (p <= 0) {
          p += this.DB;
          --i;
        }
      }
      if (d > 0) m = true;
      if (m) r += int2char(d);
    }
  }
  return m ? r : "0";
}
function bnNegate() {
  var r = nbi();
  BigInteger$4.ZERO.subTo(this, r);
  return r;
}
function bnAbs() {
  return this.s < 0 ? this.negate() : this;
}
function bnCompareTo(a) {
  var r = this.s - a.s;
  if (r != 0) return r;
  var i = this.t;
  r = i - a.t;
  if (r != 0) return this.s < 0 ? -r : r;
  while (--i >= 0) if ((r = this.data[i] - a.data[i]) != 0) return r;
  return 0;
}
function nbits(x) {
  var r = 1, t;
  if ((t = x >>> 16) != 0) {
    x = t;
    r += 16;
  }
  if ((t = x >> 8) != 0) {
    x = t;
    r += 8;
  }
  if ((t = x >> 4) != 0) {
    x = t;
    r += 4;
  }
  if ((t = x >> 2) != 0) {
    x = t;
    r += 2;
  }
  if ((t = x >> 1) != 0) {
    x = t;
    r += 1;
  }
  return r;
}
function bnBitLength() {
  if (this.t <= 0) return 0;
  return this.DB * (this.t - 1) + nbits(this.data[this.t - 1] ^ this.s & this.DM);
}
function bnpDLShiftTo(n, r) {
  var i;
  for (i = this.t - 1; i >= 0; --i) r.data[i + n] = this.data[i];
  for (i = n - 1; i >= 0; --i) r.data[i] = 0;
  r.t = this.t + n;
  r.s = this.s;
}
function bnpDRShiftTo(n, r) {
  for (var i = n; i < this.t; ++i) r.data[i - n] = this.data[i];
  r.t = Math.max(this.t - n, 0);
  r.s = this.s;
}
function bnpLShiftTo(n, r) {
  var bs = n % this.DB;
  var cbs = this.DB - bs;
  var bm = (1 << cbs) - 1;
  var ds = Math.floor(n / this.DB), c = this.s << bs & this.DM, i;
  for (i = this.t - 1; i >= 0; --i) {
    r.data[i + ds + 1] = this.data[i] >> cbs | c;
    c = (this.data[i] & bm) << bs;
  }
  for (i = ds - 1; i >= 0; --i) r.data[i] = 0;
  r.data[ds] = c;
  r.t = this.t + ds + 1;
  r.s = this.s;
  r.clamp();
}
function bnpRShiftTo(n, r) {
  r.s = this.s;
  var ds = Math.floor(n / this.DB);
  if (ds >= this.t) {
    r.t = 0;
    return;
  }
  var bs = n % this.DB;
  var cbs = this.DB - bs;
  var bm = (1 << bs) - 1;
  r.data[0] = this.data[ds] >> bs;
  for (var i = ds + 1; i < this.t; ++i) {
    r.data[i - ds - 1] |= (this.data[i] & bm) << cbs;
    r.data[i - ds] = this.data[i] >> bs;
  }
  if (bs > 0) r.data[this.t - ds - 1] |= (this.s & bm) << cbs;
  r.t = this.t - ds;
  r.clamp();
}
function bnpSubTo(a, r) {
  var i = 0, c = 0, m = Math.min(a.t, this.t);
  while (i < m) {
    c += this.data[i] - a.data[i];
    r.data[i++] = c & this.DM;
    c >>= this.DB;
  }
  if (a.t < this.t) {
    c -= a.s;
    while (i < this.t) {
      c += this.data[i];
      r.data[i++] = c & this.DM;
      c >>= this.DB;
    }
    c += this.s;
  } else {
    c += this.s;
    while (i < a.t) {
      c -= a.data[i];
      r.data[i++] = c & this.DM;
      c >>= this.DB;
    }
    c -= a.s;
  }
  r.s = c < 0 ? -1 : 0;
  if (c < -1) r.data[i++] = this.DV + c;
  else if (c > 0) r.data[i++] = c;
  r.t = i;
  r.clamp();
}
function bnpMultiplyTo(a, r) {
  var x = this.abs(), y = a.abs();
  var i = x.t;
  r.t = i + y.t;
  while (--i >= 0) r.data[i] = 0;
  for (i = 0; i < y.t; ++i) r.data[i + x.t] = x.am(0, y.data[i], r, i, 0, x.t);
  r.s = 0;
  r.clamp();
  if (this.s != a.s) BigInteger$4.ZERO.subTo(r, r);
}
function bnpSquareTo(r) {
  var x = this.abs();
  var i = r.t = 2 * x.t;
  while (--i >= 0) r.data[i] = 0;
  for (i = 0; i < x.t - 1; ++i) {
    var c = x.am(i, x.data[i], r, 2 * i, 0, 1);
    if ((r.data[i + x.t] += x.am(i + 1, 2 * x.data[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
      r.data[i + x.t] -= x.DV;
      r.data[i + x.t + 1] = 1;
    }
  }
  if (r.t > 0) r.data[r.t - 1] += x.am(i, x.data[i], r, 2 * i, 0, 1);
  r.s = 0;
  r.clamp();
}
function bnpDivRemTo(m, q, r) {
  var pm = m.abs();
  if (pm.t <= 0) return;
  var pt = this.abs();
  if (pt.t < pm.t) {
    if (q != null) q.fromInt(0);
    if (r != null) this.copyTo(r);
    return;
  }
  if (r == null) r = nbi();
  var y = nbi(), ts = this.s, ms = m.s;
  var nsh = this.DB - nbits(pm.data[pm.t - 1]);
  if (nsh > 0) {
    pm.lShiftTo(nsh, y);
    pt.lShiftTo(nsh, r);
  } else {
    pm.copyTo(y);
    pt.copyTo(r);
  }
  var ys = y.t;
  var y0 = y.data[ys - 1];
  if (y0 == 0) return;
  var yt = y0 * (1 << this.F1) + (ys > 1 ? y.data[ys - 2] >> this.F2 : 0);
  var d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e = 1 << this.F2;
  var i = r.t, j = i - ys, t = q == null ? nbi() : q;
  y.dlShiftTo(j, t);
  if (r.compareTo(t) >= 0) {
    r.data[r.t++] = 1;
    r.subTo(t, r);
  }
  BigInteger$4.ONE.dlShiftTo(ys, t);
  t.subTo(y, y);
  while (y.t < ys) y.data[y.t++] = 0;
  while (--j >= 0) {
    var qd = r.data[--i] == y0 ? this.DM : Math.floor(r.data[i] * d1 + (r.data[i - 1] + e) * d2);
    if ((r.data[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
      y.dlShiftTo(j, t);
      r.subTo(t, r);
      while (r.data[i] < --qd) r.subTo(t, r);
    }
  }
  if (q != null) {
    r.drShiftTo(ys, q);
    if (ts != ms) BigInteger$4.ZERO.subTo(q, q);
  }
  r.t = ys;
  r.clamp();
  if (nsh > 0) r.rShiftTo(nsh, r);
  if (ts < 0) BigInteger$4.ZERO.subTo(r, r);
}
function bnMod(a) {
  var r = nbi();
  this.abs().divRemTo(a, null, r);
  if (this.s < 0 && r.compareTo(BigInteger$4.ZERO) > 0) a.subTo(r, r);
  return r;
}
function Classic(m) {
  this.m = m;
}
function cConvert(x) {
  if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
  else return x;
}
function cRevert(x) {
  return x;
}
function cReduce(x) {
  x.divRemTo(this.m, null, x);
}
function cMulTo(x, y, r) {
  x.multiplyTo(y, r);
  this.reduce(r);
}
function cSqrTo(x, r) {
  x.squareTo(r);
  this.reduce(r);
}
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;
function bnpInvDigit() {
  if (this.t < 1) return 0;
  var x = this.data[0];
  if ((x & 1) == 0) return 0;
  var y = x & 3;
  y = y * (2 - (x & 15) * y) & 15;
  y = y * (2 - (x & 255) * y) & 255;
  y = y * (2 - ((x & 65535) * y & 65535)) & 65535;
  y = y * (2 - x * y % this.DV) % this.DV;
  return y > 0 ? this.DV - y : -y;
}
function Montgomery(m) {
  this.m = m;
  this.mp = m.invDigit();
  this.mpl = this.mp & 32767;
  this.mph = this.mp >> 15;
  this.um = (1 << m.DB - 15) - 1;
  this.mt2 = 2 * m.t;
}
function montConvert(x) {
  var r = nbi();
  x.abs().dlShiftTo(this.m.t, r);
  r.divRemTo(this.m, null, r);
  if (x.s < 0 && r.compareTo(BigInteger$4.ZERO) > 0) this.m.subTo(r, r);
  return r;
}
function montRevert(x) {
  var r = nbi();
  x.copyTo(r);
  this.reduce(r);
  return r;
}
function montReduce(x) {
  while (x.t <= this.mt2)
    x.data[x.t++] = 0;
  for (var i = 0; i < this.m.t; ++i) {
    var j = x.data[i] & 32767;
    var u0 = j * this.mpl + ((j * this.mph + (x.data[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
    j = i + this.m.t;
    x.data[j] += this.m.am(0, u0, x, i, 0, this.m.t);
    while (x.data[j] >= x.DV) {
      x.data[j] -= x.DV;
      x.data[++j]++;
    }
  }
  x.clamp();
  x.drShiftTo(this.m.t, x);
  if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
}
function montSqrTo(x, r) {
  x.squareTo(r);
  this.reduce(r);
}
function montMulTo(x, y, r) {
  x.multiplyTo(y, r);
  this.reduce(r);
}
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
function bnpIsEven() {
  return (this.t > 0 ? this.data[0] & 1 : this.s) == 0;
}
function bnpExp(e, z) {
  if (e > 4294967295 || e < 1) return BigInteger$4.ONE;
  var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e) - 1;
  g.copyTo(r);
  while (--i >= 0) {
    z.sqrTo(r, r2);
    if ((e & 1 << i) > 0) z.mulTo(r2, g, r);
    else {
      var t = r;
      r = r2;
      r2 = t;
    }
  }
  return z.revert(r);
}
function bnModPowInt(e, m) {
  var z;
  if (e < 256 || m.isEven()) z = new Classic(m);
  else z = new Montgomery(m);
  return this.exp(e, z);
}
BigInteger$4.prototype.copyTo = bnpCopyTo;
BigInteger$4.prototype.fromInt = bnpFromInt;
BigInteger$4.prototype.fromString = bnpFromString;
BigInteger$4.prototype.clamp = bnpClamp;
BigInteger$4.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger$4.prototype.drShiftTo = bnpDRShiftTo;
BigInteger$4.prototype.lShiftTo = bnpLShiftTo;
BigInteger$4.prototype.rShiftTo = bnpRShiftTo;
BigInteger$4.prototype.subTo = bnpSubTo;
BigInteger$4.prototype.multiplyTo = bnpMultiplyTo;
BigInteger$4.prototype.squareTo = bnpSquareTo;
BigInteger$4.prototype.divRemTo = bnpDivRemTo;
BigInteger$4.prototype.invDigit = bnpInvDigit;
BigInteger$4.prototype.isEven = bnpIsEven;
BigInteger$4.prototype.exp = bnpExp;
BigInteger$4.prototype.toString = bnToString;
BigInteger$4.prototype.negate = bnNegate;
BigInteger$4.prototype.abs = bnAbs;
BigInteger$4.prototype.compareTo = bnCompareTo;
BigInteger$4.prototype.bitLength = bnBitLength;
BigInteger$4.prototype.mod = bnMod;
BigInteger$4.prototype.modPowInt = bnModPowInt;
BigInteger$4.ZERO = nbv(0);
BigInteger$4.ONE = nbv(1);
function bnClone() {
  var r = nbi();
  this.copyTo(r);
  return r;
}
function bnIntValue() {
  if (this.s < 0) {
    if (this.t == 1) return this.data[0] - this.DV;
    else if (this.t == 0) return -1;
  } else if (this.t == 1) return this.data[0];
  else if (this.t == 0) return 0;
  return (this.data[1] & (1 << 32 - this.DB) - 1) << this.DB | this.data[0];
}
function bnByteValue() {
  return this.t == 0 ? this.s : this.data[0] << 24 >> 24;
}
function bnShortValue() {
  return this.t == 0 ? this.s : this.data[0] << 16 >> 16;
}
function bnpChunkSize(r) {
  return Math.floor(Math.LN2 * this.DB / Math.log(r));
}
function bnSigNum() {
  if (this.s < 0) return -1;
  else if (this.t <= 0 || this.t == 1 && this.data[0] <= 0) return 0;
  else return 1;
}
function bnpToRadix(b) {
  if (b == null) b = 10;
  if (this.signum() == 0 || b < 2 || b > 36) return "0";
  var cs = this.chunkSize(b);
  var a = Math.pow(b, cs);
  var d = nbv(a), y = nbi(), z = nbi(), r = "";
  this.divRemTo(d, y, z);
  while (y.signum() > 0) {
    r = (a + z.intValue()).toString(b).substr(1) + r;
    y.divRemTo(d, y, z);
  }
  return z.intValue().toString(b) + r;
}
function bnpFromRadix(s2, b) {
  this.fromInt(0);
  if (b == null) b = 10;
  var cs = this.chunkSize(b);
  var d = Math.pow(b, cs), mi = false, j = 0, w = 0;
  for (var i = 0; i < s2.length; ++i) {
    var x = intAt(s2, i);
    if (x < 0) {
      if (s2.charAt(i) == "-" && this.signum() == 0) mi = true;
      continue;
    }
    w = b * w + x;
    if (++j >= cs) {
      this.dMultiply(d);
      this.dAddOffset(w, 0);
      j = 0;
      w = 0;
    }
  }
  if (j > 0) {
    this.dMultiply(Math.pow(b, j));
    this.dAddOffset(w, 0);
  }
  if (mi) BigInteger$4.ZERO.subTo(this, this);
}
function bnpFromNumber(a, b, c) {
  if ("number" == typeof b) {
    if (a < 2) this.fromInt(1);
    else {
      this.fromNumber(a, c);
      if (!this.testBit(a - 1))
        this.bitwiseTo(BigInteger$4.ONE.shiftLeft(a - 1), op_or, this);
      if (this.isEven()) this.dAddOffset(1, 0);
      while (!this.isProbablePrime(b)) {
        this.dAddOffset(2, 0);
        if (this.bitLength() > a) this.subTo(BigInteger$4.ONE.shiftLeft(a - 1), this);
      }
    }
  } else {
    var x = new Array(), t = a & 7;
    x.length = (a >> 3) + 1;
    b.nextBytes(x);
    if (t > 0) x[0] &= (1 << t) - 1;
    else x[0] = 0;
    this.fromString(x, 256);
  }
}
function bnToByteArray() {
  var i = this.t, r = new Array();
  r[0] = this.s;
  var p = this.DB - i * this.DB % 8, d, k = 0;
  if (i-- > 0) {
    if (p < this.DB && (d = this.data[i] >> p) != (this.s & this.DM) >> p)
      r[k++] = d | this.s << this.DB - p;
    while (i >= 0) {
      if (p < 8) {
        d = (this.data[i] & (1 << p) - 1) << 8 - p;
        d |= this.data[--i] >> (p += this.DB - 8);
      } else {
        d = this.data[i] >> (p -= 8) & 255;
        if (p <= 0) {
          p += this.DB;
          --i;
        }
      }
      if ((d & 128) != 0) d |= -256;
      if (k == 0 && (this.s & 128) != (d & 128)) ++k;
      if (k > 0 || d != this.s) r[k++] = d;
    }
  }
  return r;
}
function bnEquals(a) {
  return this.compareTo(a) == 0;
}
function bnMin(a) {
  return this.compareTo(a) < 0 ? this : a;
}
function bnMax(a) {
  return this.compareTo(a) > 0 ? this : a;
}
function bnpBitwiseTo(a, op, r) {
  var i, f, m = Math.min(a.t, this.t);
  for (i = 0; i < m; ++i) r.data[i] = op(this.data[i], a.data[i]);
  if (a.t < this.t) {
    f = a.s & this.DM;
    for (i = m; i < this.t; ++i) r.data[i] = op(this.data[i], f);
    r.t = this.t;
  } else {
    f = this.s & this.DM;
    for (i = m; i < a.t; ++i) r.data[i] = op(f, a.data[i]);
    r.t = a.t;
  }
  r.s = op(this.s, a.s);
  r.clamp();
}
function op_and(x, y) {
  return x & y;
}
function bnAnd(a) {
  var r = nbi();
  this.bitwiseTo(a, op_and, r);
  return r;
}
function op_or(x, y) {
  return x | y;
}
function bnOr(a) {
  var r = nbi();
  this.bitwiseTo(a, op_or, r);
  return r;
}
function op_xor(x, y) {
  return x ^ y;
}
function bnXor(a) {
  var r = nbi();
  this.bitwiseTo(a, op_xor, r);
  return r;
}
function op_andnot(x, y) {
  return x & ~y;
}
function bnAndNot(a) {
  var r = nbi();
  this.bitwiseTo(a, op_andnot, r);
  return r;
}
function bnNot() {
  var r = nbi();
  for (var i = 0; i < this.t; ++i) r.data[i] = this.DM & ~this.data[i];
  r.t = this.t;
  r.s = ~this.s;
  return r;
}
function bnShiftLeft(n) {
  var r = nbi();
  if (n < 0) this.rShiftTo(-n, r);
  else this.lShiftTo(n, r);
  return r;
}
function bnShiftRight(n) {
  var r = nbi();
  if (n < 0) this.lShiftTo(-n, r);
  else this.rShiftTo(n, r);
  return r;
}
function lbit(x) {
  if (x == 0) return -1;
  var r = 0;
  if ((x & 65535) == 0) {
    x >>= 16;
    r += 16;
  }
  if ((x & 255) == 0) {
    x >>= 8;
    r += 8;
  }
  if ((x & 15) == 0) {
    x >>= 4;
    r += 4;
  }
  if ((x & 3) == 0) {
    x >>= 2;
    r += 2;
  }
  if ((x & 1) == 0) ++r;
  return r;
}
function bnGetLowestSetBit() {
  for (var i = 0; i < this.t; ++i)
    if (this.data[i] != 0) return i * this.DB + lbit(this.data[i]);
  if (this.s < 0) return this.t * this.DB;
  return -1;
}
function cbit(x) {
  var r = 0;
  while (x != 0) {
    x &= x - 1;
    ++r;
  }
  return r;
}
function bnBitCount() {
  var r = 0, x = this.s & this.DM;
  for (var i = 0; i < this.t; ++i) r += cbit(this.data[i] ^ x);
  return r;
}
function bnTestBit(n) {
  var j = Math.floor(n / this.DB);
  if (j >= this.t) return this.s != 0;
  return (this.data[j] & 1 << n % this.DB) != 0;
}
function bnpChangeBit(n, op) {
  var r = BigInteger$4.ONE.shiftLeft(n);
  this.bitwiseTo(r, op, r);
  return r;
}
function bnSetBit(n) {
  return this.changeBit(n, op_or);
}
function bnClearBit(n) {
  return this.changeBit(n, op_andnot);
}
function bnFlipBit(n) {
  return this.changeBit(n, op_xor);
}
function bnpAddTo(a, r) {
  var i = 0, c = 0, m = Math.min(a.t, this.t);
  while (i < m) {
    c += this.data[i] + a.data[i];
    r.data[i++] = c & this.DM;
    c >>= this.DB;
  }
  if (a.t < this.t) {
    c += a.s;
    while (i < this.t) {
      c += this.data[i];
      r.data[i++] = c & this.DM;
      c >>= this.DB;
    }
    c += this.s;
  } else {
    c += this.s;
    while (i < a.t) {
      c += a.data[i];
      r.data[i++] = c & this.DM;
      c >>= this.DB;
    }
    c += a.s;
  }
  r.s = c < 0 ? -1 : 0;
  if (c > 0) r.data[i++] = c;
  else if (c < -1) r.data[i++] = this.DV + c;
  r.t = i;
  r.clamp();
}
function bnAdd(a) {
  var r = nbi();
  this.addTo(a, r);
  return r;
}
function bnSubtract(a) {
  var r = nbi();
  this.subTo(a, r);
  return r;
}
function bnMultiply(a) {
  var r = nbi();
  this.multiplyTo(a, r);
  return r;
}
function bnDivide(a) {
  var r = nbi();
  this.divRemTo(a, r, null);
  return r;
}
function bnRemainder(a) {
  var r = nbi();
  this.divRemTo(a, null, r);
  return r;
}
function bnDivideAndRemainder(a) {
  var q = nbi(), r = nbi();
  this.divRemTo(a, q, r);
  return new Array(q, r);
}
function bnpDMultiply(n) {
  this.data[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
  ++this.t;
  this.clamp();
}
function bnpDAddOffset(n, w) {
  if (n == 0) return;
  while (this.t <= w) this.data[this.t++] = 0;
  this.data[w] += n;
  while (this.data[w] >= this.DV) {
    this.data[w] -= this.DV;
    if (++w >= this.t) this.data[this.t++] = 0;
    ++this.data[w];
  }
}
function NullExp() {
}
function nNop(x) {
  return x;
}
function nMulTo(x, y, r) {
  x.multiplyTo(y, r);
}
function nSqrTo(x, r) {
  x.squareTo(r);
}
NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;
function bnPow(e) {
  return this.exp(e, new NullExp());
}
function bnpMultiplyLowerTo(a, n, r) {
  var i = Math.min(this.t + a.t, n);
  r.s = 0;
  r.t = i;
  while (i > 0) r.data[--i] = 0;
  var j;
  for (j = r.t - this.t; i < j; ++i) r.data[i + this.t] = this.am(0, a.data[i], r, i, 0, this.t);
  for (j = Math.min(a.t, n); i < j; ++i) this.am(0, a.data[i], r, i, 0, n - i);
  r.clamp();
}
function bnpMultiplyUpperTo(a, n, r) {
  --n;
  var i = r.t = this.t + a.t - n;
  r.s = 0;
  while (--i >= 0) r.data[i] = 0;
  for (i = Math.max(n - this.t, 0); i < a.t; ++i)
    r.data[this.t + i - n] = this.am(n - i, a.data[i], r, 0, 0, this.t + i - n);
  r.clamp();
  r.drShiftTo(1, r);
}
function Barrett(m) {
  this.r2 = nbi();
  this.q3 = nbi();
  BigInteger$4.ONE.dlShiftTo(2 * m.t, this.r2);
  this.mu = this.r2.divide(m);
  this.m = m;
}
function barrettConvert(x) {
  if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);
  else if (x.compareTo(this.m) < 0) return x;
  else {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
}
function barrettRevert(x) {
  return x;
}
function barrettReduce(x) {
  x.drShiftTo(this.m.t - 1, this.r2);
  if (x.t > this.m.t + 1) {
    x.t = this.m.t + 1;
    x.clamp();
  }
  this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
  this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
  while (x.compareTo(this.r2) < 0) x.dAddOffset(1, this.m.t + 1);
  x.subTo(this.r2, x);
  while (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
}
function barrettSqrTo(x, r) {
  x.squareTo(r);
  this.reduce(r);
}
function barrettMulTo(x, y, r) {
  x.multiplyTo(y, r);
  this.reduce(r);
}
Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;
function bnModPow(e, m) {
  var i = e.bitLength(), k, r = nbv(1), z;
  if (i <= 0) return r;
  else if (i < 18) k = 1;
  else if (i < 48) k = 3;
  else if (i < 144) k = 4;
  else if (i < 768) k = 5;
  else k = 6;
  if (i < 8)
    z = new Classic(m);
  else if (m.isEven())
    z = new Barrett(m);
  else
    z = new Montgomery(m);
  var g = new Array(), n = 3, k1 = k - 1, km = (1 << k) - 1;
  g[1] = z.convert(this);
  if (k > 1) {
    var g2 = nbi();
    z.sqrTo(g[1], g2);
    while (n <= km) {
      g[n] = nbi();
      z.mulTo(g2, g[n - 2], g[n]);
      n += 2;
    }
  }
  var j = e.t - 1, w, is1 = true, r2 = nbi(), t;
  i = nbits(e.data[j]) - 1;
  while (j >= 0) {
    if (i >= k1) w = e.data[j] >> i - k1 & km;
    else {
      w = (e.data[j] & (1 << i + 1) - 1) << k1 - i;
      if (j > 0) w |= e.data[j - 1] >> this.DB + i - k1;
    }
    n = k;
    while ((w & 1) == 0) {
      w >>= 1;
      --n;
    }
    if ((i -= n) < 0) {
      i += this.DB;
      --j;
    }
    if (is1) {
      g[w].copyTo(r);
      is1 = false;
    } else {
      while (n > 1) {
        z.sqrTo(r, r2);
        z.sqrTo(r2, r);
        n -= 2;
      }
      if (n > 0) z.sqrTo(r, r2);
      else {
        t = r;
        r = r2;
        r2 = t;
      }
      z.mulTo(r2, g[w], r);
    }
    while (j >= 0 && (e.data[j] & 1 << i) == 0) {
      z.sqrTo(r, r2);
      t = r;
      r = r2;
      r2 = t;
      if (--i < 0) {
        i = this.DB - 1;
        --j;
      }
    }
  }
  return z.revert(r);
}
function bnGCD(a) {
  var x = this.s < 0 ? this.negate() : this.clone();
  var y = a.s < 0 ? a.negate() : a.clone();
  if (x.compareTo(y) < 0) {
    var t = x;
    x = y;
    y = t;
  }
  var i = x.getLowestSetBit(), g = y.getLowestSetBit();
  if (g < 0) return x;
  if (i < g) g = i;
  if (g > 0) {
    x.rShiftTo(g, x);
    y.rShiftTo(g, y);
  }
  while (x.signum() > 0) {
    if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
    if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
    if (x.compareTo(y) >= 0) {
      x.subTo(y, x);
      x.rShiftTo(1, x);
    } else {
      y.subTo(x, y);
      y.rShiftTo(1, y);
    }
  }
  if (g > 0) y.lShiftTo(g, y);
  return y;
}
function bnpModInt(n) {
  if (n <= 0) return 0;
  var d = this.DV % n, r = this.s < 0 ? n - 1 : 0;
  if (this.t > 0)
    if (d == 0) r = this.data[0] % n;
    else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this.data[i]) % n;
  return r;
}
function bnModInverse(m) {
  var ac = m.isEven();
  if (this.isEven() && ac || m.signum() == 0) return BigInteger$4.ZERO;
  var u = m.clone(), v = this.clone();
  var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
  while (u.signum() != 0) {
    while (u.isEven()) {
      u.rShiftTo(1, u);
      if (ac) {
        if (!a.isEven() || !b.isEven()) {
          a.addTo(this, a);
          b.subTo(m, b);
        }
        a.rShiftTo(1, a);
      } else if (!b.isEven()) b.subTo(m, b);
      b.rShiftTo(1, b);
    }
    while (v.isEven()) {
      v.rShiftTo(1, v);
      if (ac) {
        if (!c.isEven() || !d.isEven()) {
          c.addTo(this, c);
          d.subTo(m, d);
        }
        c.rShiftTo(1, c);
      } else if (!d.isEven()) d.subTo(m, d);
      d.rShiftTo(1, d);
    }
    if (u.compareTo(v) >= 0) {
      u.subTo(v, u);
      if (ac) a.subTo(c, a);
      b.subTo(d, b);
    } else {
      v.subTo(u, v);
      if (ac) c.subTo(a, c);
      d.subTo(b, d);
    }
  }
  if (v.compareTo(BigInteger$4.ONE) != 0) return BigInteger$4.ZERO;
  if (d.compareTo(m) >= 0) return d.subtract(m);
  if (d.signum() < 0) d.addTo(m, d);
  else return d;
  if (d.signum() < 0) return d.add(m);
  else return d;
}
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509];
var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
function bnIsProbablePrime(t) {
  var i, x = this.abs();
  if (x.t == 1 && x.data[0] <= lowprimes[lowprimes.length - 1]) {
    for (i = 0; i < lowprimes.length; ++i)
      if (x.data[0] == lowprimes[i]) return true;
    return false;
  }
  if (x.isEven()) return false;
  i = 1;
  while (i < lowprimes.length) {
    var m = lowprimes[i], j = i + 1;
    while (j < lowprimes.length && m < lplim) m *= lowprimes[j++];
    m = x.modInt(m);
    while (i < j) if (m % lowprimes[i++] == 0) return false;
  }
  return x.millerRabin(t);
}
function bnpMillerRabin(t) {
  var n1 = this.subtract(BigInteger$4.ONE);
  var k = n1.getLowestSetBit();
  if (k <= 0) return false;
  var r = n1.shiftRight(k);
  var prng2 = bnGetPrng();
  var a;
  for (var i = 0; i < t; ++i) {
    do {
      a = new BigInteger$4(this.bitLength(), prng2);
    } while (a.compareTo(BigInteger$4.ONE) <= 0 || a.compareTo(n1) >= 0);
    var y = a.modPow(r, this);
    if (y.compareTo(BigInteger$4.ONE) != 0 && y.compareTo(n1) != 0) {
      var j = 1;
      while (j++ < k && y.compareTo(n1) != 0) {
        y = y.modPowInt(2, this);
        if (y.compareTo(BigInteger$4.ONE) == 0) return false;
      }
      if (y.compareTo(n1) != 0) return false;
    }
  }
  return true;
}
function bnGetPrng() {
  return {
    // x is an array to fill with bytes
    nextBytes: function(x) {
      for (var i = 0; i < x.length; ++i) {
        x[i] = Math.floor(Math.random() * 256);
      }
    }
  };
}
BigInteger$4.prototype.chunkSize = bnpChunkSize;
BigInteger$4.prototype.toRadix = bnpToRadix;
BigInteger$4.prototype.fromRadix = bnpFromRadix;
BigInteger$4.prototype.fromNumber = bnpFromNumber;
BigInteger$4.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger$4.prototype.changeBit = bnpChangeBit;
BigInteger$4.prototype.addTo = bnpAddTo;
BigInteger$4.prototype.dMultiply = bnpDMultiply;
BigInteger$4.prototype.dAddOffset = bnpDAddOffset;
BigInteger$4.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger$4.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger$4.prototype.modInt = bnpModInt;
BigInteger$4.prototype.millerRabin = bnpMillerRabin;
BigInteger$4.prototype.clone = bnClone;
BigInteger$4.prototype.intValue = bnIntValue;
BigInteger$4.prototype.byteValue = bnByteValue;
BigInteger$4.prototype.shortValue = bnShortValue;
BigInteger$4.prototype.signum = bnSigNum;
BigInteger$4.prototype.toByteArray = bnToByteArray;
BigInteger$4.prototype.equals = bnEquals;
BigInteger$4.prototype.min = bnMin;
BigInteger$4.prototype.max = bnMax;
BigInteger$4.prototype.and = bnAnd;
BigInteger$4.prototype.or = bnOr;
BigInteger$4.prototype.xor = bnXor;
BigInteger$4.prototype.andNot = bnAndNot;
BigInteger$4.prototype.not = bnNot;
BigInteger$4.prototype.shiftLeft = bnShiftLeft;
BigInteger$4.prototype.shiftRight = bnShiftRight;
BigInteger$4.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger$4.prototype.bitCount = bnBitCount;
BigInteger$4.prototype.testBit = bnTestBit;
BigInteger$4.prototype.setBit = bnSetBit;
BigInteger$4.prototype.clearBit = bnClearBit;
BigInteger$4.prototype.flipBit = bnFlipBit;
BigInteger$4.prototype.add = bnAdd;
BigInteger$4.prototype.subtract = bnSubtract;
BigInteger$4.prototype.multiply = bnMultiply;
BigInteger$4.prototype.divide = bnDivide;
BigInteger$4.prototype.remainder = bnRemainder;
BigInteger$4.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger$4.prototype.modPow = bnModPow;
BigInteger$4.prototype.modInverse = bnModInverse;
BigInteger$4.prototype.pow = bnPow;
BigInteger$4.prototype.gcd = bnGCD;
BigInteger$4.prototype.isProbablePrime = bnIsProbablePrime;
var forge$k = forge$C;
var sha1 = forge$k.sha1 = forge$k.sha1 || {};
forge$k.md.sha1 = forge$k.md.algorithms.sha1 = sha1;
sha1.create = function() {
  if (!_initialized$1) {
    _init$1();
  }
  var _state = null;
  var _input = forge$k.util.createBuffer();
  var _w = new Array(80);
  var md = {
    algorithm: "sha1",
    blockLength: 64,
    digestLength: 20,
    // 56-bit length of message so far (does not including padding)
    messageLength: 0,
    // true message length
    fullMessageLength: null,
    // size of message length in bytes
    messageLengthSize: 8
  };
  md.start = function() {
    md.messageLength = 0;
    md.fullMessageLength = md.messageLength64 = [];
    var int32s = md.messageLengthSize / 4;
    for (var i = 0; i < int32s; ++i) {
      md.fullMessageLength.push(0);
    }
    _input = forge$k.util.createBuffer();
    _state = {
      h0: 1732584193,
      h1: 4023233417,
      h2: 2562383102,
      h3: 271733878,
      h4: 3285377520
    };
    return md;
  };
  md.start();
  md.update = function(msg, encoding) {
    if (encoding === "utf8") {
      msg = forge$k.util.encodeUtf8(msg);
    }
    var len = msg.length;
    md.messageLength += len;
    len = [len / 4294967296 >>> 0, len >>> 0];
    for (var i = md.fullMessageLength.length - 1; i >= 0; --i) {
      md.fullMessageLength[i] += len[1];
      len[1] = len[0] + (md.fullMessageLength[i] / 4294967296 >>> 0);
      md.fullMessageLength[i] = md.fullMessageLength[i] >>> 0;
      len[0] = len[1] / 4294967296 >>> 0;
    }
    _input.putBytes(msg);
    _update$1(_state, _w, _input);
    if (_input.read > 2048 || _input.length() === 0) {
      _input.compact();
    }
    return md;
  };
  md.digest = function() {
    var finalBlock = forge$k.util.createBuffer();
    finalBlock.putBytes(_input.bytes());
    var remaining = md.fullMessageLength[md.fullMessageLength.length - 1] + md.messageLengthSize;
    var overflow = remaining & md.blockLength - 1;
    finalBlock.putBytes(_padding$1.substr(0, md.blockLength - overflow));
    var next, carry;
    var bits = md.fullMessageLength[0] * 8;
    for (var i = 0; i < md.fullMessageLength.length - 1; ++i) {
      next = md.fullMessageLength[i + 1] * 8;
      carry = next / 4294967296 >>> 0;
      bits += carry;
      finalBlock.putInt32(bits >>> 0);
      bits = next >>> 0;
    }
    finalBlock.putInt32(bits);
    var s2 = {
      h0: _state.h0,
      h1: _state.h1,
      h2: _state.h2,
      h3: _state.h3,
      h4: _state.h4
    };
    _update$1(s2, _w, finalBlock);
    var rval = forge$k.util.createBuffer();
    rval.putInt32(s2.h0);
    rval.putInt32(s2.h1);
    rval.putInt32(s2.h2);
    rval.putInt32(s2.h3);
    rval.putInt32(s2.h4);
    return rval;
  };
  return md;
};
var _padding$1 = null;
var _initialized$1 = false;
function _init$1() {
  _padding$1 = String.fromCharCode(128);
  _padding$1 += forge$k.util.fillString(String.fromCharCode(0), 64);
  _initialized$1 = true;
}
function _update$1(s2, w, bytes) {
  var t, a, b, c, d, e, f, i;
  var len = bytes.length();
  while (len >= 64) {
    a = s2.h0;
    b = s2.h1;
    c = s2.h2;
    d = s2.h3;
    e = s2.h4;
    for (i = 0; i < 16; ++i) {
      t = bytes.getInt32();
      w[i] = t;
      f = d ^ b & (c ^ d);
      t = (a << 5 | a >>> 27) + f + e + 1518500249 + t;
      e = d;
      d = c;
      c = (b << 30 | b >>> 2) >>> 0;
      b = a;
      a = t;
    }
    for (; i < 20; ++i) {
      t = w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16];
      t = t << 1 | t >>> 31;
      w[i] = t;
      f = d ^ b & (c ^ d);
      t = (a << 5 | a >>> 27) + f + e + 1518500249 + t;
      e = d;
      d = c;
      c = (b << 30 | b >>> 2) >>> 0;
      b = a;
      a = t;
    }
    for (; i < 32; ++i) {
      t = w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16];
      t = t << 1 | t >>> 31;
      w[i] = t;
      f = b ^ c ^ d;
      t = (a << 5 | a >>> 27) + f + e + 1859775393 + t;
      e = d;
      d = c;
      c = (b << 30 | b >>> 2) >>> 0;
      b = a;
      a = t;
    }
    for (; i < 40; ++i) {
      t = w[i - 6] ^ w[i - 16] ^ w[i - 28] ^ w[i - 32];
      t = t << 2 | t >>> 30;
      w[i] = t;
      f = b ^ c ^ d;
      t = (a << 5 | a >>> 27) + f + e + 1859775393 + t;
      e = d;
      d = c;
      c = (b << 30 | b >>> 2) >>> 0;
      b = a;
      a = t;
    }
    for (; i < 60; ++i) {
      t = w[i - 6] ^ w[i - 16] ^ w[i - 28] ^ w[i - 32];
      t = t << 2 | t >>> 30;
      w[i] = t;
      f = b & c | d & (b ^ c);
      t = (a << 5 | a >>> 27) + f + e + 2400959708 + t;
      e = d;
      d = c;
      c = (b << 30 | b >>> 2) >>> 0;
      b = a;
      a = t;
    }
    for (; i < 80; ++i) {
      t = w[i - 6] ^ w[i - 16] ^ w[i - 28] ^ w[i - 32];
      t = t << 2 | t >>> 30;
      w[i] = t;
      f = b ^ c ^ d;
      t = (a << 5 | a >>> 27) + f + e + 3395469782 + t;
      e = d;
      d = c;
      c = (b << 30 | b >>> 2) >>> 0;
      b = a;
      a = t;
    }
    s2.h0 = s2.h0 + a | 0;
    s2.h1 = s2.h1 + b | 0;
    s2.h2 = s2.h2 + c | 0;
    s2.h3 = s2.h3 + d | 0;
    s2.h4 = s2.h4 + e | 0;
    len -= 64;
  }
}
var forge$j = forge$C;
var pkcs1 = forge$j.pkcs1 = forge$j.pkcs1 || {};
pkcs1.encode_rsa_oaep = function(key, message, options) {
  var label;
  var seed;
  var md;
  var mgf1Md;
  if (typeof options === "string") {
    label = options;
    seed = arguments[3] || void 0;
    md = arguments[4] || void 0;
  } else if (options) {
    label = options.label || void 0;
    seed = options.seed || void 0;
    md = options.md || void 0;
    if (options.mgf1 && options.mgf1.md) {
      mgf1Md = options.mgf1.md;
    }
  }
  if (!md) {
    md = forge$j.md.sha1.create();
  } else {
    md.start();
  }
  if (!mgf1Md) {
    mgf1Md = md;
  }
  var keyLength = Math.ceil(key.n.bitLength() / 8);
  var maxLength = keyLength - 2 * md.digestLength - 2;
  if (message.length > maxLength) {
    var error = new Error("RSAES-OAEP input message length is too long.");
    error.length = message.length;
    error.maxLength = maxLength;
    throw error;
  }
  if (!label) {
    label = "";
  }
  md.update(label, "raw");
  var lHash = md.digest();
  var PS = "";
  var PS_length = maxLength - message.length;
  for (var i = 0; i < PS_length; i++) {
    PS += "\0";
  }
  var DB = lHash.getBytes() + PS + "" + message;
  if (!seed) {
    seed = forge$j.random.getBytes(md.digestLength);
  } else if (seed.length !== md.digestLength) {
    var error = new Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.");
    error.seedLength = seed.length;
    error.digestLength = md.digestLength;
    throw error;
  }
  var dbMask = rsa_mgf1(seed, keyLength - md.digestLength - 1, mgf1Md);
  var maskedDB = forge$j.util.xorBytes(DB, dbMask, DB.length);
  var seedMask = rsa_mgf1(maskedDB, md.digestLength, mgf1Md);
  var maskedSeed = forge$j.util.xorBytes(seed, seedMask, seed.length);
  return "\0" + maskedSeed + maskedDB;
};
pkcs1.decode_rsa_oaep = function(key, em, options) {
  var label;
  var md;
  var mgf1Md;
  if (typeof options === "string") {
    label = options;
    md = arguments[3] || void 0;
  } else if (options) {
    label = options.label || void 0;
    md = options.md || void 0;
    if (options.mgf1 && options.mgf1.md) {
      mgf1Md = options.mgf1.md;
    }
  }
  var keyLength = Math.ceil(key.n.bitLength() / 8);
  if (em.length !== keyLength) {
    var error = new Error("RSAES-OAEP encoded message length is invalid.");
    error.length = em.length;
    error.expectedLength = keyLength;
    throw error;
  }
  if (md === void 0) {
    md = forge$j.md.sha1.create();
  } else {
    md.start();
  }
  if (!mgf1Md) {
    mgf1Md = md;
  }
  if (keyLength < 2 * md.digestLength + 2) {
    throw new Error("RSAES-OAEP key is too short for the hash function.");
  }
  if (!label) {
    label = "";
  }
  md.update(label, "raw");
  var lHash = md.digest().getBytes();
  var y = em.charAt(0);
  var maskedSeed = em.substring(1, md.digestLength + 1);
  var maskedDB = em.substring(1 + md.digestLength);
  var seedMask = rsa_mgf1(maskedDB, md.digestLength, mgf1Md);
  var seed = forge$j.util.xorBytes(maskedSeed, seedMask, maskedSeed.length);
  var dbMask = rsa_mgf1(seed, keyLength - md.digestLength - 1, mgf1Md);
  var db = forge$j.util.xorBytes(maskedDB, dbMask, maskedDB.length);
  var lHashPrime = db.substring(0, md.digestLength);
  var error = y !== "\0";
  for (var i = 0; i < md.digestLength; ++i) {
    error |= lHash.charAt(i) !== lHashPrime.charAt(i);
  }
  var in_ps = 1;
  var index = md.digestLength;
  for (var j = md.digestLength; j < db.length; j++) {
    var code = db.charCodeAt(j);
    var is_0 = code & 1 ^ 1;
    var error_mask = in_ps ? 65534 : 0;
    error |= code & error_mask;
    in_ps = in_ps & is_0;
    index += in_ps;
  }
  if (error || db.charCodeAt(index) !== 1) {
    throw new Error("Invalid RSAES-OAEP padding.");
  }
  return db.substring(index + 1);
};
function rsa_mgf1(seed, maskLength, hash2) {
  if (!hash2) {
    hash2 = forge$j.md.sha1.create();
  }
  var t = "";
  var count = Math.ceil(maskLength / hash2.digestLength);
  for (var i = 0; i < count; ++i) {
    var c = String.fromCharCode(
      i >> 24 & 255,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255
    );
    hash2.start();
    hash2.update(seed + c);
    t += hash2.digest().getBytes();
  }
  return t.substring(0, maskLength);
}
var forge$i = forge$C;
(function() {
  if (forge$i.prime) {
    forge$i.prime;
    return;
  }
  var prime = forge$i.prime = forge$i.prime || {};
  var BigInteger2 = forge$i.jsbn.BigInteger;
  var GCD_30_DELTA2 = [6, 4, 2, 4, 2, 4, 6, 2];
  var THIRTY = new BigInteger2(null);
  THIRTY.fromInt(30);
  var op_or2 = function(x, y) {
    return x | y;
  };
  prime.generateProbablePrime = function(bits, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    options = options || {};
    var algorithm = options.algorithm || "PRIMEINC";
    if (typeof algorithm === "string") {
      algorithm = { name: algorithm };
    }
    algorithm.options = algorithm.options || {};
    var prng2 = options.prng || forge$i.random;
    var rng = {
      // x is an array to fill with bytes
      nextBytes: function(x) {
        var b = prng2.getBytesSync(x.length);
        for (var i = 0; i < x.length; ++i) {
          x[i] = b.charCodeAt(i);
        }
      }
    };
    if (algorithm.name === "PRIMEINC") {
      return primeincFindPrime(bits, rng, algorithm.options, callback);
    }
    throw new Error("Invalid prime generation algorithm: " + algorithm.name);
  };
  function primeincFindPrime(bits, rng, options, callback) {
    if ("workers" in options) {
      return primeincFindPrimeWithWorkers(bits, rng, options, callback);
    }
    return primeincFindPrimeWithoutWorkers(bits, rng, options, callback);
  }
  function primeincFindPrimeWithoutWorkers(bits, rng, options, callback) {
    var num = generateRandom(bits, rng);
    var deltaIdx = 0;
    var mrTests = getMillerRabinTests(num.bitLength());
    if ("millerRabinTests" in options) {
      mrTests = options.millerRabinTests;
    }
    var maxBlockTime = 10;
    if ("maxBlockTime" in options) {
      maxBlockTime = options.maxBlockTime;
    }
    _primeinc(num, bits, rng, deltaIdx, mrTests, maxBlockTime, callback);
  }
  function _primeinc(num, bits, rng, deltaIdx, mrTests, maxBlockTime, callback) {
    var start = +/* @__PURE__ */ new Date();
    do {
      if (num.bitLength() > bits) {
        num = generateRandom(bits, rng);
      }
      if (num.isProbablePrime(mrTests)) {
        return callback(null, num);
      }
      num.dAddOffset(GCD_30_DELTA2[deltaIdx++ % 8], 0);
    } while (maxBlockTime < 0 || +/* @__PURE__ */ new Date() - start < maxBlockTime);
    forge$i.util.setImmediate(function() {
      _primeinc(num, bits, rng, deltaIdx, mrTests, maxBlockTime, callback);
    });
  }
  function primeincFindPrimeWithWorkers(bits, rng, options, callback) {
    if (typeof Worker === "undefined") {
      return primeincFindPrimeWithoutWorkers(bits, rng, options, callback);
    }
    var num = generateRandom(bits, rng);
    var numWorkers = options.workers;
    var workLoad = options.workLoad || 100;
    var range = workLoad * 30 / 8;
    var workerScript = options.workerScript || "forge/prime.worker.js";
    if (numWorkers === -1) {
      return forge$i.util.estimateCores(function(err, cores) {
        if (err) {
          cores = 2;
        }
        numWorkers = cores - 1;
        generate();
      });
    }
    generate();
    function generate() {
      numWorkers = Math.max(1, numWorkers);
      var workers = [];
      for (var i = 0; i < numWorkers; ++i) {
        workers[i] = new Worker(workerScript);
      }
      for (var i = 0; i < numWorkers; ++i) {
        workers[i].addEventListener("message", workerMessage);
      }
      var found = false;
      function workerMessage(e) {
        if (found) {
          return;
        }
        var data = e.data;
        if (data.found) {
          for (var i2 = 0; i2 < workers.length; ++i2) {
            workers[i2].terminate();
          }
          found = true;
          return callback(null, new BigInteger2(data.prime, 16));
        }
        if (num.bitLength() > bits) {
          num = generateRandom(bits, rng);
        }
        var hex = num.toString(16);
        e.target.postMessage({
          hex,
          workLoad
        });
        num.dAddOffset(range, 0);
      }
    }
  }
  function generateRandom(bits, rng) {
    var num = new BigInteger2(bits, rng);
    var bits1 = bits - 1;
    if (!num.testBit(bits1)) {
      num.bitwiseTo(BigInteger2.ONE.shiftLeft(bits1), op_or2, num);
    }
    num.dAddOffset(31 - num.mod(THIRTY).byteValue(), 0);
    return num;
  }
  function getMillerRabinTests(bits) {
    if (bits <= 100) return 27;
    if (bits <= 150) return 18;
    if (bits <= 200) return 15;
    if (bits <= 250) return 12;
    if (bits <= 300) return 9;
    if (bits <= 350) return 8;
    if (bits <= 400) return 7;
    if (bits <= 500) return 6;
    if (bits <= 600) return 5;
    if (bits <= 800) return 4;
    if (bits <= 1250) return 3;
    return 2;
  }
})();
var forge$h = forge$C;
if (typeof BigInteger$3 === "undefined") {
  var BigInteger$3 = forge$h.jsbn.BigInteger;
}
var _crypto = forge$h.util.isNodejs ? crypto$1 : null;
var asn1$7 = forge$h.asn1;
var util = forge$h.util;
forge$h.pki = forge$h.pki || {};
forge$h.pki.rsa = forge$h.rsa = forge$h.rsa || {};
var pki$4 = forge$h.pki;
var GCD_30_DELTA = [6, 4, 2, 4, 2, 4, 6, 2];
var privateKeyValidator$1 = {
  // PrivateKeyInfo
  name: "PrivateKeyInfo",
  tagClass: asn1$7.Class.UNIVERSAL,
  type: asn1$7.Type.SEQUENCE,
  constructed: true,
  value: [{
    // Version (INTEGER)
    name: "PrivateKeyInfo.version",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.INTEGER,
    constructed: false,
    capture: "privateKeyVersion"
  }, {
    // privateKeyAlgorithm
    name: "PrivateKeyInfo.privateKeyAlgorithm",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "AlgorithmIdentifier.algorithm",
      tagClass: asn1$7.Class.UNIVERSAL,
      type: asn1$7.Type.OID,
      constructed: false,
      capture: "privateKeyOid"
    }]
  }, {
    // PrivateKey
    name: "PrivateKeyInfo",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.OCTETSTRING,
    constructed: false,
    capture: "privateKey"
  }]
};
var rsaPrivateKeyValidator = {
  // RSAPrivateKey
  name: "RSAPrivateKey",
  tagClass: asn1$7.Class.UNIVERSAL,
  type: asn1$7.Type.SEQUENCE,
  constructed: true,
  value: [{
    // Version (INTEGER)
    name: "RSAPrivateKey.version",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.INTEGER,
    constructed: false,
    capture: "privateKeyVersion"
  }, {
    // modulus (n)
    name: "RSAPrivateKey.modulus",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.INTEGER,
    constructed: false,
    capture: "privateKeyModulus"
  }, {
    // publicExponent (e)
    name: "RSAPrivateKey.publicExponent",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.INTEGER,
    constructed: false,
    capture: "privateKeyPublicExponent"
  }, {
    // privateExponent (d)
    name: "RSAPrivateKey.privateExponent",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.INTEGER,
    constructed: false,
    capture: "privateKeyPrivateExponent"
  }, {
    // prime1 (p)
    name: "RSAPrivateKey.prime1",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.INTEGER,
    constructed: false,
    capture: "privateKeyPrime1"
  }, {
    // prime2 (q)
    name: "RSAPrivateKey.prime2",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.INTEGER,
    constructed: false,
    capture: "privateKeyPrime2"
  }, {
    // exponent1 (d mod (p-1))
    name: "RSAPrivateKey.exponent1",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.INTEGER,
    constructed: false,
    capture: "privateKeyExponent1"
  }, {
    // exponent2 (d mod (q-1))
    name: "RSAPrivateKey.exponent2",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.INTEGER,
    constructed: false,
    capture: "privateKeyExponent2"
  }, {
    // coefficient ((inverse of q) mod p)
    name: "RSAPrivateKey.coefficient",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.INTEGER,
    constructed: false,
    capture: "privateKeyCoefficient"
  }]
};
var rsaPublicKeyValidator = {
  // RSAPublicKey
  name: "RSAPublicKey",
  tagClass: asn1$7.Class.UNIVERSAL,
  type: asn1$7.Type.SEQUENCE,
  constructed: true,
  value: [{
    // modulus (n)
    name: "RSAPublicKey.modulus",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.INTEGER,
    constructed: false,
    capture: "publicKeyModulus"
  }, {
    // publicExponent (e)
    name: "RSAPublicKey.exponent",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.INTEGER,
    constructed: false,
    capture: "publicKeyExponent"
  }]
};
var publicKeyValidator$2 = forge$h.pki.rsa.publicKeyValidator = {
  name: "SubjectPublicKeyInfo",
  tagClass: asn1$7.Class.UNIVERSAL,
  type: asn1$7.Type.SEQUENCE,
  constructed: true,
  captureAsn1: "subjectPublicKeyInfo",
  value: [{
    name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "AlgorithmIdentifier.algorithm",
      tagClass: asn1$7.Class.UNIVERSAL,
      type: asn1$7.Type.OID,
      constructed: false,
      capture: "publicKeyOid"
    }]
  }, {
    // subjectPublicKey
    name: "SubjectPublicKeyInfo.subjectPublicKey",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.BITSTRING,
    constructed: false,
    value: [{
      // RSAPublicKey
      name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
      tagClass: asn1$7.Class.UNIVERSAL,
      type: asn1$7.Type.SEQUENCE,
      constructed: true,
      optional: true,
      captureAsn1: "rsaPublicKey"
    }]
  }]
};
var digestInfoValidator = {
  name: "DigestInfo",
  tagClass: asn1$7.Class.UNIVERSAL,
  type: asn1$7.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "DigestInfo.DigestAlgorithm",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "DigestInfo.DigestAlgorithm.algorithmIdentifier",
      tagClass: asn1$7.Class.UNIVERSAL,
      type: asn1$7.Type.OID,
      constructed: false,
      capture: "algorithmIdentifier"
    }, {
      // NULL paramters
      name: "DigestInfo.DigestAlgorithm.parameters",
      tagClass: asn1$7.Class.UNIVERSAL,
      type: asn1$7.Type.NULL,
      // captured only to check existence for md2 and md5
      capture: "parameters",
      optional: true,
      constructed: false
    }]
  }, {
    // digest
    name: "DigestInfo.digest",
    tagClass: asn1$7.Class.UNIVERSAL,
    type: asn1$7.Type.OCTETSTRING,
    constructed: false,
    capture: "digest"
  }]
};
var emsaPkcs1v15encode = function(md) {
  var oid;
  if (md.algorithm in pki$4.oids) {
    oid = pki$4.oids[md.algorithm];
  } else {
    var error = new Error("Unknown message digest algorithm.");
    error.algorithm = md.algorithm;
    throw error;
  }
  var oidBytes = asn1$7.oidToDer(oid).getBytes();
  var digestInfo = asn1$7.create(
    asn1$7.Class.UNIVERSAL,
    asn1$7.Type.SEQUENCE,
    true,
    []
  );
  var digestAlgorithm = asn1$7.create(
    asn1$7.Class.UNIVERSAL,
    asn1$7.Type.SEQUENCE,
    true,
    []
  );
  digestAlgorithm.value.push(asn1$7.create(
    asn1$7.Class.UNIVERSAL,
    asn1$7.Type.OID,
    false,
    oidBytes
  ));
  digestAlgorithm.value.push(asn1$7.create(
    asn1$7.Class.UNIVERSAL,
    asn1$7.Type.NULL,
    false,
    ""
  ));
  var digest = asn1$7.create(
    asn1$7.Class.UNIVERSAL,
    asn1$7.Type.OCTETSTRING,
    false,
    md.digest().getBytes()
  );
  digestInfo.value.push(digestAlgorithm);
  digestInfo.value.push(digest);
  return asn1$7.toDer(digestInfo).getBytes();
};
var _modPow = function(x, key, pub) {
  if (pub) {
    return x.modPow(key.e, key.n);
  }
  if (!key.p || !key.q) {
    return x.modPow(key.d, key.n);
  }
  if (!key.dP) {
    key.dP = key.d.mod(key.p.subtract(BigInteger$3.ONE));
  }
  if (!key.dQ) {
    key.dQ = key.d.mod(key.q.subtract(BigInteger$3.ONE));
  }
  if (!key.qInv) {
    key.qInv = key.q.modInverse(key.p);
  }
  var r;
  do {
    r = new BigInteger$3(
      forge$h.util.bytesToHex(forge$h.random.getBytes(key.n.bitLength() / 8)),
      16
    );
  } while (r.compareTo(key.n) >= 0 || !r.gcd(key.n).equals(BigInteger$3.ONE));
  x = x.multiply(r.modPow(key.e, key.n)).mod(key.n);
  var xp = x.mod(key.p).modPow(key.dP, key.p);
  var xq = x.mod(key.q).modPow(key.dQ, key.q);
  while (xp.compareTo(xq) < 0) {
    xp = xp.add(key.p);
  }
  var y = xp.subtract(xq).multiply(key.qInv).mod(key.p).multiply(key.q).add(xq);
  y = y.multiply(r.modInverse(key.n)).mod(key.n);
  return y;
};
pki$4.rsa.encrypt = function(m, key, bt) {
  var pub = bt;
  var eb;
  var k = Math.ceil(key.n.bitLength() / 8);
  if (bt !== false && bt !== true) {
    pub = bt === 2;
    eb = _encodePkcs1_v1_5(m, key, bt);
  } else {
    eb = forge$h.util.createBuffer();
    eb.putBytes(m);
  }
  var x = new BigInteger$3(eb.toHex(), 16);
  var y = _modPow(x, key, pub);
  var yhex = y.toString(16);
  var ed = forge$h.util.createBuffer();
  var zeros = k - Math.ceil(yhex.length / 2);
  while (zeros > 0) {
    ed.putByte(0);
    --zeros;
  }
  ed.putBytes(forge$h.util.hexToBytes(yhex));
  return ed.getBytes();
};
pki$4.rsa.decrypt = function(ed, key, pub, ml) {
  var k = Math.ceil(key.n.bitLength() / 8);
  if (ed.length !== k) {
    var error = new Error("Encrypted message length is invalid.");
    error.length = ed.length;
    error.expected = k;
    throw error;
  }
  var y = new BigInteger$3(forge$h.util.createBuffer(ed).toHex(), 16);
  if (y.compareTo(key.n) >= 0) {
    throw new Error("Encrypted message is invalid.");
  }
  var x = _modPow(y, key, pub);
  var xhex = x.toString(16);
  var eb = forge$h.util.createBuffer();
  var zeros = k - Math.ceil(xhex.length / 2);
  while (zeros > 0) {
    eb.putByte(0);
    --zeros;
  }
  eb.putBytes(forge$h.util.hexToBytes(xhex));
  if (ml !== false) {
    return _decodePkcs1_v1_5(eb.getBytes(), key, pub);
  }
  return eb.getBytes();
};
pki$4.rsa.createKeyPairGenerationState = function(bits, e, options) {
  if (typeof bits === "string") {
    bits = parseInt(bits, 10);
  }
  bits = bits || 2048;
  options = options || {};
  var prng2 = options.prng || forge$h.random;
  var rng = {
    // x is an array to fill with bytes
    nextBytes: function(x) {
      var b = prng2.getBytesSync(x.length);
      for (var i = 0; i < x.length; ++i) {
        x[i] = b.charCodeAt(i);
      }
    }
  };
  var algorithm = options.algorithm || "PRIMEINC";
  var rval;
  if (algorithm === "PRIMEINC") {
    rval = {
      algorithm,
      state: 0,
      bits,
      rng,
      eInt: e || 65537,
      e: new BigInteger$3(null),
      p: null,
      q: null,
      qBits: bits >> 1,
      pBits: bits - (bits >> 1),
      pqState: 0,
      num: null,
      keys: null
    };
    rval.e.fromInt(rval.eInt);
  } else {
    throw new Error("Invalid key generation algorithm: " + algorithm);
  }
  return rval;
};
pki$4.rsa.stepKeyPairGenerationState = function(state, n) {
  if (!("algorithm" in state)) {
    state.algorithm = "PRIMEINC";
  }
  var THIRTY = new BigInteger$3(null);
  THIRTY.fromInt(30);
  var deltaIdx = 0;
  var op_or2 = function(x, y) {
    return x | y;
  };
  var t1 = +/* @__PURE__ */ new Date();
  var t2;
  var total = 0;
  while (state.keys === null && (n <= 0 || total < n)) {
    if (state.state === 0) {
      var bits = state.p === null ? state.pBits : state.qBits;
      var bits1 = bits - 1;
      if (state.pqState === 0) {
        state.num = new BigInteger$3(bits, state.rng);
        if (!state.num.testBit(bits1)) {
          state.num.bitwiseTo(
            BigInteger$3.ONE.shiftLeft(bits1),
            op_or2,
            state.num
          );
        }
        state.num.dAddOffset(31 - state.num.mod(THIRTY).byteValue(), 0);
        deltaIdx = 0;
        ++state.pqState;
      } else if (state.pqState === 1) {
        if (state.num.bitLength() > bits) {
          state.pqState = 0;
        } else if (state.num.isProbablePrime(
          _getMillerRabinTests(state.num.bitLength())
        )) {
          ++state.pqState;
        } else {
          state.num.dAddOffset(GCD_30_DELTA[deltaIdx++ % 8], 0);
        }
      } else if (state.pqState === 2) {
        state.pqState = state.num.subtract(BigInteger$3.ONE).gcd(state.e).compareTo(BigInteger$3.ONE) === 0 ? 3 : 0;
      } else if (state.pqState === 3) {
        state.pqState = 0;
        if (state.p === null) {
          state.p = state.num;
        } else {
          state.q = state.num;
        }
        if (state.p !== null && state.q !== null) {
          ++state.state;
        }
        state.num = null;
      }
    } else if (state.state === 1) {
      if (state.p.compareTo(state.q) < 0) {
        state.num = state.p;
        state.p = state.q;
        state.q = state.num;
      }
      ++state.state;
    } else if (state.state === 2) {
      state.p1 = state.p.subtract(BigInteger$3.ONE);
      state.q1 = state.q.subtract(BigInteger$3.ONE);
      state.phi = state.p1.multiply(state.q1);
      ++state.state;
    } else if (state.state === 3) {
      if (state.phi.gcd(state.e).compareTo(BigInteger$3.ONE) === 0) {
        ++state.state;
      } else {
        state.p = null;
        state.q = null;
        state.state = 0;
      }
    } else if (state.state === 4) {
      state.n = state.p.multiply(state.q);
      if (state.n.bitLength() === state.bits) {
        ++state.state;
      } else {
        state.q = null;
        state.state = 0;
      }
    } else if (state.state === 5) {
      var d = state.e.modInverse(state.phi);
      state.keys = {
        privateKey: pki$4.rsa.setPrivateKey(
          state.n,
          state.e,
          d,
          state.p,
          state.q,
          d.mod(state.p1),
          d.mod(state.q1),
          state.q.modInverse(state.p)
        ),
        publicKey: pki$4.rsa.setPublicKey(state.n, state.e)
      };
    }
    t2 = +/* @__PURE__ */ new Date();
    total += t2 - t1;
    t1 = t2;
  }
  return state.keys !== null;
};
pki$4.rsa.generateKeyPair = function(bits, e, options, callback) {
  if (arguments.length === 1) {
    if (typeof bits === "object") {
      options = bits;
      bits = void 0;
    } else if (typeof bits === "function") {
      callback = bits;
      bits = void 0;
    }
  } else if (arguments.length === 2) {
    if (typeof bits === "number") {
      if (typeof e === "function") {
        callback = e;
        e = void 0;
      } else if (typeof e !== "number") {
        options = e;
        e = void 0;
      }
    } else {
      options = bits;
      callback = e;
      bits = void 0;
      e = void 0;
    }
  } else if (arguments.length === 3) {
    if (typeof e === "number") {
      if (typeof options === "function") {
        callback = options;
        options = void 0;
      }
    } else {
      callback = options;
      options = e;
      e = void 0;
    }
  }
  options = options || {};
  if (bits === void 0) {
    bits = options.bits || 2048;
  }
  if (e === void 0) {
    e = options.e || 65537;
  }
  if (!forge$h.options.usePureJavaScript && !options.prng && bits >= 256 && bits <= 16384 && (e === 65537 || e === 3)) {
    if (callback) {
      if (_detectNodeCrypto("generateKeyPair")) {
        return _crypto.generateKeyPair("rsa", {
          modulusLength: bits,
          publicExponent: e,
          publicKeyEncoding: {
            type: "spki",
            format: "pem"
          },
          privateKeyEncoding: {
            type: "pkcs8",
            format: "pem"
          }
        }, function(err, pub, priv) {
          if (err) {
            return callback(err);
          }
          callback(null, {
            privateKey: pki$4.privateKeyFromPem(priv),
            publicKey: pki$4.publicKeyFromPem(pub)
          });
        });
      }
      if (_detectSubtleCrypto("generateKey") && _detectSubtleCrypto("exportKey")) {
        return util.globalScope.crypto.subtle.generateKey({
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: bits,
          publicExponent: _intToUint8Array(e),
          hash: { name: "SHA-256" }
        }, true, ["sign", "verify"]).then(function(pair) {
          return util.globalScope.crypto.subtle.exportKey(
            "pkcs8",
            pair.privateKey
          );
        }).then(void 0, function(err) {
          callback(err);
        }).then(function(pkcs8) {
          if (pkcs8) {
            var privateKey = pki$4.privateKeyFromAsn1(
              asn1$7.fromDer(forge$h.util.createBuffer(pkcs8))
            );
            callback(null, {
              privateKey,
              publicKey: pki$4.setRsaPublicKey(privateKey.n, privateKey.e)
            });
          }
        });
      }
      if (_detectSubtleMsCrypto("generateKey") && _detectSubtleMsCrypto("exportKey")) {
        var genOp = util.globalScope.msCrypto.subtle.generateKey({
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: bits,
          publicExponent: _intToUint8Array(e),
          hash: { name: "SHA-256" }
        }, true, ["sign", "verify"]);
        genOp.oncomplete = function(e2) {
          var pair = e2.target.result;
          var exportOp = util.globalScope.msCrypto.subtle.exportKey(
            "pkcs8",
            pair.privateKey
          );
          exportOp.oncomplete = function(e3) {
            var pkcs8 = e3.target.result;
            var privateKey = pki$4.privateKeyFromAsn1(
              asn1$7.fromDer(forge$h.util.createBuffer(pkcs8))
            );
            callback(null, {
              privateKey,
              publicKey: pki$4.setRsaPublicKey(privateKey.n, privateKey.e)
            });
          };
          exportOp.onerror = function(err) {
            callback(err);
          };
        };
        genOp.onerror = function(err) {
          callback(err);
        };
        return;
      }
    } else {
      if (_detectNodeCrypto("generateKeyPairSync")) {
        var keypair = _crypto.generateKeyPairSync("rsa", {
          modulusLength: bits,
          publicExponent: e,
          publicKeyEncoding: {
            type: "spki",
            format: "pem"
          },
          privateKeyEncoding: {
            type: "pkcs8",
            format: "pem"
          }
        });
        return {
          privateKey: pki$4.privateKeyFromPem(keypair.privateKey),
          publicKey: pki$4.publicKeyFromPem(keypair.publicKey)
        };
      }
    }
  }
  var state = pki$4.rsa.createKeyPairGenerationState(bits, e, options);
  if (!callback) {
    pki$4.rsa.stepKeyPairGenerationState(state, 0);
    return state.keys;
  }
  _generateKeyPair(state, options, callback);
};
pki$4.setRsaPublicKey = pki$4.rsa.setPublicKey = function(n, e) {
  var key = {
    n,
    e
  };
  key.encrypt = function(data, scheme, schemeOptions) {
    if (typeof scheme === "string") {
      scheme = scheme.toUpperCase();
    } else if (scheme === void 0) {
      scheme = "RSAES-PKCS1-V1_5";
    }
    if (scheme === "RSAES-PKCS1-V1_5") {
      scheme = {
        encode: function(m, key2, pub) {
          return _encodePkcs1_v1_5(m, key2, 2).getBytes();
        }
      };
    } else if (scheme === "RSA-OAEP" || scheme === "RSAES-OAEP") {
      scheme = {
        encode: function(m, key2) {
          return forge$h.pkcs1.encode_rsa_oaep(key2, m, schemeOptions);
        }
      };
    } else if (["RAW", "NONE", "NULL", null].indexOf(scheme) !== -1) {
      scheme = { encode: function(e3) {
        return e3;
      } };
    } else if (typeof scheme === "string") {
      throw new Error('Unsupported encryption scheme: "' + scheme + '".');
    }
    var e2 = scheme.encode(data, key, true);
    return pki$4.rsa.encrypt(e2, key, true);
  };
  key.verify = function(digest, signature, scheme, options) {
    if (typeof scheme === "string") {
      scheme = scheme.toUpperCase();
    } else if (scheme === void 0) {
      scheme = "RSASSA-PKCS1-V1_5";
    }
    if (options === void 0) {
      options = {
        _parseAllDigestBytes: true
      };
    }
    if (!("_parseAllDigestBytes" in options)) {
      options._parseAllDigestBytes = true;
    }
    if (scheme === "RSASSA-PKCS1-V1_5") {
      scheme = {
        verify: function(digest2, d2) {
          d2 = _decodePkcs1_v1_5(d2, key, true);
          var obj = asn1$7.fromDer(d2, {
            parseAllBytes: options._parseAllDigestBytes
          });
          var capture = {};
          var errors = [];
          if (!asn1$7.validate(obj, digestInfoValidator, capture, errors)) {
            var error = new Error(
              "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value."
            );
            error.errors = errors;
            throw error;
          }
          var oid = asn1$7.derToOid(capture.algorithmIdentifier);
          if (!(oid === forge$h.oids.md2 || oid === forge$h.oids.md5 || oid === forge$h.oids.sha1 || oid === forge$h.oids.sha224 || oid === forge$h.oids.sha256 || oid === forge$h.oids.sha384 || oid === forge$h.oids.sha512 || oid === forge$h.oids["sha512-224"] || oid === forge$h.oids["sha512-256"])) {
            var error = new Error(
              "Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier."
            );
            error.oid = oid;
            throw error;
          }
          if (oid === forge$h.oids.md2 || oid === forge$h.oids.md5) {
            if (!("parameters" in capture)) {
              throw new Error(
                "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifer NULL parameters."
              );
            }
          }
          return digest2 === capture.digest;
        }
      };
    } else if (scheme === "NONE" || scheme === "NULL" || scheme === null) {
      scheme = {
        verify: function(digest2, d2) {
          d2 = _decodePkcs1_v1_5(d2, key, true);
          return digest2 === d2;
        }
      };
    }
    var d = pki$4.rsa.decrypt(signature, key, true, false);
    return scheme.verify(digest, d, key.n.bitLength());
  };
  return key;
};
pki$4.setRsaPrivateKey = pki$4.rsa.setPrivateKey = function(n, e, d, p, q, dP, dQ, qInv) {
  var key = {
    n,
    e,
    d,
    p,
    q,
    dP,
    dQ,
    qInv
  };
  key.decrypt = function(data, scheme, schemeOptions) {
    if (typeof scheme === "string") {
      scheme = scheme.toUpperCase();
    } else if (scheme === void 0) {
      scheme = "RSAES-PKCS1-V1_5";
    }
    var d2 = pki$4.rsa.decrypt(data, key, false, false);
    if (scheme === "RSAES-PKCS1-V1_5") {
      scheme = { decode: _decodePkcs1_v1_5 };
    } else if (scheme === "RSA-OAEP" || scheme === "RSAES-OAEP") {
      scheme = {
        decode: function(d3, key2) {
          return forge$h.pkcs1.decode_rsa_oaep(key2, d3, schemeOptions);
        }
      };
    } else if (["RAW", "NONE", "NULL", null].indexOf(scheme) !== -1) {
      scheme = { decode: function(d3) {
        return d3;
      } };
    } else {
      throw new Error('Unsupported encryption scheme: "' + scheme + '".');
    }
    return scheme.decode(d2, key, false);
  };
  key.sign = function(md, scheme) {
    var bt = false;
    if (typeof scheme === "string") {
      scheme = scheme.toUpperCase();
    }
    if (scheme === void 0 || scheme === "RSASSA-PKCS1-V1_5") {
      scheme = { encode: emsaPkcs1v15encode };
      bt = 1;
    } else if (scheme === "NONE" || scheme === "NULL" || scheme === null) {
      scheme = { encode: function() {
        return md;
      } };
      bt = 1;
    }
    var d2 = scheme.encode(md, key.n.bitLength());
    return pki$4.rsa.encrypt(d2, key, bt);
  };
  return key;
};
pki$4.wrapRsaPrivateKey = function(rsaKey) {
  return asn1$7.create(asn1$7.Class.UNIVERSAL, asn1$7.Type.SEQUENCE, true, [
    // version (0)
    asn1$7.create(
      asn1$7.Class.UNIVERSAL,
      asn1$7.Type.INTEGER,
      false,
      asn1$7.integerToDer(0).getBytes()
    ),
    // privateKeyAlgorithm
    asn1$7.create(asn1$7.Class.UNIVERSAL, asn1$7.Type.SEQUENCE, true, [
      asn1$7.create(
        asn1$7.Class.UNIVERSAL,
        asn1$7.Type.OID,
        false,
        asn1$7.oidToDer(pki$4.oids.rsaEncryption).getBytes()
      ),
      asn1$7.create(asn1$7.Class.UNIVERSAL, asn1$7.Type.NULL, false, "")
    ]),
    // PrivateKey
    asn1$7.create(
      asn1$7.Class.UNIVERSAL,
      asn1$7.Type.OCTETSTRING,
      false,
      asn1$7.toDer(rsaKey).getBytes()
    )
  ]);
};
pki$4.privateKeyFromAsn1 = function(obj) {
  var capture = {};
  var errors = [];
  if (asn1$7.validate(obj, privateKeyValidator$1, capture, errors)) {
    obj = asn1$7.fromDer(forge$h.util.createBuffer(capture.privateKey));
  }
  capture = {};
  errors = [];
  if (!asn1$7.validate(obj, rsaPrivateKeyValidator, capture, errors)) {
    var error = new Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");
    error.errors = errors;
    throw error;
  }
  var n, e, d, p, q, dP, dQ, qInv;
  n = forge$h.util.createBuffer(capture.privateKeyModulus).toHex();
  e = forge$h.util.createBuffer(capture.privateKeyPublicExponent).toHex();
  d = forge$h.util.createBuffer(capture.privateKeyPrivateExponent).toHex();
  p = forge$h.util.createBuffer(capture.privateKeyPrime1).toHex();
  q = forge$h.util.createBuffer(capture.privateKeyPrime2).toHex();
  dP = forge$h.util.createBuffer(capture.privateKeyExponent1).toHex();
  dQ = forge$h.util.createBuffer(capture.privateKeyExponent2).toHex();
  qInv = forge$h.util.createBuffer(capture.privateKeyCoefficient).toHex();
  return pki$4.setRsaPrivateKey(
    new BigInteger$3(n, 16),
    new BigInteger$3(e, 16),
    new BigInteger$3(d, 16),
    new BigInteger$3(p, 16),
    new BigInteger$3(q, 16),
    new BigInteger$3(dP, 16),
    new BigInteger$3(dQ, 16),
    new BigInteger$3(qInv, 16)
  );
};
pki$4.privateKeyToAsn1 = pki$4.privateKeyToRSAPrivateKey = function(key) {
  return asn1$7.create(asn1$7.Class.UNIVERSAL, asn1$7.Type.SEQUENCE, true, [
    // version (0 = only 2 primes, 1 multiple primes)
    asn1$7.create(
      asn1$7.Class.UNIVERSAL,
      asn1$7.Type.INTEGER,
      false,
      asn1$7.integerToDer(0).getBytes()
    ),
    // modulus (n)
    asn1$7.create(
      asn1$7.Class.UNIVERSAL,
      asn1$7.Type.INTEGER,
      false,
      _bnToBytes(key.n)
    ),
    // publicExponent (e)
    asn1$7.create(
      asn1$7.Class.UNIVERSAL,
      asn1$7.Type.INTEGER,
      false,
      _bnToBytes(key.e)
    ),
    // privateExponent (d)
    asn1$7.create(
      asn1$7.Class.UNIVERSAL,
      asn1$7.Type.INTEGER,
      false,
      _bnToBytes(key.d)
    ),
    // privateKeyPrime1 (p)
    asn1$7.create(
      asn1$7.Class.UNIVERSAL,
      asn1$7.Type.INTEGER,
      false,
      _bnToBytes(key.p)
    ),
    // privateKeyPrime2 (q)
    asn1$7.create(
      asn1$7.Class.UNIVERSAL,
      asn1$7.Type.INTEGER,
      false,
      _bnToBytes(key.q)
    ),
    // privateKeyExponent1 (dP)
    asn1$7.create(
      asn1$7.Class.UNIVERSAL,
      asn1$7.Type.INTEGER,
      false,
      _bnToBytes(key.dP)
    ),
    // privateKeyExponent2 (dQ)
    asn1$7.create(
      asn1$7.Class.UNIVERSAL,
      asn1$7.Type.INTEGER,
      false,
      _bnToBytes(key.dQ)
    ),
    // coefficient (qInv)
    asn1$7.create(
      asn1$7.Class.UNIVERSAL,
      asn1$7.Type.INTEGER,
      false,
      _bnToBytes(key.qInv)
    )
  ]);
};
pki$4.publicKeyFromAsn1 = function(obj) {
  var capture = {};
  var errors = [];
  if (asn1$7.validate(obj, publicKeyValidator$2, capture, errors)) {
    var oid = asn1$7.derToOid(capture.publicKeyOid);
    if (oid !== pki$4.oids.rsaEncryption) {
      var error = new Error("Cannot read public key. Unknown OID.");
      error.oid = oid;
      throw error;
    }
    obj = capture.rsaPublicKey;
  }
  errors = [];
  if (!asn1$7.validate(obj, rsaPublicKeyValidator, capture, errors)) {
    var error = new Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.");
    error.errors = errors;
    throw error;
  }
  var n = forge$h.util.createBuffer(capture.publicKeyModulus).toHex();
  var e = forge$h.util.createBuffer(capture.publicKeyExponent).toHex();
  return pki$4.setRsaPublicKey(
    new BigInteger$3(n, 16),
    new BigInteger$3(e, 16)
  );
};
pki$4.publicKeyToAsn1 = pki$4.publicKeyToSubjectPublicKeyInfo = function(key) {
  return asn1$7.create(asn1$7.Class.UNIVERSAL, asn1$7.Type.SEQUENCE, true, [
    // AlgorithmIdentifier
    asn1$7.create(asn1$7.Class.UNIVERSAL, asn1$7.Type.SEQUENCE, true, [
      // algorithm
      asn1$7.create(
        asn1$7.Class.UNIVERSAL,
        asn1$7.Type.OID,
        false,
        asn1$7.oidToDer(pki$4.oids.rsaEncryption).getBytes()
      ),
      // parameters (null)
      asn1$7.create(asn1$7.Class.UNIVERSAL, asn1$7.Type.NULL, false, "")
    ]),
    // subjectPublicKey
    asn1$7.create(asn1$7.Class.UNIVERSAL, asn1$7.Type.BITSTRING, false, [
      pki$4.publicKeyToRSAPublicKey(key)
    ])
  ]);
};
pki$4.publicKeyToRSAPublicKey = function(key) {
  return asn1$7.create(asn1$7.Class.UNIVERSAL, asn1$7.Type.SEQUENCE, true, [
    // modulus (n)
    asn1$7.create(
      asn1$7.Class.UNIVERSAL,
      asn1$7.Type.INTEGER,
      false,
      _bnToBytes(key.n)
    ),
    // publicExponent (e)
    asn1$7.create(
      asn1$7.Class.UNIVERSAL,
      asn1$7.Type.INTEGER,
      false,
      _bnToBytes(key.e)
    )
  ]);
};
function _encodePkcs1_v1_5(m, key, bt) {
  var eb = forge$h.util.createBuffer();
  var k = Math.ceil(key.n.bitLength() / 8);
  if (m.length > k - 11) {
    var error = new Error("Message is too long for PKCS#1 v1.5 padding.");
    error.length = m.length;
    error.max = k - 11;
    throw error;
  }
  eb.putByte(0);
  eb.putByte(bt);
  var padNum = k - 3 - m.length;
  var padByte;
  if (bt === 0 || bt === 1) {
    padByte = bt === 0 ? 0 : 255;
    for (var i = 0; i < padNum; ++i) {
      eb.putByte(padByte);
    }
  } else {
    while (padNum > 0) {
      var numZeros = 0;
      var padBytes = forge$h.random.getBytes(padNum);
      for (var i = 0; i < padNum; ++i) {
        padByte = padBytes.charCodeAt(i);
        if (padByte === 0) {
          ++numZeros;
        } else {
          eb.putByte(padByte);
        }
      }
      padNum = numZeros;
    }
  }
  eb.putByte(0);
  eb.putBytes(m);
  return eb;
}
function _decodePkcs1_v1_5(em, key, pub, ml) {
  var k = Math.ceil(key.n.bitLength() / 8);
  var eb = forge$h.util.createBuffer(em);
  var first = eb.getByte();
  var bt = eb.getByte();
  if (first !== 0 || pub && bt !== 0 && bt !== 1 || !pub && bt != 2 || pub && bt === 0 && typeof ml === "undefined") {
    throw new Error("Encryption block is invalid.");
  }
  var padNum = 0;
  if (bt === 0) {
    padNum = k - 3 - ml;
    for (var i = 0; i < padNum; ++i) {
      if (eb.getByte() !== 0) {
        throw new Error("Encryption block is invalid.");
      }
    }
  } else if (bt === 1) {
    padNum = 0;
    while (eb.length() > 1) {
      if (eb.getByte() !== 255) {
        --eb.read;
        break;
      }
      ++padNum;
    }
  } else if (bt === 2) {
    padNum = 0;
    while (eb.length() > 1) {
      if (eb.getByte() === 0) {
        --eb.read;
        break;
      }
      ++padNum;
    }
  }
  var zero = eb.getByte();
  if (zero !== 0 || padNum !== k - 3 - eb.length()) {
    throw new Error("Encryption block is invalid.");
  }
  return eb.getBytes();
}
function _generateKeyPair(state, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = {};
  }
  options = options || {};
  var opts = {
    algorithm: {
      name: options.algorithm || "PRIMEINC",
      options: {
        workers: options.workers || 2,
        workLoad: options.workLoad || 100,
        workerScript: options.workerScript
      }
    }
  };
  if ("prng" in options) {
    opts.prng = options.prng;
  }
  generate();
  function generate() {
    getPrime(state.pBits, function(err, num) {
      if (err) {
        return callback(err);
      }
      state.p = num;
      if (state.q !== null) {
        return finish(err, state.q);
      }
      getPrime(state.qBits, finish);
    });
  }
  function getPrime(bits, callback2) {
    forge$h.prime.generateProbablePrime(bits, opts, callback2);
  }
  function finish(err, num) {
    if (err) {
      return callback(err);
    }
    state.q = num;
    if (state.p.compareTo(state.q) < 0) {
      var tmp = state.p;
      state.p = state.q;
      state.q = tmp;
    }
    if (state.p.subtract(BigInteger$3.ONE).gcd(state.e).compareTo(BigInteger$3.ONE) !== 0) {
      state.p = null;
      generate();
      return;
    }
    if (state.q.subtract(BigInteger$3.ONE).gcd(state.e).compareTo(BigInteger$3.ONE) !== 0) {
      state.q = null;
      getPrime(state.qBits, finish);
      return;
    }
    state.p1 = state.p.subtract(BigInteger$3.ONE);
    state.q1 = state.q.subtract(BigInteger$3.ONE);
    state.phi = state.p1.multiply(state.q1);
    if (state.phi.gcd(state.e).compareTo(BigInteger$3.ONE) !== 0) {
      state.p = state.q = null;
      generate();
      return;
    }
    state.n = state.p.multiply(state.q);
    if (state.n.bitLength() !== state.bits) {
      state.q = null;
      getPrime(state.qBits, finish);
      return;
    }
    var d = state.e.modInverse(state.phi);
    state.keys = {
      privateKey: pki$4.rsa.setPrivateKey(
        state.n,
        state.e,
        d,
        state.p,
        state.q,
        d.mod(state.p1),
        d.mod(state.q1),
        state.q.modInverse(state.p)
      ),
      publicKey: pki$4.rsa.setPublicKey(state.n, state.e)
    };
    callback(null, state.keys);
  }
}
function _bnToBytes(b) {
  var hex = b.toString(16);
  if (hex[0] >= "8") {
    hex = "00" + hex;
  }
  var bytes = forge$h.util.hexToBytes(hex);
  if (bytes.length > 1 && // leading 0x00 for positive integer
  (bytes.charCodeAt(0) === 0 && (bytes.charCodeAt(1) & 128) === 0 || // leading 0xFF for negative integer
  bytes.charCodeAt(0) === 255 && (bytes.charCodeAt(1) & 128) === 128)) {
    return bytes.substr(1);
  }
  return bytes;
}
function _getMillerRabinTests(bits) {
  if (bits <= 100) return 27;
  if (bits <= 150) return 18;
  if (bits <= 200) return 15;
  if (bits <= 250) return 12;
  if (bits <= 300) return 9;
  if (bits <= 350) return 8;
  if (bits <= 400) return 7;
  if (bits <= 500) return 6;
  if (bits <= 600) return 5;
  if (bits <= 800) return 4;
  if (bits <= 1250) return 3;
  return 2;
}
function _detectNodeCrypto(fn) {
  return forge$h.util.isNodejs && typeof _crypto[fn] === "function";
}
function _detectSubtleCrypto(fn) {
  return typeof util.globalScope !== "undefined" && typeof util.globalScope.crypto === "object" && typeof util.globalScope.crypto.subtle === "object" && typeof util.globalScope.crypto.subtle[fn] === "function";
}
function _detectSubtleMsCrypto(fn) {
  return typeof util.globalScope !== "undefined" && typeof util.globalScope.msCrypto === "object" && typeof util.globalScope.msCrypto.subtle === "object" && typeof util.globalScope.msCrypto.subtle[fn] === "function";
}
function _intToUint8Array(x) {
  var bytes = forge$h.util.hexToBytes(x.toString(16));
  var buffer = new Uint8Array(bytes.length);
  for (var i = 0; i < bytes.length; ++i) {
    buffer[i] = bytes.charCodeAt(i);
  }
  return buffer;
}
var forge$g = forge$C;
if (typeof BigInteger$2 === "undefined") {
  var BigInteger$2 = forge$g.jsbn.BigInteger;
}
var asn1$6 = forge$g.asn1;
var pki$3 = forge$g.pki = forge$g.pki || {};
pki$3.pbe = forge$g.pbe = forge$g.pbe || {};
var oids$1 = pki$3.oids;
var encryptedPrivateKeyValidator = {
  name: "EncryptedPrivateKeyInfo",
  tagClass: asn1$6.Class.UNIVERSAL,
  type: asn1$6.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "EncryptedPrivateKeyInfo.encryptionAlgorithm",
    tagClass: asn1$6.Class.UNIVERSAL,
    type: asn1$6.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "AlgorithmIdentifier.algorithm",
      tagClass: asn1$6.Class.UNIVERSAL,
      type: asn1$6.Type.OID,
      constructed: false,
      capture: "encryptionOid"
    }, {
      name: "AlgorithmIdentifier.parameters",
      tagClass: asn1$6.Class.UNIVERSAL,
      type: asn1$6.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "encryptionParams"
    }]
  }, {
    // encryptedData
    name: "EncryptedPrivateKeyInfo.encryptedData",
    tagClass: asn1$6.Class.UNIVERSAL,
    type: asn1$6.Type.OCTETSTRING,
    constructed: false,
    capture: "encryptedData"
  }]
};
var PBES2AlgorithmsValidator = {
  name: "PBES2Algorithms",
  tagClass: asn1$6.Class.UNIVERSAL,
  type: asn1$6.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "PBES2Algorithms.keyDerivationFunc",
    tagClass: asn1$6.Class.UNIVERSAL,
    type: asn1$6.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "PBES2Algorithms.keyDerivationFunc.oid",
      tagClass: asn1$6.Class.UNIVERSAL,
      type: asn1$6.Type.OID,
      constructed: false,
      capture: "kdfOid"
    }, {
      name: "PBES2Algorithms.params",
      tagClass: asn1$6.Class.UNIVERSAL,
      type: asn1$6.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "PBES2Algorithms.params.salt",
        tagClass: asn1$6.Class.UNIVERSAL,
        type: asn1$6.Type.OCTETSTRING,
        constructed: false,
        capture: "kdfSalt"
      }, {
        name: "PBES2Algorithms.params.iterationCount",
        tagClass: asn1$6.Class.UNIVERSAL,
        type: asn1$6.Type.INTEGER,
        constructed: false,
        capture: "kdfIterationCount"
      }, {
        name: "PBES2Algorithms.params.keyLength",
        tagClass: asn1$6.Class.UNIVERSAL,
        type: asn1$6.Type.INTEGER,
        constructed: false,
        optional: true,
        capture: "keyLength"
      }, {
        // prf
        name: "PBES2Algorithms.params.prf",
        tagClass: asn1$6.Class.UNIVERSAL,
        type: asn1$6.Type.SEQUENCE,
        constructed: true,
        optional: true,
        value: [{
          name: "PBES2Algorithms.params.prf.algorithm",
          tagClass: asn1$6.Class.UNIVERSAL,
          type: asn1$6.Type.OID,
          constructed: false,
          capture: "prfOid"
        }]
      }]
    }]
  }, {
    name: "PBES2Algorithms.encryptionScheme",
    tagClass: asn1$6.Class.UNIVERSAL,
    type: asn1$6.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "PBES2Algorithms.encryptionScheme.oid",
      tagClass: asn1$6.Class.UNIVERSAL,
      type: asn1$6.Type.OID,
      constructed: false,
      capture: "encOid"
    }, {
      name: "PBES2Algorithms.encryptionScheme.iv",
      tagClass: asn1$6.Class.UNIVERSAL,
      type: asn1$6.Type.OCTETSTRING,
      constructed: false,
      capture: "encIv"
    }]
  }]
};
var pkcs12PbeParamsValidator = {
  name: "pkcs-12PbeParams",
  tagClass: asn1$6.Class.UNIVERSAL,
  type: asn1$6.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "pkcs-12PbeParams.salt",
    tagClass: asn1$6.Class.UNIVERSAL,
    type: asn1$6.Type.OCTETSTRING,
    constructed: false,
    capture: "salt"
  }, {
    name: "pkcs-12PbeParams.iterations",
    tagClass: asn1$6.Class.UNIVERSAL,
    type: asn1$6.Type.INTEGER,
    constructed: false,
    capture: "iterations"
  }]
};
pki$3.encryptPrivateKeyInfo = function(obj, password, options) {
  options = options || {};
  options.saltSize = options.saltSize || 8;
  options.count = options.count || 2048;
  options.algorithm = options.algorithm || "aes128";
  options.prfAlgorithm = options.prfAlgorithm || "sha1";
  var salt = forge$g.random.getBytesSync(options.saltSize);
  var count = options.count;
  var countBytes = asn1$6.integerToDer(count);
  var dkLen;
  var encryptionAlgorithm;
  var encryptedData;
  if (options.algorithm.indexOf("aes") === 0 || options.algorithm === "des") {
    var ivLen, encOid, cipherFn;
    switch (options.algorithm) {
      case "aes128":
        dkLen = 16;
        ivLen = 16;
        encOid = oids$1["aes128-CBC"];
        cipherFn = forge$g.aes.createEncryptionCipher;
        break;
      case "aes192":
        dkLen = 24;
        ivLen = 16;
        encOid = oids$1["aes192-CBC"];
        cipherFn = forge$g.aes.createEncryptionCipher;
        break;
      case "aes256":
        dkLen = 32;
        ivLen = 16;
        encOid = oids$1["aes256-CBC"];
        cipherFn = forge$g.aes.createEncryptionCipher;
        break;
      case "des":
        dkLen = 8;
        ivLen = 8;
        encOid = oids$1["desCBC"];
        cipherFn = forge$g.des.createEncryptionCipher;
        break;
      default:
        var error = new Error("Cannot encrypt private key. Unknown encryption algorithm.");
        error.algorithm = options.algorithm;
        throw error;
    }
    var prfAlgorithm = "hmacWith" + options.prfAlgorithm.toUpperCase();
    var md = prfAlgorithmToMessageDigest(prfAlgorithm);
    var dk = forge$g.pkcs5.pbkdf2(password, salt, count, dkLen, md);
    var iv = forge$g.random.getBytesSync(ivLen);
    var cipher = cipherFn(dk);
    cipher.start(iv);
    cipher.update(asn1$6.toDer(obj));
    cipher.finish();
    encryptedData = cipher.output.getBytes();
    var params = createPbkdf2Params(salt, countBytes, dkLen, prfAlgorithm);
    encryptionAlgorithm = asn1$6.create(
      asn1$6.Class.UNIVERSAL,
      asn1$6.Type.SEQUENCE,
      true,
      [
        asn1$6.create(
          asn1$6.Class.UNIVERSAL,
          asn1$6.Type.OID,
          false,
          asn1$6.oidToDer(oids$1["pkcs5PBES2"]).getBytes()
        ),
        asn1$6.create(asn1$6.Class.UNIVERSAL, asn1$6.Type.SEQUENCE, true, [
          // keyDerivationFunc
          asn1$6.create(asn1$6.Class.UNIVERSAL, asn1$6.Type.SEQUENCE, true, [
            asn1$6.create(
              asn1$6.Class.UNIVERSAL,
              asn1$6.Type.OID,
              false,
              asn1$6.oidToDer(oids$1["pkcs5PBKDF2"]).getBytes()
            ),
            // PBKDF2-params
            params
          ]),
          // encryptionScheme
          asn1$6.create(asn1$6.Class.UNIVERSAL, asn1$6.Type.SEQUENCE, true, [
            asn1$6.create(
              asn1$6.Class.UNIVERSAL,
              asn1$6.Type.OID,
              false,
              asn1$6.oidToDer(encOid).getBytes()
            ),
            // iv
            asn1$6.create(
              asn1$6.Class.UNIVERSAL,
              asn1$6.Type.OCTETSTRING,
              false,
              iv
            )
          ])
        ])
      ]
    );
  } else if (options.algorithm === "3des") {
    dkLen = 24;
    var saltBytes = new forge$g.util.ByteBuffer(salt);
    var dk = pki$3.pbe.generatePkcs12Key(password, saltBytes, 1, count, dkLen);
    var iv = pki$3.pbe.generatePkcs12Key(password, saltBytes, 2, count, dkLen);
    var cipher = forge$g.des.createEncryptionCipher(dk);
    cipher.start(iv);
    cipher.update(asn1$6.toDer(obj));
    cipher.finish();
    encryptedData = cipher.output.getBytes();
    encryptionAlgorithm = asn1$6.create(
      asn1$6.Class.UNIVERSAL,
      asn1$6.Type.SEQUENCE,
      true,
      [
        asn1$6.create(
          asn1$6.Class.UNIVERSAL,
          asn1$6.Type.OID,
          false,
          asn1$6.oidToDer(oids$1["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()
        ),
        // pkcs-12PbeParams
        asn1$6.create(asn1$6.Class.UNIVERSAL, asn1$6.Type.SEQUENCE, true, [
          // salt
          asn1$6.create(asn1$6.Class.UNIVERSAL, asn1$6.Type.OCTETSTRING, false, salt),
          // iteration count
          asn1$6.create(
            asn1$6.Class.UNIVERSAL,
            asn1$6.Type.INTEGER,
            false,
            countBytes.getBytes()
          )
        ])
      ]
    );
  } else {
    var error = new Error("Cannot encrypt private key. Unknown encryption algorithm.");
    error.algorithm = options.algorithm;
    throw error;
  }
  var rval = asn1$6.create(asn1$6.Class.UNIVERSAL, asn1$6.Type.SEQUENCE, true, [
    // encryptionAlgorithm
    encryptionAlgorithm,
    // encryptedData
    asn1$6.create(
      asn1$6.Class.UNIVERSAL,
      asn1$6.Type.OCTETSTRING,
      false,
      encryptedData
    )
  ]);
  return rval;
};
pki$3.decryptPrivateKeyInfo = function(obj, password) {
  var rval = null;
  var capture = {};
  var errors = [];
  if (!asn1$6.validate(obj, encryptedPrivateKeyValidator, capture, errors)) {
    var error = new Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
    error.errors = errors;
    throw error;
  }
  var oid = asn1$6.derToOid(capture.encryptionOid);
  var cipher = pki$3.pbe.getCipher(oid, capture.encryptionParams, password);
  var encrypted = forge$g.util.createBuffer(capture.encryptedData);
  cipher.update(encrypted);
  if (cipher.finish()) {
    rval = asn1$6.fromDer(cipher.output);
  }
  return rval;
};
pki$3.encryptedPrivateKeyToPem = function(epki, maxline) {
  var msg = {
    type: "ENCRYPTED PRIVATE KEY",
    body: asn1$6.toDer(epki).getBytes()
  };
  return forge$g.pem.encode(msg, { maxline });
};
pki$3.encryptedPrivateKeyFromPem = function(pem2) {
  var msg = forge$g.pem.decode(pem2)[0];
  if (msg.type !== "ENCRYPTED PRIVATE KEY") {
    var error = new Error('Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".');
    error.headerType = msg.type;
    throw error;
  }
  if (msg.procType && msg.procType.type === "ENCRYPTED") {
    throw new Error("Could not convert encrypted private key from PEM; PEM is encrypted.");
  }
  return asn1$6.fromDer(msg.body);
};
pki$3.encryptRsaPrivateKey = function(rsaKey, password, options) {
  options = options || {};
  if (!options.legacy) {
    var rval = pki$3.wrapRsaPrivateKey(pki$3.privateKeyToAsn1(rsaKey));
    rval = pki$3.encryptPrivateKeyInfo(rval, password, options);
    return pki$3.encryptedPrivateKeyToPem(rval);
  }
  var algorithm;
  var iv;
  var dkLen;
  var cipherFn;
  switch (options.algorithm) {
    case "aes128":
      algorithm = "AES-128-CBC";
      dkLen = 16;
      iv = forge$g.random.getBytesSync(16);
      cipherFn = forge$g.aes.createEncryptionCipher;
      break;
    case "aes192":
      algorithm = "AES-192-CBC";
      dkLen = 24;
      iv = forge$g.random.getBytesSync(16);
      cipherFn = forge$g.aes.createEncryptionCipher;
      break;
    case "aes256":
      algorithm = "AES-256-CBC";
      dkLen = 32;
      iv = forge$g.random.getBytesSync(16);
      cipherFn = forge$g.aes.createEncryptionCipher;
      break;
    case "3des":
      algorithm = "DES-EDE3-CBC";
      dkLen = 24;
      iv = forge$g.random.getBytesSync(8);
      cipherFn = forge$g.des.createEncryptionCipher;
      break;
    case "des":
      algorithm = "DES-CBC";
      dkLen = 8;
      iv = forge$g.random.getBytesSync(8);
      cipherFn = forge$g.des.createEncryptionCipher;
      break;
    default:
      var error = new Error('Could not encrypt RSA private key; unsupported encryption algorithm "' + options.algorithm + '".');
      error.algorithm = options.algorithm;
      throw error;
  }
  var dk = forge$g.pbe.opensslDeriveBytes(password, iv.substr(0, 8), dkLen);
  var cipher = cipherFn(dk);
  cipher.start(iv);
  cipher.update(asn1$6.toDer(pki$3.privateKeyToAsn1(rsaKey)));
  cipher.finish();
  var msg = {
    type: "RSA PRIVATE KEY",
    procType: {
      version: "4",
      type: "ENCRYPTED"
    },
    dekInfo: {
      algorithm,
      parameters: forge$g.util.bytesToHex(iv).toUpperCase()
    },
    body: cipher.output.getBytes()
  };
  return forge$g.pem.encode(msg);
};
pki$3.decryptRsaPrivateKey = function(pem2, password) {
  var rval = null;
  var msg = forge$g.pem.decode(pem2)[0];
  if (msg.type !== "ENCRYPTED PRIVATE KEY" && msg.type !== "PRIVATE KEY" && msg.type !== "RSA PRIVATE KEY") {
    var error = new Error('Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".');
    error.headerType = error;
    throw error;
  }
  if (msg.procType && msg.procType.type === "ENCRYPTED") {
    var dkLen;
    var cipherFn;
    switch (msg.dekInfo.algorithm) {
      case "DES-CBC":
        dkLen = 8;
        cipherFn = forge$g.des.createDecryptionCipher;
        break;
      case "DES-EDE3-CBC":
        dkLen = 24;
        cipherFn = forge$g.des.createDecryptionCipher;
        break;
      case "AES-128-CBC":
        dkLen = 16;
        cipherFn = forge$g.aes.createDecryptionCipher;
        break;
      case "AES-192-CBC":
        dkLen = 24;
        cipherFn = forge$g.aes.createDecryptionCipher;
        break;
      case "AES-256-CBC":
        dkLen = 32;
        cipherFn = forge$g.aes.createDecryptionCipher;
        break;
      case "RC2-40-CBC":
        dkLen = 5;
        cipherFn = function(key) {
          return forge$g.rc2.createDecryptionCipher(key, 40);
        };
        break;
      case "RC2-64-CBC":
        dkLen = 8;
        cipherFn = function(key) {
          return forge$g.rc2.createDecryptionCipher(key, 64);
        };
        break;
      case "RC2-128-CBC":
        dkLen = 16;
        cipherFn = function(key) {
          return forge$g.rc2.createDecryptionCipher(key, 128);
        };
        break;
      default:
        var error = new Error('Could not decrypt private key; unsupported encryption algorithm "' + msg.dekInfo.algorithm + '".');
        error.algorithm = msg.dekInfo.algorithm;
        throw error;
    }
    var iv = forge$g.util.hexToBytes(msg.dekInfo.parameters);
    var dk = forge$g.pbe.opensslDeriveBytes(password, iv.substr(0, 8), dkLen);
    var cipher = cipherFn(dk);
    cipher.start(iv);
    cipher.update(forge$g.util.createBuffer(msg.body));
    if (cipher.finish()) {
      rval = cipher.output.getBytes();
    } else {
      return rval;
    }
  } else {
    rval = msg.body;
  }
  if (msg.type === "ENCRYPTED PRIVATE KEY") {
    rval = pki$3.decryptPrivateKeyInfo(asn1$6.fromDer(rval), password);
  } else {
    rval = asn1$6.fromDer(rval);
  }
  if (rval !== null) {
    rval = pki$3.privateKeyFromAsn1(rval);
  }
  return rval;
};
pki$3.pbe.generatePkcs12Key = function(password, salt, id, iter, n, md) {
  var j, l;
  if (typeof md === "undefined" || md === null) {
    if (!("sha1" in forge$g.md)) {
      throw new Error('"sha1" hash algorithm unavailable.');
    }
    md = forge$g.md.sha1.create();
  }
  var u = md.digestLength;
  var v = md.blockLength;
  var result = new forge$g.util.ByteBuffer();
  var passBuf = new forge$g.util.ByteBuffer();
  if (password !== null && password !== void 0) {
    for (l = 0; l < password.length; l++) {
      passBuf.putInt16(password.charCodeAt(l));
    }
    passBuf.putInt16(0);
  }
  var p = passBuf.length();
  var s2 = salt.length();
  var D3 = new forge$g.util.ByteBuffer();
  D3.fillWithByte(id, v);
  var Slen = v * Math.ceil(s2 / v);
  var S2 = new forge$g.util.ByteBuffer();
  for (l = 0; l < Slen; l++) {
    S2.putByte(salt.at(l % s2));
  }
  var Plen = v * Math.ceil(p / v);
  var P = new forge$g.util.ByteBuffer();
  for (l = 0; l < Plen; l++) {
    P.putByte(passBuf.at(l % p));
  }
  var I2 = S2;
  I2.putBuffer(P);
  var c = Math.ceil(n / u);
  for (var i = 1; i <= c; i++) {
    var buf = new forge$g.util.ByteBuffer();
    buf.putBytes(D3.bytes());
    buf.putBytes(I2.bytes());
    for (var round = 0; round < iter; round++) {
      md.start();
      md.update(buf.getBytes());
      buf = md.digest();
    }
    var B = new forge$g.util.ByteBuffer();
    for (l = 0; l < v; l++) {
      B.putByte(buf.at(l % u));
    }
    var k = Math.ceil(s2 / v) + Math.ceil(p / v);
    var Inew = new forge$g.util.ByteBuffer();
    for (j = 0; j < k; j++) {
      var chunk = new forge$g.util.ByteBuffer(I2.getBytes(v));
      var x = 511;
      for (l = B.length() - 1; l >= 0; l--) {
        x = x >> 8;
        x += B.at(l) + chunk.at(l);
        chunk.setAt(l, x & 255);
      }
      Inew.putBuffer(chunk);
    }
    I2 = Inew;
    result.putBuffer(buf);
  }
  result.truncate(result.length() - n);
  return result;
};
pki$3.pbe.getCipher = function(oid, params, password) {
  switch (oid) {
    case pki$3.oids["pkcs5PBES2"]:
      return pki$3.pbe.getCipherForPBES2(oid, params, password);
    case pki$3.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
    case pki$3.oids["pbewithSHAAnd40BitRC2-CBC"]:
      return pki$3.pbe.getCipherForPKCS12PBE(oid, params, password);
    default:
      var error = new Error("Cannot read encrypted PBE data block. Unsupported OID.");
      error.oid = oid;
      error.supportedOids = [
        "pkcs5PBES2",
        "pbeWithSHAAnd3-KeyTripleDES-CBC",
        "pbewithSHAAnd40BitRC2-CBC"
      ];
      throw error;
  }
};
pki$3.pbe.getCipherForPBES2 = function(oid, params, password) {
  var capture = {};
  var errors = [];
  if (!asn1$6.validate(params, PBES2AlgorithmsValidator, capture, errors)) {
    var error = new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
    error.errors = errors;
    throw error;
  }
  oid = asn1$6.derToOid(capture.kdfOid);
  if (oid !== pki$3.oids["pkcs5PBKDF2"]) {
    var error = new Error("Cannot read encrypted private key. Unsupported key derivation function OID.");
    error.oid = oid;
    error.supportedOids = ["pkcs5PBKDF2"];
    throw error;
  }
  oid = asn1$6.derToOid(capture.encOid);
  if (oid !== pki$3.oids["aes128-CBC"] && oid !== pki$3.oids["aes192-CBC"] && oid !== pki$3.oids["aes256-CBC"] && oid !== pki$3.oids["des-EDE3-CBC"] && oid !== pki$3.oids["desCBC"]) {
    var error = new Error("Cannot read encrypted private key. Unsupported encryption scheme OID.");
    error.oid = oid;
    error.supportedOids = [
      "aes128-CBC",
      "aes192-CBC",
      "aes256-CBC",
      "des-EDE3-CBC",
      "desCBC"
    ];
    throw error;
  }
  var salt = capture.kdfSalt;
  var count = forge$g.util.createBuffer(capture.kdfIterationCount);
  count = count.getInt(count.length() << 3);
  var dkLen;
  var cipherFn;
  switch (pki$3.oids[oid]) {
    case "aes128-CBC":
      dkLen = 16;
      cipherFn = forge$g.aes.createDecryptionCipher;
      break;
    case "aes192-CBC":
      dkLen = 24;
      cipherFn = forge$g.aes.createDecryptionCipher;
      break;
    case "aes256-CBC":
      dkLen = 32;
      cipherFn = forge$g.aes.createDecryptionCipher;
      break;
    case "des-EDE3-CBC":
      dkLen = 24;
      cipherFn = forge$g.des.createDecryptionCipher;
      break;
    case "desCBC":
      dkLen = 8;
      cipherFn = forge$g.des.createDecryptionCipher;
      break;
  }
  var md = prfOidToMessageDigest(capture.prfOid);
  var dk = forge$g.pkcs5.pbkdf2(password, salt, count, dkLen, md);
  var iv = capture.encIv;
  var cipher = cipherFn(dk);
  cipher.start(iv);
  return cipher;
};
pki$3.pbe.getCipherForPKCS12PBE = function(oid, params, password) {
  var capture = {};
  var errors = [];
  if (!asn1$6.validate(params, pkcs12PbeParamsValidator, capture, errors)) {
    var error = new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
    error.errors = errors;
    throw error;
  }
  var salt = forge$g.util.createBuffer(capture.salt);
  var count = forge$g.util.createBuffer(capture.iterations);
  count = count.getInt(count.length() << 3);
  var dkLen, dIvLen, cipherFn;
  switch (oid) {
    case pki$3.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
      dkLen = 24;
      dIvLen = 8;
      cipherFn = forge$g.des.startDecrypting;
      break;
    case pki$3.oids["pbewithSHAAnd40BitRC2-CBC"]:
      dkLen = 5;
      dIvLen = 8;
      cipherFn = function(key2, iv2) {
        var cipher = forge$g.rc2.createDecryptionCipher(key2, 40);
        cipher.start(iv2, null);
        return cipher;
      };
      break;
    default:
      var error = new Error("Cannot read PKCS #12 PBE data block. Unsupported OID.");
      error.oid = oid;
      throw error;
  }
  var md = prfOidToMessageDigest(capture.prfOid);
  var key = pki$3.pbe.generatePkcs12Key(password, salt, 1, count, dkLen, md);
  md.start();
  var iv = pki$3.pbe.generatePkcs12Key(password, salt, 2, count, dIvLen, md);
  return cipherFn(key, iv);
};
pki$3.pbe.opensslDeriveBytes = function(password, salt, dkLen, md) {
  if (typeof md === "undefined" || md === null) {
    if (!("md5" in forge$g.md)) {
      throw new Error('"md5" hash algorithm unavailable.');
    }
    md = forge$g.md.md5.create();
  }
  if (salt === null) {
    salt = "";
  }
  var digests = [hash(md, password + salt)];
  for (var length = 16, i = 1; length < dkLen; ++i, length += 16) {
    digests.push(hash(md, digests[i - 1] + password + salt));
  }
  return digests.join("").substr(0, dkLen);
};
function hash(md, bytes) {
  return md.start().update(bytes).digest().getBytes();
}
function prfOidToMessageDigest(prfOid) {
  var prfAlgorithm;
  if (!prfOid) {
    prfAlgorithm = "hmacWithSHA1";
  } else {
    prfAlgorithm = pki$3.oids[asn1$6.derToOid(prfOid)];
    if (!prfAlgorithm) {
      var error = new Error("Unsupported PRF OID.");
      error.oid = prfOid;
      error.supported = [
        "hmacWithSHA1",
        "hmacWithSHA224",
        "hmacWithSHA256",
        "hmacWithSHA384",
        "hmacWithSHA512"
      ];
      throw error;
    }
  }
  return prfAlgorithmToMessageDigest(prfAlgorithm);
}
function prfAlgorithmToMessageDigest(prfAlgorithm) {
  var factory = forge$g.md;
  switch (prfAlgorithm) {
    case "hmacWithSHA224":
      factory = forge$g.md.sha512;
    case "hmacWithSHA1":
    case "hmacWithSHA256":
    case "hmacWithSHA384":
    case "hmacWithSHA512":
      prfAlgorithm = prfAlgorithm.substr(8).toLowerCase();
      break;
    default:
      var error = new Error("Unsupported PRF algorithm.");
      error.algorithm = prfAlgorithm;
      error.supported = [
        "hmacWithSHA1",
        "hmacWithSHA224",
        "hmacWithSHA256",
        "hmacWithSHA384",
        "hmacWithSHA512"
      ];
      throw error;
  }
  if (!factory || !(prfAlgorithm in factory)) {
    throw new Error("Unknown hash algorithm: " + prfAlgorithm);
  }
  return factory[prfAlgorithm].create();
}
function createPbkdf2Params(salt, countBytes, dkLen, prfAlgorithm) {
  var params = asn1$6.create(asn1$6.Class.UNIVERSAL, asn1$6.Type.SEQUENCE, true, [
    // salt
    asn1$6.create(
      asn1$6.Class.UNIVERSAL,
      asn1$6.Type.OCTETSTRING,
      false,
      salt
    ),
    // iteration count
    asn1$6.create(
      asn1$6.Class.UNIVERSAL,
      asn1$6.Type.INTEGER,
      false,
      countBytes.getBytes()
    )
  ]);
  if (prfAlgorithm !== "hmacWithSHA1") {
    params.value.push(
      // key length
      asn1$6.create(
        asn1$6.Class.UNIVERSAL,
        asn1$6.Type.INTEGER,
        false,
        forge$g.util.hexToBytes(dkLen.toString(16))
      ),
      // AlgorithmIdentifier
      asn1$6.create(asn1$6.Class.UNIVERSAL, asn1$6.Type.SEQUENCE, true, [
        // algorithm
        asn1$6.create(
          asn1$6.Class.UNIVERSAL,
          asn1$6.Type.OID,
          false,
          asn1$6.oidToDer(pki$3.oids[prfAlgorithm]).getBytes()
        ),
        // parameters (null)
        asn1$6.create(asn1$6.Class.UNIVERSAL, asn1$6.Type.NULL, false, "")
      ])
    );
  }
  return params;
}
var forge$f = forge$C;
var asn1$5 = forge$f.asn1;
var p7v = forge$f.pkcs7asn1 = forge$f.pkcs7asn1 || {};
forge$f.pkcs7 = forge$f.pkcs7 || {};
forge$f.pkcs7.asn1 = p7v;
var contentInfoValidator$1 = {
  name: "ContentInfo",
  tagClass: asn1$5.Class.UNIVERSAL,
  type: asn1$5.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "ContentInfo.ContentType",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.OID,
    constructed: false,
    capture: "contentType"
  }, {
    name: "ContentInfo.content",
    tagClass: asn1$5.Class.CONTEXT_SPECIFIC,
    type: 0,
    constructed: true,
    optional: true,
    captureAsn1: "content"
  }]
};
p7v.contentInfoValidator = contentInfoValidator$1;
var encryptedContentInfoValidator = {
  name: "EncryptedContentInfo",
  tagClass: asn1$5.Class.UNIVERSAL,
  type: asn1$5.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "EncryptedContentInfo.contentType",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.OID,
    constructed: false,
    capture: "contentType"
  }, {
    name: "EncryptedContentInfo.contentEncryptionAlgorithm",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",
      tagClass: asn1$5.Class.UNIVERSAL,
      type: asn1$5.Type.OID,
      constructed: false,
      capture: "encAlgorithm"
    }, {
      name: "EncryptedContentInfo.contentEncryptionAlgorithm.parameter",
      tagClass: asn1$5.Class.UNIVERSAL,
      captureAsn1: "encParameter"
    }]
  }, {
    name: "EncryptedContentInfo.encryptedContent",
    tagClass: asn1$5.Class.CONTEXT_SPECIFIC,
    type: 0,
    /* The PKCS#7 structure output by OpenSSL somewhat differs from what
     * other implementations do generate.
     *
     * OpenSSL generates a structure like this:
     * SEQUENCE {
     *    ...
     *    [0]
     *       26 DA 67 D2 17 9C 45 3C B1 2A A8 59 2F 29 33 38
     *       C3 C3 DF 86 71 74 7A 19 9F 40 D0 29 BE 85 90 45
     *       ...
     * }
     *
     * Whereas other implementations (and this PKCS#7 module) generate:
     * SEQUENCE {
     *    ...
     *    [0] {
     *       OCTET STRING
     *          26 DA 67 D2 17 9C 45 3C B1 2A A8 59 2F 29 33 38
     *          C3 C3 DF 86 71 74 7A 19 9F 40 D0 29 BE 85 90 45
     *          ...
     *    }
     * }
     *
     * In order to support both, we just capture the context specific
     * field here.  The OCTET STRING bit is removed below.
     */
    capture: "encryptedContent",
    captureAsn1: "encryptedContentAsn1"
  }]
};
p7v.envelopedDataValidator = {
  name: "EnvelopedData",
  tagClass: asn1$5.Class.UNIVERSAL,
  type: asn1$5.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "EnvelopedData.Version",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.INTEGER,
    constructed: false,
    capture: "version"
  }, {
    name: "EnvelopedData.RecipientInfos",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.SET,
    constructed: true,
    captureAsn1: "recipientInfos"
  }].concat(encryptedContentInfoValidator)
};
p7v.encryptedDataValidator = {
  name: "EncryptedData",
  tagClass: asn1$5.Class.UNIVERSAL,
  type: asn1$5.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "EncryptedData.Version",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.INTEGER,
    constructed: false,
    capture: "version"
  }].concat(encryptedContentInfoValidator)
};
var signerValidator = {
  name: "SignerInfo",
  tagClass: asn1$5.Class.UNIVERSAL,
  type: asn1$5.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "SignerInfo.version",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.INTEGER,
    constructed: false
  }, {
    name: "SignerInfo.issuerAndSerialNumber",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "SignerInfo.issuerAndSerialNumber.issuer",
      tagClass: asn1$5.Class.UNIVERSAL,
      type: asn1$5.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "issuer"
    }, {
      name: "SignerInfo.issuerAndSerialNumber.serialNumber",
      tagClass: asn1$5.Class.UNIVERSAL,
      type: asn1$5.Type.INTEGER,
      constructed: false,
      capture: "serial"
    }]
  }, {
    name: "SignerInfo.digestAlgorithm",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "SignerInfo.digestAlgorithm.algorithm",
      tagClass: asn1$5.Class.UNIVERSAL,
      type: asn1$5.Type.OID,
      constructed: false,
      capture: "digestAlgorithm"
    }, {
      name: "SignerInfo.digestAlgorithm.parameter",
      tagClass: asn1$5.Class.UNIVERSAL,
      constructed: false,
      captureAsn1: "digestParameter",
      optional: true
    }]
  }, {
    name: "SignerInfo.authenticatedAttributes",
    tagClass: asn1$5.Class.CONTEXT_SPECIFIC,
    type: 0,
    constructed: true,
    optional: true,
    capture: "authenticatedAttributes"
  }, {
    name: "SignerInfo.digestEncryptionAlgorithm",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.SEQUENCE,
    constructed: true,
    capture: "signatureAlgorithm"
  }, {
    name: "SignerInfo.encryptedDigest",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.OCTETSTRING,
    constructed: false,
    capture: "signature"
  }, {
    name: "SignerInfo.unauthenticatedAttributes",
    tagClass: asn1$5.Class.CONTEXT_SPECIFIC,
    type: 1,
    constructed: true,
    optional: true,
    capture: "unauthenticatedAttributes"
  }]
};
p7v.signedDataValidator = {
  name: "SignedData",
  tagClass: asn1$5.Class.UNIVERSAL,
  type: asn1$5.Type.SEQUENCE,
  constructed: true,
  value: [
    {
      name: "SignedData.Version",
      tagClass: asn1$5.Class.UNIVERSAL,
      type: asn1$5.Type.INTEGER,
      constructed: false,
      capture: "version"
    },
    {
      name: "SignedData.DigestAlgorithms",
      tagClass: asn1$5.Class.UNIVERSAL,
      type: asn1$5.Type.SET,
      constructed: true,
      captureAsn1: "digestAlgorithms"
    },
    contentInfoValidator$1,
    {
      name: "SignedData.Certificates",
      tagClass: asn1$5.Class.CONTEXT_SPECIFIC,
      type: 0,
      optional: true,
      captureAsn1: "certificates"
    },
    {
      name: "SignedData.CertificateRevocationLists",
      tagClass: asn1$5.Class.CONTEXT_SPECIFIC,
      type: 1,
      optional: true,
      captureAsn1: "crls"
    },
    {
      name: "SignedData.SignerInfos",
      tagClass: asn1$5.Class.UNIVERSAL,
      type: asn1$5.Type.SET,
      capture: "signerInfos",
      optional: true,
      value: [signerValidator]
    }
  ]
};
p7v.recipientInfoValidator = {
  name: "RecipientInfo",
  tagClass: asn1$5.Class.UNIVERSAL,
  type: asn1$5.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "RecipientInfo.version",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.INTEGER,
    constructed: false,
    capture: "version"
  }, {
    name: "RecipientInfo.issuerAndSerial",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "RecipientInfo.issuerAndSerial.issuer",
      tagClass: asn1$5.Class.UNIVERSAL,
      type: asn1$5.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "issuer"
    }, {
      name: "RecipientInfo.issuerAndSerial.serialNumber",
      tagClass: asn1$5.Class.UNIVERSAL,
      type: asn1$5.Type.INTEGER,
      constructed: false,
      capture: "serial"
    }]
  }, {
    name: "RecipientInfo.keyEncryptionAlgorithm",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "RecipientInfo.keyEncryptionAlgorithm.algorithm",
      tagClass: asn1$5.Class.UNIVERSAL,
      type: asn1$5.Type.OID,
      constructed: false,
      capture: "encAlgorithm"
    }, {
      name: "RecipientInfo.keyEncryptionAlgorithm.parameter",
      tagClass: asn1$5.Class.UNIVERSAL,
      constructed: false,
      captureAsn1: "encParameter",
      optional: true
    }]
  }, {
    name: "RecipientInfo.encryptedKey",
    tagClass: asn1$5.Class.UNIVERSAL,
    type: asn1$5.Type.OCTETSTRING,
    constructed: false,
    capture: "encKey"
  }]
};
var forge$e = forge$C;
forge$e.mgf = forge$e.mgf || {};
var mgf1 = forge$e.mgf.mgf1 = forge$e.mgf1 = forge$e.mgf1 || {};
mgf1.create = function(md) {
  var mgf = {
    /**
     * Generate mask of specified length.
     *
     * @param {String} seed The seed for mask generation.
     * @param maskLen Number of bytes to generate.
     * @return {String} The generated mask.
     */
    generate: function(seed, maskLen) {
      var t = new forge$e.util.ByteBuffer();
      var len = Math.ceil(maskLen / md.digestLength);
      for (var i = 0; i < len; i++) {
        var c = new forge$e.util.ByteBuffer();
        c.putInt32(i);
        md.start();
        md.update(seed + c.getBytes());
        t.putBuffer(md.digest());
      }
      t.truncate(t.length() - maskLen);
      return t.getBytes();
    }
  };
  return mgf;
};
var forge$d = forge$C;
forge$d.mgf = forge$d.mgf || {};
forge$d.mgf.mgf1 = forge$d.mgf1;
var forge$c = forge$C;
var pss = forge$c.pss = forge$c.pss || {};
pss.create = function(options) {
  if (arguments.length === 3) {
    options = {
      md: arguments[0],
      mgf: arguments[1],
      saltLength: arguments[2]
    };
  }
  var hash2 = options.md;
  var mgf = options.mgf;
  var hLen = hash2.digestLength;
  var salt_ = options.salt || null;
  if (typeof salt_ === "string") {
    salt_ = forge$c.util.createBuffer(salt_);
  }
  var sLen;
  if ("saltLength" in options) {
    sLen = options.saltLength;
  } else if (salt_ !== null) {
    sLen = salt_.length();
  } else {
    throw new Error("Salt length not specified or specific salt not given.");
  }
  if (salt_ !== null && salt_.length() !== sLen) {
    throw new Error("Given salt length does not match length of given salt.");
  }
  var prng2 = options.prng || forge$c.random;
  var pssobj = {};
  pssobj.encode = function(md, modBits) {
    var i;
    var emBits = modBits - 1;
    var emLen = Math.ceil(emBits / 8);
    var mHash = md.digest().getBytes();
    if (emLen < hLen + sLen + 2) {
      throw new Error("Message is too long to encrypt.");
    }
    var salt;
    if (salt_ === null) {
      salt = prng2.getBytesSync(sLen);
    } else {
      salt = salt_.bytes();
    }
    var m_ = new forge$c.util.ByteBuffer();
    m_.fillWithByte(0, 8);
    m_.putBytes(mHash);
    m_.putBytes(salt);
    hash2.start();
    hash2.update(m_.getBytes());
    var h = hash2.digest().getBytes();
    var ps = new forge$c.util.ByteBuffer();
    ps.fillWithByte(0, emLen - sLen - hLen - 2);
    ps.putByte(1);
    ps.putBytes(salt);
    var db = ps.getBytes();
    var maskLen = emLen - hLen - 1;
    var dbMask = mgf.generate(h, maskLen);
    var maskedDB = "";
    for (i = 0; i < maskLen; i++) {
      maskedDB += String.fromCharCode(db.charCodeAt(i) ^ dbMask.charCodeAt(i));
    }
    var mask = 65280 >> 8 * emLen - emBits & 255;
    maskedDB = String.fromCharCode(maskedDB.charCodeAt(0) & ~mask) + maskedDB.substr(1);
    return maskedDB + h + String.fromCharCode(188);
  };
  pssobj.verify = function(mHash, em, modBits) {
    var i;
    var emBits = modBits - 1;
    var emLen = Math.ceil(emBits / 8);
    em = em.substr(-emLen);
    if (emLen < hLen + sLen + 2) {
      throw new Error("Inconsistent parameters to PSS signature verification.");
    }
    if (em.charCodeAt(emLen - 1) !== 188) {
      throw new Error("Encoded message does not end in 0xBC.");
    }
    var maskLen = emLen - hLen - 1;
    var maskedDB = em.substr(0, maskLen);
    var h = em.substr(maskLen, hLen);
    var mask = 65280 >> 8 * emLen - emBits & 255;
    if ((maskedDB.charCodeAt(0) & mask) !== 0) {
      throw new Error("Bits beyond keysize not zero as expected.");
    }
    var dbMask = mgf.generate(h, maskLen);
    var db = "";
    for (i = 0; i < maskLen; i++) {
      db += String.fromCharCode(maskedDB.charCodeAt(i) ^ dbMask.charCodeAt(i));
    }
    db = String.fromCharCode(db.charCodeAt(0) & ~mask) + db.substr(1);
    var checkLen = emLen - hLen - sLen - 2;
    for (i = 0; i < checkLen; i++) {
      if (db.charCodeAt(i) !== 0) {
        throw new Error("Leftmost octets not zero as expected");
      }
    }
    if (db.charCodeAt(checkLen) !== 1) {
      throw new Error("Inconsistent PSS signature, 0x01 marker not found");
    }
    var salt = db.substr(-sLen);
    var m_ = new forge$c.util.ByteBuffer();
    m_.fillWithByte(0, 8);
    m_.putBytes(mHash);
    m_.putBytes(salt);
    hash2.start();
    hash2.update(m_.getBytes());
    var h_ = hash2.digest().getBytes();
    return h === h_;
  };
  return pssobj;
};
var forge$b = forge$C;
var asn1$4 = forge$b.asn1;
var pki$2 = forge$b.pki = forge$b.pki || {};
var oids = pki$2.oids;
var _shortNames = {};
_shortNames["CN"] = oids["commonName"];
_shortNames["commonName"] = "CN";
_shortNames["C"] = oids["countryName"];
_shortNames["countryName"] = "C";
_shortNames["L"] = oids["localityName"];
_shortNames["localityName"] = "L";
_shortNames["ST"] = oids["stateOrProvinceName"];
_shortNames["stateOrProvinceName"] = "ST";
_shortNames["O"] = oids["organizationName"];
_shortNames["organizationName"] = "O";
_shortNames["OU"] = oids["organizationalUnitName"];
_shortNames["organizationalUnitName"] = "OU";
_shortNames["E"] = oids["emailAddress"];
_shortNames["emailAddress"] = "E";
var publicKeyValidator$1 = forge$b.pki.rsa.publicKeyValidator;
var x509CertificateValidator = {
  name: "Certificate",
  tagClass: asn1$4.Class.UNIVERSAL,
  type: asn1$4.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "Certificate.TBSCertificate",
    tagClass: asn1$4.Class.UNIVERSAL,
    type: asn1$4.Type.SEQUENCE,
    constructed: true,
    captureAsn1: "tbsCertificate",
    value: [
      {
        name: "Certificate.TBSCertificate.version",
        tagClass: asn1$4.Class.CONTEXT_SPECIFIC,
        type: 0,
        constructed: true,
        optional: true,
        value: [{
          name: "Certificate.TBSCertificate.version.integer",
          tagClass: asn1$4.Class.UNIVERSAL,
          type: asn1$4.Type.INTEGER,
          constructed: false,
          capture: "certVersion"
        }]
      },
      {
        name: "Certificate.TBSCertificate.serialNumber",
        tagClass: asn1$4.Class.UNIVERSAL,
        type: asn1$4.Type.INTEGER,
        constructed: false,
        capture: "certSerialNumber"
      },
      {
        name: "Certificate.TBSCertificate.signature",
        tagClass: asn1$4.Class.UNIVERSAL,
        type: asn1$4.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "Certificate.TBSCertificate.signature.algorithm",
          tagClass: asn1$4.Class.UNIVERSAL,
          type: asn1$4.Type.OID,
          constructed: false,
          capture: "certinfoSignatureOid"
        }, {
          name: "Certificate.TBSCertificate.signature.parameters",
          tagClass: asn1$4.Class.UNIVERSAL,
          optional: true,
          captureAsn1: "certinfoSignatureParams"
        }]
      },
      {
        name: "Certificate.TBSCertificate.issuer",
        tagClass: asn1$4.Class.UNIVERSAL,
        type: asn1$4.Type.SEQUENCE,
        constructed: true,
        captureAsn1: "certIssuer"
      },
      {
        name: "Certificate.TBSCertificate.validity",
        tagClass: asn1$4.Class.UNIVERSAL,
        type: asn1$4.Type.SEQUENCE,
        constructed: true,
        // Note: UTC and generalized times may both appear so the capture
        // names are based on their detected order, the names used below
        // are only for the common case, which validity time really means
        // "notBefore" and which means "notAfter" will be determined by order
        value: [{
          // notBefore (Time) (UTC time case)
          name: "Certificate.TBSCertificate.validity.notBefore (utc)",
          tagClass: asn1$4.Class.UNIVERSAL,
          type: asn1$4.Type.UTCTIME,
          constructed: false,
          optional: true,
          capture: "certValidity1UTCTime"
        }, {
          // notBefore (Time) (generalized time case)
          name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
          tagClass: asn1$4.Class.UNIVERSAL,
          type: asn1$4.Type.GENERALIZEDTIME,
          constructed: false,
          optional: true,
          capture: "certValidity2GeneralizedTime"
        }, {
          // notAfter (Time) (only UTC time is supported)
          name: "Certificate.TBSCertificate.validity.notAfter (utc)",
          tagClass: asn1$4.Class.UNIVERSAL,
          type: asn1$4.Type.UTCTIME,
          constructed: false,
          optional: true,
          capture: "certValidity3UTCTime"
        }, {
          // notAfter (Time) (only UTC time is supported)
          name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
          tagClass: asn1$4.Class.UNIVERSAL,
          type: asn1$4.Type.GENERALIZEDTIME,
          constructed: false,
          optional: true,
          capture: "certValidity4GeneralizedTime"
        }]
      },
      {
        // Name (subject) (RDNSequence)
        name: "Certificate.TBSCertificate.subject",
        tagClass: asn1$4.Class.UNIVERSAL,
        type: asn1$4.Type.SEQUENCE,
        constructed: true,
        captureAsn1: "certSubject"
      },
      // SubjectPublicKeyInfo
      publicKeyValidator$1,
      {
        // issuerUniqueID (optional)
        name: "Certificate.TBSCertificate.issuerUniqueID",
        tagClass: asn1$4.Class.CONTEXT_SPECIFIC,
        type: 1,
        constructed: true,
        optional: true,
        value: [{
          name: "Certificate.TBSCertificate.issuerUniqueID.id",
          tagClass: asn1$4.Class.UNIVERSAL,
          type: asn1$4.Type.BITSTRING,
          constructed: false,
          // TODO: support arbitrary bit length ids
          captureBitStringValue: "certIssuerUniqueId"
        }]
      },
      {
        // subjectUniqueID (optional)
        name: "Certificate.TBSCertificate.subjectUniqueID",
        tagClass: asn1$4.Class.CONTEXT_SPECIFIC,
        type: 2,
        constructed: true,
        optional: true,
        value: [{
          name: "Certificate.TBSCertificate.subjectUniqueID.id",
          tagClass: asn1$4.Class.UNIVERSAL,
          type: asn1$4.Type.BITSTRING,
          constructed: false,
          // TODO: support arbitrary bit length ids
          captureBitStringValue: "certSubjectUniqueId"
        }]
      },
      {
        // Extensions (optional)
        name: "Certificate.TBSCertificate.extensions",
        tagClass: asn1$4.Class.CONTEXT_SPECIFIC,
        type: 3,
        constructed: true,
        captureAsn1: "certExtensions",
        optional: true
      }
    ]
  }, {
    // AlgorithmIdentifier (signature algorithm)
    name: "Certificate.signatureAlgorithm",
    tagClass: asn1$4.Class.UNIVERSAL,
    type: asn1$4.Type.SEQUENCE,
    constructed: true,
    value: [{
      // algorithm
      name: "Certificate.signatureAlgorithm.algorithm",
      tagClass: asn1$4.Class.UNIVERSAL,
      type: asn1$4.Type.OID,
      constructed: false,
      capture: "certSignatureOid"
    }, {
      name: "Certificate.TBSCertificate.signature.parameters",
      tagClass: asn1$4.Class.UNIVERSAL,
      optional: true,
      captureAsn1: "certSignatureParams"
    }]
  }, {
    // SignatureValue
    name: "Certificate.signatureValue",
    tagClass: asn1$4.Class.UNIVERSAL,
    type: asn1$4.Type.BITSTRING,
    constructed: false,
    captureBitStringValue: "certSignature"
  }]
};
var rsassaPssParameterValidator = {
  name: "rsapss",
  tagClass: asn1$4.Class.UNIVERSAL,
  type: asn1$4.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "rsapss.hashAlgorithm",
    tagClass: asn1$4.Class.CONTEXT_SPECIFIC,
    type: 0,
    constructed: true,
    value: [{
      name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
      tagClass: asn1$4.Class.UNIVERSAL,
      type: asn1$4.Class.SEQUENCE,
      constructed: true,
      optional: true,
      value: [{
        name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
        tagClass: asn1$4.Class.UNIVERSAL,
        type: asn1$4.Type.OID,
        constructed: false,
        capture: "hashOid"
        /* parameter block omitted, for SHA1 NULL anyhow. */
      }]
    }]
  }, {
    name: "rsapss.maskGenAlgorithm",
    tagClass: asn1$4.Class.CONTEXT_SPECIFIC,
    type: 1,
    constructed: true,
    value: [{
      name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
      tagClass: asn1$4.Class.UNIVERSAL,
      type: asn1$4.Class.SEQUENCE,
      constructed: true,
      optional: true,
      value: [{
        name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
        tagClass: asn1$4.Class.UNIVERSAL,
        type: asn1$4.Type.OID,
        constructed: false,
        capture: "maskGenOid"
      }, {
        name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
        tagClass: asn1$4.Class.UNIVERSAL,
        type: asn1$4.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
          tagClass: asn1$4.Class.UNIVERSAL,
          type: asn1$4.Type.OID,
          constructed: false,
          capture: "maskGenHashOid"
          /* parameter block omitted, for SHA1 NULL anyhow. */
        }]
      }]
    }]
  }, {
    name: "rsapss.saltLength",
    tagClass: asn1$4.Class.CONTEXT_SPECIFIC,
    type: 2,
    optional: true,
    value: [{
      name: "rsapss.saltLength.saltLength",
      tagClass: asn1$4.Class.UNIVERSAL,
      type: asn1$4.Class.INTEGER,
      constructed: false,
      capture: "saltLength"
    }]
  }, {
    name: "rsapss.trailerField",
    tagClass: asn1$4.Class.CONTEXT_SPECIFIC,
    type: 3,
    optional: true,
    value: [{
      name: "rsapss.trailer.trailer",
      tagClass: asn1$4.Class.UNIVERSAL,
      type: asn1$4.Class.INTEGER,
      constructed: false,
      capture: "trailer"
    }]
  }]
};
var certificationRequestInfoValidator = {
  name: "CertificationRequestInfo",
  tagClass: asn1$4.Class.UNIVERSAL,
  type: asn1$4.Type.SEQUENCE,
  constructed: true,
  captureAsn1: "certificationRequestInfo",
  value: [
    {
      name: "CertificationRequestInfo.integer",
      tagClass: asn1$4.Class.UNIVERSAL,
      type: asn1$4.Type.INTEGER,
      constructed: false,
      capture: "certificationRequestInfoVersion"
    },
    {
      // Name (subject) (RDNSequence)
      name: "CertificationRequestInfo.subject",
      tagClass: asn1$4.Class.UNIVERSAL,
      type: asn1$4.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "certificationRequestInfoSubject"
    },
    // SubjectPublicKeyInfo
    publicKeyValidator$1,
    {
      name: "CertificationRequestInfo.attributes",
      tagClass: asn1$4.Class.CONTEXT_SPECIFIC,
      type: 0,
      constructed: true,
      optional: true,
      capture: "certificationRequestInfoAttributes",
      value: [{
        name: "CertificationRequestInfo.attributes",
        tagClass: asn1$4.Class.UNIVERSAL,
        type: asn1$4.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "CertificationRequestInfo.attributes.type",
          tagClass: asn1$4.Class.UNIVERSAL,
          type: asn1$4.Type.OID,
          constructed: false
        }, {
          name: "CertificationRequestInfo.attributes.value",
          tagClass: asn1$4.Class.UNIVERSAL,
          type: asn1$4.Type.SET,
          constructed: true
        }]
      }]
    }
  ]
};
var certificationRequestValidator = {
  name: "CertificationRequest",
  tagClass: asn1$4.Class.UNIVERSAL,
  type: asn1$4.Type.SEQUENCE,
  constructed: true,
  captureAsn1: "csr",
  value: [
    certificationRequestInfoValidator,
    {
      // AlgorithmIdentifier (signature algorithm)
      name: "CertificationRequest.signatureAlgorithm",
      tagClass: asn1$4.Class.UNIVERSAL,
      type: asn1$4.Type.SEQUENCE,
      constructed: true,
      value: [{
        // algorithm
        name: "CertificationRequest.signatureAlgorithm.algorithm",
        tagClass: asn1$4.Class.UNIVERSAL,
        type: asn1$4.Type.OID,
        constructed: false,
        capture: "csrSignatureOid"
      }, {
        name: "CertificationRequest.signatureAlgorithm.parameters",
        tagClass: asn1$4.Class.UNIVERSAL,
        optional: true,
        captureAsn1: "csrSignatureParams"
      }]
    },
    {
      // signature
      name: "CertificationRequest.signature",
      tagClass: asn1$4.Class.UNIVERSAL,
      type: asn1$4.Type.BITSTRING,
      constructed: false,
      captureBitStringValue: "csrSignature"
    }
  ]
};
pki$2.RDNAttributesAsArray = function(rdn, md) {
  var rval = [];
  var set, attr, obj;
  for (var si = 0; si < rdn.value.length; ++si) {
    set = rdn.value[si];
    for (var i = 0; i < set.value.length; ++i) {
      obj = {};
      attr = set.value[i];
      obj.type = asn1$4.derToOid(attr.value[0].value);
      obj.value = attr.value[1].value;
      obj.valueTagClass = attr.value[1].type;
      if (obj.type in oids) {
        obj.name = oids[obj.type];
        if (obj.name in _shortNames) {
          obj.shortName = _shortNames[obj.name];
        }
      }
      if (md) {
        md.update(obj.type);
        md.update(obj.value);
      }
      rval.push(obj);
    }
  }
  return rval;
};
pki$2.CRIAttributesAsArray = function(attributes) {
  var rval = [];
  for (var si = 0; si < attributes.length; ++si) {
    var seq = attributes[si];
    var type = asn1$4.derToOid(seq.value[0].value);
    var values = seq.value[1].value;
    for (var vi = 0; vi < values.length; ++vi) {
      var obj = {};
      obj.type = type;
      obj.value = values[vi].value;
      obj.valueTagClass = values[vi].type;
      if (obj.type in oids) {
        obj.name = oids[obj.type];
        if (obj.name in _shortNames) {
          obj.shortName = _shortNames[obj.name];
        }
      }
      if (obj.type === oids.extensionRequest) {
        obj.extensions = [];
        for (var ei = 0; ei < obj.value.length; ++ei) {
          obj.extensions.push(pki$2.certificateExtensionFromAsn1(obj.value[ei]));
        }
      }
      rval.push(obj);
    }
  }
  return rval;
};
function _getAttribute(obj, options) {
  if (typeof options === "string") {
    options = { shortName: options };
  }
  var rval = null;
  var attr;
  for (var i = 0; rval === null && i < obj.attributes.length; ++i) {
    attr = obj.attributes[i];
    if (options.type && options.type === attr.type) {
      rval = attr;
    } else if (options.name && options.name === attr.name) {
      rval = attr;
    } else if (options.shortName && options.shortName === attr.shortName) {
      rval = attr;
    }
  }
  return rval;
}
var _readSignatureParameters = function(oid, obj, fillDefaults) {
  var params = {};
  if (oid !== oids["RSASSA-PSS"]) {
    return params;
  }
  if (fillDefaults) {
    params = {
      hash: {
        algorithmOid: oids["sha1"]
      },
      mgf: {
        algorithmOid: oids["mgf1"],
        hash: {
          algorithmOid: oids["sha1"]
        }
      },
      saltLength: 20
    };
  }
  var capture = {};
  var errors = [];
  if (!asn1$4.validate(obj, rsassaPssParameterValidator, capture, errors)) {
    var error = new Error("Cannot read RSASSA-PSS parameter block.");
    error.errors = errors;
    throw error;
  }
  if (capture.hashOid !== void 0) {
    params.hash = params.hash || {};
    params.hash.algorithmOid = asn1$4.derToOid(capture.hashOid);
  }
  if (capture.maskGenOid !== void 0) {
    params.mgf = params.mgf || {};
    params.mgf.algorithmOid = asn1$4.derToOid(capture.maskGenOid);
    params.mgf.hash = params.mgf.hash || {};
    params.mgf.hash.algorithmOid = asn1$4.derToOid(capture.maskGenHashOid);
  }
  if (capture.saltLength !== void 0) {
    params.saltLength = capture.saltLength.charCodeAt(0);
  }
  return params;
};
var _createSignatureDigest = function(options) {
  switch (oids[options.signatureOid]) {
    case "sha1WithRSAEncryption":
    case "sha1WithRSASignature":
      return forge$b.md.sha1.create();
    case "md5WithRSAEncryption":
      return forge$b.md.md5.create();
    case "sha256WithRSAEncryption":
      return forge$b.md.sha256.create();
    case "sha384WithRSAEncryption":
      return forge$b.md.sha384.create();
    case "sha512WithRSAEncryption":
      return forge$b.md.sha512.create();
    case "RSASSA-PSS":
      return forge$b.md.sha256.create();
    default:
      var error = new Error(
        "Could not compute " + options.type + " digest. Unknown signature OID."
      );
      error.signatureOid = options.signatureOid;
      throw error;
  }
};
var _verifySignature = function(options) {
  var cert = options.certificate;
  var scheme;
  switch (cert.signatureOid) {
    case oids.sha1WithRSAEncryption:
    case oids.sha1WithRSASignature:
      break;
    case oids["RSASSA-PSS"]:
      var hash2, mgf;
      hash2 = oids[cert.signatureParameters.mgf.hash.algorithmOid];
      if (hash2 === void 0 || forge$b.md[hash2] === void 0) {
        var error = new Error("Unsupported MGF hash function.");
        error.oid = cert.signatureParameters.mgf.hash.algorithmOid;
        error.name = hash2;
        throw error;
      }
      mgf = oids[cert.signatureParameters.mgf.algorithmOid];
      if (mgf === void 0 || forge$b.mgf[mgf] === void 0) {
        var error = new Error("Unsupported MGF function.");
        error.oid = cert.signatureParameters.mgf.algorithmOid;
        error.name = mgf;
        throw error;
      }
      mgf = forge$b.mgf[mgf].create(forge$b.md[hash2].create());
      hash2 = oids[cert.signatureParameters.hash.algorithmOid];
      if (hash2 === void 0 || forge$b.md[hash2] === void 0) {
        var error = new Error("Unsupported RSASSA-PSS hash function.");
        error.oid = cert.signatureParameters.hash.algorithmOid;
        error.name = hash2;
        throw error;
      }
      scheme = forge$b.pss.create(
        forge$b.md[hash2].create(),
        mgf,
        cert.signatureParameters.saltLength
      );
      break;
  }
  return cert.publicKey.verify(
    options.md.digest().getBytes(),
    options.signature,
    scheme
  );
};
pki$2.certificateFromPem = function(pem2, computeHash, strict) {
  var msg = forge$b.pem.decode(pem2)[0];
  if (msg.type !== "CERTIFICATE" && msg.type !== "X509 CERTIFICATE" && msg.type !== "TRUSTED CERTIFICATE") {
    var error = new Error(
      'Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".'
    );
    error.headerType = msg.type;
    throw error;
  }
  if (msg.procType && msg.procType.type === "ENCRYPTED") {
    throw new Error(
      "Could not convert certificate from PEM; PEM is encrypted."
    );
  }
  var obj = asn1$4.fromDer(msg.body, strict);
  return pki$2.certificateFromAsn1(obj, computeHash);
};
pki$2.certificateToPem = function(cert, maxline) {
  var msg = {
    type: "CERTIFICATE",
    body: asn1$4.toDer(pki$2.certificateToAsn1(cert)).getBytes()
  };
  return forge$b.pem.encode(msg, { maxline });
};
pki$2.publicKeyFromPem = function(pem2) {
  var msg = forge$b.pem.decode(pem2)[0];
  if (msg.type !== "PUBLIC KEY" && msg.type !== "RSA PUBLIC KEY") {
    var error = new Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');
    error.headerType = msg.type;
    throw error;
  }
  if (msg.procType && msg.procType.type === "ENCRYPTED") {
    throw new Error("Could not convert public key from PEM; PEM is encrypted.");
  }
  var obj = asn1$4.fromDer(msg.body);
  return pki$2.publicKeyFromAsn1(obj);
};
pki$2.publicKeyToPem = function(key, maxline) {
  var msg = {
    type: "PUBLIC KEY",
    body: asn1$4.toDer(pki$2.publicKeyToAsn1(key)).getBytes()
  };
  return forge$b.pem.encode(msg, { maxline });
};
pki$2.publicKeyToRSAPublicKeyPem = function(key, maxline) {
  var msg = {
    type: "RSA PUBLIC KEY",
    body: asn1$4.toDer(pki$2.publicKeyToRSAPublicKey(key)).getBytes()
  };
  return forge$b.pem.encode(msg, { maxline });
};
pki$2.getPublicKeyFingerprint = function(key, options) {
  options = options || {};
  var md = options.md || forge$b.md.sha1.create();
  var type = options.type || "RSAPublicKey";
  var bytes;
  switch (type) {
    case "RSAPublicKey":
      bytes = asn1$4.toDer(pki$2.publicKeyToRSAPublicKey(key)).getBytes();
      break;
    case "SubjectPublicKeyInfo":
      bytes = asn1$4.toDer(pki$2.publicKeyToAsn1(key)).getBytes();
      break;
    default:
      throw new Error('Unknown fingerprint type "' + options.type + '".');
  }
  md.start();
  md.update(bytes);
  var digest = md.digest();
  if (options.encoding === "hex") {
    var hex = digest.toHex();
    if (options.delimiter) {
      return hex.match(/.{2}/g).join(options.delimiter);
    }
    return hex;
  } else if (options.encoding === "binary") {
    return digest.getBytes();
  } else if (options.encoding) {
    throw new Error('Unknown encoding "' + options.encoding + '".');
  }
  return digest;
};
pki$2.certificationRequestFromPem = function(pem2, computeHash, strict) {
  var msg = forge$b.pem.decode(pem2)[0];
  if (msg.type !== "CERTIFICATE REQUEST") {
    var error = new Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".');
    error.headerType = msg.type;
    throw error;
  }
  if (msg.procType && msg.procType.type === "ENCRYPTED") {
    throw new Error("Could not convert certification request from PEM; PEM is encrypted.");
  }
  var obj = asn1$4.fromDer(msg.body, strict);
  return pki$2.certificationRequestFromAsn1(obj, computeHash);
};
pki$2.certificationRequestToPem = function(csr, maxline) {
  var msg = {
    type: "CERTIFICATE REQUEST",
    body: asn1$4.toDer(pki$2.certificationRequestToAsn1(csr)).getBytes()
  };
  return forge$b.pem.encode(msg, { maxline });
};
pki$2.createCertificate = function() {
  var cert = {};
  cert.version = 2;
  cert.serialNumber = "00";
  cert.signatureOid = null;
  cert.signature = null;
  cert.siginfo = {};
  cert.siginfo.algorithmOid = null;
  cert.validity = {};
  cert.validity.notBefore = /* @__PURE__ */ new Date();
  cert.validity.notAfter = /* @__PURE__ */ new Date();
  cert.issuer = {};
  cert.issuer.getField = function(sn) {
    return _getAttribute(cert.issuer, sn);
  };
  cert.issuer.addField = function(attr) {
    _fillMissingFields([attr]);
    cert.issuer.attributes.push(attr);
  };
  cert.issuer.attributes = [];
  cert.issuer.hash = null;
  cert.subject = {};
  cert.subject.getField = function(sn) {
    return _getAttribute(cert.subject, sn);
  };
  cert.subject.addField = function(attr) {
    _fillMissingFields([attr]);
    cert.subject.attributes.push(attr);
  };
  cert.subject.attributes = [];
  cert.subject.hash = null;
  cert.extensions = [];
  cert.publicKey = null;
  cert.md = null;
  cert.setSubject = function(attrs, uniqueId) {
    _fillMissingFields(attrs);
    cert.subject.attributes = attrs;
    delete cert.subject.uniqueId;
    if (uniqueId) {
      cert.subject.uniqueId = uniqueId;
    }
    cert.subject.hash = null;
  };
  cert.setIssuer = function(attrs, uniqueId) {
    _fillMissingFields(attrs);
    cert.issuer.attributes = attrs;
    delete cert.issuer.uniqueId;
    if (uniqueId) {
      cert.issuer.uniqueId = uniqueId;
    }
    cert.issuer.hash = null;
  };
  cert.setExtensions = function(exts) {
    for (var i = 0; i < exts.length; ++i) {
      _fillMissingExtensionFields(exts[i], { cert });
    }
    cert.extensions = exts;
  };
  cert.getExtension = function(options) {
    if (typeof options === "string") {
      options = { name: options };
    }
    var rval = null;
    var ext;
    for (var i = 0; rval === null && i < cert.extensions.length; ++i) {
      ext = cert.extensions[i];
      if (options.id && ext.id === options.id) {
        rval = ext;
      } else if (options.name && ext.name === options.name) {
        rval = ext;
      }
    }
    return rval;
  };
  cert.sign = function(key, md) {
    cert.md = md || forge$b.md.sha1.create();
    var algorithmOid = oids[cert.md.algorithm + "WithRSAEncryption"];
    if (!algorithmOid) {
      var error = new Error("Could not compute certificate digest. Unknown message digest algorithm OID.");
      error.algorithm = cert.md.algorithm;
      throw error;
    }
    cert.signatureOid = cert.siginfo.algorithmOid = algorithmOid;
    cert.tbsCertificate = pki$2.getTBSCertificate(cert);
    var bytes = asn1$4.toDer(cert.tbsCertificate);
    cert.md.update(bytes.getBytes());
    cert.signature = key.sign(cert.md);
  };
  cert.verify = function(child) {
    var rval = false;
    if (!cert.issued(child)) {
      var issuer = child.issuer;
      var subject = cert.subject;
      var error = new Error(
        "The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject."
      );
      error.expectedIssuer = subject.attributes;
      error.actualIssuer = issuer.attributes;
      throw error;
    }
    var md = child.md;
    if (md === null) {
      md = _createSignatureDigest({
        signatureOid: child.signatureOid,
        type: "certificate"
      });
      var tbsCertificate = child.tbsCertificate || pki$2.getTBSCertificate(child);
      var bytes = asn1$4.toDer(tbsCertificate);
      md.update(bytes.getBytes());
    }
    if (md !== null) {
      rval = _verifySignature({
        certificate: cert,
        md,
        signature: child.signature
      });
    }
    return rval;
  };
  cert.isIssuer = function(parent) {
    var rval = false;
    var i = cert.issuer;
    var s2 = parent.subject;
    if (i.hash && s2.hash) {
      rval = i.hash === s2.hash;
    } else if (i.attributes.length === s2.attributes.length) {
      rval = true;
      var iattr, sattr;
      for (var n = 0; rval && n < i.attributes.length; ++n) {
        iattr = i.attributes[n];
        sattr = s2.attributes[n];
        if (iattr.type !== sattr.type || iattr.value !== sattr.value) {
          rval = false;
        }
      }
    }
    return rval;
  };
  cert.issued = function(child) {
    return child.isIssuer(cert);
  };
  cert.generateSubjectKeyIdentifier = function() {
    return pki$2.getPublicKeyFingerprint(cert.publicKey, { type: "RSAPublicKey" });
  };
  cert.verifySubjectKeyIdentifier = function() {
    var oid = oids["subjectKeyIdentifier"];
    for (var i = 0; i < cert.extensions.length; ++i) {
      var ext = cert.extensions[i];
      if (ext.id === oid) {
        var ski = cert.generateSubjectKeyIdentifier().getBytes();
        return forge$b.util.hexToBytes(ext.subjectKeyIdentifier) === ski;
      }
    }
    return false;
  };
  return cert;
};
pki$2.certificateFromAsn1 = function(obj, computeHash) {
  var capture = {};
  var errors = [];
  if (!asn1$4.validate(obj, x509CertificateValidator, capture, errors)) {
    var error = new Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.");
    error.errors = errors;
    throw error;
  }
  var oid = asn1$4.derToOid(capture.publicKeyOid);
  if (oid !== pki$2.oids.rsaEncryption) {
    throw new Error("Cannot read public key. OID is not RSA.");
  }
  var cert = pki$2.createCertificate();
  cert.version = capture.certVersion ? capture.certVersion.charCodeAt(0) : 0;
  var serial = forge$b.util.createBuffer(capture.certSerialNumber);
  cert.serialNumber = serial.toHex();
  cert.signatureOid = forge$b.asn1.derToOid(capture.certSignatureOid);
  cert.signatureParameters = _readSignatureParameters(
    cert.signatureOid,
    capture.certSignatureParams,
    true
  );
  cert.siginfo.algorithmOid = forge$b.asn1.derToOid(capture.certinfoSignatureOid);
  cert.siginfo.parameters = _readSignatureParameters(
    cert.siginfo.algorithmOid,
    capture.certinfoSignatureParams,
    false
  );
  cert.signature = capture.certSignature;
  var validity = [];
  if (capture.certValidity1UTCTime !== void 0) {
    validity.push(asn1$4.utcTimeToDate(capture.certValidity1UTCTime));
  }
  if (capture.certValidity2GeneralizedTime !== void 0) {
    validity.push(asn1$4.generalizedTimeToDate(
      capture.certValidity2GeneralizedTime
    ));
  }
  if (capture.certValidity3UTCTime !== void 0) {
    validity.push(asn1$4.utcTimeToDate(capture.certValidity3UTCTime));
  }
  if (capture.certValidity4GeneralizedTime !== void 0) {
    validity.push(asn1$4.generalizedTimeToDate(
      capture.certValidity4GeneralizedTime
    ));
  }
  if (validity.length > 2) {
    throw new Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");
  }
  if (validity.length < 2) {
    throw new Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");
  }
  cert.validity.notBefore = validity[0];
  cert.validity.notAfter = validity[1];
  cert.tbsCertificate = capture.tbsCertificate;
  if (computeHash) {
    cert.md = _createSignatureDigest({
      signatureOid: cert.signatureOid,
      type: "certificate"
    });
    var bytes = asn1$4.toDer(cert.tbsCertificate);
    cert.md.update(bytes.getBytes());
  }
  var imd = forge$b.md.sha1.create();
  var ibytes = asn1$4.toDer(capture.certIssuer);
  imd.update(ibytes.getBytes());
  cert.issuer.getField = function(sn) {
    return _getAttribute(cert.issuer, sn);
  };
  cert.issuer.addField = function(attr) {
    _fillMissingFields([attr]);
    cert.issuer.attributes.push(attr);
  };
  cert.issuer.attributes = pki$2.RDNAttributesAsArray(capture.certIssuer);
  if (capture.certIssuerUniqueId) {
    cert.issuer.uniqueId = capture.certIssuerUniqueId;
  }
  cert.issuer.hash = imd.digest().toHex();
  var smd = forge$b.md.sha1.create();
  var sbytes = asn1$4.toDer(capture.certSubject);
  smd.update(sbytes.getBytes());
  cert.subject.getField = function(sn) {
    return _getAttribute(cert.subject, sn);
  };
  cert.subject.addField = function(attr) {
    _fillMissingFields([attr]);
    cert.subject.attributes.push(attr);
  };
  cert.subject.attributes = pki$2.RDNAttributesAsArray(capture.certSubject);
  if (capture.certSubjectUniqueId) {
    cert.subject.uniqueId = capture.certSubjectUniqueId;
  }
  cert.subject.hash = smd.digest().toHex();
  if (capture.certExtensions) {
    cert.extensions = pki$2.certificateExtensionsFromAsn1(capture.certExtensions);
  } else {
    cert.extensions = [];
  }
  cert.publicKey = pki$2.publicKeyFromAsn1(capture.subjectPublicKeyInfo);
  return cert;
};
pki$2.certificateExtensionsFromAsn1 = function(exts) {
  var rval = [];
  for (var i = 0; i < exts.value.length; ++i) {
    var extseq = exts.value[i];
    for (var ei = 0; ei < extseq.value.length; ++ei) {
      rval.push(pki$2.certificateExtensionFromAsn1(extseq.value[ei]));
    }
  }
  return rval;
};
pki$2.certificateExtensionFromAsn1 = function(ext) {
  var e = {};
  e.id = asn1$4.derToOid(ext.value[0].value);
  e.critical = false;
  if (ext.value[1].type === asn1$4.Type.BOOLEAN) {
    e.critical = ext.value[1].value.charCodeAt(0) !== 0;
    e.value = ext.value[2].value;
  } else {
    e.value = ext.value[1].value;
  }
  if (e.id in oids) {
    e.name = oids[e.id];
    if (e.name === "keyUsage") {
      var ev = asn1$4.fromDer(e.value);
      var b2 = 0;
      var b3 = 0;
      if (ev.value.length > 1) {
        b2 = ev.value.charCodeAt(1);
        b3 = ev.value.length > 2 ? ev.value.charCodeAt(2) : 0;
      }
      e.digitalSignature = (b2 & 128) === 128;
      e.nonRepudiation = (b2 & 64) === 64;
      e.keyEncipherment = (b2 & 32) === 32;
      e.dataEncipherment = (b2 & 16) === 16;
      e.keyAgreement = (b2 & 8) === 8;
      e.keyCertSign = (b2 & 4) === 4;
      e.cRLSign = (b2 & 2) === 2;
      e.encipherOnly = (b2 & 1) === 1;
      e.decipherOnly = (b3 & 128) === 128;
    } else if (e.name === "basicConstraints") {
      var ev = asn1$4.fromDer(e.value);
      if (ev.value.length > 0 && ev.value[0].type === asn1$4.Type.BOOLEAN) {
        e.cA = ev.value[0].value.charCodeAt(0) !== 0;
      } else {
        e.cA = false;
      }
      var value = null;
      if (ev.value.length > 0 && ev.value[0].type === asn1$4.Type.INTEGER) {
        value = ev.value[0].value;
      } else if (ev.value.length > 1) {
        value = ev.value[1].value;
      }
      if (value !== null) {
        e.pathLenConstraint = asn1$4.derToInteger(value);
      }
    } else if (e.name === "extKeyUsage") {
      var ev = asn1$4.fromDer(e.value);
      for (var vi = 0; vi < ev.value.length; ++vi) {
        var oid = asn1$4.derToOid(ev.value[vi].value);
        if (oid in oids) {
          e[oids[oid]] = true;
        } else {
          e[oid] = true;
        }
      }
    } else if (e.name === "nsCertType") {
      var ev = asn1$4.fromDer(e.value);
      var b2 = 0;
      if (ev.value.length > 1) {
        b2 = ev.value.charCodeAt(1);
      }
      e.client = (b2 & 128) === 128;
      e.server = (b2 & 64) === 64;
      e.email = (b2 & 32) === 32;
      e.objsign = (b2 & 16) === 16;
      e.reserved = (b2 & 8) === 8;
      e.sslCA = (b2 & 4) === 4;
      e.emailCA = (b2 & 2) === 2;
      e.objCA = (b2 & 1) === 1;
    } else if (e.name === "subjectAltName" || e.name === "issuerAltName") {
      e.altNames = [];
      var gn;
      var ev = asn1$4.fromDer(e.value);
      for (var n = 0; n < ev.value.length; ++n) {
        gn = ev.value[n];
        var altName = {
          type: gn.type,
          value: gn.value
        };
        e.altNames.push(altName);
        switch (gn.type) {
          case 1:
          case 2:
          case 6:
            break;
          case 7:
            altName.ip = forge$b.util.bytesToIP(gn.value);
            break;
          case 8:
            altName.oid = asn1$4.derToOid(gn.value);
            break;
        }
      }
    } else if (e.name === "subjectKeyIdentifier") {
      var ev = asn1$4.fromDer(e.value);
      e.subjectKeyIdentifier = forge$b.util.bytesToHex(ev.value);
    }
  }
  return e;
};
pki$2.certificationRequestFromAsn1 = function(obj, computeHash) {
  var capture = {};
  var errors = [];
  if (!asn1$4.validate(obj, certificationRequestValidator, capture, errors)) {
    var error = new Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.");
    error.errors = errors;
    throw error;
  }
  var oid = asn1$4.derToOid(capture.publicKeyOid);
  if (oid !== pki$2.oids.rsaEncryption) {
    throw new Error("Cannot read public key. OID is not RSA.");
  }
  var csr = pki$2.createCertificationRequest();
  csr.version = capture.csrVersion ? capture.csrVersion.charCodeAt(0) : 0;
  csr.signatureOid = forge$b.asn1.derToOid(capture.csrSignatureOid);
  csr.signatureParameters = _readSignatureParameters(
    csr.signatureOid,
    capture.csrSignatureParams,
    true
  );
  csr.siginfo.algorithmOid = forge$b.asn1.derToOid(capture.csrSignatureOid);
  csr.siginfo.parameters = _readSignatureParameters(
    csr.siginfo.algorithmOid,
    capture.csrSignatureParams,
    false
  );
  csr.signature = capture.csrSignature;
  csr.certificationRequestInfo = capture.certificationRequestInfo;
  if (computeHash) {
    csr.md = _createSignatureDigest({
      signatureOid: csr.signatureOid,
      type: "certification request"
    });
    var bytes = asn1$4.toDer(csr.certificationRequestInfo);
    csr.md.update(bytes.getBytes());
  }
  var smd = forge$b.md.sha1.create();
  csr.subject.getField = function(sn) {
    return _getAttribute(csr.subject, sn);
  };
  csr.subject.addField = function(attr) {
    _fillMissingFields([attr]);
    csr.subject.attributes.push(attr);
  };
  csr.subject.attributes = pki$2.RDNAttributesAsArray(
    capture.certificationRequestInfoSubject,
    smd
  );
  csr.subject.hash = smd.digest().toHex();
  csr.publicKey = pki$2.publicKeyFromAsn1(capture.subjectPublicKeyInfo);
  csr.getAttribute = function(sn) {
    return _getAttribute(csr, sn);
  };
  csr.addAttribute = function(attr) {
    _fillMissingFields([attr]);
    csr.attributes.push(attr);
  };
  csr.attributes = pki$2.CRIAttributesAsArray(
    capture.certificationRequestInfoAttributes || []
  );
  return csr;
};
pki$2.createCertificationRequest = function() {
  var csr = {};
  csr.version = 0;
  csr.signatureOid = null;
  csr.signature = null;
  csr.siginfo = {};
  csr.siginfo.algorithmOid = null;
  csr.subject = {};
  csr.subject.getField = function(sn) {
    return _getAttribute(csr.subject, sn);
  };
  csr.subject.addField = function(attr) {
    _fillMissingFields([attr]);
    csr.subject.attributes.push(attr);
  };
  csr.subject.attributes = [];
  csr.subject.hash = null;
  csr.publicKey = null;
  csr.attributes = [];
  csr.getAttribute = function(sn) {
    return _getAttribute(csr, sn);
  };
  csr.addAttribute = function(attr) {
    _fillMissingFields([attr]);
    csr.attributes.push(attr);
  };
  csr.md = null;
  csr.setSubject = function(attrs) {
    _fillMissingFields(attrs);
    csr.subject.attributes = attrs;
    csr.subject.hash = null;
  };
  csr.setAttributes = function(attrs) {
    _fillMissingFields(attrs);
    csr.attributes = attrs;
  };
  csr.sign = function(key, md) {
    csr.md = md || forge$b.md.sha1.create();
    var algorithmOid = oids[csr.md.algorithm + "WithRSAEncryption"];
    if (!algorithmOid) {
      var error = new Error("Could not compute certification request digest. Unknown message digest algorithm OID.");
      error.algorithm = csr.md.algorithm;
      throw error;
    }
    csr.signatureOid = csr.siginfo.algorithmOid = algorithmOid;
    csr.certificationRequestInfo = pki$2.getCertificationRequestInfo(csr);
    var bytes = asn1$4.toDer(csr.certificationRequestInfo);
    csr.md.update(bytes.getBytes());
    csr.signature = key.sign(csr.md);
  };
  csr.verify = function() {
    var rval = false;
    var md = csr.md;
    if (md === null) {
      md = _createSignatureDigest({
        signatureOid: csr.signatureOid,
        type: "certification request"
      });
      var cri = csr.certificationRequestInfo || pki$2.getCertificationRequestInfo(csr);
      var bytes = asn1$4.toDer(cri);
      md.update(bytes.getBytes());
    }
    if (md !== null) {
      rval = _verifySignature({
        certificate: csr,
        md,
        signature: csr.signature
      });
    }
    return rval;
  };
  return csr;
};
function _dnToAsn1(obj) {
  var rval = asn1$4.create(
    asn1$4.Class.UNIVERSAL,
    asn1$4.Type.SEQUENCE,
    true,
    []
  );
  var attr, set;
  var attrs = obj.attributes;
  for (var i = 0; i < attrs.length; ++i) {
    attr = attrs[i];
    var value = attr.value;
    var valueTagClass = asn1$4.Type.PRINTABLESTRING;
    if ("valueTagClass" in attr) {
      valueTagClass = attr.valueTagClass;
      if (valueTagClass === asn1$4.Type.UTF8) {
        value = forge$b.util.encodeUtf8(value);
      }
    }
    set = asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SET, true, [
      asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, [
        // AttributeType
        asn1$4.create(
          asn1$4.Class.UNIVERSAL,
          asn1$4.Type.OID,
          false,
          asn1$4.oidToDer(attr.type).getBytes()
        ),
        // AttributeValue
        asn1$4.create(asn1$4.Class.UNIVERSAL, valueTagClass, false, value)
      ])
    ]);
    rval.value.push(set);
  }
  return rval;
}
function _fillMissingFields(attrs) {
  var attr;
  for (var i = 0; i < attrs.length; ++i) {
    attr = attrs[i];
    if (typeof attr.name === "undefined") {
      if (attr.type && attr.type in pki$2.oids) {
        attr.name = pki$2.oids[attr.type];
      } else if (attr.shortName && attr.shortName in _shortNames) {
        attr.name = pki$2.oids[_shortNames[attr.shortName]];
      }
    }
    if (typeof attr.type === "undefined") {
      if (attr.name && attr.name in pki$2.oids) {
        attr.type = pki$2.oids[attr.name];
      } else {
        var error = new Error("Attribute type not specified.");
        error.attribute = attr;
        throw error;
      }
    }
    if (typeof attr.shortName === "undefined") {
      if (attr.name && attr.name in _shortNames) {
        attr.shortName = _shortNames[attr.name];
      }
    }
    if (attr.type === oids.extensionRequest) {
      attr.valueConstructed = true;
      attr.valueTagClass = asn1$4.Type.SEQUENCE;
      if (!attr.value && attr.extensions) {
        attr.value = [];
        for (var ei = 0; ei < attr.extensions.length; ++ei) {
          attr.value.push(pki$2.certificateExtensionToAsn1(
            _fillMissingExtensionFields(attr.extensions[ei])
          ));
        }
      }
    }
    if (typeof attr.value === "undefined") {
      var error = new Error("Attribute value not specified.");
      error.attribute = attr;
      throw error;
    }
  }
}
function _fillMissingExtensionFields(e, options) {
  options = options || {};
  if (typeof e.name === "undefined") {
    if (e.id && e.id in pki$2.oids) {
      e.name = pki$2.oids[e.id];
    }
  }
  if (typeof e.id === "undefined") {
    if (e.name && e.name in pki$2.oids) {
      e.id = pki$2.oids[e.name];
    } else {
      var error = new Error("Extension ID not specified.");
      error.extension = e;
      throw error;
    }
  }
  if (typeof e.value !== "undefined") {
    return e;
  }
  if (e.name === "keyUsage") {
    var unused = 0;
    var b2 = 0;
    var b3 = 0;
    if (e.digitalSignature) {
      b2 |= 128;
      unused = 7;
    }
    if (e.nonRepudiation) {
      b2 |= 64;
      unused = 6;
    }
    if (e.keyEncipherment) {
      b2 |= 32;
      unused = 5;
    }
    if (e.dataEncipherment) {
      b2 |= 16;
      unused = 4;
    }
    if (e.keyAgreement) {
      b2 |= 8;
      unused = 3;
    }
    if (e.keyCertSign) {
      b2 |= 4;
      unused = 2;
    }
    if (e.cRLSign) {
      b2 |= 2;
      unused = 1;
    }
    if (e.encipherOnly) {
      b2 |= 1;
      unused = 0;
    }
    if (e.decipherOnly) {
      b3 |= 128;
      unused = 7;
    }
    var value = String.fromCharCode(unused);
    if (b3 !== 0) {
      value += String.fromCharCode(b2) + String.fromCharCode(b3);
    } else if (b2 !== 0) {
      value += String.fromCharCode(b2);
    }
    e.value = asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.BITSTRING,
      false,
      value
    );
  } else if (e.name === "basicConstraints") {
    e.value = asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.SEQUENCE,
      true,
      []
    );
    if (e.cA) {
      e.value.value.push(asn1$4.create(
        asn1$4.Class.UNIVERSAL,
        asn1$4.Type.BOOLEAN,
        false,
        String.fromCharCode(255)
      ));
    }
    if ("pathLenConstraint" in e) {
      e.value.value.push(asn1$4.create(
        asn1$4.Class.UNIVERSAL,
        asn1$4.Type.INTEGER,
        false,
        asn1$4.integerToDer(e.pathLenConstraint).getBytes()
      ));
    }
  } else if (e.name === "extKeyUsage") {
    e.value = asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.SEQUENCE,
      true,
      []
    );
    var seq = e.value.value;
    for (var key in e) {
      if (e[key] !== true) {
        continue;
      }
      if (key in oids) {
        seq.push(asn1$4.create(
          asn1$4.Class.UNIVERSAL,
          asn1$4.Type.OID,
          false,
          asn1$4.oidToDer(oids[key]).getBytes()
        ));
      } else if (key.indexOf(".") !== -1) {
        seq.push(asn1$4.create(
          asn1$4.Class.UNIVERSAL,
          asn1$4.Type.OID,
          false,
          asn1$4.oidToDer(key).getBytes()
        ));
      }
    }
  } else if (e.name === "nsCertType") {
    var unused = 0;
    var b2 = 0;
    if (e.client) {
      b2 |= 128;
      unused = 7;
    }
    if (e.server) {
      b2 |= 64;
      unused = 6;
    }
    if (e.email) {
      b2 |= 32;
      unused = 5;
    }
    if (e.objsign) {
      b2 |= 16;
      unused = 4;
    }
    if (e.reserved) {
      b2 |= 8;
      unused = 3;
    }
    if (e.sslCA) {
      b2 |= 4;
      unused = 2;
    }
    if (e.emailCA) {
      b2 |= 2;
      unused = 1;
    }
    if (e.objCA) {
      b2 |= 1;
      unused = 0;
    }
    var value = String.fromCharCode(unused);
    if (b2 !== 0) {
      value += String.fromCharCode(b2);
    }
    e.value = asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.BITSTRING,
      false,
      value
    );
  } else if (e.name === "subjectAltName" || e.name === "issuerAltName") {
    e.value = asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, []);
    var altName;
    for (var n = 0; n < e.altNames.length; ++n) {
      altName = e.altNames[n];
      var value = altName.value;
      if (altName.type === 7 && altName.ip) {
        value = forge$b.util.bytesFromIP(altName.ip);
        if (value === null) {
          var error = new Error(
            'Extension "ip" value is not a valid IPv4 or IPv6 address.'
          );
          error.extension = e;
          throw error;
        }
      } else if (altName.type === 8) {
        if (altName.oid) {
          value = asn1$4.oidToDer(asn1$4.oidToDer(altName.oid));
        } else {
          value = asn1$4.oidToDer(value);
        }
      }
      e.value.value.push(asn1$4.create(
        asn1$4.Class.CONTEXT_SPECIFIC,
        altName.type,
        false,
        value
      ));
    }
  } else if (e.name === "nsComment" && options.cert) {
    if (!/^[\x00-\x7F]*$/.test(e.comment) || e.comment.length < 1 || e.comment.length > 128) {
      throw new Error('Invalid "nsComment" content.');
    }
    e.value = asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.IA5STRING,
      false,
      e.comment
    );
  } else if (e.name === "subjectKeyIdentifier" && options.cert) {
    var ski = options.cert.generateSubjectKeyIdentifier();
    e.subjectKeyIdentifier = ski.toHex();
    e.value = asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.OCTETSTRING,
      false,
      ski.getBytes()
    );
  } else if (e.name === "authorityKeyIdentifier" && options.cert) {
    e.value = asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, []);
    var seq = e.value.value;
    if (e.keyIdentifier) {
      var keyIdentifier = e.keyIdentifier === true ? options.cert.generateSubjectKeyIdentifier().getBytes() : e.keyIdentifier;
      seq.push(
        asn1$4.create(asn1$4.Class.CONTEXT_SPECIFIC, 0, false, keyIdentifier)
      );
    }
    if (e.authorityCertIssuer) {
      var authorityCertIssuer = [
        asn1$4.create(asn1$4.Class.CONTEXT_SPECIFIC, 4, true, [
          _dnToAsn1(e.authorityCertIssuer === true ? options.cert.issuer : e.authorityCertIssuer)
        ])
      ];
      seq.push(
        asn1$4.create(asn1$4.Class.CONTEXT_SPECIFIC, 1, true, authorityCertIssuer)
      );
    }
    if (e.serialNumber) {
      var serialNumber = forge$b.util.hexToBytes(e.serialNumber === true ? options.cert.serialNumber : e.serialNumber);
      seq.push(
        asn1$4.create(asn1$4.Class.CONTEXT_SPECIFIC, 2, false, serialNumber)
      );
    }
  } else if (e.name === "cRLDistributionPoints") {
    e.value = asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, []);
    var seq = e.value.value;
    var subSeq = asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.SEQUENCE,
      true,
      []
    );
    var fullNameGeneralNames = asn1$4.create(
      asn1$4.Class.CONTEXT_SPECIFIC,
      0,
      true,
      []
    );
    var altName;
    for (var n = 0; n < e.altNames.length; ++n) {
      altName = e.altNames[n];
      var value = altName.value;
      if (altName.type === 7 && altName.ip) {
        value = forge$b.util.bytesFromIP(altName.ip);
        if (value === null) {
          var error = new Error(
            'Extension "ip" value is not a valid IPv4 or IPv6 address.'
          );
          error.extension = e;
          throw error;
        }
      } else if (altName.type === 8) {
        if (altName.oid) {
          value = asn1$4.oidToDer(asn1$4.oidToDer(altName.oid));
        } else {
          value = asn1$4.oidToDer(value);
        }
      }
      fullNameGeneralNames.value.push(asn1$4.create(
        asn1$4.Class.CONTEXT_SPECIFIC,
        altName.type,
        false,
        value
      ));
    }
    subSeq.value.push(asn1$4.create(
      asn1$4.Class.CONTEXT_SPECIFIC,
      0,
      true,
      [fullNameGeneralNames]
    ));
    seq.push(subSeq);
  }
  if (typeof e.value === "undefined") {
    var error = new Error("Extension value not specified.");
    error.extension = e;
    throw error;
  }
  return e;
}
function _signatureParametersToAsn1(oid, params) {
  switch (oid) {
    case oids["RSASSA-PSS"]:
      var parts = [];
      if (params.hash.algorithmOid !== void 0) {
        parts.push(asn1$4.create(asn1$4.Class.CONTEXT_SPECIFIC, 0, true, [
          asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, [
            asn1$4.create(
              asn1$4.Class.UNIVERSAL,
              asn1$4.Type.OID,
              false,
              asn1$4.oidToDer(params.hash.algorithmOid).getBytes()
            ),
            asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.NULL, false, "")
          ])
        ]));
      }
      if (params.mgf.algorithmOid !== void 0) {
        parts.push(asn1$4.create(asn1$4.Class.CONTEXT_SPECIFIC, 1, true, [
          asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, [
            asn1$4.create(
              asn1$4.Class.UNIVERSAL,
              asn1$4.Type.OID,
              false,
              asn1$4.oidToDer(params.mgf.algorithmOid).getBytes()
            ),
            asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, [
              asn1$4.create(
                asn1$4.Class.UNIVERSAL,
                asn1$4.Type.OID,
                false,
                asn1$4.oidToDer(params.mgf.hash.algorithmOid).getBytes()
              ),
              asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.NULL, false, "")
            ])
          ])
        ]));
      }
      if (params.saltLength !== void 0) {
        parts.push(asn1$4.create(asn1$4.Class.CONTEXT_SPECIFIC, 2, true, [
          asn1$4.create(
            asn1$4.Class.UNIVERSAL,
            asn1$4.Type.INTEGER,
            false,
            asn1$4.integerToDer(params.saltLength).getBytes()
          )
        ]));
      }
      return asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, parts);
    default:
      return asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.NULL, false, "");
  }
}
function _CRIAttributesToAsn1(csr) {
  var rval = asn1$4.create(asn1$4.Class.CONTEXT_SPECIFIC, 0, true, []);
  if (csr.attributes.length === 0) {
    return rval;
  }
  var attrs = csr.attributes;
  for (var i = 0; i < attrs.length; ++i) {
    var attr = attrs[i];
    var value = attr.value;
    var valueTagClass = asn1$4.Type.UTF8;
    if ("valueTagClass" in attr) {
      valueTagClass = attr.valueTagClass;
    }
    if (valueTagClass === asn1$4.Type.UTF8) {
      value = forge$b.util.encodeUtf8(value);
    }
    var valueConstructed = false;
    if ("valueConstructed" in attr) {
      valueConstructed = attr.valueConstructed;
    }
    var seq = asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, [
      // AttributeType
      asn1$4.create(
        asn1$4.Class.UNIVERSAL,
        asn1$4.Type.OID,
        false,
        asn1$4.oidToDer(attr.type).getBytes()
      ),
      asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SET, true, [
        // AttributeValue
        asn1$4.create(
          asn1$4.Class.UNIVERSAL,
          valueTagClass,
          valueConstructed,
          value
        )
      ])
    ]);
    rval.value.push(seq);
  }
  return rval;
}
var jan_1_1950 = /* @__PURE__ */ new Date("1950-01-01T00:00:00Z");
var jan_1_2050 = /* @__PURE__ */ new Date("2050-01-01T00:00:00Z");
function _dateToAsn1(date) {
  if (date >= jan_1_1950 && date < jan_1_2050) {
    return asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.UTCTIME,
      false,
      asn1$4.dateToUtcTime(date)
    );
  } else {
    return asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.GENERALIZEDTIME,
      false,
      asn1$4.dateToGeneralizedTime(date)
    );
  }
}
pki$2.getTBSCertificate = function(cert) {
  var notBefore = _dateToAsn1(cert.validity.notBefore);
  var notAfter = _dateToAsn1(cert.validity.notAfter);
  var tbs = asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, [
    // version
    asn1$4.create(asn1$4.Class.CONTEXT_SPECIFIC, 0, true, [
      // integer
      asn1$4.create(
        asn1$4.Class.UNIVERSAL,
        asn1$4.Type.INTEGER,
        false,
        asn1$4.integerToDer(cert.version).getBytes()
      )
    ]),
    // serialNumber
    asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.INTEGER,
      false,
      forge$b.util.hexToBytes(cert.serialNumber)
    ),
    // signature
    asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, [
      // algorithm
      asn1$4.create(
        asn1$4.Class.UNIVERSAL,
        asn1$4.Type.OID,
        false,
        asn1$4.oidToDer(cert.siginfo.algorithmOid).getBytes()
      ),
      // parameters
      _signatureParametersToAsn1(
        cert.siginfo.algorithmOid,
        cert.siginfo.parameters
      )
    ]),
    // issuer
    _dnToAsn1(cert.issuer),
    // validity
    asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, [
      notBefore,
      notAfter
    ]),
    // subject
    _dnToAsn1(cert.subject),
    // SubjectPublicKeyInfo
    pki$2.publicKeyToAsn1(cert.publicKey)
  ]);
  if (cert.issuer.uniqueId) {
    tbs.value.push(
      asn1$4.create(asn1$4.Class.CONTEXT_SPECIFIC, 1, true, [
        asn1$4.create(
          asn1$4.Class.UNIVERSAL,
          asn1$4.Type.BITSTRING,
          false,
          // TODO: support arbitrary bit length ids
          String.fromCharCode(0) + cert.issuer.uniqueId
        )
      ])
    );
  }
  if (cert.subject.uniqueId) {
    tbs.value.push(
      asn1$4.create(asn1$4.Class.CONTEXT_SPECIFIC, 2, true, [
        asn1$4.create(
          asn1$4.Class.UNIVERSAL,
          asn1$4.Type.BITSTRING,
          false,
          // TODO: support arbitrary bit length ids
          String.fromCharCode(0) + cert.subject.uniqueId
        )
      ])
    );
  }
  if (cert.extensions.length > 0) {
    tbs.value.push(pki$2.certificateExtensionsToAsn1(cert.extensions));
  }
  return tbs;
};
pki$2.getCertificationRequestInfo = function(csr) {
  var cri = asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, [
    // version
    asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.INTEGER,
      false,
      asn1$4.integerToDer(csr.version).getBytes()
    ),
    // subject
    _dnToAsn1(csr.subject),
    // SubjectPublicKeyInfo
    pki$2.publicKeyToAsn1(csr.publicKey),
    // attributes
    _CRIAttributesToAsn1(csr)
  ]);
  return cri;
};
pki$2.distinguishedNameToAsn1 = function(dn) {
  return _dnToAsn1(dn);
};
pki$2.certificateToAsn1 = function(cert) {
  var tbsCertificate = cert.tbsCertificate || pki$2.getTBSCertificate(cert);
  return asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, [
    // TBSCertificate
    tbsCertificate,
    // AlgorithmIdentifier (signature algorithm)
    asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, [
      // algorithm
      asn1$4.create(
        asn1$4.Class.UNIVERSAL,
        asn1$4.Type.OID,
        false,
        asn1$4.oidToDer(cert.signatureOid).getBytes()
      ),
      // parameters
      _signatureParametersToAsn1(cert.signatureOid, cert.signatureParameters)
    ]),
    // SignatureValue
    asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.BITSTRING,
      false,
      String.fromCharCode(0) + cert.signature
    )
  ]);
};
pki$2.certificateExtensionsToAsn1 = function(exts) {
  var rval = asn1$4.create(asn1$4.Class.CONTEXT_SPECIFIC, 3, true, []);
  var seq = asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, []);
  rval.value.push(seq);
  for (var i = 0; i < exts.length; ++i) {
    seq.value.push(pki$2.certificateExtensionToAsn1(exts[i]));
  }
  return rval;
};
pki$2.certificateExtensionToAsn1 = function(ext) {
  var extseq = asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, []);
  extseq.value.push(asn1$4.create(
    asn1$4.Class.UNIVERSAL,
    asn1$4.Type.OID,
    false,
    asn1$4.oidToDer(ext.id).getBytes()
  ));
  if (ext.critical) {
    extseq.value.push(asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.BOOLEAN,
      false,
      String.fromCharCode(255)
    ));
  }
  var value = ext.value;
  if (typeof ext.value !== "string") {
    value = asn1$4.toDer(value).getBytes();
  }
  extseq.value.push(asn1$4.create(
    asn1$4.Class.UNIVERSAL,
    asn1$4.Type.OCTETSTRING,
    false,
    value
  ));
  return extseq;
};
pki$2.certificationRequestToAsn1 = function(csr) {
  var cri = csr.certificationRequestInfo || pki$2.getCertificationRequestInfo(csr);
  return asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, [
    // CertificationRequestInfo
    cri,
    // AlgorithmIdentifier (signature algorithm)
    asn1$4.create(asn1$4.Class.UNIVERSAL, asn1$4.Type.SEQUENCE, true, [
      // algorithm
      asn1$4.create(
        asn1$4.Class.UNIVERSAL,
        asn1$4.Type.OID,
        false,
        asn1$4.oidToDer(csr.signatureOid).getBytes()
      ),
      // parameters
      _signatureParametersToAsn1(csr.signatureOid, csr.signatureParameters)
    ]),
    // signature
    asn1$4.create(
      asn1$4.Class.UNIVERSAL,
      asn1$4.Type.BITSTRING,
      false,
      String.fromCharCode(0) + csr.signature
    )
  ]);
};
pki$2.createCaStore = function(certs) {
  var caStore = {
    // stored certificates
    certs: {}
  };
  caStore.getIssuer = function(cert2) {
    var rval = getBySubject(cert2.issuer);
    return rval;
  };
  caStore.addCertificate = function(cert2) {
    if (typeof cert2 === "string") {
      cert2 = forge$b.pki.certificateFromPem(cert2);
    }
    ensureSubjectHasHash(cert2.subject);
    if (!caStore.hasCertificate(cert2)) {
      if (cert2.subject.hash in caStore.certs) {
        var tmp = caStore.certs[cert2.subject.hash];
        if (!forge$b.util.isArray(tmp)) {
          tmp = [tmp];
        }
        tmp.push(cert2);
        caStore.certs[cert2.subject.hash] = tmp;
      } else {
        caStore.certs[cert2.subject.hash] = cert2;
      }
    }
  };
  caStore.hasCertificate = function(cert2) {
    if (typeof cert2 === "string") {
      cert2 = forge$b.pki.certificateFromPem(cert2);
    }
    var match = getBySubject(cert2.subject);
    if (!match) {
      return false;
    }
    if (!forge$b.util.isArray(match)) {
      match = [match];
    }
    var der1 = asn1$4.toDer(pki$2.certificateToAsn1(cert2)).getBytes();
    for (var i2 = 0; i2 < match.length; ++i2) {
      var der2 = asn1$4.toDer(pki$2.certificateToAsn1(match[i2])).getBytes();
      if (der1 === der2) {
        return true;
      }
    }
    return false;
  };
  caStore.listAllCertificates = function() {
    var certList = [];
    for (var hash2 in caStore.certs) {
      if (caStore.certs.hasOwnProperty(hash2)) {
        var value = caStore.certs[hash2];
        if (!forge$b.util.isArray(value)) {
          certList.push(value);
        } else {
          for (var i2 = 0; i2 < value.length; ++i2) {
            certList.push(value[i2]);
          }
        }
      }
    }
    return certList;
  };
  caStore.removeCertificate = function(cert2) {
    var result;
    if (typeof cert2 === "string") {
      cert2 = forge$b.pki.certificateFromPem(cert2);
    }
    ensureSubjectHasHash(cert2.subject);
    if (!caStore.hasCertificate(cert2)) {
      return null;
    }
    var match = getBySubject(cert2.subject);
    if (!forge$b.util.isArray(match)) {
      result = caStore.certs[cert2.subject.hash];
      delete caStore.certs[cert2.subject.hash];
      return result;
    }
    var der1 = asn1$4.toDer(pki$2.certificateToAsn1(cert2)).getBytes();
    for (var i2 = 0; i2 < match.length; ++i2) {
      var der2 = asn1$4.toDer(pki$2.certificateToAsn1(match[i2])).getBytes();
      if (der1 === der2) {
        result = match[i2];
        match.splice(i2, 1);
      }
    }
    if (match.length === 0) {
      delete caStore.certs[cert2.subject.hash];
    }
    return result;
  };
  function getBySubject(subject) {
    ensureSubjectHasHash(subject);
    return caStore.certs[subject.hash] || null;
  }
  function ensureSubjectHasHash(subject) {
    if (!subject.hash) {
      var md = forge$b.md.sha1.create();
      subject.attributes = pki$2.RDNAttributesAsArray(_dnToAsn1(subject), md);
      subject.hash = md.digest().toHex();
    }
  }
  if (certs) {
    for (var i = 0; i < certs.length; ++i) {
      var cert = certs[i];
      caStore.addCertificate(cert);
    }
  }
  return caStore;
};
pki$2.certificateError = {
  bad_certificate: "forge.pki.BadCertificate",
  unsupported_certificate: "forge.pki.UnsupportedCertificate",
  certificate_revoked: "forge.pki.CertificateRevoked",
  certificate_expired: "forge.pki.CertificateExpired",
  certificate_unknown: "forge.pki.CertificateUnknown",
  unknown_ca: "forge.pki.UnknownCertificateAuthority"
};
pki$2.verifyCertificateChain = function(caStore, chain, options) {
  if (typeof options === "function") {
    options = { verify: options };
  }
  options = options || {};
  chain = chain.slice(0);
  var certs = chain.slice(0);
  var validityCheckDate = options.validityCheckDate;
  if (typeof validityCheckDate === "undefined") {
    validityCheckDate = /* @__PURE__ */ new Date();
  }
  var first = true;
  var error = null;
  var depth = 0;
  do {
    var cert = chain.shift();
    var parent = null;
    var selfSigned = false;
    if (validityCheckDate) {
      if (validityCheckDate < cert.validity.notBefore || validityCheckDate > cert.validity.notAfter) {
        error = {
          message: "Certificate is not valid yet or has expired.",
          error: pki$2.certificateError.certificate_expired,
          notBefore: cert.validity.notBefore,
          notAfter: cert.validity.notAfter,
          // TODO: we might want to reconsider renaming 'now' to
          // 'validityCheckDate' should this API be changed in the future.
          now: validityCheckDate
        };
      }
    }
    if (error === null) {
      parent = chain[0] || caStore.getIssuer(cert);
      if (parent === null) {
        if (cert.isIssuer(cert)) {
          selfSigned = true;
          parent = cert;
        }
      }
      if (parent) {
        var parents = parent;
        if (!forge$b.util.isArray(parents)) {
          parents = [parents];
        }
        var verified = false;
        while (!verified && parents.length > 0) {
          parent = parents.shift();
          try {
            verified = parent.verify(cert);
          } catch (ex) {
          }
        }
        if (!verified) {
          error = {
            message: "Certificate signature is invalid.",
            error: pki$2.certificateError.bad_certificate
          };
        }
      }
      if (error === null && (!parent || selfSigned) && !caStore.hasCertificate(cert)) {
        error = {
          message: "Certificate is not trusted.",
          error: pki$2.certificateError.unknown_ca
        };
      }
    }
    if (error === null && parent && !cert.isIssuer(parent)) {
      error = {
        message: "Certificate issuer is invalid.",
        error: pki$2.certificateError.bad_certificate
      };
    }
    if (error === null) {
      var se = {
        keyUsage: true,
        basicConstraints: true
      };
      for (var i = 0; error === null && i < cert.extensions.length; ++i) {
        var ext = cert.extensions[i];
        if (ext.critical && !(ext.name in se)) {
          error = {
            message: "Certificate has an unsupported critical extension.",
            error: pki$2.certificateError.unsupported_certificate
          };
        }
      }
    }
    if (error === null && (!first || chain.length === 0 && (!parent || selfSigned))) {
      var bcExt = cert.getExtension("basicConstraints");
      var keyUsageExt = cert.getExtension("keyUsage");
      if (keyUsageExt !== null) {
        if (!keyUsageExt.keyCertSign || bcExt === null) {
          error = {
            message: "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
            error: pki$2.certificateError.bad_certificate
          };
        }
      }
      if (error === null && bcExt !== null && !bcExt.cA) {
        error = {
          message: "Certificate basicConstraints indicates the certificate is not a CA.",
          error: pki$2.certificateError.bad_certificate
        };
      }
      if (error === null && keyUsageExt !== null && "pathLenConstraint" in bcExt) {
        var pathLen = depth - 1;
        if (pathLen > bcExt.pathLenConstraint) {
          error = {
            message: "Certificate basicConstraints pathLenConstraint violated.",
            error: pki$2.certificateError.bad_certificate
          };
        }
      }
    }
    var vfd = error === null ? true : error.error;
    var ret = options.verify ? options.verify(vfd, depth, certs) : vfd;
    if (ret === true) {
      error = null;
    } else {
      if (vfd === true) {
        error = {
          message: "The application rejected the certificate.",
          error: pki$2.certificateError.bad_certificate
        };
      }
      if (ret || ret === 0) {
        if (typeof ret === "object" && !forge$b.util.isArray(ret)) {
          if (ret.message) {
            error.message = ret.message;
          }
          if (ret.error) {
            error.error = ret.error;
          }
        } else if (typeof ret === "string") {
          error.error = ret;
        }
      }
      throw error;
    }
    first = false;
    ++depth;
  } while (chain.length > 0);
  return true;
};
var forge$a = forge$C;
var asn1$3 = forge$a.asn1;
var pki$1 = forge$a.pki;
var p12 = forge$a.pkcs12 = forge$a.pkcs12 || {};
var contentInfoValidator = {
  name: "ContentInfo",
  tagClass: asn1$3.Class.UNIVERSAL,
  type: asn1$3.Type.SEQUENCE,
  // a ContentInfo
  constructed: true,
  value: [{
    name: "ContentInfo.contentType",
    tagClass: asn1$3.Class.UNIVERSAL,
    type: asn1$3.Type.OID,
    constructed: false,
    capture: "contentType"
  }, {
    name: "ContentInfo.content",
    tagClass: asn1$3.Class.CONTEXT_SPECIFIC,
    constructed: true,
    captureAsn1: "content"
  }]
};
var pfxValidator = {
  name: "PFX",
  tagClass: asn1$3.Class.UNIVERSAL,
  type: asn1$3.Type.SEQUENCE,
  constructed: true,
  value: [
    {
      name: "PFX.version",
      tagClass: asn1$3.Class.UNIVERSAL,
      type: asn1$3.Type.INTEGER,
      constructed: false,
      capture: "version"
    },
    contentInfoValidator,
    {
      name: "PFX.macData",
      tagClass: asn1$3.Class.UNIVERSAL,
      type: asn1$3.Type.SEQUENCE,
      constructed: true,
      optional: true,
      captureAsn1: "mac",
      value: [{
        name: "PFX.macData.mac",
        tagClass: asn1$3.Class.UNIVERSAL,
        type: asn1$3.Type.SEQUENCE,
        // DigestInfo
        constructed: true,
        value: [{
          name: "PFX.macData.mac.digestAlgorithm",
          tagClass: asn1$3.Class.UNIVERSAL,
          type: asn1$3.Type.SEQUENCE,
          // DigestAlgorithmIdentifier
          constructed: true,
          value: [{
            name: "PFX.macData.mac.digestAlgorithm.algorithm",
            tagClass: asn1$3.Class.UNIVERSAL,
            type: asn1$3.Type.OID,
            constructed: false,
            capture: "macAlgorithm"
          }, {
            name: "PFX.macData.mac.digestAlgorithm.parameters",
            tagClass: asn1$3.Class.UNIVERSAL,
            captureAsn1: "macAlgorithmParameters"
          }]
        }, {
          name: "PFX.macData.mac.digest",
          tagClass: asn1$3.Class.UNIVERSAL,
          type: asn1$3.Type.OCTETSTRING,
          constructed: false,
          capture: "macDigest"
        }]
      }, {
        name: "PFX.macData.macSalt",
        tagClass: asn1$3.Class.UNIVERSAL,
        type: asn1$3.Type.OCTETSTRING,
        constructed: false,
        capture: "macSalt"
      }, {
        name: "PFX.macData.iterations",
        tagClass: asn1$3.Class.UNIVERSAL,
        type: asn1$3.Type.INTEGER,
        constructed: false,
        optional: true,
        capture: "macIterations"
      }]
    }
  ]
};
var safeBagValidator = {
  name: "SafeBag",
  tagClass: asn1$3.Class.UNIVERSAL,
  type: asn1$3.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "SafeBag.bagId",
    tagClass: asn1$3.Class.UNIVERSAL,
    type: asn1$3.Type.OID,
    constructed: false,
    capture: "bagId"
  }, {
    name: "SafeBag.bagValue",
    tagClass: asn1$3.Class.CONTEXT_SPECIFIC,
    constructed: true,
    captureAsn1: "bagValue"
  }, {
    name: "SafeBag.bagAttributes",
    tagClass: asn1$3.Class.UNIVERSAL,
    type: asn1$3.Type.SET,
    constructed: true,
    optional: true,
    capture: "bagAttributes"
  }]
};
var attributeValidator = {
  name: "Attribute",
  tagClass: asn1$3.Class.UNIVERSAL,
  type: asn1$3.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "Attribute.attrId",
    tagClass: asn1$3.Class.UNIVERSAL,
    type: asn1$3.Type.OID,
    constructed: false,
    capture: "oid"
  }, {
    name: "Attribute.attrValues",
    tagClass: asn1$3.Class.UNIVERSAL,
    type: asn1$3.Type.SET,
    constructed: true,
    capture: "values"
  }]
};
var certBagValidator = {
  name: "CertBag",
  tagClass: asn1$3.Class.UNIVERSAL,
  type: asn1$3.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "CertBag.certId",
    tagClass: asn1$3.Class.UNIVERSAL,
    type: asn1$3.Type.OID,
    constructed: false,
    capture: "certId"
  }, {
    name: "CertBag.certValue",
    tagClass: asn1$3.Class.CONTEXT_SPECIFIC,
    constructed: true,
    /* So far we only support X.509 certificates (which are wrapped in
       an OCTET STRING, hence hard code that here). */
    value: [{
      name: "CertBag.certValue[0]",
      tagClass: asn1$3.Class.UNIVERSAL,
      type: asn1$3.Class.OCTETSTRING,
      constructed: false,
      capture: "cert"
    }]
  }]
};
function _getBagsByAttribute(safeContents, attrName, attrValue, bagType) {
  var result = [];
  for (var i = 0; i < safeContents.length; i++) {
    for (var j = 0; j < safeContents[i].safeBags.length; j++) {
      var bag = safeContents[i].safeBags[j];
      if (bagType !== void 0 && bag.type !== bagType) {
        continue;
      }
      if (attrName === null) {
        result.push(bag);
        continue;
      }
      if (bag.attributes[attrName] !== void 0 && bag.attributes[attrName].indexOf(attrValue) >= 0) {
        result.push(bag);
      }
    }
  }
  return result;
}
p12.pkcs12FromAsn1 = function(obj, strict, password) {
  if (typeof strict === "string") {
    password = strict;
    strict = true;
  } else if (strict === void 0) {
    strict = true;
  }
  var capture = {};
  var errors = [];
  if (!asn1$3.validate(obj, pfxValidator, capture, errors)) {
    var error = new Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.");
    error.errors = error;
    throw error;
  }
  var pfx = {
    version: capture.version.charCodeAt(0),
    safeContents: [],
    /**
     * Gets bags with matching attributes.
     *
     * @param filter the attributes to filter by:
     *          [localKeyId] the localKeyId to search for.
     *          [localKeyIdHex] the localKeyId in hex to search for.
     *          [friendlyName] the friendly name to search for.
     *          [bagType] bag type to narrow each attribute search by.
     *
     * @return a map of attribute type to an array of matching bags or, if no
     *           attribute was given but a bag type, the map key will be the
     *           bag type.
     */
    getBags: function(filter) {
      var rval = {};
      var localKeyId;
      if ("localKeyId" in filter) {
        localKeyId = filter.localKeyId;
      } else if ("localKeyIdHex" in filter) {
        localKeyId = forge$a.util.hexToBytes(filter.localKeyIdHex);
      }
      if (localKeyId === void 0 && !("friendlyName" in filter) && "bagType" in filter) {
        rval[filter.bagType] = _getBagsByAttribute(
          pfx.safeContents,
          null,
          null,
          filter.bagType
        );
      }
      if (localKeyId !== void 0) {
        rval.localKeyId = _getBagsByAttribute(
          pfx.safeContents,
          "localKeyId",
          localKeyId,
          filter.bagType
        );
      }
      if ("friendlyName" in filter) {
        rval.friendlyName = _getBagsByAttribute(
          pfx.safeContents,
          "friendlyName",
          filter.friendlyName,
          filter.bagType
        );
      }
      return rval;
    },
    /**
     * DEPRECATED: use getBags() instead.
     *
     * Get bags with matching friendlyName attribute.
     *
     * @param friendlyName the friendly name to search for.
     * @param [bagType] bag type to narrow search by.
     *
     * @return an array of bags with matching friendlyName attribute.
     */
    getBagsByFriendlyName: function(friendlyName, bagType) {
      return _getBagsByAttribute(
        pfx.safeContents,
        "friendlyName",
        friendlyName,
        bagType
      );
    },
    /**
     * DEPRECATED: use getBags() instead.
     *
     * Get bags with matching localKeyId attribute.
     *
     * @param localKeyId the localKeyId to search for.
     * @param [bagType] bag type to narrow search by.
     *
     * @return an array of bags with matching localKeyId attribute.
     */
    getBagsByLocalKeyId: function(localKeyId, bagType) {
      return _getBagsByAttribute(
        pfx.safeContents,
        "localKeyId",
        localKeyId,
        bagType
      );
    }
  };
  if (capture.version.charCodeAt(0) !== 3) {
    var error = new Error("PKCS#12 PFX of version other than 3 not supported.");
    error.version = capture.version.charCodeAt(0);
    throw error;
  }
  if (asn1$3.derToOid(capture.contentType) !== pki$1.oids.data) {
    var error = new Error("Only PKCS#12 PFX in password integrity mode supported.");
    error.oid = asn1$3.derToOid(capture.contentType);
    throw error;
  }
  var data = capture.content.value[0];
  if (data.tagClass !== asn1$3.Class.UNIVERSAL || data.type !== asn1$3.Type.OCTETSTRING) {
    throw new Error("PKCS#12 authSafe content data is not an OCTET STRING.");
  }
  data = _decodePkcs7Data(data);
  if (capture.mac) {
    var md = null;
    var macKeyBytes = 0;
    var macAlgorithm = asn1$3.derToOid(capture.macAlgorithm);
    switch (macAlgorithm) {
      case pki$1.oids.sha1:
        md = forge$a.md.sha1.create();
        macKeyBytes = 20;
        break;
      case pki$1.oids.sha256:
        md = forge$a.md.sha256.create();
        macKeyBytes = 32;
        break;
      case pki$1.oids.sha384:
        md = forge$a.md.sha384.create();
        macKeyBytes = 48;
        break;
      case pki$1.oids.sha512:
        md = forge$a.md.sha512.create();
        macKeyBytes = 64;
        break;
      case pki$1.oids.md5:
        md = forge$a.md.md5.create();
        macKeyBytes = 16;
        break;
    }
    if (md === null) {
      throw new Error("PKCS#12 uses unsupported MAC algorithm: " + macAlgorithm);
    }
    var macSalt = new forge$a.util.ByteBuffer(capture.macSalt);
    var macIterations = "macIterations" in capture ? parseInt(forge$a.util.bytesToHex(capture.macIterations), 16) : 1;
    var macKey = p12.generateKey(
      password,
      macSalt,
      3,
      macIterations,
      macKeyBytes,
      md
    );
    var mac = forge$a.hmac.create();
    mac.start(md, macKey);
    mac.update(data.value);
    var macValue = mac.getMac();
    if (macValue.getBytes() !== capture.macDigest) {
      throw new Error("PKCS#12 MAC could not be verified. Invalid password?");
    }
  }
  _decodeAuthenticatedSafe(pfx, data.value, strict, password);
  return pfx;
};
function _decodePkcs7Data(data) {
  if (data.composed || data.constructed) {
    var value = forge$a.util.createBuffer();
    for (var i = 0; i < data.value.length; ++i) {
      value.putBytes(data.value[i].value);
    }
    data.composed = data.constructed = false;
    data.value = value.getBytes();
  }
  return data;
}
function _decodeAuthenticatedSafe(pfx, authSafe, strict, password) {
  authSafe = asn1$3.fromDer(authSafe, strict);
  if (authSafe.tagClass !== asn1$3.Class.UNIVERSAL || authSafe.type !== asn1$3.Type.SEQUENCE || authSafe.constructed !== true) {
    throw new Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");
  }
  for (var i = 0; i < authSafe.value.length; i++) {
    var contentInfo = authSafe.value[i];
    var capture = {};
    var errors = [];
    if (!asn1$3.validate(contentInfo, contentInfoValidator, capture, errors)) {
      var error = new Error("Cannot read ContentInfo.");
      error.errors = errors;
      throw error;
    }
    var obj = {
      encrypted: false
    };
    var safeContents = null;
    var data = capture.content.value[0];
    switch (asn1$3.derToOid(capture.contentType)) {
      case pki$1.oids.data:
        if (data.tagClass !== asn1$3.Class.UNIVERSAL || data.type !== asn1$3.Type.OCTETSTRING) {
          throw new Error("PKCS#12 SafeContents Data is not an OCTET STRING.");
        }
        safeContents = _decodePkcs7Data(data).value;
        break;
      case pki$1.oids.encryptedData:
        safeContents = _decryptSafeContents(data, password);
        obj.encrypted = true;
        break;
      default:
        var error = new Error("Unsupported PKCS#12 contentType.");
        error.contentType = asn1$3.derToOid(capture.contentType);
        throw error;
    }
    obj.safeBags = _decodeSafeContents(safeContents, strict, password);
    pfx.safeContents.push(obj);
  }
}
function _decryptSafeContents(data, password) {
  var capture = {};
  var errors = [];
  if (!asn1$3.validate(
    data,
    forge$a.pkcs7.asn1.encryptedDataValidator,
    capture,
    errors
  )) {
    var error = new Error("Cannot read EncryptedContentInfo.");
    error.errors = errors;
    throw error;
  }
  var oid = asn1$3.derToOid(capture.contentType);
  if (oid !== pki$1.oids.data) {
    var error = new Error(
      "PKCS#12 EncryptedContentInfo ContentType is not Data."
    );
    error.oid = oid;
    throw error;
  }
  oid = asn1$3.derToOid(capture.encAlgorithm);
  var cipher = pki$1.pbe.getCipher(oid, capture.encParameter, password);
  var encryptedContentAsn1 = _decodePkcs7Data(capture.encryptedContentAsn1);
  var encrypted = forge$a.util.createBuffer(encryptedContentAsn1.value);
  cipher.update(encrypted);
  if (!cipher.finish()) {
    throw new Error("Failed to decrypt PKCS#12 SafeContents.");
  }
  return cipher.output.getBytes();
}
function _decodeSafeContents(safeContents, strict, password) {
  if (!strict && safeContents.length === 0) {
    return [];
  }
  safeContents = asn1$3.fromDer(safeContents, strict);
  if (safeContents.tagClass !== asn1$3.Class.UNIVERSAL || safeContents.type !== asn1$3.Type.SEQUENCE || safeContents.constructed !== true) {
    throw new Error(
      "PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag."
    );
  }
  var res = [];
  for (var i = 0; i < safeContents.value.length; i++) {
    var safeBag = safeContents.value[i];
    var capture = {};
    var errors = [];
    if (!asn1$3.validate(safeBag, safeBagValidator, capture, errors)) {
      var error = new Error("Cannot read SafeBag.");
      error.errors = errors;
      throw error;
    }
    var bag = {
      type: asn1$3.derToOid(capture.bagId),
      attributes: _decodeBagAttributes(capture.bagAttributes)
    };
    res.push(bag);
    var validator, decoder;
    var bagAsn1 = capture.bagValue.value[0];
    switch (bag.type) {
      case pki$1.oids.pkcs8ShroudedKeyBag:
        bagAsn1 = pki$1.decryptPrivateKeyInfo(bagAsn1, password);
        if (bagAsn1 === null) {
          throw new Error(
            "Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?"
          );
        }
      case pki$1.oids.keyBag:
        try {
          bag.key = pki$1.privateKeyFromAsn1(bagAsn1);
        } catch (e) {
          bag.key = null;
          bag.asn1 = bagAsn1;
        }
        continue;
      case pki$1.oids.certBag:
        validator = certBagValidator;
        decoder = function() {
          if (asn1$3.derToOid(capture.certId) !== pki$1.oids.x509Certificate) {
            var error2 = new Error(
              "Unsupported certificate type, only X.509 supported."
            );
            error2.oid = asn1$3.derToOid(capture.certId);
            throw error2;
          }
          var certAsn1 = asn1$3.fromDer(capture.cert, strict);
          try {
            bag.cert = pki$1.certificateFromAsn1(certAsn1, true);
          } catch (e) {
            bag.cert = null;
            bag.asn1 = certAsn1;
          }
        };
        break;
      default:
        var error = new Error("Unsupported PKCS#12 SafeBag type.");
        error.oid = bag.type;
        throw error;
    }
    if (validator !== void 0 && !asn1$3.validate(bagAsn1, validator, capture, errors)) {
      var error = new Error("Cannot read PKCS#12 " + validator.name);
      error.errors = errors;
      throw error;
    }
    decoder();
  }
  return res;
}
function _decodeBagAttributes(attributes) {
  var decodedAttrs = {};
  if (attributes !== void 0) {
    for (var i = 0; i < attributes.length; ++i) {
      var capture = {};
      var errors = [];
      if (!asn1$3.validate(attributes[i], attributeValidator, capture, errors)) {
        var error = new Error("Cannot read PKCS#12 BagAttribute.");
        error.errors = errors;
        throw error;
      }
      var oid = asn1$3.derToOid(capture.oid);
      if (pki$1.oids[oid] === void 0) {
        continue;
      }
      decodedAttrs[pki$1.oids[oid]] = [];
      for (var j = 0; j < capture.values.length; ++j) {
        decodedAttrs[pki$1.oids[oid]].push(capture.values[j].value);
      }
    }
  }
  return decodedAttrs;
}
p12.toPkcs12Asn1 = function(key, cert, password, options) {
  options = options || {};
  options.saltSize = options.saltSize || 8;
  options.count = options.count || 2048;
  options.algorithm = options.algorithm || options.encAlgorithm || "aes128";
  if (!("useMac" in options)) {
    options.useMac = true;
  }
  if (!("localKeyId" in options)) {
    options.localKeyId = null;
  }
  if (!("generateLocalKeyId" in options)) {
    options.generateLocalKeyId = true;
  }
  var localKeyId = options.localKeyId;
  var bagAttrs;
  if (localKeyId !== null) {
    localKeyId = forge$a.util.hexToBytes(localKeyId);
  } else if (options.generateLocalKeyId) {
    if (cert) {
      var pairedCert = forge$a.util.isArray(cert) ? cert[0] : cert;
      if (typeof pairedCert === "string") {
        pairedCert = pki$1.certificateFromPem(pairedCert);
      }
      var sha12 = forge$a.md.sha1.create();
      sha12.update(asn1$3.toDer(pki$1.certificateToAsn1(pairedCert)).getBytes());
      localKeyId = sha12.digest().getBytes();
    } else {
      localKeyId = forge$a.random.getBytes(20);
    }
  }
  var attrs = [];
  if (localKeyId !== null) {
    attrs.push(
      // localKeyID
      asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [
        // attrId
        asn1$3.create(
          asn1$3.Class.UNIVERSAL,
          asn1$3.Type.OID,
          false,
          asn1$3.oidToDer(pki$1.oids.localKeyId).getBytes()
        ),
        // attrValues
        asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SET, true, [
          asn1$3.create(
            asn1$3.Class.UNIVERSAL,
            asn1$3.Type.OCTETSTRING,
            false,
            localKeyId
          )
        ])
      ])
    );
  }
  if ("friendlyName" in options) {
    attrs.push(
      // friendlyName
      asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [
        // attrId
        asn1$3.create(
          asn1$3.Class.UNIVERSAL,
          asn1$3.Type.OID,
          false,
          asn1$3.oidToDer(pki$1.oids.friendlyName).getBytes()
        ),
        // attrValues
        asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SET, true, [
          asn1$3.create(
            asn1$3.Class.UNIVERSAL,
            asn1$3.Type.BMPSTRING,
            false,
            options.friendlyName
          )
        ])
      ])
    );
  }
  if (attrs.length > 0) {
    bagAttrs = asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SET, true, attrs);
  }
  var contents = [];
  var chain = [];
  if (cert !== null) {
    if (forge$a.util.isArray(cert)) {
      chain = cert;
    } else {
      chain = [cert];
    }
  }
  var certSafeBags = [];
  for (var i = 0; i < chain.length; ++i) {
    cert = chain[i];
    if (typeof cert === "string") {
      cert = pki$1.certificateFromPem(cert);
    }
    var certBagAttrs = i === 0 ? bagAttrs : void 0;
    var certAsn1 = pki$1.certificateToAsn1(cert);
    var certSafeBag = asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [
      // bagId
      asn1$3.create(
        asn1$3.Class.UNIVERSAL,
        asn1$3.Type.OID,
        false,
        asn1$3.oidToDer(pki$1.oids.certBag).getBytes()
      ),
      // bagValue
      asn1$3.create(asn1$3.Class.CONTEXT_SPECIFIC, 0, true, [
        // CertBag
        asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [
          // certId
          asn1$3.create(
            asn1$3.Class.UNIVERSAL,
            asn1$3.Type.OID,
            false,
            asn1$3.oidToDer(pki$1.oids.x509Certificate).getBytes()
          ),
          // certValue (x509Certificate)
          asn1$3.create(asn1$3.Class.CONTEXT_SPECIFIC, 0, true, [
            asn1$3.create(
              asn1$3.Class.UNIVERSAL,
              asn1$3.Type.OCTETSTRING,
              false,
              asn1$3.toDer(certAsn1).getBytes()
            )
          ])
        ])
      ]),
      // bagAttributes (OPTIONAL)
      certBagAttrs
    ]);
    certSafeBags.push(certSafeBag);
  }
  if (certSafeBags.length > 0) {
    var certSafeContents = asn1$3.create(
      asn1$3.Class.UNIVERSAL,
      asn1$3.Type.SEQUENCE,
      true,
      certSafeBags
    );
    var certCI = (
      // PKCS#7 ContentInfo
      asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [
        // contentType
        asn1$3.create(
          asn1$3.Class.UNIVERSAL,
          asn1$3.Type.OID,
          false,
          // OID for the content type is 'data'
          asn1$3.oidToDer(pki$1.oids.data).getBytes()
        ),
        // content
        asn1$3.create(asn1$3.Class.CONTEXT_SPECIFIC, 0, true, [
          asn1$3.create(
            asn1$3.Class.UNIVERSAL,
            asn1$3.Type.OCTETSTRING,
            false,
            asn1$3.toDer(certSafeContents).getBytes()
          )
        ])
      ])
    );
    contents.push(certCI);
  }
  var keyBag = null;
  if (key !== null) {
    var pkAsn1 = pki$1.wrapRsaPrivateKey(pki$1.privateKeyToAsn1(key));
    if (password === null) {
      keyBag = asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [
        // bagId
        asn1$3.create(
          asn1$3.Class.UNIVERSAL,
          asn1$3.Type.OID,
          false,
          asn1$3.oidToDer(pki$1.oids.keyBag).getBytes()
        ),
        // bagValue
        asn1$3.create(asn1$3.Class.CONTEXT_SPECIFIC, 0, true, [
          // PrivateKeyInfo
          pkAsn1
        ]),
        // bagAttributes (OPTIONAL)
        bagAttrs
      ]);
    } else {
      keyBag = asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [
        // bagId
        asn1$3.create(
          asn1$3.Class.UNIVERSAL,
          asn1$3.Type.OID,
          false,
          asn1$3.oidToDer(pki$1.oids.pkcs8ShroudedKeyBag).getBytes()
        ),
        // bagValue
        asn1$3.create(asn1$3.Class.CONTEXT_SPECIFIC, 0, true, [
          // EncryptedPrivateKeyInfo
          pki$1.encryptPrivateKeyInfo(pkAsn1, password, options)
        ]),
        // bagAttributes (OPTIONAL)
        bagAttrs
      ]);
    }
    var keySafeContents = asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [keyBag]);
    var keyCI = (
      // PKCS#7 ContentInfo
      asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [
        // contentType
        asn1$3.create(
          asn1$3.Class.UNIVERSAL,
          asn1$3.Type.OID,
          false,
          // OID for the content type is 'data'
          asn1$3.oidToDer(pki$1.oids.data).getBytes()
        ),
        // content
        asn1$3.create(asn1$3.Class.CONTEXT_SPECIFIC, 0, true, [
          asn1$3.create(
            asn1$3.Class.UNIVERSAL,
            asn1$3.Type.OCTETSTRING,
            false,
            asn1$3.toDer(keySafeContents).getBytes()
          )
        ])
      ])
    );
    contents.push(keyCI);
  }
  var safe = asn1$3.create(
    asn1$3.Class.UNIVERSAL,
    asn1$3.Type.SEQUENCE,
    true,
    contents
  );
  var macData;
  if (options.useMac) {
    var sha12 = forge$a.md.sha1.create();
    var macSalt = new forge$a.util.ByteBuffer(
      forge$a.random.getBytes(options.saltSize)
    );
    var count = options.count;
    var key = p12.generateKey(password, macSalt, 3, count, 20);
    var mac = forge$a.hmac.create();
    mac.start(sha12, key);
    mac.update(asn1$3.toDer(safe).getBytes());
    var macValue = mac.getMac();
    macData = asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [
      // mac DigestInfo
      asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [
        // digestAlgorithm
        asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [
          // algorithm = SHA-1
          asn1$3.create(
            asn1$3.Class.UNIVERSAL,
            asn1$3.Type.OID,
            false,
            asn1$3.oidToDer(pki$1.oids.sha1).getBytes()
          ),
          // parameters = Null
          asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.NULL, false, "")
        ]),
        // digest
        asn1$3.create(
          asn1$3.Class.UNIVERSAL,
          asn1$3.Type.OCTETSTRING,
          false,
          macValue.getBytes()
        )
      ]),
      // macSalt OCTET STRING
      asn1$3.create(
        asn1$3.Class.UNIVERSAL,
        asn1$3.Type.OCTETSTRING,
        false,
        macSalt.getBytes()
      ),
      // iterations INTEGER (XXX: Only support count < 65536)
      asn1$3.create(
        asn1$3.Class.UNIVERSAL,
        asn1$3.Type.INTEGER,
        false,
        asn1$3.integerToDer(count).getBytes()
      )
    ]);
  }
  return asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [
    // version (3)
    asn1$3.create(
      asn1$3.Class.UNIVERSAL,
      asn1$3.Type.INTEGER,
      false,
      asn1$3.integerToDer(3).getBytes()
    ),
    // PKCS#7 ContentInfo
    asn1$3.create(asn1$3.Class.UNIVERSAL, asn1$3.Type.SEQUENCE, true, [
      // contentType
      asn1$3.create(
        asn1$3.Class.UNIVERSAL,
        asn1$3.Type.OID,
        false,
        // OID for the content type is 'data'
        asn1$3.oidToDer(pki$1.oids.data).getBytes()
      ),
      // content
      asn1$3.create(asn1$3.Class.CONTEXT_SPECIFIC, 0, true, [
        asn1$3.create(
          asn1$3.Class.UNIVERSAL,
          asn1$3.Type.OCTETSTRING,
          false,
          asn1$3.toDer(safe).getBytes()
        )
      ])
    ]),
    macData
  ]);
};
p12.generateKey = forge$a.pbe.generatePkcs12Key;
var forge$9 = forge$C;
var asn1$2 = forge$9.asn1;
var pki = forge$9.pki = forge$9.pki || {};
pki.pemToDer = function(pem2) {
  var msg = forge$9.pem.decode(pem2)[0];
  if (msg.procType && msg.procType.type === "ENCRYPTED") {
    throw new Error("Could not convert PEM to DER; PEM is encrypted.");
  }
  return forge$9.util.createBuffer(msg.body);
};
pki.privateKeyFromPem = function(pem2) {
  var msg = forge$9.pem.decode(pem2)[0];
  if (msg.type !== "PRIVATE KEY" && msg.type !== "RSA PRIVATE KEY") {
    var error = new Error('Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');
    error.headerType = msg.type;
    throw error;
  }
  if (msg.procType && msg.procType.type === "ENCRYPTED") {
    throw new Error("Could not convert private key from PEM; PEM is encrypted.");
  }
  var obj = asn1$2.fromDer(msg.body);
  return pki.privateKeyFromAsn1(obj);
};
pki.privateKeyToPem = function(key, maxline) {
  var msg = {
    type: "RSA PRIVATE KEY",
    body: asn1$2.toDer(pki.privateKeyToAsn1(key)).getBytes()
  };
  return forge$9.pem.encode(msg, { maxline });
};
pki.privateKeyInfoToPem = function(pki2, maxline) {
  var msg = {
    type: "PRIVATE KEY",
    body: asn1$2.toDer(pki2).getBytes()
  };
  return forge$9.pem.encode(msg, { maxline });
};
var forge$8 = forge$C;
var prf_TLS1 = function(secret, label, seed, length) {
  var rval = forge$8.util.createBuffer();
  var idx = secret.length >> 1;
  var slen = idx + (secret.length & 1);
  var s1 = secret.substr(0, slen);
  var s2 = secret.substr(idx, slen);
  var ai = forge$8.util.createBuffer();
  var hmac2 = forge$8.hmac.create();
  seed = label + seed;
  var md5itr = Math.ceil(length / 16);
  var sha1itr = Math.ceil(length / 20);
  hmac2.start("MD5", s1);
  var md5bytes = forge$8.util.createBuffer();
  ai.putBytes(seed);
  for (var i = 0; i < md5itr; ++i) {
    hmac2.start(null, null);
    hmac2.update(ai.getBytes());
    ai.putBuffer(hmac2.digest());
    hmac2.start(null, null);
    hmac2.update(ai.bytes() + seed);
    md5bytes.putBuffer(hmac2.digest());
  }
  hmac2.start("SHA1", s2);
  var sha1bytes = forge$8.util.createBuffer();
  ai.clear();
  ai.putBytes(seed);
  for (var i = 0; i < sha1itr; ++i) {
    hmac2.start(null, null);
    hmac2.update(ai.getBytes());
    ai.putBuffer(hmac2.digest());
    hmac2.start(null, null);
    hmac2.update(ai.bytes() + seed);
    sha1bytes.putBuffer(hmac2.digest());
  }
  rval.putBytes(forge$8.util.xorBytes(
    md5bytes.getBytes(),
    sha1bytes.getBytes(),
    length
  ));
  return rval;
};
var hmac_sha1 = function(key, seqNum, record) {
  var hmac2 = forge$8.hmac.create();
  hmac2.start("SHA1", key);
  var b = forge$8.util.createBuffer();
  b.putInt32(seqNum[0]);
  b.putInt32(seqNum[1]);
  b.putByte(record.type);
  b.putByte(record.version.major);
  b.putByte(record.version.minor);
  b.putInt16(record.length);
  b.putBytes(record.fragment.bytes());
  hmac2.update(b.getBytes());
  return hmac2.digest().getBytes();
};
var deflate = function(c, record, s2) {
  var rval = false;
  try {
    var bytes = c.deflate(record.fragment.getBytes());
    record.fragment = forge$8.util.createBuffer(bytes);
    record.length = bytes.length;
    rval = true;
  } catch (ex) {
  }
  return rval;
};
var inflate = function(c, record, s2) {
  var rval = false;
  try {
    var bytes = c.inflate(record.fragment.getBytes());
    record.fragment = forge$8.util.createBuffer(bytes);
    record.length = bytes.length;
    rval = true;
  } catch (ex) {
  }
  return rval;
};
var readVector = function(b, lenBytes) {
  var len = 0;
  switch (lenBytes) {
    case 1:
      len = b.getByte();
      break;
    case 2:
      len = b.getInt16();
      break;
    case 3:
      len = b.getInt24();
      break;
    case 4:
      len = b.getInt32();
      break;
  }
  return forge$8.util.createBuffer(b.getBytes(len));
};
var writeVector = function(b, lenBytes, v) {
  b.putInt(v.length(), lenBytes << 3);
  b.putBuffer(v);
};
var tls$1 = {};
tls$1.Versions = {
  TLS_1_0: { major: 3, minor: 1 },
  TLS_1_1: { major: 3, minor: 2 },
  TLS_1_2: { major: 3, minor: 3 }
};
tls$1.SupportedVersions = [
  tls$1.Versions.TLS_1_1,
  tls$1.Versions.TLS_1_0
];
tls$1.Version = tls$1.SupportedVersions[0];
tls$1.MaxFragment = 16384 - 1024;
tls$1.ConnectionEnd = {
  server: 0,
  client: 1
};
tls$1.PRFAlgorithm = {
  tls_prf_sha256: 0
};
tls$1.BulkCipherAlgorithm = {
  none: null,
  rc4: 0,
  des3: 1,
  aes: 2
};
tls$1.CipherType = {
  stream: 0,
  block: 1,
  aead: 2
};
tls$1.MACAlgorithm = {
  none: null,
  hmac_md5: 0,
  hmac_sha1: 1,
  hmac_sha256: 2,
  hmac_sha384: 3,
  hmac_sha512: 4
};
tls$1.CompressionMethod = {
  none: 0,
  deflate: 1
};
tls$1.ContentType = {
  change_cipher_spec: 20,
  alert: 21,
  handshake: 22,
  application_data: 23,
  heartbeat: 24
};
tls$1.HandshakeType = {
  hello_request: 0,
  client_hello: 1,
  server_hello: 2,
  certificate: 11,
  server_key_exchange: 12,
  certificate_request: 13,
  server_hello_done: 14,
  certificate_verify: 15,
  client_key_exchange: 16,
  finished: 20
};
tls$1.Alert = {};
tls$1.Alert.Level = {
  warning: 1,
  fatal: 2
};
tls$1.Alert.Description = {
  close_notify: 0,
  unexpected_message: 10,
  bad_record_mac: 20,
  decryption_failed: 21,
  record_overflow: 22,
  decompression_failure: 30,
  handshake_failure: 40,
  bad_certificate: 42,
  unsupported_certificate: 43,
  certificate_revoked: 44,
  certificate_expired: 45,
  certificate_unknown: 46,
  illegal_parameter: 47,
  unknown_ca: 48,
  access_denied: 49,
  decode_error: 50,
  decrypt_error: 51,
  export_restriction: 60,
  protocol_version: 70,
  insufficient_security: 71,
  internal_error: 80,
  user_canceled: 90,
  no_renegotiation: 100
};
tls$1.HeartbeatMessageType = {
  heartbeat_request: 1,
  heartbeat_response: 2
};
tls$1.CipherSuites = {};
tls$1.getCipherSuite = function(twoBytes) {
  var rval = null;
  for (var key in tls$1.CipherSuites) {
    var cs = tls$1.CipherSuites[key];
    if (cs.id[0] === twoBytes.charCodeAt(0) && cs.id[1] === twoBytes.charCodeAt(1)) {
      rval = cs;
      break;
    }
  }
  return rval;
};
tls$1.handleUnexpected = function(c, record) {
  var ignore = !c.open && c.entity === tls$1.ConnectionEnd.client;
  if (!ignore) {
    c.error(c, {
      message: "Unexpected message. Received TLS record out of order.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.unexpected_message
      }
    });
  }
};
tls$1.handleHelloRequest = function(c, record, length) {
  if (!c.handshaking && c.handshakes > 0) {
    tls$1.queue(c, tls$1.createAlert(c, {
      level: tls$1.Alert.Level.warning,
      description: tls$1.Alert.Description.no_renegotiation
    }));
    tls$1.flush(c);
  }
  c.process();
};
tls$1.parseHelloMessage = function(c, record, length) {
  var msg = null;
  var client = c.entity === tls$1.ConnectionEnd.client;
  if (length < 38) {
    c.error(c, {
      message: client ? "Invalid ServerHello message. Message too short." : "Invalid ClientHello message. Message too short.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.illegal_parameter
      }
    });
  } else {
    var b = record.fragment;
    var remaining = b.length();
    msg = {
      version: {
        major: b.getByte(),
        minor: b.getByte()
      },
      random: forge$8.util.createBuffer(b.getBytes(32)),
      session_id: readVector(b, 1),
      extensions: []
    };
    if (client) {
      msg.cipher_suite = b.getBytes(2);
      msg.compression_method = b.getByte();
    } else {
      msg.cipher_suites = readVector(b, 2);
      msg.compression_methods = readVector(b, 1);
    }
    remaining = length - (remaining - b.length());
    if (remaining > 0) {
      var exts = readVector(b, 2);
      while (exts.length() > 0) {
        msg.extensions.push({
          type: [exts.getByte(), exts.getByte()],
          data: readVector(exts, 2)
        });
      }
      if (!client) {
        for (var i = 0; i < msg.extensions.length; ++i) {
          var ext = msg.extensions[i];
          if (ext.type[0] === 0 && ext.type[1] === 0) {
            var snl = readVector(ext.data, 2);
            while (snl.length() > 0) {
              var snType = snl.getByte();
              if (snType !== 0) {
                break;
              }
              c.session.extensions.server_name.serverNameList.push(
                readVector(snl, 2).getBytes()
              );
            }
          }
        }
      }
    }
    if (c.session.version) {
      if (msg.version.major !== c.session.version.major || msg.version.minor !== c.session.version.minor) {
        return c.error(c, {
          message: "TLS version change is disallowed during renegotiation.",
          send: true,
          alert: {
            level: tls$1.Alert.Level.fatal,
            description: tls$1.Alert.Description.protocol_version
          }
        });
      }
    }
    if (client) {
      c.session.cipherSuite = tls$1.getCipherSuite(msg.cipher_suite);
    } else {
      var tmp = forge$8.util.createBuffer(msg.cipher_suites.bytes());
      while (tmp.length() > 0) {
        c.session.cipherSuite = tls$1.getCipherSuite(tmp.getBytes(2));
        if (c.session.cipherSuite !== null) {
          break;
        }
      }
    }
    if (c.session.cipherSuite === null) {
      return c.error(c, {
        message: "No cipher suites in common.",
        send: true,
        alert: {
          level: tls$1.Alert.Level.fatal,
          description: tls$1.Alert.Description.handshake_failure
        },
        cipherSuite: forge$8.util.bytesToHex(msg.cipher_suite)
      });
    }
    if (client) {
      c.session.compressionMethod = msg.compression_method;
    } else {
      c.session.compressionMethod = tls$1.CompressionMethod.none;
    }
  }
  return msg;
};
tls$1.createSecurityParameters = function(c, msg) {
  var client = c.entity === tls$1.ConnectionEnd.client;
  var msgRandom = msg.random.bytes();
  var cRandom = client ? c.session.sp.client_random : msgRandom;
  var sRandom = client ? msgRandom : tls$1.createRandom().getBytes();
  c.session.sp = {
    entity: c.entity,
    prf_algorithm: tls$1.PRFAlgorithm.tls_prf_sha256,
    bulk_cipher_algorithm: null,
    cipher_type: null,
    enc_key_length: null,
    block_length: null,
    fixed_iv_length: null,
    record_iv_length: null,
    mac_algorithm: null,
    mac_length: null,
    mac_key_length: null,
    compression_algorithm: c.session.compressionMethod,
    pre_master_secret: null,
    master_secret: null,
    client_random: cRandom,
    server_random: sRandom
  };
};
tls$1.handleServerHello = function(c, record, length) {
  var msg = tls$1.parseHelloMessage(c, record, length);
  if (c.fail) {
    return;
  }
  if (msg.version.minor <= c.version.minor) {
    c.version.minor = msg.version.minor;
  } else {
    return c.error(c, {
      message: "Incompatible TLS version.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.protocol_version
      }
    });
  }
  c.session.version = c.version;
  var sessionId = msg.session_id.bytes();
  if (sessionId.length > 0 && sessionId === c.session.id) {
    c.expect = SCC;
    c.session.resuming = true;
    c.session.sp.server_random = msg.random.bytes();
  } else {
    c.expect = SCE;
    c.session.resuming = false;
    tls$1.createSecurityParameters(c, msg);
  }
  c.session.id = sessionId;
  c.process();
};
tls$1.handleClientHello = function(c, record, length) {
  var msg = tls$1.parseHelloMessage(c, record, length);
  if (c.fail) {
    return;
  }
  var sessionId = msg.session_id.bytes();
  var session = null;
  if (c.sessionCache) {
    session = c.sessionCache.getSession(sessionId);
    if (session === null) {
      sessionId = "";
    } else if (session.version.major !== msg.version.major || session.version.minor > msg.version.minor) {
      session = null;
      sessionId = "";
    }
  }
  if (sessionId.length === 0) {
    sessionId = forge$8.random.getBytes(32);
  }
  c.session.id = sessionId;
  c.session.clientHelloVersion = msg.version;
  c.session.sp = {};
  if (session) {
    c.version = c.session.version = session.version;
    c.session.sp = session.sp;
  } else {
    var version;
    for (var i = 1; i < tls$1.SupportedVersions.length; ++i) {
      version = tls$1.SupportedVersions[i];
      if (version.minor <= msg.version.minor) {
        break;
      }
    }
    c.version = { major: version.major, minor: version.minor };
    c.session.version = c.version;
  }
  if (session !== null) {
    c.expect = CCC;
    c.session.resuming = true;
    c.session.sp.client_random = msg.random.bytes();
  } else {
    c.expect = c.verifyClient !== false ? CCE : CKE;
    c.session.resuming = false;
    tls$1.createSecurityParameters(c, msg);
  }
  c.open = true;
  tls$1.queue(c, tls$1.createRecord(c, {
    type: tls$1.ContentType.handshake,
    data: tls$1.createServerHello(c)
  }));
  if (c.session.resuming) {
    tls$1.queue(c, tls$1.createRecord(c, {
      type: tls$1.ContentType.change_cipher_spec,
      data: tls$1.createChangeCipherSpec()
    }));
    c.state.pending = tls$1.createConnectionState(c);
    c.state.current.write = c.state.pending.write;
    tls$1.queue(c, tls$1.createRecord(c, {
      type: tls$1.ContentType.handshake,
      data: tls$1.createFinished(c)
    }));
  } else {
    tls$1.queue(c, tls$1.createRecord(c, {
      type: tls$1.ContentType.handshake,
      data: tls$1.createCertificate(c)
    }));
    if (!c.fail) {
      tls$1.queue(c, tls$1.createRecord(c, {
        type: tls$1.ContentType.handshake,
        data: tls$1.createServerKeyExchange(c)
      }));
      if (c.verifyClient !== false) {
        tls$1.queue(c, tls$1.createRecord(c, {
          type: tls$1.ContentType.handshake,
          data: tls$1.createCertificateRequest(c)
        }));
      }
      tls$1.queue(c, tls$1.createRecord(c, {
        type: tls$1.ContentType.handshake,
        data: tls$1.createServerHelloDone(c)
      }));
    }
  }
  tls$1.flush(c);
  c.process();
};
tls$1.handleCertificate = function(c, record, length) {
  if (length < 3) {
    return c.error(c, {
      message: "Invalid Certificate message. Message too short.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.illegal_parameter
      }
    });
  }
  var b = record.fragment;
  var msg = {
    certificate_list: readVector(b, 3)
  };
  var cert, asn12;
  var certs = [];
  try {
    while (msg.certificate_list.length() > 0) {
      cert = readVector(msg.certificate_list, 3);
      asn12 = forge$8.asn1.fromDer(cert);
      cert = forge$8.pki.certificateFromAsn1(asn12, true);
      certs.push(cert);
    }
  } catch (ex) {
    return c.error(c, {
      message: "Could not parse certificate list.",
      cause: ex,
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.bad_certificate
      }
    });
  }
  var client = c.entity === tls$1.ConnectionEnd.client;
  if ((client || c.verifyClient === true) && certs.length === 0) {
    c.error(c, {
      message: client ? "No server certificate provided." : "No client certificate provided.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.illegal_parameter
      }
    });
  } else if (certs.length === 0) {
    c.expect = client ? SKE : CKE;
  } else {
    if (client) {
      c.session.serverCertificate = certs[0];
    } else {
      c.session.clientCertificate = certs[0];
    }
    if (tls$1.verifyCertificateChain(c, certs)) {
      c.expect = client ? SKE : CKE;
    }
  }
  c.process();
};
tls$1.handleServerKeyExchange = function(c, record, length) {
  if (length > 0) {
    return c.error(c, {
      message: "Invalid key parameters. Only RSA is supported.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.unsupported_certificate
      }
    });
  }
  c.expect = SCR;
  c.process();
};
tls$1.handleClientKeyExchange = function(c, record, length) {
  if (length < 48) {
    return c.error(c, {
      message: "Invalid key parameters. Only RSA is supported.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.unsupported_certificate
      }
    });
  }
  var b = record.fragment;
  var msg = {
    enc_pre_master_secret: readVector(b, 2).getBytes()
  };
  var privateKey = null;
  if (c.getPrivateKey) {
    try {
      privateKey = c.getPrivateKey(c, c.session.serverCertificate);
      privateKey = forge$8.pki.privateKeyFromPem(privateKey);
    } catch (ex) {
      c.error(c, {
        message: "Could not get private key.",
        cause: ex,
        send: true,
        alert: {
          level: tls$1.Alert.Level.fatal,
          description: tls$1.Alert.Description.internal_error
        }
      });
    }
  }
  if (privateKey === null) {
    return c.error(c, {
      message: "No private key set.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.internal_error
      }
    });
  }
  try {
    var sp = c.session.sp;
    sp.pre_master_secret = privateKey.decrypt(msg.enc_pre_master_secret);
    var version = c.session.clientHelloVersion;
    if (version.major !== sp.pre_master_secret.charCodeAt(0) || version.minor !== sp.pre_master_secret.charCodeAt(1)) {
      throw new Error("TLS version rollback attack detected.");
    }
  } catch (ex) {
    sp.pre_master_secret = forge$8.random.getBytes(48);
  }
  c.expect = CCC;
  if (c.session.clientCertificate !== null) {
    c.expect = CCV;
  }
  c.process();
};
tls$1.handleCertificateRequest = function(c, record, length) {
  if (length < 3) {
    return c.error(c, {
      message: "Invalid CertificateRequest. Message too short.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.illegal_parameter
      }
    });
  }
  var b = record.fragment;
  var msg = {
    certificate_types: readVector(b, 1),
    certificate_authorities: readVector(b, 2)
  };
  c.session.certificateRequest = msg;
  c.expect = SHD;
  c.process();
};
tls$1.handleCertificateVerify = function(c, record, length) {
  if (length < 2) {
    return c.error(c, {
      message: "Invalid CertificateVerify. Message too short.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.illegal_parameter
      }
    });
  }
  var b = record.fragment;
  b.read -= 4;
  var msgBytes = b.bytes();
  b.read += 4;
  var msg = {
    signature: readVector(b, 2).getBytes()
  };
  var verify = forge$8.util.createBuffer();
  verify.putBuffer(c.session.md5.digest());
  verify.putBuffer(c.session.sha1.digest());
  verify = verify.getBytes();
  try {
    var cert = c.session.clientCertificate;
    if (!cert.publicKey.verify(verify, msg.signature, "NONE")) {
      throw new Error("CertificateVerify signature does not match.");
    }
    c.session.md5.update(msgBytes);
    c.session.sha1.update(msgBytes);
  } catch (ex) {
    return c.error(c, {
      message: "Bad signature in CertificateVerify.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.handshake_failure
      }
    });
  }
  c.expect = CCC;
  c.process();
};
tls$1.handleServerHelloDone = function(c, record, length) {
  if (length > 0) {
    return c.error(c, {
      message: "Invalid ServerHelloDone message. Invalid length.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.record_overflow
      }
    });
  }
  if (c.serverCertificate === null) {
    var error = {
      message: "No server certificate provided. Not enough security.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.insufficient_security
      }
    };
    var depth = 0;
    var ret = c.verify(c, error.alert.description, depth, []);
    if (ret !== true) {
      if (ret || ret === 0) {
        if (typeof ret === "object" && !forge$8.util.isArray(ret)) {
          if (ret.message) {
            error.message = ret.message;
          }
          if (ret.alert) {
            error.alert.description = ret.alert;
          }
        } else if (typeof ret === "number") {
          error.alert.description = ret;
        }
      }
      return c.error(c, error);
    }
  }
  if (c.session.certificateRequest !== null) {
    record = tls$1.createRecord(c, {
      type: tls$1.ContentType.handshake,
      data: tls$1.createCertificate(c)
    });
    tls$1.queue(c, record);
  }
  record = tls$1.createRecord(c, {
    type: tls$1.ContentType.handshake,
    data: tls$1.createClientKeyExchange(c)
  });
  tls$1.queue(c, record);
  c.expect = SER;
  var callback = function(c2, signature) {
    if (c2.session.certificateRequest !== null && c2.session.clientCertificate !== null) {
      tls$1.queue(c2, tls$1.createRecord(c2, {
        type: tls$1.ContentType.handshake,
        data: tls$1.createCertificateVerify(c2, signature)
      }));
    }
    tls$1.queue(c2, tls$1.createRecord(c2, {
      type: tls$1.ContentType.change_cipher_spec,
      data: tls$1.createChangeCipherSpec()
    }));
    c2.state.pending = tls$1.createConnectionState(c2);
    c2.state.current.write = c2.state.pending.write;
    tls$1.queue(c2, tls$1.createRecord(c2, {
      type: tls$1.ContentType.handshake,
      data: tls$1.createFinished(c2)
    }));
    c2.expect = SCC;
    tls$1.flush(c2);
    c2.process();
  };
  if (c.session.certificateRequest === null || c.session.clientCertificate === null) {
    return callback(c, null);
  }
  tls$1.getClientSignature(c, callback);
};
tls$1.handleChangeCipherSpec = function(c, record) {
  if (record.fragment.getByte() !== 1) {
    return c.error(c, {
      message: "Invalid ChangeCipherSpec message received.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.illegal_parameter
      }
    });
  }
  var client = c.entity === tls$1.ConnectionEnd.client;
  if (c.session.resuming && client || !c.session.resuming && !client) {
    c.state.pending = tls$1.createConnectionState(c);
  }
  c.state.current.read = c.state.pending.read;
  if (!c.session.resuming && client || c.session.resuming && !client) {
    c.state.pending = null;
  }
  c.expect = client ? SFI : CFI;
  c.process();
};
tls$1.handleFinished = function(c, record, length) {
  var b = record.fragment;
  b.read -= 4;
  var msgBytes = b.bytes();
  b.read += 4;
  var vd = record.fragment.getBytes();
  b = forge$8.util.createBuffer();
  b.putBuffer(c.session.md5.digest());
  b.putBuffer(c.session.sha1.digest());
  var client = c.entity === tls$1.ConnectionEnd.client;
  var label = client ? "server finished" : "client finished";
  var sp = c.session.sp;
  var vdl = 12;
  var prf = prf_TLS1;
  b = prf(sp.master_secret, label, b.getBytes(), vdl);
  if (b.getBytes() !== vd) {
    return c.error(c, {
      message: "Invalid verify_data in Finished message.",
      send: true,
      alert: {
        level: tls$1.Alert.Level.fatal,
        description: tls$1.Alert.Description.decrypt_error
      }
    });
  }
  c.session.md5.update(msgBytes);
  c.session.sha1.update(msgBytes);
  if (c.session.resuming && client || !c.session.resuming && !client) {
    tls$1.queue(c, tls$1.createRecord(c, {
      type: tls$1.ContentType.change_cipher_spec,
      data: tls$1.createChangeCipherSpec()
    }));
    c.state.current.write = c.state.pending.write;
    c.state.pending = null;
    tls$1.queue(c, tls$1.createRecord(c, {
      type: tls$1.ContentType.handshake,
      data: tls$1.createFinished(c)
    }));
  }
  c.expect = client ? SAD : CAD;
  c.handshaking = false;
  ++c.handshakes;
  c.peerCertificate = client ? c.session.serverCertificate : c.session.clientCertificate;
  tls$1.flush(c);
  c.isConnected = true;
  c.connected(c);
  c.process();
};
tls$1.handleAlert = function(c, record) {
  var b = record.fragment;
  var alert = {
    level: b.getByte(),
    description: b.getByte()
  };
  var msg;
  switch (alert.description) {
    case tls$1.Alert.Description.close_notify:
      msg = "Connection closed.";
      break;
    case tls$1.Alert.Description.unexpected_message:
      msg = "Unexpected message.";
      break;
    case tls$1.Alert.Description.bad_record_mac:
      msg = "Bad record MAC.";
      break;
    case tls$1.Alert.Description.decryption_failed:
      msg = "Decryption failed.";
      break;
    case tls$1.Alert.Description.record_overflow:
      msg = "Record overflow.";
      break;
    case tls$1.Alert.Description.decompression_failure:
      msg = "Decompression failed.";
      break;
    case tls$1.Alert.Description.handshake_failure:
      msg = "Handshake failure.";
      break;
    case tls$1.Alert.Description.bad_certificate:
      msg = "Bad certificate.";
      break;
    case tls$1.Alert.Description.unsupported_certificate:
      msg = "Unsupported certificate.";
      break;
    case tls$1.Alert.Description.certificate_revoked:
      msg = "Certificate revoked.";
      break;
    case tls$1.Alert.Description.certificate_expired:
      msg = "Certificate expired.";
      break;
    case tls$1.Alert.Description.certificate_unknown:
      msg = "Certificate unknown.";
      break;
    case tls$1.Alert.Description.illegal_parameter:
      msg = "Illegal parameter.";
      break;
    case tls$1.Alert.Description.unknown_ca:
      msg = "Unknown certificate authority.";
      break;
    case tls$1.Alert.Description.access_denied:
      msg = "Access denied.";
      break;
    case tls$1.Alert.Description.decode_error:
      msg = "Decode error.";
      break;
    case tls$1.Alert.Description.decrypt_error:
      msg = "Decrypt error.";
      break;
    case tls$1.Alert.Description.export_restriction:
      msg = "Export restriction.";
      break;
    case tls$1.Alert.Description.protocol_version:
      msg = "Unsupported protocol version.";
      break;
    case tls$1.Alert.Description.insufficient_security:
      msg = "Insufficient security.";
      break;
    case tls$1.Alert.Description.internal_error:
      msg = "Internal error.";
      break;
    case tls$1.Alert.Description.user_canceled:
      msg = "User canceled.";
      break;
    case tls$1.Alert.Description.no_renegotiation:
      msg = "Renegotiation not supported.";
      break;
    default:
      msg = "Unknown error.";
      break;
  }
  if (alert.description === tls$1.Alert.Description.close_notify) {
    return c.close();
  }
  c.error(c, {
    message: msg,
    send: false,
    // origin is the opposite end
    origin: c.entity === tls$1.ConnectionEnd.client ? "server" : "client",
    alert
  });
  c.process();
};
tls$1.handleHandshake = function(c, record) {
  var b = record.fragment;
  var type = b.getByte();
  var length = b.getInt24();
  if (length > b.length()) {
    c.fragmented = record;
    record.fragment = forge$8.util.createBuffer();
    b.read -= 4;
    return c.process();
  }
  c.fragmented = null;
  b.read -= 4;
  var bytes = b.bytes(length + 4);
  b.read += 4;
  if (type in hsTable[c.entity][c.expect]) {
    if (c.entity === tls$1.ConnectionEnd.server && !c.open && !c.fail) {
      c.handshaking = true;
      c.session = {
        version: null,
        extensions: {
          server_name: {
            serverNameList: []
          }
        },
        cipherSuite: null,
        compressionMethod: null,
        serverCertificate: null,
        clientCertificate: null,
        md5: forge$8.md.md5.create(),
        sha1: forge$8.md.sha1.create()
      };
    }
    if (type !== tls$1.HandshakeType.hello_request && type !== tls$1.HandshakeType.certificate_verify && type !== tls$1.HandshakeType.finished) {
      c.session.md5.update(bytes);
      c.session.sha1.update(bytes);
    }
    hsTable[c.entity][c.expect][type](c, record, length);
  } else {
    tls$1.handleUnexpected(c, record);
  }
};
tls$1.handleApplicationData = function(c, record) {
  c.data.putBuffer(record.fragment);
  c.dataReady(c);
  c.process();
};
tls$1.handleHeartbeat = function(c, record) {
  var b = record.fragment;
  var type = b.getByte();
  var length = b.getInt16();
  var payload = b.getBytes(length);
  if (type === tls$1.HeartbeatMessageType.heartbeat_request) {
    if (c.handshaking || length > payload.length) {
      return c.process();
    }
    tls$1.queue(c, tls$1.createRecord(c, {
      type: tls$1.ContentType.heartbeat,
      data: tls$1.createHeartbeat(
        tls$1.HeartbeatMessageType.heartbeat_response,
        payload
      )
    }));
    tls$1.flush(c);
  } else if (type === tls$1.HeartbeatMessageType.heartbeat_response) {
    if (payload !== c.expectedHeartbeatPayload) {
      return c.process();
    }
    if (c.heartbeatReceived) {
      c.heartbeatReceived(c, forge$8.util.createBuffer(payload));
    }
  }
  c.process();
};
var SHE = 0;
var SCE = 1;
var SKE = 2;
var SCR = 3;
var SHD = 4;
var SCC = 5;
var SFI = 6;
var SAD = 7;
var SER = 8;
var CHE = 0;
var CCE = 1;
var CKE = 2;
var CCV = 3;
var CCC = 4;
var CFI = 5;
var CAD = 6;
var __ = tls$1.handleUnexpected;
var R0 = tls$1.handleChangeCipherSpec;
var R1 = tls$1.handleAlert;
var R2 = tls$1.handleHandshake;
var R3 = tls$1.handleApplicationData;
var R4 = tls$1.handleHeartbeat;
var ctTable = [];
ctTable[tls$1.ConnectionEnd.client] = [
  //      CC,AL,HS,AD,HB
  /*SHE*/
  [__, R1, R2, __, R4],
  /*SCE*/
  [__, R1, R2, __, R4],
  /*SKE*/
  [__, R1, R2, __, R4],
  /*SCR*/
  [__, R1, R2, __, R4],
  /*SHD*/
  [__, R1, R2, __, R4],
  /*SCC*/
  [R0, R1, __, __, R4],
  /*SFI*/
  [__, R1, R2, __, R4],
  /*SAD*/
  [__, R1, R2, R3, R4],
  /*SER*/
  [__, R1, R2, __, R4]
];
ctTable[tls$1.ConnectionEnd.server] = [
  //      CC,AL,HS,AD
  /*CHE*/
  [__, R1, R2, __, R4],
  /*CCE*/
  [__, R1, R2, __, R4],
  /*CKE*/
  [__, R1, R2, __, R4],
  /*CCV*/
  [__, R1, R2, __, R4],
  /*CCC*/
  [R0, R1, __, __, R4],
  /*CFI*/
  [__, R1, R2, __, R4],
  /*CAD*/
  [__, R1, R2, R3, R4],
  /*CER*/
  [__, R1, R2, __, R4]
];
var H0 = tls$1.handleHelloRequest;
var H1 = tls$1.handleServerHello;
var H2 = tls$1.handleCertificate;
var H3 = tls$1.handleServerKeyExchange;
var H4 = tls$1.handleCertificateRequest;
var H5 = tls$1.handleServerHelloDone;
var H6 = tls$1.handleFinished;
var hsTable = [];
hsTable[tls$1.ConnectionEnd.client] = [
  //      HR,01,SH,03,04,05,06,07,08,09,10,SC,SK,CR,HD,15,CK,17,18,19,FI
  /*SHE*/
  [__, __, H1, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __],
  /*SCE*/
  [H0, __, __, __, __, __, __, __, __, __, __, H2, H3, H4, H5, __, __, __, __, __, __],
  /*SKE*/
  [H0, __, __, __, __, __, __, __, __, __, __, __, H3, H4, H5, __, __, __, __, __, __],
  /*SCR*/
  [H0, __, __, __, __, __, __, __, __, __, __, __, __, H4, H5, __, __, __, __, __, __],
  /*SHD*/
  [H0, __, __, __, __, __, __, __, __, __, __, __, __, __, H5, __, __, __, __, __, __],
  /*SCC*/
  [H0, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __],
  /*SFI*/
  [H0, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, H6],
  /*SAD*/
  [H0, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __],
  /*SER*/
  [H0, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __]
];
var H7 = tls$1.handleClientHello;
var H8 = tls$1.handleClientKeyExchange;
var H9 = tls$1.handleCertificateVerify;
hsTable[tls$1.ConnectionEnd.server] = [
  //      01,CH,02,03,04,05,06,07,08,09,10,CC,12,13,14,CV,CK,17,18,19,FI
  /*CHE*/
  [__, H7, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __],
  /*CCE*/
  [__, __, __, __, __, __, __, __, __, __, __, H2, __, __, __, __, __, __, __, __, __],
  /*CKE*/
  [__, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, H8, __, __, __, __],
  /*CCV*/
  [__, __, __, __, __, __, __, __, __, __, __, __, __, __, __, H9, __, __, __, __, __],
  /*CCC*/
  [__, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __],
  /*CFI*/
  [__, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, H6],
  /*CAD*/
  [__, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __],
  /*CER*/
  [__, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __]
];
tls$1.generateKeys = function(c, sp) {
  var prf = prf_TLS1;
  var random = sp.client_random + sp.server_random;
  if (!c.session.resuming) {
    sp.master_secret = prf(
      sp.pre_master_secret,
      "master secret",
      random,
      48
    ).bytes();
    sp.pre_master_secret = null;
  }
  random = sp.server_random + sp.client_random;
  var length = 2 * sp.mac_key_length + 2 * sp.enc_key_length;
  var tls10 = c.version.major === tls$1.Versions.TLS_1_0.major && c.version.minor === tls$1.Versions.TLS_1_0.minor;
  if (tls10) {
    length += 2 * sp.fixed_iv_length;
  }
  var km = prf(sp.master_secret, "key expansion", random, length);
  var rval = {
    client_write_MAC_key: km.getBytes(sp.mac_key_length),
    server_write_MAC_key: km.getBytes(sp.mac_key_length),
    client_write_key: km.getBytes(sp.enc_key_length),
    server_write_key: km.getBytes(sp.enc_key_length)
  };
  if (tls10) {
    rval.client_write_IV = km.getBytes(sp.fixed_iv_length);
    rval.server_write_IV = km.getBytes(sp.fixed_iv_length);
  }
  return rval;
};
tls$1.createConnectionState = function(c) {
  var client = c.entity === tls$1.ConnectionEnd.client;
  var createMode = function() {
    var mode = {
      // two 32-bit numbers, first is most significant
      sequenceNumber: [0, 0],
      macKey: null,
      macLength: 0,
      macFunction: null,
      cipherState: null,
      cipherFunction: function(record) {
        return true;
      },
      compressionState: null,
      compressFunction: function(record) {
        return true;
      },
      updateSequenceNumber: function() {
        if (mode.sequenceNumber[1] === 4294967295) {
          mode.sequenceNumber[1] = 0;
          ++mode.sequenceNumber[0];
        } else {
          ++mode.sequenceNumber[1];
        }
      }
    };
    return mode;
  };
  var state = {
    read: createMode(),
    write: createMode()
  };
  state.read.update = function(c2, record) {
    if (!state.read.cipherFunction(record, state.read)) {
      c2.error(c2, {
        message: "Could not decrypt record or bad MAC.",
        send: true,
        alert: {
          level: tls$1.Alert.Level.fatal,
          // doesn't matter if decryption failed or MAC was
          // invalid, return the same error so as not to reveal
          // which one occurred
          description: tls$1.Alert.Description.bad_record_mac
        }
      });
    } else if (!state.read.compressFunction(c2, record, state.read)) {
      c2.error(c2, {
        message: "Could not decompress record.",
        send: true,
        alert: {
          level: tls$1.Alert.Level.fatal,
          description: tls$1.Alert.Description.decompression_failure
        }
      });
    }
    return !c2.fail;
  };
  state.write.update = function(c2, record) {
    if (!state.write.compressFunction(c2, record, state.write)) {
      c2.error(c2, {
        message: "Could not compress record.",
        send: false,
        alert: {
          level: tls$1.Alert.Level.fatal,
          description: tls$1.Alert.Description.internal_error
        }
      });
    } else if (!state.write.cipherFunction(record, state.write)) {
      c2.error(c2, {
        message: "Could not encrypt record.",
        send: false,
        alert: {
          level: tls$1.Alert.Level.fatal,
          description: tls$1.Alert.Description.internal_error
        }
      });
    }
    return !c2.fail;
  };
  if (c.session) {
    var sp = c.session.sp;
    c.session.cipherSuite.initSecurityParameters(sp);
    sp.keys = tls$1.generateKeys(c, sp);
    state.read.macKey = client ? sp.keys.server_write_MAC_key : sp.keys.client_write_MAC_key;
    state.write.macKey = client ? sp.keys.client_write_MAC_key : sp.keys.server_write_MAC_key;
    c.session.cipherSuite.initConnectionState(state, c, sp);
    switch (sp.compression_algorithm) {
      case tls$1.CompressionMethod.none:
        break;
      case tls$1.CompressionMethod.deflate:
        state.read.compressFunction = inflate;
        state.write.compressFunction = deflate;
        break;
      default:
        throw new Error("Unsupported compression algorithm.");
    }
  }
  return state;
};
tls$1.createRandom = function() {
  var d = /* @__PURE__ */ new Date();
  var utc = +d + d.getTimezoneOffset() * 6e4;
  var rval = forge$8.util.createBuffer();
  rval.putInt32(utc);
  rval.putBytes(forge$8.random.getBytes(28));
  return rval;
};
tls$1.createRecord = function(c, options) {
  if (!options.data) {
    return null;
  }
  var record = {
    type: options.type,
    version: {
      major: c.version.major,
      minor: c.version.minor
    },
    length: options.data.length(),
    fragment: options.data
  };
  return record;
};
tls$1.createAlert = function(c, alert) {
  var b = forge$8.util.createBuffer();
  b.putByte(alert.level);
  b.putByte(alert.description);
  return tls$1.createRecord(c, {
    type: tls$1.ContentType.alert,
    data: b
  });
};
tls$1.createClientHello = function(c) {
  c.session.clientHelloVersion = {
    major: c.version.major,
    minor: c.version.minor
  };
  var cipherSuites = forge$8.util.createBuffer();
  for (var i = 0; i < c.cipherSuites.length; ++i) {
    var cs = c.cipherSuites[i];
    cipherSuites.putByte(cs.id[0]);
    cipherSuites.putByte(cs.id[1]);
  }
  var cSuites = cipherSuites.length();
  var compressionMethods = forge$8.util.createBuffer();
  compressionMethods.putByte(tls$1.CompressionMethod.none);
  var cMethods = compressionMethods.length();
  var extensions = forge$8.util.createBuffer();
  if (c.virtualHost) {
    var ext = forge$8.util.createBuffer();
    ext.putByte(0);
    ext.putByte(0);
    var serverName = forge$8.util.createBuffer();
    serverName.putByte(0);
    writeVector(serverName, 2, forge$8.util.createBuffer(c.virtualHost));
    var snList = forge$8.util.createBuffer();
    writeVector(snList, 2, serverName);
    writeVector(ext, 2, snList);
    extensions.putBuffer(ext);
  }
  var extLength = extensions.length();
  if (extLength > 0) {
    extLength += 2;
  }
  var sessionId = c.session.id;
  var length = sessionId.length + 1 + // session ID vector
  2 + // version (major + minor)
  4 + 28 + // random time and random bytes
  2 + cSuites + // cipher suites vector
  1 + cMethods + // compression methods vector
  extLength;
  var rval = forge$8.util.createBuffer();
  rval.putByte(tls$1.HandshakeType.client_hello);
  rval.putInt24(length);
  rval.putByte(c.version.major);
  rval.putByte(c.version.minor);
  rval.putBytes(c.session.sp.client_random);
  writeVector(rval, 1, forge$8.util.createBuffer(sessionId));
  writeVector(rval, 2, cipherSuites);
  writeVector(rval, 1, compressionMethods);
  if (extLength > 0) {
    writeVector(rval, 2, extensions);
  }
  return rval;
};
tls$1.createServerHello = function(c) {
  var sessionId = c.session.id;
  var length = sessionId.length + 1 + // session ID vector
  2 + // version (major + minor)
  4 + 28 + // random time and random bytes
  2 + // chosen cipher suite
  1;
  var rval = forge$8.util.createBuffer();
  rval.putByte(tls$1.HandshakeType.server_hello);
  rval.putInt24(length);
  rval.putByte(c.version.major);
  rval.putByte(c.version.minor);
  rval.putBytes(c.session.sp.server_random);
  writeVector(rval, 1, forge$8.util.createBuffer(sessionId));
  rval.putByte(c.session.cipherSuite.id[0]);
  rval.putByte(c.session.cipherSuite.id[1]);
  rval.putByte(c.session.compressionMethod);
  return rval;
};
tls$1.createCertificate = function(c) {
  var client = c.entity === tls$1.ConnectionEnd.client;
  var cert = null;
  if (c.getCertificate) {
    var hint;
    if (client) {
      hint = c.session.certificateRequest;
    } else {
      hint = c.session.extensions.server_name.serverNameList;
    }
    cert = c.getCertificate(c, hint);
  }
  var certList = forge$8.util.createBuffer();
  if (cert !== null) {
    try {
      if (!forge$8.util.isArray(cert)) {
        cert = [cert];
      }
      var asn12 = null;
      for (var i = 0; i < cert.length; ++i) {
        var msg = forge$8.pem.decode(cert[i])[0];
        if (msg.type !== "CERTIFICATE" && msg.type !== "X509 CERTIFICATE" && msg.type !== "TRUSTED CERTIFICATE") {
          var error = new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');
          error.headerType = msg.type;
          throw error;
        }
        if (msg.procType && msg.procType.type === "ENCRYPTED") {
          throw new Error("Could not convert certificate from PEM; PEM is encrypted.");
        }
        var der = forge$8.util.createBuffer(msg.body);
        if (asn12 === null) {
          asn12 = forge$8.asn1.fromDer(der.bytes(), false);
        }
        var certBuffer = forge$8.util.createBuffer();
        writeVector(certBuffer, 3, der);
        certList.putBuffer(certBuffer);
      }
      cert = forge$8.pki.certificateFromAsn1(asn12);
      if (client) {
        c.session.clientCertificate = cert;
      } else {
        c.session.serverCertificate = cert;
      }
    } catch (ex) {
      return c.error(c, {
        message: "Could not send certificate list.",
        cause: ex,
        send: true,
        alert: {
          level: tls$1.Alert.Level.fatal,
          description: tls$1.Alert.Description.bad_certificate
        }
      });
    }
  }
  var length = 3 + certList.length();
  var rval = forge$8.util.createBuffer();
  rval.putByte(tls$1.HandshakeType.certificate);
  rval.putInt24(length);
  writeVector(rval, 3, certList);
  return rval;
};
tls$1.createClientKeyExchange = function(c) {
  var b = forge$8.util.createBuffer();
  b.putByte(c.session.clientHelloVersion.major);
  b.putByte(c.session.clientHelloVersion.minor);
  b.putBytes(forge$8.random.getBytes(46));
  var sp = c.session.sp;
  sp.pre_master_secret = b.getBytes();
  var key = c.session.serverCertificate.publicKey;
  b = key.encrypt(sp.pre_master_secret);
  var length = b.length + 2;
  var rval = forge$8.util.createBuffer();
  rval.putByte(tls$1.HandshakeType.client_key_exchange);
  rval.putInt24(length);
  rval.putInt16(b.length);
  rval.putBytes(b);
  return rval;
};
tls$1.createServerKeyExchange = function(c) {
  var rval = forge$8.util.createBuffer();
  return rval;
};
tls$1.getClientSignature = function(c, callback) {
  var b = forge$8.util.createBuffer();
  b.putBuffer(c.session.md5.digest());
  b.putBuffer(c.session.sha1.digest());
  b = b.getBytes();
  c.getSignature = c.getSignature || function(c2, b2, callback2) {
    var privateKey = null;
    if (c2.getPrivateKey) {
      try {
        privateKey = c2.getPrivateKey(c2, c2.session.clientCertificate);
        privateKey = forge$8.pki.privateKeyFromPem(privateKey);
      } catch (ex) {
        c2.error(c2, {
          message: "Could not get private key.",
          cause: ex,
          send: true,
          alert: {
            level: tls$1.Alert.Level.fatal,
            description: tls$1.Alert.Description.internal_error
          }
        });
      }
    }
    if (privateKey === null) {
      c2.error(c2, {
        message: "No private key set.",
        send: true,
        alert: {
          level: tls$1.Alert.Level.fatal,
          description: tls$1.Alert.Description.internal_error
        }
      });
    } else {
      b2 = privateKey.sign(b2, null);
    }
    callback2(c2, b2);
  };
  c.getSignature(c, b, callback);
};
tls$1.createCertificateVerify = function(c, signature) {
  var length = signature.length + 2;
  var rval = forge$8.util.createBuffer();
  rval.putByte(tls$1.HandshakeType.certificate_verify);
  rval.putInt24(length);
  rval.putInt16(signature.length);
  rval.putBytes(signature);
  return rval;
};
tls$1.createCertificateRequest = function(c) {
  var certTypes = forge$8.util.createBuffer();
  certTypes.putByte(1);
  var cAs = forge$8.util.createBuffer();
  for (var key in c.caStore.certs) {
    var cert = c.caStore.certs[key];
    var dn = forge$8.pki.distinguishedNameToAsn1(cert.subject);
    var byteBuffer = forge$8.asn1.toDer(dn);
    cAs.putInt16(byteBuffer.length());
    cAs.putBuffer(byteBuffer);
  }
  var length = 1 + certTypes.length() + 2 + cAs.length();
  var rval = forge$8.util.createBuffer();
  rval.putByte(tls$1.HandshakeType.certificate_request);
  rval.putInt24(length);
  writeVector(rval, 1, certTypes);
  writeVector(rval, 2, cAs);
  return rval;
};
tls$1.createServerHelloDone = function(c) {
  var rval = forge$8.util.createBuffer();
  rval.putByte(tls$1.HandshakeType.server_hello_done);
  rval.putInt24(0);
  return rval;
};
tls$1.createChangeCipherSpec = function() {
  var rval = forge$8.util.createBuffer();
  rval.putByte(1);
  return rval;
};
tls$1.createFinished = function(c) {
  var b = forge$8.util.createBuffer();
  b.putBuffer(c.session.md5.digest());
  b.putBuffer(c.session.sha1.digest());
  var client = c.entity === tls$1.ConnectionEnd.client;
  var sp = c.session.sp;
  var vdl = 12;
  var prf = prf_TLS1;
  var label = client ? "client finished" : "server finished";
  b = prf(sp.master_secret, label, b.getBytes(), vdl);
  var rval = forge$8.util.createBuffer();
  rval.putByte(tls$1.HandshakeType.finished);
  rval.putInt24(b.length());
  rval.putBuffer(b);
  return rval;
};
tls$1.createHeartbeat = function(type, payload, payloadLength) {
  if (typeof payloadLength === "undefined") {
    payloadLength = payload.length;
  }
  var rval = forge$8.util.createBuffer();
  rval.putByte(type);
  rval.putInt16(payloadLength);
  rval.putBytes(payload);
  var plaintextLength = rval.length();
  var paddingLength = Math.max(16, plaintextLength - payloadLength - 3);
  rval.putBytes(forge$8.random.getBytes(paddingLength));
  return rval;
};
tls$1.queue = function(c, record) {
  if (!record) {
    return;
  }
  if (record.fragment.length() === 0) {
    if (record.type === tls$1.ContentType.handshake || record.type === tls$1.ContentType.alert || record.type === tls$1.ContentType.change_cipher_spec) {
      return;
    }
  }
  if (record.type === tls$1.ContentType.handshake) {
    var bytes = record.fragment.bytes();
    c.session.md5.update(bytes);
    c.session.sha1.update(bytes);
    bytes = null;
  }
  var records;
  if (record.fragment.length() <= tls$1.MaxFragment) {
    records = [record];
  } else {
    records = [];
    var data = record.fragment.bytes();
    while (data.length > tls$1.MaxFragment) {
      records.push(tls$1.createRecord(c, {
        type: record.type,
        data: forge$8.util.createBuffer(data.slice(0, tls$1.MaxFragment))
      }));
      data = data.slice(tls$1.MaxFragment);
    }
    if (data.length > 0) {
      records.push(tls$1.createRecord(c, {
        type: record.type,
        data: forge$8.util.createBuffer(data)
      }));
    }
  }
  for (var i = 0; i < records.length && !c.fail; ++i) {
    var rec = records[i];
    var s2 = c.state.current.write;
    if (s2.update(c, rec)) {
      c.records.push(rec);
    }
  }
};
tls$1.flush = function(c) {
  for (var i = 0; i < c.records.length; ++i) {
    var record = c.records[i];
    c.tlsData.putByte(record.type);
    c.tlsData.putByte(record.version.major);
    c.tlsData.putByte(record.version.minor);
    c.tlsData.putInt16(record.fragment.length());
    c.tlsData.putBuffer(c.records[i].fragment);
  }
  c.records = [];
  return c.tlsDataReady(c);
};
var _certErrorToAlertDesc = function(error) {
  switch (error) {
    case true:
      return true;
    case forge$8.pki.certificateError.bad_certificate:
      return tls$1.Alert.Description.bad_certificate;
    case forge$8.pki.certificateError.unsupported_certificate:
      return tls$1.Alert.Description.unsupported_certificate;
    case forge$8.pki.certificateError.certificate_revoked:
      return tls$1.Alert.Description.certificate_revoked;
    case forge$8.pki.certificateError.certificate_expired:
      return tls$1.Alert.Description.certificate_expired;
    case forge$8.pki.certificateError.certificate_unknown:
      return tls$1.Alert.Description.certificate_unknown;
    case forge$8.pki.certificateError.unknown_ca:
      return tls$1.Alert.Description.unknown_ca;
    default:
      return tls$1.Alert.Description.bad_certificate;
  }
};
var _alertDescToCertError = function(desc) {
  switch (desc) {
    case true:
      return true;
    case tls$1.Alert.Description.bad_certificate:
      return forge$8.pki.certificateError.bad_certificate;
    case tls$1.Alert.Description.unsupported_certificate:
      return forge$8.pki.certificateError.unsupported_certificate;
    case tls$1.Alert.Description.certificate_revoked:
      return forge$8.pki.certificateError.certificate_revoked;
    case tls$1.Alert.Description.certificate_expired:
      return forge$8.pki.certificateError.certificate_expired;
    case tls$1.Alert.Description.certificate_unknown:
      return forge$8.pki.certificateError.certificate_unknown;
    case tls$1.Alert.Description.unknown_ca:
      return forge$8.pki.certificateError.unknown_ca;
    default:
      return forge$8.pki.certificateError.bad_certificate;
  }
};
tls$1.verifyCertificateChain = function(c, chain) {
  try {
    var options = {};
    for (var key in c.verifyOptions) {
      options[key] = c.verifyOptions[key];
    }
    options.verify = function(vfd, depth, chain2) {
      var desc = _certErrorToAlertDesc(vfd);
      var ret = c.verify(c, vfd, depth, chain2);
      if (ret !== true) {
        if (typeof ret === "object" && !forge$8.util.isArray(ret)) {
          var error = new Error("The application rejected the certificate.");
          error.send = true;
          error.alert = {
            level: tls$1.Alert.Level.fatal,
            description: tls$1.Alert.Description.bad_certificate
          };
          if (ret.message) {
            error.message = ret.message;
          }
          if (ret.alert) {
            error.alert.description = ret.alert;
          }
          throw error;
        }
        if (ret !== vfd) {
          ret = _alertDescToCertError(ret);
        }
      }
      return ret;
    };
    forge$8.pki.verifyCertificateChain(c.caStore, chain, options);
  } catch (ex) {
    var err = ex;
    if (typeof err !== "object" || forge$8.util.isArray(err)) {
      err = {
        send: true,
        alert: {
          level: tls$1.Alert.Level.fatal,
          description: _certErrorToAlertDesc(ex)
        }
      };
    }
    if (!("send" in err)) {
      err.send = true;
    }
    if (!("alert" in err)) {
      err.alert = {
        level: tls$1.Alert.Level.fatal,
        description: _certErrorToAlertDesc(err.error)
      };
    }
    c.error(c, err);
  }
  return !c.fail;
};
tls$1.createSessionCache = function(cache, capacity) {
  var rval = null;
  if (cache && cache.getSession && cache.setSession && cache.order) {
    rval = cache;
  } else {
    rval = {};
    rval.cache = cache || {};
    rval.capacity = Math.max(capacity || 100, 1);
    rval.order = [];
    for (var key in cache) {
      if (rval.order.length <= capacity) {
        rval.order.push(key);
      } else {
        delete cache[key];
      }
    }
    rval.getSession = function(sessionId) {
      var session = null;
      var key2 = null;
      if (sessionId) {
        key2 = forge$8.util.bytesToHex(sessionId);
      } else if (rval.order.length > 0) {
        key2 = rval.order[0];
      }
      if (key2 !== null && key2 in rval.cache) {
        session = rval.cache[key2];
        delete rval.cache[key2];
        for (var i in rval.order) {
          if (rval.order[i] === key2) {
            rval.order.splice(i, 1);
            break;
          }
        }
      }
      return session;
    };
    rval.setSession = function(sessionId, session) {
      if (rval.order.length === rval.capacity) {
        var key2 = rval.order.shift();
        delete rval.cache[key2];
      }
      var key2 = forge$8.util.bytesToHex(sessionId);
      rval.order.push(key2);
      rval.cache[key2] = session;
    };
  }
  return rval;
};
tls$1.createConnection = function(options) {
  var caStore = null;
  if (options.caStore) {
    if (forge$8.util.isArray(options.caStore)) {
      caStore = forge$8.pki.createCaStore(options.caStore);
    } else {
      caStore = options.caStore;
    }
  } else {
    caStore = forge$8.pki.createCaStore();
  }
  var cipherSuites = options.cipherSuites || null;
  if (cipherSuites === null) {
    cipherSuites = [];
    for (var key in tls$1.CipherSuites) {
      cipherSuites.push(tls$1.CipherSuites[key]);
    }
  }
  var entity = options.server || false ? tls$1.ConnectionEnd.server : tls$1.ConnectionEnd.client;
  var sessionCache = options.sessionCache ? tls$1.createSessionCache(options.sessionCache) : null;
  var c = {
    version: { major: tls$1.Version.major, minor: tls$1.Version.minor },
    entity,
    sessionId: options.sessionId,
    caStore,
    sessionCache,
    cipherSuites,
    connected: options.connected,
    virtualHost: options.virtualHost || null,
    verifyClient: options.verifyClient || false,
    verify: options.verify || function(cn, vfd, dpth, cts) {
      return vfd;
    },
    verifyOptions: options.verifyOptions || {},
    getCertificate: options.getCertificate || null,
    getPrivateKey: options.getPrivateKey || null,
    getSignature: options.getSignature || null,
    input: forge$8.util.createBuffer(),
    tlsData: forge$8.util.createBuffer(),
    data: forge$8.util.createBuffer(),
    tlsDataReady: options.tlsDataReady,
    dataReady: options.dataReady,
    heartbeatReceived: options.heartbeatReceived,
    closed: options.closed,
    error: function(c2, ex) {
      ex.origin = ex.origin || (c2.entity === tls$1.ConnectionEnd.client ? "client" : "server");
      if (ex.send) {
        tls$1.queue(c2, tls$1.createAlert(c2, ex.alert));
        tls$1.flush(c2);
      }
      var fatal = ex.fatal !== false;
      if (fatal) {
        c2.fail = true;
      }
      options.error(c2, ex);
      if (fatal) {
        c2.close(false);
      }
    },
    deflate: options.deflate || null,
    inflate: options.inflate || null
  };
  c.reset = function(clearFail) {
    c.version = { major: tls$1.Version.major, minor: tls$1.Version.minor };
    c.record = null;
    c.session = null;
    c.peerCertificate = null;
    c.state = {
      pending: null,
      current: null
    };
    c.expect = c.entity === tls$1.ConnectionEnd.client ? SHE : CHE;
    c.fragmented = null;
    c.records = [];
    c.open = false;
    c.handshakes = 0;
    c.handshaking = false;
    c.isConnected = false;
    c.fail = !(clearFail || typeof clearFail === "undefined");
    c.input.clear();
    c.tlsData.clear();
    c.data.clear();
    c.state.current = tls$1.createConnectionState(c);
  };
  c.reset();
  var _update2 = function(c2, record) {
    var aligned = record.type - tls$1.ContentType.change_cipher_spec;
    var handlers = ctTable[c2.entity][c2.expect];
    if (aligned in handlers) {
      handlers[aligned](c2, record);
    } else {
      tls$1.handleUnexpected(c2, record);
    }
  };
  var _readRecordHeader = function(c2) {
    var rval = 0;
    var b = c2.input;
    var len = b.length();
    if (len < 5) {
      rval = 5 - len;
    } else {
      c2.record = {
        type: b.getByte(),
        version: {
          major: b.getByte(),
          minor: b.getByte()
        },
        length: b.getInt16(),
        fragment: forge$8.util.createBuffer(),
        ready: false
      };
      var compatibleVersion = c2.record.version.major === c2.version.major;
      if (compatibleVersion && c2.session && c2.session.version) {
        compatibleVersion = c2.record.version.minor === c2.version.minor;
      }
      if (!compatibleVersion) {
        c2.error(c2, {
          message: "Incompatible TLS version.",
          send: true,
          alert: {
            level: tls$1.Alert.Level.fatal,
            description: tls$1.Alert.Description.protocol_version
          }
        });
      }
    }
    return rval;
  };
  var _readRecord = function(c2) {
    var rval = 0;
    var b = c2.input;
    var len = b.length();
    if (len < c2.record.length) {
      rval = c2.record.length - len;
    } else {
      c2.record.fragment.putBytes(b.getBytes(c2.record.length));
      b.compact();
      var s2 = c2.state.current.read;
      if (s2.update(c2, c2.record)) {
        if (c2.fragmented !== null) {
          if (c2.fragmented.type === c2.record.type) {
            c2.fragmented.fragment.putBuffer(c2.record.fragment);
            c2.record = c2.fragmented;
          } else {
            c2.error(c2, {
              message: "Invalid fragmented record.",
              send: true,
              alert: {
                level: tls$1.Alert.Level.fatal,
                description: tls$1.Alert.Description.unexpected_message
              }
            });
          }
        }
        c2.record.ready = true;
      }
    }
    return rval;
  };
  c.handshake = function(sessionId) {
    if (c.entity !== tls$1.ConnectionEnd.client) {
      c.error(c, {
        message: "Cannot initiate handshake as a server.",
        fatal: false
      });
    } else if (c.handshaking) {
      c.error(c, {
        message: "Handshake already in progress.",
        fatal: false
      });
    } else {
      if (c.fail && !c.open && c.handshakes === 0) {
        c.fail = false;
      }
      c.handshaking = true;
      sessionId = sessionId || "";
      var session = null;
      if (sessionId.length > 0) {
        if (c.sessionCache) {
          session = c.sessionCache.getSession(sessionId);
        }
        if (session === null) {
          sessionId = "";
        }
      }
      if (sessionId.length === 0 && c.sessionCache) {
        session = c.sessionCache.getSession();
        if (session !== null) {
          sessionId = session.id;
        }
      }
      c.session = {
        id: sessionId,
        version: null,
        cipherSuite: null,
        compressionMethod: null,
        serverCertificate: null,
        certificateRequest: null,
        clientCertificate: null,
        sp: {},
        md5: forge$8.md.md5.create(),
        sha1: forge$8.md.sha1.create()
      };
      if (session) {
        c.version = session.version;
        c.session.sp = session.sp;
      }
      c.session.sp.client_random = tls$1.createRandom().getBytes();
      c.open = true;
      tls$1.queue(c, tls$1.createRecord(c, {
        type: tls$1.ContentType.handshake,
        data: tls$1.createClientHello(c)
      }));
      tls$1.flush(c);
    }
  };
  c.process = function(data) {
    var rval = 0;
    if (data) {
      c.input.putBytes(data);
    }
    if (!c.fail) {
      if (c.record !== null && c.record.ready && c.record.fragment.isEmpty()) {
        c.record = null;
      }
      if (c.record === null) {
        rval = _readRecordHeader(c);
      }
      if (!c.fail && c.record !== null && !c.record.ready) {
        rval = _readRecord(c);
      }
      if (!c.fail && c.record !== null && c.record.ready) {
        _update2(c, c.record);
      }
    }
    return rval;
  };
  c.prepare = function(data) {
    tls$1.queue(c, tls$1.createRecord(c, {
      type: tls$1.ContentType.application_data,
      data: forge$8.util.createBuffer(data)
    }));
    return tls$1.flush(c);
  };
  c.prepareHeartbeatRequest = function(payload, payloadLength) {
    if (payload instanceof forge$8.util.ByteBuffer) {
      payload = payload.bytes();
    }
    if (typeof payloadLength === "undefined") {
      payloadLength = payload.length;
    }
    c.expectedHeartbeatPayload = payload;
    tls$1.queue(c, tls$1.createRecord(c, {
      type: tls$1.ContentType.heartbeat,
      data: tls$1.createHeartbeat(
        tls$1.HeartbeatMessageType.heartbeat_request,
        payload,
        payloadLength
      )
    }));
    return tls$1.flush(c);
  };
  c.close = function(clearFail) {
    if (!c.fail && c.sessionCache && c.session) {
      var session = {
        id: c.session.id,
        version: c.session.version,
        sp: c.session.sp
      };
      session.sp.keys = null;
      c.sessionCache.setSession(session.id, session);
    }
    if (c.open) {
      c.open = false;
      c.input.clear();
      if (c.isConnected || c.handshaking) {
        c.isConnected = c.handshaking = false;
        tls$1.queue(c, tls$1.createAlert(c, {
          level: tls$1.Alert.Level.warning,
          description: tls$1.Alert.Description.close_notify
        }));
        tls$1.flush(c);
      }
      c.closed(c);
    }
    c.reset(clearFail);
  };
  return c;
};
forge$8.tls = forge$8.tls || {};
for (var key in tls$1) {
  if (typeof tls$1[key] !== "function") {
    forge$8.tls[key] = tls$1[key];
  }
}
forge$8.tls.prf_tls1 = prf_TLS1;
forge$8.tls.hmac_sha1 = hmac_sha1;
forge$8.tls.createSessionCache = tls$1.createSessionCache;
forge$8.tls.createConnection = tls$1.createConnection;
var forge$7 = forge$C;
var tls = forge$7.tls;
tls.CipherSuites["TLS_RSA_WITH_AES_128_CBC_SHA"] = {
  id: [0, 47],
  name: "TLS_RSA_WITH_AES_128_CBC_SHA",
  initSecurityParameters: function(sp) {
    sp.bulk_cipher_algorithm = tls.BulkCipherAlgorithm.aes;
    sp.cipher_type = tls.CipherType.block;
    sp.enc_key_length = 16;
    sp.block_length = 16;
    sp.fixed_iv_length = 16;
    sp.record_iv_length = 16;
    sp.mac_algorithm = tls.MACAlgorithm.hmac_sha1;
    sp.mac_length = 20;
    sp.mac_key_length = 20;
  },
  initConnectionState
};
tls.CipherSuites["TLS_RSA_WITH_AES_256_CBC_SHA"] = {
  id: [0, 53],
  name: "TLS_RSA_WITH_AES_256_CBC_SHA",
  initSecurityParameters: function(sp) {
    sp.bulk_cipher_algorithm = tls.BulkCipherAlgorithm.aes;
    sp.cipher_type = tls.CipherType.block;
    sp.enc_key_length = 32;
    sp.block_length = 16;
    sp.fixed_iv_length = 16;
    sp.record_iv_length = 16;
    sp.mac_algorithm = tls.MACAlgorithm.hmac_sha1;
    sp.mac_length = 20;
    sp.mac_key_length = 20;
  },
  initConnectionState
};
function initConnectionState(state, c, sp) {
  var client = c.entity === forge$7.tls.ConnectionEnd.client;
  state.read.cipherState = {
    init: false,
    cipher: forge$7.cipher.createDecipher("AES-CBC", client ? sp.keys.server_write_key : sp.keys.client_write_key),
    iv: client ? sp.keys.server_write_IV : sp.keys.client_write_IV
  };
  state.write.cipherState = {
    init: false,
    cipher: forge$7.cipher.createCipher("AES-CBC", client ? sp.keys.client_write_key : sp.keys.server_write_key),
    iv: client ? sp.keys.client_write_IV : sp.keys.server_write_IV
  };
  state.read.cipherFunction = decrypt_aes_cbc_sha1;
  state.write.cipherFunction = encrypt_aes_cbc_sha1;
  state.read.macLength = state.write.macLength = sp.mac_length;
  state.read.macFunction = state.write.macFunction = tls.hmac_sha1;
}
function encrypt_aes_cbc_sha1(record, s2) {
  var rval = false;
  var mac = s2.macFunction(s2.macKey, s2.sequenceNumber, record);
  record.fragment.putBytes(mac);
  s2.updateSequenceNumber();
  var iv;
  if (record.version.minor === tls.Versions.TLS_1_0.minor) {
    iv = s2.cipherState.init ? null : s2.cipherState.iv;
  } else {
    iv = forge$7.random.getBytesSync(16);
  }
  s2.cipherState.init = true;
  var cipher = s2.cipherState.cipher;
  cipher.start({ iv });
  if (record.version.minor >= tls.Versions.TLS_1_1.minor) {
    cipher.output.putBytes(iv);
  }
  cipher.update(record.fragment);
  if (cipher.finish(encrypt_aes_cbc_sha1_padding)) {
    record.fragment = cipher.output;
    record.length = record.fragment.length();
    rval = true;
  }
  return rval;
}
function encrypt_aes_cbc_sha1_padding(blockSize, input, decrypt) {
  if (!decrypt) {
    var padding = blockSize - input.length() % blockSize;
    input.fillWithByte(padding - 1, padding);
  }
  return true;
}
function decrypt_aes_cbc_sha1_padding(blockSize, output, decrypt) {
  var rval = true;
  if (decrypt) {
    var len = output.length();
    var paddingLength = output.last();
    for (var i = len - 1 - paddingLength; i < len - 1; ++i) {
      rval = rval && output.at(i) == paddingLength;
    }
    if (rval) {
      output.truncate(paddingLength + 1);
    }
  }
  return rval;
}
function decrypt_aes_cbc_sha1(record, s2) {
  var rval = false;
  var iv;
  if (record.version.minor === tls.Versions.TLS_1_0.minor) {
    iv = s2.cipherState.init ? null : s2.cipherState.iv;
  } else {
    iv = record.fragment.getBytes(16);
  }
  s2.cipherState.init = true;
  var cipher = s2.cipherState.cipher;
  cipher.start({ iv });
  cipher.update(record.fragment);
  rval = cipher.finish(decrypt_aes_cbc_sha1_padding);
  var macLen = s2.macLength;
  var mac = forge$7.random.getBytesSync(macLen);
  var len = cipher.output.length();
  if (len >= macLen) {
    record.fragment = cipher.output.getBytes(len - macLen);
    mac = cipher.output.getBytes(macLen);
  } else {
    record.fragment = cipher.output.getBytes();
  }
  record.fragment = forge$7.util.createBuffer(record.fragment);
  record.length = record.fragment.length();
  var mac2 = s2.macFunction(s2.macKey, s2.sequenceNumber, record);
  s2.updateSequenceNumber();
  rval = compareMacs(s2.macKey, mac, mac2) && rval;
  return rval;
}
function compareMacs(key, mac1, mac2) {
  var hmac2 = forge$7.hmac.create();
  hmac2.start("SHA1", key);
  hmac2.update(mac1);
  mac1 = hmac2.digest().getBytes();
  hmac2.start(null, null);
  hmac2.update(mac2);
  mac2 = hmac2.digest().getBytes();
  return mac1 === mac2;
}
var forge$6 = forge$C;
var sha512$1 = forge$6.sha512 = forge$6.sha512 || {};
forge$6.md.sha512 = forge$6.md.algorithms.sha512 = sha512$1;
var sha384 = forge$6.sha384 = forge$6.sha512.sha384 = forge$6.sha512.sha384 || {};
sha384.create = function() {
  return sha512$1.create("SHA-384");
};
forge$6.md.sha384 = forge$6.md.algorithms.sha384 = sha384;
forge$6.sha512.sha256 = forge$6.sha512.sha256 || {
  create: function() {
    return sha512$1.create("SHA-512/256");
  }
};
forge$6.md["sha512/256"] = forge$6.md.algorithms["sha512/256"] = forge$6.sha512.sha256;
forge$6.sha512.sha224 = forge$6.sha512.sha224 || {
  create: function() {
    return sha512$1.create("SHA-512/224");
  }
};
forge$6.md["sha512/224"] = forge$6.md.algorithms["sha512/224"] = forge$6.sha512.sha224;
sha512$1.create = function(algorithm) {
  if (!_initialized) {
    _init();
  }
  if (typeof algorithm === "undefined") {
    algorithm = "SHA-512";
  }
  if (!(algorithm in _states)) {
    throw new Error("Invalid SHA-512 algorithm: " + algorithm);
  }
  var _state = _states[algorithm];
  var _h = null;
  var _input = forge$6.util.createBuffer();
  var _w = new Array(80);
  for (var wi = 0; wi < 80; ++wi) {
    _w[wi] = new Array(2);
  }
  var digestLength = 64;
  switch (algorithm) {
    case "SHA-384":
      digestLength = 48;
      break;
    case "SHA-512/256":
      digestLength = 32;
      break;
    case "SHA-512/224":
      digestLength = 28;
      break;
  }
  var md = {
    // SHA-512 => sha512
    algorithm: algorithm.replace("-", "").toLowerCase(),
    blockLength: 128,
    digestLength,
    // 56-bit length of message so far (does not including padding)
    messageLength: 0,
    // true message length
    fullMessageLength: null,
    // size of message length in bytes
    messageLengthSize: 16
  };
  md.start = function() {
    md.messageLength = 0;
    md.fullMessageLength = md.messageLength128 = [];
    var int32s = md.messageLengthSize / 4;
    for (var i = 0; i < int32s; ++i) {
      md.fullMessageLength.push(0);
    }
    _input = forge$6.util.createBuffer();
    _h = new Array(_state.length);
    for (var i = 0; i < _state.length; ++i) {
      _h[i] = _state[i].slice(0);
    }
    return md;
  };
  md.start();
  md.update = function(msg, encoding) {
    if (encoding === "utf8") {
      msg = forge$6.util.encodeUtf8(msg);
    }
    var len = msg.length;
    md.messageLength += len;
    len = [len / 4294967296 >>> 0, len >>> 0];
    for (var i = md.fullMessageLength.length - 1; i >= 0; --i) {
      md.fullMessageLength[i] += len[1];
      len[1] = len[0] + (md.fullMessageLength[i] / 4294967296 >>> 0);
      md.fullMessageLength[i] = md.fullMessageLength[i] >>> 0;
      len[0] = len[1] / 4294967296 >>> 0;
    }
    _input.putBytes(msg);
    _update(_h, _w, _input);
    if (_input.read > 2048 || _input.length() === 0) {
      _input.compact();
    }
    return md;
  };
  md.digest = function() {
    var finalBlock = forge$6.util.createBuffer();
    finalBlock.putBytes(_input.bytes());
    var remaining = md.fullMessageLength[md.fullMessageLength.length - 1] + md.messageLengthSize;
    var overflow = remaining & md.blockLength - 1;
    finalBlock.putBytes(_padding.substr(0, md.blockLength - overflow));
    var next, carry;
    var bits = md.fullMessageLength[0] * 8;
    for (var i = 0; i < md.fullMessageLength.length - 1; ++i) {
      next = md.fullMessageLength[i + 1] * 8;
      carry = next / 4294967296 >>> 0;
      bits += carry;
      finalBlock.putInt32(bits >>> 0);
      bits = next >>> 0;
    }
    finalBlock.putInt32(bits);
    var h = new Array(_h.length);
    for (var i = 0; i < _h.length; ++i) {
      h[i] = _h[i].slice(0);
    }
    _update(h, _w, finalBlock);
    var rval = forge$6.util.createBuffer();
    var hlen;
    if (algorithm === "SHA-512") {
      hlen = h.length;
    } else if (algorithm === "SHA-384") {
      hlen = h.length - 2;
    } else {
      hlen = h.length - 4;
    }
    for (var i = 0; i < hlen; ++i) {
      rval.putInt32(h[i][0]);
      if (i !== hlen - 1 || algorithm !== "SHA-512/224") {
        rval.putInt32(h[i][1]);
      }
    }
    return rval;
  };
  return md;
};
var _padding = null;
var _initialized = false;
var _k = null;
var _states = null;
function _init() {
  _padding = String.fromCharCode(128);
  _padding += forge$6.util.fillString(String.fromCharCode(0), 128);
  _k = [
    [1116352408, 3609767458],
    [1899447441, 602891725],
    [3049323471, 3964484399],
    [3921009573, 2173295548],
    [961987163, 4081628472],
    [1508970993, 3053834265],
    [2453635748, 2937671579],
    [2870763221, 3664609560],
    [3624381080, 2734883394],
    [310598401, 1164996542],
    [607225278, 1323610764],
    [1426881987, 3590304994],
    [1925078388, 4068182383],
    [2162078206, 991336113],
    [2614888103, 633803317],
    [3248222580, 3479774868],
    [3835390401, 2666613458],
    [4022224774, 944711139],
    [264347078, 2341262773],
    [604807628, 2007800933],
    [770255983, 1495990901],
    [1249150122, 1856431235],
    [1555081692, 3175218132],
    [1996064986, 2198950837],
    [2554220882, 3999719339],
    [2821834349, 766784016],
    [2952996808, 2566594879],
    [3210313671, 3203337956],
    [3336571891, 1034457026],
    [3584528711, 2466948901],
    [113926993, 3758326383],
    [338241895, 168717936],
    [666307205, 1188179964],
    [773529912, 1546045734],
    [1294757372, 1522805485],
    [1396182291, 2643833823],
    [1695183700, 2343527390],
    [1986661051, 1014477480],
    [2177026350, 1206759142],
    [2456956037, 344077627],
    [2730485921, 1290863460],
    [2820302411, 3158454273],
    [3259730800, 3505952657],
    [3345764771, 106217008],
    [3516065817, 3606008344],
    [3600352804, 1432725776],
    [4094571909, 1467031594],
    [275423344, 851169720],
    [430227734, 3100823752],
    [506948616, 1363258195],
    [659060556, 3750685593],
    [883997877, 3785050280],
    [958139571, 3318307427],
    [1322822218, 3812723403],
    [1537002063, 2003034995],
    [1747873779, 3602036899],
    [1955562222, 1575990012],
    [2024104815, 1125592928],
    [2227730452, 2716904306],
    [2361852424, 442776044],
    [2428436474, 593698344],
    [2756734187, 3733110249],
    [3204031479, 2999351573],
    [3329325298, 3815920427],
    [3391569614, 3928383900],
    [3515267271, 566280711],
    [3940187606, 3454069534],
    [4118630271, 4000239992],
    [116418474, 1914138554],
    [174292421, 2731055270],
    [289380356, 3203993006],
    [460393269, 320620315],
    [685471733, 587496836],
    [852142971, 1086792851],
    [1017036298, 365543100],
    [1126000580, 2618297676],
    [1288033470, 3409855158],
    [1501505948, 4234509866],
    [1607167915, 987167468],
    [1816402316, 1246189591]
  ];
  _states = {};
  _states["SHA-512"] = [
    [1779033703, 4089235720],
    [3144134277, 2227873595],
    [1013904242, 4271175723],
    [2773480762, 1595750129],
    [1359893119, 2917565137],
    [2600822924, 725511199],
    [528734635, 4215389547],
    [1541459225, 327033209]
  ];
  _states["SHA-384"] = [
    [3418070365, 3238371032],
    [1654270250, 914150663],
    [2438529370, 812702999],
    [355462360, 4144912697],
    [1731405415, 4290775857],
    [2394180231, 1750603025],
    [3675008525, 1694076839],
    [1203062813, 3204075428]
  ];
  _states["SHA-512/256"] = [
    [573645204, 4230739756],
    [2673172387, 3360449730],
    [596883563, 1867755857],
    [2520282905, 1497426621],
    [2519219938, 2827943907],
    [3193839141, 1401305490],
    [721525244, 746961066],
    [246885852, 2177182882]
  ];
  _states["SHA-512/224"] = [
    [2352822216, 424955298],
    [1944164710, 2312950998],
    [502970286, 855612546],
    [1738396948, 1479516111],
    [258812777, 2077511080],
    [2011393907, 79989058],
    [1067287976, 1780299464],
    [286451373, 2446758561]
  ];
  _initialized = true;
}
function _update(s2, w, bytes) {
  var t1_hi, t1_lo;
  var t2_hi, t2_lo;
  var s0_hi, s0_lo;
  var s1_hi, s1_lo;
  var ch_hi, ch_lo;
  var maj_hi, maj_lo;
  var a_hi, a_lo;
  var b_hi, b_lo;
  var c_hi, c_lo;
  var d_hi, d_lo;
  var e_hi, e_lo;
  var f_hi, f_lo;
  var g_hi, g_lo;
  var h_hi, h_lo;
  var i, hi, lo, w2, w7, w15, w16;
  var len = bytes.length();
  while (len >= 128) {
    for (i = 0; i < 16; ++i) {
      w[i][0] = bytes.getInt32() >>> 0;
      w[i][1] = bytes.getInt32() >>> 0;
    }
    for (; i < 80; ++i) {
      w2 = w[i - 2];
      hi = w2[0];
      lo = w2[1];
      t1_hi = ((hi >>> 19 | lo << 13) ^ // ROTR 19
      (lo >>> 29 | hi << 3) ^ // ROTR 61/(swap + ROTR 29)
      hi >>> 6) >>> 0;
      t1_lo = ((hi << 13 | lo >>> 19) ^ // ROTR 19
      (lo << 3 | hi >>> 29) ^ // ROTR 61/(swap + ROTR 29)
      (hi << 26 | lo >>> 6)) >>> 0;
      w15 = w[i - 15];
      hi = w15[0];
      lo = w15[1];
      t2_hi = ((hi >>> 1 | lo << 31) ^ // ROTR 1
      (hi >>> 8 | lo << 24) ^ // ROTR 8
      hi >>> 7) >>> 0;
      t2_lo = ((hi << 31 | lo >>> 1) ^ // ROTR 1
      (hi << 24 | lo >>> 8) ^ // ROTR 8
      (hi << 25 | lo >>> 7)) >>> 0;
      w7 = w[i - 7];
      w16 = w[i - 16];
      lo = t1_lo + w7[1] + t2_lo + w16[1];
      w[i][0] = t1_hi + w7[0] + t2_hi + w16[0] + (lo / 4294967296 >>> 0) >>> 0;
      w[i][1] = lo >>> 0;
    }
    a_hi = s2[0][0];
    a_lo = s2[0][1];
    b_hi = s2[1][0];
    b_lo = s2[1][1];
    c_hi = s2[2][0];
    c_lo = s2[2][1];
    d_hi = s2[3][0];
    d_lo = s2[3][1];
    e_hi = s2[4][0];
    e_lo = s2[4][1];
    f_hi = s2[5][0];
    f_lo = s2[5][1];
    g_hi = s2[6][0];
    g_lo = s2[6][1];
    h_hi = s2[7][0];
    h_lo = s2[7][1];
    for (i = 0; i < 80; ++i) {
      s1_hi = ((e_hi >>> 14 | e_lo << 18) ^ // ROTR 14
      (e_hi >>> 18 | e_lo << 14) ^ // ROTR 18
      (e_lo >>> 9 | e_hi << 23)) >>> 0;
      s1_lo = ((e_hi << 18 | e_lo >>> 14) ^ // ROTR 14
      (e_hi << 14 | e_lo >>> 18) ^ // ROTR 18
      (e_lo << 23 | e_hi >>> 9)) >>> 0;
      ch_hi = (g_hi ^ e_hi & (f_hi ^ g_hi)) >>> 0;
      ch_lo = (g_lo ^ e_lo & (f_lo ^ g_lo)) >>> 0;
      s0_hi = ((a_hi >>> 28 | a_lo << 4) ^ // ROTR 28
      (a_lo >>> 2 | a_hi << 30) ^ // ROTR 34/(swap + ROTR 2)
      (a_lo >>> 7 | a_hi << 25)) >>> 0;
      s0_lo = ((a_hi << 4 | a_lo >>> 28) ^ // ROTR 28
      (a_lo << 30 | a_hi >>> 2) ^ // ROTR 34/(swap + ROTR 2)
      (a_lo << 25 | a_hi >>> 7)) >>> 0;
      maj_hi = (a_hi & b_hi | c_hi & (a_hi ^ b_hi)) >>> 0;
      maj_lo = (a_lo & b_lo | c_lo & (a_lo ^ b_lo)) >>> 0;
      lo = h_lo + s1_lo + ch_lo + _k[i][1] + w[i][1];
      t1_hi = h_hi + s1_hi + ch_hi + _k[i][0] + w[i][0] + (lo / 4294967296 >>> 0) >>> 0;
      t1_lo = lo >>> 0;
      lo = s0_lo + maj_lo;
      t2_hi = s0_hi + maj_hi + (lo / 4294967296 >>> 0) >>> 0;
      t2_lo = lo >>> 0;
      h_hi = g_hi;
      h_lo = g_lo;
      g_hi = f_hi;
      g_lo = f_lo;
      f_hi = e_hi;
      f_lo = e_lo;
      lo = d_lo + t1_lo;
      e_hi = d_hi + t1_hi + (lo / 4294967296 >>> 0) >>> 0;
      e_lo = lo >>> 0;
      d_hi = c_hi;
      d_lo = c_lo;
      c_hi = b_hi;
      c_lo = b_lo;
      b_hi = a_hi;
      b_lo = a_lo;
      lo = t1_lo + t2_lo;
      a_hi = t1_hi + t2_hi + (lo / 4294967296 >>> 0) >>> 0;
      a_lo = lo >>> 0;
    }
    lo = s2[0][1] + a_lo;
    s2[0][0] = s2[0][0] + a_hi + (lo / 4294967296 >>> 0) >>> 0;
    s2[0][1] = lo >>> 0;
    lo = s2[1][1] + b_lo;
    s2[1][0] = s2[1][0] + b_hi + (lo / 4294967296 >>> 0) >>> 0;
    s2[1][1] = lo >>> 0;
    lo = s2[2][1] + c_lo;
    s2[2][0] = s2[2][0] + c_hi + (lo / 4294967296 >>> 0) >>> 0;
    s2[2][1] = lo >>> 0;
    lo = s2[3][1] + d_lo;
    s2[3][0] = s2[3][0] + d_hi + (lo / 4294967296 >>> 0) >>> 0;
    s2[3][1] = lo >>> 0;
    lo = s2[4][1] + e_lo;
    s2[4][0] = s2[4][0] + e_hi + (lo / 4294967296 >>> 0) >>> 0;
    s2[4][1] = lo >>> 0;
    lo = s2[5][1] + f_lo;
    s2[5][0] = s2[5][0] + f_hi + (lo / 4294967296 >>> 0) >>> 0;
    s2[5][1] = lo >>> 0;
    lo = s2[6][1] + g_lo;
    s2[6][0] = s2[6][0] + g_hi + (lo / 4294967296 >>> 0) >>> 0;
    s2[6][1] = lo >>> 0;
    lo = s2[7][1] + h_lo;
    s2[7][0] = s2[7][0] + h_hi + (lo / 4294967296 >>> 0) >>> 0;
    s2[7][1] = lo >>> 0;
    len -= 128;
  }
}
var asn1Validator$1 = {};
var forge$5 = forge$C;
var asn1$1 = forge$5.asn1;
asn1Validator$1.privateKeyValidator = {
  // PrivateKeyInfo
  name: "PrivateKeyInfo",
  tagClass: asn1$1.Class.UNIVERSAL,
  type: asn1$1.Type.SEQUENCE,
  constructed: true,
  value: [{
    // Version (INTEGER)
    name: "PrivateKeyInfo.version",
    tagClass: asn1$1.Class.UNIVERSAL,
    type: asn1$1.Type.INTEGER,
    constructed: false,
    capture: "privateKeyVersion"
  }, {
    // privateKeyAlgorithm
    name: "PrivateKeyInfo.privateKeyAlgorithm",
    tagClass: asn1$1.Class.UNIVERSAL,
    type: asn1$1.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "AlgorithmIdentifier.algorithm",
      tagClass: asn1$1.Class.UNIVERSAL,
      type: asn1$1.Type.OID,
      constructed: false,
      capture: "privateKeyOid"
    }]
  }, {
    // PrivateKey
    name: "PrivateKeyInfo",
    tagClass: asn1$1.Class.UNIVERSAL,
    type: asn1$1.Type.OCTETSTRING,
    constructed: false,
    capture: "privateKey"
  }]
};
asn1Validator$1.publicKeyValidator = {
  name: "SubjectPublicKeyInfo",
  tagClass: asn1$1.Class.UNIVERSAL,
  type: asn1$1.Type.SEQUENCE,
  constructed: true,
  captureAsn1: "subjectPublicKeyInfo",
  value: [
    {
      name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
      tagClass: asn1$1.Class.UNIVERSAL,
      type: asn1$1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "AlgorithmIdentifier.algorithm",
        tagClass: asn1$1.Class.UNIVERSAL,
        type: asn1$1.Type.OID,
        constructed: false,
        capture: "publicKeyOid"
      }]
    },
    // capture group for ed25519PublicKey
    {
      tagClass: asn1$1.Class.UNIVERSAL,
      type: asn1$1.Type.BITSTRING,
      constructed: false,
      composed: true,
      captureBitStringValue: "ed25519PublicKey"
    }
    // FIXME: this is capture group for rsaPublicKey, use it in this API or
    // discard?
    /* {
      // subjectPublicKey
      name: 'SubjectPublicKeyInfo.subjectPublicKey',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.BITSTRING,
      constructed: false,
      value: [{
        // RSAPublicKey
        name: 'SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        optional: true,
        captureAsn1: 'rsaPublicKey'
      }]
    } */
  ]
};
var forge$4 = forge$C;
var asn1Validator = asn1Validator$1;
var publicKeyValidator = asn1Validator.publicKeyValidator;
var privateKeyValidator = asn1Validator.privateKeyValidator;
if (typeof BigInteger$1 === "undefined") {
  var BigInteger$1 = forge$4.jsbn.BigInteger;
}
var ByteBuffer = forge$4.util.ByteBuffer;
var NativeBuffer = typeof Buffer === "undefined" ? Uint8Array : Buffer;
forge$4.pki = forge$4.pki || {};
forge$4.pki.ed25519 = forge$4.ed25519 = forge$4.ed25519 || {};
var ed25519 = forge$4.ed25519;
ed25519.constants = {};
ed25519.constants.PUBLIC_KEY_BYTE_LENGTH = 32;
ed25519.constants.PRIVATE_KEY_BYTE_LENGTH = 64;
ed25519.constants.SEED_BYTE_LENGTH = 32;
ed25519.constants.SIGN_BYTE_LENGTH = 64;
ed25519.constants.HASH_BYTE_LENGTH = 64;
ed25519.generateKeyPair = function(options) {
  options = options || {};
  var seed = options.seed;
  if (seed === void 0) {
    seed = forge$4.random.getBytesSync(ed25519.constants.SEED_BYTE_LENGTH);
  } else if (typeof seed === "string") {
    if (seed.length !== ed25519.constants.SEED_BYTE_LENGTH) {
      throw new TypeError(
        '"seed" must be ' + ed25519.constants.SEED_BYTE_LENGTH + " bytes in length."
      );
    }
  } else if (!(seed instanceof Uint8Array)) {
    throw new TypeError(
      '"seed" must be a node.js Buffer, Uint8Array, or a binary string.'
    );
  }
  seed = messageToNativeBuffer({ message: seed, encoding: "binary" });
  var pk = new NativeBuffer(ed25519.constants.PUBLIC_KEY_BYTE_LENGTH);
  var sk = new NativeBuffer(ed25519.constants.PRIVATE_KEY_BYTE_LENGTH);
  for (var i = 0; i < 32; ++i) {
    sk[i] = seed[i];
  }
  crypto_sign_keypair(pk, sk);
  return { publicKey: pk, privateKey: sk };
};
ed25519.privateKeyFromAsn1 = function(obj) {
  var capture = {};
  var errors = [];
  var valid = forge$4.asn1.validate(obj, privateKeyValidator, capture, errors);
  if (!valid) {
    var error = new Error("Invalid Key.");
    error.errors = errors;
    throw error;
  }
  var oid = forge$4.asn1.derToOid(capture.privateKeyOid);
  var ed25519Oid = forge$4.oids.EdDSA25519;
  if (oid !== ed25519Oid) {
    throw new Error('Invalid OID "' + oid + '"; OID must be "' + ed25519Oid + '".');
  }
  var privateKey = capture.privateKey;
  var privateKeyBytes = messageToNativeBuffer({
    message: forge$4.asn1.fromDer(privateKey).value,
    encoding: "binary"
  });
  return { privateKeyBytes };
};
ed25519.publicKeyFromAsn1 = function(obj) {
  var capture = {};
  var errors = [];
  var valid = forge$4.asn1.validate(obj, publicKeyValidator, capture, errors);
  if (!valid) {
    var error = new Error("Invalid Key.");
    error.errors = errors;
    throw error;
  }
  var oid = forge$4.asn1.derToOid(capture.publicKeyOid);
  var ed25519Oid = forge$4.oids.EdDSA25519;
  if (oid !== ed25519Oid) {
    throw new Error('Invalid OID "' + oid + '"; OID must be "' + ed25519Oid + '".');
  }
  var publicKeyBytes = capture.ed25519PublicKey;
  if (publicKeyBytes.length !== ed25519.constants.PUBLIC_KEY_BYTE_LENGTH) {
    throw new Error("Key length is invalid.");
  }
  return messageToNativeBuffer({
    message: publicKeyBytes,
    encoding: "binary"
  });
};
ed25519.publicKeyFromPrivateKey = function(options) {
  options = options || {};
  var privateKey = messageToNativeBuffer({
    message: options.privateKey,
    encoding: "binary"
  });
  if (privateKey.length !== ed25519.constants.PRIVATE_KEY_BYTE_LENGTH) {
    throw new TypeError(
      '"options.privateKey" must have a byte length of ' + ed25519.constants.PRIVATE_KEY_BYTE_LENGTH
    );
  }
  var pk = new NativeBuffer(ed25519.constants.PUBLIC_KEY_BYTE_LENGTH);
  for (var i = 0; i < pk.length; ++i) {
    pk[i] = privateKey[32 + i];
  }
  return pk;
};
ed25519.sign = function(options) {
  options = options || {};
  var msg = messageToNativeBuffer(options);
  var privateKey = messageToNativeBuffer({
    message: options.privateKey,
    encoding: "binary"
  });
  if (privateKey.length === ed25519.constants.SEED_BYTE_LENGTH) {
    var keyPair = ed25519.generateKeyPair({ seed: privateKey });
    privateKey = keyPair.privateKey;
  } else if (privateKey.length !== ed25519.constants.PRIVATE_KEY_BYTE_LENGTH) {
    throw new TypeError(
      '"options.privateKey" must have a byte length of ' + ed25519.constants.SEED_BYTE_LENGTH + " or " + ed25519.constants.PRIVATE_KEY_BYTE_LENGTH
    );
  }
  var signedMsg = new NativeBuffer(
    ed25519.constants.SIGN_BYTE_LENGTH + msg.length
  );
  crypto_sign(signedMsg, msg, msg.length, privateKey);
  var sig = new NativeBuffer(ed25519.constants.SIGN_BYTE_LENGTH);
  for (var i = 0; i < sig.length; ++i) {
    sig[i] = signedMsg[i];
  }
  return sig;
};
ed25519.verify = function(options) {
  options = options || {};
  var msg = messageToNativeBuffer(options);
  if (options.signature === void 0) {
    throw new TypeError(
      '"options.signature" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a binary string.'
    );
  }
  var sig = messageToNativeBuffer({
    message: options.signature,
    encoding: "binary"
  });
  if (sig.length !== ed25519.constants.SIGN_BYTE_LENGTH) {
    throw new TypeError(
      '"options.signature" must have a byte length of ' + ed25519.constants.SIGN_BYTE_LENGTH
    );
  }
  var publicKey = messageToNativeBuffer({
    message: options.publicKey,
    encoding: "binary"
  });
  if (publicKey.length !== ed25519.constants.PUBLIC_KEY_BYTE_LENGTH) {
    throw new TypeError(
      '"options.publicKey" must have a byte length of ' + ed25519.constants.PUBLIC_KEY_BYTE_LENGTH
    );
  }
  var sm = new NativeBuffer(ed25519.constants.SIGN_BYTE_LENGTH + msg.length);
  var m = new NativeBuffer(ed25519.constants.SIGN_BYTE_LENGTH + msg.length);
  var i;
  for (i = 0; i < ed25519.constants.SIGN_BYTE_LENGTH; ++i) {
    sm[i] = sig[i];
  }
  for (i = 0; i < msg.length; ++i) {
    sm[i + ed25519.constants.SIGN_BYTE_LENGTH] = msg[i];
  }
  return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
};
function messageToNativeBuffer(options) {
  var message = options.message;
  if (message instanceof Uint8Array || message instanceof NativeBuffer) {
    return message;
  }
  var encoding = options.encoding;
  if (message === void 0) {
    if (options.md) {
      message = options.md.digest().getBytes();
      encoding = "binary";
    } else {
      throw new TypeError('"options.message" or "options.md" not specified.');
    }
  }
  if (typeof message === "string" && !encoding) {
    throw new TypeError('"options.encoding" must be "binary" or "utf8".');
  }
  if (typeof message === "string") {
    if (typeof Buffer !== "undefined") {
      return Buffer.from(message, encoding);
    }
    message = new ByteBuffer(message, encoding);
  } else if (!(message instanceof ByteBuffer)) {
    throw new TypeError(
      '"options.message" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a string with "options.encoding" specifying its encoding.'
    );
  }
  var buffer = new NativeBuffer(message.length());
  for (var i = 0; i < buffer.length; ++i) {
    buffer[i] = message.at(i);
  }
  return buffer;
}
var gf0 = gf();
var gf1 = gf([1]);
var D = gf([
  30883,
  4953,
  19914,
  30187,
  55467,
  16705,
  2637,
  112,
  59544,
  30585,
  16505,
  36039,
  65139,
  11119,
  27886,
  20995
]);
var D2 = gf([
  61785,
  9906,
  39828,
  60374,
  45398,
  33411,
  5274,
  224,
  53552,
  61171,
  33010,
  6542,
  64743,
  22239,
  55772,
  9222
]);
var X = gf([
  54554,
  36645,
  11616,
  51542,
  42930,
  38181,
  51040,
  26924,
  56412,
  64982,
  57905,
  49316,
  21502,
  52590,
  14035,
  8553
]);
var Y = gf([
  26200,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214
]);
var L = new Float64Array([
  237,
  211,
  245,
  92,
  26,
  99,
  18,
  88,
  214,
  156,
  247,
  162,
  222,
  249,
  222,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  16
]);
var I = gf([
  41136,
  18958,
  6951,
  50414,
  58488,
  44335,
  6150,
  12099,
  55207,
  15867,
  153,
  11085,
  57099,
  20417,
  9344,
  11139
]);
function sha512(msg, msgLen) {
  var md = forge$4.md.sha512.create();
  var buffer = new ByteBuffer(msg);
  md.update(buffer.getBytes(msgLen), "binary");
  var hash2 = md.digest().getBytes();
  if (typeof Buffer !== "undefined") {
    return Buffer.from(hash2, "binary");
  }
  var out = new NativeBuffer(ed25519.constants.HASH_BYTE_LENGTH);
  for (var i = 0; i < 64; ++i) {
    out[i] = hash2.charCodeAt(i);
  }
  return out;
}
function crypto_sign_keypair(pk, sk) {
  var p = [gf(), gf(), gf(), gf()];
  var i;
  var d = sha512(sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;
  scalarbase(p, d);
  pack(pk, p);
  for (i = 0; i < 32; ++i) {
    sk[i + 32] = pk[i];
  }
  return 0;
}
function crypto_sign(sm, m, n, sk) {
  var i, j, x = new Float64Array(64);
  var p = [gf(), gf(), gf(), gf()];
  var d = sha512(sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;
  var smlen = n + 64;
  for (i = 0; i < n; ++i) {
    sm[64 + i] = m[i];
  }
  for (i = 0; i < 32; ++i) {
    sm[32 + i] = d[32 + i];
  }
  var r = sha512(sm.subarray(32), n + 32);
  reduce(r);
  scalarbase(p, r);
  pack(sm, p);
  for (i = 32; i < 64; ++i) {
    sm[i] = sk[i];
  }
  var h = sha512(sm, n + 64);
  reduce(h);
  for (i = 32; i < 64; ++i) {
    x[i] = 0;
  }
  for (i = 0; i < 32; ++i) {
    x[i] = r[i];
  }
  for (i = 0; i < 32; ++i) {
    for (j = 0; j < 32; j++) {
      x[i + j] += h[i] * d[j];
    }
  }
  modL(sm.subarray(32), x);
  return smlen;
}
function crypto_sign_open(m, sm, n, pk) {
  var i, mlen;
  var t = new NativeBuffer(32);
  var p = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
  mlen = -1;
  if (n < 64) {
    return -1;
  }
  if (unpackneg(q, pk)) {
    return -1;
  }
  for (i = 0; i < n; ++i) {
    m[i] = sm[i];
  }
  for (i = 0; i < 32; ++i) {
    m[i + 32] = pk[i];
  }
  var h = sha512(m, n);
  reduce(h);
  scalarmult(p, q, h);
  scalarbase(q, sm.subarray(32));
  add(p, q);
  pack(t, p);
  n -= 64;
  if (crypto_verify_32(sm, 0, t, 0)) {
    for (i = 0; i < n; ++i) {
      m[i] = 0;
    }
    return -1;
  }
  for (i = 0; i < n; ++i) {
    m[i] = sm[i + 64];
  }
  mlen = n;
  return mlen;
}
function modL(r, x) {
  var carry, i, j, k;
  for (i = 63; i >= 32; --i) {
    carry = 0;
    for (j = i - 32, k = i - 12; j < k; ++j) {
      x[j] += carry - 16 * x[i] * L[j - (i - 32)];
      carry = x[j] + 128 >> 8;
      x[j] -= carry * 256;
    }
    x[j] += carry;
    x[i] = 0;
  }
  carry = 0;
  for (j = 0; j < 32; ++j) {
    x[j] += carry - (x[31] >> 4) * L[j];
    carry = x[j] >> 8;
    x[j] &= 255;
  }
  for (j = 0; j < 32; ++j) {
    x[j] -= carry * L[j];
  }
  for (i = 0; i < 32; ++i) {
    x[i + 1] += x[i] >> 8;
    r[i] = x[i] & 255;
  }
}
function reduce(r) {
  var x = new Float64Array(64);
  for (var i = 0; i < 64; ++i) {
    x[i] = r[i];
    r[i] = 0;
  }
  modL(r, x);
}
function add(p, q) {
  var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
  Z(a, p[1], p[0]);
  Z(t, q[1], q[0]);
  M(a, a, t);
  A(b, p[0], p[1]);
  A(t, q[0], q[1]);
  M(b, b, t);
  M(c, p[3], q[3]);
  M(c, c, D2);
  M(d, p[2], q[2]);
  A(d, d, d);
  Z(e, b, a);
  Z(f, d, c);
  A(g, d, c);
  A(h, b, a);
  M(p[0], e, f);
  M(p[1], h, g);
  M(p[2], g, f);
  M(p[3], e, h);
}
function cswap(p, q, b) {
  for (var i = 0; i < 4; ++i) {
    sel25519(p[i], q[i], b);
  }
}
function pack(r, p) {
  var tx = gf(), ty = gf(), zi = gf();
  inv25519(zi, p[2]);
  M(tx, p[0], zi);
  M(ty, p[1], zi);
  pack25519(r, ty);
  r[31] ^= par25519(tx) << 7;
}
function pack25519(o, n) {
  var i, j, b;
  var m = gf(), t = gf();
  for (i = 0; i < 16; ++i) {
    t[i] = n[i];
  }
  car25519(t);
  car25519(t);
  car25519(t);
  for (j = 0; j < 2; ++j) {
    m[0] = t[0] - 65517;
    for (i = 1; i < 15; ++i) {
      m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
      m[i - 1] &= 65535;
    }
    m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
    b = m[15] >> 16 & 1;
    m[14] &= 65535;
    sel25519(t, m, 1 - b);
  }
  for (i = 0; i < 16; i++) {
    o[2 * i] = t[i] & 255;
    o[2 * i + 1] = t[i] >> 8;
  }
}
function unpackneg(r, p) {
  var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
  set25519(r[2], gf1);
  unpack25519(r[1], p);
  S(num, r[1]);
  M(den, num, D);
  Z(num, num, r[2]);
  A(den, r[2], den);
  S(den2, den);
  S(den4, den2);
  M(den6, den4, den2);
  M(t, den6, num);
  M(t, t, den);
  pow2523(t, t);
  M(t, t, num);
  M(t, t, den);
  M(t, t, den);
  M(r[0], t, den);
  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) {
    M(r[0], r[0], I);
  }
  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) {
    return -1;
  }
  if (par25519(r[0]) === p[31] >> 7) {
    Z(r[0], gf0, r[0]);
  }
  M(r[3], r[0], r[1]);
  return 0;
}
function unpack25519(o, n) {
  var i;
  for (i = 0; i < 16; ++i) {
    o[i] = n[2 * i] + (n[2 * i + 1] << 8);
  }
  o[15] &= 32767;
}
function pow2523(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; ++a) {
    c[a] = i[a];
  }
  for (a = 250; a >= 0; --a) {
    S(c, c);
    if (a !== 1) {
      M(c, c, i);
    }
  }
  for (a = 0; a < 16; ++a) {
    o[a] = c[a];
  }
}
function neq25519(a, b) {
  var c = new NativeBuffer(32);
  var d = new NativeBuffer(32);
  pack25519(c, a);
  pack25519(d, b);
  return crypto_verify_32(c, 0, d, 0);
}
function crypto_verify_32(x, xi, y, yi) {
  return vn(x, xi, y, yi, 32);
}
function vn(x, xi, y, yi, n) {
  var i, d = 0;
  for (i = 0; i < n; ++i) {
    d |= x[xi + i] ^ y[yi + i];
  }
  return (1 & d - 1 >>> 8) - 1;
}
function par25519(a) {
  var d = new NativeBuffer(32);
  pack25519(d, a);
  return d[0] & 1;
}
function scalarmult(p, q, s2) {
  var b, i;
  set25519(p[0], gf0);
  set25519(p[1], gf1);
  set25519(p[2], gf1);
  set25519(p[3], gf0);
  for (i = 255; i >= 0; --i) {
    b = s2[i / 8 | 0] >> (i & 7) & 1;
    cswap(p, q, b);
    add(q, p);
    add(p, p);
    cswap(p, q, b);
  }
}
function scalarbase(p, s2) {
  var q = [gf(), gf(), gf(), gf()];
  set25519(q[0], X);
  set25519(q[1], Y);
  set25519(q[2], gf1);
  M(q[3], X, Y);
  scalarmult(p, q, s2);
}
function set25519(r, a) {
  var i;
  for (i = 0; i < 16; i++) {
    r[i] = a[i] | 0;
  }
}
function inv25519(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; ++a) {
    c[a] = i[a];
  }
  for (a = 253; a >= 0; --a) {
    S(c, c);
    if (a !== 2 && a !== 4) {
      M(c, c, i);
    }
  }
  for (a = 0; a < 16; ++a) {
    o[a] = c[a];
  }
}
function car25519(o) {
  var i, v, c = 1;
  for (i = 0; i < 16; ++i) {
    v = o[i] + c + 65535;
    c = Math.floor(v / 65536);
    o[i] = v - c * 65536;
  }
  o[0] += c - 1 + 37 * (c - 1);
}
function sel25519(p, q, b) {
  var t, c = ~(b - 1);
  for (var i = 0; i < 16; ++i) {
    t = c & (p[i] ^ q[i]);
    p[i] ^= t;
    q[i] ^= t;
  }
}
function gf(init2) {
  var i, r = new Float64Array(16);
  if (init2) {
    for (i = 0; i < init2.length; ++i) {
      r[i] = init2[i];
    }
  }
  return r;
}
function A(o, a, b) {
  for (var i = 0; i < 16; ++i) {
    o[i] = a[i] + b[i];
  }
}
function Z(o, a, b) {
  for (var i = 0; i < 16; ++i) {
    o[i] = a[i] - b[i];
  }
}
function S(o, a) {
  M(o, a, a);
}
function M(o, a, b) {
  var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
  v = a[0];
  t0 += v * b0;
  t1 += v * b1;
  t2 += v * b2;
  t3 += v * b3;
  t4 += v * b4;
  t5 += v * b5;
  t6 += v * b6;
  t7 += v * b7;
  t8 += v * b8;
  t9 += v * b9;
  t10 += v * b10;
  t11 += v * b11;
  t12 += v * b12;
  t13 += v * b13;
  t14 += v * b14;
  t15 += v * b15;
  v = a[1];
  t1 += v * b0;
  t2 += v * b1;
  t3 += v * b2;
  t4 += v * b3;
  t5 += v * b4;
  t6 += v * b5;
  t7 += v * b6;
  t8 += v * b7;
  t9 += v * b8;
  t10 += v * b9;
  t11 += v * b10;
  t12 += v * b11;
  t13 += v * b12;
  t14 += v * b13;
  t15 += v * b14;
  t16 += v * b15;
  v = a[2];
  t2 += v * b0;
  t3 += v * b1;
  t4 += v * b2;
  t5 += v * b3;
  t6 += v * b4;
  t7 += v * b5;
  t8 += v * b6;
  t9 += v * b7;
  t10 += v * b8;
  t11 += v * b9;
  t12 += v * b10;
  t13 += v * b11;
  t14 += v * b12;
  t15 += v * b13;
  t16 += v * b14;
  t17 += v * b15;
  v = a[3];
  t3 += v * b0;
  t4 += v * b1;
  t5 += v * b2;
  t6 += v * b3;
  t7 += v * b4;
  t8 += v * b5;
  t9 += v * b6;
  t10 += v * b7;
  t11 += v * b8;
  t12 += v * b9;
  t13 += v * b10;
  t14 += v * b11;
  t15 += v * b12;
  t16 += v * b13;
  t17 += v * b14;
  t18 += v * b15;
  v = a[4];
  t4 += v * b0;
  t5 += v * b1;
  t6 += v * b2;
  t7 += v * b3;
  t8 += v * b4;
  t9 += v * b5;
  t10 += v * b6;
  t11 += v * b7;
  t12 += v * b8;
  t13 += v * b9;
  t14 += v * b10;
  t15 += v * b11;
  t16 += v * b12;
  t17 += v * b13;
  t18 += v * b14;
  t19 += v * b15;
  v = a[5];
  t5 += v * b0;
  t6 += v * b1;
  t7 += v * b2;
  t8 += v * b3;
  t9 += v * b4;
  t10 += v * b5;
  t11 += v * b6;
  t12 += v * b7;
  t13 += v * b8;
  t14 += v * b9;
  t15 += v * b10;
  t16 += v * b11;
  t17 += v * b12;
  t18 += v * b13;
  t19 += v * b14;
  t20 += v * b15;
  v = a[6];
  t6 += v * b0;
  t7 += v * b1;
  t8 += v * b2;
  t9 += v * b3;
  t10 += v * b4;
  t11 += v * b5;
  t12 += v * b6;
  t13 += v * b7;
  t14 += v * b8;
  t15 += v * b9;
  t16 += v * b10;
  t17 += v * b11;
  t18 += v * b12;
  t19 += v * b13;
  t20 += v * b14;
  t21 += v * b15;
  v = a[7];
  t7 += v * b0;
  t8 += v * b1;
  t9 += v * b2;
  t10 += v * b3;
  t11 += v * b4;
  t12 += v * b5;
  t13 += v * b6;
  t14 += v * b7;
  t15 += v * b8;
  t16 += v * b9;
  t17 += v * b10;
  t18 += v * b11;
  t19 += v * b12;
  t20 += v * b13;
  t21 += v * b14;
  t22 += v * b15;
  v = a[8];
  t8 += v * b0;
  t9 += v * b1;
  t10 += v * b2;
  t11 += v * b3;
  t12 += v * b4;
  t13 += v * b5;
  t14 += v * b6;
  t15 += v * b7;
  t16 += v * b8;
  t17 += v * b9;
  t18 += v * b10;
  t19 += v * b11;
  t20 += v * b12;
  t21 += v * b13;
  t22 += v * b14;
  t23 += v * b15;
  v = a[9];
  t9 += v * b0;
  t10 += v * b1;
  t11 += v * b2;
  t12 += v * b3;
  t13 += v * b4;
  t14 += v * b5;
  t15 += v * b6;
  t16 += v * b7;
  t17 += v * b8;
  t18 += v * b9;
  t19 += v * b10;
  t20 += v * b11;
  t21 += v * b12;
  t22 += v * b13;
  t23 += v * b14;
  t24 += v * b15;
  v = a[10];
  t10 += v * b0;
  t11 += v * b1;
  t12 += v * b2;
  t13 += v * b3;
  t14 += v * b4;
  t15 += v * b5;
  t16 += v * b6;
  t17 += v * b7;
  t18 += v * b8;
  t19 += v * b9;
  t20 += v * b10;
  t21 += v * b11;
  t22 += v * b12;
  t23 += v * b13;
  t24 += v * b14;
  t25 += v * b15;
  v = a[11];
  t11 += v * b0;
  t12 += v * b1;
  t13 += v * b2;
  t14 += v * b3;
  t15 += v * b4;
  t16 += v * b5;
  t17 += v * b6;
  t18 += v * b7;
  t19 += v * b8;
  t20 += v * b9;
  t21 += v * b10;
  t22 += v * b11;
  t23 += v * b12;
  t24 += v * b13;
  t25 += v * b14;
  t26 += v * b15;
  v = a[12];
  t12 += v * b0;
  t13 += v * b1;
  t14 += v * b2;
  t15 += v * b3;
  t16 += v * b4;
  t17 += v * b5;
  t18 += v * b6;
  t19 += v * b7;
  t20 += v * b8;
  t21 += v * b9;
  t22 += v * b10;
  t23 += v * b11;
  t24 += v * b12;
  t25 += v * b13;
  t26 += v * b14;
  t27 += v * b15;
  v = a[13];
  t13 += v * b0;
  t14 += v * b1;
  t15 += v * b2;
  t16 += v * b3;
  t17 += v * b4;
  t18 += v * b5;
  t19 += v * b6;
  t20 += v * b7;
  t21 += v * b8;
  t22 += v * b9;
  t23 += v * b10;
  t24 += v * b11;
  t25 += v * b12;
  t26 += v * b13;
  t27 += v * b14;
  t28 += v * b15;
  v = a[14];
  t14 += v * b0;
  t15 += v * b1;
  t16 += v * b2;
  t17 += v * b3;
  t18 += v * b4;
  t19 += v * b5;
  t20 += v * b6;
  t21 += v * b7;
  t22 += v * b8;
  t23 += v * b9;
  t24 += v * b10;
  t25 += v * b11;
  t26 += v * b12;
  t27 += v * b13;
  t28 += v * b14;
  t29 += v * b15;
  v = a[15];
  t15 += v * b0;
  t16 += v * b1;
  t17 += v * b2;
  t18 += v * b3;
  t19 += v * b4;
  t20 += v * b5;
  t21 += v * b6;
  t22 += v * b7;
  t23 += v * b8;
  t24 += v * b9;
  t25 += v * b10;
  t26 += v * b11;
  t27 += v * b12;
  t28 += v * b13;
  t29 += v * b14;
  t30 += v * b15;
  t0 += 38 * t16;
  t1 += 38 * t17;
  t2 += 38 * t18;
  t3 += 38 * t19;
  t4 += 38 * t20;
  t5 += 38 * t21;
  t6 += 38 * t22;
  t7 += 38 * t23;
  t8 += 38 * t24;
  t9 += 38 * t25;
  t10 += 38 * t26;
  t11 += 38 * t27;
  t12 += 38 * t28;
  t13 += 38 * t29;
  t14 += 38 * t30;
  c = 1;
  v = t0 + c + 65535;
  c = Math.floor(v / 65536);
  t0 = v - c * 65536;
  v = t1 + c + 65535;
  c = Math.floor(v / 65536);
  t1 = v - c * 65536;
  v = t2 + c + 65535;
  c = Math.floor(v / 65536);
  t2 = v - c * 65536;
  v = t3 + c + 65535;
  c = Math.floor(v / 65536);
  t3 = v - c * 65536;
  v = t4 + c + 65535;
  c = Math.floor(v / 65536);
  t4 = v - c * 65536;
  v = t5 + c + 65535;
  c = Math.floor(v / 65536);
  t5 = v - c * 65536;
  v = t6 + c + 65535;
  c = Math.floor(v / 65536);
  t6 = v - c * 65536;
  v = t7 + c + 65535;
  c = Math.floor(v / 65536);
  t7 = v - c * 65536;
  v = t8 + c + 65535;
  c = Math.floor(v / 65536);
  t8 = v - c * 65536;
  v = t9 + c + 65535;
  c = Math.floor(v / 65536);
  t9 = v - c * 65536;
  v = t10 + c + 65535;
  c = Math.floor(v / 65536);
  t10 = v - c * 65536;
  v = t11 + c + 65535;
  c = Math.floor(v / 65536);
  t11 = v - c * 65536;
  v = t12 + c + 65535;
  c = Math.floor(v / 65536);
  t12 = v - c * 65536;
  v = t13 + c + 65535;
  c = Math.floor(v / 65536);
  t13 = v - c * 65536;
  v = t14 + c + 65535;
  c = Math.floor(v / 65536);
  t14 = v - c * 65536;
  v = t15 + c + 65535;
  c = Math.floor(v / 65536);
  t15 = v - c * 65536;
  t0 += c - 1 + 37 * (c - 1);
  c = 1;
  v = t0 + c + 65535;
  c = Math.floor(v / 65536);
  t0 = v - c * 65536;
  v = t1 + c + 65535;
  c = Math.floor(v / 65536);
  t1 = v - c * 65536;
  v = t2 + c + 65535;
  c = Math.floor(v / 65536);
  t2 = v - c * 65536;
  v = t3 + c + 65535;
  c = Math.floor(v / 65536);
  t3 = v - c * 65536;
  v = t4 + c + 65535;
  c = Math.floor(v / 65536);
  t4 = v - c * 65536;
  v = t5 + c + 65535;
  c = Math.floor(v / 65536);
  t5 = v - c * 65536;
  v = t6 + c + 65535;
  c = Math.floor(v / 65536);
  t6 = v - c * 65536;
  v = t7 + c + 65535;
  c = Math.floor(v / 65536);
  t7 = v - c * 65536;
  v = t8 + c + 65535;
  c = Math.floor(v / 65536);
  t8 = v - c * 65536;
  v = t9 + c + 65535;
  c = Math.floor(v / 65536);
  t9 = v - c * 65536;
  v = t10 + c + 65535;
  c = Math.floor(v / 65536);
  t10 = v - c * 65536;
  v = t11 + c + 65535;
  c = Math.floor(v / 65536);
  t11 = v - c * 65536;
  v = t12 + c + 65535;
  c = Math.floor(v / 65536);
  t12 = v - c * 65536;
  v = t13 + c + 65535;
  c = Math.floor(v / 65536);
  t13 = v - c * 65536;
  v = t14 + c + 65535;
  c = Math.floor(v / 65536);
  t14 = v - c * 65536;
  v = t15 + c + 65535;
  c = Math.floor(v / 65536);
  t15 = v - c * 65536;
  t0 += c - 1 + 37 * (c - 1);
  o[0] = t0;
  o[1] = t1;
  o[2] = t2;
  o[3] = t3;
  o[4] = t4;
  o[5] = t5;
  o[6] = t6;
  o[7] = t7;
  o[8] = t8;
  o[9] = t9;
  o[10] = t10;
  o[11] = t11;
  o[12] = t12;
  o[13] = t13;
  o[14] = t14;
  o[15] = t15;
}
var forge$3 = forge$C;
forge$3.kem = forge$3.kem || {};
var BigInteger = forge$3.jsbn.BigInteger;
forge$3.kem.rsa = {};
forge$3.kem.rsa.create = function(kdf, options) {
  options = options || {};
  var prng2 = options.prng || forge$3.random;
  var kem = {};
  kem.encrypt = function(publicKey, keyLength) {
    var byteLength = Math.ceil(publicKey.n.bitLength() / 8);
    var r;
    do {
      r = new BigInteger(
        forge$3.util.bytesToHex(prng2.getBytesSync(byteLength)),
        16
      ).mod(publicKey.n);
    } while (r.compareTo(BigInteger.ONE) <= 0);
    r = forge$3.util.hexToBytes(r.toString(16));
    var zeros = byteLength - r.length;
    if (zeros > 0) {
      r = forge$3.util.fillString(String.fromCharCode(0), zeros) + r;
    }
    var encapsulation = publicKey.encrypt(r, "NONE");
    var key = kdf.generate(r, keyLength);
    return { encapsulation, key };
  };
  kem.decrypt = function(privateKey, encapsulation, keyLength) {
    var r = privateKey.decrypt(encapsulation, "NONE");
    return kdf.generate(r, keyLength);
  };
  return kem;
};
forge$3.kem.kdf1 = function(md, digestLength) {
  _createKDF(this, md, 0, digestLength || md.digestLength);
};
forge$3.kem.kdf2 = function(md, digestLength) {
  _createKDF(this, md, 1, digestLength || md.digestLength);
};
function _createKDF(kdf, md, counterStart, digestLength) {
  kdf.generate = function(x, length) {
    var key = new forge$3.util.ByteBuffer();
    var k = Math.ceil(length / digestLength) + counterStart;
    var c = new forge$3.util.ByteBuffer();
    for (var i = counterStart; i < k; ++i) {
      c.putInt32(i);
      md.start();
      md.update(x + c.getBytes());
      var hash2 = md.digest();
      key.putBytes(hash2.getBytes(digestLength));
    }
    key.truncate(key.length() - length);
    return key.getBytes();
  };
}
var forge$2 = forge$C;
forge$2.log = forge$2.log || {};
forge$2.log.levels = [
  "none",
  "error",
  "warning",
  "info",
  "debug",
  "verbose",
  "max"
];
var sLevelInfo = {};
var sLoggers = [];
var sConsoleLogger = null;
forge$2.log.LEVEL_LOCKED = 1 << 1;
forge$2.log.NO_LEVEL_CHECK = 1 << 2;
forge$2.log.INTERPOLATE = 1 << 3;
for (var i = 0; i < forge$2.log.levels.length; ++i) {
  var level = forge$2.log.levels[i];
  sLevelInfo[level] = {
    index: i,
    name: level.toUpperCase()
  };
}
forge$2.log.logMessage = function(message) {
  var messageLevelIndex = sLevelInfo[message.level].index;
  for (var i = 0; i < sLoggers.length; ++i) {
    var logger = sLoggers[i];
    if (logger.flags & forge$2.log.NO_LEVEL_CHECK) {
      logger.f(message);
    } else {
      var loggerLevelIndex = sLevelInfo[logger.level].index;
      if (messageLevelIndex <= loggerLevelIndex) {
        logger.f(logger, message);
      }
    }
  }
};
forge$2.log.prepareStandard = function(message) {
  if (!("standard" in message)) {
    message.standard = sLevelInfo[message.level].name + //' ' + +message.timestamp +
    " [" + message.category + "] " + message.message;
  }
};
forge$2.log.prepareFull = function(message) {
  if (!("full" in message)) {
    var args = [message.message];
    args = args.concat([]);
    message.full = forge$2.util.format.apply(this, args);
  }
};
forge$2.log.prepareStandardFull = function(message) {
  if (!("standardFull" in message)) {
    forge$2.log.prepareStandard(message);
    message.standardFull = message.standard;
  }
};
{
  var levels = ["error", "warning", "info", "debug", "verbose"];
  for (var i = 0; i < levels.length; ++i) {
    (function(level) {
      forge$2.log[level] = function(category, message) {
        var args = Array.prototype.slice.call(arguments).slice(2);
        var msg = {
          timestamp: /* @__PURE__ */ new Date(),
          level,
          category,
          message,
          "arguments": args
          /*standard*/
          /*full*/
          /*fullMessage*/
        };
        forge$2.log.logMessage(msg);
      };
    })(levels[i]);
  }
}
forge$2.log.makeLogger = function(logFunction) {
  var logger = {
    flags: 0,
    f: logFunction
  };
  forge$2.log.setLevel(logger, "none");
  return logger;
};
forge$2.log.setLevel = function(logger, level) {
  var rval = false;
  if (logger && !(logger.flags & forge$2.log.LEVEL_LOCKED)) {
    for (var i = 0; i < forge$2.log.levels.length; ++i) {
      var aValidLevel = forge$2.log.levels[i];
      if (level == aValidLevel) {
        logger.level = level;
        rval = true;
        break;
      }
    }
  }
  return rval;
};
forge$2.log.lock = function(logger, lock) {
  if (typeof lock === "undefined" || lock) {
    logger.flags |= forge$2.log.LEVEL_LOCKED;
  } else {
    logger.flags &= ~forge$2.log.LEVEL_LOCKED;
  }
};
forge$2.log.addLogger = function(logger) {
  sLoggers.push(logger);
};
if (typeof console !== "undefined" && "log" in console) {
  var logger;
  if (console.error && console.warn && console.info && console.debug) {
    var levelHandlers = {
      error: console.error,
      warning: console.warn,
      info: console.info,
      debug: console.debug,
      verbose: console.debug
    };
    var f = function(logger2, message) {
      forge$2.log.prepareStandard(message);
      var handler = levelHandlers[message.level];
      var args = [message.standard];
      args = args.concat(message["arguments"].slice());
      handler.apply(console, args);
    };
    logger = forge$2.log.makeLogger(f);
  } else {
    var f = function(logger2, message) {
      forge$2.log.prepareStandardFull(message);
      console.log(message.standardFull);
    };
    logger = forge$2.log.makeLogger(f);
  }
  forge$2.log.setLevel(logger, "debug");
  forge$2.log.addLogger(logger);
  sConsoleLogger = logger;
} else {
  console = {
    log: function() {
    }
  };
}
if (sConsoleLogger !== null && typeof window !== "undefined" && window.location) {
  var query = new URL(window.location.href).searchParams;
  if (query.has("console.level")) {
    forge$2.log.setLevel(
      sConsoleLogger,
      query.get("console.level").slice(-1)[0]
    );
  }
  if (query.has("console.lock")) {
    var lock = query.get("console.lock").slice(-1)[0];
    if (lock == "true") {
      forge$2.log.lock(sConsoleLogger);
    }
  }
}
forge$2.log.consoleLogger = sConsoleLogger;
var forge$1 = forge$C;
var asn1 = forge$1.asn1;
var p7 = forge$1.pkcs7 = forge$1.pkcs7 || {};
p7.messageFromPem = function(pem2) {
  var msg = forge$1.pem.decode(pem2)[0];
  if (msg.type !== "PKCS7") {
    var error = new Error('Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".');
    error.headerType = msg.type;
    throw error;
  }
  if (msg.procType && msg.procType.type === "ENCRYPTED") {
    throw new Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");
  }
  var obj = asn1.fromDer(msg.body);
  return p7.messageFromAsn1(obj);
};
p7.messageToPem = function(msg, maxline) {
  var pemObj = {
    type: "PKCS7",
    body: asn1.toDer(msg.toAsn1()).getBytes()
  };
  return forge$1.pem.encode(pemObj, { maxline });
};
p7.messageFromAsn1 = function(obj) {
  var capture = {};
  var errors = [];
  if (!asn1.validate(obj, p7.asn1.contentInfoValidator, capture, errors)) {
    var error = new Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.");
    error.errors = errors;
    throw error;
  }
  var contentType = asn1.derToOid(capture.contentType);
  var msg;
  switch (contentType) {
    case forge$1.pki.oids.envelopedData:
      msg = p7.createEnvelopedData();
      break;
    case forge$1.pki.oids.encryptedData:
      msg = p7.createEncryptedData();
      break;
    case forge$1.pki.oids.signedData:
      msg = p7.createSignedData();
      break;
    default:
      throw new Error("Cannot read PKCS#7 message. ContentType with OID " + contentType + " is not (yet) supported.");
  }
  msg.fromAsn1(capture.content.value[0]);
  return msg;
};
p7.createSignedData = function() {
  var msg = null;
  msg = {
    type: forge$1.pki.oids.signedData,
    version: 1,
    certificates: [],
    crls: [],
    // TODO: add json-formatted signer stuff here?
    signers: [],
    // populated during sign()
    digestAlgorithmIdentifiers: [],
    contentInfo: null,
    signerInfos: [],
    fromAsn1: function(obj) {
      _fromAsn1(msg, obj, p7.asn1.signedDataValidator);
      msg.certificates = [];
      msg.crls = [];
      msg.digestAlgorithmIdentifiers = [];
      msg.contentInfo = null;
      msg.signerInfos = [];
      if (msg.rawCapture.certificates) {
        var certs = msg.rawCapture.certificates.value;
        for (var i = 0; i < certs.length; ++i) {
          msg.certificates.push(forge$1.pki.certificateFromAsn1(certs[i]));
        }
      }
    },
    toAsn1: function() {
      if (!msg.contentInfo) {
        msg.sign();
      }
      var certs = [];
      for (var i = 0; i < msg.certificates.length; ++i) {
        certs.push(forge$1.pki.certificateToAsn1(msg.certificates[i]));
      }
      var crls = [];
      var signedData = asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // Version
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.INTEGER,
            false,
            asn1.integerToDer(msg.version).getBytes()
          ),
          // DigestAlgorithmIdentifiers
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.SET,
            true,
            msg.digestAlgorithmIdentifiers
          ),
          // ContentInfo
          msg.contentInfo
        ])
      ]);
      if (certs.length > 0) {
        signedData.value[0].value.push(
          asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, certs)
        );
      }
      if (crls.length > 0) {
        signedData.value[0].value.push(
          asn1.create(asn1.Class.CONTEXT_SPECIFIC, 1, true, crls)
        );
      }
      signedData.value[0].value.push(
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.SET,
          true,
          msg.signerInfos
        )
      );
      return asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.SEQUENCE,
        true,
        [
          // ContentType
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OID,
            false,
            asn1.oidToDer(msg.type).getBytes()
          ),
          // [0] SignedData
          signedData
        ]
      );
    },
    /**
     * Add (another) entity to list of signers.
     *
     * Note: If authenticatedAttributes are provided, then, per RFC 2315,
     * they must include at least two attributes: content type and
     * message digest. The message digest attribute value will be
     * auto-calculated during signing and will be ignored if provided.
     *
     * Here's an example of providing these two attributes:
     *
     * forge.pkcs7.createSignedData();
     * p7.addSigner({
     *   issuer: cert.issuer.attributes,
     *   serialNumber: cert.serialNumber,
     *   key: privateKey,
     *   digestAlgorithm: forge.pki.oids.sha1,
     *   authenticatedAttributes: [{
     *     type: forge.pki.oids.contentType,
     *     value: forge.pki.oids.data
     *   }, {
     *     type: forge.pki.oids.messageDigest
     *   }]
     * });
     *
     * TODO: Support [subjectKeyIdentifier] as signer's ID.
     *
     * @param signer the signer information:
     *          key the signer's private key.
     *          [certificate] a certificate containing the public key
     *            associated with the signer's private key; use this option as
     *            an alternative to specifying signer.issuer and
     *            signer.serialNumber.
     *          [issuer] the issuer attributes (eg: cert.issuer.attributes).
     *          [serialNumber] the signer's certificate's serial number in
     *           hexadecimal (eg: cert.serialNumber).
     *          [digestAlgorithm] the message digest OID, as a string, to use
     *            (eg: forge.pki.oids.sha1).
     *          [authenticatedAttributes] an optional array of attributes
     *            to also sign along with the content.
     */
    addSigner: function(signer) {
      var issuer = signer.issuer;
      var serialNumber = signer.serialNumber;
      if (signer.certificate) {
        var cert = signer.certificate;
        if (typeof cert === "string") {
          cert = forge$1.pki.certificateFromPem(cert);
        }
        issuer = cert.issuer.attributes;
        serialNumber = cert.serialNumber;
      }
      var key = signer.key;
      if (!key) {
        throw new Error(
          "Could not add PKCS#7 signer; no private key specified."
        );
      }
      if (typeof key === "string") {
        key = forge$1.pki.privateKeyFromPem(key);
      }
      var digestAlgorithm = signer.digestAlgorithm || forge$1.pki.oids.sha1;
      switch (digestAlgorithm) {
        case forge$1.pki.oids.sha1:
        case forge$1.pki.oids.sha256:
        case forge$1.pki.oids.sha384:
        case forge$1.pki.oids.sha512:
        case forge$1.pki.oids.md5:
          break;
        default:
          throw new Error(
            "Could not add PKCS#7 signer; unknown message digest algorithm: " + digestAlgorithm
          );
      }
      var authenticatedAttributes = signer.authenticatedAttributes || [];
      if (authenticatedAttributes.length > 0) {
        var contentType = false;
        var messageDigest = false;
        for (var i = 0; i < authenticatedAttributes.length; ++i) {
          var attr = authenticatedAttributes[i];
          if (!contentType && attr.type === forge$1.pki.oids.contentType) {
            contentType = true;
            if (messageDigest) {
              break;
            }
            continue;
          }
          if (!messageDigest && attr.type === forge$1.pki.oids.messageDigest) {
            messageDigest = true;
            if (contentType) {
              break;
            }
            continue;
          }
        }
        if (!contentType || !messageDigest) {
          throw new Error("Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.");
        }
      }
      msg.signers.push({
        key,
        version: 1,
        issuer,
        serialNumber,
        digestAlgorithm,
        signatureAlgorithm: forge$1.pki.oids.rsaEncryption,
        signature: null,
        authenticatedAttributes,
        unauthenticatedAttributes: []
      });
    },
    /**
     * Signs the content.
     * @param options Options to apply when signing:
     *    [detached] boolean. If signing should be done in detached mode. Defaults to false.
     */
    sign: function(options) {
      options = options || {};
      if (typeof msg.content !== "object" || msg.contentInfo === null) {
        msg.contentInfo = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.SEQUENCE,
          true,
          [
            // ContentType
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              asn1.oidToDer(forge$1.pki.oids.data).getBytes()
            )
          ]
        );
        if ("content" in msg) {
          var content;
          if (msg.content instanceof forge$1.util.ByteBuffer) {
            content = msg.content.bytes();
          } else if (typeof msg.content === "string") {
            content = forge$1.util.encodeUtf8(msg.content);
          }
          if (options.detached) {
            msg.detachedContent = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false, content);
          } else {
            msg.contentInfo.value.push(
              // [0] EXPLICIT content
              asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
                asn1.create(
                  asn1.Class.UNIVERSAL,
                  asn1.Type.OCTETSTRING,
                  false,
                  content
                )
              ])
            );
          }
        }
      }
      if (msg.signers.length === 0) {
        return;
      }
      var mds = addDigestAlgorithmIds();
      addSignerInfos(mds);
    },
    verify: function() {
      throw new Error("PKCS#7 signature verification not yet implemented.");
    },
    /**
     * Add a certificate.
     *
     * @param cert the certificate to add.
     */
    addCertificate: function(cert) {
      if (typeof cert === "string") {
        cert = forge$1.pki.certificateFromPem(cert);
      }
      msg.certificates.push(cert);
    },
    /**
     * Add a certificate revokation list.
     *
     * @param crl the certificate revokation list to add.
     */
    addCertificateRevokationList: function(crl) {
      throw new Error("PKCS#7 CRL support not yet implemented.");
    }
  };
  return msg;
  function addDigestAlgorithmIds() {
    var mds = {};
    for (var i = 0; i < msg.signers.length; ++i) {
      var signer = msg.signers[i];
      var oid = signer.digestAlgorithm;
      if (!(oid in mds)) {
        mds[oid] = forge$1.md[forge$1.pki.oids[oid]].create();
      }
      if (signer.authenticatedAttributes.length === 0) {
        signer.md = mds[oid];
      } else {
        signer.md = forge$1.md[forge$1.pki.oids[oid]].create();
      }
    }
    msg.digestAlgorithmIdentifiers = [];
    for (var oid in mds) {
      msg.digestAlgorithmIdentifiers.push(
        // AlgorithmIdentifier
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // algorithm
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OID,
            false,
            asn1.oidToDer(oid).getBytes()
          ),
          // parameters (null)
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
        ])
      );
    }
    return mds;
  }
  function addSignerInfos(mds) {
    var content;
    if (msg.detachedContent) {
      content = msg.detachedContent;
    } else {
      content = msg.contentInfo.value[1];
      content = content.value[0];
    }
    if (!content) {
      throw new Error(
        "Could not sign PKCS#7 message; there is no content to sign."
      );
    }
    var contentType = asn1.derToOid(msg.contentInfo.value[0].value);
    var bytes = asn1.toDer(content);
    bytes.getByte();
    asn1.getBerValueLength(bytes);
    bytes = bytes.getBytes();
    for (var oid in mds) {
      mds[oid].start().update(bytes);
    }
    var signingTime = /* @__PURE__ */ new Date();
    for (var i = 0; i < msg.signers.length; ++i) {
      var signer = msg.signers[i];
      if (signer.authenticatedAttributes.length === 0) {
        if (contentType !== forge$1.pki.oids.data) {
          throw new Error(
            "Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data."
          );
        }
      } else {
        signer.authenticatedAttributesAsn1 = asn1.create(
          asn1.Class.CONTEXT_SPECIFIC,
          0,
          true,
          []
        );
        var attrsAsn1 = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.SET,
          true,
          []
        );
        for (var ai = 0; ai < signer.authenticatedAttributes.length; ++ai) {
          var attr = signer.authenticatedAttributes[ai];
          if (attr.type === forge$1.pki.oids.messageDigest) {
            attr.value = mds[signer.digestAlgorithm].digest();
          } else if (attr.type === forge$1.pki.oids.signingTime) {
            if (!attr.value) {
              attr.value = signingTime;
            }
          }
          attrsAsn1.value.push(_attributeToAsn1(attr));
          signer.authenticatedAttributesAsn1.value.push(_attributeToAsn1(attr));
        }
        bytes = asn1.toDer(attrsAsn1).getBytes();
        signer.md.start().update(bytes);
      }
      signer.signature = signer.key.sign(signer.md, "RSASSA-PKCS1-V1_5");
    }
    msg.signerInfos = _signersToAsn1(msg.signers);
  }
};
p7.createEncryptedData = function() {
  var msg = null;
  msg = {
    type: forge$1.pki.oids.encryptedData,
    version: 0,
    encryptedContent: {
      algorithm: forge$1.pki.oids["aes256-CBC"]
    },
    /**
     * Reads an EncryptedData content block (in ASN.1 format)
     *
     * @param obj The ASN.1 representation of the EncryptedData content block
     */
    fromAsn1: function(obj) {
      _fromAsn1(msg, obj, p7.asn1.encryptedDataValidator);
    },
    /**
     * Decrypt encrypted content
     *
     * @param key The (symmetric) key as a byte buffer
     */
    decrypt: function(key) {
      if (key !== void 0) {
        msg.encryptedContent.key = key;
      }
      _decryptContent(msg);
    }
  };
  return msg;
};
p7.createEnvelopedData = function() {
  var msg = null;
  msg = {
    type: forge$1.pki.oids.envelopedData,
    version: 0,
    recipients: [],
    encryptedContent: {
      algorithm: forge$1.pki.oids["aes256-CBC"]
    },
    /**
     * Reads an EnvelopedData content block (in ASN.1 format)
     *
     * @param obj the ASN.1 representation of the EnvelopedData content block.
     */
    fromAsn1: function(obj) {
      var capture = _fromAsn1(msg, obj, p7.asn1.envelopedDataValidator);
      msg.recipients = _recipientsFromAsn1(capture.recipientInfos.value);
    },
    toAsn1: function() {
      return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // ContentType
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.OID,
          false,
          asn1.oidToDer(msg.type).getBytes()
        ),
        // [0] EnvelopedData
        asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            // Version
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.INTEGER,
              false,
              asn1.integerToDer(msg.version).getBytes()
            ),
            // RecipientInfos
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.SET,
              true,
              _recipientsToAsn1(msg.recipients)
            ),
            // EncryptedContentInfo
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.SEQUENCE,
              true,
              _encryptedContentToAsn1(msg.encryptedContent)
            )
          ])
        ])
      ]);
    },
    /**
     * Find recipient by X.509 certificate's issuer.
     *
     * @param cert the certificate with the issuer to look for.
     *
     * @return the recipient object.
     */
    findRecipient: function(cert) {
      var sAttr = cert.issuer.attributes;
      for (var i = 0; i < msg.recipients.length; ++i) {
        var r = msg.recipients[i];
        var rAttr = r.issuer;
        if (r.serialNumber !== cert.serialNumber) {
          continue;
        }
        if (rAttr.length !== sAttr.length) {
          continue;
        }
        var match = true;
        for (var j = 0; j < sAttr.length; ++j) {
          if (rAttr[j].type !== sAttr[j].type || rAttr[j].value !== sAttr[j].value) {
            match = false;
            break;
          }
        }
        if (match) {
          return r;
        }
      }
      return null;
    },
    /**
     * Decrypt enveloped content
     *
     * @param recipient The recipient object related to the private key
     * @param privKey The (RSA) private key object
     */
    decrypt: function(recipient, privKey) {
      if (msg.encryptedContent.key === void 0 && recipient !== void 0 && privKey !== void 0) {
        switch (recipient.encryptedContent.algorithm) {
          case forge$1.pki.oids.rsaEncryption:
          case forge$1.pki.oids.desCBC:
            var key = privKey.decrypt(recipient.encryptedContent.content);
            msg.encryptedContent.key = forge$1.util.createBuffer(key);
            break;
          default:
            throw new Error("Unsupported asymmetric cipher, OID " + recipient.encryptedContent.algorithm);
        }
      }
      _decryptContent(msg);
    },
    /**
     * Add (another) entity to list of recipients.
     *
     * @param cert The certificate of the entity to add.
     */
    addRecipient: function(cert) {
      msg.recipients.push({
        version: 0,
        issuer: cert.issuer.attributes,
        serialNumber: cert.serialNumber,
        encryptedContent: {
          // We simply assume rsaEncryption here, since forge.pki only
          // supports RSA so far.  If the PKI module supports other
          // ciphers one day, we need to modify this one as well.
          algorithm: forge$1.pki.oids.rsaEncryption,
          key: cert.publicKey
        }
      });
    },
    /**
     * Encrypt enveloped content.
     *
     * This function supports two optional arguments, cipher and key, which
     * can be used to influence symmetric encryption.  Unless cipher is
     * provided, the cipher specified in encryptedContent.algorithm is used
     * (defaults to AES-256-CBC).  If no key is provided, encryptedContent.key
     * is (re-)used.  If that one's not set, a random key will be generated
     * automatically.
     *
     * @param [key] The key to be used for symmetric encryption.
     * @param [cipher] The OID of the symmetric cipher to use.
     */
    encrypt: function(key, cipher) {
      if (msg.encryptedContent.content === void 0) {
        cipher = cipher || msg.encryptedContent.algorithm;
        key = key || msg.encryptedContent.key;
        var keyLen, ivLen, ciphFn;
        switch (cipher) {
          case forge$1.pki.oids["aes128-CBC"]:
            keyLen = 16;
            ivLen = 16;
            ciphFn = forge$1.aes.createEncryptionCipher;
            break;
          case forge$1.pki.oids["aes192-CBC"]:
            keyLen = 24;
            ivLen = 16;
            ciphFn = forge$1.aes.createEncryptionCipher;
            break;
          case forge$1.pki.oids["aes256-CBC"]:
            keyLen = 32;
            ivLen = 16;
            ciphFn = forge$1.aes.createEncryptionCipher;
            break;
          case forge$1.pki.oids["des-EDE3-CBC"]:
            keyLen = 24;
            ivLen = 8;
            ciphFn = forge$1.des.createEncryptionCipher;
            break;
          default:
            throw new Error("Unsupported symmetric cipher, OID " + cipher);
        }
        if (key === void 0) {
          key = forge$1.util.createBuffer(forge$1.random.getBytes(keyLen));
        } else if (key.length() != keyLen) {
          throw new Error("Symmetric key has wrong length; got " + key.length() + " bytes, expected " + keyLen + ".");
        }
        msg.encryptedContent.algorithm = cipher;
        msg.encryptedContent.key = key;
        msg.encryptedContent.parameter = forge$1.util.createBuffer(
          forge$1.random.getBytes(ivLen)
        );
        var ciph = ciphFn(key);
        ciph.start(msg.encryptedContent.parameter.copy());
        ciph.update(msg.content);
        if (!ciph.finish()) {
          throw new Error("Symmetric encryption failed.");
        }
        msg.encryptedContent.content = ciph.output;
      }
      for (var i = 0; i < msg.recipients.length; ++i) {
        var recipient = msg.recipients[i];
        if (recipient.encryptedContent.content !== void 0) {
          continue;
        }
        switch (recipient.encryptedContent.algorithm) {
          case forge$1.pki.oids.rsaEncryption:
            recipient.encryptedContent.content = recipient.encryptedContent.key.encrypt(
              msg.encryptedContent.key.data
            );
            break;
          default:
            throw new Error("Unsupported asymmetric cipher, OID " + recipient.encryptedContent.algorithm);
        }
      }
    }
  };
  return msg;
};
function _recipientFromAsn1(obj) {
  var capture = {};
  var errors = [];
  if (!asn1.validate(obj, p7.asn1.recipientInfoValidator, capture, errors)) {
    var error = new Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.");
    error.errors = errors;
    throw error;
  }
  return {
    version: capture.version.charCodeAt(0),
    issuer: forge$1.pki.RDNAttributesAsArray(capture.issuer),
    serialNumber: forge$1.util.createBuffer(capture.serial).toHex(),
    encryptedContent: {
      algorithm: asn1.derToOid(capture.encAlgorithm),
      parameter: capture.encParameter ? capture.encParameter.value : void 0,
      content: capture.encKey
    }
  };
}
function _recipientToAsn1(obj) {
  return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // Version
    asn1.create(
      asn1.Class.UNIVERSAL,
      asn1.Type.INTEGER,
      false,
      asn1.integerToDer(obj.version).getBytes()
    ),
    // IssuerAndSerialNumber
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      // Name
      forge$1.pki.distinguishedNameToAsn1({ attributes: obj.issuer }),
      // Serial
      asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.INTEGER,
        false,
        forge$1.util.hexToBytes(obj.serialNumber)
      )
    ]),
    // KeyEncryptionAlgorithmIdentifier
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      // Algorithm
      asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.OID,
        false,
        asn1.oidToDer(obj.encryptedContent.algorithm).getBytes()
      ),
      // Parameter, force NULL, only RSA supported for now.
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
    ]),
    // EncryptedKey
    asn1.create(
      asn1.Class.UNIVERSAL,
      asn1.Type.OCTETSTRING,
      false,
      obj.encryptedContent.content
    )
  ]);
}
function _recipientsFromAsn1(infos) {
  var ret = [];
  for (var i = 0; i < infos.length; ++i) {
    ret.push(_recipientFromAsn1(infos[i]));
  }
  return ret;
}
function _recipientsToAsn1(recipients) {
  var ret = [];
  for (var i = 0; i < recipients.length; ++i) {
    ret.push(_recipientToAsn1(recipients[i]));
  }
  return ret;
}
function _signerToAsn1(obj) {
  var rval = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // version
    asn1.create(
      asn1.Class.UNIVERSAL,
      asn1.Type.INTEGER,
      false,
      asn1.integerToDer(obj.version).getBytes()
    ),
    // issuerAndSerialNumber
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      // name
      forge$1.pki.distinguishedNameToAsn1({ attributes: obj.issuer }),
      // serial
      asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.INTEGER,
        false,
        forge$1.util.hexToBytes(obj.serialNumber)
      )
    ]),
    // digestAlgorithm
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      // algorithm
      asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.OID,
        false,
        asn1.oidToDer(obj.digestAlgorithm).getBytes()
      ),
      // parameters (null)
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
    ])
  ]);
  if (obj.authenticatedAttributesAsn1) {
    rval.value.push(obj.authenticatedAttributesAsn1);
  }
  rval.value.push(asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // algorithm
    asn1.create(
      asn1.Class.UNIVERSAL,
      asn1.Type.OID,
      false,
      asn1.oidToDer(obj.signatureAlgorithm).getBytes()
    ),
    // parameters (null)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
  ]));
  rval.value.push(asn1.create(
    asn1.Class.UNIVERSAL,
    asn1.Type.OCTETSTRING,
    false,
    obj.signature
  ));
  if (obj.unauthenticatedAttributes.length > 0) {
    var attrsAsn1 = asn1.create(asn1.Class.CONTEXT_SPECIFIC, 1, true, []);
    for (var i = 0; i < obj.unauthenticatedAttributes.length; ++i) {
      var attr = obj.unauthenticatedAttributes[i];
      attrsAsn1.values.push(_attributeToAsn1(attr));
    }
    rval.value.push(attrsAsn1);
  }
  return rval;
}
function _signersToAsn1(signers) {
  var ret = [];
  for (var i = 0; i < signers.length; ++i) {
    ret.push(_signerToAsn1(signers[i]));
  }
  return ret;
}
function _attributeToAsn1(attr) {
  var value;
  if (attr.type === forge$1.pki.oids.contentType) {
    value = asn1.create(
      asn1.Class.UNIVERSAL,
      asn1.Type.OID,
      false,
      asn1.oidToDer(attr.value).getBytes()
    );
  } else if (attr.type === forge$1.pki.oids.messageDigest) {
    value = asn1.create(
      asn1.Class.UNIVERSAL,
      asn1.Type.OCTETSTRING,
      false,
      attr.value.bytes()
    );
  } else if (attr.type === forge$1.pki.oids.signingTime) {
    var jan_1_19502 = /* @__PURE__ */ new Date("1950-01-01T00:00:00Z");
    var jan_1_20502 = /* @__PURE__ */ new Date("2050-01-01T00:00:00Z");
    var date = attr.value;
    if (typeof date === "string") {
      var timestamp = Date.parse(date);
      if (!isNaN(timestamp)) {
        date = new Date(timestamp);
      } else if (date.length === 13) {
        date = asn1.utcTimeToDate(date);
      } else {
        date = asn1.generalizedTimeToDate(date);
      }
    }
    if (date >= jan_1_19502 && date < jan_1_20502) {
      value = asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.UTCTIME,
        false,
        asn1.dateToUtcTime(date)
      );
    } else {
      value = asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.GENERALIZEDTIME,
        false,
        asn1.dateToGeneralizedTime(date)
      );
    }
  }
  return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // AttributeType
    asn1.create(
      asn1.Class.UNIVERSAL,
      asn1.Type.OID,
      false,
      asn1.oidToDer(attr.type).getBytes()
    ),
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SET, true, [
      // AttributeValue
      value
    ])
  ]);
}
function _encryptedContentToAsn1(ec) {
  return [
    // ContentType, always Data for the moment
    asn1.create(
      asn1.Class.UNIVERSAL,
      asn1.Type.OID,
      false,
      asn1.oidToDer(forge$1.pki.oids.data).getBytes()
    ),
    // ContentEncryptionAlgorithmIdentifier
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      // Algorithm
      asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.OID,
        false,
        asn1.oidToDer(ec.algorithm).getBytes()
      ),
      // Parameters (IV)
      !ec.parameter ? void 0 : asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.OCTETSTRING,
        false,
        ec.parameter.getBytes()
      )
    ]),
    // [0] EncryptedContent
    asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
      asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.OCTETSTRING,
        false,
        ec.content.getBytes()
      )
    ])
  ];
}
function _fromAsn1(msg, obj, validator) {
  var capture = {};
  var errors = [];
  if (!asn1.validate(obj, validator, capture, errors)) {
    var error = new Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.");
    error.errors = error;
    throw error;
  }
  var contentType = asn1.derToOid(capture.contentType);
  if (contentType !== forge$1.pki.oids.data) {
    throw new Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");
  }
  if (capture.encryptedContent) {
    var content = "";
    if (forge$1.util.isArray(capture.encryptedContent)) {
      for (var i = 0; i < capture.encryptedContent.length; ++i) {
        if (capture.encryptedContent[i].type !== asn1.Type.OCTETSTRING) {
          throw new Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");
        }
        content += capture.encryptedContent[i].value;
      }
    } else {
      content = capture.encryptedContent;
    }
    msg.encryptedContent = {
      algorithm: asn1.derToOid(capture.encAlgorithm),
      parameter: forge$1.util.createBuffer(capture.encParameter.value),
      content: forge$1.util.createBuffer(content)
    };
  }
  if (capture.content) {
    var content = "";
    if (forge$1.util.isArray(capture.content)) {
      for (var i = 0; i < capture.content.length; ++i) {
        if (capture.content[i].type !== asn1.Type.OCTETSTRING) {
          throw new Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");
        }
        content += capture.content[i].value;
      }
    } else {
      content = capture.content;
    }
    msg.content = forge$1.util.createBuffer(content);
  }
  msg.version = capture.version.charCodeAt(0);
  msg.rawCapture = capture;
  return capture;
}
function _decryptContent(msg) {
  if (msg.encryptedContent.key === void 0) {
    throw new Error("Symmetric key not available.");
  }
  if (msg.content === void 0) {
    var ciph;
    switch (msg.encryptedContent.algorithm) {
      case forge$1.pki.oids["aes128-CBC"]:
      case forge$1.pki.oids["aes192-CBC"]:
      case forge$1.pki.oids["aes256-CBC"]:
        ciph = forge$1.aes.createDecryptionCipher(msg.encryptedContent.key);
        break;
      case forge$1.pki.oids["desCBC"]:
      case forge$1.pki.oids["des-EDE3-CBC"]:
        ciph = forge$1.des.createDecryptionCipher(msg.encryptedContent.key);
        break;
      default:
        throw new Error("Unsupported symmetric cipher, OID " + msg.encryptedContent.algorithm);
    }
    ciph.start(msg.encryptedContent.parameter);
    ciph.update(msg.encryptedContent.content);
    if (!ciph.finish()) {
      throw new Error("Symmetric decryption failed.");
    }
    msg.content = ciph.output;
  }
}
var forge = forge$C;
var ssh = forge.ssh = forge.ssh || {};
ssh.privateKeyToPutty = function(privateKey, passphrase, comment) {
  comment = comment || "";
  passphrase = passphrase || "";
  var algorithm = "ssh-rsa";
  var encryptionAlgorithm = passphrase === "" ? "none" : "aes256-cbc";
  var ppk = "PuTTY-User-Key-File-2: " + algorithm + "\r\n";
  ppk += "Encryption: " + encryptionAlgorithm + "\r\n";
  ppk += "Comment: " + comment + "\r\n";
  var pubbuffer = forge.util.createBuffer();
  _addStringToBuffer(pubbuffer, algorithm);
  _addBigIntegerToBuffer(pubbuffer, privateKey.e);
  _addBigIntegerToBuffer(pubbuffer, privateKey.n);
  var pub = forge.util.encode64(pubbuffer.bytes(), 64);
  var length = Math.floor(pub.length / 66) + 1;
  ppk += "Public-Lines: " + length + "\r\n";
  ppk += pub;
  var privbuffer = forge.util.createBuffer();
  _addBigIntegerToBuffer(privbuffer, privateKey.d);
  _addBigIntegerToBuffer(privbuffer, privateKey.p);
  _addBigIntegerToBuffer(privbuffer, privateKey.q);
  _addBigIntegerToBuffer(privbuffer, privateKey.qInv);
  var priv;
  if (!passphrase) {
    priv = forge.util.encode64(privbuffer.bytes(), 64);
  } else {
    var encLen = privbuffer.length() + 16 - 1;
    encLen -= encLen % 16;
    var padding = _sha1(privbuffer.bytes());
    padding.truncate(padding.length() - encLen + privbuffer.length());
    privbuffer.putBuffer(padding);
    var aeskey = forge.util.createBuffer();
    aeskey.putBuffer(_sha1("\0\0\0\0", passphrase));
    aeskey.putBuffer(_sha1("\0\0\0", passphrase));
    var cipher = forge.aes.createEncryptionCipher(aeskey.truncate(8), "CBC");
    cipher.start(forge.util.createBuffer().fillWithByte(0, 16));
    cipher.update(privbuffer.copy());
    cipher.finish();
    var encrypted = cipher.output;
    encrypted.truncate(16);
    priv = forge.util.encode64(encrypted.bytes(), 64);
  }
  length = Math.floor(priv.length / 66) + 1;
  ppk += "\r\nPrivate-Lines: " + length + "\r\n";
  ppk += priv;
  var mackey = _sha1("putty-private-key-file-mac-key", passphrase);
  var macbuffer = forge.util.createBuffer();
  _addStringToBuffer(macbuffer, algorithm);
  _addStringToBuffer(macbuffer, encryptionAlgorithm);
  _addStringToBuffer(macbuffer, comment);
  macbuffer.putInt32(pubbuffer.length());
  macbuffer.putBuffer(pubbuffer);
  macbuffer.putInt32(privbuffer.length());
  macbuffer.putBuffer(privbuffer);
  var hmac2 = forge.hmac.create();
  hmac2.start("sha1", mackey);
  hmac2.update(macbuffer.bytes());
  ppk += "\r\nPrivate-MAC: " + hmac2.digest().toHex() + "\r\n";
  return ppk;
};
ssh.publicKeyToOpenSSH = function(key, comment) {
  var type = "ssh-rsa";
  comment = comment || "";
  var buffer = forge.util.createBuffer();
  _addStringToBuffer(buffer, type);
  _addBigIntegerToBuffer(buffer, key.e);
  _addBigIntegerToBuffer(buffer, key.n);
  return type + " " + forge.util.encode64(buffer.bytes()) + " " + comment;
};
ssh.privateKeyToOpenSSH = function(privateKey, passphrase) {
  if (!passphrase) {
    return forge.pki.privateKeyToPem(privateKey);
  }
  return forge.pki.encryptRsaPrivateKey(
    privateKey,
    passphrase,
    { legacy: true, algorithm: "aes128" }
  );
};
ssh.getPublicKeyFingerprint = function(key, options) {
  options = options || {};
  var md = options.md || forge.md.md5.create();
  var type = "ssh-rsa";
  var buffer = forge.util.createBuffer();
  _addStringToBuffer(buffer, type);
  _addBigIntegerToBuffer(buffer, key.e);
  _addBigIntegerToBuffer(buffer, key.n);
  md.start();
  md.update(buffer.getBytes());
  var digest = md.digest();
  if (options.encoding === "hex") {
    var hex = digest.toHex();
    if (options.delimiter) {
      return hex.match(/.{2}/g).join(options.delimiter);
    }
    return hex;
  } else if (options.encoding === "binary") {
    return digest.getBytes();
  } else if (options.encoding) {
    throw new Error('Unknown encoding "' + options.encoding + '".');
  }
  return digest;
};
function _addBigIntegerToBuffer(buffer, val) {
  var hexVal = val.toString(16);
  if (hexVal[0] >= "8") {
    hexVal = "00" + hexVal;
  }
  var bytes = forge.util.hexToBytes(hexVal);
  buffer.putInt32(bytes.length);
  buffer.putBytes(bytes);
}
function _addStringToBuffer(buffer, val) {
  buffer.putInt32(val.length);
  buffer.putString(val);
}
function _sha1() {
  var sha = forge.md.sha1.create();
  var num = arguments.length;
  for (var i = 0; i < num; ++i) {
    sha.update(arguments[i]);
  }
  return sha.digest();
}
var lib = forge$C;
class ForgeEncrypt {
  constructor() {
    Object.defineProperty(this, "publicKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "privateKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
  }
  /**
   * Set the public key (equivalent to JSEncrypt.setPublicKey)
   * Matches JSEncrypt's permissive behavior - doesn't throw on invalid keys
   */
  setPublicKey(publicKeyPem) {
    try {
      this.publicKey = lib.pki.publicKeyFromPem(publicKeyPem);
    } catch (error) {
      this.publicKey = null;
    }
  }
  /**
   * Set the private key (equivalent to JSEncrypt.setPrivateKey)
   * Matches JSEncrypt's permissive behavior - doesn't throw on invalid keys
   */
  setPrivateKey(privateKeyPem) {
    try {
      this.privateKey = lib.pki.privateKeyFromPem(privateKeyPem);
    } catch (error) {
      this.privateKey = null;
    }
  }
  /**
   * Encrypt data with public key (equivalent to JSEncrypt.encrypt)
   * Returns base64 encoded encrypted data or false if encryption fails
   */
  encrypt(data) {
    if (!this.publicKey) {
      return false;
    }
    try {
      const encrypted = this.publicKey.encrypt(data, "RSAES-PKCS1-V1_5");
      return lib.util.encode64(encrypted);
    } catch (error) {
      return false;
    }
  }
  /**
   * Decrypt data with private key (equivalent to JSEncrypt.decrypt)
   * Expects base64 encoded encrypted data, returns false if decryption fails
   */
  decrypt(encryptedData) {
    if (!this.privateKey) {
      return false;
    }
    try {
      const encryptedBytes = lib.util.decode64(encryptedData);
      const decrypted = this.privateKey.decrypt(encryptedBytes, "RSAES-PKCS1-V1_5");
      return decrypted;
    } catch (error) {
      return false;
    }
  }
  /**
   * Get the public key in PEM format
   */
  getPublicKey() {
    if (!this.publicKey) {
      throw new Error("Public key not set");
    }
    return lib.pki.publicKeyToPem(this.publicKey);
  }
  /**
   * Get the private key in PEM format
   */
  getPrivateKey() {
    if (!this.privateKey) {
      throw new Error("Private key not set");
    }
    return lib.pki.privateKeyToPem(this.privateKey);
  }
}
class DuplicatedOperatorIdError extends SSVKeysException {
  constructor(operator, message) {
    super(message);
    Object.defineProperty(this, "operator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.operator = operator;
  }
}
class DuplicatedOperatorPublicKeyError extends SSVKeysException {
  constructor(operator, message) {
    super(message);
    Object.defineProperty(this, "operator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.operator = operator;
  }
}
class OperatorsCountsMismatchError extends SSVKeysException {
  constructor(propertyListOne, propertyListTwo, message) {
    super(message);
    Object.defineProperty(this, "listOne", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "listTwo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.listOne = propertyListOne;
    this.listTwo = propertyListTwo;
  }
}
class OperatorPublicKeyError extends SSVKeysException {
  constructor(operator, message) {
    super(message);
    Object.defineProperty(this, "operator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.operator = operator;
  }
}
const OperatorPublicKeyValidator$1 = (publicKey) => {
  publicKey = publicKey.trim();
  const begin = "-----BEGIN RSA PUBLIC KEY-----";
  const end = "-----END RSA PUBLIC KEY-----";
  const encrypt = new ForgeEncrypt();
  let decodedOperator = "";
  try {
    let decodedPublicKey = "";
    if (!publicKey.startsWith(begin)) {
      if (publicKey.length < 98) {
        throw new Error("The length of the operator public key must be at least 98 characters.");
      }
      try {
        decodedPublicKey = lib.util.decode64(publicKey).trim();
      } catch (error) {
        throw new Error("Failed to decode the operator public key. Ensure it's correctly base64 encoded.");
      }
      if (!decodedPublicKey.startsWith(begin)) {
        throw new Error(`Operator public key does not start with '${begin}'`);
      }
    } else {
      decodedPublicKey = publicKey;
    }
    if (!decodedPublicKey.endsWith(end)) {
      throw new Error(`Operator public key does not end with '${end}'`);
    }
    try {
      const content = decodedPublicKey.slice(begin.length, publicKey.length - end.length).trim();
      decodedOperator = lib.util.decode64(content);
    } catch {
      throw new Error("Failed to decode the RSA public key. Ensure it's correctly base64 encoded.");
    }
    try {
      encrypt.setPublicKey(decodedOperator);
    } catch {
      throw new Error("Invalid operator key format, make sure the operator exists in the network.");
    }
  } catch (error) {
    throw new OperatorPublicKeyError({
      rsa: decodedOperator,
      base64: publicKey
    }, error.message);
  }
  return true;
};
const isOperatorsLengthValid = (length) => length >= 4 && length <= 13 && length % 3 === 1;
class ThresholdInvalidOperatorsLengthError extends SSVKeysException {
  constructor(operators, message) {
    super(message);
    Object.defineProperty(this, "operators", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.operators = operators;
  }
}
class ThresholdInvalidOperatorIdError extends SSVKeysException {
  constructor(operator, message) {
    super(message);
    Object.defineProperty(this, "operator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.operator = operator;
  }
}
class Threshold {
  constructor() {
    Object.defineProperty(this, "publicKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "privateKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shares", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  static get DEFAULT_THRESHOLD_NUMBER() {
    return 3;
  }
  /**
   * Receives list of operators IDs.
   *  len(operator IDs) := 3 * F + 1
   *
   * If F calculated from this formula is not integer number - it will raise exception.
   * Generate keys and return promise
   */
  async create(privateKeyString, operatorIds) {
    if (!privateKeyString.startsWith("0x")) {
      throw new PrivateKeyFormatError(privateKeyString, "The private key must be provided in the 0x format.");
    }
    operatorIds.map((operatorId) => {
      if (!Number.isInteger(operatorId)) {
        throw new ThresholdInvalidOperatorIdError(operatorId, `Operator must be integer. Got: ${operatorId}`);
      }
    });
    if (!isOperatorsLengthValid(operatorIds.length)) {
      throw new ThresholdInvalidOperatorsLengthError(operatorIds, "Invalid operators amount. Enter an 3f+1 compatible amount of operator ids.");
    }
    const msk = [];
    const mpk = [];
    if (!bls.deserializeHexStrToSecretKey) {
      await bls.init(bls.BLS12_381);
    }
    this.privateKey = bls.deserializeHexStrToSecretKey(privateKeyString.replace("0x", ""));
    this.publicKey = this.privateKey.getPublicKey();
    msk.push(this.privateKey);
    mpk.push(this.publicKey);
    const F = (operatorIds.length - 1) / 3;
    for (let i = 1; i < operatorIds.length - F; i += 1) {
      const sk = new bls.SecretKey();
      sk.setByCSPRNG();
      msk.push(sk);
      const pk = sk.getPublicKey();
      mpk.push(pk);
    }
    for (const operatorId of operatorIds) {
      const id = new bls.Id();
      id.setInt(operatorId);
      const shareSecretKey = new bls.SecretKey();
      shareSecretKey.share(msk, id);
      const sharePublicKey = new bls.PublicKey();
      sharePublicKey.share(mpk, id);
      this.shares.push({
        privateKey: `0x${shareSecretKey.serializeToHexStr()}`,
        publicKey: `0x${sharePublicKey.serializeToHexStr()}`,
        id
      });
    }
    const response = {
      privateKey: `0x${this.privateKey.serializeToHexStr()}`,
      publicKey: `0x${this.publicKey.serializeToHexStr()}`,
      shares: this.shares
    };
    return response;
  }
}
var scrypt = { exports: {} };
(function(module, exports) {
  (function(root) {
    const MAX_VALUE = 2147483647;
    function SHA256(m) {
      const K = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      let h0 = 1779033703, h1 = 3144134277, h2 = 1013904242, h3 = 2773480762;
      let h4 = 1359893119, h5 = 2600822924, h6 = 528734635, h7 = 1541459225;
      const w = new Uint32Array(64);
      function blocks(p2) {
        let off = 0, len = p2.length;
        while (len >= 64) {
          let a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7, u, i2, j, t1, t2;
          for (i2 = 0; i2 < 16; i2++) {
            j = off + i2 * 4;
            w[i2] = (p2[j] & 255) << 24 | (p2[j + 1] & 255) << 16 | (p2[j + 2] & 255) << 8 | p2[j + 3] & 255;
          }
          for (i2 = 16; i2 < 64; i2++) {
            u = w[i2 - 2];
            t1 = (u >>> 17 | u << 32 - 17) ^ (u >>> 19 | u << 32 - 19) ^ u >>> 10;
            u = w[i2 - 15];
            t2 = (u >>> 7 | u << 32 - 7) ^ (u >>> 18 | u << 32 - 18) ^ u >>> 3;
            w[i2] = (t1 + w[i2 - 7] | 0) + (t2 + w[i2 - 16] | 0) | 0;
          }
          for (i2 = 0; i2 < 64; i2++) {
            t1 = (((e >>> 6 | e << 32 - 6) ^ (e >>> 11 | e << 32 - 11) ^ (e >>> 25 | e << 32 - 25)) + (e & f ^ ~e & g) | 0) + (h + (K[i2] + w[i2] | 0) | 0) | 0;
            t2 = ((a >>> 2 | a << 32 - 2) ^ (a >>> 13 | a << 32 - 13) ^ (a >>> 22 | a << 32 - 22)) + (a & b ^ a & c ^ b & c) | 0;
            h = g;
            g = f;
            f = e;
            e = d + t1 | 0;
            d = c;
            c = b;
            b = a;
            a = t1 + t2 | 0;
          }
          h0 = h0 + a | 0;
          h1 = h1 + b | 0;
          h2 = h2 + c | 0;
          h3 = h3 + d | 0;
          h4 = h4 + e | 0;
          h5 = h5 + f | 0;
          h6 = h6 + g | 0;
          h7 = h7 + h | 0;
          off += 64;
          len -= 64;
        }
      }
      blocks(m);
      let i, bytesLeft = m.length % 64, bitLenHi = m.length / 536870912 | 0, bitLenLo = m.length << 3, numZeros = bytesLeft < 56 ? 56 : 120, p = m.slice(m.length - bytesLeft, m.length);
      p.push(128);
      for (i = bytesLeft + 1; i < numZeros; i++) {
        p.push(0);
      }
      p.push(bitLenHi >>> 24 & 255);
      p.push(bitLenHi >>> 16 & 255);
      p.push(bitLenHi >>> 8 & 255);
      p.push(bitLenHi >>> 0 & 255);
      p.push(bitLenLo >>> 24 & 255);
      p.push(bitLenLo >>> 16 & 255);
      p.push(bitLenLo >>> 8 & 255);
      p.push(bitLenLo >>> 0 & 255);
      blocks(p);
      return [
        h0 >>> 24 & 255,
        h0 >>> 16 & 255,
        h0 >>> 8 & 255,
        h0 >>> 0 & 255,
        h1 >>> 24 & 255,
        h1 >>> 16 & 255,
        h1 >>> 8 & 255,
        h1 >>> 0 & 255,
        h2 >>> 24 & 255,
        h2 >>> 16 & 255,
        h2 >>> 8 & 255,
        h2 >>> 0 & 255,
        h3 >>> 24 & 255,
        h3 >>> 16 & 255,
        h3 >>> 8 & 255,
        h3 >>> 0 & 255,
        h4 >>> 24 & 255,
        h4 >>> 16 & 255,
        h4 >>> 8 & 255,
        h4 >>> 0 & 255,
        h5 >>> 24 & 255,
        h5 >>> 16 & 255,
        h5 >>> 8 & 255,
        h5 >>> 0 & 255,
        h6 >>> 24 & 255,
        h6 >>> 16 & 255,
        h6 >>> 8 & 255,
        h6 >>> 0 & 255,
        h7 >>> 24 & 255,
        h7 >>> 16 & 255,
        h7 >>> 8 & 255,
        h7 >>> 0 & 255
      ];
    }
    function PBKDF2_HMAC_SHA256_OneIter(password, salt, dkLen) {
      password = password.length <= 64 ? password : SHA256(password);
      const innerLen = 64 + salt.length + 4;
      const inner = new Array(innerLen);
      const outerKey = new Array(64);
      let i;
      let dk = [];
      for (i = 0; i < 64; i++) {
        inner[i] = 54;
      }
      for (i = 0; i < password.length; i++) {
        inner[i] ^= password[i];
      }
      for (i = 0; i < salt.length; i++) {
        inner[64 + i] = salt[i];
      }
      for (i = innerLen - 4; i < innerLen; i++) {
        inner[i] = 0;
      }
      for (i = 0; i < 64; i++) outerKey[i] = 92;
      for (i = 0; i < password.length; i++) outerKey[i] ^= password[i];
      function incrementCounter() {
        for (let i2 = innerLen - 1; i2 >= innerLen - 4; i2--) {
          inner[i2]++;
          if (inner[i2] <= 255) return;
          inner[i2] = 0;
        }
      }
      while (dkLen >= 32) {
        incrementCounter();
        dk = dk.concat(SHA256(outerKey.concat(SHA256(inner))));
        dkLen -= 32;
      }
      if (dkLen > 0) {
        incrementCounter();
        dk = dk.concat(SHA256(outerKey.concat(SHA256(inner))).slice(0, dkLen));
      }
      return dk;
    }
    function blockmix_salsa8(BY, Yi, r, x, _X) {
      let i;
      arraycopy(BY, (2 * r - 1) * 16, _X, 0, 16);
      for (i = 0; i < 2 * r; i++) {
        blockxor(BY, i * 16, _X, 16);
        salsa20_8(_X, x);
        arraycopy(_X, 0, BY, Yi + i * 16, 16);
      }
      for (i = 0; i < r; i++) {
        arraycopy(BY, Yi + i * 2 * 16, BY, i * 16, 16);
      }
      for (i = 0; i < r; i++) {
        arraycopy(BY, Yi + (i * 2 + 1) * 16, BY, (i + r) * 16, 16);
      }
    }
    function R(a, b) {
      return a << b | a >>> 32 - b;
    }
    function salsa20_8(B, x) {
      arraycopy(B, 0, x, 0, 16);
      for (let i = 8; i > 0; i -= 2) {
        x[4] ^= R(x[0] + x[12], 7);
        x[8] ^= R(x[4] + x[0], 9);
        x[12] ^= R(x[8] + x[4], 13);
        x[0] ^= R(x[12] + x[8], 18);
        x[9] ^= R(x[5] + x[1], 7);
        x[13] ^= R(x[9] + x[5], 9);
        x[1] ^= R(x[13] + x[9], 13);
        x[5] ^= R(x[1] + x[13], 18);
        x[14] ^= R(x[10] + x[6], 7);
        x[2] ^= R(x[14] + x[10], 9);
        x[6] ^= R(x[2] + x[14], 13);
        x[10] ^= R(x[6] + x[2], 18);
        x[3] ^= R(x[15] + x[11], 7);
        x[7] ^= R(x[3] + x[15], 9);
        x[11] ^= R(x[7] + x[3], 13);
        x[15] ^= R(x[11] + x[7], 18);
        x[1] ^= R(x[0] + x[3], 7);
        x[2] ^= R(x[1] + x[0], 9);
        x[3] ^= R(x[2] + x[1], 13);
        x[0] ^= R(x[3] + x[2], 18);
        x[6] ^= R(x[5] + x[4], 7);
        x[7] ^= R(x[6] + x[5], 9);
        x[4] ^= R(x[7] + x[6], 13);
        x[5] ^= R(x[4] + x[7], 18);
        x[11] ^= R(x[10] + x[9], 7);
        x[8] ^= R(x[11] + x[10], 9);
        x[9] ^= R(x[8] + x[11], 13);
        x[10] ^= R(x[9] + x[8], 18);
        x[12] ^= R(x[15] + x[14], 7);
        x[13] ^= R(x[12] + x[15], 9);
        x[14] ^= R(x[13] + x[12], 13);
        x[15] ^= R(x[14] + x[13], 18);
      }
      for (let i = 0; i < 16; ++i) {
        B[i] += x[i];
      }
    }
    function blockxor(S2, Si, D3, len) {
      for (let i = 0; i < len; i++) {
        D3[i] ^= S2[Si + i];
      }
    }
    function arraycopy(src, srcPos, dest, destPos, length) {
      while (length--) {
        dest[destPos++] = src[srcPos++];
      }
    }
    function checkBufferish(o) {
      if (!o || typeof o.length !== "number") {
        return false;
      }
      for (let i = 0; i < o.length; i++) {
        const v = o[i];
        if (typeof v !== "number" || v % 1 || v < 0 || v >= 256) {
          return false;
        }
      }
      return true;
    }
    function ensureInteger(value, name) {
      if (typeof value !== "number" || value % 1) {
        throw new Error("invalid " + name);
      }
      return value;
    }
    function _scrypt(password, salt, N, r, p, dkLen, callback) {
      N = ensureInteger(N, "N");
      r = ensureInteger(r, "r");
      p = ensureInteger(p, "p");
      dkLen = ensureInteger(dkLen, "dkLen");
      if (N === 0 || (N & N - 1) !== 0) {
        throw new Error("N must be power of 2");
      }
      if (N > MAX_VALUE / 128 / r) {
        throw new Error("N too large");
      }
      if (r > MAX_VALUE / 128 / p) {
        throw new Error("r too large");
      }
      if (!checkBufferish(password)) {
        throw new Error("password must be an array or buffer");
      }
      password = Array.prototype.slice.call(password);
      if (!checkBufferish(salt)) {
        throw new Error("salt must be an array or buffer");
      }
      salt = Array.prototype.slice.call(salt);
      let b = PBKDF2_HMAC_SHA256_OneIter(password, salt, p * 128 * r);
      const B = new Uint32Array(p * 32 * r);
      for (let i = 0; i < B.length; i++) {
        const j = i * 4;
        B[i] = (b[j + 3] & 255) << 24 | (b[j + 2] & 255) << 16 | (b[j + 1] & 255) << 8 | (b[j + 0] & 255) << 0;
      }
      const XY = new Uint32Array(64 * r);
      const V = new Uint32Array(32 * r * N);
      const Yi = 32 * r;
      const x = new Uint32Array(16);
      const _X = new Uint32Array(16);
      const totalOps = p * N * 2;
      let currentOp = 0;
      let lastPercent10 = null;
      let stop = false;
      let state = 0;
      let i0 = 0, i1;
      let Bi;
      const limit = callback ? parseInt(1e3 / r) : 4294967295;
      const nextTick = typeof setImmediate !== "undefined" ? setImmediate : setTimeout;
      const incrementalSMix = function() {
        if (stop) {
          return callback(new Error("cancelled"), currentOp / totalOps);
        }
        let steps;
        switch (state) {
          case 0:
            Bi = i0 * 32 * r;
            arraycopy(B, Bi, XY, 0, Yi);
            state = 1;
            i1 = 0;
          case 1:
            steps = N - i1;
            if (steps > limit) {
              steps = limit;
            }
            for (let i = 0; i < steps; i++) {
              arraycopy(XY, 0, V, (i1 + i) * Yi, Yi);
              blockmix_salsa8(XY, Yi, r, x, _X);
            }
            i1 += steps;
            currentOp += steps;
            if (callback) {
              const percent10 = parseInt(1e3 * currentOp / totalOps);
              if (percent10 !== lastPercent10) {
                stop = callback(null, currentOp / totalOps);
                if (stop) {
                  break;
                }
                lastPercent10 = percent10;
              }
            }
            if (i1 < N) {
              break;
            }
            i1 = 0;
            state = 2;
          case 2:
            steps = N - i1;
            if (steps > limit) {
              steps = limit;
            }
            for (let i = 0; i < steps; i++) {
              const offset = (2 * r - 1) * 16;
              const j = XY[offset] & N - 1;
              blockxor(V, j * Yi, XY, Yi);
              blockmix_salsa8(XY, Yi, r, x, _X);
            }
            i1 += steps;
            currentOp += steps;
            if (callback) {
              const percent10 = parseInt(1e3 * currentOp / totalOps);
              if (percent10 !== lastPercent10) {
                stop = callback(null, currentOp / totalOps);
                if (stop) {
                  break;
                }
                lastPercent10 = percent10;
              }
            }
            if (i1 < N) {
              break;
            }
            arraycopy(XY, 0, B, Bi, Yi);
            i0++;
            if (i0 < p) {
              state = 0;
              break;
            }
            b = [];
            for (let i = 0; i < B.length; i++) {
              b.push(B[i] >> 0 & 255);
              b.push(B[i] >> 8 & 255);
              b.push(B[i] >> 16 & 255);
              b.push(B[i] >> 24 & 255);
            }
            const derivedKey = PBKDF2_HMAC_SHA256_OneIter(password, b, dkLen);
            if (callback) {
              callback(null, 1, derivedKey);
            }
            return derivedKey;
        }
        if (callback) {
          nextTick(incrementalSMix);
        }
      };
      if (!callback) {
        while (true) {
          const derivedKey = incrementalSMix();
          if (derivedKey != void 0) {
            return derivedKey;
          }
        }
      }
      incrementalSMix();
    }
    const lib2 = {
      scrypt: function(password, salt, N, r, p, dkLen, progressCallback) {
        return new Promise(function(resolve, reject) {
          let lastProgress = 0;
          if (progressCallback) {
            progressCallback(0);
          }
          _scrypt(password, salt, N, r, p, dkLen, function(error, progress, key) {
            if (error) {
              reject(error);
            } else if (key) {
              if (progressCallback && lastProgress !== 1) {
                progressCallback(1);
              }
              resolve(new Uint8Array(key));
            } else if (progressCallback && progress !== lastProgress) {
              lastProgress = progress;
              return progressCallback(progress);
            }
          });
        });
      },
      syncScrypt: function(password, salt, N, r, p, dkLen) {
        return new Uint8Array(_scrypt(password, salt, N, r, p, dkLen));
      }
    };
    {
      module.exports = lib2;
    }
  })();
})(scrypt);
var scryptExports = scrypt.exports;
class EthereumKeyStore {
  constructor(keyStoreData) {
    Object.defineProperty(this, "keyStoreData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "privateKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ""
    });
    if (!keyStoreData) {
      throw new KeyStoreDataFormatError(keyStoreData, "Key store data should be JSON or string");
    }
    this.keyStoreData = typeof keyStoreData === "string" ? JSON.parse(keyStoreData) : keyStoreData;
    if (!this.keyStoreData.version) {
      throw new KeyStoreInvalidError(this.keyStoreData, "Invalid keystore file");
    }
  }
  // getPublicKey(): string {
  //   if (this.keyStoreData) {
  //     switch (this.keyStoreData.version ?? this.keyStoreData.Version) {
  //       case 1:
  //         return this.keyStoreData.Address;
  //       case 3:
  //         return this.keyStoreData.id;
  //       case 4:
  //         return this.keyStoreData.pubkey;
  //     }
  //   }
  //   return '';
  // }
  async getPrivateKey(password = "") {
    if (this.privateKey)
      return this.privateKey;
    switch (this.keyStoreData.version) {
      case 3:
        this.privateKey = await this.fromV3(this.keyStoreData, password);
        break;
      case 4:
        this.privateKey = await this.fromCustomV4(this.keyStoreData, password);
        break;
      default:
        throw new EthereumWalletError("Unsupported keystore version");
    }
    if (!this.privateKey) {
      throw new KeyStorePasswordError("Invalid password");
    }
    return this.privateKey;
  }
  async fromV3(json, password) {
    if (!json.crypto && json.Crypto)
      json.crypto = json.Crypto;
    const kdfparams = json.crypto.kdfparams;
    const salt = Buffer.from(kdfparams.salt, "hex");
    const dklen = kdfparams.dklen;
    let derivedKey;
    if (json.crypto.kdf === "scrypt") {
      derivedKey = scryptExports.syncScrypt(Buffer.from(password), salt, kdfparams.n, kdfparams.r, kdfparams.p, dklen);
    } else if (json.crypto.kdf === "pbkdf2") {
      if (kdfparams.prf !== "hmac-sha256")
        throw new EthereumWalletError("Unsupported PBKDF2 params");
      derivedKey = crypto$1.pbkdf2Sync(Buffer.from(password), salt, kdfparams.c, dklen, "sha256");
    } else {
      throw new EthereumWalletError("Unsupported kdf type");
    }
    const ciphertext = Buffer.from(json.crypto.ciphertext, "hex");
    const macCheck = Buffer.concat([Buffer.from(derivedKey.slice(16, 32)), ciphertext]);
    const mac = keccak256(toHex(macCheck)).replace(/^0x/, "");
    if (mac !== json.crypto.mac.toLowerCase()) {
      throw new EthereumWalletError("Invalid password");
    }
    const decipher = crypto$1.createDecipheriv(json.crypto.cipher, Buffer.from(derivedKey.slice(0, 16)), Buffer.from(json.crypto.cipherparams.iv, "hex"));
    const seed = this.runCipherBuffer(decipher, ciphertext);
    return seed.toString("hex");
  }
  async fromCustomV4(input, password) {
    if (input.version !== 4) {
      throw new EthereumWalletError("Not a V4 wallet");
    }
    let derivedKey;
    const { kdf, cipher, checksum } = input.crypto;
    const salt = Buffer.from(kdf.params.salt, "hex");
    const dklen = kdf.params.dklen;
    if (kdf.function === "scrypt") {
      const { n, r, p } = kdf.params;
      derivedKey = scryptExports.syncScrypt(Buffer.from(password), salt, n, r, p, dklen);
    } else if (kdf.function === "pbkdf2") {
      const { c, prf } = kdf.params;
      if (prf !== "hmac-sha256") {
        throw new EthereumWalletError("Unsupported parameters to PBKDF2");
      }
      derivedKey = crypto$1.pbkdf2Sync(Buffer.from(password), salt, c, dklen, "sha256");
    } else {
      throw new EthereumWalletError("Unsupported key derivation scheme");
    }
    const ciphertext = Buffer.from(cipher.message, "hex");
    const checksumBuffer = Buffer.concat([Buffer.from(derivedKey.slice(16, 32)), ciphertext]);
    const hashFn = checksum.function === "sha256" ? sha256$1 : keccak256;
    const calculatedMac = hashFn(toHex(checksumBuffer));
    if (calculatedMac.replace(/^0x/, "") !== checksum.message.toLowerCase()) {
      throw new EthereumWalletError("Invalid password");
    }
    const decipher = crypto$1.createDecipheriv(cipher.function, Buffer.from(derivedKey.slice(0, 16)), Buffer.from(cipher.params.iv, "hex"));
    const seed = this.runCipherBuffer(decipher, ciphertext);
    return seed.toString("hex");
  }
  runCipherBuffer(cipher, data) {
    return Buffer.concat([cipher.update(data), cipher.final()]);
  }
}
class Encryption {
  constructor(operatorPublicKeys, shares) {
    Object.defineProperty(this, "operatorPublicKeys", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shares", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.operatorPublicKeys = [...operatorPublicKeys];
    this.shares = shares;
  }
  encrypt() {
    const encryptedShares = [];
    for (const [idx, operatorPublicKey] of this.operatorPublicKeys.entries()) {
      OperatorPublicKeyValidator$1(operatorPublicKey);
      const forgeEncrypt = new ForgeEncrypt();
      forgeEncrypt.setPublicKey(operatorPublicKey);
      const encryptedPrivateKey = forgeEncrypt.encrypt(this.shares[idx].privateKey);
      if (!encryptedPrivateKey) {
        throw new OperatorPublicKeyError({
          rsa: operatorPublicKey,
          base64: encryptedPrivateKey
        }, "Private key encryption failed.");
      }
      const encryptedShare = {
        operatorPublicKey,
        privateKey: encryptedPrivateKey,
        publicKey: this.shares[idx].publicKey
      };
      encryptedShares.push(encryptedShare);
    }
    return encryptedShares;
  }
}
var __decorate$9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let OperatorPublicKeyValidatorConstraint = class OperatorPublicKeyValidatorConstraint2 {
  validate(value) {
    return OperatorPublicKeyValidator$1(value);
  }
  defaultMessage() {
    return "Invalid operator public key";
  }
};
OperatorPublicKeyValidatorConstraint = __decorate$9([
  ValidatorConstraint({ name: "operatorKey", async: false })
], OperatorPublicKeyValidatorConstraint);
function OperatorPublicKeyValidator(validationOptions) {
  return function(object, propertyName) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: OperatorPublicKeyValidatorConstraint
    });
  };
}
var __decorate$8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class OperatorData {
  constructor(data) {
    Object.defineProperty(this, "id", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "operatorKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.id = data.id;
    this.operatorKey = data.operatorKey;
    this.validate();
  }
  /**
   * Validate operator id and public key
   */
  validate() {
    validateSync(this);
  }
}
__decorate$8([
  IsNotEmpty({ message: "The operator id is null" }),
  IsDefined({ message: "The operator id is undefined" }),
  IsInt({ message: "The operator id must be an integer" }),
  __metadata$3("design:type", Number)
], OperatorData.prototype, "id", void 0);
__decorate$8([
  IsNotEmpty({ message: "The operator public key is null" }),
  IsDefined({ message: "The operator public key is undefined" }),
  IsString({ message: "The operator public key must be a string" }),
  OperatorPublicKeyValidator(),
  __metadata$3("design:type", String)
], OperatorData.prototype, "operatorKey", void 0);
const operatorSortedList = (operators) => {
  const ids = operators.map((op) => op.id);
  const operatorKeys = operators.map((op) => op.operatorKey);
  const validatedOperators = operators.map((operator) => {
    const id = parseInt(`${operator.id}`, 10);
    if (isNaN(id)) {
      throw new OperatorsCountsMismatchError(ids, operatorKeys, `Invalid operator ID: ${operator.id}`);
    }
    if (!operator.operatorKey) {
      throw new OperatorsCountsMismatchError(ids, operatorKeys, `Operator key is missing for operator ID: ${id}`);
    }
    return { ...operator, id };
  });
  validatedOperators.sort((a, b) => a.id - b.id);
  return validatedOperators.map((operator) => new OperatorData(operator));
};
class BLSDeserializeError extends SSVKeysException {
  constructor(publicKey, message) {
    super(message);
    Object.defineProperty(this, "publicKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.publicKey = publicKey;
  }
}
class SingleSharesSignatureInvalid extends SSVKeysException {
  constructor(data, message) {
    super(message);
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = data;
  }
}
const hexArrayToBytes = (hexArr) => {
  const uint8Array = new Uint8Array(hexArr.flatMap((hex) => Array.from(toBytes(hex))));
  return Buffer.from(uint8Array);
};
const buildSignature = async (dataToSign, privateKeyHex) => {
  if (!bls.deserializeHexStrToSecretKey) {
    await bls.init(bls.BLS12_381);
  }
  const privateKey = bls.deserializeHexStrToSecretKey(privateKeyHex.replace("0x", ""));
  const messageHash = keccak256(toBytes(dataToSign));
  const messageBytes = fromHex(messageHash, "bytes");
  const signature = privateKey.sign(messageBytes);
  const signatureHex = signature.serializeToHexStr();
  return `0x${signatureHex}`;
};
const validateSignature = async (signedData, signatureHex, publicKey) => {
  const blsPublicKey = bls.deserializeHexStrToPublicKey(publicKey.replace("0x", ""));
  const signature = bls.deserializeHexStrToSignature(signatureHex.replace("0x", ""));
  const messageHashHex = keccak256(toBytes(signedData));
  const messageHashBytes = fromHex(messageHashHex, "bytes");
  if (!blsPublicKey.verify(signature, messageHashBytes)) {
    throw new SingleSharesSignatureInvalid(signatureHex, "Single shares signature is invalid");
  }
};
const privateToPublicKey = async (privateKey) => {
  if (!bls.deserializeHexStrToSecretKey) {
    await bls.init(bls.BLS12_381);
  }
  return `0x${bls.deserializeHexStrToSecretKey(privateKey.replace("0x", "")).getPublicKey().serializeToHexStr()}`;
};
var __decorate$7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let OpeatorsListValidatorConstraint = class OpeatorsListValidatorConstraint2 {
  validate(operatorsList) {
    const operatorIds = /* @__PURE__ */ new Set(), operatorPublicKeys = /* @__PURE__ */ new Set();
    for (const operator of operatorsList || []) {
      if (operatorIds.has(operator.id)) {
        throw new DuplicatedOperatorIdError(operator, `The operator ID '${operator.id}' is duplicated in the list`);
      }
      operatorIds.add(operator.id);
      if (operatorPublicKeys.has(operator.operatorKey)) {
        throw new DuplicatedOperatorPublicKeyError(operator, `The public key for operator ID ${operator.id} is duplicated in the list`);
      }
      operatorPublicKeys.add(operator.operatorKey);
    }
    return true;
  }
  defaultMessage() {
    return "The list of operators contains duplicate entries";
  }
};
OpeatorsListValidatorConstraint = __decorate$7([
  ValidatorConstraint({ name: "uniqueList", async: false })
], OpeatorsListValidatorConstraint);
function OpeatorsListValidator(validationOptions) {
  return function(object, propertyName) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: OpeatorsListValidatorConstraint
    });
  };
}
var __decorate$6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let PublicKeyValidatorConstraint = class PublicKeyValidatorConstraint2 {
  async validate(value) {
    try {
      if (typeof value === "string") {
        bls.deserializeHexStrToPublicKey(value.replace("0x", ""));
      } else {
        value.forEach((item) => bls.deserializeHexStrToPublicKey(item.replace("0x", "")));
      }
    } catch (e) {
      throw new BLSDeserializeError(value, "Failed to BLS deserialize validator public key");
    }
    return true;
  }
  defaultMessage() {
    return "Invalid public key";
  }
};
PublicKeyValidatorConstraint = __decorate$6([
  ValidatorConstraint({ name: "publicKey", async: true })
], PublicKeyValidatorConstraint);
function PublicKeyValidator(validationOptions) {
  return function(object, propertyName) {
    if (!object || typeof object !== "object") {
      throw new Error(`@PublicKeyValidator must be used on a class property — received ${typeof object} for ${propertyName}`);
    }
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: PublicKeyValidatorConstraint
    });
  };
}
var __decorate$5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let OwnerAddressValidatorConstraint = class OwnerAddressValidatorConstraint2 {
  validate(value) {
    try {
      getAddress(value);
    } catch {
      throw new OwnerAddressFormatError(value, "Owner address is not a valid Ethereum address");
    }
    return true;
  }
  defaultMessage() {
    return "Invalid owner address";
  }
};
OwnerAddressValidatorConstraint = __decorate$5([
  ValidatorConstraint({ name: "ownerAddress", async: false })
], OwnerAddressValidatorConstraint);
function OwnerAddressValidator(validationOptions) {
  return function(object, propertyName) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: OwnerAddressValidatorConstraint
    });
  };
}
var __decorate$4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let OwnerNonceValidatorConstraint = class OwnerNonceValidatorConstraint2 {
  validate(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new OwnerNonceFormatError(value, "Owner nonce is not positive integer");
    }
    return true;
  }
  defaultMessage() {
    return "Invalid owner nonce";
  }
};
OwnerNonceValidatorConstraint = __decorate$4([
  ValidatorConstraint({ name: "ownerNonce", async: false })
], OwnerNonceValidatorConstraint);
function OwnerNonceValidator(validationOptions) {
  return function(object, propertyName) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: OwnerNonceValidatorConstraint
    });
  };
}
var __decorate$3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let MatchLengthValidatorConstraint = class MatchLengthValidatorConstraint2 {
  validate(value, args) {
    const [relatedPropertyName, customError] = args.constraints;
    const relatedLength = args.object[relatedPropertyName].length;
    if (!Array.isArray(value)) {
      Object.values(value).forEach((arr) => {
        if (relatedLength !== arr.length) {
          throw new OperatorsCountsMismatchError(args.object[relatedPropertyName], value, customError.message);
        }
      });
    } else {
      if (relatedLength !== value.length) {
        throw new OperatorsCountsMismatchError(args.object[relatedPropertyName], value, customError.message);
      }
    }
    return true;
  }
  defaultMessage() {
    return "The length of the entries lists are not equal";
  }
};
MatchLengthValidatorConstraint = __decorate$3([
  ValidatorConstraint({ name: "matchLength", async: false })
], MatchLengthValidatorConstraint);
var __decorate$2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class KeySharesData {
  constructor() {
    Object.defineProperty(this, "ownerNonce", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "ownerAddress", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "publicKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "operators", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
  }
  update(data) {
    if (data.ownerAddress) {
      this.ownerAddress = data.ownerAddress;
    }
    if (typeof data.ownerNonce === "number") {
      this.ownerNonce = data.ownerNonce;
    }
    if (data.publicKey) {
      this.publicKey = data.publicKey;
    }
    if (data.operators) {
      this.operators = operatorSortedList(data.operators);
    }
  }
  /**
   * Do all possible validations.
   */
  async validate() {
    validateSync(this);
  }
  /**
   * Get the list of operators IDs.
   */
  get operatorIds() {
    if (!this.operators?.length) {
      return [];
    }
    return this.operators.map((operator) => parseInt(String(operator.id), 10));
  }
  /**
   * Get the list of operators public keys.
   */
  get operatorPublicKeys() {
    if (!this.operators?.length) {
      return [];
    }
    return this.operators.map((operator) => String(operator.operatorKey));
  }
}
__decorate$2([
  IsOptional(),
  IsNumber(),
  OwnerNonceValidator(),
  __metadata$2("design:type", Object)
], KeySharesData.prototype, "ownerNonce", void 0);
__decorate$2([
  IsOptional(),
  IsString(),
  OwnerAddressValidator(),
  __metadata$2("design:type", Object)
], KeySharesData.prototype, "ownerAddress", void 0);
__decorate$2([
  IsOptional(),
  IsString(),
  Length(98, 98),
  PublicKeyValidator(),
  __metadata$2("design:type", Object)
], KeySharesData.prototype, "publicKey", void 0);
__decorate$2([
  IsOptional(),
  ValidateNested({ each: true }),
  OpeatorsListValidator(),
  __metadata$2("design:type", Object)
], KeySharesData.prototype, "operators", void 0);
var __decorate$1 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class KeySharesPayload {
  constructor() {
    Object.defineProperty(this, "sharesData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "publicKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "operatorIds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  /**
   * Converts arrays of public and private keys to a single hexadecimal string.
   * @param publicKeys Array of public keys.
   * @param privateKeys Array of private keys.
   * @returns Hexadecimal string representation of keys.
   */
  _sharesToBytes(publicKeys, privateKeys) {
    const encryptedShares = [...privateKeys].map((item) => "0x" + Buffer.from(item, "base64").toString("hex"));
    const pkPsBytes = hexArrayToBytes([...publicKeys, ...encryptedShares]);
    return `0x${pkPsBytes.toString("hex")}`;
  }
  /**
   * Updates the payload with new data and validates it.
   * @param data Partial key shares payload to update.
   */
  update(data) {
    this.publicKey = data.publicKey;
    this.sharesData = data.sharesData;
    this.operatorIds = data.operatorIds;
    this.validate();
  }
  /**
   * Validates the current state of the instance.
   * @returns {void | ValidationError[]} Validation errors if any, otherwise undefined.
   */
  validate() {
    validateSync(this);
  }
  /**
   * Builds the payload from the given data.
   * @param data Data to build the payload.
   * @returns {KeySharesPayload} The current instance for chaining.
   */
  build(data) {
    this.publicKey = data.publicKey;
    this.operatorIds = data.operatorIds;
    this.sharesData = this._sharesToBytes(data.encryptedShares.map((share) => share.publicKey), data.encryptedShares.map((share) => share.privateKey));
    return this;
  }
}
__decorate$1([
  IsString(),
  __metadata$1("design:type", String)
], KeySharesPayload.prototype, "sharesData", void 0);
__decorate$1([
  IsString(),
  Length(98, 98),
  PublicKeyValidator(),
  __metadata$1("design:type", String)
], KeySharesPayload.prototype, "publicKey", void 0);
__decorate$1([
  IsNumber({}, { each: true }),
  __metadata$1("design:type", Array)
], KeySharesPayload.prototype, "operatorIds", void 0);
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const SIGNATURE_LENGTH = 192;
const PUBLIC_KEY_LENGTH = 96;
class KeySharesItem {
  constructor() {
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "payload", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "error", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = new KeySharesData();
    this.payload = new KeySharesPayload();
  }
  /**
   * Build payload from operators list, encrypted shares and validator public key
   */
  async buildPayload(metaData, toSignatureData) {
    const { ownerAddress, ownerNonce, privateKey } = toSignatureData;
    if (!Number.isInteger(ownerNonce) || ownerNonce < 0) {
      throw new OwnerNonceFormatError(ownerNonce, "Owner nonce is not positive integer");
    }
    let address;
    try {
      address = getAddress(ownerAddress);
    } catch {
      throw new OwnerAddressFormatError(ownerAddress, "Owner address is not a valid Ethereum address");
    }
    const payload = this.payload.build({
      publicKey: metaData.publicKey,
      operatorIds: operatorSortedList(metaData.operators).map((operator) => operator.id),
      encryptedShares: metaData.encryptedShares
    });
    const signature = await buildSignature(`${address}:${ownerNonce}`, privateKey);
    const signSharesBytes = hexArrayToBytes([signature, payload.sharesData]);
    payload.sharesData = `0x${signSharesBytes.toString("hex")}`;
    await this.validateSingleShares(payload.sharesData, {
      ownerAddress,
      ownerNonce,
      publicKey: await privateToPublicKey(privateKey)
    });
    return payload;
  }
  async validateSingleShares(shares, fromSignatureData) {
    const { ownerAddress, ownerNonce, publicKey } = fromSignatureData;
    if (!Number.isInteger(ownerNonce) || ownerNonce < 0) {
      throw new OwnerNonceFormatError(ownerNonce, "Owner nonce is not positive integer");
    }
    const address = getAddress(ownerAddress);
    const signaturePt = shares.replace("0x", "").substring(0, SIGNATURE_LENGTH);
    await validateSignature(`${address}:${ownerNonce}`, `0x${signaturePt}`, publicKey);
  }
  /**
   * Build shares from bytes string and operators list length
   * @param bytes
   * @param operatorCount
   */
  buildSharesFromBytes(bytes, operatorCount) {
    if (!bytes.startsWith("0x") || !/^(0x)?[0-9a-fA-F]*$/.test(bytes)) {
      throw new SSVKeysException("Invalid byte string format");
    }
    if (operatorCount <= 0 || !Number.isInteger(operatorCount)) {
      throw new SSVKeysException("Invalid operator count");
    }
    const sharesPt = bytes.slice(2 + SIGNATURE_LENGTH);
    const pkSplit = sharesPt.substring(0, operatorCount * PUBLIC_KEY_LENGTH);
    const pkBytes = toBytes("0x" + pkSplit);
    const sharesPublicKeys = this.splitArray(operatorCount, pkBytes).map((item) => toHex(item));
    const eSplit = bytes.substring(operatorCount * PUBLIC_KEY_LENGTH);
    const eBytes = toBytes("0x" + eSplit);
    const encryptedKeys = this.splitArray(operatorCount, eBytes).map((item) => Buffer.from(toHex(item).slice(2), "hex").toString("base64"));
    return { sharesPublicKeys, encryptedKeys };
  }
  /**
   * Updates the current instance with partial data and payload, and validates.
   */
  update(data) {
    this.data.update(data);
    this.validate();
  }
  /**
   * Validate everything
   */
  validate() {
    validateSync(this);
  }
  /**
   * Stringify key shares to be ready for saving in file.
   */
  toJson() {
    return JSON.stringify({
      data: this.data || null,
      payload: this.payload || null
    }, null, 2);
  }
  splitArray(parts, arr) {
    const partLength = Math.floor(arr.length / parts);
    const partsArr = [];
    for (let i = 0; i < parts; i++) {
      const start = i * partLength;
      const end = start + partLength;
      partsArr.push(arr.slice(start, end));
    }
    return partsArr;
  }
  /**
   * Initialise from JSON or object data.
   */
  static async fromJson(content) {
    const body = typeof content === "string" ? JSON.parse(content) : content;
    const instance = new KeySharesItem();
    try {
      instance.data.update(body.data);
      instance.payload.update(body.payload);
      instance.validate();
      await instance.validateSingleShares(instance.payload.sharesData, {
        ownerAddress: instance.data.ownerAddress,
        ownerNonce: instance.data.ownerNonce,
        publicKey: instance.data.publicKey
      });
    } catch (e) {
      instance.error = e;
    }
    return instance;
  }
}
__decorate([
  IsOptional(),
  ValidateNested(),
  __metadata("design:type", KeySharesData)
], KeySharesItem.prototype, "data", void 0);
__decorate([
  IsOptional(),
  ValidateNested(),
  __metadata("design:type", KeySharesPayload)
], KeySharesItem.prototype, "payload", void 0);
__decorate([
  IsOptional(),
  __metadata("design:type", Object)
], KeySharesItem.prototype, "error", void 0);
class SSVKeys {
  constructor() {
    Object.defineProperty(this, "threshold", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  /**
   * Extract private key from keystore data using keystore password.
   * Generally can be used in browsers when the keystore data has been provided by browser.
   * @param data
   * @param password
   */
  async extractKeys(data, password) {
    const privateKey = await new EthereumKeyStore(data).getPrivateKey(password);
    if (!bls.deserializeHexStrToSecretKey) {
      await bls.init(bls.BLS12_381);
    }
    return {
      privateKey: `0x${privateKey}`,
      publicKey: `0x${bls.deserializeHexStrToSecretKey(privateKey).getPublicKey().serializeToHexStr()}`
    };
  }
  /**
   * Build threshold using private key and list of operators.
   * @param privateKey
   * @param operators
   */
  async createThreshold(privateKey, operators) {
    const sortedOperators = operatorSortedList(operators);
    this.threshold = await new Threshold().create(privateKey, sortedOperators.map((item) => item.id));
    return this.threshold;
  }
  /**
   * Encrypt operators shares using operators list (id, publicKey).
   * @param operators
   * @param shares
   */
  async encryptShares(operators, shares) {
    const sortedOperators = operatorSortedList(operators);
    const decodedOperatorPublicKeys = sortedOperators.map((item) => Buffer.from(item.operatorKey, "base64").toString());
    return new Encryption(decodedOperatorPublicKeys, shares).encrypt();
  }
  /**
   * Build shares from private key, operators list
   * @param privateKey
   * @param operators
   */
  async buildShares(privateKey, operators) {
    const threshold = await this.createThreshold(privateKey, operators);
    return this.encryptShares(operators, threshold.shares);
  }
  /**
   * Getting threshold if it has been created before.
   */
  getThreshold() {
    return this.threshold;
  }
  async validateSharesPostRegistration({ shares, operatorsCount, validatorPublicKey, isAccountExists, ownerAddress, ownerNonce, blockNumber }) {
    const keySharesItem = new KeySharesItem();
    let restoredSharesPublicKeys;
    let restoredSharesEncryptedKeys;
    let sharesError = "";
    let sharesErrorMessage = "";
    let signatureError = "";
    let signatureErrorMessage = "";
    let errorMessage = "";
    try {
      const restoredShares = keySharesItem.buildSharesFromBytes(shares, operatorsCount);
      const { sharesPublicKeys, encryptedKeys } = restoredShares;
      restoredSharesPublicKeys = sharesPublicKeys;
      restoredSharesEncryptedKeys = encryptedKeys;
    } catch (e) {
      sharesError = e.stack || e.trace || e;
      sharesErrorMessage = e.message;
      errorMessage = "Can not extract shares from bytes";
    }
    if (!sharesError && !errorMessage) {
      const signatureData = { ownerNonce, publicKey: validatorPublicKey, ownerAddress };
      try {
        await keySharesItem.validateSingleShares(shares, signatureData);
      } catch (e) {
        signatureError = e.stack || e.trace || e;
        signatureErrorMessage = e.message;
        errorMessage = "Failed to validate single shares";
        if (isAccountExists) {
          errorMessage += `. Account exist for owner address: ${ownerAddress}`;
        } else {
          errorMessage += `. Account is not synced for owner address: ${ownerAddress}`;
        }
        if (ownerNonce) {
          errorMessage += `. Used nonce: ${ownerNonce}`;
        }
        errorMessage += `. Signature Data: ${JSON.stringify(signatureData)}`;
      }
    }
    return {
      isValid: !sharesError && !signatureError && !errorMessage,
      isSharesValid: !sharesError,
      sharesPublicKeys: restoredSharesPublicKeys,
      encryptedKeys: restoredSharesEncryptedKeys,
      memo: !!sharesError || !!signatureError ? [{
        message: errorMessage,
        error: sharesError || signatureError,
        data: `${sharesErrorMessage}${signatureErrorMessage ? ". " + signatureErrorMessage : ""}`,
        blockNumber
      }] : []
    };
  }
}
export {
  KeySharesItem as K,
  OperatorPublicKeyError as O,
  SSVKeys as S,
  SSVKeysException as a,
  KeySharesPayload as b,
  OperatorsCountsMismatchError as c,
  getDefaultExportFromCjs as g
};
