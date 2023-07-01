import{a as K}from"./chunk-CH7XQEJQ.js";import{$ as u,Db as le,Ea as o,Fb as J,Ha as c,Ka as oe,Q as d,R as k,T as A,Va as ae,Xa as y,_ as M,ab as Y,ea as E,gb as h,ha as V,i as ne,na as m,nb as v,o as re,u as se,xa as F,za as w}from"./chunk-6E32RRDP.js";import{a as g,b as C}from"./chunk-2BNLDSUO.js";var ve=(()=>{let e=class e{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(n){return new(n||e)(o(w),o(F))},e.\u0275dir=u({type:e});let i=e;return i})(),$=(()=>{let e=class e extends ve{};e.\u0275fac=function(){let t;return function(s){return(t||(t=V(e)))(s||e)}}(),e.\u0275dir=u({type:e,features:[c]});let i=e;return i})(),b=new m("NgValueAccessor"),Re={provide:b,useExisting:d(()=>He),multi:!0},He=(()=>{let e=class e extends ${writeValue(t){this.setProperty("checked",t)}};e.\u0275fac=function(){let t;return function(s){return(t||(t=V(e)))(s||e)}}(),e.\u0275dir=u({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,s){n&1&&y("change",function(l){return s.onChange(l.target.checked)})("blur",function(){return s.onTouched()})},features:[h([Re]),c]});let i=e;return i})(),Le={provide:b,useExisting:d(()=>_e),multi:!0};function We(){let i=K()?K().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var $e=new m("CompositionEventMode"),_e=(()=>{let e=class e extends ve{constructor(t,n,s){super(t,n),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!We())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(n){return new(n||e)(o(w),o(F),o($e,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,s){n&1&&y("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[h([Le]),c]});let i=e;return i})();function qe(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}var N=new m("NgValidators"),q=new m("NgAsyncValidators");function ze(i){return qe(i.value)?{required:!0}:null}function ue(i){return null}function Ce(i){return i!=null}function Ve(i){return ae(i)?ne(i):i}function De(i){let e={};return i.forEach(r=>{e=r!=null?g(g({},e),r):e}),Object.keys(e).length===0?null:e}function be(i,e){return e.map(r=>r(i))}function Ze(i){return!i.validate}function Ae(i){return i.map(e=>Ze(e)?e:r=>e.validate(r))}function Xe(i){if(!i)return null;let e=i.filter(Ce);return e.length==0?null:function(r){return De(be(r,e))}}function ee(i){return i!=null?Xe(Ae(i)):null}function Ye(i){if(!i)return null;let e=i.filter(Ce);return e.length==0?null:function(r){let t=be(r,e).map(Ve);return se(t).pipe(re(De))}}function te(i){return i!=null?Ye(Ae(i)):null}function ce(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Me(i){return i._rawValidators}function Ee(i){return i._rawAsyncValidators}function Q(i){return i?Array.isArray(i)?i:[i]:[]}function T(i,e){return Array.isArray(i)?i.includes(e):i===e}function de(i,e){let r=Q(e);return Q(i).forEach(n=>{T(r,n)||r.push(n)}),r}function he(i,e){return Q(e).filter(r=>!T(i,r))}var j=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ee(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=te(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,r){return this.control?this.control.hasError(e,r):!1}getError(e,r){return this.control?this.control.getError(e,r):null}},p=class extends j{get formDirective(){return null}get path(){return null}},_=class extends j{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},B=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Je={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qt=C(g({},Je),{"[class.ng-submitted]":"isSubmitted"}),zt=(()=>{let e=class e extends B{constructor(t){super(t)}};e.\u0275fac=function(n){return new(n||e)(o(_,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,s){n&2&&Y("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[c]});let i=e;return i})(),Zt=(()=>{let e=class e extends B{constructor(t){super(t)}};e.\u0275fac=function(n){return new(n||e)(o(p,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,s){n&2&&Y("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[c]});let i=e;return i})();var I="VALID",G="INVALID",D="PENDING",S="DISABLED";function Fe(i){return(z(i)?i.validators:i)||null}function Ke(i){return Array.isArray(i)?ee(i):i||null}function we(i,e){return(z(e)?e.asyncValidators:i)||null}function Qe(i){return Array.isArray(i)?te(i):i||null}function z(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function et(i,e,r){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new k(1e3,"");if(!t[r])throw new k(1001,"")}function tt(i,e,r){i._forEachChild((t,n)=>{if(r[n]===void 0)throw new k(1002,"")})}var U=class{constructor(e,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===G}get pending(){return this.status==D}get disabled(){return this.status===S}get enabled(){return this.status!==S}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(de(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(de(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(he(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(he(e,this._rawAsyncValidators))}hasValidator(e){return T(this._rawValidators,e)}hasAsyncValidator(e){return T(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=D,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(t=>{t.disable(C(g({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(g({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(t=>{t.enable(C(g({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(g({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===D)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;let r=Ve(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,r={}){this.errors=e,this._updateControlsErrors(r.emitEvent!==!1)}get(e){let r=e;return r==null||(Array.isArray(r)||(r=r.split(".")),r.length===0)?null:r.reduce((t,n)=>t&&t._find(n),this)}getError(e,r){let t=r?this.get(r):this;return t&&t.errors?t.errors[e]:null}hasError(e,r){return!!this.getError(e,r)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new v,this.statusChanges=new v}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(G)?G:I}_anyControlsHaveStatus(e){return this._anyControls(r=>r.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let r=this._parent&&this._parent.dirty;return!e&&!!r&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ke(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Qe(this._rawAsyncValidators)}},R=class extends U{constructor(e,r,t){super(Fe(r),we(t,r)),this.controls=e,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,r){return this.controls[e]?this.controls[e]:(this.controls[e]=r,r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange),r)}addControl(e,r,t={}){this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}setControl(e,r,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],r&&this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,r={}){tt(this,!0,e),Object.keys(e).forEach(t=>{et(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(e,r={}){e!=null&&(Object.keys(e).forEach(t=>{let n=this.controls[t];n&&n.patchValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(e={},r={}){this._forEachChild((t,n)=>{t.reset(e[n],{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this._reduceChildren({},(e,r,t)=>(e[t]=r.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(r,t)=>t._syncPendingControls()?!0:r);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(r=>{let t=this.controls[r];t&&e(t,r)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[r,t]of Object.entries(this.controls))if(this.contains(r)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(r,t,n)=>((t.enabled||this.disabled)&&(r[n]=t.value),r))}_reduceChildren(e,r){let t=e;return this._forEachChild((n,s)=>{t=r(t,n,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var x=new m("CallSetDisabledState",{providedIn:"root",factory:()=>Z}),Z="always";function Ie(i,e){return[...e.path,i]}function H(i,e,r=Z){ie(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||r==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),nt(i,e),st(i,e),rt(i,e),it(i,e)}function fe(i,e,r=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),W(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function L(i,e){i.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(e)})}function it(i,e){if(e.valueAccessor.setDisabledState){let r=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(r),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(r)})}}function ie(i,e){let r=Me(i);e.validator!==null?i.setValidators(ce(r,e.validator)):typeof r=="function"&&i.setValidators([r]);let t=Ee(i);e.asyncValidator!==null?i.setAsyncValidators(ce(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let n=()=>i.updateValueAndValidity();L(e._rawValidators,n),L(e._rawAsyncValidators,n)}function W(i,e){let r=!1;if(i!==null){if(e.validator!==null){let n=Me(i);if(Array.isArray(n)&&n.length>0){let s=n.filter(a=>a!==e.validator);s.length!==n.length&&(r=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let n=Ee(i);if(Array.isArray(n)&&n.length>0){let s=n.filter(a=>a!==e.asyncValidator);s.length!==n.length&&(r=!0,i.setAsyncValidators(s))}}}let t=()=>{};return L(e._rawValidators,t),L(e._rawAsyncValidators,t),r}function nt(i,e){e.valueAccessor.registerOnChange(r=>{i._pendingValue=r,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Se(i,e)})}function rt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Se(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Se(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function st(i,e){let r=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};i.registerOnChange(r),e._registerOnDestroy(()=>{i._unregisterOnChange(r)})}function Oe(i,e){i==null,ie(i,e)}function ot(i,e){return W(i,e)}function Ne(i,e){if(!i.hasOwnProperty("model"))return!1;let r=i.model;return r.isFirstChange()?!0:!Object.is(e,r.currentValue)}function at(i){return Object.getPrototypeOf(i.constructor)===$}function xe(i,e){i._syncPendingControls(),e.forEach(r=>{let t=r.control;t.updateOn==="submit"&&t._pendingChange&&(r.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Pe(i,e){if(!e)return null;Array.isArray(e);let r,t,n;return e.forEach(s=>{s.constructor===_e?r=s:at(s)?t=s:n=s}),n||t||r||null}function lt(i,e){let r=i.indexOf(e);r>-1&&i.splice(r,1)}var ut={provide:p,useExisting:d(()=>ct)},O=(()=>Promise.resolve())(),ct=(()=>{let e=class e extends p{constructor(t,n,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new v,this.form=new R({},ee(t),te(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){O.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),H(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){O.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){O.then(()=>{let n=this._findContainer(t.path),s=new R({});Oe(s,t),n.registerControl(t.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){O.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){O.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,xe(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(n){return new(n||e)(o(N,10),o(q,10),o(x,8))},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,s){n&1&&y("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[h([ut]),c]});let i=e;return i})();function pe(i,e){let r=i.indexOf(e);r>-1&&i.splice(r,1)}function ge(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var ke=class extends U{constructor(e=null,r,t){super(Fe(r),we(t,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(r)&&(r.nonNullable||r.initialValueIsDefault)&&(ge(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,r={}){this.value=this._pendingValue=e,this._onChange.length&&r.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,r.emitViewToModelChange!==!1)),this.updateValueAndValidity(r)}patchValue(e,r={}){this.setValue(e,r)}reset(e=this.defaultValue,r={}){this._applyFormState(e),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){pe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){pe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ge(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var dt=i=>i instanceof ke;var ht={provide:_,useExisting:d(()=>ft)},me=(()=>Promise.resolve())(),ft=(()=>{let e=class e extends _{constructor(t,n,s,a,l,f){super(),this._changeDetectorRef=l,this.callSetDisabledState=f,this.control=new ke,this._registered=!1,this.name="",this.update=new v,this._parent=t,this._setValidators(n),this._setAsyncValidators(s),this.valueAccessor=Pe(this,a)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Ne(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){H(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){me.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,s=n!==0&&J(n);me.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Ie(t,this._parent):[t]}};e.\u0275fac=function(n){return new(n||e)(o(p,9),o(N,10),o(q,10),o(b,10),o(le,8),o(x,8))},e.\u0275dir=u({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[h([ht]),c,E]});let i=e;return i})(),Yt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var pt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=M({type:e}),e.\u0275inj=A({});let i=e;return i})();var Ge=new m("NgModelWithFormControlWarning");var gt={provide:p,useExisting:d(()=>mt)},mt=(()=>{let e=class e extends p{constructor(t,n,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new v,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(W(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return H(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){fe(t.control||null,t,!1),lt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this.submitted=!0,xe(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,s=this.form.get(t.path);n!==s&&(fe(n||null,t),dt(s)&&(H(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);Oe(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&ot(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ie(this.form,this),this._oldForm&&W(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(n){return new(n||e)(o(N,10),o(q,10),o(x,8))},e.\u0275dir=u({type:e,selectors:[["","formGroup",""]],hostBindings:function(n,s){n&1&&y("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[h([gt]),c,E]});let i=e;return i})();var yt={provide:_,useExisting:d(()=>vt)},vt=(()=>{let e=class e extends _{set isDisabled(t){}constructor(t,n,s,a,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new v,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(s),this.valueAccessor=Pe(this,a)}ngOnChanges(t){this._added||this._setUpControl(),Ne(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Ie(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(o(p,13),o(N,10),o(q,10),o(b,10),o(Ge,8))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[h([yt]),c,E]});let i=e;return i})(),_t={provide:b,useExisting:d(()=>je),multi:!0};function Te(i,e){return i==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function Ct(i){return i.split(":")[0]}var je=(()=>{let e=class e extends ${constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n=this._getOptionId(t),s=Te(n,t);this.setProperty("value",s)}registerOnChange(t){this.onChange=n=>{this.value=this._getOptionValue(n),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),t))return n;return null}_getOptionValue(t){let n=Ct(t);return this._optionMap.has(n)?this._optionMap.get(n):t}};e.\u0275fac=function(){let t;return function(s){return(t||(t=V(e)))(s||e)}}(),e.\u0275dir=u({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,s){n&1&&y("change",function(l){return s.onChange(l.target.value)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[h([_t]),c]});let i=e;return i})(),Jt=(()=>{let e=class e{constructor(t,n,s){this._element=t,this._renderer=n,this._select=s,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(Te(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(n){return new(n||e)(o(F),o(w),o(je,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})(),Vt={provide:b,useExisting:d(()=>Be),multi:!0};function ye(i,e){return i==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function Dt(i){return i.split(":")[0]}var Be=(()=>{let e=class e extends ${constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n;if(Array.isArray(t)){let s=t.map(a=>this._getOptionId(a));n=(a,l)=>{a._setSelected(s.indexOf(l.toString())>-1)}}else n=(s,a)=>{s._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(t){this.onChange=n=>{let s=[],a=n.selectedOptions;if(a!==void 0){let l=a;for(let f=0;f<l.length;f++){let P=l[f],X=this._getOptionValue(P.value);s.push(X)}}else{let l=n.options;for(let f=0;f<l.length;f++){let P=l[f];if(P.selected){let X=this._getOptionValue(P.value);s.push(X)}}}this.value=s,t(s)}}_registerOption(t){let n=(this._idCounter++).toString();return this._optionMap.set(n,t),n}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,t))return n;return null}_getOptionValue(t){let n=Dt(t);return this._optionMap.has(n)?this._optionMap.get(n)._value:t}};e.\u0275fac=function(){let t;return function(s){return(t||(t=V(e)))(s||e)}}(),e.\u0275dir=u({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,s){n&1&&y("change",function(l){return s.onChange(l.target)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[h([Vt]),c]});let i=e;return i})(),Kt=(()=>{let e=class e{constructor(t,n,s){this._element=t,this._renderer=n,this._select=s,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(ye(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(ye(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(n){return new(n||e)(o(F),o(w),o(Be,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})();var bt=(()=>{let e=class e{constructor(){this._validator=ue}ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):ue,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=u({type:e,features:[E]});let i=e;return i})();var At={provide:N,useExisting:d(()=>Mt),multi:!0};var Mt=(()=>{let e=class e extends bt{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=J,this.createValidator=t=>ze}enabled(t){return t}};e.\u0275fac=function(){let t;return function(s){return(t||(t=V(e)))(s||e)}}(),e.\u0275dir=u({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,s){n&2&&oe("required",s._enabled?"":null)},inputs:{required:"required"},features:[h([At]),c]});let i=e;return i})();var Ue=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=M({type:e}),e.\u0275inj=A({imports:[pt]});let i=e;return i})();var Qt=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:x,useValue:t.callSetDisabledState??Z}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=M({type:e}),e.\u0275inj=A({imports:[Ue]});let i=e;return i})(),ei=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:Ge,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:x,useValue:t.callSetDisabledState??Z}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=M({type:e}),e.\u0275inj=A({imports:[Ue]});let i=e;return i})();export{b as a,He as b,_e as c,zt as d,Zt as e,R as f,ct as g,ke as h,ft as i,Yt as j,mt as k,vt as l,je as m,Jt as n,Kt as o,Mt as p,Qt as q,ei as r};
