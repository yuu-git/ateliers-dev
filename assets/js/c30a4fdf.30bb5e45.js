"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[9008],{3479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=n(4848),c=n(8453),s=n(8366),o=n(6367);n(7276);const l={id:"technical-notebook-ai-chat-memos-csharp-20240412-about-exception-handling",slug:"/technical-notebook/ai-chat-memos/csharp/20240412-about-exception-handling",category:"\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8",title:"\u3010C#\u3011 \u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406 | ateliers.dev",sidebar_label:"\u3010C#\u3011 \u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406",tags:["AI","GitHub-Copilot","C#"],description:"ateliers.dev \u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u300c\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8\u300d\u3067\u3059\u3002C# \u3067\u306e\u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406\u306b\u3064\u3044\u3066\u3001GitHub Copilot \u3068\u306e\u3084\u308a\u3068\u308a\u3092\u8a18\u9332\u3057\u3066\u3044\u307e\u3059\u3002",image:"img/jpg/ateliers-dev-technical-notebook.jpg"},r="C#\u306e\u30d1\u30e9\u30e1\u30fc\u30bfnull\u3084\u7a7a\u6587\u5b57\u306e\u4f8b\u5916\u7a2e\u5225\u306b\u3064\u3044\u3066",d={id:"technical-notebook/ai-chat-memos/csharp/technical-notebook-ai-chat-memos-csharp-20240412-about-exception-handling",title:"\u3010C#\u3011 \u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406 | ateliers.dev",description:"ateliers.dev \u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u300c\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8\u300d\u3067\u3059\u3002C# \u3067\u306e\u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406\u306b\u3064\u3044\u3066\u3001GitHub Copilot \u3068\u306e\u3084\u308a\u3068\u308a\u3092\u8a18\u9332\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/technical-notebook/ai-chat-memos/csharp/20240412-about-exception-handling.md",sourceDirName:"technical-notebook/ai-chat-memos/csharp",slug:"/technical-notebook/ai-chat-memos/csharp/20240412-about-exception-handling",permalink:"/docs/technical-notebook/ai-chat-memos/csharp/20240412-about-exception-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/yuu-git/ateliers-dev/edit/master/docs/technical-notebook/ai-chat-memos/csharp/20240412-about-exception-handling.md",tags:[{label:"AI",permalink:"/docs/tags/ai"},{label:"GitHub-Copilot",permalink:"/docs/tags/git-hub-copilot"},{label:"C#",permalink:"/docs/tags/c"}],version:"current",sidebarPosition:20240412,frontMatter:{id:"technical-notebook-ai-chat-memos-csharp-20240412-about-exception-handling",slug:"/technical-notebook/ai-chat-memos/csharp/20240412-about-exception-handling",category:"\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8",title:"\u3010C#\u3011 \u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406 | ateliers.dev",sidebar_label:"\u3010C#\u3011 \u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406",tags:["AI","GitHub-Copilot","C#"],description:"ateliers.dev \u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u300c\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8\u300d\u3067\u3059\u3002C# \u3067\u306e\u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406\u306b\u3064\u3044\u3066\u3001GitHub Copilot \u3068\u306e\u3084\u308a\u3068\u308a\u3092\u8a18\u9332\u3057\u3066\u3044\u307e\u3059\u3002",image:"img/jpg/ateliers-dev-technical-notebook.jpg"},sidebar:"technicalNotebookSidebar",previous:{title:"\u3010C#\u3011 \u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u3064\u3044\u3066",permalink:"/docs/technical-notebook/ai-chat-memos/csharp/20240410-about-email-address"}},a={},h=[{value:"1. \u3053\u306e\u30e1\u30e2\u306b\u3064\u3044\u3066",id:"1-\u3053\u306e\u30e1\u30e2\u306b\u3064\u3044\u3066",level:2},{value:"1.1. <code>ArgumentNullException</code>\u304b<code>ArgumentException</code>\u306a\u306e\u304b",id:"11-argumentnullexception\u304bargumentexception\u306a\u306e\u304b",level:3},{value:"1.1.1. You - Question",id:"111-you---question",level:4},{value:"1.1.2. Answer",id:"112-answer",level:4},{value:"1.2. \u7d50\u5c40\u3069\u3061\u3089\u304c\u6b63\u3057\u3044\u306e\u304b\uff1f",id:"12-\u7d50\u5c40\u3069\u3061\u3089\u304c\u6b63\u3057\u3044\u306e\u304b",level:3},{value:"1.2.1. Question",id:"121-question",level:4},{value:"1.2.2. Answer",id:"122-answer",level:4},{value:"2. \u500b\u4eba\u7684\u306a\u6240\u611f",id:"2-\u500b\u4eba\u7684\u306a\u6240\u611f",level:2},{value:"3. \u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",id:"3-\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",level:2}];function p(e){const t={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"c\u306e\u30d1\u30e9\u30e1\u30fc\u30bfnull\u3084\u7a7a\u6587\u5b57\u306e\u4f8b\u5916\u7a2e\u5225\u306b\u3064\u3044\u3066",children:"C#\u306e\u30d1\u30e9\u30e1\u30fc\u30bfnull\u3084\u7a7a\u6587\u5b57\u306e\u4f8b\u5916\u7a2e\u5225\u306b\u3064\u3044\u3066"}),"\n",(0,i.jsx)(s.A,{slug:"/technical-notebook/ai-chat-memos/csharp/20240412-about-exception-handling",title:"\u3010C#\u3011 \u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406 | ateliers.dev",created:"2024/04/28"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["\u8abf\u67fb\u65e5\uff1a2024/04/12",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u751f\u6210AI\u306f\u65e5\u3005\u9032\u5316\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u8abf\u67fb\u65e5\u6642\u70b9\u306e\u60c5\u5831\u3067\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"1-\u3053\u306e\u30e1\u30e2\u306b\u3064\u3044\u3066",children:"1. \u3053\u306e\u30e1\u30e2\u306b\u3064\u3044\u3066"}),"\n",(0,i.jsxs)(t.p,{children:["\u767a\u751f\u3055\u305b\u308b\u4f8b\u5916\u3092 ",(0,i.jsx)(t.code,{children:"ArgumentNullException"})," \u3068\u3059\u308b\u304b ",(0,i.jsx)(t.code,{children:"ArgumentException"})," \u3068\u3059\u308b\u304b\u3001\u3068\u3044\u3046\u554f\u984c\u3067\u3059\u3002",(0,i.jsx)(t.br,{}),"\n","\u30b3\u30fc\u30c9\u30ec\u30d3\u30e5\u30fc\u6642\u3001\u30d1\u30e9\u30e1\u30fc\u30bf\u304cnull\u3084\u7a7a\u6587\u5b57\u306e\u4f8b\u5916\u51e6\u7406\u3067\u3001\u6307\u6458\u3059\u308b\u3079\u304d\u304b\u3069\u3046\u304b\u8ff7\u3044\u307e\u3057\u305f\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u81ea\u5206\u81ea\u8eab\u306e\u77e5\u8b58\u304c\u3042\u3044\u307e\u3044\u3067\u3042\u3063\u305f\u305f\u3081\u3001GitHub Copilot\u306b\u8cea\u554f\u3057\u3066\u307f\u307e\u3057\u305f\u3002"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"\u3010\u8aa4\u5b57\u3011"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u300c\u5c45\u6a39\u7d42\u4e86\u300d \u2192 \u300c\u7570\u5e38\u7d42\u4e86\u300d"}),"\n",(0,i.jsx)(t.li,{children:"\u300c\u7a7a\u3044\u3066\u3044\u305f\u306e\u3067\u300d\u2192\u300c\u66f8\u3044\u3066\u3044\u305f\u306e\u3067\u300d"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u671d\u3060\u304b\u3089\u5bdd\u307c\u3051\u3066\u307e\u3057\u305f\u2026\u3000Question \u306f\u305d\u306e\u307e\u307e\u6587\u5b57\u8d77\u3053\u3057\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.h3,{id:"11-argumentnullexception\u304bargumentexception\u306a\u306e\u304b",children:["1.1. ",(0,i.jsx)(t.code,{children:"ArgumentNullException"}),"\u304b",(0,i.jsx)(t.code,{children:"ArgumentException"}),"\u306a\u306e\u304b"]}),"\n",(0,i.jsx)(t.h4,{id:"111-you---question",children:"1.1.1. You - Question"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u79c1\uff1a"})}),(0,i.jsx)(t.br,{}),"\n","\u4f8b\u5916\u51e6\u7406\u306b\u3064\u3044\u3066\u3001\u6559\u3048\u3066\u4e0b\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"if (string.IsNullOrWhiteSpace(createProgramId))\n    throw new ArgumentNullException(nameof(createProgramId));\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001\u5f15\u6570\u304c ",(0,i.jsx)(t.code,{children:"null"})," \u3084 \u7a7a\u767d ",(0,i.jsx)(t.code,{children:'""'})," \u307e\u305f\u306f\u7a7a\u767d\u6587\u5b57 ",(0,i.jsx)(t.code,{children:'" "'})," \u3067\u3042\u3063\u305f\u5834\u5408\u3001\u51e6\u7406\u3092\u7d9a\u884c\u3055\u305b\u305a\u5c45\u6a39\u7d42\u4e86\u3055\u305b\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u3057\u304b\u3057\u7a7a\u767d\u6587\u5b57 ",(0,i.jsx)(t.code,{children:'" "'})," \u3084 ",(0,i.jsx)(t.code,{children:'"\u3000"'})," \u306e\u30b1\u30fc\u30b9\u306f\n",(0,i.jsx)(t.code,{children:"ArgumentNullException"})," \u3067\u306f\u306a\u304f ",(0,i.jsx)(t.code,{children:"ArgumentException"})," \u3068\u3082\u8a00\u3048\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u4ed5\u4e8b\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3067\u3082\u500b\u4eba\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3067\u3082\u3001\u3053\u308c\u306f\u3044\u3064\u3082\u60a9\u307f\u307e\u3059\u3002",(0,i.jsx)(t.br,{}),"\n","\u3069\u3061\u3089\u306a\u306e\u3067\u3057\u3087\u3046\u304b\uff1f"]}),"\n",(0,i.jsx)(t.h4,{id:"112-answer",children:"1.1.2. Answer"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"GitHub Copilot\uff1a"})}),(0,i.jsx)(t.br,{}),"\n","\u3053\u306e\u554f\u984c\u306f\u3001\u958b\u767a\u8005\u306e\u610f\u56f3\u3084\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb\u306b\u3088\u308b\u90e8\u5206\u304c\u5927\u304d\u3044\u3067\u3059\u3002",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.code,{children:"ArgumentNullException"})," \u3068 ",(0,i.jsx)(t.code,{children:"ArgumentException"})," \u306e\u9055\u3044\u306f\u3001\u305d\u306e\u540d\u524d\u304b\u3089\u3082\u308f\u304b\u308b\u3088\u3046\u306b\u3001\u5f15\u6570\u304c ",(0,i.jsx)(t.code,{children:"null"})," \u304b\u3069\u3046\u304b\u3001\u307e\u305f\u306f\u5f15\u6570\u304c\u7121\u52b9\uff08\u4f8b\u3048\u3070\u3001\u7a7a\u6587\u5b57\u5217\u3084\u4e0d\u6b63\u306a\u5024\uff09\u304b\u3069\u3046\u304b\u3001\u3068\u3044\u3046\u70b9\u306b\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"string.IsNullOrWhiteSpace(createProgramId)"})," \u306e\u30c1\u30a7\u30c3\u30af\u3067\u306f\u3001",(0,i.jsx)(t.code,{children:"createProgramId"})," \u304c ",(0,i.jsx)(t.code,{children:"null"})," \u307e\u305f\u306f\u7a7a\u767d\u6587\u5b57\u5217\u3067\u3042\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u3066\u3044\u307e\u3059\u3002",(0,i.jsx)(t.br,{}),"\n","\u3053\u306e\u5834\u5408\u3001",(0,i.jsx)(t.code,{children:"null"})," \u3068\u7a7a\u767d\u6587\u5b57\u5217\u306e\u4e21\u65b9\u3092\u7121\u52b9\u306a\u5024\u3068\u898b\u306a\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u3057\u305f\u304c\u3063\u3066\u3001",(0,i.jsx)(t.code,{children:"ArgumentNullException"})," \u3092\u30b9\u30ed\u30fc\u3059\u308b\u3068\u3001",(0,i.jsx)(t.code,{children:"createProgramId"})," \u304c ",(0,i.jsx)(t.code,{children:"null"})," \u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3059\u4e00\u65b9\u3067\u3001",(0,i.jsx)(t.code,{children:"ArgumentException"})," \u3092\u30b9\u30ed\u30fc\u3059\u308b\u3068\u3001",(0,i.jsx)(t.code,{children:"createProgramId"})," \u304c\u7121\u52b9\u306a\u5024\uff08\u3053\u306e\u5834\u5408\u3001",(0,i.jsx)(t.code,{children:"null"})," \u307e\u305f\u306f\u7a7a\u767d\u6587\u5b57\u5217\uff09\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u3069\u3061\u3089\u306e\u4f8b\u5916\u3092\u4f7f\u7528\u3059\u308b\u304b\u306f\u3001\u3042\u308b\u7a0b\u5ea6\u958b\u767a\u8005\u306e\u88c1\u91cf\u306b\u59d4\u306d\u3089\u308c\u3066\u3044\u307e\u3059\u3002",(0,i.jsx)(t.br,{}),"\n","\u305f\u3060\u3057\u3001\u4e00\u822c\u7684\u306b\u306f\u3001",(0,i.jsx)(t.code,{children:"null"})," \u3068\u7a7a\u767d\u6587\u5b57\u5217\u306e\u4e21\u65b9\u3092\u7121\u52b9\u306a\u5024\u3068\u898b\u306a\u3059\u5834\u5408\u306f ",(0,i.jsx)(t.code,{children:"ArgumentException"})," \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002",(0,i.jsx)(t.br,{}),"\n","\u3053\u308c\u306f\u3001",(0,i.jsx)(t.code,{children:"ArgumentException"})," \u304c\u3088\u308a\u4e00\u822c\u7684\u306a\u4f8b\u5916\u3067\u3042\u308a\u3001",(0,i.jsx)(t.code,{children:"null"})," \u3060\u3051\u3067\u306a\u304f\u4ed6\u306e\u7121\u52b9\u306a\u5024\u3082\u30ab\u30d0\u30fc\u3067\u304d\u308b\u304b\u3089\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u3057\u305f\u304c\u3063\u3066\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u66f8\u304f\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'if (string.IsNullOrWhiteSpace(createProgramId))\n    throw new ArgumentException("Argument cannot be null or whitespace.", nameof(createProgramId));\n'})}),"\n",(0,i.jsxs)(t.p,{children:["\u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001",(0,i.jsx)(t.code,{children:"createProgramId"})," \u304c ",(0,i.jsx)(t.code,{children:"null"})," \u307e\u305f\u306f\u7a7a\u767d\u6587\u5b57\u5217\u3067\u3042\u308b\u5834\u5408\u306b ",(0,i.jsx)(t.code,{children:"ArgumentException"})," \u3092\u30b9\u30ed\u30fc\u3057\u307e\u3059\u3002\n\u4f8b\u5916\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3001\u5f15\u6570\u304c ",(0,i.jsx)(t.code,{children:"null"})," \u307e\u305f\u306f\u7a7a\u767d\u3067\u3042\u3063\u3066\u306f\u306a\u3089\u306a\u3044\u3053\u3068\u3092\u660e\u793a\u7684\u306b\u793a\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"12-\u7d50\u5c40\u3069\u3061\u3089\u304c\u6b63\u3057\u3044\u306e\u304b",children:"1.2. \u7d50\u5c40\u3069\u3061\u3089\u304c\u6b63\u3057\u3044\u306e\u304b\uff1f"}),"\n",(0,i.jsx)(t.h4,{id:"121-question",children:"1.2.1. Question"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u79c1\uff1a"})}),(0,i.jsx)(t.br,{}),"\n","\u3042\u308a\u304c\u3068\u3046\u3001\u7406\u89e3\u3057\u307e\u3057\u305f\u3002\u305d\u306e\u901a\u308a\u3060\u3068\u601d\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u5148\u8f29\u3084\u5468\u56f2\u306e\u4eba\u304c\u3044\u3064\u3082 ",(0,i.jsx)(t.code,{children:"ArgumentNullException"})," \u3067\u7a7a\u3044\u3066\u3044\u305f\u306e\u3067\u305d\u308c\u306b\u306a\u3089\u3063\u3066\u540c\u3058\u66f8\u304d\u65b9\u3057\u3066\u3044\u307e\u3057\u305f\u304c",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.code,{children:"ArgumentException"})," \u306e\u65b9\u304c\u826f\u304b\u3063\u305f\u3067\u3059\u306d\u3002\u79c1\u306e\u8aa4\u308a\u3067\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u3057\u304b\u3057\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb\u3068\u3044\u3046\u3053\u3068\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u898f\u7d04\u306a\u3069\u3082\u8003\u616e\u3057",(0,i.jsx)(t.br,{}),"\n","\u300c\u7a7a\u767d\u6587\u5b57\u3082\u4f55\u3082\u306a\u3044\u304b\u3089 ",(0,i.jsx)(t.code,{children:"null"})," \u3068\u540c\u610f\u3067\u3042\u308b\u300d\u3068\u8003\u3048\u308c\u3070\u3001\u8aa4\u308a\u3067\u306f\u306a\u3044\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u304b\uff1f"]}),"\n",(0,i.jsx)(t.h4,{id:"122-answer",children:"1.2.2. Answer"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"GitHub Copilot\uff1a"})}),(0,i.jsx)(t.br,{}),"\n","\u306f\u3044\u3001\u305d\u306e\u901a\u308a\u3067\u3059\u3002",(0,i.jsx)(t.br,{}),"\n","\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb\u3084\u898f\u7d04\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3084\u30c1\u30fc\u30e0\u306b\u3088\u3063\u3066\u7570\u306a\u308b\u305f\u3081\u3001\u4e00\u6982\u306b\u300c\u3053\u308c\u304c\u6b63\u3057\u3044\u300d\u3068\u306f\u8a00\u3048\u307e\u305b\u3093\u3002",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.code,{children:"null"})," \u3068\u7a7a\u767d\u6587\u5b57\u5217\u3092\u540c\u3058\u3088\u3046\u306b\u6271\u3046\u304b\u3069\u3046\u304b\u306f\u3001\u305d\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3084\u30c1\u30fc\u30e0\u306e\u898f\u7d04\u3084\u65b9\u91dd\u306b\u3088\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ArgumentNullException"})," \u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001",(0,i.jsx)(t.code,{children:"null"})," \u3068\u7a7a\u767d\u6587\u5b57\u5217\u3092\u540c\u3058\u3088\u3046\u306b\u6271\u3046\u3068\u3044\u3046\u610f\u56f3\u3092\u660e\u78ba\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u4f8b\u5916\u30e1\u30c3\u30bb\u30fc\u30b8\u3067\u305d\u306e\u65e8\u3092\u660e\u793a\u3059\u308b\u3053\u3068\u3082\u4e00\u3064\u306e\u65b9\u6cd5\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u4f8b\u3048\u3070\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'if (string.IsNullOrWhiteSpace(createProgramId))\n    throw new ArgumentNullException(nameof(createProgramId), "Argument cannot be null or whitespace.");\n'})}),"\n",(0,i.jsxs)(t.p,{children:["\u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001",(0,i.jsx)(t.code,{children:"createProgramId"})," \u304c ",(0,i.jsx)(t.code,{children:"null"})," \u307e\u305f\u306f\u7a7a\u767d\u6587\u5b57\u5217\u3067\u3042\u308b\u5834\u5408\u306b ",(0,i.jsx)(t.code,{children:"ArgumentNullException"})," \u3092\u30b9\u30ed\u30fc\u3057\u307e\u3059\u3002",(0,i.jsx)(t.br,{}),"\n","\u4f8b\u5916\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3001\u5f15\u6570\u304c ",(0,i.jsx)(t.code,{children:"null"})," \u307e\u305f\u306f\u7a7a\u767d\u3067\u3042\u3063\u3066\u306f\u306a\u3089\u306a\u3044\u3053\u3068\u3092\u660e\u793a\u7684\u306b\u793a\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u3057\u304b\u3057\u3001\u4e00\u822c\u7684\u306b\u306f\u3001",(0,i.jsx)(t.code,{children:"null"})," \u3068\u7a7a\u767d\u6587\u5b57\u5217\u3092\u533a\u5225\u3059\u308b\u305f\u3081\u306b ",(0,i.jsx)(t.code,{children:"ArgumentException"})," \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002",(0,i.jsx)(t.br,{}),"\n","\u3053\u308c\u306f\u3001",(0,i.jsx)(t.code,{children:"ArgumentException"})," \u304c\u3088\u308a\u4e00\u822c\u7684\u306a\u4f8b\u5916\u3067\u3042\u308a\u3001",(0,i.jsx)(t.code,{children:"null"})," \u3060\u3051\u3067\u306a\u304f\u4ed6\u306e\u7121\u52b9\u306a\u5024\u3082\u30ab\u30d0\u30fc\u3067\u304d\u308b\u304b\u3089\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u6700\u7d42\u7684\u306b\u306f\u3001\u3069\u306e\u4f8b\u5916\u3092\u4f7f\u7528\u3059\u308b\u304b\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u898f\u7d04\u3084\u30c1\u30fc\u30e0\u306e\u65b9\u91dd\u3001\u305d\u3057\u3066\u30b3\u30fc\u30c9\u306e\u8aad\u307f\u3084\u3059\u3055\u3084\u4fdd\u5b88\u6027\u3092\u8003\u616e\u3057\u3066\u6c7a\u5b9a\u3059\u308b\u3079\u304d\u3067\u3059\u3002"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"2-\u500b\u4eba\u7684\u306a\u6240\u611f",children:"2. \u500b\u4eba\u7684\u306a\u6240\u611f"}),"\n",(0,i.jsxs)(t.p,{children:["\u7d50\u5c40\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u3088\u308a\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3068\u306e\u3053\u3068\u3067\u3001\u3069\u3046\u3059\u308b\u3079\u304d\u304b\u96e3\u3057\u3044\u306e\u3067\u3059\u304c",(0,i.jsx)(t.br,{}),"\n","\u500b\u4eba\u7684\u306b\u306f ",(0,i.jsx)(t.code,{children:"ArgumentException"})," \u3067\u826f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ArgumentNullException"})," \u306e\u5834\u5408\u300c\u3069\u3053\u3067 ",(0,i.jsx)(t.code,{children:"null"})," \u306b\u306a\u3063\u305f\u306e\u304b\u300d\u3068\u8abf\u67fb\u3057\u59cb\u3081\u307e\u3059\u304c",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.code,{children:"ArgumentException"})," \u306e\u5834\u5408\u306f\u300c\u3069\u3053\u3067\u7121\u52b9\u306a\u6587\u5b57\u5217\u306b\u306a\u3063\u305f\u306e\u304b\u300d\u3068\u8abf\u67fb\u5185\u5bb9\u3092\u3088\u308a\u660e\u78ba\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"3-\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",children:"3. \u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image1",src:n(1344).A+"",width:"797",height:"1411"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(o.A,{slug:"/technical-notebook/ai-chat-memos/csharp/20240412-about-exception-handling",title:"\u3010C#\u3011 \u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406 | ateliers.dev"})]})}function x(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},7276:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(6540),c=n(4705),s=n(4848);const o=e=>{let{categoryId:t}=e;const[n,o]=(0,i.useState)(null);if((0,i.useEffect)((()=>{const e=c.Qs.find((e=>e.id===t));o(e)}),[t]),!n)return(0,s.jsx)("div",{children:"Loading..."});const l=n.url||"",r=function(e,t){return void 0===t&&(t=0),e.map(((e,n)=>(0,s.jsxs)(i.Fragment,{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:`level-${t}`,children:(0,s.jsx)("div",{style:{fontWeight:e.link?"normal":"bold"},children:e.link?(0,s.jsx)("a",{href:`${l}${e.link}`,children:e.title}):e.title})}),(0,s.jsx)("td",{children:e.description})]}),e.articles&&r(e.articles,t+1)]},n)))};return(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)("table",{className:"styled-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"\u30bf\u30a4\u30c8\u30eb\u3068\u30ea\u30f3\u30af"}),(0,s.jsx)("th",{children:"\u6982\u8981\u8aac\u660e"})]})}),(0,s.jsx)("tbody",{children:r(n.articles)})]})})}},2857:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var i=n(4848);const c=e=>{let{textToCopy:t,buttonText:n}=e;return(0,i.jsx)("button",{className:"copy-button",onClick:async()=>{try{await navigator.clipboard.writeText(t),alert("Copied to clipboard!")}catch(e){alert(e)}},children:n})}},9266:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var i=n(4848);const c=e=>{let{created:t,updated:n}=e;const c=t,s=n||"Unchanged";return(0,i.jsxs)("div",{className:"dates-container",children:[(0,i.jsxs)("div",{className:"date-entry",children:[(0,i.jsx)("div",{className:"date-label",children:"Created At:"}),(0,i.jsx)("div",{className:"date-value",children:c})]}),(0,i.jsxs)("div",{className:"date-entry",children:[(0,i.jsx)("div",{className:"date-label",children:"Updated At:"}),(0,i.jsx)("div",{className:"date-value",children:s})]})]})}},6367:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var i=n(4586),c=n(2857),s=n(4848);const o=e=>{let{slug:t}=e;const{siteConfig:n}=(0,i.A)(),o=n.url+"/docs"+t;return(0,s.jsx)("div",{className:"full-footer-container",children:(0,s.jsx)("div",{className:"copy-url-button",children:(0,s.jsx)(c.A,{textToCopy:o,buttonText:"Copy URL"})})})}},8366:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var i=n(4586),c=n(9266),s=n(2857),o=n(4848);const l=e=>{let{slug:t,created:n,updated:l}=e;const{siteConfig:r}=(0,i.A)(),d=r.url+"/docs"+t;return(0,o.jsxs)("div",{className:"date-and-copy-header",children:[(0,o.jsx)("div",{className:"article-dates",children:(0,o.jsx)(c.A,{created:n,updated:l})}),(0,o.jsx)("div",{className:"article-buttons",children:(0,o.jsx)(s.A,{textToCopy:d,buttonText:"Copy URL"})})]})}},1344:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/SS-2024-04-12-091638-f5eac06ec38cb923138c666263e0fe4c.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(6540);const c={},s=i.createContext(c);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),i.createElement(s.Provider,{value:t},e.children)}},4705:e=>{e.exports=JSON.parse('{"OZ":"https://ateliers.dev","Qs":[{"id":"site-guidance","sort":"1","name":"\u30b5\u30a4\u30c8\u6848\u5185","description":"\u5f53\u30b5\u30a4\u30c8\u306e\u8a73\u7d30\u306a\u8aac\u660e\u3067\u3059\u3002","articles":[{"title":"\u30b5\u30a4\u30c8\u6848\u5185","link":"/docs/site-guidance","description":"\u5f53\u30b5\u30a4\u30c8\u306e\u8a73\u7d30\u306a\u8aac\u660e\u3067\u3059\u3002"},{"title":"\u4f5c\u6210\u4e88\u5b9a\u30b3\u30f3\u30c6\u30f3\u30c4\u3068\u66f4\u65b0\u5c65\u6b74","link":"/docs/site-guidance/planned-content-and-update-history","description":"\u4eca\u5f8c\u306e\u4f5c\u6210\u4e88\u5b9a\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3068\u66f4\u65b0\u5c65\u6b74\u3067\u3059\u3002"},{"title":"\u30af\u30ec\u30b8\u30c3\u30c8","link":"/docs/site-guidance/credits","description":"\u5f53\u30b5\u30a4\u30c8\u306e\u30af\u30ec\u30b8\u30c3\u30c8\u60c5\u5831\u3067\u3059\u3002"}]},{"id":"github-guidelines","sort":"2","name":"GitHub \u30ac\u30a4\u30c9\u30e9\u30a4\u30f3","description":"GitHub \u306e\u4f7f\u3044\u65b9\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3\u3067\u3059\u3002","articles":[{"title":"\u30ea\u30dd\u30b8\u30c8\u30ea\u547d\u540d\u65b9\u91dd","link":"/docs/github-guidelines/repository-naming-policy","description":"\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u547d\u540d\u65b9\u91dd\u3067\u3059\u3002"},{"title":"\u30d6\u30e9\u30f3\u30c1\u6226\u7565","link":"/docs/github-guidelines/branch-strategy","description":"\u30d6\u30e9\u30f3\u30c1\u306e\u904b\u7528\u65b9\u91dd\u3067\u3059\u3002"}]},{"id":"technical-policies","sort":"3","name":"\u30c6\u30af\u30cb\u30ab\u30eb\u30dd\u30ea\u30b7\u30fc","description":"\u5f53\u30b5\u30a4\u30c8\u306e\u6280\u8853\u7684\u306a\u30dd\u30ea\u30b7\u30fc\u3067\u3059\u3002","articles":[{"title":"C# \u304a\u3088\u3073 .NET \u95a2\u9023\u306e\u6280\u8853","articles":[{"title":"\u3010C#\u3011\u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd","link":"/docs/technical-policies/csharp/names-of-namespaces","description":"C# \u306b\u304a\u3051\u308b\u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd\u3067\u3059\u3002"}]}]},{"id":"technical-notebook","sort":"4","name":"\u30c6\u30af\u30cb\u30ab\u30eb\u30ce\u30fc\u30c8","description":"\u6280\u8853\u7684\u306a\u30ce\u30fc\u30c8\u3067\u3059\u3002","articles":[{"title":"C# \u304a\u3088\u3073 .NET \u95a2\u9023\u306e\u6280\u8853","articles":[{"title":"GitHub Actions","articles":[{"title":"\u3010.NET\u3011GitHub Actions \u3067\u30c6\u30b9\u30c8\u3092\u5b9f\u884c","link":"/docs/technical-notebook/dotnet/github-actions/automatic-test-execution","description":"GitHub Actions \u3067 .NET \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c6\u30b9\u30c8\u3092\u81ea\u52d5\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002","series":"technical-notebook-dotnet-github-actions","seriesId":"automatic-test-execution","seriesNumber":1,"tags":["github-actions","test","dotnet"],"relatedPriority":0}]},{"title":"HTTP \u30d7\u30ed\u30c8\u30b3\u30eb","articles":[{"title":"HTTP \u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u57fa\u672c\u89e3\u8aac","link":"/docs/technical-notebook/dotnet/http-protocol/basic-explanation","description":"HTTP \u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u57fa\u672c\u7684\u306a\u6982\u8981\u3084\u4f7f\u3044\u65b9\u306b\u3064\u3044\u3066\u306e\u89e3\u8aac\u3067\u3059\u3002","series":"technical-notebook-dotnet-http-protocol","seriesId":"basic-explanation","seriesNumber":1,"tags":["http","protocol"],"relatedPriority":0},{"title":"HTTP GET \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac","link":"/docs/technical-notebook/dotnet/http-protocol/get-method","description":"HTTP GET \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac\u3067\u3059\u3002","series":"technical-notebook-dotnet-http-protocol","seriesId":"get-method","seriesNumber":2,"tags":["http","get"]},{"title":"HTTP POST \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac","link":"/docs/technical-notebook/dotnet/http-protocol/post-method","description":"HTTP POST \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac\u3067\u3059\u3002","series":"technical-notebook-dotnet-http-protocol","seriesId":"post-method","seriesNumber":3},{"title":"HTTP PUT \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac","link":"/docs/technical-notebook/dotnet/http-protocol/put-method","description":"HTTP PUT \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac\u3067\u3059\u3002","series":"technical-notebook-dotnet-http-protocol","seriesId":"put-method","seriesNumber":4},{"title":"HTTP DELETE \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac","link":"/docs/technical-notebook/dotnet/http-protocol/delete-method","description":"HTTP DELETE \u30e1\u30bd\u30c3\u30c9\u306e\u89e3\u8aac\u3067\u3059\u3002","series":"technical-notebook-dotnet-http-protocol","seriesId":"delete-method","seriesNumber":5}]}]},{"title":"OpenAI","articles":[{"title":"DALL-E","articles":[{"title":"\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5","link":"/docs/technical-notebook/openai-gpt/dall-e/consistent-image-reproduction-method","description":"DALL-E \u306b\u3088\u308b\u4e00\u8cab\u3057\u305f\u753b\u50cf\u518d\u73fe\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002"},{"title":"\u5f53\u30b5\u30a4\u30c8\u306e\u30a4\u30e1\u30fc\u30b8\u751f\u6210\u30e1\u30e2","link":"/docs/technical-notebook/openai-gpt/dall-e/my-site-image-generation-memo","description":"DALL-E \u306b\u3088\u308b\u5f53\u30b5\u30a4\u30c8\u306e\u30a4\u30e1\u30fc\u30b8\u751f\u6210\u30e1\u30e2\u3067\u3059\u3002"}]}]},{"title":"AI\u554f\u7b54\u30e1\u30e2","description":"ChatGPT \u3084 GitHub Copilot Chat \u306e\u5099\u5fd8\u9332\u3067\u3059\u3002(\u653e\u3063\u3066\u304a\u304f\u3068\u6d88\u3048\u3066\u3057\u307e\u3046\u306e\u3067...)","articles":[{"title":"C# \u95a2\u9023","articles":[{"title":"\u3010C#\u3011\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u3064\u3044\u3066","link":"/docs/technical-notebook/ai-chat-memos/csharp/20240410-about-email-address","description":"C# \u306b\u304a\u3051\u308b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u3064\u3044\u3066\u306e\u30e1\u30e2\u3067\u3059\u3002"},{"title":"\u3010C#\u3011\u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406","link":"/docs/technical-notebook/ai-chat-memos/csharp/20240412-about-exception-handling","description":"C# \u306b\u304a\u3051\u308b\u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4f8b\u5916\u51e6\u7406\u306b\u3064\u3044\u3066\u306e\u30e1\u30e2\u3067\u3059\u3002"}]}]}]},{"id":"profiles","sort":"8","name":"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb","description":"\u7ba1\u7406\u8005\u306e\u7d39\u4ecb\u3067\u3059\u3002","articles":[{"title":"\u7ba1\u7406\u8005\u306e\u81ea\u5df1\u7d39\u4ecb","link":"/docs/profiles/self-introduction","description":"\u7ba1\u7406\u8005\u306e\u81ea\u5df1\u7d39\u4ecb\u3067\u3059\u3002"},{"title":"\u500b\u4eba\u306e\u958b\u767a\u74b0\u5883\u7d39\u4ecb","link":"/profiles/personal-development-environment","description":"\u500b\u4eba\u306e\u958b\u767a\u74b0\u5883\u7d39\u4ecb\u3067\u3059\u3002"}]},{"id":"others","sort":"9","name":"\u305d\u306e\u4ed6","description":"\u305d\u306e\u4ed6\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002","articles":[{"title":"FAQ","link":"/docs/faq","description":"\u3088\u304f\u3042\u308b (\u304b\u3082\u3057\u308c\u306a\u3044) \u8cea\u554f\u3068\u305d\u306e\u56de\u7b54\u3092\u307e\u3068\u3081\u305f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3059\u3002"}]}]}')}}]);