import{j as d}from"./chunk-JI4HC7ZB.js";import{Fa as _,La as o,Pa as c,Y as f,Ya as r,Za as a,gb as p,lb as h,tb as y}from"./chunk-J7VQRZXE.js";import"./chunk-H6ZYCSLO.js";function m(t,s){return{type:7,name:t,definitions:s,options:{}}}function l(t,s=null){return{type:4,styles:s,timings:t}}function i(t){return{type:6,styles:t,offset:null}}function u(t,s,F=null){return{type:1,expr:t,animation:s,options:F}}function g(t,s){t&1&&(r(0,"div"),h(1,"Some text"),a()),t&2&&o("@fadeIn",void 0)}var S=m("fadeIn",[u(":enter",[i({opacity:0}),l(".2s ease-out",i({opacity:1}))]),u(":leave",[l(".2s ease-in",i({opacity:0}))])]),w=(()=>{let s=class s{constructor(){this.show=!1}};s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=f({type:s,selectors:[["animation-comp"]],standalone:!0,features:[y],decls:3,vars:1,consts:[[3,"click"],[4,"ngIf"]],template:function(n,e){n&1&&(r(0,"button",0),p("click",function(){return e.show=!e.show}),h(1,"Toggle"),a(),c(2,g,2,1,"div",1)),n&2&&(_(2),o("ngIf",e.show))},dependencies:[d],encapsulation:2,data:{animation:[S]}});let t=s;return t})();export{w as default};
