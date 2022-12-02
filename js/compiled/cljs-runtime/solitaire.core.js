goog.provide('solitaire.core');
solitaire.core.mount_root = (function solitaire$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [solitaire.views.main_panel], null),root_el);
});
solitaire.core.init = (function solitaire$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("solitaire.events","initialize-db","solitaire.events/initialize-db",1420758991)], null));

return solitaire.core.mount_root();
});

//# sourceMappingURL=solitaire.core.js.map
