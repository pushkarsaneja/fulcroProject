goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38329 = arguments.length;
switch (G__38329) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38330 = (function (f,blockable,meta38331){
this.f = f;
this.blockable = blockable;
this.meta38331 = meta38331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38332,meta38331__$1){
var self__ = this;
var _38332__$1 = this;
return (new cljs.core.async.t_cljs$core$async38330(self__.f,self__.blockable,meta38331__$1));
}));

(cljs.core.async.t_cljs$core$async38330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38332){
var self__ = this;
var _38332__$1 = this;
return self__.meta38331;
}));

(cljs.core.async.t_cljs$core$async38330.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38330.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async38330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async38330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38331","meta38331",-434924255,null)], null);
}));

(cljs.core.async.t_cljs$core$async38330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38330");

(cljs.core.async.t_cljs$core$async38330.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38330.
 */
cljs.core.async.__GT_t_cljs$core$async38330 = (function cljs$core$async$__GT_t_cljs$core$async38330(f__$1,blockable__$1,meta38331){
return (new cljs.core.async.t_cljs$core$async38330(f__$1,blockable__$1,meta38331));
});

}

return (new cljs.core.async.t_cljs$core$async38330(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38343 = arguments.length;
switch (G__38343) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38345 = arguments.length;
switch (G__38345) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__38350 = arguments.length;
switch (G__38350) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_40041 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40041) : fn1.call(null,val_40041));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40041) : fn1.call(null,val_40041));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38358 = arguments.length;
switch (G__38358) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___40043 = n;
var x_40044 = (0);
while(true){
if((x_40044 < n__5633__auto___40043)){
(a[x_40044] = x_40044);

var G__40045 = (x_40044 + (1));
x_40044 = G__40045;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38362 = (function (flag,meta38363){
this.flag = flag;
this.meta38363 = meta38363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38364,meta38363__$1){
var self__ = this;
var _38364__$1 = this;
return (new cljs.core.async.t_cljs$core$async38362(self__.flag,meta38363__$1));
}));

(cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38364){
var self__ = this;
var _38364__$1 = this;
return self__.meta38363;
}));

(cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async38362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38363","meta38363",1086031182,null)], null);
}));

(cljs.core.async.t_cljs$core$async38362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38362");

(cljs.core.async.t_cljs$core$async38362.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38362.
 */
cljs.core.async.__GT_t_cljs$core$async38362 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38362(flag__$1,meta38363){
return (new cljs.core.async.t_cljs$core$async38362(flag__$1,meta38363));
});

}

return (new cljs.core.async.t_cljs$core$async38362(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38365 = (function (flag,cb,meta38366){
this.flag = flag;
this.cb = cb;
this.meta38366 = meta38366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38367,meta38366__$1){
var self__ = this;
var _38367__$1 = this;
return (new cljs.core.async.t_cljs$core$async38365(self__.flag,self__.cb,meta38366__$1));
}));

(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38367){
var self__ = this;
var _38367__$1 = this;
return self__.meta38366;
}));

(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async38365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38366","meta38366",525666910,null)], null);
}));

(cljs.core.async.t_cljs$core$async38365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38365");

(cljs.core.async.t_cljs$core$async38365.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38365.
 */
cljs.core.async.__GT_t_cljs$core$async38365 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38365(flag__$1,cb__$1,meta38366){
return (new cljs.core.async.t_cljs$core$async38365(flag__$1,cb__$1,meta38366));
});

}

return (new cljs.core.async.t_cljs$core$async38365(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38372_SHARP_){
var G__38374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38372_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38374) : fret.call(null,G__38374));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38373_SHARP_){
var G__38375 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38373_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38375) : fret.call(null,G__38375));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40047 = (i + (1));
i = G__40047;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40049 = arguments.length;
var i__5767__auto___40050 = (0);
while(true){
if((i__5767__auto___40050 < len__5766__auto___40049)){
args__5772__auto__.push((arguments[i__5767__auto___40050]));

var G__40051 = (i__5767__auto___40050 + (1));
i__5767__auto___40050 = G__40051;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38380){
var map__38381 = p__38380;
var map__38381__$1 = cljs.core.__destructure_map(map__38381);
var opts = map__38381__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38377){
var G__38378 = cljs.core.first(seq38377);
var seq38377__$1 = cljs.core.next(seq38377);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38378,seq38377__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__38387 = arguments.length;
switch (G__38387) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38271__auto___40053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_38423){
var state_val_38424 = (state_38423[(1)]);
if((state_val_38424 === (7))){
var inst_38419 = (state_38423[(2)]);
var state_38423__$1 = state_38423;
var statearr_38426_40054 = state_38423__$1;
(statearr_38426_40054[(2)] = inst_38419);

(statearr_38426_40054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38424 === (1))){
var state_38423__$1 = state_38423;
var statearr_38427_40055 = state_38423__$1;
(statearr_38427_40055[(2)] = null);

(statearr_38427_40055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38424 === (4))){
var inst_38398 = (state_38423[(7)]);
var inst_38398__$1 = (state_38423[(2)]);
var inst_38399 = (inst_38398__$1 == null);
var state_38423__$1 = (function (){var statearr_38428 = state_38423;
(statearr_38428[(7)] = inst_38398__$1);

return statearr_38428;
})();
if(cljs.core.truth_(inst_38399)){
var statearr_38429_40056 = state_38423__$1;
(statearr_38429_40056[(1)] = (5));

} else {
var statearr_38430_40057 = state_38423__$1;
(statearr_38430_40057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38424 === (13))){
var state_38423__$1 = state_38423;
var statearr_38431_40058 = state_38423__$1;
(statearr_38431_40058[(2)] = null);

(statearr_38431_40058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38424 === (6))){
var inst_38398 = (state_38423[(7)]);
var state_38423__$1 = state_38423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38423__$1,(11),to,inst_38398);
} else {
if((state_val_38424 === (3))){
var inst_38421 = (state_38423[(2)]);
var state_38423__$1 = state_38423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38423__$1,inst_38421);
} else {
if((state_val_38424 === (12))){
var state_38423__$1 = state_38423;
var statearr_38432_40059 = state_38423__$1;
(statearr_38432_40059[(2)] = null);

(statearr_38432_40059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38424 === (2))){
var state_38423__$1 = state_38423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38423__$1,(4),from);
} else {
if((state_val_38424 === (11))){
var inst_38412 = (state_38423[(2)]);
var state_38423__$1 = state_38423;
if(cljs.core.truth_(inst_38412)){
var statearr_38433_40060 = state_38423__$1;
(statearr_38433_40060[(1)] = (12));

} else {
var statearr_38434_40061 = state_38423__$1;
(statearr_38434_40061[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38424 === (9))){
var state_38423__$1 = state_38423;
var statearr_38435_40062 = state_38423__$1;
(statearr_38435_40062[(2)] = null);

(statearr_38435_40062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38424 === (5))){
var state_38423__$1 = state_38423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38437_40063 = state_38423__$1;
(statearr_38437_40063[(1)] = (8));

} else {
var statearr_38438_40064 = state_38423__$1;
(statearr_38438_40064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38424 === (14))){
var inst_38417 = (state_38423[(2)]);
var state_38423__$1 = state_38423;
var statearr_38440_40065 = state_38423__$1;
(statearr_38440_40065[(2)] = inst_38417);

(statearr_38440_40065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38424 === (10))){
var inst_38405 = (state_38423[(2)]);
var state_38423__$1 = state_38423;
var statearr_38441_40066 = state_38423__$1;
(statearr_38441_40066[(2)] = inst_38405);

(statearr_38441_40066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38424 === (8))){
var inst_38402 = cljs.core.async.close_BANG_(to);
var state_38423__$1 = state_38423;
var statearr_38443_40067 = state_38423__$1;
(statearr_38443_40067[(2)] = inst_38402);

(statearr_38443_40067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37994__auto__ = null;
var cljs$core$async$state_machine__37994__auto____0 = (function (){
var statearr_38445 = [null,null,null,null,null,null,null,null];
(statearr_38445[(0)] = cljs$core$async$state_machine__37994__auto__);

(statearr_38445[(1)] = (1));

return statearr_38445;
});
var cljs$core$async$state_machine__37994__auto____1 = (function (state_38423){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_38423);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e38446){var ex__37997__auto__ = e38446;
var statearr_38447_40070 = state_38423;
(statearr_38447_40070[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_38423[(4)]))){
var statearr_38448_40072 = state_38423;
(statearr_38448_40072[(1)] = cljs.core.first((state_38423[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40073 = state_38423;
state_38423 = G__40073;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$state_machine__37994__auto__ = function(state_38423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37994__auto____1.call(this,state_38423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37994__auto____0;
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37994__auto____1;
return cljs$core$async$state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_38449 = f__38272__auto__();
(statearr_38449[(6)] = c__38271__auto___40053);

return statearr_38449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__38453){
var vec__38454 = p__38453;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38454,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38454,(1),null);
var job = vec__38454;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38271__auto___40074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_38461){
var state_val_38462 = (state_38461[(1)]);
if((state_val_38462 === (1))){
var state_38461__$1 = state_38461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38461__$1,(2),res,v);
} else {
if((state_val_38462 === (2))){
var inst_38458 = (state_38461[(2)]);
var inst_38459 = cljs.core.async.close_BANG_(res);
var state_38461__$1 = (function (){var statearr_38468 = state_38461;
(statearr_38468[(7)] = inst_38458);

return statearr_38468;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38461__$1,inst_38459);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0 = (function (){
var statearr_38469 = [null,null,null,null,null,null,null,null];
(statearr_38469[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__);

(statearr_38469[(1)] = (1));

return statearr_38469;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1 = (function (state_38461){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_38461);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e38470){var ex__37997__auto__ = e38470;
var statearr_38471_40075 = state_38461;
(statearr_38471_40075[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_38461[(4)]))){
var statearr_38472_40076 = state_38461;
(statearr_38472_40076[(1)] = cljs.core.first((state_38461[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40077 = state_38461;
state_38461 = G__40077;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__ = function(state_38461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1.call(this,state_38461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_38473 = f__38272__auto__();
(statearr_38473[(6)] = c__38271__auto___40074);

return statearr_38473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__38474){
var vec__38475 = p__38474;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38475,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38475,(1),null);
var job = vec__38475;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___40078 = n;
var __40079 = (0);
while(true){
if((__40079 < n__5633__auto___40078)){
var G__38478_40080 = type;
var G__38478_40081__$1 = (((G__38478_40080 instanceof cljs.core.Keyword))?G__38478_40080.fqn:null);
switch (G__38478_40081__$1) {
case "compute":
var c__38271__auto___40083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40079,c__38271__auto___40083,G__38478_40080,G__38478_40081__$1,n__5633__auto___40078,jobs,results,process__$1,async){
return (function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = ((function (__40079,c__38271__auto___40083,G__38478_40080,G__38478_40081__$1,n__5633__auto___40078,jobs,results,process__$1,async){
return (function (state_38491){
var state_val_38492 = (state_38491[(1)]);
if((state_val_38492 === (1))){
var state_38491__$1 = state_38491;
var statearr_38497_40084 = state_38491__$1;
(statearr_38497_40084[(2)] = null);

(statearr_38497_40084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38492 === (2))){
var state_38491__$1 = state_38491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38491__$1,(4),jobs);
} else {
if((state_val_38492 === (3))){
var inst_38489 = (state_38491[(2)]);
var state_38491__$1 = state_38491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38491__$1,inst_38489);
} else {
if((state_val_38492 === (4))){
var inst_38481 = (state_38491[(2)]);
var inst_38482 = process__$1(inst_38481);
var state_38491__$1 = state_38491;
if(cljs.core.truth_(inst_38482)){
var statearr_38499_40085 = state_38491__$1;
(statearr_38499_40085[(1)] = (5));

} else {
var statearr_38500_40086 = state_38491__$1;
(statearr_38500_40086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38492 === (5))){
var state_38491__$1 = state_38491;
var statearr_38501_40087 = state_38491__$1;
(statearr_38501_40087[(2)] = null);

(statearr_38501_40087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38492 === (6))){
var state_38491__$1 = state_38491;
var statearr_38505_40088 = state_38491__$1;
(statearr_38505_40088[(2)] = null);

(statearr_38505_40088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38492 === (7))){
var inst_38487 = (state_38491[(2)]);
var state_38491__$1 = state_38491;
var statearr_38507_40089 = state_38491__$1;
(statearr_38507_40089[(2)] = inst_38487);

(statearr_38507_40089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40079,c__38271__auto___40083,G__38478_40080,G__38478_40081__$1,n__5633__auto___40078,jobs,results,process__$1,async))
;
return ((function (__40079,switch__37993__auto__,c__38271__auto___40083,G__38478_40080,G__38478_40081__$1,n__5633__auto___40078,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0 = (function (){
var statearr_38508 = [null,null,null,null,null,null,null];
(statearr_38508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__);

(statearr_38508[(1)] = (1));

return statearr_38508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1 = (function (state_38491){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_38491);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e38509){var ex__37997__auto__ = e38509;
var statearr_38510_40090 = state_38491;
(statearr_38510_40090[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_38491[(4)]))){
var statearr_38511_40091 = state_38491;
(statearr_38511_40091[(1)] = cljs.core.first((state_38491[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40092 = state_38491;
state_38491 = G__40092;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__ = function(state_38491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1.call(this,state_38491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__;
})()
;})(__40079,switch__37993__auto__,c__38271__auto___40083,G__38478_40080,G__38478_40081__$1,n__5633__auto___40078,jobs,results,process__$1,async))
})();
var state__38273__auto__ = (function (){var statearr_38512 = f__38272__auto__();
(statearr_38512[(6)] = c__38271__auto___40083);

return statearr_38512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
});})(__40079,c__38271__auto___40083,G__38478_40080,G__38478_40081__$1,n__5633__auto___40078,jobs,results,process__$1,async))
);


break;
case "async":
var c__38271__auto___40093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40079,c__38271__auto___40093,G__38478_40080,G__38478_40081__$1,n__5633__auto___40078,jobs,results,process__$1,async){
return (function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = ((function (__40079,c__38271__auto___40093,G__38478_40080,G__38478_40081__$1,n__5633__auto___40078,jobs,results,process__$1,async){
return (function (state_38525){
var state_val_38526 = (state_38525[(1)]);
if((state_val_38526 === (1))){
var state_38525__$1 = state_38525;
var statearr_38527_40094 = state_38525__$1;
(statearr_38527_40094[(2)] = null);

(statearr_38527_40094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38526 === (2))){
var state_38525__$1 = state_38525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38525__$1,(4),jobs);
} else {
if((state_val_38526 === (3))){
var inst_38523 = (state_38525[(2)]);
var state_38525__$1 = state_38525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38525__$1,inst_38523);
} else {
if((state_val_38526 === (4))){
var inst_38515 = (state_38525[(2)]);
var inst_38516 = async(inst_38515);
var state_38525__$1 = state_38525;
if(cljs.core.truth_(inst_38516)){
var statearr_38528_40095 = state_38525__$1;
(statearr_38528_40095[(1)] = (5));

} else {
var statearr_38529_40096 = state_38525__$1;
(statearr_38529_40096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38526 === (5))){
var state_38525__$1 = state_38525;
var statearr_38530_40097 = state_38525__$1;
(statearr_38530_40097[(2)] = null);

(statearr_38530_40097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38526 === (6))){
var state_38525__$1 = state_38525;
var statearr_38531_40098 = state_38525__$1;
(statearr_38531_40098[(2)] = null);

(statearr_38531_40098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38526 === (7))){
var inst_38521 = (state_38525[(2)]);
var state_38525__$1 = state_38525;
var statearr_38532_40099 = state_38525__$1;
(statearr_38532_40099[(2)] = inst_38521);

(statearr_38532_40099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40079,c__38271__auto___40093,G__38478_40080,G__38478_40081__$1,n__5633__auto___40078,jobs,results,process__$1,async))
;
return ((function (__40079,switch__37993__auto__,c__38271__auto___40093,G__38478_40080,G__38478_40081__$1,n__5633__auto___40078,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0 = (function (){
var statearr_38535 = [null,null,null,null,null,null,null];
(statearr_38535[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__);

(statearr_38535[(1)] = (1));

return statearr_38535;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1 = (function (state_38525){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_38525);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e38536){var ex__37997__auto__ = e38536;
var statearr_38537_40100 = state_38525;
(statearr_38537_40100[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_38525[(4)]))){
var statearr_38538_40101 = state_38525;
(statearr_38538_40101[(1)] = cljs.core.first((state_38525[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40102 = state_38525;
state_38525 = G__40102;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__ = function(state_38525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1.call(this,state_38525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__;
})()
;})(__40079,switch__37993__auto__,c__38271__auto___40093,G__38478_40080,G__38478_40081__$1,n__5633__auto___40078,jobs,results,process__$1,async))
})();
var state__38273__auto__ = (function (){var statearr_38539 = f__38272__auto__();
(statearr_38539[(6)] = c__38271__auto___40093);

return statearr_38539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
});})(__40079,c__38271__auto___40093,G__38478_40080,G__38478_40081__$1,n__5633__auto___40078,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38478_40081__$1)].join('')));

}

var G__40103 = (__40079 + (1));
__40079 = G__40103;
continue;
} else {
}
break;
}

var c__38271__auto___40104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_38561){
var state_val_38562 = (state_38561[(1)]);
if((state_val_38562 === (7))){
var inst_38557 = (state_38561[(2)]);
var state_38561__$1 = state_38561;
var statearr_38563_40105 = state_38561__$1;
(statearr_38563_40105[(2)] = inst_38557);

(statearr_38563_40105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38562 === (1))){
var state_38561__$1 = state_38561;
var statearr_38564_40106 = state_38561__$1;
(statearr_38564_40106[(2)] = null);

(statearr_38564_40106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38562 === (4))){
var inst_38542 = (state_38561[(7)]);
var inst_38542__$1 = (state_38561[(2)]);
var inst_38543 = (inst_38542__$1 == null);
var state_38561__$1 = (function (){var statearr_38567 = state_38561;
(statearr_38567[(7)] = inst_38542__$1);

return statearr_38567;
})();
if(cljs.core.truth_(inst_38543)){
var statearr_38568_40107 = state_38561__$1;
(statearr_38568_40107[(1)] = (5));

} else {
var statearr_38569_40108 = state_38561__$1;
(statearr_38569_40108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38562 === (6))){
var inst_38547 = (state_38561[(8)]);
var inst_38542 = (state_38561[(7)]);
var inst_38547__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_38548 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38549 = [inst_38542,inst_38547__$1];
var inst_38550 = (new cljs.core.PersistentVector(null,2,(5),inst_38548,inst_38549,null));
var state_38561__$1 = (function (){var statearr_38570 = state_38561;
(statearr_38570[(8)] = inst_38547__$1);

return statearr_38570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38561__$1,(8),jobs,inst_38550);
} else {
if((state_val_38562 === (3))){
var inst_38559 = (state_38561[(2)]);
var state_38561__$1 = state_38561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38561__$1,inst_38559);
} else {
if((state_val_38562 === (2))){
var state_38561__$1 = state_38561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38561__$1,(4),from);
} else {
if((state_val_38562 === (9))){
var inst_38554 = (state_38561[(2)]);
var state_38561__$1 = (function (){var statearr_38575 = state_38561;
(statearr_38575[(9)] = inst_38554);

return statearr_38575;
})();
var statearr_38576_40109 = state_38561__$1;
(statearr_38576_40109[(2)] = null);

(statearr_38576_40109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38562 === (5))){
var inst_38545 = cljs.core.async.close_BANG_(jobs);
var state_38561__$1 = state_38561;
var statearr_38577_40110 = state_38561__$1;
(statearr_38577_40110[(2)] = inst_38545);

(statearr_38577_40110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38562 === (8))){
var inst_38547 = (state_38561[(8)]);
var inst_38552 = (state_38561[(2)]);
var state_38561__$1 = (function (){var statearr_38579 = state_38561;
(statearr_38579[(10)] = inst_38552);

return statearr_38579;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38561__$1,(9),results,inst_38547);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0 = (function (){
var statearr_38580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38580[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__);

(statearr_38580[(1)] = (1));

return statearr_38580;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1 = (function (state_38561){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_38561);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e38581){var ex__37997__auto__ = e38581;
var statearr_38582_40111 = state_38561;
(statearr_38582_40111[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_38561[(4)]))){
var statearr_38583_40112 = state_38561;
(statearr_38583_40112[(1)] = cljs.core.first((state_38561[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40114 = state_38561;
state_38561 = G__40114;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__ = function(state_38561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1.call(this,state_38561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_38584 = f__38272__auto__();
(statearr_38584[(6)] = c__38271__auto___40104);

return statearr_38584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));


var c__38271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_38622){
var state_val_38623 = (state_38622[(1)]);
if((state_val_38623 === (7))){
var inst_38618 = (state_38622[(2)]);
var state_38622__$1 = state_38622;
var statearr_38624_40115 = state_38622__$1;
(statearr_38624_40115[(2)] = inst_38618);

(statearr_38624_40115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (20))){
var state_38622__$1 = state_38622;
var statearr_38625_40116 = state_38622__$1;
(statearr_38625_40116[(2)] = null);

(statearr_38625_40116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (1))){
var state_38622__$1 = state_38622;
var statearr_38626_40117 = state_38622__$1;
(statearr_38626_40117[(2)] = null);

(statearr_38626_40117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (4))){
var inst_38587 = (state_38622[(7)]);
var inst_38587__$1 = (state_38622[(2)]);
var inst_38588 = (inst_38587__$1 == null);
var state_38622__$1 = (function (){var statearr_38627 = state_38622;
(statearr_38627[(7)] = inst_38587__$1);

return statearr_38627;
})();
if(cljs.core.truth_(inst_38588)){
var statearr_38628_40118 = state_38622__$1;
(statearr_38628_40118[(1)] = (5));

} else {
var statearr_38629_40119 = state_38622__$1;
(statearr_38629_40119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (15))){
var inst_38600 = (state_38622[(8)]);
var state_38622__$1 = state_38622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38622__$1,(18),to,inst_38600);
} else {
if((state_val_38623 === (21))){
var inst_38613 = (state_38622[(2)]);
var state_38622__$1 = state_38622;
var statearr_38630_40120 = state_38622__$1;
(statearr_38630_40120[(2)] = inst_38613);

(statearr_38630_40120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (13))){
var inst_38615 = (state_38622[(2)]);
var state_38622__$1 = (function (){var statearr_38631 = state_38622;
(statearr_38631[(9)] = inst_38615);

return statearr_38631;
})();
var statearr_38632_40121 = state_38622__$1;
(statearr_38632_40121[(2)] = null);

(statearr_38632_40121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (6))){
var inst_38587 = (state_38622[(7)]);
var state_38622__$1 = state_38622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38622__$1,(11),inst_38587);
} else {
if((state_val_38623 === (17))){
var inst_38608 = (state_38622[(2)]);
var state_38622__$1 = state_38622;
if(cljs.core.truth_(inst_38608)){
var statearr_38633_40122 = state_38622__$1;
(statearr_38633_40122[(1)] = (19));

} else {
var statearr_38634_40123 = state_38622__$1;
(statearr_38634_40123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (3))){
var inst_38620 = (state_38622[(2)]);
var state_38622__$1 = state_38622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38622__$1,inst_38620);
} else {
if((state_val_38623 === (12))){
var inst_38597 = (state_38622[(10)]);
var state_38622__$1 = state_38622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38622__$1,(14),inst_38597);
} else {
if((state_val_38623 === (2))){
var state_38622__$1 = state_38622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38622__$1,(4),results);
} else {
if((state_val_38623 === (19))){
var state_38622__$1 = state_38622;
var statearr_38635_40124 = state_38622__$1;
(statearr_38635_40124[(2)] = null);

(statearr_38635_40124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (11))){
var inst_38597 = (state_38622[(2)]);
var state_38622__$1 = (function (){var statearr_38636 = state_38622;
(statearr_38636[(10)] = inst_38597);

return statearr_38636;
})();
var statearr_38637_40125 = state_38622__$1;
(statearr_38637_40125[(2)] = null);

(statearr_38637_40125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (9))){
var state_38622__$1 = state_38622;
var statearr_38638_40126 = state_38622__$1;
(statearr_38638_40126[(2)] = null);

(statearr_38638_40126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (5))){
var state_38622__$1 = state_38622;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38639_40127 = state_38622__$1;
(statearr_38639_40127[(1)] = (8));

} else {
var statearr_38640_40128 = state_38622__$1;
(statearr_38640_40128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (14))){
var inst_38600 = (state_38622[(8)]);
var inst_38602 = (state_38622[(11)]);
var inst_38600__$1 = (state_38622[(2)]);
var inst_38601 = (inst_38600__$1 == null);
var inst_38602__$1 = cljs.core.not(inst_38601);
var state_38622__$1 = (function (){var statearr_38641 = state_38622;
(statearr_38641[(8)] = inst_38600__$1);

(statearr_38641[(11)] = inst_38602__$1);

return statearr_38641;
})();
if(inst_38602__$1){
var statearr_38642_40129 = state_38622__$1;
(statearr_38642_40129[(1)] = (15));

} else {
var statearr_38643_40130 = state_38622__$1;
(statearr_38643_40130[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (16))){
var inst_38602 = (state_38622[(11)]);
var state_38622__$1 = state_38622;
var statearr_38644_40131 = state_38622__$1;
(statearr_38644_40131[(2)] = inst_38602);

(statearr_38644_40131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (10))){
var inst_38594 = (state_38622[(2)]);
var state_38622__$1 = state_38622;
var statearr_38645_40132 = state_38622__$1;
(statearr_38645_40132[(2)] = inst_38594);

(statearr_38645_40132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (18))){
var inst_38605 = (state_38622[(2)]);
var state_38622__$1 = state_38622;
var statearr_38646_40133 = state_38622__$1;
(statearr_38646_40133[(2)] = inst_38605);

(statearr_38646_40133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38623 === (8))){
var inst_38591 = cljs.core.async.close_BANG_(to);
var state_38622__$1 = state_38622;
var statearr_38647_40134 = state_38622__$1;
(statearr_38647_40134[(2)] = inst_38591);

(statearr_38647_40134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0 = (function (){
var statearr_38648 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38648[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__);

(statearr_38648[(1)] = (1));

return statearr_38648;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1 = (function (state_38622){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_38622);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e38649){var ex__37997__auto__ = e38649;
var statearr_38650_40135 = state_38622;
(statearr_38650_40135[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_38622[(4)]))){
var statearr_38651_40136 = state_38622;
(statearr_38651_40136[(1)] = cljs.core.first((state_38622[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40137 = state_38622;
state_38622 = G__40137;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__ = function(state_38622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1.call(this,state_38622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_38652 = f__38272__auto__();
(statearr_38652[(6)] = c__38271__auto__);

return statearr_38652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));

return c__38271__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38654 = arguments.length;
switch (G__38654) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38656 = arguments.length;
switch (G__38656) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38658 = arguments.length;
switch (G__38658) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__38271__auto___40141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_38684){
var state_val_38685 = (state_38684[(1)]);
if((state_val_38685 === (7))){
var inst_38680 = (state_38684[(2)]);
var state_38684__$1 = state_38684;
var statearr_38686_40142 = state_38684__$1;
(statearr_38686_40142[(2)] = inst_38680);

(statearr_38686_40142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (1))){
var state_38684__$1 = state_38684;
var statearr_38687_40143 = state_38684__$1;
(statearr_38687_40143[(2)] = null);

(statearr_38687_40143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (4))){
var inst_38661 = (state_38684[(7)]);
var inst_38661__$1 = (state_38684[(2)]);
var inst_38662 = (inst_38661__$1 == null);
var state_38684__$1 = (function (){var statearr_38688 = state_38684;
(statearr_38688[(7)] = inst_38661__$1);

return statearr_38688;
})();
if(cljs.core.truth_(inst_38662)){
var statearr_38689_40144 = state_38684__$1;
(statearr_38689_40144[(1)] = (5));

} else {
var statearr_38690_40145 = state_38684__$1;
(statearr_38690_40145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (13))){
var state_38684__$1 = state_38684;
var statearr_38691_40146 = state_38684__$1;
(statearr_38691_40146[(2)] = null);

(statearr_38691_40146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (6))){
var inst_38661 = (state_38684[(7)]);
var inst_38667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38661) : p.call(null,inst_38661));
var state_38684__$1 = state_38684;
if(cljs.core.truth_(inst_38667)){
var statearr_38692_40147 = state_38684__$1;
(statearr_38692_40147[(1)] = (9));

} else {
var statearr_38693_40148 = state_38684__$1;
(statearr_38693_40148[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (3))){
var inst_38682 = (state_38684[(2)]);
var state_38684__$1 = state_38684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38684__$1,inst_38682);
} else {
if((state_val_38685 === (12))){
var state_38684__$1 = state_38684;
var statearr_38694_40149 = state_38684__$1;
(statearr_38694_40149[(2)] = null);

(statearr_38694_40149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (2))){
var state_38684__$1 = state_38684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38684__$1,(4),ch);
} else {
if((state_val_38685 === (11))){
var inst_38661 = (state_38684[(7)]);
var inst_38671 = (state_38684[(2)]);
var state_38684__$1 = state_38684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38684__$1,(8),inst_38671,inst_38661);
} else {
if((state_val_38685 === (9))){
var state_38684__$1 = state_38684;
var statearr_38695_40150 = state_38684__$1;
(statearr_38695_40150[(2)] = tc);

(statearr_38695_40150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (5))){
var inst_38664 = cljs.core.async.close_BANG_(tc);
var inst_38665 = cljs.core.async.close_BANG_(fc);
var state_38684__$1 = (function (){var statearr_38696 = state_38684;
(statearr_38696[(8)] = inst_38664);

return statearr_38696;
})();
var statearr_38697_40151 = state_38684__$1;
(statearr_38697_40151[(2)] = inst_38665);

(statearr_38697_40151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (14))){
var inst_38678 = (state_38684[(2)]);
var state_38684__$1 = state_38684;
var statearr_38698_40152 = state_38684__$1;
(statearr_38698_40152[(2)] = inst_38678);

(statearr_38698_40152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (10))){
var state_38684__$1 = state_38684;
var statearr_38699_40153 = state_38684__$1;
(statearr_38699_40153[(2)] = fc);

(statearr_38699_40153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38685 === (8))){
var inst_38673 = (state_38684[(2)]);
var state_38684__$1 = state_38684;
if(cljs.core.truth_(inst_38673)){
var statearr_38700_40154 = state_38684__$1;
(statearr_38700_40154[(1)] = (12));

} else {
var statearr_38701_40155 = state_38684__$1;
(statearr_38701_40155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37994__auto__ = null;
var cljs$core$async$state_machine__37994__auto____0 = (function (){
var statearr_38702 = [null,null,null,null,null,null,null,null,null];
(statearr_38702[(0)] = cljs$core$async$state_machine__37994__auto__);

(statearr_38702[(1)] = (1));

return statearr_38702;
});
var cljs$core$async$state_machine__37994__auto____1 = (function (state_38684){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_38684);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e38703){var ex__37997__auto__ = e38703;
var statearr_38704_40156 = state_38684;
(statearr_38704_40156[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_38684[(4)]))){
var statearr_38705_40157 = state_38684;
(statearr_38705_40157[(1)] = cljs.core.first((state_38684[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40158 = state_38684;
state_38684 = G__40158;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$state_machine__37994__auto__ = function(state_38684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37994__auto____1.call(this,state_38684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37994__auto____0;
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37994__auto____1;
return cljs$core$async$state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_38706 = f__38272__auto__();
(statearr_38706[(6)] = c__38271__auto___40141);

return statearr_38706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_38728){
var state_val_38729 = (state_38728[(1)]);
if((state_val_38729 === (7))){
var inst_38724 = (state_38728[(2)]);
var state_38728__$1 = state_38728;
var statearr_38730_40159 = state_38728__$1;
(statearr_38730_40159[(2)] = inst_38724);

(statearr_38730_40159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (1))){
var inst_38707 = init;
var inst_38708 = inst_38707;
var state_38728__$1 = (function (){var statearr_38731 = state_38728;
(statearr_38731[(7)] = inst_38708);

return statearr_38731;
})();
var statearr_38732_40160 = state_38728__$1;
(statearr_38732_40160[(2)] = null);

(statearr_38732_40160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (4))){
var inst_38711 = (state_38728[(8)]);
var inst_38711__$1 = (state_38728[(2)]);
var inst_38712 = (inst_38711__$1 == null);
var state_38728__$1 = (function (){var statearr_38733 = state_38728;
(statearr_38733[(8)] = inst_38711__$1);

return statearr_38733;
})();
if(cljs.core.truth_(inst_38712)){
var statearr_38734_40161 = state_38728__$1;
(statearr_38734_40161[(1)] = (5));

} else {
var statearr_38735_40162 = state_38728__$1;
(statearr_38735_40162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (6))){
var inst_38715 = (state_38728[(9)]);
var inst_38708 = (state_38728[(7)]);
var inst_38711 = (state_38728[(8)]);
var inst_38715__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38708,inst_38711) : f.call(null,inst_38708,inst_38711));
var inst_38716 = cljs.core.reduced_QMARK_(inst_38715__$1);
var state_38728__$1 = (function (){var statearr_38736 = state_38728;
(statearr_38736[(9)] = inst_38715__$1);

return statearr_38736;
})();
if(inst_38716){
var statearr_38737_40163 = state_38728__$1;
(statearr_38737_40163[(1)] = (8));

} else {
var statearr_38738_40164 = state_38728__$1;
(statearr_38738_40164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (3))){
var inst_38726 = (state_38728[(2)]);
var state_38728__$1 = state_38728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38728__$1,inst_38726);
} else {
if((state_val_38729 === (2))){
var state_38728__$1 = state_38728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38728__$1,(4),ch);
} else {
if((state_val_38729 === (9))){
var inst_38715 = (state_38728[(9)]);
var inst_38708 = inst_38715;
var state_38728__$1 = (function (){var statearr_38739 = state_38728;
(statearr_38739[(7)] = inst_38708);

return statearr_38739;
})();
var statearr_38740_40166 = state_38728__$1;
(statearr_38740_40166[(2)] = null);

(statearr_38740_40166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (5))){
var inst_38708 = (state_38728[(7)]);
var state_38728__$1 = state_38728;
var statearr_38741_40167 = state_38728__$1;
(statearr_38741_40167[(2)] = inst_38708);

(statearr_38741_40167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (10))){
var inst_38722 = (state_38728[(2)]);
var state_38728__$1 = state_38728;
var statearr_38742_40168 = state_38728__$1;
(statearr_38742_40168[(2)] = inst_38722);

(statearr_38742_40168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (8))){
var inst_38715 = (state_38728[(9)]);
var inst_38718 = cljs.core.deref(inst_38715);
var state_38728__$1 = state_38728;
var statearr_38743_40169 = state_38728__$1;
(statearr_38743_40169[(2)] = inst_38718);

(statearr_38743_40169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__37994__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37994__auto____0 = (function (){
var statearr_38744 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38744[(0)] = cljs$core$async$reduce_$_state_machine__37994__auto__);

(statearr_38744[(1)] = (1));

return statearr_38744;
});
var cljs$core$async$reduce_$_state_machine__37994__auto____1 = (function (state_38728){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_38728);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e38745){var ex__37997__auto__ = e38745;
var statearr_38746_40170 = state_38728;
(statearr_38746_40170[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_38728[(4)]))){
var statearr_38747_40171 = state_38728;
(statearr_38747_40171[(1)] = cljs.core.first((state_38728[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40172 = state_38728;
state_38728 = G__40172;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37994__auto__ = function(state_38728){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37994__auto____1.call(this,state_38728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37994__auto____0;
cljs$core$async$reduce_$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37994__auto____1;
return cljs$core$async$reduce_$_state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_38748 = f__38272__auto__();
(statearr_38748[(6)] = c__38271__auto__);

return statearr_38748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));

return c__38271__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__38271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_38754){
var state_val_38755 = (state_38754[(1)]);
if((state_val_38755 === (1))){
var inst_38749 = cljs.core.async.reduce(f__$1,init,ch);
var state_38754__$1 = state_38754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38754__$1,(2),inst_38749);
} else {
if((state_val_38755 === (2))){
var inst_38751 = (state_38754[(2)]);
var inst_38752 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38751) : f__$1.call(null,inst_38751));
var state_38754__$1 = state_38754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38754__$1,inst_38752);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37994__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37994__auto____0 = (function (){
var statearr_38756 = [null,null,null,null,null,null,null];
(statearr_38756[(0)] = cljs$core$async$transduce_$_state_machine__37994__auto__);

(statearr_38756[(1)] = (1));

return statearr_38756;
});
var cljs$core$async$transduce_$_state_machine__37994__auto____1 = (function (state_38754){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_38754);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e38757){var ex__37997__auto__ = e38757;
var statearr_38758_40173 = state_38754;
(statearr_38758_40173[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_38754[(4)]))){
var statearr_38759_40174 = state_38754;
(statearr_38759_40174[(1)] = cljs.core.first((state_38754[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40175 = state_38754;
state_38754 = G__40175;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37994__auto__ = function(state_38754){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37994__auto____1.call(this,state_38754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37994__auto____0;
cljs$core$async$transduce_$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37994__auto____1;
return cljs$core$async$transduce_$_state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_38760 = f__38272__auto__();
(statearr_38760[(6)] = c__38271__auto__);

return statearr_38760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));

return c__38271__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__38762 = arguments.length;
switch (G__38762) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_38787){
var state_val_38788 = (state_38787[(1)]);
if((state_val_38788 === (7))){
var inst_38769 = (state_38787[(2)]);
var state_38787__$1 = state_38787;
var statearr_38789_40181 = state_38787__$1;
(statearr_38789_40181[(2)] = inst_38769);

(statearr_38789_40181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (1))){
var inst_38763 = cljs.core.seq(coll);
var inst_38764 = inst_38763;
var state_38787__$1 = (function (){var statearr_38790 = state_38787;
(statearr_38790[(7)] = inst_38764);

return statearr_38790;
})();
var statearr_38791_40182 = state_38787__$1;
(statearr_38791_40182[(2)] = null);

(statearr_38791_40182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (4))){
var inst_38764 = (state_38787[(7)]);
var inst_38767 = cljs.core.first(inst_38764);
var state_38787__$1 = state_38787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38787__$1,(7),ch,inst_38767);
} else {
if((state_val_38788 === (13))){
var inst_38781 = (state_38787[(2)]);
var state_38787__$1 = state_38787;
var statearr_38792_40183 = state_38787__$1;
(statearr_38792_40183[(2)] = inst_38781);

(statearr_38792_40183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (6))){
var inst_38772 = (state_38787[(2)]);
var state_38787__$1 = state_38787;
if(cljs.core.truth_(inst_38772)){
var statearr_38793_40184 = state_38787__$1;
(statearr_38793_40184[(1)] = (8));

} else {
var statearr_38794_40185 = state_38787__$1;
(statearr_38794_40185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (3))){
var inst_38785 = (state_38787[(2)]);
var state_38787__$1 = state_38787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38787__$1,inst_38785);
} else {
if((state_val_38788 === (12))){
var state_38787__$1 = state_38787;
var statearr_38795_40186 = state_38787__$1;
(statearr_38795_40186[(2)] = null);

(statearr_38795_40186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (2))){
var inst_38764 = (state_38787[(7)]);
var state_38787__$1 = state_38787;
if(cljs.core.truth_(inst_38764)){
var statearr_38796_40187 = state_38787__$1;
(statearr_38796_40187[(1)] = (4));

} else {
var statearr_38797_40188 = state_38787__$1;
(statearr_38797_40188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (11))){
var inst_38778 = cljs.core.async.close_BANG_(ch);
var state_38787__$1 = state_38787;
var statearr_38798_40189 = state_38787__$1;
(statearr_38798_40189[(2)] = inst_38778);

(statearr_38798_40189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (9))){
var state_38787__$1 = state_38787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38799_40190 = state_38787__$1;
(statearr_38799_40190[(1)] = (11));

} else {
var statearr_38800_40191 = state_38787__$1;
(statearr_38800_40191[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (5))){
var inst_38764 = (state_38787[(7)]);
var state_38787__$1 = state_38787;
var statearr_38801_40192 = state_38787__$1;
(statearr_38801_40192[(2)] = inst_38764);

(statearr_38801_40192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (10))){
var inst_38783 = (state_38787[(2)]);
var state_38787__$1 = state_38787;
var statearr_38802_40193 = state_38787__$1;
(statearr_38802_40193[(2)] = inst_38783);

(statearr_38802_40193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (8))){
var inst_38764 = (state_38787[(7)]);
var inst_38774 = cljs.core.next(inst_38764);
var inst_38764__$1 = inst_38774;
var state_38787__$1 = (function (){var statearr_38803 = state_38787;
(statearr_38803[(7)] = inst_38764__$1);

return statearr_38803;
})();
var statearr_38804_40194 = state_38787__$1;
(statearr_38804_40194[(2)] = null);

(statearr_38804_40194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37994__auto__ = null;
var cljs$core$async$state_machine__37994__auto____0 = (function (){
var statearr_38805 = [null,null,null,null,null,null,null,null];
(statearr_38805[(0)] = cljs$core$async$state_machine__37994__auto__);

(statearr_38805[(1)] = (1));

return statearr_38805;
});
var cljs$core$async$state_machine__37994__auto____1 = (function (state_38787){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_38787);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e38806){var ex__37997__auto__ = e38806;
var statearr_38807_40195 = state_38787;
(statearr_38807_40195[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_38787[(4)]))){
var statearr_38808_40196 = state_38787;
(statearr_38808_40196[(1)] = cljs.core.first((state_38787[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40198 = state_38787;
state_38787 = G__40198;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$state_machine__37994__auto__ = function(state_38787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37994__auto____1.call(this,state_38787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37994__auto____0;
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37994__auto____1;
return cljs$core$async$state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_38809 = f__38272__auto__();
(statearr_38809[(6)] = c__38271__auto__);

return statearr_38809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));

return c__38271__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38811 = arguments.length;
switch (G__38811) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_40200 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_40200(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_40201 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_40201(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_40202 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_40202(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_40203 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_40203(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38818 = (function (ch,cs,meta38819){
this.ch = ch;
this.cs = cs;
this.meta38819 = meta38819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38820,meta38819__$1){
var self__ = this;
var _38820__$1 = this;
return (new cljs.core.async.t_cljs$core$async38818(self__.ch,self__.cs,meta38819__$1));
}));

(cljs.core.async.t_cljs$core$async38818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38820){
var self__ = this;
var _38820__$1 = this;
return self__.meta38819;
}));

(cljs.core.async.t_cljs$core$async38818.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38818.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38818.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38818.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38818.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38819","meta38819",1404175833,null)], null);
}));

(cljs.core.async.t_cljs$core$async38818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38818");

(cljs.core.async.t_cljs$core$async38818.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38818.
 */
cljs.core.async.__GT_t_cljs$core$async38818 = (function cljs$core$async$mult_$___GT_t_cljs$core$async38818(ch__$1,cs__$1,meta38819){
return (new cljs.core.async.t_cljs$core$async38818(ch__$1,cs__$1,meta38819));
});

}

return (new cljs.core.async.t_cljs$core$async38818(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__38271__auto___40206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_38959){
var state_val_38960 = (state_38959[(1)]);
if((state_val_38960 === (7))){
var inst_38952 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_38967_40207 = state_38959__$1;
(statearr_38967_40207[(2)] = inst_38952);

(statearr_38967_40207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (20))){
var inst_38854 = (state_38959[(7)]);
var inst_38866 = cljs.core.first(inst_38854);
var inst_38867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38866,(0),null);
var inst_38868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38866,(1),null);
var state_38959__$1 = (function (){var statearr_38971 = state_38959;
(statearr_38971[(8)] = inst_38867);

return statearr_38971;
})();
if(cljs.core.truth_(inst_38868)){
var statearr_38972_40208 = state_38959__$1;
(statearr_38972_40208[(1)] = (22));

} else {
var statearr_38976_40209 = state_38959__$1;
(statearr_38976_40209[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (27))){
var inst_38898 = (state_38959[(9)]);
var inst_38823 = (state_38959[(10)]);
var inst_38903 = (state_38959[(11)]);
var inst_38896 = (state_38959[(12)]);
var inst_38903__$1 = cljs.core._nth(inst_38896,inst_38898);
var inst_38904 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38903__$1,inst_38823,done);
var state_38959__$1 = (function (){var statearr_38977 = state_38959;
(statearr_38977[(11)] = inst_38903__$1);

return statearr_38977;
})();
if(cljs.core.truth_(inst_38904)){
var statearr_38978_40210 = state_38959__$1;
(statearr_38978_40210[(1)] = (30));

} else {
var statearr_38979_40211 = state_38959__$1;
(statearr_38979_40211[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (1))){
var state_38959__$1 = state_38959;
var statearr_38981_40212 = state_38959__$1;
(statearr_38981_40212[(2)] = null);

(statearr_38981_40212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (24))){
var inst_38854 = (state_38959[(7)]);
var inst_38873 = (state_38959[(2)]);
var inst_38874 = cljs.core.next(inst_38854);
var inst_38832 = inst_38874;
var inst_38833 = null;
var inst_38834 = (0);
var inst_38835 = (0);
var state_38959__$1 = (function (){var statearr_38982 = state_38959;
(statearr_38982[(13)] = inst_38873);

(statearr_38982[(14)] = inst_38833);

(statearr_38982[(15)] = inst_38835);

(statearr_38982[(16)] = inst_38832);

(statearr_38982[(17)] = inst_38834);

return statearr_38982;
})();
var statearr_38983_40213 = state_38959__$1;
(statearr_38983_40213[(2)] = null);

(statearr_38983_40213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (39))){
var state_38959__$1 = state_38959;
var statearr_38989_40214 = state_38959__$1;
(statearr_38989_40214[(2)] = null);

(statearr_38989_40214[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (4))){
var inst_38823 = (state_38959[(10)]);
var inst_38823__$1 = (state_38959[(2)]);
var inst_38824 = (inst_38823__$1 == null);
var state_38959__$1 = (function (){var statearr_38993 = state_38959;
(statearr_38993[(10)] = inst_38823__$1);

return statearr_38993;
})();
if(cljs.core.truth_(inst_38824)){
var statearr_38994_40215 = state_38959__$1;
(statearr_38994_40215[(1)] = (5));

} else {
var statearr_38995_40216 = state_38959__$1;
(statearr_38995_40216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (15))){
var inst_38833 = (state_38959[(14)]);
var inst_38835 = (state_38959[(15)]);
var inst_38832 = (state_38959[(16)]);
var inst_38834 = (state_38959[(17)]);
var inst_38850 = (state_38959[(2)]);
var inst_38851 = (inst_38835 + (1));
var tmp38984 = inst_38833;
var tmp38985 = inst_38832;
var tmp38986 = inst_38834;
var inst_38832__$1 = tmp38985;
var inst_38833__$1 = tmp38984;
var inst_38834__$1 = tmp38986;
var inst_38835__$1 = inst_38851;
var state_38959__$1 = (function (){var statearr_38998 = state_38959;
(statearr_38998[(14)] = inst_38833__$1);

(statearr_38998[(15)] = inst_38835__$1);

(statearr_38998[(18)] = inst_38850);

(statearr_38998[(16)] = inst_38832__$1);

(statearr_38998[(17)] = inst_38834__$1);

return statearr_38998;
})();
var statearr_38999_40217 = state_38959__$1;
(statearr_38999_40217[(2)] = null);

(statearr_38999_40217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (21))){
var inst_38877 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_39003_40218 = state_38959__$1;
(statearr_39003_40218[(2)] = inst_38877);

(statearr_39003_40218[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (31))){
var inst_38903 = (state_38959[(11)]);
var inst_38910 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38903);
var state_38959__$1 = state_38959;
var statearr_39004_40219 = state_38959__$1;
(statearr_39004_40219[(2)] = inst_38910);

(statearr_39004_40219[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (32))){
var inst_38897 = (state_38959[(19)]);
var inst_38898 = (state_38959[(9)]);
var inst_38895 = (state_38959[(20)]);
var inst_38896 = (state_38959[(12)]);
var inst_38912 = (state_38959[(2)]);
var inst_38913 = (inst_38898 + (1));
var tmp39000 = inst_38897;
var tmp39001 = inst_38895;
var tmp39002 = inst_38896;
var inst_38895__$1 = tmp39001;
var inst_38896__$1 = tmp39002;
var inst_38897__$1 = tmp39000;
var inst_38898__$1 = inst_38913;
var state_38959__$1 = (function (){var statearr_39005 = state_38959;
(statearr_39005[(21)] = inst_38912);

(statearr_39005[(19)] = inst_38897__$1);

(statearr_39005[(9)] = inst_38898__$1);

(statearr_39005[(20)] = inst_38895__$1);

(statearr_39005[(12)] = inst_38896__$1);

return statearr_39005;
})();
var statearr_39006_40224 = state_38959__$1;
(statearr_39006_40224[(2)] = null);

(statearr_39006_40224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (40))){
var inst_38925 = (state_38959[(22)]);
var inst_38929 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38925);
var state_38959__$1 = state_38959;
var statearr_39007_40225 = state_38959__$1;
(statearr_39007_40225[(2)] = inst_38929);

(statearr_39007_40225[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (33))){
var inst_38916 = (state_38959[(23)]);
var inst_38918 = cljs.core.chunked_seq_QMARK_(inst_38916);
var state_38959__$1 = state_38959;
if(inst_38918){
var statearr_39008_40226 = state_38959__$1;
(statearr_39008_40226[(1)] = (36));

} else {
var statearr_39009_40227 = state_38959__$1;
(statearr_39009_40227[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (13))){
var inst_38844 = (state_38959[(24)]);
var inst_38847 = cljs.core.async.close_BANG_(inst_38844);
var state_38959__$1 = state_38959;
var statearr_39010_40228 = state_38959__$1;
(statearr_39010_40228[(2)] = inst_38847);

(statearr_39010_40228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (22))){
var inst_38867 = (state_38959[(8)]);
var inst_38870 = cljs.core.async.close_BANG_(inst_38867);
var state_38959__$1 = state_38959;
var statearr_39011_40229 = state_38959__$1;
(statearr_39011_40229[(2)] = inst_38870);

(statearr_39011_40229[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (36))){
var inst_38916 = (state_38959[(23)]);
var inst_38920 = cljs.core.chunk_first(inst_38916);
var inst_38921 = cljs.core.chunk_rest(inst_38916);
var inst_38922 = cljs.core.count(inst_38920);
var inst_38895 = inst_38921;
var inst_38896 = inst_38920;
var inst_38897 = inst_38922;
var inst_38898 = (0);
var state_38959__$1 = (function (){var statearr_39012 = state_38959;
(statearr_39012[(19)] = inst_38897);

(statearr_39012[(9)] = inst_38898);

(statearr_39012[(20)] = inst_38895);

(statearr_39012[(12)] = inst_38896);

return statearr_39012;
})();
var statearr_39013_40239 = state_38959__$1;
(statearr_39013_40239[(2)] = null);

(statearr_39013_40239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (41))){
var inst_38916 = (state_38959[(23)]);
var inst_38931 = (state_38959[(2)]);
var inst_38932 = cljs.core.next(inst_38916);
var inst_38895 = inst_38932;
var inst_38896 = null;
var inst_38897 = (0);
var inst_38898 = (0);
var state_38959__$1 = (function (){var statearr_39014 = state_38959;
(statearr_39014[(19)] = inst_38897);

(statearr_39014[(9)] = inst_38898);

(statearr_39014[(25)] = inst_38931);

(statearr_39014[(20)] = inst_38895);

(statearr_39014[(12)] = inst_38896);

return statearr_39014;
})();
var statearr_39015_40252 = state_38959__$1;
(statearr_39015_40252[(2)] = null);

(statearr_39015_40252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (43))){
var state_38959__$1 = state_38959;
var statearr_39016_40253 = state_38959__$1;
(statearr_39016_40253[(2)] = null);

(statearr_39016_40253[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (29))){
var inst_38940 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_39017_40254 = state_38959__$1;
(statearr_39017_40254[(2)] = inst_38940);

(statearr_39017_40254[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (44))){
var inst_38949 = (state_38959[(2)]);
var state_38959__$1 = (function (){var statearr_39018 = state_38959;
(statearr_39018[(26)] = inst_38949);

return statearr_39018;
})();
var statearr_39019_40255 = state_38959__$1;
(statearr_39019_40255[(2)] = null);

(statearr_39019_40255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (6))){
var inst_38887 = (state_38959[(27)]);
var inst_38886 = cljs.core.deref(cs);
var inst_38887__$1 = cljs.core.keys(inst_38886);
var inst_38888 = cljs.core.count(inst_38887__$1);
var inst_38889 = cljs.core.reset_BANG_(dctr,inst_38888);
var inst_38894 = cljs.core.seq(inst_38887__$1);
var inst_38895 = inst_38894;
var inst_38896 = null;
var inst_38897 = (0);
var inst_38898 = (0);
var state_38959__$1 = (function (){var statearr_39020 = state_38959;
(statearr_39020[(19)] = inst_38897);

(statearr_39020[(9)] = inst_38898);

(statearr_39020[(28)] = inst_38889);

(statearr_39020[(27)] = inst_38887__$1);

(statearr_39020[(20)] = inst_38895);

(statearr_39020[(12)] = inst_38896);

return statearr_39020;
})();
var statearr_39021_40256 = state_38959__$1;
(statearr_39021_40256[(2)] = null);

(statearr_39021_40256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (28))){
var inst_38916 = (state_38959[(23)]);
var inst_38895 = (state_38959[(20)]);
var inst_38916__$1 = cljs.core.seq(inst_38895);
var state_38959__$1 = (function (){var statearr_39022 = state_38959;
(statearr_39022[(23)] = inst_38916__$1);

return statearr_39022;
})();
if(inst_38916__$1){
var statearr_39023_40261 = state_38959__$1;
(statearr_39023_40261[(1)] = (33));

} else {
var statearr_39024_40262 = state_38959__$1;
(statearr_39024_40262[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (25))){
var inst_38897 = (state_38959[(19)]);
var inst_38898 = (state_38959[(9)]);
var inst_38900 = (inst_38898 < inst_38897);
var inst_38901 = inst_38900;
var state_38959__$1 = state_38959;
if(cljs.core.truth_(inst_38901)){
var statearr_39025_40263 = state_38959__$1;
(statearr_39025_40263[(1)] = (27));

} else {
var statearr_39026_40264 = state_38959__$1;
(statearr_39026_40264[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (34))){
var state_38959__$1 = state_38959;
var statearr_39028_40265 = state_38959__$1;
(statearr_39028_40265[(2)] = null);

(statearr_39028_40265[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (17))){
var state_38959__$1 = state_38959;
var statearr_39030_40266 = state_38959__$1;
(statearr_39030_40266[(2)] = null);

(statearr_39030_40266[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (3))){
var inst_38954 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38959__$1,inst_38954);
} else {
if((state_val_38960 === (12))){
var inst_38882 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_39032_40267 = state_38959__$1;
(statearr_39032_40267[(2)] = inst_38882);

(statearr_39032_40267[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (2))){
var state_38959__$1 = state_38959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38959__$1,(4),ch);
} else {
if((state_val_38960 === (23))){
var state_38959__$1 = state_38959;
var statearr_39034_40268 = state_38959__$1;
(statearr_39034_40268[(2)] = null);

(statearr_39034_40268[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (35))){
var inst_38938 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_39035_40269 = state_38959__$1;
(statearr_39035_40269[(2)] = inst_38938);

(statearr_39035_40269[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (19))){
var inst_38854 = (state_38959[(7)]);
var inst_38858 = cljs.core.chunk_first(inst_38854);
var inst_38859 = cljs.core.chunk_rest(inst_38854);
var inst_38860 = cljs.core.count(inst_38858);
var inst_38832 = inst_38859;
var inst_38833 = inst_38858;
var inst_38834 = inst_38860;
var inst_38835 = (0);
var state_38959__$1 = (function (){var statearr_39036 = state_38959;
(statearr_39036[(14)] = inst_38833);

(statearr_39036[(15)] = inst_38835);

(statearr_39036[(16)] = inst_38832);

(statearr_39036[(17)] = inst_38834);

return statearr_39036;
})();
var statearr_39037_40270 = state_38959__$1;
(statearr_39037_40270[(2)] = null);

(statearr_39037_40270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (11))){
var inst_38854 = (state_38959[(7)]);
var inst_38832 = (state_38959[(16)]);
var inst_38854__$1 = cljs.core.seq(inst_38832);
var state_38959__$1 = (function (){var statearr_39039 = state_38959;
(statearr_39039[(7)] = inst_38854__$1);

return statearr_39039;
})();
if(inst_38854__$1){
var statearr_39040_40271 = state_38959__$1;
(statearr_39040_40271[(1)] = (16));

} else {
var statearr_39041_40272 = state_38959__$1;
(statearr_39041_40272[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (9))){
var inst_38884 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_39042_40273 = state_38959__$1;
(statearr_39042_40273[(2)] = inst_38884);

(statearr_39042_40273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (5))){
var inst_38830 = cljs.core.deref(cs);
var inst_38831 = cljs.core.seq(inst_38830);
var inst_38832 = inst_38831;
var inst_38833 = null;
var inst_38834 = (0);
var inst_38835 = (0);
var state_38959__$1 = (function (){var statearr_39045 = state_38959;
(statearr_39045[(14)] = inst_38833);

(statearr_39045[(15)] = inst_38835);

(statearr_39045[(16)] = inst_38832);

(statearr_39045[(17)] = inst_38834);

return statearr_39045;
})();
var statearr_39046_40274 = state_38959__$1;
(statearr_39046_40274[(2)] = null);

(statearr_39046_40274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (14))){
var state_38959__$1 = state_38959;
var statearr_39047_40275 = state_38959__$1;
(statearr_39047_40275[(2)] = null);

(statearr_39047_40275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (45))){
var inst_38946 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_39048_40276 = state_38959__$1;
(statearr_39048_40276[(2)] = inst_38946);

(statearr_39048_40276[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (26))){
var inst_38887 = (state_38959[(27)]);
var inst_38942 = (state_38959[(2)]);
var inst_38943 = cljs.core.seq(inst_38887);
var state_38959__$1 = (function (){var statearr_39050 = state_38959;
(statearr_39050[(29)] = inst_38942);

return statearr_39050;
})();
if(inst_38943){
var statearr_39055_40277 = state_38959__$1;
(statearr_39055_40277[(1)] = (42));

} else {
var statearr_39057_40278 = state_38959__$1;
(statearr_39057_40278[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (16))){
var inst_38854 = (state_38959[(7)]);
var inst_38856 = cljs.core.chunked_seq_QMARK_(inst_38854);
var state_38959__$1 = state_38959;
if(inst_38856){
var statearr_39069_40279 = state_38959__$1;
(statearr_39069_40279[(1)] = (19));

} else {
var statearr_39071_40280 = state_38959__$1;
(statearr_39071_40280[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (38))){
var inst_38935 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_39076_40281 = state_38959__$1;
(statearr_39076_40281[(2)] = inst_38935);

(statearr_39076_40281[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (30))){
var state_38959__$1 = state_38959;
var statearr_39077_40282 = state_38959__$1;
(statearr_39077_40282[(2)] = null);

(statearr_39077_40282[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (10))){
var inst_38833 = (state_38959[(14)]);
var inst_38835 = (state_38959[(15)]);
var inst_38843 = cljs.core._nth(inst_38833,inst_38835);
var inst_38844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38843,(0),null);
var inst_38845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38843,(1),null);
var state_38959__$1 = (function (){var statearr_39079 = state_38959;
(statearr_39079[(24)] = inst_38844);

return statearr_39079;
})();
if(cljs.core.truth_(inst_38845)){
var statearr_39080_40283 = state_38959__$1;
(statearr_39080_40283[(1)] = (13));

} else {
var statearr_39081_40284 = state_38959__$1;
(statearr_39081_40284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (18))){
var inst_38880 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_39083_40285 = state_38959__$1;
(statearr_39083_40285[(2)] = inst_38880);

(statearr_39083_40285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (42))){
var state_38959__$1 = state_38959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38959__$1,(45),dchan);
} else {
if((state_val_38960 === (37))){
var inst_38925 = (state_38959[(22)]);
var inst_38916 = (state_38959[(23)]);
var inst_38823 = (state_38959[(10)]);
var inst_38925__$1 = cljs.core.first(inst_38916);
var inst_38926 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38925__$1,inst_38823,done);
var state_38959__$1 = (function (){var statearr_39085 = state_38959;
(statearr_39085[(22)] = inst_38925__$1);

return statearr_39085;
})();
if(cljs.core.truth_(inst_38926)){
var statearr_39088_40286 = state_38959__$1;
(statearr_39088_40286[(1)] = (39));

} else {
var statearr_39089_40287 = state_38959__$1;
(statearr_39089_40287[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (8))){
var inst_38835 = (state_38959[(15)]);
var inst_38834 = (state_38959[(17)]);
var inst_38837 = (inst_38835 < inst_38834);
var inst_38838 = inst_38837;
var state_38959__$1 = state_38959;
if(cljs.core.truth_(inst_38838)){
var statearr_39090_40288 = state_38959__$1;
(statearr_39090_40288[(1)] = (10));

} else {
var statearr_39091_40289 = state_38959__$1;
(statearr_39091_40289[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__37994__auto__ = null;
var cljs$core$async$mult_$_state_machine__37994__auto____0 = (function (){
var statearr_39092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39092[(0)] = cljs$core$async$mult_$_state_machine__37994__auto__);

(statearr_39092[(1)] = (1));

return statearr_39092;
});
var cljs$core$async$mult_$_state_machine__37994__auto____1 = (function (state_38959){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_38959);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e39093){var ex__37997__auto__ = e39093;
var statearr_39094_40290 = state_38959;
(statearr_39094_40290[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_38959[(4)]))){
var statearr_39095_40291 = state_38959;
(statearr_39095_40291[(1)] = cljs.core.first((state_38959[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40292 = state_38959;
state_38959 = G__40292;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37994__auto__ = function(state_38959){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37994__auto____1.call(this,state_38959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37994__auto____0;
cljs$core$async$mult_$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37994__auto____1;
return cljs$core$async$mult_$_state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_39096 = f__38272__auto__();
(statearr_39096[(6)] = c__38271__auto___40206);

return statearr_39096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39099 = arguments.length;
switch (G__39099) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_40294 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_40294(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_40295 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_40295(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_40296 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_40296(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_40297 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_40297(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_40298 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_40298(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40299 = arguments.length;
var i__5767__auto___40300 = (0);
while(true){
if((i__5767__auto___40300 < len__5766__auto___40299)){
args__5772__auto__.push((arguments[i__5767__auto___40300]));

var G__40301 = (i__5767__auto___40300 + (1));
i__5767__auto___40300 = G__40301;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39112){
var map__39113 = p__39112;
var map__39113__$1 = cljs.core.__destructure_map(map__39113);
var opts = map__39113__$1;
var statearr_39114_40302 = state;
(statearr_39114_40302[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_39115_40303 = state;
(statearr_39115_40303[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_39116_40304 = state;
(statearr_39116_40304[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39108){
var G__39109 = cljs.core.first(seq39108);
var seq39108__$1 = cljs.core.next(seq39108);
var G__39110 = cljs.core.first(seq39108__$1);
var seq39108__$2 = cljs.core.next(seq39108__$1);
var G__39111 = cljs.core.first(seq39108__$2);
var seq39108__$3 = cljs.core.next(seq39108__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39109,G__39110,G__39111,seq39108__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39122 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39123){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39123 = meta39123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39124,meta39123__$1){
var self__ = this;
var _39124__$1 = this;
return (new cljs.core.async.t_cljs$core$async39122(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39123__$1));
}));

(cljs.core.async.t_cljs$core$async39122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39124){
var self__ = this;
var _39124__$1 = this;
return self__.meta39123;
}));

(cljs.core.async.t_cljs$core$async39122.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39122.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async39122.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39122.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39122.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39122.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39122.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39122.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39123","meta39123",-1724886015,null)], null);
}));

(cljs.core.async.t_cljs$core$async39122.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39122");

(cljs.core.async.t_cljs$core$async39122.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39122");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39122.
 */
cljs.core.async.__GT_t_cljs$core$async39122 = (function cljs$core$async$mix_$___GT_t_cljs$core$async39122(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39123){
return (new cljs.core.async.t_cljs$core$async39122(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39123));
});

}

return (new cljs.core.async.t_cljs$core$async39122(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38271__auto___40305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_39198){
var state_val_39199 = (state_39198[(1)]);
if((state_val_39199 === (7))){
var inst_39157 = (state_39198[(2)]);
var state_39198__$1 = state_39198;
if(cljs.core.truth_(inst_39157)){
var statearr_39201_40306 = state_39198__$1;
(statearr_39201_40306[(1)] = (8));

} else {
var statearr_39202_40307 = state_39198__$1;
(statearr_39202_40307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (20))){
var inst_39147 = (state_39198[(7)]);
var state_39198__$1 = state_39198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39198__$1,(23),out,inst_39147);
} else {
if((state_val_39199 === (1))){
var inst_39130 = calc_state();
var inst_39131 = cljs.core.__destructure_map(inst_39130);
var inst_39132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39131,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39131,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39131,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39135 = inst_39130;
var state_39198__$1 = (function (){var statearr_39203 = state_39198;
(statearr_39203[(8)] = inst_39134);

(statearr_39203[(9)] = inst_39132);

(statearr_39203[(10)] = inst_39135);

(statearr_39203[(11)] = inst_39133);

return statearr_39203;
})();
var statearr_39205_40308 = state_39198__$1;
(statearr_39205_40308[(2)] = null);

(statearr_39205_40308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (24))){
var inst_39138 = (state_39198[(12)]);
var inst_39135 = inst_39138;
var state_39198__$1 = (function (){var statearr_39206 = state_39198;
(statearr_39206[(10)] = inst_39135);

return statearr_39206;
})();
var statearr_39207_40309 = state_39198__$1;
(statearr_39207_40309[(2)] = null);

(statearr_39207_40309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (4))){
var inst_39152 = (state_39198[(13)]);
var inst_39147 = (state_39198[(7)]);
var inst_39146 = (state_39198[(2)]);
var inst_39147__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39146,(0),null);
var inst_39148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39146,(1),null);
var inst_39152__$1 = (inst_39147__$1 == null);
var state_39198__$1 = (function (){var statearr_39208 = state_39198;
(statearr_39208[(14)] = inst_39148);

(statearr_39208[(13)] = inst_39152__$1);

(statearr_39208[(7)] = inst_39147__$1);

return statearr_39208;
})();
if(cljs.core.truth_(inst_39152__$1)){
var statearr_39209_40310 = state_39198__$1;
(statearr_39209_40310[(1)] = (5));

} else {
var statearr_39210_40311 = state_39198__$1;
(statearr_39210_40311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (15))){
var inst_39139 = (state_39198[(15)]);
var inst_39172 = (state_39198[(16)]);
var inst_39172__$1 = cljs.core.empty_QMARK_(inst_39139);
var state_39198__$1 = (function (){var statearr_39212 = state_39198;
(statearr_39212[(16)] = inst_39172__$1);

return statearr_39212;
})();
if(inst_39172__$1){
var statearr_39213_40312 = state_39198__$1;
(statearr_39213_40312[(1)] = (17));

} else {
var statearr_39214_40313 = state_39198__$1;
(statearr_39214_40313[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (21))){
var inst_39138 = (state_39198[(12)]);
var inst_39135 = inst_39138;
var state_39198__$1 = (function (){var statearr_39215 = state_39198;
(statearr_39215[(10)] = inst_39135);

return statearr_39215;
})();
var statearr_39216_40314 = state_39198__$1;
(statearr_39216_40314[(2)] = null);

(statearr_39216_40314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (13))){
var inst_39165 = (state_39198[(2)]);
var inst_39166 = calc_state();
var inst_39135 = inst_39166;
var state_39198__$1 = (function (){var statearr_39217 = state_39198;
(statearr_39217[(17)] = inst_39165);

(statearr_39217[(10)] = inst_39135);

return statearr_39217;
})();
var statearr_39219_40315 = state_39198__$1;
(statearr_39219_40315[(2)] = null);

(statearr_39219_40315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (22))){
var inst_39192 = (state_39198[(2)]);
var state_39198__$1 = state_39198;
var statearr_39220_40316 = state_39198__$1;
(statearr_39220_40316[(2)] = inst_39192);

(statearr_39220_40316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (6))){
var inst_39148 = (state_39198[(14)]);
var inst_39155 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39148,change);
var state_39198__$1 = state_39198;
var statearr_39221_40317 = state_39198__$1;
(statearr_39221_40317[(2)] = inst_39155);

(statearr_39221_40317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (25))){
var state_39198__$1 = state_39198;
var statearr_39222_40318 = state_39198__$1;
(statearr_39222_40318[(2)] = null);

(statearr_39222_40318[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (17))){
var inst_39148 = (state_39198[(14)]);
var inst_39140 = (state_39198[(18)]);
var inst_39174 = (inst_39140.cljs$core$IFn$_invoke$arity$1 ? inst_39140.cljs$core$IFn$_invoke$arity$1(inst_39148) : inst_39140.call(null,inst_39148));
var inst_39175 = cljs.core.not(inst_39174);
var state_39198__$1 = state_39198;
var statearr_39224_40319 = state_39198__$1;
(statearr_39224_40319[(2)] = inst_39175);

(statearr_39224_40319[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (3))){
var inst_39196 = (state_39198[(2)]);
var state_39198__$1 = state_39198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39198__$1,inst_39196);
} else {
if((state_val_39199 === (12))){
var state_39198__$1 = state_39198;
var statearr_39225_40320 = state_39198__$1;
(statearr_39225_40320[(2)] = null);

(statearr_39225_40320[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (2))){
var inst_39135 = (state_39198[(10)]);
var inst_39138 = (state_39198[(12)]);
var inst_39138__$1 = cljs.core.__destructure_map(inst_39135);
var inst_39139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39138__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39138__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39138__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39198__$1 = (function (){var statearr_39227 = state_39198;
(statearr_39227[(18)] = inst_39140);

(statearr_39227[(15)] = inst_39139);

(statearr_39227[(12)] = inst_39138__$1);

return statearr_39227;
})();
return cljs.core.async.ioc_alts_BANG_(state_39198__$1,(4),inst_39141);
} else {
if((state_val_39199 === (23))){
var inst_39183 = (state_39198[(2)]);
var state_39198__$1 = state_39198;
if(cljs.core.truth_(inst_39183)){
var statearr_39228_40321 = state_39198__$1;
(statearr_39228_40321[(1)] = (24));

} else {
var statearr_39229_40322 = state_39198__$1;
(statearr_39229_40322[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (19))){
var inst_39178 = (state_39198[(2)]);
var state_39198__$1 = state_39198;
var statearr_39230_40323 = state_39198__$1;
(statearr_39230_40323[(2)] = inst_39178);

(statearr_39230_40323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (11))){
var inst_39148 = (state_39198[(14)]);
var inst_39162 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39148);
var state_39198__$1 = state_39198;
var statearr_39231_40324 = state_39198__$1;
(statearr_39231_40324[(2)] = inst_39162);

(statearr_39231_40324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (9))){
var inst_39148 = (state_39198[(14)]);
var inst_39169 = (state_39198[(19)]);
var inst_39139 = (state_39198[(15)]);
var inst_39169__$1 = (inst_39139.cljs$core$IFn$_invoke$arity$1 ? inst_39139.cljs$core$IFn$_invoke$arity$1(inst_39148) : inst_39139.call(null,inst_39148));
var state_39198__$1 = (function (){var statearr_39232 = state_39198;
(statearr_39232[(19)] = inst_39169__$1);

return statearr_39232;
})();
if(cljs.core.truth_(inst_39169__$1)){
var statearr_39233_40325 = state_39198__$1;
(statearr_39233_40325[(1)] = (14));

} else {
var statearr_39235_40326 = state_39198__$1;
(statearr_39235_40326[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (5))){
var inst_39152 = (state_39198[(13)]);
var state_39198__$1 = state_39198;
var statearr_39236_40327 = state_39198__$1;
(statearr_39236_40327[(2)] = inst_39152);

(statearr_39236_40327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (14))){
var inst_39169 = (state_39198[(19)]);
var state_39198__$1 = state_39198;
var statearr_39237_40328 = state_39198__$1;
(statearr_39237_40328[(2)] = inst_39169);

(statearr_39237_40328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (26))){
var inst_39188 = (state_39198[(2)]);
var state_39198__$1 = state_39198;
var statearr_39239_40329 = state_39198__$1;
(statearr_39239_40329[(2)] = inst_39188);

(statearr_39239_40329[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (16))){
var inst_39180 = (state_39198[(2)]);
var state_39198__$1 = state_39198;
if(cljs.core.truth_(inst_39180)){
var statearr_39240_40330 = state_39198__$1;
(statearr_39240_40330[(1)] = (20));

} else {
var statearr_39241_40331 = state_39198__$1;
(statearr_39241_40331[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (10))){
var inst_39194 = (state_39198[(2)]);
var state_39198__$1 = state_39198;
var statearr_39242_40332 = state_39198__$1;
(statearr_39242_40332[(2)] = inst_39194);

(statearr_39242_40332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (18))){
var inst_39172 = (state_39198[(16)]);
var state_39198__$1 = state_39198;
var statearr_39243_40333 = state_39198__$1;
(statearr_39243_40333[(2)] = inst_39172);

(statearr_39243_40333[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (8))){
var inst_39147 = (state_39198[(7)]);
var inst_39159 = (inst_39147 == null);
var state_39198__$1 = state_39198;
if(cljs.core.truth_(inst_39159)){
var statearr_39244_40334 = state_39198__$1;
(statearr_39244_40334[(1)] = (11));

} else {
var statearr_39245_40335 = state_39198__$1;
(statearr_39245_40335[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__37994__auto__ = null;
var cljs$core$async$mix_$_state_machine__37994__auto____0 = (function (){
var statearr_39247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39247[(0)] = cljs$core$async$mix_$_state_machine__37994__auto__);

(statearr_39247[(1)] = (1));

return statearr_39247;
});
var cljs$core$async$mix_$_state_machine__37994__auto____1 = (function (state_39198){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_39198);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e39248){var ex__37997__auto__ = e39248;
var statearr_39249_40336 = state_39198;
(statearr_39249_40336[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_39198[(4)]))){
var statearr_39250_40337 = state_39198;
(statearr_39250_40337[(1)] = cljs.core.first((state_39198[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40338 = state_39198;
state_39198 = G__40338;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37994__auto__ = function(state_39198){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37994__auto____1.call(this,state_39198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37994__auto____0;
cljs$core$async$mix_$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37994__auto____1;
return cljs$core$async$mix_$_state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_39252 = f__38272__auto__();
(statearr_39252[(6)] = c__38271__auto___40305);

return statearr_39252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_40339 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_40339(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_40340 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_40340(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_40341 = (function() {
var G__40342 = null;
var G__40342__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__40342__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__40342 = function(p,v){
switch(arguments.length){
case 1:
return G__40342__1.call(this,p);
case 2:
return G__40342__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40342.cljs$core$IFn$_invoke$arity$1 = G__40342__1;
G__40342.cljs$core$IFn$_invoke$arity$2 = G__40342__2;
return G__40342;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39262 = arguments.length;
switch (G__39262) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40341(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40341(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39266 = arguments.length;
switch (G__39266) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__39264_SHARP_){
if(cljs.core.truth_((p1__39264_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39264_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39264_SHARP_.call(null,topic)))){
return p1__39264_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39264_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39275 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39276){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39276 = meta39276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39277,meta39276__$1){
var self__ = this;
var _39277__$1 = this;
return (new cljs.core.async.t_cljs$core$async39275(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39276__$1));
}));

(cljs.core.async.t_cljs$core$async39275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39277){
var self__ = this;
var _39277__$1 = this;
return self__.meta39276;
}));

(cljs.core.async.t_cljs$core$async39275.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39275.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39275.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39275.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39275.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async39275.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39275.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39276","meta39276",173117340,null)], null);
}));

(cljs.core.async.t_cljs$core$async39275.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39275");

(cljs.core.async.t_cljs$core$async39275.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39275");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39275.
 */
cljs.core.async.__GT_t_cljs$core$async39275 = (function cljs$core$async$__GT_t_cljs$core$async39275(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39276){
return (new cljs.core.async.t_cljs$core$async39275(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39276));
});

}

return (new cljs.core.async.t_cljs$core$async39275(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38271__auto___40345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_39373){
var state_val_39374 = (state_39373[(1)]);
if((state_val_39374 === (7))){
var inst_39369 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39376_40346 = state_39373__$1;
(statearr_39376_40346[(2)] = inst_39369);

(statearr_39376_40346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (20))){
var state_39373__$1 = state_39373;
var statearr_39377_40347 = state_39373__$1;
(statearr_39377_40347[(2)] = null);

(statearr_39377_40347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (1))){
var state_39373__$1 = state_39373;
var statearr_39378_40348 = state_39373__$1;
(statearr_39378_40348[(2)] = null);

(statearr_39378_40348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (24))){
var inst_39350 = (state_39373[(7)]);
var inst_39359 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39350);
var state_39373__$1 = state_39373;
var statearr_39379_40349 = state_39373__$1;
(statearr_39379_40349[(2)] = inst_39359);

(statearr_39379_40349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (4))){
var inst_39296 = (state_39373[(8)]);
var inst_39296__$1 = (state_39373[(2)]);
var inst_39299 = (inst_39296__$1 == null);
var state_39373__$1 = (function (){var statearr_39380 = state_39373;
(statearr_39380[(8)] = inst_39296__$1);

return statearr_39380;
})();
if(cljs.core.truth_(inst_39299)){
var statearr_39381_40350 = state_39373__$1;
(statearr_39381_40350[(1)] = (5));

} else {
var statearr_39382_40351 = state_39373__$1;
(statearr_39382_40351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (15))){
var inst_39344 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39383_40352 = state_39373__$1;
(statearr_39383_40352[(2)] = inst_39344);

(statearr_39383_40352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (21))){
var inst_39364 = (state_39373[(2)]);
var state_39373__$1 = (function (){var statearr_39384 = state_39373;
(statearr_39384[(9)] = inst_39364);

return statearr_39384;
})();
var statearr_39385_40353 = state_39373__$1;
(statearr_39385_40353[(2)] = null);

(statearr_39385_40353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (13))){
var inst_39324 = (state_39373[(10)]);
var inst_39326 = cljs.core.chunked_seq_QMARK_(inst_39324);
var state_39373__$1 = state_39373;
if(inst_39326){
var statearr_39386_40354 = state_39373__$1;
(statearr_39386_40354[(1)] = (16));

} else {
var statearr_39387_40355 = state_39373__$1;
(statearr_39387_40355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (22))){
var inst_39356 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
if(cljs.core.truth_(inst_39356)){
var statearr_39388_40356 = state_39373__$1;
(statearr_39388_40356[(1)] = (23));

} else {
var statearr_39389_40357 = state_39373__$1;
(statearr_39389_40357[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (6))){
var inst_39352 = (state_39373[(11)]);
var inst_39350 = (state_39373[(7)]);
var inst_39296 = (state_39373[(8)]);
var inst_39350__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39296) : topic_fn.call(null,inst_39296));
var inst_39351 = cljs.core.deref(mults);
var inst_39352__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39351,inst_39350__$1);
var state_39373__$1 = (function (){var statearr_39390 = state_39373;
(statearr_39390[(11)] = inst_39352__$1);

(statearr_39390[(7)] = inst_39350__$1);

return statearr_39390;
})();
if(cljs.core.truth_(inst_39352__$1)){
var statearr_39391_40358 = state_39373__$1;
(statearr_39391_40358[(1)] = (19));

} else {
var statearr_39392_40359 = state_39373__$1;
(statearr_39392_40359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (25))){
var inst_39361 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39393_40360 = state_39373__$1;
(statearr_39393_40360[(2)] = inst_39361);

(statearr_39393_40360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (17))){
var inst_39324 = (state_39373[(10)]);
var inst_39333 = cljs.core.first(inst_39324);
var inst_39334 = cljs.core.async.muxch_STAR_(inst_39333);
var inst_39335 = cljs.core.async.close_BANG_(inst_39334);
var inst_39336 = cljs.core.next(inst_39324);
var inst_39308 = inst_39336;
var inst_39309 = null;
var inst_39310 = (0);
var inst_39311 = (0);
var state_39373__$1 = (function (){var statearr_39395 = state_39373;
(statearr_39395[(12)] = inst_39335);

(statearr_39395[(13)] = inst_39308);

(statearr_39395[(14)] = inst_39309);

(statearr_39395[(15)] = inst_39310);

(statearr_39395[(16)] = inst_39311);

return statearr_39395;
})();
var statearr_39396_40361 = state_39373__$1;
(statearr_39396_40361[(2)] = null);

(statearr_39396_40361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (3))){
var inst_39371 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39373__$1,inst_39371);
} else {
if((state_val_39374 === (12))){
var inst_39346 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39398_40362 = state_39373__$1;
(statearr_39398_40362[(2)] = inst_39346);

(statearr_39398_40362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (2))){
var state_39373__$1 = state_39373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39373__$1,(4),ch);
} else {
if((state_val_39374 === (23))){
var state_39373__$1 = state_39373;
var statearr_39400_40363 = state_39373__$1;
(statearr_39400_40363[(2)] = null);

(statearr_39400_40363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (19))){
var inst_39352 = (state_39373[(11)]);
var inst_39296 = (state_39373[(8)]);
var inst_39354 = cljs.core.async.muxch_STAR_(inst_39352);
var state_39373__$1 = state_39373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39373__$1,(22),inst_39354,inst_39296);
} else {
if((state_val_39374 === (11))){
var inst_39324 = (state_39373[(10)]);
var inst_39308 = (state_39373[(13)]);
var inst_39324__$1 = cljs.core.seq(inst_39308);
var state_39373__$1 = (function (){var statearr_39401 = state_39373;
(statearr_39401[(10)] = inst_39324__$1);

return statearr_39401;
})();
if(inst_39324__$1){
var statearr_39402_40364 = state_39373__$1;
(statearr_39402_40364[(1)] = (13));

} else {
var statearr_39403_40365 = state_39373__$1;
(statearr_39403_40365[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (9))){
var inst_39348 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39404_40366 = state_39373__$1;
(statearr_39404_40366[(2)] = inst_39348);

(statearr_39404_40366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (5))){
var inst_39305 = cljs.core.deref(mults);
var inst_39306 = cljs.core.vals(inst_39305);
var inst_39307 = cljs.core.seq(inst_39306);
var inst_39308 = inst_39307;
var inst_39309 = null;
var inst_39310 = (0);
var inst_39311 = (0);
var state_39373__$1 = (function (){var statearr_39405 = state_39373;
(statearr_39405[(13)] = inst_39308);

(statearr_39405[(14)] = inst_39309);

(statearr_39405[(15)] = inst_39310);

(statearr_39405[(16)] = inst_39311);

return statearr_39405;
})();
var statearr_39407_40367 = state_39373__$1;
(statearr_39407_40367[(2)] = null);

(statearr_39407_40367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (14))){
var state_39373__$1 = state_39373;
var statearr_39411_40368 = state_39373__$1;
(statearr_39411_40368[(2)] = null);

(statearr_39411_40368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (16))){
var inst_39324 = (state_39373[(10)]);
var inst_39328 = cljs.core.chunk_first(inst_39324);
var inst_39329 = cljs.core.chunk_rest(inst_39324);
var inst_39330 = cljs.core.count(inst_39328);
var inst_39308 = inst_39329;
var inst_39309 = inst_39328;
var inst_39310 = inst_39330;
var inst_39311 = (0);
var state_39373__$1 = (function (){var statearr_39412 = state_39373;
(statearr_39412[(13)] = inst_39308);

(statearr_39412[(14)] = inst_39309);

(statearr_39412[(15)] = inst_39310);

(statearr_39412[(16)] = inst_39311);

return statearr_39412;
})();
var statearr_39413_40369 = state_39373__$1;
(statearr_39413_40369[(2)] = null);

(statearr_39413_40369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (10))){
var inst_39308 = (state_39373[(13)]);
var inst_39309 = (state_39373[(14)]);
var inst_39310 = (state_39373[(15)]);
var inst_39311 = (state_39373[(16)]);
var inst_39316 = cljs.core._nth(inst_39309,inst_39311);
var inst_39319 = cljs.core.async.muxch_STAR_(inst_39316);
var inst_39320 = cljs.core.async.close_BANG_(inst_39319);
var inst_39321 = (inst_39311 + (1));
var tmp39408 = inst_39308;
var tmp39409 = inst_39309;
var tmp39410 = inst_39310;
var inst_39308__$1 = tmp39408;
var inst_39309__$1 = tmp39409;
var inst_39310__$1 = tmp39410;
var inst_39311__$1 = inst_39321;
var state_39373__$1 = (function (){var statearr_39414 = state_39373;
(statearr_39414[(17)] = inst_39320);

(statearr_39414[(13)] = inst_39308__$1);

(statearr_39414[(14)] = inst_39309__$1);

(statearr_39414[(15)] = inst_39310__$1);

(statearr_39414[(16)] = inst_39311__$1);

return statearr_39414;
})();
var statearr_39415_40370 = state_39373__$1;
(statearr_39415_40370[(2)] = null);

(statearr_39415_40370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (18))){
var inst_39341 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39418_40371 = state_39373__$1;
(statearr_39418_40371[(2)] = inst_39341);

(statearr_39418_40371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (8))){
var inst_39310 = (state_39373[(15)]);
var inst_39311 = (state_39373[(16)]);
var inst_39313 = (inst_39311 < inst_39310);
var inst_39314 = inst_39313;
var state_39373__$1 = state_39373;
if(cljs.core.truth_(inst_39314)){
var statearr_39419_40372 = state_39373__$1;
(statearr_39419_40372[(1)] = (10));

} else {
var statearr_39420_40373 = state_39373__$1;
(statearr_39420_40373[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37994__auto__ = null;
var cljs$core$async$state_machine__37994__auto____0 = (function (){
var statearr_39425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39425[(0)] = cljs$core$async$state_machine__37994__auto__);

(statearr_39425[(1)] = (1));

return statearr_39425;
});
var cljs$core$async$state_machine__37994__auto____1 = (function (state_39373){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_39373);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e39426){var ex__37997__auto__ = e39426;
var statearr_39427_40374 = state_39373;
(statearr_39427_40374[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_39373[(4)]))){
var statearr_39428_40375 = state_39373;
(statearr_39428_40375[(1)] = cljs.core.first((state_39373[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40376 = state_39373;
state_39373 = G__40376;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$state_machine__37994__auto__ = function(state_39373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37994__auto____1.call(this,state_39373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37994__auto____0;
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37994__auto____1;
return cljs$core$async$state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_39429 = f__38272__auto__();
(statearr_39429[(6)] = c__38271__auto___40345);

return statearr_39429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39431 = arguments.length;
switch (G__39431) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39433 = arguments.length;
switch (G__39433) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39435 = arguments.length;
switch (G__39435) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__38271__auto___40380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_39478){
var state_val_39479 = (state_39478[(1)]);
if((state_val_39479 === (7))){
var state_39478__$1 = state_39478;
var statearr_39480_40381 = state_39478__$1;
(statearr_39480_40381[(2)] = null);

(statearr_39480_40381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (1))){
var state_39478__$1 = state_39478;
var statearr_39481_40382 = state_39478__$1;
(statearr_39481_40382[(2)] = null);

(statearr_39481_40382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (4))){
var inst_39439 = (state_39478[(7)]);
var inst_39438 = (state_39478[(8)]);
var inst_39441 = (inst_39439 < inst_39438);
var state_39478__$1 = state_39478;
if(cljs.core.truth_(inst_39441)){
var statearr_39482_40383 = state_39478__$1;
(statearr_39482_40383[(1)] = (6));

} else {
var statearr_39483_40384 = state_39478__$1;
(statearr_39483_40384[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (15))){
var inst_39464 = (state_39478[(9)]);
var inst_39469 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39464);
var state_39478__$1 = state_39478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39478__$1,(17),out,inst_39469);
} else {
if((state_val_39479 === (13))){
var inst_39464 = (state_39478[(9)]);
var inst_39464__$1 = (state_39478[(2)]);
var inst_39465 = cljs.core.some(cljs.core.nil_QMARK_,inst_39464__$1);
var state_39478__$1 = (function (){var statearr_39484 = state_39478;
(statearr_39484[(9)] = inst_39464__$1);

return statearr_39484;
})();
if(cljs.core.truth_(inst_39465)){
var statearr_39485_40385 = state_39478__$1;
(statearr_39485_40385[(1)] = (14));

} else {
var statearr_39486_40386 = state_39478__$1;
(statearr_39486_40386[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (6))){
var state_39478__$1 = state_39478;
var statearr_39487_40387 = state_39478__$1;
(statearr_39487_40387[(2)] = null);

(statearr_39487_40387[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (17))){
var inst_39471 = (state_39478[(2)]);
var state_39478__$1 = (function (){var statearr_39489 = state_39478;
(statearr_39489[(10)] = inst_39471);

return statearr_39489;
})();
var statearr_39490_40388 = state_39478__$1;
(statearr_39490_40388[(2)] = null);

(statearr_39490_40388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (3))){
var inst_39476 = (state_39478[(2)]);
var state_39478__$1 = state_39478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39478__$1,inst_39476);
} else {
if((state_val_39479 === (12))){
var _ = (function (){var statearr_39494 = state_39478;
(statearr_39494[(4)] = cljs.core.rest((state_39478[(4)])));

return statearr_39494;
})();
var state_39478__$1 = state_39478;
var ex39488 = (state_39478__$1[(2)]);
var statearr_39497_40389 = state_39478__$1;
(statearr_39497_40389[(5)] = ex39488);


if((ex39488 instanceof Object)){
var statearr_39499_40390 = state_39478__$1;
(statearr_39499_40390[(1)] = (11));

(statearr_39499_40390[(5)] = null);

} else {
throw ex39488;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (2))){
var inst_39437 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39438 = cnt;
var inst_39439 = (0);
var state_39478__$1 = (function (){var statearr_39501 = state_39478;
(statearr_39501[(7)] = inst_39439);

(statearr_39501[(8)] = inst_39438);

(statearr_39501[(11)] = inst_39437);

return statearr_39501;
})();
var statearr_39502_40391 = state_39478__$1;
(statearr_39502_40391[(2)] = null);

(statearr_39502_40391[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (11))){
var inst_39443 = (state_39478[(2)]);
var inst_39444 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39478__$1 = (function (){var statearr_39503 = state_39478;
(statearr_39503[(12)] = inst_39443);

return statearr_39503;
})();
var statearr_39504_40392 = state_39478__$1;
(statearr_39504_40392[(2)] = inst_39444);

(statearr_39504_40392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (9))){
var inst_39439 = (state_39478[(7)]);
var _ = (function (){var statearr_39505 = state_39478;
(statearr_39505[(4)] = cljs.core.cons((12),(state_39478[(4)])));

return statearr_39505;
})();
var inst_39450 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39439) : chs__$1.call(null,inst_39439));
var inst_39451 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39439) : done.call(null,inst_39439));
var inst_39452 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39450,inst_39451);
var ___$1 = (function (){var statearr_39506 = state_39478;
(statearr_39506[(4)] = cljs.core.rest((state_39478[(4)])));

return statearr_39506;
})();
var state_39478__$1 = state_39478;
var statearr_39507_40393 = state_39478__$1;
(statearr_39507_40393[(2)] = inst_39452);

(statearr_39507_40393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (5))){
var inst_39462 = (state_39478[(2)]);
var state_39478__$1 = (function (){var statearr_39510 = state_39478;
(statearr_39510[(13)] = inst_39462);

return statearr_39510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39478__$1,(13),dchan);
} else {
if((state_val_39479 === (14))){
var inst_39467 = cljs.core.async.close_BANG_(out);
var state_39478__$1 = state_39478;
var statearr_39511_40394 = state_39478__$1;
(statearr_39511_40394[(2)] = inst_39467);

(statearr_39511_40394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (16))){
var inst_39474 = (state_39478[(2)]);
var state_39478__$1 = state_39478;
var statearr_39513_40395 = state_39478__$1;
(statearr_39513_40395[(2)] = inst_39474);

(statearr_39513_40395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (10))){
var inst_39439 = (state_39478[(7)]);
var inst_39455 = (state_39478[(2)]);
var inst_39456 = (inst_39439 + (1));
var inst_39439__$1 = inst_39456;
var state_39478__$1 = (function (){var statearr_39514 = state_39478;
(statearr_39514[(14)] = inst_39455);

(statearr_39514[(7)] = inst_39439__$1);

return statearr_39514;
})();
var statearr_39515_40396 = state_39478__$1;
(statearr_39515_40396[(2)] = null);

(statearr_39515_40396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39479 === (8))){
var inst_39460 = (state_39478[(2)]);
var state_39478__$1 = state_39478;
var statearr_39520_40397 = state_39478__$1;
(statearr_39520_40397[(2)] = inst_39460);

(statearr_39520_40397[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37994__auto__ = null;
var cljs$core$async$state_machine__37994__auto____0 = (function (){
var statearr_39521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39521[(0)] = cljs$core$async$state_machine__37994__auto__);

(statearr_39521[(1)] = (1));

return statearr_39521;
});
var cljs$core$async$state_machine__37994__auto____1 = (function (state_39478){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_39478);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e39522){var ex__37997__auto__ = e39522;
var statearr_39523_40398 = state_39478;
(statearr_39523_40398[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_39478[(4)]))){
var statearr_39524_40399 = state_39478;
(statearr_39524_40399[(1)] = cljs.core.first((state_39478[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40400 = state_39478;
state_39478 = G__40400;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$state_machine__37994__auto__ = function(state_39478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37994__auto____1.call(this,state_39478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37994__auto____0;
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37994__auto____1;
return cljs$core$async$state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_39525 = f__38272__auto__();
(statearr_39525[(6)] = c__38271__auto___40380);

return statearr_39525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39528 = arguments.length;
switch (G__39528) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38271__auto___40402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_39564){
var state_val_39565 = (state_39564[(1)]);
if((state_val_39565 === (7))){
var inst_39543 = (state_39564[(7)]);
var inst_39544 = (state_39564[(8)]);
var inst_39543__$1 = (state_39564[(2)]);
var inst_39544__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39543__$1,(0),null);
var inst_39545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39543__$1,(1),null);
var inst_39546 = (inst_39544__$1 == null);
var state_39564__$1 = (function (){var statearr_39566 = state_39564;
(statearr_39566[(7)] = inst_39543__$1);

(statearr_39566[(9)] = inst_39545);

(statearr_39566[(8)] = inst_39544__$1);

return statearr_39566;
})();
if(cljs.core.truth_(inst_39546)){
var statearr_39567_40403 = state_39564__$1;
(statearr_39567_40403[(1)] = (8));

} else {
var statearr_39568_40404 = state_39564__$1;
(statearr_39568_40404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (1))){
var inst_39530 = cljs.core.vec(chs);
var inst_39534 = inst_39530;
var state_39564__$1 = (function (){var statearr_39569 = state_39564;
(statearr_39569[(10)] = inst_39534);

return statearr_39569;
})();
var statearr_39570_40405 = state_39564__$1;
(statearr_39570_40405[(2)] = null);

(statearr_39570_40405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (4))){
var inst_39534 = (state_39564[(10)]);
var state_39564__$1 = state_39564;
return cljs.core.async.ioc_alts_BANG_(state_39564__$1,(7),inst_39534);
} else {
if((state_val_39565 === (6))){
var inst_39560 = (state_39564[(2)]);
var state_39564__$1 = state_39564;
var statearr_39571_40406 = state_39564__$1;
(statearr_39571_40406[(2)] = inst_39560);

(statearr_39571_40406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (3))){
var inst_39562 = (state_39564[(2)]);
var state_39564__$1 = state_39564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39564__$1,inst_39562);
} else {
if((state_val_39565 === (2))){
var inst_39534 = (state_39564[(10)]);
var inst_39536 = cljs.core.count(inst_39534);
var inst_39537 = (inst_39536 > (0));
var state_39564__$1 = state_39564;
if(cljs.core.truth_(inst_39537)){
var statearr_39574_40407 = state_39564__$1;
(statearr_39574_40407[(1)] = (4));

} else {
var statearr_39575_40408 = state_39564__$1;
(statearr_39575_40408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (11))){
var inst_39534 = (state_39564[(10)]);
var inst_39553 = (state_39564[(2)]);
var tmp39572 = inst_39534;
var inst_39534__$1 = tmp39572;
var state_39564__$1 = (function (){var statearr_39576 = state_39564;
(statearr_39576[(10)] = inst_39534__$1);

(statearr_39576[(11)] = inst_39553);

return statearr_39576;
})();
var statearr_39577_40409 = state_39564__$1;
(statearr_39577_40409[(2)] = null);

(statearr_39577_40409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (9))){
var inst_39544 = (state_39564[(8)]);
var state_39564__$1 = state_39564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39564__$1,(11),out,inst_39544);
} else {
if((state_val_39565 === (5))){
var inst_39558 = cljs.core.async.close_BANG_(out);
var state_39564__$1 = state_39564;
var statearr_39578_40410 = state_39564__$1;
(statearr_39578_40410[(2)] = inst_39558);

(statearr_39578_40410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (10))){
var inst_39556 = (state_39564[(2)]);
var state_39564__$1 = state_39564;
var statearr_39579_40411 = state_39564__$1;
(statearr_39579_40411[(2)] = inst_39556);

(statearr_39579_40411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (8))){
var inst_39543 = (state_39564[(7)]);
var inst_39534 = (state_39564[(10)]);
var inst_39545 = (state_39564[(9)]);
var inst_39544 = (state_39564[(8)]);
var inst_39548 = (function (){var cs = inst_39534;
var vec__39539 = inst_39543;
var v = inst_39544;
var c = inst_39545;
return (function (p1__39526_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39526_SHARP_);
});
})();
var inst_39549 = cljs.core.filterv(inst_39548,inst_39534);
var inst_39534__$1 = inst_39549;
var state_39564__$1 = (function (){var statearr_39581 = state_39564;
(statearr_39581[(10)] = inst_39534__$1);

return statearr_39581;
})();
var statearr_39582_40412 = state_39564__$1;
(statearr_39582_40412[(2)] = null);

(statearr_39582_40412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37994__auto__ = null;
var cljs$core$async$state_machine__37994__auto____0 = (function (){
var statearr_39584 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39584[(0)] = cljs$core$async$state_machine__37994__auto__);

(statearr_39584[(1)] = (1));

return statearr_39584;
});
var cljs$core$async$state_machine__37994__auto____1 = (function (state_39564){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_39564);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e39585){var ex__37997__auto__ = e39585;
var statearr_39586_40413 = state_39564;
(statearr_39586_40413[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_39564[(4)]))){
var statearr_39587_40414 = state_39564;
(statearr_39587_40414[(1)] = cljs.core.first((state_39564[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40415 = state_39564;
state_39564 = G__40415;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$state_machine__37994__auto__ = function(state_39564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37994__auto____1.call(this,state_39564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37994__auto____0;
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37994__auto____1;
return cljs$core$async$state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_39588 = f__38272__auto__();
(statearr_39588[(6)] = c__38271__auto___40402);

return statearr_39588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39594 = arguments.length;
switch (G__39594) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38271__auto___40417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_39618){
var state_val_39619 = (state_39618[(1)]);
if((state_val_39619 === (7))){
var inst_39600 = (state_39618[(7)]);
var inst_39600__$1 = (state_39618[(2)]);
var inst_39601 = (inst_39600__$1 == null);
var inst_39602 = cljs.core.not(inst_39601);
var state_39618__$1 = (function (){var statearr_39624 = state_39618;
(statearr_39624[(7)] = inst_39600__$1);

return statearr_39624;
})();
if(inst_39602){
var statearr_39625_40418 = state_39618__$1;
(statearr_39625_40418[(1)] = (8));

} else {
var statearr_39626_40419 = state_39618__$1;
(statearr_39626_40419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39619 === (1))){
var inst_39595 = (0);
var state_39618__$1 = (function (){var statearr_39627 = state_39618;
(statearr_39627[(8)] = inst_39595);

return statearr_39627;
})();
var statearr_39628_40420 = state_39618__$1;
(statearr_39628_40420[(2)] = null);

(statearr_39628_40420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39619 === (4))){
var state_39618__$1 = state_39618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39618__$1,(7),ch);
} else {
if((state_val_39619 === (6))){
var inst_39613 = (state_39618[(2)]);
var state_39618__$1 = state_39618;
var statearr_39629_40421 = state_39618__$1;
(statearr_39629_40421[(2)] = inst_39613);

(statearr_39629_40421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39619 === (3))){
var inst_39615 = (state_39618[(2)]);
var inst_39616 = cljs.core.async.close_BANG_(out);
var state_39618__$1 = (function (){var statearr_39631 = state_39618;
(statearr_39631[(9)] = inst_39615);

return statearr_39631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39618__$1,inst_39616);
} else {
if((state_val_39619 === (2))){
var inst_39595 = (state_39618[(8)]);
var inst_39597 = (inst_39595 < n);
var state_39618__$1 = state_39618;
if(cljs.core.truth_(inst_39597)){
var statearr_39632_40422 = state_39618__$1;
(statearr_39632_40422[(1)] = (4));

} else {
var statearr_39633_40423 = state_39618__$1;
(statearr_39633_40423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39619 === (11))){
var inst_39595 = (state_39618[(8)]);
var inst_39605 = (state_39618[(2)]);
var inst_39606 = (inst_39595 + (1));
var inst_39595__$1 = inst_39606;
var state_39618__$1 = (function (){var statearr_39634 = state_39618;
(statearr_39634[(10)] = inst_39605);

(statearr_39634[(8)] = inst_39595__$1);

return statearr_39634;
})();
var statearr_39635_40424 = state_39618__$1;
(statearr_39635_40424[(2)] = null);

(statearr_39635_40424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39619 === (9))){
var state_39618__$1 = state_39618;
var statearr_39636_40425 = state_39618__$1;
(statearr_39636_40425[(2)] = null);

(statearr_39636_40425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39619 === (5))){
var state_39618__$1 = state_39618;
var statearr_39637_40426 = state_39618__$1;
(statearr_39637_40426[(2)] = null);

(statearr_39637_40426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39619 === (10))){
var inst_39610 = (state_39618[(2)]);
var state_39618__$1 = state_39618;
var statearr_39638_40427 = state_39618__$1;
(statearr_39638_40427[(2)] = inst_39610);

(statearr_39638_40427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39619 === (8))){
var inst_39600 = (state_39618[(7)]);
var state_39618__$1 = state_39618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39618__$1,(11),out,inst_39600);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37994__auto__ = null;
var cljs$core$async$state_machine__37994__auto____0 = (function (){
var statearr_39639 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39639[(0)] = cljs$core$async$state_machine__37994__auto__);

(statearr_39639[(1)] = (1));

return statearr_39639;
});
var cljs$core$async$state_machine__37994__auto____1 = (function (state_39618){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_39618);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e39640){var ex__37997__auto__ = e39640;
var statearr_39641_40428 = state_39618;
(statearr_39641_40428[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_39618[(4)]))){
var statearr_39642_40429 = state_39618;
(statearr_39642_40429[(1)] = cljs.core.first((state_39618[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40430 = state_39618;
state_39618 = G__40430;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$state_machine__37994__auto__ = function(state_39618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37994__auto____1.call(this,state_39618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37994__auto____0;
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37994__auto____1;
return cljs$core$async$state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_39643 = f__38272__auto__();
(statearr_39643[(6)] = c__38271__auto___40417);

return statearr_39643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39645 = (function (f,ch,meta39646){
this.f = f;
this.ch = ch;
this.meta39646 = meta39646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39647,meta39646__$1){
var self__ = this;
var _39647__$1 = this;
return (new cljs.core.async.t_cljs$core$async39645(self__.f,self__.ch,meta39646__$1));
}));

(cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39647){
var self__ = this;
var _39647__$1 = this;
return self__.meta39646;
}));

(cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39648 = (function (f,ch,meta39646,_,fn1,meta39649){
this.f = f;
this.ch = ch;
this.meta39646 = meta39646;
this._ = _;
this.fn1 = fn1;
this.meta39649 = meta39649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39650,meta39649__$1){
var self__ = this;
var _39650__$1 = this;
return (new cljs.core.async.t_cljs$core$async39648(self__.f,self__.ch,self__.meta39646,self__._,self__.fn1,meta39649__$1));
}));

(cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39650){
var self__ = this;
var _39650__$1 = this;
return self__.meta39649;
}));

(cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__39644_SHARP_){
var G__39651 = (((p1__39644_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39644_SHARP_) : self__.f.call(null,p1__39644_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39651) : f1.call(null,G__39651));
});
}));

(cljs.core.async.t_cljs$core$async39648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39646","meta39646",-810698807,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39645","cljs.core.async/t_cljs$core$async39645",906581068,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39649","meta39649",-994272978,null)], null);
}));

(cljs.core.async.t_cljs$core$async39648.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39648");

(cljs.core.async.t_cljs$core$async39648.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39648");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39648.
 */
cljs.core.async.__GT_t_cljs$core$async39648 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39648(f__$1,ch__$1,meta39646__$1,___$2,fn1__$1,meta39649){
return (new cljs.core.async.t_cljs$core$async39648(f__$1,ch__$1,meta39646__$1,___$2,fn1__$1,meta39649));
});

}

return (new cljs.core.async.t_cljs$core$async39648(self__.f,self__.ch,self__.meta39646,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39652 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39652) : self__.f.call(null,G__39652));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async39645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39646","meta39646",-810698807,null)], null);
}));

(cljs.core.async.t_cljs$core$async39645.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39645");

(cljs.core.async.t_cljs$core$async39645.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39645");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39645.
 */
cljs.core.async.__GT_t_cljs$core$async39645 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39645(f__$1,ch__$1,meta39646){
return (new cljs.core.async.t_cljs$core$async39645(f__$1,ch__$1,meta39646));
});

}

return (new cljs.core.async.t_cljs$core$async39645(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39653 = (function (f,ch,meta39654){
this.f = f;
this.ch = ch;
this.meta39654 = meta39654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39655,meta39654__$1){
var self__ = this;
var _39655__$1 = this;
return (new cljs.core.async.t_cljs$core$async39653(self__.f,self__.ch,meta39654__$1));
}));

(cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39655){
var self__ = this;
var _39655__$1 = this;
return self__.meta39654;
}));

(cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async39653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39654","meta39654",-22102884,null)], null);
}));

(cljs.core.async.t_cljs$core$async39653.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39653");

(cljs.core.async.t_cljs$core$async39653.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39653");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39653.
 */
cljs.core.async.__GT_t_cljs$core$async39653 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39653(f__$1,ch__$1,meta39654){
return (new cljs.core.async.t_cljs$core$async39653(f__$1,ch__$1,meta39654));
});

}

return (new cljs.core.async.t_cljs$core$async39653(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39656 = (function (p,ch,meta39657){
this.p = p;
this.ch = ch;
this.meta39657 = meta39657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39658,meta39657__$1){
var self__ = this;
var _39658__$1 = this;
return (new cljs.core.async.t_cljs$core$async39656(self__.p,self__.ch,meta39657__$1));
}));

(cljs.core.async.t_cljs$core$async39656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39658){
var self__ = this;
var _39658__$1 = this;
return self__.meta39657;
}));

(cljs.core.async.t_cljs$core$async39656.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39656.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39656.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39656.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async39656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39657","meta39657",1486685134,null)], null);
}));

(cljs.core.async.t_cljs$core$async39656.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39656");

(cljs.core.async.t_cljs$core$async39656.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39656");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39656.
 */
cljs.core.async.__GT_t_cljs$core$async39656 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39656(p__$1,ch__$1,meta39657){
return (new cljs.core.async.t_cljs$core$async39656(p__$1,ch__$1,meta39657));
});

}

return (new cljs.core.async.t_cljs$core$async39656(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39660 = arguments.length;
switch (G__39660) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38271__auto___40432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_39681){
var state_val_39682 = (state_39681[(1)]);
if((state_val_39682 === (7))){
var inst_39677 = (state_39681[(2)]);
var state_39681__$1 = state_39681;
var statearr_39683_40433 = state_39681__$1;
(statearr_39683_40433[(2)] = inst_39677);

(statearr_39683_40433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39682 === (1))){
var state_39681__$1 = state_39681;
var statearr_39684_40434 = state_39681__$1;
(statearr_39684_40434[(2)] = null);

(statearr_39684_40434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39682 === (4))){
var inst_39663 = (state_39681[(7)]);
var inst_39663__$1 = (state_39681[(2)]);
var inst_39664 = (inst_39663__$1 == null);
var state_39681__$1 = (function (){var statearr_39685 = state_39681;
(statearr_39685[(7)] = inst_39663__$1);

return statearr_39685;
})();
if(cljs.core.truth_(inst_39664)){
var statearr_39686_40435 = state_39681__$1;
(statearr_39686_40435[(1)] = (5));

} else {
var statearr_39687_40436 = state_39681__$1;
(statearr_39687_40436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39682 === (6))){
var inst_39663 = (state_39681[(7)]);
var inst_39668 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39663) : p.call(null,inst_39663));
var state_39681__$1 = state_39681;
if(cljs.core.truth_(inst_39668)){
var statearr_39688_40437 = state_39681__$1;
(statearr_39688_40437[(1)] = (8));

} else {
var statearr_39689_40438 = state_39681__$1;
(statearr_39689_40438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39682 === (3))){
var inst_39679 = (state_39681[(2)]);
var state_39681__$1 = state_39681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39681__$1,inst_39679);
} else {
if((state_val_39682 === (2))){
var state_39681__$1 = state_39681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39681__$1,(4),ch);
} else {
if((state_val_39682 === (11))){
var inst_39671 = (state_39681[(2)]);
var state_39681__$1 = state_39681;
var statearr_39690_40439 = state_39681__$1;
(statearr_39690_40439[(2)] = inst_39671);

(statearr_39690_40439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39682 === (9))){
var state_39681__$1 = state_39681;
var statearr_39691_40440 = state_39681__$1;
(statearr_39691_40440[(2)] = null);

(statearr_39691_40440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39682 === (5))){
var inst_39666 = cljs.core.async.close_BANG_(out);
var state_39681__$1 = state_39681;
var statearr_39692_40441 = state_39681__$1;
(statearr_39692_40441[(2)] = inst_39666);

(statearr_39692_40441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39682 === (10))){
var inst_39674 = (state_39681[(2)]);
var state_39681__$1 = (function (){var statearr_39693 = state_39681;
(statearr_39693[(8)] = inst_39674);

return statearr_39693;
})();
var statearr_39694_40442 = state_39681__$1;
(statearr_39694_40442[(2)] = null);

(statearr_39694_40442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39682 === (8))){
var inst_39663 = (state_39681[(7)]);
var state_39681__$1 = state_39681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39681__$1,(11),out,inst_39663);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37994__auto__ = null;
var cljs$core$async$state_machine__37994__auto____0 = (function (){
var statearr_39695 = [null,null,null,null,null,null,null,null,null];
(statearr_39695[(0)] = cljs$core$async$state_machine__37994__auto__);

(statearr_39695[(1)] = (1));

return statearr_39695;
});
var cljs$core$async$state_machine__37994__auto____1 = (function (state_39681){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_39681);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e39696){var ex__37997__auto__ = e39696;
var statearr_39697_40443 = state_39681;
(statearr_39697_40443[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_39681[(4)]))){
var statearr_39698_40444 = state_39681;
(statearr_39698_40444[(1)] = cljs.core.first((state_39681[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40445 = state_39681;
state_39681 = G__40445;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$state_machine__37994__auto__ = function(state_39681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37994__auto____1.call(this,state_39681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37994__auto____0;
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37994__auto____1;
return cljs$core$async$state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_39699 = f__38272__auto__();
(statearr_39699[(6)] = c__38271__auto___40432);

return statearr_39699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39701 = arguments.length;
switch (G__39701) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_39764){
var state_val_39765 = (state_39764[(1)]);
if((state_val_39765 === (7))){
var inst_39760 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39766_40447 = state_39764__$1;
(statearr_39766_40447[(2)] = inst_39760);

(statearr_39766_40447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (20))){
var inst_39730 = (state_39764[(7)]);
var inst_39741 = (state_39764[(2)]);
var inst_39742 = cljs.core.next(inst_39730);
var inst_39716 = inst_39742;
var inst_39717 = null;
var inst_39718 = (0);
var inst_39719 = (0);
var state_39764__$1 = (function (){var statearr_39767 = state_39764;
(statearr_39767[(8)] = inst_39741);

(statearr_39767[(9)] = inst_39716);

(statearr_39767[(10)] = inst_39717);

(statearr_39767[(11)] = inst_39718);

(statearr_39767[(12)] = inst_39719);

return statearr_39767;
})();
var statearr_39768_40448 = state_39764__$1;
(statearr_39768_40448[(2)] = null);

(statearr_39768_40448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (1))){
var state_39764__$1 = state_39764;
var statearr_39769_40449 = state_39764__$1;
(statearr_39769_40449[(2)] = null);

(statearr_39769_40449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (4))){
var inst_39704 = (state_39764[(13)]);
var inst_39704__$1 = (state_39764[(2)]);
var inst_39705 = (inst_39704__$1 == null);
var state_39764__$1 = (function (){var statearr_39770 = state_39764;
(statearr_39770[(13)] = inst_39704__$1);

return statearr_39770;
})();
if(cljs.core.truth_(inst_39705)){
var statearr_39771_40450 = state_39764__$1;
(statearr_39771_40450[(1)] = (5));

} else {
var statearr_39772_40451 = state_39764__$1;
(statearr_39772_40451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (15))){
var state_39764__$1 = state_39764;
var statearr_39776_40452 = state_39764__$1;
(statearr_39776_40452[(2)] = null);

(statearr_39776_40452[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (21))){
var state_39764__$1 = state_39764;
var statearr_39783_40453 = state_39764__$1;
(statearr_39783_40453[(2)] = null);

(statearr_39783_40453[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (13))){
var inst_39716 = (state_39764[(9)]);
var inst_39717 = (state_39764[(10)]);
var inst_39718 = (state_39764[(11)]);
var inst_39719 = (state_39764[(12)]);
var inst_39726 = (state_39764[(2)]);
var inst_39727 = (inst_39719 + (1));
var tmp39773 = inst_39716;
var tmp39774 = inst_39717;
var tmp39775 = inst_39718;
var inst_39716__$1 = tmp39773;
var inst_39717__$1 = tmp39774;
var inst_39718__$1 = tmp39775;
var inst_39719__$1 = inst_39727;
var state_39764__$1 = (function (){var statearr_39785 = state_39764;
(statearr_39785[(9)] = inst_39716__$1);

(statearr_39785[(10)] = inst_39717__$1);

(statearr_39785[(11)] = inst_39718__$1);

(statearr_39785[(12)] = inst_39719__$1);

(statearr_39785[(14)] = inst_39726);

return statearr_39785;
})();
var statearr_39786_40454 = state_39764__$1;
(statearr_39786_40454[(2)] = null);

(statearr_39786_40454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (22))){
var state_39764__$1 = state_39764;
var statearr_39787_40455 = state_39764__$1;
(statearr_39787_40455[(2)] = null);

(statearr_39787_40455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (6))){
var inst_39704 = (state_39764[(13)]);
var inst_39713 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39704) : f.call(null,inst_39704));
var inst_39714 = cljs.core.seq(inst_39713);
var inst_39716 = inst_39714;
var inst_39717 = null;
var inst_39718 = (0);
var inst_39719 = (0);
var state_39764__$1 = (function (){var statearr_39788 = state_39764;
(statearr_39788[(9)] = inst_39716);

(statearr_39788[(10)] = inst_39717);

(statearr_39788[(11)] = inst_39718);

(statearr_39788[(12)] = inst_39719);

return statearr_39788;
})();
var statearr_39789_40456 = state_39764__$1;
(statearr_39789_40456[(2)] = null);

(statearr_39789_40456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (17))){
var inst_39730 = (state_39764[(7)]);
var inst_39734 = cljs.core.chunk_first(inst_39730);
var inst_39735 = cljs.core.chunk_rest(inst_39730);
var inst_39736 = cljs.core.count(inst_39734);
var inst_39716 = inst_39735;
var inst_39717 = inst_39734;
var inst_39718 = inst_39736;
var inst_39719 = (0);
var state_39764__$1 = (function (){var statearr_39790 = state_39764;
(statearr_39790[(9)] = inst_39716);

(statearr_39790[(10)] = inst_39717);

(statearr_39790[(11)] = inst_39718);

(statearr_39790[(12)] = inst_39719);

return statearr_39790;
})();
var statearr_39791_40457 = state_39764__$1;
(statearr_39791_40457[(2)] = null);

(statearr_39791_40457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (3))){
var inst_39762 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39764__$1,inst_39762);
} else {
if((state_val_39765 === (12))){
var inst_39750 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39792_40458 = state_39764__$1;
(statearr_39792_40458[(2)] = inst_39750);

(statearr_39792_40458[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (2))){
var state_39764__$1 = state_39764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39764__$1,(4),in$);
} else {
if((state_val_39765 === (23))){
var inst_39758 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39793_40459 = state_39764__$1;
(statearr_39793_40459[(2)] = inst_39758);

(statearr_39793_40459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (19))){
var inst_39745 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39794_40460 = state_39764__$1;
(statearr_39794_40460[(2)] = inst_39745);

(statearr_39794_40460[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (11))){
var inst_39730 = (state_39764[(7)]);
var inst_39716 = (state_39764[(9)]);
var inst_39730__$1 = cljs.core.seq(inst_39716);
var state_39764__$1 = (function (){var statearr_39795 = state_39764;
(statearr_39795[(7)] = inst_39730__$1);

return statearr_39795;
})();
if(inst_39730__$1){
var statearr_39796_40461 = state_39764__$1;
(statearr_39796_40461[(1)] = (14));

} else {
var statearr_39797_40462 = state_39764__$1;
(statearr_39797_40462[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (9))){
var inst_39752 = (state_39764[(2)]);
var inst_39753 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39764__$1 = (function (){var statearr_39798 = state_39764;
(statearr_39798[(15)] = inst_39752);

return statearr_39798;
})();
if(cljs.core.truth_(inst_39753)){
var statearr_39799_40463 = state_39764__$1;
(statearr_39799_40463[(1)] = (21));

} else {
var statearr_39800_40464 = state_39764__$1;
(statearr_39800_40464[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (5))){
var inst_39707 = cljs.core.async.close_BANG_(out);
var state_39764__$1 = state_39764;
var statearr_39801_40465 = state_39764__$1;
(statearr_39801_40465[(2)] = inst_39707);

(statearr_39801_40465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (14))){
var inst_39730 = (state_39764[(7)]);
var inst_39732 = cljs.core.chunked_seq_QMARK_(inst_39730);
var state_39764__$1 = state_39764;
if(inst_39732){
var statearr_39802_40466 = state_39764__$1;
(statearr_39802_40466[(1)] = (17));

} else {
var statearr_39803_40467 = state_39764__$1;
(statearr_39803_40467[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (16))){
var inst_39748 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39804_40468 = state_39764__$1;
(statearr_39804_40468[(2)] = inst_39748);

(statearr_39804_40468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (10))){
var inst_39717 = (state_39764[(10)]);
var inst_39719 = (state_39764[(12)]);
var inst_39724 = cljs.core._nth(inst_39717,inst_39719);
var state_39764__$1 = state_39764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39764__$1,(13),out,inst_39724);
} else {
if((state_val_39765 === (18))){
var inst_39730 = (state_39764[(7)]);
var inst_39739 = cljs.core.first(inst_39730);
var state_39764__$1 = state_39764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39764__$1,(20),out,inst_39739);
} else {
if((state_val_39765 === (8))){
var inst_39718 = (state_39764[(11)]);
var inst_39719 = (state_39764[(12)]);
var inst_39721 = (inst_39719 < inst_39718);
var inst_39722 = inst_39721;
var state_39764__$1 = state_39764;
if(cljs.core.truth_(inst_39722)){
var statearr_39805_40469 = state_39764__$1;
(statearr_39805_40469[(1)] = (10));

} else {
var statearr_39806_40470 = state_39764__$1;
(statearr_39806_40470[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37994__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37994__auto____0 = (function (){
var statearr_39807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39807[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37994__auto__);

(statearr_39807[(1)] = (1));

return statearr_39807;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37994__auto____1 = (function (state_39764){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_39764);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e39808){var ex__37997__auto__ = e39808;
var statearr_39809_40471 = state_39764;
(statearr_39809_40471[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_39764[(4)]))){
var statearr_39810_40472 = state_39764;
(statearr_39810_40472[(1)] = cljs.core.first((state_39764[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40473 = state_39764;
state_39764 = G__40473;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37994__auto__ = function(state_39764){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37994__auto____1.call(this,state_39764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37994__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37994__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_39811 = f__38272__auto__();
(statearr_39811[(6)] = c__38271__auto__);

return statearr_39811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));

return c__38271__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39815 = arguments.length;
switch (G__39815) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39817 = arguments.length;
switch (G__39817) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39821 = arguments.length;
switch (G__39821) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38271__auto___40477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_39845){
var state_val_39846 = (state_39845[(1)]);
if((state_val_39846 === (7))){
var inst_39840 = (state_39845[(2)]);
var state_39845__$1 = state_39845;
var statearr_39847_40478 = state_39845__$1;
(statearr_39847_40478[(2)] = inst_39840);

(statearr_39847_40478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (1))){
var inst_39822 = null;
var state_39845__$1 = (function (){var statearr_39848 = state_39845;
(statearr_39848[(7)] = inst_39822);

return statearr_39848;
})();
var statearr_39849_40479 = state_39845__$1;
(statearr_39849_40479[(2)] = null);

(statearr_39849_40479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (4))){
var inst_39825 = (state_39845[(8)]);
var inst_39825__$1 = (state_39845[(2)]);
var inst_39826 = (inst_39825__$1 == null);
var inst_39827 = cljs.core.not(inst_39826);
var state_39845__$1 = (function (){var statearr_39850 = state_39845;
(statearr_39850[(8)] = inst_39825__$1);

return statearr_39850;
})();
if(inst_39827){
var statearr_39851_40480 = state_39845__$1;
(statearr_39851_40480[(1)] = (5));

} else {
var statearr_39852_40481 = state_39845__$1;
(statearr_39852_40481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (6))){
var state_39845__$1 = state_39845;
var statearr_39853_40482 = state_39845__$1;
(statearr_39853_40482[(2)] = null);

(statearr_39853_40482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (3))){
var inst_39842 = (state_39845[(2)]);
var inst_39843 = cljs.core.async.close_BANG_(out);
var state_39845__$1 = (function (){var statearr_39854 = state_39845;
(statearr_39854[(9)] = inst_39842);

return statearr_39854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39845__$1,inst_39843);
} else {
if((state_val_39846 === (2))){
var state_39845__$1 = state_39845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39845__$1,(4),ch);
} else {
if((state_val_39846 === (11))){
var inst_39825 = (state_39845[(8)]);
var inst_39834 = (state_39845[(2)]);
var inst_39822 = inst_39825;
var state_39845__$1 = (function (){var statearr_39855 = state_39845;
(statearr_39855[(7)] = inst_39822);

(statearr_39855[(10)] = inst_39834);

return statearr_39855;
})();
var statearr_39856_40483 = state_39845__$1;
(statearr_39856_40483[(2)] = null);

(statearr_39856_40483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (9))){
var inst_39825 = (state_39845[(8)]);
var state_39845__$1 = state_39845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39845__$1,(11),out,inst_39825);
} else {
if((state_val_39846 === (5))){
var inst_39822 = (state_39845[(7)]);
var inst_39825 = (state_39845[(8)]);
var inst_39829 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39825,inst_39822);
var state_39845__$1 = state_39845;
if(inst_39829){
var statearr_39858_40484 = state_39845__$1;
(statearr_39858_40484[(1)] = (8));

} else {
var statearr_39859_40485 = state_39845__$1;
(statearr_39859_40485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (10))){
var inst_39837 = (state_39845[(2)]);
var state_39845__$1 = state_39845;
var statearr_39860_40486 = state_39845__$1;
(statearr_39860_40486[(2)] = inst_39837);

(statearr_39860_40486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (8))){
var inst_39822 = (state_39845[(7)]);
var tmp39857 = inst_39822;
var inst_39822__$1 = tmp39857;
var state_39845__$1 = (function (){var statearr_39861 = state_39845;
(statearr_39861[(7)] = inst_39822__$1);

return statearr_39861;
})();
var statearr_39862_40487 = state_39845__$1;
(statearr_39862_40487[(2)] = null);

(statearr_39862_40487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37994__auto__ = null;
var cljs$core$async$state_machine__37994__auto____0 = (function (){
var statearr_39863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39863[(0)] = cljs$core$async$state_machine__37994__auto__);

(statearr_39863[(1)] = (1));

return statearr_39863;
});
var cljs$core$async$state_machine__37994__auto____1 = (function (state_39845){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_39845);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e39864){var ex__37997__auto__ = e39864;
var statearr_39865_40488 = state_39845;
(statearr_39865_40488[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_39845[(4)]))){
var statearr_39866_40489 = state_39845;
(statearr_39866_40489[(1)] = cljs.core.first((state_39845[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40490 = state_39845;
state_39845 = G__40490;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$state_machine__37994__auto__ = function(state_39845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37994__auto____1.call(this,state_39845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37994__auto____0;
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37994__auto____1;
return cljs$core$async$state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_39867 = f__38272__auto__();
(statearr_39867[(6)] = c__38271__auto___40477);

return statearr_39867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39869 = arguments.length;
switch (G__39869) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38271__auto___40492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_39911){
var state_val_39912 = (state_39911[(1)]);
if((state_val_39912 === (7))){
var inst_39907 = (state_39911[(2)]);
var state_39911__$1 = state_39911;
var statearr_39913_40493 = state_39911__$1;
(statearr_39913_40493[(2)] = inst_39907);

(statearr_39913_40493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (1))){
var inst_39874 = (new Array(n));
var inst_39875 = inst_39874;
var inst_39876 = (0);
var state_39911__$1 = (function (){var statearr_39914 = state_39911;
(statearr_39914[(7)] = inst_39876);

(statearr_39914[(8)] = inst_39875);

return statearr_39914;
})();
var statearr_39915_40494 = state_39911__$1;
(statearr_39915_40494[(2)] = null);

(statearr_39915_40494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (4))){
var inst_39879 = (state_39911[(9)]);
var inst_39879__$1 = (state_39911[(2)]);
var inst_39880 = (inst_39879__$1 == null);
var inst_39881 = cljs.core.not(inst_39880);
var state_39911__$1 = (function (){var statearr_39916 = state_39911;
(statearr_39916[(9)] = inst_39879__$1);

return statearr_39916;
})();
if(inst_39881){
var statearr_39917_40495 = state_39911__$1;
(statearr_39917_40495[(1)] = (5));

} else {
var statearr_39918_40496 = state_39911__$1;
(statearr_39918_40496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (15))){
var inst_39901 = (state_39911[(2)]);
var state_39911__$1 = state_39911;
var statearr_39919_40497 = state_39911__$1;
(statearr_39919_40497[(2)] = inst_39901);

(statearr_39919_40497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (13))){
var state_39911__$1 = state_39911;
var statearr_39920_40498 = state_39911__$1;
(statearr_39920_40498[(2)] = null);

(statearr_39920_40498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (6))){
var inst_39876 = (state_39911[(7)]);
var inst_39897 = (inst_39876 > (0));
var state_39911__$1 = state_39911;
if(cljs.core.truth_(inst_39897)){
var statearr_39921_40499 = state_39911__$1;
(statearr_39921_40499[(1)] = (12));

} else {
var statearr_39922_40500 = state_39911__$1;
(statearr_39922_40500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (3))){
var inst_39909 = (state_39911[(2)]);
var state_39911__$1 = state_39911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39911__$1,inst_39909);
} else {
if((state_val_39912 === (12))){
var inst_39875 = (state_39911[(8)]);
var inst_39899 = cljs.core.vec(inst_39875);
var state_39911__$1 = state_39911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39911__$1,(15),out,inst_39899);
} else {
if((state_val_39912 === (2))){
var state_39911__$1 = state_39911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39911__$1,(4),ch);
} else {
if((state_val_39912 === (11))){
var inst_39891 = (state_39911[(2)]);
var inst_39892 = (new Array(n));
var inst_39875 = inst_39892;
var inst_39876 = (0);
var state_39911__$1 = (function (){var statearr_39924 = state_39911;
(statearr_39924[(10)] = inst_39891);

(statearr_39924[(7)] = inst_39876);

(statearr_39924[(8)] = inst_39875);

return statearr_39924;
})();
var statearr_39925_40501 = state_39911__$1;
(statearr_39925_40501[(2)] = null);

(statearr_39925_40501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (9))){
var inst_39875 = (state_39911[(8)]);
var inst_39889 = cljs.core.vec(inst_39875);
var state_39911__$1 = state_39911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39911__$1,(11),out,inst_39889);
} else {
if((state_val_39912 === (5))){
var inst_39876 = (state_39911[(7)]);
var inst_39879 = (state_39911[(9)]);
var inst_39884 = (state_39911[(11)]);
var inst_39875 = (state_39911[(8)]);
var inst_39883 = (inst_39875[inst_39876] = inst_39879);
var inst_39884__$1 = (inst_39876 + (1));
var inst_39885 = (inst_39884__$1 < n);
var state_39911__$1 = (function (){var statearr_39926 = state_39911;
(statearr_39926[(11)] = inst_39884__$1);

(statearr_39926[(12)] = inst_39883);

return statearr_39926;
})();
if(cljs.core.truth_(inst_39885)){
var statearr_39927_40502 = state_39911__$1;
(statearr_39927_40502[(1)] = (8));

} else {
var statearr_39928_40503 = state_39911__$1;
(statearr_39928_40503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (14))){
var inst_39904 = (state_39911[(2)]);
var inst_39905 = cljs.core.async.close_BANG_(out);
var state_39911__$1 = (function (){var statearr_39934 = state_39911;
(statearr_39934[(13)] = inst_39904);

return statearr_39934;
})();
var statearr_39935_40504 = state_39911__$1;
(statearr_39935_40504[(2)] = inst_39905);

(statearr_39935_40504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (10))){
var inst_39895 = (state_39911[(2)]);
var state_39911__$1 = state_39911;
var statearr_39936_40505 = state_39911__$1;
(statearr_39936_40505[(2)] = inst_39895);

(statearr_39936_40505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (8))){
var inst_39884 = (state_39911[(11)]);
var inst_39875 = (state_39911[(8)]);
var tmp39930 = inst_39875;
var inst_39875__$1 = tmp39930;
var inst_39876 = inst_39884;
var state_39911__$1 = (function (){var statearr_39937 = state_39911;
(statearr_39937[(7)] = inst_39876);

(statearr_39937[(8)] = inst_39875__$1);

return statearr_39937;
})();
var statearr_39938_40506 = state_39911__$1;
(statearr_39938_40506[(2)] = null);

(statearr_39938_40506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37994__auto__ = null;
var cljs$core$async$state_machine__37994__auto____0 = (function (){
var statearr_39939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39939[(0)] = cljs$core$async$state_machine__37994__auto__);

(statearr_39939[(1)] = (1));

return statearr_39939;
});
var cljs$core$async$state_machine__37994__auto____1 = (function (state_39911){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_39911);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e39940){var ex__37997__auto__ = e39940;
var statearr_39941_40507 = state_39911;
(statearr_39941_40507[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_39911[(4)]))){
var statearr_39942_40508 = state_39911;
(statearr_39942_40508[(1)] = cljs.core.first((state_39911[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40509 = state_39911;
state_39911 = G__40509;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$state_machine__37994__auto__ = function(state_39911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37994__auto____1.call(this,state_39911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37994__auto____0;
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37994__auto____1;
return cljs$core$async$state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_39943 = f__38272__auto__();
(statearr_39943[(6)] = c__38271__auto___40492);

return statearr_39943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39945 = arguments.length;
switch (G__39945) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38271__auto___40511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_39990){
var state_val_39991 = (state_39990[(1)]);
if((state_val_39991 === (7))){
var inst_39986 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_39992_40512 = state_39990__$1;
(statearr_39992_40512[(2)] = inst_39986);

(statearr_39992_40512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (1))){
var inst_39946 = [];
var inst_39947 = inst_39946;
var inst_39948 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39990__$1 = (function (){var statearr_39993 = state_39990;
(statearr_39993[(7)] = inst_39948);

(statearr_39993[(8)] = inst_39947);

return statearr_39993;
})();
var statearr_39995_40513 = state_39990__$1;
(statearr_39995_40513[(2)] = null);

(statearr_39995_40513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (4))){
var inst_39951 = (state_39990[(9)]);
var inst_39951__$1 = (state_39990[(2)]);
var inst_39952 = (inst_39951__$1 == null);
var inst_39953 = cljs.core.not(inst_39952);
var state_39990__$1 = (function (){var statearr_39996 = state_39990;
(statearr_39996[(9)] = inst_39951__$1);

return statearr_39996;
})();
if(inst_39953){
var statearr_39997_40514 = state_39990__$1;
(statearr_39997_40514[(1)] = (5));

} else {
var statearr_39998_40515 = state_39990__$1;
(statearr_39998_40515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (15))){
var inst_39947 = (state_39990[(8)]);
var inst_39978 = cljs.core.vec(inst_39947);
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39990__$1,(18),out,inst_39978);
} else {
if((state_val_39991 === (13))){
var inst_39973 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_40003_40516 = state_39990__$1;
(statearr_40003_40516[(2)] = inst_39973);

(statearr_40003_40516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (6))){
var inst_39947 = (state_39990[(8)]);
var inst_39975 = inst_39947.length;
var inst_39976 = (inst_39975 > (0));
var state_39990__$1 = state_39990;
if(cljs.core.truth_(inst_39976)){
var statearr_40004_40517 = state_39990__$1;
(statearr_40004_40517[(1)] = (15));

} else {
var statearr_40005_40518 = state_39990__$1;
(statearr_40005_40518[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (17))){
var inst_39983 = (state_39990[(2)]);
var inst_39984 = cljs.core.async.close_BANG_(out);
var state_39990__$1 = (function (){var statearr_40006 = state_39990;
(statearr_40006[(10)] = inst_39983);

return statearr_40006;
})();
var statearr_40007_40519 = state_39990__$1;
(statearr_40007_40519[(2)] = inst_39984);

(statearr_40007_40519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (3))){
var inst_39988 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39990__$1,inst_39988);
} else {
if((state_val_39991 === (12))){
var inst_39947 = (state_39990[(8)]);
var inst_39966 = cljs.core.vec(inst_39947);
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39990__$1,(14),out,inst_39966);
} else {
if((state_val_39991 === (2))){
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39990__$1,(4),ch);
} else {
if((state_val_39991 === (11))){
var inst_39951 = (state_39990[(9)]);
var inst_39955 = (state_39990[(11)]);
var inst_39947 = (state_39990[(8)]);
var inst_39963 = inst_39947.push(inst_39951);
var tmp40008 = inst_39947;
var inst_39947__$1 = tmp40008;
var inst_39948 = inst_39955;
var state_39990__$1 = (function (){var statearr_40009 = state_39990;
(statearr_40009[(7)] = inst_39948);

(statearr_40009[(12)] = inst_39963);

(statearr_40009[(8)] = inst_39947__$1);

return statearr_40009;
})();
var statearr_40010_40520 = state_39990__$1;
(statearr_40010_40520[(2)] = null);

(statearr_40010_40520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (9))){
var inst_39948 = (state_39990[(7)]);
var inst_39959 = cljs.core.keyword_identical_QMARK_(inst_39948,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_39990__$1 = state_39990;
var statearr_40011_40521 = state_39990__$1;
(statearr_40011_40521[(2)] = inst_39959);

(statearr_40011_40521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (5))){
var inst_39951 = (state_39990[(9)]);
var inst_39948 = (state_39990[(7)]);
var inst_39956 = (state_39990[(13)]);
var inst_39955 = (state_39990[(11)]);
var inst_39955__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39951) : f.call(null,inst_39951));
var inst_39956__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39955__$1,inst_39948);
var state_39990__$1 = (function (){var statearr_40012 = state_39990;
(statearr_40012[(13)] = inst_39956__$1);

(statearr_40012[(11)] = inst_39955__$1);

return statearr_40012;
})();
if(inst_39956__$1){
var statearr_40013_40522 = state_39990__$1;
(statearr_40013_40522[(1)] = (8));

} else {
var statearr_40014_40523 = state_39990__$1;
(statearr_40014_40523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (14))){
var inst_39951 = (state_39990[(9)]);
var inst_39955 = (state_39990[(11)]);
var inst_39968 = (state_39990[(2)]);
var inst_39969 = [];
var inst_39970 = inst_39969.push(inst_39951);
var inst_39947 = inst_39969;
var inst_39948 = inst_39955;
var state_39990__$1 = (function (){var statearr_40015 = state_39990;
(statearr_40015[(7)] = inst_39948);

(statearr_40015[(14)] = inst_39968);

(statearr_40015[(15)] = inst_39970);

(statearr_40015[(8)] = inst_39947);

return statearr_40015;
})();
var statearr_40016_40524 = state_39990__$1;
(statearr_40016_40524[(2)] = null);

(statearr_40016_40524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (16))){
var state_39990__$1 = state_39990;
var statearr_40017_40525 = state_39990__$1;
(statearr_40017_40525[(2)] = null);

(statearr_40017_40525[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (10))){
var inst_39961 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
if(cljs.core.truth_(inst_39961)){
var statearr_40018_40526 = state_39990__$1;
(statearr_40018_40526[(1)] = (11));

} else {
var statearr_40019_40527 = state_39990__$1;
(statearr_40019_40527[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (18))){
var inst_39980 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_40020_40528 = state_39990__$1;
(statearr_40020_40528[(2)] = inst_39980);

(statearr_40020_40528[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (8))){
var inst_39956 = (state_39990[(13)]);
var state_39990__$1 = state_39990;
var statearr_40021_40529 = state_39990__$1;
(statearr_40021_40529[(2)] = inst_39956);

(statearr_40021_40529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37994__auto__ = null;
var cljs$core$async$state_machine__37994__auto____0 = (function (){
var statearr_40022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40022[(0)] = cljs$core$async$state_machine__37994__auto__);

(statearr_40022[(1)] = (1));

return statearr_40022;
});
var cljs$core$async$state_machine__37994__auto____1 = (function (state_39990){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_39990);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e40023){var ex__37997__auto__ = e40023;
var statearr_40024_40530 = state_39990;
(statearr_40024_40530[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_39990[(4)]))){
var statearr_40025_40531 = state_39990;
(statearr_40025_40531[(1)] = cljs.core.first((state_39990[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40532 = state_39990;
state_39990 = G__40532;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
cljs$core$async$state_machine__37994__auto__ = function(state_39990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37994__auto____1.call(this,state_39990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37994__auto____0;
cljs$core$async$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37994__auto____1;
return cljs$core$async$state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_40026 = f__38272__auto__();
(statearr_40026[(6)] = c__38271__auto___40511);

return statearr_40026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
