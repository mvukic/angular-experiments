import{$ as d,Da as u,Ka as f,La as e,Ma as t,Ta as p,X as c,Ya as i,Za as g,aa as m,eb as S,ya as s}from"./chunk-SLVFAE7N.js";import"./chunk-GANLAYMA.js";var _=(()=>{let l=class{constructor(){this.first=m(localStorage.getItem("first")??""),this.last=m(localStorage.getItem("last")??""),this.full=d(()=>`${this.first()} ${this.last()}`),u(()=>(localStorage.setItem("first",this.first()),()=>console.log("Cleaning effect 1"))),u(()=>(localStorage.setItem("last",this.last()),()=>console.log("Cleaning effect 1")))}},r=l;return(()=>{l.\u0275fac=function(a){return new(a||l)}})(),(()=>{l.\u0275cmp=c({type:l,selectors:[["demo-signals"]],standalone:!0,features:[S],decls:16,vars:3,consts:[["for","first"],["type","text","name","first","id","first",3,"value","keyup"],["for","last"],["type","text","name","last","id","last",3,"value","keyup"]],template:function(a,n){a&1&&(e(0,"h3"),i(1,"Signals"),t(),e(2,"fieldset")(3,"legend"),i(4,"First and last name"),t(),e(5,"label",0),i(6,"First"),t(),e(7,"input",1),p("keyup",function(o){return n.first.set(o.target.value)}),t(),e(8,"label",2),i(9,"Last"),t(),e(10,"input",3),p("keyup",function(o){return n.last.set(o.target.value)}),t()(),e(11,"fieldset")(12,"legend"),i(13,"Full name"),t(),e(14,"span"),i(15),t()()),a&2&&(s(7),f("value",n.first()),s(3),f("value",n.last()),s(5),g(n.full()))},encapsulation:2,changeDetection:0})})(),r})();export{_ as default};
