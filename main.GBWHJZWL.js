import{a as h,c as g,e as x,f as L,g as S,h as C,i as k}from"./chunk-F2ZFH6ME.js";import{b as F,c as D}from"./chunk-FQ6FGKSK.js";import"./chunk-4E3FMHWV.js";import{Ba as c,Ja as n,Ka as r,La as a,Ma as f,Wa as o,aa as l,bb as m,cb as i,la as y}from"./chunk-HTYYXY5M.js";import"./chunk-GANLAYMA.js";var I=function(){return[""]},R=function(){return["params-and-state"]},b=function(){return{debug:1}},O=function(){return["templated-ng-for"]},B=function(){return["lazy-load-component"]},K=function(){return["api-calls"]},q=function(){return["dynamic-component"]},Q=function(){return["host-directives"]},j=function(){return["overlay"]},G=function(){return["signals"]},J=function(){return["cdk-listbox"]},N=function(){return["custom-selector"]},M=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(u){return new(u||t)}})(),(()=>{t.\u0275cmp=l({type:t,selectors:[["app-root"]],standalone:!0,features:[m],decls:27,vars:26,consts:[[3,"routerLink"],["routerLinkActive","underline",3,"routerLink","queryParams","state"],["routerLinkActive","underline",3,"routerLink"],[2,"width","100%","height","100%"]],template:function(u,v){u&1&&(r(0,"div")(1,"div")(2,"a",0),o(3,"Experiments"),a()(),r(4,"div")(5,"button",1),o(6," Params and state "),a(),r(7,"button",2),o(8,"Templated ng for"),a(),r(9,"button",2),o(10,"Lazy load component"),a(),r(11,"button",2),o(12,"API calls"),a(),r(13,"button",2),o(14,"Dynamic component"),a(),r(15,"button",2),o(16,"Host directives"),a(),r(17,"button",2),o(18,"Overlay"),a(),r(19,"button",2),o(20,"Signals"),a(),r(21,"button",2),o(22,"CDK ListBox"),a(),r(23,"button",2),o(24,"Selector"),a()()(),r(25,"div",3),f(26,"router-outlet"),a()),u&2&&(c(2),n("routerLink",i(13,I)),c(3),n("routerLink",i(14,R))("queryParams",i(15,b))("state",i(16,b)),c(2),n("routerLink",i(17,O)),c(2),n("routerLink",i(18,B)),c(2),n("routerLink",i(19,K)),c(2),n("routerLink",i(20,q)),c(2),n("routerLink",i(21,Q)),c(2),n("routerLink",i(22,j)),c(2),n("routerLink",i(23,G)),c(2),n("routerLink",i(24,J)),c(2),n("routerLink",i(25,N)))},dependencies:[g,x,L],encapsulation:2})})(),e})();function A(e){return(()=>{let p=class{constructor(){this.html=e}},s=p;return(()=>{p.\u0275fac=function(d){return new(d||p)}})(),(()=>{p.\u0275cmp=l({type:p,selectors:[["ng-component"]],standalone:!0,features:[m],decls:1,vars:1,consts:[[3,"innerHTML"]],template:function(d,z){d&1&&f(0,"div",0),d&2&&n("innerHTML",z.html,y)},encapsulation:2,changeDetection:0})})(),s})()}var T=(e,t)=>(console.log("can activate"),!0),H=(e,t,s,p)=>(console.log("can deactivate"),!0);var P=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(u){return new(u||t)}})(),(()=>{t.\u0275cmp=l({type:t,selectors:[["main"]],standalone:!0,features:[m],decls:1,vars:0,template:function(u,v){u&1&&o(0,"main")},encapsulation:2,changeDetection:0})})(),e})();var _=[{path:"",component:P},{path:"params-and-state",loadComponent:()=>import("./params-and-state-WJGWY6AE.js"),title:"Query params and state",canActivate:[T],canDeactivate:[H]},{path:"templated-ng-for",loadComponent:()=>import("./templated-ng-for-RDZJYH5T.js"),title:"Templated ngFor"},{path:"api-calls",loadComponent:()=>import("./api-calls-3A56C4R7.js"),title:"API calls"},{path:"lazy-load-component",loadComponent:()=>import("./lazy-load-component-T7CLD3BR.js"),title:"Lazy load component"},{path:"host-directives",loadComponent:()=>import("./host-directives-O7UTEFWL.js"),title:"Host directives"},{path:"dynamic-component",component:A("<h1>Dynamically created component</h1>"),title:"Dynamic component"},{path:"overlay",loadComponent:()=>import("./overlay-6S2OUVO7.js"),title:"Overlay"},{path:"signals",loadComponent:()=>import("./signals-QUPOUNPO.js"),title:"Signals"},{path:"cdk-listbox",loadComponent:()=>import("./cdk-listbox-IMSOP3Y5.js"),title:"CDK ListBox"},{path:"custom-selector",loadComponent:()=>import("./selector-YJIZUG4R.js"),title:"Selector"}];var w=(e,t)=>(console.log("Api call",e.url),t(e));h(M,{providers:[C(_,k(S)),F(D([w]))]}).catch(e=>console.error(e));