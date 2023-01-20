goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17693 = arguments.length;
var i__5770__auto___17694 = (0);
while(true){
if((i__5770__auto___17694 < len__5769__auto___17693)){
args__5775__auto__.push((arguments[i__5770__auto___17694]));

var G__17695 = (i__5770__auto___17694 + (1));
i__5770__auto___17694 = G__17695;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq17410){
var G__17411 = cljs.core.first(seq17410);
var seq17410__$1 = cljs.core.next(seq17410);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17411,seq17410__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__17413 = cljs.core.seq(sources);
var chunk__17414 = null;
var count__17415 = (0);
var i__17416 = (0);
while(true){
if((i__17416 < count__17415)){
var map__17422 = chunk__17414.cljs$core$IIndexed$_nth$arity$2(null,i__17416);
var map__17422__$1 = cljs.core.__destructure_map(map__17422);
var src = map__17422__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17422__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17422__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17422__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17422__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17424){var e_17696 = e17424;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_17696);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_17696.message)].join('')));
}

var G__17697 = seq__17413;
var G__17698 = chunk__17414;
var G__17699 = count__17415;
var G__17700 = (i__17416 + (1));
seq__17413 = G__17697;
chunk__17414 = G__17698;
count__17415 = G__17699;
i__17416 = G__17700;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17413);
if(temp__5804__auto__){
var seq__17413__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17413__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17413__$1);
var G__17701 = cljs.core.chunk_rest(seq__17413__$1);
var G__17702 = c__5568__auto__;
var G__17703 = cljs.core.count(c__5568__auto__);
var G__17704 = (0);
seq__17413 = G__17701;
chunk__17414 = G__17702;
count__17415 = G__17703;
i__17416 = G__17704;
continue;
} else {
var map__17425 = cljs.core.first(seq__17413__$1);
var map__17425__$1 = cljs.core.__destructure_map(map__17425);
var src = map__17425__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17425__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17425__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17425__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17425__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17426){var e_17705 = e17426;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_17705);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_17705.message)].join('')));
}

var G__17706 = cljs.core.next(seq__17413__$1);
var G__17707 = null;
var G__17708 = (0);
var G__17709 = (0);
seq__17413 = G__17706;
chunk__17414 = G__17707;
count__17415 = G__17708;
i__17416 = G__17709;
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
var seq__17427 = cljs.core.seq(js_requires);
var chunk__17428 = null;
var count__17429 = (0);
var i__17430 = (0);
while(true){
if((i__17430 < count__17429)){
var js_ns = chunk__17428.cljs$core$IIndexed$_nth$arity$2(null,i__17430);
var require_str_17710 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_17710);


var G__17711 = seq__17427;
var G__17712 = chunk__17428;
var G__17713 = count__17429;
var G__17714 = (i__17430 + (1));
seq__17427 = G__17711;
chunk__17428 = G__17712;
count__17429 = G__17713;
i__17430 = G__17714;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17427);
if(temp__5804__auto__){
var seq__17427__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17427__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17427__$1);
var G__17715 = cljs.core.chunk_rest(seq__17427__$1);
var G__17716 = c__5568__auto__;
var G__17717 = cljs.core.count(c__5568__auto__);
var G__17718 = (0);
seq__17427 = G__17715;
chunk__17428 = G__17716;
count__17429 = G__17717;
i__17430 = G__17718;
continue;
} else {
var js_ns = cljs.core.first(seq__17427__$1);
var require_str_17719 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_17719);


var G__17720 = cljs.core.next(seq__17427__$1);
var G__17721 = null;
var G__17722 = (0);
var G__17723 = (0);
seq__17427 = G__17720;
chunk__17428 = G__17721;
count__17429 = G__17722;
i__17430 = G__17723;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__17432){
var map__17433 = p__17432;
var map__17433__$1 = cljs.core.__destructure_map(map__17433);
var msg = map__17433__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17433__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17433__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17434(s__17435){
return (new cljs.core.LazySeq(null,(function (){
var s__17435__$1 = s__17435;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17435__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__17440 = cljs.core.first(xs__6360__auto__);
var map__17440__$1 = cljs.core.__destructure_map(map__17440);
var src = map__17440__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17440__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17440__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__17435__$1,map__17440,map__17440__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17433,map__17433__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17434_$_iter__17436(s__17437){
return (new cljs.core.LazySeq(null,((function (s__17435__$1,map__17440,map__17440__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17433,map__17433__$1,msg,info,reload_info){
return (function (){
var s__17437__$1 = s__17437;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17437__$1);
if(temp__5804__auto____$1){
var s__17437__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17437__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17437__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17439 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17438 = (0);
while(true){
if((i__17438 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__17438);
cljs.core.chunk_append(b__17439,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__17724 = (i__17438 + (1));
i__17438 = G__17724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17439),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17434_$_iter__17436(cljs.core.chunk_rest(s__17437__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17439),null);
}
} else {
var warning = cljs.core.first(s__17437__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17434_$_iter__17436(cljs.core.rest(s__17437__$2)));
}
} else {
return null;
}
break;
}
});})(s__17435__$1,map__17440,map__17440__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17433,map__17433__$1,msg,info,reload_info))
,null,null));
});})(s__17435__$1,map__17440,map__17440__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17433,map__17433__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17434(cljs.core.rest(s__17435__$1)));
} else {
var G__17725 = cljs.core.rest(s__17435__$1);
s__17435__$1 = G__17725;
continue;
}
} else {
var G__17726 = cljs.core.rest(s__17435__$1);
s__17435__$1 = G__17726;
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
var seq__17441_17727 = cljs.core.seq(warnings);
var chunk__17442_17728 = null;
var count__17443_17729 = (0);
var i__17444_17730 = (0);
while(true){
if((i__17444_17730 < count__17443_17729)){
var map__17447_17731 = chunk__17442_17728.cljs$core$IIndexed$_nth$arity$2(null,i__17444_17730);
var map__17447_17732__$1 = cljs.core.__destructure_map(map__17447_17731);
var w_17733 = map__17447_17732__$1;
var msg_17734__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17447_17732__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_17735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17447_17732__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_17736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17447_17732__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_17737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17447_17732__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_17737)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_17735),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_17736),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_17734__$1)].join(''));


var G__17738 = seq__17441_17727;
var G__17739 = chunk__17442_17728;
var G__17740 = count__17443_17729;
var G__17741 = (i__17444_17730 + (1));
seq__17441_17727 = G__17738;
chunk__17442_17728 = G__17739;
count__17443_17729 = G__17740;
i__17444_17730 = G__17741;
continue;
} else {
var temp__5804__auto___17742 = cljs.core.seq(seq__17441_17727);
if(temp__5804__auto___17742){
var seq__17441_17743__$1 = temp__5804__auto___17742;
if(cljs.core.chunked_seq_QMARK_(seq__17441_17743__$1)){
var c__5568__auto___17744 = cljs.core.chunk_first(seq__17441_17743__$1);
var G__17745 = cljs.core.chunk_rest(seq__17441_17743__$1);
var G__17746 = c__5568__auto___17744;
var G__17747 = cljs.core.count(c__5568__auto___17744);
var G__17748 = (0);
seq__17441_17727 = G__17745;
chunk__17442_17728 = G__17746;
count__17443_17729 = G__17747;
i__17444_17730 = G__17748;
continue;
} else {
var map__17448_17749 = cljs.core.first(seq__17441_17743__$1);
var map__17448_17750__$1 = cljs.core.__destructure_map(map__17448_17749);
var w_17751 = map__17448_17750__$1;
var msg_17752__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448_17750__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_17753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448_17750__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_17754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448_17750__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_17755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448_17750__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_17755)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_17753),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_17754),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_17752__$1)].join(''));


var G__17756 = cljs.core.next(seq__17441_17743__$1);
var G__17757 = null;
var G__17758 = (0);
var G__17759 = (0);
seq__17441_17727 = G__17756;
chunk__17442_17728 = G__17757;
count__17443_17729 = G__17758;
i__17444_17730 = G__17759;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__17431_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__17431_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__17449){
var map__17450 = p__17449;
var map__17450__$1 = cljs.core.__destructure_map(map__17450);
var msg = map__17450__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__17451 = cljs.core.seq(updates);
var chunk__17453 = null;
var count__17454 = (0);
var i__17455 = (0);
while(true){
if((i__17455 < count__17454)){
var path = chunk__17453.cljs$core$IIndexed$_nth$arity$2(null,i__17455);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__17565_17760 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__17569_17761 = null;
var count__17570_17762 = (0);
var i__17571_17763 = (0);
while(true){
if((i__17571_17763 < count__17570_17762)){
var node_17764 = chunk__17569_17761.cljs$core$IIndexed$_nth$arity$2(null,i__17571_17763);
if(cljs.core.not(node_17764.shadow$old)){
var path_match_17765 = shadow.cljs.devtools.client.browser.match_paths(node_17764.getAttribute("href"),path);
if(cljs.core.truth_(path_match_17765)){
var new_link_17766 = (function (){var G__17597 = node_17764.cloneNode(true);
G__17597.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_17765),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__17597;
})();
(node_17764.shadow$old = true);

(new_link_17766.onload = ((function (seq__17565_17760,chunk__17569_17761,count__17570_17762,i__17571_17763,seq__17451,chunk__17453,count__17454,i__17455,new_link_17766,path_match_17765,node_17764,path,map__17450,map__17450__$1,msg,updates,reload_info){
return (function (e){
var seq__17598_17767 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__17600_17768 = null;
var count__17601_17769 = (0);
var i__17602_17770 = (0);
while(true){
if((i__17602_17770 < count__17601_17769)){
var map__17606_17771 = chunk__17600_17768.cljs$core$IIndexed$_nth$arity$2(null,i__17602_17770);
var map__17606_17772__$1 = cljs.core.__destructure_map(map__17606_17771);
var task_17773 = map__17606_17772__$1;
var fn_str_17774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17606_17772__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_17775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17606_17772__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_17776 = goog.getObjectByName(fn_str_17774,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_17775)].join(''));

(fn_obj_17776.cljs$core$IFn$_invoke$arity$2 ? fn_obj_17776.cljs$core$IFn$_invoke$arity$2(path,new_link_17766) : fn_obj_17776.call(null,path,new_link_17766));


var G__17777 = seq__17598_17767;
var G__17778 = chunk__17600_17768;
var G__17779 = count__17601_17769;
var G__17780 = (i__17602_17770 + (1));
seq__17598_17767 = G__17777;
chunk__17600_17768 = G__17778;
count__17601_17769 = G__17779;
i__17602_17770 = G__17780;
continue;
} else {
var temp__5804__auto___17781 = cljs.core.seq(seq__17598_17767);
if(temp__5804__auto___17781){
var seq__17598_17782__$1 = temp__5804__auto___17781;
if(cljs.core.chunked_seq_QMARK_(seq__17598_17782__$1)){
var c__5568__auto___17783 = cljs.core.chunk_first(seq__17598_17782__$1);
var G__17784 = cljs.core.chunk_rest(seq__17598_17782__$1);
var G__17785 = c__5568__auto___17783;
var G__17786 = cljs.core.count(c__5568__auto___17783);
var G__17787 = (0);
seq__17598_17767 = G__17784;
chunk__17600_17768 = G__17785;
count__17601_17769 = G__17786;
i__17602_17770 = G__17787;
continue;
} else {
var map__17607_17788 = cljs.core.first(seq__17598_17782__$1);
var map__17607_17789__$1 = cljs.core.__destructure_map(map__17607_17788);
var task_17790 = map__17607_17789__$1;
var fn_str_17791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17607_17789__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_17792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17607_17789__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_17793 = goog.getObjectByName(fn_str_17791,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_17792)].join(''));

(fn_obj_17793.cljs$core$IFn$_invoke$arity$2 ? fn_obj_17793.cljs$core$IFn$_invoke$arity$2(path,new_link_17766) : fn_obj_17793.call(null,path,new_link_17766));


var G__17794 = cljs.core.next(seq__17598_17782__$1);
var G__17795 = null;
var G__17796 = (0);
var G__17797 = (0);
seq__17598_17767 = G__17794;
chunk__17600_17768 = G__17795;
count__17601_17769 = G__17796;
i__17602_17770 = G__17797;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_17764);
});})(seq__17565_17760,chunk__17569_17761,count__17570_17762,i__17571_17763,seq__17451,chunk__17453,count__17454,i__17455,new_link_17766,path_match_17765,node_17764,path,map__17450,map__17450__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_17765], 0));

goog.dom.insertSiblingAfter(new_link_17766,node_17764);


var G__17798 = seq__17565_17760;
var G__17799 = chunk__17569_17761;
var G__17800 = count__17570_17762;
var G__17801 = (i__17571_17763 + (1));
seq__17565_17760 = G__17798;
chunk__17569_17761 = G__17799;
count__17570_17762 = G__17800;
i__17571_17763 = G__17801;
continue;
} else {
var G__17802 = seq__17565_17760;
var G__17803 = chunk__17569_17761;
var G__17804 = count__17570_17762;
var G__17805 = (i__17571_17763 + (1));
seq__17565_17760 = G__17802;
chunk__17569_17761 = G__17803;
count__17570_17762 = G__17804;
i__17571_17763 = G__17805;
continue;
}
} else {
var G__17806 = seq__17565_17760;
var G__17807 = chunk__17569_17761;
var G__17808 = count__17570_17762;
var G__17809 = (i__17571_17763 + (1));
seq__17565_17760 = G__17806;
chunk__17569_17761 = G__17807;
count__17570_17762 = G__17808;
i__17571_17763 = G__17809;
continue;
}
} else {
var temp__5804__auto___17810 = cljs.core.seq(seq__17565_17760);
if(temp__5804__auto___17810){
var seq__17565_17811__$1 = temp__5804__auto___17810;
if(cljs.core.chunked_seq_QMARK_(seq__17565_17811__$1)){
var c__5568__auto___17812 = cljs.core.chunk_first(seq__17565_17811__$1);
var G__17813 = cljs.core.chunk_rest(seq__17565_17811__$1);
var G__17814 = c__5568__auto___17812;
var G__17815 = cljs.core.count(c__5568__auto___17812);
var G__17816 = (0);
seq__17565_17760 = G__17813;
chunk__17569_17761 = G__17814;
count__17570_17762 = G__17815;
i__17571_17763 = G__17816;
continue;
} else {
var node_17817 = cljs.core.first(seq__17565_17811__$1);
if(cljs.core.not(node_17817.shadow$old)){
var path_match_17818 = shadow.cljs.devtools.client.browser.match_paths(node_17817.getAttribute("href"),path);
if(cljs.core.truth_(path_match_17818)){
var new_link_17819 = (function (){var G__17608 = node_17817.cloneNode(true);
G__17608.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_17818),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__17608;
})();
(node_17817.shadow$old = true);

(new_link_17819.onload = ((function (seq__17565_17760,chunk__17569_17761,count__17570_17762,i__17571_17763,seq__17451,chunk__17453,count__17454,i__17455,new_link_17819,path_match_17818,node_17817,seq__17565_17811__$1,temp__5804__auto___17810,path,map__17450,map__17450__$1,msg,updates,reload_info){
return (function (e){
var seq__17609_17820 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__17611_17821 = null;
var count__17612_17822 = (0);
var i__17613_17823 = (0);
while(true){
if((i__17613_17823 < count__17612_17822)){
var map__17617_17824 = chunk__17611_17821.cljs$core$IIndexed$_nth$arity$2(null,i__17613_17823);
var map__17617_17825__$1 = cljs.core.__destructure_map(map__17617_17824);
var task_17826 = map__17617_17825__$1;
var fn_str_17827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17617_17825__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_17828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17617_17825__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_17829 = goog.getObjectByName(fn_str_17827,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_17828)].join(''));

(fn_obj_17829.cljs$core$IFn$_invoke$arity$2 ? fn_obj_17829.cljs$core$IFn$_invoke$arity$2(path,new_link_17819) : fn_obj_17829.call(null,path,new_link_17819));


var G__17830 = seq__17609_17820;
var G__17831 = chunk__17611_17821;
var G__17832 = count__17612_17822;
var G__17833 = (i__17613_17823 + (1));
seq__17609_17820 = G__17830;
chunk__17611_17821 = G__17831;
count__17612_17822 = G__17832;
i__17613_17823 = G__17833;
continue;
} else {
var temp__5804__auto___17834__$1 = cljs.core.seq(seq__17609_17820);
if(temp__5804__auto___17834__$1){
var seq__17609_17835__$1 = temp__5804__auto___17834__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17609_17835__$1)){
var c__5568__auto___17836 = cljs.core.chunk_first(seq__17609_17835__$1);
var G__17837 = cljs.core.chunk_rest(seq__17609_17835__$1);
var G__17838 = c__5568__auto___17836;
var G__17839 = cljs.core.count(c__5568__auto___17836);
var G__17840 = (0);
seq__17609_17820 = G__17837;
chunk__17611_17821 = G__17838;
count__17612_17822 = G__17839;
i__17613_17823 = G__17840;
continue;
} else {
var map__17618_17841 = cljs.core.first(seq__17609_17835__$1);
var map__17618_17842__$1 = cljs.core.__destructure_map(map__17618_17841);
var task_17843 = map__17618_17842__$1;
var fn_str_17844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17618_17842__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_17845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17618_17842__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_17846 = goog.getObjectByName(fn_str_17844,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_17845)].join(''));

(fn_obj_17846.cljs$core$IFn$_invoke$arity$2 ? fn_obj_17846.cljs$core$IFn$_invoke$arity$2(path,new_link_17819) : fn_obj_17846.call(null,path,new_link_17819));


var G__17847 = cljs.core.next(seq__17609_17835__$1);
var G__17848 = null;
var G__17849 = (0);
var G__17850 = (0);
seq__17609_17820 = G__17847;
chunk__17611_17821 = G__17848;
count__17612_17822 = G__17849;
i__17613_17823 = G__17850;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_17817);
});})(seq__17565_17760,chunk__17569_17761,count__17570_17762,i__17571_17763,seq__17451,chunk__17453,count__17454,i__17455,new_link_17819,path_match_17818,node_17817,seq__17565_17811__$1,temp__5804__auto___17810,path,map__17450,map__17450__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_17818], 0));

goog.dom.insertSiblingAfter(new_link_17819,node_17817);


var G__17851 = cljs.core.next(seq__17565_17811__$1);
var G__17852 = null;
var G__17853 = (0);
var G__17854 = (0);
seq__17565_17760 = G__17851;
chunk__17569_17761 = G__17852;
count__17570_17762 = G__17853;
i__17571_17763 = G__17854;
continue;
} else {
var G__17855 = cljs.core.next(seq__17565_17811__$1);
var G__17856 = null;
var G__17857 = (0);
var G__17858 = (0);
seq__17565_17760 = G__17855;
chunk__17569_17761 = G__17856;
count__17570_17762 = G__17857;
i__17571_17763 = G__17858;
continue;
}
} else {
var G__17859 = cljs.core.next(seq__17565_17811__$1);
var G__17860 = null;
var G__17861 = (0);
var G__17862 = (0);
seq__17565_17760 = G__17859;
chunk__17569_17761 = G__17860;
count__17570_17762 = G__17861;
i__17571_17763 = G__17862;
continue;
}
}
} else {
}
}
break;
}


var G__17863 = seq__17451;
var G__17864 = chunk__17453;
var G__17865 = count__17454;
var G__17866 = (i__17455 + (1));
seq__17451 = G__17863;
chunk__17453 = G__17864;
count__17454 = G__17865;
i__17455 = G__17866;
continue;
} else {
var G__17867 = seq__17451;
var G__17868 = chunk__17453;
var G__17869 = count__17454;
var G__17870 = (i__17455 + (1));
seq__17451 = G__17867;
chunk__17453 = G__17868;
count__17454 = G__17869;
i__17455 = G__17870;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17451);
if(temp__5804__auto__){
var seq__17451__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17451__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17451__$1);
var G__17871 = cljs.core.chunk_rest(seq__17451__$1);
var G__17872 = c__5568__auto__;
var G__17873 = cljs.core.count(c__5568__auto__);
var G__17874 = (0);
seq__17451 = G__17871;
chunk__17453 = G__17872;
count__17454 = G__17873;
i__17455 = G__17874;
continue;
} else {
var path = cljs.core.first(seq__17451__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__17619_17875 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__17623_17876 = null;
var count__17624_17877 = (0);
var i__17625_17878 = (0);
while(true){
if((i__17625_17878 < count__17624_17877)){
var node_17879 = chunk__17623_17876.cljs$core$IIndexed$_nth$arity$2(null,i__17625_17878);
if(cljs.core.not(node_17879.shadow$old)){
var path_match_17880 = shadow.cljs.devtools.client.browser.match_paths(node_17879.getAttribute("href"),path);
if(cljs.core.truth_(path_match_17880)){
var new_link_17881 = (function (){var G__17651 = node_17879.cloneNode(true);
G__17651.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_17880),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__17651;
})();
(node_17879.shadow$old = true);

(new_link_17881.onload = ((function (seq__17619_17875,chunk__17623_17876,count__17624_17877,i__17625_17878,seq__17451,chunk__17453,count__17454,i__17455,new_link_17881,path_match_17880,node_17879,path,seq__17451__$1,temp__5804__auto__,map__17450,map__17450__$1,msg,updates,reload_info){
return (function (e){
var seq__17652_17882 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__17654_17883 = null;
var count__17655_17884 = (0);
var i__17656_17885 = (0);
while(true){
if((i__17656_17885 < count__17655_17884)){
var map__17660_17886 = chunk__17654_17883.cljs$core$IIndexed$_nth$arity$2(null,i__17656_17885);
var map__17660_17887__$1 = cljs.core.__destructure_map(map__17660_17886);
var task_17888 = map__17660_17887__$1;
var fn_str_17889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17660_17887__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_17890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17660_17887__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_17891 = goog.getObjectByName(fn_str_17889,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_17890)].join(''));

(fn_obj_17891.cljs$core$IFn$_invoke$arity$2 ? fn_obj_17891.cljs$core$IFn$_invoke$arity$2(path,new_link_17881) : fn_obj_17891.call(null,path,new_link_17881));


var G__17892 = seq__17652_17882;
var G__17893 = chunk__17654_17883;
var G__17894 = count__17655_17884;
var G__17895 = (i__17656_17885 + (1));
seq__17652_17882 = G__17892;
chunk__17654_17883 = G__17893;
count__17655_17884 = G__17894;
i__17656_17885 = G__17895;
continue;
} else {
var temp__5804__auto___17896__$1 = cljs.core.seq(seq__17652_17882);
if(temp__5804__auto___17896__$1){
var seq__17652_17897__$1 = temp__5804__auto___17896__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17652_17897__$1)){
var c__5568__auto___17898 = cljs.core.chunk_first(seq__17652_17897__$1);
var G__17899 = cljs.core.chunk_rest(seq__17652_17897__$1);
var G__17900 = c__5568__auto___17898;
var G__17901 = cljs.core.count(c__5568__auto___17898);
var G__17902 = (0);
seq__17652_17882 = G__17899;
chunk__17654_17883 = G__17900;
count__17655_17884 = G__17901;
i__17656_17885 = G__17902;
continue;
} else {
var map__17661_17903 = cljs.core.first(seq__17652_17897__$1);
var map__17661_17904__$1 = cljs.core.__destructure_map(map__17661_17903);
var task_17905 = map__17661_17904__$1;
var fn_str_17906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17661_17904__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_17907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17661_17904__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_17908 = goog.getObjectByName(fn_str_17906,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_17907)].join(''));

(fn_obj_17908.cljs$core$IFn$_invoke$arity$2 ? fn_obj_17908.cljs$core$IFn$_invoke$arity$2(path,new_link_17881) : fn_obj_17908.call(null,path,new_link_17881));


var G__17909 = cljs.core.next(seq__17652_17897__$1);
var G__17910 = null;
var G__17911 = (0);
var G__17912 = (0);
seq__17652_17882 = G__17909;
chunk__17654_17883 = G__17910;
count__17655_17884 = G__17911;
i__17656_17885 = G__17912;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_17879);
});})(seq__17619_17875,chunk__17623_17876,count__17624_17877,i__17625_17878,seq__17451,chunk__17453,count__17454,i__17455,new_link_17881,path_match_17880,node_17879,path,seq__17451__$1,temp__5804__auto__,map__17450,map__17450__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_17880], 0));

goog.dom.insertSiblingAfter(new_link_17881,node_17879);


var G__17913 = seq__17619_17875;
var G__17914 = chunk__17623_17876;
var G__17915 = count__17624_17877;
var G__17916 = (i__17625_17878 + (1));
seq__17619_17875 = G__17913;
chunk__17623_17876 = G__17914;
count__17624_17877 = G__17915;
i__17625_17878 = G__17916;
continue;
} else {
var G__17917 = seq__17619_17875;
var G__17918 = chunk__17623_17876;
var G__17919 = count__17624_17877;
var G__17920 = (i__17625_17878 + (1));
seq__17619_17875 = G__17917;
chunk__17623_17876 = G__17918;
count__17624_17877 = G__17919;
i__17625_17878 = G__17920;
continue;
}
} else {
var G__17921 = seq__17619_17875;
var G__17922 = chunk__17623_17876;
var G__17923 = count__17624_17877;
var G__17924 = (i__17625_17878 + (1));
seq__17619_17875 = G__17921;
chunk__17623_17876 = G__17922;
count__17624_17877 = G__17923;
i__17625_17878 = G__17924;
continue;
}
} else {
var temp__5804__auto___17925__$1 = cljs.core.seq(seq__17619_17875);
if(temp__5804__auto___17925__$1){
var seq__17619_17926__$1 = temp__5804__auto___17925__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17619_17926__$1)){
var c__5568__auto___17927 = cljs.core.chunk_first(seq__17619_17926__$1);
var G__17928 = cljs.core.chunk_rest(seq__17619_17926__$1);
var G__17929 = c__5568__auto___17927;
var G__17930 = cljs.core.count(c__5568__auto___17927);
var G__17931 = (0);
seq__17619_17875 = G__17928;
chunk__17623_17876 = G__17929;
count__17624_17877 = G__17930;
i__17625_17878 = G__17931;
continue;
} else {
var node_17932 = cljs.core.first(seq__17619_17926__$1);
if(cljs.core.not(node_17932.shadow$old)){
var path_match_17933 = shadow.cljs.devtools.client.browser.match_paths(node_17932.getAttribute("href"),path);
if(cljs.core.truth_(path_match_17933)){
var new_link_17934 = (function (){var G__17662 = node_17932.cloneNode(true);
G__17662.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_17933),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__17662;
})();
(node_17932.shadow$old = true);

(new_link_17934.onload = ((function (seq__17619_17875,chunk__17623_17876,count__17624_17877,i__17625_17878,seq__17451,chunk__17453,count__17454,i__17455,new_link_17934,path_match_17933,node_17932,seq__17619_17926__$1,temp__5804__auto___17925__$1,path,seq__17451__$1,temp__5804__auto__,map__17450,map__17450__$1,msg,updates,reload_info){
return (function (e){
var seq__17663_17935 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__17665_17936 = null;
var count__17666_17937 = (0);
var i__17667_17938 = (0);
while(true){
if((i__17667_17938 < count__17666_17937)){
var map__17671_17939 = chunk__17665_17936.cljs$core$IIndexed$_nth$arity$2(null,i__17667_17938);
var map__17671_17940__$1 = cljs.core.__destructure_map(map__17671_17939);
var task_17941 = map__17671_17940__$1;
var fn_str_17942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17671_17940__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_17943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17671_17940__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_17944 = goog.getObjectByName(fn_str_17942,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_17943)].join(''));

(fn_obj_17944.cljs$core$IFn$_invoke$arity$2 ? fn_obj_17944.cljs$core$IFn$_invoke$arity$2(path,new_link_17934) : fn_obj_17944.call(null,path,new_link_17934));


var G__17945 = seq__17663_17935;
var G__17946 = chunk__17665_17936;
var G__17947 = count__17666_17937;
var G__17948 = (i__17667_17938 + (1));
seq__17663_17935 = G__17945;
chunk__17665_17936 = G__17946;
count__17666_17937 = G__17947;
i__17667_17938 = G__17948;
continue;
} else {
var temp__5804__auto___17949__$2 = cljs.core.seq(seq__17663_17935);
if(temp__5804__auto___17949__$2){
var seq__17663_17950__$1 = temp__5804__auto___17949__$2;
if(cljs.core.chunked_seq_QMARK_(seq__17663_17950__$1)){
var c__5568__auto___17951 = cljs.core.chunk_first(seq__17663_17950__$1);
var G__17952 = cljs.core.chunk_rest(seq__17663_17950__$1);
var G__17953 = c__5568__auto___17951;
var G__17954 = cljs.core.count(c__5568__auto___17951);
var G__17955 = (0);
seq__17663_17935 = G__17952;
chunk__17665_17936 = G__17953;
count__17666_17937 = G__17954;
i__17667_17938 = G__17955;
continue;
} else {
var map__17672_17956 = cljs.core.first(seq__17663_17950__$1);
var map__17672_17957__$1 = cljs.core.__destructure_map(map__17672_17956);
var task_17958 = map__17672_17957__$1;
var fn_str_17959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17672_17957__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_17960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17672_17957__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_17961 = goog.getObjectByName(fn_str_17959,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_17960)].join(''));

(fn_obj_17961.cljs$core$IFn$_invoke$arity$2 ? fn_obj_17961.cljs$core$IFn$_invoke$arity$2(path,new_link_17934) : fn_obj_17961.call(null,path,new_link_17934));


var G__17962 = cljs.core.next(seq__17663_17950__$1);
var G__17963 = null;
var G__17964 = (0);
var G__17965 = (0);
seq__17663_17935 = G__17962;
chunk__17665_17936 = G__17963;
count__17666_17937 = G__17964;
i__17667_17938 = G__17965;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_17932);
});})(seq__17619_17875,chunk__17623_17876,count__17624_17877,i__17625_17878,seq__17451,chunk__17453,count__17454,i__17455,new_link_17934,path_match_17933,node_17932,seq__17619_17926__$1,temp__5804__auto___17925__$1,path,seq__17451__$1,temp__5804__auto__,map__17450,map__17450__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_17933], 0));

goog.dom.insertSiblingAfter(new_link_17934,node_17932);


var G__17966 = cljs.core.next(seq__17619_17926__$1);
var G__17967 = null;
var G__17968 = (0);
var G__17969 = (0);
seq__17619_17875 = G__17966;
chunk__17623_17876 = G__17967;
count__17624_17877 = G__17968;
i__17625_17878 = G__17969;
continue;
} else {
var G__17970 = cljs.core.next(seq__17619_17926__$1);
var G__17971 = null;
var G__17972 = (0);
var G__17973 = (0);
seq__17619_17875 = G__17970;
chunk__17623_17876 = G__17971;
count__17624_17877 = G__17972;
i__17625_17878 = G__17973;
continue;
}
} else {
var G__17974 = cljs.core.next(seq__17619_17926__$1);
var G__17975 = null;
var G__17976 = (0);
var G__17977 = (0);
seq__17619_17875 = G__17974;
chunk__17623_17876 = G__17975;
count__17624_17877 = G__17976;
i__17625_17878 = G__17977;
continue;
}
}
} else {
}
}
break;
}


var G__17978 = cljs.core.next(seq__17451__$1);
var G__17979 = null;
var G__17980 = (0);
var G__17981 = (0);
seq__17451 = G__17978;
chunk__17453 = G__17979;
count__17454 = G__17980;
i__17455 = G__17981;
continue;
} else {
var G__17982 = cljs.core.next(seq__17451__$1);
var G__17983 = null;
var G__17984 = (0);
var G__17985 = (0);
seq__17451 = G__17982;
chunk__17453 = G__17983;
count__17454 = G__17984;
i__17455 = G__17985;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__17673){
var map__17674 = p__17673;
var map__17674__$1 = cljs.core.__destructure_map(map__17674);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17674__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__17675){
var map__17676 = p__17675;
var map__17676__$1 = cljs.core.__destructure_map(map__17676);
var _ = map__17676__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17676__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__17677,done,error){
var map__17678 = p__17677;
var map__17678__$1 = cljs.core.__destructure_map(map__17678);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17678__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__17679,done,error){
var map__17680 = p__17679;
var map__17680__$1 = cljs.core.__destructure_map(map__17680);
var msg = map__17680__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17680__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17680__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17680__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__17681){
var map__17682 = p__17681;
var map__17682__$1 = cljs.core.__destructure_map(map__17682);
var src = map__17682__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17682__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__17683 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__17683) : done.call(null,G__17683));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__17684){
var map__17685 = p__17684;
var map__17685__$1 = cljs.core.__destructure_map(map__17685);
var msg__$1 = map__17685__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17685__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e17686){var ex = e17686;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__17687){
var map__17688 = p__17687;
var map__17688__$1 = cljs.core.__destructure_map(map__17688);
var env = map__17688__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17688__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__17689){
var map__17690 = p__17689;
var map__17690__$1 = cljs.core.__destructure_map(map__17690);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17690__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17690__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__17691){
var map__17692 = p__17691;
var map__17692__$1 = cljs.core.__destructure_map(map__17692);
var svc = map__17692__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17692__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
