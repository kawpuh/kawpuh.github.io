goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14579){
var map__14581 = p__14579;
var map__14581__$1 = cljs.core.__destructure_map(map__14581);
var m = map__14581__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14581__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14581__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__14596_15062 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14598_15063 = null;
var count__14599_15064 = (0);
var i__14600_15065 = (0);
while(true){
if((i__14600_15065 < count__14599_15064)){
var f_15067 = chunk__14598_15063.cljs$core$IIndexed$_nth$arity$2(null,i__14600_15065);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_15067], 0));


var G__15068 = seq__14596_15062;
var G__15069 = chunk__14598_15063;
var G__15070 = count__14599_15064;
var G__15071 = (i__14600_15065 + (1));
seq__14596_15062 = G__15068;
chunk__14598_15063 = G__15069;
count__14599_15064 = G__15070;
i__14600_15065 = G__15071;
continue;
} else {
var temp__5804__auto___15072 = cljs.core.seq(seq__14596_15062);
if(temp__5804__auto___15072){
var seq__14596_15073__$1 = temp__5804__auto___15072;
if(cljs.core.chunked_seq_QMARK_(seq__14596_15073__$1)){
var c__5568__auto___15074 = cljs.core.chunk_first(seq__14596_15073__$1);
var G__15075 = cljs.core.chunk_rest(seq__14596_15073__$1);
var G__15076 = c__5568__auto___15074;
var G__15077 = cljs.core.count(c__5568__auto___15074);
var G__15078 = (0);
seq__14596_15062 = G__15075;
chunk__14598_15063 = G__15076;
count__14599_15064 = G__15077;
i__14600_15065 = G__15078;
continue;
} else {
var f_15081 = cljs.core.first(seq__14596_15073__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_15081], 0));


var G__15082 = cljs.core.next(seq__14596_15073__$1);
var G__15084 = null;
var G__15085 = (0);
var G__15086 = (0);
seq__14596_15062 = G__15082;
chunk__14598_15063 = G__15084;
count__14599_15064 = G__15085;
i__14600_15065 = G__15086;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15087 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_15087], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_15087)))?cljs.core.second(arglists_15087):arglists_15087)], 0));
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
var seq__14641_15093 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14642_15094 = null;
var count__14643_15095 = (0);
var i__14644_15096 = (0);
while(true){
if((i__14644_15096 < count__14643_15095)){
var vec__14740_15097 = chunk__14642_15094.cljs$core$IIndexed$_nth$arity$2(null,i__14644_15096);
var name_15098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14740_15097,(0),null);
var map__14743_15099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14740_15097,(1),null);
var map__14743_15100__$1 = cljs.core.__destructure_map(map__14743_15099);
var doc_15101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14743_15100__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14743_15100__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_15098], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_15102], 0));

if(cljs.core.truth_(doc_15101)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_15101], 0));
} else {
}


var G__15105 = seq__14641_15093;
var G__15106 = chunk__14642_15094;
var G__15107 = count__14643_15095;
var G__15108 = (i__14644_15096 + (1));
seq__14641_15093 = G__15105;
chunk__14642_15094 = G__15106;
count__14643_15095 = G__15107;
i__14644_15096 = G__15108;
continue;
} else {
var temp__5804__auto___15109 = cljs.core.seq(seq__14641_15093);
if(temp__5804__auto___15109){
var seq__14641_15111__$1 = temp__5804__auto___15109;
if(cljs.core.chunked_seq_QMARK_(seq__14641_15111__$1)){
var c__5568__auto___15113 = cljs.core.chunk_first(seq__14641_15111__$1);
var G__15114 = cljs.core.chunk_rest(seq__14641_15111__$1);
var G__15115 = c__5568__auto___15113;
var G__15116 = cljs.core.count(c__5568__auto___15113);
var G__15117 = (0);
seq__14641_15093 = G__15114;
chunk__14642_15094 = G__15115;
count__14643_15095 = G__15116;
i__14644_15096 = G__15117;
continue;
} else {
var vec__14758_15118 = cljs.core.first(seq__14641_15111__$1);
var name_15119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14758_15118,(0),null);
var map__14762_15120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14758_15118,(1),null);
var map__14762_15121__$1 = cljs.core.__destructure_map(map__14762_15120);
var doc_15122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14762_15121__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14762_15121__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_15119], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_15123], 0));

if(cljs.core.truth_(doc_15122)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_15122], 0));
} else {
}


var G__15133 = cljs.core.next(seq__14641_15111__$1);
var G__15134 = null;
var G__15135 = (0);
var G__15136 = (0);
seq__14641_15093 = G__15133;
chunk__14642_15094 = G__15134;
count__14643_15095 = G__15135;
i__14644_15096 = G__15136;
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

var seq__14768 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14769 = null;
var count__14770 = (0);
var i__14771 = (0);
while(true){
if((i__14771 < count__14770)){
var role = chunk__14769.cljs$core$IIndexed$_nth$arity$2(null,i__14771);
var temp__5804__auto___15138__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___15138__$1)){
var spec_15139 = temp__5804__auto___15138__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_15139)], 0));
} else {
}


var G__15140 = seq__14768;
var G__15141 = chunk__14769;
var G__15142 = count__14770;
var G__15143 = (i__14771 + (1));
seq__14768 = G__15140;
chunk__14769 = G__15141;
count__14770 = G__15142;
i__14771 = G__15143;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__14768);
if(temp__5804__auto____$1){
var seq__14768__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__14768__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14768__$1);
var G__15145 = cljs.core.chunk_rest(seq__14768__$1);
var G__15146 = c__5568__auto__;
var G__15147 = cljs.core.count(c__5568__auto__);
var G__15148 = (0);
seq__14768 = G__15145;
chunk__14769 = G__15146;
count__14770 = G__15147;
i__14771 = G__15148;
continue;
} else {
var role = cljs.core.first(seq__14768__$1);
var temp__5804__auto___15149__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___15149__$2)){
var spec_15151 = temp__5804__auto___15149__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_15151)], 0));
} else {
}


var G__15152 = cljs.core.next(seq__14768__$1);
var G__15153 = null;
var G__15154 = (0);
var G__15155 = (0);
seq__14768 = G__15152;
chunk__14769 = G__15153;
count__14770 = G__15154;
i__14771 = G__15155;
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
var G__15160 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__15161 = cljs.core.ex_cause(t);
via = G__15160;
t = G__15161;
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
var map__14888 = datafied_throwable;
var map__14888__$1 = cljs.core.__destructure_map(map__14888);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14888__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14888__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14888__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__14889 = cljs.core.last(via);
var map__14889__$1 = cljs.core.__destructure_map(map__14889);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14889__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14889__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14889__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__14890 = data;
var map__14890__$1 = cljs.core.__destructure_map(map__14890);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14890__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14890__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14890__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__14891 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__14891__$1 = cljs.core.__destructure_map(map__14891);
var top_data = map__14891__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14891__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__14892 = phase;
var G__14892__$1 = (((G__14892 instanceof cljs.core.Keyword))?G__14892.fqn:null);
switch (G__14892__$1) {
case "read-source":
var map__14895 = data;
var map__14895__$1 = cljs.core.__destructure_map(map__14895);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14895__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14895__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__14899 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__14899__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14899,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14899);
var G__14899__$2 = (cljs.core.truth_((function (){var fexpr__14901 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14901.cljs$core$IFn$_invoke$arity$1 ? fexpr__14901.cljs$core$IFn$_invoke$arity$1(source) : fexpr__14901.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14899__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14899__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14899__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14899__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__14903 = top_data;
var G__14903__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14903,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14903);
var G__14903__$2 = (cljs.core.truth_((function (){var fexpr__14907 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14907.cljs$core$IFn$_invoke$arity$1 ? fexpr__14907.cljs$core$IFn$_invoke$arity$1(source) : fexpr__14907.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14903__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14903__$1);
var G__14903__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14903__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14903__$2);
var G__14903__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14903__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14903__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14903__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14903__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__14913 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14913,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14913,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14913,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14913,(3),null);
var G__14919 = top_data;
var G__14919__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14919,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__14919);
var G__14919__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14919__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__14919__$1);
var G__14919__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14919__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__14919__$2);
var G__14919__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14919__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14919__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14919__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14919__$4;
}

break;
case "execution":
var vec__14932 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14932,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14932,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14932,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14932,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__14880_SHARP_){
var or__5045__auto__ = (p1__14880_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__14943 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14943.cljs$core$IFn$_invoke$arity$1 ? fexpr__14943.cljs$core$IFn$_invoke$arity$1(p1__14880_SHARP_) : fexpr__14943.call(null,p1__14880_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__14954 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__14954__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14954,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__14954);
var G__14954__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14954__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14954__$1);
var G__14954__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14954__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__14954__$2);
var G__14954__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14954__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__14954__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14954__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14954__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14892__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__14980){
var map__14981 = p__14980;
var map__14981__$1 = cljs.core.__destructure_map(map__14981);
var triage_data = map__14981__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14981__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14981__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14981__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14981__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14981__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14981__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14981__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14981__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__14986 = phase;
var G__14986__$1 = (((G__14986 instanceof cljs.core.Keyword))?G__14986.fqn:null);
switch (G__14986__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__14987 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__14988 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14989 = loc;
var G__14990 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14991_15234 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14992_15235 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14993_15236 = true;
var _STAR_print_fn_STAR__temp_val__14994_15237 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14993_15236);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14994_15237);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14977_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14977_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14992_15235);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14991_15234);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__14987,G__14988,G__14989,G__14990) : format.call(null,G__14987,G__14988,G__14989,G__14990));

break;
case "macroexpansion":
var G__15003 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__15004 = cause_type;
var G__15005 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15006 = loc;
var G__15007 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15003,G__15004,G__15005,G__15006,G__15007) : format.call(null,G__15003,G__15004,G__15005,G__15006,G__15007));

break;
case "compile-syntax-check":
var G__15008 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__15009 = cause_type;
var G__15010 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15011 = loc;
var G__15012 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15008,G__15009,G__15010,G__15011,G__15012) : format.call(null,G__15008,G__15009,G__15010,G__15011,G__15012));

break;
case "compilation":
var G__15013 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__15014 = cause_type;
var G__15015 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15016 = loc;
var G__15017 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15013,G__15014,G__15015,G__15016,G__15017) : format.call(null,G__15013,G__15014,G__15015,G__15016,G__15017));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__15022 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__15023 = symbol;
var G__15024 = loc;
var G__15025 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15027_15248 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15028_15249 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15029_15250 = true;
var _STAR_print_fn_STAR__temp_val__15030_15251 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15029_15250);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15030_15251);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14978_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14978_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15028_15249);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15027_15248);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__15022,G__15023,G__15024,G__15025) : format.call(null,G__15022,G__15023,G__15024,G__15025));
} else {
var G__15036 = "Execution error%s at %s(%s).\n%s\n";
var G__15037 = cause_type;
var G__15038 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15039 = loc;
var G__15040 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15036,G__15037,G__15038,G__15039,G__15040) : format.call(null,G__15036,G__15037,G__15038,G__15039,G__15040));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14986__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
