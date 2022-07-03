goog.provide('app.board');

var options__34775__auto___44176 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$board$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","id","board/id",-1461347474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("board","rows","board/rows",743684530),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.row.Row)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$board$ident_STAR_(this$,p__44165,_){
var map__44166 = p__44165;
var map__44166__$1 = cljs.core.__destructure_map(map__44166);
var props = map__44166__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44166__$1,new cljs.core.Keyword("board","id","board/id",-1461347474));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44166__$1,new cljs.core.Keyword("board","rows","board/rows",743684530));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","id","board/id",-1461347474),new cljs.core.Keyword("board","id","board/id",-1461347474).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initital-state","initital-state",2104922721),(function (p__44167){
var map__44168 = p__44167;
var map__44168__$1 = cljs.core.__destructure_map(map__44168);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44168__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("board","id","board/id",-1461347474),id,new cljs.core.Keyword("board","rows","board/rows",743684530),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44169 = app.row.Row;
var G__44170 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__44169,G__44170) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__44169,G__44170));
})(),(function (){var G__44171 = app.row.Row;
var G__44172 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__44171,G__44172) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__44171,G__44172));
})(),(function (){var G__44173 = app.row.Row;
var G__44174 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__44173,G__44174) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__44173,G__44174));
})()], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$board$render_Board(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__44175 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__44175__$1 = cljs.core.__destructure_map(map__44175);
var props = map__44175__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44175__$1,new cljs.core.Keyword("board","id","board/id",-1461347474));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44175__$1,new cljs.core.Keyword("board","rows","board/rows",743684530));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0));

return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.row.ui_row,rows)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.board !== 'undefined') && (typeof app.board.Board !== 'undefined')){
} else {
/**
 * @constructor
 */
app.board.Board = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__34775__auto___44176,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.board.Board,new cljs.core.Keyword("app.board","Board","app.board/Board",1325686400),options__34775__auto___44176);
app.board.ui_board = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.board.Board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("board","id","board/id",-1461347474)], null));

//# sourceMappingURL=app.board.js.map
