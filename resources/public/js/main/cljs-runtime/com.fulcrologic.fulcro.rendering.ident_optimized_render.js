goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__5041__auto__ = c;
if(cljs.core.truth_(and__5041__auto__)){
return ident;
} else {
return and__5041__auto__;
}
})())){
var map__46034 = app__$1;
var map__46034__$1 = cljs.core.__destructure_map(map__46034);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46034__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__5043__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__46035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__46036 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__46035,G__46036) : com.fulcrologic.fulcro.components.computed.call(null,G__46035,G__46036));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,1292854812,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__46037 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__46037) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__46037));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,388428007,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__46038 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__46039 = null;
var count__46040 = (0);
var i__46041 = (0);
while(true){
if((i__46041 < count__46040)){
var c = chunk__46039.cljs$core$IIndexed$_nth$arity$2(null,i__46041);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__46151 = seq__46038;
var G__46152 = chunk__46039;
var G__46153 = count__46040;
var G__46154 = (i__46041 + (1));
seq__46038 = G__46151;
chunk__46039 = G__46152;
count__46040 = G__46153;
i__46041 = G__46154;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46038);
if(temp__5753__auto__){
var seq__46038__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46038__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46038__$1);
var G__46155 = cljs.core.chunk_rest(seq__46038__$1);
var G__46156 = c__5565__auto__;
var G__46157 = cljs.core.count(c__5565__auto__);
var G__46158 = (0);
seq__46038 = G__46155;
chunk__46039 = G__46156;
count__46040 = G__46157;
i__46041 = G__46158;
continue;
} else {
var c = cljs.core.first(seq__46038__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__46159 = cljs.core.next(seq__46038__$1);
var G__46160 = null;
var G__46161 = (0);
var G__46162 = (0);
seq__46038 = G__46159;
chunk__46039 = G__46160;
count__46040 = G__46161;
i__46041 = G__46162;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__46047 = app__$1;
var map__46047__$1 = cljs.core.__destructure_map(map__46047);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__46048 = cljs.core.deref(runtime_atom);
var map__46048__$1 = cljs.core.__destructure_map(map__46048);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46048__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__46049 = indexes;
var map__46049__$1 = cljs.core.__destructure_map(map__46049);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46049__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46049__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46049__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__5043__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__46050 = cljs.core.seq(classes);
var chunk__46051 = null;
var count__46052 = (0);
var i__46053 = (0);
while(true){
if((i__46053 < count__46052)){
var class$ = chunk__46051.cljs$core$IIndexed$_nth$arity$2(null,i__46053);
var seq__46071_46163 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__46073_46164 = null;
var count__46074_46165 = (0);
var i__46075_46166 = (0);
while(true){
if((i__46075_46166 < count__46074_46165)){
var component_46169 = chunk__46073_46164.cljs$core$IIndexed$_nth$arity$2(null,i__46075_46166);
var component_ident_46170 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_46169) : com.fulcrologic.fulcro.components.get_ident.call(null,component_46169));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_46170,component_46169);


var G__46171 = seq__46071_46163;
var G__46172 = chunk__46073_46164;
var G__46173 = count__46074_46165;
var G__46174 = (i__46075_46166 + (1));
seq__46071_46163 = G__46171;
chunk__46073_46164 = G__46172;
count__46074_46165 = G__46173;
i__46075_46166 = G__46174;
continue;
} else {
var temp__5753__auto___46175 = cljs.core.seq(seq__46071_46163);
if(temp__5753__auto___46175){
var seq__46071_46176__$1 = temp__5753__auto___46175;
if(cljs.core.chunked_seq_QMARK_(seq__46071_46176__$1)){
var c__5565__auto___46177 = cljs.core.chunk_first(seq__46071_46176__$1);
var G__46178 = cljs.core.chunk_rest(seq__46071_46176__$1);
var G__46179 = c__5565__auto___46177;
var G__46180 = cljs.core.count(c__5565__auto___46177);
var G__46181 = (0);
seq__46071_46163 = G__46178;
chunk__46073_46164 = G__46179;
count__46074_46165 = G__46180;
i__46075_46166 = G__46181;
continue;
} else {
var component_46182 = cljs.core.first(seq__46071_46176__$1);
var component_ident_46183 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_46182) : com.fulcrologic.fulcro.components.get_ident.call(null,component_46182));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_46183,component_46182);


var G__46184 = cljs.core.next(seq__46071_46176__$1);
var G__46185 = null;
var G__46186 = (0);
var G__46187 = (0);
seq__46071_46163 = G__46184;
chunk__46073_46164 = G__46185;
count__46074_46165 = G__46186;
i__46075_46166 = G__46187;
continue;
}
} else {
}
}
break;
}


var G__46188 = seq__46050;
var G__46189 = chunk__46051;
var G__46190 = count__46052;
var G__46191 = (i__46053 + (1));
seq__46050 = G__46188;
chunk__46051 = G__46189;
count__46052 = G__46190;
i__46053 = G__46191;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46050);
if(temp__5753__auto__){
var seq__46050__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46050__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46050__$1);
var G__46192 = cljs.core.chunk_rest(seq__46050__$1);
var G__46193 = c__5565__auto__;
var G__46194 = cljs.core.count(c__5565__auto__);
var G__46195 = (0);
seq__46050 = G__46192;
chunk__46051 = G__46193;
count__46052 = G__46194;
i__46053 = G__46195;
continue;
} else {
var class$ = cljs.core.first(seq__46050__$1);
var seq__46082_46196 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__46084_46197 = null;
var count__46085_46198 = (0);
var i__46086_46199 = (0);
while(true){
if((i__46086_46199 < count__46085_46198)){
var component_46200 = chunk__46084_46197.cljs$core$IIndexed$_nth$arity$2(null,i__46086_46199);
var component_ident_46201 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_46200) : com.fulcrologic.fulcro.components.get_ident.call(null,component_46200));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_46201,component_46200);


var G__46202 = seq__46082_46196;
var G__46203 = chunk__46084_46197;
var G__46204 = count__46085_46198;
var G__46205 = (i__46086_46199 + (1));
seq__46082_46196 = G__46202;
chunk__46084_46197 = G__46203;
count__46085_46198 = G__46204;
i__46086_46199 = G__46205;
continue;
} else {
var temp__5753__auto___46206__$1 = cljs.core.seq(seq__46082_46196);
if(temp__5753__auto___46206__$1){
var seq__46082_46207__$1 = temp__5753__auto___46206__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46082_46207__$1)){
var c__5565__auto___46208 = cljs.core.chunk_first(seq__46082_46207__$1);
var G__46210 = cljs.core.chunk_rest(seq__46082_46207__$1);
var G__46211 = c__5565__auto___46208;
var G__46212 = cljs.core.count(c__5565__auto___46208);
var G__46213 = (0);
seq__46082_46196 = G__46210;
chunk__46084_46197 = G__46211;
count__46085_46198 = G__46212;
i__46086_46199 = G__46213;
continue;
} else {
var component_46214 = cljs.core.first(seq__46082_46207__$1);
var component_ident_46215 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_46214) : com.fulcrologic.fulcro.components.get_ident.call(null,component_46214));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_46215,component_46214);


var G__46216 = cljs.core.next(seq__46082_46207__$1);
var G__46217 = null;
var G__46218 = (0);
var G__46219 = (0);
seq__46082_46196 = G__46216;
chunk__46084_46197 = G__46217;
count__46085_46198 = G__46218;
i__46086_46199 = G__46219;
continue;
}
} else {
}
}
break;
}


var G__46221 = cljs.core.next(seq__46050__$1);
var G__46222 = null;
var G__46223 = (0);
var G__46224 = (0);
seq__46050 = G__46221;
chunk__46051 = G__46222;
count__46052 = G__46223;
i__46053 = G__46224;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__46095 = app__$1;
var map__46095__$1 = cljs.core.__destructure_map(map__46095);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46095__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__46096 = cljs.core.deref(runtime_atom);
var map__46096__$1 = cljs.core.__destructure_map(map__46096);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46096__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__46097 = indexes;
var map__46097__$1 = cljs.core.__destructure_map(map__46097);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46097__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46097__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46093_SHARP_,p2__46094_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__46093_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__46094_SHARP_) : class__GT_components.call(null,p2__46094_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__46101 = app__$1;
var map__46101__$1 = cljs.core.__destructure_map(map__46101);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46101__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46101__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__46102 = cljs.core.deref(runtime_atom);
var map__46102__$1 = cljs.core.__destructure_map(map__46102);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46102__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46102__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46102__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46102__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__46103 = indexes;
var map__46103__$1 = cljs.core.__destructure_map(map__46103);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46103__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46103__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46103__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46103__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__46104 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__46104__$1 = cljs.core.__destructure_map(map__46104);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46104__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46104__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__46107_46230 = cljs.core.seq(limited_to_render);
var chunk__46109_46231 = null;
var count__46110_46232 = (0);
var i__46111_46233 = (0);
while(true){
if((i__46111_46233 < count__46110_46232)){
var c_46234 = chunk__46109_46231.cljs$core$IIndexed$_nth$arity$2(null,i__46111_46233);
var ident_46235 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_46234) : com.fulcrologic.fulcro.components.get_ident.call(null,c_46234));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_46235,c_46234);


var G__46236 = seq__46107_46230;
var G__46237 = chunk__46109_46231;
var G__46238 = count__46110_46232;
var G__46239 = (i__46111_46233 + (1));
seq__46107_46230 = G__46236;
chunk__46109_46231 = G__46237;
count__46110_46232 = G__46238;
i__46111_46233 = G__46239;
continue;
} else {
var temp__5753__auto___46240 = cljs.core.seq(seq__46107_46230);
if(temp__5753__auto___46240){
var seq__46107_46241__$1 = temp__5753__auto___46240;
if(cljs.core.chunked_seq_QMARK_(seq__46107_46241__$1)){
var c__5565__auto___46242 = cljs.core.chunk_first(seq__46107_46241__$1);
var G__46243 = cljs.core.chunk_rest(seq__46107_46241__$1);
var G__46244 = c__5565__auto___46242;
var G__46245 = cljs.core.count(c__5565__auto___46242);
var G__46246 = (0);
seq__46107_46230 = G__46243;
chunk__46109_46231 = G__46244;
count__46110_46232 = G__46245;
i__46111_46233 = G__46246;
continue;
} else {
var c_46247 = cljs.core.first(seq__46107_46241__$1);
var ident_46248 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_46247) : com.fulcrologic.fulcro.components.get_ident.call(null,c_46247));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_46248,c_46247);


var G__46249 = cljs.core.next(seq__46107_46241__$1);
var G__46250 = null;
var G__46251 = (0);
var G__46252 = (0);
seq__46107_46230 = G__46249;
chunk__46109_46231 = G__46250;
count__46110_46232 = G__46251;
i__46111_46233 = G__46252;
continue;
}
} else {
}
}
break;
}

var seq__46116 = cljs.core.seq(limited_idents);
var chunk__46117 = null;
var count__46118 = (0);
var i__46119 = (0);
while(true){
if((i__46119 < count__46118)){
var i = chunk__46117.cljs$core$IIndexed$_nth$arity$2(null,i__46119);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__46253 = seq__46116;
var G__46254 = chunk__46117;
var G__46255 = count__46118;
var G__46256 = (i__46119 + (1));
seq__46116 = G__46253;
chunk__46117 = G__46254;
count__46118 = G__46255;
i__46119 = G__46256;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46116);
if(temp__5753__auto__){
var seq__46116__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46116__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46116__$1);
var G__46257 = cljs.core.chunk_rest(seq__46116__$1);
var G__46258 = c__5565__auto__;
var G__46259 = cljs.core.count(c__5565__auto__);
var G__46260 = (0);
seq__46116 = G__46257;
chunk__46117 = G__46258;
count__46118 = G__46259;
i__46119 = G__46260;
continue;
} else {
var i = cljs.core.first(seq__46116__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__46262 = cljs.core.next(seq__46116__$1);
var G__46263 = null;
var G__46264 = (0);
var G__46265 = (0);
seq__46116 = G__46262;
chunk__46117 = G__46263;
count__46118 = G__46264;
i__46119 = G__46265;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__5043__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__46122 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__46122__$1 = cljs.core.__destructure_map(map__46122);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46122__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46122__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__46124_46271 = cljs.core.seq(all_idents);
var chunk__46125_46272 = null;
var count__46126_46273 = (0);
var i__46127_46274 = (0);
while(true){
if((i__46127_46274 < count__46126_46273)){
var i_46275 = chunk__46125_46272.cljs$core$IIndexed$_nth$arity$2(null,i__46127_46274);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_46275);


var G__46276 = seq__46124_46271;
var G__46277 = chunk__46125_46272;
var G__46278 = count__46126_46273;
var G__46279 = (i__46127_46274 + (1));
seq__46124_46271 = G__46276;
chunk__46125_46272 = G__46277;
count__46126_46273 = G__46278;
i__46127_46274 = G__46279;
continue;
} else {
var temp__5753__auto___46280 = cljs.core.seq(seq__46124_46271);
if(temp__5753__auto___46280){
var seq__46124_46281__$1 = temp__5753__auto___46280;
if(cljs.core.chunked_seq_QMARK_(seq__46124_46281__$1)){
var c__5565__auto___46282 = cljs.core.chunk_first(seq__46124_46281__$1);
var G__46283 = cljs.core.chunk_rest(seq__46124_46281__$1);
var G__46284 = c__5565__auto___46282;
var G__46285 = cljs.core.count(c__5565__auto___46282);
var G__46286 = (0);
seq__46124_46271 = G__46283;
chunk__46125_46272 = G__46284;
count__46126_46273 = G__46285;
i__46127_46274 = G__46286;
continue;
} else {
var i_46287 = cljs.core.first(seq__46124_46281__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_46287);


var G__46288 = cljs.core.next(seq__46124_46281__$1);
var G__46289 = null;
var G__46290 = (0);
var G__46291 = (0);
seq__46124_46271 = G__46288;
chunk__46125_46272 = G__46289;
count__46126_46273 = G__46290;
i__46127_46274 = G__46291;
continue;
}
} else {
}
}
break;
}

var seq__46132 = cljs.core.seq(extra_to_force);
var chunk__46133 = null;
var count__46134 = (0);
var i__46135 = (0);
while(true){
if((i__46135 < count__46134)){
var c = chunk__46133.cljs$core$IIndexed$_nth$arity$2(null,i__46135);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__46292 = seq__46132;
var G__46293 = chunk__46133;
var G__46294 = count__46134;
var G__46295 = (i__46135 + (1));
seq__46132 = G__46292;
chunk__46133 = G__46293;
count__46134 = G__46294;
i__46135 = G__46295;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46132);
if(temp__5753__auto__){
var seq__46132__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46132__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46132__$1);
var G__46296 = cljs.core.chunk_rest(seq__46132__$1);
var G__46297 = c__5565__auto__;
var G__46298 = cljs.core.count(c__5565__auto__);
var G__46299 = (0);
seq__46132 = G__46296;
chunk__46133 = G__46297;
count__46134 = G__46298;
i__46135 = G__46299;
continue;
} else {
var c = cljs.core.first(seq__46132__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__46300 = cljs.core.next(seq__46132__$1);
var G__46301 = null;
var G__46302 = (0);
var G__46303 = (0);
seq__46132 = G__46300;
chunk__46133 = G__46301;
count__46134 = G__46302;
i__46135 = G__46303;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__46143 = arguments.length;
switch (G__46143) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__46144){
var map__46145 = p__46144;
var map__46145__$1 = cljs.core.__destructure_map(map__46145);
var options = map__46145__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46145__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46145__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5043__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e46146){var e = e46146;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-258637753,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
