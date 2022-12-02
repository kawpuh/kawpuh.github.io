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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__7144 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__7144) : clojure.math.combinatorics.join.call(null,G__7144));
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
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__7145(s__7146){
return (new cljs.core.LazySeq(null,(function (){
var s__7146__$1 = s__7146;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7146__$1);
if(temp__5804__auto__){
var s__7146__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7146__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7146__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7148 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7147 = (0);
while(true){
if((i__7147 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__7147);
cljs.core.chunk_append(b__7148,((j + cnt) + (- (n + (1)))));

var G__7393 = (i__7147 + (1));
i__7147 = G__7393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7148),clojure$math$combinatorics$index_combinations_$_iter__7145(cljs.core.chunk_rest(s__7146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7148),null);
}
} else {
var j = cljs.core.first(s__7146__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__7145(cljs.core.rest(s__7146__$2)));
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
var G__7394 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__7395 = (j__$1 - (1));
c__$3 = G__7394;
j__$1 = G__7395;
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
var G__7414 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__7415 = (index__$1 + (1));
var G__7416 = (already_distributed__$1 + mi);
distribution__$1 = G__7414;
index__$1 = G__7415;
already_distributed__$1 = G__7416;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__7149 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7149,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7149,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7149,(2),null);
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
var vec__7152 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7152,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7152,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7152,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__7436 = distribution__$2;
distribution__$1 = G__7436;
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
var m = cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__7155(s__7156){
return (new cljs.core.LazySeq(null,(function (){
var s__7156__$1 = s__7156;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7156__$1);
if(temp__5804__auto__){
var s__7156__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7156__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7156__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7158 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7157 = (0);
while(true){
if((i__7157 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__7157);
cljs.core.chunk_append(b__7158,(function (){var G__7159 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7159) : f.call(null,G__7159));
})());

var G__7439 = (i__7157 + (1));
i__7157 = G__7439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7158),clojure$math$combinatorics$multi_comb_$_iter__7155(cljs.core.chunk_rest(s__7156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7158),null);
}
} else {
var i = cljs.core.first(s__7156__$2);
return cljs.core.cons((function (){var G__7160 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7160) : f.call(null,G__7160));
})(),clojure$math$combinatorics$multi_comb_$_iter__7155(cljs.core.rest(s__7156__$2)));
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
var iter__5523__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__7161(s__7162){
return (new cljs.core.LazySeq(null,(function (){
var s__7162__$1 = s__7162;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7162__$1);
if(temp__5804__auto__){
var s__7162__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7162__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7162__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7164 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7163 = (0);
while(true){
if((i__7163 < size__5522__auto__)){
var q = cljs.core._nth(c__5521__auto__,i__7163);
cljs.core.chunk_append(b__7164,clojure.math.combinatorics.join((function (){var iter__5523__auto__ = ((function (i__7163,q,c__5521__auto__,size__5522__auto__,b__7164,s__7162__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__7161_$_iter__7165(s__7166){
return (new cljs.core.LazySeq(null,((function (i__7163,q,c__5521__auto__,size__5522__auto__,b__7164,s__7162__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function (){
var s__7166__$1 = s__7166;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__7166__$1);
if(temp__5804__auto____$1){
var s__7166__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7166__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__7166__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__7168 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__7167 = (0);
while(true){
if((i__7167 < size__5522__auto____$1)){
var vec__7169 = cljs.core._nth(c__5521__auto____$1,i__7167);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7169,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7169,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7169,(2),null);
cljs.core.chunk_append(b__7168,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__7442 = (i__7167 + (1));
i__7167 = G__7442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7168),clojure$math$combinatorics$multi_comb_$_iter__7161_$_iter__7165(cljs.core.chunk_rest(s__7166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7168),null);
}
} else {
var vec__7172 = cljs.core.first(s__7166__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7172,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7172,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7172,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__7161_$_iter__7165(cljs.core.rest(s__7166__$2)));
}
} else {
return null;
}
break;
}
});})(i__7163,q,c__5521__auto__,size__5522__auto__,b__7164,s__7162__$2,temp__5804__auto__,f,v,domain,m,qs))
,null,null));
});})(i__7163,q,c__5521__auto__,size__5522__auto__,b__7164,s__7162__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__5523__auto__(q);
})()));

var G__7445 = (i__7163 + (1));
i__7163 = G__7445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7164),clojure$math$combinatorics$multi_comb_$_iter__7161(cljs.core.chunk_rest(s__7162__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7164),null);
}
} else {
var q = cljs.core.first(s__7162__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__5523__auto__ = ((function (q,s__7162__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__7161_$_iter__7175(s__7176){
return (new cljs.core.LazySeq(null,(function (){
var s__7176__$1 = s__7176;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__7176__$1);
if(temp__5804__auto____$1){
var s__7176__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7176__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7176__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7178 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7177 = (0);
while(true){
if((i__7177 < size__5522__auto__)){
var vec__7179 = cljs.core._nth(c__5521__auto__,i__7177);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7179,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7179,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7179,(2),null);
cljs.core.chunk_append(b__7178,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__7450 = (i__7177 + (1));
i__7177 = G__7450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7178),clojure$math$combinatorics$multi_comb_$_iter__7161_$_iter__7175(cljs.core.chunk_rest(s__7176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7178),null);
}
} else {
var vec__7182 = cljs.core.first(s__7176__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7182,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7182,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7182,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__7161_$_iter__7175(cljs.core.rest(s__7176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__7162__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__5523__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__7161(cljs.core.rest(s__7162__$2)));
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
var iter__5523__auto__ = (function clojure$math$combinatorics$combinations_$_iter__7186(s__7187){
return (new cljs.core.LazySeq(null,(function (){
var s__7187__$1 = s__7187;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7187__$1);
if(temp__5804__auto__){
var s__7187__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7187__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7187__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7189 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7188 = (0);
while(true){
if((i__7188 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__7188);
cljs.core.chunk_append(b__7189,(new cljs.core.List(null,item,null,(1),null)));

var G__7451 = (i__7188 + (1));
i__7188 = G__7451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7189),clojure$math$combinatorics$combinations_$_iter__7186(cljs.core.chunk_rest(s__7187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7189),null);
}
} else {
var item = cljs.core.first(s__7187__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__7186(cljs.core.rest(s__7187__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7185_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__7185_SHARP_);
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
return cljs.core.cons(cljs.core.first(s),(function (){var G__7190 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__7190) : clojure.math.combinatorics.unchunk.call(null,G__7190));
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
var len__5769__auto___7452 = arguments.length;
var i__5770__auto___7453 = (0);
while(true){
if((i__5770__auto___7453 < len__5769__auto___7452)){
args__5775__auto__.push((arguments[i__5770__auto___7453]));

var G__7454 = (i__5770__auto___7453 + (1));
i__5770__auto___7453 = G__7454;
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
var G__7455 = (i - (1));
var G__7456 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__7455;
v_seqs__$2 = G__7456;
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
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq7191){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7191));
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
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__7192 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__7192) : v.call(null,G__7192));
})())){
return i;
} else {
var G__7457 = (i - (1));
i = G__7457;
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
var G__7458 = (i - (1));
i = G__7458;
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
var G__7459 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__7460 = (k + (1));
var G__7461 = (l__$1 - (1));
v__$1 = G__7459;
k = G__7460;
l__$1 = G__7461;
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
var G__7193 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__7193) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__7193));
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
var indices = clojure.math.combinatorics.join((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__7194(s__7195){
return (new cljs.core.LazySeq(null,(function (){
var s__7195__$1 = s__7195;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7195__$1);
if(temp__5804__auto__){
var s__7195__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7195__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7195__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7197 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7196 = (0);
while(true){
if((i__7196 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__7196);
cljs.core.chunk_append(b__7197,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__7198 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7198) : f.call(null,G__7198));
})(),i));

var G__7467 = (i__7196 + (1));
i__7196 = G__7467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7197),clojure$math$combinatorics$multi_perm_$_iter__7194(cljs.core.chunk_rest(s__7195__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7197),null);
}
} else {
var i = cljs.core.first(s__7195__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__7199 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7199) : f.call(null,G__7199));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__7194(cljs.core.rest(s__7195__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7200_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__7200_SHARP_);
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
var G__7468 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__7469 = (n__$1 - (1));
acc = G__7468;
n__$1 = G__7469;
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
var G__7470 = q;
var G__7471 = cljs.core.cons(r,digits);
var G__7472 = (divisor + (1));
n__$1 = G__7470;
digits = G__7471;
divisor = G__7472;
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
var G__7473 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__7474 = cljs.core.rest(l__$1);
var G__7475 = (n__$1 - (1));
acc = G__7473;
l__$1 = G__7474;
n__$1 = G__7475;
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
var G__7476 = cljs.core.rest(indices);
var G__7477 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__7478 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__7476;
l__$1 = G__7477;
perm = G__7478;
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
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__7201(s__7202){
return (new cljs.core.LazySeq(null,(function (){
var s__7202__$1 = s__7202;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7202__$1);
if(temp__5804__auto__){
var s__7202__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7202__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7202__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7204 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7203 = (0);
while(true){
if((i__7203 < size__5522__auto__)){
var vec__7205 = cljs.core._nth(c__5521__auto__,i__7203);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7205,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7205,(1),null);
cljs.core.chunk_append(b__7204,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__7479 = (i__7203 + (1));
i__7203 = G__7479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7204),clojure$math$combinatorics$initial_perm_numbers_$_iter__7201(cljs.core.chunk_rest(s__7202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7204),null);
}
} else {
var vec__7208 = cljs.core.first(s__7202__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7208,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7208,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__7201(cljs.core.rest(s__7202__$2)));
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
var G__7481 = cljs.core.rest(perm_numbers__$1);
var G__7482 = (index + (1));
perm_numbers__$1 = G__7481;
index = G__7482;
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
var vec__7214 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7214,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7214,(1),null);
var G__7483 = remainder;
var G__7484 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__7485 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__7483;
digits = G__7484;
freqs__$1 = G__7485;
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
var G__7487 = clojure.math.combinatorics.dec_key(freqs,item);
var G__7488 = cljs.core.rest(indices);
var G__7489 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__7487;
indices = G__7488;
perm = G__7489;
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
var indices = clojure.math.combinatorics.join((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__7217(s__7218){
return (new cljs.core.LazySeq(null,(function (){
var s__7218__$1 = s__7218;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7218__$1);
if(temp__5804__auto__){
var s__7218__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7218__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7218__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7220 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7219 = (0);
while(true){
if((i__7219 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__7219);
cljs.core.chunk_append(b__7220,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__7221 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7221) : f.call(null,G__7221));
})(),i));

var G__7490 = (i__7219 + (1));
i__7219 = G__7490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7220),clojure$math$combinatorics$nth_permutation_$_iter__7217(cljs.core.chunk_rest(s__7218__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7220),null);
}
} else {
var i = cljs.core.first(s__7218__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__7222 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7222) : f.call(null,G__7222));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__7217(cljs.core.rest(s__7218__$2)));
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
var indices = clojure.math.combinatorics.join((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__7223(s__7224){
return (new cljs.core.LazySeq(null,(function (){
var s__7224__$1 = s__7224;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7224__$1);
if(temp__5804__auto__){
var s__7224__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7224__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7224__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7226 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7225 = (0);
while(true){
if((i__7225 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__7225);
cljs.core.chunk_append(b__7226,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__7227 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7227) : f.call(null,G__7227));
})(),i));

var G__7491 = (i__7225 + (1));
i__7225 = G__7491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7226),clojure$math$combinatorics$drop_permutations_$_iter__7223(cljs.core.chunk_rest(s__7224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7226),null);
}
} else {
var i = cljs.core.first(s__7224__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__7228 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7228) : f.call(null,G__7228));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__7223(cljs.core.rest(s__7224__$2)));
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
var G__7492 = n;
var G__7493 = (n - k);
n = G__7492;
k = G__7493;
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
var G__7229 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1)));
var G__7230 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs))),t);
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__7229,G__7230) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__7229,G__7230));

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
var count_combinations_from_frequencies_orig_val__7231 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__7232 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__7232);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__7231);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__7494 = n__$1;
var G__7495 = y;
var G__7496 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__7494;
y = G__7495;
z = G__7496;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__7497 = n__$1;
var G__7498 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__7499 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__7497;
y = G__7498;
z = G__7499;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__7233(s__7234){
return (new cljs.core.LazySeq(null,(function (){
var s__7234__$1 = s__7234;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7234__$1);
if(temp__5804__auto__){
var s__7234__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7234__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7234__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7236 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7235 = (0);
while(true){
if((i__7235 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__7235);
cljs.core.chunk_append(b__7236,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__7500 = (i__7235 + (1));
i__7235 = G__7500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7236),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__7233(cljs.core.chunk_rest(s__7234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7236),null);
}
} else {
var i = cljs.core.first(s__7234__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__7233(cljs.core.rest(s__7234__$2)));
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
var count_combinations_from_frequencies_orig_val__7237 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__7238 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__7238);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__7237);
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
var G__7501 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__7502 = cljs.core.rest(items__$1);
var G__7503 = (t__$1 - (1));
var G__7504 = n__$1;
comb = G__7501;
items__$1 = G__7502;
t__$1 = G__7503;
n__$1 = G__7504;
continue;
} else {
var G__7505 = comb;
var G__7506 = cljs.core.rest(items__$1);
var G__7507 = t__$1;
var G__7508 = (n__$1 - dc_dt);
comb = G__7505;
items__$1 = G__7506;
t__$1 = G__7507;
n__$1 = G__7508;
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
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__7249(s__7250){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__7250__$1 = s__7250;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7250__$1);
if(temp__5804__auto__){
var s__7250__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7250__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7250__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7252 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7251 = (0);
while(true){
if((i__7251 < size__5522__auto__)){
var vec__7253 = cljs.core._nth(c__5521__auto__,i__7251);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7253,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7253,(1),null);
cljs.core.chunk_append(b__7252,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__7509 = (i__7251 + (1));
i__7251 = G__7509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7252),clojure$math$combinatorics$nth_combination_freqs_$_iter__7249(cljs.core.chunk_rest(s__7250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7252),null);
}
} else {
var vec__7256 = cljs.core.first(s__7250__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7256,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7256,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__7249(cljs.core.rest(s__7250__$2)));
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
var G__7510 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__7511 = remove_one_key;
var G__7512 = (t__$1 - (1));
var G__7513 = n__$1;
comb = G__7510;
freqs__$1 = G__7511;
t__$1 = G__7512;
n__$1 = G__7513;
continue;
} else {
var G__7514 = comb;
var G__7515 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__7516 = t__$1;
var G__7517 = (n__$1 - dc_dt);
comb = G__7514;
freqs__$1 = G__7515;
t__$1 = G__7516;
n__$1 = G__7517;
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
var count_combinations_from_frequencies_orig_val__7259 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__7260 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__7260);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__7261(s__7262){
return (new cljs.core.LazySeq(null,(function (){
var s__7262__$1 = s__7262;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7262__$1);
if(temp__5804__auto__){
var s__7262__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7262__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7262__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7264 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7263 = (0);
while(true){
if((i__7263 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__7263);
cljs.core.chunk_append(b__7264,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__7265 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7265) : f.call(null,G__7265));
})(),i));

var G__7518 = (i__7263 + (1));
i__7263 = G__7518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7264),clojure$math$combinatorics$nth_combination_$_iter__7261(cljs.core.chunk_rest(s__7262__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7264),null);
}
} else {
var i = cljs.core.first(s__7262__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__7266 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7266) : f.call(null,G__7266));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__7261(cljs.core.rest(s__7262__$2)));
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
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__7259);
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
var G__7519 = (size + (1));
var G__7520 = (n__$1 - num_combinations);
size = G__7519;
n__$1 = G__7520;
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
var G__7521 = cljs.core.rest(l__$1);
var G__7522 = (n + (1));
l__$1 = G__7521;
n = G__7522;
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
var G__7523 = cljs.core.rest(l__$1);
var G__7524 = (function (){var G__7271 = index;
var G__7272 = (function (){var G__7273 = clojure.math.combinatorics.factorial(n);
var G__7274 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__7273,G__7274) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__7273,G__7274));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__7271,G__7272) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__7271,G__7272));
})();
var G__7525 = (n - (1));
l__$1 = G__7523;
index = G__7524;
n = G__7525;
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
var G__7526 = cljs.core.rest(l__$1);
var G__7527 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__5523__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__7280(s__7281){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__7281__$1 = s__7281;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7281__$1);
if(temp__5804__auto__){
var s__7281__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7281__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7281__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7283 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7282 = (0);
while(true){
if((i__7282 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__7282);
cljs.core.chunk_append(b__7283,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__7529 = (i__7282 + (1));
i__7282 = G__7529;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7283),clojure$math$combinatorics$permutation_index_duplicates_$_iter__7280(cljs.core.chunk_rest(s__7281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7283),null);
}
} else {
var k = cljs.core.first(s__7281__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__7280(cljs.core.rest(s__7281__$2)));
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
return (function (p1__7275_SHARP_){
return (cljs.core.compare(p1__7275_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__5523__auto__))
,cljs.core.keys(freqs)));
})());
var G__7528 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__7526;
index = G__7527;
freqs = G__7528;
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
return cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$math$combinatorics$init_$_iter__7284(s__7285){
return (new cljs.core.LazySeq(null,(function (){
var s__7285__$1 = s__7285;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7285__$1);
if(temp__5804__auto__){
var s__7285__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7285__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7285__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7287 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7286 = (0);
while(true){
if((i__7286 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__7286);
cljs.core.chunk_append(b__7287,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (i - ((n - s) - (-1)));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());

var G__7530 = (i__7286 + (1));
i__7286 = G__7530;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7287),clojure$math$combinatorics$init_$_iter__7284(cljs.core.chunk_rest(s__7285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7287),null);
}
} else {
var i = cljs.core.first(s__7285__$2);
return cljs.core.cons((function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (i - ((n - s) - (-1)));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),clojure$math$combinatorics$init_$_iter__7284(cljs.core.rest(s__7285__$2)));
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
var G__7289 = arguments.length;
switch (G__7289) {
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
var G__7532 = (j - (1));
j = G__7532;
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
var vec__7290 = (function (){var a__$2 = a__$1;
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
var G__7533 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__7534 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__7535 = (i + (1));
var G__7536 = (function (){var x__5130__auto__ = current_max;
var y__5131__auto__ = (new_a_i + (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
a__$2 = G__7533;
b__$1 = G__7534;
i = G__7535;
current_max = G__7536;
continue;
} else {
var G__7537 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__7538 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__7539 = (i + (1));
var G__7540 = current_max;
a__$2 = G__7537;
b__$1 = G__7538;
i = G__7539;
current_max = G__7540;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7290,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7290,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7541 = arguments.length;
var i__5770__auto___7542 = (0);
while(true){
if((i__5770__auto___7542 < len__5769__auto___7541)){
args__5775__auto__.push((arguments[i__5770__auto___7542]));

var G__7543 = (i__5770__auto___7542 + (1));
i__5770__auto___7542 = G__7543;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__7295){
var map__7296 = p__7295;
var map__7296__$1 = cljs.core.__destructure_map(map__7296);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7296__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7296__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var iter__5523__auto__ = (function clojure$math$combinatorics$iter__7297(s__7298){
return (new cljs.core.LazySeq(null,(function (){
var s__7298__$1 = s__7298;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7298__$1);
if(temp__5804__auto__){
var s__7298__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7298__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7298__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7300 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7299 = (0);
while(true){
if((i__7299 < size__5522__auto__)){
var growth_string = cljs.core._nth(c__5521__auto__,i__7299);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__7300,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__7544 = (i__7299 + (1));
i__7299 = G__7544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7300),clojure$math$combinatorics$iter__7297(cljs.core.chunk_rest(s__7298__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7300),null);
}
} else {
var growth_string = cljs.core.first(s__7298__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__7297(cljs.core.rest(s__7298__$2)));
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
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq7293){
var G__7294 = cljs.core.first(seq7293);
var seq7293__$1 = cljs.core.next(seq7293);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7294,seq7293__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7545 = arguments.length;
var i__5770__auto___7546 = (0);
while(true){
if((i__5770__auto___7546 < len__5769__auto___7545)){
args__5775__auto__.push((arguments[i__5770__auto___7546]));

var G__7547 = (i__5770__auto___7546 + (1));
i__5770__auto___7546 = G__7547;
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
var iter__5523__auto__ = (function clojure$math$combinatorics$iter__7303(s__7304){
return (new cljs.core.LazySeq(null,(function (){
var s__7304__$1 = s__7304;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7304__$1);
if(temp__5804__auto__){
var s__7304__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7304__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7304__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7306 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7305 = (0);
while(true){
if((i__7305 < size__5522__auto__)){
var parts = cljs.core._nth(c__5521__auto__,i__7305);
cljs.core.chunk_append(b__7306,(function (){var iter__5523__auto__ = ((function (i__7305,parts,c__5521__auto__,size__5522__auto__,b__7306,s__7304__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__7303_$_iter__7307(s__7308){
return (new cljs.core.LazySeq(null,((function (i__7305,parts,c__5521__auto__,size__5522__auto__,b__7306,s__7304__$2,temp__5804__auto__,items__$1,N,lex){
return (function (){
var s__7308__$1 = s__7308;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__7308__$1);
if(temp__5804__auto____$1){
var s__7308__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7308__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__7308__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__7310 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__7309 = (0);
while(true){
if((i__7309 < size__5522__auto____$1)){
var part = cljs.core._nth(c__5521__auto____$1,i__7309);
cljs.core.chunk_append(b__7310,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__7309,i__7305,part,c__5521__auto____$1,size__5522__auto____$1,b__7310,s__7308__$2,temp__5804__auto____$1,parts,c__5521__auto__,size__5522__auto__,b__7306,s__7304__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__7309,i__7305,part,c__5521__auto____$1,size__5522__auto____$1,b__7310,s__7308__$2,temp__5804__auto____$1,parts,c__5521__auto__,size__5522__auto__,b__7306,s__7304__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__7548 = (i__7309 + (1));
i__7309 = G__7548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7310),clojure$math$combinatorics$iter__7303_$_iter__7307(cljs.core.chunk_rest(s__7308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7310),null);
}
} else {
var part = cljs.core.first(s__7308__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__7305,part,s__7308__$2,temp__5804__auto____$1,parts,c__5521__auto__,size__5522__auto__,b__7306,s__7304__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__7305,part,s__7308__$2,temp__5804__auto____$1,parts,c__5521__auto__,size__5522__auto__,b__7306,s__7304__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__7303_$_iter__7307(cljs.core.rest(s__7308__$2)));
}
} else {
return null;
}
break;
}
});})(i__7305,parts,c__5521__auto__,size__5522__auto__,b__7306,s__7304__$2,temp__5804__auto__,items__$1,N,lex))
,null,null));
});})(i__7305,parts,c__5521__auto__,size__5522__auto__,b__7306,s__7304__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__5523__auto__(parts);
})());

var G__7549 = (i__7305 + (1));
i__7305 = G__7549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7306),clojure$math$combinatorics$iter__7303(cljs.core.chunk_rest(s__7304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7306),null);
}
} else {
var parts = cljs.core.first(s__7304__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (parts,s__7304__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__7303_$_iter__7311(s__7312){
return (new cljs.core.LazySeq(null,(function (){
var s__7312__$1 = s__7312;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__7312__$1);
if(temp__5804__auto____$1){
var s__7312__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7312__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7312__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7314 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7313 = (0);
while(true){
if((i__7313 < size__5522__auto__)){
var part = cljs.core._nth(c__5521__auto__,i__7313);
cljs.core.chunk_append(b__7314,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__7313,part,c__5521__auto__,size__5522__auto__,b__7314,s__7312__$2,temp__5804__auto____$1,parts,s__7304__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__7313,part,c__5521__auto__,size__5522__auto__,b__7314,s__7312__$2,temp__5804__auto____$1,parts,s__7304__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__7550 = (i__7313 + (1));
i__7313 = G__7550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7314),clojure$math$combinatorics$iter__7303_$_iter__7311(cljs.core.chunk_rest(s__7312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7314),null);
}
} else {
var part = cljs.core.first(s__7312__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__7312__$2,temp__5804__auto____$1,parts,s__7304__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__7312__$2,temp__5804__auto____$1,parts,s__7304__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__7303_$_iter__7311(cljs.core.rest(s__7312__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__7304__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__5523__auto__(parts);
})(),clojure$math$combinatorics$iter__7303(cljs.core.rest(s__7304__$2)));
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
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq7301){
var G__7302 = cljs.core.first(seq7301);
var seq7301__$1 = cljs.core.next(seq7301);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7302,seq7301__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__7316 = arguments.length;
switch (G__7316) {
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
var vec__7317 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__7552 = (j + (1));
var G__7553 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__7554 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__7322 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__7322) : multiset.call(null,G__7322));
})());
var G__7555 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__7323 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__7323) : multiset.call(null,G__7323));
})());
j = G__7552;
c__$1 = G__7553;
u__$1 = G__7554;
v__$1 = G__7555;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7317,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7317,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7317,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__7324 = (function (){var j = a;
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
var G__7556 = (j + (1));
var G__7557 = k;
var G__7558 = true;
var G__7559 = u__$2;
var G__7560 = v__$1;
var G__7561 = c__$1;
j = G__7556;
k = G__7557;
x = G__7558;
u__$1 = G__7559;
v__$1 = G__7560;
c__$1 = G__7561;
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
var G__7562 = j__$1;
var G__7563 = k__$1;
var G__7564 = x__$1;
var G__7565 = u__$2;
var G__7566 = v__$2;
var G__7567 = c__$2;
j = G__7562;
k = G__7563;
x = G__7564;
u__$1 = G__7565;
v__$1 = G__7566;
c__$1 = G__7567;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__7568 = j__$1;
var G__7569 = k__$1;
var G__7570 = x;
var G__7571 = u__$2;
var G__7572 = v__$2;
var G__7573 = c__$2;
j = G__7568;
k = G__7569;
x = G__7570;
u__$1 = G__7571;
v__$1 = G__7572;
c__$1 = G__7573;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7324,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7324,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7324,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7324,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7324,(4),null);
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
var G__7574 = n;
var G__7575 = m;
var G__7576 = f__$1;
var G__7577 = c__$1;
var G__7578 = u__$1;
var G__7579 = v__$1;
var G__7580 = a__$1;
var G__7581 = b__$1;
var G__7582 = l__$1;
var G__7583 = r;
var G__7584 = s;
n = G__7574;
m = G__7575;
f = G__7576;
c = G__7577;
u = G__7578;
v = G__7579;
a = G__7580;
b = G__7581;
l = G__7582;
r = G__7583;
s = G__7584;
continue;
} else {
var part = (function (){var iter__5523__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__7324,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__7327(s__7328){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__7324,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__7328__$1 = s__7328;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7328__$1);
if(temp__5804__auto__){
var s__7328__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7328__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7328__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7330 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7329 = (0);
while(true){
if((i__7329 < size__5522__auto__)){
var y = cljs.core._nth(c__5521__auto__,i__7329);
cljs.core.chunk_append(b__7330,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__7331 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7331) : f.call(null,G__7331));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (i__7329,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5521__auto__,size__5522__auto__,b__7330,s__7328__$2,temp__5804__auto__,vec__7324,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__7327_$_iter__7332(s__7333){
return (new cljs.core.LazySeq(null,((function (i__7329,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5521__auto__,size__5522__auto__,b__7330,s__7328__$2,temp__5804__auto__,vec__7324,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__7333__$1 = s__7333;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__7333__$1);
if(temp__5804__auto____$1){
var s__7333__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7333__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__7333__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__7335 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__7334 = (0);
while(true){
if((i__7334 < size__5522__auto____$1)){
var z = cljs.core._nth(c__5521__auto____$1,i__7334);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__7335,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__7585 = (i__7334 + (1));
i__7334 = G__7585;
continue;
} else {
var G__7586 = (i__7334 + (1));
i__7334 = G__7586;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7335),clojure$math$combinatorics$iter__7327_$_iter__7332(cljs.core.chunk_rest(s__7333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7335),null);
}
} else {
var z = cljs.core.first(s__7333__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__7327_$_iter__7332(cljs.core.rest(s__7333__$2)));
} else {
var G__7587 = cljs.core.rest(s__7333__$2);
s__7333__$1 = G__7587;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__7329,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5521__auto__,size__5522__auto__,b__7330,s__7328__$2,temp__5804__auto__,vec__7324,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__7329,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5521__auto__,size__5522__auto__,b__7330,s__7328__$2,temp__5804__auto__,vec__7324,u__$1,v__$1,c__$1,j,k))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__7588 = (i__7329 + (1));
i__7329 = G__7588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7330),clojure$math$combinatorics$iter__7327(cljs.core.chunk_rest(s__7328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7330),null);
}
} else {
var y = cljs.core.first(s__7328__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__7336 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7336) : f.call(null,G__7336));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__7328__$2,temp__5804__auto__,vec__7324,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__7327_$_iter__7337(s__7338){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__7328__$2,temp__5804__auto__,vec__7324,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__7338__$1 = s__7338;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__7338__$1);
if(temp__5804__auto____$1){
var s__7338__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7338__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7338__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7340 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7339 = (0);
while(true){
if((i__7339 < size__5522__auto__)){
var z = cljs.core._nth(c__5521__auto__,i__7339);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__7340,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__7589 = (i__7339 + (1));
i__7339 = G__7589;
continue;
} else {
var G__7590 = (i__7339 + (1));
i__7339 = G__7590;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7340),clojure$math$combinatorics$iter__7327_$_iter__7337(cljs.core.chunk_rest(s__7338__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7340),null);
}
} else {
var z = cljs.core.first(s__7338__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__7327_$_iter__7337(cljs.core.rest(s__7338__$2)));
} else {
var G__7591 = cljs.core.rest(s__7338__$2);
s__7338__$1 = G__7591;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__7328__$2,temp__5804__auto__,vec__7324,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__7328__$2,temp__5804__auto__,vec__7324,u__$1,v__$1,c__$1,j,k))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__7327(cljs.core.rest(s__7328__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__7324,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__7324,u__$1,v__$1,c__$1,j,k))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__7324,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__7324,u__$1,v__$1,c__$1,j,k))
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
var G__7592 = (j - (1));
j = G__7592;
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
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$m5_$_iter__7341(s__7342){
return (new cljs.core.LazySeq(null,(function (){
var s__7342__$1 = s__7342;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7342__$1);
if(temp__5804__auto__){
var s__7342__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7342__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7342__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7344 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7343 = (0);
while(true){
if((i__7343 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__7343);
cljs.core.chunk_append(b__7344,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__7593 = (i__7343 + (1));
i__7343 = G__7593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7344),clojure$math$combinatorics$m5_$_iter__7341(cljs.core.chunk_rest(s__7342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7344),null);
}
} else {
var i = cljs.core.first(s__7342__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__7341(cljs.core.rest(s__7342__$2)));
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
var G__7594 = cljs.core.rest(ks);
var G__7595 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__7594;
v__$2 = G__7595;
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
var G__7596 = (k_1 - (1));
var G__7597 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__7598 = (amount - vk);
k_1 = G__7596;
v__$3 = G__7597;
amount = G__7598;
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
var len__5769__auto___7599 = arguments.length;
var i__5770__auto___7600 = (0);
while(true){
if((i__5770__auto___7600 < len__5769__auto___7599)){
args__5775__auto__.push((arguments[i__5770__auto___7600]));

var G__7601 = (i__5770__auto___7600 + (1));
i__5770__auto___7600 = G__7601;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__7347){
var map__7348 = p__7347;
var map__7348__$1 = cljs.core.__destructure_map(map__7348);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7348__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7348__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function clojure$math$combinatorics$iter__7349(s__7350){
return (new cljs.core.LazySeq(null,(function (){
var s__7350__$1 = s__7350;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7350__$1);
if(temp__5804__auto__){
var s__7350__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7350__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7350__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7352 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7351 = (0);
while(true){
if((i__7351 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__7351);
var j = (i + (1));
cljs.core.chunk_append(b__7352,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__7353 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__7353) : freqs.call(null,G__7353));
})()], null));

var G__7602 = (i__7351 + (1));
i__7351 = G__7602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7352),clojure$math$combinatorics$iter__7349(cljs.core.chunk_rest(s__7350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7352),null);
}
} else {
var i = cljs.core.first(s__7350__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__7354 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__7354) : freqs.call(null,G__7354));
})()], null),clojure$math$combinatorics$iter__7349(cljs.core.rest(s__7350__$2)));
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
var iter__5523__auto__ = (function clojure$math$combinatorics$iter__7355(s__7356){
return (new cljs.core.LazySeq(null,(function (){
var s__7356__$1 = s__7356;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7356__$1);
if(temp__5804__auto__){
var s__7356__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7356__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7356__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7358 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7357 = (0);
while(true){
if((i__7357 < size__5522__auto__)){
var part = cljs.core._nth(c__5521__auto__,i__7357);
cljs.core.chunk_append(b__7358,(function (){var iter__5523__auto__ = ((function (i__7357,part,c__5521__auto__,size__5522__auto__,b__7358,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to){
return (function clojure$math$combinatorics$iter__7355_$_iter__7359(s__7360){
return (new cljs.core.LazySeq(null,((function (i__7357,part,c__5521__auto__,size__5522__auto__,b__7358,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to){
return (function (){
var s__7360__$1 = s__7360;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__7360__$1);
if(temp__5804__auto____$1){
var s__7360__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7360__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__7360__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__7362 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__7361 = (0);
while(true){
if((i__7361 < size__5522__auto____$1)){
var multiset = cljs.core._nth(c__5521__auto____$1,i__7361);
cljs.core.chunk_append(b__7362,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__7361,i__7357,multiset,c__5521__auto____$1,size__5522__auto____$1,b__7362,s__7360__$2,temp__5804__auto____$1,part,c__5521__auto__,size__5522__auto__,b__7358,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to){
return (function (p__7363){
var vec__7364 = p__7363;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7364,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7364,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__7367 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__7367) : ditems.call(null,G__7367));
})());
});})(i__7361,i__7357,multiset,c__5521__auto____$1,size__5522__auto____$1,b__7362,s__7360__$2,temp__5804__auto____$1,part,c__5521__auto__,size__5522__auto__,b__7358,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to))
,multiset)));

var G__7603 = (i__7361 + (1));
i__7361 = G__7603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7362),clojure$math$combinatorics$iter__7355_$_iter__7359(cljs.core.chunk_rest(s__7360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7362),null);
}
} else {
var multiset = cljs.core.first(s__7360__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__7357,multiset,s__7360__$2,temp__5804__auto____$1,part,c__5521__auto__,size__5522__auto__,b__7358,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to){
return (function (p__7368){
var vec__7369 = p__7368;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7369,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7369,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__7372 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__7372) : ditems.call(null,G__7372));
})());
});})(i__7357,multiset,s__7360__$2,temp__5804__auto____$1,part,c__5521__auto__,size__5522__auto__,b__7358,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__7355_$_iter__7359(cljs.core.rest(s__7360__$2)));
}
} else {
return null;
}
break;
}
});})(i__7357,part,c__5521__auto__,size__5522__auto__,b__7358,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to))
,null,null));
});})(i__7357,part,c__5521__auto__,size__5522__auto__,b__7358,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to))
;
return iter__5523__auto__(part);
})());

var G__7604 = (i__7357 + (1));
i__7357 = G__7604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7358),clojure$math$combinatorics$iter__7355(cljs.core.chunk_rest(s__7356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7358),null);
}
} else {
var part = cljs.core.first(s__7356__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (part,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to){
return (function clojure$math$combinatorics$iter__7355_$_iter__7373(s__7374){
return (new cljs.core.LazySeq(null,(function (){
var s__7374__$1 = s__7374;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__7374__$1);
if(temp__5804__auto____$1){
var s__7374__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7374__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7374__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7376 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7375 = (0);
while(true){
if((i__7375 < size__5522__auto__)){
var multiset = cljs.core._nth(c__5521__auto__,i__7375);
cljs.core.chunk_append(b__7376,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__7375,multiset,c__5521__auto__,size__5522__auto__,b__7376,s__7374__$2,temp__5804__auto____$1,part,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to){
return (function (p__7377){
var vec__7378 = p__7377;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7378,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7378,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__7381 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__7381) : ditems.call(null,G__7381));
})());
});})(i__7375,multiset,c__5521__auto__,size__5522__auto__,b__7376,s__7374__$2,temp__5804__auto____$1,part,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to))
,multiset)));

var G__7605 = (i__7375 + (1));
i__7375 = G__7605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7376),clojure$math$combinatorics$iter__7355_$_iter__7373(cljs.core.chunk_rest(s__7374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7376),null);
}
} else {
var multiset = cljs.core.first(s__7374__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__7374__$2,temp__5804__auto____$1,part,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to){
return (function (p__7382){
var vec__7383 = p__7382;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7383,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7383,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__7386 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__7386) : ditems.call(null,G__7386));
})());
});})(multiset,s__7374__$2,temp__5804__auto____$1,part,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__7355_$_iter__7373(cljs.core.rest(s__7374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__7356__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__7348,map__7348__$1,from,to))
;
return iter__5523__auto__(part);
})(),clojure$math$combinatorics$iter__7355(cljs.core.rest(s__7356__$2)));
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
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq7345){
var G__7346 = cljs.core.first(seq7345);
var seq7345__$1 = cljs.core.next(seq7345);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7346,seq7345__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7606 = arguments.length;
var i__5770__auto___7607 = (0);
while(true){
if((i__5770__auto___7607 < len__5769__auto___7606)){
args__5775__auto__.push((arguments[i__5770__auto___7607]));

var G__7608 = (i__5770__auto___7607 + (1));
i__5770__auto___7607 = G__7608;
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
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq7387){
var G__7388 = cljs.core.first(seq7387);
var seq7387__$1 = cljs.core.next(seq7387);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7388,seq7387__$1);
}));


//# sourceMappingURL=clojure.math.combinatorics.js.map