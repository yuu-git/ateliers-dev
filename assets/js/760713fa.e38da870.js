"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[4960],{9976:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(4848),o=t(8453);const s={id:"technical-notebook-consistent-image-reproduction-method",slug:"/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method",category:"\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8",title:"ateliers.dev - \u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8 - \u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",sidebar_label:"\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",tags:["technical-notebook","openai-gpt","dall-e"],description:"ateliers.dev \u306e\u300c\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8\u300d\u5185\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002DALL-E \u306b\u3088\u308b\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002",image:"img/jpg/ateliers-dev-technical-notebook.jpg"},c="\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",a={id:"technical-notebook/openai-gpt/dall-e/technical-notebook-consistent-image-reproduction-method",title:"ateliers.dev - \u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8 - \u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",description:"ateliers.dev \u306e\u300c\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8\u300d\u5185\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002DALL-E \u306b\u3088\u308b\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method.md",sourceDirName:"technical-notebook/openai-gpt/dall-e",slug:"/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method",permalink:"/docs/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method",draft:!1,unlisted:!1,editUrl:"https://github.com/yuu-git/ateliers-dev/edit/master/docs/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method.md",tags:[{label:"technical-notebook",permalink:"/docs/tags/technical-notebook"},{label:"openai-gpt",permalink:"/docs/tags/openai-gpt"},{label:"dall-e",permalink:"/docs/tags/dall-e"}],version:"current",lastUpdatedAt:171488262e4,frontMatter:{id:"technical-notebook-consistent-image-reproduction-method",slug:"/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method",category:"\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8",title:"ateliers.dev - \u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8 - \u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",sidebar_label:"\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",tags:["technical-notebook","openai-gpt","dall-e"],description:"ateliers.dev \u306e\u300c\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8\u300d\u5185\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002DALL-E \u306b\u3088\u308b\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002",image:"img/jpg/ateliers-dev-technical-notebook.jpg"},sidebar:"technicalNotebookSidebar",previous:{title:"HTTP DELETE \u89e3\u8aac",permalink:"/docs/technical-notebook/dotnet/http-protocol/delete-method"},next:{title:"\u5f53\u30b5\u30a4\u30c8\u306e\u30a4\u30e1\u30fc\u30b8\u751f\u6210\u30e1\u30e2",permalink:"/docs/technical-notebook/openai-gpt/dall-e/my-site-image-generation-memo"}},d={},l=[{value:"1. \u76ee\u7684",id:"1-\u76ee\u7684",level:2},{value:"2. \u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",id:"2-\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",level:2},{value:"2.1. WEB\u30b5\u30a4\u30c8\u306e\u60c5\u5831\u3092\u899a\u3048\u3055\u305b\u308b",id:"21-web\u30b5\u30a4\u30c8\u306e\u60c5\u5831\u3092\u899a\u3048\u3055\u305b\u308b",level:3},{value:"2.2. \u753b\u50cf\u518d\u73fe\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u899a\u3048\u3055\u305b\u308b",id:"22-\u753b\u50cf\u518d\u73fe\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u899a\u3048\u3055\u305b\u308b",level:3},{value:"2.3. \u753b\u50cf\u518d\u73fe\u306e\u5b9f\u884c",id:"23-\u753b\u50cf\u518d\u73fe\u306e\u5b9f\u884c",level:3},{value:"3. \u307e\u3068\u3081",id:"3-\u307e\u3068\u3081",level:2}];function r(e){const n={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",children:"\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"[Created: 2024/04/27, Update: none(same as creation date) ]"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"DALL-E \u3092\u4f7f\u3063\u3066\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u3092\u884c\u3046\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"1-\u76ee\u7684",children:"1. \u76ee\u7684"}),"\n",(0,i.jsxs)(n.p,{children:["WEB\u30b5\u30a4\u30c8\u306e\u753b\u50cf\u3092\u3001\u751f\u6210AI (\u3053\u306e\u5834\u5408\u306f DALL-E) \u3092\u7528\u3044\u3066\u751f\u6210\u3057\u300c\u8ffd\u52a0\u3067\u5225\u306e\u753b\u50cf\u3092\u751f\u6210\u3057\u305f\u3044\u300d\u3068\u306a\u3063\u305f\u30b1\u30fc\u30b9\u306b\u304a\u3044\u3066\u3001\u7d71\u4e00\u611f\u306e\u3042\u308b\u753b\u50cf\u3092\u518d\u751f\u6210\u3057\u305f\u3044\u3068\u8003\u3048\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","\u3053\u3053\u3067\u306f\u3001\u305d\u306e\u305f\u3081\u306e\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"2-\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",children:"2. \u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53WEB\u30b5\u30a4\u30c8\u306e\u753b\u50cf\u3092\u751f\u6210\u3059\u308b\u5834\u5408\u3092\u4f8b\u3068\u3057\u3066\u3001\u624b\u9806\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u306a\u304a \u300c2.1.\u300d\u3068\u300c2.2.\u300d\u306e\u624b\u9806\u306f\u3001\u307e\u3068\u3081\u3066\u884c\u3063\u3066\u3082\u826f\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002",(0,i.jsx)(n.br,{}),"\n","\u4eca\u56de\u306f\u624b\u9806\u7d39\u4ecb\u3067\u3042\u308b\u305f\u3081\u3001\u5206\u3051\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"21-web\u30b5\u30a4\u30c8\u306e\u60c5\u5831\u3092\u899a\u3048\u3055\u305b\u308b",children:"2.1. WEB\u30b5\u30a4\u30c8\u306e\u60c5\u5831\u3092\u899a\u3048\u3055\u305b\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53WEB\u30b5\u30a4\u30c8\u3067\u306f\u300c\u30b5\u30a4\u30c8\u6848\u5185\u300d\u30da\u30fc\u30b8\u306b\u3066\u3001WEB\u30b5\u30a4\u30c8\u306e\u6982\u8981\u3084\u69cb\u9020\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","\u307e\u305a\u3053\u306e\u60c5\u5831\u3092 ChatGPT(DALL-E) \u306a\u3069\u306e AI \u306b\u899a\u3048\u3055\u305b\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e\u753b\u50cf\u306f\u3001\u30b5\u30a4\u30c8\u6848\u5185 (",(0,i.jsx)(n.code,{children:"site-guidance.md"}),") \u3092\u899a\u3048\u3055\u305b\u305f\u753b\u9762\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:t(1144).A+"",width:"793",height:"472"})}),"\n",(0,i.jsx)(n.h3,{id:"22-\u753b\u50cf\u518d\u73fe\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u899a\u3048\u3055\u305b\u308b",children:"2.2. \u753b\u50cf\u518d\u73fe\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u899a\u3048\u3055\u305b\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["\u6b21\u306b\u3001WEB\u30b5\u30a4\u30c8\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u753b\u50cf\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u899a\u3048\u3055\u305b\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","\u540c\u3058 [\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8] \u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u300c\u5f53\u30b5\u30a4\u30c8\u306e\u30a4\u30e1\u30fc\u30b8\u751f\u6210\u30e1\u30e2\u300d\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u3042\u308a\u307e\u3059\u306e\u3067\u3001\u3053\u308c\u3092\u53c2\u7167\u3055\u305b\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e\u753b\u50cf\u306f\u3001\u5f53\u30b5\u30a4\u30c8\u306e\u30a4\u30e1\u30fc\u30b8\u751f\u6210\u30e1\u30e2 (",(0,i.jsx)(n.code,{children:"image-generation-memo.md"}),") \u3092\u899a\u3048\u3055\u305b\u305f\u753b\u9762\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:t(3991).A+"",width:"773",height:"456"})}),"\n",(0,i.jsx)(n.p,{children:"\u3061\u3087\u3063\u3068\u5fdc\u7b54\u304c\u602a\u3057\u3044\u3051\u3069\u3001\u305f\u3076\u3093\u2026 \u5927\u4e08\u592b\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"23-\u753b\u50cf\u518d\u73fe\u306e\u5b9f\u884c",children:"2.3. \u753b\u50cf\u518d\u73fe\u306e\u5b9f\u884c"}),"\n",(0,i.jsx)(n.p,{children:"ChatGPT(DALL-E) \u306b\u5bfe\u3057\u3066\u3001\u899a\u3048\u3055\u305b\u305f\u60c5\u5831\u3092\u5143\u306b\u753b\u50cf\u518d\u73fe\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4eca\u56de\u306f\u3001\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8\u306e\u753b\u50cf\u518d\u73fe\u3092\u884c\u3044\u307e\u3057\u305f\u3002",(0,i.jsx)(n.br,{}),"\n","\u4ee5\u4e0b\u306e\u753b\u50cf\u306f\u3001ChatGPT(DALL-E) \u306b\u3088\u308b\u753b\u50cf\u518d\u73fe\u306e\u5b9f\u884c\u7d50\u679c\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:t(1834).A+"",width:"773",height:"756"})}),"\n",(0,i.jsx)(n.p,{children:"\u5c11\u3005\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8\u611f\u306f\u8584\u3044\u3067\u3059\u304c\u3001\u30c8\u30ec\u30fc\u30c9\u30de\u30fc\u30af\u3067\u3042\u308b\u300c\u5bb6\u3068\u6b6f\u8eca\u300d\u304c3D\u30de\u30c6\u30ea\u30a2\u30eb\u30c7\u30b6\u30a4\u30f3\u63cf\u304b\u308c\u3066\u3044\u307e\u3059\u3002\u8272\u8abf\u3082\u300c\u9ed2\u3068\u7dd1\u300d\u3067\u7d71\u4e00\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u4e00\u8cab\u6027\u304c\u3042\u308b\u3068\u8a00\u3048\u308b\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u60c5\u5831\u3092\u5143\u306b\u8abf\u6574\u3092\u884c\u3044\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u30de\u30c3\u30c1\u3059\u308b\u753b\u50cf\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3067\u3001WEB\u30b5\u30a4\u30c8\u5168\u4f53\u3067\u7d71\u4e00\u611f\u306e\u3042\u308b\u30a4\u30e1\u30fc\u30b8\u3092\u4fdd\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"3-\u307e\u3068\u3081",children:"3. \u307e\u3068\u3081"}),"\n",(0,i.jsx)(n.p,{children:"WEB\u30b5\u30a4\u30c8\u306e\u30a4\u30e1\u30fc\u30b8\u3068\u3057\u3066\u751f\u6210AI\u306e\u753b\u50cf\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u751f\u6210\u3057\u305f\u753b\u50cf\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u8a18\u9332\u3057\u3066\u304a\u304f\u3053\u3068\u3067\u3001\u5c06\u6765\u7684\u306b\u4e00\u8cab\u6027\u3092\u6301\u305f\u305b\u305f\u753b\u50cf\u3092\u518d\u751f\u6210\u3059\u308b\u305f\u3081\u306e\u53c2\u8003\u60c5\u5831\u3068\u3057\u3066\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002\n\u307e\u305fWEB\u30b5\u30a4\u30c8\u306e\u6848\u5185\u3084\u6982\u8981\u60c5\u5831\u3082\u307e\u3068\u3081\u3066\u304a\u304d\u3001\u30a4\u30e1\u30fc\u30b8\u751f\u6210\u306e\u88dc\u5b8c\u3092\u3059\u308b\u3053\u3068\u3067\u3001\u3088\u308a\u4e00\u8cab\u6027\u306e\u3042\u308b\u753b\u50cf\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u30d7\u30ed\u30f3\u30d7\u30c8\u3084\u30b5\u30a4\u30c8\u60c5\u5831\u3092\u307e\u3068\u3081\u305f\u308a\u3059\u308b\u4f5c\u696d\u306f\u5c11\u3005\u624b\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u304c\u3001\u751f\u6210AI\u306b\u30a4\u30e1\u30fc\u30b8\u3092\u751f\u6210\u3055\u305b\u3066\u3001\u306a\u304a\u304b\u3064WEB\u30b5\u30a4\u30c8\u5168\u4f53\u306e\u7d71\u4e00\u611f\u3092\u4fdd\u3064\u305f\u3081\u306b\u306f\u3001\u975e\u5e38\u306b\u4fbf\u5229\u306a\u65b9\u6cd5\u3067\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","\u5fc5\u8981\u3067\u3042\u308c\u3070\u9069\u5b9c\u3001\u8a18\u9332\u3057\u3066\u304a\u304f\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1144:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/explanation-001-68dacc4df796fd6f80d3b52b79590599.jpg"},3991:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/explanation-002-4667d2e36f9f44e0e0c54b5aaed27c63.jpg"},1834:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/explanation-003-bcdba653d8623aa9bdef1812d4cc3259.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);