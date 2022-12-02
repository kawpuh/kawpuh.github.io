goog.provide('solitaire.views');
var module$node_modules$$react_three$fiber$dist$react_three_fiber_cjs=shadow.js.require("module$node_modules$$react_three$fiber$dist$react_three_fiber_cjs", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
solitaire.views.rotate_fn = (function solitaire$views$rotate_fn(mesh_ref){
var new_r = (mesh_ref.current.rotation.x + 0.01);
return (mesh_ref.current.rotation.x = new_r);
});
solitaire.views.box = (function solitaire$views$box(props){
var mesh_ref = module$node_modules$react$index.useRef();
var vec__25221 = module$node_modules$react$index.useState(false);
var hovered = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25221,(0),null);
var hover = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25221,(1),null);
var vec__25224 = module$node_modules$react$index.useState(false);
var clicked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25224,(0),null);
var click = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25224,(1),null);
module$node_modules$$react_three$fiber$dist$react_three_fiber_cjs.useFrame((function (){
return solitaire.views.rotate_fn(mesh_ref);
}));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),mesh_ref,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__25227 = cljs.core.not(clicked);
return (click.cljs$core$IFn$_invoke$arity$1 ? click.cljs$core$IFn$_invoke$arity$1(G__25227) : click.call(null,G__25227));
}),new cljs.core.Keyword(null,"on-pointer-over","on-pointer-over",-1395937402),(function (){
return (hover.cljs$core$IFn$_invoke$arity$1 ? hover.cljs$core$IFn$_invoke$arity$1(true) : hover.call(null,true));
}),new cljs.core.Keyword(null,"on-pointer-out","on-pointer-out",-1087872370),(function (){
return (hover.cljs$core$IFn$_invoke$arity$1 ? hover.cljs$core$IFn$_invoke$arity$1(false) : hover.call(null,false));
})], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boxGeometry","boxGeometry",674957620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshStandardMaterial","meshStandardMaterial",-2120289909),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(hovered)?"hotpink":"orange")], null)], null)], null);
});
solitaire.views.main_panel = (function solitaire$views$main_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"test page"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"solid","solid",-2023773691)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$react_three$fiber$dist$react_three_fiber_cjs.Canvas,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointLight","pointLight",1456285858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(10)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),solitaire.views.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.2,(0),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),solitaire.views.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.2,(0),(0)], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=solitaire.views.js.map
