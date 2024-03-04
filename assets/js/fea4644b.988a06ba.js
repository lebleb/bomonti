"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[631],{2047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(1085),a=n(1184),l=n(1732),s=n(3759);const o={sidebar_position:2},i="Installation",u={id:"installation",title:"Installation",description:"Let's discover Bomonti in less than 5 minutes.",source:"@site/../../docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/bomonti/docs/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/lebleb/bomonti/blob/main/docs/../../docs/installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/bomonti/docs/intro"},next:{title:"Theme",permalink:"/bomonti/docs/category/theme"}},c={},d=[{value:"Install",id:"install",level:2},{value:"Theme",id:"theme",level:2},{value:"Provider",id:"provider",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(t.p,{children:["Let's discover ",(0,r.jsx)(t.strong,{children:"Bomonti in less than 5 minutes"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"yarn",label:"Yarn",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add bomonti\n"})})}),(0,r.jsx)(s.A,{value:"npm",label:"Npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install bomonti\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"theme",children:"Theme"}),"\n",(0,r.jsxs)(l.A,{groupId:"lang",children:[(0,r.jsx)(s.A,{value:"javascript",label:"Javascript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:"title='theme.js'",children:"export const theme = {\n  breakpoints: {mobile: 55},\n  color: {red: \"#ff0000\", red2: '#ff0000'},\n  padding: 50,\n  font: {\n    family: 'Arial',\n    size: 16,\n  },\n};\n"})})}),(0,r.jsx)(s.A,{value:"typescript",label:"Typescript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"title='theme.ts'",children:"export const theme = {\n  breakpoints: {mobile: 55},\n  color: {red: \"#ff0000\", red2: '#ff0000'},\n  padding: 50,\n  font: {\n    family: 'Arial',\n    size: 16,\n  },\n};\n\nexport type Theme = typeof theme;\n\ndeclare module 'bomonti' {\n  export interface DefaultTheme extends Theme {}\n}\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"provider",children:"Provider"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import { ThemeProvider } from 'bomonti';\nimport { theme } from './theme';\n\nfunction App() {\n  return (\n      <ThemeProvider value={theme}>\n        ...\n      </ThemeProvider>\n  );\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},3759:(e,t,n)=>{n.d(t,{A:()=>s});n(4041);var r=n(4357);const a={tabItem:"tabItem_OMyP"};var l=n(1085);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},1732:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(4041),a=n(4357),l=n(1034),s=n(6090),o=n(3351),i=n(6703),u=n(6004),c=n(2096);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=p({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=u??b;return h({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=n(213);const v={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};var g=n(1085);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function I(e){const t=(0,f.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},1184:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(4041);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);