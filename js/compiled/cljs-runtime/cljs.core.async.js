goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17837 = arguments.length;
switch (G__17837) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17839 = (function (f,blockable,meta17840){
this.f = f;
this.blockable = blockable;
this.meta17840 = meta17840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17841,meta17840__$1){
var self__ = this;
var _17841__$1 = this;
return (new cljs.core.async.t_cljs$core$async17839(self__.f,self__.blockable,meta17840__$1));
}));

(cljs.core.async.t_cljs$core$async17839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17841){
var self__ = this;
var _17841__$1 = this;
return self__.meta17840;
}));

(cljs.core.async.t_cljs$core$async17839.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17839.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17840","meta17840",2044127232,null)], null);
}));

(cljs.core.async.t_cljs$core$async17839.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17839");

(cljs.core.async.t_cljs$core$async17839.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17839");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17839.
 */
cljs.core.async.__GT_t_cljs$core$async17839 = (function cljs$core$async$__GT_t_cljs$core$async17839(f__$1,blockable__$1,meta17840){
return (new cljs.core.async.t_cljs$core$async17839(f__$1,blockable__$1,meta17840));
});

}

return (new cljs.core.async.t_cljs$core$async17839(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17847 = arguments.length;
switch (G__17847) {
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
var G__17851 = arguments.length;
switch (G__17851) {
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
var G__17854 = arguments.length;
switch (G__17854) {
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
var val_19999 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19999) : fn1.call(null,val_19999));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19999) : fn1.call(null,val_19999));
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
var G__17858 = arguments.length;
switch (G__17858) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
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
var n__5636__auto___20007 = n;
var x_20008 = (0);
while(true){
if((x_20008 < n__5636__auto___20007)){
(a[x_20008] = x_20008);

var G__20009 = (x_20008 + (1));
x_20008 = G__20009;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17861 = (function (flag,meta17862){
this.flag = flag;
this.meta17862 = meta17862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17863,meta17862__$1){
var self__ = this;
var _17863__$1 = this;
return (new cljs.core.async.t_cljs$core$async17861(self__.flag,meta17862__$1));
}));

(cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17863){
var self__ = this;
var _17863__$1 = this;
return self__.meta17862;
}));

(cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17862","meta17862",-43729631,null)], null);
}));

(cljs.core.async.t_cljs$core$async17861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17861");

(cljs.core.async.t_cljs$core$async17861.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17861.
 */
cljs.core.async.__GT_t_cljs$core$async17861 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17861(flag__$1,meta17862){
return (new cljs.core.async.t_cljs$core$async17861(flag__$1,meta17862));
});

}

return (new cljs.core.async.t_cljs$core$async17861(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17866 = (function (flag,cb,meta17867){
this.flag = flag;
this.cb = cb;
this.meta17867 = meta17867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17868,meta17867__$1){
var self__ = this;
var _17868__$1 = this;
return (new cljs.core.async.t_cljs$core$async17866(self__.flag,self__.cb,meta17867__$1));
}));

(cljs.core.async.t_cljs$core$async17866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17868){
var self__ = this;
var _17868__$1 = this;
return self__.meta17867;
}));

(cljs.core.async.t_cljs$core$async17866.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17866.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17867","meta17867",-74649325,null)], null);
}));

(cljs.core.async.t_cljs$core$async17866.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17866");

(cljs.core.async.t_cljs$core$async17866.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17866");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17866.
 */
cljs.core.async.__GT_t_cljs$core$async17866 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17866(flag__$1,cb__$1,meta17867){
return (new cljs.core.async.t_cljs$core$async17866(flag__$1,cb__$1,meta17867));
});

}

return (new cljs.core.async.t_cljs$core$async17866(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17872_SHARP_){
var G__17875 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17872_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17875) : fret.call(null,G__17875));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17873_SHARP_){
var G__17876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17873_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17876) : fret.call(null,G__17876));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20020 = (i + (1));
i = G__20020;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___20021 = arguments.length;
var i__5770__auto___20022 = (0);
while(true){
if((i__5770__auto___20022 < len__5769__auto___20021)){
args__5775__auto__.push((arguments[i__5770__auto___20022]));

var G__20023 = (i__5770__auto___20022 + (1));
i__5770__auto___20022 = G__20023;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17880){
var map__17882 = p__17880;
var map__17882__$1 = cljs.core.__destructure_map(map__17882);
var opts = map__17882__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17878){
var G__17879 = cljs.core.first(seq17878);
var seq17878__$1 = cljs.core.next(seq17878);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17879,seq17878__$1);
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
var G__17885 = arguments.length;
switch (G__17885) {
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
var c__17665__auto___20025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_17911){
var state_val_17912 = (state_17911[(1)]);
if((state_val_17912 === (7))){
var inst_17906 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17913_20026 = state_17911__$1;
(statearr_17913_20026[(2)] = inst_17906);

(statearr_17913_20026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (1))){
var state_17911__$1 = state_17911;
var statearr_17914_20027 = state_17911__$1;
(statearr_17914_20027[(2)] = null);

(statearr_17914_20027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (4))){
var inst_17889 = (state_17911[(7)]);
var inst_17889__$1 = (state_17911[(2)]);
var inst_17890 = (inst_17889__$1 == null);
var state_17911__$1 = (function (){var statearr_17916 = state_17911;
(statearr_17916[(7)] = inst_17889__$1);

return statearr_17916;
})();
if(cljs.core.truth_(inst_17890)){
var statearr_17917_20028 = state_17911__$1;
(statearr_17917_20028[(1)] = (5));

} else {
var statearr_17918_20029 = state_17911__$1;
(statearr_17918_20029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (13))){
var state_17911__$1 = state_17911;
var statearr_17919_20030 = state_17911__$1;
(statearr_17919_20030[(2)] = null);

(statearr_17919_20030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (6))){
var inst_17889 = (state_17911[(7)]);
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17911__$1,(11),to,inst_17889);
} else {
if((state_val_17912 === (3))){
var inst_17909 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17911__$1,inst_17909);
} else {
if((state_val_17912 === (12))){
var state_17911__$1 = state_17911;
var statearr_17920_20031 = state_17911__$1;
(statearr_17920_20031[(2)] = null);

(statearr_17920_20031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (2))){
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17911__$1,(4),from);
} else {
if((state_val_17912 === (11))){
var inst_17899 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
if(cljs.core.truth_(inst_17899)){
var statearr_17921_20032 = state_17911__$1;
(statearr_17921_20032[(1)] = (12));

} else {
var statearr_17922_20033 = state_17911__$1;
(statearr_17922_20033[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (9))){
var state_17911__$1 = state_17911;
var statearr_17923_20034 = state_17911__$1;
(statearr_17923_20034[(2)] = null);

(statearr_17923_20034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (5))){
var state_17911__$1 = state_17911;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17925_20036 = state_17911__$1;
(statearr_17925_20036[(1)] = (8));

} else {
var statearr_17926_20037 = state_17911__$1;
(statearr_17926_20037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (14))){
var inst_17904 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17927_20038 = state_17911__$1;
(statearr_17927_20038[(2)] = inst_17904);

(statearr_17927_20038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (10))){
var inst_17896 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17928_20039 = state_17911__$1;
(statearr_17928_20039[(2)] = inst_17896);

(statearr_17928_20039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (8))){
var inst_17893 = cljs.core.async.close_BANG_(to);
var state_17911__$1 = state_17911;
var statearr_17929_20040 = state_17911__$1;
(statearr_17929_20040[(2)] = inst_17893);

(statearr_17929_20040[(1)] = (10));


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
var cljs$core$async$state_machine__17190__auto__ = null;
var cljs$core$async$state_machine__17190__auto____0 = (function (){
var statearr_17930 = [null,null,null,null,null,null,null,null];
(statearr_17930[(0)] = cljs$core$async$state_machine__17190__auto__);

(statearr_17930[(1)] = (1));

return statearr_17930;
});
var cljs$core$async$state_machine__17190__auto____1 = (function (state_17911){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_17911);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e17931){var ex__17193__auto__ = e17931;
var statearr_17932_20042 = state_17911;
(statearr_17932_20042[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_17911[(4)]))){
var statearr_17933_20043 = state_17911;
(statearr_17933_20043[(1)] = cljs.core.first((state_17911[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20045 = state_17911;
state_17911 = G__20045;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$state_machine__17190__auto__ = function(state_17911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17190__auto____1.call(this,state_17911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17190__auto____0;
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17190__auto____1;
return cljs$core$async$state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_17934 = f__17666__auto__();
(statearr_17934[(6)] = c__17665__auto___20025);

return statearr_17934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
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
var process__$1 = (function (p__17936){
var vec__17937 = p__17936;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17937,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17937,(1),null);
var job = vec__17937;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17665__auto___20046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_17945){
var state_val_17946 = (state_17945[(1)]);
if((state_val_17946 === (1))){
var state_17945__$1 = state_17945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17945__$1,(2),res,v);
} else {
if((state_val_17946 === (2))){
var inst_17942 = (state_17945[(2)]);
var inst_17943 = cljs.core.async.close_BANG_(res);
var state_17945__$1 = (function (){var statearr_17947 = state_17945;
(statearr_17947[(7)] = inst_17942);

return statearr_17947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17945__$1,inst_17943);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0 = (function (){
var statearr_17948 = [null,null,null,null,null,null,null,null];
(statearr_17948[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__);

(statearr_17948[(1)] = (1));

return statearr_17948;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1 = (function (state_17945){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_17945);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e17949){var ex__17193__auto__ = e17949;
var statearr_17950_20048 = state_17945;
(statearr_17950_20048[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_17945[(4)]))){
var statearr_17952_20049 = state_17945;
(statearr_17952_20049[(1)] = cljs.core.first((state_17945[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20051 = state_17945;
state_17945 = G__20051;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__ = function(state_17945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1.call(this,state_17945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_17953 = f__17666__auto__();
(statearr_17953[(6)] = c__17665__auto___20046);

return statearr_17953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17954){
var vec__17955 = p__17954;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17955,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17955,(1),null);
var job = vec__17955;
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
var n__5636__auto___20052 = n;
var __20053 = (0);
while(true){
if((__20053 < n__5636__auto___20052)){
var G__17959_20054 = type;
var G__17959_20055__$1 = (((G__17959_20054 instanceof cljs.core.Keyword))?G__17959_20054.fqn:null);
switch (G__17959_20055__$1) {
case "compute":
var c__17665__auto___20057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20053,c__17665__auto___20057,G__17959_20054,G__17959_20055__$1,n__5636__auto___20052,jobs,results,process__$1,async){
return (function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = ((function (__20053,c__17665__auto___20057,G__17959_20054,G__17959_20055__$1,n__5636__auto___20052,jobs,results,process__$1,async){
return (function (state_17972){
var state_val_17973 = (state_17972[(1)]);
if((state_val_17973 === (1))){
var state_17972__$1 = state_17972;
var statearr_17974_20058 = state_17972__$1;
(statearr_17974_20058[(2)] = null);

(statearr_17974_20058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17973 === (2))){
var state_17972__$1 = state_17972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17972__$1,(4),jobs);
} else {
if((state_val_17973 === (3))){
var inst_17970 = (state_17972[(2)]);
var state_17972__$1 = state_17972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17972__$1,inst_17970);
} else {
if((state_val_17973 === (4))){
var inst_17962 = (state_17972[(2)]);
var inst_17963 = process__$1(inst_17962);
var state_17972__$1 = state_17972;
if(cljs.core.truth_(inst_17963)){
var statearr_17976_20062 = state_17972__$1;
(statearr_17976_20062[(1)] = (5));

} else {
var statearr_17977_20063 = state_17972__$1;
(statearr_17977_20063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17973 === (5))){
var state_17972__$1 = state_17972;
var statearr_17978_20064 = state_17972__$1;
(statearr_17978_20064[(2)] = null);

(statearr_17978_20064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17973 === (6))){
var state_17972__$1 = state_17972;
var statearr_17979_20065 = state_17972__$1;
(statearr_17979_20065[(2)] = null);

(statearr_17979_20065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17973 === (7))){
var inst_17968 = (state_17972[(2)]);
var state_17972__$1 = state_17972;
var statearr_17980_20067 = state_17972__$1;
(statearr_17980_20067[(2)] = inst_17968);

(statearr_17980_20067[(1)] = (3));


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
});})(__20053,c__17665__auto___20057,G__17959_20054,G__17959_20055__$1,n__5636__auto___20052,jobs,results,process__$1,async))
;
return ((function (__20053,switch__17189__auto__,c__17665__auto___20057,G__17959_20054,G__17959_20055__$1,n__5636__auto___20052,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0 = (function (){
var statearr_17981 = [null,null,null,null,null,null,null];
(statearr_17981[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__);

(statearr_17981[(1)] = (1));

return statearr_17981;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1 = (function (state_17972){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_17972);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e17982){var ex__17193__auto__ = e17982;
var statearr_17983_20069 = state_17972;
(statearr_17983_20069[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_17972[(4)]))){
var statearr_17984_20070 = state_17972;
(statearr_17984_20070[(1)] = cljs.core.first((state_17972[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20071 = state_17972;
state_17972 = G__20071;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__ = function(state_17972){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1.call(this,state_17972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__;
})()
;})(__20053,switch__17189__auto__,c__17665__auto___20057,G__17959_20054,G__17959_20055__$1,n__5636__auto___20052,jobs,results,process__$1,async))
})();
var state__17667__auto__ = (function (){var statearr_17986 = f__17666__auto__();
(statearr_17986[(6)] = c__17665__auto___20057);

return statearr_17986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
});})(__20053,c__17665__auto___20057,G__17959_20054,G__17959_20055__$1,n__5636__auto___20052,jobs,results,process__$1,async))
);


break;
case "async":
var c__17665__auto___20073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20053,c__17665__auto___20073,G__17959_20054,G__17959_20055__$1,n__5636__auto___20052,jobs,results,process__$1,async){
return (function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = ((function (__20053,c__17665__auto___20073,G__17959_20054,G__17959_20055__$1,n__5636__auto___20052,jobs,results,process__$1,async){
return (function (state_17999){
var state_val_18000 = (state_17999[(1)]);
if((state_val_18000 === (1))){
var state_17999__$1 = state_17999;
var statearr_18001_20075 = state_17999__$1;
(statearr_18001_20075[(2)] = null);

(statearr_18001_20075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18000 === (2))){
var state_17999__$1 = state_17999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17999__$1,(4),jobs);
} else {
if((state_val_18000 === (3))){
var inst_17997 = (state_17999[(2)]);
var state_17999__$1 = state_17999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17999__$1,inst_17997);
} else {
if((state_val_18000 === (4))){
var inst_17989 = (state_17999[(2)]);
var inst_17990 = async(inst_17989);
var state_17999__$1 = state_17999;
if(cljs.core.truth_(inst_17990)){
var statearr_18004_20078 = state_17999__$1;
(statearr_18004_20078[(1)] = (5));

} else {
var statearr_18005_20080 = state_17999__$1;
(statearr_18005_20080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18000 === (5))){
var state_17999__$1 = state_17999;
var statearr_18006_20081 = state_17999__$1;
(statearr_18006_20081[(2)] = null);

(statearr_18006_20081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18000 === (6))){
var state_17999__$1 = state_17999;
var statearr_18007_20082 = state_17999__$1;
(statearr_18007_20082[(2)] = null);

(statearr_18007_20082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18000 === (7))){
var inst_17995 = (state_17999[(2)]);
var state_17999__$1 = state_17999;
var statearr_18008_20085 = state_17999__$1;
(statearr_18008_20085[(2)] = inst_17995);

(statearr_18008_20085[(1)] = (3));


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
});})(__20053,c__17665__auto___20073,G__17959_20054,G__17959_20055__$1,n__5636__auto___20052,jobs,results,process__$1,async))
;
return ((function (__20053,switch__17189__auto__,c__17665__auto___20073,G__17959_20054,G__17959_20055__$1,n__5636__auto___20052,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0 = (function (){
var statearr_18009 = [null,null,null,null,null,null,null];
(statearr_18009[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__);

(statearr_18009[(1)] = (1));

return statearr_18009;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1 = (function (state_17999){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_17999);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e18010){var ex__17193__auto__ = e18010;
var statearr_18011_20087 = state_17999;
(statearr_18011_20087[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_17999[(4)]))){
var statearr_18012_20088 = state_17999;
(statearr_18012_20088[(1)] = cljs.core.first((state_17999[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20089 = state_17999;
state_17999 = G__20089;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__ = function(state_17999){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1.call(this,state_17999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__;
})()
;})(__20053,switch__17189__auto__,c__17665__auto___20073,G__17959_20054,G__17959_20055__$1,n__5636__auto___20052,jobs,results,process__$1,async))
})();
var state__17667__auto__ = (function (){var statearr_18013 = f__17666__auto__();
(statearr_18013[(6)] = c__17665__auto___20073);

return statearr_18013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
});})(__20053,c__17665__auto___20073,G__17959_20054,G__17959_20055__$1,n__5636__auto___20052,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17959_20055__$1)].join('')));

}

var G__20094 = (__20053 + (1));
__20053 = G__20094;
continue;
} else {
}
break;
}

var c__17665__auto___20095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_18037){
var state_val_18038 = (state_18037[(1)]);
if((state_val_18038 === (7))){
var inst_18033 = (state_18037[(2)]);
var state_18037__$1 = state_18037;
var statearr_18039_20096 = state_18037__$1;
(statearr_18039_20096[(2)] = inst_18033);

(statearr_18039_20096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18038 === (1))){
var state_18037__$1 = state_18037;
var statearr_18040_20097 = state_18037__$1;
(statearr_18040_20097[(2)] = null);

(statearr_18040_20097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18038 === (4))){
var inst_18018 = (state_18037[(7)]);
var inst_18018__$1 = (state_18037[(2)]);
var inst_18019 = (inst_18018__$1 == null);
var state_18037__$1 = (function (){var statearr_18041 = state_18037;
(statearr_18041[(7)] = inst_18018__$1);

return statearr_18041;
})();
if(cljs.core.truth_(inst_18019)){
var statearr_18042_20098 = state_18037__$1;
(statearr_18042_20098[(1)] = (5));

} else {
var statearr_18043_20099 = state_18037__$1;
(statearr_18043_20099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18038 === (6))){
var inst_18023 = (state_18037[(8)]);
var inst_18018 = (state_18037[(7)]);
var inst_18023__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18024 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18025 = [inst_18018,inst_18023__$1];
var inst_18026 = (new cljs.core.PersistentVector(null,2,(5),inst_18024,inst_18025,null));
var state_18037__$1 = (function (){var statearr_18044 = state_18037;
(statearr_18044[(8)] = inst_18023__$1);

return statearr_18044;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18037__$1,(8),jobs,inst_18026);
} else {
if((state_val_18038 === (3))){
var inst_18035 = (state_18037[(2)]);
var state_18037__$1 = state_18037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18037__$1,inst_18035);
} else {
if((state_val_18038 === (2))){
var state_18037__$1 = state_18037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18037__$1,(4),from);
} else {
if((state_val_18038 === (9))){
var inst_18030 = (state_18037[(2)]);
var state_18037__$1 = (function (){var statearr_18047 = state_18037;
(statearr_18047[(9)] = inst_18030);

return statearr_18047;
})();
var statearr_18048_20100 = state_18037__$1;
(statearr_18048_20100[(2)] = null);

(statearr_18048_20100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18038 === (5))){
var inst_18021 = cljs.core.async.close_BANG_(jobs);
var state_18037__$1 = state_18037;
var statearr_18049_20102 = state_18037__$1;
(statearr_18049_20102[(2)] = inst_18021);

(statearr_18049_20102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18038 === (8))){
var inst_18023 = (state_18037[(8)]);
var inst_18028 = (state_18037[(2)]);
var state_18037__$1 = (function (){var statearr_18050 = state_18037;
(statearr_18050[(10)] = inst_18028);

return statearr_18050;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18037__$1,(9),results,inst_18023);
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
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0 = (function (){
var statearr_18051 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__);

(statearr_18051[(1)] = (1));

return statearr_18051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1 = (function (state_18037){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_18037);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e18052){var ex__17193__auto__ = e18052;
var statearr_18053_20106 = state_18037;
(statearr_18053_20106[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_18037[(4)]))){
var statearr_18054_20107 = state_18037;
(statearr_18054_20107[(1)] = cljs.core.first((state_18037[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20108 = state_18037;
state_18037 = G__20108;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__ = function(state_18037){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1.call(this,state_18037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_18055 = f__17666__auto__();
(statearr_18055[(6)] = c__17665__auto___20095);

return statearr_18055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
}));


var c__17665__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_18099){
var state_val_18100 = (state_18099[(1)]);
if((state_val_18100 === (7))){
var inst_18095 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
var statearr_18104_20110 = state_18099__$1;
(statearr_18104_20110[(2)] = inst_18095);

(statearr_18104_20110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (20))){
var state_18099__$1 = state_18099;
var statearr_18106_20111 = state_18099__$1;
(statearr_18106_20111[(2)] = null);

(statearr_18106_20111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (1))){
var state_18099__$1 = state_18099;
var statearr_18110_20112 = state_18099__$1;
(statearr_18110_20112[(2)] = null);

(statearr_18110_20112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (4))){
var inst_18058 = (state_18099[(7)]);
var inst_18058__$1 = (state_18099[(2)]);
var inst_18059 = (inst_18058__$1 == null);
var state_18099__$1 = (function (){var statearr_18112 = state_18099;
(statearr_18112[(7)] = inst_18058__$1);

return statearr_18112;
})();
if(cljs.core.truth_(inst_18059)){
var statearr_18115_20113 = state_18099__$1;
(statearr_18115_20113[(1)] = (5));

} else {
var statearr_18117_20114 = state_18099__$1;
(statearr_18117_20114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (15))){
var inst_18074 = (state_18099[(8)]);
var state_18099__$1 = state_18099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18099__$1,(18),to,inst_18074);
} else {
if((state_val_18100 === (21))){
var inst_18090 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
var statearr_18122_20115 = state_18099__$1;
(statearr_18122_20115[(2)] = inst_18090);

(statearr_18122_20115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (13))){
var inst_18092 = (state_18099[(2)]);
var state_18099__$1 = (function (){var statearr_18125 = state_18099;
(statearr_18125[(9)] = inst_18092);

return statearr_18125;
})();
var statearr_18128_20121 = state_18099__$1;
(statearr_18128_20121[(2)] = null);

(statearr_18128_20121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (6))){
var inst_18058 = (state_18099[(7)]);
var state_18099__$1 = state_18099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18099__$1,(11),inst_18058);
} else {
if((state_val_18100 === (17))){
var inst_18082 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
if(cljs.core.truth_(inst_18082)){
var statearr_18132_20122 = state_18099__$1;
(statearr_18132_20122[(1)] = (19));

} else {
var statearr_18134_20123 = state_18099__$1;
(statearr_18134_20123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (3))){
var inst_18097 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18099__$1,inst_18097);
} else {
if((state_val_18100 === (12))){
var inst_18070 = (state_18099[(10)]);
var state_18099__$1 = state_18099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18099__$1,(14),inst_18070);
} else {
if((state_val_18100 === (2))){
var state_18099__$1 = state_18099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18099__$1,(4),results);
} else {
if((state_val_18100 === (19))){
var state_18099__$1 = state_18099;
var statearr_18139_20129 = state_18099__$1;
(statearr_18139_20129[(2)] = null);

(statearr_18139_20129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (11))){
var inst_18070 = (state_18099[(2)]);
var state_18099__$1 = (function (){var statearr_18141 = state_18099;
(statearr_18141[(10)] = inst_18070);

return statearr_18141;
})();
var statearr_18142_20130 = state_18099__$1;
(statearr_18142_20130[(2)] = null);

(statearr_18142_20130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (9))){
var state_18099__$1 = state_18099;
var statearr_18146_20131 = state_18099__$1;
(statearr_18146_20131[(2)] = null);

(statearr_18146_20131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (5))){
var state_18099__$1 = state_18099;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18148_20132 = state_18099__$1;
(statearr_18148_20132[(1)] = (8));

} else {
var statearr_18149_20134 = state_18099__$1;
(statearr_18149_20134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (14))){
var inst_18074 = (state_18099[(8)]);
var inst_18076 = (state_18099[(11)]);
var inst_18074__$1 = (state_18099[(2)]);
var inst_18075 = (inst_18074__$1 == null);
var inst_18076__$1 = cljs.core.not(inst_18075);
var state_18099__$1 = (function (){var statearr_18153 = state_18099;
(statearr_18153[(8)] = inst_18074__$1);

(statearr_18153[(11)] = inst_18076__$1);

return statearr_18153;
})();
if(inst_18076__$1){
var statearr_18155_20135 = state_18099__$1;
(statearr_18155_20135[(1)] = (15));

} else {
var statearr_18156_20136 = state_18099__$1;
(statearr_18156_20136[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (16))){
var inst_18076 = (state_18099[(11)]);
var state_18099__$1 = state_18099;
var statearr_18160_20138 = state_18099__$1;
(statearr_18160_20138[(2)] = inst_18076);

(statearr_18160_20138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (10))){
var inst_18065 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
var statearr_18162_20143 = state_18099__$1;
(statearr_18162_20143[(2)] = inst_18065);

(statearr_18162_20143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (18))){
var inst_18079 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
var statearr_18166_20144 = state_18099__$1;
(statearr_18166_20144[(2)] = inst_18079);

(statearr_18166_20144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (8))){
var inst_18062 = cljs.core.async.close_BANG_(to);
var state_18099__$1 = state_18099;
var statearr_18168_20145 = state_18099__$1;
(statearr_18168_20145[(2)] = inst_18062);

(statearr_18168_20145[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0 = (function (){
var statearr_18173 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__);

(statearr_18173[(1)] = (1));

return statearr_18173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1 = (function (state_18099){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_18099);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e18177){var ex__17193__auto__ = e18177;
var statearr_18178_20146 = state_18099;
(statearr_18178_20146[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_18099[(4)]))){
var statearr_18180_20147 = state_18099;
(statearr_18180_20147[(1)] = cljs.core.first((state_18099[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20152 = state_18099;
state_18099 = G__20152;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__ = function(state_18099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1.call(this,state_18099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_18185 = f__17666__auto__();
(statearr_18185[(6)] = c__17665__auto__);

return statearr_18185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
}));

return c__17665__auto__;
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
var G__18195 = arguments.length;
switch (G__18195) {
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
var G__18211 = arguments.length;
switch (G__18211) {
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
var G__18223 = arguments.length;
switch (G__18223) {
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
var c__17665__auto___20199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_18260){
var state_val_18261 = (state_18260[(1)]);
if((state_val_18261 === (7))){
var inst_18255 = (state_18260[(2)]);
var state_18260__$1 = state_18260;
var statearr_18271_20208 = state_18260__$1;
(statearr_18271_20208[(2)] = inst_18255);

(statearr_18271_20208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (1))){
var state_18260__$1 = state_18260;
var statearr_18273_20211 = state_18260__$1;
(statearr_18273_20211[(2)] = null);

(statearr_18273_20211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (4))){
var inst_18233 = (state_18260[(7)]);
var inst_18233__$1 = (state_18260[(2)]);
var inst_18234 = (inst_18233__$1 == null);
var state_18260__$1 = (function (){var statearr_18276 = state_18260;
(statearr_18276[(7)] = inst_18233__$1);

return statearr_18276;
})();
if(cljs.core.truth_(inst_18234)){
var statearr_18278_20226 = state_18260__$1;
(statearr_18278_20226[(1)] = (5));

} else {
var statearr_18279_20227 = state_18260__$1;
(statearr_18279_20227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (13))){
var state_18260__$1 = state_18260;
var statearr_18281_20228 = state_18260__$1;
(statearr_18281_20228[(2)] = null);

(statearr_18281_20228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (6))){
var inst_18233 = (state_18260[(7)]);
var inst_18240 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18233) : p.call(null,inst_18233));
var state_18260__$1 = state_18260;
if(cljs.core.truth_(inst_18240)){
var statearr_18284_20229 = state_18260__$1;
(statearr_18284_20229[(1)] = (9));

} else {
var statearr_18286_20230 = state_18260__$1;
(statearr_18286_20230[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (3))){
var inst_18258 = (state_18260[(2)]);
var state_18260__$1 = state_18260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18260__$1,inst_18258);
} else {
if((state_val_18261 === (12))){
var state_18260__$1 = state_18260;
var statearr_18289_20231 = state_18260__$1;
(statearr_18289_20231[(2)] = null);

(statearr_18289_20231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (2))){
var state_18260__$1 = state_18260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18260__$1,(4),ch);
} else {
if((state_val_18261 === (11))){
var inst_18233 = (state_18260[(7)]);
var inst_18244 = (state_18260[(2)]);
var state_18260__$1 = state_18260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18260__$1,(8),inst_18244,inst_18233);
} else {
if((state_val_18261 === (9))){
var state_18260__$1 = state_18260;
var statearr_18295_20239 = state_18260__$1;
(statearr_18295_20239[(2)] = tc);

(statearr_18295_20239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (5))){
var inst_18237 = cljs.core.async.close_BANG_(tc);
var inst_18238 = cljs.core.async.close_BANG_(fc);
var state_18260__$1 = (function (){var statearr_18299 = state_18260;
(statearr_18299[(8)] = inst_18237);

return statearr_18299;
})();
var statearr_18300_20240 = state_18260__$1;
(statearr_18300_20240[(2)] = inst_18238);

(statearr_18300_20240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (14))){
var inst_18253 = (state_18260[(2)]);
var state_18260__$1 = state_18260;
var statearr_18302_20251 = state_18260__$1;
(statearr_18302_20251[(2)] = inst_18253);

(statearr_18302_20251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (10))){
var state_18260__$1 = state_18260;
var statearr_18306_20257 = state_18260__$1;
(statearr_18306_20257[(2)] = fc);

(statearr_18306_20257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (8))){
var inst_18246 = (state_18260[(2)]);
var state_18260__$1 = state_18260;
if(cljs.core.truth_(inst_18246)){
var statearr_18308_20265 = state_18260__$1;
(statearr_18308_20265[(1)] = (12));

} else {
var statearr_18309_20266 = state_18260__$1;
(statearr_18309_20266[(1)] = (13));

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
var cljs$core$async$state_machine__17190__auto__ = null;
var cljs$core$async$state_machine__17190__auto____0 = (function (){
var statearr_18315 = [null,null,null,null,null,null,null,null,null];
(statearr_18315[(0)] = cljs$core$async$state_machine__17190__auto__);

(statearr_18315[(1)] = (1));

return statearr_18315;
});
var cljs$core$async$state_machine__17190__auto____1 = (function (state_18260){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_18260);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e18319){var ex__17193__auto__ = e18319;
var statearr_18321_20275 = state_18260;
(statearr_18321_20275[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_18260[(4)]))){
var statearr_18325_20276 = state_18260;
(statearr_18325_20276[(1)] = cljs.core.first((state_18260[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20281 = state_18260;
state_18260 = G__20281;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$state_machine__17190__auto__ = function(state_18260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17190__auto____1.call(this,state_18260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17190__auto____0;
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17190__auto____1;
return cljs$core$async$state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_18334 = f__17666__auto__();
(statearr_18334[(6)] = c__17665__auto___20199);

return statearr_18334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
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
var c__17665__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_18372){
var state_val_18374 = (state_18372[(1)]);
if((state_val_18374 === (7))){
var inst_18367 = (state_18372[(2)]);
var state_18372__$1 = state_18372;
var statearr_18383_20282 = state_18372__$1;
(statearr_18383_20282[(2)] = inst_18367);

(statearr_18383_20282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (1))){
var inst_18345 = init;
var inst_18347 = inst_18345;
var state_18372__$1 = (function (){var statearr_18387 = state_18372;
(statearr_18387[(7)] = inst_18347);

return statearr_18387;
})();
var statearr_18388_20283 = state_18372__$1;
(statearr_18388_20283[(2)] = null);

(statearr_18388_20283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (4))){
var inst_18350 = (state_18372[(8)]);
var inst_18350__$1 = (state_18372[(2)]);
var inst_18352 = (inst_18350__$1 == null);
var state_18372__$1 = (function (){var statearr_18389 = state_18372;
(statearr_18389[(8)] = inst_18350__$1);

return statearr_18389;
})();
if(cljs.core.truth_(inst_18352)){
var statearr_18390_20285 = state_18372__$1;
(statearr_18390_20285[(1)] = (5));

} else {
var statearr_18391_20286 = state_18372__$1;
(statearr_18391_20286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (6))){
var inst_18356 = (state_18372[(9)]);
var inst_18350 = (state_18372[(8)]);
var inst_18347 = (state_18372[(7)]);
var inst_18356__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18347,inst_18350) : f.call(null,inst_18347,inst_18350));
var inst_18358 = cljs.core.reduced_QMARK_(inst_18356__$1);
var state_18372__$1 = (function (){var statearr_18392 = state_18372;
(statearr_18392[(9)] = inst_18356__$1);

return statearr_18392;
})();
if(inst_18358){
var statearr_18393_20287 = state_18372__$1;
(statearr_18393_20287[(1)] = (8));

} else {
var statearr_18394_20289 = state_18372__$1;
(statearr_18394_20289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (3))){
var inst_18369 = (state_18372[(2)]);
var state_18372__$1 = state_18372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18372__$1,inst_18369);
} else {
if((state_val_18374 === (2))){
var state_18372__$1 = state_18372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18372__$1,(4),ch);
} else {
if((state_val_18374 === (9))){
var inst_18356 = (state_18372[(9)]);
var inst_18347 = inst_18356;
var state_18372__$1 = (function (){var statearr_18395 = state_18372;
(statearr_18395[(7)] = inst_18347);

return statearr_18395;
})();
var statearr_18396_20290 = state_18372__$1;
(statearr_18396_20290[(2)] = null);

(statearr_18396_20290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (5))){
var inst_18347 = (state_18372[(7)]);
var state_18372__$1 = state_18372;
var statearr_18397_20291 = state_18372__$1;
(statearr_18397_20291[(2)] = inst_18347);

(statearr_18397_20291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (10))){
var inst_18365 = (state_18372[(2)]);
var state_18372__$1 = state_18372;
var statearr_18398_20292 = state_18372__$1;
(statearr_18398_20292[(2)] = inst_18365);

(statearr_18398_20292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18374 === (8))){
var inst_18356 = (state_18372[(9)]);
var inst_18361 = cljs.core.deref(inst_18356);
var state_18372__$1 = state_18372;
var statearr_18400_20293 = state_18372__$1;
(statearr_18400_20293[(2)] = inst_18361);

(statearr_18400_20293[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__17190__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17190__auto____0 = (function (){
var statearr_18402 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18402[(0)] = cljs$core$async$reduce_$_state_machine__17190__auto__);

(statearr_18402[(1)] = (1));

return statearr_18402;
});
var cljs$core$async$reduce_$_state_machine__17190__auto____1 = (function (state_18372){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_18372);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e18403){var ex__17193__auto__ = e18403;
var statearr_18404_20295 = state_18372;
(statearr_18404_20295[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_18372[(4)]))){
var statearr_18405_20296 = state_18372;
(statearr_18405_20296[(1)] = cljs.core.first((state_18372[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20297 = state_18372;
state_18372 = G__20297;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17190__auto__ = function(state_18372){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17190__auto____1.call(this,state_18372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17190__auto____0;
cljs$core$async$reduce_$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17190__auto____1;
return cljs$core$async$reduce_$_state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_18406 = f__17666__auto__();
(statearr_18406[(6)] = c__17665__auto__);

return statearr_18406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
}));

return c__17665__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17665__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_18412){
var state_val_18413 = (state_18412[(1)]);
if((state_val_18413 === (1))){
var inst_18407 = cljs.core.async.reduce(f__$1,init,ch);
var state_18412__$1 = state_18412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18412__$1,(2),inst_18407);
} else {
if((state_val_18413 === (2))){
var inst_18409 = (state_18412[(2)]);
var inst_18410 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18409) : f__$1.call(null,inst_18409));
var state_18412__$1 = state_18412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18412__$1,inst_18410);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17190__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17190__auto____0 = (function (){
var statearr_18414 = [null,null,null,null,null,null,null];
(statearr_18414[(0)] = cljs$core$async$transduce_$_state_machine__17190__auto__);

(statearr_18414[(1)] = (1));

return statearr_18414;
});
var cljs$core$async$transduce_$_state_machine__17190__auto____1 = (function (state_18412){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_18412);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e18415){var ex__17193__auto__ = e18415;
var statearr_18416_20302 = state_18412;
(statearr_18416_20302[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_18412[(4)]))){
var statearr_18417_20303 = state_18412;
(statearr_18417_20303[(1)] = cljs.core.first((state_18412[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20304 = state_18412;
state_18412 = G__20304;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17190__auto__ = function(state_18412){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17190__auto____1.call(this,state_18412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17190__auto____0;
cljs$core$async$transduce_$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17190__auto____1;
return cljs$core$async$transduce_$_state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_18420 = f__17666__auto__();
(statearr_18420[(6)] = c__17665__auto__);

return statearr_18420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
}));

return c__17665__auto__;
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
var G__18426 = arguments.length;
switch (G__18426) {
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
var c__17665__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_18463){
var state_val_18464 = (state_18463[(1)]);
if((state_val_18464 === (7))){
var inst_18438 = (state_18463[(2)]);
var state_18463__$1 = state_18463;
var statearr_18469_20307 = state_18463__$1;
(statearr_18469_20307[(2)] = inst_18438);

(statearr_18469_20307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18464 === (1))){
var inst_18432 = cljs.core.seq(coll);
var inst_18433 = inst_18432;
var state_18463__$1 = (function (){var statearr_18471 = state_18463;
(statearr_18471[(7)] = inst_18433);

return statearr_18471;
})();
var statearr_18472_20308 = state_18463__$1;
(statearr_18472_20308[(2)] = null);

(statearr_18472_20308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18464 === (4))){
var inst_18433 = (state_18463[(7)]);
var inst_18436 = cljs.core.first(inst_18433);
var state_18463__$1 = state_18463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18463__$1,(7),ch,inst_18436);
} else {
if((state_val_18464 === (13))){
var inst_18454 = (state_18463[(2)]);
var state_18463__$1 = state_18463;
var statearr_18476_20309 = state_18463__$1;
(statearr_18476_20309[(2)] = inst_18454);

(statearr_18476_20309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18464 === (6))){
var inst_18442 = (state_18463[(2)]);
var state_18463__$1 = state_18463;
if(cljs.core.truth_(inst_18442)){
var statearr_18478_20310 = state_18463__$1;
(statearr_18478_20310[(1)] = (8));

} else {
var statearr_18479_20311 = state_18463__$1;
(statearr_18479_20311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18464 === (3))){
var inst_18458 = (state_18463[(2)]);
var state_18463__$1 = state_18463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18463__$1,inst_18458);
} else {
if((state_val_18464 === (12))){
var state_18463__$1 = state_18463;
var statearr_18483_20312 = state_18463__$1;
(statearr_18483_20312[(2)] = null);

(statearr_18483_20312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18464 === (2))){
var inst_18433 = (state_18463[(7)]);
var state_18463__$1 = state_18463;
if(cljs.core.truth_(inst_18433)){
var statearr_18485_20313 = state_18463__$1;
(statearr_18485_20313[(1)] = (4));

} else {
var statearr_18486_20314 = state_18463__$1;
(statearr_18486_20314[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18464 === (11))){
var inst_18451 = cljs.core.async.close_BANG_(ch);
var state_18463__$1 = state_18463;
var statearr_18487_20315 = state_18463__$1;
(statearr_18487_20315[(2)] = inst_18451);

(statearr_18487_20315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18464 === (9))){
var state_18463__$1 = state_18463;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18488_20316 = state_18463__$1;
(statearr_18488_20316[(1)] = (11));

} else {
var statearr_18490_20317 = state_18463__$1;
(statearr_18490_20317[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18464 === (5))){
var inst_18433 = (state_18463[(7)]);
var state_18463__$1 = state_18463;
var statearr_18491_20322 = state_18463__$1;
(statearr_18491_20322[(2)] = inst_18433);

(statearr_18491_20322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18464 === (10))){
var inst_18456 = (state_18463[(2)]);
var state_18463__$1 = state_18463;
var statearr_18492_20323 = state_18463__$1;
(statearr_18492_20323[(2)] = inst_18456);

(statearr_18492_20323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18464 === (8))){
var inst_18433 = (state_18463[(7)]);
var inst_18447 = cljs.core.next(inst_18433);
var inst_18433__$1 = inst_18447;
var state_18463__$1 = (function (){var statearr_18493 = state_18463;
(statearr_18493[(7)] = inst_18433__$1);

return statearr_18493;
})();
var statearr_18498_20327 = state_18463__$1;
(statearr_18498_20327[(2)] = null);

(statearr_18498_20327[(1)] = (2));


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
var cljs$core$async$state_machine__17190__auto__ = null;
var cljs$core$async$state_machine__17190__auto____0 = (function (){
var statearr_18503 = [null,null,null,null,null,null,null,null];
(statearr_18503[(0)] = cljs$core$async$state_machine__17190__auto__);

(statearr_18503[(1)] = (1));

return statearr_18503;
});
var cljs$core$async$state_machine__17190__auto____1 = (function (state_18463){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_18463);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e18504){var ex__17193__auto__ = e18504;
var statearr_18505_20328 = state_18463;
(statearr_18505_20328[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_18463[(4)]))){
var statearr_18509_20329 = state_18463;
(statearr_18509_20329[(1)] = cljs.core.first((state_18463[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20330 = state_18463;
state_18463 = G__20330;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$state_machine__17190__auto__ = function(state_18463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17190__auto____1.call(this,state_18463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17190__auto____0;
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17190__auto____1;
return cljs$core$async$state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_18511 = f__17666__auto__();
(statearr_18511[(6)] = c__17665__auto__);

return statearr_18511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
}));

return c__17665__auto__;
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
var G__18522 = arguments.length;
switch (G__18522) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_20342 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20342(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20345 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20345(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20353 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20353(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20358 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20358(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18568 = (function (ch,cs,meta18569){
this.ch = ch;
this.cs = cs;
this.meta18569 = meta18569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18570,meta18569__$1){
var self__ = this;
var _18570__$1 = this;
return (new cljs.core.async.t_cljs$core$async18568(self__.ch,self__.cs,meta18569__$1));
}));

(cljs.core.async.t_cljs$core$async18568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18570){
var self__ = this;
var _18570__$1 = this;
return self__.meta18569;
}));

(cljs.core.async.t_cljs$core$async18568.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18568.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18568.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18568.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18568.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18568.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18569","meta18569",1540445184,null)], null);
}));

(cljs.core.async.t_cljs$core$async18568.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18568");

(cljs.core.async.t_cljs$core$async18568.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18568");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18568.
 */
cljs.core.async.__GT_t_cljs$core$async18568 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18568(ch__$1,cs__$1,meta18569){
return (new cljs.core.async.t_cljs$core$async18568(ch__$1,cs__$1,meta18569));
});

}

return (new cljs.core.async.t_cljs$core$async18568(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17665__auto___20373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_18706){
var state_val_18707 = (state_18706[(1)]);
if((state_val_18707 === (7))){
var inst_18702 = (state_18706[(2)]);
var state_18706__$1 = state_18706;
var statearr_18708_20374 = state_18706__$1;
(statearr_18708_20374[(2)] = inst_18702);

(statearr_18708_20374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (20))){
var inst_18607 = (state_18706[(7)]);
var inst_18619 = cljs.core.first(inst_18607);
var inst_18620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18619,(0),null);
var inst_18621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18619,(1),null);
var state_18706__$1 = (function (){var statearr_18711 = state_18706;
(statearr_18711[(8)] = inst_18620);

return statearr_18711;
})();
if(cljs.core.truth_(inst_18621)){
var statearr_18712_20377 = state_18706__$1;
(statearr_18712_20377[(1)] = (22));

} else {
var statearr_18713_20378 = state_18706__$1;
(statearr_18713_20378[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (27))){
var inst_18649 = (state_18706[(9)]);
var inst_18651 = (state_18706[(10)]);
var inst_18656 = (state_18706[(11)]);
var inst_18576 = (state_18706[(12)]);
var inst_18656__$1 = cljs.core._nth(inst_18649,inst_18651);
var inst_18657 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18656__$1,inst_18576,done);
var state_18706__$1 = (function (){var statearr_18714 = state_18706;
(statearr_18714[(11)] = inst_18656__$1);

return statearr_18714;
})();
if(cljs.core.truth_(inst_18657)){
var statearr_18715_20382 = state_18706__$1;
(statearr_18715_20382[(1)] = (30));

} else {
var statearr_18716_20383 = state_18706__$1;
(statearr_18716_20383[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (1))){
var state_18706__$1 = state_18706;
var statearr_18717_20384 = state_18706__$1;
(statearr_18717_20384[(2)] = null);

(statearr_18717_20384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (24))){
var inst_18607 = (state_18706[(7)]);
var inst_18626 = (state_18706[(2)]);
var inst_18627 = cljs.core.next(inst_18607);
var inst_18585 = inst_18627;
var inst_18586 = null;
var inst_18587 = (0);
var inst_18588 = (0);
var state_18706__$1 = (function (){var statearr_18718 = state_18706;
(statearr_18718[(13)] = inst_18586);

(statearr_18718[(14)] = inst_18588);

(statearr_18718[(15)] = inst_18626);

(statearr_18718[(16)] = inst_18585);

(statearr_18718[(17)] = inst_18587);

return statearr_18718;
})();
var statearr_18719_20385 = state_18706__$1;
(statearr_18719_20385[(2)] = null);

(statearr_18719_20385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (39))){
var state_18706__$1 = state_18706;
var statearr_18725_20386 = state_18706__$1;
(statearr_18725_20386[(2)] = null);

(statearr_18725_20386[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (4))){
var inst_18576 = (state_18706[(12)]);
var inst_18576__$1 = (state_18706[(2)]);
var inst_18577 = (inst_18576__$1 == null);
var state_18706__$1 = (function (){var statearr_18726 = state_18706;
(statearr_18726[(12)] = inst_18576__$1);

return statearr_18726;
})();
if(cljs.core.truth_(inst_18577)){
var statearr_18727_20393 = state_18706__$1;
(statearr_18727_20393[(1)] = (5));

} else {
var statearr_18728_20394 = state_18706__$1;
(statearr_18728_20394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (15))){
var inst_18586 = (state_18706[(13)]);
var inst_18588 = (state_18706[(14)]);
var inst_18585 = (state_18706[(16)]);
var inst_18587 = (state_18706[(17)]);
var inst_18603 = (state_18706[(2)]);
var inst_18604 = (inst_18588 + (1));
var tmp18721 = inst_18586;
var tmp18722 = inst_18585;
var tmp18723 = inst_18587;
var inst_18585__$1 = tmp18722;
var inst_18586__$1 = tmp18721;
var inst_18587__$1 = tmp18723;
var inst_18588__$1 = inst_18604;
var state_18706__$1 = (function (){var statearr_18729 = state_18706;
(statearr_18729[(13)] = inst_18586__$1);

(statearr_18729[(14)] = inst_18588__$1);

(statearr_18729[(18)] = inst_18603);

(statearr_18729[(16)] = inst_18585__$1);

(statearr_18729[(17)] = inst_18587__$1);

return statearr_18729;
})();
var statearr_18730_20397 = state_18706__$1;
(statearr_18730_20397[(2)] = null);

(statearr_18730_20397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (21))){
var inst_18630 = (state_18706[(2)]);
var state_18706__$1 = state_18706;
var statearr_18734_20398 = state_18706__$1;
(statearr_18734_20398[(2)] = inst_18630);

(statearr_18734_20398[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (31))){
var inst_18656 = (state_18706[(11)]);
var inst_18660 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18656);
var state_18706__$1 = state_18706;
var statearr_18736_20399 = state_18706__$1;
(statearr_18736_20399[(2)] = inst_18660);

(statearr_18736_20399[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (32))){
var inst_18649 = (state_18706[(9)]);
var inst_18651 = (state_18706[(10)]);
var inst_18648 = (state_18706[(19)]);
var inst_18650 = (state_18706[(20)]);
var inst_18662 = (state_18706[(2)]);
var inst_18663 = (inst_18651 + (1));
var tmp18731 = inst_18649;
var tmp18732 = inst_18648;
var tmp18733 = inst_18650;
var inst_18648__$1 = tmp18732;
var inst_18649__$1 = tmp18731;
var inst_18650__$1 = tmp18733;
var inst_18651__$1 = inst_18663;
var state_18706__$1 = (function (){var statearr_18738 = state_18706;
(statearr_18738[(9)] = inst_18649__$1);

(statearr_18738[(21)] = inst_18662);

(statearr_18738[(10)] = inst_18651__$1);

(statearr_18738[(19)] = inst_18648__$1);

(statearr_18738[(20)] = inst_18650__$1);

return statearr_18738;
})();
var statearr_18739_20400 = state_18706__$1;
(statearr_18739_20400[(2)] = null);

(statearr_18739_20400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (40))){
var inst_18675 = (state_18706[(22)]);
var inst_18679 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18675);
var state_18706__$1 = state_18706;
var statearr_18740_20402 = state_18706__$1;
(statearr_18740_20402[(2)] = inst_18679);

(statearr_18740_20402[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (33))){
var inst_18666 = (state_18706[(23)]);
var inst_18668 = cljs.core.chunked_seq_QMARK_(inst_18666);
var state_18706__$1 = state_18706;
if(inst_18668){
var statearr_18741_20406 = state_18706__$1;
(statearr_18741_20406[(1)] = (36));

} else {
var statearr_18742_20407 = state_18706__$1;
(statearr_18742_20407[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (13))){
var inst_18597 = (state_18706[(24)]);
var inst_18600 = cljs.core.async.close_BANG_(inst_18597);
var state_18706__$1 = state_18706;
var statearr_18743_20408 = state_18706__$1;
(statearr_18743_20408[(2)] = inst_18600);

(statearr_18743_20408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (22))){
var inst_18620 = (state_18706[(8)]);
var inst_18623 = cljs.core.async.close_BANG_(inst_18620);
var state_18706__$1 = state_18706;
var statearr_18744_20409 = state_18706__$1;
(statearr_18744_20409[(2)] = inst_18623);

(statearr_18744_20409[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (36))){
var inst_18666 = (state_18706[(23)]);
var inst_18670 = cljs.core.chunk_first(inst_18666);
var inst_18671 = cljs.core.chunk_rest(inst_18666);
var inst_18672 = cljs.core.count(inst_18670);
var inst_18648 = inst_18671;
var inst_18649 = inst_18670;
var inst_18650 = inst_18672;
var inst_18651 = (0);
var state_18706__$1 = (function (){var statearr_18745 = state_18706;
(statearr_18745[(9)] = inst_18649);

(statearr_18745[(10)] = inst_18651);

(statearr_18745[(19)] = inst_18648);

(statearr_18745[(20)] = inst_18650);

return statearr_18745;
})();
var statearr_18746_20411 = state_18706__$1;
(statearr_18746_20411[(2)] = null);

(statearr_18746_20411[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (41))){
var inst_18666 = (state_18706[(23)]);
var inst_18681 = (state_18706[(2)]);
var inst_18682 = cljs.core.next(inst_18666);
var inst_18648 = inst_18682;
var inst_18649 = null;
var inst_18650 = (0);
var inst_18651 = (0);
var state_18706__$1 = (function (){var statearr_18747 = state_18706;
(statearr_18747[(9)] = inst_18649);

(statearr_18747[(25)] = inst_18681);

(statearr_18747[(10)] = inst_18651);

(statearr_18747[(19)] = inst_18648);

(statearr_18747[(20)] = inst_18650);

return statearr_18747;
})();
var statearr_18748_20413 = state_18706__$1;
(statearr_18748_20413[(2)] = null);

(statearr_18748_20413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (43))){
var state_18706__$1 = state_18706;
var statearr_18749_20414 = state_18706__$1;
(statearr_18749_20414[(2)] = null);

(statearr_18749_20414[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (29))){
var inst_18690 = (state_18706[(2)]);
var state_18706__$1 = state_18706;
var statearr_18750_20415 = state_18706__$1;
(statearr_18750_20415[(2)] = inst_18690);

(statearr_18750_20415[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (44))){
var inst_18699 = (state_18706[(2)]);
var state_18706__$1 = (function (){var statearr_18752 = state_18706;
(statearr_18752[(26)] = inst_18699);

return statearr_18752;
})();
var statearr_18753_20417 = state_18706__$1;
(statearr_18753_20417[(2)] = null);

(statearr_18753_20417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (6))){
var inst_18640 = (state_18706[(27)]);
var inst_18639 = cljs.core.deref(cs);
var inst_18640__$1 = cljs.core.keys(inst_18639);
var inst_18641 = cljs.core.count(inst_18640__$1);
var inst_18642 = cljs.core.reset_BANG_(dctr,inst_18641);
var inst_18647 = cljs.core.seq(inst_18640__$1);
var inst_18648 = inst_18647;
var inst_18649 = null;
var inst_18650 = (0);
var inst_18651 = (0);
var state_18706__$1 = (function (){var statearr_18755 = state_18706;
(statearr_18755[(9)] = inst_18649);

(statearr_18755[(27)] = inst_18640__$1);

(statearr_18755[(10)] = inst_18651);

(statearr_18755[(19)] = inst_18648);

(statearr_18755[(28)] = inst_18642);

(statearr_18755[(20)] = inst_18650);

return statearr_18755;
})();
var statearr_18756_20418 = state_18706__$1;
(statearr_18756_20418[(2)] = null);

(statearr_18756_20418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (28))){
var inst_18666 = (state_18706[(23)]);
var inst_18648 = (state_18706[(19)]);
var inst_18666__$1 = cljs.core.seq(inst_18648);
var state_18706__$1 = (function (){var statearr_18757 = state_18706;
(statearr_18757[(23)] = inst_18666__$1);

return statearr_18757;
})();
if(inst_18666__$1){
var statearr_18758_20419 = state_18706__$1;
(statearr_18758_20419[(1)] = (33));

} else {
var statearr_18759_20420 = state_18706__$1;
(statearr_18759_20420[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (25))){
var inst_18651 = (state_18706[(10)]);
var inst_18650 = (state_18706[(20)]);
var inst_18653 = (inst_18651 < inst_18650);
var inst_18654 = inst_18653;
var state_18706__$1 = state_18706;
if(cljs.core.truth_(inst_18654)){
var statearr_18761_20421 = state_18706__$1;
(statearr_18761_20421[(1)] = (27));

} else {
var statearr_18763_20422 = state_18706__$1;
(statearr_18763_20422[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (34))){
var state_18706__$1 = state_18706;
var statearr_18766_20423 = state_18706__$1;
(statearr_18766_20423[(2)] = null);

(statearr_18766_20423[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (17))){
var state_18706__$1 = state_18706;
var statearr_18767_20424 = state_18706__$1;
(statearr_18767_20424[(2)] = null);

(statearr_18767_20424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (3))){
var inst_18704 = (state_18706[(2)]);
var state_18706__$1 = state_18706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18706__$1,inst_18704);
} else {
if((state_val_18707 === (12))){
var inst_18635 = (state_18706[(2)]);
var state_18706__$1 = state_18706;
var statearr_18768_20426 = state_18706__$1;
(statearr_18768_20426[(2)] = inst_18635);

(statearr_18768_20426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (2))){
var state_18706__$1 = state_18706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18706__$1,(4),ch);
} else {
if((state_val_18707 === (23))){
var state_18706__$1 = state_18706;
var statearr_18770_20427 = state_18706__$1;
(statearr_18770_20427[(2)] = null);

(statearr_18770_20427[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (35))){
var inst_18688 = (state_18706[(2)]);
var state_18706__$1 = state_18706;
var statearr_18772_20429 = state_18706__$1;
(statearr_18772_20429[(2)] = inst_18688);

(statearr_18772_20429[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (19))){
var inst_18607 = (state_18706[(7)]);
var inst_18611 = cljs.core.chunk_first(inst_18607);
var inst_18612 = cljs.core.chunk_rest(inst_18607);
var inst_18613 = cljs.core.count(inst_18611);
var inst_18585 = inst_18612;
var inst_18586 = inst_18611;
var inst_18587 = inst_18613;
var inst_18588 = (0);
var state_18706__$1 = (function (){var statearr_18774 = state_18706;
(statearr_18774[(13)] = inst_18586);

(statearr_18774[(14)] = inst_18588);

(statearr_18774[(16)] = inst_18585);

(statearr_18774[(17)] = inst_18587);

return statearr_18774;
})();
var statearr_18776_20430 = state_18706__$1;
(statearr_18776_20430[(2)] = null);

(statearr_18776_20430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (11))){
var inst_18607 = (state_18706[(7)]);
var inst_18585 = (state_18706[(16)]);
var inst_18607__$1 = cljs.core.seq(inst_18585);
var state_18706__$1 = (function (){var statearr_18778 = state_18706;
(statearr_18778[(7)] = inst_18607__$1);

return statearr_18778;
})();
if(inst_18607__$1){
var statearr_18779_20433 = state_18706__$1;
(statearr_18779_20433[(1)] = (16));

} else {
var statearr_18780_20434 = state_18706__$1;
(statearr_18780_20434[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (9))){
var inst_18637 = (state_18706[(2)]);
var state_18706__$1 = state_18706;
var statearr_18781_20435 = state_18706__$1;
(statearr_18781_20435[(2)] = inst_18637);

(statearr_18781_20435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (5))){
var inst_18583 = cljs.core.deref(cs);
var inst_18584 = cljs.core.seq(inst_18583);
var inst_18585 = inst_18584;
var inst_18586 = null;
var inst_18587 = (0);
var inst_18588 = (0);
var state_18706__$1 = (function (){var statearr_18782 = state_18706;
(statearr_18782[(13)] = inst_18586);

(statearr_18782[(14)] = inst_18588);

(statearr_18782[(16)] = inst_18585);

(statearr_18782[(17)] = inst_18587);

return statearr_18782;
})();
var statearr_18783_20436 = state_18706__$1;
(statearr_18783_20436[(2)] = null);

(statearr_18783_20436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (14))){
var state_18706__$1 = state_18706;
var statearr_18784_20437 = state_18706__$1;
(statearr_18784_20437[(2)] = null);

(statearr_18784_20437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (45))){
var inst_18696 = (state_18706[(2)]);
var state_18706__$1 = state_18706;
var statearr_18788_20438 = state_18706__$1;
(statearr_18788_20438[(2)] = inst_18696);

(statearr_18788_20438[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (26))){
var inst_18640 = (state_18706[(27)]);
var inst_18692 = (state_18706[(2)]);
var inst_18693 = cljs.core.seq(inst_18640);
var state_18706__$1 = (function (){var statearr_18789 = state_18706;
(statearr_18789[(29)] = inst_18692);

return statearr_18789;
})();
if(inst_18693){
var statearr_18790_20439 = state_18706__$1;
(statearr_18790_20439[(1)] = (42));

} else {
var statearr_18791_20440 = state_18706__$1;
(statearr_18791_20440[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (16))){
var inst_18607 = (state_18706[(7)]);
var inst_18609 = cljs.core.chunked_seq_QMARK_(inst_18607);
var state_18706__$1 = state_18706;
if(inst_18609){
var statearr_18792_20441 = state_18706__$1;
(statearr_18792_20441[(1)] = (19));

} else {
var statearr_18793_20442 = state_18706__$1;
(statearr_18793_20442[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (38))){
var inst_18685 = (state_18706[(2)]);
var state_18706__$1 = state_18706;
var statearr_18794_20443 = state_18706__$1;
(statearr_18794_20443[(2)] = inst_18685);

(statearr_18794_20443[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (30))){
var state_18706__$1 = state_18706;
var statearr_18795_20444 = state_18706__$1;
(statearr_18795_20444[(2)] = null);

(statearr_18795_20444[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (10))){
var inst_18586 = (state_18706[(13)]);
var inst_18588 = (state_18706[(14)]);
var inst_18596 = cljs.core._nth(inst_18586,inst_18588);
var inst_18597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18596,(0),null);
var inst_18598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18596,(1),null);
var state_18706__$1 = (function (){var statearr_18796 = state_18706;
(statearr_18796[(24)] = inst_18597);

return statearr_18796;
})();
if(cljs.core.truth_(inst_18598)){
var statearr_18797_20445 = state_18706__$1;
(statearr_18797_20445[(1)] = (13));

} else {
var statearr_18798_20446 = state_18706__$1;
(statearr_18798_20446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (18))){
var inst_18633 = (state_18706[(2)]);
var state_18706__$1 = state_18706;
var statearr_18802_20449 = state_18706__$1;
(statearr_18802_20449[(2)] = inst_18633);

(statearr_18802_20449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (42))){
var state_18706__$1 = state_18706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18706__$1,(45),dchan);
} else {
if((state_val_18707 === (37))){
var inst_18666 = (state_18706[(23)]);
var inst_18675 = (state_18706[(22)]);
var inst_18576 = (state_18706[(12)]);
var inst_18675__$1 = cljs.core.first(inst_18666);
var inst_18676 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18675__$1,inst_18576,done);
var state_18706__$1 = (function (){var statearr_18813 = state_18706;
(statearr_18813[(22)] = inst_18675__$1);

return statearr_18813;
})();
if(cljs.core.truth_(inst_18676)){
var statearr_18814_20454 = state_18706__$1;
(statearr_18814_20454[(1)] = (39));

} else {
var statearr_18815_20455 = state_18706__$1;
(statearr_18815_20455[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (8))){
var inst_18588 = (state_18706[(14)]);
var inst_18587 = (state_18706[(17)]);
var inst_18590 = (inst_18588 < inst_18587);
var inst_18591 = inst_18590;
var state_18706__$1 = state_18706;
if(cljs.core.truth_(inst_18591)){
var statearr_18822_20456 = state_18706__$1;
(statearr_18822_20456[(1)] = (10));

} else {
var statearr_18823_20457 = state_18706__$1;
(statearr_18823_20457[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__17190__auto__ = null;
var cljs$core$async$mult_$_state_machine__17190__auto____0 = (function (){
var statearr_18824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18824[(0)] = cljs$core$async$mult_$_state_machine__17190__auto__);

(statearr_18824[(1)] = (1));

return statearr_18824;
});
var cljs$core$async$mult_$_state_machine__17190__auto____1 = (function (state_18706){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_18706);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e18825){var ex__17193__auto__ = e18825;
var statearr_18826_20462 = state_18706;
(statearr_18826_20462[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_18706[(4)]))){
var statearr_18831_20463 = state_18706;
(statearr_18831_20463[(1)] = cljs.core.first((state_18706[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20464 = state_18706;
state_18706 = G__20464;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17190__auto__ = function(state_18706){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17190__auto____1.call(this,state_18706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17190__auto____0;
cljs$core$async$mult_$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17190__auto____1;
return cljs$core$async$mult_$_state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_18838 = f__17666__auto__();
(statearr_18838[(6)] = c__17665__auto___20373);

return statearr_18838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
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
var G__18843 = arguments.length;
switch (G__18843) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_20473 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20473(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20477 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20477(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20488 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20488(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20496 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20496(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20501 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20501(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20507 = arguments.length;
var i__5770__auto___20508 = (0);
while(true){
if((i__5770__auto___20508 < len__5769__auto___20507)){
args__5775__auto__.push((arguments[i__5770__auto___20508]));

var G__20509 = (i__5770__auto___20508 + (1));
i__5770__auto___20508 = G__20509;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18862){
var map__18863 = p__18862;
var map__18863__$1 = cljs.core.__destructure_map(map__18863);
var opts = map__18863__$1;
var statearr_18864_20510 = state;
(statearr_18864_20510[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18866_20511 = state;
(statearr_18866_20511[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18868_20512 = state;
(statearr_18868_20512[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18856){
var G__18857 = cljs.core.first(seq18856);
var seq18856__$1 = cljs.core.next(seq18856);
var G__18858 = cljs.core.first(seq18856__$1);
var seq18856__$2 = cljs.core.next(seq18856__$1);
var G__18859 = cljs.core.first(seq18856__$2);
var seq18856__$3 = cljs.core.next(seq18856__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18857,G__18858,G__18859,seq18856__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18872 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18873){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18873 = meta18873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18874,meta18873__$1){
var self__ = this;
var _18874__$1 = this;
return (new cljs.core.async.t_cljs$core$async18872(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18873__$1));
}));

(cljs.core.async.t_cljs$core$async18872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18874){
var self__ = this;
var _18874__$1 = this;
return self__.meta18873;
}));

(cljs.core.async.t_cljs$core$async18872.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18872.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18872.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18872.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18872.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18872.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18872.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18872.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18873","meta18873",-354361653,null)], null);
}));

(cljs.core.async.t_cljs$core$async18872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18872");

(cljs.core.async.t_cljs$core$async18872.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18872.
 */
cljs.core.async.__GT_t_cljs$core$async18872 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18872(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18873){
return (new cljs.core.async.t_cljs$core$async18872(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18873));
});

}

return (new cljs.core.async.t_cljs$core$async18872(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17665__auto___20534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_18954){
var state_val_18955 = (state_18954[(1)]);
if((state_val_18955 === (7))){
var inst_18914 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
if(cljs.core.truth_(inst_18914)){
var statearr_18956_20541 = state_18954__$1;
(statearr_18956_20541[(1)] = (8));

} else {
var statearr_18957_20542 = state_18954__$1;
(statearr_18957_20542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (20))){
var inst_18904 = (state_18954[(7)]);
var state_18954__$1 = state_18954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18954__$1,(23),out,inst_18904);
} else {
if((state_val_18955 === (1))){
var inst_18885 = calc_state();
var inst_18886 = cljs.core.__destructure_map(inst_18885);
var inst_18888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18886,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18886,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18886,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18891 = inst_18885;
var state_18954__$1 = (function (){var statearr_18958 = state_18954;
(statearr_18958[(8)] = inst_18890);

(statearr_18958[(9)] = inst_18888);

(statearr_18958[(10)] = inst_18889);

(statearr_18958[(11)] = inst_18891);

return statearr_18958;
})();
var statearr_18959_20555 = state_18954__$1;
(statearr_18959_20555[(2)] = null);

(statearr_18959_20555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (24))){
var inst_18894 = (state_18954[(12)]);
var inst_18891 = inst_18894;
var state_18954__$1 = (function (){var statearr_18964 = state_18954;
(statearr_18964[(11)] = inst_18891);

return statearr_18964;
})();
var statearr_18965_20559 = state_18954__$1;
(statearr_18965_20559[(2)] = null);

(statearr_18965_20559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (4))){
var inst_18906 = (state_18954[(13)]);
var inst_18904 = (state_18954[(7)]);
var inst_18903 = (state_18954[(2)]);
var inst_18904__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18903,(0),null);
var inst_18905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18903,(1),null);
var inst_18906__$1 = (inst_18904__$1 == null);
var state_18954__$1 = (function (){var statearr_18966 = state_18954;
(statearr_18966[(13)] = inst_18906__$1);

(statearr_18966[(14)] = inst_18905);

(statearr_18966[(7)] = inst_18904__$1);

return statearr_18966;
})();
if(cljs.core.truth_(inst_18906__$1)){
var statearr_18967_20572 = state_18954__$1;
(statearr_18967_20572[(1)] = (5));

} else {
var statearr_18968_20574 = state_18954__$1;
(statearr_18968_20574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (15))){
var inst_18928 = (state_18954[(15)]);
var inst_18895 = (state_18954[(16)]);
var inst_18928__$1 = cljs.core.empty_QMARK_(inst_18895);
var state_18954__$1 = (function (){var statearr_18973 = state_18954;
(statearr_18973[(15)] = inst_18928__$1);

return statearr_18973;
})();
if(inst_18928__$1){
var statearr_18974_20576 = state_18954__$1;
(statearr_18974_20576[(1)] = (17));

} else {
var statearr_18975_20577 = state_18954__$1;
(statearr_18975_20577[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (21))){
var inst_18894 = (state_18954[(12)]);
var inst_18891 = inst_18894;
var state_18954__$1 = (function (){var statearr_18976 = state_18954;
(statearr_18976[(11)] = inst_18891);

return statearr_18976;
})();
var statearr_18977_20578 = state_18954__$1;
(statearr_18977_20578[(2)] = null);

(statearr_18977_20578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (13))){
var inst_18921 = (state_18954[(2)]);
var inst_18922 = calc_state();
var inst_18891 = inst_18922;
var state_18954__$1 = (function (){var statearr_18978 = state_18954;
(statearr_18978[(17)] = inst_18921);

(statearr_18978[(11)] = inst_18891);

return statearr_18978;
})();
var statearr_18979_20579 = state_18954__$1;
(statearr_18979_20579[(2)] = null);

(statearr_18979_20579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (22))){
var inst_18948 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
var statearr_18980_20580 = state_18954__$1;
(statearr_18980_20580[(2)] = inst_18948);

(statearr_18980_20580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (6))){
var inst_18905 = (state_18954[(14)]);
var inst_18912 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18905,change);
var state_18954__$1 = state_18954;
var statearr_18981_20583 = state_18954__$1;
(statearr_18981_20583[(2)] = inst_18912);

(statearr_18981_20583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (25))){
var state_18954__$1 = state_18954;
var statearr_18982_20584 = state_18954__$1;
(statearr_18982_20584[(2)] = null);

(statearr_18982_20584[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (17))){
var inst_18896 = (state_18954[(18)]);
var inst_18905 = (state_18954[(14)]);
var inst_18930 = (inst_18896.cljs$core$IFn$_invoke$arity$1 ? inst_18896.cljs$core$IFn$_invoke$arity$1(inst_18905) : inst_18896.call(null,inst_18905));
var inst_18931 = cljs.core.not(inst_18930);
var state_18954__$1 = state_18954;
var statearr_18983_20589 = state_18954__$1;
(statearr_18983_20589[(2)] = inst_18931);

(statearr_18983_20589[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (3))){
var inst_18952 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18954__$1,inst_18952);
} else {
if((state_val_18955 === (12))){
var state_18954__$1 = state_18954;
var statearr_18984_20596 = state_18954__$1;
(statearr_18984_20596[(2)] = null);

(statearr_18984_20596[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (2))){
var inst_18894 = (state_18954[(12)]);
var inst_18891 = (state_18954[(11)]);
var inst_18894__$1 = cljs.core.__destructure_map(inst_18891);
var inst_18895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18894__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18894__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18894__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18954__$1 = (function (){var statearr_18987 = state_18954;
(statearr_18987[(18)] = inst_18896);

(statearr_18987[(12)] = inst_18894__$1);

(statearr_18987[(16)] = inst_18895);

return statearr_18987;
})();
return cljs.core.async.ioc_alts_BANG_(state_18954__$1,(4),inst_18898);
} else {
if((state_val_18955 === (23))){
var inst_18939 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
if(cljs.core.truth_(inst_18939)){
var statearr_18988_20603 = state_18954__$1;
(statearr_18988_20603[(1)] = (24));

} else {
var statearr_18989_20610 = state_18954__$1;
(statearr_18989_20610[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (19))){
var inst_18934 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
var statearr_18990_20618 = state_18954__$1;
(statearr_18990_20618[(2)] = inst_18934);

(statearr_18990_20618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (11))){
var inst_18905 = (state_18954[(14)]);
var inst_18918 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18905);
var state_18954__$1 = state_18954;
var statearr_18991_20623 = state_18954__$1;
(statearr_18991_20623[(2)] = inst_18918);

(statearr_18991_20623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (9))){
var inst_18905 = (state_18954[(14)]);
var inst_18925 = (state_18954[(19)]);
var inst_18895 = (state_18954[(16)]);
var inst_18925__$1 = (inst_18895.cljs$core$IFn$_invoke$arity$1 ? inst_18895.cljs$core$IFn$_invoke$arity$1(inst_18905) : inst_18895.call(null,inst_18905));
var state_18954__$1 = (function (){var statearr_18995 = state_18954;
(statearr_18995[(19)] = inst_18925__$1);

return statearr_18995;
})();
if(cljs.core.truth_(inst_18925__$1)){
var statearr_18996_20628 = state_18954__$1;
(statearr_18996_20628[(1)] = (14));

} else {
var statearr_18997_20629 = state_18954__$1;
(statearr_18997_20629[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (5))){
var inst_18906 = (state_18954[(13)]);
var state_18954__$1 = state_18954;
var statearr_18998_20630 = state_18954__$1;
(statearr_18998_20630[(2)] = inst_18906);

(statearr_18998_20630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (14))){
var inst_18925 = (state_18954[(19)]);
var state_18954__$1 = state_18954;
var statearr_18999_20631 = state_18954__$1;
(statearr_18999_20631[(2)] = inst_18925);

(statearr_18999_20631[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (26))){
var inst_18944 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
var statearr_19000_20633 = state_18954__$1;
(statearr_19000_20633[(2)] = inst_18944);

(statearr_19000_20633[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (16))){
var inst_18936 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
if(cljs.core.truth_(inst_18936)){
var statearr_19001_20635 = state_18954__$1;
(statearr_19001_20635[(1)] = (20));

} else {
var statearr_19002_20636 = state_18954__$1;
(statearr_19002_20636[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (10))){
var inst_18950 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
var statearr_19003_20641 = state_18954__$1;
(statearr_19003_20641[(2)] = inst_18950);

(statearr_19003_20641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (18))){
var inst_18928 = (state_18954[(15)]);
var state_18954__$1 = state_18954;
var statearr_19004_20642 = state_18954__$1;
(statearr_19004_20642[(2)] = inst_18928);

(statearr_19004_20642[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (8))){
var inst_18904 = (state_18954[(7)]);
var inst_18916 = (inst_18904 == null);
var state_18954__$1 = state_18954;
if(cljs.core.truth_(inst_18916)){
var statearr_19005_20647 = state_18954__$1;
(statearr_19005_20647[(1)] = (11));

} else {
var statearr_19006_20648 = state_18954__$1;
(statearr_19006_20648[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__17190__auto__ = null;
var cljs$core$async$mix_$_state_machine__17190__auto____0 = (function (){
var statearr_19007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19007[(0)] = cljs$core$async$mix_$_state_machine__17190__auto__);

(statearr_19007[(1)] = (1));

return statearr_19007;
});
var cljs$core$async$mix_$_state_machine__17190__auto____1 = (function (state_18954){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_18954);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e19008){var ex__17193__auto__ = e19008;
var statearr_19009_20655 = state_18954;
(statearr_19009_20655[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_18954[(4)]))){
var statearr_19010_20656 = state_18954;
(statearr_19010_20656[(1)] = cljs.core.first((state_18954[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20657 = state_18954;
state_18954 = G__20657;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17190__auto__ = function(state_18954){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17190__auto____1.call(this,state_18954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17190__auto____0;
cljs$core$async$mix_$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17190__auto____1;
return cljs$core$async$mix_$_state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_19011 = f__17666__auto__();
(statearr_19011[(6)] = c__17665__auto___20534);

return statearr_19011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_20662 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20662(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20672 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20672(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20673 = (function() {
var G__20674 = null;
var G__20674__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20674__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20674 = function(p,v){
switch(arguments.length){
case 1:
return G__20674__1.call(this,p);
case 2:
return G__20674__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20674.cljs$core$IFn$_invoke$arity$1 = G__20674__1;
G__20674.cljs$core$IFn$_invoke$arity$2 = G__20674__2;
return G__20674;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19014 = arguments.length;
switch (G__19014) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20673(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20673(p,v);
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
var G__19020 = arguments.length;
switch (G__19020) {
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
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19018_SHARP_){
if(cljs.core.truth_((p1__19018_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19018_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19018_SHARP_.call(null,topic)))){
return p1__19018_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19018_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19025 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19025 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19026){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19026 = meta19026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19027,meta19026__$1){
var self__ = this;
var _19027__$1 = this;
return (new cljs.core.async.t_cljs$core$async19025(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19026__$1));
}));

(cljs.core.async.t_cljs$core$async19025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19027){
var self__ = this;
var _19027__$1 = this;
return self__.meta19026;
}));

(cljs.core.async.t_cljs$core$async19025.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19025.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19025.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19025.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19026","meta19026",150531979,null)], null);
}));

(cljs.core.async.t_cljs$core$async19025.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19025");

(cljs.core.async.t_cljs$core$async19025.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19025");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19025.
 */
cljs.core.async.__GT_t_cljs$core$async19025 = (function cljs$core$async$__GT_t_cljs$core$async19025(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19026){
return (new cljs.core.async.t_cljs$core$async19025(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19026));
});

}

return (new cljs.core.async.t_cljs$core$async19025(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17665__auto___20690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_19127){
var state_val_19134 = (state_19127[(1)]);
if((state_val_19134 === (7))){
var inst_19115 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19141_20691 = state_19127__$1;
(statearr_19141_20691[(2)] = inst_19115);

(statearr_19141_20691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (20))){
var state_19127__$1 = state_19127;
var statearr_19142_20692 = state_19127__$1;
(statearr_19142_20692[(2)] = null);

(statearr_19142_20692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (1))){
var state_19127__$1 = state_19127;
var statearr_19143_20693 = state_19127__$1;
(statearr_19143_20693[(2)] = null);

(statearr_19143_20693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (24))){
var inst_19098 = (state_19127[(7)]);
var inst_19107 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19098);
var state_19127__$1 = state_19127;
var statearr_19146_20694 = state_19127__$1;
(statearr_19146_20694[(2)] = inst_19107);

(statearr_19146_20694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (4))){
var inst_19038 = (state_19127[(8)]);
var inst_19038__$1 = (state_19127[(2)]);
var inst_19039 = (inst_19038__$1 == null);
var state_19127__$1 = (function (){var statearr_19147 = state_19127;
(statearr_19147[(8)] = inst_19038__$1);

return statearr_19147;
})();
if(cljs.core.truth_(inst_19039)){
var statearr_19148_20695 = state_19127__$1;
(statearr_19148_20695[(1)] = (5));

} else {
var statearr_19150_20696 = state_19127__$1;
(statearr_19150_20696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (15))){
var inst_19092 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19151_20697 = state_19127__$1;
(statearr_19151_20697[(2)] = inst_19092);

(statearr_19151_20697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (21))){
var inst_19112 = (state_19127[(2)]);
var state_19127__$1 = (function (){var statearr_19152 = state_19127;
(statearr_19152[(9)] = inst_19112);

return statearr_19152;
})();
var statearr_19153_20698 = state_19127__$1;
(statearr_19153_20698[(2)] = null);

(statearr_19153_20698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (13))){
var inst_19074 = (state_19127[(10)]);
var inst_19076 = cljs.core.chunked_seq_QMARK_(inst_19074);
var state_19127__$1 = state_19127;
if(inst_19076){
var statearr_19154_20699 = state_19127__$1;
(statearr_19154_20699[(1)] = (16));

} else {
var statearr_19155_20700 = state_19127__$1;
(statearr_19155_20700[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (22))){
var inst_19104 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
if(cljs.core.truth_(inst_19104)){
var statearr_19156_20701 = state_19127__$1;
(statearr_19156_20701[(1)] = (23));

} else {
var statearr_19157_20702 = state_19127__$1;
(statearr_19157_20702[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (6))){
var inst_19098 = (state_19127[(7)]);
var inst_19038 = (state_19127[(8)]);
var inst_19100 = (state_19127[(11)]);
var inst_19098__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19038) : topic_fn.call(null,inst_19038));
var inst_19099 = cljs.core.deref(mults);
var inst_19100__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19099,inst_19098__$1);
var state_19127__$1 = (function (){var statearr_19161 = state_19127;
(statearr_19161[(7)] = inst_19098__$1);

(statearr_19161[(11)] = inst_19100__$1);

return statearr_19161;
})();
if(cljs.core.truth_(inst_19100__$1)){
var statearr_19162_20703 = state_19127__$1;
(statearr_19162_20703[(1)] = (19));

} else {
var statearr_19163_20704 = state_19127__$1;
(statearr_19163_20704[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (25))){
var inst_19109 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19164_20705 = state_19127__$1;
(statearr_19164_20705[(2)] = inst_19109);

(statearr_19164_20705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (17))){
var inst_19074 = (state_19127[(10)]);
var inst_19083 = cljs.core.first(inst_19074);
var inst_19084 = cljs.core.async.muxch_STAR_(inst_19083);
var inst_19085 = cljs.core.async.close_BANG_(inst_19084);
var inst_19086 = cljs.core.next(inst_19074);
var inst_19054 = inst_19086;
var inst_19055 = null;
var inst_19056 = (0);
var inst_19057 = (0);
var state_19127__$1 = (function (){var statearr_19165 = state_19127;
(statearr_19165[(12)] = inst_19057);

(statearr_19165[(13)] = inst_19054);

(statearr_19165[(14)] = inst_19056);

(statearr_19165[(15)] = inst_19085);

(statearr_19165[(16)] = inst_19055);

return statearr_19165;
})();
var statearr_19166_20706 = state_19127__$1;
(statearr_19166_20706[(2)] = null);

(statearr_19166_20706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (3))){
var inst_19117 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19127__$1,inst_19117);
} else {
if((state_val_19134 === (12))){
var inst_19094 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19167_20707 = state_19127__$1;
(statearr_19167_20707[(2)] = inst_19094);

(statearr_19167_20707[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (2))){
var state_19127__$1 = state_19127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19127__$1,(4),ch);
} else {
if((state_val_19134 === (23))){
var state_19127__$1 = state_19127;
var statearr_19168_20711 = state_19127__$1;
(statearr_19168_20711[(2)] = null);

(statearr_19168_20711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (19))){
var inst_19038 = (state_19127[(8)]);
var inst_19100 = (state_19127[(11)]);
var inst_19102 = cljs.core.async.muxch_STAR_(inst_19100);
var state_19127__$1 = state_19127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19127__$1,(22),inst_19102,inst_19038);
} else {
if((state_val_19134 === (11))){
var inst_19054 = (state_19127[(13)]);
var inst_19074 = (state_19127[(10)]);
var inst_19074__$1 = cljs.core.seq(inst_19054);
var state_19127__$1 = (function (){var statearr_19169 = state_19127;
(statearr_19169[(10)] = inst_19074__$1);

return statearr_19169;
})();
if(inst_19074__$1){
var statearr_19170_20712 = state_19127__$1;
(statearr_19170_20712[(1)] = (13));

} else {
var statearr_19171_20713 = state_19127__$1;
(statearr_19171_20713[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (9))){
var inst_19096 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19172_20715 = state_19127__$1;
(statearr_19172_20715[(2)] = inst_19096);

(statearr_19172_20715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (5))){
var inst_19051 = cljs.core.deref(mults);
var inst_19052 = cljs.core.vals(inst_19051);
var inst_19053 = cljs.core.seq(inst_19052);
var inst_19054 = inst_19053;
var inst_19055 = null;
var inst_19056 = (0);
var inst_19057 = (0);
var state_19127__$1 = (function (){var statearr_19173 = state_19127;
(statearr_19173[(12)] = inst_19057);

(statearr_19173[(13)] = inst_19054);

(statearr_19173[(14)] = inst_19056);

(statearr_19173[(16)] = inst_19055);

return statearr_19173;
})();
var statearr_19174_20716 = state_19127__$1;
(statearr_19174_20716[(2)] = null);

(statearr_19174_20716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (14))){
var state_19127__$1 = state_19127;
var statearr_19178_20718 = state_19127__$1;
(statearr_19178_20718[(2)] = null);

(statearr_19178_20718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (16))){
var inst_19074 = (state_19127[(10)]);
var inst_19078 = cljs.core.chunk_first(inst_19074);
var inst_19079 = cljs.core.chunk_rest(inst_19074);
var inst_19080 = cljs.core.count(inst_19078);
var inst_19054 = inst_19079;
var inst_19055 = inst_19078;
var inst_19056 = inst_19080;
var inst_19057 = (0);
var state_19127__$1 = (function (){var statearr_19179 = state_19127;
(statearr_19179[(12)] = inst_19057);

(statearr_19179[(13)] = inst_19054);

(statearr_19179[(14)] = inst_19056);

(statearr_19179[(16)] = inst_19055);

return statearr_19179;
})();
var statearr_19180_20722 = state_19127__$1;
(statearr_19180_20722[(2)] = null);

(statearr_19180_20722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (10))){
var inst_19057 = (state_19127[(12)]);
var inst_19054 = (state_19127[(13)]);
var inst_19056 = (state_19127[(14)]);
var inst_19055 = (state_19127[(16)]);
var inst_19062 = cljs.core._nth(inst_19055,inst_19057);
var inst_19063 = cljs.core.async.muxch_STAR_(inst_19062);
var inst_19065 = cljs.core.async.close_BANG_(inst_19063);
var inst_19071 = (inst_19057 + (1));
var tmp19175 = inst_19054;
var tmp19176 = inst_19056;
var tmp19177 = inst_19055;
var inst_19054__$1 = tmp19175;
var inst_19055__$1 = tmp19177;
var inst_19056__$1 = tmp19176;
var inst_19057__$1 = inst_19071;
var state_19127__$1 = (function (){var statearr_19181 = state_19127;
(statearr_19181[(17)] = inst_19065);

(statearr_19181[(12)] = inst_19057__$1);

(statearr_19181[(13)] = inst_19054__$1);

(statearr_19181[(14)] = inst_19056__$1);

(statearr_19181[(16)] = inst_19055__$1);

return statearr_19181;
})();
var statearr_19182_20730 = state_19127__$1;
(statearr_19182_20730[(2)] = null);

(statearr_19182_20730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (18))){
var inst_19089 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19183_20731 = state_19127__$1;
(statearr_19183_20731[(2)] = inst_19089);

(statearr_19183_20731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (8))){
var inst_19057 = (state_19127[(12)]);
var inst_19056 = (state_19127[(14)]);
var inst_19059 = (inst_19057 < inst_19056);
var inst_19060 = inst_19059;
var state_19127__$1 = state_19127;
if(cljs.core.truth_(inst_19060)){
var statearr_19184_20735 = state_19127__$1;
(statearr_19184_20735[(1)] = (10));

} else {
var statearr_19185_20736 = state_19127__$1;
(statearr_19185_20736[(1)] = (11));

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
var cljs$core$async$state_machine__17190__auto__ = null;
var cljs$core$async$state_machine__17190__auto____0 = (function (){
var statearr_19186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19186[(0)] = cljs$core$async$state_machine__17190__auto__);

(statearr_19186[(1)] = (1));

return statearr_19186;
});
var cljs$core$async$state_machine__17190__auto____1 = (function (state_19127){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_19127);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e19187){var ex__17193__auto__ = e19187;
var statearr_19188_20737 = state_19127;
(statearr_19188_20737[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_19127[(4)]))){
var statearr_19189_20738 = state_19127;
(statearr_19189_20738[(1)] = cljs.core.first((state_19127[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20739 = state_19127;
state_19127 = G__20739;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$state_machine__17190__auto__ = function(state_19127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17190__auto____1.call(this,state_19127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17190__auto____0;
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17190__auto____1;
return cljs$core$async$state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_19190 = f__17666__auto__();
(statearr_19190[(6)] = c__17665__auto___20690);

return statearr_19190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
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
var G__19192 = arguments.length;
switch (G__19192) {
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
var G__19202 = arguments.length;
switch (G__19202) {
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
var G__19207 = arguments.length;
switch (G__19207) {
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
var c__17665__auto___20752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_19252){
var state_val_19253 = (state_19252[(1)]);
if((state_val_19253 === (7))){
var state_19252__$1 = state_19252;
var statearr_19256_20753 = state_19252__$1;
(statearr_19256_20753[(2)] = null);

(statearr_19256_20753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (1))){
var state_19252__$1 = state_19252;
var statearr_19258_20754 = state_19252__$1;
(statearr_19258_20754[(2)] = null);

(statearr_19258_20754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (4))){
var inst_19211 = (state_19252[(7)]);
var inst_19210 = (state_19252[(8)]);
var inst_19213 = (inst_19211 < inst_19210);
var state_19252__$1 = state_19252;
if(cljs.core.truth_(inst_19213)){
var statearr_19260_20756 = state_19252__$1;
(statearr_19260_20756[(1)] = (6));

} else {
var statearr_19261_20757 = state_19252__$1;
(statearr_19261_20757[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (15))){
var inst_19236 = (state_19252[(9)]);
var inst_19241 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19236);
var state_19252__$1 = state_19252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19252__$1,(17),out,inst_19241);
} else {
if((state_val_19253 === (13))){
var inst_19236 = (state_19252[(9)]);
var inst_19236__$1 = (state_19252[(2)]);
var inst_19237 = cljs.core.some(cljs.core.nil_QMARK_,inst_19236__$1);
var state_19252__$1 = (function (){var statearr_19263 = state_19252;
(statearr_19263[(9)] = inst_19236__$1);

return statearr_19263;
})();
if(cljs.core.truth_(inst_19237)){
var statearr_19265_20758 = state_19252__$1;
(statearr_19265_20758[(1)] = (14));

} else {
var statearr_19266_20759 = state_19252__$1;
(statearr_19266_20759[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (6))){
var state_19252__$1 = state_19252;
var statearr_19267_20760 = state_19252__$1;
(statearr_19267_20760[(2)] = null);

(statearr_19267_20760[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (17))){
var inst_19243 = (state_19252[(2)]);
var state_19252__$1 = (function (){var statearr_19269 = state_19252;
(statearr_19269[(10)] = inst_19243);

return statearr_19269;
})();
var statearr_19270_20761 = state_19252__$1;
(statearr_19270_20761[(2)] = null);

(statearr_19270_20761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (3))){
var inst_19248 = (state_19252[(2)]);
var state_19252__$1 = state_19252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19252__$1,inst_19248);
} else {
if((state_val_19253 === (12))){
var _ = (function (){var statearr_19271 = state_19252;
(statearr_19271[(4)] = cljs.core.rest((state_19252[(4)])));

return statearr_19271;
})();
var state_19252__$1 = state_19252;
var ex19268 = (state_19252__$1[(2)]);
var statearr_19272_20762 = state_19252__$1;
(statearr_19272_20762[(5)] = ex19268);


if((ex19268 instanceof Object)){
var statearr_19273_20763 = state_19252__$1;
(statearr_19273_20763[(1)] = (11));

(statearr_19273_20763[(5)] = null);

} else {
throw ex19268;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (2))){
var inst_19209 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19210 = cnt;
var inst_19211 = (0);
var state_19252__$1 = (function (){var statearr_19274 = state_19252;
(statearr_19274[(7)] = inst_19211);

(statearr_19274[(8)] = inst_19210);

(statearr_19274[(11)] = inst_19209);

return statearr_19274;
})();
var statearr_19275_20764 = state_19252__$1;
(statearr_19275_20764[(2)] = null);

(statearr_19275_20764[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (11))){
var inst_19215 = (state_19252[(2)]);
var inst_19216 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19252__$1 = (function (){var statearr_19279 = state_19252;
(statearr_19279[(12)] = inst_19215);

return statearr_19279;
})();
var statearr_19280_20765 = state_19252__$1;
(statearr_19280_20765[(2)] = inst_19216);

(statearr_19280_20765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (9))){
var inst_19211 = (state_19252[(7)]);
var _ = (function (){var statearr_19281 = state_19252;
(statearr_19281[(4)] = cljs.core.cons((12),(state_19252[(4)])));

return statearr_19281;
})();
var inst_19222 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19211) : chs__$1.call(null,inst_19211));
var inst_19223 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19211) : done.call(null,inst_19211));
var inst_19224 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19222,inst_19223);
var ___$1 = (function (){var statearr_19282 = state_19252;
(statearr_19282[(4)] = cljs.core.rest((state_19252[(4)])));

return statearr_19282;
})();
var state_19252__$1 = state_19252;
var statearr_19283_20768 = state_19252__$1;
(statearr_19283_20768[(2)] = inst_19224);

(statearr_19283_20768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (5))){
var inst_19234 = (state_19252[(2)]);
var state_19252__$1 = (function (){var statearr_19284 = state_19252;
(statearr_19284[(13)] = inst_19234);

return statearr_19284;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19252__$1,(13),dchan);
} else {
if((state_val_19253 === (14))){
var inst_19239 = cljs.core.async.close_BANG_(out);
var state_19252__$1 = state_19252;
var statearr_19285_20769 = state_19252__$1;
(statearr_19285_20769[(2)] = inst_19239);

(statearr_19285_20769[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (16))){
var inst_19246 = (state_19252[(2)]);
var state_19252__$1 = state_19252;
var statearr_19286_20770 = state_19252__$1;
(statearr_19286_20770[(2)] = inst_19246);

(statearr_19286_20770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (10))){
var inst_19211 = (state_19252[(7)]);
var inst_19227 = (state_19252[(2)]);
var inst_19228 = (inst_19211 + (1));
var inst_19211__$1 = inst_19228;
var state_19252__$1 = (function (){var statearr_19287 = state_19252;
(statearr_19287[(7)] = inst_19211__$1);

(statearr_19287[(14)] = inst_19227);

return statearr_19287;
})();
var statearr_19291_20771 = state_19252__$1;
(statearr_19291_20771[(2)] = null);

(statearr_19291_20771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (8))){
var inst_19232 = (state_19252[(2)]);
var state_19252__$1 = state_19252;
var statearr_19299_20772 = state_19252__$1;
(statearr_19299_20772[(2)] = inst_19232);

(statearr_19299_20772[(1)] = (5));


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
var cljs$core$async$state_machine__17190__auto__ = null;
var cljs$core$async$state_machine__17190__auto____0 = (function (){
var statearr_19303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19303[(0)] = cljs$core$async$state_machine__17190__auto__);

(statearr_19303[(1)] = (1));

return statearr_19303;
});
var cljs$core$async$state_machine__17190__auto____1 = (function (state_19252){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_19252);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e19304){var ex__17193__auto__ = e19304;
var statearr_19305_20773 = state_19252;
(statearr_19305_20773[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_19252[(4)]))){
var statearr_19306_20774 = state_19252;
(statearr_19306_20774[(1)] = cljs.core.first((state_19252[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20775 = state_19252;
state_19252 = G__20775;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$state_machine__17190__auto__ = function(state_19252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17190__auto____1.call(this,state_19252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17190__auto____0;
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17190__auto____1;
return cljs$core$async$state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_19314 = f__17666__auto__();
(statearr_19314[(6)] = c__17665__auto___20752);

return statearr_19314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
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
var G__19320 = arguments.length;
switch (G__19320) {
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
var c__17665__auto___20782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_19369){
var state_val_19372 = (state_19369[(1)]);
if((state_val_19372 === (7))){
var inst_19348 = (state_19369[(7)]);
var inst_19349 = (state_19369[(8)]);
var inst_19348__$1 = (state_19369[(2)]);
var inst_19349__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19348__$1,(0),null);
var inst_19350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19348__$1,(1),null);
var inst_19351 = (inst_19349__$1 == null);
var state_19369__$1 = (function (){var statearr_19373 = state_19369;
(statearr_19373[(7)] = inst_19348__$1);

(statearr_19373[(9)] = inst_19350);

(statearr_19373[(8)] = inst_19349__$1);

return statearr_19373;
})();
if(cljs.core.truth_(inst_19351)){
var statearr_19374_20783 = state_19369__$1;
(statearr_19374_20783[(1)] = (8));

} else {
var statearr_19375_20784 = state_19369__$1;
(statearr_19375_20784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19372 === (1))){
var inst_19334 = cljs.core.vec(chs);
var inst_19335 = inst_19334;
var state_19369__$1 = (function (){var statearr_19376 = state_19369;
(statearr_19376[(10)] = inst_19335);

return statearr_19376;
})();
var statearr_19377_20786 = state_19369__$1;
(statearr_19377_20786[(2)] = null);

(statearr_19377_20786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19372 === (4))){
var inst_19335 = (state_19369[(10)]);
var state_19369__$1 = state_19369;
return cljs.core.async.ioc_alts_BANG_(state_19369__$1,(7),inst_19335);
} else {
if((state_val_19372 === (6))){
var inst_19365 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
var statearr_19378_20787 = state_19369__$1;
(statearr_19378_20787[(2)] = inst_19365);

(statearr_19378_20787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19372 === (3))){
var inst_19367 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19369__$1,inst_19367);
} else {
if((state_val_19372 === (2))){
var inst_19335 = (state_19369[(10)]);
var inst_19341 = cljs.core.count(inst_19335);
var inst_19342 = (inst_19341 > (0));
var state_19369__$1 = state_19369;
if(cljs.core.truth_(inst_19342)){
var statearr_19380_20790 = state_19369__$1;
(statearr_19380_20790[(1)] = (4));

} else {
var statearr_19381_20791 = state_19369__$1;
(statearr_19381_20791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19372 === (11))){
var inst_19335 = (state_19369[(10)]);
var inst_19358 = (state_19369[(2)]);
var tmp19379 = inst_19335;
var inst_19335__$1 = tmp19379;
var state_19369__$1 = (function (){var statearr_19382 = state_19369;
(statearr_19382[(11)] = inst_19358);

(statearr_19382[(10)] = inst_19335__$1);

return statearr_19382;
})();
var statearr_19383_20792 = state_19369__$1;
(statearr_19383_20792[(2)] = null);

(statearr_19383_20792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19372 === (9))){
var inst_19349 = (state_19369[(8)]);
var state_19369__$1 = state_19369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19369__$1,(11),out,inst_19349);
} else {
if((state_val_19372 === (5))){
var inst_19363 = cljs.core.async.close_BANG_(out);
var state_19369__$1 = state_19369;
var statearr_19384_20793 = state_19369__$1;
(statearr_19384_20793[(2)] = inst_19363);

(statearr_19384_20793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19372 === (10))){
var inst_19361 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
var statearr_19385_20794 = state_19369__$1;
(statearr_19385_20794[(2)] = inst_19361);

(statearr_19385_20794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19372 === (8))){
var inst_19348 = (state_19369[(7)]);
var inst_19350 = (state_19369[(9)]);
var inst_19349 = (state_19369[(8)]);
var inst_19335 = (state_19369[(10)]);
var inst_19353 = (function (){var cs = inst_19335;
var vec__19344 = inst_19348;
var v = inst_19349;
var c = inst_19350;
return (function (p1__19318_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19318_SHARP_);
});
})();
var inst_19354 = cljs.core.filterv(inst_19353,inst_19335);
var inst_19335__$1 = inst_19354;
var state_19369__$1 = (function (){var statearr_19387 = state_19369;
(statearr_19387[(10)] = inst_19335__$1);

return statearr_19387;
})();
var statearr_19389_20796 = state_19369__$1;
(statearr_19389_20796[(2)] = null);

(statearr_19389_20796[(1)] = (2));


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
var cljs$core$async$state_machine__17190__auto__ = null;
var cljs$core$async$state_machine__17190__auto____0 = (function (){
var statearr_19390 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19390[(0)] = cljs$core$async$state_machine__17190__auto__);

(statearr_19390[(1)] = (1));

return statearr_19390;
});
var cljs$core$async$state_machine__17190__auto____1 = (function (state_19369){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_19369);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e19391){var ex__17193__auto__ = e19391;
var statearr_19392_20798 = state_19369;
(statearr_19392_20798[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_19369[(4)]))){
var statearr_19393_20799 = state_19369;
(statearr_19393_20799[(1)] = cljs.core.first((state_19369[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20800 = state_19369;
state_19369 = G__20800;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$state_machine__17190__auto__ = function(state_19369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17190__auto____1.call(this,state_19369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17190__auto____0;
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17190__auto____1;
return cljs$core$async$state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_19405 = f__17666__auto__();
(statearr_19405[(6)] = c__17665__auto___20782);

return statearr_19405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
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
var G__19409 = arguments.length;
switch (G__19409) {
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
var c__17665__auto___20807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_19433){
var state_val_19434 = (state_19433[(1)]);
if((state_val_19434 === (7))){
var inst_19415 = (state_19433[(7)]);
var inst_19415__$1 = (state_19433[(2)]);
var inst_19416 = (inst_19415__$1 == null);
var inst_19417 = cljs.core.not(inst_19416);
var state_19433__$1 = (function (){var statearr_19435 = state_19433;
(statearr_19435[(7)] = inst_19415__$1);

return statearr_19435;
})();
if(inst_19417){
var statearr_19436_20809 = state_19433__$1;
(statearr_19436_20809[(1)] = (8));

} else {
var statearr_19437_20810 = state_19433__$1;
(statearr_19437_20810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (1))){
var inst_19410 = (0);
var state_19433__$1 = (function (){var statearr_19438 = state_19433;
(statearr_19438[(8)] = inst_19410);

return statearr_19438;
})();
var statearr_19439_20812 = state_19433__$1;
(statearr_19439_20812[(2)] = null);

(statearr_19439_20812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (4))){
var state_19433__$1 = state_19433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19433__$1,(7),ch);
} else {
if((state_val_19434 === (6))){
var inst_19428 = (state_19433[(2)]);
var state_19433__$1 = state_19433;
var statearr_19440_20814 = state_19433__$1;
(statearr_19440_20814[(2)] = inst_19428);

(statearr_19440_20814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (3))){
var inst_19430 = (state_19433[(2)]);
var inst_19431 = cljs.core.async.close_BANG_(out);
var state_19433__$1 = (function (){var statearr_19441 = state_19433;
(statearr_19441[(9)] = inst_19430);

return statearr_19441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19433__$1,inst_19431);
} else {
if((state_val_19434 === (2))){
var inst_19410 = (state_19433[(8)]);
var inst_19412 = (inst_19410 < n);
var state_19433__$1 = state_19433;
if(cljs.core.truth_(inst_19412)){
var statearr_19442_20816 = state_19433__$1;
(statearr_19442_20816[(1)] = (4));

} else {
var statearr_19443_20817 = state_19433__$1;
(statearr_19443_20817[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (11))){
var inst_19410 = (state_19433[(8)]);
var inst_19420 = (state_19433[(2)]);
var inst_19421 = (inst_19410 + (1));
var inst_19410__$1 = inst_19421;
var state_19433__$1 = (function (){var statearr_19446 = state_19433;
(statearr_19446[(8)] = inst_19410__$1);

(statearr_19446[(10)] = inst_19420);

return statearr_19446;
})();
var statearr_19447_20818 = state_19433__$1;
(statearr_19447_20818[(2)] = null);

(statearr_19447_20818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (9))){
var state_19433__$1 = state_19433;
var statearr_19448_20819 = state_19433__$1;
(statearr_19448_20819[(2)] = null);

(statearr_19448_20819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (5))){
var state_19433__$1 = state_19433;
var statearr_19449_20820 = state_19433__$1;
(statearr_19449_20820[(2)] = null);

(statearr_19449_20820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (10))){
var inst_19425 = (state_19433[(2)]);
var state_19433__$1 = state_19433;
var statearr_19451_20821 = state_19433__$1;
(statearr_19451_20821[(2)] = inst_19425);

(statearr_19451_20821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (8))){
var inst_19415 = (state_19433[(7)]);
var state_19433__$1 = state_19433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19433__$1,(11),out,inst_19415);
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
var cljs$core$async$state_machine__17190__auto__ = null;
var cljs$core$async$state_machine__17190__auto____0 = (function (){
var statearr_19452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19452[(0)] = cljs$core$async$state_machine__17190__auto__);

(statearr_19452[(1)] = (1));

return statearr_19452;
});
var cljs$core$async$state_machine__17190__auto____1 = (function (state_19433){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_19433);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e19453){var ex__17193__auto__ = e19453;
var statearr_19454_20822 = state_19433;
(statearr_19454_20822[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_19433[(4)]))){
var statearr_19455_20823 = state_19433;
(statearr_19455_20823[(1)] = cljs.core.first((state_19433[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20824 = state_19433;
state_19433 = G__20824;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$state_machine__17190__auto__ = function(state_19433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17190__auto____1.call(this,state_19433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17190__auto____0;
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17190__auto____1;
return cljs$core$async$state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_19465 = f__17666__auto__();
(statearr_19465[(6)] = c__17665__auto___20807);

return statearr_19465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19468 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19468 = (function (f,ch,meta19469){
this.f = f;
this.ch = ch;
this.meta19469 = meta19469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19470,meta19469__$1){
var self__ = this;
var _19470__$1 = this;
return (new cljs.core.async.t_cljs$core$async19468(self__.f,self__.ch,meta19469__$1));
}));

(cljs.core.async.t_cljs$core$async19468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19470){
var self__ = this;
var _19470__$1 = this;
return self__.meta19469;
}));

(cljs.core.async.t_cljs$core$async19468.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19468.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19468.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19468.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19468.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19471 = (function (f,ch,meta19469,_,fn1,meta19472){
this.f = f;
this.ch = ch;
this.meta19469 = meta19469;
this._ = _;
this.fn1 = fn1;
this.meta19472 = meta19472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19473,meta19472__$1){
var self__ = this;
var _19473__$1 = this;
return (new cljs.core.async.t_cljs$core$async19471(self__.f,self__.ch,self__.meta19469,self__._,self__.fn1,meta19472__$1));
}));

(cljs.core.async.t_cljs$core$async19471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19473){
var self__ = this;
var _19473__$1 = this;
return self__.meta19472;
}));

(cljs.core.async.t_cljs$core$async19471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19466_SHARP_){
var G__19477 = (((p1__19466_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19466_SHARP_) : self__.f.call(null,p1__19466_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19477) : f1.call(null,G__19477));
});
}));

(cljs.core.async.t_cljs$core$async19471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19469","meta19469",-791708757,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19468","cljs.core.async/t_cljs$core$async19468",-437415929,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19472","meta19472",-809892926,null)], null);
}));

(cljs.core.async.t_cljs$core$async19471.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19471");

(cljs.core.async.t_cljs$core$async19471.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19471");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19471.
 */
cljs.core.async.__GT_t_cljs$core$async19471 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19471(f__$1,ch__$1,meta19469__$1,___$2,fn1__$1,meta19472){
return (new cljs.core.async.t_cljs$core$async19471(f__$1,ch__$1,meta19469__$1,___$2,fn1__$1,meta19472));
});

}

return (new cljs.core.async.t_cljs$core$async19471(self__.f,self__.ch,self__.meta19469,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19479 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19479) : self__.f.call(null,G__19479));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19468.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19468.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19469","meta19469",-791708757,null)], null);
}));

(cljs.core.async.t_cljs$core$async19468.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19468");

(cljs.core.async.t_cljs$core$async19468.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19468");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19468.
 */
cljs.core.async.__GT_t_cljs$core$async19468 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19468(f__$1,ch__$1,meta19469){
return (new cljs.core.async.t_cljs$core$async19468(f__$1,ch__$1,meta19469));
});

}

return (new cljs.core.async.t_cljs$core$async19468(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19497 = (function (f,ch,meta19498){
this.f = f;
this.ch = ch;
this.meta19498 = meta19498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19499,meta19498__$1){
var self__ = this;
var _19499__$1 = this;
return (new cljs.core.async.t_cljs$core$async19497(self__.f,self__.ch,meta19498__$1));
}));

(cljs.core.async.t_cljs$core$async19497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19499){
var self__ = this;
var _19499__$1 = this;
return self__.meta19498;
}));

(cljs.core.async.t_cljs$core$async19497.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19497.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19497.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19498","meta19498",-50737062,null)], null);
}));

(cljs.core.async.t_cljs$core$async19497.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19497");

(cljs.core.async.t_cljs$core$async19497.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19497");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19497.
 */
cljs.core.async.__GT_t_cljs$core$async19497 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19497(f__$1,ch__$1,meta19498){
return (new cljs.core.async.t_cljs$core$async19497(f__$1,ch__$1,meta19498));
});

}

return (new cljs.core.async.t_cljs$core$async19497(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19517 = (function (p,ch,meta19518){
this.p = p;
this.ch = ch;
this.meta19518 = meta19518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19519,meta19518__$1){
var self__ = this;
var _19519__$1 = this;
return (new cljs.core.async.t_cljs$core$async19517(self__.p,self__.ch,meta19518__$1));
}));

(cljs.core.async.t_cljs$core$async19517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19519){
var self__ = this;
var _19519__$1 = this;
return self__.meta19518;
}));

(cljs.core.async.t_cljs$core$async19517.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19517.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19517.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19517.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19517.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19517.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19517.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19518","meta19518",133240755,null)], null);
}));

(cljs.core.async.t_cljs$core$async19517.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19517");

(cljs.core.async.t_cljs$core$async19517.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19517");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19517.
 */
cljs.core.async.__GT_t_cljs$core$async19517 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19517(p__$1,ch__$1,meta19518){
return (new cljs.core.async.t_cljs$core$async19517(p__$1,ch__$1,meta19518));
});

}

return (new cljs.core.async.t_cljs$core$async19517(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19536 = arguments.length;
switch (G__19536) {
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
var c__17665__auto___20835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_19558){
var state_val_19559 = (state_19558[(1)]);
if((state_val_19559 === (7))){
var inst_19554 = (state_19558[(2)]);
var state_19558__$1 = state_19558;
var statearr_19564_20838 = state_19558__$1;
(statearr_19564_20838[(2)] = inst_19554);

(statearr_19564_20838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (1))){
var state_19558__$1 = state_19558;
var statearr_19565_20839 = state_19558__$1;
(statearr_19565_20839[(2)] = null);

(statearr_19565_20839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (4))){
var inst_19540 = (state_19558[(7)]);
var inst_19540__$1 = (state_19558[(2)]);
var inst_19541 = (inst_19540__$1 == null);
var state_19558__$1 = (function (){var statearr_19566 = state_19558;
(statearr_19566[(7)] = inst_19540__$1);

return statearr_19566;
})();
if(cljs.core.truth_(inst_19541)){
var statearr_19567_20840 = state_19558__$1;
(statearr_19567_20840[(1)] = (5));

} else {
var statearr_19568_20841 = state_19558__$1;
(statearr_19568_20841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (6))){
var inst_19540 = (state_19558[(7)]);
var inst_19545 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19540) : p.call(null,inst_19540));
var state_19558__$1 = state_19558;
if(cljs.core.truth_(inst_19545)){
var statearr_19569_20844 = state_19558__$1;
(statearr_19569_20844[(1)] = (8));

} else {
var statearr_19570_20845 = state_19558__$1;
(statearr_19570_20845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (3))){
var inst_19556 = (state_19558[(2)]);
var state_19558__$1 = state_19558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19558__$1,inst_19556);
} else {
if((state_val_19559 === (2))){
var state_19558__$1 = state_19558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19558__$1,(4),ch);
} else {
if((state_val_19559 === (11))){
var inst_19548 = (state_19558[(2)]);
var state_19558__$1 = state_19558;
var statearr_19572_20846 = state_19558__$1;
(statearr_19572_20846[(2)] = inst_19548);

(statearr_19572_20846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (9))){
var state_19558__$1 = state_19558;
var statearr_19574_20847 = state_19558__$1;
(statearr_19574_20847[(2)] = null);

(statearr_19574_20847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (5))){
var inst_19543 = cljs.core.async.close_BANG_(out);
var state_19558__$1 = state_19558;
var statearr_19575_20848 = state_19558__$1;
(statearr_19575_20848[(2)] = inst_19543);

(statearr_19575_20848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (10))){
var inst_19551 = (state_19558[(2)]);
var state_19558__$1 = (function (){var statearr_19576 = state_19558;
(statearr_19576[(8)] = inst_19551);

return statearr_19576;
})();
var statearr_19577_20849 = state_19558__$1;
(statearr_19577_20849[(2)] = null);

(statearr_19577_20849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (8))){
var inst_19540 = (state_19558[(7)]);
var state_19558__$1 = state_19558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19558__$1,(11),out,inst_19540);
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
var cljs$core$async$state_machine__17190__auto__ = null;
var cljs$core$async$state_machine__17190__auto____0 = (function (){
var statearr_19578 = [null,null,null,null,null,null,null,null,null];
(statearr_19578[(0)] = cljs$core$async$state_machine__17190__auto__);

(statearr_19578[(1)] = (1));

return statearr_19578;
});
var cljs$core$async$state_machine__17190__auto____1 = (function (state_19558){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_19558);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e19579){var ex__17193__auto__ = e19579;
var statearr_19580_20850 = state_19558;
(statearr_19580_20850[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_19558[(4)]))){
var statearr_19581_20852 = state_19558;
(statearr_19581_20852[(1)] = cljs.core.first((state_19558[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20854 = state_19558;
state_19558 = G__20854;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$state_machine__17190__auto__ = function(state_19558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17190__auto____1.call(this,state_19558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17190__auto____0;
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17190__auto____1;
return cljs$core$async$state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_19582 = f__17666__auto__();
(statearr_19582[(6)] = c__17665__auto___20835);

return statearr_19582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19588 = arguments.length;
switch (G__19588) {
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
var c__17665__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_19664){
var state_val_19665 = (state_19664[(1)]);
if((state_val_19665 === (7))){
var inst_19660 = (state_19664[(2)]);
var state_19664__$1 = state_19664;
var statearr_19672_20862 = state_19664__$1;
(statearr_19672_20862[(2)] = inst_19660);

(statearr_19672_20862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (20))){
var inst_19626 = (state_19664[(7)]);
var inst_19641 = (state_19664[(2)]);
var inst_19642 = cljs.core.next(inst_19626);
var inst_19612 = inst_19642;
var inst_19613 = null;
var inst_19614 = (0);
var inst_19615 = (0);
var state_19664__$1 = (function (){var statearr_19673 = state_19664;
(statearr_19673[(8)] = inst_19612);

(statearr_19673[(9)] = inst_19613);

(statearr_19673[(10)] = inst_19614);

(statearr_19673[(11)] = inst_19615);

(statearr_19673[(12)] = inst_19641);

return statearr_19673;
})();
var statearr_19674_20868 = state_19664__$1;
(statearr_19674_20868[(2)] = null);

(statearr_19674_20868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (1))){
var state_19664__$1 = state_19664;
var statearr_19681_20869 = state_19664__$1;
(statearr_19681_20869[(2)] = null);

(statearr_19681_20869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (4))){
var inst_19598 = (state_19664[(13)]);
var inst_19598__$1 = (state_19664[(2)]);
var inst_19599 = (inst_19598__$1 == null);
var state_19664__$1 = (function (){var statearr_19682 = state_19664;
(statearr_19682[(13)] = inst_19598__$1);

return statearr_19682;
})();
if(cljs.core.truth_(inst_19599)){
var statearr_19683_20871 = state_19664__$1;
(statearr_19683_20871[(1)] = (5));

} else {
var statearr_19684_20873 = state_19664__$1;
(statearr_19684_20873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (15))){
var state_19664__$1 = state_19664;
var statearr_19688_20874 = state_19664__$1;
(statearr_19688_20874[(2)] = null);

(statearr_19688_20874[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (21))){
var state_19664__$1 = state_19664;
var statearr_19690_20875 = state_19664__$1;
(statearr_19690_20875[(2)] = null);

(statearr_19690_20875[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (13))){
var inst_19612 = (state_19664[(8)]);
var inst_19613 = (state_19664[(9)]);
var inst_19614 = (state_19664[(10)]);
var inst_19615 = (state_19664[(11)]);
var inst_19622 = (state_19664[(2)]);
var inst_19623 = (inst_19615 + (1));
var tmp19685 = inst_19612;
var tmp19686 = inst_19613;
var tmp19687 = inst_19614;
var inst_19612__$1 = tmp19685;
var inst_19613__$1 = tmp19686;
var inst_19614__$1 = tmp19687;
var inst_19615__$1 = inst_19623;
var state_19664__$1 = (function (){var statearr_19691 = state_19664;
(statearr_19691[(8)] = inst_19612__$1);

(statearr_19691[(14)] = inst_19622);

(statearr_19691[(9)] = inst_19613__$1);

(statearr_19691[(10)] = inst_19614__$1);

(statearr_19691[(11)] = inst_19615__$1);

return statearr_19691;
})();
var statearr_19693_20879 = state_19664__$1;
(statearr_19693_20879[(2)] = null);

(statearr_19693_20879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (22))){
var state_19664__$1 = state_19664;
var statearr_19694_20880 = state_19664__$1;
(statearr_19694_20880[(2)] = null);

(statearr_19694_20880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (6))){
var inst_19598 = (state_19664[(13)]);
var inst_19610 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19598) : f.call(null,inst_19598));
var inst_19611 = cljs.core.seq(inst_19610);
var inst_19612 = inst_19611;
var inst_19613 = null;
var inst_19614 = (0);
var inst_19615 = (0);
var state_19664__$1 = (function (){var statearr_19695 = state_19664;
(statearr_19695[(8)] = inst_19612);

(statearr_19695[(9)] = inst_19613);

(statearr_19695[(10)] = inst_19614);

(statearr_19695[(11)] = inst_19615);

return statearr_19695;
})();
var statearr_19696_20884 = state_19664__$1;
(statearr_19696_20884[(2)] = null);

(statearr_19696_20884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (17))){
var inst_19626 = (state_19664[(7)]);
var inst_19634 = cljs.core.chunk_first(inst_19626);
var inst_19635 = cljs.core.chunk_rest(inst_19626);
var inst_19636 = cljs.core.count(inst_19634);
var inst_19612 = inst_19635;
var inst_19613 = inst_19634;
var inst_19614 = inst_19636;
var inst_19615 = (0);
var state_19664__$1 = (function (){var statearr_19702 = state_19664;
(statearr_19702[(8)] = inst_19612);

(statearr_19702[(9)] = inst_19613);

(statearr_19702[(10)] = inst_19614);

(statearr_19702[(11)] = inst_19615);

return statearr_19702;
})();
var statearr_19703_20885 = state_19664__$1;
(statearr_19703_20885[(2)] = null);

(statearr_19703_20885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (3))){
var inst_19662 = (state_19664[(2)]);
var state_19664__$1 = state_19664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19664__$1,inst_19662);
} else {
if((state_val_19665 === (12))){
var inst_19650 = (state_19664[(2)]);
var state_19664__$1 = state_19664;
var statearr_19709_20886 = state_19664__$1;
(statearr_19709_20886[(2)] = inst_19650);

(statearr_19709_20886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (2))){
var state_19664__$1 = state_19664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19664__$1,(4),in$);
} else {
if((state_val_19665 === (23))){
var inst_19658 = (state_19664[(2)]);
var state_19664__$1 = state_19664;
var statearr_19710_20887 = state_19664__$1;
(statearr_19710_20887[(2)] = inst_19658);

(statearr_19710_20887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (19))){
var inst_19645 = (state_19664[(2)]);
var state_19664__$1 = state_19664;
var statearr_19711_20889 = state_19664__$1;
(statearr_19711_20889[(2)] = inst_19645);

(statearr_19711_20889[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (11))){
var inst_19626 = (state_19664[(7)]);
var inst_19612 = (state_19664[(8)]);
var inst_19626__$1 = cljs.core.seq(inst_19612);
var state_19664__$1 = (function (){var statearr_19712 = state_19664;
(statearr_19712[(7)] = inst_19626__$1);

return statearr_19712;
})();
if(inst_19626__$1){
var statearr_19713_20894 = state_19664__$1;
(statearr_19713_20894[(1)] = (14));

} else {
var statearr_19714_20895 = state_19664__$1;
(statearr_19714_20895[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (9))){
var inst_19652 = (state_19664[(2)]);
var inst_19653 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19664__$1 = (function (){var statearr_19716 = state_19664;
(statearr_19716[(15)] = inst_19652);

return statearr_19716;
})();
if(cljs.core.truth_(inst_19653)){
var statearr_19717_20896 = state_19664__$1;
(statearr_19717_20896[(1)] = (21));

} else {
var statearr_19718_20897 = state_19664__$1;
(statearr_19718_20897[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (5))){
var inst_19601 = cljs.core.async.close_BANG_(out);
var state_19664__$1 = state_19664;
var statearr_19719_20900 = state_19664__$1;
(statearr_19719_20900[(2)] = inst_19601);

(statearr_19719_20900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (14))){
var inst_19626 = (state_19664[(7)]);
var inst_19632 = cljs.core.chunked_seq_QMARK_(inst_19626);
var state_19664__$1 = state_19664;
if(inst_19632){
var statearr_19721_20905 = state_19664__$1;
(statearr_19721_20905[(1)] = (17));

} else {
var statearr_19722_20906 = state_19664__$1;
(statearr_19722_20906[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (16))){
var inst_19648 = (state_19664[(2)]);
var state_19664__$1 = state_19664;
var statearr_19723_20907 = state_19664__$1;
(statearr_19723_20907[(2)] = inst_19648);

(statearr_19723_20907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (10))){
var inst_19613 = (state_19664[(9)]);
var inst_19615 = (state_19664[(11)]);
var inst_19620 = cljs.core._nth(inst_19613,inst_19615);
var state_19664__$1 = state_19664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19664__$1,(13),out,inst_19620);
} else {
if((state_val_19665 === (18))){
var inst_19626 = (state_19664[(7)]);
var inst_19639 = cljs.core.first(inst_19626);
var state_19664__$1 = state_19664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19664__$1,(20),out,inst_19639);
} else {
if((state_val_19665 === (8))){
var inst_19614 = (state_19664[(10)]);
var inst_19615 = (state_19664[(11)]);
var inst_19617 = (inst_19615 < inst_19614);
var inst_19618 = inst_19617;
var state_19664__$1 = state_19664;
if(cljs.core.truth_(inst_19618)){
var statearr_19729_20910 = state_19664__$1;
(statearr_19729_20910[(1)] = (10));

} else {
var statearr_19730_20911 = state_19664__$1;
(statearr_19730_20911[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__17190__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17190__auto____0 = (function (){
var statearr_19731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19731[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17190__auto__);

(statearr_19731[(1)] = (1));

return statearr_19731;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17190__auto____1 = (function (state_19664){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_19664);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e19732){var ex__17193__auto__ = e19732;
var statearr_19733_20912 = state_19664;
(statearr_19733_20912[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_19664[(4)]))){
var statearr_19734_20913 = state_19664;
(statearr_19734_20913[(1)] = cljs.core.first((state_19664[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20914 = state_19664;
state_19664 = G__20914;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17190__auto__ = function(state_19664){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17190__auto____1.call(this,state_19664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17190__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17190__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_19736 = f__17666__auto__();
(statearr_19736[(6)] = c__17665__auto__);

return statearr_19736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
}));

return c__17665__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19741 = arguments.length;
switch (G__19741) {
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
var G__19753 = arguments.length;
switch (G__19753) {
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
var G__19755 = arguments.length;
switch (G__19755) {
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
var c__17665__auto___20921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_19782){
var state_val_19783 = (state_19782[(1)]);
if((state_val_19783 === (7))){
var inst_19777 = (state_19782[(2)]);
var state_19782__$1 = state_19782;
var statearr_19784_20922 = state_19782__$1;
(statearr_19784_20922[(2)] = inst_19777);

(statearr_19784_20922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19783 === (1))){
var inst_19759 = null;
var state_19782__$1 = (function (){var statearr_19785 = state_19782;
(statearr_19785[(7)] = inst_19759);

return statearr_19785;
})();
var statearr_19786_20924 = state_19782__$1;
(statearr_19786_20924[(2)] = null);

(statearr_19786_20924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19783 === (4))){
var inst_19762 = (state_19782[(8)]);
var inst_19762__$1 = (state_19782[(2)]);
var inst_19763 = (inst_19762__$1 == null);
var inst_19764 = cljs.core.not(inst_19763);
var state_19782__$1 = (function (){var statearr_19787 = state_19782;
(statearr_19787[(8)] = inst_19762__$1);

return statearr_19787;
})();
if(inst_19764){
var statearr_19788_20927 = state_19782__$1;
(statearr_19788_20927[(1)] = (5));

} else {
var statearr_19789_20928 = state_19782__$1;
(statearr_19789_20928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19783 === (6))){
var state_19782__$1 = state_19782;
var statearr_19790_20929 = state_19782__$1;
(statearr_19790_20929[(2)] = null);

(statearr_19790_20929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19783 === (3))){
var inst_19779 = (state_19782[(2)]);
var inst_19780 = cljs.core.async.close_BANG_(out);
var state_19782__$1 = (function (){var statearr_19791 = state_19782;
(statearr_19791[(9)] = inst_19779);

return statearr_19791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19782__$1,inst_19780);
} else {
if((state_val_19783 === (2))){
var state_19782__$1 = state_19782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19782__$1,(4),ch);
} else {
if((state_val_19783 === (11))){
var inst_19762 = (state_19782[(8)]);
var inst_19771 = (state_19782[(2)]);
var inst_19759 = inst_19762;
var state_19782__$1 = (function (){var statearr_19792 = state_19782;
(statearr_19792[(10)] = inst_19771);

(statearr_19792[(7)] = inst_19759);

return statearr_19792;
})();
var statearr_19793_20932 = state_19782__$1;
(statearr_19793_20932[(2)] = null);

(statearr_19793_20932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19783 === (9))){
var inst_19762 = (state_19782[(8)]);
var state_19782__$1 = state_19782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19782__$1,(11),out,inst_19762);
} else {
if((state_val_19783 === (5))){
var inst_19759 = (state_19782[(7)]);
var inst_19762 = (state_19782[(8)]);
var inst_19766 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19762,inst_19759);
var state_19782__$1 = state_19782;
if(inst_19766){
var statearr_19795_20939 = state_19782__$1;
(statearr_19795_20939[(1)] = (8));

} else {
var statearr_19796_20940 = state_19782__$1;
(statearr_19796_20940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19783 === (10))){
var inst_19774 = (state_19782[(2)]);
var state_19782__$1 = state_19782;
var statearr_19797_20941 = state_19782__$1;
(statearr_19797_20941[(2)] = inst_19774);

(statearr_19797_20941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19783 === (8))){
var inst_19759 = (state_19782[(7)]);
var tmp19794 = inst_19759;
var inst_19759__$1 = tmp19794;
var state_19782__$1 = (function (){var statearr_19798 = state_19782;
(statearr_19798[(7)] = inst_19759__$1);

return statearr_19798;
})();
var statearr_19799_20942 = state_19782__$1;
(statearr_19799_20942[(2)] = null);

(statearr_19799_20942[(1)] = (2));


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
var cljs$core$async$state_machine__17190__auto__ = null;
var cljs$core$async$state_machine__17190__auto____0 = (function (){
var statearr_19800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19800[(0)] = cljs$core$async$state_machine__17190__auto__);

(statearr_19800[(1)] = (1));

return statearr_19800;
});
var cljs$core$async$state_machine__17190__auto____1 = (function (state_19782){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_19782);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e19801){var ex__17193__auto__ = e19801;
var statearr_19802_20946 = state_19782;
(statearr_19802_20946[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_19782[(4)]))){
var statearr_19803_20947 = state_19782;
(statearr_19803_20947[(1)] = cljs.core.first((state_19782[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20948 = state_19782;
state_19782 = G__20948;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$state_machine__17190__auto__ = function(state_19782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17190__auto____1.call(this,state_19782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17190__auto____0;
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17190__auto____1;
return cljs$core$async$state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_19804 = f__17666__auto__();
(statearr_19804[(6)] = c__17665__auto___20921);

return statearr_19804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19806 = arguments.length;
switch (G__19806) {
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
var c__17665__auto___20950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_19848){
var state_val_19849 = (state_19848[(1)]);
if((state_val_19849 === (7))){
var inst_19844 = (state_19848[(2)]);
var state_19848__$1 = state_19848;
var statearr_19853_20951 = state_19848__$1;
(statearr_19853_20951[(2)] = inst_19844);

(statearr_19853_20951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (1))){
var inst_19808 = (new Array(n));
var inst_19809 = inst_19808;
var inst_19810 = (0);
var state_19848__$1 = (function (){var statearr_19854 = state_19848;
(statearr_19854[(7)] = inst_19810);

(statearr_19854[(8)] = inst_19809);

return statearr_19854;
})();
var statearr_19855_20952 = state_19848__$1;
(statearr_19855_20952[(2)] = null);

(statearr_19855_20952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (4))){
var inst_19813 = (state_19848[(9)]);
var inst_19813__$1 = (state_19848[(2)]);
var inst_19814 = (inst_19813__$1 == null);
var inst_19815 = cljs.core.not(inst_19814);
var state_19848__$1 = (function (){var statearr_19856 = state_19848;
(statearr_19856[(9)] = inst_19813__$1);

return statearr_19856;
})();
if(inst_19815){
var statearr_19857_20953 = state_19848__$1;
(statearr_19857_20953[(1)] = (5));

} else {
var statearr_19858_20954 = state_19848__$1;
(statearr_19858_20954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (15))){
var inst_19838 = (state_19848[(2)]);
var state_19848__$1 = state_19848;
var statearr_19859_20955 = state_19848__$1;
(statearr_19859_20955[(2)] = inst_19838);

(statearr_19859_20955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (13))){
var state_19848__$1 = state_19848;
var statearr_19860_20956 = state_19848__$1;
(statearr_19860_20956[(2)] = null);

(statearr_19860_20956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (6))){
var inst_19810 = (state_19848[(7)]);
var inst_19834 = (inst_19810 > (0));
var state_19848__$1 = state_19848;
if(cljs.core.truth_(inst_19834)){
var statearr_19861_20957 = state_19848__$1;
(statearr_19861_20957[(1)] = (12));

} else {
var statearr_19862_20958 = state_19848__$1;
(statearr_19862_20958[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (3))){
var inst_19846 = (state_19848[(2)]);
var state_19848__$1 = state_19848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19848__$1,inst_19846);
} else {
if((state_val_19849 === (12))){
var inst_19809 = (state_19848[(8)]);
var inst_19836 = cljs.core.vec(inst_19809);
var state_19848__$1 = state_19848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19848__$1,(15),out,inst_19836);
} else {
if((state_val_19849 === (2))){
var state_19848__$1 = state_19848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19848__$1,(4),ch);
} else {
if((state_val_19849 === (11))){
var inst_19825 = (state_19848[(2)]);
var inst_19826 = (new Array(n));
var inst_19809 = inst_19826;
var inst_19810 = (0);
var state_19848__$1 = (function (){var statearr_19863 = state_19848;
(statearr_19863[(10)] = inst_19825);

(statearr_19863[(7)] = inst_19810);

(statearr_19863[(8)] = inst_19809);

return statearr_19863;
})();
var statearr_19864_20959 = state_19848__$1;
(statearr_19864_20959[(2)] = null);

(statearr_19864_20959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (9))){
var inst_19809 = (state_19848[(8)]);
var inst_19823 = cljs.core.vec(inst_19809);
var state_19848__$1 = state_19848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19848__$1,(11),out,inst_19823);
} else {
if((state_val_19849 === (5))){
var inst_19818 = (state_19848[(11)]);
var inst_19810 = (state_19848[(7)]);
var inst_19809 = (state_19848[(8)]);
var inst_19813 = (state_19848[(9)]);
var inst_19817 = (inst_19809[inst_19810] = inst_19813);
var inst_19818__$1 = (inst_19810 + (1));
var inst_19819 = (inst_19818__$1 < n);
var state_19848__$1 = (function (){var statearr_19866 = state_19848;
(statearr_19866[(11)] = inst_19818__$1);

(statearr_19866[(12)] = inst_19817);

return statearr_19866;
})();
if(cljs.core.truth_(inst_19819)){
var statearr_19867_20962 = state_19848__$1;
(statearr_19867_20962[(1)] = (8));

} else {
var statearr_19868_20963 = state_19848__$1;
(statearr_19868_20963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (14))){
var inst_19841 = (state_19848[(2)]);
var inst_19842 = cljs.core.async.close_BANG_(out);
var state_19848__$1 = (function (){var statearr_19870 = state_19848;
(statearr_19870[(13)] = inst_19841);

return statearr_19870;
})();
var statearr_19871_20965 = state_19848__$1;
(statearr_19871_20965[(2)] = inst_19842);

(statearr_19871_20965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (10))){
var inst_19832 = (state_19848[(2)]);
var state_19848__$1 = state_19848;
var statearr_19872_20966 = state_19848__$1;
(statearr_19872_20966[(2)] = inst_19832);

(statearr_19872_20966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (8))){
var inst_19818 = (state_19848[(11)]);
var inst_19809 = (state_19848[(8)]);
var tmp19869 = inst_19809;
var inst_19809__$1 = tmp19869;
var inst_19810 = inst_19818;
var state_19848__$1 = (function (){var statearr_19873 = state_19848;
(statearr_19873[(7)] = inst_19810);

(statearr_19873[(8)] = inst_19809__$1);

return statearr_19873;
})();
var statearr_19874_20971 = state_19848__$1;
(statearr_19874_20971[(2)] = null);

(statearr_19874_20971[(1)] = (2));


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
var cljs$core$async$state_machine__17190__auto__ = null;
var cljs$core$async$state_machine__17190__auto____0 = (function (){
var statearr_19879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19879[(0)] = cljs$core$async$state_machine__17190__auto__);

(statearr_19879[(1)] = (1));

return statearr_19879;
});
var cljs$core$async$state_machine__17190__auto____1 = (function (state_19848){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_19848);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e19880){var ex__17193__auto__ = e19880;
var statearr_19881_20972 = state_19848;
(statearr_19881_20972[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_19848[(4)]))){
var statearr_19882_20973 = state_19848;
(statearr_19882_20973[(1)] = cljs.core.first((state_19848[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20974 = state_19848;
state_19848 = G__20974;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$state_machine__17190__auto__ = function(state_19848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17190__auto____1.call(this,state_19848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17190__auto____0;
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17190__auto____1;
return cljs$core$async$state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_19887 = f__17666__auto__();
(statearr_19887[(6)] = c__17665__auto___20950);

return statearr_19887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19889 = arguments.length;
switch (G__19889) {
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
var c__17665__auto___20976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_19936){
var state_val_19937 = (state_19936[(1)]);
if((state_val_19937 === (7))){
var inst_19932 = (state_19936[(2)]);
var state_19936__$1 = state_19936;
var statearr_19938_20977 = state_19936__$1;
(statearr_19938_20977[(2)] = inst_19932);

(statearr_19938_20977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (1))){
var inst_19890 = [];
var inst_19891 = inst_19890;
var inst_19892 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19936__$1 = (function (){var statearr_19939 = state_19936;
(statearr_19939[(7)] = inst_19892);

(statearr_19939[(8)] = inst_19891);

return statearr_19939;
})();
var statearr_19940_20978 = state_19936__$1;
(statearr_19940_20978[(2)] = null);

(statearr_19940_20978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (4))){
var inst_19896 = (state_19936[(9)]);
var inst_19896__$1 = (state_19936[(2)]);
var inst_19898 = (inst_19896__$1 == null);
var inst_19899 = cljs.core.not(inst_19898);
var state_19936__$1 = (function (){var statearr_19941 = state_19936;
(statearr_19941[(9)] = inst_19896__$1);

return statearr_19941;
})();
if(inst_19899){
var statearr_19942_20979 = state_19936__$1;
(statearr_19942_20979[(1)] = (5));

} else {
var statearr_19943_20980 = state_19936__$1;
(statearr_19943_20980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (15))){
var inst_19891 = (state_19936[(8)]);
var inst_19924 = cljs.core.vec(inst_19891);
var state_19936__$1 = state_19936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19936__$1,(18),out,inst_19924);
} else {
if((state_val_19937 === (13))){
var inst_19919 = (state_19936[(2)]);
var state_19936__$1 = state_19936;
var statearr_19944_20981 = state_19936__$1;
(statearr_19944_20981[(2)] = inst_19919);

(statearr_19944_20981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (6))){
var inst_19891 = (state_19936[(8)]);
var inst_19921 = inst_19891.length;
var inst_19922 = (inst_19921 > (0));
var state_19936__$1 = state_19936;
if(cljs.core.truth_(inst_19922)){
var statearr_19945_20982 = state_19936__$1;
(statearr_19945_20982[(1)] = (15));

} else {
var statearr_19946_20983 = state_19936__$1;
(statearr_19946_20983[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (17))){
var inst_19929 = (state_19936[(2)]);
var inst_19930 = cljs.core.async.close_BANG_(out);
var state_19936__$1 = (function (){var statearr_19947 = state_19936;
(statearr_19947[(10)] = inst_19929);

return statearr_19947;
})();
var statearr_19948_20984 = state_19936__$1;
(statearr_19948_20984[(2)] = inst_19930);

(statearr_19948_20984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (3))){
var inst_19934 = (state_19936[(2)]);
var state_19936__$1 = state_19936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19936__$1,inst_19934);
} else {
if((state_val_19937 === (12))){
var inst_19891 = (state_19936[(8)]);
var inst_19912 = cljs.core.vec(inst_19891);
var state_19936__$1 = state_19936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19936__$1,(14),out,inst_19912);
} else {
if((state_val_19937 === (2))){
var state_19936__$1 = state_19936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19936__$1,(4),ch);
} else {
if((state_val_19937 === (11))){
var inst_19896 = (state_19936[(9)]);
var inst_19901 = (state_19936[(11)]);
var inst_19891 = (state_19936[(8)]);
var inst_19909 = inst_19891.push(inst_19896);
var tmp19949 = inst_19891;
var inst_19891__$1 = tmp19949;
var inst_19892 = inst_19901;
var state_19936__$1 = (function (){var statearr_19954 = state_19936;
(statearr_19954[(7)] = inst_19892);

(statearr_19954[(12)] = inst_19909);

(statearr_19954[(8)] = inst_19891__$1);

return statearr_19954;
})();
var statearr_19955_20991 = state_19936__$1;
(statearr_19955_20991[(2)] = null);

(statearr_19955_20991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (9))){
var inst_19892 = (state_19936[(7)]);
var inst_19905 = cljs.core.keyword_identical_QMARK_(inst_19892,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19936__$1 = state_19936;
var statearr_19956_20996 = state_19936__$1;
(statearr_19956_20996[(2)] = inst_19905);

(statearr_19956_20996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (5))){
var inst_19892 = (state_19936[(7)]);
var inst_19896 = (state_19936[(9)]);
var inst_19901 = (state_19936[(11)]);
var inst_19902 = (state_19936[(13)]);
var inst_19901__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19896) : f.call(null,inst_19896));
var inst_19902__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19901__$1,inst_19892);
var state_19936__$1 = (function (){var statearr_19960 = state_19936;
(statearr_19960[(11)] = inst_19901__$1);

(statearr_19960[(13)] = inst_19902__$1);

return statearr_19960;
})();
if(inst_19902__$1){
var statearr_19961_20999 = state_19936__$1;
(statearr_19961_20999[(1)] = (8));

} else {
var statearr_19962_21000 = state_19936__$1;
(statearr_19962_21000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (14))){
var inst_19896 = (state_19936[(9)]);
var inst_19901 = (state_19936[(11)]);
var inst_19914 = (state_19936[(2)]);
var inst_19915 = [];
var inst_19916 = inst_19915.push(inst_19896);
var inst_19891 = inst_19915;
var inst_19892 = inst_19901;
var state_19936__$1 = (function (){var statearr_19963 = state_19936;
(statearr_19963[(7)] = inst_19892);

(statearr_19963[(14)] = inst_19916);

(statearr_19963[(15)] = inst_19914);

(statearr_19963[(8)] = inst_19891);

return statearr_19963;
})();
var statearr_19964_21001 = state_19936__$1;
(statearr_19964_21001[(2)] = null);

(statearr_19964_21001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (16))){
var state_19936__$1 = state_19936;
var statearr_19965_21002 = state_19936__$1;
(statearr_19965_21002[(2)] = null);

(statearr_19965_21002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (10))){
var inst_19907 = (state_19936[(2)]);
var state_19936__$1 = state_19936;
if(cljs.core.truth_(inst_19907)){
var statearr_19966_21003 = state_19936__$1;
(statearr_19966_21003[(1)] = (11));

} else {
var statearr_19967_21004 = state_19936__$1;
(statearr_19967_21004[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (18))){
var inst_19926 = (state_19936[(2)]);
var state_19936__$1 = state_19936;
var statearr_19968_21005 = state_19936__$1;
(statearr_19968_21005[(2)] = inst_19926);

(statearr_19968_21005[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (8))){
var inst_19902 = (state_19936[(13)]);
var state_19936__$1 = state_19936;
var statearr_19969_21008 = state_19936__$1;
(statearr_19969_21008[(2)] = inst_19902);

(statearr_19969_21008[(1)] = (10));


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
var cljs$core$async$state_machine__17190__auto__ = null;
var cljs$core$async$state_machine__17190__auto____0 = (function (){
var statearr_19970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19970[(0)] = cljs$core$async$state_machine__17190__auto__);

(statearr_19970[(1)] = (1));

return statearr_19970;
});
var cljs$core$async$state_machine__17190__auto____1 = (function (state_19936){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_19936);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e19971){var ex__17193__auto__ = e19971;
var statearr_19972_21010 = state_19936;
(statearr_19972_21010[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_19936[(4)]))){
var statearr_19973_21013 = state_19936;
(statearr_19973_21013[(1)] = cljs.core.first((state_19936[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21017 = state_19936;
state_19936 = G__21017;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
cljs$core$async$state_machine__17190__auto__ = function(state_19936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17190__auto____1.call(this,state_19936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17190__auto____0;
cljs$core$async$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17190__auto____1;
return cljs$core$async$state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_19974 = f__17666__auto__();
(statearr_19974[(6)] = c__17665__auto___20976);

return statearr_19974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
