"use strict";(self.webpackChunkangular_experiments=self.webpackChunkangular_experiments||[]).push([[592],{5963:(f,h,i)=>{i.d(h,{H:()=>r});var o=i(9751),c=i(4986),l=i(3532);function r(n=0,e,t=c.P){let s=-1;return null!=e&&((0,l.K)(e)?t=e:s=e),new o.y(d=>{let u=function a(n){return n instanceof Date&&!isNaN(n)}(n)?+n-t.now():n;u<0&&(u=0);let _=0;return t.schedule(function(){d.closed||(d.next(_++),0<=s?this.schedule(void 0,s):d.complete())},u)})}},2722:(f,h,i)=>{i.d(h,{R:()=>r});var o=i(4482),c=i(5403),l=i(8421),a=i(5032);function r(n){return(0,o.e)((e,t)=>{(0,l.Xf)(n).subscribe((0,c.x)(t,()=>t.complete(),a.Z)),!t.closed&&e.subscribe(t)})}},4408:(f,h,i)=>{i.d(h,{o:()=>r});var o=i(727);class c extends o.w0{constructor(e,t){super()}schedule(e,t=0){return this}}const l={setInterval(n,e,...t){const{delegate:s}=l;return s?.setInterval?s.setInterval(n,e,...t):setInterval(n,e,...t)},clearInterval(n){const{delegate:e}=l;return(e?.clearInterval||clearInterval)(n)},delegate:void 0};var a=i(8737);class r extends c{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){var s;if(this.closed)return this;this.state=e;const d=this.id,u=this.scheduler;return null!=d&&(this.id=this.recycleAsyncId(u,d,t)),this.pending=!0,this.delay=t,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(u,this.id,t),this}requestAsyncId(e,t,s=0){return l.setInterval(e.flush.bind(e,this),s)}recycleAsyncId(e,t,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return t;null!=t&&l.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(e,t);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let d,s=!1;try{this.work(e)}catch(u){s=!0,d=u||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),d}unsubscribe(){if(!this.closed){const{id:e,scheduler:t}=this,{actions:s}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,a.P)(s,this),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}}},640:(f,h,i)=>{i.d(h,{v:()=>l});const o={now:()=>(o.delegate||Date).now(),delegate:void 0};class c{constructor(r,n=c.now){this.schedulerActionCtor=r,this.now=n}schedule(r,n=0,e){return new this.schedulerActionCtor(this,r).schedule(e,n)}}c.now=o.now;class l extends c{constructor(r,n=c.now){super(r,n),this.actions=[],this._active=!1}flush(r){const{actions:n}=this;if(this._active)return void n.push(r);let e;this._active=!0;do{if(e=r.execute(r.state,r.delay))break}while(r=n.shift());if(this._active=!1,e){for(;r=n.shift();)r.unsubscribe();throw e}}}},4986:(f,h,i)=>{i.d(h,{P:()=>a,z:()=>l});var o=i(4408);const l=new(i(640).v)(o.o),a=l},5861:(f,h,i)=>{function o(l,a,r,n,e,t,s){try{var d=l[t](s),u=d.value}catch(_){return void r(_)}d.done?a(u):Promise.resolve(u).then(n,e)}function c(l){return function(){var a=this,r=arguments;return new Promise(function(n,e){var t=l.apply(a,r);function s(u){o(t,n,e,s,d,"next",u)}function d(u){o(t,n,e,s,d,"throw",u)}s(void 0)})}}i.d(h,{Z:()=>c})}}]);