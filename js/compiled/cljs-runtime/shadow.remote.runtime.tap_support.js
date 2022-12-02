goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__21088,p__21089){
var map__21090 = p__21088;
var map__21090__$1 = cljs.core.__destructure_map(map__21090);
var svc = map__21090__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21091 = p__21089;
var map__21091__$1 = cljs.core.__destructure_map(map__21091);
var msg = map__21091__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21091__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21091__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21091__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21091__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__21100,p__21101){
var map__21103 = p__21100;
var map__21103__$1 = cljs.core.__destructure_map(map__21103);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21103__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__21104 = p__21101;
var map__21104__$1 = cljs.core.__destructure_map(map__21104);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21104__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__21107,p__21108){
var map__21109 = p__21107;
var map__21109__$1 = cljs.core.__destructure_map(map__21109);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21110 = p__21108;
var map__21110__$1 = cljs.core.__destructure_map(map__21110);
var msg = map__21110__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21110__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__21112,tid){
var map__21115 = p__21112;
var map__21115__$1 = cljs.core.__destructure_map(map__21115);
var svc = map__21115__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21115__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__21129 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__21130 = null;
var count__21131 = (0);
var i__21132 = (0);
while(true){
if((i__21132 < count__21131)){
var vec__21150 = chunk__21130.cljs$core$IIndexed$_nth$arity$2(null,i__21132);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21150,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21150,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21159 = seq__21129;
var G__21160 = chunk__21130;
var G__21161 = count__21131;
var G__21162 = (i__21132 + (1));
seq__21129 = G__21159;
chunk__21130 = G__21160;
count__21131 = G__21161;
i__21132 = G__21162;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21129);
if(temp__5804__auto__){
var seq__21129__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21129__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21129__$1);
var G__21163 = cljs.core.chunk_rest(seq__21129__$1);
var G__21164 = c__5568__auto__;
var G__21165 = cljs.core.count(c__5568__auto__);
var G__21166 = (0);
seq__21129 = G__21163;
chunk__21130 = G__21164;
count__21131 = G__21165;
i__21132 = G__21166;
continue;
} else {
var vec__21154 = cljs.core.first(seq__21129__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21154,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21154,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21167 = cljs.core.next(seq__21129__$1);
var G__21168 = null;
var G__21169 = (0);
var G__21170 = (0);
seq__21129 = G__21167;
chunk__21130 = G__21168;
count__21131 = G__21169;
i__21132 = G__21170;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__21119_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__21119_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__21120_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__21120_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__21121_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__21121_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__21122_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__21122_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21157){
var map__21158 = p__21157;
var map__21158__$1 = cljs.core.__destructure_map(map__21158);
var svc = map__21158__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21158__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21158__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
