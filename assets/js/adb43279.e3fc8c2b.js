(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[3247],{2511:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(9756),i=n(7294),a=n(3727),u=n(9962),o=n(2735),s=n(6136),c=(0,i.createContext)({collectLink:function(){}}),l=n(9524),f=n(3905);var d=function(e){var t,n,d=e.isNavLink,v=e.to,h=e.href,b=e.activeClassName,p=e.isActive,m=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,_=void 0===g||g,Z=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),w=(0,u.Z)().siteConfig,k=w.trailingSlash,y=w.baseUrl,C=(0,l.C)().withBaseUrl,U=(0,i.useContext)(c),B=v||h,E=(0,o.Z)(B),N=null==B?void 0:B.replace("pathname://",""),O=void 0!==N?(n=N,_&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;O&&E&&(O=(0,f.applyTrailingSlash)(O,{trailingSlash:k,baseUrl:y}));var j,A=(0,i.useRef)(!1),S=d?a.OL:a.rU,L=s.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!L&&E&&null!=O&&window.docusaurus.prefetch(O),function(){L&&j&&j.disconnect()}}),[O,L,E]);var P=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,W=!O||!E||P;return O&&E&&!P&&!m&&U.collectLink(O),W?i.createElement("a",Object.assign({href:O},B&&!E&&{target:"_blank",rel:"noopener noreferrer"},Z)):i.createElement(S,Object.assign({},Z,{onMouseEnter:function(){A.current||null==O||(window.docusaurus.preload(O),A.current=!0)},innerRef:function(e){var t,n;L&&e&&E&&(t=e,n=function(){null!=O&&window.docusaurus.prefetch(O)},(j=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),n())}))}))).observe(t))},to:O||""},d&&{isActive:p,activeClassName:b}))}},2735:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},9524:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return u}});var r=n(9962),i=n(2735);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,u=a.forcePrependBaseUrl,o=void 0!==u&&u,s=a.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(a,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},4136:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],u="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,u)}},3905:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},3509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},4165:function(e,t,n){"use strict";n.r(t);var r=n(2122),i=n(7294),a=n(6010),u=n(2511),o=n(5812),s=n(9962);t.default=function(e){var t=e.title,n=e.description,c=e.cta,l=e.filename,f=e.url,d=(0,s.Z)().siteConfig,v=void 0===d?{}:d,h=l?v.customFields.repository+"/edit/"+v.customFields.branch+"/src/data/"+l:f;return i.createElement("header",{className:(0,a.Z)("hero hero--primary",o.Z.heroBanner)},i.createElement("div",{className:"container"},i.createElement("h1",{className:"hero__title"},t),i.createElement("p",{className:"hero__subtitle"},n),i.createElement("div",{className:o.Z.buttons},i.createElement(u.Z,(0,r.Z)({className:(0,a.Z)("button button--outline button--warn button--lg",o.Z.getStarted)},l&&{href:h,target:"_blank"},!l&&{to:f}),c))))}},6010:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})},5812:function(e,t){"use strict";t.Z={heroBanner:"heroBanner_3P7f",buttons:"buttons_1r9m",features:"features_3azU",featureImage:"featureImage_ZtzX"}}}]);