(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[5702],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7804:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(4137)),i={id:"cardano-components",title:"Cardano Components",sidebar_label:"Overview",description:"This article explains all the different Cardano components and their functions.",image:"./img/og-developer-portal.png"},c=void 0,s={unversionedId:"get-started/cardano-components",id:"get-started/cardano-components",isDocsHomePage:!1,title:"Cardano Components",description:"This article explains all the different Cardano components and their functions.",source:"@site/docs/get-started/cardano-components.md",sourceDirName:"get-started",slug:"/get-started/cardano-components",permalink:"/docs/get-started/cardano-components",editUrl:"https://github.com/cardano-foundation/developer-portal/edit/staging/docs/get-started/cardano-components.md",tags:[],version:"current",lastUpdatedBy:"Ganesh Nithyanandam",lastUpdatedAt:1626169051,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"cardano-components",title:"Cardano Components",sidebar_label:"Overview",description:"This article explains all the different Cardano components and their functions.",image:"./img/og-developer-portal.png"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/get-started/"},next:{title:"Installing cardano-node",permalink:"/docs/get-started/installing-cardano-node"}},p=[],l={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node#cardano-node-overview"},(0,o.kt)("inlineCode",{parentName:"a"},"cardano-node"))," is the core component that is used to participate in a Cardano decentralised blockchain. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cardano-cli")," is the Cardano Command Line Interface (CLI). For some time this component is included in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node#cardano-node-overview"},(0,o.kt)("inlineCode",{parentName:"a"},"cardano-node")),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-wallet#overview"},(0,o.kt)("inlineCode",{parentName:"a"},"cardano-wallet"))," is the HTTP server and command-line for managing UTxOs and HD wallets in Cardano."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync#cardano-db-sync"},(0,o.kt)("inlineCode",{parentName:"a"},"cardano-db-sync"))," is the component that follows the Cardano chain and stores blocks and transactions in PostgreSQL."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-graphql#overview"},(0,o.kt)("inlineCode",{parentName:"a"},"cardano-graphql"))," is a cross-platform, typed, and queryable API for Cardano."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-rosetta#cardano-rosetta"},(0,o.kt)("inlineCode",{parentName:"a"},"cardano-rosetta"))," is an implementation of the open standard ",(0,o.kt)("a",{parentName:"li",href:"https://www.rosetta-api.org/"},"Rosetta")," for Cardano."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-addresses#overview"},(0,o.kt)("inlineCode",{parentName:"a"},"cardano-addresses"))," is a module that provides mnemonic (backup phrase) creation, and conversion of a mnemonic to seed for wallet restoration, and address derivation functionalities."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger-specs#cardano-ledger"},(0,o.kt)("inlineCode",{parentName:"a"},"cardano-ledger-specs"))," is the formal specification and executable model of the ledger rules introduced by the Shelley release."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/bech32#bech32-command-line"},(0,o.kt)("inlineCode",{parentName:"a"},"bech32"))," is the Haskell implementation of the Bech32 address format (BIP 0173)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/smash#smash-overview"},(0,o.kt)("inlineCode",{parentName:"a"},"smash"))," is the stake pool metadata aggregation server. It provides off-chain metadata linked to the on-chain registrations of the stake pools."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/#ouroboros-network"},(0,o.kt)("inlineCode",{parentName:"a"},"ouroboros-network"))," is a network package which implements the ouroboros family of protocols, multiplexing layer.")))}d.isMDXComponent=!0}}]);