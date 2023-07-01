import{d as ae,g as ce,o as ue}from"./chunk-CH7XQEJQ.js";import{B as q,G as ee,M as te,R as se,S as N,W as b,X as C,c as X,i as Q,j as K,na as x,o as I,oa as ne,qa as re,ta as oe,xb as ie,y as Z}from"./chunk-6E32RRDP.js";import{a as G,f as Y}from"./chunk-2BNLDSUO.js";var j=class{},k=class{},E=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(s=>{let t=s.indexOf(":");if(t>0){let r=s.slice(0,t),o=r.toLowerCase(),a=s.slice(t+1).trim();this.maybeSetNormalizedName(r,o),this.headers.has(o)?this.headers.get(o).push(a):this.headers.set(o,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((s,t)=>{this.setHeaderEntries(t,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([s,t])=>{this.setHeaderEntries(s,t)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let s=this.headers.get(e.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,s){return this.clone({name:e,value:s,op:"a"})}set(e,s){return this.clone({name:e,value:s,op:"s"})}delete(e,s){return this.clone({name:e,value:s,op:"d"})}maybeSetNormalizedName(e,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(s=>{this.headers.set(s,e.headers.get(s)),this.normalizedNames.set(s,e.normalizedNames.get(s))})}clone(e){let s=new n;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([e]),s}applyUpdate(e){let s=e.name.toLowerCase();switch(e.op){case"a":case"s":let t=e.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(e.name,s);let r=(e.op==="a"?this.headers.get(s):void 0)||[];r.push(...t),this.headers.set(s,r);break;case"d":let o=e.value;if(!o)this.headers.delete(s),this.normalizedNames.delete(s);else{let a=this.headers.get(s);if(!a)return;a=a.filter(i=>o.indexOf(i)===-1),a.length===0?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,a)}break}}setHeaderEntries(e,s){let t=(Array.isArray(s)?s:[s]).map(o=>o.toString()),r=e.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>e(this.normalizedNames.get(s),this.headers.get(s)))}};var B=class{encodeKey(e){return de(e)}encodeValue(e){return de(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function be(n,e){let s=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,i]=o==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,o)),e.decodeValue(r.slice(o+1))],l=s.get(a)||[];l.push(i),s.set(a,l)}),s}var ve=/%(\d[a-f0-9])/gi,Pe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function de(n){return encodeURIComponent(n).replace(ve,(e,s)=>Pe[s]??e)}function L(n){return`${n}`}var P=class n{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new B,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=be(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(s=>{let t=e.fromObject[s],r=Array.isArray(t)?t.map(L):[L(t)];this.map.set(s,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let s=this.map.get(e);return s?s[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,s){return this.clone({param:e,value:s,op:"a"})}appendAll(e){let s=[];return Object.keys(e).forEach(t=>{let r=e[t];Array.isArray(r)?r.forEach(o=>{s.push({param:t,value:o,op:"a"})}):s.push({param:t,value:r,op:"a"})}),this.clone(s)}set(e,s){return this.clone({param:e,value:s,op:"s"})}delete(e,s){return this.clone({param:e,value:s,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let s=this.encoder.encodeKey(e);return this.map.get(e).map(t=>s+"="+this.encoder.encodeValue(t)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let s=new n({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(e),s}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let s=(e.op==="a"?this.map.get(e.param):void 0)||[];s.push(L(e.value)),this.map.set(e.param,s);break;case"d":if(e.value!==void 0){let t=this.map.get(e.param)||[],r=t.indexOf(L(e.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var V=class{constructor(){this.map=new Map}set(e,s){return this.map.set(e,s),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Re(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function le(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function he(n){return typeof Blob<"u"&&n instanceof Blob}function fe(n){return typeof FormData<"u"&&n instanceof FormData}function Se(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var D=class n{constructor(e,s,t,r){this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let o;if(Re(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new E),this.context||(this.context=new V),!this.params)this.params=new P,this.urlWithParams=s;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=s;else{let i=s.indexOf("?"),l=i===-1?"?":i<s.length-1?"&":"";this.urlWithParams=s+l+a}}}serializeBody(){return this.body===null?null:le(this.body)||he(this.body)||fe(this.body)||Se(this.body)||typeof this.body=="string"?this.body:this.body instanceof P?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||fe(this.body)?null:he(this.body)?this.body.type||null:le(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof P?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let s=e.method||this.method,t=e.url||this.url,r=e.responseType||this.responseType,o=e.body!==void 0?e.body:this.body,a=e.withCredentials!==void 0?e.withCredentials:this.withCredentials,i=e.reportProgress!==void 0?e.reportProgress:this.reportProgress,l=e.headers||this.headers,c=e.params||this.params,g=e.context??this.context;return e.setHeaders!==void 0&&(l=Object.keys(e.setHeaders).reduce((m,p)=>m.set(p,e.setHeaders[p]),l)),e.setParams&&(c=Object.keys(e.setParams).reduce((m,p)=>m.set(p,e.setParams[p]),c)),new n(s,t,o,{params:c,headers:l,context:g,reportProgress:i,responseType:r,withCredentials:a})}},h=(()=>(h=h||{},h[h.Sent=0]="Sent",h[h.UploadProgress=1]="UploadProgress",h[h.ResponseHeader=2]="ResponseHeader",h[h.DownloadProgress=3]="DownloadProgress",h[h.Response=4]="Response",h[h.User=5]="User",h))(),F=class{constructor(e,s=200,t="OK"){this.headers=e.headers||new E,this.status=e.status!==void 0?e.status:s,this.statusText=e.statusText||t,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},U=class n extends F{constructor(e={}){super(e),this.type=h.ResponseHeader}clone(e={}){return new n({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},M=class n extends F{constructor(e={}){super(e),this.type=h.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},v=class extends F{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}};function J(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}var Ne=(()=>{let e=class e{constructor(t){this.handler=t}request(t,r,o={}){let a;if(t instanceof D)a=t;else{let c;o.headers instanceof E?c=o.headers:c=new E(o.headers);let g;o.params&&(o.params instanceof P?g=o.params:g=new P({fromObject:o.params})),a=new D(t,r,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:g,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}let i=K(a).pipe(q(c=>this.handler.handle(c)));if(t instanceof D||o.observe==="events")return i;let l=i.pipe(Z(c=>c instanceof M));switch(o.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe(I(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe(I(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe(I(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return l.pipe(I(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new P().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,o={}){return this.request("PATCH",t,J(o,r))}post(t,r,o={}){return this.request("POST",t,J(o,r))}put(t,r,o={}){return this.request("PUT",t,J(o,r))}};e.\u0275fac=function(r){return new(r||e)(b(j))},e.\u0275prov=N({token:e,factory:e.\u0275fac});let n=e;return n})(),Ce=/^\)\]\}',?\n/,xe="X-Request-URL";function pe(n){if(n.url)return n.url;let e=xe.toLocaleLowerCase();return n.headers.get(e)}var ye=(()=>{let e=class e{constructor(){this.fetchImpl=C($,{optional:!0})?.fetch??fetch.bind(globalThis)}handle(t){return new X(r=>{let o=new AbortController;return this.doRequest(t,o.signal,r).then(_,a=>r.error(new v({error:a}))),()=>o.abort()})}doRequest(t,r,o){return Y(this,null,function*(){let a=this.createRequestInit(t),i;try{let w=this.fetchImpl(t.urlWithParams,G({signal:r},a));Ae(w),o.next({type:h.Sent}),i=yield w}catch(w){o.error(new v({error:w,status:w.status??0,statusText:w.statusText,url:t.urlWithParams,headers:w.headers}));return}let l=new E(i.headers),c=i.statusText,g=pe(i)??t.urlWithParams,m=i.status,p=null;if(t.reportProgress&&o.next(new U({headers:l,status:m,statusText:c,url:g})),i.body){let w=i.headers.get("content-length"),A=[],u=i.body.getReader(),d=0,T,S;for(;;){let{done:R,value:O}=yield u.read();if(R)break;A.push(O),d+=O.length,t.reportProgress&&(S=t.responseType==="text"?(S??"")+(T??=new TextDecoder).decode(O,{stream:!0}):void 0,o.next({type:h.DownloadProgress,total:w?+w:void 0,loaded:d,partialText:S}))}let y=this.concatChunks(A,d);try{p=this.parseBody(t,y)}catch(R){o.error(new v({error:R,headers:new E(i.headers),status:i.status,statusText:i.statusText,url:pe(i)??t.urlWithParams}));return}}m===0&&(m=p?200:0),m>=200&&m<300?(o.next(new M({body:p,headers:l,status:m,statusText:c,url:g})),o.complete()):o.error(new v({error:p,headers:l,status:m,statusText:c,url:g}))})}parseBody(t,r){switch(t.responseType){case"json":let o=new TextDecoder().decode(r).replace(Ce,"");return o===""?null:JSON.parse(o);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r]);case"arraybuffer":return r.buffer}}createRequestInit(t){let r={},o=t.withCredentials?"include":void 0;if(t.headers.forEach((a,i)=>r[a]=i.join(",")),r.Accept??="application/json, text/plain, */*",!r["Content-Type"]){let a=t.detectContentTypeHeader();a!==null&&(r["Content-Type"]=a)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:o}}concatChunks(t,r){let o=new Uint8Array(r),a=0;for(let i of t)o.set(i,a),a+=i.length;return o}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=N({token:e,factory:e.\u0275fac});let n=e;return n})(),$=class{};function _(){}function Ae(n){n.then(_,_)}function Oe(n,e){return e(n)}function Ie(n,e,s){return(t,r)=>s.runInContext(()=>e(t,o=>n(o,r)))}var W=new x(""),De=new x("");var me=(()=>{let e=class e extends j{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=C(ie)}handle(t){if(this.chain===null){let o=Array.from(new Set([...this.injector.get(W),...this.injector.get(De,[])]));this.chain=o.reduceRight((a,i)=>Ie(a,i,this.injector),Oe)}let r=this.pendingTasks.add();return this.chain(t,o=>this.backend.handle(o)).pipe(ee(()=>this.pendingTasks.remove(r)))}};e.\u0275fac=function(r){return new(r||e)(b(k),b(re))},e.\u0275prov=N({token:e,factory:e.\u0275fac});let n=e;return n})();var je=/^\)\]\}',?\n/;function ke(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}var ge=(()=>{let e=class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new se(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?Q(r.\u0275loadImpl()):K(null)).pipe(te(()=>new X(a=>{let i=r.build();if(i.open(t.method,t.urlWithParams),t.withCredentials&&(i.withCredentials=!0),t.headers.forEach((u,d)=>i.setRequestHeader(u,d.join(","))),t.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let u=t.detectContentTypeHeader();u!==null&&i.setRequestHeader("Content-Type",u)}if(t.responseType){let u=t.responseType.toLowerCase();i.responseType=u!=="json"?u:"text"}let l=t.serializeBody(),c=null,g=()=>{if(c!==null)return c;let u=i.statusText||"OK",d=new E(i.getAllResponseHeaders()),T=ke(i)||t.url;return c=new U({headers:d,status:i.status,statusText:u,url:T}),c},m=()=>{let{headers:u,status:d,statusText:T,url:S}=g(),y=null;d!==204&&(y=typeof i.response>"u"?i.responseText:i.response),d===0&&(d=y?200:0);let R=d>=200&&d<300;if(t.responseType==="json"&&typeof y=="string"){let O=y;y=y.replace(je,"");try{y=y!==""?JSON.parse(y):null}catch(Te){y=O,R&&(R=!1,y={error:Te,text:y})}}R?(a.next(new M({body:y,headers:u,status:d,statusText:T,url:S||void 0})),a.complete()):a.error(new v({error:y,headers:u,status:d,statusText:T,url:S||void 0}))},p=u=>{let{url:d}=g(),T=new v({error:u,status:i.status||0,statusText:i.statusText||"Unknown Error",url:d||void 0});a.error(T)},z=!1,w=u=>{z||(a.next(g()),z=!0);let d={type:h.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(d.total=u.total),t.responseType==="text"&&i.responseText&&(d.partialText=i.responseText),a.next(d)},A=u=>{let d={type:h.UploadProgress,loaded:u.loaded};u.lengthComputable&&(d.total=u.total),a.next(d)};return i.addEventListener("load",m),i.addEventListener("error",p),i.addEventListener("timeout",p),i.addEventListener("abort",p),t.reportProgress&&(i.addEventListener("progress",w),l!==null&&i.upload&&i.upload.addEventListener("progress",A)),i.send(l),a.next({type:h.Sent}),()=>{i.removeEventListener("error",p),i.removeEventListener("abort",p),i.removeEventListener("load",m),i.removeEventListener("timeout",p),t.reportProgress&&(i.removeEventListener("progress",w),l!==null&&i.upload&&i.upload.removeEventListener("progress",A)),i.readyState!==i.DONE&&i.abort()}})))}};e.\u0275fac=function(r){return new(r||e)(b(ue))},e.\u0275prov=N({token:e,factory:e.\u0275fac});let n=e;return n})(),we=new x("XSRF_ENABLED"),Fe="XSRF-TOKEN",Me=new x("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>Fe}),Le="X-XSRF-TOKEN",Ue=new x("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>Le}),H=class{},He=(()=>{let e=class e{constructor(t,r,o){this.doc=t,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=ce(t,this.cookieName),this.lastCookieString=t),this.lastToken}};e.\u0275fac=function(r){return new(r||e)(b(ae),b(oe),b(Me))},e.\u0275prov=N({token:e,factory:e.\u0275fac});let n=e;return n})();function ze(n,e){let s=n.url.toLowerCase();if(!C(we)||n.method==="GET"||n.method==="HEAD"||s.startsWith("http://")||s.startsWith("https://"))return e(n);let t=C(H).getToken(),r=C(Ue);return t!=null&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,t)})),e(n)}var f=(()=>(f=f||{},f[f.Interceptors=0]="Interceptors",f[f.LegacyInterceptors=1]="LegacyInterceptors",f[f.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",f[f.NoXsrfProtection=3]="NoXsrfProtection",f[f.JsonpSupport=4]="JsonpSupport",f[f.RequestsMadeViaParent=5]="RequestsMadeViaParent",f[f.Fetch=6]="Fetch",f))();function Ee(n,e){return{\u0275kind:n,\u0275providers:e}}function ot(...n){let e=[Ne,ge,me,{provide:j,useExisting:me},{provide:k,useExisting:ge},{provide:W,useValue:ze,multi:!0},{provide:we,useValue:!0},{provide:H,useClass:He}];for(let s of n)e.push(...s.\u0275providers);return ne(e)}function it(n){return Ee(f.Interceptors,n.map(e=>({provide:W,useValue:e,multi:!0})))}function at(){return Ee(f.Fetch,[ye,{provide:k,useExisting:ye}])}export{Ne as a,ot as b,it as c,at as d};
