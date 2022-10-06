(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2262],{57397:function(e,r,n){"use strict";var t;function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(a){var i=arguments,c=function(){var e=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,r=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g;return function(t,o,a,y){if(1!==i.length||"string"!==f(t)||/\d/.test(t)||(o=t,t=void 0),(t=t||0===t?t:new Date)instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");var m=(o=String(c.masks[o]||o||c.masks.default)).slice(0,4);"UTC:"!==m&&"GMT:"!==m||(o=o.slice(4),a=!0,"GMT:"===m&&(y=!0));var p=function(){return a?"getUTC":"get"},h=function(){return t[p()+"Date"]()},b=function(){return t[p()+"Day"]()},g=function(){return t[p()+"Month"]()},v=function(){return t[p()+"FullYear"]()},x=function(){return t[p()+"Hours"]()},j=function(){return t[p()+"Minutes"]()},O=function(){return t[p()+"Seconds"]()},w=function(){return t[p()+"Milliseconds"]()},Z=function(){return a?0:t.getTimezoneOffset()},T=function(){return l(t)},P={d:function(){return h()},dd:function(){return s(h())},ddd:function(){return c.i18n.dayNames[b()]},DDD:function(){return u({y:v(),m:g(),d:h(),_:p(),dayName:c.i18n.dayNames[b()],short:!0})},dddd:function(){return c.i18n.dayNames[b()+7]},DDDD:function(){return u({y:v(),m:g(),d:h(),_:p(),dayName:c.i18n.dayNames[b()+7]})},m:function(){return g()+1},mm:function(){return s(g()+1)},mmm:function(){return c.i18n.monthNames[g()]},mmmm:function(){return c.i18n.monthNames[g()+12]},yy:function(){return String(v()).slice(2)},yyyy:function(){return s(v(),4)},h:function(){return x()%12||12},hh:function(){return s(x()%12||12)},H:function(){return x()},HH:function(){return s(x())},M:function(){return j()},MM:function(){return s(j())},s:function(){return O()},ss:function(){return s(O())},l:function(){return s(w(),3)},L:function(){return s(Math.floor(w()/10))},t:function(){return x()<12?c.i18n.timeNames[0]:c.i18n.timeNames[1]},tt:function(){return x()<12?c.i18n.timeNames[2]:c.i18n.timeNames[3]},T:function(){return x()<12?c.i18n.timeNames[4]:c.i18n.timeNames[5]},TT:function(){return x()<12?c.i18n.timeNames[6]:c.i18n.timeNames[7]},Z:function(){return y?"GMT":a?"UTC":(String(t).match(r)||[""]).pop().replace(n,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(Z()>0?"-":"+")+s(100*Math.floor(Math.abs(Z())/60)+Math.abs(Z())%60,4)},p:function(){return(Z()>0?"-":"+")+s(Math.floor(Math.abs(Z())/60),2)+":"+s(Math.floor(Math.abs(Z())%60),2)},S:function(){return["th","st","nd","rd"][h()%10>3?0:(h()%100-h()%10!=10)*h()%10]},W:function(){return T()},WW:function(){return s(T())},N:function(){return d(t)}};return o.replace(e,(function(e){return e in P?P[e]():e.slice(1,e.length-1)}))}}();c.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},c.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var s=function(e,r){for(e=String(e),r=r||2;e.length<r;)e="0"+e;return e},u=function(e){var r=e.y,n=e.m,t=e.d,o=e._,a=e.dayName,i=e.short,c=void 0!==i&&i,s=new Date,u=new Date;u.setDate(u[o+"Date"]()-1);var l=new Date;l.setDate(l[o+"Date"]()+1);return s[o+"FullYear"]()===r&&s[o+"Month"]()===n&&s[o+"Date"]()===t?c?"Tdy":"Today":u[o+"FullYear"]()===r&&u[o+"Month"]()===n&&u[o+"Date"]()===t?c?"Ysd":"Yesterday":l[o+"FullYear"]()===r&&l[o+"Month"]()===n&&l[o+"Date"]()===t?c?"Tmw":"Tomorrow":a},l=function(e){var r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);var n=new Date(r.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var t=r.getTimezoneOffset()-n.getTimezoneOffset();r.setHours(r.getHours()-t);var o=(r-n)/6048e5;return 1+Math.floor(o)},d=function(e){var r=e.getDay();return 0===r&&(r=7),r},f=function(e){return null===e?"null":void 0===e?"undefined":"object"!==o(e)?o(e):Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()};void 0===(t=function(){return c}.call(r,n,r,e))||(e.exports=t)}(void 0)},94939:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rewards/history",function(){return n(76997)}])},55169:function(e,r,n){"use strict";n.d(r,{Z:function(){return u}});var t=n(24246),o=n(93752),a=n(40774),i=(n(27378),n(36065));function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e){var r=e.name,n=e.size,u=void 0===n?24:n,l=s(e,["name","size"]),d=parseInt(String((0,a.Z)(u))),f=function(e){switch(e.toLowerCase()){case"lylp":case"seth":case"eth":return(0,i.Z)("/images/ethereum-logo.png");case"btc":return(0,i.Z)("/images/bitcoin-logo.png");case"link":return(0,i.Z)("/images/chainlink-logo.png");case"sol":return(0,i.Z)("/images/solana-logo.png");case"aave":return"https://ethereum-optimism.github.io/logos/AAVE.svg";case"avax":return(0,i.Z)("/images/avax-logo.png");case"matic":return(0,i.Z)("/images/matic-logo.png");case"uni":return"https://ethereum-optimism.github.io/logos/UNI.png";case"wti":return(0,i.Z)("/images/wti-logo.png");default:return""}}(r);return(0,t.jsx)(o.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){c(e,r,n[r])}))}return e}({sx:{borderRadius:d,objectFit:"contain"}},l,{width:d,height:d,minWidth:d,minHeight:d,src:null!=f?(0,i.Z)(f):void 0}))}},8835:function(e,r,n){"use strict";n.d(r,{Z:function(){return v},d:function(){return b}});var t=n(24246),o=n(3922),a=n(46895),i=n(2105),c=n(24723),s=n(56119),u=n(98718),l=(n(27378),n(53491)),d=n(47406);function f(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function y(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e){var r=e.tokenNameOrAddresses,n=e.size,o=y(e,["tokenNameOrAddresses","size"]),i=.6*n*(r.length-1)+n;return(0,t.jsx)(a.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){f(e,r,n[r])}))}return e}({},o,{width:i,children:r.map((function(e,r){return(0,t.jsx)(l.Z,{nameOrAddress:e,size:n,ml:r>0?"-".concat(.4*n,"px"):0},e)}))}))}function p(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function h(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=function(e){switch(e){case"heading":case"heading2":case"heroHeading":case"heroTitle":return 30;case"small":case"smallMedium":return 16;default:return 24}},g=function(e){switch(e){case"heading":case"heading2":case"heroHeading":case"heroTitle":return"2px";default:return"1px"}};function v(e){var r=e.tokenNameOrAddress,n=e.variant,f=void 0===n?"body":n,y=e.color,v=e.textAlign,x=e.as,j=e.amount,O=e.decimals,w=e.isPercentage,Z=e.isTruncated,T=e.showSign,P=e.suffix,k=e.prefix,S=e.minDps,D=h(e,["tokenNameOrAddress","variant","color","textAlign","as","amount","decimals","isPercentage","isTruncated","showSign","suffix","prefix","minDps"]),A=o.O$.isBigNumber(j)?(0,d.Z)(j,O):j,M=b(f);return(0,t.jsxs)(a.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){p(e,r,n[r])}))}return e}({},D,{alignItems:"flex-end",children:[Array.isArray(r)?(0,t.jsx)(m,{size:M,tokenNameOrAddresses:r}):(0,t.jsx)(l.Z,{size:M,nameOrAddress:r}),(0,t.jsxs)(i.Z,{mb:g(f),ml:2,variant:f,color:y,textAlign:v,as:x,children:[k,w?(0,s.Z)(A,!T):Z?(0,u.Z)(A):(0,c.Z)(A,{minDps:S}),P]})]}))}},75628:function(e,r,n){"use strict";n.d(r,{Z:function(){return h}});var t=n(24246),o=n(68361),a=n(46895),i=n(2105),c=n(83351),s=n(24723),u=n(56119),l=n(98718),d=(n(27378),n(48609)),f=n(53491),y=n(80215);function m(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e){var r=e.marketName,n=e.children,h=e.lyraApy,b=e.opApy,g=e.apyMultiplier,v=e.stakedLyraBalance,x=p(e,["marketName","children","lyraApy","opApy","apyMultiplier","stakedLyraBalance"]),j=(0,y.Z)("op"),O=(0,y.Z)("stkLyra");return(0,t.jsx)(c.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){m(e,r,n[r])}))}return e}({tooltip:(0,t.jsxs)(o.Z,{children:[(0,t.jsxs)(i.Z,{variant:"secondary",color:"secondaryText",mb:4,children:["Earn staked LYRA and / or OP tokens when you deposit sUSD to the ",r," Vault."]}),g&&g>1&&v&&v>0?(0,t.jsxs)(i.Z,{variant:"secondary",color:"secondaryText",mb:4,children:["You staked"," ",(0,t.jsxs)(i.Z,{as:"span",color:"primaryText",children:[(0,l.Z)(v)," LYRA"]})," ","for a"," ",(0,t.jsxs)(i.Z,{as:"span",color:"primaryText",children:[(0,s.Z)(g),"x"]})," ","boost."]}):null,(0,t.jsxs)(a.Z,{alignItems:"center",mb:2,children:[(0,t.jsx)(f.Z,{size:24,nameOrAddress:"stkLyra"}),(0,t.jsx)(i.Z,{ml:2,variant:"secondary",color:"secondaryText",children:null===O||void 0===O?void 0:O.symbol}),(0,t.jsx)(i.Z,{variant:"secondary",ml:"auto",color:0===h?"secondaryText":"primaryText",children:(0,u.Z)(h,!0)})]}),(0,t.jsxs)(a.Z,{alignItems:"center",children:[(0,t.jsx)(f.Z,{size:24,nameOrAddress:"OP"}),(0,t.jsx)(i.Z,{ml:2,variant:"secondary",color:"secondaryText",children:null===j||void 0===j?void 0:j.symbol}),(0,t.jsx)(i.Z,{variant:"secondary",ml:"auto",color:0===b?"secondaryText":"primaryText",children:(0,u.Z)(b,!0)})]})]}),href:d.O1,showInfoIcon:!0,target:"_blank",placement:"top",title:"".concat(g&&g>1?"Boosted":"Rewards"," APY")},x,{children:n}))}},80215:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var t=n(2914),o=n(91739);function a(e){var r=(0,o.Z)();if(!r)return null;var n=(0,t.Z)(),a=r.find((function(r){return(r.address===e||r.symbol.toLowerCase()===e.toLowerCase()||r.name.toLowerCase()===e.toLowerCase())&&r.chainId===n}));return null!==a&&void 0!==a?a:null}},11643:function(e,r,n){"use strict";n.d(r,{V:function(){return y},Z:function(){return m}});var t=n(35230),o=n.n(t),a=n(73141),i=n(73018),c=n(6230),s=n(80907);function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function l(e,r,n,t,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void n(u)}c.done?r(s):Promise.resolve(s).then(t,o)}function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return u(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=[],y=function(){var e,r=(e=o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.Z.deployment!==a.Yz.Mainnet){e.next=6;break}return e.next=3,i.Z.accountRewardEpochs(r);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=[];case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,o){var a=e.apply(r,n);function i(e){l(a,t,o,i,c,"next",e)}function c(e){l(a,t,o,i,c,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}();function m(){var e=(0,s.Z)(),r=d((0,c.ZP)("AccountRewardEpochs",e?[e]:null,y),1)[0];return null!==r&&void 0!==r?r:f}},76997:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return X}});var t=n(24246),o=n(50564),a=n(27378),i=n(19749),c=n(94531),s=n(58316),u=n(11913),l=n(34317),d=n(6692),f=n(2105),y=n(92110),m=n(11643),p=n(68361),h=n(14959),b=n(46895),g=n(84262),v=n(56119),x=n(8835);function j(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function O(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=function(e){var r=e.accountRewardEpoch,n=O(e,["accountRewardEpoch"]),o=r.stakingRewards.lyra,a=r.stakingRewards.op,i=r.stakingRewards,c=r.stakingRewardsUnlockTimestamp.lyra,s=i.lyra>0||i.op>0,u=r.globalEpoch.stakingApy.total;return s?(0,t.jsxs)(p.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){j(e,r,n[r])}))}return e}({},n,{children:[(0,t.jsx)(f.Z,{variant:"heading2",mb:4,children:"Staking Rewards"}),(0,t.jsxs)(g.Z,{sx:{gridTemplateColumns:["1fr 1fr","1fr 1fr 1fr 1fr 1fr"],gridColumnGap:4,gridRowGap:6},children:[(0,t.jsxs)(b.Z,{flexDirection:"column",children:[(0,t.jsx)(f.Z,{variant:"secondary",color:"secondaryText",mb:2,children:"stkLYRA Rewards (Locked)"}),(0,t.jsx)(x.Z,{variant:"secondary",tokenNameOrAddress:"stkLyra",amount:o})]}),(0,t.jsxs)(b.Z,{flexDirection:"column",children:[(0,t.jsx)(f.Z,{variant:"secondary",color:"secondaryText",mb:2,children:"OP Rewards"}),(0,t.jsx)(x.Z,{variant:"secondary",tokenNameOrAddress:"op",amount:a})]}),(0,t.jsxs)(b.Z,{flexDirection:"column",children:[(0,t.jsx)(f.Z,{variant:"secondary",color:"secondaryText",mb:2,children:"LYRA Unlock"}),(0,t.jsx)(f.Z,{variant:"secondary",children:(0,h.Z)(c)})]}),(0,t.jsxs)(b.Z,{flexDirection:"column",children:[(0,t.jsx)(f.Z,{variant:"secondary",color:"secondaryText",mb:2,children:"Avg. APY"}),(0,t.jsx)(f.Z,{variant:"secondary",children:(0,v.Z)(u,!0)})]})]})]})):null},Z=n(93327);function T(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function P(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k=function(e){var r=e.accountRewardEpoch,n=P(e,["accountRewardEpoch"]),o=r.tradingRewards,a=o.op,i=o.lyra,c=r.tradingFees,s=r.tradingFeeRebate;return a&&i?(0,t.jsxs)(p.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){T(e,r,n[r])}))}return e}({},n,{children:[(0,t.jsx)(f.Z,{variant:"heading2",mb:4,children:"Trading Rewards"}),(0,t.jsxs)(g.Z,{sx:{gridTemplateColumns:["1fr 1fr","1fr 1fr 1fr 1fr 1fr"],gridColumnGap:4,gridRowGap:6},children:[(0,t.jsxs)(b.Z,{flexDirection:"column",children:[(0,t.jsx)(f.Z,{variant:"secondary",color:"secondaryText",mb:2,children:"stkLYRA Rewards"}),(0,t.jsx)(x.Z,{variant:"secondary",tokenNameOrAddress:"stkLyra",amount:i})]}),(0,t.jsxs)(b.Z,{flexDirection:"column",children:[(0,t.jsx)(f.Z,{variant:"secondary",color:"secondaryText",mb:2,children:"OP Rewards"}),(0,t.jsx)(x.Z,{variant:"secondary",tokenNameOrAddress:"op",amount:a})]}),(0,t.jsxs)(b.Z,{flexDirection:"column",children:[(0,t.jsx)(f.Z,{variant:"secondary",color:"secondaryText",mb:2,children:"Total Fees"}),(0,t.jsx)(f.Z,{variant:"secondary",children:(0,Z.Z)(c)})]}),(0,t.jsxs)(b.Z,{flexDirection:"column",children:[(0,t.jsx)(f.Z,{variant:"secondary",color:"secondaryText",mb:2,children:"Fee Rebate"}),(0,t.jsx)(f.Z,{variant:"secondary",children:(0,v.Z)(s,!0)})]})]})]})):null},S=n(24723),D=n(55169),A=n(41460),M=n(75628);function E(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function N(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var R=function(e){var r=e.accountRewardEpoch,n=e.market.name,o=r?r.vaultTokenBalance(n):0,a=r.vaultRewards(n),i=a.op,c=a.lyra,s=r.vaultApy(n),u=s.op,l=s.lyra,d=r.vaultApyMultiplier(n),y=r.stakedLyraBalance;return(0,t.jsxs)(g.Z,{mb:4,sx:{gridTemplateColumns:["1fr 1fr","1fr 1fr 1fr 1fr 1fr"],gridColumnGap:4,gridRowGap:6},children:[(0,t.jsxs)(b.Z,{flexDirection:"column",justifyContent:"space-between",children:[(0,t.jsx)(f.Z,{variant:"secondary",color:"secondaryText",mb:2,children:"Vault"}),(0,t.jsxs)(b.Z,{alignItems:"flex-end",children:[(0,t.jsx)(D.Z,{name:n,size:24}),(0,t.jsx)(f.Z,{variant:"secondary",ml:2,color:"secondaryText",children:(0,A.Z)(n)})]})]}),l>0?(0,t.jsxs)(b.Z,{flexDirection:"column",justifyContent:"space-between",children:[(0,t.jsx)(f.Z,{variant:"secondary",color:"secondaryText",mb:2,children:"stkLYRA Rewards"}),(0,t.jsx)(x.Z,{variant:"secondary",color:"secondaryText",tokenNameOrAddress:"stkLyra",amount:c})]}):null,u>0?(0,t.jsxs)(b.Z,{flexDirection:"column",justifyContent:"space-between",children:[(0,t.jsx)(f.Z,{variant:"secondary",color:"secondaryText",mb:2,children:"OP Rewards"}),(0,t.jsx)(x.Z,{variant:"secondary",color:"secondaryText",tokenNameOrAddress:"op",amount:i})]}):null,(0,t.jsxs)(b.Z,{flexDirection:"column",justifyContent:"space-between",children:[(0,t.jsx)(f.Z,{variant:"secondary",color:"secondaryText",mb:2,children:"Avg. LP Tokens"}),(0,t.jsx)(f.Z,{variant:"secondary",children:(0,S.Z)(o)})]}),(0,t.jsxs)(b.Z,{flexDirection:"column",justifyContent:"space-between",children:[(0,t.jsx)(f.Z,{variant:"secondary",color:"secondaryText",mb:2,children:"Avg. APY"}),(0,t.jsx)(M.Z,{marketName:n,opApy:u,lyraApy:l,apyMultiplier:d,stakedLyraBalance:y,children:(0,t.jsxs)(f.Z,{variant:"secondary",color:"primaryText",children:[(0,v.Z)(u+l,!0)," ",d>1?"(".concat((0,S.Z)(d),"x)"):""]})})]})]})},C=function(e){var r=e.accountRewardEpoch,n=N(e,["accountRewardEpoch"]),o=r.globalEpoch.markets,i=(0,a.useMemo)((function(){return o.filter((function(e){var n=r.vaultRewards(e.name);return n.lyra>0||n.op>0}))}),[r,o]);return 0===i.length?null:(0,t.jsxs)(p.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){E(e,r,n[r])}))}return e}({},n,{children:[(0,t.jsx)(f.Z,{variant:"heading2",mb:4,children:"Vault Rewards"}),i.map((function(e){return(0,t.jsx)(R,{accountRewardEpoch:r,market:e},e.name)}))]}))};function I(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function H(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var L=function(e){var r=e.accountRewardEpoch,n=e.epochNumber,o=H(e,["accountRewardEpoch","epochNumber"]);return(0,t.jsxs)(s.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){I(e,r,n[r])}))}return e}({},o,{children:[(0,t.jsxs)(p.Z,{children:[(0,t.jsxs)(f.Z,{variant:"heading",children:["Epoch ",n]}),(0,t.jsxs)(f.Z,{variant:"small",color:"secondaryText",children:[(0,h.Z)(r.globalEpoch.startTimestamp,!0)," -"," ",(0,h.Z)(r.globalEpoch.endTimestamp,!0)]})]}),(0,t.jsx)(w,{accountRewardEpoch:r,mt:8}),(0,t.jsx)(k,{accountRewardEpoch:r,mt:8}),(0,t.jsx)(C,{accountRewardEpoch:r,mt:8})]}))};function Y(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function F(){return F=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},F.apply(this,arguments)}function z(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){Y(e,r,n[r])}))}return e}var _=(0,y.Z)((function(e){var r=F({},e),n=(0,a.useState)(!1),o=n[0],l=n[1],d=(0,m.Z)(),y=(0,a.useMemo)((function(){return d.sort((function(e,r){return r.globalEpoch.endTimestamp-e.globalEpoch.endTimestamp})).slice(0,o?void 0:3)}),[d,o]);return(0,t.jsxs)(i.Z,z({overflow:"hidden"},r,{children:[0===y.length?(0,t.jsx)(c.Z,{children:(0,t.jsx)(f.Z,{color:"secondaryText",children:"You have no rewards history"})}):null,y.map((function(e,r){var n=d.length-r;return(0,t.jsxs)(t.Fragment,{children:[r>0?(0,t.jsx)(u.Z,{}):null,(0,t.jsx)(L,{epochNumber:n,accountRewardEpoch:e},n)]})})),!o&&y.length>3?(0,t.jsx)(s.Z,{onClick:function(){return l(!0)},sx:{alignItems:"center",cursor:"pointer",":hover":{bg:"buttonHover"}},children:(0,t.jsx)(f.Z,{variant:"bodyMedium",color:"secondaryText",children:"Show More"})}):null]}))}),(function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(0,t.jsx)(i.Z,z({flexDirection:"column"},n,{children:(0,t.jsx)(c.Z,{children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(d.ZP,{})})})}))})),U=_,G=n(42804),B=n(93314),W=function(){return(0,t.jsx)(G.Z,{header:"History",showBackButton:!0,children:(0,t.jsx)(B.Z,{children:(0,t.jsx)(U,{})})})},V=n(66362),J=n(90473);function X(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V.Z,{title:"Rewards History",url:(0,J.Z)({page:o.u.RewardsHistory})}),(0,t.jsx)(W,{})]})}},41460:function(e,r,n){"use strict";function t(e){switch(null===e||void 0===e?void 0:e.toLowerCase()){case"lylp":case"eth":case"seth":return"Ethereum";case"btc":case"sbtc":return"Bitcoin";case"link":case"slink":return"Chainlink";case"sol":case"ssol":return"Solana";case"aave":case"saave":return"Aave";case"avax":case"savax":return"Avax";case"matic":case"smatic":return"Matic";case"uni":case"suni":return"Uniswap";case"wti":case"swti":return"Oil";default:return""}}n.d(r,{Z:function(){return t}})},11913:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var t=n(24246),o=(n(27378),n(68361));function a(e){var r=e.isVertical,n=void 0!==r&&r,a=e.isHorizontal,i=void 0===a||a;return(0,t.jsx)(o.Z,{variant:"cardSeparator",width:n||!i?"3px":"100%",height:n||!i?"100%":"3px"})}},83351:function(e,r,n){"use strict";n.d(r,{Z:function(){return p}});var t=n(24246),o=n(27378),a=n(19749),i=n(94531),c=n(46895),s=n(47929),u=n(8413),l=n(32371),d=n(2105);function f(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){f(e,r,n[r])}))}return e}function m(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e){var r=e.title,n=e.tooltip,f=e.href,p=e.hrefLabel,h=void 0===p?"Learn more":p,b=e.target,g=e.children,v=e.placement,x=void 0===v?"top-start":v,j=e.showInfoIcon,O=e.showHelpIcon,w=e.noPadding,Z=e.iconSize,T=void 0===Z?13:Z,P=e.isDisabled,k=m(e,["title","tooltip","href","hrefLabel","target","children","placement","showInfoIcon","showHelpIcon","noPadding","iconSize","isDisabled"]),S=(0,o.useState)(null),D=S[0],A=S[1],M=(0,o.useState)(!1),E=M[0],N=M[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.Z,y({ref:A,onClick:function(e){N(!0),e.stopPropagation()},sx:{display:"inline-block",opacity:E?.7:1,cursor:P?void 0:"pointer","&:hover":{opacity:E||P?void 0:.7}},alignItems:"center"},k,{children:[g,O||j?(0,t.jsx)(s.Z,{ml:1,pb:"1px",color:"secondaryText",size:T,icon:O?s.T.HelpCircle:s.T.Info}):null]})),n&&!P?(0,t.jsx)(l.Z,{placement:x,innerRef:D,isOpen:E,onChange:N,trigger:"click",children:(0,t.jsx)(a.Z,{variant:"elevated",maxWidth:320,children:(0,t.jsxs)(i.Z,{noPadding:w,children:[null!=r?(0,t.jsx)(d.Z,{mx:w?6:0,mt:w?6:0,mb:4,variant:"bodyMedium",children:r}):null,"string"===typeof n?(0,t.jsx)(d.Z,{color:"secondaryText",variant:"secondary",children:n}):n,f?(0,t.jsx)(u.Z,{mt:4,textVariant:"secondary",href:f,target:b,showRightIcon:!0,children:h}):null]})})}):null]})}},14959:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});var t=n(57397),o=n.n(t),a=n(69723);function i(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o()((0,a.Z)(e),r?"mmm d":"mmm d yyyy")}}},function(e){e.O(0,[5106,3310,1704,2804,11,2046,9774,2888,179],(function(){return r=94939,e(e.s=r);var r}));var r=e.O();_N_E=r}]);