import{Aa as E,ha as g,ya as R,za as h}from"./chunk-WWZAX2Y5.js";import{Aa as v,Ia as a,La as s,Vb as O,cb as b,eb as m,i as d,ja as r,l as f,ma as c,pa as n,qb as I}from"./chunk-MEKU6LLM.js";var z=(()=>{class e extends f{ngOnDestroy(){this.next(),this.complete()}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})()}static{this.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var F=(()=>{class e{constructor(){this.pageTitle=s("")}setTitle(t){this.pageTitle.set(t)}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var k=typeof ResizeObserver<"u"?ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},_="content-box",l=_,x=new c("[WA_RESIZE_OPTION_BOX]",{providedIn:"root",factory:()=>l}),S=x,y=(()=>{class e extends d{constructor(){let t=n(a).nativeElement,o=n(S);super(i=>{let p=new k(T=>i.next(T));return p.observe(t,{box:o}),()=>{p.disconnect()}})}static \u0275fac=function(o){return new(o||e)};static \u0275prov=r({token:e,factory:e.\u0275fac})}return e})(),U=(()=>{class e{waResizeObserver=n(y);box=l;static \u0275fac=function(o){return new(o||e)};static \u0275dir=m({type:e,selectors:[["","waResizeObserver",""]],inputs:{waResizeBox:[0,"box","waResizeBox"]},outputs:{waResizeObserver:"waResizeObserver"},features:[O([y,{provide:S,useFactory:()=>n(a).nativeElement.getAttribute("waResizeBox")||l}])]})}return e})();var C=new c("[WA_RESIZE_OBSERVER_SUPPORT]",{providedIn:"root",factory:()=>!!n(g).ResizeObserver});var Y=(()=>{class e{constructor(){this.resolver=E(),this.backgroundSrc=s(null),this.iconSrc=s(this.resolve(n(R,{self:!0,optional:!0})||n(h,{self:!0,optional:!0})))}set icon(t){this.iconSrc.set(this.resolve(t))}set background(t){this.backgroundSrc.set(this.resolve(t))}resolve(t){return t?`url(${this.resolver(t)})`:null}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=b({type:e,selectors:[["tui-icon"]],hostVars:4,hostBindings:function(o,i){o&2&&I("--t-icon",i.iconSrc()||"url()")("--t-icon-bg",i.backgroundSrc())},inputs:{icon:"icon",background:"background"},decls:0,vars:0,template:function(o,i){},styles:[`tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover) and (pointer: fine){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;background:currentColor}
`],encapsulation:2,changeDetection:0})}}return e})();export{y as a,U as b,Y as c,z as d,F as e};
