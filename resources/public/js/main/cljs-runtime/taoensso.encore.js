goog.provide('taoensso.encore');
goog.scope(function(){
  taoensso.encore.goog$module$goog$object = goog.module.get('goog.object');
  taoensso.encore.goog$module$goog$array = goog.module.get('goog.array');
});
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(12),(0)], null);
var ret__5821__auto___38571 = (function (){
taoensso.encore.have = (function taoensso$encore$have(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38572 = arguments.length;
var i__5767__auto___38573 = (0);
while(true){
if((i__5767__auto___38573 < len__5766__auto___38572)){
args__5772__auto__.push((arguments[i__5767__auto___38573]));

var G__38574 = (i__5767__auto___38573 + (1));
i__5767__auto___38573 = G__38574;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.have.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.have.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.truss","have","taoensso.truss/have",-260539457,null),null,(1),null)),args)));
}));

(taoensso.encore.have.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.have.cljs$lang$applyTo = (function (seq37944){
var G__37945 = cljs.core.first(seq37944);
var seq37944__$1 = cljs.core.next(seq37944);
var G__37946 = cljs.core.first(seq37944__$1);
var seq37944__$2 = cljs.core.next(seq37944__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37945,G__37946,seq37944__$2);
}));

return null;
})()
;
(taoensso.encore.have.cljs$lang$macro = true);


var ret__5821__auto___38575 = (function (){
taoensso.encore.have_QMARK_ = (function taoensso$encore$have_QMARK_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38576 = arguments.length;
var i__5767__auto___38577 = (0);
while(true){
if((i__5767__auto___38577 < len__5766__auto___38576)){
args__5772__auto__.push((arguments[i__5767__auto___38577]));

var G__38578 = (i__5767__auto___38577 + (1));
i__5767__auto___38577 = G__38578;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.have_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.have_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.truss","have?","taoensso.truss/have?",700958759,null),null,(1),null)),args)));
}));

(taoensso.encore.have_QMARK_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.have_QMARK_.cljs$lang$applyTo = (function (seq37947){
var G__37948 = cljs.core.first(seq37947);
var seq37947__$1 = cljs.core.next(seq37947);
var G__37949 = cljs.core.first(seq37947__$1);
var seq37947__$2 = cljs.core.next(seq37947__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37948,G__37949,seq37947__$2);
}));

return null;
})()
;
(taoensso.encore.have_QMARK_.cljs$lang$macro = true);

/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__37955 = arguments.length;
switch (G__37955) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,args,null);
}));

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__37956 = ((((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37956,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37956,(1),null);
var vec__37959 = ((((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37959,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37959,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta(sym))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$2], null);
}));

(taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3);

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;

var ret__5821__auto___38580 = (function (){
taoensso.encore.do_nil = (function taoensso$encore$do_nil(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38581 = arguments.length;
var i__5767__auto___38582 = (0);
while(true){
if((i__5767__auto___38582 < len__5766__auto___38581)){
args__5772__auto__.push((arguments[i__5767__auto___38582]));

var G__38583 = (i__5767__auto___38582 + (1));
i__5767__auto___38582 = G__38583;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.do_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.do_nil.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(taoensso.encore.do_nil.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.do_nil.cljs$lang$applyTo = (function (seq37962){
var G__37963 = cljs.core.first(seq37962);
var seq37962__$1 = cljs.core.next(seq37962);
var G__37964 = cljs.core.first(seq37962__$1);
var seq37962__$2 = cljs.core.next(seq37962__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37963,G__37964,seq37962__$2);
}));

return null;
})()
;
(taoensso.encore.do_nil.cljs$lang$macro = true);


var ret__5821__auto___38584 = (function (){
taoensso.encore.do_false = (function taoensso$encore$do_false(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38585 = arguments.length;
var i__5767__auto___38586 = (0);
while(true){
if((i__5767__auto___38586 < len__5766__auto___38585)){
args__5772__auto__.push((arguments[i__5767__auto___38586]));

var G__38587 = (i__5767__auto___38586 + (1));
i__5767__auto___38586 = G__38587;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.do_false.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.do_false.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0))));
}));

(taoensso.encore.do_false.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.do_false.cljs$lang$applyTo = (function (seq37965){
var G__37966 = cljs.core.first(seq37965);
var seq37965__$1 = cljs.core.next(seq37965);
var G__37967 = cljs.core.first(seq37965__$1);
var seq37965__$2 = cljs.core.next(seq37965__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37966,G__37967,seq37965__$2);
}));

return null;
})()
;
(taoensso.encore.do_false.cljs$lang$macro = true);


var ret__5821__auto___38588 = (function (){
taoensso.encore.do_true = (function taoensso$encore$do_true(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38589 = arguments.length;
var i__5767__auto___38590 = (0);
while(true){
if((i__5767__auto___38590 < len__5766__auto___38589)){
args__5772__auto__.push((arguments[i__5767__auto___38590]));

var G__38591 = (i__5767__auto___38590 + (1));
i__5767__auto___38590 = G__38591;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.do_true.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.do_true.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0))));
}));

(taoensso.encore.do_true.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.do_true.cljs$lang$applyTo = (function (seq37968){
var G__37969 = cljs.core.first(seq37968);
var seq37968__$1 = cljs.core.next(seq37968);
var G__37970 = cljs.core.first(seq37968__$1);
var seq37968__$2 = cljs.core.next(seq37968__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37969,G__37970,seq37968__$2);
}));

return null;
})()
;
(taoensso.encore.do_true.cljs$lang$macro = true);


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__37973 = arguments.length;
switch (G__37973) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
}));

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if((((s == null)) || ((s === "")))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)) : taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?(function (){var G__37974 = cljs.core.symbol;
var G__37975 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__37974,G__37975) : taoensso.encore.map_keys.call(null,G__37974,G__37975));
})():readers);
var default$__$1 = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)) : taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(s)], null));
}
}
}));

(taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2);

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var G__37977 = arguments.length;
switch (G__37977) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
}));

(taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR__orig_val__37978 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__37979 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__temp_val__37980 = null;
var _STAR_print_length_STAR__temp_val__37981 = null;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__37980);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__37981);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__37979);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__37978);
}}));

(taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2);

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__26863__auto__ = (function (){var or__5043__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.truth_((function (){var c__5076__auto__ = new cljs.core.Keyword(null,"default","default",-1987822328);
var x__5077__auto__ = x;
return (x__5077__auto__ instanceof c__5076__auto__);
})())){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__26863__auto__)){
var data_map = b2__26863__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type(err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string'));
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return ((x === true) || (x === false));
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.transient_QMARK_ = (function taoensso$encore$transient_QMARK_(x){
return (x instanceof cljs.core.ITransientCollection);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return ((taoensso.encore.ident_QMARK_(x)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__5041__auto__ = taoensso.encore.ident_QMARK_(x);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5041__auto____$1)){
return true;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__5041__auto__ = (x instanceof cljs.core.Symbol);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5041__auto____$1)){
return true;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__5041__auto__ = (x instanceof cljs.core.Keyword);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5041__auto____$1)){
return true;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return ((typeof x === 'string') && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")))));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return ((typeof x === 'string') && ((!(clojure.string.blank_QMARK_(x)))));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return (!(clojure.string.blank_QMARK_(x)));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2))));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3))));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return (!((x < (0))));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return ((typeof x === 'number') && ((((!(isNaN(x)))) && ((!((x === Infinity)))))));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return ((typeof x === 'number') && ((((!(isNaN(x)))) && ((((!((x === Infinity)))) && ((!((parseFloat(x) === parseInt(x,(10)))))))))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return ((typeof x === 'number') && ((((!(isNaN(x)))) && ((((!((x === Infinity)))) && ((parseFloat(x) === parseInt(x,(10)))))))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return ((typeof x === 'number') && ((!((x < (0))))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return ((typeof x === 'number') && ((x > (0))));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return ((typeof x === 'number') && ((x < (0))));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((!((x < (0))))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((x > (0))));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((x < (0))));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_(x)) && ((!((x < (0))))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_(x)) && ((x > (0))));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_(x)) && ((x < (0))));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((!((x < (0))))));
});

taoensso.encore.pnum_QMARK_ = (function taoensso$encore$pnum_QMARK_(x){
var and__5041__auto__ = typeof x === 'number';
if(and__5041__auto__){
var n = x;
return (((n >= 0.0)) && ((n <= 1.0)));
} else {
return and__5041__auto__;
}
});

taoensso.encore.rnum_QMARK_ = (function taoensso$encore$rnum_QMARK_(x){
var and__5041__auto__ = typeof x === 'number';
if(and__5041__auto__){
var n = x;
return (((n >= -1.0)) && ((n <= 1.0)));
} else {
return and__5041__auto__;
}
});
var c_38594 = (new cljs.core.Delay((function (){
return cljs.core.async.impl.channels.ManyToManyChannel;
}),null));
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
var c__5076__auto__ = cljs.core.deref(c_38594);
var x__5077__auto__ = x;
return (x__5077__auto__ instanceof c__5076__auto__);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var b2__26863__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__26863__auto__)){
var ns = b2__26863__auto__;
return [ns,"/",n].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank_trim = (function taoensso$encore$as__QMARK_nblank_trim(x){
if(typeof x === 'string'){
var s = clojure.string.trim(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return null;
} else {
return s;
}
} else {
return null;
}
});


taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__26863__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__26863__auto__)){
var n = b2__26863__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__26863__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__26863__auto__)){
var n = b2__26863__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__26863__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__26863__auto__)){
var n = b2__26863__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__26863__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__26863__auto__)){
var n = b2__26863__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__26863__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__26863__auto__)){
var n = b2__26863__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pnum = (function taoensso$encore$as__QMARK_pnum(x){
var b2__26863__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__26863__auto__)){
var f = b2__26863__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_rnum = (function taoensso$encore$as__QMARK_rnum(x){
var b2__26863__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__26863__auto__)){
var f = b2__26863__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < -1.0)){
return -0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if(((x === true) || (x === false))){
return x;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")))))))){
return false;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1")))))))){
return true;
} else {
return null;
}
}
}
}
});

var regex_38595 = /^[^\s@]+@[^\s@]+\.\S*[^\.]$/;
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(var_args){
var G__37988 = arguments.length;
switch (G__37988) {
case 1:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2((320),_QMARK_s);
}));

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__26863__auto__ = (function (){var and__5041__auto__ = _QMARK_s;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.trim(_QMARK_s);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(b2__26863__auto__)){
var s = b2__26863__auto__;
if((cljs.core.count(s) <= max_len)){
return cljs.core.re_find(regex_38595,s);
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(var_args){
var G__37990 = arguments.length;
switch (G__37990) {
case 1:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
var b2__26863__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1(_QMARK_s);
if(cljs.core.truth_(b2__26863__auto__)){
var email = b2__26863__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__26863__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2(max_len,_QMARK_s);
if(cljs.core.truth_(b2__26863__auto__)){
var email = b2__26863__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e37991){var _ = e37991;
return false;
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__37993 = arguments.length;
switch (G__37993) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`is!` ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," failure against arg: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword(null,"fail-?data","fail-?data",1702764975),fail__QMARK_data], null));
}
}));

(taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`as-",cljs.core.name(as_name),"` failed against: `",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),"`"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nzero","nzero",2053173656),x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});

taoensso.encore.as_nblank_trim = (function taoensso$encore$as_nblank_trim(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_nblank_trim(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nblank-trim","nblank-trim",-1443525862),x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(var_args){
var G__37995 = arguments.length;
switch (G__37995) {
case 1:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__5043__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"email","email",1415816706),x);
}
}));

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__5043__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2(n,x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"email","email",1415816706),x);
}
}));

(taoensso.encore.as_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(var_args){
var G__37997 = arguments.length;
switch (G__37997) {
case 1:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__5043__auto__ = taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
}));

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__5043__auto__ = taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2(n,x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
}));

(taoensso.encore.as_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x);
}
});

taoensso.encore.as_pnum = (function taoensso$encore$as_pnum(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_pnum(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"pnum","pnum",-602522434),x);
}
});

taoensso.encore.as_rnum = (function taoensso$encore$as_rnum(x){
var or__5043__auto__ = taoensso.encore.as__QMARK_rnum(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"rnum","rnum",-783850724),x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"bool","bool",1444635321),x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__38002 = arguments.length;
switch (G__38002) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
}));

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq(ks)){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,acc,taoensso.encore.explode_keyword(in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2);

taoensso.encore.convey_reduced = (function taoensso$encore$convey_reduced(x){
if(cljs.core.reduced_QMARK_(x)){
return cljs.core.reduced(x);
} else {
return x;
}
});
/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__38003){
var vec__38004 = p__38003;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38004,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38004,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(var_args){
var G__38008 = arguments.length;
switch (G__38008) {
case 3:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3 = (function (rf,init,end){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4 = (function (rf,init,start,end){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5 = (function (rf,init,start,end,step){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,end,step));
}));

(taoensso.encore.reduce_n.cljs$lang$maxFixedArity = 5);

/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 *  As `reduce-kv` against vector coll, but works on any seqable coll type.
 */
taoensso.encore.reduce_indexed = (function taoensso$encore$reduce_indexed(rf,init,coll){
var c = (taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.counter.call(null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var G__38009 = acc;
var G__38010 = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
var G__38011 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__38009,G__38010,G__38011) : rf.call(null,G__38009,G__38010,G__38011));
}),init,coll);
});
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__38012 = acc;
var G__38013 = k;
var G__38014 = taoensso.encore.goog$module$goog$object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__38012,G__38013,G__38014) : f.call(null,G__38012,G__38013,G__38014));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__38016_SHARP_,p2__38015_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__38015_SHARP_) : proc.call(null,p2__38015_SHARP_));
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__38019_SHARP_,p2__38017_SHARP_,p3__38018_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__38017_SHARP_,p3__38018_SHARP_) : proc.call(null,p2__38017_SHARP_,p3__38018_SHARP_));
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs((function (p1__38022_SHARP_,p2__38020_SHARP_,p3__38021_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__38020_SHARP_,p3__38021_SHARP_) : proc.call(null,p2__38020_SHARP_,p3__38021_SHARP_));
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj((function (p1__38025_SHARP_,p2__38023_SHARP_,p3__38024_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__38023_SHARP_,p3__38024_SHARP_) : proc.call(null,p2__38023_SHARP_,p3__38024_SHARP_));
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var b2__26863__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__26863__auto__)){
var p = b2__26863__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
var b2__26863__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__26863__auto__)){
var p = b2__26863__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__38028 = arguments.length;
switch (G__38028) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (Math.abs((x - y)) < 0.001);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return (Math.abs((x - y)) < signf);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3);

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
var ret__5821__auto___38604 = taoensso.encore._LT__EQ__STAR_ = (function taoensso$encore$_LT__EQ__STAR_(_AMPERSAND_form,_AMPERSAND_env,x,y,z){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"y__38029__auto__","y__38029__auto__",-2109048870,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"y__38029__auto__","y__38029__auto__",-2109048870,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__38029__auto__","y__38029__auto__",-2109048870,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore._LT__EQ__STAR_.cljs$lang$macro = true);


var ret__5821__auto___38605 = taoensso.encore._GT__EQ__STAR_ = (function taoensso$encore$_GT__EQ__STAR_(_AMPERSAND_form,_AMPERSAND_env,x,y,z){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"y__38030__auto__","y__38030__auto__",1796492928,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"y__38030__auto__","y__38030__auto__",1796492928,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__38030__auto__","y__38030__auto__",1796492928,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore._GT__EQ__STAR_.cljs$lang$macro = true);


var ret__5821__auto___38606 = taoensso.encore._LT__STAR_ = (function taoensso$encore$_LT__STAR_(_AMPERSAND_form,_AMPERSAND_env,x,y,z){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"y__38031__auto__","y__38031__auto__",-651731655,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"y__38031__auto__","y__38031__auto__",-651731655,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__38031__auto__","y__38031__auto__",-651731655,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore._LT__STAR_.cljs$lang$macro = true);


var ret__5821__auto___38607 = taoensso.encore._GT__STAR_ = (function taoensso$encore$_GT__STAR_(_AMPERSAND_form,_AMPERSAND_env,x,y,z){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"y__38032__auto__","y__38032__auto__",258793092,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"y__38032__auto__","y__38032__auto__",258793092,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__38032__auto__","y__38032__auto__",258793092,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore._GT__STAR_.cljs$lang$macro = true);


var ret__5821__auto___38608 = taoensso.encore.min_STAR_ = (function taoensso$encore$min_STAR_(_AMPERSAND_form,_AMPERSAND_env,n1,n2){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"n1__38033__auto__","n1__38033__auto__",-120932194,null),null,(1),null)),(new cljs.core.List(null,n1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"n2__38034__auto__","n2__38034__auto__",1395607682,null),null,(1),null)),(new cljs.core.List(null,n2,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"n1__38033__auto__","n1__38033__auto__",-120932194,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"n2__38034__auto__","n2__38034__auto__",1395607682,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"n2__38034__auto__","n2__38034__auto__",1395607682,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"n1__38033__auto__","n1__38033__auto__",-120932194,null),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore.min_STAR_.cljs$lang$macro = true);


var ret__5821__auto___38609 = taoensso.encore.max_STAR_ = (function taoensso$encore$max_STAR_(_AMPERSAND_form,_AMPERSAND_env,n1,n2){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"n1__38035__auto__","n1__38035__auto__",590877984,null),null,(1),null)),(new cljs.core.List(null,n1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"n2__38036__auto__","n2__38036__auto__",-976478644,null),null,(1),null)),(new cljs.core.List(null,n2,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"n1__38035__auto__","n1__38035__auto__",590877984,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"n2__38036__auto__","n2__38036__auto__",-976478644,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"n2__38036__auto__","n2__38036__auto__",-976478644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"n1__38035__auto__","n1__38035__auto__",590877984,null),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore.max_STAR_.cljs$lang$macro = true);


var ret__5821__auto___38610 = taoensso.encore.clamp_STAR_ = (function taoensso$encore$clamp_STAR_(_AMPERSAND_form,_AMPERSAND_env,nmin,nmax,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"nmin__38037__auto__","nmin__38037__auto__",-1000608906,null),null,(1),null)),(new cljs.core.List(null,nmin,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"nmax__38038__auto__","nmax__38038__auto__",1134235777,null),null,(1),null)),(new cljs.core.List(null,nmax,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"n__38039__auto__","n__38039__auto__",-1915364359,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"n__38039__auto__","n__38039__auto__",-1915364359,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"nmin__38037__auto__","nmin__38037__auto__",-1000608906,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"nmin__38037__auto__","nmin__38037__auto__",-1000608906,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"n__38039__auto__","n__38039__auto__",-1915364359,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"nmax__38038__auto__","nmax__38038__auto__",1134235777,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"nmax__38038__auto__","nmax__38038__auto__",1134235777,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"n__38039__auto__","n__38039__auto__",-1915364359,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore.clamp_STAR_.cljs$lang$macro = true);

taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var G__38041 = arguments.length;
switch (G__38041) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"round","round",2009433328),null,n);
}));

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(type,null,n);
}));

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__38042 = type;
var G__38042__$1 = (((G__38042 instanceof cljs.core.Keyword))?G__38042.fqn:null);
switch (G__38042__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
}));

(taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3);

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});

taoensso.encore.perc = (function taoensso$encore$perc(n,divisor){
return Math.round(((n / divisor) * 100.0));
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__38044 = arguments.length;
switch (G__38044) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
}));

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__38045){
var map__38046 = p__38045;
var map__38046__$1 = cljs.core.__destructure_map(map__38046);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38046__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
}));

(taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2);

taoensso.encore.chance = (function taoensso$encore$chance(p){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < p);
});
taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = (((typeof window !== 'undefined'))?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,(function (){var G__38047 = cljs.core.meta(x);
var G__38048 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__38047,G__38048) : taoensso.encore.merge.call(null,G__38047,G__38048));
})());
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__38054 = arguments.length;
switch (G__38054) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___38615 = arguments.length;
var i__5767__auto___38616 = (0);
while(true){
if((i__5767__auto___38616 < len__5766__auto___38615)){
args_arr__5791__auto__.push((arguments[i__5767__auto___38616]));

var G__38617 = (i__5767__auto___38616 + (1));
i__5767__auto___38616 = G__38617;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)));
}));

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__5041__auto__ = taoensso.encore.some_QMARK_(x);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__5041__auto____$1){
return taoensso.encore.revery_QMARK_((function (p1__38049_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__38049_SHARP_,x);
}),more);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}));

/** @this {Function} */
(taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq38051){
var G__38052 = cljs.core.first(seq38051);
var seq38051__$1 = cljs.core.next(seq38051);
var G__38053 = cljs.core.first(seq38051__$1);
var seq38051__$2 = cljs.core.next(seq38051__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38052,G__38053,seq38051__$2);
}));

(taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__38060 = arguments.length;
switch (G__38060) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___38619 = arguments.length;
var i__5767__auto___38620 = (0);
while(true){
if((i__5767__auto___38620 < len__5766__auto___38619)){
args_arr__5791__auto__.push((arguments[i__5767__auto___38620]));

var G__38621 = (i__5767__auto___38620 + (1));
i__5767__auto___38620 = G__38621;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5792__auto__);

}
});

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst(taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
}));

/** @this {Function} */
(taoensso.encore.nnil.cljs$lang$applyTo = (function (seq38056){
var G__38057 = cljs.core.first(seq38056);
var seq38056__$1 = cljs.core.next(seq38056);
var G__38058 = cljs.core.first(seq38056__$1);
var seq38056__$2 = cljs.core.next(seq38056__$1);
var G__38059 = cljs.core.first(seq38056__$2);
var seq38056__$3 = cljs.core.next(seq38056__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38057,G__38058,G__38059,seq38056__$3);
}));

(taoensso.encore.nnil.cljs$lang$maxFixedArity = (3));

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__38061 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38061,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38061,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var b2__26863__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__26863__auto__)){
var s = b2__26863__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var b2__26863__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__26863__auto__)){
var s = b2__26863__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__38065 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38065,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38065,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38065,(2),null);
var vec__38068 = ((cljs.core.vector_QMARK_(min_version))?min_version:new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version(min_version)));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38068,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38068,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38068,(2),null);
var vec__38071 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38064_SHARP_){
var or__5043__auto__ = p1__38064_SHARP_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38071,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38071,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38071,(2),null);
if((((xc > xm__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && ((((yc > ym__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__38075 = arguments.length;
switch (G__38075) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
}));

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(taoensso.encore.queue.cljs$lang$maxFixedArity = 1);

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38623 = arguments.length;
var i__5767__auto___38624 = (0);
while(true){
if((i__5767__auto___38624 < len__5766__auto___38623)){
args__5772__auto__.push((arguments[i__5767__auto___38624]));

var G__38625 = (i__5767__auto___38624 + (1));
i__5767__auto___38624 = G__38625;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
}));

(taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq38076){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38076));
}));

taoensso.encore.ensure_vec = (function taoensso$encore$ensure_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return cljs.core.vec(x);
}
});
taoensso.encore.ensure_set = (function taoensso$encore$ensure_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
taoensso.encore.oset = (function taoensso$encore$oset(o,k,v){
return taoensso.encore.goog$module$goog$object.set((((o == null))?({}):o),cljs.core.name(k),v);
});
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__38080 = arguments.length;
switch (G__38080) {
case 1:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1 = (function (k){
return taoensso.encore.goog$module$goog$object.get(window,cljs.core.name(k));
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return taoensso.encore.goog$module$goog$object.get(o,cljs.core.name(k),null);
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return taoensso.encore.goog$module$goog$object.get(o,cljs.core.name(k),not_found);
}));

(taoensso.encore.oget.cljs$lang$maxFixedArity = 3);

var sentinel_38627 = ({});
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = (function taoensso$encore$oget_in(var_args){
var G__38084 = arguments.length;
switch (G__38084) {
case 1:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(window,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var o__$2 = taoensso.encore.goog$module$goog$object.get(o__$1,cljs.core.name(cljs.core.first(ks__$1)),sentinel_38627);
if((o__$2 === sentinel_38627)){
return not_found;
} else {
var G__38629 = o__$2;
var G__38630 = cljs.core.next(ks__$1);
o__$1 = G__38629;
ks__$1 = G__38630;
continue;
}
} else {
return o__$1;
}
break;
}
}));

(taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3);

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__38089 = arguments.length;
switch (G__38089) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___38632 = arguments.length;
var i__5767__auto___38633 = (0);
while(true){
if((i__5767__auto___38633 < len__5766__auto___38632)){
args_arr__5791__auto__.push((arguments[i__5767__auto___38633]));

var G__38634 = (i__5767__auto___38633 + (1));
i__5767__auto___38633 = G__38634;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq38086){
var G__38087 = cljs.core.first(seq38086);
var seq38086__$1 = cljs.core.next(seq38086);
var G__38088 = cljs.core.first(seq38086__$1);
var seq38086__$2 = cljs.core.next(seq38086__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38087,G__38088,seq38086__$2);
}));

(taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2));


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__38094 = arguments.length;
switch (G__38094) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___38636 = arguments.length;
var i__5767__auto___38637 = (0);
while(true){
if((i__5767__auto___38637 < len__5766__auto___38636)){
args_arr__5791__auto__.push((arguments[i__5767__auto___38637]));

var G__38638 = (i__5767__auto___38637 + (1));
i__5767__auto___38637 = G__38638;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_when,taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq38091){
var G__38092 = cljs.core.first(seq38091);
var seq38091__$1 = cljs.core.next(seq38091);
var G__38093 = cljs.core.first(seq38091__$1);
var seq38091__$2 = cljs.core.next(seq38091__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38092,G__38093,seq38091__$2);
}));

(taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2));

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__38100 = arguments.length;
switch (G__38100) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___38640 = arguments.length;
var i__5767__auto___38641 = (0);
while(true){
if((i__5767__auto___38641 < len__5766__auto___38640)){
args_arr__5791__auto__.push((arguments[i__5767__auto___38641]));

var G__38642 = (i__5767__auto___38641 + (1));
i__5767__auto___38641 = G__38642;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5792__auto__);

}
});

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq38096){
var G__38097 = cljs.core.first(seq38096);
var seq38096__$1 = cljs.core.next(seq38096);
var G__38098 = cljs.core.first(seq38096__$1);
var seq38096__$2 = cljs.core.next(seq38096__$1);
var G__38099 = cljs.core.first(seq38096__$2);
var seq38096__$3 = cljs.core.next(seq38096__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38097,G__38098,G__38099,seq38096__$3);
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__38106 = arguments.length;
switch (G__38106) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___38644 = arguments.length;
var i__5767__auto___38645 = (0);
while(true){
if((i__5767__auto___38645 < len__5766__auto___38644)){
args_arr__5791__auto__.push((arguments[i__5767__auto___38645]));

var G__38646 = (i__5767__auto___38645 + (1));
i__5767__auto___38645 = G__38646;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5792__auto__);

}
});

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq38102){
var G__38103 = cljs.core.first(seq38102);
var seq38102__$1 = cljs.core.next(seq38102);
var G__38104 = cljs.core.first(seq38102__$1);
var seq38102__$2 = cljs.core.next(seq38102__$1);
var G__38105 = cljs.core.first(seq38102__$2);
var seq38102__$3 = cljs.core.next(seq38102__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38103,G__38104,G__38105,seq38102__$3);
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv if its value is not nil, otherwise dissocs it.
 */
taoensso.encore.dis_assoc_some = (function taoensso$encore$dis_assoc_some(var_args){
var G__38112 = arguments.length;
switch (G__38112) {
case 3:
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___38648 = arguments.length;
var i__5767__auto___38649 = (0);
while(true){
if((i__5767__auto___38649 < len__5766__auto___38648)){
args_arr__5791__auto__.push((arguments[i__5767__auto___38649]));

var G__38650 = (i__5767__auto___38649 + (1));
i__5767__auto___38649 = G__38650;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((3)),(0),null));
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5792__auto__);

}
});

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.dis_assoc_some.cljs$lang$applyTo = (function (seq38108){
var G__38109 = cljs.core.first(seq38108);
var seq38108__$1 = cljs.core.next(seq38108);
var G__38110 = cljs.core.first(seq38108__$1);
var seq38108__$2 = cljs.core.next(seq38108__$1);
var G__38111 = cljs.core.first(seq38108__$2);
var seq38108__$3 = cljs.core.next(seq38108__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38109,G__38110,G__38111,seq38108__$3);
}));

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.dis_assoc_some.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__38118 = arguments.length;
switch (G__38118) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___38652 = arguments.length;
var i__5767__auto___38653 = (0);
while(true){
if((i__5767__auto___38653 < len__5766__auto___38652)){
args_arr__5791__auto__.push((arguments[i__5767__auto___38653]));

var G__38654 = (i__5767__auto___38653 + (1));
i__5767__auto___38653 = G__38654;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5792__auto__);

}
});

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq38114){
var G__38115 = cljs.core.first(seq38114);
var seq38114__$1 = cljs.core.next(seq38114);
var G__38116 = cljs.core.first(seq38114__$1);
var seq38114__$2 = cljs.core.next(seq38114__$1);
var G__38117 = cljs.core.first(seq38114__$2);
var seq38114__$3 = cljs.core.next(seq38114__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38115,G__38116,G__38117,seq38114__$3);
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.contains_QMARK_(m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3));

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__38120 = arguments.length;
switch (G__38120) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count(v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,vlen);
}
}));

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$(cljs.core.count(v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,end__$1);
}
}));

(taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3);

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__38122 = arguments.length;
switch (G__38122) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count(v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,vlen);
}
}
}));

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$(cljs.core.count(v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end__$1);
}
}
}
}));

(taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3);

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__38123 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38123,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__38129 = xs__$1;
var seq__38130 = cljs.core.seq(vec__38129);
var first__38131 = cljs.core.first(seq__38130);
var seq__38130__$1 = cljs.core.next(seq__38130);
var x1 = first__38131;
var xn = seq__38130__$1;
if(xn){
var G__38657 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__38658 = xn;
butlast = G__38657;
xs__$1 = G__38658;
continue;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(butlast,x1) : f.call(null,butlast,x1));
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3(coll,(0),n);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return ((cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(taoensso.encore.ensure_set(x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38659 = arguments.length;
var i__5767__auto___38660 = (0);
while(true){
if((i__5767__auto___38660 < len__5766__auto___38659)){
args__5772__auto__.push((arguments[i__5767__auto___38660]));

var G__38661 = (i__5767__auto___38660 + (1));
i__5767__auto___38660 = G__38661;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,taoensso.encore.fsplit_last((function (xs,lx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,taoensso.encore.seq_kvs(lx));
}),args));
}));

(taoensso.encore.mapply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.mapply.cljs$lang$applyTo = (function (seq38132){
var G__38133 = cljs.core.first(seq38132);
var seq38132__$1 = cljs.core.next(seq38132);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38133,seq38132__$1);
}));

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__38138 = arguments.length;
switch (G__38138) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___38663 = arguments.length;
var i__5767__auto___38664 = (0);
while(true){
if((i__5767__auto___38664 < len__5766__auto___38663)){
args_arr__5791__auto__.push((arguments[i__5767__auto___38664]));

var G__38665 = (i__5767__auto___38664 + (1));
i__5767__auto___38664 = G__38665;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
}));

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$(to),cljs.core.cons(from,more)));
}));

/** @this {Function} */
(taoensso.encore.into_all.cljs$lang$applyTo = (function (seq38135){
var G__38136 = cljs.core.first(seq38135);
var seq38135__$1 = cljs.core.next(seq38135);
var G__38137 = cljs.core.first(seq38135__$1);
var seq38135__$2 = cljs.core.next(seq38135__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38136,G__38137,seq38135__$2);
}));

(taoensso.encore.into_all.cljs$lang$maxFixedArity = (2));

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((((n > (10))) && (taoensso.encore.editable_QMARK_(coll)))){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__38140 = arguments.length;
switch (G__38140) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,from);
}));

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to,from);
}));

(taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__38142 = arguments.length;
switch (G__38142) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
}));

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY));
return (function() {
var G__38668 = null;
var G__38668__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__38668__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__38668__2 = (function (acc,input){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_),k)){
return acc;
} else {
seen_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen_.cljs$core$IDeref$_deref$arity$1(null),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
G__38668 = function(acc,input){
switch(arguments.length){
case 0:
return G__38668__0.call(this);
case 1:
return G__38668__1.call(this,acc);
case 2:
return G__38668__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38668.cljs$core$IFn$_invoke$arity$0 = G__38668__0;
G__38668.cljs$core$IFn$_invoke$arity$1 = G__38668__1;
G__38668.cljs$core$IFn$_invoke$arity$2 = G__38668__2;
return G__38668;
})()
});
}));

(taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1);

var p_BANG__38669 = cljs.core.persistent_BANG_;
var t_38670 = cljs.core.transient$;
taoensso.encore.invert_map = (function taoensso$encore$invert_map(m){
var G__38143 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),(function (){var G__38144 = cljs.core.PersistentArrayMap.EMPTY;
return (t_38670.cljs$core$IFn$_invoke$arity$1 ? t_38670.cljs$core$IFn$_invoke$arity$1(G__38144) : t_38670.call(null,G__38144));
})(),m);
return (p_BANG__38669.cljs$core$IFn$_invoke$arity$1 ? p_BANG__38669.cljs$core$IFn$_invoke$arity$1(G__38143) : p_BANG__38669.call(null,G__38143));
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
var G__38145 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),(function (){var G__38146 = cljs.core.PersistentArrayMap.EMPTY;
return (t_38670.cljs$core$IFn$_invoke$arity$1 ? t_38670.cljs$core$IFn$_invoke$arity$1(G__38146) : t_38670.call(null,G__38146));
})(),m);
return (p_BANG__38669.cljs$core$IFn$_invoke$arity$1 ? p_BANG__38669.cljs$core$IFn$_invoke$arity$1(G__38145) : p_BANG__38669.call(null,G__38145));
});

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__38147 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),(t_38670.cljs$core$IFn$_invoke$arity$1 ? t_38670.cljs$core$IFn$_invoke$arity$1(m) : t_38670.call(null,m)),m);
return (p_BANG__38669.cljs$core$IFn$_invoke$arity$1 ? p_BANG__38669.cljs$core$IFn$_invoke$arity$1(G__38147) : p_BANG__38669.call(null,G__38147));
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__38148 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),(t_38670.cljs$core$IFn$_invoke$arity$1 ? t_38670.cljs$core$IFn$_invoke$arity$1(m) : t_38670.call(null,m)),m);
return (p_BANG__38669.cljs$core$IFn$_invoke$arity$1 ? p_BANG__38669.cljs$core$IFn$_invoke$arity$1(G__38148) : p_BANG__38669.call(null,G__38148));
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__38149 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),(t_38670.cljs$core$IFn$_invoke$arity$1 ? t_38670.cljs$core$IFn$_invoke$arity$1(m) : t_38670.call(null,m)),m);
return (p_BANG__38669.cljs$core$IFn$_invoke$arity$1 ? p_BANG__38669.cljs$core$IFn$_invoke$arity$1(G__38149) : p_BANG__38669.call(null,G__38149));
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__38150 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),(t_38670.cljs$core$IFn$_invoke$arity$1 ? t_38670.cljs$core$IFn$_invoke$arity$1(m) : t_38670.call(null,m)),m);
return (p_BANG__38669.cljs$core$IFn$_invoke$arity$1 ? p_BANG__38669.cljs$core$IFn$_invoke$arity$1(G__38150) : p_BANG__38669.call(null,G__38150));
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__38151 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),(t_38670.cljs$core$IFn$_invoke$arity$1 ? t_38670.cljs$core$IFn$_invoke$arity$1(m) : t_38670.call(null,m)),m);
return (p_BANG__38669.cljs$core$IFn$_invoke$arity$1 ? p_BANG__38669.cljs$core$IFn$_invoke$arity$1(G__38151) : p_BANG__38669.call(null,G__38151));
}
});
/**
 * Returns a map like the one given, replacing keys using
 *   the given {<old-new> <new-key>} replacements.
 */
taoensso.encore.rename_keys = (function taoensso$encore$rename_keys(replacements,m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
var b2__26863__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(k) : replacements.call(null,k));
if(cljs.core.truth_(b2__26863__auto__)){
var rk = b2__26863__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k),rk,v);
} else {
return m__$1;
}
}),cljs.core.transient$(m),m));
});
/**
 * Returns {(f x) x} map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_((function (p1__38152_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__38152_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__38154 = arguments.length;
switch (G__38154) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,f);
}));

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__26863__auto__ = cljs.core.seq(ks);
if(b2__26863__auto__){
var ks_seq = b2__26863__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0));
var b2__26863__auto____$1 = cljs.core.next(ks_seq);
if(b2__26863__auto____$1){
var ks__$1 = b2__26863__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
var v = (function (){var G__38155 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__38155) : f.call(null,G__38155));
})();
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,v,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}
}
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
}
}));

(taoensso.encore.update_in.cljs$lang$maxFixedArity = 4);

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__38157 = arguments.length;
switch (G__38157) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,ks),k);
}));

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq(ks)){
return taoensso.encore.fsplit_last((function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3(coll,ks__$1,lk);
}),ks);
} else {
return false;
}
}));

(taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3);

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__38163 = arguments.length;
switch (G__38163) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___38685 = arguments.length;
var i__5767__auto___38686 = (0);
while(true){
if((i__5767__auto___38686 < len__5766__auto___38685)){
args_arr__5791__auto__.push((arguments[i__5767__auto___38686]));

var G__38687 = (i__5767__auto___38686 + (1));
i__5767__auto___38686 = G__38687;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5792__auto__);

}
});

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
}));
}));

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,m__$1,dissoc_k,more);
}));
}));

/** @this {Function} */
(taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq38159){
var G__38160 = cljs.core.first(seq38159);
var seq38159__$1 = cljs.core.next(seq38159);
var G__38161 = cljs.core.first(seq38159__$1);
var seq38159__$2 = cljs.core.next(seq38159__$1);
var G__38162 = cljs.core.first(seq38159__$2);
var seq38159__$3 = cljs.core.next(seq38159__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38160,G__38161,G__38162,seq38159__$3);
}));

(taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3));

taoensso.encore.node_paths = (function taoensso$encore$node_paths(var_args){
var G__38165 = arguments.length;
switch (G__38165) {
case 1:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(cljs.core.associative_QMARK_,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2 = (function (node_pred,m){
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3 = (function (node_pred,m,basis){
var basis__$1 = (function (){var or__5043__auto__ = basis;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((node_pred.cljs$core$IFn$_invoke$arity$1 ? node_pred.cljs$core$IFn$_invoke$arity$1(v) : node_pred.call(null,v)))){
var paths_from_basis = taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(basis__$1,k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,in$){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,in$);
}),acc,paths_from_basis);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(basis__$1,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),m));
}));

(taoensso.encore.node_paths.cljs$lang$maxFixedArity = 3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__38170 = arguments.length;
switch (G__38170) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___38707 = arguments.length;
var i__5767__auto___38708 = (0);
while(true){
if((i__5767__auto___38708 < len__5766__auto___38707)){
args_arr__5791__auto__.push((arguments[i__5767__auto___38708]));

var G__38709 = (i__5767__auto___38708 + (1));
i__5767__auto___38708 = G__38709;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(((s1) && (s2))){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
}));

/** @this {Function} */
(taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq38167){
var G__38168 = cljs.core.first(seq38167);
var seq38167__$1 = cljs.core.next(seq38167);
var G__38169 = cljs.core.first(seq38167__$1);
var seq38167__$2 = cljs.core.next(seq38167__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38168,G__38169,seq38167__$2);
}));

(taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2));

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if(((s1) && (s2))){
var G__38717 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__38718 = cljs.core.next(s1);
var G__38719 = cljs.core.next(s2);
v = G__38717;
s1 = G__38718;
s2 = G__38719;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
});
var not_found_38722 = ({});
taoensso.encore._merge_with = (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv((function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc__$1,k,not_found_38722);
if((lv === not_found_38722)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.map_QMARK_(rv)) && (cljs.core.map_QMARK_(lv)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,cljs.core.reduce_kv(taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(lv,rv) : f.call(null,lv,rv));
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new_rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,new_rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,new_rv);
}
}
}
}
}),(function (){var or__5043__auto__ = acc;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
}),null,maps);
});
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38729 = arguments.length;
var i__5767__auto___38730 = (0);
while(true){
if((i__5767__auto___38730 < len__5766__auto___38729)){
args__5772__auto__.push((arguments[i__5767__auto___38730]));

var G__38731 = (i__5767__auto___38730 + (1));
i__5767__auto___38730 = G__38731;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(false,(function (x,y){
return y;
}),maps);
}));

(taoensso.encore.merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.merge.cljs$lang$applyTo = (function (seq38173){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38173));
}));


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38735 = arguments.length;
var i__5767__auto___38737 = (0);
while(true){
if((i__5767__auto___38737 < len__5766__auto___38735)){
args__5772__auto__.push((arguments[i__5767__auto___38737]));

var G__38738 = (i__5767__auto___38737 + (1));
i__5767__auto___38737 = G__38738;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(false,f,maps);
}));

(taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq38174){
var G__38175 = cljs.core.first(seq38174);
var seq38174__$1 = cljs.core.next(seq38174);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38175,seq38174__$1);
}));


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38739 = arguments.length;
var i__5767__auto___38740 = (0);
while(true){
if((i__5767__auto___38740 < len__5766__auto___38739)){
args__5772__auto__.push((arguments[i__5767__auto___38740]));

var G__38741 = (i__5767__auto___38740 + (1));
i__5767__auto___38740 = G__38741;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(new cljs.core.Keyword(null,"nest","nest",-314993663),(function (x,y){
return y;
}),maps);
}));

(taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq38176){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38176));
}));


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38742 = arguments.length;
var i__5767__auto___38743 = (0);
while(true){
if((i__5767__auto___38743 < len__5766__auto___38742)){
args__5772__auto__.push((arguments[i__5767__auto___38743]));

var G__38744 = (i__5767__auto___38743 + (1));
i__5767__auto___38743 = G__38744;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(new cljs.core.Keyword(null,"nest","nest",-314993663),f,maps);
}));

(taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq38177){
var G__38178 = cljs.core.first(seq38177);
var seq38177__$1 = cljs.core.next(seq38177);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38178,seq38177__$1);
}));


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

(taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newv","newv",-238403387,null),new cljs.core.Symbol(null,"returnv","returnv",-1488668972,null)], null);
}));

(taoensso.encore.Swapped.cljs$lang$type = true);

(taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped");

(taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"taoensso.encore/Swapped");
}));

/**
 * Positional factory function for taoensso.encore/Swapped.
 */
taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = new cljs.core.Symbol(null,"clojure.lang.IAtom","clojure.lang.IAtom",2048990995,null);
/**
 * Atomically swaps value of `atom_` to `val` and returns
 *   true iff the atom's value actually changed. See also `reset-in!?`.
 */
taoensso.encore.reset_BANG__QMARK_ = (function taoensso$encore$reset_BANG__QMARK_(atom_,val){
while(true){
var old = cljs.core.deref(atom_);
cljs.core.reset_BANG_(atom_,val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,val)){
return false;
} else {
return true;
}
break;
}
});
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref(atom_);
var v1 = (function (){var G__38179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__38179) : f.call(null,G__38179));
})();
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
cljs.core.reset_BANG_(atom_,m1);

return v1;
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = cljs.core.deref(atom_);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
cljs.core.reset_BANG_(atom_,v1);

if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = cljs.core.deref(atom_);
cljs.core.reset_BANG_(atom_,v1);

return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
cljs.core.reset_BANG_(atom_,m1);

var G__38180 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__38181 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__38180,G__38181) : return$.call(null,G__38180,G__38181));
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1));
cljs.core.reset_BANG_(atom_,m1);

if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
cljs.core.reset_BANG_(atom_,m1);

var G__38182 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__38183 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__38182,G__38183) : return$.call(null,G__38182,G__38183));
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__26863__auto__ = cljs.core.seq(ks);
if(b2__26863__auto__){
var ks_seq = b2__26863__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = taoensso.encore.fsplit_last(((function (m0,ks_seq,b2__26863__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,ks_seq,b2__26863__auto__))
,ks);
cljs.core.reset_BANG_(atom_,m1);

var G__38184 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__38185 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__38184,G__38185) : return$.call(null,G__38184,G__38185));
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))?taoensso.encore.fsplit_last(((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__26863__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__26863__auto__))
,ks):cljs.core.assoc_in(m0,ks,v1));
cljs.core.reset_BANG_(atom_,m1);

if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_(return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__26863__auto__ = cljs.core.seq(ks);
if(b2__26863__auto__){
var ks_seq = b2__26863__auto__;
if(cljs.core.next(ks_seq)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc_in(m0,ks,v1);
cljs.core.reset_BANG_(atom_,m1);

var G__38186 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__38187 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__38186,G__38187) : return$.call(null,G__38186,G__38187));
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
var return_38745 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(var_args){
var G__38189 = arguments.length;
switch (G__38189) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_38745,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_38745,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4);

var return_38747 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = (function taoensso$encore$reset_val_BANG_(var_args){
var G__38191 = arguments.length;
switch (G__38191) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_38747,atom_,k,null,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_38747,atom_,k,not_found,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4);

var return_38749 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__38193 = arguments.length;
switch (G__38193) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_38749,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_38749,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__38195 = arguments.length;
switch (G__38195) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3(atom_,k,null);
}));

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__38196 = taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38196,(0),null);
return v0;
}));

(taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3);

var not_found_38752 = ({});
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found_38752,new_val);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val)){
return false;
} else {
return true;
}
});
var return_38753 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var G__38202 = arguments.length;
switch (G__38202) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_38753,atom_,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_38753,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_38753,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4);

var return_38757 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var G__38204 = arguments.length;
switch (G__38204) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_38757,atom_,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_38757,atom_,ks,null,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_38757,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4);

var return_38759 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__38206 = arguments.length;
switch (G__38206) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_38759,atom_,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_38759,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_38759,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4);

var ret__5821__auto___38764 = taoensso.encore.now_dt_STAR_ = (function taoensso$encore$now_dt_STAR_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","if-cljs","taoensso.encore/if-cljs",449826172,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"java.util.Date.","java.util.Date.",1563672074,null),null,(1),null))))),null,(1),null))], 0))));
});
(taoensso.encore.now_dt_STAR_.cljs$lang$macro = true);


var ret__5821__auto___38766 = taoensso.encore.now_udt_STAR_ = (function taoensso$encore$now_udt_STAR_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","if-cljs","taoensso.encore/if-cljs",449826172,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("java.lang.System","currentTimeMillis","java.lang.System/currentTimeMillis",25145408,null),null,(1),null))))),null,(1),null))], 0))));
});
(taoensso.encore.now_udt_STAR_.cljs$lang$macro = true);


taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__26863__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__26863__auto__)){
var perf = b2__26863__auto__;
var b2__26863__auto____$1 = (function (){var or__5043__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__26863__auto____$1)){
var f = b2__26863__auto____$1;
return (function (){
return ((1000000) * cljs.core.long$(f.call(perf)));
});
} else {
return (function (){
return ((1000000) * (new Date()).getTime());
});
}
} else {
return (function (){
return ((1000000) * (new Date()).getTime());
});
}
})();

var ret__5821__auto___38768 = taoensso.encore.now_nano_STAR_ = (function taoensso$encore$now_nano_STAR_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","if-cljs","taoensso.encore/if-cljs",449826172,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","now-nano","taoensso.encore/now-nano",-49698154,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("java.lang.System","nanoTime","java.lang.System/nanoTime",708406973,null),null,(1),null))))),null,(1),null))], 0))));
});
(taoensso.encore.now_nano_STAR_.cljs$lang$macro = true);

/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = ({});
return (function() { 
var G__38772__delegate = function (xs){
var x1 = cljs.core.first(xs);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("mem","del","mem/del",574870667)) : taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","del","mem/del",574870667))))){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(x2,new cljs.core.Keyword("mem","all","mem/all",892075139)) : taoensso.encore.kw_identical_QMARK_.call(null,x2,new cljs.core.Keyword("mem","all","mem/all",892075139))))){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache_.cljs$core$IDeref$_deref$arity$1(null),xn));
}

return null;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)) : taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133))))){
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null),xn,v));

return v;
} else {
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__38772 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__38773__i = 0, G__38773__a = new Array(arguments.length -  0);
while (G__38773__i < G__38773__a.length) {G__38773__a[G__38773__i] = arguments[G__38773__i + 0]; ++G__38773__i;}
  xs = new cljs.core.IndexedSeq(G__38773__a,0,null);
} 
return G__38772__delegate.call(this,xs);};
G__38772.cljs$lang$maxFixedArity = 0;
G__38772.cljs$lang$applyTo = (function (arglist__38774){
var xs = cljs.core.seq(arglist__38774);
return G__38772__delegate(xs);
});
G__38772.cljs$core$IFn$_invoke$arity$variadic = G__38772__delegate;
return G__38772;
})()
;
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function() { 
var G__38777__delegate = function (args){
return cljs.core.deref((function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_),args);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,(function (cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null))]);
}
})),args);
}
})());
};
var G__38777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38779__i = 0, G__38779__a = new Array(arguments.length -  0);
while (G__38779__i < G__38779__a.length) {G__38779__a[G__38779__i] = arguments[G__38779__i + 0]; ++G__38779__i;}
  args = new cljs.core.IndexedSeq(G__38779__a,0,null);
} 
return G__38777__delegate.call(this,args);};
G__38777.cljs$lang$maxFixedArity = 0;
G__38777.cljs$lang$applyTo = (function (arglist__38780){
var args = cljs.core.seq(arglist__38780);
return G__38777__delegate(args);
});
G__38777.cljs$core$IFn$_invoke$arity$variadic = G__38777__delegate;
return G__38777;
})()
;
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

(taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.SimpleCacheEntry.cljs$lang$type = true);

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry");

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"taoensso.encore/SimpleCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/SimpleCacheEntry.
 */
taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

(taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lru","tick-lru",1625824877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lfu","tick-lfu",-1976905322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.TickedCacheEntry.cljs$lang$type = true);

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry");

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"taoensso.encore/TickedCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/TickedCacheEntry.
 */
taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize = (function taoensso$encore$memoize(var_args){
var G__38210 = arguments.length;
switch (G__38210) {
case 1:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_(f);
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_38786 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38211){if((e38211 instanceof Error)){
var e_38786 = e38211;
return e_38786;
} else {
throw e38211;

}
}})();
if((e_38786 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1915,"(pos-int? ttl-ms)",ttl_ms,e_38786,null);
}

var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
return (function() { 
var G__38789__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a1,new cljs.core.Keyword("mem","del","mem/del",574870667)) : taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667))))){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a2,new cljs.core.Keyword("mem","all","mem/all",892075139)) : taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139))))){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_38790 = null;
cljs.core.reset_BANG_(latch_,latch_38790);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,(function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$((function (){var or__5043__auto__ = m;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
}));
} else {
}

var fresh_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)) : taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,(function (_QMARK_e){
if(cljs.core.truth_((function (){var or__5043__auto__ = (_QMARK_e == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}),null)),instant));
} else {
return _QMARK_e;
}
}));
return cljs.core.deref(e.delay);
}
};
var G__38789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38791__i = 0, G__38791__a = new Array(arguments.length -  0);
while (G__38791__i < G__38791__a.length) {G__38791__a[G__38791__i] = arguments[G__38791__i + 0]; ++G__38791__i;}
  args = new cljs.core.IndexedSeq(G__38791__a,0,null);
} 
return G__38789__delegate.call(this,args);};
G__38789.cljs$lang$maxFixedArity = 0;
G__38789.cljs$lang$applyTo = (function (arglist__38792){
var args = cljs.core.seq(arglist__38792);
return G__38789__delegate(args);
});
G__38789.cljs$core$IFn$_invoke$arity$variadic = G__38789__delegate;
return G__38789;
})()
;
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (x){
var or__5043__auto__ = (x == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_)(x);
}
})(ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1967,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_38793 = (function (){try{if(taoensso.encore.pos_int_QMARK_(cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38212){if((e38212 instanceof Error)){
var e_38793 = e38212;
return e_38793;
} else {
throw e38212;

}
}})();
if((e_38793 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1968,"(pos-int? cache-size)",cache_size,e_38793,null);
}

var tick_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$((function (){var or__5043__auto__ = ttl_ms;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = (!((ttl_ms__$1 === (0))));
var cache_size__$1 = cljs.core.long$(cache_size);
return (function() { 
var G__38794__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a1,new cljs.core.Keyword("mem","del","mem/del",574870667)) : taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667))))){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a2,new cljs.core.Keyword("mem","all","mem/all",892075139)) : taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139))))){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_38795 = null;
cljs.core.reset_BANG_(latch_,latch_38795);

if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,(function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$((function (){var or__5043__auto__ = m;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
}));
} else {
}

var snapshot_38796 = cljs.core.deref(cache_);
var n_to_gc_38797 = (cljs.core.count(snapshot_38796) - cache_size__$1);
if((n_to_gc_38797 > (64))){
var ks_to_gc_38798 = (function (){var G__38213 = n_to_gc_38797;
var G__38214 = (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_38796,k);
return (e.tick_lru + e.tick_lfu);
});
var G__38215 = cljs.core.keys(snapshot_38796);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__38213,G__38214,G__38215) : taoensso.encore.top.call(null,G__38213,G__38214,G__38215));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,(function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),cljs.core.transient$((function (){var or__5043__auto__ = m;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_38798));
}));
} else {
}
} else {
}

var fresh_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)) : taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var tick = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tick_,(function (n){
return (n + (1));
}));
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,(function (_QMARK_e){
if(cljs.core.truth_((function (){var or__5043__auto__ = (_QMARK_e == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}),null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
}));
return cljs.core.deref(e.delay);
}
};
var G__38794 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38799__i = 0, G__38799__a = new Array(arguments.length -  0);
while (G__38799__i < G__38799__a.length) {G__38799__a[G__38799__i] = arguments[G__38799__i + 0]; ++G__38799__i;}
  args = new cljs.core.IndexedSeq(G__38799__a,0,null);
} 
return G__38794__delegate.call(this,args);};
G__38794.cljs$lang$maxFixedArity = 0;
G__38794.cljs$lang$applyTo = (function (arglist__38800){
var args = cljs.core.seq(arglist__38800);
return G__38794__delegate(args);
});
G__38794.cljs$core$IFn$_invoke$arity$variadic = G__38794__delegate;
return G__38794;
})()
;
}));

(taoensso.encore.memoize.cljs$lang$maxFixedArity = 3);

/**
 * Fastest-possible Clj memoize. Non-racy, 0-3 arity only.
 *   Cljs just passes through to `core/memoize`.
 */
taoensso.encore.fmemoize = (function taoensso$encore$fmemoize(f){
return cljs.core.memoize(f);
});

/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

(taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitSpec.cljs$lang$type = true);

(taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec");

(taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"taoensso.encore/LimitSpec");
}));

/**
 * Positional factory function for taoensso.encore/LimitSpec.
 */
taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

(taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"udt0","udt0",-969222777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitEntry.cljs$lang$type = true);

(taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry");

(taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"taoensso.encore/LimitEntry");
}));

/**
 * Positional factory function for taoensso.encore/LimitEntry.
 */
taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
});

(taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"worst-sid","worst-sid",1427291395,null),cljs.core.with_meta(new cljs.core.Symbol(null,"worst-ms","worst-ms",1541498579,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitHits.cljs$lang$type = true);

(taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits");

(taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"taoensso.encore/LimitHits");
}));

/**
 * Positional factory function for taoensso.encore/LimitHits.
 */
taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_38801 = (function (n,ms){
var e_38802 = (function (){try{if(taoensso.encore.pos_int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38216){if((e38216 instanceof Error)){
var e_38802 = e38216;
return e_38802;
} else {
throw e38216;

}
}})();
if((e_38802 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2124,"(pos-int? n)",n,e_38802,null);
}

var e_38803 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38217){if((e38217 instanceof Error)){
var e_38803 = e38217;
return e_38803;
} else {
throw e38217;

}
}})();
if((e_38803 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2124,"(pos-int? ms)",ms,e_38803,null);
}


return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (acc,sid,p__38218){
var vec__38219 = p__38218;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38219,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38219,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,limit_spec_38801(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__38222){
var vec__38223 = p__38222;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38223,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38223,(1),null);
var _QMARK_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38223,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__5043__auto__ = _QMARK_id;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (i__$1){
return (i__$1 + (1));
})(i.cljs$core$IDeref$_deref$arity$1(null)));
}
})(),limit_spec_38801(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`encore/cond!`: no matching clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_(specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly(null)], null);
} else {
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reqs_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var specs__$1 = taoensso.encore.coerce_limit_specs(specs);
var f1 = (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if(((cljs.core.not(peek_QMARK_)) && ((Math.random() <= 6.25E-5)))){
var latch_38804 = null;
cljs.core.reset_BANG_(latch_,latch_38804);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,(function (reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv((function (acc__$1,sid,e){
var b2__26863__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__26863__auto__)){
var s = b2__26863__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
}
}),entries,entries);
if(cljs.core.empty_QMARK_(new_entries)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,rid__$1,new_entries);
}
}),cljs.core.transient$((function (){var or__5043__auto__ = reqs;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
}));
} else {
}

while(true){
var reqs = cljs.core.deref(reqs_);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv(((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__26863__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__26863__auto__)){
var s = b2__26863__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([sid,tdelta]),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__5043__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__26863__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__26863__auto__)){
var h = b2__26863__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__26863__auto__ = cljs.core.deref(latch_);
if(cljs.core.truth_(b2__26863__auto__)){
var l = b2__26863__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__26863__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,(function (){var b2__26863__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,sid);
if(cljs.core.truth_(b2__26863__auto____$1)){
var e = b2__26863__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__26863__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
cljs.core.reset_BANG_(reqs_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reqs,rid,new_entries));

return null;
}
}
break;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,(function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1(null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1(req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(cmd,new cljs.core.Keyword("rl","reset","rl/reset",-800926172)) : taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","reset","rl/reset",-800926172))))){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(req_id,new cljs.core.Keyword("rl","all","rl/all",892118056)) : taoensso.encore.kw_identical_QMARK_.call(null,req_id,new cljs.core.Keyword("rl","all","rl/all",892118056))))){
cljs.core.reset_BANG_(reqs_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(cmd,new cljs.core.Keyword("rl","peek","rl/peek",-291391771)) : taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","peek","rl/peek",-291391771))))){
return f1(req_id,true);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),cmd,new cljs.core.Keyword(null,"req-id","req-id",-471642231),req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__38226 = taoensso.encore.limiter_STAR_(specs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38226,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38226,(1),null);
return f;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.Counter = (function (n_){
this.n_ = n_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.Counter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.n_);
}));

(taoensso.encore.Counter.prototype.call = (function (unused__11784__auto__){
var self__ = this;
var self__ = this;
var G__38230 = (arguments.length - (1));
switch (G__38230) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.encore.Counter.prototype.apply = (function (self__,args38229){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args38229)));
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var n = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (c){
return (c + (1));
})(cljs.core._deref(self__.n_)));

return n;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$1 = (function (add){
var self__ = this;
var _ = this;
var n = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (c){
return (c + add);
})(cljs.core._deref(self__.n_)));

return n;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$2 = (function (action,n){
var self__ = this;
var _ = this;
var G__38231 = action;
var G__38231__$1 = (((G__38231 instanceof cljs.core.Keyword))?G__38231.fqn:null);
switch (G__38231__$1) {
case "add":
cljs.core._vreset_BANG_(self__.n_,(function (c){
return (c + n);
})(cljs.core._deref(self__.n_)));

return null;

break;
case "set":
cljs.core.vreset_BANG_(self__.n_,n);

return null;

break;
case "set=":
case "set-get":
return cljs.core.vreset_BANG_(self__.n_,n);

break;
case "=set":
case "get-set":
var o = cljs.core.deref(self__.n_);
cljs.core.vreset_BANG_(self__.n_,n);

return o;

break;
case "=+":
case "get-add":
var o = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (c){
return (c + n);
})(cljs.core._deref(self__.n_)));

return o;

break;
case "+=":
case "add-get":
return cljs.core._vreset_BANG_(self__.n_,(function (c){
return (c + n);
})(cljs.core._deref(self__.n_)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38231__$1)].join('')));

}
}));

(taoensso.encore.Counter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n_","n_",-613247798,null)], null);
}));

(taoensso.encore.Counter.cljs$lang$type = true);

(taoensso.encore.Counter.cljs$lang$ctorStr = "taoensso.encore/Counter");

(taoensso.encore.Counter.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"taoensso.encore/Counter");
}));

/**
 * Positional factory function for taoensso.encore/Counter.
 */
taoensso.encore.__GT_Counter = (function taoensso$encore$__GT_Counter(n_){
return (new taoensso.encore.Counter(n_));
});

/**
 * Returns a fast atomic Counter with `init` initial int value:
 *  - (<counter>    ) -> add 1, return old val
 *  - (<counter> <n>) -> add n, return old val
 * 
 *  Experimental 3-arity version takes an `action`:
 *    :add, :set, :set-get, :get-set, :get-add, :add-get
 */
taoensso.encore.counter = (function taoensso$encore$counter(var_args){
var G__38233 = arguments.length;
switch (G__38233) {
case 0:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1((0));
}));

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new taoensso.encore.Counter(cljs.core.volatile_BANG_(init)));
}));

(taoensso.encore.counter.cljs$lang$maxFixedArity = 1);

taoensso.encore.rc_deref = (function taoensso$encore$rc_deref(msecs,ts_,n_skip_,gc_fn){
var t1 = (new Date()).getTime();
var n_skip0 = cljs.core.deref(n_skip_);
var ts = cljs.core.deref(ts_);
var n_total = cljs.core.count(ts);
var n_window = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,t0){
if(((t1 - t0) <= msecs)){
return (n + (1));
} else {
return n;
}
}),(0),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ts,n_skip0));
var n_skip1 = (n_total - n_window);
if((n_skip0 < n_skip1)){
cljs.core.reset_BANG_(n_skip_,n_skip1);

if((n_skip1 > (10000))){
(gc_fn.cljs$core$IFn$_invoke$arity$1 ? gc_fn.cljs$core$IFn$_invoke$arity$1(n_skip1) : gc_fn.call(null,n_skip1));
} else {
}
} else {
}

return n_window;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.RollingCounter = (function (msecs,ts_,n_skip_){
this.msecs = msecs;
this.ts_ = ts_;
this.n_skip_ = n_skip_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.RollingCounter.prototype.call = (function (unused__11784__auto__){
var self__ = this;
var self__ = this;
var G__38235 = (arguments.length - (1));
switch (G__38235) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.encore.RollingCounter.prototype.apply = (function (self__,args38234){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args38234)));
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ts_,(function (){var t1 = (new Date()).getTime();
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,t1);
});
})());

return this$;
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.rc_deref(self__.msecs,self__.ts_,self__.n_skip_,(function taoensso$encore$gc(n_skip1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ts_,(function (v){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,n_skip1);
}));

return cljs.core.reset_BANG_(self__.n_skip_,(0));
}));
}));

(taoensso.encore.RollingCounter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"msecs","msecs",-942455216,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"ts_","ts_",775102722,null),new cljs.core.Symbol(null,"n-skip_","n-skip_",-1562682054,null)], null);
}));

(taoensso.encore.RollingCounter.cljs$lang$type = true);

(taoensso.encore.RollingCounter.cljs$lang$ctorStr = "taoensso.encore/RollingCounter");

(taoensso.encore.RollingCounter.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"taoensso.encore/RollingCounter");
}));

/**
 * Positional factory function for taoensso.encore/RollingCounter.
 */
taoensso.encore.__GT_RollingCounter = (function taoensso$encore$__GT_RollingCounter(msecs,ts_,n_skip_){
return (new taoensso.encore.RollingCounter(msecs,ts_,n_skip_));
});

/**
 * Experimental. Returns a RollingCounter that you can:
 *  - Invoke to increment count in last `msecs` window and return RollingCounter.
 *  - Deref  to return    count in last `msecs` window.
 */
taoensso.encore.rolling_counter = (function taoensso$encore$rolling_counter(msecs){
return (new taoensso.encore.RollingCounter(cljs.core.long$((function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(msecs)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38236){if((e38236 instanceof Error)){
var e = e38236;
return e;
} else {
throw e38236;

}
}})();
if((e == null)){
return msecs;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2389,"(pos-int? msecs)",msecs,e,null);
}
})()),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))));
});
taoensso.encore.system_newline = "\n";
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__38241 = arguments.length;
switch (G__38241) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___38810 = arguments.length;
var i__5767__auto___38811 = (0);
while(true){
if((i__5767__auto___38811 < len__5766__auto___38810)){
args_arr__5791__auto__.push((arguments[i__5767__auto___38811]));

var G__38812 = (i__5767__auto___38811 + (1));
i__5767__auto___38811 = G__38812;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
}));

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,s);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),str_builder,more);
}));

/** @this {Function} */
(taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq38238){
var G__38239 = cljs.core.first(seq38238);
var seq38238__$1 = cljs.core.next(seq38238);
var G__38240 = cljs.core.first(seq38238__$1);
var seq38238__$2 = cljs.core.next(seq38238__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38239,G__38240,seq38238__$2);
}));

(taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2));

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_(acc)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(((taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__38243 = arguments.length;
switch (G__38243) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__5041__auto__ = separator;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__5041__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll));
}
}
}));

(taoensso.encore.str_join.cljs$lang$maxFixedArity = 3);

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__38245 = arguments.length;
switch (G__38245) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
}));

(taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4);

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__38247 = arguments.length;
switch (G__38247) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
}));

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
}));

(taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3);

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__38249 = arguments.length;
switch (G__38249) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start));
}));

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start,length));
}));

(taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3);

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",(cljs.core.truth_(match.ignoreCase)?"i":null),(cljs.core.truth_(match.multiline)?"m":null)].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:(function() { 
var G__38817__delegate = function (args){
var G__38250 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__38250) : replacement.call(null,G__38250));
};
var G__38817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38818__i = 0, G__38818__a = new Array(arguments.length -  0);
while (G__38818__i < G__38818__a.length) {G__38818__a[G__38818__i] = arguments[G__38818__i + 0]; ++G__38818__i;}
  args = new cljs.core.IndexedSeq(G__38818__a,0,null);
} 
return G__38817__delegate.call(this,args);};
G__38817.cljs$lang$maxFixedArity = 0;
G__38817.cljs$lang$applyTo = (function (arglist__38819){
var args = cljs.core.seq(arglist__38819);
return G__38817__delegate(args);
});
G__38817.cljs$core$IFn$_invoke$arity$variadic = G__38817__delegate;
return G__38817;
})()
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if((((void 0 === x)) || ((x == null)))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__5043__auto__ = fmt;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38820 = arguments.length;
var i__5767__auto___38821 = (0);
while(true){
if((i__5767__auto___38821 < len__5766__auto___38820)){
args__5772__auto__.push((arguments[i__5767__auto___38821]));

var G__38822 = (i__5767__auto___38821 + (1));
i__5767__auto___38821 = G__38822;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_(fmt,args);
}));

(taoensso.encore.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.format.cljs$lang$applyTo = (function (seq38251){
var G__38252 = cljs.core.first(seq38251);
var seq38251__$1 = cljs.core.next(seq38251);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38252,seq38251__$1);
}));

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll));
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var in$__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$);
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref(acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref(acc_empty_QMARK__);
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll));
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38823 = arguments.length;
var i__5767__auto___38824 = (0);
while(true){
if((i__5767__auto___38824 < len__5766__auto___38823)){
args__5772__auto__.push((arguments[i__5767__auto___38824]));

var G__38825 = (i__5767__auto___38824 + (1));
i__5767__auto___38824 = G__38825;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
}));

(taoensso.encore.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.path.cljs$lang$applyTo = (function (seq38253){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38253));
}));

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__38255 = arguments.length;
switch (G__38255) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),max_length);
}));

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex())].join('');
}));

(taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1);

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38827 = arguments.length;
var i__5767__auto___38828 = (0);
while(true){
if((i__5767__auto___38828 < len__5766__auto___38827)){
args__5772__auto__.push((arguments[i__5767__auto___38828]));

var G__38829 = (i__5767__auto___38828 + (1));
i__5767__auto___38828 = G__38829;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_(in$)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs));
}));

(taoensso.encore.into_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.into_str.cljs$lang$applyTo = (function (seq38256){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38256));
}));

/**
 * Constant-time string equality checker.
 *   Useful to prevent timing attacks, etc.
 */
taoensso.encore.const_str_EQ_ = (function taoensso$encore$const_str_EQ_(s1,s2){
if(cljs.core.truth_((function (){var and__5041__auto__ = s1;
if(cljs.core.truth_(and__5041__auto__)){
return s2;
} else {
return and__5041__auto__;
}
})())){
var vx = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","1"], null);
var v1 = cljs.core.vec(s1);
var v2 = cljs.core.vec(s2);
var n1 = cljs.core.count(v1);
var n2 = cljs.core.count(v2);
var nmax = (function (){var x__5128__auto__ = n1;
var y__5129__auto__ = n2;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var nmin = (function (){var x__5131__auto__ = n1;
var y__5132__auto__ = n2;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
if((idx >= nmin)){
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vx,(0)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vx,(1)));
if(and__5041__auto__){
return acc;
} else {
return and__5041__auto__;
}
} else {
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v1,idx),cljs.core.get.cljs$core$IFn$_invoke$arity$2(v2,idx));
if(and__5041__auto__){
return acc;
} else {
return and__5041__auto__;
}
}
}),true,nmax);
} else {
return null;
}
});
/**
 * Returns `size` random bytes using `secure-rng` or `js/Crypto`.
 */
taoensso.encore.secure_rand_bytes = (function taoensso$encore$secure_rand_bytes(size){
var ba = (new Uint8Array(size));
Crypto.getRandomValues(ba);

return ba;
});
taoensso.encore.nanoid_alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
/**
 * Ref.
 *  Java impl.: https://bit.ly/3dtYv73,
 *    JS impl.: https://bit.ly/3fYv1zT,
 *  Motivation: https://bit.ly/2VhWuEO
 */
taoensso.encore.parse_alphabet = taoensso.encore.fmemoize((function (alphabet,len){
var an = cljs.core.count(alphabet);
var len__$1 = cljs.core.long$(len);
var _ = (((((an < (1))) || ((an > (256)))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`alphabet`: must be \u2115\u2208[1,256]",cljs.core.PersistentArrayMap.EMPTY)})():null);
var ___$1 = (((len__$1 <= (0)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`len`: must be \u2115\u2208[0,\u221E)",cljs.core.PersistentArrayMap.EMPTY)})():null);
var mask = (((2) << (Math.floor((Math.log((an - (1))) / Math.log((2)))) | (0))) - (1));
var step = cljs.core.long$(Math.ceil((((1.6 * mask) * len__$1) / an)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mask,step,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,alphabet)], null);
}));
/**
 * Experimental.
 *   Given `alphabet` (a string of possible characters), returns a securely
 *   random string of length `len`.
 * 
 *   Trying to do this the obvious/naive way (by repeatedly generating a secure
 *   random number and mapping it to an alphabet character with modulo) actually
 *   introduces bias into ids that can be exploited by an attacker.
 * 
 *   The method used here is designed to eliminate that bias.
 *   Based on https://bit.ly/3dtYv73.
 */
taoensso.encore.secure_rand_id = (function taoensso$encore$secure_rand_id(alphabet,len){
var vec__38257 = taoensso.encore.parse_alphabet(alphabet,len);
var mask = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38257,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38257,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38257,(2),null);
var an = cljs.core.count(v);
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
while(true){
var ba = taoensso.encore.secure_rand_bytes(step);
var result = taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3(((function (ba,vec__38257,mask,step,v,an,sb){
return (function (acc,idx){
var alpha_idx = (mask & (ba[idx]));
if((alpha_idx >= an)){
return acc;
} else {
var acc__$1 = taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(alpha_idx) : v.call(null,alpha_idx)));
if((cljs.core.count(acc__$1) === len)){
return cljs.core.reduced(cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc__$1));
} else {
return acc__$1;
}
}
});})(ba,vec__38257,mask,step,v,an,sb))
,sb,step);
if(typeof result === 'string'){
return result;
} else {
continue;
}
break;
}
});
var alphabet_38830 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_");
var mask_38831 = (63);
/**
 * Experimental. Optimized variant of `secure-rand-id` that returns Nano IDs
 *  as in https://github.com/ai/nanoid.
 */
taoensso.encore.nanoid = (function taoensso$encore$nanoid(var_args){
var G__38261 = arguments.length;
switch (G__38261) {
case 0:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1((21));
}));

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1 = (function (len){
var ba = taoensso.encore.secure_rand_bytes(len);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,(function (){var G__38263 = (mask_38831 & (ba[idx]));
return (alphabet_38830.cljs$core$IFn$_invoke$arity$1 ? alphabet_38830.cljs$core$IFn$_invoke$arity$1(G__38263) : alphabet_38830.call(null,G__38263));
})());
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),ba.length));
}));

(taoensso.encore.nanoid.cljs$lang$maxFixedArity = 1);

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
/**
 * Like `core/sort` but:
 *  - Returns a vector.
 *  - `comparator` can be `:asc`, `:desc`, or an arbitrary comparator.
 *  - An optional `keyfn` may be provided, as in `core/sort-by`.
 */
taoensso.encore.sortv = (function taoensso$encore$sortv(var_args){
var G__38265 = arguments.length;
switch (G__38265) {
case 1:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3(null,new cljs.core.Keyword(null,"asc","asc",356854569),coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2 = (function (comparator,coll){
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3(null,comparator,coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_keyfn,comparator,coll){
if(cljs.core.seq(coll)){
var comparator__$1 = (function (){var G__38266 = comparator;
var G__38266__$1 = (((G__38266 instanceof cljs.core.Keyword))?G__38266.fqn:null);
switch (G__38266__$1) {
case "asc":
return cljs.core.compare;

break;
case "dsc":
case "desc":
return (function (x,y){
return cljs.core.compare(y,x);
});

break;
default:
return comparator;

}
})();
var comparator__$2 = (function (){var b2__26863__auto__ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_keyfn,cljs.core.identity))?_QMARK_keyfn:null);
if(cljs.core.truth_(b2__26863__auto__)){
var kfn = b2__26863__auto__;
return (function (x,y){
var G__38267 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(x) : kfn.call(null,x));
var G__38268 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(y) : kfn.call(null,y));
return (comparator__$1.cljs$core$IFn$_invoke$arity$2 ? comparator__$1.cljs$core$IFn$_invoke$arity$2(G__38267,G__38268) : comparator__$1.call(null,G__38267,G__38268));
});
} else {
return comparator__$1;
}
})();
var a = cljs.core.to_array(coll);
taoensso.encore.goog$module$goog$array.stableSort(a,cljs.core.fn__GT_comparator(comparator__$2));

return cljs.core.with_meta(cljs.core.vec(a),cljs.core.meta(coll));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.sortv.cljs$lang$maxFixedArity = 3);

var sentinel_38835 = ({});
var nil__GT_sentinel_38836 = (function (x){
if((x == null)){
return sentinel_38835;
} else {
return x;
}
});
var sentinel__GT_nil_38837 = (function (x){
if((x === sentinel_38835)){
return null;
} else {
return x;
}
});
/**
 * Reduces the top `n` items from `coll` of N items.
 *  Clj impln is O(N.logn) vs O(N.logN) for (take n (sort-by ...)).
 */
taoensso.encore.reduce_top = (function taoensso$encore$reduce_top(var_args){
var G__38273 = arguments.length;
switch (G__38273) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count(coll);
var n__$1 = cljs.core.long$((function (){var x__5131__auto__ = coll_size;
var y__5132__auto__ = cljs.core.long$(n);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.take.cljs$core$IFn$_invoke$arity$1(n__$1),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf),init,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
} else {
return init;
}
}));

(taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6);

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__38275 = arguments.length;
switch (G__38275) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_(to)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$(to),coll));
} else {
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj,to,coll);
}
}));

(taoensso.encore.top_into.cljs$lang$maxFixedArity = 5);

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__38277 = arguments.length;
switch (G__38277) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
}));

(taoensso.encore.top.cljs$lang$maxFixedArity = 4);

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38841 = arguments.length;
var i__5767__auto___38842 = (0);
while(true){
if((i__5767__auto___38842 < len__5766__auto___38841)){
args__5772__auto__.push((arguments[i__5767__auto___38842]));

var G__38843 = (i__5767__auto___38842 + (1));
i__5767__auto___38842 = G__38843;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__38291){
var map__38292 = p__38291;
var map__38292__$1 = cljs.core.__destructure_map(map__38292);
var opts = map__38292__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
taoensso.truss.impl.revery_QMARK_((function (__in){
if(cljs.core.truth_((function (){var fexpr__38293 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null);
return (fexpr__38293.cljs$core$IFn$_invoke$arity$1 ? fexpr__38293.cljs$core$IFn$_invoke$arity$1(__in) : fexpr__38293.call(null,__in));
})())){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2951,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
}),cljs.core.keys(opts));

return taoensso.encore.round0((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
}));

(taoensso.encore.ms.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.ms.cljs$lang$applyTo = (function (seq38290){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38290));
}));

taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = (((typeof console !== 'undefined'))?(function() { 
var G__38844__delegate = function (xs){
var b2__26863__auto__ = console.log;
if(cljs.core.truth_(b2__26863__auto__)){
var f = b2__26863__auto__;
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
var G__38844 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__38845__i = 0, G__38845__a = new Array(arguments.length -  0);
while (G__38845__i < G__38845__a.length) {G__38845__a[G__38845__i] = arguments[G__38845__i + 0]; ++G__38845__i;}
  xs = new cljs.core.IndexedSeq(G__38845__a,0,null);
} 
return G__38844__delegate.call(this,xs);};
G__38844.cljs$lang$maxFixedArity = 0;
G__38844.cljs$lang$applyTo = (function (arglist__38846){
var xs = cljs.core.seq(arglist__38846);
return G__38844__delegate(xs);
});
G__38844.cljs$core$IFn$_invoke$arity$variadic = G__38844__delegate;
return G__38844;
})()
:(function() { 
var G__38847__delegate = function (xs){
return null;
};
var G__38847 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__38848__i = 0, G__38848__a = new Array(arguments.length -  0);
while (G__38848__i < G__38848__a.length) {G__38848__a[G__38848__i] = arguments[G__38848__i + 0]; ++G__38848__i;}
  xs = new cljs.core.IndexedSeq(G__38848__a,0,null);
} 
return G__38847__delegate.call(this,xs);};
G__38847.cljs$lang$maxFixedArity = 0;
G__38847.cljs$lang$applyTo = (function (arglist__38849){
var xs = cljs.core.seq(arglist__38849);
return G__38847__delegate(xs);
});
G__38847.cljs$core$IFn$_invoke$arity$variadic = G__38847__delegate;
return G__38847;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38850 = arguments.length;
var i__5767__auto___38851 = (0);
while(true){
if((i__5767__auto___38851 < len__5766__auto___38850)){
args__5772__auto__.push((arguments[i__5767__auto___38851]));

var G__38852 = (i__5767__auto___38851 + (1));
i__5767__auto___38851 = G__38852;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.logp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.logp.cljs$lang$applyTo = (function (seq38303){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38303));
}));


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38853 = arguments.length;
var i__5767__auto___38854 = (0);
while(true){
if((i__5767__auto___38854 < len__5766__auto___38853)){
args__5772__auto__.push((arguments[i__5767__auto___38854]));

var G__38855 = (i__5767__auto___38854 + (1));
i__5767__auto___38854 = G__38855;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.sayp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.sayp.cljs$lang$applyTo = (function (seq38304){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38304));
}));


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38856 = arguments.length;
var i__5767__auto___38857 = (0);
while(true){
if((i__5767__auto___38857 < len__5766__auto___38856)){
args__5772__auto__.push((arguments[i__5767__auto___38857]));

var G__38858 = (i__5767__auto___38857 + (1));
i__5767__auto___38857 = G__38858;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log(taoensso.encore.format_STAR_(fmt,xs));
}));

(taoensso.encore.logf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.logf.cljs$lang$applyTo = (function (seq38305){
var G__38306 = cljs.core.first(seq38305);
var seq38305__$1 = cljs.core.next(seq38305);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38306,seq38305__$1);
}));


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38859 = arguments.length;
var i__5767__auto___38860 = (0);
while(true){
if((i__5767__auto___38860 < len__5766__auto___38859)){
args__5772__auto__.push((arguments[i__5767__auto___38860]));

var G__38861 = (i__5767__auto___38860 + (1));
i__5767__auto___38860 = G__38861;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_(fmt,xs));
}));

(taoensso.encore.sayf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.sayf.cljs$lang$applyTo = (function (seq38307){
var G__38308 = cljs.core.first(seq38307);
var seq38307__$1 = cljs.core.next(seq38307);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38308,seq38307__$1);
}));

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__26863__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__26863__auto__)){
var js_win = b2__26863__auto__;
var b2__26863__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__26863__auto____$1)){
var loc = b2__26863__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *     be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref(taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = (((typeof FormData !== 'undefined'))?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = (((typeof File !== 'undefined'))?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq(params)){
return goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(params)).toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1(params);
var uri_with_query = ((clojure.string.blank_QMARK_(qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = (function (uri,params){
if(cljs.core.truth_(taoensso.encore.js_form_data_QMARK_(params))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_38862 = (function (){try{if(cljs.core.map_QMARK_(params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38309){if((e38309 instanceof Error)){
var e_38862 = e38309;
return e_38862;
} else {
throw e38309;

}
}})();
if((e_38862 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",3276,"(map? params)",params,e_38862,null);
}

if(cljs.core.truth_((function (){var and__5041__auto__ = (typeof FormData !== 'undefined');
if(and__5041__auto__){
return taoensso.encore.rsome(taoensso.encore.js_file_QMARK_,cljs.core.vals(params));
} else {
return and__5041__auto__;
}
})())){
var form_data = (new FormData());
var seq__38310_38863 = cljs.core.seq(params);
var chunk__38311_38864 = null;
var count__38312_38865 = (0);
var i__38313_38866 = (0);
while(true){
if((i__38313_38866 < count__38312_38865)){
var vec__38320_38867 = chunk__38311_38864.cljs$core$IIndexed$_nth$arity$2(null,i__38313_38866);
var k_38868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38320_38867,(0),null);
var v_38869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38320_38867,(1),null);
form_data.append(cljs.core.name(k_38868),v_38869);


var G__38870 = seq__38310_38863;
var G__38871 = chunk__38311_38864;
var G__38872 = count__38312_38865;
var G__38873 = (i__38313_38866 + (1));
seq__38310_38863 = G__38870;
chunk__38311_38864 = G__38871;
count__38312_38865 = G__38872;
i__38313_38866 = G__38873;
continue;
} else {
var temp__5753__auto___38874 = cljs.core.seq(seq__38310_38863);
if(temp__5753__auto___38874){
var seq__38310_38875__$1 = temp__5753__auto___38874;
if(cljs.core.chunked_seq_QMARK_(seq__38310_38875__$1)){
var c__5565__auto___38876 = cljs.core.chunk_first(seq__38310_38875__$1);
var G__38877 = cljs.core.chunk_rest(seq__38310_38875__$1);
var G__38878 = c__5565__auto___38876;
var G__38879 = cljs.core.count(c__5565__auto___38876);
var G__38880 = (0);
seq__38310_38863 = G__38877;
chunk__38311_38864 = G__38878;
count__38312_38865 = G__38879;
i__38313_38866 = G__38880;
continue;
} else {
var vec__38323_38881 = cljs.core.first(seq__38310_38875__$1);
var k_38882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38323_38881,(0),null);
var v_38883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38323_38881,(1),null);
form_data.append(cljs.core.name(k_38882),v_38883);


var G__38884 = cljs.core.next(seq__38310_38875__$1);
var G__38885 = null;
var G__38886 = (0);
var G__38887 = (0);
seq__38310_38863 = G__38884;
chunk__38311_38864 = G__38885;
count__38312_38865 = G__38886;
i__38313_38866 = G__38887;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode(params)], null);
}
}
});
return (function (uri,method,params){
if(cljs.core.truth_((function (x){
var or__5043__auto__ = (x == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_)(x);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.js_form_data_QMARK_)(x);
}
}
})(params))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",3288,"([:or nil? map? js-form-data?] params)",params,null,null);
}

var G__38326 = method;
var G__38326__$1 = (((G__38326 instanceof cljs.core.Keyword))?G__38326.fqn:null);
switch (G__38326__$1) {
case "get":
return url_encode(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38326__$1)].join('')));

}
});
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *     {:method     :post
 *      :params     {:username "Rich Hickey" :type "Awesome"}
 *      :headers    {"Foo" "Bar"}
 *      :resp-type  :text
 *      :timeout-ms 7000
 *      :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *     }
 *     (fn async-callback-fn [resp-map]
 *       (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *         ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *         ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                            :abort :http-error :exception :xhr-pool-depleted}
 *         (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__38328,callback_fn){
var map__38329 = p__38328;
var map__38329__$1 = cljs.core.__destructure_map(map__38329);
var opts = map__38329__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38329__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38329__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38329__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38329__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38329__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38329__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
if(cljs.core.truth_((function (x){
var or__5043__auto__ = (x == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_)(x);
}
})(timeout_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",3320,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__26863__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(b2__26863__auto__)){
var xhr = b2__26863__auto__;
try{var timeout_ms__$1 = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__38335 = method;
var G__38335__$1 = (((G__38335 instanceof cljs.core.Keyword))?G__38335.fqn:null);
switch (G__38335__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38335__$1)].join('')));

}
})();
var vec__38332 = taoensso.encore.coerce_xhr_params(uri,method,params);
var xhr_uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38332,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38332,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys((function (p1__38327_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__38327_SHARP_));
}),headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
var _QMARK_progress_listener = (function (){var b2__26863__auto____$1 = new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__26863__auto____$1)){
var pf = b2__26863__auto____$1;
xhr.setProgressEventsEnabled(true);

return goog.events.listen(xhr,goog.net.EventType.PROGRESS,(function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__5041__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__5041__auto__;
}
})())?(loaded / total):null);
var G__38336 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null);
return (pf.cljs$core$IFn$_invoke$arity$1 ? pf.cljs$core$IFn$_invoke$arity$1(G__38336) : pf.call(null,G__38336));
}));
} else {
return null;
}
})();
var G__38337_38890 = xhr;
goog.events.listenOnce(G__38337_38890,goog.net.EventType.READY,(function (_){
return cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);
}));

goog.events.listenOnce(G__38337_38890,goog.net.EventType.COMPLETE,(function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__38338 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?resp_type:(((_QMARK_content_type == null))?new cljs.core.Keyword(null,"text","text",-1790561697):(function (){var cts = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type));
var match_QMARK_ = (function (s){
return taoensso.encore.str_contains_QMARK_(cts,s);
});
if(match_QMARK_("/edn")){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(match_QMARK_("/json")){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(match_QMARK_("/xml")){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
})()));
try{var G__38342 = resp_type__$1;
var G__38342__$1 = (((G__38342 instanceof cljs.core.Keyword))?G__38342.fqn:null);
switch (G__38342__$1) {
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38342__$1)].join('')));

}
}catch (e38341){var _e = e38341;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38338,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38338,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38338,(2),null);
if(cljs.core.truth_(_QMARK_progress_listener)){
goog.events.unlistenByKey(_QMARK_progress_listener);
} else {
}

var G__38343 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_status,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),_QMARK_content_type,new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)]),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881))))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__38343) : callback_fn.call(null,G__38343));
}));


xhr.setTimeoutInterval((function (){var or__5043__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e38330){var e = e38330;
cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);

var G__38331_38892 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__38331_38892) : callback_fn.call(null,G__38331_38892));

return null;
}} else {
var G__38344_38893 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__38344_38893) : callback_fn.call(null,G__38344_38893));

return null;
}
});
/**
 * Based on https://goo.gl/fBqy6e
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),s),"*","%2A");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38894 = arguments.length;
var i__5767__auto___38895 = (0);
while(true){
if((i__5767__auto___38895 < len__5766__auto___38894)){
args__5772__auto__.push((arguments[i__5767__auto___38895]));

var G__38896 = (i__5767__auto___38895 + (1));
i__5767__auto___38895 = G__38896;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__38347){
var vec__38348 = p__38347;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38348,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
}));

(taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq38345){
var G__38346 = cljs.core.first(seq38345);
var seq38345__$1 = cljs.core.next(seq38345);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38346,seq38345__$1);
}));

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [taoensso.encore.url_encode(taoensso.encore.as_qname(k)),"=",taoensso.encore.url_encode((function (){var or__5043__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
})())].join('');
});
var join = (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__5520__auto__ = (function taoensso$encore$format_query_string_$_iter__38351(s__38352){
return (new cljs.core.LazySeq(null,(function (){
var s__38352__$1 = s__38352;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__38352__$1);
if(temp__5753__auto__){
var s__38352__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38352__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__38352__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__38354 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__38353 = (0);
while(true){
if((i__38353 < size__5519__auto__)){
var vec__38355 = cljs.core._nth(c__5518__auto__,i__38353);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38355,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38355,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__38354,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__5043__auto__ = cljs.core.seq(v);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__38897 = (i__38353 + (1));
i__38353 = G__38897;
continue;
} else {
var G__38898 = (i__38353 + (1));
i__38353 = G__38898;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38354),taoensso$encore$format_query_string_$_iter__38351(cljs.core.chunk_rest(s__38352__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38354),null);
}
} else {
var vec__38358 = cljs.core.first(s__38352__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38358,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38358,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__5043__auto__ = cljs.core.seq(v);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__38351(cljs.core.rest(s__38352__$2)));
} else {
var G__38899 = cljs.core.rest(s__38352__$2);
s__38352__$1 = G__38899;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__26863__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__26863__auto__)){
var cur = b2__26863__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38900 = arguments.length;
var i__5767__auto___38901 = (0);
while(true){
if((i__5767__auto___38901 < len__5766__auto___38900)){
args__5772__auto__.push((arguments[i__5767__auto___38901]));

var G__38902 = (i__5767__auto___38901 + (1));
i__5767__auto___38901 = G__38902;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__38363){
var vec__38364 = p__38363;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38364,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38364,(1),null);
if(((clojure.string.blank_QMARK_(s)) || ((!(taoensso.encore.str_contains_QMARK_(s,"=")))))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,param){
var b2__26863__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__26863__auto__)){
var vec__38367 = b2__26863__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38367,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38367,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
}
}));

(taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq38361){
var G__38362 = cljs.core.first(seq38361);
var seq38361__$1 = cljs.core.next(seq38361);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38362,seq38361__$1);
}));

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__38370 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38370,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38370,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__26863__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__26863__auto__)){
var qstr = b2__26863__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",qstr].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_((function() { 
var G__38903__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempting to call uninitialized stub fn (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),")"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stub","stub",1339145807),name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__38903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38904__i = 0, G__38904__a = new Array(arguments.length -  0);
while (G__38904__i < G__38904__a.length) {G__38904__a[G__38904__i] = arguments[G__38904__i + 0]; ++G__38904__i;}
  args = new cljs.core.IndexedSeq(G__38904__a,0,null);
} 
return G__38903__delegate.call(this,args);};
G__38903.cljs$lang$maxFixedArity = 0;
G__38903.cljs$lang$applyTo = (function (arglist__38905){
var args = cljs.core.seq(arglist__38905);
return G__38903__delegate(args);
});
G__38903.cljs$core$IFn$_invoke$arity$variadic = G__38903__delegate;
return G__38903;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_(f)){
return f;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),f,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(f)], null));
}
});
var always_38906 = (function taoensso$encore$always(_QMARK_in_str){
return true;
});
var never_38907 = (function taoensso$encore$never(_QMARK_in_str){
return false;
});
var wild_str__GT__QMARK_re_pattern_38908 = (function (s){
if(taoensso.encore.str_contains_QMARK_(s,"*")){
return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join(''),".","\\."),"*","(.*)"));
} else {
return null;
}
});
var compile_38909 = (function taoensso$encore$compile(spec,cache_QMARK_){
while(true){
if(cljs.core.truth_((function (){var fexpr__38378 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,new cljs.core.Keyword(null,"any","any",1705907423),null], null), null);
return (fexpr__38378.cljs$core$IFn$_invoke$arity$1 ? fexpr__38378.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__38378.call(null,spec));
})())){
return always_38906;
} else {
if(cljs.core.truth_((function (){var fexpr__38379 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"none","none",1333468478)]);
return (fexpr__38379.cljs$core$IFn$_invoke$arity$1 ? fexpr__38379.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__38379.call(null,spec));
})())){
return never_38907;
} else {
if(taoensso.encore.re_pattern_QMARK_(spec)){
return ((function (spec,cache_QMARK_,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908){
return (function (in_str){
return cljs.core.re_find(spec,in_str);
});
;})(spec,cache_QMARK_,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908))
} else {
if(typeof spec === 'string'){
var b2__26863__auto__ = wild_str__GT__QMARK_re_pattern_38908(spec);
if(cljs.core.truth_(b2__26863__auto__)){
var re_pattern = b2__26863__auto__;
var G__38910 = re_pattern;
var G__38911 = cache_QMARK_;
spec = G__38910;
cache_QMARK_ = G__38911;
continue;
} else {
return ((function (spec,cache_QMARK_,b2__26863__auto__,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908){
return (function (in_str){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_str,spec);
});
;})(spec,cache_QMARK_,b2__26863__auto__,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908))
}
} else {
if(((cljs.core.vector_QMARK_(spec)) || (cljs.core.set_QMARK_(spec)))){
if(cljs.core.truth_((function (){var fexpr__38380 = cljs.core.set(spec);
return (fexpr__38380.cljs$core$IFn$_invoke$arity$1 ? fexpr__38380.cljs$core$IFn$_invoke$arity$1("*") : fexpr__38380.call(null,"*"));
})())){
return always_38906;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(spec),(1))){
var G__38912 = cljs.core.first(spec);
var G__38913 = cache_QMARK_;
spec = G__38912;
cache_QMARK_ = G__38913;
continue;
} else {
var vec__38381 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (spec,cache_QMARK_,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908){
return (function (p__38384,spec__$1){
var vec__38385 = p__38384;
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38385,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38385,(1),null);
var b2__26863__auto__ = ((taoensso.encore.re_pattern_QMARK_(spec__$1))?spec__$1:wild_str__GT__QMARK_re_pattern_38908(spec__$1));
if(cljs.core.truth_(b2__26863__auto__)){
var re_pattern = b2__26863__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fixed_strs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(re_patterns,re_pattern)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fixed_strs,spec__$1),re_patterns], null);
}
});})(spec,cache_QMARK_,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),spec);
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38381,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38381,(1),null);
var fx_match = cljs.core.not_empty(fixed_strs);
var re_match = (function (){var b2__26863__auto__ = cljs.core.not_empty(re_patterns);
if(cljs.core.truth_(b2__26863__auto__)){
var re_patterns__$1 = b2__26863__auto__;
var f = ((function (spec,cache_QMARK_,re_patterns__$1,b2__26863__auto__,vec__38381,fixed_strs,re_patterns,fx_match,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908){
return (function (in_str){
return taoensso.encore.rsome(((function (spec,cache_QMARK_,re_patterns__$1,b2__26863__auto__,vec__38381,fixed_strs,re_patterns,fx_match,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908){
return (function (p1__38377_SHARP_){
return cljs.core.re_find(p1__38377_SHARP_,in_str);
});})(spec,cache_QMARK_,re_patterns__$1,b2__26863__auto__,vec__38381,fixed_strs,re_patterns,fx_match,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908))
,re_patterns__$1);
});})(spec,cache_QMARK_,re_patterns__$1,b2__26863__auto__,vec__38381,fixed_strs,re_patterns,fx_match,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908))
;
if(cljs.core.truth_(cache_QMARK_)){
return taoensso.encore.fmemoize(f);
} else {
return f;
}
} else {
return null;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = fx_match;
if(cljs.core.truth_(and__5041__auto__)){
return re_match;
} else {
return and__5041__auto__;
}
})())){
return ((function (spec,cache_QMARK_,vec__38381,fixed_strs,re_patterns,fx_match,re_match,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908){
return (function (in_str){
var or__5043__auto__ = (fx_match.cljs$core$IFn$_invoke$arity$1 ? fx_match.cljs$core$IFn$_invoke$arity$1(in_str) : fx_match.call(null,in_str));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (re_match.cljs$core$IFn$_invoke$arity$1 ? re_match.cljs$core$IFn$_invoke$arity$1(in_str) : re_match.call(null,in_str));
}
});
;})(spec,cache_QMARK_,vec__38381,fixed_strs,re_patterns,fx_match,re_match,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908))
} else {
if(cljs.core.truth_(fx_match)){
return fx_match;
} else {
if(cljs.core.truth_(re_match)){
return re_match;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`encore/cond!`: no matching clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected compile spec type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),spec,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(spec)], null));
}
}
}
}
}
break;
}
});
/**
 * Compiles given spec and returns a fast (fn conform? [?in-str]).
 * 
 *  Spec may be:
 *    - A regex pattern. Will conform on match.
 *    - A string, in which any "*"s will act as wildcards (#".*").
 *      Will conform on match.
 * 
 *    - A vector or set of regex patterns or strings.
 *      Will conform on ANY match.
 *      If you need literal "*"s, use an explicit regex pattern instead.
 * 
 *    - {:allow <allow-spec> :deny <deny-spec> :cache? <bool>}.
 *      Will conform iff allow-spec matches AND deny-spec does NOT.
 * 
 *  Input may be: namespace strings, class names, etc.
 *  Useful as string allowlist (whitelist) and/or denylist (blacklist).
 * 
 *  Spec examples:
 *    #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *    {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}
 */
taoensso.encore.compile_str_filter = (function taoensso$encore$compile_str_filter(spec){
while(true){
if(cljs.core.map_QMARK_(spec)){
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"cache?","cache?",-1601953949));
var allow_spec = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"whitelist","whitelist",-979294437));
}
})();
var deny_spec = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"deny","deny",1589338523));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170));
}
})();
var allow = (function (){var b2__26863__auto__ = allow_spec;
if(cljs.core.truth_(b2__26863__auto__)){
var as = b2__26863__auto__;
return compile_38909(as,cache_QMARK_);
} else {
return null;
}
})();
var deny = (function (){var b2__26863__auto__ = deny_spec;
if(cljs.core.truth_(b2__26863__auto__)){
var ds = b2__26863__auto__;
return compile_38909(ds,cache_QMARK_);
} else {
return null;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deny,always_38906)){
return never_38907;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,never_38907)){
return never_38907;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = allow;
if(cljs.core.truth_(and__5041__auto__)){
return deny;
} else {
return and__5041__auto__;
}
})())){
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908,compile_38909){
return (function (_QMARK_in_str){
var in_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_in_str);
if(cljs.core.truth_((allow.cljs$core$IFn$_invoke$arity$1 ? allow.cljs$core$IFn$_invoke$arity$1(in_str) : allow.call(null,in_str)))){
if(cljs.core.truth_((deny.cljs$core$IFn$_invoke$arity$1 ? deny.cljs$core$IFn$_invoke$arity$1(in_str) : deny.call(null,in_str)))){
return false;
} else {
return true;
}
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908,compile_38909))
} else {
if(cljs.core.truth_(allow)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,always_38906)){
return always_38906;
} else {
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908,compile_38909){
return (function (_QMARK_in_str){
if(cljs.core.truth_((function (){var G__38388 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_in_str);
return (allow.cljs$core$IFn$_invoke$arity$1 ? allow.cljs$core$IFn$_invoke$arity$1(G__38388) : allow.call(null,G__38388));
})())){
return true;
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908,compile_38909))
}
} else {
if(cljs.core.truth_(deny)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deny,never_38907)){
return always_38906;
} else {
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908,compile_38909){
return (function (_QMARK_in_str){
if(cljs.core.truth_((function (){var G__38389 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_in_str);
return (deny.cljs$core$IFn$_invoke$arity$1 ? deny.cljs$core$IFn$_invoke$arity$1(G__38389) : deny.call(null,G__38389));
})())){
return true;
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_38906,never_38907,wild_str__GT__QMARK_re_pattern_38908,compile_38909))
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("compile-str-filter: `allow-spec` and `deny-spec` cannot both be nil",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow-spec","allow-spec",448749872),allow_spec,new cljs.core.Keyword(null,"deny-spec","deny-spec",-1074984268),deny_spec], null));
}
}
}
}
}
} else {
var G__38914 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),spec,new cljs.core.Keyword(null,"deny","deny",1589338523),null], null);
spec = G__38914;
continue;
}
break;
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

var taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_38915 = (function (_,msecs,f){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__5391__auto__.call(null,_,msecs,f));
} else {
var m__5389__auto__ = (taoensso.encore._schedule_timeout["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__5389__auto__.call(null,_,msecs,f));
} else {
throw cljs.core.missing_protocol("ITimeoutImpl.-schedule-timeout",_);
}
}
});
taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
return taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_38915(_,msecs,f);
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
}));

(taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true);

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl");

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"taoensso.encore/DefaultTimeoutImpl");
}));

/**
 * Positional factory function for taoensso.encore/DefaultTimeoutImpl.
 */
taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore.default_timeout_impl_ !== 'undefined')){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = ({});

taoensso.encore._tout_cancelled = ({});

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_pending) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending)))){
return new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352);
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_cancelled) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled)))){
return new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279);
} else {
return cljs.core.deref(result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

var taoensso$encore$ITimeoutFuture$tf_state$dyn_38916 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (taoensso.encore.tf_state["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-state",_);
}
}
});
/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_state$dyn_38916(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_poll$dyn_38917 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (taoensso.encore.tf_poll["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-poll",_);
}
}
});
/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_poll$dyn_38917(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_38918 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (taoensso.encore.tf_done_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-done?",_);
}
}
});
/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_38918(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_38919 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (taoensso.encore.tf_pending_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-pending?",_);
}
}
});
/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_38919(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_38920 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancelled?",_);
}
}
});
/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_38920(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_38921 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (taoensso.encore.tf_cancel_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancel!",_);
}
}
});
/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_38921(_);
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.f,new cljs.core.Keyword(null,"udt","udt",2011712751),self__.udt], null);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result(cljs.core.deref(self__.result__));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not((function (){var G__38394 = cljs.core.deref(self__.result__);
var G__38395 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__38394,G__38395) : taoensso.encore.kw_identical_QMARK_.call(null,G__38394,G__38395));
})());
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__38396 = cljs.core.deref(self__.result__);
var G__38397 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__38396,G__38397) : taoensso.encore.kw_identical_QMARK_.call(null,G__38396,G__38397));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__38398 = cljs.core.deref(self__.result__);
var G__38399 = taoensso.encore._tout_cancelled;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__38398,G__38399) : taoensso.encore.kw_identical_QMARK_.call(null,G__38398,G__38399));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_(self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(null);
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(null);
}));

(taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"result__","result__",1529131748,null),new cljs.core.Symbol(null,"udt","udt",-642723018,null)], null);
}));

(taoensso.encore.TimeoutFuture.cljs$lang$type = true);

(taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture");

(taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"taoensso.encore/TimeoutFuture");
}));

/**
 * Positional factory function for taoensso.encore/TimeoutFuture.
 */
taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__38401 = arguments.length;
switch (G__38401) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3(taoensso.encore.default_timeout_impl_,msecs,f);
}));

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$(msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(taoensso.encore._tout_pending);
var cas_f = (function (){
var result_ = (new cljs.core.Delay((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),null));
if(cljs.core.compare_and_set_BANG_(result__,taoensso.encore._tout_pending,result_)){
return cljs.core.deref(result_);
} else {
return null;
}
});
var impl_38923 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_38923,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
}));

(taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3);

taoensso.encore._ex_message = (function taoensso$encore$_ex_message(ex){
if((ex instanceof Error)){
return ex.message;
} else {
return null;
}
});
taoensso.encore._matching_throwable = (function taoensso$encore$_matching_throwable(var_args){
var G__38403 = arguments.length;
switch (G__38403) {
case 1:
return taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$1 = (function (ex){
if(cljs.core.truth_(ex)){
return ex;
} else {
return null;
}
}));

(taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$2 = (function (c,ex){
if(cljs.core.truth_((function (){var c__5076__auto__ = (function (){var G__38404 = c;
var G__38404__$1 = (((G__38404 instanceof cljs.core.Keyword))?G__38404.fqn:null);
switch (G__38404__$1) {
case "default":
return Error;

break;
case "any":
return Error;

break;
default:
return c;

}
})();
var x__5077__auto__ = ex;
return (x__5077__auto__ instanceof c__5076__auto__);
})())){
return ex;
} else {
return null;
}
}));

(taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$3 = (function (c,pattern,ex){
if(cljs.core.truth_((function (){var and__5041__auto__ = taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$2(c,ex);
if(cljs.core.truth_(and__5041__auto__)){
if(cljs.core.map_QMARK_(pattern)){
var b2__26863__auto__ = cljs.core.ex_data(ex);
if(cljs.core.truth_(b2__26863__auto__)){
var data = b2__26863__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pattern,cljs.core.select_keys(data,cljs.core.keys(pattern)));
} else {
return false;
}
} else {
return cljs.core.boolean$(cljs.core.re_find(cljs.core.re_pattern(pattern),taoensso.encore._ex_message(ex)));
}
} else {
return and__5041__auto__;
}
})())){
return ex;
} else {
return null;
}
}));

(taoensso.encore._matching_throwable.cljs$lang$maxFixedArity = 3);

taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.memoize_STAR_ = taoensso.encore.memoize;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.idx_fn = taoensso.encore.counter;

taoensso.encore.vec_STAR_ = taoensso.encore.ensure_vec;

taoensso.encore.set_STAR_ = taoensso.encore.ensure_set;

taoensso.encore.have_transducers_QMARK_ = true;

taoensso.encore.pval_QMARK_ = taoensso.encore.pnum_QMARK_;

taoensso.encore.as__QMARK_pval = taoensso.encore.as__QMARK_pnum;

taoensso.encore.as_pval = taoensso.encore.as_pnum;

var nolist_QMARK__38926 = (function (p1__38405_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]),p1__38405_SHARP_);
});
/**
 * Deprecated, prefer `compile-str-filter` instead.
 */
taoensso.encore.compile_ns_filter = (function taoensso$encore$compile_ns_filter(var_args){
var G__38412 = arguments.length;
switch (G__38412) {
case 1:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1 = (function (ns_pattern){
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2(ns_pattern,null);
}));

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2 = (function (whitelist,blacklist){
if(((nolist_QMARK__38926(whitelist)) && (nolist_QMARK__38926(blacklist)))){
return (function (_){
return true;
});
} else {
return taoensso.encore.compile_str_filter(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),whitelist,new cljs.core.Keyword(null,"deny","deny",1589338523),blacklist], null));
}
}));

(taoensso.encore.compile_ns_filter.cljs$lang$maxFixedArity = 2);


var ret__5821__auto___38928 = (function (){
taoensso.encore.if_lets = (function taoensso$encore$if_lets(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38929 = arguments.length;
var i__5767__auto___38930 = (0);
while(true){
if((i__5767__auto___38930 < len__5766__auto___38929)){
args__5772__auto__.push((arguments[i__5767__auto___38930]));

var G__38931 = (i__5767__auto___38930 + (1));
i__5767__auto___38930 = G__38931;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.if_lets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.if_lets.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","if-let","taoensso.encore/if-let",-627305356,null),null,(1),null)),args)));
}));

(taoensso.encore.if_lets.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.if_lets.cljs$lang$applyTo = (function (seq38413){
var G__38414 = cljs.core.first(seq38413);
var seq38413__$1 = cljs.core.next(seq38413);
var G__38415 = cljs.core.first(seq38413__$1);
var seq38413__$2 = cljs.core.next(seq38413__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38414,G__38415,seq38413__$2);
}));

return null;
})()
;
(taoensso.encore.if_lets.cljs$lang$macro = true);


var ret__5821__auto___38932 = (function (){
taoensso.encore.when_lets = (function taoensso$encore$when_lets(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38933 = arguments.length;
var i__5767__auto___38934 = (0);
while(true){
if((i__5767__auto___38934 < len__5766__auto___38933)){
args__5772__auto__.push((arguments[i__5767__auto___38934]));

var G__38935 = (i__5767__auto___38934 + (1));
i__5767__auto___38934 = G__38935;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.when_lets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.when_lets.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","when-let","taoensso.encore/when-let",518331642,null),null,(1),null)),args)));
}));

(taoensso.encore.when_lets.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.when_lets.cljs$lang$applyTo = (function (seq38416){
var G__38417 = cljs.core.first(seq38416);
var seq38416__$1 = cljs.core.next(seq38416);
var G__38418 = cljs.core.first(seq38416__$1);
var seq38416__$2 = cljs.core.next(seq38416__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38417,G__38418,seq38416__$2);
}));

return null;
})()
;
(taoensso.encore.when_lets.cljs$lang$macro = true);


var ret__5821__auto___38936 = (function (){
taoensso.encore.if_not_STAR_ = (function taoensso$encore$if_not_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38937 = arguments.length;
var i__5767__auto___38938 = (0);
while(true){
if((i__5767__auto___38938 < len__5766__auto___38937)){
args__5772__auto__.push((arguments[i__5767__auto___38938]));

var G__38939 = (i__5767__auto___38938 + (1));
i__5767__auto___38938 = G__38939;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.if_not_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.if_not_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","if-not","taoensso.encore/if-not",30501329,null),null,(1),null)),args)));
}));

(taoensso.encore.if_not_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.if_not_STAR_.cljs$lang$applyTo = (function (seq38419){
var G__38420 = cljs.core.first(seq38419);
var seq38419__$1 = cljs.core.next(seq38419);
var G__38421 = cljs.core.first(seq38419__$1);
var seq38419__$2 = cljs.core.next(seq38419__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38420,G__38421,seq38419__$2);
}));

return null;
})()
;
(taoensso.encore.if_not_STAR_.cljs$lang$macro = true);


var ret__5821__auto___38940 = (function (){
taoensso.encore.cond_STAR_ = (function taoensso$encore$cond_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38941 = arguments.length;
var i__5767__auto___38942 = (0);
while(true){
if((i__5767__auto___38942 < len__5766__auto___38941)){
args__5772__auto__.push((arguments[i__5767__auto___38942]));

var G__38943 = (i__5767__auto___38942 + (1));
i__5767__auto___38942 = G__38943;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.cond_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.cond_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","cond","taoensso.encore/cond",-1901005115,null),null,(1),null)),args)));
}));

(taoensso.encore.cond_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.cond_STAR_.cljs$lang$applyTo = (function (seq38422){
var G__38423 = cljs.core.first(seq38422);
var seq38422__$1 = cljs.core.next(seq38422);
var G__38424 = cljs.core.first(seq38422__$1);
var seq38422__$2 = cljs.core.next(seq38422__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38423,G__38424,seq38422__$2);
}));

return null;
})()
;
(taoensso.encore.cond_STAR_.cljs$lang$macro = true);


var ret__5821__auto___38944 = (function (){
taoensso.encore.defonce_STAR_ = (function taoensso$encore$defonce_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38945 = arguments.length;
var i__5767__auto___38946 = (0);
while(true){
if((i__5767__auto___38946 < len__5766__auto___38945)){
args__5772__auto__.push((arguments[i__5767__auto___38946]));

var G__38947 = (i__5767__auto___38946 + (1));
i__5767__auto___38946 = G__38947;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.defonce_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.defonce_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","defonce","taoensso.encore/defonce",-926213491,null),null,(1),null)),args)));
}));

(taoensso.encore.defonce_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.defonce_STAR_.cljs$lang$applyTo = (function (seq38425){
var G__38426 = cljs.core.first(seq38425);
var seq38425__$1 = cljs.core.next(seq38425);
var G__38427 = cljs.core.first(seq38425__$1);
var seq38425__$2 = cljs.core.next(seq38425__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38426,G__38427,seq38425__$2);
}));

return null;
})()
;
(taoensso.encore.defonce_STAR_.cljs$lang$macro = true);


var ret__5821__auto___38948 = (function (){
taoensso.encore.have_in = (function taoensso$encore$have_in(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38949 = arguments.length;
var i__5767__auto___38950 = (0);
while(true){
if((i__5767__auto___38950 < len__5766__auto___38949)){
args__5772__auto__.push((arguments[i__5767__auto___38950]));

var G__38951 = (i__5767__auto___38950 + (1));
i__5767__auto___38950 = G__38951;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return taoensso.encore.have_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(taoensso.encore.have_in.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a1,an){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","have","taoensso.encore/have",-217480200,null),null,(1),null)),(new cljs.core.List(null,a1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"in","in",-1531184865),null,(1),null)),an], 0))));
}));

(taoensso.encore.have_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.have_in.cljs$lang$applyTo = (function (seq38428){
var G__38429 = cljs.core.first(seq38428);
var seq38428__$1 = cljs.core.next(seq38428);
var G__38430 = cljs.core.first(seq38428__$1);
var seq38428__$2 = cljs.core.next(seq38428__$1);
var G__38431 = cljs.core.first(seq38428__$2);
var seq38428__$3 = cljs.core.next(seq38428__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38429,G__38430,G__38431,seq38428__$3);
}));

return null;
})()
;
(taoensso.encore.have_in.cljs$lang$macro = true);


var ret__5821__auto___38952 = (function (){
taoensso.encore.have_in_BANG_ = (function taoensso$encore$have_in_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38953 = arguments.length;
var i__5767__auto___38954 = (0);
while(true){
if((i__5767__auto___38954 < len__5766__auto___38953)){
args__5772__auto__.push((arguments[i__5767__auto___38954]));

var G__38955 = (i__5767__auto___38954 + (1));
i__5767__auto___38954 = G__38955;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return taoensso.encore.have_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(taoensso.encore.have_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a1,an){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","have!","taoensso.encore/have!",810552529,null),null,(1),null)),(new cljs.core.List(null,a1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"in","in",-1531184865),null,(1),null)),an], 0))));
}));

(taoensso.encore.have_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.have_in_BANG_.cljs$lang$applyTo = (function (seq38432){
var G__38433 = cljs.core.first(seq38432);
var seq38432__$1 = cljs.core.next(seq38432);
var G__38434 = cljs.core.first(seq38432__$1);
var seq38432__$2 = cljs.core.next(seq38432__$1);
var G__38435 = cljs.core.first(seq38432__$2);
var seq38432__$3 = cljs.core.next(seq38432__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38433,G__38434,G__38435,seq38432__$3);
}));

return null;
})()
;
(taoensso.encore.have_in_BANG_.cljs$lang$macro = true);


var ret__5821__auto___38956 = (function (){
taoensso.encore.cond_throw = (function taoensso$encore$cond_throw(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38957 = arguments.length;
var i__5767__auto___38958 = (0);
while(true){
if((i__5767__auto___38958 < len__5766__auto___38957)){
args__5772__auto__.push((arguments[i__5767__auto___38958]));

var G__38959 = (i__5767__auto___38958 + (1));
i__5767__auto___38958 = G__38959;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.cond_throw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.cond_throw.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","cond!","taoensso.encore/cond!",1177161063,null),null,(1),null)),args)));
}));

(taoensso.encore.cond_throw.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.cond_throw.cljs$lang$applyTo = (function (seq38436){
var G__38437 = cljs.core.first(seq38436);
var seq38436__$1 = cljs.core.next(seq38436);
var G__38438 = cljs.core.first(seq38436__$1);
var seq38436__$2 = cljs.core.next(seq38436__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38437,G__38438,seq38436__$2);
}));

return null;
})()
;
(taoensso.encore.cond_throw.cljs$lang$macro = true);


var ret__5821__auto___38960 = (function (){
taoensso.encore.catch_errors_STAR_ = (function taoensso$encore$catch_errors_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38961 = arguments.length;
var i__5767__auto___38962 = (0);
while(true){
if((i__5767__auto___38962 < len__5766__auto___38961)){
args__5772__auto__.push((arguments[i__5767__auto___38962]));

var G__38963 = (i__5767__auto___38962 + (1));
i__5767__auto___38962 = G__38963;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.catch_errors_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.catch_errors_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","catching","taoensso.encore/catching",-139882551,null),null,(1),null)),args)));
}));

(taoensso.encore.catch_errors_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.catch_errors_STAR_.cljs$lang$applyTo = (function (seq38439){
var G__38440 = cljs.core.first(seq38439);
var seq38439__$1 = cljs.core.next(seq38439);
var G__38441 = cljs.core.first(seq38439__$1);
var seq38439__$2 = cljs.core.next(seq38439__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38440,G__38441,seq38439__$2);
}));

return null;
})()
;
(taoensso.encore.catch_errors_STAR_.cljs$lang$macro = true);


var ret__5821__auto___38964 = (function (){
taoensso.encore.use_fixtures_STAR_ = (function taoensso$encore$use_fixtures_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38965 = arguments.length;
var i__5767__auto___38966 = (0);
while(true){
if((i__5767__auto___38966 < len__5766__auto___38965)){
args__5772__auto__.push((arguments[i__5767__auto___38966]));

var G__38967 = (i__5767__auto___38966 + (1));
i__5767__auto___38966 = G__38967;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.use_fixtures_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.use_fixtures_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","use-fixtures","taoensso.encore/use-fixtures",-686683109,null),null,(1),null)),args)));
}));

(taoensso.encore.use_fixtures_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.use_fixtures_STAR_.cljs$lang$applyTo = (function (seq38442){
var G__38443 = cljs.core.first(seq38442);
var seq38442__$1 = cljs.core.next(seq38442);
var G__38444 = cljs.core.first(seq38442__$1);
var seq38442__$2 = cljs.core.next(seq38442__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38443,G__38444,seq38442__$2);
}));

return null;
})()
;
(taoensso.encore.use_fixtures_STAR_.cljs$lang$macro = true);


var ret__5821__auto___38968 = (function (){
taoensso.encore.nano_time_STAR_ = (function taoensso$encore$nano_time_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38969 = arguments.length;
var i__5767__auto___38970 = (0);
while(true){
if((i__5767__auto___38970 < len__5766__auto___38969)){
args__5772__auto__.push((arguments[i__5767__auto___38970]));

var G__38971 = (i__5767__auto___38970 + (1));
i__5767__auto___38970 = G__38971;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.nano_time_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.nano_time_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","now-nano*","taoensso.encore/now-nano*",853743939,null),null,(1),null)),args)));
}));

(taoensso.encore.nano_time_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.nano_time_STAR_.cljs$lang$applyTo = (function (seq38445){
var G__38446 = cljs.core.first(seq38445);
var seq38445__$1 = cljs.core.next(seq38445);
var G__38447 = cljs.core.first(seq38445__$1);
var seq38445__$2 = cljs.core.next(seq38445__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38446,G__38447,seq38445__$2);
}));

return null;
})()
;
(taoensso.encore.nano_time_STAR_.cljs$lang$macro = true);


var ret__5821__auto___38972 = (function (){
taoensso.encore.qbench = (function taoensso$encore$qbench(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38973 = arguments.length;
var i__5767__auto___38974 = (0);
while(true){
if((i__5767__auto___38974 < len__5766__auto___38973)){
args__5772__auto__.push((arguments[i__5767__auto___38974]));

var G__38975 = (i__5767__auto___38974 + (1));
i__5767__auto___38974 = G__38975;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.qbench.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.qbench.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","quick-bench","taoensso.encore/quick-bench",800722121,null),null,(1),null)),args)));
}));

(taoensso.encore.qbench.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.qbench.cljs$lang$applyTo = (function (seq38448){
var G__38449 = cljs.core.first(seq38448);
var seq38448__$1 = cljs.core.next(seq38448);
var G__38450 = cljs.core.first(seq38448__$1);
var seq38448__$2 = cljs.core.next(seq38448__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38449,G__38450,seq38448__$2);
}));

return null;
})()
;
(taoensso.encore.qbench.cljs$lang$macro = true);


var ret__5821__auto___38976 = (function (){
taoensso.encore.catch_errors = (function taoensso$encore$catch_errors(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38977 = arguments.length;
var i__5767__auto___38978 = (0);
while(true){
if((i__5767__auto___38978 < len__5766__auto___38977)){
args__5772__auto__.push((arguments[i__5767__auto___38978]));

var G__38979 = (i__5767__auto___38978 + (1));
i__5767__auto___38978 = G__38979;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.catch_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.catch_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","catching","taoensso.encore/catching",-139882551,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"e__38406__auto__","e__38406__auto__",-1394274835,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__38406__auto__","e__38406__auto__",-1394274835,null),null,(1),null)))))),null,(1),null))], 0))));
}));

(taoensso.encore.catch_errors.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.catch_errors.cljs$lang$applyTo = (function (seq38451){
var G__38452 = cljs.core.first(seq38451);
var seq38451__$1 = cljs.core.next(seq38451);
var G__38453 = cljs.core.first(seq38451__$1);
var seq38451__$2 = cljs.core.next(seq38451__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38452,G__38453,seq38451__$2);
}));

return null;
})()
;
(taoensso.encore.catch_errors.cljs$lang$macro = true);


var ret__5821__auto___38980 = taoensso.encore._vol_BANG_ = (function taoensso$encore$_vol_BANG_(_AMPERSAND_form,_AMPERSAND_env,val){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","volatile!","cljs.core/volatile!",-829435536,null),null,(1),null)),(new cljs.core.List(null,val,null,(1),null)))));
});
(taoensso.encore._vol_BANG_.cljs$lang$macro = true);


var ret__5821__auto___38981 = taoensso.encore._vol_reset_BANG_ = (function taoensso$encore$_vol_reset_BANG_(_AMPERSAND_form,_AMPERSAND_env,vol_,val){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vreset!","cljs.core/vreset!",-1308835928,null),null,(1),null)),(new cljs.core.List(null,vol_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,val,null,(1),null))], 0))));
});
(taoensso.encore._vol_reset_BANG_.cljs$lang$macro = true);


var ret__5821__auto___38982 = (function (){
taoensso.encore._vol_swap_BANG_ = (function taoensso$encore$_vol_swap_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38983 = arguments.length;
var i__5767__auto___38984 = (0);
while(true){
if((i__5767__auto___38984 < len__5766__auto___38983)){
args__5772__auto__.push((arguments[i__5767__auto___38984]));

var G__38985 = (i__5767__auto___38984 + (1));
i__5767__auto___38984 = G__38985;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return taoensso.encore._vol_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(taoensso.encore._vol_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol_,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vswap!","cljs.core/vswap!",-2062892188,null),null,(1),null)),(new cljs.core.List(null,vol_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),args], 0))));
}));

(taoensso.encore._vol_swap_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.encore._vol_swap_BANG_.cljs$lang$applyTo = (function (seq38454){
var G__38455 = cljs.core.first(seq38454);
var seq38454__$1 = cljs.core.next(seq38454);
var G__38456 = cljs.core.first(seq38454__$1);
var seq38454__$2 = cljs.core.next(seq38454__$1);
var G__38457 = cljs.core.first(seq38454__$2);
var seq38454__$3 = cljs.core.next(seq38454__$2);
var G__38458 = cljs.core.first(seq38454__$3);
var seq38454__$4 = cljs.core.next(seq38454__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38455,G__38456,G__38457,G__38458,seq38454__$4);
}));

return null;
})()
;
(taoensso.encore._vol_swap_BANG_.cljs$lang$macro = true);


taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38986 = arguments.length;
var i__5767__auto___38987 = (0);
while(true){
if((i__5767__auto___38987 < len__5766__auto___38986)){
args__5772__auto__.push((arguments[i__5767__auto___38987]));

var G__38988 = (i__5767__auto___38987 + (1));
i__5767__auto___38987 = G__38988;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__38461){
var vec__38462 = p__38461;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38462,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38462,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__5043__auto__ = type;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
}));

(taoensso.encore.round.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.round.cljs$lang$applyTo = (function (seq38459){
var G__38460 = cljs.core.first(seq38459);
var seq38459__$1 = cljs.core.next(seq38459);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38460,seq38459__$1);
}));


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__38466 = arguments.length;
switch (G__38466) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}));

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3(signf,x,y);
}));

(taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3);


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38990 = arguments.length;
var i__5767__auto___38991 = (0);
while(true){
if((i__5767__auto___38991 < len__5766__auto___38990)){
args__5772__auto__.push((arguments[i__5767__auto___38991]));

var G__38992 = (i__5767__auto___38991 + (1));
i__5767__auto___38991 = G__38992;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
}));

(taoensso.encore.join_once.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.join_once.cljs$lang$applyTo = (function (seq38467){
var G__38468 = cljs.core.first(seq38467);
var seq38467__$1 = cljs.core.next(seq38467);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38468,seq38467__$1);
}));


var ret__5821__auto___38993 = (function (){
taoensso.encore.repeatedly_STAR_ = (function taoensso$encore$repeatedly_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38994 = arguments.length;
var i__5767__auto___38995 = (0);
while(true){
if((i__5767__auto___38995 < len__5766__auto___38994)){
args__5772__auto__.push((arguments[i__5767__auto___38995]));

var G__38996 = (i__5767__auto___38995 + (1));
i__5767__auto___38995 = G__38996;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return taoensso.encore.repeatedly_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(taoensso.encore.repeatedly_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","repeatedly-into*","taoensso.encore/repeatedly-into*",-23037469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null)),body], 0))));
}));

(taoensso.encore.repeatedly_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.repeatedly_STAR_.cljs$lang$applyTo = (function (seq38469){
var G__38470 = cljs.core.first(seq38469);
var seq38469__$1 = cljs.core.next(seq38469);
var G__38471 = cljs.core.first(seq38469__$1);
var seq38469__$2 = cljs.core.next(seq38469__$1);
var G__38472 = cljs.core.first(seq38469__$2);
var seq38469__$3 = cljs.core.next(seq38469__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38470,G__38471,G__38472,seq38469__$3);
}));

return null;
})()
;
(taoensso.encore.repeatedly_STAR_.cljs$lang$macro = true);


var ret__5821__auto___38997 = (function (){
/**
 * Deprecated
 */
taoensso.encore.repeatedly_into_STAR_ = (function taoensso$encore$repeatedly_into_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38998 = arguments.length;
var i__5767__auto___38999 = (0);
while(true){
if((i__5767__auto___38999 < len__5766__auto___38998)){
args__5772__auto__.push((arguments[i__5767__auto___38999]));

var G__39000 = (i__5767__auto___38999 + (1));
i__5767__auto___38999 = G__39000;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return taoensso.encore.repeatedly_into_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(taoensso.encore.repeatedly_into_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,coll,n,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","repeatedly-into","taoensso.encore/repeatedly-into",1136338713,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.repeatedly_into_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.encore.repeatedly_into_STAR_.cljs$lang$applyTo = (function (seq38473){
var G__38474 = cljs.core.first(seq38473);
var seq38473__$1 = cljs.core.next(seq38473);
var G__38475 = cljs.core.first(seq38473__$1);
var seq38473__$2 = cljs.core.next(seq38473__$1);
var G__38476 = cljs.core.first(seq38473__$2);
var seq38473__$3 = cljs.core.next(seq38473__$2);
var G__38477 = cljs.core.first(seq38473__$3);
var seq38473__$4 = cljs.core.next(seq38473__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38474,G__38475,G__38476,G__38477,seq38473__$4);
}));

return null;
})()
;
(taoensso.encore.repeatedly_into_STAR_.cljs$lang$macro = true);


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ensure_set(x),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome((function (p__38478){
var vec__38479 = p__38478;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38479,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38479,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38479,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter(specs);
return (function() { 
var G__39001__delegate = function (args){
var b2__26863__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lfn,args);
if(cljs.core.truth_(b2__26863__auto__)){
var vec__38482 = b2__26863__auto__;
var worst_sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38482,(0),null);
var backoff_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38482,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__39001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39002__i = 0, G__39002__a = new Array(arguments.length -  0);
while (G__39002__i < G__39002__a.length) {G__39002__a[G__39002__i] = arguments[G__39002__i + 0]; ++G__39002__i;}
  args = new cljs.core.IndexedSeq(G__39002__a,0,null);
} 
return G__39001__delegate.call(this,args);};
G__39001.cljs$lang$maxFixedArity = 0;
G__39001.cljs$lang$applyTo = (function (arglist__39003){
var args = cljs.core.seq(arglist__39003);
return G__39001__delegate(args);
});
G__39001.cljs$core$IFn$_invoke$arity$variadic = G__39001__delegate;
return G__39001;
})()
;
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return (function() { 
var G__39004__delegate = function (args){
var b2__26863__auto__ = rl();
if(cljs.core.truth_(b2__26863__auto__)){
var backoff = b2__26863__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
var G__39004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39005__i = 0, G__39005__a = new Array(arguments.length -  0);
while (G__39005__i < G__39005__a.length) {G__39005__a[G__39005__i] = arguments[G__39005__i + 0]; ++G__39005__i;}
  args = new cljs.core.IndexedSeq(G__39005__a,0,null);
} 
return G__39004__delegate.call(this,args);};
G__39004.cljs$lang$maxFixedArity = 0;
G__39004.cljs$lang$applyTo = (function (arglist__39006){
var args = cljs.core.seq(arglist__39006);
return G__39004__delegate(args);
});
G__39004.cljs$core$IFn$_invoke$arity$variadic = G__39004__delegate;
return G__39004;
})()
;
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return (function() { 
var G__39007__delegate = function (args){
var b2__26863__auto__ = rl();
if(cljs.core.truth_(b2__26863__auto__)){
var backoff_ms = b2__26863__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
var G__39007 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39008__i = 0, G__39008__a = new Array(arguments.length -  0);
while (G__39008__i < G__39008__a.length) {G__39008__a[G__39008__i] = arguments[G__39008__i + 0]; ++G__39008__i;}
  args = new cljs.core.IndexedSeq(G__39008__a,0,null);
} 
return G__39007__delegate.call(this,args);};
G__39007.cljs$lang$maxFixedArity = 0;
G__39007.cljs$lang$applyTo = (function (arglist__39009){
var args = cljs.core.seq(arglist__39009);
return G__39007__delegate(args);
});
G__39007.cljs$core$IFn$_invoke$arity$variadic = G__39007__delegate;
return G__39007;
})()
;
});

taoensso.encore.logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39010 = arguments.length;
var i__5767__auto___39011 = (0);
while(true){
if((i__5767__auto___39011 < len__5766__auto___39010)){
args__5772__auto__.push((arguments[i__5767__auto___39011]));

var G__39012 = (i__5767__auto___39011 + (1));
i__5767__auto___39011 = G__39012;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__38487){
var vec__38488 = p__38487;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38488,(0),null);
var b2__26863__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__26863__auto__)){
var js_win = b2__26863__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = nattempt;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
}));

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq38485){
var G__38486 = cljs.core.first(seq38485);
var seq38485__$1 = cljs.core.next(seq38485);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38486,seq38485__$1);
}));


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined')){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39013 = arguments.length;
var i__5767__auto___39014 = (0);
while(true){
if((i__5767__auto___39014 < len__5766__auto___39013)){
args__5772__auto__.push((arguments[i__5767__auto___39014]));

var G__39015 = (i__5767__auto___39014 + (1));
i__5767__auto___39014 = G__39015;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.tracef.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.tracef.cljs$lang$applyTo = (function (seq38491){
var G__38492 = cljs.core.first(seq38491);
var seq38491__$1 = cljs.core.next(seq38491);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38492,seq38491__$1);
}));


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39016 = arguments.length;
var i__5767__auto___39017 = (0);
while(true){
if((i__5767__auto___39017 < len__5766__auto___39016)){
args__5772__auto__.push((arguments[i__5767__auto___39017]));

var G__39018 = (i__5767__auto___39017 + (1));
i__5767__auto___39017 = G__39018;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.debugf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.debugf.cljs$lang$applyTo = (function (seq38493){
var G__38494 = cljs.core.first(seq38493);
var seq38493__$1 = cljs.core.next(seq38493);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38494,seq38493__$1);
}));


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39019 = arguments.length;
var i__5767__auto___39020 = (0);
while(true){
if((i__5767__auto___39020 < len__5766__auto___39019)){
args__5772__auto__.push((arguments[i__5767__auto___39020]));

var G__39021 = (i__5767__auto___39020 + (1));
i__5767__auto___39020 = G__39021;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.infof.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.infof.cljs$lang$applyTo = (function (seq38495){
var G__38496 = cljs.core.first(seq38495);
var seq38495__$1 = cljs.core.next(seq38495);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38496,seq38495__$1);
}));


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39022 = arguments.length;
var i__5767__auto___39023 = (0);
while(true){
if((i__5767__auto___39023 < len__5766__auto___39022)){
args__5772__auto__.push((arguments[i__5767__auto___39023]));

var G__39024 = (i__5767__auto___39023 + (1));
i__5767__auto___39023 = G__39024;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.warnf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.warnf.cljs$lang$applyTo = (function (seq38497){
var G__38498 = cljs.core.first(seq38497);
var seq38497__$1 = cljs.core.next(seq38497);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38498,seq38497__$1);
}));


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39025 = arguments.length;
var i__5767__auto___39026 = (0);
while(true){
if((i__5767__auto___39026 < len__5766__auto___39025)){
args__5772__auto__.push((arguments[i__5767__auto___39026]));

var G__39027 = (i__5767__auto___39026 + (1));
i__5767__auto___39026 = G__39027;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.errorf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.errorf.cljs$lang$applyTo = (function (seq38499){
var G__38500 = cljs.core.first(seq38499);
var seq38499__$1 = cljs.core.next(seq38499);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38500,seq38499__$1);
}));


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39028 = arguments.length;
var i__5767__auto___39029 = (0);
while(true){
if((i__5767__auto___39029 < len__5766__auto___39028)){
args__5772__auto__.push((arguments[i__5767__auto___39029]));

var G__39030 = (i__5767__auto___39029 + (1));
i__5767__auto___39029 = G__39030;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq38501){
var G__38502 = cljs.core.first(seq38501);
var seq38501__$1 = cljs.core.next(seq38501);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38502,seq38501__$1);
}));


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39031 = arguments.length;
var i__5767__auto___39032 = (0);
while(true){
if((i__5767__auto___39032 < len__5766__auto___39031)){
args__5772__auto__.push((arguments[i__5767__auto___39032]));

var G__39033 = (i__5767__auto___39032 + (1));
i__5767__auto___39032 = G__39033;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.reportf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.reportf.cljs$lang$applyTo = (function (seq38503){
var G__38504 = cljs.core.first(seq38503);
var seq38503__$1 = cljs.core.next(seq38503);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38504,seq38503__$1);
}));


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39034 = arguments.length;
var i__5767__auto___39035 = (0);
while(true){
if((i__5767__auto___39035 < len__5766__auto___39034)){
args__5772__auto__.push((arguments[i__5767__auto___39035]));

var G__39036 = (i__5767__auto___39035 + (1));
i__5767__auto___39035 = G__39036;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__38507){
var vec__38508 = p__38507;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38508,(0),null);
var comparator = (function (){var or__5043__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38407_SHARP_,p2__38408_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__38407_SHARP_,p2__38408_SHARP_) : comparator.call(null,p1__38407_SHARP_,p2__38408_SHARP_)) > (0))){
return p2__38408_SHARP_;
} else {
return p1__38407_SHARP_;
}
}),coll);
}));

(taoensso.encore.greatest.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.greatest.cljs$lang$applyTo = (function (seq38505){
var G__38506 = cljs.core.first(seq38505);
var seq38505__$1 = cljs.core.next(seq38505);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38506,seq38505__$1);
}));


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39037 = arguments.length;
var i__5767__auto___39038 = (0);
while(true){
if((i__5767__auto___39038 < len__5766__auto___39037)){
args__5772__auto__.push((arguments[i__5767__auto___39038]));

var G__39039 = (i__5767__auto___39038 + (1));
i__5767__auto___39038 = G__39039;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__38513){
var vec__38514 = p__38513;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38514,(0),null);
var comparator = (function (){var or__5043__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38409_SHARP_,p2__38410_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__38409_SHARP_,p2__38410_SHARP_) : comparator.call(null,p1__38409_SHARP_,p2__38410_SHARP_)) < (0))){
return p2__38410_SHARP_;
} else {
return p1__38409_SHARP_;
}
}),coll);
}));

(taoensso.encore.least.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.least.cljs$lang$applyTo = (function (seq38511){
var G__38512 = cljs.core.first(seq38511);
var seq38511__$1 = cljs.core.next(seq38511);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38512,seq38511__$1);
}));


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__5043__auto__ = x;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__38517,seen__$1){
while(true){
var vec__38518 = p__38517;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38518,(0),null);
var xs__$1 = vec__38518;
var b2__26863__auto__ = cljs.core.seq(xs__$1);
if(b2__26863__auto__){
var s = b2__26863__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__39040 = cljs.core.rest(s);
var G__39041 = seen__$1;
p__38517 = G__39040;
seen__$1 = G__39041;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__38522 = arguments.length;
switch (G__38522) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
}));

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__38523,in$){
var vec__38524 = p__38523;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38524,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38524,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
}));

(taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2);


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)) : taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?(function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}):kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39043 = arguments.length;
var i__5767__auto___39044 = (0);
while(true){
if((i__5767__auto___39044 < len__5766__auto___39043)){
args__5772__auto__.push((arguments[i__5767__auto___39044]));

var G__39045 = (i__5767__auto___39044 + (1));
i__5767__auto___39044 = G__39045;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__38529){
var vec__38530 = p__38529;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38530,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38530,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)) : taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?(function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}):kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs((function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
}));

(taoensso.encore.as_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.as_map.cljs$lang$applyTo = (function (seq38527){
var G__38528 = cljs.core.first(seq38527);
var seq38527__$1 = cljs.core.next(seq38527);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38528,seq38527__$1);
}));


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n)));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39046 = arguments.length;
var i__5767__auto___39047 = (0);
while(true){
if((i__5767__auto___39047 < len__5766__auto___39046)){
args__5772__auto__.push((arguments[i__5767__auto___39047]));

var G__39048 = (i__5767__auto___39047 + (1));
i__5767__auto___39047 = G__39048;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref(taoensso.encore._swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
})));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
}));

(taoensso.encore.memoized.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.memoized.cljs$lang$applyTo = (function (seq38533){
var G__38534 = cljs.core.first(seq38533);
var seq38533__$1 = cljs.core.next(seq38533);
var G__38535 = cljs.core.first(seq38533__$1);
var seq38533__$2 = cljs.core.next(seq38533__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38534,G__38535,seq38533__$2);
}));


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__5131__auto__ = signed_idx;
var y__5132__auto__ = max_idx;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
} else {
var x__5128__auto__ = (0);
var y__5129__auto__ = (signed_idx + max_idx);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39049 = arguments.length;
var i__5767__auto___39050 = (0);
while(true){
if((i__5767__auto___39050 < len__5766__auto___39049)){
args__5772__auto__.push((arguments[i__5767__auto___39050]));

var G__39051 = (i__5767__auto___39050 + (1));
i__5767__auto___39050 = G__39051;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__38539){
var map__38540 = p__38539;
var map__38540__$1 = cljs.core.__destructure_map(map__38540);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38540__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38540__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__27312__auto__ = (start_idx_STAR_ + max_len);
var n2__27313__auto__ = xlen;
if((n1__27312__auto__ > n2__27313__auto__)){
return n2__27313__auto__;
} else {
return n1__27312__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
}));

(taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq38536){
var G__38537 = cljs.core.first(seq38536);
var seq38536__$1 = cljs.core.next(seq38536);
var G__38538 = cljs.core.first(seq38536__$1);
var seq38536__$2 = cljs.core.next(seq38536__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38537,G__38538,seq38536__$2);
}));


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39052 = arguments.length;
var i__5767__auto___39053 = (0);
while(true){
if((i__5767__auto___39053 < len__5766__auto___39052)){
args__5772__auto__.push((arguments[i__5767__auto___39053]));

var G__39054 = (i__5767__auto___39053 + (1));
i__5767__auto___39053 = G__39054;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__38544){
var vec__38545 = p__38544;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38545,(0),null);
var vec__38548 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38548,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38548,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.substr.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.substr.cljs$lang$applyTo = (function (seq38541){
var G__38542 = cljs.core.first(seq38541);
var seq38541__$1 = cljs.core.next(seq38541);
var G__38543 = cljs.core.first(seq38541__$1);
var seq38541__$2 = cljs.core.next(seq38541__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38542,G__38543,seq38541__$2);
}));



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39055 = arguments.length;
var i__5767__auto___39056 = (0);
while(true){
if((i__5767__auto___39056 < len__5766__auto___39055)){
args__5772__auto__.push((arguments[i__5767__auto___39056]));

var G__39057 = (i__5767__auto___39056 + (1));
i__5767__auto___39056 = G__39057;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__38554){
var vec__38555 = p__38554;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38555,(0),null);
var vec__38558 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38558,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38558,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq38551){
var G__38552 = cljs.core.first(seq38551);
var seq38551__$1 = cljs.core.next(seq38551);
var G__38553 = cljs.core.first(seq38551__$1);
var seq38551__$2 = cljs.core.next(seq38551__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38552,G__38553,seq38551__$2);
}));


taoensso.encore.sentinel = ({});

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(taoensso.encore.sentinel_QMARK_(x)){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(taoensso.encore.singleton_QMARK_(coll)){
var vec__38563 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38563,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if(((ks__$1) && (vs__$1))){
var G__39058 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__39059 = cljs.core.next(ks__$1);
var G__39060 = cljs.core.next(vs__$1);
m = G__39058;
ks__$1 = G__39059;
vs__$1 = G__39060;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39061 = arguments.length;
var i__5767__auto___39062 = (0);
while(true){
if((i__5767__auto___39062 < len__5766__auto___39061)){
args__5772__auto__.push((arguments[i__5767__auto___39062]));

var G__39063 = (i__5767__auto___39062 + (1));
i__5767__auto___39062 = G__39063;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__38568 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38568,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38568,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38568,(2),null);
var f = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"reset","reset",-800929946)) : taoensso.encore.kw_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"reset","reset",-800929946))))?(function (_){
return valf;
}):valf);
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
}));

(taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq38566){
var G__38567 = cljs.core.first(seq38566);
var seq38566__$1 = cljs.core.next(seq38566);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38567,seq38566__$1);
}));


//# sourceMappingURL=taoensso.encore.js.map
