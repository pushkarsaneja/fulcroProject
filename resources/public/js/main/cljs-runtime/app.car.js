goog.provide('app.car');

var options__34841__auto___40179 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$car$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("car","name","car/name",1843773437),new cljs.core.Keyword("car","color","car/color",1011773553)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$car$build_raw_initial_state_STAR_(id,name,color){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("car","id","car/id",-1388434848),id,new cljs.core.Keyword("car","name","car/name",1843773437),name,new cljs.core.Keyword("car","color","car/color",1011773553),color], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$car$render_Car(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__40178 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__40178__$1 = cljs.core.__destructure_map(map__40178);
var props = map__40178__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40178__$1,new cljs.core.Keyword("car","id","car/id",-1388434848));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40178__$1,new cljs.core.Keyword("car","name","car/name",1843773437));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40178__$1,new cljs.core.Keyword("car","color","car/color",1011773553));
console.log("Props",props);

return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),")"].join('')], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.car !== 'undefined') && (typeof app.car.Car !== 'undefined')){
} else {
/**
 * @constructor
 */
app.car.Car = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__34841__auto___40179,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.car.Car,new cljs.core.Keyword("app.car","Car","app.car/Car",-714588714),options__34841__auto___40179);
app.car.ui_car = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.car.Car);

//# sourceMappingURL=app.car.js.map
