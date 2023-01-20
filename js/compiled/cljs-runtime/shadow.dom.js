goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15802 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15802(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15804 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15804(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14494 = coll;
var G__14495 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14494,G__14495) : shadow.dom.lazy_native_coll_seq.call(null,G__14494,G__14495));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__14540 = arguments.length;
switch (G__14540) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__14554 = arguments.length;
switch (G__14554) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__14563 = arguments.length;
switch (G__14563) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__14572 = arguments.length;
switch (G__14572) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14590 = arguments.length;
switch (G__14590) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14611 = arguments.length;
switch (G__14611) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e14620){if((e14620 instanceof Object)){
var e = e14620;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14620;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__14677 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14681 = null;
var count__14682 = (0);
var i__14683 = (0);
while(true){
if((i__14683 < count__14682)){
var el = chunk__14681.cljs$core$IIndexed$_nth$arity$2(null,i__14683);
var handler_15829__$1 = ((function (seq__14677,chunk__14681,count__14682,i__14683,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14677,chunk__14681,count__14682,i__14683,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15829__$1);


var G__15830 = seq__14677;
var G__15831 = chunk__14681;
var G__15832 = count__14682;
var G__15833 = (i__14683 + (1));
seq__14677 = G__15830;
chunk__14681 = G__15831;
count__14682 = G__15832;
i__14683 = G__15833;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14677);
if(temp__5804__auto__){
var seq__14677__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14677__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14677__$1);
var G__15834 = cljs.core.chunk_rest(seq__14677__$1);
var G__15835 = c__5568__auto__;
var G__15836 = cljs.core.count(c__5568__auto__);
var G__15837 = (0);
seq__14677 = G__15834;
chunk__14681 = G__15835;
count__14682 = G__15836;
i__14683 = G__15837;
continue;
} else {
var el = cljs.core.first(seq__14677__$1);
var handler_15838__$1 = ((function (seq__14677,chunk__14681,count__14682,i__14683,el,seq__14677__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14677,chunk__14681,count__14682,i__14683,el,seq__14677__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15838__$1);


var G__15842 = cljs.core.next(seq__14677__$1);
var G__15843 = null;
var G__15844 = (0);
var G__15845 = (0);
seq__14677 = G__15842;
chunk__14681 = G__15843;
count__14682 = G__15844;
i__14683 = G__15845;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__14763 = arguments.length;
switch (G__14763) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14782 = cljs.core.seq(events);
var chunk__14783 = null;
var count__14784 = (0);
var i__14785 = (0);
while(true){
if((i__14785 < count__14784)){
var vec__14803 = chunk__14783.cljs$core$IIndexed$_nth$arity$2(null,i__14785);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14803,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14803,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15853 = seq__14782;
var G__15854 = chunk__14783;
var G__15855 = count__14784;
var G__15856 = (i__14785 + (1));
seq__14782 = G__15853;
chunk__14783 = G__15854;
count__14784 = G__15855;
i__14785 = G__15856;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14782);
if(temp__5804__auto__){
var seq__14782__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14782__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14782__$1);
var G__15857 = cljs.core.chunk_rest(seq__14782__$1);
var G__15858 = c__5568__auto__;
var G__15859 = cljs.core.count(c__5568__auto__);
var G__15860 = (0);
seq__14782 = G__15857;
chunk__14783 = G__15858;
count__14784 = G__15859;
i__14785 = G__15860;
continue;
} else {
var vec__14809 = cljs.core.first(seq__14782__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14809,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14809,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15861 = cljs.core.next(seq__14782__$1);
var G__15862 = null;
var G__15863 = (0);
var G__15864 = (0);
seq__14782 = G__15861;
chunk__14783 = G__15862;
count__14784 = G__15863;
i__14785 = G__15864;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__14816 = cljs.core.seq(styles);
var chunk__14817 = null;
var count__14818 = (0);
var i__14819 = (0);
while(true){
if((i__14819 < count__14818)){
var vec__14847 = chunk__14817.cljs$core$IIndexed$_nth$arity$2(null,i__14819);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14847,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14847,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15866 = seq__14816;
var G__15867 = chunk__14817;
var G__15868 = count__14818;
var G__15869 = (i__14819 + (1));
seq__14816 = G__15866;
chunk__14817 = G__15867;
count__14818 = G__15868;
i__14819 = G__15869;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14816);
if(temp__5804__auto__){
var seq__14816__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14816__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14816__$1);
var G__15870 = cljs.core.chunk_rest(seq__14816__$1);
var G__15871 = c__5568__auto__;
var G__15872 = cljs.core.count(c__5568__auto__);
var G__15873 = (0);
seq__14816 = G__15870;
chunk__14817 = G__15871;
count__14818 = G__15872;
i__14819 = G__15873;
continue;
} else {
var vec__14859 = cljs.core.first(seq__14816__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14859,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15880 = cljs.core.next(seq__14816__$1);
var G__15881 = null;
var G__15882 = (0);
var G__15883 = (0);
seq__14816 = G__15880;
chunk__14817 = G__15881;
count__14818 = G__15882;
i__14819 = G__15883;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14869_15884 = key;
var G__14869_15885__$1 = (((G__14869_15884 instanceof cljs.core.Keyword))?G__14869_15884.fqn:null);
switch (G__14869_15885__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15895 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_15895,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_15895,"aria-");
}
})())){
el.setAttribute(ks_15895,value);
} else {
(el[ks_15895] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14893){
var map__14894 = p__14893;
var map__14894__$1 = cljs.core.__destructure_map(map__14894);
var props = map__14894__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14894__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14896 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14896,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14896,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14896,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14900 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14900,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14900;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14909 = arguments.length;
switch (G__14909) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14931){
var vec__14935 = p__14931;
var seq__14936 = cljs.core.seq(vec__14935);
var first__14937 = cljs.core.first(seq__14936);
var seq__14936__$1 = cljs.core.next(seq__14936);
var nn = first__14937;
var first__14937__$1 = cljs.core.first(seq__14936__$1);
var seq__14936__$2 = cljs.core.next(seq__14936__$1);
var np = first__14937__$1;
var nc = seq__14936__$2;
var node = vec__14935;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14945 = nn;
var G__14946 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14945,G__14946) : create_fn.call(null,G__14945,G__14946));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14949 = nn;
var G__14950 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14949,G__14950) : create_fn.call(null,G__14949,G__14950));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14960 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14960,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14960,(1),null);
var seq__14964_15917 = cljs.core.seq(node_children);
var chunk__14965_15918 = null;
var count__14966_15919 = (0);
var i__14967_15920 = (0);
while(true){
if((i__14967_15920 < count__14966_15919)){
var child_struct_15923 = chunk__14965_15918.cljs$core$IIndexed$_nth$arity$2(null,i__14967_15920);
var children_15924 = shadow.dom.dom_node(child_struct_15923);
if(cljs.core.seq_QMARK_(children_15924)){
var seq__15053_15925 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15924));
var chunk__15055_15926 = null;
var count__15056_15927 = (0);
var i__15057_15928 = (0);
while(true){
if((i__15057_15928 < count__15056_15927)){
var child_15931 = chunk__15055_15926.cljs$core$IIndexed$_nth$arity$2(null,i__15057_15928);
if(cljs.core.truth_(child_15931)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15931);


var G__15932 = seq__15053_15925;
var G__15933 = chunk__15055_15926;
var G__15934 = count__15056_15927;
var G__15935 = (i__15057_15928 + (1));
seq__15053_15925 = G__15932;
chunk__15055_15926 = G__15933;
count__15056_15927 = G__15934;
i__15057_15928 = G__15935;
continue;
} else {
var G__15936 = seq__15053_15925;
var G__15937 = chunk__15055_15926;
var G__15938 = count__15056_15927;
var G__15939 = (i__15057_15928 + (1));
seq__15053_15925 = G__15936;
chunk__15055_15926 = G__15937;
count__15056_15927 = G__15938;
i__15057_15928 = G__15939;
continue;
}
} else {
var temp__5804__auto___15941 = cljs.core.seq(seq__15053_15925);
if(temp__5804__auto___15941){
var seq__15053_15942__$1 = temp__5804__auto___15941;
if(cljs.core.chunked_seq_QMARK_(seq__15053_15942__$1)){
var c__5568__auto___15943 = cljs.core.chunk_first(seq__15053_15942__$1);
var G__15944 = cljs.core.chunk_rest(seq__15053_15942__$1);
var G__15945 = c__5568__auto___15943;
var G__15946 = cljs.core.count(c__5568__auto___15943);
var G__15947 = (0);
seq__15053_15925 = G__15944;
chunk__15055_15926 = G__15945;
count__15056_15927 = G__15946;
i__15057_15928 = G__15947;
continue;
} else {
var child_15948 = cljs.core.first(seq__15053_15942__$1);
if(cljs.core.truth_(child_15948)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15948);


var G__15949 = cljs.core.next(seq__15053_15942__$1);
var G__15950 = null;
var G__15951 = (0);
var G__15952 = (0);
seq__15053_15925 = G__15949;
chunk__15055_15926 = G__15950;
count__15056_15927 = G__15951;
i__15057_15928 = G__15952;
continue;
} else {
var G__15953 = cljs.core.next(seq__15053_15942__$1);
var G__15954 = null;
var G__15955 = (0);
var G__15956 = (0);
seq__15053_15925 = G__15953;
chunk__15055_15926 = G__15954;
count__15056_15927 = G__15955;
i__15057_15928 = G__15956;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15924);
}


var G__15957 = seq__14964_15917;
var G__15958 = chunk__14965_15918;
var G__15959 = count__14966_15919;
var G__15960 = (i__14967_15920 + (1));
seq__14964_15917 = G__15957;
chunk__14965_15918 = G__15958;
count__14966_15919 = G__15959;
i__14967_15920 = G__15960;
continue;
} else {
var temp__5804__auto___15964 = cljs.core.seq(seq__14964_15917);
if(temp__5804__auto___15964){
var seq__14964_15965__$1 = temp__5804__auto___15964;
if(cljs.core.chunked_seq_QMARK_(seq__14964_15965__$1)){
var c__5568__auto___15966 = cljs.core.chunk_first(seq__14964_15965__$1);
var G__15967 = cljs.core.chunk_rest(seq__14964_15965__$1);
var G__15968 = c__5568__auto___15966;
var G__15969 = cljs.core.count(c__5568__auto___15966);
var G__15970 = (0);
seq__14964_15917 = G__15967;
chunk__14965_15918 = G__15968;
count__14966_15919 = G__15969;
i__14967_15920 = G__15970;
continue;
} else {
var child_struct_15971 = cljs.core.first(seq__14964_15965__$1);
var children_15972 = shadow.dom.dom_node(child_struct_15971);
if(cljs.core.seq_QMARK_(children_15972)){
var seq__15124_15973 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15972));
var chunk__15126_15974 = null;
var count__15127_15975 = (0);
var i__15128_15976 = (0);
while(true){
if((i__15128_15976 < count__15127_15975)){
var child_15977 = chunk__15126_15974.cljs$core$IIndexed$_nth$arity$2(null,i__15128_15976);
if(cljs.core.truth_(child_15977)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15977);


var G__15978 = seq__15124_15973;
var G__15979 = chunk__15126_15974;
var G__15980 = count__15127_15975;
var G__15981 = (i__15128_15976 + (1));
seq__15124_15973 = G__15978;
chunk__15126_15974 = G__15979;
count__15127_15975 = G__15980;
i__15128_15976 = G__15981;
continue;
} else {
var G__15982 = seq__15124_15973;
var G__15983 = chunk__15126_15974;
var G__15984 = count__15127_15975;
var G__15985 = (i__15128_15976 + (1));
seq__15124_15973 = G__15982;
chunk__15126_15974 = G__15983;
count__15127_15975 = G__15984;
i__15128_15976 = G__15985;
continue;
}
} else {
var temp__5804__auto___15986__$1 = cljs.core.seq(seq__15124_15973);
if(temp__5804__auto___15986__$1){
var seq__15124_15987__$1 = temp__5804__auto___15986__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15124_15987__$1)){
var c__5568__auto___15988 = cljs.core.chunk_first(seq__15124_15987__$1);
var G__15989 = cljs.core.chunk_rest(seq__15124_15987__$1);
var G__15990 = c__5568__auto___15988;
var G__15991 = cljs.core.count(c__5568__auto___15988);
var G__15992 = (0);
seq__15124_15973 = G__15989;
chunk__15126_15974 = G__15990;
count__15127_15975 = G__15991;
i__15128_15976 = G__15992;
continue;
} else {
var child_15993 = cljs.core.first(seq__15124_15987__$1);
if(cljs.core.truth_(child_15993)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15993);


var G__15994 = cljs.core.next(seq__15124_15987__$1);
var G__15995 = null;
var G__15996 = (0);
var G__15997 = (0);
seq__15124_15973 = G__15994;
chunk__15126_15974 = G__15995;
count__15127_15975 = G__15996;
i__15128_15976 = G__15997;
continue;
} else {
var G__15998 = cljs.core.next(seq__15124_15987__$1);
var G__15999 = null;
var G__16000 = (0);
var G__16001 = (0);
seq__15124_15973 = G__15998;
chunk__15126_15974 = G__15999;
count__15127_15975 = G__16000;
i__15128_15976 = G__16001;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15972);
}


var G__16002 = cljs.core.next(seq__14964_15965__$1);
var G__16003 = null;
var G__16004 = (0);
var G__16005 = (0);
seq__14964_15917 = G__16002;
chunk__14965_15918 = G__16003;
count__14966_15919 = G__16004;
i__14967_15920 = G__16005;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__15193 = cljs.core.seq(node);
var chunk__15194 = null;
var count__15195 = (0);
var i__15196 = (0);
while(true){
if((i__15196 < count__15195)){
var n = chunk__15194.cljs$core$IIndexed$_nth$arity$2(null,i__15196);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16006 = seq__15193;
var G__16007 = chunk__15194;
var G__16008 = count__15195;
var G__16009 = (i__15196 + (1));
seq__15193 = G__16006;
chunk__15194 = G__16007;
count__15195 = G__16008;
i__15196 = G__16009;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15193);
if(temp__5804__auto__){
var seq__15193__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15193__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15193__$1);
var G__16011 = cljs.core.chunk_rest(seq__15193__$1);
var G__16012 = c__5568__auto__;
var G__16013 = cljs.core.count(c__5568__auto__);
var G__16014 = (0);
seq__15193 = G__16011;
chunk__15194 = G__16012;
count__15195 = G__16013;
i__15196 = G__16014;
continue;
} else {
var n = cljs.core.first(seq__15193__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16015 = cljs.core.next(seq__15193__$1);
var G__16016 = null;
var G__16017 = (0);
var G__16018 = (0);
seq__15193 = G__16015;
chunk__15194 = G__16016;
count__15195 = G__16017;
i__15196 = G__16018;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__15217 = arguments.length;
switch (G__15217) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__15227 = arguments.length;
switch (G__15227) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__15254 = arguments.length;
switch (G__15254) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16026 = arguments.length;
var i__5770__auto___16027 = (0);
while(true){
if((i__5770__auto___16027 < len__5769__auto___16026)){
args__5775__auto__.push((arguments[i__5770__auto___16027]));

var G__16029 = (i__5770__auto___16027 + (1));
i__5770__auto___16027 = G__16029;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__15278_16030 = cljs.core.seq(nodes);
var chunk__15279_16031 = null;
var count__15280_16032 = (0);
var i__15281_16033 = (0);
while(true){
if((i__15281_16033 < count__15280_16032)){
var node_16034 = chunk__15279_16031.cljs$core$IIndexed$_nth$arity$2(null,i__15281_16033);
fragment.appendChild(shadow.dom._to_dom(node_16034));


var G__16035 = seq__15278_16030;
var G__16036 = chunk__15279_16031;
var G__16037 = count__15280_16032;
var G__16038 = (i__15281_16033 + (1));
seq__15278_16030 = G__16035;
chunk__15279_16031 = G__16036;
count__15280_16032 = G__16037;
i__15281_16033 = G__16038;
continue;
} else {
var temp__5804__auto___16039 = cljs.core.seq(seq__15278_16030);
if(temp__5804__auto___16039){
var seq__15278_16040__$1 = temp__5804__auto___16039;
if(cljs.core.chunked_seq_QMARK_(seq__15278_16040__$1)){
var c__5568__auto___16041 = cljs.core.chunk_first(seq__15278_16040__$1);
var G__16042 = cljs.core.chunk_rest(seq__15278_16040__$1);
var G__16043 = c__5568__auto___16041;
var G__16044 = cljs.core.count(c__5568__auto___16041);
var G__16045 = (0);
seq__15278_16030 = G__16042;
chunk__15279_16031 = G__16043;
count__15280_16032 = G__16044;
i__15281_16033 = G__16045;
continue;
} else {
var node_16046 = cljs.core.first(seq__15278_16040__$1);
fragment.appendChild(shadow.dom._to_dom(node_16046));


var G__16047 = cljs.core.next(seq__15278_16040__$1);
var G__16048 = null;
var G__16049 = (0);
var G__16050 = (0);
seq__15278_16030 = G__16047;
chunk__15279_16031 = G__16048;
count__15280_16032 = G__16049;
i__15281_16033 = G__16050;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq15268){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15268));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__15299_16051 = cljs.core.seq(scripts);
var chunk__15300_16052 = null;
var count__15301_16053 = (0);
var i__15302_16054 = (0);
while(true){
if((i__15302_16054 < count__15301_16053)){
var vec__15315_16055 = chunk__15300_16052.cljs$core$IIndexed$_nth$arity$2(null,i__15302_16054);
var script_tag_16056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15315_16055,(0),null);
var script_body_16057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15315_16055,(1),null);
eval(script_body_16057);


var G__16058 = seq__15299_16051;
var G__16059 = chunk__15300_16052;
var G__16060 = count__15301_16053;
var G__16061 = (i__15302_16054 + (1));
seq__15299_16051 = G__16058;
chunk__15300_16052 = G__16059;
count__15301_16053 = G__16060;
i__15302_16054 = G__16061;
continue;
} else {
var temp__5804__auto___16062 = cljs.core.seq(seq__15299_16051);
if(temp__5804__auto___16062){
var seq__15299_16063__$1 = temp__5804__auto___16062;
if(cljs.core.chunked_seq_QMARK_(seq__15299_16063__$1)){
var c__5568__auto___16064 = cljs.core.chunk_first(seq__15299_16063__$1);
var G__16065 = cljs.core.chunk_rest(seq__15299_16063__$1);
var G__16066 = c__5568__auto___16064;
var G__16067 = cljs.core.count(c__5568__auto___16064);
var G__16068 = (0);
seq__15299_16051 = G__16065;
chunk__15300_16052 = G__16066;
count__15301_16053 = G__16067;
i__15302_16054 = G__16068;
continue;
} else {
var vec__15322_16069 = cljs.core.first(seq__15299_16063__$1);
var script_tag_16070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15322_16069,(0),null);
var script_body_16071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15322_16069,(1),null);
eval(script_body_16071);


var G__16073 = cljs.core.next(seq__15299_16063__$1);
var G__16074 = null;
var G__16075 = (0);
var G__16076 = (0);
seq__15299_16051 = G__16073;
chunk__15300_16052 = G__16074;
count__15301_16053 = G__16075;
i__15302_16054 = G__16076;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15329){
var vec__15331 = p__15329;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15331,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15331,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__15348 = arguments.length;
switch (G__15348) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__15379 = cljs.core.seq(style_keys);
var chunk__15380 = null;
var count__15381 = (0);
var i__15382 = (0);
while(true){
if((i__15382 < count__15381)){
var it = chunk__15380.cljs$core$IIndexed$_nth$arity$2(null,i__15382);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16083 = seq__15379;
var G__16084 = chunk__15380;
var G__16085 = count__15381;
var G__16086 = (i__15382 + (1));
seq__15379 = G__16083;
chunk__15380 = G__16084;
count__15381 = G__16085;
i__15382 = G__16086;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15379);
if(temp__5804__auto__){
var seq__15379__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15379__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15379__$1);
var G__16087 = cljs.core.chunk_rest(seq__15379__$1);
var G__16088 = c__5568__auto__;
var G__16089 = cljs.core.count(c__5568__auto__);
var G__16090 = (0);
seq__15379 = G__16087;
chunk__15380 = G__16088;
count__15381 = G__16089;
i__15382 = G__16090;
continue;
} else {
var it = cljs.core.first(seq__15379__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16091 = cljs.core.next(seq__15379__$1);
var G__16092 = null;
var G__16093 = (0);
var G__16094 = (0);
seq__15379 = G__16091;
chunk__15380 = G__16092;
count__15381 = G__16093;
i__15382 = G__16094;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k15397,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__15411 = k15397;
var G__15411__$1 = (((G__15411 instanceof cljs.core.Keyword))?G__15411.fqn:null);
switch (G__15411__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15397,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__15415){
var vec__15417 = p__15415;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15417,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15417,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15396){
var self__ = this;
var G__15396__$1 = this;
return (new cljs.core.RecordIter((0),G__15396__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15398,other15399){
var self__ = this;
var this15398__$1 = this;
return (((!((other15399 == null)))) && ((((this15398__$1.constructor === other15399.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15398__$1.x,other15399.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15398__$1.y,other15399.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15398__$1.__extmap,other15399.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k15397){
var self__ = this;
var this__5350__auto____$1 = this;
var G__15449 = k15397;
var G__15449__$1 = (((G__15449 instanceof cljs.core.Keyword))?G__15449.fqn:null);
switch (G__15449__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15397);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__15396){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__15456 = cljs.core.keyword_identical_QMARK_;
var expr__15457 = k__5352__auto__;
if(cljs.core.truth_((pred__15456.cljs$core$IFn$_invoke$arity$2 ? pred__15456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15457) : pred__15456.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15457)))){
return (new shadow.dom.Coordinate(G__15396,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15456.cljs$core$IFn$_invoke$arity$2 ? pred__15456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15457) : pred__15456.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15457)))){
return (new shadow.dom.Coordinate(self__.x,G__15396,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__15396),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__15396){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__15396,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15407){
var extmap__5385__auto__ = (function (){var G__15475 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15407,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15407)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15475);
} else {
return G__15475;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15407),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15407),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k15485,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__15505 = k15485;
var G__15505__$1 = (((G__15505 instanceof cljs.core.Keyword))?G__15505.fqn:null);
switch (G__15505__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15485,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__15508){
var vec__15513 = p__15508;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15513,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15513,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15484){
var self__ = this;
var G__15484__$1 = this;
return (new cljs.core.RecordIter((0),G__15484__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15486,other15487){
var self__ = this;
var this15486__$1 = this;
return (((!((other15487 == null)))) && ((((this15486__$1.constructor === other15487.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15486__$1.w,other15487.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15486__$1.h,other15487.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15486__$1.__extmap,other15487.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k15485){
var self__ = this;
var this__5350__auto____$1 = this;
var G__15523 = k15485;
var G__15523__$1 = (((G__15523 instanceof cljs.core.Keyword))?G__15523.fqn:null);
switch (G__15523__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15485);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__15484){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__15525 = cljs.core.keyword_identical_QMARK_;
var expr__15526 = k__5352__auto__;
if(cljs.core.truth_((pred__15525.cljs$core$IFn$_invoke$arity$2 ? pred__15525.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15526) : pred__15525.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15526)))){
return (new shadow.dom.Size(G__15484,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15525.cljs$core$IFn$_invoke$arity$2 ? pred__15525.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15526) : pred__15525.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15526)))){
return (new shadow.dom.Size(self__.w,G__15484,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__15484),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__15484){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15484,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15492){
var extmap__5385__auto__ = (function (){var G__15537 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15492,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15492)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15537);
} else {
return G__15537;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15492),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15492),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__16128 = (i + (1));
var G__16129 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16128;
ret = G__16129;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15589){
var vec__15590 = p__15589;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15590,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15590,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15598 = arguments.length;
switch (G__15598) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16143 = ps;
var G__16144 = (i + (1));
el__$1 = G__16143;
i = G__16144;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15616 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15616,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15616,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15616,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15619_16156 = cljs.core.seq(props);
var chunk__15620_16157 = null;
var count__15621_16158 = (0);
var i__15622_16159 = (0);
while(true){
if((i__15622_16159 < count__15621_16158)){
var vec__15629_16161 = chunk__15620_16157.cljs$core$IIndexed$_nth$arity$2(null,i__15622_16159);
var k_16162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15629_16161,(0),null);
var v_16163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15629_16161,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16162);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16162),v_16163);


var G__16164 = seq__15619_16156;
var G__16165 = chunk__15620_16157;
var G__16166 = count__15621_16158;
var G__16167 = (i__15622_16159 + (1));
seq__15619_16156 = G__16164;
chunk__15620_16157 = G__16165;
count__15621_16158 = G__16166;
i__15622_16159 = G__16167;
continue;
} else {
var temp__5804__auto___16168 = cljs.core.seq(seq__15619_16156);
if(temp__5804__auto___16168){
var seq__15619_16169__$1 = temp__5804__auto___16168;
if(cljs.core.chunked_seq_QMARK_(seq__15619_16169__$1)){
var c__5568__auto___16171 = cljs.core.chunk_first(seq__15619_16169__$1);
var G__16174 = cljs.core.chunk_rest(seq__15619_16169__$1);
var G__16175 = c__5568__auto___16171;
var G__16176 = cljs.core.count(c__5568__auto___16171);
var G__16177 = (0);
seq__15619_16156 = G__16174;
chunk__15620_16157 = G__16175;
count__15621_16158 = G__16176;
i__15622_16159 = G__16177;
continue;
} else {
var vec__15632_16178 = cljs.core.first(seq__15619_16169__$1);
var k_16179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15632_16178,(0),null);
var v_16180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15632_16178,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16179);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16179),v_16180);


var G__16186 = cljs.core.next(seq__15619_16169__$1);
var G__16187 = null;
var G__16188 = (0);
var G__16189 = (0);
seq__15619_16156 = G__16186;
chunk__15620_16157 = G__16187;
count__15621_16158 = G__16188;
i__15622_16159 = G__16189;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15636 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15636,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15636,(1),null);
var seq__15639_16190 = cljs.core.seq(node_children);
var chunk__15641_16191 = null;
var count__15642_16192 = (0);
var i__15643_16193 = (0);
while(true){
if((i__15643_16193 < count__15642_16192)){
var child_struct_16194 = chunk__15641_16191.cljs$core$IIndexed$_nth$arity$2(null,i__15643_16193);
if((!((child_struct_16194 == null)))){
if(typeof child_struct_16194 === 'string'){
var text_16195 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16195),child_struct_16194].join(''));
} else {
var children_16196 = shadow.dom.svg_node(child_struct_16194);
if(cljs.core.seq_QMARK_(children_16196)){
var seq__15689_16197 = cljs.core.seq(children_16196);
var chunk__15691_16198 = null;
var count__15692_16199 = (0);
var i__15693_16200 = (0);
while(true){
if((i__15693_16200 < count__15692_16199)){
var child_16201 = chunk__15691_16198.cljs$core$IIndexed$_nth$arity$2(null,i__15693_16200);
if(cljs.core.truth_(child_16201)){
node.appendChild(child_16201);


var G__16202 = seq__15689_16197;
var G__16203 = chunk__15691_16198;
var G__16204 = count__15692_16199;
var G__16205 = (i__15693_16200 + (1));
seq__15689_16197 = G__16202;
chunk__15691_16198 = G__16203;
count__15692_16199 = G__16204;
i__15693_16200 = G__16205;
continue;
} else {
var G__16206 = seq__15689_16197;
var G__16207 = chunk__15691_16198;
var G__16208 = count__15692_16199;
var G__16209 = (i__15693_16200 + (1));
seq__15689_16197 = G__16206;
chunk__15691_16198 = G__16207;
count__15692_16199 = G__16208;
i__15693_16200 = G__16209;
continue;
}
} else {
var temp__5804__auto___16210 = cljs.core.seq(seq__15689_16197);
if(temp__5804__auto___16210){
var seq__15689_16211__$1 = temp__5804__auto___16210;
if(cljs.core.chunked_seq_QMARK_(seq__15689_16211__$1)){
var c__5568__auto___16212 = cljs.core.chunk_first(seq__15689_16211__$1);
var G__16213 = cljs.core.chunk_rest(seq__15689_16211__$1);
var G__16214 = c__5568__auto___16212;
var G__16215 = cljs.core.count(c__5568__auto___16212);
var G__16216 = (0);
seq__15689_16197 = G__16213;
chunk__15691_16198 = G__16214;
count__15692_16199 = G__16215;
i__15693_16200 = G__16216;
continue;
} else {
var child_16217 = cljs.core.first(seq__15689_16211__$1);
if(cljs.core.truth_(child_16217)){
node.appendChild(child_16217);


var G__16219 = cljs.core.next(seq__15689_16211__$1);
var G__16220 = null;
var G__16221 = (0);
var G__16222 = (0);
seq__15689_16197 = G__16219;
chunk__15691_16198 = G__16220;
count__15692_16199 = G__16221;
i__15693_16200 = G__16222;
continue;
} else {
var G__16223 = cljs.core.next(seq__15689_16211__$1);
var G__16224 = null;
var G__16225 = (0);
var G__16226 = (0);
seq__15689_16197 = G__16223;
chunk__15691_16198 = G__16224;
count__15692_16199 = G__16225;
i__15693_16200 = G__16226;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16196);
}
}


var G__16227 = seq__15639_16190;
var G__16228 = chunk__15641_16191;
var G__16229 = count__15642_16192;
var G__16230 = (i__15643_16193 + (1));
seq__15639_16190 = G__16227;
chunk__15641_16191 = G__16228;
count__15642_16192 = G__16229;
i__15643_16193 = G__16230;
continue;
} else {
var G__16231 = seq__15639_16190;
var G__16232 = chunk__15641_16191;
var G__16233 = count__15642_16192;
var G__16234 = (i__15643_16193 + (1));
seq__15639_16190 = G__16231;
chunk__15641_16191 = G__16232;
count__15642_16192 = G__16233;
i__15643_16193 = G__16234;
continue;
}
} else {
var temp__5804__auto___16238 = cljs.core.seq(seq__15639_16190);
if(temp__5804__auto___16238){
var seq__15639_16239__$1 = temp__5804__auto___16238;
if(cljs.core.chunked_seq_QMARK_(seq__15639_16239__$1)){
var c__5568__auto___16240 = cljs.core.chunk_first(seq__15639_16239__$1);
var G__16241 = cljs.core.chunk_rest(seq__15639_16239__$1);
var G__16242 = c__5568__auto___16240;
var G__16243 = cljs.core.count(c__5568__auto___16240);
var G__16244 = (0);
seq__15639_16190 = G__16241;
chunk__15641_16191 = G__16242;
count__15642_16192 = G__16243;
i__15643_16193 = G__16244;
continue;
} else {
var child_struct_16245 = cljs.core.first(seq__15639_16239__$1);
if((!((child_struct_16245 == null)))){
if(typeof child_struct_16245 === 'string'){
var text_16246 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16246),child_struct_16245].join(''));
} else {
var children_16247 = shadow.dom.svg_node(child_struct_16245);
if(cljs.core.seq_QMARK_(children_16247)){
var seq__15712_16248 = cljs.core.seq(children_16247);
var chunk__15714_16249 = null;
var count__15715_16250 = (0);
var i__15716_16251 = (0);
while(true){
if((i__15716_16251 < count__15715_16250)){
var child_16252 = chunk__15714_16249.cljs$core$IIndexed$_nth$arity$2(null,i__15716_16251);
if(cljs.core.truth_(child_16252)){
node.appendChild(child_16252);


var G__16253 = seq__15712_16248;
var G__16254 = chunk__15714_16249;
var G__16255 = count__15715_16250;
var G__16256 = (i__15716_16251 + (1));
seq__15712_16248 = G__16253;
chunk__15714_16249 = G__16254;
count__15715_16250 = G__16255;
i__15716_16251 = G__16256;
continue;
} else {
var G__16257 = seq__15712_16248;
var G__16258 = chunk__15714_16249;
var G__16259 = count__15715_16250;
var G__16260 = (i__15716_16251 + (1));
seq__15712_16248 = G__16257;
chunk__15714_16249 = G__16258;
count__15715_16250 = G__16259;
i__15716_16251 = G__16260;
continue;
}
} else {
var temp__5804__auto___16261__$1 = cljs.core.seq(seq__15712_16248);
if(temp__5804__auto___16261__$1){
var seq__15712_16262__$1 = temp__5804__auto___16261__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15712_16262__$1)){
var c__5568__auto___16263 = cljs.core.chunk_first(seq__15712_16262__$1);
var G__16264 = cljs.core.chunk_rest(seq__15712_16262__$1);
var G__16265 = c__5568__auto___16263;
var G__16266 = cljs.core.count(c__5568__auto___16263);
var G__16267 = (0);
seq__15712_16248 = G__16264;
chunk__15714_16249 = G__16265;
count__15715_16250 = G__16266;
i__15716_16251 = G__16267;
continue;
} else {
var child_16268 = cljs.core.first(seq__15712_16262__$1);
if(cljs.core.truth_(child_16268)){
node.appendChild(child_16268);


var G__16269 = cljs.core.next(seq__15712_16262__$1);
var G__16270 = null;
var G__16271 = (0);
var G__16272 = (0);
seq__15712_16248 = G__16269;
chunk__15714_16249 = G__16270;
count__15715_16250 = G__16271;
i__15716_16251 = G__16272;
continue;
} else {
var G__16277 = cljs.core.next(seq__15712_16262__$1);
var G__16278 = null;
var G__16279 = (0);
var G__16280 = (0);
seq__15712_16248 = G__16277;
chunk__15714_16249 = G__16278;
count__15715_16250 = G__16279;
i__15716_16251 = G__16280;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16247);
}
}


var G__16281 = cljs.core.next(seq__15639_16239__$1);
var G__16282 = null;
var G__16283 = (0);
var G__16284 = (0);
seq__15639_16190 = G__16281;
chunk__15641_16191 = G__16282;
count__15642_16192 = G__16283;
i__15643_16193 = G__16284;
continue;
} else {
var G__16285 = cljs.core.next(seq__15639_16239__$1);
var G__16286 = null;
var G__16287 = (0);
var G__16288 = (0);
seq__15639_16190 = G__16285;
chunk__15641_16191 = G__16286;
count__15642_16192 = G__16287;
i__15643_16193 = G__16288;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16289 = arguments.length;
var i__5770__auto___16290 = (0);
while(true){
if((i__5770__auto___16290 < len__5769__auto___16289)){
args__5775__auto__.push((arguments[i__5770__auto___16290]));

var G__16291 = (i__5770__auto___16290 + (1));
i__5770__auto___16290 = G__16291;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15748){
var G__15749 = cljs.core.first(seq15748);
var seq15748__$1 = cljs.core.next(seq15748);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15749,seq15748__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__15771 = arguments.length;
switch (G__15771) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__12244__auto___16294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12245__auto__ = (function (){var switch__11794__auto__ = (function (state_15785){
var state_val_15786 = (state_15785[(1)]);
if((state_val_15786 === (1))){
var state_15785__$1 = state_15785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15785__$1,(2),once_or_cleanup);
} else {
if((state_val_15786 === (2))){
var inst_15782 = (state_15785[(2)]);
var inst_15783 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_15785__$1 = (function (){var statearr_15789 = state_15785;
(statearr_15789[(7)] = inst_15782);

return statearr_15789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15785__$1,inst_15783);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__11795__auto__ = null;
var shadow$dom$state_machine__11795__auto____0 = (function (){
var statearr_15792 = [null,null,null,null,null,null,null,null];
(statearr_15792[(0)] = shadow$dom$state_machine__11795__auto__);

(statearr_15792[(1)] = (1));

return statearr_15792;
});
var shadow$dom$state_machine__11795__auto____1 = (function (state_15785){
while(true){
var ret_value__11796__auto__ = (function (){try{while(true){
var result__11797__auto__ = switch__11794__auto__(state_15785);
if(cljs.core.keyword_identical_QMARK_(result__11797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11797__auto__;
}
break;
}
}catch (e15793){var ex__11798__auto__ = e15793;
var statearr_15794_16299 = state_15785;
(statearr_15794_16299[(2)] = ex__11798__auto__);


if(cljs.core.seq((state_15785[(4)]))){
var statearr_15795_16300 = state_15785;
(statearr_15795_16300[(1)] = cljs.core.first((state_15785[(4)])));

} else {
throw ex__11798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16301 = state_15785;
state_15785 = G__16301;
continue;
} else {
return ret_value__11796__auto__;
}
break;
}
});
shadow$dom$state_machine__11795__auto__ = function(state_15785){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__11795__auto____0.call(this);
case 1:
return shadow$dom$state_machine__11795__auto____1.call(this,state_15785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__11795__auto____0;
shadow$dom$state_machine__11795__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__11795__auto____1;
return shadow$dom$state_machine__11795__auto__;
})()
})();
var state__12246__auto__ = (function (){var statearr_15796 = f__12245__auto__();
(statearr_15796[(6)] = c__12244__auto___16294);

return statearr_15796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12246__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
