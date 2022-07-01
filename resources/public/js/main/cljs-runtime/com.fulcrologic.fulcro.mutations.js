goog.provide('com.fulcrologic.fulcro.mutations');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__46002){
return cljs.core.map_QMARK_(G__46002);
}),(function (G__46002){
return cljs.core.contains_QMARK_(G__46002,new cljs.core.Keyword(null,"app","app",-560961707));
})], null),(function (G__46002){
return ((cljs.core.map_QMARK_(G__46002)) && (cljs.core.contains_QMARK_(G__46002,new cljs.core.Keyword(null,"app","app",-560961707))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"app","app",-560961707)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Symbol("com.fulcrologic.fulcro.raw.components","component-class?","com.fulcrologic.fulcro.raw.components/component-class?",-1477501501,null),com.fulcrologic.fulcro.raw.components.component_class_QMARK_);

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
com.fulcrologic.fulcro.mutations.Mutation = (function (sym){
this.sym = sym;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.fulcrologic.fulcro.mutations.Mutation.prototype.call = (function (unused__11784__auto__){
var self__ = this;
var self__ = this;
var G__46010 = (arguments.length - (1));
switch (G__46010) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.apply = (function (self__,args46009){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46009)));
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var G__46011 = cljs.core.PersistentArrayMap.EMPTY;
return (this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(G__46011) : this$.call(null,G__46011));
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.cljs$core$IFn$_invoke$arity$1 = (function (args){
var self__ = this;
var this$ = this;
return (new cljs.core.List(null,self__.sym,(new cljs.core.List(null,args,null,(1),null)),(2),null));
}));

(com.fulcrologic.fulcro.mutations.Mutation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$type = true);

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$ctorStr = "com.fulcrologic.fulcro.mutations/Mutation");

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"com.fulcrologic.fulcro.mutations/Mutation");
}));

/**
 * Positional factory function for com.fulcrologic.fulcro.mutations/Mutation.
 */
com.fulcrologic.fulcro.mutations.__GT_Mutation = (function com$fulcrologic$fulcro$mutations$__GT_Mutation(sym){
return (new com.fulcrologic.fulcro.mutations.Mutation(sym));
});

/**
 * A handler for mutation network results that will place an error, if detected in env, on the data at `ref`.
 *   Errors are placed at `k` (defaults to `::m/mutation-error`).
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Swaps against app state and returns `env`.
 */
com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_ = (function com$fulcrologic$fulcro$mutations$update_errors_on_ui_component_BANG_(var_args){
var G__46019 = arguments.length;
switch (G__46019) {
case 1:
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (env){
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","mutation-error","com.fulcrologic.fulcro.mutations/mutation-error",1667800978));
}));

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,k){
var map__46020 = env;
var map__46020__$1 = cljs.core.__destructure_map(map__46020);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46020__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46020__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46020__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46020__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_(ref)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
if(cljs.core.truth_((function (){var G__46023 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(env);
return (remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46023) : remote_error_QMARK_.call(null,G__46023));
})())){
return cljs.core.assoc_in(s,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,k),result);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s,ref,cljs.core.dissoc,k);
}
}));
} else {
}

return env;
}));

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * When there is a `global-error-action` defined on the application, this function will checks for errors in the given
 *   mutation `env`. If any are found then it will call the global error action function with `env`.
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Always returns `env`.
 */
com.fulcrologic.fulcro.mutations.trigger_global_error_action_BANG_ = (function com$fulcrologic$fulcro$mutations$trigger_global_error_action_BANG_(env){
var map__46024 = env;
var map__46024__$1 = cljs.core.__destructure_map(map__46024);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46024__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46024__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var b2__33768__auto___46308 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-error-action","global-error-action",-924822372));
if(cljs.core.truth_(b2__33768__auto___46308)){
var global_error_action_46309 = b2__33768__auto___46308;
var b2__33768__auto___46310__$1 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_(b2__33768__auto___46310__$1)){
var remote_error_QMARK__46311 = b2__33768__auto___46310__$1;
var b2__33768__auto___46312__$2 = (remote_error_QMARK__46311.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK__46311.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK__46311.call(null,result));
if(cljs.core.truth_(b2__33768__auto___46312__$2)){
var __46313 = b2__33768__auto___46312__$2;
(global_error_action_46309.cljs$core$IFn$_invoke$arity$1 ? global_error_action_46309.cljs$core$IFn$_invoke$arity$1(env) : global_error_action_46309.call(null,env));
} else {
}
} else {
}
} else {
}

return env;
});
/**
 * Looks for network mutation result in `env`, checks it against the global definition of remote errors.  If there
 *   is an error and the mutation has defined an `error-action` section, then it calls it; otherwise, if the mutation
 *   has an `ok-action` it calls that.
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Returns env.
 */
com.fulcrologic.fulcro.mutations.dispatch_ok_error_actions_BANG_ = (function com$fulcrologic$fulcro$mutations$dispatch_ok_error_actions_BANG_(env){
var map__46025 = env;
var map__46025__$1 = cljs.core.__destructure_map(map__46025);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46025__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46025__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46025__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__46026 = dispatch;
var map__46026__$1 = cljs.core.__destructure_map(map__46026);
var ok_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46026__$1,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573));
var error_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46026__$1,new cljs.core.Keyword(null,"error-action","error-action",-1147840498));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
if(cljs.core.truth_(error_action)){
(error_action.cljs$core$IFn$_invoke$arity$1 ? error_action.cljs$core$IFn$_invoke$arity$1(env) : error_action.call(null,env));
} else {
}
} else {
if(cljs.core.truth_(ok_action)){
(ok_action.cljs$core$IFn$_invoke$arity$1 ? ok_action.cljs$core$IFn$_invoke$arity$1(env) : ok_action.call(null,env));
} else {
}
}

return env;
});
/**
 * Rewrites tempids in state and places a tempid->realid map into env for further use by the mutation actions.
 */
com.fulcrologic.fulcro.mutations.rewrite_tempids_BANG_ = (function com$fulcrologic$fulcro$mutations$rewrite_tempids_BANG_(env){
var map__46027 = env;
var map__46027__$1 = cljs.core.__destructure_map(map__46027);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46027__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46027__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__46028 = result;
var map__46028__$1 = cljs.core.__destructure_map(map__46028);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46028__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var rid__GT_tid = com.fulcrologic.fulcro.algorithms.tempid.result__GT_tempid__GT_realid(body);
com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids_BANG_(app__$1,body);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"tempid->realid","tempid->realid",1168652437),rid__GT_tid);
});
/**
 * If there is a successful result from the remote mutation in `env` this function will merge it with app state
 *   (if there was a mutation join query), and will also rewrite any tempid remaps that were returned
 *   in all of the possible locations they might be in both app database and runtime application state (e.g. network queues).
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Returns env.
 */
com.fulcrologic.fulcro.mutations.integrate_mutation_return_value_BANG_ = (function com$fulcrologic$fulcro$mutations$integrate_mutation_return_value_BANG_(env){
var map__46029 = env;
var map__46029__$1 = cljs.core.__destructure_map(map__46029);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46029__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46029__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46029__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var mutation_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46029__$1,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891));
var transmitted_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46029__$1,new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690));
var map__46030 = result;
var map__46030__$1 = cljs.core.__destructure_map(map__46030);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46030__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46030__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
var mark_query = (cljs.core.truth_(transmitted_ast)?com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(transmitted_ast):transaction);
var body__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = body;
if(cljs.core.truth_(and__5041__auto__)){
return mark_query;
} else {
return and__5041__auto__;
}
})())?com.fulcrologic.fulcro.algorithms.merge.mark_missing(body,mark_query):body);
var eql = (function (){var or__5043__auto__ = transaction;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var and__5041__auto__ = mutation_ast;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(mutation_ast,true)], null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return mark_query;
}
}
})();
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins,eql,body__$1);
}

return env;
});
/**
 * The default Fulcro result action for `defmutation`, which can be overridden when you create your `app/fulcro-app`.
 * 
 *   This function is the following composition of operations from this same namespace:
 * 
 * ```
 *   (-> env
 *  (update-errors-on-ui-component! ::mutation-error)
 *  (integrate-mutation-return-value!)
 *  (trigger-global-error-action!)
 *  (dispatch-ok-error-actions!))
 * ```
 * 
 *   This function returns `env`, so it can be used as part of the chain in your own definition of a "default"
 *   mutation result action.
 *   
 */
com.fulcrologic.fulcro.mutations.default_result_action_BANG_ = (function com$fulcrologic$fulcro$mutations$default_result_action_BANG_(env){
return com.fulcrologic.fulcro.mutations.dispatch_ok_error_actions_BANG_(com.fulcrologic.fulcro.mutations.trigger_global_error_action_BANG_(com.fulcrologic.fulcro.mutations.integrate_mutation_return_value_BANG_(com.fulcrologic.fulcro.mutations.rewrite_tempids_BANG_(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","mutation-error","com.fulcrologic.fulcro.mutations/mutation-error",1667800978))))));
});
com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_ = (function com$fulcrologic$fulcro$mutations$mutation_declaration_QMARK_(expr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.mutations.Mutation,cljs.core.type(expr));
});
/**
 * Return the real symbol (for mutation dispatch) of `mutation`, which can be a symbol (this function is then identity)
 * or a mutation-declaration.
 */
com.fulcrologic.fulcro.mutations.mutation_symbol = (function com$fulcrologic$fulcro$mutations$mutation_symbol(mutation){
if(com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_(mutation)){
return cljs.core.first((mutation.cljs$core$IFn$_invoke$arity$0 ? mutation.cljs$core$IFn$_invoke$arity$0() : mutation.call(null)));
} else {
return mutation;
}
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.mutations !== 'undefined') && (typeof com.fulcrologic.fulcro.mutations.mutate !== 'undefined')){
} else {
com.fulcrologic.fulcro.mutations.mutate = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46031 = cljs.core.get_global_hierarchy;
return (fexpr__46031.cljs$core$IFn$_invoke$arity$0 ? fexpr__46031.cljs$core$IFn$_invoke$arity$0() : fexpr__46031.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.mutations","mutate"),(function (env){
return new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__46032){
var map__46033 = p__46032;
var map__46033__$1 = cljs.core.__destructure_map(map__46033);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46033__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,226,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown app state mutation. Have you required the file with your mutations?",new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast),"See https://book.fulcrologic.com/#err-mut-unknown-mutation"], null);
}),null)),null,1378963231,null);
}));
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
com.fulcrologic.fulcro.mutations.toggle_BANG_ = (function com$fulcrologic$fulcro$mutations$toggle_BANG_(comp,field){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"field","field",-1302436500),null,(1),null)),(new cljs.core.List(null,field,null,(1),null)))))),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Like toggle!, but synchronously refreshes `comp` and nothing else.
 */
com.fulcrologic.fulcro.mutations.toggle_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$toggle_BANG__BANG_(comp,field){
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"field","field",-1302436500),null,(1),null)),(new cljs.core.List(null,field,null,(1),null)))))),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data). Changes made via these
 *   helpers are compressed in the history.
 */
com.fulcrologic.fulcro.mutations.set_value_BANG_ = (function com$fulcrologic$fulcro$mutations$set_value_BANG_(component,field,value){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Just like set-value!, but synchronously updates `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_value_BANG__BANG_(component,field,value){
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Helper for set-integer!, use that instead. It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
com.fulcrologic.fulcro.mutations.ensure_integer = (function com$fulcrologic$fulcro$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_integer_BANG_ = (function com$fulcrologic$fulcro$mutations$set_integer_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46314 = arguments.length;
var i__5767__auto___46315 = (0);
while(true){
if((i__5767__auto___46315 < len__5766__auto___46314)){
args__5772__auto__.push((arguments[i__5767__auto___46315]));

var G__46316 = (i__5767__auto___46315 + (1));
i__5767__auto___46315 = G__46316;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__46045){
var map__46046 = p__46045;
var map__46046__$1 = cljs.core.__destructure_map(map__46046);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46046__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46046__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = event;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not((function (){var and__5041__auto____$1 = event;
if(cljs.core.truth_(and__5041__auto____$1)){
return value;
} else {
return and__5041__auto____$1;
}
})());
} else {
return and__5041__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_integer((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq46042){
var G__46043 = cljs.core.first(seq46042);
var seq46042__$1 = cljs.core.next(seq46042);
var G__46044 = cljs.core.first(seq46042__$1);
var seq46042__$2 = cljs.core.next(seq46042__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46043,G__46044,seq46042__$2);
}));

/**
 * Just like set-integer!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_integer_BANG__BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46317 = arguments.length;
var i__5767__auto___46318 = (0);
while(true){
if((i__5767__auto___46318 < len__5766__auto___46317)){
args__5772__auto__.push((arguments[i__5767__auto___46318]));

var G__46319 = (i__5767__auto___46318 + (1));
i__5767__auto___46318 = G__46319;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__46069){
var map__46070 = p__46069;
var map__46070__$1 = cljs.core.__destructure_map(map__46070);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46070__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46070__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = event;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not((function (){var and__5041__auto____$1 = event;
if(cljs.core.truth_(and__5041__auto____$1)){
return value;
} else {
return and__5041__auto____$1;
}
})());
} else {
return and__5041__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_integer((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$lang$applyTo = (function (seq46060){
var G__46061 = cljs.core.first(seq46060);
var seq46060__$1 = cljs.core.next(seq46060);
var G__46062 = cljs.core.first(seq46060__$1);
var seq46060__$2 = cljs.core.next(seq46060__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46061,G__46062,seq46060__$2);
}));

com.fulcrologic.fulcro.mutations.ensure_double = (function com$fulcrologic$fulcro$mutations$ensure_double(v){
var rv = parseFloat(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given double on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_double_BANG_ = (function com$fulcrologic$fulcro$mutations$set_double_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46320 = arguments.length;
var i__5767__auto___46321 = (0);
while(true){
if((i__5767__auto___46321 < len__5766__auto___46320)){
args__5772__auto__.push((arguments[i__5767__auto___46321]));

var G__46322 = (i__5767__auto___46321 + (1));
i__5767__auto___46321 = G__46322;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__46080){
var map__46081 = p__46080;
var map__46081__$1 = cljs.core.__destructure_map(map__46081);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46081__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46081__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = event;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not((function (){var and__5041__auto____$1 = event;
if(cljs.core.truth_(and__5041__auto____$1)){
return value;
} else {
return and__5041__auto____$1;
}
})());
} else {
return and__5041__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_double((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$lang$applyTo = (function (seq46077){
var G__46078 = cljs.core.first(seq46077);
var seq46077__$1 = cljs.core.next(seq46077);
var G__46079 = cljs.core.first(seq46077__$1);
var seq46077__$2 = cljs.core.next(seq46077__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46078,G__46079,seq46077__$2);
}));

/**
 * Just like set-double!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_double_BANG__BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46323 = arguments.length;
var i__5767__auto___46324 = (0);
while(true){
if((i__5767__auto___46324 < len__5766__auto___46323)){
args__5772__auto__.push((arguments[i__5767__auto___46324]));

var G__46325 = (i__5767__auto___46324 + (1));
i__5767__auto___46324 = G__46325;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__46091){
var map__46092 = p__46091;
var map__46092__$1 = cljs.core.__destructure_map(map__46092);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46092__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46092__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = event;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not((function (){var and__5041__auto____$1 = event;
if(cljs.core.truth_(and__5041__auto____$1)){
return value;
} else {
return and__5041__auto____$1;
}
})());
} else {
return and__5041__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_double((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$lang$applyTo = (function (seq46088){
var G__46089 = cljs.core.first(seq46088);
var seq46088__$1 = cljs.core.next(seq46088);
var G__46090 = cljs.core.first(seq46088__$1);
var seq46088__$2 = cljs.core.next(seq46088__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46089,G__46090,seq46088__$2);
}));

/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 * 
 *   It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 *   Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_string_BANG_ = (function com$fulcrologic$fulcro$mutations$set_string_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46326 = arguments.length;
var i__5767__auto___46327 = (0);
while(true){
if((i__5767__auto___46327 < len__5766__auto___46326)){
args__5772__auto__.push((arguments[i__5767__auto___46327]));

var G__46328 = (i__5767__auto___46327 + (1));
i__5767__auto___46327 = G__46328;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__46105){
var map__46106 = p__46105;
var map__46106__$1 = cljs.core.__destructure_map(map__46106);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46106__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46106__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = event;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not((function (){var and__5041__auto____$1 = event;
if(cljs.core.truth_(and__5041__auto____$1)){
return value;
} else {
return and__5041__auto____$1;
}
})());
} else {
return and__5041__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value);
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq46098){
var G__46099 = cljs.core.first(seq46098);
var seq46098__$1 = cljs.core.next(seq46098);
var G__46100 = cljs.core.first(seq46098__$1);
var seq46098__$2 = cljs.core.next(seq46098__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46099,G__46100,seq46098__$2);
}));

/**
 * Just like set-string!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_string_BANG__BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46329 = arguments.length;
var i__5767__auto___46330 = (0);
while(true){
if((i__5767__auto___46330 < len__5766__auto___46329)){
args__5772__auto__.push((arguments[i__5767__auto___46330]));

var G__46331 = (i__5767__auto___46330 + (1));
i__5767__auto___46330 = G__46331;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__46120){
var map__46121 = p__46120;
var map__46121__$1 = cljs.core.__destructure_map(map__46121);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46121__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46121__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = event;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not((function (){var and__5041__auto____$1 = event;
if(cljs.core.truth_(and__5041__auto____$1)){
return value;
} else {
return and__5041__auto____$1;
}
})());
} else {
return and__5041__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value);
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$lang$applyTo = (function (seq46113){
var G__46114 = cljs.core.first(seq46113);
var seq46113__$1 = cljs.core.next(seq46113);
var G__46115 = cljs.core.first(seq46113__$1);
var seq46113__$2 = cljs.core.next(seq46113__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46114,G__46115,seq46113__$2);
}));

/**
 * Indicate the the remote operation will return a value of the given component type.
 * 
 *   `env` - The env of the mutation
 *   `class` - A component class that represents the return type.  You may supply a fully-qualified symbol instead of the
 *   actual class, and this method will look up the class for you (useful to avoid circular references).
 *   `opts` (optional):
 * - `query-params` - Optional parameters to add to the generated query
 * 
 *   Returns an update `env`, and is a valid return value from mutation remote sections.
 */
com.fulcrologic.fulcro.mutations.returning = (function com$fulcrologic$fulcro$mutations$returning(var_args){
var G__46129 = arguments.length;
switch (G__46129) {
case 2:
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2 = (function (env,class$){
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$3(env,class$,null);
}));

(com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$3 = (function (env,class$,p__46130){
var map__46131 = p__46130;
var map__46131__$1 = cljs.core.__destructure_map(map__46131);
var opts = map__46131__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46131__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var class$__$1 = (((((class$ instanceof cljs.core.Keyword)) || ((class$ instanceof cljs.core.Symbol))))?com.fulcrologic.fulcro.raw.components.registry_key__GT_class(class$):class$);
var map__46136 = env;
var map__46136__$1 = cljs.core.__destructure_map(map__46136);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46136__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46136__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__46137 = ast;
var map__46137__$1 = cljs.core.__destructure_map(map__46137);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46137__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46137__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46137__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var component_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(class$__$1,cljs.core.deref(state));
var updated_query = (function (){var G__46138 = edn_query_language.core.query__GT_ast(component_query);
var G__46138__$1 = (cljs.core.truth_(query_params)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__46138,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),(0)], null),cljs.core.assoc,new cljs.core.Keyword(null,"params","params",710516235),query_params):G__46138);
var G__46138__$2 = edn_query_language.core.ast__GT_query(G__46138__$1)
;
if(cljs.core.truth_(query)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(G__46138__$2,(function (p1__46123_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(query),p1__46123_SHARP_], 0));
}));
} else {
return G__46138__$2;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,key,(new cljs.core.List(null,params,null,(1),null)),(2),null)),updated_query])], null)));
}));

(com.fulcrologic.fulcro.mutations.returning.cljs$lang$maxFixedArity = 3);

/**
 * Set's a target for the return value from the mutation to be merged into. This can be combined with returning to define
 *   a path to insert the new entry.
 * 
 *   `env` - The mutation env (you can thread together `returning` and `with-target`)
 *   `target` - A vector path, or any special target defined in `data-targeting` such as `append-to`.
 * 
 *   Returns an updated env (which is a valid return value from remote sections of mutations).
 *   
 */
com.fulcrologic.fulcro.mutations.with_target = (function com$fulcrologic$fulcro$mutations$with_target(p__46139,target){
var map__46140 = p__46139;
var map__46140__$1 = cljs.core.__destructure_map(map__46140);
var env = map__46140__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46140__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__46142 = ast;
var map__46142__$1 = cljs.core.__destructure_map(map__46142);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46142__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46142__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46142__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var targeted_query = (cljs.core.truth_(query)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(query,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target):cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,key,(new cljs.core.List(null,params,null,(1),null)),(2),null)),targeted_query])], null)));
});
/**
 * Modify an AST containing a single mutation, changing it's parameters to those given as an argument. Overwrites
 * any existing params of the mutation.
 * 
 * `env` - the mutation environment
 * `params` - A new map to use as the mutations parameters
 * 
 * Returns an updated `env`, which can be used as the return value from a remote section of a mutation.
 */
com.fulcrologic.fulcro.mutations.with_params = (function com$fulcrologic$fulcro$mutations$with_params(env,params){
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235)], null),params);
});
/**
 * Modify the AST in env so that the request is sent such that an alternate low-level XHRIO response type is used.
 *   Only works with HTTP remotes. See goog.net.XhrIO.  Supported response types are :default, :array-buffer,
 *   :text, and :document.
 */
com.fulcrologic.fulcro.mutations.with_response_type = (function com$fulcrologic$fulcro$mutations$with_response_type(env,response_type){
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)], null),response_type);
});
com.fulcrologic.fulcro.mutations.with_server_side_mutation = (function com$fulcrologic$fulcro$mutations$with_server_side_mutation(env,mutation_symbol){

return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"ast","ast",-860334068),cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587),mutation_symbol,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mutation_symbol], 0));
});
/**
 * Mutation: A convenience helper, generally used 'bit twiddle' the data on a particular database table (using the component's ident).
 *   Specifically, merge the given `params` into the state of the database object at the component's ident.
 *   In general, it is recommended this be used for ui-only properties that have no real use outside of the component.
 *   
 */
com.fulcrologic.fulcro.mutations.set_props = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$mutations$action(p__46147){
var map__46148 = p__46147;
var map__46148__$1 = cljs.core.__destructure_map(map__46148);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46148__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46148__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__46149_46333 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__46150_46334 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__46150_46334);

try{if((ref == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,517,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m/set-props requires component to have an ident. See https://book.fulcrologic.com/#err-mut-set-props-missing-ident"], null);
}),null)),null,175451351,null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,(function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st,params], 0));
}));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__46149_46333);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__46167 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__46168 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__46168);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__46167);
}})], null);
}));
/**
 * Mutation: A helper method that toggles the true/false nature of a component's state by ident.
 * Use for local UI data only. Use your own mutations for things that have a good abstract meaning. 
 */
com.fulcrologic.fulcro.mutations.toggle = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),(function (fulcro_mutation_env_symbol){
var map__46209 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__46209__$1 = cljs.core.__destructure_map(map__46209);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46209__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$mutations$action(p__46220){
var map__46225 = p__46220;
var map__46225__$1 = cljs.core.__destructure_map(map__46225);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46225__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46225__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__46226_46335 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__46227_46336 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__46227_46336);

try{if((ref == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,525,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m/toggle requires component to have an ident. See https://book.fulcrologic.com/#err-mut-toggle-missing-ident"], null);
}),null)),null,-1785077637,null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__46226_46335);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__46228 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__46229 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__46229);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__46228);
}})], null);
}));
/**
 * Run a transaction that will update the given k/v pair in the props of the database. Uses the `current-props` to
 * derive the ident of the database entry. The props must contain an ID key that can be used to derive the ident from
 * the current-props.
 * 
 * For example, `(raw-set-value! app {:person/id 42} :person/name "bob")` would have the effect of a mutation that
 * does an `(assoc-in state-db [:person/id 42 :person/name] "bob")`.
 * 
 */
com.fulcrologic.fulcro.mutations.raw_set_value_BANG_ = (function com$fulcrologic$fulcro$mutations$raw_set_value_BANG_(app__$1,current_props,k,v){
var ik = com.fulcrologic.fulcro.raw.components.id_key(current_props);
var ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ik,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,ik)], null);
if(cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,ident))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,541,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot raw-set-value! because current-props could not be used to derive the ident of the component.",current_props], null);
}),null)),null,102277346,null);
} else {
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46261 = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]);
return (com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1(G__46261) : com.fulcrologic.fulcro.mutations.set_props.call(null,G__46261));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ident], null));
}
});
/**
 * Run a transaction that will update the given k/v pair in the props of the database. Uses the `current-props` as the basis
 * for the update, and to find the ident of the target. The `current-props` must contain an ID field that can be used to derive
 * the ident from the passed props.
 * 
 * For example, `(raw-update-value! app {:person/id 42} :person/age inc)` would have the effect of a mutation that
 * does an `(update-in state-db [:person/id 42 :person/age] inc)`.
 * 
 */
com.fulcrologic.fulcro.mutations.raw_update_value_BANG_ = (function com$fulcrologic$fulcro$mutations$raw_update_value_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46337 = arguments.length;
var i__5767__auto___46338 = (0);
while(true){
if((i__5767__auto___46338 < len__5766__auto___46337)){
args__5772__auto__.push((arguments[i__5767__auto___46338]));

var G__46339 = (i__5767__auto___46338 + (1));
i__5767__auto___46338 = G__46339;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,current_props,k,f,args){
var ik = com.fulcrologic.fulcro.raw.components.id_key(current_props);
var ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ik,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,ik)], null);
var old_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,k);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,old_value,args);
if(cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,ident))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,559,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot raw-update-value! because current-props could not be used to derive the ident of the component.",current_props], null);
}),null)),null,1661774958,null);
} else {
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46305 = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,new_value]);
return (com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1(G__46305) : com.fulcrologic.fulcro.mutations.set_props.call(null,G__46305));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ident], null));
}
}));

(com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$lang$applyTo = (function (seq46266){
var G__46267 = cljs.core.first(seq46266);
var seq46266__$1 = cljs.core.next(seq46266);
var G__46268 = cljs.core.first(seq46266__$1);
var seq46266__$2 = cljs.core.next(seq46266__$1);
var G__46269 = cljs.core.first(seq46266__$2);
var seq46266__$3 = cljs.core.next(seq46266__$2);
var G__46270 = cljs.core.first(seq46266__$3);
var seq46266__$4 = cljs.core.next(seq46266__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46267,G__46268,G__46269,G__46270,seq46266__$4);
}));


//# sourceMappingURL=com.fulcrologic.fulcro.mutations.js.map
