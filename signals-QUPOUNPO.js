import{Ab as S,Ba as o,Ja as c,Ka as e,La as t,Ra as g,Wa as i,Xa as v,aa as h,bb as E,xb as _,yb as y}from"./chunk-HTYYXY5M.js";import{c as p,d,e as f}from"./chunk-GANLAYMA.js";var D=(()=>{var a,l;let n=class{constructor(){d(this,a,void 0);d(this,l,void 0);this.first=y(localStorage.getItem("first")??""),this.last=y(localStorage.getItem("last")??""),this.full=_(()=>`${this.first()} ${this.last()}`),f(this,a,S(()=>localStorage.setItem("first",this.first()))),f(this,l,S(()=>localStorage.setItem("last",this.last())))}ngOnDestroy(){p(this,a).destroy(),p(this,l).destroy()}},m=n;return a=new WeakMap,l=new WeakMap,(()=>{n.\u0275fac=function(r){return new(r||n)}})(),(()=>{n.\u0275cmp=h({type:n,selectors:[["demo-signals"]],standalone:!0,features:[E],decls:16,vars:3,consts:[["for","first"],["type","text","name","first","id","first",3,"value","keyup"],["for","last"],["type","text","name","last","id","last",3,"value","keyup"]],template:function(r,s){r&1&&(e(0,"h3"),i(1,"Signals"),t(),e(2,"fieldset")(3,"legend"),i(4,"First and last name"),t(),e(5,"label",0),i(6,"First"),t(),e(7,"input",1),g("keyup",function(u){return s.first.set(u.target.value)}),t(),e(8,"label",2),i(9,"Last"),t(),e(10,"input",3),g("keyup",function(u){return s.last.set(u.target.value)}),t()(),e(11,"fieldset")(12,"legend"),i(13,"Full name"),t(),e(14,"span"),i(15),t()()),r&2&&(o(7),c("value",s.first()),o(3),c("value",s.last()),o(5),v(s.full()))},encapsulation:3,changeDetection:0})})(),m})(),w=D;export{w as default};