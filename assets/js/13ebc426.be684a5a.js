(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[1420],{4137:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=p(a),m=r,y=k["".concat(l,".").concat(m)]||k[m]||c[m]||o;return a?n.createElement(y,i(i({ref:t},d),{},{components:a})):n.createElement(y,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9574:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=a(2122),r=a(9756),o=(a(7294),a(4137)),i={id:"create-stake-pool-keys",title:"Create Stake Pool Keys",sidebar_label:"Create stake pool keys",description:"Stake pool course: Learn how to create stake pool keys.",image:"./img/og-developer-portal.png"},s=void 0,l={unversionedId:"stake-pool-course/handbook/create-stake-pool-keys",id:"stake-pool-course/handbook/create-stake-pool-keys",isDocsHomePage:!1,title:"Create Stake Pool Keys",description:"Stake pool course: Learn how to create stake pool keys.",source:"@site/docs/stake-pool-course/handbook/create-stake-pool-keys.md",sourceDirName:"stake-pool-course/handbook",slug:"/stake-pool-course/handbook/create-stake-pool-keys",permalink:"/docs/stake-pool-course/handbook/create-stake-pool-keys",editUrl:"https://github.com/cardano-foundation/developer-portal/edit/staging/docs/stake-pool-course/handbook/create-stake-pool-keys.md",tags:[],version:"current",lastUpdatedBy:"katomm",lastUpdatedAt:1625336488,formattedLastUpdatedAt:"7/4/2021",frontMatter:{id:"create-stake-pool-keys",title:"Create Stake Pool Keys",sidebar_label:"Create stake pool keys",description:"Stake pool course: Learn how to create stake pool keys.",image:"./img/og-developer-portal.png"},sidebar:"someSidebar",previous:{title:"Create simple transaction",permalink:"/docs/stake-pool-course/handbook/create-simple-transaction"},next:{title:"Register stake pool keys",permalink:"/docs/stake-pool-course/handbook/register-stake-keys"}},p=[{value:"Payment key pair",id:"payment-key-pair",children:[]},{value:"Legacy key",id:"legacy-key",children:[]},{value:"Stake key pair",id:"stake-key-pair",children:[]},{value:"Payment address",id:"payment-address",children:[]},{value:"Stake address",id:"stake-address",children:[]},{value:"Query the balance of an address",id:"query-the-balance-of-an-address",children:[]}],d={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the Shelley era of Cardano, every stakeholder can have two sets of keys and addresses:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Payment Keys and addresses: To send and receive transactions"),(0,o.kt)("li",{parentName:"ul"},"Stake Keys and addresses: To control protocol participation, create a stake pool, delegate and receive rewards.")),(0,o.kt)("h2",{id:"payment-key-pair"},"Payment key pair"),(0,o.kt)("p",null,"To generate a ",(0,o.kt)("em",{parentName:"p"},"payment key pair"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli address key-gen \\\n--verification-key-file payment.vkey \\\n--signing-key-file payment.skey\n")),(0,o.kt)("p",null,"This creates two files ",(0,o.kt)("inlineCode",{parentName:"p"},"payment.vkey")," (the ",(0,o.kt)("em",{parentName:"p"},"public verification key"),") and ",(0,o.kt)("inlineCode",{parentName:"p"},"payment.skey")," (the ",(0,o.kt)("em",{parentName:"p"},"private signing key"),")."),(0,o.kt)("h2",{id:"legacy-key"},"Legacy key"),(0,o.kt)("p",null,"To generate Byron-era ",(0,o.kt)("em",{parentName:"p"},"payment key"),":"),(0,o.kt)("p",null,"Payment key files use the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "PaymentSigningKeyByron_ed25519_bip32",\n    "description": "Payment Signing Key",\n    "cborHex": "hex-here"\n}\n')),(0,o.kt)("p",null,"Where the ",(0,o.kt)("inlineCode",{parentName:"p"},"hex-here")," is generated as ",(0,o.kt)("inlineCode",{parentName:"p"},"0x5880 | xprv | pub | chaincode")),(0,o.kt)("h2",{id:"stake-key-pair"},"Stake key pair"),(0,o.kt)("p",null,"To generate a ",(0,o.kt)("em",{parentName:"p"},"stake key pair")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli stake-address key-gen \\\n--verification-key-file stake.vkey \\\n--signing-key-file stake.skey\n")),(0,o.kt)("h2",{id:"payment-address"},"Payment address"),(0,o.kt)("p",null,"Both verification keys (",(0,o.kt)("inlineCode",{parentName:"p"},"payment.vkey")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"stake.vkey"),") are used to build the address and the resulting ",(0,o.kt)("inlineCode",{parentName:"p"},"payment address")," is associated with these keys."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli address build \\\n--payment-verification-key-file payment.vkey \\\n--stake-verification-key-file stake.vkey \\\n--out-file payment.addr \\\n--mainnet\n")),(0,o.kt)("h2",{id:"stake-address"},"Stake address"),(0,o.kt)("p",null,"To generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"stake address"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli stake-address build \\\n--stake-verification-key-file stake.vkey \\\n--out-file stake.addr \\\n--mainnet\n")),(0,o.kt)("p",null,"This address ",(0,o.kt)("strong",{parentName:"p"},"CAN'T")," receive payments but will receive the rewards from participating in the protocol."),(0,o.kt)("h2",{id:"query-the-balance-of-an-address"},"Query the balance of an address"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Ensure that your node has synced to the current block height which can be checked at ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.cardano.org"},"explorer.cardano.org"),". If it is not, you may see an error referring to the Byron Era."))),(0,o.kt)("p",null,"To query the balance of an address we need a running node and the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"CARDANO_NODE_SOCKET_PATH")," set to the path of the node.socket:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli query utxo \\\n--address $(cat payment.addr) \\\n--mainnet\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"--mainnet")," identifies the Cardano mainnet, for testnets use ",(0,o.kt)("inlineCode",{parentName:"p"},"--testnet-magic 1097911063")," instead."))))}c.isMDXComponent=!0}}]);