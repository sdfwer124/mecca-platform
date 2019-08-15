// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music.actions');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mecca.music.actions.Play = (function (target,__meta,__extmap,__hash){
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mecca.music.actions.Play.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

mecca.music.actions.Play.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k10247,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__10251 = k10247;
var G__10251__$1 = (((G__10251 instanceof cljs.core.Keyword))?G__10251.fqn:null);
switch (G__10251__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10247,else__4206__auto__);

}
});

mecca.music.actions.Play.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#mecca.music.actions.Play{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

mecca.music.actions.Play.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10246){
var self__ = this;
var G__10246__$1 = this;
return (new cljs.core.RecordIter((0),G__10246__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mecca.music.actions.Play.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

mecca.music.actions.Play.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new mecca.music.actions.Play(self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

mecca.music.actions.Play.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

mecca.music.actions.Play.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-775948522 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.music.actions.Play.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10248,other10249){
var self__ = this;
var this10248__$1 = this;
return ((!((other10249 == null))) && ((this10248__$1.constructor === other10249.constructor)) && (cljs.core._EQ_.call(null,this10248__$1.target,other10249.target)) && (cljs.core._EQ_.call(null,this10248__$1.__extmap,other10249.__extmap)));
});

mecca.music.actions.Play.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.music.actions.Play(self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

mecca.music.actions.Play.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__10246){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__10252 = cljs.core.keyword_identical_QMARK_;
var expr__10253 = k__4211__auto__;
if(cljs.core.truth_(pred__10252.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__10253))){
return (new mecca.music.actions.Play(G__10246,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.Play(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__10246),null));
}
});

mecca.music.actions.Play.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.Play.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__10246){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.Play(self__.target,G__10246,self__.__extmap,self__.__hash));
});

mecca.music.actions.Play.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.music.actions.Play.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

mecca.music.actions.Play.cljs$lang$type = true;

mecca.music.actions.Play.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.music.actions/Play",null,(1),null));
});

mecca.music.actions.Play.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"mecca.music.actions/Play");
});

/**
 * Positional factory function for mecca.music.actions/Play.
 */
mecca.music.actions.__GT_Play = (function mecca$music$actions$__GT_Play(target){
return (new mecca.music.actions.Play(target,null,null,null));
});

/**
 * Factory function for mecca.music.actions/Play, taking a map of keywords to field values.
 */
mecca.music.actions.map__GT_Play = (function mecca$music$actions$map__GT_Play(G__10250){
var extmap__4236__auto__ = (function (){var G__10255 = cljs.core.dissoc.call(null,G__10250,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__10250)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10255);
} else {
return G__10255;
}
})();
return (new mecca.music.actions.Play(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__10250),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mecca.music.actions.PlayOnce = (function (target,__meta,__extmap,__hash){
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mecca.music.actions.PlayOnce.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

mecca.music.actions.PlayOnce.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k10258,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__10262 = k10258;
var G__10262__$1 = (((G__10262 instanceof cljs.core.Keyword))?G__10262.fqn:null);
switch (G__10262__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10258,else__4206__auto__);

}
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#mecca.music.actions.PlayOnce{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10257){
var self__ = this;
var G__10257__$1 = this;
return (new cljs.core.RecordIter((0),G__10257__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

mecca.music.actions.PlayOnce.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new mecca.music.actions.PlayOnce(self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-50980257 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10259,other10260){
var self__ = this;
var this10259__$1 = this;
return ((!((other10260 == null))) && ((this10259__$1.constructor === other10260.constructor)) && (cljs.core._EQ_.call(null,this10259__$1.target,other10260.target)) && (cljs.core._EQ_.call(null,this10259__$1.__extmap,other10260.__extmap)));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.music.actions.PlayOnce(self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__10257){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__10263 = cljs.core.keyword_identical_QMARK_;
var expr__10264 = k__4211__auto__;
if(cljs.core.truth_(pred__10263.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__10264))){
return (new mecca.music.actions.PlayOnce(G__10257,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.PlayOnce(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__10257),null));
}
});

mecca.music.actions.PlayOnce.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__10257){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.PlayOnce(self__.target,G__10257,self__.__extmap,self__.__hash));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.music.actions.PlayOnce.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

mecca.music.actions.PlayOnce.cljs$lang$type = true;

mecca.music.actions.PlayOnce.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.music.actions/PlayOnce",null,(1),null));
});

mecca.music.actions.PlayOnce.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"mecca.music.actions/PlayOnce");
});

/**
 * Positional factory function for mecca.music.actions/PlayOnce.
 */
mecca.music.actions.__GT_PlayOnce = (function mecca$music$actions$__GT_PlayOnce(target){
return (new mecca.music.actions.PlayOnce(target,null,null,null));
});

/**
 * Factory function for mecca.music.actions/PlayOnce, taking a map of keywords to field values.
 */
mecca.music.actions.map__GT_PlayOnce = (function mecca$music$actions$map__GT_PlayOnce(G__10261){
var extmap__4236__auto__ = (function (){var G__10266 = cljs.core.dissoc.call(null,G__10261,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__10261)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10266);
} else {
return G__10266;
}
})();
return (new mecca.music.actions.PlayOnce(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__10261),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mecca.music.actions.Loop = (function (target,__meta,__extmap,__hash){
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mecca.music.actions.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

mecca.music.actions.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k10269,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__10273 = k10269;
var G__10273__$1 = (((G__10273 instanceof cljs.core.Keyword))?G__10273.fqn:null);
switch (G__10273__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10269,else__4206__auto__);

}
});

mecca.music.actions.Loop.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#mecca.music.actions.Loop{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

mecca.music.actions.Loop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10268){
var self__ = this;
var G__10268__$1 = this;
return (new cljs.core.RecordIter((0),G__10268__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mecca.music.actions.Loop.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

mecca.music.actions.Loop.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new mecca.music.actions.Loop(self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

mecca.music.actions.Loop.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

mecca.music.actions.Loop.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-2045201359 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.music.actions.Loop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10270,other10271){
var self__ = this;
var this10270__$1 = this;
return ((!((other10271 == null))) && ((this10270__$1.constructor === other10271.constructor)) && (cljs.core._EQ_.call(null,this10270__$1.target,other10271.target)) && (cljs.core._EQ_.call(null,this10270__$1.__extmap,other10271.__extmap)));
});

mecca.music.actions.Loop.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.music.actions.Loop(self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

mecca.music.actions.Loop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__10268){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__10274 = cljs.core.keyword_identical_QMARK_;
var expr__10275 = k__4211__auto__;
if(cljs.core.truth_(pred__10274.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__10275))){
return (new mecca.music.actions.Loop(G__10268,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.Loop(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__10268),null));
}
});

mecca.music.actions.Loop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.Loop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__10268){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.Loop(self__.target,G__10268,self__.__extmap,self__.__hash));
});

mecca.music.actions.Loop.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.music.actions.Loop.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

mecca.music.actions.Loop.cljs$lang$type = true;

mecca.music.actions.Loop.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.music.actions/Loop",null,(1),null));
});

mecca.music.actions.Loop.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"mecca.music.actions/Loop");
});

/**
 * Positional factory function for mecca.music.actions/Loop.
 */
mecca.music.actions.__GT_Loop = (function mecca$music$actions$__GT_Loop(target){
return (new mecca.music.actions.Loop(target,null,null,null));
});

/**
 * Factory function for mecca.music.actions/Loop, taking a map of keywords to field values.
 */
mecca.music.actions.map__GT_Loop = (function mecca$music$actions$map__GT_Loop(G__10272){
var extmap__4236__auto__ = (function (){var G__10277 = cljs.core.dissoc.call(null,G__10272,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__10272)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10277);
} else {
return G__10277;
}
})();
return (new mecca.music.actions.Loop(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__10272),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mecca.music.actions.Stop = (function (target,__meta,__extmap,__hash){
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mecca.music.actions.Stop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

mecca.music.actions.Stop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k10280,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__10284 = k10280;
var G__10284__$1 = (((G__10284 instanceof cljs.core.Keyword))?G__10284.fqn:null);
switch (G__10284__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10280,else__4206__auto__);

}
});

mecca.music.actions.Stop.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#mecca.music.actions.Stop{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

mecca.music.actions.Stop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10279){
var self__ = this;
var G__10279__$1 = this;
return (new cljs.core.RecordIter((0),G__10279__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mecca.music.actions.Stop.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

mecca.music.actions.Stop.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new mecca.music.actions.Stop(self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

mecca.music.actions.Stop.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

mecca.music.actions.Stop.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1786047875 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.music.actions.Stop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10281,other10282){
var self__ = this;
var this10281__$1 = this;
return ((!((other10282 == null))) && ((this10281__$1.constructor === other10282.constructor)) && (cljs.core._EQ_.call(null,this10281__$1.target,other10282.target)) && (cljs.core._EQ_.call(null,this10281__$1.__extmap,other10282.__extmap)));
});

mecca.music.actions.Stop.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.music.actions.Stop(self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

mecca.music.actions.Stop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__10279){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__10285 = cljs.core.keyword_identical_QMARK_;
var expr__10286 = k__4211__auto__;
if(cljs.core.truth_(pred__10285.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__10286))){
return (new mecca.music.actions.Stop(G__10279,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.Stop(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__10279),null));
}
});

mecca.music.actions.Stop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.Stop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__10279){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.Stop(self__.target,G__10279,self__.__extmap,self__.__hash));
});

mecca.music.actions.Stop.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.music.actions.Stop.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

mecca.music.actions.Stop.cljs$lang$type = true;

mecca.music.actions.Stop.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.music.actions/Stop",null,(1),null));
});

mecca.music.actions.Stop.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"mecca.music.actions/Stop");
});

/**
 * Positional factory function for mecca.music.actions/Stop.
 */
mecca.music.actions.__GT_Stop = (function mecca$music$actions$__GT_Stop(target){
return (new mecca.music.actions.Stop(target,null,null,null));
});

/**
 * Factory function for mecca.music.actions/Stop, taking a map of keywords to field values.
 */
mecca.music.actions.map__GT_Stop = (function mecca$music$actions$map__GT_Stop(G__10283){
var extmap__4236__auto__ = (function (){var G__10288 = cljs.core.dissoc.call(null,G__10283,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__10283)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10288);
} else {
return G__10288;
}
})();
return (new mecca.music.actions.Stop(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__10283),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


//# sourceMappingURL=actions.js.map
