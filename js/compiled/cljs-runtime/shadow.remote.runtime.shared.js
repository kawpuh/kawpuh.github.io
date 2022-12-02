goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17482,res){
var map__17483 = p__17482;
var map__17483__$1 = cljs.core.__destructure_map(map__17483);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17483__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17483__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17485 = res;
var G__17485__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17485,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17485);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17485__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17485__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17492 = arguments.length;
switch (G__17492) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17495,msg,handlers,timeout_after_ms){
var map__17496 = p__17495;
var map__17496__$1 = cljs.core.__destructure_map(map__17496);
var runtime = map__17496__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17496__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17650 = arguments.length;
var i__5770__auto___17651 = (0);
while(true){
if((i__5770__auto___17651 < len__5769__auto___17650)){
args__5775__auto__.push((arguments[i__5770__auto___17651]));

var G__17652 = (i__5770__auto___17651 + (1));
i__5770__auto___17651 = G__17652;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17512,ev,args){
var map__17513 = p__17512;
var map__17513__$1 = cljs.core.__destructure_map(map__17513);
var runtime = map__17513__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17513__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17514 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17517 = null;
var count__17518 = (0);
var i__17519 = (0);
while(true){
if((i__17519 < count__17518)){
var ext = chunk__17517.cljs$core$IIndexed$_nth$arity$2(null,i__17519);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17657 = seq__17514;
var G__17658 = chunk__17517;
var G__17659 = count__17518;
var G__17660 = (i__17519 + (1));
seq__17514 = G__17657;
chunk__17517 = G__17658;
count__17518 = G__17659;
i__17519 = G__17660;
continue;
} else {
var G__17661 = seq__17514;
var G__17662 = chunk__17517;
var G__17663 = count__17518;
var G__17664 = (i__17519 + (1));
seq__17514 = G__17661;
chunk__17517 = G__17662;
count__17518 = G__17663;
i__17519 = G__17664;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17514);
if(temp__5804__auto__){
var seq__17514__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17514__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17514__$1);
var G__17668 = cljs.core.chunk_rest(seq__17514__$1);
var G__17669 = c__5568__auto__;
var G__17670 = cljs.core.count(c__5568__auto__);
var G__17671 = (0);
seq__17514 = G__17668;
chunk__17517 = G__17669;
count__17518 = G__17670;
i__17519 = G__17671;
continue;
} else {
var ext = cljs.core.first(seq__17514__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17673 = cljs.core.next(seq__17514__$1);
var G__17674 = null;
var G__17675 = (0);
var G__17676 = (0);
seq__17514 = G__17673;
chunk__17517 = G__17674;
count__17518 = G__17675;
i__17519 = G__17676;
continue;
} else {
var G__17677 = cljs.core.next(seq__17514__$1);
var G__17678 = null;
var G__17679 = (0);
var G__17680 = (0);
seq__17514 = G__17677;
chunk__17517 = G__17678;
count__17518 = G__17679;
i__17519 = G__17680;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17498){
var G__17499 = cljs.core.first(seq17498);
var seq17498__$1 = cljs.core.next(seq17498);
var G__17500 = cljs.core.first(seq17498__$1);
var seq17498__$2 = cljs.core.next(seq17498__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17499,G__17500,seq17498__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17535,p__17536){
var map__17537 = p__17535;
var map__17537__$1 = cljs.core.__destructure_map(map__17537);
var runtime = map__17537__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17537__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17538 = p__17536;
var map__17538__$1 = cljs.core.__destructure_map(map__17538);
var msg = map__17538__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17538__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17539 = cljs.core.deref(state_ref);
var map__17539__$1 = cljs.core.__destructure_map(map__17539);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17539__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17539__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17544){
var map__17545 = p__17544;
var map__17545__$1 = cljs.core.__destructure_map(map__17545);
var runtime = map__17545__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17545__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17546,msg){
var map__17547 = p__17546;
var map__17547__$1 = cljs.core.__destructure_map(map__17547);
var runtime = map__17547__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17547__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17549,key,p__17550){
var map__17551 = p__17549;
var map__17551__$1 = cljs.core.__destructure_map(map__17551);
var state = map__17551__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17551__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17552 = p__17550;
var map__17552__$1 = cljs.core.__destructure_map(map__17552);
var spec = map__17552__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17552__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17556,key,spec){
var map__17557 = p__17556;
var map__17557__$1 = cljs.core.__destructure_map(map__17557);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17557__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17558_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17558_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17559_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17559_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17560_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17560_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17561_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17561_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17562_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17562_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17571,key){
var map__17572 = p__17571;
var map__17572__$1 = cljs.core.__destructure_map(map__17572);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17572__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17580,msg){
var map__17582 = p__17580;
var map__17582__$1 = cljs.core.__destructure_map(map__17582);
var runtime = map__17582__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17582__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17590,p__17591){
var map__17592 = p__17590;
var map__17592__$1 = cljs.core.__destructure_map(map__17592);
var runtime = map__17592__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17592__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17593 = p__17591;
var map__17593__$1 = cljs.core.__destructure_map(map__17593);
var msg = map__17593__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17593__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17593__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17605 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17607 = null;
var count__17608 = (0);
var i__17609 = (0);
while(true){
if((i__17609 < count__17608)){
var map__17614 = chunk__17607.cljs$core$IIndexed$_nth$arity$2(null,i__17609);
var map__17614__$1 = cljs.core.__destructure_map(map__17614);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17614__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17777 = seq__17605;
var G__17779 = chunk__17607;
var G__17780 = count__17608;
var G__17781 = (i__17609 + (1));
seq__17605 = G__17777;
chunk__17607 = G__17779;
count__17608 = G__17780;
i__17609 = G__17781;
continue;
} else {
var G__17782 = seq__17605;
var G__17783 = chunk__17607;
var G__17784 = count__17608;
var G__17785 = (i__17609 + (1));
seq__17605 = G__17782;
chunk__17607 = G__17783;
count__17608 = G__17784;
i__17609 = G__17785;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17605);
if(temp__5804__auto__){
var seq__17605__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17605__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17605__$1);
var G__17786 = cljs.core.chunk_rest(seq__17605__$1);
var G__17787 = c__5568__auto__;
var G__17788 = cljs.core.count(c__5568__auto__);
var G__17789 = (0);
seq__17605 = G__17786;
chunk__17607 = G__17787;
count__17608 = G__17788;
i__17609 = G__17789;
continue;
} else {
var map__17619 = cljs.core.first(seq__17605__$1);
var map__17619__$1 = cljs.core.__destructure_map(map__17619);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17619__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17791 = cljs.core.next(seq__17605__$1);
var G__17792 = null;
var G__17793 = (0);
var G__17794 = (0);
seq__17605 = G__17791;
chunk__17607 = G__17792;
count__17608 = G__17793;
i__17609 = G__17794;
continue;
} else {
var G__17795 = cljs.core.next(seq__17605__$1);
var G__17796 = null;
var G__17797 = (0);
var G__17798 = (0);
seq__17605 = G__17795;
chunk__17607 = G__17796;
count__17608 = G__17797;
i__17609 = G__17798;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
