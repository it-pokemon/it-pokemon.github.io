import{g as A,j}from"./chunk-6JDZXLNM.js";import{a as q}from"./chunk-KSMPRWFV.js";import{A as R,F as z,S as E,va as S}from"./chunk-TR2SAYUZ.js";import{$a as I,Fa as C,Gb as x,Hb as k,Ia as T,Ib as h,Jb as b,Kb as M,Mb as O,Nb as P,Pb as w,Rb as B,Va as u,Wa as y,cb as m,eb as d,jb as p,pa as o,pb as r,rc as D,sb as _,xb as a,yb as s,zb as f}from"./chunk-MEKU6LLM.js";var U=65536,g=class{constructor(c){this.$implicit=c}},F=(()=>{class i{constructor(){this.viewContainer=o(I),this.templateRef=o(y)}set tuiRepeatTimesOf(e){let t=Math.floor(z(e,0,U)),{length:n}=this.viewContainer;e<n?this.removeContainers(n-e):this.addContainers(t)}addContainers(e){for(let t=this.viewContainer.length;t<e;t++)this.viewContainer.createEmbeddedView(this.templateRef,new g(t))}removeContainers(e){for(let t=0;t<e;t++)this.viewContainer.remove()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275dir=d({type:i,selectors:[["","tuiRepeatTimes","","tuiRepeatTimesOf",""]],inputs:{tuiRepeatTimesOf:"tuiRepeatTimesOf"}})}}return i})();var V=["tuiTabBarItem",""],N=["*"];function H(i,c){if(i&1&&(a(0,"span",4),w(1),s()),i&2){let e=c.ngIf,t=k();r("@tuiScaleIn",t.options),u(),B(" ",t.format(e)," ")}}var L=["tuiTabBar",""];function Y(i,c){i&1&&f(0,"div",2)}var $=(()=>{class i{constructor(){this.options=j(o(S)),this.icon="",this.badge=null}format(e){return e>999?"999+":String(e)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=m({type:i,selectors:[["button","tuiTabBarItem",""],["a","tuiTabBarItem",""]],inputs:{icon:"icon",badge:"badge"},attrs:V,ngContentSelectors:N,decls:5,vars:2,consts:[[1,"t-icon",3,"icon"],[1,"t-wrapper"],["class","t-badge",4,"ngIf"],[1,"t-text"],[1,"t-badge"]],template:function(t,n){t&1&&(h(),f(0,"tui-icon",0),a(1,"span",1),p(2,H,2,2,"span",2),s(),a(3,"span",3),b(4),s()),t&2&&(r("icon",n.icon),u(2),r("ngIf",n.badge))},dependencies:[D,q],styles:["[_nghost-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;flex:1 0;font:inherit;flex-direction:column;align-items:center;overflow:hidden}[_nghost-%COMP%]:nth-child(1){color:var(--tui-tab-1, inherit)}[_nghost-%COMP%]:nth-child(2){color:var(--tui-tab-2, inherit)}[_nghost-%COMP%]:nth-child(3){color:var(--tui-tab-3, inherit)}[_nghost-%COMP%]:nth-child(4){color:var(--tui-tab-4, inherit)}[_nghost-%COMP%]:nth-child(5){color:var(--tui-tab-5, inherit)}[_nghost-%COMP%]:nth-child(6){color:var(--tui-tab-6, inherit)}[_nghost-%COMP%]:nth-child(7){color:var(--tui-tab-7, inherit)}[_nghost-%COMP%]:nth-child(8){color:var(--tui-tab-8, inherit)}[_nghost-%COMP%]:nth-child(9){color:var(--tui-tab-9, inherit)}[_nghost-%COMP%]:nth-child(10){color:var(--tui-tab-10, inherit)}.t-icon[_ngcontent-%COMP%]{inline-size:1.75rem;block-size:1.75rem;margin:.375rem 0 .125rem;pointer-events:none;border:.125rem solid transparent}.t-wrapper[_ngcontent-%COMP%]{position:absolute;top:.125rem;left:1rem;display:flex;inline-size:100%;justify-content:center;pointer-events:none}.t-badge[_ngcontent-%COMP%]{display:flex;block-size:1.125rem;min-inline-size:1.125rem;align-items:center;justify-content:center;padding:0 .25rem;border-radius:1rem;font-size:.8125rem;box-sizing:border-box;color:var(--tui-background-base);background:var(--tui-status-negative)}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-inline-size:100%;pointer-events:none}"],data:{animation:[A]},changeDetection:0})}}return i})(),bt=(()=>{class i{constructor(){this.tabs=R,this.quantity=4,this.activeItemIndex=NaN,this.activeItemIndexChange=new C}setActive(e){E(e)&&this.updateIndex(this.tabs.toArray().findIndex(({nativeElement:t})=>t===e))}get style(){return`--tui-tab-${this.activeItemIndex+1}: var(--tui-active-color)`}updateIndex(e){this.activeItemIndex=e,this.activeItemIndexChange.emit(e)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=m({type:i,selectors:[["nav","tuiTabBar",""]],contentQueries:function(t,n,v){if(t&1&&M(v,$,4,T),t&2){let l;O(l=P())&&(n.tabs=l)}},hostVars:2,hostBindings:function(t,n){t&1&&x("click",function(l){return n.setActive(l.target)}),t&2&&_(n.style)},inputs:{quantity:"quantity",activeItemIndex:"activeItemIndex"},outputs:{activeItemIndexChange:"activeItemIndexChange"},attrs:L,ngContentSelectors:N,decls:3,vars:1,consts:[[1,"t-skeletons"],["class","t-skeleton",4,"tuiRepeatTimes","tuiRepeatTimesOf"],[1,"t-skeleton"]],template:function(t,n){t&1&&(h(),b(0),a(1,"div",0),p(2,Y,1,0,"div",1),s()),t&2&&(u(2),r("tuiRepeatTimesOf",n.quantity))},dependencies:[F],styles:['[_nghost-%COMP%]{--tui-active-color: var(--tui-text-action);position:relative;display:flex;font: .625rem/.75rem -apple-system,BlinkMacSystemFont,system-ui,Roboto,Segoe UI,sans-serif;block-size:var(--tui-height-l);color:var(--tui-text-secondary);-webkit-backdrop-filter:blur(.3125rem);backdrop-filter:blur(.3125rem)}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";background:var(--tui-background-base-alt);box-shadow:inset 0 1px var(--tui-border-normal);opacity:.8}[tuiTheme=dark]   [_nghost-%COMP%]:before{opacity:.7}.t-skeletons[_ngcontent-%COMP%]{display:none;block-size:100%;inline-size:100%;justify-content:space-around}.t-skeletons[_ngcontent-%COMP%]:first-child{display:flex}.t-skeleton[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;animation:tuiSkeletonVibe ease-in-out 1s infinite alternate}.t-skeleton[_ngcontent-%COMP%]:before{content:"";inline-size:1.375rem;block-size:1.375rem;margin-bottom:.5rem;border-radius:100%;background:var(--tui-background-neutral-2)}.t-skeleton[_ngcontent-%COMP%]:after{content:"";inline-size:2.5rem;block-size:.375rem;border-radius:1rem;background:var(--tui-background-neutral-2)}'],changeDetection:0})}}return i})();export{$ as a,bt as b};
