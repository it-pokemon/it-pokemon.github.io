import{A as St,B as kt,C as Ft,D as Ht,F as Lt,G as Vt,t as It}from"./chunk-IZBSCWIF.js";import{a as zt}from"./chunk-ASGLIXUQ.js";import{Da as _t,Ea as Tt,M as y,Ma as wt,Na as Dt,Oa as Ct,Ra as Ot,S as g,V as pt,W as ct,ba as c,ha as ft,ia as mt,ja as ht,ka as vt,la as yt,q as ut,ra as gt,s as R,va as xt,ya as bt}from"./chunk-LNADR3CJ.js";import{Aa as b,Ab as et,Ba as Y,Bb as it,Cb as nt,Db as ot,E as j,Ea as Z,Eb as M,F as D,Fb as at,G as U,Ha as K,Hb as h,Ib as _,Ja as L,Jb as rt,Kb as v,Kc as N,Lb as p,Ma as s,Mb as lt,Nb as d,Ob as u,Qb as E,Sb as A,Wa as f,Xa as X,Xb as T,Zb as st,ab as J,ca as q,db as C,fb as l,hb as tt,ib as V,ic as w,ja as $,kb as z,pb as O,qa as r,qb as m,sb as B,tc as dt,x as P,ya as G,yb as I,za as x,zb as S}from"./chunk-VR6UGIJK.js";var ee=y();var ie=y();var k=y();function Bt(t){return g(k,t)}var Rt=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=C({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-label"],decls:0,vars:0,template:function(n,i){},styles:[`[tuiLabel]{display:flex;gap:.25rem;flex-direction:column;font:var(--tui-font-text-s);color:var(--tui-text-primary)}[tuiLabel]:not([data-orientation=vertical]){flex-direction:row;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-m)}[tuiLabel]:has(tui-textfield),[tuiLabel]:has(tui-primitive-textfield),[tuiLabel]:has(tui-textarea){flex-direction:column!important;inline-size:auto!important;font:var(--tui-font-text-s)!important}[tuiLabel] input[type=checkbox],[tuiLabel] input[type=radio]{margin-inline-end:.5rem}[tuiLabel] input[type=checkbox][data-size=s],[tuiLabel] input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-top:.125rem}[tuiLabel] small{font:var(--tui-font-text-s)}[tuiLabel] [tuiTitle]{margin-top:.125rem}[tuiLabel] [tuiSubtitle]{color:var(--tui-text-secondary)}
`],encapsulation:2,changeDetection:0})}}return t})(),Et=(()=>{class t{constructor(){this.el=c(),this.nothing=ct(Rt),this.parent=r($(()=>k),{optional:!0})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=l({type:t,selectors:[["label","tuiLabel",""]],contentQueries:function(n,i,o){if(n&1&&p(o,k,5),n&2){let a;d(a=u())&&(i.textfield=a.first)}},hostVars:2,hostBindings:function(n,i){n&2&&O("for",i.el.htmlFor||(i.parent==null?null:i.parent.id))("data-orientation",i.textfield?"vertical":"horizontal")}})}}return t})();var At=(()=>{class t{constructor(){this.destroyRef=r(Z),this.zone=r(K),this.el=c(),this.tuiNativeValidator="Invalid"}validate(e){return this.control=e,D(0).pipe(bt(this.zone),xt(this.destroyRef)).subscribe(()=>this.handleValidation()),null}handleValidation(){this.el.setCustomValidity?.(this.control?.touched&&this.control?.invalid?this.tuiNativeValidator:"")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=l({type:t,selectors:[["","tuiNativeValidator",""]],hostBindings:function(n,i){n&1&&h("focusout",function(){return i.handleValidation()})},inputs:{tuiNativeValidator:"tuiNativeValidator"},features:[T([g(ut,t,!0)])]})}}return t})();var Wt=["vcr"],Pt=[[["input"]],[["select"]],[["label"]],"*",[["tui-icon"]]],jt=["input","select","label","*","tui-icon"],Ut=t=>({$implicit:t});function qt(t,H){if(t&1){let e=M();I(0,"button",6),h("click",function(){x(e);let i=_();return b(i.directive==null?null:i.directive.setValue(null))})("pointerdown.zoneless.prevent",function(){x(e);let i=_();return b(i.input==null||i.input.nativeElement==null?null:i.input.nativeElement.focus())}),E(1),S()}if(t&2){let e=_();m("iconStart",e.icons.close),f(),A(" ",e.clear()," ")}}function $t(t,H){if(t&1&&(it(0),E(1),nt()),t&2){let e=H.polymorpheusOutlet;f(),A(" ",e," ")}}function Gt(t,H){if(t&1&&et(0,"input",7),t&2){let e=_();m("value",e.computedFiller())}}var Q={appearance:"textfield",size:"l",cleaner:!0},F=y({appearance:s(Q.appearance),size:s(Q.size),cleaner:s(Q.cleaner)});var li=(()=>{class t{constructor(){this.options=r(F,{skipSelf:!0}),this.appearance=s(this.options.appearance()),this.size=s(this.options.size()),this.cleaner=s(this.options.cleaner())}set tuiTextfieldAppearance(e){this.appearance.set(e)}set tuiTextfieldSize(e){this.size.set(e)}set tuiTextfieldCleaner(e){this.cleaner.set(e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=l({type:t,selectors:[["","tuiTextfieldAppearance",""],["","tuiTextfieldSize",""],["","tuiTextfieldCleaner",""]],inputs:{tuiTextfieldAppearance:"tuiTextfieldAppearance",tuiTextfieldSize:"tuiTextfieldSize",tuiTextfieldCleaner:"tuiTextfieldCleaner"},features:[T([g(F,t)])]})}}return t})(),Yt=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=l({type:t,selectors:[["ng-template","tuiTextfieldDropdown",""]]})}}return t})(),Zt=(()=>{class t{constructor(){this.dropdown=kt(null)}set template(e){this.dropdown.set(e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=l({type:t,contentQueries:function(n,i,o){if(n&1&&p(o,Yt,5,X),n&2){let a;d(a=u())&&(i.template=a.first)}}})}}return t})(),Kt=(()=>{class t{constructor(){this.filler=s(""),this.autoId=Vt(),this.open=Ft(),this.focusedIn=Ot(c()),this.icons=r(_t),this.clear=N(r(Tt)),this.computedFiller=w(()=>{let e=this.directive?.value()||"",n=e+this.filler().slice(e.length);return n.length>e.length?n:""}),this.showFiller=w(()=>this.focused()&&!!this.computedFiller()&&(!!this.directive?.value()||!this.input?.nativeElement.placeholder)),this.stringify=String,this.focused=w(()=>this.open()||this.focusedIn()),this.options=r(F),this.el=c()}set fillerSetter(e){this.filler.set(e)}get id(){return this.input?.nativeElement.id||this.autoId}get size(){return this.options.size()}handleOption(e){this.directive?.setValue(e),this.open.set(!1)}get hasLabel(){return!!this.label?.nativeElement?.childNodes.length}onResize({contentRect:e}){this.el.style.setProperty("--t-side",pt(e.width))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=C({type:t,selectors:[["tui-textfield"]],contentQueries:function(n,i,o){if(n&1&&(p(o,Et,5,L),p(o,R,5),p(o,Nt,7),p(o,Nt,7,L)),n&2){let a;d(a=u())&&(i.label=a.first),d(a=u())&&(i.control=a.first),d(a=u())&&(i.directive=a.first),d(a=u())&&(i.input=a.first)}},viewQuery:function(n,i){if(n&1&&lt(Wt,7,J),n&2){let o;d(o=u())&&(i.vcr=o.first)}},hostVars:7,hostBindings:function(n,i){n&2&&(O("data-size",i.options.size()),B("_with-label",i.hasLabel)("_with-template",i.content)("_disabled",i.input==null?null:i.input.nativeElement.disabled))},inputs:{stringify:"stringify",content:"content",fillerSetter:[0,"filler","fillerSetter"]},features:[T([Dt({size:"xs",appearance:"icon"}),Bt(t)]),V([Ht,St,Lt,Zt,wt])],ngContentSelectors:jt,decls:12,vars:6,consts:[["vcr",""],[1,"t-content",3,"mousedown.prevent","waResizeObserver"],["appearance","icon","size","xs","tabindex","-1","tuiIconButton","","type","button","class","t-clear",3,"iconStart","click","pointerdown.zoneless.prevent",4,"ngIf"],[1,"t-template"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["aria-hidden","true","disabled","","class","t-filler",3,"value",4,"ngIf"],["appearance","icon","size","xs","tabindex","-1","tuiIconButton","","type","button",1,"t-clear",3,"click","pointerdown.zoneless.prevent","iconStart"],["aria-hidden","true","disabled","",1,"t-filler",3,"value"]],template:function(n,i){if(n&1){let o=M();rt(Pt),v(0),v(1,1),v(2,2),I(3,"span",1),h("mousedown.prevent",function(){return x(o),b(i.input==null||i.input.nativeElement==null?null:i.input.nativeElement.focus())})("waResizeObserver",function(W){return x(o),b(W[0]&&i.onResize(W[0]))}),v(4,3),z(5,qt,2,2,"button",2),ot(6,null,0),v(8,4),S(),I(9,"span",3),z(10,$t,2,1,"ng-container",4),S(),z(11,Gt,1,1,"input",5)}n&2&&(f(5),m("ngIf",i.options.cleaner()),f(5),m("polymorpheusOutlet",i.content)("polymorpheusOutletContext",st(4,Ut,i.control==null?null:i.control.value)),f(),m("ngIf",i.showFiller()))},dependencies:[dt,It,Ct,zt],styles:[`tui-textfield{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: var(--tui-height-l);--t-padding: var(--tui-padding-l);position:relative;display:flex;align-items:center;pointer-events:none;cursor:pointer;block-size:var(--t-height);color:var(--tui-text-tertiary);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-font-text-m);box-sizing:border-box;gap:.25rem}tui-textfield[style*="--t-icon-start:"]{--t-left: 2.25rem}tui-textfield[style*="--t-icon-end:"]{--t-right: 2.25rem}tui-textfield input,tui-textfield select{font:var(--tui-font-text-m)}tui-textfield[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);border-radius:var(--tui-radius-m);gap:0;font:var(--tui-font-text-s)}tui-textfield[data-size=s][style*="--t-icon-start:"]{--t-left: 1.25rem}tui-textfield[data-size=s][style*="--t-icon-end:"]{--t-right: 1.25rem}tui-textfield[data-size=s]:before{margin:0 .5rem 0 -.125rem;font-size:1rem}tui-textfield[data-size=s]:after{margin:0 -.175rem 0 .575rem;font-size:1rem}tui-textfield[data-size=s] input,tui-textfield[data-size=s] select{font:var(--tui-font-text-s)}tui-textfield[data-size=s] .t-content{margin-inline-end:-.325rem}tui-textfield[data-size=m]{--t-height: var(--tui-height-m);--t-padding: var(--tui-padding-m);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=m][style*="--t-icon-start:"]{--t-left: 1.75rem}tui-textfield[data-size=m][style*="--t-icon-end:"]{--t-right: 1.75rem}tui-textfield[data-size=m]:before{margin:0 .125rem 0 -.125rem}tui-textfield[data-size=m]:after{margin:0 -.125rem 0 .25rem}tui-textfield[data-size=m] input,tui-textfield[data-size=m] select{font:var(--tui-font-text-s)}tui-textfield[data-size=m] .t-content{margin-inline-end:-.125rem}tui-textfield:hover{color:var(--tui-text-secondary)}tui-textfield:hover:has(input:read-only),tui-textfield:hover:has(select[data-mode~=readonly]){color:var(--tui-text-tertiary)}tui-textfield:before{z-index:1;margin-inline-end:.5rem}tui-textfield:has(:disabled:not(.t-filler,button,option)):before,tui-textfield:has(:disabled:not(.t-filler,button,option)):after,tui-textfield:has(:disabled:not(.t-filler,button,option)) .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield._disabled:before,tui-textfield._disabled:after,tui-textfield._disabled .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield:has(label:not(:empty)) .t-template,tui-textfield:has(label:not(:empty)) input:defined,tui-textfield:has(label:not(:empty)) select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield:has(label:not(:empty)) .t-template::placeholder,tui-textfield:has(label:not(:empty)) input:defined::placeholder,tui-textfield:has(label:not(:empty)) select:defined::placeholder,tui-textfield:has(label:not(:empty)) .t-template._empty,tui-textfield:has(label:not(:empty)) input:defined._empty,tui-textfield:has(label:not(:empty)) select:defined._empty{color:transparent}tui-textfield._with-label .t-template,tui-textfield._with-label input:defined,tui-textfield._with-label select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield._with-label .t-template::placeholder,tui-textfield._with-label input:defined::placeholder,tui-textfield._with-label select:defined::placeholder,tui-textfield._with-label .t-template._empty,tui-textfield._with-label input:defined._empty,tui-textfield._with-label select:defined._empty{color:transparent}tui-textfield .t-template,tui-textfield input:defined,tui-textfield select:defined{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;-webkit-appearance:none;appearance:none;box-sizing:border-box;border-radius:inherit;padding:inherit;border:none;text-indent:var(--t-left, 0);padding-inline-end:calc(var(--t-right, var(--t-0, 0rem)) + var(--t-side) + var(--t-padding))}tui-textfield .t-template{display:flex;align-items:center;color:var(--tui-text-primary)}tui-textfield._with-template input,tui-textfield._with-template select{color:transparent!important}tui-textfield input:defined,tui-textfield select:defined{pointer-events:auto;background:transparent}tui-textfield input:defined:read-only~.t-filler,tui-textfield select:defined:read-only~.t-filler{display:none}tui-textfield input:defined:disabled~label,tui-textfield select:defined:disabled~label,tui-textfield input:defined:disabled~.t-content,tui-textfield select:defined:disabled~.t-content{opacity:var(--tui-disabled-opacity)}tui-textfield input:defined:disabled~label>tui-icon,tui-textfield select:defined:disabled~label>tui-icon,tui-textfield input:defined:disabled~.t-content>tui-icon,tui-textfield select:defined:disabled~.t-content>tui-icon{display:none}tui-textfield input:defined:-webkit-autofill~label,tui-textfield select:defined:-webkit-autofill~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown)~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown)~label{font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label{color:var(--tui-text-negative)}tui-textfield input:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear{display:flex}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]._empty,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]~label,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}@supports (-webkit-touch-callout: none){tui-textfield input:defined._ios-fix,tui-textfield select:defined._ios-fix{position:fixed;left:1000rem}}tui-textfield label:not([data-orientation=vertical]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;flex:1;font-size:inherit}tui-textfield label:defined,tui-textfield input:defined::placeholder,tui-textfield select:defined._empty{color:var(--tui-text-secondary)}tui-textfield select:not([data-mode~=readonly]){cursor:pointer}tui-textfield button,tui-textfield a{pointer-events:auto}tui-textfield .t-content{display:flex;align-items:center;gap:inherit;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield .t-content>tui-icon{pointer-events:auto}tui-textfield .t-clear{display:none;pointer-events:auto}tui-textfield .t-filler:defined{pointer-events:none;background:none;color:var(--tui-text-tertiary);opacity:1}tui-textfield [tuiFluidTypography]{font-weight:700}
`],encapsulation:2,changeDetection:0})}}return t})(),Xt=(()=>{class t{constructor(){this.focused=s(null),this.control=r(R,{optional:!0}),this.a=mt(r(F).appearance),this.s=ht(null),this.m=yt(this.mode),this.f=vt(w(()=>this.focused()??this.textfield.focused())),this.el=c(),this.textfield=r(Kt),this.readOnly=!1,this.invalid=null,this.value=N(U(j(this.el,"input"),D(0).pipe(q(()=>gt(this.control)))).pipe(P(()=>this.el.value)),{initialValue:this.el.value})}set focusedSetter(e){this.focused.set(e)}set stateSetter(e){this.s.set(e)}get mode(){return this.readOnly?"readonly":this.invalid===!1?"valid":this.invalid?"invalid":null}ngOnChanges(){this.m.set(this.mode)}setValue(e){this.el.focus(),this.el.select(),e==null?this.el.ownerDocument.execCommand("delete"):this.el.ownerDocument.execCommand("insertText",!1,this.textfield.stringify(e))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=l({type:t,inputs:{readOnly:"readOnly",invalid:"invalid",focusedSetter:[0,"focused","focusedSetter"],stateSetter:[0,"state","stateSetter"]},standalone:!1,features:[G]})}}return t})(),Nt=(()=>{class t extends Xt{static{this.\u0275fac=(()=>{let e;return function(i){return(e||(e=Y(t)))(i||t)}})()}static{this.\u0275dir=l({type:t,selectors:[["input","tuiTextfield","",3,"tuiInputCard","",3,"tuiInputExpire","",3,"tuiInputCVC",""]],hostVars:4,hostBindings:function(n,i){n&1&&h("input",function(){return 0})("focusin",function(){return 0})("focusout",function(){return 0}),n&2&&(at("id",i.textfield.id)("readOnly",i.readOnly),B("_empty",i.el.value===""))},features:[V([At,ft]),tt]})}}return t})();export{F as a,li as b,Kt as c,Nt as d};
