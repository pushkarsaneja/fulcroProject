goog.provide('app.cell');

var options__34775__auto___55395 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$cell$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cell","id","cell/id",-1385611022),new cljs.core.Keyword("cell","status","cell/status",-2087086187)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$cell$ident_STAR_(this$,p__55390){
var map__55391 = p__55390;
var map__55391__$1 = cljs.core.__destructure_map(map__55391);
var props = map__55391__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55391__$1,new cljs.core.Keyword("cell","id","cell/id",-1385611022));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55391__$1,new cljs.core.Keyword("cell","status","cell/status",-2087086187));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cell","id","cell/id",-1385611022),new cljs.core.Keyword("cell","id","cell/id",-1385611022).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$cell$build_raw_initial_state_STAR_(p__55392){
var map__55393 = p__55392;
var map__55393__$1 = cljs.core.__destructure_map(map__55393);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55393__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55393__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cell","id","cell/id",-1385611022),id,new cljs.core.Keyword("cell","status","cell/status",-2087086187),status], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$cell$render_Cell(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__55394 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__55394__$1 = cljs.core.__destructure_map(map__55394);
var props = map__55394__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55394__$1,new cljs.core.Keyword("cell","id","cell/id",-1385611022));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55394__$1,new cljs.core.Keyword("cell","status","cell/status",-2087086187));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0));

return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [status], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.cell !== 'undefined') && (typeof app.cell.Cell !== 'undefined')){
} else {
/**
 * @constructor
 */
app.cell.Cell = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__34775__auto___55395,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.cell.Cell,new cljs.core.Keyword("app.cell","Cell","app.cell/Cell",1108343494),options__34775__auto___55395);
app.cell.ui_cell = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.cell.Cell);

//# sourceMappingURL=app.cell.js.map
