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
var G__10937__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10938__i = 0, G__10938__a = new Array(arguments.length -  0);
while (G__10938__i < G__10938__a.length) {G__10938__a[G__10938__i] = arguments[G__10938__i + 0]; ++G__10938__i;}
  args = new cljs.core.IndexedSeq(G__10938__a,0,null);
} 
return G__10937__delegate.call(this,args);};
G__10937.cljs$lang$maxFixedArity = 0;
G__10937.cljs$lang$applyTo = (function (arglist__10939){
var args = cljs.core.seq(arglist__10939);
return G__10937__delegate(args);
});
G__10937.cljs$core$IFn$_invoke$arity$variadic = G__10937__delegate;
return G__10937;
})()
);

(o.error = (function() { 
var G__10940__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10941__i = 0, G__10941__a = new Array(arguments.length -  0);
while (G__10941__i < G__10941__a.length) {G__10941__a[G__10941__i] = arguments[G__10941__i + 0]; ++G__10941__i;}
  args = new cljs.core.IndexedSeq(G__10941__a,0,null);
} 
return G__10940__delegate.call(this,args);};
G__10940.cljs$lang$maxFixedArity = 0;
G__10940.cljs$lang$applyTo = (function (arglist__10942){
var args = cljs.core.seq(arglist__10942);
return G__10940__delegate(args);
});
G__10940.cljs$core$IFn$_invoke$arity$variadic = G__10940__delegate;
return G__10940;
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
