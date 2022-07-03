goog.provide('app.row');

var options__34775__auto___44113 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$row$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("row","id","row/id",-1388416934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("row","cells","row/cells",-985279996),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.cell.Cell)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$row$ident_STAR_(this$,p__44090,_){
var map__44091 = p__44090;
var map__44091__$1 = cljs.core.__destructure_map(map__44091);
var props = map__44091__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44091__$1,new cljs.core.Keyword("row","id","row/id",-1388416934));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44091__$1,new cljs.core.Keyword("row","cells","row/cells",-985279996));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("row","id","row/id",-1388416934),new cljs.core.Keyword("row","id","row/id",-1388416934).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$row$build_raw_initial_state_STAR_(p__44092){
var map__44093 = p__44092;
var map__44093__$1 = cljs.core.__destructure_map(map__44093);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44093__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44093__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("row","id","row/id",-1388416934),id,new cljs.core.Keyword("row","cells","row/cells",-985279996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,(0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44094 = app.cell.Cell;
var G__44095 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"status","status",-1997798413),"empty"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__44094,G__44095) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__44094,G__44095));
})(),(function (){var G__44096 = app.cell.Cell;
var G__44097 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"status","status",-1997798413),"empty"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__44096,G__44097) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__44096,G__44097));
})(),(function (){var G__44098 = app.cell.Cell;
var G__44099 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"status","status",-1997798413),"empty"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__44098,G__44099) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__44098,G__44099));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,(1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44100 = app.cell.Cell;
var G__44101 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"status","status",-1997798413),"empty"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__44100,G__44101) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__44100,G__44101));
})(),(function (){var G__44102 = app.cell.Cell;
var G__44103 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"status","status",-1997798413),"empty"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__44102,G__44103) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__44102,G__44103));
})(),(function (){var G__44104 = app.cell.Cell;
var G__44105 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"status","status",-1997798413),"empty"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__44104,G__44105) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__44104,G__44105));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,(2)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44106 = app.cell.Cell;
var G__44107 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"status","status",-1997798413),"empty"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__44106,G__44107) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__44106,G__44107));
})(),(function (){var G__44108 = app.cell.Cell;
var G__44109 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"status","status",-1997798413),"empty"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__44108,G__44109) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__44108,G__44109));
})(),(function (){var G__44110 = app.cell.Cell;
var G__44111 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(8),new cljs.core.Keyword(null,"status","status",-1997798413),"empty"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__44110,G__44111) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__44110,G__44111));
})()], null):null)))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$row$render_Row(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__44112 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__44112__$1 = cljs.core.__destructure_map(map__44112);
var props = map__44112__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44112__$1,new cljs.core.Keyword("row","id","row/id",-1388416934));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44112__$1,new cljs.core.Keyword("row","cells","row/cells",-985279996));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Row ",props], 0));

return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.cell.ui_cell,cells)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.row !== 'undefined') && (typeof app.row.Row !== 'undefined')){
} else {
/**
 * @constructor
 */
app.row.Row = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__34775__auto___44113,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.row.Row,new cljs.core.Keyword("app.row","Row","app.row/Row",1260179678),options__34775__auto___44113);
app.row.ui_row = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.row.Row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("row","id","row/id",-1388416934)], null));

//# sourceMappingURL=app.row.js.map
