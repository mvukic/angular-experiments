import{$ as g,Db as O,Ea as l,Eb as k,P as I,R as B,S as c,Va as T,W as d,Wa as L,X as h,aa as p,da as m,na as F,nb as R,pb as C,qb as E}from"./chunk-Q2XYHD3S.js";var A=null;function y(){return A}function Ue(i){A||(A=i)}var P=class{},j=new F("DocumentToken"),_=(()=>{let t=class t{historyGo(e){throw new Error("Not implemented")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:function(){return(()=>h(W))()},providedIn:"platform"});let i=t;return i})();var W=(()=>{let t=class t extends _{constructor(){super(),this._doc=h(j),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return y().getBaseHref(this._doc)}onPopState(e){let n=y().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=y().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:function(){return(()=>new t)()},providedIn:"platform"});let i=t;return i})();function M(i,t){if(i.length==0)return t;if(t.length==0)return i;let s=0;return i.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?i+t.substring(1):s==1?i+t:i+"/"+t}function N(i){let t=i.match(/#|\?|$/),s=t&&t.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function a(i){return i&&i[0]!=="?"?"?"+i:i}var D=(()=>{let t=class t{historyGo(e){throw new Error("Not implemented")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:function(){return(()=>h(Y))()},providedIn:"root"});let i=t;return i})(),V=new F("appBaseHref"),Y=(()=>{let t=class t extends D{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??h(j).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return M(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+a(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,u){let o=this.prepareExternalUrl(r+a(u));this._platformLocation.pushState(e,n,o)}replaceState(e,n,r,u){let o=this.prepareExternalUrl(r+a(u));this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(d(_),d(V,8))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),ze=(()=>{let t=class t extends D{constructor(e,n){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash;return n==null&&(n="#"),n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=M(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,u){let o=this.prepareExternalUrl(r+a(u));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(e,n,o)}replaceState(e,n,r,u){let o=this.prepareExternalUrl(r+a(u));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(d(_),d(V,8))},t.\u0275prov=c({token:t,factory:t.\u0275fac});let i=t;return i})(),Z=(()=>{let t=class t{constructor(e){this._subject=new R,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=J(N(x(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+a(n))}normalize(e){return t.stripTrailingSlash(X(this._basePath,x(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)})),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}};t.normalizeQueryParams=a,t.joinWithSlash=M,t.stripTrailingSlash=N,t.\u0275fac=function(n){return new(n||t)(d(D))},t.\u0275prov=c({token:t,factory:function(){return K()},providedIn:"root"});let i=t;return i})();function K(){return new Z(d(D))}function X(i,t){if(!i||!t.startsWith(i))return t;let s=t.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function x(i){return i.replace(/\/index.html$/,"")}function J(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function je(i,t){t=encodeURIComponent(t);for(let s of i.split(";")){let e=s.indexOf("="),[n,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(n.trim()===t)return decodeURIComponent(r)}return null}var w=class{constructor(t,s,e,n){this.$implicit=t,this.ngForOf=s,this.index=e,this.count=n}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Ve=(()=>{let t=class t{set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(!1)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,u,o)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new w(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)n.remove(u===null?void 0:u);else if(u!==null){let f=n.get(u);n.move(f,o),$(f,r)}});for(let r=0,u=n.length;r<u;r++){let f=n.get(r).context;f.index=r,f.count=u,f.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let u=n.get(r.currentIndex);$(u,r)})}static ngTemplateContextGuard(e,n){return!0}};t.\u0275fac=function(n){return new(n||t)(l(E),l(C),l(k))},t.\u0275dir=g({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let i=t;return i})();function $(i,t){i.context.$implicit=t.item}var Ge=(()=>{let t=class t{constructor(e,n){this._viewContainer=e,this._context=new S,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){U("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){U("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,n){return!0}};t.\u0275fac=function(n){return new(n||t)(l(E),l(C))},t.\u0275dir=g({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let i=t;return i})(),S=class{constructor(){this.$implicit=null,this.ngIf=null}};function U(i,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${i} must be a TemplateRef, but received '${I(t)}'.`)}function q(i,t){return new B(2100,!1)}var b=class{createSubscription(t,s){return m(()=>t.subscribe({next:s,error:e=>{throw e}}))}dispose(t){m(()=>t.unsubscribe())}},v=class{createSubscription(t,s){return t.then(s,e=>{throw e})}dispose(t){}},Q=new v,ee=new b,He=(()=>{let t=class t{constructor(e){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue:(e&&this._subscribe(e),this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n))}_selectStrategy(e){if(T(e))return Q;if(L(e))return ee;throw q(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this._ref.markForCheck())}};t.\u0275fac=function(n){return new(n||t)(l(O,16))},t.\u0275pipe=p({name:"async",type:t,pure:!1,standalone:!0});let i=t;return i})();var We=(()=>{let t=class t{transform(e){return JSON.stringify(e,null,2)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=p({name:"json",type:t,pure:!1,standalone:!0});let i=t;return i})();var te="browser",ne="server";function Ye(i){return i===te}function Ze(i){return i===ne}var z=class{};export{y as a,Ue as b,P as c,j as d,D as e,ze as f,Z as g,je as h,Ve as i,Ge as j,He as k,We as l,te as m,Ye as n,Ze as o,z as p};
