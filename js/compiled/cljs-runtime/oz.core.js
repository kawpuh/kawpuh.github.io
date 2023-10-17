goog.provide('oz.core');
cljs.core.enable_console_print_BANG_();
oz.core.apply_log_level = (function oz$core$apply_log_level(p__13877){
var map__13878 = p__13877;
var map__13878__$1 = cljs.core.__destructure_map(map__13878);
var opts = map__13878__$1;
var log_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13878__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
if((((log_level instanceof cljs.core.Keyword)) || (typeof log_level === 'string'))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"log-level","log-level",862121670)),new cljs.core.Keyword(null,"logLevel","logLevel",1131406165),(function (){var G__13879 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(log_level);
var G__13879__$1 = (((G__13879 instanceof cljs.core.Keyword))?G__13879.fqn:null);
switch (G__13879__$1) {
case "debug":
return shadow.js.shim.module$vega.Debug;

break;
case "info":
return shadow.js.shim.module$vega.Info;

break;
case "warn":
return shadow.js.shim.module$vega.Warn;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13879__$1)].join('')));

}
})());
} else {
return opts;
}
});
oz.core.embed_vega = (function oz$core$embed_vega(var_args){
var G__13881 = arguments.length;
switch (G__13881) {
case 2:
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.embed_vega.cljs$core$IFn$_invoke$arity$2 = (function (elem,doc){
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3(elem,doc,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3 = (function (elem,doc,p__13882){
var map__13883 = p__13882;
var map__13883__$1 = cljs.core.__destructure_map(map__13883);
var opts = map__13883__$1;
var view_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13883__$1,new cljs.core.Keyword(null,"view-callback","view-callback",797033263));
if(cljs.core.truth_(doc)){
var doc__$1 = cljs.core.clj__GT_js(doc);
var opts__$1 = oz.core.apply_log_level(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"mode","mode",654403691),"vega-lite"], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"view-callback","view-callback",797033263))], 0)));
var opts__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null),opts__$1], 0));
return shadow.js.shim.module$vega_embed(elem,doc__$1,cljs.core.clj__GT_js(opts__$2)).then((function (res){
if(cljs.core.truth_(view_callback)){
var G__13884 = res.view;
return (view_callback.cljs$core$IFn$_invoke$arity$1 ? view_callback.cljs$core$IFn$_invoke$arity$1(G__13884) : view_callback.call(null,G__13884));
} else {
return null;
}
})).catch((function (err){
return console.log(err);
}));
} else {
return null;
}
}));

(oz.core.embed_vega.cljs$lang$maxFixedArity = 3);

oz.core.update_vega = (function oz$core$update_vega(elem,old_doc,new_doc,old_opts,new_opts){
var G__13885 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"always-rerender","always-rerender",1736797242).cljs$core$IFn$_invoke$arity$1(new_opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(old_doc,new cljs.core.Keyword(null,"data","data",-232669377)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_doc,new cljs.core.Keyword(null,"data","data",-232669377)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_opts,new_opts)));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"embed-vega","embed-vega",-617762446,null),G__13885)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"elem","elem",-2035804713,null),G__13885)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new-doc","new-doc",795331265,null),G__13885)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new-opts","new-opts",-1018023265,null),G__13885)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
return null;

}
}
}
}
});
/**
 * Reagent component that renders vega
 */
oz.core.vega = (function oz$core$vega(var_args){
var G__13887 = arguments.length;
switch (G__13887) {
case 1:
return oz.core.vega.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oz.core.vega.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.vega.cljs$core$IFn$_invoke$arity$1 = (function (doc){
return oz.core.vega.cljs$core$IFn$_invoke$arity$2(doc,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.vega.cljs$core$IFn$_invoke$arity$2 = (function (doc,opts){
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"vega"], null),opts], 0));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"vega",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3(reagent.dom.dom_node(this$),doc,opts__$1);
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (this$,p__13888){
var vec__13889 = p__13888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13889,(0),null);
var new_doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13889,(1),null);
var new_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13889,(2),null);
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3(reagent.dom.dom_node(this$),new_doc,new_opts);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (doc__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viz","div.viz",1155063891)], null);
})], null));
}));

(oz.core.vega.cljs$lang$maxFixedArity = 2);

/**
 * Reagent component that renders vega-lite.
 */
oz.core.vega_lite = (function oz$core$vega_lite(var_args){
var G__13893 = arguments.length;
switch (G__13893) {
case 1:
return oz.core.vega_lite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oz.core.vega_lite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.vega_lite.cljs$core$IFn$_invoke$arity$1 = (function (doc){
return oz.core.vega_lite.cljs$core$IFn$_invoke$arity$2(doc,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.vega_lite.cljs$core$IFn$_invoke$arity$2 = (function (doc,opts){
return oz.core.vega.cljs$core$IFn$_invoke$arity$2(doc,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"vega-lite"], null)], 0)));
}));

(oz.core.vega_lite.cljs$lang$maxFixedArity = 2);

oz.core.live_viewers_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vega","vega",-1657843081),oz.core.vega,new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),oz.core.vega_lite], null));
oz.core.register_live_view = (function oz$core$register_live_view(key,component){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(oz.core.live_viewers_state,cljs.core.assoc,key,component);
});
oz.core.register_live_views = (function oz$core$register_live_views(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13931 = arguments.length;
var i__5770__auto___13932 = (0);
while(true){
if((i__5770__auto___13932 < len__5769__auto___13931)){
args__5775__auto__.push((arguments[i__5770__auto___13932]));

var G__13933 = (i__5770__auto___13932 + (1));
i__5770__auto___13932 = G__13933;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic = (function (p__13895){
var map__13896 = p__13895;
var map__13896__$1 = cljs.core.__destructure_map(map__13896);
var live_views = map__13896__$1;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(oz.core.live_viewers_state,cljs.core.merge,live_views);
}));

(oz.core.register_live_views.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oz.core.register_live_views.cljs$lang$applyTo = (function (seq13894){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13894));
}));

oz.core.default_data_table_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"per-page","per-page",-54905429),(50),new cljs.core.Keyword(null,"tr-style","tr-style",1853585605),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"td-style","td-style",1948769874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10)], null),new cljs.core.Keyword(null,"th-style","th-style",-1504296072),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null);
oz.core.data_table = (function oz$core$data_table(var_args){
var G__13898 = arguments.length;
switch (G__13898) {
case 1:
return oz.core.data_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oz.core.data_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.data_table.cljs$core$IFn$_invoke$arity$1 = (function (data){
return oz.core.data_table.cljs$core$IFn$_invoke$arity$2(data,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.data_table.cljs$core$IFn$_invoke$arity$2 = (function (data,p__13899){
var map__13900 = p__13899;
var map__13900__$1 = cljs.core.__destructure_map(map__13900);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13900__$1,new cljs.core.Keyword(null,"page","page",849072397));
var sort_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13900__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13900__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),(function (){var or__5045__auto__ = page;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),sort_key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),(function (){var or__5045__auto__ = sort_order;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"ascending","ascending",-988350486);
}
})()], null));
var header = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.keys),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),data)));
return (function (data__$1,opts){
var map__13901 = cljs.core.deref(state);
var map__13901__$1 = cljs.core.__destructure_map(map__13901);
var page__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13901__$1,new cljs.core.Keyword(null,"page","page",849072397));
var sort_key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13901__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13901__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var map__13902 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (opt1,opt2){
if(((cljs.core.map_QMARK_(opt1)) && (cljs.core.map_QMARK_(opt2)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt1,opt2], 0));
} else {
return opt2;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oz.core.default_data_table_opts,opts], 0));
var map__13902__$1 = cljs.core.__destructure_map(map__13902);
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13902__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var tr_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13902__$1,new cljs.core.Keyword(null,"tr-style","tr-style",1853585605));
var td_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13902__$1,new cljs.core.Keyword(null,"td-style","td-style",1948769874));
var th_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13902__$1,new cljs.core.Keyword(null,"th-style","th-style",-1504296072));
var scoped_data = (function (){var G__13903 = data__$1;
var G__13903__$1 = (cljs.core.truth_(sort_key__$1)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_key__$1,G__13903):G__13903);
var G__13903__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"descending","descending",-24766135),sort_order__$1))?cljs.core.reverse(G__13903__$1):G__13903__$1);
var G__13903__$3 = (cljs.core.truth_(per_page)?cljs.core.drop.cljs$core$IFn$_invoke$arity$2((per_page * page__$1),G__13903__$2):G__13903__$2);
if(cljs.core.truth_(per_page)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(per_page,G__13903__$3);
} else {
return G__13903__$3;
}
})();
var last_page = cljs.core.quot(cljs.core.count(data__$1),per_page);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((cljs.core.count(data__$1) > per_page))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(20)], null)], null),"Current page: ",(page__$1 + (1))], null),(((page__$1 > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function() { 
var G__13953__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.dec);
};
var G__13953 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__13954__i = 0, G__13954__a = new Array(arguments.length -  0);
while (G__13954__i < G__13954__a.length) {G__13954__a[G__13954__i] = arguments[G__13954__i + 0]; ++G__13954__i;}
  _ = new cljs.core.IndexedSeq(G__13954__a,0,null);
} 
return G__13953__delegate.call(this,_);};
G__13953.cljs$lang$maxFixedArity = 0;
G__13953.cljs$lang$applyTo = (function (arglist__13955){
var _ = cljs.core.seq(arglist__13955);
return G__13953__delegate(_);
});
G__13953.cljs$core$IFn$_invoke$arity$variadic = G__13953__delegate;
return G__13953;
})()
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"prev"], null):null),(((page__$1 < last_page))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function() { 
var G__13956__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.inc);
};
var G__13956 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__13957__i = 0, G__13957__a = new Array(arguments.length -  0);
while (G__13957__i < G__13957__a.length) {G__13957__a[G__13957__i] = arguments[G__13957__i + 0]; ++G__13957__i;}
  _ = new cljs.core.IndexedSeq(G__13957__a,0,null);
} 
return G__13956__delegate.call(this,_);};
G__13956.cljs$lang$maxFixedArity = 0;
G__13956.cljs$lang$applyTo = (function (arglist__13958){
var _ = cljs.core.seq(arglist__13958);
return G__13956__delegate(_);
});
G__13956.cljs$core$IFn$_invoke$arity$variadic = G__13956__delegate;
return G__13956;
})()
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"next"], null):null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__5523__auto__ = (function oz$core$iter__13904(s__13905){
return (new cljs.core.LazySeq(null,(function (){
var s__13905__$1 = s__13905;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13905__$1);
if(temp__5804__auto__){
var s__13905__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13905__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13905__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13907 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13906 = (0);
while(true){
if((i__13906 < size__5522__auto__)){
var key = cljs.core._nth(c__5521__auto__,i__13906);
cljs.core.chunk_append(b__13907,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),th_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13906,key,c__5521__auto__,size__5522__auto__,b__13907,s__13905__$2,temp__5804__auto__,map__13901,map__13901__$1,page__$1,sort_key__$1,sort_order__$1,map__13902,map__13902__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__13900,map__13900__$1,page,sort_key,sort_order){
return (function() { 
var G__13970__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sort_key__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order__$1,new cljs.core.Keyword(null,"ascending","ascending",-988350486)))))?new cljs.core.Keyword(null,"descending","descending",-24766135):new cljs.core.Keyword(null,"ascending","ascending",-988350486))], null));
};
var G__13970 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__13971__i = 0, G__13971__a = new Array(arguments.length -  0);
while (G__13971__i < G__13971__a.length) {G__13971__a[G__13971__i] = arguments[G__13971__i + 0]; ++G__13971__i;}
  _ = new cljs.core.IndexedSeq(G__13971__a,0,null);
} 
return G__13970__delegate.call(this,_);};
G__13970.cljs$lang$maxFixedArity = 0;
G__13970.cljs$lang$applyTo = (function (arglist__13972){
var _ = cljs.core.seq(arglist__13972);
return G__13970__delegate(_);
});
G__13970.cljs$core$IFn$_invoke$arity$variadic = G__13970__delegate;
return G__13970;
})()
;})(i__13906,key,c__5521__auto__,size__5522__auto__,b__13907,s__13905__$2,temp__5804__auto__,map__13901,map__13901__$1,page__$1,sort_key__$1,sort_order__$1,map__13902,map__13902__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__13900,map__13900__$1,page,sort_key,sort_order))
], null),cljs.core.name(key),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key__$1,key))?(function (){var G__13908 = sort_order__$1;
var G__13908__$1 = (((G__13908 instanceof cljs.core.Keyword))?G__13908.fqn:null);
switch (G__13908__$1) {
case "ascending":
return "\u2303";

break;
case "descending":
return "\u2304";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13908__$1)].join('')));

}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__13982 = (i__13906 + (1));
i__13906 = G__13982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13907),oz$core$iter__13904(cljs.core.chunk_rest(s__13905__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13907),null);
}
} else {
var key = cljs.core.first(s__13905__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),th_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (key,s__13905__$2,temp__5804__auto__,map__13901,map__13901__$1,page__$1,sort_key__$1,sort_order__$1,map__13902,map__13902__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__13900,map__13900__$1,page,sort_key,sort_order){
return (function() { 
var G__13983__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sort_key__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order__$1,new cljs.core.Keyword(null,"ascending","ascending",-988350486)))))?new cljs.core.Keyword(null,"descending","descending",-24766135):new cljs.core.Keyword(null,"ascending","ascending",-988350486))], null));
};
var G__13983 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__13984__i = 0, G__13984__a = new Array(arguments.length -  0);
while (G__13984__i < G__13984__a.length) {G__13984__a[G__13984__i] = arguments[G__13984__i + 0]; ++G__13984__i;}
  _ = new cljs.core.IndexedSeq(G__13984__a,0,null);
} 
return G__13983__delegate.call(this,_);};
G__13983.cljs$lang$maxFixedArity = 0;
G__13983.cljs$lang$applyTo = (function (arglist__13985){
var _ = cljs.core.seq(arglist__13985);
return G__13983__delegate(_);
});
G__13983.cljs$core$IFn$_invoke$arity$variadic = G__13983__delegate;
return G__13983;
})()
;})(key,s__13905__$2,temp__5804__auto__,map__13901,map__13901__$1,page__$1,sort_key__$1,sort_order__$1,map__13902,map__13902__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__13900,map__13900__$1,page,sort_key,sort_order))
], null),cljs.core.name(key),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key__$1,key))?(function (){var G__13909 = sort_order__$1;
var G__13909__$1 = (((G__13909 instanceof cljs.core.Keyword))?G__13909.fqn:null);
switch (G__13909__$1) {
case "ascending":
return "\u2303";

break;
case "descending":
return "\u2304";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13909__$1)].join('')));

}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__13904(cljs.core.rest(s__13905__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(header);
})()], null),(function (){var iter__5523__auto__ = (function oz$core$iter__13910(s__13911){
return (new cljs.core.LazySeq(null,(function (){
var s__13911__$1 = s__13911;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13911__$1);
if(temp__5804__auto__){
var s__13911__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13911__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13911__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13913 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13912 = (0);
while(true){
if((i__13912 < size__5522__auto__)){
var row = cljs.core._nth(c__5521__auto__,i__13912);
cljs.core.chunk_append(b__13913,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__5523__auto__ = ((function (i__13912,row,c__5521__auto__,size__5522__auto__,b__13913,s__13911__$2,temp__5804__auto__,map__13901,map__13901__$1,page__$1,sort_key__$1,sort_order__$1,map__13902,map__13902__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__13900,map__13900__$1,page,sort_key,sort_order){
return (function oz$core$iter__13910_$_iter__13914(s__13915){
return (new cljs.core.LazySeq(null,((function (i__13912,row,c__5521__auto__,size__5522__auto__,b__13913,s__13911__$2,temp__5804__auto__,map__13901,map__13901__$1,page__$1,sort_key__$1,sort_order__$1,map__13902,map__13902__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__13900,map__13900__$1,page,sort_key,sort_order){
return (function (){
var s__13915__$1 = s__13915;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13915__$1);
if(temp__5804__auto____$1){
var s__13915__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13915__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__13915__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__13917 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__13916 = (0);
while(true){
if((i__13916 < size__5522__auto____$1)){
var key = cljs.core._nth(c__5521__auto____$1,i__13916);
cljs.core.chunk_append(b__13917,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__13987 = (i__13916 + (1));
i__13916 = G__13987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13917),oz$core$iter__13910_$_iter__13914(cljs.core.chunk_rest(s__13915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13917),null);
}
} else {
var key = cljs.core.first(s__13915__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__13910_$_iter__13914(cljs.core.rest(s__13915__$2)));
}
} else {
return null;
}
break;
}
});})(i__13912,row,c__5521__auto__,size__5522__auto__,b__13913,s__13911__$2,temp__5804__auto__,map__13901,map__13901__$1,page__$1,sort_key__$1,sort_order__$1,map__13902,map__13902__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__13900,map__13900__$1,page,sort_key,sort_order))
,null,null));
});})(i__13912,row,c__5521__auto__,size__5522__auto__,b__13913,s__13911__$2,temp__5804__auto__,map__13901,map__13901__$1,page__$1,sort_key__$1,sort_order__$1,map__13902,map__13902__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__13900,map__13900__$1,page,sort_key,sort_order))
;
return iter__5523__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)));

var G__13988 = (i__13912 + (1));
i__13912 = G__13988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13913),oz$core$iter__13910(cljs.core.chunk_rest(s__13911__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13913),null);
}
} else {
var row = cljs.core.first(s__13911__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__5523__auto__ = ((function (row,s__13911__$2,temp__5804__auto__,map__13901,map__13901__$1,page__$1,sort_key__$1,sort_order__$1,map__13902,map__13902__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__13900,map__13900__$1,page,sort_key,sort_order){
return (function oz$core$iter__13910_$_iter__13918(s__13919){
return (new cljs.core.LazySeq(null,(function (){
var s__13919__$1 = s__13919;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13919__$1);
if(temp__5804__auto____$1){
var s__13919__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13919__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13919__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13921 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13920 = (0);
while(true){
if((i__13920 < size__5522__auto__)){
var key = cljs.core._nth(c__5521__auto__,i__13920);
cljs.core.chunk_append(b__13921,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__13993 = (i__13920 + (1));
i__13920 = G__13993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13921),oz$core$iter__13910_$_iter__13918(cljs.core.chunk_rest(s__13919__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13921),null);
}
} else {
var key = cljs.core.first(s__13919__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__13910_$_iter__13918(cljs.core.rest(s__13919__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__13911__$2,temp__5804__auto__,map__13901,map__13901__$1,page__$1,sort_key__$1,sort_order__$1,map__13902,map__13902__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__13900,map__13900__$1,page,sort_key,sort_order))
;
return iter__5523__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)),oz$core$iter__13910(cljs.core.rest(s__13911__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(scoped_data);
})()], null)], null);
});
}));

(oz.core.data_table.cljs$lang$maxFixedArity = 2);

oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vega","vega",-1657843081),oz.core.vega,new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),oz.core.vega_lite,new cljs.core.Keyword(null,"data-table","data-table",-149582774),oz.core.data_table], 0));
oz.core.live_view = (function oz$core$live_view(doc){
var live_viewers = cljs.core.deref(oz.core.live_viewers_state);
var live_viewer_keys = cljs.core.set(cljs.core.keys(live_viewers));
return clojure.walk.prewalk((function (x){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.coll_QMARK_(x);
if(and__5043__auto__){
var G__13922 = cljs.core.first(x);
return (live_viewer_keys.cljs$core$IFn$_invoke$arity$1 ? live_viewer_keys.cljs$core$IFn$_invoke$arity$1(G__13922) : live_viewer_keys.call(null,G__13922));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(live_viewers,cljs.core.first(x))], null),cljs.core.rest(x));
} else {
return x;
}
}),doc);
});
oz.core.view_spec = oz.core.live_view;

//# sourceMappingURL=oz.core.js.map
