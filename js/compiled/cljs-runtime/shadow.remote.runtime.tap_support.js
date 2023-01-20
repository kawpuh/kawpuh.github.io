goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__15533,p__15534){
var map__15535 = p__15533;
var map__15535__$1 = cljs.core.__destructure_map(map__15535);
var svc = map__15535__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__15536 = p__15534;
var map__15536__$1 = cljs.core.__destructure_map(map__15536);
var msg = map__15536__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15536__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15536__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15536__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15536__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__15543,p__15544){
var map__15546 = p__15543;
var map__15546__$1 = cljs.core.__destructure_map(map__15546);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15546__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__15547 = p__15544;
var map__15547__$1 = cljs.core.__destructure_map(map__15547);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15547__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__15550,p__15551){
var map__15553 = p__15550;
var map__15553__$1 = cljs.core.__destructure_map(map__15553);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15553__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15553__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__15554 = p__15551;
var map__15554__$1 = cljs.core.__destructure_map(map__15554);
var msg = map__15554__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15554__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__15557,tid){
var map__15558 = p__15557;
var map__15558__$1 = cljs.core.__destructure_map(map__15558);
var svc = map__15558__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15558__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__15568 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__15569 = null;
var count__15570 = (0);
var i__15571 = (0);
while(true){
if((i__15571 < count__15570)){
var vec__15586 = chunk__15569.cljs$core$IIndexed$_nth$arity$2(null,i__15571);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15586,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15586,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__15604 = seq__15568;
var G__15605 = chunk__15569;
var G__15606 = count__15570;
var G__15607 = (i__15571 + (1));
seq__15568 = G__15604;
chunk__15569 = G__15605;
count__15570 = G__15606;
i__15571 = G__15607;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15568);
if(temp__5804__auto__){
var seq__15568__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15568__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15568__$1);
var G__15608 = cljs.core.chunk_rest(seq__15568__$1);
var G__15609 = c__5568__auto__;
var G__15610 = cljs.core.count(c__5568__auto__);
var G__15611 = (0);
seq__15568 = G__15608;
chunk__15569 = G__15609;
count__15570 = G__15610;
i__15571 = G__15611;
continue;
} else {
var vec__15593 = cljs.core.first(seq__15568__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15593,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15593,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__15612 = cljs.core.next(seq__15568__$1);
var G__15613 = null;
var G__15614 = (0);
var G__15615 = (0);
seq__15568 = G__15612;
chunk__15569 = G__15613;
count__15570 = G__15614;
i__15571 = G__15615;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__15559_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__15559_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__15560_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__15560_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__15561_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__15561_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__15562_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__15562_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__15599){
var map__15600 = p__15599;
var map__15600__$1 = cljs.core.__destructure_map(map__15600);
var svc = map__15600__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15600__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15600__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
