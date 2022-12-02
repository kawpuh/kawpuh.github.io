goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_21339 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_21339(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_21341 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_21341(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__20014 = coll;
var G__20015 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__20014,G__20015) : shadow.dom.lazy_native_coll_seq.call(null,G__20014,G__20015));
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
var G__20044 = arguments.length;
switch (G__20044) {
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
var G__20050 = arguments.length;
switch (G__20050) {
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
var G__20061 = arguments.length;
switch (G__20061) {
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
var G__20083 = arguments.length;
switch (G__20083) {
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
var G__20103 = arguments.length;
switch (G__20103) {
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
var G__20137 = arguments.length;
switch (G__20137) {
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
}catch (e20187){if((e20187 instanceof Object)){
var e = e20187;
return console.log("didnt support attachEvent",el,e);
} else {
throw e20187;

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
var seq__20241 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20242 = null;
var count__20244 = (0);
var i__20245 = (0);
while(true){
if((i__20245 < count__20244)){
var el = chunk__20242.cljs$core$IIndexed$_nth$arity$2(null,i__20245);
var handler_21361__$1 = ((function (seq__20241,chunk__20242,count__20244,i__20245,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20241,chunk__20242,count__20244,i__20245,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21361__$1);


var G__21362 = seq__20241;
var G__21363 = chunk__20242;
var G__21364 = count__20244;
var G__21365 = (i__20245 + (1));
seq__20241 = G__21362;
chunk__20242 = G__21363;
count__20244 = G__21364;
i__20245 = G__21365;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20241);
if(temp__5804__auto__){
var seq__20241__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20241__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20241__$1);
var G__21366 = cljs.core.chunk_rest(seq__20241__$1);
var G__21367 = c__5568__auto__;
var G__21368 = cljs.core.count(c__5568__auto__);
var G__21369 = (0);
seq__20241 = G__21366;
chunk__20242 = G__21367;
count__20244 = G__21368;
i__20245 = G__21369;
continue;
} else {
var el = cljs.core.first(seq__20241__$1);
var handler_21370__$1 = ((function (seq__20241,chunk__20242,count__20244,i__20245,el,seq__20241__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20241,chunk__20242,count__20244,i__20245,el,seq__20241__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21370__$1);


var G__21371 = cljs.core.next(seq__20241__$1);
var G__21372 = null;
var G__21373 = (0);
var G__21374 = (0);
seq__20241 = G__21371;
chunk__20242 = G__21372;
count__20244 = G__21373;
i__20245 = G__21374;
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
var G__20300 = arguments.length;
switch (G__20300) {
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
var seq__20318 = cljs.core.seq(events);
var chunk__20319 = null;
var count__20320 = (0);
var i__20321 = (0);
while(true){
if((i__20321 < count__20320)){
var vec__20339 = chunk__20319.cljs$core$IIndexed$_nth$arity$2(null,i__20321);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20339,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21383 = seq__20318;
var G__21384 = chunk__20319;
var G__21385 = count__20320;
var G__21386 = (i__20321 + (1));
seq__20318 = G__21383;
chunk__20319 = G__21384;
count__20320 = G__21385;
i__20321 = G__21386;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20318);
if(temp__5804__auto__){
var seq__20318__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20318__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20318__$1);
var G__21388 = cljs.core.chunk_rest(seq__20318__$1);
var G__21389 = c__5568__auto__;
var G__21390 = cljs.core.count(c__5568__auto__);
var G__21391 = (0);
seq__20318 = G__21388;
chunk__20319 = G__21389;
count__20320 = G__21390;
i__20321 = G__21391;
continue;
} else {
var vec__20346 = cljs.core.first(seq__20318__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20346,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20346,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21393 = cljs.core.next(seq__20318__$1);
var G__21394 = null;
var G__21395 = (0);
var G__21396 = (0);
seq__20318 = G__21393;
chunk__20319 = G__21394;
count__20320 = G__21395;
i__20321 = G__21396;
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
var seq__20359 = cljs.core.seq(styles);
var chunk__20360 = null;
var count__20361 = (0);
var i__20362 = (0);
while(true){
if((i__20362 < count__20361)){
var vec__20379 = chunk__20360.cljs$core$IIndexed$_nth$arity$2(null,i__20362);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20379,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20379,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21398 = seq__20359;
var G__21399 = chunk__20360;
var G__21400 = count__20361;
var G__21401 = (i__20362 + (1));
seq__20359 = G__21398;
chunk__20360 = G__21399;
count__20361 = G__21400;
i__20362 = G__21401;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20359);
if(temp__5804__auto__){
var seq__20359__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20359__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20359__$1);
var G__21404 = cljs.core.chunk_rest(seq__20359__$1);
var G__21405 = c__5568__auto__;
var G__21406 = cljs.core.count(c__5568__auto__);
var G__21407 = (0);
seq__20359 = G__21404;
chunk__20360 = G__21405;
count__20361 = G__21406;
i__20362 = G__21407;
continue;
} else {
var vec__20390 = cljs.core.first(seq__20359__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20390,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20390,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21408 = cljs.core.next(seq__20359__$1);
var G__21409 = null;
var G__21410 = (0);
var G__21411 = (0);
seq__20359 = G__21408;
chunk__20360 = G__21409;
count__20361 = G__21410;
i__20362 = G__21411;
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
var G__20401_21412 = key;
var G__20401_21413__$1 = (((G__20401_21412 instanceof cljs.core.Keyword))?G__20401_21412.fqn:null);
switch (G__20401_21413__$1) {
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
var ks_21419 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_21419,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_21419,"aria-");
}
})())){
el.setAttribute(ks_21419,value);
} else {
(el[ks_21419] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20465){
var map__20467 = p__20465;
var map__20467__$1 = cljs.core.__destructure_map(map__20467);
var props = map__20467__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20467__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20470 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20476 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20476,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20476;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20495 = arguments.length;
switch (G__20495) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20519){
var vec__20520 = p__20519;
var seq__20521 = cljs.core.seq(vec__20520);
var first__20522 = cljs.core.first(seq__20521);
var seq__20521__$1 = cljs.core.next(seq__20521);
var nn = first__20522;
var first__20522__$1 = cljs.core.first(seq__20521__$1);
var seq__20521__$2 = cljs.core.next(seq__20521__$1);
var np = first__20522__$1;
var nc = seq__20521__$2;
var node = vec__20520;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20523 = nn;
var G__20524 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20523,G__20524) : create_fn.call(null,G__20523,G__20524));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20525 = nn;
var G__20526 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20525,G__20526) : create_fn.call(null,G__20525,G__20526));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20527 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20527,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20527,(1),null);
var seq__20530_21428 = cljs.core.seq(node_children);
var chunk__20531_21429 = null;
var count__20532_21430 = (0);
var i__20533_21431 = (0);
while(true){
if((i__20533_21431 < count__20532_21430)){
var child_struct_21432 = chunk__20531_21429.cljs$core$IIndexed$_nth$arity$2(null,i__20533_21431);
var children_21433 = shadow.dom.dom_node(child_struct_21432);
if(cljs.core.seq_QMARK_(children_21433)){
var seq__20664_21434 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21433));
var chunk__20666_21435 = null;
var count__20667_21436 = (0);
var i__20668_21437 = (0);
while(true){
if((i__20668_21437 < count__20667_21436)){
var child_21438 = chunk__20666_21435.cljs$core$IIndexed$_nth$arity$2(null,i__20668_21437);
if(cljs.core.truth_(child_21438)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21438);


var G__21439 = seq__20664_21434;
var G__21440 = chunk__20666_21435;
var G__21441 = count__20667_21436;
var G__21442 = (i__20668_21437 + (1));
seq__20664_21434 = G__21439;
chunk__20666_21435 = G__21440;
count__20667_21436 = G__21441;
i__20668_21437 = G__21442;
continue;
} else {
var G__21443 = seq__20664_21434;
var G__21444 = chunk__20666_21435;
var G__21445 = count__20667_21436;
var G__21446 = (i__20668_21437 + (1));
seq__20664_21434 = G__21443;
chunk__20666_21435 = G__21444;
count__20667_21436 = G__21445;
i__20668_21437 = G__21446;
continue;
}
} else {
var temp__5804__auto___21447 = cljs.core.seq(seq__20664_21434);
if(temp__5804__auto___21447){
var seq__20664_21448__$1 = temp__5804__auto___21447;
if(cljs.core.chunked_seq_QMARK_(seq__20664_21448__$1)){
var c__5568__auto___21449 = cljs.core.chunk_first(seq__20664_21448__$1);
var G__21450 = cljs.core.chunk_rest(seq__20664_21448__$1);
var G__21451 = c__5568__auto___21449;
var G__21452 = cljs.core.count(c__5568__auto___21449);
var G__21453 = (0);
seq__20664_21434 = G__21450;
chunk__20666_21435 = G__21451;
count__20667_21436 = G__21452;
i__20668_21437 = G__21453;
continue;
} else {
var child_21455 = cljs.core.first(seq__20664_21448__$1);
if(cljs.core.truth_(child_21455)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21455);


var G__21456 = cljs.core.next(seq__20664_21448__$1);
var G__21457 = null;
var G__21458 = (0);
var G__21459 = (0);
seq__20664_21434 = G__21456;
chunk__20666_21435 = G__21457;
count__20667_21436 = G__21458;
i__20668_21437 = G__21459;
continue;
} else {
var G__21460 = cljs.core.next(seq__20664_21448__$1);
var G__21461 = null;
var G__21462 = (0);
var G__21463 = (0);
seq__20664_21434 = G__21460;
chunk__20666_21435 = G__21461;
count__20667_21436 = G__21462;
i__20668_21437 = G__21463;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21433);
}


var G__21464 = seq__20530_21428;
var G__21465 = chunk__20531_21429;
var G__21466 = count__20532_21430;
var G__21467 = (i__20533_21431 + (1));
seq__20530_21428 = G__21464;
chunk__20531_21429 = G__21465;
count__20532_21430 = G__21466;
i__20533_21431 = G__21467;
continue;
} else {
var temp__5804__auto___21468 = cljs.core.seq(seq__20530_21428);
if(temp__5804__auto___21468){
var seq__20530_21469__$1 = temp__5804__auto___21468;
if(cljs.core.chunked_seq_QMARK_(seq__20530_21469__$1)){
var c__5568__auto___21470 = cljs.core.chunk_first(seq__20530_21469__$1);
var G__21471 = cljs.core.chunk_rest(seq__20530_21469__$1);
var G__21472 = c__5568__auto___21470;
var G__21473 = cljs.core.count(c__5568__auto___21470);
var G__21474 = (0);
seq__20530_21428 = G__21471;
chunk__20531_21429 = G__21472;
count__20532_21430 = G__21473;
i__20533_21431 = G__21474;
continue;
} else {
var child_struct_21475 = cljs.core.first(seq__20530_21469__$1);
var children_21476 = shadow.dom.dom_node(child_struct_21475);
if(cljs.core.seq_QMARK_(children_21476)){
var seq__20684_21477 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21476));
var chunk__20686_21478 = null;
var count__20687_21479 = (0);
var i__20688_21480 = (0);
while(true){
if((i__20688_21480 < count__20687_21479)){
var child_21481 = chunk__20686_21478.cljs$core$IIndexed$_nth$arity$2(null,i__20688_21480);
if(cljs.core.truth_(child_21481)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21481);


var G__21482 = seq__20684_21477;
var G__21483 = chunk__20686_21478;
var G__21484 = count__20687_21479;
var G__21485 = (i__20688_21480 + (1));
seq__20684_21477 = G__21482;
chunk__20686_21478 = G__21483;
count__20687_21479 = G__21484;
i__20688_21480 = G__21485;
continue;
} else {
var G__21486 = seq__20684_21477;
var G__21487 = chunk__20686_21478;
var G__21488 = count__20687_21479;
var G__21489 = (i__20688_21480 + (1));
seq__20684_21477 = G__21486;
chunk__20686_21478 = G__21487;
count__20687_21479 = G__21488;
i__20688_21480 = G__21489;
continue;
}
} else {
var temp__5804__auto___21490__$1 = cljs.core.seq(seq__20684_21477);
if(temp__5804__auto___21490__$1){
var seq__20684_21491__$1 = temp__5804__auto___21490__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20684_21491__$1)){
var c__5568__auto___21492 = cljs.core.chunk_first(seq__20684_21491__$1);
var G__21493 = cljs.core.chunk_rest(seq__20684_21491__$1);
var G__21494 = c__5568__auto___21492;
var G__21495 = cljs.core.count(c__5568__auto___21492);
var G__21496 = (0);
seq__20684_21477 = G__21493;
chunk__20686_21478 = G__21494;
count__20687_21479 = G__21495;
i__20688_21480 = G__21496;
continue;
} else {
var child_21497 = cljs.core.first(seq__20684_21491__$1);
if(cljs.core.truth_(child_21497)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21497);


var G__21498 = cljs.core.next(seq__20684_21491__$1);
var G__21499 = null;
var G__21500 = (0);
var G__21501 = (0);
seq__20684_21477 = G__21498;
chunk__20686_21478 = G__21499;
count__20687_21479 = G__21500;
i__20688_21480 = G__21501;
continue;
} else {
var G__21502 = cljs.core.next(seq__20684_21491__$1);
var G__21503 = null;
var G__21504 = (0);
var G__21505 = (0);
seq__20684_21477 = G__21502;
chunk__20686_21478 = G__21503;
count__20687_21479 = G__21504;
i__20688_21480 = G__21505;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21476);
}


var G__21506 = cljs.core.next(seq__20530_21469__$1);
var G__21507 = null;
var G__21508 = (0);
var G__21509 = (0);
seq__20530_21428 = G__21506;
chunk__20531_21429 = G__21507;
count__20532_21430 = G__21508;
i__20533_21431 = G__21509;
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
var seq__20742 = cljs.core.seq(node);
var chunk__20743 = null;
var count__20744 = (0);
var i__20745 = (0);
while(true){
if((i__20745 < count__20744)){
var n = chunk__20743.cljs$core$IIndexed$_nth$arity$2(null,i__20745);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21511 = seq__20742;
var G__21512 = chunk__20743;
var G__21513 = count__20744;
var G__21514 = (i__20745 + (1));
seq__20742 = G__21511;
chunk__20743 = G__21512;
count__20744 = G__21513;
i__20745 = G__21514;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20742);
if(temp__5804__auto__){
var seq__20742__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20742__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20742__$1);
var G__21515 = cljs.core.chunk_rest(seq__20742__$1);
var G__21516 = c__5568__auto__;
var G__21517 = cljs.core.count(c__5568__auto__);
var G__21518 = (0);
seq__20742 = G__21515;
chunk__20743 = G__21516;
count__20744 = G__21517;
i__20745 = G__21518;
continue;
} else {
var n = cljs.core.first(seq__20742__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21520 = cljs.core.next(seq__20742__$1);
var G__21521 = null;
var G__21522 = (0);
var G__21523 = (0);
seq__20742 = G__21520;
chunk__20743 = G__21521;
count__20744 = G__21522;
i__20745 = G__21523;
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
var G__20767 = arguments.length;
switch (G__20767) {
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
var G__20781 = arguments.length;
switch (G__20781) {
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
var G__20811 = arguments.length;
switch (G__20811) {
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
var len__5769__auto___21529 = arguments.length;
var i__5770__auto___21530 = (0);
while(true){
if((i__5770__auto___21530 < len__5769__auto___21529)){
args__5775__auto__.push((arguments[i__5770__auto___21530]));

var G__21531 = (i__5770__auto___21530 + (1));
i__5770__auto___21530 = G__21531;
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
var seq__20828_21532 = cljs.core.seq(nodes);
var chunk__20829_21533 = null;
var count__20830_21534 = (0);
var i__20831_21535 = (0);
while(true){
if((i__20831_21535 < count__20830_21534)){
var node_21536 = chunk__20829_21533.cljs$core$IIndexed$_nth$arity$2(null,i__20831_21535);
fragment.appendChild(shadow.dom._to_dom(node_21536));


var G__21537 = seq__20828_21532;
var G__21538 = chunk__20829_21533;
var G__21539 = count__20830_21534;
var G__21540 = (i__20831_21535 + (1));
seq__20828_21532 = G__21537;
chunk__20829_21533 = G__21538;
count__20830_21534 = G__21539;
i__20831_21535 = G__21540;
continue;
} else {
var temp__5804__auto___21541 = cljs.core.seq(seq__20828_21532);
if(temp__5804__auto___21541){
var seq__20828_21542__$1 = temp__5804__auto___21541;
if(cljs.core.chunked_seq_QMARK_(seq__20828_21542__$1)){
var c__5568__auto___21543 = cljs.core.chunk_first(seq__20828_21542__$1);
var G__21544 = cljs.core.chunk_rest(seq__20828_21542__$1);
var G__21545 = c__5568__auto___21543;
var G__21546 = cljs.core.count(c__5568__auto___21543);
var G__21547 = (0);
seq__20828_21532 = G__21544;
chunk__20829_21533 = G__21545;
count__20830_21534 = G__21546;
i__20831_21535 = G__21547;
continue;
} else {
var node_21548 = cljs.core.first(seq__20828_21542__$1);
fragment.appendChild(shadow.dom._to_dom(node_21548));


var G__21550 = cljs.core.next(seq__20828_21542__$1);
var G__21551 = null;
var G__21552 = (0);
var G__21553 = (0);
seq__20828_21532 = G__21550;
chunk__20829_21533 = G__21551;
count__20830_21534 = G__21552;
i__20831_21535 = G__21553;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20826){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20826));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20856_21557 = cljs.core.seq(scripts);
var chunk__20857_21558 = null;
var count__20858_21559 = (0);
var i__20859_21560 = (0);
while(true){
if((i__20859_21560 < count__20858_21559)){
var vec__20881_21561 = chunk__20857_21558.cljs$core$IIndexed$_nth$arity$2(null,i__20859_21560);
var script_tag_21562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20881_21561,(0),null);
var script_body_21563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20881_21561,(1),null);
eval(script_body_21563);


var G__21564 = seq__20856_21557;
var G__21565 = chunk__20857_21558;
var G__21566 = count__20858_21559;
var G__21567 = (i__20859_21560 + (1));
seq__20856_21557 = G__21564;
chunk__20857_21558 = G__21565;
count__20858_21559 = G__21566;
i__20859_21560 = G__21567;
continue;
} else {
var temp__5804__auto___21568 = cljs.core.seq(seq__20856_21557);
if(temp__5804__auto___21568){
var seq__20856_21569__$1 = temp__5804__auto___21568;
if(cljs.core.chunked_seq_QMARK_(seq__20856_21569__$1)){
var c__5568__auto___21570 = cljs.core.chunk_first(seq__20856_21569__$1);
var G__21571 = cljs.core.chunk_rest(seq__20856_21569__$1);
var G__21572 = c__5568__auto___21570;
var G__21573 = cljs.core.count(c__5568__auto___21570);
var G__21574 = (0);
seq__20856_21557 = G__21571;
chunk__20857_21558 = G__21572;
count__20858_21559 = G__21573;
i__20859_21560 = G__21574;
continue;
} else {
var vec__20890_21575 = cljs.core.first(seq__20856_21569__$1);
var script_tag_21576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20890_21575,(0),null);
var script_body_21577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20890_21575,(1),null);
eval(script_body_21577);


var G__21578 = cljs.core.next(seq__20856_21569__$1);
var G__21579 = null;
var G__21580 = (0);
var G__21581 = (0);
seq__20856_21557 = G__21578;
chunk__20857_21558 = G__21579;
count__20858_21559 = G__21580;
i__20859_21560 = G__21581;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20898){
var vec__20902 = p__20898;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20902,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20902,(1),null);
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
var G__20923 = arguments.length;
switch (G__20923) {
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
var seq__20967 = cljs.core.seq(style_keys);
var chunk__20968 = null;
var count__20969 = (0);
var i__20970 = (0);
while(true){
if((i__20970 < count__20969)){
var it = chunk__20968.cljs$core$IIndexed$_nth$arity$2(null,i__20970);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21585 = seq__20967;
var G__21586 = chunk__20968;
var G__21587 = count__20969;
var G__21588 = (i__20970 + (1));
seq__20967 = G__21585;
chunk__20968 = G__21586;
count__20969 = G__21587;
i__20970 = G__21588;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20967);
if(temp__5804__auto__){
var seq__20967__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20967__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20967__$1);
var G__21589 = cljs.core.chunk_rest(seq__20967__$1);
var G__21590 = c__5568__auto__;
var G__21591 = cljs.core.count(c__5568__auto__);
var G__21592 = (0);
seq__20967 = G__21589;
chunk__20968 = G__21590;
count__20969 = G__21591;
i__20970 = G__21592;
continue;
} else {
var it = cljs.core.first(seq__20967__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21593 = cljs.core.next(seq__20967__$1);
var G__21594 = null;
var G__21595 = (0);
var G__21596 = (0);
seq__20967 = G__21593;
chunk__20968 = G__21594;
count__20969 = G__21595;
i__20970 = G__21596;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20986,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__21009 = k20986;
var G__21009__$1 = (((G__21009 instanceof cljs.core.Keyword))?G__21009.fqn:null);
switch (G__21009__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20986,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__21018){
var vec__21019 = p__21018;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21019,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21019,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20985){
var self__ = this;
var G__20985__$1 = this;
return (new cljs.core.RecordIter((0),G__20985__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20987,other20988){
var self__ = this;
var this20987__$1 = this;
return (((!((other20988 == null)))) && ((((this20987__$1.constructor === other20988.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20987__$1.x,other20988.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20987__$1.y,other20988.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20987__$1.__extmap,other20988.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20986){
var self__ = this;
var this__5350__auto____$1 = this;
var G__21034 = k20986;
var G__21034__$1 = (((G__21034 instanceof cljs.core.Keyword))?G__21034.fqn:null);
switch (G__21034__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20986);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20985){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__21035 = cljs.core.keyword_identical_QMARK_;
var expr__21036 = k__5352__auto__;
if(cljs.core.truth_((pred__21035.cljs$core$IFn$_invoke$arity$2 ? pred__21035.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__21036) : pred__21035.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__21036)))){
return (new shadow.dom.Coordinate(G__20985,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21035.cljs$core$IFn$_invoke$arity$2 ? pred__21035.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__21036) : pred__21035.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__21036)))){
return (new shadow.dom.Coordinate(self__.x,G__20985,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20985),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20985){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20985,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20989){
var extmap__5385__auto__ = (function (){var G__21054 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20989,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20989)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21054);
} else {
return G__21054;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20989),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20989),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k21063,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__21073 = k21063;
var G__21073__$1 = (((G__21073 instanceof cljs.core.Keyword))?G__21073.fqn:null);
switch (G__21073__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21063,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__21074){
var vec__21075 = p__21074;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21075,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21075,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21062){
var self__ = this;
var G__21062__$1 = this;
return (new cljs.core.RecordIter((0),G__21062__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21064,other21065){
var self__ = this;
var this21064__$1 = this;
return (((!((other21065 == null)))) && ((((this21064__$1.constructor === other21065.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21064__$1.w,other21065.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21064__$1.h,other21065.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21064__$1.__extmap,other21065.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k21063){
var self__ = this;
var this__5350__auto____$1 = this;
var G__21084 = k21063;
var G__21084__$1 = (((G__21084 instanceof cljs.core.Keyword))?G__21084.fqn:null);
switch (G__21084__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k21063);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__21062){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__21085 = cljs.core.keyword_identical_QMARK_;
var expr__21086 = k__5352__auto__;
if(cljs.core.truth_((pred__21085.cljs$core$IFn$_invoke$arity$2 ? pred__21085.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__21086) : pred__21085.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__21086)))){
return (new shadow.dom.Size(G__21062,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21085.cljs$core$IFn$_invoke$arity$2 ? pred__21085.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__21086) : pred__21085.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__21086)))){
return (new shadow.dom.Size(self__.w,G__21062,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__21062),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__21062){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__21062,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__21070){
var extmap__5385__auto__ = (function (){var G__21092 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21070,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__21070)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21092);
} else {
return G__21092;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__21070),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__21070),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__21613 = (i + (1));
var G__21614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21613;
ret = G__21614;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21133){
var vec__21137 = p__21133;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21137,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21137,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__21146 = arguments.length;
switch (G__21146) {
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
var G__21619 = ps;
var G__21620 = (i + (1));
el__$1 = G__21619;
i = G__21620;
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
var vec__21171 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21171,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21171,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21171,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__21174_21626 = cljs.core.seq(props);
var chunk__21175_21627 = null;
var count__21176_21628 = (0);
var i__21177_21629 = (0);
while(true){
if((i__21177_21629 < count__21176_21628)){
var vec__21184_21631 = chunk__21175_21627.cljs$core$IIndexed$_nth$arity$2(null,i__21177_21629);
var k_21632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21184_21631,(0),null);
var v_21633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21184_21631,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21632);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21632),v_21633);


var G__21634 = seq__21174_21626;
var G__21635 = chunk__21175_21627;
var G__21636 = count__21176_21628;
var G__21637 = (i__21177_21629 + (1));
seq__21174_21626 = G__21634;
chunk__21175_21627 = G__21635;
count__21176_21628 = G__21636;
i__21177_21629 = G__21637;
continue;
} else {
var temp__5804__auto___21638 = cljs.core.seq(seq__21174_21626);
if(temp__5804__auto___21638){
var seq__21174_21639__$1 = temp__5804__auto___21638;
if(cljs.core.chunked_seq_QMARK_(seq__21174_21639__$1)){
var c__5568__auto___21640 = cljs.core.chunk_first(seq__21174_21639__$1);
var G__21641 = cljs.core.chunk_rest(seq__21174_21639__$1);
var G__21642 = c__5568__auto___21640;
var G__21643 = cljs.core.count(c__5568__auto___21640);
var G__21644 = (0);
seq__21174_21626 = G__21641;
chunk__21175_21627 = G__21642;
count__21176_21628 = G__21643;
i__21177_21629 = G__21644;
continue;
} else {
var vec__21187_21645 = cljs.core.first(seq__21174_21639__$1);
var k_21646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21187_21645,(0),null);
var v_21647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21187_21645,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21646);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21646),v_21647);


var G__21648 = cljs.core.next(seq__21174_21639__$1);
var G__21649 = null;
var G__21650 = (0);
var G__21651 = (0);
seq__21174_21626 = G__21648;
chunk__21175_21627 = G__21649;
count__21176_21628 = G__21650;
i__21177_21629 = G__21651;
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
var vec__21191 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21191,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21191,(1),null);
var seq__21194_21652 = cljs.core.seq(node_children);
var chunk__21196_21653 = null;
var count__21197_21654 = (0);
var i__21198_21655 = (0);
while(true){
if((i__21198_21655 < count__21197_21654)){
var child_struct_21659 = chunk__21196_21653.cljs$core$IIndexed$_nth$arity$2(null,i__21198_21655);
if((!((child_struct_21659 == null)))){
if(typeof child_struct_21659 === 'string'){
var text_21660 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21660),child_struct_21659].join(''));
} else {
var children_21661 = shadow.dom.svg_node(child_struct_21659);
if(cljs.core.seq_QMARK_(children_21661)){
var seq__21232_21662 = cljs.core.seq(children_21661);
var chunk__21234_21663 = null;
var count__21235_21664 = (0);
var i__21236_21665 = (0);
while(true){
if((i__21236_21665 < count__21235_21664)){
var child_21667 = chunk__21234_21663.cljs$core$IIndexed$_nth$arity$2(null,i__21236_21665);
if(cljs.core.truth_(child_21667)){
node.appendChild(child_21667);


var G__21668 = seq__21232_21662;
var G__21669 = chunk__21234_21663;
var G__21670 = count__21235_21664;
var G__21671 = (i__21236_21665 + (1));
seq__21232_21662 = G__21668;
chunk__21234_21663 = G__21669;
count__21235_21664 = G__21670;
i__21236_21665 = G__21671;
continue;
} else {
var G__21672 = seq__21232_21662;
var G__21673 = chunk__21234_21663;
var G__21674 = count__21235_21664;
var G__21675 = (i__21236_21665 + (1));
seq__21232_21662 = G__21672;
chunk__21234_21663 = G__21673;
count__21235_21664 = G__21674;
i__21236_21665 = G__21675;
continue;
}
} else {
var temp__5804__auto___21676 = cljs.core.seq(seq__21232_21662);
if(temp__5804__auto___21676){
var seq__21232_21677__$1 = temp__5804__auto___21676;
if(cljs.core.chunked_seq_QMARK_(seq__21232_21677__$1)){
var c__5568__auto___21678 = cljs.core.chunk_first(seq__21232_21677__$1);
var G__21679 = cljs.core.chunk_rest(seq__21232_21677__$1);
var G__21680 = c__5568__auto___21678;
var G__21681 = cljs.core.count(c__5568__auto___21678);
var G__21682 = (0);
seq__21232_21662 = G__21679;
chunk__21234_21663 = G__21680;
count__21235_21664 = G__21681;
i__21236_21665 = G__21682;
continue;
} else {
var child_21683 = cljs.core.first(seq__21232_21677__$1);
if(cljs.core.truth_(child_21683)){
node.appendChild(child_21683);


var G__21684 = cljs.core.next(seq__21232_21677__$1);
var G__21685 = null;
var G__21686 = (0);
var G__21687 = (0);
seq__21232_21662 = G__21684;
chunk__21234_21663 = G__21685;
count__21235_21664 = G__21686;
i__21236_21665 = G__21687;
continue;
} else {
var G__21688 = cljs.core.next(seq__21232_21677__$1);
var G__21689 = null;
var G__21690 = (0);
var G__21691 = (0);
seq__21232_21662 = G__21688;
chunk__21234_21663 = G__21689;
count__21235_21664 = G__21690;
i__21236_21665 = G__21691;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21661);
}
}


var G__21692 = seq__21194_21652;
var G__21693 = chunk__21196_21653;
var G__21694 = count__21197_21654;
var G__21695 = (i__21198_21655 + (1));
seq__21194_21652 = G__21692;
chunk__21196_21653 = G__21693;
count__21197_21654 = G__21694;
i__21198_21655 = G__21695;
continue;
} else {
var G__21696 = seq__21194_21652;
var G__21697 = chunk__21196_21653;
var G__21698 = count__21197_21654;
var G__21699 = (i__21198_21655 + (1));
seq__21194_21652 = G__21696;
chunk__21196_21653 = G__21697;
count__21197_21654 = G__21698;
i__21198_21655 = G__21699;
continue;
}
} else {
var temp__5804__auto___21703 = cljs.core.seq(seq__21194_21652);
if(temp__5804__auto___21703){
var seq__21194_21704__$1 = temp__5804__auto___21703;
if(cljs.core.chunked_seq_QMARK_(seq__21194_21704__$1)){
var c__5568__auto___21705 = cljs.core.chunk_first(seq__21194_21704__$1);
var G__21706 = cljs.core.chunk_rest(seq__21194_21704__$1);
var G__21707 = c__5568__auto___21705;
var G__21708 = cljs.core.count(c__5568__auto___21705);
var G__21709 = (0);
seq__21194_21652 = G__21706;
chunk__21196_21653 = G__21707;
count__21197_21654 = G__21708;
i__21198_21655 = G__21709;
continue;
} else {
var child_struct_21710 = cljs.core.first(seq__21194_21704__$1);
if((!((child_struct_21710 == null)))){
if(typeof child_struct_21710 === 'string'){
var text_21715 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21715),child_struct_21710].join(''));
} else {
var children_21716 = shadow.dom.svg_node(child_struct_21710);
if(cljs.core.seq_QMARK_(children_21716)){
var seq__21249_21717 = cljs.core.seq(children_21716);
var chunk__21251_21718 = null;
var count__21252_21719 = (0);
var i__21253_21720 = (0);
while(true){
if((i__21253_21720 < count__21252_21719)){
var child_21721 = chunk__21251_21718.cljs$core$IIndexed$_nth$arity$2(null,i__21253_21720);
if(cljs.core.truth_(child_21721)){
node.appendChild(child_21721);


var G__21722 = seq__21249_21717;
var G__21723 = chunk__21251_21718;
var G__21724 = count__21252_21719;
var G__21725 = (i__21253_21720 + (1));
seq__21249_21717 = G__21722;
chunk__21251_21718 = G__21723;
count__21252_21719 = G__21724;
i__21253_21720 = G__21725;
continue;
} else {
var G__21726 = seq__21249_21717;
var G__21727 = chunk__21251_21718;
var G__21728 = count__21252_21719;
var G__21729 = (i__21253_21720 + (1));
seq__21249_21717 = G__21726;
chunk__21251_21718 = G__21727;
count__21252_21719 = G__21728;
i__21253_21720 = G__21729;
continue;
}
} else {
var temp__5804__auto___21730__$1 = cljs.core.seq(seq__21249_21717);
if(temp__5804__auto___21730__$1){
var seq__21249_21731__$1 = temp__5804__auto___21730__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21249_21731__$1)){
var c__5568__auto___21732 = cljs.core.chunk_first(seq__21249_21731__$1);
var G__21733 = cljs.core.chunk_rest(seq__21249_21731__$1);
var G__21734 = c__5568__auto___21732;
var G__21735 = cljs.core.count(c__5568__auto___21732);
var G__21736 = (0);
seq__21249_21717 = G__21733;
chunk__21251_21718 = G__21734;
count__21252_21719 = G__21735;
i__21253_21720 = G__21736;
continue;
} else {
var child_21737 = cljs.core.first(seq__21249_21731__$1);
if(cljs.core.truth_(child_21737)){
node.appendChild(child_21737);


var G__21738 = cljs.core.next(seq__21249_21731__$1);
var G__21739 = null;
var G__21740 = (0);
var G__21741 = (0);
seq__21249_21717 = G__21738;
chunk__21251_21718 = G__21739;
count__21252_21719 = G__21740;
i__21253_21720 = G__21741;
continue;
} else {
var G__21742 = cljs.core.next(seq__21249_21731__$1);
var G__21743 = null;
var G__21744 = (0);
var G__21745 = (0);
seq__21249_21717 = G__21742;
chunk__21251_21718 = G__21743;
count__21252_21719 = G__21744;
i__21253_21720 = G__21745;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21716);
}
}


var G__21746 = cljs.core.next(seq__21194_21704__$1);
var G__21747 = null;
var G__21748 = (0);
var G__21749 = (0);
seq__21194_21652 = G__21746;
chunk__21196_21653 = G__21747;
count__21197_21654 = G__21748;
i__21198_21655 = G__21749;
continue;
} else {
var G__21750 = cljs.core.next(seq__21194_21704__$1);
var G__21751 = null;
var G__21752 = (0);
var G__21753 = (0);
seq__21194_21652 = G__21750;
chunk__21196_21653 = G__21751;
count__21197_21654 = G__21752;
i__21198_21655 = G__21753;
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
var len__5769__auto___21754 = arguments.length;
var i__5770__auto___21755 = (0);
while(true){
if((i__5770__auto___21755 < len__5769__auto___21754)){
args__5775__auto__.push((arguments[i__5770__auto___21755]));

var G__21756 = (i__5770__auto___21755 + (1));
i__5770__auto___21755 = G__21756;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq21282){
var G__21283 = cljs.core.first(seq21282);
var seq21282__$1 = cljs.core.next(seq21282);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21283,seq21282__$1);
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
var G__21298 = arguments.length;
switch (G__21298) {
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
var c__17665__auto___21758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17666__auto__ = (function (){var switch__17189__auto__ = (function (state_21316){
var state_val_21317 = (state_21316[(1)]);
if((state_val_21317 === (1))){
var state_21316__$1 = state_21316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21316__$1,(2),once_or_cleanup);
} else {
if((state_val_21317 === (2))){
var inst_21313 = (state_21316[(2)]);
var inst_21314 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_21316__$1 = (function (){var statearr_21323 = state_21316;
(statearr_21323[(7)] = inst_21313);

return statearr_21323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21316__$1,inst_21314);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17190__auto__ = null;
var shadow$dom$state_machine__17190__auto____0 = (function (){
var statearr_21325 = [null,null,null,null,null,null,null,null];
(statearr_21325[(0)] = shadow$dom$state_machine__17190__auto__);

(statearr_21325[(1)] = (1));

return statearr_21325;
});
var shadow$dom$state_machine__17190__auto____1 = (function (state_21316){
while(true){
var ret_value__17191__auto__ = (function (){try{while(true){
var result__17192__auto__ = switch__17189__auto__(state_21316);
if(cljs.core.keyword_identical_QMARK_(result__17192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17192__auto__;
}
break;
}
}catch (e21326){var ex__17193__auto__ = e21326;
var statearr_21327_21764 = state_21316;
(statearr_21327_21764[(2)] = ex__17193__auto__);


if(cljs.core.seq((state_21316[(4)]))){
var statearr_21328_21766 = state_21316;
(statearr_21328_21766[(1)] = cljs.core.first((state_21316[(4)])));

} else {
throw ex__17193__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21770 = state_21316;
state_21316 = G__21770;
continue;
} else {
return ret_value__17191__auto__;
}
break;
}
});
shadow$dom$state_machine__17190__auto__ = function(state_21316){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17190__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17190__auto____1.call(this,state_21316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17190__auto____0;
shadow$dom$state_machine__17190__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17190__auto____1;
return shadow$dom$state_machine__17190__auto__;
})()
})();
var state__17667__auto__ = (function (){var statearr_21329 = f__17666__auto__();
(statearr_21329[(6)] = c__17665__auto___21758);

return statearr_21329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17667__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
