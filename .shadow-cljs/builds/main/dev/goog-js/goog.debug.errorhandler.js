["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/debug/errorhandler.js"],"~:js","goog.provide(\"goog.debug.ErrorHandler\");\ngoog.provide(\"goog.debug.ErrorHandler.ProtectedFunctionError\");\ngoog.require(\"goog.Disposable\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.debug.EntryPointMonitor\");\ngoog.require(\"goog.debug.Error\");\ngoog.debug.ErrorHandler = function(handler) {\n  goog.debug.ErrorHandler.base(this, \"constructor\");\n  this.errorHandlerFn_ = handler;\n  this.wrapErrors_ = true;\n  this.prefixErrorMessages_ = false;\n};\ngoog.inherits(goog.debug.ErrorHandler, goog.Disposable);\ngoog.debug.ErrorHandler.prototype.wrap = function(fn) {\n  return this.protectEntryPoint(goog.asserts.assertFunction(fn));\n};\ngoog.debug.ErrorHandler.prototype.unwrap = function(fn) {\n  goog.asserts.assertFunction(fn);\n  return fn[this.getFunctionIndex_(false)] || fn;\n};\ngoog.debug.ErrorHandler.prototype.getFunctionIndex_ = function(wrapper) {\n  return (wrapper ? \"__wrapper_\" : \"__protected_\") + goog.getUid(this) + \"__\";\n};\ngoog.debug.ErrorHandler.prototype.protectEntryPoint = function(fn) {\n  var protectedFnName = this.getFunctionIndex_(true);\n  if (!fn[protectedFnName]) {\n    var wrapper = fn[protectedFnName] = this.getProtectedFunction(fn);\n    wrapper[this.getFunctionIndex_(false)] = fn;\n  }\n  return fn[protectedFnName];\n};\ngoog.debug.ErrorHandler.prototype.getProtectedFunction = function(fn) {\n  var that = this;\n  var googDebugErrorHandlerProtectedFunction = function() {\n    var self = this;\n    if (that.isDisposed()) {\n      return fn.apply(self, arguments);\n    }\n    try {\n      return fn.apply(self, arguments);\n    } catch (e) {\n      that.handleError_(e);\n    }\n  };\n  googDebugErrorHandlerProtectedFunction[this.getFunctionIndex_(false)] = fn;\n  return googDebugErrorHandlerProtectedFunction;\n};\ngoog.debug.ErrorHandler.prototype.handleError_ = function(e) {\n  var MESSAGE_PREFIX = goog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX;\n  if (e && typeof e === \"object\" && typeof e.message === \"string\" && e.message.indexOf(MESSAGE_PREFIX) == 0 || typeof e === \"string\" && e.indexOf(MESSAGE_PREFIX) == 0) {\n    return;\n  }\n  this.errorHandlerFn_(e);\n  if (!this.wrapErrors_) {\n    if (this.prefixErrorMessages_) {\n      if (typeof e === \"object\" && e && typeof e.message === \"string\") {\n        e.message = MESSAGE_PREFIX + e.message;\n      } else {\n        e = MESSAGE_PREFIX + e;\n      }\n    }\n    if (goog.DEBUG) {\n      if (e && typeof e.stack === \"string\" && Error.captureStackTrace && goog.global[\"console\"]) {\n        goog.global[\"console\"][\"error\"](e.message, e.stack);\n      }\n    }\n    throw e;\n  }\n  throw new goog.debug.ErrorHandler.ProtectedFunctionError(e);\n};\ngoog.debug.ErrorHandler.prototype.protectWindowSetTimeout = function() {\n  this.protectWindowFunctionsHelper_(\"setTimeout\");\n};\ngoog.debug.ErrorHandler.prototype.protectWindowSetInterval = function() {\n  this.protectWindowFunctionsHelper_(\"setInterval\");\n};\ngoog.debug.ErrorHandler.prototype.catchUnhandledRejections = function(win) {\n  win = win || goog.global[\"window\"];\n  if (\"onunhandledrejection\" in win) {\n    win.onunhandledrejection = event => {\n      const e = event && event.reason ? event.reason : new Error(\"uncaught error\");\n      this.handleError_(e);\n    };\n  }\n};\ngoog.debug.ErrorHandler.prototype.protectWindowRequestAnimationFrame = function() {\n  var win = goog.global[\"window\"];\n  var fnNames = [\"requestAnimationFrame\", \"mozRequestAnimationFrame\", \"webkitAnimationFrame\", \"msRequestAnimationFrame\"];\n  for (var i = 0; i < fnNames.length; i++) {\n    var fnName = fnNames[i];\n    if (fnNames[i] in win) {\n      this.protectWindowFunctionsHelper_(fnName);\n    }\n  }\n};\ngoog.debug.ErrorHandler.prototype.protectWindowFunctionsHelper_ = function(fnName) {\n  var win = goog.global[\"window\"];\n  var originalFn = win[fnName];\n  var that = this;\n  win[fnName] = function(fn, time) {\n    if (typeof fn === \"string\") {\n      fn = goog.partial(goog.globalEval, fn);\n    }\n    arguments[0] = fn = that.protectEntryPoint(fn);\n    if (originalFn.apply) {\n      return originalFn.apply(this, arguments);\n    } else {\n      var callback = fn;\n      if (arguments.length > 2) {\n        var args = Array.prototype.slice.call(arguments, 2);\n        callback = function() {\n          fn.apply(this, args);\n        };\n      }\n      return originalFn(callback, time);\n    }\n  };\n  win[fnName][this.getFunctionIndex_(false)] = originalFn;\n};\ngoog.debug.ErrorHandler.prototype.setWrapErrors = function(wrapErrors) {\n  this.wrapErrors_ = wrapErrors;\n};\ngoog.debug.ErrorHandler.prototype.setPrefixErrorMessages = function(prefixErrorMessages) {\n  this.prefixErrorMessages_ = prefixErrorMessages;\n};\ngoog.debug.ErrorHandler.prototype.disposeInternal = function() {\n  var win = goog.global[\"window\"];\n  win.setTimeout = this.unwrap(win.setTimeout);\n  win.setInterval = this.unwrap(win.setInterval);\n  goog.debug.ErrorHandler.base(this, \"disposeInternal\");\n};\ngoog.debug.ErrorHandler.ProtectedFunctionError = function(cause) {\n  var message = goog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX + (cause && cause.message ? String(cause.message) : String(cause));\n  goog.debug.ErrorHandler.ProtectedFunctionError.base(this, \"constructor\", message, cause);\n  var stack = cause && cause.stack;\n  if (stack && typeof stack === \"string\") {\n    this.stack = stack;\n  }\n};\ngoog.inherits(goog.debug.ErrorHandler.ProtectedFunctionError, goog.debug.Error);\ngoog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX = \"Error in protected function: \";\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Error handling utilities.\n */\n\ngoog.provide('goog.debug.ErrorHandler');\ngoog.provide('goog.debug.ErrorHandler.ProtectedFunctionError');\n\ngoog.require('goog.Disposable');\ngoog.require('goog.asserts');\ngoog.require('goog.debug.EntryPointMonitor');\ngoog.require('goog.debug.Error');\n\n\n\n/**\n * The ErrorHandler can be used to to wrap functions with a try/catch\n * statement. If an exception is thrown, the given error handler function will\n * be called.\n *\n * When this object is disposed, it will stop handling exceptions and tracing.\n * It will also try to restore window.setTimeout and window.setInterval\n * if it wrapped them. Notice that in the general case, it is not technically\n * possible to remove the wrapper, because functions have no knowledge of\n * what they have been assigned to. So the app is responsible for other\n * forms of unwrapping.\n *\n * @param {Function} handler Handler for exceptions.\n * @constructor\n * @extends {goog.Disposable}\n * @implements {goog.debug.EntryPointMonitor}\n */\ngoog.debug.ErrorHandler = function(handler) {\n  'use strict';\n  goog.debug.ErrorHandler.base(this, 'constructor');\n\n  /**\n   * Handler for exceptions, which can do logging, reporting, etc.\n   * @type {Function}\n   * @private\n   */\n  this.errorHandlerFn_ = handler;\n\n  /**\n   * Whether errors should be wrapped in\n   * goog.debug.ErrorHandler.ProtectedFunctionError before rethrowing.\n   * @type {boolean}\n   * @private\n   */\n  this.wrapErrors_ = true;  // TODO(malteubl) Change default.\n\n  /**\n   * Whether to add a prefix to all error messages. The prefix is\n   * goog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX. This option\n   * only has an effect if this.wrapErrors_  is set to false.\n   * @type {boolean}\n   * @private\n   */\n  this.prefixErrorMessages_ = false;\n};\ngoog.inherits(goog.debug.ErrorHandler, goog.Disposable);\n\n\n/** @override */\ngoog.debug.ErrorHandler.prototype.wrap = function(fn) {\n  'use strict';\n  return this.protectEntryPoint(goog.asserts.assertFunction(fn));\n};\n\n\n/** @override */\ngoog.debug.ErrorHandler.prototype.unwrap = function(fn) {\n  'use strict';\n  goog.asserts.assertFunction(fn);\n  return fn[this.getFunctionIndex_(false)] || fn;\n};\n\n\n/**\n * Get the index for a function. Used for internal indexing.\n * @param {boolean} wrapper True for the wrapper; false for the wrapped.\n * @return {string} The index where we should store the function in its\n *     wrapper/wrapped function.\n * @private\n */\ngoog.debug.ErrorHandler.prototype.getFunctionIndex_ = function(wrapper) {\n  'use strict';\n  return (wrapper ? '__wrapper_' : '__protected_') + goog.getUid(this) + '__';\n};\n\n\n/**\n * Installs exception protection for an entry point function. When an exception\n * is thrown from a protected function, a handler will be invoked to handle it.\n *\n * @param {Function} fn An entry point function to be protected.\n * @return {!Function} A protected wrapper function that calls the entry point\n *     function.\n */\ngoog.debug.ErrorHandler.prototype.protectEntryPoint = function(fn) {\n  'use strict';\n  var protectedFnName = this.getFunctionIndex_(true);\n  if (!fn[protectedFnName]) {\n    var wrapper = fn[protectedFnName] = this.getProtectedFunction(fn);\n    wrapper[this.getFunctionIndex_(false)] = fn;\n  }\n  return fn[protectedFnName];\n};\n\n\n/**\n * Helps {@link #protectEntryPoint} by actually creating the protected\n * wrapper function, after {@link #protectEntryPoint} determines that one does\n * not already exist for the given function.  Can be overridden by subclasses\n * that may want to implement different error handling, or add additional\n * entry point hooks.\n * @param {!Function} fn An entry point function to be protected.\n * @return {!Function} protected wrapper function.\n * @protected\n */\ngoog.debug.ErrorHandler.prototype.getProtectedFunction = function(fn) {\n  'use strict';\n  var that = this;\n  var googDebugErrorHandlerProtectedFunction = function() {\n    'use strict';\n    var self = /** @type {?} */ (this);\n    if (that.isDisposed()) {\n      return fn.apply(self, arguments);\n    }\n\n    try {\n      return fn.apply(self, arguments);\n    } catch (e) {\n      that.handleError_(e);\n    }\n  };\n  googDebugErrorHandlerProtectedFunction[this.getFunctionIndex_(false)] = fn;\n  return googDebugErrorHandlerProtectedFunction;\n};\n\n\n/**\n * Internal error handler.\n * @param {?} e The error string or an Error-like object.\n * @private\n */\ngoog.debug.ErrorHandler.prototype.handleError_ = function(e) {\n  'use strict';\n  // Don't re-report errors that have already been handled by this code.\n  var MESSAGE_PREFIX =\n      goog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX;\n  if ((e && typeof e === 'object' && typeof e.message === 'string' &&\n       e.message.indexOf(MESSAGE_PREFIX) == 0) ||\n      (typeof e === 'string' && e.indexOf(MESSAGE_PREFIX) == 0)) {\n    return;\n  }\n  this.errorHandlerFn_(e);\n  if (!this.wrapErrors_) {\n    // Add the prefix to the existing message.\n    if (this.prefixErrorMessages_) {\n      if (typeof e === 'object' && e && typeof e.message === 'string') {\n        /** @type {{message}} */ (e).message = MESSAGE_PREFIX + e.message;\n      } else {\n        e = MESSAGE_PREFIX + e;\n      }\n    }\n    if (goog.DEBUG) {\n      // Work around for https://code.google.com/p/v8/issues/detail?id=2625\n      // and https://code.google.com/p/chromium/issues/detail?id=237059\n      // Custom errors and errors with custom stack traces show the wrong\n      // stack trace\n      // If it has a stack and Error.captureStackTrace is supported (only\n      // supported in V8 as of May 2013) log the stack to the console.\n      if (e && typeof e.stack === 'string' && Error.captureStackTrace &&\n          goog.global['console']) {\n        goog.global['console']['error'](e.message, e.stack);\n      }\n    }\n    // Re-throw original error. This is great for debugging as it makes\n    // browser JS dev consoles show the correct error and stack trace.\n    throw e;\n  }\n  // Re-throw it since this may be expected by the caller.\n  throw new goog.debug.ErrorHandler.ProtectedFunctionError(e);\n};\n\n\n// TODO(mknichel): Allow these functions to take in the window to protect.\n/**\n * Installs exception protection for window.setTimeout to handle exceptions.\n */\ngoog.debug.ErrorHandler.prototype.protectWindowSetTimeout = function() {\n  'use strict';\n  this.protectWindowFunctionsHelper_('setTimeout');\n};\n\n\n/**\n * Install exception protection for window.setInterval to handle exceptions.\n */\ngoog.debug.ErrorHandler.prototype.protectWindowSetInterval = function() {\n  'use strict';\n  this.protectWindowFunctionsHelper_('setInterval');\n};\n\n\n/**\n * Install an unhandledrejection event listener that reports rejected promises.\n * Note: this will only work with Chrome 49+ and friends, but so far is the only\n * way to report uncaught errors in aysnc/await functions.\n * @param {!Window=} win the window to instrument, defaults to current window\n */\ngoog.debug.ErrorHandler.prototype.catchUnhandledRejections = function(win) {\n  'use strict';\n  win = win || goog.global['window'];\n  if ('onunhandledrejection' in win) {\n    win.onunhandledrejection = (event) => {\n      // event.reason contains the rejection reason. When an Error is\n      // thrown, this is the Error object. If it is undefined, create a new\n      // error object.\n      const e =\n          event && event.reason ? event.reason : new Error('uncaught error');\n      this.handleError_(e);\n    };\n  }\n};\n\n\n/**\n * Install exception protection for window.requestAnimationFrame to handle\n * exceptions.\n */\ngoog.debug.ErrorHandler.prototype.protectWindowRequestAnimationFrame =\n    function() {\n  'use strict';\n  var win = goog.global['window'];\n  var fnNames = [\n    'requestAnimationFrame', 'mozRequestAnimationFrame', 'webkitAnimationFrame',\n    'msRequestAnimationFrame'\n  ];\n  for (var i = 0; i < fnNames.length; i++) {\n    var fnName = fnNames[i];\n    if (fnNames[i] in win) {\n      this.protectWindowFunctionsHelper_(fnName);\n    }\n  }\n};\n\n\n/**\n * Helper function for protecting a function that causes a function to be\n * asynchronously called, for example setTimeout or requestAnimationFrame.\n * @param {string} fnName The name of the function to protect.\n * @private\n */\ngoog.debug.ErrorHandler.prototype.protectWindowFunctionsHelper_ = function(\n    fnName) {\n  'use strict';\n  var win = goog.global['window'];\n  var originalFn = win[fnName];\n  var that = this;\n  win[fnName] = function(fn, time) {\n    'use strict';\n    // Don't try to protect strings. In theory, we could try to globalEval\n    // the string, but this seems to lead to permission errors on IE6.\n    if (typeof fn === 'string') {\n      fn = goog.partial(goog.globalEval, fn);\n    }\n    arguments[0] = fn = that.protectEntryPoint(fn);\n\n    // IE doesn't support .call for setInterval/setTimeout, but it\n    // also doesn't care what \"this\" is, so we can just call the\n    // original function directly\n    if (originalFn.apply) {\n      return originalFn.apply(/** @type {?} */ (this), arguments);\n    } else {\n      var callback = fn;\n      if (arguments.length > 2) {\n        var args = Array.prototype.slice.call(arguments, 2);\n        callback = function() {\n          'use strict';\n          fn.apply(/** @type {?} */ (this), args);\n        };\n      }\n      return originalFn(callback, time);\n    }\n  };\n  win[fnName][this.getFunctionIndex_(false)] = originalFn;\n};\n\n\n/**\n * Set whether to wrap errors that occur in protected functions in a\n * goog.debug.ErrorHandler.ProtectedFunctionError.\n * @param {boolean} wrapErrors Whether to wrap errors.\n */\ngoog.debug.ErrorHandler.prototype.setWrapErrors = function(wrapErrors) {\n  'use strict';\n  this.wrapErrors_ = wrapErrors;\n};\n\n\n/**\n * Set whether to add a prefix to all error messages that occur in protected\n * functions.\n * @param {boolean} prefixErrorMessages Whether to add a prefix to error\n *     messages.\n */\ngoog.debug.ErrorHandler.prototype.setPrefixErrorMessages = function(\n    prefixErrorMessages) {\n  'use strict';\n  this.prefixErrorMessages_ = prefixErrorMessages;\n};\n\n\n/** @override */\ngoog.debug.ErrorHandler.prototype.disposeInternal = function() {\n  'use strict';\n  // Try to unwrap window.setTimeout and window.setInterval.\n  var win = goog.global['window'];\n  win.setTimeout = this.unwrap(win.setTimeout);\n  win.setInterval = this.unwrap(win.setInterval);\n\n  goog.debug.ErrorHandler.base(this, 'disposeInternal');\n};\n\n\n\n/**\n * Error thrown to the caller of a protected entry point if the entry point\n * throws an error.\n * @param {*} cause The error thrown by the entry point.\n * @constructor\n * @extends {goog.debug.Error}\n * @final\n */\ngoog.debug.ErrorHandler.ProtectedFunctionError = function(cause) {\n  'use strict';\n  /** @suppress {missingProperties} message may not be defined. */\n  var message = goog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX +\n      (cause && cause.message ? String(cause.message) : String(cause));\n  goog.debug.ErrorHandler.ProtectedFunctionError.base(\n      this, 'constructor', message, /** @type {?} */ (cause));\n\n  /** @suppress {missingProperties} stack may not be defined. */\n  var stack = cause && cause.stack;\n  if (stack && typeof stack === 'string') {\n    this.stack = /** @type {string} */ (stack);\n  }\n};\ngoog.inherits(goog.debug.ErrorHandler.ProtectedFunctionError, goog.debug.Error);\n\n\n/**\n * Text to prefix the message with.\n * @type {string}\n */\ngoog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX =\n    'Error in protected function: ';\n","~:compiled-at",1656688463813,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.debug.errorhandler.js\",\n\"lineCount\":142,\n\"mappings\":\"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\",\n\"sources\":[\"goog/debug/errorhandler.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Error handling utilities.\\n */\\n\\ngoog.provide('goog.debug.ErrorHandler');\\ngoog.provide('goog.debug.ErrorHandler.ProtectedFunctionError');\\n\\ngoog.require('goog.Disposable');\\ngoog.require('goog.asserts');\\ngoog.require('goog.debug.EntryPointMonitor');\\ngoog.require('goog.debug.Error');\\n\\n\\n\\n/**\\n * The ErrorHandler can be used to to wrap functions with a try/catch\\n * statement. If an exception is thrown, the given error handler function will\\n * be called.\\n *\\n * When this object is disposed, it will stop handling exceptions and tracing.\\n * It will also try to restore window.setTimeout and window.setInterval\\n * if it wrapped them. Notice that in the general case, it is not technically\\n * possible to remove the wrapper, because functions have no knowledge of\\n * what they have been assigned to. So the app is responsible for other\\n * forms of unwrapping.\\n *\\n * @param {Function} handler Handler for exceptions.\\n * @constructor\\n * @extends {goog.Disposable}\\n * @implements {goog.debug.EntryPointMonitor}\\n */\\ngoog.debug.ErrorHandler = function(handler) {\\n  'use strict';\\n  goog.debug.ErrorHandler.base(this, 'constructor');\\n\\n  /**\\n   * Handler for exceptions, which can do logging, reporting, etc.\\n   * @type {Function}\\n   * @private\\n   */\\n  this.errorHandlerFn_ = handler;\\n\\n  /**\\n   * Whether errors should be wrapped in\\n   * goog.debug.ErrorHandler.ProtectedFunctionError before rethrowing.\\n   * @type {boolean}\\n   * @private\\n   */\\n  this.wrapErrors_ = true;  // TODO(malteubl) Change default.\\n\\n  /**\\n   * Whether to add a prefix to all error messages. The prefix is\\n   * goog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX. This option\\n   * only has an effect if this.wrapErrors_  is set to false.\\n   * @type {boolean}\\n   * @private\\n   */\\n  this.prefixErrorMessages_ = false;\\n};\\ngoog.inherits(goog.debug.ErrorHandler, goog.Disposable);\\n\\n\\n/** @override */\\ngoog.debug.ErrorHandler.prototype.wrap = function(fn) {\\n  'use strict';\\n  return this.protectEntryPoint(goog.asserts.assertFunction(fn));\\n};\\n\\n\\n/** @override */\\ngoog.debug.ErrorHandler.prototype.unwrap = function(fn) {\\n  'use strict';\\n  goog.asserts.assertFunction(fn);\\n  return fn[this.getFunctionIndex_(false)] || fn;\\n};\\n\\n\\n/**\\n * Get the index for a function. Used for internal indexing.\\n * @param {boolean} wrapper True for the wrapper; false for the wrapped.\\n * @return {string} The index where we should store the function in its\\n *     wrapper/wrapped function.\\n * @private\\n */\\ngoog.debug.ErrorHandler.prototype.getFunctionIndex_ = function(wrapper) {\\n  'use strict';\\n  return (wrapper ? '__wrapper_' : '__protected_') + goog.getUid(this) + '__';\\n};\\n\\n\\n/**\\n * Installs exception protection for an entry point function. When an exception\\n * is thrown from a protected function, a handler will be invoked to handle it.\\n *\\n * @param {Function} fn An entry point function to be protected.\\n * @return {!Function} A protected wrapper function that calls the entry point\\n *     function.\\n */\\ngoog.debug.ErrorHandler.prototype.protectEntryPoint = function(fn) {\\n  'use strict';\\n  var protectedFnName = this.getFunctionIndex_(true);\\n  if (!fn[protectedFnName]) {\\n    var wrapper = fn[protectedFnName] = this.getProtectedFunction(fn);\\n    wrapper[this.getFunctionIndex_(false)] = fn;\\n  }\\n  return fn[protectedFnName];\\n};\\n\\n\\n/**\\n * Helps {@link #protectEntryPoint} by actually creating the protected\\n * wrapper function, after {@link #protectEntryPoint} determines that one does\\n * not already exist for the given function.  Can be overridden by subclasses\\n * that may want to implement different error handling, or add additional\\n * entry point hooks.\\n * @param {!Function} fn An entry point function to be protected.\\n * @return {!Function} protected wrapper function.\\n * @protected\\n */\\ngoog.debug.ErrorHandler.prototype.getProtectedFunction = function(fn) {\\n  'use strict';\\n  var that = this;\\n  var googDebugErrorHandlerProtectedFunction = function() {\\n    'use strict';\\n    var self = /** @type {?} */ (this);\\n    if (that.isDisposed()) {\\n      return fn.apply(self, arguments);\\n    }\\n\\n    try {\\n      return fn.apply(self, arguments);\\n    } catch (e) {\\n      that.handleError_(e);\\n    }\\n  };\\n  googDebugErrorHandlerProtectedFunction[this.getFunctionIndex_(false)] = fn;\\n  return googDebugErrorHandlerProtectedFunction;\\n};\\n\\n\\n/**\\n * Internal error handler.\\n * @param {?} e The error string or an Error-like object.\\n * @private\\n */\\ngoog.debug.ErrorHandler.prototype.handleError_ = function(e) {\\n  'use strict';\\n  // Don't re-report errors that have already been handled by this code.\\n  var MESSAGE_PREFIX =\\n      goog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX;\\n  if ((e && typeof e === 'object' && typeof e.message === 'string' &&\\n       e.message.indexOf(MESSAGE_PREFIX) == 0) ||\\n      (typeof e === 'string' && e.indexOf(MESSAGE_PREFIX) == 0)) {\\n    return;\\n  }\\n  this.errorHandlerFn_(e);\\n  if (!this.wrapErrors_) {\\n    // Add the prefix to the existing message.\\n    if (this.prefixErrorMessages_) {\\n      if (typeof e === 'object' && e && typeof e.message === 'string') {\\n        /** @type {{message}} */ (e).message = MESSAGE_PREFIX + e.message;\\n      } else {\\n        e = MESSAGE_PREFIX + e;\\n      }\\n    }\\n    if (goog.DEBUG) {\\n      // Work around for https://code.google.com/p/v8/issues/detail?id=2625\\n      // and https://code.google.com/p/chromium/issues/detail?id=237059\\n      // Custom errors and errors with custom stack traces show the wrong\\n      // stack trace\\n      // If it has a stack and Error.captureStackTrace is supported (only\\n      // supported in V8 as of May 2013) log the stack to the console.\\n      if (e && typeof e.stack === 'string' && Error.captureStackTrace &&\\n          goog.global['console']) {\\n        goog.global['console']['error'](e.message, e.stack);\\n      }\\n    }\\n    // Re-throw original error. This is great for debugging as it makes\\n    // browser JS dev consoles show the correct error and stack trace.\\n    throw e;\\n  }\\n  // Re-throw it since this may be expected by the caller.\\n  throw new goog.debug.ErrorHandler.ProtectedFunctionError(e);\\n};\\n\\n\\n// TODO(mknichel): Allow these functions to take in the window to protect.\\n/**\\n * Installs exception protection for window.setTimeout to handle exceptions.\\n */\\ngoog.debug.ErrorHandler.prototype.protectWindowSetTimeout = function() {\\n  'use strict';\\n  this.protectWindowFunctionsHelper_('setTimeout');\\n};\\n\\n\\n/**\\n * Install exception protection for window.setInterval to handle exceptions.\\n */\\ngoog.debug.ErrorHandler.prototype.protectWindowSetInterval = function() {\\n  'use strict';\\n  this.protectWindowFunctionsHelper_('setInterval');\\n};\\n\\n\\n/**\\n * Install an unhandledrejection event listener that reports rejected promises.\\n * Note: this will only work with Chrome 49+ and friends, but so far is the only\\n * way to report uncaught errors in aysnc/await functions.\\n * @param {!Window=} win the window to instrument, defaults to current window\\n */\\ngoog.debug.ErrorHandler.prototype.catchUnhandledRejections = function(win) {\\n  'use strict';\\n  win = win || goog.global['window'];\\n  if ('onunhandledrejection' in win) {\\n    win.onunhandledrejection = (event) => {\\n      // event.reason contains the rejection reason. When an Error is\\n      // thrown, this is the Error object. If it is undefined, create a new\\n      // error object.\\n      const e =\\n          event && event.reason ? event.reason : new Error('uncaught error');\\n      this.handleError_(e);\\n    };\\n  }\\n};\\n\\n\\n/**\\n * Install exception protection for window.requestAnimationFrame to handle\\n * exceptions.\\n */\\ngoog.debug.ErrorHandler.prototype.protectWindowRequestAnimationFrame =\\n    function() {\\n  'use strict';\\n  var win = goog.global['window'];\\n  var fnNames = [\\n    'requestAnimationFrame', 'mozRequestAnimationFrame', 'webkitAnimationFrame',\\n    'msRequestAnimationFrame'\\n  ];\\n  for (var i = 0; i < fnNames.length; i++) {\\n    var fnName = fnNames[i];\\n    if (fnNames[i] in win) {\\n      this.protectWindowFunctionsHelper_(fnName);\\n    }\\n  }\\n};\\n\\n\\n/**\\n * Helper function for protecting a function that causes a function to be\\n * asynchronously called, for example setTimeout or requestAnimationFrame.\\n * @param {string} fnName The name of the function to protect.\\n * @private\\n */\\ngoog.debug.ErrorHandler.prototype.protectWindowFunctionsHelper_ = function(\\n    fnName) {\\n  'use strict';\\n  var win = goog.global['window'];\\n  var originalFn = win[fnName];\\n  var that = this;\\n  win[fnName] = function(fn, time) {\\n    'use strict';\\n    // Don't try to protect strings. In theory, we could try to globalEval\\n    // the string, but this seems to lead to permission errors on IE6.\\n    if (typeof fn === 'string') {\\n      fn = goog.partial(goog.globalEval, fn);\\n    }\\n    arguments[0] = fn = that.protectEntryPoint(fn);\\n\\n    // IE doesn't support .call for setInterval/setTimeout, but it\\n    // also doesn't care what \\\"this\\\" is, so we can just call the\\n    // original function directly\\n    if (originalFn.apply) {\\n      return originalFn.apply(/** @type {?} */ (this), arguments);\\n    } else {\\n      var callback = fn;\\n      if (arguments.length > 2) {\\n        var args = Array.prototype.slice.call(arguments, 2);\\n        callback = function() {\\n          'use strict';\\n          fn.apply(/** @type {?} */ (this), args);\\n        };\\n      }\\n      return originalFn(callback, time);\\n    }\\n  };\\n  win[fnName][this.getFunctionIndex_(false)] = originalFn;\\n};\\n\\n\\n/**\\n * Set whether to wrap errors that occur in protected functions in a\\n * goog.debug.ErrorHandler.ProtectedFunctionError.\\n * @param {boolean} wrapErrors Whether to wrap errors.\\n */\\ngoog.debug.ErrorHandler.prototype.setWrapErrors = function(wrapErrors) {\\n  'use strict';\\n  this.wrapErrors_ = wrapErrors;\\n};\\n\\n\\n/**\\n * Set whether to add a prefix to all error messages that occur in protected\\n * functions.\\n * @param {boolean} prefixErrorMessages Whether to add a prefix to error\\n *     messages.\\n */\\ngoog.debug.ErrorHandler.prototype.setPrefixErrorMessages = function(\\n    prefixErrorMessages) {\\n  'use strict';\\n  this.prefixErrorMessages_ = prefixErrorMessages;\\n};\\n\\n\\n/** @override */\\ngoog.debug.ErrorHandler.prototype.disposeInternal = function() {\\n  'use strict';\\n  // Try to unwrap window.setTimeout and window.setInterval.\\n  var win = goog.global['window'];\\n  win.setTimeout = this.unwrap(win.setTimeout);\\n  win.setInterval = this.unwrap(win.setInterval);\\n\\n  goog.debug.ErrorHandler.base(this, 'disposeInternal');\\n};\\n\\n\\n\\n/**\\n * Error thrown to the caller of a protected entry point if the entry point\\n * throws an error.\\n * @param {*} cause The error thrown by the entry point.\\n * @constructor\\n * @extends {goog.debug.Error}\\n * @final\\n */\\ngoog.debug.ErrorHandler.ProtectedFunctionError = function(cause) {\\n  'use strict';\\n  /** @suppress {missingProperties} message may not be defined. */\\n  var message = goog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX +\\n      (cause && cause.message ? String(cause.message) : String(cause));\\n  goog.debug.ErrorHandler.ProtectedFunctionError.base(\\n      this, 'constructor', message, /** @type {?} */ (cause));\\n\\n  /** @suppress {missingProperties} stack may not be defined. */\\n  var stack = cause && cause.stack;\\n  if (stack && typeof stack === 'string') {\\n    this.stack = /** @type {string} */ (stack);\\n  }\\n};\\ngoog.inherits(goog.debug.ErrorHandler.ProtectedFunctionError, goog.debug.Error);\\n\\n\\n/**\\n * Text to prefix the message with.\\n * @type {string}\\n */\\ngoog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX =\\n    'Error in protected function: ';\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"debug\",\"ErrorHandler\",\"goog.debug.ErrorHandler\",\"handler\",\"base\",\"errorHandlerFn_\",\"wrapErrors_\",\"prefixErrorMessages_\",\"inherits\",\"Disposable\",\"prototype\",\"wrap\",\"goog.debug.ErrorHandler.prototype.wrap\",\"fn\",\"protectEntryPoint\",\"asserts\",\"assertFunction\",\"unwrap\",\"goog.debug.ErrorHandler.prototype.unwrap\",\"getFunctionIndex_\",\"goog.debug.ErrorHandler.prototype.getFunctionIndex_\",\"wrapper\",\"getUid\",\"goog.debug.ErrorHandler.prototype.protectEntryPoint\",\"protectedFnName\",\"getProtectedFunction\",\"goog.debug.ErrorHandler.prototype.getProtectedFunction\",\"that\",\"googDebugErrorHandlerProtectedFunction\",\"self\",\"isDisposed\",\"apply\",\"arguments\",\"e\",\"handleError_\",\"goog.debug.ErrorHandler.prototype.handleError_\",\"MESSAGE_PREFIX\",\"ProtectedFunctionError\",\"message\",\"indexOf\",\"DEBUG\",\"stack\",\"Error\",\"captureStackTrace\",\"global\",\"protectWindowSetTimeout\",\"goog.debug.ErrorHandler.prototype.protectWindowSetTimeout\",\"protectWindowFunctionsHelper_\",\"protectWindowSetInterval\",\"goog.debug.ErrorHandler.prototype.protectWindowSetInterval\",\"catchUnhandledRejections\",\"goog.debug.ErrorHandler.prototype.catchUnhandledRejections\",\"win\",\"onunhandledrejection\",\"event\",\"win.onunhandledrejection\",\"reason\",\"protectWindowRequestAnimationFrame\",\"goog.debug.ErrorHandler.prototype.protectWindowRequestAnimationFrame\",\"fnNames\",\"i\",\"length\",\"fnName\",\"goog.debug.ErrorHandler.prototype.protectWindowFunctionsHelper_\",\"originalFn\",\"time\",\"partial\",\"globalEval\",\"callback\",\"args\",\"Array\",\"slice\",\"call\",\"setWrapErrors\",\"goog.debug.ErrorHandler.prototype.setWrapErrors\",\"wrapErrors\",\"setPrefixErrorMessages\",\"goog.debug.ErrorHandler.prototype.setPrefixErrorMessages\",\"prefixErrorMessages\",\"disposeInternal\",\"goog.debug.ErrorHandler.prototype.disposeInternal\",\"setTimeout\",\"setInterval\",\"goog.debug.ErrorHandler.ProtectedFunctionError\",\"cause\",\"String\"]\n}\n"]