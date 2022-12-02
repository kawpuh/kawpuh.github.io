goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24320 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24321 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24321);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24402 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24402)){
var new_db_24403 = temp__5804__auto___24402;
var fexpr__24322_24404 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24322_24404.cljs$core$IFn$_invoke$arity$1 ? fexpr__24322_24404.cljs$core$IFn$_invoke$arity$1(new_db_24403) : fexpr__24322_24404.call(null,new_db_24403));
} else {
}

var seq__24324 = cljs.core.seq(effects_without_db);
var chunk__24325 = null;
var count__24326 = (0);
var i__24327 = (0);
while(true){
if((i__24327 < count__24326)){
var vec__24337 = chunk__24325.cljs$core$IIndexed$_nth$arity$2(null,i__24327);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24337,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24337,(1),null);
var temp__5802__auto___24405 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24405)){
var effect_fn_24406 = temp__5802__auto___24405;
(effect_fn_24406.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24406.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24406.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24407 = seq__24324;
var G__24408 = chunk__24325;
var G__24409 = count__24326;
var G__24410 = (i__24327 + (1));
seq__24324 = G__24407;
chunk__24325 = G__24408;
count__24326 = G__24409;
i__24327 = G__24410;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24324);
if(temp__5804__auto__){
var seq__24324__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24324__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24324__$1);
var G__24411 = cljs.core.chunk_rest(seq__24324__$1);
var G__24412 = c__5568__auto__;
var G__24413 = cljs.core.count(c__5568__auto__);
var G__24414 = (0);
seq__24324 = G__24411;
chunk__24325 = G__24412;
count__24326 = G__24413;
i__24327 = G__24414;
continue;
} else {
var vec__24340 = cljs.core.first(seq__24324__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24340,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24340,(1),null);
var temp__5802__auto___24415 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24415)){
var effect_fn_24416 = temp__5802__auto___24415;
(effect_fn_24416.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24416.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24416.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24417 = cljs.core.next(seq__24324__$1);
var G__24418 = null;
var G__24419 = (0);
var G__24420 = (0);
seq__24324 = G__24417;
chunk__24325 = G__24418;
count__24326 = G__24419;
i__24327 = G__24420;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23968__auto___24421 = re_frame.interop.now();
var duration__23969__auto___24422 = (end__23968__auto___24421 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23969__auto___24422,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23968__auto___24421);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24320);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24423 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24423)){
var new_db_24424 = temp__5804__auto___24423;
var fexpr__24355_24425 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24355_24425.cljs$core$IFn$_invoke$arity$1 ? fexpr__24355_24425.cljs$core$IFn$_invoke$arity$1(new_db_24424) : fexpr__24355_24425.call(null,new_db_24424));
} else {
}

var seq__24356 = cljs.core.seq(effects_without_db);
var chunk__24357 = null;
var count__24358 = (0);
var i__24359 = (0);
while(true){
if((i__24359 < count__24358)){
var vec__24366 = chunk__24357.cljs$core$IIndexed$_nth$arity$2(null,i__24359);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24366,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24366,(1),null);
var temp__5802__auto___24426 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24426)){
var effect_fn_24427 = temp__5802__auto___24426;
(effect_fn_24427.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24427.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24427.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24428 = seq__24356;
var G__24429 = chunk__24357;
var G__24430 = count__24358;
var G__24431 = (i__24359 + (1));
seq__24356 = G__24428;
chunk__24357 = G__24429;
count__24358 = G__24430;
i__24359 = G__24431;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24356);
if(temp__5804__auto__){
var seq__24356__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24356__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24356__$1);
var G__24432 = cljs.core.chunk_rest(seq__24356__$1);
var G__24433 = c__5568__auto__;
var G__24434 = cljs.core.count(c__5568__auto__);
var G__24435 = (0);
seq__24356 = G__24432;
chunk__24357 = G__24433;
count__24358 = G__24434;
i__24359 = G__24435;
continue;
} else {
var vec__24369 = cljs.core.first(seq__24356__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24369,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24369,(1),null);
var temp__5802__auto___24436 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24436)){
var effect_fn_24437 = temp__5802__auto___24436;
(effect_fn_24437.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24437.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24437.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24438 = cljs.core.next(seq__24356__$1);
var G__24439 = null;
var G__24440 = (0);
var G__24441 = (0);
seq__24356 = G__24438;
chunk__24357 = G__24439;
count__24358 = G__24440;
i__24359 = G__24441;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24372){
var map__24373 = p__24372;
var map__24373__$1 = cljs.core.__destructure_map(map__24373);
var effect = map__24373__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24373__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24373__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__24374 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24375 = null;
var count__24376 = (0);
var i__24377 = (0);
while(true){
if((i__24377 < count__24376)){
var effect = chunk__24375.cljs$core$IIndexed$_nth$arity$2(null,i__24377);
re_frame.fx.dispatch_later(effect);


var G__24442 = seq__24374;
var G__24443 = chunk__24375;
var G__24444 = count__24376;
var G__24445 = (i__24377 + (1));
seq__24374 = G__24442;
chunk__24375 = G__24443;
count__24376 = G__24444;
i__24377 = G__24445;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24374);
if(temp__5804__auto__){
var seq__24374__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24374__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24374__$1);
var G__24446 = cljs.core.chunk_rest(seq__24374__$1);
var G__24447 = c__5568__auto__;
var G__24448 = cljs.core.count(c__5568__auto__);
var G__24449 = (0);
seq__24374 = G__24446;
chunk__24375 = G__24447;
count__24376 = G__24448;
i__24377 = G__24449;
continue;
} else {
var effect = cljs.core.first(seq__24374__$1);
re_frame.fx.dispatch_later(effect);


var G__24450 = cljs.core.next(seq__24374__$1);
var G__24451 = null;
var G__24452 = (0);
var G__24453 = (0);
seq__24374 = G__24450;
chunk__24375 = G__24451;
count__24376 = G__24452;
i__24377 = G__24453;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__24378 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24379 = null;
var count__24380 = (0);
var i__24381 = (0);
while(true){
if((i__24381 < count__24380)){
var vec__24388 = chunk__24379.cljs$core$IIndexed$_nth$arity$2(null,i__24381);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24388,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24388,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24454 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24454)){
var effect_fn_24455 = temp__5802__auto___24454;
(effect_fn_24455.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24455.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24455.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24456 = seq__24378;
var G__24457 = chunk__24379;
var G__24458 = count__24380;
var G__24459 = (i__24381 + (1));
seq__24378 = G__24456;
chunk__24379 = G__24457;
count__24380 = G__24458;
i__24381 = G__24459;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24378);
if(temp__5804__auto__){
var seq__24378__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24378__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24378__$1);
var G__24460 = cljs.core.chunk_rest(seq__24378__$1);
var G__24461 = c__5568__auto__;
var G__24462 = cljs.core.count(c__5568__auto__);
var G__24463 = (0);
seq__24378 = G__24460;
chunk__24379 = G__24461;
count__24380 = G__24462;
i__24381 = G__24463;
continue;
} else {
var vec__24391 = cljs.core.first(seq__24378__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24391,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24391,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24464 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24464)){
var effect_fn_24465 = temp__5802__auto___24464;
(effect_fn_24465.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24465.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24465.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24466 = cljs.core.next(seq__24378__$1);
var G__24467 = null;
var G__24468 = (0);
var G__24469 = (0);
seq__24378 = G__24466;
chunk__24379 = G__24467;
count__24380 = G__24468;
i__24381 = G__24469;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__24394 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24395 = null;
var count__24396 = (0);
var i__24397 = (0);
while(true){
if((i__24397 < count__24396)){
var event = chunk__24395.cljs$core$IIndexed$_nth$arity$2(null,i__24397);
re_frame.router.dispatch(event);


var G__24470 = seq__24394;
var G__24471 = chunk__24395;
var G__24472 = count__24396;
var G__24473 = (i__24397 + (1));
seq__24394 = G__24470;
chunk__24395 = G__24471;
count__24396 = G__24472;
i__24397 = G__24473;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24394);
if(temp__5804__auto__){
var seq__24394__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24394__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24394__$1);
var G__24474 = cljs.core.chunk_rest(seq__24394__$1);
var G__24475 = c__5568__auto__;
var G__24476 = cljs.core.count(c__5568__auto__);
var G__24477 = (0);
seq__24394 = G__24474;
chunk__24395 = G__24475;
count__24396 = G__24476;
i__24397 = G__24477;
continue;
} else {
var event = cljs.core.first(seq__24394__$1);
re_frame.router.dispatch(event);


var G__24478 = cljs.core.next(seq__24394__$1);
var G__24479 = null;
var G__24480 = (0);
var G__24481 = (0);
seq__24394 = G__24478;
chunk__24395 = G__24479;
count__24396 = G__24480;
i__24397 = G__24481;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24398 = cljs.core.seq(value);
var chunk__24399 = null;
var count__24400 = (0);
var i__24401 = (0);
while(true){
if((i__24401 < count__24400)){
var event = chunk__24399.cljs$core$IIndexed$_nth$arity$2(null,i__24401);
clear_event(event);


var G__24482 = seq__24398;
var G__24483 = chunk__24399;
var G__24484 = count__24400;
var G__24485 = (i__24401 + (1));
seq__24398 = G__24482;
chunk__24399 = G__24483;
count__24400 = G__24484;
i__24401 = G__24485;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24398);
if(temp__5804__auto__){
var seq__24398__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24398__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24398__$1);
var G__24486 = cljs.core.chunk_rest(seq__24398__$1);
var G__24487 = c__5568__auto__;
var G__24488 = cljs.core.count(c__5568__auto__);
var G__24489 = (0);
seq__24398 = G__24486;
chunk__24399 = G__24487;
count__24400 = G__24488;
i__24401 = G__24489;
continue;
} else {
var event = cljs.core.first(seq__24398__$1);
clear_event(event);


var G__24490 = cljs.core.next(seq__24398__$1);
var G__24491 = null;
var G__24492 = (0);
var G__24493 = (0);
seq__24398 = G__24490;
chunk__24399 = G__24491;
count__24400 = G__24492;
i__24401 = G__24493;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
