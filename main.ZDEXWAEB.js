import{a as h,c as g,e as L,f as x,g as S,h as F,i as C}from"./chunk-KIEZJ6FQ.js";import{b as k,c as D}from"./chunk-Z6EIC34V.js";import"./chunk-ADQFVW72.js";import{$ as m,$a as l,Aa as p,Ia as n,Ja as a,Ka as c,La as f,Va as o,ab as i,ma as y}from"./chunk-WPGKUIGD.js";import"./chunk-GANLAYMA.js";var R=function(){return[""]},_=function(){return["params-and-state"]},M=function(){return{debug:1}},O=function(){return["templated-ng-for"]},q=function(){return["lazy-load-component"]},Q=function(){return["api-calls"]},j=function(){return["dynamic-component"]},B=function(){return["host-directives"]},G=function(){return["overlay"]},J=function(){return["signals"]},E=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(u){return new(u||t)}})(),(()=>{t.\u0275cmp=m({type:t,selectors:[["app-root"]],standalone:!0,features:[l],decls:23,vars:22,consts:[[3,"routerLink"],["routerLinkActive","underline",3,"routerLink","queryParams","state"],["routerLinkActive","underline",3,"routerLink"],[2,"width","100%","height","100%"]],template:function(u,v){u&1&&(a(0,"div")(1,"div")(2,"a",0),o(3,"Experiments"),c()(),a(4,"div")(5,"button",1),o(6," Params and state "),c(),a(7,"button",2),o(8,"Templated ng for"),c(),a(9,"button",2),o(10,"Lazy load component"),c(),a(11,"button",2),o(12,"API calls"),c(),a(13,"button",2),o(14,"Dynamic component"),c(),a(15,"button",2),o(16,"Host directives"),c(),a(17,"button",2),o(18,"Overlay"),c(),a(19,"button",2),o(20,"Signals"),c()()(),a(21,"div",3),f(22,"router-outlet"),c()),u&2&&(p(2),n("routerLink",i(11,R)),p(3),n("routerLink",i(12,_))("queryParams",i(13,M))("state",i(14,M)),p(2),n("routerLink",i(15,O)),p(2),n("routerLink",i(16,q)),p(2),n("routerLink",i(17,Q)),p(2),n("routerLink",i(18,j)),p(2),n("routerLink",i(19,B)),p(2),n("routerLink",i(20,G)),p(2),n("routerLink",i(21,J)))},dependencies:[g,L,x],encapsulation:2})})(),e})();function b(e){return(()=>{let r=class{constructor(){this.html=e}},s=r;return(()=>{r.\u0275fac=function(d){return new(d||r)}})(),(()=>{r.\u0275cmp=m({type:r,selectors:[["ng-component"]],standalone:!0,features:[l],decls:1,vars:1,consts:[[3,"innerHTML"]],template:function(d,I){d&1&&f(0,"div",0),d&2&&n("innerHTML",I.html,y)},encapsulation:2,changeDetection:0})})(),s})()}var T=(e,t)=>(console.log("can activate"),!0),H=(e,t,s,r)=>(console.log("can deactivate"),!0);var P=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(u){return new(u||t)}})(),(()=>{t.\u0275cmp=m({type:t,selectors:[["main"]],standalone:!0,features:[l],decls:1,vars:0,template:function(u,v){u&1&&o(0,"main")},encapsulation:2,changeDetection:0})})(),e})();var w=[{path:"",component:P},{path:"params-and-state",loadComponent:()=>import("./params-and-state-3R5HVOY6.js"),title:"Query params and state",canActivate:[T],canDeactivate:[H]},{path:"templated-ng-for",loadComponent:()=>import("./templated-ng-for-BSPUV6Y5.js"),title:"Templated ngFor"},{path:"api-calls",loadComponent:()=>import("./api-calls-MDR2K56I.js"),title:"API calls"},{path:"lazy-load-component",loadComponent:()=>import("./lazy-load-component-PP4OPSDD.js"),title:"Lazy load component"},{path:"host-directives",loadComponent:()=>import("./host-directives-ZEM62J35.js"),title:"Host directives"},{path:"dynamic-component",component:b("<h1>Dynamically created component</h1>"),title:"Dynamic component"},{path:"overlay",loadComponent:()=>import("./overlay-PX3E5CLU.js"),title:"Overlay"},{path:"signals",loadComponent:()=>import("./signals-EC5Q2WRS.js"),title:"Signals"}];var z=(e,t)=>(console.log("Api call",e.url),t(e));h(E,{providers:[F(w,C(S)),k(D([z]))]}).catch(e=>console.error(e));
