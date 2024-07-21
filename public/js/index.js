"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/whatwg-fetch@3.6.20/node_modules/whatwg-fetch/dist/fetch.umd.js
  var require_fetch_umd = __commonJS({
    "node_modules/.pnpm/whatwg-fetch@3.6.20/node_modules/whatwg-fetch/dist/fetch.umd.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global2.WHATWGFetch = {});
      })(exports, function(exports2) {
        "use strict";
        var g = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
        typeof global !== "undefined" && global || {};
        var support = {
          searchParams: "URLSearchParams" in g,
          iterable: "Symbol" in g && "iterator" in Symbol,
          blob: "FileReader" in g && "Blob" in g && function() {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          }(),
          formData: "FormData" in g,
          arrayBuffer: "ArrayBuffer" in g
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name2) {
          if (typeof name2 !== "string") {
            name2 = String(name2);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name2) || name2 === "") {
            throw new TypeError('Invalid character in header field name: "' + name2 + '"');
          }
          return name2.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers(headers) {
          this.map = {};
          if (headers instanceof Headers) {
            headers.forEach(function(value, name2) {
              this.append(name2, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              if (header.length != 2) {
                throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
              }
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name2) {
              this.append(name2, headers[name2]);
            }, this);
          }
        }
        Headers.prototype.append = function(name2, value) {
          name2 = normalizeName(name2);
          value = normalizeValue(value);
          var oldValue = this.map[name2];
          this.map[name2] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name2) {
          delete this.map[normalizeName(name2)];
        };
        Headers.prototype.get = function(name2) {
          name2 = normalizeName(name2);
          return this.has(name2) ? this.map[name2] : null;
        };
        Headers.prototype.has = function(name2) {
          return this.map.hasOwnProperty(normalizeName(name2));
        };
        Headers.prototype.set = function(name2, value) {
          this.map[normalizeName(name2)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
          for (var name2 in this.map) {
            if (this.map.hasOwnProperty(name2)) {
              callback.call(thisArg, this.map[name2], name2, this);
            }
          }
        };
        Headers.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name2) {
            items.push(name2);
          });
          return iteratorFor(items);
        };
        Headers.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name2) {
            items.push([name2, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        }
        function consumed(body) {
          if (body._noBody)
            return;
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
          var encoding = match ? match[1] : "utf-8";
          reader.readAsText(blob, encoding);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);
          for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i]);
          }
          return chars.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this.bodyUsed = this.bodyUsed;
            this._bodyInit = body;
            if (!body) {
              this._noBody = true;
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
          }
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var isConsumed = consumed(this);
              if (isConsumed) {
                return isConsumed;
              } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                return Promise.resolve(
                  this._bodyArrayBuffer.buffer.slice(
                    this._bodyArrayBuffer.byteOffset,
                    this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                  )
                );
              } else {
                return Promise.resolve(this._bodyArrayBuffer);
              }
            } else if (support.blob) {
              return this.blob().then(readBlobAsArrayBuffer);
            } else {
              throw new Error("could not read as ArrayBuffer");
            }
          };
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
          if (!(this instanceof Request)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          options = options || {};
          var body = options.body;
          if (input instanceof Request) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal || function() {
            if ("AbortController" in g) {
              var ctrl = new AbortController();
              return ctrl.signal;
            }
          }();
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
          if (this.method === "GET" || this.method === "HEAD") {
            if (options.cache === "no-store" || options.cache === "no-cache") {
              var reParamSearch = /([?&])_=[^&]*/;
              if (reParamSearch.test(this.url)) {
                this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
              } else {
                var reQueryString = /\?/;
                this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
              }
            }
          }
        }
        Request.prototype.clone = function() {
          return new Request(this, { body: this._bodyInit });
        };
        function decode(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name2 = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name2), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split("\r").map(function(header) {
            return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
          }).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              try {
                headers.append(key, value);
              } catch (error) {
                console.warn("Response " + error.message);
              }
            }
          });
          return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
          if (!(this instanceof Response)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          if (this.status < 200 || this.status > 599) {
            throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
          }
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
          this.headers = new Headers(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
          });
        };
        Response.error = function() {
          var response = new Response(null, { status: 200, statusText: "" });
          response.ok = false;
          response.status = 0;
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response(null, { status, headers: { location: url } });
        };
        exports2.DOMException = g.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name2) {
            this.message = message;
            this.name = name2;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init2) {
          return new Promise(function(resolve, reject) {
            var request = new Request(input, init2);
            if (request.signal && request.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) {
                options.status = 200;
              } else {
                options.status = xhr.status;
              }
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              setTimeout(function() {
                resolve(new Response(body, options));
              }, 0);
            };
            xhr.onerror = function() {
              setTimeout(function() {
                reject(new TypeError("Network request failed"));
              }, 0);
            };
            xhr.ontimeout = function() {
              setTimeout(function() {
                reject(new TypeError("Network request timed out"));
              }, 0);
            };
            xhr.onabort = function() {
              setTimeout(function() {
                reject(new exports2.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function fixUrl(url) {
              try {
                return url === "" && g.location.href ? g.location.href : url;
              } catch (e) {
                return url;
              }
            }
            xhr.open(request.method, fixUrl(request.url), true);
            if (request.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr) {
              if (support.blob) {
                xhr.responseType = "blob";
              } else if (support.arrayBuffer) {
                xhr.responseType = "arraybuffer";
              }
            }
            if (init2 && typeof init2.headers === "object" && !(init2.headers instanceof Headers || g.Headers && init2.headers instanceof g.Headers)) {
              var names = [];
              Object.getOwnPropertyNames(init2.headers).forEach(function(name2) {
                names.push(normalizeName(name2));
                xhr.setRequestHeader(name2, normalizeValue(init2.headers[name2]));
              });
              request.headers.forEach(function(value, name2) {
                if (names.indexOf(name2) === -1) {
                  xhr.setRequestHeader(name2, value);
                }
              });
            } else {
              request.headers.forEach(function(value, name2) {
                xhr.setRequestHeader(name2, value);
              });
            }
            if (request.signal) {
              request.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!g.fetch) {
          g.fetch = fetch2;
          g.Headers = Headers;
          g.Request = Request;
          g.Response = Response;
        }
        exports2.Headers = Headers;
        exports2.Request = Request;
        exports2.Response = Response;
        exports2.fetch = fetch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // node_modules/.pnpm/isomorphic-fetch@3.0.0/node_modules/isomorphic-fetch/fetch-npm-browserify.js
  var require_fetch_npm_browserify = __commonJS({
    "node_modules/.pnpm/isomorphic-fetch@3.0.0/node_modules/isomorphic-fetch/fetch-npm-browserify.js"(exports, module) {
      require_fetch_umd();
      module.exports = self.fetch.bind(self);
    }
  });

  // node_modules/.pnpm/lodash.memoize@4.1.2/node_modules/lodash.memoize/index.js
  var require_lodash = __commonJS({
    "node_modules/.pnpm/lodash.memoize@4.1.2/node_modules/lodash.memoize/index.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      function isHostObject(value) {
        var result = false;
        if (value != null && typeof value.toString != "function") {
          try {
            result = !!(value + "");
          } catch (e) {
          }
        }
        return result;
      }
      var arrayProto = Array.prototype;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var coreJsData = root["__core-js_shared__"];
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectToString = objectProto.toString;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var splice = arrayProto.splice;
      var Map2 = getNative(root, "Map");
      var nativeCreate = getNative(Object, "create");
      function Hash(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
      }
      function hashDelete(key) {
        return this.has(key) && delete this.__data__[key];
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        return getMapData(this, key)["delete"](key);
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        getMapData(this, key).set(key, value);
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function memoize2(func, resolver) {
        if (typeof func != "function" || resolver && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result);
          return result;
        };
        memoized.cache = new (memoize2.Cache || MapCache)();
        return memoized;
      }
      memoize2.Cache = MapCache;
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      function isFunction(value) {
        var tag = isObject(value) ? objectToString.call(value) : "";
        return tag == funcTag || tag == genTag;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      module.exports = memoize2;
    }
  });

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Logger/types.mjs
  var LogType;
  (function(LogType2) {
    LogType2["DEBUG"] = "DEBUG";
    LogType2["ERROR"] = "ERROR";
    LogType2["INFO"] = "INFO";
    LogType2["WARN"] = "WARN";
    LogType2["VERBOSE"] = "VERBOSE";
  })(LogType || (LogType = {}));

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/constants.mjs
  var AWS_CLOUDWATCH_CATEGORY = "Logging";
  var USER_AGENT_HEADER = "x-amz-user-agent";
  var NO_HUBCALLBACK_PROVIDED_EXCEPTION = "NoHubcallbackProvidedException";

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs
  var LOG_LEVELS = {
    VERBOSE: 1,
    DEBUG: 2,
    INFO: 3,
    WARN: 4,
    ERROR: 5
  };
  var ConsoleLogger = class _ConsoleLogger {
    /**
     * @constructor
     * @param {string} name - Name of the logger
     */
    constructor(name2, level = LogType.WARN) {
      this.name = name2;
      this.level = level;
      this._pluggables = [];
    }
    _padding(n) {
      return n < 10 ? "0" + n : "" + n;
    }
    _ts() {
      const dt = /* @__PURE__ */ new Date();
      return [this._padding(dt.getMinutes()), this._padding(dt.getSeconds())].join(":") + "." + dt.getMilliseconds();
    }
    configure(config) {
      if (!config)
        return this._config;
      this._config = config;
      return this._config;
    }
    /**
     * Write log
     * @method
     * @memeberof Logger
     * @param {LogType|string} type - log type, default INFO
     * @param {string|object} msg - Logging message or object
     */
    _log(type, ...msg) {
      let logger_level_name = this.level;
      if (_ConsoleLogger.LOG_LEVEL) {
        logger_level_name = _ConsoleLogger.LOG_LEVEL;
      }
      if (typeof window !== "undefined" && window.LOG_LEVEL) {
        logger_level_name = window.LOG_LEVEL;
      }
      const logger_level = LOG_LEVELS[logger_level_name];
      const type_level = LOG_LEVELS[type];
      if (!(type_level >= logger_level)) {
        return;
      }
      let log = console.log.bind(console);
      if (type === LogType.ERROR && console.error) {
        log = console.error.bind(console);
      }
      if (type === LogType.WARN && console.warn) {
        log = console.warn.bind(console);
      }
      const prefix = `[${type}] ${this._ts()} ${this.name}`;
      let message = "";
      if (msg.length === 1 && typeof msg[0] === "string") {
        message = `${prefix} - ${msg[0]}`;
        log(message);
      } else if (msg.length === 1) {
        message = `${prefix} ${msg[0]}`;
        log(prefix, msg[0]);
      } else if (typeof msg[0] === "string") {
        let obj = msg.slice(1);
        if (obj.length === 1) {
          obj = obj[0];
        }
        message = `${prefix} - ${msg[0]} ${obj}`;
        log(`${prefix} - ${msg[0]}`, obj);
      } else {
        message = `${prefix} ${msg}`;
        log(prefix, msg);
      }
      for (const plugin of this._pluggables) {
        const logEvent = { message, timestamp: Date.now() };
        plugin.pushLogs([logEvent]);
      }
    }
    /**
     * Write General log. Default to INFO
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    log(...msg) {
      this._log(LogType.INFO, ...msg);
    }
    /**
     * Write INFO log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    info(...msg) {
      this._log(LogType.INFO, ...msg);
    }
    /**
     * Write WARN log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    warn(...msg) {
      this._log(LogType.WARN, ...msg);
    }
    /**
     * Write ERROR log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    error(...msg) {
      this._log(LogType.ERROR, ...msg);
    }
    /**
     * Write DEBUG log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    debug(...msg) {
      this._log(LogType.DEBUG, ...msg);
    }
    /**
     * Write VERBOSE log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    verbose(...msg) {
      this._log(LogType.VERBOSE, ...msg);
    }
    addPluggable(pluggable) {
      if (pluggable && pluggable.getCategoryName() === AWS_CLOUDWATCH_CATEGORY) {
        this._pluggables.push(pluggable);
        pluggable.configure(this._config);
      }
    }
    listPluggables() {
      return this._pluggables;
    }
  };
  ConsoleLogger.LOG_LEVEL = null;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs
  var AmplifyError = class _AmplifyError extends Error {
    /**
     *  Constructs an AmplifyError.
     *
     * @param message text that describes the main problem.
     * @param underlyingError the underlying cause of the error.
     * @param recoverySuggestion suggestion to recover from the error.
     *
     */
    constructor({ message, name: name2, recoverySuggestion, underlyingError }) {
      super(message);
      this.name = name2;
      this.underlyingError = underlyingError;
      this.recoverySuggestion = recoverySuggestion;
      this.constructor = _AmplifyError;
      Object.setPrototypeOf(this, _AmplifyError.prototype);
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/types/errors.mjs
  var AmplifyErrorCode;
  (function(AmplifyErrorCode2) {
    AmplifyErrorCode2["NoEndpointId"] = "NoEndpointId";
    AmplifyErrorCode2["PlatformNotSupported"] = "PlatformNotSupported";
    AmplifyErrorCode2["Unknown"] = "Unknown";
  })(AmplifyErrorCode || (AmplifyErrorCode = {}));

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/errors/createAssertionFunction.mjs
  var createAssertionFunction = (errorMap, AssertionError = AmplifyError) => (assertion, name2, additionalContext) => {
    const { message, recoverySuggestion } = errorMap[name2];
    if (!assertion) {
      throw new AssertionError({
        name: name2,
        message: additionalContext ? `${message} ${additionalContext}` : message,
        recoverySuggestion
      });
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/errors/errorHelpers.mjs
  var amplifyErrorMap = {
    [AmplifyErrorCode.NoEndpointId]: {
      message: "Endpoint ID was not found and was unable to be created."
    },
    [AmplifyErrorCode.PlatformNotSupported]: {
      message: "Function not supported on current platform."
    },
    [AmplifyErrorCode.Unknown]: {
      message: "An unknown error occurred."
    }
  };
  var assert = createAssertionFunction(amplifyErrorMap);

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs
  var AMPLIFY_SYMBOL = typeof Symbol !== "undefined" ? Symbol("amplify_default") : "@@amplify_default";
  var logger = new ConsoleLogger("Hub");
  var HubClass = class {
    constructor(name2) {
      this.listeners = /* @__PURE__ */ new Map();
      this.protectedChannels = [
        "core",
        "auth",
        "api",
        "analytics",
        "interactions",
        "pubsub",
        "storage",
        "ui",
        "xr"
      ];
      this.name = name2;
    }
    /**
     * Used internally to remove a Hub listener.
     *
     * @remarks
     * This private method is for internal use only. Instead of calling Hub.remove, call the result of Hub.listen.
     */
    _remove(channel, listener) {
      const holder = this.listeners.get(channel);
      if (!holder) {
        logger.warn(`No listeners for ${channel}`);
        return;
      }
      this.listeners.set(channel, [
        ...holder.filter(({ callback }) => callback !== listener)
      ]);
    }
    dispatch(channel, payload, source, ampSymbol) {
      if (typeof channel === "string" && this.protectedChannels.indexOf(channel) > -1) {
        const hasAccess = ampSymbol === AMPLIFY_SYMBOL;
        if (!hasAccess) {
          logger.warn(`WARNING: ${channel} is protected and dispatching on it can have unintended consequences`);
        }
      }
      const capsule = {
        channel,
        payload: { ...payload },
        source,
        patternInfo: []
      };
      try {
        this._toListeners(capsule);
      } catch (e) {
        logger.error(e);
      }
    }
    listen(channel, callback, listenerName = "noname") {
      let cb;
      if (typeof callback !== "function") {
        throw new AmplifyError({
          name: NO_HUBCALLBACK_PROVIDED_EXCEPTION,
          message: "No callback supplied to Hub"
        });
      } else {
        cb = callback;
      }
      let holder = this.listeners.get(channel);
      if (!holder) {
        holder = [];
        this.listeners.set(channel, holder);
      }
      holder.push({
        name: listenerName,
        callback: cb
      });
      return () => {
        this._remove(channel, cb);
      };
    }
    _toListeners(capsule) {
      const { channel, payload } = capsule;
      const holder = this.listeners.get(channel);
      if (holder) {
        holder.forEach((listener) => {
          logger.debug(`Dispatching to ${channel} with `, payload);
          try {
            listener.callback(capsule);
          } catch (e) {
            logger.error(e);
          }
        });
      }
    }
  };
  var Hub = new HubClass("__default__");
  var HubInternal = new HubClass("internal-hub");

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/errorHelpers.mjs
  var AuthConfigurationErrorCode;
  (function(AuthConfigurationErrorCode2) {
    AuthConfigurationErrorCode2["AuthTokenConfigException"] = "AuthTokenConfigException";
    AuthConfigurationErrorCode2["AuthUserPoolAndIdentityPoolException"] = "AuthUserPoolAndIdentityPoolException";
    AuthConfigurationErrorCode2["AuthUserPoolException"] = "AuthUserPoolException";
    AuthConfigurationErrorCode2["InvalidIdentityPoolIdException"] = "InvalidIdentityPoolIdException";
    AuthConfigurationErrorCode2["OAuthNotConfigureException"] = "OAuthNotConfigureException";
  })(AuthConfigurationErrorCode || (AuthConfigurationErrorCode = {}));
  var authConfigurationErrorMap = {
    [AuthConfigurationErrorCode.AuthTokenConfigException]: {
      message: "Auth Token Provider not configured.",
      recoverySuggestion: "Make sure to call Amplify.configure in your app."
    },
    [AuthConfigurationErrorCode.AuthUserPoolAndIdentityPoolException]: {
      message: "Auth UserPool or IdentityPool not configured.",
      recoverySuggestion: "Make sure to call Amplify.configure in your app with UserPoolId and IdentityPoolId."
    },
    [AuthConfigurationErrorCode.AuthUserPoolException]: {
      message: "Auth UserPool not configured.",
      recoverySuggestion: "Make sure to call Amplify.configure in your app with userPoolId and userPoolClientId."
    },
    [AuthConfigurationErrorCode.InvalidIdentityPoolIdException]: {
      message: "Invalid identity pool id provided.",
      recoverySuggestion: "Make sure a valid identityPoolId is given in the config."
    },
    [AuthConfigurationErrorCode.OAuthNotConfigureException]: {
      message: "oauth param not configured.",
      recoverySuggestion: "Make sure to call Amplify.configure with oauth parameter in your app."
    }
  };
  var assert2 = createAssertionFunction(authConfigurationErrorMap);

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/utils/globalHelpers/index.mjs
  var getAtob = () => {
    if (typeof window !== "undefined" && typeof window.atob === "function") {
      return window.atob;
    }
    if (typeof atob === "function") {
      return atob;
    }
    throw new AmplifyError({
      name: "Base64EncoderError",
      message: "Cannot resolve the `atob` function from the environment."
    });
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Decoder.mjs
  var base64Decoder = {
    convert(input) {
      return getAtob()(input);
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs
  function assertTokenProviderConfig(cognitoConfig) {
    let assertionValid = true;
    if (!cognitoConfig) {
      assertionValid = false;
    } else {
      assertionValid = !!cognitoConfig.userPoolId && !!cognitoConfig.userPoolClientId;
    }
    return assert2(assertionValid, AuthConfigurationErrorCode.AuthUserPoolException);
  }
  function assertOAuthConfig(cognitoConfig) {
    const validOAuthConfig = !!cognitoConfig?.loginWith?.oauth?.domain && !!cognitoConfig?.loginWith?.oauth?.redirectSignOut && !!cognitoConfig?.loginWith?.oauth?.redirectSignIn && !!cognitoConfig?.loginWith?.oauth?.responseType;
    return assert2(validOAuthConfig, AuthConfigurationErrorCode.OAuthNotConfigureException);
  }
  function assertIdentityPoolIdConfig(cognitoConfig) {
    const validConfig = !!cognitoConfig?.identityPoolId;
    return assert2(validConfig, AuthConfigurationErrorCode.InvalidIdentityPoolIdException);
  }
  function decodeJWT(token) {
    const tokenParts = token.split(".");
    if (tokenParts.length !== 3) {
      throw new Error("Invalid token");
    }
    try {
      const base64WithUrlSafe = tokenParts[1];
      const base64 = base64WithUrlSafe.replace(/-/g, "+").replace(/_/g, "/");
      const jsonStr = decodeURIComponent(base64Decoder.convert(base64).split("").map((char) => `%${`00${char.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
      const payload = JSON.parse(jsonStr);
      return {
        toString: () => token,
        payload
      };
    } catch (err) {
      throw new Error("Invalid token payload");
    }
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/index.mjs
  function isTokenExpired({ expiresAt, clockDrift }) {
    const currentTime = Date.now();
    return currentTime + clockDrift > expiresAt;
  }
  var AuthClass = class {
    constructor() {
    }
    /**
     * Configure Auth category
     *
     * @internal
     *
     * @param authResourcesConfig - Resources configurations required by Auth providers.
     * @param authOptions - Client options used by library
     *
     * @returns void
     */
    configure(authResourcesConfig, authOptions) {
      this.authConfig = authResourcesConfig;
      this.authOptions = authOptions;
    }
    async fetchAuthSession(options = {}) {
      let tokens;
      let credentialsAndIdentityId;
      let userSub;
      tokens = await this.getTokens(options);
      if (tokens) {
        userSub = tokens.accessToken?.payload?.sub;
        credentialsAndIdentityId = await this.authOptions?.credentialsProvider?.getCredentialsAndIdentityId({
          authConfig: this.authConfig,
          tokens,
          authenticated: true,
          forceRefresh: options.forceRefresh
        });
      } else {
        credentialsAndIdentityId = await this.authOptions?.credentialsProvider?.getCredentialsAndIdentityId({
          authConfig: this.authConfig,
          authenticated: false,
          forceRefresh: options.forceRefresh
        });
      }
      return {
        tokens,
        credentials: credentialsAndIdentityId?.credentials,
        identityId: credentialsAndIdentityId?.identityId,
        userSub
      };
    }
    async clearCredentials() {
      if (this.authOptions?.credentialsProvider) {
        return await this.authOptions.credentialsProvider.clearCredentialsAndIdentityId();
      }
    }
    async getTokens(options) {
      return await this.authOptions?.tokenProvider?.getTokens(options) ?? void 0;
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/parseAWSExports.mjs
  var logger2 = new ConsoleLogger("parseAWSExports");
  var authTypeMapping = {
    API_KEY: "apiKey",
    AWS_IAM: "iam",
    AMAZON_COGNITO_USER_POOLS: "userPool",
    OPENID_CONNECT: "oidc",
    NONE: "none",
    LAMBDA: "lambda"
  };
  var parseAWSExports = (config = {}) => {
    const { aws_appsync_apiKey, aws_appsync_authenticationType, aws_appsync_graphqlEndpoint, aws_appsync_region, aws_bots, aws_bots_config, aws_cognito_identity_pool_id, aws_cognito_sign_up_verification_method, aws_cognito_mfa_configuration, aws_cognito_mfa_types, aws_cognito_password_protection_settings, aws_cognito_verification_mechanisms, aws_cognito_signup_attributes, aws_cognito_social_providers, aws_cognito_username_attributes, aws_mandatory_sign_in, aws_mobile_analytics_app_id, aws_mobile_analytics_app_region, aws_user_files_s3_bucket, aws_user_files_s3_bucket_region, aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing, aws_user_pools_id, aws_user_pools_web_client_id, geo, oauth, predictions, aws_cloud_logic_custom, Notifications, modelIntrospection } = config;
    const amplifyConfig = {};
    if (aws_mobile_analytics_app_id) {
      amplifyConfig.Analytics = {
        Pinpoint: {
          appId: aws_mobile_analytics_app_id,
          region: aws_mobile_analytics_app_region
        }
      };
    }
    const { InAppMessaging, Push } = Notifications ?? {};
    if (InAppMessaging?.AWSPinpoint || Push?.AWSPinpoint) {
      if (InAppMessaging?.AWSPinpoint) {
        const { appId, region } = InAppMessaging.AWSPinpoint;
        amplifyConfig.Notifications = {
          InAppMessaging: {
            Pinpoint: {
              appId,
              region
            }
          }
        };
      }
      if (Push?.AWSPinpoint) {
        const { appId, region } = Push.AWSPinpoint;
        amplifyConfig.Notifications = {
          PushNotification: {
            Pinpoint: {
              appId,
              region
            }
          }
        };
      }
    }
    if (Array.isArray(aws_bots_config)) {
      amplifyConfig.Interactions = {
        LexV1: Object.fromEntries(aws_bots_config.map((bot) => [bot.name, bot]))
      };
    }
    if (aws_appsync_graphqlEndpoint) {
      const defaultAuthMode = authTypeMapping[aws_appsync_authenticationType];
      if (!defaultAuthMode) {
        logger2.debug(`Invalid authentication type ${aws_appsync_authenticationType}. Falling back to IAM.`);
      }
      amplifyConfig.API = {
        GraphQL: {
          endpoint: aws_appsync_graphqlEndpoint,
          apiKey: aws_appsync_apiKey,
          region: aws_appsync_region,
          defaultAuthMode: defaultAuthMode ?? "iam"
        }
      };
      if (modelIntrospection) {
        amplifyConfig.API.GraphQL.modelIntrospection = modelIntrospection;
      }
    }
    const mfaConfig = aws_cognito_mfa_configuration ? {
      status: aws_cognito_mfa_configuration && aws_cognito_mfa_configuration.toLowerCase(),
      totpEnabled: aws_cognito_mfa_types?.includes("TOTP") ?? false,
      smsEnabled: aws_cognito_mfa_types?.includes("SMS") ?? false
    } : void 0;
    const passwordFormatConfig = aws_cognito_password_protection_settings ? {
      minLength: aws_cognito_password_protection_settings.passwordPolicyMinLength,
      requireLowercase: aws_cognito_password_protection_settings.passwordPolicyCharacters?.includes("REQUIRES_LOWERCASE") ?? false,
      requireUppercase: aws_cognito_password_protection_settings.passwordPolicyCharacters?.includes("REQUIRES_UPPERCASE") ?? false,
      requireNumbers: aws_cognito_password_protection_settings.passwordPolicyCharacters?.includes("REQUIRES_NUMBERS") ?? false,
      requireSpecialCharacters: aws_cognito_password_protection_settings.passwordPolicyCharacters?.includes("REQUIRES_SYMBOLS") ?? false
    } : void 0;
    const mergedUserAttributes = Array.from(/* @__PURE__ */ new Set([
      ...aws_cognito_verification_mechanisms ?? [],
      ...aws_cognito_signup_attributes ?? []
    ]));
    const userAttributesConfig = mergedUserAttributes.map((s) => ({
      [s.toLowerCase()]: {
        required: true
        // All user attributes generated by the CLI will be required
      }
    }));
    const loginWithEmailEnabled = aws_cognito_username_attributes?.includes("EMAIL") ?? false;
    const loginWithPhoneEnabled = aws_cognito_username_attributes?.includes("PHONE_NUMBER") ?? false;
    if (aws_cognito_identity_pool_id || aws_user_pools_id) {
      amplifyConfig.Auth = {
        Cognito: {
          identityPoolId: aws_cognito_identity_pool_id,
          allowGuestAccess: aws_mandatory_sign_in !== "enable",
          signUpVerificationMethod: aws_cognito_sign_up_verification_method,
          userAttributes: userAttributesConfig,
          userPoolClientId: aws_user_pools_web_client_id,
          userPoolId: aws_user_pools_id,
          mfa: mfaConfig,
          passwordFormat: passwordFormatConfig,
          loginWith: {
            username: loginWithEmailEnabled || loginWithPhoneEnabled ? false : true,
            email: loginWithEmailEnabled,
            phone: loginWithPhoneEnabled
          }
        }
      };
    }
    const hasOAuthConfig = oauth ? Object.keys(oauth).length > 0 : false;
    const hasSocialProviderConfig = aws_cognito_social_providers ? aws_cognito_social_providers.length > 0 : false;
    if (amplifyConfig.Auth && hasOAuthConfig) {
      amplifyConfig.Auth.Cognito.loginWith = {
        ...amplifyConfig.Auth.Cognito.loginWith,
        oauth: {
          ...getOAuthConfig(oauth),
          ...hasSocialProviderConfig && {
            providers: parseSocialProviders(aws_cognito_social_providers)
          }
        }
      };
    }
    if (aws_user_files_s3_bucket) {
      amplifyConfig.Storage = {
        S3: {
          bucket: aws_user_files_s3_bucket,
          region: aws_user_files_s3_bucket_region,
          dangerouslyConnectToHttpEndpointForTesting: aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing
        }
      };
    }
    if (geo) {
      const { amazon_location_service } = geo;
      amplifyConfig.Geo = amazon_location_service ? {
        LocationService: {
          ...amazon_location_service,
          searchIndices: amazon_location_service.search_indices,
          region: amazon_location_service.region
        }
      } : { ...geo };
    }
    if (aws_cloud_logic_custom) {
      amplifyConfig.API = {
        ...amplifyConfig.API,
        REST: aws_cloud_logic_custom.reduce((acc, api2) => {
          const { name: name2, endpoint, region, service } = api2;
          return {
            ...acc,
            [name2]: {
              endpoint,
              ...service ? { service } : void 0,
              ...region ? { region } : void 0
            }
          };
        }, {})
      };
    }
    if (predictions) {
      const { VoiceId: voiceId } = predictions?.convert?.speechGenerator?.defaults ?? {};
      amplifyConfig.Predictions = voiceId ? {
        ...predictions,
        convert: {
          ...predictions.convert,
          speechGenerator: {
            ...predictions.convert.speechGenerator,
            defaults: { voiceId }
          }
        }
      } : predictions;
    }
    return amplifyConfig;
  };
  var getRedirectUrl = (redirectStr) => redirectStr?.split(",") ?? [];
  var getOAuthConfig = ({ domain, scope, redirectSignIn, redirectSignOut, responseType }) => ({
    domain,
    scopes: scope,
    redirectSignIn: getRedirectUrl(redirectSignIn),
    redirectSignOut: getRedirectUrl(redirectSignOut),
    responseType
  });
  var parseSocialProviders = (aws_cognito_social_providers) => {
    return aws_cognito_social_providers.map((provider) => {
      const updatedProvider = provider.toLowerCase();
      return updatedProvider.charAt(0).toUpperCase() + updatedProvider.slice(1);
    });
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/utils/getClientInfo/getClientInfo.mjs
  var logger3 = new ConsoleLogger("getClientInfo");
  function getClientInfo() {
    if (typeof window === "undefined") {
      return {};
    }
    return browserClientInfo();
  }
  function browserClientInfo() {
    if (typeof window === "undefined") {
      logger3.warn("No window object available to get browser client info");
      return {};
    }
    const nav = window.navigator;
    if (!nav) {
      logger3.warn("No navigator object available to get browser client info");
      return {};
    }
    const { platform, product, vendor, userAgent, language } = nav;
    const type = getBrowserType(userAgent);
    const timezone = browserTimezone();
    return {
      platform,
      make: product || vendor,
      model: type.type,
      version: type.version,
      appVersion: [type.type, type.version].join("/"),
      language,
      timezone
    };
  }
  function browserTimezone() {
    const tzMatch = /\(([A-Za-z\s].*)\)/.exec((/* @__PURE__ */ new Date()).toString());
    return tzMatch ? tzMatch[1] || "" : "";
  }
  function getBrowserType(userAgent) {
    const operaMatch = /.+(Opera[\s[A-Z]*|OPR[\sA-Z]*)\/([0-9\.]+).*/i.exec(userAgent);
    if (operaMatch) {
      return { type: operaMatch[1], version: operaMatch[2] };
    }
    const ieMatch = /.+(Trident|Edge)\/([0-9\.]+).*/i.exec(userAgent);
    if (ieMatch) {
      return { type: ieMatch[1], version: ieMatch[2] };
    }
    const cfMatch = /.+(Chrome|Firefox|FxiOS)\/([0-9\.]+).*/i.exec(userAgent);
    if (cfMatch) {
      return { type: cfMatch[1], version: cfMatch[2] };
    }
    const sMatch = /.+(Safari)\/([0-9\.]+).*/i.exec(userAgent);
    if (sMatch) {
      return { type: sMatch[1], version: sMatch[2] };
    }
    const awkMatch = /.+(AppleWebKit)\/([0-9\.]+).*/i.exec(userAgent);
    if (awkMatch) {
      return { type: awkMatch[1], version: awkMatch[2] };
    }
    const anyMatch = /.*([A-Z]+)\/([0-9\.]+).*/i.exec(userAgent);
    if (anyMatch) {
      return { type: anyMatch[1], version: anyMatch[2] };
    }
    return { type: "", version: "" };
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/utils/deepFreeze.mjs
  var deepFreeze = (object) => {
    const propNames = Reflect.ownKeys(object);
    for (const name2 of propNames) {
      const value = object[name2];
      if (value && typeof value === "object" || typeof value === "function") {
        deepFreeze(value);
      }
    }
    return Object.freeze(object);
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs
  var AmplifyClass = class {
    constructor() {
      this.resourcesConfig = {};
      this.libraryOptions = {};
      this.Auth = new AuthClass();
    }
    /**
     * Configures Amplify for use with your back-end resources.
     *
     * @remarks
     * This API does not perform any merging of either `resourcesConfig` or `libraryOptions`. The most recently
     * provided values will be used after configuration.
     *
     * @remarks
     * `configure` can be used to specify additional library options where available for supported categories.
     *
     * @param resourceConfig - Back-end resource configuration. Typically provided via the `aws-exports.js` file.
     * @param libraryOptions - Additional options for customizing the behavior of the library.
     */
    configure(resourcesConfig, libraryOptions) {
      let resolvedResourceConfig;
      if (Object.keys(resourcesConfig).some((key) => key.startsWith("aws_"))) {
        resolvedResourceConfig = parseAWSExports(resourcesConfig);
      } else {
        resolvedResourceConfig = resourcesConfig;
      }
      this.resourcesConfig = resolvedResourceConfig;
      if (libraryOptions) {
        this.libraryOptions = libraryOptions;
      }
      this.resourcesConfig = deepFreeze(this.resourcesConfig);
      this.Auth.configure(this.resourcesConfig.Auth, this.libraryOptions.Auth);
      Hub.dispatch("core", {
        event: "configure",
        data: resourcesConfig
      }, "Configure", AMPLIFY_SYMBOL);
    }
    /**
     * Provides access to the current back-end resource configuration for the Library.
     *
     * @returns Returns the immutable back-end resource configuration.
     */
    getConfig() {
      return this.resourcesConfig;
    }
  };
  var Amplify = new AmplifyClass();

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/singleton/apis/internal/fetchAuthSession.mjs
  var fetchAuthSession = (amplify, options) => {
    return amplify.Auth.fetchAuthSession(options);
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/singleton/apis/fetchAuthSession.mjs
  var fetchAuthSession2 = (options) => {
    return fetchAuthSession(Amplify, options);
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/endpoints/partitions.mjs
  var defaultPartition = {
    id: "aws",
    outputs: {
      dnsSuffix: "amazonaws.com"
    },
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    regions: ["aws-global"]
  };
  var partitionsInfo = {
    partitions: [
      defaultPartition,
      {
        id: "aws-cn",
        outputs: {
          dnsSuffix: "amazonaws.com.cn"
        },
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        regions: ["aws-cn-global"]
      }
    ]
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/endpoints/getDnsSuffix.mjs
  var getDnsSuffix = (region) => {
    const { partitions } = partitionsInfo;
    for (const { regions, outputs, regionRegex } of partitions) {
      const regex = new RegExp(regionRegex);
      if (regions.includes(region) || regex.test(region)) {
        return outputs.dnsSuffix;
      }
    }
    return defaultPartition.outputs.dnsSuffix;
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/middleware.mjs
  var DEFAULT_RETRY_ATTEMPTS = 3;
  var retryMiddleware = ({ maxAttempts = DEFAULT_RETRY_ATTEMPTS, retryDecider, computeDelay, abortSignal }) => {
    if (maxAttempts < 1) {
      throw new Error("maxAttempts must be greater than 0");
    }
    return (next, context) => async function retryMiddleware2(request) {
      let error;
      let attemptsCount = context.attemptsCount ?? 0;
      let response;
      const handleTerminalErrorOrResponse = () => {
        if (response) {
          addOrIncrementMetadataAttempts(response, attemptsCount);
          return response;
        } else {
          addOrIncrementMetadataAttempts(error, attemptsCount);
          throw error;
        }
      };
      while (!abortSignal?.aborted && attemptsCount < maxAttempts) {
        try {
          response = await next(request);
          error = void 0;
        } catch (e) {
          error = e;
          response = void 0;
        }
        attemptsCount = (context.attemptsCount ?? 0) > attemptsCount ? context.attemptsCount ?? 0 : attemptsCount + 1;
        context.attemptsCount = attemptsCount;
        if (await retryDecider(response, error)) {
          if (!abortSignal?.aborted && attemptsCount < maxAttempts) {
            const delay = computeDelay(attemptsCount);
            await cancellableSleep(delay, abortSignal);
          }
          continue;
        } else {
          return handleTerminalErrorOrResponse();
        }
      }
      if (abortSignal?.aborted) {
        throw new Error("Request aborted.");
      } else {
        return handleTerminalErrorOrResponse();
      }
    };
  };
  var cancellableSleep = (timeoutMs, abortSignal) => {
    if (abortSignal?.aborted) {
      return Promise.resolve();
    }
    let timeoutId;
    let sleepPromiseResolveFn;
    const sleepPromise = new Promise((resolve) => {
      sleepPromiseResolveFn = resolve;
      timeoutId = setTimeout(resolve, timeoutMs);
    });
    abortSignal?.addEventListener("abort", function cancelSleep(event) {
      clearTimeout(timeoutId);
      abortSignal?.removeEventListener("abort", cancelSleep);
      sleepPromiseResolveFn();
    });
    return sleepPromise;
  };
  var addOrIncrementMetadataAttempts = (nextHandlerOutput, attempts) => {
    if (Object.prototype.toString.call(nextHandlerOutput) !== "[object Object]") {
      return;
    }
    nextHandlerOutput["$metadata"] = {
      ...nextHandlerOutput["$metadata"] ?? {},
      attempts
    };
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/userAgent/middleware.mjs
  var userAgentMiddleware = ({ userAgentHeader = "x-amz-user-agent", userAgentValue = "" }) => (next) => {
    return async function userAgentMiddleware2(request) {
      if (userAgentValue.trim().length === 0) {
        const result = await next(request);
        return result;
      } else {
        const headerName = userAgentHeader.toLowerCase();
        request.headers[headerName] = request.headers[headerName] ? `${request.headers[headerName]} ${userAgentValue}` : userAgentValue;
        const response = await next(request);
        return response;
      }
    };
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeTransferHandler.mjs
  var composeTransferHandler = (coreHandler, middleware) => (request, options) => {
    const context = {};
    let composedHandler = (request2) => coreHandler(request2, options);
    for (let i = middleware.length - 1; i >= 0; i--) {
      const m = middleware[i];
      const resolvedMiddleware = m(options);
      composedHandler = resolvedMiddleware(composedHandler, context);
    }
    return composedHandler(request);
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/utils/memoization.mjs
  var withMemoization = (payloadAccessor) => {
    let cached;
    return () => {
      if (!cached) {
        cached = payloadAccessor();
      }
      return cached;
    };
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/handlers/fetch.mjs
  var shouldSendBody = (method) => !["HEAD", "GET", "DELETE"].includes(method.toUpperCase());
  var fetchTransferHandler = async ({ url, method, headers, body }, { abortSignal, cache, withCrossDomainCredentials }) => {
    let resp;
    try {
      resp = await fetch(url, {
        method,
        headers,
        body: shouldSendBody(method) ? body : void 0,
        signal: abortSignal,
        cache,
        credentials: withCrossDomainCredentials ? "include" : "same-origin"
      });
    } catch (e) {
      if (e instanceof TypeError) {
        throw new Error("Network error");
      }
      throw e;
    }
    const responseHeaders = {};
    resp.headers?.forEach((value, key) => {
      responseHeaders[key.toLowerCase()] = value;
    });
    const httpResponse = {
      statusCode: resp.status,
      headers: responseHeaders,
      body: null
    };
    const bodyWithMixin = Object.assign(resp.body ?? {}, {
      text: withMemoization(() => resp.text()),
      blob: withMemoization(() => resp.blob()),
      json: withMemoization(() => resp.json())
    });
    return {
      ...httpResponse,
      body: bodyWithMixin
    };
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/handlers/unauthenticated.mjs
  var unauthenticatedHandler = composeTransferHandler(fetchTransferHandler, [userAgentMiddleware, retryMiddleware]);

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/utils/retry/constants.mjs
  var MAX_DELAY_MS = 5 * 60 * 1e3;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/utils/retry/jitteredBackoff.mjs
  function jitteredBackoff(maxDelayMs = MAX_DELAY_MS) {
    const BASE_TIME_MS = 100;
    const JITTER_FACTOR = 100;
    return (attempt) => {
      const delay = 2 ** attempt * BASE_TIME_MS + JITTER_FACTOR * Math.random();
      return delay > maxDelayMs ? false : delay;
    };
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/jitteredBackoff.mjs
  var DEFAULT_MAX_DELAY_MS = 5 * 60 * 1e3;
  var jitteredBackoff2 = (attempt) => {
    const delayFunction = jitteredBackoff(DEFAULT_MAX_DELAY_MS);
    const delay = delayFunction(attempt);
    return delay === false ? DEFAULT_MAX_DELAY_MS : delay;
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/isClockSkewError.mjs
  var CLOCK_SKEW_ERROR_CODES = [
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch",
    "BadRequestException"
    // API Gateway
  ];
  var isClockSkewError = (errorCode) => !!errorCode && CLOCK_SKEW_ERROR_CODES.includes(errorCode);

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/defaultRetryDecider.mjs
  var getRetryDecider = (errorParser) => async (response, error) => {
    const parsedError = error ?? await errorParser(response) ?? void 0;
    const errorCode = parsedError?.["code"];
    const statusCode = response?.statusCode;
    return isConnectionError(error) || isThrottlingError(statusCode, errorCode) || isClockSkewError(errorCode) || isServerSideError(statusCode, errorCode);
  };
  var THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException"
  ];
  var TIMEOUT_ERROR_CODES = [
    "TimeoutError",
    "RequestTimeout",
    "RequestTimeoutException"
  ];
  var isThrottlingError = (statusCode, errorCode) => statusCode === 429 || !!errorCode && THROTTLING_ERROR_CODES.includes(errorCode);
  var isConnectionError = (error) => error?.["name"] === "Network error";
  var isServerSideError = (statusCode, errorCode) => !!statusCode && [500, 502, 503, 504].includes(statusCode) || !!errorCode && TIMEOUT_ERROR_CODES.includes(errorCode);

  // node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }

  // node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/constants.js
  var BLOCK_SIZE = 64;
  var DIGEST_LENGTH = 32;
  var KEY = new Uint32Array([
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
  var INIT = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ];
  var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

  // node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js
  var RawSha256 = (
    /** @class */
    function() {
      function RawSha2562() {
        this.state = Int32Array.from(INIT);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        this.finished = false;
      }
      RawSha2562.prototype.update = function(data) {
        if (this.finished) {
          throw new Error("Attempted to update an already finished hash.");
        }
        var position = 0;
        var byteLength = data.byteLength;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
          throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength > 0) {
          this.buffer[this.bufferLength++] = data[position++];
          byteLength--;
          if (this.bufferLength === BLOCK_SIZE) {
            this.hashBuffer();
            this.bufferLength = 0;
          }
        }
      };
      RawSha2562.prototype.digest = function() {
        if (!this.finished) {
          var bitsHashed = this.bytesHashed * 8;
          var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
          var undecoratedLength = this.bufferLength;
          bufferView.setUint8(this.bufferLength++, 128);
          if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
            for (var i = this.bufferLength; i < BLOCK_SIZE; i++) {
              bufferView.setUint8(i, 0);
            }
            this.hashBuffer();
            this.bufferLength = 0;
          }
          for (var i = this.bufferLength; i < BLOCK_SIZE - 8; i++) {
            bufferView.setUint8(i, 0);
          }
          bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
          bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
          this.hashBuffer();
          this.finished = true;
        }
        var out = new Uint8Array(DIGEST_LENGTH);
        for (var i = 0; i < 8; i++) {
          out[i * 4] = this.state[i] >>> 24 & 255;
          out[i * 4 + 1] = this.state[i] >>> 16 & 255;
          out[i * 4 + 2] = this.state[i] >>> 8 & 255;
          out[i * 4 + 3] = this.state[i] >>> 0 & 255;
        }
        return out;
      };
      RawSha2562.prototype.hashBuffer = function() {
        var _a = this, buffer = _a.buffer, state = _a.state;
        var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
        for (var i = 0; i < BLOCK_SIZE; i++) {
          if (i < 16) {
            this.temp[i] = (buffer[i * 4] & 255) << 24 | (buffer[i * 4 + 1] & 255) << 16 | (buffer[i * 4 + 2] & 255) << 8 | buffer[i * 4 + 3] & 255;
          } else {
            var u = this.temp[i - 2];
            var t1_1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
            u = this.temp[i - 15];
            var t2_1 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
            this.temp[i] = (t1_1 + this.temp[i - 7] | 0) + (t2_1 + this.temp[i - 16] | 0);
          }
          var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (KEY[i] + this.temp[i] | 0) | 0) | 0;
          var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
          state7 = state6;
          state6 = state5;
          state5 = state4;
          state4 = state3 + t1 | 0;
          state3 = state2;
          state2 = state1;
          state1 = state0;
          state0 = t1 + t2 | 0;
        }
        state[0] += state0;
        state[1] += state1;
        state[2] += state2;
        state[3] += state3;
        state[4] += state4;
        state[5] += state5;
        state[6] += state6;
        state[7] += state7;
      };
      return RawSha2562;
    }()
  );

  // node_modules/.pnpm/@smithy+util-utf8@2.0.2/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
  var fromUtf8 = (input) => new TextEncoder().encode(input);

  // node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/module/convertToBuffer.js
  var fromUtf82 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
    return Buffer.from(input, "utf8");
  } : fromUtf8;
  function convertToBuffer(data) {
    if (data instanceof Uint8Array)
      return data;
    if (typeof data === "string") {
      return fromUtf82(data);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
  }

  // node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/module/isEmptyData.js
  function isEmptyData(data) {
    if (typeof data === "string") {
      return data.length === 0;
    }
    return data.byteLength === 0;
  }

  // node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
  var Sha256 = (
    /** @class */
    function() {
      function Sha2562(secret) {
        this.secret = secret;
        this.hash = new RawSha256();
        this.reset();
      }
      Sha2562.prototype.update = function(toHash) {
        if (isEmptyData(toHash) || this.error) {
          return;
        }
        try {
          this.hash.update(convertToBuffer(toHash));
        } catch (e) {
          this.error = e;
        }
      };
      Sha2562.prototype.digestSync = function() {
        if (this.error) {
          throw this.error;
        }
        if (this.outer) {
          if (!this.outer.finished) {
            this.outer.update(this.hash.digest());
          }
          return this.outer.digest();
        }
        return this.hash.digest();
      };
      Sha2562.prototype.digest = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, this.digestSync()];
          });
        });
      };
      Sha2562.prototype.reset = function() {
        this.hash = new RawSha256();
        if (this.secret) {
          this.outer = new RawSha256();
          var inner = bufferFromSecret(this.secret);
          var outer = new Uint8Array(BLOCK_SIZE);
          outer.set(inner);
          for (var i = 0; i < BLOCK_SIZE; i++) {
            inner[i] ^= 54;
            outer[i] ^= 92;
          }
          this.hash.update(inner);
          this.outer.update(outer);
          for (var i = 0; i < inner.byteLength; i++) {
            inner[i] = 0;
          }
        }
      };
      return Sha2562;
    }()
  );
  function bufferFromSecret(secret) {
    var input = convertToBuffer(secret);
    if (input.byteLength > BLOCK_SIZE) {
      var bufferHash = new RawSha256();
      bufferHash.update(input);
      input = bufferHash.digest();
    }
    var buffer = new Uint8Array(BLOCK_SIZE);
    buffer.set(input);
    return buffer;
  }

  // node_modules/.pnpm/@smithy+util-hex-encoding@2.0.0/node_modules/@smithy/util-hex-encoding/dist-es/index.js
  var SHORT_TO_HEX = {};
  var HEX_TO_SHORT = {};
  for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
      encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
  }
  function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/utils/amplifyUrl/index.mjs
  var AmplifyUrl = URL;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/serde/responseInfo.mjs
  var parseMetadata = (response) => {
    const { headers, statusCode } = response;
    return {
      ...isMetadataBearer(response) ? response.$metadata : {},
      httpStatusCode: statusCode,
      requestId: headers["x-amzn-requestid"] ?? headers["x-amzn-request-id"] ?? headers["x-amz-request-id"],
      extendedRequestId: headers["x-amz-id-2"],
      cfId: headers["x-amz-cf-id"]
    };
  };
  var isMetadataBearer = (response) => typeof response?.$metadata === "object";

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/serde/json.mjs
  var parseJsonError = async (response) => {
    if (!response || response.statusCode < 300) {
      return;
    }
    const body = await parseJsonBody(response);
    const sanitizeErrorCode = (rawValue) => {
      const [cleanValue] = rawValue.toString().split(/[\,\:]+/);
      if (cleanValue.includes("#")) {
        return cleanValue.split("#")[1];
      }
      return cleanValue;
    };
    const code = sanitizeErrorCode(response.headers["x-amzn-errortype"] ?? body.code ?? body.__type ?? "UnknownError");
    const message = body.message ?? body.Message ?? "Unknown error";
    const error = new Error(message);
    return Object.assign(error, {
      name: code,
      $metadata: parseMetadata(response)
    });
  };
  var parseJsonBody = async (response) => {
    if (!response.body) {
      throw new Error("Missing response payload");
    }
    const output = await response.body.json();
    return Object.assign(output, {
      $metadata: parseMetadata(response)
    });
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs
  var Framework;
  (function(Framework2) {
    Framework2["WebUnknown"] = "0";
    Framework2["React"] = "1";
    Framework2["NextJs"] = "2";
    Framework2["Angular"] = "3";
    Framework2["VueJs"] = "4";
    Framework2["Nuxt"] = "5";
    Framework2["Svelte"] = "6";
    Framework2["ServerSideUnknown"] = "100";
    Framework2["ReactSSR"] = "101";
    Framework2["NextJsSSR"] = "102";
    Framework2["AngularSSR"] = "103";
    Framework2["VueJsSSR"] = "104";
    Framework2["NuxtSSR"] = "105";
    Framework2["SvelteSSR"] = "106";
    Framework2["ReactNative"] = "201";
    Framework2["Expo"] = "202";
  })(Framework || (Framework = {}));
  var Category;
  (function(Category2) {
    Category2["API"] = "api";
    Category2["Auth"] = "auth";
    Category2["Analytics"] = "analytics";
    Category2["DataStore"] = "datastore";
    Category2["Geo"] = "geo";
    Category2["InAppMessaging"] = "inappmessaging";
    Category2["Interactions"] = "interactions";
    Category2["Predictions"] = "predictions";
    Category2["PubSub"] = "pubsub";
    Category2["PushNotification"] = "pushnotification";
    Category2["Storage"] = "storage";
  })(Category || (Category = {}));
  var AnalyticsAction;
  (function(AnalyticsAction2) {
    AnalyticsAction2["Record"] = "1";
    AnalyticsAction2["IdentifyUser"] = "2";
  })(AnalyticsAction || (AnalyticsAction = {}));
  var ApiAction;
  (function(ApiAction2) {
    ApiAction2["GraphQl"] = "1";
    ApiAction2["Get"] = "2";
    ApiAction2["Post"] = "3";
    ApiAction2["Put"] = "4";
    ApiAction2["Patch"] = "5";
    ApiAction2["Del"] = "6";
    ApiAction2["Head"] = "7";
  })(ApiAction || (ApiAction = {}));
  var AuthAction;
  (function(AuthAction2) {
    AuthAction2["SignUp"] = "1";
    AuthAction2["ConfirmSignUp"] = "2";
    AuthAction2["ResendSignUpCode"] = "3";
    AuthAction2["SignIn"] = "4";
    AuthAction2["FetchMFAPreference"] = "6";
    AuthAction2["UpdateMFAPreference"] = "7";
    AuthAction2["SetUpTOTP"] = "10";
    AuthAction2["VerifyTOTPSetup"] = "11";
    AuthAction2["ConfirmSignIn"] = "12";
    AuthAction2["DeleteUserAttributes"] = "15";
    AuthAction2["DeleteUser"] = "16";
    AuthAction2["UpdateUserAttributes"] = "17";
    AuthAction2["FetchUserAttributes"] = "18";
    AuthAction2["ConfirmUserAttribute"] = "22";
    AuthAction2["SignOut"] = "26";
    AuthAction2["UpdatePassword"] = "27";
    AuthAction2["ResetPassword"] = "28";
    AuthAction2["ConfirmResetPassword"] = "29";
    AuthAction2["FederatedSignIn"] = "30";
    AuthAction2["RememberDevice"] = "32";
    AuthAction2["ForgetDevice"] = "33";
    AuthAction2["FetchDevices"] = "34";
    AuthAction2["SendUserAttributeVerificationCode"] = "35";
    AuthAction2["SignInWithRedirect"] = "36";
  })(AuthAction || (AuthAction = {}));
  var DataStoreAction;
  (function(DataStoreAction2) {
    DataStoreAction2["Subscribe"] = "1";
    DataStoreAction2["GraphQl"] = "2";
  })(DataStoreAction || (DataStoreAction = {}));
  var GeoAction;
  (function(GeoAction2) {
    GeoAction2["SearchByText"] = "0";
    GeoAction2["SearchByCoordinates"] = "1";
    GeoAction2["SearchForSuggestions"] = "2";
    GeoAction2["SearchByPlaceId"] = "3";
    GeoAction2["SaveGeofences"] = "4";
    GeoAction2["GetGeofence"] = "5";
    GeoAction2["ListGeofences"] = "6";
    GeoAction2["DeleteGeofences"] = "7";
  })(GeoAction || (GeoAction = {}));
  var InAppMessagingAction;
  (function(InAppMessagingAction2) {
    InAppMessagingAction2["SyncMessages"] = "1";
    InAppMessagingAction2["IdentifyUser"] = "2";
    InAppMessagingAction2["NotifyMessageInteraction"] = "3";
  })(InAppMessagingAction || (InAppMessagingAction = {}));
  var InteractionsAction;
  (function(InteractionsAction2) {
    InteractionsAction2["None"] = "0";
  })(InteractionsAction || (InteractionsAction = {}));
  var PredictionsAction;
  (function(PredictionsAction2) {
    PredictionsAction2["Convert"] = "1";
    PredictionsAction2["Identify"] = "2";
    PredictionsAction2["Interpret"] = "3";
  })(PredictionsAction || (PredictionsAction = {}));
  var PubSubAction;
  (function(PubSubAction2) {
    PubSubAction2["Subscribe"] = "1";
  })(PubSubAction || (PubSubAction = {}));
  var PushNotificationAction;
  (function(PushNotificationAction2) {
    PushNotificationAction2["InitializePushNotifications"] = "1";
    PushNotificationAction2["IdentifyUser"] = "2";
  })(PushNotificationAction || (PushNotificationAction = {}));
  var StorageAction;
  (function(StorageAction2) {
    StorageAction2["UploadData"] = "1";
    StorageAction2["DownloadData"] = "2";
    StorageAction2["List"] = "3";
    StorageAction2["Copy"] = "4";
    StorageAction2["Remove"] = "5";
    StorageAction2["GetProperties"] = "6";
    StorageAction2["GetUrl"] = "7";
  })(StorageAction || (StorageAction = {}));

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/version.mjs
  var version = "6.0.5";

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/detection/helpers.mjs
  var globalExists = () => {
    return typeof global !== "undefined";
  };
  var windowExists = () => {
    return typeof window !== "undefined";
  };
  var documentExists = () => {
    return typeof document !== "undefined";
  };
  var processExists = () => {
    return typeof process !== "undefined";
  };
  var keyPrefixMatch = (object, prefix) => {
    return !!Object.keys(object).find((key) => key.startsWith(prefix));
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/detection/React.mjs
  function reactWebDetect() {
    const elementKeyPrefixedWithReact = (key) => {
      return key.startsWith("_react") || key.startsWith("__react");
    };
    const elementIsReactEnabled = (element) => {
      return Object.keys(element).find(elementKeyPrefixedWithReact);
    };
    const allElementsWithId = () => Array.from(document.querySelectorAll("[id]"));
    return documentExists() && allElementsWithId().some(elementIsReactEnabled);
  }
  function reactSSRDetect() {
    return processExists() && typeof process.env !== "undefined" && !!Object.keys(process.env).find((key) => key.includes("react"));
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Vue.mjs
  function vueWebDetect() {
    return windowExists() && keyPrefixMatch(window, "__VUE");
  }
  function vueSSRDetect() {
    return globalExists() && keyPrefixMatch(global, "__VUE");
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Svelte.mjs
  function svelteWebDetect() {
    return windowExists() && keyPrefixMatch(window, "__SVELTE");
  }
  function svelteSSRDetect() {
    return processExists() && typeof process.env !== "undefined" && !!Object.keys(process.env).find((key) => key.includes("svelte"));
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Next.mjs
  function nextWebDetect() {
    return windowExists() && window["next"] && typeof window["next"] === "object";
  }
  function nextSSRDetect() {
    return globalExists() && (keyPrefixMatch(global, "__next") || keyPrefixMatch(global, "__NEXT"));
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Nuxt.mjs
  function nuxtWebDetect() {
    return windowExists() && // @ts-ignore
    (window["__NUXT__"] !== void 0 || window["$nuxt"] !== void 0);
  }
  function nuxtSSRDetect() {
    return globalExists() && typeof global["__NUXT_PATHS__"] !== "undefined";
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Angular.mjs
  function angularWebDetect() {
    const angularVersionSetInDocument = Boolean(documentExists() && document.querySelector("[ng-version]"));
    const angularContentSetInWindow = Boolean(
      // @ts-ignore
      windowExists() && typeof window["ng"] !== "undefined"
    );
    return angularVersionSetInDocument || angularContentSetInWindow;
  }
  function angularSSRDetect() {
    return processExists() && typeof process.env === "object" && process.env["npm_lifecycle_script"]?.startsWith("ng ") || false;
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/detection/ReactNative.mjs
  function reactNativeDetect() {
    return typeof navigator !== "undefined" && typeof navigator.product !== "undefined" && navigator.product === "ReactNative";
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Expo.mjs
  function expoDetect() {
    return globalExists() && typeof global["expo"] !== "undefined";
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Web.mjs
  function webDetect() {
    return windowExists();
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/detection/index.mjs
  var detectionMap = [
    // First, detect mobile
    { platform: Framework.Expo, detectionMethod: expoDetect },
    { platform: Framework.ReactNative, detectionMethod: reactNativeDetect },
    // Next, detect web frameworks
    { platform: Framework.NextJs, detectionMethod: nextWebDetect },
    { platform: Framework.Nuxt, detectionMethod: nuxtWebDetect },
    { platform: Framework.Angular, detectionMethod: angularWebDetect },
    { platform: Framework.React, detectionMethod: reactWebDetect },
    { platform: Framework.VueJs, detectionMethod: vueWebDetect },
    { platform: Framework.Svelte, detectionMethod: svelteWebDetect },
    { platform: Framework.WebUnknown, detectionMethod: webDetect },
    // Last, detect ssr frameworks
    { platform: Framework.NextJsSSR, detectionMethod: nextSSRDetect },
    { platform: Framework.NuxtSSR, detectionMethod: nuxtSSRDetect },
    { platform: Framework.ReactSSR, detectionMethod: reactSSRDetect },
    { platform: Framework.VueJsSSR, detectionMethod: vueSSRDetect },
    { platform: Framework.AngularSSR, detectionMethod: angularSSRDetect },
    { platform: Framework.SvelteSSR, detectionMethod: svelteSSRDetect }
  ];
  function detect() {
    return detectionMap.find((detectionEntry) => detectionEntry.detectionMethod())?.platform || Framework.ServerSideUnknown;
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/detectFramework.mjs
  var frameworkCache;
  var frameworkChangeObservers = [];
  var resetTriggered = false;
  var SSR_RESET_TIMEOUT = 10;
  var WEB_RESET_TIMEOUT = 10;
  var PRIME_FRAMEWORK_DELAY = 1e3;
  var detectFramework = () => {
    if (!frameworkCache) {
      frameworkCache = detect();
      if (resetTriggered) {
        while (frameworkChangeObservers.length) {
          frameworkChangeObservers.pop()?.();
        }
      } else {
        frameworkChangeObservers.forEach((fcn) => fcn());
      }
      resetTimeout(Framework.ServerSideUnknown, SSR_RESET_TIMEOUT);
      resetTimeout(Framework.WebUnknown, WEB_RESET_TIMEOUT);
    }
    return frameworkCache;
  };
  var observeFrameworkChanges = (fcn) => {
    if (resetTriggered) {
      return;
    }
    frameworkChangeObservers.push(fcn);
  };
  function clearCache() {
    frameworkCache = void 0;
  }
  function resetTimeout(framework, delay) {
    if (frameworkCache === framework && !resetTriggered) {
      setTimeout(() => {
        clearCache();
        resetTriggered = true;
        setTimeout(detectFramework, PRIME_FRAMEWORK_DELAY);
      }, delay);
    }
  }

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/customUserAgent.mjs
  var customUserAgentState = {};
  var getCustomUserAgent = (category, api2) => customUserAgentState[category]?.[api2]?.additionalDetails;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Platform/index.mjs
  var BASE_USER_AGENT = `aws-amplify`;
  var PlatformBuilder = class {
    constructor() {
      this.userAgent = `${BASE_USER_AGENT}/${version}`;
    }
    get framework() {
      return detectFramework();
    }
    get isReactNative() {
      return this.framework === Framework.ReactNative || this.framework === Framework.Expo;
    }
    observeFrameworkChanges(fcn) {
      observeFrameworkChanges(fcn);
    }
  };
  var Platform = new PlatformBuilder();
  var getAmplifyUserAgentObject = ({ category, action, framework } = {}) => {
    const userAgent = [[BASE_USER_AGENT, version]];
    if (category) {
      userAgent.push([category, action]);
    }
    userAgent.push(["framework", detectFramework()]);
    if (category && action) {
      const customState = getCustomUserAgent(category, action);
      if (customState) {
        customState.forEach((state) => {
          userAgent.push(state);
        });
      }
    }
    return userAgent;
  };
  var getAmplifyUserAgent = (customUserAgentDetails) => {
    const userAgent = getAmplifyUserAgentObject(customUserAgentDetails);
    const userAgentString = userAgent.map(([agentKey, agentValue]) => agentKey && agentValue ? `${agentKey}/${agentValue}` : agentKey).join(" ");
    return userAgentString;
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/awsClients/cognitoIdentity/base.mjs
  var SERVICE_NAME = "cognito-identity";
  var endpointResolver = ({ region }) => ({
    url: new AmplifyUrl(`https://cognito-identity.${region}.${getDnsSuffix(region)}`)
  });
  var disableCacheMiddleware = () => (next, context) => async function disableCacheMiddleware3(request) {
    request.headers["cache-control"] = "no-store";
    return next(request);
  };
  var cognitoIdentityTransferHandler = composeTransferHandler(unauthenticatedHandler, [disableCacheMiddleware]);
  var defaultConfig = {
    service: SERVICE_NAME,
    endpointResolver,
    retryDecider: getRetryDecider(parseJsonError),
    computeDelay: jitteredBackoff2,
    userAgentValue: getAmplifyUserAgent(),
    cache: "no-store"
  };
  observeFrameworkChanges(() => {
    defaultConfig.userAgentValue = getAmplifyUserAgent();
  });
  var getSharedHeaders = (operation) => ({
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSCognitoIdentityService.${operation}`
  });
  var buildHttpRpcRequest = ({ url }, headers, body) => ({
    headers,
    url,
    body,
    method: "POST"
  });

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs
  var composeServiceApi = (transferHandler, serializer, deserializer, defaultConfig6) => {
    return async (config, input) => {
      const resolvedConfig = {
        ...defaultConfig6,
        ...config
      };
      const endpoint = await resolvedConfig.endpointResolver(resolvedConfig, input);
      const request = await serializer(input, endpoint);
      const response = await transferHandler(request, {
        ...resolvedConfig
      });
      return await deserializer(response);
    };
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/awsClients/cognitoIdentity/getId.mjs
  var getIdSerializer = (input, endpoint) => {
    const headers = getSharedHeaders("GetId");
    const body = JSON.stringify(input);
    return buildHttpRpcRequest(endpoint, headers, body);
  };
  var getIdDeserializer = async (response) => {
    if (response.statusCode >= 300) {
      const error = await parseJsonError(response);
      throw error;
    } else {
      const body = await parseJsonBody(response);
      return {
        IdentityId: body.IdentityId,
        $metadata: parseMetadata(response)
      };
    }
  };
  var getId = composeServiceApi(cognitoIdentityTransferHandler, getIdSerializer, getIdDeserializer, defaultConfig);

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/awsClients/cognitoIdentity/getCredentialsForIdentity.mjs
  var getCredentialsForIdentitySerializer = (input, endpoint) => {
    const headers = getSharedHeaders("GetCredentialsForIdentity");
    const body = JSON.stringify(input);
    return buildHttpRpcRequest(endpoint, headers, body);
  };
  var getCredentialsForIdentityDeserializer = async (response) => {
    if (response.statusCode >= 300) {
      const error = await parseJsonError(response);
      throw error;
    } else {
      const body = await parseJsonBody(response);
      return {
        IdentityId: body.IdentityId,
        Credentials: deserializeCredentials(body.Credentials),
        $metadata: parseMetadata(response)
      };
    }
  };
  var deserializeCredentials = ({ AccessKeyId, SecretKey, SessionToken, Expiration } = {}) => {
    return {
      AccessKeyId,
      SecretKey,
      SessionToken,
      Expiration: Expiration && new Date(Expiration * 1e3)
    };
  };
  var getCredentialsForIdentity = composeServiceApi(cognitoIdentityTransferHandler, getCredentialsForIdentitySerializer, getCredentialsForIdentityDeserializer, defaultConfig);

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/errors/PlatformNotSupportedError.mjs
  var PlatformNotSupportedError = class extends AmplifyError {
    constructor() {
      super({
        name: AmplifyErrorCode.PlatformNotSupported,
        message: "Function not supported on current platform"
      });
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/storage/KeyValueStorage.mjs
  var KeyValueStorage = class {
    constructor(storage) {
      this.storage = storage;
    }
    /**
     * This is used to set a specific item in storage
     * @param {string} key - the key for the item
     * @param {object} value - the value
     * @returns {string} value that was set
     */
    async setItem(key, value) {
      if (!this.storage)
        throw new PlatformNotSupportedError();
      this.storage.setItem(key, value);
    }
    /**
     * This is used to get a specific key from storage
     * @param {string} key - the key for the item
     * This is used to clear the storage
     * @returns {string} the data item
     */
    async getItem(key) {
      if (!this.storage)
        throw new PlatformNotSupportedError();
      return this.storage.getItem(key);
    }
    /**
     * This is used to remove an item from storage
     * @param {string} key - the key being set
     * @returns {string} value - value that was deleted
     */
    async removeItem(key) {
      if (!this.storage)
        throw new PlatformNotSupportedError();
      this.storage.removeItem(key);
    }
    /**
     * This is used to clear the storage
     * @returns {string} nothing
     */
    async clear() {
      if (!this.storage)
        throw new PlatformNotSupportedError();
      this.storage.clear();
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/storage/InMemoryStorage.mjs
  var InMemoryStorage = class {
    constructor() {
      this.storage = /* @__PURE__ */ new Map();
    }
    get length() {
      return this.storage.size;
    }
    key(index) {
      if (index > this.length - 1) {
        return null;
      }
      return Array.from(this.storage.keys())[index];
    }
    setItem(key, value) {
      this.storage.set(key, value);
    }
    getItem(key) {
      return this.storage.get(key) ?? null;
    }
    removeItem(key) {
      this.storage.delete(key);
    }
    clear() {
      this.storage.clear();
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/storage/utils.mjs
  var getLocalStorageWithFallback = () => typeof window !== "undefined" && window.localStorage ? window.localStorage : new InMemoryStorage();
  var getSessionStorageWithFallback = () => typeof window !== "undefined" && window.sessionStorage ? window.sessionStorage : new InMemoryStorage();

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/storage/DefaultStorage.mjs
  var DefaultStorage = class extends KeyValueStorage {
    constructor() {
      super(getLocalStorageWithFallback());
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/storage/SessionStorage.mjs
  var SessionStorage = class extends KeyValueStorage {
    constructor() {
      super(getSessionStorageWithFallback());
    }
  };

  // node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs
  function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target;
  }
  var defaultConverter = {
    read: function(value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function(value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      );
    }
  };
  function init(converter, defaultAttributes) {
    function set2(name2, value, attributes) {
      if (typeof document === "undefined") {
        return;
      }
      attributes = assign({}, defaultAttributes, attributes);
      if (typeof attributes.expires === "number") {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }
      name2 = encodeURIComponent(name2).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var stringifiedAttributes = "";
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue;
        }
        stringifiedAttributes += "; " + attributeName;
        if (attributes[attributeName] === true) {
          continue;
        }
        stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
      }
      return document.cookie = name2 + "=" + converter.write(value, name2) + stringifiedAttributes;
    }
    function get(name2) {
      if (typeof document === "undefined" || arguments.length && !name2) {
        return;
      }
      var cookies = document.cookie ? document.cookie.split("; ") : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split("=");
        var value = parts.slice(1).join("=");
        try {
          var found = decodeURIComponent(parts[0]);
          jar[found] = converter.read(value, found);
          if (name2 === found) {
            break;
          }
        } catch (e) {
        }
      }
      return name2 ? jar[name2] : jar;
    }
    return Object.create(
      {
        set: set2,
        get,
        remove: function(name2, attributes) {
          set2(
            name2,
            "",
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function(attributes) {
          return init(this.converter, assign({}, this.attributes, attributes));
        },
        withConverter: function(converter2) {
          return init(assign({}, this.converter, converter2), this.attributes);
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    );
  }
  var api = init(defaultConverter, { path: "/" });

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/storage/CookieStorage.mjs
  var CookieStorage = class {
    constructor(data = {}) {
      const { path, domain, expires, sameSite, secure } = data;
      this.domain = domain;
      this.path = path ? path : "/";
      this.expires = data.hasOwnProperty("expires") ? expires : 365;
      this.secure = data.hasOwnProperty("secure") ? secure : true;
      if (data.hasOwnProperty("sameSite")) {
        if (!sameSite || !["strict", "lax", "none"].includes(sameSite)) {
          throw new Error('The sameSite value of cookieStorage must be "lax", "strict" or "none".');
        }
        if (sameSite === "none" && !this.secure) {
          throw new Error("sameSite = None requires the Secure attribute in latest browser versions.");
        }
        this.sameSite = sameSite;
      }
    }
    async setItem(key, value) {
      api.set(key, value, this.getData());
    }
    async getItem(key) {
      const item = api.get(key);
      return item ?? null;
    }
    async removeItem(key) {
      api.remove(key, this.getData());
    }
    async clear() {
      const cookie = api.get();
      const promises = Object.keys(cookie).map((key) => this.removeItem(key));
      await Promise.all(promises);
    }
    getData() {
      return {
        path: this.path,
        expires: this.expires,
        domain: this.domain,
        secure: this.secure,
        ...this.sameSite && { sameSite: this.sameSite }
      };
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/storage/index.mjs
  var defaultStorage = new DefaultStorage();
  var sessionStorage = new SessionStorage();
  var sharedInMemoryStorage = new KeyValueStorage(new InMemoryStorage());

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Cache/constants.mjs
  var defaultConfig2 = {
    keyPrefix: "aws-amplify-cache",
    capacityInBytes: 1048576,
    itemMaxSize: 21e4,
    defaultTTL: 2592e5,
    defaultPriority: 5,
    warningThreshold: 0.8
  };
  var currentSizeKey = "CurSize";

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Cache/utils/cacheHelpers.mjs
  function getByteLength(str) {
    let ret = 0;
    ret = str.length;
    for (let i = str.length; i >= 0; i -= 1) {
      const charCode = str.charCodeAt(i);
      if (charCode > 127 && charCode <= 2047) {
        ret += 1;
      } else if (charCode > 2047 && charCode <= 65535) {
        ret += 2;
      }
      if (charCode >= 56320 && charCode <= 57343) {
        i -= 1;
      }
    }
    return ret;
  }
  function getCurrentTime() {
    const currentTime = /* @__PURE__ */ new Date();
    return currentTime.getTime();
  }
  var getCurrentSizeKey = (keyPrefix) => `${keyPrefix}${currentSizeKey}`;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Cache/utils/errorHelpers.mjs
  var CacheErrorCode;
  (function(CacheErrorCode2) {
    CacheErrorCode2["NoCacheItem"] = "NoCacheItem";
    CacheErrorCode2["NullNextNode"] = "NullNextNode";
    CacheErrorCode2["NullPreviousNode"] = "NullPreviousNode";
  })(CacheErrorCode || (CacheErrorCode = {}));
  var cacheErrorMap = {
    [CacheErrorCode.NoCacheItem]: {
      message: "Item not found in the cache storage."
    },
    [CacheErrorCode.NullNextNode]: {
      message: "Next node is null."
    },
    [CacheErrorCode.NullPreviousNode]: {
      message: "Previous node is null."
    }
  };
  var assert3 = createAssertionFunction(cacheErrorMap);

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Cache/StorageCacheCommon.mjs
  var logger4 = new ConsoleLogger("StorageCache");
  var StorageCacheCommon = class {
    /**
     * Initialize the cache
     *
     * @param config - Custom configuration for this instance.
     */
    constructor({ config, keyValueStorage }) {
      this.config = {
        ...defaultConfig2,
        ...config
      };
      this.keyValueStorage = keyValueStorage;
      this.sanitizeConfig();
    }
    getModuleName() {
      return "Cache";
    }
    /**
     * Set custom configuration for the cache instance.
     *
     * @param config - customized configuration (without keyPrefix, which can't be changed)
     *
     * @return - the current configuration
     */
    configure(config) {
      if (config) {
        if (config.keyPrefix) {
          logger4.warn("keyPrefix can not be re-configured on an existing Cache instance.");
        }
        this.config = {
          ...this.config,
          ...config
        };
      }
      this.sanitizeConfig();
      return this.config;
    }
    /**
     * return the current size of the cache
     * @return {Promise}
     */
    async getCurrentCacheSize() {
      let size = await this.getStorage().getItem(getCurrentSizeKey(this.config.keyPrefix));
      if (!size) {
        await this.getStorage().setItem(getCurrentSizeKey(this.config.keyPrefix), "0");
        size = "0";
      }
      return Number(size);
    }
    /**
     * Set item into cache. You can put number, string, boolean or object.
     * The cache will first check whether has the same key.
     * If it has, it will delete the old item and then put the new item in
     * The cache will pop out items if it is full
     * You can specify the cache item options. The cache will abort and output a warning:
     * If the key is invalid
     * If the size of the item exceeds itemMaxSize.
     * If the value is undefined
     * If incorrect cache item configuration
     * If error happened with browser storage
     *
     * @param {String} key - the key of the item
     * @param {Object} value - the value of the item
     * @param {Object} [options] - optional, the specified meta-data
     *
     * @return {Promise}
     */
    async setItem(key, value, options) {
      logger4.debug(`Set item: key is ${key}, value is ${value} with options: ${options}`);
      if (!key || key === currentSizeKey) {
        logger4.warn(`Invalid key: should not be empty or reserved key: '${currentSizeKey}'`);
        return;
      }
      if (typeof value === "undefined") {
        logger4.warn(`The value of item should not be undefined!`);
        return;
      }
      const cacheItemOptions = {
        priority: options?.priority !== void 0 ? options.priority : this.config.defaultPriority,
        expires: options?.expires !== void 0 ? options.expires : this.config.defaultTTL + getCurrentTime()
      };
      if (cacheItemOptions.priority < 1 || cacheItemOptions.priority > 5) {
        logger4.warn(`Invalid parameter: priority due to out or range. It should be within 1 and 5.`);
        return;
      }
      const prefixedKey = `${this.config.keyPrefix}${key}`;
      const item = this.fillCacheItem(prefixedKey, value, cacheItemOptions);
      if (item.byteSize > this.config.itemMaxSize) {
        logger4.warn(`Item with key: ${key} you are trying to put into is too big!`);
        return;
      }
      try {
        const val = await this.getStorage().getItem(prefixedKey);
        if (val) {
          await this.removeCacheItem(prefixedKey, JSON.parse(val).byteSize);
        }
        if (await this.isCacheFull(item.byteSize)) {
          const validKeys = await this.clearInvalidAndGetRemainingKeys();
          if (await this.isCacheFull(item.byteSize)) {
            const sizeToPop = await this.sizeToPop(item.byteSize);
            await this.popOutItems(validKeys, sizeToPop);
          }
        }
        return this.setCacheItem(prefixedKey, item);
      } catch (e) {
        logger4.warn(`setItem failed! ${e}`);
      }
    }
    /**
     * Get item from cache. It will return null if item doesn’t exist or it has been expired.
     * If you specified callback function in the options,
     * then the function will be executed if no such item in the cache
     * and finally put the return value into cache.
     * Please make sure the callback function will return the value you want to put into the cache.
     * The cache will abort output a warning:
     * If the key is invalid
     * If error happened with AsyncStorage
     *
     * @param {String} key - the key of the item
     * @param {Object} [options] - the options of callback function
     *
     * @return {Promise} - return a promise resolves to be the value of the item
     */
    async getItem(key, options) {
      logger4.debug(`Get item: key is ${key} with options ${options}`);
      let cached;
      if (!key || key === currentSizeKey) {
        logger4.warn(`Invalid key: should not be empty or reserved key: '${currentSizeKey}'`);
        return null;
      }
      const prefixedKey = `${this.config.keyPrefix}${key}`;
      try {
        cached = await this.getStorage().getItem(prefixedKey);
        if (cached != null) {
          if (await this.isExpired(prefixedKey)) {
            await this.removeCacheItem(prefixedKey, JSON.parse(cached).byteSize);
          } else {
            const item = await this.updateVisitedTime(JSON.parse(cached), prefixedKey);
            return item.data;
          }
        }
        if (options?.callback) {
          const val = options.callback();
          if (val !== null) {
            await this.setItem(key, val, options);
          }
          return val;
        }
        return null;
      } catch (e) {
        logger4.warn(`getItem failed! ${e}`);
        return null;
      }
    }
    /**
     * remove item from the cache
     * The cache will abort output a warning:
     * If error happened with AsyncStorage
     * @param {String} key - the key of the item
     * @return {Promise}
     */
    async removeItem(key) {
      logger4.debug(`Remove item: key is ${key}`);
      if (!key || key === currentSizeKey) {
        logger4.warn(`Invalid key: should not be empty or reserved key: '${currentSizeKey}'`);
        return;
      }
      const prefixedKey = `${this.config.keyPrefix}${key}`;
      try {
        const val = await this.getStorage().getItem(prefixedKey);
        if (val) {
          await this.removeCacheItem(prefixedKey, JSON.parse(val).byteSize);
        }
      } catch (e) {
        logger4.warn(`removeItem failed! ${e}`);
      }
    }
    /**
     * Return all the keys owned by this cache.
     * Will return an empty array if error occurred.
     *
     * @return {Promise}
     */
    async getAllKeys() {
      try {
        return await this.getAllCacheKeys();
      } catch (e) {
        logger4.warn(`getAllkeys failed! ${e}`);
        return [];
      }
    }
    getStorage() {
      return this.keyValueStorage;
    }
    /**
     * check whether item is expired
     *
     * @param key - the key of the item
     *
     * @return true if the item is expired.
     */
    async isExpired(key) {
      const text = await this.getStorage().getItem(key);
      assert3(text !== null, CacheErrorCode.NoCacheItem, `Key: ${key}`);
      const item = JSON.parse(text);
      if (getCurrentTime() >= item.expires) {
        return true;
      }
      return false;
    }
    /**
     * delete item from cache
     *
     * @param prefixedKey - the key of the item
     * @param size - optional, the byte size of the item
     */
    async removeCacheItem(prefixedKey, size) {
      const item = await this.getStorage().getItem(prefixedKey);
      assert3(item !== null, CacheErrorCode.NoCacheItem, `Key: ${prefixedKey}`);
      const itemSize = size ?? JSON.parse(item).byteSize;
      await this.decreaseCurrentSizeInBytes(itemSize);
      try {
        await this.getStorage().removeItem(prefixedKey);
      } catch (removeItemError) {
        await this.increaseCurrentSizeInBytes(itemSize);
        logger4.error(`Failed to remove item: ${removeItemError}`);
      }
    }
    /**
     * produce a JSON object with meta-data and data value
     * @param value - the value of the item
     * @param options - optional, the specified meta-data
     *
     * @return - the item which has the meta-data and the value
     */
    fillCacheItem(key, value, options) {
      const item = {
        key,
        data: value,
        timestamp: getCurrentTime(),
        visitedTime: getCurrentTime(),
        priority: options.priority ?? 0,
        expires: options.expires ?? 0,
        type: typeof value,
        byteSize: 0
      };
      item.byteSize = getByteLength(JSON.stringify(item));
      item.byteSize = getByteLength(JSON.stringify(item));
      return item;
    }
    sanitizeConfig() {
      if (this.config.itemMaxSize > this.config.capacityInBytes) {
        logger4.error("Invalid parameter: itemMaxSize. It should be smaller than capacityInBytes. Setting back to default.");
        this.config.itemMaxSize = defaultConfig2.itemMaxSize;
      }
      if (this.config.defaultPriority > 5 || this.config.defaultPriority < 1) {
        logger4.error("Invalid parameter: defaultPriority. It should be between 1 and 5. Setting back to default.");
        this.config.defaultPriority = defaultConfig2.defaultPriority;
      }
      if (Number(this.config.warningThreshold) > 1 || Number(this.config.warningThreshold) < 0) {
        logger4.error("Invalid parameter: warningThreshold. It should be between 0 and 1. Setting back to default.");
        this.config.warningThreshold = defaultConfig2.warningThreshold;
      }
      const cacheLimit = 5 * 1024 * 1024;
      if (this.config.capacityInBytes > cacheLimit) {
        logger4.error("Cache Capacity should be less than 5MB. Setting back to default. Setting back to default.");
        this.config.capacityInBytes = defaultConfig2.capacityInBytes;
      }
    }
    /**
     * increase current size of the cache
     *
     * @param amount - the amount of the cache szie which need to be increased
     */
    async increaseCurrentSizeInBytes(amount) {
      const size = await this.getCurrentCacheSize();
      await this.getStorage().setItem(getCurrentSizeKey(this.config.keyPrefix), (size + amount).toString());
    }
    /**
     * decrease current size of the cache
     *
     * @param amount - the amount of the cache size which needs to be decreased
     */
    async decreaseCurrentSizeInBytes(amount) {
      const size = await this.getCurrentCacheSize();
      await this.getStorage().setItem(getCurrentSizeKey(this.config.keyPrefix), (size - amount).toString());
    }
    /**
     * update the visited time if item has been visited
     *
     * @param item - the item which need to be updated
     * @param prefixedKey - the key of the item
     *
     * @return the updated item
     */
    async updateVisitedTime(item, prefixedKey) {
      item.visitedTime = getCurrentTime();
      await this.getStorage().setItem(prefixedKey, JSON.stringify(item));
      return item;
    }
    /**
     * put item into cache
     *
     * @param prefixedKey - the key of the item
     * @param itemData - the value of the item
     * @param itemSizeInBytes - the byte size of the item
     */
    async setCacheItem(prefixedKey, item) {
      await this.increaseCurrentSizeInBytes(item.byteSize);
      try {
        await this.getStorage().setItem(prefixedKey, JSON.stringify(item));
      } catch (setItemErr) {
        await this.decreaseCurrentSizeInBytes(item.byteSize);
        logger4.error(`Failed to set item ${setItemErr}`);
      }
    }
    /**
     * total space needed when poping out items
     *
     * @param itemSize
     *
     * @return total space needed
     */
    async sizeToPop(itemSize) {
      const cur = await this.getCurrentCacheSize();
      const spaceItemNeed = cur + itemSize - this.config.capacityInBytes;
      const cacheThresholdSpace = (1 - this.config.warningThreshold) * this.config.capacityInBytes;
      return spaceItemNeed > cacheThresholdSpace ? spaceItemNeed : cacheThresholdSpace;
    }
    /**
     * see whether cache is full
     *
     * @param itemSize
     *
     * @return true if cache is full
     */
    async isCacheFull(itemSize) {
      const cur = await this.getCurrentCacheSize();
      return itemSize + cur > this.config.capacityInBytes;
    }
    /**
     * get all the items we have, sort them by their priority,
     * if priority is same, sort them by their last visited time
     * pop out items from the low priority (5 is the lowest)
     * @private
     * @param keys - all the keys in this cache
     * @param sizeToPop - the total size of the items which needed to be poped out
     */
    async popOutItems(keys, sizeToPop) {
      const items = [];
      let remainedSize = sizeToPop;
      for (let i = 0; i < keys.length; i += 1) {
        const val = await this.getStorage().getItem(keys[i]);
        if (val != null) {
          const item = JSON.parse(val);
          items.push(item);
        }
      }
      items.sort((a, b) => {
        if (a.priority > b.priority) {
          return -1;
        } else if (a.priority < b.priority) {
          return 1;
        } else {
          if (a.visitedTime < b.visitedTime) {
            return -1;
          } else
            return 1;
        }
      });
      for (let i = 0; i < items.length; i += 1) {
        await this.removeCacheItem(items[i].key, items[i].byteSize);
        remainedSize -= items[i].byteSize;
        if (remainedSize <= 0) {
          return;
        }
      }
    }
    /**
     * Scan the storage and combine the following operations for efficiency
     *   1. Clear out all expired keys owned by this cache, not including the size key.
     *   2. Return the remaining keys.
     *
     * @return The remaining valid keys
     */
    async clearInvalidAndGetRemainingKeys() {
      const remainingKeys = [];
      const keys = await this.getAllCacheKeys({
        omitSizeKey: true
      });
      for (const key of keys) {
        if (await this.isExpired(key)) {
          await this.removeCacheItem(key);
        } else {
          remainingKeys.push(key);
        }
      }
      return remainingKeys;
    }
    /**
     * clear the entire cache
     * The cache will abort and output a warning if error occurs
     * @return {Promise}
     */
    async clear() {
      logger4.debug(`Clear Cache`);
      try {
        const keys = await this.getAllKeys();
        for (const key of keys) {
          await this.getStorage().removeItem(key);
        }
      } catch (e) {
        logger4.warn(`clear failed! ${e}`);
      }
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Cache/StorageCache.mjs
  var logger5 = new ConsoleLogger("StorageCache");
  var StorageCache = class _StorageCache extends StorageCacheCommon {
    /**
     * initialize the cache
     * @param config - the configuration of the cache
     */
    constructor(config) {
      const storage = getLocalStorageWithFallback();
      super({ config, keyValueStorage: new KeyValueStorage(storage) });
      this.storage = storage;
      this.getItem = this.getItem.bind(this);
      this.setItem = this.setItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
    }
    async getAllCacheKeys(options) {
      const { omitSizeKey } = options ?? {};
      const keys = [];
      for (let i = 0; i < this.storage.length; i++) {
        const key = this.storage.key(i);
        if (omitSizeKey && key === getCurrentSizeKey(this.config.keyPrefix)) {
          continue;
        }
        if (key?.startsWith(this.config.keyPrefix)) {
          keys.push(key.substring(this.config.keyPrefix.length));
        }
      }
      return keys;
    }
    /**
     * Return a new instance of cache with customized configuration.
     * @param {Object} config - the customized configuration
     * @return {Object} - the new instance of Cache
     */
    createInstance(config) {
      if (!config.keyPrefix || config.keyPrefix === defaultConfig2.keyPrefix) {
        logger5.error("invalid keyPrefix, setting keyPrefix with timeStamp");
        config.keyPrefix = getCurrentTime.toString();
      }
      return new _StorageCache(config);
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/Cache/index.mjs
  var Cache = new StorageCache();

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/I18n/I18n.mjs
  var logger6 = new ConsoleLogger("I18n");
  var I18n$1 = class I18n {
    /**
     * @constructor
     * Initialize with configurations
     * @param {Object} options
     */
    constructor() {
      this._options = null;
      this._lang = null;
      this._dict = {};
    }
    /**
     * Sets the default language from the configuration when required.
     */
    setDefaultLanguage() {
      if (!this._lang && typeof window !== "undefined" && window && window.navigator) {
        this._lang = window.navigator.language;
      }
      logger6.debug(this._lang);
    }
    /**
     * @method
     * Explicitly setting language
     * @param {String} lang
     */
    setLanguage(lang) {
      this._lang = lang;
    }
    /**
     * @method
     * Get value
     * @param {String} key
     * @param {String} defVal - Default value
     */
    get(key, defVal = void 0) {
      if (!this._lang) {
        return typeof defVal !== "undefined" ? defVal : key;
      }
      const lang = this._lang;
      let val = this.getByLanguage(key, lang);
      if (val) {
        return val;
      }
      if (lang.indexOf("-") > 0) {
        val = this.getByLanguage(key, lang.split("-")[0]);
      }
      if (val) {
        return val;
      }
      return typeof defVal !== "undefined" ? defVal : key;
    }
    /**
     * @method
     * Get value according to specified language
     * @param {String} key
     * @param {String} language - Specified langurage to be used
     * @param {String} defVal - Default value
     */
    getByLanguage(key, language, defVal = null) {
      if (!language) {
        return defVal;
      }
      const lang_dict = this._dict[language];
      if (!lang_dict) {
        return defVal;
      }
      return lang_dict[key];
    }
    /**
     * @method
     * Add vocabularies for one language
     * @param {String} language - Language of the dictionary
     * @param {Object} vocabularies - Object that has key-value as dictionary entry
     */
    putVocabulariesForLanguage(language, vocabularies) {
      let lang_dict = this._dict[language];
      if (!lang_dict) {
        lang_dict = this._dict[language] = {};
      }
      this._dict[language] = { ...lang_dict, ...vocabularies };
    }
    /**
     * @method
     * Add vocabularies for one language
     * @param {Object} vocabularies - Object that has language as key,
     *                                vocabularies of each language as value
     */
    putVocabularies(vocabularies) {
      Object.keys(vocabularies).map((key) => {
        this.putVocabulariesForLanguage(key, vocabularies[key]);
      });
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/I18n/errorHelpers.mjs
  var I18nErrorCode;
  (function(I18nErrorCode2) {
    I18nErrorCode2["NotConfigured"] = "NotConfigured";
  })(I18nErrorCode || (I18nErrorCode = {}));
  var i18nErrorMap = {
    [I18nErrorCode.NotConfigured]: {
      message: "i18n is not configured."
    }
  };
  var assert4 = createAssertionFunction(i18nErrorMap);

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/I18n/index.mjs
  var logger7 = new ConsoleLogger("I18n");
  var _config = { language: null };
  var _i18n = null;
  var I18n2 = class _I18n {
    /**
     * @static
     * @method
     * Configure I18n part
     * @param {Object} config - Configuration of the I18n
     */
    static configure(config) {
      logger7.debug("configure I18n");
      if (!config) {
        return _config;
      }
      _config = Object.assign({}, _config, config.I18n || config);
      _I18n.createInstance();
      return _config;
    }
    static getModuleName() {
      return "I18n";
    }
    /**
     * @static
     * @method
     * Create an instance of I18n for the library
     */
    static createInstance() {
      logger7.debug("create I18n instance");
      if (_i18n) {
        return;
      }
      _i18n = new I18n$1();
    }
    /**
     * @static @method
     * Explicitly setting language
     * @param {String} lang
     */
    static setLanguage(lang) {
      _I18n.checkConfig();
      assert4(!!_i18n, I18nErrorCode.NotConfigured);
      return _i18n.setLanguage(lang);
    }
    /**
     * @static @method
     * Get value
     * @param {String} key
     * @param {String} defVal - Default value
     */
    static get(key, defVal) {
      if (!_I18n.checkConfig()) {
        return typeof defVal === "undefined" ? key : defVal;
      }
      assert4(!!_i18n, I18nErrorCode.NotConfigured);
      return _i18n.get(key, defVal);
    }
    /**
     * @static
     * @method
     * Add vocabularies for one language
     * @param {String} langurage - Language of the dictionary
     * @param {Object} vocabularies - Object that has key-value as dictionary entry
     */
    static putVocabulariesForLanguage(language, vocabularies) {
      _I18n.checkConfig();
      assert4(!!_i18n, I18nErrorCode.NotConfigured);
      return _i18n.putVocabulariesForLanguage(language, vocabularies);
    }
    /**
     * @static
     * @method
     * Add vocabularies for one language
     * @param {Object} vocabularies - Object that has language as key,
     *                                vocabularies of each language as value
     */
    static putVocabularies(vocabularies) {
      _I18n.checkConfig();
      assert4(!!_i18n, I18nErrorCode.NotConfigured);
      return _i18n.putVocabularies(vocabularies);
    }
    static checkConfig() {
      if (!_i18n) {
        _I18n.createInstance();
      }
      return true;
    }
  };
  I18n2.createInstance();

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/utils/isBrowser.mjs
  var isBrowser = () => typeof window !== "undefined" && typeof window.document !== "undefined";

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
  }

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/native.js
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native_default = {
    randomUUID
  };

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    if (native_default.randomUUID && !buf && !options) {
      return native_default.randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  var v4_default = v4;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/awsClients/pinpoint/base.mjs
  var SERVICE_NAME2 = "mobiletargeting";
  var endpointResolver2 = ({ region }) => ({
    url: new AmplifyUrl(`https://pinpoint.${region}.${getDnsSuffix(region)}`)
  });
  var defaultConfig3 = {
    service: SERVICE_NAME2,
    endpointResolver: endpointResolver2,
    retryDecider: getRetryDecider(parseJsonError),
    computeDelay: jitteredBackoff2,
    userAgentValue: getAmplifyUserAgent()
  };
  var getSharedHeaders2 = () => ({
    "content-type": "application/json"
  });

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/awsClients/pinpoint/errorHelpers.mjs
  var PinpointValidationErrorCode;
  (function(PinpointValidationErrorCode2) {
    PinpointValidationErrorCode2["NoAppId"] = "NoAppId";
  })(PinpointValidationErrorCode || (PinpointValidationErrorCode = {}));
  var pinpointValidationErrorMap = {
    [PinpointValidationErrorCode.NoAppId]: {
      message: "Missing application id."
    }
  };
  var assert5 = createAssertionFunction(pinpointValidationErrorMap);

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/utils/amplifyUuid/index.mjs
  var amplifyUuid = v4_default;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getSignedHeaders.mjs
  var getSignedHeaders = (headers) => Object.keys(headers).map((key) => key.toLowerCase()).sort().join(";");

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/constants.mjs
  var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
  var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
  var AUTH_HEADER = "authorization";
  var HOST_HEADER = "host";
  var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
  var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
  var KEY_TYPE_IDENTIFIER = "aws4_request";
  var SHA256_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
  var SIGNATURE_IDENTIFIER = "AWS4";
  var EMPTY_HASH = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getCredentialScope.mjs
  var getCredentialScope = (date, region, service) => `${date}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getFormattedDates.mjs
  var getFormattedDates = (date) => {
    const longDate = date.toISOString().replace(/[:\-]|\.\d{3}/g, "");
    return {
      longDate,
      shortDate: longDate.slice(0, 8)
    };
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getSigningValues.mjs
  var getSigningValues = ({ credentials, signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService, uriEscapePath = true }) => {
    const { accessKeyId, secretAccessKey, sessionToken } = credentials;
    const { longDate, shortDate } = getFormattedDates(signingDate);
    const credentialScope = getCredentialScope(shortDate, signingRegion, signingService);
    return {
      accessKeyId,
      credentialScope,
      longDate,
      secretAccessKey,
      sessionToken,
      shortDate,
      signingRegion,
      signingService,
      uriEscapePath
    };
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/dataHashHelpers.mjs
  var getHashedData = (key, data) => {
    const sha256 = new Sha256(key ?? void 0);
    sha256.update(data);
    const hashedData = sha256.digestSync();
    return hashedData;
  };
  var getHashedDataAsHex = (key, data) => {
    const hashedData = getHashedData(key, data);
    return toHex(hashedData);
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getCanonicalHeaders.mjs
  var getCanonicalHeaders = (headers) => Object.entries(headers).map(([key, value]) => ({
    key: key.toLowerCase(),
    value: value?.trim().replace(/\s+/g, " ") ?? ""
  })).sort((a, b) => a.key < b.key ? -1 : 1).map((entry) => `${entry.key}:${entry.value}
`).join("");

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getCanonicalQueryString.mjs
  var getCanonicalQueryString = (searchParams) => Array.from(searchParams).sort(([keyA, valA], [keyB, valB]) => {
    if (keyA === keyB) {
      return valA < valB ? -1 : 1;
    }
    return keyA < keyB ? -1 : 1;
  }).map(([key, val]) => `${escapeUri(key)}=${escapeUri(val)}`).join("&");
  var escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
  var hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getCanonicalUri.mjs
  var getCanonicalUri = (pathname, uriEscapePath = true) => pathname ? uriEscapePath ? encodeURIComponent(pathname).replace(/%2F/g, "/") : pathname : "/";

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getHashedPayload.mjs
  var getHashedPayload = (body) => {
    if (body == null) {
      return EMPTY_HASH;
    }
    if (isSourceData(body)) {
      const hashedData = getHashedDataAsHex(null, body);
      return hashedData;
    }
    return UNSIGNED_PAYLOAD;
  };
  var isSourceData = (body) => typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body);
  var isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getCanonicalRequest.mjs
  var getCanonicalRequest = ({ body, headers, method, url }, uriEscapePath = true) => [
    method,
    getCanonicalUri(url.pathname, uriEscapePath),
    getCanonicalQueryString(url.searchParams),
    getCanonicalHeaders(headers),
    getSignedHeaders(headers),
    getHashedPayload(body)
  ].join("\n");

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getSigningKey.mjs
  var getSigningKey = (secretAccessKey, date, region, service) => {
    const key = `${SIGNATURE_IDENTIFIER}${secretAccessKey}`;
    const dateKey = getHashedData(key, date);
    const regionKey = getHashedData(dateKey, region);
    const serviceKey = getHashedData(regionKey, service);
    const signingKey = getHashedData(serviceKey, KEY_TYPE_IDENTIFIER);
    return signingKey;
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getStringToSign.mjs
  var getStringToSign = (date, credentialScope, hashedRequest) => [SHA256_ALGORITHM_IDENTIFIER, date, credentialScope, hashedRequest].join("\n");

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/utils/getSignature.mjs
  var getSignature = (request, { credentialScope, longDate, secretAccessKey, shortDate, signingRegion, signingService, uriEscapePath }) => {
    const canonicalRequest = getCanonicalRequest(request, uriEscapePath);
    const hashedRequest = getHashedDataAsHex(null, canonicalRequest);
    const stringToSign = getStringToSign(longDate, credentialScope, hashedRequest);
    const signature = getHashedDataAsHex(getSigningKey(secretAccessKey, shortDate, signingRegion, signingService), stringToSign);
    return signature;
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/signer/signatureV4/signRequest.mjs
  var signRequest = (request, options) => {
    const signingValues = getSigningValues(options);
    const { accessKeyId, credentialScope, longDate, sessionToken } = signingValues;
    const headers = { ...request.headers };
    headers[HOST_HEADER] = request.url.host;
    headers[AMZ_DATE_HEADER] = longDate;
    if (sessionToken) {
      headers[TOKEN_HEADER] = sessionToken;
    }
    const requestToSign = { ...request, headers };
    const signature = getSignature(requestToSign, signingValues);
    const credentialEntry = `Credential=${accessKeyId}/${credentialScope}`;
    const signedHeadersEntry = `SignedHeaders=${getSignedHeaders(headers)}`;
    const signatureEntry = `Signature=${signature}`;
    headers[AUTH_HEADER] = `${SHA256_ALGORITHM_IDENTIFIER} ${credentialEntry}, ${signedHeadersEntry}, ${signatureEntry}`;
    return requestToSign;
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/utils/getSkewCorrectedDate.mjs
  var getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/utils/isClockSkewed.mjs
  var SKEW_WINDOW = 5 * 60 * 1e3;
  var isClockSkewed = (clockTimeInMilliseconds, clockOffsetInMilliseconds) => Math.abs(getSkewCorrectedDate(clockOffsetInMilliseconds).getTime() - clockTimeInMilliseconds) >= SKEW_WINDOW;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/utils/getUpdatedSystemClockOffset.mjs
  var getUpdatedSystemClockOffset = (clockTimeInMilliseconds, currentSystemClockOffset) => {
    if (isClockSkewed(clockTimeInMilliseconds, currentSystemClockOffset)) {
      return clockTimeInMilliseconds - Date.now();
    }
    return currentSystemClockOffset;
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/middleware.mjs
  var signingMiddleware = ({ credentials, region, service, uriEscapePath = true }) => {
    let currentSystemClockOffset;
    return (next) => async function signingMiddleware2(request) {
      currentSystemClockOffset = currentSystemClockOffset ?? 0;
      const signRequestOptions = {
        credentials: typeof credentials === "function" ? await credentials() : credentials,
        signingDate: getSkewCorrectedDate(currentSystemClockOffset),
        signingRegion: region,
        signingService: service,
        uriEscapePath
      };
      const signedRequest = await signRequest(request, signRequestOptions);
      const response = await next(signedRequest);
      const dateString = getDateHeader(response);
      if (dateString) {
        currentSystemClockOffset = getUpdatedSystemClockOffset(Date.parse(dateString), currentSystemClockOffset);
      }
      return response;
    };
  };
  var getDateHeader = ({ headers } = {}) => headers?.date ?? headers?.Date ?? headers?.["x-amz-date"];

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/handlers/authenticated.mjs
  var authenticatedHandler = composeTransferHandler(fetchTransferHandler, [
    userAgentMiddleware,
    retryMiddleware,
    signingMiddleware
  ]);

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/clients/middleware/signing/utils/extendedEncodeURIComponent.mjs
  var extendedEncodeURIComponent = (uri) => {
    const extendedCharacters = /[!'()*]/g;
    return encodeURIComponent(uri).replace(extendedCharacters, hexEncode2);
  };
  var hexEncode2 = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/awsClients/pinpoint/updateEndpoint.mjs
  var updateEndpointSerializer = ({ ApplicationId = "", EndpointId = "", EndpointRequest }, endpoint) => {
    const headers = getSharedHeaders2();
    const url = new AmplifyUrl(endpoint.url);
    url.pathname = `v1/apps/${extendedEncodeURIComponent(ApplicationId)}/endpoints/${extendedEncodeURIComponent(EndpointId)}`;
    const body = JSON.stringify(EndpointRequest);
    return { method: "PUT", headers, url, body };
  };
  var updateEndpointDeserializer = async (response) => {
    if (response.statusCode >= 300) {
      const error = await parseJsonError(response);
      throw error;
    } else {
      const { Message, RequestID } = await parseJsonBody(response);
      return {
        MessageBody: {
          Message,
          RequestID
        },
        $metadata: parseMetadata(response)
      };
    }
  };
  var updateEndpoint = composeServiceApi(authenticatedHandler, updateEndpointSerializer, updateEndpointDeserializer, defaultConfig3);

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/providers/pinpoint/utils/getCacheKey.mjs
  var PROVIDER_NAME = "pinpoint";
  var getCacheKey = (appId, category) => `${category}:${PROVIDER_NAME}:${appId}`;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/providers/pinpoint/utils/cacheEndpointId.mjs
  var cacheEndpointId = async (appId, category, endpointId) => {
    const cacheKey = getCacheKey(appId, category);
    const ttl = 1e3 * 60 * 60 * 24 * 365 * 100;
    const expiration = (/* @__PURE__ */ new Date()).getTime() + ttl;
    return Cache.setItem(cacheKey, endpointId, {
      expires: expiration,
      priority: 1
    });
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/providers/pinpoint/utils/getEndpointId.mjs
  var getEndpointId = async (appId, category) => {
    const cacheKey = getCacheKey(appId, category);
    const cachedEndpointId = await Cache.getItem(cacheKey);
    return cachedEndpointId ?? void 0;
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/providers/pinpoint/apis/updateEndpoint.mjs
  var updateEndpoint2 = async ({ address, appId, category, channelType, credentials, identityId, optOut, region, userAttributes, userId, userProfile, userAgentValue }) => {
    const endpointId = await getEndpointId(appId, category);
    const createdEndpointId = !endpointId ? amplifyUuid() : void 0;
    const { customProperties, demographic, email, location, metrics, name: name2, plan } = userProfile ?? {};
    const clientInfo = getClientInfo();
    const mergedDemographic = {
      appVersion: clientInfo.appVersion,
      make: clientInfo.make,
      model: clientInfo.model,
      modelVersion: clientInfo.version,
      platform: clientInfo.platform,
      ...demographic
    };
    const shouldAddAttributes = email || customProperties || name2 || plan;
    const attributes = {
      ...email && { email: [email] },
      ...name2 && { name: [name2] },
      ...plan && { plan: [plan] },
      ...customProperties
    };
    const input = {
      ApplicationId: appId,
      EndpointId: endpointId ?? createdEndpointId,
      EndpointRequest: {
        RequestId: amplifyUuid(),
        EffectiveDate: (/* @__PURE__ */ new Date()).toISOString(),
        ChannelType: channelType,
        Address: address,
        Attributes: shouldAddAttributes ? attributes : void 0,
        Demographic: {
          AppVersion: mergedDemographic.appVersion,
          Locale: mergedDemographic.locale,
          Make: mergedDemographic.make,
          Model: mergedDemographic.model,
          ModelVersion: mergedDemographic.modelVersion,
          Platform: mergedDemographic.platform,
          PlatformVersion: mergedDemographic.platformVersion,
          Timezone: mergedDemographic.timezone
        },
        Location: {
          City: location?.city,
          Country: location?.country,
          Latitude: location?.latitude,
          Longitude: location?.longitude,
          PostalCode: location?.postalCode,
          Region: location?.region
        },
        Metrics: metrics,
        OptOut: optOut,
        User: {
          UserId: userId ?? identityId,
          UserAttributes: userAttributes
        }
      }
    };
    await updateEndpoint({ credentials, region, userAgentValue }, input);
    if (!!createdEndpointId) {
      return cacheEndpointId(appId, category, createdEndpointId);
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/providers/pinpoint/utils/resolveEndpointId.mjs
  var resolveEndpointId = async ({ address, appId, category, channelType, credentials, identityId, region, userAgentValue }) => {
    let endpointId = await getEndpointId(appId, category);
    if (!endpointId) {
      await updateEndpoint2({
        address,
        appId,
        category,
        channelType,
        credentials,
        identityId,
        region,
        userAgentValue
      });
      endpointId = await getEndpointId(appId, category);
    }
    assert(!!endpointId, AmplifyErrorCode.NoEndpointId);
    return endpointId;
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/utils/sessionListener/constants.mjs
  var SESSION_START_EVENT = "_session.start";
  var SESSION_STOP_EVENT = "_session.stop";

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/providers/pinpoint/utils/constants.mjs
  var BUFFER_SIZE = 1e3;
  var FLUSH_SIZE = 100;
  var FLUSH_INTERVAL = 5 * 1e3;
  var RESEND_LIMIT = 5;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/awsClients/pinpoint/putEvents.mjs
  var putEventsSerializer = ({ ApplicationId, EventsRequest }, endpoint) => {
    assert5(!!ApplicationId, PinpointValidationErrorCode.NoAppId);
    const headers = getSharedHeaders2();
    const url = new AmplifyUrl(endpoint.url);
    url.pathname = `v1/apps/${extendedEncodeURIComponent(ApplicationId)}/events`;
    const body = JSON.stringify(EventsRequest ?? {});
    return { method: "POST", headers, url, body };
  };
  var putEventsDeserializer = async (response) => {
    if (response.statusCode >= 300) {
      const error = await parseJsonError(response);
      throw error;
    } else {
      const { Results: Results2 } = await parseJsonBody(response);
      return {
        EventsResponse: { Results: Results2 },
        $metadata: parseMetadata(response)
      };
    }
  };
  var putEvents = composeServiceApi(authenticatedHandler, putEventsSerializer, putEventsDeserializer, defaultConfig3);

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/providers/pinpoint/utils/isAppInForeground.mjs
  var isAppInForeground = () => true;

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/providers/pinpoint/utils/PinpointEventBuffer.mjs
  var logger8 = new ConsoleLogger("PinpointEventBuffer");
  var RETRYABLE_CODES = [429, 500];
  var ACCEPTED_CODES = [202];
  var PinpointEventBuffer = class {
    constructor(config) {
      this._interval = void 0;
      this._pause = false;
      this._flush = false;
      this._buffer = [];
      this._config = config;
      this._sendBatch = this._sendBatch.bind(this);
      this._startLoop();
    }
    push(event) {
      if (this._buffer.length >= this._config.bufferSize) {
        logger8.debug("Exceeded Pinpoint event buffer limits, event dropped.", {
          eventId: event.eventId
        });
        return;
      }
      this._buffer.push({ [event.eventId]: event });
    }
    pause() {
      this._pause = true;
    }
    resume() {
      this._pause = false;
    }
    flush() {
      this._flush = true;
    }
    identityHasChanged(identityId) {
      return this._config.identityId !== identityId;
    }
    flushAll() {
      this._putEvents(this._buffer.splice(0, this._buffer.length));
    }
    _startLoop() {
      if (this._interval) {
        clearInterval(this._interval);
      }
      const { flushInterval } = this._config;
      this._interval = setInterval(this._sendBatch, flushInterval);
    }
    _sendBatch() {
      const bufferLength = this._buffer.length;
      if (this._flush && !bufferLength && this._interval) {
        clearInterval(this._interval);
      }
      if (this._pause || !bufferLength || !isAppInForeground()) {
        return;
      }
      const { flushSize } = this._config;
      const batchSize = Math.min(flushSize, bufferLength);
      const bufferSubset = this._buffer.splice(0, batchSize);
      this._putEvents(bufferSubset);
    }
    async _putEvents(buffer) {
      const eventMap = this._bufferToMap(buffer);
      const batchEventParams = this._generateBatchEventParams(eventMap);
      try {
        const { credentials, region, userAgentValue } = this._config;
        const data = await putEvents({
          credentials,
          region,
          userAgentValue
        }, batchEventParams);
        this._processPutEventsSuccessResponse(data, eventMap);
      } catch (err) {
        return this._handlePutEventsFailure(err, eventMap);
      }
    }
    _generateBatchEventParams(eventMap) {
      const batchItem = {};
      Object.values(eventMap).forEach((item) => {
        const { event, timestamp, endpointId, eventId, session: session2 } = item;
        const { name: name2, attributes, metrics } = event;
        batchItem[endpointId] = {
          Endpoint: {
            ...batchItem[endpointId]?.Endpoint
          },
          Events: {
            ...batchItem[endpointId]?.Events,
            [eventId]: {
              EventType: name2,
              Timestamp: new Date(timestamp).toISOString(),
              Attributes: attributes,
              Metrics: metrics,
              Session: session2
            }
          }
        };
      });
      return {
        ApplicationId: this._config.appId,
        EventsRequest: {
          BatchItem: batchItem
        }
      };
    }
    _handlePutEventsFailure(err, eventMap) {
      logger8.debug("putEvents call to Pinpoint failed.", err);
      const statusCode = err.$metadata && err.$metadata.httpStatusCode;
      if (RETRYABLE_CODES.includes(statusCode)) {
        const retryableEvents = Object.values(eventMap);
        this._retry(retryableEvents);
        return;
      }
    }
    _processPutEventsSuccessResponse(data, eventMap) {
      const { Results: Results2 = {} } = data.EventsResponse ?? {};
      const retryableEvents = [];
      Object.entries(Results2).forEach(([endpointId, endpointValues]) => {
        const responses = endpointValues.EventsItemResponse ?? {};
        Object.entries(responses).forEach(([eventId, eventValues]) => {
          const eventObject = eventMap[eventId];
          if (!eventObject) {
            return;
          }
          const { StatusCode, Message } = eventValues ?? {};
          if (StatusCode && ACCEPTED_CODES.includes(StatusCode)) {
            return;
          }
          if (StatusCode && RETRYABLE_CODES.includes(StatusCode)) {
            retryableEvents.push(eventObject);
            return;
          }
          const { name: name2 } = eventObject.event;
          logger8.warn("Pinpoint event failed to send.", {
            eventId,
            name: name2,
            message: Message
          });
        });
      });
      if (retryableEvents.length) {
        this._retry(retryableEvents);
      }
    }
    _retry(retryableEvents) {
      const eligibleEvents = [];
      retryableEvents.forEach((bufferedEvent) => {
        const { eventId } = bufferedEvent;
        const { name: name2 } = bufferedEvent.event;
        if (bufferedEvent.resendLimit-- > 0) {
          logger8.debug("Resending event.", {
            eventId,
            name: name2,
            remainingAttempts: bufferedEvent.resendLimit
          });
          eligibleEvents.push({ [eventId]: bufferedEvent });
          return;
        }
        logger8.debug("No retry attempts remaining for event.", {
          eventId,
          name: name2
        });
      });
      this._buffer.unshift(...eligibleEvents);
    }
    _bufferToMap(buffer) {
      return buffer.reduce((acc, curVal) => {
        const [[key, value]] = Object.entries(curVal);
        acc[key] = value;
        return acc;
      }, {});
    }
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/providers/pinpoint/utils/getEventBuffer.mjs
  var eventBufferMap = {};
  var getEventBuffer = ({ appId, region, credentials, bufferSize, flushInterval, flushSize, resendLimit, identityId, userAgentValue }) => {
    if (eventBufferMap[region]?.[appId]) {
      const buffer2 = eventBufferMap[region][appId];
      if (buffer2.identityHasChanged(identityId)) {
        buffer2.flush();
      } else {
        return buffer2;
      }
    }
    const buffer = new PinpointEventBuffer({
      appId,
      bufferSize,
      credentials,
      flushInterval,
      flushSize,
      identityId,
      region,
      resendLimit,
      userAgentValue
    });
    if (!eventBufferMap[region]) {
      eventBufferMap[region] = {};
    }
    eventBufferMap[region][appId] = buffer;
    return buffer;
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/providers/pinpoint/apis/record.mjs
  var session;
  var record = async ({ appId, category, channelType, credentials, event, identityId, region, userAgentValue, bufferSize, flushInterval, flushSize, resendLimit }) => {
    let eventSession = session;
    const currentTime = /* @__PURE__ */ new Date();
    const timestampISOString = currentTime.toISOString();
    const eventId = amplifyUuid();
    const buffer = getEventBuffer({
      appId,
      region,
      credentials,
      bufferSize: bufferSize ?? BUFFER_SIZE,
      flushInterval: flushInterval ?? FLUSH_INTERVAL,
      flushSize: flushSize ?? FLUSH_SIZE,
      resendLimit: resendLimit ?? RESEND_LIMIT,
      identityId,
      userAgentValue
    });
    const endpointId = await resolveEndpointId({
      appId,
      category,
      channelType,
      credentials,
      identityId,
      region,
      userAgentValue
    });
    if (!eventSession || event.name === SESSION_START_EVENT) {
      const sessionId = amplifyUuid();
      session = {
        Id: sessionId,
        StartTimestamp: timestampISOString
      };
      eventSession = session;
    }
    if (session && event.name === SESSION_STOP_EVENT) {
      eventSession = {
        ...session,
        StopTimestamp: timestampISOString,
        Duration: currentTime.getTime() - new Date(session.StartTimestamp).getTime()
      };
      session = void 0;
    }
    buffer.push({
      eventId,
      endpointId,
      event,
      session: eventSession,
      timestamp: timestampISOString,
      resendLimit: resendLimit ?? RESEND_LIMIT
    });
  };

  // node_modules/.pnpm/@aws-amplify+core@6.0.5/node_modules/@aws-amplify/core/dist/esm/utils/urlSafeDecode.mjs
  function urlSafeDecode(hex) {
    const matchArr = hex.match(/.{2}/g) || [];
    return matchArr.map((char) => String.fromCharCode(parseInt(char, 16))).join("");
  }

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/clients/CognitoIdentityProvider/base.mjs
  var SERVICE_NAME3 = "cognito-idp";
  var endpointResolver3 = ({ region }) => {
    const authConfig = Amplify.getConfig().Auth?.Cognito;
    const customURL = authConfig?.userPoolEndpoint;
    const defaultURL = new AmplifyUrl(`https://${SERVICE_NAME3}.${region}.${getDnsSuffix(region)}`);
    return {
      url: customURL ? new AmplifyUrl(customURL) : defaultURL
    };
  };
  var disableCacheMiddleware2 = () => (next, context) => async function disableCacheMiddleware3(request) {
    request.headers["cache-control"] = "no-store";
    return next(request);
  };
  var cognitoUserPoolTransferHandler = composeTransferHandler(unauthenticatedHandler, [disableCacheMiddleware2]);
  var defaultConfig4 = {
    service: SERVICE_NAME3,
    endpointResolver: endpointResolver3,
    retryDecider: getRetryDecider(parseJsonError),
    computeDelay: jitteredBackoff2,
    userAgentValue: getAmplifyUserAgent(),
    cache: "no-store"
  };
  var getSharedHeaders3 = (operation) => ({
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSCognitoIdentityProviderService.${operation}`
  });
  var buildHttpRpcRequest2 = ({ url }, headers, body) => ({
    headers,
    url,
    body,
    method: "POST"
  });

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs
  var AuthError = class _AuthError extends AmplifyError {
    constructor(params) {
      super(params);
      this.constructor = _AuthError;
      Object.setPrototypeOf(this, _AuthError.prototype);
    }
  };

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs
  function assertServiceError(error) {
    if (!error || error.name === "Error" || error instanceof TypeError) {
      throw new AuthError({
        name: AmplifyErrorCode.Unknown,
        message: "An unknown error has ocurred.",
        underlyingError: error
      });
    }
  }

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/clients/CognitoIdentityProvider/index.mjs
  var buildUserPoolSerializer = (operation) => (input, endpoint) => {
    const headers = getSharedHeaders3(operation);
    const body = JSON.stringify(input);
    return buildHttpRpcRequest2(endpoint, headers, body);
  };
  var buildUserPoolDeserializer = () => {
    return async (response) => {
      if (response.statusCode >= 300) {
        const error = await parseJsonError(response);
        assertServiceError(error);
        throw new AuthError({ name: error.name, message: error.message });
      } else {
        const body = await parseJsonBody(response);
        return body;
      }
    };
  };
  var handleEmptyResponseDeserializer = () => {
    return async (response) => {
      if (response.statusCode >= 300) {
        const error = await parseJsonError(response);
        assertServiceError(error);
        throw new AuthError({ name: error.name, message: error.message });
      } else {
        return void 0;
      }
    };
  };
  var initiateAuth = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("InitiateAuth"), buildUserPoolDeserializer(), defaultConfig4);
  var revokeToken = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("RevokeToken"), buildUserPoolDeserializer(), defaultConfig4);
  var signUp = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("SignUp"), buildUserPoolDeserializer(), defaultConfig4);
  var confirmSignUp = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ConfirmSignUp"), buildUserPoolDeserializer(), defaultConfig4);
  var forgotPassword = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ForgotPassword"), buildUserPoolDeserializer(), defaultConfig4);
  var confirmForgotPassword = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ConfirmForgotPassword"), buildUserPoolDeserializer(), defaultConfig4);
  var respondToAuthChallenge = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("RespondToAuthChallenge"), buildUserPoolDeserializer(), defaultConfig4);
  var resendConfirmationCode = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ResendConfirmationCode"), buildUserPoolDeserializer(), defaultConfig4);
  var verifySoftwareToken = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("VerifySoftwareToken"), buildUserPoolDeserializer(), defaultConfig4);
  var associateSoftwareToken = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("AssociateSoftwareToken"), buildUserPoolDeserializer(), defaultConfig4);
  var setUserMFAPreference = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("SetUserMFAPreference"), buildUserPoolDeserializer(), defaultConfig4);
  var getUser = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("GetUser"), buildUserPoolDeserializer(), defaultConfig4);
  var changePassword = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ChangePassword"), buildUserPoolDeserializer(), defaultConfig4);
  var confirmDevice = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ConfirmDevice"), buildUserPoolDeserializer(), defaultConfig4);
  var forgetDevice = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ForgetDevice"), handleEmptyResponseDeserializer(), defaultConfig4);
  var deleteUser = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("DeleteUser"), handleEmptyResponseDeserializer(), defaultConfig4);
  var getUserAttributeVerificationCode = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("GetUserAttributeVerificationCode"), buildUserPoolDeserializer(), defaultConfig4);
  var globalSignOut = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("GlobalSignOut"), buildUserPoolDeserializer(), defaultConfig4);
  var updateUserAttributes = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("UpdateUserAttributes"), buildUserPoolDeserializer(), defaultConfig4);
  var verifyUserAttribute = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("VerifyUserAttribute"), buildUserPoolDeserializer(), defaultConfig4);
  var updateDeviceStatus = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("UpdateDeviceStatus"), buildUserPoolDeserializer(), defaultConfig4);
  var listDevices = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("ListDevices"), buildUserPoolDeserializer(), defaultConfig4);
  var deleteUserAttributes = composeServiceApi(cognitoUserPoolTransferHandler, buildUserPoolSerializer("DeleteUserAttributes"), buildUserPoolDeserializer(), defaultConfig4);

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs
  var AuthValidationErrorCode;
  (function(AuthValidationErrorCode2) {
    AuthValidationErrorCode2["EmptySignInUsername"] = "EmptySignInUsername";
    AuthValidationErrorCode2["EmptySignInPassword"] = "EmptySignInPassword";
    AuthValidationErrorCode2["CustomAuthSignInPassword"] = "CustomAuthSignInPassword";
    AuthValidationErrorCode2["EmptySignUpUsername"] = "EmptySignUpUsername";
    AuthValidationErrorCode2["EmptySignUpPassword"] = "EmptySignUpPassword";
    AuthValidationErrorCode2["EmptyConfirmSignUpUsername"] = "EmptyConfirmSignUpUsername";
    AuthValidationErrorCode2["EmptyConfirmSignUpCode"] = "EmptyConfirmSignUpCode";
    AuthValidationErrorCode2["EmptyResendSignUpCodeUsername"] = "EmptyresendSignUpCodeUsername";
    AuthValidationErrorCode2["EmptyChallengeResponse"] = "EmptyChallengeResponse";
    AuthValidationErrorCode2["EmptyConfirmResetPasswordUsername"] = "EmptyConfirmResetPasswordUsername";
    AuthValidationErrorCode2["EmptyConfirmResetPasswordNewPassword"] = "EmptyConfirmResetPasswordNewPassword";
    AuthValidationErrorCode2["EmptyConfirmResetPasswordConfirmationCode"] = "EmptyConfirmResetPasswordConfirmationCode";
    AuthValidationErrorCode2["EmptyResetPasswordUsername"] = "EmptyResetPasswordUsername";
    AuthValidationErrorCode2["EmptyVerifyTOTPSetupCode"] = "EmptyVerifyTOTPSetupCode";
    AuthValidationErrorCode2["EmptyConfirmUserAttributeCode"] = "EmptyConfirmUserAttributeCode";
    AuthValidationErrorCode2["IncorrectMFAMethod"] = "IncorrectMFAMethod";
    AuthValidationErrorCode2["EmptyUpdatePassword"] = "EmptyUpdatePassword";
  })(AuthValidationErrorCode || (AuthValidationErrorCode = {}));

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/common/AuthErrorStrings.mjs
  var validationErrorMap = {
    [AuthValidationErrorCode.EmptyChallengeResponse]: {
      message: "challengeResponse is required to confirmSignIn"
    },
    [AuthValidationErrorCode.EmptyConfirmResetPasswordUsername]: {
      message: "username is required to confirmResetPassword"
    },
    [AuthValidationErrorCode.EmptyConfirmSignUpCode]: {
      message: "code is required to confirmSignUp"
    },
    [AuthValidationErrorCode.EmptyConfirmSignUpUsername]: {
      message: "username is required to confirmSignUp"
    },
    [AuthValidationErrorCode.EmptyConfirmResetPasswordConfirmationCode]: {
      message: "confirmationCode is required to confirmResetPassword"
    },
    [AuthValidationErrorCode.EmptyConfirmResetPasswordNewPassword]: {
      message: "newPassword is required to confirmResetPassword"
    },
    [AuthValidationErrorCode.EmptyResendSignUpCodeUsername]: {
      message: "username is required to confirmSignUp"
    },
    [AuthValidationErrorCode.EmptyResetPasswordUsername]: {
      message: "username is required to resetPassword"
    },
    [AuthValidationErrorCode.EmptySignInPassword]: {
      message: "password is required to signIn"
    },
    [AuthValidationErrorCode.EmptySignInUsername]: {
      message: "username is required to signIn"
    },
    [AuthValidationErrorCode.EmptySignUpPassword]: {
      message: "password is required to signUp"
    },
    [AuthValidationErrorCode.EmptySignUpUsername]: {
      message: "username is required to signUp"
    },
    [AuthValidationErrorCode.CustomAuthSignInPassword]: {
      message: "A password is not needed when signing in with CUSTOM_WITHOUT_SRP",
      recoverySuggestion: "Do not include a password in your signIn call."
    },
    [AuthValidationErrorCode.IncorrectMFAMethod]: {
      message: "Incorrect MFA method was chosen. It should be either SMS or TOTP",
      recoverySuggestion: "Try to pass TOTP or SMS as the challengeResponse"
    },
    [AuthValidationErrorCode.EmptyVerifyTOTPSetupCode]: {
      message: "code is required to verifyTotpSetup"
    },
    [AuthValidationErrorCode.EmptyUpdatePassword]: {
      message: "oldPassword and newPassword are required to changePassword"
    },
    [AuthValidationErrorCode.EmptyConfirmUserAttributeCode]: {
      message: "confirmation code is required to confirmUserAttribute"
    }
  };
  var AuthErrorStrings;
  (function(AuthErrorStrings2) {
    AuthErrorStrings2["DEFAULT_MSG"] = "Authentication Error";
    AuthErrorStrings2["EMPTY_EMAIL"] = "Email cannot be empty";
    AuthErrorStrings2["EMPTY_PHONE"] = "Phone number cannot be empty";
    AuthErrorStrings2["EMPTY_USERNAME"] = "Username cannot be empty";
    AuthErrorStrings2["INVALID_USERNAME"] = "The username should either be a string or one of the sign in types";
    AuthErrorStrings2["EMPTY_PASSWORD"] = "Password cannot be empty";
    AuthErrorStrings2["EMPTY_CODE"] = "Confirmation code cannot be empty";
    AuthErrorStrings2["SIGN_UP_ERROR"] = "Error creating account";
    AuthErrorStrings2["NO_MFA"] = "No valid MFA method provided";
    AuthErrorStrings2["INVALID_MFA"] = "Invalid MFA type";
    AuthErrorStrings2["EMPTY_CHALLENGE"] = "Challenge response cannot be empty";
    AuthErrorStrings2["NO_USER_SESSION"] = "Failed to get the session because the user is empty";
    AuthErrorStrings2["NETWORK_ERROR"] = "Network Error";
    AuthErrorStrings2["DEVICE_CONFIG"] = "Device tracking has not been configured in this User Pool";
    AuthErrorStrings2["AUTOSIGNIN_ERROR"] = "Please use your credentials to sign in";
    AuthErrorStrings2["OAUTH_ERROR"] = "Couldn't finish OAuth flow, check your User Pool HostedUI settings";
  })(AuthErrorStrings || (AuthErrorStrings = {}));
  var AuthErrorCodes;
  (function(AuthErrorCodes2) {
    AuthErrorCodes2["SignInException"] = "SignInException";
    AuthErrorCodes2["OAuthSignInError"] = "OAuthSignInException";
  })(AuthErrorCodes || (AuthErrorCodes = {}));

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/clients/CognitoIdentityProvider/utils.mjs
  function getRegion(userPoolId) {
    const region = userPoolId?.split("_")[0];
    if (!userPoolId || userPoolId.indexOf("_") < 0 || !region || typeof region !== "string")
      throw new AuthError({
        name: "InvalidUserPoolId",
        message: "Invalid user pool id provided."
      });
    return region;
  }
  function getRegionFromIdentityPoolId(identityPoolId) {
    if (!identityPoolId || !identityPoolId.includes(":")) {
      throw new AuthError({
        name: "InvalidIdentityPoolIdException",
        message: "Invalid identity pool id provided.",
        recoverySuggestion: "Make sure a valid identityPoolId is given in the config."
      });
    }
    return identityPoolId.split(":")[0];
  }

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/errors/constants.mjs
  var USER_UNAUTHENTICATED_EXCEPTION = "UserUnAuthenticatedException";
  var INVALID_REDIRECT_EXCEPTION = "InvalidRedirectException";
  var invalidRedirectException = new AuthError({
    name: INVALID_REDIRECT_EXCEPTION,
    message: "signInRedirect or signOutRedirect had an invalid format or was not found.",
    recoverySuggestion: "Please make sure the signIn/Out redirect in your oauth config is valid."
  });
  var INVALID_ORIGIN_EXCEPTION = "InvalidOriginException";
  var invalidOriginException = new AuthError({
    name: INVALID_ORIGIN_EXCEPTION,
    message: "redirect is coming from a different origin. The oauth flow needs to be initiated from the same origin",
    recoverySuggestion: "Please call signInWithRedirect from the same origin."
  });

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs
  function assertAuthTokens(tokens) {
    if (!tokens || !tokens.accessToken) {
      throw new AuthError({
        name: USER_UNAUTHENTICATED_EXCEPTION,
        message: "User needs to be authenticated to call this API.",
        recoverySuggestion: "Sign in before calling this API again."
      });
    }
  }
  function assertIdTokenInAuthTokens(tokens) {
    if (!tokens || !tokens.idToken) {
      throw new AuthError({
        name: USER_UNAUTHENTICATED_EXCEPTION,
        message: "User needs to be authenticated to call this API.",
        recoverySuggestion: "Sign in before calling this API again."
      });
    }
  }
  function assertAuthTokensWithRefreshToken(tokens) {
    if (!tokens || !tokens.accessToken || !tokens.refreshToken) {
      throw new AuthError({
        name: USER_UNAUTHENTICATED_EXCEPTION,
        message: "User needs to be authenticated to call this API.",
        recoverySuggestion: "Sign in before calling this API again."
      });
    }
  }
  var OAuthStorageKeys = {
    inflightOAuth: "inflightOAuth",
    oauthSignIn: "oauthSignIn",
    oauthPKCE: "oauthPKCE",
    oauthState: "oauthState"
  };

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/internal/getCurrentUser.mjs
  var getCurrentUser = async (amplify) => {
    const authConfig = amplify.getConfig().Auth?.Cognito;
    assertTokenProviderConfig(authConfig);
    const tokens = await amplify.Auth.getTokens({ forceRefresh: false });
    assertAuthTokens(tokens);
    const { "cognito:username": username, sub } = tokens.idToken?.payload ?? {};
    const authUser = {
      username,
      userId: sub
    };
    const signInDetails = getSignInDetailsFromTokens(tokens);
    if (signInDetails) {
      authUser.signInDetails = signInDetails;
    }
    return authUser;
  };
  function getSignInDetailsFromTokens(tokens) {
    return tokens?.signInDetails;
  }

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/getCurrentUser.mjs
  var getCurrentUser2 = async () => {
    return getCurrentUser(Amplify);
  };

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs
  var getAuthUserAgentValue = (action, customUserAgentDetails) => getAmplifyUserAgent({
    category: Category.Auth,
    action,
    ...customUserAgentDetails
  });

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs
  function getUserContextData({ username, userPoolId, userPoolClientId }) {
    if (typeof window === "undefined") {
      return void 0;
    }
    const amazonCognitoAdvancedSecurityData = window.AmazonCognitoAdvancedSecurityData;
    if (typeof amazonCognitoAdvancedSecurityData === "undefined") {
      return void 0;
    }
    const advancedSecurityData = amazonCognitoAdvancedSecurityData.getData(username, userPoolId, userPoolClientId);
    if (advancedSecurityData) {
      const userContextData = {
        EncodedData: advancedSecurityData
      };
      return userContextData;
    }
    return {};
  }

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/refreshAuthTokens.mjs
  var refreshAuthTokens = async ({ tokens, authConfig, username }) => {
    assertTokenProviderConfig(authConfig?.Cognito);
    const region = getRegion(authConfig.Cognito.userPoolId);
    assertAuthTokensWithRefreshToken(tokens);
    const refreshTokenString = tokens.refreshToken;
    const AuthParameters = {
      REFRESH_TOKEN: refreshTokenString
    };
    if (tokens.deviceMetadata?.deviceKey) {
      AuthParameters["DEVICE_KEY"] = tokens.deviceMetadata.deviceKey;
    }
    const UserContextData = getUserContextData({
      username,
      userPoolId: authConfig.Cognito.userPoolId,
      userPoolClientId: authConfig.Cognito.userPoolClientId
    });
    const { AuthenticationResult } = await initiateAuth({ region }, {
      ClientId: authConfig?.Cognito?.userPoolClientId,
      AuthFlow: "REFRESH_TOKEN_AUTH",
      AuthParameters,
      UserContextData
    });
    const accessToken = decodeJWT(AuthenticationResult?.AccessToken ?? "");
    const idToken = AuthenticationResult?.IdToken ? decodeJWT(AuthenticationResult.IdToken) : void 0;
    const iat = accessToken.payload.iat;
    if (!iat) {
      throw new AuthError({
        name: "iatNotFoundException",
        message: "iat not found in access token"
      });
    }
    const clockDrift = iat * 1e3 - (/* @__PURE__ */ new Date()).getTime();
    return {
      accessToken,
      idToken,
      clockDrift,
      refreshToken: refreshTokenString,
      username
    };
  };

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/types.mjs
  var AuthTokenStorageKeys = {
    accessToken: "accessToken",
    idToken: "idToken",
    oidcProvider: "oidcProvider",
    clockDrift: "clockDrift",
    refreshToken: "refreshToken",
    deviceKey: "deviceKey",
    randomPasswordKey: "randomPasswordKey",
    deviceGroupKey: "deviceGroupKey",
    signInDetails: "signInDetails"
  };

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/errorHelpers.mjs
  var TokenProviderErrorCode;
  (function(TokenProviderErrorCode2) {
    TokenProviderErrorCode2["InvalidAuthTokens"] = "InvalidAuthTokens";
  })(TokenProviderErrorCode || (TokenProviderErrorCode = {}));
  var tokenValidationErrorMap = {
    [TokenProviderErrorCode.InvalidAuthTokens]: {
      message: "Invalid tokens.",
      recoverySuggestion: "Make sure the tokens are valid."
    }
  };
  var assert6 = createAssertionFunction(tokenValidationErrorMap);

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenStore.mjs
  var DefaultTokenStore = class {
    constructor() {
      this.name = "CognitoIdentityServiceProvider";
    }
    getKeyValueStorage() {
      if (!this.keyValueStorage) {
        throw new AuthError({
          name: "KeyValueStorageNotFoundException",
          message: "KeyValueStorage was not found in TokenStore"
        });
      }
      return this.keyValueStorage;
    }
    setKeyValueStorage(keyValueStorage) {
      this.keyValueStorage = keyValueStorage;
    }
    setAuthConfig(authConfig) {
      this.authConfig = authConfig;
    }
    async loadTokens() {
      try {
        const authKeys = await this.getAuthKeys();
        const accessTokenString = await this.getKeyValueStorage().getItem(authKeys.accessToken);
        if (!accessTokenString) {
          throw new AuthError({
            name: "NoSessionFoundException",
            message: "Auth session was not found. Make sure to call signIn."
          });
        }
        const accessToken = decodeJWT(accessTokenString);
        const itString = await this.getKeyValueStorage().getItem(authKeys.idToken);
        const idToken = itString ? decodeJWT(itString) : void 0;
        const refreshToken = await this.getKeyValueStorage().getItem(authKeys.refreshToken) ?? void 0;
        const clockDriftString = await this.getKeyValueStorage().getItem(authKeys.clockDrift) ?? "0";
        const clockDrift = Number.parseInt(clockDriftString);
        const signInDetails = await this.getKeyValueStorage().getItem(authKeys.signInDetails);
        const tokens = {
          accessToken,
          idToken,
          refreshToken,
          deviceMetadata: await this.getDeviceMetadata() ?? void 0,
          clockDrift,
          username: await this.getLastAuthUser()
        };
        if (signInDetails) {
          tokens.signInDetails = JSON.parse(signInDetails);
        }
        return tokens;
      } catch (err) {
        return null;
      }
    }
    async storeTokens(tokens) {
      assert6(tokens !== void 0, TokenProviderErrorCode.InvalidAuthTokens);
      await this.clearTokens();
      const lastAuthUser = tokens.username;
      await this.getKeyValueStorage().setItem(this.getLastAuthUserKey(), lastAuthUser);
      const authKeys = await this.getAuthKeys();
      await this.getKeyValueStorage().setItem(authKeys.accessToken, tokens.accessToken.toString());
      if (!!tokens.idToken) {
        await this.getKeyValueStorage().setItem(authKeys.idToken, tokens.idToken.toString());
      }
      if (!!tokens.refreshToken) {
        await this.getKeyValueStorage().setItem(authKeys.refreshToken, tokens.refreshToken);
      }
      if (!!tokens.deviceMetadata) {
        if (tokens.deviceMetadata.deviceKey) {
          await this.getKeyValueStorage().setItem(authKeys.deviceKey, tokens.deviceMetadata.deviceKey);
        }
        if (tokens.deviceMetadata.deviceGroupKey) {
          await this.getKeyValueStorage().setItem(authKeys.deviceGroupKey, tokens.deviceMetadata.deviceGroupKey);
        }
        await this.getKeyValueStorage().setItem(authKeys.randomPasswordKey, tokens.deviceMetadata.randomPassword);
      }
      if (!!tokens.signInDetails) {
        await this.getKeyValueStorage().setItem(authKeys.signInDetails, JSON.stringify(tokens.signInDetails));
      }
      await this.getKeyValueStorage().setItem(authKeys.clockDrift, `${tokens.clockDrift}`);
    }
    async clearTokens() {
      const authKeys = await this.getAuthKeys();
      await Promise.all([
        this.getKeyValueStorage().removeItem(authKeys.accessToken),
        this.getKeyValueStorage().removeItem(authKeys.idToken),
        this.getKeyValueStorage().removeItem(authKeys.clockDrift),
        this.getKeyValueStorage().removeItem(authKeys.refreshToken),
        this.getKeyValueStorage().removeItem(authKeys.signInDetails),
        this.getKeyValueStorage().removeItem(this.getLastAuthUserKey())
      ]);
    }
    async getDeviceMetadata(username) {
      const authKeys = await this.getAuthKeys(username);
      const deviceKey = await this.getKeyValueStorage().getItem(authKeys.deviceKey);
      const deviceGroupKey = await this.getKeyValueStorage().getItem(authKeys.deviceGroupKey);
      const randomPassword = await this.getKeyValueStorage().getItem(authKeys.randomPasswordKey);
      return !!randomPassword ? {
        deviceKey: deviceKey ?? void 0,
        deviceGroupKey: deviceGroupKey ?? void 0,
        randomPassword
      } : null;
    }
    async clearDeviceMetadata(username) {
      const authKeys = await this.getAuthKeys(username);
      await Promise.all([
        this.getKeyValueStorage().removeItem(authKeys.deviceKey),
        this.getKeyValueStorage().removeItem(authKeys.deviceGroupKey),
        this.getKeyValueStorage().removeItem(authKeys.randomPasswordKey)
      ]);
    }
    async getAuthKeys(username) {
      assertTokenProviderConfig(this.authConfig?.Cognito);
      const lastAuthUser = username ?? await this.getLastAuthUser();
      return createKeysForAuthStorage(this.name, `${this.authConfig.Cognito.userPoolClientId}.${lastAuthUser}`);
    }
    getLastAuthUserKey() {
      assertTokenProviderConfig(this.authConfig?.Cognito);
      const identifier = this.authConfig.Cognito.userPoolClientId;
      return `${this.name}.${identifier}.LastAuthUser`;
    }
    async getLastAuthUser() {
      const lastAuthUser = await this.getKeyValueStorage().getItem(this.getLastAuthUserKey()) ?? "username";
      return lastAuthUser;
    }
  };
  var createKeysForAuthStorage = (provider, identifier) => {
    return getAuthStorageKeys(AuthTokenStorageKeys)(`${provider}`, identifier);
  };
  function getAuthStorageKeys(authKeys) {
    const keys = Object.values({ ...authKeys });
    return (prefix, identifier) => keys.reduce((acc, authKey) => ({
      ...acc,
      [authKey]: `${prefix}.${identifier}.${authKey}`
    }), {});
  }

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenOrchestrator.mjs
  var TokenOrchestrator = class {
    constructor() {
      this.waitForInflightOAuth = async () => {
      };
    }
    setAuthConfig(authConfig) {
      this.authConfig = authConfig;
    }
    setTokenRefresher(tokenRefresher) {
      this.tokenRefresher = tokenRefresher;
    }
    setAuthTokenStore(tokenStore) {
      this.tokenStore = tokenStore;
    }
    setWaitForInflightOAuth(waitForInflightOAuth) {
      this.waitForInflightOAuth = waitForInflightOAuth;
    }
    getTokenStore() {
      if (!this.tokenStore) {
        throw new AuthError({
          name: "EmptyTokenStoreException",
          message: "TokenStore not set"
        });
      }
      return this.tokenStore;
    }
    getTokenRefresher() {
      if (!this.tokenRefresher) {
        throw new AuthError({
          name: "EmptyTokenRefresherException",
          message: "TokenRefresher not set"
        });
      }
      return this.tokenRefresher;
    }
    async getTokens(options) {
      let tokens;
      try {
        assertTokenProviderConfig(this.authConfig?.Cognito);
      } catch (_err) {
        return null;
      }
      await this.waitForInflightOAuth();
      tokens = await this.getTokenStore().loadTokens();
      const username = await this.getTokenStore().getLastAuthUser();
      if (tokens === null) {
        return null;
      }
      const idTokenExpired = !!tokens?.idToken && isTokenExpired({
        expiresAt: (tokens.idToken?.payload?.exp ?? 0) * 1e3,
        clockDrift: tokens.clockDrift ?? 0
      });
      const accessTokenExpired = isTokenExpired({
        expiresAt: (tokens.accessToken?.payload?.exp ?? 0) * 1e3,
        clockDrift: tokens.clockDrift ?? 0
      });
      if (options?.forceRefresh || idTokenExpired || accessTokenExpired) {
        tokens = await this.refreshTokens({
          tokens,
          username
        });
        if (tokens === null) {
          return null;
        }
      }
      return {
        accessToken: tokens?.accessToken,
        idToken: tokens?.idToken,
        signInDetails: tokens?.signInDetails
      };
    }
    async refreshTokens({ tokens, username }) {
      try {
        const newTokens = await this.getTokenRefresher()({
          tokens,
          authConfig: this.authConfig,
          username
        });
        await this.setTokens({ tokens: newTokens });
        Hub.dispatch("auth", { event: "tokenRefresh" }, "Auth", AMPLIFY_SYMBOL);
        return newTokens;
      } catch (err) {
        return this.handleErrors(err);
      }
    }
    handleErrors(err) {
      assertServiceError(err);
      if (err.message !== "Network error") {
        this.clearTokens();
      }
      if (err.name.startsWith("NotAuthorizedException")) {
        return null;
      } else {
        Hub.dispatch("auth", { event: "tokenRefresh_failure" }, "Auth", AMPLIFY_SYMBOL);
        throw err;
      }
    }
    async setTokens({ tokens }) {
      return this.getTokenStore().storeTokens(tokens);
    }
    async clearTokens() {
      return this.getTokenStore().clearTokens();
    }
    getDeviceMetadata(username) {
      return this.getTokenStore().getDeviceMetadata(username);
    }
    clearDeviceMetadata(username) {
      return this.getTokenStore().clearDeviceMetadata(username);
    }
  };

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/index.mjs
  var CognitoUserPoolsTokenProviderClass = class {
    constructor() {
      this.authTokenStore = new DefaultTokenStore();
      this.authTokenStore.setKeyValueStorage(defaultStorage);
      this.tokenOrchestrator = new TokenOrchestrator();
      this.tokenOrchestrator.setAuthTokenStore(this.authTokenStore);
      this.tokenOrchestrator.setTokenRefresher(refreshAuthTokens);
    }
    getTokens({ forceRefresh } = { forceRefresh: false }) {
      return this.tokenOrchestrator.getTokens({ forceRefresh });
    }
    setKeyValueStorage(keyValueStorage) {
      this.authTokenStore.setKeyValueStorage(keyValueStorage);
    }
    setWaitForInflightOAuth(waitForInflightOAuth) {
      this.tokenOrchestrator.setWaitForInflightOAuth(waitForInflightOAuth);
    }
    setAuthConfig(authConfig) {
      this.authTokenStore.setAuthConfig(authConfig);
      this.tokenOrchestrator.setAuthConfig(authConfig);
    }
  };
  var cognitoUserPoolsTokenProvider = new CognitoUserPoolsTokenProviderClass();
  var tokenOrchestrator = cognitoUserPoolsTokenProvider.tokenOrchestrator;

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/cacheTokens.mjs
  async function cacheCognitoTokens(AuthenticationResult) {
    if (AuthenticationResult.AccessToken) {
      const accessToken = decodeJWT(AuthenticationResult.AccessToken);
      const accessTokenIssuedAtInMillis = (accessToken.payload.iat || 0) * 1e3;
      const currentTime = (/* @__PURE__ */ new Date()).getTime();
      const clockDrift = accessTokenIssuedAtInMillis > 0 ? accessTokenIssuedAtInMillis - currentTime : 0;
      let idToken;
      let refreshToken;
      let deviceMetadata;
      if (AuthenticationResult.RefreshToken) {
        refreshToken = AuthenticationResult.RefreshToken;
      }
      if (AuthenticationResult.IdToken) {
        idToken = decodeJWT(AuthenticationResult.IdToken);
      }
      if (AuthenticationResult?.NewDeviceMetadata) {
        deviceMetadata = AuthenticationResult.NewDeviceMetadata;
      }
      const tokens = {
        accessToken,
        idToken,
        refreshToken,
        clockDrift,
        deviceMetadata,
        username: AuthenticationResult.username
      };
      if (AuthenticationResult?.signInDetails) {
        tokens.signInDetails = AuthenticationResult.signInDetails;
      }
      await tokenOrchestrator.setTokens({
        tokens
      });
    } else {
      throw new AmplifyError({
        message: "Invalid tokens",
        name: "InvalidTokens",
        recoverySuggestion: "Check Cognito UserPool settings"
      });
    }
  }

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInWithRedirectStore.mjs
  var V5_HOSTED_UI_KEY = "amplify-signin-with-hostedUI";
  var name = "CognitoIdentityServiceProvider";
  var DefaultOAuthStore = class {
    constructor(keyValueStorage) {
      this.keyValueStorage = keyValueStorage;
    }
    async clearOAuthInflightData() {
      assertTokenProviderConfig(this.cognitoConfig);
      const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
      await Promise.all([
        this.keyValueStorage.removeItem(authKeys.inflightOAuth),
        this.keyValueStorage.removeItem(authKeys.oauthPKCE),
        this.keyValueStorage.removeItem(authKeys.oauthState)
      ]);
    }
    async clearOAuthData() {
      assertTokenProviderConfig(this.cognitoConfig);
      const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
      await this.clearOAuthInflightData();
      await this.keyValueStorage.removeItem(V5_HOSTED_UI_KEY);
      return this.keyValueStorage.removeItem(authKeys.oauthSignIn);
    }
    loadOAuthState() {
      assertTokenProviderConfig(this.cognitoConfig);
      const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
      return this.keyValueStorage.getItem(authKeys.oauthState);
    }
    storeOAuthState(state) {
      assertTokenProviderConfig(this.cognitoConfig);
      const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
      return this.keyValueStorage.setItem(authKeys.oauthState, state);
    }
    loadPKCE() {
      assertTokenProviderConfig(this.cognitoConfig);
      const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
      return this.keyValueStorage.getItem(authKeys.oauthPKCE);
    }
    storePKCE(pkce) {
      assertTokenProviderConfig(this.cognitoConfig);
      const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
      return this.keyValueStorage.setItem(authKeys.oauthPKCE, pkce);
    }
    setAuthConfig(authConfigParam) {
      this.cognitoConfig = authConfigParam;
    }
    async loadOAuthInFlight() {
      assertTokenProviderConfig(this.cognitoConfig);
      const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
      return await this.keyValueStorage.getItem(authKeys.inflightOAuth) === "true";
    }
    async storeOAuthInFlight(inflight) {
      assertTokenProviderConfig(this.cognitoConfig);
      const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
      return await this.keyValueStorage.setItem(authKeys.inflightOAuth, `${inflight}`);
    }
    async loadOAuthSignIn() {
      assertTokenProviderConfig(this.cognitoConfig);
      const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
      const isLegacyHostedUISignIn = await this.keyValueStorage.getItem(V5_HOSTED_UI_KEY);
      const [isOAuthSignIn, preferPrivateSession] = (await this.keyValueStorage.getItem(authKeys.oauthSignIn))?.split(",") ?? [];
      return {
        isOAuthSignIn: isOAuthSignIn === "true" || isLegacyHostedUISignIn === "true",
        preferPrivateSession: preferPrivateSession === "true"
      };
    }
    async storeOAuthSignIn(oauthSignIn, preferPrivateSession = false) {
      assertTokenProviderConfig(this.cognitoConfig);
      const authKeys = createKeysForAuthStorage2(name, this.cognitoConfig.userPoolClientId);
      return await this.keyValueStorage.setItem(authKeys.oauthSignIn, `${oauthSignIn},${preferPrivateSession}`);
    }
  };
  var createKeysForAuthStorage2 = (provider, identifier) => {
    return getAuthStorageKeys(OAuthStorageKeys)(provider, identifier);
  };

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/types/Auth.mjs
  var CognitoHostedUIIdentityProvider;
  (function(CognitoHostedUIIdentityProvider2) {
    CognitoHostedUIIdentityProvider2["Cognito"] = "COGNITO";
    CognitoHostedUIIdentityProvider2["Google"] = "Google";
    CognitoHostedUIIdentityProvider2["Facebook"] = "Facebook";
    CognitoHostedUIIdentityProvider2["Amazon"] = "LoginWithAmazon";
    CognitoHostedUIIdentityProvider2["Apple"] = "SignInWithApple";
  })(CognitoHostedUIIdentityProvider || (CognitoHostedUIIdentityProvider = {}));
  var AuthErrorTypes;
  (function(AuthErrorTypes2) {
    AuthErrorTypes2["NoConfig"] = "noConfig";
    AuthErrorTypes2["MissingAuthConfig"] = "missingAuthConfig";
    AuthErrorTypes2["EmptyUsername"] = "emptyUsername";
    AuthErrorTypes2["InvalidUsername"] = "invalidUsername";
    AuthErrorTypes2["EmptyPassword"] = "emptyPassword";
    AuthErrorTypes2["EmptyCode"] = "emptyCode";
    AuthErrorTypes2["SignUpError"] = "signUpError";
    AuthErrorTypes2["NoMFA"] = "noMFA";
    AuthErrorTypes2["InvalidMFA"] = "invalidMFA";
    AuthErrorTypes2["EmptyChallengeResponse"] = "emptyChallengeResponse";
    AuthErrorTypes2["NoUserSession"] = "noUserSession";
    AuthErrorTypes2["Default"] = "default";
    AuthErrorTypes2["DeviceConfig"] = "deviceConfig";
    AuthErrorTypes2["NetworkError"] = "networkError";
    AuthErrorTypes2["AutoSignInError"] = "autoSignInError";
    AuthErrorTypes2["OAuthSignInError"] = "oauthSignInError";
  })(AuthErrorTypes || (AuthErrorTypes = {}));
  var GRAPHQL_AUTH_MODE;
  (function(GRAPHQL_AUTH_MODE2) {
    GRAPHQL_AUTH_MODE2["API_KEY"] = "API_KEY";
    GRAPHQL_AUTH_MODE2["AWS_IAM"] = "AWS_IAM";
    GRAPHQL_AUTH_MODE2["OPENID_CONNECT"] = "OPENID_CONNECT";
    GRAPHQL_AUTH_MODE2["AMAZON_COGNITO_USER_POOLS"] = "AMAZON_COGNITO_USER_POOLS";
    GRAPHQL_AUTH_MODE2["AWS_LAMBDA"] = "AWS_LAMBDA";
  })(GRAPHQL_AUTH_MODE || (GRAPHQL_AUTH_MODE = {}));

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/Errors.mjs
  var logger9 = new ConsoleLogger("AuthError");
  var authErrorMessages = {
    oauthSignInError: {
      message: AuthErrorStrings.OAUTH_ERROR,
      log: "Make sure Cognito Hosted UI has been configured correctly"
    },
    noConfig: {
      message: AuthErrorStrings.DEFAULT_MSG,
      log: `
            Error: Amplify has not been configured correctly.
            This error is typically caused by one of the following scenarios:

            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point
                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information
            
            2. There might be multiple conflicting versions of amplify packages in your node_modules.
				Refer to our docs site for help upgrading Amplify packages (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)
        `
    },
    missingAuthConfig: {
      message: AuthErrorStrings.DEFAULT_MSG,
      log: `
            Error: Amplify has not been configured correctly. 
            The configuration object is missing required auth properties.
            This error is typically caused by one of the following scenarios:

            1. Did you run \`amplify push\` after adding auth via \`amplify add auth\`?
                See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information

            2. This could also be caused by multiple conflicting versions of amplify packages, see (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js) for help upgrading Amplify packages.
        `
    },
    emptyUsername: {
      message: AuthErrorStrings.EMPTY_USERNAME
    },
    // TODO: should include a list of valid sign-in types
    invalidUsername: {
      message: AuthErrorStrings.INVALID_USERNAME
    },
    emptyPassword: {
      message: AuthErrorStrings.EMPTY_PASSWORD
    },
    emptyCode: {
      message: AuthErrorStrings.EMPTY_CODE
    },
    signUpError: {
      message: AuthErrorStrings.SIGN_UP_ERROR,
      log: "The first parameter should either be non-null string or object"
    },
    noMFA: {
      message: AuthErrorStrings.NO_MFA
    },
    invalidMFA: {
      message: AuthErrorStrings.INVALID_MFA
    },
    emptyChallengeResponse: {
      message: AuthErrorStrings.EMPTY_CHALLENGE
    },
    noUserSession: {
      message: AuthErrorStrings.NO_USER_SESSION
    },
    deviceConfig: {
      message: AuthErrorStrings.DEVICE_CONFIG
    },
    networkError: {
      message: AuthErrorStrings.NETWORK_ERROR
    },
    autoSignInError: {
      message: AuthErrorStrings.AUTOSIGNIN_ERROR
    },
    default: {
      message: AuthErrorStrings.DEFAULT_MSG
    }
  };

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithRedirect.mjs
  var store = new DefaultOAuthStore(defaultStorage);
  async function handleCodeFlow({ currentUrl, userAgentValue, clientId, redirectUri, domain, preferPrivateSession }) {
    const url = new AmplifyUrl(currentUrl);
    let validatedState;
    try {
      validatedState = await validateStateFromURL(url);
    } catch (err) {
      invokeAndClearPromise();
      await store.clearOAuthInflightData();
      return;
    }
    const code = url.searchParams.get("code");
    if (!code) {
      await store.clearOAuthData();
      invokeAndClearPromise();
      return;
    }
    const oAuthTokenEndpoint = "https://" + domain + "/oauth2/token";
    const codeVerifier = await store.loadPKCE();
    const oAuthTokenBody = {
      grant_type: "authorization_code",
      code,
      client_id: clientId,
      redirect_uri: redirectUri,
      ...codeVerifier ? { code_verifier: codeVerifier } : {}
    };
    const body = Object.entries(oAuthTokenBody).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
    const { access_token, refresh_token, id_token, error, token_type, expires_in } = await (await fetch(oAuthTokenEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        [USER_AGENT_HEADER]: userAgentValue
      },
      body
    })).json();
    if (error) {
      invokeAndClearPromise();
      handleFailure(error);
    }
    await store.clearOAuthInflightData();
    const username = (access_token && decodeJWT(access_token).payload.username) ?? "username";
    await cacheCognitoTokens({
      username,
      AccessToken: access_token,
      IdToken: id_token,
      RefreshToken: refresh_token,
      TokenType: token_type,
      ExpiresIn: expires_in
    });
    return completeFlow({
      redirectUri,
      state: validatedState,
      preferPrivateSession
    });
  }
  async function handleImplicitFlow({ currentUrl, redirectUri, preferPrivateSession }) {
    const url = new AmplifyUrl(currentUrl);
    const { id_token, access_token, state, token_type, expires_in } = (url.hash ?? "#").substring(1).split("&").map((pairings) => pairings.split("=")).reduce((accum, [k, v]) => ({ ...accum, [k]: v }), {
      id_token: void 0,
      access_token: void 0,
      state: void 0,
      token_type: void 0,
      expires_in: void 0
    });
    if (!access_token) {
      await store.clearOAuthData();
      invokeAndClearPromise();
      return;
    }
    try {
      validateState(state);
    } catch (error) {
      invokeAndClearPromise();
      return;
    }
    const username = (access_token && decodeJWT(access_token).payload.username) ?? "username";
    await cacheCognitoTokens({
      username,
      AccessToken: access_token,
      IdToken: id_token,
      TokenType: token_type,
      ExpiresIn: expires_in
    });
    return completeFlow({ redirectUri, state, preferPrivateSession });
  }
  async function completeFlow({ redirectUri, state, preferPrivateSession }) {
    await store.clearOAuthData();
    await store.storeOAuthSignIn(true, preferPrivateSession);
    if (isCustomState(state)) {
      Hub.dispatch("auth", {
        event: "customOAuthState",
        data: urlSafeDecode(getCustomState(state))
      }, "Auth", AMPLIFY_SYMBOL);
    }
    Hub.dispatch("auth", { event: "signInWithRedirect" }, "Auth", AMPLIFY_SYMBOL);
    Hub.dispatch("auth", { event: "signedIn", data: await getCurrentUser2() }, "Auth", AMPLIFY_SYMBOL);
    clearHistory(redirectUri);
    invokeAndClearPromise();
  }
  async function handleAuthResponse({ currentUrl, userAgentValue, clientId, redirectUri, responseType, domain, preferPrivateSession }) {
    try {
      const urlParams = new AmplifyUrl(currentUrl);
      const error = urlParams.searchParams.get("error");
      const errorMessage = urlParams.searchParams.get("error_description");
      if (error) {
        handleFailure(errorMessage);
      }
      if (responseType === "code") {
        return await handleCodeFlow({
          currentUrl,
          userAgentValue,
          clientId,
          redirectUri,
          domain,
          preferPrivateSession
        });
      } else {
        return await handleImplicitFlow({
          currentUrl,
          redirectUri,
          preferPrivateSession
        });
      }
    } catch (e) {
      throw e;
    }
  }
  async function validateStateFromURL(urlParams) {
    const returnedState = urlParams.searchParams.get("state");
    validateState(returnedState);
    return returnedState;
  }
  function validateState(state) {
    let savedState;
    store.loadOAuthState().then((resp) => {
      savedState = resp;
    });
    if (savedState && state && savedState !== state) {
      throw new AuthError({
        name: AuthErrorTypes.OAuthSignInError,
        message: "An error occurred while validating the state",
        recoverySuggestion: "Try to initiate an OAuth flow from Amplify"
      });
    }
  }
  function handleFailure(errorMessage) {
    Hub.dispatch("auth", { event: "signInWithRedirect_failure" }, "Auth", AMPLIFY_SYMBOL);
    throw new AuthError({
      message: errorMessage ?? "",
      name: AuthErrorCodes.OAuthSignInError,
      recoverySuggestion: authErrorMessages.oauthSignInError.log
    });
  }
  async function parseRedirectURL() {
    const authConfig = Amplify.getConfig().Auth?.Cognito;
    try {
      assertTokenProviderConfig(authConfig);
      store.setAuthConfig(authConfig);
    } catch (_err) {
      return;
    }
    if (!await store.loadOAuthInFlight()) {
      return;
    }
    try {
      assertOAuthConfig(authConfig);
    } catch (err) {
      return;
    }
    try {
      const currentUrl = window.location.href;
      const { loginWith, userPoolClientId } = authConfig;
      const { domain, redirectSignIn, responseType } = loginWith.oauth;
      handleAuthResponse({
        currentUrl,
        clientId: userPoolClientId,
        domain,
        redirectUri: redirectSignIn[0],
        responseType,
        userAgentValue: getAuthUserAgentValue(AuthAction.SignInWithRedirect)
      });
    } catch (err) {
    }
  }
  function urlListener() {
    parseRedirectURL();
    Hub.listen("core", (capsule) => {
      if (capsule.payload.event === "configure") {
        parseRedirectURL();
      }
    });
  }
  isBrowser() && urlListener();
  var inflightPromiseResolvers = [];
  var invokeAndClearPromise = () => {
    for (const promiseResolver of inflightPromiseResolvers) {
      promiseResolver();
    }
    inflightPromiseResolvers = [];
  };
  isBrowser() && cognitoUserPoolsTokenProvider.setWaitForInflightOAuth(() => new Promise(async (res, _rej) => {
    if (!await store.loadOAuthInFlight()) {
      res();
    } else {
      inflightPromiseResolvers.push(res);
    }
    return;
  }));
  function clearHistory(redirectUri) {
    if (typeof window !== "undefined" && typeof window.history !== "undefined") {
      window.history.replaceState({}, "", redirectUri);
    }
  }
  function isCustomState(state) {
    return /-/.test(state);
  }
  function getCustomState(state) {
    return state.split("-").splice(1).join("-");
  }

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/types.mjs
  var IdentityIdStorageKeys = {
    identityId: "identityId"
  };

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/IdentityIdStore.mjs
  var logger10 = new ConsoleLogger("DefaultIdentityIdStore");
  var DefaultIdentityIdStore = class {
    setAuthConfig(authConfigParam) {
      assertIdentityPoolIdConfig(authConfigParam.Cognito);
      this.authConfig = authConfigParam;
      this._authKeys = createKeysForAuthStorage3("Cognito", authConfigParam.Cognito.identityPoolId);
      return;
    }
    constructor(keyValueStorage) {
      this._authKeys = {};
      this.keyValueStorage = keyValueStorage;
    }
    async loadIdentityId() {
      assertIdentityPoolIdConfig(this.authConfig?.Cognito);
      try {
        if (!!this._primaryIdentityId) {
          return {
            id: this._primaryIdentityId,
            type: "primary"
          };
        } else {
          const storedIdentityId = await this.keyValueStorage.getItem(this._authKeys.identityId);
          if (!!storedIdentityId) {
            return {
              id: storedIdentityId,
              type: "guest"
            };
          }
          return null;
        }
      } catch (err) {
        logger10.log("Error getting stored IdentityId.", err);
        return null;
      }
    }
    async storeIdentityId(identity) {
      assertIdentityPoolIdConfig(this.authConfig?.Cognito);
      if (identity.type === "guest") {
        this.keyValueStorage.setItem(this._authKeys.identityId, identity.id);
        this._primaryIdentityId = void 0;
      } else {
        this._primaryIdentityId = identity.id;
        this.keyValueStorage.removeItem(this._authKeys.identityId);
      }
    }
    async clearIdentityId() {
      this._primaryIdentityId = void 0;
      await this.keyValueStorage.removeItem(this._authKeys.identityId);
    }
  };
  var createKeysForAuthStorage3 = (provider, identifier) => {
    return getAuthStorageKeys(IdentityIdStorageKeys)(`com.amplify.${provider}`, identifier);
  };

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/utils.mjs
  function formLoginsMap(idToken) {
    const issuer = decodeJWT(idToken).payload.iss;
    const res = {};
    if (!issuer) {
      throw new AuthError({
        name: "InvalidIdTokenException",
        message: "Invalid Idtoken."
      });
    }
    let domainName = issuer.replace(/(^\w+:|^)\/\//, "");
    res[domainName] = idToken;
    return res;
  }

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/IdentityIdProvider.mjs
  var logger11 = new ConsoleLogger("CognitoIdentityIdProvider");
  async function cognitoIdentityIdProvider({ tokens, authConfig, identityIdStore }) {
    identityIdStore.setAuthConfig({ Cognito: authConfig });
    let identityId = await identityIdStore.loadIdentityId();
    if (tokens) {
      if (identityId && identityId.type === "primary") {
        return identityId.id;
      } else {
        const logins = tokens.idToken ? formLoginsMap(tokens.idToken.toString()) : {};
        const generatedIdentityId = await generateIdentityId(logins, authConfig);
        if (identityId && identityId.id === generatedIdentityId) {
          logger11.debug(`The guest identity ${identityId.id} has become the primary identity.`);
        }
        identityId = {
          id: generatedIdentityId,
          type: "primary"
        };
      }
    } else {
      if (identityId && identityId.type === "guest") {
        return identityId.id;
      } else {
        identityId = {
          id: await generateIdentityId({}, authConfig),
          type: "guest"
        };
      }
    }
    identityIdStore.storeIdentityId(identityId);
    return identityId.id;
  }
  async function generateIdentityId(logins, authConfig) {
    const identityPoolId = authConfig?.identityPoolId;
    const region = getRegionFromIdentityPoolId(identityPoolId);
    const idResult = (
      // for a first-time user, this will return a brand new identity
      // for a returning user, this will retrieve the previous identity assocaited with the logins
      (await getId({
        region
      }, {
        IdentityPoolId: identityPoolId,
        Logins: logins
      })).IdentityId
    );
    if (!idResult) {
      throw new AuthError({
        name: "GetIdResponseException",
        message: "Received undefined response from getId operation",
        recoverySuggestion: "Make sure to pass a valid identityPoolId in the configuration."
      });
    }
    return idResult;
  }

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/credentialsProvider.mjs
  var logger12 = new ConsoleLogger("CognitoCredentialsProvider");
  var CREDENTIALS_TTL = 50 * 60 * 1e3;
  var CognitoAWSCredentialsAndIdentityIdProvider = class {
    constructor(identityIdStore) {
      this._nextCredentialsRefresh = 0;
      this._identityIdStore = identityIdStore;
    }
    async clearCredentialsAndIdentityId() {
      logger12.debug("Clearing out credentials and identityId");
      this._credentialsAndIdentityId = void 0;
      await this._identityIdStore.clearIdentityId();
    }
    async clearCredentials() {
      logger12.debug("Clearing out in-memory credentials");
      this._credentialsAndIdentityId = void 0;
    }
    async getCredentialsAndIdentityId(getCredentialsOptions) {
      const isAuthenticated = getCredentialsOptions.authenticated;
      const tokens = getCredentialsOptions.tokens;
      const authConfig = getCredentialsOptions.authConfig;
      try {
        assertIdentityPoolIdConfig(authConfig?.Cognito);
      } catch {
        return;
      }
      if (!isAuthenticated && !authConfig.Cognito.allowGuestAccess) {
        return;
      }
      const forceRefresh = getCredentialsOptions.forceRefresh;
      const tokenHasChanged = this.hasTokenChanged(tokens);
      const identityId = await cognitoIdentityIdProvider({
        tokens,
        authConfig: authConfig.Cognito,
        identityIdStore: this._identityIdStore
      });
      if (forceRefresh || tokenHasChanged) {
        this.clearCredentials();
      }
      if (!isAuthenticated) {
        return this.getGuestCredentials(identityId, authConfig.Cognito);
      } else {
        assertIdTokenInAuthTokens(tokens);
        return this.credsForOIDCTokens(authConfig.Cognito, tokens, identityId);
      }
    }
    async getGuestCredentials(identityId, authConfig) {
      if (this._credentialsAndIdentityId && !this.isPastTTL() && this._credentialsAndIdentityId.isAuthenticatedCreds === false) {
        logger12.info("returning stored credentials as they neither past TTL nor expired.");
        return this._credentialsAndIdentityId;
      }
      this.clearCredentials();
      const region = getRegionFromIdentityPoolId(authConfig.identityPoolId);
      const clientResult = await getCredentialsForIdentity({ region }, {
        IdentityId: identityId
      });
      if (clientResult.Credentials && clientResult.Credentials.AccessKeyId && clientResult.Credentials.SecretKey) {
        this._nextCredentialsRefresh = (/* @__PURE__ */ new Date()).getTime() + CREDENTIALS_TTL;
        const res = {
          credentials: {
            accessKeyId: clientResult.Credentials.AccessKeyId,
            secretAccessKey: clientResult.Credentials.SecretKey,
            sessionToken: clientResult.Credentials.SessionToken,
            expiration: clientResult.Credentials.Expiration
          },
          identityId
        };
        const identityIdRes = clientResult.IdentityId;
        if (identityIdRes) {
          res.identityId = identityIdRes;
          this._identityIdStore.storeIdentityId({
            id: identityIdRes,
            type: "guest"
          });
        }
        this._credentialsAndIdentityId = {
          ...res,
          isAuthenticatedCreds: false
        };
        return res;
      } else {
        throw new AuthError({
          name: "CredentialsNotFoundException",
          message: `Cognito did not respond with either Credentials, AccessKeyId or SecretKey.`
        });
      }
    }
    async credsForOIDCTokens(authConfig, authTokens, identityId) {
      if (this._credentialsAndIdentityId && !this.isPastTTL() && this._credentialsAndIdentityId.isAuthenticatedCreds === true) {
        logger12.debug("returning stored credentials as they neither past TTL nor expired.");
        return this._credentialsAndIdentityId;
      }
      this.clearCredentials();
      const logins = authTokens.idToken ? formLoginsMap(authTokens.idToken.toString()) : {};
      const region = getRegionFromIdentityPoolId(authConfig.identityPoolId);
      const clientResult = await getCredentialsForIdentity({ region }, {
        IdentityId: identityId,
        Logins: logins
      });
      if (clientResult.Credentials && clientResult.Credentials.AccessKeyId && clientResult.Credentials.SecretKey) {
        const res = {
          credentials: {
            accessKeyId: clientResult.Credentials.AccessKeyId,
            secretAccessKey: clientResult.Credentials.SecretKey,
            sessionToken: clientResult.Credentials.SessionToken,
            expiration: clientResult.Credentials.Expiration
          },
          identityId
        };
        this._credentialsAndIdentityId = {
          ...res,
          isAuthenticatedCreds: true,
          associatedIdToken: authTokens.idToken?.toString()
        };
        this._nextCredentialsRefresh = (/* @__PURE__ */ new Date()).getTime() + CREDENTIALS_TTL;
        const identityIdRes = clientResult.IdentityId;
        if (identityIdRes) {
          res.identityId = identityIdRes;
          this._identityIdStore.storeIdentityId({
            id: identityIdRes,
            type: "primary"
          });
        }
        return res;
      } else {
        throw new AuthError({
          name: "CredentialsException",
          message: `Cognito did not respond with either Credentials, AccessKeyId or SecretKey.`
        });
      }
    }
    isPastTTL() {
      return this._nextCredentialsRefresh === void 0 ? true : this._nextCredentialsRefresh <= Date.now();
    }
    hasTokenChanged(tokens) {
      return !!tokens && !!this._credentialsAndIdentityId?.associatedIdToken && tokens.idToken?.toString() !== this._credentialsAndIdentityId.associatedIdToken;
    }
  };

  // node_modules/.pnpm/@aws-amplify+auth@6.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/index.mjs
  var cognitoCredentialsProvider = new CognitoAWSCredentialsAndIdentityIdProvider(new DefaultIdentityIdStore(defaultStorage));

  // node_modules/.pnpm/aws-amplify@6.0.5/node_modules/aws-amplify/dist/esm/initSingleton.mjs
  var DefaultAmplify = {
    configure(resourceConfig, libraryOptions) {
      let resolvedResourceConfig;
      if (Object.keys(resourceConfig).some((key) => key.startsWith("aws_"))) {
        resolvedResourceConfig = parseAWSExports(resourceConfig);
      } else {
        resolvedResourceConfig = resourceConfig;
      }
      if (!resolvedResourceConfig.Auth) {
        return Amplify.configure(resolvedResourceConfig, libraryOptions);
      }
      if (libraryOptions?.Auth) {
        return Amplify.configure(resolvedResourceConfig, libraryOptions);
      }
      if (!Amplify.libraryOptions.Auth) {
        cognitoUserPoolsTokenProvider.setAuthConfig(resolvedResourceConfig.Auth);
        cognitoUserPoolsTokenProvider.setKeyValueStorage(
          // TODO: allow configure with a public interface
          libraryOptions?.ssr ? new CookieStorage({ sameSite: "lax" }) : defaultStorage
        );
        return Amplify.configure(resolvedResourceConfig, {
          ...libraryOptions,
          Auth: {
            tokenProvider: cognitoUserPoolsTokenProvider,
            credentialsProvider: cognitoCredentialsProvider
          }
        });
      }
      if (libraryOptions) {
        if (libraryOptions.ssr !== void 0) {
          cognitoUserPoolsTokenProvider.setKeyValueStorage(
            // TODO: allow configure with a public interface
            libraryOptions.ssr ? new CookieStorage({ sameSite: "lax" }) : defaultStorage
          );
        }
        return Amplify.configure(resolvedResourceConfig, {
          Auth: Amplify.libraryOptions.Auth,
          ...libraryOptions
        });
      }
      Amplify.configure(resolvedResourceConfig);
    },
    getConfig() {
      return Amplify.getConfig();
    }
  };

  // node_modules/.pnpm/@aws-amplify+analytics@7.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/analytics/dist/esm/errors/AnalyticsError.mjs
  var AnalyticsError = class _AnalyticsError extends AmplifyError {
    constructor(params) {
      super(params);
      this.constructor = _AnalyticsError;
      Object.setPrototypeOf(this, _AnalyticsError.prototype);
    }
  };

  // node_modules/.pnpm/@aws-amplify+analytics@7.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/analytics/dist/esm/errors/validation.mjs
  var AnalyticsValidationErrorCode;
  (function(AnalyticsValidationErrorCode2) {
    AnalyticsValidationErrorCode2["NoAppId"] = "NoAppId";
    AnalyticsValidationErrorCode2["NoCredentials"] = "NoCredentials";
    AnalyticsValidationErrorCode2["NoEventName"] = "NoEventName";
    AnalyticsValidationErrorCode2["NoRegion"] = "NoRegion";
    AnalyticsValidationErrorCode2["InvalidTracker"] = "InvalidTracker";
    AnalyticsValidationErrorCode2["UnsupportedPlatform"] = "UnsupportedPlatform";
    AnalyticsValidationErrorCode2["NoTrackingId"] = "NoTrackingId";
    AnalyticsValidationErrorCode2["InvalidFlushSize"] = "InvalidFlushSize";
  })(AnalyticsValidationErrorCode || (AnalyticsValidationErrorCode = {}));
  var validationErrorMap2 = {
    [AnalyticsValidationErrorCode.NoAppId]: {
      message: "Missing application id."
    },
    [AnalyticsValidationErrorCode.NoCredentials]: {
      message: "Credentials should not be empty."
    },
    [AnalyticsValidationErrorCode.NoEventName]: {
      message: "Events must specify a name."
    },
    [AnalyticsValidationErrorCode.NoRegion]: {
      message: "Missing region."
    },
    [AnalyticsValidationErrorCode.InvalidTracker]: {
      message: "Invalid tracker type specified."
    },
    [AnalyticsValidationErrorCode.UnsupportedPlatform]: {
      message: "Only session tracking is supported on React Native."
    },
    [AnalyticsValidationErrorCode.InvalidFlushSize]: {
      message: "Invalid FlushSize, it should be smaller than BufferSize"
    },
    [AnalyticsValidationErrorCode.NoTrackingId]: {
      message: "A trackingId is required to use Amazon Personalize"
    }
  };

  // node_modules/.pnpm/@aws-amplify+analytics@7.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/analytics/dist/esm/errors/assertValidationError.mjs
  function assertValidationError(assertion, name2, message) {
    const { message: defaultMessage, recoverySuggestion } = validationErrorMap2[name2];
    if (!assertion) {
      throw new AnalyticsError({
        name: name2,
        message: message ?? defaultMessage,
        recoverySuggestion
      });
    }
  }

  // node_modules/.pnpm/@aws-amplify+analytics@7.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/analytics/dist/esm/utils/statusHelpers.mjs
  var analyticsEnabled = true;
  var isAnalyticsEnabled = () => analyticsEnabled;

  // node_modules/.pnpm/@aws-amplify+analytics@7.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/analytics/dist/esm/utils/userAgent.mjs
  function getAnalyticsUserAgentString(action) {
    return getAmplifyUserAgent({
      category: Category.Analytics,
      action
    });
  }

  // node_modules/.pnpm/@aws-amplify+analytics@7.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/analytics/dist/esm/providers/pinpoint/utils/resolveConfig.mjs
  var resolveConfig = () => {
    const { appId, region, bufferSize, flushSize, flushInterval, resendLimit } = Amplify.getConfig().Analytics?.Pinpoint ?? {};
    assertValidationError(!!appId, AnalyticsValidationErrorCode.NoAppId);
    assertValidationError(!!region, AnalyticsValidationErrorCode.NoRegion);
    return { appId, region, bufferSize, flushSize, flushInterval, resendLimit };
  };

  // node_modules/.pnpm/@aws-amplify+analytics@7.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/analytics/dist/esm/providers/pinpoint/utils/resolveCredentials.mjs
  var resolveCredentials = async () => {
    const { credentials, identityId } = await fetchAuthSession2();
    assertValidationError(!!credentials, AnalyticsValidationErrorCode.NoCredentials);
    return { credentials, identityId };
  };

  // node_modules/.pnpm/@aws-amplify+analytics@7.0.5_@aws-amplify+core@6.0.5/node_modules/@aws-amplify/analytics/dist/esm/providers/pinpoint/apis/record.mjs
  var logger13 = new ConsoleLogger("Analytics");
  var record2 = (input) => {
    const { appId, region, bufferSize, flushSize, flushInterval, resendLimit } = resolveConfig();
    if (!isAnalyticsEnabled()) {
      logger13.debug("Analytics is disabled, event will not be recorded.");
      return;
    }
    assertValidationError(!!input.name, AnalyticsValidationErrorCode.NoEventName);
    resolveCredentials().then(({ credentials, identityId }) => {
      Hub.dispatch("analytics", { event: "record", data: input, message: "Recording Analytics event" }, "Analytics", AMPLIFY_SYMBOL);
      record({
        appId,
        category: "Analytics",
        credentials,
        event: input,
        identityId,
        region,
        userAgentValue: getAnalyticsUserAgentString(AnalyticsAction.Record),
        bufferSize,
        flushSize,
        flushInterval,
        resendLimit
      });
    }).catch((e) => {
      logger13.warn("Failed to record event.", e);
    });
  };

  // node_modules/.pnpm/@cloudflare+speedtest@1.3.0/node_modules/@cloudflare/speedtest/dist/speedtest.js
  var import_isomorphic_fetch = __toESM(require_fetch_npm_browserify(), 1);
  var import_lodash = __toESM(require_lodash(), 1);

  // node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/ascending.js
  function ascending(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  // node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/descending.js
  function descending(a, b) {
    return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  }

  // node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/bisector.js
  function bisector(f) {
    let compare1, compare2, delta;
    if (f.length !== 2) {
      compare1 = ascending;
      compare2 = (d, x) => ascending(f(d), x);
      delta = (d, x) => f(d) - x;
    } else {
      compare1 = f === ascending || f === descending ? f : zero;
      compare2 = f;
      delta = f;
    }
    function left(a, x, lo = 0, hi = a.length) {
      if (lo < hi) {
        if (compare1(x, x) !== 0)
          return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a[mid], x) < 0)
            lo = mid + 1;
          else
            hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function right(a, x, lo = 0, hi = a.length) {
      if (lo < hi) {
        if (compare1(x, x) !== 0)
          return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a[mid], x) <= 0)
            lo = mid + 1;
          else
            hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function center(a, x, lo = 0, hi = a.length) {
      const i = left(a, x, lo, hi - 1);
      return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return { left, center, right };
  }
  function zero() {
    return 0;
  }

  // node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/number.js
  function number(x) {
    return x === null ? NaN : +x;
  }

  // node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/bisect.js
  var ascendingBisect = bisector(ascending);
  var bisectRight = ascendingBisect.right;
  var bisectLeft = ascendingBisect.left;
  var bisectCenter = bisector(number).center;
  var bisect_default = bisectRight;

  // node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js
  function initRange(domain, range) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(domain);
        break;
      default:
        this.range(range).domain(domain);
        break;
    }
    return this;
  }

  // node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/threshold.js
  function threshold() {
    var domain = [0.5], range = [0, 1], unknown, n = 1;
    function scale(x) {
      return x != null && x <= x ? range[bisect_default(domain, x, 0, n)] : unknown;
    }
    scale.domain = function(_) {
      return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
    };
    scale.range = function(_) {
      return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
    };
    scale.invertExtent = function(y) {
      var i = range.indexOf(y);
      return [domain[i - 1], domain[i]];
    };
    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
      return threshold().domain(domain).range(range).unknown(unknown);
    };
    return initRange.apply(scale, arguments);
  }

  // node_modules/.pnpm/@cloudflare+speedtest@1.3.0/node_modules/@cloudflare/speedtest/dist/speedtest.js
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e, n, i, u, a = [], f = true, o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t)
            return;
          f = false;
        } else
          for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
            ;
      } catch (r2) {
        o = true, n = r2;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u))
            return;
        } finally {
          if (o)
            throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
        _defineProperty(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get2(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set2(target2, property2, value2, receiver2) {
        var base = _superPropBase(target2, property2);
        var desc;
        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.set) {
            desc.set.call(receiver2, value2);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }
        desc = Object.getOwnPropertyDescriptor(receiver2, property2);
        if (desc) {
          if (!desc.writable) {
            return false;
          }
          desc.value = value2;
          Object.defineProperty(receiver2, property2, desc);
        } else {
          _defineProperty(receiver2, property2, value2);
        }
        return true;
      };
    }
    return set(target, property, value, receiver);
  }
  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new TypeError("failed to set property");
    }
    return value;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
  }
  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
  function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
  function _classPrivateMethodInitSpec(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }
  var REL_API_URL = "https://speed.cloudflare.com";
  var defaultConfig5 = {
    // Engine
    autoStart: true,
    // APIs
    downloadApiUrl: "".concat(REL_API_URL, "/__down"),
    uploadApiUrl: "".concat(REL_API_URL, "/__up"),
    logMeasurementApiUrl: null,
    logAimApiUrl: "https://aim.cloudflare.com/__log",
    turnServerUri: "turn.speed.cloudflare.com:50000",
    turnServerCredsApiUrl: "".concat(REL_API_URL, "/turn-creds"),
    turnServerUser: null,
    turnServerPass: null,
    rpkiInvalidHost: "invalid.rpki.cloudflare.com",
    cfTraceUrl: "".concat(REL_API_URL, "/cdn-cgi/trace"),
    includeCredentials: false,
    // Measurements
    measurements: [
      {
        type: "latency",
        numPackets: 1
      },
      // initial ttfb estimation
      {
        type: "download",
        bytes: 1e5,
        count: 1,
        bypassMinDuration: true
      },
      // initial download estimation
      {
        type: "latency",
        numPackets: 20
      },
      {
        type: "download",
        bytes: 1e5,
        count: 9
      },
      {
        type: "download",
        bytes: 1e6,
        count: 8
      },
      {
        type: "upload",
        bytes: 1e5,
        count: 8
      },
      {
        type: "packetLoss",
        numPackets: 1e3,
        batchSize: 10,
        batchWaitTime: 10,
        // ms (in between batches)
        responsesWaitTime: 3e3
        // ms (silent time after last sent msg)
      },
      {
        type: "upload",
        bytes: 1e6,
        count: 6
      },
      {
        type: "download",
        bytes: 1e7,
        count: 6
      },
      {
        type: "upload",
        bytes: 1e7,
        count: 4
      },
      {
        type: "download",
        bytes: 25e6,
        count: 4
      },
      {
        type: "upload",
        bytes: 25e6,
        count: 4
      },
      {
        type: "download",
        bytes: 1e8,
        count: 3
      },
      {
        type: "upload",
        bytes: 5e7,
        count: 3
      },
      {
        type: "download",
        bytes: 25e7,
        count: 2
      }
    ],
    measureDownloadLoadedLatency: true,
    measureUploadLoadedLatency: true,
    loadedLatencyThrottle: 400,
    // ms in between loaded latency requests
    bandwidthFinishRequestDuration: 1e3,
    // download/upload duration (ms) to reach for stopping further measurements
    estimatedServerTime: 10,
    // ms to discount from latency calculation (if not present in response headers)
    // Result interpretation
    latencyPercentile: 0.5,
    // Percentile used to calculate latency from a set of measurements
    bandwidthPercentile: 0.9,
    // Percentile used to calculate bandwidth from a set of measurements
    bandwidthMinRequestDuration: 10,
    // minimum duration (ms) to consider a measurement good enough to use in bandwidth calculation
    loadedRequestMinDuration: 250,
    // minimum duration (ms) of a request to consider it to be loading the connection
    loadedLatencyMaxPoints: 20
    // number of data points to keep for loaded latency
  };
  var internalConfig = {
    // AIM
    aimMeasurementScoring: {
      packetLoss: threshold([0.01, 0.05, 0.25, 0.5], [10, 5, 0, -10, -20]),
      latency: threshold([10, 20, 50, 100, 500], [20, 10, 5, 0, -10, -20]),
      loadedLatencyIncrease: threshold([10, 20, 50, 100, 500], [20, 10, 5, 0, -10, -20]),
      jitter: threshold([10, 20, 100, 500], [10, 5, 0, -10, -20]),
      download: threshold([1e6, 1e7, 5e7, 1e8], [0, 5, 10, 20, 30]),
      upload: threshold([1e6, 1e7, 5e7, 1e8], [0, 5, 10, 20, 30])
    },
    aimExperiencesDefs: {
      streaming: {
        input: ["latency", "packetLoss", "download", "loadedLatencyIncrease"],
        pointThresholds: [15, 20, 40, 60]
      },
      gaming: {
        input: ["latency", "packetLoss", "loadedLatencyIncrease"],
        pointThresholds: [5, 15, 25, 30]
      },
      rtc: {
        input: ["latency", "jitter", "packetLoss", "loadedLatencyIncrease"],
        pointThresholds: [5, 15, 25, 40]
      }
    }
  };
  var MAX_RETRIES = 20;
  var ESTIMATED_HEADER_FRACTION = 5e-3;
  var cfGetServerTime = function cfGetServerTime2(r) {
    var serverTiming = r.headers.get("server-timing");
    if (serverTiming) {
      var re = serverTiming.match(/dur=([0-9.]+)/);
      if (re)
        return +re[1];
    }
  };
  var getTtfb = function getTtfb2(perf) {
    return perf.responseStart - perf.requestStart;
  };
  var gePayloadDownload = function gePayloadDownload2(perf) {
    return perf.responseEnd - perf.responseStart;
  };
  var calcDownloadDuration = function calcDownloadDuration2(_ref) {
    var ping = _ref.ping, payloadDownloadTime = _ref.payloadDownloadTime;
    return ping + payloadDownloadTime;
  };
  var calcUploadDuration = function calcUploadDuration2(_ref2) {
    var ttfb = _ref2.ttfb;
    return ttfb;
  };
  var calcDownloadSpeed = function calcDownloadSpeed2(_ref3, numBytes) {
    var duration = _ref3.duration, transferSize = _ref3.transferSize;
    var bits = 8 * (transferSize || +numBytes * (1 + ESTIMATED_HEADER_FRACTION));
    var secs = duration / 1e3;
    return !secs ? void 0 : bits / secs;
  };
  var calcUploadSpeed = function calcUploadSpeed2(_ref4, numBytes) {
    var duration = _ref4.duration;
    var bits = 8 * numBytes * (1 + ESTIMATED_HEADER_FRACTION);
    var secs = duration / 1e3;
    return !secs ? void 0 : bits / secs;
  };
  var genContent = (0, import_lodash.default)(function(numBytes) {
    return "0".repeat(numBytes);
  });
  var _qsParams = /* @__PURE__ */ new WeakMap();
  var _fetchOptions = /* @__PURE__ */ new WeakMap();
  var _responseHook = /* @__PURE__ */ new WeakMap();
  var _onRunningChange = /* @__PURE__ */ new WeakMap();
  var _onNewMeasurementStarted = /* @__PURE__ */ new WeakMap();
  var _onMeasurementResult = /* @__PURE__ */ new WeakMap();
  var _onFinished$1 = /* @__PURE__ */ new WeakMap();
  var _onConnectionError$1 = /* @__PURE__ */ new WeakMap();
  var _measurements = /* @__PURE__ */ new WeakMap();
  var _downloadApi = /* @__PURE__ */ new WeakMap();
  var _uploadApi = /* @__PURE__ */ new WeakMap();
  var _running$2 = /* @__PURE__ */ new WeakMap();
  var _finished$1 = /* @__PURE__ */ new WeakMap();
  var _results$1 = /* @__PURE__ */ new WeakMap();
  var _measIdx = /* @__PURE__ */ new WeakMap();
  var _counter = /* @__PURE__ */ new WeakMap();
  var _retries = /* @__PURE__ */ new WeakMap();
  var _minDuration = /* @__PURE__ */ new WeakMap();
  var _throttleMs = /* @__PURE__ */ new WeakMap();
  var _estimatedServerTime = /* @__PURE__ */ new WeakMap();
  var _currentFetchPromise = /* @__PURE__ */ new WeakMap();
  var _currentNextMsmTimeoutId = /* @__PURE__ */ new WeakMap();
  var _setRunning$2 = /* @__PURE__ */ new WeakSet();
  var _saveMeasurementResults = /* @__PURE__ */ new WeakSet();
  var _nextMeasurement = /* @__PURE__ */ new WeakSet();
  var _cancelCurrentMeasurement = /* @__PURE__ */ new WeakSet();
  var BandwidthMeasurementEngine = /* @__PURE__ */ function() {
    function BandwidthMeasurementEngine2(_measurements2) {
      var _ref5 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, downloadApiUrl = _ref5.downloadApiUrl, uploadApiUrl = _ref5.uploadApiUrl, _ref5$throttleMs = _ref5.throttleMs, throttleMs = _ref5$throttleMs === void 0 ? 0 : _ref5$throttleMs, _ref5$estimatedServer = _ref5.estimatedServerTime, estimatedServerTime = _ref5$estimatedServer === void 0 ? 0 : _ref5$estimatedServer;
      _classCallCheck(this, BandwidthMeasurementEngine2);
      _classPrivateMethodInitSpec(this, _cancelCurrentMeasurement);
      _classPrivateMethodInitSpec(this, _nextMeasurement);
      _classPrivateMethodInitSpec(this, _saveMeasurementResults);
      _classPrivateMethodInitSpec(this, _setRunning$2);
      _classPrivateFieldInitSpec(this, _qsParams, {
        writable: true,
        value: {}
      });
      _classPrivateFieldInitSpec(this, _fetchOptions, {
        writable: true,
        value: {}
      });
      _defineProperty(this, "finishRequestDuration", 1e3);
      _defineProperty(this, "getServerTime", cfGetServerTime);
      _classPrivateFieldInitSpec(this, _responseHook, {
        writable: true,
        value: function value(r) {
          return r;
        }
      });
      _classPrivateFieldInitSpec(this, _onRunningChange, {
        writable: true,
        value: function value() {
        }
      });
      _classPrivateFieldInitSpec(this, _onNewMeasurementStarted, {
        writable: true,
        value: function value() {
        }
      });
      _classPrivateFieldInitSpec(this, _onMeasurementResult, {
        writable: true,
        value: function value() {
        }
      });
      _classPrivateFieldInitSpec(this, _onFinished$1, {
        writable: true,
        value: function value() {
        }
      });
      _classPrivateFieldInitSpec(this, _onConnectionError$1, {
        writable: true,
        value: function value() {
        }
      });
      _classPrivateFieldInitSpec(this, _measurements, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _downloadApi, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _uploadApi, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _running$2, {
        writable: true,
        value: false
      });
      _classPrivateFieldInitSpec(this, _finished$1, {
        writable: true,
        value: {
          down: false,
          up: false
        }
      });
      _classPrivateFieldInitSpec(this, _results$1, {
        writable: true,
        value: {
          down: {},
          up: {}
        }
      });
      _classPrivateFieldInitSpec(this, _measIdx, {
        writable: true,
        value: 0
      });
      _classPrivateFieldInitSpec(this, _counter, {
        writable: true,
        value: 0
      });
      _classPrivateFieldInitSpec(this, _retries, {
        writable: true,
        value: 0
      });
      _classPrivateFieldInitSpec(this, _minDuration, {
        writable: true,
        value: -Infinity
      });
      _classPrivateFieldInitSpec(this, _throttleMs, {
        writable: true,
        value: 0
      });
      _classPrivateFieldInitSpec(this, _estimatedServerTime, {
        writable: true,
        value: 0
      });
      _classPrivateFieldInitSpec(this, _currentFetchPromise, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _currentNextMsmTimeoutId, {
        writable: true,
        value: void 0
      });
      if (!_measurements2)
        throw new Error("Missing measurements argument");
      if (!downloadApiUrl)
        throw new Error("Missing downloadApiUrl argument");
      if (!uploadApiUrl)
        throw new Error("Missing uploadApiUrl argument");
      _classPrivateFieldSet(this, _measurements, _measurements2);
      _classPrivateFieldSet(this, _downloadApi, downloadApiUrl);
      _classPrivateFieldSet(this, _uploadApi, uploadApiUrl);
      _classPrivateFieldSet(this, _throttleMs, throttleMs);
      _classPrivateFieldSet(this, _estimatedServerTime, Math.max(0, estimatedServerTime));
    }
    _createClass(BandwidthMeasurementEngine2, [{
      key: "results",
      get: function get() {
        return _classPrivateFieldGet(this, _results$1);
      }
    }, {
      key: "qsParams",
      get: (
        // additional query string params to include in the requests
        function get() {
          return _classPrivateFieldGet(this, _qsParams);
        }
      ),
      set: function set2(v) {
        _classPrivateFieldSet(this, _qsParams, v);
      }
    }, {
      key: "fetchOptions",
      get: (
        // additional options included in the requests
        function get() {
          return _classPrivateFieldGet(this, _fetchOptions);
        }
      ),
      set: function set2(v) {
        _classPrivateFieldSet(this, _fetchOptions, v);
      }
    }, {
      key: "responseHook",
      set: (
        // pipe-through of response objects
        function set2(f) {
          _classPrivateFieldSet(this, _responseHook, f);
        }
      )
    }, {
      key: "onRunningChange",
      set: (
        // callback invoked when engine starts/stops
        function set2(f) {
          _classPrivateFieldSet(this, _onRunningChange, f);
        }
      )
    }, {
      key: "onNewMeasurementStarted",
      set: (
        // callback invoked when a new item in the measurement list is started
        function set2(f) {
          _classPrivateFieldSet(this, _onNewMeasurementStarted, f);
        }
      )
    }, {
      key: "onMeasurementResult",
      set: (
        // callback invoked when a new measurement result arrives
        function set2(f) {
          _classPrivateFieldSet(this, _onMeasurementResult, f);
        }
      )
    }, {
      key: "onFinished",
      set: (
        // callback invoked when all the measurements are finished
        function set2(f) {
          _classPrivateFieldSet(this, _onFinished$1, f);
        }
      )
    }, {
      key: "onConnectionError",
      set: (
        // Invoked when unable to get a response from the API
        function set2(f) {
          _classPrivateFieldSet(this, _onConnectionError$1, f);
        }
      )
      // Public methods
    }, {
      key: "pause",
      value: function pause() {
        clearTimeout(_classPrivateFieldGet(this, _currentNextMsmTimeoutId));
        _classPrivateMethodGet(this, _cancelCurrentMeasurement, _cancelCurrentMeasurement2).call(this);
        _classPrivateMethodGet(this, _setRunning$2, _setRunning2$2).call(this, false);
      }
    }, {
      key: "play",
      value: function play() {
        if (!_classPrivateFieldGet(this, _running$2)) {
          _classPrivateMethodGet(this, _setRunning$2, _setRunning2$2).call(this, true);
          _classPrivateMethodGet(this, _nextMeasurement, _nextMeasurement2).call(this);
        }
      }
    }]);
    return BandwidthMeasurementEngine2;
  }();
  function _setRunning2$2(running) {
    var _this = this;
    if (running !== _classPrivateFieldGet(this, _running$2)) {
      _classPrivateFieldSet(this, _running$2, running);
      setTimeout(function() {
        return _classPrivateFieldGet(_this, _onRunningChange).call(_this, _classPrivateFieldGet(_this, _running$2));
      });
    }
  }
  function _saveMeasurementResults2(measIdx, measTiming) {
    var _this2 = this;
    var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _measurements)[measIdx], bytes = _classPrivateFieldGet2.bytes, dir = _classPrivateFieldGet2.dir;
    var results = _classPrivateFieldGet(this, _results$1);
    var bytesResult = results[dir].hasOwnProperty(bytes) ? results[dir][bytes] : {
      timings: [],
      // count all measurements with same bytes and direction
      numMeasurements: _classPrivateFieldGet(this, _measurements).filter(function(_ref6) {
        var b = _ref6.bytes, d = _ref6.dir;
        return bytes === b && dir === d;
      }).map(function(m) {
        return m.count;
      }).reduce(function(agg, cnt) {
        return agg + cnt;
      }, 0)
    };
    !!measTiming && bytesResult.timings.push(measTiming);
    bytesResult.timings = bytesResult.timings.slice(-bytesResult.numMeasurements);
    results[dir][bytes] = bytesResult;
    if (measTiming) {
      setTimeout(function() {
        _classPrivateFieldGet(_this2, _onMeasurementResult).call(_this2, _objectSpread2({
          type: dir,
          bytes
        }, measTiming), results);
      });
    } else {
      _classPrivateFieldGet(this, _onNewMeasurementStarted).call(this, _classPrivateFieldGet(this, _measurements)[measIdx], results);
    }
  }
  function _nextMeasurement2() {
    var _this3 = this;
    var measurements = _classPrivateFieldGet(this, _measurements);
    var meas = measurements[_classPrivateFieldGet(this, _measIdx)];
    if (_classPrivateFieldGet(this, _counter) >= meas.count) {
      var finished = _classPrivateFieldGet(this, _finished$1);
      if (_classPrivateFieldGet(this, _minDuration) > this.finishRequestDuration && !meas.bypassMinDuration) {
        var _dir = meas.dir;
        _classPrivateFieldGet(this, _finished$1)[_dir] = true;
        Object.values(_classPrivateFieldGet(this, _finished$1)).every(function(finished2) {
          return finished2;
        }) && _classPrivateFieldGet(this, _onFinished$1).call(this, _classPrivateFieldGet(this, _results$1));
      }
      _classPrivateFieldSet(this, _counter, 0);
      _classPrivateFieldSet(this, _minDuration, -Infinity);
      performance.clearResourceTimings();
      do {
        _classPrivateFieldSet(this, _measIdx, _classPrivateFieldGet(this, _measIdx) + 1);
      } while (_classPrivateFieldGet(this, _measIdx) < measurements.length && finished[measurements[_classPrivateFieldGet(this, _measIdx)].dir]);
      if (_classPrivateFieldGet(this, _measIdx) >= measurements.length) {
        _classPrivateFieldSet(this, _finished$1, {
          down: true,
          up: true
        });
        _classPrivateMethodGet(this, _setRunning$2, _setRunning2$2).call(this, false);
        _classPrivateFieldGet(this, _onFinished$1).call(this, _classPrivateFieldGet(this, _results$1));
        return;
      }
      meas = measurements[_classPrivateFieldGet(this, _measIdx)];
    }
    var measIdx = _classPrivateFieldGet(this, _measIdx);
    if (_classPrivateFieldGet(this, _counter) === 0) {
      _classPrivateMethodGet(this, _saveMeasurementResults, _saveMeasurementResults2).call(this, measIdx);
    }
    var _meas = meas, numBytes = _meas.bytes, dir = _meas.dir;
    var isDown = dir === "down";
    var apiUrl = isDown ? _classPrivateFieldGet(this, _downloadApi) : _classPrivateFieldGet(this, _uploadApi);
    var qsParams = Object.assign({}, _classPrivateFieldGet(this, _qsParams));
    isDown && (qsParams.bytes = "".concat(numBytes));
    var url = "".concat(
      apiUrl.startsWith("http") || apiUrl.startsWith("//") ? "" : window.location.origin
      // use abs to match perf timing urls
    ).concat(apiUrl, "?").concat(Object.entries(qsParams).map(function(_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2), k = _ref8[0], v = _ref8[1];
      return "".concat(k, "=").concat(v);
    }).join("&"));
    var fetchOpt = Object.assign({}, isDown ? {} : {
      method: "POST",
      body: genContent(numBytes)
    }, _classPrivateFieldGet(this, _fetchOptions));
    var serverTime;
    var curPromise = _classPrivateFieldSet(this, _currentFetchPromise, fetch(url, fetchOpt).then(function(r) {
      if (r.ok)
        return r;
      throw Error(r.statusText);
    }).then(function(r) {
      _this3.getServerTime && (serverTime = _this3.getServerTime(r));
      return r;
    }).then(function(r) {
      return r.text().then(function(body) {
        _classPrivateFieldGet(_this3, _responseHook) && _classPrivateFieldGet(_this3, _responseHook).call(_this3, {
          url,
          headers: r.headers,
          body
        });
        return body;
      });
    }).then(function(_, reject) {
      if (curPromise._cancel) {
        reject("cancelled");
        return;
      }
      var perf = performance.getEntriesByName(url).slice(-1)[0];
      var timing = {
        transferSize: perf.transferSize,
        ttfb: getTtfb(perf),
        payloadDownloadTime: gePayloadDownload(perf),
        serverTime: serverTime || -1,
        measTime: /* @__PURE__ */ new Date()
      };
      timing.ping = Math.max(0.01, timing.ttfb - (serverTime || _classPrivateFieldGet(_this3, _estimatedServerTime)));
      timing.duration = (isDown ? calcDownloadDuration : calcUploadDuration)(timing);
      timing.bps = (isDown ? calcDownloadSpeed : calcUploadSpeed)(timing, numBytes);
      if (isDown && numBytes) {
        var reqSize = +numBytes;
        if (timing.transferSize && (timing.transferSize < reqSize || timing.transferSize / reqSize > 1.05)) {
          console.warn("Requested ".concat(reqSize, "B but received ").concat(timing.transferSize, "B (").concat(Math.round(timing.transferSize / reqSize * 1e4) / 100, "%)."));
        }
      }
      _classPrivateMethodGet(_this3, _saveMeasurementResults, _saveMeasurementResults2).call(_this3, measIdx, timing);
      var requestDuration = timing.duration;
      _classPrivateFieldSet(_this3, _minDuration, _classPrivateFieldGet(_this3, _minDuration) < 0 ? requestDuration : Math.min(_classPrivateFieldGet(_this3, _minDuration), requestDuration));
      _classPrivateFieldSet(_this3, _counter, _classPrivateFieldGet(_this3, _counter) + 1);
      _classPrivateFieldSet(_this3, _retries, 0);
      if (_classPrivateFieldGet(_this3, _throttleMs)) {
        _classPrivateFieldSet(_this3, _currentNextMsmTimeoutId, setTimeout(function() {
          return _classPrivateMethodGet(_this3, _nextMeasurement, _nextMeasurement2).call(_this3);
        }, _classPrivateFieldGet(_this3, _throttleMs)));
      } else {
        _classPrivateMethodGet(_this3, _nextMeasurement, _nextMeasurement2).call(_this3);
      }
    })["catch"](function(error) {
      var _this$retries, _this$retries2;
      if (curPromise._cancel)
        return;
      console.warn("Error fetching ".concat(url, ": ").concat(error));
      if ((_classPrivateFieldSet(_this3, _retries, (_this$retries = _classPrivateFieldGet(_this3, _retries), _this$retries2 = _this$retries++, _this$retries)), _this$retries2) < MAX_RETRIES) {
        _classPrivateMethodGet(_this3, _nextMeasurement, _nextMeasurement2).call(_this3);
      } else {
        _classPrivateFieldSet(_this3, _retries, 0);
        _classPrivateMethodGet(_this3, _setRunning$2, _setRunning2$2).call(_this3, false);
        _classPrivateFieldGet(_this3, _onConnectionError$1).call(_this3, "Connection failed to ".concat(url, ". Gave up after ").concat(MAX_RETRIES, " retries."));
      }
    }));
  }
  function _cancelCurrentMeasurement2() {
    var curPromise = _classPrivateFieldGet(this, _currentFetchPromise);
    curPromise && (curPromise._cancel = true);
  }
  var BandwidthEngine$2 = BandwidthMeasurementEngine;
  var _excluded$5 = ["measureParallelLatency", "parallelLatencyThrottleMs", "downloadApiUrl", "uploadApiUrl", "estimatedServerTime"];
  var _latencyEngine = /* @__PURE__ */ new WeakMap();
  var _setLatencyRunning = /* @__PURE__ */ new WeakSet();
  var BandwidthWithParallelLatencyEngine = /* @__PURE__ */ function(_BandwidthEngine) {
    _inherits(BandwidthWithParallelLatencyEngine2, _BandwidthEngine);
    var _super = _createSuper(BandwidthWithParallelLatencyEngine2);
    function BandwidthWithParallelLatencyEngine2(measurements) {
      var _thisSuper, _thisSuper2, _this;
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$measureParallelL = _ref.measureParallelLatency, measureParallelLatency = _ref$measureParallelL === void 0 ? false : _ref$measureParallelL, _ref$parallelLatencyT = _ref.parallelLatencyThrottleMs, parallelLatencyThrottleMs = _ref$parallelLatencyT === void 0 ? 100 : _ref$parallelLatencyT, downloadApiUrl = _ref.downloadApiUrl, uploadApiUrl = _ref.uploadApiUrl, _ref$estimatedServerT = _ref.estimatedServerTime, estimatedServerTime = _ref$estimatedServerT === void 0 ? 0 : _ref$estimatedServerT, ptProps = _objectWithoutProperties(_ref, _excluded$5);
      _classCallCheck(this, BandwidthWithParallelLatencyEngine2);
      _this = _super.call(this, measurements, _objectSpread2({
        downloadApiUrl,
        uploadApiUrl,
        estimatedServerTime
      }, ptProps));
      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _setLatencyRunning);
      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _latencyEngine, {
        writable: true,
        value: void 0
      });
      if (measureParallelLatency) {
        _classPrivateFieldSet(_assertThisInitialized(_this), _latencyEngine, new BandwidthEngine$2([{
          dir: "down",
          bytes: 0,
          count: Infinity,
          bypassMinDuration: true
        }], {
          downloadApiUrl,
          uploadApiUrl,
          estimatedServerTime,
          throttleMs: parallelLatencyThrottleMs
        }));
        _classPrivateFieldGet(_assertThisInitialized(_this), _latencyEngine).qsParams = {
          during: "".concat(measurements[0].dir, "load")
        };
        _set((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(BandwidthWithParallelLatencyEngine2.prototype)), "onRunningChange", _classPrivateMethodGet(_assertThisInitialized(_this), _setLatencyRunning, _setLatencyRunning2), _thisSuper, true);
        _set((_thisSuper2 = _assertThisInitialized(_this), _getPrototypeOf(BandwidthWithParallelLatencyEngine2.prototype)), "onConnectionError", function() {
          return _classPrivateFieldGet(_assertThisInitialized(_this), _latencyEngine).pause();
        }, _thisSuper2, true);
      }
      return _this;
    }
    _createClass(BandwidthWithParallelLatencyEngine2, [{
      key: "latencyResults",
      get: function get() {
        return _classPrivateFieldGet(this, _latencyEngine) && _classPrivateFieldGet(this, _latencyEngine).results.down[0].timings;
      }
      // callback invoked when a new parallel latency result arrives
    }, {
      key: "onParallelLatencyResult",
      set: function set2(f) {
        _classPrivateFieldGet(this, _latencyEngine) && (_classPrivateFieldGet(this, _latencyEngine).onMeasurementResult = function(res) {
          return f(res);
        });
      }
      // Overridden attributes
    }, {
      key: "fetchOptions",
      get: function get() {
        return _get(_getPrototypeOf(BandwidthWithParallelLatencyEngine2.prototype), "fetchOptions", this);
      },
      set: function set2(fetchOptions) {
        _set(_getPrototypeOf(BandwidthWithParallelLatencyEngine2.prototype), "fetchOptions", fetchOptions, this, true);
        _classPrivateFieldGet(this, _latencyEngine) && (_classPrivateFieldGet(this, _latencyEngine).fetchOptions = fetchOptions);
      }
    }, {
      key: "onRunningChange",
      set: function set2(onRunningChange) {
        var _this2 = this;
        _set(_getPrototypeOf(BandwidthWithParallelLatencyEngine2.prototype), "onRunningChange", function(running) {
          _classPrivateMethodGet(_this2, _setLatencyRunning, _setLatencyRunning2).call(_this2, running);
          onRunningChange(running);
        }, this, true);
      }
    }, {
      key: "onConnectionError",
      set: function set2(onConnectionError) {
        var _this3 = this;
        _set(_getPrototypeOf(BandwidthWithParallelLatencyEngine2.prototype), "onConnectionError", function() {
          _classPrivateFieldGet(_this3, _latencyEngine) && _classPrivateFieldGet(_this3, _latencyEngine).pause();
          onConnectionError.apply(void 0, arguments);
        }, this, true);
      }
    }]);
    return BandwidthWithParallelLatencyEngine2;
  }(BandwidthEngine$2);
  function _setLatencyRunning2(running) {
    var _this4 = this;
    _classPrivateFieldGet(this, _latencyEngine) && (!running ? _classPrivateFieldGet(this, _latencyEngine).pause() : (
      // slight delay in starting latency measurements
      setTimeout(function() {
        return _classPrivateFieldGet(_this4, _latencyEngine).play();
      }, 20)
    ));
  }
  var BandwidthEngine$1 = BandwidthWithParallelLatencyEngine;
  var _excluded$4 = ["measurementId", "logApiUrl"];
  var _measurementId$1 = /* @__PURE__ */ new WeakMap();
  var _token = /* @__PURE__ */ new WeakMap();
  var _requestTime = /* @__PURE__ */ new WeakMap();
  var _logApiUrl = /* @__PURE__ */ new WeakMap();
  var _loggingResponseHook = /* @__PURE__ */ new WeakSet();
  var _logMeasurement = /* @__PURE__ */ new WeakSet();
  var LoggingBandwidthEngine = /* @__PURE__ */ function(_BandwidthEngine) {
    _inherits(LoggingBandwidthEngine2, _BandwidthEngine);
    var _super = _createSuper(LoggingBandwidthEngine2);
    function LoggingBandwidthEngine2(measurements) {
      var _thisSuper, _thisSuper2, _thisSuper3, _this;
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, measurementId = _ref.measurementId, logApiUrl = _ref.logApiUrl, ptProps = _objectWithoutProperties(_ref, _excluded$4);
      _classCallCheck(this, LoggingBandwidthEngine2);
      _this = _super.call(this, measurements, ptProps);
      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _logMeasurement);
      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _loggingResponseHook);
      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _measurementId$1, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _token, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _requestTime, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _logApiUrl, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldSet(_assertThisInitialized(_this), _measurementId$1, measurementId);
      _classPrivateFieldSet(_assertThisInitialized(_this), _logApiUrl, logApiUrl);
      _set((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(LoggingBandwidthEngine2.prototype)), "qsParams", logApiUrl ? {
        measId: _classPrivateFieldGet(_assertThisInitialized(_this), _measurementId$1)
      } : {}, _thisSuper, true);
      _set((_thisSuper2 = _assertThisInitialized(_this), _getPrototypeOf(LoggingBandwidthEngine2.prototype)), "responseHook", function(r) {
        return _classPrivateMethodGet(_assertThisInitialized(_this), _loggingResponseHook, _loggingResponseHook2).call(_assertThisInitialized(_this), r);
      }, _thisSuper2, true);
      _set((_thisSuper3 = _assertThisInitialized(_this), _getPrototypeOf(LoggingBandwidthEngine2.prototype)), "onMeasurementResult", function(meas) {
        return _classPrivateMethodGet(_assertThisInitialized(_this), _logMeasurement, _logMeasurement2).call(_assertThisInitialized(_this), meas);
      }, _thisSuper3, true);
      return _this;
    }
    _createClass(LoggingBandwidthEngine2, [{
      key: "qsParams",
      set: function set2(qsParams) {
        _set(_getPrototypeOf(LoggingBandwidthEngine2.prototype), "qsParams", _classPrivateFieldGet(this, _logApiUrl) ? _objectSpread2({
          measId: _classPrivateFieldGet(this, _measurementId$1)
        }, qsParams) : qsParams, this, true);
      }
    }, {
      key: "responseHook",
      set: function set2(responseHook) {
        var _this2 = this;
        _set(_getPrototypeOf(LoggingBandwidthEngine2.prototype), "responseHook", function(r) {
          responseHook(r);
          _classPrivateMethodGet(_this2, _loggingResponseHook, _loggingResponseHook2).call(_this2, r);
        }, this, true);
      }
    }, {
      key: "onMeasurementResult",
      set: function set2(onMeasurementResult) {
        var _this3 = this;
        _set(_getPrototypeOf(LoggingBandwidthEngine2.prototype), "onMeasurementResult", function(meas) {
          for (var _len = arguments.length, restArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            restArgs[_key - 1] = arguments[_key];
          }
          onMeasurementResult.apply(void 0, [meas].concat(restArgs));
          _classPrivateMethodGet(_this3, _logMeasurement, _logMeasurement2).call(_this3, meas);
        }, this, true);
      }
    }]);
    return LoggingBandwidthEngine2;
  }(BandwidthEngine$1);
  function _loggingResponseHook2(r) {
    if (!_classPrivateFieldGet(this, _logApiUrl))
      return;
    _classPrivateFieldSet(this, _requestTime, +r.headers.get("cf-meta-request-time"));
    _classPrivateFieldSet(this, _token, r.body.slice(-300).split("___").pop());
  }
  function _logMeasurement2(measData) {
    if (!_classPrivateFieldGet(this, _logApiUrl))
      return;
    var logData = {
      type: measData.type,
      bytes: measData.bytes,
      ping: Math.round(measData.ping),
      // round to ms
      ttfb: Math.round(measData.ttfb),
      // round to ms
      payloadDownloadTime: Math.round(measData.payloadDownloadTime),
      duration: Math.round(measData.duration),
      transferSize: Math.round(measData.transferSize),
      serverTime: Math.round(measData.serverTime),
      token: _classPrivateFieldGet(this, _token),
      requestTime: _classPrivateFieldGet(this, _requestTime),
      measId: _classPrivateFieldGet(this, _measurementId$1)
    };
    _classPrivateFieldSet(this, _token, null);
    _classPrivateFieldSet(this, _requestTime, null);
    fetch(_classPrivateFieldGet(this, _logApiUrl), _objectSpread2({
      method: "POST",
      body: JSON.stringify(logData)
    }, this.fetchOptions));
  }
  var BandwidthEngine = LoggingBandwidthEngine;
  var _running$1 = /* @__PURE__ */ new WeakMap();
  var _currentPromise = /* @__PURE__ */ new WeakMap();
  var _promiseFn = /* @__PURE__ */ new WeakMap();
  var _setRunning$1 = /* @__PURE__ */ new WeakSet();
  var _next$1 = /* @__PURE__ */ new WeakSet();
  var _cancelCurrent = /* @__PURE__ */ new WeakSet();
  var PromiseEngine = /* @__PURE__ */ function() {
    function PromiseEngine2(promiseFn) {
      _classCallCheck(this, PromiseEngine2);
      _classPrivateMethodInitSpec(this, _cancelCurrent);
      _classPrivateMethodInitSpec(this, _next$1);
      _classPrivateMethodInitSpec(this, _setRunning$1);
      _classPrivateFieldInitSpec(this, _running$1, {
        writable: true,
        value: false
      });
      _classPrivateFieldInitSpec(this, _currentPromise, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _promiseFn, {
        writable: true,
        value: void 0
      });
      if (!promiseFn)
        throw new Error("Missing operation to perform");
      _classPrivateFieldSet(this, _promiseFn, promiseFn);
      this.play();
    }
    _createClass(PromiseEngine2, [{
      key: "pause",
      value: function pause() {
        _classPrivateMethodGet(this, _cancelCurrent, _cancelCurrent2).call(this);
        _classPrivateMethodGet(this, _setRunning$1, _setRunning2$1).call(this, false);
      }
    }, {
      key: "stop",
      value: function stop() {
        this.pause();
      }
    }, {
      key: "play",
      value: function play() {
        if (!_classPrivateFieldGet(this, _running$1)) {
          _classPrivateMethodGet(this, _setRunning$1, _setRunning2$1).call(this, true);
          _classPrivateMethodGet(this, _next$1, _next2$1).call(this);
        }
      }
    }]);
    return PromiseEngine2;
  }();
  function _setRunning2$1(running) {
    if (running !== _classPrivateFieldGet(this, _running$1)) {
      _classPrivateFieldSet(this, _running$1, running);
    }
  }
  function _next2$1() {
    var _this2 = this;
    var curPromise = _classPrivateFieldSet(this, _currentPromise, _classPrivateFieldGet(this, _promiseFn).call(this).then(function() {
      !curPromise._cancel && _classPrivateMethodGet(_this2, _next$1, _next2$1).call(_this2);
    }));
  }
  function _cancelCurrent2() {
    var curPromise = _classPrivateFieldGet(this, _currentPromise);
    curPromise && (curPromise._cancel = true);
  }
  var _engines = /* @__PURE__ */ new WeakMap();
  var LoadNetworkEngine = /* @__PURE__ */ function() {
    function LoadNetworkEngine2() {
      var _this = this;
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, download = _ref.download, upload = _ref.upload;
      _classCallCheck(this, LoadNetworkEngine2);
      _defineProperty(this, "qsParams", {});
      _defineProperty(this, "fetchOptions", {});
      _classPrivateFieldInitSpec(this, _engines, {
        writable: true,
        value: []
      });
      if (!download && !upload)
        throw new Error("Missing at least one of download/upload config");
      [[download, "download"], [upload, "upload"]].filter(function(_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1), cfg = _ref3[0];
        return cfg;
      }).forEach(function(_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), cfg = _ref5[0], type = _ref5[1];
        var apiUrl = cfg.apiUrl, chunkSize = cfg.chunkSize;
        if (!apiUrl)
          throw new Error("Missing ".concat(type, " apiUrl argument"));
        if (!chunkSize)
          throw new Error("Missing ".concat(type, " chunkSize argument"));
      });
      var getLoadEngine = function getLoadEngine2(_ref6) {
        var apiUrl = _ref6.apiUrl, _ref6$qsParams = _ref6.qsParams, qsParams = _ref6$qsParams === void 0 ? {} : _ref6$qsParams, _ref6$fetchOptions = _ref6.fetchOptions, fetchOptions = _ref6$fetchOptions === void 0 ? {} : _ref6$fetchOptions;
        return new PromiseEngine(function() {
          var fetchQsParams = Object.assign({}, qsParams, _this.qsParams);
          var url = "".concat(
            apiUrl.startsWith("http") || apiUrl.startsWith("//") ? "" : window.location.origin
            // use abs to match perf timing urls
          ).concat(apiUrl, "?").concat(Object.entries(fetchQsParams).map(function(_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2), k = _ref8[0], v = _ref8[1];
            return "".concat(k, "=").concat(v);
          }).join("&"));
          var fetchOpt = Object.assign({}, fetchOptions, _this.fetchOptions);
          return fetch(url, fetchOpt).then(function(r) {
            if (r.ok)
              return r;
            throw Error(r.statusText);
          }).then(function(r) {
            return r.text();
          });
        });
      };
      download && _classPrivateFieldGet(this, _engines).push(getLoadEngine({
        apiUrl: download.apiUrl,
        qsParams: {
          bytes: "".concat(download.chunkSize)
        }
      }));
      upload && _classPrivateFieldGet(this, _engines).push(getLoadEngine({
        apiUrl: upload.apiUrl,
        fetchOptions: {
          method: "POST",
          body: "0".repeat(upload.chunkSize)
        }
      }));
    }
    _createClass(LoadNetworkEngine2, [{
      key: "pause",
      value: (
        // additional options included in the requests
        // Public methods
        function pause() {
          _classPrivateFieldGet(this, _engines).forEach(function(engine) {
            return engine.pause();
          });
        }
      )
    }, {
      key: "stop",
      value: function stop() {
        this.pause();
      }
    }, {
      key: "play",
      value: function play() {
        _classPrivateFieldGet(this, _engines).forEach(function(engine) {
          return engine.play();
        });
      }
    }]);
    return LoadNetworkEngine2;
  }();
  var LoadNetworkEngine$1 = LoadNetworkEngine;
  var _excluded$3 = ["iceServers", "acceptIceCandidate", "dataChannelCfg"];
  var _established = /* @__PURE__ */ new WeakMap();
  var _sender = /* @__PURE__ */ new WeakMap();
  var _receiver = /* @__PURE__ */ new WeakMap();
  var _senderDc = /* @__PURE__ */ new WeakMap();
  var _receiverDc = /* @__PURE__ */ new WeakMap();
  var SelfWebRtcDataConnection = /* @__PURE__ */ function() {
    function SelfWebRtcDataConnection2() {
      var _this = this;
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$iceServers = _ref.iceServers, iceServers = _ref$iceServers === void 0 ? [] : _ref$iceServers, _ref$acceptIceCandida = _ref.acceptIceCandidate, acceptIceCandidate = _ref$acceptIceCandida === void 0 ? function(candidate) {
        var protocol = candidate.protocol || "";
        if (!protocol && candidate.candidate) {
          var sdpAttrs = candidate.candidate.split(" ");
          sdpAttrs.length >= 3 && (protocol = sdpAttrs[2]);
        }
        return protocol.toLowerCase() === "udp";
      } : _ref$acceptIceCandida, _ref$dataChannelCfg = _ref.dataChannelCfg, dataChannelCfg = _ref$dataChannelCfg === void 0 ? {
        ordered: false,
        maxRetransmits: 0
      } : _ref$dataChannelCfg, rtcPeerConnectionCfg = _objectWithoutProperties(_ref, _excluded$3);
      _classCallCheck(this, SelfWebRtcDataConnection2);
      _defineProperty(this, "onOpen", function() {
      });
      _defineProperty(this, "onClose", function() {
      });
      _defineProperty(this, "onMessageReceived", function() {
      });
      _classPrivateFieldInitSpec(this, _established, {
        writable: true,
        value: false
      });
      _classPrivateFieldInitSpec(this, _sender, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _receiver, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _senderDc, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _receiverDc, {
        writable: true,
        value: void 0
      });
      var sender = new RTCPeerConnection(_objectSpread2({
        iceServers
      }, rtcPeerConnectionCfg));
      var receiver = new RTCPeerConnection(_objectSpread2({
        iceServers
      }, rtcPeerConnectionCfg));
      var senderDc = sender.createDataChannel("channel", dataChannelCfg);
      senderDc.onopen = function() {
        _classPrivateFieldSet(_this, _established, true);
        _this.onOpen();
      };
      senderDc.onclose = function() {
        return _this.close();
      };
      receiver.ondatachannel = function(e) {
        var dc = e.channel;
        dc.onclose = function() {
          return _this.close();
        };
        dc.onmessage = function(msg) {
          return _this.onMessageReceived(msg.data);
        };
        _classPrivateFieldSet(_this, _receiverDc, dc);
      };
      sender.onicecandidate = function(e) {
        e.candidate && acceptIceCandidate(e.candidate) && receiver.addIceCandidate(e.candidate);
      };
      receiver.onicecandidate = function(e) {
        e.candidate && acceptIceCandidate(e.candidate) && sender.addIceCandidate(e.candidate);
      };
      sender.createOffer().then(function(offer) {
        return sender.setLocalDescription(offer);
      }).then(function() {
        return receiver.setRemoteDescription(sender.localDescription);
      }).then(function() {
        return receiver.createAnswer();
      }).then(function(answer) {
        return receiver.setLocalDescription(answer);
      }).then(function() {
        return sender.setRemoteDescription(receiver.localDescription);
      });
      _classPrivateFieldSet(this, _sender, sender);
      _classPrivateFieldSet(this, _receiver, receiver);
      _classPrivateFieldSet(this, _senderDc, senderDc);
      _classPrivateFieldSet(this, _established, false);
    }
    _createClass(SelfWebRtcDataConnection2, [{
      key: "send",
      value: (
        // callback invoked when a new message is received from the TURN server
        // Public methods
        function send(msg) {
          return _classPrivateFieldGet(this, _senderDc).send(msg);
        }
      )
    }, {
      key: "close",
      value: function close() {
        _classPrivateFieldGet(this, _sender) && _classPrivateFieldGet(this, _sender).close();
        _classPrivateFieldGet(this, _receiver) && _classPrivateFieldGet(this, _receiver).close();
        _classPrivateFieldGet(this, _senderDc) && _classPrivateFieldGet(this, _senderDc).close();
        _classPrivateFieldGet(this, _receiverDc) && _classPrivateFieldGet(this, _receiverDc).close();
        _classPrivateFieldGet(this, _established) && this.onClose();
        _classPrivateFieldSet(this, _established, false);
        return this;
      }
    }]);
    return SelfWebRtcDataConnection2;
  }();
  var _onCredentialsFailure = /* @__PURE__ */ new WeakMap();
  var _onConnectionError = /* @__PURE__ */ new WeakMap();
  var _onFinished = /* @__PURE__ */ new WeakMap();
  var _msgTracker = /* @__PURE__ */ new WeakMap();
  var _webRtcConnection = /* @__PURE__ */ new WeakMap();
  var _numMsgs = /* @__PURE__ */ new WeakMap();
  var PacketLossEngine$1 = /* @__PURE__ */ function() {
    function PacketLossEngine2() {
      var _this = this;
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, turnServerUri = _ref.turnServerUri, turnServerCredsApi = _ref.turnServerCredsApi, _ref$turnServerCredsA = _ref.turnServerCredsApiParser, turnServerCredsApiParser = _ref$turnServerCredsA === void 0 ? function(_ref2) {
        var username = _ref2.username, credential = _ref2.credential;
        return {
          turnServerUser: username,
          turnServerPass: credential
        };
      } : _ref$turnServerCredsA, _ref$turnServerCredsA2 = _ref.turnServerCredsApiIncludeCredentials, turnServerCredsApiIncludeCredentials = _ref$turnServerCredsA2 === void 0 ? false : _ref$turnServerCredsA2, turnServerUser = _ref.turnServerUser, turnServerPass = _ref.turnServerPass, _ref$numMsgs = _ref.numMsgs, numMsgs = _ref$numMsgs === void 0 ? 100 : _ref$numMsgs, _ref$batchSize = _ref.batchSize, batchSize = _ref$batchSize === void 0 ? 10 : _ref$batchSize, _ref$batchWaitTime = _ref.batchWaitTime, batchWaitTime = _ref$batchWaitTime === void 0 ? 10 : _ref$batchWaitTime, _ref$responsesWaitTim = _ref.responsesWaitTime, responsesWaitTime = _ref$responsesWaitTim === void 0 ? 5e3 : _ref$responsesWaitTim, _ref$connectionTimeou = _ref.connectionTimeout, connectionTimeout = _ref$connectionTimeou === void 0 ? 5e3 : _ref$connectionTimeou;
      _classCallCheck(this, PacketLossEngine2);
      _classPrivateFieldInitSpec(this, _onCredentialsFailure, {
        writable: true,
        value: function value() {
        }
      });
      _classPrivateFieldInitSpec(this, _onConnectionError, {
        writable: true,
        value: function value() {
        }
      });
      _classPrivateFieldInitSpec(this, _onFinished, {
        writable: true,
        value: function value() {
        }
      });
      _defineProperty(this, "onMsgSent", function() {
      });
      _defineProperty(this, "onAllMsgsSent", function() {
      });
      _defineProperty(this, "onMsgReceived", function() {
      });
      _classPrivateFieldInitSpec(this, _msgTracker, {
        writable: true,
        value: {}
      });
      _classPrivateFieldInitSpec(this, _webRtcConnection, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _numMsgs, {
        writable: true,
        value: void 0
      });
      if (!turnServerUri)
        throw new Error("Missing turnServerUri argument");
      if ((!turnServerUser || !turnServerPass) && !turnServerCredsApi)
        throw new Error("Missing either turnServerCredsApi or turnServerUser+turnServerPass arguments");
      _classPrivateFieldSet(this, _numMsgs, numMsgs);
      (!turnServerUser || !turnServerPass ? (
        // Get TURN credentials from API endpoint if not statically supplied
        fetch(turnServerCredsApi, {
          credentials: turnServerCredsApiIncludeCredentials ? "include" : void 0
        }).then(function(r) {
          return r.json();
        }).then(function(d) {
          if (d.error)
            throw d.error;
          return d;
        }).then(turnServerCredsApiParser)
      ) : Promise.resolve({
        turnServerUser,
        turnServerPass
      }))["catch"](function(e) {
        return _classPrivateFieldGet(_this, _onCredentialsFailure).call(_this, e);
      }).then(function(_ref3) {
        var turnServerUser2 = _ref3.turnServerUser, turnServerPass2 = _ref3.turnServerPass;
        var c = _classPrivateFieldSet(_this, _webRtcConnection, new SelfWebRtcDataConnection({
          iceServers: [{
            urls: "turn:".concat(turnServerUri, "?transport=udp"),
            username: turnServerUser2,
            credential: turnServerPass2
          }],
          iceTransportPolicy: "relay"
        }));
        var connectionSuccess = false;
        setTimeout(function() {
          if (!connectionSuccess) {
            c.close();
            _classPrivateFieldGet(_this, _onConnectionError).call(_this, "ICE connection timeout!");
          }
        }, connectionTimeout);
        var msgTracker = _classPrivateFieldGet(_this, _msgTracker);
        c.onOpen = function() {
          connectionSuccess = true;
          var self2 = _this;
          (function sendNum(n) {
            if (n <= numMsgs) {
              var i = n;
              while (i <= Math.min(numMsgs, n + batchSize - 1)) {
                msgTracker[i] = false;
                c.send(i);
                self2.onMsgSent(i);
                i++;
              }
              setTimeout(function() {
                return sendNum(i);
              }, batchWaitTime);
            } else {
              self2.onAllMsgsSent(Object.keys(msgTracker).length);
              var finishFn = function finishFn2() {
                c.close();
                _classPrivateFieldGet(self2, _onFinished).call(self2, self2.results);
              };
              var finishTimeout = setTimeout(finishFn, responsesWaitTime);
              var missingMsgs = Object.values(_classPrivateFieldGet(self2, _msgTracker)).filter(function(recv) {
                return !recv;
              }).length;
              c.onMessageReceived = function(msg) {
                clearTimeout(finishTimeout);
                msgTracker[msg] = true;
                self2.onMsgReceived(msg);
                missingMsgs--;
                if (missingMsgs <= 0 && Object.values(_classPrivateFieldGet(self2, _msgTracker)).every(function(recv) {
                  return recv;
                })) {
                  finishFn();
                } else {
                  finishTimeout = setTimeout(finishFn, responsesWaitTime);
                }
              };
            }
          })(1);
        };
        c.onMessageReceived = function(msg) {
          msgTracker[msg] = true;
          _this.onMsgReceived(msg);
        };
      })["catch"](function(e) {
        return _classPrivateFieldGet(_this, _onConnectionError).call(_this, e.toString());
      });
    }
    _createClass(PacketLossEngine2, [{
      key: "onCredentialsFailure",
      set: (
        // Invoked when unable to fetch TURN server credentials
        function set2(f) {
          _classPrivateFieldSet(this, _onCredentialsFailure, f);
        }
      )
    }, {
      key: "onConnectionError",
      set: (
        // Invoked when unable to establish a connection with TURN server
        function set2(f) {
          _classPrivateFieldSet(this, _onConnectionError, f);
        }
      )
    }, {
      key: "onFinished",
      set: (
        // Invoked when the packet loss measurement is complete
        function set2(f) {
          _classPrivateFieldSet(this, _onFinished, f);
        }
      )
    }, {
      key: "results",
      get: (
        // Invoked when receiving a new message from the TURN server
        function get() {
          var totalMessages = _classPrivateFieldGet(this, _numMsgs);
          var numMessagesSent = Object.keys(_classPrivateFieldGet(this, _msgTracker)).length;
          var lostMessages = Object.entries(_classPrivateFieldGet(this, _msgTracker)).filter(function(_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2), recv = _ref5[1];
            return !recv;
          }).map(function(_ref6) {
            var _ref7 = _slicedToArray(_ref6, 1), n = _ref7[0];
            return +n;
          });
          var packetLoss = lostMessages.length / numMessagesSent;
          return {
            totalMessages,
            numMessagesSent,
            packetLoss,
            lostMessages
          };
        }
      )
    }]);
    return PacketLossEngine2;
  }();
  var _excluded$2 = ["downloadChunkSize", "uploadChunkSize", "downloadApiUrl", "uploadApiUrl"];
  var _loadEngine = /* @__PURE__ */ new WeakMap();
  var PacketLossUnderLoadEngine = /* @__PURE__ */ function(_PacketLossEngine) {
    _inherits(PacketLossUnderLoadEngine2, _PacketLossEngine);
    var _super = _createSuper(PacketLossUnderLoadEngine2);
    function PacketLossUnderLoadEngine2() {
      var _thisSuper, _thisSuper3, _thisSuper5, _this;
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, downloadChunkSize = _ref.downloadChunkSize, uploadChunkSize = _ref.uploadChunkSize, downloadApiUrl = _ref.downloadApiUrl, uploadApiUrl = _ref.uploadApiUrl, ptProps = _objectWithoutProperties(_ref, _excluded$2);
      _classCallCheck(this, PacketLossUnderLoadEngine2);
      _this = _super.call(this, ptProps);
      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _loadEngine, {
        writable: true,
        value: void 0
      });
      if (downloadChunkSize || uploadChunkSize) {
        _classPrivateFieldSet(_assertThisInitialized(_this), _loadEngine, new LoadNetworkEngine$1({
          download: downloadChunkSize ? {
            apiUrl: downloadApiUrl,
            chunkSize: downloadChunkSize
          } : null,
          upload: uploadChunkSize ? {
            apiUrl: uploadApiUrl,
            chunkSize: uploadChunkSize
          } : null
        }));
        _set((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(PacketLossUnderLoadEngine2.prototype)), "onCredentialsFailure", _set((_thisSuper5 = _assertThisInitialized(_this), _getPrototypeOf(PacketLossUnderLoadEngine2.prototype)), "onConnectionError", _set((_thisSuper3 = _assertThisInitialized(_this), _getPrototypeOf(PacketLossUnderLoadEngine2.prototype)), "onFinished", function() {
          return _classPrivateFieldGet(_assertThisInitialized(_this), _loadEngine).stop();
        }, _thisSuper3, true), _thisSuper5, true), _thisSuper, true);
      }
      return _this;
    }
    _createClass(PacketLossUnderLoadEngine2, [{
      key: "qsParams",
      set: function set2(qsParams) {
        _classPrivateFieldGet(this, _loadEngine) && (_classPrivateFieldGet(this, _loadEngine).qsParams = qsParams);
      }
    }, {
      key: "fetchOptions",
      set: function set2(fetchOptions) {
        _classPrivateFieldGet(this, _loadEngine) && (_classPrivateFieldGet(this, _loadEngine).fetchOptions = fetchOptions);
      }
    }, {
      key: "onCredentialsFailure",
      set: function set2(onCredentialsFailure) {
        var _this2 = this;
        _set(_getPrototypeOf(PacketLossUnderLoadEngine2.prototype), "onCredentialsFailure", function() {
          onCredentialsFailure.apply(void 0, arguments);
          _classPrivateFieldGet(_this2, _loadEngine) && _classPrivateFieldGet(_this2, _loadEngine).stop();
        }, this, true);
      }
    }, {
      key: "onConnectionError",
      set: function set2(onConnectionError) {
        var _this3 = this;
        _set(_getPrototypeOf(PacketLossUnderLoadEngine2.prototype), "onConnectionError", function() {
          onConnectionError.apply(void 0, arguments);
          _classPrivateFieldGet(_this3, _loadEngine) && _classPrivateFieldGet(_this3, _loadEngine).stop();
        }, this, true);
      }
    }, {
      key: "onFinished",
      set: function set2(onFinished) {
        var _this4 = this;
        _set(_getPrototypeOf(PacketLossUnderLoadEngine2.prototype), "onFinished", function() {
          onFinished.apply(void 0, arguments);
          _classPrivateFieldGet(_this4, _loadEngine) && _classPrivateFieldGet(_this4, _loadEngine).stop();
        }, this, true);
      }
    }]);
    return PacketLossUnderLoadEngine2;
  }(PacketLossEngine$1);
  var PacketLossEngine = PacketLossUnderLoadEngine;
  var _excluded$1 = ["reachable"];
  var ReachabilityEngine = /* @__PURE__ */ _createClass(function ReachabilityEngine2(targetUrl) {
    var _this = this;
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$timeout = _ref.timeout, timeout = _ref$timeout === void 0 ? -1 : _ref$timeout, _ref$fetchOptions = _ref.fetchOptions, fetchOptions = _ref$fetchOptions === void 0 ? {} : _ref$fetchOptions;
    _classCallCheck(this, ReachabilityEngine2);
    _defineProperty(this, "onFinished", function() {
    });
    var finished = false;
    var finish = function finish2(_ref2) {
      var reachable = _ref2.reachable, rest = _objectWithoutProperties(_ref2, _excluded$1);
      if (finished)
        return;
      finished = true;
      _this.onFinished(_objectSpread2({
        targetUrl,
        reachable
      }, rest));
    };
    fetch(targetUrl, fetchOptions).then(function(response) {
      finish({
        reachable: true,
        response
      });
    })["catch"](function(error) {
      finish({
        reachable: false,
        error
      });
    });
    timeout > 0 && setTimeout(function() {
      return finish({
        reachable: false,
        error: "Request timeout"
      });
    }, timeout);
  });
  var sum = function sum2(vals) {
    return vals.reduce(function(agg, val) {
      return agg + val;
    }, 0);
  };
  var percentile = function percentile2(vals) {
    var perc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.5;
    if (!vals.length)
      return 0;
    var sortedVals = vals.slice().sort(function(a, b) {
      return a - b;
    });
    var idx = (vals.length - 1) * perc;
    var rem = idx % 1;
    if (rem === 0)
      return sortedVals[Math.round(idx)];
    var edges = [Math.floor, Math.ceil].map(function(rndFn) {
      return sortedVals[rndFn(idx)];
    });
    return edges[0] + (edges[1] - edges[0]) * rem;
  };
  var _config$3 = /* @__PURE__ */ new WeakMap();
  var _extractLoadedLatencies = /* @__PURE__ */ new WeakMap();
  var MeasurementCalculations = /* @__PURE__ */ function() {
    function MeasurementCalculations2(config) {
      var _this = this;
      _classCallCheck(this, MeasurementCalculations2);
      _defineProperty(this, "getLatencyPoints", function(latencyResults) {
        return latencyResults.timings.map(function(d) {
          return d.ping;
        });
      });
      _defineProperty(this, "getLatency", function(latencyResults) {
        return percentile(_this.getLatencyPoints(latencyResults), _classPrivateFieldGet(_this, _config$3).latencyPercentile);
      });
      _defineProperty(this, "getBandwidthPoints", function(bandwidthResults) {
        return Object.entries(bandwidthResults).map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), bytes = _ref2[0], timings = _ref2[1].timings;
          return timings.map(function(_ref3) {
            var bps = _ref3.bps, duration = _ref3.duration, ping = _ref3.ping, measTime = _ref3.measTime, serverTime = _ref3.serverTime, transferSize = _ref3.transferSize;
            return {
              bytes: +bytes,
              bps,
              duration,
              ping,
              measTime,
              serverTime,
              transferSize
            };
          });
        }).flat();
      });
      _defineProperty(this, "getBandwidth", function(bandwidthResults) {
        return percentile(_this.getBandwidthPoints(bandwidthResults).filter(function(d) {
          return d.duration >= _classPrivateFieldGet(_this, _config$3).bandwidthMinRequestDuration;
        }).map(function(d) {
          return d.bps;
        }).filter(function(bps) {
          return bps;
        }), _classPrivateFieldGet(_this, _config$3).bandwidthPercentile);
      });
      _defineProperty(this, "getLoadedLatency", function(loadedResults) {
        return _this.getLatency({
          timings: _classPrivateFieldGet(_this, _extractLoadedLatencies).call(_this, loadedResults)
        });
      });
      _defineProperty(this, "getLoadedJitter", function(loadedResults) {
        return _this.getJitter({
          timings: _classPrivateFieldGet(_this, _extractLoadedLatencies).call(_this, loadedResults)
        });
      });
      _defineProperty(this, "getLoadedLatencyPoints", function(loadedResults) {
        return _this.getLatencyPoints({
          timings: _classPrivateFieldGet(_this, _extractLoadedLatencies).call(_this, loadedResults)
        });
      });
      _defineProperty(this, "getPacketLoss", function(plResults) {
        return plResults.packetLoss;
      });
      _defineProperty(this, "getPacketLossDetails", function(plResults) {
        return plResults;
      });
      _defineProperty(this, "getReachability", function(reachabilityResults) {
        return !!reachabilityResults.reachable;
      });
      _defineProperty(this, "getReachabilityDetails", function(d) {
        return {
          host: d.host,
          reachable: d.reachable
        };
      });
      _classPrivateFieldInitSpec(this, _config$3, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _extractLoadedLatencies, {
        writable: true,
        value: function value(loadedResults) {
          return Object.values(loadedResults).filter(
            // keep only file sizes that saturated the connection
            function(d) {
              return d.timings.length && Math.min.apply(Math, _toConsumableArray(d.timings.map(function(d2) {
                return d2.duration;
              }))) >= _classPrivateFieldGet(_this, _config$3).loadedRequestMinDuration;
            }
          ).map(function(d) {
            return d.sideLatency || [];
          }).flat().slice(-_classPrivateFieldGet(_this, _config$3).loadedLatencyMaxPoints);
        }
      });
      _classPrivateFieldSet(this, _config$3, config);
    }
    _createClass(MeasurementCalculations2, [{
      key: "getJitter",
      value: function getJitter(latencyResults) {
        var pings = this.getLatencyPoints(latencyResults);
        return pings.length < 2 ? null : pings.reduce(function(_ref4, latency) {
          var _ref4$sumDeltas = _ref4.sumDeltas, sumDeltas = _ref4$sumDeltas === void 0 ? 0 : _ref4$sumDeltas, prevLatency = _ref4.prevLatency;
          return {
            sumDeltas: sumDeltas + (prevLatency !== void 0 ? Math.abs(prevLatency - latency) : 0),
            prevLatency: latency
          };
        }, {}).sumDeltas / (pings.length - 1);
      }
      // last measurements are most accurate
    }]);
    return MeasurementCalculations2;
  }();
  var MeasurementCalculations$1 = MeasurementCalculations;
  var classificationNames = ["bad", "poor", "average", "good", "great"];
  var customResultTypes = {
    loadedLatencyIncrease: function loadedLatencyIncrease(measurements) {
      return measurements.latency && (measurements.downLoadedLatency || measurements.upLoadedLatency) ? Math.max(measurements.downLoadedLatency, measurements.upLoadedLatency) - measurements.latency : void 0;
    }
  };
  var defaultPoints = {
    packetLoss: 0
  };
  var _config$2 = /* @__PURE__ */ new WeakMap();
  var ScoresCalculations = /* @__PURE__ */ function() {
    function ScoresCalculations2(config) {
      _classCallCheck(this, ScoresCalculations2);
      _classPrivateFieldInitSpec(this, _config$2, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldSet(this, _config$2, config);
    }
    _createClass(ScoresCalculations2, [{
      key: "getScores",
      value: function getScores(measurements) {
        var scores = Object.assign.apply(Object, _toConsumableArray(Object.entries(_classPrivateFieldGet(this, _config$2).aimMeasurementScoring).map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), type = _ref2[0], fn = _ref2[1];
          var val = customResultTypes.hasOwnProperty(type) ? customResultTypes[type](measurements) : measurements[type];
          return val === void 0 ? defaultPoints.hasOwnProperty(type) ? _defineProperty({}, type, defaultPoints[type]) : {} : _defineProperty({}, type, val === void 0 ? 0 : +fn(val));
        })));
        return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.entries(_classPrivateFieldGet(this, _config$2).aimExperiencesDefs).filter(function(_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2), input = _ref6[1].input;
          return input.every(function(k) {
            return scores.hasOwnProperty(k);
          });
        }).map(function(_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2), k = _ref8[0], _ref8$ = _ref8[1], input = _ref8$.input, pointThresholds = _ref8$.pointThresholds;
          var sumPoints = Math.max(0, sum(input.map(function(k2) {
            return scores[k2];
          })));
          var classificationIdx = threshold(pointThresholds, [0, 1, 2, 3, 4])(sumPoints);
          var classificationName = classificationNames[classificationIdx];
          return _defineProperty({}, k, {
            points: sumPoints,
            classificationIdx,
            classificationName
          });
        }))));
      }
    }]);
    return ScoresCalculations2;
  }();
  var ScoresCalculations$1 = ScoresCalculations;
  var _config$1 = /* @__PURE__ */ new WeakMap();
  var _measCalc = /* @__PURE__ */ new WeakMap();
  var _scoresCalc = /* @__PURE__ */ new WeakMap();
  var _calcGetter = /* @__PURE__ */ new WeakMap();
  var _getV4Reachability = /* @__PURE__ */ new WeakMap();
  var _getV4ReachabilityDetails = /* @__PURE__ */ new WeakMap();
  var _getV6Reachability = /* @__PURE__ */ new WeakMap();
  var _getV6ReachabilityDetails = /* @__PURE__ */ new WeakMap();
  var Results = /* @__PURE__ */ function() {
    function Results2(config) {
      var _this = this;
      _classCallCheck(this, Results2);
      _defineProperty(this, "raw", void 0);
      _defineProperty(this, "getUnloadedLatency", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getLatency", "latency");
      });
      _defineProperty(this, "getUnloadedJitter", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getJitter", "latency");
      });
      _defineProperty(this, "getUnloadedLatencyPoints", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getLatencyPoints", "latency", []);
      });
      _defineProperty(this, "getDownLoadedLatency", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getLoadedLatency", "download");
      });
      _defineProperty(this, "getDownLoadedJitter", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getLoadedJitter", "download");
      });
      _defineProperty(this, "getDownLoadedLatencyPoints", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getLoadedLatencyPoints", "download", []);
      });
      _defineProperty(this, "getUpLoadedLatency", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getLoadedLatency", "upload");
      });
      _defineProperty(this, "getUpLoadedJitter", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getLoadedJitter", "upload");
      });
      _defineProperty(this, "getUpLoadedLatencyPoints", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getLoadedLatencyPoints", "upload", []);
      });
      _defineProperty(this, "getDownloadBandwidth", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getBandwidth", "download");
      });
      _defineProperty(this, "getDownloadBandwidthPoints", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getBandwidthPoints", "download", []);
      });
      _defineProperty(this, "getUploadBandwidth", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getBandwidth", "upload");
      });
      _defineProperty(this, "getUploadBandwidthPoints", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getBandwidthPoints", "upload", []);
      });
      _defineProperty(this, "getPacketLoss", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getPacketLoss", "packetLoss");
      });
      _defineProperty(this, "getPacketLossDetails", function() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getPacketLossDetails", "packetLoss", void 0, true);
      });
      _defineProperty(this, "getScores", function() {
        return _classPrivateFieldGet(_this, _scoresCalc).getScores(_this.getSummary());
      });
      _classPrivateFieldInitSpec(this, _config$1, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _measCalc, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _scoresCalc, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _calcGetter, {
        writable: true,
        value: function value(calcFn, resKey) {
          var defaultVal = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
          var surfaceError = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
          return !_this.raw.hasOwnProperty(resKey) || !_this.raw[resKey].started ? defaultVal : surfaceError && _this.raw[resKey].error ? {
            error: _this.raw[resKey].error
          } : _classPrivateFieldGet(_this, _measCalc)[calcFn](_this.raw[resKey].results);
        }
      });
      _classPrivateFieldInitSpec(this, _getV4Reachability, {
        writable: true,
        value: function value() {
          return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getReachability", "v4Reachability");
        }
      });
      _classPrivateFieldInitSpec(this, _getV4ReachabilityDetails, {
        writable: true,
        value: function value() {
          return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getReachabilityDetails", "v4Reachability");
        }
      });
      _classPrivateFieldInitSpec(this, _getV6Reachability, {
        writable: true,
        value: function value() {
          return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getReachability", "v6Reachability");
        }
      });
      _classPrivateFieldInitSpec(this, _getV6ReachabilityDetails, {
        writable: true,
        value: function value() {
          return _classPrivateFieldGet(_this, _calcGetter).call(_this, "getReachabilityDetails", "v6Reachability");
        }
      });
      _classPrivateFieldSet(this, _config$1, config);
      this.clear();
      _classPrivateFieldSet(this, _measCalc, new MeasurementCalculations$1(_classPrivateFieldGet(this, _config$1)));
      _classPrivateFieldSet(this, _scoresCalc, new ScoresCalculations$1(_classPrivateFieldGet(this, _config$1)));
    }
    _createClass(Results2, [{
      key: "isFinished",
      get: function get() {
        return Object.values(this.raw).every(function(d) {
          return d.finished;
        });
      }
      // Public methods
    }, {
      key: "clear",
      value: function clear() {
        this.raw = Object.assign.apply(Object, [{}].concat(_toConsumableArray(_toConsumableArray(new Set(_classPrivateFieldGet(this, _config$1).measurements.map(function(m) {
          return m.type;
        }))).map(function(m) {
          return _defineProperty({}, m, {
            started: false,
            finished: false,
            results: {}
          });
        }))));
      }
    }, {
      key: "getSummary",
      value: function getSummary() {
        var items = {
          download: this.getDownloadBandwidth,
          upload: this.getUploadBandwidth,
          latency: this.getUnloadedLatency,
          jitter: this.getUnloadedJitter,
          downLoadedLatency: this.getDownLoadedLatency,
          downLoadedJitter: this.getDownLoadedJitter,
          upLoadedLatency: this.getUpLoadedLatency,
          upLoadedJitter: this.getUpLoadedJitter,
          packetLoss: this.getPacketLoss,
          v4Reachability: _classPrivateFieldGet(this, _getV4Reachability),
          v6Reachability: _classPrivateFieldGet(this, _getV6Reachability)
        };
        return Object.assign.apply(Object, _toConsumableArray(Object.entries(items).map(function(_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2), key = _ref3[0], fn = _ref3[1];
          var val = fn();
          return val === void 0 ? {} : _defineProperty({}, key, val);
        })));
      }
    }]);
    return Results2;
  }();
  var Results$1 = Results;
  var round = function round2(num) {
    var decimals = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return !num ? num : Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
  };
  var latencyPointsParser = function latencyPointsParser2(durations) {
    return durations.map(function(d) {
      return round(d, 2);
    });
  };
  var bpsPointsParser = function bpsPointsParser2(pnts) {
    return pnts.map(function(d) {
      return {
        bytes: +d.bytes,
        bps: round(d.bps)
      };
    });
  };
  var packetLossParser = function packetLossParser2(d) {
    return d.error ? void 0 : {
      numMessages: d.numMessagesSent,
      lossRatio: round(d.packetLoss, 4)
    };
  };
  var resultsParsers = {
    latencyMs: ["getUnloadedLatencyPoints", latencyPointsParser],
    download: ["getDownloadBandwidthPoints", bpsPointsParser],
    upload: ["getUploadBandwidthPoints", bpsPointsParser],
    downLoadedLatencyMs: ["getDownLoadedLatencyPoints", latencyPointsParser],
    upLoadedLatencyMs: ["getUpLoadedLatencyPoints", latencyPointsParser],
    packetLoss: ["getPacketLossDetails", packetLossParser]
    // v4Reachability: ['getV4ReachabilityDetails'],
    // v6Reachability: ['getV6ReachabilityDetails']
  };
  var scoreParser = function scoreParser2(d) {
    return {
      points: d.points,
      classification: d.classificationName
    };
  };
  var logAimResults = function logAimResults2(results, _ref) {
    var apiUrl = _ref.apiUrl;
    var logData = {};
    Object.entries(resultsParsers).forEach(function(_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2), logK = _ref3[0], _ref3$ = _slicedToArray(_ref3[1], 2), fn = _ref3$[0], _ref3$$ = _ref3$[1], parser = _ref3$$ === void 0 ? function(d) {
        return d;
      } : _ref3$$;
      var val = results[fn]();
      val && (logData[logK] = parser(val));
    });
    var scores = results.getScores();
    scores && (logData.scores = Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.entries(scores).map(function(_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2), k = _ref5[0], score = _ref5[1];
      return _defineProperty({}, k, scoreParser(score));
    })))));
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(logData)
    });
  };
  var logFinalResults = logAimResults;
  var _excluded = ["type"];
  var _excluded2 = ["numPackets"];
  var _excluded3 = ["bytes"];
  var DEFAULT_OPTIMAL_DOWNLOAD_SIZE = 1e6;
  var DEFAULT_OPTIMAL_UPLOAD_SIZE = 1e6;
  var OPTIMAL_SIZE_RATIO = 0.5;
  var pausableTypes = ["latency", "latencyUnderLoad", "download", "upload"];
  var genMeasId = function genMeasId2() {
    return "".concat(Math.round(Math.random() * 1e16));
  };
  var _onFinish = /* @__PURE__ */ new WeakMap();
  var _onError = /* @__PURE__ */ new WeakMap();
  var _config2 = /* @__PURE__ */ new WeakMap();
  var _results = /* @__PURE__ */ new WeakMap();
  var _measurementId = /* @__PURE__ */ new WeakMap();
  var _curMsmIdx = /* @__PURE__ */ new WeakMap();
  var _curEngine = /* @__PURE__ */ new WeakMap();
  var _optimalDownloadChunkSize = /* @__PURE__ */ new WeakMap();
  var _optimalUploadChunkSize = /* @__PURE__ */ new WeakMap();
  var _running = /* @__PURE__ */ new WeakMap();
  var _finished = /* @__PURE__ */ new WeakMap();
  var _setRunning = /* @__PURE__ */ new WeakSet();
  var _setFinished = /* @__PURE__ */ new WeakSet();
  var _curType = /* @__PURE__ */ new WeakSet();
  var _curTypeResults = /* @__PURE__ */ new WeakSet();
  var _clear = /* @__PURE__ */ new WeakSet();
  var _destroyCurEngine = /* @__PURE__ */ new WeakSet();
  var _next = /* @__PURE__ */ new WeakSet();
  var MeasurementEngine = /* @__PURE__ */ function() {
    function MeasurementEngine2() {
      var userConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, MeasurementEngine2);
      _classPrivateMethodInitSpec(this, _next);
      _classPrivateMethodInitSpec(this, _destroyCurEngine);
      _classPrivateMethodInitSpec(this, _clear);
      _classPrivateMethodInitSpec(this, _curTypeResults);
      _classPrivateMethodInitSpec(this, _curType);
      _classPrivateMethodInitSpec(this, _setFinished);
      _classPrivateMethodInitSpec(this, _setRunning);
      _defineProperty(this, "onRunningChange", function() {
      });
      _defineProperty(this, "onResultsChange", function() {
      });
      _classPrivateFieldInitSpec(this, _onFinish, {
        writable: true,
        value: function value() {
        }
      });
      _classPrivateFieldInitSpec(this, _onError, {
        writable: true,
        value: function value() {
        }
      });
      _classPrivateFieldInitSpec(this, _config2, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _results, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _measurementId, {
        writable: true,
        value: genMeasId()
      });
      _classPrivateFieldInitSpec(this, _curMsmIdx, {
        writable: true,
        value: -1
      });
      _classPrivateFieldInitSpec(this, _curEngine, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _optimalDownloadChunkSize, {
        writable: true,
        value: DEFAULT_OPTIMAL_DOWNLOAD_SIZE
      });
      _classPrivateFieldInitSpec(this, _optimalUploadChunkSize, {
        writable: true,
        value: DEFAULT_OPTIMAL_UPLOAD_SIZE
      });
      _classPrivateFieldInitSpec(this, _running, {
        writable: true,
        value: false
      });
      _classPrivateFieldInitSpec(this, _finished, {
        writable: true,
        value: false
      });
      _classPrivateFieldSet(this, _config2, Object.assign({}, defaultConfig5, userConfig, internalConfig));
      _classPrivateFieldSet(this, _results, new Results$1(_classPrivateFieldGet(this, _config2)));
      _classPrivateFieldGet(this, _config2).autoStart && this.play();
    }
    _createClass(MeasurementEngine2, [{
      key: "results",
      get: function get() {
        return _classPrivateFieldGet(this, _results);
      }
    }, {
      key: "isRunning",
      get: function get() {
        return _classPrivateFieldGet(this, _running);
      }
    }, {
      key: "isFinished",
      get: function get() {
        return _classPrivateFieldGet(this, _finished);
      }
    }, {
      key: "onFinish",
      set: (
        // callback invoked when all the measurements are finished
        function set2(f) {
          _classPrivateFieldSet(this, _onFinish, f);
        }
      )
    }, {
      key: "onError",
      set: (
        // callback invoked if an error occurs during measurement
        function set2(f) {
          _classPrivateFieldSet(this, _onError, f);
        }
      )
      // Public methods
    }, {
      key: "pause",
      value: function pause() {
        pausableTypes.includes(_classPrivateMethodGet(this, _curType, _curType2).call(this)) && _classPrivateFieldGet(this, _curEngine).pause();
        _classPrivateMethodGet(this, _setRunning, _setRunning2).call(this, false);
      }
    }, {
      key: "play",
      value: function play() {
        if (!_classPrivateFieldGet(this, _running)) {
          _classPrivateMethodGet(this, _setRunning, _setRunning2).call(this, true);
          _classPrivateMethodGet(this, _next, _next2).call(this);
        }
      }
    }, {
      key: "restart",
      value: function restart() {
        _classPrivateMethodGet(this, _clear, _clear2).call(this);
        this.play();
      }
    }]);
    return MeasurementEngine2;
  }();
  function _setRunning2(running) {
    if (running !== _classPrivateFieldGet(this, _running)) {
      _classPrivateFieldSet(this, _running, running);
      this.onRunningChange(_classPrivateFieldGet(this, _running));
    }
  }
  function _setFinished2(finished) {
    var _this3 = this;
    if (finished !== _classPrivateFieldGet(this, _finished)) {
      _classPrivateFieldSet(this, _finished, finished);
      finished && setTimeout(function() {
        return _classPrivateFieldGet(_this3, _onFinish).call(_this3, _this3.results);
      });
    }
  }
  function _curType2() {
    return _classPrivateFieldGet(this, _curMsmIdx) < 0 || _classPrivateFieldGet(this, _curMsmIdx) >= _classPrivateFieldGet(this, _config2).measurements.length ? null : _classPrivateFieldGet(this, _config2).measurements[_classPrivateFieldGet(this, _curMsmIdx)].type;
  }
  function _curTypeResults2() {
    return _classPrivateFieldGet(this, _results).raw[_classPrivateMethodGet(this, _curType, _curType2).call(this)] || void 0;
  }
  function _clear2() {
    _classPrivateMethodGet(this, _destroyCurEngine, _destroyCurEngine2).call(this);
    _classPrivateFieldSet(this, _measurementId, genMeasId());
    _classPrivateFieldSet(this, _curMsmIdx, -1);
    _classPrivateFieldSet(this, _curEngine, void 0);
    _classPrivateMethodGet(this, _setRunning, _setRunning2).call(this, false);
    _classPrivateMethodGet(this, _setFinished, _setFinished2).call(this, false);
    _classPrivateFieldGet(this, _results).clear();
  }
  function _destroyCurEngine2() {
    var engine = _classPrivateFieldGet(this, _curEngine);
    if (!engine)
      return;
    engine.onFinished = engine.onConnectionError = engine.onFail = engine.onMsgReceived = engine.onCredentialsFailure = engine.onMeasurementResult = function() {
    };
    pausableTypes.includes(_classPrivateMethodGet(this, _curType, _curType2).call(this)) && engine.pause();
  }
  function _next2() {
    var _this4 = this;
    var _this$curMsmIdx;
    if (pausableTypes.includes(_classPrivateMethodGet(this, _curType, _curType2).call(this)) && _classPrivateMethodGet(this, _curTypeResults, _curTypeResults2).call(this) && _classPrivateMethodGet(this, _curTypeResults, _curTypeResults2).call(this).started && !_classPrivateMethodGet(this, _curTypeResults, _curTypeResults2).call(this).finished && !_classPrivateMethodGet(this, _curTypeResults, _curTypeResults2).call(this).finishedCurrentRound && !_classPrivateMethodGet(this, _curTypeResults, _curTypeResults2).call(this).error) {
      _classPrivateFieldGet(this, _curEngine).play();
      return;
    }
    _classPrivateFieldSet(this, _curMsmIdx, (_this$curMsmIdx = _classPrivateFieldGet(this, _curMsmIdx), _this$curMsmIdx++, _this$curMsmIdx));
    if (_classPrivateFieldGet(this, _curMsmIdx) >= _classPrivateFieldGet(this, _config2).measurements.length) {
      _classPrivateMethodGet(this, _setRunning, _setRunning2).call(this, false);
      _classPrivateMethodGet(this, _setFinished, _setFinished2).call(this, true);
      return;
    }
    var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _config2).measurements[_classPrivateFieldGet(this, _curMsmIdx)], type = _classPrivateFieldGet2.type, msmConfig = _objectWithoutProperties(_classPrivateFieldGet2, _excluded);
    var msmResults = _classPrivateMethodGet(this, _curTypeResults, _curTypeResults2).call(this);
    var _classPrivateFieldGet3 = _classPrivateFieldGet(this, _config2), downloadApiUrl = _classPrivateFieldGet3.downloadApiUrl, uploadApiUrl = _classPrivateFieldGet3.uploadApiUrl, estimatedServerTime = _classPrivateFieldGet3.estimatedServerTime;
    var engine;
    switch (type) {
      case "v4Reachability":
      case "v6Reachability":
        engine = new ReachabilityEngine("https://".concat(msmConfig.host), {
          fetchOptions: {
            method: "GET",
            mode: "no-cors"
          }
        });
        engine.onFinished = function(result) {
          msmResults.finished = true;
          msmResults.results = _objectSpread2({
            host: msmConfig.host
          }, result);
          _this4.onResultsChange({
            type
          });
          _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
        };
        break;
      case "rpki":
        engine = new ReachabilityEngine("https://".concat(_classPrivateFieldGet(this, _config2).rpkiInvalidHost), {
          timeout: 5e3
        });
        engine.onFinished = function(result) {
          (result.response ? result.response.json() : Promise.resolve()).then(function(response) {
            msmResults.finished = true;
            msmResults.results = _objectSpread2({
              host: _classPrivateFieldGet(_this4, _config2).rpkiInvalidHost,
              filteringInvalids: !result.reachable
            }, response ? {
              asn: response.asn,
              name: response.name
            } : {});
            _this4.onResultsChange({
              type
            });
            _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
          });
        };
        break;
      case "nxdomain":
        engine = new ReachabilityEngine("https://".concat(msmConfig.nxhost), {
          fetchOptions: {
            mode: "no-cors"
          }
        });
        engine.onFinished = function(result) {
          msmResults.finished = true;
          msmResults.results = {
            host: msmConfig.nxhost,
            reachable: result.reachable
          };
          _this4.onResultsChange({
            type
          });
          _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
        };
        break;
      case "packetLoss":
      case "packetLossUnderLoad":
        {
          msmResults.finished = false;
          var numMsgs = msmConfig.numPackets, ptCfg = _objectWithoutProperties(msmConfig, _excluded2);
          var _classPrivateFieldGet4 = _classPrivateFieldGet(this, _config2), turnServerUri = _classPrivateFieldGet4.turnServerUri, turnServerCredsApi = _classPrivateFieldGet4.turnServerCredsApiUrl, turnServerUser = _classPrivateFieldGet4.turnServerUser, turnServerPass = _classPrivateFieldGet4.turnServerPass, includeCredentials = _classPrivateFieldGet4.includeCredentials;
          engine = new PacketLossEngine(_objectSpread2({
            turnServerUri,
            turnServerCredsApi,
            turnServerCredsApiIncludeCredentials: includeCredentials,
            turnServerUser,
            turnServerPass,
            numMsgs,
            // if under load
            downloadChunkSize: msmConfig.loadDown ? _classPrivateFieldGet(this, _optimalDownloadChunkSize) : void 0,
            uploadChunkSize: msmConfig.loadUp ? _classPrivateFieldGet(this, _optimalUploadChunkSize) : void 0,
            downloadApiUrl,
            uploadApiUrl
          }, ptCfg));
        }
        engine.onMsgReceived = function() {
          msmResults.results = Object.assign({}, engine.results);
          _this4.onResultsChange({
            type
          });
        };
        engine.onFinished = function() {
          msmResults.finished = true;
          _this4.onResultsChange({
            type
          });
          _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
        };
        engine.onConnectionError = function(e) {
          msmResults.error = e;
          _this4.onResultsChange({
            type
          });
          _classPrivateFieldGet(_this4, _onError).call(_this4, "Connection error while measuring packet loss: ".concat(e));
          _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
        };
        engine.onCredentialsFailure = function() {
          msmResults.error = "unable to get turn server credentials";
          _this4.onResultsChange({
            type
          });
          _classPrivateFieldGet(_this4, _onError).call(_this4, "Error while measuring packet loss: unable to get turn server credentials.");
          _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
        };
        break;
      case "latency":
      case "latencyUnderLoad":
        msmResults.finished = false;
        engine = new BandwidthEngine([{
          dir: "down",
          bytes: 0,
          count: msmConfig.numPackets,
          bypassMinDuration: true
        }], {
          downloadApiUrl,
          uploadApiUrl,
          estimatedServerTime,
          logApiUrl: _classPrivateFieldGet(this, _config2).logMeasurementApiUrl,
          measurementId: _classPrivateFieldGet(this, _measurementId),
          // if under load
          downloadChunkSize: msmConfig.loadDown ? _classPrivateFieldGet(this, _optimalDownloadChunkSize) : void 0,
          uploadChunkSize: msmConfig.loadUp ? _classPrivateFieldGet(this, _optimalUploadChunkSize) : void 0
        });
        engine.fetchOptions = {
          credentials: _classPrivateFieldGet(this, _config2).includeCredentials ? "include" : void 0
        };
        engine.onMeasurementResult = engine.onNewMeasurementStarted = function(meas, results) {
          msmResults.results = Object.assign({}, results.down[0]);
          _this4.onResultsChange({
            type
          });
        };
        engine.onFinished = function() {
          msmResults.finished = true;
          _this4.onResultsChange({
            type
          });
          _classPrivateFieldGet(_this4, _running) && _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
        };
        engine.onConnectionError = function(e) {
          msmResults.error = e;
          _this4.onResultsChange({
            type
          });
          _classPrivateFieldGet(_this4, _onError).call(_this4, "Connection error while measuring latency: ".concat(e));
          _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
        };
        engine.play();
        break;
      case "download":
      case "upload":
        if (msmResults.finished || msmResults.error) {
          _classPrivateMethodGet(this, _next, _next2).call(this);
        } else {
          delete msmResults.finishedCurrentRound;
          var measureParallelLatency = _classPrivateFieldGet(this, _config2)["measure".concat(type === "download" ? "Down" : "Up", "loadLoadedLatency")];
          engine = new BandwidthEngine([_objectSpread2({
            dir: type === "download" ? "down" : "up"
          }, msmConfig)], {
            downloadApiUrl,
            uploadApiUrl,
            estimatedServerTime,
            logApiUrl: _classPrivateFieldGet(this, _config2).logMeasurementApiUrl,
            measurementId: _classPrivateFieldGet(this, _measurementId),
            measureParallelLatency,
            parallelLatencyThrottleMs: _classPrivateFieldGet(this, _config2).loadedLatencyThrottle
          });
          engine.fetchOptions = {
            credentials: _classPrivateFieldGet(this, _config2).includeCredentials ? "include" : void 0
          };
          engine.finishRequestDuration = _classPrivateFieldGet(this, _config2).bandwidthFinishRequestDuration;
          engine.onNewMeasurementStarted = function(_ref) {
            var count = _ref.count, bytes = _ref.bytes;
            var res = msmResults.results = Object.assign({}, msmResults.results);
            !res.hasOwnProperty(bytes) && (res[bytes] = {
              timings: [],
              numMeasurements: 0,
              sideLatency: measureParallelLatency ? [] : void 0
            });
            if (res[bytes].numMeasurements - res[bytes].timings.length !== count) {
              res[bytes].numMeasurements += count;
              _this4.onResultsChange({
                type
              });
            }
          };
          engine.onMeasurementResult = function(_ref2) {
            var bytes = _ref2.bytes, timing = _objectWithoutProperties(_ref2, _excluded3);
            msmResults.results[bytes].timings.push(timing);
            msmResults.results = Object.assign({}, msmResults.results);
            _this4.onResultsChange({
              type
            });
          };
          engine.onParallelLatencyResult = function(res) {
            msmResults.results[msmConfig.bytes].sideLatency.push(res);
            msmResults.results = Object.assign({}, msmResults.results);
            _this4.onResultsChange({
              type
            });
          };
          engine.onFinished = function(results) {
            var isLastMsmOfType = !_classPrivateFieldGet(_this4, _config2).measurements.slice(_classPrivateFieldGet(_this4, _curMsmIdx) + 1).map(function(d) {
              return d.type;
            }).includes(type);
            var minDuration = Math.min.apply(Math, _toConsumableArray(Object.values(type === "download" ? results.down : results.up).slice(-1)[0].timings.map(function(d) {
              return d.duration;
            })));
            var reachedEndOfMsmType = isLastMsmOfType || !msmConfig.bypassMinDuration && minDuration > _classPrivateFieldGet(_this4, _config2).bandwidthFinishRequestDuration;
            if (!reachedEndOfMsmType) {
              msmResults.finishedCurrentRound = true;
            } else {
              msmResults.finished = true;
              _this4.onResultsChange({
                type
              });
              var largestSize = Object.keys(msmResults.results).map(function(n) {
                return +n;
              }).sort(function(a, b) {
                return b - a;
              })[0];
              var optimalSize = largestSize * OPTIMAL_SIZE_RATIO;
              type === "download" && _classPrivateFieldSet(_this4, _optimalDownloadChunkSize, optimalSize);
              type === "upload" && _classPrivateFieldSet(_this4, _optimalUploadChunkSize, optimalSize);
            }
            _classPrivateFieldGet(_this4, _running) && _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
          };
          engine.onConnectionError = function(e) {
            msmResults.error = e;
            _this4.onResultsChange({
              type
            });
            _classPrivateFieldGet(_this4, _onError).call(_this4, "Connection error while measuring ".concat(type, ": ").concat(e));
            _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
          };
          engine.play();
        }
        break;
    }
    _classPrivateFieldSet(this, _curEngine, engine);
    msmResults.started = true;
    this.onResultsChange({
      type
    });
  }
  var _logAimApiUrl = /* @__PURE__ */ new WeakMap();
  var _logFinalResults = /* @__PURE__ */ new WeakMap();
  var LoggingMeasurementEngine = /* @__PURE__ */ function(_MeasurementEngine) {
    _inherits(LoggingMeasurementEngine2, _MeasurementEngine);
    var _super = _createSuper(LoggingMeasurementEngine2);
    function LoggingMeasurementEngine2(userConfig) {
      var _thisSuper, _this;
      _classCallCheck(this, LoggingMeasurementEngine2);
      for (var _len = arguments.length, pt = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        pt[_key - 1] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this, userConfig].concat(pt));
      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _logAimApiUrl, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _logFinalResults, {
        writable: true,
        value: function value(results) {
          _classPrivateFieldGet(_assertThisInitialized(_this), _logAimApiUrl) && logFinalResults(results, {
            apiUrl: _classPrivateFieldGet(_assertThisInitialized(_this), _logAimApiUrl)
          });
        }
      });
      _set((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(LoggingMeasurementEngine2.prototype)), "onFinish", _classPrivateFieldGet(_assertThisInitialized(_this), _logFinalResults), _thisSuper, true);
      _classPrivateFieldSet(_assertThisInitialized(_this), _logAimApiUrl, Object.assign({}, defaultConfig5, userConfig, internalConfig).logAimApiUrl);
      return _this;
    }
    _createClass(LoggingMeasurementEngine2, [{
      key: "onFinish",
      set: function set2(onFinish) {
        var _this2 = this;
        _set(_getPrototypeOf(LoggingMeasurementEngine2.prototype), "onFinish", function(results) {
          onFinish(results);
          _classPrivateFieldGet(_this2, _logFinalResults).call(_this2, results);
        }, this, true);
      }
    }]);
    return LoggingMeasurementEngine2;
  }(MeasurementEngine);

  // src/model.ts
  var watch = () => {
    DefaultAmplify.configure({
      Auth: {
        Cognito: {
          identityPoolId: "ap-northeast-1:605a806e-fdd2-4d00-8642-c2a56ee4be04",
          allowGuestAccess: true
        }
      },
      Analytics: {
        Pinpoint: {
          appId: "385fc31f3b664f0781597df42778da34",
          region: "ap-northeast-1"
        }
      }
    });
    chrome.alarms.create("speedTest", { periodInMinutes: 3 });
    chrome.alarms.onAlarm.addListener((alarm) => {
      if (alarm.name === "speedTest") {
        doSpeedTest();
      }
    });
    const doSpeedTest = async () => {
      const settings = await fetch("https://tan-t.github.io/universal-speed-insight/setting.json").then((x) => x.json());
      new LoggingMeasurementEngine(settings.CloudflareSpeed ?? void 0).onFinish = (result) => {
        chrome.storage.local.get("userId", (storage) => {
          const connection = navigator.connection;
          record2({
            name: "speedTestV2",
            attributes: {
              userId: storage.userId,
              networkType: connection?.type ?? "unknown"
            },
            metrics: {
              packetLoss: result.getSummary().packetLoss ?? 0,
              downloadBps: result.getSummary().download ?? 0,
              downloadLatency: result.getSummary().downLoadedLatency ?? 0,
              downloadJitter: result.getSummary().downLoadedJitter ?? 0,
              uploadBps: result.getSummary().upload ?? 0,
              uploadLatency: result.getSummary().upLoadedLatency ?? 0,
              uploadJitter: result.getSummary().upLoadedJitter ?? 0
            }
          });
        });
      };
    };
    doSpeedTest();
  };

  // src/index.ts
  watch();
})();
/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)
*/
