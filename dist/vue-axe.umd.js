!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("axe-core")):"function"==typeof define&&define.amd?define(["exports","axe-core"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).VueAxe={},e.axeCore)}(this,(function(e,n){"use strict";function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var n=Object.prototype.toString.call(e);return"[object RegExp]"===n||"[object Date]"===n||function(e){return e.$$typeof===t}(e)}(e)};var t="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(e,n){return!1!==n.clone&&n.isMergeableObject(e)?s((o=e,Array.isArray(o)?[]:{}),e,n):e;var o}function c(e,n,o){return e.concat(n).map((function(e){return i(e,o)}))}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(n){return Object.propertyIsEnumerable.call(e,n)})):[]}(e))}function u(e,n){try{return n in e}catch(e){return!1}}function l(e,n,o){var r={};return o.isMergeableObject(e)&&a(e).forEach((function(n){r[n]=i(e[n],o)})),a(n).forEach((function(t){(function(e,n){return u(e,n)&&!(Object.hasOwnProperty.call(e,n)&&Object.propertyIsEnumerable.call(e,n))})(e,t)||(u(e,t)&&o.isMergeableObject(n[t])?r[t]=function(e,n){if(!n.customMerge)return s;var o=n.customMerge(e);return"function"==typeof o?o:s}(t,o)(e[t],n[t],o):r[t]=i(n[t],o))})),r}function s(e,n,o){(o=o||{}).arrayMerge=o.arrayMerge||c,o.isMergeableObject=o.isMergeableObject||r,o.cloneUnlessOtherwiseSpecified=i;var t=Array.isArray(n);return t===Array.isArray(e)?t?o.arrayMerge(e,n,o):l(e,n,o):i(n,o)}s.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,o){return s(e,o,n)}),{})};var f=o(s),d={},p={},g="",b={},m=[].concat(n.constants.impact).reverse();function y(e,o,r){var t=O();return p=Object.assign({},e.style),n.run(o||document,e.runOptions,(function(n,o){n&&t.reject(n),o&&!o.violations.length||JSON.stringify(o.violations)!==g&&(e.clearConsoleOnUpdate&&console.clear(),e.customResultHandler?e.customResultHandler(n,o):v(n,o,r),t.resolve(),g=JSON.stringify(o.violations))})),t.promise}var v=function(e,n,o){if(n.violations=n.violations.filter((function(e){return e.nodes=e.nodes.filter((function(n){var o=n.target.toString()+e.id,r=!d[o];return d[o]=o,r})),!!e.nodes.length})),n.violations.length){var r=function(e){var n=[];return m.forEach((function(o){n=n.concat(e.filter((function(e){return e.impact===o})))})),n}(n.violations);console.group("%cAxe issues "+(o?"- "+o:""),p.head),r.forEach((function(e){console.groupCollapsed("%c%s%c %s %s %c%s",p[e.impact||"minor"],e.impact,p.title,e.help,"\n",p.url,e.helpUrl),e.nodes.forEach((function(e){x(e,"any"),x(e,"none")})),console.groupEnd()})),console.groupEnd()}};function h(){d={}}function O(){return b.promise=new Promise((function(e,n){b.resolve=e,b.reject=n})),b}function x(e,o){if(e[o].length>0){j(e,console.groupCollapsed),w(e),function(e,o){var r=n._audit.data.failureSummaries[o].failureMessage(e[o].map((function(e){return e.message||""})));console.error(r)}(e,o);var r=[];e[o].forEach((function(e){r=r.concat(e.relatedNodes)})),r.length>0&&(console.groupCollapsed("Related nodes"),r.forEach((function(e){j(e,console.log),w(e)})),console.groupEnd()),console.groupEnd()}}function j(e,n){var o=document.querySelector(e.target.toString());if(!o)return n("Selector: %c%s",p.boldCourier,e.target.toString());n("Element: %o",o)}function w(e){console.log("HTML: %c%s",p.boldCourier,e.html)}var C=function(e){return requestAnimationFrame((function(){return requestAnimationFrame(e)}))},E={auto:!0,allowConsoleClears:!0,clearConsoleOnUpdate:!1,delay:500,config:{branding:{application:"vue-axe"}},runOptions:{reporter:"v2",resultTypes:["violations"]},style:{head:"padding:6px;font-size:20px;font-weight:bold;",boldCourier:"font-weight:bold;font-family:Courier;",moderate:"padding:2px 4px;border-radius:5px;background-color:#FFBA52;color:#222;font-weight:normal;",critical:"padding:2px 4px;border-radius:5px;background-color:#AD0000;color:#fff;font-weight:normal;",serious:"padding:2px 4px;border-radius:5px;background-color:#333;color:#FFCE85;font-weight:normal;",minor:"padding:2px 4px;border-radius:5px;background-color:#333;color:#FFCE85;font-weight:normal;",title:"font-color:black;font-weight:bold;",url:"font-color:#4D4D4D;font-weight:normal;"},plugins:[]};function A(e,n){void 0===e&&(e=!1),h(),(e||n.clearConsoleOnUpdate)&&(g="",n.allowConsoleClears&&console.clear())}e.default=function(e,o){if(void 0===o&&(o={}),"undefined"!=typeof window&&(o=f(E,o),n.configure(Object.assign({},o.config)),o.plugins.forEach((function(e){return n.registerPlugin(e)})),e.prototype.$axe={run:function(e){void 0===e&&(e={});var n=e.clearConsole;void 0===n&&(n=o.clearConsoleOnUpdate);var r=e.element,t=e.label;A(n,o),C((function(){return y(o,r,t||"Run manually")}))},plugins:n.plugins},o.auto)){var r=null;e.mixin({updated:function(){r&&clearTimeout(r),r=setTimeout(t.bind(this),2500)},beforeDestroy:function(){A(!0,o)}}),setTimeout((function(){return C((function(){return y(o,document,"App")}))}),o.delay)}function t(){var e=this,n=this.$options.name||"";h(),C((function(){return y(o,e.$el,n)}))}},Object.defineProperty(e,"__esModule",{value:!0})}));
