"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[7643],{5124:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(6540);var a=n(4164),i=n(4586),r=n(1213),o=n(7559),s=n(6535),l=n(7713),d=n(1463),c=n(3892),g=n(5260),u=n(6676),p=n(4848);function m(e){const t=(0,u.k)(e);return(0,p.jsx)(g.A,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,i.A)(),{blogDescription:a,blogTitle:o,permalink:s}=t,l="/"===s?n:o;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.be,{title:l,description:a}),(0,p.jsx)(d.A,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:n,sidebar:a}=e;return(0,p.jsxs)(s.A,{sidebar:a,children:[(0,p.jsx)(c.A,{items:n}),(0,p.jsx)(l.A,{metadata:t})]})}function f(e){return(0,p.jsxs)(r.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogListPage),children:[(0,p.jsx)(h,{...e}),(0,p.jsx)(m,{...e}),(0,p.jsx)(b,{...e})]})}},7713:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(1312),i=n(9022),r=n(4848);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(i.A,{permalink:n,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(i.A,{permalink:o,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(7131),i=n(4651),r=n(4848);function o(e){let{items:t,component:n=i.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.i,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},6676:(e,t,n)=>{n.d(t,{k:()=>c,J:()=>g});var a=n(6025),i=n(4586),r=n(6803);var o=n(7131);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function d(e,t,n){return e?{image:p({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function c(e){const{siteConfig:t}=(0,i.A)(),{withBaseUrl:n}=(0,a.h)(),{metadata:{blogDescription:r,blogTitle:o,permalink:c}}=e,g=`${t.url}${c}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:r}=e,{date:o,title:c,description:g,lastUpdatedAt:u}=r,p=a.image??i.image,m=i.keywords??[],h=`${t.url}${r.permalink}`,b=u?s(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:c,name:c,description:g,datePublished:o,...b?{dateModified:b}:{},...l(r.authors),...d(p,n,c),...m?{keywords:m}:{}}}(e.content,t,n)))}}function g(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,o.e)(),{siteConfig:c}=(0,i.A)(),{withBaseUrl:g}=(0,a.h)(),{date:u,title:p,description:m,frontMatter:h,lastUpdatedAt:b}=n,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,A=`${c.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":A,mainEntityOfPage:A,url:A,headline:p,name:p,description:m,datePublished:u,...j?{dateModified:j}:{},...l(n.authors),...d(f,g,p),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${c.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function p(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},4485:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(9421),i=n(4848);function r(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.A,{...e})})}}}]);