goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20074){
var map__20076 = p__20074;
var map__20076__$1 = cljs.core.__destructure_map(map__20076);
var m = map__20076__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20076__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20076__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20090_20546 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20091_20547 = null;
var count__20092_20548 = (0);
var i__20093_20549 = (0);
while(true){
if((i__20093_20549 < count__20092_20548)){
var f_20550 = chunk__20091_20547.cljs$core$IIndexed$_nth$arity$2(null,i__20093_20549);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20550], 0));


var G__20551 = seq__20090_20546;
var G__20552 = chunk__20091_20547;
var G__20553 = count__20092_20548;
var G__20554 = (i__20093_20549 + (1));
seq__20090_20546 = G__20551;
chunk__20091_20547 = G__20552;
count__20092_20548 = G__20553;
i__20093_20549 = G__20554;
continue;
} else {
var temp__5804__auto___20556 = cljs.core.seq(seq__20090_20546);
if(temp__5804__auto___20556){
var seq__20090_20557__$1 = temp__5804__auto___20556;
if(cljs.core.chunked_seq_QMARK_(seq__20090_20557__$1)){
var c__5568__auto___20558 = cljs.core.chunk_first(seq__20090_20557__$1);
var G__20560 = cljs.core.chunk_rest(seq__20090_20557__$1);
var G__20561 = c__5568__auto___20558;
var G__20562 = cljs.core.count(c__5568__auto___20558);
var G__20563 = (0);
seq__20090_20546 = G__20560;
chunk__20091_20547 = G__20561;
count__20092_20548 = G__20562;
i__20093_20549 = G__20563;
continue;
} else {
var f_20564 = cljs.core.first(seq__20090_20557__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20564], 0));


var G__20568 = cljs.core.next(seq__20090_20557__$1);
var G__20569 = null;
var G__20570 = (0);
var G__20571 = (0);
seq__20090_20546 = G__20568;
chunk__20091_20547 = G__20569;
count__20092_20548 = G__20570;
i__20093_20549 = G__20571;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20573 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20573], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20573)))?cljs.core.second(arglists_20573):arglists_20573)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20117_20585 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20118_20586 = null;
var count__20119_20587 = (0);
var i__20120_20588 = (0);
while(true){
if((i__20120_20588 < count__20119_20587)){
var vec__20153_20590 = chunk__20118_20586.cljs$core$IIndexed$_nth$arity$2(null,i__20120_20588);
var name_20591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20153_20590,(0),null);
var map__20156_20592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20153_20590,(1),null);
var map__20156_20593__$1 = cljs.core.__destructure_map(map__20156_20592);
var doc_20594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20156_20593__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20156_20593__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20591], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20595], 0));

if(cljs.core.truth_(doc_20594)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20594], 0));
} else {
}


var G__20597 = seq__20117_20585;
var G__20598 = chunk__20118_20586;
var G__20599 = count__20119_20587;
var G__20600 = (i__20120_20588 + (1));
seq__20117_20585 = G__20597;
chunk__20118_20586 = G__20598;
count__20119_20587 = G__20599;
i__20120_20588 = G__20600;
continue;
} else {
var temp__5804__auto___20601 = cljs.core.seq(seq__20117_20585);
if(temp__5804__auto___20601){
var seq__20117_20606__$1 = temp__5804__auto___20601;
if(cljs.core.chunked_seq_QMARK_(seq__20117_20606__$1)){
var c__5568__auto___20611 = cljs.core.chunk_first(seq__20117_20606__$1);
var G__20612 = cljs.core.chunk_rest(seq__20117_20606__$1);
var G__20613 = c__5568__auto___20611;
var G__20614 = cljs.core.count(c__5568__auto___20611);
var G__20615 = (0);
seq__20117_20585 = G__20612;
chunk__20118_20586 = G__20613;
count__20119_20587 = G__20614;
i__20120_20588 = G__20615;
continue;
} else {
var vec__20195_20616 = cljs.core.first(seq__20117_20606__$1);
var name_20617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20195_20616,(0),null);
var map__20198_20619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20195_20616,(1),null);
var map__20198_20620__$1 = cljs.core.__destructure_map(map__20198_20619);
var doc_20621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20198_20620__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20198_20620__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20617], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20622], 0));

if(cljs.core.truth_(doc_20621)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20621], 0));
} else {
}


var G__20624 = cljs.core.next(seq__20117_20606__$1);
var G__20625 = null;
var G__20626 = (0);
var G__20627 = (0);
seq__20117_20585 = G__20624;
chunk__20118_20586 = G__20625;
count__20119_20587 = G__20626;
i__20120_20588 = G__20627;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20259 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20262 = null;
var count__20263 = (0);
var i__20264 = (0);
while(true){
if((i__20264 < count__20263)){
var role = chunk__20262.cljs$core$IIndexed$_nth$arity$2(null,i__20264);
var temp__5804__auto___20632__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20632__$1)){
var spec_20634 = temp__5804__auto___20632__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20634)], 0));
} else {
}


var G__20637 = seq__20259;
var G__20638 = chunk__20262;
var G__20639 = count__20263;
var G__20640 = (i__20264 + (1));
seq__20259 = G__20637;
chunk__20262 = G__20638;
count__20263 = G__20639;
i__20264 = G__20640;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20259);
if(temp__5804__auto____$1){
var seq__20259__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20259__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20259__$1);
var G__20643 = cljs.core.chunk_rest(seq__20259__$1);
var G__20644 = c__5568__auto__;
var G__20645 = cljs.core.count(c__5568__auto__);
var G__20646 = (0);
seq__20259 = G__20643;
chunk__20262 = G__20644;
count__20263 = G__20645;
i__20264 = G__20646;
continue;
} else {
var role = cljs.core.first(seq__20259__$1);
var temp__5804__auto___20649__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20649__$2)){
var spec_20650 = temp__5804__auto___20649__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20650)], 0));
} else {
}


var G__20651 = cljs.core.next(seq__20259__$1);
var G__20652 = null;
var G__20653 = (0);
var G__20654 = (0);
seq__20259 = G__20651;
chunk__20262 = G__20652;
count__20263 = G__20653;
i__20264 = G__20654;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20670 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20671 = cljs.core.ex_cause(t);
via = G__20670;
t = G__20671;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20349 = datafied_throwable;
var map__20349__$1 = cljs.core.__destructure_map(map__20349);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20349__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20349__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20349__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20350 = cljs.core.last(via);
var map__20350__$1 = cljs.core.__destructure_map(map__20350);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20350__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20350__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20350__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20351 = data;
var map__20351__$1 = cljs.core.__destructure_map(map__20351);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20351__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20351__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20351__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20352 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20352__$1 = cljs.core.__destructure_map(map__20352);
var top_data = map__20352__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20352__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20363 = phase;
var G__20363__$1 = (((G__20363 instanceof cljs.core.Keyword))?G__20363.fqn:null);
switch (G__20363__$1) {
case "read-source":
var map__20367 = data;
var map__20367__$1 = cljs.core.__destructure_map(map__20367);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20367__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20367__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20368 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20368__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20368,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20368);
var G__20368__$2 = (cljs.core.truth_((function (){var fexpr__20372 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20372.cljs$core$IFn$_invoke$arity$1 ? fexpr__20372.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20372.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20368__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20368__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20368__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20368__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20375 = top_data;
var G__20375__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20375,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20375);
var G__20375__$2 = (cljs.core.truth_((function (){var fexpr__20376 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20376.cljs$core$IFn$_invoke$arity$1 ? fexpr__20376.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20376.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20375__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20375__$1);
var G__20375__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20375__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20375__$2);
var G__20375__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20375__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20375__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20375__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20375__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20387 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20387,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20387,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20387,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20387,(3),null);
var G__20395 = top_data;
var G__20395__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20395,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20395);
var G__20395__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20395__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20395__$1);
var G__20395__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20395__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20395__$2);
var G__20395__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20395__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20395__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20395__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20395__$4;
}

break;
case "execution":
var vec__20403 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20403,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20403,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20403,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20403,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20338_SHARP_){
var or__5045__auto__ = (p1__20338_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20410 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20410.cljs$core$IFn$_invoke$arity$1 ? fexpr__20410.cljs$core$IFn$_invoke$arity$1(p1__20338_SHARP_) : fexpr__20410.call(null,p1__20338_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20412 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20412__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20412,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20412);
var G__20412__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20412__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20412__$1);
var G__20412__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20412__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20412__$2);
var G__20412__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20412__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20412__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20412__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20412__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20363__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20431){
var map__20432 = p__20431;
var map__20432__$1 = cljs.core.__destructure_map(map__20432);
var triage_data = map__20432__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20432__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20432__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20432__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20432__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20432__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20432__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20432__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20432__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20447 = phase;
var G__20447__$1 = (((G__20447 instanceof cljs.core.Keyword))?G__20447.fqn:null);
switch (G__20447__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20450 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20451 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20452 = loc;
var G__20453 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20458_20723 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20459_20724 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20460_20725 = true;
var _STAR_print_fn_STAR__temp_val__20461_20726 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20460_20725);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20461_20726);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20425_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20425_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20459_20724);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20458_20723);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20450,G__20451,G__20452,G__20453) : format.call(null,G__20450,G__20451,G__20452,G__20453));

break;
case "macroexpansion":
var G__20478 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20479 = cause_type;
var G__20480 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20481 = loc;
var G__20482 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20478,G__20479,G__20480,G__20481,G__20482) : format.call(null,G__20478,G__20479,G__20480,G__20481,G__20482));

break;
case "compile-syntax-check":
var G__20483 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20484 = cause_type;
var G__20485 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20486 = loc;
var G__20487 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20483,G__20484,G__20485,G__20486,G__20487) : format.call(null,G__20483,G__20484,G__20485,G__20486,G__20487));

break;
case "compilation":
var G__20490 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20491 = cause_type;
var G__20492 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20493 = loc;
var G__20494 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20490,G__20491,G__20492,G__20493,G__20494) : format.call(null,G__20490,G__20491,G__20492,G__20493,G__20494));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20497 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20498 = symbol;
var G__20499 = loc;
var G__20500 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20502_20747 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20503_20748 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20504_20749 = true;
var _STAR_print_fn_STAR__temp_val__20505_20750 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20504_20749);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20505_20750);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20428_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20428_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20503_20748);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20502_20747);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20497,G__20498,G__20499,G__20500) : format.call(null,G__20497,G__20498,G__20499,G__20500));
} else {
var G__20513 = "Execution error%s at %s(%s).\n%s\n";
var G__20514 = cause_type;
var G__20515 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20516 = loc;
var G__20517 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20513,G__20514,G__20515,G__20516,G__20517) : format.call(null,G__20513,G__20514,G__20515,G__20516,G__20517));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20447__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
