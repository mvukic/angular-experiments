import { createRequire } from 'node:module';
globalThis['require'] ??= createRequire(import.meta.url);
import{b as C}from"./chunk-FPVH6KY7.mjs";import{k as u}from"./chunk-3ZTQSWPF.mjs";import{$a as i,Ia as p,Oa as m,Sa as f,Y as r,ab as a,bb as l,lb as x,mb as h,ob as s,qb as g,wb as c}from"./chunk-7YQ6KO4F.mjs";import"./chunk-AJ7PTMCJ.mjs";function O(t,e){if(t&1&&(i(0,"div",3),s(1),a()),t&2){let v=e.$implicit;p(1),g(" ",v," ")}}var y=["*"],_=(()=>{let e=class e{constructor(){this.items=Array.from({length:25}).map((o,n)=>`Item ${n+1}`)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r({type:e,selectors:[["nav-cmp"]],standalone:!0,features:[c],decls:4,vars:1,consts:[[1,"header"],[1,"items"],["class","item",4,"ngFor","ngForOf"],[1,"item"]],template:function(n,d){n&1&&(i(0,"div",0),s(1,"Header"),a(),i(2,"div",1),f(3,O,2,1,"div",2),a()),n&2&&(p(3),m("ngForOf",d.items))},dependencies:[u],styles:["[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column;overflow:hidden}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;overflow:hidden;border:1px solid saddlebrown;padding:3px;flex:0 0 min-content}[_nghost-%COMP%]   .items[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px;overflow-y:scroll;border:1px solid saddlebrown;flex:1}[_nghost-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{border:1px solid green;padding:5px}"],changeDetection:0});let t=e;return t})(),M=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r({type:e,selectors:[["section-cmp"]],standalone:!0,features:[c],ngContentSelectors:y,decls:9,vars:0,consts:[[1,"header"],[2,"flex","1 1 auto"],[1,"material-icons"],[1,"content"]],template:function(n,d){n&1&&(x(),i(0,"div",0),h(1),l(2,"span",1),i(3,"span",2),s(4,"filter_list"),a(),i(5,"span",2),s(6,"sort"),a()(),i(7,"div",3),s(8,"Content"),a())},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:5px}"],changeDetection:0});let t=e;return t})(),F=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r({type:e,selectors:[["expandable-example"]],standalone:!0,features:[c],decls:7,vars:0,consts:[["label","Content is hidden"],["label","This content is also hidden","expanded","false"]],template:function(n,d){n&1&&(i(0,"app-expandable",0),l(1,"nav-cmp"),a(),i(2,"app-expandable",1),l(3,"nav-cmp"),a(),l(4,"section-cmp"),i(5,"app-expandable",0),l(6,"nav-cmp"),a())},dependencies:[_,M,C],styles:["[_nghost-%COMP%]{display:flex;height:100%;overflow:hidden}[_nghost-%COMP%]   app-expandable[_ngcontent-%COMP%]{flex-basis:fit-content}[_nghost-%COMP%]   nav-cmp[_ngcontent-%COMP%]{width:200px}[_nghost-%COMP%]   section-cmp[_ngcontent-%COMP%]{flex:1}"],changeDetection:0});let t=e;return t})();export{_ as NavCmp,M as SectionCmp,F as default};
