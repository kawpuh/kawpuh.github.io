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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12851){
var map__12852 = p__12851;
var map__12852__$1 = cljs.core.__destructure_map(map__12852);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12852__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12852__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12852__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12852__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__12856_12886 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12857_12887 = null;
var count__12858_12888 = (0);
var i__12859_12889 = (0);
while(true){
if((i__12859_12889 < count__12858_12888)){
var vec__12871_12890 = chunk__12857_12887.cljs$core$IIndexed$_nth$arity$2(null,i__12859_12889);
var k_12891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12871_12890,(0),null);
var cb_12892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12871_12890,(1),null);
try{var G__12875_12893 = cljs.core.deref(re_frame.trace.traces);
(cb_12892.cljs$core$IFn$_invoke$arity$1 ? cb_12892.cljs$core$IFn$_invoke$arity$1(G__12875_12893) : cb_12892.call(null,G__12875_12893));
}catch (e12874){var e_12894 = e12874;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12891,"while storing",cljs.core.deref(re_frame.trace.traces),e_12894], 0));
}

var G__12895 = seq__12856_12886;
var G__12896 = chunk__12857_12887;
var G__12897 = count__12858_12888;
var G__12898 = (i__12859_12889 + (1));
seq__12856_12886 = G__12895;
chunk__12857_12887 = G__12896;
count__12858_12888 = G__12897;
i__12859_12889 = G__12898;
continue;
} else {
var temp__5804__auto___12899 = cljs.core.seq(seq__12856_12886);
if(temp__5804__auto___12899){
var seq__12856_12900__$1 = temp__5804__auto___12899;
if(cljs.core.chunked_seq_QMARK_(seq__12856_12900__$1)){
var c__5568__auto___12901 = cljs.core.chunk_first(seq__12856_12900__$1);
var G__12902 = cljs.core.chunk_rest(seq__12856_12900__$1);
var G__12903 = c__5568__auto___12901;
var G__12904 = cljs.core.count(c__5568__auto___12901);
var G__12905 = (0);
seq__12856_12886 = G__12902;
chunk__12857_12887 = G__12903;
count__12858_12888 = G__12904;
i__12859_12889 = G__12905;
continue;
} else {
var vec__12876_12906 = cljs.core.first(seq__12856_12900__$1);
var k_12907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12876_12906,(0),null);
var cb_12908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12876_12906,(1),null);
try{var G__12880_12909 = cljs.core.deref(re_frame.trace.traces);
(cb_12908.cljs$core$IFn$_invoke$arity$1 ? cb_12908.cljs$core$IFn$_invoke$arity$1(G__12880_12909) : cb_12908.call(null,G__12880_12909));
}catch (e12879){var e_12910 = e12879;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12907,"while storing",cljs.core.deref(re_frame.trace.traces),e_12910], 0));
}

var G__12911 = cljs.core.next(seq__12856_12900__$1);
var G__12912 = null;
var G__12913 = (0);
var G__12914 = (0);
seq__12856_12886 = G__12911;
chunk__12857_12887 = G__12912;
count__12858_12888 = G__12913;
i__12859_12889 = G__12914;
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
