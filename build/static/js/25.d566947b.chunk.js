/*! For license information please see 25.d566947b.chunk.js.LICENSE.txt */
(this["webpackJsonpshreyu-react"]=this["webpackJsonpshreyu-react"]||[]).push([[25],{109:function(e,t,n){"use strict";var r=n(7),o=n(14),a=n(0),s=n.n(a),c=n(11),i=n.n(c),u=n(94),l=n.n(u),d=n(95),f=i.a.oneOfType([i.a.number,i.a.string]),p={tag:d.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,c=e.tag,i=e.form,u=e.widths,f=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];u.forEach((function(t,n){var r=e[t];if(delete f[t],r){var o=!n;p.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var m=Object(d.mapToCssModules)(l()(t,a?"no-gutters":null,i?"form-row":"row",p),n);return s.a.createElement(c,Object(r.a)({},f,{className:m}))};g.propTypes=p,g.defaultProps=m,t.a=g},110:function(e,t,n){"use strict";var r=n(7),o=n(14),a=n(0),s=n.n(a),c=n(11),i=n.n(c),u=n(94),l=n.n(u),d=n(95),f=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:f,offset:f})]),m={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},y=function(e){var t=e.className,n=e.cssModule,a=e.widths,c=e.tag,i=Object(o.a)(e,["className","cssModule","widths","tag"]),u=[];a.forEach((function(t,r){var o=e[t];if(delete i[t],o||""===o){var a=!r;if(Object(d.isObject)(o)){var s,c=a?"-":"-"+t+"-",f=b(a,t,o.size);u.push(Object(d.mapToCssModules)(l()(((s={})[f]=o.size||""===o.size,s["order"+c+o.order]=o.order||0===o.order,s["offset"+c+o.offset]=o.offset||0===o.offset,s)),n))}else{var p=b(a,t,o);u.push(p)}}})),u.length||u.push("col");var f=Object(d.mapToCssModules)(l()(t,u),n);return s.a.createElement(c,Object(r.a)({},i,{className:f}))};y.propTypes=m,y.defaultProps=g,t.a=y},123:function(e,t,n){"use strict";var r=n(7),o=n(14),a=n(0),s=n.n(a),c=n(11),i=n.n(c),u=n(94),l=n.n(u),d=n(95),f={tag:d.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,n=e.cssModule,a=e.color,c=e.body,i=e.inverse,u=e.outline,f=e.tag,p=e.innerRef,m=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(d.mapToCssModules)(l()(t,"card",!!i&&"text-white",!!c&&"card-body",!!a&&(u?"border":"bg")+"-"+a),n);return s.a.createElement(f,Object(r.a)({},m,{className:g,ref:p}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},124:function(e,t,n){"use strict";var r=n(7),o=n(14),a=n(0),s=n.n(a),c=n(11),i=n.n(c),u=n(94),l=n.n(u),d=n(95),f={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,n=e.cssModule,a=e.innerRef,c=e.tag,i=Object(o.a)(e,["className","cssModule","innerRef","tag"]),u=Object(d.mapToCssModules)(l()(t,"card-body"),n);return s.a.createElement(c,Object(r.a)({},i,{className:u,ref:a}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},160:function(e,t,n){"use strict";var r=n(7),o=n(14),a=n(0),s=n.n(a),c=n(11),i=n.n(c),u=n(94),l=n.n(u),d=n(95),f={tag:d.tagPropType,fluid:i.a.oneOfType([i.a.bool,i.a.string]),className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,n=e.cssModule,a=e.fluid,c=e.tag,i=Object(o.a)(e,["className","cssModule","fluid","tag"]),u="container";!0===a?u="container-fluid":a&&(u="container-"+a);var f=Object(d.mapToCssModules)(l()(t,u),n);return s.a.createElement(c,Object(r.a)({},i,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},647:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(33),s=n(12),c=n(32),i=n(160),u=n(109),l=n(110),d=n(123),f=n(124),p=n(26),m=n(99),g=n.n(m);class b extends r.Component{constructor(e){super(e),this._isMounted=!1,this.renderRedirectToRoot=()=>{if(Object(p.b)())return o.a.createElement(s.a,{to:"/"})},this.state={}}componentDidMount(){this._isMounted=!0,document.body.classList.add("authentication-bg")}componentWillUnmount(){this._isMounted=!1,document.body.classList.remove("authentication-bg")}render(){const e=Object(p.b)();return o.a.createElement(o.a.Fragment,null,this.renderRedirectToRoot(),(this._isMounted||!e)&&o.a.createElement("div",{className:"account-pages my-5"},o.a.createElement(i.a,null,o.a.createElement(u.a,{className:"justify-content-center"},o.a.createElement(l.a,{md:8,lg:6,xl:5},o.a.createElement(d.a,{className:"text-center"},o.a.createElement(f.a,{className:"p-4"},o.a.createElement("div",{className:"mx-auto mb-5"},o.a.createElement("a",{href:"/"},o.a.createElement("img",{src:g.a,alt:"",height:"24"}),o.a.createElement("h3",{className:"d-inline align-middle ml-1 text-logo"},"Shreyu"))),o.a.createElement("h6",{className:"h5 mb-0 mt-4"},"Confirm your email"),o.a.createElement("p",{className:"text-muted mt-3 mb-3"},"Your account has been successfully registered. To complete the verification process, please check your email for a validation request."))))),o.a.createElement(u.a,{className:"mt-3"},o.a.createElement(l.a,{className:"text-center"},o.a.createElement("p",{className:"text-muted"},"Return to ",o.a.createElement(c.b,{to:"/account/login",className:"text-primary font-weight-bold ml-1"},"Login")))))))}}t.default=Object(a.b)()(b)},94:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var s=o.apply(null,r);s&&e.push(s)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},95:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return s})),n.d(t,"setScrollbarWidth",(function(){return c})),n.d(t,"isBodyOverflowing",(function(){return i})),n.d(t,"getOriginalBodyPadding",(function(){return u})),n.d(t,"conditionallyUpdateScrollbar",(function(){return l})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return p})),n.d(t,"pick",(function(){return m})),n.d(t,"warnOnce",(function(){return b})),n.d(t,"deprecated",(function(){return y})),n.d(t,"DOMElement",(function(){return A})),n.d(t,"targetPropType",(function(){return v})),n.d(t,"tagPropType",(function(){return E})),n.d(t,"TransitionTimeouts",(function(){return w})),n.d(t,"TransitionPropTypeKeys",(function(){return O})),n.d(t,"TransitionStatuses",(function(){return j})),n.d(t,"keyCodes",(function(){return T})),n.d(t,"PopperPlacements",(function(){return x})),n.d(t,"canUseDOM",(function(){return N})),n.d(t,"isReactRefObj",(function(){return M})),n.d(t,"toNumber",(function(){return P})),n.d(t,"isObject",(function(){return D})),n.d(t,"isFunction",(function(){return B})),n.d(t,"findDOMElements",(function(){return k})),n.d(t,"isArrayOrNodeList",(function(){return R})),n.d(t,"getTarget",(function(){return Y})),n.d(t,"defaultToggleEvents",(function(){return S})),n.d(t,"addMultipleEventListeners",(function(){return J})),n.d(t,"focusableElements",(function(){return U}));var r,o=n(11),a=n.n(o);function s(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function c(e){document.body.style.paddingRight=e>0?e+"px":null}function i(){return document.body.clientWidth<window.innerWidth}function u(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function l(){var e=s(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;i()&&c(n+e)}function d(e){r=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function p(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function m(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var g={};function b(e){g[e]||("undefined"!==typeof console&&console.error(e),g[e]=!0)}function y(e,t){return function(n,r,o){null!==n[r]&&"undefined"!==typeof n[r]&&b('"'+r+'" property of "'+o+'" has been deprecated.\n'+t);for(var a=arguments.length,s=new Array(a>3?a-3:0),c=3;c<a;c++)s[c-3]=arguments[c];return e.apply(void 0,[n,r,o].concat(s))}}var h="object"===typeof window&&window.Element||function(){};function A(e,t,n){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var v=a.a.oneOfType([a.a.string,a.a.func,A,a.a.shape({current:a.a.any})]),E=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),w={Fade:150,Collapse:350,Modal:300,Carousel:600},O=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],j={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},x=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],N=!("undefined"===typeof window||!window.document||!window.document.createElement);function M(e){return!(!e||"object"!==typeof e)&&"current"in e}function C(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function P(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===C(e))return NaN;if(D(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=D(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function D(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function B(e){if(!D(e))return!1;var t=C(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function k(e){if(M(e))return e.current;if(B(e))return e();if("string"===typeof e&&N){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function R(e){return null!==e&&(Array.isArray(e)||N&&"number"===typeof e.length)}function Y(e,t){var n=k(e);return t?R(n)?n:null===n?[]:[n]:R(n)?n[0]:n}var S=["touchstart","click"];function J(e,t,n,r){var o=e;R(o)||(o=[o]);var a=n;if("string"===typeof a&&(a=a.split(/\s+/)),!R(o)||"function"!==typeof t||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.addEventListener(e,t,r)}))})),function(){Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(e,t,r)}))}))}}var U=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},99:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=25.d566947b.chunk.js.map