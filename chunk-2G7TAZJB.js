import{a as qe,b as Ye,e as $e}from"./chunk-W3MIKCC2.js";import{a as tt,b as it}from"./chunk-35DURGGC.js";import{a as De}from"./chunk-3QDQM5NI.js";import"./chunk-JRZTA7AE.js";import{a as Je}from"./chunk-TQL4PLQL.js";import{a as K}from"./chunk-SP5MUGCB.js";import"./chunk-AREO6YYY.js";import{a as Q,b as Ze,c as Ke}from"./chunk-YL23V7RE.js";import{E as Ge,F as We,G as Qe,b as ke,h as Ve,k as Ne,q as W,t as Ue}from"./chunk-5LT6FO7E.js";import{d as Xe,e as et}from"./chunk-KF5OWYVW.js";import{A as Be,Ca as je,Da as U,H as L,Ma as G,O as Re,V as j,Y as V,ia as N,o as Fe,q as we,s as Me,sa as Le,t as He,u as Pe,v as Ie,w as Oe,x as Ee,z as Ae}from"./chunk-CLHKD423.js";import{Aa as $,Ab as m,Cb as E,Eb as ge,Fa as le,Fb as b,Fc as R,Gb as f,Hb as A,I as oe,Ib as B,J as ne,Kb as ve,Lb as Ce,Mb as _e,Mc as ze,N as M,Nc as S,Ob as x,Pc as D,Qb as T,Rb as ye,Sb as be,Ta as O,Tb as xe,Ua as n,Ub as u,W as re,Ya as _,a as v,aa as ae,b as ee,ba as se,bb as l,ca as Y,db as F,ea as ce,fb as ue,gb as pe,ib as c,ja as H,nb as me,oa as de,ob as s,oc as Te,pa as C,pb as Z,pc as Se,q as te,qb as fe,sb as he,t as z,wb as d,x as ie,xb as h,ya as P,yb as g,za as I,zb as p}from"./chunk-XHPW2DA2.js";var ft={showIcons:!0,size:"m",icon:"@tui.check",appearance:t=>t.checked?"primary":"secondary"},ot=L(ft);var[nt,Ut]=V({size:"s"});var[rt,Qt]=V({size:"h5"});var ht={s:"xxxs",m:"xs",l:"s"},gt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=l({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-form"],decls:0,vars:0,template:function(i,o){},styles:[`[tuiForm]{display:flex;flex-direction:column;align-items:stretch}[tuiForm][data-size=s]{gap:.75rem;font:var(--tui-font-text-s)}[tuiForm][data-size=s] tui-error:not(.tui-space-top-none){margin-top:-.75rem}[tuiForm][data-size=s] [tuiHeader]{padding-bottom:.5rem}[tuiForm][data-size=s] [tuiHeader] [tuiSubtitle]{font:var(--tui-font-text-ui-s)}[tuiForm][data-size=m]{gap:1rem;font:var(--tui-font-text-s)}[tuiForm][data-size=m] tui-error:not(.tui-space-top-none){margin-top:-1rem}[tuiForm][data-size=l]{gap:1.25rem;font:var(--tui-font-text-m)}[tuiForm][data-size=l] tui-error:not(.tui-space-top-none){margin-top:-1.25rem}[tuiForm] [tuiHeader]{padding-bottom:.25rem}[tuiForm] footer{display:flex;gap:.75rem;margin-top:.25rem}[tuiForm] [tuiLabel]:not([data-orientation=vertical]){font:inherit}[tuiForm][data-size=s] [tuiLabel]:not([data-orientation=vertical]) [tuiTooltip],[tuiForm][data-size=m] [tuiLabel]:not([data-orientation=vertical]) [tuiTooltip]{block-size:1.25rem}
`],encapsulation:2,changeDetection:0})}}return t})(),J=(()=>{class t{constructor(){this.nothing=Re(gt),this.size="l"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=F({type:t,selectors:[["","tuiForm",""]],hostAttrs:["tuiForm",""],hostVars:1,hostBindings:function(i,o){i&2&&me("data-size",o.size)},inputs:{size:[0,"tuiForm","size"]},features:[u([je(t),$e(t),X(rt,e=>ht[e]),X(ot,e=>e==="l"?"m":"s"),X(nt,e=>e==="l"?"m":"s")]),pe([{directive:Q,inputs:["tuiTextfieldSize","tuiForm","tuiTextfieldAppearance","tuiTextfieldAppearance","tuiTextfieldCleaner","tuiTextfieldCleaner"]}])]})}}return t})();function X(t,r){return{provide:t,useFactory:()=>ee(v({},C(t,{skipSelf:!0})),{size:r(C(J).size)})}}var vt=["stops"];function Ct(t,r){if(t&1&&g(0,"div",8,0),t&2){let e=r.$implicit;Z("margin-top",e)}}function _t(t,r){t&1&&g(0,"div",9)}function yt(t,r){if(t&1&&(p(0),x(1),m()),t&2){let e=r.polymorpheusOutlet;n(),T(" ",e," ")}}function bt(t,r){if(t&1&&(d(0,"h2",10),c(1,yt,2,1,"ng-container",7),h()),t&2){let e=f();s("id",e.context.id),n(),s("polymorpheusOutlet",e.context.label)("polymorpheusOutletContext",e.context)}}function xt(t,r){if(t&1&&(p(0),x(1),m()),t&2){let e=r.polymorpheusOutlet;n(),T(" ",e," ")}}function Tt(){return this.context.closeable===!0}var St=(()=>{class t{constructor(){this.stops=Be,this.el=j(),this.pointers=0,this.slideInTop={value:"",params:{start:"100vh",duration:Ne(C(Le))}},this.context=W()}ngAfterViewInit(){this.el.scrollTop=[...this.stops.map(e=>e.nativeElement.offsetTop-this.context.offset),this.el.clientHeight??1/0][this.context.initial]??0}close(){this.context.$implicit.complete()}onPointerChange(e){this.pointers=Math.max(this.pointers+e,0),!this.pointers&&this.el.scrollTop<=0&&this.close()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=l({type:t,selectors:[["tui-sheet-dialog"]],viewQuery:function(i,o){if(i&1&&ve(vt,5),i&2){let a;Ce(a=_e())&&(o.stops=a)}},hostVars:5,hostBindings:function(i,o){i&1&&b("touchstart.passive.zoneless",function(){return o.onPointerChange(1)},!1,O)("touchend.zoneless",function(){return o.onPointerChange(-1)},!1,O)("touchcancel.zoneless",function(){return o.onPointerChange(-1)},!1,O)("scroll.zoneless",function(){return o.onPointerChange(0)})("click.self",function(){return o.close()}),i&2&&(ge("@tuiSlideInTop",o.slideInTop),Z("--tui-offset",o.context.offset,"px"),fe("_closeable",o.context.closeable===!0))},decls:7,vars:5,consts:[["stops",""],[1,"t-stops"],["class","t-stop",3,"margin-top",4,"ngFor","ngForOf"],[1,"t-sheet"],["class","t-top",4,"ngIf"],["class","t-heading",3,"id",4,"ngIf"],[1,"t-content"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-stop"],[1,"t-top"],[1,"t-heading",3,"id"]],template:function(i,o){i&1&&(d(0,"div",1),c(1,Ct,2,2,"div",2),h(),d(2,"div",3),c(3,_t,1,0,"div",4)(4,bt,2,3,"h2",5),d(5,"div",6),c(6,xt,2,1,"ng-container",7),h()()),i&2&&(n(),s("ngForOf",o.context.stops),n(2),s("ngIf",o.context.bar),n(),s("ngIf",o.context.label),n(2),s("polymorpheusOutlet",o.context.content)("polymorpheusOutletContext",o.context))},dependencies:[Te,Se,Ue],styles:['[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;display:flex;inline-size:100%;max-inline-size:40rem;block-size:calc(100% - var(--tui-offset));flex-direction:column;font:var(--tui-font-text-m);overflow-y:scroll;scroll-snap-type:y mandatory;margin:var(--tui-offset) auto 0;border-radius:.75rem .75rem 0 0}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";z-index:-1}._closeable[_nghost-%COMP%]{display:block}._closeable[_nghost-%COMP%]   .t-stops[_ngcontent-%COMP%]{display:flex}.t-stops[_ngcontent-%COMP%]{display:none;block-size:100%;scroll-snap-stop:always;scroll-snap-align:start;pointer-events:none}.t-stop[_ngcontent-%COMP%]{position:relative;top:env(safe-area-inset-bottom);scroll-snap-stop:normal;scroll-snap-align:start;block-size:1rem;inline-size:1rem}.t-sheet[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;inline-size:100%;box-shadow:var(--tui-shadow-small);border-radius:inherit;padding:0 1rem;margin-block-start:auto;background:var(--tui-background-elevation-1);box-sizing:border-box;scroll-snap-stop:always;scroll-snap-align:start}.t-sheet[_ngcontent-%COMP%]::-webkit-scrollbar, .t-sheet[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-top[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;block-size:1.5rem;margin:0 -1rem;border-radius:inherit;background:var(--tui-background-elevation-1)}.t-top[_ngcontent-%COMP%]:after{content:"";position:absolute;top:.5rem;left:50%;inline-size:2rem;block-size:.25rem;transform:translate(-50%);background:var(--tui-border-normal);border-radius:1rem}.t-heading[_ngcontent-%COMP%]{position:sticky;top:1.5rem;z-index:1;margin:0 -1rem;padding:.75rem 1rem;font:var(--tui-font-heading-6);background:var(--tui-background-elevation-1)}.t-heading[_ngcontent-%COMP%]:first-child{top:0;border-radius:inherit}.t-heading[_ngcontent-%COMP%]:last-child{padding-block-end:1.5rem}.t-content[_ngcontent-%COMP%]{position:relative;isolation:isolate;padding-block-end:calc(1.5rem + env(safe-area-inset-bottom));border-radius:inherit}.t-content[_ngcontent-%COMP%]:after{content:"";position:relative;top:calc(1.5rem + env(safe-area-inset-bottom));z-index:-1;display:block;scroll-snap-stop:always;scroll-snap-align:end;border-image:conic-gradient(var(--tui-background-elevation-1) 0 0) fill 0/0/0 100vh 100vh}'],data:{animation:[Ve]},changeDetection:0})}}return te([ke(Tt)],t.prototype,"close",null),t})(),Dt={label:"",stops:[],initial:0,offset:16,closeable:!0,data:void 0,bar:!0},zt=L(Dt);var kt="#404040",Ft=(()=>{class t extends Ge{constructor(){super(...arguments),this.theme=C(Qe),this.initial=this.theme.color,this.$=this.items$.pipe(ae([]),re(),R()).subscribe(([e,i])=>{!e.length&&i.length&&(this.initial=this.theme.color,this.theme.color=kt),!i.length&&e.length&&(this.theme.color=this.initial)})}static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=$(t)))(o||t)}})()}static{this.\u0275prov=H({token:t,factory:()=>new t(Ye,St,C(zt)),providedIn:"root"})}}return t})(),at=(()=>{class t extends qe{static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=$(t)))(o||t)}})()}static{this.\u0275dir=F({type:t,selectors:[["ng-template","tuiSheetDialog",""]],inputs:{options:[0,"tuiSheetDialogOptions","options"],open:[0,"tuiSheetDialog","open"]},outputs:{openChange:"tuiSheetDialogChange"},features:[u([We(Ft)]),ue]})}}return t})();var wt={transform:"scale(0.95)",opacity:"0.6",background:"rgba(146, 153, 162, 0.12)"};function Mt(t,r){for(let e=0;e<t.length;e++)if(t[e]?.identifier===r)return e;return-1}var st=(()=>{class t{constructor(){this.isIOS=C(G),this.el=j(),this.tuiTouchable="",this.isIOS&&N(this.el,"touchstart",{passive:!0}).pipe(ce(()=>this.onTouchStart()),ie(({touches:e})=>e[e.length-1]?.identifier),se(e=>ne(N(this.el,"touchmove",{passive:!0}).pipe(oe(({touches:i})=>this.hasTouchLeft(this.el,i,e??0))),N(this.el,"touchend")).pipe(M(1))),R()).subscribe(()=>{this.el.style.removeProperty("transform"),this.el.style.removeProperty("opacity"),this.el.style.removeProperty("background")})}get style(){return this.tuiTouchable||"transform"}hasTouchLeft(e,i,o){let{ownerDocument:a}=e,y=Mt(i,o);if(!a||y===-1)return!0;let{clientX:ut=0,clientY:pt=0}=i[y]??{};return!e.contains(a.elementFromPoint(ut,pt))}onTouchStart(){this.style!=="transform"?this.el.style.removeProperty("transition"):this.el.style.setProperty("transition","transform 0.2s"),this.el.style.setProperty(this.style,wt[this.style])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=F({type:t,selectors:[["","tuiTouchable",""]],inputs:{tuiTouchable:"tuiTouchable"}})}}return t})();var w=(()=>{class t{constructor(e){this.httpService=e,this.apiUrl="api/cards",this.cards=[]}addCard(e){let i={id:Date.now().toString(),name:e.name||""};return this.cards.push(i),z(i)}deleteCard(e){let i=this.cards.findIndex(o=>o.id===e);return i!==-1&&this.cards.splice(i,1),z(void 0)}getCardById(e){return z(this.cards.find(i=>i.id===e))}getCards(){return z(this.cards)}updateCard(e,i){let o=this.cards.findIndex(a=>a.id===e);return o!==-1?(this.cards[o]=v(v({},this.cards[o]),i),z(this.cards[o])):z(void 0)}static{this.\u0275fac=function(i){return new(i||t)(de(De))}}static{this.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Ht=["*"];function Pt(t,r){t&1&&(p(0),B(1),m())}var ct=(()=>{class t{onClick(e){e.preventDefault(),e.stopPropagation(),this.cardEntityHttpService.addCard(this.card),this.add.emit()}constructor(e){this.cardEntityHttpService=e,this.add=new le}static{this.\u0275fac=function(i){return new(i||t)(_(w))}}static{this.\u0275cmp=l({type:t,selectors:[["app-add-card-feature"]],hostBindings:function(i,o){i&1&&b("click",function(y){return o.onClick(y)})},inputs:{card:"card"},outputs:{add:"add"},features:[u([D("addCardFeature")])],ngContentSelectors:Ht,decls:1,vars:1,consts:[[4,"transloco","translocoRead"]],template:function(i,o){i&1&&(A(),c(0,Pt,2,0,"ng-container",0)),i&2&&s("translocoRead","addCardFeature")},dependencies:[S],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}}return t})();function It(t,r){if(t&1){let e=E();p(0),d(1,"form",1)(2,"tui-textfield",2),g(3,"input",3),h(),d(4,"app-add-card-feature",4),b("add",function(){P(e);let o=f();return I(o.onAdd())}),d(5,"button",5),x(6),h()()(),m()}if(t&2){let e=r.$implicit,i=f();n(),s("formGroup",i.formGroup),n(2),s("placeholder",e("formGroup.name.placeholder")),n(),s("card",i.newCard),n(2),T(" ",e("formGroup.button")," ")}}var dt=(()=>{class t{get newCard(){return v({},this.formGroup.getRawValue())}constructor(e){this.formBuilder=e,this.context=W(),this.formGroup=this.formBuilder.group({name:this.formBuilder.control("",{nonNullable:!0,validators:[we.required]})})}onAdd(){this.context.completeWith(!1)}static{this.\u0275fac=function(i){return new(i||t)(_(Ee))}}static{this.\u0275cmp=l({type:t,selectors:[["app-add-card-modal"]],features:[u([D("addCardModalComponent")])],decls:1,vars:1,consts:[[4,"transloco","translocoPrefix"],["tuiForm","m",3,"formGroup"],["tuiTextfieldSize","l"],["formControlName","name","tuiTextfield","",3,"placeholder"],[3,"add","card"],["appearance","primary","size","xl","tuiButton","","type","submit",1,"w-100"]],template:function(i,o){i&1&&c(0,It,7,4,"ng-container",0),i&2&&s("translocoPrefix","addCardModalComponent")},dependencies:[Ae,Pe,Fe,Me,He,Ie,Oe,J,Ze,Ke,Q,S,U,ct],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{--t-shadow: none}[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-block-end:inherit}"],changeDetection:0})}}return t})();var Ot=["*"];function Et(t,r){t&1&&g(0,"app-add-card-modal")}function At(t,r){if(t&1){let e=E();p(0),B(1),c(2,Et,1,0,"ng-template",1),xe("tuiSheetDialogChange",function(o){P(e);let a=f();return be(a.open,o)||(a.open=o),I(o)}),m()}if(t&2){let e=f();n(2),ye("tuiSheetDialog",e.open)}}var lt=(()=>{class t{onClick(e){e.preventDefault(),e.stopPropagation(),this.open=!0}constructor(){this.open=!1}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-open-add-card-modal-feature"]],hostBindings:function(i,o){i&1&&b("click",function(y){return o.onClick(y)})},features:[u([D("openAddCardModalFeature")])],ngContentSelectors:Ot,decls:1,vars:1,consts:[[4,"transloco","translocoRead"],[3,"tuiSheetDialogChange","tuiSheetDialog"]],template:function(i,o){i&1&&(A(),c(0,At,3,1,"ng-container",0)),i&2&&s("translocoRead","openAddCardModalFeature")},dependencies:[S,dt,at],styles:["[_nghost-%COMP%]{display:block;margin:1.5rem 1rem}"],changeDetection:0})}}return t})();function Bt(t,r){if(t&1&&(d(0,"div",2),g(1,"app-zero-data",3),d(2,"div")(3,"app-open-add-card-modal-feature")(4,"button",4),x(5),h()()()()),t&2){let e=f().$implicit;n(),s("descripiton",e("zeroData.description"))("title",e("zeroData.title")),n(4),T(" ",e("button.addCard")," ")}}function Rt(t,r){if(t&1&&(p(0),d(1,"tui-app-bar",1),x(2),h(),c(3,Bt,6,3,"div",2),g(4,"app-nav-bar"),m()),t&2){let e=r.$implicit,i=f();n(2),T(" ",e("title")," "),n(),he(i.cards.length===0?3:-1)}}var Jo=(()=>{class t{constructor(e,i,o,a){this.cardEntityHttpService=e,this.destroyService=i,this.pageTitleService=o,this.translocoService=a,this.APP_ROUTE=K,this.cards=[],this.open=!1,this.options={closeable:!1},this.setPageTitle(),this.cardEntityHttpService.getCards().pipe(Y(this.destroyService)).subscribe(y=>{this.cards=y})}setPageTitle(){this.translocoService.selectTranslate("title",{},{scope:"cardsPage"}).pipe(Y(this.destroyService),M(1)).subscribe(e=>{this.pageTitleService.setTitle(e)})}static{this.\u0275fac=function(i){return new(i||t)(_(w),_(Xe),_(et),_(ze))}}static{this.\u0275cmp=l({type:t,selectors:[["app-card-list-page"]],features:[u([D("cardListPage"),{provide:G,useValue:!1}])],decls:1,vars:1,consts:[[4,"transloco","translocoRead"],[1,"flex-none"],[1,"flex-grow-1","d-flex","flex-column","justify-between"],[3,"descripiton","title"],["appearance","secondary","tuiButton","","tuiTouchable","transform","type","button",1,"w-100"]],template:function(i,o){i&1&&c(0,Rt,5,2,"ng-container",0),i&2&&s("translocoRead","cardListPage")},dependencies:[U,Je,S,lt,st,it,tt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],changeDetection:0})}}return t})();export{Jo as CardListPageComponent};
