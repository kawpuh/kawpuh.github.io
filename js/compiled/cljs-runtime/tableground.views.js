goog.provide('tableground.views');
tableground.views.rotate_fn = (function tableground$views$rotate_fn(mesh_ref){
var new_r = (mesh_ref.current.rotation.x + 0.005);
return (mesh_ref.current.rotation.x = new_r);
});
tableground.views.hot_plane = (new shadow.js.shim.module$three.Plane((new shadow.js.shim.module$three.Vector3((0),(1),(0))),-0.3));
tableground.views.roll_pot = (function tableground$views$roll_pot(){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3","4","5","6"], null));
});
tableground.views.intersect_point = (new shadow.js.shim.module$three.Vector3());
tableground.views.play_area = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tableground.views.box_geom = (new shadow.js.shim.module$three.BoxGeometry((1),(1),(1)));
tableground.views.bid_boxes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tableground.views.hidden_boxes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tableground.views.pot_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(tableground.views.roll_pot());
tableground.views.bid_total = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
tableground.views.popup_msg = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tableground.views.game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"turn","turn",75759344),(1),new cljs.core.Keyword(null,"player-boxes","player-boxes",-635668928),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["3",null,"4",null,"5",null,"6",null,"1",null,"2",null], null), null),new cljs.core.Keyword(null,"opponent-boxes","opponent-boxes",1038098234),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["3",null,"4",null,"5",null,"6",null,"1",null,"2",null], null), null),new cljs.core.Keyword(null,"player-score","player-score",-564716352),(0),new cljs.core.Keyword(null,"opponent-score","opponent-score",2136563163),(0)], null));
tableground.views.hover_effect_objs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof tableground !== 'undefined') && (typeof tableground.views !== 'undefined') && (typeof tableground.views.grid_offsets !== 'undefined')){
} else {
tableground.views.grid_offsets = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.2,-0.6], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.6], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.2,-0.6], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.2,0.6], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.6], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.2,0.6], null)], null);
}
tableground.views.compute_play_area_bounds = (function tableground$views$compute_play_area_bounds(){
var bounds = cljs.core.deref(tableground.views.play_area);
var get_xz = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__24427_SHARP_){
return p1__24427_SHARP_.x;
}),(function (p1__24428_SHARP_){
return p1__24428_SHARP_.z;
}));
var geom = bounds.geometry;
geom.computeBoundingBox();

return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core._PLUS_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(get_xz(bounds.position)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_xz,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__24429_SHARP_){
return p1__24429_SHARP_.min;
}),(function (p1__24430_SHARP_){
return p1__24430_SHARP_.max;
}))(geom.boundingBox)));
});
tableground.views.play_area_intersect_QMARK_ = (function tableground$views$play_area_intersect_QMARK_(x,z){
var vec__24431 = tableground.views.compute_play_area_bounds();
var vec__24434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24431,(0),null);
var min_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24434,(0),null);
var min_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24434,(1),null);
var vec__24437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24431,(1),null);
var max_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24437,(0),null);
var max_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24437,(1),null);
return (((((min_x < x)) && ((x < max_x)))) && ((((min_z < z)) && ((z < max_z)))));
});
tableground.views.compute_play_area_center = (function tableground$views$compute_play_area_center(){
var vec__24440 = tableground.views.compute_play_area_bounds();
var vec__24443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,(0),null);
var min_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24443,(0),null);
var min_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24443,(1),null);
var vec__24446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,(1),null);
var max_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24446,(0),null);
var max_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24446,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,0.5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(min_x + max_x),(min_z + max_z)], null));
});
tableground.views.enforce_and_return_played = (function tableground$views$enforce_and_return_played(played){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__24449,p__24450){
var vec__24451 = p__24449;
var _face_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24451,(0),null);
var vec__24454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24451,(1),null);
var mesh_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24454,(0),null);
var _reset_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24454,(1),null);
var vec__24457 = p__24450;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24457,(0),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24457,(1),null);
(mesh_ref.current.position.x = x);

return (mesh_ref.current.position.z = z);
}),played,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__24460,p__24461){
var vec__24462 = p__24460;
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24462,(0),null);
var dz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24462,(1),null);
var vec__24465 = p__24461;
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(0),null);
var oz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + ox),(dz + oz)], null);
}),tableground.views.grid_offsets,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tableground.views.compute_play_area_center()))));

return played;
});
tableground.views.dot_geom = (new shadow.js.shim.module$three.CylinderGeometry(0.1,0.1,0.02,(16)));
tableground.views.dot_mat = (new shadow.js.shim.module$three.MeshPhysicalMaterial(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null))));
tableground.views.pot_box_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tableground.views.dice_rotations = new cljs.core.PersistentArrayMap(null, 6, ["1",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),"2",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.57,(0),(0)], null),"3",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),1.57], null),"4",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-1.57], null),"5",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57,(0),(0)], null),"6",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null)], null);
tableground.views.coin = (function tableground$views$coin(props){
var gltf = shadow.js.shim.module$$react_three$drei.useGLTF("/assets/coin/scene.gltf");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react.Suspense,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fallback","fallback",761637929),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispose","dispose",365585368),null], null),props], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),gltf.nodes.Cylinder015_Gold_0.geometry,new cljs.core.Keyword(null,"material","material",460118677),gltf.materials.Gold,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.PI / (2)),(0),Math.PI], null),new cljs.core.Keyword(null,"scale","scale",-230427353),2.5], null)], null)], null)], null);
});
tableground.views.coins = (function tableground$views$coins(n){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132)], null),(function (){var iter__5523__auto__ = (function tableground$views$coins_$_iter__24468(s__24469){
return (new cljs.core.LazySeq(null,(function (){
var s__24469__$1 = s__24469;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24469__$1);
if(temp__5804__auto__){
var s__24469__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24469__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24469__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24471 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24470 = (0);
while(true){
if((i__24470 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__24470);
cljs.core.chunk_append(b__24471,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.coin,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0.15 * i),(0)], null)], null)], null));

var G__24568 = (i__24470 + (1));
i__24470 = G__24568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24471),tableground$views$coins_$_iter__24468(cljs.core.chunk_rest(s__24469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24471),null);
}
} else {
var i = cljs.core.first(s__24469__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.coin,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0.15 * i),(0)], null)], null)], null),tableground$views$coins_$_iter__24468(cljs.core.rest(s__24469__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})());
});
tableground.views.pot_box = (function tableground$views$pot_box(face_text){
var mesh_ref = shadow.js.shim.module$react.useRef();
var _ = cljs.core.reset_BANG_(tableground.views.pot_box_ref,mesh_ref);
var rot = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tableground.views.dice_rotations,face_text);
var font_loader = shadow.js.shim.module$$react_three$fiber.useLoader(shadow.js.shim.module$three$examples$jsm$loaders$FontLoader.FontLoader,"/marcellus.json");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),mesh_ref,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.box_geom,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(0),-3.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),rot], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,-0.25,0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,0.25,0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(0),(0)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.25,0.25], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,-0.25,-0.25], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,0.25,-0.25], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.25,-0.25], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.25,0.25], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,0.25,0.25], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,0.25,-0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,-0.25,-0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,0.25,-0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,-0.25,-0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,-0.5,-0.3], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,-0.5,(0)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,-0.5,0.3], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,-0.5,-0.3], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,-0.5,(0)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,-0.5,0.3], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshPhysicalMaterial","meshPhysicalMaterial",1544836631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#333333"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.8,(0),-3.8], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.1,(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"BoxGeometry","BoxGeometry",824599000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),0.1], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshPhysicalMaterial","meshPhysicalMaterial",1544836631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#333333"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.Text3D),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font","font",-1506159249),font_loader.data,new cljs.core.Keyword(null,"height","height",1025178622),0.05,new cljs.core.Keyword(null,"size","size",1098693007),0.5,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.2,-0.25,0.1], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null),face_text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshPhysicalMaterial","meshPhysicalMaterial",1544836631),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"emissive","emissive",-761267227),"gold"], null)], null)], null)], null)], null);
});
tableground.views.player_box = (function tableground$views$player_box(var_args){
var G__24473 = arguments.length;
switch (G__24473) {
case 0:
return tableground.views.player_box.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tableground.views.player_box.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tableground.views.player_box.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"face-value","face-value",1631838900),(0)], null)], null);
}));

(tableground.views.player_box.cljs$core$IFn$_invoke$arity$1 = (function (p__24474){
var map__24475 = p__24474;
var map__24475__$1 = cljs.core.__destructure_map(map__24475);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24475__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var face_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24475__$1,new cljs.core.Keyword(null,"face-value","face-value",1631838900));
var mesh_ref = shadow.js.shim.module$react.useRef();
var font_loader = shadow.js.shim.module$$react_three$fiber.useLoader(shadow.js.shim.module$three$examples$jsm$loaders$FontLoader.FontLoader,"/marcellus.json");
var set_xz = (function (p__24476){
var vec__24477 = p__24476;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24477,(0),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24477,(1),null);
(mesh_ref.current.position.x = x);

return (mesh_ref.current.position.z = z);
});
var set_y = (function (y){
return (mesh_ref.current.position.y = y);
});
var set_hover = (function (hovered_QMARK_){
return (document.body.style.cursor = (cljs.core.truth_(hovered_QMARK_)?"pointer":""));
});
var bind_hover = shadow.js.shim.module$$use_gesture$react.useHover((function (e){
if(cljs.core.truth_((function (){var and__5043__auto__ = e.last;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(e.down);
} else {
return and__5043__auto__;
}
})())){
return set_hover(false);
} else {
if(cljs.core.truth_(e.first)){
return set_hover(true);
} else {
return null;
}
}
}));
var bind_drag = shadow.js.shim.module$$use_gesture$react.useDrag((function (e){
if(cljs.core.truth_(e.first)){
set_y((cljs.core.second(position) + 0.3));
} else {
}

var evt_24570 = e.event;
var ray_24571 = evt_24570.ray;
ray_24571.intersectPlane(tableground.views.hot_plane,tableground.views.intersect_point);

if(cljs.core.truth_(e.last)){
if((!(tableground.views.play_area_intersect_QMARK_(tableground.views.intersect_point.x,tableground.views.intersect_point.z)))){
set_xz(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(position,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(position,(2))], null));

cljs.core.reset_BANG_(tableground.views.bid_total,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.bid_boxes,(function (played){
return tableground.views.enforce_and_return_played(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(played,cljs.core.str.cljs$core$IFn$_invoke$arity$1(face_value)));
}))))));
} else {
cljs.core.reset_BANG_(tableground.views.bid_total,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.bid_boxes,(function (played){
return tableground.views.enforce_and_return_played(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(played,cljs.core.str.cljs$core$IFn$_invoke$arity$1(face_value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mesh_ref,(function (){
return set_xz(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(position,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(position,(2))], null));
})], null)));
}))))));
}

set_hover(false);

set_y(cljs.core.second(position));

var seq__24480_24572 = cljs.core.seq(cljs.core.deref(tableground.views.hover_effect_objs));
var chunk__24481_24573 = null;
var count__24482_24574 = (0);
var i__24483_24575 = (0);
while(true){
if((i__24483_24575 < count__24482_24574)){
var obj_24576 = chunk__24481_24573.cljs$core$IIndexed$_nth$arity$2(null,i__24483_24575);
(obj_24576.visible = false);


var G__24577 = seq__24480_24572;
var G__24578 = chunk__24481_24573;
var G__24579 = count__24482_24574;
var G__24580 = (i__24483_24575 + (1));
seq__24480_24572 = G__24577;
chunk__24481_24573 = G__24578;
count__24482_24574 = G__24579;
i__24483_24575 = G__24580;
continue;
} else {
var temp__5804__auto___24581 = cljs.core.seq(seq__24480_24572);
if(temp__5804__auto___24581){
var seq__24480_24582__$1 = temp__5804__auto___24581;
if(cljs.core.chunked_seq_QMARK_(seq__24480_24582__$1)){
var c__5568__auto___24583 = cljs.core.chunk_first(seq__24480_24582__$1);
var G__24584 = cljs.core.chunk_rest(seq__24480_24582__$1);
var G__24585 = c__5568__auto___24583;
var G__24586 = cljs.core.count(c__5568__auto___24583);
var G__24587 = (0);
seq__24480_24572 = G__24584;
chunk__24481_24573 = G__24585;
count__24482_24574 = G__24586;
i__24483_24575 = G__24587;
continue;
} else {
var obj_24588 = cljs.core.first(seq__24480_24582__$1);
(obj_24588.visible = false);


var G__24589 = cljs.core.next(seq__24480_24582__$1);
var G__24590 = null;
var G__24591 = (0);
var G__24592 = (0);
seq__24480_24572 = G__24589;
chunk__24481_24573 = G__24590;
count__24482_24574 = G__24591;
i__24483_24575 = G__24592;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(e.first)){
var seq__24484_24593 = cljs.core.seq(cljs.core.deref(tableground.views.hover_effect_objs));
var chunk__24485_24594 = null;
var count__24486_24595 = (0);
var i__24487_24596 = (0);
while(true){
if((i__24487_24596 < count__24486_24595)){
var obj_24597 = chunk__24485_24594.cljs$core$IIndexed$_nth$arity$2(null,i__24487_24596);
(obj_24597.visible = true);


var G__24598 = seq__24484_24593;
var G__24599 = chunk__24485_24594;
var G__24600 = count__24486_24595;
var G__24601 = (i__24487_24596 + (1));
seq__24484_24593 = G__24598;
chunk__24485_24594 = G__24599;
count__24486_24595 = G__24600;
i__24487_24596 = G__24601;
continue;
} else {
var temp__5804__auto___24602 = cljs.core.seq(seq__24484_24593);
if(temp__5804__auto___24602){
var seq__24484_24603__$1 = temp__5804__auto___24602;
if(cljs.core.chunked_seq_QMARK_(seq__24484_24603__$1)){
var c__5568__auto___24604 = cljs.core.chunk_first(seq__24484_24603__$1);
var G__24605 = cljs.core.chunk_rest(seq__24484_24603__$1);
var G__24606 = c__5568__auto___24604;
var G__24607 = cljs.core.count(c__5568__auto___24604);
var G__24608 = (0);
seq__24484_24593 = G__24605;
chunk__24485_24594 = G__24606;
count__24486_24595 = G__24607;
i__24487_24596 = G__24608;
continue;
} else {
var obj_24609 = cljs.core.first(seq__24484_24603__$1);
(obj_24609.visible = true);


var G__24610 = cljs.core.next(seq__24484_24603__$1);
var G__24611 = null;
var G__24612 = (0);
var G__24613 = (0);
seq__24484_24593 = G__24610;
chunk__24485_24594 = G__24611;
count__24486_24595 = G__24612;
i__24487_24596 = G__24613;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(e.active)){
set_xz(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.intersect_point.x,tableground.views.intersect_point.z], null));
} else {
}
}

return e.event.stopPropagation();
}));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((bind_drag.cljs$core$IFn$_invoke$arity$0 ? bind_drag.cljs$core$IFn$_invoke$arity$0() : bind_drag.call(null))),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((bind_hover.cljs$core$IFn$_invoke$arity$0 ? bind_hover.cljs$core$IFn$_invoke$arity$0() : bind_hover.call(null))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"touch-action","touch-action",-128660292),new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),mesh_ref,new cljs.core.Keyword(null,"position","position",-2011731912),position], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.coins,face_value], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.Text3D),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font","font",-1506159249),font_loader.data,new cljs.core.Keyword(null,"height","height",1025178622),0.15,new cljs.core.Keyword(null,"size","size",1098693007),0.5,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.17,(0.15 * (face_value - (1))),0.2], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.57,(0),(0)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(face_value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshPhysicalMaterial","meshPhysicalMaterial",1544836631),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#555",new cljs.core.Keyword(null,"emissive","emissive",-761267227),"green"], null)], null)], null)], null);
}));

(tableground.views.player_box.cljs$lang$maxFixedArity = 1);

tableground.views.popup_panel = (function tableground$views$popup_panel(msg,btns){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(101),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(200,200,200, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"margin","margin",-995903681),"16px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 24px 24px 24px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"3px 4px 8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px"], null)], null),msg], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),(function (){var iter__5523__auto__ = (function tableground$views$popup_panel_$_iter__24488(s__24489){
return (new cljs.core.LazySeq(null,(function (){
var s__24489__$1 = s__24489;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24489__$1);
if(temp__5804__auto__){
var s__24489__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24489__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24489__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24491 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24490 = (0);
while(true){
if((i__24490 < size__5522__auto__)){
var vec__24492 = cljs.core._nth(c__5521__auto__,i__24490);
var btn_txt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24492,(0),null);
var btn_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24492,(1),null);
cljs.core.chunk_append(b__24491,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"end","end",-268185958)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),btn_fn], null),btn_txt], null));

var G__24614 = (i__24490 + (1));
i__24490 = G__24614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24491),tableground$views$popup_panel_$_iter__24488(cljs.core.chunk_rest(s__24489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24491),null);
}
} else {
var vec__24495 = cljs.core.first(s__24489__$2);
var btn_txt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24495,(0),null);
var btn_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24495,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"end","end",-268185958)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),btn_fn], null),btn_txt], null),tableground$views$popup_panel_$_iter__24488(cljs.core.rest(s__24489__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(btns);
})())], null)], null);
});
tableground.views.play_opponent_turn = (function tableground$views$play_opponent_turn(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.game_state,(function (state){
var opponent_boxes = new cljs.core.Keyword(null,"opponent-boxes","opponent-boxes",1038098234).cljs$core$IFn$_invoke$arity$1(state);
var nonce = cljs.core.rand_int(clojure.math.combinatorics.count_subsets(opponent_boxes));
var opponent_plays = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(state)))?opponent_boxes:clojure.math.combinatorics.nth_subset(opponent_boxes,nonce));
var opponent_total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,opponent_plays));
var opponent_msg = ["Opponent plays ","[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",opponent_plays),"]"," for a total of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opponent_total)].join('');
var played = cljs.core.keys(cljs.core.deref(tableground.views.bid_boxes));
var player_rem = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player-boxes","player-boxes",-635668928).cljs$core$IFn$_invoke$arity$1(state),cljs.core.set(cljs.core.keys(cljs.core.deref(tableground.views.bid_boxes))));
var player_total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,played));
var player_msg = ["You played ","[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(cljs.core.deref(tableground.views.bid_boxes))),"]"," for a total of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_total)].join('');
var verdict = cljs.core.compare(player_total,opponent_total);
var verdict_msg = (function (){var G__24502 = verdict;
switch (G__24502) {
case (0):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),"It's a tie. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Scores are unchanged."], null)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),"You win the bid.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)," You gain ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tableground.views.pot_value))," points"], null)], null);

break;
case (-1):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),"You lose the bid.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)," Opponent gains ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tableground.views.pot_value))," points"], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24502)].join('')));

}
})();
var vec__24499 = (function (){var G__24503 = verdict;
switch (G__24503) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"player-score","player-score",-564716352)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"opponent-score","opponent-score",2136563163))], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(parseInt(cljs.core.deref(tableground.views.pot_value)) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"player-score","player-score",-564716352))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"opponent-score","opponent-score",2136563163))], null);

break;
case (-1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"player-score","player-score",-564716352)),(parseInt(cljs.core.deref(tableground.views.pot_value)) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"opponent-score","opponent-score",2136563163)))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24503)].join('')));

}
})();
var player_score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24499,(0),null);
var opponent_score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24499,(1),null);
var game_result_msg = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"turn","turn",75759344)),(3)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Game result"], null),["The final score is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_score)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opponent_score),"."].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var G__24504 = cljs.core.compare(player_score,opponent_score);
switch (G__24504) {
case (0):
return "The game ends in a tie.";

break;
case (1):
return "You're the winner!";

break;
case (-1):
return "You were runner-up.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24504)].join('')));

}
})()], null):null);
var emoji_msg = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"turn","turn",75759344)),(3)))?(function (){var G__24505 = cljs.core.compare(player_score,opponent_score);
switch (G__24505) {
case (0):
return "\u2696\uFE0F ";

break;
case (1):
return "\uD83C\uDFC6";

break;
case (-1):
return "\uD83E\uDD48";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24505)].join('')));

}
})():(function (){var G__24506 = verdict;
switch (G__24506) {
case (1):
return "\u2705";

break;
case (0):
return "\u26AA";

break;
case (-1):
return "\uD83D\uDEAB";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24506)].join('')));

}
})());
var final_msg = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),emoji_msg], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Bid result"], null),player_msg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),opponent_msg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),verdict_msg,game_result_msg], null);
var opponent_rem = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(opponent_boxes,opponent_plays);
cljs.core.reset_BANG_(tableground.views.popup_msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [final_msg,cljs.core.PersistentArrayMap.createAsIfByAssoc([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"turn","turn",75759344)),(3)))?"Play Again.":"Continue."),(function (){
return cljs.core.reset_BANG_(tableground.views.popup_msg,null);
})])], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.bid_boxes,(function (boxes){
var seq__24507_24620 = cljs.core.seq(boxes);
var chunk__24508_24621 = null;
var count__24509_24622 = (0);
var i__24510_24623 = (0);
while(true){
if((i__24510_24623 < count__24509_24622)){
var vec__24523_24624 = chunk__24508_24621.cljs$core$IIndexed$_nth$arity$2(null,i__24510_24623);
var _face_value_24625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24523_24624,(0),null);
var vec__24526_24626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24523_24624,(1),null);
var box_ref_24627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24526_24626,(0),null);
var _reset_fn_24628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24526_24626,(1),null);
(box_ref_24627.current.visible = false);

(box_ref_24627.current.position.y = (15));


var G__24629 = seq__24507_24620;
var G__24630 = chunk__24508_24621;
var G__24631 = count__24509_24622;
var G__24632 = (i__24510_24623 + (1));
seq__24507_24620 = G__24629;
chunk__24508_24621 = G__24630;
count__24509_24622 = G__24631;
i__24510_24623 = G__24632;
continue;
} else {
var temp__5804__auto___24633 = cljs.core.seq(seq__24507_24620);
if(temp__5804__auto___24633){
var seq__24507_24634__$1 = temp__5804__auto___24633;
if(cljs.core.chunked_seq_QMARK_(seq__24507_24634__$1)){
var c__5568__auto___24635 = cljs.core.chunk_first(seq__24507_24634__$1);
var G__24636 = cljs.core.chunk_rest(seq__24507_24634__$1);
var G__24637 = c__5568__auto___24635;
var G__24638 = cljs.core.count(c__5568__auto___24635);
var G__24639 = (0);
seq__24507_24620 = G__24636;
chunk__24508_24621 = G__24637;
count__24509_24622 = G__24638;
i__24510_24623 = G__24639;
continue;
} else {
var vec__24529_24640 = cljs.core.first(seq__24507_24634__$1);
var _face_value_24641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24529_24640,(0),null);
var vec__24532_24642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24529_24640,(1),null);
var box_ref_24643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24532_24642,(0),null);
var _reset_fn_24644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24532_24642,(1),null);
(box_ref_24643.current.visible = false);

(box_ref_24643.current.position.y = (15));


var G__24645 = cljs.core.next(seq__24507_24634__$1);
var G__24646 = null;
var G__24647 = (0);
var G__24648 = (0);
seq__24507_24620 = G__24645;
chunk__24508_24621 = G__24646;
count__24509_24622 = G__24647;
i__24510_24623 = G__24648;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.hidden_boxes,(function (p1__24498_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__24498_SHARP_,boxes);
}));

return null;
}));

cljs.core.reset_BANG_(tableground.views.bid_total,(0));

cljs.core.reset_BANG_(tableground.views.pot_value,tableground.views.roll_pot());

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"turn","turn",75759344)),(3))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.hidden_boxes,(function (boxes){
var seq__24535_24649 = cljs.core.seq(boxes);
var chunk__24536_24650 = null;
var count__24537_24651 = (0);
var i__24538_24652 = (0);
while(true){
if((i__24538_24652 < count__24537_24651)){
var vec__24551_24653 = chunk__24536_24650.cljs$core$IIndexed$_nth$arity$2(null,i__24538_24652);
var _face_value_24654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24551_24653,(0),null);
var vec__24554_24655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24551_24653,(1),null);
var box_ref_24656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24554_24655,(0),null);
var reset_fn_24657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24554_24655,(1),null);
(box_ref_24656.current.visible = true);

(reset_fn_24657.cljs$core$IFn$_invoke$arity$0 ? reset_fn_24657.cljs$core$IFn$_invoke$arity$0() : reset_fn_24657.call(null));

(box_ref_24656.current.position.y = 0.2);


var G__24658 = seq__24535_24649;
var G__24659 = chunk__24536_24650;
var G__24660 = count__24537_24651;
var G__24661 = (i__24538_24652 + (1));
seq__24535_24649 = G__24658;
chunk__24536_24650 = G__24659;
count__24537_24651 = G__24660;
i__24538_24652 = G__24661;
continue;
} else {
var temp__5804__auto___24662 = cljs.core.seq(seq__24535_24649);
if(temp__5804__auto___24662){
var seq__24535_24663__$1 = temp__5804__auto___24662;
if(cljs.core.chunked_seq_QMARK_(seq__24535_24663__$1)){
var c__5568__auto___24664 = cljs.core.chunk_first(seq__24535_24663__$1);
var G__24665 = cljs.core.chunk_rest(seq__24535_24663__$1);
var G__24666 = c__5568__auto___24664;
var G__24667 = cljs.core.count(c__5568__auto___24664);
var G__24668 = (0);
seq__24535_24649 = G__24665;
chunk__24536_24650 = G__24666;
count__24537_24651 = G__24667;
i__24538_24652 = G__24668;
continue;
} else {
var vec__24557_24669 = cljs.core.first(seq__24535_24663__$1);
var _face_value_24670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24557_24669,(0),null);
var vec__24560_24671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24557_24669,(1),null);
var box_ref_24672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24560_24671,(0),null);
var reset_fn_24673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24560_24671,(1),null);
(box_ref_24672.current.visible = true);

(reset_fn_24673.cljs$core$IFn$_invoke$arity$0 ? reset_fn_24673.cljs$core$IFn$_invoke$arity$0() : reset_fn_24673.call(null));

(box_ref_24672.current.position.y = 0.2);


var G__24674 = cljs.core.next(seq__24535_24663__$1);
var G__24675 = null;
var G__24676 = (0);
var G__24677 = (0);
seq__24535_24649 = G__24674;
chunk__24536_24650 = G__24675;
count__24537_24651 = G__24676;
i__24538_24652 = G__24677;
continue;
}
} else {
}
}
break;
}

return null;
}));

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"turn","turn",75759344),(1),new cljs.core.Keyword(null,"player-boxes","player-boxes",-635668928),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["3",null,"4",null,"5",null,"6",null,"1",null,"2",null], null), null),new cljs.core.Keyword(null,"opponent-boxes","opponent-boxes",1038098234),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["3",null,"4",null,"5",null,"6",null,"1",null,"2",null], null), null),new cljs.core.Keyword(null,"player-score","player-score",-564716352),(0),new cljs.core.Keyword(null,"opponent-score","opponent-score",2136563163),(0)], null);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"opponent-boxes","opponent-boxes",1038098234),opponent_rem),new cljs.core.Keyword(null,"player-boxes","player-boxes",-635668928),player_rem),new cljs.core.Keyword(null,"turn","turn",75759344),cljs.core.inc),new cljs.core.Keyword(null,"player-score","player-score",-564716352),player_score),new cljs.core.Keyword(null,"opponent-score","opponent-score",2136563163),opponent_score);
}
}));
});
tableground.views.submit_bid = (function tableground$views$submit_bid(){
return tableground.views.play_opponent_turn();
});
tableground.views.tutorial_panel = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Basics:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Each turn the black die is rolled. The number rolled becomes the value of the pot. You then bid from your hand (by dragging boxes to the green pad) to try to win the pot. Once you submit your bid, your opponent will bid from their hand. If there's a higher bidder, the pot value is added to their score. Everything that has been bid is discarded. After three turns, the player with a higher score wins."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Opponent Strategy:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For the first two turns the opponent will bid randomly (uniform chance of playing any of the available moves). On the third turn, the opponent will always bid whatever is left in their hand."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Can you win three games in a row?"], null)], null);
tableground.views.text_panel = (function tableground$views$text_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(100),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"100%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(8),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),(1),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"padding","padding",1660304693),(6)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(tableground.views.popup_msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.tutorial_panel,new cljs.core.PersistentArrayMap(null, 1, ["Continue.",(function (){
return cljs.core.reset_BANG_(tableground.views.popup_msg,null);
})], null)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"?"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(8),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.Keyword(null,"href","href",-793805698),"license.txt"], null),"License"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Turn: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tableground.views.game_state),new cljs.core.Keyword(null,"turn","turn",75759344)),"/3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Opponent Score: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tableground.views.game_state),new cljs.core.Keyword(null,"opponent-score","opponent-score",2136563163))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Opponent Hand: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tableground.views.game_state),new cljs.core.Keyword(null,"opponent-boxes","opponent-boxes",1038098234))))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Your Score: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tableground.views.game_state),new cljs.core.Keyword(null,"player-score","player-score",-564716352))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your Bid: ",cljs.core.deref(tableground.views.bid_total)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tableground.views.submit_bid], null),"Submit Bid"], null)], null)], null);
});
tableground.views.wood_table = (function tableground$views$wood_table(){
var gltf = shadow.js.shim.module$$react_three$drei.useGLTF("/assets/woodtable/scene.gltf");
var alt_scene = shadow.js.shim.module$react.useMemo((function (){
return gltf.scene.clone();
}));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react.Suspense,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fallback","fallback",761637929),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"object","object",1474613949),gltf.scene,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(Math.PI / (-2)),(0)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-4.15,-2.4], null),new cljs.core.Keyword(null,"scale","scale",-230427353),0.02], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"object","object",1474613949),alt_scene,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,-3.65,3.1], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(Math.PI / (2)),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),0.018], null)], null)], null)], null);
});
tableground.views.panel_fn = (function tableground$views$panel_fn(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"touch-action","touch-action",-128660292),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var temp__5804__auto__ = cljs.core.deref(tableground.views.popup_msg);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__24565 = temp__5804__auto__;
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24565,(0),null);
var btns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24565,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.popup_panel,msg,btns], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.text_panel], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react.Suspense,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fallback","fallback",761637929),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Loading..."], null)], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$react_three$fiber.Canvas,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10),(8)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(60),new cljs.core.Keyword(null,"fov","fov",-12463282),(50)], null),new cljs.core.Keyword(null,"orthographic","orthographic",-2040298248),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.AdaptiveDpr)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hemisphereLight","hemisphereLight",1354905528),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),0.2,new cljs.core.Keyword(null,"color","color",1011675173),"#ffffcb",new cljs.core.Keyword(null,"ground-color","ground-color",-1832095873),"#080820"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ambientLight","ambientLight",1634320339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),0.3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointLight","pointLight",1456285858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(8),-3.5], null),new cljs.core.Keyword(null,"intensity","intensity",1142770863),0.2,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.pot_box,cljs.core.deref(tableground.views.pot_value)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.wood_table], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"RectAreaLight","RectAreaLight",-185365301),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.3,(-1)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.PI / (-2)),(0),(0)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__24563_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tableground.views.hover_effect_objs,cljs.core.conj,p1__24563_SHARP_);
}),new cljs.core.Keyword(null,"castShadow","castShadow",1475003551),false,new cljs.core.Keyword(null,"intensity","intensity",1142770863),0.8,new cljs.core.Keyword(null,"visible","visible",-1024216805),false,new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(3)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.7,-0.15,2.5], null),new cljs.core.Keyword(null,"face-value","face-value",1631838900),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,-0.15,2.5], null),new cljs.core.Keyword(null,"face-value","face-value",1631838900),(2)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.7,-0.15,2.5], null),new cljs.core.Keyword(null,"face-value","face-value",1631838900),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.7,-0.15,3.7], null),new cljs.core.Keyword(null,"face-value","face-value",1631838900),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,-0.15,3.7], null),new cljs.core.Keyword(null,"face-value","face-value",1631838900),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.7,-0.15,3.7], null),new cljs.core.Keyword(null,"face-value","face-value",1631838900),(6)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.3,(-1)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__24564_SHARP_){
return cljs.core.reset_BANG_(tableground.views.play_area,p1__24564_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"BoxGeometry","BoxGeometry",824599000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),0.01,(3)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshStandardMaterial","meshStandardMaterial",-2120289909),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen",new cljs.core.Keyword(null,"transparent","transparent",-2073609949),true,new cljs.core.Keyword(null,"opacity","opacity",397153780),0.1], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-3),(0)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.PI / (-2)),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"PlaneGeometry","PlaneGeometry",-2079437641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(30)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshPhysicalMaterial","meshPhysicalMaterial",1544836631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.ContactShadows),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.29,(0)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"scale","scale",-230427353),(20),new cljs.core.Keyword(null,"blur","blur",-453500461),1.75,new cljs.core.Keyword(null,"far","far",85807546),4.5], null)], null)], null)], null)], null);
});
tableground.views.main_panel = (function tableground$views$main_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.panel_fn], null);
});

//# sourceMappingURL=tableground.views.js.map
