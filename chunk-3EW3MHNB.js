import{d as H,e as R,f as U,g as q,j as J,k as K,l as Q}from"./chunk-VVKMRDB6.js";import{a as D,g as $}from"./chunk-S4JXNJ5R.js";import"./chunk-L2IMDIYJ.js";import{a as Z}from"./chunk-AWSCZWG7.js";import{a as V}from"./chunk-5IZT5CXR.js";import"./chunk-33ZGEYMR.js";import{a as d}from"./chunk-EDJ5LWVM.js";import"./chunk-542GN2AU.js";import{n as z}from"./chunk-YYZSG4CE.js";import{d as N,e as G}from"./chunk-HWWXFXIF.js";import{Ha as F,ba as B}from"./chunk-WWZAX2Y5.js";import{Ab as I,Bb as E,Hb as h,N as k,Oc as L,Pb as c,Pc as A,Qb as p,Rb as b,Rc as j,Va as n,Vb as w,Za as m,a as g,ca as C,cb as T,ja as P,jb as v,oa as S,pb as u,t as s,tb as _,ub as y,vb as M,wb as O,xb as a,yb as o,zb as x}from"./chunk-MEKU6LLM.js";var W=(()=>{class i{constructor(t){this.httpService=t,this.apiUrl="api/cashback",this.cashbacks=[{id:d.string.uuid(),name:"\u041C\u0430\u0433\u043D\u0438\u0442 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A",description:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043B\u044F \u0434\u043E\u043C\u0430",bonus:"\u041A\u044D\u0448\u0431\u0435\u043A 21%",condition:"\u041D\u0430 \u043E\u0434\u043D\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D \u043E\u0442 1000 \u0420",date:"\u0414\u043E 9 \u043C\u0430\u0440\u0442\u0430"},{id:d.string.uuid(),name:"\u0414\u0435\u043B\u0438\u043C\u043E\u0431\u0438\u043B\u044C",description:"\u0421\u0435\u0440\u0438\u0432\u0438\u0441 \u043A\u0430\u0440\u0448\u0435\u0440\u0438\u043D\u0433\u0430",bonus:"\u0421\u043A\u0438\u0434\u043A\u0430 700 \u0420",condition:"\u041D\u0430 \u043E\u0434\u043D\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D",date:"\u0414\u043E 28 \u0444\u0435\u0432\u0440\u0430\u043B\u044F"},{id:d.string.uuid(),name:"\u041A\u0443\u043F\u0435\u0440",description:"\u0421\u0435\u0440\u0438\u0432\u0438\u0441 \u0434\u043E\u0442\u0441\u0430\u0432\u043A\u0438 \u0438\u0437 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432",bonus:"\u0421\u043A\u0438\u0434\u043A\u0430 900 \u0420",condition:"\u041D\u0430 \u043E\u0434\u043D\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D \u043E\u0442 3000 \u0420",date:"\u0414\u043E 28 \u0444\u0435\u0432\u0440\u0430\u043B\u044F"},{id:d.string.uuid(),name:"\u041A\u0443\u043F\u0435\u0440",description:"\u0421\u0435\u0440\u0438\u0432\u0438\u0441 \u0434\u043E\u0442\u0441\u0430\u0432\u043A\u0438 \u0438\u0437 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432",bonus:"\u0421\u043A\u0438\u0434\u043A\u0430 900 \u0420",condition:"\u041D\u0430 \u043E\u0434\u043D\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D \u043E\u0442 3000 \u0420",date:"\u0414\u043E 28 \u0444\u0435\u0432\u0440\u0430\u043B\u044F"},{id:d.string.uuid(),name:"\u041A\u0443\u043F\u0435\u0440",description:"\u0421\u0435\u0440\u0438\u0432\u0438\u0441 \u0434\u043E\u0442\u0441\u0430\u0432\u043A\u0438 \u0438\u0437 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432",bonus:"\u0421\u043A\u0438\u0434\u043A\u0430 900 \u0420",condition:"\u041D\u0430 \u043E\u0434\u043D\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D \u043E\u0442 3000 \u0420",date:"\u0414\u043E 28 \u0444\u0435\u0432\u0440\u0430\u043B\u044F"},{id:d.string.uuid(),name:"\u041A\u0443\u043F\u0435\u0440",description:"\u0421\u0435\u0440\u0438\u0432\u0438\u0441 \u0434\u043E\u0442\u0441\u0430\u0432\u043A\u0438 \u0438\u0437 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432",bonus:"\u0421\u043A\u0438\u0434\u043A\u0430 900 \u0420",condition:"\u041D\u0430 \u043E\u0434\u043D\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D \u043E\u0442 3000 \u0420",date:"\u0414\u043E 28 \u0444\u0435\u0432\u0440\u0430\u043B\u044F"}]}addCashback(t){let e={id:Date.now().toString(),name:t.name||"",description:t.description||"",bonus:t.bonus||"",condition:t.condition||"",date:t.date||""};return this.cashbacks.push(e),s(e)}deleteCashback(t){let e=this.cashbacks.findIndex(r=>r.id===t);return e!==-1&&this.cashbacks.splice(e,1),s(void 0)}getCashbackById(t){return s(this.cashbacks.find(e=>e.id===t))}getCashbacks(){return s(this.cashbacks)}updateCashback(t,e){let r=this.cashbacks.findIndex(f=>f.id===t);return r!==-1?(this.cashbacks[r]=g(g({},this.cashbacks[r]),e),s(this.cashbacks[r])):s(void 0)}static{this.\u0275fac=function(e){return new(e||i)(S(D))}}static{this.\u0275prov=P({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function et(i,l){if(i&1&&(a(0,"div",2),x(1,"app-zero-data",4),a(2,"div")(3,"app-open-add-card-modal-feature")(4,"button",5),c(5),o()()()()),i&2){let t=h().$implicit;n(),u("descripiton",t("zeroData.description"))("title",t("zeroData.title")),n(4),b(" ",t("button.addCard")," ")}}function it(i,l){if(i&1&&(a(0,"tui-swipe-actions",7)(1,"div",8)(2,"div",9)(3,"div")(4,"h4",10)(5,"b"),c(6),o()(),a(7,"div",11)(8,"div"),c(9),o(),a(10,"div"),c(11),o()()(),a(12,"div")(13,"h5",10)(14,"b"),c(15),o()(),a(16,"div",11),c(17),o()()()()()),i&2){let t=l.$implicit;u("autoClose",!0),n(6),p(t.bonus),n(3),p(t.condition),n(2),p(t.date),n(4),p(t.name),n(2),p(t.description)}}function nt(i,l){if(i&1&&(a(0,"tui-scrollbar",3)(1,"div",6),M(2,it,18,6,"tui-swipe-actions",7,y),o(),a(4,"app-open-add-card-modal-feature")(5,"button",5),c(6),o()()()),i&2){let t=h().$implicit,e=h();u("hidden",!0),n(2),O(e.cashbacks),n(4),b(" ",t("button.addCard")," ")}}function at(i,l){if(i&1&&(I(0),a(1,"tui-app-bar",1),c(2),o(),v(3,et,6,3,"div",2)(4,nt,7,2,"tui-scrollbar",3),x(5,"app-nav-bar"),E()),i&2){let t=l.$implicit,e=h();n(2),b(" ",t("title")," "),n(),_(e.cashbacks.length===0?3:-1),n(),_(e.cashbacks.length>0?4:-1)}}var xt=(()=>{class i{constructor(t,e,r,f){this.cashbackEntityHttpService=t,this.destroyService=e,this.pageTitleService=r,this.translocoService=f,this.APP_ROUTE=V,this.cashbacks=[],this.open=!1,this.options={closeable:!1},this.setPageTitle(),this.cashbackEntityHttpService.getCashbacks().pipe(C(this.destroyService)).subscribe(X=>{this.cashbacks=X})}setPageTitle(){this.translocoService.selectTranslate("title",{},{scope:"cashbackPage"}).pipe(C(this.destroyService),k(1)).subscribe(t=>{this.pageTitleService.setTitle(t)})}static{this.\u0275fac=function(e){return new(e||i)(m(W),m(N),m(G),m(L))}}static{this.\u0275cmp=T({type:i,selectors:[["app-cashback-list-page"]],features:[w([j("cashbackListPage")])],decls:1,vars:1,consts:[[4,"transloco","translocoRead"],[1,"flex-none"],[1,"flex-grow-1","d-flex","flex-column","justify-between"],[1,"flex-grow-1",3,"hidden"],[3,"descripiton","title"],["appearance","secondary","tuiButton","","tuiTouchable","transform","type","button",1,"w-100"],[1,"card-container"],["tuiTouchable","transform",1,"flex-shrink-0",3,"autoClose"],[1,"cashback"],["tuiAppearance","floating","tuiCardLarge",""],["tuiTitle",""],["tuiSubtitle",""]],template:function(e,r){e&1&&v(0,at,6,3,"ng-container",0),e&2&&u("translocoRead","cashbackListPage")},dependencies:[A,Z,K,Q,J,F,H,z,R,U,B,q,$],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}[_nghost-%COMP%]   .cashback[_ngcontent-%COMP%]{margin:1.5rem 1rem}[_nghost-%COMP%]   .cashback[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   tui-app-bar[_ngcontent-%COMP%]{border-bottom:1px solid #e4e4e4}[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]{padding-top:1rem;display:flex;flex-direction:column;gap:1rem;inline-size:21rem;margin:0 auto}[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   tui-swipe-actions[_ngcontent-%COMP%]{margin:-1.5rem}[_nghost-%COMP%]   app-card-list-item-entity[_ngcontent-%COMP%]{margin:1.5rem 1rem}[_nghost-%COMP%]   app-open-delete-card-modal-feature[_ngcontent-%COMP%]{--t-distance: none}[_nghost-%COMP%]   app-open-add-card-modal-feature[_ngcontent-%COMP%]{margin:1rem}"],changeDetection:0})}}return i})();export{xt as CashbackListPageComponent};
