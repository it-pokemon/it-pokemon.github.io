import{a as Dt}from"./chunk-EMMFSUAH.js";import{A as Yt,B as Zt,b as wt,e as Ut,h as et,k as Wt,m as Gt,o as $t,q as it,s as Qt,t as U,y as W,z as qt}from"./chunk-6JDZXLNM.js";import{A as It,Ea as Bt,Ga as Rt,H as p,J as V,Ka as Lt,La as jt,N as E,Oa as Vt,Q as N,R as tt,T as At,X as S,_ as M,aa as Ft,ga as Ht,ma as Et,va as Nt}from"./chunk-TR2SAYUZ.js";import{Aa as k,Ab as _,Bb as y,Cb as _t,Db as Z,Fb as J,Gb as C,Hb as m,Hc as X,Ib as L,Ic as St,Jb as j,Lb as yt,Mb as Ct,Nb as xt,O as ut,Pb as x,Pc as Mt,Q as lt,Qb as zt,R as dt,Ra as vt,Rb as A,Rc as Pt,Sb as Tt,Ta as bt,Tb as Ot,Ua as B,Ub as kt,Va as r,Vb as f,W as pt,Z as mt,a as T,aa as ft,b as $,cb as l,eb as d,gb as w,hb as R,ja as P,jb as u,l as Q,lc as K,m as rt,oa as gt,ob as h,p as st,pa as c,pb as o,q as ct,qb as I,qc as F,rb as D,rc as H,t as g,xa as ht,xb as v,ya as q,yb as O,za as Y,zb as b}from"./chunk-MEKU6LLM.js";var ae=(()=>{class t{constructor(e){this.httpService=e,this.apiUrl="api/cards",this.cards=[]}addCard(e){let i={id:Date.now().toString(),name:e.name||""};return this.cards.push(i),g(i)}deleteCard(e){let i=this.cards.findIndex(n=>n.id===e);return i!==-1&&this.cards.splice(i,1),g(void 0)}getCardById(e){return g(this.cards.find(i=>i.id===e))}getCards(){return g(this.cards)}updateCard(e,i){let n=this.cards.findIndex(s=>s.id===e);return n!==-1?(this.cards[n]=T(T({},this.cards[n]),i),g(this.cards[n])):g(void 0)}static{this.\u0275fac=function(i){return new(i||t)(gt(Dt))}}static{this.\u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var se=["*"];function ce(t,a){if(t&1&&b(0,"img",2),t&2){let e=m();o("src",e.value,vt)}}function ue(t,a){if(t&1&&(_(0),x(1),y()),t&2){let e=m();r(),zt(e.value)}}var Jt={appearance:"",round:!0,size:"l"},nt=p(Jt);function Je(t){return E(nt,t,Jt)}var Ke=(()=>{class t{constructor(){this.options=c(nt),this.size=this.options.size,this.round=this.options.round}get value(){return this.src||""}get svg(){return V(this.value)&&this.value.endsWith(".svg")}get type(){return this.value&&!V(this.value)?"img":this.value.startsWith("@tui.")?"icon":this.value.length>0&&this.value.length<3?"text":this.value.length?"img":"content"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=l({type:t,selectors:[["tui-avatar"],["button","tuiAvatar",""],["a","tuiAvatar",""]],hostVars:6,hostBindings:function(i,n){i&2&&(h("data-size",n.size)("data-type",n.type),D("_round",n.round)("_svg",n.svg))},inputs:{size:"size",round:"round",src:"src"},features:[f([Ft(nt)]),R([Ht,{directive:Bt,inputs:["iconStart","src"]}])],ngContentSelectors:se,decls:3,vars:2,consts:[["alt","","loading","lazy",3,"src",4,"ngIf"],[4,"ngIf"],["alt","","loading","lazy",3,"src"]],template:function(i,n){i&1&&(L(),u(0,ce,1,1,"img",0)(1,ue,2,1,"ng-container",1),j(2)),i&2&&(o("ngIf",n.type==="img"),r(),o("ngIf",n.type==="text"))},dependencies:[H],styles:['[_nghost-%COMP%]{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}[data-size=xs][_nghost-%COMP%]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}[data-size=xs][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-size:.5625rem}[data-size=s][_nghost-%COMP%]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}[data-size=s][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-xs);font-weight:700}[data-size=m][_nghost-%COMP%]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}[data-size=m][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-weight:700}[data-size=l][_nghost-%COMP%]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}[data-size=l][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-l);font-weight:700}[data-size=xl][_nghost-%COMP%]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}[data-size=xl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-4)}[data-size=xxl][_nghost-%COMP%]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}[data-size=xxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-size=xxxl][_nghost-%COMP%]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}[data-size=xxxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-type][_nghost-%COMP%]:before{display:none}[data-type=img][_nghost-%COMP%]:not(._svg){background:transparent}[data-type=icon][_nghost-%COMP%]:before{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);content:"";display:block;inline-size:60%;block-size:60%}._round[_nghost-%COMP%]{--t-radius: calc(var(--t-size) / 2)}._svg[_nghost-%COMP%]   img[_ngcontent-%COMP%]{padding:20%;object-fit:contain}[_nghost-%COMP%]     img, [_nghost-%COMP%]     picture, [_nghost-%COMP%]     video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}'],changeDetection:0})}}return t})();var[Kt,ei]=M({size:"h5"});var Xt=(()=>{class t extends Qt{constructor(){super(...arguments),this.service=c(W),this.open$=new Q,this.options={},this.open=!1,this.openChange=this.open$.pipe(lt(),Et(()=>this.service.open(this,this.options).pipe(ut(),dt(!1))),mt())}ngOnChanges(){this.open$.next(this.open)}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=k(t)))(n||t)}})()}static{this.\u0275dir=d({type:t,standalone:!1,features:[w,ht]})}}return t})();var te=(()=>{class t{constructor(){this.doc=c(K),this.el=S(),this.activeElement=null,this.initialized=!1,Promise.resolve().then(()=>{this.initialized=!0,this.activeElement=Lt(this.doc),this.el.focus()})}ngOnDestroy(){jt(this.doc),Promise.resolve().then(()=>{At(this.activeElement)&&this.activeElement.focus()})}onFocusIn(e){let i=this.el.firstElementChild;!tt(this.el,e)&&i&&Vt({initial:i,root:this.el})?.focus()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=d({type:t,selectors:[["","tuiFocusTrap",""]],hostAttrs:["tabIndex","0"],hostBindings:function(i,n){i&1&&C("focusin.zoneless",function(G){return n.initialized&&n.onFocusIn(G.target)},!1,bt)}})}}return t})();function le(t,a){t&1&&_t(0)}function de(t,a){if(t&1&&(v(0,"section",2),u(1,le,1,0,"ng-container",3),b(2,"tui-scroll-controls",4),O()),t&2){let e=a.$implicit;o("@tuiHost",void 0),h("aria-labelledby",e.id),r(),o("polymorpheusOutlet",e.component)("polymorpheusOutletContext",e)}}var ot=p(new rt([])),pe={appearance:"",size:"m",required:!1,closeable:!0,dismissible:!0,label:"",header:"",data:void 0},Yi=p(st),Zi=p(pe);var Ji=new Error("Required dialog was dismissed");var Ki=(()=>{class t{constructor(){this.el=S(),this.dialogs=St(c(ot),{initialValue:[]})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=l({type:t,selectors:[["tui-dialogs"]],hostBindings:function(i,n){i&1&&C("keydown.zoneless",function(){return n.el.scrollTop=n.el.scrollHeight/2})},decls:2,vars:3,consts:[[1,"t-overlay"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiScrollRef","","class","t-dialog",4,"ngFor","ngForOf"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiScrollRef","",1,"t-dialog"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-scrollbars"]],template:function(i,n){i&1&&(b(0,"div",0),u(1,de,3,4,"section",1)),i&2&&(D("t-overlay_visible",n.dialogs().length),r(),o("ngForOf",n.dialogs()))},dependencies:[F,U,te,Gt,$t],styles:['[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:has(section){pointer-events:auto;overflow:auto}[_nghost-%COMP%]:before{content:"";display:block;block-size:1000%}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-dialog[_ngcontent-%COMP%]{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;transition-timing-function:ease-out}.t-dialog[_ngcontent-%COMP%]:last-child{pointer-events:auto;filter:none}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}'],data:{animation:[Ut]}})}}return t})();var me=["stops"];function fe(t,a){if(t&1&&b(0,"div",8,0),t&2){let e=a.$implicit;I("margin-top",e)}}function ge(t,a){t&1&&b(0,"div",9)}function he(t,a){if(t&1&&(_(0),x(1),y()),t&2){let e=a.polymorpheusOutlet;r(),A(" ",e," ")}}function ve(t,a){if(t&1&&(v(0,"h2",10),u(1,he,2,1,"ng-container",7),O()),t&2){let e=m();o("id",e.context.id),r(),o("polymorpheusOutlet",e.context.label)("polymorpheusOutletContext",e.context)}}function be(t,a){if(t&1&&(_(0),x(1),y()),t&2){let e=a.polymorpheusOutlet;r(),A(" ",e," ")}}function _e(){return this.context.closeable===!0}var ye=(()=>{class t{constructor(){this.stops=It,this.el=S(),this.pointers=0,this.slideInTop={value:"",params:{start:"100vh",duration:Wt(c(Nt))}},this.context=it()}ngAfterViewInit(){this.el.scrollTop=[...this.stops.map(e=>e.nativeElement.offsetTop-this.context.offset),this.el.clientHeight??1/0][this.context.initial]??0}close(){this.context.$implicit.complete()}onPointerChange(e){this.pointers=Math.max(this.pointers+e,0),!this.pointers&&this.el.scrollTop<=0&&this.close()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=l({type:t,selectors:[["tui-sheet-dialog"]],viewQuery:function(i,n){if(i&1&&yt(me,5),i&2){let s;Ct(s=xt())&&(n.stops=s)}},hostVars:5,hostBindings:function(i,n){i&1&&C("touchstart.passive.zoneless",function(){return n.onPointerChange(1)},!1,B)("touchend.zoneless",function(){return n.onPointerChange(-1)},!1,B)("touchcancel.zoneless",function(){return n.onPointerChange(-1)},!1,B)("scroll.zoneless",function(){return n.onPointerChange(0)})("click.self",function(){return n.close()}),i&2&&(J("@tuiSlideInTop",n.slideInTop),I("--tui-offset",n.context.offset,"px"),D("_closeable",n.context.closeable===!0))},decls:7,vars:5,consts:[["stops",""],[1,"t-stops"],["class","t-stop",3,"margin-top",4,"ngFor","ngForOf"],[1,"t-sheet"],["class","t-top",4,"ngIf"],["class","t-heading",3,"id",4,"ngIf"],[1,"t-content"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-stop"],[1,"t-top"],[1,"t-heading",3,"id"]],template:function(i,n){i&1&&(v(0,"div",1),u(1,fe,2,2,"div",2),O(),v(2,"div",3),u(3,ge,1,0,"div",4)(4,ve,2,3,"h2",5),v(5,"div",6),u(6,be,2,1,"ng-container",7),O()()),i&2&&(r(),o("ngForOf",n.context.stops),r(2),o("ngIf",n.context.bar),r(),o("ngIf",n.context.label),r(2),o("polymorpheusOutlet",n.context.content)("polymorpheusOutletContext",n.context))},dependencies:[F,H,U],styles:['[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;display:flex;inline-size:100%;max-inline-size:40rem;block-size:calc(100% - var(--tui-offset));flex-direction:column;font:var(--tui-font-text-m);overflow-y:scroll;scroll-snap-type:y mandatory;margin:var(--tui-offset) auto 0;border-radius:.75rem .75rem 0 0}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";z-index:-1}._closeable[_nghost-%COMP%]{display:block}._closeable[_nghost-%COMP%]   .t-stops[_ngcontent-%COMP%]{display:flex}.t-stops[_ngcontent-%COMP%]{display:none;block-size:100%;scroll-snap-stop:always;scroll-snap-align:start;pointer-events:none}.t-stop[_ngcontent-%COMP%]{position:relative;top:env(safe-area-inset-bottom);scroll-snap-stop:normal;scroll-snap-align:start;block-size:1rem;inline-size:1rem}.t-sheet[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;inline-size:100%;box-shadow:var(--tui-shadow-small);border-radius:inherit;padding:0 1rem;margin-block-start:auto;background:var(--tui-background-elevation-1);box-sizing:border-box;scroll-snap-stop:always;scroll-snap-align:start}.t-sheet[_ngcontent-%COMP%]::-webkit-scrollbar, .t-sheet[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-top[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;block-size:1.5rem;margin:0 -1rem;border-radius:inherit;background:var(--tui-background-elevation-1)}.t-top[_ngcontent-%COMP%]:after{content:"";position:absolute;top:.5rem;left:50%;inline-size:2rem;block-size:.25rem;transform:translate(-50%);background:var(--tui-border-normal);border-radius:1rem}.t-heading[_ngcontent-%COMP%]{position:sticky;top:1.5rem;z-index:1;margin:0 -1rem;padding:.75rem 1rem;font:var(--tui-font-heading-6);background:var(--tui-background-elevation-1)}.t-heading[_ngcontent-%COMP%]:first-child{top:0;border-radius:inherit}.t-heading[_ngcontent-%COMP%]:last-child{padding-block-end:1.5rem}.t-content[_ngcontent-%COMP%]{position:relative;isolation:isolate;padding-block-end:calc(1.5rem + env(safe-area-inset-bottom));border-radius:inherit}.t-content[_ngcontent-%COMP%]:after{content:"";position:relative;top:calc(1.5rem + env(safe-area-inset-bottom));z-index:-1;display:block;scroll-snap-stop:always;scroll-snap-align:end;border-image:conic-gradient(var(--tui-background-elevation-1) 0 0) fill 0/0/0 100vh 100vh}'],data:{animation:[et]},changeDetection:0})}}return ct([wt(_e)],t.prototype,"close",null),t})(),Ce={label:"",stops:[],initial:0,offset:16,closeable:!0,data:void 0,bar:!0},xe=p(Ce);var ze="#404040",Te=(()=>{class t extends W{constructor(){super(...arguments),this.theme=c(Yt),this.initial=this.theme.color,this.$=this.items$.pipe(ft([]),pt(),X()).subscribe(([e,i])=>{!e.length&&i.length&&(this.initial=this.theme.color,this.theme.color=ze),!i.length&&e.length&&(this.theme.color=this.initial)})}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=k(t)))(n||t)}})()}static{this.\u0275prov=P({token:t,factory:()=>new t(ot,ye,c(xe)),providedIn:"root"})}}return t})(),ee=(()=>{class t extends Xt{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=k(t)))(n||t)}})()}static{this.\u0275dir=d({type:t,selectors:[["ng-template","tuiSheetDialog",""]],inputs:{options:[0,"tuiSheetDialogOptions","options"],open:[0,"tuiSheetDialog","open"]},outputs:{openChange:"tuiSheetDialogChange"},features:[f([qt(Te)]),w]})}}return t})();var Oe={info:"@tui.info",positive:"@tui.circle-check",negative:"@tui.circle-x",warning:"@tui.circle-alert",neutral:"@tui.info",success:"@tui.circle-check",error:"@tui.circle-x"},ke={appearance:"info",icon:t=>Oe[t]??"",size:"l"},[kn,ie]=M(ke);var De=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=l({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-title"],decls:0,vars:0,template:function(i,n){},styles:[`[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiSubtitle]{font:var(--tui-font-text-ui-s)}
`],encapsulation:2,changeDetection:0})}}return t})(),Mn=(()=>{class t{constructor(){this.nothing=N(De),this.size=""}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=d({type:t,selectors:[["","tuiTitle",""]],hostAttrs:["tuiTitle",""],hostVars:1,hostBindings:function(i,n){i&2&&h("data-size",n.size||null)},inputs:{size:[0,"tuiTitle","size"]}})}}return t})();var[ne,In]=M({size:"s"});var Se={showIcons:!0,size:"m",icon:"@tui.check",appearance:t=>t.checked?"primary":"secondary"},oe=p(Se);var Me={s:"xxxs",m:"xs",l:"s"},Pe=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=l({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-form"],decls:0,vars:0,template:function(i,n){},styles:[`[tuiForm]{display:flex;flex-direction:column;align-items:stretch}[tuiForm][data-size=s]{gap:.75rem;font:var(--tui-font-text-s)}[tuiForm][data-size=s] tui-error:not(.tui-space-top-none){margin-top:-.75rem}[tuiForm][data-size=s] [tuiHeader]{padding-bottom:.5rem}[tuiForm][data-size=s] [tuiHeader] [tuiSubtitle]{font:var(--tui-font-text-ui-s)}[tuiForm][data-size=m]{gap:1rem;font:var(--tui-font-text-s)}[tuiForm][data-size=m] tui-error:not(.tui-space-top-none){margin-top:-1rem}[tuiForm][data-size=l]{gap:1.25rem;font:var(--tui-font-text-m)}[tuiForm][data-size=l] tui-error:not(.tui-space-top-none){margin-top:-1.25rem}[tuiForm] [tuiHeader]{padding-bottom:.25rem}[tuiForm] footer{display:flex;gap:.75rem;margin-top:.25rem}[tuiForm] [tuiLabel]:not([data-orientation=vertical]){font:inherit}[tuiForm][data-size=s] [tuiLabel]:not([data-orientation=vertical]) [tuiTooltip],[tuiForm][data-size=m] [tuiLabel]:not([data-orientation=vertical]) [tuiTooltip]{block-size:1.25rem}
`],encapsulation:2,changeDetection:0})}}return t})(),we=(()=>{class t{constructor(){this.nothing=N(Pe),this.size="l"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=d({type:t,selectors:[["","tuiForm",""]],hostAttrs:["tuiForm",""],hostVars:1,hostBindings:function(i,n){i&2&&h("data-size",n.size)},inputs:{size:[0,"tuiForm","size"]},features:[f([Rt(t),ie(t),at(Kt,e=>Me[e]),at(oe,e=>e==="l"?"m":"s"),at(ne,e=>e==="l"?"m":"s")]),R([{directive:Zt,inputs:["tuiTextfieldSize","tuiForm","tuiTextfieldAppearance","tuiTextfieldAppearance","tuiTextfieldCleaner","tuiTextfieldCleaner"]}])]})}}return t})();function at(t,a){return{provide:t,useFactory:()=>$(T({},c(t,{skipSelf:!0})),{size:a(c(we).size)})}}var Ie=["*"];function Ae(t,a){t&1&&x(0," 123 ")}function Fe(t,a){if(t&1){let e=Z();_(0),j(1),u(2,Ae,1,0,"ng-template",1),kt("tuiSheetDialogChange",function(n){q(e);let s=m();return Ot(s.open,n)||(s.open=n),Y(n)}),y()}if(t&2){let e=m();r(2),Tt("tuiSheetDialog",e.open)}}var ao=(()=>{class t{onClick(e){e.preventDefault(),e.stopPropagation(),this.open=!0}constructor(){this.open=!1}onAdd(){this.open=!this.open}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-open-add-card-modal-feature"]],hostBindings:function(i,n){i&1&&C("click",function(G){return n.onClick(G)})},features:[f([Pt("openAddCardModalFeature")])],ngContentSelectors:Ie,decls:1,vars:1,consts:[[4,"transloco","translocoRead"],[3,"tuiSheetDialogChange","tuiSheetDialog"]],template:function(i,n){i&1&&(L(),u(0,Fe,3,1,"ng-container",0)),i&2&&o("translocoRead","openAddCardModalFeature")},dependencies:[Mt,ee],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}}return t})();export{Je as a,Ke as b,Ki as c,Te as d,ee as e,kn as f,Mn as g,we as h,ae as i,ao as j};
