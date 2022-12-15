goog.provide('reagent.dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return shadow.js.shim.module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__8088 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__8089 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__8089);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__8090 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__8091 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__8091);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__8090);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__8088);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__8096 = arguments.length;
switch (G__8096) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__8098 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8098,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8098,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return shadow.js.shim.module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__8106_8132 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__8107_8133 = null;
var count__8108_8134 = (0);
var i__8109_8135 = (0);
while(true){
if((i__8109_8135 < count__8108_8134)){
var vec__8120_8136 = chunk__8107_8133.cljs$core$IIndexed$_nth$arity$2(null,i__8109_8135);
var container_8137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8120_8136,(0),null);
var comp_8138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8120_8136,(1),null);
reagent.dom.re_render_component(comp_8138,container_8137);


var G__8139 = seq__8106_8132;
var G__8140 = chunk__8107_8133;
var G__8141 = count__8108_8134;
var G__8142 = (i__8109_8135 + (1));
seq__8106_8132 = G__8139;
chunk__8107_8133 = G__8140;
count__8108_8134 = G__8141;
i__8109_8135 = G__8142;
continue;
} else {
var temp__5804__auto___8143 = cljs.core.seq(seq__8106_8132);
if(temp__5804__auto___8143){
var seq__8106_8144__$1 = temp__5804__auto___8143;
if(cljs.core.chunked_seq_QMARK_(seq__8106_8144__$1)){
var c__5568__auto___8145 = cljs.core.chunk_first(seq__8106_8144__$1);
var G__8146 = cljs.core.chunk_rest(seq__8106_8144__$1);
var G__8147 = c__5568__auto___8145;
var G__8148 = cljs.core.count(c__5568__auto___8145);
var G__8149 = (0);
seq__8106_8132 = G__8146;
chunk__8107_8133 = G__8147;
count__8108_8134 = G__8148;
i__8109_8135 = G__8149;
continue;
} else {
var vec__8123_8150 = cljs.core.first(seq__8106_8144__$1);
var container_8151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8123_8150,(0),null);
var comp_8152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8123_8150,(1),null);
reagent.dom.re_render_component(comp_8152,container_8151);


var G__8153 = cljs.core.next(seq__8106_8144__$1);
var G__8154 = null;
var G__8155 = (0);
var G__8156 = (0);
seq__8106_8132 = G__8153;
chunk__8107_8133 = G__8154;
count__8108_8134 = G__8155;
i__8109_8135 = G__8156;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
