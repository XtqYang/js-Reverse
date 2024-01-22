/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
  "use strict";

  if (typeof define === 'function' && define.amd) {
    // using AMD; register as anon module
    define(['jquery'], factory);
  } else {
    // no AMD; invoke directly
    factory(typeof jQuery != 'undefined' ? jQuery : window.Zepto);
  }
})(function ($) {
  "use strict";

  /*
      Usage Note:
      -----------
      Do not use both ajaxSubmit and ajaxForm on the same form.  These
      functions are mutually exclusive.  Use ajaxSubmit if you want
      to bind your own submit handler to the form.  For example,
  
      $(document).ready(function() {
          $('#myForm').on('submit', function(e) {
              e.preventDefault(); // <-- important
              $(this).ajaxSubmit({
                  target: '#output'
              });
          });
      });
  
      Use ajaxForm when you want the plugin to manage all the event binding
      for you.  For example,
  
      $(document).ready(function() {
          $('#myForm').ajaxForm({
              target: '#output'
          });
      });
  
      You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
      form does not have to exist when you invoke ajaxForm:
  
      $('#myForm').ajaxForm({
          delegation: true,
          target: '#output'
      });
  
      When using ajaxForm, the ajaxSubmit function will be invoked for you
      at the appropriate time.
  */

  /**
   * Feature detection
   */
  var feature = cc11001100_hook("feature", {}, "var-init");
  feature.fileapi = cc11001100_hook("feature.fileapi", $("<input type='file'/>").get(0).files !== undefined, "assign");
  feature.formdata = cc11001100_hook("feature.formdata", window.FormData !== undefined, "assign");
  var hasProp = cc11001100_hook("hasProp", !!$.fn.prop, "var-init");

  // attr2 uses prop when it can but checks the return type for
  // an expected string.  this accounts for the case where a form
  // contains inputs with names like "action" or "method"; in those
  // cases "prop" returns the element
  $.fn.attr2 = cc11001100_hook("$.fn.attr2", function () {
    if (!hasProp) {
      return this.attr.apply(this, arguments);
    }
    var val = cc11001100_hook("val", this.prop.apply(this, arguments), "var-init");
    if (val && val.jquery || typeof val === 'string') {
      return val;
    }
    return this.attr.apply(this, arguments);
  }, "assign");

  /**
   * ajaxSubmit() provides a mechanism for immediately submitting
   * an HTML form using AJAX.
   */
  $.fn.ajaxSubmit = cc11001100_hook("$.fn.ajaxSubmit", function (options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
      log('ajaxSubmit: skipping submit process - no element selected');
      return this;
    }
    var method,
      action,
      url,
      $form = cc11001100_hook("$form", this, "var-init");
    if (typeof options == 'function') {
      options = cc11001100_hook("options", {
        success: cc11001100_hook("success", options, "object-key-init")
      }, "assign");
    } else if (options === undefined) {
      options = cc11001100_hook("options", {}, "assign");
    }
    method = cc11001100_hook("method", options.type || this.attr2('method'), "assign");
    action = cc11001100_hook("action", options.url || this.attr2('action'), "assign");
    url = cc11001100_hook("url", typeof action === 'string' ? $.trim(action) : '', "assign");
    url = cc11001100_hook("url", url || window.location.href || '', "assign");
    if (url) {
      // clean url (don't include hash vaue)
      url = cc11001100_hook("url", (url.match(/^([^#]+)/) || [])[1], "assign");
    }
    options = cc11001100_hook("options", $.extend(true, {
      url: cc11001100_hook("url", url, "object-key-init"),
      success: cc11001100_hook("success", $.ajaxSettings.success, "object-key-init"),
      type: cc11001100_hook("type", method || $.ajaxSettings.type, "object-key-init"),
      iframeSrc: cc11001100_hook("iframeSrc", /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank', "object-key-init")
    }, options), "assign");

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = cc11001100_hook("veto", {}, "var-init");
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
      log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
      return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
      log('ajaxSubmit: submit aborted via beforeSerialize callback');
      return this;
    }
    var traditional = cc11001100_hook("traditional", options.traditional, "var-init");
    if (traditional === undefined) {
      traditional = cc11001100_hook("traditional", $.ajaxSettings.traditional, "assign");
    }
    var elements = cc11001100_hook("elements", [], "var-init");
    var qx,
      a = cc11001100_hook("a", this.formToArray(options.semantic, elements), "var-init");
    if (options.data) {
      options.extraData = cc11001100_hook("options.extraData", options.data, "assign");
      qx = cc11001100_hook("qx", $.param(options.data, traditional), "assign");
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
      log('ajaxSubmit: submit aborted via beforeSubmit callback');
      return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
      log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
      return this;
    }
    var q = cc11001100_hook("q", $.param(a, traditional), "var-init");
    if (qx) {
      q = cc11001100_hook("q", q ? q + '&' + qx : qx, "assign");
    }
    if (options.type.toUpperCase() == 'GET') {
      options.url += cc11001100_hook("options.url", (options.url.indexOf('?') >= 0 ? '&' : '?') + q, "assign");
      options.data = cc11001100_hook("options.data", null, "assign"); // data is null for 'get'
    } else {
      options.data = cc11001100_hook("options.data", q, "assign"); // data is the query string for 'post'
    }

    var callbacks = cc11001100_hook("callbacks", [], "var-init");
    if (options.resetForm) {
      callbacks.push(function () {
        $form.resetForm();
      });
    }
    if (options.clearForm) {
      callbacks.push(function () {
        $form.clearForm(options.includeHidden);
      });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
      var oldSuccess = cc11001100_hook("oldSuccess", options.success || function () {}, "var-init");
      callbacks.push(function (data) {
        var fn = cc11001100_hook("fn", options.replaceTarget ? 'replaceWith' : 'html', "var-init");
        $(options.target)[fn](data).each(oldSuccess, arguments);
      });
    } else if (options.success) {
      callbacks.push(options.success);
    }
    options.success = cc11001100_hook("options.success", function (data, status, xhr) {
      // jQuery 1.4+ passes xhr as 3rd arg
      var context = cc11001100_hook("context", options.context || this, "var-init"); // jQuery 1.4+ supports scope context
      for (var i = cc11001100_hook("i", 0, "var-init"), max = cc11001100_hook("max", callbacks.length, "var-init"); i < max; i++) {
        callbacks[i].apply(context, [data, status, xhr || $form, $form]);
      }
    }, "assign");
    if (options.error) {
      var oldError = cc11001100_hook("oldError", options.error, "var-init");
      options.error = cc11001100_hook("options.error", function (xhr, status, error) {
        var context = cc11001100_hook("context", options.context || this, "var-init");
        oldError.apply(context, [xhr, status, error, $form]);
      }, "assign");
    }
    if (options.complete) {
      var oldComplete = cc11001100_hook("oldComplete", options.complete, "var-init");
      options.complete = cc11001100_hook("options.complete", function (xhr, status) {
        var context = cc11001100_hook("context", options.context || this, "var-init");
        oldComplete.apply(context, [xhr, status, $form]);
      }, "assign");
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = cc11001100_hook("fileInputs", $('input[type=file]:enabled', this).filter(function () {
      return $(this).val() !== '';
    }), "var-init");
    var hasFileInputs = cc11001100_hook("hasFileInputs", fileInputs.length > 0, "var-init");
    var mp = cc11001100_hook("mp", 'multipart/form-data', "var-init");
    var multipart = cc11001100_hook("multipart", $form.attr('enctype') == mp || $form.attr('encoding') == mp, "var-init");
    var fileAPI = cc11001100_hook("fileAPI", feature.fileapi && feature.formdata, "var-init");
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = cc11001100_hook("shouldUseFrame", (hasFileInputs || multipart) && !fileAPI, "var-init");
    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
      // hack to fix Safari hang (thanks to Tim Molendijk for this)
      // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
      if (options.closeKeepAlive) {
        $.get(options.closeKeepAlive, function () {
          jqxhr = cc11001100_hook("jqxhr", fileUploadIframe(a), "assign");
        });
      } else {
        jqxhr = cc11001100_hook("jqxhr", fileUploadIframe(a), "assign");
      }
    } else if ((hasFileInputs || multipart) && fileAPI) {
      jqxhr = cc11001100_hook("jqxhr", fileUploadXhr(a), "assign");
    } else {
      jqxhr = cc11001100_hook("jqxhr", $.ajax(options), "assign");
    }
    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k = cc11001100_hook("k", 0, "var-init"); k < elements.length; k++) {
      elements[k] = cc11001100_hook("elements[k]", null, "assign");
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData) {
      cc11001100_hook("extraData", extraData, "function-parameter");
      var serialized = cc11001100_hook("serialized", $.param(extraData, options.traditional).split('&'), "var-init");
      var len = cc11001100_hook("len", serialized.length, "var-init");
      var result = cc11001100_hook("result", [], "var-init");
      var i, part;
      for (i = cc11001100_hook("i", 0, "assign"); i < len; i++) {
        // #252; undo param space replacement
        serialized[i] = cc11001100_hook("serialized[i]", serialized[i].replace(/\+/g, ' '), "assign");
        part = cc11001100_hook("part", serialized[i].split('='), "assign");
        // #278; use array instead of object storage, favoring array serializations
        result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
      }
      return result;
    }

    // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
      cc11001100_hook("a", a, "function-parameter");
      var formdata = cc11001100_hook("formdata", new FormData(), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < a.length; i++) {
        formdata.append(a[i].name, a[i].value);
      }
      if (options.extraData) {
        var serializedData = cc11001100_hook("serializedData", deepSerialize(options.extraData), "var-init");
        for (i = cc11001100_hook("i", 0, "assign"); i < serializedData.length; i++) {
          if (serializedData[i]) {
            formdata.append(serializedData[i][0], serializedData[i][1]);
          }
        }
      }
      options.data = cc11001100_hook("options.data", null, "assign");
      var s = cc11001100_hook("s", $.extend(true, {}, $.ajaxSettings, options, {
        contentType: cc11001100_hook("contentType", false, "object-key-init"),
        processData: cc11001100_hook("processData", false, "object-key-init"),
        cache: cc11001100_hook("cache", false, "object-key-init"),
        type: cc11001100_hook("type", method || 'POST', "object-key-init")
      }), "var-init");
      if (options.uploadProgress) {
        // workaround because jqXHR does not expose upload property
        s.xhr = cc11001100_hook("s.xhr", function () {
          var xhr = cc11001100_hook("xhr", $.ajaxSettings.xhr(), "var-init");
          if (xhr.upload) {
            xhr.upload.addEventListener('progress', function (event) {
              var percent = cc11001100_hook("percent", 0, "var-init");
              var position = cc11001100_hook("position", event.loaded || event.position, "var-init"); /*event.position is deprecated*/
              var total = cc11001100_hook("total", event.total, "var-init");
              if (event.lengthComputable) {
                percent = cc11001100_hook("percent", Math.ceil(position / total * 100), "assign");
              }
              options.uploadProgress(event, position, total, percent);
            }, false);
          }
          return xhr;
        }, "assign");
      }
      s.data = cc11001100_hook("s.data", null, "assign");
      var beforeSend = cc11001100_hook("beforeSend", s.beforeSend, "var-init");
      s.beforeSend = cc11001100_hook("s.beforeSend", function (xhr, o) {
        //Send FormData() provided by user
        if (options.formData) {
          o.data = cc11001100_hook("o.data", options.formData, "assign");
        } else {
          o.data = cc11001100_hook("o.data", formdata, "assign");
        }
        if (beforeSend) {
          beforeSend.call(this, xhr, o);
        }
      }, "assign");
      return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
      cc11001100_hook("a", a, "function-parameter");
      var form = cc11001100_hook("form", $form[0], "var-init"),
        el,
        i,
        s,
        g,
        id,
        $io,
        io,
        xhr,
        sub,
        n,
        timedOut,
        timeoutHandle;
      var deferred = cc11001100_hook("deferred", $.Deferred(), "var-init");

      // #341
      deferred.abort = cc11001100_hook("deferred.abort", function (status) {
        xhr.abort(status);
      }, "assign");
      if (a) {
        // ensure that every serialized input is still enabled
        for (i = cc11001100_hook("i", 0, "assign"); i < elements.length; i++) {
          el = cc11001100_hook("el", $(elements[i]), "assign");
          if (hasProp) {
            el.prop('disabled', false);
          } else {
            el.removeAttr('disabled');
          }
        }
      }
      s = cc11001100_hook("s", $.extend(true, {}, $.ajaxSettings, options), "assign");
      s.context = cc11001100_hook("s.context", s.context || s, "assign");
      id = cc11001100_hook("id", 'jqFormIO' + new Date().getTime(), "assign");
      if (s.iframeTarget) {
        $io = cc11001100_hook("$io", $(s.iframeTarget), "assign");
        n = cc11001100_hook("n", $io.attr2('name'), "assign");
        if (!n) {
          $io.attr2('name', id);
        } else {
          id = cc11001100_hook("id", n, "assign");
        }
      } else {
        $io = cc11001100_hook("$io", $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />'), "assign");
        $io.css({
          position: cc11001100_hook("position", 'absolute', "object-key-init"),
          top: cc11001100_hook("top", '-1000px', "object-key-init"),
          left: cc11001100_hook("left", '-1000px', "object-key-init")
        });
      }
      io = cc11001100_hook("io", $io[0], "assign");
      xhr = cc11001100_hook("xhr", {
        // mock object
        aborted: cc11001100_hook("aborted", 0, "object-key-init"),
        responseText: cc11001100_hook("responseText", null, "object-key-init"),
        responseXML: cc11001100_hook("responseXML", null, "object-key-init"),
        status: cc11001100_hook("status", 0, "object-key-init"),
        statusText: cc11001100_hook("statusText", 'n/a', "object-key-init"),
        getAllResponseHeaders: function () {},
        getResponseHeader: function () {},
        setRequestHeader: function () {},
        abort: function (status) {
          var e = cc11001100_hook("e", status === 'timeout' ? 'timeout' : 'aborted', "var-init");
          log('aborting upload... ' + e);
          this.aborted = cc11001100_hook("this.aborted", 1, "assign");
          try {
            // #214, #257
            if (io.contentWindow.document.execCommand) {
              io.contentWindow.document.execCommand('Stop');
            }
          } catch (ignore) {}
          $io.attr('src', s.iframeSrc); // abort op in progress
          xhr.error = cc11001100_hook("xhr.error", e, "assign");
          if (s.error) {
            s.error.call(s.context, xhr, e, status);
          }
          if (g) {
            $.event.trigger("ajaxError", [xhr, s, e]);
          }
          if (s.complete) {
            s.complete.call(s.context, xhr, e);
          }
        }
      }, "assign");
      g = cc11001100_hook("g", s.global, "assign");
      // trigger ajax global events so that activity/block indicators work like normal
      if (g && 0 === $.active++) {
        $.event.trigger("ajaxStart");
      }
      if (g) {
        $.event.trigger("ajaxSend", [xhr, s]);
      }
      if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
        if (s.global) {
          $.active--;
        }
        deferred.reject();
        return deferred;
      }
      if (xhr.aborted) {
        deferred.reject();
        return deferred;
      }

      // add submitting element to data if we know it
      sub = cc11001100_hook("sub", form.clk, "assign");
      if (sub) {
        n = cc11001100_hook("n", sub.name, "assign");
        if (n && !sub.disabled) {
          s.extraData = cc11001100_hook("s.extraData", s.extraData || {}, "assign");
          s.extraData[n] = cc11001100_hook("s.extraData[n]", sub.value, "assign");
          if (sub.type == "image") {
            s.extraData[n + '.x'] = cc11001100_hook("s.extraData[n + '.x']", form.clk_x, "assign");
            s.extraData[n + '.y'] = cc11001100_hook("s.extraData[n + '.y']", form.clk_y, "assign");
          }
        }
      }
      var CLIENT_TIMEOUT_ABORT = cc11001100_hook("CLIENT_TIMEOUT_ABORT", 1, "var-init");
      var SERVER_ABORT = cc11001100_hook("SERVER_ABORT", 2, "var-init");
      function getDoc(frame) {
        cc11001100_hook("frame", frame, "function-parameter");
        /* it looks like contentWindow or contentDocument do not
         * carry the protocol property in ie8, when running under ssl
         * frame.document is the only valid response document, since
         * the protocol is know but not on the other two objects. strange?
         * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
         */

        var doc = cc11001100_hook("doc", null, "var-init");

        // IE8 cascading access check
        try {
          if (frame.contentWindow) {
            doc = cc11001100_hook("doc", frame.contentWindow.document, "assign");
          }
        } catch (err) {
          // IE8 access denied under ssl & missing protocol
          log('cannot get iframe.contentWindow document: ' + err);
        }
        if (doc) {
          // successful getting content
          return doc;
        }
        try {
          // simply checking may throw in ie8 under ssl or mismatched protocol
          doc = cc11001100_hook("doc", frame.contentDocument ? frame.contentDocument : frame.document, "assign");
        } catch (err) {
          // last attempt
          log('cannot get iframe.contentDocument: ' + err);
          doc = cc11001100_hook("doc", frame.document, "assign");
        }
        return doc;
      }

      // Rails CSRF hack (thanks to Yvan Barthelemy)
      var csrf_token = cc11001100_hook("csrf_token", $('meta[name=csrf-token]').attr('content'), "var-init");
      var csrf_param = cc11001100_hook("csrf_param", $('meta[name=csrf-param]').attr('content'), "var-init");
      if (csrf_param && csrf_token) {
        s.extraData = cc11001100_hook("s.extraData", s.extraData || {}, "assign");
        s.extraData[csrf_param] = cc11001100_hook("s.extraData[csrf_param]", csrf_token, "assign");
      }

      // take a breath so that pending repaints get some cpu time before the upload starts
      function doSubmit() {
        // make sure form attrs are set
        var t = cc11001100_hook("t", $form.attr2('target'), "var-init"),
          a = cc11001100_hook("a", $form.attr2('action'), "var-init"),
          mp = cc11001100_hook("mp", 'multipart/form-data', "var-init"),
          et = cc11001100_hook("et", $form.attr('enctype') || $form.attr('encoding') || mp, "var-init");

        // update form attrs in IE friendly way
        form.setAttribute('target', id);
        if (!method || /post/i.test(method)) {
          form.setAttribute('method', 'POST');
        }
        if (a != s.url) {
          form.setAttribute('action', s.url);
        }

        // ie borks in some cases when setting encoding
        if (!s.skipEncodingOverride && (!method || /post/i.test(method))) {
          $form.attr({
            encoding: cc11001100_hook("encoding", 'multipart/form-data', "object-key-init"),
            enctype: cc11001100_hook("enctype", 'multipart/form-data', "object-key-init")
          });
        }

        // support timout
        if (s.timeout) {
          timeoutHandle = cc11001100_hook("timeoutHandle", setTimeout(function () {
            timedOut = cc11001100_hook("timedOut", true, "assign");
            cb(CLIENT_TIMEOUT_ABORT);
          }, s.timeout), "assign");
        }

        // look for server aborts
        function checkState() {
          try {
            var state = cc11001100_hook("state", getDoc(io).readyState, "var-init");
            log('state = ' + state);
            if (state && state.toLowerCase() == 'uninitialized') {
              setTimeout(checkState, 50);
            }
          } catch (e) {
            log('Server abort: ', e, ' (', e.name, ')');
            cb(SERVER_ABORT);
            if (timeoutHandle) {
              clearTimeout(timeoutHandle);
            }
            timeoutHandle = cc11001100_hook("timeoutHandle", undefined, "assign");
          }
        }

        // add "extra" data to form if provided in options
        var extraInputs = cc11001100_hook("extraInputs", [], "var-init");
        try {
          if (s.extraData) {
            for (var n in s.extraData) {
              if (s.extraData.hasOwnProperty(n)) {
                // if using the $.param format that allows for multiple values with the same name
                if ($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                  extraInputs.push($('<input type="hidden" name="' + s.extraData[n].name + '">').val(s.extraData[n].value).appendTo(form)[0]);
                } else {
                  extraInputs.push($('<input type="hidden" name="' + n + '">').val(s.extraData[n]).appendTo(form)[0]);
                }
              }
            }
          }
          if (!s.iframeTarget) {
            // add iframe to doc and submit the form
            $io.appendTo('body');
          }
          if (io.attachEvent) {
            io.attachEvent('onload', cb);
          } else {
            io.addEventListener('load', cb, false);
          }
          setTimeout(checkState, 15);
          try {
            form.submit();
          } catch (err) {
            // just in case form has element with name/id of 'submit'
            var submitFn = cc11001100_hook("submitFn", document.createElement('form').submit, "var-init");
            submitFn.apply(form);
          }
        } finally {
          // reset attrs and remove "extra" input elements
          form.setAttribute('action', a);
          form.setAttribute('enctype', et); // #380
          if (t) {
            form.setAttribute('target', t);
          } else {
            $form.removeAttr('target');
          }
          $(extraInputs).remove();
        }
      }
      if (s.forceSync) {
        doSubmit();
      } else {
        setTimeout(doSubmit, 10); // this lets dom updates render
      }

      var data,
        doc,
        domCheckCount = cc11001100_hook("domCheckCount", 50, "var-init"),
        callbackProcessed;
      function cb(e) {
        cc11001100_hook("e", e, "function-parameter");
        if (xhr.aborted || callbackProcessed) {
          return;
        }
        doc = cc11001100_hook("doc", getDoc(io), "assign");
        if (!doc) {
          log('cannot access response document');
          e = cc11001100_hook("e", SERVER_ABORT, "assign");
        }
        if (e === CLIENT_TIMEOUT_ABORT && xhr) {
          xhr.abort('timeout');
          deferred.reject(xhr, 'timeout');
          return;
        } else if (e == SERVER_ABORT && xhr) {
          xhr.abort('server abort');
          deferred.reject(xhr, 'error', 'server abort');
          return;
        }
        if (!doc || doc.location.href == s.iframeSrc) {
          // response not received yet
          if (!timedOut) {
            return;
          }
        }
        if (io.detachEvent) {
          io.detachEvent('onload', cb);
        } else {
          io.removeEventListener('load', cb, false);
        }
        var status = cc11001100_hook("status", 'success', "var-init"),
          errMsg;
        try {
          if (timedOut) {
            throw 'timeout';
          }
          var isXml = cc11001100_hook("isXml", s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc), "var-init");
          log('isXml=' + isXml);
          if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
            if (--domCheckCount) {
              // in some browsers (Opera) the iframe DOM is not always traversable when
              // the onload callback fires, so we loop a bit to accommodate
              log('requeing onLoad callback, DOM not available');
              setTimeout(cb, 250);
              return;
            }
            // let this fall through because server response could be an empty document
            //log('Could not access iframe DOM after mutiple tries.');
            //throw 'DOMException: not available';
          }

          //log('response detected');
          var docRoot = cc11001100_hook("docRoot", doc.body ? doc.body : doc.documentElement, "var-init");
          xhr.responseText = cc11001100_hook("xhr.responseText", docRoot ? docRoot.innerHTML : null, "assign");
          xhr.responseXML = cc11001100_hook("xhr.responseXML", doc.XMLDocument ? doc.XMLDocument : doc, "assign");
          if (isXml) {
            s.dataType = cc11001100_hook("s.dataType", 'xml', "assign");
          }
          xhr.getResponseHeader = cc11001100_hook("xhr.getResponseHeader", function (header) {
            var headers = cc11001100_hook("headers", {
              'content-type': cc11001100_hook('content-type', s.dataType, "object-key-init")
            }, "var-init");
            return headers[header.toLowerCase()];
          }, "assign");
          // support for XHR 'status' & 'statusText' emulation :
          if (docRoot) {
            xhr.status = cc11001100_hook("xhr.status", Number(docRoot.getAttribute('status')) || xhr.status, "assign");
            xhr.statusText = cc11001100_hook("xhr.statusText", docRoot.getAttribute('statusText') || xhr.statusText, "assign");
          }
          var dt = cc11001100_hook("dt", (s.dataType || '').toLowerCase(), "var-init");
          var scr = cc11001100_hook("scr", /(json|script|text)/.test(dt), "var-init");
          if (scr || s.textarea) {
            // see if user embedded response in textarea
            var ta = cc11001100_hook("ta", doc.getElementsByTagName('textarea')[0], "var-init");
            if (ta) {
              xhr.responseText = cc11001100_hook("xhr.responseText", ta.value, "assign");
              // support for XHR 'status' & 'statusText' emulation :
              xhr.status = cc11001100_hook("xhr.status", Number(ta.getAttribute('status')) || xhr.status, "assign");
              xhr.statusText = cc11001100_hook("xhr.statusText", ta.getAttribute('statusText') || xhr.statusText, "assign");
            } else if (scr) {
              // account for browsers injecting pre around json response
              var pre = cc11001100_hook("pre", doc.getElementsByTagName('pre')[0], "var-init");
              var b = cc11001100_hook("b", doc.getElementsByTagName('body')[0], "var-init");
              if (pre) {
                xhr.responseText = cc11001100_hook("xhr.responseText", pre.textContent ? pre.textContent : pre.innerText, "assign");
              } else if (b) {
                xhr.responseText = cc11001100_hook("xhr.responseText", b.textContent ? b.textContent : b.innerText, "assign");
              }
            }
          } else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
            xhr.responseXML = cc11001100_hook("xhr.responseXML", toXml(xhr.responseText), "assign");
          }
          try {
            data = cc11001100_hook("data", httpData(xhr, dt, s), "assign");
          } catch (err) {
            status = cc11001100_hook("status", 'parsererror', "assign");
            xhr.error = cc11001100_hook("xhr.error", errMsg = cc11001100_hook("errMsg", err || status, "assign"), "assign");
          }
        } catch (err) {
          log('error caught: ', err);
          status = cc11001100_hook("status", 'error', "assign");
          xhr.error = cc11001100_hook("xhr.error", errMsg = cc11001100_hook("errMsg", err || status, "assign"), "assign");
        }
        if (xhr.aborted) {
          log('upload aborted');
          status = cc11001100_hook("status", null, "assign");
        }
        if (xhr.status) {
          // we've set xhr.status
          status = cc11001100_hook("status", xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 ? 'success' : 'error', "assign");
        }

        // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
        if (status === 'success') {
          if (s.success) {
            s.success.call(s.context, data, 'success', xhr);
          }
          deferred.resolve(xhr.responseText, 'success', xhr);
          if (g) {
            $.event.trigger("ajaxSuccess", [xhr, s]);
          }
        } else if (status) {
          if (errMsg === undefined) {
            errMsg = cc11001100_hook("errMsg", xhr.statusText, "assign");
          }
          if (s.error) {
            s.error.call(s.context, xhr, status, errMsg);
          }
          deferred.reject(xhr, 'error', errMsg);
          if (g) {
            $.event.trigger("ajaxError", [xhr, s, errMsg]);
          }
        }
        if (g) {
          $.event.trigger("ajaxComplete", [xhr, s]);
        }
        if (g && ! --$.active) {
          $.event.trigger("ajaxStop");
        }
        if (s.complete) {
          s.complete.call(s.context, xhr, status);
        }
        callbackProcessed = cc11001100_hook("callbackProcessed", true, "assign");
        if (s.timeout) {
          clearTimeout(timeoutHandle);
        }

        // clean up
        setTimeout(function () {
          if (!s.iframeTarget) {
            $io.remove();
          } else {
            //adding else to clean up existing iframe response.
            $io.attr('src', s.iframeSrc);
          }
          xhr.responseXML = cc11001100_hook("xhr.responseXML", null, "assign");
        }, 100);
      }
      var toXml = cc11001100_hook("toXml", $.parseXML || function (s, doc) {
        // use parseXML if available (jQuery 1.5+)
        if (window.ActiveXObject) {
          doc = cc11001100_hook("doc", new ActiveXObject('Microsoft.XMLDOM'), "assign");
          doc.async = cc11001100_hook("doc.async", 'false', "assign");
          doc.loadXML(s);
        } else {
          doc = cc11001100_hook("doc", new DOMParser().parseFromString(s, 'text/xml'), "assign");
        }
        return doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror' ? doc : null;
      }, "var-init");
      var parseJSON = cc11001100_hook("parseJSON", $.parseJSON || function (s) {
        /*jslint evil:true */
        return window['eval']('(' + s + ')');
      }, "var-init");
      var httpData = function (xhr, type, s) {
        // mostly lifted from jq1.4.4

        var ct = cc11001100_hook("ct", xhr.getResponseHeader('content-type') || '', "var-init"),
          xml = cc11001100_hook("xml", type === 'xml' || !type && ct.indexOf('xml') >= 0, "var-init"),
          data = cc11001100_hook("data", xml ? xhr.responseXML : xhr.responseText, "var-init");
        if (xml && data.documentElement.nodeName === 'parsererror') {
          if ($.error) {
            $.error('parsererror');
          }
        }
        if (s && s.dataFilter) {
          data = cc11001100_hook("data", s.dataFilter(data, type), "assign");
        }
        if (typeof data === 'string') {
          if (type === 'json' || !type && ct.indexOf('json') >= 0) {
            data = cc11001100_hook("data", parseJSON(data), "assign");
          } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
            $.globalEval(data);
          }
        }
        return data;
      };
      return deferred;
    }
  }, "assign");

  /**
   * ajaxForm() provides a mechanism for fully automating form submission.
   *
   * The advantages of using this method instead of ajaxSubmit() are:
   *
   * 1: This method will include coordinates for <input type="image" /> elements (if the element
   *    is used to submit the form).
   * 2. This method will include the submit element's name/value data (for the element that was
   *    used to submit the form).
   * 3. This method binds the submit() method to the form for you.
   *
   * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
   * passes the options argument along after properly binding events for submit elements and
   * the form itself.
   */
  $.fn.ajaxForm = cc11001100_hook("$.fn.ajaxForm", function (options) {
    options = cc11001100_hook("options", options || {}, "assign");
    options.delegation = cc11001100_hook("options.delegation", options.delegation && $.isFunction($.fn.on), "assign");

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
      var o = cc11001100_hook("o", {
        s: cc11001100_hook("s", this.selector, "object-key-init"),
        c: cc11001100_hook("c", this.context, "object-key-init")
      }, "var-init");
      if (!$.isReady && o.s) {
        log('DOM not ready, queuing ajaxForm');
        $(function () {
          $(o.s, o.c).ajaxForm(options);
        });
        return this;
      }
      // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
      log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
      return this;
    }
    if (options.delegation) {
      $(document).off('submit.form-plugin', this.selector, doAjaxSubmit).off('click.form-plugin', this.selector, captureSubmittingElement).on('submit.form-plugin', this.selector, options, doAjaxSubmit).on('click.form-plugin', this.selector, options, captureSubmittingElement);
      return this;
    }
    return this.ajaxFormUnbind().bind('submit.form-plugin', options, doAjaxSubmit).bind('click.form-plugin', options, captureSubmittingElement);
  }, "assign");

  // private event handlers
  function doAjaxSubmit(e) {
    cc11001100_hook("e", e, "function-parameter");
    /*jshint validthis:true */
    var options = cc11001100_hook("options", e.data, "var-init");
    if (!e.isDefaultPrevented()) {
      // if event has been canceled, don't proceed
      e.preventDefault();
      $(e.target).ajaxSubmit(options); // #365
    }
  }

  function captureSubmittingElement(e) {
    cc11001100_hook("e", e, "function-parameter");
    /*jshint validthis:true */
    var target = cc11001100_hook("target", e.target, "var-init");
    var $el = cc11001100_hook("$el", $(target), "var-init");
    if (!$el.is("[type=submit],[type=image]")) {
      // is this a child element of the submit el?  (ex: a span within a button)
      var t = cc11001100_hook("t", $el.closest('[type=submit]'), "var-init");
      if (t.length === 0) {
        return;
      }
      target = cc11001100_hook("target", t[0], "assign");
    }
    var form = cc11001100_hook("form", this, "var-init");
    form.clk = cc11001100_hook("form.clk", target, "assign");
    if (target.type == 'image') {
      if (e.offsetX !== undefined) {
        form.clk_x = cc11001100_hook("form.clk_x", e.offsetX, "assign");
        form.clk_y = cc11001100_hook("form.clk_y", e.offsetY, "assign");
      } else if (typeof $.fn.offset == 'function') {
        var offset = cc11001100_hook("offset", $el.offset(), "var-init");
        form.clk_x = cc11001100_hook("form.clk_x", e.pageX - offset.left, "assign");
        form.clk_y = cc11001100_hook("form.clk_y", e.pageY - offset.top, "assign");
      } else {
        form.clk_x = cc11001100_hook("form.clk_x", e.pageX - target.offsetLeft, "assign");
        form.clk_y = cc11001100_hook("form.clk_y", e.pageY - target.offsetTop, "assign");
      }
    }
    // clear form vars
    setTimeout(function () {
      form.clk = cc11001100_hook("form.clk", form.clk_x = cc11001100_hook("form.clk_x", form.clk_y = cc11001100_hook("form.clk_y", null, "assign"), "assign"), "assign");
    }, 100);
  }

  // ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
  $.fn.ajaxFormUnbind = cc11001100_hook("$.fn.ajaxFormUnbind", function () {
    return this.unbind('submit.form-plugin click.form-plugin');
  }, "assign");

  /**
   * formToArray() gathers form element data into an array of objects that can
   * be passed to any of the following ajax functions: $.get, $.post, or load.
   * Each object in the array has both a 'name' and 'value' property.  An example of
   * an array for a simple login form might be:
   *
   * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
   *
   * It is this array that is passed to pre-submit callback functions provided to the
   * ajaxSubmit() and ajaxForm() methods.
   */
  $.fn.formToArray = cc11001100_hook("$.fn.formToArray", function (semantic, elements) {
    var a = cc11001100_hook("a", [], "var-init");
    if (this.length === 0) {
      return a;
    }
    var form = cc11001100_hook("form", this[0], "var-init");
    var formId = cc11001100_hook("formId", this.attr('id'), "var-init");
    var els = cc11001100_hook("els", semantic ? form.getElementsByTagName('*') : form.elements, "var-init");
    var els2;
    if (els && !/MSIE [678]/.test(navigator.userAgent)) {
      // #390
      els = cc11001100_hook("els", $(els).get(), "assign"); // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if (formId) {
      els2 = cc11001100_hook("els2", $(':input[form="' + formId + '"]').get(), "assign"); // hat tip @thet
      if (els2.length) {
        els = cc11001100_hook("els", (els || []).concat(els2), "assign");
      }
    }
    if (!els || !els.length) {
      return a;
    }
    var i, j, n, v, el, max, jmax;
    for (i = cc11001100_hook("i", 0, "assign"), max = cc11001100_hook("max", els.length, "assign"); i < max; i++) {
      el = cc11001100_hook("el", els[i], "assign");
      n = cc11001100_hook("n", el.name, "assign");
      if (!n || el.disabled) {
        continue;
      }
      if (semantic && form.clk && el.type == "image") {
        // handle image inputs on the fly when semantic == true
        if (form.clk == el) {
          a.push({
            name: cc11001100_hook("name", n, "object-key-init"),
            value: cc11001100_hook("value", $(el).val(), "object-key-init"),
            type: cc11001100_hook("type", el.type, "object-key-init")
          });
          a.push({
            name: cc11001100_hook("name", n + '.x', "object-key-init"),
            value: cc11001100_hook("value", form.clk_x, "object-key-init")
          }, {
            name: cc11001100_hook("name", n + '.y', "object-key-init"),
            value: cc11001100_hook("value", form.clk_y, "object-key-init")
          });
        }
        continue;
      }
      v = cc11001100_hook("v", $.fieldValue(el, true), "assign");
      if (v && v.constructor == Array) {
        if (elements) {
          elements.push(el);
        }
        for (j = cc11001100_hook("j", 0, "assign"), jmax = cc11001100_hook("jmax", v.length, "assign"); j < jmax; j++) {
          a.push({
            name: cc11001100_hook("name", n, "object-key-init"),
            value: cc11001100_hook("value", v[j], "object-key-init")
          });
        }
      } else if (feature.fileapi && el.type == 'file') {
        if (elements) {
          elements.push(el);
        }
        var files = cc11001100_hook("files", el.files, "var-init");
        if (files.length) {
          for (j = cc11001100_hook("j", 0, "assign"); j < files.length; j++) {
            a.push({
              name: cc11001100_hook("name", n, "object-key-init"),
              value: cc11001100_hook("value", files[j], "object-key-init"),
              type: cc11001100_hook("type", el.type, "object-key-init")
            });
          }
        } else {
          // #180
          a.push({
            name: cc11001100_hook("name", n, "object-key-init"),
            value: cc11001100_hook("value", '', "object-key-init"),
            type: cc11001100_hook("type", el.type, "object-key-init")
          });
        }
      } else if (v !== null && typeof v != 'undefined') {
        if (elements) {
          elements.push(el);
        }
        a.push({
          name: cc11001100_hook("name", n, "object-key-init"),
          value: cc11001100_hook("value", v, "object-key-init"),
          type: cc11001100_hook("type", el.type, "object-key-init"),
          required: cc11001100_hook("required", el.required, "object-key-init")
        });
      }
    }
    if (!semantic && form.clk) {
      // input type=='image' are not found in elements array! handle it here
      var $input = cc11001100_hook("$input", $(form.clk), "var-init"),
        input = cc11001100_hook("input", $input[0], "var-init");
      n = cc11001100_hook("n", input.name, "assign");
      if (n && !input.disabled && input.type == 'image') {
        a.push({
          name: cc11001100_hook("name", n, "object-key-init"),
          value: cc11001100_hook("value", $input.val(), "object-key-init")
        });
        a.push({
          name: cc11001100_hook("name", n + '.x', "object-key-init"),
          value: cc11001100_hook("value", form.clk_x, "object-key-init")
        }, {
          name: cc11001100_hook("name", n + '.y', "object-key-init"),
          value: cc11001100_hook("value", form.clk_y, "object-key-init")
        });
      }
    }
    return a;
  }, "assign");

  /**
   * Serializes form data into a 'submittable' string. This method will return a string
   * in the format: name1=value1&amp;name2=value2
   */
  $.fn.formSerialize = cc11001100_hook("$.fn.formSerialize", function (semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
  }, "assign");

  /**
   * Serializes all field elements in the jQuery object into a query string.
   * This method will return a string in the format: name1=value1&amp;name2=value2
   */
  $.fn.fieldSerialize = cc11001100_hook("$.fn.fieldSerialize", function (successful) {
    var a = cc11001100_hook("a", [], "var-init");
    this.each(function () {
      var n = cc11001100_hook("n", this.name, "var-init");
      if (!n) {
        return;
      }
      var v = cc11001100_hook("v", $.fieldValue(this, successful), "var-init");
      if (v && v.constructor == Array) {
        for (var i = cc11001100_hook("i", 0, "var-init"), max = cc11001100_hook("max", v.length, "var-init"); i < max; i++) {
          a.push({
            name: cc11001100_hook("name", n, "object-key-init"),
            value: cc11001100_hook("value", v[i], "object-key-init")
          });
        }
      } else if (v !== null && typeof v != 'undefined') {
        a.push({
          name: cc11001100_hook("name", this.name, "object-key-init"),
          value: cc11001100_hook("value", v, "object-key-init")
        });
      }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
  }, "assign");

  /**
   * Returns the value(s) of the element in the matched set.  For example, consider the following form:
   *
   *  <form><fieldset>
   *      <input name="A" type="text" />
   *      <input name="A" type="text" />
   *      <input name="B" type="checkbox" value="B1" />
   *      <input name="B" type="checkbox" value="B2"/>
   *      <input name="C" type="radio" value="C1" />
   *      <input name="C" type="radio" value="C2" />
   *  </fieldset></form>
   *
   *  var v = $('input[type=text]').fieldValue();
   *  // if no values are entered into the text inputs
   *  v == ['','']
   *  // if values entered into the text inputs are 'foo' and 'bar'
   *  v == ['foo','bar']
   *
   *  var v = $('input[type=checkbox]').fieldValue();
   *  // if neither checkbox is checked
   *  v === undefined
   *  // if both checkboxes are checked
   *  v == ['B1', 'B2']
   *
   *  var v = $('input[type=radio]').fieldValue();
   *  // if neither radio is checked
   *  v === undefined
   *  // if first radio is checked
   *  v == ['C1']
   *
   * The successful argument controls whether or not the field element must be 'successful'
   * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
   * The default value of the successful argument is true.  If this value is false the value(s)
   * for each element is returned.
   *
   * Note: This method *always* returns an array.  If no valid value can be determined the
   *    array will be empty, otherwise it will contain one or more values.
   */
  $.fn.fieldValue = cc11001100_hook("$.fn.fieldValue", function (successful) {
    for (var val = cc11001100_hook("val", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"), max = cc11001100_hook("max", this.length, "var-init"); i < max; i++) {
      var el = cc11001100_hook("el", this[i], "var-init");
      var v = cc11001100_hook("v", $.fieldValue(el, successful), "var-init");
      if (v === null || typeof v == 'undefined' || v.constructor == Array && !v.length) {
        continue;
      }
      if (v.constructor == Array) {
        $.merge(val, v);
      } else {
        val.push(v);
      }
    }
    return val;
  }, "assign");

  /**
   * Returns the value of the field element.
   */
  $.fieldValue = cc11001100_hook("$.fieldValue", function (el, successful) {
    var n = cc11001100_hook("n", el.name, "var-init"),
      t = cc11001100_hook("t", el.type, "var-init"),
      tag = cc11001100_hook("tag", el.tagName.toLowerCase(), "var-init");
    if (successful === undefined) {
      successful = cc11001100_hook("successful", true, "assign");
    }
    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' || (t == 'checkbox' || t == 'radio') && !el.checked || (t == 'submit' || t == 'image') && el.form && el.form.clk != el || tag == 'select' && el.selectedIndex == -1)) {
      return null;
    }
    if (tag == 'select') {
      var index = cc11001100_hook("index", el.selectedIndex, "var-init");
      if (index < 0) {
        return null;
      }
      var a = cc11001100_hook("a", [], "var-init"),
        ops = cc11001100_hook("ops", el.options, "var-init");
      var one = cc11001100_hook("one", t == 'select-one', "var-init");
      var max = cc11001100_hook("max", one ? index + 1 : ops.length, "var-init");
      for (var i = cc11001100_hook("i", one ? index : 0, "var-init"); i < max; i++) {
        var op = cc11001100_hook("op", ops[i], "var-init");
        if (op.selected) {
          var v = cc11001100_hook("v", op.value, "var-init");
          if (!v) {
            // extra pain for IE...
            v = cc11001100_hook("v", op.attributes && op.attributes.value && !op.attributes.value.specified ? op.text : op.value, "assign");
          }
          if (one) {
            return v;
          }
          a.push(v);
        }
      }
      return a;
    }
    return $(el).val();
  }, "assign");

  /**
   * Clears the form data.  Takes the following actions on the form's input fields:
   *  - input text fields will have their 'value' property set to the empty string
   *  - select elements will have their 'selectedIndex' property set to -1
   *  - checkbox and radio inputs will have their 'checked' property set to false
   *  - inputs of type submit, button, reset, and hidden will *not* be effected
   *  - button elements will *not* be effected
   */
  $.fn.clearForm = cc11001100_hook("$.fn.clearForm", function (includeHidden) {
    return this.each(function () {
      $('input,select,textarea', this).clearFields(includeHidden);
    });
  }, "assign");

  /**
   * Clears the selected form elements.
   */
  $.fn.clearFields = cc11001100_hook("$.fn.clearFields", $.fn.clearInputs = cc11001100_hook("$.fn.clearInputs", function (includeHidden) {
    var re = cc11001100_hook("re", /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i, "var-init"); // 'hidden' is not in this list
    return this.each(function () {
      var t = cc11001100_hook("t", this.type, "var-init"),
        tag = cc11001100_hook("tag", this.tagName.toLowerCase(), "var-init");
      if (re.test(t) || tag == 'textarea') {
        this.value = cc11001100_hook("this.value", '', "assign");
      } else if (t == 'checkbox' || t == 'radio') {
        this.checked = cc11001100_hook("this.checked", false, "assign");
      } else if (tag == 'select') {
        this.selectedIndex = cc11001100_hook("this.selectedIndex", -1, "assign");
      } else if (t == "file") {
        if (/MSIE/.test(navigator.userAgent)) {
          $(this).replaceWith($(this).clone(true));
        } else {
          $(this).val('');
        }
      } else if (includeHidden) {
        // includeHidden can be the value true, or it can be a selector string
        // indicating a special test; for example:
        //  $('#myForm').clearForm('.special:hidden')
        // the above would clean hidden inputs that have the class of 'special'
        if (includeHidden === true && /hidden/.test(t) || typeof includeHidden == 'string' && $(this).is(includeHidden)) {
          this.value = cc11001100_hook("this.value", '', "assign");
        }
      }
    });
  }, "assign"), "assign");

  /**
   * Resets the form data.  Causes all form elements to be reset to their original value.
   */
  $.fn.resetForm = cc11001100_hook("$.fn.resetForm", function () {
    return this.each(function () {
      // guard against an input with the name of 'reset'
      // note that IE reports the reset function as an 'object'
      if (typeof this.reset == 'function' || typeof this.reset == 'object' && !this.reset.nodeType) {
        this.reset();
      }
    });
  }, "assign");

  /**
   * Enables or disables any matching elements.
   */
  $.fn.enable = cc11001100_hook("$.fn.enable", function (b) {
    if (b === undefined) {
      b = cc11001100_hook("b", true, "assign");
    }
    return this.each(function () {
      this.disabled = cc11001100_hook("this.disabled", !b, "assign");
    });
  }, "assign");

  /**
   * Checks/unchecks any matching checkboxes or radio buttons and
   * selects/deselects and matching option elements.
   */
  $.fn.selected = cc11001100_hook("$.fn.selected", function (select) {
    if (select === undefined) {
      select = cc11001100_hook("select", true, "assign");
    }
    return this.each(function () {
      var t = cc11001100_hook("t", this.type, "var-init");
      if (t == 'checkbox' || t == 'radio') {
        this.checked = cc11001100_hook("this.checked", select, "assign");
      } else if (this.tagName.toLowerCase() == 'option') {
        var $sel = cc11001100_hook("$sel", $(this).parent('select'), "var-init");
        if (select && $sel[0] && $sel[0].type == 'select-one') {
          // deselect all other options
          $sel.find('option').selected(false);
        }
        this.selected = cc11001100_hook("this.selected", select, "assign");
      }
    });
  }, "assign");

  // expose debug var
  $.fn.ajaxSubmit.debug = cc11001100_hook("$.fn.ajaxSubmit.debug", false, "assign");

  // helper fn for console logging
  function log() {
    if (!$.fn.ajaxSubmit.debug) {
      return;
    }
    var msg = cc11001100_hook("msg", '[jquery.form] ' + Array.prototype.join.call(arguments, ''), "var-init");
    if (window.console && window.console.log) {
      window.console.log(msg);
    } else if (window.opera && window.opera.postError) {
      window.opera.postError(msg);
    }
  }
});