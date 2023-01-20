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
var _STAR_current_trace_STAR__orig_val__13259 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13260 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13260);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13392 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13392)){
var new_db_13393 = temp__5804__auto___13392;
var fexpr__13267_13394 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13267_13394.cljs$core$IFn$_invoke$arity$1 ? fexpr__13267_13394.cljs$core$IFn$_invoke$arity$1(new_db_13393) : fexpr__13267_13394.call(null,new_db_13393));
} else {
}

var seq__13268 = cljs.core.seq(effects_without_db);
var chunk__13269 = null;
var count__13270 = (0);
var i__13271 = (0);
while(true){
if((i__13271 < count__13270)){
var vec__13282 = chunk__13269.cljs$core$IIndexed$_nth$arity$2(null,i__13271);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13282,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13282,(1),null);
var temp__5802__auto___13395 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13395)){
var effect_fn_13396 = temp__5802__auto___13395;
(effect_fn_13396.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13396.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13396.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13397 = seq__13268;
var G__13398 = chunk__13269;
var G__13399 = count__13270;
var G__13400 = (i__13271 + (1));
seq__13268 = G__13397;
chunk__13269 = G__13398;
count__13270 = G__13399;
i__13271 = G__13400;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13268);
if(temp__5804__auto__){
var seq__13268__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13268__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13268__$1);
var G__13401 = cljs.core.chunk_rest(seq__13268__$1);
var G__13402 = c__5568__auto__;
var G__13403 = cljs.core.count(c__5568__auto__);
var G__13404 = (0);
seq__13268 = G__13401;
chunk__13269 = G__13402;
count__13270 = G__13403;
i__13271 = G__13404;
continue;
} else {
var vec__13285 = cljs.core.first(seq__13268__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13285,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13285,(1),null);
var temp__5802__auto___13405 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13405)){
var effect_fn_13406 = temp__5802__auto___13405;
(effect_fn_13406.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13406.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13406.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13407 = cljs.core.next(seq__13268__$1);
var G__13408 = null;
var G__13409 = (0);
var G__13410 = (0);
seq__13268 = G__13407;
chunk__13269 = G__13408;
count__13270 = G__13409;
i__13271 = G__13410;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12829__auto___13411 = re_frame.interop.now();
var duration__12830__auto___13412 = (end__12829__auto___13411 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12830__auto___13412,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12829__auto___13411);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13259);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13413 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13413)){
var new_db_13414 = temp__5804__auto___13413;
var fexpr__13288_13415 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13288_13415.cljs$core$IFn$_invoke$arity$1 ? fexpr__13288_13415.cljs$core$IFn$_invoke$arity$1(new_db_13414) : fexpr__13288_13415.call(null,new_db_13414));
} else {
}

var seq__13289 = cljs.core.seq(effects_without_db);
var chunk__13290 = null;
var count__13291 = (0);
var i__13292 = (0);
while(true){
if((i__13292 < count__13291)){
var vec__13306 = chunk__13290.cljs$core$IIndexed$_nth$arity$2(null,i__13292);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13306,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13306,(1),null);
var temp__5802__auto___13416 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13416)){
var effect_fn_13417 = temp__5802__auto___13416;
(effect_fn_13417.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13417.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13417.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13418 = seq__13289;
var G__13419 = chunk__13290;
var G__13420 = count__13291;
var G__13421 = (i__13292 + (1));
seq__13289 = G__13418;
chunk__13290 = G__13419;
count__13291 = G__13420;
i__13292 = G__13421;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13289);
if(temp__5804__auto__){
var seq__13289__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13289__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13289__$1);
var G__13422 = cljs.core.chunk_rest(seq__13289__$1);
var G__13423 = c__5568__auto__;
var G__13424 = cljs.core.count(c__5568__auto__);
var G__13425 = (0);
seq__13289 = G__13422;
chunk__13290 = G__13423;
count__13291 = G__13424;
i__13292 = G__13425;
continue;
} else {
var vec__13316 = cljs.core.first(seq__13289__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13316,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13316,(1),null);
var temp__5802__auto___13426 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13426)){
var effect_fn_13427 = temp__5802__auto___13426;
(effect_fn_13427.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13427.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13427.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13432 = cljs.core.next(seq__13289__$1);
var G__13433 = null;
var G__13434 = (0);
var G__13435 = (0);
seq__13289 = G__13432;
chunk__13290 = G__13433;
count__13291 = G__13434;
i__13292 = G__13435;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__13319){
var map__13320 = p__13319;
var map__13320__$1 = cljs.core.__destructure_map(map__13320);
var effect = map__13320__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13320__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13320__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__13340 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13341 = null;
var count__13342 = (0);
var i__13343 = (0);
while(true){
if((i__13343 < count__13342)){
var effect = chunk__13341.cljs$core$IIndexed$_nth$arity$2(null,i__13343);
re_frame.fx.dispatch_later(effect);


var G__13436 = seq__13340;
var G__13437 = chunk__13341;
var G__13438 = count__13342;
var G__13439 = (i__13343 + (1));
seq__13340 = G__13436;
chunk__13341 = G__13437;
count__13342 = G__13438;
i__13343 = G__13439;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13340);
if(temp__5804__auto__){
var seq__13340__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13340__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13340__$1);
var G__13440 = cljs.core.chunk_rest(seq__13340__$1);
var G__13441 = c__5568__auto__;
var G__13442 = cljs.core.count(c__5568__auto__);
var G__13443 = (0);
seq__13340 = G__13440;
chunk__13341 = G__13441;
count__13342 = G__13442;
i__13343 = G__13443;
continue;
} else {
var effect = cljs.core.first(seq__13340__$1);
re_frame.fx.dispatch_later(effect);


var G__13444 = cljs.core.next(seq__13340__$1);
var G__13445 = null;
var G__13446 = (0);
var G__13447 = (0);
seq__13340 = G__13444;
chunk__13341 = G__13445;
count__13342 = G__13446;
i__13343 = G__13447;
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
var seq__13349 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__13350 = null;
var count__13351 = (0);
var i__13352 = (0);
while(true){
if((i__13352 < count__13351)){
var vec__13365 = chunk__13350.cljs$core$IIndexed$_nth$arity$2(null,i__13352);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13365,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13365,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13448 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13448)){
var effect_fn_13449 = temp__5802__auto___13448;
(effect_fn_13449.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13449.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13449.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13450 = seq__13349;
var G__13451 = chunk__13350;
var G__13452 = count__13351;
var G__13453 = (i__13352 + (1));
seq__13349 = G__13450;
chunk__13350 = G__13451;
count__13351 = G__13452;
i__13352 = G__13453;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13349);
if(temp__5804__auto__){
var seq__13349__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13349__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13349__$1);
var G__13454 = cljs.core.chunk_rest(seq__13349__$1);
var G__13455 = c__5568__auto__;
var G__13456 = cljs.core.count(c__5568__auto__);
var G__13457 = (0);
seq__13349 = G__13454;
chunk__13350 = G__13455;
count__13351 = G__13456;
i__13352 = G__13457;
continue;
} else {
var vec__13368 = cljs.core.first(seq__13349__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13368,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13368,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13458 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13458)){
var effect_fn_13459 = temp__5802__auto___13458;
(effect_fn_13459.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13459.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13459.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13460 = cljs.core.next(seq__13349__$1);
var G__13461 = null;
var G__13462 = (0);
var G__13463 = (0);
seq__13349 = G__13460;
chunk__13350 = G__13461;
count__13351 = G__13462;
i__13352 = G__13463;
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
var seq__13371 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13372 = null;
var count__13373 = (0);
var i__13374 = (0);
while(true){
if((i__13374 < count__13373)){
var event = chunk__13372.cljs$core$IIndexed$_nth$arity$2(null,i__13374);
re_frame.router.dispatch(event);


var G__13464 = seq__13371;
var G__13465 = chunk__13372;
var G__13466 = count__13373;
var G__13467 = (i__13374 + (1));
seq__13371 = G__13464;
chunk__13372 = G__13465;
count__13373 = G__13466;
i__13374 = G__13467;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13371);
if(temp__5804__auto__){
var seq__13371__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13371__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13371__$1);
var G__13468 = cljs.core.chunk_rest(seq__13371__$1);
var G__13469 = c__5568__auto__;
var G__13470 = cljs.core.count(c__5568__auto__);
var G__13471 = (0);
seq__13371 = G__13468;
chunk__13372 = G__13469;
count__13373 = G__13470;
i__13374 = G__13471;
continue;
} else {
var event = cljs.core.first(seq__13371__$1);
re_frame.router.dispatch(event);


var G__13472 = cljs.core.next(seq__13371__$1);
var G__13473 = null;
var G__13474 = (0);
var G__13475 = (0);
seq__13371 = G__13472;
chunk__13372 = G__13473;
count__13373 = G__13474;
i__13374 = G__13475;
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
var seq__13375 = cljs.core.seq(value);
var chunk__13376 = null;
var count__13377 = (0);
var i__13378 = (0);
while(true){
if((i__13378 < count__13377)){
var event = chunk__13376.cljs$core$IIndexed$_nth$arity$2(null,i__13378);
clear_event(event);


var G__13476 = seq__13375;
var G__13477 = chunk__13376;
var G__13478 = count__13377;
var G__13479 = (i__13378 + (1));
seq__13375 = G__13476;
chunk__13376 = G__13477;
count__13377 = G__13478;
i__13378 = G__13479;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13375);
if(temp__5804__auto__){
var seq__13375__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13375__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13375__$1);
var G__13480 = cljs.core.chunk_rest(seq__13375__$1);
var G__13481 = c__5568__auto__;
var G__13482 = cljs.core.count(c__5568__auto__);
var G__13483 = (0);
seq__13375 = G__13480;
chunk__13376 = G__13481;
count__13377 = G__13482;
i__13378 = G__13483;
continue;
} else {
var event = cljs.core.first(seq__13375__$1);
clear_event(event);


var G__13484 = cljs.core.next(seq__13375__$1);
var G__13485 = null;
var G__13486 = (0);
var G__13487 = (0);
seq__13375 = G__13484;
chunk__13376 = G__13485;
count__13377 = G__13486;
i__13378 = G__13487;
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
