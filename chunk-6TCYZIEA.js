import{i as S}from"./chunk-WJ2M2PMU.js";import{$ as _,Bb as h,Ia as x,Ka as d,La as l,Ma as s,Qa as P,Ta as m,Ua as g,Va as M,Wa as O,X as u,Xa as A,Za as v,_a as f,aa as c,da as I,ea as T,fb as b,jb as C,ya as o}from"./chunk-TYWQYKMX.js";import{c as p,d as w,e as E}from"./chunk-GANLAYMA.js";var k=(()=>{var e;let i=class{constructor(){w(this,e,void 0);this.visibilityIcon="visibility",this.invisibilityIcon="visibility_off",this.valueChange=new C,E(this,e,c(!0)),this._icon=_(()=>p(this,e).call(this)?this.visibilityIcon:this.invisibilityIcon)}set value(n){p(this,e).set(h(n))}toggle(){p(this,e).set(!p(this,e).call(this)),this.valueChange.emit(p(this,e).call(this))}},t=i;return e=new WeakMap,(()=>{i.\u0275fac=function(a){return new(a||i)}})(),(()=>{i.\u0275cmp=u({type:i,selectors:[["app-expandable-trigger"]],inputs:{value:"value",visibilityIcon:"visibilityIcon",invisibilityIcon:"invisibilityIcon"},outputs:{valueChange:"valueChange"},exportAs:["appExpandableTrigger"],standalone:!0,features:[b],decls:2,vars:1,consts:[[1,"material-icons",3,"click"]],template:function(a,y){a&1&&(l(0,"span",0),m("click",function(){return y.toggle()}),v(1),s()),a&2&&(o(1),f(y._icon()))},encapsulation:2,changeDetection:0})})(),t})();function D(t,e){if(t&1&&(l(0,"div",5),v(1),s()),t&2){let i=g(2);o(1),f(i.label)}}function V(t,e){if(t&1&&(l(0,"div",3),x(1,D,2,1,"div",4),s()),t&2){let i=g();o(1),d("ngIf",i.label)}}function j(t,e){if(t&1){let i=P();l(0,"div",6)(1,"app-expandable-trigger",7),m("valueChange",function(n){I(i);let a=g();return T(a._expanded.set(n))}),s()()}if(t&2){let i=g();o(1),d("value",i._expanded())}}var N=["*"],L=(()=>{let e=class{constructor(){this.expand=new C,this._expanded=c(!0),this._display=_(()=>this._expanded()?"block":"none"),this._withoutTrigger=c(!1)}set expanded(r){this._expanded.set(h(r))}set withoutTrigger(r){this._withoutTrigger.set(h(r))}toggle(){this._expanded.set(!this._expanded()),this.expand.emit(this._expanded())}},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=u({type:e,selectors:[["app-expandable"]],inputs:{label:"label",expanded:"expanded",withoutTrigger:"withoutTrigger"},outputs:{expand:"expand"},exportAs:["appExpandable"],standalone:!0,features:[b],ngContentSelectors:N,decls:4,vars:4,consts:[[1,"content"],["class","content-with-label",4,"ngIf"],["class","footer",4,"ngIf"],[1,"content-with-label"],["class","label",4,"ngIf"],[1,"label"],[1,"footer"],[3,"value","valueChange"]],template:function(n,a){n&1&&(M(),l(0,"div",0),O(1),s(),x(2,V,2,1,"div",1),x(3,j,2,1,"div",2)),n&2&&(A("display",a._display()),o(2),d("ngIf",!a._expanded()),o(1),d("ngIf",!a._withoutTrigger()))},dependencies:[S,k],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden;height:100%}[_nghost-%COMP%]   .content[_ngcontent-%COMP%], [_nghost-%COMP%]   .content-with-label[_ngcontent-%COMP%]{height:100%;overflow:hidden}[_nghost-%COMP%]   .content-with-label[_ngcontent-%COMP%]{display:grid;place-items:center center}[_nghost-%COMP%]   .content-with-label[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{writing-mode:vertical-lr;transform:rotate(180deg)}[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]{display:flex;padding:0 5px}"],changeDetection:0})})(),t})();export{k as a,L as b};
