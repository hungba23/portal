(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[2740],{4137:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=c(a),u=l,h=m["".concat(i,".").concat(u)]||m[u]||p[u]||s;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,o=new Array(s);o[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8448:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},7358:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),l=a(2713);var s=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(6010),r="tabItem_1uMI",i="tabItemActive_2DSg";var c=function(e){var t,a=e.lazy,l=e.block,c=e.defaultValue,d=e.values,p=e.groupId,m=e.className,u=n.Children.toArray(e.children),h=null!=d?d:u.map((function(e){return{value:e.props.value,label:e.props.label}})),y=null!=c?c:null==(t=u.find((function(e){return e.props.default})))?void 0:t.props.value,g=s(),v=g.tabGroupChoices,f=g.setTabGroupChoices,w=(0,n.useState)(y),k=w[0],b=w[1],N=[];if(null!=p){var T=v[p];null!=T&&T!==k&&h.some((function(e){return e.value===T}))&&b(T)}var C=function(e){var t=e.currentTarget,a=N.indexOf(t),n=h[a].value;b(n),null!=p&&(f(p,n),setTimeout((function(){var e,a,n,l,s,o,r,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,l=e.bottom,s=e.right,o=window,r=o.innerHeight,c=o.innerWidth,a>=0&&s<=c&&l<=r&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case"ArrowLeft":var l=N.indexOf(e.target)-1;a=N[l]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},m)},h.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",r,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:E,onFocus:C,onClick:C},null!=a?a:t)}))),a?(0,n.cloneElement)(u.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},2713:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},8250:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var n=a(2122),l=a(9756),s=(a(7294),a(4137)),o=a(7358),r=a(8448),i={id:"listening-for-payments-wallet",title:"Listening for ada payments using cardano-wallet",sidebar_label:"Receiving payments (cardano-wallet)",description:"How to listen for ada Payments with the cardano-wallet.",image:"./img/og-developer-portal.png"},c=void 0,d={unversionedId:"integrate-cardano/listening-for-payments-wallet",id:"integrate-cardano/listening-for-payments-wallet",isDocsHomePage:!1,title:"Listening for ada payments using cardano-wallet",description:"How to listen for ada Payments with the cardano-wallet.",source:"@site/docs/integrate-cardano/listening-for-payments-wallet.md",sourceDirName:"integrate-cardano",slug:"/integrate-cardano/listening-for-payments-wallet",permalink:"/docs/integrate-cardano/listening-for-payments-wallet",editUrl:"https://github.com/cardano-foundation/developer-portal/edit/staging/docs/integrate-cardano/listening-for-payments-wallet.md",tags:[],version:"current",lastUpdatedBy:"Tommy",lastUpdatedAt:1632486943,formattedLastUpdatedAt:"9/24/2021",frontMatter:{id:"listening-for-payments-wallet",title:"Listening for ada payments using cardano-wallet",sidebar_label:"Receiving payments (cardano-wallet)",description:"How to listen for ada Payments with the cardano-wallet.",image:"./img/og-developer-portal.png"},sidebar:"someSidebar",previous:{title:"Receiving payments (cardano-cli)",permalink:"/docs/integrate-cardano/listening-for-payments-cli"},next:{title:"Testnet Faucet",permalink:"/docs/integrate-cardano/testnet-faucet"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Use case",id:"use-case",children:[]},{value:"Technical flow",id:"technical-flow",children:[]},{value:"Time to code",id:"time-to-code",children:[{value:"Generate wallet and request tAda",id:"generate-wallet-and-request-tada",children:[]},{value:"Retrieve wallet balance",id:"retrieve-wallet-balance",children:[]},{value:"Determine if payment is successful",id:"determine-if-payment-is-successful",children:[]}]},{value:"Running and testing",id:"running-and-testing",children:[]},{value:"Complete the payment",id:"complete-the-payment",children:[]}],m={toc:p};function u(e){var t=e.components,i=(0,l.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This guide assumes that you have basic understanding of ",(0,s.kt)("inlineCode",{parentName:"p"},"cardano-wallet"),", how to use it and that you have installed it into your system. Otherwise we recommend reading ",(0,s.kt)("a",{parentName:"p",href:"/docs/get-started/installing-cardano-node"},"Installing cardano-node"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/get-started/running-cardano"},"Running cardano-node")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/integrate-cardano/creating-wallet-faucet"},"Exploring Cardano Wallets")," guides first."),(0,s.kt)("p",{parentName:"div"},"This guide also assumes that you have ",(0,s.kt)("inlineCode",{parentName:"p"},"cardano-node")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"cardano-wallet")," running in the background and connected to the ",(0,s.kt)("inlineCode",{parentName:"p"},"testnet")," network."))),(0,s.kt)("h2",{id:"use-case"},"Use case"),(0,s.kt)("p",null,"There are many possible reasons why you would want to have the functionality of listening for ",(0,s.kt)("inlineCode",{parentName:"p"},"ada")," payments, but a very obvious use case would be for something like an ",(0,s.kt)("strong",{parentName:"p"},"online shop")," or a ",(0,s.kt)("strong",{parentName:"p"},"payment gateway")," that uses ",(0,s.kt)("inlineCode",{parentName:"p"},"ada")," tokens as the currency."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:a(4118).Z})),(0,s.kt)("h2",{id:"technical-flow"},"Technical flow"),(0,s.kt)("p",null,"To understand how something like this could work in a technical point of view, let's take a look at the following diagram:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:a(9878).Z})),(0,s.kt)("p",null,"So let's imagine a very basic scenario where a ",(0,s.kt)("strong",{parentName:"p"},"customer")," is browsing an online shop. Once the user has choosen and added all the items into the ",(0,s.kt)("strong",{parentName:"p"},"shopping cart"),". The next step would then be to checkout and pay for the items, Of course we will be using ",(0,s.kt)("strong",{parentName:"p"},"Cardano")," for that!"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"front-end")," application would then request for a ",(0,s.kt)("strong",{parentName:"p"},"wallet address")," from the backend service and render a QR code to the ",(0,s.kt)("strong",{parentName:"p"},"customer")," to be scanned via a ",(0,s.kt)("strong",{parentName:"p"},"Cardano wallet"),". The backend service would then know that it has to query the ",(0,s.kt)("inlineCode",{parentName:"p"},"cardano-wallet")," with a certain time interval to confirm and alert the ",(0,s.kt)("strong",{parentName:"p"},"front-end")," application that the payment has completed succesfully."),(0,s.kt)("p",null,"In the meantime the transaction is then being processed and settled within the ",(0,s.kt)("strong",{parentName:"p"},"Cardano")," network. We can see in the diagram above that both parties are ultimately connected to the network via the ",(0,s.kt)("inlineCode",{parentName:"p"},"cardano-node")," software component."),(0,s.kt)("h2",{id:"time-to-code"},"Time to code"),(0,s.kt)("p",null,"Now let's get our hands dirty and see how we can implement something like this in actual code."),(0,s.kt)("h3",{id:"generate-wallet-and-request-tada"},"Generate wallet and request tAda"),(0,s.kt)("p",null,"First, we create our new ",(0,s.kt)("strong",{parentName:"p"},"wallet")," via ",(0,s.kt)("inlineCode",{parentName:"p"},"cardano-wallet")," ",(0,s.kt)("strong",{parentName:"p"},"REST API"),":"),(0,s.kt)("h4",{id:"generate-seed"},"Generate seed"),(0,s.kt)(o.Z,{defaultValue:"js",groupId:"language",values:[{label:"JavaScript",value:"js"},{label:"Typescript",value:"ts"},{label:"Python",value:"py"},{label:"C#",value:"cs"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// Please add this dependency using npm install node-cmd\nimport cmd from \'node-cmd\';\nconst mnemonic = cmd.runSync(["cardano-wallet","recovery-phrase", "generate"].join(" ")).data;\n\n'))),(0,s.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"import subprocess\n\nmnemonic = subprocess.check_output([\n    'cardano-wallet', 'recovery-phrase', 'generate'\n])\n"))),(0,s.kt)(r.Z,{value:"cs",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing SimpleExec; // dotnet add package SimpleExec --version 7.0.0\n\nvar mnemonic = await Command.ReadAsync("cardano-wallet", "recovery-phrase generate", noEcho: true);\n'))),(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'// Please add this dependency using npm install node-cmd but there is no @type definition for it\nconst cmd: any = require(\'node-cmd\');\n\nconst mnemonic: string = cmd.runSync(["cardano-wallet", "recovery-phrase", "generate"].join(" ")).data;\n')))),(0,s.kt)("h4",{id:"restore-wallet-from-seed"},"Restore wallet from seed"),(0,s.kt)("p",null,"We will then pass the generated seed to the wallet create / restore endpoint of ",(0,s.kt)("inlineCode",{parentName:"p"},"cardano-wallet"),"."),(0,s.kt)(o.Z,{defaultValue:"js",groupId:"language",values:[{label:"JavaScript",value:"js"},{label:"Typescript",value:"ts"},{label:"Python",value:"py"},{label:"C#",value:"cs"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// Please add this dependency using npm install node-fetch\nimport fetch from \'node-fetch\';\n\nconst resp = await fetch("http://localhost:9998/v2/wallets", {\n    method: \'POST\',\n    headers: {\n        \'Content-Type\': \'application/json\'\n    },\n    body: JSON.stringify({\n        name: "test_cf_1",\n        mnemonic_sentence: ["expose", "biology", "will", "pause", "taxi", "behave", "inquiry", "lock", "matter", "pride", "divorce", "model", "little", "easily", "solid", "need", "dose", "sadness", "kitchen", "pyramid", "erosion", "shoulder", "double", "fragile"],\n        passphrase: "test123456"\n    })\n});\n'))),(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'// Please add this dependency using npm install node-fetch and npm install @types/node-fetch\nimport fetch from \'node-fetch\';\nimport { Response } from \'node-fetch\';\n\nconst resp: Response = await fetch("http://localhost:9998/v2/wallets", {\n    method: \'POST\',\n    headers: {\n        \'Content-Type\': \'application/json\'\n    },\n    body: JSON.stringify({\n        name: "test_cf_1",\n        mnemonic_sentence: ["expose", "biology", "will", "pause", "taxi", "behave", "inquiry", "lock", "matter", "pride", "divorce", "model", "little", "easily", "solid", "need", "dose", "sadness", "kitchen", "pyramid", "erosion", "shoulder", "double", "fragile"],\n        passphrase: "test123456"\n    })\n});\n'))),(0,s.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'# pip install requests\nimport requests\n\ndata = {\n    \'name\'                  :   \'test_cf_1\',\n    \'mnemonic_sentence\'     :  ["expose", "biology", "will", "pause", "taxi", "behave", "inquiry", "lock", "matter", "pride", "divorce", "model", "little", "easily", "solid", "need", "dose", "sadness", "kitchen", "pyramid", "erosion", "shoulder", "double", "fragile"],\n    \'passphrase\'            :   \'test123456\'\n}\n\nr = requests.post("http://localhost:9998/v2/wallets", json=data)\n'))),(0,s.kt)(r.Z,{value:"cs",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Net.Http;\nusing System.Net.Http.Json;\n\n// Restore the wallet using the previously generated seed. Assuming cardano-wallet is listening on port 9998\nusing var http = new HttpClient() { BaseAddress = new Uri("http://localhost:9998/v2/") };\n\nvar resp = await http.PostAsJsonAsync("wallets", new {\n    name = "test_cf_1",    \n    mnemonic_sentence = new[] { "expose", "biology", "will", "pause", "taxi", "behave", "inquiry", "lock", "matter", "pride", "divorce", "model", "little", "easily", "solid", "need", "dose", "sadness", "kitchen", "pyramid", "erosion", "shoulder", "double", "fragile" },    \n    passphrase = "test123456"\n});\n')))),(0,s.kt)("h4",{id:"get-unused-wallet-address-to-receive-some-payments"},"Get unused wallet address to receive some payments"),(0,s.kt)("p",null,"We will get a ",(0,s.kt)("strong",{parentName:"p"},"wallet address")," to show to the customers and for them to send payments to the wallet. In this case we can use the address to request some ",(0,s.kt)("inlineCode",{parentName:"p"},"tAda")," from the ",(0,s.kt)("a",{parentName:"p",href:"../integrate-cardano/testnet-faucet"},"Cardano Testnet Faucet")," and simulate a payment:"),(0,s.kt)(o.Z,{defaultValue:"js",groupId:"language",values:[{label:"JavaScript",value:"js"},{label:"Typescript",value:"ts"},{label:"Python",value:"py"},{label:"C#",value:"cs"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// Please add this dependency using npm install node-fetch\nimport fetch from 'node-fetch';\nconst walletId = \"101b3814d6977de4b58c9dedc67b87c63a4f36dd\";\nconst resp = await fetch(`http://localhost:9998/v2/wallets/${walletId}/addresses?state=unused`);\nconst addresses = await resp.json();\nconst firstWalletAddress = addresses[0].id;\n"))),(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Please add this dependency using npm install node-fetch and npm install @types/node-fetch\nimport fetch from 'node-fetch';\nimport { Response } from 'node-fetch';\n\nconst walletId: string = \"101b3814d6977de4b58c9dedc67b87c63a4f36dd\";\nconst resp: Response = await fetch(`http://localhost:9998/v2/wallets/${walletId}/addresses?state=unused`);\nconst addresses: any = await resp.json();\nconst firstWalletAddress: string = addresses[0].id;\n"))),(0,s.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# pip install requests\nimport requests\nwalletId = '101b3814d6977de4b58c9dedc67b87c63a4f36dd'\nr = requests.get('http://localhost:9998/v2/wallets/%s/addresses?state=unused' % walletId)\naddresses = r.json()\nfirstWalletAddress = addresses[0]['id']\n"))),(0,s.kt)(r.Z,{value:"cs",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Net.Http;\nusing System.Net.Http.Json;\nusing System.Text.Json;\n\nusing var http = new HttpClient() { BaseAddress = new Uri("http://localhost:9998/v2/") };\n// Retrieve wallet address from previously created wallet\n// Replace with the wallet Id you previously generated above\nvar walletId = "101b3814d6977de4b58c9dedc67b87c63a4f36dd";\nvar address = await http.GetFromJsonAsync<JsonElement>($"wallets/{walletId}/addresses?state=unused");\nvar firstWalletAddress = addressResponse[0].GetProperty("id");\n')))),(0,s.kt)("h3",{id:"retrieve-wallet-balance"},"Retrieve wallet balance"),(0,s.kt)("p",null,"We will then retrieve the wallet details to get stuff like its ",(0,s.kt)("inlineCode",{parentName:"p"},"sync status"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"native assets")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"balance (lovelace)"),". We can then use the ",(0,s.kt)("inlineCode",{parentName:"p"},"balance")," to check if we have received a some payment."),(0,s.kt)(o.Z,{defaultValue:"js",groupId:"language",values:[{label:"JavaScript",value:"js"},{label:"Typescript",value:"ts"},{label:"Python",value:"py"},{label:"C#",value:"cs"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"// Please add this dependency using npm install node-fetch\nimport fetch from 'node-fetch';\nconst walletId = \"101b3814d6977de4b58c9dedc67b87c63a4f36dd\";\n// The total payment we expect in lovelace unit\nconst totalExpectedLovelace = 1000000;\nconst resp = await fetch(`http://localhost:9998/v2/wallets/${walletId}`);\nconst wallet = await resp.json();\nconst balance = wallet.balance.total.quantity;\n"))),(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Please add this dependency using npm install node-fetch and npm install @types/node-fetch\nimport fetch from 'node-fetch';\nimport { Response } from 'node-fetch';\nconst walletId: string = \"101b3814d6977de4b58c9dedc67b87c63a4f36dd\";\n// The total payment we expect in lovelace unit\nconst totalExpectedLovelace = 1000000;\nconst resp: Response = await fetch(`http://localhost:9998/v2/wallets/${walletId}`);\nconst wallet: any = await resp.json();\nconst balance: number = wallet.balance.total.quantity;\n"))),(0,s.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"# pip install requests\nimport requests\nwalletId = '101b3814d6977de4b58c9dedc67b87c63a4f36dd'\n# The total payment we expect in lovelace unit\ntotalExpectedLovelace = 1000000;\nr = requests.get('http://localhost:9998/v2/wallets/%s' % walletId)\nwallet = r.json()\nbalance = wallet['balance']['total']['quantity']\n"))),(0,s.kt)(r.Z,{value:"cs",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Net.Http;\nusing System.Net.Http.Json;\nusing System.Text.Json;\n\nusing var http = new HttpClient() { BaseAddress = new Uri("http://localhost:9998/v2/") };\n// Get Wallet Details / Balance\n// Replace with your wallet Id\nvar walletId = "101b3814d6977de4b58c9dedc67b87c63a4f36dd";\n// The total payment we expect in lovelace unit\nvar totalExpectedLovelace = 1000000;\n\nvar wallet = await http.GetFromJsonAsync<JsonElement>($"wallets/{walletId}");\nvar balance = wallet.GetProperty("balance").GetProperty("total").GetProperty("quantity").GetInt32();\n')))),(0,s.kt)("h3",{id:"determine-if-payment-is-successful"},"Determine if payment is successful"),(0,s.kt)("p",null,"Once we have the total lovelace amount, we will then determine using our code if a specific payment is a success, ultimately sending or shipping the item if it is indeed succesful. In our example, we expect that the payment is equal to ",(0,s.kt)("inlineCode",{parentName:"p"},"1,000,000 lovelace")," that we defined in our ",(0,s.kt)("inlineCode",{parentName:"p"},"totalExpectedLovelace")," constant."),(0,s.kt)(o.Z,{defaultValue:"js",groupId:"language",values:[{label:"JavaScript",value:"js"},{label:"Typescript",value:"ts"},{label:"Python",value:"py"},{label:"C#",value:"cs"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// Check if payment is complete\nconst isPaymentComplete = balance >= totalExpectedLovelace;\n\nconsole.log(`Total Received: ${balance} LOVELACE`);\nconsole.log(`Expected Payment: ${totalExpectedLovelace} LOVELACE`);\nconsole.log(`Payment Complete: ${(isPaymentComplete ? "\u2705":"\u274c")}`);\n'))),(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'// Check if payment is complete\nconst isPaymentComplete: boolean = balance >= totalExpectedLovelace;\n\nconsole.log(`Total Received: ${balance} LOVELACE`);\nconsole.log(`Expected Payment: ${totalExpectedLovelace} LOVELACE`);\nconsole.log(`Payment Complete: ${(isPaymentComplete ? "\u2705":"\u274c")}`);\n'))),(0,s.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'# Check if payment is complete\nisPaymentComplete = balance >= totalExpectedLovelace\n\nprint("Total Received: %s LOVELACE" % balance)\nprint("Expected Payment: %s LOVELACE" % totalExpectedLovelace)\nprint("Payment Complete: %s" % {True: "\u2705", False: "\u274c"} [isPaymentComplete])\n'))),(0,s.kt)(r.Z,{value:"cs",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'// Check if payment is complete\nvar isPaymentComplete = balance >= totalExpectedLovelace;\n\nConsole.WriteLine($"Total Received: {balance} LOVELACE");\nConsole.WriteLine($"Expected Payment: {totalExpectedLovelace} LOVELACE");\nConsole.WriteLine($"Payment Complete: {(isPaymentComplete ? "\u2705":"\u274c")}");\n')))),(0,s.kt)("h2",{id:"running-and-testing"},"Running and testing"),(0,s.kt)("p",null,"Our final code should look something like this:"),(0,s.kt)(o.Z,{defaultValue:"js",groupId:"language",values:[{label:"JavaScript",value:"js"},{label:"Typescript",value:"ts"},{label:"Python",value:"py"},{label:"C#",value:"cs"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// Please add this dependency using npm install node-fetch\nimport fetch from \'node-fetch\';\nconst walletId = "101b3814d6977de4b58c9dedc67b87c63a4f36dd";\n// The total payment we expect in lovelace unit\nconst totalExpectedLovelace = 1000000;\nconst resp = await fetch(`http://localhost:9998/v2/wallets/${walletId}`);\nconst wallet = await resp.json();\nconst balance = wallet.balance.total.quantity;\n\n// Check if payment is complete\nconst isPaymentComplete = balance >= totalExpectedLovelace;\n\nconsole.log(`Total Received: ${balance} LOVELACE`);\nconsole.log(`Expected Payment: ${totalExpectedLovelace} LOVELACE`);\nconsole.log(`Payment Complete: ${(isPaymentComplete ? "\u2705":"\u274c")}`);\n'))),(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'// Please add this dependency using npm install node-fetch and npm install @types/node-fetch\nimport fetch from \'node-fetch\';\nimport { Response } from \'node-fetch\';\nconst walletId: string = "101b3814d6977de4b58c9dedc67b87c63a4f36dd";\nconst totalExpectedLovelace: number = 1000000;\nconst resp: Response = await fetch(`http://localhost:9998/v2/wallets/${walletId}`);\nconst wallet: any = await resp.json();\nconst balance: number = wallet.balance.total.quantity;\n\n// Check if payment is complete\nconst isPaymentComplete: boolean = balance >= totalExpectedLovelace;\n\nconsole.log(`Total Received: ${balance} LOVELACE`);\nconsole.log(`Expected Payment: ${totalExpectedLovelace} LOVELACE`);\nconsole.log(`Payment Complete: ${(isPaymentComplete ? "\u2705":"\u274c")}`);\n'))),(0,s.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"# coding: utf-8\n# pip install requests\nimport requests\nwalletId = '101b3814d6977de4b58c9dedc67b87c63a4f36dd'\nr = requests.get('http://localhost:9998/v2/wallets/%s' % walletId)\nwallet = r.json()\nbalance = wallet['balance']['total']['quantity']\ntotalExpectedLovelace = 1000000\n\n# Check if payment is complete\nisPaymentComplete = balance >= totalExpectedLovelace\n\nprint(\"Total Received: %s LOVELACE\" % balance)\nprint(\"Expected Payment: %s LOVELACE\" % totalExpectedLovelace)\nprint(\"Payment Complete: %s\" % {True: \"\u2705\", False: \"\u274c\"} [isPaymentComplete])\n"))),(0,s.kt)(r.Z,{value:"cs",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Net.Http;\nusing System.Net.Http.Json;\nusing System.Text.Json;\n\nusing var http = new HttpClient() { BaseAddress = new Uri("http://localhost:9998/v2/") };\n// Get Wallet Details / Balance\n// Replace with your wallet Id\nvar walletId = "101b3814d6977de4b58c9dedc67b87c63a4f36dd";\n// The total payment we expect in lovelace unit\nvar totalExpectedLovelace = 1000000;\n\nvar wallet = await http.GetFromJsonAsync<JsonElement>($"wallets/{walletId}");\nvar balance = wallet.GetProperty("balance").GetProperty("total").GetProperty("quantity").GetInt32();\n\n// Check if payment is complete\nvar isPaymentComplete = balance >= totalExpectedLovelace;\n\nConsole.WriteLine($"Total Received: {balance} LOVELACE");\nConsole.WriteLine($"Expected Payment: {totalExpectedLovelace} LOVELACE");\nConsole.WriteLine($"Payment Complete: {(isPaymentComplete ? "\u2705":"\u274c")}");\n')))),(0,s.kt)("p",null,"Now we are ready to test \ud83d\ude80, running the code should give us the following result:"),(0,s.kt)(o.Z,{defaultValue:"js",groupId:"language",values:[{label:"JavaScript",value:"js"},{label:"Typescript",value:"ts"},{label:"Python",value:"py"},{label:"C#",value:"cs"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f node checkPayment.js\nTotal Received: 0 LOVELACE\nExpected Payment: 1000000 LOVELACE\nPayment Complete: \u274c\n"))),(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ts-node checkPayment.ts\nTotal Received: 0 LOVELACE\nExpected Payment: 1000000 LOVELACE\nPayment Complete: \u274c\n"))),(0,s.kt)(r.Z,{value:"cs",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f dotnet run\nTotal Received: 0 LOVELACE\nExpected Payment: 1000000 LOVELACE\nPayment Complete: \u274c\n"))),(0,s.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f python checkPayment.py \nTotal Received: 0 LOVELACE\nExpected Payment: 1000000 LOVELACE\nPayment Complete: \u274c\n")))),(0,s.kt)("p",null,"The code is telling us that our current wallet has received a total of ",(0,s.kt)("inlineCode",{parentName:"p"},"0 lovelace")," and it expected ",(0,s.kt)("inlineCode",{parentName:"p"},"1,000,000 lovelace"),", therefore it concluded that the payment is not complete."),(0,s.kt)("h2",{id:"complete-the-payment"},"Complete the payment"),(0,s.kt)("p",null,"What we can do to simulate a succesful payment is to send atleast ",(0,s.kt)("inlineCode",{parentName:"p"},"1,000,000 lovelace")," into the ",(0,s.kt)("strong",{parentName:"p"},"wallet address")," that we have just generated for this project. We show how you can get the ",(0,s.kt)("strong",{parentName:"p"},"wallet address")," via code in the examples above."),(0,s.kt)("p",null,"Now simply send atleast ",(0,s.kt)("inlineCode",{parentName:"p"},"1,000,000 lovelace")," to this ",(0,s.kt)("strong",{parentName:"p"},"wallet address")," or request some ",(0,s.kt)("inlineCode",{parentName:"p"},"test ada")," funds from the ",(0,s.kt)("a",{parentName:"p",href:"../integrate-cardano/testnet-faucet"},"Cardano Testnet Faucet"),". Once complete, we can now run the code again and we should see a succesful result this time."),(0,s.kt)(o.Z,{defaultValue:"js",groupId:"language",values:[{label:"JavaScript",value:"js"},{label:"Typescript",value:"ts"},{label:"Python",value:"py"},{label:"C#",value:"cs"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f node checkPayment.js\nTotal Received: 1000000000 LOVELACE\nExpected Payment: 1000000 LOVELACE\nPayment Complete: \u2705\n"))),(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ts-node checkPayment.ts\nTotal Received: 1000000000 LOVELACE\nExpected Payment: 1000000 LOVELACE\nPayment Complete: \u2705\n"))),(0,s.kt)(r.Z,{value:"cs",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f dotnet run\nTotal Received: 1000000000 LOVELACE\nExpected Payment: 1000000 LOVELACE\nPayment Complete: \u2705\n"))),(0,s.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f python checkPayment.py \nTotal Received: 1000000000 LOVELACE\nExpected Payment: 1000000 LOVELACE\nPayment Complete: \u2705\n")))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"It might take 20 seconds or more for the transaction to propagate within the network depending on the network health, so you will have to be patient."))),(0,s.kt)("p",null,"Congratulations, you are now able to detect succesful ",(0,s.kt)("strong",{parentName:"p"},"Cardano")," payments programatically. This should help you bring integrations to your existing or new upcoming applications. \ud83c\udf89\ud83c\udf89\ud83c\udf89"))}u.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}a.d(t,{Z:function(){return l}})},4118:function(e,t,a){"use strict";t.Z=a.p+"assets/images/ada-online-shop-0dee5526d39fa5fc40c8e722f1fd0f6b.png"},9878:function(e,t,a){"use strict";t.Z=a.p+"assets/images/ada-payment-flow-wallet-ca3d46bbad3e6722fabf41a8201b6bc1.png"}}]);