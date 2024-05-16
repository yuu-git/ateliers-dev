"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[4960],{9976:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var s=i(4848),n=i(8453),o=i(4086),l=i(7316);i(8435);const c={id:"technical-notebook-consistent-image-reproduction-method",slug:"/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method",category:"\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8",title:"\u3010DALL-E\u3011\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5 | ateliers.dev",sidebar_label:"\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",tags:["AI","OpenAI-GPT","DALL-E"],description:"ateliers.dev \u306e\u300c\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8\u300d\u5185\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002DALL-E \u306b\u3088\u308b\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002",image:"img/jpg/ateliers-dev-technical-notebook.jpg"},r="\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",a={id:"technical-notebook/openai-gpt/dall-e/technical-notebook-consistent-image-reproduction-method",title:"\u3010DALL-E\u3011\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5 | ateliers.dev",description:"ateliers.dev \u306e\u300c\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8\u300d\u5185\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002DALL-E \u306b\u3088\u308b\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method.md",sourceDirName:"technical-notebook/openai-gpt/dall-e",slug:"/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method",permalink:"/docs/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method",draft:!1,unlisted:!1,editUrl:"https://github.com/yuu-git/ateliers-dev/edit/master/docs/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method.md",tags:[{label:"AI",permalink:"/docs/tags/ai"},{label:"OpenAI-GPT",permalink:"/docs/tags/open-ai-gpt"},{label:"DALL-E",permalink:"/docs/tags/dall-e"}],version:"current",frontMatter:{id:"technical-notebook-consistent-image-reproduction-method",slug:"/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method",category:"\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8",title:"\u3010DALL-E\u3011\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5 | ateliers.dev",sidebar_label:"\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",tags:["AI","OpenAI-GPT","DALL-E"],description:"ateliers.dev \u306e\u300c\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8\u300d\u5185\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002DALL-E \u306b\u3088\u308b\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002",image:"img/jpg/ateliers-dev-technical-notebook.jpg"},sidebar:"technicalNotebookSidebar",previous:{title:"HTTP DELETE \u89e3\u8aac",permalink:"/docs/technical-notebook/dotnet/http-protocol/delete-method"},next:{title:"\u5f53\u30b5\u30a4\u30c8\u306e\u30a4\u30e1\u30fc\u30b8\u751f\u6210\u30e1\u30e2",permalink:"/docs/technical-notebook/openai-gpt/dall-e/my-site-image-generation-memo"}},d={},h=[{value:"1. \u76ee\u7684",id:"1-\u76ee\u7684",level:2},{value:"2. \u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",id:"2-\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",level:2},{value:"2.1. WEB\u30b5\u30a4\u30c8\u306e\u60c5\u5831\u3092\u899a\u3048\u3055\u305b\u308b",id:"21-web\u30b5\u30a4\u30c8\u306e\u60c5\u5831\u3092\u899a\u3048\u3055\u305b\u308b",level:3},{value:"2.2. \u753b\u50cf\u518d\u73fe\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u899a\u3048\u3055\u305b\u308b",id:"22-\u753b\u50cf\u518d\u73fe\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u899a\u3048\u3055\u305b\u308b",level:3},{value:"2.3. \u753b\u50cf\u518d\u73fe\u306e\u5b9f\u884c",id:"23-\u753b\u50cf\u518d\u73fe\u306e\u5b9f\u884c",level:3},{value:"3. \u307e\u3068\u3081",id:"3-\u307e\u3068\u3081",level:2},{value:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306e\u63d0\u4f9b\u65b9\u6cd5\u3068\u9023\u7d61\u5148",id:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306e\u63d0\u4f9b\u65b9\u6cd5\u3068\u9023\u7d61\u5148",level:2}];function p(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",children:"\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5"}),"\n",(0,s.jsx)(o.A,{slug:"/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method",title:"\u3010DALL-E\u3011\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5 | ateliers.dev",created:"2024/04/27"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"DALL-E \u3092\u4f7f\u3063\u3066\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u3092\u884c\u3046\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"1-\u76ee\u7684",children:"1. \u76ee\u7684"}),"\n",(0,s.jsxs)(t.p,{children:["WEB\u30b5\u30a4\u30c8\u306e\u753b\u50cf\u3092\u3001\u751f\u6210AI (\u3053\u306e\u5834\u5408\u306f DALL-E) \u3092\u7528\u3044\u3066\u751f\u6210\u3057\u300c\u8ffd\u52a0\u3067\u5225\u306e\u753b\u50cf\u3092\u751f\u6210\u3057\u305f\u3044\u300d\u3068\u306a\u3063\u305f\u30b1\u30fc\u30b9\u306b\u304a\u3044\u3066\u3001\u7d71\u4e00\u611f\u306e\u3042\u308b\u753b\u50cf\u3092\u518d\u751f\u6210\u3057\u305f\u3044\u3068\u8003\u3048\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002",(0,s.jsx)(t.br,{}),"\n","\u3053\u3053\u3067\u306f\u3001\u305d\u306e\u305f\u3081\u306e\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"2-\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5",children:"2. \u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5"}),"\n",(0,s.jsx)(t.p,{children:"\u5f53WEB\u30b5\u30a4\u30c8\u306e\u753b\u50cf\u3092\u751f\u6210\u3059\u308b\u5834\u5408\u3092\u4f8b\u3068\u3057\u3066\u3001\u624b\u9806\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u306a\u304a \u300c2.1.\u300d\u3068\u300c2.2.\u300d\u306e\u624b\u9806\u306f\u3001\u307e\u3068\u3081\u3066\u884c\u3063\u3066\u3082\u826f\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002",(0,s.jsx)(t.br,{}),"\n","\u4eca\u56de\u306f\u624b\u9806\u7d39\u4ecb\u3067\u3042\u308b\u305f\u3081\u3001\u5206\u3051\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"21-web\u30b5\u30a4\u30c8\u306e\u60c5\u5831\u3092\u899a\u3048\u3055\u305b\u308b",children:"2.1. WEB\u30b5\u30a4\u30c8\u306e\u60c5\u5831\u3092\u899a\u3048\u3055\u305b\u308b"}),"\n",(0,s.jsxs)(t.p,{children:["\u5f53WEB\u30b5\u30a4\u30c8\u3067\u306f\u300c\u30b5\u30a4\u30c8\u6848\u5185\u300d\u30da\u30fc\u30b8\u306b\u3066\u3001WEB\u30b5\u30a4\u30c8\u306e\u6982\u8981\u3084\u69cb\u9020\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002",(0,s.jsx)(t.br,{}),"\n","\u307e\u305a\u3053\u306e\u60c5\u5831\u3092 ChatGPT(DALL-E) \u306a\u3069\u306e AI \u306b\u899a\u3048\u3055\u305b\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u4ee5\u4e0b\u306e\u753b\u50cf\u306f\u3001\u30b5\u30a4\u30c8\u6848\u5185 (",(0,s.jsx)(t.code,{children:"site-guidance.md"}),") \u3092\u899a\u3048\u3055\u305b\u305f\u753b\u9762\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:i(1144).A+"",width:"793",height:"472"})}),"\n",(0,s.jsx)(t.h3,{id:"22-\u753b\u50cf\u518d\u73fe\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u899a\u3048\u3055\u305b\u308b",children:"2.2. \u753b\u50cf\u518d\u73fe\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u899a\u3048\u3055\u305b\u308b"}),"\n",(0,s.jsxs)(t.p,{children:["\u6b21\u306b\u3001WEB\u30b5\u30a4\u30c8\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u753b\u50cf\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u899a\u3048\u3055\u305b\u307e\u3059\u3002",(0,s.jsx)(t.br,{}),"\n","\u540c\u3058 [\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8] \u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u300c\u5f53\u30b5\u30a4\u30c8\u306e\u30a4\u30e1\u30fc\u30b8\u751f\u6210\u30e1\u30e2\u300d\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u3042\u308a\u307e\u3059\u306e\u3067\u3001\u3053\u308c\u3092\u53c2\u7167\u3055\u305b\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u4ee5\u4e0b\u306e\u753b\u50cf\u306f\u3001\u5f53\u30b5\u30a4\u30c8\u306e\u30a4\u30e1\u30fc\u30b8\u751f\u6210\u30e1\u30e2 (",(0,s.jsx)(t.code,{children:"image-generation-memo.md"}),") \u3092\u899a\u3048\u3055\u305b\u305f\u753b\u9762\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:i(3991).A+"",width:"773",height:"456"})}),"\n",(0,s.jsx)(t.p,{children:"\u3061\u3087\u3063\u3068\u5fdc\u7b54\u304c\u602a\u3057\u3044\u3051\u3069\u3001\u305f\u3076\u3093\u2026 \u5927\u4e08\u592b\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"23-\u753b\u50cf\u518d\u73fe\u306e\u5b9f\u884c",children:"2.3. \u753b\u50cf\u518d\u73fe\u306e\u5b9f\u884c"}),"\n",(0,s.jsx)(t.p,{children:"ChatGPT(DALL-E) \u306b\u5bfe\u3057\u3066\u3001\u899a\u3048\u3055\u305b\u305f\u60c5\u5831\u3092\u5143\u306b\u753b\u50cf\u518d\u73fe\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u4eca\u56de\u306f\u3001\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8\u306e\u753b\u50cf\u518d\u73fe\u3092\u884c\u3044\u307e\u3057\u305f\u3002",(0,s.jsx)(t.br,{}),"\n","\u4ee5\u4e0b\u306e\u753b\u50cf\u306f\u3001ChatGPT(DALL-E) \u306b\u3088\u308b\u753b\u50cf\u518d\u73fe\u306e\u5b9f\u884c\u7d50\u679c\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:i(1834).A+"",width:"773",height:"756"})}),"\n",(0,s.jsx)(t.p,{children:"\u5c11\u3005\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8\u611f\u306f\u8584\u3044\u3067\u3059\u304c\u3001\u30c8\u30ec\u30fc\u30c9\u30de\u30fc\u30af\u3067\u3042\u308b\u300c\u5bb6\u3068\u6b6f\u8eca\u300d\u304c3D\u30de\u30c6\u30ea\u30a2\u30eb\u30c7\u30b6\u30a4\u30f3\u63cf\u304b\u308c\u3066\u3044\u307e\u3059\u3002\u8272\u8abf\u3082\u300c\u9ed2\u3068\u7dd1\u300d\u3067\u7d71\u4e00\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u4e00\u8cab\u6027\u304c\u3042\u308b\u3068\u8a00\u3048\u308b\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u3053\u306e\u60c5\u5831\u3092\u5143\u306b\u8abf\u6574\u3092\u884c\u3044\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u30de\u30c3\u30c1\u3059\u308b\u753b\u50cf\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3067\u3001WEB\u30b5\u30a4\u30c8\u5168\u4f53\u3067\u7d71\u4e00\u611f\u306e\u3042\u308b\u30a4\u30e1\u30fc\u30b8\u3092\u4fdd\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"3-\u307e\u3068\u3081",children:"3. \u307e\u3068\u3081"}),"\n",(0,s.jsx)(t.p,{children:"WEB\u30b5\u30a4\u30c8\u306e\u30a4\u30e1\u30fc\u30b8\u3068\u3057\u3066\u751f\u6210AI\u306e\u753b\u50cf\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u751f\u6210\u3057\u305f\u753b\u50cf\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u8a18\u9332\u3057\u3066\u304a\u304f\u3053\u3068\u3067\u3001\u5c06\u6765\u7684\u306b\u4e00\u8cab\u6027\u3092\u6301\u305f\u305b\u305f\u753b\u50cf\u3092\u518d\u751f\u6210\u3059\u308b\u305f\u3081\u306e\u53c2\u8003\u60c5\u5831\u3068\u3057\u3066\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002\n\u307e\u305fWEB\u30b5\u30a4\u30c8\u306e\u6848\u5185\u3084\u6982\u8981\u60c5\u5831\u3082\u307e\u3068\u3081\u3066\u304a\u304d\u3001\u30a4\u30e1\u30fc\u30b8\u751f\u6210\u306e\u88dc\u5b8c\u3092\u3059\u308b\u3053\u3068\u3067\u3001\u3088\u308a\u4e00\u8cab\u6027\u306e\u3042\u308b\u753b\u50cf\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u30d7\u30ed\u30f3\u30d7\u30c8\u3084\u30b5\u30a4\u30c8\u60c5\u5831\u3092\u307e\u3068\u3081\u305f\u308a\u3059\u308b\u4f5c\u696d\u306f\u5c11\u3005\u624b\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u304c\u3001\u751f\u6210AI\u306b\u30a4\u30e1\u30fc\u30b8\u3092\u751f\u6210\u3055\u305b\u3066\u3001\u306a\u304a\u304b\u3064WEB\u30b5\u30a4\u30c8\u5168\u4f53\u306e\u7d71\u4e00\u611f\u3092\u4fdd\u3064\u305f\u3081\u306b\u306f\u3001\u975e\u5e38\u306b\u4fbf\u5229\u306a\u65b9\u6cd5\u3067\u3059\u3002",(0,s.jsx)(t.br,{}),"\n","\u5fc5\u8981\u3067\u3042\u308c\u3070\u9069\u5b9c\u3001\u8a18\u9332\u3057\u3066\u304a\u304f\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306e\u63d0\u4f9b\u65b9\u6cd5\u3068\u9023\u7d61\u5148",children:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306e\u63d0\u4f9b\u65b9\u6cd5\u3068\u9023\u7d61\u5148"}),"\n",(0,s.jsx)(t.admonition,{title:"\u9023\u7d61\u5148",type:"tip",children:(0,s.jsxs)(t.p,{children:["\u3053\u306e\u8a18\u4e8b\u306b\u95a2\u3059\u308b\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3084\u3054\u8cea\u554f\u3001\u3054\u610f\u898b\u304c\u3054\u3056\u3044\u307e\u3057\u305f\u3089 ",(0,s.jsx)(t.a,{href:"/docs/profiles/self-introduction#2-%E9%80%A3%E7%B5%A1%E5%85%88",children:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u30da\u30fc\u30b8\u306e\u9023\u7d61\u5148"})," \u304b\u3089\u304a\u6c17\u8efd\u306b\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002",(0,s.jsx)(t.br,{}),"\n","\u8cb4\u91cd\u306a\u30c7\u30a3\u30b9\u30ab\u30c3\u30b7\u30e7\u30f3\u3092\u304a\u5f85\u3061\u3057\u3066\u304a\u308a\u307e\u3059\u3002"]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(l.A,{slug:"/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method",title:"\u3010DALL-E\u3011\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5 | ateliers.dev"})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},2857:(e,t,i)=>{i.d(t,{A:()=>n});i(6540);var s=i(4848);const n=e=>{let{textToCopy:t,buttonText:i}=e;return(0,s.jsx)("button",{className:"copy-button",onClick:async()=>{try{await navigator.clipboard.writeText(t),alert("Copied to clipboard!")}catch(e){alert(e)}},children:i})}},9266:(e,t,i)=>{i.d(t,{A:()=>n});i(6540);var s=i(4848);const n=e=>{let{created:t,updated:i}=e;const n=t,o=i||"Unchanged";return(0,s.jsxs)("div",{className:"dates-container",children:[(0,s.jsxs)("div",{className:"date-entry",children:[(0,s.jsx)("div",{className:"date-label",children:"Created At:"}),(0,s.jsx)("div",{className:"date-value",children:n})]}),(0,s.jsxs)("div",{className:"date-entry",children:[(0,s.jsx)("div",{className:"date-label",children:"Updated At:"}),(0,s.jsx)("div",{className:"date-value",children:o})]})]})}},7316:(e,t,i)=>{i.d(t,{A:()=>c});i(6540);var s=i(4586),n=i(6083),o=i(2857),l=i(4848);const c=e=>{let{slug:t,title:i}=e;const{siteConfig:c}=(0,s.A)(),r=c.url+"/docs"+t;return(0,l.jsx)("div",{className:"full-footer-container",children:(0,l.jsxs)("div",{className:"article-buttons",children:[(0,l.jsx)(n.A,{url:r,title:i}),(0,l.jsx)(o.A,{textToCopy:r,buttonText:"Copy URL"})]})})}},4086:(e,t,i)=>{i.d(t,{A:()=>r});i(6540);var s=i(4586),n=i(9266),o=i(6083),l=i(2857),c=i(4848);const r=e=>{let{slug:t,title:i,created:r,updated:a}=e;const{siteConfig:d}=(0,s.A)(),h=d.url+"/docs"+t;return(0,c.jsxs)("div",{className:"full-header-container",children:[(0,c.jsx)("div",{className:"article-dates",children:(0,c.jsx)(n.A,{created:r,updated:a})}),(0,c.jsxs)("div",{className:"article-buttons",children:[(0,c.jsx)(o.A,{url:h,title:i}),(0,c.jsx)(l.A,{textToCopy:h,buttonText:"Copy URL"})]})]})}},8435:(e,t,i)=>{i.d(t,{A:()=>o});i(6540);var s=i(4705),n=i(4848);const o=e=>{let{currentUrl:t,currentSeries:i,currentTags:o,maxItems:l=20,showHeading:c=!1,title:r="\u95a2\u9023\u8a18\u4e8b"}=e;const a=[],d=(e,s)=>{e.forEach((e=>{e.link!==t&&e.series!==i&&e.tags&&o.every((t=>e.tags.includes(t)))&&a.push({...e,category:s,relatedPriority:e.relatedPriority||0}),e.articles&&d(e.articles,s)}))};s.Qs.forEach((e=>{d(e.articles,e.name)}));const h=a.sort(((e,t)=>t.relatedPriority-e.relatedPriority)).slice(0,l);return 0===h.length?null:(0,n.jsxs)("div",{className:"related-articles",children:[c&&(0,n.jsx)("h2",{children:r}),(0,n.jsxs)("table",{className:"related-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u30ab\u30c6\u30b4\u30ea"}),(0,n.jsx)("th",{children:"\u30bf\u30a4\u30c8\u30eb\u3068\u30ea\u30f3\u30af"}),(0,n.jsx)("th",{children:"\u6982\u8981\u8aac\u660e"})]})}),(0,n.jsx)("tbody",{children:h.map(((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.category}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:`${s.OZ}${e.link}`,children:e.title})}),(0,n.jsx)("td",{children:e.description})]},t)))})]})]})}},6083:(e,t,i)=>{i.d(t,{A:()=>o});i(6540);var s=i(1046),n=i(4848);const o=e=>{let{url:t,title:i}=e;return(0,n.jsxs)("div",{className:"buttons-container",children:[(0,n.jsx)("div",{className:"some-network",children:(0,n.jsx)(s.r6,{className:"some-network_share-button",title:i,url:t,children:(0,n.jsx)(s.uv,{size:40,round:!0})})}),(0,n.jsx)("div",{className:"some-network",children:(0,n.jsx)(s.uI,{className:"some-network_share-button",url:t,children:(0,n.jsx)(s.ik,{size:40,round:!0})})}),(0,n.jsx)("div",{className:"some-network",children:(0,n.jsx)(s.wk,{className:"some-network_share-button",url:t,children:(0,n.jsx)(s._z,{size:40,round:!0})})}),(0,n.jsx)("div",{className:"some-network",children:(0,n.jsx)(s.Lw,{className:"some-network_share-button",url:t,title:i,children:(0,n.jsx)(s.Lf,{size:40,round:!1})})}),(0,n.jsx)("div",{className:"some-network",children:(0,n.jsx)(s.iZ,{className:"some-network_share-button",url:t,title:i,children:(0,n.jsx)(s.wY,{size:40,round:!1})})})]})}},1144:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/explanation-001-68dacc4df796fd6f80d3b52b79590599.jpg"},3991:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/explanation-002-4667d2e36f9f44e0e0c54b5aaed27c63.jpg"},1834:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/explanation-003-bcdba653d8623aa9bdef1812d4cc3259.jpg"},4705:e=>{e.exports=JSON.parse('{"OZ":"https://ateliers.dev","Qs":[{"id":"site-guidance","sort":"1","name":"\u30b5\u30a4\u30c8\u6848\u5185","description":"\u5f53\u30b5\u30a4\u30c8\u306e\u8a73\u7d30\u306a\u8aac\u660e\u3067\u3059\u3002","articles":[{"title":"\u30b5\u30a4\u30c8\u6848\u5185","link":"/docs/site-guidance","description":"\u5f53\u30b5\u30a4\u30c8\u306e\u8a73\u7d30\u306a\u8aac\u660e\u3067\u3059\u3002"},{"title":"\u4f5c\u6210\u4e88\u5b9a\u30b3\u30f3\u30c6\u30f3\u30c4\u3068\u66f4\u65b0\u5c65\u6b74","link":"/docs/site-guidance/planned-content-and-update-history","description":"\u4eca\u5f8c\u306e\u4f5c\u6210\u4e88\u5b9a\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3068\u66f4\u65b0\u5c65\u6b74\u3067\u3059\u3002"},{"title":"\u30af\u30ec\u30b8\u30c3\u30c8","link":"/docs/site-guidance/credits","description":"\u5f53\u30b5\u30a4\u30c8\u306e\u30af\u30ec\u30b8\u30c3\u30c8\u60c5\u5831\u3067\u3059\u3002"}]},{"id":"github-guidelines","sort":"2","name":"GitHub \u30ac\u30a4\u30c9\u30e9\u30a4\u30f3","description":"GitHub \u306e\u4f7f\u3044\u65b9\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3\u3067\u3059\u3002","articles":[{"title":"\u30ea\u30dd\u30b8\u30c8\u30ea\u547d\u540d\u65b9\u91dd","link":"/docs/github-guidelines/repository-naming-policy","description":"\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u547d\u540d\u65b9\u91dd\u3067\u3059\u3002"},{"title":"\u30d6\u30e9\u30f3\u30c1\u6226\u7565","link":"/docs/github-guidelines/branch-strategy","description":"\u30d6\u30e9\u30f3\u30c1\u306e\u904b\u7528\u65b9\u91dd\u3067\u3059\u3002"}]},{"id":"technical-policies","sort":"3","name":"\u30c6\u30af\u30cb\u30ab\u30eb\u30dd\u30ea\u30b7\u30fc","description":"\u5f53\u30b5\u30a4\u30c8\u306e\u6280\u8853\u7684\u306a\u30dd\u30ea\u30b7\u30fc\u3067\u3059\u3002","articles":[{"title":"C# \u304a\u3088\u3073 .NET \u95a2\u9023\u306e\u6280\u8853","articles":[{"title":"\u3010C#\u3011\u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd","link":"/docs/technical-policies/csharp/names-of-namespaces","description":"C# \u306b\u304a\u3051\u308b\u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd\u3067\u3059\u3002"}]}]},{"id":"technical-notebook","sort":"4","name":"\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8","description":"\u6280\u8853\u7684\u306a\u30ce\u30fc\u30c8\u3067\u3059\u3002","articles":[{"title":"C# \u304a\u3088\u3073 .NET \u95a2\u9023\u306e\u6280\u8853","articles":[{"title":"GitHub Actions","articles":[{"title":"\u3010.NET\u3011GitHub Actions \u3067\u30c6\u30b9\u30c8\u3092\u5b9f\u884c","link":"/docs/technical-notebook/dotnet/github-actions/automatic-test-execution","description":"GitHub Actions \u3067 .NET \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c6\u30b9\u30c8\u3092\u81ea\u52d5\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002","series":"technical-notebook-dotnet-github-actions","seriesId":"automatic-test-execution","seriesNumber":1,"tags":["github-actions","test","dotnet"],"relatedPriority":0}]},{"title":"HTTP \u30d7\u30ed\u30c8\u30b3\u30eb","articles":[{"title":"HTTP \u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u57fa\u672c\u89e3\u8aac","link":"/docs/technical-notebook/dotnet/http-protocol/basic-explanation","description":"HTTP \u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u57fa\u672c\u7684\u306a\u6982\u8981\u3084\u4f7f\u3044\u65b9\u306b\u3064\u3044\u3066\u306e\u89e3\u8aac\u3067\u3059\u3002","series":"technical-notebook-dotnet-http-protocol","seriesId":"basic-explanation","seriesNumber":1,"tags":["http","protocol"],"relatedPriority":0},{"title":"HTTP GET \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac","link":"/docs/technical-notebook/dotnet/http-protocol/get-method","description":"HTTP GET \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac\u3067\u3059\u3002","series":"technical-notebook-dotnet-http-protocol","seriesId":"get-method","seriesNumber":2,"tags":["http","get"]},{"title":"HTTP POST \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac","link":"/docs/technical-notebook/dotnet/http-protocol/post-method","description":"HTTP POST \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac\u3067\u3059\u3002","series":"technical-notebook-dotnet-http-protocol","seriesId":"post-method","seriesNumber":3},{"title":"HTTP PUT \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac","link":"/docs/technical-notebook/dotnet/http-protocol/put-method","description":"HTTP PUT \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac\u3067\u3059\u3002","series":"technical-notebook-dotnet-http-protocol","seriesId":"put-method","seriesNumber":4},{"title":"HTTP DELETE \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac","link":"/docs/technical-notebook/dotnet/http-protocol/delete-method","description":"HTTP DELETE \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac\u3067\u3059\u3002","series":"technical-notebook-dotnet-http-protocol","seriesId":"delete-method","seriesNumber":5}]}]},{"title":"OpenAI","articles":[{"title":"DALL-E","articles":[{"title":"\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5","link":"/docs/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method","description":"DALL-E \u306b\u3088\u308b\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002"},{"title":"\u5f53\u30b5\u30a4\u30c8\u306e\u30a4\u30e1\u30fc\u30b8\u751f\u6210\u30e1\u30e2","link":"/docs/technical-notebook/openai-gpt/dall-e/my-site-image-generation-memo","description":"DALL-E \u306b\u3088\u308b\u5f53\u30b5\u30a4\u30c8\u306e\u30a4\u30e1\u30fc\u30b8\u751f\u6210\u30e1\u30e2\u3067\u3059\u3002"}]}]},{"title":"AI\u554f\u7b54\u30e1\u30e2","description":"ChatGPT \u3084 GitHub Copilot Chat \u306e\u5099\u5fd8\u9332\u3067\u3059\u3002(\u653e\u3063\u3066\u304a\u304f\u3068\u6d88\u3048\u3066\u3057\u307e\u3046\u306e\u3067...)","articles":[{"title":"C# \u95a2\u9023","articles":[{"title":"\u3010C#\u3011\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u3064\u3044\u3066","link":"/docs/technical-notebook/ai-chat-memos/csharp/20240410-about-email-address","description":"C# \u306b\u304a\u3051\u308b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u3064\u3044\u3066\u306e\u30e1\u30e2\u3067\u3059\u3002"},{"title":"\u3010C#\u3011\u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406","link":"/docs/technical-notebook/ai-chat-memos/csharp/20240412-about-exception-handling","description":"C# \u306b\u304a\u3051\u308b\u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406\u306b\u3064\u3044\u3066\u306e\u30e1\u30e2\u3067\u3059\u3002"}]}]}]},{"id":"profiles","sort":"8","name":"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb","description":"\u7ba1\u7406\u8005\u306e\u7d39\u4ecb\u3067\u3059\u3002","articles":[{"title":"\u7ba1\u7406\u8005\u306e\u81ea\u5df1\u7d39\u4ecb","link":"/docs/profiles/self-introduction","description":"\u7ba1\u7406\u8005\u306e\u81ea\u5df1\u7d39\u4ecb\u3067\u3059\u3002"},{"title":"\u500b\u4eba\u306e\u958b\u767a\u74b0\u5883\u7d39\u4ecb","link":"/profiles/personal-development-environment","description":"\u500b\u4eba\u306e\u958b\u767a\u74b0\u5883\u7d39\u4ecb\u3067\u3059\u3002"}]},{"id":"others","sort":"9","name":"\u305d\u306e\u4ed6","description":"\u305d\u306e\u4ed6\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002","articles":[{"title":"FAQ","link":"/docs/faq","description":"\u3088\u304f\u3042\u308b (\u304b\u3082\u3057\u308c\u306a\u3044) \u8cea\u554f\u3068\u305d\u306e\u56de\u7b54\u3092\u307e\u3068\u3081\u305f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3059\u3002"}]}]}')}}]);