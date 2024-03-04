"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[994],{429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(1085),a=n(1184),o=n(1732),l=n(3759);const s={sidebar_position:2},i="Breakpoints",u={id:"theme/breakpoints",title:"Breakpoints",description:"Theme",source:"@site/../../docs/theme/breakpoints.mdx",sourceDirName:"theme",slug:"/theme/breakpoints",permalink:"/docs/theme/breakpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/lebleb/bomonti/blob/main/docs/../../docs/theme/breakpoints.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Theming",permalink:"/docs/theme/"}},c={},d=[{value:"Theme",id:"theme",level:2},{value:"Provider",id:"provider",level:2},{value:"Use value from theme",id:"use-value-from-theme",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"breakpoints",children:"Breakpoints"}),"\n",(0,r.jsx)(t.h2,{id:"theme",children:"Theme"}),"\n",(0,r.jsxs)(o.A,{groupId:"lang",children:[(0,r.jsx)(l.A,{value:"javascript",label:"Javascript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:"title='theme.js'",children:"export const theme = {\n  breakpoints: {mobile: 55},\n  color: {red: \"#ff0000\", red2: '#ff0000'},\n  padding: 50,\n  font: {\n    family: 'Arial',\n    size: 16,\n  },\n};\n"})})}),(0,r.jsx)(l.A,{value:"typescript",label:"Typescript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"title='theme.ts'",children:"export const theme = {\n  breakpoints: {mobile: 55},\n  color: {red: \"#ff0000\", red2: '#ff0000'},\n  padding: 50,\n  font: {\n    family: 'Arial',\n    size: 16,\n  },\n};\n\nexport type Theme = typeof theme;\n\ndeclare module 'bomonti' {\n  export interface DefaultTheme extends Theme {}\n}\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"provider",children:"Provider"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import { ThemeProvider } from 'bomonti';\nimport { theme } from './theme.mdx';\n\nfunction App() {\n  return (\n      <ThemeProvider value={theme}>\n        ...\n      </ThemeProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"use-value-from-theme",children:"Use value from theme"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:"title='theme.ts'",children:"import { Text, View } from 'react-native';\nimport styled from 'bomonti';\n\nexport default function TabOneScreen() {\n  return (\n    <Container>\n      <Title>Tab One</Title>\n      <Seperator />\n      <Content>...</Content>\n    </Container>\n  );\n}\n\nconst Container = styled(View)(({ theme }) => ({\n  flex: 1,\n  alignItems: 'center',\n  justifyContent: 'center',\n  backgroundColor: theme.color.red\n}));\n\nconst Title = styled(Text)({\n  fontSize: 20,\n  fontWeight: 'bold'\n});\n\nconst Seperator = styled(Text)({\n  marginVertical: 30,\n  height: 1,\n  width: '80%',\n  backgroundColor: ({ theme }) => theme.color.red2\n});\n\nconst Content = styled(Text)({\n  marginVertical: 30,\n  height: 1,\n  width: '80%',\n  backgroundColor: ({ theme }) => theme.color.red2\n});\n\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},3759:(e,t,n)=>{n.d(t,{A:()=>l});n(4041);var r=n(4357);const a={tabItem:"tabItem_OMyP"};var o=n(1085);function l(e){let{children:t,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},1732:(e,t,n)=>{n.d(t,{A:()=>T});var r=n(4041),a=n(4357),o=n(1034),l=n(6090),s=n(3351),i=n(6703),u=n(6004),c=n(2096);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=u??f;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(213);const v={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};var g=n(1085);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=s[n].value;a!==r&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function T(e){const t=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},1184:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(4041);const a={},o=r.createContext(a);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);