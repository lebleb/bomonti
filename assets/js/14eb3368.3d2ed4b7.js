"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[969],{3021:(e,t,s)=>{s.d(t,{A:()=>p});s(4041);var n=s(4357),i=s(7473),a=s(268),r=s(4271),c=s(2436),l=s(9082),o=s(5215),d=s(1085);function m(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const u={breadcrumbHomeIcon:"breadcrumbHomeIcon_JFrk"};function h(){const e=(0,o.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(c.A,{"aria-label":(0,l.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(m,{className:u.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_zCmv"};function x(e){let{children:t,href:s,isLast:n}=e;const i="breadcrumbs__link";return n?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):s?(0,d.jsx)(c.A,{className:i,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function v(e){let{children:t,active:s,index:i,addMicrodata:a}=e;return(0,d.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function p(){const e=(0,a.OF)(),t=(0,r.Dt)();return e?(0,d.jsx)("nav",{className:(0,n.A)(i.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,l.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const n=s===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(v,{active:n,index:s,addMicrodata:!!i,children:(0,d.jsx)(x,{href:i,isLast:n,children:t.label})},s)}))]})}):null}},6146:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});s(4041);var n=s(145),i=s(268),a=s(5215),r=s(4357),c=s(2436),l=s(5436),o=s(9082),d=s(4441);const m={cardContainer:"cardContainer_Shn5",cardTitle:"cardTitle_h48N",cardDescription:"cardDescription_CytT"};var u=s(1085);function h(e){let{href:t,children:s}=e;return(0,u.jsx)(c.A,{href:t,className:(0,r.A)("card padding--lg",m.cardContainer),children:s})}function b(e){let{href:t,icon:s,title:n,description:i}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(d.A,{as:"h2",className:(0,r.A)("text--truncate",m.cardTitle),title:n,children:[s," ",n]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",m.cardDescription),title:i,children:i})]})}function x(e){let{item:t}=e;const s=(0,i.Nr)(t);return s?(0,u.jsx)(b,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const s=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.cC)(t.docId??void 0);return(0,u.jsx)(b,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(v,{item:t});case"category":return(0,u.jsx)(x,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const s=(0,i.$S)();return(0,u.jsx)(j,{items:s.items,className:t})}function j(e){const{items:t,className:s}=e;if(!t)return(0,u.jsx)(g,{...e});const n=(0,i.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",s),children:n.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(p,{item:e})},t)))})}var f=s(4289),A=s(1524),N=s(2101),T=s(3021);const L={generatedIndexPage:"generatedIndexPage_ak01",list:"list_iQEt",title:"title_AulG"};function _(e){let{categoryGeneratedIndex:t}=e;return(0,u.jsx)(n.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,a.A)(t.image)})}function k(e){let{categoryGeneratedIndex:t}=e;const s=(0,i.$S)();return(0,u.jsxs)("div",{className:L.generatedIndexPage,children:[(0,u.jsx)(A.A,{}),(0,u.jsx)(T.A,{}),(0,u.jsx)(N.A,{}),(0,u.jsxs)("header",{children:[(0,u.jsx)(d.A,{as:"h1",className:L.title,children:t.title}),t.description&&(0,u.jsx)("p",{children:t.description})]}),(0,u.jsx)("article",{className:"margin-top--lg",children:(0,u.jsx)(j,{items:s.items,className:L.list})}),(0,u.jsx)("footer",{className:"margin-top--lg",children:(0,u.jsx)(f.A,{previous:t.navigation.previous,next:t.navigation.next})})]})}function y(e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(_,{...e}),(0,u.jsx)(k,{...e})]})}},4289:(e,t,s)=>{s.d(t,{A:()=>r});s(4041);var n=s(9082),i=s(56),a=s(1085);function r(e){const{previous:t,next:s}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.jsx)(i.A,{...t,subLabel:(0,a.jsx)(n.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,a.jsx)(i.A,{...s,subLabel:(0,a.jsx)(n.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},2101:(e,t,s)=>{s.d(t,{A:()=>l});s(4041);var n=s(4357),i=s(9082),a=s(7473),r=s(6738),c=s(1085);function l(e){let{className:t}=e;const s=(0,r.r)();return s.badge?(0,c.jsx)("span",{className:(0,n.A)(t,a.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,c.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},1524:(e,t,s)=>{s.d(t,{A:()=>v});s(4041);var n=s(4357),i=s(396),a=s(2436),r=s(9082),c=s(6169),l=s(7473),o=s(9599),d=s(6738),m=s(1085);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(r.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(r.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=u[e.versionMetadata.banner];return(0,m.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,m.jsx)(r.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,m.jsx)("b",{children:(0,m.jsx)(a.A,{to:s,onClick:n,children:(0,m.jsx)(r.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:a}}=(0,i.A)(),{pluginId:r}=(0,c.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,o.g1)(r),{latestDocSuggestion:u,latestVersionSuggestion:x}=(0,c.HW)(r),v=u??(p=x).docs.find((e=>e.id===p.mainDocId));var p;return(0,m.jsxs)("div",{className:(0,n.A)(t,l.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,m.jsx)("div",{children:(0,m.jsx)(h,{siteTitle:a,versionMetadata:s})}),(0,m.jsx)("div",{className:"margin-top--md",children:(0,m.jsx)(b,{versionLabel:x.label,to:v.path,onClick:()=>d(x.name)})})]})}function v(e){let{className:t}=e;const s=(0,d.r)();return s.banner?(0,m.jsx)(x,{className:t,versionMetadata:s}):null}},56:(e,t,s)=>{s.d(t,{A:()=>r});s(4041);var n=s(4357),i=s(2436),a=s(1085);function r(e){const{permalink:t,title:s,subLabel:r,isNext:c}=e;return(0,a.jsxs)(i.A,{className:(0,n.A)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,a.jsx)("div",{className:"pagination-nav__label",children:s})]})}}}]);