goog.provide('tableground.core');
tableground.core.mount_root = (function tableground$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tableground.views.main_panel], null),root_el);
});
tableground.core.init = (function tableground$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tableground.events","initialize-db","tableground.events/initialize-db",-1268042262)], null));

return tableground.core.mount_root();
});

//# sourceMappingURL=tableground.core.js.map
