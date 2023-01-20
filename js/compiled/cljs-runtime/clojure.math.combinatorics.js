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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__12956 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__12956) : clojure.math.combinatorics.join.call(null,G__12956));
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
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__12961(s__12962){
return (new cljs.core.LazySeq(null,(function (){
var s__12962__$1 = s__12962;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12962__$1);
if(temp__5804__auto__){
var s__12962__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12962__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12962__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12964 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12963 = (0);
while(true){
if((i__12963 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__12963);
cljs.core.chunk_append(b__12964,((j + cnt) + (- (n + (1)))));

var G__13693 = (i__12963 + (1));
i__12963 = G__13693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12964),clojure$math$combinatorics$index_combinations_$_iter__12961(cljs.core.chunk_rest(s__12962__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12964),null);
}
} else {
var j = cljs.core.first(s__12962__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__12961(cljs.core.rest(s__12962__$2)));
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
var G__13694 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__13695 = (j__$1 - (1));
c__$3 = G__13694;
j__$1 = G__13695;
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
var G__13696 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__13697 = (index__$1 + (1));
var G__13698 = (already_distributed__$1 + mi);
distribution__$1 = G__13696;
index__$1 = G__13697;
already_distributed__$1 = G__13698;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__12983 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12983,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12983,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12983,(2),null);
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
var vec__12989 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12989,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12989,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12989,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__13699 = distribution__$2;
distribution__$1 = G__13699;
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
var m = cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__13004(s__13005){
return (new cljs.core.LazySeq(null,(function (){
var s__13005__$1 = s__13005;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13005__$1);
if(temp__5804__auto__){
var s__13005__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13005__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13005__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13007 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13006 = (0);
while(true){
if((i__13006 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__13006);
cljs.core.chunk_append(b__13007,(function (){var G__13011 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13011) : f.call(null,G__13011));
})());

var G__13704 = (i__13006 + (1));
i__13006 = G__13704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13007),clojure$math$combinatorics$multi_comb_$_iter__13004(cljs.core.chunk_rest(s__13005__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13007),null);
}
} else {
var i = cljs.core.first(s__13005__$2);
return cljs.core.cons((function (){var G__13014 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13014) : f.call(null,G__13014));
})(),clojure$math$combinatorics$multi_comb_$_iter__13004(cljs.core.rest(s__13005__$2)));
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
var iter__5523__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__13015(s__13016){
return (new cljs.core.LazySeq(null,(function (){
var s__13016__$1 = s__13016;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13016__$1);
if(temp__5804__auto__){
var s__13016__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13016__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13016__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13018 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13017 = (0);
while(true){
if((i__13017 < size__5522__auto__)){
var q = cljs.core._nth(c__5521__auto__,i__13017);
cljs.core.chunk_append(b__13018,clojure.math.combinatorics.join((function (){var iter__5523__auto__ = ((function (i__13017,q,c__5521__auto__,size__5522__auto__,b__13018,s__13016__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__13015_$_iter__13025(s__13026){
return (new cljs.core.LazySeq(null,((function (i__13017,q,c__5521__auto__,size__5522__auto__,b__13018,s__13016__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function (){
var s__13026__$1 = s__13026;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13026__$1);
if(temp__5804__auto____$1){
var s__13026__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13026__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__13026__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__13028 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__13027 = (0);
while(true){
if((i__13027 < size__5522__auto____$1)){
var vec__13032 = cljs.core._nth(c__5521__auto____$1,i__13027);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13032,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13032,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13032,(2),null);
cljs.core.chunk_append(b__13028,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__13723 = (i__13027 + (1));
i__13027 = G__13723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13028),clojure$math$combinatorics$multi_comb_$_iter__13015_$_iter__13025(cljs.core.chunk_rest(s__13026__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13028),null);
}
} else {
var vec__13044 = cljs.core.first(s__13026__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13044,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13044,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13044,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__13015_$_iter__13025(cljs.core.rest(s__13026__$2)));
}
} else {
return null;
}
break;
}
});})(i__13017,q,c__5521__auto__,size__5522__auto__,b__13018,s__13016__$2,temp__5804__auto__,f,v,domain,m,qs))
,null,null));
});})(i__13017,q,c__5521__auto__,size__5522__auto__,b__13018,s__13016__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__5523__auto__(q);
})()));

var G__13724 = (i__13017 + (1));
i__13017 = G__13724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13018),clojure$math$combinatorics$multi_comb_$_iter__13015(cljs.core.chunk_rest(s__13016__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13018),null);
}
} else {
var q = cljs.core.first(s__13016__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__5523__auto__ = ((function (q,s__13016__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__13015_$_iter__13049(s__13050){
return (new cljs.core.LazySeq(null,(function (){
var s__13050__$1 = s__13050;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13050__$1);
if(temp__5804__auto____$1){
var s__13050__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13050__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13050__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13052 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13051 = (0);
while(true){
if((i__13051 < size__5522__auto__)){
var vec__13053 = cljs.core._nth(c__5521__auto__,i__13051);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13053,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13053,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13053,(2),null);
cljs.core.chunk_append(b__13052,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__13736 = (i__13051 + (1));
i__13051 = G__13736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13052),clojure$math$combinatorics$multi_comb_$_iter__13015_$_iter__13049(cljs.core.chunk_rest(s__13050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13052),null);
}
} else {
var vec__13056 = cljs.core.first(s__13050__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__13015_$_iter__13049(cljs.core.rest(s__13050__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__13016__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__5523__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__13015(cljs.core.rest(s__13016__$2)));
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
var iter__5523__auto__ = (function clojure$math$combinatorics$combinations_$_iter__13069(s__13070){
return (new cljs.core.LazySeq(null,(function (){
var s__13070__$1 = s__13070;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13070__$1);
if(temp__5804__auto__){
var s__13070__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13070__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13070__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13072 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13071 = (0);
while(true){
if((i__13071 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__13071);
cljs.core.chunk_append(b__13072,(new cljs.core.List(null,item,null,(1),null)));

var G__13745 = (i__13071 + (1));
i__13071 = G__13745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13072),clojure$math$combinatorics$combinations_$_iter__13069(cljs.core.chunk_rest(s__13070__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13072),null);
}
} else {
var item = cljs.core.first(s__13070__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__13069(cljs.core.rest(s__13070__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13065_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__13065_SHARP_);
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
return cljs.core.cons(cljs.core.first(s),(function (){var G__13089 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__13089) : clojure.math.combinatorics.unchunk.call(null,G__13089));
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
var len__5769__auto___13750 = arguments.length;
var i__5770__auto___13751 = (0);
while(true){
if((i__5770__auto___13751 < len__5769__auto___13750)){
args__5775__auto__.push((arguments[i__5770__auto___13751]));

var G__13752 = (i__5770__auto___13751 + (1));
i__5770__auto___13751 = G__13752;
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
var G__13753 = (i - (1));
var G__13754 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__13753;
v_seqs__$2 = G__13754;
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
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq13095){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13095));
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
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__13128 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__13128) : v.call(null,G__13128));
})())){
return i;
} else {
var G__13755 = (i - (1));
i = G__13755;
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
var G__13756 = (i - (1));
i = G__13756;
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
var G__13757 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__13758 = (k + (1));
var G__13759 = (l__$1 - (1));
v__$1 = G__13757;
k = G__13758;
l__$1 = G__13759;
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
var G__13134 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__13134) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__13134));
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
var indices = clojure.math.combinatorics.join((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__13146(s__13147){
return (new cljs.core.LazySeq(null,(function (){
var s__13147__$1 = s__13147;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13147__$1);
if(temp__5804__auto__){
var s__13147__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13147__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13147__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13149 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13148 = (0);
while(true){
if((i__13148 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__13148);
cljs.core.chunk_append(b__13149,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__13157 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13157) : f.call(null,G__13157));
})(),i));

var G__13760 = (i__13148 + (1));
i__13148 = G__13760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13149),clojure$math$combinatorics$multi_perm_$_iter__13146(cljs.core.chunk_rest(s__13147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13149),null);
}
} else {
var i = cljs.core.first(s__13147__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__13163 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13163) : f.call(null,G__13163));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__13146(cljs.core.rest(s__13147__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13168_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__13168_SHARP_);
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
var G__13763 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__13764 = (n__$1 - (1));
acc = G__13763;
n__$1 = G__13764;
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
var G__13767 = q;
var G__13768 = cljs.core.cons(r,digits);
var G__13769 = (divisor + (1));
n__$1 = G__13767;
digits = G__13768;
divisor = G__13769;
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
var G__13771 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__13772 = cljs.core.rest(l__$1);
var G__13773 = (n__$1 - (1));
acc = G__13771;
l__$1 = G__13772;
n__$1 = G__13773;
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
var G__13777 = cljs.core.rest(indices);
var G__13778 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__13779 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__13777;
l__$1 = G__13778;
perm = G__13779;
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
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__13207(s__13208){
return (new cljs.core.LazySeq(null,(function (){
var s__13208__$1 = s__13208;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13208__$1);
if(temp__5804__auto__){
var s__13208__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13208__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13208__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13210 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13209 = (0);
while(true){
if((i__13209 < size__5522__auto__)){
var vec__13211 = cljs.core._nth(c__5521__auto__,i__13209);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13211,(1),null);
cljs.core.chunk_append(b__13210,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__13780 = (i__13209 + (1));
i__13209 = G__13780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13210),clojure$math$combinatorics$initial_perm_numbers_$_iter__13207(cljs.core.chunk_rest(s__13208__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13210),null);
}
} else {
var vec__13218 = cljs.core.first(s__13208__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13218,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__13207(cljs.core.rest(s__13208__$2)));
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
var G__13781 = cljs.core.rest(perm_numbers__$1);
var G__13782 = (index + (1));
perm_numbers__$1 = G__13781;
index = G__13782;
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
var vec__13225 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13225,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13225,(1),null);
var G__13787 = remainder;
var G__13788 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__13789 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__13787;
digits = G__13788;
freqs__$1 = G__13789;
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
var G__13790 = clojure.math.combinatorics.dec_key(freqs,item);
var G__13791 = cljs.core.rest(indices);
var G__13792 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__13790;
indices = G__13791;
perm = G__13792;
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
var indices = clojure.math.combinatorics.join((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__13233(s__13234){
return (new cljs.core.LazySeq(null,(function (){
var s__13234__$1 = s__13234;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13234__$1);
if(temp__5804__auto__){
var s__13234__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13234__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13234__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13236 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13235 = (0);
while(true){
if((i__13235 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__13235);
cljs.core.chunk_append(b__13236,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__13237 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13237) : f.call(null,G__13237));
})(),i));

var G__13797 = (i__13235 + (1));
i__13235 = G__13797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13236),clojure$math$combinatorics$nth_permutation_$_iter__13233(cljs.core.chunk_rest(s__13234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13236),null);
}
} else {
var i = cljs.core.first(s__13234__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__13238 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13238) : f.call(null,G__13238));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__13233(cljs.core.rest(s__13234__$2)));
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
var indices = clojure.math.combinatorics.join((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__13239(s__13240){
return (new cljs.core.LazySeq(null,(function (){
var s__13240__$1 = s__13240;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13240__$1);
if(temp__5804__auto__){
var s__13240__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13240__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13240__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13242 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13241 = (0);
while(true){
if((i__13241 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__13241);
cljs.core.chunk_append(b__13242,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__13243 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13243) : f.call(null,G__13243));
})(),i));

var G__13798 = (i__13241 + (1));
i__13241 = G__13798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13242),clojure$math$combinatorics$drop_permutations_$_iter__13239(cljs.core.chunk_rest(s__13240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13242),null);
}
} else {
var i = cljs.core.first(s__13240__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__13244 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13244) : f.call(null,G__13244));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__13239(cljs.core.rest(s__13240__$2)));
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
var G__13803 = n;
var G__13804 = (n - k);
n = G__13803;
k = G__13804;
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
var G__13250 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1)));
var G__13251 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs))),t);
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__13250,G__13251) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__13250,G__13251));

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
var count_combinations_from_frequencies_orig_val__13254 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__13255 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__13255);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__13254);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__13812 = n__$1;
var G__13813 = y;
var G__13814 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__13812;
y = G__13813;
z = G__13814;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__13818 = n__$1;
var G__13819 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__13820 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__13818;
y = G__13819;
z = G__13820;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__13263(s__13264){
return (new cljs.core.LazySeq(null,(function (){
var s__13264__$1 = s__13264;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13264__$1);
if(temp__5804__auto__){
var s__13264__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13264__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13264__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13266 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13265 = (0);
while(true){
if((i__13265 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__13265);
cljs.core.chunk_append(b__13266,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__13822 = (i__13265 + (1));
i__13265 = G__13822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13266),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__13263(cljs.core.chunk_rest(s__13264__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13266),null);
}
} else {
var i = cljs.core.first(s__13264__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__13263(cljs.core.rest(s__13264__$2)));
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
var count_combinations_from_frequencies_orig_val__13280 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__13281 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__13281);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__13280);
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
var G__13824 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__13825 = cljs.core.rest(items__$1);
var G__13826 = (t__$1 - (1));
var G__13827 = n__$1;
comb = G__13824;
items__$1 = G__13825;
t__$1 = G__13826;
n__$1 = G__13827;
continue;
} else {
var G__13829 = comb;
var G__13830 = cljs.core.rest(items__$1);
var G__13831 = t__$1;
var G__13832 = (n__$1 - dc_dt);
comb = G__13829;
items__$1 = G__13830;
t__$1 = G__13831;
n__$1 = G__13832;
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
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__13321(s__13322){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__13322__$1 = s__13322;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13322__$1);
if(temp__5804__auto__){
var s__13322__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13322__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13322__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13324 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13323 = (0);
while(true){
if((i__13323 < size__5522__auto__)){
var vec__13337 = cljs.core._nth(c__5521__auto__,i__13323);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13337,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13337,(1),null);
cljs.core.chunk_append(b__13324,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__13839 = (i__13323 + (1));
i__13323 = G__13839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13324),clojure$math$combinatorics$nth_combination_freqs_$_iter__13321(cljs.core.chunk_rest(s__13322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13324),null);
}
} else {
var vec__13344 = cljs.core.first(s__13322__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13344,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13344,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__13321(cljs.core.rest(s__13322__$2)));
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
var G__13846 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__13847 = remove_one_key;
var G__13848 = (t__$1 - (1));
var G__13849 = n__$1;
comb = G__13846;
freqs__$1 = G__13847;
t__$1 = G__13848;
n__$1 = G__13849;
continue;
} else {
var G__13850 = comb;
var G__13851 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__13852 = t__$1;
var G__13853 = (n__$1 - dc_dt);
comb = G__13850;
freqs__$1 = G__13851;
t__$1 = G__13852;
n__$1 = G__13853;
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
var count_combinations_from_frequencies_orig_val__13347 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__13348 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__13348);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__13356(s__13357){
return (new cljs.core.LazySeq(null,(function (){
var s__13357__$1 = s__13357;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13357__$1);
if(temp__5804__auto__){
var s__13357__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13357__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13357__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13359 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13358 = (0);
while(true){
if((i__13358 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__13358);
cljs.core.chunk_append(b__13359,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__13363 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13363) : f.call(null,G__13363));
})(),i));

var G__13866 = (i__13358 + (1));
i__13358 = G__13866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13359),clojure$math$combinatorics$nth_combination_$_iter__13356(cljs.core.chunk_rest(s__13357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13359),null);
}
} else {
var i = cljs.core.first(s__13357__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__13364 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13364) : f.call(null,G__13364));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__13356(cljs.core.rest(s__13357__$2)));
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
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__13347);
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
var G__13877 = (size + (1));
var G__13878 = (n__$1 - num_combinations);
size = G__13877;
n__$1 = G__13878;
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
var G__13885 = cljs.core.rest(l__$1);
var G__13886 = (n + (1));
l__$1 = G__13885;
n = G__13886;
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
var G__13887 = cljs.core.rest(l__$1);
var G__13888 = (function (){var G__13383 = index;
var G__13384 = (function (){var G__13385 = clojure.math.combinatorics.factorial(n);
var G__13386 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__13385,G__13386) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__13385,G__13386));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__13383,G__13384) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__13383,G__13384));
})();
var G__13889 = (n - (1));
l__$1 = G__13887;
index = G__13888;
n = G__13889;
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
var G__13896 = cljs.core.rest(l__$1);
var G__13897 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__5523__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__13428(s__13429){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__13429__$1 = s__13429;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13429__$1);
if(temp__5804__auto__){
var s__13429__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13429__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13429__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13431 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13430 = (0);
while(true){
if((i__13430 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__13430);
cljs.core.chunk_append(b__13431,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__13905 = (i__13430 + (1));
i__13430 = G__13905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13431),clojure$math$combinatorics$permutation_index_duplicates_$_iter__13428(cljs.core.chunk_rest(s__13429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13431),null);
}
} else {
var k = cljs.core.first(s__13429__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__13428(cljs.core.rest(s__13429__$2)));
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
return (function (p1__13387_SHARP_){
return (cljs.core.compare(p1__13387_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__5523__auto__))
,cljs.core.keys(freqs)));
})());
var G__13898 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__13896;
index = G__13897;
freqs = G__13898;
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
return cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$init_$_iter__13488(s__13489){
return (new cljs.core.LazySeq(null,(function (){
var s__13489__$1 = s__13489;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13489__$1);
if(temp__5804__auto__){
var s__13489__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13489__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13489__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13491 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13490 = (0);
while(true){
if((i__13490 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__13490);
cljs.core.chunk_append(b__13491,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (i - ((n - s) - (-1)));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());

var G__13912 = (i__13490 + (1));
i__13490 = G__13912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13491),clojure$math$combinatorics$init_$_iter__13488(cljs.core.chunk_rest(s__13489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13491),null);
}
} else {
var i = cljs.core.first(s__13489__$2);
return cljs.core.cons((function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (i - ((n - s) - (-1)));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),clojure$math$combinatorics$init_$_iter__13488(cljs.core.rest(s__13489__$2)));
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
var G__13494 = arguments.length;
switch (G__13494) {
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
var G__13914 = (j - (1));
j = G__13914;
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
var vec__13498 = (function (){var a__$2 = a__$1;
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
var G__13917 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__13918 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__13919 = (i + (1));
var G__13920 = (function (){var x__5130__auto__ = current_max;
var y__5131__auto__ = (new_a_i + (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
a__$2 = G__13917;
b__$1 = G__13918;
i = G__13919;
current_max = G__13920;
continue;
} else {
var G__13921 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__13922 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__13923 = (i + (1));
var G__13924 = current_max;
a__$2 = G__13921;
b__$1 = G__13922;
i = G__13923;
current_max = G__13924;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13498,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13498,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13928 = arguments.length;
var i__5770__auto___13929 = (0);
while(true){
if((i__5770__auto___13929 < len__5769__auto___13928)){
args__5775__auto__.push((arguments[i__5770__auto___13929]));

var G__13930 = (i__5770__auto___13929 + (1));
i__5770__auto___13929 = G__13930;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__13509){
var map__13510 = p__13509;
var map__13510__$1 = cljs.core.__destructure_map(map__13510);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13510__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13510__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var iter__5523__auto__ = (function clojure$math$combinatorics$iter__13515(s__13516){
return (new cljs.core.LazySeq(null,(function (){
var s__13516__$1 = s__13516;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13516__$1);
if(temp__5804__auto__){
var s__13516__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13516__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13516__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13518 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13517 = (0);
while(true){
if((i__13517 < size__5522__auto__)){
var growth_string = cljs.core._nth(c__5521__auto__,i__13517);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__13518,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__13931 = (i__13517 + (1));
i__13517 = G__13931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13518),clojure$math$combinatorics$iter__13515(cljs.core.chunk_rest(s__13516__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13518),null);
}
} else {
var growth_string = cljs.core.first(s__13516__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__13515(cljs.core.rest(s__13516__$2)));
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
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq13505){
var G__13506 = cljs.core.first(seq13505);
var seq13505__$1 = cljs.core.next(seq13505);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13506,seq13505__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13932 = arguments.length;
var i__5770__auto___13933 = (0);
while(true){
if((i__5770__auto___13933 < len__5769__auto___13932)){
args__5775__auto__.push((arguments[i__5770__auto___13933]));

var G__13934 = (i__5770__auto___13933 + (1));
i__5770__auto___13933 = G__13934;
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
var iter__5523__auto__ = (function clojure$math$combinatorics$iter__13527(s__13528){
return (new cljs.core.LazySeq(null,(function (){
var s__13528__$1 = s__13528;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13528__$1);
if(temp__5804__auto__){
var s__13528__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13528__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13528__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13530 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13529 = (0);
while(true){
if((i__13529 < size__5522__auto__)){
var parts = cljs.core._nth(c__5521__auto__,i__13529);
cljs.core.chunk_append(b__13530,(function (){var iter__5523__auto__ = ((function (i__13529,parts,c__5521__auto__,size__5522__auto__,b__13530,s__13528__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__13527_$_iter__13532(s__13533){
return (new cljs.core.LazySeq(null,((function (i__13529,parts,c__5521__auto__,size__5522__auto__,b__13530,s__13528__$2,temp__5804__auto__,items__$1,N,lex){
return (function (){
var s__13533__$1 = s__13533;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13533__$1);
if(temp__5804__auto____$1){
var s__13533__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13533__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__13533__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__13535 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__13534 = (0);
while(true){
if((i__13534 < size__5522__auto____$1)){
var part = cljs.core._nth(c__5521__auto____$1,i__13534);
cljs.core.chunk_append(b__13535,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__13534,i__13529,part,c__5521__auto____$1,size__5522__auto____$1,b__13535,s__13533__$2,temp__5804__auto____$1,parts,c__5521__auto__,size__5522__auto__,b__13530,s__13528__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__13534,i__13529,part,c__5521__auto____$1,size__5522__auto____$1,b__13535,s__13533__$2,temp__5804__auto____$1,parts,c__5521__auto__,size__5522__auto__,b__13530,s__13528__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__13935 = (i__13534 + (1));
i__13534 = G__13935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13535),clojure$math$combinatorics$iter__13527_$_iter__13532(cljs.core.chunk_rest(s__13533__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13535),null);
}
} else {
var part = cljs.core.first(s__13533__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__13529,part,s__13533__$2,temp__5804__auto____$1,parts,c__5521__auto__,size__5522__auto__,b__13530,s__13528__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__13529,part,s__13533__$2,temp__5804__auto____$1,parts,c__5521__auto__,size__5522__auto__,b__13530,s__13528__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__13527_$_iter__13532(cljs.core.rest(s__13533__$2)));
}
} else {
return null;
}
break;
}
});})(i__13529,parts,c__5521__auto__,size__5522__auto__,b__13530,s__13528__$2,temp__5804__auto__,items__$1,N,lex))
,null,null));
});})(i__13529,parts,c__5521__auto__,size__5522__auto__,b__13530,s__13528__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__5523__auto__(parts);
})());

var G__13936 = (i__13529 + (1));
i__13529 = G__13936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13530),clojure$math$combinatorics$iter__13527(cljs.core.chunk_rest(s__13528__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13530),null);
}
} else {
var parts = cljs.core.first(s__13528__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (parts,s__13528__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__13527_$_iter__13539(s__13540){
return (new cljs.core.LazySeq(null,(function (){
var s__13540__$1 = s__13540;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13540__$1);
if(temp__5804__auto____$1){
var s__13540__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13540__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13540__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13542 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13541 = (0);
while(true){
if((i__13541 < size__5522__auto__)){
var part = cljs.core._nth(c__5521__auto__,i__13541);
cljs.core.chunk_append(b__13542,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__13541,part,c__5521__auto__,size__5522__auto__,b__13542,s__13540__$2,temp__5804__auto____$1,parts,s__13528__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__13541,part,c__5521__auto__,size__5522__auto__,b__13542,s__13540__$2,temp__5804__auto____$1,parts,s__13528__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__13938 = (i__13541 + (1));
i__13541 = G__13938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13542),clojure$math$combinatorics$iter__13527_$_iter__13539(cljs.core.chunk_rest(s__13540__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13542),null);
}
} else {
var part = cljs.core.first(s__13540__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__13540__$2,temp__5804__auto____$1,parts,s__13528__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__13540__$2,temp__5804__auto____$1,parts,s__13528__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__13527_$_iter__13539(cljs.core.rest(s__13540__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__13528__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__5523__auto__(parts);
})(),clojure$math$combinatorics$iter__13527(cljs.core.rest(s__13528__$2)));
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
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq13521){
var G__13522 = cljs.core.first(seq13521);
var seq13521__$1 = cljs.core.next(seq13521);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13522,seq13521__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__13551 = arguments.length;
switch (G__13551) {
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
var vec__13554 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__13940 = (j + (1));
var G__13941 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__13942 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__13559 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__13559) : multiset.call(null,G__13559));
})());
var G__13943 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__13560 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__13560) : multiset.call(null,G__13560));
})());
j = G__13940;
c__$1 = G__13941;
u__$1 = G__13942;
v__$1 = G__13943;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13554,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13554,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13554,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__13563 = (function (){var j = a;
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
var G__13944 = (j + (1));
var G__13945 = k;
var G__13946 = true;
var G__13947 = u__$2;
var G__13948 = v__$1;
var G__13949 = c__$1;
j = G__13944;
k = G__13945;
x = G__13946;
u__$1 = G__13947;
v__$1 = G__13948;
c__$1 = G__13949;
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
var G__13951 = j__$1;
var G__13952 = k__$1;
var G__13953 = x__$1;
var G__13954 = u__$2;
var G__13955 = v__$2;
var G__13956 = c__$2;
j = G__13951;
k = G__13952;
x = G__13953;
u__$1 = G__13954;
v__$1 = G__13955;
c__$1 = G__13956;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__13957 = j__$1;
var G__13958 = k__$1;
var G__13959 = x;
var G__13960 = u__$2;
var G__13961 = v__$2;
var G__13962 = c__$2;
j = G__13957;
k = G__13958;
x = G__13959;
u__$1 = G__13960;
v__$1 = G__13961;
c__$1 = G__13962;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13563,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13563,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13563,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13563,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13563,(4),null);
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
var G__13969 = n;
var G__13970 = m;
var G__13971 = f__$1;
var G__13972 = c__$1;
var G__13973 = u__$1;
var G__13974 = v__$1;
var G__13975 = a__$1;
var G__13976 = b__$1;
var G__13977 = l__$1;
var G__13978 = r;
var G__13979 = s;
n = G__13969;
m = G__13970;
f = G__13971;
c = G__13972;
u = G__13973;
v = G__13974;
a = G__13975;
b = G__13976;
l = G__13977;
r = G__13978;
s = G__13979;
continue;
} else {
var part = (function (){var iter__5523__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__13563,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__13570(s__13571){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__13563,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__13571__$1 = s__13571;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13571__$1);
if(temp__5804__auto__){
var s__13571__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13571__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13571__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13573 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13572 = (0);
while(true){
if((i__13572 < size__5522__auto__)){
var y = cljs.core._nth(c__5521__auto__,i__13572);
cljs.core.chunk_append(b__13573,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__13574 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13574) : f.call(null,G__13574));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (i__13572,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5521__auto__,size__5522__auto__,b__13573,s__13571__$2,temp__5804__auto__,vec__13563,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__13570_$_iter__13576(s__13577){
return (new cljs.core.LazySeq(null,((function (i__13572,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5521__auto__,size__5522__auto__,b__13573,s__13571__$2,temp__5804__auto__,vec__13563,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__13577__$1 = s__13577;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13577__$1);
if(temp__5804__auto____$1){
var s__13577__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13577__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__13577__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__13579 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__13578 = (0);
while(true){
if((i__13578 < size__5522__auto____$1)){
var z = cljs.core._nth(c__5521__auto____$1,i__13578);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__13579,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__14018 = (i__13578 + (1));
i__13578 = G__14018;
continue;
} else {
var G__14019 = (i__13578 + (1));
i__13578 = G__14019;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13579),clojure$math$combinatorics$iter__13570_$_iter__13576(cljs.core.chunk_rest(s__13577__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13579),null);
}
} else {
var z = cljs.core.first(s__13577__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__13570_$_iter__13576(cljs.core.rest(s__13577__$2)));
} else {
var G__14020 = cljs.core.rest(s__13577__$2);
s__13577__$1 = G__14020;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__13572,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5521__auto__,size__5522__auto__,b__13573,s__13571__$2,temp__5804__auto__,vec__13563,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__13572,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5521__auto__,size__5522__auto__,b__13573,s__13571__$2,temp__5804__auto__,vec__13563,u__$1,v__$1,c__$1,j,k))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__14021 = (i__13572 + (1));
i__13572 = G__14021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13573),clojure$math$combinatorics$iter__13570(cljs.core.chunk_rest(s__13571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13573),null);
}
} else {
var y = cljs.core.first(s__13571__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__13582 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13582) : f.call(null,G__13582));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__13571__$2,temp__5804__auto__,vec__13563,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__13570_$_iter__13583(s__13584){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__13571__$2,temp__5804__auto__,vec__13563,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__13584__$1 = s__13584;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13584__$1);
if(temp__5804__auto____$1){
var s__13584__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13584__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13584__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13586 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13585 = (0);
while(true){
if((i__13585 < size__5522__auto__)){
var z = cljs.core._nth(c__5521__auto__,i__13585);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__13586,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__14022 = (i__13585 + (1));
i__13585 = G__14022;
continue;
} else {
var G__14024 = (i__13585 + (1));
i__13585 = G__14024;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13586),clojure$math$combinatorics$iter__13570_$_iter__13583(cljs.core.chunk_rest(s__13584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13586),null);
}
} else {
var z = cljs.core.first(s__13584__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__13570_$_iter__13583(cljs.core.rest(s__13584__$2)));
} else {
var G__14025 = cljs.core.rest(s__13584__$2);
s__13584__$1 = G__14025;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__13571__$2,temp__5804__auto__,vec__13563,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__13571__$2,temp__5804__auto__,vec__13563,u__$1,v__$1,c__$1,j,k))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__13570(cljs.core.rest(s__13571__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__13563,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__13563,u__$1,v__$1,c__$1,j,k))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__13563,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__13563,u__$1,v__$1,c__$1,j,k))
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
var G__14028 = (j - (1));
j = G__14028;
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
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$m5_$_iter__13591(s__13592){
return (new cljs.core.LazySeq(null,(function (){
var s__13592__$1 = s__13592;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13592__$1);
if(temp__5804__auto__){
var s__13592__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13592__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13592__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13594 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13593 = (0);
while(true){
if((i__13593 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__13593);
cljs.core.chunk_append(b__13594,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__14032 = (i__13593 + (1));
i__13593 = G__14032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13594),clojure$math$combinatorics$m5_$_iter__13591(cljs.core.chunk_rest(s__13592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13594),null);
}
} else {
var i = cljs.core.first(s__13592__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__13591(cljs.core.rest(s__13592__$2)));
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
var G__14042 = cljs.core.rest(ks);
var G__14043 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__14042;
v__$2 = G__14043;
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
var G__14060 = (k_1 - (1));
var G__14061 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__14062 = (amount - vk);
k_1 = G__14060;
v__$3 = G__14061;
amount = G__14062;
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
var len__5769__auto___14076 = arguments.length;
var i__5770__auto___14077 = (0);
while(true){
if((i__5770__auto___14077 < len__5769__auto___14076)){
args__5775__auto__.push((arguments[i__5770__auto___14077]));

var G__14082 = (i__5770__auto___14077 + (1));
i__5770__auto___14077 = G__14082;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__13617){
var map__13618 = p__13617;
var map__13618__$1 = cljs.core.__destructure_map(map__13618);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13618__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13618__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$iter__13647(s__13648){
return (new cljs.core.LazySeq(null,(function (){
var s__13648__$1 = s__13648;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13648__$1);
if(temp__5804__auto__){
var s__13648__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13648__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13648__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13650 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13649 = (0);
while(true){
if((i__13649 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__13649);
var j = (i + (1));
cljs.core.chunk_append(b__13650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__13654 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__13654) : freqs.call(null,G__13654));
})()], null));

var G__14099 = (i__13649 + (1));
i__13649 = G__14099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13650),clojure$math$combinatorics$iter__13647(cljs.core.chunk_rest(s__13648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13650),null);
}
} else {
var i = cljs.core.first(s__13648__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__13658 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__13658) : freqs.call(null,G__13658));
})()], null),clojure$math$combinatorics$iter__13647(cljs.core.rest(s__13648__$2)));
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
var iter__5523__auto__ = (function clojure$math$combinatorics$iter__13659(s__13660){
return (new cljs.core.LazySeq(null,(function (){
var s__13660__$1 = s__13660;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13660__$1);
if(temp__5804__auto__){
var s__13660__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13660__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13660__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13662 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13661 = (0);
while(true){
if((i__13661 < size__5522__auto__)){
var part = cljs.core._nth(c__5521__auto__,i__13661);
cljs.core.chunk_append(b__13662,(function (){var iter__5523__auto__ = ((function (i__13661,part,c__5521__auto__,size__5522__auto__,b__13662,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to){
return (function clojure$math$combinatorics$iter__13659_$_iter__13663(s__13664){
return (new cljs.core.LazySeq(null,((function (i__13661,part,c__5521__auto__,size__5522__auto__,b__13662,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to){
return (function (){
var s__13664__$1 = s__13664;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13664__$1);
if(temp__5804__auto____$1){
var s__13664__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13664__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__13664__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__13666 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__13665 = (0);
while(true){
if((i__13665 < size__5522__auto____$1)){
var multiset = cljs.core._nth(c__5521__auto____$1,i__13665);
cljs.core.chunk_append(b__13666,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__13665,i__13661,multiset,c__5521__auto____$1,size__5522__auto____$1,b__13666,s__13664__$2,temp__5804__auto____$1,part,c__5521__auto__,size__5522__auto__,b__13662,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to){
return (function (p__13667){
var vec__13668 = p__13667;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13668,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13668,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__13671 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__13671) : ditems.call(null,G__13671));
})());
});})(i__13665,i__13661,multiset,c__5521__auto____$1,size__5522__auto____$1,b__13666,s__13664__$2,temp__5804__auto____$1,part,c__5521__auto__,size__5522__auto__,b__13662,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to))
,multiset)));

var G__14100 = (i__13665 + (1));
i__13665 = G__14100;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13666),clojure$math$combinatorics$iter__13659_$_iter__13663(cljs.core.chunk_rest(s__13664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13666),null);
}
} else {
var multiset = cljs.core.first(s__13664__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__13661,multiset,s__13664__$2,temp__5804__auto____$1,part,c__5521__auto__,size__5522__auto__,b__13662,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to){
return (function (p__13672){
var vec__13673 = p__13672;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13673,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13673,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__13676 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__13676) : ditems.call(null,G__13676));
})());
});})(i__13661,multiset,s__13664__$2,temp__5804__auto____$1,part,c__5521__auto__,size__5522__auto__,b__13662,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__13659_$_iter__13663(cljs.core.rest(s__13664__$2)));
}
} else {
return null;
}
break;
}
});})(i__13661,part,c__5521__auto__,size__5522__auto__,b__13662,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to))
,null,null));
});})(i__13661,part,c__5521__auto__,size__5522__auto__,b__13662,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to))
;
return iter__5523__auto__(part);
})());

var G__14101 = (i__13661 + (1));
i__13661 = G__14101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13662),clojure$math$combinatorics$iter__13659(cljs.core.chunk_rest(s__13660__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13662),null);
}
} else {
var part = cljs.core.first(s__13660__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (part,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to){
return (function clojure$math$combinatorics$iter__13659_$_iter__13677(s__13678){
return (new cljs.core.LazySeq(null,(function (){
var s__13678__$1 = s__13678;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13678__$1);
if(temp__5804__auto____$1){
var s__13678__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13678__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13678__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13680 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13679 = (0);
while(true){
if((i__13679 < size__5522__auto__)){
var multiset = cljs.core._nth(c__5521__auto__,i__13679);
cljs.core.chunk_append(b__13680,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__13679,multiset,c__5521__auto__,size__5522__auto__,b__13680,s__13678__$2,temp__5804__auto____$1,part,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to){
return (function (p__13681){
var vec__13682 = p__13681;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13682,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13682,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__13685 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__13685) : ditems.call(null,G__13685));
})());
});})(i__13679,multiset,c__5521__auto__,size__5522__auto__,b__13680,s__13678__$2,temp__5804__auto____$1,part,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to))
,multiset)));

var G__14102 = (i__13679 + (1));
i__13679 = G__14102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13680),clojure$math$combinatorics$iter__13659_$_iter__13677(cljs.core.chunk_rest(s__13678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13680),null);
}
} else {
var multiset = cljs.core.first(s__13678__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__13678__$2,temp__5804__auto____$1,part,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to){
return (function (p__13686){
var vec__13687 = p__13686;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13687,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13687,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__13690 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__13690) : ditems.call(null,G__13690));
})());
});})(multiset,s__13678__$2,temp__5804__auto____$1,part,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__13659_$_iter__13677(cljs.core.rest(s__13678__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__13660__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__13618,map__13618__$1,from,to))
;
return iter__5523__auto__(part);
})(),clojure$math$combinatorics$iter__13659(cljs.core.rest(s__13660__$2)));
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
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq13613){
var G__13614 = cljs.core.first(seq13613);
var seq13613__$1 = cljs.core.next(seq13613);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13614,seq13613__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14103 = arguments.length;
var i__5770__auto___14104 = (0);
while(true){
if((i__5770__auto___14104 < len__5769__auto___14103)){
args__5775__auto__.push((arguments[i__5770__auto___14104]));

var G__14105 = (i__5770__auto___14104 + (1));
i__5770__auto___14104 = G__14105;
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
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq13691){
var G__13692 = cljs.core.first(seq13691);
var seq13691__$1 = cljs.core.next(seq13691);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13692,seq13691__$1);
}));


//# sourceMappingURL=clojure.math.combinatorics.js.map
