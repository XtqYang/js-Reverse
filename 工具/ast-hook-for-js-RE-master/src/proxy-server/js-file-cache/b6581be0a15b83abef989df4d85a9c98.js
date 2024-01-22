/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
(function (window, undefined) {
  // Can't do this because several apps including ASP.NET trace
  // the stack via arguments.caller.callee and Firefox dies if
  // you try to trace through "use strict" call chains. (#13335)
  // Support: Firefox 18+
  //"use strict";
  var // The deferred used on DOM ready
  readyList,
      // A central reference to the root jQuery(document)
  rootjQuery,
      // Support: IE<9
  // For `typeof node.method` instead of `node.method !== undefined`
  core_strundefined = cc11001100_hook("core_strundefined", typeof undefined, "var-init"),
      // Use the correct document accordingly with window argument (sandbox)
  document = cc11001100_hook("document", window.document, "var-init"),
      location = cc11001100_hook("location", window.location, "var-init"),
      // Map over jQuery in case of overwrite
  _jQuery = cc11001100_hook("_jQuery", window.jQuery, "var-init"),
      // Map over the $ in case of overwrite
  _$ = cc11001100_hook("_$", window.$, "var-init"),
      // [[Class]] -> type pairs
  class2type = cc11001100_hook("class2type", {}, "var-init"),
      // List of deleted data cache ids, so we can reuse them
  core_deletedIds = cc11001100_hook("core_deletedIds", [], "var-init"),
      core_version = cc11001100_hook("core_version", "1.9.1", "var-init"),
      // Save a reference to some core methods
  core_concat = cc11001100_hook("core_concat", core_deletedIds.concat, "var-init"),
      core_push = cc11001100_hook("core_push", core_deletedIds.push, "var-init"),
      core_slice = cc11001100_hook("core_slice", core_deletedIds.slice, "var-init"),
      core_indexOf = cc11001100_hook("core_indexOf", core_deletedIds.indexOf, "var-init"),
      core_toString = cc11001100_hook("core_toString", class2type.toString, "var-init"),
      core_hasOwn = cc11001100_hook("core_hasOwn", class2type.hasOwnProperty, "var-init"),
      core_trim = cc11001100_hook("core_trim", core_version.trim, "var-init"),
      // Define a local copy of jQuery
  jQuery = function (selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    return new jQuery.fn.init(selector, context, rootjQuery);
  },
      // Used for matching numbers
  core_pnum = cc11001100_hook("core_pnum", /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, "var-init"),
      // Used for splitting on whitespace
  core_rnotwhite = cc11001100_hook("core_rnotwhite", /\S+/g, "var-init"),
      // Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
  rtrim = cc11001100_hook("rtrim", /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "var-init"),
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  rquickExpr = cc11001100_hook("rquickExpr", /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, "var-init"),
      // Match a standalone tag
  rsingleTag = cc11001100_hook("rsingleTag", /^<(\w+)\s*\/?>(?:<\/\1>|)$/, "var-init"),
      // JSON RegExp
  rvalidchars = cc11001100_hook("rvalidchars", /^[\],:{}\s]*$/, "var-init"),
      rvalidbraces = cc11001100_hook("rvalidbraces", /(?:^|:|,)(?:\s*\[)+/g, "var-init"),
      rvalidescape = cc11001100_hook("rvalidescape", /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "var-init"),
      rvalidtokens = cc11001100_hook("rvalidtokens", /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, "var-init"),
      // Matches dashed string for camelizing
  rmsPrefix = cc11001100_hook("rmsPrefix", /^-ms-/, "var-init"),
      rdashAlpha = cc11001100_hook("rdashAlpha", /-([\da-z])/gi, "var-init"),
      // Used by jQuery.camelCase as callback to replace()
  fcamelCase = function (all, letter) {
    return letter.toUpperCase();
  },
      // The ready event handler
  completed = function (event) {
    // readyState === "complete" is good enough for us to call the dom ready in oldIE
    if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
      detach();
      jQuery.ready();
    }
  },
      // Clean-up method for dom ready events
  detach = function () {
    if (document.addEventListener) {
      document.removeEventListener("DOMContentLoaded", completed, false);
      window.removeEventListener("load", completed, false);
    } else {
      document.detachEvent("onreadystatechange", completed);
      window.detachEvent("onload", completed);
    }
  };

  jQuery.fn = cc11001100_hook("jQuery.fn", jQuery.prototype = cc11001100_hook("jQuery.prototype", {
    // The current version of jQuery being used
    jquery: cc11001100_hook("jquery", core_version, "object-key-init"),
    constructor: cc11001100_hook("constructor", jQuery, "object-key-init"),
    init: function (selector, context, rootjQuery) {
      var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

      if (!selector) {
        return this;
      } // Handle HTML strings


      if (typeof selector === "string") {
        if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
          // Assume that strings that start and end with <> are HTML and skip the regex check
          match = cc11001100_hook("match", [null, selector, null], "assign");
        } else {
          match = cc11001100_hook("match", rquickExpr.exec(selector), "assign");
        } // Match html or make sure no context is specified for #id


        if (match && (match[1] || !context)) {
          // HANDLE: $(html) -> $(array)
          if (match[1]) {
            context = cc11001100_hook("context", context instanceof jQuery ? context[0] : context, "assign"); // scripts is true for back-compat

            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                // Properties of context are called as methods if possible
                if (jQuery.isFunction(this[match])) {
                  this[match](context[match]); // ...and otherwise set as attributes
                } else {
                  this.attr(match, context[match]);
                }
              }
            }

            return this; // HANDLE: $(#id)
          } else {
            elem = cc11001100_hook("elem", document.getElementById(match[2]), "assign"); // Check parentNode to catch when Blackberry 4.6 returns
            // nodes that are no longer in the document #6963

            if (elem && elem.parentNode) {
              // Handle the case where IE and Opera return items
              // by name instead of ID
              if (elem.id !== match[2]) {
                return rootjQuery.find(selector);
              } // Otherwise, we inject the element directly into the jQuery object


              this.length = cc11001100_hook("this.length", 1, "assign");
              this[0] = cc11001100_hook("this[0]", elem, "assign");
            }

            this.context = cc11001100_hook("this.context", document, "assign");
            this.selector = cc11001100_hook("this.selector", selector, "assign");
            return this;
          } // HANDLE: $(expr, $(...))

        } else if (!context || context.jquery) {
          return (context || rootjQuery).find(selector); // HANDLE: $(expr, context)
          // (which is just equivalent to: $(context).find(expr)
        } else {
          return this.constructor(context).find(selector);
        } // HANDLE: $(DOMElement)

      } else if (selector.nodeType) {
        this.context = cc11001100_hook("this.context", this[0] = cc11001100_hook("this[0]", selector, "assign"), "assign");
        this.length = cc11001100_hook("this.length", 1, "assign");
        return this; // HANDLE: $(function)
        // Shortcut for document ready
      } else if (jQuery.isFunction(selector)) {
        return rootjQuery.ready(selector);
      }

      if (selector.selector !== undefined) {
        this.selector = cc11001100_hook("this.selector", selector.selector, "assign");
        this.context = cc11001100_hook("this.context", selector.context, "assign");
      }

      return jQuery.makeArray(selector, this);
    },
    // Start with an empty selector
    selector: cc11001100_hook("selector", "", "object-key-init"),
    // The default length of a jQuery object is 0
    length: cc11001100_hook("length", 0, "object-key-init"),
    // The number of elements contained in the matched element set
    size: function () {
      return this.length;
    },
    toArray: function () {
      return core_slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function (num) {
      return num == null ? // Return a 'clean' array
      this.toArray() : // Return just the object
      num < 0 ? this[this.length + num] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function (elems) {
      // Build a new jQuery matched element set
      var ret = cc11001100_hook("ret", jQuery.merge(this.constructor(), elems), "var-init"); // Add the old object onto the stack (as a reference)

      ret.prevObject = cc11001100_hook("ret.prevObject", this, "assign");
      ret.context = cc11001100_hook("ret.context", this.context, "assign"); // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    // (You can seed the arguments with an array of args, but this is
    // only used internally.)
    each: function (callback, args) {
      return jQuery.each(this, callback, args);
    },
    ready: function (fn) {
      // Add the callback
      jQuery.ready.promise().done(fn);
      return this;
    },
    slice: function () {
      return this.pushStack(core_slice.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (i) {
      var len = cc11001100_hook("len", this.length, "var-init"),
          j = cc11001100_hook("j", +i + (i < 0 ? len : 0), "var-init");
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    map: function (callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: cc11001100_hook("push", core_push, "object-key-init"),
    sort: cc11001100_hook("sort", [].sort, "object-key-init"),
    splice: cc11001100_hook("splice", [].splice, "object-key-init")
  }, "assign"), "assign"); // Give the init function the jQuery prototype for later instantiation

  jQuery.fn.init.prototype = cc11001100_hook("jQuery.fn.init.prototype", jQuery.fn, "assign");
  jQuery.extend = cc11001100_hook("jQuery.extend", jQuery.fn.extend = cc11001100_hook("jQuery.fn.extend", function () {
    var src,
        copyIsArray,
        copy,
        name,
        options,
        clone,
        target = cc11001100_hook("target", arguments[0] || {}, "var-init"),
        i = cc11001100_hook("i", 1, "var-init"),
        length = cc11001100_hook("length", arguments.length, "var-init"),
        deep = cc11001100_hook("deep", false, "var-init"); // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = cc11001100_hook("deep", target, "assign");
      target = cc11001100_hook("target", arguments[1] || {}, "assign"); // skip the boolean and the target

      i = cc11001100_hook("i", 2, "assign");
    } // Handle case when target is a string or something (possible in deep copy)


    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = cc11001100_hook("target", {}, "assign");
    } // extend jQuery itself if only one argument is passed


    if (length === i) {
      target = cc11001100_hook("target", this, "assign");
      --i;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = cc11001100_hook("options", arguments[i], "assign")) != null) {
        // Extend the base object
        for (name in options) {
          src = cc11001100_hook("src", target[name], "assign");
          copy = cc11001100_hook("copy", options[name], "assign"); // Prevent never-ending loop

          if (target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = cc11001100_hook("copyIsArray", jQuery.isArray(copy), "assign")))) {
            if (copyIsArray) {
              copyIsArray = cc11001100_hook("copyIsArray", false, "assign");
              clone = cc11001100_hook("clone", src && jQuery.isArray(src) ? src : [], "assign");
            } else {
              clone = cc11001100_hook("clone", src && jQuery.isPlainObject(src) ? src : {}, "assign");
            } // Never move original objects, clone them


            target[name] = cc11001100_hook("target[name]", jQuery.extend(deep, clone, copy), "assign"); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = cc11001100_hook("target[name]", copy, "assign");
          }
        }
      }
    } // Return the modified object


    return target;
  }, "assign"), "assign");
  jQuery.extend({
    noConflict: function (deep) {
      if (window.$ === jQuery) {
        window.$ = cc11001100_hook("window.$", _$, "assign");
      }

      if (deep && window.jQuery === jQuery) {
        window.jQuery = cc11001100_hook("window.jQuery", _jQuery, "assign");
      }

      return jQuery;
    },
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: cc11001100_hook("isReady", false, "object-key-init"),
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
    // Hold (or release) the ready event
    holdReady: function (hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    // Handle when the DOM is ready
    ready: function (wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).


      if (!document.body) {
        return setTimeout(jQuery.ready);
      } // Remember that the DOM is ready


      jQuery.isReady = cc11001100_hook("jQuery.isReady", true, "assign"); // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]); // Trigger any bound ready events

      if (jQuery.fn.trigger) {
        jQuery(document).trigger("ready").off("ready");
      }
    },
    // See test/unit/core.js for details concerning isFunction.
    // Since version 1.3, DOM methods and functions like alert
    // aren't supported. They return false on IE (#2968).
    isFunction: function (obj) {
      return jQuery.type(obj) === "function";
    },
    isArray: cc11001100_hook("isArray", Array.isArray || function (obj) {
      return jQuery.type(obj) === "array";
    }, "object-key-init"),
    isWindow: function (obj) {
      return obj != null && obj == obj.window;
    },
    isNumeric: function (obj) {
      return !isNaN(parseFloat(obj)) && isFinite(obj);
    },
    type: function (obj) {
      if (obj == null) {
        return String(obj);
      }

      return typeof obj === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj;
    },
    isPlainObject: function (obj) {
      // Must be an Object.
      // Because of IE, we also have to check the presence of the constructor property.
      // Make sure that DOM nodes and window objects don't pass through, as well
      if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }

      try {
        // Not own constructor property must be Object
        if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
          return false;
        }
      } catch (e) {
        // IE8,9 Will throw exceptions on certain host objects #9897
        return false;
      } // Own properties are enumerated firstly, so to speed up,
      // if last one is own, then all properties are own.


      var key;

      for (key in obj) {}

      return key === undefined || core_hasOwn.call(obj, key);
    },
    isEmptyObject: function (obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    error: function (msg) {
      throw new Error(msg);
    },
    // data: string of html
    // context (optional): If specified, the fragment will be created in this context, defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    parseHTML: function (data, context, keepScripts) {
      if (!data || typeof data !== "string") {
        return null;
      }

      if (typeof context === "boolean") {
        keepScripts = cc11001100_hook("keepScripts", context, "assign");
        context = cc11001100_hook("context", false, "assign");
      }

      context = cc11001100_hook("context", context || document, "assign");
      var parsed = cc11001100_hook("parsed", rsingleTag.exec(data), "var-init"),
          scripts = cc11001100_hook("scripts", !keepScripts && [], "var-init"); // Single tag

      if (parsed) {
        return [context.createElement(parsed[1])];
      }

      parsed = cc11001100_hook("parsed", jQuery.buildFragment([data], context, scripts), "assign");

      if (scripts) {
        jQuery(scripts).remove();
      }

      return jQuery.merge([], parsed.childNodes);
    },
    parseJSON: function (data) {
      // Attempt to parse using the native JSON parser first
      if (window.JSON && window.JSON.parse) {
        return window.JSON.parse(data);
      }

      if (data === null) {
        return data;
      }

      if (typeof data === "string") {
        // Make sure leading/trailing whitespace is removed (IE can't handle it)
        data = cc11001100_hook("data", jQuery.trim(data), "assign");

        if (data) {
          // Make sure the incoming data is actual JSON
          // Logic borrowed from http://json.org/json2.js
          if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
            return new Function("return " + data)();
          }
        }
      }

      jQuery.error("Invalid JSON: " + data);
    },
    // Cross-browser xml parsing
    parseXML: function (data) {
      var xml, tmp;

      if (!data || typeof data !== "string") {
        return null;
      }

      try {
        if (window.DOMParser) {
          // Standard
          tmp = cc11001100_hook("tmp", new DOMParser(), "assign");
          xml = cc11001100_hook("xml", tmp.parseFromString(data, "text/xml"), "assign");
        } else {
          // IE
          xml = cc11001100_hook("xml", new ActiveXObject("Microsoft.XMLDOM"), "assign");
          xml.async = cc11001100_hook("xml.async", "false", "assign");
          xml.loadXML(data);
        }
      } catch (e) {
        xml = cc11001100_hook("xml", undefined, "assign");
      }

      if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
        jQuery.error("Invalid XML: " + data);
      }

      return xml;
    },
    noop: function () {},
    // Evaluates a script in a global context
    // Workarounds based on findings by Jim Driscoll
    // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
    globalEval: function (data) {
      if (data && jQuery.trim(data)) {
        // We use execScript on Internet Explorer
        // We use an anonymous function so that context is window
        // rather than jQuery in Firefox
        (window.execScript || function (data) {
          window["eval"].call(window, data);
        })(data);
      }
    },
    // Convert dashed to camelCase; used by the css and data modules
    // Microsoft forgot to hump their vendor prefix (#9572)
    camelCase: function (string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },
    nodeName: function (elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    // args is for internal usage only
    each: function (obj, callback, args) {
      var value,
          i = cc11001100_hook("i", 0, "var-init"),
          length = cc11001100_hook("length", obj.length, "var-init"),
          isArray = cc11001100_hook("isArray", isArraylike(obj), "var-init");

      if (args) {
        if (isArray) {
          for (; i < length; i++) {
            value = cc11001100_hook("value", callback.apply(obj[i], args), "assign");

            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = cc11001100_hook("value", callback.apply(obj[i], args), "assign");

            if (value === false) {
              break;
            }
          }
        } // A special, fast, case for the most common use of each

      } else {
        if (isArray) {
          for (; i < length; i++) {
            value = cc11001100_hook("value", callback.call(obj[i], i, obj[i]), "assign");

            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = cc11001100_hook("value", callback.call(obj[i], i, obj[i]), "assign");

            if (value === false) {
              break;
            }
          }
        }
      }

      return obj;
    },
    // Use native String.trim function wherever possible
    trim: cc11001100_hook("trim", core_trim && !core_trim.call("\uFEFF\xA0") ? function (text) {
      return text == null ? "" : core_trim.call(text);
    } : // Otherwise use our own trimming functionality
    function (text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    }, "object-key-init"),
    // results is for internal usage only
    makeArray: function (arr, results) {
      var ret = cc11001100_hook("ret", results || [], "var-init");

      if (arr != null) {
        if (isArraylike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          core_push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function (elem, arr, i) {
      var len;

      if (arr) {
        if (core_indexOf) {
          return core_indexOf.call(arr, elem, i);
        }

        len = cc11001100_hook("len", arr.length, "assign");
        i = cc11001100_hook("i", i ? i < 0 ? Math.max(0, len + i) : i : 0, "assign");

        for (; i < len; i++) {
          // Skip accessing in sparse arrays
          if (i in arr && arr[i] === elem) {
            return i;
          }
        }
      }

      return -1;
    },
    merge: function (first, second) {
      var l = cc11001100_hook("l", second.length, "var-init"),
          i = cc11001100_hook("i", first.length, "var-init"),
          j = cc11001100_hook("j", 0, "var-init");

      if (typeof l === "number") {
        for (; j < l; j++) {
          first[i++] = cc11001100_hook("first[i++]", second[j], "assign");
        }
      } else {
        while (second[j] !== undefined) {
          first[i++] = cc11001100_hook("first[i++]", second[j++], "assign");
        }
      }

      first.length = cc11001100_hook("first.length", i, "assign");
      return first;
    },
    grep: function (elems, callback, inv) {
      var retVal,
          ret = cc11001100_hook("ret", [], "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          length = cc11001100_hook("length", elems.length, "var-init");
      inv = cc11001100_hook("inv", !!inv, "assign"); // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        retVal = cc11001100_hook("retVal", !!callback(elems[i], i), "assign");

        if (inv !== retVal) {
          ret.push(elems[i]);
        }
      }

      return ret;
    },
    // arg is for internal usage only
    map: function (elems, callback, arg) {
      var value,
          i = cc11001100_hook("i", 0, "var-init"),
          length = cc11001100_hook("length", elems.length, "var-init"),
          isArray = cc11001100_hook("isArray", isArraylike(elems), "var-init"),
          ret = cc11001100_hook("ret", [], "var-init"); // Go through the array, translating each of the items to their

      if (isArray) {
        for (; i < length; i++) {
          value = cc11001100_hook("value", callback(elems[i], i, arg), "assign");

          if (value != null) {
            ret[ret.length] = cc11001100_hook("ret[ret.length]", value, "assign");
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = cc11001100_hook("value", callback(elems[i], i, arg), "assign");

          if (value != null) {
            ret[ret.length] = cc11001100_hook("ret[ret.length]", value, "assign");
          }
        }
      } // Flatten any nested arrays


      return core_concat.apply([], ret);
    },
    // A global GUID counter for objects
    guid: cc11001100_hook("guid", 1, "object-key-init"),
    // Bind a function to a context, optionally partially applying any
    // arguments.
    proxy: function (fn, context) {
      var args, proxy, tmp;

      if (typeof context === "string") {
        tmp = cc11001100_hook("tmp", fn[context], "assign");
        context = cc11001100_hook("context", fn, "assign");
        fn = cc11001100_hook("fn", tmp, "assign");
      } // Quick check to determine if target is callable, in the spec
      // this throws a TypeError, but we will just return undefined.


      if (!jQuery.isFunction(fn)) {
        return undefined;
      } // Simulated bind


      args = cc11001100_hook("args", core_slice.call(arguments, 2), "assign");
      proxy = cc11001100_hook("proxy", function () {
        return fn.apply(context || this, args.concat(core_slice.call(arguments)));
      }, "assign"); // Set the guid of unique handler to the same of original handler, so it can be removed

      proxy.guid = cc11001100_hook("proxy.guid", fn.guid = cc11001100_hook("fn.guid", fn.guid || jQuery.guid++, "assign"), "assign");
      return proxy;
    },
    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    access: function (elems, fn, key, value, chainable, emptyGet, raw) {
      var i = cc11001100_hook("i", 0, "var-init"),
          length = cc11001100_hook("length", elems.length, "var-init"),
          bulk = cc11001100_hook("bulk", key == null, "var-init"); // Sets many values

      if (jQuery.type(key) === "object") {
        chainable = cc11001100_hook("chainable", true, "assign");

        for (i in key) {
          jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
        } // Sets one value

      } else if (value !== undefined) {
        chainable = cc11001100_hook("chainable", true, "assign");

        if (!jQuery.isFunction(value)) {
          raw = cc11001100_hook("raw", true, "assign");
        }

        if (bulk) {
          // Bulk operations run against the entire set
          if (raw) {
            fn.call(elems, value);
            fn = cc11001100_hook("fn", null, "assign"); // ...except when executing function values
          } else {
            bulk = cc11001100_hook("bulk", fn, "assign");
            fn = cc11001100_hook("fn", function (elem, key, value) {
              return bulk.call(jQuery(elem), value);
            }, "assign");
          }
        }

        if (fn) {
          for (; i < length; i++) {
            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
          }
        }
      }

      return chainable ? elems : // Gets
      bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
    },
    now: function () {
      return new Date().getTime();
    }
  });
  jQuery.ready.promise = cc11001100_hook("jQuery.ready.promise", function (obj) {
    if (!readyList) {
      readyList = cc11001100_hook("readyList", jQuery.Deferred(), "assign"); // Catch cases where $(document).ready() is called after the browser event has already occurred.
      // we once tried to use readyState "interactive" here, but it caused issues like the one
      // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15

      if (document.readyState === "complete") {
        // Handle it asynchronously to allow scripts the opportunity to delay ready
        setTimeout(jQuery.ready); // Standards-based browsers support DOMContentLoaded
      } else if (document.addEventListener) {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed, false); // A fallback to window.onload, that will always work

        window.addEventListener("load", completed, false); // If IE event model is used
      } else {
        // Ensure firing before onload, maybe late but safe also for iframes
        document.attachEvent("onreadystatechange", completed); // A fallback to window.onload, that will always work

        window.attachEvent("onload", completed); // If IE and not a frame
        // continually check to see if the document is ready

        var top = cc11001100_hook("top", false, "var-init");

        try {
          top = cc11001100_hook("top", window.frameElement == null && document.documentElement, "assign");
        } catch (e) {}

        if (top && top.doScroll) {
          (function doScrollCheck() {
            if (!jQuery.isReady) {
              try {
                // Use the trick by Diego Perini
                // http://javascript.nwbox.com/IEContentLoaded/
                top.doScroll("left");
              } catch (e) {
                return setTimeout(doScrollCheck, 50);
              } // detach all dom ready events


              detach(); // and execute any waiting functions

              jQuery.ready();
            }
          })();
        }
      }
    }

    return readyList.promise(obj);
  }, "assign"); // Populate the class2type map

  jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = cc11001100_hook("class2type[\"[object \" + name + \"]\"]", name.toLowerCase(), "assign");
  });

  function isArraylike(obj) {
    cc11001100_hook("obj", obj, "function-parameter");
    var length = cc11001100_hook("length", obj.length, "var-init"),
        type = cc11001100_hook("type", jQuery.type(obj), "var-init");

    if (jQuery.isWindow(obj)) {
      return false;
    }

    if (obj.nodeType === 1 && length) {
      return true;
    }

    return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj);
  } // All jQuery objects should point back to these


  rootjQuery = cc11001100_hook("rootjQuery", jQuery(document), "assign"); // String to Object options format cache

  var optionsCache = cc11001100_hook("optionsCache", {}, "var-init"); // Convert String-formatted options into Object-formatted ones and store in cache

  function createOptions(options) {
    cc11001100_hook("options", options, "function-parameter");
    var object = cc11001100_hook("object", optionsCache[options] = cc11001100_hook("optionsCache[options]", {}, "assign"), "var-init");
    jQuery.each(options.match(core_rnotwhite) || [], function (_, flag) {
      object[flag] = cc11001100_hook("object[flag]", true, "assign");
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = cc11001100_hook("jQuery.Callbacks", function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = cc11001100_hook("options", typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options), "assign");

    var // Flag to know if list is currently firing
    firing,
        // Last fire value (for non-forgettable lists)
    memory,
        // Flag to know if list was already fired
    fired,
        // End of the loop when firing
    firingLength,
        // Index of currently firing callback (modified by remove if needed)
    firingIndex,
        // First callback to fire (used internally by add and fireWith)
    firingStart,
        // Actual callback list
    list = cc11001100_hook("list", [], "var-init"),
        // Stack of fire calls for repeatable lists
    stack = cc11001100_hook("stack", !options.once && [], "var-init"),
        // Fire callbacks
    fire = function (data) {
      memory = cc11001100_hook("memory", options.memory && data, "assign");
      fired = cc11001100_hook("fired", true, "assign");
      firingIndex = cc11001100_hook("firingIndex", firingStart || 0, "assign");
      firingStart = cc11001100_hook("firingStart", 0, "assign");
      firingLength = cc11001100_hook("firingLength", list.length, "assign");
      firing = cc11001100_hook("firing", true, "assign");

      for (; list && firingIndex < firingLength; firingIndex++) {
        if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
          memory = cc11001100_hook("memory", false, "assign"); // To prevent further calls using add

          break;
        }
      }

      firing = cc11001100_hook("firing", false, "assign");

      if (list) {
        if (stack) {
          if (stack.length) {
            fire(stack.shift());
          }
        } else if (memory) {
          list = cc11001100_hook("list", [], "assign");
        } else {
          self.disable();
        }
      }
    },
        // Actual Callbacks object
    self = cc11001100_hook("self", {
      // Add a callback or a collection of callbacks to the list
      add: function () {
        if (list) {
          // First, we save the current length
          var start = cc11001100_hook("start", list.length, "var-init");

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              var type = cc11001100_hook("type", jQuery.type(arg), "var-init");

              if (type === "function") {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && type !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments); // Do we need to add the callbacks to the
          // current firing batch?


          if (firing) {
            firingLength = cc11001100_hook("firingLength", list.length, "assign"); // With memory, if we're not firing then
            // we should call right away
          } else if (memory) {
            firingStart = cc11001100_hook("firingStart", start, "assign");
            fire(memory);
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function () {
        if (list) {
          jQuery.each(arguments, function (_, arg) {
            var index;

            while ((index = cc11001100_hook("index", jQuery.inArray(arg, list, index), "assign")) > -1) {
              list.splice(index, 1); // Handle firing indexes

              if (firing) {
                if (index <= firingLength) {
                  firingLength--;
                }

                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            }
          });
        }

        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function (fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
      },
      // Remove all callbacks from the list
      empty: function () {
        list = cc11001100_hook("list", [], "assign");
        return this;
      },
      // Have the list do nothing anymore
      disable: function () {
        list = cc11001100_hook("list", stack = cc11001100_hook("stack", memory = cc11001100_hook("memory", undefined, "assign"), "assign"), "assign");
        return this;
      },
      // Is it disabled?
      disabled: function () {
        return !list;
      },
      // Lock the list in its current state
      lock: function () {
        stack = cc11001100_hook("stack", undefined, "assign");

        if (!memory) {
          self.disable();
        }

        return this;
      },
      // Is it locked?
      locked: function () {
        return !stack;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function (context, args) {
        args = cc11001100_hook("args", args || [], "assign");
        args = cc11001100_hook("args", [context, args.slice ? args.slice() : args], "assign");

        if (list && (!fired || stack)) {
          if (firing) {
            stack.push(args);
          } else {
            fire(args);
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function () {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function () {
        return !!fired;
      }
    }, "var-init");

    return self;
  }, "assign");
  jQuery.extend({
    Deferred: function (func) {
      var tuples = cc11001100_hook("tuples", [// action, add listener, listener list, final state
      ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]], "var-init"),
          state = cc11001100_hook("state", "pending", "var-init"),
          promise = cc11001100_hook("promise", {
        state: function () {
          return state;
        },
        always: function () {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        then: function ()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = cc11001100_hook("fns", arguments, "var-init");
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (i, tuple) {
              var action = cc11001100_hook("action", tuple[0], "var-init"),
                  fn = cc11001100_hook("fn", jQuery.isFunction(fns[i]) && fns[i], "var-init"); // deferred[ done | fail | progress ] for forwarding actions to newDefer

              deferred[tuple[1]](function () {
                var returned = cc11001100_hook("returned", fn && fn.apply(this, arguments), "var-init");

                if (returned && jQuery.isFunction(returned.promise)) {
                  returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                } else {
                  newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                }
              });
            });
            fns = cc11001100_hook("fns", null, "assign");
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function (obj) {
          return obj != null ? jQuery.extend(obj, promise) : promise;
        }
      }, "var-init"),
          deferred = cc11001100_hook("deferred", {}, "var-init"); // Keep pipe for back-compat

      promise.pipe = cc11001100_hook("promise.pipe", promise.then, "assign"); // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = cc11001100_hook("list", tuple[2], "var-init"),
            stateString = cc11001100_hook("stateString", tuple[3], "var-init"); // promise[ done | fail | progress ] = list.add

        promise[tuple[1]] = cc11001100_hook("promise[tuple[1]]", list.add, "assign"); // Handle state

        if (stateString) {
          list.add(function () {
            // state = [ resolved | rejected ]
            state = cc11001100_hook("state", stateString, "assign"); // [ reject_list | resolve_list ].disable; progress_list.lock
          }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
        } // deferred[ resolve | reject | notify ]


        deferred[tuple[0]] = cc11001100_hook("deferred[tuple[0]]", function () {
          deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
          return this;
        }, "assign");
        deferred[tuple[0] + "With"] = cc11001100_hook("deferred[tuple[0] + \"With\"]", list.fireWith, "assign");
      }); // Make the deferred a promise

      promise.promise(deferred); // Call given func if any

      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function (subordinate
    /* , ..., subordinateN */
    ) {
      var i = cc11001100_hook("i", 0, "var-init"),
          resolveValues = cc11001100_hook("resolveValues", core_slice.call(arguments), "var-init"),
          length = cc11001100_hook("length", resolveValues.length, "var-init"),
          // the count of uncompleted subordinates
      remaining = cc11001100_hook("remaining", length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, "var-init"),
          // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
      deferred = cc11001100_hook("deferred", remaining === 1 ? subordinate : jQuery.Deferred(), "var-init"),
          // Update function for both resolve and progress values
      updateFunc = function (i, contexts, values) {
        return function (value) {
          contexts[i] = cc11001100_hook("contexts[i]", this, "assign");
          values[i] = cc11001100_hook("values[i]", arguments.length > 1 ? core_slice.call(arguments) : value, "assign");

          if (values === progressValues) {
            deferred.notifyWith(contexts, values);
          } else if (! --remaining) {
            deferred.resolveWith(contexts, values);
          }
        };
      },
          progressValues,
          progressContexts,
          resolveContexts; // add listeners to Deferred subordinates; treat others as resolved


      if (length > 1) {
        progressValues = cc11001100_hook("progressValues", new Array(length), "assign");
        progressContexts = cc11001100_hook("progressContexts", new Array(length), "assign");
        resolveContexts = cc11001100_hook("resolveContexts", new Array(length), "assign");

        for (; i < length; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
          } else {
            --remaining;
          }
        }
      } // if we're not waiting on anything, resolve the master


      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }

      return deferred.promise();
    }
  });
  jQuery.support = cc11001100_hook("jQuery.support", function () {
    var support,
        all,
        a,
        input,
        select,
        fragment,
        opt,
        eventName,
        isSupported,
        i,
        div = cc11001100_hook("div", document.createElement("div"), "var-init"); // Setup

    div.setAttribute("className", "t");
    div.innerHTML = cc11001100_hook("div.innerHTML", "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", "assign"); // Support tests won't run in some limited or non-browser environments

    all = cc11001100_hook("all", div.getElementsByTagName("*"), "assign");
    a = cc11001100_hook("a", div.getElementsByTagName("a")[0], "assign");

    if (!all || !a || !all.length) {
      return {};
    } // First batch of tests


    select = cc11001100_hook("select", document.createElement("select"), "assign");
    opt = cc11001100_hook("opt", select.appendChild(document.createElement("option")), "assign");
    input = cc11001100_hook("input", div.getElementsByTagName("input")[0], "assign");
    a.style.cssText = cc11001100_hook("a.style.cssText", "top:1px;float:left;opacity:.5", "assign");
    support = cc11001100_hook("support", {
      // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
      getSetAttribute: cc11001100_hook("getSetAttribute", div.className !== "t", "object-key-init"),
      // IE strips leading whitespace when .innerHTML is used
      leadingWhitespace: cc11001100_hook("leadingWhitespace", div.firstChild.nodeType === 3, "object-key-init"),
      // Make sure that tbody elements aren't automatically inserted
      // IE will insert them into empty tables
      tbody: cc11001100_hook("tbody", !div.getElementsByTagName("tbody").length, "object-key-init"),
      // Make sure that link elements get serialized correctly by innerHTML
      // This requires a wrapper element in IE
      htmlSerialize: cc11001100_hook("htmlSerialize", !!div.getElementsByTagName("link").length, "object-key-init"),
      // Get the style information from getAttribute
      // (IE uses .cssText instead)
      style: cc11001100_hook("style", /top/.test(a.getAttribute("style")), "object-key-init"),
      // Make sure that URLs aren't manipulated
      // (IE normalizes it by default)
      hrefNormalized: cc11001100_hook("hrefNormalized", a.getAttribute("href") === "/a", "object-key-init"),
      // Make sure that element opacity exists
      // (IE uses filter instead)
      // Use a regex to work around a WebKit issue. See #5145
      opacity: cc11001100_hook("opacity", /^0.5/.test(a.style.opacity), "object-key-init"),
      // Verify style float existence
      // (IE uses styleFloat instead of cssFloat)
      cssFloat: cc11001100_hook("cssFloat", !!a.style.cssFloat, "object-key-init"),
      // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
      checkOn: cc11001100_hook("checkOn", !!input.value, "object-key-init"),
      // Make sure that a selected-by-default option has a working selected property.
      // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
      optSelected: cc11001100_hook("optSelected", opt.selected, "object-key-init"),
      // Tests for enctype support on a form (#6743)
      enctype: cc11001100_hook("enctype", !!document.createElement("form").enctype, "object-key-init"),
      // Makes sure cloning an html5 element does not cause problems
      // Where outerHTML is undefined, this still works
      html5Clone: cc11001100_hook("html5Clone", document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>", "object-key-init"),
      // jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
      boxModel: cc11001100_hook("boxModel", document.compatMode === "CSS1Compat", "object-key-init"),
      // Will be defined later
      deleteExpando: cc11001100_hook("deleteExpando", true, "object-key-init"),
      noCloneEvent: cc11001100_hook("noCloneEvent", true, "object-key-init"),
      inlineBlockNeedsLayout: cc11001100_hook("inlineBlockNeedsLayout", false, "object-key-init"),
      shrinkWrapBlocks: cc11001100_hook("shrinkWrapBlocks", false, "object-key-init"),
      reliableMarginRight: cc11001100_hook("reliableMarginRight", true, "object-key-init"),
      boxSizingReliable: cc11001100_hook("boxSizingReliable", true, "object-key-init"),
      pixelPosition: cc11001100_hook("pixelPosition", false, "object-key-init")
    }, "assign"); // Make sure checked status is properly cloned

    input.checked = cc11001100_hook("input.checked", true, "assign");
    support.noCloneChecked = cc11001100_hook("support.noCloneChecked", input.cloneNode(true).checked, "assign"); // Make sure that the options inside disabled selects aren't marked as disabled
    // (WebKit marks them as disabled)

    select.disabled = cc11001100_hook("select.disabled", true, "assign");
    support.optDisabled = cc11001100_hook("support.optDisabled", !opt.disabled, "assign"); // Support: IE<9

    try {
      delete div.test;
    } catch (e) {
      support.deleteExpando = cc11001100_hook("support.deleteExpando", false, "assign");
    } // Check if we can trust getAttribute("value")


    input = cc11001100_hook("input", document.createElement("input"), "assign");
    input.setAttribute("value", "");
    support.input = cc11001100_hook("support.input", input.getAttribute("value") === "", "assign"); // Check if an input maintains its value after becoming a radio

    input.value = cc11001100_hook("input.value", "t", "assign");
    input.setAttribute("type", "radio");
    support.radioValue = cc11001100_hook("support.radioValue", input.value === "t", "assign"); // #11217 - WebKit loses check when the name is after the checked attribute

    input.setAttribute("checked", "t");
    input.setAttribute("name", "t");
    fragment = cc11001100_hook("fragment", document.createDocumentFragment(), "assign");
    fragment.appendChild(input); // Check if a disconnected checkbox will retain its checked
    // value of true after appended to the DOM (IE6/7)

    support.appendChecked = cc11001100_hook("support.appendChecked", input.checked, "assign"); // WebKit doesn't clone checked state correctly in fragments

    support.checkClone = cc11001100_hook("support.checkClone", fragment.cloneNode(true).cloneNode(true).lastChild.checked, "assign"); // Support: IE<9
    // Opera does not clone events (and typeof div.attachEvent === undefined).
    // IE9-10 clones events bound via attachEvent, but they don't trigger with .click()

    if (div.attachEvent) {
      div.attachEvent("onclick", function () {
        support.noCloneEvent = cc11001100_hook("support.noCloneEvent", false, "assign");
      });
      div.cloneNode(true).click();
    } // Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
    // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php


    for (i in {
      submit: cc11001100_hook("submit", true, "object-key-init"),
      change: cc11001100_hook("change", true, "object-key-init"),
      focusin: cc11001100_hook("focusin", true, "object-key-init")
    }) {
      div.setAttribute(eventName = cc11001100_hook("eventName", "on" + i, "assign"), "t");
      support[i + "Bubbles"] = cc11001100_hook("support[i + \"Bubbles\"]", eventName in window || div.attributes[eventName].expando === false, "assign");
    }

    div.style.backgroundClip = cc11001100_hook("div.style.backgroundClip", "content-box", "assign");
    div.cloneNode(true).style.backgroundClip = cc11001100_hook("div.cloneNode(true).style.backgroundClip", "", "assign");
    support.clearCloneStyle = cc11001100_hook("support.clearCloneStyle", div.style.backgroundClip === "content-box", "assign"); // Run tests that need a body at doc ready

    jQuery(function () {
      var container,
          marginDiv,
          tds,
          divReset = cc11001100_hook("divReset", "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", "var-init"),
          body = cc11001100_hook("body", document.getElementsByTagName("body")[0], "var-init");

      if (!body) {
        // Return for frameset docs that don't have a body
        return;
      }

      container = cc11001100_hook("container", document.createElement("div"), "assign");
      container.style.cssText = cc11001100_hook("container.style.cssText", "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", "assign");
      body.appendChild(container).appendChild(div); // Support: IE8
      // Check if table cells still have offsetWidth/Height when they are set
      // to display:none and there are still other visible table cells in a
      // table row; if so, offsetWidth/Height are not reliable for use when
      // determining if an element has been hidden directly using
      // display:none (it is still safe to use offsets if a parent element is
      // hidden; don safety goggles and see bug #4512 for more information).

      div.innerHTML = cc11001100_hook("div.innerHTML", "<table><tr><td></td><td>t</td></tr></table>", "assign");
      tds = cc11001100_hook("tds", div.getElementsByTagName("td"), "assign");
      tds[0].style.cssText = cc11001100_hook("tds[0].style.cssText", "padding:0;margin:0;border:0;display:none", "assign");
      isSupported = cc11001100_hook("isSupported", tds[0].offsetHeight === 0, "assign");
      tds[0].style.display = cc11001100_hook("tds[0].style.display", "", "assign");
      tds[1].style.display = cc11001100_hook("tds[1].style.display", "none", "assign"); // Support: IE8
      // Check if empty table cells still have offsetWidth/Height

      support.reliableHiddenOffsets = cc11001100_hook("support.reliableHiddenOffsets", isSupported && tds[0].offsetHeight === 0, "assign"); // Check box-sizing and margin behavior

      div.innerHTML = cc11001100_hook("div.innerHTML", "", "assign");
      div.style.cssText = cc11001100_hook("div.style.cssText", "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", "assign");
      support.boxSizing = cc11001100_hook("support.boxSizing", div.offsetWidth === 4, "assign");
      support.doesNotIncludeMarginInBodyOffset = cc11001100_hook("support.doesNotIncludeMarginInBodyOffset", body.offsetTop !== 1, "assign"); // Use window.getComputedStyle because jsdom on node.js will break without it.

      if (window.getComputedStyle) {
        support.pixelPosition = cc11001100_hook("support.pixelPosition", (window.getComputedStyle(div, null) || {}).top !== "1%", "assign");
        support.boxSizingReliable = cc11001100_hook("support.boxSizingReliable", (window.getComputedStyle(div, null) || {
          width: cc11001100_hook("width", "4px", "object-key-init")
        }).width === "4px", "assign"); // Check if div with explicit width and no margin-right incorrectly
        // gets computed margin-right based on width of container. (#3333)
        // Fails in WebKit before Feb 2011 nightlies
        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right

        marginDiv = cc11001100_hook("marginDiv", div.appendChild(document.createElement("div")), "assign");
        marginDiv.style.cssText = cc11001100_hook("marginDiv.style.cssText", div.style.cssText = cc11001100_hook("div.style.cssText", divReset, "assign"), "assign");
        marginDiv.style.marginRight = cc11001100_hook("marginDiv.style.marginRight", marginDiv.style.width = cc11001100_hook("marginDiv.style.width", "0", "assign"), "assign");
        div.style.width = cc11001100_hook("div.style.width", "1px", "assign");
        support.reliableMarginRight = cc11001100_hook("support.reliableMarginRight", !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight), "assign");
      }

      if (typeof div.style.zoom !== core_strundefined) {
        // Support: IE<8
        // Check if natively block-level elements act like inline-block
        // elements when setting their display to 'inline' and giving
        // them layout
        div.innerHTML = cc11001100_hook("div.innerHTML", "", "assign");
        div.style.cssText = cc11001100_hook("div.style.cssText", divReset + "width:1px;padding:1px;display:inline;zoom:1", "assign");
        support.inlineBlockNeedsLayout = cc11001100_hook("support.inlineBlockNeedsLayout", div.offsetWidth === 3, "assign"); // Support: IE6
        // Check if elements with layout shrink-wrap their children

        div.style.display = cc11001100_hook("div.style.display", "block", "assign");
        div.innerHTML = cc11001100_hook("div.innerHTML", "<div></div>", "assign");
        div.firstChild.style.width = cc11001100_hook("div.firstChild.style.width", "5px", "assign");
        support.shrinkWrapBlocks = cc11001100_hook("support.shrinkWrapBlocks", div.offsetWidth !== 3, "assign");

        if (support.inlineBlockNeedsLayout) {
          // Prevent IE 6 from affecting layout for positioned elements #11048
          // Prevent IE from shrinking the body in IE 7 mode #12869
          // Support: IE<8
          body.style.zoom = cc11001100_hook("body.style.zoom", 1, "assign");
        }
      }

      body.removeChild(container); // Null elements to avoid leaks in IE

      container = cc11001100_hook("container", div = cc11001100_hook("div", tds = cc11001100_hook("tds", marginDiv = cc11001100_hook("marginDiv", null, "assign"), "assign"), "assign"), "assign");
    }); // Null elements to avoid leaks in IE

    all = cc11001100_hook("all", select = cc11001100_hook("select", fragment = cc11001100_hook("fragment", opt = cc11001100_hook("opt", a = cc11001100_hook("a", input = cc11001100_hook("input", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
    return support;
  }(), "assign");
  var rbrace = cc11001100_hook("rbrace", /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, "var-init"),
      rmultiDash = cc11001100_hook("rmultiDash", /([A-Z])/g, "var-init");

  function internalData(elem, name, data, pvt
  /* Internal Use Only */
  ) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("pvt\n/* Internal Use Only */", pvt, "function-parameter");

    if (!jQuery.acceptData(elem)) {
      return;
    }

    var thisCache,
        ret,
        internalKey = cc11001100_hook("internalKey", jQuery.expando, "var-init"),
        getByName = cc11001100_hook("getByName", typeof name === "string", "var-init"),
        // We have to handle DOM nodes and JS objects differently because IE6-7
    // can't GC object references properly across the DOM-JS boundary
    isNode = cc11001100_hook("isNode", elem.nodeType, "var-init"),
        // Only DOM nodes need the global jQuery cache; JS object data is
    // attached directly to the object so GC can occur automatically
    cache = cc11001100_hook("cache", isNode ? jQuery.cache : elem, "var-init"),
        // Only defining an ID for JS objects if its cache already exists allows
    // the code to shortcut on the same path as a DOM node with no cache
    id = cc11001100_hook("id", isNode ? elem[internalKey] : elem[internalKey] && internalKey, "var-init"); // Avoid doing any more work than we need to when trying to get data on an
    // object that has no data at all

    if ((!id || !cache[id] || !pvt && !cache[id].data) && getByName && data === undefined) {
      return;
    }

    if (!id) {
      // Only DOM nodes need a new unique ID for each element since their data
      // ends up in the global cache
      if (isNode) {
        elem[internalKey] = cc11001100_hook("elem[internalKey]", id = cc11001100_hook("id", core_deletedIds.pop() || jQuery.guid++, "assign"), "assign");
      } else {
        id = cc11001100_hook("id", internalKey, "assign");
      }
    }

    if (!cache[id]) {
      cache[id] = cc11001100_hook("cache[id]", {}, "assign"); // Avoids exposing jQuery metadata on plain JS objects when the object
      // is serialized using JSON.stringify

      if (!isNode) {
        cache[id].toJSON = cc11001100_hook("cache[id].toJSON", jQuery.noop, "assign");
      }
    } // An object can be passed to jQuery.data instead of a key/value pair; this gets
    // shallow copied over onto the existing cache


    if (typeof name === "object" || typeof name === "function") {
      if (pvt) {
        cache[id] = cc11001100_hook("cache[id]", jQuery.extend(cache[id], name), "assign");
      } else {
        cache[id].data = cc11001100_hook("cache[id].data", jQuery.extend(cache[id].data, name), "assign");
      }
    }

    thisCache = cc11001100_hook("thisCache", cache[id], "assign"); // jQuery data() is stored in a separate object inside the object's internal data
    // cache in order to avoid key collisions between internal data and user-defined
    // data.

    if (!pvt) {
      if (!thisCache.data) {
        thisCache.data = cc11001100_hook("thisCache.data", {}, "assign");
      }

      thisCache = cc11001100_hook("thisCache", thisCache.data, "assign");
    }

    if (data !== undefined) {
      thisCache[jQuery.camelCase(name)] = cc11001100_hook("thisCache[jQuery.camelCase(name)]", data, "assign");
    } // Check for both converted-to-camel and non-converted data property names
    // If a data property was specified


    if (getByName) {
      // First Try to find as-is property data
      ret = cc11001100_hook("ret", thisCache[name], "assign"); // Test for null|undefined property data

      if (ret == null) {
        // Try to find the camelCased property
        ret = cc11001100_hook("ret", thisCache[jQuery.camelCase(name)], "assign");
      }
    } else {
      ret = cc11001100_hook("ret", thisCache, "assign");
    }

    return ret;
  }

  function internalRemoveData(elem, name, pvt) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("pvt", pvt, "function-parameter");

    if (!jQuery.acceptData(elem)) {
      return;
    }

    var i,
        l,
        thisCache,
        isNode = cc11001100_hook("isNode", elem.nodeType, "var-init"),
        // See jQuery.data for more information
    cache = cc11001100_hook("cache", isNode ? jQuery.cache : elem, "var-init"),
        id = cc11001100_hook("id", isNode ? elem[jQuery.expando] : jQuery.expando, "var-init"); // If there is already no cache entry for this object, there is no
    // purpose in continuing

    if (!cache[id]) {
      return;
    }

    if (name) {
      thisCache = cc11001100_hook("thisCache", pvt ? cache[id] : cache[id].data, "assign");

      if (thisCache) {
        // Support array or space separated string names for data keys
        if (!jQuery.isArray(name)) {
          // try the string as a key before any manipulation
          if (name in thisCache) {
            name = cc11001100_hook("name", [name], "assign");
          } else {
            // split the camel cased version by spaces unless a key with the spaces exists
            name = cc11001100_hook("name", jQuery.camelCase(name), "assign");

            if (name in thisCache) {
              name = cc11001100_hook("name", [name], "assign");
            } else {
              name = cc11001100_hook("name", name.split(" "), "assign");
            }
          }
        } else {
          // If "name" is an array of keys...
          // When data is initially created, via ("key", "val") signature,
          // keys will be converted to camelCase.
          // Since there is no way to tell _how_ a key was added, remove
          // both plain key and camelCase key. #12786
          // This will only penalize the array argument path.
          name = cc11001100_hook("name", name.concat(jQuery.map(name, jQuery.camelCase)), "assign");
        }

        for (i = cc11001100_hook("i", 0, "assign"), l = cc11001100_hook("l", name.length, "assign"); i < l; i++) {
          delete thisCache[name[i]];
        } // If there is no data left in the cache, we want to continue
        // and let the cache object itself get destroyed


        if (!(pvt ? isEmptyDataObject : jQuery.isEmptyObject)(thisCache)) {
          return;
        }
      }
    } // See jQuery.data for more information


    if (!pvt) {
      delete cache[id].data; // Don't destroy the parent cache unless the internal data object
      // had been the only thing left in it

      if (!isEmptyDataObject(cache[id])) {
        return;
      }
    } // Destroy the cache


    if (isNode) {
      jQuery.cleanData([elem], true); // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
    } else if (jQuery.support.deleteExpando || cache != cache.window) {
      delete cache[id]; // When all else fails, null
    } else {
      cache[id] = cc11001100_hook("cache[id]", null, "assign");
    }
  }

  jQuery.extend({
    cache: {},
    // Unique for each copy of jQuery on the page
    // Non-digits removed to match rinlinejQuery
    expando: cc11001100_hook("expando", "jQuery" + (core_version + Math.random()).replace(/\D/g, ""), "object-key-init"),
    // The following elements throw uncatchable exceptions if you
    // attempt to add expando properties to them.
    noData: {
      "embed": cc11001100_hook("embed", true, "object-key-init"),
      // Ban all objects except for Flash (which handle expandos)
      "object": cc11001100_hook("object", "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", "object-key-init"),
      "applet": cc11001100_hook("applet", true, "object-key-init")
    },
    hasData: function (elem) {
      elem = cc11001100_hook("elem", elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando], "assign");
      return !!elem && !isEmptyDataObject(elem);
    },
    data: function (elem, name, data) {
      return internalData(elem, name, data);
    },
    removeData: function (elem, name) {
      return internalRemoveData(elem, name);
    },
    // For internal use only.
    _data: function (elem, name, data) {
      return internalData(elem, name, data, true);
    },
    _removeData: function (elem, name) {
      return internalRemoveData(elem, name, true);
    },
    // A method for determining if a DOM node can handle the data expando
    acceptData: function (elem) {
      // Do not set data on non-element because it will not be cleared (#8335).
      if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
        return false;
      }

      var noData = cc11001100_hook("noData", elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()], "var-init"); // nodes accept data unless otherwise specified; rejection can be conditional

      return !noData || noData !== true && elem.getAttribute("classid") === noData;
    }
  });
  jQuery.fn.extend({
    data: function (key, value) {
      var attrs,
          name,
          elem = cc11001100_hook("elem", this[0], "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          data = cc11001100_hook("data", null, "var-init"); // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = cc11001100_hook("data", jQuery.data(elem), "assign");

          if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
            attrs = cc11001100_hook("attrs", elem.attributes, "assign");

            for (; i < attrs.length; i++) {
              name = cc11001100_hook("name", attrs[i].name, "assign");

              if (!name.indexOf("data-")) {
                name = cc11001100_hook("name", jQuery.camelCase(name.slice(5)), "assign");
                dataAttr(elem, name, data[name]);
              }
            }

            jQuery._data(elem, "parsedAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (typeof key === "object") {
        return this.each(function () {
          jQuery.data(this, key);
        });
      }

      return jQuery.access(this, function (value) {
        if (value === undefined) {
          // Try to fetch any internally stored data first
          return elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
        }

        this.each(function () {
          jQuery.data(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function (key) {
      return this.each(function () {
        jQuery.removeData(this, key);
      });
    }
  });

  function dataAttr(elem, key, data) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");

    // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute
    if (data === undefined && elem.nodeType === 1) {
      var name = cc11001100_hook("name", "data-" + key.replace(rmultiDash, "-$1").toLowerCase(), "var-init");
      data = cc11001100_hook("data", elem.getAttribute(name), "assign");

      if (typeof data === "string") {
        try {
          data = cc11001100_hook("data", data === "true" ? true : data === "false" ? false : data === "null" ? null : // Only convert to a number if it doesn't change the string
          +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data, "assign");
        } catch (e) {} // Make sure we set the data so it isn't changed later


        jQuery.data(elem, key, data);
      } else {
        data = cc11001100_hook("data", undefined, "assign");
      }
    }

    return data;
  } // checks a cache object for emptiness


  function isEmptyDataObject(obj) {
    cc11001100_hook("obj", obj, "function-parameter");
    var name;

    for (name in obj) {
      // if the public data object is empty, the private is still empty
      if (name === "data" && jQuery.isEmptyObject(obj[name])) {
        continue;
      }

      if (name !== "toJSON") {
        return false;
      }
    }

    return true;
  }

  jQuery.extend({
    queue: function (elem, type, data) {
      var queue;

      if (elem) {
        type = cc11001100_hook("type", (type || "fx") + "queue", "assign");
        queue = cc11001100_hook("queue", jQuery._data(elem, type), "assign"); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = cc11001100_hook("queue", jQuery._data(elem, type, jQuery.makeArray(data)), "assign");
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function (elem, type) {
      type = cc11001100_hook("type", type || "fx", "assign");

      var queue = cc11001100_hook("queue", jQuery.queue(elem, type), "var-init"),
          startLength = cc11001100_hook("startLength", queue.length, "var-init"),
          fn = cc11001100_hook("fn", queue.shift(), "var-init"),
          hooks = cc11001100_hook("hooks", jQuery._queueHooks(elem, type), "var-init"),
          next = function () {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = cc11001100_hook("fn", queue.shift(), "assign");
        startLength--;
      }

      hooks.cur = cc11001100_hook("hooks.cur", fn, "assign");

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // not intended for public consumption - generates a queueHooks object, or returns the current one
    _queueHooks: function (elem, type) {
      var key = cc11001100_hook("key", type + "queueHooks", "var-init");
      return jQuery._data(elem, key) || jQuery._data(elem, key, {
        empty: cc11001100_hook("empty", jQuery.Callbacks("once memory").add(function () {
          jQuery._removeData(elem, type + "queue");

          jQuery._removeData(elem, key);
        }), "object-key-init")
      });
    }
  });
  jQuery.fn.extend({
    queue: function (type, data) {
      var setter = cc11001100_hook("setter", 2, "var-init");

      if (typeof type !== "string") {
        data = cc11001100_hook("data", type, "assign");
        type = cc11001100_hook("type", "fx", "assign");
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = cc11001100_hook("queue", jQuery.queue(this, type, data), "var-init"); // ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function (type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    // Based off of the plugin by Clint Helfers, with permission.
    // http://blindsignals.com/index.php/2009/07/jquery-delay/
    delay: function (time, type) {
      time = cc11001100_hook("time", jQuery.fx ? jQuery.fx.speeds[time] || time : time, "assign");
      type = cc11001100_hook("type", type || "fx", "assign");
      return this.queue(type, function (next, hooks) {
        var timeout = cc11001100_hook("timeout", setTimeout(next, time), "var-init");
        hooks.stop = cc11001100_hook("hooks.stop", function () {
          clearTimeout(timeout);
        }, "assign");
      });
    },
    clearQueue: function (type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function (type, obj) {
      var tmp,
          count = cc11001100_hook("count", 1, "var-init"),
          defer = cc11001100_hook("defer", jQuery.Deferred(), "var-init"),
          elements = cc11001100_hook("elements", this, "var-init"),
          i = cc11001100_hook("i", this.length, "var-init"),
          resolve = function () {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = cc11001100_hook("obj", type, "assign");
        type = cc11001100_hook("type", undefined, "assign");
      }

      type = cc11001100_hook("type", type || "fx", "assign");

      while (i--) {
        tmp = cc11001100_hook("tmp", jQuery._data(elements[i], type + "queueHooks"), "assign");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var nodeHook,
      boolHook,
      rclass = cc11001100_hook("rclass", /[\t\r\n]/g, "var-init"),
      rreturn = cc11001100_hook("rreturn", /\r/g, "var-init"),
      rfocusable = cc11001100_hook("rfocusable", /^(?:input|select|textarea|button|object)$/i, "var-init"),
      rclickable = cc11001100_hook("rclickable", /^(?:a|area)$/i, "var-init"),
      rboolean = cc11001100_hook("rboolean", /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, "var-init"),
      ruseDefault = cc11001100_hook("ruseDefault", /^(?:checked|selected)$/i, "var-init"),
      getSetAttribute = cc11001100_hook("getSetAttribute", jQuery.support.getSetAttribute, "var-init"),
      getSetInput = cc11001100_hook("getSetInput", jQuery.support.input, "var-init");
  jQuery.fn.extend({
    attr: function (name, value) {
      return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function (name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    },
    prop: function (name, value) {
      return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function (name) {
      name = cc11001100_hook("name", jQuery.propFix[name] || name, "assign");
      return this.each(function () {
        // try/catch handles cases where IE balks (such as removing a property on window)
        try {
          this[name] = cc11001100_hook("this[name]", undefined, "assign");
          delete this[name];
        } catch (e) {}
      });
    },
    addClass: function (value) {
      var classes,
          elem,
          cur,
          clazz,
          j,
          i = cc11001100_hook("i", 0, "var-init"),
          len = cc11001100_hook("len", this.length, "var-init"),
          proceed = cc11001100_hook("proceed", typeof value === "string" && value, "var-init");

      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, this.className));
        });
      }

      if (proceed) {
        // The disjunction here is for better compressibility (see removeClass)
        classes = cc11001100_hook("classes", (value || "").match(core_rnotwhite) || [], "assign");

        for (; i < len; i++) {
          elem = cc11001100_hook("elem", this[i], "assign");
          cur = cc11001100_hook("cur", elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " "), "assign");

          if (cur) {
            j = cc11001100_hook("j", 0, "assign");

            while (clazz = cc11001100_hook("clazz", classes[j++], "assign")) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += cc11001100_hook("cur", clazz + " ", "assign");
              }
            }

            elem.className = cc11001100_hook("elem.className", jQuery.trim(cur), "assign");
          }
        }
      }

      return this;
    },
    removeClass: function (value) {
      var classes,
          elem,
          cur,
          clazz,
          j,
          i = cc11001100_hook("i", 0, "var-init"),
          len = cc11001100_hook("len", this.length, "var-init"),
          proceed = cc11001100_hook("proceed", arguments.length === 0 || typeof value === "string" && value, "var-init");

      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, this.className));
        });
      }

      if (proceed) {
        classes = cc11001100_hook("classes", (value || "").match(core_rnotwhite) || [], "assign");

        for (; i < len; i++) {
          elem = cc11001100_hook("elem", this[i], "assign"); // This expression is here for better compressibility (see addClass)

          cur = cc11001100_hook("cur", elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : ""), "assign");

          if (cur) {
            j = cc11001100_hook("j", 0, "assign");

            while (clazz = cc11001100_hook("clazz", classes[j++], "assign")) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") >= 0) {
                cur = cc11001100_hook("cur", cur.replace(" " + clazz + " ", " "), "assign");
              }
            }

            elem.className = cc11001100_hook("elem.className", value ? jQuery.trim(cur) : "", "assign");
          }
        }
      }

      return this;
    },
    toggleClass: function (value, stateVal) {
      var type = cc11001100_hook("type", typeof value, "var-init"),
          isBool = cc11001100_hook("isBool", typeof stateVal === "boolean", "var-init");

      if (jQuery.isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
        });
      }

      return this.each(function () {
        if (type === "string") {
          // toggle individual class names
          var className,
              i = cc11001100_hook("i", 0, "var-init"),
              self = cc11001100_hook("self", jQuery(this), "var-init"),
              state = cc11001100_hook("state", stateVal, "var-init"),
              classNames = cc11001100_hook("classNames", value.match(core_rnotwhite) || [], "var-init");

          while (className = cc11001100_hook("className", classNames[i++], "assign")) {
            // check each className given, space separated list
            state = cc11001100_hook("state", isBool ? state : !self.hasClass(className), "assign");
            self[state ? "addClass" : "removeClass"](className);
          } // Toggle whole class name

        } else if (type === core_strundefined || type === "boolean") {
          if (this.className) {
            // store className if set
            jQuery._data(this, "__className__", this.className);
          } // If the element has a class name or if we're passed "false",
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          this.className = cc11001100_hook("this.className", this.className || value === false ? "" : jQuery._data(this, "__className__") || "", "assign");
        }
      });
    },
    hasClass: function (selector) {
      var className = cc11001100_hook("className", " " + selector + " ", "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          l = cc11001100_hook("l", this.length, "var-init");

      for (; i < l; i++) {
        if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
          return true;
        }
      }

      return false;
    },
    val: function (value) {
      var ret,
          hooks,
          isFunction,
          elem = cc11001100_hook("elem", this[0], "var-init");

      if (!arguments.length) {
        if (elem) {
          hooks = cc11001100_hook("hooks", jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], "assign");

          if (hooks && "get" in hooks && (ret = cc11001100_hook("ret", hooks.get(elem, "value"), "assign")) !== undefined) {
            return ret;
          }

          ret = cc11001100_hook("ret", elem.value, "assign");
          return typeof ret === "string" ? // handle most common string cases
          ret.replace(rreturn, "") : // handle cases where value is null/undef or number
          ret == null ? "" : ret;
        }

        return;
      }

      isFunction = cc11001100_hook("isFunction", jQuery.isFunction(value), "assign");
      return this.each(function (i) {
        var val,
            self = cc11001100_hook("self", jQuery(this), "var-init");

        if (this.nodeType !== 1) {
          return;
        }

        if (isFunction) {
          val = cc11001100_hook("val", value.call(this, i, self.val()), "assign");
        } else {
          val = cc11001100_hook("val", value, "assign");
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = cc11001100_hook("val", "", "assign");
        } else if (typeof val === "number") {
          val += cc11001100_hook("val", "", "assign");
        } else if (jQuery.isArray(val)) {
          val = cc11001100_hook("val", jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          }), "assign");
        }

        hooks = cc11001100_hook("hooks", jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], "assign"); // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = cc11001100_hook("this.value", val, "assign");
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function (elem) {
          // attributes.value is undefined in Blackberry 4.7 but
          // uses .value. See #6932
          var val = cc11001100_hook("val", elem.attributes.value, "var-init");
          return !val || val.specified ? elem.value : elem.text;
        }
      },
      select: {
        get: function (elem) {
          var value,
              option,
              options = cc11001100_hook("options", elem.options, "var-init"),
              index = cc11001100_hook("index", elem.selectedIndex, "var-init"),
              one = cc11001100_hook("one", elem.type === "select-one" || index < 0, "var-init"),
              values = cc11001100_hook("values", one ? null : [], "var-init"),
              max = cc11001100_hook("max", one ? index + 1 : options.length, "var-init"),
              i = cc11001100_hook("i", index < 0 ? max : one ? index : 0, "var-init"); // Loop through all the selected options

          for (; i < max; i++) {
            option = cc11001100_hook("option", options[i], "assign"); // oldIE doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && ( // Don't return options that are disabled or in a disabled optgroup
            jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = cc11001100_hook("value", jQuery(option).val(), "assign"); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function (elem, value) {
          var values = cc11001100_hook("values", jQuery.makeArray(value), "var-init");
          jQuery(elem).find("option").each(function () {
            this.selected = cc11001100_hook("this.selected", jQuery.inArray(jQuery(this).val(), values) >= 0, "assign");
          });

          if (!values.length) {
            elem.selectedIndex = cc11001100_hook("elem.selectedIndex", -1, "assign");
          }

          return values;
        }
      }
    },
    attr: function (elem, name, value) {
      var hooks,
          notxml,
          ret,
          nType = cc11001100_hook("nType", elem.nodeType, "var-init"); // don't get/set attributes on text, comment and attribute nodes

      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === core_strundefined) {
        return jQuery.prop(elem, name, value);
      }

      notxml = cc11001100_hook("notxml", nType !== 1 || !jQuery.isXMLDoc(elem), "assign"); // All attributes are lowercase
      // Grab necessary hook if one is defined

      if (notxml) {
        name = cc11001100_hook("name", name.toLowerCase(), "assign");
        hooks = cc11001100_hook("hooks", jQuery.attrHooks[name] || (rboolean.test(name) ? boolHook : nodeHook), "assign");
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
        } else if (hooks && notxml && "set" in hooks && (ret = cc11001100_hook("ret", hooks.set(elem, value, name), "assign")) !== undefined) {
          return ret;
        } else {
          elem.setAttribute(name, value + "");
          return value;
        }
      } else if (hooks && notxml && "get" in hooks && (ret = cc11001100_hook("ret", hooks.get(elem, name), "assign")) !== null) {
        return ret;
      } else {
        // In IE9+, Flash objects don't have .getAttribute (#12945)
        // Support: IE9+
        if (typeof elem.getAttribute !== core_strundefined) {
          ret = cc11001100_hook("ret", elem.getAttribute(name), "assign");
        } // Non-existent attributes return null, we normalize to undefined


        return ret == null ? undefined : ret;
      }
    },
    removeAttr: function (elem, value) {
      var name,
          propName,
          i = cc11001100_hook("i", 0, "var-init"),
          attrNames = cc11001100_hook("attrNames", value && value.match(core_rnotwhite), "var-init");

      if (attrNames && elem.nodeType === 1) {
        while (name = cc11001100_hook("name", attrNames[i++], "assign")) {
          propName = cc11001100_hook("propName", jQuery.propFix[name] || name, "assign"); // Boolean attributes get special treatment (#10870)

          if (rboolean.test(name)) {
            // Set corresponding property to false for boolean attributes
            // Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
            if (!getSetAttribute && ruseDefault.test(name)) {
              elem[jQuery.camelCase("default-" + name)] = cc11001100_hook("elem[jQuery.camelCase(\"default-\" + name)]", elem[propName] = cc11001100_hook("elem[propName]", false, "assign"), "assign");
            } else {
              elem[propName] = cc11001100_hook("elem[propName]", false, "assign");
            } // See #9699 for explanation of this approach (setting first, then removal)

          } else {
            jQuery.attr(elem, name, "");
          }

          elem.removeAttribute(getSetAttribute ? name : propName);
        }
      }
    },
    attrHooks: {
      type: {
        set: function (elem, value) {
          if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
            // Setting the type on a radio button after the value resets the value in IE6-9
            // Reset value to default in case type is set after value during creation
            var val = cc11001100_hook("val", elem.value, "var-init");
            elem.setAttribute("type", value);

            if (val) {
              elem.value = cc11001100_hook("elem.value", val, "assign");
            }

            return value;
          }
        }
      }
    },
    propFix: {
      tabindex: cc11001100_hook("tabindex", "tabIndex", "object-key-init"),
      readonly: cc11001100_hook("readonly", "readOnly", "object-key-init"),
      "for": cc11001100_hook("for", "htmlFor", "object-key-init"),
      "class": cc11001100_hook("class", "className", "object-key-init"),
      maxlength: cc11001100_hook("maxlength", "maxLength", "object-key-init"),
      cellspacing: cc11001100_hook("cellspacing", "cellSpacing", "object-key-init"),
      cellpadding: cc11001100_hook("cellpadding", "cellPadding", "object-key-init"),
      rowspan: cc11001100_hook("rowspan", "rowSpan", "object-key-init"),
      colspan: cc11001100_hook("colspan", "colSpan", "object-key-init"),
      usemap: cc11001100_hook("usemap", "useMap", "object-key-init"),
      frameborder: cc11001100_hook("frameborder", "frameBorder", "object-key-init"),
      contenteditable: cc11001100_hook("contenteditable", "contentEditable", "object-key-init")
    },
    prop: function (elem, name, value) {
      var ret,
          hooks,
          notxml,
          nType = cc11001100_hook("nType", elem.nodeType, "var-init"); // don't get/set properties on text, comment and attribute nodes

      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      notxml = cc11001100_hook("notxml", nType !== 1 || !jQuery.isXMLDoc(elem), "assign");

      if (notxml) {
        // Fix name and attach hooks
        name = cc11001100_hook("name", jQuery.propFix[name] || name, "assign");
        hooks = cc11001100_hook("hooks", jQuery.propHooks[name], "assign");
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = cc11001100_hook("ret", hooks.set(elem, value, name), "assign")) !== undefined) {
          return ret;
        } else {
          return elem[name] = cc11001100_hook("elem[name]", value, "assign");
        }
      } else {
        if (hooks && "get" in hooks && (ret = cc11001100_hook("ret", hooks.get(elem, name), "assign")) !== null) {
          return ret;
        } else {
          return elem[name];
        }
      }
    },
    propHooks: {
      tabIndex: {
        get: function (elem) {
          // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
          // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          var attributeNode = cc11001100_hook("attributeNode", elem.getAttributeNode("tabindex"), "var-init");
          return attributeNode && attributeNode.specified ? parseInt(attributeNode.value, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : undefined;
        }
      }
    }
  }); // Hook for boolean attributes

  boolHook = cc11001100_hook("boolHook", {
    get: function (elem, name) {
      var // Use .prop to determine if this attribute is understood as boolean
      prop = cc11001100_hook("prop", jQuery.prop(elem, name), "var-init"),
          // Fetch it accordingly
      attr = cc11001100_hook("attr", typeof prop === "boolean" && elem.getAttribute(name), "var-init"),
          detail = cc11001100_hook("detail", typeof prop === "boolean" ? getSetInput && getSetAttribute ? attr != null : // oldIE fabricates an empty string for missing boolean attributes
      // and conflates checked/selected into attroperties
      ruseDefault.test(name) ? elem[jQuery.camelCase("default-" + name)] : !!attr : // fetch an attribute node for properties not recognized as boolean
      elem.getAttributeNode(name), "var-init");
      return detail && detail.value !== false ? name.toLowerCase() : undefined;
    },
    set: function (elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
        // IE<8 needs the *property* name
        elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name); // Use defaultChecked and defaultSelected for oldIE
      } else {
        elem[jQuery.camelCase("default-" + name)] = cc11001100_hook("elem[jQuery.camelCase(\"default-\" + name)]", elem[name] = cc11001100_hook("elem[name]", true, "assign"), "assign");
      }

      return name;
    }
  }, "assign"); // fix oldIE value attroperty

  if (!getSetInput || !getSetAttribute) {
    jQuery.attrHooks.value = cc11001100_hook("jQuery.attrHooks.value", {
      get: function (elem, name) {
        var ret = cc11001100_hook("ret", elem.getAttributeNode(name), "var-init");
        return jQuery.nodeName(elem, "input") ? // Ignore the value *property* by using defaultValue
        elem.defaultValue : ret && ret.specified ? ret.value : undefined;
      },
      set: function (elem, value, name) {
        if (jQuery.nodeName(elem, "input")) {
          // Does not return so that setAttribute is also used
          elem.defaultValue = cc11001100_hook("elem.defaultValue", value, "assign");
        } else {
          // Use nodeHook if defined (#1954); otherwise setAttribute is fine
          return nodeHook && nodeHook.set(elem, value, name);
        }
      }
    }, "assign");
  } // IE6/7 do not support getting/setting some attributes with get/setAttribute


  if (!getSetAttribute) {
    // Use this for any attribute in IE6/7
    // This fixes almost every IE6/7 issue
    nodeHook = cc11001100_hook("nodeHook", jQuery.valHooks.button = cc11001100_hook("jQuery.valHooks.button", {
      get: function (elem, name) {
        var ret = cc11001100_hook("ret", elem.getAttributeNode(name), "var-init");
        return ret && (name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified) ? ret.value : undefined;
      },
      set: function (elem, value, name) {
        // Set the existing or create a new attribute node
        var ret = cc11001100_hook("ret", elem.getAttributeNode(name), "var-init");

        if (!ret) {
          elem.setAttributeNode(ret = cc11001100_hook("ret", elem.ownerDocument.createAttribute(name), "assign"));
        }

        ret.value = cc11001100_hook("ret.value", value += cc11001100_hook("value", "", "assign"), "assign"); // Break association with cloned elements by also using setAttribute (#9646)

        return name === "value" || value === elem.getAttribute(name) ? value : undefined;
      }
    }, "assign"), "assign"); // Set contenteditable to false on removals(#10429)
    // Setting to empty string throws an error as an invalid value

    jQuery.attrHooks.contenteditable = cc11001100_hook("jQuery.attrHooks.contenteditable", {
      get: cc11001100_hook("get", nodeHook.get, "object-key-init"),
      set: function (elem, value, name) {
        nodeHook.set(elem, value === "" ? false : value, name);
      }
    }, "assign"); // Set width and height to auto instead of 0 on empty string( Bug #8150 )
    // This is for removals

    jQuery.each(["width", "height"], function (i, name) {
      jQuery.attrHooks[name] = cc11001100_hook("jQuery.attrHooks[name]", jQuery.extend(jQuery.attrHooks[name], {
        set: function (elem, value) {
          if (value === "") {
            elem.setAttribute(name, "auto");
            return value;
          }
        }
      }), "assign");
    });
  } // Some attributes require a special call on IE
  // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx


  if (!jQuery.support.hrefNormalized) {
    jQuery.each(["href", "src", "width", "height"], function (i, name) {
      jQuery.attrHooks[name] = cc11001100_hook("jQuery.attrHooks[name]", jQuery.extend(jQuery.attrHooks[name], {
        get: function (elem) {
          var ret = cc11001100_hook("ret", elem.getAttribute(name, 2), "var-init");
          return ret == null ? undefined : ret;
        }
      }), "assign");
    }); // href/src property should get the full normalized URL (#10299/#12915)

    jQuery.each(["href", "src"], function (i, name) {
      jQuery.propHooks[name] = cc11001100_hook("jQuery.propHooks[name]", {
        get: function (elem) {
          return elem.getAttribute(name, 4);
        }
      }, "assign");
    });
  }

  if (!jQuery.support.style) {
    jQuery.attrHooks.style = cc11001100_hook("jQuery.attrHooks.style", {
      get: function (elem) {
        // Return undefined in the case of empty string
        // Note: IE uppercases css property names, but if we were to .toLowerCase()
        // .cssText, that would destroy case senstitivity in URL's, like in "background"
        return elem.style.cssText || undefined;
      },
      set: function (elem, value) {
        return elem.style.cssText = cc11001100_hook("elem.style.cssText", value + "", "assign");
      }
    }, "assign");
  } // Safari mis-reports the default selected property of an option
  // Accessing the parent's selectedIndex property fixes it


  if (!jQuery.support.optSelected) {
    jQuery.propHooks.selected = cc11001100_hook("jQuery.propHooks.selected", jQuery.extend(jQuery.propHooks.selected, {
      get: function (elem) {
        var parent = cc11001100_hook("parent", elem.parentNode, "var-init");

        if (parent) {
          parent.selectedIndex; // Make sure that it also works with optgroups, see #5701

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }

        return null;
      }
    }), "assign");
  } // IE6/7 call enctype encoding


  if (!jQuery.support.enctype) {
    jQuery.propFix.enctype = cc11001100_hook("jQuery.propFix.enctype", "encoding", "assign");
  } // Radios and checkboxes getter/setter


  if (!jQuery.support.checkOn) {
    jQuery.each(["radio", "checkbox"], function () {
      jQuery.valHooks[this] = cc11001100_hook("jQuery.valHooks[this]", {
        get: function (elem) {
          // Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
          return elem.getAttribute("value") === null ? "on" : elem.value;
        }
      }, "assign");
    });
  }

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = cc11001100_hook("jQuery.valHooks[this]", jQuery.extend(jQuery.valHooks[this], {
      set: function (elem, value) {
        if (jQuery.isArray(value)) {
          return elem.checked = cc11001100_hook("elem.checked", jQuery.inArray(jQuery(elem).val(), value) >= 0, "assign");
        }
      }
    }), "assign");
  });
  var rformElems = cc11001100_hook("rformElems", /^(?:input|select|textarea)$/i, "var-init"),
      rkeyEvent = cc11001100_hook("rkeyEvent", /^key/, "var-init"),
      rmouseEvent = cc11001100_hook("rmouseEvent", /^(?:mouse|contextmenu)|click/, "var-init"),
      rfocusMorph = cc11001100_hook("rfocusMorph", /^(?:focusinfocus|focusoutblur)$/, "var-init"),
      rtypenamespace = cc11001100_hook("rtypenamespace", /^([^.]*)(?:\.(.+)|)$/, "var-init");

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = cc11001100_hook("jQuery.event", {
    global: {},
    add: function (elem, types, handler, data, selector) {
      var tmp,
          events,
          t,
          handleObjIn,
          special,
          eventHandle,
          handleObj,
          handlers,
          type,
          namespaces,
          origType,
          elemData = cc11001100_hook("elemData", jQuery._data(elem), "var-init"); // Don't attach events to noData or text/comment nodes (but allow plain objects)

      if (!elemData) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = cc11001100_hook("handleObjIn", handler, "assign");
        handler = cc11001100_hook("handler", handleObjIn.handler, "assign");
        selector = cc11001100_hook("selector", handleObjIn.selector, "assign");
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = cc11001100_hook("handler.guid", jQuery.guid++, "assign");
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = cc11001100_hook("events", elemData.events, "assign"))) {
        events = cc11001100_hook("events", elemData.events = cc11001100_hook("elemData.events", {}, "assign"), "assign");
      }

      if (!(eventHandle = cc11001100_hook("eventHandle", elemData.handle, "assign"))) {
        eventHandle = cc11001100_hook("eventHandle", elemData.handle = cc11001100_hook("elemData.handle", function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
        }, "assign"), "assign"); // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events

        eventHandle.elem = cc11001100_hook("eventHandle.elem", elem, "assign");
      } // Handle multiple events separated by a space
      // jQuery(...).bind("mouseover mouseout", fn);


      types = cc11001100_hook("types", (types || "").match(core_rnotwhite) || [""], "assign");
      t = cc11001100_hook("t", types.length, "assign");

      while (t--) {
        tmp = cc11001100_hook("tmp", rtypenamespace.exec(types[t]) || [], "assign");
        type = cc11001100_hook("type", origType = cc11001100_hook("origType", tmp[1], "assign"), "assign");
        namespaces = cc11001100_hook("namespaces", (tmp[2] || "").split(".").sort(), "assign"); // If event changes its type, use the special event handlers for the changed type

        special = cc11001100_hook("special", jQuery.event.special[type] || {}, "assign"); // If selector defined, determine special event api type, otherwise given type

        type = cc11001100_hook("type", (selector ? special.delegateType : special.bindType) || type, "assign"); // Update special based on newly reset type

        special = cc11001100_hook("special", jQuery.event.special[type] || {}, "assign"); // handleObj is passed to all event handlers

        handleObj = cc11001100_hook("handleObj", jQuery.extend({
          type: cc11001100_hook("type", type, "object-key-init"),
          origType: cc11001100_hook("origType", origType, "object-key-init"),
          data: cc11001100_hook("data", data, "object-key-init"),
          handler: cc11001100_hook("handler", handler, "object-key-init"),
          guid: cc11001100_hook("guid", handler.guid, "object-key-init"),
          selector: cc11001100_hook("selector", selector, "object-key-init"),
          needsContext: cc11001100_hook("needsContext", selector && jQuery.expr.match.needsContext.test(selector), "object-key-init"),
          namespace: cc11001100_hook("namespace", namespaces.join("."), "object-key-init")
        }, handleObjIn), "assign"); // Init the event handler queue if we're the first

        if (!(handlers = cc11001100_hook("handlers", events[type], "assign"))) {
          handlers = cc11001100_hook("handlers", events[type] = cc11001100_hook("events[type]", [], "assign"), "assign");
          handlers.delegateCount = cc11001100_hook("handlers.delegateCount", 0, "assign"); // Only use addEventListener/attachEvent if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            // Bind the global event handler to the element
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle, false);
            } else if (elem.attachEvent) {
              elem.attachEvent("on" + type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = cc11001100_hook("handleObj.handler.guid", handler.guid, "assign");
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = cc11001100_hook("jQuery.event.global[type]", true, "assign");
      } // Nullify elem to prevent memory leaks in IE


      elem = cc11001100_hook("elem", null, "assign");
    },
    // Detach an event or set of events from an element
    remove: function (elem, types, handler, selector, mappedTypes) {
      var j,
          handleObj,
          tmp,
          origCount,
          t,
          events,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = cc11001100_hook("elemData", jQuery.hasData(elem) && jQuery._data(elem), "var-init");

      if (!elemData || !(events = cc11001100_hook("events", elemData.events, "assign"))) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = cc11001100_hook("types", (types || "").match(core_rnotwhite) || [""], "assign");
      t = cc11001100_hook("t", types.length, "assign");

      while (t--) {
        tmp = cc11001100_hook("tmp", rtypenamespace.exec(types[t]) || [], "assign");
        type = cc11001100_hook("type", origType = cc11001100_hook("origType", tmp[1], "assign"), "assign");
        namespaces = cc11001100_hook("namespaces", (tmp[2] || "").split(".").sort(), "assign"); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = cc11001100_hook("special", jQuery.event.special[type] || {}, "assign");
        type = cc11001100_hook("type", (selector ? special.delegateType : special.bindType) || type, "assign");
        handlers = cc11001100_hook("handlers", events[type] || [], "assign");
        tmp = cc11001100_hook("tmp", tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), "assign"); // Remove matching events

        origCount = cc11001100_hook("origCount", j = cc11001100_hook("j", handlers.length, "assign"), "assign");

        while (j--) {
          handleObj = cc11001100_hook("handleObj", handlers[j], "assign");

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        delete elemData.handle; // removeData also checks for emptiness and clears the expando if empty
        // so use it instead of delete

        jQuery._removeData(elem, "events");
      }
    },
    trigger: function (event, data, elem, onlyHandlers) {
      var handle,
          ontype,
          cur,
          bubbleType,
          special,
          tmp,
          i,
          eventPath = cc11001100_hook("eventPath", [elem || document], "var-init"),
          type = cc11001100_hook("type", core_hasOwn.call(event, "type") ? event.type : event, "var-init"),
          namespaces = cc11001100_hook("namespaces", core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [], "var-init");
      cur = cc11001100_hook("cur", tmp = cc11001100_hook("tmp", elem = cc11001100_hook("elem", elem || document, "assign"), "assign"), "assign"); // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") >= 0) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = cc11001100_hook("namespaces", type.split("."), "assign");
        type = cc11001100_hook("type", namespaces.shift(), "assign");
        namespaces.sort();
      }

      ontype = cc11001100_hook("ontype", type.indexOf(":") < 0 && "on" + type, "assign"); // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = cc11001100_hook("event", event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event), "assign");
      event.isTrigger = cc11001100_hook("event.isTrigger", true, "assign");
      event.namespace = cc11001100_hook("event.namespace", namespaces.join("."), "assign");
      event.namespace_re = cc11001100_hook("event.namespace_re", event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, "assign"); // Clean up the event in case it is being reused

      event.result = cc11001100_hook("event.result", undefined, "assign");

      if (!event.target) {
        event.target = cc11001100_hook("event.target", elem, "assign");
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = cc11001100_hook("data", data == null ? [event] : jQuery.makeArray(data, [event]), "assign"); // Allow special events to draw outside the lines

      special = cc11001100_hook("special", jQuery.event.special[type] || {}, "assign");

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = cc11001100_hook("bubbleType", special.delegateType || type, "assign");

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cc11001100_hook("cur", cur.parentNode, "assign");
        }

        for (; cur; cur = cc11001100_hook("cur", cur.parentNode, "assign")) {
          eventPath.push(cur);
          tmp = cc11001100_hook("tmp", cur, "assign");
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = cc11001100_hook("i", 0, "assign");

      while ((cur = cc11001100_hook("cur", eventPath[i++], "assign")) && !event.isPropagationStopped()) {
        event.type = cc11001100_hook("event.type", i > 1 ? bubbleType : special.bindType || type, "assign"); // jQuery handler

        handle = cc11001100_hook("handle", (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle"), "assign");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = cc11001100_hook("handle", ontype && cur[ontype], "assign");

        if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
          event.preventDefault();
        }
      }

      event.type = cc11001100_hook("event.type", type, "assign"); // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(elem.ownerDocument, data) === false) && !(type === "click" && jQuery.nodeName(elem, "a")) && jQuery.acceptData(elem)) {
          // Call a native DOM method on the target with the same name name as the event.
          // Can't use an .isFunction() check here because IE6/7 fails that test.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && elem[type] && !jQuery.isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = cc11001100_hook("tmp", elem[ontype], "assign");

            if (tmp) {
              elem[ontype] = cc11001100_hook("elem[ontype]", null, "assign");
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = cc11001100_hook("jQuery.event.triggered", type, "assign");

            try {
              elem[type]();
            } catch (e) {// IE<9 dies on focus/blur to hidden element (#1486,#12518)
              // only reproducible on winXP IE8 native, not IE9 in IE8 mode
            }

            jQuery.event.triggered = cc11001100_hook("jQuery.event.triggered", undefined, "assign");

            if (tmp) {
              elem[ontype] = cc11001100_hook("elem[ontype]", tmp, "assign");
            }
          }
        }
      }

      return event.result;
    },
    dispatch: function (event) {
      // Make a writable jQuery.Event from the native event object
      event = cc11001100_hook("event", jQuery.event.fix(event), "assign");
      var i,
          ret,
          handleObj,
          matched,
          j,
          handlerQueue = cc11001100_hook("handlerQueue", [], "var-init"),
          args = cc11001100_hook("args", core_slice.call(arguments), "var-init"),
          handlers = cc11001100_hook("handlers", (jQuery._data(this, "events") || {})[event.type] || [], "var-init"),
          special = cc11001100_hook("special", jQuery.event.special[event.type] || {}, "var-init"); // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = cc11001100_hook("args[0]", event, "assign");
      event.delegateTarget = cc11001100_hook("event.delegateTarget", this, "assign"); // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = cc11001100_hook("handlerQueue", jQuery.event.handlers.call(this, event, handlers), "assign"); // Run delegates first; they may want to stop propagation beneath us

      i = cc11001100_hook("i", 0, "assign");

      while ((matched = cc11001100_hook("matched", handlerQueue[i++], "assign")) && !event.isPropagationStopped()) {
        event.currentTarget = cc11001100_hook("event.currentTarget", matched.elem, "assign");
        j = cc11001100_hook("j", 0, "assign");

        while ((handleObj = cc11001100_hook("handleObj", matched.handlers[j++], "assign")) && !event.isImmediatePropagationStopped()) {
          // Triggered event must either 1) have no namespace, or
          // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
          if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
            event.handleObj = cc11001100_hook("event.handleObj", handleObj, "assign");
            event.data = cc11001100_hook("event.data", handleObj.data, "assign");
            ret = cc11001100_hook("ret", ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), "assign");

            if (ret !== undefined) {
              if ((event.result = cc11001100_hook("event.result", ret, "assign")) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function (event, handlers) {
      var sel,
          handleObj,
          matches,
          i,
          handlerQueue = cc11001100_hook("handlerQueue", [], "var-init"),
          delegateCount = cc11001100_hook("delegateCount", handlers.delegateCount, "var-init"),
          cur = cc11001100_hook("cur", event.target, "var-init"); // Find delegate handlers
      // Black-hole SVG <use> instance trees (#13180)
      // Avoid non-left-click bubbling in Firefox (#3861)

      if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
        for (; cur != this; cur = cc11001100_hook("cur", cur.parentNode || this, "assign")) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
            matches = cc11001100_hook("matches", [], "assign");

            for (i = cc11001100_hook("i", 0, "assign"); i < delegateCount; i++) {
              handleObj = cc11001100_hook("handleObj", handlers[i], "assign"); // Don't conflict with Object.prototype properties (#13203)

              sel = cc11001100_hook("sel", handleObj.selector + " ", "assign");

              if (matches[sel] === undefined) {
                matches[sel] = cc11001100_hook("matches[sel]", handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length, "assign");
              }

              if (matches[sel]) {
                matches.push(handleObj);
              }
            }

            if (matches.length) {
              handlerQueue.push({
                elem: cc11001100_hook("elem", cur, "object-key-init"),
                handlers: cc11001100_hook("handlers", matches, "object-key-init")
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: cc11001100_hook("elem", this, "object-key-init"),
          handlers: cc11001100_hook("handlers", handlers.slice(delegateCount), "object-key-init")
        });
      }

      return handlerQueue;
    },
    fix: function (event) {
      if (event[jQuery.expando]) {
        return event;
      } // Create a writable copy of the event object and normalize some properties


      var i,
          prop,
          copy,
          type = cc11001100_hook("type", event.type, "var-init"),
          originalEvent = cc11001100_hook("originalEvent", event, "var-init"),
          fixHook = cc11001100_hook("fixHook", this.fixHooks[type], "var-init");

      if (!fixHook) {
        this.fixHooks[type] = cc11001100_hook("this.fixHooks[type]", fixHook = cc11001100_hook("fixHook", rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}, "assign"), "assign");
      }

      copy = cc11001100_hook("copy", fixHook.props ? this.props.concat(fixHook.props) : this.props, "assign");
      event = cc11001100_hook("event", new jQuery.Event(originalEvent), "assign");
      i = cc11001100_hook("i", copy.length, "assign");

      while (i--) {
        prop = cc11001100_hook("prop", copy[i], "assign");
        event[prop] = cc11001100_hook("event[prop]", originalEvent[prop], "assign");
      } // Support: IE<9
      // Fix target property (#1925)


      if (!event.target) {
        event.target = cc11001100_hook("event.target", originalEvent.srcElement || document, "assign");
      } // Support: Chrome 23+, Safari?
      // Target should not be a text node (#504, #13143)


      if (event.target.nodeType === 3) {
        event.target = cc11001100_hook("event.target", event.target.parentNode, "assign");
      } // Support: IE<9
      // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)


      event.metaKey = cc11001100_hook("event.metaKey", !!event.metaKey, "assign");
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    // Includes some event props shared by KeyEvent and MouseEvent
    props: cc11001100_hook("props", "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), "object-key-init"),
    fixHooks: {},
    keyHooks: {
      props: cc11001100_hook("props", "char charCode key keyCode".split(" "), "object-key-init"),
      filter: function (event, original) {
        // Add which for key events
        if (event.which == null) {
          event.which = cc11001100_hook("event.which", original.charCode != null ? original.charCode : original.keyCode, "assign");
        }

        return event;
      }
    },
    mouseHooks: {
      props: cc11001100_hook("props", "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), "object-key-init"),
      filter: function (event, original) {
        var body,
            eventDoc,
            doc,
            button = cc11001100_hook("button", original.button, "var-init"),
            fromElement = cc11001100_hook("fromElement", original.fromElement, "var-init"); // Calculate pageX/Y if missing and clientX/Y available

        if (event.pageX == null && original.clientX != null) {
          eventDoc = cc11001100_hook("eventDoc", event.target.ownerDocument || document, "assign");
          doc = cc11001100_hook("doc", eventDoc.documentElement, "assign");
          body = cc11001100_hook("body", eventDoc.body, "assign");
          event.pageX = cc11001100_hook("event.pageX", original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), "assign");
          event.pageY = cc11001100_hook("event.pageY", original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0), "assign");
        } // Add relatedTarget, if necessary


        if (!event.relatedTarget && fromElement) {
          event.relatedTarget = cc11001100_hook("event.relatedTarget", fromElement === event.target ? original.toElement : fromElement, "assign");
        } // Add which for click: 1 === left; 2 === middle; 3 === right
        // Note: button is not normalized, so don't use it


        if (!event.which && button !== undefined) {
          event.which = cc11001100_hook("event.which", button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0, "assign");
        }

        return event;
      }
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: cc11001100_hook("noBubble", true, "object-key-init")
      },
      click: {
        // For checkbox, fire native event so checked state will be right
        trigger: function () {
          if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
            this.click();
            return false;
          }
        }
      },
      focus: {
        // Fire native event if possible so blur/focus sequence is correct
        trigger: function () {
          if (this !== document.activeElement && this.focus) {
            try {
              this.focus();
              return false;
            } catch (e) {// Support: IE<9
              // If we error on focus to hidden element (#1486, #12518),
              // let .trigger() run the handlers
            }
          }
        },
        delegateType: cc11001100_hook("delegateType", "focusin", "object-key-init")
      },
      blur: {
        trigger: function () {
          if (this === document.activeElement && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: cc11001100_hook("delegateType", "focusout", "object-key-init")
      },
      beforeunload: {
        postDispatch: function (event) {
          // Even when returnValue equals to undefined Firefox will still show alert
          if (event.result !== undefined) {
            event.originalEvent.returnValue = cc11001100_hook("event.originalEvent.returnValue", event.result, "assign");
          }
        }
      }
    },
    simulate: function (type, elem, event, bubble) {
      // Piggyback on a donor event to simulate a different one.
      // Fake originalEvent to avoid donor's stopPropagation, but if the
      // simulated event prevents default then we do the same on the donor.
      var e = cc11001100_hook("e", jQuery.extend(new jQuery.Event(), event, {
        type: cc11001100_hook("type", type, "object-key-init"),
        isSimulated: cc11001100_hook("isSimulated", true, "object-key-init"),
        originalEvent: {}
      }), "var-init");

      if (bubble) {
        jQuery.event.trigger(e, null, elem);
      } else {
        jQuery.event.dispatch.call(elem, e);
      }

      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  }, "assign");
  jQuery.removeEvent = cc11001100_hook("jQuery.removeEvent", document.removeEventListener ? function (elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle, false);
    }
  } : function (elem, type, handle) {
    var name = cc11001100_hook("name", "on" + type, "var-init");

    if (elem.detachEvent) {
      // #8545, #7054, preventing memory leaks for custom events in IE6-8
      // detachEvent needed property on element, by name of that event, to properly expose it to GC
      if (typeof elem[name] === core_strundefined) {
        elem[name] = cc11001100_hook("elem[name]", null, "assign");
      }

      elem.detachEvent(name, handle);
    }
  }, "assign");
  jQuery.Event = cc11001100_hook("jQuery.Event", function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = cc11001100_hook("this.originalEvent", src, "assign");
      this.type = cc11001100_hook("this.type", src.type, "assign"); // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse, "assign"); // Event type
    } else {
      this.type = cc11001100_hook("this.type", src, "assign");
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = cc11001100_hook("this.timeStamp", src && src.timeStamp || jQuery.now(), "assign"); // Mark it as fixed

    this[jQuery.expando] = cc11001100_hook("this[jQuery.expando]", true, "assign");
  }, "assign"); // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html

  jQuery.Event.prototype = cc11001100_hook("jQuery.Event.prototype", {
    isDefaultPrevented: cc11001100_hook("isDefaultPrevented", returnFalse, "object-key-init"),
    isPropagationStopped: cc11001100_hook("isPropagationStopped", returnFalse, "object-key-init"),
    isImmediatePropagationStopped: cc11001100_hook("isImmediatePropagationStopped", returnFalse, "object-key-init"),
    preventDefault: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", returnTrue, "assign");

      if (!e) {
        return;
      } // If preventDefault exists, run it on the original event


      if (e.preventDefault) {
        e.preventDefault(); // Support: IE
        // Otherwise set the returnValue property of the original event to false
      } else {
        e.returnValue = cc11001100_hook("e.returnValue", false, "assign");
      }
    },
    stopPropagation: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isPropagationStopped = cc11001100_hook("this.isPropagationStopped", returnTrue, "assign");

      if (!e) {
        return;
      } // If stopPropagation exists, run it on the original event


      if (e.stopPropagation) {
        e.stopPropagation();
      } // Support: IE
      // Set the cancelBubble property of the original event to true


      e.cancelBubble = cc11001100_hook("e.cancelBubble", true, "assign");
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = cc11001100_hook("this.isImmediatePropagationStopped", returnTrue, "assign");
      this.stopPropagation();
    }
  }, "assign"); // Create mouseenter/leave events using mouseover/out and event-time checks

  jQuery.each({
    mouseenter: cc11001100_hook("mouseenter", "mouseover", "object-key-init"),
    mouseleave: cc11001100_hook("mouseleave", "mouseout", "object-key-init")
  }, function (orig, fix) {
    jQuery.event.special[orig] = cc11001100_hook("jQuery.event.special[orig]", {
      delegateType: cc11001100_hook("delegateType", fix, "object-key-init"),
      bindType: cc11001100_hook("bindType", fix, "object-key-init"),
      handle: function (event) {
        var ret,
            target = cc11001100_hook("target", this, "var-init"),
            related = cc11001100_hook("related", event.relatedTarget, "var-init"),
            handleObj = cc11001100_hook("handleObj", event.handleObj, "var-init"); // For mousenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = cc11001100_hook("event.type", handleObj.origType, "assign");
          ret = cc11001100_hook("ret", handleObj.handler.apply(this, arguments), "assign");
          event.type = cc11001100_hook("event.type", fix, "assign");
        }

        return ret;
      }
    }, "assign");
  }); // IE submit delegation

  if (!jQuery.support.submitBubbles) {
    jQuery.event.special.submit = cc11001100_hook("jQuery.event.special.submit", {
      setup: function () {
        // Only need this for delegated form submit events
        if (jQuery.nodeName(this, "form")) {
          return false;
        } // Lazy-add a submit handler when a descendant form may potentially be submitted


        jQuery.event.add(this, "click._submit keypress._submit", function (e) {
          // Node name check avoids a VML-related crash in IE (#9807)
          var elem = cc11001100_hook("elem", e.target, "var-init"),
              form = cc11001100_hook("form", jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined, "var-init");

          if (form && !jQuery._data(form, "submitBubbles")) {
            jQuery.event.add(form, "submit._submit", function (event) {
              event._submit_bubble = cc11001100_hook("event._submit_bubble", true, "assign");
            });

            jQuery._data(form, "submitBubbles", true);
          }
        }); // return undefined since we don't need an event listener
      },
      postDispatch: function (event) {
        // If form was submitted by the user, bubble the event up the tree
        if (event._submit_bubble) {
          delete event._submit_bubble;

          if (this.parentNode && !event.isTrigger) {
            jQuery.event.simulate("submit", this.parentNode, event, true);
          }
        }
      },
      teardown: function () {
        // Only need this for delegated form submit events
        if (jQuery.nodeName(this, "form")) {
          return false;
        } // Remove delegated handlers; cleanData eventually reaps submit handlers attached above


        jQuery.event.remove(this, "._submit");
      }
    }, "assign");
  } // IE change delegation and checkbox/radio fix


  if (!jQuery.support.changeBubbles) {
    jQuery.event.special.change = cc11001100_hook("jQuery.event.special.change", {
      setup: function () {
        if (rformElems.test(this.nodeName)) {
          // IE doesn't fire change on a check/radio until blur; trigger it on click
          // after a propertychange. Eat the blur-change in special.change.handle.
          // This still fires onchange a second time for check/radio after blur.
          if (this.type === "checkbox" || this.type === "radio") {
            jQuery.event.add(this, "propertychange._change", function (event) {
              if (event.originalEvent.propertyName === "checked") {
                this._just_changed = cc11001100_hook("this._just_changed", true, "assign");
              }
            });
            jQuery.event.add(this, "click._change", function (event) {
              if (this._just_changed && !event.isTrigger) {
                this._just_changed = cc11001100_hook("this._just_changed", false, "assign");
              } // Allow triggered, simulated change events (#11500)


              jQuery.event.simulate("change", this, event, true);
            });
          }

          return false;
        } // Delegated event; lazy-add a change handler on descendant inputs


        jQuery.event.add(this, "beforeactivate._change", function (e) {
          var elem = cc11001100_hook("elem", e.target, "var-init");

          if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
            jQuery.event.add(elem, "change._change", function (event) {
              if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                jQuery.event.simulate("change", this.parentNode, event, true);
              }
            });

            jQuery._data(elem, "changeBubbles", true);
          }
        });
      },
      handle: function (event) {
        var elem = cc11001100_hook("elem", event.target, "var-init"); // Swallow native change events from checkbox/radio, we already triggered them above

        if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
          return event.handleObj.handler.apply(this, arguments);
        }
      },
      teardown: function () {
        jQuery.event.remove(this, "._change");
        return !rformElems.test(this.nodeName);
      }
    }, "assign");
  } // Create "bubbling" focus and blur events


  if (!jQuery.support.focusinBubbles) {
    jQuery.each({
      focus: cc11001100_hook("focus", "focusin", "object-key-init"),
      blur: cc11001100_hook("blur", "focusout", "object-key-init")
    }, function (orig, fix) {
      // Attach a single capturing handler while someone wants focusin/focusout
      var attaches = cc11001100_hook("attaches", 0, "var-init"),
          handler = function (event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
      };

      jQuery.event.special[fix] = cc11001100_hook("jQuery.event.special[fix]", {
        setup: function () {
          if (attaches++ === 0) {
            document.addEventListener(orig, handler, true);
          }
        },
        teardown: function () {
          if (--attaches === 0) {
            document.removeEventListener(orig, handler, true);
          }
        }
      }, "assign");
    });
  }

  jQuery.fn.extend({
    on: function (types, selector, data, fn,
    /*INTERNAL*/
    one) {
      var type, origFn; // Types can be a map of types/handlers

      if (typeof types === "object") {
        // ( types-Object, selector, data )
        if (typeof selector !== "string") {
          // ( types-Object, data )
          data = cc11001100_hook("data", data || selector, "assign");
          selector = cc11001100_hook("selector", undefined, "assign");
        }

        for (type in types) {
          this.on(type, selector, data, types[type], one);
        }

        return this;
      }

      if (data == null && fn == null) {
        // ( types, fn )
        fn = cc11001100_hook("fn", selector, "assign");
        data = cc11001100_hook("data", selector = cc11001100_hook("selector", undefined, "assign"), "assign");
      } else if (fn == null) {
        if (typeof selector === "string") {
          // ( types, selector, fn )
          fn = cc11001100_hook("fn", data, "assign");
          data = cc11001100_hook("data", undefined, "assign");
        } else {
          // ( types, data, fn )
          fn = cc11001100_hook("fn", data, "assign");
          data = cc11001100_hook("data", selector, "assign");
          selector = cc11001100_hook("selector", undefined, "assign");
        }
      }

      if (fn === false) {
        fn = cc11001100_hook("fn", returnFalse, "assign");
      } else if (!fn) {
        return this;
      }

      if (one === 1) {
        origFn = cc11001100_hook("origFn", fn, "assign");
        fn = cc11001100_hook("fn", function (event) {
          // Can use an empty set, since event contains the info
          jQuery().off(event);
          return origFn.apply(this, arguments);
        }, "assign"); // Use same guid so caller can remove using origFn

        fn.guid = cc11001100_hook("fn.guid", origFn.guid || (origFn.guid = cc11001100_hook("origFn.guid", jQuery.guid++, "assign")), "assign");
      }

      return this.each(function () {
        jQuery.event.add(this, types, fn, data, selector);
      });
    },
    one: function (types, selector, data, fn) {
      return this.on(types, selector, data, fn, 1);
    },
    off: function (types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = cc11001100_hook("handleObj", types.handleObj, "assign");
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (typeof types === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = cc11001100_hook("fn", selector, "assign");
        selector = cc11001100_hook("selector", undefined, "assign");
      }

      if (fn === false) {
        fn = cc11001100_hook("fn", returnFalse, "assign");
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    },
    bind: function (types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function (types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function (selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function (selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    trigger: function (type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function (type, data) {
      var elem = cc11001100_hook("elem", this[0], "var-init");

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  /*!
   * Sizzle CSS Selector Engine
   * Copyright 2012 jQuery Foundation and other contributors
   * Released under the MIT license
   * http://sizzlejs.com/
   */

  (function (window, undefined) {
    var i,
        cachedruns,
        Expr,
        getText,
        isXML,
        compile,
        hasDuplicate,
        outermostContext,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsXML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        sortOrder,
        // Instance-specific data
    expando = cc11001100_hook("expando", "sizzle" + -new Date(), "var-init"),
        preferredDoc = cc11001100_hook("preferredDoc", window.document, "var-init"),
        support = cc11001100_hook("support", {}, "var-init"),
        dirruns = cc11001100_hook("dirruns", 0, "var-init"),
        done = cc11001100_hook("done", 0, "var-init"),
        classCache = cc11001100_hook("classCache", createCache(), "var-init"),
        tokenCache = cc11001100_hook("tokenCache", createCache(), "var-init"),
        compilerCache = cc11001100_hook("compilerCache", createCache(), "var-init"),
        // General-purpose constants
    strundefined = cc11001100_hook("strundefined", typeof undefined, "var-init"),
        MAX_NEGATIVE = cc11001100_hook("MAX_NEGATIVE", 1 << 31, "var-init"),
        // Array methods
    arr = cc11001100_hook("arr", [], "var-init"),
        pop = cc11001100_hook("pop", arr.pop, "var-init"),
        push = cc11001100_hook("push", arr.push, "var-init"),
        slice = cc11001100_hook("slice", arr.slice, "var-init"),
        // Use a stripped-down indexOf if we can't use a native one
    indexOf = cc11001100_hook("indexOf", arr.indexOf || function (elem) {
      var i = cc11001100_hook("i", 0, "var-init"),
          len = cc11001100_hook("len", this.length, "var-init");

      for (; i < len; i++) {
        if (this[i] === elem) {
          return i;
        }
      }

      return -1;
    }, "var-init"),
        // Regular expressions
    // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = cc11001100_hook("whitespace", "[\\x20\\t\\r\\n\\f]", "var-init"),
        // http://www.w3.org/TR/css3-syntax/#characters
    characterEncoding = cc11001100_hook("characterEncoding", "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", "var-init"),
        // Loosely modeled on CSS identifier characters
    // An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
    // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    identifier = cc11001100_hook("identifier", characterEncoding.replace("w", "w#"), "var-init"),
        // Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
    operators = cc11001100_hook("operators", "([*^$|!~]?=)", "var-init"),
        attributes = cc11001100_hook("attributes", "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]", "var-init"),
        // Prefer arguments quoted,
    //   then not containing pseudos/brackets,
    //   then attribute selectors/non-parenthetical expressions,
    //   then anything else
    // These preferences are here to reduce the number of selectors
    //   needing tokenize in the PSEUDO preFilter
    pseudos = cc11001100_hook("pseudos", ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)", "var-init"),
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rtrim = cc11001100_hook("rtrim", new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), "var-init"),
        rcomma = cc11001100_hook("rcomma", new RegExp("^" + whitespace + "*," + whitespace + "*"), "var-init"),
        rcombinators = cc11001100_hook("rcombinators", new RegExp("^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*"), "var-init"),
        rpseudo = cc11001100_hook("rpseudo", new RegExp(pseudos), "var-init"),
        ridentifier = cc11001100_hook("ridentifier", new RegExp("^" + identifier + "$"), "var-init"),
        matchExpr = cc11001100_hook("matchExpr", {
      "ID": cc11001100_hook("ID", new RegExp("^#(" + characterEncoding + ")"), "object-key-init"),
      "CLASS": cc11001100_hook("CLASS", new RegExp("^\\.(" + characterEncoding + ")"), "object-key-init"),
      "NAME": cc11001100_hook("NAME", new RegExp("^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]"), "object-key-init"),
      "TAG": cc11001100_hook("TAG", new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"), "object-key-init"),
      "ATTR": cc11001100_hook("ATTR", new RegExp("^" + attributes), "object-key-init"),
      "PSEUDO": cc11001100_hook("PSEUDO", new RegExp("^" + pseudos), "object-key-init"),
      "CHILD": cc11001100_hook("CHILD", new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"), "object-key-init"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": cc11001100_hook("needsContext", new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i"), "object-key-init")
    }, "var-init"),
        rsibling = cc11001100_hook("rsibling", /[\x20\t\r\n\f]*[+~]/, "var-init"),
        rnative = cc11001100_hook("rnative", /^[^{]+\{\s*\[native code/, "var-init"),
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = cc11001100_hook("rquickExpr", /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, "var-init"),
        rinputs = cc11001100_hook("rinputs", /^(?:input|select|textarea|button)$/i, "var-init"),
        rheader = cc11001100_hook("rheader", /^h\d$/i, "var-init"),
        rescape = cc11001100_hook("rescape", /'|\\/g, "var-init"),
        rattributeQuotes = cc11001100_hook("rattributeQuotes", /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, "var-init"),
        // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = cc11001100_hook("runescape", /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, "var-init"),
        funescape = function (_, escaped) {
      var high = cc11001100_hook("high", "0x" + escaped - 0x10000, "var-init"); // NaN means non-codepoint

      return high !== high ? escaped : // BMP codepoint
      high < 0 ? String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
      String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    }; // Use a stripped-down slice if we can't use a native one


    try {
      slice.call(preferredDoc.documentElement.childNodes, 0)[0].nodeType;
    } catch (e) {
      slice = cc11001100_hook("slice", function (i) {
        var elem,
            results = cc11001100_hook("results", [], "var-init");

        while (elem = cc11001100_hook("elem", this[i++], "assign")) {
          results.push(elem);
        }

        return results;
      }, "assign");
    }
    /**
     * For feature detection
     * @param {Function} fn The function to test for native support
     */


    function isNative(fn) {
      cc11001100_hook("fn", fn, "function-parameter");
      return rnative.test(fn + "");
    }
    /**
     * Create key-value caches of limited size
     * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var cache,
          keys = cc11001100_hook("keys", [], "var-init");
      return cache = cc11001100_hook("cache", function (key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key += cc11001100_hook("key", " ", "assign")) > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key] = cc11001100_hook("cache[key]", value, "assign");
      }, "assign");
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      cc11001100_hook("fn", fn, "function-parameter");
      fn[expando] = cc11001100_hook("fn[expando]", true, "assign");
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created div and expects a boolean result
     */


    function assert(fn) {
      cc11001100_hook("fn", fn, "function-parameter");
      var div = cc11001100_hook("div", document.createElement("div"), "var-init");

      try {
        return fn(div);
      } catch (e) {
        return false;
      } finally {
        // release memory in IE
        div = cc11001100_hook("div", null, "assign");
      }
    }

    function Sizzle(selector, context, results, seed) {
      cc11001100_hook("selector", selector, "function-parameter");
      cc11001100_hook("context", context, "function-parameter");
      cc11001100_hook("results", results, "function-parameter");
      cc11001100_hook("seed", seed, "function-parameter");
      var match, elem, m, nodeType, // QSA vars
      i, groups, old, nid, newContext, newSelector;

      if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
        setDocument(context);
      }

      context = cc11001100_hook("context", context || document, "assign");
      results = cc11001100_hook("results", results || [], "assign");

      if (!selector || typeof selector !== "string") {
        return results;
      }

      if ((nodeType = cc11001100_hook("nodeType", context.nodeType, "assign")) !== 1 && nodeType !== 9) {
        return [];
      }

      if (!documentIsXML && !seed) {
        // Shortcuts
        if (match = cc11001100_hook("match", rquickExpr.exec(selector), "assign")) {
          // Speed-up: Sizzle("#ID")
          if (m = cc11001100_hook("m", match[1], "assign")) {
            if (nodeType === 9) {
              elem = cc11001100_hook("elem", context.getElementById(m), "assign"); // Check parentNode to catch when Blackberry 4.6 returns
              // nodes that are no longer in the document #6963

              if (elem && elem.parentNode) {
                // Handle the case where IE, Opera, and Webkit return items
                // by name instead of ID
                if (elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } else {
                return results;
              }
            } else {
              // Context is not a document
              if (context.ownerDocument && (elem = cc11001100_hook("elem", context.ownerDocument.getElementById(m), "assign")) && contains(context, elem) && elem.id === m) {
                results.push(elem);
                return results;
              }
            } // Speed-up: Sizzle("TAG")

          } else if (match[2]) {
            push.apply(results, slice.call(context.getElementsByTagName(selector), 0));
            return results; // Speed-up: Sizzle(".CLASS")
          } else if ((m = cc11001100_hook("m", match[3], "assign")) && support.getByClassName && context.getElementsByClassName) {
            push.apply(results, slice.call(context.getElementsByClassName(m), 0));
            return results;
          }
        } // QSA path


        if (support.qsa && !rbuggyQSA.test(selector)) {
          old = cc11001100_hook("old", true, "assign");
          nid = cc11001100_hook("nid", expando, "assign");
          newContext = cc11001100_hook("newContext", context, "assign");
          newSelector = cc11001100_hook("newSelector", nodeType === 9 && selector, "assign"); // qSA works strangely on Element-rooted queries
          // We can work around this by specifying an extra ID on the root
          // and working up from there (Thanks to Andrew Dupont for the technique)
          // IE 8 doesn't work on object elements

          if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
            groups = cc11001100_hook("groups", tokenize(selector), "assign");

            if (old = cc11001100_hook("old", context.getAttribute("id"), "assign")) {
              nid = cc11001100_hook("nid", old.replace(rescape, "\\$&"), "assign");
            } else {
              context.setAttribute("id", nid);
            }

            nid = cc11001100_hook("nid", "[id='" + nid + "'] ", "assign");
            i = cc11001100_hook("i", groups.length, "assign");

            while (i--) {
              groups[i] = cc11001100_hook("groups[i]", nid + toSelector(groups[i]), "assign");
            }

            newContext = cc11001100_hook("newContext", rsibling.test(selector) && context.parentNode || context, "assign");
            newSelector = cc11001100_hook("newSelector", groups.join(","), "assign");
          }

          if (newSelector) {
            try {
              push.apply(results, slice.call(newContext.querySelectorAll(newSelector), 0));
              return results;
            } catch (qsaError) {} finally {
              if (!old) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Detect xml
     * @param {Element|Object} elem An element or a document
     */


    isXML = cc11001100_hook("isXML", Sizzle.isXML = cc11001100_hook("Sizzle.isXML", function (elem) {
      // documentElement is verified for cases where it doesn't yet exist
      // (such as loading iframes in IE - #4833)
      var documentElement = cc11001100_hook("documentElement", elem && (elem.ownerDocument || elem).documentElement, "var-init");
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    }, "assign"), "assign");
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */

    setDocument = cc11001100_hook("setDocument", Sizzle.setDocument = cc11001100_hook("Sizzle.setDocument", function (node) {
      var doc = cc11001100_hook("doc", node ? node.ownerDocument || node : preferredDoc, "var-init"); // If no document and documentElement is available, return

      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Set our document


      document = cc11001100_hook("document", doc, "assign");
      docElem = cc11001100_hook("docElem", doc.documentElement, "assign"); // Support tests

      documentIsXML = cc11001100_hook("documentIsXML", isXML(doc), "assign"); // Check if getElementsByTagName("*") returns only elements

      support.tagNameNoComments = cc11001100_hook("support.tagNameNoComments", assert(function (div) {
        div.appendChild(doc.createComment(""));
        return !div.getElementsByTagName("*").length;
      }), "assign"); // Check if attributes should be retrieved by attribute nodes

      support.attributes = cc11001100_hook("support.attributes", assert(function (div) {
        div.innerHTML = cc11001100_hook("div.innerHTML", "<select></select>", "assign");
        var type = cc11001100_hook("type", typeof div.lastChild.getAttribute("multiple"), "var-init"); // IE8 returns a string for some attributes even when not present

        return type !== "boolean" && type !== "string";
      }), "assign"); // Check if getElementsByClassName can be trusted

      support.getByClassName = cc11001100_hook("support.getByClassName", assert(function (div) {
        // Opera can't find a second classname (in 9.6)
        div.innerHTML = cc11001100_hook("div.innerHTML", "<div class='hidden e'></div><div class='hidden'></div>", "assign");

        if (!div.getElementsByClassName || !div.getElementsByClassName("e").length) {
          return false;
        } // Safari 3.2 caches class attributes and doesn't catch changes


        div.lastChild.className = cc11001100_hook("div.lastChild.className", "e", "assign");
        return div.getElementsByClassName("e").length === 2;
      }), "assign"); // Check if getElementById returns elements by name
      // Check if getElementsByName privileges form controls or returns elements by ID

      support.getByName = cc11001100_hook("support.getByName", assert(function (div) {
        // Inject content
        div.id = cc11001100_hook("div.id", expando + 0, "assign");
        div.innerHTML = cc11001100_hook("div.innerHTML", "<a name='" + expando + "'></a><div name='" + expando + "'></div>", "assign");
        docElem.insertBefore(div, docElem.firstChild); // Test

        var pass = cc11001100_hook("pass", doc.getElementsByName && // buggy browsers will return fewer than the correct 2
        doc.getElementsByName(expando).length === 2 + // buggy browsers will return more than the correct 0
        doc.getElementsByName(expando + 0).length, "var-init");
        support.getIdNotName = cc11001100_hook("support.getIdNotName", !doc.getElementById(expando), "assign"); // Cleanup

        docElem.removeChild(div);
        return pass;
      }), "assign"); // IE6/7 return modified attributes

      Expr.attrHandle = cc11001100_hook("Expr.attrHandle", assert(function (div) {
        div.innerHTML = cc11001100_hook("div.innerHTML", "<a href='#'></a>", "assign");
        return div.firstChild && typeof div.firstChild.getAttribute !== strundefined && div.firstChild.getAttribute("href") === "#";
      }) ? {} : {
        "href": function (elem) {
          return elem.getAttribute("href", 2);
        },
        "type": function (elem) {
          return elem.getAttribute("type");
        }
      }, "assign"); // ID find and filter

      if (support.getIdNotName) {
        Expr.find["ID"] = cc11001100_hook("Expr.find[\"ID\"]", function (id, context) {
          if (typeof context.getElementById !== strundefined && !documentIsXML) {
            var m = cc11001100_hook("m", context.getElementById(id), "var-init"); // Check parentNode to catch when Blackberry 4.6 returns
            // nodes that are no longer in the document #6963

            return m && m.parentNode ? [m] : [];
          }
        }, "assign");
        Expr.filter["ID"] = cc11001100_hook("Expr.filter[\"ID\"]", function (id) {
          var attrId = cc11001100_hook("attrId", id.replace(runescape, funescape), "var-init");
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        }, "assign");
      } else {
        Expr.find["ID"] = cc11001100_hook("Expr.find[\"ID\"]", function (id, context) {
          if (typeof context.getElementById !== strundefined && !documentIsXML) {
            var m = cc11001100_hook("m", context.getElementById(id), "var-init");
            return m ? m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ? [m] : undefined : [];
          }
        }, "assign");
        Expr.filter["ID"] = cc11001100_hook("Expr.filter[\"ID\"]", function (id) {
          var attrId = cc11001100_hook("attrId", id.replace(runescape, funescape), "var-init");
          return function (elem) {
            var node = cc11001100_hook("node", typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id"), "var-init");
            return node && node.value === attrId;
          };
        }, "assign");
      } // Tag


      Expr.find["TAG"] = cc11001100_hook("Expr.find[\"TAG\"]", support.tagNameNoComments ? function (tag, context) {
        if (typeof context.getElementsByTagName !== strundefined) {
          return context.getElementsByTagName(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = cc11001100_hook("tmp", [], "var-init"),
            i = cc11001100_hook("i", 0, "var-init"),
            results = cc11001100_hook("results", context.getElementsByTagName(tag), "var-init"); // Filter out possible comments

        if (tag === "*") {
          while (elem = cc11001100_hook("elem", results[i++], "assign")) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }, "assign"); // Name

      Expr.find["NAME"] = cc11001100_hook("Expr.find[\"NAME\"]", support.getByName && function (tag, context) {
        if (typeof context.getElementsByName !== strundefined) {
          return context.getElementsByName(name);
        }
      }, "assign"); // Class

      Expr.find["CLASS"] = cc11001100_hook("Expr.find[\"CLASS\"]", support.getByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== strundefined && !documentIsXML) {
          return context.getElementsByClassName(className);
        }
      }, "assign"); // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)

      rbuggyMatches = cc11001100_hook("rbuggyMatches", [], "assign"); // qSa(:focus) reports false when true (Chrome 21),
      // no need to also add to buggyMatches since matches checks buggyQSA
      // A support test would require too much code (would include document ready)

      rbuggyQSA = cc11001100_hook("rbuggyQSA", [":focus"], "assign");

      if (support.qsa = cc11001100_hook("support.qsa", isNative(doc.querySelectorAll), "assign")) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (div) {
          // Select is set to empty string on purpose
          // This is to test IE's treatment of not explictly
          // setting a boolean content attribute,
          // since its presence should be enough
          // http://bugs.jquery.com/ticket/12359
          div.innerHTML = cc11001100_hook("div.innerHTML", "<select><option selected=''></option></select>", "assign"); // IE8 - Some boolean attributes are not treated correctly

          if (!div.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!div.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
        });
        assert(function (div) {
          // Opera 10-12/IE8 - ^= $= *= and empty values
          // Should not select anything
          div.innerHTML = cc11001100_hook("div.innerHTML", "<input type='hidden' i=''/>", "assign");

          if (div.querySelectorAll("[i^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:\"\"|'')");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (!div.querySelectorAll(":enabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Opera 10-11 does not throw on post-comma invalid pseudos


          div.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = cc11001100_hook("support.matchesSelector", isNative(matches = cc11001100_hook("matches", docElem.matchesSelector || docElem.mozMatchesSelector || docElem.webkitMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector, "assign")), "assign")) {
        assert(function (div) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = cc11001100_hook("support.disconnectedMatch", matches.call(div, "div"), "assign"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(div, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = cc11001100_hook("rbuggyQSA", new RegExp(rbuggyQSA.join("|")), "assign");
      rbuggyMatches = cc11001100_hook("rbuggyMatches", new RegExp(rbuggyMatches.join("|")), "assign"); // Element contains another
      // Purposefully does not implement inclusive descendent
      // As in, an element does not contain itself

      contains = cc11001100_hook("contains", isNative(docElem.contains) || docElem.compareDocumentPosition ? function (a, b) {
        var adown = cc11001100_hook("adown", a.nodeType === 9 ? a.documentElement : a, "var-init"),
            bup = cc11001100_hook("bup", b && b.parentNode, "var-init");
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = cc11001100_hook("b", b.parentNode, "assign")) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      }, "assign"); // Document order sorting

      sortOrder = cc11001100_hook("sortOrder", docElem.compareDocumentPosition ? function (a, b) {
        var compare;

        if (a === b) {
          hasDuplicate = cc11001100_hook("hasDuplicate", true, "assign");
          return 0;
        }

        if (compare = cc11001100_hook("compare", b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b), "assign")) {
          if (compare & 1 || a.parentNode && a.parentNode.nodeType === 11) {
            if (a === doc || contains(preferredDoc, a)) {
              return -1;
            }

            if (b === doc || contains(preferredDoc, b)) {
              return 1;
            }

            return 0;
          }

          return compare & 4 ? -1 : 1;
        }

        return a.compareDocumentPosition ? -1 : 1;
      } : function (a, b) {
        var cur,
            i = cc11001100_hook("i", 0, "var-init"),
            aup = cc11001100_hook("aup", a.parentNode, "var-init"),
            bup = cc11001100_hook("bup", b.parentNode, "var-init"),
            ap = cc11001100_hook("ap", [a], "var-init"),
            bp = cc11001100_hook("bp", [b], "var-init"); // Exit early if the nodes are identical

        if (a === b) {
          hasDuplicate = cc11001100_hook("hasDuplicate", true, "assign");
          return 0; // Parentless nodes are either documents or disconnected
        } else if (!aup || !bup) {
          return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = cc11001100_hook("cur", a, "assign");

        while (cur = cc11001100_hook("cur", cur.parentNode, "assign")) {
          ap.unshift(cur);
        }

        cur = cc11001100_hook("cur", b, "assign");

        while (cur = cc11001100_hook("cur", cur.parentNode, "assign")) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      }, "assign"); // Always assume the presence of duplicates if sort doesn't
      // pass them to our comparison function (as in Google Chrome).

      hasDuplicate = cc11001100_hook("hasDuplicate", false, "assign");
      [0, 0].sort(sortOrder);
      support.detectDuplicates = cc11001100_hook("support.detectDuplicates", hasDuplicate, "assign");
      return document;
    }, "assign"), "assign");
    Sizzle.matches = cc11001100_hook("Sizzle.matches", function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    }, "assign");
    Sizzle.matchesSelector = cc11001100_hook("Sizzle.matchesSelector", function (elem, expr) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      } // Make sure that attribute selectors are quoted


      expr = cc11001100_hook("expr", expr.replace(rattributeQuotes, "='$1']"), "assign"); // rbuggyQSA always contains :focus, so no need for an existence check

      if (support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr)) {
        try {
          var ret = cc11001100_hook("ret", matches.call(elem, expr), "var-init"); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    }, "assign");
    Sizzle.contains = cc11001100_hook("Sizzle.contains", function (context, elem) {
      // Set document vars if needed
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }

      return contains(context, elem);
    }, "assign");
    Sizzle.attr = cc11001100_hook("Sizzle.attr", function (elem, name) {
      var val; // Set document vars if needed

      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      if (!documentIsXML) {
        name = cc11001100_hook("name", name.toLowerCase(), "assign");
      }

      if (val = cc11001100_hook("val", Expr.attrHandle[name], "assign")) {
        return val(elem);
      }

      if (documentIsXML || support.attributes) {
        return elem.getAttribute(name);
      }

      return ((val = cc11001100_hook("val", elem.getAttributeNode(name), "assign")) || elem.getAttribute(name)) && elem[name] === true ? name : val && val.specified ? val.value : null;
    }, "assign");
    Sizzle.error = cc11001100_hook("Sizzle.error", function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    }, "assign"); // Document sorting and removing duplicates

    Sizzle.uniqueSort = cc11001100_hook("Sizzle.uniqueSort", function (results) {
      var elem,
          duplicates = cc11001100_hook("duplicates", [], "var-init"),
          i = cc11001100_hook("i", 1, "var-init"),
          j = cc11001100_hook("j", 0, "var-init"); // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = cc11001100_hook("hasDuplicate", !support.detectDuplicates, "assign");
      results.sort(sortOrder);

      if (hasDuplicate) {
        for (; elem = cc11001100_hook("elem", results[i], "assign"); i++) {
          if (elem === results[i - 1]) {
            j = cc11001100_hook("j", duplicates.push(i), "assign");
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      }

      return results;
    }, "assign");

    function siblingCheck(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var cur = cc11001100_hook("cur", b && a, "var-init"),
          diff = cc11001100_hook("diff", cur && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE), "var-init"); // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cc11001100_hook("cur", cur.nextSibling, "assign")) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    } // Returns a function to use in pseudos for input types


    function createInputPseudo(type) {
      cc11001100_hook("type", type, "function-parameter");
      return function (elem) {
        var name = cc11001100_hook("name", elem.nodeName.toLowerCase(), "var-init");
        return name === "input" && elem.type === type;
      };
    } // Returns a function to use in pseudos for buttons


    function createButtonPseudo(type) {
      cc11001100_hook("type", type, "function-parameter");
      return function (elem) {
        var name = cc11001100_hook("name", elem.nodeName.toLowerCase(), "var-init");
        return (name === "input" || name === "button") && elem.type === type;
      };
    } // Returns a function to use in pseudos for positionals


    function createPositionalPseudo(fn) {
      cc11001100_hook("fn", fn, "function-parameter");
      return markFunction(function (argument) {
        argument = cc11001100_hook("argument", +argument, "assign");
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = cc11001100_hook("matchIndexes", fn([], seed.length, argument), "var-init"),
              i = cc11001100_hook("i", matchIndexes.length, "var-init"); // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = cc11001100_hook("j", matchIndexes[i], "assign")]) {
              seed[j] = cc11001100_hook("seed[j]", !(matches[j] = cc11001100_hook("matches[j]", seed[j], "assign")), "assign");
            }
          }
        });
      });
    }
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = cc11001100_hook("getText", Sizzle.getText = cc11001100_hook("Sizzle.getText", function (elem) {
      var node,
          ret = cc11001100_hook("ret", "", "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          nodeType = cc11001100_hook("nodeType", elem.nodeType, "var-init");

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        for (; node = cc11001100_hook("node", elem[i], "assign"); i++) {
          // Do not traverse comment nodes
          ret += cc11001100_hook("ret", getText(node), "assign");
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (see #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = cc11001100_hook("elem", elem.firstChild, "assign"); elem; elem = cc11001100_hook("elem", elem.nextSibling, "assign")) {
            ret += cc11001100_hook("ret", getText(elem), "assign");
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    }, "assign"), "assign");
    Expr = cc11001100_hook("Expr", Sizzle.selectors = cc11001100_hook("Sizzle.selectors", {
      // Can be adjusted by the user
      cacheLength: cc11001100_hook("cacheLength", 50, "object-key-init"),
      createPseudo: cc11001100_hook("createPseudo", markFunction, "object-key-init"),
      match: cc11001100_hook("match", matchExpr, "object-key-init"),
      find: {},
      relative: {
        ">": {
          dir: cc11001100_hook("dir", "parentNode", "object-key-init"),
          first: cc11001100_hook("first", true, "object-key-init")
        },
        " ": {
          dir: cc11001100_hook("dir", "parentNode", "object-key-init")
        },
        "+": {
          dir: cc11001100_hook("dir", "previousSibling", "object-key-init"),
          first: cc11001100_hook("first", true, "object-key-init")
        },
        "~": {
          dir: cc11001100_hook("dir", "previousSibling", "object-key-init")
        }
      },
      preFilter: {
        "ATTR": function (match) {
          match[1] = cc11001100_hook("match[1]", match[1].replace(runescape, funescape), "assign"); // Move the given value to match[3] whether quoted or unquoted

          match[3] = cc11001100_hook("match[3]", (match[4] || match[5] || "").replace(runescape, funescape), "assign");

          if (match[2] === "~=") {
            match[3] = cc11001100_hook("match[3]", " " + match[3] + " ", "assign");
          }

          return match.slice(0, 4);
        },
        "CHILD": function (match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = cc11001100_hook("match[1]", match[1].toLowerCase(), "assign");

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = cc11001100_hook("match[4]", +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd")), "assign");
            match[5] = cc11001100_hook("match[5]", +(match[7] + match[8] || match[3] === "odd"), "assign"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function (match) {
          var excess,
              unquoted = cc11001100_hook("unquoted", !match[5] && match[2], "var-init");

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[4]) {
            match[2] = cc11001100_hook("match[2]", match[4], "assign"); // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = cc11001100_hook("excess", tokenize(unquoted, true), "assign")) && ( // advance to the next closing parenthesis
          excess = cc11001100_hook("excess", unquoted.indexOf(")", unquoted.length - excess) - unquoted.length, "assign"))) {
            // excess is a negative index
            match[0] = cc11001100_hook("match[0]", match[0].slice(0, excess), "assign");
            match[2] = cc11001100_hook("match[2]", unquoted.slice(0, excess), "assign");
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function (nodeName) {
          if (nodeName === "*") {
            return function () {
              return true;
            };
          }

          nodeName = cc11001100_hook("nodeName", nodeName.replace(runescape, funescape).toLowerCase(), "assign");
          return function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function (className) {
          var pattern = cc11001100_hook("pattern", classCache[className + " "], "var-init");
          return pattern || (pattern = cc11001100_hook("pattern", new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)"), "assign")) && classCache(className, function (elem) {
            return pattern.test(elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function (name, operator, check) {
          return function (elem) {
            var result = cc11001100_hook("result", Sizzle.attr(elem, name), "var-init");

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += cc11001100_hook("result", "", "assign");
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function (type, what, argument, first, last) {
          var simple = cc11001100_hook("simple", type.slice(0, 3) !== "nth", "var-init"),
              forward = cc11001100_hook("forward", type.slice(-4) !== "last", "var-init"),
              ofType = cc11001100_hook("ofType", what === "of-type", "var-init");
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, context, xml) {
            var cache,
                outerCache,
                node,
                diff,
                nodeIndex,
                start,
                dir = cc11001100_hook("dir", simple !== forward ? "nextSibling" : "previousSibling", "var-init"),
                parent = cc11001100_hook("parent", elem.parentNode, "var-init"),
                name = cc11001100_hook("name", ofType && elem.nodeName.toLowerCase(), "var-init"),
                useCache = cc11001100_hook("useCache", !xml && !ofType, "var-init");

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = cc11001100_hook("node", elem, "assign");

                  while (node = cc11001100_hook("node", node[dir], "assign")) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = cc11001100_hook("start", dir = cc11001100_hook("dir", type === "only" && !start && "nextSibling", "assign"), "assign");
                }

                return true;
              }

              start = cc11001100_hook("start", [forward ? parent.firstChild : parent.lastChild], "assign"); // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                outerCache = cc11001100_hook("outerCache", parent[expando] || (parent[expando] = cc11001100_hook("parent[expando]", {}, "assign")), "assign");
                cache = cc11001100_hook("cache", outerCache[type] || [], "assign");
                nodeIndex = cc11001100_hook("nodeIndex", cache[0] === dirruns && cache[1], "assign");
                diff = cc11001100_hook("diff", cache[0] === dirruns && cache[2], "assign");
                node = cc11001100_hook("node", nodeIndex && parent.childNodes[nodeIndex], "assign");

                while (node = cc11001100_hook("node", ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = cc11001100_hook("diff", nodeIndex = cc11001100_hook("nodeIndex", 0, "assign"), "assign")) || start.pop(), "assign")) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    outerCache[type] = cc11001100_hook("outerCache[type]", [dirruns, nodeIndex, diff], "assign");
                    break;
                  }
                } // Use previously-cached element index if available

              } else if (useCache && (cache = cc11001100_hook("cache", (elem[expando] || (elem[expando] = cc11001100_hook("elem[expando]", {}, "assign")))[type], "assign")) && cache[0] === dirruns) {
                diff = cc11001100_hook("diff", cache[1], "assign"); // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
              } else {
                // Use the same loop as above to seek `elem` from the start
                while (node = cc11001100_hook("node", ++nodeIndex && node && node[dir] || (diff = cc11001100_hook("diff", nodeIndex = cc11001100_hook("nodeIndex", 0, "assign"), "assign")) || start.pop(), "assign")) {
                  if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                    // Cache the index of each encountered element
                    if (useCache) {
                      (node[expando] || (node[expando] = cc11001100_hook("node[expando]", {}, "assign")))[type] = cc11001100_hook("(node[expando] || (node[expando] = {}))[type]", [dirruns, diff], "assign");
                    }

                    if (node === elem) {
                      break;
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= cc11001100_hook("diff", last, "assign");
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function (pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = cc11001100_hook("fn", Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo), "var-init"); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = cc11001100_hook("args", [pseudo, pseudo, "", argument], "assign");
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = cc11001100_hook("matched", fn(seed, argument), "var-init"),
                  i = cc11001100_hook("i", matched.length, "var-init");

              while (i--) {
                idx = cc11001100_hook("idx", indexOf.call(seed, matched[i]), "assign");
                seed[idx] = cc11001100_hook("seed[idx]", !(matches[idx] = cc11001100_hook("matches[idx]", matched[i], "assign")), "assign");
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": cc11001100_hook("not", markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = cc11001100_hook("input", [], "var-init"),
              results = cc11001100_hook("results", [], "var-init"),
              matcher = cc11001100_hook("matcher", compile(selector.replace(rtrim, "$1")), "var-init");
          return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
            var elem,
                unmatched = cc11001100_hook("unmatched", matcher(seed, null, xml, []), "var-init"),
                i = cc11001100_hook("i", seed.length, "var-init"); // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = cc11001100_hook("elem", unmatched[i], "assign")) {
                seed[i] = cc11001100_hook("seed[i]", !(matches[i] = cc11001100_hook("matches[i]", elem, "assign")), "assign");
              }
            }
          }) : function (elem, context, xml) {
            input[0] = cc11001100_hook("input[0]", elem, "assign");
            matcher(input, null, xml, results);
            return !results.pop();
          };
        }), "object-key-init"),
        "has": cc11001100_hook("has", markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }), "object-key-init"),
        "contains": cc11001100_hook("contains", markFunction(function (text) {
          return function (elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }), "object-key-init"),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": cc11001100_hook("lang", markFunction(function (lang) {
          // lang value must be a valid identifider
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = cc11001100_hook("lang", lang.replace(runescape, funescape).toLowerCase(), "assign");
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = cc11001100_hook("elemLang", documentIsXML ? elem.getAttribute("xml:lang") || elem.getAttribute("lang") : elem.lang, "assign")) {
                elemLang = cc11001100_hook("elemLang", elemLang.toLowerCase(), "assign");
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = cc11001100_hook("elem", elem.parentNode, "assign")) && elem.nodeType === 1);

            return false;
          };
        }), "object-key-init"),
        // Miscellaneous
        "target": function (elem) {
          var hash = cc11001100_hook("hash", window.location && window.location.hash, "var-init");
          return hash && hash.slice(1) === elem.id;
        },
        "root": function (elem) {
          return elem === docElem;
        },
        "focus": function (elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": function (elem) {
          return elem.disabled === false;
        },
        "disabled": function (elem) {
          return elem.disabled === true;
        },
        "checked": function (elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = cc11001100_hook("nodeName", elem.nodeName.toLowerCase(), "var-init");
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function (elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function (elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
          //   not comment, processing instructions, or others
          // Thanks to Diego Perini for the nodeName shortcut
          //   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
          for (elem = cc11001100_hook("elem", elem.firstChild, "assign"); elem; elem = cc11001100_hook("elem", elem.nextSibling, "assign")) {
            if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
              return false;
            }
          }

          return true;
        },
        "parent": function (elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function (elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function (elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function (elem) {
          var name = cc11001100_hook("name", elem.nodeName.toLowerCase(), "var-init");
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function (elem) {
          var attr; // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
          // use getAttribute instead to test this case

          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = cc11001100_hook("attr", elem.getAttribute("type"), "assign")) == null || attr.toLowerCase() === elem.type);
        },
        // Position-in-collection
        "first": cc11001100_hook("first", createPositionalPseudo(function () {
          return [0];
        }), "object-key-init"),
        "last": cc11001100_hook("last", createPositionalPseudo(function (matchIndexes, length) {
          return [length - 1];
        }), "object-key-init"),
        "eq": cc11001100_hook("eq", createPositionalPseudo(function (matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }), "object-key-init"),
        "even": cc11001100_hook("even", createPositionalPseudo(function (matchIndexes, length) {
          var i = cc11001100_hook("i", 0, "var-init");

          for (; i < length; i += cc11001100_hook("i", 2, "assign")) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }), "object-key-init"),
        "odd": cc11001100_hook("odd", createPositionalPseudo(function (matchIndexes, length) {
          var i = cc11001100_hook("i", 1, "var-init");

          for (; i < length; i += cc11001100_hook("i", 2, "assign")) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }), "object-key-init"),
        "lt": cc11001100_hook("lt", createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = cc11001100_hook("i", argument < 0 ? argument + length : argument, "var-init");

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }), "object-key-init"),
        "gt": cc11001100_hook("gt", createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = cc11001100_hook("i", argument < 0 ? argument + length : argument, "var-init");

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }), "object-key-init")
      }
    }, "assign"), "assign"); // Add button/input type pseudos

    for (i in {
      radio: cc11001100_hook("radio", true, "object-key-init"),
      checkbox: cc11001100_hook("checkbox", true, "object-key-init"),
      file: cc11001100_hook("file", true, "object-key-init"),
      password: cc11001100_hook("password", true, "object-key-init"),
      image: cc11001100_hook("image", true, "object-key-init")
    }) {
      Expr.pseudos[i] = cc11001100_hook("Expr.pseudos[i]", createInputPseudo(i), "assign");
    }

    for (i in {
      submit: cc11001100_hook("submit", true, "object-key-init"),
      reset: cc11001100_hook("reset", true, "object-key-init")
    }) {
      Expr.pseudos[i] = cc11001100_hook("Expr.pseudos[i]", createButtonPseudo(i), "assign");
    }

    function tokenize(selector, parseOnly) {
      cc11001100_hook("selector", selector, "function-parameter");
      cc11001100_hook("parseOnly", parseOnly, "function-parameter");
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = cc11001100_hook("cached", tokenCache[selector + " "], "var-init");

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = cc11001100_hook("soFar", selector, "assign");
      groups = cc11001100_hook("groups", [], "assign");
      preFilters = cc11001100_hook("preFilters", Expr.preFilter, "assign");

      while (soFar) {
        // Comma and first run
        if (!matched || (match = cc11001100_hook("match", rcomma.exec(soFar), "assign"))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = cc11001100_hook("soFar", soFar.slice(match[0].length) || soFar, "assign");
          }

          groups.push(tokens = cc11001100_hook("tokens", [], "assign"));
        }

        matched = cc11001100_hook("matched", false, "assign"); // Combinators

        if (match = cc11001100_hook("match", rcombinators.exec(soFar), "assign")) {
          matched = cc11001100_hook("matched", match.shift(), "assign");
          tokens.push({
            value: cc11001100_hook("value", matched, "object-key-init"),
            // Cast descendant combinators to space
            type: cc11001100_hook("type", match[0].replace(rtrim, " "), "object-key-init")
          });
          soFar = cc11001100_hook("soFar", soFar.slice(matched.length), "assign");
        } // Filters


        for (type in Expr.filter) {
          if ((match = cc11001100_hook("match", matchExpr[type].exec(soFar), "assign")) && (!preFilters[type] || (match = cc11001100_hook("match", preFilters[type](match), "assign")))) {
            matched = cc11001100_hook("matched", match.shift(), "assign");
            tokens.push({
              value: cc11001100_hook("value", matched, "object-key-init"),
              type: cc11001100_hook("type", type, "object-key-init"),
              matches: cc11001100_hook("matches", match, "object-key-init")
            });
            soFar = cc11001100_hook("soFar", soFar.slice(matched.length), "assign");
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    }

    function toSelector(tokens) {
      cc11001100_hook("tokens", tokens, "function-parameter");
      var i = cc11001100_hook("i", 0, "var-init"),
          len = cc11001100_hook("len", tokens.length, "var-init"),
          selector = cc11001100_hook("selector", "", "var-init");

      for (; i < len; i++) {
        selector += cc11001100_hook("selector", tokens[i].value, "assign");
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      cc11001100_hook("matcher", matcher, "function-parameter");
      cc11001100_hook("combinator", combinator, "function-parameter");
      cc11001100_hook("base", base, "function-parameter");
      var dir = cc11001100_hook("dir", combinator.dir, "var-init"),
          checkNonElements = cc11001100_hook("checkNonElements", base && dir === "parentNode", "var-init"),
          doneName = cc11001100_hook("doneName", done++, "var-init");
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = cc11001100_hook("elem", elem[dir], "assign")) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var data,
            cache,
            outerCache,
            dirkey = cc11001100_hook("dirkey", dirruns + " " + doneName, "var-init"); // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching

        if (xml) {
          while (elem = cc11001100_hook("elem", elem[dir], "assign")) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = cc11001100_hook("elem", elem[dir], "assign")) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = cc11001100_hook("outerCache", elem[expando] || (elem[expando] = cc11001100_hook("elem[expando]", {}, "assign")), "assign");

              if ((cache = cc11001100_hook("cache", outerCache[dir], "assign")) && cache[0] === dirkey) {
                if ((data = cc11001100_hook("data", cache[1], "assign")) === true || data === cachedruns) {
                  return data === true;
                }
              } else {
                cache = cc11001100_hook("cache", outerCache[dir] = cc11001100_hook("outerCache[dir]", [dirkey], "assign"), "assign");
                cache[1] = cc11001100_hook("cache[1]", matcher(elem, context, xml) || cachedruns, "assign");

                if (cache[1] === true) {
                  return true;
                }
              }
            }
          }
        }
      };
    }

    function elementMatcher(matchers) {
      cc11001100_hook("matchers", matchers, "function-parameter");
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = cc11001100_hook("i", matchers.length, "var-init");

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function condense(unmatched, map, filter, context, xml) {
      cc11001100_hook("unmatched", unmatched, "function-parameter");
      cc11001100_hook("map", map, "function-parameter");
      cc11001100_hook("filter", filter, "function-parameter");
      cc11001100_hook("context", context, "function-parameter");
      cc11001100_hook("xml", xml, "function-parameter");
      var elem,
          newUnmatched = cc11001100_hook("newUnmatched", [], "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          len = cc11001100_hook("len", unmatched.length, "var-init"),
          mapped = cc11001100_hook("mapped", map != null, "var-init");

      for (; i < len; i++) {
        if (elem = cc11001100_hook("elem", unmatched[i], "assign")) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      cc11001100_hook("preFilter", preFilter, "function-parameter");
      cc11001100_hook("selector", selector, "function-parameter");
      cc11001100_hook("matcher", matcher, "function-parameter");
      cc11001100_hook("postFilter", postFilter, "function-parameter");
      cc11001100_hook("postFinder", postFinder, "function-parameter");
      cc11001100_hook("postSelector", postSelector, "function-parameter");

      if (postFilter && !postFilter[expando]) {
        postFilter = cc11001100_hook("postFilter", setMatcher(postFilter), "assign");
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = cc11001100_hook("postFinder", setMatcher(postFinder, postSelector), "assign");
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = cc11001100_hook("preMap", [], "var-init"),
            postMap = cc11001100_hook("postMap", [], "var-init"),
            preexisting = cc11001100_hook("preexisting", results.length, "var-init"),
            // Get initial elements from seed or context
        elems = cc11001100_hook("elems", seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), "var-init"),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = cc11001100_hook("matcherIn", preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, "var-init"),
            matcherOut = cc11001100_hook("matcherOut", matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn, "var-init"); // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = cc11001100_hook("temp", condense(matcherOut, postMap), "assign");
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = cc11001100_hook("i", temp.length, "assign");

          while (i--) {
            if (elem = cc11001100_hook("elem", temp[i], "assign")) {
              matcherOut[postMap[i]] = cc11001100_hook("matcherOut[postMap[i]]", !(matcherIn[postMap[i]] = cc11001100_hook("matcherIn[postMap[i]]", elem, "assign")), "assign");
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = cc11001100_hook("temp", [], "assign");
              i = cc11001100_hook("i", matcherOut.length, "assign");

              while (i--) {
                if (elem = cc11001100_hook("elem", matcherOut[i], "assign")) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = cc11001100_hook("matcherIn[i]", elem, "assign"));
                }
              }

              postFinder(null, matcherOut = cc11001100_hook("matcherOut", [], "assign"), temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = cc11001100_hook("i", matcherOut.length, "assign");

            while (i--) {
              if ((elem = cc11001100_hook("elem", matcherOut[i], "assign")) && (temp = cc11001100_hook("temp", postFinder ? indexOf.call(seed, elem) : preMap[i], "assign")) > -1) {
                seed[temp] = cc11001100_hook("seed[temp]", !(results[temp] = cc11001100_hook("results[temp]", elem, "assign")), "assign");
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = cc11001100_hook("matcherOut", condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), "assign");

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      cc11001100_hook("tokens", tokens, "function-parameter");
      var checkContext,
          matcher,
          j,
          len = cc11001100_hook("len", tokens.length, "var-init"),
          leadingRelative = cc11001100_hook("leadingRelative", Expr.relative[tokens[0].type], "var-init"),
          implicitRelative = cc11001100_hook("implicitRelative", leadingRelative || Expr.relative[" "], "var-init"),
          i = cc11001100_hook("i", leadingRelative ? 1 : 0, "var-init"),
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = cc11001100_hook("matchContext", addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true), "var-init"),
          matchAnyContext = cc11001100_hook("matchAnyContext", addCombinator(function (elem) {
        return indexOf.call(checkContext, elem) > -1;
      }, implicitRelative, true), "var-init"),
          matchers = cc11001100_hook("matchers", [function (elem, context, xml) {
        return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = cc11001100_hook("checkContext", context, "assign")).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
      }], "var-init");

      for (; i < len; i++) {
        if (matcher = cc11001100_hook("matcher", Expr.relative[tokens[i].type], "assign")) {
          matchers = cc11001100_hook("matchers", [addCombinator(elementMatcher(matchers), matcher)], "assign");
        } else {
          matcher = cc11001100_hook("matcher", Expr.filter[tokens[i].type].apply(null, tokens[i].matches), "assign"); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = cc11001100_hook("j", ++i, "assign");

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1)).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = cc11001100_hook("tokens", tokens.slice(j), "assign")), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      cc11001100_hook("elementMatchers", elementMatchers, "function-parameter");
      cc11001100_hook("setMatchers", setMatchers, "function-parameter");

      // A counter to specify which element is currently being matched
      var matcherCachedRuns = cc11001100_hook("matcherCachedRuns", 0, "var-init"),
          bySet = cc11001100_hook("bySet", setMatchers.length > 0, "var-init"),
          byElement = cc11001100_hook("byElement", elementMatchers.length > 0, "var-init"),
          superMatcher = function (seed, context, xml, results, expandContext) {
        var elem,
            j,
            matcher,
            setMatched = cc11001100_hook("setMatched", [], "var-init"),
            matchedCount = cc11001100_hook("matchedCount", 0, "var-init"),
            i = cc11001100_hook("i", "0", "var-init"),
            unmatched = cc11001100_hook("unmatched", seed && [], "var-init"),
            outermost = cc11001100_hook("outermost", expandContext != null, "var-init"),
            contextBackup = cc11001100_hook("contextBackup", outermostContext, "var-init"),
            // We must always have either seed elements or context
        elems = cc11001100_hook("elems", seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context), "var-init"),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = cc11001100_hook("dirrunsUnique", dirruns += cc11001100_hook("dirruns", contextBackup == null ? 1 : Math.random() || 0.1, "assign"), "var-init");

        if (outermost) {
          outermostContext = cc11001100_hook("outermostContext", context !== document && context, "assign");
          cachedruns = cc11001100_hook("cachedruns", matcherCachedRuns, "assign");
        } // Add elements passing elementMatchers directly to results
        // Keep `i` a string if there are no elements so `matchedCount` will be "00" below


        for (; (elem = cc11001100_hook("elem", elems[i], "assign")) != null; i++) {
          if (byElement && elem) {
            j = cc11001100_hook("j", 0, "assign");

            while (matcher = cc11001100_hook("matcher", elementMatchers[j++], "assign")) {
              if (matcher(elem, context, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = cc11001100_hook("dirruns", dirrunsUnique, "assign");
              cachedruns = cc11001100_hook("cachedruns", ++matcherCachedRuns, "assign");
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = cc11001100_hook("elem", !matcher && elem, "assign")) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // Apply set filters to unmatched elements


        matchedCount += cc11001100_hook("matchedCount", i, "assign");

        if (bySet && i !== matchedCount) {
          j = cc11001100_hook("j", 0, "assign");

          while (matcher = cc11001100_hook("matcher", setMatchers[j++], "assign")) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = cc11001100_hook("setMatched[i]", pop.call(results), "assign");
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = cc11001100_hook("setMatched", condense(setMatched), "assign");
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = cc11001100_hook("dirruns", dirrunsUnique, "assign");
          outermostContext = cc11001100_hook("outermostContext", contextBackup, "assign");
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = cc11001100_hook("compile", Sizzle.compile = cc11001100_hook("Sizzle.compile", function (selector, group
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = cc11001100_hook("setMatchers", [], "var-init"),
          elementMatchers = cc11001100_hook("elementMatchers", [], "var-init"),
          cached = cc11001100_hook("cached", compilerCache[selector + " "], "var-init");

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!group) {
          group = cc11001100_hook("group", tokenize(selector), "assign");
        }

        i = cc11001100_hook("i", group.length, "assign");

        while (i--) {
          cached = cc11001100_hook("cached", matcherFromTokens(group[i]), "assign");

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = cc11001100_hook("cached", compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), "assign");
      }

      return cached;
    }, "assign"), "assign");

    function multipleContexts(selector, contexts, results) {
      cc11001100_hook("selector", selector, "function-parameter");
      cc11001100_hook("contexts", contexts, "function-parameter");
      cc11001100_hook("results", results, "function-parameter");
      var i = cc11001100_hook("i", 0, "var-init"),
          len = cc11001100_hook("len", contexts.length, "var-init");

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function select(selector, context, results, seed) {
      cc11001100_hook("selector", selector, "function-parameter");
      cc11001100_hook("context", context, "function-parameter");
      cc11001100_hook("results", results, "function-parameter");
      cc11001100_hook("seed", seed, "function-parameter");
      var i,
          tokens,
          token,
          type,
          find,
          match = cc11001100_hook("match", tokenize(selector), "var-init");

      if (!seed) {
        // Try to minimize operations if there is only one group
        if (match.length === 1) {
          // Take a shortcut and set the context if the root selector is an ID
          tokens = cc11001100_hook("tokens", match[0] = cc11001100_hook("match[0]", match[0].slice(0), "assign"), "assign");

          if (tokens.length > 2 && (token = cc11001100_hook("token", tokens[0], "assign")).type === "ID" && context.nodeType === 9 && !documentIsXML && Expr.relative[tokens[1].type]) {
            context = cc11001100_hook("context", Expr.find["ID"](token.matches[0].replace(runescape, funescape), context)[0], "assign");

            if (!context) {
              return results;
            }

            selector = cc11001100_hook("selector", selector.slice(tokens.shift().value.length), "assign");
          } // Fetch a seed set for right-to-left matching


          i = cc11001100_hook("i", matchExpr["needsContext"].test(selector) ? 0 : tokens.length, "assign");

          while (i--) {
            token = cc11001100_hook("token", tokens[i], "assign"); // Abort if we hit a combinator

            if (Expr.relative[type = cc11001100_hook("type", token.type, "assign")]) {
              break;
            }

            if (find = cc11001100_hook("find", Expr.find[type], "assign")) {
              // Search, expanding context for leading sibling combinators
              if (seed = cc11001100_hook("seed", find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context), "assign")) {
                // If seed is empty or no tokens remain, we can return early
                tokens.splice(i, 1);
                selector = cc11001100_hook("selector", seed.length && toSelector(tokens), "assign");

                if (!selector) {
                  push.apply(results, slice.call(seed, 0));
                  return results;
                }

                break;
              }
            }
          }
        }
      } // Compile and execute a filtering function
      // Provide `match` to avoid retokenization if we modified the selector above


      compile(selector, match)(seed, context, documentIsXML, results, rsibling.test(selector));
      return results;
    } // Deprecated


    Expr.pseudos["nth"] = cc11001100_hook("Expr.pseudos[\"nth\"]", Expr.pseudos["eq"], "assign"); // Easy API for creating new setFilters

    function setFilters() {}

    Expr.filters = cc11001100_hook("Expr.filters", setFilters.prototype = cc11001100_hook("setFilters.prototype", Expr.pseudos, "assign"), "assign");
    Expr.setFilters = cc11001100_hook("Expr.setFilters", new setFilters(), "assign"); // Initialize with the default document

    setDocument(); // Override sizzle attribute retrieval

    Sizzle.attr = cc11001100_hook("Sizzle.attr", jQuery.attr, "assign");
    jQuery.find = cc11001100_hook("jQuery.find", Sizzle, "assign");
    jQuery.expr = cc11001100_hook("jQuery.expr", Sizzle.selectors, "assign");
    jQuery.expr[":"] = cc11001100_hook("jQuery.expr[\":\"]", jQuery.expr.pseudos, "assign");
    jQuery.unique = cc11001100_hook("jQuery.unique", Sizzle.uniqueSort, "assign");
    jQuery.text = cc11001100_hook("jQuery.text", Sizzle.getText, "assign");
    jQuery.isXMLDoc = cc11001100_hook("jQuery.isXMLDoc", Sizzle.isXML, "assign");
    jQuery.contains = cc11001100_hook("jQuery.contains", Sizzle.contains, "assign");
  })(window);

  var runtil = cc11001100_hook("runtil", /Until$/, "var-init"),
      rparentsprev = cc11001100_hook("rparentsprev", /^(?:parents|prev(?:Until|All))/, "var-init"),
      isSimple = cc11001100_hook("isSimple", /^.[^:#\[\.,]*$/, "var-init"),
      rneedsContext = cc11001100_hook("rneedsContext", jQuery.expr.match.needsContext, "var-init"),
      // methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = cc11001100_hook("guaranteedUnique", {
    children: cc11001100_hook("children", true, "object-key-init"),
    contents: cc11001100_hook("contents", true, "object-key-init"),
    next: cc11001100_hook("next", true, "object-key-init"),
    prev: cc11001100_hook("prev", true, "object-key-init")
  }, "var-init");
  jQuery.fn.extend({
    find: function (selector) {
      var i,
          ret,
          self,
          len = cc11001100_hook("len", this.length, "var-init");

      if (typeof selector !== "string") {
        self = cc11001100_hook("self", this, "assign");
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = cc11001100_hook("i", 0, "assign"); i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = cc11001100_hook("ret", [], "assign");

      for (i = cc11001100_hook("i", 0, "assign"); i < len; i++) {
        jQuery.find(selector, this[i], ret);
      } // Needed because $( selector, context ) becomes $( context ).find( selector )


      ret = cc11001100_hook("ret", this.pushStack(len > 1 ? jQuery.unique(ret) : ret), "assign");
      ret.selector = cc11001100_hook("ret.selector", (this.selector ? this.selector + " " : "") + selector, "assign");
      return ret;
    },
    has: function (target) {
      var i,
          targets = cc11001100_hook("targets", jQuery(target, this), "var-init"),
          len = cc11001100_hook("len", targets.length, "var-init");
      return this.filter(function () {
        for (i = cc11001100_hook("i", 0, "assign"); i < len; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    not: function (selector) {
      return this.pushStack(winnow(this, selector, false));
    },
    filter: function (selector) {
      return this.pushStack(winnow(this, selector, true));
    },
    is: function (selector) {
      return !!selector && (typeof selector === "string" ? // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      rneedsContext.test(selector) ? jQuery(selector, this.context).index(this[0]) >= 0 : jQuery.filter(selector, this).length > 0 : this.filter(selector).length > 0);
    },
    closest: function (selectors, context) {
      var cur,
          i = cc11001100_hook("i", 0, "var-init"),
          l = cc11001100_hook("l", this.length, "var-init"),
          ret = cc11001100_hook("ret", [], "var-init"),
          pos = cc11001100_hook("pos", rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0, "var-init");

      for (; i < l; i++) {
        cur = cc11001100_hook("cur", this[i], "assign");

        while (cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11) {
          if (pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors)) {
            ret.push(cur);
            break;
          }

          cur = cc11001100_hook("cur", cur.parentNode, "assign");
        }
      }

      return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
    },
    // Determine the position of an element within
    // the matched set of elements
    index: function (elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // index in selector


      if (typeof elem === "string") {
        return jQuery.inArray(this[0], jQuery(elem));
      } // Locate the position of the desired element


      return jQuery.inArray( // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem, this);
    },
    add: function (selector, context) {
      var set = cc11001100_hook("set", typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector), "var-init"),
          all = cc11001100_hook("all", jQuery.merge(this.get(), set), "var-init");
      return this.pushStack(jQuery.unique(all));
    },
    addBack: function (selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  jQuery.fn.andSelf = cc11001100_hook("jQuery.fn.andSelf", jQuery.fn.addBack, "assign");

  function sibling(cur, dir) {
    cc11001100_hook("cur", cur, "function-parameter");
    cc11001100_hook("dir", dir, "function-parameter");

    do {
      cur = cc11001100_hook("cur", cur[dir], "assign");
    } while (cur && cur.nodeType !== 1);

    return cur;
  }

  jQuery.each({
    parent: function (elem) {
      var parent = cc11001100_hook("parent", elem.parentNode, "var-init");
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function (elem) {
      return jQuery.dir(elem, "parentNode");
    },
    parentsUntil: function (elem, i, until) {
      return jQuery.dir(elem, "parentNode", until);
    },
    next: function (elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function (elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function (elem) {
      return jQuery.dir(elem, "nextSibling");
    },
    prevAll: function (elem) {
      return jQuery.dir(elem, "previousSibling");
    },
    nextUntil: function (elem, i, until) {
      return jQuery.dir(elem, "nextSibling", until);
    },
    prevUntil: function (elem, i, until) {
      return jQuery.dir(elem, "previousSibling", until);
    },
    siblings: function (elem) {
      return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
    },
    children: function (elem) {
      return jQuery.sibling(elem.firstChild);
    },
    contents: function (elem) {
      return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = cc11001100_hook("jQuery.fn[name]", function (until, selector) {
      var ret = cc11001100_hook("ret", jQuery.map(this, fn, until), "var-init");

      if (!runtil.test(name)) {
        selector = cc11001100_hook("selector", until, "assign");
      }

      if (selector && typeof selector === "string") {
        ret = cc11001100_hook("ret", jQuery.filter(selector, ret), "assign");
      }

      ret = cc11001100_hook("ret", this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret, "assign");

      if (this.length > 1 && rparentsprev.test(name)) {
        ret = cc11001100_hook("ret", ret.reverse(), "assign");
      }

      return this.pushStack(ret);
    }, "assign");
  });
  jQuery.extend({
    filter: function (expr, elems, not) {
      if (not) {
        expr = cc11001100_hook("expr", ":not(" + expr + ")", "assign");
      }

      return elems.length === 1 ? jQuery.find.matchesSelector(elems[0], expr) ? [elems[0]] : [] : jQuery.find.matches(expr, elems);
    },
    dir: function (elem, dir, until) {
      var matched = cc11001100_hook("matched", [], "var-init"),
          cur = cc11001100_hook("cur", elem[dir], "var-init");

      while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
        if (cur.nodeType === 1) {
          matched.push(cur);
        }

        cur = cc11001100_hook("cur", cur[dir], "assign");
      }

      return matched;
    },
    sibling: function (n, elem) {
      var r = cc11001100_hook("r", [], "var-init");

      for (; n; n = cc11001100_hook("n", n.nextSibling, "assign")) {
        if (n.nodeType === 1 && n !== elem) {
          r.push(n);
        }
      }

      return r;
    }
  }); // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, keep) {
    cc11001100_hook("elements", elements, "function-parameter");
    cc11001100_hook("qualifier", qualifier, "function-parameter");
    cc11001100_hook("keep", keep, "function-parameter");
    // Can't pass null or undefined to indexOf in Firefox 4
    // Set to 0 to skip string check
    qualifier = cc11001100_hook("qualifier", qualifier || 0, "assign");

    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        var retVal = cc11001100_hook("retVal", !!qualifier.call(elem, i, elem), "var-init");
        return retVal === keep;
      });
    } else if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier === keep;
      });
    } else if (typeof qualifier === "string") {
      var filtered = cc11001100_hook("filtered", jQuery.grep(elements, function (elem) {
        return elem.nodeType === 1;
      }), "var-init");

      if (isSimple.test(qualifier)) {
        return jQuery.filter(qualifier, filtered, !keep);
      } else {
        qualifier = cc11001100_hook("qualifier", jQuery.filter(qualifier, filtered), "assign");
      }
    }

    return jQuery.grep(elements, function (elem) {
      return jQuery.inArray(elem, qualifier) >= 0 === keep;
    });
  }

  function createSafeFragment(document) {
    cc11001100_hook("document", document, "function-parameter");
    var list = cc11001100_hook("list", nodeNames.split("|"), "var-init"),
        safeFrag = cc11001100_hook("safeFrag", document.createDocumentFragment(), "var-init");

    if (safeFrag.createElement) {
      while (list.length) {
        safeFrag.createElement(list.pop());
      }
    }

    return safeFrag;
  }

  var nodeNames = cc11001100_hook("nodeNames", "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", "var-init"),
      rinlinejQuery = cc11001100_hook("rinlinejQuery", / jQuery\d+="(?:null|\d+)"/g, "var-init"),
      rnoshimcache = cc11001100_hook("rnoshimcache", new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), "var-init"),
      rleadingWhitespace = cc11001100_hook("rleadingWhitespace", /^\s+/, "var-init"),
      rxhtmlTag = cc11001100_hook("rxhtmlTag", /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, "var-init"),
      rtagName = cc11001100_hook("rtagName", /<([\w:]+)/, "var-init"),
      rtbody = cc11001100_hook("rtbody", /<tbody/i, "var-init"),
      rhtml = cc11001100_hook("rhtml", /<|&#?\w+;/, "var-init"),
      rnoInnerhtml = cc11001100_hook("rnoInnerhtml", /<(?:script|style|link)/i, "var-init"),
      manipulation_rcheckableType = cc11001100_hook("manipulation_rcheckableType", /^(?:checkbox|radio)$/i, "var-init"),
      // checked="checked" or checked
  rchecked = cc11001100_hook("rchecked", /checked\s*(?:[^=]|=\s*.checked.)/i, "var-init"),
      rscriptType = cc11001100_hook("rscriptType", /^$|\/(?:java|ecma)script/i, "var-init"),
      rscriptTypeMasked = cc11001100_hook("rscriptTypeMasked", /^true\/(.*)/, "var-init"),
      rcleanScript = cc11001100_hook("rcleanScript", /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "var-init"),
      // We have to close these tags to support XHTML (#13200)
  wrapMap = cc11001100_hook("wrapMap", {
    option: cc11001100_hook("option", [1, "<select multiple='multiple'>", "</select>"], "object-key-init"),
    legend: cc11001100_hook("legend", [1, "<fieldset>", "</fieldset>"], "object-key-init"),
    area: cc11001100_hook("area", [1, "<map>", "</map>"], "object-key-init"),
    param: cc11001100_hook("param", [1, "<object>", "</object>"], "object-key-init"),
    thead: cc11001100_hook("thead", [1, "<table>", "</table>"], "object-key-init"),
    tr: cc11001100_hook("tr", [2, "<table><tbody>", "</tbody></table>"], "object-key-init"),
    col: cc11001100_hook("col", [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], "object-key-init"),
    td: cc11001100_hook("td", [3, "<table><tbody><tr>", "</tr></tbody></table>"], "object-key-init"),
    // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
    // unless wrapped in a div with non-breaking characters in front of it.
    _default: cc11001100_hook("_default", jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"], "object-key-init")
  }, "var-init"),
      safeFragment = cc11001100_hook("safeFragment", createSafeFragment(document), "var-init"),
      fragmentDiv = cc11001100_hook("fragmentDiv", safeFragment.appendChild(document.createElement("div")), "var-init");
  wrapMap.optgroup = cc11001100_hook("wrapMap.optgroup", wrapMap.option, "assign");
  wrapMap.tbody = cc11001100_hook("wrapMap.tbody", wrapMap.tfoot = cc11001100_hook("wrapMap.tfoot", wrapMap.colgroup = cc11001100_hook("wrapMap.colgroup", wrapMap.caption = cc11001100_hook("wrapMap.caption", wrapMap.thead, "assign"), "assign"), "assign"), "assign");
  wrapMap.th = cc11001100_hook("wrapMap.th", wrapMap.td, "assign");
  jQuery.fn.extend({
    text: function (value) {
      return jQuery.access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
      }, null, value, arguments.length);
    },
    wrapAll: function (html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapAll(html.call(this, i));
        });
      }

      if (this[0]) {
        // The elements to wrap the target around
        var wrap = cc11001100_hook("wrap", jQuery(html, this[0].ownerDocument).eq(0).clone(true), "var-init");

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = cc11001100_hook("elem", this, "var-init");

          while (elem.firstChild && elem.firstChild.nodeType === 1) {
            elem = cc11001100_hook("elem", elem.firstChild, "assign");
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function (html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = cc11001100_hook("self", jQuery(this), "var-init"),
            contents = cc11001100_hook("contents", self.contents(), "var-init");

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function (html) {
      var isFunction = cc11001100_hook("isFunction", jQuery.isFunction(html), "var-init");
      return this.each(function (i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        if (!jQuery.nodeName(this, "body")) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    },
    append: function () {
      return this.domManip(arguments, true, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          this.appendChild(elem);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, true, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          this.insertBefore(elem, this.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, false, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function () {
      return this.domManip(arguments, false, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    // keepData is for internal use only--do not document
    remove: function (selector, keepData) {
      var elem,
          i = cc11001100_hook("i", 0, "var-init");

      for (; (elem = cc11001100_hook("elem", this[i], "assign")) != null; i++) {
        if (!selector || jQuery.filter(selector, [elem]).length > 0) {
          if (!keepData && elem.nodeType === 1) {
            jQuery.cleanData(getAll(elem));
          }

          if (elem.parentNode) {
            if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
              setGlobalEval(getAll(elem, "script"));
            }

            elem.parentNode.removeChild(elem);
          }
        }
      }

      return this;
    },
    empty: function () {
      var elem,
          i = cc11001100_hook("i", 0, "var-init");

      for (; (elem = cc11001100_hook("elem", this[i], "assign")) != null; i++) {
        // Remove element nodes and prevent memory leaks
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
        } // Remove any remaining nodes


        while (elem.firstChild) {
          elem.removeChild(elem.firstChild);
        } // If this is a select, ensure that it displays empty (#12336)
        // Support: IE<9


        if (elem.options && jQuery.nodeName(elem, "select")) {
          elem.options.length = cc11001100_hook("elem.options.length", 0, "assign");
        }
      }

      return this;
    },
    clone: function (dataAndEvents, deepDataAndEvents) {
      dataAndEvents = cc11001100_hook("dataAndEvents", dataAndEvents == null ? false : dataAndEvents, "assign");
      deepDataAndEvents = cc11001100_hook("deepDataAndEvents", deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents, "assign");
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function (value) {
      return jQuery.access(this, function (value) {
        var elem = cc11001100_hook("elem", this[0] || {}, "var-init"),
            i = cc11001100_hook("i", 0, "var-init"),
            l = cc11001100_hook("l", this.length, "var-init");

        if (value === undefined) {
          return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = cc11001100_hook("value", value.replace(rxhtmlTag, "<$1></$2>"), "assign");

          try {
            for (; i < l; i++) {
              // Remove element nodes and prevent memory leaks
              elem = cc11001100_hook("elem", this[i] || {}, "assign");

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = cc11001100_hook("elem.innerHTML", value, "assign");
              }
            }

            elem = cc11001100_hook("elem", 0, "assign"); // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function (value) {
      var isFunc = cc11001100_hook("isFunc", jQuery.isFunction(value), "var-init"); // Make sure that the elements are removed from the DOM before they are inserted
      // this can help fix replacing a parent with child elements

      if (!isFunc && typeof value !== "string") {
        value = cc11001100_hook("value", jQuery(value).not(this).detach(), "assign");
      }

      return this.domManip([value], true, function (elem) {
        var next = cc11001100_hook("next", this.nextSibling, "var-init"),
            parent = cc11001100_hook("parent", this.parentNode, "var-init");

        if (parent) {
          jQuery(this).remove();
          parent.insertBefore(elem, next);
        }
      });
    },
    detach: function (selector) {
      return this.remove(selector, true);
    },
    domManip: function (args, table, callback) {
      // Flatten any nested arrays
      args = cc11001100_hook("args", core_concat.apply([], args), "assign");
      var first,
          node,
          hasScripts,
          scripts,
          doc,
          fragment,
          i = cc11001100_hook("i", 0, "var-init"),
          l = cc11001100_hook("l", this.length, "var-init"),
          set = cc11001100_hook("set", this, "var-init"),
          iNoClone = cc11001100_hook("iNoClone", l - 1, "var-init"),
          value = cc11001100_hook("value", args[0], "var-init"),
          isFunction = cc11001100_hook("isFunction", jQuery.isFunction(value), "var-init"); // We can't cloneNode fragments that contain checked, in WebKit

      if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
        return this.each(function (index) {
          var self = cc11001100_hook("self", set.eq(index), "var-init");

          if (isFunction) {
            args[0] = cc11001100_hook("args[0]", value.call(this, index, table ? self.html() : undefined), "assign");
          }

          self.domManip(args, table, callback);
        });
      }

      if (l) {
        fragment = cc11001100_hook("fragment", jQuery.buildFragment(args, this[0].ownerDocument, false, this), "assign");
        first = cc11001100_hook("first", fragment.firstChild, "assign");

        if (fragment.childNodes.length === 1) {
          fragment = cc11001100_hook("fragment", first, "assign");
        }

        if (first) {
          table = cc11001100_hook("table", table && jQuery.nodeName(first, "tr"), "assign");
          scripts = cc11001100_hook("scripts", jQuery.map(getAll(fragment, "script"), disableScript), "assign");
          hasScripts = cc11001100_hook("hasScripts", scripts.length, "assign"); // Use the original fragment for the last item instead of the first because it can end up
          // being emptied incorrectly in certain situations (#8070).

          for (; i < l; i++) {
            node = cc11001100_hook("node", fragment, "assign");

            if (i !== iNoClone) {
              node = cc11001100_hook("node", jQuery.clone(node, true, true), "assign"); // Keep references to cloned scripts for later restoration

              if (hasScripts) {
                jQuery.merge(scripts, getAll(node, "script"));
              }
            }

            callback.call(table && jQuery.nodeName(this[i], "table") ? findOrAppend(this[i], "tbody") : this[i], node, i);
          }

          if (hasScripts) {
            doc = cc11001100_hook("doc", scripts[scripts.length - 1].ownerDocument, "assign"); // Reenable scripts

            jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

            for (i = cc11001100_hook("i", 0, "assign"); i < hasScripts; i++) {
              node = cc11001100_hook("node", scripts[i], "assign");

              if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
                if (node.src) {
                  // Hope ajax is available...
                  jQuery.ajax({
                    url: cc11001100_hook("url", node.src, "object-key-init"),
                    type: cc11001100_hook("type", "GET", "object-key-init"),
                    dataType: cc11001100_hook("dataType", "script", "object-key-init"),
                    async: cc11001100_hook("async", false, "object-key-init"),
                    global: cc11001100_hook("global", false, "object-key-init"),
                    "throws": cc11001100_hook("throws", true, "object-key-init")
                  });
                } else {
                  jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
                }
              }
            }
          } // Fix #11809: Avoid leaking memory


          fragment = cc11001100_hook("fragment", first = cc11001100_hook("first", null, "assign"), "assign");
        }
      }

      return this;
    }
  });

  function findOrAppend(elem, tag) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("tag", tag, "function-parameter");
    return elem.getElementsByTagName(tag)[0] || elem.appendChild(elem.ownerDocument.createElement(tag));
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    cc11001100_hook("elem", elem, "function-parameter");
    var attr = cc11001100_hook("attr", elem.getAttributeNode("type"), "var-init");
    elem.type = cc11001100_hook("elem.type", (attr && attr.specified) + "/" + elem.type, "assign");
    return elem;
  }

  function restoreScript(elem) {
    cc11001100_hook("elem", elem, "function-parameter");
    var match = cc11001100_hook("match", rscriptTypeMasked.exec(elem.type), "var-init");

    if (match) {
      elem.type = cc11001100_hook("elem.type", match[1], "assign");
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    cc11001100_hook("elems", elems, "function-parameter");
    cc11001100_hook("refElements", refElements, "function-parameter");
    var elem,
        i = cc11001100_hook("i", 0, "var-init");

    for (; (elem = cc11001100_hook("elem", elems[i], "assign")) != null; i++) {
      jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
    }
  }

  function cloneCopyEvent(src, dest) {
    cc11001100_hook("src", src, "function-parameter");
    cc11001100_hook("dest", dest, "function-parameter");

    if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
      return;
    }

    var type,
        i,
        l,
        oldData = cc11001100_hook("oldData", jQuery._data(src), "var-init"),
        curData = cc11001100_hook("curData", jQuery._data(dest, oldData), "var-init"),
        events = cc11001100_hook("events", oldData.events, "var-init");

    if (events) {
      delete curData.handle;
      curData.events = cc11001100_hook("curData.events", {}, "assign");

      for (type in events) {
        for (i = cc11001100_hook("i", 0, "assign"), l = cc11001100_hook("l", events[type].length, "assign"); i < l; i++) {
          jQuery.event.add(dest, type, events[type][i]);
        }
      }
    } // make the cloned public data object a copy from the original


    if (curData.data) {
      curData.data = cc11001100_hook("curData.data", jQuery.extend({}, curData.data), "assign");
    }
  }

  function fixCloneNodeIssues(src, dest) {
    cc11001100_hook("src", src, "function-parameter");
    cc11001100_hook("dest", dest, "function-parameter");
    var nodeName, e, data; // We do not need to do anything for non-Elements

    if (dest.nodeType !== 1) {
      return;
    }

    nodeName = cc11001100_hook("nodeName", dest.nodeName.toLowerCase(), "assign"); // IE6-8 copies events bound via attachEvent when using cloneNode.

    if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
      data = cc11001100_hook("data", jQuery._data(dest), "assign");

      for (e in data.events) {
        jQuery.removeEvent(dest, e, data.handle);
      } // Event data gets referenced instead of copied if the expando gets copied too


      dest.removeAttribute(jQuery.expando);
    } // IE blanks contents when cloning scripts, and tries to evaluate newly-set text


    if (nodeName === "script" && dest.text !== src.text) {
      disableScript(dest).text = cc11001100_hook("disableScript(dest).text", src.text, "assign");
      restoreScript(dest); // IE6-10 improperly clones children of object elements using classid.
      // IE10 throws NoModificationAllowedError if parent is null, #12132.
    } else if (nodeName === "object") {
      if (dest.parentNode) {
        dest.outerHTML = cc11001100_hook("dest.outerHTML", src.outerHTML, "assign");
      } // This path appears unavoidable for IE9. When cloning an object
      // element in IE9, the outerHTML strategy above is not sufficient.
      // If the src has innerHTML and the destination does not,
      // copy the src.innerHTML into the dest.innerHTML. #10324


      if (jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
        dest.innerHTML = cc11001100_hook("dest.innerHTML", src.innerHTML, "assign");
      }
    } else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
      // IE6-8 fails to persist the checked state of a cloned checkbox
      // or radio button. Worse, IE6-7 fail to give the cloned element
      // a checked appearance if the defaultChecked value isn't also set
      dest.defaultChecked = cc11001100_hook("dest.defaultChecked", dest.checked = cc11001100_hook("dest.checked", src.checked, "assign"), "assign"); // IE6-7 get confused and end up setting the value of a cloned
      // checkbox/radio button to an empty string instead of "on"

      if (dest.value !== src.value) {
        dest.value = cc11001100_hook("dest.value", src.value, "assign");
      } // IE6-8 fails to return the selected option to the default selected
      // state when cloning options

    } else if (nodeName === "option") {
      dest.defaultSelected = cc11001100_hook("dest.defaultSelected", dest.selected = cc11001100_hook("dest.selected", src.defaultSelected, "assign"), "assign"); // IE6-8 fails to set the defaultValue to the correct value when
      // cloning other types of input fields
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = cc11001100_hook("dest.defaultValue", src.defaultValue, "assign");
    }
  }

  jQuery.each({
    appendTo: cc11001100_hook("appendTo", "append", "object-key-init"),
    prependTo: cc11001100_hook("prependTo", "prepend", "object-key-init"),
    insertBefore: cc11001100_hook("insertBefore", "before", "object-key-init"),
    insertAfter: cc11001100_hook("insertAfter", "after", "object-key-init"),
    replaceAll: cc11001100_hook("replaceAll", "replaceWith", "object-key-init")
  }, function (name, original) {
    jQuery.fn[name] = cc11001100_hook("jQuery.fn[name]", function (selector) {
      var elems,
          i = cc11001100_hook("i", 0, "var-init"),
          ret = cc11001100_hook("ret", [], "var-init"),
          insert = cc11001100_hook("insert", jQuery(selector), "var-init"),
          last = cc11001100_hook("last", insert.length - 1, "var-init");

      for (; i <= last; i++) {
        elems = cc11001100_hook("elems", i === last ? this : this.clone(true), "assign");
        jQuery(insert[i])[original](elems); // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()

        core_push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    }, "assign");
  });

  function getAll(context, tag) {
    cc11001100_hook("context", context, "function-parameter");
    cc11001100_hook("tag", tag, "function-parameter");
    var elems,
        elem,
        i = cc11001100_hook("i", 0, "var-init"),
        found = cc11001100_hook("found", typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined, "var-init");

    if (!found) {
      for (found = cc11001100_hook("found", [], "assign"), elems = cc11001100_hook("elems", context.childNodes || context, "assign"); (elem = cc11001100_hook("elem", elems[i], "assign")) != null; i++) {
        if (!tag || jQuery.nodeName(elem, tag)) {
          found.push(elem);
        } else {
          jQuery.merge(found, getAll(elem, tag));
        }
      }
    }

    return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
  } // Used in buildFragment, fixes the defaultChecked property


  function fixDefaultChecked(elem) {
    cc11001100_hook("elem", elem, "function-parameter");

    if (manipulation_rcheckableType.test(elem.type)) {
      elem.defaultChecked = cc11001100_hook("elem.defaultChecked", elem.checked, "assign");
    }
  }

  jQuery.extend({
    clone: function (elem, dataAndEvents, deepDataAndEvents) {
      var destElements,
          node,
          clone,
          i,
          srcElements,
          inPage = cc11001100_hook("inPage", jQuery.contains(elem.ownerDocument, elem), "var-init");

      if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
        clone = cc11001100_hook("clone", elem.cloneNode(true), "assign"); // IE<=8 does not properly clone detached, unknown element nodes
      } else {
        fragmentDiv.innerHTML = cc11001100_hook("fragmentDiv.innerHTML", elem.outerHTML, "assign");
        fragmentDiv.removeChild(clone = cc11001100_hook("clone", fragmentDiv.firstChild, "assign"));
      }

      if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
        destElements = cc11001100_hook("destElements", getAll(clone), "assign");
        srcElements = cc11001100_hook("srcElements", getAll(elem), "assign"); // Fix all IE cloning issues

        for (i = cc11001100_hook("i", 0, "assign"); (node = cc11001100_hook("node", srcElements[i], "assign")) != null; ++i) {
          // Ensure that the destination node is not null; Fixes #9587
          if (destElements[i]) {
            fixCloneNodeIssues(node, destElements[i]);
          }
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = cc11001100_hook("srcElements", srcElements || getAll(elem), "assign");
          destElements = cc11001100_hook("destElements", destElements || getAll(clone), "assign");

          for (i = cc11001100_hook("i", 0, "assign"); (node = cc11001100_hook("node", srcElements[i], "assign")) != null; i++) {
            cloneCopyEvent(node, destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = cc11001100_hook("destElements", getAll(clone, "script"), "assign");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }

      destElements = cc11001100_hook("destElements", srcElements = cc11001100_hook("srcElements", node = cc11001100_hook("node", null, "assign"), "assign"), "assign"); // Return the cloned set

      return clone;
    },
    buildFragment: function (elems, context, scripts, selection) {
      var j,
          elem,
          contains,
          tmp,
          tag,
          tbody,
          wrap,
          l = cc11001100_hook("l", elems.length, "var-init"),
          // Ensure a safe fragment
      safe = cc11001100_hook("safe", createSafeFragment(context), "var-init"),
          nodes = cc11001100_hook("nodes", [], "var-init"),
          i = cc11001100_hook("i", 0, "var-init");

      for (; i < l; i++) {
        elem = cc11001100_hook("elem", elems[i], "assign");

        if (elem || elem === 0) {
          // Add nodes directly
          if (jQuery.type(elem) === "object") {
            jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
          } else {
            tmp = cc11001100_hook("tmp", tmp || safe.appendChild(context.createElement("div")), "assign"); // Deserialize a standard representation

            tag = cc11001100_hook("tag", (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), "assign");
            wrap = cc11001100_hook("wrap", wrapMap[tag] || wrapMap._default, "assign");
            tmp.innerHTML = cc11001100_hook("tmp.innerHTML", wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2], "assign"); // Descend through wrappers to the right content

            j = cc11001100_hook("j", wrap[0], "assign");

            while (j--) {
              tmp = cc11001100_hook("tmp", tmp.lastChild, "assign");
            } // Manually add leading whitespace removed by IE


            if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
              nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
            } // Remove IE's autoinserted <tbody> from table fragments


            if (!jQuery.support.tbody) {
              // String was a <table>, *may* have spurious <tbody>
              elem = cc11001100_hook("elem", tag === "table" && !rtbody.test(elem) ? tmp.firstChild : // String was a bare <thead> or <tfoot>
              wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0, "assign");
              j = cc11001100_hook("j", elem && elem.childNodes.length, "assign");

              while (j--) {
                if (jQuery.nodeName(tbody = cc11001100_hook("tbody", elem.childNodes[j], "assign"), "tbody") && !tbody.childNodes.length) {
                  elem.removeChild(tbody);
                }
              }
            }

            jQuery.merge(nodes, tmp.childNodes); // Fix #12392 for WebKit and IE > 9

            tmp.textContent = cc11001100_hook("tmp.textContent", "", "assign"); // Fix #12392 for oldIE

            while (tmp.firstChild) {
              tmp.removeChild(tmp.firstChild);
            } // Remember the top-level container for proper cleanup


            tmp = cc11001100_hook("tmp", safe.lastChild, "assign");
          }
        }
      } // Fix #11356: Clear elements from fragment


      if (tmp) {
        safe.removeChild(tmp);
      } // Reset defaultChecked for any radios and checkboxes
      // about to be appended to the DOM in IE 6/7 (#8060)


      if (!jQuery.support.appendChecked) {
        jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
      }

      i = cc11001100_hook("i", 0, "assign");

      while (elem = cc11001100_hook("elem", nodes[i++], "assign")) {
        // #4087 - If origin and destination elements are the same, and this is
        // that element, do not do anything
        if (selection && jQuery.inArray(elem, selection) !== -1) {
          continue;
        }

        contains = cc11001100_hook("contains", jQuery.contains(elem.ownerDocument, elem), "assign"); // Append to fragment

        tmp = cc11001100_hook("tmp", getAll(safe.appendChild(elem), "script"), "assign"); // Preserve script evaluation history

        if (contains) {
          setGlobalEval(tmp);
        } // Capture executables


        if (scripts) {
          j = cc11001100_hook("j", 0, "assign");

          while (elem = cc11001100_hook("elem", tmp[j++], "assign")) {
            if (rscriptType.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }

      tmp = cc11001100_hook("tmp", null, "assign");
      return safe;
    },
    cleanData: function (elems,
    /* internal */
    acceptData) {
      var elem,
          type,
          id,
          data,
          i = cc11001100_hook("i", 0, "var-init"),
          internalKey = cc11001100_hook("internalKey", jQuery.expando, "var-init"),
          cache = cc11001100_hook("cache", jQuery.cache, "var-init"),
          deleteExpando = cc11001100_hook("deleteExpando", jQuery.support.deleteExpando, "var-init"),
          special = cc11001100_hook("special", jQuery.event.special, "var-init");

      for (; (elem = cc11001100_hook("elem", elems[i], "assign")) != null; i++) {
        if (acceptData || jQuery.acceptData(elem)) {
          id = cc11001100_hook("id", elem[internalKey], "assign");
          data = cc11001100_hook("data", id && cache[id], "assign");

          if (data) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Remove cache only if it was not already removed by jQuery.event.remove


            if (cache[id]) {
              delete cache[id]; // IE does not allow us to delete expando properties from nodes,
              // nor does it have a removeAttribute function on Document nodes;
              // we must handle all of these cases

              if (deleteExpando) {
                delete elem[internalKey];
              } else if (typeof elem.removeAttribute !== core_strundefined) {
                elem.removeAttribute(internalKey);
              } else {
                elem[internalKey] = cc11001100_hook("elem[internalKey]", null, "assign");
              }

              core_deletedIds.push(id);
            }
          }
        }
      }
    }
  });
  var iframe,
      getStyles,
      curCSS,
      ralpha = cc11001100_hook("ralpha", /alpha\([^)]*\)/i, "var-init"),
      ropacity = cc11001100_hook("ropacity", /opacity\s*=\s*([^)]*)/, "var-init"),
      rposition = cc11001100_hook("rposition", /^(top|right|bottom|left)$/, "var-init"),
      // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
  // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = cc11001100_hook("rdisplayswap", /^(none|table(?!-c[ea]).+)/, "var-init"),
      rmargin = cc11001100_hook("rmargin", /^margin/, "var-init"),
      rnumsplit = cc11001100_hook("rnumsplit", new RegExp("^(" + core_pnum + ")(.*)$", "i"), "var-init"),
      rnumnonpx = cc11001100_hook("rnumnonpx", new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"), "var-init"),
      rrelNum = cc11001100_hook("rrelNum", new RegExp("^([+-])=(" + core_pnum + ")", "i"), "var-init"),
      elemdisplay = cc11001100_hook("elemdisplay", {
    BODY: cc11001100_hook("BODY", "block", "object-key-init")
  }, "var-init"),
      cssShow = cc11001100_hook("cssShow", {
    position: cc11001100_hook("position", "absolute", "object-key-init"),
    visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
    display: cc11001100_hook("display", "block", "object-key-init")
  }, "var-init"),
      cssNormalTransform = cc11001100_hook("cssNormalTransform", {
    letterSpacing: cc11001100_hook("letterSpacing", 0, "object-key-init"),
    fontWeight: cc11001100_hook("fontWeight", 400, "object-key-init")
  }, "var-init"),
      cssExpand = cc11001100_hook("cssExpand", ["Top", "Right", "Bottom", "Left"], "var-init"),
      cssPrefixes = cc11001100_hook("cssPrefixes", ["Webkit", "O", "Moz", "ms"], "var-init"); // return a css property mapped to a potentially vendor prefixed property

  function vendorPropName(style, name) {
    cc11001100_hook("style", style, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");

    // shortcut for names that are not vendor prefixed
    if (name in style) {
      return name;
    } // check for vendor prefixed names


    var capName = cc11001100_hook("capName", name.charAt(0).toUpperCase() + name.slice(1), "var-init"),
        origName = cc11001100_hook("origName", name, "var-init"),
        i = cc11001100_hook("i", cssPrefixes.length, "var-init");

    while (i--) {
      name = cc11001100_hook("name", cssPrefixes[i] + capName, "assign");

      if (name in style) {
        return name;
      }
    }

    return origName;
  }

  function isHidden(elem, el) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("el", el, "function-parameter");
    // isHidden might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = cc11001100_hook("elem", el || elem, "assign");
    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
  }

  function showHide(elements, show) {
    cc11001100_hook("elements", elements, "function-parameter");
    cc11001100_hook("show", show, "function-parameter");
    var display,
        elem,
        hidden,
        values = cc11001100_hook("values", [], "var-init"),
        index = cc11001100_hook("index", 0, "var-init"),
        length = cc11001100_hook("length", elements.length, "var-init");

    for (; index < length; index++) {
      elem = cc11001100_hook("elem", elements[index], "assign");

      if (!elem.style) {
        continue;
      }

      values[index] = cc11001100_hook("values[index]", jQuery._data(elem, "olddisplay"), "assign");
      display = cc11001100_hook("display", elem.style.display, "assign");

      if (show) {
        // Reset the inline display of this element to learn if it is
        // being hidden by cascaded rules or not
        if (!values[index] && display === "none") {
          elem.style.display = cc11001100_hook("elem.style.display", "", "assign");
        } // Set elements which have been overridden with display: none
        // in a stylesheet to whatever the default browser style is
        // for such an element


        if (elem.style.display === "" && isHidden(elem)) {
          values[index] = cc11001100_hook("values[index]", jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName)), "assign");
        }
      } else {
        if (!values[index]) {
          hidden = cc11001100_hook("hidden", isHidden(elem), "assign");

          if (display && display !== "none" || !hidden) {
            jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
          }
        }
      }
    } // Set the display of most of the elements in a second loop
    // to avoid the constant reflow


    for (index = cc11001100_hook("index", 0, "assign"); index < length; index++) {
      elem = cc11001100_hook("elem", elements[index], "assign");

      if (!elem.style) {
        continue;
      }

      if (!show || elem.style.display === "none" || elem.style.display === "") {
        elem.style.display = cc11001100_hook("elem.style.display", show ? values[index] || "" : "none", "assign");
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    css: function (name, value) {
      return jQuery.access(this, function (elem, name, value) {
        var len,
            styles,
            map = cc11001100_hook("map", {}, "var-init"),
            i = cc11001100_hook("i", 0, "var-init");

        if (jQuery.isArray(name)) {
          styles = cc11001100_hook("styles", getStyles(elem), "assign");
          len = cc11001100_hook("len", name.length, "assign");

          for (; i < len; i++) {
            map[name[i]] = cc11001100_hook("map[name[i]]", jQuery.css(elem, name[i], false, styles), "assign");
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show: function () {
      return showHide(this, true);
    },
    hide: function () {
      return showHide(this);
    },
    toggle: function (state) {
      var bool = cc11001100_hook("bool", typeof state === "boolean", "var-init");
      return this.each(function () {
        if (bool ? state : isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function (elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = cc11001100_hook("ret", curCSS(elem, "opacity"), "var-init");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Exclude the following css properties to add px
    cssNumber: {
      "columnCount": cc11001100_hook("columnCount", true, "object-key-init"),
      "fillOpacity": cc11001100_hook("fillOpacity", true, "object-key-init"),
      "fontWeight": cc11001100_hook("fontWeight", true, "object-key-init"),
      "lineHeight": cc11001100_hook("lineHeight", true, "object-key-init"),
      "opacity": cc11001100_hook("opacity", true, "object-key-init"),
      "orphans": cc11001100_hook("orphans", true, "object-key-init"),
      "widows": cc11001100_hook("widows", true, "object-key-init"),
      "zIndex": cc11001100_hook("zIndex", true, "object-key-init"),
      "zoom": cc11001100_hook("zoom", true, "object-key-init")
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {
      // normalize float css property
      "float": cc11001100_hook("float", jQuery.support.cssFloat ? "cssFloat" : "styleFloat", "object-key-init")
    },
    // Get and set the style property on a DOM Node
    style: function (elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = cc11001100_hook("origName", jQuery.camelCase(name), "var-init"),
          style = cc11001100_hook("style", elem.style, "var-init");
      name = cc11001100_hook("name", jQuery.cssProps[origName] || (jQuery.cssProps[origName] = cc11001100_hook("jQuery.cssProps[origName]", vendorPropName(style, origName), "assign")), "assign"); // gets hook for the prefixed version
      // followed by the unprefixed version

      hooks = cc11001100_hook("hooks", jQuery.cssHooks[name] || jQuery.cssHooks[origName], "assign"); // Check if we're setting a value

      if (value !== undefined) {
        type = cc11001100_hook("type", typeof value, "assign"); // convert relative number strings (+= or -=) to relative numbers. #7345

        if (type === "string" && (ret = cc11001100_hook("ret", rrelNum.exec(value), "assign"))) {
          value = cc11001100_hook("value", (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name)), "assign"); // Fixes bug #9237

          type = cc11001100_hook("type", "number", "assign");
        } // Make sure that NaN and null values aren't set. See: #7116


        if (value == null || type === "number" && isNaN(value)) {
          return;
        } // If a number was passed in, add 'px' to the (except for certain CSS properties)


        if (type === "number" && !jQuery.cssNumber[origName]) {
          value += cc11001100_hook("value", "px", "assign");
        } // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
        // but it would mean to define eight (for every problematic property) identical functions


        if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = cc11001100_hook("style[name]", "inherit", "assign");
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = cc11001100_hook("value", hooks.set(elem, value, extra), "assign")) !== undefined) {
          // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
          // Fixes bug #5509
          try {
            style[name] = cc11001100_hook("style[name]", value, "assign");
          } catch (e) {}
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = cc11001100_hook("ret", hooks.get(elem, false, extra), "assign")) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function (elem, name, extra, styles) {
      var num,
          val,
          hooks,
          origName = cc11001100_hook("origName", jQuery.camelCase(name), "var-init"); // Make sure that we're working with the right name

      name = cc11001100_hook("name", jQuery.cssProps[origName] || (jQuery.cssProps[origName] = cc11001100_hook("jQuery.cssProps[origName]", vendorPropName(elem.style, origName), "assign")), "assign"); // gets hook for the prefixed version
      // followed by the unprefixed version

      hooks = cc11001100_hook("hooks", jQuery.cssHooks[name] || jQuery.cssHooks[origName], "assign"); // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = cc11001100_hook("val", hooks.get(elem, true, extra), "assign");
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = cc11001100_hook("val", curCSS(elem, name, styles), "assign");
      } //convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cc11001100_hook("val", cssNormalTransform[name], "assign");
      } // Return, converting to number if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = cc11001100_hook("num", parseFloat(val), "assign");
        return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
      }

      return val;
    },
    // A method for quickly swapping in/out CSS properties to get correct calculations
    swap: function (elem, options, callback, args) {
      var ret,
          name,
          old = cc11001100_hook("old", {}, "var-init"); // Remember the old values, and insert the new ones

      for (name in options) {
        old[name] = cc11001100_hook("old[name]", elem.style[name], "assign");
        elem.style[name] = cc11001100_hook("elem.style[name]", options[name], "assign");
      }

      ret = cc11001100_hook("ret", callback.apply(elem, args || []), "assign"); // Revert the old values

      for (name in options) {
        elem.style[name] = cc11001100_hook("elem.style[name]", old[name], "assign");
      }

      return ret;
    }
  }); // NOTE: we've included the "window" in window.getComputedStyle
  // because jsdom on node.js will break without it.

  if (window.getComputedStyle) {
    getStyles = cc11001100_hook("getStyles", function (elem) {
      return window.getComputedStyle(elem, null);
    }, "assign");
    curCSS = cc11001100_hook("curCSS", function (elem, name, _computed) {
      var width,
          minWidth,
          maxWidth,
          computed = cc11001100_hook("computed", _computed || getStyles(elem), "var-init"),
          // getPropertyValue is only needed for .css('filter') in IE9, see #12537
      ret = cc11001100_hook("ret", computed ? computed.getPropertyValue(name) || computed[name] : undefined, "var-init"),
          style = cc11001100_hook("style", elem.style, "var-init");

      if (computed) {
        if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
          ret = cc11001100_hook("ret", jQuery.style(elem, name), "assign");
        } // A tribute to the "awesome hack by Dean Edwards"
        // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
        // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
        // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values


        if (rnumnonpx.test(ret) && rmargin.test(name)) {
          // Remember the original values
          width = cc11001100_hook("width", style.width, "assign");
          minWidth = cc11001100_hook("minWidth", style.minWidth, "assign");
          maxWidth = cc11001100_hook("maxWidth", style.maxWidth, "assign"); // Put in the new values to get a computed value out

          style.minWidth = cc11001100_hook("style.minWidth", style.maxWidth = cc11001100_hook("style.maxWidth", style.width = cc11001100_hook("style.width", ret, "assign"), "assign"), "assign");
          ret = cc11001100_hook("ret", computed.width, "assign"); // Revert the changed values

          style.width = cc11001100_hook("style.width", width, "assign");
          style.minWidth = cc11001100_hook("style.minWidth", minWidth, "assign");
          style.maxWidth = cc11001100_hook("style.maxWidth", maxWidth, "assign");
        }
      }

      return ret;
    }, "assign");
  } else if (document.documentElement.currentStyle) {
    getStyles = cc11001100_hook("getStyles", function (elem) {
      return elem.currentStyle;
    }, "assign");
    curCSS = cc11001100_hook("curCSS", function (elem, name, _computed) {
      var left,
          rs,
          rsLeft,
          computed = cc11001100_hook("computed", _computed || getStyles(elem), "var-init"),
          ret = cc11001100_hook("ret", computed ? computed[name] : undefined, "var-init"),
          style = cc11001100_hook("style", elem.style, "var-init"); // Avoid setting ret to empty string here
      // so we don't default to auto

      if (ret == null && style && style[name]) {
        ret = cc11001100_hook("ret", style[name], "assign");
      } // From the awesome hack by Dean Edwards
      // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
      // If we're not dealing with a regular pixel number
      // but a number that has a weird ending, we need to convert it to pixels
      // but not position css attributes, as those are proportional to the parent element instead
      // and we can't measure the parent instead because it might trigger a "stacking dolls" problem


      if (rnumnonpx.test(ret) && !rposition.test(name)) {
        // Remember the original values
        left = cc11001100_hook("left", style.left, "assign");
        rs = cc11001100_hook("rs", elem.runtimeStyle, "assign");
        rsLeft = cc11001100_hook("rsLeft", rs && rs.left, "assign"); // Put in the new values to get a computed value out

        if (rsLeft) {
          rs.left = cc11001100_hook("rs.left", elem.currentStyle.left, "assign");
        }

        style.left = cc11001100_hook("style.left", name === "fontSize" ? "1em" : ret, "assign");
        ret = cc11001100_hook("ret", style.pixelLeft + "px", "assign"); // Revert the changed values

        style.left = cc11001100_hook("style.left", left, "assign");

        if (rsLeft) {
          rs.left = cc11001100_hook("rs.left", rsLeft, "assign");
        }
      }

      return ret === "" ? "auto" : ret;
    }, "assign");
  }

  function setPositiveNumber(elem, value, subtract) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("value", value, "function-parameter");
    cc11001100_hook("subtract", subtract, "function-parameter");
    var matches = cc11001100_hook("matches", rnumsplit.exec(value), "var-init");
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
  }

  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("extra", extra, "function-parameter");
    cc11001100_hook("isBorderBox", isBorderBox, "function-parameter");
    cc11001100_hook("styles", styles, "function-parameter");
    var i = cc11001100_hook("i", extra === (isBorderBox ? "border" : "content") ? // If we already have the right measurement, avoid augmentation
    4 : // Otherwise initialize for horizontal or vertical properties
    name === "width" ? 1 : 0, "var-init"),
        val = cc11001100_hook("val", 0, "var-init");

    for (; i < 4; i += cc11001100_hook("i", 2, "assign")) {
      // both box models exclude margin, so add it if we want it
      if (extra === "margin") {
        val += cc11001100_hook("val", jQuery.css(elem, extra + cssExpand[i], true, styles), "assign");
      }

      if (isBorderBox) {
        // border-box includes padding, so remove it if we want content
        if (extra === "content") {
          val -= cc11001100_hook("val", jQuery.css(elem, "padding" + cssExpand[i], true, styles), "assign");
        } // at this point, extra isn't border nor margin, so remove border


        if (extra !== "margin") {
          val -= cc11001100_hook("val", jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles), "assign");
        }
      } else {
        // at this point, extra isn't content, so add padding
        val += cc11001100_hook("val", jQuery.css(elem, "padding" + cssExpand[i], true, styles), "assign"); // at this point, extra isn't content nor padding, so add border

        if (extra !== "padding") {
          val += cc11001100_hook("val", jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles), "assign");
        }
      }
    }

    return val;
  }

  function getWidthOrHeight(elem, name, extra) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("extra", extra, "function-parameter");
    // Start with offset property, which is equivalent to the border-box value
    var valueIsBorderBox = cc11001100_hook("valueIsBorderBox", true, "var-init"),
        val = cc11001100_hook("val", name === "width" ? elem.offsetWidth : elem.offsetHeight, "var-init"),
        styles = cc11001100_hook("styles", getStyles(elem), "var-init"),
        isBorderBox = cc11001100_hook("isBorderBox", jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", "var-init"); // some non-html elements return undefined for offsetWidth, so check for null/undefined
    // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
    // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668

    if (val <= 0 || val == null) {
      // Fall back to computed then uncomputed css if necessary
      val = cc11001100_hook("val", curCSS(elem, name, styles), "assign");

      if (val < 0 || val == null) {
        val = cc11001100_hook("val", elem.style[name], "assign");
      } // Computed unit is not pixels. Stop here and return.


      if (rnumnonpx.test(val)) {
        return val;
      } // we need the check for style in case a browser which returns unreliable values
      // for getComputedStyle silently falls back to the reliable elem.style


      valueIsBorderBox = cc11001100_hook("valueIsBorderBox", isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]), "assign"); // Normalize "", auto, and prepare for extra

      val = cc11001100_hook("val", parseFloat(val) || 0, "assign");
    } // use the active box-sizing model to add/subtract irrelevant styles


    return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
  } // Try to determine the default display value of an element


  function css_defaultDisplay(nodeName) {
    cc11001100_hook("nodeName", nodeName, "function-parameter");
    var doc = cc11001100_hook("doc", document, "var-init"),
        display = cc11001100_hook("display", elemdisplay[nodeName], "var-init");

    if (!display) {
      display = cc11001100_hook("display", actualDisplay(nodeName, doc), "assign"); // If the simple way fails, read from inside an iframe

      if (display === "none" || !display) {
        // Use the already-created iframe if possible
        iframe = cc11001100_hook("iframe", (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement), "assign"); // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse

        doc = cc11001100_hook("doc", (iframe[0].contentWindow || iframe[0].contentDocument).document, "assign");
        doc.write("<!doctype html><html><body>");
        doc.close();
        display = cc11001100_hook("display", actualDisplay(nodeName, doc), "assign");
        iframe.detach();
      } // Store the correct default display


      elemdisplay[nodeName] = cc11001100_hook("elemdisplay[nodeName]", display, "assign");
    }

    return display;
  } // Called ONLY from within css_defaultDisplay


  function actualDisplay(name, doc) {
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("doc", doc, "function-parameter");
    var elem = cc11001100_hook("elem", jQuery(doc.createElement(name)).appendTo(doc.body), "var-init"),
        display = cc11001100_hook("display", jQuery.css(elem[0], "display"), "var-init");
    elem.remove();
    return display;
  }

  jQuery.each(["height", "width"], function (i, name) {
    jQuery.cssHooks[name] = cc11001100_hook("jQuery.cssHooks[name]", {
      get: function (elem, computed, extra) {
        if (computed) {
          // certain elements can have dimension info if we invisibly show them
          // however, it must have a current display style that would benefit from this
          return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function (elem, value, extra) {
        var styles = cc11001100_hook("styles", extra && getStyles(elem), "var-init");
        return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
      }
    }, "assign");
  });

  if (!jQuery.support.opacity) {
    jQuery.cssHooks.opacity = cc11001100_hook("jQuery.cssHooks.opacity", {
      get: function (elem, computed) {
        // IE uses filters for opacity
        return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
      },
      set: function (elem, value) {
        var style = cc11001100_hook("style", elem.style, "var-init"),
            currentStyle = cc11001100_hook("currentStyle", elem.currentStyle, "var-init"),
            opacity = cc11001100_hook("opacity", jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "", "var-init"),
            filter = cc11001100_hook("filter", currentStyle && currentStyle.filter || style.filter || "", "var-init"); // IE has trouble with opacity if it does not have layout
        // Force it by setting the zoom level

        style.zoom = cc11001100_hook("style.zoom", 1, "assign"); // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
        // if value === "", then remove inline opacity #12685

        if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
          // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
          // if "filter:" is present at all, clearType is disabled, we want to avoid this
          // style.removeAttribute is IE Only, but so apparently is this code path...
          style.removeAttribute("filter"); // if there is no filter style applied in a css rule or unset inline opacity, we are done

          if (value === "" || currentStyle && !currentStyle.filter) {
            return;
          }
        } // otherwise, set new filter values


        style.filter = cc11001100_hook("style.filter", ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity, "assign");
      }
    }, "assign");
  } // These hooks cannot be added until DOM ready because the support test
  // for it is not run until after DOM ready


  jQuery(function () {
    if (!jQuery.support.reliableMarginRight) {
      jQuery.cssHooks.marginRight = cc11001100_hook("jQuery.cssHooks.marginRight", {
        get: function (elem, computed) {
          if (computed) {
            // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
            // Work around by temporarily setting element display to inline-block
            return jQuery.swap(elem, {
              "display": cc11001100_hook("display", "inline-block", "object-key-init")
            }, curCSS, [elem, "marginRight"]);
          }
        }
      }, "assign");
    } // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // getComputedStyle returns percent when specified for top/left/bottom/right
    // rather than make the css module depend on the offset module, we just check for it here


    if (!jQuery.support.pixelPosition && jQuery.fn.position) {
      jQuery.each(["top", "left"], function (i, prop) {
        jQuery.cssHooks[prop] = cc11001100_hook("jQuery.cssHooks[prop]", {
          get: function (elem, computed) {
            if (computed) {
              computed = cc11001100_hook("computed", curCSS(elem, prop), "assign"); // if curCSS returns percentage, fallback to offset

              return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
          }
        }, "assign");
      });
    }
  });

  if (jQuery.expr && jQuery.expr.filters) {
    jQuery.expr.filters.hidden = cc11001100_hook("jQuery.expr.filters.hidden", function (elem) {
      // Support: Opera <= 12.12
      // Opera reports offsetWidths and offsetHeights less than zero on some elements
      return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
    }, "assign");
    jQuery.expr.filters.visible = cc11001100_hook("jQuery.expr.filters.visible", function (elem) {
      return !jQuery.expr.filters.hidden(elem);
    }, "assign");
  } // These hooks are used by animate to expand properties


  jQuery.each({
    margin: cc11001100_hook("margin", "", "object-key-init"),
    padding: cc11001100_hook("padding", "", "object-key-init"),
    border: cc11001100_hook("border", "Width", "object-key-init")
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = cc11001100_hook("jQuery.cssHooks[prefix + suffix]", {
      expand: function (value) {
        var i = cc11001100_hook("i", 0, "var-init"),
            expanded = cc11001100_hook("expanded", {}, "var-init"),
            // assumes a single number if not a string
        parts = cc11001100_hook("parts", typeof value === "string" ? value.split(" ") : [value], "var-init");

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = cc11001100_hook("expanded[prefix + cssExpand[i] + suffix]", parts[i] || parts[i - 2] || parts[0], "assign");
        }

        return expanded;
      }
    }, "assign");

    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = cc11001100_hook("jQuery.cssHooks[prefix + suffix].set", setPositiveNumber, "assign");
    }
  });
  var r20 = cc11001100_hook("r20", /%20/g, "var-init"),
      rbracket = cc11001100_hook("rbracket", /\[\]$/, "var-init"),
      rCRLF = cc11001100_hook("rCRLF", /\r?\n/g, "var-init"),
      rsubmitterTypes = cc11001100_hook("rsubmitterTypes", /^(?:submit|button|image|reset|file)$/i, "var-init"),
      rsubmittable = cc11001100_hook("rsubmittable", /^(?:input|select|textarea|keygen)/i, "var-init");
  jQuery.fn.extend({
    serialize: function () {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = cc11001100_hook("elements", jQuery.prop(this, "elements"), "var-init");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = cc11001100_hook("type", this.type, "var-init"); // Use .is(":disabled") so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = cc11001100_hook("val", jQuery(this).val(), "var-init");
        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
          return {
            name: cc11001100_hook("name", elem.name, "object-key-init"),
            value: cc11001100_hook("value", val.replace(rCRLF, "\r\n"), "object-key-init")
          };
        }) : {
          name: cc11001100_hook("name", elem.name, "object-key-init"),
          value: cc11001100_hook("value", val.replace(rCRLF, "\r\n"), "object-key-init")
        };
      }).get();
    }
  }); //Serialize an array of form elements or a set of
  //key/values into a query string

  jQuery.param = cc11001100_hook("jQuery.param", function (a, traditional) {
    var prefix,
        s = cc11001100_hook("s", [], "var-init"),
        add = function (key, value) {
      // If value is a function, invoke it and return its value
      value = cc11001100_hook("value", jQuery.isFunction(value) ? value() : value == null ? "" : value, "assign");
      s[s.length] = cc11001100_hook("s[s.length]", encodeURIComponent(key) + "=" + encodeURIComponent(value), "assign");
    }; // Set traditional to true for jQuery <= 1.3.2 behavior.


    if (traditional === undefined) {
      traditional = cc11001100_hook("traditional", jQuery.ajaxSettings && jQuery.ajaxSettings.traditional, "assign");
    } // If an array was passed in, assume that it is an array of form elements.


    if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&").replace(r20, "+");
  }, "assign");

  function buildParams(prefix, obj, traditional, add) {
    cc11001100_hook("prefix", prefix, "function-parameter");
    cc11001100_hook("obj", obj, "function-parameter");
    cc11001100_hook("traditional", traditional, "function-parameter");
    cc11001100_hook("add", add, "function-parameter");
    var name;

    if (jQuery.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  }

  jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
    // Handle event binding
    jQuery.fn[name] = cc11001100_hook("jQuery.fn[name]", function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    }, "assign");
  });
  jQuery.fn.hover = cc11001100_hook("jQuery.fn.hover", function (fnOver, fnOut) {
    return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
  }, "assign");

  var // Document location
  ajaxLocParts,
      ajaxLocation,
      ajax_nonce = cc11001100_hook("ajax_nonce", jQuery.now(), "var-init"),
      ajax_rquery = cc11001100_hook("ajax_rquery", /\?/, "var-init"),
      rhash = cc11001100_hook("rhash", /#.*$/, "var-init"),
      rts = cc11001100_hook("rts", /([?&])_=[^&]*/, "var-init"),
      rheaders = cc11001100_hook("rheaders", /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, "var-init"),
      // IE leaves an \r character at EOL
  // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = cc11001100_hook("rlocalProtocol", /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, "var-init"),
      rnoContent = cc11001100_hook("rnoContent", /^(?:GET|HEAD)$/, "var-init"),
      rprotocol = cc11001100_hook("rprotocol", /^\/\//, "var-init"),
      rurl = cc11001100_hook("rurl", /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, "var-init"),
      // Keep a copy of the old load method
  _load = cc11001100_hook("_load", jQuery.fn.load, "var-init"),

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = cc11001100_hook("prefilters", {}, "var-init"),

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = cc11001100_hook("transports", {}, "var-init"),
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = cc11001100_hook("allTypes", "*/".concat("*"), "var-init"); // #8138, IE may throw an exception when accessing
  // a field from window.location if document.domain has been set


  try {
    ajaxLocation = cc11001100_hook("ajaxLocation", location.href, "assign");
  } catch (e) {
    // Use the href attribute of an A element
    // since IE will modify it given document.location
    ajaxLocation = cc11001100_hook("ajaxLocation", document.createElement("a"), "assign");
    ajaxLocation.href = cc11001100_hook("ajaxLocation.href", "", "assign");
    ajaxLocation = cc11001100_hook("ajaxLocation", ajaxLocation.href, "assign");
  } // Segment location into parts


  ajaxLocParts = cc11001100_hook("ajaxLocParts", rurl.exec(ajaxLocation.toLowerCase()) || [], "assign"); // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    cc11001100_hook("structure", structure, "function-parameter");
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = cc11001100_hook("func", dataTypeExpression, "assign");
        dataTypeExpression = cc11001100_hook("dataTypeExpression", "*", "assign");
      }

      var dataType,
          i = cc11001100_hook("i", 0, "var-init"),
          dataTypes = cc11001100_hook("dataTypes", dataTypeExpression.toLowerCase().match(core_rnotwhite) || [], "var-init");

      if (jQuery.isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = cc11001100_hook("dataType", dataTypes[i++], "assign")) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = cc11001100_hook("dataType", dataType.slice(1) || "*", "assign");
            (structure[dataType] = cc11001100_hook("structure[dataType]", structure[dataType] || [], "assign")).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = cc11001100_hook("structure[dataType]", structure[dataType] || [], "assign")).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    cc11001100_hook("structure", structure, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");
    cc11001100_hook("originalOptions", originalOptions, "function-parameter");
    cc11001100_hook("jqXHR", jqXHR, "function-parameter");
    var inspected = cc11001100_hook("inspected", {}, "var-init"),
        seekingTransport = cc11001100_hook("seekingTransport", structure === transports, "var-init");

    function inspect(dataType) {
      cc11001100_hook("dataType", dataType, "function-parameter");
      var selected;
      inspected[dataType] = cc11001100_hook("inspected[dataType]", true, "assign");
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = cc11001100_hook("dataTypeOrTransport", prefilterOrFactory(options, originalOptions, jqXHR), "var-init");

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = cc11001100_hook("selected", dataTypeOrTransport, "assign"));
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    cc11001100_hook("target", target, "function-parameter");
    cc11001100_hook("src", src, "function-parameter");
    var deep,
        key,
        flatOptions = cc11001100_hook("flatOptions", jQuery.ajaxSettings.flatOptions || {}, "var-init");

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = cc11001100_hook("deep", {}, "assign")))[key] = cc11001100_hook("(flatOptions[key] ? target : deep || (deep = {}))[key]", src[key], "assign");
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }

  jQuery.fn.load = cc11001100_hook("jQuery.fn.load", function (url, params, callback) {
    if (typeof url !== "string" && _load) {
      return _load.apply(this, arguments);
    }

    var selector,
        response,
        type,
        self = cc11001100_hook("self", this, "var-init"),
        off = cc11001100_hook("off", url.indexOf(" "), "var-init");

    if (off >= 0) {
      selector = cc11001100_hook("selector", url.slice(off, url.length), "assign");
      url = cc11001100_hook("url", url.slice(0, off), "assign");
    } // If it's a function


    if (jQuery.isFunction(params)) {
      // We assume that it's the callback
      callback = cc11001100_hook("callback", params, "assign");
      params = cc11001100_hook("params", undefined, "assign"); // Otherwise, build a param string
    } else if (params && typeof params === "object") {
      type = cc11001100_hook("type", "POST", "assign");
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: cc11001100_hook("url", url, "object-key-init"),
        // if "type" variable is undefined, then "GET" method will be used
        type: cc11001100_hook("type", type, "object-key-init"),
        dataType: cc11001100_hook("dataType", "html", "object-key-init"),
        data: cc11001100_hook("data", params, "object-key-init")
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = cc11001100_hook("response", arguments, "assign");
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText);
      }).complete(callback && function (jqXHR, status) {
        self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
      });
    }

    return this;
  }, "assign"); // Attach a bunch of functions for handling common AJAX events

  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
    jQuery.fn[type] = cc11001100_hook("jQuery.fn[type]", function (fn) {
      return this.on(type, fn);
    }, "assign");
  });
  jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = cc11001100_hook("jQuery[method]", function (url, data, callback, type) {
      // shift arguments if data argument was omitted
      if (jQuery.isFunction(data)) {
        type = cc11001100_hook("type", type || callback, "assign");
        callback = cc11001100_hook("callback", data, "assign");
        data = cc11001100_hook("data", undefined, "assign");
      }

      return jQuery.ajax({
        url: cc11001100_hook("url", url, "object-key-init"),
        type: cc11001100_hook("type", method, "object-key-init"),
        dataType: cc11001100_hook("dataType", type, "object-key-init"),
        data: cc11001100_hook("data", data, "object-key-init"),
        success: cc11001100_hook("success", callback, "object-key-init")
      });
    }, "assign");
  });
  jQuery.extend({
    // Counter for holding the number of active queries
    active: cc11001100_hook("active", 0, "object-key-init"),
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cc11001100_hook("url", ajaxLocation, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      isLocal: cc11001100_hook("isLocal", rlocalProtocol.test(ajaxLocParts[1]), "object-key-init"),
      global: cc11001100_hook("global", true, "object-key-init"),
      processData: cc11001100_hook("processData", true, "object-key-init"),
      async: cc11001100_hook("async", true, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=UTF-8", "object-key-init"),

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": cc11001100_hook("*", allTypes, "object-key-init"),
        text: cc11001100_hook("text", "text/plain", "object-key-init"),
        html: cc11001100_hook("html", "text/html", "object-key-init"),
        xml: cc11001100_hook("xml", "application/xml, text/xml", "object-key-init"),
        json: cc11001100_hook("json", "application/json, text/javascript", "object-key-init")
      },
      contents: {
        xml: cc11001100_hook("xml", /xml/, "object-key-init"),
        html: cc11001100_hook("html", /html/, "object-key-init"),
        json: cc11001100_hook("json", /json/, "object-key-init")
      },
      responseFields: {
        xml: cc11001100_hook("xml", "responseXML", "object-key-init"),
        text: cc11001100_hook("text", "responseText", "object-key-init")
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": cc11001100_hook("* text", window.String, "object-key-init"),
        // Text to html (true = no transformation)
        "text html": cc11001100_hook("text html", true, "object-key-init"),
        // Evaluate text as a json expression
        "text json": cc11001100_hook("text json", jQuery.parseJSON, "object-key-init"),
        // Parse text as xml
        "text xml": cc11001100_hook("text xml", jQuery.parseXML, "object-key-init")
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: cc11001100_hook("url", true, "object-key-init"),
        context: cc11001100_hook("context", true, "object-key-init")
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function (target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: cc11001100_hook("ajaxPrefilter", addToPrefiltersOrTransports(prefilters), "object-key-init"),
    ajaxTransport: cc11001100_hook("ajaxTransport", addToPrefiltersOrTransports(transports), "object-key-init"),
    // Main method
    ajax: function (url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (typeof url === "object") {
        options = cc11001100_hook("options", url, "assign");
        url = cc11001100_hook("url", undefined, "assign");
      } // Force options to be an object


      options = cc11001100_hook("options", options || {}, "assign");
      var // Cross-domain detection vars
      parts,
          // Loop variable
      i,
          // URL without anti-cache param
      cacheURL,
          // Response headers as string
      responseHeadersString,
          // timeout handle
      timeoutTimer,
          // To know if global events are to be dispatched
      fireGlobals,
          transport,
          // Response headers
      responseHeaders,
          // Create the final options object
      s = cc11001100_hook("s", jQuery.ajaxSetup({}, options), "var-init"),
          // Callbacks context
      callbackContext = cc11001100_hook("callbackContext", s.context || s, "var-init"),
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = cc11001100_hook("globalEventContext", s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, "var-init"),
          // Deferreds
      deferred = cc11001100_hook("deferred", jQuery.Deferred(), "var-init"),
          completeDeferred = cc11001100_hook("completeDeferred", jQuery.Callbacks("once memory"), "var-init"),
          // Status-dependent callbacks
      statusCode = cc11001100_hook("statusCode", s.statusCode || {}, "var-init"),
          // Headers (they are sent all at once)
      requestHeaders = cc11001100_hook("requestHeaders", {}, "var-init"),
          requestHeadersNames = cc11001100_hook("requestHeadersNames", {}, "var-init"),
          // The jqXHR state
      state = cc11001100_hook("state", 0, "var-init"),
          // Default abort message
      strAbort = cc11001100_hook("strAbort", "canceled", "var-init"),
          // Fake xhr
      jqXHR = cc11001100_hook("jqXHR", {
        readyState: cc11001100_hook("readyState", 0, "object-key-init"),
        // Builds headers hashtable if needed
        getResponseHeader: function (key) {
          var match;

          if (state === 2) {
            if (!responseHeaders) {
              responseHeaders = cc11001100_hook("responseHeaders", {}, "assign");

              while (match = cc11001100_hook("match", rheaders.exec(responseHeadersString), "assign")) {
                responseHeaders[match[1].toLowerCase()] = cc11001100_hook("responseHeaders[match[1].toLowerCase()]", match[2], "assign");
              }
            }

            match = cc11001100_hook("match", responseHeaders[key.toLowerCase()], "assign");
          }

          return match == null ? null : match;
        },
        // Raw string
        getAllResponseHeaders: function () {
          return state === 2 ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function (name, value) {
          var lname = cc11001100_hook("lname", name.toLowerCase(), "var-init");

          if (!state) {
            name = cc11001100_hook("name", requestHeadersNames[lname] = cc11001100_hook("requestHeadersNames[lname]", requestHeadersNames[lname] || name, "assign"), "assign");
            requestHeaders[name] = cc11001100_hook("requestHeaders[name]", value, "assign");
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function (type) {
          if (!state) {
            s.mimeType = cc11001100_hook("s.mimeType", type, "assign");
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function (map) {
          var code;

          if (map) {
            if (state < 2) {
              for (code in map) {
                // Lazy-add the new callback in a way that preserves old ones
                statusCode[code] = cc11001100_hook("statusCode[code]", [statusCode[code], map[code]], "assign");
              }
            } else {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            }
          }

          return this;
        },
        // Cancel the request
        abort: function (statusText) {
          var finalText = cc11001100_hook("finalText", statusText || strAbort, "var-init");

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }, "var-init"); // Attach deferreds

      deferred.promise(jqXHR).complete = cc11001100_hook("deferred.promise(jqXHR).complete", completeDeferred.add, "assign");
      jqXHR.success = cc11001100_hook("jqXHR.success", jqXHR.done, "assign");
      jqXHR.error = cc11001100_hook("jqXHR.error", jqXHR.fail, "assign"); // Remove hash character (#7531: and string promotion)
      // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = cc11001100_hook("s.url", ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), "assign"); // Alias method option to type as per ticket #12004

      s.type = cc11001100_hook("s.type", options.method || options.type || s.method || s.type, "assign"); // Extract dataTypes list

      s.dataTypes = cc11001100_hook("s.dataTypes", jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""], "assign"); // A cross-domain request is in order when we have a protocol:host:port mismatch

      if (s.crossDomain == null) {
        parts = cc11001100_hook("parts", rurl.exec(s.url.toLowerCase()), "assign");
        s.crossDomain = cc11001100_hook("s.crossDomain", !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? 80 : 443)) != (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? 80 : 443)))), "assign");
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = cc11001100_hook("s.data", jQuery.param(s.data, s.traditional), "assign");
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (state === 2) {
        return jqXHR;
      } // We can fire global events as of now if asked to


      fireGlobals = cc11001100_hook("fireGlobals", s.global, "assign"); // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = cc11001100_hook("s.type", s.type.toUpperCase(), "assign"); // Determine if request has content

      s.hasContent = cc11001100_hook("s.hasContent", !rnoContent.test(s.type), "assign"); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on

      cacheURL = cc11001100_hook("cacheURL", s.url, "assign"); // More options handling for requests with no content

      if (!s.hasContent) {
        // If data is available, append data to url
        if (s.data) {
          cacheURL = cc11001100_hook("cacheURL", s.url += cc11001100_hook("s.url", (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data, "assign"), "assign"); // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add anti-cache in url if needed


        if (s.cache === false) {
          s.url = cc11001100_hook("s.url", rts.test(cacheURL) ? // If there is already a '_' parameter, set its value
          cacheURL.replace(rts, "$1_=" + ajax_nonce++) : // Otherwise add one to the end
          cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++, "assign");
        }
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // aborting is no longer a cancellation


      strAbort = cc11001100_hook("strAbort", "abort", "assign"); // Install callbacks on deferreds

      for (i in {
        success: cc11001100_hook("success", 1, "object-key-init"),
        error: cc11001100_hook("error", 1, "object-key-init"),
        complete: cc11001100_hook("complete", 1, "object-key-init")
      }) {
        jqXHR[i](s[i]);
      } // Get transport


      transport = cc11001100_hook("transport", inspectPrefiltersOrTransports(transports, s, options, jqXHR), "assign"); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = cc11001100_hook("jqXHR.readyState", 1, "assign"); // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = cc11001100_hook("timeoutTimer", setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout), "assign");
        }

        try {
          state = cc11001100_hook("state", 1, "assign");
          transport.send(requestHeaders, done);
        } catch (e) {
          // Propagate exception as error if not done
          if (state < 2) {
            done(-1, e); // Simply rethrow otherwise
          } else {
            throw e;
          }
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        cc11001100_hook("status", status, "function-parameter");
        cc11001100_hook("nativeStatusText", nativeStatusText, "function-parameter");
        cc11001100_hook("responses", responses, "function-parameter");
        cc11001100_hook("headers", headers, "function-parameter");
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = cc11001100_hook("statusText", nativeStatusText, "var-init"); // Called once

        if (state === 2) {
          return;
        } // State is "done" now


        state = cc11001100_hook("state", 2, "assign"); // Clear timeout if it exists

        if (timeoutTimer) {
          clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = cc11001100_hook("transport", undefined, "assign"); // Cache response headers

        responseHeadersString = cc11001100_hook("responseHeadersString", headers || "", "assign"); // Set readyState

        jqXHR.readyState = cc11001100_hook("jqXHR.readyState", status > 0 ? 4 : 0, "assign"); // Get response data

        if (responses) {
          response = cc11001100_hook("response", ajaxHandleResponses(s, jqXHR, responses), "assign");
        } // If successful, handle type chaining


        if (status >= 200 && status < 300 || status === 304) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = cc11001100_hook("modified", jqXHR.getResponseHeader("Last-Modified"), "assign");

            if (modified) {
              jQuery.lastModified[cacheURL] = cc11001100_hook("jQuery.lastModified[cacheURL]", modified, "assign");
            }

            modified = cc11001100_hook("modified", jqXHR.getResponseHeader("etag"), "assign");

            if (modified) {
              jQuery.etag[cacheURL] = cc11001100_hook("jQuery.etag[cacheURL]", modified, "assign");
            }
          } // if no content


          if (status === 204) {
            isSuccess = cc11001100_hook("isSuccess", true, "assign");
            statusText = cc11001100_hook("statusText", "nocontent", "assign"); // if not modified
          } else if (status === 304) {
            isSuccess = cc11001100_hook("isSuccess", true, "assign");
            statusText = cc11001100_hook("statusText", "notmodified", "assign"); // If we have data, let's convert it
          } else {
            isSuccess = cc11001100_hook("isSuccess", ajaxConvert(s, response), "assign");
            statusText = cc11001100_hook("statusText", isSuccess.state, "assign");
            success = cc11001100_hook("success", isSuccess.data, "assign");
            error = cc11001100_hook("error", isSuccess.error, "assign");
            isSuccess = cc11001100_hook("isSuccess", !error, "assign");
          }
        } else {
          // We extract error from statusText
          // then normalize statusText and status for non-aborts
          error = cc11001100_hook("error", statusText, "assign");

          if (status || !statusText) {
            statusText = cc11001100_hook("statusText", "error", "assign");

            if (status < 0) {
              status = cc11001100_hook("status", 0, "assign");
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = cc11001100_hook("jqXHR.status", status, "assign");
        jqXHR.statusText = cc11001100_hook("jqXHR.statusText", (nativeStatusText || statusText) + "", "assign"); // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(statusCode);
        statusCode = cc11001100_hook("statusCode", undefined, "assign");

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getScript: function (url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    },
    getJSON: function (url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    }
  });
  /* Handles responses to an ajax request:
   * - sets all responseXXX fields accordingly
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */

  function ajaxHandleResponses(s, jqXHR, responses) {
    cc11001100_hook("s", s, "function-parameter");
    cc11001100_hook("jqXHR", jqXHR, "function-parameter");
    cc11001100_hook("responses", responses, "function-parameter");
    var firstDataType,
        ct,
        finalDataType,
        type,
        contents = cc11001100_hook("contents", s.contents, "var-init"),
        dataTypes = cc11001100_hook("dataTypes", s.dataTypes, "var-init"),
        responseFields = cc11001100_hook("responseFields", s.responseFields, "var-init"); // Fill responseXXX fields

    for (type in responseFields) {
      if (type in responses) {
        jqXHR[responseFields[type]] = cc11001100_hook("jqXHR[responseFields[type]]", responses[type], "assign");
      }
    } // Remove auto dataType and get content-type in the process


    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = cc11001100_hook("ct", s.mimeType || jqXHR.getResponseHeader("Content-Type"), "assign");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = cc11001100_hook("finalDataType", dataTypes[0], "assign");
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = cc11001100_hook("finalDataType", type, "assign");
          break;
        }

        if (!firstDataType) {
          firstDataType = cc11001100_hook("firstDataType", type, "assign");
        }
      } // Or just use first one


      finalDataType = cc11001100_hook("finalDataType", finalDataType || firstDataType, "assign");
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  } // Chain conversions given the request and the original response


  function ajaxConvert(s, response) {
    cc11001100_hook("s", s, "function-parameter");
    cc11001100_hook("response", response, "function-parameter");
    var conv2,
        current,
        conv,
        tmp,
        converters = cc11001100_hook("converters", {}, "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = cc11001100_hook("dataTypes", s.dataTypes.slice(), "var-init"),
        prev = cc11001100_hook("prev", dataTypes[0], "var-init"); // Apply the dataFilter if provided

    if (s.dataFilter) {
      response = cc11001100_hook("response", s.dataFilter(response, s.dataType), "assign");
    } // Create converters map with lowercased keys


    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = cc11001100_hook("converters[conv.toLowerCase()]", s.converters[conv], "assign");
      }
    } // Convert to each sequential dataType, tolerating list modification


    for (; current = cc11001100_hook("current", dataTypes[++i], "assign");) {
      // There's only work to do if current dataType is non-auto
      if (current !== "*") {
        // Convert response if prev dataType is non-auto and differs from current
        if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = cc11001100_hook("conv", converters[prev + " " + current] || converters["* " + current], "assign"); // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = cc11001100_hook("tmp", conv2.split(" "), "assign");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = cc11001100_hook("conv", converters[prev + " " + tmp[0]] || converters["* " + tmp[0]], "assign");

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = cc11001100_hook("conv", converters[conv2], "assign"); // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = cc11001100_hook("current", tmp[0], "assign");
                    dataTypes.splice(i--, 0, current);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s["throws"]) {
              response = cc11001100_hook("response", conv(response), "assign");
            } else {
              try {
                response = cc11001100_hook("response", conv(response), "assign");
              } catch (e) {
                return {
                  state: cc11001100_hook("state", "parsererror", "object-key-init"),
                  error: cc11001100_hook("error", conv ? e : "No conversion from " + prev + " to " + current, "object-key-init")
                };
              }
            }
          }
        } // Update prev for next iteration


        prev = cc11001100_hook("prev", current, "assign");
      }
    }

    return {
      state: cc11001100_hook("state", "success", "object-key-init"),
      data: cc11001100_hook("data", response, "object-key-init")
    };
  } // Install script dataType


  jQuery.ajaxSetup({
    accepts: {
      script: cc11001100_hook("script", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript", "object-key-init")
    },
    contents: {
      script: cc11001100_hook("script", /(?:java|ecma)script/, "object-key-init")
    },
    converters: {
      "text script": function (text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and global

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = cc11001100_hook("s.cache", false, "assign");
    }

    if (s.crossDomain) {
      s.type = cc11001100_hook("s.type", "GET", "assign");
      s.global = cc11001100_hook("s.global", false, "assign");
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain requests
    if (s.crossDomain) {
      var script,
          head = cc11001100_hook("head", document.head || jQuery("head")[0] || document.documentElement, "var-init");
      return {
        send: function (_, callback) {
          script = cc11001100_hook("script", document.createElement("script"), "assign");
          script.async = cc11001100_hook("script.async", true, "assign");

          if (s.scriptCharset) {
            script.charset = cc11001100_hook("script.charset", s.scriptCharset, "assign");
          }

          script.src = cc11001100_hook("script.src", s.url, "assign"); // Attach handlers for all browsers

          script.onload = cc11001100_hook("script.onload", script.onreadystatechange = cc11001100_hook("script.onreadystatechange", function (_, isAbort) {
            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
              // Handle memory leak in IE
              script.onload = cc11001100_hook("script.onload", script.onreadystatechange = cc11001100_hook("script.onreadystatechange", null, "assign"), "assign"); // Remove the script

              if (script.parentNode) {
                script.parentNode.removeChild(script);
              } // Dereference the script


              script = cc11001100_hook("script", null, "assign"); // Callback if not abort

              if (!isAbort) {
                callback(200, "success");
              }
            }
          }, "assign"), "assign"); // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
          // Use native DOM manipulation to avoid our domManip AJAX trickery

          head.insertBefore(script, head.firstChild);
        },
        abort: function () {
          if (script) {
            script.onload(undefined, true);
          }
        }
      };
    }
  });
  var oldCallbacks = cc11001100_hook("oldCallbacks", [], "var-init"),
      rjsonp = cc11001100_hook("rjsonp", /(=)\?(?=&|$)|\?\?/, "var-init"); // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
    jsonpCallback: function () {
      var callback = cc11001100_hook("callback", oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++, "var-init");
      this[callback] = cc11001100_hook("this[callback]", true, "assign");
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = cc11001100_hook("jsonProp", s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data"), "var-init"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = cc11001100_hook("callbackName", s.jsonpCallback = cc11001100_hook("s.jsonpCallback", jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, "assign"), "assign"); // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = cc11001100_hook("s[jsonProp]", s[jsonProp].replace(rjsonp, "$1" + callbackName), "assign");
      } else if (s.jsonp !== false) {
        s.url += cc11001100_hook("s.url", (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName, "assign");
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = cc11001100_hook("s.converters[\"script json\"]", function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }, "assign"); // force json dataType

      s.dataTypes[0] = cc11001100_hook("s.dataTypes[0]", "json", "assign"); // Install callback

      overwritten = cc11001100_hook("overwritten", window[callbackName], "assign");
      window[callbackName] = cc11001100_hook("window[callbackName]", function () {
        responseContainer = cc11001100_hook("responseContainer", arguments, "assign");
      }, "assign"); // Clean-up function (fires after converters)

      jqXHR.always(function () {
        // Restore preexisting value
        window[callbackName] = cc11001100_hook("window[callbackName]", overwritten, "assign"); // Save back as free

        if (s[callbackName]) {
          // make sure that re-using the options doesn't screw things around
          s.jsonpCallback = cc11001100_hook("s.jsonpCallback", originalSettings.jsonpCallback, "assign"); // save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = cc11001100_hook("responseContainer", overwritten = cc11001100_hook("overwritten", undefined, "assign"), "assign");
      }); // Delegate to script

      return "script";
    }
  });
  var xhrCallbacks,
      xhrSupported,
      xhrId = cc11001100_hook("xhrId", 0, "var-init"),
      // #5280: Internet Explorer will keep connections alive if we don't abort on unload
  xhrOnUnloadAbort = cc11001100_hook("xhrOnUnloadAbort", window.ActiveXObject && function () {
    // Abort all pending requests
    var key;

    for (key in xhrCallbacks) {
      xhrCallbacks[key](undefined, true);
    }
  }, "var-init"); // Functions to create xhrs

  function createStandardXHR() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  }

  function createActiveXHR() {
    try {
      return new window.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  } // Create the request object
  // (This is still attached to ajaxSettings for backward compatibility)


  jQuery.ajaxSettings.xhr = cc11001100_hook("jQuery.ajaxSettings.xhr", window.ActiveXObject ?
  /* Microsoft failed to properly
   * implement the XMLHttpRequest in IE7 (can't request local files),
   * so we use the ActiveXObject when it is available
   * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
   * we need a fallback.
   */
  function () {
    return !this.isLocal && createStandardXHR() || createActiveXHR();
  } : // For all other browsers, use the standard XMLHttpRequest object
  createStandardXHR, "assign"); // Determine support properties

  xhrSupported = cc11001100_hook("xhrSupported", jQuery.ajaxSettings.xhr(), "assign");
  jQuery.support.cors = cc11001100_hook("jQuery.support.cors", !!xhrSupported && "withCredentials" in xhrSupported, "assign");
  xhrSupported = cc11001100_hook("xhrSupported", jQuery.support.ajax = cc11001100_hook("jQuery.support.ajax", !!xhrSupported, "assign"), "assign"); // Create transport if the browser can provide an xhr

  if (xhrSupported) {
    jQuery.ajaxTransport(function (s) {
      // Cross domain only allowed if supported through XMLHttpRequest
      if (!s.crossDomain || jQuery.support.cors) {
        var callback;
        return {
          send: function (headers, complete) {
            // Get a new xhr
            var handle,
                i,
                xhr = cc11001100_hook("xhr", s.xhr(), "var-init"); // Open the socket
            // Passing null username, generates a login popup on Opera (#2865)

            if (s.username) {
              xhr.open(s.type, s.url, s.async, s.username, s.password);
            } else {
              xhr.open(s.type, s.url, s.async);
            } // Apply custom fields if provided


            if (s.xhrFields) {
              for (i in s.xhrFields) {
                xhr[i] = cc11001100_hook("xhr[i]", s.xhrFields[i], "assign");
              }
            } // Override mime type if needed


            if (s.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(s.mimeType);
            } // X-Requested-With header
            // For cross-domain requests, seeing as conditions for a preflight are
            // akin to a jigsaw puzzle, we simply never set it to be sure.
            // (it can always be set on a per-request basis or even using ajaxSetup)
            // For same-domain requests, won't change header if already provided.


            if (!s.crossDomain && !headers["X-Requested-With"]) {
              headers["X-Requested-With"] = cc11001100_hook("headers[\"X-Requested-With\"]", "XMLHttpRequest", "assign");
            } // Need an extra try/catch for cross domain requests in Firefox 3


            try {
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
            } catch (err) {} // Do send the request
            // This may raise an exception which is actually
            // handled in jQuery.ajax (so no try/catch here)


            xhr.send(s.hasContent && s.data || null); // Listener

            callback = cc11001100_hook("callback", function (_, isAbort) {
              var status, responseHeaders, statusText, responses; // Firefox throws exceptions when accessing properties
              // of an xhr when a network error occurred
              // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)

              try {
                // Was never called and is aborted or complete
                if (callback && (isAbort || xhr.readyState === 4)) {
                  // Only called once
                  callback = cc11001100_hook("callback", undefined, "assign"); // Do not keep as active anymore

                  if (handle) {
                    xhr.onreadystatechange = cc11001100_hook("xhr.onreadystatechange", jQuery.noop, "assign");

                    if (xhrOnUnloadAbort) {
                      delete xhrCallbacks[handle];
                    }
                  } // If it's an abort


                  if (isAbort) {
                    // Abort it manually if needed
                    if (xhr.readyState !== 4) {
                      xhr.abort();
                    }
                  } else {
                    responses = cc11001100_hook("responses", {}, "assign");
                    status = cc11001100_hook("status", xhr.status, "assign");
                    responseHeaders = cc11001100_hook("responseHeaders", xhr.getAllResponseHeaders(), "assign"); // When requesting binary data, IE6-9 will throw an exception
                    // on any attempt to access responseText (#11426)

                    if (typeof xhr.responseText === "string") {
                      responses.text = cc11001100_hook("responses.text", xhr.responseText, "assign");
                    } // Firefox throws an exception when accessing
                    // statusText for faulty cross-domain requests


                    try {
                      statusText = cc11001100_hook("statusText", xhr.statusText, "assign");
                    } catch (e) {
                      // We normalize with Webkit giving an empty statusText
                      statusText = cc11001100_hook("statusText", "", "assign");
                    } // Filter status for non standard behaviors
                    // If the request is local and we have data: assume a success
                    // (success with no data won't get notified, that's the best we
                    // can do given current implementations)


                    if (!status && s.isLocal && !s.crossDomain) {
                      status = cc11001100_hook("status", responses.text ? 200 : 404, "assign"); // IE - #1450: sometimes returns 1223 when it should be 204
                    } else if (status === 1223) {
                      status = cc11001100_hook("status", 204, "assign");
                    }
                  }
                }
              } catch (firefoxAccessException) {
                if (!isAbort) {
                  complete(-1, firefoxAccessException);
                }
              } // Call complete if needed


              if (responses) {
                complete(status, statusText, responses, responseHeaders);
              }
            }, "assign");

            if (!s.async) {
              // if we're in sync mode we fire the callback
              callback();
            } else if (xhr.readyState === 4) {
              // (IE6 & IE7) if it's in cache and has been
              // retrieved directly we need to fire the callback
              setTimeout(callback);
            } else {
              handle = cc11001100_hook("handle", ++xhrId, "assign");

              if (xhrOnUnloadAbort) {
                // Create the active xhrs callbacks list if needed
                // and attach the unload handler
                if (!xhrCallbacks) {
                  xhrCallbacks = cc11001100_hook("xhrCallbacks", {}, "assign");
                  jQuery(window).unload(xhrOnUnloadAbort);
                } // Add to list of active xhrs callbacks


                xhrCallbacks[handle] = cc11001100_hook("xhrCallbacks[handle]", callback, "assign");
              }

              xhr.onreadystatechange = cc11001100_hook("xhr.onreadystatechange", callback, "assign");
            }
          },
          abort: function () {
            if (callback) {
              callback(undefined, true);
            }
          }
        };
      }
    });
  }

  var fxNow,
      timerId,
      rfxtypes = cc11001100_hook("rfxtypes", /^(?:toggle|show|hide)$/, "var-init"),
      rfxnum = cc11001100_hook("rfxnum", new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"), "var-init"),
      rrun = cc11001100_hook("rrun", /queueHooks$/, "var-init"),
      animationPrefilters = cc11001100_hook("animationPrefilters", [defaultPrefilter], "var-init"),
      tweeners = cc11001100_hook("tweeners", {
    "*": cc11001100_hook("*", [function (prop, value) {
      var end,
          unit,
          tween = cc11001100_hook("tween", this.createTween(prop, value), "var-init"),
          parts = cc11001100_hook("parts", rfxnum.exec(value), "var-init"),
          target = cc11001100_hook("target", tween.cur(), "var-init"),
          start = cc11001100_hook("start", +target || 0, "var-init"),
          scale = cc11001100_hook("scale", 1, "var-init"),
          maxIterations = cc11001100_hook("maxIterations", 20, "var-init");

      if (parts) {
        end = cc11001100_hook("end", +parts[2], "assign");
        unit = cc11001100_hook("unit", parts[3] || (jQuery.cssNumber[prop] ? "" : "px"), "assign"); // We need to compute starting value

        if (unit !== "px" && start) {
          // Iteratively approximate from a nonzero starting point
          // Prefer the current property, because this process will be trivial if it uses the same units
          // Fallback to end or a simple constant
          start = cc11001100_hook("start", jQuery.css(tween.elem, prop, true) || end || 1, "assign");

          do {
            // If previous iteration zeroed out, double until we get *something*
            // Use a string for doubling factor so we don't accidentally see scale as unchanged below
            scale = cc11001100_hook("scale", scale || ".5", "assign"); // Adjust and apply

            start = cc11001100_hook("start", start / scale, "assign");
            jQuery.style(tween.elem, prop, start + unit); // Update scale, tolerating zero or NaN from tween.cur()
            // And breaking the loop if scale is unchanged or perfect, or if we've just had enough
          } while (scale !== (scale = cc11001100_hook("scale", tween.cur() / target, "assign")) && scale !== 1 && --maxIterations);
        }

        tween.unit = cc11001100_hook("tween.unit", unit, "assign");
        tween.start = cc11001100_hook("tween.start", start, "assign"); // If a +=/-= token was provided, we're doing a relative animation

        tween.end = cc11001100_hook("tween.end", parts[1] ? start + (parts[1] + 1) * end : end, "assign");
      }

      return tween;
    }], "object-key-init")
  }, "var-init"); // Animations created synchronously will run synchronously

  function createFxNow() {
    setTimeout(function () {
      fxNow = cc11001100_hook("fxNow", undefined, "assign");
    });
    return fxNow = cc11001100_hook("fxNow", jQuery.now(), "assign");
  }

  function createTweens(animation, props) {
    cc11001100_hook("animation", animation, "function-parameter");
    cc11001100_hook("props", props, "function-parameter");
    jQuery.each(props, function (prop, value) {
      var collection = cc11001100_hook("collection", (tweeners[prop] || []).concat(tweeners["*"]), "var-init"),
          index = cc11001100_hook("index", 0, "var-init"),
          length = cc11001100_hook("length", collection.length, "var-init");

      for (; index < length; index++) {
        if (collection[index].call(animation, prop, value)) {
          // we're done with this property
          return;
        }
      }
    });
  }

  function Animation(elem, properties, options) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("properties", properties, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");

    var result,
        stopped,
        index = cc11001100_hook("index", 0, "var-init"),
        length = cc11001100_hook("length", animationPrefilters.length, "var-init"),
        deferred = cc11001100_hook("deferred", jQuery.Deferred().always(function () {
      // don't match elem in the :animated selector
      delete tick.elem;
    }), "var-init"),
        tick = function () {
      if (stopped) {
        return false;
      }

      var currentTime = cc11001100_hook("currentTime", fxNow || createFxNow(), "var-init"),
          remaining = cc11001100_hook("remaining", Math.max(0, animation.startTime + animation.duration - currentTime), "var-init"),
          // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
      temp = cc11001100_hook("temp", remaining / animation.duration || 0, "var-init"),
          percent = cc11001100_hook("percent", 1 - temp, "var-init"),
          index = cc11001100_hook("index", 0, "var-init"),
          length = cc11001100_hook("length", animation.tweens.length, "var-init");

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]);

      if (percent < 1 && length) {
        return remaining;
      } else {
        deferred.resolveWith(elem, [animation]);
        return false;
      }
    },
        animation = cc11001100_hook("animation", deferred.promise({
      elem: cc11001100_hook("elem", elem, "object-key-init"),
      props: cc11001100_hook("props", jQuery.extend({}, properties), "object-key-init"),
      opts: cc11001100_hook("opts", jQuery.extend(true, {
        specialEasing: {}
      }, options), "object-key-init"),
      originalProperties: cc11001100_hook("originalProperties", properties, "object-key-init"),
      originalOptions: cc11001100_hook("originalOptions", options, "object-key-init"),
      startTime: cc11001100_hook("startTime", fxNow || createFxNow(), "object-key-init"),
      duration: cc11001100_hook("duration", options.duration, "object-key-init"),
      tweens: cc11001100_hook("tweens", [], "object-key-init"),
      createTween: function (prop, end) {
        var tween = cc11001100_hook("tween", jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing), "var-init");
        animation.tweens.push(tween);
        return tween;
      },
      stop: function (gotoEnd) {
        var index = cc11001100_hook("index", 0, "var-init"),
            // if we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = cc11001100_hook("length", gotoEnd ? animation.tweens.length : 0, "var-init");

        if (stopped) {
          return this;
        }

        stopped = cc11001100_hook("stopped", true, "assign");

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // resolve when we played the last frame
        // otherwise, reject


        if (gotoEnd) {
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }), "var-init"),
        props = cc11001100_hook("props", animation.props, "var-init");

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = cc11001100_hook("result", animationPrefilters[index].call(animation, elem, props, animation.opts), "assign");

      if (result) {
        return result;
      }
    }

    createTweens(animation, props);

    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }

    jQuery.fx.timer(jQuery.extend(tick, {
      elem: cc11001100_hook("elem", elem, "object-key-init"),
      anim: cc11001100_hook("anim", animation, "object-key-init"),
      queue: cc11001100_hook("queue", animation.opts.queue, "object-key-init")
    })); // attach callbacks from options

    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }

  function propFilter(props, specialEasing) {
    cc11001100_hook("props", props, "function-parameter");
    cc11001100_hook("specialEasing", specialEasing, "function-parameter");
    var value, name, index, easing, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = cc11001100_hook("name", jQuery.camelCase(index), "assign");
      easing = cc11001100_hook("easing", specialEasing[name], "assign");
      value = cc11001100_hook("value", props[index], "assign");

      if (jQuery.isArray(value)) {
        easing = cc11001100_hook("easing", value[1], "assign");
        value = cc11001100_hook("value", props[index] = cc11001100_hook("props[index]", value[0], "assign"), "assign");
      }

      if (index !== name) {
        props[name] = cc11001100_hook("props[name]", value, "assign");
        delete props[index];
      }

      hooks = cc11001100_hook("hooks", jQuery.cssHooks[name], "assign");

      if (hooks && "expand" in hooks) {
        value = cc11001100_hook("value", hooks.expand(value), "assign");
        delete props[name]; // not quite $.extend, this wont overwrite keys already present.
        // also - reusing 'index' from above because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = cc11001100_hook("props[index]", value[index], "assign");
            specialEasing[index] = cc11001100_hook("specialEasing[index]", easing, "assign");
          }
        }
      } else {
        specialEasing[name] = cc11001100_hook("specialEasing[name]", easing, "assign");
      }
    }
  }

  jQuery.Animation = cc11001100_hook("jQuery.Animation", jQuery.extend(Animation, {
    tweener: function (props, callback) {
      if (jQuery.isFunction(props)) {
        callback = cc11001100_hook("callback", props, "assign");
        props = cc11001100_hook("props", ["*"], "assign");
      } else {
        props = cc11001100_hook("props", props.split(" "), "assign");
      }

      var prop,
          index = cc11001100_hook("index", 0, "var-init"),
          length = cc11001100_hook("length", props.length, "var-init");

      for (; index < length; index++) {
        prop = cc11001100_hook("prop", props[index], "assign");
        tweeners[prop] = cc11001100_hook("tweeners[prop]", tweeners[prop] || [], "assign");
        tweeners[prop].unshift(callback);
      }
    },
    prefilter: function (callback, prepend) {
      if (prepend) {
        animationPrefilters.unshift(callback);
      } else {
        animationPrefilters.push(callback);
      }
    }
  }), "assign");

  function defaultPrefilter(elem, props, opts) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("props", props, "function-parameter");
    cc11001100_hook("opts", opts, "function-parameter");

    /*jshint validthis:true */
    var prop,
        index,
        length,
        value,
        dataShow,
        toggle,
        tween,
        hooks,
        oldfire,
        anim = cc11001100_hook("anim", this, "var-init"),
        style = cc11001100_hook("style", elem.style, "var-init"),
        orig = cc11001100_hook("orig", {}, "var-init"),
        handled = cc11001100_hook("handled", [], "var-init"),
        hidden = cc11001100_hook("hidden", elem.nodeType && isHidden(elem), "var-init"); // handle queue: false promises

    if (!opts.queue) {
      hooks = cc11001100_hook("hooks", jQuery._queueHooks(elem, "fx"), "assign");

      if (hooks.unqueued == null) {
        hooks.unqueued = cc11001100_hook("hooks.unqueued", 0, "assign");
        oldfire = cc11001100_hook("oldfire", hooks.empty.fire, "assign");
        hooks.empty.fire = cc11001100_hook("hooks.empty.fire", function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        }, "assign");
      }

      hooks.unqueued++;
      anim.always(function () {
        // doing this makes sure that the complete handler will be called
        // before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // height/width overflow pass


    if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
      // Make sure that nothing sneaks out
      // Record all 3 overflow attributes because IE does not
      // change the overflow attribute when overflowX and
      // overflowY are set to the same value
      opts.overflow = cc11001100_hook("opts.overflow", [style.overflow, style.overflowX, style.overflowY], "assign"); // Set display property to inline-block for height/width
      // animations on inline elements that are having width/height animated

      if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
        // inline-level elements accept inline-block;
        // block-level elements need to be inline with layout
        if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
          style.display = cc11001100_hook("style.display", "inline-block", "assign");
        } else {
          style.zoom = cc11001100_hook("style.zoom", 1, "assign");
        }
      }
    }

    if (opts.overflow) {
      style.overflow = cc11001100_hook("style.overflow", "hidden", "assign");

      if (!jQuery.support.shrinkWrapBlocks) {
        anim.always(function () {
          style.overflow = cc11001100_hook("style.overflow", opts.overflow[0], "assign");
          style.overflowX = cc11001100_hook("style.overflowX", opts.overflow[1], "assign");
          style.overflowY = cc11001100_hook("style.overflowY", opts.overflow[2], "assign");
        });
      }
    } // show/hide pass


    for (index in props) {
      value = cc11001100_hook("value", props[index], "assign");

      if (rfxtypes.exec(value)) {
        delete props[index];
        toggle = cc11001100_hook("toggle", toggle || value === "toggle", "assign");

        if (value === (hidden ? "hide" : "show")) {
          continue;
        }

        handled.push(index);
      }
    }

    length = cc11001100_hook("length", handled.length, "assign");

    if (length) {
      dataShow = cc11001100_hook("dataShow", jQuery._data(elem, "fxshow") || jQuery._data(elem, "fxshow", {}), "assign");

      if ("hidden" in dataShow) {
        hidden = cc11001100_hook("hidden", dataShow.hidden, "assign");
      } // store state if its toggle - enables .stop().toggle() to "reverse"


      if (toggle) {
        dataShow.hidden = cc11001100_hook("dataShow.hidden", !hidden, "assign");
      }

      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function () {
          jQuery(elem).hide();
        });
      }

      anim.done(function () {
        var prop;

        jQuery._removeData(elem, "fxshow");

        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });

      for (index = cc11001100_hook("index", 0, "assign"); index < length; index++) {
        prop = cc11001100_hook("prop", handled[index], "assign");
        tween = cc11001100_hook("tween", anim.createTween(prop, hidden ? dataShow[prop] : 0), "assign");
        orig[prop] = cc11001100_hook("orig[prop]", dataShow[prop] || jQuery.style(elem, prop), "assign");

        if (!(prop in dataShow)) {
          dataShow[prop] = cc11001100_hook("dataShow[prop]", tween.start, "assign");

          if (hidden) {
            tween.end = cc11001100_hook("tween.end", tween.start, "assign");
            tween.start = cc11001100_hook("tween.start", prop === "width" || prop === "height" ? 1 : 0, "assign");
          }
        }
      }
    }
  }

  function Tween(elem, options, prop, end, easing) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");
    cc11001100_hook("prop", prop, "function-parameter");
    cc11001100_hook("end", end, "function-parameter");
    cc11001100_hook("easing", easing, "function-parameter");
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = cc11001100_hook("jQuery.Tween", Tween, "assign");
  Tween.prototype = cc11001100_hook("Tween.prototype", {
    constructor: cc11001100_hook("constructor", Tween, "object-key-init"),
    init: function (elem, options, prop, end, easing, unit) {
      this.elem = cc11001100_hook("this.elem", elem, "assign");
      this.prop = cc11001100_hook("this.prop", prop, "assign");
      this.easing = cc11001100_hook("this.easing", easing || "swing", "assign");
      this.options = cc11001100_hook("this.options", options, "assign");
      this.start = cc11001100_hook("this.start", this.now = cc11001100_hook("this.now", this.cur(), "assign"), "assign");
      this.end = cc11001100_hook("this.end", end, "assign");
      this.unit = cc11001100_hook("this.unit", unit || (jQuery.cssNumber[prop] ? "" : "px"), "assign");
    },
    cur: function () {
      var hooks = cc11001100_hook("hooks", Tween.propHooks[this.prop], "var-init");
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function (percent) {
      var eased,
          hooks = cc11001100_hook("hooks", Tween.propHooks[this.prop], "var-init");

      if (this.options.duration) {
        this.pos = cc11001100_hook("this.pos", eased = cc11001100_hook("eased", jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration), "assign"), "assign");
      } else {
        this.pos = cc11001100_hook("this.pos", eased = cc11001100_hook("eased", percent, "assign"), "assign");
      }

      this.now = cc11001100_hook("this.now", (this.end - this.start) * eased + this.start, "assign");

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  }, "assign");
  Tween.prototype.init.prototype = cc11001100_hook("Tween.prototype.init.prototype", Tween.prototype, "assign");
  Tween.propHooks = cc11001100_hook("Tween.propHooks", {
    _default: {
      get: function (tween) {
        var result;

        if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
          return tween.elem[tween.prop];
        } // passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails
        // so, simple values such as "10px" are parsed to Float.
        // complex values such as "rotate(1rad)" are returned as is.


        result = cc11001100_hook("result", jQuery.css(tween.elem, tween.prop, ""), "assign"); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function (tween) {
        // use step hook for back compat - use cssHook if its there - use .style if its
        // available and use plain properties where available
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = cc11001100_hook("tween.elem[tween.prop]", tween.now, "assign");
        }
      }
    }
  }, "assign"); // Remove in 2.0 - this supports IE8's panic based approach
  // to setting things on disconnected nodes

  Tween.propHooks.scrollTop = cc11001100_hook("Tween.propHooks.scrollTop", Tween.propHooks.scrollLeft = cc11001100_hook("Tween.propHooks.scrollLeft", {
    set: function (tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = cc11001100_hook("tween.elem[tween.prop]", tween.now, "assign");
      }
    }
  }, "assign"), "assign");
  jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = cc11001100_hook("cssFn", jQuery.fn[name], "var-init");
    jQuery.fn[name] = cc11001100_hook("jQuery.fn[name]", function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    }, "assign");
  });
  jQuery.fn.extend({
    fadeTo: function (speed, to, easing, callback) {
      // show any hidden elements after setting opacity to 0
      return this.filter(isHidden).css("opacity", 0).show() // animate to the value specified
      .end().animate({
        opacity: cc11001100_hook("opacity", to, "object-key-init")
      }, speed, easing, callback);
    },
    animate: function (prop, speed, easing, callback) {
      var empty = cc11001100_hook("empty", jQuery.isEmptyObject(prop), "var-init"),
          optall = cc11001100_hook("optall", jQuery.speed(speed, easing, callback), "var-init"),
          doAnimation = function () {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = cc11001100_hook("anim", Animation(this, jQuery.extend({}, prop), optall), "var-init");
        doAnimation.finish = cc11001100_hook("doAnimation.finish", function () {
          anim.stop(true);
        }, "assign"); // Empty animations, or finishing resolves immediately

        if (empty || jQuery._data(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = cc11001100_hook("doAnimation.finish", doAnimation, "assign");
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function (type, clearQueue, gotoEnd) {
      var stopQueue = function (hooks) {
        var stop = cc11001100_hook("stop", hooks.stop, "var-init");
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = cc11001100_hook("gotoEnd", clearQueue, "assign");
        clearQueue = cc11001100_hook("clearQueue", type, "assign");
        type = cc11001100_hook("type", undefined, "assign");
      }

      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = cc11001100_hook("dequeue", true, "var-init"),
            index = cc11001100_hook("index", type != null && type + "queueHooks", "var-init"),
            timers = cc11001100_hook("timers", jQuery.timers, "var-init"),
            data = cc11001100_hook("data", jQuery._data(this), "var-init");

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = cc11001100_hook("index", timers.length, "assign"); index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = cc11001100_hook("dequeue", false, "assign");
            timers.splice(index, 1);
          }
        } // start the next in the queue if the last step wasn't forced
        // timers currently will call their complete callbacks, which will dequeue
        // but only if they were gotoEnd


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function (type) {
      if (type !== false) {
        type = cc11001100_hook("type", type || "fx", "assign");
      }

      return this.each(function () {
        var index,
            data = cc11001100_hook("data", jQuery._data(this), "var-init"),
            queue = cc11001100_hook("queue", data[type + "queue"], "var-init"),
            hooks = cc11001100_hook("hooks", data[type + "queueHooks"], "var-init"),
            timers = cc11001100_hook("timers", jQuery.timers, "var-init"),
            length = cc11001100_hook("length", queue ? queue.length : 0, "var-init"); // enable finishing flag on private data

        data.finish = cc11001100_hook("data.finish", true, "assign"); // empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.cur && hooks.cur.finish) {
          hooks.cur.finish.call(this);
        } // look for any active animations, and finish them


        for (index = cc11001100_hook("index", timers.length, "assign"); index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // look for any animations in the old queue and finish them


        for (index = cc11001100_hook("index", 0, "assign"); index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // turn off finishing flag


        delete data.finish;
      });
    }
  }); // Generate parameters to create a standard animation

  function genFx(type, includeWidth) {
    cc11001100_hook("type", type, "function-parameter");
    cc11001100_hook("includeWidth", includeWidth, "function-parameter");
    var which,
        attrs = cc11001100_hook("attrs", {
      height: cc11001100_hook("height", type, "object-key-init")
    }, "var-init"),
        i = cc11001100_hook("i", 0, "var-init"); // if we include width, step value is 1 to do all cssExpand values,
    // if we don't include width, step value is 2 to skip over Left and Right

    includeWidth = cc11001100_hook("includeWidth", includeWidth ? 1 : 0, "assign");

    for (; i < 4; i += cc11001100_hook("i", 2 - includeWidth, "assign")) {
      which = cc11001100_hook("which", cssExpand[i], "assign");
      attrs["margin" + which] = cc11001100_hook("attrs[\"margin\" + which]", attrs["padding" + which] = cc11001100_hook("attrs[\"padding\" + which]", type, "assign"), "assign");
    }

    if (includeWidth) {
      attrs.opacity = cc11001100_hook("attrs.opacity", attrs.width = cc11001100_hook("attrs.width", type, "assign"), "assign");
    }

    return attrs;
  } // Generate shortcuts for custom animations


  jQuery.each({
    slideDown: cc11001100_hook("slideDown", genFx("show"), "object-key-init"),
    slideUp: cc11001100_hook("slideUp", genFx("hide"), "object-key-init"),
    slideToggle: cc11001100_hook("slideToggle", genFx("toggle"), "object-key-init"),
    fadeIn: {
      opacity: cc11001100_hook("opacity", "show", "object-key-init")
    },
    fadeOut: {
      opacity: cc11001100_hook("opacity", "hide", "object-key-init")
    },
    fadeToggle: {
      opacity: cc11001100_hook("opacity", "toggle", "object-key-init")
    }
  }, function (name, props) {
    jQuery.fn[name] = cc11001100_hook("jQuery.fn[name]", function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    }, "assign");
  });
  jQuery.speed = cc11001100_hook("jQuery.speed", function (speed, easing, fn) {
    var opt = cc11001100_hook("opt", speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: cc11001100_hook("complete", fn || !fn && easing || jQuery.isFunction(speed) && speed, "object-key-init"),
      duration: cc11001100_hook("duration", speed, "object-key-init"),
      easing: cc11001100_hook("easing", fn && easing || easing && !jQuery.isFunction(easing) && easing, "object-key-init")
    }, "var-init");
    opt.duration = cc11001100_hook("opt.duration", jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, "assign"); // normalize opt.queue - true/undefined/null -> "fx"

    if (opt.queue == null || opt.queue === true) {
      opt.queue = cc11001100_hook("opt.queue", "fx", "assign");
    } // Queueing


    opt.old = cc11001100_hook("opt.old", opt.complete, "assign");
    opt.complete = cc11001100_hook("opt.complete", function () {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    }, "assign");
    return opt;
  }, "assign");
  jQuery.easing = cc11001100_hook("jQuery.easing", {
    linear: function (p) {
      return p;
    },
    swing: function (p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    }
  }, "assign");
  jQuery.timers = cc11001100_hook("jQuery.timers", [], "assign");
  jQuery.fx = cc11001100_hook("jQuery.fx", Tween.prototype.init, "assign");
  jQuery.fx.tick = cc11001100_hook("jQuery.fx.tick", function () {
    var timer,
        timers = cc11001100_hook("timers", jQuery.timers, "var-init"),
        i = cc11001100_hook("i", 0, "var-init");
    fxNow = cc11001100_hook("fxNow", jQuery.now(), "assign");

    for (; i < timers.length; i++) {
      timer = cc11001100_hook("timer", timers[i], "assign"); // Checks the timer has not already been removed

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = cc11001100_hook("fxNow", undefined, "assign");
  }, "assign");
  jQuery.fx.timer = cc11001100_hook("jQuery.fx.timer", function (timer) {
    if (timer() && jQuery.timers.push(timer)) {
      jQuery.fx.start();
    }
  }, "assign");
  jQuery.fx.interval = cc11001100_hook("jQuery.fx.interval", 13, "assign");
  jQuery.fx.start = cc11001100_hook("jQuery.fx.start", function () {
    if (!timerId) {
      timerId = cc11001100_hook("timerId", setInterval(jQuery.fx.tick, jQuery.fx.interval), "assign");
    }
  }, "assign");
  jQuery.fx.stop = cc11001100_hook("jQuery.fx.stop", function () {
    clearInterval(timerId);
    timerId = cc11001100_hook("timerId", null, "assign");
  }, "assign");
  jQuery.fx.speeds = cc11001100_hook("jQuery.fx.speeds", {
    slow: cc11001100_hook("slow", 600, "object-key-init"),
    fast: cc11001100_hook("fast", 200, "object-key-init"),
    // Default speed
    _default: cc11001100_hook("_default", 400, "object-key-init")
  }, "assign"); // Back Compat <1.8 extension point

  jQuery.fx.step = cc11001100_hook("jQuery.fx.step", {}, "assign");

  if (jQuery.expr && jQuery.expr.filters) {
    jQuery.expr.filters.animated = cc11001100_hook("jQuery.expr.filters.animated", function (elem) {
      return jQuery.grep(jQuery.timers, function (fn) {
        return elem === fn.elem;
      }).length;
    }, "assign");
  }

  jQuery.fn.offset = cc11001100_hook("jQuery.fn.offset", function (options) {
    if (arguments.length) {
      return options === undefined ? this : this.each(function (i) {
        jQuery.offset.setOffset(this, options, i);
      });
    }

    var docElem,
        win,
        box = cc11001100_hook("box", {
      top: cc11001100_hook("top", 0, "object-key-init"),
      left: cc11001100_hook("left", 0, "object-key-init")
    }, "var-init"),
        elem = cc11001100_hook("elem", this[0], "var-init"),
        doc = cc11001100_hook("doc", elem && elem.ownerDocument, "var-init");

    if (!doc) {
      return;
    }

    docElem = cc11001100_hook("docElem", doc.documentElement, "assign"); // Make sure it's not a disconnected DOM node

    if (!jQuery.contains(docElem, elem)) {
      return box;
    } // If we don't have gBCR, just use 0,0 rather than error
    // BlackBerry 5, iOS 3 (original iPhone)


    if (typeof elem.getBoundingClientRect !== core_strundefined) {
      box = cc11001100_hook("box", elem.getBoundingClientRect(), "assign");
    }

    win = cc11001100_hook("win", getWindow(doc), "assign");
    return {
      top: cc11001100_hook("top", box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0), "object-key-init"),
      left: cc11001100_hook("left", box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0), "object-key-init")
    };
  }, "assign");
  jQuery.offset = cc11001100_hook("jQuery.offset", {
    setOffset: function (elem, options, i) {
      var position = cc11001100_hook("position", jQuery.css(elem, "position"), "var-init"); // set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = cc11001100_hook("elem.style.position", "relative", "assign");
      }

      var curElem = cc11001100_hook("curElem", jQuery(elem), "var-init"),
          curOffset = cc11001100_hook("curOffset", curElem.offset(), "var-init"),
          curCSSTop = cc11001100_hook("curCSSTop", jQuery.css(elem, "top"), "var-init"),
          curCSSLeft = cc11001100_hook("curCSSLeft", jQuery.css(elem, "left"), "var-init"),
          calculatePosition = cc11001100_hook("calculatePosition", (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1, "var-init"),
          props = cc11001100_hook("props", {}, "var-init"),
          curPosition = cc11001100_hook("curPosition", {}, "var-init"),
          curTop,
          curLeft; // need to be able to calculate position if either top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = cc11001100_hook("curPosition", curElem.position(), "assign");
        curTop = cc11001100_hook("curTop", curPosition.top, "assign");
        curLeft = cc11001100_hook("curLeft", curPosition.left, "assign");
      } else {
        curTop = cc11001100_hook("curTop", parseFloat(curCSSTop) || 0, "assign");
        curLeft = cc11001100_hook("curLeft", parseFloat(curCSSLeft) || 0, "assign");
      }

      if (jQuery.isFunction(options)) {
        options = cc11001100_hook("options", options.call(elem, i, curOffset), "assign");
      }

      if (options.top != null) {
        props.top = cc11001100_hook("props.top", options.top - curOffset.top + curTop, "assign");
      }

      if (options.left != null) {
        props.left = cc11001100_hook("props.left", options.left - curOffset.left + curLeft, "assign");
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  }, "assign");
  jQuery.fn.extend({
    position: function () {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          parentOffset = cc11001100_hook("parentOffset", {
        top: cc11001100_hook("top", 0, "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init")
      }, "var-init"),
          elem = cc11001100_hook("elem", this[0], "var-init"); // fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent

      if (jQuery.css(elem, "position") === "fixed") {
        // we assume that getBoundingClientRect is available when computed position is fixed
        offset = cc11001100_hook("offset", elem.getBoundingClientRect(), "assign");
      } else {
        // Get *real* offsetParent
        offsetParent = cc11001100_hook("offsetParent", this.offsetParent(), "assign"); // Get correct offsets

        offset = cc11001100_hook("offset", this.offset(), "assign");

        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = cc11001100_hook("parentOffset", offsetParent.offset(), "assign");
        } // Add offsetParent borders


        parentOffset.top += cc11001100_hook("parentOffset.top", jQuery.css(offsetParent[0], "borderTopWidth", true), "assign");
        parentOffset.left += cc11001100_hook("parentOffset.left", jQuery.css(offsetParent[0], "borderLeftWidth", true), "assign");
      } // Subtract parent offsets and element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0


      return {
        top: cc11001100_hook("top", offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true), "object-key-init"),
        left: cc11001100_hook("left", offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true), "object-key-init")
      };
    },
    offsetParent: function () {
      return this.map(function () {
        var offsetParent = cc11001100_hook("offsetParent", this.offsetParent || document.documentElement, "var-init");

        while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = cc11001100_hook("offsetParent", offsetParent.offsetParent, "assign");
        }

        return offsetParent || document.documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: cc11001100_hook("scrollLeft", "pageXOffset", "object-key-init"),
    scrollTop: cc11001100_hook("scrollTop", "pageYOffset", "object-key-init")
  }, function (method, prop) {
    var top = cc11001100_hook("top", /Y/.test(prop), "var-init");
    jQuery.fn[method] = cc11001100_hook("jQuery.fn[method]", function (val) {
      return jQuery.access(this, function (elem, method, val) {
        var win = cc11001100_hook("win", getWindow(elem), "var-init");

        if (val === undefined) {
          return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
        } else {
          elem[method] = cc11001100_hook("elem[method]", val, "assign");
        }
      }, method, val, arguments.length, null);
    }, "assign");
  });

  function getWindow(elem) {
    cc11001100_hook("elem", elem, "function-parameter");
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
  } // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods


  jQuery.each({
    Height: cc11001100_hook("Height", "height", "object-key-init"),
    Width: cc11001100_hook("Width", "width", "object-key-init")
  }, function (name, type) {
    jQuery.each({
      padding: cc11001100_hook("padding", "inner" + name, "object-key-init"),
      content: cc11001100_hook("content", type, "object-key-init"),
      "": cc11001100_hook("", "outer" + name, "object-key-init")
    }, function (defaultExtra, funcName) {
      // margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = cc11001100_hook("jQuery.fn[funcName]", function (margin, value) {
        var chainable = cc11001100_hook("chainable", arguments.length && (defaultExtra || typeof margin !== "boolean"), "var-init"),
            extra = cc11001100_hook("extra", defaultExtra || (margin === true || value === true ? "margin" : "border"), "var-init");
        return jQuery.access(this, function (elem, type, value) {
          var doc;

          if (jQuery.isWindow(elem)) {
            // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
            // isn't a whole lot we can do. See pull request at this URL for discussion:
            // https://github.com/jquery/jquery/pull/764
            return elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = cc11001100_hook("doc", elem.documentElement, "assign"); // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
            // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable, null);
      }, "assign");
    });
  }); // Limit scope pollution from any deprecated API
  // (function() {
  // })();
  // Expose jQuery to the global object

  window.jQuery = cc11001100_hook("window.jQuery", window.$ = cc11001100_hook("window.$", jQuery, "assign"), "assign"); // Expose jQuery as an AMD module, but only for AMD loaders that
  // understand the issues with loading multiple versions of jQuery
  // in a page that all might call define(). The loader will indicate
  // they have special allowances for multiple jQuery versions by
  // specifying define.amd.jQuery = true. Register as a named module,
  // since jQuery can be concatenated with other files that may use define,
  // but not use a proper concatenation script that understands anonymous
  // AMD modules. A named AMD is safest and most robust way to register.
  // Lowercase jquery is used because AMD module names are derived from
  // file names, and jQuery is normally delivered in a lowercase file name.
  // Do this after creating the global so that if an AMD module wants to call
  // noConflict to hide this version of jQuery, it will work.

  if (typeof define === "function" && define.amd && define.amd.jQuery) {
    define("jquery", [], function () {
      return jQuery;
    });
  }
})(window);