import{a as yt}from"./chunk-EMMFSUAH.js";import{E as j,F as Lt,G as Rt,b as Tt,e as At,h as J,k as Bt,m as Ht,o as jt,q as K,s as Ut,t as H}from"./chunk-MEWZPPTG.js";import{A as Dt,H as M,Ia as Ft,Ja as Et,Ma as Nt,Q as zt,R as Y,T as St,X as P,_ as It,ma as wt,q as xt,va as kt,x as Mt,z as Pt}from"./chunk-G7E2AMOX.js";import{Aa as y,Ab as f,Bb as h,Cb as pt,Db as W,Fb as $,Gb as g,Hb as T,Hc as q,Ib as mt,Ic as Ot,Jb as ft,Lb as ht,Mb as gt,Nb as vt,O as nt,Pb as x,Pc as A,Q as ot,R as rt,Rb as E,Rc as B,Sb as _t,Ta as dt,Tb as Ct,Ua as I,Ub as bt,Va as s,Vb as _,W as at,Z as st,Za as V,a as b,aa as ct,cb as u,eb as d,gb as S,ja as z,jb as c,l as D,lc as G,m as tt,oa as lt,ob as w,p as et,pa as l,pb as r,q as it,qb as k,qc as N,rb as F,rc as Q,t as p,xa as ut,xb as v,ya as L,yb as O,za as R,zb as m}from"./chunk-MEKU6LLM.js";var Qt=(()=>{class t{constructor(e){this.httpService=e,this.apiUrl="api/cards",this.cards=[]}addCard(e){let i={id:Date.now().toString(),name:e.name||""};return this.cards.push(i),p(i)}deleteCard(e){let i=this.cards.findIndex(n=>n.id===e);return i!==-1&&this.cards.splice(i,1),p(void 0)}getCardById(e){return p(this.cards.find(i=>i.id===e))}getCards(){return p(this.cards)}updateCard(e,i){let n=this.cards.findIndex(o=>o.id===e);return n!==-1?(this.cards[n]=b(b({},this.cards[n]),i),p(this.cards[n])):p(void 0)}static{this.\u0275fac=function(i){return new(i||t)(lt(yt))}}static{this.\u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Vt=(()=>{class t extends Ut{constructor(){super(...arguments),this.service=l(j),this.open$=new D,this.options={},this.open=!1,this.openChange=this.open$.pipe(ot(),wt(()=>this.service.open(this,this.options).pipe(nt(),rt(!1))),st())}ngOnChanges(){this.open$.next(this.open)}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})()}static{this.\u0275dir=d({type:t,standalone:!1,features:[S,ut]})}}return t})();var Wt=(()=>{class t{constructor(){this.doc=l(G),this.el=P(),this.activeElement=null,this.initialized=!1,Promise.resolve().then(()=>{this.initialized=!0,this.activeElement=Ft(this.doc),this.el.focus()})}ngOnDestroy(){Et(this.doc),Promise.resolve().then(()=>{St(this.activeElement)&&this.activeElement.focus()})}onFocusIn(e){let i=this.el.firstElementChild;!Y(this.el,e)&&i&&Nt({initial:i,root:this.el})?.focus()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=d({type:t,selectors:[["","tuiFocusTrap",""]],hostAttrs:["tabIndex","0"],hostBindings:function(i,n){i&1&&g("focusin.zoneless",function(U){return n.initialized&&n.onFocusIn(U.target)},!1,dt)}})}}return t})();function Jt(t,a){t&1&&pt(0)}function Kt(t,a){if(t&1&&(v(0,"section",2),c(1,Jt,1,0,"ng-container",3),m(2,"tui-scroll-controls",4),O()),t&2){let e=a.$implicit;r("@tuiHost",void 0),w("aria-labelledby",e.id),s(),r("polymorpheusOutlet",e.component)("polymorpheusOutletContext",e)}}var X=M(new tt([])),Xt={appearance:"",size:"m",required:!1,closeable:!0,dismissible:!0,label:"",header:"",data:void 0},mi=M(et),fi=M(Xt);var hi=new Error("Required dialog was dismissed");var gi=(()=>{class t{constructor(){this.el=P(),this.dialogs=Ot(l(X),{initialValue:[]})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["tui-dialogs"]],hostBindings:function(i,n){i&1&&g("keydown.zoneless",function(){return n.el.scrollTop=n.el.scrollHeight/2})},decls:2,vars:3,consts:[[1,"t-overlay"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiScrollRef","","class","t-dialog",4,"ngFor","ngForOf"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiScrollRef","",1,"t-dialog"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-scrollbars"]],template:function(i,n){i&1&&(m(0,"div",0),c(1,Kt,3,4,"section",1)),i&2&&(F("t-overlay_visible",n.dialogs().length),s(),r("ngForOf",n.dialogs()))},dependencies:[N,H,Wt,Ht,jt],styles:['[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:has(section){pointer-events:auto;overflow:auto}[_nghost-%COMP%]:before{content:"";display:block;block-size:1000%}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-dialog[_ngcontent-%COMP%]{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;transition-timing-function:ease-out}.t-dialog[_ngcontent-%COMP%]:last-child{pointer-events:auto;filter:none}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}'],data:{animation:[At]}})}}return t})();var Zt=["stops"];function te(t,a){if(t&1&&m(0,"div",8,0),t&2){let e=a.$implicit;k("margin-top",e)}}function ee(t,a){t&1&&m(0,"div",9)}function ie(t,a){if(t&1&&(f(0),x(1),h()),t&2){let e=a.polymorpheusOutlet;s(),E(" ",e," ")}}function ne(t,a){if(t&1&&(v(0,"h2",10),c(1,ie,2,1,"ng-container",7),O()),t&2){let e=T();r("id",e.context.id),s(),r("polymorpheusOutlet",e.context.label)("polymorpheusOutletContext",e.context)}}function oe(t,a){if(t&1&&(f(0),x(1),h()),t&2){let e=a.polymorpheusOutlet;s(),E(" ",e," ")}}function re(){return this.context.closeable===!0}var ae=(()=>{class t{constructor(){this.stops=Dt,this.el=P(),this.pointers=0,this.slideInTop={value:"",params:{start:"100vh",duration:Bt(l(kt))}},this.context=K()}ngAfterViewInit(){this.el.scrollTop=[...this.stops.map(e=>e.nativeElement.offsetTop-this.context.offset),this.el.clientHeight??1/0][this.context.initial]??0}close(){this.context.$implicit.complete()}onPointerChange(e){this.pointers=Math.max(this.pointers+e,0),!this.pointers&&this.el.scrollTop<=0&&this.close()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["tui-sheet-dialog"]],viewQuery:function(i,n){if(i&1&&ht(Zt,5),i&2){let o;gt(o=vt())&&(n.stops=o)}},hostVars:5,hostBindings:function(i,n){i&1&&g("touchstart.passive.zoneless",function(){return n.onPointerChange(1)},!1,I)("touchend.zoneless",function(){return n.onPointerChange(-1)},!1,I)("touchcancel.zoneless",function(){return n.onPointerChange(-1)},!1,I)("scroll.zoneless",function(){return n.onPointerChange(0)})("click.self",function(){return n.close()}),i&2&&($("@tuiSlideInTop",n.slideInTop),k("--tui-offset",n.context.offset,"px"),F("_closeable",n.context.closeable===!0))},decls:7,vars:5,consts:[["stops",""],[1,"t-stops"],["class","t-stop",3,"margin-top",4,"ngFor","ngForOf"],[1,"t-sheet"],["class","t-top",4,"ngIf"],["class","t-heading",3,"id",4,"ngIf"],[1,"t-content"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-stop"],[1,"t-top"],[1,"t-heading",3,"id"]],template:function(i,n){i&1&&(v(0,"div",1),c(1,te,2,2,"div",2),O(),v(2,"div",3),c(3,ee,1,0,"div",4)(4,ne,2,3,"h2",5),v(5,"div",6),c(6,oe,2,1,"ng-container",7),O()()),i&2&&(s(),r("ngForOf",n.context.stops),s(2),r("ngIf",n.context.bar),s(),r("ngIf",n.context.label),s(2),r("polymorpheusOutlet",n.context.content)("polymorpheusOutletContext",n.context))},dependencies:[N,Q,H],styles:['[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;display:flex;inline-size:100%;max-inline-size:40rem;block-size:calc(100% - var(--tui-offset));flex-direction:column;font:var(--tui-font-text-m);overflow-y:scroll;scroll-snap-type:y mandatory;margin:var(--tui-offset) auto 0;border-radius:.75rem .75rem 0 0}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";z-index:-1}._closeable[_nghost-%COMP%]{display:block}._closeable[_nghost-%COMP%]   .t-stops[_ngcontent-%COMP%]{display:flex}.t-stops[_ngcontent-%COMP%]{display:none;block-size:100%;scroll-snap-stop:always;scroll-snap-align:start;pointer-events:none}.t-stop[_ngcontent-%COMP%]{position:relative;top:env(safe-area-inset-bottom);scroll-snap-stop:normal;scroll-snap-align:start;block-size:1rem;inline-size:1rem}.t-sheet[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;inline-size:100%;box-shadow:var(--tui-shadow-small);border-radius:inherit;padding:0 1rem;margin-block-start:auto;background:var(--tui-background-elevation-1);box-sizing:border-box;scroll-snap-stop:always;scroll-snap-align:start}.t-sheet[_ngcontent-%COMP%]::-webkit-scrollbar, .t-sheet[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-top[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;block-size:1.5rem;margin:0 -1rem;border-radius:inherit;background:var(--tui-background-elevation-1)}.t-top[_ngcontent-%COMP%]:after{content:"";position:absolute;top:.5rem;left:50%;inline-size:2rem;block-size:.25rem;transform:translate(-50%);background:var(--tui-border-normal);border-radius:1rem}.t-heading[_ngcontent-%COMP%]{position:sticky;top:1.5rem;z-index:1;margin:0 -1rem;padding:.75rem 1rem;font:var(--tui-font-heading-6);background:var(--tui-background-elevation-1)}.t-heading[_ngcontent-%COMP%]:first-child{top:0;border-radius:inherit}.t-heading[_ngcontent-%COMP%]:last-child{padding-block-end:1.5rem}.t-content[_ngcontent-%COMP%]{position:relative;isolation:isolate;padding-block-end:calc(1.5rem + env(safe-area-inset-bottom));border-radius:inherit}.t-content[_ngcontent-%COMP%]:after{content:"";position:relative;top:calc(1.5rem + env(safe-area-inset-bottom));z-index:-1;display:block;scroll-snap-stop:always;scroll-snap-align:end;border-image:conic-gradient(var(--tui-background-elevation-1) 0 0) fill 0/0/0 100vh 100vh}'],data:{animation:[J]},changeDetection:0})}}return it([Tt(re)],t.prototype,"close",null),t})(),se={label:"",stops:[],initial:0,offset:16,closeable:!0,data:void 0,bar:!0},ce=M(se);var le="#404040",Z=(()=>{class t extends j{constructor(){super(...arguments),this.theme=l(Rt),this.initial=this.theme.color,this.$=this.items$.pipe(ct([]),at(),q()).subscribe(([e,i])=>{!e.length&&i.length&&(this.initial=this.theme.color,this.theme.color=le),!i.length&&e.length&&(this.theme.color=this.initial)})}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})()}static{this.\u0275prov=z({token:t,factory:()=>new t(X,ae,l(ce)),providedIn:"root"})}}return t})(),$t=(()=>{class t extends Vt{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})()}static{this.\u0275dir=d({type:t,selectors:[["ng-template","tuiSheetDialog",""]],inputs:{options:[0,"tuiSheetDialogOptions","options"],open:[0,"tuiSheetDialog","open"]},outputs:{openChange:"tuiSheetDialogChange"},features:[_([Lt(Z)]),S]})}}return t})();var ue={info:"@tui.info",positive:"@tui.circle-check",negative:"@tui.circle-x",warning:"@tui.circle-alert",neutral:"@tui.info",success:"@tui.circle-check",error:"@tui.circle-x"},de={appearance:"info",icon:t=>ue[t]??"",size:"l"},[Vi,Wi]=It(de);var pe=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-title"],decls:0,vars:0,template:function(i,n){},styles:[`[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiSubtitle]{font:var(--tui-font-text-ui-s)}
`],encapsulation:2,changeDetection:0})}}return t})(),Qi=(()=>{class t{constructor(){this.nothing=zt(pe),this.size=""}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=d({type:t,selectors:[["","tuiTitle",""]],hostAttrs:["tuiTitle",""],hostVars:1,hostBindings:function(i,n){i&2&&w("data-size",n.size||null)},inputs:{size:[0,"tuiTitle","size"]}})}}return t})();function me(t,a){t&1&&(f(0),x(1," 123 "),h())}var Gt=(()=>{class t{get newCard(){return b({},this.formGroup.getRawValue())}constructor(e,i){this.formBuilder=e,this.tuiSheetDialogService=i,this.add=new D,this.formGroup=this.formBuilder.group({name:this.formBuilder.control("",{nonNullable:!0,validators:[xt.required]})})}onAdd(){this.add.next()}static{this.\u0275fac=function(i){return new(i||t)(V(Mt),V(Z))}}static{this.\u0275cmp=u({type:t,selectors:[["app-add-card-modal"]],outputs:{add:"add"},features:[_([B("addCardModalComponent")])],decls:1,vars:1,consts:[[4,"transloco","translocoPrefix"]],template:function(i,n){i&1&&c(0,me,2,0,"ng-container",0),i&2&&r("translocoPrefix","addCardModalComponent")},dependencies:[Pt,A],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{--t-shadow: none}[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-block-end:inherit}"],changeDetection:0})}}return t})();var fe=["*"];function he(t,a){t&1&&m(0,"app-add-card-modal")}function ge(t,a){if(t&1){let e=W();f(0),ft(1),c(2,he,1,0,"ng-template",1),bt("tuiSheetDialogChange",function(n){L(e);let o=T();return Ct(o.open,n)||(o.open=n),R(n)}),h()}if(t&2){let e=T();s(2),_t("tuiSheetDialog",e.open)}}var cn=(()=>{class t{onClick(e){e.preventDefault(),e.stopPropagation(),this.open=!0}constructor(){this.open=!1}onAdd(){this.open=!this.open}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-open-add-card-modal-feature"]],hostBindings:function(i,n){i&1&&g("click",function(U){return n.onClick(U)})},features:[_([B("openAddCardModalFeature")])],ngContentSelectors:fe,decls:1,vars:1,consts:[[4,"transloco","translocoRead"],[3,"tuiSheetDialogChange","tuiSheetDialog"]],template:function(i,n){i&1&&(mt(),c(0,ge,3,1,"ng-container",0)),i&2&&r("translocoRead","openAddCardModalFeature")},dependencies:[A,Gt,$t],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}}return t})();export{gi as a,Z as b,$t as c,Vi as d,Wi as e,Qi as f,Qt as g,cn as h};
