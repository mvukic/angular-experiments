import{h as b,i as M}from"./chunk-M72YQ7T7.js";import{$ as g,Ia as p,Ka as m,La as s,Ma as a,Na as f,Oa as u,Pa as x,Ta as v,Ua as C,Va as _,X as l,Ya as c,Za as y,_a as O,aa as h,eb as d,ya as r}from"./chunk-SLVFAE7N.js";import"./chunk-GANLAYMA.js";function w(t,e){t&1&&(u(0),_(1),x())}var F=["*"];function S(t,e){if(t&1&&(s(0,"div",3),c(1),a()),t&2){let P=e.$implicit;r(1),O(" ",P," ")}}var E=(()=>{let e=class{constructor(){this.visible=h(!0),this.icon=g(()=>this.visible()?"visibility":"visibility_off")}toggle(){this.visible.set(!this.visible())}},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=l({type:e,selectors:[["expandable-cmp"]],standalone:!0,features:[d],ngContentSelectors:F,decls:5,vars:2,consts:[[1,"content"],[4,"ngIf"],[1,"footer"],[1,"material-icons",3,"click"]],template:function(n,o){n&1&&(C(),s(0,"div",0),p(1,w,2,0,"ng-container",1),a(),s(2,"div",2)(3,"span",3),v("click",function(){return o.toggle()}),c(4),a()()),n&2&&(r(1),m("ngIf",o.visible()),r(3),y(o.icon()))},dependencies:[M],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{height:100%;overflow:hidden}[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]{padding:0 5px;border-top:1px solid black}"]})})(),t})(),T=(()=>{let e=class{constructor(){this.items=Array.from({length:25}).map((i,n)=>`Item ${n+1}`)}},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=l({type:e,selectors:[["nav-cmp"]],standalone:!0,features:[d],decls:4,vars:1,consts:[[1,"header"],[1,"items"],["class","item",4,"ngFor","ngForOf"],[1,"item"]],template:function(n,o){n&1&&(s(0,"div",0),c(1,"Header"),a(),s(2,"div",1),p(3,S,2,1,"div",2),a()),n&2&&(r(3),m("ngForOf",o.items))},dependencies:[b],styles:["[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column;overflow:hidden}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;overflow:hidden;border:1px solid saddlebrown;padding:3px;flex:0 0 min-content}[_nghost-%COMP%]   .items[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px;overflow-y:scroll;padding-left:3px;flex:1}[_nghost-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{border:1px solid green;padding:5px}"]})})(),t})(),I=(()=>{let e=class{},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=l({type:e,selectors:[["section-cmp"]],standalone:!0,features:[d],decls:1,vars:0,template:function(n,o){n&1&&c(0," section ")},styles:["[_nghost-%COMP%]{border:1px solid red;height:100%;overflow:hidden}"]})})(),t})(),A=(()=>{let e=class{},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=l({type:e,selectors:[["overlay-example"]],standalone:!0,features:[d],decls:3,vars:0,template:function(n,o){n&1&&(s(0,"expandable-cmp"),f(1,"nav-cmp"),a(),f(2,"section-cmp"))},dependencies:[T,I,E],styles:["[_nghost-%COMP%]{display:flex;height:100%;overflow:hidden}[_nghost-%COMP%]   expandable-cmp[_ngcontent-%COMP%]{flex-basis:200px}[_nghost-%COMP%]   section-cmp[_ngcontent-%COMP%]{flex:1}"]})})(),t})();export{E as ExpandableCmp,T as NavCmp,I as SectionCmp,A as default};
