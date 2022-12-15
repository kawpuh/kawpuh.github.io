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
var _STAR_current_trace_STAR__orig_val__10069 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__10070 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__10070);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___10225 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___10225)){
var new_db_10226 = temp__5804__auto___10225;
var fexpr__10072_10227 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__10072_10227.cljs$core$IFn$_invoke$arity$1 ? fexpr__10072_10227.cljs$core$IFn$_invoke$arity$1(new_db_10226) : fexpr__10072_10227.call(null,new_db_10226));
} else {
}

var seq__10073 = cljs.core.seq(effects_without_db);
var chunk__10074 = null;
var count__10075 = (0);
var i__10076 = (0);
while(true){
if((i__10076 < count__10075)){
var vec__10106 = chunk__10074.cljs$core$IIndexed$_nth$arity$2(null,i__10076);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10106,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10106,(1),null);
var temp__5802__auto___10228 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10228)){
var effect_fn_10229 = temp__5802__auto___10228;
(effect_fn_10229.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10229.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10229.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10230 = seq__10073;
var G__10231 = chunk__10074;
var G__10232 = count__10075;
var G__10233 = (i__10076 + (1));
seq__10073 = G__10230;
chunk__10074 = G__10231;
count__10075 = G__10232;
i__10076 = G__10233;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10073);
if(temp__5804__auto__){
var seq__10073__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10073__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__10073__$1);
var G__10234 = cljs.core.chunk_rest(seq__10073__$1);
var G__10235 = c__5568__auto__;
var G__10236 = cljs.core.count(c__5568__auto__);
var G__10237 = (0);
seq__10073 = G__10234;
chunk__10074 = G__10235;
count__10075 = G__10236;
i__10076 = G__10237;
continue;
} else {
var vec__10115 = cljs.core.first(seq__10073__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10115,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10115,(1),null);
var temp__5802__auto___10238 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10238)){
var effect_fn_10239 = temp__5802__auto___10238;
(effect_fn_10239.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10239.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10239.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10240 = cljs.core.next(seq__10073__$1);
var G__10241 = null;
var G__10242 = (0);
var G__10243 = (0);
seq__10073 = G__10240;
chunk__10074 = G__10241;
count__10075 = G__10242;
i__10076 = G__10243;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__9446__auto___10244 = re_frame.interop.now();
var duration__9448__auto___10245 = (end__9446__auto___10244 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__9448__auto___10245,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__9446__auto___10244);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__10069);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___10246 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___10246)){
var new_db_10247 = temp__5804__auto___10246;
var fexpr__10124_10248 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__10124_10248.cljs$core$IFn$_invoke$arity$1 ? fexpr__10124_10248.cljs$core$IFn$_invoke$arity$1(new_db_10247) : fexpr__10124_10248.call(null,new_db_10247));
} else {
}

var seq__10125 = cljs.core.seq(effects_without_db);
var chunk__10126 = null;
var count__10127 = (0);
var i__10128 = (0);
while(true){
if((i__10128 < count__10127)){
var vec__10154 = chunk__10126.cljs$core$IIndexed$_nth$arity$2(null,i__10128);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10154,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10154,(1),null);
var temp__5802__auto___10249 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10249)){
var effect_fn_10250 = temp__5802__auto___10249;
(effect_fn_10250.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10250.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10250.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10251 = seq__10125;
var G__10252 = chunk__10126;
var G__10253 = count__10127;
var G__10254 = (i__10128 + (1));
seq__10125 = G__10251;
chunk__10126 = G__10252;
count__10127 = G__10253;
i__10128 = G__10254;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10125);
if(temp__5804__auto__){
var seq__10125__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10125__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__10125__$1);
var G__10255 = cljs.core.chunk_rest(seq__10125__$1);
var G__10256 = c__5568__auto__;
var G__10257 = cljs.core.count(c__5568__auto__);
var G__10258 = (0);
seq__10125 = G__10255;
chunk__10126 = G__10256;
count__10127 = G__10257;
i__10128 = G__10258;
continue;
} else {
var vec__10159 = cljs.core.first(seq__10125__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10159,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10159,(1),null);
var temp__5802__auto___10259 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10259)){
var effect_fn_10260 = temp__5802__auto___10259;
(effect_fn_10260.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10260.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10260.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10264 = cljs.core.next(seq__10125__$1);
var G__10265 = null;
var G__10266 = (0);
var G__10267 = (0);
seq__10125 = G__10264;
chunk__10126 = G__10265;
count__10127 = G__10266;
i__10128 = G__10267;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__10168){
var map__10169 = p__10168;
var map__10169__$1 = cljs.core.__destructure_map(map__10169);
var effect = map__10169__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10169__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10169__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__10174 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__10175 = null;
var count__10176 = (0);
var i__10177 = (0);
while(true){
if((i__10177 < count__10176)){
var effect = chunk__10175.cljs$core$IIndexed$_nth$arity$2(null,i__10177);
re_frame.fx.dispatch_later(effect);


var G__10271 = seq__10174;
var G__10272 = chunk__10175;
var G__10273 = count__10176;
var G__10274 = (i__10177 + (1));
seq__10174 = G__10271;
chunk__10175 = G__10272;
count__10176 = G__10273;
i__10177 = G__10274;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10174);
if(temp__5804__auto__){
var seq__10174__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10174__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__10174__$1);
var G__10276 = cljs.core.chunk_rest(seq__10174__$1);
var G__10277 = c__5568__auto__;
var G__10278 = cljs.core.count(c__5568__auto__);
var G__10279 = (0);
seq__10174 = G__10276;
chunk__10175 = G__10277;
count__10176 = G__10278;
i__10177 = G__10279;
continue;
} else {
var effect = cljs.core.first(seq__10174__$1);
re_frame.fx.dispatch_later(effect);


var G__10282 = cljs.core.next(seq__10174__$1);
var G__10283 = null;
var G__10284 = (0);
var G__10285 = (0);
seq__10174 = G__10282;
chunk__10175 = G__10283;
count__10176 = G__10284;
i__10177 = G__10285;
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
var seq__10184 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__10185 = null;
var count__10186 = (0);
var i__10187 = (0);
while(true){
if((i__10187 < count__10186)){
var vec__10203 = chunk__10185.cljs$core$IIndexed$_nth$arity$2(null,i__10187);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10203,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10203,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___10292 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10292)){
var effect_fn_10293 = temp__5802__auto___10292;
(effect_fn_10293.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10293.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10293.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__10294 = seq__10184;
var G__10295 = chunk__10185;
var G__10296 = count__10186;
var G__10297 = (i__10187 + (1));
seq__10184 = G__10294;
chunk__10185 = G__10295;
count__10186 = G__10296;
i__10187 = G__10297;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10184);
if(temp__5804__auto__){
var seq__10184__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10184__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__10184__$1);
var G__10298 = cljs.core.chunk_rest(seq__10184__$1);
var G__10299 = c__5568__auto__;
var G__10300 = cljs.core.count(c__5568__auto__);
var G__10301 = (0);
seq__10184 = G__10298;
chunk__10185 = G__10299;
count__10186 = G__10300;
i__10187 = G__10301;
continue;
} else {
var vec__10206 = cljs.core.first(seq__10184__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10206,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10206,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___10302 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10302)){
var effect_fn_10303 = temp__5802__auto___10302;
(effect_fn_10303.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10303.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10303.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__10304 = cljs.core.next(seq__10184__$1);
var G__10305 = null;
var G__10306 = (0);
var G__10307 = (0);
seq__10184 = G__10304;
chunk__10185 = G__10305;
count__10186 = G__10306;
i__10187 = G__10307;
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
var seq__10211 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__10212 = null;
var count__10213 = (0);
var i__10214 = (0);
while(true){
if((i__10214 < count__10213)){
var event = chunk__10212.cljs$core$IIndexed$_nth$arity$2(null,i__10214);
re_frame.router.dispatch(event);


var G__10308 = seq__10211;
var G__10309 = chunk__10212;
var G__10310 = count__10213;
var G__10311 = (i__10214 + (1));
seq__10211 = G__10308;
chunk__10212 = G__10309;
count__10213 = G__10310;
i__10214 = G__10311;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10211);
if(temp__5804__auto__){
var seq__10211__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10211__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__10211__$1);
var G__10313 = cljs.core.chunk_rest(seq__10211__$1);
var G__10314 = c__5568__auto__;
var G__10315 = cljs.core.count(c__5568__auto__);
var G__10316 = (0);
seq__10211 = G__10313;
chunk__10212 = G__10314;
count__10213 = G__10315;
i__10214 = G__10316;
continue;
} else {
var event = cljs.core.first(seq__10211__$1);
re_frame.router.dispatch(event);


var G__10318 = cljs.core.next(seq__10211__$1);
var G__10319 = null;
var G__10320 = (0);
var G__10321 = (0);
seq__10211 = G__10318;
chunk__10212 = G__10319;
count__10213 = G__10320;
i__10214 = G__10321;
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
var seq__10220 = cljs.core.seq(value);
var chunk__10221 = null;
var count__10222 = (0);
var i__10223 = (0);
while(true){
if((i__10223 < count__10222)){
var event = chunk__10221.cljs$core$IIndexed$_nth$arity$2(null,i__10223);
clear_event(event);


var G__10322 = seq__10220;
var G__10323 = chunk__10221;
var G__10324 = count__10222;
var G__10325 = (i__10223 + (1));
seq__10220 = G__10322;
chunk__10221 = G__10323;
count__10222 = G__10324;
i__10223 = G__10325;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10220);
if(temp__5804__auto__){
var seq__10220__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10220__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__10220__$1);
var G__10326 = cljs.core.chunk_rest(seq__10220__$1);
var G__10327 = c__5568__auto__;
var G__10328 = cljs.core.count(c__5568__auto__);
var G__10329 = (0);
seq__10220 = G__10326;
chunk__10221 = G__10327;
count__10222 = G__10328;
i__10223 = G__10329;
continue;
} else {
var event = cljs.core.first(seq__10220__$1);
clear_event(event);


var G__10330 = cljs.core.next(seq__10220__$1);
var G__10331 = null;
var G__10332 = (0);
var G__10333 = (0);
seq__10220 = G__10330;
chunk__10221 = G__10331;
count__10222 = G__10332;
i__10223 = G__10333;
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
