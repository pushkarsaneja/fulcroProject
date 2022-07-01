goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
com.fulcrologic.guardrails.core.global_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
/**
 * Push a global context, accessible from all threads, onto a stack.
 * Used to add information to what guardrails will report when a function failed a check.
 */
com.fulcrologic.guardrails.core.enter_global_context_BANG_ = (function com$fulcrologic$guardrails$core$enter_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,ctx));
});
/**
 * Pops a global context (see `enter-global-context!`).
 * Should be passed the same context that was pushed, although is not enforced, as it's only to be easily compatible with fulcro-spec's hooks API.
 */
com.fulcrologic.guardrails.core.leave_global_context_BANG_ = (function com$fulcrologic$guardrails$core$leave_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.rest);
});
com.fulcrologic.guardrails.core.get_global_context = (function com$fulcrologic$guardrails$core$get_global_context(){
return cljs.core.first(cljs.core.deref(com.fulcrologic.guardrails.core.global_context));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__38271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38272__auto__ = (function (){var switch__37993__auto__ = (function (state_43129){
var state_val_43130 = (state_43129[(1)]);
if((state_val_43130 === (7))){
var inst_43125 = (state_43129[(2)]);
var state_43129__$1 = state_43129;
var statearr_43132_43194 = state_43129__$1;
(statearr_43132_43194[(2)] = inst_43125);

(statearr_43132_43194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43130 === (1))){
var state_43129__$1 = state_43129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43129__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_43130 === (4))){
var inst_43127 = (state_43129[(2)]);
var state_43129__$1 = state_43129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43129__$1,inst_43127);
} else {
if((state_val_43130 === (6))){
var inst_43123 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_43129__$1 = state_43129;
var statearr_43133_43195 = state_43129__$1;
(statearr_43133_43195[(2)] = inst_43123);

(statearr_43133_43195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43130 === (3))){
var inst_43106 = (state_43129[(7)]);
var state_43129__$1 = state_43129;
if(cljs.core.truth_(inst_43106)){
var statearr_43135_43196 = state_43129__$1;
(statearr_43135_43196[(1)] = (5));

} else {
var statearr_43136_43197 = state_43129__$1;
(statearr_43136_43197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43130 === (12))){
var inst_43120 = (state_43129[(2)]);
var inst_43106 = inst_43120;
var state_43129__$1 = (function (){var statearr_43138 = state_43129;
(statearr_43138[(7)] = inst_43106);

return statearr_43138;
})();
var statearr_43139_43198 = state_43129__$1;
(statearr_43139_43198[(2)] = null);

(statearr_43139_43198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43130 === (2))){
var inst_43105 = (state_43129[(2)]);
var inst_43106 = inst_43105;
var state_43129__$1 = (function (){var statearr_43141 = state_43129;
(statearr_43141[(7)] = inst_43106);

return statearr_43141;
})();
var statearr_43142_43199 = state_43129__$1;
(statearr_43142_43199[(2)] = null);

(statearr_43142_43199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43130 === (11))){
var _ = (function (){var statearr_43143 = state_43129;
(statearr_43143[(4)] = cljs.core.rest((state_43129[(4)])));

return statearr_43143;
})();
var state_43129__$1 = state_43129;
var ex43137 = (state_43129__$1[(2)]);
var statearr_43145_43200 = state_43129__$1;
(statearr_43145_43200[(5)] = ex43137);


var statearr_43146_43201 = state_43129__$1;
(statearr_43146_43201[(1)] = (10));

(statearr_43146_43201[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43130 === (9))){
var inst_43118 = (state_43129[(2)]);
var state_43129__$1 = (function (){var statearr_43147 = state_43129;
(statearr_43147[(8)] = inst_43118);

return statearr_43147;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43129__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_43130 === (5))){
var state_43129__$1 = state_43129;
var statearr_43149_43202 = state_43129__$1;
(statearr_43149_43202[(2)] = null);

(statearr_43149_43202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43130 === (10))){
var inst_43109 = (state_43129[(2)]);
var state_43129__$1 = (function (){var statearr_43150 = state_43129;
(statearr_43150[(9)] = inst_43109);

return statearr_43150;
})();
var statearr_43151_43203 = state_43129__$1;
(statearr_43151_43203[(2)] = null);

(statearr_43151_43203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43130 === (8))){
var inst_43106 = (state_43129[(7)]);
var _ = (function (){var statearr_43152 = state_43129;
(statearr_43152[(4)] = cljs.core.cons((11),(state_43129[(4)])));

return statearr_43152;
})();
var inst_43115 = (inst_43106.cljs$core$IFn$_invoke$arity$0 ? inst_43106.cljs$core$IFn$_invoke$arity$0() : inst_43106.call(null));
var ___$1 = (function (){var statearr_43153 = state_43129;
(statearr_43153[(4)] = cljs.core.rest((state_43129[(4)])));

return statearr_43153;
})();
var state_43129__$1 = state_43129;
var statearr_43154_43204 = state_43129__$1;
(statearr_43154_43204[(2)] = inst_43115);

(statearr_43154_43204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__37994__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__37994__auto____0 = (function (){
var statearr_43155 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43155[(0)] = com$fulcrologic$guardrails$core$state_machine__37994__auto__);

(statearr_43155[(1)] = (1));

return statearr_43155;
});
var com$fulcrologic$guardrails$core$state_machine__37994__auto____1 = (function (state_43129){
while(true){
var ret_value__37995__auto__ = (function (){try{while(true){
var result__37996__auto__ = switch__37993__auto__(state_43129);
if(cljs.core.keyword_identical_QMARK_(result__37996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37996__auto__;
}
break;
}
}catch (e43156){var ex__37997__auto__ = e43156;
var statearr_43157_43205 = state_43129;
(statearr_43157_43205[(2)] = ex__37997__auto__);


if(cljs.core.seq((state_43129[(4)]))){
var statearr_43158_43206 = state_43129;
(statearr_43158_43206[(1)] = cljs.core.first((state_43129[(4)])));

} else {
throw ex__37997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43207 = state_43129;
state_43129 = G__43207;
continue;
} else {
return ret_value__37995__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__37994__auto__ = function(state_43129){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__37994__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__37994__auto____1.call(this,state_43129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__37994__auto____0;
com$fulcrologic$guardrails$core$state_machine__37994__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__37994__auto____1;
return com$fulcrologic$guardrails$core$state_machine__37994__auto__;
})()
})();
var state__38273__auto__ = (function (){var statearr_43161 = f__38272__auto__();
(statearr_43161[(6)] = c__38271__auto__);

return statearr_43161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38273__auto__);
}));

return c__38271__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__43164 = data;
var map__43164__$1 = cljs.core.__destructure_map(map__43164);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43164__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43164__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43164__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43164__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43164__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43164__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43164__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43164__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.tap = (((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.tap_GT_ !== 'undefined'))?(new cljs.core.Var((function (){
return cljs.core.tap_GT_;
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","tap>","cljs.core/tap>",895722640,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"tap>","tap>",1822490677,null),"cljs/core.cljs",20,1,11858,11858,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Sends x to any taps. Returns the result of *exec-tap-fn*, a Boolean value.",((cljs.core.tap_GT_)?cljs.core.tap_GT_.cljs$lang$test:null)]))):null);
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__43176,spec,value){
var map__43177 = p__43176;
var map__43177__$1 = cljs.core.__destructure_map(map__43177);
var tap_GT__QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43177__$1,new cljs.core.Keyword(null,"tap>?","tap>?",212454486));
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43177__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43177__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43177__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43177__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43177__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43177__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_43208 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__43209 = (function (){var and__5041__auto__ = args_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return vararg_QMARK_;
} else {
return and__5041__auto__;
}
})();
var varg_43210 = (cljs.core.truth_(vargs_QMARK__43209)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_43211 = (cljs.core.truth_(vargs_QMARK__43209)?((cljs.core.map_QMARK_(varg_43210))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_43210))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_43210))):value);
var valid_exception_43212 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_43211)){
} else {
var problem_43213 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_43211,expound_opts);
var description_43214 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_43213)].join('');
var context_43215 = com.fulcrologic.guardrails.core.get_global_context();
if(cljs.core.truth_((function (){var and__5041__auto__ = com.fulcrologic.guardrails.core.tap;
if(cljs.core.truth_(and__5041__auto__)){
return tap_GT__QMARK_;
} else {
return and__5041__auto__;
}
})())){
var G__43179_43216 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","explain-data","com.fulcrologic.guardrails/explain-data",-1120944464),cljs.spec.alpha.explain_data(spec,specable_args_43211)], null);
(com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1(G__43179_43216) : com.fulcrologic.guardrails.core.tap.call(null,G__43179_43216));
} else {
}

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_43212,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__43180 = description_43214;
if(cljs.core.truth_(context_43215)){
return ["\nContext: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context_43215),G__43180].join('');
} else {
return G__43180;
}
})(),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","context","com.fulcrologic.guardrails/context",-834538901),context_43215], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_43211], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_43214,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = callsite;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e43178){var e_43217 = e43178;
com.fulcrologic.guardrails.utils.report_exception(e_43217,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_43218 = (com.fulcrologic.guardrails.core.now_ms() - start_43208);
if((duration_43218 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_43218),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_43212))){
throw cljs.core.deref(valid_exception_43212);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
