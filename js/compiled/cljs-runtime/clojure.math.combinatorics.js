goog.provide('clojure.math.combinatorics');
clojure.math.combinatorics._STAR__SINGLEQUOTE_ = cljs.core._STAR_;
clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = cljs.core._PLUS_;
/**
 * Lazily concatenates a collection of collections into a flat sequence,
 *   because Clojure's `apply concat` is insufficiently lazy.
 */
clojure.math.combinatorics.join = (function clojure$math$combinatorics$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5804__auto__ = cljs.core.seq(colls);
if(temp__5804__auto__){
var s = temp__5804__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__10210 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__10210) : clojure.math.combinatorics.join.call(null,G__10210));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Uses join to achieve lazier version of mapcat (on one collection)
 */
clojure.math.combinatorics.mapjoin = (function clojure$math$combinatorics$mapjoin(f,coll){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
});
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 *   to write our own version that considers the empty-list to be distinct
 */
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__10216(s__10217){
return (new cljs.core.LazySeq(null,(function (){
var s__10217__$1 = s__10217;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10217__$1);
if(temp__5804__auto__){
var s__10217__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10217__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10217__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10219 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10218 = (0);
while(true){
if((i__10218 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__10218);
cljs.core.chunk_append(b__10219,((j + cnt) + (- (n + (1)))));

var G__10679 = (i__10218 + (1));
i__10218 = G__10679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10219),clojure$math$combinatorics$index_combinations_$_iter__10216(cljs.core.chunk_rest(s__10217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10219),null);
}
} else {
var j = cljs.core.first(s__10217__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__10216(cljs.core.rest(s__10217__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})()));
var iter_comb = (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,((c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)) - (1)));
if(((c__$2.cljs$core$IFn$_invoke$arity$1 ? c__$2.cljs$core$IFn$_invoke$arity$1(j) : c__$2.call(null,j)) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__10680 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__10681 = (j__$1 - (1));
c__$3 = G__10680;
j__$1 = G__10681;
continue;
}
break;
}
}
}
});
var step = (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons(cljs.core.rseq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,(function (){
var next_step = iter_comb(c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step((next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((0)) : next_step.call(null,(0))),(next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((1)) : next_step.call(null,(1))));
} else {
return null;
}
}),null,null)));
});
return step(c,(1));
}),null,null));
});
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count(m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(index__$1) : m.call(null,index__$1));
if((quantity_to_distribute <= mi)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__10682 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__10683 = (index__$1 + (1));
var G__10684 = (already_distributed__$1 + mi);
distribution__$1 = G__10682;
index__$1 = G__10683;
already_distributed__$1 = G__10684;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__10261 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10261,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10261,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10261,(2),null);
if((index < (cljs.core.count(m) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop(distribution);
while(true){
var vec__10287 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10287,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10287,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10287,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__10685 = distribution__$2;
distribution__$1 = G__10685;
continue;
} else {
return null;

}
}
break;
}

}
}
});
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons(distribution,(new cljs.core.LazySeq(null,(function (){
var temp__5804__auto__ = clojure.math.combinatorics.next_distribution(m,t,distribution);
if(cljs.core.truth_(temp__5804__auto__)){
var next_step = temp__5804__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step(next_step);
} else {
return null;
}
}),null,null)));
});
return step(clojure.math.combinatorics.distribute(m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var domain = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v));
var m = cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__10335(s__10336){
return (new cljs.core.LazySeq(null,(function (){
var s__10336__$1 = s__10336;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10336__$1);
if(temp__5804__auto__){
var s__10336__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10336__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10336__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10338 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10337 = (0);
while(true){
if((i__10337 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__10337);
cljs.core.chunk_append(b__10338,(function (){var G__10341 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10341) : f.call(null,G__10341));
})());

var G__10686 = (i__10337 + (1));
i__10337 = G__10686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10338),clojure$math$combinatorics$multi_comb_$_iter__10335(cljs.core.chunk_rest(s__10336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10338),null);
}
} else {
var i = cljs.core.first(s__10336__$2);
return cljs.core.cons((function (){var G__10346 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10346) : f.call(null,G__10346));
})(),clojure$math$combinatorics$multi_comb_$_iter__10335(cljs.core.rest(s__10336__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions(m,t);
var iter__5523__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__10347(s__10348){
return (new cljs.core.LazySeq(null,(function (){
var s__10348__$1 = s__10348;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10348__$1);
if(temp__5804__auto__){
var s__10348__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10348__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10348__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10350 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10349 = (0);
while(true){
if((i__10349 < size__5522__auto__)){
var q = cljs.core._nth(c__5521__auto__,i__10349);
cljs.core.chunk_append(b__10350,clojure.math.combinatorics.join((function (){var iter__5523__auto__ = ((function (i__10349,q,c__5521__auto__,size__5522__auto__,b__10350,s__10348__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__10347_$_iter__10354(s__10355){
return (new cljs.core.LazySeq(null,((function (i__10349,q,c__5521__auto__,size__5522__auto__,b__10350,s__10348__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function (){
var s__10355__$1 = s__10355;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__10355__$1);
if(temp__5804__auto____$1){
var s__10355__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10355__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__10355__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__10357 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__10356 = (0);
while(true){
if((i__10356 < size__5522__auto____$1)){
var vec__10362 = cljs.core._nth(c__5521__auto____$1,i__10356);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10362,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10362,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10362,(2),null);
cljs.core.chunk_append(b__10357,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__10687 = (i__10356 + (1));
i__10356 = G__10687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10357),clojure$math$combinatorics$multi_comb_$_iter__10347_$_iter__10354(cljs.core.chunk_rest(s__10355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10357),null);
}
} else {
var vec__10365 = cljs.core.first(s__10355__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10365,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10365,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10365,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__10347_$_iter__10354(cljs.core.rest(s__10355__$2)));
}
} else {
return null;
}
break;
}
});})(i__10349,q,c__5521__auto__,size__5522__auto__,b__10350,s__10348__$2,temp__5804__auto__,f,v,domain,m,qs))
,null,null));
});})(i__10349,q,c__5521__auto__,size__5522__auto__,b__10350,s__10348__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__5523__auto__(q);
})()));

var G__10688 = (i__10349 + (1));
i__10349 = G__10688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10350),clojure$math$combinatorics$multi_comb_$_iter__10347(cljs.core.chunk_rest(s__10348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10350),null);
}
} else {
var q = cljs.core.first(s__10348__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__5523__auto__ = ((function (q,s__10348__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__10347_$_iter__10372(s__10373){
return (new cljs.core.LazySeq(null,(function (){
var s__10373__$1 = s__10373;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__10373__$1);
if(temp__5804__auto____$1){
var s__10373__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10373__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10373__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10375 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10374 = (0);
while(true){
if((i__10374 < size__5522__auto__)){
var vec__10378 = cljs.core._nth(c__5521__auto__,i__10374);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10378,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10378,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10378,(2),null);
cljs.core.chunk_append(b__10375,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__10689 = (i__10374 + (1));
i__10374 = G__10689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10375),clojure$math$combinatorics$multi_comb_$_iter__10347_$_iter__10372(cljs.core.chunk_rest(s__10373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10375),null);
}
} else {
var vec__10381 = cljs.core.first(s__10373__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10381,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10381,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10381,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__10347_$_iter__10372(cljs.core.rest(s__10373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__10348__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__5523__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__10347(cljs.core.rest(s__10348__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec(cljs.core.reverse(items));
if((t === (0))){
return (new cljs.core.List(null,cljs.core.List.EMPTY,null,(1),null));
} else {
var cnt = cljs.core.count(items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
var iter__5523__auto__ = (function clojure$math$combinatorics$combinations_$_iter__10389(s__10390){
return (new cljs.core.LazySeq(null,(function (){
var s__10390__$1 = s__10390;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10390__$1);
if(temp__5804__auto__){
var s__10390__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10390__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10390__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10392 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10391 = (0);
while(true){
if((i__10391 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__10391);
cljs.core.chunk_append(b__10392,(new cljs.core.List(null,item,null,(1),null)));

var G__10690 = (i__10391 + (1));
i__10391 = G__10690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10392),clojure$math$combinatorics$combinations_$_iter__10389(cljs.core.chunk_rest(s__10390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10392),null);
}
} else {
var item = cljs.core.first(s__10390__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__10389(cljs.core.rest(s__10390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cnt)){
return (new cljs.core.List(null,cljs.core.seq(items),null,(1),null));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10386_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__10386_SHARP_);
}),clojure.math.combinatorics.index_combinations(t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb(items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(function (){var G__10401 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__10401) : clojure.math.combinatorics.unchunk.call(null,G__10401));
})());
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return clojure.math.combinatorics.mapjoin((function (n){
return clojure.math.combinatorics.combinations(items,n);
}),clojure.math.combinatorics.unchunk(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(items) + (1)))));
});
/**
 * All the ways to take one item from each sequence
 */
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10691 = arguments.length;
var i__5770__auto___10692 = (0);
while(true){
if((i__5770__auto___10692 < len__5769__auto___10691)){
args__5775__auto__.push((arguments[i__5770__auto___10692]));

var G__10693 = (i__5770__auto___10692 + (1));
i__5770__auto___10692 = G__10693;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function clojure$math$combinatorics$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5802__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5802__auto__){
var rst = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__10694 = (i - (1));
var G__10695 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__10694;
v_seqs__$2 = G__10695;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return clojure$math$combinatorics$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq10402){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10402));
}));

/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(items)));
});
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count(v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__10409 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__10409) : v.call(null,G__10409));
})())){
return i;
} else {
var G__10696 = (i - (1));
i = G__10696;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j));
var l = (function (){var i = (len - (1));
while(true){
if((vj < (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)))){
return i;
} else {
var G__10697 = (i - (1));
i = G__10697;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,j,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(l) : v.call(null,l)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l,vj], 0));
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__10698 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__10699 = (k + (1));
var G__10700 = (l__$1 - (1));
v__$1 = G__10698;
k = G__10699;
l__$1 = G__10700;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons(v,(new cljs.core.LazySeq(null,(function (){
var G__10414 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__10414) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__10414));
}),null,null)));
} else {
return null;
}
});
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(c));
if((cljs.core.count(vec_sorted) === (0))){
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));
} else {
return clojure.math.combinatorics.vec_lex_permutations(vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
var and__5043__auto__ = cljs.core.every_QMARK_(cljs.core.number_QMARK_,s);
if(and__5043__auto__){
var or__5045__auto__ = cljs.core.empty_QMARK_(s);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,s);
}
} else {
return and__5043__auto__;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var indices = clojure.math.combinatorics.join((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__10419(s__10420){
return (new cljs.core.LazySeq(null,(function (){
var s__10420__$1 = s__10420;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10420__$1);
if(temp__5804__auto__){
var s__10420__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10420__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10420__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10422 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10421 = (0);
while(true){
if((i__10421 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__10421);
cljs.core.chunk_append(b__10422,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__10423 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10423) : f.call(null,G__10423));
})(),i));

var G__10701 = (i__10421 + (1));
i__10421 = G__10701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10422),clojure$math$combinatorics$multi_perm_$_iter__10419(cljs.core.chunk_rest(s__10420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10422),null);
}
} else {
var i = cljs.core.first(s__10420__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__10428 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10428) : f.call(null,G__10428));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__10419(cljs.core.rest(s__10420__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.lex_permutations(indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 *   (special handling for duplicate items).
 */
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
return clojure.math.combinatorics.lex_permutations(items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10429_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__10429_SHARP_);
}),clojure.math.combinatorics.lex_permutations(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v))));
} else {
return clojure.math.combinatorics.multi_perm(items);

}
}
});
/**
 * Every permutation of every combination of t elements from items
 */
clojure.math.combinatorics.permuted_combinations = (function clojure$math$combinatorics$permuted_combinations(items,t){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.permutations,clojure.math.combinatorics.combinations(items,t)));
});
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__10702 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__10703 = (n__$1 - (1));
acc = G__10702;
n__$1 = G__10703;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot(n__$1,divisor);
var r = cljs.core.rem(n__$1,divisor);
var G__10708 = q;
var G__10709 = cljs.core.cons(r,digits);
var G__10710 = (divisor + (1));
n__$1 = G__10708;
digits = G__10709;
divisor = G__10710;
continue;
}
break;
}
});
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.rest(l__$1));
} else {
var G__10711 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__10712 = cljs.core.rest(l__$1);
var G__10713 = (n__$1 - (1));
acc = G__10711;
l__$1 = G__10712;
n__$1 = G__10713;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial(cljs.core.count(l)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.factorial(cljs.core.count(l)),"permutations."], 0)),"\n","(< n (factorial (count l)))"].join('')));
}

var length = cljs.core.count(l);
var fact_nums = clojure.math.combinatorics.factorial_numbers(n);
var indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((length - cljs.core.count(fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l__$1,i);
var G__10714 = cljs.core.rest(indices);
var G__10715 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__10716 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__10714;
l__$1 = G__10715;
perm = G__10716;
continue;
}
break;
}
});
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals(freqs);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,clojure.math.combinatorics.factorial(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(l))){
return clojure.math.combinatorics.factorial(cljs.core.count(l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.frequencies(l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__10456(s__10457){
return (new cljs.core.LazySeq(null,(function (){
var s__10457__$1 = s__10457;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10457__$1);
if(temp__5804__auto__){
var s__10457__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10457__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10457__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10459 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10458 = (0);
while(true){
if((i__10458 < size__5522__auto__)){
var vec__10462 = cljs.core._nth(c__5521__auto__,i__10458);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10462,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10462,(1),null);
cljs.core.chunk_append(b__10459,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__10717 = (i__10458 + (1));
i__10458 = G__10717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10459),clojure$math$combinatorics$initial_perm_numbers_$_iter__10456(cljs.core.chunk_rest(s__10457__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10459),null);
}
} else {
var vec__10475 = cljs.core.first(s__10457__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10475,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__10456(cljs.core.rest(s__10457__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if((((cljs.core.first(perm_numbers__$1) <= n)) && ((n < cljs.core.second(perm_numbers__$1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first(perm_numbers__$1))], null);
} else {
var G__10727 = cljs.core.rest(perm_numbers__$1);
var G__10728 = (index + (1));
perm_numbers__$1 = G__10727;
index = G__10728;
continue;
}
break;
}
});
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(digits,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(freqs__$1)),(0)));
} else {
var vec__10504 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10504,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10504,(1),null);
var G__10729 = remainder;
var G__10730 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__10731 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__10729;
digits = G__10730;
freqs__$1 = G__10731;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations(l))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_permutations(l),"permutations."], 0)),"\n","(< n (count-permutations l))"].join('')));
}

var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates(n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs),i);
var G__10732 = clojure.math.combinatorics.dec_key(freqs,item);
var G__10733 = cljs.core.rest(indices);
var G__10734 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__10732;
indices = G__10733;
perm = G__10734;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_permutation_distinct(items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates(items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__10507(s__10508){
return (new cljs.core.LazySeq(null,(function (){
var s__10508__$1 = s__10508;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10508__$1);
if(temp__5804__auto__){
var s__10508__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10508__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10508__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10510 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10509 = (0);
while(true){
if((i__10509 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__10509);
cljs.core.chunk_append(b__10510,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__10511 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10511) : f.call(null,G__10511));
})(),i));

var G__10744 = (i__10509 + (1));
i__10509 = G__10744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10510),clojure$math$combinatorics$nth_permutation_$_iter__10507(cljs.core.chunk_rest(s__10508__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10510),null);
}
} else {
var i = cljs.core.first(s__10508__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__10512 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10512) : f.call(null,G__10512));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__10507(cljs.core.rest(s__10508__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations(items);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,clojure.math.combinatorics.count_permutations(items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_distinct(items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__10513(s__10514){
return (new cljs.core.LazySeq(null,(function (){
var s__10514__$1 = s__10514;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10514__$1);
if(temp__5804__auto__){
var s__10514__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10514__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10514__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10516 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10515 = (0);
while(true){
if((i__10515 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__10515);
cljs.core.chunk_append(b__10516,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__10517 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10517) : f.call(null,G__10517));
})(),i));

var G__10747 = (i__10515 + (1));
i__10515 = G__10747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10516),clojure$math$combinatorics$drop_permutations_$_iter__10513(cljs.core.chunk_rest(s__10514__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10516),null);
}
} else {
var i = cljs.core.first(s__10514__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__10518 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10518) : f.call(null,G__10518));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__10513(cljs.core.rest(s__10514__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}

}
}
});
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(1))){
return n;
} else {
if((k > cljs.core.quot(n,(2)))){
var G__10757 = n;
var G__10758 = (n - k);
n = G__10757;
k = G__10758;
continue;
} else {
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(((n - k) + (1)),(n + (1)))) / cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(k + (1)))));

}
}
}
}
}
break;
}
});
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals(freqs);
var sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
return cljs.core.count(freqs);
} else {
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k(cljs.core.count(freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,sum)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__10519 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1)));
var G__10520 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs))),t);
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__10519,G__10520) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__10519,G__10520));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.n_take_k(cljs.core.count(items),t);
} else {
return clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies(items),t);
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies_orig_val__10521 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__10522 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__10522);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__10521);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__10767 = n__$1;
var G__10768 = y;
var G__10769 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__10767;
y = G__10768;
z = G__10769;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__10770 = n__$1;
var G__10771 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__10772 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__10770;
y = G__10771;
z = G__10772;
continue;

}
}
break;
}
});
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_(items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.expt_int((2),cljs.core.count(items));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__10523(s__10524){
return (new cljs.core.LazySeq(null,(function (){
var s__10524__$1 = s__10524;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10524__$1);
if(temp__5804__auto__){
var s__10524__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10524__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10524__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10526 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10525 = (0);
while(true){
if((i__10525 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__10525);
cljs.core.chunk_append(b__10526,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__10773 = (i__10525 + (1));
i__10525 = G__10773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10526),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__10523(cljs.core.chunk_rest(s__10524__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10526),null);
}
} else {
var i = cljs.core.first(s__10524__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__10523(cljs.core.rest(s__10524__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies_orig_val__10527 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__10528 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__10528);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__10527);
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(items__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k((cljs.core.count(items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__10774 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__10775 = cljs.core.rest(items__$1);
var G__10776 = (t__$1 - (1));
var G__10777 = n__$1;
comb = G__10774;
items__$1 = G__10775;
t__$1 = G__10776;
n__$1 = G__10777;
continue;
} else {
var G__10778 = comb;
var G__10779 = cljs.core.rest(items__$1);
var G__10780 = t__$1;
var G__10781 = (n__$1 - dc_dt);
comb = G__10778;
items__$1 = G__10779;
t__$1 = G__10780;
n__$1 = G__10781;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(freqs__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,clojure.math.combinatorics.join((function (){var iter__5523__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__10539(s__10540){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__10540__$1 = s__10540;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10540__$1);
if(temp__5804__auto__){
var s__10540__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10540__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10540__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10542 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10541 = (0);
while(true){
if((i__10541 < size__5522__auto__)){
var vec__10543 = cljs.core._nth(c__5521__auto__,i__10541);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10543,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10543,(1),null);
cljs.core.chunk_append(b__10542,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__10782 = (i__10541 + (1));
i__10541 = G__10782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10542),clojure$math$combinatorics$nth_combination_freqs_$_iter__10539(cljs.core.chunk_rest(s__10540__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10542),null);
}
} else {
var vec__10546 = cljs.core.first(s__10540__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10546,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10546,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__10539(cljs.core.rest(s__10540__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__5523__auto__(freqs__$1);
})())));
} else {
var first_key = cljs.core.first(cljs.core.keys(freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key(freqs__$1,first_key);
var dc_dt = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__10783 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__10784 = remove_one_key;
var G__10785 = (t__$1 - (1));
var G__10786 = n__$1;
comb = G__10783;
freqs__$1 = G__10784;
t__$1 = G__10785;
n__$1 = G__10786;
continue;
} else {
var G__10787 = comb;
var G__10788 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__10789 = t__$1;
var G__10790 = (n__$1 - dc_dt);
comb = G__10787;
freqs__$1 = G__10788;
t__$1 = G__10789;
n__$1 = G__10790;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations(items,t))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_combinations_unmemoized(items,t),"combinations."], 0)),"\n","(< n (count-combinations items t))"].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_combination_distinct(items,t,n);
} else {
var count_combinations_from_frequencies_orig_val__10549 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__10550 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__10550);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__10551(s__10552){
return (new cljs.core.LazySeq(null,(function (){
var s__10552__$1 = s__10552;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10552__$1);
if(temp__5804__auto__){
var s__10552__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10552__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10552__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10554 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10553 = (0);
while(true){
if((i__10553 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__10553);
cljs.core.chunk_append(b__10554,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__10555 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10555) : f.call(null,G__10555));
})(),i));

var G__10795 = (i__10553 + (1));
i__10553 = G__10795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10554),clojure$math$combinatorics$nth_combination_$_iter__10551(cljs.core.chunk_rest(s__10552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10554),null);
}
} else {
var i = cljs.core.first(s__10552__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__10556 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10556) : f.call(null,G__10556));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__10551(cljs.core.rest(s__10552__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
var indices_freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(indices));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_combination_freqs(indices_freqs,t,n)));
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__10549);
}}
});
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets(items))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_subsets(items),"subsets."], 0)),"\n","(< n (count-subsets items))"].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations(items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination(items,size,n__$1);
} else {
var G__10796 = (size + (1));
var G__10797 = (n__$1 - num_combinations);
size = G__10796;
n__$1 = G__10797;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq(l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.first(l__$1))){
return n;
} else {
var G__10798 = cljs.core.rest(l__$1);
var G__10799 = (n + (1));
l__$1 = G__10798;
n = G__10799;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count(l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__10800 = cljs.core.rest(l__$1);
var G__10801 = (function (){var G__10561 = index;
var G__10562 = (function (){var G__10563 = clojure.math.combinatorics.factorial(n);
var G__10564 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__10563,G__10564) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__10563,G__10564));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__10561,G__10562) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__10561,G__10562));
})();
var G__10802 = (n - (1));
l__$1 = G__10800;
index = G__10801;
n = G__10802;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l__$1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__10803 = cljs.core.rest(l__$1);
var G__10804 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__5523__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__10570(s__10571){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__10571__$1 = s__10571;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10571__$1);
if(temp__5804__auto__){
var s__10571__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10571__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10571__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10573 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10572 = (0);
while(true){
if((i__10572 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__10572);
cljs.core.chunk_append(b__10573,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__10806 = (i__10572 + (1));
i__10572 = G__10806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10573),clojure$math$combinatorics$permutation_index_duplicates_$_iter__10570(cljs.core.chunk_rest(s__10571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10573),null);
}
} else {
var k = cljs.core.first(s__10571__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__10570(cljs.core.rest(s__10571__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__5523__auto__(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (l__$1,index,freqs,iter__5523__auto__){
return (function (p1__10565_SHARP_){
return (cljs.core.compare(p1__10565_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__5523__auto__))
,cljs.core.keys(freqs)));
})());
var G__10805 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__10803;
index = G__10804;
freqs = G__10805;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.permutation_index_distinct(items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates(items);
}
});
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = (vec.cljs$core$IFn$_invoke$arity$1 ? vec.cljs$core$IFn$_invoke$arity$1(index) : vec.call(null,index));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vec,index,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item)));
});
clojure.math.combinatorics.reify_bool = (function clojure$math$combinatorics$reify_bool(statement){
if(cljs.core.truth_(statement)){
return (1);
} else {
return (0);
}
});
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$init_$_iter__10574(s__10575){
return (new cljs.core.LazySeq(null,(function (){
var s__10575__$1 = s__10575;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10575__$1);
if(temp__5804__auto__){
var s__10575__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10575__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10575__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10577 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10576 = (0);
while(true){
if((i__10576 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__10576);
cljs.core.chunk_append(b__10577,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (i - ((n - s) - (-1)));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());

var G__10807 = (i__10576 + (1));
i__10576 = G__10807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10577),clojure$math$combinatorics$init_$_iter__10574(cljs.core.chunk_rest(s__10575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10577),null);
}
} else {
var i = cljs.core.first(s__10575__$2);
return cljs.core.cons((function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (i - ((n - s) - (-1)));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),clojure$math$combinatorics$init_$_iter__10574(cljs.core.rest(s__10575__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var G__10579 = arguments.length;
switch (G__10579) {
case 3:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.init(n,s),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(1))),r,s);
}));

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,(function (){
if((function (){var and__5043__auto__ = (cljs.core.peek(b) > cljs.core.peek(a));
if(and__5043__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek(a) < (r - (1)));
} else {
return true;
}
} else {
return and__5043__auto__;
}
})()){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.update(a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__5043__auto__ = ((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)));
if(and__5043__auto__){
var and__5043__auto____$1 = (cljs.core.truth_(r)?((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (r - (1))):true);
if(and__5043__auto____$1){
if(cljs.core.truth_(s)){
return (((s - (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))) - clojure.math.combinatorics.reify_bool((((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) + (1)) === (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))))) <= (n - j));
} else {
return true;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})()){
return j;
} else {
var G__10809 = (j - (1));
j = G__10809;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update(a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - ((b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)) + clojure.math.combinatorics.reify_bool(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1(j) : a__$1.call(null,j)),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)))))):null);
var vec__10580 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = ((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) + clojure.math.combinatorics.reify_bool(((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) === (a__$2.cljs$core$IFn$_invoke$arity$1 ? a__$2.cljs$core$IFn$_invoke$arity$1(j) : a__$2.call(null,j)))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = s;
if(cljs.core.truth_(and__5043__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__5043__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__10810 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__10811 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__10812 = (i + (1));
var G__10813 = (function (){var x__5130__auto__ = current_max;
var y__5131__auto__ = (new_a_i + (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
a__$2 = G__10810;
b__$1 = G__10811;
i = G__10812;
current_max = G__10813;
continue;
} else {
var G__10814 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__10815 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__10816 = (i + (1));
var G__10817 = current_max;
a__$2 = G__10814;
b__$1 = G__10815;
i = G__10816;
current_max = G__10817;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10580,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10580,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10818 = arguments.length;
var i__5770__auto___10819 = (0);
while(true){
if((i__5770__auto___10819 < len__5769__auto___10818)){
args__5775__auto__.push((arguments[i__5770__auto___10819]));

var G__10820 = (i__5770__auto___10819 + (1));
i__5770__auto___10819 = G__10820;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__10585){
var map__10586 = p__10585;
var map__10586__$1 = cljs.core.__destructure_map(map__10586);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10586__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10586__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
if(((((function (){var or__5045__auto__ = from;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__5045__auto__ = to;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = from;
if(cljs.core.truth_(and__5043__auto__)){
return (from <= (1));
} else {
return and__5043__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = to;
if(cljs.core.truth_(and__5043__auto__)){
return (to >= N);
} else {
return and__5043__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__5045__auto__ = from__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__5045__auto__ = from__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})() <= (function (){var or__5045__auto__ = to__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return N;
}
})())) && (((function (){var or__5045__auto__ = to__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to__$1,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N),null,(1),null))))),null,(1),null)))));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3(N,to__$1,from__$1);
var iter__5523__auto__ = (function clojure$math$combinatorics$iter__10587(s__10588){
return (new cljs.core.LazySeq(null,(function (){
var s__10588__$1 = s__10588;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10588__$1);
if(temp__5804__auto__){
var s__10588__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10588__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10588__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10590 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10589 = (0);
while(true){
if((i__10589 < size__5522__auto__)){
var growth_string = cljs.core._nth(c__5521__auto__,i__10589);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__10590,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__10821 = (i__10589 + (1));
i__10589 = G__10821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10590),clojure$math$combinatorics$iter__10587(cljs.core.chunk_rest(s__10588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10590),null);
}
} else {
var growth_string = cljs.core.first(s__10588__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__10587(cljs.core.rest(s__10588__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(growth_strings);

}
}
}
}
}
}));

(clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq10583){
var G__10584 = cljs.core.first(seq10583);
var seq10583__$1 = cljs.core.next(seq10583);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10584,seq10583__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10822 = arguments.length;
var i__5770__auto___10823 = (0);
while(true){
if((i__5770__auto___10823 < len__5769__auto___10822)){
args__5775__auto__.push((arguments[i__5770__auto___10823]));

var G__10824 = (i__5770__auto___10823 + (1));
i__5770__auto___10823 = G__10824;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec(items);
var N = cljs.core.count(items__$1);
var lex = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__5523__auto__ = (function clojure$math$combinatorics$iter__10593(s__10594){
return (new cljs.core.LazySeq(null,(function (){
var s__10594__$1 = s__10594;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10594__$1);
if(temp__5804__auto__){
var s__10594__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10594__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10594__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10596 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10595 = (0);
while(true){
if((i__10595 < size__5522__auto__)){
var parts = cljs.core._nth(c__5521__auto__,i__10595);
cljs.core.chunk_append(b__10596,(function (){var iter__5523__auto__ = ((function (i__10595,parts,c__5521__auto__,size__5522__auto__,b__10596,s__10594__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__10593_$_iter__10597(s__10598){
return (new cljs.core.LazySeq(null,((function (i__10595,parts,c__5521__auto__,size__5522__auto__,b__10596,s__10594__$2,temp__5804__auto__,items__$1,N,lex){
return (function (){
var s__10598__$1 = s__10598;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__10598__$1);
if(temp__5804__auto____$1){
var s__10598__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10598__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__10598__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__10600 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__10599 = (0);
while(true){
if((i__10599 < size__5522__auto____$1)){
var part = cljs.core._nth(c__5521__auto____$1,i__10599);
cljs.core.chunk_append(b__10600,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__10599,i__10595,part,c__5521__auto____$1,size__5522__auto____$1,b__10600,s__10598__$2,temp__5804__auto____$1,parts,c__5521__auto__,size__5522__auto__,b__10596,s__10594__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__10599,i__10595,part,c__5521__auto____$1,size__5522__auto____$1,b__10600,s__10598__$2,temp__5804__auto____$1,parts,c__5521__auto__,size__5522__auto__,b__10596,s__10594__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__10827 = (i__10599 + (1));
i__10599 = G__10827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10600),clojure$math$combinatorics$iter__10593_$_iter__10597(cljs.core.chunk_rest(s__10598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10600),null);
}
} else {
var part = cljs.core.first(s__10598__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__10595,part,s__10598__$2,temp__5804__auto____$1,parts,c__5521__auto__,size__5522__auto__,b__10596,s__10594__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__10595,part,s__10598__$2,temp__5804__auto____$1,parts,c__5521__auto__,size__5522__auto__,b__10596,s__10594__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__10593_$_iter__10597(cljs.core.rest(s__10598__$2)));
}
} else {
return null;
}
break;
}
});})(i__10595,parts,c__5521__auto__,size__5522__auto__,b__10596,s__10594__$2,temp__5804__auto__,items__$1,N,lex))
,null,null));
});})(i__10595,parts,c__5521__auto__,size__5522__auto__,b__10596,s__10594__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__5523__auto__(parts);
})());

var G__10828 = (i__10595 + (1));
i__10595 = G__10828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10596),clojure$math$combinatorics$iter__10593(cljs.core.chunk_rest(s__10594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10596),null);
}
} else {
var parts = cljs.core.first(s__10594__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (parts,s__10594__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__10593_$_iter__10601(s__10602){
return (new cljs.core.LazySeq(null,(function (){
var s__10602__$1 = s__10602;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__10602__$1);
if(temp__5804__auto____$1){
var s__10602__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10602__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10602__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10604 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10603 = (0);
while(true){
if((i__10603 < size__5522__auto__)){
var part = cljs.core._nth(c__5521__auto__,i__10603);
cljs.core.chunk_append(b__10604,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__10603,part,c__5521__auto__,size__5522__auto__,b__10604,s__10602__$2,temp__5804__auto____$1,parts,s__10594__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__10603,part,c__5521__auto__,size__5522__auto__,b__10604,s__10602__$2,temp__5804__auto____$1,parts,s__10594__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__10831 = (i__10603 + (1));
i__10603 = G__10831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10604),clojure$math$combinatorics$iter__10593_$_iter__10601(cljs.core.chunk_rest(s__10602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10604),null);
}
} else {
var part = cljs.core.first(s__10602__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__10602__$2,temp__5804__auto____$1,parts,s__10594__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__10602__$2,temp__5804__auto____$1,parts,s__10594__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__10593_$_iter__10601(cljs.core.rest(s__10602__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__10594__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__5523__auto__(parts);
})(),clojure$math$combinatorics$iter__10593(cljs.core.rest(s__10594__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(lex);
}));

(clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq10591){
var G__10592 = cljs.core.first(seq10591);
var seq10591__$1 = cljs.core.next(seq10591);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10592,seq10591__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__10606 = arguments.length;
switch (G__10606) {
case 3:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(multiset));
var m = cljs.core.count(multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__10607 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__10837 = (j + (1));
var G__10838 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__10839 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__10612 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__10612) : multiset.call(null,G__10612));
})());
var G__10840 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__10613 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__10613) : multiset.call(null,G__10613));
})());
j = G__10837;
c__$1 = G__10838;
u__$1 = G__10839;
v__$1 = G__10840;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10607,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10607,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10607,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__10614 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,k,((u__$1.cljs$core$IFn$_invoke$arity$1 ? u__$1.cljs$core$IFn$_invoke$arity$1(j) : u__$1.call(null,j)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)),(0))){
var G__10841 = (j + (1));
var G__10842 = k;
var G__10843 = true;
var G__10844 = u__$2;
var G__10845 = v__$1;
var G__10846 = c__$1;
j = G__10841;
k = G__10842;
x = G__10843;
u__$1 = G__10844;
v__$1 = G__10845;
c__$1 = G__10846;
continue;
} else {
if(cljs.core.not(x)){
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var x__5133__auto__ = (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j));
var y__5134__auto__ = (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());
var x__$1 = ((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)) < (v__$2.cljs$core$IFn$_invoke$arity$1 ? v__$2.cljs$core$IFn$_invoke$arity$1(j) : v__$2.call(null,j)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__10847 = j__$1;
var G__10848 = k__$1;
var G__10849 = x__$1;
var G__10850 = u__$2;
var G__10851 = v__$2;
var G__10852 = c__$2;
j = G__10847;
k = G__10848;
x = G__10849;
u__$1 = G__10850;
v__$1 = G__10851;
c__$1 = G__10852;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__10853 = j__$1;
var G__10854 = k__$1;
var G__10855 = x;
var G__10856 = u__$2;
var G__10857 = v__$2;
var G__10858 = c__$2;
j = G__10853;
k = G__10854;
x = G__10855;
u__$1 = G__10856;
v__$1 = G__10857;
c__$1 = G__10858;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10614,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10614,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10614,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10614,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10614,(4),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = r;
if(cljs.core.truth_(and__5043__auto__)){
return (((k > b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(r - (1)))));
} else {
return and__5043__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = s;
if(cljs.core.truth_(and__5043__auto__)){
return (((k <= b)) && (((l + (1)) < s)));
} else {
return and__5043__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,(l__$1 + (1)),b__$1);
var G__10859 = n;
var G__10860 = m;
var G__10861 = f__$1;
var G__10862 = c__$1;
var G__10863 = u__$1;
var G__10864 = v__$1;
var G__10865 = a__$1;
var G__10866 = b__$1;
var G__10867 = l__$1;
var G__10868 = r;
var G__10869 = s;
n = G__10859;
m = G__10860;
f = G__10861;
c = G__10862;
u = G__10863;
v = G__10864;
a = G__10865;
b = G__10866;
l = G__10867;
r = G__10868;
s = G__10869;
continue;
} else {
var part = (function (){var iter__5523__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__10614,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__10617(s__10618){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__10614,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__10618__$1 = s__10618;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10618__$1);
if(temp__5804__auto__){
var s__10618__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10618__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10618__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10620 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10619 = (0);
while(true){
if((i__10619 < size__5522__auto__)){
var y = cljs.core._nth(c__5521__auto__,i__10619);
cljs.core.chunk_append(b__10620,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__10621 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10621) : f.call(null,G__10621));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (i__10619,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5521__auto__,size__5522__auto__,b__10620,s__10618__$2,temp__5804__auto__,vec__10614,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__10617_$_iter__10622(s__10623){
return (new cljs.core.LazySeq(null,((function (i__10619,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5521__auto__,size__5522__auto__,b__10620,s__10618__$2,temp__5804__auto__,vec__10614,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__10623__$1 = s__10623;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__10623__$1);
if(temp__5804__auto____$1){
var s__10623__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10623__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__10623__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__10625 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__10624 = (0);
while(true){
if((i__10624 < size__5522__auto____$1)){
var z = cljs.core._nth(c__5521__auto____$1,i__10624);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__10625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__10870 = (i__10624 + (1));
i__10624 = G__10870;
continue;
} else {
var G__10871 = (i__10624 + (1));
i__10624 = G__10871;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10625),clojure$math$combinatorics$iter__10617_$_iter__10622(cljs.core.chunk_rest(s__10623__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10625),null);
}
} else {
var z = cljs.core.first(s__10623__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__10617_$_iter__10622(cljs.core.rest(s__10623__$2)));
} else {
var G__10872 = cljs.core.rest(s__10623__$2);
s__10623__$1 = G__10872;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__10619,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5521__auto__,size__5522__auto__,b__10620,s__10618__$2,temp__5804__auto__,vec__10614,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__10619,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5521__auto__,size__5522__auto__,b__10620,s__10618__$2,temp__5804__auto__,vec__10614,u__$1,v__$1,c__$1,j,k))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__10877 = (i__10619 + (1));
i__10619 = G__10877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10620),clojure$math$combinatorics$iter__10617(cljs.core.chunk_rest(s__10618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10620),null);
}
} else {
var y = cljs.core.first(s__10618__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__10626 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10626) : f.call(null,G__10626));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10618__$2,temp__5804__auto__,vec__10614,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__10617_$_iter__10627(s__10628){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10618__$2,temp__5804__auto__,vec__10614,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__10628__$1 = s__10628;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__10628__$1);
if(temp__5804__auto____$1){
var s__10628__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10628__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10628__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10630 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10629 = (0);
while(true){
if((i__10629 < size__5522__auto__)){
var z = cljs.core._nth(c__5521__auto__,i__10629);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__10630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__10878 = (i__10629 + (1));
i__10629 = G__10878;
continue;
} else {
var G__10879 = (i__10629 + (1));
i__10629 = G__10879;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10630),clojure$math$combinatorics$iter__10617_$_iter__10627(cljs.core.chunk_rest(s__10628__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10630),null);
}
} else {
var z = cljs.core.first(s__10628__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__10617_$_iter__10627(cljs.core.rest(s__10628__$2)));
} else {
var G__10880 = cljs.core.rest(s__10628__$2);
s__10628__$1 = G__10880;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10618__$2,temp__5804__auto__,vec__10614,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10618__$2,temp__5804__auto__,vec__10614,u__$1,v__$1,c__$1,j,k))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__10617(cljs.core.rest(s__10618__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__10614,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__10614,u__$1,v__$1,c__$1,j,k))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__10614,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__10614,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11);

clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(0))){
return j;
} else {
var G__10881 = (j - (1));
j = G__10881;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = r;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (((((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)) - (1)) * (r - l)) < (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(j) : u.call(null,j)))));
} else {
return and__5043__auto__;
}
})())){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(1))))){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
var v__$1 = clojure.math.combinatorics.update(v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$m5_$_iter__10631(s__10632){
return (new cljs.core.LazySeq(null,(function (){
var s__10632__$1 = s__10632;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10632__$1);
if(temp__5804__auto__){
var s__10632__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10632__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10632__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10634 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10633 = (0);
while(true){
if((i__10633 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__10633);
cljs.core.chunk_append(b__10634,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__10886 = (i__10633 + (1));
i__10633 = G__10886;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10634),clojure$math$combinatorics$m5_$_iter__10631(cljs.core.chunk_rest(s__10632__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10634),null);
}
} else {
var i = cljs.core.first(s__10632__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__10631(cljs.core.rest(s__10632__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$2((j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_(ks)){
return v__$2;
} else {
var k = cljs.core.first(ks);
var G__10887 = cljs.core.rest(ks);
var G__10888 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__10887;
v__$2 = G__10888;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (min_partitions_after_this - diff_uv);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = (v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(k_1) : v__$3.call(null,k_1));
if((amount > vk)){
var G__10889 = (k_1 - (1));
var G__10890 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__10891 = (amount - vk);
k_1 = G__10889;
v__$3 = G__10890;
amount = G__10891;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(vk - amount));
}
break;
}
})());
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l__$1) : f.call(null,l__$1));
return clojure.math.combinatorics.m5(n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10892 = arguments.length;
var i__5770__auto___10893 = (0);
while(true){
if((i__5770__auto___10893 < len__5769__auto___10892)){
args__5775__auto__.push((arguments[i__5770__auto___10893]));

var G__10894 = (i__5770__auto___10893 + (1));
i__5770__auto___10893 = G__10894;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__10637){
var map__10638 = p__10637;
var map__10638__$1 = cljs.core.__destructure_map(map__10638);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10638__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10638__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
if(((((function (){var or__5045__auto__ = from;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__5045__auto__ = to;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec(items);
var ditems = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items__$1));
var freqs = cljs.core.frequencies(items__$1);
var N = cljs.core.count(items__$1);
var M = cljs.core.count(ditems);
var from__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = from;
if(cljs.core.truth_(and__5043__auto__)){
return (from <= (1));
} else {
return and__5043__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = to;
if(cljs.core.truth_(and__5043__auto__)){
return (to >= N);
} else {
return and__5043__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__5045__auto__ = from__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__5045__auto__ = from__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})() <= (function (){var or__5045__auto__ = to__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return N;
}
})())) && (((function (){var or__5045__auto__ = to__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.first(items__$1),null,(1),null)))))),null,(1),null))))),null,(1),null)))));
} else {
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$iter__10639(s__10640){
return (new cljs.core.LazySeq(null,(function (){
var s__10640__$1 = s__10640;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10640__$1);
if(temp__5804__auto__){
var s__10640__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10640__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10640__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10642 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10641 = (0);
while(true){
if((i__10641 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__10641);
var j = (i + (1));
cljs.core.chunk_append(b__10642,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__10643 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__10643) : freqs.call(null,G__10643));
})()], null));

var G__10895 = (i__10641 + (1));
i__10641 = G__10895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10642),clojure$math$combinatorics$iter__10639(cljs.core.chunk_rest(s__10640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10642),null);
}
} else {
var i = cljs.core.first(s__10640__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__10644 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__10644) : freqs.call(null,G__10644));
})()], null),clojure$math$combinatorics$iter__10639(cljs.core.rest(s__10640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(start_multiset,to__$1,from__$1);
var iter__5523__auto__ = (function clojure$math$combinatorics$iter__10645(s__10646){
return (new cljs.core.LazySeq(null,(function (){
var s__10646__$1 = s__10646;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10646__$1);
if(temp__5804__auto__){
var s__10646__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10646__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10646__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10648 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10647 = (0);
while(true){
if((i__10647 < size__5522__auto__)){
var part = cljs.core._nth(c__5521__auto__,i__10647);
cljs.core.chunk_append(b__10648,(function (){var iter__5523__auto__ = ((function (i__10647,part,c__5521__auto__,size__5522__auto__,b__10648,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to){
return (function clojure$math$combinatorics$iter__10645_$_iter__10649(s__10650){
return (new cljs.core.LazySeq(null,((function (i__10647,part,c__5521__auto__,size__5522__auto__,b__10648,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to){
return (function (){
var s__10650__$1 = s__10650;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__10650__$1);
if(temp__5804__auto____$1){
var s__10650__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10650__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__10650__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__10652 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__10651 = (0);
while(true){
if((i__10651 < size__5522__auto____$1)){
var multiset = cljs.core._nth(c__5521__auto____$1,i__10651);
cljs.core.chunk_append(b__10652,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__10651,i__10647,multiset,c__5521__auto____$1,size__5522__auto____$1,b__10652,s__10650__$2,temp__5804__auto____$1,part,c__5521__auto__,size__5522__auto__,b__10648,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to){
return (function (p__10653){
var vec__10654 = p__10653;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10654,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10654,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__10657 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10657) : ditems.call(null,G__10657));
})());
});})(i__10651,i__10647,multiset,c__5521__auto____$1,size__5522__auto____$1,b__10652,s__10650__$2,temp__5804__auto____$1,part,c__5521__auto__,size__5522__auto__,b__10648,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to))
,multiset)));

var G__10896 = (i__10651 + (1));
i__10651 = G__10896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10652),clojure$math$combinatorics$iter__10645_$_iter__10649(cljs.core.chunk_rest(s__10650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10652),null);
}
} else {
var multiset = cljs.core.first(s__10650__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__10647,multiset,s__10650__$2,temp__5804__auto____$1,part,c__5521__auto__,size__5522__auto__,b__10648,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to){
return (function (p__10658){
var vec__10659 = p__10658;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10659,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10659,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__10662 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10662) : ditems.call(null,G__10662));
})());
});})(i__10647,multiset,s__10650__$2,temp__5804__auto____$1,part,c__5521__auto__,size__5522__auto__,b__10648,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__10645_$_iter__10649(cljs.core.rest(s__10650__$2)));
}
} else {
return null;
}
break;
}
});})(i__10647,part,c__5521__auto__,size__5522__auto__,b__10648,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to))
,null,null));
});})(i__10647,part,c__5521__auto__,size__5522__auto__,b__10648,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to))
;
return iter__5523__auto__(part);
})());

var G__10897 = (i__10647 + (1));
i__10647 = G__10897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10648),clojure$math$combinatorics$iter__10645(cljs.core.chunk_rest(s__10646__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10648),null);
}
} else {
var part = cljs.core.first(s__10646__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (part,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to){
return (function clojure$math$combinatorics$iter__10645_$_iter__10663(s__10664){
return (new cljs.core.LazySeq(null,(function (){
var s__10664__$1 = s__10664;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__10664__$1);
if(temp__5804__auto____$1){
var s__10664__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10664__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__10664__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__10666 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__10665 = (0);
while(true){
if((i__10665 < size__5522__auto__)){
var multiset = cljs.core._nth(c__5521__auto__,i__10665);
cljs.core.chunk_append(b__10666,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__10665,multiset,c__5521__auto__,size__5522__auto__,b__10666,s__10664__$2,temp__5804__auto____$1,part,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to){
return (function (p__10667){
var vec__10668 = p__10667;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10668,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10668,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__10671 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10671) : ditems.call(null,G__10671));
})());
});})(i__10665,multiset,c__5521__auto__,size__5522__auto__,b__10666,s__10664__$2,temp__5804__auto____$1,part,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to))
,multiset)));

var G__10898 = (i__10665 + (1));
i__10665 = G__10898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10666),clojure$math$combinatorics$iter__10645_$_iter__10663(cljs.core.chunk_rest(s__10664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10666),null);
}
} else {
var multiset = cljs.core.first(s__10664__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__10664__$2,temp__5804__auto____$1,part,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to){
return (function (p__10672){
var vec__10673 = p__10672;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10673,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10673,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__10676 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10676) : ditems.call(null,G__10676));
})());
});})(multiset,s__10664__$2,temp__5804__auto____$1,part,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__10645_$_iter__10663(cljs.core.rest(s__10664__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__10646__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10638,map__10638__$1,from,to))
;
return iter__5523__auto__(part);
})(),clojure$math$combinatorics$iter__10645(cljs.core.rest(s__10646__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(parts);

}
}
}
}));

(clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq10635){
var G__10636 = cljs.core.first(seq10635);
var seq10635__$1 = cljs.core.next(seq10635);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10636,seq10635__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10903 = arguments.length;
var i__5770__auto___10904 = (0);
while(true){
if((i__5770__auto___10904 < len__5769__auto___10903)){
args__5775__auto__.push((arguments[i__5770__auto___10904]));

var G__10905 = (i__5770__auto___10904 + (1));
i__5770__auto___10904 = G__10905;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_M,items,args);

}
}
}));

(clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq10677){
var G__10678 = cljs.core.first(seq10677);
var seq10677__$1 = cljs.core.next(seq10677);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10678,seq10677__$1);
}));


//# sourceMappingURL=clojure.math.combinatorics.js.map
