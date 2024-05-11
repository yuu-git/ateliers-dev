"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[4637],{3438:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var i=s(4848),l=s(8453);const r={id:"technical-policies-csharp-names-of-namespaces",slug:"/technical-policies/csharp/names-of-namespaces/",category:"\u30c6\u30af\u30cb\u30ab\u30eb\u30dd\u30ea\u30b7\u30fc",title:"ateliers.dev - \u30c6\u30af\u30cb\u30ab\u30eb\u30dd\u30ea\u30b7\u30fc - \u3010C#\u3011 \u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd",sidebar_label:"\u3010C#\u3011 \u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd",tags:["C#","Naming-Policy","Namespace"],description:"ateliers.dev \u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u300c\u30c6\u30af\u30cb\u30ab\u30eb\u30dd\u30ea\u30b7\u30fc\u300d\u3067\u3059\u3002C# \u306b\u304a\u3051\u308b\u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002",image:"img/jpg/ateliers-dev-technical-policies.jpg"},c="\u3010C#\u3011 \u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd",d={id:"technical-policies/csharp/technical-policies-csharp-names-of-namespaces",title:"ateliers.dev - \u30c6\u30af\u30cb\u30ab\u30eb\u30dd\u30ea\u30b7\u30fc - \u3010C#\u3011 \u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd",description:"ateliers.dev \u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u300c\u30c6\u30af\u30cb\u30ab\u30eb\u30dd\u30ea\u30b7\u30fc\u300d\u3067\u3059\u3002C# \u306b\u304a\u3051\u308b\u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/technical-policies/csharp/names-of-namespaces.md",sourceDirName:"technical-policies/csharp",slug:"/technical-policies/csharp/names-of-namespaces/",permalink:"/docs/technical-policies/csharp/names-of-namespaces/",draft:!1,unlisted:!1,editUrl:"https://github.com/yuu-git/ateliers-dev/edit/master/docs/technical-policies/csharp/names-of-namespaces.md",tags:[{label:"C#",permalink:"/docs/tags/c"},{label:"Naming-Policy",permalink:"/docs/tags/naming-policy"},{label:"Namespace",permalink:"/docs/tags/namespace"}],version:"current",frontMatter:{id:"technical-policies-csharp-names-of-namespaces",slug:"/technical-policies/csharp/names-of-namespaces/",category:"\u30c6\u30af\u30cb\u30ab\u30eb\u30dd\u30ea\u30b7\u30fc",title:"ateliers.dev - \u30c6\u30af\u30cb\u30ab\u30eb\u30dd\u30ea\u30b7\u30fc - \u3010C#\u3011 \u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd",sidebar_label:"\u3010C#\u3011 \u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd",tags:["C#","Naming-Policy","Namespace"],description:"ateliers.dev \u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u300c\u30c6\u30af\u30cb\u30ab\u30eb\u30dd\u30ea\u30b7\u30fc\u300d\u3067\u3059\u3002C# \u306b\u304a\u3051\u308b\u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002",image:"img/jpg/ateliers-dev-technical-policies.jpg"},sidebar:"technicalPoliciesSidebar",previous:{title:"\u30c6\u30af\u30cb\u30ab\u30eb\u30dd\u30ea\u30b7\u30fc\u306e\u4f5c\u6210\u65b9\u91dd",permalink:"/docs/technical-policies/writing-guide"}},t={},h=[{value:"1. \u57fa\u672c\u7684\u306a\u8003\u3048\u65b9",id:"1-\u57fa\u672c\u7684\u306a\u8003\u3048\u65b9",level:2},{value:"2. \u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd\u306e\u6982\u8981",id:"2-\u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd\u306e\u6982\u8981",level:2},{value:"2.1. \u547d\u540d\u65b9\u91dd\uff1a\u63a8\u5968\u4e8b\u9805\u306e\u5177\u4f53\u7684\u7406\u7531",id:"21-\u547d\u540d\u65b9\u91dd\u63a8\u5968\u4e8b\u9805\u306e\u5177\u4f53\u7684\u7406\u7531",level:3},{value:"2.2. \u547d\u540d\u65b9\u91dd\uff1a\u6ce8\u610f\u4e8b\u9805\u306e\u5177\u4f53\u7684\u7406\u7531",id:"22-\u547d\u540d\u65b9\u91dd\u6ce8\u610f\u4e8b\u9805\u306e\u5177\u4f53\u7684\u7406\u7531",level:3},{value:"2.3. \u547d\u540d\u65b9\u91dd\uff1a\u7981\u6b62\u4e8b\u9805\u306e\u5177\u4f53\u7684\u7406\u7531",id:"23-\u547d\u540d\u65b9\u91dd\u7981\u6b62\u4e8b\u9805\u306e\u5177\u4f53\u7684\u7406\u7531",level:3},{value:"3. \u30ea\u30dd\u30b8\u30c8\u30ea\u3078\u306e\u540d\u524d\u7a7a\u9593\u9069\u7528",id:"3-\u30ea\u30dd\u30b8\u30c8\u30ea\u3078\u306e\u540d\u524d\u7a7a\u9593\u9069\u7528",level:2},{value:"3.1. \u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u304c\u8907\u6570\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u6301\u3064\u5834\u5408",id:"31-\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u304c\u8907\u6570\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u6301\u3064\u5834\u5408",level:3},{value:"4. \u30c6\u30b9\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u540d\u524d\u7a7a\u9593",id:"4-\u30c6\u30b9\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u540d\u524d\u7a7a\u9593",level:2},{value:"5. \u547d\u540d\u898f\u5247\u306e\u4f8b\u5916\u30b1\u30fc\u30b9",id:"5-\u547d\u540d\u898f\u5247\u306e\u4f8b\u5916\u30b1\u30fc\u30b9",level:2},{value:"6. \u4f7f\u7528\u4e2d\u306e\u540d\u524d\u7a7a\u9593",id:"6-\u4f7f\u7528\u4e2d\u306e\u540d\u524d\u7a7a\u9593",level:2},{value:"6.1. \u4f7f\u7528\u4e0d\u53ef\u306e\u540d\u524d\u7a7a\u9593",id:"61-\u4f7f\u7528\u4e0d\u53ef\u306e\u540d\u524d\u7a7a\u9593",level:3},{value:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306e\u63d0\u4f9b\u65b9\u6cd5\u3084\u9023\u7d61\u5148",id:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306e\u63d0\u4f9b\u65b9\u6cd5\u3084\u9023\u7d61\u5148",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"c-\u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd",children:"\u3010C#\u3011 \u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"[Created: 2024/04/29, Update: 2024/05/03]"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"\u79c1\u306e C# \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u304a\u3051\u308b\u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,i.jsxs)(n.p,{children:["\u3053\u306e\u8a18\u4e8b\u306f\u3001\u79c1\u500b\u4eba\u306e\u6280\u8853\u5229\u7528\u65b9\u91dd\u3067\u3042\u308a\u3001\u63a8\u5968\u4e8b\u9805\u3084\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306e\u4e3b\u5f35\u3067\u306f\u3054\u3056\u3044\u307e\u305b\u3093\u3002",(0,i.jsx)(n.br,{}),"\n","\u500b\u4eba\u7684\u306a\u30a2\u30d7\u30ed\u30fc\u30c1\u4f8b\u306e\u7d39\u4ecb\u3067\u3042\u308a\u3001\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3084\u74b0\u5883\u306b\u6700\u9069\u3068\u306f\u9650\u308a\u307e\u305b\u3093\u304c\u3001\u53c2\u8003\u306b\u3057\u3066\u3044\u305f\u3060\u3051\u308b\u3068\u5e78\u3044\u3067\u3059\u3002"]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-\u57fa\u672c\u7684\u306a\u8003\u3048\u65b9",children:"1. \u57fa\u672c\u7684\u306a\u8003\u3048\u65b9"}),"\n",(0,i.jsx)(n.p,{children:"\u57fa\u672c\u7684\u306b\u3001Microsoft\u306eC#\u306b\u304a\u3051\u308b\u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd\u306b\u5f93\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u53c2\u8003: ","\ud83d\udce4",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/ja-jp/dotnet/standard/design-guidelines/names-of-namespaces",children:"Microsoft - \u540d\u524d\u4ed8\u3051\u306e\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3 - \u540d\u524d\u7a7a\u9593\u306e\u540d\u524d"})]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u8a18\u306b\u5f93\u3044\u3001\u79c1\u306eC#\u306e\u540d\u524d\u7a7a\u9593\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u547d\u540d\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"Ateliers.(<Product>|<Technology>)[.<Feature>][.<Subnamespace>]\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-\u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd\u306e\u6982\u8981",children:"2. \u540d\u524d\u7a7a\u9593\u306e\u547d\u540d\u65b9\u91dd\u306e\u6982\u8981"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ateliers"})," \u306f\u3001\u79c1\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5168\u3066\u306b\u304a\u3044\u3066\u3001\u540d\u524d\u7a7a\u9593\u306e\u30eb\u30fc\u30c8\u3068\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u82f1\u5358\u8a9e\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u69cb\u6210\u3057\u307e\u3059\u3002\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u540d\u3084\u30b5\u30fc\u30d3\u30b9\u540d\u3001\u56fd\u969b\u7684\u306b\u901a\u7528\u3059\u308b\u660e\u77ad\u306a\u82f1\u8a9e\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u30d1\u30b9\u30ab\u30eb\u30b1\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u3001\u5fc5\u305a\u5148\u982d\u306f\u5927\u6587\u5b57\u3067\u59cb\u3081\u307e\u3059\u3002\u9014\u4e2d\u306b\u5927\u6587\u5b57\u3092\u542b\u3081\u308b\u306e\u3082\u53ef\u80fd\u3068\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6570\u5b57\u306f\u4f7f\u7528\u53ef\u80fd\u3067\u3059\u3002\uff08\u30b7\u30b9\u30c6\u30e0\u7684\u306b\u5148\u982d\u306b\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u9069\u5207\u306b\u7565\u8a9e\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u7565\u8a9e\u306e\u610f\u5473\u3092\u660e\u78ba\u306b\u3057\u3001\u4e00\u822c\u7684\u3067\u306f\u306a\u3044\u7565\u8a9e\u3068\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u56fa\u6709\u306e\u7565\u8a9e\u306f\u3001\u6975\u529b\u907f\u3051\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:'\u30cf\u30a4\u30d5\u30f3("-")\u3084\u30a2\u30f3\u30c0\u30fc\u30b9\u30b3\u30a2("_")\u304a\u3088\u3073\u7279\u6b8a\u6587\u5b57\u306f\u4f7f\u7528\u3057\u307e\u305b\u3093\u3002'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u305d\u306e\u4ed6\u306e\u65b9\u91dd\u306b\u3064\u3044\u3066\u306f\u3001Microsoft\u306e\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3\u306b\u5f93\u3046\u305f\u3081\u3001\u7701\u7565\u3057\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","\uff08",(0,i.jsx)(n.code,{children:"Log"})," \u3084 ",(0,i.jsx)(n.code,{children:"Text"})," \u306a\u3069\u306e\u7af6\u5408\u3057\u3084\u3059\u3044\u540d\u524d\u306f\u4f7f\u308f\u306a\u3044\u3001\u306a\u3069\uff09"]}),"\n",(0,i.jsx)(n.p,{children:"\u6b21\u306b\u3001\u3053\u308c\u3089\u306e\u547d\u540d\u65b9\u91dd\u306e\u7406\u7531\u3092\u5177\u4f53\u5316\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"21-\u547d\u540d\u65b9\u91dd\u63a8\u5968\u4e8b\u9805\u306e\u5177\u4f53\u7684\u7406\u7531",children:"2.1. \u547d\u540d\u65b9\u91dd\uff1a\u63a8\u5968\u4e8b\u9805\u306e\u5177\u4f53\u7684\u7406\u7531"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ateliers"})," \u306f\u3001\u79c1\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5168\u3066\u306b\u304a\u3044\u3066\u3001\u540d\u524d\u7a7a\u9593\u306e\u30eb\u30fc\u30c8\u3068\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ateliers.dev"})," \u304c\u79c1\u306e\u4fdd\u6709\u30c9\u30e1\u30a4\u30f3\u3067\u3042\u308b\u305f\u3081 ",(0,i.jsx)(n.code,{children:"Ateliers"})," \u3092\u540d\u524d\u7a7a\u9593\u306e\u30eb\u30fc\u30c8\u3068\u3059\u308b\u3053\u3068\u3067\u3001\u4ed6\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u306e\u7af6\u5408\u3092\u907f\u3051\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u82f1\u5358\u8a9e\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u69cb\u6210\u3057\u307e\u3059\u3002\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u540d\u3084\u30b5\u30fc\u30d3\u30b9\u540d\u3001\u56fd\u969b\u7684\u306b\u901a\u7528\u3059\u308b\u660e\u77ad\u306a\u82f1\u8a9e\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u82f1\u5358\u8a9e\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u3067\u3001\u540d\u524d\u7a7a\u9593\u306e\u7406\u89e3\u3092\u5bb9\u6613\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30d1\u30b9\u30ab\u30eb\u30b1\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u3001\u5fc5\u305a\u5148\u982d\u306f\u5927\u6587\u5b57\u3067\u59cb\u3081\u307e\u3059\u3002\u9014\u4e2d\u306b\u5927\u6587\u5b57\u3092\u542b\u3081\u308b\u306e\u3082\u53ef\u80fd\u3068\u3057\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"C#\u306e\u6a19\u6e96\u7684\u306a\u547d\u540d\u898f\u5247\u3067\u3059\u3002\u30d1\u30b9\u30ab\u30eb\u30b1\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6570\u5b57\u306f\u4f7f\u7528\u53ef\u80fd\u3067\u3059\u3002\uff08\u30b7\u30b9\u30c6\u30e0\u7684\u306b\u5148\u982d\u306b\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\uff09"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7279\u5225\u306a\u7279\u8a18\u4e8b\u9805\u3068\u306a\u308b\u9805\u76ee\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001C#\u3067\u306f\u5148\u982d\u306b\u6570\u5b57\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"22-\u547d\u540d\u65b9\u91dd\u6ce8\u610f\u4e8b\u9805\u306e\u5177\u4f53\u7684\u7406\u7531",children:"2.2. \u547d\u540d\u65b9\u91dd\uff1a\u6ce8\u610f\u4e8b\u9805\u306e\u5177\u4f53\u7684\u7406\u7531"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u9069\u5207\u306b\u7565\u8a9e\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u7565\u8a9e\u306e\u610f\u5473\u3092\u660e\u78ba\u306b\u3057\u3001\u4e00\u822c\u7684\u3067\u306f\u306a\u3044\u7565\u8a9e\u3068\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u56fa\u6709\u306e\u7565\u8a9e\u306f\u3001\u6975\u529b\u907f\u3051\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7565\u8a9e\u3092\u9069\u5207\u306b\u4f7f\u3046\u3053\u3068\u3067\u3001\u5197\u9577\u306a\u540d\u524d\u7a7a\u9593\u3092\u907f\u3051\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","\u3053\u308c\u306b\u3088\u308a\u3001\u540d\u524d\u7a7a\u9593\u306e\u7d20\u65e9\u3044\u7406\u89e3\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u76ee\u7684\u3067\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3057\u304b\u3057\u3001\u7565\u8a9e\u306f\u4e00\u822c\u7684\u3067\u306f\u7121\u304b\u3063\u305f\u308a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u56fa\u6709\u306e\u3082\u306e\u3092\u4f7f\u3046\u3068\u3001\u7406\u89e3\u304c\u96e3\u3057\u304f\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u6975\u529b\u907f\u3051\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","\uff08\u6975\u529b\u3067\u3042\u308a\u3001\u4f7f\u3063\u3066\u306f\u306a\u3089\u306a\u3044\u3001\u3068\u3044\u3046\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\uff09"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u3048\u3070\u3001\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406\u6a5f\u80fd (User Management) \u3092 ",(0,i.jsx)(n.code,{children:"UM"})," \u3068\u7565\u3059\u3068\u3001\u4ed6\u306e\u958b\u767a\u8005\u304c\u7406\u89e3\u3059\u308b\u306e\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","\u3053\u306e\u3088\u3046\u306a\u5834\u5408\u306f\u3001\u7565\u8a9e\u3092\u4f7f\u308f\u305a\u306b ",(0,i.jsx)(n.code,{children:"UserManagement"})," \u3068\u3059\u308b\u3053\u3068\u3067\u3001\u4ed6\u306e\u958b\u767a\u8005\u304c\u7406\u89e3\u3057\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"23-\u547d\u540d\u65b9\u91dd\u7981\u6b62\u4e8b\u9805\u306e\u5177\u4f53\u7684\u7406\u7531",children:"2.3. \u547d\u540d\u65b9\u91dd\uff1a\u7981\u6b62\u4e8b\u9805\u306e\u5177\u4f53\u7684\u7406\u7531"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'\u30cf\u30a4\u30d5\u30f3("-")\u3084\u30a2\u30f3\u30c0\u30fc\u30b9\u30b3\u30a2("_")\u304a\u3088\u3073\u7279\u6b8a\u6587\u5b57\u306f\u4f7f\u7528\u3057\u307e\u305b\u3093\u3002'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:['\u30cf\u30a4\u30d5\u30f3("-")\u304a\u3088\u3073\u30a2\u30f3\u30c0\u30fc\u30b9\u30b3\u30a2("_")\u306f\u3001\u3069\u3061\u3089\u3082\u4ed5\u69d8\u4e0a\u306f\u5229\u7528\u304c\u53ef\u80fd\u3067\u3059\u304c',(0,i.jsx)(n.br,{}),"\n","C#\u306e\u540d\u524d\u7a7a\u9593\u306b\u304a\u3044\u3066\u306e\u5229\u7528\u306f\u3042\u307e\u308a\u4e00\u822c\u7684\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u4f7f\u7528\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u7279\u6b8a\u6587\u5b57\u306f\u7570\u5e38\u306b\u7e4b\u304c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u4f7f\u7528\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-\u30ea\u30dd\u30b8\u30c8\u30ea\u3078\u306e\u540d\u524d\u7a7a\u9593\u9069\u7528",children:"3. \u30ea\u30dd\u30b8\u30c8\u30ea\u3078\u306e\u540d\u524d\u7a7a\u9593\u9069\u7528"}),"\n",(0,i.jsx)(n.p,{children:"\u30ea\u30dd\u30b8\u30c8\u30ea\u4f5c\u6210\u306e\u969b\u306f\u3001\u540d\u524d\u7a7a\u9593\u3092\u4f7f\u7528\u3057\u3066\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u3048\u3070\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3 ",(0,i.jsx)(n.code,{children:"Ateliers.Functions.GPTAPI"})," \u304b\u3089\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408",(0,i.jsx)(n.br,{}),"\n","\u30ea\u30dd\u30b8\u30c8\u30ea\u540d\u306f ",(0,i.jsx)(n.code,{children:"ateliers-functions-gptapi"})," \u3068\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u3088\u308a\u8a73\u3057\u3044\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u547d\u540d\u65b9\u91dd\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u5185\u90e8\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u53c2\u8003: ","\ud83d\udcc4",(0,i.jsx)(n.a,{href:"/docs/github-guidelines/repository-naming-policy/",children:"GitHub \u30ac\u30a4\u30c9\u30e9\u30a4\u30f3 - \u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u547d\u540d\u65b9\u91dd"}),"\u21a9\ufe0f"]}),"\n",(0,i.jsx)(n.h3,{id:"31-\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u304c\u8907\u6570\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u6301\u3064\u5834\u5408",children:"3.1. \u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u304c\u8907\u6570\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u6301\u3064\u5834\u5408"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3001\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u304c\u8907\u6570\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u6301\u3061\u3001\u3069\u308c\u3092\u30ea\u30dd\u30b8\u30c8\u30ea\u540d\u3068\u3059\u308b\u304b\u3001\u3042\u3044\u307e\u3044\u306a\u30b1\u30fc\u30b9\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ateliers.Training.PresentationLayer.BlazorWebApp"}),"\n",(0,i.jsx)(n.li,{children:"Ateliers.Training.PresentationLayer.MAUIApps"}),"\n",(0,i.jsx)(n.li,{children:"Ateliers.Training.PresentationLayer.WebAPI"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u5834\u5408\u3001\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u540d\u306f\u5404\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5171\u901a\u306e\u30eb\u30fc\u30c8 ",(0,i.jsx)(n.code,{children:"Ateliers.Training.PresentationLayer"})," \u3068\u3057\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","\u30ea\u30dd\u30b8\u30c8\u30ea\u540d\u306f ",(0,i.jsx)(n.code,{children:"ateliers-training-presentationlayer"})," \u3068\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-\u30c6\u30b9\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u540d\u524d\u7a7a\u9593",children:"4. \u30c6\u30b9\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u540d\u524d\u7a7a\u9593"}),"\n",(0,i.jsx)(n.p,{children:"\u30c6\u30b9\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u540d\u524d\u7a7a\u9593\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u547d\u540d\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Ateliers.Functions.GPTAPI"})," \u306e\u30c6\u30b9\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\uff1a"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30c6\u30b9\u30c8\u7a2e\u5225"}),(0,i.jsx)(n.th,{children:"\u540d\u524d\u7a7a\u9593"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u5358\u4f53\u30c6\u30b9\u30c8"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Ateliers.Functions.GPTAPI.UnitTests"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u7d50\u5408\u30c6\u30b9\u30c8"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Ateliers.Functions.GPTAPI.IntegrationTests"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30c6\u30b9\u30c8\u30ea\u30bd\u30fc\u30b9"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Ateliers.Functions.GPTAPI.TestResources"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Stab"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Ateliers.Functions.GPTAPI.Stubs"})})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5358\u4f53\u30c6\u30b9\u30c8\u306f ",(0,i.jsx)(n.code,{children:"Mock"})," \u3092\u4f7f\u7528\u3057\u3001\u7d50\u5408\u30c6\u30b9\u30c8\u306f ",(0,i.jsx)(n.code,{children:"Stub"})," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","\u3088\u308a\u8a73\u3057\u3044\u30c6\u30b9\u30c8\u306b\u3064\u3044\u3066\u306f\u3001\u30c6\u30b9\u30c8\u6226\u7565\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,i.jsx)(n.br,{}),"\n","\uff08\u4f5c\u6210\u4e2d\uff09"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-\u547d\u540d\u898f\u5247\u306e\u4f8b\u5916\u30b1\u30fc\u30b9",children:"5. \u547d\u540d\u898f\u5247\u306e\u4f8b\u5916\u30b1\u30fc\u30b9"}),"\n",(0,i.jsxs)(n.p,{children:["\u3000",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"\u73fe\u5728\u306e\u3068\u3053\u308d\u3001\u4f8b\u5916\u30b1\u30fc\u30b9\u306e\u8ffd\u52a0\u306f\u3001\u7279\u306b\u3042\u308a\u307e\u305b\u3093\u3002"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-\u4f7f\u7528\u4e2d\u306e\u540d\u524d\u7a7a\u9593",children:"6. \u4f7f\u7528\u4e2d\u306e\u540d\u524d\u7a7a\u9593"}),"\n",(0,i.jsxs)(n.p,{children:["\u30d7\u30ed\u30c0\u30af\u30c8\u4ee5\u5916\u306e\u540d\u524d\u7a7a\u9593\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u547d\u540d\u3057\u3066\u4f7f\u7528\u4e2d\u3067\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","\u968f\u6642\u66f4\u65b0\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u540d\u524d\u7a7a\u9593"}),(0,i.jsx)(n.th,{children:"\u5229\u7528\u76ee\u7684"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ateliers.Core"}),(0,i.jsx)(n.td,{children:"\u5168\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4e2d\u6838\u3068\u306a\u308b\u30b3\u30a2\u30e9\u30a4\u30d6\u30e9\u30ea"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ateliers.Functions.\u3010\u6a5f\u80fd\u540d\u3011"}),(0,i.jsx)(n.td,{children:"\u5358\u4f53\u6a5f\u80fd\u306e NuGet \u3092\u63d0\u4f9b\u3059\u308b\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ateliers.Training.\u3010\u5b66\u7fd2\u540d\u3011"}),(0,i.jsx)(n.td,{children:"\u500b\u4eba\u306e\u5b66\u7fd2\u3084\u7814\u7a76\u7528\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ateliers.Lectures.\u3010\u6559\u6750\u540d\u3011"}),(0,i.jsx)(n.td,{children:"\u8b1b\u7fa9\u3084\u6a5f\u80fd\u8aac\u660e\u7528\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"61-\u4f7f\u7528\u4e0d\u53ef\u306e\u540d\u524d\u7a7a\u9593",children:"6.1. \u4f7f\u7528\u4e0d\u53ef\u306e\u540d\u524d\u7a7a\u9593"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u306f C# \u4ee5\u5916\u3067\u4f7f\u3063\u3066\u3044\u308b\u305f\u3081\u3001\u4f7f\u7528\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30ea\u30dd\u30b8\u30c8\u30ea\u540d"}),(0,i.jsx)(n.th,{children:"\u5229\u7528\u76ee\u7684"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ateliers-dev"}),(0,i.jsx)(n.td,{children:"\u5f53WEB\u30b5\u30a4\u30c8\u306e\u30ea\u30dd\u30b8\u30c8\u30ea"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ateliers-ai-assistants"}),(0,i.jsx)(n.td,{children:"AI\u30b5\u30dd\u30fc\u30c8\u6a5f\u80fd\u7528\u306e\u30ea\u30dd\u30b8\u30c8\u30ea"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306e\u63d0\u4f9b\u65b9\u6cd5\u3084\u9023\u7d61\u5148",children:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306e\u63d0\u4f9b\u65b9\u6cd5\u3084\u9023\u7d61\u5148"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u3053\u306e\u8a18\u4e8b\u306b\u95a2\u3059\u308b\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3084\u3054\u8cea\u554f\u3001\u3054\u610f\u898b\u304c\u3054\u3056\u3044\u307e\u3057\u305f\u3089 ",(0,i.jsx)(n.a,{href:"../../profiles/self-introduction#2-%E9%80%A3%E7%B5%A1%E5%85%88",children:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u30da\u30fc\u30b8\u306e\u9023\u7d61\u5148"})," \u304b\u3089\u304a\u6c17\u8efd\u306b\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002",(0,i.jsx)(n.br,{}),"\n","\u8cb4\u91cd\u306a\u30c7\u30a3\u30b9\u30ab\u30c3\u30b7\u30e7\u30f3\u3092\u304a\u5f85\u3061\u3057\u3066\u304a\u308a\u307e\u3059\u3002"]})}),"\n",(0,i.jsx)(n.hr,{})]})}function j(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var i=s(6540);const l={},r=i.createContext(l);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);