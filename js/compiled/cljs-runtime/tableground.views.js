goog.provide('tableground.views');
tableground.views.rotate_fn = (function tableground$views$rotate_fn(mesh_ref){
var new_r = (mesh_ref.current.rotation.x + 0.005);
return (mesh_ref.current.rotation.x = new_r);
});
tableground.views.hot_plane = (new shadow.js.shim.module$three.Plane((new shadow.js.shim.module$three.Vector3((0),(1),(0))),0.3));
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
var get_xz = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__48658_SHARP_){
return p1__48658_SHARP_.x;
}),(function (p1__48659_SHARP_){
return p1__48659_SHARP_.z;
}));
var geom = bounds.geometry;
geom.computeBoundingBox();

return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core._PLUS_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(get_xz(bounds.position)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_xz,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__48660_SHARP_){
return p1__48660_SHARP_.min;
}),(function (p1__48661_SHARP_){
return p1__48661_SHARP_.max;
}))(geom.boundingBox)));
});
tableground.views.play_area_intersect_QMARK_ = (function tableground$views$play_area_intersect_QMARK_(x,z){
var vec__48662 = tableground.views.compute_play_area_bounds();
var vec__48665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48662,(0),null);
var min_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48665,(0),null);
var min_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48665,(1),null);
var vec__48668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48662,(1),null);
var max_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48668,(0),null);
var max_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48668,(1),null);
return (((((min_x < x)) && ((x < max_x)))) && ((((min_z < z)) && ((z < max_z)))));
});
tableground.views.compute_play_area_center = (function tableground$views$compute_play_area_center(){
var vec__48671 = tableground.views.compute_play_area_bounds();
var vec__48674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48671,(0),null);
var min_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48674,(0),null);
var min_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48674,(1),null);
var vec__48677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48671,(1),null);
var max_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48677,(0),null);
var max_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48677,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,0.5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(min_x + max_x),(min_z + max_z)], null));
});
tableground.views.enforce_and_return_played = (function tableground$views$enforce_and_return_played(played){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__48680,p__48681){
var vec__48682 = p__48680;
var _face_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48682,(0),null);
var vec__48685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48682,(1),null);
var mesh_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48685,(0),null);
var _reset_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48685,(1),null);
var vec__48688 = p__48681;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48688,(0),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48688,(1),null);
(mesh_ref.current.position.x = x);

return (mesh_ref.current.position.z = z);
}),played,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__48691,p__48692){
var vec__48693 = p__48691;
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48693,(0),null);
var dz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48693,(1),null);
var vec__48696 = p__48692;
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48696,(0),null);
var oz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48696,(1),null);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132)], null),(function (){var iter__5523__auto__ = (function tableground$views$coins_$_iter__48699(s__48700){
return (new cljs.core.LazySeq(null,(function (){
var s__48700__$1 = s__48700;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__48700__$1);
if(temp__5804__auto__){
var s__48700__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48700__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__48700__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__48702 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__48701 = (0);
while(true){
if((i__48701 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__48701);
cljs.core.chunk_append(b__48702,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.coin,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0.15 * i),(0)], null)], null)], null));

var G__48804 = (i__48701 + (1));
i__48701 = G__48804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48702),tableground$views$coins_$_iter__48699(cljs.core.chunk_rest(s__48700__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48702),null);
}
} else {
var i = cljs.core.first(s__48700__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.coin,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0.15 * i),(0)], null)], null)], null),tableground$views$coins_$_iter__48699(cljs.core.rest(s__48700__$2)));
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
var G__48704 = arguments.length;
switch (G__48704) {
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

(tableground.views.player_box.cljs$core$IFn$_invoke$arity$1 = (function (p__48705){
var map__48706 = p__48705;
var map__48706__$1 = cljs.core.__destructure_map(map__48706);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48706__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var face_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48706__$1,new cljs.core.Keyword(null,"face-value","face-value",1631838900));
var mesh_ref = shadow.js.shim.module$react.useRef();
var font_loader = shadow.js.shim.module$$react_three$fiber.useLoader(shadow.js.shim.module$three$examples$jsm$loaders$FontLoader.FontLoader,"/marcellus.json");
var set_xz = (function (p__48707){
var vec__48708 = p__48707;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48708,(0),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48708,(1),null);
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

var evt_48806 = e.event;
var ray_48807 = evt_48806.ray;
ray_48807.intersectPlane(tableground.views.hot_plane,tableground.views.intersect_point);

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

var seq__48711_48808 = cljs.core.seq(cljs.core.deref(tableground.views.hover_effect_objs));
var chunk__48712_48809 = null;
var count__48713_48810 = (0);
var i__48714_48811 = (0);
while(true){
if((i__48714_48811 < count__48713_48810)){
var obj_48812 = chunk__48712_48809.cljs$core$IIndexed$_nth$arity$2(null,i__48714_48811);
(obj_48812.visible = false);


var G__48813 = seq__48711_48808;
var G__48814 = chunk__48712_48809;
var G__48815 = count__48713_48810;
var G__48816 = (i__48714_48811 + (1));
seq__48711_48808 = G__48813;
chunk__48712_48809 = G__48814;
count__48713_48810 = G__48815;
i__48714_48811 = G__48816;
continue;
} else {
var temp__5804__auto___48817 = cljs.core.seq(seq__48711_48808);
if(temp__5804__auto___48817){
var seq__48711_48818__$1 = temp__5804__auto___48817;
if(cljs.core.chunked_seq_QMARK_(seq__48711_48818__$1)){
var c__5568__auto___48819 = cljs.core.chunk_first(seq__48711_48818__$1);
var G__48820 = cljs.core.chunk_rest(seq__48711_48818__$1);
var G__48821 = c__5568__auto___48819;
var G__48822 = cljs.core.count(c__5568__auto___48819);
var G__48823 = (0);
seq__48711_48808 = G__48820;
chunk__48712_48809 = G__48821;
count__48713_48810 = G__48822;
i__48714_48811 = G__48823;
continue;
} else {
var obj_48824 = cljs.core.first(seq__48711_48818__$1);
(obj_48824.visible = false);


var G__48825 = cljs.core.next(seq__48711_48818__$1);
var G__48826 = null;
var G__48827 = (0);
var G__48828 = (0);
seq__48711_48808 = G__48825;
chunk__48712_48809 = G__48826;
count__48713_48810 = G__48827;
i__48714_48811 = G__48828;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(e.first)){
var seq__48715_48829 = cljs.core.seq(cljs.core.deref(tableground.views.hover_effect_objs));
var chunk__48716_48830 = null;
var count__48717_48831 = (0);
var i__48718_48832 = (0);
while(true){
if((i__48718_48832 < count__48717_48831)){
var obj_48833 = chunk__48716_48830.cljs$core$IIndexed$_nth$arity$2(null,i__48718_48832);
(obj_48833.visible = true);


var G__48834 = seq__48715_48829;
var G__48835 = chunk__48716_48830;
var G__48836 = count__48717_48831;
var G__48837 = (i__48718_48832 + (1));
seq__48715_48829 = G__48834;
chunk__48716_48830 = G__48835;
count__48717_48831 = G__48836;
i__48718_48832 = G__48837;
continue;
} else {
var temp__5804__auto___48838 = cljs.core.seq(seq__48715_48829);
if(temp__5804__auto___48838){
var seq__48715_48839__$1 = temp__5804__auto___48838;
if(cljs.core.chunked_seq_QMARK_(seq__48715_48839__$1)){
var c__5568__auto___48840 = cljs.core.chunk_first(seq__48715_48839__$1);
var G__48841 = cljs.core.chunk_rest(seq__48715_48839__$1);
var G__48842 = c__5568__auto___48840;
var G__48843 = cljs.core.count(c__5568__auto___48840);
var G__48844 = (0);
seq__48715_48829 = G__48841;
chunk__48716_48830 = G__48842;
count__48717_48831 = G__48843;
i__48718_48832 = G__48844;
continue;
} else {
var obj_48845 = cljs.core.first(seq__48715_48839__$1);
(obj_48845.visible = true);


var G__48846 = cljs.core.next(seq__48715_48839__$1);
var G__48847 = null;
var G__48848 = (0);
var G__48849 = (0);
seq__48715_48829 = G__48846;
chunk__48716_48830 = G__48847;
count__48717_48831 = G__48848;
i__48718_48832 = G__48849;
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((bind_drag.cljs$core$IFn$_invoke$arity$0 ? bind_drag.cljs$core$IFn$_invoke$arity$0() : bind_drag.call(null))),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((bind_hover.cljs$core$IFn$_invoke$arity$0 ? bind_hover.cljs$core$IFn$_invoke$arity$0() : bind_hover.call(null))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"touch-action","touch-action",-128660292),new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),mesh_ref,new cljs.core.Keyword(null,"position","position",-2011731912),position], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.coins,face_value], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.Text3D),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"bevel-thickness","bevel-thickness",1625775916),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"bevel-size","bevel-size",-581215492),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"castShadow","castShadow",1475003551),new cljs.core.Keyword(null,"bevel-enabled","bevel-enabled",87778463)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.57,(0),(0)], null),0.1,font_loader.data,0.45,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.17,(-0.05 + (0.15 * (face_value - (1)))),0.2], null),0.02,0.08,true,true]),cljs.core.str.cljs$core$IFn$_invoke$arity$1(face_value),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshNormalMaterial","meshNormalMaterial",488108946)], null)], null)], null);
}));

(tableground.views.player_box.cljs$lang$maxFixedArity = 1);

tableground.views.popup_panel = (function tableground$views$popup_panel(msg,btns){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(101),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(200,200,200, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"margin","margin",-995903681)],["3px 4px 8px","40ch","white","60ch","0px 24px 24px 24px",new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"column","column",2078222095),"24px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14)], null)], null),msg], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),(function (){var iter__5523__auto__ = (function tableground$views$popup_panel_$_iter__48719(s__48720){
return (new cljs.core.LazySeq(null,(function (){
var s__48720__$1 = s__48720;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__48720__$1);
if(temp__5804__auto__){
var s__48720__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48720__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__48720__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__48722 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__48721 = (0);
while(true){
if((i__48721 < size__5522__auto__)){
var vec__48723 = cljs.core._nth(c__5521__auto__,i__48721);
var btn_txt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48723,(0),null);
var btn_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48723,(1),null);
cljs.core.chunk_append(b__48722,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"end","end",-268185958)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),btn_fn], null),btn_txt], null));

var G__48850 = (i__48721 + (1));
i__48721 = G__48850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48722),tableground$views$popup_panel_$_iter__48719(cljs.core.chunk_rest(s__48720__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48722),null);
}
} else {
var vec__48726 = cljs.core.first(s__48720__$2);
var btn_txt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48726,(0),null);
var btn_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48726,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"end","end",-268185958)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),btn_fn], null),btn_txt], null),tableground$views$popup_panel_$_iter__48719(cljs.core.rest(s__48720__$2)));
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
tableground.views.play_opponent_turn = (function tableground$views$play_opponent_turn(move){
var state = cljs.core.deref(tableground.views.game_state);
var opponent_boxes = new cljs.core.Keyword(null,"opponent-boxes","opponent-boxes",1038098234).cljs$core$IFn$_invoke$arity$1(state);
var opponent_plays = move;
var opponent_total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,opponent_plays));
var opponent_msg = ["Opponent plays ","[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",opponent_plays),"]"," for a total of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opponent_total)].join('');
var played = cljs.core.keys(cljs.core.deref(tableground.views.bid_boxes));
var player_rem = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player-boxes","player-boxes",-635668928).cljs$core$IFn$_invoke$arity$1(state),cljs.core.set(cljs.core.keys(cljs.core.deref(tableground.views.bid_boxes))));
var player_total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,played));
var player_msg = ["You played ","[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(cljs.core.deref(tableground.views.bid_boxes))),"]"," for a total of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_total)].join('');
var verdict = cljs.core.compare(player_total,opponent_total);
var verdict_msg = (function (){var G__48733 = verdict;
switch (G__48733) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48733)].join('')));

}
})();
var vec__48730 = (function (){var G__48734 = verdict;
switch (G__48734) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48734)].join('')));

}
})();
var player_score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48730,(0),null);
var opponent_score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48730,(1),null);
var game_result_msg = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"turn","turn",75759344)),(3)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),(function (){var G__48735 = cljs.core.compare(player_score,opponent_score);
switch (G__48735) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48735)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Game result"], null),["The final score is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_score)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opponent_score),"."].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var G__48736 = cljs.core.compare(player_score,opponent_score);
switch (G__48736) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48736)].join('')));

}
})()], null):null);
var emoji_msg = (function (){var G__48737 = verdict;
switch (G__48737) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48737)].join('')));

}
})();
var final_msg = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),emoji_msg], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Bid result"], null),player_msg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),opponent_msg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),verdict_msg], null);
var opponent_rem = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(opponent_boxes,opponent_plays);
var popup_effect = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.bid_boxes,(function (boxes){
var seq__48738_48856 = cljs.core.seq(boxes);
var chunk__48739_48857 = null;
var count__48740_48858 = (0);
var i__48741_48859 = (0);
while(true){
if((i__48741_48859 < count__48740_48858)){
var vec__48754_48860 = chunk__48739_48857.cljs$core$IIndexed$_nth$arity$2(null,i__48741_48859);
var _face_value_48861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48754_48860,(0),null);
var vec__48757_48862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48754_48860,(1),null);
var box_ref_48863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48757_48862,(0),null);
var _reset_fn_48864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48757_48862,(1),null);
(box_ref_48863.current.visible = false);

(box_ref_48863.current.position.y = (15));


var G__48865 = seq__48738_48856;
var G__48866 = chunk__48739_48857;
var G__48867 = count__48740_48858;
var G__48868 = (i__48741_48859 + (1));
seq__48738_48856 = G__48865;
chunk__48739_48857 = G__48866;
count__48740_48858 = G__48867;
i__48741_48859 = G__48868;
continue;
} else {
var temp__5804__auto___48869 = cljs.core.seq(seq__48738_48856);
if(temp__5804__auto___48869){
var seq__48738_48870__$1 = temp__5804__auto___48869;
if(cljs.core.chunked_seq_QMARK_(seq__48738_48870__$1)){
var c__5568__auto___48871 = cljs.core.chunk_first(seq__48738_48870__$1);
var G__48872 = cljs.core.chunk_rest(seq__48738_48870__$1);
var G__48873 = c__5568__auto___48871;
var G__48874 = cljs.core.count(c__5568__auto___48871);
var G__48875 = (0);
seq__48738_48856 = G__48872;
chunk__48739_48857 = G__48873;
count__48740_48858 = G__48874;
i__48741_48859 = G__48875;
continue;
} else {
var vec__48760_48876 = cljs.core.first(seq__48738_48870__$1);
var _face_value_48877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760_48876,(0),null);
var vec__48763_48878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760_48876,(1),null);
var box_ref_48879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48763_48878,(0),null);
var _reset_fn_48880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48763_48878,(1),null);
(box_ref_48879.current.visible = false);

(box_ref_48879.current.position.y = (15));


var G__48881 = cljs.core.next(seq__48738_48870__$1);
var G__48882 = null;
var G__48883 = (0);
var G__48884 = (0);
seq__48738_48856 = G__48881;
chunk__48739_48857 = G__48882;
count__48740_48858 = G__48883;
i__48741_48859 = G__48884;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.hidden_boxes,(function (p1__48729_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__48729_SHARP_,boxes);
}));

return null;
}));

cljs.core.reset_BANG_(tableground.views.bid_total,(0));

cljs.core.reset_BANG_(tableground.views.pot_value,tableground.views.roll_pot());

return cljs.core.reset_BANG_(tableground.views.game_state,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"turn","turn",75759344)),(3)))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.hidden_boxes,(function (boxes){
var seq__48766_48885 = cljs.core.seq(boxes);
var chunk__48767_48886 = null;
var count__48768_48887 = (0);
var i__48769_48888 = (0);
while(true){
if((i__48769_48888 < count__48768_48887)){
var vec__48782_48889 = chunk__48767_48886.cljs$core$IIndexed$_nth$arity$2(null,i__48769_48888);
var _face_value_48890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48782_48889,(0),null);
var vec__48785_48891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48782_48889,(1),null);
var box_ref_48892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48785_48891,(0),null);
var reset_fn_48893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48785_48891,(1),null);
(box_ref_48892.current.visible = true);

(reset_fn_48893.cljs$core$IFn$_invoke$arity$0 ? reset_fn_48893.cljs$core$IFn$_invoke$arity$0() : reset_fn_48893.call(null));

(box_ref_48892.current.position.y = -0.15);


var G__48894 = seq__48766_48885;
var G__48895 = chunk__48767_48886;
var G__48896 = count__48768_48887;
var G__48897 = (i__48769_48888 + (1));
seq__48766_48885 = G__48894;
chunk__48767_48886 = G__48895;
count__48768_48887 = G__48896;
i__48769_48888 = G__48897;
continue;
} else {
var temp__5804__auto___48898 = cljs.core.seq(seq__48766_48885);
if(temp__5804__auto___48898){
var seq__48766_48899__$1 = temp__5804__auto___48898;
if(cljs.core.chunked_seq_QMARK_(seq__48766_48899__$1)){
var c__5568__auto___48900 = cljs.core.chunk_first(seq__48766_48899__$1);
var G__48901 = cljs.core.chunk_rest(seq__48766_48899__$1);
var G__48902 = c__5568__auto___48900;
var G__48903 = cljs.core.count(c__5568__auto___48900);
var G__48904 = (0);
seq__48766_48885 = G__48901;
chunk__48767_48886 = G__48902;
count__48768_48887 = G__48903;
i__48769_48888 = G__48904;
continue;
} else {
var vec__48788_48905 = cljs.core.first(seq__48766_48899__$1);
var _face_value_48906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48788_48905,(0),null);
var vec__48791_48907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48788_48905,(1),null);
var box_ref_48908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48791_48907,(0),null);
var reset_fn_48909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48791_48907,(1),null);
(box_ref_48908.current.visible = true);

(reset_fn_48909.cljs$core$IFn$_invoke$arity$0 ? reset_fn_48909.cljs$core$IFn$_invoke$arity$0() : reset_fn_48909.call(null));

(box_ref_48908.current.position.y = -0.15);


var G__48910 = cljs.core.next(seq__48766_48899__$1);
var G__48911 = null;
var G__48912 = (0);
var G__48913 = (0);
seq__48766_48885 = G__48910;
chunk__48767_48886 = G__48911;
count__48768_48887 = G__48912;
i__48769_48888 = G__48913;
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
})()
:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"opponent-boxes","opponent-boxes",1038098234),opponent_rem),new cljs.core.Keyword(null,"player-boxes","player-boxes",-635668928),player_rem),new cljs.core.Keyword(null,"turn","turn",75759344),cljs.core.inc),new cljs.core.Keyword(null,"player-score","player-score",-564716352),player_score),new cljs.core.Keyword(null,"opponent-score","opponent-score",2136563163),opponent_score)));
});
return cljs.core.reset_BANG_(tableground.views.popup_msg,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"turn","turn",75759344)),(3)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [final_msg,new cljs.core.PersistentArrayMap(null, 1, ["See Result",(function (){
return cljs.core.reset_BANG_(tableground.views.popup_msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game_result_msg,new cljs.core.PersistentArrayMap(null, 1, ["Play Again",(function (){
popup_effect();

return cljs.core.reset_BANG_(tableground.views.popup_msg,null);
})], null)], null));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [final_msg,new cljs.core.PersistentArrayMap(null, 1, ["Continue",(function (){
popup_effect();

return cljs.core.reset_BANG_(tableground.views.popup_msg,null);
})], null)], null)));
});
tableground.views.tutorial_panel = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Basics:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Each turn the black die is rolled. The number rolled becomes the value of the pot. You then bid from your hand (by dragging coins to the highlighted play area) to try to win the pot. Once you submit your bid, your opponent will bid from their hand. If there's a higher bidder, the pot value is added to their score. Everything that has been bid is discarded. After three turns, the player with a higher score wins."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Opponent Strategy:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For the first two turns the opponent will bid randomly (uniform chance of playing any of the available moves). On the third turn, the opponent will always bid whatever is left in their hand."], null)], null);
tableground.views.move_combo = (function tableground$views$move_combo(is_done,selected,p__48795){
var vec__48796 = p__48795;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48796,(0),null);
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48796,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"min-width","min-width",1926193728),"8px",new cljs.core.Keyword(null,"margin","margin",-995903681),(2),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,selected))?(cljs.core.truth_(is_done)?"red":"yellow"):null)], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px",new cljs.core.Keyword(null,"padding","padding",1660304693),(2)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)], null);
})),move);
});
tableground.views.show_hand = (function tableground$views$show_hand(hand){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"gap","gap",80255254),(2)], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(99),new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),(1),new cljs.core.Keyword(null,"width","width",-384071477),"1.7em",new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),i], null);
})),hand);
});
tableground.views.roll_opp_move = (function tableground$views$roll_opp_move(){
var spin_counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var interval_index = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var once_thru = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var done = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var roll = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
var state = cljs.core.deref(tableground.views.game_state);
var opponent_boxes = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opponent-boxes","opponent-boxes",1038098234).cljs$core$IFn$_invoke$arity$1(state));
var numbered_opp_combos = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,clojure.math.combinatorics.subsets(opponent_boxes));
var n_combos = cljs.core.count(numbered_opp_combos);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Opponent Hand:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.show_hand,opponent_boxes], null),"Moves:",cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(tableground.views.move_combo,cljs.core.deref(done),cljs.core.deref(spin_counter))),numbered_opp_combos),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"margin","margin",-995903681),(8),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"flex-end","flex-end",297207970)], null)], null),(cljs.core.truth_(cljs.core.deref(done))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(tableground.views.popup_msg,null);

return tableground.views.play_opponent_turn(cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(numbered_opp_combos,cljs.core.deref(roll))));
})], null),"Continue"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((cljs.core.deref(roll) == null)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(state))){
cljs.core.reset_BANG_(roll,(n_combos - (1)));

cljs.core.reset_BANG_(spin_counter,(n_combos - (1)));

return cljs.core.reset_BANG_(done,true);
} else {
cljs.core.reset_BANG_(roll,cljs.core.rand_int(n_combos));

return cljs.core.reset_BANG_(interval_index,setInterval((function (){
if(cljs.core.truth_(cljs.core.deref(once_thru))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(roll),cljs.core.deref(spin_counter))){
clearInterval(cljs.core.deref(interval_index));

return cljs.core.reset_BANG_(done,true);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(spin_counter,cljs.core.inc);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(spin_counter),(n_combos - (1)))){
cljs.core.reset_BANG_(once_thru,true);

return cljs.core.reset_BANG_(spin_counter,(0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(spin_counter,cljs.core.inc);
}
}
}),(25)));
}
} else {
return null;
}
})], null),"SPIN"], null))], null)], null);
});
});
tableground.views.show_moves = (function tableground$views$show_moves(){
return cljs.core.reset_BANG_(tableground.views.popup_msg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.roll_opp_move], null)], null));
});
tableground.views.text_panel = (function tableground$views$text_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(100),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(255,255,255,30%)",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"100%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(8),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),(1),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"padding","padding",1660304693),(6)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(tableground.views.popup_msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.tutorial_panel,new cljs.core.PersistentArrayMap(null, 1, ["Continue",(function (){
return cljs.core.reset_BANG_(tableground.views.popup_msg,null);
})], null)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"?"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(8),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.Keyword(null,"href","href",-793805698),"license.txt"], null),"License"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Opponent Score: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tableground.views.game_state),new cljs.core.Keyword(null,"opponent-score","opponent-score",2136563163))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Opponent Hand: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.show_hand,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tableground.views.game_state),new cljs.core.Keyword(null,"opponent-boxes","opponent-boxes",1038098234)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Turn: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tableground.views.game_state),new cljs.core.Keyword(null,"turn","turn",75759344)),"/3"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Your Score: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tableground.views.game_state),new cljs.core.Keyword(null,"player-score","player-score",-564716352))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your Bid: ",cljs.core.deref(tableground.views.bid_total)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tableground.views.show_moves], null),"Submit Bid"], null)], null)], null);
});
tableground.views.wood_tables = (function tableground$views$wood_tables(){
var gltf = shadow.js.shim.module$$react_three$drei.useGLTF("/assets/woodtable/scene.gltf");
var alt_object = shadow.js.shim.module$react.useMemo((function (){
return gltf.scene.clone();
}));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react.Suspense,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fallback","fallback",761637929),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"object","object",1474613949),gltf.scene,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(Math.PI / (-2)),(0)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-4.15,-2.4], null),new cljs.core.Keyword(null,"scale","scale",-230427353),0.02], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"object","object",1474613949),alt_object,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,-3.65,3.1], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(Math.PI / (2)),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),0.018], null)], null)], null)], null);
});
tableground.views.panel_fn = (function tableground$views$panel_fn(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"touch-action","touch-action",-128660292),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var temp__5804__auto__ = cljs.core.deref(tableground.views.popup_msg);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__48801 = temp__5804__auto__;
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48801,(0),null);
var btns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48801,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.popup_panel,msg,btns], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.text_panel], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react.Suspense,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fallback","fallback",761637929),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Loading..."], null)], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$react_three$fiber.Canvas,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10),(8)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(60),new cljs.core.Keyword(null,"fov","fov",-12463282),(50)], null),new cljs.core.Keyword(null,"orthographic","orthographic",-2040298248),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.AdaptiveDpr)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hemisphereLight","hemisphereLight",1354905528),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),0.2,new cljs.core.Keyword(null,"color","color",1011675173),"#ffffcb",new cljs.core.Keyword(null,"ground-color","ground-color",-1832095873),"#080820"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ambientLight","ambientLight",1634320339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),0.3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointLight","pointLight",1456285858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(8),-3.5], null),new cljs.core.Keyword(null,"intensity","intensity",1142770863),0.2,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.pot_box,cljs.core.deref(tableground.views.pot_value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.wood_tables], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"RectAreaLight","RectAreaLight",-185365301),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.3,(-1)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.PI / (-2)),(0),(0)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__48799_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tableground.views.hover_effect_objs,cljs.core.conj,p1__48799_SHARP_);
}),new cljs.core.Keyword(null,"castShadow","castShadow",1475003551),false,new cljs.core.Keyword(null,"intensity","intensity",1142770863),0.8,new cljs.core.Keyword(null,"visible","visible",-1024216805),false,new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(3)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.7,-0.15,2.5], null),new cljs.core.Keyword(null,"face-value","face-value",1631838900),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,-0.15,2.5], null),new cljs.core.Keyword(null,"face-value","face-value",1631838900),(2)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.7,-0.15,2.5], null),new cljs.core.Keyword(null,"face-value","face-value",1631838900),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.7,-0.15,3.7], null),new cljs.core.Keyword(null,"face-value","face-value",1631838900),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,-0.15,3.7], null),new cljs.core.Keyword(null,"face-value","face-value",1631838900),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.7,-0.15,3.7], null),new cljs.core.Keyword(null,"face-value","face-value",1631838900),(6)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.3,(-1)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__48800_SHARP_){
return cljs.core.reset_BANG_(tableground.views.play_area,p1__48800_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"BoxGeometry","BoxGeometry",824599000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),0.01,(3)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshStandardMaterial","meshStandardMaterial",-2120289909),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen",new cljs.core.Keyword(null,"transparent","transparent",-2073609949),true,new cljs.core.Keyword(null,"opacity","opacity",397153780),0.1], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-3),(0)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.PI / (-2)),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"PlaneGeometry","PlaneGeometry",-2079437641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(30)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshPhysicalMaterial","meshPhysicalMaterial",1544836631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.ContactShadows),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.29,(0)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"scale","scale",-230427353),(20),new cljs.core.Keyword(null,"blur","blur",-453500461),1.75,new cljs.core.Keyword(null,"far","far",85807546),4.5], null)], null)], null)], null)], null);
});
tableground.views.main_panel = (function tableground$views$main_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.panel_fn], null);
});

//# sourceMappingURL=tableground.views.js.map
