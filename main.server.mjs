import { createRequire } from 'node:module';
globalThis['require'] ??= createRequire(import.meta.url);
import{a as P,b as T,c as I,d as V,e as x,f as N}from"./chunk-VJNZSEMJ.mjs";import"./chunk-NWAJMWMG.mjs";import"./chunk-FPVH6KY7.mjs";import"./chunk-RYPHPWP2.mjs";import{i as _,j as g}from"./chunk-Y2QC3SQ2.mjs";import"./chunk-JFIWXEFI.mjs";import"./chunk-3ZTQSWPF.mjs";import{Jb as p,Pb as y,Qb as h,Rb as E,Ub as C}from"./chunk-7YQ6KO4F.mjs";import{m as c,n as u,o as s}from"./chunk-AJ7PTMCJ.mjs";var B=N;function a(e,i,t,o=""){return u(this,null,function*(){for(let r of e){let{path:n,redirectTo:f,loadChildren:d,children:R}=r;if(n===void 0)continue;let l=F(o,n);if(f!==void 0){yield{route:l,success:!1,redirect:!0};continue}if(/[:*]/.test(n)){yield{route:l,success:!1,redirect:!1};continue}if(yield{route:l,success:!0,redirect:!1},R?.length&&(yield*s(a(R,i,t,l))),d){let m=yield new c(_(r,i,t).toPromise());if(m){let{routes:S,injector:w=t}=m;yield*s(a(S,i,w,l))}}}})}function v(e,i){return u(this,null,function*(){let t=y(C,"server",[[{provide:P,useValue:{document:i,url:""}}],...T])();try{let o;A(e)?o=yield new c(e()):o=(yield new c(t.bootstrapModule(e))).injector.get(h),yield new c(E(o));let r=o.injector,n=r.get(g),f=r.get(p);yield*s(a(n.config,f,r))}finally{t.destroy()}})}function A(e){return typeof e=="function"&&!("\u0275mod"in e)}function F(...e){return e.filter(Boolean).join("/")}export{B as default,v as extractRoutes,x as renderApplication,V as renderModule,I as \u0275SERVER_CONTEXT};
