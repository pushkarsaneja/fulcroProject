goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__48571){
var vec__48572 = p__48571;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48572,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48572,(1),null);
var pair = vec__48572;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__48575){
var vec__48576 = p__48575;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48576,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48576,(1),null);
var pair = vec__48576;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__48579){
var vec__48580 = p__48579;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48580,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48580,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__48583 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48583,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__48583;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__48585 = arguments.length;
switch (G__48585) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__48586 = component.refs;
var G__48586__$1 = (((G__48586 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__48586,name));
if((G__48586__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__48586__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5751__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
var G__48587 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__48588 = (function (){var G__48589 = r;
if((G__48589 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__48589);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__48588) : ref.call(null,G__48588));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__48587) : factory.call(null,G__48587));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__48594 = arguments.length;
switch (G__48594) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___49064 = arguments.length;
var i__5767__auto___49065 = (0);
while(true){
if((i__5767__auto___49065 < len__5766__auto___49064)){
args_arr__5791__auto__.push((arguments[i__5767__auto___49065]));

var G__49066 = (i__5767__auto___49065 + (1));
i__5767__auto___49065 = G__49066;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq48591){
var G__48592 = cljs.core.first(seq48591);
var seq48591__$1 = cljs.core.next(seq48591);
var G__48593 = cljs.core.first(seq48591__$1);
var seq48591__$2 = cljs.core.next(seq48591__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48592,G__48593,seq48591__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__5041__auto__ = tag;
if(cljs.core.truth_(and__5041__auto__)){
var G__48595 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__48595) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__48595));
} else {
return and__5041__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x48597_49067 = ctor.prototype;
(x48597_49067.onChange = (function (event){
var this$ = this;
var temp__5753__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x48597_49067.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__48596_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__48596_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5041__auto__ = state_value;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = element_value;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,-1796981872,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x48597_49067.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__49068__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__49068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49069__i = 0, G__49069__a = new Array(arguments.length -  0);
while (G__49069__i < G__49069__a.length) {G__49069__a[G__49069__i] = arguments[G__49069__i + 0]; ++G__49069__i;}
  args = new cljs.core.IndexedSeq(G__49069__a,0,null);
} 
return G__49068__delegate.call(this,args);};
G__49068.cljs$lang$maxFixedArity = 0;
G__49068.cljs$lang$applyTo = (function (arglist__49070){
var args = cljs.core.seq(arglist__49070);
return G__49068__delegate(args);
});
G__49068.cljs$core$IFn$_invoke$arity$variadic = G__49068__delegate;
return G__49068;
})()
;
return (function() { 
var G__49071__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5751__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__49071 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__49072__i = 0, G__49072__a = new Array(arguments.length -  1);
while (G__49072__i < G__49072__a.length) {G__49072__a[G__49072__i] = arguments[G__49072__i + 1]; ++G__49072__i;}
  children = new cljs.core.IndexedSeq(G__49072__a,0,null);
} 
return G__49071__delegate.call(this,props,children);};
G__49071.cljs$lang$maxFixedArity = 1;
G__49071.cljs$lang$applyTo = (function (arglist__49073){
var props = cljs.core.first(arglist__49073);
var children = cljs.core.rest(arglist__49073);
return G__49071__delegate(props,children);
});
G__49071.cljs$core$IFn$_invoke$arity$variadic = G__49071__delegate;
return G__49071;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__48598 = tag;
switch (G__48598) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48598)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__48600 = arguments.length;
switch (G__48600) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__48601 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__48602 = cljs.core.seq(vec__48601);
var first__48603 = cljs.core.first(seq__48602);
var seq__48602__$1 = cljs.core.next(seq__48602);
var head = first__48603;
var tail = seq__48602__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__48604 = (function (){var G__48605 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48605,tail);

return G__48605;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48604) : f.call(null,G__48604));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__48606 = (function (){var G__48607 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48607,args);

return G__48607;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48606) : f.call(null,G__48606));
} else {
if(cljs.core.object_QMARK_(head)){
var G__48608 = (function (){var G__48609 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48609,tail);

return G__48609;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48608) : f.call(null,G__48608));
} else {
if(cljs.core.map_QMARK_(head)){
var G__48610 = (function (){var G__48611 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__48611,tail);

return G__48611;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48610) : f.call(null,G__48610));
} else {
var G__48612 = (function (){var G__48613 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48613,args);

return G__48613;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48612) : f.call(null,G__48612));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__48615 = arguments.length;
switch (G__48615) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__48616 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__48617 = cljs.core.seq(vec__48616);
var first__48618 = cljs.core.first(seq__48617);
var seq__48617__$1 = cljs.core.next(seq__48617);
var head = first__48618;
var tail = seq__48617__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__48619 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48619,tail);

return G__48619;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__48620 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48620,args);

return G__48620;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__48621 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48621,tail);

return G__48621;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__48622 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__48622,tail);

return G__48622;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__48623 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48623,args);

return G__48623;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49077 = arguments.length;
var i__5767__auto___49078 = (0);
while(true){
if((i__5767__auto___49078 < len__5766__auto___49077)){
args__5772__auto__.push((arguments[i__5767__auto___49078]));

var G__49079 = (i__5767__auto___49078 + (1));
i__5767__auto___49078 = G__49079;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48667 = conformed_args__47356__auto__;
var map__48667__$1 = cljs.core.__destructure_map(map__48667);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48667__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48667__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48667__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq48666){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48666));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49080 = arguments.length;
var i__5767__auto___49081 = (0);
while(true){
if((i__5767__auto___49081 < len__5766__auto___49080)){
args__5772__auto__.push((arguments[i__5767__auto___49081]));

var G__49082 = (i__5767__auto___49081 + (1));
i__5767__auto___49081 = G__49082;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48669 = conformed_args__47356__auto__;
var map__48669__$1 = cljs.core.__destructure_map(map__48669);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq48668){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48668));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49083 = arguments.length;
var i__5767__auto___49084 = (0);
while(true){
if((i__5767__auto___49084 < len__5766__auto___49083)){
args__5772__auto__.push((arguments[i__5767__auto___49084]));

var G__49085 = (i__5767__auto___49084 + (1));
i__5767__auto___49084 = G__49085;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48671 = conformed_args__47356__auto__;
var map__48671__$1 = cljs.core.__destructure_map(map__48671);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq48670){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48670));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49086 = arguments.length;
var i__5767__auto___49087 = (0);
while(true){
if((i__5767__auto___49087 < len__5766__auto___49086)){
args__5772__auto__.push((arguments[i__5767__auto___49087]));

var G__49088 = (i__5767__auto___49087 + (1));
i__5767__auto___49087 = G__49088;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48673 = conformed_args__47356__auto__;
var map__48673__$1 = cljs.core.__destructure_map(map__48673);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48673__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48673__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48673__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq48672){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48672));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49089 = arguments.length;
var i__5767__auto___49090 = (0);
while(true){
if((i__5767__auto___49090 < len__5766__auto___49089)){
args__5772__auto__.push((arguments[i__5767__auto___49090]));

var G__49091 = (i__5767__auto___49090 + (1));
i__5767__auto___49090 = G__49091;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48675 = conformed_args__47356__auto__;
var map__48675__$1 = cljs.core.__destructure_map(map__48675);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48675__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48675__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48675__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq48674){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48674));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49092 = arguments.length;
var i__5767__auto___49093 = (0);
while(true){
if((i__5767__auto___49093 < len__5766__auto___49092)){
args__5772__auto__.push((arguments[i__5767__auto___49093]));

var G__49094 = (i__5767__auto___49093 + (1));
i__5767__auto___49093 = G__49094;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48677 = conformed_args__47356__auto__;
var map__48677__$1 = cljs.core.__destructure_map(map__48677);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48677__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48677__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48677__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq48676){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48676));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49095 = arguments.length;
var i__5767__auto___49096 = (0);
while(true){
if((i__5767__auto___49096 < len__5766__auto___49095)){
args__5772__auto__.push((arguments[i__5767__auto___49096]));

var G__49097 = (i__5767__auto___49096 + (1));
i__5767__auto___49096 = G__49097;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48679 = conformed_args__47356__auto__;
var map__48679__$1 = cljs.core.__destructure_map(map__48679);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48679__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48679__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48679__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq48678){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48678));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49098 = arguments.length;
var i__5767__auto___49099 = (0);
while(true){
if((i__5767__auto___49099 < len__5766__auto___49098)){
args__5772__auto__.push((arguments[i__5767__auto___49099]));

var G__49100 = (i__5767__auto___49099 + (1));
i__5767__auto___49099 = G__49100;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48681 = conformed_args__47356__auto__;
var map__48681__$1 = cljs.core.__destructure_map(map__48681);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48681__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48681__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq48680){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48680));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49101 = arguments.length;
var i__5767__auto___49102 = (0);
while(true){
if((i__5767__auto___49102 < len__5766__auto___49101)){
args__5772__auto__.push((arguments[i__5767__auto___49102]));

var G__49103 = (i__5767__auto___49102 + (1));
i__5767__auto___49102 = G__49103;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48683 = conformed_args__47356__auto__;
var map__48683__$1 = cljs.core.__destructure_map(map__48683);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48683__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48683__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48683__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq48682){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48682));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49104 = arguments.length;
var i__5767__auto___49105 = (0);
while(true){
if((i__5767__auto___49105 < len__5766__auto___49104)){
args__5772__auto__.push((arguments[i__5767__auto___49105]));

var G__49106 = (i__5767__auto___49105 + (1));
i__5767__auto___49105 = G__49106;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48685 = conformed_args__47356__auto__;
var map__48685__$1 = cljs.core.__destructure_map(map__48685);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq48684){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48684));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49107 = arguments.length;
var i__5767__auto___49108 = (0);
while(true){
if((i__5767__auto___49108 < len__5766__auto___49107)){
args__5772__auto__.push((arguments[i__5767__auto___49108]));

var G__49109 = (i__5767__auto___49108 + (1));
i__5767__auto___49108 = G__49109;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48687 = conformed_args__47356__auto__;
var map__48687__$1 = cljs.core.__destructure_map(map__48687);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48687__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48687__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48687__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq48686){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48686));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49110 = arguments.length;
var i__5767__auto___49111 = (0);
while(true){
if((i__5767__auto___49111 < len__5766__auto___49110)){
args__5772__auto__.push((arguments[i__5767__auto___49111]));

var G__49112 = (i__5767__auto___49111 + (1));
i__5767__auto___49111 = G__49112;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48689 = conformed_args__47356__auto__;
var map__48689__$1 = cljs.core.__destructure_map(map__48689);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48689__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48689__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48689__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq48688){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48688));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49113 = arguments.length;
var i__5767__auto___49114 = (0);
while(true){
if((i__5767__auto___49114 < len__5766__auto___49113)){
args__5772__auto__.push((arguments[i__5767__auto___49114]));

var G__49115 = (i__5767__auto___49114 + (1));
i__5767__auto___49114 = G__49115;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48691 = conformed_args__47356__auto__;
var map__48691__$1 = cljs.core.__destructure_map(map__48691);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48691__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq48690){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48690));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49116 = arguments.length;
var i__5767__auto___49117 = (0);
while(true){
if((i__5767__auto___49117 < len__5766__auto___49116)){
args__5772__auto__.push((arguments[i__5767__auto___49117]));

var G__49118 = (i__5767__auto___49117 + (1));
i__5767__auto___49117 = G__49118;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48693 = conformed_args__47356__auto__;
var map__48693__$1 = cljs.core.__destructure_map(map__48693);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq48692){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48692));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49119 = arguments.length;
var i__5767__auto___49120 = (0);
while(true){
if((i__5767__auto___49120 < len__5766__auto___49119)){
args__5772__auto__.push((arguments[i__5767__auto___49120]));

var G__49121 = (i__5767__auto___49120 + (1));
i__5767__auto___49120 = G__49121;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48695 = conformed_args__47356__auto__;
var map__48695__$1 = cljs.core.__destructure_map(map__48695);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48695__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48695__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48695__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq48694){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48694));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49122 = arguments.length;
var i__5767__auto___49123 = (0);
while(true){
if((i__5767__auto___49123 < len__5766__auto___49122)){
args__5772__auto__.push((arguments[i__5767__auto___49123]));

var G__49124 = (i__5767__auto___49123 + (1));
i__5767__auto___49123 = G__49124;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48697 = conformed_args__47356__auto__;
var map__48697__$1 = cljs.core.__destructure_map(map__48697);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq48696){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48696));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49125 = arguments.length;
var i__5767__auto___49126 = (0);
while(true){
if((i__5767__auto___49126 < len__5766__auto___49125)){
args__5772__auto__.push((arguments[i__5767__auto___49126]));

var G__49127 = (i__5767__auto___49126 + (1));
i__5767__auto___49126 = G__49127;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48699 = conformed_args__47356__auto__;
var map__48699__$1 = cljs.core.__destructure_map(map__48699);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48699__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48699__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48699__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq48698){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48698));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49128 = arguments.length;
var i__5767__auto___49129 = (0);
while(true){
if((i__5767__auto___49129 < len__5766__auto___49128)){
args__5772__auto__.push((arguments[i__5767__auto___49129]));

var G__49130 = (i__5767__auto___49129 + (1));
i__5767__auto___49129 = G__49130;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48701 = conformed_args__47356__auto__;
var map__48701__$1 = cljs.core.__destructure_map(map__48701);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48701__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48701__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48701__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq48700){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48700));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49131 = arguments.length;
var i__5767__auto___49132 = (0);
while(true){
if((i__5767__auto___49132 < len__5766__auto___49131)){
args__5772__auto__.push((arguments[i__5767__auto___49132]));

var G__49133 = (i__5767__auto___49132 + (1));
i__5767__auto___49132 = G__49133;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48703 = conformed_args__47356__auto__;
var map__48703__$1 = cljs.core.__destructure_map(map__48703);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq48702){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48702));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49134 = arguments.length;
var i__5767__auto___49135 = (0);
while(true){
if((i__5767__auto___49135 < len__5766__auto___49134)){
args__5772__auto__.push((arguments[i__5767__auto___49135]));

var G__49136 = (i__5767__auto___49135 + (1));
i__5767__auto___49135 = G__49136;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48705 = conformed_args__47356__auto__;
var map__48705__$1 = cljs.core.__destructure_map(map__48705);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48705__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48705__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48705__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq48704){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48704));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49137 = arguments.length;
var i__5767__auto___49138 = (0);
while(true){
if((i__5767__auto___49138 < len__5766__auto___49137)){
args__5772__auto__.push((arguments[i__5767__auto___49138]));

var G__49139 = (i__5767__auto___49138 + (1));
i__5767__auto___49138 = G__49139;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48707 = conformed_args__47356__auto__;
var map__48707__$1 = cljs.core.__destructure_map(map__48707);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48707__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48707__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48707__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq48706){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48706));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49140 = arguments.length;
var i__5767__auto___49141 = (0);
while(true){
if((i__5767__auto___49141 < len__5766__auto___49140)){
args__5772__auto__.push((arguments[i__5767__auto___49141]));

var G__49142 = (i__5767__auto___49141 + (1));
i__5767__auto___49141 = G__49142;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48709 = conformed_args__47356__auto__;
var map__48709__$1 = cljs.core.__destructure_map(map__48709);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48709__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48709__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48709__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq48708){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48708));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49143 = arguments.length;
var i__5767__auto___49144 = (0);
while(true){
if((i__5767__auto___49144 < len__5766__auto___49143)){
args__5772__auto__.push((arguments[i__5767__auto___49144]));

var G__49145 = (i__5767__auto___49144 + (1));
i__5767__auto___49144 = G__49145;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48711 = conformed_args__47356__auto__;
var map__48711__$1 = cljs.core.__destructure_map(map__48711);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48711__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48711__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48711__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq48710){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48710));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49146 = arguments.length;
var i__5767__auto___49147 = (0);
while(true){
if((i__5767__auto___49147 < len__5766__auto___49146)){
args__5772__auto__.push((arguments[i__5767__auto___49147]));

var G__49148 = (i__5767__auto___49147 + (1));
i__5767__auto___49147 = G__49148;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48713 = conformed_args__47356__auto__;
var map__48713__$1 = cljs.core.__destructure_map(map__48713);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48713__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48713__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq48712){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48712));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49149 = arguments.length;
var i__5767__auto___49150 = (0);
while(true){
if((i__5767__auto___49150 < len__5766__auto___49149)){
args__5772__auto__.push((arguments[i__5767__auto___49150]));

var G__49151 = (i__5767__auto___49150 + (1));
i__5767__auto___49150 = G__49151;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48715 = conformed_args__47356__auto__;
var map__48715__$1 = cljs.core.__destructure_map(map__48715);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq48714){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48714));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49152 = arguments.length;
var i__5767__auto___49153 = (0);
while(true){
if((i__5767__auto___49153 < len__5766__auto___49152)){
args__5772__auto__.push((arguments[i__5767__auto___49153]));

var G__49154 = (i__5767__auto___49153 + (1));
i__5767__auto___49153 = G__49154;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48717 = conformed_args__47356__auto__;
var map__48717__$1 = cljs.core.__destructure_map(map__48717);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48717__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48717__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48717__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq48716){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48716));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49155 = arguments.length;
var i__5767__auto___49156 = (0);
while(true){
if((i__5767__auto___49156 < len__5766__auto___49155)){
args__5772__auto__.push((arguments[i__5767__auto___49156]));

var G__49157 = (i__5767__auto___49156 + (1));
i__5767__auto___49156 = G__49157;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48719 = conformed_args__47356__auto__;
var map__48719__$1 = cljs.core.__destructure_map(map__48719);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48719__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48719__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48719__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq48718){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48718));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49158 = arguments.length;
var i__5767__auto___49159 = (0);
while(true){
if((i__5767__auto___49159 < len__5766__auto___49158)){
args__5772__auto__.push((arguments[i__5767__auto___49159]));

var G__49160 = (i__5767__auto___49159 + (1));
i__5767__auto___49159 = G__49160;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48721 = conformed_args__47356__auto__;
var map__48721__$1 = cljs.core.__destructure_map(map__48721);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48721__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48721__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48721__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq48720){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48720));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49161 = arguments.length;
var i__5767__auto___49162 = (0);
while(true){
if((i__5767__auto___49162 < len__5766__auto___49161)){
args__5772__auto__.push((arguments[i__5767__auto___49162]));

var G__49163 = (i__5767__auto___49162 + (1));
i__5767__auto___49162 = G__49163;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48723 = conformed_args__47356__auto__;
var map__48723__$1 = cljs.core.__destructure_map(map__48723);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48723__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48723__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48723__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq48722){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48722));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49164 = arguments.length;
var i__5767__auto___49165 = (0);
while(true){
if((i__5767__auto___49165 < len__5766__auto___49164)){
args__5772__auto__.push((arguments[i__5767__auto___49165]));

var G__49166 = (i__5767__auto___49165 + (1));
i__5767__auto___49165 = G__49166;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48725 = conformed_args__47356__auto__;
var map__48725__$1 = cljs.core.__destructure_map(map__48725);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48725__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48725__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48725__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq48724){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48724));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49167 = arguments.length;
var i__5767__auto___49168 = (0);
while(true){
if((i__5767__auto___49168 < len__5766__auto___49167)){
args__5772__auto__.push((arguments[i__5767__auto___49168]));

var G__49169 = (i__5767__auto___49168 + (1));
i__5767__auto___49168 = G__49169;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48727 = conformed_args__47356__auto__;
var map__48727__$1 = cljs.core.__destructure_map(map__48727);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq48726){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48726));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49170 = arguments.length;
var i__5767__auto___49171 = (0);
while(true){
if((i__5767__auto___49171 < len__5766__auto___49170)){
args__5772__auto__.push((arguments[i__5767__auto___49171]));

var G__49172 = (i__5767__auto___49171 + (1));
i__5767__auto___49171 = G__49172;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48729 = conformed_args__47356__auto__;
var map__48729__$1 = cljs.core.__destructure_map(map__48729);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48729__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48729__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48729__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq48728){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48728));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49173 = arguments.length;
var i__5767__auto___49174 = (0);
while(true){
if((i__5767__auto___49174 < len__5766__auto___49173)){
args__5772__auto__.push((arguments[i__5767__auto___49174]));

var G__49175 = (i__5767__auto___49174 + (1));
i__5767__auto___49174 = G__49175;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48731 = conformed_args__47356__auto__;
var map__48731__$1 = cljs.core.__destructure_map(map__48731);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48731__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48731__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48731__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq48730){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48730));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49176 = arguments.length;
var i__5767__auto___49177 = (0);
while(true){
if((i__5767__auto___49177 < len__5766__auto___49176)){
args__5772__auto__.push((arguments[i__5767__auto___49177]));

var G__49178 = (i__5767__auto___49177 + (1));
i__5767__auto___49177 = G__49178;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48733 = conformed_args__47356__auto__;
var map__48733__$1 = cljs.core.__destructure_map(map__48733);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq48732){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48732));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49179 = arguments.length;
var i__5767__auto___49180 = (0);
while(true){
if((i__5767__auto___49180 < len__5766__auto___49179)){
args__5772__auto__.push((arguments[i__5767__auto___49180]));

var G__49181 = (i__5767__auto___49180 + (1));
i__5767__auto___49180 = G__49181;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48735 = conformed_args__47356__auto__;
var map__48735__$1 = cljs.core.__destructure_map(map__48735);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48735__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48735__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48735__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq48734){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48734));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49182 = arguments.length;
var i__5767__auto___49183 = (0);
while(true){
if((i__5767__auto___49183 < len__5766__auto___49182)){
args__5772__auto__.push((arguments[i__5767__auto___49183]));

var G__49184 = (i__5767__auto___49183 + (1));
i__5767__auto___49183 = G__49184;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48737 = conformed_args__47356__auto__;
var map__48737__$1 = cljs.core.__destructure_map(map__48737);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48737__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48737__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48737__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq48736){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48736));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49185 = arguments.length;
var i__5767__auto___49186 = (0);
while(true){
if((i__5767__auto___49186 < len__5766__auto___49185)){
args__5772__auto__.push((arguments[i__5767__auto___49186]));

var G__49187 = (i__5767__auto___49186 + (1));
i__5767__auto___49186 = G__49187;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48739 = conformed_args__47356__auto__;
var map__48739__$1 = cljs.core.__destructure_map(map__48739);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48739__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48739__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq48738){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48738));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49188 = arguments.length;
var i__5767__auto___49189 = (0);
while(true){
if((i__5767__auto___49189 < len__5766__auto___49188)){
args__5772__auto__.push((arguments[i__5767__auto___49189]));

var G__49190 = (i__5767__auto___49189 + (1));
i__5767__auto___49189 = G__49190;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48741 = conformed_args__47356__auto__;
var map__48741__$1 = cljs.core.__destructure_map(map__48741);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48741__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48741__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48741__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq48740){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48740));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49191 = arguments.length;
var i__5767__auto___49192 = (0);
while(true){
if((i__5767__auto___49192 < len__5766__auto___49191)){
args__5772__auto__.push((arguments[i__5767__auto___49192]));

var G__49193 = (i__5767__auto___49192 + (1));
i__5767__auto___49192 = G__49193;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48743 = conformed_args__47356__auto__;
var map__48743__$1 = cljs.core.__destructure_map(map__48743);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48743__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48743__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48743__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq48742){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48742));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49194 = arguments.length;
var i__5767__auto___49195 = (0);
while(true){
if((i__5767__auto___49195 < len__5766__auto___49194)){
args__5772__auto__.push((arguments[i__5767__auto___49195]));

var G__49196 = (i__5767__auto___49195 + (1));
i__5767__auto___49195 = G__49196;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48745 = conformed_args__47356__auto__;
var map__48745__$1 = cljs.core.__destructure_map(map__48745);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48745__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq48744){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48744));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49197 = arguments.length;
var i__5767__auto___49198 = (0);
while(true){
if((i__5767__auto___49198 < len__5766__auto___49197)){
args__5772__auto__.push((arguments[i__5767__auto___49198]));

var G__49199 = (i__5767__auto___49198 + (1));
i__5767__auto___49198 = G__49199;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48747 = conformed_args__47356__auto__;
var map__48747__$1 = cljs.core.__destructure_map(map__48747);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48747__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48747__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48747__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq48746){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48746));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49200 = arguments.length;
var i__5767__auto___49201 = (0);
while(true){
if((i__5767__auto___49201 < len__5766__auto___49200)){
args__5772__auto__.push((arguments[i__5767__auto___49201]));

var G__49202 = (i__5767__auto___49201 + (1));
i__5767__auto___49201 = G__49202;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48749 = conformed_args__47356__auto__;
var map__48749__$1 = cljs.core.__destructure_map(map__48749);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48749__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48749__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48749__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq48748){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48748));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49203 = arguments.length;
var i__5767__auto___49204 = (0);
while(true){
if((i__5767__auto___49204 < len__5766__auto___49203)){
args__5772__auto__.push((arguments[i__5767__auto___49204]));

var G__49205 = (i__5767__auto___49204 + (1));
i__5767__auto___49204 = G__49205;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48751 = conformed_args__47356__auto__;
var map__48751__$1 = cljs.core.__destructure_map(map__48751);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48751__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48751__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48751__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq48750){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48750));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49206 = arguments.length;
var i__5767__auto___49207 = (0);
while(true){
if((i__5767__auto___49207 < len__5766__auto___49206)){
args__5772__auto__.push((arguments[i__5767__auto___49207]));

var G__49208 = (i__5767__auto___49207 + (1));
i__5767__auto___49207 = G__49208;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48753 = conformed_args__47356__auto__;
var map__48753__$1 = cljs.core.__destructure_map(map__48753);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48753__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48753__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48753__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq48752){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48752));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49209 = arguments.length;
var i__5767__auto___49210 = (0);
while(true){
if((i__5767__auto___49210 < len__5766__auto___49209)){
args__5772__auto__.push((arguments[i__5767__auto___49210]));

var G__49211 = (i__5767__auto___49210 + (1));
i__5767__auto___49210 = G__49211;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48755 = conformed_args__47356__auto__;
var map__48755__$1 = cljs.core.__destructure_map(map__48755);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48755__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48755__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48755__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq48754){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48754));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49212 = arguments.length;
var i__5767__auto___49213 = (0);
while(true){
if((i__5767__auto___49213 < len__5766__auto___49212)){
args__5772__auto__.push((arguments[i__5767__auto___49213]));

var G__49214 = (i__5767__auto___49213 + (1));
i__5767__auto___49213 = G__49214;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48757 = conformed_args__47356__auto__;
var map__48757__$1 = cljs.core.__destructure_map(map__48757);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq48756){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48756));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49215 = arguments.length;
var i__5767__auto___49216 = (0);
while(true){
if((i__5767__auto___49216 < len__5766__auto___49215)){
args__5772__auto__.push((arguments[i__5767__auto___49216]));

var G__49217 = (i__5767__auto___49216 + (1));
i__5767__auto___49216 = G__49217;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48759 = conformed_args__47356__auto__;
var map__48759__$1 = cljs.core.__destructure_map(map__48759);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48759__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48759__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48759__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq48758){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48758));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49218 = arguments.length;
var i__5767__auto___49219 = (0);
while(true){
if((i__5767__auto___49219 < len__5766__auto___49218)){
args__5772__auto__.push((arguments[i__5767__auto___49219]));

var G__49220 = (i__5767__auto___49219 + (1));
i__5767__auto___49219 = G__49220;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48761 = conformed_args__47356__auto__;
var map__48761__$1 = cljs.core.__destructure_map(map__48761);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48761__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48761__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48761__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq48760){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48760));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49221 = arguments.length;
var i__5767__auto___49222 = (0);
while(true){
if((i__5767__auto___49222 < len__5766__auto___49221)){
args__5772__auto__.push((arguments[i__5767__auto___49222]));

var G__49223 = (i__5767__auto___49222 + (1));
i__5767__auto___49222 = G__49223;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48763 = conformed_args__47356__auto__;
var map__48763__$1 = cljs.core.__destructure_map(map__48763);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48763__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48763__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48763__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq48762){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48762));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49224 = arguments.length;
var i__5767__auto___49225 = (0);
while(true){
if((i__5767__auto___49225 < len__5766__auto___49224)){
args__5772__auto__.push((arguments[i__5767__auto___49225]));

var G__49226 = (i__5767__auto___49225 + (1));
i__5767__auto___49225 = G__49226;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48765 = conformed_args__47356__auto__;
var map__48765__$1 = cljs.core.__destructure_map(map__48765);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48765__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48765__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq48764){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48764));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49227 = arguments.length;
var i__5767__auto___49228 = (0);
while(true){
if((i__5767__auto___49228 < len__5766__auto___49227)){
args__5772__auto__.push((arguments[i__5767__auto___49228]));

var G__49229 = (i__5767__auto___49228 + (1));
i__5767__auto___49228 = G__49229;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48767 = conformed_args__47356__auto__;
var map__48767__$1 = cljs.core.__destructure_map(map__48767);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48767__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48767__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48767__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq48766){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48766));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49230 = arguments.length;
var i__5767__auto___49231 = (0);
while(true){
if((i__5767__auto___49231 < len__5766__auto___49230)){
args__5772__auto__.push((arguments[i__5767__auto___49231]));

var G__49232 = (i__5767__auto___49231 + (1));
i__5767__auto___49231 = G__49232;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48769 = conformed_args__47356__auto__;
var map__48769__$1 = cljs.core.__destructure_map(map__48769);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq48768){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48768));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49233 = arguments.length;
var i__5767__auto___49234 = (0);
while(true){
if((i__5767__auto___49234 < len__5766__auto___49233)){
args__5772__auto__.push((arguments[i__5767__auto___49234]));

var G__49235 = (i__5767__auto___49234 + (1));
i__5767__auto___49234 = G__49235;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48771 = conformed_args__47356__auto__;
var map__48771__$1 = cljs.core.__destructure_map(map__48771);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48771__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48771__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48771__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq48770){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48770));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49236 = arguments.length;
var i__5767__auto___49237 = (0);
while(true){
if((i__5767__auto___49237 < len__5766__auto___49236)){
args__5772__auto__.push((arguments[i__5767__auto___49237]));

var G__49238 = (i__5767__auto___49237 + (1));
i__5767__auto___49237 = G__49238;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48773 = conformed_args__47356__auto__;
var map__48773__$1 = cljs.core.__destructure_map(map__48773);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48773__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48773__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48773__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq48772){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48772));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49239 = arguments.length;
var i__5767__auto___49240 = (0);
while(true){
if((i__5767__auto___49240 < len__5766__auto___49239)){
args__5772__auto__.push((arguments[i__5767__auto___49240]));

var G__49241 = (i__5767__auto___49240 + (1));
i__5767__auto___49240 = G__49241;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48775 = conformed_args__47356__auto__;
var map__48775__$1 = cljs.core.__destructure_map(map__48775);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq48774){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48774));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49242 = arguments.length;
var i__5767__auto___49243 = (0);
while(true){
if((i__5767__auto___49243 < len__5766__auto___49242)){
args__5772__auto__.push((arguments[i__5767__auto___49243]));

var G__49244 = (i__5767__auto___49243 + (1));
i__5767__auto___49243 = G__49244;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48777 = conformed_args__47356__auto__;
var map__48777__$1 = cljs.core.__destructure_map(map__48777);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48777__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48777__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48777__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq48776){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48776));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49245 = arguments.length;
var i__5767__auto___49246 = (0);
while(true){
if((i__5767__auto___49246 < len__5766__auto___49245)){
args__5772__auto__.push((arguments[i__5767__auto___49246]));

var G__49247 = (i__5767__auto___49246 + (1));
i__5767__auto___49246 = G__49247;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48779 = conformed_args__47356__auto__;
var map__48779__$1 = cljs.core.__destructure_map(map__48779);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48779__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48779__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48779__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq48778){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48778));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49248 = arguments.length;
var i__5767__auto___49249 = (0);
while(true){
if((i__5767__auto___49249 < len__5766__auto___49248)){
args__5772__auto__.push((arguments[i__5767__auto___49249]));

var G__49250 = (i__5767__auto___49249 + (1));
i__5767__auto___49249 = G__49250;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48781 = conformed_args__47356__auto__;
var map__48781__$1 = cljs.core.__destructure_map(map__48781);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48781__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48781__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48781__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq48780){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48780));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49251 = arguments.length;
var i__5767__auto___49252 = (0);
while(true){
if((i__5767__auto___49252 < len__5766__auto___49251)){
args__5772__auto__.push((arguments[i__5767__auto___49252]));

var G__49253 = (i__5767__auto___49252 + (1));
i__5767__auto___49252 = G__49253;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48783 = conformed_args__47356__auto__;
var map__48783__$1 = cljs.core.__destructure_map(map__48783);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48783__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48783__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq48782){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48782));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49254 = arguments.length;
var i__5767__auto___49255 = (0);
while(true){
if((i__5767__auto___49255 < len__5766__auto___49254)){
args__5772__auto__.push((arguments[i__5767__auto___49255]));

var G__49256 = (i__5767__auto___49255 + (1));
i__5767__auto___49255 = G__49256;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48785 = conformed_args__47356__auto__;
var map__48785__$1 = cljs.core.__destructure_map(map__48785);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48785__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48785__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48785__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq48784){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48784));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49257 = arguments.length;
var i__5767__auto___49258 = (0);
while(true){
if((i__5767__auto___49258 < len__5766__auto___49257)){
args__5772__auto__.push((arguments[i__5767__auto___49258]));

var G__49259 = (i__5767__auto___49258 + (1));
i__5767__auto___49258 = G__49259;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48787 = conformed_args__47356__auto__;
var map__48787__$1 = cljs.core.__destructure_map(map__48787);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq48786){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48786));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49260 = arguments.length;
var i__5767__auto___49261 = (0);
while(true){
if((i__5767__auto___49261 < len__5766__auto___49260)){
args__5772__auto__.push((arguments[i__5767__auto___49261]));

var G__49262 = (i__5767__auto___49261 + (1));
i__5767__auto___49261 = G__49262;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48789 = conformed_args__47356__auto__;
var map__48789__$1 = cljs.core.__destructure_map(map__48789);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq48788){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48788));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49263 = arguments.length;
var i__5767__auto___49264 = (0);
while(true){
if((i__5767__auto___49264 < len__5766__auto___49263)){
args__5772__auto__.push((arguments[i__5767__auto___49264]));

var G__49265 = (i__5767__auto___49264 + (1));
i__5767__auto___49264 = G__49265;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48791 = conformed_args__47356__auto__;
var map__48791__$1 = cljs.core.__destructure_map(map__48791);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48791__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48791__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48791__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq48790){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48790));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49266 = arguments.length;
var i__5767__auto___49267 = (0);
while(true){
if((i__5767__auto___49267 < len__5766__auto___49266)){
args__5772__auto__.push((arguments[i__5767__auto___49267]));

var G__49268 = (i__5767__auto___49267 + (1));
i__5767__auto___49267 = G__49268;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48793 = conformed_args__47356__auto__;
var map__48793__$1 = cljs.core.__destructure_map(map__48793);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48793__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48793__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48793__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq48792){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48792));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49269 = arguments.length;
var i__5767__auto___49270 = (0);
while(true){
if((i__5767__auto___49270 < len__5766__auto___49269)){
args__5772__auto__.push((arguments[i__5767__auto___49270]));

var G__49271 = (i__5767__auto___49270 + (1));
i__5767__auto___49270 = G__49271;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48795 = conformed_args__47356__auto__;
var map__48795__$1 = cljs.core.__destructure_map(map__48795);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48795__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48795__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48795__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq48794){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48794));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49272 = arguments.length;
var i__5767__auto___49273 = (0);
while(true){
if((i__5767__auto___49273 < len__5766__auto___49272)){
args__5772__auto__.push((arguments[i__5767__auto___49273]));

var G__49274 = (i__5767__auto___49273 + (1));
i__5767__auto___49273 = G__49274;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48797 = conformed_args__47356__auto__;
var map__48797__$1 = cljs.core.__destructure_map(map__48797);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48797__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48797__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48797__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq48796){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48796));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49275 = arguments.length;
var i__5767__auto___49276 = (0);
while(true){
if((i__5767__auto___49276 < len__5766__auto___49275)){
args__5772__auto__.push((arguments[i__5767__auto___49276]));

var G__49277 = (i__5767__auto___49276 + (1));
i__5767__auto___49276 = G__49277;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48799 = conformed_args__47356__auto__;
var map__48799__$1 = cljs.core.__destructure_map(map__48799);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48799__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48799__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48799__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq48798){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48798));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49278 = arguments.length;
var i__5767__auto___49279 = (0);
while(true){
if((i__5767__auto___49279 < len__5766__auto___49278)){
args__5772__auto__.push((arguments[i__5767__auto___49279]));

var G__49280 = (i__5767__auto___49279 + (1));
i__5767__auto___49279 = G__49280;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48801 = conformed_args__47356__auto__;
var map__48801__$1 = cljs.core.__destructure_map(map__48801);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48801__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48801__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48801__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq48800){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48800));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49281 = arguments.length;
var i__5767__auto___49282 = (0);
while(true){
if((i__5767__auto___49282 < len__5766__auto___49281)){
args__5772__auto__.push((arguments[i__5767__auto___49282]));

var G__49283 = (i__5767__auto___49282 + (1));
i__5767__auto___49282 = G__49283;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48803 = conformed_args__47356__auto__;
var map__48803__$1 = cljs.core.__destructure_map(map__48803);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48803__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48803__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq48802){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48802));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49284 = arguments.length;
var i__5767__auto___49285 = (0);
while(true){
if((i__5767__auto___49285 < len__5766__auto___49284)){
args__5772__auto__.push((arguments[i__5767__auto___49285]));

var G__49286 = (i__5767__auto___49285 + (1));
i__5767__auto___49285 = G__49286;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48805 = conformed_args__47356__auto__;
var map__48805__$1 = cljs.core.__destructure_map(map__48805);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48805__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48805__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq48804){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48804));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49287 = arguments.length;
var i__5767__auto___49288 = (0);
while(true){
if((i__5767__auto___49288 < len__5766__auto___49287)){
args__5772__auto__.push((arguments[i__5767__auto___49288]));

var G__49289 = (i__5767__auto___49288 + (1));
i__5767__auto___49288 = G__49289;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48807 = conformed_args__47356__auto__;
var map__48807__$1 = cljs.core.__destructure_map(map__48807);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48807__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48807__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48807__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq48806){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48806));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49290 = arguments.length;
var i__5767__auto___49291 = (0);
while(true){
if((i__5767__auto___49291 < len__5766__auto___49290)){
args__5772__auto__.push((arguments[i__5767__auto___49291]));

var G__49292 = (i__5767__auto___49291 + (1));
i__5767__auto___49291 = G__49292;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48809 = conformed_args__47356__auto__;
var map__48809__$1 = cljs.core.__destructure_map(map__48809);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48809__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48809__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48809__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq48808){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48808));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49293 = arguments.length;
var i__5767__auto___49294 = (0);
while(true){
if((i__5767__auto___49294 < len__5766__auto___49293)){
args__5772__auto__.push((arguments[i__5767__auto___49294]));

var G__49295 = (i__5767__auto___49294 + (1));
i__5767__auto___49294 = G__49295;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48811 = conformed_args__47356__auto__;
var map__48811__$1 = cljs.core.__destructure_map(map__48811);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48811__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48811__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48811__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq48810){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48810));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49296 = arguments.length;
var i__5767__auto___49297 = (0);
while(true){
if((i__5767__auto___49297 < len__5766__auto___49296)){
args__5772__auto__.push((arguments[i__5767__auto___49297]));

var G__49298 = (i__5767__auto___49297 + (1));
i__5767__auto___49297 = G__49298;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48813 = conformed_args__47356__auto__;
var map__48813__$1 = cljs.core.__destructure_map(map__48813);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48813__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48813__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48813__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq48812){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48812));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49299 = arguments.length;
var i__5767__auto___49300 = (0);
while(true){
if((i__5767__auto___49300 < len__5766__auto___49299)){
args__5772__auto__.push((arguments[i__5767__auto___49300]));

var G__49301 = (i__5767__auto___49300 + (1));
i__5767__auto___49300 = G__49301;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48815 = conformed_args__47356__auto__;
var map__48815__$1 = cljs.core.__destructure_map(map__48815);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48815__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48815__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48815__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq48814){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48814));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49302 = arguments.length;
var i__5767__auto___49303 = (0);
while(true){
if((i__5767__auto___49303 < len__5766__auto___49302)){
args__5772__auto__.push((arguments[i__5767__auto___49303]));

var G__49304 = (i__5767__auto___49303 + (1));
i__5767__auto___49303 = G__49304;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48817 = conformed_args__47356__auto__;
var map__48817__$1 = cljs.core.__destructure_map(map__48817);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48817__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48817__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48817__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq48816){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48816));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49305 = arguments.length;
var i__5767__auto___49306 = (0);
while(true){
if((i__5767__auto___49306 < len__5766__auto___49305)){
args__5772__auto__.push((arguments[i__5767__auto___49306]));

var G__49307 = (i__5767__auto___49306 + (1));
i__5767__auto___49306 = G__49307;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48819 = conformed_args__47356__auto__;
var map__48819__$1 = cljs.core.__destructure_map(map__48819);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq48818){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48818));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49308 = arguments.length;
var i__5767__auto___49309 = (0);
while(true){
if((i__5767__auto___49309 < len__5766__auto___49308)){
args__5772__auto__.push((arguments[i__5767__auto___49309]));

var G__49310 = (i__5767__auto___49309 + (1));
i__5767__auto___49309 = G__49310;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48821 = conformed_args__47356__auto__;
var map__48821__$1 = cljs.core.__destructure_map(map__48821);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48821__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48821__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48821__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq48820){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48820));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49311 = arguments.length;
var i__5767__auto___49312 = (0);
while(true){
if((i__5767__auto___49312 < len__5766__auto___49311)){
args__5772__auto__.push((arguments[i__5767__auto___49312]));

var G__49313 = (i__5767__auto___49312 + (1));
i__5767__auto___49312 = G__49313;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48823 = conformed_args__47356__auto__;
var map__48823__$1 = cljs.core.__destructure_map(map__48823);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48823__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48823__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48823__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq48822){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48822));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49314 = arguments.length;
var i__5767__auto___49315 = (0);
while(true){
if((i__5767__auto___49315 < len__5766__auto___49314)){
args__5772__auto__.push((arguments[i__5767__auto___49315]));

var G__49316 = (i__5767__auto___49315 + (1));
i__5767__auto___49315 = G__49316;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48825 = conformed_args__47356__auto__;
var map__48825__$1 = cljs.core.__destructure_map(map__48825);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48825__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48825__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48825__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq48824){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48824));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49317 = arguments.length;
var i__5767__auto___49318 = (0);
while(true){
if((i__5767__auto___49318 < len__5766__auto___49317)){
args__5772__auto__.push((arguments[i__5767__auto___49318]));

var G__49319 = (i__5767__auto___49318 + (1));
i__5767__auto___49318 = G__49319;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48827 = conformed_args__47356__auto__;
var map__48827__$1 = cljs.core.__destructure_map(map__48827);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48827__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48827__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48827__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq48826){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48826));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49320 = arguments.length;
var i__5767__auto___49321 = (0);
while(true){
if((i__5767__auto___49321 < len__5766__auto___49320)){
args__5772__auto__.push((arguments[i__5767__auto___49321]));

var G__49322 = (i__5767__auto___49321 + (1));
i__5767__auto___49321 = G__49322;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48829 = conformed_args__47356__auto__;
var map__48829__$1 = cljs.core.__destructure_map(map__48829);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq48828){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48828));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49323 = arguments.length;
var i__5767__auto___49324 = (0);
while(true){
if((i__5767__auto___49324 < len__5766__auto___49323)){
args__5772__auto__.push((arguments[i__5767__auto___49324]));

var G__49325 = (i__5767__auto___49324 + (1));
i__5767__auto___49324 = G__49325;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48831 = conformed_args__47356__auto__;
var map__48831__$1 = cljs.core.__destructure_map(map__48831);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48831__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48831__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48831__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq48830){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48830));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49326 = arguments.length;
var i__5767__auto___49327 = (0);
while(true){
if((i__5767__auto___49327 < len__5766__auto___49326)){
args__5772__auto__.push((arguments[i__5767__auto___49327]));

var G__49328 = (i__5767__auto___49327 + (1));
i__5767__auto___49327 = G__49328;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48833 = conformed_args__47356__auto__;
var map__48833__$1 = cljs.core.__destructure_map(map__48833);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq48832){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48832));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49329 = arguments.length;
var i__5767__auto___49330 = (0);
while(true){
if((i__5767__auto___49330 < len__5766__auto___49329)){
args__5772__auto__.push((arguments[i__5767__auto___49330]));

var G__49331 = (i__5767__auto___49330 + (1));
i__5767__auto___49330 = G__49331;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48835 = conformed_args__47356__auto__;
var map__48835__$1 = cljs.core.__destructure_map(map__48835);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48835__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48835__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48835__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq48834){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48834));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49332 = arguments.length;
var i__5767__auto___49333 = (0);
while(true){
if((i__5767__auto___49333 < len__5766__auto___49332)){
args__5772__auto__.push((arguments[i__5767__auto___49333]));

var G__49334 = (i__5767__auto___49333 + (1));
i__5767__auto___49333 = G__49334;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48837 = conformed_args__47356__auto__;
var map__48837__$1 = cljs.core.__destructure_map(map__48837);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48837__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48837__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48837__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq48836){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48836));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49335 = arguments.length;
var i__5767__auto___49336 = (0);
while(true){
if((i__5767__auto___49336 < len__5766__auto___49335)){
args__5772__auto__.push((arguments[i__5767__auto___49336]));

var G__49337 = (i__5767__auto___49336 + (1));
i__5767__auto___49336 = G__49337;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48839 = conformed_args__47356__auto__;
var map__48839__$1 = cljs.core.__destructure_map(map__48839);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq48838){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48838));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49338 = arguments.length;
var i__5767__auto___49339 = (0);
while(true){
if((i__5767__auto___49339 < len__5766__auto___49338)){
args__5772__auto__.push((arguments[i__5767__auto___49339]));

var G__49340 = (i__5767__auto___49339 + (1));
i__5767__auto___49339 = G__49340;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48841 = conformed_args__47356__auto__;
var map__48841__$1 = cljs.core.__destructure_map(map__48841);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48841__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48841__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48841__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq48840){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48840));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49341 = arguments.length;
var i__5767__auto___49342 = (0);
while(true){
if((i__5767__auto___49342 < len__5766__auto___49341)){
args__5772__auto__.push((arguments[i__5767__auto___49342]));

var G__49343 = (i__5767__auto___49342 + (1));
i__5767__auto___49342 = G__49343;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48843 = conformed_args__47356__auto__;
var map__48843__$1 = cljs.core.__destructure_map(map__48843);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48843__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48843__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48843__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq48842){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48842));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49344 = arguments.length;
var i__5767__auto___49345 = (0);
while(true){
if((i__5767__auto___49345 < len__5766__auto___49344)){
args__5772__auto__.push((arguments[i__5767__auto___49345]));

var G__49346 = (i__5767__auto___49345 + (1));
i__5767__auto___49345 = G__49346;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48845 = conformed_args__47356__auto__;
var map__48845__$1 = cljs.core.__destructure_map(map__48845);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48845__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48845__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48845__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq48844){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48844));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49347 = arguments.length;
var i__5767__auto___49348 = (0);
while(true){
if((i__5767__auto___49348 < len__5766__auto___49347)){
args__5772__auto__.push((arguments[i__5767__auto___49348]));

var G__49349 = (i__5767__auto___49348 + (1));
i__5767__auto___49348 = G__49349;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48847 = conformed_args__47356__auto__;
var map__48847__$1 = cljs.core.__destructure_map(map__48847);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48847__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48847__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48847__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq48846){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48846));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49350 = arguments.length;
var i__5767__auto___49351 = (0);
while(true){
if((i__5767__auto___49351 < len__5766__auto___49350)){
args__5772__auto__.push((arguments[i__5767__auto___49351]));

var G__49352 = (i__5767__auto___49351 + (1));
i__5767__auto___49351 = G__49352;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48849 = conformed_args__47356__auto__;
var map__48849__$1 = cljs.core.__destructure_map(map__48849);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48849__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48849__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq48848){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48848));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49353 = arguments.length;
var i__5767__auto___49354 = (0);
while(true){
if((i__5767__auto___49354 < len__5766__auto___49353)){
args__5772__auto__.push((arguments[i__5767__auto___49354]));

var G__49355 = (i__5767__auto___49354 + (1));
i__5767__auto___49354 = G__49355;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48851 = conformed_args__47356__auto__;
var map__48851__$1 = cljs.core.__destructure_map(map__48851);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48851__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48851__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq48850){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48850));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49356 = arguments.length;
var i__5767__auto___49357 = (0);
while(true){
if((i__5767__auto___49357 < len__5766__auto___49356)){
args__5772__auto__.push((arguments[i__5767__auto___49357]));

var G__49358 = (i__5767__auto___49357 + (1));
i__5767__auto___49357 = G__49358;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48853 = conformed_args__47356__auto__;
var map__48853__$1 = cljs.core.__destructure_map(map__48853);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq48852){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48852));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49359 = arguments.length;
var i__5767__auto___49360 = (0);
while(true){
if((i__5767__auto___49360 < len__5766__auto___49359)){
args__5772__auto__.push((arguments[i__5767__auto___49360]));

var G__49361 = (i__5767__auto___49360 + (1));
i__5767__auto___49360 = G__49361;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48855 = conformed_args__47356__auto__;
var map__48855__$1 = cljs.core.__destructure_map(map__48855);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq48854){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48854));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49362 = arguments.length;
var i__5767__auto___49363 = (0);
while(true){
if((i__5767__auto___49363 < len__5766__auto___49362)){
args__5772__auto__.push((arguments[i__5767__auto___49363]));

var G__49364 = (i__5767__auto___49363 + (1));
i__5767__auto___49363 = G__49364;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48857 = conformed_args__47356__auto__;
var map__48857__$1 = cljs.core.__destructure_map(map__48857);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48857__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48857__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48857__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq48856){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48856));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49365 = arguments.length;
var i__5767__auto___49366 = (0);
while(true){
if((i__5767__auto___49366 < len__5766__auto___49365)){
args__5772__auto__.push((arguments[i__5767__auto___49366]));

var G__49367 = (i__5767__auto___49366 + (1));
i__5767__auto___49366 = G__49367;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48859 = conformed_args__47356__auto__;
var map__48859__$1 = cljs.core.__destructure_map(map__48859);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48859__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48859__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq48858){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48858));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49368 = arguments.length;
var i__5767__auto___49369 = (0);
while(true){
if((i__5767__auto___49369 < len__5766__auto___49368)){
args__5772__auto__.push((arguments[i__5767__auto___49369]));

var G__49370 = (i__5767__auto___49369 + (1));
i__5767__auto___49369 = G__49370;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48861 = conformed_args__47356__auto__;
var map__48861__$1 = cljs.core.__destructure_map(map__48861);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48861__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48861__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48861__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq48860){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48860));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49371 = arguments.length;
var i__5767__auto___49372 = (0);
while(true){
if((i__5767__auto___49372 < len__5766__auto___49371)){
args__5772__auto__.push((arguments[i__5767__auto___49372]));

var G__49373 = (i__5767__auto___49372 + (1));
i__5767__auto___49372 = G__49373;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48863 = conformed_args__47356__auto__;
var map__48863__$1 = cljs.core.__destructure_map(map__48863);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq48862){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48862));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49374 = arguments.length;
var i__5767__auto___49375 = (0);
while(true){
if((i__5767__auto___49375 < len__5766__auto___49374)){
args__5772__auto__.push((arguments[i__5767__auto___49375]));

var G__49376 = (i__5767__auto___49375 + (1));
i__5767__auto___49375 = G__49376;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48865 = conformed_args__47356__auto__;
var map__48865__$1 = cljs.core.__destructure_map(map__48865);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48865__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48865__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48865__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq48864){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48864));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49377 = arguments.length;
var i__5767__auto___49378 = (0);
while(true){
if((i__5767__auto___49378 < len__5766__auto___49377)){
args__5772__auto__.push((arguments[i__5767__auto___49378]));

var G__49379 = (i__5767__auto___49378 + (1));
i__5767__auto___49378 = G__49379;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48867 = conformed_args__47356__auto__;
var map__48867__$1 = cljs.core.__destructure_map(map__48867);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48867__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48867__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48867__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq48866){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48866));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49380 = arguments.length;
var i__5767__auto___49381 = (0);
while(true){
if((i__5767__auto___49381 < len__5766__auto___49380)){
args__5772__auto__.push((arguments[i__5767__auto___49381]));

var G__49382 = (i__5767__auto___49381 + (1));
i__5767__auto___49381 = G__49382;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48869 = conformed_args__47356__auto__;
var map__48869__$1 = cljs.core.__destructure_map(map__48869);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48869__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48869__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48869__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq48868){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48868));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49383 = arguments.length;
var i__5767__auto___49384 = (0);
while(true){
if((i__5767__auto___49384 < len__5766__auto___49383)){
args__5772__auto__.push((arguments[i__5767__auto___49384]));

var G__49385 = (i__5767__auto___49384 + (1));
i__5767__auto___49384 = G__49385;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48871 = conformed_args__47356__auto__;
var map__48871__$1 = cljs.core.__destructure_map(map__48871);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48871__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48871__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48871__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq48870){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48870));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49386 = arguments.length;
var i__5767__auto___49387 = (0);
while(true){
if((i__5767__auto___49387 < len__5766__auto___49386)){
args__5772__auto__.push((arguments[i__5767__auto___49387]));

var G__49388 = (i__5767__auto___49387 + (1));
i__5767__auto___49387 = G__49388;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48873 = conformed_args__47356__auto__;
var map__48873__$1 = cljs.core.__destructure_map(map__48873);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48873__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48873__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48873__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq48872){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48872));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49389 = arguments.length;
var i__5767__auto___49390 = (0);
while(true){
if((i__5767__auto___49390 < len__5766__auto___49389)){
args__5772__auto__.push((arguments[i__5767__auto___49390]));

var G__49391 = (i__5767__auto___49390 + (1));
i__5767__auto___49390 = G__49391;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48875 = conformed_args__47356__auto__;
var map__48875__$1 = cljs.core.__destructure_map(map__48875);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48875__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48875__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48875__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq48874){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48874));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49392 = arguments.length;
var i__5767__auto___49393 = (0);
while(true){
if((i__5767__auto___49393 < len__5766__auto___49392)){
args__5772__auto__.push((arguments[i__5767__auto___49393]));

var G__49394 = (i__5767__auto___49393 + (1));
i__5767__auto___49393 = G__49394;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48877 = conformed_args__47356__auto__;
var map__48877__$1 = cljs.core.__destructure_map(map__48877);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq48876){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48876));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49395 = arguments.length;
var i__5767__auto___49396 = (0);
while(true){
if((i__5767__auto___49396 < len__5766__auto___49395)){
args__5772__auto__.push((arguments[i__5767__auto___49396]));

var G__49397 = (i__5767__auto___49396 + (1));
i__5767__auto___49396 = G__49397;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48879 = conformed_args__47356__auto__;
var map__48879__$1 = cljs.core.__destructure_map(map__48879);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48879__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48879__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48879__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq48878){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48878));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49398 = arguments.length;
var i__5767__auto___49399 = (0);
while(true){
if((i__5767__auto___49399 < len__5766__auto___49398)){
args__5772__auto__.push((arguments[i__5767__auto___49399]));

var G__49400 = (i__5767__auto___49399 + (1));
i__5767__auto___49399 = G__49400;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48881 = conformed_args__47356__auto__;
var map__48881__$1 = cljs.core.__destructure_map(map__48881);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48881__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48881__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48881__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq48880){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48880));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49401 = arguments.length;
var i__5767__auto___49402 = (0);
while(true){
if((i__5767__auto___49402 < len__5766__auto___49401)){
args__5772__auto__.push((arguments[i__5767__auto___49402]));

var G__49403 = (i__5767__auto___49402 + (1));
i__5767__auto___49402 = G__49403;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48883 = conformed_args__47356__auto__;
var map__48883__$1 = cljs.core.__destructure_map(map__48883);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48883__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48883__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48883__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq48882){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48882));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49404 = arguments.length;
var i__5767__auto___49405 = (0);
while(true){
if((i__5767__auto___49405 < len__5766__auto___49404)){
args__5772__auto__.push((arguments[i__5767__auto___49405]));

var G__49406 = (i__5767__auto___49405 + (1));
i__5767__auto___49405 = G__49406;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48885 = conformed_args__47356__auto__;
var map__48885__$1 = cljs.core.__destructure_map(map__48885);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48885__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48885__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48885__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq48884){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48884));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49407 = arguments.length;
var i__5767__auto___49408 = (0);
while(true){
if((i__5767__auto___49408 < len__5766__auto___49407)){
args__5772__auto__.push((arguments[i__5767__auto___49408]));

var G__49409 = (i__5767__auto___49408 + (1));
i__5767__auto___49408 = G__49409;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48887 = conformed_args__47356__auto__;
var map__48887__$1 = cljs.core.__destructure_map(map__48887);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq48886){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48886));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49410 = arguments.length;
var i__5767__auto___49411 = (0);
while(true){
if((i__5767__auto___49411 < len__5766__auto___49410)){
args__5772__auto__.push((arguments[i__5767__auto___49411]));

var G__49412 = (i__5767__auto___49411 + (1));
i__5767__auto___49411 = G__49412;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48889 = conformed_args__47356__auto__;
var map__48889__$1 = cljs.core.__destructure_map(map__48889);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48889__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48889__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48889__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq48888){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48888));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49413 = arguments.length;
var i__5767__auto___49414 = (0);
while(true){
if((i__5767__auto___49414 < len__5766__auto___49413)){
args__5772__auto__.push((arguments[i__5767__auto___49414]));

var G__49415 = (i__5767__auto___49414 + (1));
i__5767__auto___49414 = G__49415;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48891 = conformed_args__47356__auto__;
var map__48891__$1 = cljs.core.__destructure_map(map__48891);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq48890){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48890));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49416 = arguments.length;
var i__5767__auto___49417 = (0);
while(true){
if((i__5767__auto___49417 < len__5766__auto___49416)){
args__5772__auto__.push((arguments[i__5767__auto___49417]));

var G__49418 = (i__5767__auto___49417 + (1));
i__5767__auto___49417 = G__49418;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48893 = conformed_args__47356__auto__;
var map__48893__$1 = cljs.core.__destructure_map(map__48893);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq48892){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48892));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49419 = arguments.length;
var i__5767__auto___49420 = (0);
while(true){
if((i__5767__auto___49420 < len__5766__auto___49419)){
args__5772__auto__.push((arguments[i__5767__auto___49420]));

var G__49421 = (i__5767__auto___49420 + (1));
i__5767__auto___49420 = G__49421;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48895 = conformed_args__47356__auto__;
var map__48895__$1 = cljs.core.__destructure_map(map__48895);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq48894){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48894));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49422 = arguments.length;
var i__5767__auto___49423 = (0);
while(true){
if((i__5767__auto___49423 < len__5766__auto___49422)){
args__5772__auto__.push((arguments[i__5767__auto___49423]));

var G__49424 = (i__5767__auto___49423 + (1));
i__5767__auto___49423 = G__49424;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48897 = conformed_args__47356__auto__;
var map__48897__$1 = cljs.core.__destructure_map(map__48897);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48897__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48897__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48897__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq48896){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48896));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49425 = arguments.length;
var i__5767__auto___49426 = (0);
while(true){
if((i__5767__auto___49426 < len__5766__auto___49425)){
args__5772__auto__.push((arguments[i__5767__auto___49426]));

var G__49427 = (i__5767__auto___49426 + (1));
i__5767__auto___49426 = G__49427;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48899 = conformed_args__47356__auto__;
var map__48899__$1 = cljs.core.__destructure_map(map__48899);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48899__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48899__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48899__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq48898){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48898));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49428 = arguments.length;
var i__5767__auto___49429 = (0);
while(true){
if((i__5767__auto___49429 < len__5766__auto___49428)){
args__5772__auto__.push((arguments[i__5767__auto___49429]));

var G__49430 = (i__5767__auto___49429 + (1));
i__5767__auto___49429 = G__49430;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48901 = conformed_args__47356__auto__;
var map__48901__$1 = cljs.core.__destructure_map(map__48901);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq48900){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48900));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49431 = arguments.length;
var i__5767__auto___49432 = (0);
while(true){
if((i__5767__auto___49432 < len__5766__auto___49431)){
args__5772__auto__.push((arguments[i__5767__auto___49432]));

var G__49433 = (i__5767__auto___49432 + (1));
i__5767__auto___49432 = G__49433;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48903 = conformed_args__47356__auto__;
var map__48903__$1 = cljs.core.__destructure_map(map__48903);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48903__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48903__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48903__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq48902){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48902));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49434 = arguments.length;
var i__5767__auto___49435 = (0);
while(true){
if((i__5767__auto___49435 < len__5766__auto___49434)){
args__5772__auto__.push((arguments[i__5767__auto___49435]));

var G__49436 = (i__5767__auto___49435 + (1));
i__5767__auto___49435 = G__49436;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48905 = conformed_args__47356__auto__;
var map__48905__$1 = cljs.core.__destructure_map(map__48905);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48905__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48905__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48905__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq48904){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48904));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49437 = arguments.length;
var i__5767__auto___49438 = (0);
while(true){
if((i__5767__auto___49438 < len__5766__auto___49437)){
args__5772__auto__.push((arguments[i__5767__auto___49438]));

var G__49439 = (i__5767__auto___49438 + (1));
i__5767__auto___49438 = G__49439;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48907 = conformed_args__47356__auto__;
var map__48907__$1 = cljs.core.__destructure_map(map__48907);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48907__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48907__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48907__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq48906){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48906));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49440 = arguments.length;
var i__5767__auto___49441 = (0);
while(true){
if((i__5767__auto___49441 < len__5766__auto___49440)){
args__5772__auto__.push((arguments[i__5767__auto___49441]));

var G__49442 = (i__5767__auto___49441 + (1));
i__5767__auto___49441 = G__49442;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48909 = conformed_args__47356__auto__;
var map__48909__$1 = cljs.core.__destructure_map(map__48909);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48909__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48909__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48909__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq48908){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48908));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49443 = arguments.length;
var i__5767__auto___49444 = (0);
while(true){
if((i__5767__auto___49444 < len__5766__auto___49443)){
args__5772__auto__.push((arguments[i__5767__auto___49444]));

var G__49445 = (i__5767__auto___49444 + (1));
i__5767__auto___49444 = G__49445;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48911 = conformed_args__47356__auto__;
var map__48911__$1 = cljs.core.__destructure_map(map__48911);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48911__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48911__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48911__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq48910){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48910));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49446 = arguments.length;
var i__5767__auto___49447 = (0);
while(true){
if((i__5767__auto___49447 < len__5766__auto___49446)){
args__5772__auto__.push((arguments[i__5767__auto___49447]));

var G__49448 = (i__5767__auto___49447 + (1));
i__5767__auto___49447 = G__49448;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48913 = conformed_args__47356__auto__;
var map__48913__$1 = cljs.core.__destructure_map(map__48913);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48913__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48913__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48913__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq48912){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48912));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49449 = arguments.length;
var i__5767__auto___49450 = (0);
while(true){
if((i__5767__auto___49450 < len__5766__auto___49449)){
args__5772__auto__.push((arguments[i__5767__auto___49450]));

var G__49451 = (i__5767__auto___49450 + (1));
i__5767__auto___49450 = G__49451;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48915 = conformed_args__47356__auto__;
var map__48915__$1 = cljs.core.__destructure_map(map__48915);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48915__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48915__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48915__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq48914){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48914));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49452 = arguments.length;
var i__5767__auto___49453 = (0);
while(true){
if((i__5767__auto___49453 < len__5766__auto___49452)){
args__5772__auto__.push((arguments[i__5767__auto___49453]));

var G__49454 = (i__5767__auto___49453 + (1));
i__5767__auto___49453 = G__49454;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48917 = conformed_args__47356__auto__;
var map__48917__$1 = cljs.core.__destructure_map(map__48917);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48917__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48917__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48917__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq48916){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48916));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49455 = arguments.length;
var i__5767__auto___49456 = (0);
while(true){
if((i__5767__auto___49456 < len__5766__auto___49455)){
args__5772__auto__.push((arguments[i__5767__auto___49456]));

var G__49457 = (i__5767__auto___49456 + (1));
i__5767__auto___49456 = G__49457;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48919 = conformed_args__47356__auto__;
var map__48919__$1 = cljs.core.__destructure_map(map__48919);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq48918){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48918));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49458 = arguments.length;
var i__5767__auto___49459 = (0);
while(true){
if((i__5767__auto___49459 < len__5766__auto___49458)){
args__5772__auto__.push((arguments[i__5767__auto___49459]));

var G__49460 = (i__5767__auto___49459 + (1));
i__5767__auto___49459 = G__49460;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48921 = conformed_args__47356__auto__;
var map__48921__$1 = cljs.core.__destructure_map(map__48921);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48921__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48921__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48921__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq48920){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48920));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49461 = arguments.length;
var i__5767__auto___49462 = (0);
while(true){
if((i__5767__auto___49462 < len__5766__auto___49461)){
args__5772__auto__.push((arguments[i__5767__auto___49462]));

var G__49463 = (i__5767__auto___49462 + (1));
i__5767__auto___49462 = G__49463;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48923 = conformed_args__47356__auto__;
var map__48923__$1 = cljs.core.__destructure_map(map__48923);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48923__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48923__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48923__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq48922){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48922));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49464 = arguments.length;
var i__5767__auto___49465 = (0);
while(true){
if((i__5767__auto___49465 < len__5766__auto___49464)){
args__5772__auto__.push((arguments[i__5767__auto___49465]));

var G__49466 = (i__5767__auto___49465 + (1));
i__5767__auto___49465 = G__49466;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48925 = conformed_args__47356__auto__;
var map__48925__$1 = cljs.core.__destructure_map(map__48925);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48925__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48925__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48925__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq48924){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48924));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49467 = arguments.length;
var i__5767__auto___49468 = (0);
while(true){
if((i__5767__auto___49468 < len__5766__auto___49467)){
args__5772__auto__.push((arguments[i__5767__auto___49468]));

var G__49469 = (i__5767__auto___49468 + (1));
i__5767__auto___49468 = G__49469;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48927 = conformed_args__47356__auto__;
var map__48927__$1 = cljs.core.__destructure_map(map__48927);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48927__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48927__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48927__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq48926){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48926));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49470 = arguments.length;
var i__5767__auto___49471 = (0);
while(true){
if((i__5767__auto___49471 < len__5766__auto___49470)){
args__5772__auto__.push((arguments[i__5767__auto___49471]));

var G__49472 = (i__5767__auto___49471 + (1));
i__5767__auto___49471 = G__49472;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48929 = conformed_args__47356__auto__;
var map__48929__$1 = cljs.core.__destructure_map(map__48929);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48929__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48929__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48929__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq48928){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48928));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49473 = arguments.length;
var i__5767__auto___49474 = (0);
while(true){
if((i__5767__auto___49474 < len__5766__auto___49473)){
args__5772__auto__.push((arguments[i__5767__auto___49474]));

var G__49475 = (i__5767__auto___49474 + (1));
i__5767__auto___49474 = G__49475;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48931 = conformed_args__47356__auto__;
var map__48931__$1 = cljs.core.__destructure_map(map__48931);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48931__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48931__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48931__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq48930){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48930));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49476 = arguments.length;
var i__5767__auto___49477 = (0);
while(true){
if((i__5767__auto___49477 < len__5766__auto___49476)){
args__5772__auto__.push((arguments[i__5767__auto___49477]));

var G__49478 = (i__5767__auto___49477 + (1));
i__5767__auto___49477 = G__49478;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48933 = conformed_args__47356__auto__;
var map__48933__$1 = cljs.core.__destructure_map(map__48933);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq48932){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48932));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49479 = arguments.length;
var i__5767__auto___49480 = (0);
while(true){
if((i__5767__auto___49480 < len__5766__auto___49479)){
args__5772__auto__.push((arguments[i__5767__auto___49480]));

var G__49481 = (i__5767__auto___49480 + (1));
i__5767__auto___49480 = G__49481;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48935 = conformed_args__47356__auto__;
var map__48935__$1 = cljs.core.__destructure_map(map__48935);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48935__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48935__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48935__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq48934){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48934));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49482 = arguments.length;
var i__5767__auto___49483 = (0);
while(true){
if((i__5767__auto___49483 < len__5766__auto___49482)){
args__5772__auto__.push((arguments[i__5767__auto___49483]));

var G__49484 = (i__5767__auto___49483 + (1));
i__5767__auto___49483 = G__49484;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48937 = conformed_args__47356__auto__;
var map__48937__$1 = cljs.core.__destructure_map(map__48937);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq48936){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48936));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49485 = arguments.length;
var i__5767__auto___49486 = (0);
while(true){
if((i__5767__auto___49486 < len__5766__auto___49485)){
args__5772__auto__.push((arguments[i__5767__auto___49486]));

var G__49487 = (i__5767__auto___49486 + (1));
i__5767__auto___49486 = G__49487;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48939 = conformed_args__47356__auto__;
var map__48939__$1 = cljs.core.__destructure_map(map__48939);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48939__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq48938){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48938));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49488 = arguments.length;
var i__5767__auto___49489 = (0);
while(true){
if((i__5767__auto___49489 < len__5766__auto___49488)){
args__5772__auto__.push((arguments[i__5767__auto___49489]));

var G__49490 = (i__5767__auto___49489 + (1));
i__5767__auto___49489 = G__49490;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48941 = conformed_args__47356__auto__;
var map__48941__$1 = cljs.core.__destructure_map(map__48941);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48941__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48941__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq48940){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48940));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49491 = arguments.length;
var i__5767__auto___49492 = (0);
while(true){
if((i__5767__auto___49492 < len__5766__auto___49491)){
args__5772__auto__.push((arguments[i__5767__auto___49492]));

var G__49493 = (i__5767__auto___49492 + (1));
i__5767__auto___49492 = G__49493;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48943 = conformed_args__47356__auto__;
var map__48943__$1 = cljs.core.__destructure_map(map__48943);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48943__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq48942){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48942));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49494 = arguments.length;
var i__5767__auto___49495 = (0);
while(true){
if((i__5767__auto___49495 < len__5766__auto___49494)){
args__5772__auto__.push((arguments[i__5767__auto___49495]));

var G__49496 = (i__5767__auto___49495 + (1));
i__5767__auto___49495 = G__49496;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48945 = conformed_args__47356__auto__;
var map__48945__$1 = cljs.core.__destructure_map(map__48945);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq48944){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48944));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49497 = arguments.length;
var i__5767__auto___49498 = (0);
while(true){
if((i__5767__auto___49498 < len__5766__auto___49497)){
args__5772__auto__.push((arguments[i__5767__auto___49498]));

var G__49499 = (i__5767__auto___49498 + (1));
i__5767__auto___49498 = G__49499;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48947 = conformed_args__47356__auto__;
var map__48947__$1 = cljs.core.__destructure_map(map__48947);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48947__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48947__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48947__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq48946){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48946));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49500 = arguments.length;
var i__5767__auto___49501 = (0);
while(true){
if((i__5767__auto___49501 < len__5766__auto___49500)){
args__5772__auto__.push((arguments[i__5767__auto___49501]));

var G__49502 = (i__5767__auto___49501 + (1));
i__5767__auto___49501 = G__49502;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48949 = conformed_args__47356__auto__;
var map__48949__$1 = cljs.core.__destructure_map(map__48949);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48949__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48949__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48949__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq48948){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48948));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49503 = arguments.length;
var i__5767__auto___49504 = (0);
while(true){
if((i__5767__auto___49504 < len__5766__auto___49503)){
args__5772__auto__.push((arguments[i__5767__auto___49504]));

var G__49505 = (i__5767__auto___49504 + (1));
i__5767__auto___49504 = G__49505;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48951 = conformed_args__47356__auto__;
var map__48951__$1 = cljs.core.__destructure_map(map__48951);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48951__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48951__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48951__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq48950){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48950));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49506 = arguments.length;
var i__5767__auto___49507 = (0);
while(true){
if((i__5767__auto___49507 < len__5766__auto___49506)){
args__5772__auto__.push((arguments[i__5767__auto___49507]));

var G__49508 = (i__5767__auto___49507 + (1));
i__5767__auto___49507 = G__49508;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48953 = conformed_args__47356__auto__;
var map__48953__$1 = cljs.core.__destructure_map(map__48953);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48953__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48953__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48953__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq48952){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48952));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49509 = arguments.length;
var i__5767__auto___49510 = (0);
while(true){
if((i__5767__auto___49510 < len__5766__auto___49509)){
args__5772__auto__.push((arguments[i__5767__auto___49510]));

var G__49511 = (i__5767__auto___49510 + (1));
i__5767__auto___49510 = G__49511;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48955 = conformed_args__47356__auto__;
var map__48955__$1 = cljs.core.__destructure_map(map__48955);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48955__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48955__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48955__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq48954){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48954));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49512 = arguments.length;
var i__5767__auto___49513 = (0);
while(true){
if((i__5767__auto___49513 < len__5766__auto___49512)){
args__5772__auto__.push((arguments[i__5767__auto___49513]));

var G__49514 = (i__5767__auto___49513 + (1));
i__5767__auto___49513 = G__49514;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48957 = conformed_args__47356__auto__;
var map__48957__$1 = cljs.core.__destructure_map(map__48957);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48957__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48957__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48957__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq48956){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48956));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49515 = arguments.length;
var i__5767__auto___49516 = (0);
while(true){
if((i__5767__auto___49516 < len__5766__auto___49515)){
args__5772__auto__.push((arguments[i__5767__auto___49516]));

var G__49517 = (i__5767__auto___49516 + (1));
i__5767__auto___49516 = G__49517;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48959 = conformed_args__47356__auto__;
var map__48959__$1 = cljs.core.__destructure_map(map__48959);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48959__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48959__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48959__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq48958){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48958));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49518 = arguments.length;
var i__5767__auto___49519 = (0);
while(true){
if((i__5767__auto___49519 < len__5766__auto___49518)){
args__5772__auto__.push((arguments[i__5767__auto___49519]));

var G__49520 = (i__5767__auto___49519 + (1));
i__5767__auto___49519 = G__49520;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48961 = conformed_args__47356__auto__;
var map__48961__$1 = cljs.core.__destructure_map(map__48961);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48961__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48961__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq48960){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48960));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49521 = arguments.length;
var i__5767__auto___49522 = (0);
while(true){
if((i__5767__auto___49522 < len__5766__auto___49521)){
args__5772__auto__.push((arguments[i__5767__auto___49522]));

var G__49523 = (i__5767__auto___49522 + (1));
i__5767__auto___49522 = G__49523;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48963 = conformed_args__47356__auto__;
var map__48963__$1 = cljs.core.__destructure_map(map__48963);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48963__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48963__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48963__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq48962){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48962));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49524 = arguments.length;
var i__5767__auto___49525 = (0);
while(true){
if((i__5767__auto___49525 < len__5766__auto___49524)){
args__5772__auto__.push((arguments[i__5767__auto___49525]));

var G__49526 = (i__5767__auto___49525 + (1));
i__5767__auto___49525 = G__49526;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48965 = conformed_args__47356__auto__;
var map__48965__$1 = cljs.core.__destructure_map(map__48965);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48965__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48965__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48965__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq48964){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48964));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49527 = arguments.length;
var i__5767__auto___49528 = (0);
while(true){
if((i__5767__auto___49528 < len__5766__auto___49527)){
args__5772__auto__.push((arguments[i__5767__auto___49528]));

var G__49529 = (i__5767__auto___49528 + (1));
i__5767__auto___49528 = G__49529;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48967 = conformed_args__47356__auto__;
var map__48967__$1 = cljs.core.__destructure_map(map__48967);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48967__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48967__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48967__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq48966){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48966));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49530 = arguments.length;
var i__5767__auto___49531 = (0);
while(true){
if((i__5767__auto___49531 < len__5766__auto___49530)){
args__5772__auto__.push((arguments[i__5767__auto___49531]));

var G__49532 = (i__5767__auto___49531 + (1));
i__5767__auto___49531 = G__49532;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48969 = conformed_args__47356__auto__;
var map__48969__$1 = cljs.core.__destructure_map(map__48969);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq48968){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48968));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49533 = arguments.length;
var i__5767__auto___49534 = (0);
while(true){
if((i__5767__auto___49534 < len__5766__auto___49533)){
args__5772__auto__.push((arguments[i__5767__auto___49534]));

var G__49535 = (i__5767__auto___49534 + (1));
i__5767__auto___49534 = G__49535;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48971 = conformed_args__47356__auto__;
var map__48971__$1 = cljs.core.__destructure_map(map__48971);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48971__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48971__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48971__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq48970){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48970));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49536 = arguments.length;
var i__5767__auto___49537 = (0);
while(true){
if((i__5767__auto___49537 < len__5766__auto___49536)){
args__5772__auto__.push((arguments[i__5767__auto___49537]));

var G__49538 = (i__5767__auto___49537 + (1));
i__5767__auto___49537 = G__49538;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48973 = conformed_args__47356__auto__;
var map__48973__$1 = cljs.core.__destructure_map(map__48973);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48973__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48973__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48973__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq48972){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48972));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49539 = arguments.length;
var i__5767__auto___49540 = (0);
while(true){
if((i__5767__auto___49540 < len__5766__auto___49539)){
args__5772__auto__.push((arguments[i__5767__auto___49540]));

var G__49541 = (i__5767__auto___49540 + (1));
i__5767__auto___49540 = G__49541;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48975 = conformed_args__47356__auto__;
var map__48975__$1 = cljs.core.__destructure_map(map__48975);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48975__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48975__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48975__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq48974){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48974));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49542 = arguments.length;
var i__5767__auto___49543 = (0);
while(true){
if((i__5767__auto___49543 < len__5766__auto___49542)){
args__5772__auto__.push((arguments[i__5767__auto___49543]));

var G__49544 = (i__5767__auto___49543 + (1));
i__5767__auto___49543 = G__49544;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48977 = conformed_args__47356__auto__;
var map__48977__$1 = cljs.core.__destructure_map(map__48977);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48977__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48977__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48977__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq48976){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48976));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49545 = arguments.length;
var i__5767__auto___49546 = (0);
while(true){
if((i__5767__auto___49546 < len__5766__auto___49545)){
args__5772__auto__.push((arguments[i__5767__auto___49546]));

var G__49547 = (i__5767__auto___49546 + (1));
i__5767__auto___49546 = G__49547;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48979 = conformed_args__47356__auto__;
var map__48979__$1 = cljs.core.__destructure_map(map__48979);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48979__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48979__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48979__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq48978){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48978));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49548 = arguments.length;
var i__5767__auto___49549 = (0);
while(true){
if((i__5767__auto___49549 < len__5766__auto___49548)){
args__5772__auto__.push((arguments[i__5767__auto___49549]));

var G__49550 = (i__5767__auto___49549 + (1));
i__5767__auto___49549 = G__49550;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48981 = conformed_args__47356__auto__;
var map__48981__$1 = cljs.core.__destructure_map(map__48981);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq48980){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48980));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49551 = arguments.length;
var i__5767__auto___49552 = (0);
while(true){
if((i__5767__auto___49552 < len__5766__auto___49551)){
args__5772__auto__.push((arguments[i__5767__auto___49552]));

var G__49553 = (i__5767__auto___49552 + (1));
i__5767__auto___49552 = G__49553;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48983 = conformed_args__47356__auto__;
var map__48983__$1 = cljs.core.__destructure_map(map__48983);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48983__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48983__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48983__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq48982){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48982));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49554 = arguments.length;
var i__5767__auto___49555 = (0);
while(true){
if((i__5767__auto___49555 < len__5766__auto___49554)){
args__5772__auto__.push((arguments[i__5767__auto___49555]));

var G__49556 = (i__5767__auto___49555 + (1));
i__5767__auto___49555 = G__49556;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48985 = conformed_args__47356__auto__;
var map__48985__$1 = cljs.core.__destructure_map(map__48985);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48985__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48985__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48985__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq48984){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48984));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49557 = arguments.length;
var i__5767__auto___49558 = (0);
while(true){
if((i__5767__auto___49558 < len__5766__auto___49557)){
args__5772__auto__.push((arguments[i__5767__auto___49558]));

var G__49559 = (i__5767__auto___49558 + (1));
i__5767__auto___49558 = G__49559;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48987 = conformed_args__47356__auto__;
var map__48987__$1 = cljs.core.__destructure_map(map__48987);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq48986){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48986));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49560 = arguments.length;
var i__5767__auto___49561 = (0);
while(true){
if((i__5767__auto___49561 < len__5766__auto___49560)){
args__5772__auto__.push((arguments[i__5767__auto___49561]));

var G__49562 = (i__5767__auto___49561 + (1));
i__5767__auto___49561 = G__49562;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48989 = conformed_args__47356__auto__;
var map__48989__$1 = cljs.core.__destructure_map(map__48989);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48989__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48989__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48989__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq48988){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48988));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49563 = arguments.length;
var i__5767__auto___49564 = (0);
while(true){
if((i__5767__auto___49564 < len__5766__auto___49563)){
args__5772__auto__.push((arguments[i__5767__auto___49564]));

var G__49565 = (i__5767__auto___49564 + (1));
i__5767__auto___49564 = G__49565;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48991 = conformed_args__47356__auto__;
var map__48991__$1 = cljs.core.__destructure_map(map__48991);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48991__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48991__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48991__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq48990){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48990));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49566 = arguments.length;
var i__5767__auto___49567 = (0);
while(true){
if((i__5767__auto___49567 < len__5766__auto___49566)){
args__5772__auto__.push((arguments[i__5767__auto___49567]));

var G__49568 = (i__5767__auto___49567 + (1));
i__5767__auto___49567 = G__49568;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48993 = conformed_args__47356__auto__;
var map__48993__$1 = cljs.core.__destructure_map(map__48993);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48993__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48993__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48993__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq48992){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48992));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49569 = arguments.length;
var i__5767__auto___49570 = (0);
while(true){
if((i__5767__auto___49570 < len__5766__auto___49569)){
args__5772__auto__.push((arguments[i__5767__auto___49570]));

var G__49571 = (i__5767__auto___49570 + (1));
i__5767__auto___49570 = G__49571;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48995 = conformed_args__47356__auto__;
var map__48995__$1 = cljs.core.__destructure_map(map__48995);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48995__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48995__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48995__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq48994){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48994));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49572 = arguments.length;
var i__5767__auto___49573 = (0);
while(true){
if((i__5767__auto___49573 < len__5766__auto___49572)){
args__5772__auto__.push((arguments[i__5767__auto___49573]));

var G__49574 = (i__5767__auto___49573 + (1));
i__5767__auto___49573 = G__49574;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48997 = conformed_args__47356__auto__;
var map__48997__$1 = cljs.core.__destructure_map(map__48997);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48997__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48997__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48997__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq48996){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48996));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49575 = arguments.length;
var i__5767__auto___49576 = (0);
while(true){
if((i__5767__auto___49576 < len__5766__auto___49575)){
args__5772__auto__.push((arguments[i__5767__auto___49576]));

var G__49577 = (i__5767__auto___49576 + (1));
i__5767__auto___49576 = G__49577;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48999 = conformed_args__47356__auto__;
var map__48999__$1 = cljs.core.__destructure_map(map__48999);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48999__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48999__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48999__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq48998){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48998));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49578 = arguments.length;
var i__5767__auto___49579 = (0);
while(true){
if((i__5767__auto___49579 < len__5766__auto___49578)){
args__5772__auto__.push((arguments[i__5767__auto___49579]));

var G__49580 = (i__5767__auto___49579 + (1));
i__5767__auto___49579 = G__49580;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49001 = conformed_args__47356__auto__;
var map__49001__$1 = cljs.core.__destructure_map(map__49001);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq49000){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49000));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49581 = arguments.length;
var i__5767__auto___49582 = (0);
while(true){
if((i__5767__auto___49582 < len__5766__auto___49581)){
args__5772__auto__.push((arguments[i__5767__auto___49582]));

var G__49583 = (i__5767__auto___49582 + (1));
i__5767__auto___49582 = G__49583;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49003 = conformed_args__47356__auto__;
var map__49003__$1 = cljs.core.__destructure_map(map__49003);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq49002){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49002));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49584 = arguments.length;
var i__5767__auto___49585 = (0);
while(true){
if((i__5767__auto___49585 < len__5766__auto___49584)){
args__5772__auto__.push((arguments[i__5767__auto___49585]));

var G__49586 = (i__5767__auto___49585 + (1));
i__5767__auto___49585 = G__49586;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49005 = conformed_args__47356__auto__;
var map__49005__$1 = cljs.core.__destructure_map(map__49005);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq49004){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49004));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49587 = arguments.length;
var i__5767__auto___49588 = (0);
while(true){
if((i__5767__auto___49588 < len__5766__auto___49587)){
args__5772__auto__.push((arguments[i__5767__auto___49588]));

var G__49589 = (i__5767__auto___49588 + (1));
i__5767__auto___49588 = G__49589;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49007 = conformed_args__47356__auto__;
var map__49007__$1 = cljs.core.__destructure_map(map__49007);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49007__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49007__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49007__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq49006){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49006));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49590 = arguments.length;
var i__5767__auto___49591 = (0);
while(true){
if((i__5767__auto___49591 < len__5766__auto___49590)){
args__5772__auto__.push((arguments[i__5767__auto___49591]));

var G__49592 = (i__5767__auto___49591 + (1));
i__5767__auto___49591 = G__49592;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49009 = conformed_args__47356__auto__;
var map__49009__$1 = cljs.core.__destructure_map(map__49009);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq49008){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49008));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49593 = arguments.length;
var i__5767__auto___49594 = (0);
while(true){
if((i__5767__auto___49594 < len__5766__auto___49593)){
args__5772__auto__.push((arguments[i__5767__auto___49594]));

var G__49595 = (i__5767__auto___49594 + (1));
i__5767__auto___49594 = G__49595;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49011 = conformed_args__47356__auto__;
var map__49011__$1 = cljs.core.__destructure_map(map__49011);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49011__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49011__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49011__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq49010){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49010));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49596 = arguments.length;
var i__5767__auto___49597 = (0);
while(true){
if((i__5767__auto___49597 < len__5766__auto___49596)){
args__5772__auto__.push((arguments[i__5767__auto___49597]));

var G__49598 = (i__5767__auto___49597 + (1));
i__5767__auto___49597 = G__49598;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49013 = conformed_args__47356__auto__;
var map__49013__$1 = cljs.core.__destructure_map(map__49013);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49013__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49013__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49013__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq49012){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49012));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49599 = arguments.length;
var i__5767__auto___49600 = (0);
while(true){
if((i__5767__auto___49600 < len__5766__auto___49599)){
args__5772__auto__.push((arguments[i__5767__auto___49600]));

var G__49601 = (i__5767__auto___49600 + (1));
i__5767__auto___49600 = G__49601;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49015 = conformed_args__47356__auto__;
var map__49015__$1 = cljs.core.__destructure_map(map__49015);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq49014){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49014));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49602 = arguments.length;
var i__5767__auto___49603 = (0);
while(true){
if((i__5767__auto___49603 < len__5766__auto___49602)){
args__5772__auto__.push((arguments[i__5767__auto___49603]));

var G__49604 = (i__5767__auto___49603 + (1));
i__5767__auto___49603 = G__49604;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49017 = conformed_args__47356__auto__;
var map__49017__$1 = cljs.core.__destructure_map(map__49017);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq49016){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49016));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49605 = arguments.length;
var i__5767__auto___49606 = (0);
while(true){
if((i__5767__auto___49606 < len__5766__auto___49605)){
args__5772__auto__.push((arguments[i__5767__auto___49606]));

var G__49607 = (i__5767__auto___49606 + (1));
i__5767__auto___49606 = G__49607;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49019 = conformed_args__47356__auto__;
var map__49019__$1 = cljs.core.__destructure_map(map__49019);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49019__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49019__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49019__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq49018){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49018));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49608 = arguments.length;
var i__5767__auto___49609 = (0);
while(true){
if((i__5767__auto___49609 < len__5766__auto___49608)){
args__5772__auto__.push((arguments[i__5767__auto___49609]));

var G__49610 = (i__5767__auto___49609 + (1));
i__5767__auto___49609 = G__49610;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49021 = conformed_args__47356__auto__;
var map__49021__$1 = cljs.core.__destructure_map(map__49021);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49021__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49021__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq49020){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49020));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49611 = arguments.length;
var i__5767__auto___49612 = (0);
while(true){
if((i__5767__auto___49612 < len__5766__auto___49611)){
args__5772__auto__.push((arguments[i__5767__auto___49612]));

var G__49613 = (i__5767__auto___49612 + (1));
i__5767__auto___49612 = G__49613;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49023 = conformed_args__47356__auto__;
var map__49023__$1 = cljs.core.__destructure_map(map__49023);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49023__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49023__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49023__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq49022){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49022));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49614 = arguments.length;
var i__5767__auto___49615 = (0);
while(true){
if((i__5767__auto___49615 < len__5766__auto___49614)){
args__5772__auto__.push((arguments[i__5767__auto___49615]));

var G__49616 = (i__5767__auto___49615 + (1));
i__5767__auto___49615 = G__49616;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49025 = conformed_args__47356__auto__;
var map__49025__$1 = cljs.core.__destructure_map(map__49025);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49025__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49025__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49025__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq49024){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49024));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49617 = arguments.length;
var i__5767__auto___49618 = (0);
while(true){
if((i__5767__auto___49618 < len__5766__auto___49617)){
args__5772__auto__.push((arguments[i__5767__auto___49618]));

var G__49619 = (i__5767__auto___49618 + (1));
i__5767__auto___49618 = G__49619;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49027 = conformed_args__47356__auto__;
var map__49027__$1 = cljs.core.__destructure_map(map__49027);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49027__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49027__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49027__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq49026){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49026));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49620 = arguments.length;
var i__5767__auto___49621 = (0);
while(true){
if((i__5767__auto___49621 < len__5766__auto___49620)){
args__5772__auto__.push((arguments[i__5767__auto___49621]));

var G__49622 = (i__5767__auto___49621 + (1));
i__5767__auto___49621 = G__49622;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49029 = conformed_args__47356__auto__;
var map__49029__$1 = cljs.core.__destructure_map(map__49029);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49029__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49029__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49029__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq49028){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49028));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49623 = arguments.length;
var i__5767__auto___49624 = (0);
while(true){
if((i__5767__auto___49624 < len__5766__auto___49623)){
args__5772__auto__.push((arguments[i__5767__auto___49624]));

var G__49625 = (i__5767__auto___49624 + (1));
i__5767__auto___49624 = G__49625;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49031 = conformed_args__47356__auto__;
var map__49031__$1 = cljs.core.__destructure_map(map__49031);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49031__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49031__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49031__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq49030){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49030));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49626 = arguments.length;
var i__5767__auto___49627 = (0);
while(true){
if((i__5767__auto___49627 < len__5766__auto___49626)){
args__5772__auto__.push((arguments[i__5767__auto___49627]));

var G__49628 = (i__5767__auto___49627 + (1));
i__5767__auto___49627 = G__49628;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49033 = conformed_args__47356__auto__;
var map__49033__$1 = cljs.core.__destructure_map(map__49033);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49033__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49033__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49033__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq49032){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49032));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49629 = arguments.length;
var i__5767__auto___49630 = (0);
while(true){
if((i__5767__auto___49630 < len__5766__auto___49629)){
args__5772__auto__.push((arguments[i__5767__auto___49630]));

var G__49631 = (i__5767__auto___49630 + (1));
i__5767__auto___49630 = G__49631;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49035 = conformed_args__47356__auto__;
var map__49035__$1 = cljs.core.__destructure_map(map__49035);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq49034){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49034));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49632 = arguments.length;
var i__5767__auto___49633 = (0);
while(true){
if((i__5767__auto___49633 < len__5766__auto___49632)){
args__5772__auto__.push((arguments[i__5767__auto___49633]));

var G__49634 = (i__5767__auto___49633 + (1));
i__5767__auto___49633 = G__49634;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49037 = conformed_args__47356__auto__;
var map__49037__$1 = cljs.core.__destructure_map(map__49037);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq49036){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49036));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49635 = arguments.length;
var i__5767__auto___49636 = (0);
while(true){
if((i__5767__auto___49636 < len__5766__auto___49635)){
args__5772__auto__.push((arguments[i__5767__auto___49636]));

var G__49637 = (i__5767__auto___49636 + (1));
i__5767__auto___49636 = G__49637;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49039 = conformed_args__47356__auto__;
var map__49039__$1 = cljs.core.__destructure_map(map__49039);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49039__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49039__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49039__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq49038){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49038));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49638 = arguments.length;
var i__5767__auto___49639 = (0);
while(true){
if((i__5767__auto___49639 < len__5766__auto___49638)){
args__5772__auto__.push((arguments[i__5767__auto___49639]));

var G__49640 = (i__5767__auto___49639 + (1));
i__5767__auto___49639 = G__49640;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49041 = conformed_args__47356__auto__;
var map__49041__$1 = cljs.core.__destructure_map(map__49041);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49041__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49041__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq49040){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49040));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49641 = arguments.length;
var i__5767__auto___49642 = (0);
while(true){
if((i__5767__auto___49642 < len__5766__auto___49641)){
args__5772__auto__.push((arguments[i__5767__auto___49642]));

var G__49643 = (i__5767__auto___49642 + (1));
i__5767__auto___49642 = G__49643;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49043 = conformed_args__47356__auto__;
var map__49043__$1 = cljs.core.__destructure_map(map__49043);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49043__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49043__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49043__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq49042){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49042));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49644 = arguments.length;
var i__5767__auto___49645 = (0);
while(true){
if((i__5767__auto___49645 < len__5766__auto___49644)){
args__5772__auto__.push((arguments[i__5767__auto___49645]));

var G__49646 = (i__5767__auto___49645 + (1));
i__5767__auto___49645 = G__49646;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49045 = conformed_args__47356__auto__;
var map__49045__$1 = cljs.core.__destructure_map(map__49045);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49045__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49045__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49045__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq49044){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49044));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49647 = arguments.length;
var i__5767__auto___49648 = (0);
while(true){
if((i__5767__auto___49648 < len__5766__auto___49647)){
args__5772__auto__.push((arguments[i__5767__auto___49648]));

var G__49649 = (i__5767__auto___49648 + (1));
i__5767__auto___49648 = G__49649;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49047 = conformed_args__47356__auto__;
var map__49047__$1 = cljs.core.__destructure_map(map__49047);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49047__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49047__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49047__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq49046){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49046));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49650 = arguments.length;
var i__5767__auto___49651 = (0);
while(true){
if((i__5767__auto___49651 < len__5766__auto___49650)){
args__5772__auto__.push((arguments[i__5767__auto___49651]));

var G__49652 = (i__5767__auto___49651 + (1));
i__5767__auto___49651 = G__49652;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49049 = conformed_args__47356__auto__;
var map__49049__$1 = cljs.core.__destructure_map(map__49049);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49049__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49049__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49049__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq49048){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49048));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49653 = arguments.length;
var i__5767__auto___49654 = (0);
while(true){
if((i__5767__auto___49654 < len__5766__auto___49653)){
args__5772__auto__.push((arguments[i__5767__auto___49654]));

var G__49655 = (i__5767__auto___49654 + (1));
i__5767__auto___49654 = G__49655;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49051 = conformed_args__47356__auto__;
var map__49051__$1 = cljs.core.__destructure_map(map__49051);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq49050){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49050));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49656 = arguments.length;
var i__5767__auto___49657 = (0);
while(true){
if((i__5767__auto___49657 < len__5766__auto___49656)){
args__5772__auto__.push((arguments[i__5767__auto___49657]));

var G__49658 = (i__5767__auto___49657 + (1));
i__5767__auto___49657 = G__49658;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49053 = conformed_args__47356__auto__;
var map__49053__$1 = cljs.core.__destructure_map(map__49053);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49053__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49053__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq49052){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49052));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49659 = arguments.length;
var i__5767__auto___49660 = (0);
while(true){
if((i__5767__auto___49660 < len__5766__auto___49659)){
args__5772__auto__.push((arguments[i__5767__auto___49660]));

var G__49661 = (i__5767__auto___49660 + (1));
i__5767__auto___49660 = G__49661;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49055 = conformed_args__47356__auto__;
var map__49055__$1 = cljs.core.__destructure_map(map__49055);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49055__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49055__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq49054){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49054));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49662 = arguments.length;
var i__5767__auto___49663 = (0);
while(true){
if((i__5767__auto___49663 < len__5766__auto___49662)){
args__5772__auto__.push((arguments[i__5767__auto___49663]));

var G__49664 = (i__5767__auto___49663 + (1));
i__5767__auto___49663 = G__49664;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49057 = conformed_args__47356__auto__;
var map__49057__$1 = cljs.core.__destructure_map(map__49057);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49057__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49057__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49057__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq49056){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49056));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49665 = arguments.length;
var i__5767__auto___49666 = (0);
while(true){
if((i__5767__auto___49666 < len__5766__auto___49665)){
args__5772__auto__.push((arguments[i__5767__auto___49666]));

var G__49667 = (i__5767__auto___49666 + (1));
i__5767__auto___49666 = G__49667;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49059 = conformed_args__47356__auto__;
var map__49059__$1 = cljs.core.__destructure_map(map__49059);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq49058){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49058));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49668 = arguments.length;
var i__5767__auto___49669 = (0);
while(true){
if((i__5767__auto___49669 < len__5766__auto___49668)){
args__5772__auto__.push((arguments[i__5767__auto___49669]));

var G__49670 = (i__5767__auto___49669 + (1));
i__5767__auto___49669 = G__49670;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47356__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49061 = conformed_args__47356__auto__;
var map__49061__$1 = cljs.core.__destructure_map(map__49061);
var children__47358__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49061__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__47357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49061__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__47359__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49061__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47358__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47358__auto__);
var attrs_value__47360__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__47357__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47360__auto__], null),children__47358__auto____$1),css__47359__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq49060){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49060));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
