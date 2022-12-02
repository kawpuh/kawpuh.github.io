goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23198 = arguments.length;
var i__5770__auto___23199 = (0);
while(true){
if((i__5770__auto___23199 < len__5769__auto___23198)){
args__5775__auto__.push((arguments[i__5770__auto___23199]));

var G__23200 = (i__5770__auto___23199 + (1));
i__5770__auto___23199 = G__23200;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22712){
var G__22713 = cljs.core.first(seq22712);
var seq22712__$1 = cljs.core.next(seq22712);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22713,seq22712__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22717 = cljs.core.seq(sources);
var chunk__22718 = null;
var count__22719 = (0);
var i__22720 = (0);
while(true){
if((i__22720 < count__22719)){
var map__22727 = chunk__22718.cljs$core$IIndexed$_nth$arity$2(null,i__22720);
var map__22727__$1 = cljs.core.__destructure_map(map__22727);
var src = map__22727__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22727__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22727__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22727__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22727__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22729){var e_23201 = e22729;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23201);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23201.message)].join('')));
}

var G__23202 = seq__22717;
var G__23203 = chunk__22718;
var G__23204 = count__22719;
var G__23205 = (i__22720 + (1));
seq__22717 = G__23202;
chunk__22718 = G__23203;
count__22719 = G__23204;
i__22720 = G__23205;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22717);
if(temp__5804__auto__){
var seq__22717__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22717__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22717__$1);
var G__23206 = cljs.core.chunk_rest(seq__22717__$1);
var G__23207 = c__5568__auto__;
var G__23208 = cljs.core.count(c__5568__auto__);
var G__23209 = (0);
seq__22717 = G__23206;
chunk__22718 = G__23207;
count__22719 = G__23208;
i__22720 = G__23209;
continue;
} else {
var map__22730 = cljs.core.first(seq__22717__$1);
var map__22730__$1 = cljs.core.__destructure_map(map__22730);
var src = map__22730__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22730__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22730__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22730__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22730__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22732){var e_23210 = e22732;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23210);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23210.message)].join('')));
}

var G__23211 = cljs.core.next(seq__22717__$1);
var G__23212 = null;
var G__23213 = (0);
var G__23214 = (0);
seq__22717 = G__23211;
chunk__22718 = G__23212;
count__22719 = G__23213;
i__22720 = G__23214;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22734 = cljs.core.seq(js_requires);
var chunk__22735 = null;
var count__22736 = (0);
var i__22737 = (0);
while(true){
if((i__22737 < count__22736)){
var js_ns = chunk__22735.cljs$core$IIndexed$_nth$arity$2(null,i__22737);
var require_str_23215 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23215);


var G__23216 = seq__22734;
var G__23217 = chunk__22735;
var G__23218 = count__22736;
var G__23219 = (i__22737 + (1));
seq__22734 = G__23216;
chunk__22735 = G__23217;
count__22736 = G__23218;
i__22737 = G__23219;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22734);
if(temp__5804__auto__){
var seq__22734__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22734__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22734__$1);
var G__23220 = cljs.core.chunk_rest(seq__22734__$1);
var G__23221 = c__5568__auto__;
var G__23222 = cljs.core.count(c__5568__auto__);
var G__23223 = (0);
seq__22734 = G__23220;
chunk__22735 = G__23221;
count__22736 = G__23222;
i__22737 = G__23223;
continue;
} else {
var js_ns = cljs.core.first(seq__22734__$1);
var require_str_23224 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23224);


var G__23225 = cljs.core.next(seq__22734__$1);
var G__23226 = null;
var G__23227 = (0);
var G__23228 = (0);
seq__22734 = G__23225;
chunk__22735 = G__23226;
count__22736 = G__23227;
i__22737 = G__23228;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22742){
var map__22743 = p__22742;
var map__22743__$1 = cljs.core.__destructure_map(map__22743);
var msg = map__22743__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22743__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22743__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22744(s__22745){
return (new cljs.core.LazySeq(null,(function (){
var s__22745__$1 = s__22745;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22745__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22750 = cljs.core.first(xs__6360__auto__);
var map__22750__$1 = cljs.core.__destructure_map(map__22750);
var src = map__22750__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22750__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22750__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22745__$1,map__22750,map__22750__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22743,map__22743__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22744_$_iter__22746(s__22747){
return (new cljs.core.LazySeq(null,((function (s__22745__$1,map__22750,map__22750__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22743,map__22743__$1,msg,info,reload_info){
return (function (){
var s__22747__$1 = s__22747;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22747__$1);
if(temp__5804__auto____$1){
var s__22747__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22747__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22747__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22749 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22748 = (0);
while(true){
if((i__22748 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22748);
cljs.core.chunk_append(b__22749,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23231 = (i__22748 + (1));
i__22748 = G__23231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22749),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22744_$_iter__22746(cljs.core.chunk_rest(s__22747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22749),null);
}
} else {
var warning = cljs.core.first(s__22747__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22744_$_iter__22746(cljs.core.rest(s__22747__$2)));
}
} else {
return null;
}
break;
}
});})(s__22745__$1,map__22750,map__22750__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22743,map__22743__$1,msg,info,reload_info))
,null,null));
});})(s__22745__$1,map__22750,map__22750__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22743,map__22743__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22744(cljs.core.rest(s__22745__$1)));
} else {
var G__23234 = cljs.core.rest(s__22745__$1);
s__22745__$1 = G__23234;
continue;
}
} else {
var G__23235 = cljs.core.rest(s__22745__$1);
s__22745__$1 = G__23235;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22751_23236 = cljs.core.seq(warnings);
var chunk__22752_23237 = null;
var count__22753_23238 = (0);
var i__22754_23239 = (0);
while(true){
if((i__22754_23239 < count__22753_23238)){
var map__22757_23240 = chunk__22752_23237.cljs$core$IIndexed$_nth$arity$2(null,i__22754_23239);
var map__22757_23241__$1 = cljs.core.__destructure_map(map__22757_23240);
var w_23242 = map__22757_23241__$1;
var msg_23243__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22757_23241__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22757_23241__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22757_23241__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22757_23241__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23246)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23244),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23245),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23243__$1)].join(''));


var G__23250 = seq__22751_23236;
var G__23251 = chunk__22752_23237;
var G__23252 = count__22753_23238;
var G__23253 = (i__22754_23239 + (1));
seq__22751_23236 = G__23250;
chunk__22752_23237 = G__23251;
count__22753_23238 = G__23252;
i__22754_23239 = G__23253;
continue;
} else {
var temp__5804__auto___23254 = cljs.core.seq(seq__22751_23236);
if(temp__5804__auto___23254){
var seq__22751_23256__$1 = temp__5804__auto___23254;
if(cljs.core.chunked_seq_QMARK_(seq__22751_23256__$1)){
var c__5568__auto___23257 = cljs.core.chunk_first(seq__22751_23256__$1);
var G__23258 = cljs.core.chunk_rest(seq__22751_23256__$1);
var G__23259 = c__5568__auto___23257;
var G__23260 = cljs.core.count(c__5568__auto___23257);
var G__23261 = (0);
seq__22751_23236 = G__23258;
chunk__22752_23237 = G__23259;
count__22753_23238 = G__23260;
i__22754_23239 = G__23261;
continue;
} else {
var map__22758_23262 = cljs.core.first(seq__22751_23256__$1);
var map__22758_23263__$1 = cljs.core.__destructure_map(map__22758_23262);
var w_23264 = map__22758_23263__$1;
var msg_23265__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22758_23263__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22758_23263__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22758_23263__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22758_23263__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23268)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23266),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23267),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23265__$1)].join(''));


var G__23269 = cljs.core.next(seq__22751_23256__$1);
var G__23270 = null;
var G__23271 = (0);
var G__23272 = (0);
seq__22751_23236 = G__23269;
chunk__22752_23237 = G__23270;
count__22753_23238 = G__23271;
i__22754_23239 = G__23272;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22741_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22741_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22764){
var map__22765 = p__22764;
var map__22765__$1 = cljs.core.__destructure_map(map__22765);
var msg = map__22765__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22765__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22765__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22766 = cljs.core.seq(updates);
var chunk__22768 = null;
var count__22769 = (0);
var i__22770 = (0);
while(true){
if((i__22770 < count__22769)){
var path = chunk__22768.cljs$core$IIndexed$_nth$arity$2(null,i__22770);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22991_23275 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22995_23276 = null;
var count__22996_23277 = (0);
var i__22997_23278 = (0);
while(true){
if((i__22997_23278 < count__22996_23277)){
var node_23279 = chunk__22995_23276.cljs$core$IIndexed$_nth$arity$2(null,i__22997_23278);
if(cljs.core.not(node_23279.shadow$old)){
var path_match_23281 = shadow.cljs.devtools.client.browser.match_paths(node_23279.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23281)){
var new_link_23283 = (function (){var G__23033 = node_23279.cloneNode(true);
G__23033.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23281),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23033;
})();
(node_23279.shadow$old = true);

(new_link_23283.onload = ((function (seq__22991_23275,chunk__22995_23276,count__22996_23277,i__22997_23278,seq__22766,chunk__22768,count__22769,i__22770,new_link_23283,path_match_23281,node_23279,path,map__22765,map__22765__$1,msg,updates,reload_info){
return (function (e){
var seq__23034_23285 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23036_23286 = null;
var count__23037_23287 = (0);
var i__23038_23288 = (0);
while(true){
if((i__23038_23288 < count__23037_23287)){
var map__23042_23290 = chunk__23036_23286.cljs$core$IIndexed$_nth$arity$2(null,i__23038_23288);
var map__23042_23291__$1 = cljs.core.__destructure_map(map__23042_23290);
var task_23292 = map__23042_23291__$1;
var fn_str_23293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23042_23291__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23042_23291__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23295 = goog.getObjectByName(fn_str_23293,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23294)].join(''));

(fn_obj_23295.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23295.cljs$core$IFn$_invoke$arity$2(path,new_link_23283) : fn_obj_23295.call(null,path,new_link_23283));


var G__23296 = seq__23034_23285;
var G__23297 = chunk__23036_23286;
var G__23298 = count__23037_23287;
var G__23299 = (i__23038_23288 + (1));
seq__23034_23285 = G__23296;
chunk__23036_23286 = G__23297;
count__23037_23287 = G__23298;
i__23038_23288 = G__23299;
continue;
} else {
var temp__5804__auto___23300 = cljs.core.seq(seq__23034_23285);
if(temp__5804__auto___23300){
var seq__23034_23301__$1 = temp__5804__auto___23300;
if(cljs.core.chunked_seq_QMARK_(seq__23034_23301__$1)){
var c__5568__auto___23302 = cljs.core.chunk_first(seq__23034_23301__$1);
var G__23304 = cljs.core.chunk_rest(seq__23034_23301__$1);
var G__23305 = c__5568__auto___23302;
var G__23306 = cljs.core.count(c__5568__auto___23302);
var G__23307 = (0);
seq__23034_23285 = G__23304;
chunk__23036_23286 = G__23305;
count__23037_23287 = G__23306;
i__23038_23288 = G__23307;
continue;
} else {
var map__23047_23308 = cljs.core.first(seq__23034_23301__$1);
var map__23047_23309__$1 = cljs.core.__destructure_map(map__23047_23308);
var task_23310 = map__23047_23309__$1;
var fn_str_23311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23047_23309__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23047_23309__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23315 = goog.getObjectByName(fn_str_23311,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23312)].join(''));

(fn_obj_23315.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23315.cljs$core$IFn$_invoke$arity$2(path,new_link_23283) : fn_obj_23315.call(null,path,new_link_23283));


var G__23316 = cljs.core.next(seq__23034_23301__$1);
var G__23317 = null;
var G__23318 = (0);
var G__23319 = (0);
seq__23034_23285 = G__23316;
chunk__23036_23286 = G__23317;
count__23037_23287 = G__23318;
i__23038_23288 = G__23319;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23279);
});})(seq__22991_23275,chunk__22995_23276,count__22996_23277,i__22997_23278,seq__22766,chunk__22768,count__22769,i__22770,new_link_23283,path_match_23281,node_23279,path,map__22765,map__22765__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23281], 0));

goog.dom.insertSiblingAfter(new_link_23283,node_23279);


var G__23321 = seq__22991_23275;
var G__23322 = chunk__22995_23276;
var G__23323 = count__22996_23277;
var G__23324 = (i__22997_23278 + (1));
seq__22991_23275 = G__23321;
chunk__22995_23276 = G__23322;
count__22996_23277 = G__23323;
i__22997_23278 = G__23324;
continue;
} else {
var G__23325 = seq__22991_23275;
var G__23326 = chunk__22995_23276;
var G__23327 = count__22996_23277;
var G__23328 = (i__22997_23278 + (1));
seq__22991_23275 = G__23325;
chunk__22995_23276 = G__23326;
count__22996_23277 = G__23327;
i__22997_23278 = G__23328;
continue;
}
} else {
var G__23329 = seq__22991_23275;
var G__23330 = chunk__22995_23276;
var G__23331 = count__22996_23277;
var G__23332 = (i__22997_23278 + (1));
seq__22991_23275 = G__23329;
chunk__22995_23276 = G__23330;
count__22996_23277 = G__23331;
i__22997_23278 = G__23332;
continue;
}
} else {
var temp__5804__auto___23333 = cljs.core.seq(seq__22991_23275);
if(temp__5804__auto___23333){
var seq__22991_23334__$1 = temp__5804__auto___23333;
if(cljs.core.chunked_seq_QMARK_(seq__22991_23334__$1)){
var c__5568__auto___23335 = cljs.core.chunk_first(seq__22991_23334__$1);
var G__23336 = cljs.core.chunk_rest(seq__22991_23334__$1);
var G__23337 = c__5568__auto___23335;
var G__23338 = cljs.core.count(c__5568__auto___23335);
var G__23339 = (0);
seq__22991_23275 = G__23336;
chunk__22995_23276 = G__23337;
count__22996_23277 = G__23338;
i__22997_23278 = G__23339;
continue;
} else {
var node_23340 = cljs.core.first(seq__22991_23334__$1);
if(cljs.core.not(node_23340.shadow$old)){
var path_match_23342 = shadow.cljs.devtools.client.browser.match_paths(node_23340.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23342)){
var new_link_23343 = (function (){var G__23048 = node_23340.cloneNode(true);
G__23048.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23342),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23048;
})();
(node_23340.shadow$old = true);

(new_link_23343.onload = ((function (seq__22991_23275,chunk__22995_23276,count__22996_23277,i__22997_23278,seq__22766,chunk__22768,count__22769,i__22770,new_link_23343,path_match_23342,node_23340,seq__22991_23334__$1,temp__5804__auto___23333,path,map__22765,map__22765__$1,msg,updates,reload_info){
return (function (e){
var seq__23049_23347 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23051_23348 = null;
var count__23052_23349 = (0);
var i__23053_23350 = (0);
while(true){
if((i__23053_23350 < count__23052_23349)){
var map__23059_23351 = chunk__23051_23348.cljs$core$IIndexed$_nth$arity$2(null,i__23053_23350);
var map__23059_23352__$1 = cljs.core.__destructure_map(map__23059_23351);
var task_23353 = map__23059_23352__$1;
var fn_str_23354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23059_23352__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23059_23352__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23356 = goog.getObjectByName(fn_str_23354,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23355)].join(''));

(fn_obj_23356.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23356.cljs$core$IFn$_invoke$arity$2(path,new_link_23343) : fn_obj_23356.call(null,path,new_link_23343));


var G__23357 = seq__23049_23347;
var G__23358 = chunk__23051_23348;
var G__23359 = count__23052_23349;
var G__23360 = (i__23053_23350 + (1));
seq__23049_23347 = G__23357;
chunk__23051_23348 = G__23358;
count__23052_23349 = G__23359;
i__23053_23350 = G__23360;
continue;
} else {
var temp__5804__auto___23362__$1 = cljs.core.seq(seq__23049_23347);
if(temp__5804__auto___23362__$1){
var seq__23049_23363__$1 = temp__5804__auto___23362__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23049_23363__$1)){
var c__5568__auto___23364 = cljs.core.chunk_first(seq__23049_23363__$1);
var G__23365 = cljs.core.chunk_rest(seq__23049_23363__$1);
var G__23366 = c__5568__auto___23364;
var G__23367 = cljs.core.count(c__5568__auto___23364);
var G__23368 = (0);
seq__23049_23347 = G__23365;
chunk__23051_23348 = G__23366;
count__23052_23349 = G__23367;
i__23053_23350 = G__23368;
continue;
} else {
var map__23060_23369 = cljs.core.first(seq__23049_23363__$1);
var map__23060_23370__$1 = cljs.core.__destructure_map(map__23060_23369);
var task_23371 = map__23060_23370__$1;
var fn_str_23372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23060_23370__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23060_23370__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23375 = goog.getObjectByName(fn_str_23372,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23373)].join(''));

(fn_obj_23375.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23375.cljs$core$IFn$_invoke$arity$2(path,new_link_23343) : fn_obj_23375.call(null,path,new_link_23343));


var G__23377 = cljs.core.next(seq__23049_23363__$1);
var G__23378 = null;
var G__23379 = (0);
var G__23380 = (0);
seq__23049_23347 = G__23377;
chunk__23051_23348 = G__23378;
count__23052_23349 = G__23379;
i__23053_23350 = G__23380;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23340);
});})(seq__22991_23275,chunk__22995_23276,count__22996_23277,i__22997_23278,seq__22766,chunk__22768,count__22769,i__22770,new_link_23343,path_match_23342,node_23340,seq__22991_23334__$1,temp__5804__auto___23333,path,map__22765,map__22765__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23342], 0));

goog.dom.insertSiblingAfter(new_link_23343,node_23340);


var G__23381 = cljs.core.next(seq__22991_23334__$1);
var G__23382 = null;
var G__23383 = (0);
var G__23384 = (0);
seq__22991_23275 = G__23381;
chunk__22995_23276 = G__23382;
count__22996_23277 = G__23383;
i__22997_23278 = G__23384;
continue;
} else {
var G__23385 = cljs.core.next(seq__22991_23334__$1);
var G__23386 = null;
var G__23387 = (0);
var G__23388 = (0);
seq__22991_23275 = G__23385;
chunk__22995_23276 = G__23386;
count__22996_23277 = G__23387;
i__22997_23278 = G__23388;
continue;
}
} else {
var G__23389 = cljs.core.next(seq__22991_23334__$1);
var G__23390 = null;
var G__23391 = (0);
var G__23392 = (0);
seq__22991_23275 = G__23389;
chunk__22995_23276 = G__23390;
count__22996_23277 = G__23391;
i__22997_23278 = G__23392;
continue;
}
}
} else {
}
}
break;
}


var G__23393 = seq__22766;
var G__23394 = chunk__22768;
var G__23395 = count__22769;
var G__23396 = (i__22770 + (1));
seq__22766 = G__23393;
chunk__22768 = G__23394;
count__22769 = G__23395;
i__22770 = G__23396;
continue;
} else {
var G__23397 = seq__22766;
var G__23398 = chunk__22768;
var G__23399 = count__22769;
var G__23400 = (i__22770 + (1));
seq__22766 = G__23397;
chunk__22768 = G__23398;
count__22769 = G__23399;
i__22770 = G__23400;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22766);
if(temp__5804__auto__){
var seq__22766__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22766__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22766__$1);
var G__23401 = cljs.core.chunk_rest(seq__22766__$1);
var G__23402 = c__5568__auto__;
var G__23403 = cljs.core.count(c__5568__auto__);
var G__23404 = (0);
seq__22766 = G__23401;
chunk__22768 = G__23402;
count__22769 = G__23403;
i__22770 = G__23404;
continue;
} else {
var path = cljs.core.first(seq__22766__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23063_23405 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23067_23406 = null;
var count__23068_23407 = (0);
var i__23069_23408 = (0);
while(true){
if((i__23069_23408 < count__23068_23407)){
var node_23409 = chunk__23067_23406.cljs$core$IIndexed$_nth$arity$2(null,i__23069_23408);
if(cljs.core.not(node_23409.shadow$old)){
var path_match_23410 = shadow.cljs.devtools.client.browser.match_paths(node_23409.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23410)){
var new_link_23411 = (function (){var G__23104 = node_23409.cloneNode(true);
G__23104.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23410),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23104;
})();
(node_23409.shadow$old = true);

(new_link_23411.onload = ((function (seq__23063_23405,chunk__23067_23406,count__23068_23407,i__23069_23408,seq__22766,chunk__22768,count__22769,i__22770,new_link_23411,path_match_23410,node_23409,path,seq__22766__$1,temp__5804__auto__,map__22765,map__22765__$1,msg,updates,reload_info){
return (function (e){
var seq__23105_23412 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23107_23413 = null;
var count__23108_23414 = (0);
var i__23109_23415 = (0);
while(true){
if((i__23109_23415 < count__23108_23414)){
var map__23113_23417 = chunk__23107_23413.cljs$core$IIndexed$_nth$arity$2(null,i__23109_23415);
var map__23113_23418__$1 = cljs.core.__destructure_map(map__23113_23417);
var task_23419 = map__23113_23418__$1;
var fn_str_23420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23113_23418__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23113_23418__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23423 = goog.getObjectByName(fn_str_23420,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23421)].join(''));

(fn_obj_23423.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23423.cljs$core$IFn$_invoke$arity$2(path,new_link_23411) : fn_obj_23423.call(null,path,new_link_23411));


var G__23424 = seq__23105_23412;
var G__23425 = chunk__23107_23413;
var G__23426 = count__23108_23414;
var G__23427 = (i__23109_23415 + (1));
seq__23105_23412 = G__23424;
chunk__23107_23413 = G__23425;
count__23108_23414 = G__23426;
i__23109_23415 = G__23427;
continue;
} else {
var temp__5804__auto___23428__$1 = cljs.core.seq(seq__23105_23412);
if(temp__5804__auto___23428__$1){
var seq__23105_23429__$1 = temp__5804__auto___23428__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23105_23429__$1)){
var c__5568__auto___23430 = cljs.core.chunk_first(seq__23105_23429__$1);
var G__23431 = cljs.core.chunk_rest(seq__23105_23429__$1);
var G__23432 = c__5568__auto___23430;
var G__23433 = cljs.core.count(c__5568__auto___23430);
var G__23434 = (0);
seq__23105_23412 = G__23431;
chunk__23107_23413 = G__23432;
count__23108_23414 = G__23433;
i__23109_23415 = G__23434;
continue;
} else {
var map__23116_23435 = cljs.core.first(seq__23105_23429__$1);
var map__23116_23436__$1 = cljs.core.__destructure_map(map__23116_23435);
var task_23437 = map__23116_23436__$1;
var fn_str_23438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23116_23436__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23116_23436__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23440 = goog.getObjectByName(fn_str_23438,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23439)].join(''));

(fn_obj_23440.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23440.cljs$core$IFn$_invoke$arity$2(path,new_link_23411) : fn_obj_23440.call(null,path,new_link_23411));


var G__23442 = cljs.core.next(seq__23105_23429__$1);
var G__23443 = null;
var G__23444 = (0);
var G__23445 = (0);
seq__23105_23412 = G__23442;
chunk__23107_23413 = G__23443;
count__23108_23414 = G__23444;
i__23109_23415 = G__23445;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23409);
});})(seq__23063_23405,chunk__23067_23406,count__23068_23407,i__23069_23408,seq__22766,chunk__22768,count__22769,i__22770,new_link_23411,path_match_23410,node_23409,path,seq__22766__$1,temp__5804__auto__,map__22765,map__22765__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23410], 0));

goog.dom.insertSiblingAfter(new_link_23411,node_23409);


var G__23446 = seq__23063_23405;
var G__23447 = chunk__23067_23406;
var G__23448 = count__23068_23407;
var G__23449 = (i__23069_23408 + (1));
seq__23063_23405 = G__23446;
chunk__23067_23406 = G__23447;
count__23068_23407 = G__23448;
i__23069_23408 = G__23449;
continue;
} else {
var G__23450 = seq__23063_23405;
var G__23451 = chunk__23067_23406;
var G__23452 = count__23068_23407;
var G__23453 = (i__23069_23408 + (1));
seq__23063_23405 = G__23450;
chunk__23067_23406 = G__23451;
count__23068_23407 = G__23452;
i__23069_23408 = G__23453;
continue;
}
} else {
var G__23454 = seq__23063_23405;
var G__23455 = chunk__23067_23406;
var G__23456 = count__23068_23407;
var G__23457 = (i__23069_23408 + (1));
seq__23063_23405 = G__23454;
chunk__23067_23406 = G__23455;
count__23068_23407 = G__23456;
i__23069_23408 = G__23457;
continue;
}
} else {
var temp__5804__auto___23458__$1 = cljs.core.seq(seq__23063_23405);
if(temp__5804__auto___23458__$1){
var seq__23063_23459__$1 = temp__5804__auto___23458__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23063_23459__$1)){
var c__5568__auto___23460 = cljs.core.chunk_first(seq__23063_23459__$1);
var G__23461 = cljs.core.chunk_rest(seq__23063_23459__$1);
var G__23462 = c__5568__auto___23460;
var G__23463 = cljs.core.count(c__5568__auto___23460);
var G__23464 = (0);
seq__23063_23405 = G__23461;
chunk__23067_23406 = G__23462;
count__23068_23407 = G__23463;
i__23069_23408 = G__23464;
continue;
} else {
var node_23465 = cljs.core.first(seq__23063_23459__$1);
if(cljs.core.not(node_23465.shadow$old)){
var path_match_23466 = shadow.cljs.devtools.client.browser.match_paths(node_23465.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23466)){
var new_link_23467 = (function (){var G__23117 = node_23465.cloneNode(true);
G__23117.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23466),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23117;
})();
(node_23465.shadow$old = true);

(new_link_23467.onload = ((function (seq__23063_23405,chunk__23067_23406,count__23068_23407,i__23069_23408,seq__22766,chunk__22768,count__22769,i__22770,new_link_23467,path_match_23466,node_23465,seq__23063_23459__$1,temp__5804__auto___23458__$1,path,seq__22766__$1,temp__5804__auto__,map__22765,map__22765__$1,msg,updates,reload_info){
return (function (e){
var seq__23118_23469 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23120_23470 = null;
var count__23121_23471 = (0);
var i__23122_23472 = (0);
while(true){
if((i__23122_23472 < count__23121_23471)){
var map__23127_23473 = chunk__23120_23470.cljs$core$IIndexed$_nth$arity$2(null,i__23122_23472);
var map__23127_23474__$1 = cljs.core.__destructure_map(map__23127_23473);
var task_23475 = map__23127_23474__$1;
var fn_str_23476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23127_23474__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23127_23474__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23479 = goog.getObjectByName(fn_str_23476,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23477)].join(''));

(fn_obj_23479.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23479.cljs$core$IFn$_invoke$arity$2(path,new_link_23467) : fn_obj_23479.call(null,path,new_link_23467));


var G__23480 = seq__23118_23469;
var G__23481 = chunk__23120_23470;
var G__23482 = count__23121_23471;
var G__23483 = (i__23122_23472 + (1));
seq__23118_23469 = G__23480;
chunk__23120_23470 = G__23481;
count__23121_23471 = G__23482;
i__23122_23472 = G__23483;
continue;
} else {
var temp__5804__auto___23484__$2 = cljs.core.seq(seq__23118_23469);
if(temp__5804__auto___23484__$2){
var seq__23118_23485__$1 = temp__5804__auto___23484__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23118_23485__$1)){
var c__5568__auto___23486 = cljs.core.chunk_first(seq__23118_23485__$1);
var G__23487 = cljs.core.chunk_rest(seq__23118_23485__$1);
var G__23488 = c__5568__auto___23486;
var G__23489 = cljs.core.count(c__5568__auto___23486);
var G__23490 = (0);
seq__23118_23469 = G__23487;
chunk__23120_23470 = G__23488;
count__23121_23471 = G__23489;
i__23122_23472 = G__23490;
continue;
} else {
var map__23128_23492 = cljs.core.first(seq__23118_23485__$1);
var map__23128_23493__$1 = cljs.core.__destructure_map(map__23128_23492);
var task_23494 = map__23128_23493__$1;
var fn_str_23495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23128_23493__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23128_23493__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23497 = goog.getObjectByName(fn_str_23495,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23496)].join(''));

(fn_obj_23497.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23497.cljs$core$IFn$_invoke$arity$2(path,new_link_23467) : fn_obj_23497.call(null,path,new_link_23467));


var G__23498 = cljs.core.next(seq__23118_23485__$1);
var G__23499 = null;
var G__23500 = (0);
var G__23501 = (0);
seq__23118_23469 = G__23498;
chunk__23120_23470 = G__23499;
count__23121_23471 = G__23500;
i__23122_23472 = G__23501;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23465);
});})(seq__23063_23405,chunk__23067_23406,count__23068_23407,i__23069_23408,seq__22766,chunk__22768,count__22769,i__22770,new_link_23467,path_match_23466,node_23465,seq__23063_23459__$1,temp__5804__auto___23458__$1,path,seq__22766__$1,temp__5804__auto__,map__22765,map__22765__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23466], 0));

goog.dom.insertSiblingAfter(new_link_23467,node_23465);


var G__23502 = cljs.core.next(seq__23063_23459__$1);
var G__23503 = null;
var G__23504 = (0);
var G__23505 = (0);
seq__23063_23405 = G__23502;
chunk__23067_23406 = G__23503;
count__23068_23407 = G__23504;
i__23069_23408 = G__23505;
continue;
} else {
var G__23507 = cljs.core.next(seq__23063_23459__$1);
var G__23508 = null;
var G__23509 = (0);
var G__23510 = (0);
seq__23063_23405 = G__23507;
chunk__23067_23406 = G__23508;
count__23068_23407 = G__23509;
i__23069_23408 = G__23510;
continue;
}
} else {
var G__23511 = cljs.core.next(seq__23063_23459__$1);
var G__23512 = null;
var G__23513 = (0);
var G__23514 = (0);
seq__23063_23405 = G__23511;
chunk__23067_23406 = G__23512;
count__23068_23407 = G__23513;
i__23069_23408 = G__23514;
continue;
}
}
} else {
}
}
break;
}


var G__23515 = cljs.core.next(seq__22766__$1);
var G__23516 = null;
var G__23517 = (0);
var G__23518 = (0);
seq__22766 = G__23515;
chunk__22768 = G__23516;
count__22769 = G__23517;
i__22770 = G__23518;
continue;
} else {
var G__23520 = cljs.core.next(seq__22766__$1);
var G__23521 = null;
var G__23522 = (0);
var G__23523 = (0);
seq__22766 = G__23520;
chunk__22768 = G__23521;
count__22769 = G__23522;
i__22770 = G__23523;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__23133){
var map__23134 = p__23133;
var map__23134__$1 = cljs.core.__destructure_map(map__23134);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23134__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__23140){
var map__23141 = p__23140;
var map__23141__$1 = cljs.core.__destructure_map(map__23141);
var _ = map__23141__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23141__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23142,done,error){
var map__23144 = p__23142;
var map__23144__$1 = cljs.core.__destructure_map(map__23144);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23144__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23151,done,error){
var map__23153 = p__23151;
var map__23153__$1 = cljs.core.__destructure_map(map__23153);
var msg = map__23153__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23153__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23153__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23153__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23155){
var map__23157 = p__23155;
var map__23157__$1 = cljs.core.__destructure_map(map__23157);
var src = map__23157__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23157__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23161 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23161) : done.call(null,G__23161));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23166){
var map__23167 = p__23166;
var map__23167__$1 = cljs.core.__destructure_map(map__23167);
var msg__$1 = map__23167__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23167__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23168){var ex = e23168;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23172){
var map__23173 = p__23172;
var map__23173__$1 = cljs.core.__destructure_map(map__23173);
var env = map__23173__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23185){
var map__23186 = p__23185;
var map__23186__$1 = cljs.core.__destructure_map(map__23186);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23186__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23186__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23195){
var map__23197 = p__23195;
var map__23197__$1 = cljs.core.__destructure_map(map__23197);
var svc = map__23197__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23197__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
