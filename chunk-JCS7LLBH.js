var o=function(t){return t.ADD="add",t.AI_HELPER="ai-helper",t.APP="app",t.CARD="card",t.CARDS="cards",t.CASHBACKS="cashbacks",t.EDIT="edit",t}(o||{}),e=[{path:o.APP,loadComponent:()=>import("./chunk-GQPP62MO.js").then(t=>t.AppPageComponent),children:[{path:o.CASHBACKS,loadComponent:()=>import("./chunk-MFRSB42Z.js").then(t=>t.CashbacksPageComponent),children:[{path:"",loadComponent:()=>import("./chunk-MBXBYOSK.js").then(t=>t.CashbackListPageComponent)}]},{path:o.CARDS,loadComponent:()=>import("./chunk-EAO7RCUB.js").then(t=>t.CardsPageComponent),children:[{path:"",loadComponent:()=>import("./chunk-EYS6IVN6.js").then(t=>t.CardListPageComponent)}]},{path:o.AI_HELPER,loadComponent:()=>import("./chunk-KCJDSG6J.js").then(t=>t.AiHelperPageComponent)},{path:"",redirectTo:o.CARDS,pathMatch:"full"}]},{path:"",redirectTo:o.APP,pathMatch:"full"},{path:"**",redirectTo:o.APP}];export{o as a,e as b};
