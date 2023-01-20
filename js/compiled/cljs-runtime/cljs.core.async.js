goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12307 = (function (f,blockable,meta12308){
this.f = f;
this.blockable = blockable;
this.meta12308 = meta12308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12309,meta12308__$1){
var self__ = this;
var _12309__$1 = this;
return (new cljs.core.async.t_cljs$core$async12307(self__.f,self__.blockable,meta12308__$1));
}));

(cljs.core.async.t_cljs$core$async12307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12309){
var self__ = this;
var _12309__$1 = this;
return self__.meta12308;
}));

(cljs.core.async.t_cljs$core$async12307.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12307.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async12307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async12307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12308","meta12308",-1235980114,null)], null);
}));

(cljs.core.async.t_cljs$core$async12307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12307");

(cljs.core.async.t_cljs$core$async12307.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async12307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12307.
 */
cljs.core.async.__GT_t_cljs$core$async12307 = (function cljs$core$async$__GT_t_cljs$core$async12307(f,blockable,meta12308){
return (new cljs.core.async.t_cljs$core$async12307(f,blockable,meta12308));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12306 = arguments.length;
switch (G__12306) {
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
return (new cljs.core.async.t_cljs$core$async12307(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12314 = arguments.length;
switch (G__12314) {
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
var G__12317 = arguments.length;
switch (G__12317) {
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
var G__12320 = arguments.length;
switch (G__12320) {
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
var val_14424 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14424) : fn1.call(null,val_14424));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14424) : fn1.call(null,val_14424));
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
var G__12324 = arguments.length;
switch (G__12324) {
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
var n__5636__auto___14430 = n;
var x_14431 = (0);
while(true){
if((x_14431 < n__5636__auto___14430)){
(a[x_14431] = x_14431);

var G__14433 = (x_14431 + (1));
x_14431 = G__14433;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12327 = (function (flag,meta12328){
this.flag = flag;
this.meta12328 = meta12328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12329,meta12328__$1){
var self__ = this;
var _12329__$1 = this;
return (new cljs.core.async.t_cljs$core$async12327(self__.flag,meta12328__$1));
}));

(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12329){
var self__ = this;
var _12329__$1 = this;
return self__.meta12328;
}));

(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async12327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12328","meta12328",-504427880,null)], null);
}));

(cljs.core.async.t_cljs$core$async12327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12327");

(cljs.core.async.t_cljs$core$async12327.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async12327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12327.
 */
cljs.core.async.__GT_t_cljs$core$async12327 = (function cljs$core$async$__GT_t_cljs$core$async12327(flag,meta12328){
return (new cljs.core.async.t_cljs$core$async12327(flag,meta12328));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async12327(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12332 = (function (flag,cb,meta12333){
this.flag = flag;
this.cb = cb;
this.meta12333 = meta12333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12334,meta12333__$1){
var self__ = this;
var _12334__$1 = this;
return (new cljs.core.async.t_cljs$core$async12332(self__.flag,self__.cb,meta12333__$1));
}));

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12334){
var self__ = this;
var _12334__$1 = this;
return self__.meta12333;
}));

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async12332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12333","meta12333",1660719894,null)], null);
}));

(cljs.core.async.t_cljs$core$async12332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12332");

(cljs.core.async.t_cljs$core$async12332.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async12332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12332.
 */
cljs.core.async.__GT_t_cljs$core$async12332 = (function cljs$core$async$__GT_t_cljs$core$async12332(flag,cb,meta12333){
return (new cljs.core.async.t_cljs$core$async12332(flag,cb,meta12333));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async12332(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12335_SHARP_){
var G__12339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12335_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12339) : fret.call(null,G__12339));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12336_SHARP_){
var G__12340 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12336_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12340) : fret.call(null,G__12340));
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
var G__14443 = (i + (1));
i = G__14443;
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
var len__5769__auto___14444 = arguments.length;
var i__5770__auto___14445 = (0);
while(true){
if((i__5770__auto___14445 < len__5769__auto___14444)){
args__5775__auto__.push((arguments[i__5770__auto___14445]));

var G__14447 = (i__5770__auto___14445 + (1));
i__5770__auto___14445 = G__14447;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12343){
var map__12344 = p__12343;
var map__12344__$1 = cljs.core.__destructure_map(map__12344);
var opts = map__12344__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12341){
var G__12342 = cljs.core.first(seq12341);
var seq12341__$1 = cljs.core.next(seq12341);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12342,seq12341__$1);
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
var G__12355 = arguments.length;
switch (G__12355) {
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
var c__12244__auto___14454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_12392){
var state_val_12393 = (state_12392[(1)]);
if((state_val_12393 === (7))){
var inst_12387 = (state_12392[(2)]);
var state_12392__$1 = state_12392;
var statearr_12401_14456 = state_12392__$1;
(statearr_12401_14456[(2)] = inst_12387);

(statearr_12401_14456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12393 === (1))){
var state_12392__$1 = state_12392;
var statearr_12402_14457 = state_12392__$1;
(statearr_12402_14457[(2)] = null);

(statearr_12402_14457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12393 === (4))){
var inst_12366 = (state_12392[(7)]);
var inst_12366__$1 = (state_12392[(2)]);
var inst_12368 = (inst_12366__$1 == null);
var state_12392__$1 = (function (){var statearr_12406 = state_12392;
(statearr_12406[(7)] = inst_12366__$1);

return statearr_12406;
})();
if(cljs.core.truth_(inst_12368)){
var statearr_12408_14460 = state_12392__$1;
(statearr_12408_14460[(1)] = (5));

} else {
var statearr_12409_14461 = state_12392__$1;
(statearr_12409_14461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12393 === (13))){
var state_12392__$1 = state_12392;
var statearr_12411_14462 = state_12392__$1;
(statearr_12411_14462[(2)] = null);

(statearr_12411_14462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12393 === (6))){
var inst_12366 = (state_12392[(7)]);
var state_12392__$1 = state_12392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12392__$1,(11),to,inst_12366);
} else {
if((state_val_12393 === (3))){
var inst_12389 = (state_12392[(2)]);
var state_12392__$1 = state_12392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12392__$1,inst_12389);
} else {
if((state_val_12393 === (12))){
var state_12392__$1 = state_12392;
var statearr_12415_14463 = state_12392__$1;
(statearr_12415_14463[(2)] = null);

(statearr_12415_14463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12393 === (2))){
var state_12392__$1 = state_12392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12392__$1,(4),from);
} else {
if((state_val_12393 === (11))){
var inst_12379 = (state_12392[(2)]);
var state_12392__$1 = state_12392;
if(cljs.core.truth_(inst_12379)){
var statearr_12419_14464 = state_12392__$1;
(statearr_12419_14464[(1)] = (12));

} else {
var statearr_12421_14465 = state_12392__$1;
(statearr_12421_14465[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12393 === (9))){
var state_12392__$1 = state_12392;
var statearr_12422_14466 = state_12392__$1;
(statearr_12422_14466[(2)] = null);

(statearr_12422_14466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12393 === (5))){
var state_12392__$1 = state_12392;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12424_14467 = state_12392__$1;
(statearr_12424_14467[(1)] = (8));

} else {
var statearr_12425_14468 = state_12392__$1;
(statearr_12425_14468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12393 === (14))){
var inst_12385 = (state_12392[(2)]);
var state_12392__$1 = state_12392;
var statearr_12426_14469 = state_12392__$1;
(statearr_12426_14469[(2)] = inst_12385);

(statearr_12426_14469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12393 === (10))){
var inst_12376 = (state_12392[(2)]);
var state_12392__$1 = state_12392;
var statearr_12430_14470 = state_12392__$1;
(statearr_12430_14470[(2)] = inst_12376);

(statearr_12430_14470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12393 === (8))){
var inst_12371 = cljs.core.async.close_BANG_(to);
var state_12392__$1 = state_12392;
var statearr_12431_14471 = state_12392__$1;
(statearr_12431_14471[(2)] = inst_12371);

(statearr_12431_14471[(1)] = (10));


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
var cljs$core$async$state_machine__11795__auto__ = null;
var cljs$core$async$state_machine__11795__auto____0 = (function (){
var statearr_12434 = [null,null,null,null,null,null,null,null];
(statearr_12434[(0)] = cljs$core$async$state_machine__11795__auto__);

(statearr_12434[(1)] = (1));

return statearr_12434;
});
var cljs$core$async$state_machine__11795__auto____1 = (function (state_12392){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_12392);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e12437){var ex__11798__auto__ = e12437;
var statearr_12438_14474 = state_12392;
(statearr_12438_14474[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_12392[(4)]))){
var statearr_12439_14476 = state_12392;
(statearr_12439_14476[(1)] = cljs.core.first((state_12392[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14477 = state_12392;
state_12392 = G__14477;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$state_machine__11795__auto__ = function(state_12392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11795__auto____1.call(this,state_12392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11795__auto____0;
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11795__auto____1;
return cljs$core$async$state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_12441 = f__12245__auto__();
(statearr_12441[(6)] = c__12244__auto___14454);

return statearr_12441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
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
var process__$1 = (function (p__12449){
var vec__12451 = p__12449;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451,(1),null);
var job = vec__12451;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12244__auto___14478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_12460){
var state_val_12461 = (state_12460[(1)]);
if((state_val_12461 === (1))){
var state_12460__$1 = state_12460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12460__$1,(2),res,v);
} else {
if((state_val_12461 === (2))){
var inst_12457 = (state_12460[(2)]);
var inst_12458 = cljs.core.async.close_BANG_(res);
var state_12460__$1 = (function (){var statearr_12464 = state_12460;
(statearr_12464[(7)] = inst_12457);

return statearr_12464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12460__$1,inst_12458);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0 = (function (){
var statearr_12468 = [null,null,null,null,null,null,null,null];
(statearr_12468[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__);

(statearr_12468[(1)] = (1));

return statearr_12468;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1 = (function (state_12460){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_12460);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e12469){var ex__11798__auto__ = e12469;
var statearr_12471_14479 = state_12460;
(statearr_12471_14479[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_12460[(4)]))){
var statearr_12472_14480 = state_12460;
(statearr_12472_14480[(1)] = cljs.core.first((state_12460[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14481 = state_12460;
state_12460 = G__14481;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__ = function(state_12460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1.call(this,state_12460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_12476 = f__12245__auto__();
(statearr_12476[(6)] = c__12244__auto___14478);

return statearr_12476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__12478){
var vec__12479 = p__12478;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12479,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12479,(1),null);
var job = vec__12479;
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
var n__5636__auto___14482 = n;
var __14483 = (0);
while(true){
if((__14483 < n__5636__auto___14482)){
var G__12485_14484 = type;
var G__12485_14485__$1 = (((G__12485_14484 instanceof cljs.core.Keyword))?G__12485_14484.fqn:null);
switch (G__12485_14485__$1) {
case "compute":
var c__12244__auto___14487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14483,c__12244__auto___14487,G__12485_14484,G__12485_14485__$1,n__5636__auto___14482,jobs,results,process__$1,async){
return (function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = ((function (__14483,c__12244__auto___14487,G__12485_14484,G__12485_14485__$1,n__5636__auto___14482,jobs,results,process__$1,async){
return (function (state_12502){
var state_val_12503 = (state_12502[(1)]);
if((state_val_12503 === (1))){
var state_12502__$1 = state_12502;
var statearr_12505_14488 = state_12502__$1;
(statearr_12505_14488[(2)] = null);

(statearr_12505_14488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (2))){
var state_12502__$1 = state_12502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12502__$1,(4),jobs);
} else {
if((state_val_12503 === (3))){
var inst_12500 = (state_12502[(2)]);
var state_12502__$1 = state_12502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12502__$1,inst_12500);
} else {
if((state_val_12503 === (4))){
var inst_12491 = (state_12502[(2)]);
var inst_12493 = process__$1(inst_12491);
var state_12502__$1 = state_12502;
if(cljs.core.truth_(inst_12493)){
var statearr_12509_14489 = state_12502__$1;
(statearr_12509_14489[(1)] = (5));

} else {
var statearr_12511_14490 = state_12502__$1;
(statearr_12511_14490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (5))){
var state_12502__$1 = state_12502;
var statearr_12512_14491 = state_12502__$1;
(statearr_12512_14491[(2)] = null);

(statearr_12512_14491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (6))){
var state_12502__$1 = state_12502;
var statearr_12514_14492 = state_12502__$1;
(statearr_12514_14492[(2)] = null);

(statearr_12514_14492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12503 === (7))){
var inst_12498 = (state_12502[(2)]);
var state_12502__$1 = state_12502;
var statearr_12517_14493 = state_12502__$1;
(statearr_12517_14493[(2)] = inst_12498);

(statearr_12517_14493[(1)] = (3));


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
});})(__14483,c__12244__auto___14487,G__12485_14484,G__12485_14485__$1,n__5636__auto___14482,jobs,results,process__$1,async))
;
return ((function (__14483,switch__11794__auto__,c__12244__auto___14487,G__12485_14484,G__12485_14485__$1,n__5636__auto___14482,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0 = (function (){
var statearr_12519 = [null,null,null,null,null,null,null];
(statearr_12519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__);

(statearr_12519[(1)] = (1));

return statearr_12519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1 = (function (state_12502){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_12502);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e12520){var ex__11798__auto__ = e12520;
var statearr_12521_14496 = state_12502;
(statearr_12521_14496[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_12502[(4)]))){
var statearr_12524_14497 = state_12502;
(statearr_12524_14497[(1)] = cljs.core.first((state_12502[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14498 = state_12502;
state_12502 = G__14498;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__ = function(state_12502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1.call(this,state_12502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__;
})()
;})(__14483,switch__11794__auto__,c__12244__auto___14487,G__12485_14484,G__12485_14485__$1,n__5636__auto___14482,jobs,results,process__$1,async))
})();
var state__12246__auto__ = (function (){var statearr_12526 = f__12245__auto__();
(statearr_12526[(6)] = c__12244__auto___14487);

return statearr_12526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
});})(__14483,c__12244__auto___14487,G__12485_14484,G__12485_14485__$1,n__5636__auto___14482,jobs,results,process__$1,async))
);


break;
case "async":
var c__12244__auto___14499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14483,c__12244__auto___14499,G__12485_14484,G__12485_14485__$1,n__5636__auto___14482,jobs,results,process__$1,async){
return (function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = ((function (__14483,c__12244__auto___14499,G__12485_14484,G__12485_14485__$1,n__5636__auto___14482,jobs,results,process__$1,async){
return (function (state_12541){
var state_val_12543 = (state_12541[(1)]);
if((state_val_12543 === (1))){
var state_12541__$1 = state_12541;
var statearr_12546_14504 = state_12541__$1;
(statearr_12546_14504[(2)] = null);

(statearr_12546_14504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (2))){
var state_12541__$1 = state_12541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12541__$1,(4),jobs);
} else {
if((state_val_12543 === (3))){
var inst_12538 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12541__$1,inst_12538);
} else {
if((state_val_12543 === (4))){
var inst_12530 = (state_12541[(2)]);
var inst_12531 = async(inst_12530);
var state_12541__$1 = state_12541;
if(cljs.core.truth_(inst_12531)){
var statearr_12550_14505 = state_12541__$1;
(statearr_12550_14505[(1)] = (5));

} else {
var statearr_12551_14508 = state_12541__$1;
(statearr_12551_14508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (5))){
var state_12541__$1 = state_12541;
var statearr_12552_14511 = state_12541__$1;
(statearr_12552_14511[(2)] = null);

(statearr_12552_14511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (6))){
var state_12541__$1 = state_12541;
var statearr_12554_14512 = state_12541__$1;
(statearr_12554_14512[(2)] = null);

(statearr_12554_14512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (7))){
var inst_12536 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12556_14513 = state_12541__$1;
(statearr_12556_14513[(2)] = inst_12536);

(statearr_12556_14513[(1)] = (3));


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
});})(__14483,c__12244__auto___14499,G__12485_14484,G__12485_14485__$1,n__5636__auto___14482,jobs,results,process__$1,async))
;
return ((function (__14483,switch__11794__auto__,c__12244__auto___14499,G__12485_14484,G__12485_14485__$1,n__5636__auto___14482,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0 = (function (){
var statearr_12560 = [null,null,null,null,null,null,null];
(statearr_12560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__);

(statearr_12560[(1)] = (1));

return statearr_12560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1 = (function (state_12541){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_12541);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e12561){var ex__11798__auto__ = e12561;
var statearr_12562_14514 = state_12541;
(statearr_12562_14514[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_12541[(4)]))){
var statearr_12564_14515 = state_12541;
(statearr_12564_14515[(1)] = cljs.core.first((state_12541[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14516 = state_12541;
state_12541 = G__14516;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__ = function(state_12541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1.call(this,state_12541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__;
})()
;})(__14483,switch__11794__auto__,c__12244__auto___14499,G__12485_14484,G__12485_14485__$1,n__5636__auto___14482,jobs,results,process__$1,async))
})();
var state__12246__auto__ = (function (){var statearr_12567 = f__12245__auto__();
(statearr_12567[(6)] = c__12244__auto___14499);

return statearr_12567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
});})(__14483,c__12244__auto___14499,G__12485_14484,G__12485_14485__$1,n__5636__auto___14482,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12485_14485__$1)].join('')));

}

var G__14517 = (__14483 + (1));
__14483 = G__14517;
continue;
} else {
}
break;
}

var c__12244__auto___14518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_12594){
var state_val_12595 = (state_12594[(1)]);
if((state_val_12595 === (7))){
var inst_12590 = (state_12594[(2)]);
var state_12594__$1 = state_12594;
var statearr_12601_14519 = state_12594__$1;
(statearr_12601_14519[(2)] = inst_12590);

(statearr_12601_14519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12595 === (1))){
var state_12594__$1 = state_12594;
var statearr_12603_14520 = state_12594__$1;
(statearr_12603_14520[(2)] = null);

(statearr_12603_14520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12595 === (4))){
var inst_12572 = (state_12594[(7)]);
var inst_12572__$1 = (state_12594[(2)]);
var inst_12573 = (inst_12572__$1 == null);
var state_12594__$1 = (function (){var statearr_12607 = state_12594;
(statearr_12607[(7)] = inst_12572__$1);

return statearr_12607;
})();
if(cljs.core.truth_(inst_12573)){
var statearr_12608_14521 = state_12594__$1;
(statearr_12608_14521[(1)] = (5));

} else {
var statearr_12609_14522 = state_12594__$1;
(statearr_12609_14522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12595 === (6))){
var inst_12572 = (state_12594[(7)]);
var inst_12577 = (state_12594[(8)]);
var inst_12577__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12582 = [inst_12572,inst_12577__$1];
var inst_12583 = (new cljs.core.PersistentVector(null,2,(5),inst_12581,inst_12582,null));
var state_12594__$1 = (function (){var statearr_12614 = state_12594;
(statearr_12614[(8)] = inst_12577__$1);

return statearr_12614;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12594__$1,(8),jobs,inst_12583);
} else {
if((state_val_12595 === (3))){
var inst_12592 = (state_12594[(2)]);
var state_12594__$1 = state_12594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12594__$1,inst_12592);
} else {
if((state_val_12595 === (2))){
var state_12594__$1 = state_12594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12594__$1,(4),from);
} else {
if((state_val_12595 === (9))){
var inst_12587 = (state_12594[(2)]);
var state_12594__$1 = (function (){var statearr_12620 = state_12594;
(statearr_12620[(9)] = inst_12587);

return statearr_12620;
})();
var statearr_12621_14523 = state_12594__$1;
(statearr_12621_14523[(2)] = null);

(statearr_12621_14523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12595 === (5))){
var inst_12575 = cljs.core.async.close_BANG_(jobs);
var state_12594__$1 = state_12594;
var statearr_12623_14524 = state_12594__$1;
(statearr_12623_14524[(2)] = inst_12575);

(statearr_12623_14524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12595 === (8))){
var inst_12577 = (state_12594[(8)]);
var inst_12585 = (state_12594[(2)]);
var state_12594__$1 = (function (){var statearr_12624 = state_12594;
(statearr_12624[(10)] = inst_12585);

return statearr_12624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12594__$1,(9),results,inst_12577);
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
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0 = (function (){
var statearr_12628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__);

(statearr_12628[(1)] = (1));

return statearr_12628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1 = (function (state_12594){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_12594);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e12630){var ex__11798__auto__ = e12630;
var statearr_12631_14525 = state_12594;
(statearr_12631_14525[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_12594[(4)]))){
var statearr_12635_14526 = state_12594;
(statearr_12635_14526[(1)] = cljs.core.first((state_12594[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14527 = state_12594;
state_12594 = G__14527;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__ = function(state_12594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1.call(this,state_12594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_12637 = f__12245__auto__();
(statearr_12637[(6)] = c__12244__auto___14518);

return statearr_12637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
}));


var c__12244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_12682){
var state_val_12683 = (state_12682[(1)]);
if((state_val_12683 === (7))){
var inst_12678 = (state_12682[(2)]);
var state_12682__$1 = state_12682;
var statearr_12688_14528 = state_12682__$1;
(statearr_12688_14528[(2)] = inst_12678);

(statearr_12688_14528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (20))){
var state_12682__$1 = state_12682;
var statearr_12690_14529 = state_12682__$1;
(statearr_12690_14529[(2)] = null);

(statearr_12690_14529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (1))){
var state_12682__$1 = state_12682;
var statearr_12691_14530 = state_12682__$1;
(statearr_12691_14530[(2)] = null);

(statearr_12691_14530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (4))){
var inst_12643 = (state_12682[(7)]);
var inst_12643__$1 = (state_12682[(2)]);
var inst_12644 = (inst_12643__$1 == null);
var state_12682__$1 = (function (){var statearr_12695 = state_12682;
(statearr_12695[(7)] = inst_12643__$1);

return statearr_12695;
})();
if(cljs.core.truth_(inst_12644)){
var statearr_12696_14532 = state_12682__$1;
(statearr_12696_14532[(1)] = (5));

} else {
var statearr_12697_14533 = state_12682__$1;
(statearr_12697_14533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (15))){
var inst_12657 = (state_12682[(8)]);
var state_12682__$1 = state_12682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12682__$1,(18),to,inst_12657);
} else {
if((state_val_12683 === (21))){
var inst_12672 = (state_12682[(2)]);
var state_12682__$1 = state_12682;
var statearr_12700_14534 = state_12682__$1;
(statearr_12700_14534[(2)] = inst_12672);

(statearr_12700_14534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (13))){
var inst_12674 = (state_12682[(2)]);
var state_12682__$1 = (function (){var statearr_12703 = state_12682;
(statearr_12703[(9)] = inst_12674);

return statearr_12703;
})();
var statearr_12705_14535 = state_12682__$1;
(statearr_12705_14535[(2)] = null);

(statearr_12705_14535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (6))){
var inst_12643 = (state_12682[(7)]);
var state_12682__$1 = state_12682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12682__$1,(11),inst_12643);
} else {
if((state_val_12683 === (17))){
var inst_12666 = (state_12682[(2)]);
var state_12682__$1 = state_12682;
if(cljs.core.truth_(inst_12666)){
var statearr_12707_14536 = state_12682__$1;
(statearr_12707_14536[(1)] = (19));

} else {
var statearr_12708_14537 = state_12682__$1;
(statearr_12708_14537[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (3))){
var inst_12680 = (state_12682[(2)]);
var state_12682__$1 = state_12682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12682__$1,inst_12680);
} else {
if((state_val_12683 === (12))){
var inst_12654 = (state_12682[(10)]);
var state_12682__$1 = state_12682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12682__$1,(14),inst_12654);
} else {
if((state_val_12683 === (2))){
var state_12682__$1 = state_12682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12682__$1,(4),results);
} else {
if((state_val_12683 === (19))){
var state_12682__$1 = state_12682;
var statearr_12713_14539 = state_12682__$1;
(statearr_12713_14539[(2)] = null);

(statearr_12713_14539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (11))){
var inst_12654 = (state_12682[(2)]);
var state_12682__$1 = (function (){var statearr_12715 = state_12682;
(statearr_12715[(10)] = inst_12654);

return statearr_12715;
})();
var statearr_12717_14541 = state_12682__$1;
(statearr_12717_14541[(2)] = null);

(statearr_12717_14541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (9))){
var state_12682__$1 = state_12682;
var statearr_12722_14542 = state_12682__$1;
(statearr_12722_14542[(2)] = null);

(statearr_12722_14542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (5))){
var state_12682__$1 = state_12682;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12724_14543 = state_12682__$1;
(statearr_12724_14543[(1)] = (8));

} else {
var statearr_12725_14544 = state_12682__$1;
(statearr_12725_14544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (14))){
var inst_12657 = (state_12682[(8)]);
var inst_12659 = (state_12682[(11)]);
var inst_12657__$1 = (state_12682[(2)]);
var inst_12658 = (inst_12657__$1 == null);
var inst_12659__$1 = cljs.core.not(inst_12658);
var state_12682__$1 = (function (){var statearr_12729 = state_12682;
(statearr_12729[(8)] = inst_12657__$1);

(statearr_12729[(11)] = inst_12659__$1);

return statearr_12729;
})();
if(inst_12659__$1){
var statearr_12731_14546 = state_12682__$1;
(statearr_12731_14546[(1)] = (15));

} else {
var statearr_12732_14547 = state_12682__$1;
(statearr_12732_14547[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (16))){
var inst_12659 = (state_12682[(11)]);
var state_12682__$1 = state_12682;
var statearr_12734_14548 = state_12682__$1;
(statearr_12734_14548[(2)] = inst_12659);

(statearr_12734_14548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (10))){
var inst_12650 = (state_12682[(2)]);
var state_12682__$1 = state_12682;
var statearr_12737_14549 = state_12682__$1;
(statearr_12737_14549[(2)] = inst_12650);

(statearr_12737_14549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (18))){
var inst_12662 = (state_12682[(2)]);
var state_12682__$1 = state_12682;
var statearr_12739_14551 = state_12682__$1;
(statearr_12739_14551[(2)] = inst_12662);

(statearr_12739_14551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (8))){
var inst_12647 = cljs.core.async.close_BANG_(to);
var state_12682__$1 = state_12682;
var statearr_12742_14553 = state_12682__$1;
(statearr_12742_14553[(2)] = inst_12647);

(statearr_12742_14553[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0 = (function (){
var statearr_12744 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__);

(statearr_12744[(1)] = (1));

return statearr_12744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1 = (function (state_12682){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_12682);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e12748){var ex__11798__auto__ = e12748;
var statearr_12749_14556 = state_12682;
(statearr_12749_14556[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_12682[(4)]))){
var statearr_12750_14557 = state_12682;
(statearr_12750_14557[(1)] = cljs.core.first((state_12682[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14558 = state_12682;
state_12682 = G__14558;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__ = function(state_12682){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1.call(this,state_12682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_12752 = f__12245__auto__();
(statearr_12752[(6)] = c__12244__auto__);

return statearr_12752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
}));

return c__12244__auto__;
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
var G__12755 = arguments.length;
switch (G__12755) {
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
var G__12757 = arguments.length;
switch (G__12757) {
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
var G__12759 = arguments.length;
switch (G__12759) {
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
var c__12244__auto___14568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_12787){
var state_val_12788 = (state_12787[(1)]);
if((state_val_12788 === (7))){
var inst_12782 = (state_12787[(2)]);
var state_12787__$1 = state_12787;
var statearr_12789_14570 = state_12787__$1;
(statearr_12789_14570[(2)] = inst_12782);

(statearr_12789_14570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12788 === (1))){
var state_12787__$1 = state_12787;
var statearr_12790_14571 = state_12787__$1;
(statearr_12790_14571[(2)] = null);

(statearr_12790_14571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12788 === (4))){
var inst_12762 = (state_12787[(7)]);
var inst_12762__$1 = (state_12787[(2)]);
var inst_12763 = (inst_12762__$1 == null);
var state_12787__$1 = (function (){var statearr_12791 = state_12787;
(statearr_12791[(7)] = inst_12762__$1);

return statearr_12791;
})();
if(cljs.core.truth_(inst_12763)){
var statearr_12792_14573 = state_12787__$1;
(statearr_12792_14573[(1)] = (5));

} else {
var statearr_12793_14574 = state_12787__$1;
(statearr_12793_14574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12788 === (13))){
var state_12787__$1 = state_12787;
var statearr_12794_14575 = state_12787__$1;
(statearr_12794_14575[(2)] = null);

(statearr_12794_14575[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12788 === (6))){
var inst_12762 = (state_12787[(7)]);
var inst_12768 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12762) : p.call(null,inst_12762));
var state_12787__$1 = state_12787;
if(cljs.core.truth_(inst_12768)){
var statearr_12795_14576 = state_12787__$1;
(statearr_12795_14576[(1)] = (9));

} else {
var statearr_12796_14577 = state_12787__$1;
(statearr_12796_14577[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12788 === (3))){
var inst_12784 = (state_12787[(2)]);
var state_12787__$1 = state_12787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12787__$1,inst_12784);
} else {
if((state_val_12788 === (12))){
var state_12787__$1 = state_12787;
var statearr_12797_14578 = state_12787__$1;
(statearr_12797_14578[(2)] = null);

(statearr_12797_14578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12788 === (2))){
var state_12787__$1 = state_12787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12787__$1,(4),ch);
} else {
if((state_val_12788 === (11))){
var inst_12762 = (state_12787[(7)]);
var inst_12773 = (state_12787[(2)]);
var state_12787__$1 = state_12787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12787__$1,(8),inst_12773,inst_12762);
} else {
if((state_val_12788 === (9))){
var state_12787__$1 = state_12787;
var statearr_12798_14580 = state_12787__$1;
(statearr_12798_14580[(2)] = tc);

(statearr_12798_14580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12788 === (5))){
var inst_12765 = cljs.core.async.close_BANG_(tc);
var inst_12766 = cljs.core.async.close_BANG_(fc);
var state_12787__$1 = (function (){var statearr_12799 = state_12787;
(statearr_12799[(8)] = inst_12765);

return statearr_12799;
})();
var statearr_12800_14582 = state_12787__$1;
(statearr_12800_14582[(2)] = inst_12766);

(statearr_12800_14582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12788 === (14))){
var inst_12780 = (state_12787[(2)]);
var state_12787__$1 = state_12787;
var statearr_12801_14585 = state_12787__$1;
(statearr_12801_14585[(2)] = inst_12780);

(statearr_12801_14585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12788 === (10))){
var state_12787__$1 = state_12787;
var statearr_12802_14586 = state_12787__$1;
(statearr_12802_14586[(2)] = fc);

(statearr_12802_14586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12788 === (8))){
var inst_12775 = (state_12787[(2)]);
var state_12787__$1 = state_12787;
if(cljs.core.truth_(inst_12775)){
var statearr_12803_14587 = state_12787__$1;
(statearr_12803_14587[(1)] = (12));

} else {
var statearr_12804_14588 = state_12787__$1;
(statearr_12804_14588[(1)] = (13));

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
var cljs$core$async$state_machine__11795__auto__ = null;
var cljs$core$async$state_machine__11795__auto____0 = (function (){
var statearr_12805 = [null,null,null,null,null,null,null,null,null];
(statearr_12805[(0)] = cljs$core$async$state_machine__11795__auto__);

(statearr_12805[(1)] = (1));

return statearr_12805;
});
var cljs$core$async$state_machine__11795__auto____1 = (function (state_12787){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_12787);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e12806){var ex__11798__auto__ = e12806;
var statearr_12807_14591 = state_12787;
(statearr_12807_14591[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_12787[(4)]))){
var statearr_12808_14593 = state_12787;
(statearr_12808_14593[(1)] = cljs.core.first((state_12787[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14594 = state_12787;
state_12787 = G__14594;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$state_machine__11795__auto__ = function(state_12787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11795__auto____1.call(this,state_12787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11795__auto____0;
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11795__auto____1;
return cljs$core$async$state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_12809 = f__12245__auto__();
(statearr_12809[(6)] = c__12244__auto___14568);

return statearr_12809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
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
var c__12244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_12831){
var state_val_12832 = (state_12831[(1)]);
if((state_val_12832 === (7))){
var inst_12827 = (state_12831[(2)]);
var state_12831__$1 = state_12831;
var statearr_12834_14595 = state_12831__$1;
(statearr_12834_14595[(2)] = inst_12827);

(statearr_12834_14595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12832 === (1))){
var inst_12810 = init;
var inst_12811 = inst_12810;
var state_12831__$1 = (function (){var statearr_12836 = state_12831;
(statearr_12836[(7)] = inst_12811);

return statearr_12836;
})();
var statearr_12837_14597 = state_12831__$1;
(statearr_12837_14597[(2)] = null);

(statearr_12837_14597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12832 === (4))){
var inst_12814 = (state_12831[(8)]);
var inst_12814__$1 = (state_12831[(2)]);
var inst_12815 = (inst_12814__$1 == null);
var state_12831__$1 = (function (){var statearr_12838 = state_12831;
(statearr_12838[(8)] = inst_12814__$1);

return statearr_12838;
})();
if(cljs.core.truth_(inst_12815)){
var statearr_12839_14601 = state_12831__$1;
(statearr_12839_14601[(1)] = (5));

} else {
var statearr_12840_14602 = state_12831__$1;
(statearr_12840_14602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12832 === (6))){
var inst_12811 = (state_12831[(7)]);
var inst_12818 = (state_12831[(9)]);
var inst_12814 = (state_12831[(8)]);
var inst_12818__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12811,inst_12814) : f.call(null,inst_12811,inst_12814));
var inst_12819 = cljs.core.reduced_QMARK_(inst_12818__$1);
var state_12831__$1 = (function (){var statearr_12841 = state_12831;
(statearr_12841[(9)] = inst_12818__$1);

return statearr_12841;
})();
if(inst_12819){
var statearr_12842_14604 = state_12831__$1;
(statearr_12842_14604[(1)] = (8));

} else {
var statearr_12843_14605 = state_12831__$1;
(statearr_12843_14605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12832 === (3))){
var inst_12829 = (state_12831[(2)]);
var state_12831__$1 = state_12831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12831__$1,inst_12829);
} else {
if((state_val_12832 === (2))){
var state_12831__$1 = state_12831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12831__$1,(4),ch);
} else {
if((state_val_12832 === (9))){
var inst_12818 = (state_12831[(9)]);
var inst_12811 = inst_12818;
var state_12831__$1 = (function (){var statearr_12848 = state_12831;
(statearr_12848[(7)] = inst_12811);

return statearr_12848;
})();
var statearr_12849_14607 = state_12831__$1;
(statearr_12849_14607[(2)] = null);

(statearr_12849_14607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12832 === (5))){
var inst_12811 = (state_12831[(7)]);
var state_12831__$1 = state_12831;
var statearr_12850_14609 = state_12831__$1;
(statearr_12850_14609[(2)] = inst_12811);

(statearr_12850_14609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12832 === (10))){
var inst_12825 = (state_12831[(2)]);
var state_12831__$1 = state_12831;
var statearr_12855_14610 = state_12831__$1;
(statearr_12855_14610[(2)] = inst_12825);

(statearr_12855_14610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12832 === (8))){
var inst_12818 = (state_12831[(9)]);
var inst_12821 = cljs.core.deref(inst_12818);
var state_12831__$1 = state_12831;
var statearr_12857_14612 = state_12831__$1;
(statearr_12857_14612[(2)] = inst_12821);

(statearr_12857_14612[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__11795__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11795__auto____0 = (function (){
var statearr_12858 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12858[(0)] = cljs$core$async$reduce_$_state_machine__11795__auto__);

(statearr_12858[(1)] = (1));

return statearr_12858;
});
var cljs$core$async$reduce_$_state_machine__11795__auto____1 = (function (state_12831){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_12831);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e12859){var ex__11798__auto__ = e12859;
var statearr_12860_14613 = state_12831;
(statearr_12860_14613[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_12831[(4)]))){
var statearr_12861_14614 = state_12831;
(statearr_12861_14614[(1)] = cljs.core.first((state_12831[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14615 = state_12831;
state_12831 = G__14615;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11795__auto__ = function(state_12831){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11795__auto____1.call(this,state_12831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11795__auto____0;
cljs$core$async$reduce_$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11795__auto____1;
return cljs$core$async$reduce_$_state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_12866 = f__12245__auto__();
(statearr_12866[(6)] = c__12244__auto__);

return statearr_12866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
}));

return c__12244__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__12244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_12876){
var state_val_12877 = (state_12876[(1)]);
if((state_val_12877 === (1))){
var inst_12871 = cljs.core.async.reduce(f__$1,init,ch);
var state_12876__$1 = state_12876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12876__$1,(2),inst_12871);
} else {
if((state_val_12877 === (2))){
var inst_12873 = (state_12876[(2)]);
var inst_12874 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_12873) : f__$1.call(null,inst_12873));
var state_12876__$1 = state_12876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12876__$1,inst_12874);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11795__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11795__auto____0 = (function (){
var statearr_12882 = [null,null,null,null,null,null,null];
(statearr_12882[(0)] = cljs$core$async$transduce_$_state_machine__11795__auto__);

(statearr_12882[(1)] = (1));

return statearr_12882;
});
var cljs$core$async$transduce_$_state_machine__11795__auto____1 = (function (state_12876){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_12876);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e12886){var ex__11798__auto__ = e12886;
var statearr_12888_14616 = state_12876;
(statearr_12888_14616[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_12876[(4)]))){
var statearr_12889_14617 = state_12876;
(statearr_12889_14617[(1)] = cljs.core.first((state_12876[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14618 = state_12876;
state_12876 = G__14618;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11795__auto__ = function(state_12876){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11795__auto____1.call(this,state_12876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11795__auto____0;
cljs$core$async$transduce_$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11795__auto____1;
return cljs$core$async$transduce_$_state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_12890 = f__12245__auto__();
(statearr_12890[(6)] = c__12244__auto__);

return statearr_12890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
}));

return c__12244__auto__;
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
var G__12896 = arguments.length;
switch (G__12896) {
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
var c__12244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_12926){
var state_val_12927 = (state_12926[(1)]);
if((state_val_12927 === (7))){
var inst_12904 = (state_12926[(2)]);
var state_12926__$1 = state_12926;
var statearr_12932_14638 = state_12926__$1;
(statearr_12932_14638[(2)] = inst_12904);

(statearr_12932_14638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12927 === (1))){
var inst_12898 = cljs.core.seq(coll);
var inst_12899 = inst_12898;
var state_12926__$1 = (function (){var statearr_12933 = state_12926;
(statearr_12933[(7)] = inst_12899);

return statearr_12933;
})();
var statearr_12934_14639 = state_12926__$1;
(statearr_12934_14639[(2)] = null);

(statearr_12934_14639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12927 === (4))){
var inst_12899 = (state_12926[(7)]);
var inst_12902 = cljs.core.first(inst_12899);
var state_12926__$1 = state_12926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12926__$1,(7),ch,inst_12902);
} else {
if((state_val_12927 === (13))){
var inst_12916 = (state_12926[(2)]);
var state_12926__$1 = state_12926;
var statearr_12939_14640 = state_12926__$1;
(statearr_12939_14640[(2)] = inst_12916);

(statearr_12939_14640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12927 === (6))){
var inst_12907 = (state_12926[(2)]);
var state_12926__$1 = state_12926;
if(cljs.core.truth_(inst_12907)){
var statearr_12940_14649 = state_12926__$1;
(statearr_12940_14649[(1)] = (8));

} else {
var statearr_12944_14650 = state_12926__$1;
(statearr_12944_14650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12927 === (3))){
var inst_12920 = (state_12926[(2)]);
var state_12926__$1 = state_12926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12926__$1,inst_12920);
} else {
if((state_val_12927 === (12))){
var state_12926__$1 = state_12926;
var statearr_12946_14654 = state_12926__$1;
(statearr_12946_14654[(2)] = null);

(statearr_12946_14654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12927 === (2))){
var inst_12899 = (state_12926[(7)]);
var state_12926__$1 = state_12926;
if(cljs.core.truth_(inst_12899)){
var statearr_12947_14659 = state_12926__$1;
(statearr_12947_14659[(1)] = (4));

} else {
var statearr_12948_14660 = state_12926__$1;
(statearr_12948_14660[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12927 === (11))){
var inst_12913 = cljs.core.async.close_BANG_(ch);
var state_12926__$1 = state_12926;
var statearr_12952_14661 = state_12926__$1;
(statearr_12952_14661[(2)] = inst_12913);

(statearr_12952_14661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12927 === (9))){
var state_12926__$1 = state_12926;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12954_14662 = state_12926__$1;
(statearr_12954_14662[(1)] = (11));

} else {
var statearr_12955_14663 = state_12926__$1;
(statearr_12955_14663[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12927 === (5))){
var inst_12899 = (state_12926[(7)]);
var state_12926__$1 = state_12926;
var statearr_12956_14669 = state_12926__$1;
(statearr_12956_14669[(2)] = inst_12899);

(statearr_12956_14669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12927 === (10))){
var inst_12918 = (state_12926[(2)]);
var state_12926__$1 = state_12926;
var statearr_12958_14676 = state_12926__$1;
(statearr_12958_14676[(2)] = inst_12918);

(statearr_12958_14676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12927 === (8))){
var inst_12899 = (state_12926[(7)]);
var inst_12909 = cljs.core.next(inst_12899);
var inst_12899__$1 = inst_12909;
var state_12926__$1 = (function (){var statearr_12959 = state_12926;
(statearr_12959[(7)] = inst_12899__$1);

return statearr_12959;
})();
var statearr_12960_14684 = state_12926__$1;
(statearr_12960_14684[(2)] = null);

(statearr_12960_14684[(1)] = (2));


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
var cljs$core$async$state_machine__11795__auto__ = null;
var cljs$core$async$state_machine__11795__auto____0 = (function (){
var statearr_12961 = [null,null,null,null,null,null,null,null];
(statearr_12961[(0)] = cljs$core$async$state_machine__11795__auto__);

(statearr_12961[(1)] = (1));

return statearr_12961;
});
var cljs$core$async$state_machine__11795__auto____1 = (function (state_12926){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_12926);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e12962){var ex__11798__auto__ = e12962;
var statearr_12963_14694 = state_12926;
(statearr_12963_14694[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_12926[(4)]))){
var statearr_12968_14697 = state_12926;
(statearr_12968_14697[(1)] = cljs.core.first((state_12926[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14711 = state_12926;
state_12926 = G__14711;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$state_machine__11795__auto__ = function(state_12926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11795__auto____1.call(this,state_12926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11795__auto____0;
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11795__auto____1;
return cljs$core$async$state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_12973 = f__12245__auto__();
(statearr_12973[(6)] = c__12244__auto__);

return statearr_12973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
}));

return c__12244__auto__;
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
var G__12979 = arguments.length;
switch (G__12979) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_14724 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_14724(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14732 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_14732(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14752 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_14752(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14757 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_14757(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13009 = (function (ch,cs,meta13010){
this.ch = ch;
this.cs = cs;
this.meta13010 = meta13010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13011,meta13010__$1){
var self__ = this;
var _13011__$1 = this;
return (new cljs.core.async.t_cljs$core$async13009(self__.ch,self__.cs,meta13010__$1));
}));

(cljs.core.async.t_cljs$core$async13009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13011){
var self__ = this;
var _13011__$1 = this;
return self__.meta13010;
}));

(cljs.core.async.t_cljs$core$async13009.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13009.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13009.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13009.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async13009.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async13009.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async13009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13010","meta13010",-889820704,null)], null);
}));

(cljs.core.async.t_cljs$core$async13009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13009");

(cljs.core.async.t_cljs$core$async13009.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13009.
 */
cljs.core.async.__GT_t_cljs$core$async13009 = (function cljs$core$async$__GT_t_cljs$core$async13009(ch,cs,meta13010){
return (new cljs.core.async.t_cljs$core$async13009(ch,cs,meta13010));
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
var m = (new cljs.core.async.t_cljs$core$async13009(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__12244__auto___14765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_13151){
var state_val_13152 = (state_13151[(1)]);
if((state_val_13152 === (7))){
var inst_13147 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
var statearr_13153_14767 = state_13151__$1;
(statearr_13153_14767[(2)] = inst_13147);

(statearr_13153_14767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (20))){
var inst_13052 = (state_13151[(7)]);
var inst_13064 = cljs.core.first(inst_13052);
var inst_13065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13064,(0),null);
var inst_13066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13064,(1),null);
var state_13151__$1 = (function (){var statearr_13154 = state_13151;
(statearr_13154[(8)] = inst_13065);

return statearr_13154;
})();
if(cljs.core.truth_(inst_13066)){
var statearr_13155_14772 = state_13151__$1;
(statearr_13155_14772[(1)] = (22));

} else {
var statearr_13156_14773 = state_13151__$1;
(statearr_13156_14773[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (27))){
var inst_13096 = (state_13151[(9)]);
var inst_13101 = (state_13151[(10)]);
var inst_13094 = (state_13151[(11)]);
var inst_13021 = (state_13151[(12)]);
var inst_13101__$1 = cljs.core._nth(inst_13094,inst_13096);
var inst_13102 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13101__$1,inst_13021,done);
var state_13151__$1 = (function (){var statearr_13157 = state_13151;
(statearr_13157[(10)] = inst_13101__$1);

return statearr_13157;
})();
if(cljs.core.truth_(inst_13102)){
var statearr_13158_14774 = state_13151__$1;
(statearr_13158_14774[(1)] = (30));

} else {
var statearr_13159_14775 = state_13151__$1;
(statearr_13159_14775[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (1))){
var state_13151__$1 = state_13151;
var statearr_13160_14776 = state_13151__$1;
(statearr_13160_14776[(2)] = null);

(statearr_13160_14776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (24))){
var inst_13052 = (state_13151[(7)]);
var inst_13071 = (state_13151[(2)]);
var inst_13072 = cljs.core.next(inst_13052);
var inst_13030 = inst_13072;
var inst_13031 = null;
var inst_13032 = (0);
var inst_13033 = (0);
var state_13151__$1 = (function (){var statearr_13161 = state_13151;
(statearr_13161[(13)] = inst_13031);

(statearr_13161[(14)] = inst_13071);

(statearr_13161[(15)] = inst_13033);

(statearr_13161[(16)] = inst_13032);

(statearr_13161[(17)] = inst_13030);

return statearr_13161;
})();
var statearr_13162_14777 = state_13151__$1;
(statearr_13162_14777[(2)] = null);

(statearr_13162_14777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (39))){
var state_13151__$1 = state_13151;
var statearr_13166_14778 = state_13151__$1;
(statearr_13166_14778[(2)] = null);

(statearr_13166_14778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (4))){
var inst_13021 = (state_13151[(12)]);
var inst_13021__$1 = (state_13151[(2)]);
var inst_13022 = (inst_13021__$1 == null);
var state_13151__$1 = (function (){var statearr_13169 = state_13151;
(statearr_13169[(12)] = inst_13021__$1);

return statearr_13169;
})();
if(cljs.core.truth_(inst_13022)){
var statearr_13170_14780 = state_13151__$1;
(statearr_13170_14780[(1)] = (5));

} else {
var statearr_13171_14781 = state_13151__$1;
(statearr_13171_14781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (15))){
var inst_13031 = (state_13151[(13)]);
var inst_13033 = (state_13151[(15)]);
var inst_13032 = (state_13151[(16)]);
var inst_13030 = (state_13151[(17)]);
var inst_13048 = (state_13151[(2)]);
var inst_13049 = (inst_13033 + (1));
var tmp13163 = inst_13031;
var tmp13164 = inst_13032;
var tmp13165 = inst_13030;
var inst_13030__$1 = tmp13165;
var inst_13031__$1 = tmp13163;
var inst_13032__$1 = tmp13164;
var inst_13033__$1 = inst_13049;
var state_13151__$1 = (function (){var statearr_13172 = state_13151;
(statearr_13172[(18)] = inst_13048);

(statearr_13172[(13)] = inst_13031__$1);

(statearr_13172[(15)] = inst_13033__$1);

(statearr_13172[(16)] = inst_13032__$1);

(statearr_13172[(17)] = inst_13030__$1);

return statearr_13172;
})();
var statearr_13173_14789 = state_13151__$1;
(statearr_13173_14789[(2)] = null);

(statearr_13173_14789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (21))){
var inst_13075 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
var statearr_13177_14790 = state_13151__$1;
(statearr_13177_14790[(2)] = inst_13075);

(statearr_13177_14790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (31))){
var inst_13101 = (state_13151[(10)]);
var inst_13105 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13101);
var state_13151__$1 = state_13151;
var statearr_13178_14792 = state_13151__$1;
(statearr_13178_14792[(2)] = inst_13105);

(statearr_13178_14792[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (32))){
var inst_13096 = (state_13151[(9)]);
var inst_13095 = (state_13151[(19)]);
var inst_13094 = (state_13151[(11)]);
var inst_13093 = (state_13151[(20)]);
var inst_13107 = (state_13151[(2)]);
var inst_13108 = (inst_13096 + (1));
var tmp13174 = inst_13095;
var tmp13175 = inst_13094;
var tmp13176 = inst_13093;
var inst_13093__$1 = tmp13176;
var inst_13094__$1 = tmp13175;
var inst_13095__$1 = tmp13174;
var inst_13096__$1 = inst_13108;
var state_13151__$1 = (function (){var statearr_13180 = state_13151;
(statearr_13180[(9)] = inst_13096__$1);

(statearr_13180[(19)] = inst_13095__$1);

(statearr_13180[(11)] = inst_13094__$1);

(statearr_13180[(20)] = inst_13093__$1);

(statearr_13180[(21)] = inst_13107);

return statearr_13180;
})();
var statearr_13182_14793 = state_13151__$1;
(statearr_13182_14793[(2)] = null);

(statearr_13182_14793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (40))){
var inst_13120 = (state_13151[(22)]);
var inst_13124 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13120);
var state_13151__$1 = state_13151;
var statearr_13183_14798 = state_13151__$1;
(statearr_13183_14798[(2)] = inst_13124);

(statearr_13183_14798[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (33))){
var inst_13111 = (state_13151[(23)]);
var inst_13113 = cljs.core.chunked_seq_QMARK_(inst_13111);
var state_13151__$1 = state_13151;
if(inst_13113){
var statearr_13184_14799 = state_13151__$1;
(statearr_13184_14799[(1)] = (36));

} else {
var statearr_13185_14800 = state_13151__$1;
(statearr_13185_14800[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (13))){
var inst_13042 = (state_13151[(24)]);
var inst_13045 = cljs.core.async.close_BANG_(inst_13042);
var state_13151__$1 = state_13151;
var statearr_13186_14801 = state_13151__$1;
(statearr_13186_14801[(2)] = inst_13045);

(statearr_13186_14801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (22))){
var inst_13065 = (state_13151[(8)]);
var inst_13068 = cljs.core.async.close_BANG_(inst_13065);
var state_13151__$1 = state_13151;
var statearr_13187_14802 = state_13151__$1;
(statearr_13187_14802[(2)] = inst_13068);

(statearr_13187_14802[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (36))){
var inst_13111 = (state_13151[(23)]);
var inst_13115 = cljs.core.chunk_first(inst_13111);
var inst_13116 = cljs.core.chunk_rest(inst_13111);
var inst_13117 = cljs.core.count(inst_13115);
var inst_13093 = inst_13116;
var inst_13094 = inst_13115;
var inst_13095 = inst_13117;
var inst_13096 = (0);
var state_13151__$1 = (function (){var statearr_13190 = state_13151;
(statearr_13190[(9)] = inst_13096);

(statearr_13190[(19)] = inst_13095);

(statearr_13190[(11)] = inst_13094);

(statearr_13190[(20)] = inst_13093);

return statearr_13190;
})();
var statearr_13191_14806 = state_13151__$1;
(statearr_13191_14806[(2)] = null);

(statearr_13191_14806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (41))){
var inst_13111 = (state_13151[(23)]);
var inst_13126 = (state_13151[(2)]);
var inst_13127 = cljs.core.next(inst_13111);
var inst_13093 = inst_13127;
var inst_13094 = null;
var inst_13095 = (0);
var inst_13096 = (0);
var state_13151__$1 = (function (){var statearr_13192 = state_13151;
(statearr_13192[(9)] = inst_13096);

(statearr_13192[(25)] = inst_13126);

(statearr_13192[(19)] = inst_13095);

(statearr_13192[(11)] = inst_13094);

(statearr_13192[(20)] = inst_13093);

return statearr_13192;
})();
var statearr_13193_14807 = state_13151__$1;
(statearr_13193_14807[(2)] = null);

(statearr_13193_14807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (43))){
var state_13151__$1 = state_13151;
var statearr_13194_14812 = state_13151__$1;
(statearr_13194_14812[(2)] = null);

(statearr_13194_14812[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (29))){
var inst_13135 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
var statearr_13195_14813 = state_13151__$1;
(statearr_13195_14813[(2)] = inst_13135);

(statearr_13195_14813[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (44))){
var inst_13144 = (state_13151[(2)]);
var state_13151__$1 = (function (){var statearr_13196 = state_13151;
(statearr_13196[(26)] = inst_13144);

return statearr_13196;
})();
var statearr_13197_14814 = state_13151__$1;
(statearr_13197_14814[(2)] = null);

(statearr_13197_14814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (6))){
var inst_13085 = (state_13151[(27)]);
var inst_13084 = cljs.core.deref(cs);
var inst_13085__$1 = cljs.core.keys(inst_13084);
var inst_13086 = cljs.core.count(inst_13085__$1);
var inst_13087 = cljs.core.reset_BANG_(dctr,inst_13086);
var inst_13092 = cljs.core.seq(inst_13085__$1);
var inst_13093 = inst_13092;
var inst_13094 = null;
var inst_13095 = (0);
var inst_13096 = (0);
var state_13151__$1 = (function (){var statearr_13198 = state_13151;
(statearr_13198[(9)] = inst_13096);

(statearr_13198[(19)] = inst_13095);

(statearr_13198[(11)] = inst_13094);

(statearr_13198[(20)] = inst_13093);

(statearr_13198[(28)] = inst_13087);

(statearr_13198[(27)] = inst_13085__$1);

return statearr_13198;
})();
var statearr_13199_14815 = state_13151__$1;
(statearr_13199_14815[(2)] = null);

(statearr_13199_14815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (28))){
var inst_13111 = (state_13151[(23)]);
var inst_13093 = (state_13151[(20)]);
var inst_13111__$1 = cljs.core.seq(inst_13093);
var state_13151__$1 = (function (){var statearr_13200 = state_13151;
(statearr_13200[(23)] = inst_13111__$1);

return statearr_13200;
})();
if(inst_13111__$1){
var statearr_13201_14820 = state_13151__$1;
(statearr_13201_14820[(1)] = (33));

} else {
var statearr_13202_14821 = state_13151__$1;
(statearr_13202_14821[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (25))){
var inst_13096 = (state_13151[(9)]);
var inst_13095 = (state_13151[(19)]);
var inst_13098 = (inst_13096 < inst_13095);
var inst_13099 = inst_13098;
var state_13151__$1 = state_13151;
if(cljs.core.truth_(inst_13099)){
var statearr_13203_14822 = state_13151__$1;
(statearr_13203_14822[(1)] = (27));

} else {
var statearr_13204_14823 = state_13151__$1;
(statearr_13204_14823[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (34))){
var state_13151__$1 = state_13151;
var statearr_13205_14827 = state_13151__$1;
(statearr_13205_14827[(2)] = null);

(statearr_13205_14827[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (17))){
var state_13151__$1 = state_13151;
var statearr_13207_14828 = state_13151__$1;
(statearr_13207_14828[(2)] = null);

(statearr_13207_14828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (3))){
var inst_13149 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13151__$1,inst_13149);
} else {
if((state_val_13152 === (12))){
var inst_13080 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
var statearr_13209_14829 = state_13151__$1;
(statearr_13209_14829[(2)] = inst_13080);

(statearr_13209_14829[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (2))){
var state_13151__$1 = state_13151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13151__$1,(4),ch);
} else {
if((state_val_13152 === (23))){
var state_13151__$1 = state_13151;
var statearr_13210_14830 = state_13151__$1;
(statearr_13210_14830[(2)] = null);

(statearr_13210_14830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (35))){
var inst_13133 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
var statearr_13211_14833 = state_13151__$1;
(statearr_13211_14833[(2)] = inst_13133);

(statearr_13211_14833[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (19))){
var inst_13052 = (state_13151[(7)]);
var inst_13056 = cljs.core.chunk_first(inst_13052);
var inst_13057 = cljs.core.chunk_rest(inst_13052);
var inst_13058 = cljs.core.count(inst_13056);
var inst_13030 = inst_13057;
var inst_13031 = inst_13056;
var inst_13032 = inst_13058;
var inst_13033 = (0);
var state_13151__$1 = (function (){var statearr_13216 = state_13151;
(statearr_13216[(13)] = inst_13031);

(statearr_13216[(15)] = inst_13033);

(statearr_13216[(16)] = inst_13032);

(statearr_13216[(17)] = inst_13030);

return statearr_13216;
})();
var statearr_13217_14839 = state_13151__$1;
(statearr_13217_14839[(2)] = null);

(statearr_13217_14839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (11))){
var inst_13052 = (state_13151[(7)]);
var inst_13030 = (state_13151[(17)]);
var inst_13052__$1 = cljs.core.seq(inst_13030);
var state_13151__$1 = (function (){var statearr_13218 = state_13151;
(statearr_13218[(7)] = inst_13052__$1);

return statearr_13218;
})();
if(inst_13052__$1){
var statearr_13219_14840 = state_13151__$1;
(statearr_13219_14840[(1)] = (16));

} else {
var statearr_13220_14841 = state_13151__$1;
(statearr_13220_14841[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (9))){
var inst_13082 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
var statearr_13222_14844 = state_13151__$1;
(statearr_13222_14844[(2)] = inst_13082);

(statearr_13222_14844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (5))){
var inst_13028 = cljs.core.deref(cs);
var inst_13029 = cljs.core.seq(inst_13028);
var inst_13030 = inst_13029;
var inst_13031 = null;
var inst_13032 = (0);
var inst_13033 = (0);
var state_13151__$1 = (function (){var statearr_13223 = state_13151;
(statearr_13223[(13)] = inst_13031);

(statearr_13223[(15)] = inst_13033);

(statearr_13223[(16)] = inst_13032);

(statearr_13223[(17)] = inst_13030);

return statearr_13223;
})();
var statearr_13225_14850 = state_13151__$1;
(statearr_13225_14850[(2)] = null);

(statearr_13225_14850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (14))){
var state_13151__$1 = state_13151;
var statearr_13226_14851 = state_13151__$1;
(statearr_13226_14851[(2)] = null);

(statearr_13226_14851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (45))){
var inst_13141 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
var statearr_13228_14852 = state_13151__$1;
(statearr_13228_14852[(2)] = inst_13141);

(statearr_13228_14852[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (26))){
var inst_13085 = (state_13151[(27)]);
var inst_13137 = (state_13151[(2)]);
var inst_13138 = cljs.core.seq(inst_13085);
var state_13151__$1 = (function (){var statearr_13229 = state_13151;
(statearr_13229[(29)] = inst_13137);

return statearr_13229;
})();
if(inst_13138){
var statearr_13231_14853 = state_13151__$1;
(statearr_13231_14853[(1)] = (42));

} else {
var statearr_13233_14854 = state_13151__$1;
(statearr_13233_14854[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (16))){
var inst_13052 = (state_13151[(7)]);
var inst_13054 = cljs.core.chunked_seq_QMARK_(inst_13052);
var state_13151__$1 = state_13151;
if(inst_13054){
var statearr_13234_14855 = state_13151__$1;
(statearr_13234_14855[(1)] = (19));

} else {
var statearr_13235_14856 = state_13151__$1;
(statearr_13235_14856[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (38))){
var inst_13130 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
var statearr_13236_14857 = state_13151__$1;
(statearr_13236_14857[(2)] = inst_13130);

(statearr_13236_14857[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (30))){
var state_13151__$1 = state_13151;
var statearr_13237_14858 = state_13151__$1;
(statearr_13237_14858[(2)] = null);

(statearr_13237_14858[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (10))){
var inst_13031 = (state_13151[(13)]);
var inst_13033 = (state_13151[(15)]);
var inst_13041 = cljs.core._nth(inst_13031,inst_13033);
var inst_13042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13041,(0),null);
var inst_13043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13041,(1),null);
var state_13151__$1 = (function (){var statearr_13241 = state_13151;
(statearr_13241[(24)] = inst_13042);

return statearr_13241;
})();
if(cljs.core.truth_(inst_13043)){
var statearr_13242_14862 = state_13151__$1;
(statearr_13242_14862[(1)] = (13));

} else {
var statearr_13243_14863 = state_13151__$1;
(statearr_13243_14863[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (18))){
var inst_13078 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
var statearr_13244_14864 = state_13151__$1;
(statearr_13244_14864[(2)] = inst_13078);

(statearr_13244_14864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (42))){
var state_13151__$1 = state_13151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13151__$1,(45),dchan);
} else {
if((state_val_13152 === (37))){
var inst_13120 = (state_13151[(22)]);
var inst_13111 = (state_13151[(23)]);
var inst_13021 = (state_13151[(12)]);
var inst_13120__$1 = cljs.core.first(inst_13111);
var inst_13121 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13120__$1,inst_13021,done);
var state_13151__$1 = (function (){var statearr_13245 = state_13151;
(statearr_13245[(22)] = inst_13120__$1);

return statearr_13245;
})();
if(cljs.core.truth_(inst_13121)){
var statearr_13246_14865 = state_13151__$1;
(statearr_13246_14865[(1)] = (39));

} else {
var statearr_13247_14866 = state_13151__$1;
(statearr_13247_14866[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (8))){
var inst_13033 = (state_13151[(15)]);
var inst_13032 = (state_13151[(16)]);
var inst_13035 = (inst_13033 < inst_13032);
var inst_13036 = inst_13035;
var state_13151__$1 = state_13151;
if(cljs.core.truth_(inst_13036)){
var statearr_13248_14867 = state_13151__$1;
(statearr_13248_14867[(1)] = (10));

} else {
var statearr_13252_14868 = state_13151__$1;
(statearr_13252_14868[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__11795__auto__ = null;
var cljs$core$async$mult_$_state_machine__11795__auto____0 = (function (){
var statearr_13269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13269[(0)] = cljs$core$async$mult_$_state_machine__11795__auto__);

(statearr_13269[(1)] = (1));

return statearr_13269;
});
var cljs$core$async$mult_$_state_machine__11795__auto____1 = (function (state_13151){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_13151);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e13270){var ex__11798__auto__ = e13270;
var statearr_13271_14870 = state_13151;
(statearr_13271_14870[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_13151[(4)]))){
var statearr_13272_14871 = state_13151;
(statearr_13272_14871[(1)] = cljs.core.first((state_13151[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14872 = state_13151;
state_13151 = G__14872;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11795__auto__ = function(state_13151){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11795__auto____1.call(this,state_13151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11795__auto____0;
cljs$core$async$mult_$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11795__auto____1;
return cljs$core$async$mult_$_state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_13273 = f__12245__auto__();
(statearr_13273[(6)] = c__12244__auto___14765);

return statearr_13273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
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
var G__13285 = arguments.length;
switch (G__13285) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_14874 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_14874(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14875 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_14875(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14876 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14876(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14877 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_14877(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14878 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14878(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14881 = arguments.length;
var i__5770__auto___14882 = (0);
while(true){
if((i__5770__auto___14882 < len__5769__auto___14881)){
args__5775__auto__.push((arguments[i__5770__auto___14882]));

var G__14883 = (i__5770__auto___14882 + (1));
i__5770__auto___14882 = G__14883;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13307){
var map__13308 = p__13307;
var map__13308__$1 = cljs.core.__destructure_map(map__13308);
var opts = map__13308__$1;
var statearr_13309_14885 = state;
(statearr_13309_14885[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_13311_14886 = state;
(statearr_13311_14886[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_13312_14887 = state;
(statearr_13312_14887[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13302){
var G__13303 = cljs.core.first(seq13302);
var seq13302__$1 = cljs.core.next(seq13302);
var G__13304 = cljs.core.first(seq13302__$1);
var seq13302__$2 = cljs.core.next(seq13302__$1);
var G__13305 = cljs.core.first(seq13302__$2);
var seq13302__$3 = cljs.core.next(seq13302__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13303,G__13304,G__13305,seq13302__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13317 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13318){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13318 = meta13318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13319,meta13318__$1){
var self__ = this;
var _13319__$1 = this;
return (new cljs.core.async.t_cljs$core$async13317(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13318__$1));
}));

(cljs.core.async.t_cljs$core$async13317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13319){
var self__ = this;
var _13319__$1 = this;
return self__.meta13318;
}));

(cljs.core.async.t_cljs$core$async13317.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13317.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async13317.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13317.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13317.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13317.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13317.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13317.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13318","meta13318",1225772791,null)], null);
}));

(cljs.core.async.t_cljs$core$async13317.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13317");

(cljs.core.async.t_cljs$core$async13317.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13317");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13317.
 */
cljs.core.async.__GT_t_cljs$core$async13317 = (function cljs$core$async$__GT_t_cljs$core$async13317(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13318){
return (new cljs.core.async.t_cljs$core$async13317(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13318));
});


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
var m = (new cljs.core.async.t_cljs$core$async13317(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__12244__auto___14902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_13399){
var state_val_13400 = (state_13399[(1)]);
if((state_val_13400 === (7))){
var inst_13359 = (state_13399[(2)]);
var state_13399__$1 = state_13399;
if(cljs.core.truth_(inst_13359)){
var statearr_13401_14904 = state_13399__$1;
(statearr_13401_14904[(1)] = (8));

} else {
var statearr_13402_14906 = state_13399__$1;
(statearr_13402_14906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (20))){
var inst_13349 = (state_13399[(7)]);
var state_13399__$1 = state_13399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13399__$1,(23),out,inst_13349);
} else {
if((state_val_13400 === (1))){
var inst_13330 = calc_state();
var inst_13331 = cljs.core.__destructure_map(inst_13330);
var inst_13333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13331,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13331,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13331,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13336 = inst_13330;
var state_13399__$1 = (function (){var statearr_13403 = state_13399;
(statearr_13403[(8)] = inst_13335);

(statearr_13403[(9)] = inst_13333);

(statearr_13403[(10)] = inst_13336);

(statearr_13403[(11)] = inst_13334);

return statearr_13403;
})();
var statearr_13404_14910 = state_13399__$1;
(statearr_13404_14910[(2)] = null);

(statearr_13404_14910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (24))){
var inst_13339 = (state_13399[(12)]);
var inst_13336 = inst_13339;
var state_13399__$1 = (function (){var statearr_13405 = state_13399;
(statearr_13405[(10)] = inst_13336);

return statearr_13405;
})();
var statearr_13406_14911 = state_13399__$1;
(statearr_13406_14911[(2)] = null);

(statearr_13406_14911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (4))){
var inst_13349 = (state_13399[(7)]);
var inst_13354 = (state_13399[(13)]);
var inst_13348 = (state_13399[(2)]);
var inst_13349__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13348,(0),null);
var inst_13350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13348,(1),null);
var inst_13354__$1 = (inst_13349__$1 == null);
var state_13399__$1 = (function (){var statearr_13411 = state_13399;
(statearr_13411[(7)] = inst_13349__$1);

(statearr_13411[(13)] = inst_13354__$1);

(statearr_13411[(14)] = inst_13350);

return statearr_13411;
})();
if(cljs.core.truth_(inst_13354__$1)){
var statearr_13412_14912 = state_13399__$1;
(statearr_13412_14912[(1)] = (5));

} else {
var statearr_13413_14916 = state_13399__$1;
(statearr_13413_14916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (15))){
var inst_13341 = (state_13399[(15)]);
var inst_13373 = (state_13399[(16)]);
var inst_13373__$1 = cljs.core.empty_QMARK_(inst_13341);
var state_13399__$1 = (function (){var statearr_13414 = state_13399;
(statearr_13414[(16)] = inst_13373__$1);

return statearr_13414;
})();
if(inst_13373__$1){
var statearr_13415_14917 = state_13399__$1;
(statearr_13415_14917[(1)] = (17));

} else {
var statearr_13416_14918 = state_13399__$1;
(statearr_13416_14918[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (21))){
var inst_13339 = (state_13399[(12)]);
var inst_13336 = inst_13339;
var state_13399__$1 = (function (){var statearr_13417 = state_13399;
(statearr_13417[(10)] = inst_13336);

return statearr_13417;
})();
var statearr_13422_14920 = state_13399__$1;
(statearr_13422_14920[(2)] = null);

(statearr_13422_14920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (13))){
var inst_13366 = (state_13399[(2)]);
var inst_13367 = calc_state();
var inst_13336 = inst_13367;
var state_13399__$1 = (function (){var statearr_13423 = state_13399;
(statearr_13423[(17)] = inst_13366);

(statearr_13423[(10)] = inst_13336);

return statearr_13423;
})();
var statearr_13424_14921 = state_13399__$1;
(statearr_13424_14921[(2)] = null);

(statearr_13424_14921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (22))){
var inst_13393 = (state_13399[(2)]);
var state_13399__$1 = state_13399;
var statearr_13425_14922 = state_13399__$1;
(statearr_13425_14922[(2)] = inst_13393);

(statearr_13425_14922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (6))){
var inst_13350 = (state_13399[(14)]);
var inst_13357 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13350,change);
var state_13399__$1 = state_13399;
var statearr_13426_14925 = state_13399__$1;
(statearr_13426_14925[(2)] = inst_13357);

(statearr_13426_14925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (25))){
var state_13399__$1 = state_13399;
var statearr_13427_14926 = state_13399__$1;
(statearr_13427_14926[(2)] = null);

(statearr_13427_14926[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (17))){
var inst_13342 = (state_13399[(18)]);
var inst_13350 = (state_13399[(14)]);
var inst_13375 = (inst_13342.cljs$core$IFn$_invoke$arity$1 ? inst_13342.cljs$core$IFn$_invoke$arity$1(inst_13350) : inst_13342.call(null,inst_13350));
var inst_13376 = cljs.core.not(inst_13375);
var state_13399__$1 = state_13399;
var statearr_13428_14927 = state_13399__$1;
(statearr_13428_14927[(2)] = inst_13376);

(statearr_13428_14927[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (3))){
var inst_13397 = (state_13399[(2)]);
var state_13399__$1 = state_13399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13399__$1,inst_13397);
} else {
if((state_val_13400 === (12))){
var state_13399__$1 = state_13399;
var statearr_13429_14930 = state_13399__$1;
(statearr_13429_14930[(2)] = null);

(statearr_13429_14930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (2))){
var inst_13336 = (state_13399[(10)]);
var inst_13339 = (state_13399[(12)]);
var inst_13339__$1 = cljs.core.__destructure_map(inst_13336);
var inst_13341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13339__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13339__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13339__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13399__$1 = (function (){var statearr_13430 = state_13399;
(statearr_13430[(18)] = inst_13342);

(statearr_13430[(15)] = inst_13341);

(statearr_13430[(12)] = inst_13339__$1);

return statearr_13430;
})();
return cljs.core.async.ioc_alts_BANG_(state_13399__$1,(4),inst_13343);
} else {
if((state_val_13400 === (23))){
var inst_13384 = (state_13399[(2)]);
var state_13399__$1 = state_13399;
if(cljs.core.truth_(inst_13384)){
var statearr_13431_14938 = state_13399__$1;
(statearr_13431_14938[(1)] = (24));

} else {
var statearr_13432_14939 = state_13399__$1;
(statearr_13432_14939[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (19))){
var inst_13379 = (state_13399[(2)]);
var state_13399__$1 = state_13399;
var statearr_13433_14940 = state_13399__$1;
(statearr_13433_14940[(2)] = inst_13379);

(statearr_13433_14940[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (11))){
var inst_13350 = (state_13399[(14)]);
var inst_13363 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13350);
var state_13399__$1 = state_13399;
var statearr_13434_14941 = state_13399__$1;
(statearr_13434_14941[(2)] = inst_13363);

(statearr_13434_14941[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (9))){
var inst_13341 = (state_13399[(15)]);
var inst_13350 = (state_13399[(14)]);
var inst_13370 = (state_13399[(19)]);
var inst_13370__$1 = (inst_13341.cljs$core$IFn$_invoke$arity$1 ? inst_13341.cljs$core$IFn$_invoke$arity$1(inst_13350) : inst_13341.call(null,inst_13350));
var state_13399__$1 = (function (){var statearr_13437 = state_13399;
(statearr_13437[(19)] = inst_13370__$1);

return statearr_13437;
})();
if(cljs.core.truth_(inst_13370__$1)){
var statearr_13438_14942 = state_13399__$1;
(statearr_13438_14942[(1)] = (14));

} else {
var statearr_13439_14944 = state_13399__$1;
(statearr_13439_14944[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (5))){
var inst_13354 = (state_13399[(13)]);
var state_13399__$1 = state_13399;
var statearr_13440_14947 = state_13399__$1;
(statearr_13440_14947[(2)] = inst_13354);

(statearr_13440_14947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (14))){
var inst_13370 = (state_13399[(19)]);
var state_13399__$1 = state_13399;
var statearr_13441_14948 = state_13399__$1;
(statearr_13441_14948[(2)] = inst_13370);

(statearr_13441_14948[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (26))){
var inst_13389 = (state_13399[(2)]);
var state_13399__$1 = state_13399;
var statearr_13442_14951 = state_13399__$1;
(statearr_13442_14951[(2)] = inst_13389);

(statearr_13442_14951[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (16))){
var inst_13381 = (state_13399[(2)]);
var state_13399__$1 = state_13399;
if(cljs.core.truth_(inst_13381)){
var statearr_13446_14952 = state_13399__$1;
(statearr_13446_14952[(1)] = (20));

} else {
var statearr_13447_14953 = state_13399__$1;
(statearr_13447_14953[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (10))){
var inst_13395 = (state_13399[(2)]);
var state_13399__$1 = state_13399;
var statearr_13448_14955 = state_13399__$1;
(statearr_13448_14955[(2)] = inst_13395);

(statearr_13448_14955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (18))){
var inst_13373 = (state_13399[(16)]);
var state_13399__$1 = state_13399;
var statearr_13449_14956 = state_13399__$1;
(statearr_13449_14956[(2)] = inst_13373);

(statearr_13449_14956[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13400 === (8))){
var inst_13349 = (state_13399[(7)]);
var inst_13361 = (inst_13349 == null);
var state_13399__$1 = state_13399;
if(cljs.core.truth_(inst_13361)){
var statearr_13450_14957 = state_13399__$1;
(statearr_13450_14957[(1)] = (11));

} else {
var statearr_13451_14958 = state_13399__$1;
(statearr_13451_14958[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__11795__auto__ = null;
var cljs$core$async$mix_$_state_machine__11795__auto____0 = (function (){
var statearr_13452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13452[(0)] = cljs$core$async$mix_$_state_machine__11795__auto__);

(statearr_13452[(1)] = (1));

return statearr_13452;
});
var cljs$core$async$mix_$_state_machine__11795__auto____1 = (function (state_13399){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_13399);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e13453){var ex__11798__auto__ = e13453;
var statearr_13454_14963 = state_13399;
(statearr_13454_14963[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_13399[(4)]))){
var statearr_13455_14968 = state_13399;
(statearr_13455_14968[(1)] = cljs.core.first((state_13399[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14969 = state_13399;
state_13399 = G__14969;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11795__auto__ = function(state_13399){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11795__auto____1.call(this,state_13399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11795__auto____0;
cljs$core$async$mix_$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11795__auto____1;
return cljs$core$async$mix_$_state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_13456 = f__12245__auto__();
(statearr_13456[(6)] = c__12244__auto___14902);

return statearr_13456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_14976 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_14976(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14979 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_14979(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14982 = (function() {
var G__14983 = null;
var G__14983__1 = (function (p){
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
var G__14983__2 = (function (p,v){
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
G__14983 = function(p,v){
switch(arguments.length){
case 1:
return G__14983__1.call(this,p);
case 2:
return G__14983__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14983.cljs$core$IFn$_invoke$arity$1 = G__14983__1;
G__14983.cljs$core$IFn$_invoke$arity$2 = G__14983__2;
return G__14983;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13458 = arguments.length;
switch (G__13458) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14982(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14982(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13466 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13467){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13467 = meta13467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13468,meta13467__$1){
var self__ = this;
var _13468__$1 = this;
return (new cljs.core.async.t_cljs$core$async13466(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13467__$1));
}));

(cljs.core.async.t_cljs$core$async13466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13468){
var self__ = this;
var _13468__$1 = this;
return self__.meta13467;
}));

(cljs.core.async.t_cljs$core$async13466.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13466.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13466.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13466.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13466.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async13466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13467","meta13467",1498858594,null)], null);
}));

(cljs.core.async.t_cljs$core$async13466.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13466");

(cljs.core.async.t_cljs$core$async13466.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13466");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13466.
 */
cljs.core.async.__GT_t_cljs$core$async13466 = (function cljs$core$async$__GT_t_cljs$core$async13466(ch,topic_fn,buf_fn,mults,ensure_mult,meta13467){
return (new cljs.core.async.t_cljs$core$async13466(ch,topic_fn,buf_fn,mults,ensure_mult,meta13467));
});


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
var G__13462 = arguments.length;
switch (G__13462) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__13460_SHARP_){
if(cljs.core.truth_((p1__13460_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13460_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13460_SHARP_.call(null,topic)))){
return p1__13460_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13460_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async13466(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__12244__auto___15021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_13544){
var state_val_13551 = (state_13544[(1)]);
if((state_val_13551 === (7))){
var inst_13540 = (state_13544[(2)]);
var state_13544__$1 = state_13544;
var statearr_13566_15026 = state_13544__$1;
(statearr_13566_15026[(2)] = inst_13540);

(statearr_13566_15026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (20))){
var state_13544__$1 = state_13544;
var statearr_13567_15031 = state_13544__$1;
(statearr_13567_15031[(2)] = null);

(statearr_13567_15031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (1))){
var state_13544__$1 = state_13544;
var statearr_13568_15032 = state_13544__$1;
(statearr_13568_15032[(2)] = null);

(statearr_13568_15032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (24))){
var inst_13523 = (state_13544[(7)]);
var inst_13532 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13523);
var state_13544__$1 = state_13544;
var statearr_13569_15033 = state_13544__$1;
(statearr_13569_15033[(2)] = inst_13532);

(statearr_13569_15033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (4))){
var inst_13475 = (state_13544[(8)]);
var inst_13475__$1 = (state_13544[(2)]);
var inst_13476 = (inst_13475__$1 == null);
var state_13544__$1 = (function (){var statearr_13578 = state_13544;
(statearr_13578[(8)] = inst_13475__$1);

return statearr_13578;
})();
if(cljs.core.truth_(inst_13476)){
var statearr_13585_15034 = state_13544__$1;
(statearr_13585_15034[(1)] = (5));

} else {
var statearr_13586_15035 = state_13544__$1;
(statearr_13586_15035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (15))){
var inst_13517 = (state_13544[(2)]);
var state_13544__$1 = state_13544;
var statearr_13587_15044 = state_13544__$1;
(statearr_13587_15044[(2)] = inst_13517);

(statearr_13587_15044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (21))){
var inst_13537 = (state_13544[(2)]);
var state_13544__$1 = (function (){var statearr_13594 = state_13544;
(statearr_13594[(9)] = inst_13537);

return statearr_13594;
})();
var statearr_13595_15045 = state_13544__$1;
(statearr_13595_15045[(2)] = null);

(statearr_13595_15045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (13))){
var inst_13499 = (state_13544[(10)]);
var inst_13501 = cljs.core.chunked_seq_QMARK_(inst_13499);
var state_13544__$1 = state_13544;
if(inst_13501){
var statearr_13596_15046 = state_13544__$1;
(statearr_13596_15046[(1)] = (16));

} else {
var statearr_13597_15047 = state_13544__$1;
(statearr_13597_15047[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (22))){
var inst_13529 = (state_13544[(2)]);
var state_13544__$1 = state_13544;
if(cljs.core.truth_(inst_13529)){
var statearr_13598_15048 = state_13544__$1;
(statearr_13598_15048[(1)] = (23));

} else {
var statearr_13601_15049 = state_13544__$1;
(statearr_13601_15049[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (6))){
var inst_13523 = (state_13544[(7)]);
var inst_13525 = (state_13544[(11)]);
var inst_13475 = (state_13544[(8)]);
var inst_13523__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13475) : topic_fn.call(null,inst_13475));
var inst_13524 = cljs.core.deref(mults);
var inst_13525__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13524,inst_13523__$1);
var state_13544__$1 = (function (){var statearr_13602 = state_13544;
(statearr_13602[(7)] = inst_13523__$1);

(statearr_13602[(11)] = inst_13525__$1);

return statearr_13602;
})();
if(cljs.core.truth_(inst_13525__$1)){
var statearr_13603_15050 = state_13544__$1;
(statearr_13603_15050[(1)] = (19));

} else {
var statearr_13605_15051 = state_13544__$1;
(statearr_13605_15051[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (25))){
var inst_13534 = (state_13544[(2)]);
var state_13544__$1 = state_13544;
var statearr_13606_15052 = state_13544__$1;
(statearr_13606_15052[(2)] = inst_13534);

(statearr_13606_15052[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (17))){
var inst_13499 = (state_13544[(10)]);
var inst_13508 = cljs.core.first(inst_13499);
var inst_13509 = cljs.core.async.muxch_STAR_(inst_13508);
var inst_13510 = cljs.core.async.close_BANG_(inst_13509);
var inst_13511 = cljs.core.next(inst_13499);
var inst_13485 = inst_13511;
var inst_13486 = null;
var inst_13487 = (0);
var inst_13488 = (0);
var state_13544__$1 = (function (){var statearr_13607 = state_13544;
(statearr_13607[(12)] = inst_13510);

(statearr_13607[(13)] = inst_13488);

(statearr_13607[(14)] = inst_13485);

(statearr_13607[(15)] = inst_13486);

(statearr_13607[(16)] = inst_13487);

return statearr_13607;
})();
var statearr_13608_15059 = state_13544__$1;
(statearr_13608_15059[(2)] = null);

(statearr_13608_15059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (3))){
var inst_13542 = (state_13544[(2)]);
var state_13544__$1 = state_13544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13544__$1,inst_13542);
} else {
if((state_val_13551 === (12))){
var inst_13519 = (state_13544[(2)]);
var state_13544__$1 = state_13544;
var statearr_13609_15060 = state_13544__$1;
(statearr_13609_15060[(2)] = inst_13519);

(statearr_13609_15060[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (2))){
var state_13544__$1 = state_13544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13544__$1,(4),ch);
} else {
if((state_val_13551 === (23))){
var state_13544__$1 = state_13544;
var statearr_13613_15066 = state_13544__$1;
(statearr_13613_15066[(2)] = null);

(statearr_13613_15066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (19))){
var inst_13525 = (state_13544[(11)]);
var inst_13475 = (state_13544[(8)]);
var inst_13527 = cljs.core.async.muxch_STAR_(inst_13525);
var state_13544__$1 = state_13544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13544__$1,(22),inst_13527,inst_13475);
} else {
if((state_val_13551 === (11))){
var inst_13499 = (state_13544[(10)]);
var inst_13485 = (state_13544[(14)]);
var inst_13499__$1 = cljs.core.seq(inst_13485);
var state_13544__$1 = (function (){var statearr_13614 = state_13544;
(statearr_13614[(10)] = inst_13499__$1);

return statearr_13614;
})();
if(inst_13499__$1){
var statearr_13615_15079 = state_13544__$1;
(statearr_13615_15079[(1)] = (13));

} else {
var statearr_13616_15080 = state_13544__$1;
(statearr_13616_15080[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (9))){
var inst_13521 = (state_13544[(2)]);
var state_13544__$1 = state_13544;
var statearr_13617_15083 = state_13544__$1;
(statearr_13617_15083[(2)] = inst_13521);

(statearr_13617_15083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (5))){
var inst_13482 = cljs.core.deref(mults);
var inst_13483 = cljs.core.vals(inst_13482);
var inst_13484 = cljs.core.seq(inst_13483);
var inst_13485 = inst_13484;
var inst_13486 = null;
var inst_13487 = (0);
var inst_13488 = (0);
var state_13544__$1 = (function (){var statearr_13618 = state_13544;
(statearr_13618[(13)] = inst_13488);

(statearr_13618[(14)] = inst_13485);

(statearr_13618[(15)] = inst_13486);

(statearr_13618[(16)] = inst_13487);

return statearr_13618;
})();
var statearr_13619_15090 = state_13544__$1;
(statearr_13619_15090[(2)] = null);

(statearr_13619_15090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (14))){
var state_13544__$1 = state_13544;
var statearr_13623_15091 = state_13544__$1;
(statearr_13623_15091[(2)] = null);

(statearr_13623_15091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (16))){
var inst_13499 = (state_13544[(10)]);
var inst_13503 = cljs.core.chunk_first(inst_13499);
var inst_13504 = cljs.core.chunk_rest(inst_13499);
var inst_13505 = cljs.core.count(inst_13503);
var inst_13485 = inst_13504;
var inst_13486 = inst_13503;
var inst_13487 = inst_13505;
var inst_13488 = (0);
var state_13544__$1 = (function (){var statearr_13624 = state_13544;
(statearr_13624[(13)] = inst_13488);

(statearr_13624[(14)] = inst_13485);

(statearr_13624[(15)] = inst_13486);

(statearr_13624[(16)] = inst_13487);

return statearr_13624;
})();
var statearr_13625_15092 = state_13544__$1;
(statearr_13625_15092[(2)] = null);

(statearr_13625_15092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (10))){
var inst_13488 = (state_13544[(13)]);
var inst_13485 = (state_13544[(14)]);
var inst_13486 = (state_13544[(15)]);
var inst_13487 = (state_13544[(16)]);
var inst_13493 = cljs.core._nth(inst_13486,inst_13488);
var inst_13494 = cljs.core.async.muxch_STAR_(inst_13493);
var inst_13495 = cljs.core.async.close_BANG_(inst_13494);
var inst_13496 = (inst_13488 + (1));
var tmp13620 = inst_13485;
var tmp13621 = inst_13486;
var tmp13622 = inst_13487;
var inst_13485__$1 = tmp13620;
var inst_13486__$1 = tmp13621;
var inst_13487__$1 = tmp13622;
var inst_13488__$1 = inst_13496;
var state_13544__$1 = (function (){var statearr_13626 = state_13544;
(statearr_13626[(17)] = inst_13495);

(statearr_13626[(13)] = inst_13488__$1);

(statearr_13626[(14)] = inst_13485__$1);

(statearr_13626[(15)] = inst_13486__$1);

(statearr_13626[(16)] = inst_13487__$1);

return statearr_13626;
})();
var statearr_13627_15103 = state_13544__$1;
(statearr_13627_15103[(2)] = null);

(statearr_13627_15103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (18))){
var inst_13514 = (state_13544[(2)]);
var state_13544__$1 = state_13544;
var statearr_13628_15104 = state_13544__$1;
(statearr_13628_15104[(2)] = inst_13514);

(statearr_13628_15104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13551 === (8))){
var inst_13488 = (state_13544[(13)]);
var inst_13487 = (state_13544[(16)]);
var inst_13490 = (inst_13488 < inst_13487);
var inst_13491 = inst_13490;
var state_13544__$1 = state_13544;
if(cljs.core.truth_(inst_13491)){
var statearr_13629_15110 = state_13544__$1;
(statearr_13629_15110[(1)] = (10));

} else {
var statearr_13630_15112 = state_13544__$1;
(statearr_13630_15112[(1)] = (11));

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
var cljs$core$async$state_machine__11795__auto__ = null;
var cljs$core$async$state_machine__11795__auto____0 = (function (){
var statearr_13631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13631[(0)] = cljs$core$async$state_machine__11795__auto__);

(statearr_13631[(1)] = (1));

return statearr_13631;
});
var cljs$core$async$state_machine__11795__auto____1 = (function (state_13544){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_13544);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e13632){var ex__11798__auto__ = e13632;
var statearr_13633_15130 = state_13544;
(statearr_13633_15130[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_13544[(4)]))){
var statearr_13634_15131 = state_13544;
(statearr_13634_15131[(1)] = cljs.core.first((state_13544[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15132 = state_13544;
state_13544 = G__15132;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$state_machine__11795__auto__ = function(state_13544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11795__auto____1.call(this,state_13544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11795__auto____0;
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11795__auto____1;
return cljs$core$async$state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_13635 = f__12245__auto__();
(statearr_13635[(6)] = c__12244__auto___15021);

return statearr_13635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
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
var G__13637 = arguments.length;
switch (G__13637) {
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
var G__13639 = arguments.length;
switch (G__13639) {
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
var G__13652 = arguments.length;
switch (G__13652) {
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
var c__12244__auto___15156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_13695){
var state_val_13696 = (state_13695[(1)]);
if((state_val_13696 === (7))){
var state_13695__$1 = state_13695;
var statearr_13697_15157 = state_13695__$1;
(statearr_13697_15157[(2)] = null);

(statearr_13697_15157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (1))){
var state_13695__$1 = state_13695;
var statearr_13698_15158 = state_13695__$1;
(statearr_13698_15158[(2)] = null);

(statearr_13698_15158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (4))){
var inst_13655 = (state_13695[(7)]);
var inst_13656 = (state_13695[(8)]);
var inst_13658 = (inst_13656 < inst_13655);
var state_13695__$1 = state_13695;
if(cljs.core.truth_(inst_13658)){
var statearr_13699_15159 = state_13695__$1;
(statearr_13699_15159[(1)] = (6));

} else {
var statearr_13700_15162 = state_13695__$1;
(statearr_13700_15162[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (15))){
var inst_13681 = (state_13695[(9)]);
var inst_13686 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13681);
var state_13695__$1 = state_13695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13695__$1,(17),out,inst_13686);
} else {
if((state_val_13696 === (13))){
var inst_13681 = (state_13695[(9)]);
var inst_13681__$1 = (state_13695[(2)]);
var inst_13682 = cljs.core.some(cljs.core.nil_QMARK_,inst_13681__$1);
var state_13695__$1 = (function (){var statearr_13703 = state_13695;
(statearr_13703[(9)] = inst_13681__$1);

return statearr_13703;
})();
if(cljs.core.truth_(inst_13682)){
var statearr_13704_15167 = state_13695__$1;
(statearr_13704_15167[(1)] = (14));

} else {
var statearr_13705_15168 = state_13695__$1;
(statearr_13705_15168[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (6))){
var state_13695__$1 = state_13695;
var statearr_13706_15169 = state_13695__$1;
(statearr_13706_15169[(2)] = null);

(statearr_13706_15169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (17))){
var inst_13688 = (state_13695[(2)]);
var state_13695__$1 = (function (){var statearr_13711 = state_13695;
(statearr_13711[(10)] = inst_13688);

return statearr_13711;
})();
var statearr_13712_15170 = state_13695__$1;
(statearr_13712_15170[(2)] = null);

(statearr_13712_15170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (3))){
var inst_13693 = (state_13695[(2)]);
var state_13695__$1 = state_13695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13695__$1,inst_13693);
} else {
if((state_val_13696 === (12))){
var _ = (function (){var statearr_13714 = state_13695;
(statearr_13714[(4)] = cljs.core.rest((state_13695[(4)])));

return statearr_13714;
})();
var state_13695__$1 = state_13695;
var ex13709 = (state_13695__$1[(2)]);
var statearr_13715_15171 = state_13695__$1;
(statearr_13715_15171[(5)] = ex13709);


if((ex13709 instanceof Object)){
var statearr_13716_15172 = state_13695__$1;
(statearr_13716_15172[(1)] = (11));

(statearr_13716_15172[(5)] = null);

} else {
throw ex13709;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (2))){
var inst_13654 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13655 = cnt;
var inst_13656 = (0);
var state_13695__$1 = (function (){var statearr_13719 = state_13695;
(statearr_13719[(7)] = inst_13655);

(statearr_13719[(8)] = inst_13656);

(statearr_13719[(11)] = inst_13654);

return statearr_13719;
})();
var statearr_13720_15173 = state_13695__$1;
(statearr_13720_15173[(2)] = null);

(statearr_13720_15173[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (11))){
var inst_13660 = (state_13695[(2)]);
var inst_13661 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13695__$1 = (function (){var statearr_13721 = state_13695;
(statearr_13721[(12)] = inst_13660);

return statearr_13721;
})();
var statearr_13722_15175 = state_13695__$1;
(statearr_13722_15175[(2)] = inst_13661);

(statearr_13722_15175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (9))){
var inst_13656 = (state_13695[(8)]);
var _ = (function (){var statearr_13723 = state_13695;
(statearr_13723[(4)] = cljs.core.cons((12),(state_13695[(4)])));

return statearr_13723;
})();
var inst_13667 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13656) : chs__$1.call(null,inst_13656));
var inst_13668 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13656) : done.call(null,inst_13656));
var inst_13669 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13667,inst_13668);
var ___$1 = (function (){var statearr_13724 = state_13695;
(statearr_13724[(4)] = cljs.core.rest((state_13695[(4)])));

return statearr_13724;
})();
var state_13695__$1 = state_13695;
var statearr_13725_15176 = state_13695__$1;
(statearr_13725_15176[(2)] = inst_13669);

(statearr_13725_15176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (5))){
var inst_13679 = (state_13695[(2)]);
var state_13695__$1 = (function (){var statearr_13726 = state_13695;
(statearr_13726[(13)] = inst_13679);

return statearr_13726;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13695__$1,(13),dchan);
} else {
if((state_val_13696 === (14))){
var inst_13684 = cljs.core.async.close_BANG_(out);
var state_13695__$1 = state_13695;
var statearr_13727_15181 = state_13695__$1;
(statearr_13727_15181[(2)] = inst_13684);

(statearr_13727_15181[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (16))){
var inst_13691 = (state_13695[(2)]);
var state_13695__$1 = state_13695;
var statearr_13728_15182 = state_13695__$1;
(statearr_13728_15182[(2)] = inst_13691);

(statearr_13728_15182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (10))){
var inst_13656 = (state_13695[(8)]);
var inst_13672 = (state_13695[(2)]);
var inst_13673 = (inst_13656 + (1));
var inst_13656__$1 = inst_13673;
var state_13695__$1 = (function (){var statearr_13729 = state_13695;
(statearr_13729[(14)] = inst_13672);

(statearr_13729[(8)] = inst_13656__$1);

return statearr_13729;
})();
var statearr_13730_15183 = state_13695__$1;
(statearr_13730_15183[(2)] = null);

(statearr_13730_15183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (8))){
var inst_13677 = (state_13695[(2)]);
var state_13695__$1 = state_13695;
var statearr_13731_15185 = state_13695__$1;
(statearr_13731_15185[(2)] = inst_13677);

(statearr_13731_15185[(1)] = (5));


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
var cljs$core$async$state_machine__11795__auto__ = null;
var cljs$core$async$state_machine__11795__auto____0 = (function (){
var statearr_13732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13732[(0)] = cljs$core$async$state_machine__11795__auto__);

(statearr_13732[(1)] = (1));

return statearr_13732;
});
var cljs$core$async$state_machine__11795__auto____1 = (function (state_13695){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_13695);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e13733){var ex__11798__auto__ = e13733;
var statearr_13737_15188 = state_13695;
(statearr_13737_15188[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_13695[(4)]))){
var statearr_13738_15189 = state_13695;
(statearr_13738_15189[(1)] = cljs.core.first((state_13695[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15192 = state_13695;
state_13695 = G__15192;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$state_machine__11795__auto__ = function(state_13695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11795__auto____1.call(this,state_13695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11795__auto____0;
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11795__auto____1;
return cljs$core$async$state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_13739 = f__12245__auto__();
(statearr_13739[(6)] = c__12244__auto___15156);

return statearr_13739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
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
var G__13742 = arguments.length;
switch (G__13742) {
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
var c__12244__auto___15202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_13787){
var state_val_13788 = (state_13787[(1)]);
if((state_val_13788 === (7))){
var inst_13767 = (state_13787[(7)]);
var inst_13766 = (state_13787[(8)]);
var inst_13766__$1 = (state_13787[(2)]);
var inst_13767__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13766__$1,(0),null);
var inst_13768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13766__$1,(1),null);
var inst_13769 = (inst_13767__$1 == null);
var state_13787__$1 = (function (){var statearr_13799 = state_13787;
(statearr_13799[(7)] = inst_13767__$1);

(statearr_13799[(8)] = inst_13766__$1);

(statearr_13799[(9)] = inst_13768);

return statearr_13799;
})();
if(cljs.core.truth_(inst_13769)){
var statearr_13800_15203 = state_13787__$1;
(statearr_13800_15203[(1)] = (8));

} else {
var statearr_13801_15207 = state_13787__$1;
(statearr_13801_15207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (1))){
var inst_13753 = cljs.core.vec(chs);
var inst_13754 = inst_13753;
var state_13787__$1 = (function (){var statearr_13802 = state_13787;
(statearr_13802[(10)] = inst_13754);

return statearr_13802;
})();
var statearr_13803_15208 = state_13787__$1;
(statearr_13803_15208[(2)] = null);

(statearr_13803_15208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (4))){
var inst_13754 = (state_13787[(10)]);
var state_13787__$1 = state_13787;
return cljs.core.async.ioc_alts_BANG_(state_13787__$1,(7),inst_13754);
} else {
if((state_val_13788 === (6))){
var inst_13783 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
var statearr_13811_15209 = state_13787__$1;
(statearr_13811_15209[(2)] = inst_13783);

(statearr_13811_15209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (3))){
var inst_13785 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13787__$1,inst_13785);
} else {
if((state_val_13788 === (2))){
var inst_13754 = (state_13787[(10)]);
var inst_13756 = cljs.core.count(inst_13754);
var inst_13757 = (inst_13756 > (0));
var state_13787__$1 = state_13787;
if(cljs.core.truth_(inst_13757)){
var statearr_13819_15210 = state_13787__$1;
(statearr_13819_15210[(1)] = (4));

} else {
var statearr_13820_15211 = state_13787__$1;
(statearr_13820_15211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (11))){
var inst_13754 = (state_13787[(10)]);
var inst_13776 = (state_13787[(2)]);
var tmp13815 = inst_13754;
var inst_13754__$1 = tmp13815;
var state_13787__$1 = (function (){var statearr_13825 = state_13787;
(statearr_13825[(11)] = inst_13776);

(statearr_13825[(10)] = inst_13754__$1);

return statearr_13825;
})();
var statearr_13826_15212 = state_13787__$1;
(statearr_13826_15212[(2)] = null);

(statearr_13826_15212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (9))){
var inst_13767 = (state_13787[(7)]);
var state_13787__$1 = state_13787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13787__$1,(11),out,inst_13767);
} else {
if((state_val_13788 === (5))){
var inst_13781 = cljs.core.async.close_BANG_(out);
var state_13787__$1 = state_13787;
var statearr_13829_15213 = state_13787__$1;
(statearr_13829_15213[(2)] = inst_13781);

(statearr_13829_15213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (10))){
var inst_13779 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
var statearr_13830_15214 = state_13787__$1;
(statearr_13830_15214[(2)] = inst_13779);

(statearr_13830_15214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (8))){
var inst_13767 = (state_13787[(7)]);
var inst_13766 = (state_13787[(8)]);
var inst_13754 = (state_13787[(10)]);
var inst_13768 = (state_13787[(9)]);
var inst_13771 = (function (){var cs = inst_13754;
var vec__13762 = inst_13766;
var v = inst_13767;
var c = inst_13768;
return (function (p1__13740_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13740_SHARP_);
});
})();
var inst_13772 = cljs.core.filterv(inst_13771,inst_13754);
var inst_13754__$1 = inst_13772;
var state_13787__$1 = (function (){var statearr_13831 = state_13787;
(statearr_13831[(10)] = inst_13754__$1);

return statearr_13831;
})();
var statearr_13832_15215 = state_13787__$1;
(statearr_13832_15215[(2)] = null);

(statearr_13832_15215[(1)] = (2));


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
var cljs$core$async$state_machine__11795__auto__ = null;
var cljs$core$async$state_machine__11795__auto____0 = (function (){
var statearr_13833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13833[(0)] = cljs$core$async$state_machine__11795__auto__);

(statearr_13833[(1)] = (1));

return statearr_13833;
});
var cljs$core$async$state_machine__11795__auto____1 = (function (state_13787){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_13787);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e13834){var ex__11798__auto__ = e13834;
var statearr_13835_15218 = state_13787;
(statearr_13835_15218[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_13787[(4)]))){
var statearr_13836_15219 = state_13787;
(statearr_13836_15219[(1)] = cljs.core.first((state_13787[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15220 = state_13787;
state_13787 = G__15220;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$state_machine__11795__auto__ = function(state_13787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11795__auto____1.call(this,state_13787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11795__auto____0;
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11795__auto____1;
return cljs$core$async$state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_13837 = f__12245__auto__();
(statearr_13837[(6)] = c__12244__auto___15202);

return statearr_13837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
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
var G__13839 = arguments.length;
switch (G__13839) {
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
var c__12244__auto___15222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_13863){
var state_val_13864 = (state_13863[(1)]);
if((state_val_13864 === (7))){
var inst_13845 = (state_13863[(7)]);
var inst_13845__$1 = (state_13863[(2)]);
var inst_13846 = (inst_13845__$1 == null);
var inst_13847 = cljs.core.not(inst_13846);
var state_13863__$1 = (function (){var statearr_13865 = state_13863;
(statearr_13865[(7)] = inst_13845__$1);

return statearr_13865;
})();
if(inst_13847){
var statearr_13866_15223 = state_13863__$1;
(statearr_13866_15223[(1)] = (8));

} else {
var statearr_13867_15224 = state_13863__$1;
(statearr_13867_15224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13864 === (1))){
var inst_13840 = (0);
var state_13863__$1 = (function (){var statearr_13868 = state_13863;
(statearr_13868[(8)] = inst_13840);

return statearr_13868;
})();
var statearr_13869_15226 = state_13863__$1;
(statearr_13869_15226[(2)] = null);

(statearr_13869_15226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13864 === (4))){
var state_13863__$1 = state_13863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13863__$1,(7),ch);
} else {
if((state_val_13864 === (6))){
var inst_13858 = (state_13863[(2)]);
var state_13863__$1 = state_13863;
var statearr_13872_15228 = state_13863__$1;
(statearr_13872_15228[(2)] = inst_13858);

(statearr_13872_15228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13864 === (3))){
var inst_13860 = (state_13863[(2)]);
var inst_13861 = cljs.core.async.close_BANG_(out);
var state_13863__$1 = (function (){var statearr_13873 = state_13863;
(statearr_13873[(9)] = inst_13860);

return statearr_13873;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13863__$1,inst_13861);
} else {
if((state_val_13864 === (2))){
var inst_13840 = (state_13863[(8)]);
var inst_13842 = (inst_13840 < n);
var state_13863__$1 = state_13863;
if(cljs.core.truth_(inst_13842)){
var statearr_13874_15232 = state_13863__$1;
(statearr_13874_15232[(1)] = (4));

} else {
var statearr_13875_15233 = state_13863__$1;
(statearr_13875_15233[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13864 === (11))){
var inst_13840 = (state_13863[(8)]);
var inst_13850 = (state_13863[(2)]);
var inst_13851 = (inst_13840 + (1));
var inst_13840__$1 = inst_13851;
var state_13863__$1 = (function (){var statearr_13877 = state_13863;
(statearr_13877[(10)] = inst_13850);

(statearr_13877[(8)] = inst_13840__$1);

return statearr_13877;
})();
var statearr_13888_15238 = state_13863__$1;
(statearr_13888_15238[(2)] = null);

(statearr_13888_15238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13864 === (9))){
var state_13863__$1 = state_13863;
var statearr_13889_15241 = state_13863__$1;
(statearr_13889_15241[(2)] = null);

(statearr_13889_15241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13864 === (5))){
var state_13863__$1 = state_13863;
var statearr_13890_15242 = state_13863__$1;
(statearr_13890_15242[(2)] = null);

(statearr_13890_15242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13864 === (10))){
var inst_13855 = (state_13863[(2)]);
var state_13863__$1 = state_13863;
var statearr_13891_15243 = state_13863__$1;
(statearr_13891_15243[(2)] = inst_13855);

(statearr_13891_15243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13864 === (8))){
var inst_13845 = (state_13863[(7)]);
var state_13863__$1 = state_13863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13863__$1,(11),out,inst_13845);
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
var cljs$core$async$state_machine__11795__auto__ = null;
var cljs$core$async$state_machine__11795__auto____0 = (function (){
var statearr_13893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13893[(0)] = cljs$core$async$state_machine__11795__auto__);

(statearr_13893[(1)] = (1));

return statearr_13893;
});
var cljs$core$async$state_machine__11795__auto____1 = (function (state_13863){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_13863);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e13894){var ex__11798__auto__ = e13894;
var statearr_13895_15245 = state_13863;
(statearr_13895_15245[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_13863[(4)]))){
var statearr_13897_15246 = state_13863;
(statearr_13897_15246[(1)] = cljs.core.first((state_13863[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15247 = state_13863;
state_13863 = G__15247;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$state_machine__11795__auto__ = function(state_13863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11795__auto____1.call(this,state_13863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11795__auto____0;
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11795__auto____1;
return cljs$core$async$state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_13898 = f__12245__auto__();
(statearr_13898[(6)] = c__12244__auto___15222);

return statearr_13898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13903 = (function (f,ch,meta13901,_,fn1,meta13904){
this.f = f;
this.ch = ch;
this.meta13901 = meta13901;
this._ = _;
this.fn1 = fn1;
this.meta13904 = meta13904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13905,meta13904__$1){
var self__ = this;
var _13905__$1 = this;
return (new cljs.core.async.t_cljs$core$async13903(self__.f,self__.ch,self__.meta13901,self__._,self__.fn1,meta13904__$1));
}));

(cljs.core.async.t_cljs$core$async13903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13905){
var self__ = this;
var _13905__$1 = this;
return self__.meta13904;
}));

(cljs.core.async.t_cljs$core$async13903.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13903.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__13899_SHARP_){
var G__13908 = (((p1__13899_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13899_SHARP_) : self__.f.call(null,p1__13899_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13908) : f1.call(null,G__13908));
});
}));

(cljs.core.async.t_cljs$core$async13903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13901","meta13901",-1324571477,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13900","cljs.core.async/t_cljs$core$async13900",-1484014508,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13904","meta13904",-1757828444,null)], null);
}));

(cljs.core.async.t_cljs$core$async13903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13903");

(cljs.core.async.t_cljs$core$async13903.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13903.
 */
cljs.core.async.__GT_t_cljs$core$async13903 = (function cljs$core$async$__GT_t_cljs$core$async13903(f,ch,meta13901,_,fn1,meta13904){
return (new cljs.core.async.t_cljs$core$async13903(f,ch,meta13901,_,fn1,meta13904));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13900 = (function (f,ch,meta13901){
this.f = f;
this.ch = ch;
this.meta13901 = meta13901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13902,meta13901__$1){
var self__ = this;
var _13902__$1 = this;
return (new cljs.core.async.t_cljs$core$async13900(self__.f,self__.ch,meta13901__$1));
}));

(cljs.core.async.t_cljs$core$async13900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13902){
var self__ = this;
var _13902__$1 = this;
return self__.meta13901;
}));

(cljs.core.async.t_cljs$core$async13900.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13900.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13900.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async13903(self__.f,self__.ch,self__.meta13901,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13910 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13910) : self__.f.call(null,G__13910));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13900.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13901","meta13901",-1324571477,null)], null);
}));

(cljs.core.async.t_cljs$core$async13900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13900");

(cljs.core.async.t_cljs$core$async13900.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13900.
 */
cljs.core.async.__GT_t_cljs$core$async13900 = (function cljs$core$async$__GT_t_cljs$core$async13900(f,ch,meta13901){
return (new cljs.core.async.t_cljs$core$async13900(f,ch,meta13901));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async13900(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13920 = (function (f,ch,meta13921){
this.f = f;
this.ch = ch;
this.meta13921 = meta13921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13922,meta13921__$1){
var self__ = this;
var _13922__$1 = this;
return (new cljs.core.async.t_cljs$core$async13920(self__.f,self__.ch,meta13921__$1));
}));

(cljs.core.async.t_cljs$core$async13920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13922){
var self__ = this;
var _13922__$1 = this;
return self__.meta13921;
}));

(cljs.core.async.t_cljs$core$async13920.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13920.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13920.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async13920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13921","meta13921",2085478873,null)], null);
}));

(cljs.core.async.t_cljs$core$async13920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13920");

(cljs.core.async.t_cljs$core$async13920.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13920.
 */
cljs.core.async.__GT_t_cljs$core$async13920 = (function cljs$core$async$__GT_t_cljs$core$async13920(f,ch,meta13921){
return (new cljs.core.async.t_cljs$core$async13920(f,ch,meta13921));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async13920(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13924 = (function (p,ch,meta13925){
this.p = p;
this.ch = ch;
this.meta13925 = meta13925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13926,meta13925__$1){
var self__ = this;
var _13926__$1 = this;
return (new cljs.core.async.t_cljs$core$async13924(self__.p,self__.ch,meta13925__$1));
}));

(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13926){
var self__ = this;
var _13926__$1 = this;
return self__.meta13925;
}));

(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13925","meta13925",1473318438,null)], null);
}));

(cljs.core.async.t_cljs$core$async13924.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13924");

(cljs.core.async.t_cljs$core$async13924.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13924");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13924.
 */
cljs.core.async.__GT_t_cljs$core$async13924 = (function cljs$core$async$__GT_t_cljs$core$async13924(p,ch,meta13925){
return (new cljs.core.async.t_cljs$core$async13924(p,ch,meta13925));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async13924(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13932 = arguments.length;
switch (G__13932) {
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
var c__12244__auto___15259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_13961){
var state_val_13962 = (state_13961[(1)]);
if((state_val_13962 === (7))){
var inst_13957 = (state_13961[(2)]);
var state_13961__$1 = state_13961;
var statearr_13972_15260 = state_13961__$1;
(statearr_13972_15260[(2)] = inst_13957);

(statearr_13972_15260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (1))){
var state_13961__$1 = state_13961;
var statearr_13973_15261 = state_13961__$1;
(statearr_13973_15261[(2)] = null);

(statearr_13973_15261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (4))){
var inst_13943 = (state_13961[(7)]);
var inst_13943__$1 = (state_13961[(2)]);
var inst_13944 = (inst_13943__$1 == null);
var state_13961__$1 = (function (){var statearr_13978 = state_13961;
(statearr_13978[(7)] = inst_13943__$1);

return statearr_13978;
})();
if(cljs.core.truth_(inst_13944)){
var statearr_13979_15262 = state_13961__$1;
(statearr_13979_15262[(1)] = (5));

} else {
var statearr_13980_15263 = state_13961__$1;
(statearr_13980_15263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (6))){
var inst_13943 = (state_13961[(7)]);
var inst_13948 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13943) : p.call(null,inst_13943));
var state_13961__$1 = state_13961;
if(cljs.core.truth_(inst_13948)){
var statearr_13981_15264 = state_13961__$1;
(statearr_13981_15264[(1)] = (8));

} else {
var statearr_13982_15265 = state_13961__$1;
(statearr_13982_15265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (3))){
var inst_13959 = (state_13961[(2)]);
var state_13961__$1 = state_13961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13961__$1,inst_13959);
} else {
if((state_val_13962 === (2))){
var state_13961__$1 = state_13961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13961__$1,(4),ch);
} else {
if((state_val_13962 === (11))){
var inst_13951 = (state_13961[(2)]);
var state_13961__$1 = state_13961;
var statearr_13990_15266 = state_13961__$1;
(statearr_13990_15266[(2)] = inst_13951);

(statearr_13990_15266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (9))){
var state_13961__$1 = state_13961;
var statearr_13991_15267 = state_13961__$1;
(statearr_13991_15267[(2)] = null);

(statearr_13991_15267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (5))){
var inst_13946 = cljs.core.async.close_BANG_(out);
var state_13961__$1 = state_13961;
var statearr_13993_15270 = state_13961__$1;
(statearr_13993_15270[(2)] = inst_13946);

(statearr_13993_15270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (10))){
var inst_13954 = (state_13961[(2)]);
var state_13961__$1 = (function (){var statearr_13994 = state_13961;
(statearr_13994[(8)] = inst_13954);

return statearr_13994;
})();
var statearr_13995_15271 = state_13961__$1;
(statearr_13995_15271[(2)] = null);

(statearr_13995_15271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (8))){
var inst_13943 = (state_13961[(7)]);
var state_13961__$1 = state_13961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13961__$1,(11),out,inst_13943);
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
var cljs$core$async$state_machine__11795__auto__ = null;
var cljs$core$async$state_machine__11795__auto____0 = (function (){
var statearr_13998 = [null,null,null,null,null,null,null,null,null];
(statearr_13998[(0)] = cljs$core$async$state_machine__11795__auto__);

(statearr_13998[(1)] = (1));

return statearr_13998;
});
var cljs$core$async$state_machine__11795__auto____1 = (function (state_13961){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_13961);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e13999){var ex__11798__auto__ = e13999;
var statearr_14000_15274 = state_13961;
(statearr_14000_15274[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_13961[(4)]))){
var statearr_14004_15275 = state_13961;
(statearr_14004_15275[(1)] = cljs.core.first((state_13961[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15282 = state_13961;
state_13961 = G__15282;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$state_machine__11795__auto__ = function(state_13961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11795__auto____1.call(this,state_13961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11795__auto____0;
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11795__auto____1;
return cljs$core$async$state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_14007 = f__12245__auto__();
(statearr_14007[(6)] = c__12244__auto___15259);

return statearr_14007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14010 = arguments.length;
switch (G__14010) {
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
var c__12244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_14077){
var state_val_14078 = (state_14077[(1)]);
if((state_val_14078 === (7))){
var inst_14073 = (state_14077[(2)]);
var state_14077__$1 = state_14077;
var statearr_14086_15288 = state_14077__$1;
(statearr_14086_15288[(2)] = inst_14073);

(statearr_14086_15288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (20))){
var inst_14042 = (state_14077[(7)]);
var inst_14054 = (state_14077[(2)]);
var inst_14055 = cljs.core.next(inst_14042);
var inst_14028 = inst_14055;
var inst_14029 = null;
var inst_14030 = (0);
var inst_14031 = (0);
var state_14077__$1 = (function (){var statearr_14088 = state_14077;
(statearr_14088[(8)] = inst_14028);

(statearr_14088[(9)] = inst_14031);

(statearr_14088[(10)] = inst_14054);

(statearr_14088[(11)] = inst_14030);

(statearr_14088[(12)] = inst_14029);

return statearr_14088;
})();
var statearr_14089_15290 = state_14077__$1;
(statearr_14089_15290[(2)] = null);

(statearr_14089_15290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (1))){
var state_14077__$1 = state_14077;
var statearr_14090_15291 = state_14077__$1;
(statearr_14090_15291[(2)] = null);

(statearr_14090_15291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (4))){
var inst_14017 = (state_14077[(13)]);
var inst_14017__$1 = (state_14077[(2)]);
var inst_14018 = (inst_14017__$1 == null);
var state_14077__$1 = (function (){var statearr_14091 = state_14077;
(statearr_14091[(13)] = inst_14017__$1);

return statearr_14091;
})();
if(cljs.core.truth_(inst_14018)){
var statearr_14092_15294 = state_14077__$1;
(statearr_14092_15294[(1)] = (5));

} else {
var statearr_14093_15295 = state_14077__$1;
(statearr_14093_15295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (15))){
var state_14077__$1 = state_14077;
var statearr_14099_15296 = state_14077__$1;
(statearr_14099_15296[(2)] = null);

(statearr_14099_15296[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (21))){
var state_14077__$1 = state_14077;
var statearr_14100_15297 = state_14077__$1;
(statearr_14100_15297[(2)] = null);

(statearr_14100_15297[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (13))){
var inst_14028 = (state_14077[(8)]);
var inst_14031 = (state_14077[(9)]);
var inst_14030 = (state_14077[(11)]);
var inst_14029 = (state_14077[(12)]);
var inst_14038 = (state_14077[(2)]);
var inst_14039 = (inst_14031 + (1));
var tmp14096 = inst_14028;
var tmp14097 = inst_14030;
var tmp14098 = inst_14029;
var inst_14028__$1 = tmp14096;
var inst_14029__$1 = tmp14098;
var inst_14030__$1 = tmp14097;
var inst_14031__$1 = inst_14039;
var state_14077__$1 = (function (){var statearr_14103 = state_14077;
(statearr_14103[(14)] = inst_14038);

(statearr_14103[(8)] = inst_14028__$1);

(statearr_14103[(9)] = inst_14031__$1);

(statearr_14103[(11)] = inst_14030__$1);

(statearr_14103[(12)] = inst_14029__$1);

return statearr_14103;
})();
var statearr_14104_15298 = state_14077__$1;
(statearr_14104_15298[(2)] = null);

(statearr_14104_15298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (22))){
var state_14077__$1 = state_14077;
var statearr_14105_15303 = state_14077__$1;
(statearr_14105_15303[(2)] = null);

(statearr_14105_15303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (6))){
var inst_14017 = (state_14077[(13)]);
var inst_14026 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14017) : f.call(null,inst_14017));
var inst_14027 = cljs.core.seq(inst_14026);
var inst_14028 = inst_14027;
var inst_14029 = null;
var inst_14030 = (0);
var inst_14031 = (0);
var state_14077__$1 = (function (){var statearr_14106 = state_14077;
(statearr_14106[(8)] = inst_14028);

(statearr_14106[(9)] = inst_14031);

(statearr_14106[(11)] = inst_14030);

(statearr_14106[(12)] = inst_14029);

return statearr_14106;
})();
var statearr_14108_15307 = state_14077__$1;
(statearr_14108_15307[(2)] = null);

(statearr_14108_15307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (17))){
var inst_14042 = (state_14077[(7)]);
var inst_14046 = cljs.core.chunk_first(inst_14042);
var inst_14047 = cljs.core.chunk_rest(inst_14042);
var inst_14049 = cljs.core.count(inst_14046);
var inst_14028 = inst_14047;
var inst_14029 = inst_14046;
var inst_14030 = inst_14049;
var inst_14031 = (0);
var state_14077__$1 = (function (){var statearr_14109 = state_14077;
(statearr_14109[(8)] = inst_14028);

(statearr_14109[(9)] = inst_14031);

(statearr_14109[(11)] = inst_14030);

(statearr_14109[(12)] = inst_14029);

return statearr_14109;
})();
var statearr_14111_15308 = state_14077__$1;
(statearr_14111_15308[(2)] = null);

(statearr_14111_15308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (3))){
var inst_14075 = (state_14077[(2)]);
var state_14077__$1 = state_14077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14077__$1,inst_14075);
} else {
if((state_val_14078 === (12))){
var inst_14063 = (state_14077[(2)]);
var state_14077__$1 = state_14077;
var statearr_14112_15312 = state_14077__$1;
(statearr_14112_15312[(2)] = inst_14063);

(statearr_14112_15312[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (2))){
var state_14077__$1 = state_14077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14077__$1,(4),in$);
} else {
if((state_val_14078 === (23))){
var inst_14071 = (state_14077[(2)]);
var state_14077__$1 = state_14077;
var statearr_14113_15314 = state_14077__$1;
(statearr_14113_15314[(2)] = inst_14071);

(statearr_14113_15314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (19))){
var inst_14058 = (state_14077[(2)]);
var state_14077__$1 = state_14077;
var statearr_14114_15318 = state_14077__$1;
(statearr_14114_15318[(2)] = inst_14058);

(statearr_14114_15318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (11))){
var inst_14028 = (state_14077[(8)]);
var inst_14042 = (state_14077[(7)]);
var inst_14042__$1 = cljs.core.seq(inst_14028);
var state_14077__$1 = (function (){var statearr_14115 = state_14077;
(statearr_14115[(7)] = inst_14042__$1);

return statearr_14115;
})();
if(inst_14042__$1){
var statearr_14116_15319 = state_14077__$1;
(statearr_14116_15319[(1)] = (14));

} else {
var statearr_14117_15320 = state_14077__$1;
(statearr_14117_15320[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (9))){
var inst_14065 = (state_14077[(2)]);
var inst_14066 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14077__$1 = (function (){var statearr_14118 = state_14077;
(statearr_14118[(15)] = inst_14065);

return statearr_14118;
})();
if(cljs.core.truth_(inst_14066)){
var statearr_14119_15325 = state_14077__$1;
(statearr_14119_15325[(1)] = (21));

} else {
var statearr_14120_15326 = state_14077__$1;
(statearr_14120_15326[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (5))){
var inst_14020 = cljs.core.async.close_BANG_(out);
var state_14077__$1 = state_14077;
var statearr_14121_15327 = state_14077__$1;
(statearr_14121_15327[(2)] = inst_14020);

(statearr_14121_15327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (14))){
var inst_14042 = (state_14077[(7)]);
var inst_14044 = cljs.core.chunked_seq_QMARK_(inst_14042);
var state_14077__$1 = state_14077;
if(inst_14044){
var statearr_14126_15328 = state_14077__$1;
(statearr_14126_15328[(1)] = (17));

} else {
var statearr_14127_15330 = state_14077__$1;
(statearr_14127_15330[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (16))){
var inst_14061 = (state_14077[(2)]);
var state_14077__$1 = state_14077;
var statearr_14128_15334 = state_14077__$1;
(statearr_14128_15334[(2)] = inst_14061);

(statearr_14128_15334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14078 === (10))){
var inst_14031 = (state_14077[(9)]);
var inst_14029 = (state_14077[(12)]);
var inst_14036 = cljs.core._nth(inst_14029,inst_14031);
var state_14077__$1 = state_14077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14077__$1,(13),out,inst_14036);
} else {
if((state_val_14078 === (18))){
var inst_14042 = (state_14077[(7)]);
var inst_14052 = cljs.core.first(inst_14042);
var state_14077__$1 = state_14077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14077__$1,(20),out,inst_14052);
} else {
if((state_val_14078 === (8))){
var inst_14031 = (state_14077[(9)]);
var inst_14030 = (state_14077[(11)]);
var inst_14033 = (inst_14031 < inst_14030);
var inst_14034 = inst_14033;
var state_14077__$1 = state_14077;
if(cljs.core.truth_(inst_14034)){
var statearr_14130_15337 = state_14077__$1;
(statearr_14130_15337[(1)] = (10));

} else {
var statearr_14131_15338 = state_14077__$1;
(statearr_14131_15338[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__11795__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11795__auto____0 = (function (){
var statearr_14138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14138[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11795__auto__);

(statearr_14138[(1)] = (1));

return statearr_14138;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11795__auto____1 = (function (state_14077){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_14077);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e14139){var ex__11798__auto__ = e14139;
var statearr_14140_15341 = state_14077;
(statearr_14140_15341[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_14077[(4)]))){
var statearr_14144_15342 = state_14077;
(statearr_14144_15342[(1)] = cljs.core.first((state_14077[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15343 = state_14077;
state_14077 = G__15343;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11795__auto__ = function(state_14077){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11795__auto____1.call(this,state_14077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11795__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11795__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_14145 = f__12245__auto__();
(statearr_14145[(6)] = c__12244__auto__);

return statearr_14145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
}));

return c__12244__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14151 = arguments.length;
switch (G__14151) {
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
var G__14165 = arguments.length;
switch (G__14165) {
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
var G__14168 = arguments.length;
switch (G__14168) {
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
var c__12244__auto___15353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_14198){
var state_val_14199 = (state_14198[(1)]);
if((state_val_14199 === (7))){
var inst_14193 = (state_14198[(2)]);
var state_14198__$1 = state_14198;
var statearr_14205_15354 = state_14198__$1;
(statearr_14205_15354[(2)] = inst_14193);

(statearr_14205_15354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (1))){
var inst_14170 = null;
var state_14198__$1 = (function (){var statearr_14206 = state_14198;
(statearr_14206[(7)] = inst_14170);

return statearr_14206;
})();
var statearr_14207_15357 = state_14198__$1;
(statearr_14207_15357[(2)] = null);

(statearr_14207_15357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (4))){
var inst_14173 = (state_14198[(8)]);
var inst_14173__$1 = (state_14198[(2)]);
var inst_14174 = (inst_14173__$1 == null);
var inst_14175 = cljs.core.not(inst_14174);
var state_14198__$1 = (function (){var statearr_14208 = state_14198;
(statearr_14208[(8)] = inst_14173__$1);

return statearr_14208;
})();
if(inst_14175){
var statearr_14209_15360 = state_14198__$1;
(statearr_14209_15360[(1)] = (5));

} else {
var statearr_14210_15361 = state_14198__$1;
(statearr_14210_15361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (6))){
var state_14198__$1 = state_14198;
var statearr_14212_15362 = state_14198__$1;
(statearr_14212_15362[(2)] = null);

(statearr_14212_15362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (3))){
var inst_14195 = (state_14198[(2)]);
var inst_14196 = cljs.core.async.close_BANG_(out);
var state_14198__$1 = (function (){var statearr_14213 = state_14198;
(statearr_14213[(9)] = inst_14195);

return statearr_14213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14198__$1,inst_14196);
} else {
if((state_val_14199 === (2))){
var state_14198__$1 = state_14198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14198__$1,(4),ch);
} else {
if((state_val_14199 === (11))){
var inst_14173 = (state_14198[(8)]);
var inst_14187 = (state_14198[(2)]);
var inst_14170 = inst_14173;
var state_14198__$1 = (function (){var statearr_14215 = state_14198;
(statearr_14215[(7)] = inst_14170);

(statearr_14215[(10)] = inst_14187);

return statearr_14215;
})();
var statearr_14216_15365 = state_14198__$1;
(statearr_14216_15365[(2)] = null);

(statearr_14216_15365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (9))){
var inst_14173 = (state_14198[(8)]);
var state_14198__$1 = state_14198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14198__$1,(11),out,inst_14173);
} else {
if((state_val_14199 === (5))){
var inst_14170 = (state_14198[(7)]);
var inst_14173 = (state_14198[(8)]);
var inst_14177 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14173,inst_14170);
var state_14198__$1 = state_14198;
if(inst_14177){
var statearr_14223_15366 = state_14198__$1;
(statearr_14223_15366[(1)] = (8));

} else {
var statearr_14224_15367 = state_14198__$1;
(statearr_14224_15367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (10))){
var inst_14190 = (state_14198[(2)]);
var state_14198__$1 = state_14198;
var statearr_14225_15368 = state_14198__$1;
(statearr_14225_15368[(2)] = inst_14190);

(statearr_14225_15368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (8))){
var inst_14170 = (state_14198[(7)]);
var tmp14222 = inst_14170;
var inst_14170__$1 = tmp14222;
var state_14198__$1 = (function (){var statearr_14226 = state_14198;
(statearr_14226[(7)] = inst_14170__$1);

return statearr_14226;
})();
var statearr_14227_15371 = state_14198__$1;
(statearr_14227_15371[(2)] = null);

(statearr_14227_15371[(1)] = (2));


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
var cljs$core$async$state_machine__11795__auto__ = null;
var cljs$core$async$state_machine__11795__auto____0 = (function (){
var statearr_14228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14228[(0)] = cljs$core$async$state_machine__11795__auto__);

(statearr_14228[(1)] = (1));

return statearr_14228;
});
var cljs$core$async$state_machine__11795__auto____1 = (function (state_14198){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_14198);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e14229){var ex__11798__auto__ = e14229;
var statearr_14230_15375 = state_14198;
(statearr_14230_15375[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_14198[(4)]))){
var statearr_14231_15377 = state_14198;
(statearr_14231_15377[(1)] = cljs.core.first((state_14198[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15378 = state_14198;
state_14198 = G__15378;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$state_machine__11795__auto__ = function(state_14198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11795__auto____1.call(this,state_14198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11795__auto____0;
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11795__auto____1;
return cljs$core$async$state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_14233 = f__12245__auto__();
(statearr_14233[(6)] = c__12244__auto___15353);

return statearr_14233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14238 = arguments.length;
switch (G__14238) {
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
var c__12244__auto___15384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_14286){
var state_val_14287 = (state_14286[(1)]);
if((state_val_14287 === (7))){
var inst_14282 = (state_14286[(2)]);
var state_14286__$1 = state_14286;
var statearr_14288_15386 = state_14286__$1;
(statearr_14288_15386[(2)] = inst_14282);

(statearr_14288_15386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14287 === (1))){
var inst_14246 = (new Array(n));
var inst_14247 = inst_14246;
var inst_14248 = (0);
var state_14286__$1 = (function (){var statearr_14289 = state_14286;
(statearr_14289[(7)] = inst_14248);

(statearr_14289[(8)] = inst_14247);

return statearr_14289;
})();
var statearr_14290_15388 = state_14286__$1;
(statearr_14290_15388[(2)] = null);

(statearr_14290_15388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14287 === (4))){
var inst_14254 = (state_14286[(9)]);
var inst_14254__$1 = (state_14286[(2)]);
var inst_14255 = (inst_14254__$1 == null);
var inst_14256 = cljs.core.not(inst_14255);
var state_14286__$1 = (function (){var statearr_14294 = state_14286;
(statearr_14294[(9)] = inst_14254__$1);

return statearr_14294;
})();
if(inst_14256){
var statearr_14295_15391 = state_14286__$1;
(statearr_14295_15391[(1)] = (5));

} else {
var statearr_14296_15392 = state_14286__$1;
(statearr_14296_15392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14287 === (15))){
var inst_14276 = (state_14286[(2)]);
var state_14286__$1 = state_14286;
var statearr_14297_15394 = state_14286__$1;
(statearr_14297_15394[(2)] = inst_14276);

(statearr_14297_15394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14287 === (13))){
var state_14286__$1 = state_14286;
var statearr_14298_15400 = state_14286__$1;
(statearr_14298_15400[(2)] = null);

(statearr_14298_15400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14287 === (6))){
var inst_14248 = (state_14286[(7)]);
var inst_14272 = (inst_14248 > (0));
var state_14286__$1 = state_14286;
if(cljs.core.truth_(inst_14272)){
var statearr_14299_15405 = state_14286__$1;
(statearr_14299_15405[(1)] = (12));

} else {
var statearr_14300_15406 = state_14286__$1;
(statearr_14300_15406[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14287 === (3))){
var inst_14284 = (state_14286[(2)]);
var state_14286__$1 = state_14286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14286__$1,inst_14284);
} else {
if((state_val_14287 === (12))){
var inst_14247 = (state_14286[(8)]);
var inst_14274 = cljs.core.vec(inst_14247);
var state_14286__$1 = state_14286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14286__$1,(15),out,inst_14274);
} else {
if((state_val_14287 === (2))){
var state_14286__$1 = state_14286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14286__$1,(4),ch);
} else {
if((state_val_14287 === (11))){
var inst_14266 = (state_14286[(2)]);
var inst_14267 = (new Array(n));
var inst_14247 = inst_14267;
var inst_14248 = (0);
var state_14286__$1 = (function (){var statearr_14301 = state_14286;
(statearr_14301[(10)] = inst_14266);

(statearr_14301[(7)] = inst_14248);

(statearr_14301[(8)] = inst_14247);

return statearr_14301;
})();
var statearr_14302_15408 = state_14286__$1;
(statearr_14302_15408[(2)] = null);

(statearr_14302_15408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14287 === (9))){
var inst_14247 = (state_14286[(8)]);
var inst_14264 = cljs.core.vec(inst_14247);
var state_14286__$1 = state_14286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14286__$1,(11),out,inst_14264);
} else {
if((state_val_14287 === (5))){
var inst_14248 = (state_14286[(7)]);
var inst_14259 = (state_14286[(11)]);
var inst_14247 = (state_14286[(8)]);
var inst_14254 = (state_14286[(9)]);
var inst_14258 = (inst_14247[inst_14248] = inst_14254);
var inst_14259__$1 = (inst_14248 + (1));
var inst_14260 = (inst_14259__$1 < n);
var state_14286__$1 = (function (){var statearr_14303 = state_14286;
(statearr_14303[(12)] = inst_14258);

(statearr_14303[(11)] = inst_14259__$1);

return statearr_14303;
})();
if(cljs.core.truth_(inst_14260)){
var statearr_14304_15409 = state_14286__$1;
(statearr_14304_15409[(1)] = (8));

} else {
var statearr_14305_15410 = state_14286__$1;
(statearr_14305_15410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14287 === (14))){
var inst_14279 = (state_14286[(2)]);
var inst_14280 = cljs.core.async.close_BANG_(out);
var state_14286__$1 = (function (){var statearr_14307 = state_14286;
(statearr_14307[(13)] = inst_14279);

return statearr_14307;
})();
var statearr_14308_15412 = state_14286__$1;
(statearr_14308_15412[(2)] = inst_14280);

(statearr_14308_15412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14287 === (10))){
var inst_14270 = (state_14286[(2)]);
var state_14286__$1 = state_14286;
var statearr_14309_15413 = state_14286__$1;
(statearr_14309_15413[(2)] = inst_14270);

(statearr_14309_15413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14287 === (8))){
var inst_14259 = (state_14286[(11)]);
var inst_14247 = (state_14286[(8)]);
var tmp14306 = inst_14247;
var inst_14247__$1 = tmp14306;
var inst_14248 = inst_14259;
var state_14286__$1 = (function (){var statearr_14310 = state_14286;
(statearr_14310[(7)] = inst_14248);

(statearr_14310[(8)] = inst_14247__$1);

return statearr_14310;
})();
var statearr_14311_15414 = state_14286__$1;
(statearr_14311_15414[(2)] = null);

(statearr_14311_15414[(1)] = (2));


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
var cljs$core$async$state_machine__11795__auto__ = null;
var cljs$core$async$state_machine__11795__auto____0 = (function (){
var statearr_14312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14312[(0)] = cljs$core$async$state_machine__11795__auto__);

(statearr_14312[(1)] = (1));

return statearr_14312;
});
var cljs$core$async$state_machine__11795__auto____1 = (function (state_14286){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_14286);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e14313){var ex__11798__auto__ = e14313;
var statearr_14314_15422 = state_14286;
(statearr_14314_15422[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_14286[(4)]))){
var statearr_14315_15423 = state_14286;
(statearr_14315_15423[(1)] = cljs.core.first((state_14286[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15424 = state_14286;
state_14286 = G__15424;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$state_machine__11795__auto__ = function(state_14286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11795__auto____1.call(this,state_14286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11795__auto____0;
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11795__auto____1;
return cljs$core$async$state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_14316 = f__12245__auto__();
(statearr_14316[(6)] = c__12244__auto___15384);

return statearr_14316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14318 = arguments.length;
switch (G__14318) {
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
var c__12244__auto___15426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_14367){
var state_val_14368 = (state_14367[(1)]);
if((state_val_14368 === (7))){
var inst_14363 = (state_14367[(2)]);
var state_14367__$1 = state_14367;
var statearr_14369_15427 = state_14367__$1;
(statearr_14369_15427[(2)] = inst_14363);

(statearr_14369_15427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14368 === (1))){
var inst_14320 = [];
var inst_14321 = inst_14320;
var inst_14322 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14367__$1 = (function (){var statearr_14370 = state_14367;
(statearr_14370[(7)] = inst_14322);

(statearr_14370[(8)] = inst_14321);

return statearr_14370;
})();
var statearr_14374_15428 = state_14367__$1;
(statearr_14374_15428[(2)] = null);

(statearr_14374_15428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14368 === (4))){
var inst_14325 = (state_14367[(9)]);
var inst_14325__$1 = (state_14367[(2)]);
var inst_14326 = (inst_14325__$1 == null);
var inst_14327 = cljs.core.not(inst_14326);
var state_14367__$1 = (function (){var statearr_14375 = state_14367;
(statearr_14375[(9)] = inst_14325__$1);

return statearr_14375;
})();
if(inst_14327){
var statearr_14376_15429 = state_14367__$1;
(statearr_14376_15429[(1)] = (5));

} else {
var statearr_14377_15430 = state_14367__$1;
(statearr_14377_15430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14368 === (15))){
var inst_14321 = (state_14367[(8)]);
var inst_14355 = cljs.core.vec(inst_14321);
var state_14367__$1 = state_14367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14367__$1,(18),out,inst_14355);
} else {
if((state_val_14368 === (13))){
var inst_14347 = (state_14367[(2)]);
var state_14367__$1 = state_14367;
var statearr_14378_15431 = state_14367__$1;
(statearr_14378_15431[(2)] = inst_14347);

(statearr_14378_15431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14368 === (6))){
var inst_14321 = (state_14367[(8)]);
var inst_14352 = inst_14321.length;
var inst_14353 = (inst_14352 > (0));
var state_14367__$1 = state_14367;
if(cljs.core.truth_(inst_14353)){
var statearr_14379_15432 = state_14367__$1;
(statearr_14379_15432[(1)] = (15));

} else {
var statearr_14380_15433 = state_14367__$1;
(statearr_14380_15433[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14368 === (17))){
var inst_14360 = (state_14367[(2)]);
var inst_14361 = cljs.core.async.close_BANG_(out);
var state_14367__$1 = (function (){var statearr_14381 = state_14367;
(statearr_14381[(10)] = inst_14360);

return statearr_14381;
})();
var statearr_14382_15434 = state_14367__$1;
(statearr_14382_15434[(2)] = inst_14361);

(statearr_14382_15434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14368 === (3))){
var inst_14365 = (state_14367[(2)]);
var state_14367__$1 = state_14367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14367__$1,inst_14365);
} else {
if((state_val_14368 === (12))){
var inst_14321 = (state_14367[(8)]);
var inst_14340 = cljs.core.vec(inst_14321);
var state_14367__$1 = state_14367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14367__$1,(14),out,inst_14340);
} else {
if((state_val_14368 === (2))){
var state_14367__$1 = state_14367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14367__$1,(4),ch);
} else {
if((state_val_14368 === (11))){
var inst_14325 = (state_14367[(9)]);
var inst_14321 = (state_14367[(8)]);
var inst_14329 = (state_14367[(11)]);
var inst_14337 = inst_14321.push(inst_14325);
var tmp14383 = inst_14321;
var inst_14321__$1 = tmp14383;
var inst_14322 = inst_14329;
var state_14367__$1 = (function (){var statearr_14384 = state_14367;
(statearr_14384[(7)] = inst_14322);

(statearr_14384[(8)] = inst_14321__$1);

(statearr_14384[(12)] = inst_14337);

return statearr_14384;
})();
var statearr_14385_15437 = state_14367__$1;
(statearr_14385_15437[(2)] = null);

(statearr_14385_15437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14368 === (9))){
var inst_14322 = (state_14367[(7)]);
var inst_14333 = cljs.core.keyword_identical_QMARK_(inst_14322,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_14367__$1 = state_14367;
var statearr_14386_15438 = state_14367__$1;
(statearr_14386_15438[(2)] = inst_14333);

(statearr_14386_15438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14368 === (5))){
var inst_14330 = (state_14367[(13)]);
var inst_14325 = (state_14367[(9)]);
var inst_14322 = (state_14367[(7)]);
var inst_14329 = (state_14367[(11)]);
var inst_14329__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14325) : f.call(null,inst_14325));
var inst_14330__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14329__$1,inst_14322);
var state_14367__$1 = (function (){var statearr_14388 = state_14367;
(statearr_14388[(13)] = inst_14330__$1);

(statearr_14388[(11)] = inst_14329__$1);

return statearr_14388;
})();
if(inst_14330__$1){
var statearr_14389_15444 = state_14367__$1;
(statearr_14389_15444[(1)] = (8));

} else {
var statearr_14390_15445 = state_14367__$1;
(statearr_14390_15445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14368 === (14))){
var inst_14325 = (state_14367[(9)]);
var inst_14329 = (state_14367[(11)]);
var inst_14342 = (state_14367[(2)]);
var inst_14343 = [];
var inst_14344 = inst_14343.push(inst_14325);
var inst_14321 = inst_14343;
var inst_14322 = inst_14329;
var state_14367__$1 = (function (){var statearr_14391 = state_14367;
(statearr_14391[(7)] = inst_14322);

(statearr_14391[(8)] = inst_14321);

(statearr_14391[(14)] = inst_14342);

(statearr_14391[(15)] = inst_14344);

return statearr_14391;
})();
var statearr_14392_15447 = state_14367__$1;
(statearr_14392_15447[(2)] = null);

(statearr_14392_15447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14368 === (16))){
var state_14367__$1 = state_14367;
var statearr_14393_15448 = state_14367__$1;
(statearr_14393_15448[(2)] = null);

(statearr_14393_15448[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14368 === (10))){
var inst_14335 = (state_14367[(2)]);
var state_14367__$1 = state_14367;
if(cljs.core.truth_(inst_14335)){
var statearr_14394_15450 = state_14367__$1;
(statearr_14394_15450[(1)] = (11));

} else {
var statearr_14395_15451 = state_14367__$1;
(statearr_14395_15451[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14368 === (18))){
var inst_14357 = (state_14367[(2)]);
var state_14367__$1 = state_14367;
var statearr_14396_15452 = state_14367__$1;
(statearr_14396_15452[(2)] = inst_14357);

(statearr_14396_15452[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14368 === (8))){
var inst_14330 = (state_14367[(13)]);
var state_14367__$1 = state_14367;
var statearr_14397_15453 = state_14367__$1;
(statearr_14397_15453[(2)] = inst_14330);

(statearr_14397_15453[(1)] = (10));


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
var cljs$core$async$state_machine__11795__auto__ = null;
var cljs$core$async$state_machine__11795__auto____0 = (function (){
var statearr_14402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14402[(0)] = cljs$core$async$state_machine__11795__auto__);

(statearr_14402[(1)] = (1));

return statearr_14402;
});
var cljs$core$async$state_machine__11795__auto____1 = (function (state_14367){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_14367);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e14403){var ex__11798__auto__ = e14403;
var statearr_14404_15459 = state_14367;
(statearr_14404_15459[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_14367[(4)]))){
var statearr_14405_15460 = state_14367;
(statearr_14405_15460[(1)] = cljs.core.first((state_14367[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15461 = state_14367;
state_14367 = G__15461;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
cljs$core$async$state_machine__11795__auto__ = function(state_14367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11795__auto____1.call(this,state_14367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11795__auto____0;
cljs$core$async$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11795__auto____1;
return cljs$core$async$state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_14410 = f__12245__auto__();
(statearr_14410[(6)] = c__12244__auto___15426);

return statearr_14410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
