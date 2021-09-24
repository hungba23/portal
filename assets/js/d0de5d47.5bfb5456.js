(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[7444],{4137:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return g}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=i,f=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8139:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(2122),i=r(9756),o=(r(7294),r(4137)),a={id:"prerequisite-knowledge",title:"Prerequisite knowledge",sidebar_label:"Prerequisite knowledge",description:"Prerequisite knowledge to work with Cardano Serialization Lib",image:"./img/og-developer-portal.png"},l="Prerequisite knowledge",s={unversionedId:"get-started/cardano-serialization-lib/prerequisite-knowledge",id:"get-started/cardano-serialization-lib/prerequisite-knowledge",isDocsHomePage:!1,title:"Prerequisite knowledge",description:"Prerequisite knowledge to work with Cardano Serialization Lib",source:"@site/docs/get-started/cardano-serialization-lib/prerequisite-knowledge.md",sourceDirName:"get-started/cardano-serialization-lib",slug:"/get-started/cardano-serialization-lib/prerequisite-knowledge",permalink:"/docs/get-started/cardano-serialization-lib/prerequisite-knowledge",editUrl:"https://github.com/cardano-foundation/developer-portal/edit/staging/docs/get-started/cardano-serialization-lib/prerequisite-knowledge.md",tags:[],version:"current",lastUpdatedBy:"katomm",lastUpdatedAt:1625413895,formattedLastUpdatedAt:"7/4/2021",frontMatter:{id:"prerequisite-knowledge",title:"Prerequisite knowledge",sidebar_label:"Prerequisite knowledge",description:"Prerequisite knowledge to work with Cardano Serialization Lib",image:"./img/og-developer-portal.png"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/get-started/cardano-serialization-lib/overview"},next:{title:"Generating Keys and Addresses",permalink:"/docs/get-started/cardano-serialization-lib/generating-keys"}},c=[],d={toc:c};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisite-knowledge"},"Prerequisite knowledge"),(0,o.kt)("p",null,"This library assumes a certain amount of knowledge about how Cardano works (want to avoid re-documenting the wheel)."),(0,o.kt)("p",null,"You can find the specifications of Cardano's ledger ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger-specs"},"here")," which we suggest consulting as you use this library. Notably, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Shelley ledger formal specification")," covers the core concepts."))}u.isMDXComponent=!0}}]);