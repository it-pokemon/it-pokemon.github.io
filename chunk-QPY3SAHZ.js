import{a as At}from"./chunk-EMMFSUAH.js";import{A as ue,B as X,C as le,D as de,b as Ht,e as ne,h as rt,k as oe,m as ae,o as re,q as $,s as se,t as J,y as K,z as ce}from"./chunk-6JDZXLNM.js";import{A as Gt,Ea as Jt,Ga as Kt,H as y,Ha as Xt,J as Z,Ka as te,La as ee,N as W,Oa as ie,Q as G,R as at,T as $t,X as A,_ as F,aa as Qt,ga as qt,ma as Yt,o as Et,q as Nt,s as Bt,t as Rt,u as Lt,v as jt,va as Zt,w as Vt,x as Ut,z as Wt}from"./chunk-TR2SAYUZ.js";import{Aa as D,Ab as g,Bb as h,Cb as Ot,Db as j,Fa as xt,Fb as it,Gb as v,Hb as b,Hc as ot,Ib as P,Ic as Ft,Jb as S,Lb as kt,Mb as Dt,Nb as Mt,O as ft,Pb as O,Pc as w,Q as gt,Qb as Pt,R as ht,Ra as zt,Rb as k,Rc as I,Sb as St,Ta as Tt,Tb as wt,Ua as Q,Ub as It,Va as a,Vb as d,W as vt,Z as bt,Za as q,a as x,aa as _t,b as tt,cb as u,eb as p,gb as R,hb as Y,ja as E,jb as s,l as et,lc as nt,m as dt,oa as yt,ob as T,p as pt,pa as l,pb as o,q as mt,qb as L,qc as V,rb as M,rc as U,t as z,xa as Ct,xb as m,ya as N,yb as _,za as B,zb as f}from"./chunk-MEKU6LLM.js";var pe=(()=>{class t{constructor(e){this.httpService=e,this.apiUrl="api/cards",this.cards=[]}addCard(e){let i={id:Date.now().toString(),name:e.name||""};return this.cards.push(i),z(i)}deleteCard(e){let i=this.cards.findIndex(n=>n.id===e);return i!==-1&&this.cards.splice(i,1),z(void 0)}getCardById(e){return z(this.cards.find(i=>i.id===e))}getCards(){return z(this.cards)}updateCard(e,i){let n=this.cards.findIndex(c=>c.id===e);return n!==-1?(this.cards[n]=x(x({},this.cards[n]),i),z(this.cards[n])):z(void 0)}static{this.\u0275fac=function(i){return new(i||t)(yt(At))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Te=["*"];function Oe(t,r){if(t&1&&f(0,"img",2),t&2){let e=b();o("src",e.value,zt)}}function ke(t,r){if(t&1&&(g(0),O(1),h()),t&2){let e=b();a(),Pt(e.value)}}var me={appearance:"",round:!0,size:"l"},st=y(me);function hi(t){return W(st,t,me)}var vi=(()=>{class t{constructor(){this.options=l(st),this.size=this.options.size,this.round=this.options.round}get value(){return this.src||""}get svg(){return Z(this.value)&&this.value.endsWith(".svg")}get type(){return this.value&&!Z(this.value)?"img":this.value.startsWith("@tui.")?"icon":this.value.length>0&&this.value.length<3?"text":this.value.length?"img":"content"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["tui-avatar"],["button","tuiAvatar",""],["a","tuiAvatar",""]],hostVars:6,hostBindings:function(i,n){i&2&&(T("data-size",n.size)("data-type",n.type),M("_round",n.round)("_svg",n.svg))},inputs:{size:"size",round:"round",src:"src"},features:[d([Qt(st)]),Y([qt,{directive:Jt,inputs:["iconStart","src"]}])],ngContentSelectors:Te,decls:3,vars:2,consts:[["alt","","loading","lazy",3,"src",4,"ngIf"],[4,"ngIf"],["alt","","loading","lazy",3,"src"]],template:function(i,n){i&1&&(P(),s(0,Oe,1,1,"img",0)(1,ke,2,1,"ng-container",1),S(2)),i&2&&(o("ngIf",n.type==="img"),a(),o("ngIf",n.type==="text"))},dependencies:[U],styles:['[_nghost-%COMP%]{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}[data-size=xs][_nghost-%COMP%]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}[data-size=xs][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-size:.5625rem}[data-size=s][_nghost-%COMP%]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}[data-size=s][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-xs);font-weight:700}[data-size=m][_nghost-%COMP%]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}[data-size=m][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-weight:700}[data-size=l][_nghost-%COMP%]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}[data-size=l][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-l);font-weight:700}[data-size=xl][_nghost-%COMP%]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}[data-size=xl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-4)}[data-size=xxl][_nghost-%COMP%]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}[data-size=xxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-size=xxxl][_nghost-%COMP%]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}[data-size=xxxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-type][_nghost-%COMP%]:before{display:none}[data-type=img][_nghost-%COMP%]:not(._svg){background:transparent}[data-type=icon][_nghost-%COMP%]:before{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);content:"";display:block;inline-size:60%;block-size:60%}._round[_nghost-%COMP%]{--t-radius: calc(var(--t-size) / 2)}._svg[_nghost-%COMP%]   img[_ngcontent-%COMP%]{padding:20%;object-fit:contain}[_nghost-%COMP%]     img, [_nghost-%COMP%]     picture, [_nghost-%COMP%]     video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}'],changeDetection:0})}}return t})();var[fe,yi]=F({size:"h5"});var ge=(()=>{class t extends se{constructor(){super(...arguments),this.service=l(K),this.open$=new et,this.options={},this.open=!1,this.openChange=this.open$.pipe(gt(),Yt(()=>this.service.open(this,this.options).pipe(ft(),ht(!1))),bt())}ngOnChanges(){this.open$.next(this.open)}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})()}static{this.\u0275dir=p({type:t,standalone:!1,features:[R,Ct]})}}return t})();var he=(()=>{class t{constructor(){this.doc=l(nt),this.el=A(),this.activeElement=null,this.initialized=!1,Promise.resolve().then(()=>{this.initialized=!0,this.activeElement=te(this.doc),this.el.focus()})}ngOnDestroy(){ee(this.doc),Promise.resolve().then(()=>{$t(this.activeElement)&&this.activeElement.focus()})}onFocusIn(e){let i=this.el.firstElementChild;!at(this.el,e)&&i&&ie({initial:i,root:this.el})?.focus()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=p({type:t,selectors:[["","tuiFocusTrap",""]],hostAttrs:["tabIndex","0"],hostBindings:function(i,n){i&1&&v("focusin.zoneless",function(H){return n.initialized&&n.onFocusIn(H.target)},!1,Tt)}})}}return t})();function De(t,r){t&1&&Ot(0)}function Me(t,r){if(t&1&&(m(0,"section",2),s(1,De,1,0,"ng-container",3),f(2,"tui-scroll-controls",4),_()),t&2){let e=r.$implicit;o("@tuiHost",void 0),T("aria-labelledby",e.id),a(),o("polymorpheusOutlet",e.component)("polymorpheusOutletContext",e)}}var ct=y(new dt([])),Pe={appearance:"",size:"m",required:!1,closeable:!0,dismissible:!0,label:"",header:"",data:void 0},gn=y(pt),hn=y(Pe);var vn=new Error("Required dialog was dismissed");var bn=(()=>{class t{constructor(){this.el=A(),this.dialogs=Ft(l(ct),{initialValue:[]})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["tui-dialogs"]],hostBindings:function(i,n){i&1&&v("keydown.zoneless",function(){return n.el.scrollTop=n.el.scrollHeight/2})},decls:2,vars:3,consts:[[1,"t-overlay"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiScrollRef","","class","t-dialog",4,"ngFor","ngForOf"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiScrollRef","",1,"t-dialog"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-scrollbars"]],template:function(i,n){i&1&&(f(0,"div",0),s(1,Me,3,4,"section",1)),i&2&&(M("t-overlay_visible",n.dialogs().length),a(),o("ngForOf",n.dialogs()))},dependencies:[V,J,he,ae,re],styles:['[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:has(section){pointer-events:auto;overflow:auto}[_nghost-%COMP%]:before{content:"";display:block;block-size:1000%}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-dialog[_ngcontent-%COMP%]{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;transition-timing-function:ease-out}.t-dialog[_ngcontent-%COMP%]:last-child{pointer-events:auto;filter:none}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}'],data:{animation:[ne]}})}}return t})();var Se=["stops"];function we(t,r){if(t&1&&f(0,"div",8,0),t&2){let e=r.$implicit;L("margin-top",e)}}function Ie(t,r){t&1&&f(0,"div",9)}function Ae(t,r){if(t&1&&(g(0),O(1),h()),t&2){let e=r.polymorpheusOutlet;a(),k(" ",e," ")}}function Fe(t,r){if(t&1&&(m(0,"h2",10),s(1,Ae,2,1,"ng-container",7),_()),t&2){let e=b();o("id",e.context.id),a(),o("polymorpheusOutlet",e.context.label)("polymorpheusOutletContext",e.context)}}function He(t,r){if(t&1&&(g(0),O(1),h()),t&2){let e=r.polymorpheusOutlet;a(),k(" ",e," ")}}function Ee(){return this.context.closeable===!0}var Ne=(()=>{class t{constructor(){this.stops=Gt,this.el=A(),this.pointers=0,this.slideInTop={value:"",params:{start:"100vh",duration:oe(l(Zt))}},this.context=$()}ngAfterViewInit(){this.el.scrollTop=[...this.stops.map(e=>e.nativeElement.offsetTop-this.context.offset),this.el.clientHeight??1/0][this.context.initial]??0}close(){this.context.$implicit.complete()}onPointerChange(e){this.pointers=Math.max(this.pointers+e,0),!this.pointers&&this.el.scrollTop<=0&&this.close()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["tui-sheet-dialog"]],viewQuery:function(i,n){if(i&1&&kt(Se,5),i&2){let c;Dt(c=Mt())&&(n.stops=c)}},hostVars:5,hostBindings:function(i,n){i&1&&v("touchstart.passive.zoneless",function(){return n.onPointerChange(1)},!1,Q)("touchend.zoneless",function(){return n.onPointerChange(-1)},!1,Q)("touchcancel.zoneless",function(){return n.onPointerChange(-1)},!1,Q)("scroll.zoneless",function(){return n.onPointerChange(0)})("click.self",function(){return n.close()}),i&2&&(it("@tuiSlideInTop",n.slideInTop),L("--tui-offset",n.context.offset,"px"),M("_closeable",n.context.closeable===!0))},decls:7,vars:5,consts:[["stops",""],[1,"t-stops"],["class","t-stop",3,"margin-top",4,"ngFor","ngForOf"],[1,"t-sheet"],["class","t-top",4,"ngIf"],["class","t-heading",3,"id",4,"ngIf"],[1,"t-content"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-stop"],[1,"t-top"],[1,"t-heading",3,"id"]],template:function(i,n){i&1&&(m(0,"div",1),s(1,we,2,2,"div",2),_(),m(2,"div",3),s(3,Ie,1,0,"div",4)(4,Fe,2,3,"h2",5),m(5,"div",6),s(6,He,2,1,"ng-container",7),_()()),i&2&&(a(),o("ngForOf",n.context.stops),a(2),o("ngIf",n.context.bar),a(),o("ngIf",n.context.label),a(2),o("polymorpheusOutlet",n.context.content)("polymorpheusOutletContext",n.context))},dependencies:[V,U,J],styles:['[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;display:flex;inline-size:100%;max-inline-size:40rem;block-size:calc(100% - var(--tui-offset));flex-direction:column;font:var(--tui-font-text-m);overflow-y:scroll;scroll-snap-type:y mandatory;margin:var(--tui-offset) auto 0;border-radius:.75rem .75rem 0 0}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";z-index:-1}._closeable[_nghost-%COMP%]{display:block}._closeable[_nghost-%COMP%]   .t-stops[_ngcontent-%COMP%]{display:flex}.t-stops[_ngcontent-%COMP%]{display:none;block-size:100%;scroll-snap-stop:always;scroll-snap-align:start;pointer-events:none}.t-stop[_ngcontent-%COMP%]{position:relative;top:env(safe-area-inset-bottom);scroll-snap-stop:normal;scroll-snap-align:start;block-size:1rem;inline-size:1rem}.t-sheet[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;inline-size:100%;box-shadow:var(--tui-shadow-small);border-radius:inherit;padding:0 1rem;margin-block-start:auto;background:var(--tui-background-elevation-1);box-sizing:border-box;scroll-snap-stop:always;scroll-snap-align:start}.t-sheet[_ngcontent-%COMP%]::-webkit-scrollbar, .t-sheet[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-top[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;block-size:1.5rem;margin:0 -1rem;border-radius:inherit;background:var(--tui-background-elevation-1)}.t-top[_ngcontent-%COMP%]:after{content:"";position:absolute;top:.5rem;left:50%;inline-size:2rem;block-size:.25rem;transform:translate(-50%);background:var(--tui-border-normal);border-radius:1rem}.t-heading[_ngcontent-%COMP%]{position:sticky;top:1.5rem;z-index:1;margin:0 -1rem;padding:.75rem 1rem;font:var(--tui-font-heading-6);background:var(--tui-background-elevation-1)}.t-heading[_ngcontent-%COMP%]:first-child{top:0;border-radius:inherit}.t-heading[_ngcontent-%COMP%]:last-child{padding-block-end:1.5rem}.t-content[_ngcontent-%COMP%]{position:relative;isolation:isolate;padding-block-end:calc(1.5rem + env(safe-area-inset-bottom));border-radius:inherit}.t-content[_ngcontent-%COMP%]:after{content:"";position:relative;top:calc(1.5rem + env(safe-area-inset-bottom));z-index:-1;display:block;scroll-snap-stop:always;scroll-snap-align:end;border-image:conic-gradient(var(--tui-background-elevation-1) 0 0) fill 0/0/0 100vh 100vh}'],data:{animation:[rt]},changeDetection:0})}}return mt([Ht(Ee)],t.prototype,"close",null),t})(),Be={label:"",stops:[],initial:0,offset:16,closeable:!0,data:void 0,bar:!0},Re=y(Be);var Le="#404040",je=(()=>{class t extends K{constructor(){super(...arguments),this.theme=l(ue),this.initial=this.theme.color,this.$=this.items$.pipe(_t([]),vt(),ot()).subscribe(([e,i])=>{!e.length&&i.length&&(this.initial=this.theme.color,this.theme.color=Le),!i.length&&e.length&&(this.theme.color=this.initial)})}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})()}static{this.\u0275prov=E({token:t,factory:()=>new t(ct,Ne,l(Re)),providedIn:"root"})}}return t})(),ve=(()=>{class t extends ge{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})()}static{this.\u0275dir=p({type:t,selectors:[["ng-template","tuiSheetDialog",""]],inputs:{options:[0,"tuiSheetDialogOptions","options"],open:[0,"tuiSheetDialog","open"]},outputs:{openChange:"tuiSheetDialogChange"},features:[d([ce(je)]),R]})}}return t})();var Ve=["*"];function Ue(t,r){t&1&&(g(0),S(1),h())}var be=(()=>{class t{onClick(e){e.preventDefault(),e.stopPropagation(),this.cardEntityHttpService.addCard(this.card),this.add.emit()}constructor(e){this.cardEntityHttpService=e,this.add=new xt}static{this.\u0275fac=function(i){return new(i||t)(q(pe))}}static{this.\u0275cmp=u({type:t,selectors:[["app-add-card-feature"]],hostBindings:function(i,n){i&1&&v("click",function(H){return n.onClick(H)})},inputs:{card:"card"},outputs:{add:"add"},features:[d([I("addCardFeature")])],ngContentSelectors:Ve,decls:1,vars:1,consts:[[4,"transloco","translocoRead"]],template:function(i,n){i&1&&(P(),s(0,Ue,2,0,"ng-container",0)),i&2&&o("translocoRead","addCardFeature")},dependencies:[w],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}}return t})();var We={info:"@tui.info",positive:"@tui.circle-check",negative:"@tui.circle-x",warning:"@tui.circle-alert",neutral:"@tui.info",success:"@tui.circle-check",error:"@tui.circle-x"},Ge={appearance:"info",icon:t=>We[t]??"",size:"l"},[Kn,_e]=F(Ge);var $e=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-title"],decls:0,vars:0,template:function(i,n){},styles:[`[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiSubtitle]{font:var(--tui-font-text-ui-s)}
`],encapsulation:2,changeDetection:0})}}return t})(),eo=(()=>{class t{constructor(){this.nothing=G($e),this.size=""}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=p({type:t,selectors:[["","tuiTitle",""]],hostAttrs:["tuiTitle",""],hostVars:1,hostBindings:function(i,n){i&2&&T("data-size",n.size||null)},inputs:{size:[0,"tuiTitle","size"]}})}}return t})();var[ye,oo]=F({size:"s"});var Qe={showIcons:!0,size:"m",icon:"@tui.check",appearance:t=>t.checked?"primary":"secondary"},Ce=y(Qe);var qe={s:"xxxs",m:"xs",l:"s"},Ye=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-form"],decls:0,vars:0,template:function(i,n){},styles:[`[tuiForm]{display:flex;flex-direction:column;align-items:stretch}[tuiForm][data-size=s]{gap:.75rem;font:var(--tui-font-text-s)}[tuiForm][data-size=s] tui-error:not(.tui-space-top-none){margin-top:-.75rem}[tuiForm][data-size=s] [tuiHeader]{padding-bottom:.5rem}[tuiForm][data-size=s] [tuiHeader] [tuiSubtitle]{font:var(--tui-font-text-ui-s)}[tuiForm][data-size=m]{gap:1rem;font:var(--tui-font-text-s)}[tuiForm][data-size=m] tui-error:not(.tui-space-top-none){margin-top:-1rem}[tuiForm][data-size=l]{gap:1.25rem;font:var(--tui-font-text-m)}[tuiForm][data-size=l] tui-error:not(.tui-space-top-none){margin-top:-1.25rem}[tuiForm] [tuiHeader]{padding-bottom:.25rem}[tuiForm] footer{display:flex;gap:.75rem;margin-top:.25rem}[tuiForm] [tuiLabel]:not([data-orientation=vertical]){font:inherit}[tuiForm][data-size=s] [tuiLabel]:not([data-orientation=vertical]) [tuiTooltip],[tuiForm][data-size=m] [tuiLabel]:not([data-orientation=vertical]) [tuiTooltip]{block-size:1.25rem}
`],encapsulation:2,changeDetection:0})}}return t})(),lt=(()=>{class t{constructor(){this.nothing=G(Ye),this.size="l"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=p({type:t,selectors:[["","tuiForm",""]],hostAttrs:["tuiForm",""],hostVars:1,hostBindings:function(i,n){i&2&&T("data-size",n.size)},inputs:{size:[0,"tuiForm","size"]},features:[d([Kt(t),_e(t),ut(fe,e=>qe[e]),ut(Ce,e=>e==="l"?"m":"s"),ut(ye,e=>e==="l"?"m":"s")]),Y([{directive:X,inputs:["tuiTextfieldSize","tuiForm","tuiTextfieldAppearance","tuiTextfieldAppearance","tuiTextfieldCleaner","tuiTextfieldCleaner"]}])]})}}return t})();function ut(t,r){return{provide:t,useFactory:()=>tt(x({},l(t,{skipSelf:!0})),{size:r(l(lt).size)})}}function Ze(t,r){if(t&1){let e=j();g(0),m(1,"form",1)(2,"tui-textfield",2),f(3,"input",3),_(),m(4,"app-add-card-feature",4),v("add",function(){N(e);let n=b();return B(n.onAdd())}),m(5,"button",5),O(6),_()()(),h()}if(t&2){let e=r.$implicit,i=b();a(),o("formGroup",i.formGroup),a(2),o("placeholder",e("formGroup.name.placeholder")),a(),o("card",i.newCard),a(2),k(" ",e("formGroup.button")," ")}}var xe=(()=>{class t{get newCard(){return x({},this.formGroup.getRawValue())}constructor(e){this.formBuilder=e,this.context=$(),this.formGroup=this.formBuilder.group({name:this.formBuilder.control("",{nonNullable:!0,validators:[Nt.required]})})}onAdd(){this.context.completeWith(!1)}static{this.\u0275fac=function(i){return new(i||t)(q(Ut))}}static{this.\u0275cmp=u({type:t,selectors:[["app-add-card-modal"]],features:[d([I("addCardModalComponent")])],decls:1,vars:1,consts:[[4,"transloco","translocoPrefix"],["tuiForm","m",3,"formGroup"],["tuiTextfieldSize","l"],["formControlName","name","tuiTextfield","",3,"placeholder"],[3,"add","card"],["appearance","primary","size","xl","tuiButton","","type","submit",1,"w-100"]],template:function(i,n){i&1&&s(0,Ze,7,4,"ng-container",0),i&2&&o("translocoPrefix","addCardModalComponent")},dependencies:[Wt,Lt,Et,Bt,Rt,jt,Vt,lt,le,de,X,w,Xt,be],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{--t-shadow: none}[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-block-end:inherit}"],changeDetection:0})}}return t})();var Je=["*"];function Ke(t,r){t&1&&f(0,"app-add-card-modal")}function Xe(t,r){if(t&1){let e=j();g(0),S(1),s(2,Ke,1,0,"ng-template",1),It("tuiSheetDialogChange",function(n){N(e);let c=b();return wt(c.open,n)||(c.open=n),B(n)}),h()}if(t&2){let e=b();a(2),St("tuiSheetDialog",e.open)}}var Eo=(()=>{class t{onClick(e){e.preventDefault(),e.stopPropagation(),this.open=!0}constructor(){this.open=!1}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-open-add-card-modal-feature"]],hostBindings:function(i,n){i&1&&v("click",function(H){return n.onClick(H)})},features:[d([I("openAddCardModalFeature")])],ngContentSelectors:Je,decls:1,vars:1,consts:[[4,"transloco","translocoRead"],[3,"tuiSheetDialogChange","tuiSheetDialog"]],template:function(i,n){i&1&&(P(),s(0,Xe,3,1,"ng-container",0)),i&2&&o("translocoRead","openAddCardModalFeature")},dependencies:[w,xe,ve],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}}return t})();export{hi as a,vi as b,bn as c,je as d,ve as e,Kn as f,eo as g,lt as h,pe as i,Eo as j};
