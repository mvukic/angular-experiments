import { createRequire } from 'node:module';
globalThis['require'] ??= createRequire(import.meta.url);
import{b as F,c as N,e as k,f as I,h as P,j as V,k as Y,n as O,o as B,p as w,q as A,r as q}from"./chunk-R67BKQH2.mjs";import{k as y,n as T}from"./chunk-3ZTQSWPF.mjs";import{$a as t,Ia as i,Oa as a,Sa as E,Y as x,ab as n,ea as _,fa as M,fb as h,jb as p,nb as C,ob as l,qb as c,wb as b,yb as v,zb as S}from"./chunk-7YQ6KO4F.mjs";import"./chunk-AJ7PTMCJ.mjs";function $(o,r){if(o&1){let s=h();t(0,"div")(1,"span"),l(2),n(),t(3,"input",9),p("ngModelChange",function(d){let m=_(s).$implicit;return M(m.name=d)}),n()()}if(o&2){let s=r.$implicit;i(2),c("Id: ",s.id," "),i(1),a("ngModel",s.name)("name","itemName"+s.id)}}var g=function(o){return o.TYPE1="TYPE1",o.TYPE2="TYPE2",o}(g||{}),R=(()=>{let r=class r{constructor(){this._box={id:"12345",name:"Box 1",opened:!0,type:g.TYPE1,items:[{id:"1",name:"Name 1"},{id:"2",name:"Name 2"},{id:"3",name:"Name 3"},{id:"4",name:"Name 4"}]},this.box=this._box,this.BoxType=g}addItem(){this.box.items.push({id:"5",name:"item 5"})}};r.\u0275fac=function(d){return new(d||r)},r.\u0275cmp=x({type:r,selectors:[["form-module-example"]],standalone:!0,features:[b],decls:26,vars:13,consts:[["f","ngForm"],["name","boxName",3,"ngModel","ngModelChange"],["id","select","name","formSelect",3,"ngModel","ngModelChange"],[3,"value"],["type","checkbox",3,"id","name","ngModel","ngModelChange"],[3,"for"],[3,"click"],[2,"display","flex","flex-direction","column","gap","5px"],[4,"ngFor","ngForOf"],["required","",3,"ngModel","name","ngModelChange"]],template:function(d,e){if(d&1&&(t(0,"fieldset")(1,"legend"),l(2,"Box"),n(),t(3,"form",null,0)(5,"span"),l(6),n(),t(7,"input",1),p("ngModelChange",function(u){return e.box.name=u}),n(),t(8,"select",2),p("ngModelChange",function(u){return e.box.type=u}),t(9,"option",3),l(10,"Type 1"),n(),t(11,"option",3),l(12,"Type 2"),n()(),t(13,"input",4),p("ngModelChange",function(u){return e.box.opened=u}),n(),t(14,"label",5),l(15,"Opened"),n()(),t(16,"fieldset")(17,"legend"),l(18,"Items"),n(),t(19,"button",6),p("click",function(){return e.addItem()}),l(20,"Add"),n(),t(21,"div",7),E(22,$,4,3,"div",8),n()()(),t(23,"span"),l(24),v(25,"json"),n()),d&2){let m=C(4);i(6),c("Id: ",e.box.id," "),i(1),a("ngModel",e.box.name),i(1),a("ngModel",e.box.type),i(1),a("value",e.BoxType.TYPE1),i(2),a("value",e.BoxType.TYPE2),i(2),a("id","formCheckbox-"+e.box.id)("name","formCheckbox-"+e.box.id)("ngModel",e.box.opened),i(1),a("for","formCheckbox-"+e.box.id),i(8),a("ngForOf",e.box.items),i(2),c(" ",S(25,11,m.value)," ")}},dependencies:[q,Y,B,w,N,F,O,k,I,A,V,P,y,T],encapsulation:2});let o=r;return o})();export{g as BoxType,R as default};
