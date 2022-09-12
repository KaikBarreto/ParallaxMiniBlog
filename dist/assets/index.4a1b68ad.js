(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function F1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gs=Symbol.for("react.element"),V1=Symbol.for("react.portal"),B1=Symbol.for("react.fragment"),z1=Symbol.for("react.strict_mode"),j1=Symbol.for("react.profiler"),H1=Symbol.for("react.provider"),W1=Symbol.for("react.context"),q1=Symbol.for("react.forward_ref"),K1=Symbol.for("react.suspense"),G1=Symbol.for("react.memo"),Q1=Symbol.for("react.lazy"),bf=Symbol.iterator;function Y1(t){return t===null||typeof t!="object"?null:(t=bf&&t[bf]||t["@@iterator"],typeof t=="function"?t:null)}var Eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_g=Object.assign,Sg={};function _i(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||Eg}_i.prototype.isReactComponent={};_i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ig(){}Ig.prototype=_i.prototype;function Ah(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||Eg}var Dh=Ah.prototype=new Ig;Dh.constructor=Ah;_g(Dh,_i.prototype);Dh.isPureReactComponent=!0;var Ff=Array.isArray,Tg=Object.prototype.hasOwnProperty,Rh={current:null},kg={key:!0,ref:!0,__self:!0,__source:!0};function Cg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tg.call(e,r)&&!kg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Gs,type:t,key:s,ref:o,props:i,_owner:Rh.current}}function X1(t,e){return{$$typeof:Gs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gs}function J1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vf=/\/+/g;function cu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?J1(""+t.key):e.toString(36)}function Jo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Gs:case V1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cu(o,0):r,Ff(i)?(n="",t!=null&&(n=t.replace(Vf,"$&/")+"/"),Jo(i,e,n,"",function(u){return u})):i!=null&&(xh(i)&&(i=X1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ff(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+cu(s,a);o+=Jo(s,e,n,l,i)}else if(l=Y1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+cu(s,a++),o+=Jo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Co(t,e,n){if(t==null)return t;var r=[],i=0;return Jo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Z1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ye={current:null},Zo={transition:null},eE={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:Zo,ReactCurrentOwner:Rh};K.Children={map:Co,forEach:function(t,e,n){Co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Co(t,function(){e++}),e},toArray:function(t){return Co(t,function(e){return e})||[]},only:function(t){if(!xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=_i;K.Fragment=B1;K.Profiler=j1;K.PureComponent=Ah;K.StrictMode=z1;K.Suspense=K1;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eE;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=_g({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tg.call(e,l)&&!kg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Gs,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:W1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H1,_context:t},t.Consumer=t};K.createElement=Cg;K.createFactory=function(t){var e=Cg.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:q1,render:t}};K.isValidElement=xh;K.lazy=function(t){return{$$typeof:Q1,_payload:{_status:-1,_result:t},_init:Z1}};K.memo=function(t,e){return{$$typeof:G1,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Zo.transition;Zo.transition={};try{t()}finally{Zo.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return Ye.current.useCallback(t,e)};K.useContext=function(t){return Ye.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return Ye.current.useDeferredValue(t)};K.useEffect=function(t,e){return Ye.current.useEffect(t,e)};K.useId=function(){return Ye.current.useId()};K.useImperativeHandle=function(t,e,n){return Ye.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return Ye.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return Ye.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return Ye.current.useMemo(t,e)};K.useReducer=function(t,e,n){return Ye.current.useReducer(t,e,n)};K.useRef=function(t){return Ye.current.useRef(t)};K.useState=function(t){return Ye.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return Ye.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return Ye.current.useTransition()};K.version="18.2.0";(function(t){t.exports=K})(C);const tE=F1(C.exports);var ic={},Ng={exports:{}},ct={},Ag={exports:{}},Dg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,z){var H=P.length;P.push(z);e:for(;0<H;){var he=H-1>>>1,Se=P[he];if(0<i(Se,z))P[he]=z,P[H]=Se,H=he;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var z=P[0],H=P.pop();if(H!==z){P[0]=H;e:for(var he=0,Se=P.length,To=Se>>>1;he<To;){var qn=2*(he+1)-1,uu=P[qn],Kn=qn+1,ko=P[Kn];if(0>i(uu,H))Kn<Se&&0>i(ko,uu)?(P[he]=ko,P[Kn]=H,he=Kn):(P[he]=uu,P[qn]=H,he=qn);else if(Kn<Se&&0>i(ko,H))P[he]=ko,P[Kn]=H,he=Kn;else break e}}return z}function i(P,z){var H=P.sortIndex-z.sortIndex;return H!==0?H:P.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,y=!1,v=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=P)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function E(P){if(v=!1,g(P),!y)if(n(l)!==null)y=!0,au(N);else{var z=n(u);z!==null&&lu(E,z.startTime-P)}}function N(P,z){y=!1,v&&(v=!1,p(k),k=-1),m=!0;var H=d;try{for(g(z),h=n(l);h!==null&&(!(h.expirationTime>z)||P&&!oe());){var he=h.callback;if(typeof he=="function"){h.callback=null,d=h.priorityLevel;var Se=he(h.expirationTime<=z);z=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),g(z)}else r(l);h=n(l)}if(h!==null)var To=!0;else{var qn=n(u);qn!==null&&lu(E,qn.startTime-z),To=!1}return To}finally{h=null,d=H,m=!1}}var x=!1,S=null,k=-1,j=5,$=-1;function oe(){return!(t.unstable_now()-$<j)}function dt(){if(S!==null){var P=t.unstable_now();$=P;var z=!0;try{z=S(!0,P)}finally{z?Ft():(x=!1,S=null)}}else x=!1}var Ft;if(typeof f=="function")Ft=function(){f(dt)};else if(typeof MessageChannel<"u"){var Wn=new MessageChannel,Uf=Wn.port2;Wn.port1.onmessage=dt,Ft=function(){Uf.postMessage(null)}}else Ft=function(){A(dt,0)};function au(P){S=P,x||(x=!0,Ft())}function lu(P,z){k=A(function(){P(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,au(N))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var H=d;d=z;try{return P()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var H=d;d=P;try{return z()}finally{d=H}},t.unstable_scheduleCallback=function(P,z,H){var he=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?he+H:he):H=he,P){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=H+Se,P={id:c++,callback:z,priorityLevel:P,startTime:H,expirationTime:Se,sortIndex:-1},H>he?(P.sortIndex=H,e(u,P),n(l)===null&&P===n(u)&&(v?(p(k),k=-1):v=!0,lu(E,H-he))):(P.sortIndex=Se,e(l,P),y||m||(y=!0,au(N))),P},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(P){var z=d;return function(){var H=d;d=z;try{return P.apply(this,arguments)}finally{d=H}}}})(Dg);(function(t){t.exports=Dg})(Ag);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg=C.exports,lt=Ag.exports;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xg=new Set,gs={};function Tr(t,e){ii(t,e),ii(t+"Capture",e)}function ii(t,e){for(gs[t]=e,t=0;t<e.length;t++)xg.add(e[t])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sc=Object.prototype.hasOwnProperty,nE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bf={},zf={};function rE(t){return sc.call(zf,t)?!0:sc.call(Bf,t)?!1:nE.test(t)?zf[t]=!0:(Bf[t]=!0,!1)}function iE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sE(t,e,n,r){if(e===null||typeof e>"u"||iE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Le[t]=new Xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Le[e]=new Xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Le[t]=new Xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Le[t]=new Xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Le[t]=new Xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Le[t]=new Xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Le[t]=new Xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Le[t]=new Xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Le[t]=new Xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ph=/[\-:]([a-z])/g;function Oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ph,Oh);Le[e]=new Xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ph,Oh);Le[e]=new Xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ph,Oh);Le[e]=new Xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Le[t]=new Xe(t,1,!1,t.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Le[t]=new Xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lh(t,e,n,r){var i=Le.hasOwnProperty(e)?Le[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sE(e,n,i,r)&&(n=null),r||i===null?rE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var an=Rg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,No=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),Or=Symbol.for("react.fragment"),Mh=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),Pg=Symbol.for("react.provider"),Og=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),ac=Symbol.for("react.suspense"),lc=Symbol.for("react.suspense_list"),Uh=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),Lg=Symbol.for("react.offscreen"),jf=Symbol.iterator;function Ui(t){return t===null||typeof t!="object"?null:(t=jf&&t[jf]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,hu;function qi(t){if(hu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hu=e&&e[1]||""}return`
`+hu+t}var du=!1;function fu(t,e){if(!t||du)return"";du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{du=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qi(t):""}function oE(t){switch(t.tag){case 5:return qi(t.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 2:case 15:return t=fu(t.type,!1),t;case 11:return t=fu(t.type.render,!1),t;case 1:return t=fu(t.type,!0),t;default:return""}}function uc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Or:return"Fragment";case Pr:return"Portal";case oc:return"Profiler";case Mh:return"StrictMode";case ac:return"Suspense";case lc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Og:return(t.displayName||"Context")+".Consumer";case Pg:return(t._context.displayName||"Context")+".Provider";case $h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uh:return e=t.displayName||null,e!==null?e:uc(t.type)||"Memo";case hn:e=t._payload,t=t._init;try{return uc(t(e))}catch{}}return null}function aE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uc(e);case 8:return e===Mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lE(t){var e=Mg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ao(t){t._valueTracker||(t._valueTracker=lE(t))}function $g(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Mg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cc(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Hf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ug(t,e){e=e.checked,e!=null&&Lh(t,"checked",e,!1)}function hc(t,e){Ug(t,e);var n=Mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dc(t,e.type,n):e.hasOwnProperty("defaultValue")&&dc(t,e.type,Mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dc(t,e,n){(e!=="number"||va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ki=Array.isArray;function Kr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Ki(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mn(n)}}function bg(t,e){var n=Mn(e.value),r=Mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Kf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Do,Vg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Do.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uE=["Webkit","ms","Moz","O"];Object.keys(ts).forEach(function(t){uE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ts[e]=ts[t]})});function Bg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ts.hasOwnProperty(t)&&ts[t]?(""+e).trim():e+"px"}function zg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cE=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mc(t,e){if(e){if(cE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function gc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yc=null;function bh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vc=null,Gr=null,Qr=null;function Gf(t){if(t=Xs(t)){if(typeof vc!="function")throw Error(I(280));var e=t.stateNode;e&&(e=yl(e),vc(t.stateNode,t.type,e))}}function jg(t){Gr?Qr?Qr.push(t):Qr=[t]:Gr=t}function Hg(){if(Gr){var t=Gr,e=Qr;if(Qr=Gr=null,Gf(t),e)for(t=0;t<e.length;t++)Gf(e[t])}}function Wg(t,e){return t(e)}function qg(){}var pu=!1;function Kg(t,e,n){if(pu)return t(e,n);pu=!0;try{return Wg(t,e,n)}finally{pu=!1,(Gr!==null||Qr!==null)&&(qg(),Hg())}}function vs(t,e){var n=t.stateNode;if(n===null)return null;var r=yl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var wc=!1;if(Xt)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){wc=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{wc=!1}function hE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ns=!1,wa=null,Ea=!1,Ec=null,dE={onError:function(t){ns=!0,wa=t}};function fE(t,e,n,r,i,s,o,a,l){ns=!1,wa=null,hE.apply(dE,arguments)}function pE(t,e,n,r,i,s,o,a,l){if(fE.apply(this,arguments),ns){if(ns){var u=wa;ns=!1,wa=null}else throw Error(I(198));Ea||(Ea=!0,Ec=u)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qf(t){if(kr(t)!==t)throw Error(I(188))}function mE(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Qf(i),t;if(s===r)return Qf(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Qg(t){return t=mE(t),t!==null?Yg(t):null}function Yg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yg(t);if(e!==null)return e;t=t.sibling}return null}var Xg=lt.unstable_scheduleCallback,Yf=lt.unstable_cancelCallback,gE=lt.unstable_shouldYield,yE=lt.unstable_requestPaint,de=lt.unstable_now,vE=lt.unstable_getCurrentPriorityLevel,Fh=lt.unstable_ImmediatePriority,Jg=lt.unstable_UserBlockingPriority,_a=lt.unstable_NormalPriority,wE=lt.unstable_LowPriority,Zg=lt.unstable_IdlePriority,fl=null,Pt=null;function EE(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(fl,t,void 0,(t.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:IE,_E=Math.log,SE=Math.LN2;function IE(t){return t>>>=0,t===0?32:31-(_E(t)/SE|0)|0}var Ro=64,xo=4194304;function Gi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Gi(a):(s&=o,s!==0&&(r=Gi(s)))}else o=n&~i,o!==0?r=Gi(o):s!==0&&(r=Gi(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Tt(e),i=1<<n,r|=t[n],e&=~i;return r}function TE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Tt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=TE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _c(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ey(){var t=Ro;return Ro<<=1,(Ro&4194240)===0&&(Ro=64),t}function mu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Tt(e),t[e]=n}function CE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Tt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Tt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function ty(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ny,Bh,ry,iy,sy,Sc=!1,Po=[],_n=null,Sn=null,In=null,ws=new Map,Es=new Map,fn=[],NE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(t,e){switch(t){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(e.pointerId)}}function Fi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xs(e),e!==null&&Bh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function AE(t,e,n,r,i){switch(e){case"focusin":return _n=Fi(_n,t,e,n,r,i),!0;case"dragenter":return Sn=Fi(Sn,t,e,n,r,i),!0;case"mouseover":return In=Fi(In,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ws.set(s,Fi(ws.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Es.set(s,Fi(Es.get(s)||null,t,e,n,r,i)),!0}return!1}function oy(t){var e=Jn(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=Gg(n),e!==null){t.blockedOn=e,sy(t.priority,function(){ry(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ea(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yc=r,n.target.dispatchEvent(r),yc=null}else return e=Xs(n),e!==null&&Bh(e),t.blockedOn=n,!1;e.shift()}return!0}function Jf(t,e,n){ea(t)&&n.delete(e)}function DE(){Sc=!1,_n!==null&&ea(_n)&&(_n=null),Sn!==null&&ea(Sn)&&(Sn=null),In!==null&&ea(In)&&(In=null),ws.forEach(Jf),Es.forEach(Jf)}function Vi(t,e){t.blockedOn===e&&(t.blockedOn=null,Sc||(Sc=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,DE)))}function _s(t){function e(i){return Vi(i,t)}if(0<Po.length){Vi(Po[0],t);for(var n=1;n<Po.length;n++){var r=Po[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_n!==null&&Vi(_n,t),Sn!==null&&Vi(Sn,t),In!==null&&Vi(In,t),ws.forEach(e),Es.forEach(e),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)oy(n),n.blockedOn===null&&fn.shift()}var Yr=an.ReactCurrentBatchConfig,Ia=!0;function RE(t,e,n,r){var i=J,s=Yr.transition;Yr.transition=null;try{J=1,zh(t,e,n,r)}finally{J=i,Yr.transition=s}}function xE(t,e,n,r){var i=J,s=Yr.transition;Yr.transition=null;try{J=4,zh(t,e,n,r)}finally{J=i,Yr.transition=s}}function zh(t,e,n,r){if(Ia){var i=Ic(t,e,n,r);if(i===null)ku(t,e,r,Ta,n),Xf(t,r);else if(AE(i,t,e,n,r))r.stopPropagation();else if(Xf(t,r),e&4&&-1<NE.indexOf(t)){for(;i!==null;){var s=Xs(i);if(s!==null&&ny(s),s=Ic(t,e,n,r),s===null&&ku(t,e,r,Ta,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ku(t,e,r,null,n)}}var Ta=null;function Ic(t,e,n,r){if(Ta=null,t=bh(r),t=Jn(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ta=t,null}function ay(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vE()){case Fh:return 1;case Jg:return 4;case _a:case wE:return 16;case Zg:return 536870912;default:return 16}default:return 16}}var wn=null,jh=null,ta=null;function ly(){if(ta)return ta;var t,e=jh,n=e.length,r,i="value"in wn?wn.value:wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ta=i.slice(t,1<r?1-r:void 0)}function na(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oo(){return!0}function Zf(){return!1}function ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oo:Zf,this.isPropagationStopped=Zf,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),e}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hh=ht(Si),Ys=ue({},Si,{view:0,detail:0}),PE=ht(Ys),gu,yu,Bi,pl=ue({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bi&&(Bi&&t.type==="mousemove"?(gu=t.screenX-Bi.screenX,yu=t.screenY-Bi.screenY):yu=gu=0,Bi=t),gu)},movementY:function(t){return"movementY"in t?t.movementY:yu}}),ep=ht(pl),OE=ue({},pl,{dataTransfer:0}),LE=ht(OE),ME=ue({},Ys,{relatedTarget:0}),vu=ht(ME),$E=ue({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),UE=ht($E),bE=ue({},Si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FE=ht(bE),VE=ue({},Si,{data:0}),tp=ht(VE),BE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jE[t])?!!e[t]:!1}function Wh(){return HE}var WE=ue({},Ys,{key:function(t){if(t.key){var e=BE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wh,charCode:function(t){return t.type==="keypress"?na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qE=ht(WE),KE=ue({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=ht(KE),GE=ue({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wh}),QE=ht(GE),YE=ue({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),XE=ht(YE),JE=ue({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZE=ht(JE),e_=[9,13,27,32],qh=Xt&&"CompositionEvent"in window,rs=null;Xt&&"documentMode"in document&&(rs=document.documentMode);var t_=Xt&&"TextEvent"in window&&!rs,uy=Xt&&(!qh||rs&&8<rs&&11>=rs),rp=String.fromCharCode(32),ip=!1;function cy(t,e){switch(t){case"keyup":return e_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function n_(t,e){switch(t){case"compositionend":return hy(e);case"keypress":return e.which!==32?null:(ip=!0,rp);case"textInput":return t=e.data,t===rp&&ip?null:t;default:return null}}function r_(t,e){if(Lr)return t==="compositionend"||!qh&&cy(t,e)?(t=ly(),ta=jh=wn=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uy&&e.locale!=="ko"?null:e.data;default:return null}}var i_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!i_[t.type]:e==="textarea"}function dy(t,e,n,r){jg(r),e=ka(e,"onChange"),0<e.length&&(n=new Hh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var is=null,Ss=null;function s_(t){Iy(t,0)}function ml(t){var e=Ur(t);if($g(e))return t}function o_(t,e){if(t==="change")return e}var fy=!1;if(Xt){var wu;if(Xt){var Eu="oninput"in document;if(!Eu){var op=document.createElement("div");op.setAttribute("oninput","return;"),Eu=typeof op.oninput=="function"}wu=Eu}else wu=!1;fy=wu&&(!document.documentMode||9<document.documentMode)}function ap(){is&&(is.detachEvent("onpropertychange",py),Ss=is=null)}function py(t){if(t.propertyName==="value"&&ml(Ss)){var e=[];dy(e,Ss,t,bh(t)),Kg(s_,e)}}function a_(t,e,n){t==="focusin"?(ap(),is=e,Ss=n,is.attachEvent("onpropertychange",py)):t==="focusout"&&ap()}function l_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(Ss)}function u_(t,e){if(t==="click")return ml(e)}function c_(t,e){if(t==="input"||t==="change")return ml(e)}function h_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ct=typeof Object.is=="function"?Object.is:h_;function Is(t,e){if(Ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sc.call(e,i)||!Ct(t[i],e[i]))return!1}return!0}function lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function up(t,e){var n=lp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lp(n)}}function my(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?my(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gy(){for(var t=window,e=va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=va(t.document)}return e}function Kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function d_(t){var e=gy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&my(n.ownerDocument.documentElement,n)){if(r!==null&&Kh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=up(n,s);var o=up(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var f_=Xt&&"documentMode"in document&&11>=document.documentMode,Mr=null,Tc=null,ss=null,kc=!1;function cp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kc||Mr==null||Mr!==va(r)||(r=Mr,"selectionStart"in r&&Kh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ss&&Is(ss,r)||(ss=r,r=ka(Tc,"onSelect"),0<r.length&&(e=new Hh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Mr)))}function Lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},_u={},yy={};Xt&&(yy=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function gl(t){if(_u[t])return _u[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yy)return _u[t]=e[n];return t}var vy=gl("animationend"),wy=gl("animationiteration"),Ey=gl("animationstart"),_y=gl("transitionend"),Sy=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(t,e){Sy.set(t,e),Tr(e,[t])}for(var Su=0;Su<hp.length;Su++){var Iu=hp[Su],p_=Iu.toLowerCase(),m_=Iu[0].toUpperCase()+Iu.slice(1);Vn(p_,"on"+m_)}Vn(vy,"onAnimationEnd");Vn(wy,"onAnimationIteration");Vn(Ey,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(_y,"onTransitionEnd");ii("onMouseEnter",["mouseout","mouseover"]);ii("onMouseLeave",["mouseout","mouseover"]);ii("onPointerEnter",["pointerout","pointerover"]);ii("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function dp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pE(r,e,void 0,t),t.currentTarget=null}function Iy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;dp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;dp(i,a,u),s=l}}}if(Ea)throw t=Ec,Ea=!1,Ec=null,t}function te(t,e){var n=e[Rc];n===void 0&&(n=e[Rc]=new Set);var r=t+"__bubble";n.has(r)||(Ty(e,t,2,!1),n.add(r))}function Tu(t,e,n){var r=0;e&&(r|=4),Ty(n,t,r,e)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Ts(t){if(!t[Mo]){t[Mo]=!0,xg.forEach(function(n){n!=="selectionchange"&&(g_.has(n)||Tu(n,!1,t),Tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mo]||(e[Mo]=!0,Tu("selectionchange",!1,e))}}function Ty(t,e,n,r){switch(ay(e)){case 1:var i=RE;break;case 4:i=xE;break;default:i=zh}n=i.bind(null,e,n,t),i=void 0,!wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ku(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Jn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Kg(function(){var u=s,c=bh(n),h=[];e:{var d=Sy.get(t);if(d!==void 0){var m=Hh,y=t;switch(t){case"keypress":if(na(n)===0)break e;case"keydown":case"keyup":m=qE;break;case"focusin":y="focus",m=vu;break;case"focusout":y="blur",m=vu;break;case"beforeblur":case"afterblur":m=vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=LE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=QE;break;case vy:case wy:case Ey:m=UE;break;case _y:m=XE;break;case"scroll":m=PE;break;case"wheel":m=ZE;break;case"copy":case"cut":case"paste":m=FE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=np}var v=(e&4)!==0,A=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=vs(f,p),E!=null&&v.push(ks(f,E,g)))),A)break;f=f.return}0<v.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==yc&&(y=n.relatedTarget||n.fromElement)&&(Jn(y)||y[Jt]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Jn(y):null,y!==null&&(A=kr(y),y!==A||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(v=ep,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=np,E="onPointerLeave",p="onPointerEnter",f="pointer"),A=m==null?d:Ur(m),g=y==null?d:Ur(y),d=new v(E,f+"leave",m,n,c),d.target=A,d.relatedTarget=g,E=null,Jn(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=g,v.relatedTarget=A,E=v),A=E,m&&y)t:{for(v=m,p=y,f=0,g=v;g;g=Rr(g))f++;for(g=0,E=p;E;E=Rr(E))g++;for(;0<f-g;)v=Rr(v),f--;for(;0<g-f;)p=Rr(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Rr(v),p=Rr(p)}v=null}else v=null;m!==null&&fp(h,d,m,v,!1),y!==null&&A!==null&&fp(h,A,y,v,!0)}}e:{if(d=u?Ur(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var N=o_;else if(sp(d))if(fy)N=c_;else{N=l_;var x=a_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=u_);if(N&&(N=N(t,u))){dy(h,N,n,c);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&dc(d,"number",d.value)}switch(x=u?Ur(u):window,t){case"focusin":(sp(x)||x.contentEditable==="true")&&(Mr=x,Tc=u,ss=null);break;case"focusout":ss=Tc=Mr=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,cp(h,n,c);break;case"selectionchange":if(f_)break;case"keydown":case"keyup":cp(h,n,c)}var S;if(qh)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Lr?cy(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(uy&&n.locale!=="ko"&&(Lr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Lr&&(S=ly()):(wn=c,jh="value"in wn?wn.value:wn.textContent,Lr=!0)),x=ka(u,k),0<x.length&&(k=new tp(k,t,null,n,c),h.push({event:k,listeners:x}),S?k.data=S:(S=hy(n),S!==null&&(k.data=S)))),(S=t_?n_(t,n):r_(t,n))&&(u=ka(u,"onBeforeInput"),0<u.length&&(c=new tp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=S))}Iy(h,e)})}function ks(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ka(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vs(t,n),s!=null&&r.unshift(ks(t,s,i)),s=vs(t,e),s!=null&&r.push(ks(t,s,i))),t=t.return}return r}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=vs(n,s),l!=null&&o.unshift(ks(n,l,a))):i||(l=vs(n,s),l!=null&&o.push(ks(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var y_=/\r\n?/g,v_=/\u0000|\uFFFD/g;function pp(t){return(typeof t=="string"?t:""+t).replace(y_,`
`).replace(v_,"")}function $o(t,e,n){if(e=pp(e),pp(t)!==e&&n)throw Error(I(425))}function Ca(){}var Cc=null,Nc=null;function Ac(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,w_=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,E_=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(t){return mp.resolve(null).then(t).catch(__)}:Dc;function __(t){setTimeout(function(){throw t})}function Cu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_s(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_s(e)}function Tn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ii=Math.random().toString(36).slice(2),xt="__reactFiber$"+Ii,Cs="__reactProps$"+Ii,Jt="__reactContainer$"+Ii,Rc="__reactEvents$"+Ii,S_="__reactListeners$"+Ii,I_="__reactHandles$"+Ii;function Jn(t){var e=t[xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jt]||n[xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gp(t);t!==null;){if(n=t[xt])return n;t=gp(t)}return e}t=n,n=t.parentNode}return null}function Xs(t){return t=t[xt]||t[Jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function yl(t){return t[Cs]||null}var xc=[],br=-1;function Bn(t){return{current:t}}function re(t){0>br||(t.current=xc[br],xc[br]=null,br--)}function Z(t,e){br++,xc[br]=t.current,t.current=e}var $n={},ze=Bn($n),tt=Bn(!1),cr=$n;function si(t,e){var n=t.type.contextTypes;if(!n)return $n;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function Na(){re(tt),re(ze)}function yp(t,e,n){if(ze.current!==$n)throw Error(I(168));Z(ze,e),Z(tt,n)}function ky(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,aE(t)||"Unknown",i));return ue({},n,r)}function Aa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$n,cr=ze.current,Z(ze,t),Z(tt,tt.current),!0}function vp(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=ky(t,e,cr),r.__reactInternalMemoizedMergedChildContext=t,re(tt),re(ze),Z(ze,t)):re(tt),Z(tt,n)}var jt=null,vl=!1,Nu=!1;function Cy(t){jt===null?jt=[t]:jt.push(t)}function T_(t){vl=!0,Cy(t)}function zn(){if(!Nu&&jt!==null){Nu=!0;var t=0,e=J;try{var n=jt;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jt=null,vl=!1}catch(i){throw jt!==null&&(jt=jt.slice(t+1)),Xg(Fh,zn),i}finally{J=e,Nu=!1}}return null}var Fr=[],Vr=0,Da=null,Ra=0,ft=[],pt=0,hr=null,Ht=1,Wt="";function Qn(t,e){Fr[Vr++]=Ra,Fr[Vr++]=Da,Da=t,Ra=e}function Ny(t,e,n){ft[pt++]=Ht,ft[pt++]=Wt,ft[pt++]=hr,hr=t;var r=Ht;t=Wt;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var s=32-Tt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ht=1<<32-Tt(e)+i|n<<i|r,Wt=s+t}else Ht=1<<s|n<<i|r,Wt=t}function Gh(t){t.return!==null&&(Qn(t,1),Ny(t,1,0))}function Qh(t){for(;t===Da;)Da=Fr[--Vr],Fr[Vr]=null,Ra=Fr[--Vr],Fr[Vr]=null;for(;t===hr;)hr=ft[--pt],ft[pt]=null,Wt=ft[--pt],ft[pt]=null,Ht=ft[--pt],ft[pt]=null}var at=null,ot=null,ie=!1,It=null;function Ay(t,e){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,at=t,ot=Tn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,at=t,ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:Ht,overflow:Wt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,at=t,ot=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Oc(t){if(ie){var e=ot;if(e){var n=e;if(!wp(t,e)){if(Pc(t))throw Error(I(418));e=Tn(n.nextSibling);var r=at;e&&wp(t,e)?Ay(r,n):(t.flags=t.flags&-4097|2,ie=!1,at=t)}}else{if(Pc(t))throw Error(I(418));t.flags=t.flags&-4097|2,ie=!1,at=t}}}function Ep(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;at=t}function Uo(t){if(t!==at)return!1;if(!ie)return Ep(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ac(t.type,t.memoizedProps)),e&&(e=ot)){if(Pc(t))throw Dy(),Error(I(418));for(;e;)Ay(t,e),e=Tn(e.nextSibling)}if(Ep(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ot=Tn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ot=null}}else ot=at?Tn(t.stateNode.nextSibling):null;return!0}function Dy(){for(var t=ot;t;)t=Tn(t.nextSibling)}function oi(){ot=at=null,ie=!1}function Yh(t){It===null?It=[t]:It.push(t)}var k_=an.ReactCurrentBatchConfig;function _t(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var xa=Bn(null),Pa=null,Br=null,Xh=null;function Jh(){Xh=Br=Pa=null}function Zh(t){var e=xa.current;re(xa),t._currentValue=e}function Lc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xr(t,e){Pa=t,Xh=Br=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(et=!0),t.firstContext=null)}function vt(t){var e=t._currentValue;if(Xh!==t)if(t={context:t,memoizedValue:e,next:null},Br===null){if(Pa===null)throw Error(I(308));Br=t,Pa.dependencies={lanes:0,firstContext:t}}else Br=Br.next=t;return e}var Zn=null;function ed(t){Zn===null?Zn=[t]:Zn.push(t)}function Ry(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ed(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zt(t,r)}function Zt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dn=!1;function td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Q&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zt(t,n)}return i=r.interleaved,i===null?(e.next=e,ed(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zt(t,n)}function ra(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vh(t,n)}}function _p(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Oa(t,e,n,r){var i=t.updateQueue;dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=ue({},h,d);break e;case 2:dn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);fr|=o,t.lanes=o,t.memoizedState=h}}function Sp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Py=new Rg.Component().refs;function Mc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wl={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Nn(t),s=Qt(r,i);s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(kt(e,t,i,r),ra(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Nn(t),s=Qt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(kt(e,t,i,r),ra(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ge(),r=Nn(t),i=Qt(n,r);i.tag=2,e!=null&&(i.callback=e),e=kn(t,i,r),e!==null&&(kt(e,t,r,n),ra(e,t,r))}};function Ip(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Is(n,r)||!Is(i,s):!0}function Oy(t,e,n){var r=!1,i=$n,s=e.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=nt(e)?cr:ze.current,r=e.contextTypes,s=(r=r!=null)?si(t,i):$n),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wl.enqueueReplaceState(e,e.state,null)}function $c(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Py,td(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=nt(e)?cr:ze.current,i.context=si(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&wl.enqueueReplaceState(i,i.state,null),Oa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Py&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function bo(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kp(t){var e=t._init;return e(t._payload)}function Ly(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=An(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,E){return f===null||f.tag!==6?(f=Lu(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,E){var N=g.type;return N===Or?c(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===hn&&kp(N)===f.type)?(E=i(f,g.props),E.ref=zi(p,f,g),E.return=p,E):(E=ua(g.type,g.key,g.props,null,p.mode,E),E.ref=zi(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Mu(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,E,N){return f===null||f.tag!==7?(f=or(g,p.mode,E,N),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Lu(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case No:return g=ua(f.type,f.key,f.props,null,p.mode,g),g.ref=zi(p,null,f),g.return=p,g;case Pr:return f=Mu(f,p.mode,g),f.return=p,f;case hn:var E=f._init;return h(p,E(f._payload),g)}if(Ki(f)||Ui(f))return f=or(f,p.mode,g,null),f.return=p,f;bo(p,f)}return null}function d(p,f,g,E){var N=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:a(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case No:return g.key===N?l(p,f,g,E):null;case Pr:return g.key===N?u(p,f,g,E):null;case hn:return N=g._init,d(p,f,N(g._payload),E)}if(Ki(g)||Ui(g))return N!==null?null:c(p,f,g,E,null);bo(p,g)}return null}function m(p,f,g,E,N){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,a(f,p,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case No:return p=p.get(E.key===null?g:E.key)||null,l(f,p,E,N);case Pr:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,N);case hn:var x=E._init;return m(p,f,g,x(E._payload),N)}if(Ki(E)||Ui(E))return p=p.get(g)||null,c(f,p,E,N,null);bo(f,E)}return null}function y(p,f,g,E){for(var N=null,x=null,S=f,k=f=0,j=null;S!==null&&k<g.length;k++){S.index>k?(j=S,S=null):j=S.sibling;var $=d(p,S,g[k],E);if($===null){S===null&&(S=j);break}t&&S&&$.alternate===null&&e(p,S),f=s($,f,k),x===null?N=$:x.sibling=$,x=$,S=j}if(k===g.length)return n(p,S),ie&&Qn(p,k),N;if(S===null){for(;k<g.length;k++)S=h(p,g[k],E),S!==null&&(f=s(S,f,k),x===null?N=S:x.sibling=S,x=S);return ie&&Qn(p,k),N}for(S=r(p,S);k<g.length;k++)j=m(S,p,k,g[k],E),j!==null&&(t&&j.alternate!==null&&S.delete(j.key===null?k:j.key),f=s(j,f,k),x===null?N=j:x.sibling=j,x=j);return t&&S.forEach(function(oe){return e(p,oe)}),ie&&Qn(p,k),N}function v(p,f,g,E){var N=Ui(g);if(typeof N!="function")throw Error(I(150));if(g=N.call(g),g==null)throw Error(I(151));for(var x=N=null,S=f,k=f=0,j=null,$=g.next();S!==null&&!$.done;k++,$=g.next()){S.index>k?(j=S,S=null):j=S.sibling;var oe=d(p,S,$.value,E);if(oe===null){S===null&&(S=j);break}t&&S&&oe.alternate===null&&e(p,S),f=s(oe,f,k),x===null?N=oe:x.sibling=oe,x=oe,S=j}if($.done)return n(p,S),ie&&Qn(p,k),N;if(S===null){for(;!$.done;k++,$=g.next())$=h(p,$.value,E),$!==null&&(f=s($,f,k),x===null?N=$:x.sibling=$,x=$);return ie&&Qn(p,k),N}for(S=r(p,S);!$.done;k++,$=g.next())$=m(S,p,k,$.value,E),$!==null&&(t&&$.alternate!==null&&S.delete($.key===null?k:$.key),f=s($,f,k),x===null?N=$:x.sibling=$,x=$);return t&&S.forEach(function(dt){return e(p,dt)}),ie&&Qn(p,k),N}function A(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===Or&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case No:e:{for(var N=g.key,x=f;x!==null;){if(x.key===N){if(N=g.type,N===Or){if(x.tag===7){n(p,x.sibling),f=i(x,g.props.children),f.return=p,p=f;break e}}else if(x.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===hn&&kp(N)===x.type){n(p,x.sibling),f=i(x,g.props),f.ref=zi(p,x,g),f.return=p,p=f;break e}n(p,x);break}else e(p,x);x=x.sibling}g.type===Or?(f=or(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=ua(g.type,g.key,g.props,null,p.mode,E),E.ref=zi(p,f,g),E.return=p,p=E)}return o(p);case Pr:e:{for(x=g.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Mu(g,p.mode,E),f.return=p,p=f}return o(p);case hn:return x=g._init,A(p,f,x(g._payload),E)}if(Ki(g))return y(p,f,g,E);if(Ui(g))return v(p,f,g,E);bo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Lu(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return A}var ai=Ly(!0),My=Ly(!1),Js={},Ot=Bn(Js),Ns=Bn(Js),As=Bn(Js);function er(t){if(t===Js)throw Error(I(174));return t}function nd(t,e){switch(Z(As,e),Z(Ns,t),Z(Ot,Js),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pc(e,t)}re(Ot),Z(Ot,e)}function li(){re(Ot),re(Ns),re(As)}function $y(t){er(As.current);var e=er(Ot.current),n=pc(e,t.type);e!==n&&(Z(Ns,t),Z(Ot,n))}function rd(t){Ns.current===t&&(re(Ot),re(Ns))}var ae=Bn(0);function La(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Au=[];function id(){for(var t=0;t<Au.length;t++)Au[t]._workInProgressVersionPrimary=null;Au.length=0}var ia=an.ReactCurrentDispatcher,Du=an.ReactCurrentBatchConfig,dr=0,le=null,ve=null,Te=null,Ma=!1,os=!1,Ds=0,C_=0;function Ue(){throw Error(I(321))}function sd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ct(t[n],e[n]))return!1;return!0}function od(t,e,n,r,i,s){if(dr=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ia.current=t===null||t.memoizedState===null?R_:x_,t=n(r,i),os){s=0;do{if(os=!1,Ds=0,25<=s)throw Error(I(301));s+=1,Te=ve=null,e.updateQueue=null,ia.current=P_,t=n(r,i)}while(os)}if(ia.current=$a,e=ve!==null&&ve.next!==null,dr=0,Te=ve=le=null,Ma=!1,e)throw Error(I(300));return t}function ad(){var t=Ds!==0;return Ds=0,t}function Rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?le.memoizedState=Te=t:Te=Te.next=t,Te}function wt(){if(ve===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Te===null?le.memoizedState:Te.next;if(e!==null)Te=e,ve=t;else{if(t===null)throw Error(I(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Te===null?le.memoizedState=Te=t:Te=Te.next=t}return Te}function Rs(t,e){return typeof e=="function"?e(t):e}function Ru(t){var e=wt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((dr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,le.lanes|=c,fr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ct(r,e.memoizedState)||(et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,fr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xu(t){var e=wt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ct(s,e.memoizedState)||(et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Uy(){}function by(t,e){var n=le,r=wt(),i=e(),s=!Ct(r.memoizedState,i);if(s&&(r.memoizedState=i,et=!0),r=r.queue,ld(By.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,xs(9,Vy.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(I(349));(dr&30)!==0||Fy(n,e,i)}return i}function Fy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vy(t,e,n,r){e.value=n,e.getSnapshot=r,zy(e)&&jy(t)}function By(t,e,n){return n(function(){zy(e)&&jy(t)})}function zy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ct(t,n)}catch{return!0}}function jy(t){var e=Zt(t,1);e!==null&&kt(e,t,1,-1)}function Cp(t){var e=Rt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:t},e.queue=t,t=t.dispatch=D_.bind(null,le,t),[e.memoizedState,t]}function xs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Hy(){return wt().memoizedState}function sa(t,e,n,r){var i=Rt();le.flags|=t,i.memoizedState=xs(1|e,n,void 0,r===void 0?null:r)}function El(t,e,n,r){var i=wt();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&sd(r,o.deps)){i.memoizedState=xs(e,n,s,r);return}}le.flags|=t,i.memoizedState=xs(1|e,n,s,r)}function Np(t,e){return sa(8390656,8,t,e)}function ld(t,e){return El(2048,8,t,e)}function Wy(t,e){return El(4,2,t,e)}function qy(t,e){return El(4,4,t,e)}function Ky(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gy(t,e,n){return n=n!=null?n.concat([t]):null,El(4,4,Ky.bind(null,e,t),n)}function ud(){}function Qy(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Yy(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Xy(t,e,n){return(dr&21)===0?(t.baseState&&(t.baseState=!1,et=!0),t.memoizedState=n):(Ct(n,e)||(n=ey(),le.lanes|=n,fr|=n,t.baseState=!0),e)}function N_(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=Du.transition;Du.transition={};try{t(!1),e()}finally{J=n,Du.transition=r}}function Jy(){return wt().memoizedState}function A_(t,e,n){var r=Nn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zy(t))ev(e,n);else if(n=Ry(t,e,n,r),n!==null){var i=Ge();kt(n,t,r,i),tv(n,e,r)}}function D_(t,e,n){var r=Nn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zy(t))ev(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ct(a,o)){var l=e.interleaved;l===null?(i.next=i,ed(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Ry(t,e,i,r),n!==null&&(i=Ge(),kt(n,t,r,i),tv(n,e,r))}}function Zy(t){var e=t.alternate;return t===le||e!==null&&e===le}function ev(t,e){os=Ma=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tv(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vh(t,n)}}var $a={readContext:vt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},R_={readContext:vt,useCallback:function(t,e){return Rt().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:Np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sa(4194308,4,Ky.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sa(4194308,4,t,e)},useInsertionEffect:function(t,e){return sa(4,2,t,e)},useMemo:function(t,e){var n=Rt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=A_.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=Rt();return t={current:t},e.memoizedState=t},useState:Cp,useDebugValue:ud,useDeferredValue:function(t){return Rt().memoizedState=t},useTransition:function(){var t=Cp(!1),e=t[0];return t=N_.bind(null,t[1]),Rt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=Rt();if(ie){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),ke===null)throw Error(I(349));(dr&30)!==0||Fy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Np(By.bind(null,r,s,t),[t]),r.flags|=2048,xs(9,Vy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rt(),e=ke.identifierPrefix;if(ie){var n=Wt,r=Ht;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ds++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=C_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},x_={readContext:vt,useCallback:Qy,useContext:vt,useEffect:ld,useImperativeHandle:Gy,useInsertionEffect:Wy,useLayoutEffect:qy,useMemo:Yy,useReducer:Ru,useRef:Hy,useState:function(){return Ru(Rs)},useDebugValue:ud,useDeferredValue:function(t){var e=wt();return Xy(e,ve.memoizedState,t)},useTransition:function(){var t=Ru(Rs)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Uy,useSyncExternalStore:by,useId:Jy,unstable_isNewReconciler:!1},P_={readContext:vt,useCallback:Qy,useContext:vt,useEffect:ld,useImperativeHandle:Gy,useInsertionEffect:Wy,useLayoutEffect:qy,useMemo:Yy,useReducer:xu,useRef:Hy,useState:function(){return xu(Rs)},useDebugValue:ud,useDeferredValue:function(t){var e=wt();return ve===null?e.memoizedState=t:Xy(e,ve.memoizedState,t)},useTransition:function(){var t=xu(Rs)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Uy,useSyncExternalStore:by,useId:Jy,unstable_isNewReconciler:!1};function ui(t,e){try{var n="",r=e;do n+=oE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pu(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Uc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var O_=typeof WeakMap=="function"?WeakMap:Map;function nv(t,e,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ba||(ba=!0,Kc=r),Uc(t,e)},n}function rv(t,e,n){n=Qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uc(t,e),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ap(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new O_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=K_.bind(null,t,e,n),e.then(t,t))}function Dp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rp(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qt(-1,1),e.tag=2,kn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var L_=an.ReactCurrentOwner,et=!1;function je(t,e,n,r){e.child=t===null?My(e,null,n,r):ai(e,t.child,n,r)}function xp(t,e,n,r,i){n=n.render;var s=e.ref;return Xr(e,i),r=od(t,e,n,r,s,i),n=ad(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,en(t,e,i)):(ie&&n&&Gh(e),e.flags|=1,je(t,e,r,i),e.child)}function Pp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,iv(t,e,s,r,i)):(t=ua(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Is,n(o,r)&&t.ref===e.ref)return en(t,e,i)}return e.flags|=1,t=An(s,r),t.ref=e.ref,t.return=e,e.child=t}function iv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Is(s,r)&&t.ref===e.ref)if(et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(et=!0);else return e.lanes=t.lanes,en(t,e,i)}return bc(t,e,n,r,i)}function sv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(jr,st),st|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(jr,st),st|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(jr,st),st|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(jr,st),st|=r;return je(t,e,i,n),e.child}function ov(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bc(t,e,n,r,i){var s=nt(n)?cr:ze.current;return s=si(e,s),Xr(e,i),n=od(t,e,n,r,s,i),r=ad(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,en(t,e,i)):(ie&&r&&Gh(e),e.flags|=1,je(t,e,n,i),e.child)}function Op(t,e,n,r,i){if(nt(n)){var s=!0;Aa(e)}else s=!1;if(Xr(e,i),e.stateNode===null)oa(t,e),Oy(e,n,r),$c(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=nt(n)?cr:ze.current,u=si(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Tp(e,o,r,u),dn=!1;var d=e.memoizedState;o.state=d,Oa(e,r,o,i),l=e.memoizedState,a!==r||d!==l||tt.current||dn?(typeof c=="function"&&(Mc(e,n,c,r),l=e.memoizedState),(a=dn||Ip(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,xy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:_t(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=nt(n)?cr:ze.current,l=si(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Tp(e,o,r,l),dn=!1,d=e.memoizedState,o.state=d,Oa(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||tt.current||dn?(typeof m=="function"&&(Mc(e,n,m,r),y=e.memoizedState),(u=dn||Ip(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Fc(t,e,n,r,s,i)}function Fc(t,e,n,r,i,s){ov(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&vp(e,n,!1),en(t,e,s);r=e.stateNode,L_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ai(e,t.child,null,s),e.child=ai(e,null,a,s)):je(t,e,a,s),e.memoizedState=r.state,i&&vp(e,n,!0),e.child}function av(t){var e=t.stateNode;e.pendingContext?yp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&yp(t,e.context,!1),nd(t,e.containerInfo)}function Lp(t,e,n,r,i){return oi(),Yh(i),e.flags|=256,je(t,e,n,r),e.child}var Vc={dehydrated:null,treeContext:null,retryLane:0};function Bc(t){return{baseLanes:t,cachePool:null,transitions:null}}function lv(t,e,n){var r=e.pendingProps,i=ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(ae,i&1),t===null)return Oc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Il(o,r,0,null),t=or(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bc(n),e.memoizedState=Vc,t):cd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return M_(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=An(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=An(a,s):(s=or(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vc,r}return s=t.child,t=s.sibling,r=An(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cd(t,e){return e=Il({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fo(t,e,n,r){return r!==null&&Yh(r),ai(e,t.child,null,n),t=cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function M_(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pu(Error(I(422))),Fo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Il({mode:"visible",children:r.children},i,0,null),s=or(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&ai(e,t.child,null,o),e.child.memoizedState=Bc(o),e.memoizedState=Vc,s);if((e.mode&1)===0)return Fo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Pu(s,r,void 0),Fo(t,e,o,r)}if(a=(o&t.childLanes)!==0,et||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zt(t,i),kt(r,t,i,-1))}return gd(),r=Pu(Error(I(421))),Fo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=G_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ot=Tn(i.nextSibling),at=e,ie=!0,It=null,t!==null&&(ft[pt++]=Ht,ft[pt++]=Wt,ft[pt++]=hr,Ht=t.id,Wt=t.overflow,hr=e),e=cd(e,r.children),e.flags|=4096,e)}function Mp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lc(t.return,e,n)}function Ou(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function uv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(je(t,e,r.children,n),r=ae.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mp(t,n,e);else if(t.tag===19)Mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(ae,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&La(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ou(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&La(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ou(e,!0,n,null,s);break;case"together":Ou(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oa(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function en(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=An(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=An(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $_(t,e,n){switch(e.tag){case 3:av(e),oi();break;case 5:$y(e);break;case 1:nt(e.type)&&Aa(e);break;case 4:nd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(xa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(ae,ae.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?lv(t,e,n):(Z(ae,ae.current&1),t=en(t,e,n),t!==null?t.sibling:null);Z(ae,ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return uv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(ae,ae.current),r)break;return null;case 22:case 23:return e.lanes=0,sv(t,e,n)}return en(t,e,n)}var cv,zc,hv,dv;cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zc=function(){};hv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,er(Ot.current);var s=null;switch(n){case"input":i=cc(t,i),r=cc(t,r),s=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":i=fc(t,i),r=fc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ca)}mc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};dv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ji(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function U_(t,e,n){var r=e.pendingProps;switch(Qh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(e),null;case 1:return nt(e.type)&&Na(),be(e),null;case 3:return r=e.stateNode,li(),re(tt),re(ze),id(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,It!==null&&(Yc(It),It=null))),zc(t,e),be(e),null;case 5:rd(e);var i=er(As.current);if(n=e.type,t!==null&&e.stateNode!=null)hv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return be(e),null}if(t=er(Ot.current),Uo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xt]=e,r[Cs]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Qi.length;i++)te(Qi[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Hf(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":qf(r,s),te("invalid",r)}mc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&$o(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$o(r.textContent,a,t),i=["children",""+a]):gs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Ao(r),Wf(r,s,!0);break;case"textarea":Ao(r),Kf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ca)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xt]=e,t[Cs]=r,cv(t,e,!1,!1),e.stateNode=t;e:{switch(o=gc(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qi.length;i++)te(Qi[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":Hf(t,r),i=cc(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),te("invalid",t);break;case"textarea":qf(t,r),i=fc(t,r),te("invalid",t);break;default:i=r}mc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?zg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ys(t,l):typeof l=="number"&&ys(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(gs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&Lh(t,s,l,o))}switch(n){case"input":Ao(t),Wf(t,r,!1);break;case"textarea":Ao(t),Kf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Kr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Kr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return be(e),null;case 6:if(t&&e.stateNode!=null)dv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=er(As.current),er(Ot.current),Uo(e)){if(r=e.stateNode,n=e.memoizedProps,r[xt]=e,(s=r.nodeValue!==n)&&(t=at,t!==null))switch(t.tag){case 3:$o(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$o(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=e,e.stateNode=r}return be(e),null;case 13:if(re(ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&ot!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Dy(),oi(),e.flags|=98560,s=!1;else if(s=Uo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[xt]=e}else oi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;be(e),s=!1}else It!==null&&(Yc(It),It=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ae.current&1)!==0?we===0&&(we=3):gd())),e.updateQueue!==null&&(e.flags|=4),be(e),null);case 4:return li(),zc(t,e),t===null&&Ts(e.stateNode.containerInfo),be(e),null;case 10:return Zh(e.type._context),be(e),null;case 17:return nt(e.type)&&Na(),be(e),null;case 19:if(re(ae),s=e.memoizedState,s===null)return be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ji(s,!1);else{if(we!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=La(t),o!==null){for(e.flags|=128,ji(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>ci&&(e.flags|=128,r=!0,ji(s,!1),e.lanes=4194304)}else{if(!r)if(t=La(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ji(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return be(e),null}else 2*de()-s.renderingStartTime>ci&&n!==1073741824&&(e.flags|=128,r=!0,ji(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=ae.current,Z(ae,r?n&1|2:n&1),e):(be(e),null);case 22:case 23:return md(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(st&1073741824)!==0&&(be(e),e.subtreeFlags&6&&(e.flags|=8192)):be(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function b_(t,e){switch(Qh(e),e.tag){case 1:return nt(e.type)&&Na(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return li(),re(tt),re(ze),id(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return rd(e),null;case 13:if(re(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(ae),null;case 4:return li(),null;case 10:return Zh(e.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var Vo=!1,Fe=!1,F_=typeof WeakSet=="function"?WeakSet:Set,D=null;function zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function jc(t,e,n){try{n()}catch(r){ce(t,e,r)}}var $p=!1;function V_(t,e){if(Cc=Ia,t=gy(),Kh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nc={focusedElem:t,selectionRange:n},Ia=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,A=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:_t(e.type,v),A);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(E){ce(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return y=$p,$p=!1,y}function as(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&jc(e,n,s)}i=i.next}while(i!==r)}}function _l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fv(t){var e=t.alternate;e!==null&&(t.alternate=null,fv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xt],delete e[Cs],delete e[Rc],delete e[S_],delete e[I_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pv(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ca));else if(r!==4&&(t=t.child,t!==null))for(Wc(t,e,n),t=t.sibling;t!==null;)Wc(t,e,n),t=t.sibling}function qc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qc(t,e,n),t=t.sibling;t!==null;)qc(t,e,n),t=t.sibling}var Ae=null,St=!1;function un(t,e,n){for(n=n.child;n!==null;)mv(t,e,n),n=n.sibling}function mv(t,e,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(fl,n)}catch{}switch(n.tag){case 5:Fe||zr(n,e);case 6:var r=Ae,i=St;Ae=null,un(t,e,n),Ae=r,St=i,Ae!==null&&(St?(t=Ae,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(St?(t=Ae,n=n.stateNode,t.nodeType===8?Cu(t.parentNode,n):t.nodeType===1&&Cu(t,n),_s(t)):Cu(Ae,n.stateNode));break;case 4:r=Ae,i=St,Ae=n.stateNode.containerInfo,St=!0,un(t,e,n),Ae=r,St=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&jc(n,e,o),i=i.next}while(i!==r)}un(t,e,n);break;case 1:if(!Fe&&(zr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}un(t,e,n);break;case 21:un(t,e,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,un(t,e,n),Fe=r):un(t,e,n);break;default:un(t,e,n)}}function bp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new F_),e.forEach(function(r){var i=Q_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ae=a.stateNode,St=!1;break e;case 3:Ae=a.stateNode.containerInfo,St=!0;break e;case 4:Ae=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(Ae===null)throw Error(I(160));mv(s,o,i),Ae=null,St=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gv(e,t),e=e.sibling}function gv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Et(e,t),Dt(t),r&4){try{as(3,t,t.return),_l(3,t)}catch(v){ce(t,t.return,v)}try{as(5,t,t.return)}catch(v){ce(t,t.return,v)}}break;case 1:Et(e,t),Dt(t),r&512&&n!==null&&zr(n,n.return);break;case 5:if(Et(e,t),Dt(t),r&512&&n!==null&&zr(n,n.return),t.flags&32){var i=t.stateNode;try{ys(i,"")}catch(v){ce(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ug(i,s),gc(a,o);var u=gc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?zg(i,h):c==="dangerouslySetInnerHTML"?Vg(i,h):c==="children"?ys(i,h):Lh(i,c,h,u)}switch(a){case"input":hc(i,s);break;case"textarea":bg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Kr(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Kr(i,!!s.multiple,s.defaultValue,!0):Kr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Cs]=s}catch(v){ce(t,t.return,v)}}break;case 6:if(Et(e,t),Dt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ce(t,t.return,v)}}break;case 3:if(Et(e,t),Dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_s(e.containerInfo)}catch(v){ce(t,t.return,v)}break;case 4:Et(e,t),Dt(t);break;case 13:Et(e,t),Dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fd=de())),r&4&&bp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Fe=(u=Fe)||c,Et(e,t),Fe=u):Et(e,t),Dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(D=t,c=t.child;c!==null;){for(h=D=c;D!==null;){switch(d=D,m=d.child,d.tag){case 0:case 11:case 14:case 15:as(4,d,d.return);break;case 1:zr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ce(r,n,v)}}break;case 5:zr(d,d.return);break;case 22:if(d.memoizedState!==null){Vp(h);continue}}m!==null?(m.return=d,D=m):Vp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bg("display",o))}catch(v){ce(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ce(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Et(e,t),Dt(t),r&4&&bp(t);break;case 21:break;default:Et(e,t),Dt(t)}}function Dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pv(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ys(i,""),r.flags&=-33);var s=Up(t);qc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Up(t);Wc(t,a,o);break;default:throw Error(I(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function B_(t,e,n){D=t,yv(t)}function yv(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Vo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Fe;a=Vo;var u=Fe;if(Vo=o,(Fe=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?Bp(i):l!==null?(l.return=o,D=l):Bp(i);for(;s!==null;)D=s,yv(s),s=s.sibling;D=i,Vo=a,Fe=u}Fp(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,D=s):Fp(t)}}function Fp(t){for(;D!==null;){var e=D;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Fe||_l(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_t(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&_s(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Fe||e.flags&512&&Hc(e)}catch(d){ce(e,e.return,d)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function Vp(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Bp(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_l(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{Hc(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{Hc(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var z_=Math.ceil,Ua=an.ReactCurrentDispatcher,hd=an.ReactCurrentOwner,yt=an.ReactCurrentBatchConfig,Q=0,ke=null,me=null,xe=0,st=0,jr=Bn(0),we=0,Ps=null,fr=0,Sl=0,dd=0,ls=null,Ze=null,fd=0,ci=1/0,zt=null,ba=!1,Kc=null,Cn=null,Bo=!1,En=null,Fa=0,us=0,Gc=null,aa=-1,la=0;function Ge(){return(Q&6)!==0?de():aa!==-1?aa:aa=de()}function Nn(t){return(t.mode&1)===0?1:(Q&2)!==0&&xe!==0?xe&-xe:k_.transition!==null?(la===0&&(la=ey()),la):(t=J,t!==0||(t=window.event,t=t===void 0?16:ay(t.type)),t)}function kt(t,e,n,r){if(50<us)throw us=0,Gc=null,Error(I(185));Qs(t,n,r),((Q&2)===0||t!==ke)&&(t===ke&&((Q&2)===0&&(Sl|=n),we===4&&pn(t,xe)),rt(t,r),n===1&&Q===0&&(e.mode&1)===0&&(ci=de()+500,vl&&zn()))}function rt(t,e){var n=t.callbackNode;kE(t,e);var r=Sa(t,t===ke?xe:0);if(r===0)n!==null&&Yf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Yf(n),e===1)t.tag===0?T_(zp.bind(null,t)):Cy(zp.bind(null,t)),E_(function(){(Q&6)===0&&zn()}),n=null;else{switch(ty(r)){case 1:n=Fh;break;case 4:n=Jg;break;case 16:n=_a;break;case 536870912:n=Zg;break;default:n=_a}n=kv(n,vv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vv(t,e){if(aa=-1,la=0,(Q&6)!==0)throw Error(I(327));var n=t.callbackNode;if(Jr()&&t.callbackNode!==n)return null;var r=Sa(t,t===ke?xe:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Va(t,r);else{e=r;var i=Q;Q|=2;var s=Ev();(ke!==t||xe!==e)&&(zt=null,ci=de()+500,sr(t,e));do try{W_();break}catch(a){wv(t,a)}while(1);Jh(),Ua.current=s,Q=i,me!==null?e=0:(ke=null,xe=0,e=we)}if(e!==0){if(e===2&&(i=_c(t),i!==0&&(r=i,e=Qc(t,i))),e===1)throw n=Ps,sr(t,0),pn(t,r),rt(t,de()),n;if(e===6)pn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!j_(i)&&(e=Va(t,r),e===2&&(s=_c(t),s!==0&&(r=s,e=Qc(t,s))),e===1))throw n=Ps,sr(t,0),pn(t,r),rt(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Yn(t,Ze,zt);break;case 3:if(pn(t,r),(r&130023424)===r&&(e=fd+500-de(),10<e)){if(Sa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ge(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dc(Yn.bind(null,t,Ze,zt),e);break}Yn(t,Ze,zt);break;case 4:if(pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Tt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*z_(r/1960))-r,10<r){t.timeoutHandle=Dc(Yn.bind(null,t,Ze,zt),r);break}Yn(t,Ze,zt);break;case 5:Yn(t,Ze,zt);break;default:throw Error(I(329))}}}return rt(t,de()),t.callbackNode===n?vv.bind(null,t):null}function Qc(t,e){var n=ls;return t.current.memoizedState.isDehydrated&&(sr(t,e).flags|=256),t=Va(t,e),t!==2&&(e=Ze,Ze=n,e!==null&&Yc(e)),t}function Yc(t){Ze===null?Ze=t:Ze.push.apply(Ze,t)}function j_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pn(t,e){for(e&=~dd,e&=~Sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Tt(e),r=1<<n;t[n]=-1,e&=~r}}function zp(t){if((Q&6)!==0)throw Error(I(327));Jr();var e=Sa(t,0);if((e&1)===0)return rt(t,de()),null;var n=Va(t,e);if(t.tag!==0&&n===2){var r=_c(t);r!==0&&(e=r,n=Qc(t,r))}if(n===1)throw n=Ps,sr(t,0),pn(t,e),rt(t,de()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yn(t,Ze,zt),rt(t,de()),null}function pd(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(ci=de()+500,vl&&zn())}}function pr(t){En!==null&&En.tag===0&&(Q&6)===0&&Jr();var e=Q;Q|=1;var n=yt.transition,r=J;try{if(yt.transition=null,J=1,t)return t()}finally{J=r,yt.transition=n,Q=e,(Q&6)===0&&zn()}}function md(){st=jr.current,re(jr)}function sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,w_(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Qh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Na();break;case 3:li(),re(tt),re(ze),id();break;case 5:rd(r);break;case 4:li();break;case 13:re(ae);break;case 19:re(ae);break;case 10:Zh(r.type._context);break;case 22:case 23:md()}n=n.return}if(ke=t,me=t=An(t.current,null),xe=st=e,we=0,Ps=null,dd=Sl=fr=0,Ze=ls=null,Zn!==null){for(e=0;e<Zn.length;e++)if(n=Zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zn=null}return t}function wv(t,e){do{var n=me;try{if(Jh(),ia.current=$a,Ma){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ma=!1}if(dr=0,Te=ve=le=null,os=!1,Ds=0,hd.current=null,n===null||n.return===null){we=1,Ps=e,me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Dp(o);if(m!==null){m.flags&=-257,Rp(m,o,a,s,e),m.mode&1&&Ap(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if((e&1)===0){Ap(s,u,e),gd();break e}l=Error(I(426))}}else if(ie&&a.mode&1){var A=Dp(o);if(A!==null){(A.flags&65536)===0&&(A.flags|=256),Rp(A,o,a,s,e),Yh(ui(l,a));break e}}s=l=ui(l,a),we!==4&&(we=2),ls===null?ls=[s]:ls.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=nv(s,l,e);_p(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Cn===null||!Cn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=rv(s,a,e);_p(s,E);break e}}s=s.return}while(s!==null)}Sv(n)}catch(N){e=N,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function Ev(){var t=Ua.current;return Ua.current=$a,t===null?$a:t}function gd(){(we===0||we===3||we===2)&&(we=4),ke===null||(fr&268435455)===0&&(Sl&268435455)===0||pn(ke,xe)}function Va(t,e){var n=Q;Q|=2;var r=Ev();(ke!==t||xe!==e)&&(zt=null,sr(t,e));do try{H_();break}catch(i){wv(t,i)}while(1);if(Jh(),Q=n,Ua.current=r,me!==null)throw Error(I(261));return ke=null,xe=0,we}function H_(){for(;me!==null;)_v(me)}function W_(){for(;me!==null&&!gE();)_v(me)}function _v(t){var e=Tv(t.alternate,t,st);t.memoizedProps=t.pendingProps,e===null?Sv(t):me=e,hd.current=null}function Sv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=U_(n,e,st),n!==null){me=n;return}}else{if(n=b_(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,me=null;return}}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);we===0&&(we=5)}function Yn(t,e,n){var r=J,i=yt.transition;try{yt.transition=null,J=1,q_(t,e,n,r)}finally{yt.transition=i,J=r}return null}function q_(t,e,n,r){do Jr();while(En!==null);if((Q&6)!==0)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(CE(t,s),t===ke&&(me=ke=null,xe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Bo||(Bo=!0,kv(_a,function(){return Jr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=yt.transition,yt.transition=null;var o=J;J=1;var a=Q;Q|=4,hd.current=null,V_(t,n),gv(n,t),d_(Nc),Ia=!!Cc,Nc=Cc=null,t.current=n,B_(n),yE(),Q=a,J=o,yt.transition=s}else t.current=n;if(Bo&&(Bo=!1,En=t,Fa=i),s=t.pendingLanes,s===0&&(Cn=null),EE(n.stateNode),rt(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ba)throw ba=!1,t=Kc,Kc=null,t;return(Fa&1)!==0&&t.tag!==0&&Jr(),s=t.pendingLanes,(s&1)!==0?t===Gc?us++:(us=0,Gc=t):us=0,zn(),null}function Jr(){if(En!==null){var t=ty(Fa),e=yt.transition,n=J;try{if(yt.transition=null,J=16>t?16:t,En===null)var r=!1;else{if(t=En,En=null,Fa=0,(Q&6)!==0)throw Error(I(331));var i=Q;for(Q|=4,D=t.current;D!==null;){var s=D,o=s.child;if((D.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:as(8,c,s)}var h=c.child;if(h!==null)h.return=c,D=h;else for(;D!==null;){c=D;var d=c.sibling,m=c.return;if(fv(c),c===u){D=null;break}if(d!==null){d.return=m,D=d;break}D=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var A=v.sibling;v.sibling=null,v=A}while(v!==null)}}D=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:as(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,D=p;break e}D=s.return}}var f=t.current;for(D=f;D!==null;){o=D;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,D=g;else e:for(o=f;D!==null;){if(a=D,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:_l(9,a)}}catch(N){ce(a,a.return,N)}if(a===o){D=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,D=E;break e}D=a.return}}if(Q=i,zn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(fl,t)}catch{}r=!0}return r}finally{J=n,yt.transition=e}}return!1}function jp(t,e,n){e=ui(n,e),e=nv(t,e,1),t=kn(t,e,1),e=Ge(),t!==null&&(Qs(t,1,e),rt(t,e))}function ce(t,e,n){if(t.tag===3)jp(t,t,n);else for(;e!==null;){if(e.tag===3){jp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){t=ui(n,t),t=rv(e,t,1),e=kn(e,t,1),t=Ge(),e!==null&&(Qs(e,1,t),rt(e,t));break}}e=e.return}}function K_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ge(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(xe&n)===n&&(we===4||we===3&&(xe&130023424)===xe&&500>de()-fd?sr(t,0):dd|=n),rt(t,e)}function Iv(t,e){e===0&&((t.mode&1)===0?e=1:(e=xo,xo<<=1,(xo&130023424)===0&&(xo=4194304)));var n=Ge();t=Zt(t,e),t!==null&&(Qs(t,e,n),rt(t,n))}function G_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Iv(t,n)}function Q_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Iv(t,n)}var Tv;Tv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)et=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return et=!1,$_(t,e,n);et=(t.flags&131072)!==0}else et=!1,ie&&(e.flags&1048576)!==0&&Ny(e,Ra,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;oa(t,e),t=e.pendingProps;var i=si(e,ze.current);Xr(e,n),i=od(null,e,r,t,i,n);var s=ad();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,Aa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,td(e),i.updater=wl,e.stateNode=i,i._reactInternals=e,$c(e,r,t,n),e=Fc(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&Gh(e),je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(oa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=X_(r),t=_t(r,t),i){case 0:e=bc(null,e,r,t,n);break e;case 1:e=Op(null,e,r,t,n);break e;case 11:e=xp(null,e,r,t,n);break e;case 14:e=Pp(null,e,r,_t(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),bc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),Op(t,e,r,i,n);case 3:e:{if(av(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,xy(t,e),Oa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ui(Error(I(423)),e),e=Lp(t,e,r,n,i);break e}else if(r!==i){i=ui(Error(I(424)),e),e=Lp(t,e,r,n,i);break e}else for(ot=Tn(e.stateNode.containerInfo.firstChild),at=e,ie=!0,It=null,n=My(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oi(),r===i){e=en(t,e,n);break e}je(t,e,r,n)}e=e.child}return e;case 5:return $y(e),t===null&&Oc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ac(r,i)?o=null:s!==null&&Ac(r,s)&&(e.flags|=32),ov(t,e),je(t,e,o,n),e.child;case 6:return t===null&&Oc(e),null;case 13:return lv(t,e,n);case 4:return nd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ai(e,null,r,n):je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),xp(t,e,r,i,n);case 7:return je(t,e,e.pendingProps,n),e.child;case 8:return je(t,e,e.pendingProps.children,n),e.child;case 12:return je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(xa,r._currentValue),r._currentValue=o,s!==null)if(Ct(s.value,o)){if(s.children===i.children&&!tt.current){e=en(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Qt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xr(e,n),i=vt(i),r=r(i),e.flags|=1,je(t,e,r,n),e.child;case 14:return r=e.type,i=_t(r,e.pendingProps),i=_t(r.type,i),Pp(t,e,r,i,n);case 15:return iv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),oa(t,e),e.tag=1,nt(r)?(t=!0,Aa(e)):t=!1,Xr(e,n),Oy(e,r,i),$c(e,r,i,n),Fc(null,e,r,!0,t,n);case 19:return uv(t,e,n);case 22:return sv(t,e,n)}throw Error(I(156,e.tag))};function kv(t,e){return Xg(t,e)}function Y_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(t,e,n,r){return new Y_(t,e,n,r)}function yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X_(t){if(typeof t=="function")return yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$h)return 11;if(t===Uh)return 14}return 2}function An(t,e){var n=t.alternate;return n===null?(n=gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ua(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Or:return or(n.children,i,s,e);case Mh:o=8,i|=8;break;case oc:return t=gt(12,n,e,i|2),t.elementType=oc,t.lanes=s,t;case ac:return t=gt(13,n,e,i),t.elementType=ac,t.lanes=s,t;case lc:return t=gt(19,n,e,i),t.elementType=lc,t.lanes=s,t;case Lg:return Il(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pg:o=10;break e;case Og:o=9;break e;case $h:o=11;break e;case Uh:o=14;break e;case hn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function or(t,e,n,r){return t=gt(7,t,r,e),t.lanes=n,t}function Il(t,e,n,r){return t=gt(22,t,r,e),t.elementType=Lg,t.lanes=n,t.stateNode={isHidden:!1},t}function Lu(t,e,n){return t=gt(6,t,null,e),t.lanes=n,t}function Mu(t,e,n){return e=gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function J_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mu(0),this.expirationTimes=mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vd(t,e,n,r,i,s,o,a,l){return t=new J_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},td(s),t}function Z_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Cv(t){if(!t)return $n;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(nt(n))return ky(t,n,e)}return e}function Nv(t,e,n,r,i,s,o,a,l){return t=vd(n,r,!0,t,i,s,o,a,l),t.context=Cv(null),n=t.current,r=Ge(),i=Nn(n),s=Qt(r,i),s.callback=e!=null?e:null,kn(n,s,i),t.current.lanes=i,Qs(t,i,r),rt(t,r),t}function Tl(t,e,n,r){var i=e.current,s=Ge(),o=Nn(i);return n=Cv(n),e.context===null?e.context=n:e.pendingContext=n,e=Qt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kn(i,e,o),t!==null&&(kt(t,i,o,s),ra(t,i,o)),o}function Ba(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wd(t,e){Hp(t,e),(t=t.alternate)&&Hp(t,e)}function eS(){return null}var Av=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ed(t){this._internalRoot=t}kl.prototype.render=Ed.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Tl(t,e,null,null)};kl.prototype.unmount=Ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pr(function(){Tl(null,t,null,null)}),e[Jt]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=iy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fn.length&&e!==0&&e<fn[n].priority;n++);fn.splice(n,0,t),n===0&&oy(t)}};function _d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wp(){}function tS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ba(o);s.call(u)}}var o=Nv(e,r,t,0,null,!1,!1,"",Wp);return t._reactRootContainer=o,t[Jt]=o.current,Ts(t.nodeType===8?t.parentNode:t),pr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ba(l);a.call(u)}}var l=vd(t,0,!1,null,null,!1,!1,"",Wp);return t._reactRootContainer=l,t[Jt]=l.current,Ts(t.nodeType===8?t.parentNode:t),pr(function(){Tl(e,l,n,r)}),l}function Nl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ba(o);a.call(l)}}Tl(e,o,t,i)}else o=tS(n,e,t,i,r);return Ba(o)}ny=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gi(e.pendingLanes);n!==0&&(Vh(e,n|1),rt(e,de()),(Q&6)===0&&(ci=de()+500,zn()))}break;case 13:pr(function(){var r=Zt(t,1);if(r!==null){var i=Ge();kt(r,t,1,i)}}),wd(t,1)}};Bh=function(t){if(t.tag===13){var e=Zt(t,134217728);if(e!==null){var n=Ge();kt(e,t,134217728,n)}wd(t,134217728)}};ry=function(t){if(t.tag===13){var e=Nn(t),n=Zt(t,e);if(n!==null){var r=Ge();kt(n,t,e,r)}wd(t,e)}};iy=function(){return J};sy=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};vc=function(t,e,n){switch(e){case"input":if(hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=yl(r);if(!i)throw Error(I(90));$g(r),hc(r,i)}}}break;case"textarea":bg(t,n);break;case"select":e=n.value,e!=null&&Kr(t,!!n.multiple,e,!1)}};Wg=pd;qg=pr;var nS={usingClientEntryPoint:!1,Events:[Xs,Ur,yl,jg,Hg,pd]},Hi={findFiberByHostInstance:Jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rS={bundleType:Hi.bundleType,version:Hi.version,rendererPackageName:Hi.rendererPackageName,rendererConfig:Hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qg(t),t===null?null:t.stateNode},findFiberByHostInstance:Hi.findFiberByHostInstance||eS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zo.isDisabled&&zo.supportsFiber)try{fl=zo.inject(rS),Pt=zo}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nS;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_d(e))throw Error(I(200));return Z_(t,e,null,n)};ct.createRoot=function(t,e){if(!_d(t))throw Error(I(299));var n=!1,r="",i=Av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vd(t,1,!1,null,null,n,!1,r,i),t[Jt]=e.current,Ts(t.nodeType===8?t.parentNode:t),new Ed(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Qg(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return pr(t)};ct.hydrate=function(t,e,n){if(!Cl(e))throw Error(I(200));return Nl(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!_d(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Av;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Nv(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Jt]=e.current,Ts(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kl(e)};ct.render=function(t,e,n){if(!Cl(e))throw Error(I(200));return Nl(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!Cl(t))throw Error(I(40));return t._reactRootContainer?(pr(function(){Nl(null,null,t,!1,function(){t._reactRootContainer=null,t[Jt]=null})}),!0):!1};ct.unstable_batchedUpdates=pd;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cl(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Nl(t,e,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ct})(Ng);var qp=Ng.exports;ic.createRoot=qp.createRoot,ic.hydrateRoot=qp.hydrateRoot;function za(){return za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},za.apply(this,arguments)}var tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tr||(tr={}));var Kp=function(t){return t},Gp="beforeunload",iS="popstate";function sS(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var S=r.location,k=S.pathname,j=S.search,$=S.hash,oe=i.state||{};return[oe.idx,Kp({pathname:k,search:j,hash:$,state:oe.usr||null,key:oe.key||"default"})]}var o=null;function a(){if(o)m.call(o),o=null;else{var S=tr.Pop,k=s(),j=k[0],$=k[1];if(m.length){if(j!=null){var oe=c-j;oe&&(o={action:S,location:$,retry:function(){N(oe*-1)}},N(oe))}}else f(S)}}r.addEventListener(iS,a);var l=tr.Pop,u=s(),c=u[0],h=u[1],d=Yp(),m=Yp();c==null&&(c=0,i.replaceState(za({},i.state,{idx:c}),""));function y(S){return typeof S=="string"?S:Xc(S)}function v(S,k){return k===void 0&&(k=null),Kp(za({pathname:h.pathname,hash:"",search:""},typeof S=="string"?Cr(S):S,{state:k,key:oS()}))}function A(S,k){return[{usr:S.state,key:S.key,idx:k},y(S)]}function p(S,k,j){return!m.length||(m.call({action:S,location:k,retry:j}),!1)}function f(S){l=S;var k=s();c=k[0],h=k[1],d.call({action:l,location:h})}function g(S,k){var j=tr.Push,$=v(S,k);function oe(){g(S,k)}if(p(j,$,oe)){var dt=A($,c+1),Ft=dt[0],Wn=dt[1];try{i.pushState(Ft,"",Wn)}catch{r.location.assign(Wn)}f(j)}}function E(S,k){var j=tr.Replace,$=v(S,k);function oe(){E(S,k)}if(p(j,$,oe)){var dt=A($,c),Ft=dt[0],Wn=dt[1];i.replaceState(Ft,"",Wn),f(j)}}function N(S){i.go(S)}var x={get action(){return l},get location(){return h},createHref:y,push:g,replace:E,go:N,back:function(){N(-1)},forward:function(){N(1)},listen:function(k){return d.push(k)},block:function(k){var j=m.push(k);return m.length===1&&r.addEventListener(Gp,Qp),function(){j(),m.length||r.removeEventListener(Gp,Qp)}}};return x}function Qp(t){t.preventDefault(),t.returnValue=""}function Yp(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function oS(){return Math.random().toString(36).substr(2,8)}function Xc(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Cr(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Sd=C.exports.createContext(null),Id=C.exports.createContext(null),Zs=C.exports.createContext({outlet:null,matches:[]});function Nt(t,e){if(!t)throw new Error(e)}function aS(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Cr(e):e,i=xv(r.pathname||"/",n);if(i==null)return null;let s=Dv(t);lS(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=yS(s[a],i);return o}function Dv(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Nt(!1),o.relativePath=o.relativePath.slice(r.length));let a=Dn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Nt(!1),Dv(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:mS(a,i.index),routesMeta:l})}),e}function lS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uS=/^:\w+$/,cS=3,hS=2,dS=1,fS=10,pS=-2,Xp=t=>t==="*";function mS(t,e){let n=t.split("/"),r=n.length;return n.some(Xp)&&(r+=pS),e&&(r+=hS),n.filter(i=>!Xp(i)).reduce((i,s)=>i+(uS.test(s)?cS:s===""?dS:fS),r)}function gS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function yS(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=vS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Dn([i,c.pathname]),pathnameBase:Pv(Dn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Dn([i,c.pathnameBase]))}return s}function vS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=ES(a[h]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function wS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function ES(t,e){try{return decodeURIComponent(t)}catch{return t}}function _S(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Cr(t):t;return{pathname:n?n.startsWith("/")?n:SS(n,e):e,search:TS(r),hash:kS(i)}}function SS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rv(t,e,n){let r=typeof t=="string"?Cr(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=_S(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function IS(t){return t===""||t.pathname===""?"/":typeof t=="string"?Cr(t).pathname:t.pathname}function xv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const Dn=t=>t.join("/").replace(/\/\/+/g,"/"),Pv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),TS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function CS(t){Ti()||Nt(!1);let{basename:e,navigator:n}=C.exports.useContext(Sd),{hash:r,pathname:i,search:s}=Td(t),o=i;if(e!=="/"){let a=IS(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):Dn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function Ti(){return C.exports.useContext(Id)!=null}function ki(){return Ti()||Nt(!1),C.exports.useContext(Id).location}function Al(){Ti()||Nt(!1);let{basename:t,navigator:e}=C.exports.useContext(Sd),{matches:n}=C.exports.useContext(Zs),{pathname:r}=ki(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=C.exports.useRef(!1);return C.exports.useEffect(()=>{s.current=!0}),C.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Rv(a,JSON.parse(i),r);t!=="/"&&(u.pathname=Dn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}function NS(){let{matches:t}=C.exports.useContext(Zs),e=t[t.length-1];return e?e.params:{}}function Td(t){let{matches:e}=C.exports.useContext(Zs),{pathname:n}=ki(),r=JSON.stringify(e.map(i=>i.pathnameBase));return C.exports.useMemo(()=>Rv(t,JSON.parse(r),n),[t,r,n])}function AS(t,e){Ti()||Nt(!1);let{matches:n}=C.exports.useContext(Zs),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=ki(),a;if(e){var l;let d=typeof e=="string"?Cr(e):e;s==="/"||((l=d.pathname)==null?void 0:l.startsWith(s))||Nt(!1),a=d}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",h=aS(t,{pathname:c});return DS(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:Dn([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:Dn([s,d.pathnameBase])})),n)}function DS(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>C.exports.createElement(Zs.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function jo(t){let{to:e,replace:n,state:r}=t;Ti()||Nt(!1);let i=Al();return C.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function Bt(t){Nt(!1)}function RS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:s,static:o=!1}=t;Ti()&&Nt(!1);let a=Pv(e),l=C.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Cr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,y=C.exports.useMemo(()=>{let v=xv(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:m}},[a,u,c,h,d,m]);return y==null?null:C.exports.createElement(Sd.Provider,{value:l},C.exports.createElement(Id.Provider,{children:n,value:{location:y,navigationType:i}}))}function xS(t){let{children:e,location:n}=t;return AS(Jc(e),n)}function Jc(t){let e=[];return C.exports.Children.forEach(t,n=>{if(!C.exports.isValidElement(n))return;if(n.type===C.exports.Fragment){e.push.apply(e,Jc(n.props.children));return}n.type!==Bt&&Nt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Jc(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ja.apply(this,arguments)}function Ov(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const PS=["onClick","reloadDocument","replace","state","target","to"],OS=["aria-current","caseSensitive","className","end","style","to","children"];function LS(t){let{basename:e,children:n,window:r}=t,i=C.exports.useRef();i.current==null&&(i.current=sS({window:r}));let s=i.current,[o,a]=C.exports.useState({action:s.action,location:s.location});return C.exports.useLayoutEffect(()=>s.listen(a),[s]),C.exports.createElement(RS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function MS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Rn=C.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=Ov(e,PS),c=CS(l),h=$S(l,{replace:s,state:o,target:a});function d(m){r&&r(m),!m.defaultPrevented&&!i&&h(m)}return C.exports.createElement("a",ja({},u,{href:c,onClick:d,ref:n,target:a}))}),Gn=C.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=Ov(e,OS),h=ki(),d=Td(l),m=h.pathname,y=d.pathname;i||(m=m.toLowerCase(),y=y.toLowerCase());let v=m===y||!o&&m.startsWith(y)&&m.charAt(y.length)==="/",A=v?r:void 0,p;typeof s=="function"?p=s({isActive:v}):p=[s,v?"active":null].filter(Boolean).join(" ");let f=typeof a=="function"?a({isActive:v}):a;return C.exports.createElement(Rn,ja({},c,{"aria-current":A,className:p,ref:n,style:f,to:l}),typeof u=="function"?u({isActive:v}):u)});function $S(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=Al(),o=ki(),a=Td(t);return C.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!MS(l)){l.preventDefault();let u=!!r||Xc(o)===Xc(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}var Dl={exports:{}},Rl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var US=C.exports,bS=Symbol.for("react.element"),FS=Symbol.for("react.fragment"),VS=Object.prototype.hasOwnProperty,BS=US.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zS={key:!0,ref:!0,__self:!0,__source:!0};function Lv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)VS.call(e,r)&&!zS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bS,type:t,key:s,ref:o,props:i,_owner:BS.current}}Rl.Fragment=FS;Rl.jsx=Lv;Rl.jsxs=Lv;(function(t){t.exports=Rl})(Dl);const Ha=Dl.exports.Fragment,w=Dl.exports.jsx,F=Dl.exports.jsxs,Mv=C.exports.createContext();function jS({children:t,value:e}){return w(Mv.Provider,{value:e,children:t})}function $v(){return C.exports.useContext(Mv)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},HS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},WS=function(t){const e=Uv(t);return bv.encodeByteArray(e,!0)},Fv=function(t){return WS(t).replace(/\./g,"")},qS=function(t){try{return bv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Bv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GS(){return Ce().indexOf("Electron/")>=0}function jv(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QS(){return Ce().indexOf("MSAppHost/")>=0}function YS(){return typeof indexedDB=="object"}function XS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JS,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ZS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ln(i,a,r)}}function ZS(t,e){return t.replace(eI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const eI=/\{\$([^}]+)}/g;function tI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jp(s)&&Jp(o)){if(!Wa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Xi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nI(t,e){const n=new rI(t,e);return n.subscribe.bind(n)}class rI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$u),i.error===void 0&&(i.error=$u),i.complete===void 0&&(i.complete=$u);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $u(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return t&&t._delegate?t._delegate:t}class mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new KS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aI(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oI(t){return t===Xn?void 0:t}function aI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const uI={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},cI=Y.INFO,hI={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},dI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kd{constructor(e){this.name=e,this._logLevel=cI,this._logHandler=dI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const fI=(t,e)=>e.some(n=>t instanceof n);let Zp,em;function pI(){return Zp||(Zp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mI(){return em||(em=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hv=new WeakMap,Zc=new WeakMap,Wv=new WeakMap,Uu=new WeakMap,Cd=new WeakMap;function gI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hv.set(n,t)}).catch(()=>{}),Cd.set(e,t),e}function yI(t){if(Zc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zc.set(t,e)}let eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vI(t){eh=t(eh)}function wI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bu(this),e,...n);return Wv.set(r,e.sort?e.sort():[e]),xn(r)}:mI().includes(t)?function(...e){return t.apply(bu(this),e),xn(Hv.get(this))}:function(...e){return xn(t.apply(bu(this),e))}}function EI(t){return typeof t=="function"?wI(t):(t instanceof IDBTransaction&&yI(t),fI(t,pI())?new Proxy(t,eh):t)}function xn(t){if(t instanceof IDBRequest)return gI(t);if(Uu.has(t))return Uu.get(t);const e=EI(t);return e!==t&&(Uu.set(t,e),Cd.set(e,t)),e}const bu=t=>Cd.get(t);function _I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xn(o.result),l.oldVersion,l.newVersion,xn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const SI=["get","getKey","getAll","getAllKeys","count"],II=["put","add","delete","clear"],Fu=new Map;function tm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fu.get(e))return Fu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=II.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Fu.set(e,s),s}vI(t=>({...t,get:(e,n,r)=>tm(e,n)||t.get(e,n,r),has:(e,n)=>!!tm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const th="@firebase/app",nm="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new kd("@firebase/app"),CI="@firebase/app-compat",NI="@firebase/analytics-compat",AI="@firebase/analytics",DI="@firebase/app-check-compat",RI="@firebase/app-check",xI="@firebase/auth",PI="@firebase/auth-compat",OI="@firebase/database",LI="@firebase/database-compat",MI="@firebase/functions",$I="@firebase/functions-compat",UI="@firebase/installations",bI="@firebase/installations-compat",FI="@firebase/messaging",VI="@firebase/messaging-compat",BI="@firebase/performance",zI="@firebase/performance-compat",jI="@firebase/remote-config",HI="@firebase/remote-config-compat",WI="@firebase/storage",qI="@firebase/storage-compat",KI="@firebase/firestore",GI="@firebase/firestore-compat",QI="firebase",YI="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv="[DEFAULT]",XI={[th]:"fire-core",[CI]:"fire-core-compat",[AI]:"fire-analytics",[NI]:"fire-analytics-compat",[RI]:"fire-app-check",[DI]:"fire-app-check-compat",[xI]:"fire-auth",[PI]:"fire-auth-compat",[OI]:"fire-rtdb",[LI]:"fire-rtdb-compat",[MI]:"fire-fn",[$I]:"fire-fn-compat",[UI]:"fire-iid",[bI]:"fire-iid-compat",[FI]:"fire-fcm",[VI]:"fire-fcm-compat",[BI]:"fire-perf",[zI]:"fire-perf-compat",[jI]:"fire-rc",[HI]:"fire-rc-compat",[WI]:"fire-gcs",[qI]:"fire-gcs-compat",[KI]:"fire-fst",[GI]:"fire-fst-compat","fire-js":"fire-js",[QI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Map,nh=new Map;function JI(t,e){try{t.container.addComponent(e)}catch(n){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hi(t){const e=t.name;if(nh.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;nh.set(e,t);for(const n of qa.values())JI(n,t);return!0}function Nd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yr=new eo("app","Firebase",ZI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=YI;function tT(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:qv,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw yr.create("bad-app-name",{appName:String(r)});const i=qa.get(r);if(i){if(Wa(t,i.options)&&Wa(n,i.config))return i;throw yr.create("duplicate-app",{appName:r})}const s=new lI(r);for(const a of nh.values())s.addComponent(a);const o=new eT(t,n,s);return qa.set(r,o),o}function Kv(t=qv){const e=qa.get(t);if(!e)throw yr.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let i=(r=XI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(a.join(" "));return}hi(new mr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="firebase-heartbeat-database",rT=1,Os="firebase-heartbeat-store";let Vu=null;function Gv(){return Vu||(Vu=_I(nT,rT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Os)}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),Vu}async function iT(t){var e;try{return(await Gv()).transaction(Os).objectStore(Os).get(Qv(t))}catch(n){if(n instanceof ln)gr.warn(n.message);else{const r=yr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});gr.warn(r.message)}}}async function rm(t,e){var n;try{const i=(await Gv()).transaction(Os,"readwrite");return await i.objectStore(Os).put(e,Qv(t)),i.done}catch(r){if(r instanceof ln)gr.warn(r.message);else{const i=yr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});gr.warn(i.message)}}}function Qv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=1024,oT=30*24*60*60*1e3;class aT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=im();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=oT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=im(),{heartbeatsToSend:n,unsentEntries:r}=lT(this._heartbeatsCache.heartbeats),i=Fv(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function im(){return new Date().toISOString().substring(0,10)}function lT(t,e=sT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YS()?XS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sm(t){return Fv(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t){hi(new mr("platform-logger",e=>new TI(e),"PRIVATE")),hi(new mr("heartbeat",e=>new aT(e),"PRIVATE")),Pn(th,nm,t),Pn(th,nm,"esm2017"),Pn("fire-js","")}cT("");function Ad(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Yv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hT=Yv,Xv=new eo("auth","Firebase",Yv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=new kd("@firebase/auth");function ca(t,...e){om.logLevel<=Y.ERROR&&om.error(`Auth (${no}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,...e){throw Dd(t,...e)}function Lt(t,...e){return Dd(t,...e)}function dT(t,e,n){const r=Object.assign(Object.assign({},hT()),{[e]:n});return new eo("auth","Firebase",r).create(e,{appName:t.name})}function Dd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xv.create(t,...e)}function U(t,e,...n){if(!t)throw Dd(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ca(e),new Error(e)}function tn(t,e){t||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=new Map;function Kt(t){tn(t instanceof Function,"Expected a class definition");let e=am.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,am.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t,e){const n=Nd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wa(s,e!=null?e:{}))return i;At(i,"already-initialized")}return n.initialize({options:e})}function pT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mT(){return lm()==="http:"||lm()==="https:"}function lm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mT()||Bv()||"connection"in navigator)?navigator.onLine:!0}function yT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Vv()||zv()}get(){return gT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=new ro(3e4,6e4);function io(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ci(t,e,n,r,i={}){return Zv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=to(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Jv.fetch()(e0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Zv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vT),e);try{const i=new ET(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ho(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ho(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ho(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dT(t,c,u);At(t,c)}}catch(i){if(i instanceof ln)throw i;At(t,"network-request-failed")}}async function so(t,e,n,r,i={}){const s=await Ci(t,e,n,r,i);return"mfaPendingCredential"in s&&At(t,"multi-factor-auth-required",{_serverResponse:s}),s}function e0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rd(t.config,i):`${t.config.apiScheme}://${i}`}class ET{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),wT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Lt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T(t,e){return Ci(t,"POST","/v1/accounts:delete",e)}async function ST(t,e){return Ci(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IT(t,e=!1){const n=Qe(t),r=await n.getIdToken(e),i=xd(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:cs(Bu(i.auth_time)),issuedAtTime:cs(Bu(i.iat)),expirationTime:cs(Bu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bu(t){return Number(t)*1e3}function xd(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return ca("JWT malformed, contained fewer than 3 sections"),null;try{const s=qS(r);return s?JSON.parse(s):(ca("Failed to decode base64 JWT payload"),null)}catch(s){return ca("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function TT(t){const e=xd(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&kT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cs(this.lastLoginAt),this.creationTime=cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka(t){var e;const n=t.auth,r=await t.getIdToken(),i=await di(t,ST(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?DT(s.providerUserInfo):[],a=AT(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new t0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function NT(t){const e=Qe(t);await Ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function DT(t){return t.map(e=>{var{providerId:n}=e,r=Ad(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(t,e){const n=await Zv(t,{},async()=>{const r=to({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=e0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ls;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ar{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new t0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IT(this,e)}reload(){return NT(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ar(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await di(this,_T(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:N,providerData:x,stsTokenManager:S}=n;U(g&&S,e,"internal-error");const k=Ls.fromJSON(this.name,S);U(typeof g=="string",e,"internal-error"),cn(h,e.name),cn(d,e.name),U(typeof E=="boolean",e,"internal-error"),U(typeof N=="boolean",e,"internal-error"),cn(m,e.name),cn(y,e.name),cn(v,e.name),cn(A,e.name),cn(p,e.name),cn(f,e.name);const j=new ar({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:N,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:k,createdAt:p,lastLoginAt:f});return x&&Array.isArray(x)&&(j.providerData=x.map($=>Object.assign({},$))),A&&(j._redirectEventId=A),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ls;i.updateFromServerResponse(n);const s=new ar({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ka(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}n0.type="NONE";const um=n0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t,e,n){return`firebase:${t}:${e}:${n}`}class Zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ha(this.userKey,i.apiKey,s),this.fullPersistenceKey=ha("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ar._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zr(Kt(um),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Kt(um);const o=ha(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ar._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Zr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Zr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(s0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(a0(e))return"Blackberry";if(l0(e))return"Webos";if(Pd(e))return"Safari";if((e.includes("chrome/")||i0(e))&&!e.includes("edge/"))return"Chrome";if(o0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function r0(t=Ce()){return/firefox\//i.test(t)}function Pd(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function i0(t=Ce()){return/crios\//i.test(t)}function s0(t=Ce()){return/iemobile/i.test(t)}function o0(t=Ce()){return/android/i.test(t)}function a0(t=Ce()){return/blackberry/i.test(t)}function l0(t=Ce()){return/webos/i.test(t)}function xl(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xT(t=Ce()){var e;return xl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PT(){return jv()&&document.documentMode===10}function u0(t=Ce()){return xl(t)||o0(t)||l0(t)||a0(t)||/windows phone/i.test(t)||s0(t)}function OT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t,e=[]){let n;switch(t){case"Browser":n=cm(Ce());break;case"Worker":n=`${cm(Ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${no}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hm(this),this.idTokenSubscription=new hm(this),this.beforeStateQueue=new LT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ka(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Qe(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=c0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Pl(t){return Qe(t)}class hm{constructor(e){this.auth=e,this.observer=null,this.addObserver=nI(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}async function $T(t,e){return Ci(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(t,e){return so(t,"POST","/v1/accounts:signInWithPassword",io(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(t,e){return so(t,"POST","/v1/accounts:signInWithEmailLink",io(t,e))}async function FT(t,e){return so(t,"POST","/v1/accounts:signInWithEmailLink",io(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Od{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ms(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ms(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return UT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bT(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return $T(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return FT(e,{idToken:n,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(t,e){return so(t,"POST","/v1/accounts:signInWithIdp",io(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="http://localhost";class vr extends Od{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ad(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ei(e,n)}buildRequest(){const e={requestUri:VT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=to(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zT(t){const e=Yi(Xi(t)).link,n=e?Yi(Xi(e)).deep_link_id:null,r=Yi(Xi(t)).deep_link_id;return(r?Yi(Xi(r)).link:null)||r||n||e||t}class Ld{constructor(e){var n,r,i,s,o,a;const l=Yi(Xi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=BT((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zT(e);try{return new Ld(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.providerId=Ni.PROVIDER_ID}static credential(e,n){return Ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ld.parseLink(n);return U(r,"argument-error"),Ms._fromEmailAndCode(e,r.code,r.tenantId)}}Ni.PROVIDER_ID="password";Ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends h0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends oo{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends oo{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends oo{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e){return so(t,"POST","/v1/accounts:signUp",io(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ar._fromIdTokenResponse(e,r,i),o=dm(r);return new wr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dm(r);return new wr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ga.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ga(e,n,r,i)}}function d0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ga._fromErrorAndOperation(t,s,e,r):s})}async function HT(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await di(t,d0(i,s,e,t),n);U(o.idToken,i,"internal-error");const a=xd(o.idToken);U(a,i,"internal-error");const{sub:l}=a;return U(t.uid===l,i,"user-mismatch"),wr._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&At(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(t,e,n=!1){const r="signIn",i=await d0(t,r,e),s=await wr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function qT(t,e){return f0(Pl(t),e)}async function KT(t,e,n){const r=Pl(t),i=await jT(r,{returnSecureToken:!0,email:e,password:n}),s=await wr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function GT(t,e,n){return qT(Qe(t),Ni.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t,e){return Ci(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Qe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await di(r,QT(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function XT(t,e,n,r){return Qe(t).onAuthStateChanged(e,n,r)}function JT(t){return Qe(t).signOut()}const Qa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qa,"1"),this.storage.removeItem(Qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(){const t=Ce();return Pd(t)||xl(t)}const ek=1e3,tk=10;class m0 extends p0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ZT()&&OT(),this.fallbackToPolling=u0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);PT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}m0.type="LOCAL";const nk=m0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0 extends p0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}g0.type="SESSION";const y0=g0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ol(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await rk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ol.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Md("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function sk(t){Mt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function ok(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ak(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lk(){return v0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="firebaseLocalStorageDb",uk=1,Ya="firebaseLocalStorage",E0="fbase_key";class ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ll(t,e){return t.transaction([Ya],e?"readwrite":"readonly").objectStore(Ya)}function ck(){const t=indexedDB.deleteDatabase(w0);return new ao(t).toPromise()}function ih(){const t=indexedDB.open(w0,uk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ya,{keyPath:E0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ya)?e(r):(r.close(),await ck(),e(await ih()))})})}async function fm(t,e,n){const r=Ll(t,!0).put({[E0]:e,value:n});return new ao(r).toPromise()}async function hk(t,e){const n=Ll(t,!1).get(e),r=await new ao(n).toPromise();return r===void 0?null:r.value}function pm(t,e){const n=Ll(t,!0).delete(e);return new ao(n).toPromise()}const dk=800,fk=3;class _0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return v0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ol._getInstance(lk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ok(),!this.activeServiceWorker)return;this.sender=new ik(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ak()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ih();return await fm(e,Qa,"1"),await pm(e,Qa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ll(i,!1).getAll();return new ao(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_0.type="LOCAL";const pk=_0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Lt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mk().appendChild(r)})}function yk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ro(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(t,e){return e?Kt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d extends Od{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wk(t){return f0(t.auth,new $d(t),t.bypassAuthState)}function Ek(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),WT(n,new $d(t),t.bypassAuthState)}async function _k(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),HT(n,new $d(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wk;case"linkViaPopup":case"linkViaRedirect":return _k;case"reauthViaPopup":case"reauthViaRedirect":return Ek;default:At(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=new ro(2e3,1e4);class Hr extends S0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Sk.get())};e()}}Hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="pendingRedirect",da=new Map;class Tk extends S0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=da.get(this.auth._key());if(!e){try{const r=await kk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}da.set(this.auth._key(),e)}return this.bypassAuthState||da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kk(t,e){const n=Ak(e),r=Nk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ck(t,e){da.set(t._key(),e)}function Nk(t){return Kt(t._redirectPersistence)}function Ak(t){return ha(Ik,t.config.apiKey,t.name)}async function Dk(t,e,n=!1){const r=Pl(t),i=vk(r,e),o=await new Tk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=10*60*1e3;class xk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!I0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rk&&this.cachedEventUids.clear(),this.cachedEventUids.has(mm(e))}saveEventToCache(e){this.cachedEventUids.add(mm(e)),this.lastProcessedEventTime=Date.now()}}function mm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function I0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ok(t,e={}){return Ci(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mk=/^https?/;async function $k(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ok(t);for(const n of e)try{if(Uk(n))return}catch{}At(t,"unauthorized-domain")}function Uk(t){const e=rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Mk.test(n))return!1;if(Lk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=new ro(3e4,6e4);function gm(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Fk(t){return new Promise((e,n)=>{var r,i,s;function o(){gm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gm(),n(Lt(t,"network-request-failed"))},timeout:bk.get()})}if(!((i=(r=Mt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Mt().gapi)===null||s===void 0)&&s.load)o();else{const a=yk("iframefcb");return Mt()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},gk(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fa=null,e})}let fa=null;function Vk(t){return fa=fa||Fk(t),fa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=new ro(5e3,15e3),zk="__/auth/iframe",jk="emulator/auth/iframe",Hk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qk(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rd(e,jk):`https://${t.config.authDomain}/${zk}`,r={apiKey:e.apiKey,appName:t.name,v:no},i=Wk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${to(r).slice(1)}`}async function Kk(t){const e=await Vk(t),n=Mt().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:qk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Mt().setTimeout(()=>{s(o)},Bk.get());function l(){Mt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qk=500,Yk=600,Xk="_blank",Jk="http://localhost";class ym{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zk(t,e,n,r=Qk,i=Yk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Gk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ce().toLowerCase();n&&(a=i0(u)?Xk:n),r0(u)&&(e=e||Jk,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(xT(u)&&a!=="_self")return eC(e||"",a),new ym(null);const h=window.open(e||"",a,c);U(h,t,"popup-blocked");try{h.focus()}catch{}return new ym(h)}function eC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC="__/auth/handler",nC="emulator/auth/handler";function vm(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:no,eventId:i};if(e instanceof h0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof oo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${rC(t)}?${to(a).slice(1)}`}function rC({config:t}){return t.emulator?Rd(t,nC):`https://${t.authDomain}/${tC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="webStorageSupport";class iC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=y0,this._completeRedirectFn=Dk,this._overrideRedirectResult=Ck}async _openPopup(e,n,r,i){var s;tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=vm(e,n,r,rh(),i);return Zk(e,o,Md())}async _openRedirect(e,n,r,i){return await this._originValidation(e),sk(vm(e,n,r,rh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Kk(e),r=new xk(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zu,{type:zu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zu];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$k(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return u0()||Pd()||xl()}}const sC=iC;var wm="@firebase/auth",Em="0.20.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lC(t){hi(new mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{U(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:c0(t)},c=new MT(a,l,u);return pT(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hi(new mr("auth-internal",e=>{const n=Pl(e.getProvider("auth").getImmediate());return(r=>new oC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(wm,Em,aC(t)),Pn(wm,Em,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t=Kv()){const e=Nd(t,"auth");return e.isInitialized()?e.getImmediate():fT(t,{popupRedirectResolver:sC,persistence:[pk,nk,y0]})}lC("Browser");var cC="firebase",hC="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(cC,hC,"app");var dC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,Ud=Ud||{},b=dC||self;function Xa(){}function sh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function lo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function fC(t){return Object.prototype.hasOwnProperty.call(t,ju)&&t[ju]||(t[ju]=++pC)}var ju="closure_uid_"+(1e9*Math.random()>>>0),pC=0;function mC(t,e,n){return t.call.apply(t.bind,arguments)}function gC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Pe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=mC:Pe=gC,Pe.apply(null,arguments)}function Wo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function jn(){this.s=this.s,this.o=this.o}var yC=0;jn.prototype.s=!1;jn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),yC!=0)&&fC(this)};jn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},k0=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function vC(t){e:{var e=uN;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function _m(t){return Array.prototype.concat.apply([],arguments)}function bd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ja(t){return/^[\s\xa0]*$/.test(t)}var Sm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function He(t,e){return t.indexOf(e)!=-1}function Hu(t,e){return t<e?-1:t>e?1:0}var We;e:{var Im=b.navigator;if(Im){var Tm=Im.userAgent;if(Tm){We=Tm;break e}}We=""}function Fd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function C0(t){const e={};for(const n in t)e[n]=t[n];return e}var km="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<km.length;s++)n=km[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Vd(t){return Vd[" "](t),t}Vd[" "]=Xa;function wC(t){var e=SC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var EC=He(We,"Opera"),fi=He(We,"Trident")||He(We,"MSIE"),A0=He(We,"Edge"),oh=A0||fi,D0=He(We,"Gecko")&&!(He(We.toLowerCase(),"webkit")&&!He(We,"Edge"))&&!(He(We,"Trident")||He(We,"MSIE"))&&!He(We,"Edge"),_C=He(We.toLowerCase(),"webkit")&&!He(We,"Edge");function R0(){var t=b.document;return t?t.documentMode:void 0}var Za;e:{var Wu="",qu=function(){var t=We;if(D0)return/rv:([^\);]+)(\)|;)/.exec(t);if(A0)return/Edge\/([\d\.]+)/.exec(t);if(fi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_C)return/WebKit\/(\S+)/.exec(t);if(EC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qu&&(Wu=qu?qu[1]:""),fi){var Ku=R0();if(Ku!=null&&Ku>parseFloat(Wu)){Za=String(Ku);break e}}Za=Wu}var SC={};function IC(){return wC(function(){let t=0;const e=Sm(String(Za)).split("."),n=Sm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Hu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Hu(i[2].length==0,s[2].length==0)||Hu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var ah;if(b.document&&fi){var Cm=R0();ah=Cm||parseInt(Za,10)||void 0}else ah=void 0;var TC=ah,kC=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{b.addEventListener("test",Xa,e),b.removeEventListener("test",Xa,e)}catch{}return t}();function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};function $s(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(D0){e:{try{Vd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$s.Z.h.call(this)}}$e($s,Be);var CC={2:"touch",3:"pen",4:"mouse"};$s.prototype.h=function(){$s.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var uo="closure_listenable_"+(1e6*Math.random()|0),NC=0;function AC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++NC,this.ca=this.fa=!1}function Ml(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function $l(t){this.src=t,this.g={},this.h=0}$l.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=uh(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new AC(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function lh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=T0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ml(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function uh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Bd="closure_lm_"+(1e6*Math.random()|0),Gu={};function x0(t,e,n,r,i){if(r&&r.once)return O0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)x0(t,e[s],n,r,i);return null}return n=Hd(n),t&&t[uo]?t.N(e,n,lo(r)?!!r.capture:!!r,i):P0(t,e,n,!1,r,i)}function P0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=lo(i)?!!i.capture:!!i,a=jd(t);if(a||(t[Bd]=a=new $l(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=DC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)kC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(M0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function DC(){function t(n){return e.call(t.src,t.listener,n)}var e=RC;return t}function O0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)O0(t,e[s],n,r,i);return null}return n=Hd(n),t&&t[uo]?t.O(e,n,lo(r)?!!r.capture:!!r,i):P0(t,e,n,!0,r,i)}function L0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)L0(t,e[s],n,r,i);else r=lo(r)?!!r.capture:!!r,n=Hd(n),t&&t[uo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=uh(s,n,r,i),-1<n&&(Ml(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=jd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=uh(e,n,r,i)),(n=-1<t?e[t]:null)&&zd(n))}function zd(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[uo])lh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(M0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jd(e))?(lh(n,t),n.h==0&&(n.src=null,e[Bd]=null)):Ml(t)}}}function M0(t){return t in Gu?Gu[t]:Gu[t]="on"+t}function RC(t,e){if(t.ca)t=!0;else{e=new $s(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&zd(t),t=n.call(r,e)}return t}function jd(t){return t=t[Bd],t instanceof $l?t:null}var Qu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hd(t){return typeof t=="function"?t:(t[Qu]||(t[Qu]=function(e){return t.handleEvent(e)}),t[Qu])}function Ne(){jn.call(this),this.i=new $l(this),this.P=this,this.I=null}$e(Ne,jn);Ne.prototype[uo]=!0;Ne.prototype.removeEventListener=function(t,e,n,r){L0(this,t,e,n,r)};function Oe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var i=e;e=new Be(r,t),N0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=qo(o,r,!0,e)&&i}if(o=e.g=t,i=qo(o,r,!0,e)&&i,i=qo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=qo(o,r,!1,e)&&i}Ne.prototype.M=function(){if(Ne.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ml(n[r]);delete t.g[e],t.h--}}this.I=null};Ne.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ne.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function qo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&lh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Wd=b.JSON.stringify;function xC(){var t=U0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class PC{constructor(){this.h=this.g=null}add(e,n){const r=$0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var $0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new OC,t=>t.reset());class OC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LC(t){b.setTimeout(()=>{throw t},0)}function qd(t,e){ch||MC(),hh||(ch(),hh=!0),U0.add(t,e)}var ch;function MC(){var t=b.Promise.resolve(void 0);ch=function(){t.then($C)}}var hh=!1,U0=new PC;function $C(){for(var t;t=xC();){try{t.h.call(t.g)}catch(n){LC(n)}var e=$0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hh=!1}function Ul(t,e){Ne.call(this),this.h=t||1,this.g=e||b,this.j=Pe(this.kb,this),this.l=Date.now()}$e(Ul,Ne);R=Ul.prototype;R.da=!1;R.S=null;R.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(Kd(this),this.start()))}};R.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Kd(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}R.M=function(){Ul.Z.M.call(this),Kd(this),delete this.g};function Gd(t,e,n){if(typeof t=="function")n&&(t=Pe(t,n));else if(t&&typeof t.handleEvent=="function")t=Pe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:b.setTimeout(t,e||0)}function b0(t){t.g=Gd(()=>{t.g=null,t.i&&(t.i=!1,b0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class UC extends jn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:b0(this)}M(){super.M(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Us(t){jn.call(this),this.h=t,this.g={}}$e(Us,jn);var Nm=[];function F0(t,e,n,r){Array.isArray(n)||(n&&(Nm[0]=n.toString()),n=Nm);for(var i=0;i<n.length;i++){var s=x0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function V0(t){Fd(t.g,function(e,n){this.g.hasOwnProperty(n)&&zd(e)},t),t.g={}}Us.prototype.M=function(){Us.Z.M.call(this),V0(this)};Us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bl(){this.g=!0}bl.prototype.Aa=function(){this.g=!1};function bC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function FC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Wr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BC(t,n)+(r?" "+r:"")})}function VC(t,e){t.info(function(){return"TIMEOUT: "+e})}bl.prototype.info=function(){};function BC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Wd(n)}catch{return e}}var Nr={},Am=null;function Fl(){return Am=Am||new Ne}Nr.Ma="serverreachability";function B0(t){Be.call(this,Nr.Ma,t)}$e(B0,Be);function bs(t){const e=Fl();Oe(e,new B0(e))}Nr.STAT_EVENT="statevent";function z0(t,e){Be.call(this,Nr.STAT_EVENT,t),this.stat=e}$e(z0,Be);function qe(t){const e=Fl();Oe(e,new z0(e,t))}Nr.Na="timingevent";function j0(t,e){Be.call(this,Nr.Na,t),this.size=e}$e(j0,Be);function co(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){t()},e)}var Vl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},H0={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Qd(){}Qd.prototype.h=null;function Dm(t){return t.h||(t.h=t.i())}function W0(){}var ho={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Yd(){Be.call(this,"d")}$e(Yd,Be);function Xd(){Be.call(this,"c")}$e(Xd,Be);var dh;function Bl(){}$e(Bl,Qd);Bl.prototype.g=function(){return new XMLHttpRequest};Bl.prototype.i=function(){return{}};dh=new Bl;function fo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Us(this),this.P=zC,t=oh?125:void 0,this.W=new Ul(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new q0}function q0(){this.i=null,this.g="",this.h=!1}var zC=45e3,fh={},el={};R=fo.prototype;R.setTimeout=function(t){this.P=t};function ph(t,e,n){t.K=1,t.v=jl(nn(e)),t.s=n,t.U=!0,K0(t,null)}function K0(t,e){t.F=Date.now(),po(t),t.A=nn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),ew(n.h,"t",r),t.C=0,n=t.l.H,t.h=new q0,t.g=Ew(t.l,n?e:null,!t.s),0<t.O&&(t.L=new UC(Pe(t.Ia,t,t.g),t.O)),F0(t.V,t.g,"readystatechange",t.gb),e=t.H?C0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),bs(),bC(t.j,t.u,t.A,t.m,t.X,t.s)}R.gb=function(t){t=t.target;const e=this.L;e&&Gt(t)==3?e.l():this.Ia(t)};R.Ia=function(t){try{if(t==this.g)e:{const c=Gt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||oh||this.g&&(this.h.h||this.g.ga()||Om(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?bs(3):bs(2)),zl(this);var n=this.g.ba();this.N=n;t:if(G0(this)){var r=Om(this.g);t="";var i=r.length,s=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nr(this),hs(this);var o="";break t}this.h.i=new b.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,FC(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ja(a)){var u=a;break t}}u=null}if(n=u)Wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mh(this,n);else{this.i=!1,this.o=3,qe(12),nr(this),hs(this);break e}}this.U?(Q0(this,c,o),oh&&this.i&&c==3&&(F0(this.V,this.W,"tick",this.fb),this.W.start())):(Wr(this.j,this.m,o,null),mh(this,o)),c==4&&nr(this),this.i&&!this.I&&(c==4?gw(this.l,this):(this.i=!1,po(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,qe(12)):(this.o=0,qe(13)),nr(this),hs(this)}}}catch{}finally{}};function G0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Q0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=jC(t,n),i==el){e==4&&(t.o=4,qe(14),r=!1),Wr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==fh){t.o=4,qe(15),Wr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Wr(t.j,t.m,i,null),mh(t,i);G0(t)&&i!=el&&i!=fh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,qe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),af(e),e.L=!0,qe(11))):(Wr(t.j,t.m,n,"[Invalid Chunked Response]"),nr(t),hs(t))}R.fb=function(){if(this.g){var t=Gt(this.g),e=this.g.ga();this.C<e.length&&(zl(this),Q0(this,t,e),this.i&&t!=4&&po(this))}};function jC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?el:(n=Number(e.substring(n,r)),isNaN(n)?fh:(r+=1,r+n>e.length?el:(e=e.substr(r,n),t.C=r+n,e)))}R.cancel=function(){this.I=!0,nr(this)};function po(t){t.Y=Date.now()+t.P,Y0(t,t.P)}function Y0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=co(Pe(t.eb,t),e)}function zl(t){t.B&&(b.clearTimeout(t.B),t.B=null)}R.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(VC(this.j,this.A),this.K!=2&&(bs(),qe(17)),nr(this),this.o=2,hs(this)):Y0(this,this.Y-t)};function hs(t){t.l.G==0||t.I||gw(t.l,t)}function nr(t){zl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Kd(t.W),V0(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function mh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||gh(n.i,t))){if(n.I=t.N,!t.J&&gh(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)il(n),ql(n);else break e;of(n),qe(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=co(Pe(n.ab,n),6e3));if(1>=rw(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else rr(n,11)}else if((t.J||n.g==t)&&il(n),!Ja(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(He(y,"spdy")||He(y,"quic")||He(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(ef(s,s.h),s.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,se(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=ww(r,r.H?r.la:null,r.W),o.J){iw(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(zl(a),po(a)),r.g=o}else pw(r);0<n.l.length&&Kl(n)}else u[0]!="stop"&&u[0]!="close"||rr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?rr(n,7):sf(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}bs(4)}catch{}}function HC(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(sh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Jd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(sh(t)||typeof t=="string")k0(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(sh(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=HC(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ai(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ai)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}R=Ai.prototype;R.R=function(){Zd(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};R.T=function(){return Zd(this),this.g.concat()};function Zd(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Er(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Er(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}R.get=function(t,e){return Er(this.h,t)?this.h[t]:e};R.set=function(t,e){Er(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};R.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Er(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var X0=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function WC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _r(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof _r){this.g=e!==void 0?e:t.g,tl(this,t.j),this.s=t.s,nl(this,t.i),rl(this,t.m),this.l=t.l,e=t.h;var n=new Fs;n.i=e.i,e.g&&(n.g=new Ai(e.g),n.h=e.h),Rm(this,n),this.o=t.o}else t&&(n=String(t).match(X0))?(this.g=!!e,tl(this,n[1]||"",!0),this.s=ds(n[2]||""),nl(this,n[3]||"",!0),rl(this,n[4]),this.l=ds(n[5]||"",!0),Rm(this,n[6]||"",!0),this.o=ds(n[7]||"")):(this.g=!!e,this.h=new Fs(null,this.g))}_r.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ji(e,xm,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ji(e,xm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ji(n,n.charAt(0)=="/"?YC:QC,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ji(n,JC)),t.join("")};function nn(t){return new _r(t)}function tl(t,e,n){t.j=n?ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function nl(t,e,n){t.i=n?ds(e,!0):e}function rl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rm(t,e,n){e instanceof Fs?(t.h=e,ZC(t.h,t.g)):(n||(e=Ji(e,XC)),t.h=new Fs(e,t.g))}function se(t,e,n){t.h.set(e,n)}function jl(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qC(t){return t instanceof _r?nn(t):new _r(t,void 0)}function KC(t,e,n,r){var i=new _r(null,void 0);return t&&tl(i,t),e&&nl(i,e),n&&rl(i,n),r&&(i.l=r),i}function ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ji(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,GC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function GC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xm=/[#\/\?@]/g,QC=/[#\?:]/g,YC=/[#\?]/g,XC=/[#\?@]/g,JC=/#/g;function Fs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Hn(t){t.g||(t.g=new Ai,t.h=0,t.i&&WC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=Fs.prototype;R.add=function(t,e){Hn(this),this.i=null,t=Di(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function J0(t,e){Hn(t),e=Di(t,e),Er(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Er(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Zd(t)))}function Z0(t,e){return Hn(t),e=Di(t,e),Er(t.g.h,e)}R.forEach=function(t,e){Hn(this),this.g.forEach(function(n,r){k0(n,function(i){t.call(e,i,r,this)},this)},this)};R.T=function(){Hn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};R.R=function(t){Hn(this);var e=[];if(typeof t=="string")Z0(this,t)&&(e=_m(e,this.g.get(Di(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=_m(e,t[n])}return e};R.set=function(t,e){return Hn(this),this.i=null,t=Di(this,t),Z0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function ew(t,e,n){J0(t,e),0<n.length&&(t.i=null,t.g.set(Di(t,e),bd(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Di(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ZC(t,e){e&&!t.j&&(Hn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(J0(this,r),ew(this,i,n))},t)),t.j=e}var eN=class{constructor(t,e){this.h=t,this.g=e}};function tw(t){this.l=t||tN,b.PerformanceNavigationTiming?(t=b.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(b.g&&b.g.Ea&&b.g.Ea()&&b.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tN=10;function nw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function rw(t){return t.h?1:t.g?t.g.size:0}function gh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ef(t,e){t.g?t.g.add(e):t.h=e}function iw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}tw.prototype.cancel=function(){if(this.i=sw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function sw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return bd(t.i)}function tf(){}tf.prototype.stringify=function(t){return b.JSON.stringify(t,void 0)};tf.prototype.parse=function(t){return b.JSON.parse(t,void 0)};function nN(){this.g=new tf}function rN(t,e,n){const r=n||"";try{Jd(t,function(i,s){let o=i;lo(i)&&(o=Wd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function iN(t,e){const n=new bl;if(b.Image){const r=new Image;r.onload=Wo(Ko,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Wo(Ko,n,r,"TestLoadImage: error",!1,e),r.onabort=Wo(Ko,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Wo(Ko,n,r,"TestLoadImage: timeout",!1,e),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ko(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function mo(t){this.l=t.$b||null,this.j=t.ib||!1}$e(mo,Qd);mo.prototype.g=function(){return new Hl(this.l,this.j)};mo.prototype.i=function(t){return function(){return t}}({});function Hl(t,e){Ne.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=nf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(Hl,Ne);var nf=0;R=Hl.prototype;R.open=function(t,e){if(this.readyState!=nf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vs(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||b).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,go(this)),this.readyState=nf};R.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ow(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function ow(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}R.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?go(this):Vs(this),this.readyState==3&&ow(this)}};R.Ua=function(t){this.g&&(this.response=this.responseText=t,go(this))};R.Ta=function(t){this.g&&(this.response=t,go(this))};R.ha=function(){this.g&&go(this)};function go(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vs(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Vs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Hl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var sN=b.JSON.parse;function ye(t){Ne.call(this),this.headers=new Ai,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=aw,this.K=this.L=!1}$e(ye,Ne);var aw="",oN=/^https?$/i,aN=["POST","PUT"];R=ye.prototype;R.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():dh.g(),this.C=this.u?Dm(this.u):Dm(dh),this.g.onreadystatechange=Pe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Pm(this,s);return}t=n||"";const i=new Ai(this.headers);r&&Jd(r,function(s,o){i.set(o,s)}),r=vC(i.T()),n=b.FormData&&t instanceof b.FormData,!(0<=T0(aN,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{cw(this),0<this.B&&((this.K=lN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.pa,this)):this.A=Gd(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Pm(this,s)}};function lN(t){return fi&&IC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function uN(t){return t.toLowerCase()=="content-type"}R.pa=function(){typeof Ud<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))};function Pm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lw(t),Wl(t)}function lw(t){t.D||(t.D=!0,Oe(t,"complete"),Oe(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Oe(this,"complete"),Oe(this,"abort"),Wl(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wl(this,!0)),ye.Z.M.call(this)};R.Fa=function(){this.s||(this.F||this.v||this.l?uw(this):this.cb())};R.cb=function(){uw(this)};function uw(t){if(t.h&&typeof Ud<"u"&&(!t.C[1]||Gt(t)!=4||t.ba()!=2)){if(t.v&&Gt(t)==4)Gd(t.Fa,0,t);else if(Oe(t,"readystatechange"),Gt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(X0)[1]||null;if(!i&&b.self&&b.self.location){var s=b.self.location.protocol;i=s.substr(0,s.length-1)}r=!oN.test(i?i.toLowerCase():"")}n=r}if(n)Oe(t,"complete"),Oe(t,"success");else{t.m=6;try{var o=2<Gt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",lw(t)}}finally{Wl(t)}}}}function Wl(t,e){if(t.g){cw(t);const n=t.g,r=t.C[0]?Xa:null;t.g=null,t.C=null,e||Oe(t,"ready");try{n.onreadystatechange=r}catch{}}}function cw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(b.clearTimeout(t.A),t.A=null)}function Gt(t){return t.g?t.g.readyState:0}R.ba=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}};R.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),sN(e)}};function Om(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case aw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Da=function(){return this.m};R.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function cN(t){let e="";return Fd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function rf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=cN(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function Wi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hw(t){this.za=0,this.l=[],this.h=new bl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Wi("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Wi("baseRetryDelayMs",5e3,t),this.$a=Wi("retryDelaySeedMs",1e4,t),this.Ya=Wi("forwardChannelMaxRetries",2,t),this.ra=Wi("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new tw(t&&t.concurrentRequestLimit),this.Ca=new nN,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}R=hw.prototype;R.ma=8;R.G=1;function sf(t){if(dw(t),t.G==3){var e=t.V++,n=nn(t.F);se(n,"SID",t.J),se(n,"RID",e),se(n,"TYPE","terminate"),yo(t,n),e=new fo(t,t.h,e,void 0),e.K=2,e.v=jl(nn(n)),n=!1,b.navigator&&b.navigator.sendBeacon&&(n=b.navigator.sendBeacon(e.v.toString(),"")),!n&&b.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ew(e.l,null),e.g.ea(e.v)),e.F=Date.now(),po(e)}vw(t)}R.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ql(t){t.g&&(af(t),t.g.cancel(),t.g=null)}function dw(t){ql(t),t.u&&(b.clearTimeout(t.u),t.u=null),il(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&b.clearTimeout(t.m),t.m=null)}function Yu(t,e){t.l.push(new eN(t.Za++,e)),t.G==3&&Kl(t)}function Kl(t){nw(t.i)||t.m||(t.m=!0,qd(t.Ha,t),t.C=0)}function hN(t,e){return rw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=co(Pe(t.Ha,t,e),yw(t,t.C)),t.C++,!0)}R.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new fo(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=C0(s),N0(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=fw(this,i,e),n=nn(this.F),se(n,"RID",t),se(n,"CVER",22),this.D&&se(n,"X-HTTP-Session-Id",this.D),yo(this,n),this.o&&s&&rf(n,this.o,s),ef(this.i,i),this.Ra&&se(n,"TYPE","init"),this.ja?(se(n,"$req",e),se(n,"SID","null"),i.$=!0,ph(i,n,null)):ph(i,n,e),this.G=2}}else this.G==3&&(t?Lm(this,t):this.l.length==0||nw(this.i)||Lm(this))};function Lm(t,e){var n;e?n=e.m:n=t.V++;const r=nn(t.F);se(r,"SID",t.J),se(r,"RID",n),se(r,"AID",t.U),yo(t,r),t.o&&t.s&&rf(r,t.o,t.s),n=new fo(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fw(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ef(t.i,n),ph(n,r,e)}function yo(t,e){t.j&&Jd({},function(n,r){se(e,r,n)})}function fw(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Pe(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{rN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function pw(t){t.g||t.u||(t.Y=1,qd(t.Ga,t),t.A=0)}function of(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=co(Pe(t.Ga,t),yw(t,t.A)),t.A++,!0)}R.Ga=function(){if(this.u=null,mw(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=co(Pe(this.bb,this),t)}};R.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,qe(10),ql(this),mw(this))};function af(t){t.B!=null&&(b.clearTimeout(t.B),t.B=null)}function mw(t){t.g=new fo(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=nn(t.oa);se(e,"RID","rpc"),se(e,"SID",t.J),se(e,"CI",t.N?"0":"1"),se(e,"AID",t.U),yo(t,e),se(e,"TYPE","xmlhttp"),t.o&&t.s&&rf(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=jl(nn(e)),n.s=null,n.U=!0,K0(n,t)}R.ab=function(){this.v!=null&&(this.v=null,ql(this),of(this),qe(19))};function il(t){t.v!=null&&(b.clearTimeout(t.v),t.v=null)}function gw(t,e){var n=null;if(t.g==e){il(t),af(t),t.g=null;var r=2}else if(gh(t.i,e))n=e.D,iw(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Fl(),Oe(r,new j0(r,n)),Kl(t)}else pw(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&hN(t,e)||r==2&&of(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:rr(t,5);break;case 4:rr(t,10);break;case 3:rr(t,6);break;default:rr(t,2)}}}function yw(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function rr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Pe(t.jb,t);n||(n=new _r("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||tl(n,"https"),jl(n)),iN(n.toString(),r)}else qe(2);t.G=0,t.j&&t.j.va(e),vw(t),dw(t)}R.jb=function(t){t?(this.h.info("Successfully pinged google.com"),qe(2)):(this.h.info("Failed to ping google.com"),qe(1))};function vw(t){t.G=0,t.I=-1,t.j&&((sw(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,bd(t.l),t.l.length=0),t.j.ua())}function ww(t,e,n){let r=qC(n);if(r.i!="")e&&nl(r,e+"."+r.i),rl(r,r.m);else{const i=b.location;r=KC(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Fd(t.aa,function(i,s){se(r,s,i)}),e=t.D,n=t.sa,e&&n&&se(r,e,n),se(r,"VER",t.ma),yo(t,r),r}function Ew(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ye(new mo({ib:!0})):new ye(t.qa),e.L=t.H,e}function _w(){}R=_w.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Oa=function(){};function sl(){if(fi&&!(10<=Number(TC)))throw Error("Environmental error: no available transport.")}sl.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Ne.call(this),this.g=new hw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ja(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ja(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ri(this)}$e(ut,Ne);ut.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),qd(Pe(t.hb,t,e))),qe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ww(t,null,t.W),Kl(t)};ut.prototype.close=function(){sf(this.g)};ut.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Yu(this.g,e)}else this.v?(e={},e.__data__=Wd(t),Yu(this.g,e)):Yu(this.g,t)};ut.prototype.M=function(){this.g.j=null,delete this.j,sf(this.g),delete this.g,ut.Z.M.call(this)};function Sw(t){Yd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(Sw,Yd);function Iw(){Xd.call(this),this.status=1}$e(Iw,Xd);function Ri(t){this.g=t}$e(Ri,_w);Ri.prototype.xa=function(){Oe(this.g,"a")};Ri.prototype.wa=function(t){Oe(this.g,new Sw(t))};Ri.prototype.va=function(t){Oe(this.g,new Iw)};Ri.prototype.ua=function(){Oe(this.g,"b")};sl.prototype.createWebChannel=sl.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Vl.NO_ERROR=0;Vl.TIMEOUT=8;Vl.HTTP_ERROR=6;H0.COMPLETE="complete";W0.EventType=ho;ho.OPEN="a";ho.CLOSE="b";ho.ERROR="c";ho.MESSAGE="d";Ne.prototype.listen=Ne.prototype.N;ye.prototype.listenOnce=ye.prototype.O;ye.prototype.getLastError=ye.prototype.La;ye.prototype.getLastErrorCode=ye.prototype.Da;ye.prototype.getStatus=ye.prototype.ba;ye.prototype.getResponseJson=ye.prototype.Qa;ye.prototype.getResponseText=ye.prototype.ga;ye.prototype.send=ye.prototype.ea;var dN=function(){return new sl},fN=function(){return Fl()},Xu=Vl,pN=H0,mN=Nr,Mm={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},gN=mo,Go=W0,yN=ye;const $m="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi="9.9.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new kd("@firebase/firestore");function Um(){return Sr.logLevel}function L(t,...e){if(Sr.logLevel<=Y.DEBUG){const n=e.map(lf);Sr.debug(`Firestore (${xi}): ${t}`,...n)}}function rn(t,...e){if(Sr.logLevel<=Y.ERROR){const n=e.map(lf);Sr.error(`Firestore (${xi}): ${t}`,...n)}}function bm(t,...e){if(Sr.logLevel<=Y.WARN){const n=e.map(lf);Sr.warn(`Firestore (${xi}): ${t}`,...n)}}function lf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t="Unexpected state"){const e=`FIRESTORE (${xi}) INTERNAL ASSERTION FAILED: `+t;throw rn(e),new Error(e)}function ee(t,e){t||V()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class EN{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new On;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new On,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new vN(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new Je(e)}}class _N{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ee(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class SN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new _N(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ee(typeof n.token=="string"),this.A=n.token,new IN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function pi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new ge(0,0))}static max(){return new W(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends Bs{construct(e,n,r){return new ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const CN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Bs{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return CN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ne.fromString(e))}static fromName(e){return new M(ne.fromString(e).popFirst(5))}static empty(){return new M(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ne(e.slice()))}}function NN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new Un(i,M.empty(),e)}function AN(t){return new Un(t.readTime,t.key,-1)}class Un{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Un(W.min(),M.empty(),-1)}static max(){return new Un(W.max(),M.empty(),-1)}}function DN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==RN)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */uf.at=-1;class _e{constructor(e,n){this.comparator=e,this.root=n||De.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qo(this.root,e,this.comparator,!0)}}class Qo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:De.RED,this.left=i!=null?i:De.EMPTY,this.right=s!=null?s:De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new De(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return De.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,r,i){return this}insert(t,e,n){return new De(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vm(this.data.getIterator())}getIteratorFrom(e){return new Vm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class Vm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new $t([])}unionWith(e){let n=new Ee(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Me(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Me(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const PN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bn(t){if(ee(!!t),typeof t=="string"){let e=0;const n=PN.exec(t);if(ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(t.seconds),nanos:pe(t.nanos)}}function pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mi(t){return typeof t=="string"?Me.fromBase64String(t):Me.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nw(t){const e=t.mapValue.fields.__previous_value__;return Cw(e)?Nw(e):e}function zs(t){const e=bn(t.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class js{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new js("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof js&&e.projectId===this.projectId&&e.database===this.database}}function Gl(t){return t==null}function ol(t){return t===0&&1/t==-1/0}function LN(t){return typeof t=="number"&&Number.isInteger(t)&&!ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cw(t)?4:MN(t)?9007199254740991:10:V()}function bt(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zs(t).isEqual(zs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=bn(r.timestampValue),o=bn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return mi(r.bytesValue).isEqual(mi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return pe(r.geoPointValue.latitude)===pe(i.geoPointValue.latitude)&&pe(r.geoPointValue.longitude)===pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return pe(r.integerValue)===pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=pe(r.doubleValue),o=pe(i.doubleValue);return s===o?ol(s)===ol(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return pi(t.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Fm(s)!==Fm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!bt(s[a],o[a])))return!1;return!0}(t,e);default:return V()}}function Hs(t,e){return(t.values||[]).find(n=>bt(n,e))!==void 0}function gi(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=pe(i.integerValue||i.doubleValue),a=pe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Bm(t.timestampValue,e.timestampValue);case 4:return Bm(zs(t),zs(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(i,s){const o=mi(i),a=mi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=X(o[l],a[l]);if(u!==0)return u}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=X(pe(i.latitude),pe(s.latitude));return o!==0?o:X(pe(i.longitude),pe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=gi(o[l],a[l]);if(u)return u}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Yo.mapValue&&s===Yo.mapValue)return 0;if(i===Yo.mapValue)return 1;if(s===Yo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=X(a[c],u[c]);if(h!==0)return h;const d=gi(o[a[c]],l[u[c]]);if(d!==0)return d}return X(a.length,u.length)}(t.mapValue,e.mapValue);default:throw V()}}function Bm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=bn(t),r=bn(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function ti(t){return yh(t)}function yh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=bn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?mi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=yh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${yh(r.fields[a])}`;return s+"}"}(t.mapValue):V();var e,n}function zm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vh(t){return!!t&&"integerValue"in t}function cf(t){return!!t&&"arrayValue"in t}function jm(t){return!!t&&"nullValue"in t}function Hm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pa(t){return!!t&&"mapValue"in t}function fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fs(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=fs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Pi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(fs(this.value))}}function Aw(t){const e=[];return Pi(t.fields,(n,r)=>{const i=new Ve([n]);if(pa(r)){const s=Aw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Re(e,0,W.min(),W.min(),mt.empty(),0)}static newFoundDocument(e,n,r){return new Re(e,1,n,W.min(),r,0)}static newNoDocument(e,n){return new Re(e,2,n,W.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new Re(e,3,n,W.min(),mt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Wm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $N(t,e,n,r,i,s,o)}function hf(t){const e=B(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ti(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Gl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ti(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ti(r)).join(",")),e.ht=n}return e.ht}function UN(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ti(r.value)}`;var r}).join(", ")}]`),Gl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ti(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ti(n)).join(",")),`Target(${e})`}function df(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!WN(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!bt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Km(t.startAt,e.startAt)&&Km(t.endAt,e.endAt)}function wh(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ke extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new bN(e,n,r):n==="array-contains"?new BN(e,r):n==="in"?new zN(e,r):n==="not-in"?new jN(e,r):n==="array-contains-any"?new HN(e,r):new Ke(e,n,r)}static lt(e,n,r){return n==="in"?new FN(e,r):new VN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(gi(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.ft(gi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class bN extends Ke{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.ft(n)}}class FN extends Ke{constructor(e,n){super(e,"in",n),this.keys=Dw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VN extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=Dw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class BN extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cf(n)&&Hs(n.arrayValue,this.value)}}class zN extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hs(this.value.arrayValue,n)}}class jN extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hs(this.value.arrayValue,n)}}class HN extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hs(this.value.arrayValue,r))}}class al{constructor(e,n){this.position=e,this.inclusive=n}}class ni{constructor(e,n="asc"){this.field=e,this.dir=n}}function WN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function qm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=gi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Km(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function qN(t,e,n,r,i,s,o,a){return new Oi(t,e,n,r,i,s,o,a)}function Ql(t){return new Oi(t)}function Gm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ff(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function pf(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Rw(t){return t.collectionGroup!==null}function Ws(t){const e=B(t);if(e._t===null){e._t=[];const n=pf(e),r=ff(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new ni(n)),e._t.push(new ni(Ve.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ni(Ve.keyField(),s))}}}return e._t}function sn(t){const e=B(t);if(!e.wt)if(e.limitType==="F")e.wt=Wm(e.path,e.collectionGroup,Ws(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ws(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ni(s.field,o))}const r=e.endAt?new al(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new al(e.startAt.position,e.startAt.inclusive):null;e.wt=Wm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Eh(t,e,n){return new Oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yl(t,e){return df(sn(t),sn(e))&&t.limitType===e.limitType}function xw(t){return`${hf(sn(t))}|lt:${t.limitType}`}function _h(t){return`Query(target=${UN(sn(t))}; limitType=${t.limitType})`}function mf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=qm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ws(n),r)||n.endAt&&!function(i,s,o){const a=qm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ws(n),r))}(t,e)}function KN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Pw(t){return(e,n)=>{let r=!1;for(const i of Ws(t)){const s=GN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function GN(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?gi(a,l):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ol(e)?"-0":e}}function Lw(t){return{integerValue:""+t}}function QN(t,e){return LN(e)?Lw(e):Ow(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this._=void 0}}function YN(t,e,n){return t instanceof ll?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof qs?$w(t,e):t instanceof Ks?Uw(t,e):function(r,i){const s=Mw(r,i),o=Qm(s)+Qm(r.yt);return vh(s)&&vh(r.yt)?Lw(o):Ow(r.It,o)}(t,e)}function XN(t,e,n){return t instanceof qs?$w(t,e):t instanceof Ks?Uw(t,e):n}function Mw(t,e){return t instanceof ul?vh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ll extends Xl{}class qs extends Xl{constructor(e){super(),this.elements=e}}function $w(t,e){const n=bw(e);for(const r of t.elements)n.some(i=>bt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ks extends Xl{constructor(e){super(),this.elements=e}}function Uw(t,e){let n=bw(e);for(const r of t.elements)n=n.filter(i=>!bt(i,r));return{arrayValue:{values:n}}}class ul extends Xl{constructor(e,n){super(),this.It=e,this.yt=n}}function Qm(t){return pe(t.integerValue||t.doubleValue)}function bw(t){return cf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function JN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof qs&&r instanceof qs||n instanceof Ks&&r instanceof Ks?pi(n.elements,r.elements,bt):n instanceof ul&&r instanceof ul?bt(n.yt,r.yt):n instanceof ll&&r instanceof ll}(t.transform,e.transform)}class ZN{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ma(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jl{}function Fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gf(t.key,Ut.none()):new Eo(t.key,t.data,Ut.none());{const n=t.data,r=mt.empty();let i=new Ee(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ar(t.key,r,new $t(i.toArray()),Ut.none())}}function eA(t,e,n){t instanceof Eo?function(r,i,s){const o=r.value.clone(),a=Xm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(r,i,s){if(!ma(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Xm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Vw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ps(t,e,n,r){return t instanceof Eo?function(i,s,o,a){if(!ma(i.precondition,s))return o;const l=i.value.clone(),u=Jm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(i,s,o,a){if(!ma(i.precondition,s))return o;const l=Jm(i.fieldTransforms,a,s),u=s.data;return u.setAll(Vw(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ma(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function tA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Mw(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function Ym(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&pi(n,r,(i,s)=>JN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Eo extends Jl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ar extends Jl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Vw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xm(t,e,n){const r=new Map;ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,XN(o,a,n[i]))}return r}function Jm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,YN(s,o,e))}return r}class gf extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nA extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,G;function iA(t){switch(t){default:return V();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Bw(t){if(t===void 0)return rn("GRPC error has no .code"),_.UNKNOWN;switch(t){case fe.OK:return _.OK;case fe.CANCELLED:return _.CANCELLED;case fe.UNKNOWN:return _.UNKNOWN;case fe.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case fe.INTERNAL:return _.INTERNAL;case fe.UNAVAILABLE:return _.UNAVAILABLE;case fe.UNAUTHENTICATED:return _.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case fe.NOT_FOUND:return _.NOT_FOUND;case fe.ALREADY_EXISTS:return _.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return _.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case fe.ABORTED:return _.ABORTED;case fe.OUT_OF_RANGE:return _.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return _.UNIMPLEMENTED;case fe.DATA_LOSS:return _.DATA_LOSS;default:return V()}}(G=fe||(fe={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Pi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return kw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=new _e(M.comparator);function on(){return sA}const zw=new _e(M.comparator);function Zi(...t){let e=zw;for(const n of t)e=e.insert(n.key,n);return e}function jw(t){let e=zw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ir(){return ms()}function Hw(){return ms()}function ms(){return new Li(t=>t.toString(),(t,e)=>t.isEqual(e))}const oA=new _e(M.comparator),aA=new Ee(M.comparator);function q(...t){let e=aA;for(const n of t)e=e.add(n);return e}const lA=new Ee(X);function Ww(){return lA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,_o.createSynthesizedTargetChangeForCurrentChange(e,n)),new Zl(W.min(),r,Ww(),on(),q())}}class _o{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new _o(Me.EMPTY_BYTE_STRING,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class qw{constructor(e,n){this.targetId=e,this.At=n}}class Kw{constructor(e,n,r=Me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Zm{constructor(){this.Rt=0,this.bt=tg(),this.Pt=Me.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=q(),n=q(),r=q();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new _o(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=tg()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class uA{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=on(),this.qt=eg(),this.Kt=new Ee(X)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(wh(s))if(r===0){const o=new M(s.path);this.jt(n,o,Re.newNoDocument(o,W.min()))}else ee(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&wh(a.target)){const l=new M(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Re.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=q();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Zl(e,n,this.Kt,this.Ut,r);return this.Ut=on(),this.qt=eg(),this.Kt=new Ee(X),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new Zm,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ee(X),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Zm),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function eg(){return new _e(M.comparator)}function tg(){return new _e(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class dA{constructor(e,n){this.databaseId=e,this.gt=n}}function cl(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gw(t,e){return t.gt?e.toBase64():e.toUint8Array()}function fA(t,e){return cl(t,e.toTimestamp())}function Yt(t){return ee(!!t),W.fromTimestamp(function(e){const n=bn(e);return new ge(n.seconds,n.nanos)}(t))}function yf(t,e){return function(n){return new ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Qw(t){const e=ne.fromString(t);return ee(Jw(e)),e}function Sh(t,e){return yf(t.databaseId,e.path)}function Ju(t,e){const n=Qw(e);if(n.get(1)!==t.databaseId.projectId)throw new O(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(Yw(n))}function Ih(t,e){return yf(t.databaseId,e)}function pA(t){const e=Qw(t);return e.length===4?ne.emptyPath():Yw(e)}function Th(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yw(t){return ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ng(t,e,n){return{name:Sh(t,e),fields:n.value.mapValue.fields}}function mA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(ee(u===void 0||typeof u=="string"),Me.fromBase64String(u||"")):(ee(u===void 0||u instanceof Uint8Array),Me.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:Bw(l.code);return new O(u,l.message||"")}(o);n=new Kw(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ju(t,r.document.name),s=Yt(r.document.updateTime),o=new mt({mapValue:{fields:r.document.fields}}),a=Re.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ga(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ju(t,r.document),s=r.readTime?Yt(r.readTime):W.min(),o=Re.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ga([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ju(t,r.document),s=r.removedTargetIds||[];n=new ga([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new rA(i),o=r.targetId;n=new qw(o,s)}}return n}function gA(t,e){let n;if(e instanceof Eo)n={update:ng(t,e.key,e.value)};else if(e instanceof gf)n={delete:Sh(t,e.key)};else if(e instanceof Ar)n={update:ng(t,e.key,e.data),updateMask:CA(e.fieldMask)};else{if(!(e instanceof nA))return V();n={verify:Sh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ll)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ks)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ul)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:fA(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:V()}(t,e.precondition)),n}function yA(t,e){return t&&t.length>0?(ee(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Yt(r.updateTime):Yt(i);return s.isEqual(W.min())&&(s=Yt(i)),new ZN(s,r.transformResults||[])}(n,e))):[]}function vA(t,e){return{documents:[Ih(t,e.path)]}}function wA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ih(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ih(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Hm(h.value))return{unaryFilter:{field:xr(h.field),op:"IS_NAN"}};if(jm(h.value))return{unaryFilter:{field:xr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Hm(h.value))return{unaryFilter:{field:xr(h.field),op:"IS_NOT_NAN"}};if(jm(h.value))return{unaryFilter:{field:xr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xr(h.field),op:IA(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:xr(c.field),direction:SA(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Gl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function EA(t){let e=pA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ee(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=Xw(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ni(qr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Gl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new al(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new al(d,h)}(n.endAt)),qN(e,i,o,s,a,"F",l,u)}function _A(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xw(t){return t?t.unaryFilter!==void 0?[kA(t)]:t.fieldFilter!==void 0?[TA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Xw(e)).reduce((e,n)=>e.concat(n)):V():[]}function SA(t){return cA[t]}function IA(t){return hA[t]}function xr(t){return{fieldPath:t.canonicalString()}}function qr(t){return Ve.fromServerFormat(t.fieldPath)}function TA(t){return Ke.create(qr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(t.fieldFilter.op),t.fieldFilter.value)}function kA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qr(t.unaryFilter.field);return Ke.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qr(t.unaryFilter.field);return Ke.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qr(t.unaryFilter.field);return Ke.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qr(t.unaryFilter.field);return Ke.create(i,"!=",{nullValue:"NULL_VALUE"});default:return V()}}function CA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&eA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ps(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ps(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Hw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Fw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&pi(this.mutations,e.mutations,(n,r)=>Ym(n,r))&&pi(this.baseMutations,e.baseMutations,(n,r)=>Ym(n,r))}}class vf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ee(e.mutations.length===r.length);let i=oA;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,i,s=W.min(),o=W.min(),a=Me.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.re=e}}function RA(t){const e=EA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Eh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(){this.Ye=new PA}addToCollectionParentIndex(e,n){return this.Ye.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Un.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Un.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class PA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ee(ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ee(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new yi(0)}static vn(){return new yi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(){this.changes=new Li(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&ps(r.mutation,i,$t.empty(),ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=ir();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Zi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=on();const o=ms(),a=ms();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ar)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),ps(c.mutation,u,c.mutation.getFieldMask(),ge.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new LA(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ms();let i=new _e((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||$t.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Hw();c.forEach(d=>{if(!s.has(d)){const m=Fw(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Rw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(ir());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:jw(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=Zi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Zi();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(u,c){return new Oi(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Re.newInvalidDocument(u)))});let o=Zi();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&ps(u.mutation,l,$t.empty(),ge.now()),mf(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve(Re.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Yt(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:RA(r.bundledQuery),readTime:Yt(r.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.overlays=new _e(M.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ir();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=ir(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new _e((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ir(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ir(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new AA(n,r));let s=this.es.get(n);s===void 0&&(s=q(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.ns=new Ee(Ie.ss),this.rs=new Ee(Ie.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Ie(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Ie(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new M(new ne([])),r=new Ie(n,e),i=new Ie(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new M(new ne([])),r=new Ie(n,e),i=new Ie(n,e+1);let s=q();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ie(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return M.comparator(e.key,n.key)||X(e._s,n._s)}static os(e,n){return X(e._s,n._s)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ee(Ie.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new NA(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ie(n,0),i=new Ie(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(X);return n.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),T.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new M(s),0);let a=new Ee(X);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ee(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return T.forEach(n.mutations,i=>{const s=new Ie(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Ie(n,0),i=this.gs.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.Es=e,this.docs=new _e(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(n))}getEntries(e,n){let r=on();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Re.newInvalidDocument(i))}),T.resolve(r)}getAllFromCollection(e,n,r){let i=on();const s=new M(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||DN(AN(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,r,i){V()}As(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VA(this)}getSize(e){return T.resolve(this.size)}}class VA extends OA{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.persistence=e,this.Rs=new Li(n=>hf(n),df),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.bs=0,this.Ps=new wf,this.targetCount=0,this.vs=yi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new yi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new uf(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new BA(this),this.indexManager=new xA,this.remoteDocumentCache=function(r){return new FA(r)}(r=>this.referenceDelegate.xs(r)),this.It=new DA(n),this.Ns=new $A(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new bA(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new jA(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return T.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class jA extends xN{constructor(e){super(),this.currentSequenceNumber=e}}class Ef{constructor(e){this.persistence=e,this.Fs=new wf,this.$s=null}static Bs(e){return new Ef(e)}get Ls(){if(this.$s)return this.$s;throw V()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,r=>{const i=M.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _f(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if(Gm(n))return T.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Eh(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Eh(n,null,"F")):this.Bi(e,u,n,l)}))})))}Mi(e,n,r,i){return Gm(n)||i.isEqual(W.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(Um()<=Y.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_h(n)),this.Bi(e,o,n,NN(i,-1)))})}Fi(e,n){let r=new Ee(Pw(e));return n.forEach((i,s)=>{mf(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return Um()<=Y.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",_h(n)),this.Ni.getDocumentsMatchingQuery(e,n,Un.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new _e(X),this.qi=new Li(s=>hf(s),df),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MA(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function qA(t,e,n,r){return new WA(t,e,n,r)}async function Zw(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function KA(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=T.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(y=>{const v=l.docVersions.get(m);ee(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=q();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function e1(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function GA(t,e){const n=B(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(Me.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(y,v,A){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,m,c)&&a.push(n.Cs.updateTargetData(s,m))});let l=on(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(QA(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(W.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function QA(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=on();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function YA(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function XA(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new lr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function kh(t,e,n){const r=B(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wo(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function rg(t,e,n){const r=B(t);let i=W.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=B(a),h=c.qi.get(u);return h!==void 0?T.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,sn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:q())).next(a=>(JA(r,KN(e),a),{documents:a,Hi:s})))}function JA(t,e,n){let r=W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class ig{constructor(){this.activeTargetIds=Ww()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZA{constructor(){this.Lr=new ig,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ig,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);L("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(l=>(L("RestConnection","Received: ",l),l),l=>{throw bm("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+xi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=tD[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new yN;a.listenOnce(pN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xu.NO_ERROR:const u=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Xu.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new O(_.DEADLINE_EXCEEDED,"Request time out"));break;case Xu.HTTP_ERROR:const c=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(y)>=0?y:_.UNKNOWN}(h.status);o(new O(d,h.message))}else o(new O(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new O(_.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=dN(),o=fN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new gN({})),this.ho(a.initMessageHeaders,n,r),Vv()||zv()||GS()||jv()||QS()||Bv()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");L("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new nD({Hr:y=>{h?L("Connection","Not sending because WebChannel is closed:",y):(c||(L("Connection","Opening WebChannel transport."),u.open(),c=!0),L("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),m=(y,v,A)=>{y.listen(v,p=>{try{A(p)}catch(f){setTimeout(()=>{throw f},0)}})};return m(u,Go.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),m(u,Go.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),d.io())}),m(u,Go.EventType.ERROR,y=>{h||(h=!0,bm("Connection","WebChannel transport errored:",y),d.io(new O(_.UNAVAILABLE,"The operation could not be completed")))}),m(u,Go.EventType.MESSAGE,y=>{var v;if(!h){const A=y.data[0];ee(!!A);const p=A,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){L("Connection","WebChannel received error:",f);const g=f.status;let E=function(x){const S=fe[x];if(S!==void 0)return Bw(S)}(g),N=f.message;E===void 0&&(E=_.INTERNAL,N="Unknown error status: "+g+" with message "+f.message),h=!0,d.io(new O(E,N)),u.close()}else L("Connection","WebChannel received:",A),d.ro(A)}}),m(o,mN.STAT_EVENT,y=>{y.stat===Mm.PROXY?L("Connection","Detected buffering proxy"):y.stat===Mm.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Zu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t){return new dA(t,!0)}class t1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new t1(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(rn(n.toString()),rn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new O(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iD extends n1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=mA(this.It,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?Yt(s.readTime):W.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Th(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=wh(a)?{documents:vA(i,a)}:{query:wA(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Gw(i,s.resumeToken):s.snapshotVersion.compareTo(W.min())>0&&(o.readTime=cl(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=_A(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Th(this.It),n.removeTarget=e,this.Bo(n)}}class sD extends n1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=yA(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.Zo(r,n)}return ee(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Th(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gA(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new O(_.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(_.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(_.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class aD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(rn(n),this.ou=!1):L("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{Dr(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=B(a);l._u.add(4),await So(l),l.gu.set("Unknown"),l._u.delete(4),await tu(l)}(this))})}),this.gu=new aD(r,i)}}async function tu(t){if(Dr(t))for(const e of t.wu)await e(!0)}async function So(t){for(const e of t.wu)await e(!1)}function r1(t,e){const n=B(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Tf(n)?If(n):Mi(n).ko()&&Sf(n,e))}function i1(t,e){const n=B(t),r=Mi(n);n.du.delete(e),r.ko()&&s1(n,e),n.du.size===0&&(r.ko()?r.Fo():Dr(n)&&n.gu.set("Unknown"))}function Sf(t,e){t.yu.Ot(e.targetId),Mi(t).zo(e)}function s1(t,e){t.yu.Ot(e),Mi(t).Ho(e)}function If(t){t.yu=new uA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Mi(t).start(),t.gu.uu()}function Tf(t){return Dr(t)&&!Mi(t).No()&&t.du.size>0}function Dr(t){return B(t)._u.size===0}function o1(t){t.yu=void 0}async function uD(t){t.du.forEach((e,n)=>{Sf(t,e)})}async function cD(t,e){o1(t),Tf(t)?(t.gu.hu(e),If(t)):t.gu.set("Unknown")}async function hD(t,e,n){if(t.gu.set("Online"),e instanceof Kw&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hl(t,r)}else if(e instanceof ga?t.yu.Gt(e):e instanceof qw?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(W.min()))try{const r=await e1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Me.EMPTY_BYTE_STRING,l.snapshotVersion)),s1(i,a);const u=new lr(l.target,a,1,l.sequenceNumber);Sf(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await hl(t,r)}}async function hl(t,e,n){if(!wo(e))throw e;t._u.add(1),await So(t),t.gu.set("Offline"),n||(n=()=>e1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await tu(t)})}function a1(t,e){return e().catch(n=>hl(t,n,e))}async function nu(t){const e=B(t),n=Fn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;dD(e);)try{const i=await YA(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,fD(e,i)}catch(i){await hl(e,i)}l1(e)&&u1(e)}function dD(t){return Dr(t)&&t.fu.length<10}function fD(t,e){t.fu.push(e);const n=Fn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function l1(t){return Dr(t)&&!Fn(t).No()&&t.fu.length>0}function u1(t){Fn(t).start()}async function pD(t){Fn(t).eu()}async function mD(t){const e=Fn(t);for(const n of t.fu)e.Xo(n.mutations)}async function gD(t,e,n){const r=t.fu.shift(),i=vf.from(r,e,n);await a1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nu(t)}async function yD(t,e){e&&Fn(t).Yo&&await async function(n,r){if(i=r.code,iA(i)&&i!==_.ABORTED){const s=n.fu.shift();Fn(n).Oo(),await a1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await nu(n)}var i}(t,e),l1(t)&&u1(t)}async function og(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Dr(n);n._u.add(3),await So(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await tu(n)}async function vD(t,e){const n=B(t);e?(n._u.delete(2),await tu(n)):e||(n._u.add(2),await So(n),n.gu.set("Unknown"))}function Mi(t){return t.pu||(t.pu=function(e,n,r){const i=B(e);return i.su(),new iD(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:uD.bind(null,t),Zr:cD.bind(null,t),Wo:hD.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),Tf(t)?If(t):t.gu.set("Unknown")):(await t.pu.stop(),o1(t))})),t.pu}function Fn(t){return t.Iu||(t.Iu=function(e,n,r){const i=B(e);return i.su(),new sD(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:pD.bind(null,t),Zr:yD.bind(null,t),tu:mD.bind(null,t),Zo:gD.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await nu(t)):(await t.Iu.stop(),t.fu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new kf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cf(t,e){if(rn("AsyncQueue",`${e}: ${t}`),wo(t))return new O(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=Zi(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new ri(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ri)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ri;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.Tu=new _e(M.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):V():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class vi{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new vi(e,n,ri.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(){this.Au=void 0,this.listeners=[]}}class ED{constructor(){this.queries=new Li(e=>xw(e),Yl),this.onlineState="Unknown",this.Ru=new Set}}async function c1(t,e){const n=B(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new wD),i)try{s.Au=await n.onListen(r)}catch(o){const a=Cf(o,`Initialization of query '${_h(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Nf(n)}async function h1(t,e){const n=B(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _D(t,e){const n=B(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Nf(n)}function SD(t,e,n){const r=B(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Nf(t){t.Ru.forEach(e=>{e.next()})}class d1{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.key=e}}class p1{constructor(e){this.key=e}}class ID{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=q(),this.mutatedKeys=q(),this.Ku=Pw(e),this.Gu=new ri(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new ag,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=mf(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let A=!1;d&&m?d.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),A=!0):this.zu(d,m)||(r.track({type:2,doc:m}),A=!0,(l&&this.Ku(m,l)>0||u&&this.Ku(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),A=!0):d&&!m&&(r.track({type:1,doc:d}),A=!0,(l||u)&&(a=!0)),A&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((u,c)=>function(h,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return m(h)-m(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new vi(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new ag,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=q(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new p1(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new f1(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=q();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return vi.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class TD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kD{constructor(e){this.key=e,this.ec=!1}}class CD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Li(a=>xw(a),Yl),this.ic=new Map,this.rc=new Set,this.oc=new _e(M.comparator),this.uc=new Map,this.cc=new wf,this.ac={},this.hc=new Map,this.lc=yi.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function ND(t,e){const n=UD(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await XA(n.localStore,sn(e));n.isPrimaryClient&&r1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await AD(n,e,r,a==="current")}return i}async function AD(t,e,n,r){t.dc=(c,h,d)=>async function(m,y,v,A){let p=y.view.ju(v);p.$i&&(p=await rg(m.localStore,y.query,!1).then(({documents:E})=>y.view.ju(E,p)));const f=A&&A.targetChanges.get(y.targetId),g=y.view.applyChanges(p,m.isPrimaryClient,f);return ug(m,y.targetId,g.Yu),g.snapshot}(t,c,h,d);const i=await rg(t.localStore,e,!0),s=new ID(e,i.Hi),o=s.ju(i.documents),a=_o.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);ug(t,n,l.Yu);const u=new TD(e,n,s);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function DD(t,e){const n=B(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Yl(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await kh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),i1(n.remoteStore,r.targetId),Ch(n,r.targetId)}).catch(vo)):(Ch(n,r.targetId),await kh(n.localStore,r.targetId,!0))}async function RD(t,e,n){const r=bD(t);try{const i=await function(s,o){const a=B(s),l=ge.now(),u=o.reduce((d,m)=>d.add(m.key),q());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=on(),y=q();return a.Gi.getEntries(d,u).next(v=>{m=v,m.forEach((A,p)=>{p.isValidDocument()||(y=y.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{c=v;const A=[];for(const p of o){const f=tA(p,c.get(p.key).overlayedDocument);f!=null&&A.push(new Ar(p.key,f,Aw(f.value.mapValue),Ut.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,A,o)}).next(v=>{h=v;const A=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,A)})}).then(()=>({batchId:h.batchId,changes:jw(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new _e(X)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await Io(r,i.changes),await nu(r.remoteStore)}catch(i){const s=Cf(i,"Failed to persist write");n.reject(s)}}async function m1(t,e){const n=B(t);try{const r=await GA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?ee(o.ec):i.removedDocuments.size>0&&(ee(o.ec),o.ec=!1))}),await Io(n,r,e)}catch(r){await vo(r)}}function lg(t,e,n){const r=B(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=B(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&Nf(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xD(t,e,n){const r=B(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new _e(M.comparator);o=o.insert(s,Re.newNoDocument(s,W.min()));const a=q().add(s),l=new Zl(W.min(),new Map,new Ee(X),o,a);await m1(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),Af(r)}else await kh(r.localStore,e,!1).then(()=>Ch(r,e,n)).catch(vo)}async function PD(t,e){const n=B(t),r=e.batch.batchId;try{const i=await KA(n.localStore,e);y1(n,r,null),g1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Io(n,i)}catch(i){await vo(i)}}async function OD(t,e,n){const r=B(t);try{const i=await function(s,o){const a=B(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ee(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);y1(r,e,n),g1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Io(r,i)}catch(i){await vo(i)}}function g1(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function y1(t,e,n){const r=B(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Ch(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||v1(t,r)})}function v1(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(i1(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Af(t))}function ug(t,e,n){for(const r of n)r instanceof f1?(t.cc.addReference(r.key,e),LD(t,r)):r instanceof p1?(L("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||v1(t,r.key)):V()}function LD(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(L("SyncEngine","New document in limbo: "+n),t.rc.add(r),Af(t))}function Af(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new M(ne.fromString(e)),r=t.lc.next();t.uc.set(r,new kD(n)),t.oc=t.oc.insert(n,r),r1(t.remoteStore,new lr(sn(Ql(n.path)),r,2,uf.at))}}async function Io(t,e,n){const r=B(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=_f.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=B(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(l,h=>T.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>T.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!wo(c))throw c;L("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);u.Ui=u.Ui.insert(h,y)}}}(r.localStore,s))}async function MD(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await Zw(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new O(_.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Io(n,r.ji)}}function $D(t,e){const n=B(t),r=n.uc.get(e);if(r&&r.ec)return q().add(r.key);{let i=q();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function UD(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=m1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$D.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xD.bind(null,e),e.nc.Wo=_D.bind(null,e.eventManager),e.nc._c=SD.bind(null,e.eventManager),e}function bD(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OD.bind(null,e),e}class FD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=eu(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return qA(this.persistence,new HA,e.initialUser,this.It)}gc(e){return new zA(Ef.Bs,this.It)}mc(e){return new ZA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MD.bind(null,this.syncEngine),await vD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ED}createDatastore(e){const n=eu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new rD(i));var i;return function(s,o,a,l){return new oD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>lg(this.syncEngine,a,0),o=sg.C()?new sg:new eD,new lD(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new CD(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);L("RemoteStore","RemoteStore shutting down."),n._u.add(5),await So(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):rn("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=Tw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zD(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Zw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function jD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HD(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>og(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>og(e.remoteStore,s)),t.onlineComponents=e}async function HD(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await zD(t,new FD)),t.offlineComponents}async function E1(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await jD(t,new VD)),t.onlineComponents}function WD(t){return E1(t).then(e=>e.syncEngine)}async function Nh(t){const e=await E1(t),n=e.eventManager;return n.onListen=ND.bind(null,e.syncEngine),n.onUnlisten=DD.bind(null,e.syncEngine),n}function qD(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new w1({next:h=>{s.enqueueAndForget(()=>h1(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new O(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new O(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new d1(Ql(o.path),u,{includeMetadataChanges:!0,Nu:!0});return c1(i,c)}(await Nh(t),t.asyncQueue,e,n,r)),r.promise}const cg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(t,e,n){if(!n)throw new O(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KD(t,e,n,r){if(e===!0&&r===!0)throw new O(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hg(t){if(!M.isDocumentKey(t))throw new O(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dg(t){if(M.isDocumentKey(t))throw new O(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ru(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function ur(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ru(t);throw new O(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,KD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wN;switch(n.type){case"gapi":const r=n.client;return new SN(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=cg.get(e);n&&(L("ComponentProvider","Removing Datastore"),cg.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class $i{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $i(this.firestore,e,this._query)}}class Ln extends $i{constructor(e,n,r){super(e,n,Ql(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new M(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function S1(t,e,...n){if(t=Qe(t),_1("collection","path",e),t instanceof Df){const r=ne.fromString(e,...n);return dg(r),new Ln(t,null,r)}{if(!(t instanceof it||t instanceof Ln))throw new O(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return dg(r),new Ln(t.firestore,null,r)}}function Rf(t,e,...n){if(t=Qe(t),arguments.length===1&&(e=Tw.R()),_1("doc","path",e),t instanceof Df){const r=ne.fromString(e,...n);return hg(r),new it(t,null,new M(r))}{if(!(t instanceof it||t instanceof Ln))throw new O(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return hg(r),new it(t.firestore,t instanceof Ln?t.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new t1(this,"async_queue_retry"),this.jc=()=>{const n=Zu();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Zu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Zu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new On;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!wo(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw rn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=kf.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&V()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function pg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class wi extends Df{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new GD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||I1(this),this._firestoreClient.terminate()}}function QD(t,e){const n=typeof t=="object"?t:Kv(),r=typeof t=="string"?t:e||"(default)";return Nd(n,"firestore").getImmediate({identifier:r})}function xf(t){return t._firestoreClient||I1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function I1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new ON(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new BD(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ei(Me.fromBase64String(e))}catch(n){throw new O(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ei(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=/^__.*__$/;class XD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new Eo(e,this.data,n,this.fieldTransforms)}}function k1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class Lf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Lf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.oa(e),i}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return dl(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(k1(this.na)&&YD.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class JD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||eu(e)}fa(e,n,r,i=!1){return new Lf({na:e,methodName:n,la:r,path:Ve.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function C1(t){const e=t._freezeSettings(),n=eu(t._databaseId);return new JD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ZD(t,e,n,r,i,s={}){const o=t.fa(s.merge||s.mergeFields?2:0,e,n,i);D1("Data must be an object, but it was:",o,r);const a=N1(r,o);let l,u;if(s.merge)l=new $t(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=tR(e,h,n);if(!o.contains(d))throw new O(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);rR(c,d)||c.push(d)}l=new $t(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new XD(new mt(a),l,u)}function eR(t,e,n,r=!1){return Mf(n,t.fa(r?4:3,e))}function Mf(t,e){if(A1(t=Qe(t)))return D1("Unsupported field value:",e,t),N1(t,e);if(t instanceof T1)return function(n,r){if(!k1(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Mf(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Qe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return QN(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ge.fromDate(n);return{timestampValue:cl(r.It,i)}}if(n instanceof ge){const i=new ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:cl(r.It,i)}}if(n instanceof Of)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ei)return{bytesValue:Gw(r.It,n._byteString)};if(n instanceof it){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${ru(n)}`)}(t,e)}function N1(t,e){const n={};return kw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pi(t,(r,i)=>{const s=Mf(i,e.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function A1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof Of||t instanceof Ei||t instanceof it||t instanceof T1)}function D1(t,e,n){if(!A1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ru(n);throw r==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function tR(t,e,n){if((e=Qe(e))instanceof Pf)return e._internalPath;if(typeof e=="string")return R1(t,e);throw dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const nR=new RegExp("[~\\*/\\[\\]]");function R1(t,e,n){if(e.search(nR)>=0)throw dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pf(...e.split("."))._internalPath}catch{throw dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(_.INVALID_ARGUMENT,a+t+l)}function rR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(iu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iR extends x1{data(){return super.data()}}function iu(t,e){return typeof e=="string"?R1(t,e):e instanceof Pf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class P1 extends x1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(iu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ya extends P1{data(e={}){return super.data(e)}}class sR{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new es(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ya(this._firestore,this._userDataWriter,r.key,r,new es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new ya(r._firestore,r._userDataWriter,o.doc.key,o.doc,new es(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ya(r._firestore,r._userDataWriter,o.doc.key,o.doc,new es(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:oR(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function oR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class O1{}function ec(t,...e){for(const n of e)t=n._apply(t);return t}class lR extends O1{constructor(e,n,r){super(),this.wa=e,this.ma=n,this.ga=r,this.type="where"}_apply(e){const n=C1(e.firestore),r=function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new O(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){yg(c,u);const m=[];for(const y of c)m.push(gg(a,i,y));h={arrayValue:{values:m}}}else h=gg(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||yg(c,u),h=eR(o,s,c,u==="in"||u==="not-in");const d=Ke.create(l,u,h);return function(m,y){if(y.dt()){const A=pf(m);if(A!==null&&!A.isEqual(y.field))throw new O(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${A.toString()}' and '${y.field.toString()}'`);const p=ff(m);p!==null&&L1(m,y.field,p)}const v=function(A,p){for(const f of A.filters)if(p.indexOf(f.op)>=0)return f.op;return null}(m,function(A){switch(A){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(v!==null)throw v===y.op?new O(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new O(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${v.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.wa,this.ma,this.ga);return new $i(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Oi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function mg(t,e,n){const r=e,i=iu("where",t);return new lR(i,r,n)}class uR extends O1{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new O(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new O(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ni(i,s);return function(a,l){if(ff(a)===null){const u=pf(a);u!==null&&L1(a,u,l.field)}}(r,o),o}(e._query,this.wa,this.ya);return new $i(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Oi(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function tc(t,e="asc"){const n=e,r=iu("orderBy",t);return new uR(r,n)}function gg(t,e,n){if(typeof(n=Qe(n))=="string"){if(n==="")throw new O(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Rw(e)&&n.indexOf("/")!==-1)throw new O(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ne.fromString(n));if(!M.isDocumentKey(r))throw new O(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zm(t,new M(r))}if(n instanceof it)return zm(t,n._key);throw new O(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ru(n)}.`)}function yg(t,e){if(!Array.isArray(t)||t.length===0)throw new O(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new O(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function L1(t,e,n){if(!n.isEqual(e))throw new O(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){const r={};return Pi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Of(pe(e.latitude),pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Nw(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const n=bn(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ne.fromString(e);ee(Jw(r));const i=new js(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||rn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){t=ur(t,it);const e=ur(t.firestore,wi);return qD(xf(e),t._key).then(n=>U1(e,t,n))}class M1 extends cR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ei(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function fR(t){return $1(ur(t.firestore,wi),[new gf(t._key,Ut.none())])}function pR(t,e){const n=ur(t.firestore,wi),r=Rf(t),i=hR(t.converter,e);return $1(n,[ZD(C1(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function mR(t,...e){var n,r,i;t=Qe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||pg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(pg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof it)u=ur(t.firestore,wi),c=Ql(t._key.path),l={next:h=>{e[o]&&e[o](U1(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ur(t,$i);u=ur(h.firestore,wi),c=h._query;const d=new M1(u);l={next:m=>{e[o]&&e[o](new sR(u,d,h,m))},error:e[o+1],complete:e[o+2]},aR(t._query)}return function(h,d,m,y){const v=new w1(y),A=new d1(d,v,m);return h.asyncQueue.enqueueAndForget(async()=>c1(await Nh(h),A)),()=>{v.Rc(),h.asyncQueue.enqueueAndForget(async()=>h1(await Nh(h),A))}}(xf(u),c,a,l)}function $1(t,e){return function(n,r){const i=new On;return n.asyncQueue.enqueueAndForget(async()=>RD(await WD(n),r,i)),i.promise}(xf(t),e)}function U1(t,e,n){const r=n.docs.get(e._key),i=new M1(t);return new P1(t,i,e._key,r,new es(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){xi=n})(no),hi(new mr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new wi(new EN(n.getProvider("auth-internal")),new TN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new O(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new js(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Pn($m,"3.4.15",t),Pn($m,"3.4.15","esm2017")})();const gR={apiKey:"AIzaSyBO-5xjon4Lys9m_umcw_N14Hnuiv9JO6A",authDomain:"miniblog-c9d72.firebaseapp.com",projectId:"miniblog-c9d72",storageBucket:"miniblog-c9d72.appspot.com",messagingSenderId:"901310211823",appId:"1:901310211823:web:51bac1ff1c2f27c11a1d1a"},yR=tT(gR),su=QD(yR),ou=()=>{const[t,e]=C.exports.useState(null),[n,r]=C.exports.useState(null),[i,s]=C.exports.useState(!1),o=uC(),a=async c=>{e(null),r(!0);try{const{user:h}=await KT(o,c.email,c.password);return await YT(h,{displayName:c.displayName}),r(!1),h}catch(h){console.log(h.message),console.log(typeof h.message);let d;h.message.includes("password")?d="A senha precisa conter ao menos 6 caracteres":h.message.includes("email-already")?d="E-mail j\xE1 cadastrado.":d="Ocorreu um erro, por favor tente mais tarde.",r(!1),e(d)}},l=()=>{JT(o)},u=async c=>{r(!0),e(!1);try{await GT(o,c.email,c.password),r(!1)}catch(h){let d;h.message.includes("user-not-found")?d="Usu\xE1rio n\xE3o encontrado":h.message.includes("wrong-password")?d="Senha incorreta.":d="Ocorreu um erro. Por favor, tente mais tarde.",e(d),r(!1)}};return C.exports.useEffect(()=>()=>s(!0),[]),{auth:o,createUser:a,error:t,loading:n,logout:l,login:u}},vR="_home_3fxnk_1",wR="_search_form_3fxnk_33",ER="_noposts_3fxnk_67",nc={home:vR,search_form:wR,noposts:ER},$f=(t,e=null,n=null)=>{const[r,i]=C.exports.useState(null),[s,o]=C.exports.useState(null),[a,l]=C.exports.useState(null),[u,c]=C.exports.useState(!1);return C.exports.useEffect(()=>{async function h(){if(u)return;l(!0);const d=await S1(su,t);try{let m;e?m=await ec(d,mg("tagsArray","array-contains",e),tc("createdAt","desc")):n?m=await ec(d,mg("uid","==",n),tc("createdAt","desc")):m=await ec(d,tc("createdAt","desc")),await mR(m,y=>{i(y.docs.map(v=>({id:v.id,...v.data()})))}),l(!1)}catch(m){console.log(m),o(m.message),l(!1)}}h()},[t,e,n,u]),C.exports.useEffect(()=>()=>c(!0),[]),{documents:r,loading:a,error:s}},_R="_post_detail_1ms52_1",SR="_tags_1ms52_59",IR="_createdby_1ms52_89",rc={post_detail:_R,tags:SR,createdby:IR},b1=({post:t})=>F("div",{className:rc.post_detail,children:[w("img",{src:t.image,alt:t.title}),w("h2",{children:t.title}),w("p",{className:rc.createdby,children:t.createdBy}),w("div",{className:rc.tags,children:t.tagsArray.map(e=>F("p",{children:[w("span",{children:"#"}),e]},e))}),w(Rn,{to:`/posts/${t.id}`,className:"btn btn-outline",children:"Ler"})]}),TR=()=>{const[t,e]=C.exports.useState(""),{documents:n,loading:r}=$f("posts"),i=Al(),s=o=>{if(o.preventDefault(),t)return i(`/search?q=${t}`)};return F("div",{className:nc.home,children:[w("h1",{children:"Veja os nossos posts mais recentes"}),F("form",{onSubmit:s,className:nc.search_form,children:[w("input",{type:"text",placeholder:"Ou busque por tags...",onChange:o=>e(o.target.value)}),w("button",{className:"btn btn-dark",children:"Pesquisar"})]}),F("div",{children:[r&&w("p",{children:"Carregando..."}),n&&n.map(o=>w(b1,{post:o},o.id)),n&&n.length==0&&F("div",{className:nc.noposts,children:[w("p",{children:"N\xE3o foram encontrados posts"}),w(Rn,{to:"/posts/create",className:"btn",children:"Criar primeiro post"})]})]})]})},kR="_about_1w8h3_1",CR={about:kR},NR=()=>F("div",{className:CR.about,children:[F("h2",{children:["Sobre o Mini ",w("span",{children:"Blog"})]}),w("p",{children:"Este projeto consiste em um blog feito com React no Front-end e Firebase no Back-end."}),w(Rn,{to:"/posts/create",className:"btn",children:"Criar Post"})]}),AR="_login_7vzl9_1",DR={login:AR},RR=()=>{const[t,e]=C.exports.useState(""),[n,r]=C.exports.useState(""),[i,s]=C.exports.useState(""),{login:o,error:a,loading:l}=ou(),u=async c=>{c.preventDefault(),s("");const d=await o({email:t,password:n});console.log(d)};return C.exports.useEffect(()=>{a&&s(a)},[a]),F("div",{className:DR.login,children:[w("h1",{children:"Entrar"}),w("p",{children:"Fa\xE7a o login para utilizar o sistema"}),F("form",{onSubmit:u,children:[F("label",{children:[w("span",{children:"E-mail:"}),w("input",{type:"email",name:"email",required:!0,placeholder:"E-mail do usu\xE1rio",value:t,onChange:c=>e(c.target.value)})]}),F("label",{children:[w("span",{children:"Senha:"}),w("input",{type:"password",name:"password",required:!0,placeholder:"Insira sua senha",value:n,onChange:c=>r(c.target.value)})]}),!l&&w("button",{className:"btn",children:"Entrar"}),l&&w("button",{className:"btn",disabled:!0,children:"Aguarde..."}),i&&w("p",{className:"error",children:i})]})]})},xR="_register_1q1tc_1",PR={register:xR},OR=()=>{const[t,e]=C.exports.useState(""),[n,r]=C.exports.useState(""),[i,s]=C.exports.useState(""),[o,a]=C.exports.useState(""),[l,u]=C.exports.useState(""),{createUser:c,error:h,loading:d}=ou(),m=async y=>{y.preventDefault(),u("");const v={displayName:t,email:n,password:i};if(i!==o){u("As senhas precisam ser iguais");return}const A=await c(v);console.log(A)};return C.exports.useEffect(()=>{h&&u(h)},[h]),F("div",{className:PR.register,children:[w("h1",{children:"Cadastre-se para postar"}),w("p",{children:"Crie seu usu\xE1rio e compartilhe suas hist\xF3rias"}),F("form",{onSubmit:m,children:[F("label",{children:[w("span",{children:"Nome:"}),w("input",{type:"text",name:"displayName",required:!0,placeholder:"Nome do usu\xE1rio",value:t,onChange:y=>e(y.target.value)})]}),F("label",{children:[w("span",{children:"E-mail:"}),w("input",{type:"email",name:"email",required:!0,placeholder:"E-mail do usu\xE1rio",value:n,onChange:y=>r(y.target.value)})]}),F("label",{children:[w("span",{children:"Senha:"}),w("input",{type:"password",name:"password",required:!0,placeholder:"Insira sua senha",value:i,onChange:y=>s(y.target.value)})]}),F("label",{children:[w("span",{children:"Confirma\xE7\xE3o de senha:"}),w("input",{type:"password",name:"confirmPassword",required:!0,placeholder:"Confirme a sua senha",value:o,onChange:y=>a(y.target.value)})]}),!d&&w("button",{className:"btn",children:"Cadastrar"}),d&&w("button",{className:"btn",disabled:!0,children:"Aguarde..."}),l&&w("p",{className:"error",children:l})]})]})},LR="_create_post_yor5c_1",MR={create_post:LR},$R={loading:null,error:null},UR=(t,e)=>{switch(e.type){case"LOADING":return{loading:!0,error:null};case"INSERTED_DOC":return{loading:!1,error:null};case"ERROR":return{loading:!1,error:e.payload};default:return t}},bR=t=>{const[e,n]=C.exports.useReducer(UR,$R);return{insertDocument:async i=>{n({type:"LOADING"});try{const s={...i,createdAt:ge.now()},o=await pR(S1(su,t),s);n({type:"INSERTED_DOC",payload:o})}catch(s){n({type:"ERROR",payload:s.message})}},response:e}},FR=C.exports.createContext();function VR(){return C.exports.useContext(FR)}const BR=()=>{const[t,e]=C.exports.useState(""),[n,r]=C.exports.useState(""),[i,s]=C.exports.useState(""),[o,a]=C.exports.useState([]),[l,u]=C.exports.useState(""),{user:c}=VR(),{insertDocument:h,response:d}=bR("posts"),m=Al(),y=v=>{v.preventDefault(),u("");try{new URL(n)}catch{u("A imagem precisa ser uma URL.")}const A=o.split(",").map(p=>p.trim().toLowerCase());(!t||!n||!o||!i)&&u("Por favor, preencha todos os campos."),!l&&(h({title:t,image:n,body:i,tagsArray:A,uid:c.uid,createdBy:c.displayName}),setTimeout(()=>{m("/")},1e3))};return F("div",{className:MR.create_post,children:[w("h2",{children:"Criar post"}),w("p",{children:"Escreva sobre o que quiser e compartilhe o seu conhecimento!"}),F("form",{onSubmit:y,children:[F("label",{children:[w("span",{children:"T\xEDtulo:"}),w("input",{type:"text",name:"text",required:!0,placeholder:"Pense num bom t\xEDtulo...",onChange:v=>e(v.target.value),value:t})]}),F("label",{children:[w("span",{children:"URL da imagem:"}),w("input",{type:"text",name:"image",required:!0,placeholder:"Insira uma imagem que representa seu post",onChange:v=>r(v.target.value),value:n})]}),F("label",{children:[w("span",{children:"Conte\xFAdo:"}),w("textarea",{name:"body",required:!0,placeholder:"Insira o conte\xFAdo do post",onChange:v=>s(v.target.value),value:i})]}),F("label",{children:[w("span",{children:"Tags:"}),w("input",{type:"text",name:"tags",required:!0,placeholder:"Insira as tags separadas por v\xEDrgula",onChange:v=>a(v.target.value),value:o})]}),!d.loading&&w("button",{className:"btn",children:"Criar post!"}),d.loading&&w("button",{className:"btn",disabled:!0,children:"Aguarde..."}),d.error||l&&w("p",{className:"error",children:d.error||l})]})]})},zR="_dashboard_11zdf_1",jR="_noposts_11zdf_55",HR="_post_header_11zdf_79",WR="_post_row_11zdf_81",Xo={dashboard:zR,noposts:jR,post_header:HR,post_row:WR},qR={loading:null,error:null},KR=(t,e)=>{switch(e.type){case"LOADING":return{loading:!0,error:null};case"DELETED_DOC":return{loading:!1,error:null};case"ERROR":return{loading:!1,error:e.payload};default:return t}},GR=t=>{const[e,n]=C.exports.useReducer(KR,qR),r=async i=>{n({type:"LOADING"});try{const s=await fR(Rf(su,t,i));n({type:"DELETED_DOC",payload:r})}catch(s){n({type:"ERROR",payload:s.message})}};return{deleteDocument:r,response:e}},QR=()=>{const{user:t}=$v(),e=t.uid,{documents:n,loading:r,error:i}=$f("posts",null,e),{deleteDocument:s}=GR("posts");return r?w("p",{children:"Carregando..."}):F("div",{className:Xo.dashboard,children:[w("h2",{children:"Dashboard"}),w("p",{children:"Gerencie seus posts"}),n&&n.length===0?F("div",{className:Xo.noposts,children:[w("p",{children:"N\xE3o foram encontrados posts."}),w(Rn,{to:"/posts/create",className:"btn",children:"Criar primeiro post"})]}):F(Ha,{children:[F("div",{className:Xo.post_header,children:[w("span",{children:"T\xEDtulo"}),w("span",{children:"A\xE7\xF5es"})]}),n&&n.map(o=>F("div",{className:Xo.post_row,children:[w("p",{children:o.title}),F("div",{children:[w(Rn,{to:`/posts/${o.id}`,className:"btn btn-outline",children:"Ver"}),w(Rn,{to:`/posts/edit/${o.id}`,className:"btn btn-outline",children:"Editar"}),w("button",{onClick:()=>s(o.id),className:"btn btn-outline btn-danger",children:"Excluir"})]})]},o.id))]})]})},YR="_navbar_1lzf6_1",XR="_brand_1lzf6_31",JR="_links_list_1lzf6_49",ZR="_active_1lzf6_79",Vt={navbar:YR,brand:XR,links_list:JR,active:ZR},ex=()=>{const{user:t}=$v(),{logout:e}=ou();return F("nav",{className:Vt.navbar,children:[F(Gn,{to:"/",className:Vt.brand,children:["Mini ",w("span",{children:"Blog"})]}),F("ul",{className:Vt.links_list,children:[w("li",{children:w(Gn,{to:"/",className:({isActive:n})=>n?Vt.active:"",children:"Home"})}),!t&&F(Ha,{children:[w("li",{children:w(Gn,{to:"/login",className:({isActive:n})=>n?Vt.active:"",children:"Entrar"})}),w("li",{children:w(Gn,{to:"/register",className:({isActive:n})=>n?Vt.active:"",children:"Cadastrar"})})]}),t&&F(Ha,{children:[w("li",{children:w(Gn,{to:"/posts/create",className:({isActive:n})=>n?Vt.active:"",children:"Novo Post"})}),w("li",{children:w(Gn,{to:"/dashboard",className:({isActive:n})=>n?Vt.active:"",children:"Dashboard"})})]}),w("li",{children:w(Gn,{to:"/about",className:({isActive:n})=>n?Vt.active:"",children:"Sobre"})}),t&&w("li",{children:w("button",{onClick:e,children:"Sair"})})]})]})},tx="_footer_1shoi_1",nx={footer:tx},rx=()=>F("footer",{className:nx.footer,children:[w("h3",{children:"Escreva sobre o que voc\xEA tem interesse!"}),w("p",{children:"Mini Blog \xA9 2022"})]}),ix="_search_container_145zc_1",sx="_noposts_145zc_49",vg={search_container:ix,noposts:sx},ox=()=>{const{search:t}=ki();return C.exports.useMemo(()=>new URLSearchParams(t),[t])},ax=()=>{const e=ox().get("q"),{documents:n}=$f("posts",e);return F("div",{className:vg.search_container,children:[w("h2",{children:"Search"}),F("div",{children:[n&&n.length===0&&F("div",{className:vg.noposts,children:[w("p",{children:"N\xE3o foram encontrados posts \xE0 partir da sua busca."}),w(Rn,{to:"/",className:"btn btn-dark",children:"Voltar"})]}),n&&n.map(r=>w(b1,{post:r},r.id))]})]})},lx="_post_container_bakcf_1",ux="_tags_bakcf_17",wg={post_container:lx,tags:ux},cx=(t,e)=>{const[n,r]=C.exports.useState(null),[i,s]=C.exports.useState(null),[o,a]=C.exports.useState(null),[l,u]=C.exports.useState(!1);return C.exports.useEffect(()=>{async function c(){if(!l){a(!0);try{const h=await Rf(su,t,e),d=await dR(h);r(d.data()),a(!1)}catch(h){console.log(h),s(h.message),a(!1)}}}c()},[t,e,l]),C.exports.useEffect(()=>()=>u(!0),[]),{document:n,loading:o,error:i}},hx=()=>{const{id:t}=NS(),{document:e,loading:n}=cx("posts",t);return F("div",{className:wg.post_container,children:[n&&w("p",{children:"Carregando post..."}),e&&F(Ha,{children:[w("h1",{children:e.title}),w("img",{src:e.image,alt:e.title}),w("p",{children:e.body}),w("h3",{children:"Este post trata sobre: "}),w("div",{className:wg.tags,children:e.tagsArray.map(r=>F("p",{children:[w("span",{children:"#"}),r]},r))})]})]})};function dx(){const[t,e]=C.exports.useState(void 0),{auth:n}=ou(),r=t===void 0;return C.exports.useEffect(()=>{XT(n,i=>{e(i)})},[n]),r?w("p",{children:"Carregando..."}):w("div",{className:"App",children:w(jS,{value:{user:t},children:F(LS,{children:[w(ex,{}),w("div",{className:"container",children:F(xS,{children:[w(Bt,{path:"/",element:w(TR,{})}),w(Bt,{path:"/about",element:w(NR,{})}),w(Bt,{path:"/search",element:w(ax,{})}),w(Bt,{path:"/posts/:id",element:w(hx,{})}),w(Bt,{path:"/login",element:t?w(jo,{to:"/"}):w(RR,{})}),w(Bt,{path:"/register",element:t?w(jo,{to:"/"}):w(OR,{})}),w(Bt,{path:"/posts/create",element:t?w(BR,{}):w(jo,{to:"/login"})}),w(Bt,{path:"/dashboard",element:t?w(QR,{}):w(jo,{to:"/login"})})]})}),w(rx,{})]})})})}ic.createRoot(document.getElementById("root")).render(w(tE.StrictMode,{children:w(dx,{})}));
