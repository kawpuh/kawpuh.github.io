goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__9542){
var map__9543 = p__9542;
var map__9543__$1 = cljs.core.__destructure_map(map__9543);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9543__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9543__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9543__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9543__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__9551_9618 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__9552_9619 = null;
var count__9553_9620 = (0);
var i__9554_9621 = (0);
while(true){
if((i__9554_9621 < count__9553_9620)){
var vec__9585_9622 = chunk__9552_9619.cljs$core$IIndexed$_nth$arity$2(null,i__9554_9621);
var k_9623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9585_9622,(0),null);
var cb_9624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9585_9622,(1),null);
try{var G__9590_9625 = cljs.core.deref(re_frame.trace.traces);
(cb_9624.cljs$core$IFn$_invoke$arity$1 ? cb_9624.cljs$core$IFn$_invoke$arity$1(G__9590_9625) : cb_9624.call(null,G__9590_9625));
}catch (e9588){var e_9626 = e9588;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_9623,"while storing",cljs.core.deref(re_frame.trace.traces),e_9626], 0));
}

var G__9627 = seq__9551_9618;
var G__9628 = chunk__9552_9619;
var G__9629 = count__9553_9620;
var G__9630 = (i__9554_9621 + (1));
seq__9551_9618 = G__9627;
chunk__9552_9619 = G__9628;
count__9553_9620 = G__9629;
i__9554_9621 = G__9630;
continue;
} else {
var temp__5804__auto___9634 = cljs.core.seq(seq__9551_9618);
if(temp__5804__auto___9634){
var seq__9551_9635__$1 = temp__5804__auto___9634;
if(cljs.core.chunked_seq_QMARK_(seq__9551_9635__$1)){
var c__5568__auto___9636 = cljs.core.chunk_first(seq__9551_9635__$1);
var G__9637 = cljs.core.chunk_rest(seq__9551_9635__$1);
var G__9638 = c__5568__auto___9636;
var G__9639 = cljs.core.count(c__5568__auto___9636);
var G__9640 = (0);
seq__9551_9618 = G__9637;
chunk__9552_9619 = G__9638;
count__9553_9620 = G__9639;
i__9554_9621 = G__9640;
continue;
} else {
var vec__9594_9641 = cljs.core.first(seq__9551_9635__$1);
var k_9642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9594_9641,(0),null);
var cb_9643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9594_9641,(1),null);
try{var G__9598_9644 = cljs.core.deref(re_frame.trace.traces);
(cb_9643.cljs$core$IFn$_invoke$arity$1 ? cb_9643.cljs$core$IFn$_invoke$arity$1(G__9598_9644) : cb_9643.call(null,G__9598_9644));
}catch (e9597){var e_9645 = e9597;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_9642,"while storing",cljs.core.deref(re_frame.trace.traces),e_9645], 0));
}

var G__9646 = cljs.core.next(seq__9551_9635__$1);
var G__9647 = null;
var G__9648 = (0);
var G__9649 = (0);
seq__9551_9618 = G__9646;
chunk__9552_9619 = G__9647;
count__9553_9620 = G__9648;
i__9554_9621 = G__9649;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
