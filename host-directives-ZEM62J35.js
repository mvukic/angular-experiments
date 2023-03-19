import{i as R}from"./chunk-ADQFVW72.js";import{$ as I,$a as O,Aa as v,Ea as g,Ga as y,I as T,Ia as D,Ja as c,Ka as d,La as f,Ma as V,Na as A,Q as B,S as $,Ta as h,Va as l,Xa as z,Z as u,ba as a,bb as M,cb as b,eb as P,f as L,fb as j,x as H}from"./chunk-WPGKUIGD.js";import{c as o,d as p,e as F}from"./chunk-GANLAYMA.js";var C=class{constructor(){this.$implicit=null,this.ngLet=null}},G=(()=>{var e,n,s;let i=class{constructor(){p(this,e,new C);p(this,n,u(j));p(this,s,u(P))}set ngLet(m){o(this,e).$implicit=o(this,e).ngLet=m}ngOnInit(){o(this,n).createEmbeddedView(o(this,s),o(this,e))}static ngTemplateContextGuard(m,w){return!0}},t=i;return e=new WeakMap,n=new WeakMap,s=new WeakMap,(()=>{i.\u0275fac=function(w){return new(w||i)}})(),(()=>{i.\u0275dir=a({type:i,selectors:[["","ngLet",""]],inputs:{ngLet:"ngLet"},standalone:!0})})(),t})();var x=(()=>{var e;let n=class{constructor(){p(this,e,new L)}get destroy(){return o(this,e).asObservable()}ngOnDestroy(){o(this,e).next(!0),o(this,e).complete()}},t=n;return e=new WeakMap,(()=>{n.\u0275fac=function(r){return new(r||n)}})(),(()=>{n.\u0275dir=a({type:n,selectors:[["onDestroy"]],standalone:!0})})(),t})();function J(t,e){if(t&1&&(V(0),c(1,"span"),l(2),d(),A()),t&2){let n=e.ngLet;v(2),z("Counter: ",n,"")}}function K(t,e){if(t&1&&(c(0,"span"),l(1),d()),t&2){let n=e.ngLet;v(1),z("Counter: ",n,"")}}var E=(()=>{let e=class{constructor(){this.size="xxx-large"}},t=e;return(()=>{e.\u0275fac=function(i){return new(i||e)}})(),(()=>{e.\u0275dir=a({type:e,selectors:[["span","size",""]],hostVars:2,hostBindings:function(i,r){i&2&&h("font-size",r.size)},inputs:{size:"size"},standalone:!0})})(),t})();var S=(()=>{let e=class{constructor(){this.color="blue"}},t=e;return(()=>{e.\u0275fac=function(i){return new(i||e)}})(),(()=>{e.\u0275dir=a({type:e,selectors:[["span","color",""]],hostVars:2,hostBindings:function(i,r){i&2&&h("color",r.color)},inputs:{color:"color"},standalone:!0})})(),t})();var U=(()=>{let e=class{constructor(){this.sizeDirective=u(E),this.colorDirective=u(S)}},t=e;return(()=>{e.\u0275fac=function(i){return new(i||e)}})(),(()=>{e.\u0275dir=a({type:e,selectors:[["span","sizedAndColoredText",""]],standalone:!0,features:[g([{directive:E,inputs:["size","hostSize"]},{directive:S,inputs:["color","hostColor"]}])]})})(),t})();var Q=(()=>{let e=class{},t=e;return(()=>{e.\u0275fac=function(i){return new(i||e)}})(),(()=>{e.\u0275dir=a({type:e,selectors:[["span","decoratedText",""]],hostVars:2,hostBindings:function(i,r){i&2&&h("text-decoration",r.decoration)},inputs:{decoration:"decoration"},standalone:!0,features:[g([U])]})})(),t})();var W=(()=>{var e;let n=class{constructor(){p(this,e,void 0);F(this,e,u(x).destroy),this.interval$=H(1e3).pipe(B(o(this,e)),$(i=>console.log(i)),T(()=>console.log("Completed")))}},t=n;return e=new WeakMap,(()=>{n.\u0275fac=function(r){return new(r||n)}})(),(()=>{n.\u0275cmp=I({type:n,selectors:[["host-components"]],standalone:!0,features:[O,g([x])],decls:22,vars:6,consts:[["size","x-large"],["color","red"],["sizedAndColoredText","","hostSize","xx-small","hostColor","lime"],["sizedAndColoredText",""],["decoratedText","","decoration","underline"],[4,"ngLet"]],template:function(r,m){r&1&&(c(0,"h1"),l(1,"Host directives"),d(),c(2,"span",0),l(3,"Large text"),d(),f(4,"br"),c(5,"span",1),l(6,"Colored text"),d(),f(7,"br"),c(8,"span",2),l(9," Extra large and green"),d(),f(10,"br"),c(11,"span",3),l(12," Extra large and blue"),d(),f(13,"br"),c(14,"span",4),l(15," Extra large and blue and underlined"),d(),f(16,"br"),y(17,J,3,1,"ng-container",5),M(18,"async"),f(19,"br"),y(20,K,2,1,"span",5),M(21,"async")),r&2&&(v(17),D("ngLet",b(18,2,m.interval$)),v(3),D("ngLet",b(21,4,m.interval$)))},dependencies:[E,S,U,Q,G,R],encapsulation:2})})(),t})(),pe=W;export{U as ComposedDirective,Q as DecoratedAndComposedDirective,S as FontColorDirective,E as FontSizeDirective,pe as default};
