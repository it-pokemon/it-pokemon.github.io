import"./chunk-BYXBJQAS.js";import"./chunk-BYXBJQAS.js";import{a as F,b as H}from"./chunk-2A3CFWF6.js";import{a as D}from"./chunk-EMMFSUAH.js";import"./chunk-ZEHIKFQY.js";import{a as z}from"./chunk-HRYS73DI.js";import{d as R}from"./chunk-U4XGJVEI.js";import"./chunk-33ZGEYMR.js";import{a as s}from"./chunk-EDJ5LWVM.js";import"./chunk-2KJTN3SZ.js";import"./chunk-RS4BRTE7.js";import"./chunk-6JDZXLNM.js";import{b as B}from"./chunk-KSMPRWFV.js";import{fb as w}from"./chunk-TR2SAYUZ.js";import{Ab as T,Bb as P,Hb as f,N as u,Oc as j,Pb as x,Pc as E,Rb as _,Rc as L,Va as d,Vb as I,Za as n,a as r,ca as p,cb as g,ja as k,jb as m,oa as v,pb as h,t as o,tb as C,xb as S,yb as y,zb as l}from"./chunk-MEKU6LLM.js";var U=(()=>{class i{constructor(t){this.httpService=t,this.apiUrl="api/cashback",this.cashbacks=[{id:s.string.uuid(),name:"\u041C\u0430\u0433\u043D\u0438\u0442 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A",description:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043B\u044F \u0434\u043E\u043C\u0430",bonus:"\u041A\u044D\u0448\u0431\u0435\u043A 21%",condition:"\u041D\u0430 \u043E\u0434\u043D\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D \u043E\u0442 1000 \u0420",date:"\u0414\u043E 9 \u043C\u0430\u0440\u0442\u0430"},{id:s.string.uuid(),name:"\u0414\u0435\u043B\u0438\u043C\u043E\u0431\u0438\u043B\u044C",description:"\u0421\u0435\u0440\u0438\u0432\u0438\u0441 \u043A\u0430\u0440\u0448\u0435\u0440\u0438\u043D\u0433\u0430",bonus:"\u0421\u043A\u0438\u0434\u043A\u0430 700 \u0420",condition:"\u041D\u0430 \u043E\u0434\u043D\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D",date:"\u0414\u043E 28 \u0444\u0435\u0432\u0440\u0430\u043B\u044F"},{id:s.string.uuid(),name:"\u041A\u0443\u043F\u0435\u0440",description:"\u0421\u0435\u0440\u0438\u0432\u0438\u0441 \u0434\u043E\u0442\u0441\u0430\u0432\u043A\u0438 \u0438\u0437 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432",bonus:"\u0421\u043A\u0438\u0434\u043A\u0430 900 \u0420",condition:"\u041D\u0430 \u043E\u0434\u043D\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D \u043E\u0442 3000 \u0420",date:"\u0414\u043E 28 \u0444\u0435\u0432\u0440\u0430\u043B\u044F"}]}addCashback(t){let e={id:Date.now().toString(),name:t.name||"",description:t.description||"",bonus:t.bonus||"",condition:t.condition||"",date:t.date||""};return this.cashbacks.push(e),o(e)}deleteCashback(t){let e=this.cashbacks.findIndex(a=>a.id===t);return e!==-1&&this.cashbacks.splice(e,1),o(void 0)}getCashbackById(t){return o(this.cashbacks.find(e=>e.id===t))}getCashbacks(){return o(this.cashbacks)}updateCashback(t,e){let a=this.cashbacks.findIndex(c=>c.id===t);return a!==-1?(this.cashbacks[a]=r(r({},this.cashbacks[a]),e),o(this.cashbacks[a])):o(void 0)}static{this.\u0275fac=function(e){return new(e||i)(v(D))}}static{this.\u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function $(i,b){if(i&1&&l(0,"app-zero-data",1),i&2){let t=f().$implicit;h("descripiton",t("zeroData.description"))("title",t("zeroData.title"))}}function N(i,b){if(i&1&&(T(0),S(1,"tui-app-bar"),x(2),y(),m(3,$,1,2,"app-zero-data",1),l(4,"app-nav-bar"),P()),i&2){let t=b.$implicit,e=f();d(2),_(" ",t("title")," "),d(),C(e.cashbacks.length===0?3:-1)}}var st=(()=>{class i{constructor(t,e,a,c){this.cashbackEntityHttpService=t,this.destroyService=e,this.pageTitleService=a,this.translocoService=c,this.APP_ROUTE=R,this.cashbacks=[],this.open=!1,this.options={closeable:!1},this.setPageTitle(),this.cashbackEntityHttpService.getCashbacks().pipe(p(this.destroyService)).subscribe(A=>{this.cashbacks=A})}setPageTitle(){this.translocoService.selectTranslate("title",{},{scope:"cashbackPage"}).pipe(p(this.destroyService),u(1)).subscribe(t=>{this.pageTitleService.setTitle(t)})}static{this.\u0275fac=function(e){return new(e||i)(n(U),n(w),n(B),n(j))}}static{this.\u0275cmp=g({type:i,selectors:[["app-cashback-list-page"]],features:[I([L("cashbackListPage")])],decls:1,vars:1,consts:[[4,"transloco","translocoRead"],[3,"descripiton","title"]],template:function(e,a){e&1&&m(0,N,5,2,"ng-container",0),e&2&&h("translocoRead","cashbackListPage")},dependencies:[E,z,F,H],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}}return i})();export{st as CashbackListPageComponent};
