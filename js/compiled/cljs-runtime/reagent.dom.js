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
var _STAR_always_update_STAR__orig_val__12186 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12187 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12187);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__12188 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12189 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12189);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12188);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12186);
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
var G__12204 = arguments.length;
switch (G__12204) {
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

var vec__12213 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12213,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12213,(1),null);
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

var seq__12223_12245 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__12224_12246 = null;
var count__12225_12247 = (0);
var i__12226_12248 = (0);
while(true){
if((i__12226_12248 < count__12225_12247)){
var vec__12233_12250 = chunk__12224_12246.cljs$core$IIndexed$_nth$arity$2(null,i__12226_12248);
var container_12251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12233_12250,(0),null);
var comp_12252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12233_12250,(1),null);
reagent.dom.re_render_component(comp_12252,container_12251);


var G__12253 = seq__12223_12245;
var G__12254 = chunk__12224_12246;
var G__12255 = count__12225_12247;
var G__12256 = (i__12226_12248 + (1));
seq__12223_12245 = G__12253;
chunk__12224_12246 = G__12254;
count__12225_12247 = G__12255;
i__12226_12248 = G__12256;
continue;
} else {
var temp__5804__auto___12257 = cljs.core.seq(seq__12223_12245);
if(temp__5804__auto___12257){
var seq__12223_12258__$1 = temp__5804__auto___12257;
if(cljs.core.chunked_seq_QMARK_(seq__12223_12258__$1)){
var c__5568__auto___12259 = cljs.core.chunk_first(seq__12223_12258__$1);
var G__12260 = cljs.core.chunk_rest(seq__12223_12258__$1);
var G__12261 = c__5568__auto___12259;
var G__12262 = cljs.core.count(c__5568__auto___12259);
var G__12263 = (0);
seq__12223_12245 = G__12260;
chunk__12224_12246 = G__12261;
count__12225_12247 = G__12262;
i__12226_12248 = G__12263;
continue;
} else {
var vec__12238_12264 = cljs.core.first(seq__12223_12258__$1);
var container_12265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12238_12264,(0),null);
var comp_12266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12238_12264,(1),null);
reagent.dom.re_render_component(comp_12266,container_12265);


var G__12267 = cljs.core.next(seq__12223_12258__$1);
var G__12268 = null;
var G__12269 = (0);
var G__12270 = (0);
seq__12223_12245 = G__12267;
chunk__12224_12246 = G__12268;
count__12225_12247 = G__12269;
i__12226_12248 = G__12270;
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
