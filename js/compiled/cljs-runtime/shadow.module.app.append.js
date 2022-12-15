
shadow.cljs.devtools.client.env.module_loaded('app');

try { tableground.core.init(); } catch (e) { console.error("An error occurred when calling (tableground.core/init)"); throw(e); }