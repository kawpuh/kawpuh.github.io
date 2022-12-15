goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__7503__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7504__i = 0, G__7504__a = new Array(arguments.length -  0);
while (G__7504__i < G__7504__a.length) {G__7504__a[G__7504__i] = arguments[G__7504__i + 0]; ++G__7504__i;}
  args = new cljs.core.IndexedSeq(G__7504__a,0,null);
} 
return G__7503__delegate.call(this,args);};
G__7503.cljs$lang$maxFixedArity = 0;
G__7503.cljs$lang$applyTo = (function (arglist__7505){
var args = cljs.core.seq(arglist__7505);
return G__7503__delegate(args);
});
G__7503.cljs$core$IFn$_invoke$arity$variadic = G__7503__delegate;
return G__7503;
})()
);

(o.error = (function() { 
var G__7506__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7507__i = 0, G__7507__a = new Array(arguments.length -  0);
while (G__7507__i < G__7507__a.length) {G__7507__a[G__7507__i] = arguments[G__7507__i + 0]; ++G__7507__i;}
  args = new cljs.core.IndexedSeq(G__7507__a,0,null);
} 
return G__7506__delegate.call(this,args);};
G__7506.cljs$lang$maxFixedArity = 0;
G__7506.cljs$lang$applyTo = (function (arglist__7508){
var args = cljs.core.seq(arglist__7508);
return G__7506__delegate(args);
});
G__7506.cljs$core$IFn$_invoke$arity$variadic = G__7506__delegate;
return G__7506;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
