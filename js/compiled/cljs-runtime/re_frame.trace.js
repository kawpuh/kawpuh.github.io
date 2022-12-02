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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__23990){
var map__23991 = p__23990;
var map__23991__$1 = cljs.core.__destructure_map(map__23991);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23991__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23991__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23991__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23991__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__23994_24023 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23995_24024 = null;
var count__23996_24025 = (0);
var i__23997_24026 = (0);
while(true){
if((i__23997_24026 < count__23996_24025)){
var vec__24009_24027 = chunk__23995_24024.cljs$core$IIndexed$_nth$arity$2(null,i__23997_24026);
var k_24028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24009_24027,(0),null);
var cb_24029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24009_24027,(1),null);
try{var G__24013_24030 = cljs.core.deref(re_frame.trace.traces);
(cb_24029.cljs$core$IFn$_invoke$arity$1 ? cb_24029.cljs$core$IFn$_invoke$arity$1(G__24013_24030) : cb_24029.call(null,G__24013_24030));
}catch (e24012){var e_24031 = e24012;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24028,"while storing",cljs.core.deref(re_frame.trace.traces),e_24031], 0));
}

var G__24032 = seq__23994_24023;
var G__24033 = chunk__23995_24024;
var G__24034 = count__23996_24025;
var G__24035 = (i__23997_24026 + (1));
seq__23994_24023 = G__24032;
chunk__23995_24024 = G__24033;
count__23996_24025 = G__24034;
i__23997_24026 = G__24035;
continue;
} else {
var temp__5804__auto___24036 = cljs.core.seq(seq__23994_24023);
if(temp__5804__auto___24036){
var seq__23994_24037__$1 = temp__5804__auto___24036;
if(cljs.core.chunked_seq_QMARK_(seq__23994_24037__$1)){
var c__5568__auto___24038 = cljs.core.chunk_first(seq__23994_24037__$1);
var G__24039 = cljs.core.chunk_rest(seq__23994_24037__$1);
var G__24040 = c__5568__auto___24038;
var G__24041 = cljs.core.count(c__5568__auto___24038);
var G__24042 = (0);
seq__23994_24023 = G__24039;
chunk__23995_24024 = G__24040;
count__23996_24025 = G__24041;
i__23997_24026 = G__24042;
continue;
} else {
var vec__24014_24043 = cljs.core.first(seq__23994_24037__$1);
var k_24044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24014_24043,(0),null);
var cb_24045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24014_24043,(1),null);
try{var G__24018_24046 = cljs.core.deref(re_frame.trace.traces);
(cb_24045.cljs$core$IFn$_invoke$arity$1 ? cb_24045.cljs$core$IFn$_invoke$arity$1(G__24018_24046) : cb_24045.call(null,G__24018_24046));
}catch (e24017){var e_24047 = e24017;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24044,"while storing",cljs.core.deref(re_frame.trace.traces),e_24047], 0));
}

var G__24048 = cljs.core.next(seq__23994_24037__$1);
var G__24049 = null;
var G__24050 = (0);
var G__24051 = (0);
seq__23994_24023 = G__24048;
chunk__23995_24024 = G__24049;
count__23996_24025 = G__24050;
i__23997_24026 = G__24051;
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
