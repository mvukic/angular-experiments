import{Ba as c,N as _,P as M,Q as a,Ra as I,Sa as B,U as f,V as h,Z as D,_ as g,ba as p,ib as T,kb as F,la as m,lb as C,yb as L,zb as R}from"./chunk-SLVFAE7N.js";var E=null;function y(){return E}function Pe(n){E||(E=n)}var O=class{},z=new m("DocumentToken"),U=(()=>{let t=class{historyGo(e){throw new Error("Not implemented")}},n=t;return(()=>{t.\u0275fac=function(i){return new(i||t)}})(),(()=>{t.\u0275prov=a({token:t,factory:function(){return(()=>h(H))()},providedIn:"platform"})})(),n})();var H=(()=>{let t=class extends U{constructor(){super(),this._doc=h(z),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return y().getBaseHref(this._doc)}onPopState(e){let i=y().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=y().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}},n=t;return(()=>{t.\u0275fac=function(i){return new(i||t)}})(),(()=>{t.\u0275prov=a({token:t,factory:function(){return(()=>new t)()},providedIn:"platform"})})(),n})();function j(n,t){if(n.length==0)return t;if(t.length==0)return n;let s=0;return n.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?n+t.substring(1):s==1?n+t:n+"/"+t}function k(n){let t=n.match(/#|\?|$/),s=t&&t.index||n.length,e=s-(n[s-1]==="/"?1:0);return n.slice(0,e)+n.slice(s)}function d(n){return n&&n[0]!=="?"?"?"+n:n}var v=(()=>{let t=class{historyGo(e){throw new Error("Not implemented")}},n=t;return(()=>{t.\u0275fac=function(i){return new(i||t)}})(),(()=>{t.\u0275prov=a({token:t,factory:function(){return(()=>h(Y))()},providedIn:"root"})})(),n})(),W=new m("appBaseHref"),Y=(()=>{let t=class extends v{constructor(e,i){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??h(z).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return j(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+d(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,u){let o=this.prepareExternalUrl(r+d(u));this._platformLocation.pushState(e,i,o)}replaceState(e,i,r,u){let o=this.prepareExternalUrl(r+d(u));this._platformLocation.replaceState(e,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}},n=t;return(()=>{t.\u0275fac=function(i){return new(i||t)(f(U),f(W,8))}})(),(()=>{t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})})(),n})();var Z=(()=>{let t=class{constructor(e){this._subject=new T,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=J(k(P(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+d(i))}normalize(e){return t.stripTrailingSlash(X(this._basePath,P(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+d(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+d(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)})),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i,complete:r})}},n=t;return(()=>{t.normalizeQueryParams=d})(),(()=>{t.joinWithSlash=j})(),(()=>{t.stripTrailingSlash=k})(),(()=>{t.\u0275fac=function(i){return new(i||t)(f(v))}})(),(()=>{t.\u0275prov=a({token:t,factory:function(){return K()},providedIn:"root"})})(),n})();function K(){return new Z(f(v))}function X(n,t){if(!n||!t.startsWith(n))return t;let s=t.substring(n.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function P(n){return n.replace(/\/index.html$/,"")}function J(n){if(new RegExp("^(https?:)?//").test(n)){let[,s]=n.split(/\/\/[^\/]+/);return s}return n}function Ne(n,t){t=encodeURIComponent(t);for(let s of n.split(";")){let e=s.indexOf("="),[i,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(i.trim()===t)return decodeURIComponent(r)}return null}var w=class{constructor(t,s,e,i){this.$implicit=t,this.ngForOf=s,this.index=e,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},xe=(()=>{let t=class{set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}constructor(e,i,r){this._viewContainer=e,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(!1)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let i=this._viewContainer;e.forEachOperation((r,u,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new w(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(u===null?void 0:u);else if(u!==null){let l=i.get(u);i.move(l,o),N(l,r)}});for(let r=0,u=i.length;r<u;r++){let l=i.get(r).context;l.index=r,l.count=u,l.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let u=i.get(r.currentIndex);N(u,r)})}static ngTemplateContextGuard(e,i){return!0}},n=t;return(()=>{t.\u0275fac=function(i){return new(i||t)(c(C),c(F),c(R))}})(),(()=>{t.\u0275dir=D({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})})(),n})();function N(n,t){n.context.$implicit=t.item}var $e=(()=>{let t=class{constructor(e,i){this._viewContainer=e,this._context=new A,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){x("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){x("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,i){return!0}},n=t;return(()=>{t.\u0275fac=function(i){return new(i||t)(c(C),c(F))}})(),(()=>{t.\u0275dir=D({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})})(),n})(),A=class{constructor(){this.$implicit=null,this.ngIf=null}};function x(n,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${_(t)}'.`)}function q(n,t){return new M(2100,!1)}var S=class{createSubscription(t,s){return p(()=>t.subscribe({next:s,error:e=>{throw e}}))}dispose(t){p(()=>t.unsubscribe())}},b=class{createSubscription(t,s){return t.then(s,e=>{throw e})}dispose(t){}},Q=new b,ee=new S,ze=(()=>{let t=class{constructor(e){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue:(e&&this._subscribe(e),this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,i=>this._updateLatestValue(e,i))}_selectStrategy(e){if(I(e))return Q;if(B(e))return ee;throw q(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,i){e===this._obj&&(this._latestValue=i,this._ref.markForCheck())}},n=t;return(()=>{t.\u0275fac=function(i){return new(i||t)(c(L,16))}})(),(()=>{t.\u0275pipe=g({name:"async",type:t,pure:!1,standalone:!0})})(),n})();var Ue=(()=>{let t=class{transform(e){return JSON.stringify(e,null,2)}},n=t;return(()=>{t.\u0275fac=function(i){return new(i||t)}})(),(()=>{t.\u0275pipe=g({name:"json",type:t,pure:!1,standalone:!0})})(),n})();var je="browser",te="server";function Ve(n){return n===te}var $=class{};export{y as a,Pe as b,O as c,z as d,v as e,Z as f,Ne as g,xe as h,$e as i,ze as j,Ue as k,je as l,Ve as m,$ as n};
