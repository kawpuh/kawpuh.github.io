goog.provide('tableground.views');
tableground.views.rotate_fn = (function tableground$views$rotate_fn(mesh_ref){
var new_r = (mesh_ref.current.rotation.x + 0.005);
return (mesh_ref.current.rotation.x = new_r);
});
tableground.views.roll_pot = (function tableground$views$roll_pot(){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3","4","5","6"], null));
});
tableground.views.intersect_point = (new shadow.js.shim.module$three.Vector3());
tableground.views.hot_plane = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tableground.views.play_area = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tableground.views.box_geom = (new shadow.js.shim.module$three.BoxGeometry((1),(1),(1)));
tableground.views.bid_boxes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tableground.views.hidden_boxes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tableground.views.pot_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(tableground.views.roll_pot());
tableground.views.bid_total = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
tableground.views.popup_msg = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tableground.views.game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"turn","turn",75759344),(1),new cljs.core.Keyword(null,"player-boxes","player-boxes",-635668928),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["3",null,"4",null,"5",null,"6",null,"1",null,"2",null], null), null),new cljs.core.Keyword(null,"opponent-boxes","opponent-boxes",1038098234),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["3",null,"4",null,"5",null,"6",null,"1",null,"2",null], null), null),new cljs.core.Keyword(null,"player-score","player-score",-564716352),(0),new cljs.core.Keyword(null,"opponent-score","opponent-score",2136563163),(0)], null));
if((typeof tableground !== 'undefined') && (typeof tableground.views !== 'undefined') && (typeof tableground.views.grid_offsets !== 'undefined')){
} else {
tableground.views.grid_offsets = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.2,-0.6], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.6], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.2,-0.6], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.2,0.6], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.6], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.2,0.6], null)], null);
}
tableground.views.compute_play_area_bounds = (function tableground$views$compute_play_area_bounds(){
var bounds = cljs.core.deref(tableground.views.play_area);
var get_xz = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__7144_SHARP_){
return p1__7144_SHARP_.x;
}),(function (p1__7145_SHARP_){
return p1__7145_SHARP_.z;
}));
var geom = bounds.geometry;
geom.computeBoundingBox();

return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core._PLUS_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(get_xz(bounds.position)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_xz,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__7146_SHARP_){
return p1__7146_SHARP_.min;
}),(function (p1__7147_SHARP_){
return p1__7147_SHARP_.max;
}))(geom.boundingBox)));
});
tableground.views.play_area_intersect_QMARK_ = (function tableground$views$play_area_intersect_QMARK_(x,z){
var vec__7148 = tableground.views.compute_play_area_bounds();
var vec__7151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7148,(0),null);
var min_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7151,(0),null);
var min_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7151,(1),null);
var vec__7154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7148,(1),null);
var max_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7154,(0),null);
var max_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7154,(1),null);
return (((((min_x < x)) && ((x < max_x)))) && ((((min_z < z)) && ((z < max_z)))));
});
tableground.views.compute_play_area_center = (function tableground$views$compute_play_area_center(){
var vec__7157 = tableground.views.compute_play_area_bounds();
var vec__7160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7157,(0),null);
var min_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7160,(0),null);
var min_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7160,(1),null);
var vec__7163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7157,(1),null);
var max_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7163,(0),null);
var max_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7163,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,0.5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(min_x + max_x),(min_z + max_z)], null));
});
tableground.views.enforce_and_return_played = (function tableground$views$enforce_and_return_played(played){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__7166,p__7167){
var vec__7168 = p__7166;
var _face_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7168,(0),null);
var vec__7171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7168,(1),null);
var mesh_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7171,(0),null);
var _reset_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7171,(1),null);
var vec__7174 = p__7167;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7174,(0),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7174,(1),null);
(mesh_ref.current.position.x = x);

return (mesh_ref.current.position.z = z);
}),played,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__7177,p__7178){
var vec__7179 = p__7177;
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7179,(0),null);
var dz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7179,(1),null);
var vec__7182 = p__7178;
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7182,(0),null);
var oz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7182,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + ox),(dz + oz)], null);
}),tableground.views.grid_offsets,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tableground.views.compute_play_area_center()))));

return played;
});
tableground.views.dot_geom = (new shadow.js.shim.module$three.CylinderGeometry(0.1,0.1,0.02,(16)));
tableground.views.dot_mat = (new shadow.js.shim.module$three.MeshPhysicalMaterial(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null))));
tableground.views.pot_box_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tableground.views.dice_rotations = new cljs.core.PersistentArrayMap(null, 6, ["1",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),"2",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.57,(0),(0)], null),"3",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),1.57], null),"4",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-1.57], null),"5",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57,(0),(0)], null),"6",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null)], null);
tableground.views.pot_box = (function tableground$views$pot_box(face_text){
var mesh_ref = shadow.js.shim.module$react.useRef();
var _ = cljs.core.reset_BANG_(tableground.views.pot_box_ref,mesh_ref);
var rot = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tableground.views.dice_rotations,face_text);
var font_loader = shadow.js.shim.module$$react_three$fiber.useLoader(shadow.js.shim.module$three$addons$loaders$FontLoader.FontLoader,"/marcellus.json");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ref","ref",1289896967),mesh_ref,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.box_geom,new cljs.core.Keyword(null,"castShadow","castShadow",1475003551),true,new cljs.core.Keyword(null,"receiveShadow","receiveShadow",773566383),true,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),-3.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),rot], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,-0.25,0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,0.25,0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(0),(0)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.25,0.25], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,-0.25,-0.25], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,0.25,-0.25], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.25,-0.25], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.25,0.25], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,0.25,0.25], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-1.57], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,0.25,-0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,-0.25,-0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,0.25,-0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,-0.25,-0.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,-0.5,-0.3], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,-0.5,(0)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,-0.5,0.3], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,-0.5,-0.3], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,-0.5,(0)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,-0.5,0.3], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.14,(0),(0)], null),new cljs.core.Keyword(null,"material","material",460118677),tableground.views.dot_mat,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.dot_geom], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshPhysicalMaterial","meshPhysicalMaterial",1544836631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.2,(0),-3.8], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.57,(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"BoxGeometry","BoxGeometry",824599000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),0.1], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshPhysicalMaterial","meshPhysicalMaterial",1544836631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.Text3D),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font","font",-1506159249),font_loader.data,new cljs.core.Keyword(null,"height","height",1025178622),0.05,new cljs.core.Keyword(null,"size","size",1098693007),0.5,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57,(0),(0)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.15,-0.15,0.1], null)], null),face_text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshPhysicalMaterial","meshPhysicalMaterial",1544836631),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"emissive","emissive",-761267227),"gold"], null)], null)], null)], null)], null);
});
tableground.views.player_box = (function tableground$views$player_box(var_args){
var G__7186 = arguments.length;
switch (G__7186) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"color","color",1011675173),"orange",new cljs.core.Keyword(null,"face-text","face-text",-1856480469),"0"], null)], null);
}));

(tableground.views.player_box.cljs$core$IFn$_invoke$arity$1 = (function (p__7187){
var map__7188 = p__7187;
var map__7188__$1 = cljs.core.__destructure_map(map__7188);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7188__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7188__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var face_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7188__$1,new cljs.core.Keyword(null,"face-text","face-text",-1856480469));
var mesh_ref = shadow.js.shim.module$react.useRef();
var line_ref = shadow.js.shim.module$react.useRef();
var font_loader = shadow.js.shim.module$$react_three$fiber.useLoader(shadow.js.shim.module$three$addons$loaders$FontLoader.FontLoader,"/marcellus.json");
var set_line_vis = (function (on_QMARK_){
return (line_ref.current.visible = on_QMARK_);
});
var set_xz = (function (p__7189){
var vec__7190 = p__7189;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7190,(0),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7190,(1),null);
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
set_line_vis(true);

set_y((cljs.core.second(position) + 0.3));
} else {
}

e.event.ray.intersectPlane(cljs.core.deref(tableground.views.hot_plane),tableground.views.intersect_point);

if(cljs.core.truth_(e.last)){
if((!(tableground.views.play_area_intersect_QMARK_(tableground.views.intersect_point.x,tableground.views.intersect_point.z)))){
set_xz(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(position,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(position,(2))], null));

cljs.core.reset_BANG_(tableground.views.bid_total,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.bid_boxes,(function (played){
return tableground.views.enforce_and_return_played(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(played,face_text));
}))))));
} else {
cljs.core.reset_BANG_(tableground.views.bid_total,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.bid_boxes,(function (played){
return tableground.views.enforce_and_return_played(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(played,face_text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mesh_ref,(function (){
return set_xz(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(position,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(position,(2))], null));
})], null)));
}))))));
}

set_hover(false);

set_line_vis(false);

set_y(cljs.core.second(position));
} else {
if(cljs.core.truth_(e.active)){
set_xz(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.intersect_point.x,tableground.views.intersect_point.z], null));
} else {
}
}

return e.event.stopPropagation();
}));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((bind_drag.cljs$core$IFn$_invoke$arity$0 ? bind_drag.cljs$core$IFn$_invoke$arity$0() : bind_drag.call(null))),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((bind_hover.cljs$core$IFn$_invoke$arity$0 ? bind_hover.cljs$core$IFn$_invoke$arity$0() : bind_hover.call(null))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),mesh_ref,new cljs.core.Keyword(null,"geometry","geometry",-405034994),tableground.views.box_geom,new cljs.core.Keyword(null,"castShadow","castShadow",1475003551),true,new cljs.core.Keyword(null,"receiveShadow","receiveShadow",773566383),true,new cljs.core.Keyword(null,"position","position",-2011731912),position], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.Line),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),line_ref,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"line-width","line-width",-906934988),(3),new cljs.core.Keyword(null,"visible","visible",-1024216805),true], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.Text3D),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font","font",-1506159249),font_loader.data,new cljs.core.Keyword(null,"height","height",1025178622),0.15,new cljs.core.Keyword(null,"size","size",1098693007),0.5,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.15,0.4,0.2], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.57,(0),(0)], null)], null),face_text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshPhysicalMaterial","meshPhysicalMaterial",1544836631),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"emissive","emissive",-761267227),"gold"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshStandardMaterial","meshStandardMaterial",-2120289909),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)], null);
}));

(tableground.views.player_box.cljs$lang$maxFixedArity = 1);

tableground.views.plane_from_geom = (function tableground$views$plane_from_geom(geom){
var plane = (new shadow.js.shim.module$three.Plane());
var norm = (new shadow.js.shim.module$three.Vector3());
var pt = (new shadow.js.shim.module$three.Vector3());
norm.set((0),(0),(1)).applyQuaternion(geom.quaternion);

pt.copy(geom.position);

plane.setFromNormalAndCoplanarPoint(norm,pt);

return plane;
});
tableground.views.popup_panel = (function tableground$views$popup_panel(msg,btns){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(101),new cljs.core.Keyword(null,"height","height",1025178622),"98%",new cljs.core.Keyword(null,"width","width",-384071477),"98%",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(200,200,200, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"margin","margin",-995903681),"16px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 24px 24px 24px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"3px 4px 8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px"], null)], null),msg], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),(function (){var iter__5523__auto__ = (function tableground$views$popup_panel_$_iter__7193(s__7194){
return (new cljs.core.LazySeq(null,(function (){
var s__7194__$1 = s__7194;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7194__$1);
if(temp__5804__auto__){
var s__7194__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7194__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__7194__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__7196 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__7195 = (0);
while(true){
if((i__7195 < size__5522__auto__)){
var vec__7197 = cljs.core._nth(c__5521__auto__,i__7195);
var btn_txt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7197,(0),null);
var btn_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7197,(1),null);
cljs.core.chunk_append(b__7196,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"end","end",-268185958)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),btn_fn], null),btn_txt], null));

var G__7274 = (i__7195 + (1));
i__7195 = G__7274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7196),tableground$views$popup_panel_$_iter__7193(cljs.core.chunk_rest(s__7194__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7196),null);
}
} else {
var vec__7200 = cljs.core.first(s__7194__$2);
var btn_txt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7200,(0),null);
var btn_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7200,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"end","end",-268185958)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),btn_fn], null),btn_txt], null),tableground$views$popup_panel_$_iter__7193(cljs.core.rest(s__7194__$2)));
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
var verdict_msg = (function (){var G__7207 = verdict;
switch (G__7207) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7207)].join('')));

}
})();
var vec__7204 = (function (){var G__7208 = verdict;
switch (G__7208) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7208)].join('')));

}
})();
var player_score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7204,(0),null);
var opponent_score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7204,(1),null);
var game_result_msg = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"turn","turn",75759344)),(3)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Game result"], null),["The final score is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_score)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opponent_score),"."].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var G__7209 = cljs.core.compare(player_score,opponent_score);
switch (G__7209) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7209)].join('')));

}
})()], null):null);
var emoji_msg = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"turn","turn",75759344)),(3)))?(function (){var G__7210 = cljs.core.compare(player_score,opponent_score);
switch (G__7210) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7210)].join('')));

}
})():(function (){var G__7211 = verdict;
switch (G__7211) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7211)].join('')));

}
})());
var final_msg = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),emoji_msg], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Bid result"], null),player_msg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),opponent_msg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),verdict_msg,game_result_msg], null);
var opponent_rem = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(opponent_boxes,opponent_plays);
cljs.core.reset_BANG_(tableground.views.popup_msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [final_msg,new cljs.core.PersistentArrayMap(null, 1, ["Continue.",(function (){
return cljs.core.reset_BANG_(tableground.views.popup_msg,null);
})], null)], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.bid_boxes,(function (boxes){
var seq__7212_7280 = cljs.core.seq(boxes);
var chunk__7213_7281 = null;
var count__7214_7282 = (0);
var i__7215_7283 = (0);
while(true){
if((i__7215_7283 < count__7214_7282)){
var vec__7228_7284 = chunk__7213_7281.cljs$core$IIndexed$_nth$arity$2(null,i__7215_7283);
var _face_value_7285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7228_7284,(0),null);
var vec__7231_7286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7228_7284,(1),null);
var box_ref_7287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7231_7286,(0),null);
var _reset_fn_7288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7231_7286,(1),null);
(box_ref_7287.current.visible = false);

(box_ref_7287.current.position.y = (15));


var G__7289 = seq__7212_7280;
var G__7290 = chunk__7213_7281;
var G__7291 = count__7214_7282;
var G__7292 = (i__7215_7283 + (1));
seq__7212_7280 = G__7289;
chunk__7213_7281 = G__7290;
count__7214_7282 = G__7291;
i__7215_7283 = G__7292;
continue;
} else {
var temp__5804__auto___7293 = cljs.core.seq(seq__7212_7280);
if(temp__5804__auto___7293){
var seq__7212_7294__$1 = temp__5804__auto___7293;
if(cljs.core.chunked_seq_QMARK_(seq__7212_7294__$1)){
var c__5568__auto___7295 = cljs.core.chunk_first(seq__7212_7294__$1);
var G__7296 = cljs.core.chunk_rest(seq__7212_7294__$1);
var G__7297 = c__5568__auto___7295;
var G__7298 = cljs.core.count(c__5568__auto___7295);
var G__7299 = (0);
seq__7212_7280 = G__7296;
chunk__7213_7281 = G__7297;
count__7214_7282 = G__7298;
i__7215_7283 = G__7299;
continue;
} else {
var vec__7234_7300 = cljs.core.first(seq__7212_7294__$1);
var _face_value_7301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7234_7300,(0),null);
var vec__7237_7302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7234_7300,(1),null);
var box_ref_7303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7237_7302,(0),null);
var _reset_fn_7304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7237_7302,(1),null);
(box_ref_7303.current.visible = false);

(box_ref_7303.current.position.y = (15));


var G__7305 = cljs.core.next(seq__7212_7294__$1);
var G__7306 = null;
var G__7307 = (0);
var G__7308 = (0);
seq__7212_7280 = G__7305;
chunk__7213_7281 = G__7306;
count__7214_7282 = G__7307;
i__7215_7283 = G__7308;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.hidden_boxes,(function (p1__7203_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__7203_SHARP_,boxes);
}));

return null;
}));

cljs.core.reset_BANG_(tableground.views.bid_total,(0));

cljs.core.reset_BANG_(tableground.views.pot_value,tableground.views.roll_pot());

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"turn","turn",75759344)),(3))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tableground.views.hidden_boxes,(function (boxes){
var seq__7240_7309 = cljs.core.seq(boxes);
var chunk__7241_7310 = null;
var count__7242_7311 = (0);
var i__7243_7312 = (0);
while(true){
if((i__7243_7312 < count__7242_7311)){
var vec__7256_7313 = chunk__7241_7310.cljs$core$IIndexed$_nth$arity$2(null,i__7243_7312);
var _face_value_7314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7256_7313,(0),null);
var vec__7259_7315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7256_7313,(1),null);
var box_ref_7316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7259_7315,(0),null);
var reset_fn_7317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7259_7315,(1),null);
(box_ref_7316.current.visible = true);

(reset_fn_7317.cljs$core$IFn$_invoke$arity$0 ? reset_fn_7317.cljs$core$IFn$_invoke$arity$0() : reset_fn_7317.call(null));

(box_ref_7316.current.position.y = 0.2);


var G__7318 = seq__7240_7309;
var G__7319 = chunk__7241_7310;
var G__7320 = count__7242_7311;
var G__7321 = (i__7243_7312 + (1));
seq__7240_7309 = G__7318;
chunk__7241_7310 = G__7319;
count__7242_7311 = G__7320;
i__7243_7312 = G__7321;
continue;
} else {
var temp__5804__auto___7322 = cljs.core.seq(seq__7240_7309);
if(temp__5804__auto___7322){
var seq__7240_7323__$1 = temp__5804__auto___7322;
if(cljs.core.chunked_seq_QMARK_(seq__7240_7323__$1)){
var c__5568__auto___7324 = cljs.core.chunk_first(seq__7240_7323__$1);
var G__7325 = cljs.core.chunk_rest(seq__7240_7323__$1);
var G__7326 = c__5568__auto___7324;
var G__7327 = cljs.core.count(c__5568__auto___7324);
var G__7328 = (0);
seq__7240_7309 = G__7325;
chunk__7241_7310 = G__7326;
count__7242_7311 = G__7327;
i__7243_7312 = G__7328;
continue;
} else {
var vec__7262_7329 = cljs.core.first(seq__7240_7323__$1);
var _face_value_7330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7262_7329,(0),null);
var vec__7265_7331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7262_7329,(1),null);
var box_ref_7332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7265_7331,(0),null);
var reset_fn_7333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7265_7331,(1),null);
(box_ref_7332.current.visible = true);

(reset_fn_7333.cljs$core$IFn$_invoke$arity$0 ? reset_fn_7333.cljs$core$IFn$_invoke$arity$0() : reset_fn_7333.call(null));

(box_ref_7332.current.position.y = 0.2);


var G__7334 = cljs.core.next(seq__7240_7323__$1);
var G__7335 = null;
var G__7336 = (0);
var G__7337 = (0);
seq__7240_7309 = G__7334;
chunk__7241_7310 = G__7335;
count__7242_7311 = G__7336;
i__7243_7312 = G__7337;
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
tableground.views.tutorial_panel = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Basics:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Each turn a die is rolled. The number rolled becomes the value of the pot. You then bid from your hand to try to win the pot. Once you submit your bid, your opponent will bid from their hand. If there's a higher bidder, the pot value is added to their score. Everything that has been bid is discarded. After three turns, the player with a higher score wins."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Opponent Strategy:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For the first two turns the opponent will bid randomly (uniform chance of playing any of the available moves). On the third turn, the opponent will always bid whatever is left in their hand."], null)], null);
tableground.views.text_panel = (function tableground$views$text_panel(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(100),new cljs.core.Keyword(null,"left","left",-399115937),(8),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"100%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(8),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),(1),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"padding","padding",1660304693),(6)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(tableground.views.popup_msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.tutorial_panel,new cljs.core.PersistentArrayMap(null, 1, ["Continue.",(function (){
return cljs.core.reset_BANG_(tableground.views.popup_msg,null);
})], null)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"?"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Turn: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tableground.views.game_state),new cljs.core.Keyword(null,"turn","turn",75759344)),"/3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Opponent Score: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tableground.views.game_state),new cljs.core.Keyword(null,"opponent-score","opponent-score",2136563163))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Opponent Hand: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tableground.views.game_state),new cljs.core.Keyword(null,"opponent-boxes","opponent-boxes",1038098234))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Your Score: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tableground.views.game_state),new cljs.core.Keyword(null,"player-score","player-score",-564716352))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your Bid: ",cljs.core.deref(tableground.views.bid_total)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tableground.views.submit_bid], null),"Submit Bid"], null)], null);
});
tableground.views.panel_fn = (function tableground$views$panel_fn(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"height","height",1025178622),"98%",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(16)], null)], null),(function (){var temp__5804__auto__ = cljs.core.deref(tableground.views.popup_msg);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__7270 = temp__5804__auto__;
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7270,(0),null);
var btns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7270,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.popup_panel,msg,btns], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.text_panel], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react.Suspense,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fallback","fallback",761637929),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"loading..."], null)], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1)], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$react_three$fiber.Canvas,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10),(5)], null),new cljs.core.Keyword(null,"fov","fov",-12463282),(50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hemisphereLight","hemisphereLight",1354905528),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),0.2,new cljs.core.Keyword(null,"color","color",1011675173),"#ffffcb",new cljs.core.Keyword(null,"ground-color","ground-color",-1832095873),"#080820"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.Sky),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"distance","distance",-1671893894),(450000),new cljs.core.Keyword(null,"sunPosition","sunPosition",2057488813),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.Keyword(null,"inclination","inclination",-214950214),(0),new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),0.25], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"directionalLight","directionalLight",1856345040),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(-10)], null),new cljs.core.Keyword(null,"intensity","intensity",1142770863),0.2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"SpotLight","SpotLight",-2039451784),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),5.2,-4.5], null),new cljs.core.Keyword(null,"intensity","intensity",1142770863),0.2,new cljs.core.Keyword(null,"target","target",253001721),tableground.views.pot_box_ref.current,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.pot_box,cljs.core.deref(tableground.views.pot_value)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.2,0.2,2.5], null),new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"face-text","face-text",-1856480469),"1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.2,2.5], null),new cljs.core.Keyword(null,"color","color",1011675173),"orange",new cljs.core.Keyword(null,"face-text","face-text",-1856480469),"2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2.2,0.2,2.5], null),new cljs.core.Keyword(null,"color","color",1011675173),"yellow",new cljs.core.Keyword(null,"face-text","face-text",-1856480469),"3"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.2,0.2,3.7], null),new cljs.core.Keyword(null,"color","color",1011675173),"green",new cljs.core.Keyword(null,"face-text","face-text",-1856480469),"4"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.2,3.7], null),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"face-text","face-text",-1856480469),"5"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.player_box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2.2,0.2,3.7], null),new cljs.core.Keyword(null,"color","color",1011675173),"violet",new cljs.core.Keyword(null,"face-text","face-text",-1856480469),"6"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),-0.3,(4)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.57,(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"BoxGeometry","BoxGeometry",824599000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5),0.01], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshPhysicalMaterial","meshPhysicalMaterial",1544836631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f0f0f0"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.3,(-1)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__7268_SHARP_){
return cljs.core.reset_BANG_(tableground.views.play_area,p1__7268_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"BoxGeometry","BoxGeometry",824599000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),0.01,(3)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meshPhysicalMaterial","meshPhysicalMaterial",1544836631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.3,(-3)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.57,(0),(0)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__7269_SHARP_){
return cljs.core.reset_BANG_(tableground.views.hot_plane,(cljs.core.truth_(p1__7269_SHARP_)?tableground.views.plane_from_geom(p1__7269_SHARP_):null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.ContactShadows),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.29,(0)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"scale","scale",-230427353),(20),new cljs.core.Keyword(null,"blur","blur",-453500461),1.75,new cljs.core.Keyword(null,"far","far",85807546),4.5], null)], null)], null)], null)], null);
});
tableground.views.main_panel = (function tableground$views$main_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tableground.views.panel_fn], null);
});

//# sourceMappingURL=tableground.views.js.map
