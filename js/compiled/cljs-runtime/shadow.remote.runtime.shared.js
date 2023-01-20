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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__11847,res){
var map__11848 = p__11847;
var map__11848__$1 = cljs.core.__destructure_map(map__11848);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11848__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11848__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__11849 = res;
var G__11849__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11849,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__11849);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11849__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__11849__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__11855 = arguments.length;
switch (G__11855) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__11856,msg,handlers,timeout_after_ms){
var map__11857 = p__11856;
var map__11857__$1 = cljs.core.__destructure_map(map__11857);
var runtime = map__11857__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11857__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___11967 = arguments.length;
var i__5770__auto___11968 = (0);
while(true){
if((i__5770__auto___11968 < len__5769__auto___11967)){
args__5775__auto__.push((arguments[i__5770__auto___11968]));

var G__11969 = (i__5770__auto___11968 + (1));
i__5770__auto___11968 = G__11969;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__11862,ev,args){
var map__11863 = p__11862;
var map__11863__$1 = cljs.core.__destructure_map(map__11863);
var runtime = map__11863__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11863__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__11864 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11867 = null;
var count__11868 = (0);
var i__11869 = (0);
while(true){
if((i__11869 < count__11868)){
var ext = chunk__11867.cljs$core$IIndexed$_nth$arity$2(null,i__11869);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11973 = seq__11864;
var G__11974 = chunk__11867;
var G__11975 = count__11868;
var G__11976 = (i__11869 + (1));
seq__11864 = G__11973;
chunk__11867 = G__11974;
count__11868 = G__11975;
i__11869 = G__11976;
continue;
} else {
var G__11977 = seq__11864;
var G__11978 = chunk__11867;
var G__11979 = count__11868;
var G__11980 = (i__11869 + (1));
seq__11864 = G__11977;
chunk__11867 = G__11978;
count__11868 = G__11979;
i__11869 = G__11980;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11864);
if(temp__5804__auto__){
var seq__11864__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11864__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11864__$1);
var G__11982 = cljs.core.chunk_rest(seq__11864__$1);
var G__11983 = c__5568__auto__;
var G__11984 = cljs.core.count(c__5568__auto__);
var G__11985 = (0);
seq__11864 = G__11982;
chunk__11867 = G__11983;
count__11868 = G__11984;
i__11869 = G__11985;
continue;
} else {
var ext = cljs.core.first(seq__11864__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11986 = cljs.core.next(seq__11864__$1);
var G__11987 = null;
var G__11988 = (0);
var G__11989 = (0);
seq__11864 = G__11986;
chunk__11867 = G__11987;
count__11868 = G__11988;
i__11869 = G__11989;
continue;
} else {
var G__11991 = cljs.core.next(seq__11864__$1);
var G__11992 = null;
var G__11993 = (0);
var G__11994 = (0);
seq__11864 = G__11991;
chunk__11867 = G__11992;
count__11868 = G__11993;
i__11869 = G__11994;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq11859){
var G__11860 = cljs.core.first(seq11859);
var seq11859__$1 = cljs.core.next(seq11859);
var G__11861 = cljs.core.first(seq11859__$1);
var seq11859__$2 = cljs.core.next(seq11859__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11860,G__11861,seq11859__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__11878,p__11879){
var map__11880 = p__11878;
var map__11880__$1 = cljs.core.__destructure_map(map__11880);
var runtime = map__11880__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11880__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11881 = p__11879;
var map__11881__$1 = cljs.core.__destructure_map(map__11881);
var msg = map__11881__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11881__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__11882 = cljs.core.deref(state_ref);
var map__11882__$1 = cljs.core.__destructure_map(map__11882);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11882__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11882__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__11892){
var map__11893 = p__11892;
var map__11893__$1 = cljs.core.__destructure_map(map__11893);
var runtime = map__11893__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11893__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__11896,msg){
var map__11897 = p__11896;
var map__11897__$1 = cljs.core.__destructure_map(map__11897);
var runtime = map__11897__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11897__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__11903,key,p__11904){
var map__11905 = p__11903;
var map__11905__$1 = cljs.core.__destructure_map(map__11905);
var state = map__11905__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11905__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__11906 = p__11904;
var map__11906__$1 = cljs.core.__destructure_map(map__11906);
var spec = map__11906__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11906__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__11907,key,spec){
var map__11908 = p__11907;
var map__11908__$1 = cljs.core.__destructure_map(map__11908);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11908__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__11909_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__11909_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__11910_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__11910_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__11911_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__11911_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__11912_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__11912_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__11914_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__11914_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__11920,key){
var map__11921 = p__11920;
var map__11921__$1 = cljs.core.__destructure_map(map__11921);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11921__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__11924,msg){
var map__11925 = p__11924;
var map__11925__$1 = cljs.core.__destructure_map(map__11925);
var runtime = map__11925__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11925__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__11927,p__11928){
var map__11929 = p__11927;
var map__11929__$1 = cljs.core.__destructure_map(map__11929);
var runtime = map__11929__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11929__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11930 = p__11928;
var map__11930__$1 = cljs.core.__destructure_map(map__11930);
var msg = map__11930__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11930__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11930__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__11941 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11943 = null;
var count__11944 = (0);
var i__11945 = (0);
while(true){
if((i__11945 < count__11944)){
var map__11959 = chunk__11943.cljs$core$IIndexed$_nth$arity$2(null,i__11945);
var map__11959__$1 = cljs.core.__destructure_map(map__11959);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11959__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__12002 = seq__11941;
var G__12003 = chunk__11943;
var G__12004 = count__11944;
var G__12005 = (i__11945 + (1));
seq__11941 = G__12002;
chunk__11943 = G__12003;
count__11944 = G__12004;
i__11945 = G__12005;
continue;
} else {
var G__12007 = seq__11941;
var G__12008 = chunk__11943;
var G__12009 = count__11944;
var G__12010 = (i__11945 + (1));
seq__11941 = G__12007;
chunk__11943 = G__12008;
count__11944 = G__12009;
i__11945 = G__12010;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11941);
if(temp__5804__auto__){
var seq__11941__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11941__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11941__$1);
var G__12014 = cljs.core.chunk_rest(seq__11941__$1);
var G__12015 = c__5568__auto__;
var G__12016 = cljs.core.count(c__5568__auto__);
var G__12017 = (0);
seq__11941 = G__12014;
chunk__11943 = G__12015;
count__11944 = G__12016;
i__11945 = G__12017;
continue;
} else {
var map__11960 = cljs.core.first(seq__11941__$1);
var map__11960__$1 = cljs.core.__destructure_map(map__11960);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11960__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__12018 = cljs.core.next(seq__11941__$1);
var G__12019 = null;
var G__12020 = (0);
var G__12021 = (0);
seq__11941 = G__12018;
chunk__11943 = G__12019;
count__11944 = G__12020;
i__11945 = G__12021;
continue;
} else {
var G__12022 = cljs.core.next(seq__11941__$1);
var G__12023 = null;
var G__12024 = (0);
var G__12025 = (0);
seq__11941 = G__12022;
chunk__11943 = G__12023;
count__11944 = G__12024;
i__11945 = G__12025;
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
