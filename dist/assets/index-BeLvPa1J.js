var Yy=Object.defineProperty;var Xy=(t,e,n)=>e in t?Yy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var jl=(t,e,n)=>Xy(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Jy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var im={exports:{}},Ba={},om={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bi=Symbol.for("react.element"),Zy=Symbol.for("react.portal"),e0=Symbol.for("react.fragment"),t0=Symbol.for("react.strict_mode"),n0=Symbol.for("react.profiler"),r0=Symbol.for("react.provider"),s0=Symbol.for("react.context"),i0=Symbol.for("react.forward_ref"),o0=Symbol.for("react.suspense"),a0=Symbol.for("react.memo"),l0=Symbol.for("react.lazy"),Lh=Symbol.iterator;function c0(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var am={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lm=Object.assign,cm={};function ms(t,e,n){this.props=t,this.context=e,this.refs=cm,this.updater=n||am}ms.prototype.isReactComponent={};ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function um(){}um.prototype=ms.prototype;function zu(t,e,n){this.props=t,this.context=e,this.refs=cm,this.updater=n||am}var Vu=zu.prototype=new um;Vu.constructor=zu;lm(Vu,ms.prototype);Vu.isPureReactComponent=!0;var Fh=Array.isArray,dm=Object.prototype.hasOwnProperty,Bu={current:null},hm={key:!0,ref:!0,__self:!0,__source:!0};function fm(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)dm.call(e,r)&&!hm.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];s.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Bi,type:t,key:i,ref:o,props:s,_owner:Bu.current}}function u0(t,e){return{$$typeof:Bi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bi}function d0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uh=/\/+/g;function Ol(t,e){return typeof t=="object"&&t!==null&&t.key!=null?d0(""+t.key):e.toString(36)}function Po(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bi:case Zy:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Ol(o,0):r,Fh(s)?(n="",t!=null&&(n=t.replace(Uh,"$&/")+"/"),Po(s,e,n,"",function(u){return u})):s!=null&&(Wu(s)&&(s=u0(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Uh,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Fh(t))for(var a=0;a<t.length;a++){i=t[a];var c=r+Ol(i,a);o+=Po(i,e,n,c,s)}else if(c=c0(t),typeof c=="function")for(t=c.call(t),a=0;!(i=t.next()).done;)i=i.value,c=r+Ol(i,a++),o+=Po(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function lo(t,e,n){if(t==null)return t;var r=[],s=0;return Po(t,r,"","",function(i){return e.call(n,i,s++)}),r}function h0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Be={current:null},Ao={transition:null},f0={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:Bu};function pm(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:lo,forEach:function(t,e,n){lo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return lo(t,function(){e++}),e},toArray:function(t){return lo(t,function(e){return e})||[]},only:function(t){if(!Wu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=ms;B.Fragment=e0;B.Profiler=n0;B.PureComponent=zu;B.StrictMode=t0;B.Suspense=o0;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f0;B.act=pm;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=lm({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Bu.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)dm.call(e,c)&&!hm.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Bi,type:t.type,key:s,ref:i,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:s0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:r0,_context:t},t.Consumer=t};B.createElement=fm;B.createFactory=function(t){var e=fm.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:i0,render:t}};B.isValidElement=Wu;B.lazy=function(t){return{$$typeof:l0,_payload:{_status:-1,_result:t},_init:h0}};B.memo=function(t,e){return{$$typeof:a0,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=Ao.transition;Ao.transition={};try{t()}finally{Ao.transition=e}};B.unstable_act=pm;B.useCallback=function(t,e){return Be.current.useCallback(t,e)};B.useContext=function(t){return Be.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Be.current.useDeferredValue(t)};B.useEffect=function(t,e){return Be.current.useEffect(t,e)};B.useId=function(){return Be.current.useId()};B.useImperativeHandle=function(t,e,n){return Be.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Be.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Be.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Be.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Be.current.useReducer(t,e,n)};B.useRef=function(t){return Be.current.useRef(t)};B.useState=function(t){return Be.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Be.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Be.current.useTransition()};B.version="18.3.1";om.exports=B;var I=om.exports;const ts=Jy(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0=I,m0=Symbol.for("react.element"),g0=Symbol.for("react.fragment"),v0=Object.prototype.hasOwnProperty,_0=p0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y0={key:!0,ref:!0,__self:!0,__source:!0};function mm(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)v0.call(e,r)&&!y0.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:m0,type:t,key:i,ref:o,props:s,_owner:_0.current}}Ba.Fragment=g0;Ba.jsx=mm;Ba.jsxs=mm;im.exports=Ba;var l=im.exports,xc={},gm={exports:{}},nt={},vm={exports:{}},_m={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,D){var M=P.length;P.push(D);e:for(;0<M;){var ae=M-1>>>1,pe=P[ae];if(0<s(pe,D))P[ae]=D,P[M]=pe,M=ae;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],M=P.pop();if(M!==D){P[0]=M;e:for(var ae=0,pe=P.length,Ut=pe>>>1;ae<Ut;){var mt=2*(ae+1)-1,Tr=P[mt],zt=mt+1,Kn=P[zt];if(0>s(Tr,M))zt<pe&&0>s(Kn,Tr)?(P[ae]=Kn,P[zt]=M,ae=zt):(P[ae]=Tr,P[mt]=M,ae=mt);else if(zt<pe&&0>s(Kn,M))P[ae]=Kn,P[zt]=M,ae=zt;else break e}}return D}function s(P,D){var M=P.sortIndex-D.sortIndex;return M!==0?M:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],u=[],d=1,h=null,f=3,v=!1,_=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,e(c,D);else break;D=n(u)}}function x(P){if(y=!1,g(P),!_)if(n(c)!==null)_=!0,Ir(k);else{var D=n(u);D!==null&&Is(x,D.startTime-P)}}function k(P,D){_=!1,y&&(y=!1,p(T),T=-1),v=!0;var M=f;try{for(g(D),h=n(c);h!==null&&(!(h.expirationTime>D)||P&&!Ye());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,f=h.priorityLevel;var pe=ae(h.expirationTime<=D);D=t.unstable_now(),typeof pe=="function"?h.callback=pe:h===n(c)&&r(c),g(D)}else r(c);h=n(c)}if(h!==null)var Ut=!0;else{var mt=n(u);mt!==null&&Is(x,mt.startTime-D),Ut=!1}return Ut}finally{h=null,f=M,v=!1}}var w=!1,N=null,T=-1,q=5,L=-1;function Ye(){return!(t.unstable_now()-L<q)}function cn(){if(N!==null){var P=t.unstable_now();L=P;var D=!0;try{D=N(!0,P)}finally{D?Gn():(w=!1,N=null)}}else w=!1}var Gn;if(typeof m=="function")Gn=function(){m(cn)};else if(typeof MessageChannel<"u"){var bs=new MessageChannel,Il=bs.port2;bs.port1.onmessage=cn,Gn=function(){Il.postMessage(null)}}else Gn=function(){C(cn,0)};function Ir(P){N=P,w||(w=!0,Gn())}function Is(P,D){T=C(function(){P(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,Ir(k))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var M=f;f=D;try{return P()}finally{f=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=f;f=P;try{return D()}finally{f=M}},t.unstable_scheduleCallback=function(P,D,M){var ae=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ae+M:ae):M=ae,P){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=M+pe,P={id:d++,callback:D,priorityLevel:P,startTime:M,expirationTime:pe,sortIndex:-1},M>ae?(P.sortIndex=M,e(u,P),n(c)===null&&P===n(u)&&(y?(p(T),T=-1):y=!0,Is(x,M-ae))):(P.sortIndex=pe,e(c,P),_||v||(_=!0,Ir(k))),P},t.unstable_shouldYield=Ye,t.unstable_wrapCallback=function(P){var D=f;return function(){var M=f;f=D;try{return P.apply(this,arguments)}finally{f=M}}}})(_m);vm.exports=_m;var x0=vm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=I,et=x0;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ym=new Set,hi={};function Er(t,e){ns(t,e),ns(t+"Capture",e)}function ns(t,e){for(hi[t]=e,t=0;t<e.length;t++)ym.add(e[t])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wc=Object.prototype.hasOwnProperty,C0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zh={},Vh={};function E0(t){return wc.call(Vh,t)?!0:wc.call(zh,t)?!1:C0.test(t)?Vh[t]=!0:(zh[t]=!0,!1)}function S0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function N0(t,e,n,r){if(e===null||typeof e>"u"||S0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function We(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new We(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new We(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new We(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new We(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new We(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new We(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new We(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new We(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new We(t,5,!1,t.toLowerCase(),null,!1,!1)});var $u=/[\-:]([a-z])/g;function Hu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($u,Hu);Ae[e]=new We(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($u,Hu);Ae[e]=new We(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($u,Hu);Ae[e]=new We(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new We(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new We(t,1,!1,t.toLowerCase(),null,!0,!0)});function qu(t,e,n,r){var s=Ae.hasOwnProperty(e)?Ae[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(N0(e,n,s,r)&&(n=null),r||s===null?E0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ln=w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),Rr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),Cc=Symbol.for("react.profiler"),xm=Symbol.for("react.provider"),wm=Symbol.for("react.context"),Ku=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Sc=Symbol.for("react.suspense_list"),Qu=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),Cm=Symbol.for("react.offscreen"),Bh=Symbol.iterator;function As(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,Dl;function Hs(t){if(Dl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dl=e&&e[1]||""}return`
`+Dl+t}var Ml=!1;function Ll(t,e){if(!t||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hs(t):""}function k0(t){switch(t.tag){case 5:return Hs(t.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 2:case 15:return t=Ll(t.type,!1),t;case 11:return t=Ll(t.type.render,!1),t;case 1:return t=Ll(t.type,!0),t;default:return""}}function Nc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jr:return"Fragment";case Rr:return"Portal";case Cc:return"Profiler";case Gu:return"StrictMode";case Ec:return"Suspense";case Sc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wm:return(t.displayName||"Context")+".Consumer";case xm:return(t._context.displayName||"Context")+".Provider";case Ku:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qu:return e=t.displayName||null,e!==null?e:Nc(t.type)||"Memo";case hn:e=t._payload,t=t._init;try{return Nc(t(e))}catch{}}return null}function b0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nc(e);case 8:return e===Gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Em(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I0(t){var e=Em(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uo(t){t._valueTracker||(t._valueTracker=I0(t))}function Sm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Em(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Go(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kc(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Nm(t,e){e=e.checked,e!=null&&qu(t,"checked",e,!1)}function bc(t,e){Nm(t,e);var n=Dn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ic(t,e.type,Dn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $h(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ic(t,e,n){(e!=="number"||Go(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qs=Array.isArray;function Hr(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dn(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Tc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(qs(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dn(n)}}function km(t,e){var n=Dn(e.value),r=Dn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ho,Im=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ho.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T0=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){T0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function Tm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function Pm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Tm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var P0=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ac(t,e){if(e){if(P0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Rc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jc=null;function Yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oc=null,qr=null,Gr=null;function Gh(t){if(t=Hi(t)){if(typeof Oc!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Ga(e),Oc(t.stateNode,t.type,e))}}function Am(t){qr?Gr?Gr.push(t):Gr=[t]:qr=t}function Rm(){if(qr){var t=qr,e=Gr;if(Gr=qr=null,Gh(t),e)for(t=0;t<e.length;t++)Gh(e[t])}}function jm(t,e){return t(e)}function Om(){}var Fl=!1;function Dm(t,e,n){if(Fl)return t(e,n);Fl=!0;try{return jm(t,e,n)}finally{Fl=!1,(qr!==null||Gr!==null)&&(Om(),Rm())}}function pi(t,e){var n=t.stateNode;if(n===null)return null;var r=Ga(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Dc=!1;if(en)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{Dc=!1}function A0(t,e,n,r,s,i,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Js=!1,Ko=null,Qo=!1,Mc=null,R0={onError:function(t){Js=!0,Ko=t}};function j0(t,e,n,r,s,i,o,a,c){Js=!1,Ko=null,A0.apply(R0,arguments)}function O0(t,e,n,r,s,i,o,a,c){if(j0.apply(this,arguments),Js){if(Js){var u=Ko;Js=!1,Ko=null}else throw Error(E(198));Qo||(Qo=!0,Mc=u)}}function Sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kh(t){if(Sr(t)!==t)throw Error(E(188))}function D0(t){var e=t.alternate;if(!e){if(e=Sr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Kh(s),t;if(i===r)return Kh(s),e;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Lm(t){return t=D0(t),t!==null?Fm(t):null}function Fm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fm(t);if(e!==null)return e;t=t.sibling}return null}var Um=et.unstable_scheduleCallback,Qh=et.unstable_cancelCallback,M0=et.unstable_shouldYield,L0=et.unstable_requestPaint,ge=et.unstable_now,F0=et.unstable_getCurrentPriorityLevel,Xu=et.unstable_ImmediatePriority,zm=et.unstable_UserBlockingPriority,Yo=et.unstable_NormalPriority,U0=et.unstable_LowPriority,Vm=et.unstable_IdlePriority,Wa=null,jt=null;function z0(t){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Wa,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:W0,V0=Math.log,B0=Math.LN2;function W0(t){return t>>>=0,t===0?32:31-(V0(t)/B0|0)|0}var fo=64,po=4194304;function Gs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Gs(a):(i&=o,i!==0&&(r=Gs(i)))}else o=n&~s,o!==0?r=Gs(o):i!==0&&(r=Gs(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-St(e),s=1<<n,r|=t[n],e&=~s;return r}function $0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-St(i),a=1<<o,c=s[o];c===-1?(!(a&n)||a&r)&&(s[o]=$0(a,e)):c<=e&&(t.expiredLanes|=a),i&=~a}}function Lc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bm(){var t=fo;return fo<<=1,!(fo&4194240)&&(fo=64),t}function Ul(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-St(e),t[e]=n}function q0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-St(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Ju(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-St(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var G=0;function Wm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $m,Zu,Hm,qm,Gm,Fc=!1,mo=[],Cn=null,En=null,Sn=null,mi=new Map,gi=new Map,pn=[],G0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yh(t,e){switch(t){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":mi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(e.pointerId)}}function js(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Hi(e),e!==null&&Zu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function K0(t,e,n,r,s){switch(e){case"focusin":return Cn=js(Cn,t,e,n,r,s),!0;case"dragenter":return En=js(En,t,e,n,r,s),!0;case"mouseover":return Sn=js(Sn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return mi.set(i,js(mi.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,gi.set(i,js(gi.get(i)||null,t,e,n,r,s)),!0}return!1}function Km(t){var e=nr(t.target);if(e!==null){var n=Sr(e);if(n!==null){if(e=n.tag,e===13){if(e=Mm(n),e!==null){t.blockedOn=e,Gm(t.priority,function(){Hm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jc=r,n.target.dispatchEvent(r),jc=null}else return e=Hi(n),e!==null&&Zu(e),t.blockedOn=n,!1;e.shift()}return!0}function Xh(t,e,n){Ro(t)&&n.delete(e)}function Q0(){Fc=!1,Cn!==null&&Ro(Cn)&&(Cn=null),En!==null&&Ro(En)&&(En=null),Sn!==null&&Ro(Sn)&&(Sn=null),mi.forEach(Xh),gi.forEach(Xh)}function Os(t,e){t.blockedOn===e&&(t.blockedOn=null,Fc||(Fc=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,Q0)))}function vi(t){function e(s){return Os(s,t)}if(0<mo.length){Os(mo[0],t);for(var n=1;n<mo.length;n++){var r=mo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Cn!==null&&Os(Cn,t),En!==null&&Os(En,t),Sn!==null&&Os(Sn,t),mi.forEach(e),gi.forEach(e),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)Km(n),n.blockedOn===null&&pn.shift()}var Kr=ln.ReactCurrentBatchConfig,Jo=!0;function Y0(t,e,n,r){var s=G,i=Kr.transition;Kr.transition=null;try{G=1,ed(t,e,n,r)}finally{G=s,Kr.transition=i}}function X0(t,e,n,r){var s=G,i=Kr.transition;Kr.transition=null;try{G=4,ed(t,e,n,r)}finally{G=s,Kr.transition=i}}function ed(t,e,n,r){if(Jo){var s=Uc(t,e,n,r);if(s===null)Ql(t,e,r,Zo,n),Yh(t,r);else if(K0(s,t,e,n,r))r.stopPropagation();else if(Yh(t,r),e&4&&-1<G0.indexOf(t)){for(;s!==null;){var i=Hi(s);if(i!==null&&$m(i),i=Uc(t,e,n,r),i===null&&Ql(t,e,r,Zo,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ql(t,e,r,null,n)}}var Zo=null;function Uc(t,e,n,r){if(Zo=null,t=Yu(r),t=nr(t),t!==null)if(e=Sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zo=t,null}function Qm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F0()){case Xu:return 1;case zm:return 4;case Yo:case U0:return 16;case Vm:return 536870912;default:return 16}default:return 16}}var yn=null,td=null,jo=null;function Ym(){if(jo)return jo;var t,e=td,n=e.length,r,s="value"in yn?yn.value:yn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return jo=s.slice(t,1<r?1-r:void 0)}function Oo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function go(){return!0}function Jh(){return!1}function rt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?go:Jh,this.isPropagationStopped=Jh,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),e}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nd=rt(gs),$i=ue({},gs,{view:0,detail:0}),J0=rt($i),zl,Vl,Ds,$a=ue({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(zl=t.screenX-Ds.screenX,Vl=t.screenY-Ds.screenY):Vl=zl=0,Ds=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Vl}}),Zh=rt($a),Z0=ue({},$a,{dataTransfer:0}),ex=rt(Z0),tx=ue({},$i,{relatedTarget:0}),Bl=rt(tx),nx=ue({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),rx=rt(nx),sx=ue({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ix=rt(sx),ox=ue({},gs,{data:0}),ef=rt(ox),ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ux(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cx[t])?!!e[t]:!1}function rd(){return ux}var dx=ue({},$i,{key:function(t){if(t.key){var e=ax[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rd,charCode:function(t){return t.type==="keypress"?Oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hx=rt(dx),fx=ue({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tf=rt(fx),px=ue({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rd}),mx=rt(px),gx=ue({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=rt(gx),_x=ue({},$a,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=rt(_x),xx=[9,13,27,32],sd=en&&"CompositionEvent"in window,Zs=null;en&&"documentMode"in document&&(Zs=document.documentMode);var wx=en&&"TextEvent"in window&&!Zs,Xm=en&&(!sd||Zs&&8<Zs&&11>=Zs),nf=" ",rf=!1;function Jm(t,e){switch(t){case"keyup":return xx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Or=!1;function Cx(t,e){switch(t){case"compositionend":return Zm(e);case"keypress":return e.which!==32?null:(rf=!0,nf);case"textInput":return t=e.data,t===nf&&rf?null:t;default:return null}}function Ex(t,e){if(Or)return t==="compositionend"||!sd&&Jm(t,e)?(t=Ym(),jo=td=yn=null,Or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xm&&e.locale!=="ko"?null:e.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sx[t.type]:e==="textarea"}function eg(t,e,n,r){Am(r),e=ea(e,"onChange"),0<e.length&&(n=new nd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ei=null,_i=null;function Nx(t){dg(t,0)}function Ha(t){var e=Lr(t);if(Sm(e))return t}function kx(t,e){if(t==="change")return e}var tg=!1;if(en){var Wl;if(en){var $l="oninput"in document;if(!$l){var of=document.createElement("div");of.setAttribute("oninput","return;"),$l=typeof of.oninput=="function"}Wl=$l}else Wl=!1;tg=Wl&&(!document.documentMode||9<document.documentMode)}function af(){ei&&(ei.detachEvent("onpropertychange",ng),_i=ei=null)}function ng(t){if(t.propertyName==="value"&&Ha(_i)){var e=[];eg(e,_i,t,Yu(t)),Dm(Nx,e)}}function bx(t,e,n){t==="focusin"?(af(),ei=e,_i=n,ei.attachEvent("onpropertychange",ng)):t==="focusout"&&af()}function Ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ha(_i)}function Tx(t,e){if(t==="click")return Ha(e)}function Px(t,e){if(t==="input"||t==="change")return Ha(e)}function Ax(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var It=typeof Object.is=="function"?Object.is:Ax;function yi(t,e){if(It(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!wc.call(e,s)||!It(t[s],e[s]))return!1}return!0}function lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cf(t,e){var n=lf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lf(n)}}function rg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sg(){for(var t=window,e=Go();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Go(t.document)}return e}function id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rx(t){var e=sg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rg(n.ownerDocument.documentElement,n)){if(r!==null&&id(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=cf(n,i);var o=cf(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jx=en&&"documentMode"in document&&11>=document.documentMode,Dr=null,zc=null,ti=null,Vc=!1;function uf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vc||Dr==null||Dr!==Go(r)||(r=Dr,"selectionStart"in r&&id(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ti&&yi(ti,r)||(ti=r,r=ea(zc,"onSelect"),0<r.length&&(e=new nd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Dr)))}function vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mr={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},Hl={},ig={};en&&(ig=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function qa(t){if(Hl[t])return Hl[t];if(!Mr[t])return t;var e=Mr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ig)return Hl[t]=e[n];return t}var og=qa("animationend"),ag=qa("animationiteration"),lg=qa("animationstart"),cg=qa("transitionend"),ug=new Map,df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(t,e){ug.set(t,e),Er(e,[t])}for(var ql=0;ql<df.length;ql++){var Gl=df[ql],Ox=Gl.toLowerCase(),Dx=Gl[0].toUpperCase()+Gl.slice(1);Vn(Ox,"on"+Dx)}Vn(og,"onAnimationEnd");Vn(ag,"onAnimationIteration");Vn(lg,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(cg,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ks));function hf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,O0(r,e,void 0,t),t.currentTarget=null}function dg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&s.isPropagationStopped())break e;hf(s,a,u),i=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&s.isPropagationStopped())break e;hf(s,a,u),i=c}}}if(Qo)throw t=Mc,Qo=!1,Mc=null,t}function ne(t,e){var n=e[qc];n===void 0&&(n=e[qc]=new Set);var r=t+"__bubble";n.has(r)||(hg(e,t,2,!1),n.add(r))}function Kl(t,e,n){var r=0;e&&(r|=4),hg(n,t,r,e)}var _o="_reactListening"+Math.random().toString(36).slice(2);function xi(t){if(!t[_o]){t[_o]=!0,ym.forEach(function(n){n!=="selectionchange"&&(Mx.has(n)||Kl(n,!1,t),Kl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_o]||(e[_o]=!0,Kl("selectionchange",!1,e))}}function hg(t,e,n,r){switch(Qm(e)){case 1:var s=Y0;break;case 4:s=X0;break;default:s=ed}n=s.bind(null,e,n,t),s=void 0,!Dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Ql(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;a!==null;){if(o=nr(a),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Dm(function(){var u=i,d=Yu(n),h=[];e:{var f=ug.get(t);if(f!==void 0){var v=nd,_=t;switch(t){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":v=hx;break;case"focusin":_="focus",v=Bl;break;case"focusout":_="blur",v=Bl;break;case"beforeblur":case"afterblur":v=Bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=mx;break;case og:case ag:case lg:v=rx;break;case cg:v=vx;break;case"scroll":v=J0;break;case"wheel":v=yx;break;case"copy":case"cut":case"paste":v=ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=tf}var y=(e&4)!==0,C=!y&&t==="scroll",p=y?f!==null?f+"Capture":null:f;y=[];for(var m=u,g;m!==null;){g=m;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,p!==null&&(x=pi(m,p),x!=null&&y.push(wi(m,x,g)))),C)break;m=m.return}0<y.length&&(f=new v(f,_,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",f&&n!==jc&&(_=n.relatedTarget||n.fromElement)&&(nr(_)||_[tn]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?nr(_):null,_!==null&&(C=Sr(_),_!==C||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(y=Zh,x="onMouseLeave",p="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=tf,x="onPointerLeave",p="onPointerEnter",m="pointer"),C=v==null?f:Lr(v),g=_==null?f:Lr(_),f=new y(x,m+"leave",v,n,d),f.target=C,f.relatedTarget=g,x=null,nr(d)===u&&(y=new y(p,m+"enter",_,n,d),y.target=g,y.relatedTarget=C,x=y),C=x,v&&_)t:{for(y=v,p=_,m=0,g=y;g;g=Pr(g))m++;for(g=0,x=p;x;x=Pr(x))g++;for(;0<m-g;)y=Pr(y),m--;for(;0<g-m;)p=Pr(p),g--;for(;m--;){if(y===p||p!==null&&y===p.alternate)break t;y=Pr(y),p=Pr(p)}y=null}else y=null;v!==null&&ff(h,f,v,y,!1),_!==null&&C!==null&&ff(h,C,_,y,!0)}}e:{if(f=u?Lr(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var k=kx;else if(sf(f))if(tg)k=Px;else{k=Ix;var w=bx}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Tx);if(k&&(k=k(t,u))){eg(h,k,n,d);break e}w&&w(t,f,u),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Ic(f,"number",f.value)}switch(w=u?Lr(u):window,t){case"focusin":(sf(w)||w.contentEditable==="true")&&(Dr=w,zc=u,ti=null);break;case"focusout":ti=zc=Dr=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,uf(h,n,d);break;case"selectionchange":if(jx)break;case"keydown":case"keyup":uf(h,n,d)}var N;if(sd)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Or?Jm(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Xm&&n.locale!=="ko"&&(Or||T!=="onCompositionStart"?T==="onCompositionEnd"&&Or&&(N=Ym()):(yn=d,td="value"in yn?yn.value:yn.textContent,Or=!0)),w=ea(u,T),0<w.length&&(T=new ef(T,t,null,n,d),h.push({event:T,listeners:w}),N?T.data=N:(N=Zm(n),N!==null&&(T.data=N)))),(N=wx?Cx(t,n):Ex(t,n))&&(u=ea(u,"onBeforeInput"),0<u.length&&(d=new ef("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=N))}dg(h,e)})}function wi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ea(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=pi(t,n),i!=null&&r.unshift(wi(t,i,s)),i=pi(t,e),i!=null&&r.push(wi(t,i,s))),t=t.return}return r}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ff(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,s?(c=pi(n,i),c!=null&&o.unshift(wi(n,c,a))):s||(c=pi(n,i),c!=null&&o.push(wi(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Lx=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function pf(t){return(typeof t=="string"?t:""+t).replace(Lx,`
`).replace(Fx,"")}function yo(t,e,n){if(e=pf(e),pf(t)!==e&&n)throw Error(E(425))}function ta(){}var Bc=null,Wc=null;function $c(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hc=typeof setTimeout=="function"?setTimeout:void 0,Ux=typeof clearTimeout=="function"?clearTimeout:void 0,mf=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof mf<"u"?function(t){return mf.resolve(null).then(t).catch(Vx)}:Hc;function Vx(t){setTimeout(function(){throw t})}function Yl(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),vi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);vi(e)}function Nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),Rt="__reactFiber$"+vs,Ci="__reactProps$"+vs,tn="__reactContainer$"+vs,qc="__reactEvents$"+vs,Bx="__reactListeners$"+vs,Wx="__reactHandles$"+vs;function nr(t){var e=t[Rt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tn]||n[Rt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gf(t);t!==null;){if(n=t[Rt])return n;t=gf(t)}return e}t=n,n=t.parentNode}return null}function Hi(t){return t=t[Rt]||t[tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Lr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Ga(t){return t[Ci]||null}var Gc=[],Fr=-1;function Bn(t){return{current:t}}function re(t){0>Fr||(t.current=Gc[Fr],Gc[Fr]=null,Fr--)}function te(t,e){Fr++,Gc[Fr]=t.current,t.current=e}var Mn={},Me=Bn(Mn),Ge=Bn(!1),dr=Mn;function rs(t,e){var n=t.type.contextTypes;if(!n)return Mn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ke(t){return t=t.childContextTypes,t!=null}function na(){re(Ge),re(Me)}function vf(t,e,n){if(Me.current!==Mn)throw Error(E(168));te(Me,e),te(Ge,n)}function fg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(E(108,b0(t)||"Unknown",s));return ue({},n,r)}function ra(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,dr=Me.current,te(Me,t),te(Ge,Ge.current),!0}function _f(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=fg(t,e,dr),r.__reactInternalMemoizedMergedChildContext=t,re(Ge),re(Me),te(Me,t)):re(Ge),te(Ge,n)}var Wt=null,Ka=!1,Xl=!1;function pg(t){Wt===null?Wt=[t]:Wt.push(t)}function $x(t){Ka=!0,pg(t)}function Wn(){if(!Xl&&Wt!==null){Xl=!0;var t=0,e=G;try{var n=Wt;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wt=null,Ka=!1}catch(s){throw Wt!==null&&(Wt=Wt.slice(t+1)),Um(Xu,Wn),s}finally{G=e,Xl=!1}}return null}var Ur=[],zr=0,sa=null,ia=0,it=[],ot=0,hr=null,qt=1,Gt="";function Xn(t,e){Ur[zr++]=ia,Ur[zr++]=sa,sa=t,ia=e}function mg(t,e,n){it[ot++]=qt,it[ot++]=Gt,it[ot++]=hr,hr=t;var r=qt;t=Gt;var s=32-St(r)-1;r&=~(1<<s),n+=1;var i=32-St(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,qt=1<<32-St(e)+s|n<<s|r,Gt=i+t}else qt=1<<i|n<<s|r,Gt=t}function od(t){t.return!==null&&(Xn(t,1),mg(t,1,0))}function ad(t){for(;t===sa;)sa=Ur[--zr],Ur[zr]=null,ia=Ur[--zr],Ur[zr]=null;for(;t===hr;)hr=it[--ot],it[ot]=null,Gt=it[--ot],it[ot]=null,qt=it[--ot],it[ot]=null}var Ze=null,Je=null,ie=!1,wt=null;function gg(t,e){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Je=Nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:qt,overflow:Gt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ze=t,Je=null,!0):!1;default:return!1}}function Kc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qc(t){if(ie){var e=Je;if(e){var n=e;if(!yf(t,e)){if(Kc(t))throw Error(E(418));e=Nn(n.nextSibling);var r=Ze;e&&yf(t,e)?gg(r,n):(t.flags=t.flags&-4097|2,ie=!1,Ze=t)}}else{if(Kc(t))throw Error(E(418));t.flags=t.flags&-4097|2,ie=!1,Ze=t}}}function xf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function xo(t){if(t!==Ze)return!1;if(!ie)return xf(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$c(t.type,t.memoizedProps)),e&&(e=Je)){if(Kc(t))throw vg(),Error(E(418));for(;e;)gg(t,e),e=Nn(e.nextSibling)}if(xf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Je=Nn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Je=null}}else Je=Ze?Nn(t.stateNode.nextSibling):null;return!0}function vg(){for(var t=Je;t;)t=Nn(t.nextSibling)}function ss(){Je=Ze=null,ie=!1}function ld(t){wt===null?wt=[t]:wt.push(t)}var Hx=ln.ReactCurrentBatchConfig;function Ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function wo(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wf(t){var e=t._init;return e(t._payload)}function _g(t){function e(p,m){if(t){var g=p.deletions;g===null?(p.deletions=[m],p.flags|=16):g.push(m)}}function n(p,m){if(!t)return null;for(;m!==null;)e(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function s(p,m){return p=Tn(p,m),p.index=0,p.sibling=null,p}function i(p,m,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<m?(p.flags|=2,m):g):(p.flags|=2,m)):(p.flags|=1048576,m)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,m,g,x){return m===null||m.tag!==6?(m=sc(g,p.mode,x),m.return=p,m):(m=s(m,g),m.return=p,m)}function c(p,m,g,x){var k=g.type;return k===jr?d(p,m,g.props.children,x,g.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===hn&&wf(k)===m.type)?(x=s(m,g.props),x.ref=Ms(p,m,g),x.return=p,x):(x=Vo(g.type,g.key,g.props,null,p.mode,x),x.ref=Ms(p,m,g),x.return=p,x)}function u(p,m,g,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=ic(g,p.mode,x),m.return=p,m):(m=s(m,g.children||[]),m.return=p,m)}function d(p,m,g,x,k){return m===null||m.tag!==7?(m=lr(g,p.mode,x,k),m.return=p,m):(m=s(m,g),m.return=p,m)}function h(p,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=sc(""+m,p.mode,g),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case co:return g=Vo(m.type,m.key,m.props,null,p.mode,g),g.ref=Ms(p,null,m),g.return=p,g;case Rr:return m=ic(m,p.mode,g),m.return=p,m;case hn:var x=m._init;return h(p,x(m._payload),g)}if(qs(m)||As(m))return m=lr(m,p.mode,g,null),m.return=p,m;wo(p,m)}return null}function f(p,m,g,x){var k=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(p,m,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case co:return g.key===k?c(p,m,g,x):null;case Rr:return g.key===k?u(p,m,g,x):null;case hn:return k=g._init,f(p,m,k(g._payload),x)}if(qs(g)||As(g))return k!==null?null:d(p,m,g,x,null);wo(p,g)}return null}function v(p,m,g,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(g)||null,a(m,p,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case co:return p=p.get(x.key===null?g:x.key)||null,c(m,p,x,k);case Rr:return p=p.get(x.key===null?g:x.key)||null,u(m,p,x,k);case hn:var w=x._init;return v(p,m,g,w(x._payload),k)}if(qs(x)||As(x))return p=p.get(g)||null,d(m,p,x,k,null);wo(m,x)}return null}function _(p,m,g,x){for(var k=null,w=null,N=m,T=m=0,q=null;N!==null&&T<g.length;T++){N.index>T?(q=N,N=null):q=N.sibling;var L=f(p,N,g[T],x);if(L===null){N===null&&(N=q);break}t&&N&&L.alternate===null&&e(p,N),m=i(L,m,T),w===null?k=L:w.sibling=L,w=L,N=q}if(T===g.length)return n(p,N),ie&&Xn(p,T),k;if(N===null){for(;T<g.length;T++)N=h(p,g[T],x),N!==null&&(m=i(N,m,T),w===null?k=N:w.sibling=N,w=N);return ie&&Xn(p,T),k}for(N=r(p,N);T<g.length;T++)q=v(N,p,T,g[T],x),q!==null&&(t&&q.alternate!==null&&N.delete(q.key===null?T:q.key),m=i(q,m,T),w===null?k=q:w.sibling=q,w=q);return t&&N.forEach(function(Ye){return e(p,Ye)}),ie&&Xn(p,T),k}function y(p,m,g,x){var k=As(g);if(typeof k!="function")throw Error(E(150));if(g=k.call(g),g==null)throw Error(E(151));for(var w=k=null,N=m,T=m=0,q=null,L=g.next();N!==null&&!L.done;T++,L=g.next()){N.index>T?(q=N,N=null):q=N.sibling;var Ye=f(p,N,L.value,x);if(Ye===null){N===null&&(N=q);break}t&&N&&Ye.alternate===null&&e(p,N),m=i(Ye,m,T),w===null?k=Ye:w.sibling=Ye,w=Ye,N=q}if(L.done)return n(p,N),ie&&Xn(p,T),k;if(N===null){for(;!L.done;T++,L=g.next())L=h(p,L.value,x),L!==null&&(m=i(L,m,T),w===null?k=L:w.sibling=L,w=L);return ie&&Xn(p,T),k}for(N=r(p,N);!L.done;T++,L=g.next())L=v(N,p,T,L.value,x),L!==null&&(t&&L.alternate!==null&&N.delete(L.key===null?T:L.key),m=i(L,m,T),w===null?k=L:w.sibling=L,w=L);return t&&N.forEach(function(cn){return e(p,cn)}),ie&&Xn(p,T),k}function C(p,m,g,x){if(typeof g=="object"&&g!==null&&g.type===jr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case co:e:{for(var k=g.key,w=m;w!==null;){if(w.key===k){if(k=g.type,k===jr){if(w.tag===7){n(p,w.sibling),m=s(w,g.props.children),m.return=p,p=m;break e}}else if(w.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===hn&&wf(k)===w.type){n(p,w.sibling),m=s(w,g.props),m.ref=Ms(p,w,g),m.return=p,p=m;break e}n(p,w);break}else e(p,w);w=w.sibling}g.type===jr?(m=lr(g.props.children,p.mode,x,g.key),m.return=p,p=m):(x=Vo(g.type,g.key,g.props,null,p.mode,x),x.ref=Ms(p,m,g),x.return=p,p=x)}return o(p);case Rr:e:{for(w=g.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(p,m.sibling),m=s(m,g.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else e(p,m);m=m.sibling}m=ic(g,p.mode,x),m.return=p,p=m}return o(p);case hn:return w=g._init,C(p,m,w(g._payload),x)}if(qs(g))return _(p,m,g,x);if(As(g))return y(p,m,g,x);wo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(p,m.sibling),m=s(m,g),m.return=p,p=m):(n(p,m),m=sc(g,p.mode,x),m.return=p,p=m),o(p)):n(p,m)}return C}var is=_g(!0),yg=_g(!1),oa=Bn(null),aa=null,Vr=null,cd=null;function ud(){cd=Vr=aa=null}function dd(t){var e=oa.current;re(oa),t._currentValue=e}function Yc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qr(t,e){aa=t,cd=Vr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(He=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(cd!==t)if(t={context:t,memoizedValue:e,next:null},Vr===null){if(aa===null)throw Error(E(308));Vr=t,aa.dependencies={lanes:0,firstContext:t}}else Vr=Vr.next=t;return e}var rr=null;function hd(t){rr===null?rr=[t]:rr.push(t)}function xg(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,hd(e)):(n.next=s.next,s.next=n),e.interleaved=n,nn(t,r)}function nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fn=!1;function fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,nn(t,n)}return s=r.interleaved,s===null?(e.next=e,hd(r)):(e.next=s.next,s.next=e),r.interleaved=e,nn(t,n)}function Do(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ju(t,n)}}function Cf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function la(t,e,n,r){var s=t.updateQueue;fn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(i!==null){var h=s.baseState;o=0,d=u=c=null,a=i;do{var f=a.lane,v=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,v=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(v,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(v,h,f):_,f==null)break e;h=ue({},h,f);break e;case 2:fn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,c=h):d=d.next=v,o|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;f=a,a=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(d===null&&(c=h),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);pr|=o,t.lanes=o,t.memoizedState=h}}function Ef(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(E(191,s));s.call(r)}}}var qi={},Ot=Bn(qi),Ei=Bn(qi),Si=Bn(qi);function sr(t){if(t===qi)throw Error(E(174));return t}function pd(t,e){switch(te(Si,e),te(Ei,t),te(Ot,qi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pc(e,t)}re(Ot),te(Ot,e)}function os(){re(Ot),re(Ei),re(Si)}function Cg(t){sr(Si.current);var e=sr(Ot.current),n=Pc(e,t.type);e!==n&&(te(Ei,t),te(Ot,n))}function md(t){Ei.current===t&&(re(Ot),re(Ei))}var le=Bn(0);function ca(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jl=[];function gd(){for(var t=0;t<Jl.length;t++)Jl[t]._workInProgressVersionPrimary=null;Jl.length=0}var Mo=ln.ReactCurrentDispatcher,Zl=ln.ReactCurrentBatchConfig,fr=0,ce=null,ye=null,Ee=null,ua=!1,ni=!1,Ni=0,qx=0;function je(){throw Error(E(321))}function vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!It(t[n],e[n]))return!1;return!0}function _d(t,e,n,r,s,i){if(fr=i,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mo.current=t===null||t.memoizedState===null?Yx:Xx,t=n(r,s),ni){i=0;do{if(ni=!1,Ni=0,25<=i)throw Error(E(301));i+=1,Ee=ye=null,e.updateQueue=null,Mo.current=Jx,t=n(r,s)}while(ni)}if(Mo.current=da,e=ye!==null&&ye.next!==null,fr=0,Ee=ye=ce=null,ua=!1,e)throw Error(E(300));return t}function yd(){var t=Ni!==0;return Ni=0,t}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ce.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function ht(){if(ye===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=Ee===null?ce.memoizedState:Ee.next;if(e!==null)Ee=e,ye=t;else{if(t===null)throw Error(E(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ee===null?ce.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function ki(t,e){return typeof e=="function"?e(t):e}function ec(t){var e=ht(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ye,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,c=null,u=i;do{var d=u.lane;if((fr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=h,o=r):c=c.next=h,ce.lanes|=d,pr|=d}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=a,It(r,e.memoizedState)||(He=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ce.lanes|=i,pr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tc(t){var e=ht(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);It(i,e.memoizedState)||(He=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Eg(){}function Sg(t,e){var n=ce,r=ht(),s=e(),i=!It(r.memoizedState,s);if(i&&(r.memoizedState=s,He=!0),r=r.queue,xd(bg.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,bi(9,kg.bind(null,n,r,s,e),void 0,null),Ne===null)throw Error(E(349));fr&30||Ng(n,e,s)}return s}function Ng(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kg(t,e,n,r){e.value=n,e.getSnapshot=r,Ig(e)&&Tg(t)}function bg(t,e,n){return n(function(){Ig(e)&&Tg(t)})}function Ig(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!It(t,n)}catch{return!0}}function Tg(t){var e=nn(t,1);e!==null&&Nt(e,t,1,-1)}function Sf(t){var e=At();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},e.queue=t,t=t.dispatch=Qx.bind(null,ce,t),[e.memoizedState,t]}function bi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Pg(){return ht().memoizedState}function Lo(t,e,n,r){var s=At();ce.flags|=t,s.memoizedState=bi(1|e,n,void 0,r===void 0?null:r)}function Qa(t,e,n,r){var s=ht();r=r===void 0?null:r;var i=void 0;if(ye!==null){var o=ye.memoizedState;if(i=o.destroy,r!==null&&vd(r,o.deps)){s.memoizedState=bi(e,n,i,r);return}}ce.flags|=t,s.memoizedState=bi(1|e,n,i,r)}function Nf(t,e){return Lo(8390656,8,t,e)}function xd(t,e){return Qa(2048,8,t,e)}function Ag(t,e){return Qa(4,2,t,e)}function Rg(t,e){return Qa(4,4,t,e)}function jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Og(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4,4,jg.bind(null,e,t),n)}function wd(){}function Dg(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Mg(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Lg(t,e,n){return fr&21?(It(n,e)||(n=Bm(),ce.lanes|=n,pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,He=!0),t.memoizedState=n)}function Gx(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=Zl.transition;Zl.transition={};try{t(!1),e()}finally{G=n,Zl.transition=r}}function Fg(){return ht().memoizedState}function Kx(t,e,n){var r=In(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ug(t))zg(e,n);else if(n=xg(t,e,n,r),n!==null){var s=Ue();Nt(n,t,r,s),Vg(n,e,r)}}function Qx(t,e,n){var r=In(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ug(t))zg(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,It(a,o)){var c=e.interleaved;c===null?(s.next=s,hd(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=xg(t,e,s,r),n!==null&&(s=Ue(),Nt(n,t,r,s),Vg(n,e,r))}}function Ug(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function zg(t,e){ni=ua=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ju(t,n)}}var da={readContext:dt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Yx={readContext:dt,useCallback:function(t,e){return At().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:Nf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lo(4194308,4,jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lo(4,2,t,e)},useMemo:function(t,e){var n=At();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=At();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Kx.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var e=At();return t={current:t},e.memoizedState=t},useState:Sf,useDebugValue:wd,useDeferredValue:function(t){return At().memoizedState=t},useTransition:function(){var t=Sf(!1),e=t[0];return t=Gx.bind(null,t[1]),At().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ce,s=At();if(ie){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),Ne===null)throw Error(E(349));fr&30||Ng(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Nf(bg.bind(null,r,i,t),[t]),r.flags|=2048,bi(9,kg.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=At(),e=Ne.identifierPrefix;if(ie){var n=Gt,r=qt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ni++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xx={readContext:dt,useCallback:Dg,useContext:dt,useEffect:xd,useImperativeHandle:Og,useInsertionEffect:Ag,useLayoutEffect:Rg,useMemo:Mg,useReducer:ec,useRef:Pg,useState:function(){return ec(ki)},useDebugValue:wd,useDeferredValue:function(t){var e=ht();return Lg(e,ye.memoizedState,t)},useTransition:function(){var t=ec(ki)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Eg,useSyncExternalStore:Sg,useId:Fg,unstable_isNewReconciler:!1},Jx={readContext:dt,useCallback:Dg,useContext:dt,useEffect:xd,useImperativeHandle:Og,useInsertionEffect:Ag,useLayoutEffect:Rg,useMemo:Mg,useReducer:tc,useRef:Pg,useState:function(){return tc(ki)},useDebugValue:wd,useDeferredValue:function(t){var e=ht();return ye===null?e.memoizedState=t:Lg(e,ye.memoizedState,t)},useTransition:function(){var t=tc(ki)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Eg,useSyncExternalStore:Sg,useId:Fg,unstable_isNewReconciler:!1};function yt(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ya={isMounted:function(t){return(t=t._reactInternals)?Sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ue(),s=In(t),i=Jt(r,s);i.payload=e,n!=null&&(i.callback=n),e=kn(t,i,s),e!==null&&(Nt(e,t,s,r),Do(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ue(),s=In(t),i=Jt(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=kn(t,i,s),e!==null&&(Nt(e,t,s,r),Do(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ue(),r=In(t),s=Jt(n,r);s.tag=2,e!=null&&(s.callback=e),e=kn(t,s,r),e!==null&&(Nt(e,t,r,n),Do(e,t,r))}};function kf(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!yi(n,r)||!yi(s,i):!0}function Bg(t,e,n){var r=!1,s=Mn,i=e.contextType;return typeof i=="object"&&i!==null?i=dt(i):(s=Ke(e)?dr:Me.current,r=e.contextTypes,i=(r=r!=null)?rs(t,s):Mn),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ya,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function bf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ya.enqueueReplaceState(e,e.state,null)}function Jc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},fd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=dt(i):(i=Ke(e)?dr:Me.current,s.context=rs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Xc(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ya.enqueueReplaceState(s,s.state,null),la(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function as(t,e){try{var n="",r=e;do n+=k0(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Zx=typeof WeakMap=="function"?WeakMap:Map;function Wg(t,e,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fa||(fa=!0,cu=r),Zc(t,e)},n}function $g(t,e,n){n=Jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Zc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zc(t,e),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function If(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Zx;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=fw.bind(null,t,e,n),e.then(t,t))}function Tf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pf(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jt(-1,1),e.tag=2,kn(n,e,1))),n.lanes|=1),t)}var ew=ln.ReactCurrentOwner,He=!1;function Le(t,e,n,r){e.child=t===null?yg(e,null,n,r):is(e,t.child,n,r)}function Af(t,e,n,r,s){n=n.render;var i=e.ref;return Qr(e,s),r=_d(t,e,n,r,i,s),n=yd(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rn(t,e,s)):(ie&&n&&od(e),e.flags|=1,Le(t,e,r,s),e.child)}function Rf(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Td(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Hg(t,e,i,r,s)):(t=Vo(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:yi,n(o,r)&&t.ref===e.ref)return rn(t,e,s)}return e.flags|=1,t=Tn(i,r),t.ref=e.ref,t.return=e,e.child=t}function Hg(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(yi(i,r)&&t.ref===e.ref)if(He=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(He=!0);else return e.lanes=t.lanes,rn(t,e,s)}return eu(t,e,n,r,s)}function qg(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Wr,Xe),Xe|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(Wr,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(Wr,Xe),Xe|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,te(Wr,Xe),Xe|=r;return Le(t,e,s,n),e.child}function Gg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function eu(t,e,n,r,s){var i=Ke(n)?dr:Me.current;return i=rs(e,i),Qr(e,s),n=_d(t,e,n,r,i,s),r=yd(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rn(t,e,s)):(ie&&r&&od(e),e.flags|=1,Le(t,e,n,s),e.child)}function jf(t,e,n,r,s){if(Ke(n)){var i=!0;ra(e)}else i=!1;if(Qr(e,s),e.stateNode===null)Fo(t,e),Bg(e,n,r),Jc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Ke(n)?dr:Me.current,u=rs(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==u)&&bf(e,o,r,u),fn=!1;var f=e.memoizedState;o.state=f,la(e,r,o,s),c=e.memoizedState,a!==r||f!==c||Ge.current||fn?(typeof d=="function"&&(Xc(e,n,d,r),c=e.memoizedState),(a=fn||kf(e,n,a,r,f,c,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,wg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:yt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=dt(c):(c=Ke(n)?dr:Me.current,c=rs(e,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==c)&&bf(e,o,r,c),fn=!1,f=e.memoizedState,o.state=f,la(e,r,o,s);var _=e.memoizedState;a!==h||f!==_||Ge.current||fn?(typeof v=="function"&&(Xc(e,n,v,r),_=e.memoizedState),(u=fn||kf(e,n,u,r,f,_,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return tu(t,e,n,r,i,s)}function tu(t,e,n,r,s,i){Gg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&_f(e,n,!1),rn(t,e,i);r=e.stateNode,ew.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=is(e,t.child,null,i),e.child=is(e,null,a,i)):Le(t,e,a,i),e.memoizedState=r.state,s&&_f(e,n,!0),e.child}function Kg(t){var e=t.stateNode;e.pendingContext?vf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vf(t,e.context,!1),pd(t,e.containerInfo)}function Of(t,e,n,r,s){return ss(),ld(s),e.flags|=256,Le(t,e,n,r),e.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qg(t,e,n){var r=e.pendingProps,s=le.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),te(le,s&1),t===null)return Qc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Za(o,r,0,null),t=lr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=ru(n),e.memoizedState=nu,t):Cd(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return tw(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Tn(s,c),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Tn(a,i):(i=lr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?ru(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=nu,r}return i=t.child,t=i.sibling,r=Tn(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cd(t,e){return e=Za({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Co(t,e,n,r){return r!==null&&ld(r),is(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tw(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=nc(Error(E(422))),Co(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Za({mode:"visible",children:r.children},s,0,null),i=lr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&is(e,t.child,null,o),e.child.memoizedState=ru(o),e.memoizedState=nu,i);if(!(e.mode&1))return Co(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(E(419)),r=nc(i,r,void 0),Co(t,e,o,r)}if(a=(o&t.childLanes)!==0,He||a){if(r=Ne,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,nn(t,s),Nt(r,t,s,-1))}return Id(),r=nc(Error(E(421))),Co(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=pw.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Je=Nn(s.nextSibling),Ze=e,ie=!0,wt=null,t!==null&&(it[ot++]=qt,it[ot++]=Gt,it[ot++]=hr,qt=t.id,Gt=t.overflow,hr=e),e=Cd(e,r.children),e.flags|=4096,e)}function Df(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yc(t.return,e,n)}function rc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Yg(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Le(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Df(t,n,e);else if(t.tag===19)Df(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(te(le,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ca(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),rc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ca(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}rc(e,!0,n,null,i);break;case"together":rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=Tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nw(t,e,n){switch(e.tag){case 3:Kg(e),ss();break;case 5:Cg(e);break;case 1:Ke(e.type)&&ra(e);break;case 4:pd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;te(oa,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(te(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?Qg(t,e,n):(te(le,le.current&1),t=rn(t,e,n),t!==null?t.sibling:null);te(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Yg(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),te(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,qg(t,e,n)}return rn(t,e,n)}var Xg,su,Jg,Zg;Xg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};su=function(){};Jg=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,sr(Ot.current);var i=null;switch(n){case"input":s=kc(t,s),r=kc(t,r),i=[];break;case"select":s=ue({},s,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":s=Tc(t,s),r=Tc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ta)}Ac(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hi.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hi.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ne("scroll",t),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};Zg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ls(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rw(t,e,n){var r=e.pendingProps;switch(ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(e),null;case 1:return Ke(e.type)&&na(),Oe(e),null;case 3:return r=e.stateNode,os(),re(Ge),re(Me),gd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wt!==null&&(hu(wt),wt=null))),su(t,e),Oe(e),null;case 5:md(e);var s=sr(Si.current);if(n=e.type,t!==null&&e.stateNode!=null)Jg(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Oe(e),null}if(t=sr(Ot.current),xo(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Rt]=e,r[Ci]=i,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(s=0;s<Ks.length;s++)ne(Ks[s],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Wh(r,i),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ne("invalid",r);break;case"textarea":Hh(r,i),ne("invalid",r)}Ac(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&yo(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&yo(r.textContent,a,t),s=["children",""+a]):hi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":uo(r),$h(r,i,!0);break;case"textarea":uo(r),qh(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ta)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rt]=e,t[Ci]=r,Xg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rc(n,r),n){case"dialog":ne("cancel",t),ne("close",t),s=r;break;case"iframe":case"object":case"embed":ne("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ks.length;s++)ne(Ks[s],t);s=r;break;case"source":ne("error",t),s=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),s=r;break;case"details":ne("toggle",t),s=r;break;case"input":Wh(t,r),s=kc(t,r),ne("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ue({},r,{value:void 0}),ne("invalid",t);break;case"textarea":Hh(t,r),s=Tc(t,r),ne("invalid",t);break;default:s=r}Ac(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?Pm(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Im(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&fi(t,c):typeof c=="number"&&fi(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(hi.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ne("scroll",t):c!=null&&qu(t,i,c,o))}switch(n){case"input":uo(t),$h(t,r,!1);break;case"textarea":uo(t),qh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dn(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Hr(t,!!r.multiple,i,!1):r.defaultValue!=null&&Hr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Oe(e),null;case 6:if(t&&e.stateNode!=null)Zg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=sr(Si.current),sr(Ot.current),xo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rt]=e,(i=r.nodeValue!==n)&&(t=Ze,t!==null))switch(t.tag){case 3:yo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yo(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=e,e.stateNode=r}return Oe(e),null;case 13:if(re(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&Je!==null&&e.mode&1&&!(e.flags&128))vg(),ss(),e.flags|=98560,i=!1;else if(i=xo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(E(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[Rt]=e}else ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Oe(e),i=!1}else wt!==null&&(hu(wt),wt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?we===0&&(we=3):Id())),e.updateQueue!==null&&(e.flags|=4),Oe(e),null);case 4:return os(),su(t,e),t===null&&xi(e.stateNode.containerInfo),Oe(e),null;case 10:return dd(e.type._context),Oe(e),null;case 17:return Ke(e.type)&&na(),Oe(e),null;case 19:if(re(le),i=e.memoizedState,i===null)return Oe(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ls(i,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ca(t),o!==null){for(e.flags|=128,Ls(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return te(le,le.current&1|2),e.child}t=t.sibling}i.tail!==null&&ge()>ls&&(e.flags|=128,r=!0,Ls(i,!1),e.lanes=4194304)}else{if(!r)if(t=ca(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ls(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ie)return Oe(e),null}else 2*ge()-i.renderingStartTime>ls&&n!==1073741824&&(e.flags|=128,r=!0,Ls(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ge(),e.sibling=null,n=le.current,te(le,r?n&1|2:n&1),e):(Oe(e),null);case 22:case 23:return bd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xe&1073741824&&(Oe(e),e.subtreeFlags&6&&(e.flags|=8192)):Oe(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function sw(t,e){switch(ad(e),e.tag){case 1:return Ke(e.type)&&na(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return os(),re(Ge),re(Me),gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return md(e),null;case 13:if(re(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(le),null;case 4:return os(),null;case 10:return dd(e.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var Eo=!1,De=!1,iw=typeof WeakSet=="function"?WeakSet:Set,A=null;function Br(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function iu(t,e,n){try{n()}catch(r){he(t,e,r)}}var Mf=!1;function ow(t,e){if(Bc=Jo,t=sg(),id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var v;h!==n||s!==0&&h.nodeType!==3||(a=o+s),h!==i||r!==0&&h.nodeType!==3||(c=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)f=h,h=v;for(;;){if(h===t)break t;if(f===n&&++u===s&&(a=o),f===i&&++d===r&&(c=o),(v=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=v}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wc={focusedElem:t,selectionRange:n},Jo=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,C=_.memoizedState,p=e.stateNode,m=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:yt(e.type,y),C);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(x){he(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return _=Mf,Mf=!1,_}function ri(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&iu(e,n,i)}s=s.next}while(s!==r)}}function Xa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ou(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ev(t){var e=t.alternate;e!==null&&(t.alternate=null,ev(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rt],delete e[Ci],delete e[qc],delete e[Bx],delete e[Wx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tv(t){return t.tag===5||t.tag===3||t.tag===4}function Lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function au(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ta));else if(r!==4&&(t=t.child,t!==null))for(au(t,e,n),t=t.sibling;t!==null;)au(t,e,n),t=t.sibling}function lu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(lu(t,e,n),t=t.sibling;t!==null;)lu(t,e,n),t=t.sibling}var Ie=null,xt=!1;function un(t,e,n){for(n=n.child;n!==null;)nv(t,e,n),n=n.sibling}function nv(t,e,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Wa,n)}catch{}switch(n.tag){case 5:De||Br(n,e);case 6:var r=Ie,s=xt;Ie=null,un(t,e,n),Ie=r,xt=s,Ie!==null&&(xt?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(xt?(t=Ie,n=n.stateNode,t.nodeType===8?Yl(t.parentNode,n):t.nodeType===1&&Yl(t,n),vi(t)):Yl(Ie,n.stateNode));break;case 4:r=Ie,s=xt,Ie=n.stateNode.containerInfo,xt=!0,un(t,e,n),Ie=r,xt=s;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&iu(n,e,o),s=s.next}while(s!==r)}un(t,e,n);break;case 1:if(!De&&(Br(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,e,a)}un(t,e,n);break;case 21:un(t,e,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,un(t,e,n),De=r):un(t,e,n);break;default:un(t,e,n)}}function Ff(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iw),e.forEach(function(r){var s=mw.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function _t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,xt=!1;break e;case 3:Ie=a.stateNode.containerInfo,xt=!0;break e;case 4:Ie=a.stateNode.containerInfo,xt=!0;break e}a=a.return}if(Ie===null)throw Error(E(160));nv(i,o,s),Ie=null,xt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){he(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rv(e,t),e=e.sibling}function rv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_t(e,t),Pt(t),r&4){try{ri(3,t,t.return),Xa(3,t)}catch(y){he(t,t.return,y)}try{ri(5,t,t.return)}catch(y){he(t,t.return,y)}}break;case 1:_t(e,t),Pt(t),r&512&&n!==null&&Br(n,n.return);break;case 5:if(_t(e,t),Pt(t),r&512&&n!==null&&Br(n,n.return),t.flags&32){var s=t.stateNode;try{fi(s,"")}catch(y){he(t,t.return,y)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Nm(s,i),Rc(a,o);var u=Rc(a,i);for(o=0;o<c.length;o+=2){var d=c[o],h=c[o+1];d==="style"?Pm(s,h):d==="dangerouslySetInnerHTML"?Im(s,h):d==="children"?fi(s,h):qu(s,d,h,u)}switch(a){case"input":bc(s,i);break;case"textarea":km(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Hr(s,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?Hr(s,!!i.multiple,i.defaultValue,!0):Hr(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ci]=i}catch(y){he(t,t.return,y)}}break;case 6:if(_t(e,t),Pt(t),r&4){if(t.stateNode===null)throw Error(E(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(y){he(t,t.return,y)}}break;case 3:if(_t(e,t),Pt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vi(e.containerInfo)}catch(y){he(t,t.return,y)}break;case 4:_t(e,t),Pt(t);break;case 13:_t(e,t),Pt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Nd=ge())),r&4&&Ff(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(De=(u=De)||d,_t(e,t),De=u):_t(e,t),Pt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(h=A=d;A!==null;){switch(f=A,v=f.child,f.tag){case 0:case 11:case 14:case 15:ri(4,f,f.return);break;case 1:Br(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){he(r,n,y)}}break;case 5:Br(f,f.return);break;case 22:if(f.memoizedState!==null){zf(h);continue}}v!==null?(v.return=f,A=v):zf(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{s=h.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Tm("display",o))}catch(y){he(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){he(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_t(e,t),Pt(t),r&4&&Ff(t);break;case 21:break;default:_t(e,t),Pt(t)}}function Pt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tv(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(fi(s,""),r.flags&=-33);var i=Lf(t);lu(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lf(t);au(t,a,o);break;default:throw Error(E(161))}}catch(c){he(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aw(t,e,n){A=t,sv(t)}function sv(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var s=A,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Eo;if(!o){var a=s.alternate,c=a!==null&&a.memoizedState!==null||De;a=Eo;var u=De;if(Eo=o,(De=c)&&!u)for(A=s;A!==null;)o=A,c=o.child,o.tag===22&&o.memoizedState!==null?Vf(s):c!==null?(c.return=o,A=c):Vf(s);for(;i!==null;)A=i,sv(i),i=i.sibling;A=s,Eo=a,De=u}Uf(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,A=i):Uf(t)}}function Uf(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:De||Xa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!De)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:yt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ef(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ef(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&vi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}De||e.flags&512&&ou(e)}catch(f){he(e,e.return,f)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function zf(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Vf(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xa(4,e)}catch(c){he(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){he(e,s,c)}}var i=e.return;try{ou(e)}catch(c){he(e,i,c)}break;case 5:var o=e.return;try{ou(e)}catch(c){he(e,o,c)}}}catch(c){he(e,e.return,c)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var lw=Math.ceil,ha=ln.ReactCurrentDispatcher,Ed=ln.ReactCurrentOwner,ut=ln.ReactCurrentBatchConfig,W=0,Ne=null,_e=null,Pe=0,Xe=0,Wr=Bn(0),we=0,Ii=null,pr=0,Ja=0,Sd=0,si=null,$e=null,Nd=0,ls=1/0,Vt=null,fa=!1,cu=null,bn=null,So=!1,xn=null,pa=0,ii=0,uu=null,Uo=-1,zo=0;function Ue(){return W&6?ge():Uo!==-1?Uo:Uo=ge()}function In(t){return t.mode&1?W&2&&Pe!==0?Pe&-Pe:Hx.transition!==null?(zo===0&&(zo=Bm()),zo):(t=G,t!==0||(t=window.event,t=t===void 0?16:Qm(t.type)),t):1}function Nt(t,e,n,r){if(50<ii)throw ii=0,uu=null,Error(E(185));Wi(t,n,r),(!(W&2)||t!==Ne)&&(t===Ne&&(!(W&2)&&(Ja|=n),we===4&&mn(t,Pe)),Qe(t,r),n===1&&W===0&&!(e.mode&1)&&(ls=ge()+500,Ka&&Wn()))}function Qe(t,e){var n=t.callbackNode;H0(t,e);var r=Xo(t,t===Ne?Pe:0);if(r===0)n!==null&&Qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qh(n),e===1)t.tag===0?$x(Bf.bind(null,t)):pg(Bf.bind(null,t)),zx(function(){!(W&6)&&Wn()}),n=null;else{switch(Wm(r)){case 1:n=Xu;break;case 4:n=zm;break;case 16:n=Yo;break;case 536870912:n=Vm;break;default:n=Yo}n=hv(n,iv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function iv(t,e){if(Uo=-1,zo=0,W&6)throw Error(E(327));var n=t.callbackNode;if(Yr()&&t.callbackNode!==n)return null;var r=Xo(t,t===Ne?Pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ma(t,r);else{e=r;var s=W;W|=2;var i=av();(Ne!==t||Pe!==e)&&(Vt=null,ls=ge()+500,ar(t,e));do try{dw();break}catch(a){ov(t,a)}while(!0);ud(),ha.current=i,W=s,_e!==null?e=0:(Ne=null,Pe=0,e=we)}if(e!==0){if(e===2&&(s=Lc(t),s!==0&&(r=s,e=du(t,s))),e===1)throw n=Ii,ar(t,0),mn(t,r),Qe(t,ge()),n;if(e===6)mn(t,r);else{if(s=t.current.alternate,!(r&30)&&!cw(s)&&(e=ma(t,r),e===2&&(i=Lc(t),i!==0&&(r=i,e=du(t,i))),e===1))throw n=Ii,ar(t,0),mn(t,r),Qe(t,ge()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Jn(t,$e,Vt);break;case 3:if(mn(t,r),(r&130023424)===r&&(e=Nd+500-ge(),10<e)){if(Xo(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ue(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Hc(Jn.bind(null,t,$e,Vt),e);break}Jn(t,$e,Vt);break;case 4:if(mn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-St(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lw(r/1960))-r,10<r){t.timeoutHandle=Hc(Jn.bind(null,t,$e,Vt),r);break}Jn(t,$e,Vt);break;case 5:Jn(t,$e,Vt);break;default:throw Error(E(329))}}}return Qe(t,ge()),t.callbackNode===n?iv.bind(null,t):null}function du(t,e){var n=si;return t.current.memoizedState.isDehydrated&&(ar(t,e).flags|=256),t=ma(t,e),t!==2&&(e=$e,$e=n,e!==null&&hu(e)),t}function hu(t){$e===null?$e=t:$e.push.apply($e,t)}function cw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!It(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mn(t,e){for(e&=~Sd,e&=~Ja,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-St(e),r=1<<n;t[n]=-1,e&=~r}}function Bf(t){if(W&6)throw Error(E(327));Yr();var e=Xo(t,0);if(!(e&1))return Qe(t,ge()),null;var n=ma(t,e);if(t.tag!==0&&n===2){var r=Lc(t);r!==0&&(e=r,n=du(t,r))}if(n===1)throw n=Ii,ar(t,0),mn(t,e),Qe(t,ge()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jn(t,$e,Vt),Qe(t,ge()),null}function kd(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(ls=ge()+500,Ka&&Wn())}}function mr(t){xn!==null&&xn.tag===0&&!(W&6)&&Yr();var e=W;W|=1;var n=ut.transition,r=G;try{if(ut.transition=null,G=1,t)return t()}finally{G=r,ut.transition=n,W=e,!(W&6)&&Wn()}}function bd(){Xe=Wr.current,re(Wr)}function ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ux(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(ad(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:os(),re(Ge),re(Me),gd();break;case 5:md(r);break;case 4:os();break;case 13:re(le);break;case 19:re(le);break;case 10:dd(r.type._context);break;case 22:case 23:bd()}n=n.return}if(Ne=t,_e=t=Tn(t.current,null),Pe=Xe=e,we=0,Ii=null,Sd=Ja=pr=0,$e=si=null,rr!==null){for(e=0;e<rr.length;e++)if(n=rr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}rr=null}return t}function ov(t,e){do{var n=_e;try{if(ud(),Mo.current=da,ua){for(var r=ce.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ua=!1}if(fr=0,Ee=ye=ce=null,ni=!1,Ni=0,Ed.current=null,n===null||n.return===null){we=1,Ii=e,_e=null;break}e:{var i=t,o=n.return,a=n,c=e;if(e=Pe,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Tf(o);if(v!==null){v.flags&=-257,Pf(v,o,a,i,e),v.mode&1&&If(i,u,e),e=v,c=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(c),e.updateQueue=y}else _.add(c);break e}else{if(!(e&1)){If(i,u,e),Id();break e}c=Error(E(426))}}else if(ie&&a.mode&1){var C=Tf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Pf(C,o,a,i,e),ld(as(c,a));break e}}i=c=as(c,a),we!==4&&(we=2),si===null?si=[i]:si.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var p=Wg(i,c,e);Cf(i,p);break e;case 1:a=c;var m=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(bn===null||!bn.has(g)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=$g(i,a,e);Cf(i,x);break e}}i=i.return}while(i!==null)}cv(n)}catch(k){e=k,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function av(){var t=ha.current;return ha.current=da,t===null?da:t}function Id(){(we===0||we===3||we===2)&&(we=4),Ne===null||!(pr&268435455)&&!(Ja&268435455)||mn(Ne,Pe)}function ma(t,e){var n=W;W|=2;var r=av();(Ne!==t||Pe!==e)&&(Vt=null,ar(t,e));do try{uw();break}catch(s){ov(t,s)}while(!0);if(ud(),W=n,ha.current=r,_e!==null)throw Error(E(261));return Ne=null,Pe=0,we}function uw(){for(;_e!==null;)lv(_e)}function dw(){for(;_e!==null&&!M0();)lv(_e)}function lv(t){var e=dv(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?cv(t):_e=e,Ed.current=null}function cv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sw(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,_e=null;return}}else if(n=rw(n,e,Xe),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);we===0&&(we=5)}function Jn(t,e,n){var r=G,s=ut.transition;try{ut.transition=null,G=1,hw(t,e,n,r)}finally{ut.transition=s,G=r}return null}function hw(t,e,n,r){do Yr();while(xn!==null);if(W&6)throw Error(E(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(q0(t,i),t===Ne&&(_e=Ne=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,hv(Yo,function(){return Yr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ut.transition,ut.transition=null;var o=G;G=1;var a=W;W|=4,Ed.current=null,ow(t,n),rv(n,t),Rx(Wc),Jo=!!Bc,Wc=Bc=null,t.current=n,aw(n),L0(),W=a,G=o,ut.transition=i}else t.current=n;if(So&&(So=!1,xn=t,pa=s),i=t.pendingLanes,i===0&&(bn=null),z0(n.stateNode),Qe(t,ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(fa)throw fa=!1,t=cu,cu=null,t;return pa&1&&t.tag!==0&&Yr(),i=t.pendingLanes,i&1?t===uu?ii++:(ii=0,uu=t):ii=0,Wn(),null}function Yr(){if(xn!==null){var t=Wm(pa),e=ut.transition,n=G;try{if(ut.transition=null,G=16>t?16:t,xn===null)var r=!1;else{if(t=xn,xn=null,pa=0,W&6)throw Error(E(331));var s=W;for(W|=4,A=t.current;A!==null;){var i=A,o=i.child;if(A.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:ri(8,d,i)}var h=d.child;if(h!==null)h.return=d,A=h;else for(;A!==null;){d=A;var f=d.sibling,v=d.return;if(ev(d),d===u){A=null;break}if(f!==null){f.return=v,A=f;break}A=v}}}var _=i.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}A=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,A=o;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ri(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,A=p;break e}A=i.return}}var m=t.current;for(A=m;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=m;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xa(9,a)}}catch(k){he(a,a.return,k)}if(a===o){A=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,A=x;break e}A=a.return}}if(W=s,Wn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Wa,t)}catch{}r=!0}return r}finally{G=n,ut.transition=e}}return!1}function Wf(t,e,n){e=as(n,e),e=Wg(t,e,1),t=kn(t,e,1),e=Ue(),t!==null&&(Wi(t,1,e),Qe(t,e))}function he(t,e,n){if(t.tag===3)Wf(t,t,n);else for(;e!==null;){if(e.tag===3){Wf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){t=as(n,t),t=$g(e,t,1),e=kn(e,t,1),t=Ue(),e!==null&&(Wi(e,1,t),Qe(e,t));break}}e=e.return}}function fw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ue(),t.pingedLanes|=t.suspendedLanes&n,Ne===t&&(Pe&n)===n&&(we===4||we===3&&(Pe&130023424)===Pe&&500>ge()-Nd?ar(t,0):Sd|=n),Qe(t,e)}function uv(t,e){e===0&&(t.mode&1?(e=po,po<<=1,!(po&130023424)&&(po=4194304)):e=1);var n=Ue();t=nn(t,e),t!==null&&(Wi(t,e,n),Qe(t,n))}function pw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uv(t,n)}function mw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),uv(t,n)}var dv;dv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)He=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return He=!1,nw(t,e,n);He=!!(t.flags&131072)}else He=!1,ie&&e.flags&1048576&&mg(e,ia,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fo(t,e),t=e.pendingProps;var s=rs(e,Me.current);Qr(e,n),s=_d(null,e,r,t,s,n);var i=yd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)?(i=!0,ra(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,fd(e),s.updater=Ya,e.stateNode=s,s._reactInternals=e,Jc(e,r,t,n),e=tu(null,e,r,!0,i,n)):(e.tag=0,ie&&i&&od(e),Le(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fo(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=vw(r),t=yt(r,t),s){case 0:e=eu(null,e,r,t,n);break e;case 1:e=jf(null,e,r,t,n);break e;case 11:e=Af(null,e,r,t,n);break e;case 14:e=Rf(null,e,r,yt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:yt(r,s),eu(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:yt(r,s),jf(t,e,r,s,n);case 3:e:{if(Kg(e),t===null)throw Error(E(387));r=e.pendingProps,i=e.memoizedState,s=i.element,wg(t,e),la(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=as(Error(E(423)),e),e=Of(t,e,r,n,s);break e}else if(r!==s){s=as(Error(E(424)),e),e=Of(t,e,r,n,s);break e}else for(Je=Nn(e.stateNode.containerInfo.firstChild),Ze=e,ie=!0,wt=null,n=yg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ss(),r===s){e=rn(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return Cg(e),t===null&&Qc(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,$c(r,s)?o=null:i!==null&&$c(r,i)&&(e.flags|=32),Gg(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&Qc(e),null;case 13:return Qg(t,e,n);case 4:return pd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=is(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:yt(r,s),Af(t,e,r,s,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,te(oa,r._currentValue),r._currentValue=o,i!==null)if(It(i.value,o)){if(i.children===s.children&&!Ge.current){e=rn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Jt(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Yc(i.return,n,e),a.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yc(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Le(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Qr(e,n),s=dt(s),r=r(s),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,s=yt(r,e.pendingProps),s=yt(r.type,s),Rf(t,e,r,s,n);case 15:return Hg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:yt(r,s),Fo(t,e),e.tag=1,Ke(r)?(t=!0,ra(e)):t=!1,Qr(e,n),Bg(e,r,s),Jc(e,r,s,n),tu(null,e,r,!0,t,n);case 19:return Yg(t,e,n);case 22:return qg(t,e,n)}throw Error(E(156,e.tag))};function hv(t,e){return Um(t,e)}function gw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(t,e,n,r){return new gw(t,e,n,r)}function Td(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vw(t){if(typeof t=="function")return Td(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ku)return 11;if(t===Qu)return 14}return 2}function Tn(t,e){var n=t.alternate;return n===null?(n=at(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vo(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Td(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case jr:return lr(n.children,s,i,e);case Gu:o=8,s|=8;break;case Cc:return t=at(12,n,e,s|2),t.elementType=Cc,t.lanes=i,t;case Ec:return t=at(13,n,e,s),t.elementType=Ec,t.lanes=i,t;case Sc:return t=at(19,n,e,s),t.elementType=Sc,t.lanes=i,t;case Cm:return Za(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xm:o=10;break e;case wm:o=9;break e;case Ku:o=11;break e;case Qu:o=14;break e;case hn:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=at(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function lr(t,e,n,r){return t=at(7,t,r,e),t.lanes=n,t}function Za(t,e,n,r){return t=at(22,t,r,e),t.elementType=Cm,t.lanes=n,t.stateNode={isHidden:!1},t}function sc(t,e,n){return t=at(6,t,null,e),t.lanes=n,t}function ic(t,e,n){return e=at(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _w(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Pd(t,e,n,r,s,i,o,a,c){return t=new _w(t,e,n,a,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=at(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(i),t}function yw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fv(t){if(!t)return Mn;t=t._reactInternals;e:{if(Sr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Ke(n))return fg(t,n,e)}return e}function pv(t,e,n,r,s,i,o,a,c){return t=Pd(n,r,!0,t,s,i,o,a,c),t.context=fv(null),n=t.current,r=Ue(),s=In(n),i=Jt(r,s),i.callback=e??null,kn(n,i,s),t.current.lanes=s,Wi(t,s,r),Qe(t,r),t}function el(t,e,n,r){var s=e.current,i=Ue(),o=In(s);return n=fv(n),e.context===null?e.context=n:e.pendingContext=n,e=Jt(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kn(s,e,o),t!==null&&(Nt(t,s,o,i),Do(t,s,o)),o}function ga(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $f(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ad(t,e){$f(t,e),(t=t.alternate)&&$f(t,e)}function xw(){return null}var mv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rd(t){this._internalRoot=t}tl.prototype.render=Rd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));el(t,e,null,null)};tl.prototype.unmount=Rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mr(function(){el(null,t,null,null)}),e[tn]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var e=qm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pn.length&&e!==0&&e<pn[n].priority;n++);pn.splice(n,0,t),n===0&&Km(t)}};function jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hf(){}function ww(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=ga(o);i.call(u)}}var o=pv(e,r,t,0,null,!1,!1,"",Hf);return t._reactRootContainer=o,t[tn]=o.current,xi(t.nodeType===8?t.parentNode:t),mr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=ga(c);a.call(u)}}var c=Pd(t,0,!1,null,null,!1,!1,"",Hf);return t._reactRootContainer=c,t[tn]=c.current,xi(t.nodeType===8?t.parentNode:t),mr(function(){el(e,c,n,r)}),c}function rl(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var c=ga(o);a.call(c)}}el(e,o,t,s)}else o=ww(n,e,t,s,r);return ga(o)}$m=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gs(e.pendingLanes);n!==0&&(Ju(e,n|1),Qe(e,ge()),!(W&6)&&(ls=ge()+500,Wn()))}break;case 13:mr(function(){var r=nn(t,1);if(r!==null){var s=Ue();Nt(r,t,1,s)}}),Ad(t,1)}};Zu=function(t){if(t.tag===13){var e=nn(t,134217728);if(e!==null){var n=Ue();Nt(e,t,134217728,n)}Ad(t,134217728)}};Hm=function(t){if(t.tag===13){var e=In(t),n=nn(t,e);if(n!==null){var r=Ue();Nt(n,t,e,r)}Ad(t,e)}};qm=function(){return G};Gm=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};Oc=function(t,e,n){switch(e){case"input":if(bc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ga(r);if(!s)throw Error(E(90));Sm(r),bc(r,s)}}}break;case"textarea":km(t,n);break;case"select":e=n.value,e!=null&&Hr(t,!!n.multiple,e,!1)}};jm=kd;Om=mr;var Cw={usingClientEntryPoint:!1,Events:[Hi,Lr,Ga,Am,Rm,kd]},Fs={findFiberByHostInstance:nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ew={bundleType:Fs.bundleType,version:Fs.version,rendererPackageName:Fs.rendererPackageName,rendererConfig:Fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lm(t),t===null?null:t.stateNode},findFiberByHostInstance:Fs.findFiberByHostInstance||xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{Wa=No.inject(Ew),jt=No}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cw;nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jd(e))throw Error(E(200));return yw(t,e,null,n)};nt.createRoot=function(t,e){if(!jd(t))throw Error(E(299));var n=!1,r="",s=mv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Pd(t,1,!1,null,null,n,!1,r,s),t[tn]=e.current,xi(t.nodeType===8?t.parentNode:t),new Rd(e)};nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Lm(e),t=t===null?null:t.stateNode,t};nt.flushSync=function(t){return mr(t)};nt.hydrate=function(t,e,n){if(!nl(e))throw Error(E(200));return rl(null,t,e,!0,n)};nt.hydrateRoot=function(t,e,n){if(!jd(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=mv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pv(e,null,t,1,n??null,s,!1,i,o),t[tn]=e.current,xi(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new tl(e)};nt.render=function(t,e,n){if(!nl(e))throw Error(E(200));return rl(null,t,e,!1,n)};nt.unmountComponentAtNode=function(t){if(!nl(t))throw Error(E(40));return t._reactRootContainer?(mr(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[tn]=null})}),!0):!1};nt.unstable_batchedUpdates=kd;nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return rl(t,e,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gv)}catch(t){console.error(t)}}gv(),gm.exports=nt;var Sw=gm.exports,qf=Sw;xc.createRoot=qf.createRoot,xc.hydrateRoot=qf.hydrateRoot;var Gf={};/**
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
 */const vv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw _s(e)},_s=function(t){return new Error("Firebase Database ("+vv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const _v=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Nw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,v=u&63;c||(v=64,o||(f=64)),r.push(n[d],n[h],n[f],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_v(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new kw;const f=i<<2|a>>4;if(r.push(f),u!==64){const v=a<<4&240|u>>2;if(r.push(v),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yv=function(t){const e=_v(t);return Od.encodeByteArray(e,!0)},va=function(t){return yv(t).replace(/\./g,"")},_a=function(t){try{return Od.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bw(t){return xv(void 0,t)}function xv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Iw(n)||(t[n]=xv(t[n],e[n]));return t}function Iw(t){return t!=="__proto__"}/**
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
 */function Tw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pw=()=>Tw().__FIREBASE_DEFAULTS__,Aw=()=>{if(typeof process>"u"||typeof Gf>"u")return;const t=Gf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_a(t[1]);return e&&JSON.parse(e)},Dd=()=>{try{return Pw()||Aw()||Rw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wv=t=>{var e,n;return(n=(e=Dd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jw=t=>{const e=wv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Cv=()=>{var t;return(t=Dd())===null||t===void 0?void 0:t.config},Ev=t=>{var e;return(e=Dd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ys{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ow(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[va(JSON.stringify(n)),va(JSON.stringify(o)),""].join(".")}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function Dw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lw(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fw(){return vv.NODE_ADMIN===!0}function Uw(){try{return typeof indexedDB=="object"}catch{return!1}}function zw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Vw="FirebaseError";class $n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Vw,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Bw(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $n(s,a,r)}}function Bw(t,e){return t.replace(Ww,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ww=/\{\$([^}]+)}/g;/**
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
 */function Ti(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
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
 */const Nv=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Ti(_a(i[0])||""),n=Ti(_a(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},$w=function(t){const e=Nv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Hw=function(t){const e=Nv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Tt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ya(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function xa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Kf(i)&&Kf(o)){if(!xa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Kf(t){return t!==null&&typeof t=="object"}/**
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
 */function xs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ys(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class qw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,d;for(let h=0;h<80;h++){h<40?h<20?(u=a^i&(o^a),d=1518500249):(u=i^o^a,d=1859775393):h<60?(u=i&o|a&(i|o),d=2400959708):(u=i^o^a,d=3395469782);const f=(s<<5|s>>>27)+u+c+d+r[h]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Gw(t,e){const n=new Kw(t,e);return n.subscribe.bind(n)}class Kw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=oc),s.error===void 0&&(s.error=oc),s.complete===void 0&&(s.complete=oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oc(){}function sl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Yw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},il=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zn="[DEFAULT]";/**
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
 */class Xw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ys;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zw(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jw(t){return t===Zn?void 0:t}function Zw(t){return t.instantiationMode==="EAGER"}/**
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
 */class e1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const t1={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},n1=X.INFO,r1={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},s1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=r1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ld{constructor(e){this.name=e,this._logLevel=n1,this._logHandler=s1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const i1=(t,e)=>e.some(n=>t instanceof n);let Qf,Yf;function o1(){return Qf||(Qf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a1(){return Yf||(Yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kv=new WeakMap,pu=new WeakMap,bv=new WeakMap,ac=new WeakMap,Fd=new WeakMap;function l1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kv.set(n,t)}).catch(()=>{}),Fd.set(e,t),e}function c1(t){if(pu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pu.set(t,e)}let mu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function u1(t){mu=t(mu)}function d1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lc(this),e,...n);return bv.set(r,e.sort?e.sort():[e]),Pn(r)}:a1().includes(t)?function(...e){return t.apply(lc(this),e),Pn(kv.get(this))}:function(...e){return Pn(t.apply(lc(this),e))}}function h1(t){return typeof t=="function"?d1(t):(t instanceof IDBTransaction&&c1(t),i1(t,o1())?new Proxy(t,mu):t)}function Pn(t){if(t instanceof IDBRequest)return l1(t);if(ac.has(t))return ac.get(t);const e=h1(t);return e!==t&&(ac.set(t,e),Fd.set(e,t)),e}const lc=t=>Fd.get(t);function f1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Pn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Pn(o.result),c.oldVersion,c.newVersion,Pn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const p1=["get","getKey","getAll","getAllKeys","count"],m1=["put","add","delete","clear"],cc=new Map;function Xf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=m1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||p1.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return cc.set(e,i),i}u1(t=>({...t,get:(e,n,r)=>Xf(e,n)||t.get(e,n,r),has:(e,n)=>!!Xf(e,n)||t.has(e,n)}));/**
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
 */class g1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(v1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function v1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gu="@firebase/app",Jf="0.10.13";/**
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
 */const sn=new Ld("@firebase/app"),_1="@firebase/app-compat",y1="@firebase/analytics-compat",x1="@firebase/analytics",w1="@firebase/app-check-compat",C1="@firebase/app-check",E1="@firebase/auth",S1="@firebase/auth-compat",N1="@firebase/database",k1="@firebase/data-connect",b1="@firebase/database-compat",I1="@firebase/functions",T1="@firebase/functions-compat",P1="@firebase/installations",A1="@firebase/installations-compat",R1="@firebase/messaging",j1="@firebase/messaging-compat",O1="@firebase/performance",D1="@firebase/performance-compat",M1="@firebase/remote-config",L1="@firebase/remote-config-compat",F1="@firebase/storage",U1="@firebase/storage-compat",z1="@firebase/firestore",V1="@firebase/vertexai-preview",B1="@firebase/firestore-compat",W1="firebase",$1="10.14.1";/**
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
 */const vu="[DEFAULT]",H1={[gu]:"fire-core",[_1]:"fire-core-compat",[x1]:"fire-analytics",[y1]:"fire-analytics-compat",[C1]:"fire-app-check",[w1]:"fire-app-check-compat",[E1]:"fire-auth",[S1]:"fire-auth-compat",[N1]:"fire-rtdb",[k1]:"fire-data-connect",[b1]:"fire-rtdb-compat",[I1]:"fire-fn",[T1]:"fire-fn-compat",[P1]:"fire-iid",[A1]:"fire-iid-compat",[R1]:"fire-fcm",[j1]:"fire-fcm-compat",[O1]:"fire-perf",[D1]:"fire-perf-compat",[M1]:"fire-rc",[L1]:"fire-rc-compat",[F1]:"fire-gcs",[U1]:"fire-gcs-compat",[z1]:"fire-fst",[B1]:"fire-fst-compat",[V1]:"fire-vertex","fire-js":"fire-js",[W1]:"fire-js-all"};/**
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
 */const wa=new Map,q1=new Map,_u=new Map;function Zf(t,e){try{t.container.addComponent(e)}catch(n){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cs(t){const e=t.name;if(_u.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;_u.set(e,t);for(const n of wa.values())Zf(n,t);for(const n of q1.values())Zf(n,t);return!0}function Ud(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function lt(t){return t.settings!==void 0}/**
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
 */const G1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new Gi("app","Firebase",G1);/**
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
 */class K1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
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
 */const ws=$1;function Iv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw An.create("bad-app-name",{appName:String(s)});if(n||(n=Cv()),!n)throw An.create("no-options");const i=wa.get(s);if(i){if(xa(n,i.options)&&xa(r,i.config))return i;throw An.create("duplicate-app",{appName:s})}const o=new e1(s);for(const c of _u.values())o.addComponent(c);const a=new K1(n,r,o);return wa.set(s,a),a}function Tv(t=vu){const e=wa.get(t);if(!e&&t===vu&&Cv())return Iv();if(!e)throw An.create("no-app",{appName:t});return e}function Rn(t,e,n){var r;let s=(r=H1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(a.join(" "));return}cs(new vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Q1="firebase-heartbeat-database",Y1=1,Pi="firebase-heartbeat-store";let uc=null;function Pv(){return uc||(uc=f1(Q1,Y1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Pi)}catch(n){console.warn(n)}}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),uc}async function X1(t){try{const n=(await Pv()).transaction(Pi),r=await n.objectStore(Pi).get(Av(t));return await n.done,r}catch(e){if(e instanceof $n)sn.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(n.message)}}}async function ep(t,e){try{const r=(await Pv()).transaction(Pi,"readwrite");await r.objectStore(Pi).put(e,Av(t)),await r.done}catch(n){if(n instanceof $n)sn.warn(n.message);else{const r=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(r.message)}}}function Av(t){return`${t.name}!${t.options.appId}`}/**
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
 */const J1=1024,Z1=30*24*60*60*1e3;class eC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Z1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tp(),{heartbeatsToSend:r,unsentEntries:s}=tC(this._heartbeatsCache.heartbeats),i=va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return sn.warn(n),""}}}function tp(){return new Date().toISOString().substring(0,10)}function tC(t,e=J1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),np(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),np(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uw()?zw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await X1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function np(t){return va(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rC(t){cs(new vr("platform-logger",e=>new g1(e),"PRIVATE")),cs(new vr("heartbeat",e=>new eC(e),"PRIVATE")),Rn(gu,Jf,t),Rn(gu,Jf,"esm2017"),Rn("fire-js","")}rC("");var rp={};const sp="@firebase/database",ip="1.0.8";/**
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
 */let Rv="";function sC(t){Rv=t}/**
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
 */class iC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ti(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class oC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Tt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const jv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new iC(e)}}catch{}return new oC},ir=jv("localStorage"),aC=jv("sessionStorage");/**
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
 */const Xr=new Ld("@firebase/database"),Ov=function(){let t=1;return function(){return t++}}(),Dv=function(t){const e=Yw(t),n=new qw;n.update(e);const r=n.digest();return Od.encodeByteArray(r)},Ki=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ki.apply(null,r):typeof r=="object"?e+=xe(r):e+=r,e+=" "}return e};let oi=null,op=!0;const lC=function(t,e){S(!0,"Can't turn on custom loggers persistently."),Xr.logLevel=X.VERBOSE,oi=Xr.log.bind(Xr)},Te=function(...t){if(op===!0&&(op=!1,oi===null&&aC.get("logging_enabled")===!0&&lC()),oi){const e=Ki.apply(null,t);oi(e)}},Qi=function(t){return function(...e){Te(t,...e)}},yu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ki(...t);Xr.error(e)},on=function(...t){const e=`FIREBASE FATAL ERROR: ${Ki(...t)}`;throw Xr.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+Ki(...t);Xr.warn(e)},cC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},uC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_r="[MIN_NAME]",Ln="[MAX_NAME]",Nr=function(t,e){if(t===e)return 0;if(t===_r||e===Ln)return-1;if(e===_r||t===Ln)return 1;{const n=ap(t),r=ap(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},dC=function(t,e){return t===e?0:t<e?-1:1},Us=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},Vd=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=xe(e[r]),n+=":",n+=Vd(t[e[r]]);return n+="}",n},Mv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Lv=function(t){S(!zd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,c;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const d=u.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(d.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},hC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function pC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const mC=new RegExp("^-?(0*)\\d{1,10}$"),gC=-2147483648,vC=2147483647,ap=function(t){if(mC.test(t)){const e=Number(t);if(e>=gC&&e<=vC)return e}return null},Cs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},_C=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ai=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class yC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class xC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class Bo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bo.OWNER="owner";/**
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
 */const Bd="5",Fv="v",Uv="s",zv="r",Vv="f",Bv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wv="ls",$v="p",xu="ac",Hv="websocket",qv="long_polling";/**
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
 */class Gv{constructor(e,n,r,s,i=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Kv(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===Hv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===qv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wC(t)&&(n.ns=t.namespace);const s=[];return Re(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class CC{constructor(){this.counters_={}}incrementCounter(e,n=1){Tt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return bw(this.counters_)}}/**
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
 */const dc={},hc={};function Wd(t){const e=t.toString();return dc[e]||(dc[e]=new CC),dc[e]}function EC(t,e){const n=t.toString();return hc[n]||(hc[n]=e()),hc[n]}/**
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
 */class SC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Cs(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const lp="start",NC="close",kC="pLPCommand",bC="pRTLPCB",Qv="id",Yv="pw",Xv="ser",IC="cb",TC="seg",PC="ts",AC="d",RC="dframe",Jv=1870,Zv=30,jC=Jv-Zv,OC=25e3,DC=3e4;class $r{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qi(e),this.stats_=Wd(n),this.urlFn=c=>(this.appCheckToken&&(c[xu]=this.appCheckToken),Kv(n,qv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new SC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(DC)),uC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $d((...i)=>{const[o,a,c,u,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===lp)this.id=a,this.password=c;else if(o===NC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[lp]="t",r[Xv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[IC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Fv]=Bd,this.transportSessionId&&(r[Uv]=this.transportSessionId),this.lastSessionId&&(r[Wv]=this.lastSessionId),this.applicationId&&(r[$v]=this.applicationId),this.appCheckToken&&(r[xu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Bv.test(location.hostname)&&(r[zv]=Vv);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$r.forceAllow_=!0}static forceDisallow(){$r.forceDisallow_=!0}static isAvailable(){return $r.forceAllow_?!0:!$r.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hC()&&!fC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=yv(n),s=Mv(r,jC);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[RC]="t",r[Qv]=e,r[Yv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $d{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ov(),window[kC+this.uniqueCallbackIdentifier]=e,window[bC+this.uniqueCallbackIdentifier]=n,this.myIFrame=$d.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Te("frame writing exception"),a.stack&&Te(a.stack),Te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Qv]=this.myID,e[Yv]=this.myPW,e[Xv]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zv+r.length<=Jv;){const o=this.pendingSegs.shift();r=r+"&"+TC+s+"="+o.seg+"&"+PC+s+"="+o.ts+"&"+AC+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(OC)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const MC=16384,LC=45e3;let Ca=null;typeof MozWebSocket<"u"?Ca=MozWebSocket:typeof WebSocket<"u"&&(Ca=WebSocket);class Ct{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qi(this.connId),this.stats_=Wd(n),this.connURL=Ct.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Fv]=Bd,typeof location<"u"&&location.hostname&&Bv.test(location.hostname)&&(o[zv]=Vv),n&&(o[Uv]=n),r&&(o[Wv]=r),s&&(o[xu]=s),i&&(o[$v]=i),Kv(e,Hv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ir.set("previous_websocket_failure",!0);try{let r;Fw(),this.mySock=new Ca(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ca!==null&&!Ct.forceDisallow_}static previouslyFailed(){return ir.isInMemoryStorage||ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ti(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Mv(n,MC);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(LC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ct.responsesRequiredToBeHealthy=2;Ct.healthyTimeout=3e4;/**
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
 */class Ai{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$r,Ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ct&&Ct.isAvailable();let r=n&&!Ct.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ct];else{const s=this.transports_=[];for(const i of Ai.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ai.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ai.globalTransportInitialized_=!1;/**
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
 */const FC=6e4,UC=5e3,zC=10*1024,VC=100*1024,fc="t",cp="d",BC="s",up="r",WC="e",dp="o",hp="a",fp="n",pp="p",$C="h";class HC{constructor(e,n,r,s,i,o,a,c,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qi("c:"+this.id+":"),this.transportManager_=new Ai(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ai(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>VC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fc in e){const n=e[fc];n===hp?this.upgradeIfSecondaryHealthy_():n===up?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Us("t",e),r=Us("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Us("t",e),r=Us("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Us(fc,e);if(cp in e){const r=e[cp];if(n===$C){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===fp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===BC?this.onConnectionShutdown_(r):n===up?this.onReset_(r):n===WC?yu("Server Error: "+r):n===dp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bd!==r&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ai(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(FC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ai(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(UC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class e_{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class t_{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ea extends t_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Md()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ea}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const mp=32,gp=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new K("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fn(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function Hd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function qC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ri(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function n_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function fe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new K(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Fe(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function GC(t,e){const n=Ri(t,0),r=Ri(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=Nr(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function qd(t,e){if(Fn(t)!==Fn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ct(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fn(t)>Fn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class KC{constructor(e,n){this.errorPrefix_=n,this.parts_=Ri(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=il(this.parts_[r]);r_(this)}}function QC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=il(e),r_(t)}function YC(t){const e=t.parts_.pop();t.byteLength_-=il(e),t.parts_.length>0&&(t.byteLength_-=1)}function r_(t){if(t.byteLength_>gp)throw new Error(t.errorPrefix_+"has a key path longer than "+gp+" bytes ("+t.byteLength_+").");if(t.parts_.length>mp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+mp+") or object contains a cycle "+er(t))}function er(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Gd extends t_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Gd}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const zs=1e3,XC=60*5*1e3,vp=30*1e3,JC=1.3,ZC=3e4,eE="server_kill",_p=3;class Zt extends e_{constructor(e,n,r,s,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Zt.nextPersistentConnectionId_++,this.log_=Qi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zs,this.maxReconnectDelay_=XC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Gd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ea.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(xe(i)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new ys,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;Zt.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Tt(e,"w")){const r=gr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Hw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$w(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yu("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ZC&&(this.reconnectDelay_=zs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*JC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Zt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},u=function(h){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new HC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{ze(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(eE)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ze(h),c())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fu(this.interruptReasons_)&&(this.reconnectDelay_=zs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Vd(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_p&&(this.reconnectDelay_=vp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_p&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Rv.replace(/\./g,"-")]=1,Md()?e["framework.cordova"]=1:Sv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ea.getInstance().currentlyOnline();return fu(this.interruptReasons_)&&e}}Zt.nextPersistentConnectionId_=0;Zt.nextConnectionId_=0;/**
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
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
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
 */class ol{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new V(_r,e),s=new V(_r,n);return this.compare(r,s)!==0}minPost(){return V.MIN}}/**
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
 */let ko;class s_ extends ol{static get __EMPTY_NODE(){return ko}static set __EMPTY_NODE(e){ko=e}compare(e,n){return Nr(e.name,n.name)}isDefinedOn(e){throw _s("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(Ln,ko)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,ko)}toString(){return".key"}}const cr=new s_;/**
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
 */class bo{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Se.RED,this.left=s??qe.EMPTY_NODE,this.right=i??qe.EMPTY_NODE}copy(e,n,r,s,i){return new Se(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class tE{copy(e,n,r,s,i){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,n=qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bo(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new tE;/**
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
 */function nE(t,e){return Nr(t.name,e.name)}function Kd(t,e){return Nr(t,e)}/**
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
 */let wu;function rE(t){wu=t}const i_=function(t){return typeof t=="number"?"number:"+Lv(t):"string:"+t},o_=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tt(e,".sv"),"Priority must be a string or number.")}else S(t===wu||t.isEmpty(),"priority of unexpected type.");S(t===wu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let yp;class Ce{constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),o_(this.priorityNode_)}static set __childrenNodeConstructor(e){yp=e}static get __childrenNodeConstructor(){return yp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:U(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||Fn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+i_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Lv(this.value_):e+=this.value_,this.lazyHash_=Dv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ce.VALUE_TYPE_ORDER.indexOf(n),i=Ce.VALUE_TYPE_ORDER.indexOf(r);return S(s>=0,"Unknown leaf type: "+n),S(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let a_,l_;function sE(t){a_=t}function iE(t){l_=t}class oE extends ol{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Nr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(Ln,new Ce("[PRIORITY-POST]",l_))}makePost(e,n){const r=a_(e);return new V(n,new Ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const oe=new oE;/**
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
 */const aE=Math.log(2);class lE{constructor(e){const n=i=>parseInt(Math.log(i)/aE,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sa=function(t,e,n,r){t.sort(e);const s=function(c,u){const d=u-c;let h,f;if(d===0)return null;if(d===1)return h=t[c],f=n?n(h):h,new Se(f,h.node,Se.BLACK,null,null);{const v=parseInt(d/2,10)+c,_=s(c,v),y=s(v+1,u);return h=t[v],f=n?n(h):h,new Se(f,h.node,Se.BLACK,_,y)}},i=function(c){let u=null,d=null,h=t.length;const f=function(_,y){const C=h-_,p=h;h-=_;const m=s(C+1,p),g=t[C],x=n?n(g):g;v(new Se(x,g.node,y,null,m))},v=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<c.count;++_){const y=c.nextBitIsOne(),C=Math.pow(2,c.count-(_+1));y?f(C,Se.BLACK):(f(C,Se.BLACK),f(C,Se.RED))}return d},o=new lE(t.length),a=i(o);return new qe(r||e,a)};/**
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
 */let pc;const Ar={};class Kt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Ar&&oe,"ChildrenNode.ts has not been loaded"),pc=pc||new Kt({".priority":Ar},{".priority":oe}),pc}get(e){const n=gr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qe?n:null}hasIndex(e){return Tt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==cr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(V.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Sa(r,e.getCompare()):a=Ar;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new Kt(d,u)}addToIndexes(e,n){const r=ya(this.indexes_,(s,i)=>{const o=gr(this.indexSet_,i);if(S(o,"Missing index implementation for "+i),s===Ar)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(V.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),Sa(a,o.getCompare())}else return Ar;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new V(e.name,a))),c.insert(e,e.node)}});return new Kt(r,this.indexSet_)}removeFromIndexes(e,n){const r=ya(this.indexes_,s=>{if(s===Ar)return s;{const i=n.get(e.name);return i?s.remove(new V(e.name,i)):s}});return new Kt(r,this.indexSet_)}}/**
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
 */let Vs;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&o_(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Vs||(Vs=new j(new qe(Kd),null,Kt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vs}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Vs:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new V(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Vs:this.priorityNode_;return new j(s,o,i)}}updateChild(e,n){const r=U(e);if(r===null)return n;{S(U(e)!==".priority"||Fn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ee(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(oe,(o,a)=>{n[o]=a.val(e),r++,i&&j.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+i_(this.getPriority().val())+":"),this.forEachChild(oe,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Dv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new V(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,V.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yi?-1:0}withIndex(e){if(e===cr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===cr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(oe),s=n.getIterator(oe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===cr?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cE extends j{constructor(){super(new qe(Kd),j.EMPTY_NODE,Kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Yi=new cE;Object.defineProperties(V,{MIN:{value:new V(_r,j.EMPTY_NODE)},MAX:{value:new V(Ln,Yi)}});s_.__EMPTY_NODE=j.EMPTY_NODE;Ce.__childrenNodeConstructor=j;rE(Yi);iE(Yi);/**
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
 */const uE=!0;function ve(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,ve(e))}if(!(t instanceof Array)&&uE){const n=[];let r=!1;if(Re(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=ve(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new V(o,c)))}}),n.length===0)return j.EMPTY_NODE;const i=Sa(n,nE,o=>o.name,Kd);if(r){const o=Sa(n,oe.getCompare());return new j(i,ve(e),new Kt({".priority":o},{".priority":oe}))}else return new j(i,ve(e),Kt.Default)}else{let n=j.EMPTY_NODE;return Re(t,(r,s)=>{if(Tt(t,r)&&r.substring(0,1)!=="."){const i=ve(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(ve(e))}}sE(ve);/**
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
 */class Qd extends ol{constructor(e){super(),this.indexPath_=e,S(!z(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Nr(e.name,n.name):i}makePost(e,n){const r=ve(e),s=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new V(n,s)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Yi);return new V(Ln,e)}toString(){return Ri(this.indexPath_,0).join("/")}}/**
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
 */class dE extends ol{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Nr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const r=ve(e);return new V(n,r)}toString(){return".value"}}const c_=new dE;/**
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
 */function u_(t){return{type:"value",snapshotNode:t}}function us(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ji(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Oi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function hE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Yd{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ji(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(us(n,r)):o.trackChildChange(Oi(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(oe,(s,i)=>{n.hasChild(s)||r.trackChildChange(ji(s,i))}),n.isLeafNode()||n.forEachChild(oe,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Oi(s,i,o))}else r.trackChildChange(us(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Di{constructor(e){this.indexedFilter_=new Yd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Di.getStartPost_(e),this.endPost_=Di.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new V(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(j.EMPTY_NODE);const i=this;return n.forEachChild(oe,(o,a)=>{i.matches(new V(o,a))||(s=s.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class fE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Di(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new V(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=j.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(j.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,v)=>h(v,f)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const c=new V(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const v=f==null?1:o(f,c);if(d&&!r.isEmpty()&&v>=0)return i!=null&&i.trackChildChange(Oi(n,r,h)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(ji(n,h));const y=a.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(us(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:d&&o(u,c)>=0?(i!=null&&(i.trackChildChange(ji(u.name,u.node)),i.trackChildChange(us(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
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
 */class Xd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_r}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new Xd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pE(t){return t.loadsAllData()?new Yd(t.getIndex()):t.hasLimit()?new fE(t):new Di(t)}function mE(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function gE(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function vE(t,e){const n=t.copy();return n.index_=e,n}function xp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===c_?n="$value":t.index_===cr?n="$key":(S(t.index_ instanceof Qd,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
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
 */class Na extends e_{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Qi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Na.getListenId_(e,r),a={};this.listens_[o]=a;const c=xp(e._queryParams);this.restRequest_(i+".json",c,(u,d)=>{let h=d;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(i,h,!1,r),gr(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,n){const r=Na.getListenId_(e,n);delete this.listens_[r]}get(e){const n=xp(e._queryParams),r=e._path.toString(),s=new ys;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ti(a.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class _E{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ka(){return{value:null,children:new Map}}function d_(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,ka());const s=t.children.get(r);e=ee(e),d_(s,e,n)}}function Cu(t,e,n){t.value!==null?n(e,t.value):yE(t,(r,s)=>{const i=new K(e.toString()+"/"+r);Cu(s,i,n)})}function yE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class xE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const Cp=10*1e3,wE=30*1e3,CE=5*60*1e3;class EE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xE(e);const r=Cp+(wE-Cp)*Math.random();ai(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Re(e,(s,i)=>{i>0&&Tt(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ai(this.reportStats_.bind(this),Math.floor(Math.random()*2*CE))}}/**
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
 */var Et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Et||(Et={}));function Jd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function eh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ba{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Et.ACK_USER_WRITE,this.source=Jd()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new ba($(),n,this.revert)}}else return S(U(this.path)===e,"operationForChild called for unrelated child."),new ba(ee(this.path),this.affectedTree,this.revert)}}/**
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
 */class Mi{constructor(e,n){this.source=e,this.path=n,this.type=Et.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Mi(this.source,$()):new Mi(this.source,ee(this.path))}}/**
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
 */class yr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Et.OVERWRITE}operationForChild(e){return z(this.path)?new yr(this.source,$(),this.snap.getImmediateChild(e)):new yr(this.source,ee(this.path),this.snap)}}/**
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
 */class ds{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Et.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new yr(this.source,$(),n.value):new ds(this.source,$(),n)}else return S(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ds(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Un{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class SE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function NE(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(hE(o.childName,o.snapshotNode))}),Bs(t,s,"child_removed",e,r,n),Bs(t,s,"child_added",e,r,n),Bs(t,s,"child_moved",i,r,n),Bs(t,s,"child_changed",e,r,n),Bs(t,s,"value",e,r,n),s}function Bs(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,c)=>bE(t,a,c)),o.forEach(a=>{const c=kE(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function kE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bE(t,e,n){if(e.childName==null||n.childName==null)throw _s("Should only compare child_ events.");const r=new V(e.childName,e.snapshotNode),s=new V(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function al(t,e){return{eventCache:t,serverCache:e}}function li(t,e,n,r){return al(new Un(e,n,r),t.serverCache)}function h_(t,e,n,r){return al(t.eventCache,new Un(e,n,r))}function Ia(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let mc;const IE=()=>(mc||(mc=new qe(dC)),mc);class Z{constructor(e,n=IE()){this.value=e,this.children=n}static fromObject(e){let n=new Z(null);return Re(e,(r,s)=>{n=n.set(new K(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(z(e))return null;{const r=U(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ee(e),n);return i!=null?{path:fe(new K(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(ee(e)):new Z(null)}}set(e,n){if(z(e))return new Z(n,this.children);{const r=U(e),i=(this.children.get(r)||new Z(null)).set(ee(e),n),o=this.children.insert(r,i);return new Z(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const s=r.remove(ee(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Z(null):new Z(this.value,i)}else return this}}get(e){if(z(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(ee(e)):null}}setTree(e,n){if(z(e))return n;{const r=U(e),i=(this.children.get(r)||new Z(null)).setTree(ee(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Z(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(fe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(z(e))return null;{const i=U(e),o=this.children.get(i);return o?o.findOnPath_(ee(e),fe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const s=U(e),i=this.children.get(s);return i?i.foreachOnPath_(ee(e),fe(n,s),r):new Z(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(fe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class kt{constructor(e){this.writeTree_=e}static empty(){return new kt(new Z(null))}}function ci(t,e,n){if(z(e))return new kt(new Z(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Fe(s,e);return i=i.updateChild(o,n),new kt(t.writeTree_.set(s,i))}else{const s=new Z(n),i=t.writeTree_.setTree(e,s);return new kt(i)}}}function Eu(t,e,n){let r=t;return Re(n,(s,i)=>{r=ci(r,fe(e,s),i)}),r}function Ep(t,e){if(z(e))return kt.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new kt(n)}}function Su(t,e){return kr(t,e)!=null}function kr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function Sp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(r,s)=>{e.push(new V(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new V(r,s.value))}),e}function jn(t,e){if(z(e))return t;{const n=kr(t,e);return n!=null?new kt(new Z(n)):new kt(t.writeTree_.subtree(e))}}function Nu(t){return t.writeTree_.isEmpty()}function hs(t,e){return f_($(),t.writeTree_,e)}function f_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(S(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=f_(fe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(fe(t,".priority"),r)),n}}/**
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
 */function ll(t,e){return v_(e,t)}function TE(t,e,n,r,s){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ci(t.visibleWrites,e,n)),t.lastWriteId=r}function PE(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Eu(t.visibleWrites,e,n),t.lastWriteId=r}function AE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function RE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&jE(a,r.path)?s=!1:ct(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return OE(t),!0;if(r.snap)t.visibleWrites=Ep(t.visibleWrites,r.path);else{const a=r.children;Re(a,c=>{t.visibleWrites=Ep(t.visibleWrites,fe(r.path,c))})}return!0}else return!1}function jE(t,e){if(t.snap)return ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ct(fe(t.path,n),e))return!0;return!1}function OE(t){t.visibleWrites=p_(t.allWrites,DE,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function DE(t){return t.visible}function p_(t,e,n){let r=kt.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)ct(n,o)?(a=Fe(n,o),r=ci(r,a,i.snap)):ct(o,n)&&(a=Fe(o,n),r=ci(r,$(),i.snap.getChild(a)));else if(i.children){if(ct(n,o))a=Fe(n,o),r=Eu(r,a,i.children);else if(ct(o,n))if(a=Fe(o,n),z(a))r=Eu(r,$(),i.children);else{const c=gr(i.children,U(a));if(c){const u=c.getChild(ee(a));r=ci(r,$(),u)}}}else throw _s("WriteRecord should have .snap or .children")}}return r}function m_(t,e,n,r,s){if(!r&&!s){const i=kr(t.visibleWrites,e);if(i!=null)return i;{const o=jn(t.visibleWrites,e);if(Nu(o))return n;if(n==null&&!Su(o,$()))return null;{const a=n||j.EMPTY_NODE;return hs(o,a)}}}else{const i=jn(t.visibleWrites,e);if(!s&&Nu(i))return n;if(!s&&n==null&&!Su(i,$()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(ct(u.path,e)||ct(e,u.path))},a=p_(t.allWrites,o,e),c=n||j.EMPTY_NODE;return hs(a,c)}}}function ME(t,e,n){let r=j.EMPTY_NODE;const s=kr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(oe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=jn(t.visibleWrites,e);return n.forEachChild(oe,(o,a)=>{const c=hs(jn(i,new K(o)),a);r=r.updateImmediateChild(o,c)}),Sp(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=jn(t.visibleWrites,e);return Sp(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function LE(t,e,n,r,s){S(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=fe(e,n);if(Su(t.visibleWrites,i))return null;{const o=jn(t.visibleWrites,i);return Nu(o)?s.getChild(n):hs(o,s.getChild(n))}}function FE(t,e,n,r){const s=fe(e,n),i=kr(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=jn(t.visibleWrites,s);return hs(o,r.getNode().getImmediateChild(n))}else return null}function UE(t,e){return kr(t.visibleWrites,e)}function zE(t,e,n,r,s,i,o){let a;const c=jn(t.visibleWrites,e),u=kr(c,$());if(u!=null)a=u;else if(n!=null)a=hs(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=f.getNext();for(;v&&d.length<s;)h(v,r)!==0&&d.push(v),v=f.getNext();return d}else return[]}function VE(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function Ta(t,e,n,r){return m_(t.writeTree,t.treePath,e,n,r)}function th(t,e){return ME(t.writeTree,t.treePath,e)}function Np(t,e,n,r){return LE(t.writeTree,t.treePath,e,n,r)}function Pa(t,e){return UE(t.writeTree,fe(t.treePath,e))}function BE(t,e,n,r,s,i){return zE(t.writeTree,t.treePath,e,n,r,s,i)}function nh(t,e,n){return FE(t.writeTree,t.treePath,e,n)}function g_(t,e){return v_(fe(t.treePath,e),t.writeTree)}function v_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class WE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Oi(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,ji(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,us(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Oi(r,e.snapshotNode,s.oldSnap));else throw _s("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class $E{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const __=new $E;class rh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Un(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),i=BE(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function HE(t){return{filter:t}}function qE(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function GE(t,e,n,r,s){const i=new WE;let o,a;if(n.type===Et.OVERWRITE){const u=n;u.source.fromUser?o=ku(t,e,u.path,u.snap,r,s,i):(S(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=Aa(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===Et.MERGE){const u=n;u.source.fromUser?o=QE(t,e,u.path,u.children,r,s,i):(S(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=bu(t,e,u.path,u.children,r,s,a,i))}else if(n.type===Et.ACK_USER_WRITE){const u=n;u.revert?o=JE(t,e,u.path,r,s,i):o=YE(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Et.LISTEN_COMPLETE)o=XE(t,e,n.path,r,i);else throw _s("Unknown operation type: "+n.type);const c=i.getChanges();return KE(e,o,c),{viewCache:o,changes:c}}function KE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Ia(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(u_(Ia(e)))}}function y_(t,e,n,r,s,i){const o=e.eventCache;if(Pa(r,n)!=null)return e;{let a,c;if(z(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=xr(e),d=u instanceof j?u:j.EMPTY_NODE,h=th(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const u=Ta(r,xr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=U(n);if(u===".priority"){S(Fn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const h=Np(r,n,d,c);h!=null?a=t.filter.updatePriority(d,h):a=o.getNode()}else{const d=ee(n);let h;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const f=Np(r,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(u).updateChild(d,f):h=o.getNode().getImmediateChild(u)}else h=nh(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,d,s,i):a=o.getNode()}}return li(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Aa(t,e,n,r,s,i,o,a){const c=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=d.updateFullNode(c.getNode(),r,null);else if(d.filtersNodes()&&!c.isFiltered()){const v=c.getNode().updateChild(n,r);u=d.updateFullNode(c.getNode(),v,null)}else{const v=U(n);if(!c.isCompleteForPath(n)&&Fn(n)>1)return e;const _=ee(n),C=c.getNode().getImmediateChild(v).updateChild(_,r);v===".priority"?u=d.updatePriority(c.getNode(),C):u=d.updateChild(c.getNode(),v,C,_,__,null)}const h=h_(e,u,c.isFullyInitialized()||z(n),d.filtersNodes()),f=new rh(s,h,i);return y_(t,h,n,s,f,a)}function ku(t,e,n,r,s,i,o){const a=e.eventCache;let c,u;const d=new rh(s,e,i);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=li(e,u,!0,t.filter.filtersNodes());else{const h=U(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),c=li(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ee(n),v=a.getNode().getImmediateChild(h);let _;if(z(f))_=r;else{const y=d.getCompleteChild(h);y!=null?Hd(f)===".priority"&&y.getChild(n_(f)).isEmpty()?_=y:_=y.updateChild(f,r):_=j.EMPTY_NODE}if(v.equals(_))c=e;else{const y=t.filter.updateChild(a.getNode(),h,_,f,d,o);c=li(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function kp(t,e){return t.eventCache.isCompleteForChild(e)}function QE(t,e,n,r,s,i,o){let a=e;return r.foreach((c,u)=>{const d=fe(n,c);kp(e,U(d))&&(a=ku(t,a,d,u,s,i,o))}),r.foreach((c,u)=>{const d=fe(n,c);kp(e,U(d))||(a=ku(t,a,d,u,s,i,o))}),a}function bp(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function bu(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;z(n)?u=r:u=new Z(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const v=e.serverCache.getNode().getImmediateChild(h),_=bp(t,v,f);c=Aa(t,c,new K(h),_,s,i,o,a)}}),u.children.inorderTraversal((h,f)=>{const v=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!v){const _=e.serverCache.getNode().getImmediateChild(h),y=bp(t,_,f);c=Aa(t,c,new K(h),y,s,i,o,a)}}),c}function YE(t,e,n,r,s,i,o){if(Pa(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(z(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Aa(t,e,n,c.getNode().getChild(n),s,i,a,o);if(z(n)){let u=new Z(null);return c.getNode().forEachChild(cr,(d,h)=>{u=u.set(new K(d),h)}),bu(t,e,n,u,s,i,a,o)}else return e}else{let u=new Z(null);return r.foreach((d,h)=>{const f=fe(n,d);c.isCompleteForPath(f)&&(u=u.set(d,c.getNode().getChild(f)))}),bu(t,e,n,u,s,i,a,o)}}function XE(t,e,n,r,s){const i=e.serverCache,o=h_(e,i.getNode(),i.isFullyInitialized()||z(n),i.isFiltered());return y_(t,o,n,r,__,s)}function JE(t,e,n,r,s,i){let o;if(Pa(r,n)!=null)return e;{const a=new rh(r,e,s),c=e.eventCache.getNode();let u;if(z(n)||U(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ta(r,xr(e));else{const h=e.serverCache.getNode();S(h instanceof j,"serverChildren would be complete if leaf node"),d=th(r,h)}d=d,u=t.filter.updateFullNode(c,d,i)}else{const d=U(n);let h=nh(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=c.getImmediateChild(d)),h!=null?u=t.filter.updateChild(c,d,h,ee(n),a,i):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(c,d,j.EMPTY_NODE,ee(n),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ta(r,xr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Pa(r,$())!=null,li(e,u,o,t.filter.filtersNodes())}}/**
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
 */class ZE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Yd(r.getIndex()),i=pE(r);this.processor_=HE(i);const o=n.serverCache,a=n.eventCache,c=s.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(j.EMPTY_NODE,a.getNode(),null),d=new Un(c,o.isFullyInitialized(),s.filtersNodes()),h=new Un(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=al(h,d),this.eventGenerator_=new SE(this.query_)}get query(){return this.query_}}function eS(t){return t.viewCache_.serverCache.getNode()}function tS(t){return Ia(t.viewCache_)}function nS(t,e){const n=xr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function Ip(t){return t.eventRegistrations_.length===0}function rS(t,e){t.eventRegistrations_.push(e)}function Tp(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Pp(t,e,n,r){e.type===Et.MERGE&&e.source.queryId!==null&&(S(xr(t.viewCache_),"We should always have a full cache before handling merges"),S(Ia(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=GE(t.processor_,s,e,n,r);return qE(t.processor_,i.viewCache),S(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,x_(t,i.changes,i.viewCache.eventCache.getNode(),null)}function sS(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(i,o)=>{r.push(us(i,o))}),n.isFullyInitialized()&&r.push(u_(n.getNode())),x_(t,r,n.getNode(),e)}function x_(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return NE(t.eventGenerator_,e,n,s)}/**
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
 */let Ra;class w_{constructor(){this.views=new Map}}function iS(t){S(!Ra,"__referenceConstructor has already been defined"),Ra=t}function oS(){return S(Ra,"Reference.ts has not been loaded"),Ra}function aS(t){return t.views.size===0}function sh(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return S(i!=null,"SyncTree gave us an op for an invalid query."),Pp(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Pp(o,e,n,r));return i}}function C_(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Ta(n,s?r:null),c=!1;a?c=!0:r instanceof j?(a=th(n,r),c=!1):(a=j.EMPTY_NODE,c=!1);const u=al(new Un(a,c,!1),new Un(r,s,!1));return new ZE(e,u)}return o}function lS(t,e,n,r,s,i){const o=C_(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rS(o,n),sS(o,n)}function cS(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=zn(t);if(s==="default")for(const[c,u]of t.views.entries())o=o.concat(Tp(u,n,r)),Ip(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||i.push(u.query));else{const c=t.views.get(s);c&&(o=o.concat(Tp(c,n,r)),Ip(c)&&(t.views.delete(s),c.query._queryParams.loadsAllData()||i.push(c.query)))}return a&&!zn(t)&&i.push(new(oS())(e._repo,e._path)),{removed:i,events:o}}function E_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function On(t,e){let n=null;for(const r of t.views.values())n=n||nS(r,e);return n}function S_(t,e){if(e._queryParams.loadsAllData())return cl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function N_(t,e){return S_(t,e)!=null}function zn(t){return cl(t)!=null}function cl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ja;function uS(t){S(!ja,"__referenceConstructor has already been defined"),ja=t}function dS(){return S(ja,"Reference.ts has not been loaded"),ja}let hS=1;class Ap{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=VE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ih(t,e,n,r,s){return TE(t.pendingWriteTree_,e,n,r,s),s?Es(t,new yr(Jd(),e,n)):[]}function fS(t,e,n,r){PE(t.pendingWriteTree_,e,n,r);const s=Z.fromObject(n);return Es(t,new ds(Jd(),e,s))}function wn(t,e,n=!1){const r=AE(t.pendingWriteTree_,e);if(RE(t.pendingWriteTree_,e)){let i=new Z(null);return r.snap!=null?i=i.set($(),!0):Re(r.children,o=>{i=i.set(new K(o),!0)}),Es(t,new ba(r.path,i,n))}else return[]}function Xi(t,e,n){return Es(t,new yr(Zd(),e,n))}function pS(t,e,n){const r=Z.fromObject(n);return Es(t,new ds(Zd(),e,r))}function mS(t,e){return Es(t,new Mi(Zd(),e))}function gS(t,e,n){const r=oh(t,n);if(r){const s=ah(r),i=s.path,o=s.queryId,a=Fe(i,e),c=new Mi(eh(o),a);return lh(t,i,c)}else return[]}function Oa(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||N_(o,e))){const c=cS(o,e,n,r);aS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=c.removed;if(a=c.events,!s){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(f,v)=>zn(v));if(d&&!h){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const v=yS(f);for(let _=0;_<v.length;++_){const y=v[_],C=y.query,p=T_(t,y);t.listenProvider_.startListening(ui(C),Li(t,C),p.hashFn,p.onComplete)}}}!h&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(ui(e),null):u.forEach(f=>{const v=t.queryToTagMap.get(dl(f));t.listenProvider_.stopListening(ui(f),v)}))}xS(t,u)}return a}function k_(t,e,n,r){const s=oh(t,r);if(s!=null){const i=ah(s),o=i.path,a=i.queryId,c=Fe(o,e),u=new yr(eh(a),c,n);return lh(t,o,u)}else return[]}function vS(t,e,n,r){const s=oh(t,r);if(s){const i=ah(s),o=i.path,a=i.queryId,c=Fe(o,e),u=Z.fromObject(n),d=new ds(eh(a),c,u);return lh(t,o,d)}else return[]}function Iu(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,v)=>{const _=Fe(f,s);i=i||On(v,_),o=o||zn(v)});let a=t.syncPointTree_.get(s);a?(o=o||zn(a),i=i||On(a,$())):(a=new w_,t.syncPointTree_=t.syncPointTree_.set(s,a));let c;i!=null?c=!0:(c=!1,i=j.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((v,_)=>{const y=On(_,$());y&&(i=i.updateImmediateChild(v,y))}));const u=N_(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=dl(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const v=wS();t.queryToTagMap.set(f,v),t.tagToQueryMap.set(v,f)}const d=ll(t.pendingWriteTree_,s);let h=lS(a,e,n,d,i,c);if(!u&&!o&&!r){const f=S_(a,e);h=h.concat(CS(t,e,f))}return h}function ul(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Fe(o,e),u=On(a,c);if(u)return u});return m_(s,e,i,n,!0)}function _S(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const h=Fe(u,n);r=r||On(d,h)});let s=t.syncPointTree_.get(n);s?r=r||On(s,$()):(s=new w_,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Un(r,!0,!1):null,a=ll(t.pendingWriteTree_,e._path),c=C_(s,e,a,i?o.getNode():j.EMPTY_NODE,i);return tS(c)}function Es(t,e){return b_(e,t.syncPointTree_,null,ll(t.pendingWriteTree_,$()))}function b_(t,e,n,r){if(z(t.path))return I_(t,e,n,r);{const s=e.get($());n==null&&s!=null&&(n=On(s,$()));let i=[];const o=U(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,d=g_(r,o);i=i.concat(b_(a,c,u,d))}return s&&(i=i.concat(sh(s,t,r,n))),i}}function I_(t,e,n,r){const s=e.get($());n==null&&s!=null&&(n=On(s,$()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=g_(r,o),d=t.operationForChild(o);d&&(i=i.concat(I_(d,a,c,u)))}),s&&(i=i.concat(sh(s,t,r,n))),i}function T_(t,e){const n=e.query,r=Li(t,n);return{hashFn:()=>(eS(e)||j.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?gS(t,n._path,r):mS(t,n._path);{const i=pC(s,n);return Oa(t,n,null,i)}}}}function Li(t,e){const n=dl(e);return t.queryToTagMap.get(n)}function dl(t){return t._path.toString()+"$"+t._queryIdentifier}function oh(t,e){return t.tagToQueryMap.get(e)}function ah(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function lh(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const s=ll(t.pendingWriteTree_,e);return sh(r,n,s,null)}function yS(t){return t.fold((e,n,r)=>{if(n&&zn(n))return[cl(n)];{let s=[];return n&&(s=E_(n)),Re(r,(i,o)=>{s=s.concat(o)}),s}})}function ui(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(dS())(t._repo,t._path):t}function xS(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=dl(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function wS(){return hS++}function CS(t,e,n){const r=e._path,s=Li(t,e),i=T_(t,n),o=t.listenProvider_.startListening(ui(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)S(!zn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((u,d,h)=>{if(!z(u)&&d&&zn(d))return[cl(d).query];{let f=[];return d&&(f=f.concat(E_(d).map(v=>v.query))),Re(h,(v,_)=>{f=f.concat(_)}),f}});for(let u=0;u<c.length;++u){const d=c[u];t.listenProvider_.stopListening(ui(d),Li(t,d))}}return o}/**
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
 */class ch{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ch(n)}node(){return this.node_}}class uh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new uh(this.syncTree_,n)}node(){return ul(this.syncTree_,this.path_)}}const ES=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Rp=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return SS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return NS(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},SS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},NS=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const s=e.node();if(S(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},P_=function(t,e,n,r){return hh(e,new uh(n,t),r)},dh=function(t,e,n){return hh(t,new ch(e),n)};function hh(t,e,n){const r=t.getPriority().val(),s=Rp(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Rp(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ce(a,ve(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ce(s))),o.forEachChild(oe,(a,c)=>{const u=hh(c,e.getImmediateChild(a),n);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class fh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function hl(t,e){let n=e instanceof K?e:new K(e),r=t,s=U(n);for(;s!==null;){const i=gr(r.node.children,s)||{children:{},childCount:0};r=new fh(s,r,i),n=ee(n),s=U(n)}return r}function br(t){return t.node.value}function ph(t,e){t.node.value=e,Tu(t)}function A_(t){return t.node.childCount>0}function kS(t){return br(t)===void 0&&!A_(t)}function fl(t,e){Re(t.node.children,(n,r)=>{e(new fh(n,t,r))})}function R_(t,e,n,r){n&&e(t),fl(t,s=>{R_(s,e,!0)})}function bS(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ji(t){return new K(t.parent===null?t.name:Ji(t.parent)+"/"+t.name)}function Tu(t){t.parent!==null&&IS(t.parent,t.name,t)}function IS(t,e,n){const r=kS(n),s=Tt(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Tu(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Tu(t))}/**
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
 */const TS=/[\[\].#$\/\u0000-\u001F\u007F]/,PS=/[\[\].#$\u0000-\u001F\u007F]/,gc=10*1024*1024,mh=function(t){return typeof t=="string"&&t.length!==0&&!TS.test(t)},j_=function(t){return typeof t=="string"&&t.length!==0&&!PS.test(t)},AS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),j_(t)},Da=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!zd(t)||t&&typeof t=="object"&&Tt(t,".sv")},gh=function(t,e,n,r){r&&e===void 0||Zi(sl(t,"value"),e,n)},Zi=function(t,e,n){const r=n instanceof K?new KC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+er(r));if(typeof e=="function")throw new Error(t+"contains a function "+er(r)+" with contents = "+e.toString());if(zd(e))throw new Error(t+"contains "+e.toString()+" "+er(r));if(typeof e=="string"&&e.length>gc/3&&il(e)>gc)throw new Error(t+"contains a string greater than "+gc+" utf8 bytes "+er(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Re(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!mh(o)))throw new Error(t+" contains an invalid key ("+o+") "+er(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);QC(r,o),Zi(t,a,r),YC(r)}),s&&i)throw new Error(t+' contains ".value" child '+er(r)+" in addition to actual children.")}},RS=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Ri(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!mh(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(GC);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&ct(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},jS=function(t,e,n,r){const s=sl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Re(e,(o,a)=>{const c=new K(o);if(Zi(s,a,fe(n,c)),Hd(c)===".priority"&&!Da(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(c)}),RS(s,i)},vh=function(t,e,n,r){if(!j_(n))throw new Error(sl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},OS=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vh(t,e,n)},pl=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},DS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!mh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!AS(n))throw new Error(sl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class MS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ml(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!qd(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function O_(t,e,n){ml(t,n),D_(t,r=>qd(r,e))}function tt(t,e,n){ml(t,n),D_(t,r=>ct(r,e)||ct(e,r))}function D_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(LS(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function LS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();oi&&Te("event: "+n.toString()),Cs(r)}}}/**
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
 */const FS="repo_interrupt",US=25;class zS{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new MS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ka(),this.transactionQueueTree_=new fh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VS(t,e,n){if(t.stats_=Wd(t.repoInfo_),t.forceRestClient_||_C())t.server_=new Na(t.repoInfo_,(r,s,i,o)=>{jp(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Op(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Zt(t.repoInfo_,e,(r,s,i,o)=>{jp(t,r,s,i,o)},r=>{Op(t,r)},r=>{BS(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=EC(t.repoInfo_,()=>new EE(t.stats_,t.server_)),t.infoData_=new _E,t.infoSyncTree_=new Ap({startListening:(r,s,i,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Xi(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_h(t,"connected",!1),t.serverSyncTree_=new Ap({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,c)=>{const u=o(a,c);tt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function M_(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function eo(t){return ES({timestamp:M_(t)})}function jp(t,e,n,r,s){t.dataUpdateCount++;const i=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const c=ya(n,u=>ve(u));o=vS(t.serverSyncTree_,i,c,s)}else{const c=ve(n);o=k_(t.serverSyncTree_,i,c,s)}else if(r){const c=ya(n,u=>ve(u));o=pS(t.serverSyncTree_,i,c)}else{const c=ve(n);o=Xi(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=fs(t,i)),tt(t.eventQueue_,a,o)}function Op(t,e){_h(t,"connected",e),e===!1&&qS(t)}function BS(t,e){Re(e,(n,r)=>{_h(t,n,r)})}function _h(t,e,n){const r=new K("/.info/"+e),s=ve(n);t.infoData_.updateSnapshot(r,s);const i=Xi(t.infoSyncTree_,r,s);tt(t.eventQueue_,r,i)}function gl(t){return t.nextWriteId_++}function WS(t,e,n){const r=_S(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=ve(s).withIndex(e._queryParams.getIndex());Iu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Xi(t.serverSyncTree_,e._path,i);else{const a=Li(t.serverSyncTree_,e);o=k_(t.serverSyncTree_,e._path,i,a)}return tt(t.eventQueue_,e._path,o),Oa(t.serverSyncTree_,e,n,null,!0),i},s=>(Ss(t,"get for query "+xe(e)+" failed: "+s),Promise.reject(new Error(s))))}function $S(t,e,n,r,s){Ss(t,"set",{path:e.toString(),value:n,priority:r});const i=eo(t),o=ve(n,r),a=ul(t.serverSyncTree_,e),c=dh(o,a,i),u=gl(t),d=ih(t.serverSyncTree_,e,c,u,!0);ml(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,v)=>{const _=f==="ok";_||ze("set at "+e+" failed: "+f);const y=wn(t.serverSyncTree_,u,!_);tt(t.eventQueue_,e,y),Pu(t,s,f,v)});const h=xh(t,e);fs(t,h),tt(t.eventQueue_,h,[])}function HS(t,e,n,r){Ss(t,"update",{path:e.toString(),value:n});let s=!0;const i=eo(t),o={};if(Re(n,(a,c)=>{s=!1,o[a]=P_(fe(e,a),ve(c),t.serverSyncTree_,i)}),s)Te("update() called with empty data.  Don't do anything."),Pu(t,r,"ok",void 0);else{const a=gl(t),c=fS(t.serverSyncTree_,e,o,a);ml(t.eventQueue_,c),t.server_.merge(e.toString(),n,(u,d)=>{const h=u==="ok";h||ze("update at "+e+" failed: "+u);const f=wn(t.serverSyncTree_,a,!h),v=f.length>0?fs(t,e):e;tt(t.eventQueue_,v,f),Pu(t,r,u,d)}),Re(n,u=>{const d=xh(t,fe(e,u));fs(t,d)}),tt(t.eventQueue_,e,[])}}function qS(t){Ss(t,"onDisconnectEvents");const e=eo(t),n=ka();Cu(t.onDisconnect_,$(),(s,i)=>{const o=P_(s,i,t.serverSyncTree_,e);d_(n,s,o)});let r=[];Cu(n,$(),(s,i)=>{r=r.concat(Xi(t.serverSyncTree_,s,i));const o=xh(t,s);fs(t,o)}),t.onDisconnect_=ka(),tt(t.eventQueue_,$(),r)}function GS(t,e,n){let r;U(e._path)===".info"?r=Iu(t.infoSyncTree_,e,n):r=Iu(t.serverSyncTree_,e,n),O_(t.eventQueue_,e._path,r)}function Dp(t,e,n){let r;U(e._path)===".info"?r=Oa(t.infoSyncTree_,e,n):r=Oa(t.serverSyncTree_,e,n),O_(t.eventQueue_,e._path,r)}function KS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(FS)}function Ss(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function Pu(t,e,n,r){e&&Cs(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function QS(t,e,n,r,s,i){Ss(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:Ov(),applyLocally:i,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=yh(t,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Zi("transaction failed: Data returned ",c,o.path),o.status=0;const u=hl(t.transactionQueueTree_,e),d=br(u)||[];d.push(o),ph(u,d);let h;typeof c=="object"&&c!==null&&Tt(c,".priority")?(h=gr(c,".priority"),S(Da(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(ul(t.serverSyncTree_,e)||j.EMPTY_NODE).getPriority().val();const f=eo(t),v=ve(c,h),_=dh(v,a,f);o.currentOutputSnapshotRaw=v,o.currentOutputSnapshotResolved=_,o.currentWriteId=gl(t);const y=ih(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);tt(t.eventQueue_,e,y),vl(t,t.transactionQueueTree_)}}function yh(t,e,n){return ul(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function vl(t,e=t.transactionQueueTree_){if(e||_l(t,e),br(e)){const n=F_(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&YS(t,Ji(e),n)}else A_(e)&&fl(e,n=>{vl(t,n)})}function YS(t,e,n){const r=n.map(u=>u.currentWriteId),s=yh(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const d=n[u];S(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=Fe(e,d.path);i=i.updateChild(h,d.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,u=>{Ss(t,"transaction put response",{path:c.toString(),status:u});let d=[];if(u==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(wn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();_l(t,hl(t.transactionQueueTree_,e)),vl(t,t.transactionQueueTree_),tt(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)Cs(h[f])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ze("transaction at "+c.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}fs(t,e)}},o)}function fs(t,e){const n=L_(t,e),r=Ji(n),s=F_(t,n);return XS(t,s,r),r}function XS(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=Fe(n,c.path);let d=!1,h;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,h=c.abortReason,s=s.concat(wn(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=US)d=!0,h="maxretry",s=s.concat(wn(t.serverSyncTree_,c.currentWriteId,!0));else{const f=yh(t,c.path,o);c.currentInputSnapshot=f;const v=e[a].update(f.val());if(v!==void 0){Zi("transaction failed: Data returned ",v,c.path);let _=ve(v);typeof v=="object"&&v!=null&&Tt(v,".priority")||(_=_.updatePriority(f.getPriority()));const C=c.currentWriteId,p=eo(t),m=dh(_,f,p);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=m,c.currentWriteId=gl(t),o.splice(o.indexOf(C),1),s=s.concat(ih(t.serverSyncTree_,c.path,m,c.currentWriteId,c.applyLocally)),s=s.concat(wn(t.serverSyncTree_,C,!0))}else d=!0,h="nodata",s=s.concat(wn(t.serverSyncTree_,c.currentWriteId,!0))}tt(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}_l(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Cs(r[a]);vl(t,t.transactionQueueTree_)}function L_(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&br(r)===void 0;)r=hl(r,n),e=ee(e),n=U(e);return r}function F_(t,e){const n=[];return U_(t,e,n),n.sort((r,s)=>r.order-s.order),n}function U_(t,e,n){const r=br(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);fl(e,s=>{U_(t,s,n)})}function _l(t,e){const n=br(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,ph(e,n.length>0?n:void 0)}fl(e,r=>{_l(t,r)})}function xh(t,e){const n=Ji(L_(t,e)),r=hl(t.transactionQueueTree_,e);return bS(r,s=>{vc(t,s)}),vc(t,r),R_(r,s=>{vc(t,s)}),n}function vc(t,e){const n=br(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?ph(e,void 0):n.length=i+1,tt(t.eventQueue_,Ji(e),s);for(let o=0;o<r.length;o++)Cs(r[o])}}/**
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
 */function JS(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function ZS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mp=function(t,e){const n=eN(t),r=n.namespace;n.domain==="firebase.com"&&on(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&on("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||cC();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Gv(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new K(n.pathString)}},eN=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(s=JS(t.substring(d,h)));const f=ZS(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */const Lp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",tN=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=Lp.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Lp.charAt(e[s]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class nN{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class rN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class z_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ns{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return z(this._path)?null:Hd(this._path)}get ref(){return new Lt(this._repo,this._path)}get _queryIdentifier(){const e=wp(this._queryParams),n=Vd(e);return n==="{}"?"default":n}get _queryObject(){return wp(this._queryParams)}isEqual(e){if(e=ke(e),!(e instanceof Ns))return!1;const n=this._repo===e._repo,r=qd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+qC(this._path)}}function sN(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function V_(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===cr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==_r)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==Ln)throw new Error(r);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===oe){if(e!=null&&!Da(e)||n!=null&&!Da(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(S(t.getIndex()instanceof Qd||t.getIndex()===c_,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function iN(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Lt extends Ns{constructor(e,n){super(e,n,new Xd,!1)}get parent(){const e=n_(this._path);return e===null?null:new Lt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ps{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=Fi(this.ref,e);return new ps(this._node.getChild(n),r,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new ps(s,Fi(this.ref,r),oe)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Q(t,e){return t=ke(t),t._checkNotDeleted("ref"),e!==void 0?Fi(t._root,e):t._root}function Fi(t,e){return t=ke(t),U(t._path)===null?OS("child","path",e):vh("child","path",e),new Lt(t._repo,fe(t._path,e))}function Ws(t,e){t=ke(t),pl("push",t._path),gh("push",e,t._path,!0);const n=M_(t._repo),r=tN(n),s=Fi(t,r),i=Fi(t,r);let o;return e!=null?o=B_(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function oN(t){return pl("remove",t._path),B_(t,null)}function B_(t,e){t=ke(t),pl("set",t._path),gh("set",e,t._path,!1);const n=new ys;return $S(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Bt(t,e){jS("update",e,t._path);const n=new ys;return HS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Au(t){t=ke(t);const e=new z_(()=>{}),n=new yl(e);return WS(t._repo,t,n).then(r=>new ps(r,new Lt(t._repo,t._path),t._queryParams.getIndex()))}class yl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new nN("value",this,new ps(e.snapshotNode,new Lt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new rN(this,e,n):null}matches(e){return e instanceof yl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function aN(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const c=n,u=(d,h)=>{Dp(t._repo,t,a),c(d,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new z_(n,i||void 0),a=new yl(o);return GS(t._repo,t,a),()=>Dp(t._repo,t,a)}function Ru(t,e,n,r){return aN(t,"value",e,n,r)}class wh{}class lN extends wh{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){gh("startAt",this._value,e._path,!0);const n=gE(e._queryParams,this._value,this._key);if(iN(n),V_(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ns(e._repo,e._path,n,e._orderByCalled)}}function cN(t=null,e){return new lN(t,e)}class uN extends wh{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ns(e._repo,e._path,mE(e._queryParams,this._limit),e._orderByCalled)}}function dN(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new uN(t)}class hN extends wh{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){sN(e,"orderByChild");const n=new K(this._path);if(z(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Qd(n),s=vE(e._queryParams,r);return V_(s),new Ns(e._repo,e._path,s,!0)}}function fN(t){return vh("orderByChild","path",t),new hN(t)}function Fp(t,...e){let n=ke(t);for(const r of e)n=r._apply(n);return n}iS(Lt);uS(Lt);/**
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
 */const pN="FIREBASE_DATABASE_EMULATOR_HOST",ju={};let mN=!1;function gN(t,e,n,r){t.repoInfo_=new Gv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function vN(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||on("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mp(i,s),a=o.repoInfo,c;typeof process<"u"&&rp&&(c=rp[pN]),c?(i=`http://${c}?ns=${a.namespace}`,o=Mp(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new xC(t.name,t.options,e);DS("Invalid Firebase Database URL",o),z(o.path)||on("Database URL must point to the root of a Firebase Database (not including a child path).");const d=yN(a,t,u,new yC(t.name,n));return new xN(d,t)}function _N(t,e){const n=ju[e];(!n||n[t.key]!==t)&&on(`Database ${e}(${t.repoInfo_}) has already been deleted.`),KS(t),delete n[t.key]}function yN(t,e,n,r){let s=ju[e.name];s||(s={},ju[e.name]=s);let i=s[t.toURLString()];return i&&on("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new zS(t,mN,n,r),s[t.toURLString()]=i,i}class xN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_N(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&on("Cannot call "+e+" on a deleted database.")}}function wN(t=Tv(),e){const n=Ud(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=jw("database");r&&CN(n,...r)}return n}function CN(t,e,n,r={}){t=ke(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&on("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&on('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Bo(Bo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Ow(r.mockUserToken,t.app.options.projectId);i=new Bo(o)}gN(s,e,n,i)}/**
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
 */function EN(t){sC(ws),cs(new vr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return vN(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Rn(sp,ip,t),Rn(sp,ip,"esm2017")}/**
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
 */class SN{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function NN(t,e,n){var r;if(t=ke(t),pl("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const s=(r=void 0)!==null&&r!==void 0?r:!0,i=new ys,o=(c,u,d)=>{let h=null;c?i.reject(c):(h=new ps(d,new Lt(t._repo,t._path),oe),i.resolve(new SN(u,h)))},a=Ru(t,()=>{});return QS(t._repo,t._path,e,o,a,s),i.promise}Zt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Zt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};EN();function Ch(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function W_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kN=W_,$_=new Gi("auth","Firebase",W_());/**
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
 */const Ma=new Ld("@firebase/auth");function bN(t,...e){Ma.logLevel<=X.WARN&&Ma.warn(`Auth (${ws}): ${t}`,...e)}function Wo(t,...e){Ma.logLevel<=X.ERROR&&Ma.error(`Auth (${ws}): ${t}`,...e)}/**
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
 */function ft(t,...e){throw Sh(t,...e)}function bt(t,...e){return Sh(t,...e)}function Eh(t,e,n){const r=Object.assign(Object.assign({},kN()),{[e]:n});return new Gi("auth","Firebase",r).create(e,{appName:t.name})}function Dt(t){return Eh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function H_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ft(t,"argument-error"),Eh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $_.create(t,...e)}function O(t,e,...n){if(!t)throw Sh(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wo(e),new Error(e)}function an(t,e){t||Qt(e)}/**
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
 */function Ou(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IN(){return Up()==="http:"||Up()==="https:"}function Up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IN()||Mw()||"connection"in navigator)?navigator.onLine:!0}function PN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class to{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=Md()||Sv()}get(){return TN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nh(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class q_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RN=new to(3e4,6e4);function Hn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qn(t,e,n,r,s={}){return G_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=xs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Dw()||(u.referrerPolicy="no-referrer"),q_.fetch()(K_(t,t.config.apiHost,n,a),u)})}async function G_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AN),e);try{const s=new ON(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Io(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Io(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Eh(t,d,u);ft(t,d)}}catch(s){if(s instanceof $n)throw s;ft(t,"network-request-failed",{message:String(s)})}}async function no(t,e,n,r,s={}){const i=await qn(t,e,n,r,s);return"mfaPendingCredential"in i&&ft(t,"multi-factor-auth-required",{_serverResponse:i}),i}function K_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Nh(t.config,s):`${t.config.apiScheme}://${s}`}function jN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ON{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bt(this.auth,"network-request-failed")),RN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bt(t,e,r);return s.customData._tokenResponse=n,s}function zp(t){return t!==void 0&&t.enterprise!==void 0}class DN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function MN(t,e){return qn(t,"GET","/v2/recaptchaConfig",Hn(t,e))}/**
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
 */async function LN(t,e){return qn(t,"POST","/v1/accounts:delete",e)}async function Q_(t,e){return qn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FN(t,e=!1){const n=ke(t),r=await n.getIdToken(e),s=kh(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:di(_c(s.auth_time)),issuedAtTime:di(_c(s.iat)),expirationTime:di(_c(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _c(t){return Number(t)*1e3}function kh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wo("JWT malformed, contained fewer than 3 sections"),null;try{const s=_a(n);return s?JSON.parse(s):(Wo("Failed to decode base64 JWT payload"),null)}catch(s){return Wo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vp(t){const e=kh(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&UN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Du{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function La(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ui(t,Q_(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Y_(i.providerUserInfo):[],a=BN(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Du(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function VN(t){const e=ke(t);await La(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Y_(t){return t.map(e=>{var{providerId:n}=e,r=Ch(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function WN(t,e){const n=await G_(t,{},async()=>{const r=xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=K_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",q_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $N(t,e){return qn(t,"POST","/v2/accounts:revokeToken",Hn(t,e))}/**
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
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=Vp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await WN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function dn(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ch(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Du(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ui(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FN(this,e)}reload(){return VN(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await La(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await Ui(this,LN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:x,isAnonymous:k,providerData:w,stsTokenManager:N}=n;O(g&&N,e,"internal-error");const T=Jr.fromJSON(this.name,N);O(typeof g=="string",e,"internal-error"),dn(h,e.name),dn(f,e.name),O(typeof x=="boolean",e,"internal-error"),O(typeof k=="boolean",e,"internal-error"),dn(v,e.name),dn(_,e.name),dn(y,e.name),dn(C,e.name),dn(p,e.name),dn(m,e.name);const q=new Yt({uid:g,auth:e,email:f,emailVerified:x,displayName:h,isAnonymous:k,photoURL:_,phoneNumber:v,tenantId:y,stsTokenManager:T,createdAt:p,lastLoginAt:m});return w&&Array.isArray(w)&&(q.providerData=w.map(L=>Object.assign({},L))),C&&(q._redirectEventId=C),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jr;s.updateFromServerResponse(n);const i=new Yt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await La(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];O(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Y_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Jr;a.updateFromIdToken(r);const c=new Yt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Du(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Bp=new Map;function Xt(t){an(t instanceof Function,"Expected a class definition");let e=Bp.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bp.set(t,e),e)}/**
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
 */class X_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}X_.type="NONE";const Wp=X_;/**
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
 */function $o(t,e,n){return`firebase:${t}:${e}:${n}`}class Zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$o(this.userKey,s.apiKey,i),this.fullPersistenceKey=$o("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zr(Xt(Wp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Xt(Wp);const o=$o(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const h=Yt._fromJSON(e,d);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Zr(i,e,r))}}/**
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
 */function $p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ty(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ry(e))return"Blackberry";if(sy(e))return"Webos";if(Z_(e))return"Safari";if((e.includes("chrome/")||ey(e))&&!e.includes("edge/"))return"Chrome";if(ny(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function J_(t=Ve()){return/firefox\//i.test(t)}function Z_(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ey(t=Ve()){return/crios\//i.test(t)}function ty(t=Ve()){return/iemobile/i.test(t)}function ny(t=Ve()){return/android/i.test(t)}function ry(t=Ve()){return/blackberry/i.test(t)}function sy(t=Ve()){return/webos/i.test(t)}function bh(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HN(t=Ve()){var e;return bh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qN(){return Lw()&&document.documentMode===10}function iy(t=Ve()){return bh(t)||ny(t)||sy(t)||ry(t)||/windows phone/i.test(t)||ty(t)}/**
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
 */function oy(t,e=[]){let n;switch(t){case"Browser":n=$p(Ve());break;case"Worker":n=`${$p(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${r}`}/**
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
 */class GN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function KN(t,e={}){return qn(t,"GET","/v2/passwordPolicy",Hn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const QN=6;class YN{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class XN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hp(this),this.idTokenSubscription=new Hp(this),this.beforeStateQueue=new GN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Q_(this,{idToken:e}),r=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await La(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(Dt(this));const n=e?ke(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KN(this),n=new YN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $N(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ft(t){return ke(t)}class Hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gw(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JN(t){xl=t}function ay(t){return xl.loadJS(t)}function ZN(){return xl.recaptchaEnterpriseScript}function ek(){return xl.gapiScript}function tk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const nk="recaptcha-enterprise",rk="NO_RECAPTCHA";class sk{constructor(e){this.type=nk,this.auth=Ft(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{MN(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new DN(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;zp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(rk)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&zp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ZN();c.length!==0&&(c+=a),ay(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function qp(t,e,n,r=!1){const s=new sk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Mu(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await qp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function ik(t,e){const n=Ud(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xa(i,e??{}))return s;ft(s,"already-initialized")}return n.initialize({options:e})}function ok(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ak(t,e,n){const r=Ft(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ly(e),{host:o,port:a}=lk(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ck()}function ly(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lk(t){const e=ly(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gp(o)}}}function Gp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ck(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ih{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function uk(t,e){return qn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function dk(t,e){return no(t,"POST","/v1/accounts:signInWithPassword",Hn(t,e))}/**
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
 */async function hk(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}async function fk(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}/**
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
 */class zi extends Ih{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new zi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mu(e,n,"signInWithPassword",dk);case"emailLink":return hk(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mu(e,r,"signUpPassword",uk);case"emailLink":return fk(e,{idToken:n,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function es(t,e){return no(t,"POST","/v1/accounts:signInWithIdp",Hn(t,e))}/**
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
 */const pk="http://localhost";class wr extends Ih{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ch(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,es(e,n)}buildRequest(){const e={requestUri:pk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xs(n)}return e}}/**
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
 */function mk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gk(t){const e=Qs(Ys(t)).link,n=e?Qs(Ys(e)).deep_link_id:null,r=Qs(Ys(t)).deep_link_id;return(r?Qs(Ys(r)).link:null)||r||n||e||t}class Th{constructor(e){var n,r,s,i,o,a;const c=Qs(Ys(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,h=mk((s=c.mode)!==null&&s!==void 0?s:null);O(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gk(e);try{return new Th(n)}catch{return null}}}/**
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
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return zi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Th.parseLink(n);return O(r,"argument-error"),zi._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ro extends wl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gn extends ro{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
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
 */class $t extends ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $t.credential(n,r)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
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
 */class vn extends ro{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
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
 */class _n extends ro{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
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
 */async function vk(t,e){return no(t,"POST","/v1/accounts:signUp",Hn(t,e))}/**
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
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Yt._fromIdTokenResponse(e,r,s),o=Kp(r);return new Cr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Kp(r);return new Cr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Kp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fa extends $n{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fa(e,n,r,s)}}function cy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fa._fromErrorAndOperation(t,i,e,r):i})}async function _k(t,e,n=!1){const r=await Ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",r)}/**
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
 */async function yk(t,e,n=!1){const{auth:r}=t;if(lt(r.app))return Promise.reject(Dt(r));const s="reauthenticate";try{const i=await Ui(t,cy(r,s,e,t),n);O(i.idToken,r,"internal-error");const o=kh(i.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),Cr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),i}}/**
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
 */async function uy(t,e,n=!1){if(lt(t.app))return Promise.reject(Dt(t));const r="signIn",s=await cy(t,r,e),i=await Cr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function xk(t,e){return uy(Ft(t),e)}/**
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
 */async function dy(t){const e=Ft(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wk(t,e,n){if(lt(t.app))return Promise.reject(Dt(t));const r=Ft(t),o=await Mu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vk).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&dy(t),c}),a=await Cr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Ck(t,e,n){return lt(t.app)?Promise.reject(Dt(t)):xk(ke(t),ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dy(t),r})}function Ek(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function Sk(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function Nk(t,e,n,r){return ke(t).onAuthStateChanged(e,n,r)}function kk(t){return ke(t).signOut()}const Ua="__sak";/**
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
 */class hy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ua,"1"),this.storage.removeItem(Ua),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const bk=1e3,Ik=10;class fy extends hy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);qN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ik):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fy.type="LOCAL";const Tk=fy;/**
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
 */class py extends hy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}py.type="SESSION";const my=py;/**
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
 */function Pk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Pk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cl.receivers=[];/**
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
 */function Ph(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ak{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ph("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Mt(){return window}function Rk(t){Mt().location.href=t}/**
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
 */function gy(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function jk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ok(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dk(){return gy()?self:null}/**
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
 */const vy="firebaseLocalStorageDb",Mk=1,za="firebaseLocalStorage",_y="fbase_key";class so{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function El(t,e){return t.transaction([za],e?"readwrite":"readonly").objectStore(za)}function Lk(){const t=indexedDB.deleteDatabase(vy);return new so(t).toPromise()}function Lu(){const t=indexedDB.open(vy,Mk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(za,{keyPath:_y})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(za)?e(r):(r.close(),await Lk(),e(await Lu()))})})}async function Qp(t,e,n){const r=El(t,!0).put({[_y]:e,value:n});return new so(r).toPromise()}async function Fk(t,e){const n=El(t,!1).get(e),r=await new so(n).toPromise();return r===void 0?null:r.value}function Yp(t,e){const n=El(t,!0).delete(e);return new so(n).toPromise()}const Uk=800,zk=3;class yy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cl._getInstance(Dk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jk(),!this.activeServiceWorker)return;this.sender=new Ak(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ok()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lu();return await Qp(e,Ua,"1"),await Yp(e,Ua),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Fk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=El(s,!1).getAll();return new so(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yy.type="LOCAL";const Vk=yy;new to(3e4,6e4);/**
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
 */function Ah(t,e){return e?Xt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rh extends Ih{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bk(t){return uy(t.auth,new Rh(t),t.bypassAuthState)}function Wk(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),yk(n,new Rh(t),t.bypassAuthState)}async function $k(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),_k(n,new Rh(t),t.bypassAuthState)}/**
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
 */class xy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bk;case"linkViaPopup":case"linkViaRedirect":return $k;case"reauthViaPopup":case"reauthViaRedirect":return Wk;default:ft(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hk=new to(2e3,1e4);async function qk(t,e,n){if(lt(t.app))return Promise.reject(bt(t,"operation-not-supported-in-this-environment"));const r=Ft(t);H_(t,e,wl);const s=Ah(r,n);return new or(r,"signInViaPopup",e,s).executeNotNull()}class or extends xy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=Ph();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hk.get())};e()}}or.currentPopupAction=null;/**
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
 */const Gk="pendingRedirect",Ho=new Map;class Kk extends xy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ho.get(this.auth._key());if(!e){try{const r=await Qk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ho.set(this.auth._key(),e)}return this.bypassAuthState||Ho.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qk(t,e){const n=Cy(e),r=wy(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function Yk(t,e){return wy(t)._set(Cy(e),"true")}function Xk(t,e){Ho.set(t._key(),e)}function wy(t){return Xt(t._redirectPersistence)}function Cy(t){return $o(Gk,t.config.apiKey,t.name)}/**
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
 */function Jk(t,e,n){return Zk(t,e,n)}async function Zk(t,e,n){if(lt(t.app))return Promise.reject(Dt(t));const r=Ft(t);H_(t,e,wl),await r._initializationPromise;const s=Ah(r,n);return await Yk(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function eb(t,e){return await Ft(t)._initializationPromise,Ey(t,e,!1)}async function Ey(t,e,n=!1){if(lt(t.app))return Promise.reject(Dt(t));const r=Ft(t),s=Ah(r,e),o=await new Kk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const tb=10*60*1e3;class nb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xp(e))}saveEventToCache(e){this.cachedEventUids.add(Xp(e)),this.lastProcessedEventTime=Date.now()}}function Xp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sy(t);default:return!1}}/**
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
 */async function sb(t,e={}){return qn(t,"GET","/v1/projects",e)}/**
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
 */const ib=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ob=/^https?/;async function ab(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sb(t);for(const n of e)try{if(lb(n))return}catch{}ft(t,"unauthorized-domain")}function lb(t){const e=Ou(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ob.test(n))return!1;if(ib.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const cb=new to(3e4,6e4);function Jp(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ub(t){return new Promise((e,n)=>{var r,s,i;function o(){Jp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jp(),n(bt(t,"network-request-failed"))},timeout:cb.get()})}if(!((s=(r=Mt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Mt().gapi)===null||i===void 0)&&i.load)o();else{const a=tk("iframefcb");return Mt()[a]=()=>{gapi.load?o():n(bt(t,"network-request-failed"))},ay(`${ek()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw qo=null,e})}let qo=null;function db(t){return qo=qo||ub(t),qo}/**
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
 */const hb=new to(5e3,15e3),fb="__/auth/iframe",pb="emulator/auth/iframe",mb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vb(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nh(e,pb):`https://${t.config.authDomain}/${fb}`,r={apiKey:e.apiKey,appName:t.name,v:ws},s=gb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xs(r).slice(1)}`}async function _b(t){const e=await db(t),n=Mt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:vb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=bt(t,"network-request-failed"),a=Mt().setTimeout(()=>{i(o)},hb.get());function c(){Mt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const yb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xb=500,wb=600,Cb="_blank",Eb="http://localhost";class Zp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sb(t,e,n,r=xb,s=wb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yb),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ve().toLowerCase();n&&(a=ey(u)?Cb:n),J_(u)&&(e=e||Eb,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[v,_])=>`${f}${v}=${_},`,"");if(HN(u)&&a!=="_self")return Nb(e||"",a),new Zp(null);const h=window.open(e||"",a,d);O(h,t,"popup-blocked");try{h.focus()}catch{}return new Zp(h)}function Nb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kb="__/auth/handler",bb="emulator/auth/handler",Ib=encodeURIComponent("fac");async function em(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ws,eventId:s};if(e instanceof wl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof ro){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await t._getAppCheckToken(),u=c?`#${Ib}=${encodeURIComponent(c)}`:"";return`${Tb(t)}?${xs(a).slice(1)}${u}`}function Tb({config:t}){return t.emulator?Nh(t,bb):`https://${t.authDomain}/${kb}`}/**
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
 */const yc="webStorageSupport";class Pb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=my,this._completeRedirectFn=Ey,this._overrideRedirectResult=Xk}async _openPopup(e,n,r,s){var i;an((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await em(e,n,r,Ou(),s);return Sb(e,o,Ph())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await em(e,n,r,Ou(),s);return Rk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(an(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _b(e),r=new nb(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yc,{type:yc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[yc];o!==void 0&&n(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ab(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iy()||Z_()||bh()}}const Ab=Pb;var tm="@firebase/auth",nm="1.7.9";/**
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
 */class Rb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ob(t){cs(new vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oy(t)},u=new XN(r,s,i,c);return ok(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cs(new vr("auth-internal",e=>{const n=Ft(e.getProvider("auth").getImmediate());return(r=>new Rb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(tm,nm,jb(t)),Rn(tm,nm,"esm2017")}/**
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
 */const Db=5*60,Mb=Ev("authIdTokenMaxAge")||Db;let rm=null;const Lb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mb)return;const s=n==null?void 0:n.token;rm!==s&&(rm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Fb(t=Tv()){const e=Ud(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ik(t,{popupRedirectResolver:Ab,persistence:[Vk,Tk,my]}),r=Ev("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Lb(i.toString());Sk(n,o,()=>o(n.currentUser)),Ek(n,a=>o(a))}}const s=wv("auth");return s&&ak(n,`http://${s}`),n}function Ub(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}JN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=bt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ub().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ob("Browser");var zb="firebase",Vb="10.14.1";/**
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
 */Rn(zb,Vb,"app");const Bb={apiKey:"AIzaSyDJM-VHPdo2ipOFEecEFjxo5W_FQuQ3BAk",authDomain:"vistta-2e1df.firebaseapp.com",databaseURL:"https://vistta-2e1df-default-rtdb.firebaseio.com",projectId:"vistta-2e1df",storageBucket:"vistta-2e1df.firebasestorage.app",messagingSenderId:"13458811244",appId:"1:13458811244:web:e3517470970e9a45142b49",measurementId:"G-TJLG0CPZQM"},Ny=Iv(Bb),tr=Fb(Ny),Y=wN(Ny),se=t=>Number(t||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),ur=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],ky=I.createContext(null),pt=()=>{const t=I.useContext(ky);if(!t)throw new Error("useAppContext deve ser usado dentro de um AppProvider");return t},Wb=({children:t})=>{const[e,n]=I.useState(null),[r,s]=I.useState(!0),[i,o]=I.useState(null),[a,c]=I.useState(null),[u,d]=I.useState(null),[h,f]=I.useState(null),[v,_]=I.useState("dashboard"),[y,C]=I.useState(""),[p,m]=I.useState([]),[g,x]=I.useState([]),[k,w]=I.useState([]),[N,T]=I.useState([]),[q,L]=I.useState([]),[Ye,cn]=I.useState([]),[Gn,bs]=I.useState([]),[Il,Ir]=I.useState([]),[Is,P]=I.useState([]),[D,M]=I.useState([]),[ae,pe]=I.useState([]),[Ut,mt]=I.useState(""),[Tr,zt]=I.useState("Pix"),[Kn,Tl]=I.useState(0),gt=I.useMemo(()=>q.find(b=>b.status==="aberto"),[q]),Oh=I.useMemo(()=>gt?N.filter(b=>b.caixaId===gt.id):[],[N,gt]),Pl=I.useMemo(()=>Oh.reduce((b,R)=>b+(R.total||0),0),[Oh]),Ts=()=>{if(!e)throw new Error("Usuário não autenticado. Entre novamente.");if(!a)throw new Error("Empresa não identificada.");return a},My=async b=>{const R=b.trim();if(!e)throw new Error("Usuário não autenticado.");if(!R)throw new Error("Informe o nome da ótica.");if(a)return;const J=Ws(Q(Y,"empresas"));if(!J.key)throw new Error("Não foi possível criar a empresa.");await Bt(Q(Y,`empresas/${J.key}/info`),{nome:R,criadoEm:new Date().toISOString(),criadoPor:e.uid}),await Bt(Q(Y,`users/${e.uid}`),{empresaId:J.key,role:"admin",email:e.email||""})},Ly=async()=>{await kk(tr),m([]),x([]),w([]),T([]),L([]),cn([]),bs([]),Ir([]),P([]),M([]),pe([]),mt(""),Tl(0)},Ps=async(b,R,J)=>{const H=`empresas/${Ts()}/${b}`;if(J){await Bt(Q(Y,`${H}/${J}`),R);return}const be=Ws(Q(Y,H));await Bt(Q(Y,`${H}/${be.key}`),R)},Al=async(b,R)=>{const J=Ts();await oN(Q(Y,`empresas/${J}/${b}/${R}`))};I.useEffect(()=>{let b,R;const J=()=>{b==null||b(),b=void 0,R&&clearTimeout(R),R=void 0},me=Nk(tr,H=>{J(),H?(f(null),R=setTimeout(()=>{console.error("Tempo excedido ao carregar o perfil do usuário."),n(H),s(!1)},1e4),b=Ru(Q(Y,`users/${H.uid}`),be=>{const de=be.val();c((de==null?void 0:de.empresaId)||null),o((de==null?void 0:de.role)||null),de!=null&&de.empresaId?Au(Q(Y,`empresas/${de.empresaId}/info`)).then(vt=>{d(vt.exists()?vt.val():null)}).catch(vt=>{console.error("Não foi possível carregar os dados da empresa:",vt),f("Não foi possível carregar os dados da empresa.")}):d(null),n(H),s(!1),J()},be=>{console.error("Não foi possível carregar o perfil do usuário:",be),c(null),o(null),n(H),s(!1),J()})):(n(null),c(null),o(null),d(null),f(null),s(!1))});return()=>{J(),me()}},[]),I.useEffect(()=>{if(!a)return;const b=`empresas/${a}`,R=new Date;R.setDate(1),R.setHours(0,0,0,0);const J=[{name:"produtos",setter:x,queryRef:Q(Y,`${b}/produtos`)},{name:"clientes",setter:w,queryRef:Q(Y,`${b}/clientes`)},{name:"fornecedores",setter:Ir,queryRef:Q(Y,`${b}/fornecedores`)},{name:"contas",setter:P,queryRef:Q(Y,`${b}/contas`)},{name:"categorias",setter:M,queryRef:Q(Y,`${b}/categorias`)},{name:"usuarios",setter:pe,queryRef:Q(Y,`${b}/usuarios`)},{name:"orcamentos",setter:cn,queryRef:Q(Y,`${b}/orcamentos`)},{name:"ordensServico",setter:bs,queryRef:Q(Y,`${b}/ordensServico`)},{name:"vendas",setter:T,queryRef:Fp(Q(Y,`${b}/vendas`),fN("data"),cN(R.toISOString()))},{name:"caixas",setter:L,queryRef:Fp(Q(Y,`${b}/caixas`),dN(100))}];f(null);const me=J.map(H=>Ru(H.queryRef,be=>{const de=[];be.forEach(vt=>{const Qn=vt.val(),Yn=Qn&&typeof Qn=="object"?{id:vt.key,...Qn}:{id:vt.key,value:Qn};H.name==="caixas"&&(Yn.lancamentos=ur(Yn.lancamentos)),de.push(Yn)}),H.setter(de)},be=>{console.error(`Erro ao carregar ${H.name}:`,be),f(`Não foi possível carregar ${H.name}. Verifique as regras do Firebase.`)}));return()=>me.forEach(H=>H())},[a]);const Fy=b=>{m(R=>{const J=R.findIndex(me=>me.id===b.id);if(J>-1){const me=[...R];return me[J].qtd=Math.min(me[J].qtd+1,Number(b.qtd)),me}return[...R,{...b,qtd:1}]})},Uy=b=>m(R=>R.filter(J=>J.id!==b)),zy=async b=>{if(gt)throw new Error("Já existe um caixa aberto.");if(!Number.isFinite(b)||b<0)throw new Error("Informe um valor inicial válido.");await Ps("caixas",{dataAbertura:new Date().toISOString(),valorInicial:b,status:"aberto",operador:(e==null?void 0:e.email)||(e==null?void 0:e.uid)||"Operador"})},Vy=async()=>{const b=gt;if(!b)throw new Error("Nenhum caixa aberto.");const R=ur(b.lancamentos).reduce((J,me)=>J+(me.tipo==="entrada"?Number(me.valor):-Number(me.valor)),0);await Bt(Q(Y,`empresas/${Ts()}/caixas/${b.id}`),{status:"fechado",dataFechamento:new Date().toISOString(),totalVendas:Pl,valorFinal:Number(b.valorInicial||0)+Pl+R})},By=(b,R)=>Ps("produtos",b,R),Wy=b=>Al("produtos",b),$y=(b,R)=>Ps("clientes",b,R),Hy=b=>Al("clientes",b),qy=(b,R,J)=>Ps(b,R,J),Gy=(b,R)=>Al(b,R),Dh=(b,R)=>Ps("ordensServico",b,R),Ky={user:e,loadingAuth:r,userRole:i,empresaId:a,dadosEmpresa:u,databaseError:h,configurarOtica:My,logout:Ly,produtos:g,clientes:k,vendas:N,caixas:q,orcamentos:Ye,ordensServico:Gn,carrinho:p,fornecedores:Il,contas:Is,categorias:D,usuarios:ae,activeTab:v,setActiveTab:_,pdvSearch:y,setPdvSearch:C,abrirCaixa:zy,fecharCaixa:Vy,salvarProduto:By,excluirProduto:Wy,salvarCliente:$y,excluirCliente:Hy,salvarCadastro:qy,excluirCadastro:Gy,salvarOrdemServico:Dh,converterOrcamentoParaOs:async b=>{await Dh({clienteId:b.cliId,orcamentoId:b.id,itens:ur(b.itens).map(R=>({produtoId:R.id,descricao:`${R.marca||""} ${R.modelo||""}`.trim(),qtd:Number(R.qtd)||1,valor:Number(R.venda)||0,tratamento:""})),status:"aguardando_montagem",criadoEm:new Date().toISOString(),atualizadoEm:new Date().toISOString()}),await Bt(Q(Y,`empresas/${Ts()}/orcamentos/${b.id}`),{status:"aprovado"})},registrarLancamentoCaixa:async b=>{const R=gt;if(!R)throw new Error("Abra o caixa antes de registrar um lançamento.");if(!Number.isFinite(b.valor)||b.valor<=0)throw new Error("Informe um valor válido.");await Ws(Q(Y,`empresas/${Ts()}/caixas/${R.id}/lancamentos`),{...b,data:new Date().toISOString(),operador:(e==null?void 0:e.email)||(e==null?void 0:e.uid)||"Operador"})},addToCart:Fy,removeFromCart:Uy,finalizarVenda:async(b=!1)=>{if(p.length===0||!a)return alert("Carrinho vazio!");if(!b&&!gt)return alert("Abra o caixa primeiro!");let R=p.reduce((H,be)=>H+Number(be.venda)*be.qtd,0),J=p.reduce((H,be)=>H+Number(be.custo)*be.qtd,0),me=Math.max(0,Number(Kn)||0);me=Math.min(me,R);try{if(b){if(!Ut)return alert("Selecione um cliente para salvar o orçamento!");await Ws(Q(Y,`empresas/${a}/orcamentos`),{cliId:Ut,subtotal:R,desconto:me,total:R-me,itens:p.map(H=>({id:H.id,marca:H.marca,modelo:H.modelo,qtd:H.qtd,venda:H.venda})),data:new Date().toISOString(),status:"pendente"})}else{const H=p.map(async de=>{const vt=Q(Y,`empresas/${a}/produtos/${de.id}/qtd`),Qn=await Au(vt),Yn=Number(Qn.val());if(!Qn.exists()||!Number.isFinite(Yn)||Yn<de.qtd)throw new Error(`Estoque insuficiente para ${de.marca} ${de.modelo}.`);const Rl=await NN(vt,ao=>{if(ao===null)return ao;const Mh=Number(ao)-de.qtd;return Mh>=0?Mh:ao}),Qy=Number(Rl.snapshot.val());if(!Rl.committed||Qy!==Yn-de.qtd)throw new Error(`Não foi possível reservar o estoque de ${de.marca} ${de.modelo}.`);return Rl});await Promise.all(H);const be=Ws(Q(Y,`empresas/${a}/vendas`));await Bt(Q(Y,`empresas/${a}/vendas/${be.key}`),{cliId:Ut,pag:Tr,subtotal:R,desconto:me,total:R-me,custoBase:J,itens:p.length,data:new Date().toISOString(),caixaId:gt==null?void 0:gt.id})}m([]),Tl(0),mt(""),alert(b?"Orçamento salvo!":"Venda concluída com sucesso!")}catch(H){alert("Erro ao finalizar: "+H.message)}},caixaAberto:gt,totalVendasCaixa:Pl,pdvCliente:Ut,setPdvCliente:mt,pdvDesconto:Kn,setPdvDesconto:Tl,pdvPagamento:Tr,setPdvPagamento:zt};return l.jsx(ky.Provider,{value:Ky,children:t})};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=(t,e)=>{const n=I.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:a="",children:c,...u},d)=>I.createElement("svg",{ref:d,...$b,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${Hb(t)}`,a].join(" "),...u},[...e.map(([h,f])=>I.createElement(h,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=F("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=F("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=F("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=F("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=F("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=F("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=F("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=F("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=F("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=F("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=F("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=F("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=F("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=F("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nI=F("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=F("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rI=F("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=F("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=F("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=F("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=F("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iI=F("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=F("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=F("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lI=F("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=F("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=F("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=F("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=F("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cI=F("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=F("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dI=F("Tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=F("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=F("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=F("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hI=F("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=F("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=F("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=F("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Ht({title:t,value:e,subtitle:n,icon:r,bg:s="bg-white dark:bg-slate-800",color:i="text-slate-900 dark:text-white",border:o="border-slate-100 dark:border-slate-700"}){return l.jsxs("div",{className:`p-6 rounded-3xl border shadow-sm ${s} ${o}`,children:[l.jsx("div",{className:"flex items-start justify-between mb-4",children:l.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center ${s==="bg-white dark:bg-slate-800"?"bg-indigo-50 text-[#4A3AFF]":i.replace("text-","bg-").replace("500","100")+" "+i}`,children:l.jsx(r,{size:24})})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-1",children:t}),l.jsx("div",{className:`text-2xl font-black ${i}`,children:e}),n&&l.jsx("p",{className:"text-[12px] font-medium text-slate-400 mt-1",children:n})]})]})}function bl({open:t,onClose:e,title:n,width:r="max-w-md",children:s}){return t?l.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4",children:l.jsxs("div",{className:`bg-white rounded-[32px] w-full ${r} shadow-2xl flex flex-col max-h-[90vh] animate-fade-in`,children:[l.jsxs("div",{className:"flex justify-between items-center p-6 border-b border-slate-100",children:[l.jsx("h2",{className:"text-xl font-bold text-slate-800",children:n}),l.jsx("button",{onClick:e,className:"p-2 bg-slate-100 rounded-full text-slate-500 hover:text-rose-500 transition-colors",children:l.jsx(Oy,{size:20})})]}),l.jsx("div",{className:"overflow-y-auto custom-scrollbar p-6",children:s})]})}):null}function Dy({className:t="",solidWhite:e=!1}){const n=e?"currentColor":"white",r=e?"currentColor":"#a094ff";return l.jsxs("svg",{viewBox:"0 0 120 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:[l.jsxs("g",{stroke:n,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"38",cy:"36",r:"14"}),l.jsx("path",{d:"M 28 26 Q 16 12 10 22"})]}),l.jsxs("g",{stroke:r,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"82",cy:"36",r:"14"}),l.jsx("path",{d:"M 92 26 Q 104 12 110 22"}),l.jsx("path",{d:"M 52 36 Q 60 28 68 36"})]})]})}function st({icon:t,label:e,active:n,onClick:r,badge:s,badgeColor:i}){return l.jsxs("button",{onClick:r,className:`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${n?"bg-indigo-50 text-[#4A3AFF] font-bold":"text-slate-500 hover:bg-slate-100 font-medium"}`,children:[l.jsxs("div",{className:"flex items-center",children:[l.jsx(t,{size:20,className:`mr-3 ${n?"text-[#4A3AFF]":"text-slate-400"}`}),e]}),s&&l.jsx("span",{className:`px-2 py-0.5 rounded-lg text-[11px] font-bold ${i}`,children:s})]})}function To({label:t}){return l.jsx("div",{className:"px-4 py-2 mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:t})}function fI(){var c,u;const{activeTab:t,setActiveTab:e,caixaAberto:n,orcamentos:r,userRole:s,dadosEmpresa:i,user:o,logout:a}=pt();return l.jsxs("aside",{className:"hidden md:flex flex-col w-[270px] bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700/50 z-20 shadow-sm",children:[l.jsxs("div",{className:"h-[80px] flex items-center px-6 border-b border-slate-100 dark:border-slate-700/50 flex-shrink-0",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#4A3AFF] text-white flex items-center justify-center mr-3",children:l.jsx(Dy,{className:"w-7",solidWhite:!0})}),l.jsx("span",{className:"font-bold text-[18px] text-slate-900 dark:text-white truncate",title:i==null?void 0:i.nome,children:(i==null?void 0:i.nome)||"Minha Ótica"})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar",children:[l.jsx(st,{icon:Iy,label:"Dashboard",active:t==="dashboard",onClick:()=>e("dashboard")}),l.jsx(To,{label:"Operação"}),l.jsx(st,{icon:jy,label:"Caixa Diário",active:t==="caixa",onClick:()=>e("caixa"),badge:n?"Aberto":"Fechado",badgeColor:n?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-500"}),l.jsx(st,{icon:jh,label:"PDV",active:t==="vendas",onClick:()=>e("vendas")}),l.jsx(st,{icon:Uu,label:"Orçamentos",active:t==="orcamentos",onClick:()=>e("orcamentos"),badge:r.filter(d=>d.status==="pendente").length||null,badgeColor:"bg-amber-100 text-amber-700"}),l.jsx(st,{icon:Uu,label:"Ordens de Serviço",active:t==="ordens",onClick:()=>e("ordens")}),l.jsx(To,{label:"Cadastros"}),l.jsx(st,{icon:Sl,label:"Estoque",active:t==="estoque",onClick:()=>e("estoque")}),l.jsx(st,{icon:oo,label:"Clientes",active:t==="clientes",onClick:()=>e("clientes")}),l.jsx(st,{icon:dI,label:"Categorias",active:t==="categorias",onClick:()=>e("categorias")}),s==="admin"&&l.jsxs(l.Fragment,{children:[l.jsx(To,{label:"Gestão (Admin)"}),l.jsx(st,{icon:Va,label:"DRE Financeiro",active:t==="financeiro",onClick:()=>e("financeiro")}),l.jsx(st,{icon:Fu,label:"Contas",active:t==="contas",onClick:()=>e("contas")}),l.jsx(st,{icon:hI,label:"Usuários",active:t==="usuarios",onClick:()=>e("usuarios")})]}),l.jsx(To,{label:"Suporte"}),l.jsx(st,{icon:Jb,label:"Ajuda e Treinamento",active:t==="ajuda",onClick:()=>e("ajuda")})]}),l.jsxs("div",{className:"p-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center min-w-0",children:[l.jsx("div",{className:"w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-[#4A3AFF] flex items-center justify-center font-bold mr-3",children:((c=o==null?void 0:o.email)==null?void 0:c.charAt(0).toUpperCase())||"U"}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"text-sm font-bold truncate text-slate-900 dark:text-white",children:((u=o==null?void 0:o.email)==null?void 0:u.split("@")[0])||"Usuário"}),l.jsx("div",{className:"text-[10px] text-slate-500 font-bold uppercase",children:s==="admin"?"Administrador":"Vendedor"})]})]}),l.jsx("button",{onClick:()=>a().catch(d=>console.error("Não foi possível sair:",d)),className:"text-slate-400 hover:text-rose-500",title:"Sair",children:l.jsx(Ty,{size:18})})]})]})}function pI(){const[t,e]=I.useState("login"),[n,r]=I.useState(!1),[s,i]=I.useState(""),[o,a]=I.useState(""),[c,u]=I.useState(""),[d,h]=I.useState(""),[f,v]=I.useState(!1),[_,y]=I.useState(!0),[C,p]=I.useState(!1),m=async w=>{const N=Q(Y,`users/${w.uid}`);(await Au(N)).exists()||await Bt(N,{role:"admin",email:w.email||"",nome:w.displayName||""})};I.useEffect(()=>{let w=!0;return(async()=>{try{const T=await eb(tr);if(!T||!w)return;r(!0),await m(T.user)}catch(T){w&&h(k(T))}finally{w&&r(!1)}})(),()=>{w=!1}},[]);const g=async w=>{w.preventDefault(),h(""),r(!0);try{if(t==="login")await Ck(tr,s,o);else{if(o.length<6)throw new Error("A senha deve ter pelo menos 6 caracteres.");if(o!==c)throw new Error("As senhas não conferem.");if(!C)throw new Error("Aceite os Termos de Uso e a Política de Privacidade para continuar.");const N=await wk(tr,s,o);try{await Bt(Q(Y,`users/${N.user.uid}`),{role:"admin",email:s,nome:""})}catch{await N.user.delete(),h("Falha ao registrar empresa no banco.")}}}catch(N){h((N==null?void 0:N.message)||(t==="login"?"E-mail ou senha incorretos.":"Erro ao autenticar."))}finally{r(!1)}},x=async()=>{h(""),r(!0);const w=new $t;try{const N=await qk(tr,w);await m(N.user)}catch(N){if((N==null?void 0:N.code)==="auth/popup-blocked"||(N==null?void 0:N.code)==="auth/cancelled-popup-request")try{await Jk(tr,w);return}catch(T){h(k(T))}else h(k(N))}finally{r(!1)}};function k(w){return(w==null?void 0:w.code)==="auth/unauthorized-domain"?`Domínio não autorizado: ${window.location.hostname}. No Firebase Console, abra Authentication > Settings > Authorized domains e adicione este domínio.`:(w==null?void 0:w.code)==="auth/popup-blocked"?"O pop-up foi bloqueado. O login será redirecionado.":(w==null?void 0:w.code)==="auth/popup-closed-by-user"?"O login do Google foi cancelado.":(w==null?void 0:w.code)==="auth/operation-not-allowed"?"O provedor Google não está ativado no Firebase Authentication.":`Não foi possível entrar com Google: ${(w==null?void 0:w.message)||"erro desconhecido."}`}return l.jsxs("div",{className:"flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans overflow-hidden",children:[l.jsxs("div",{className:"hidden lg:flex w-[55%] bg-[#120D38] flex-col items-center justify-center p-12 text-white relative",children:[l.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#3b2b9a] rounded-full blur-[140px] opacity-60"}),l.jsx("div",{className:"absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#21146c] rounded-full blur-[140px] opacity-60"}),l.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center w-full max-w-2xl",children:[l.jsxs("div",{className:"mb-10 flex flex-col items-center",children:[l.jsx(Dy,{className:"w-36 h-auto mb-4 drop-shadow-2xl",solidWhite:!1}),l.jsx("h1",{className:"text-[56px] font-bold tracking-[0.2em] leading-none mb-3 text-white",children:"VISTTA"}),l.jsx("p",{className:"text-[#a094ff] tracking-[0.35em] text-[11px] uppercase font-semibold",children:"Gestão Inteligente para Óticas"}),l.jsx("div",{className:"w-12 h-[2px] bg-[#6552ff] mt-8 rounded-full"})]}),l.jsx("h2",{className:"text-[40px] font-normal mb-1 tracking-tight text-white/90",children:"Sua ótica. Uma plataforma."}),l.jsx("h2",{className:"text-[42px] font-bold text-[#7b66ff] mb-6 tracking-tight",children:"Mais controle."}),l.jsxs("div",{className:"flex items-start justify-center gap-8 mb-10 w-full",children:[l.jsxs("div",{className:"flex flex-col items-center flex-1 max-w-[180px]",children:[l.jsx(cI,{size:36,className:"text-[#7b66ff] mb-4"}),l.jsx("h3",{className:"text-[13px] font-semibold mb-2 text-white/90",children:"Gestão Multi-Loja"})]}),l.jsx("div",{className:"w-px h-24 bg-indigo-500/20 mt-4"}),l.jsxs("div",{className:"flex flex-col items-center flex-1 max-w-[180px]",children:[l.jsx(lI,{size:36,className:"text-[#7b66ff] mb-4"}),l.jsx("h3",{className:"text-[13px] font-semibold mb-2 text-white/90",children:"Estoque em tempo real"})]})]})]})]}),l.jsx("div",{className:"flex-1 lg:w-[45%] bg-[#F8FAFC] dark:bg-slate-900 flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-y-auto custom-scrollbar",children:l.jsx("div",{className:"w-full max-w-[460px]",children:l.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-100 p-8 sm:p-10 mb-8 w-full",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("h2",{className:"text-[26px] font-bold mb-2",children:t==="login"?"Bem-vindo de volta!":"Crie sua conta"}),t==="register"&&l.jsx("p",{className:"text-[15px] text-slate-500",children:"Comece a gerenciar sua ótica de forma inteligente."})]}),l.jsxs("form",{onSubmit:g,className:"space-y-5",children:[d&&l.jsxs("div",{className:"bg-rose-50 text-rose-600 p-3.5 rounded-xl text-sm font-bold flex gap-3 border border-rose-100",children:[l.jsx(Ry,{size:18}),l.jsx("span",{children:d})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"E-mail"}),l.jsxs("div",{className:"relative",children:[l.jsx(Py,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),l.jsx("input",{type:"email",required:!0,value:s,onChange:w=>i(w.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Seu e-mail"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"Senha"}),l.jsxs("div",{className:"relative",children:[l.jsx(Vi,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),l.jsx("input",{type:f?"text":"password",required:!0,value:o,onChange:w=>a(w.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-12 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Sua senha"}),l.jsx("button",{type:"button",onClick:()=>v(!f),className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-400",children:f?l.jsx(eI,{size:18}):l.jsx(tI,{size:18})})]})]}),t==="register"&&l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"Confirmar senha"}),l.jsxs("div",{className:"relative",children:[l.jsx(Vi,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),l.jsx("input",{type:f?"text":"password",required:!0,value:c,onChange:w=>u(w.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Confirme sua senha"})]})]}),t==="register"&&l.jsxs("label",{className:"flex items-start gap-2 text-[13px] text-slate-500",children:[l.jsx("input",{type:"checkbox",checked:C,onChange:w=>p(w.target.checked),className:"mt-0.5 h-4 w-4 accent-[#5235ff]"}),l.jsxs("span",{children:["Aceito os ",l.jsx("a",{href:"#termos",className:"font-semibold text-[#5235ff] hover:underline",children:"Termos de Uso"})," e a ",l.jsx("a",{href:"#privacidade",className:"font-semibold text-[#5235ff] hover:underline",children:"Política de Privacidade"}),"."]})]}),l.jsx("button",{type:"submit",disabled:n,className:"w-full bg-[#5235ff] hover:bg-[#4323ec] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-4",children:n?"Aguarde...":t==="login"?"Entrar":"Criar minha conta"}),l.jsxs("div",{className:"my-5 flex items-center gap-3",children:[l.jsx("div",{className:"h-px flex-1 bg-slate-200"}),l.jsx("span",{className:"text-xs font-medium text-slate-400",children:"ou"}),l.jsx("div",{className:"h-px flex-1 bg-slate-200"})]}),l.jsxs("button",{type:"button",onClick:x,disabled:n,className:"w-full border border-slate-200 bg-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 mt-4 text-slate-700 hover:bg-slate-50 disabled:opacity-60",children:[l.jsxs("svg",{className:"h-5 w-5",viewBox:"0 0 24 24","aria-hidden":"true",children:[l.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),l.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),l.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),l.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Continuar com Google"]}),l.jsx("div",{className:"text-center mt-6",children:l.jsx("button",{type:"button",onClick:()=>e(t==="login"?"register":"login"),className:"text-sm font-bold text-[#5235ff] hover:underline",children:t==="login"?"Criar uma conta":"Fazer login"})})]})]})})})]})}function mI(){const{produtos:t,vendas:e,clientes:n,setActiveTab:r}=pt();return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsx("div",{className:"mb-8",children:l.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Painel Geral"})}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6",children:[l.jsx(Ht,{title:"Estoque Total",value:t.reduce((s,i)=>s+Number(i.qtd),0),subtitle:"unidades ativas",icon:Sl}),l.jsx(Ht,{title:"Vendas do Mês",value:se(e.reduce((s,i)=>s+(i.total||0),0)),icon:Va,color:"text-emerald-500"}),l.jsx(Ht,{title:"Clientes Base",value:n.length,icon:oo}),l.jsx(Ht,{title:"Estoque Crítico",value:t.filter(s=>Number(s.qtd)<Number(s.min)).length,icon:Ry,bg:"bg-rose-50",color:"text-rose-500"})]})]})}function gI(){const{caixaAberto:t,pdvSearch:e,setPdvSearch:n,carrinho:r,addToCart:s,removeFromCart:i,pdvCliente:o,setPdvCliente:a,clientes:c,pdvDesconto:u,setPdvDesconto:d,pdvPagamento:h,setPdvPagamento:f,finalizarVenda:v,setActiveTab:_,produtos:y}=pt(),[C,p]=I.useState("produtos"),m=y.filter(g=>Number(g.qtd)>0&&((g.marca||"").toLowerCase().includes(e.toLowerCase())||(g.modelo||"").toLowerCase().includes(e.toLowerCase())||(g.codigo||"").toLowerCase().includes(e.toLowerCase())));return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsx("div",{className:"mb-6 flex justify-between items-end",children:l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Ponto de Venda"}),t?l.jsx("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold",children:"Caixa Aberto"}):l.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-xs font-bold",children:[l.jsx(Vi,{size:12})," Caixa Fechado"]})]})}),t?l.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row gap-6",children:[l.jsxs("div",{className:"lg:w-[60%] bg-white rounded-3xl border border-slate-100 p-6 flex flex-col",children:[l.jsxs("div",{className:"relative mb-6",children:[l.jsx(Ay,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:18}),l.jsx("input",{type:"text",placeholder:"Buscar por marca, modelo ou código...",value:e,onChange:g=>n(g.target.value),className:"w-full bg-slate-50 border rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:border-[#4A3AFF]"})]}),l.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5",children:m.map(g=>l.jsxs("div",{onClick:()=>s(g),className:"bg-slate-50 border rounded-2xl p-5 cursor-pointer hover:border-[#4A3AFF] transition-all flex flex-col group",children:[l.jsx("div",{className:"text-[11px] text-slate-400 font-mono mb-2",children:g.codigo}),l.jsxs("div",{className:"font-bold text-[15px] group-hover:text-[#4A3AFF]",children:[g.marca," ",g.modelo]}),l.jsx("div",{className:"text-[12px] text-slate-500 mb-4",children:g.categoria}),l.jsxs("div",{className:"mt-auto flex justify-between items-end",children:[l.jsx("span",{className:"font-extrabold text-emerald-600 text-lg",children:se(g.venda)}),l.jsxs("span",{className:"text-[11px] bg-white px-2 py-1 rounded-lg font-bold",children:["Est: ",g.qtd]})]})]},g.id))})]}),l.jsxs("div",{className:"lg:w-[40%] bg-white rounded-3xl border border-slate-100 p-6 flex flex-col",children:[l.jsx("h3",{className:"font-bold text-xl mb-5",children:"Carrinho"}),l.jsxs("div",{className:"mb-5",children:[l.jsx("label",{className:"block text-[12px] font-bold text-slate-500 uppercase mb-2",children:"Cliente Vinculado"}),l.jsxs("select",{value:o,onChange:g=>a(g.target.value),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]",children:[l.jsx("option",{value:"",children:"Consumidor Final (Balcão)"}),c.map(g=>l.jsx("option",{value:g.id,children:g.nome},g.id))]})]}),l.jsx("div",{className:"flex-1 overflow-y-auto space-y-3 mb-6 p-3 bg-slate-50 rounded-2xl border",children:r.map(g=>l.jsxs("div",{className:"flex justify-between items-center p-4 bg-white border rounded-xl",children:[l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"font-bold text-[14px]",children:[g.marca," ",g.modelo]}),l.jsxs("div",{className:"text-[12px] text-slate-500 mt-1",children:[l.jsxs("span",{className:"font-bold px-1.5 py-0.5 bg-slate-100 rounded mr-1",children:[g.qtd,"x"]})," ",se(g.venda)]})]}),l.jsx("div",{className:"font-extrabold text-[15px] mr-3",children:se(Number(g.venda)*g.qtd)}),l.jsx("button",{onClick:()=>i(g.id),className:"text-slate-300 hover:text-rose-500",children:l.jsx(Oy,{size:18})})]},g.id))}),l.jsxs("div",{className:"pt-5 border-t",children:[l.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-bold text-slate-400 uppercase mb-2",children:"Desc (R$)"}),l.jsx("input",{type:"number",min:"0",value:u,onChange:g=>d(Number(g.target.value)),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-bold text-slate-400 uppercase mb-2",children:"Pagamento"}),l.jsxs("select",{value:h,onChange:g=>f(g.target.value),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]",children:[l.jsx("option",{children:"Pix"}),l.jsx("option",{children:"Crédito"}),l.jsx("option",{children:"Débito"}),l.jsx("option",{children:"Dinheiro"})]})]})]}),l.jsxs("div",{className:"flex justify-between items-end mb-6",children:[l.jsx("span",{className:"font-bold text-slate-500 text-[15px]",children:"Total Geral"}),l.jsx("span",{className:"text-4xl font-black text-[#4A3AFF]",children:se(Math.max(0,r.reduce((g,x)=>g+Number(x.venda)*x.qtd,0)-(Number(u)||0)))})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsxs("button",{onClick:()=>v(!0),className:"w-full border-2 border-slate-200 py-3.5 rounded-xl font-bold flex items-center justify-center",children:[l.jsx(Uu,{size:18,className:"mr-2"})," Orçamento"]}),l.jsxs("button",{onClick:()=>v(!1),className:"w-full bg-[#4A3AFF] text-white py-3.5 rounded-xl font-bold flex items-center justify-center",children:[l.jsx(Yb,{size:18,className:"mr-2"})," Vender"]})]})]})]})]}):l.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center",children:[l.jsx("div",{className:"w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-6",children:l.jsx(Vi,{className:"w-10 h-10"})}),l.jsx("h2",{className:"text-2xl font-bold mb-3",children:"O Caixa está Fechado"}),l.jsx("p",{className:"text-slate-500 mb-8 max-w-md",children:"Para garantir a segurança financeira, é obrigatório abrir o caixa do dia antes de registrar qualquer venda."}),l.jsx("button",{onClick:()=>_("caixa"),className:"bg-[#4A3AFF] text-white px-8 py-3.5 rounded-xl font-bold",children:"Ir para o Controle de Caixa"})]})]})}function vI(){const{caixaAberto:t,totalVendasCaixa:e,caixas:n,abrirCaixa:r,fecharCaixa:s,registrarLancamentoCaixa:i}=pt(),[o,a]=I.useState("0"),[c,u]=I.useState(!1),[d,h]=I.useState({tipo:"saida",descricao:"",valor:""}),f=async _=>{u(!0);try{await _()}catch(y){alert(y.message||"Não foi possível atualizar o caixa.")}finally{u(!1)}},v=ur(t==null?void 0:t.lancamentos).reduce((_,y)=>_+(y.tipo==="entrada"?Number(y.valor):-Number(y.valor)),0);return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Caixa Diário"}),l.jsx("p",{className:"text-slate-500",children:"Abertura e fechamento de caixa para o PDV."})]}),t?l.jsx("button",{disabled:c,onClick:()=>f(s),className:"bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60",children:"Fechar Caixa"}):l.jsx("button",{disabled:c,onClick:()=>{const _=Number(o.replace(",","."));f(()=>r(_))},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60",children:"Abrir Caixa"})]}),t?l.jsxs("div",{className:"bg-white rounded-3xl p-8 mb-10 flex justify-between items-center shadow-sm border border-slate-100",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-emerald-500 font-bold uppercase text-xs mb-2",children:"Caixa Aberto"}),l.jsxs("p",{className:"text-slate-500",children:["Operador: ",l.jsx("span",{className:"font-bold text-slate-900",children:t.operador})]})]}),l.jsxs("div",{className:"flex gap-10",children:[l.jsxs("div",{className:"text-right",children:[l.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Fundo Inicial"}),l.jsx("p",{className:"text-2xl font-bold",children:se(t.valorInicial)})]}),l.jsxs("div",{className:"text-right",children:[l.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Vendas no Caixa"}),l.jsxs("p",{className:"text-2xl font-bold text-emerald-500",children:["+ ",se(e)]})]}),l.jsxs("div",{className:"text-right pl-10 border-l border-slate-100",children:[l.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Saldo Atual"}),l.jsx("p",{className:"text-4xl font-extrabold text-[#4A3AFF]",children:se((t.valorInicial||0)+e+v)})]})]}),l.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-100",children:[l.jsx("h3",{className:"font-bold mb-3",children:"Lançamento de caixa"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-3",children:[l.jsxs("select",{value:d.tipo,onChange:_=>h({...d,tipo:_.target.value}),className:"rounded-xl border border-slate-200 px-3 py-3",children:[l.jsx("option",{value:"entrada",children:"Entrada"}),l.jsx("option",{value:"saida",children:"Saída"}),l.jsx("option",{value:"sangria",children:"Sangria"})]}),l.jsx("input",{placeholder:"Descrição",value:d.descricao,onChange:_=>h({...d,descricao:_.target.value}),className:"rounded-xl border border-slate-200 px-3 py-3 sm:col-span-2"}),l.jsx("input",{type:"number",min:"0.01",step:"0.01",placeholder:"Valor",value:d.valor,onChange:_=>h({...d,valor:_.target.value}),className:"rounded-xl border border-slate-200 px-3 py-3"})]}),l.jsxs("button",{onClick:()=>f(async()=>{await i({tipo:d.tipo,descricao:d.descricao,valor:Number(d.valor)}),h({tipo:"saida",descricao:"",valor:""})}),className:"mt-3 text-sm font-bold text-[#4A3AFF] flex items-center gap-2",children:[l.jsx(Zb,{size:17})," Registrar lançamento"]})]})]}):l.jsxs("div",{className:"border-2 border-dashed border-slate-200 rounded-3xl p-16 mb-10 text-center flex flex-col items-center",children:[l.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 mb-5 shadow-sm border",children:l.jsx(Vi,{size:24})}),l.jsx("h3",{className:"text-2xl font-bold text-slate-800 mb-3",children:"Caixa Fechado"}),l.jsx("p",{className:"text-slate-500 mb-8 max-w-md",children:"Nenhum caixa está aberto no momento. Abra o caixa para permitir novas vendas."}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3 mb-6",children:[l.jsx("label",{htmlFor:"valor-inicial",className:"text-sm font-bold text-slate-600",children:"Fundo inicial"}),l.jsx("input",{id:"valor-inicial",type:"number",min:"0",step:"0.01",value:o,onChange:_=>a(_.target.value),className:"w-36 bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-[#4A3AFF]"}),l.jsx("button",{disabled:c,onClick:()=>f(()=>r(Number(o.replace(",",".")))),className:"bg-[#4A3AFF] text-white px-5 py-2.5 rounded-xl font-bold disabled:opacity-60",children:c?"Abrindo...":"Abrir Caixa"})]})]}),l.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-auto p-5 flex-1",children:[l.jsx("h3",{className:"font-bold mb-4",children:"Histórico de caixas"}),l.jsxs("table",{className:"w-full text-left min-w-[650px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"text-xs text-slate-400 uppercase border-b",children:[l.jsx("th",{className:"py-3",children:"Abertura"}),l.jsx("th",{children:"Operador"}),l.jsx("th",{children:"Fundo"}),l.jsx("th",{children:"Vendas"}),l.jsx("th",{children:"Saldo final"})]})}),l.jsx("tbody",{children:n.filter(_=>_.status==="fechado").sort((_,y)=>new Date(y.dataAbertura).getTime()-new Date(_.dataAbertura).getTime()).map(_=>l.jsxs("tr",{className:"border-b border-slate-50",children:[l.jsx("td",{className:"py-3",children:new Date(_.dataAbertura).toLocaleDateString("pt-BR")}),l.jsx("td",{children:_.operador}),l.jsx("td",{children:se(_.valorInicial)}),l.jsx("td",{className:"text-emerald-500",children:se(_.totalVendas||0)}),l.jsx("td",{className:"font-bold",children:se(_.valorFinal||0)})]},_.id))})]})]})]})}function _I({data:t,onSave:e,onClose:n,fornecedores:r=[]}){const[s,i]=I.useState(t||{codigo:"",categoria:"Armações",marca:"",modelo:"",cor:"",tamanho:"",material:"",fornecedorId:"",tratamento:"",custo:"",venda:"",qtd:"",min:""}),[o,a]=I.useState(""),c=(f,v)=>i(_=>({..._,[f]:v})),u="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 text-[15px] outline-none focus:border-[#4A3AFF] transition-all text-slate-900 dark:text-white",d="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2 block",h=async f=>{f.preventDefault(),a("");try{await e(s)}catch(v){a((v==null?void 0:v.message)||"Não foi possível salvar o produto.")}};return l.jsxs("form",{onSubmit:h,children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[l.jsxs("div",{children:[l.jsx("label",{className:d,children:"SKU (Cód)"}),l.jsx("input",{required:!0,value:s.codigo,onChange:f=>c("codigo",f.target.value),className:u})]}),l.jsxs("div",{className:"sm:col-span-2",children:[l.jsx("label",{className:d,children:"Categoria"}),l.jsxs("select",{value:s.categoria,onChange:f=>c("categoria",f.target.value),className:u,children:[l.jsx("option",{children:"Armações"}),l.jsx("option",{children:"Lentes de Contato"}),l.jsx("option",{children:"Lentes Oftálmicas"}),l.jsx("option",{children:"Acessórios/Insumos"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Marca"}),l.jsx("input",{required:!0,value:s.marca,onChange:f=>c("marca",f.target.value),className:u})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Modelo"}),l.jsx("input",{value:s.modelo,onChange:f=>c("modelo",f.target.value),className:u})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Cor"}),l.jsx("input",{value:s.cor,onChange:f=>c("cor",f.target.value),className:u})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Tamanho"}),l.jsx("input",{value:s.tamanho,onChange:f=>c("tamanho",f.target.value),className:u,placeholder:"Ex: 54-18"})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Material"}),l.jsx("input",{value:s.material,onChange:f=>c("material",f.target.value),className:u})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Fornecedor"}),l.jsxs("select",{value:s.fornecedorId,onChange:f=>c("fornecedorId",f.target.value),className:u,children:[l.jsx("option",{value:"",children:"Sem fornecedor"}),r.map(f=>l.jsx("option",{value:f.id,children:f.nomeFantasia||f.razaoSocial||f.nome},f.id))]})]}),l.jsxs("div",{className:"sm:col-span-3",children:[l.jsx("label",{className:d,children:"Tratamento / Especificação"}),l.jsx("input",{value:s.tratamento,onChange:f=>c("tratamento",f.target.value),className:u,placeholder:"Antirreflexo, Transitions, multifocal..."})]}),l.jsx("div",{className:"sm:col-span-3 border-t border-slate-100 dark:border-slate-700 my-2"}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Custo (R$)"}),l.jsx("input",{type:"number",step:"0.01",required:!0,value:s.custo,onChange:f=>c("custo",f.target.value),className:u})]}),l.jsxs("div",{children:[l.jsx("label",{className:"text-[12px] font-bold text-emerald-500 uppercase tracking-wider mb-2 block",children:"Venda (R$)"}),l.jsx("input",{type:"number",step:"0.01",required:!0,value:s.venda,onChange:f=>c("venda",f.target.value),className:`${u} border-emerald-200 dark:border-emerald-800 focus:border-emerald-500 font-extrabold`})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Estoque Atual"}),l.jsx("input",{type:"number",required:!0,value:s.qtd,onChange:f=>c("qtd",f.target.value),className:u})]}),l.jsxs("div",{children:[l.jsx("label",{className:"text-[12px] font-bold text-rose-500 uppercase tracking-wider mb-2 block",children:"Estoque Mín."}),l.jsx("input",{type:"number",required:!0,value:s.min,onChange:f=>c("min",f.target.value),className:`${u} border-rose-200 dark:border-rose-800 focus:border-rose-500`})]})]}),o&&l.jsx("p",{className:"mb-4 rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-600",children:o}),l.jsxs("div",{className:"pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-3 sm:gap-4",children:[l.jsx("button",{type:"button",onClick:n,className:"px-6 py-3.5 rounded-xl font-bold bg-slate-100 text-slate-600",children:"Cancelar"}),l.jsx("button",{type:"submit",className:"px-8 py-3.5 rounded-xl font-bold bg-[#4A3AFF] text-white",children:"Salvar Produto"})]})]})}function yI(){const{produtos:t,fornecedores:e,salvarProduto:n,excluirProduto:r}=pt(),[s,i]=I.useState(""),[o,a]=I.useState(null),[c,u]=I.useState(!1),d=async h=>{await n(h,o==null?void 0:o.id),u(!1),a(null)};return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Estoque"}),l.jsx("p",{className:"text-slate-500",children:"Gerencie produtos e níveis de inventário."})]}),l.jsxs("button",{onClick:()=>{a(null),u(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[l.jsx(io,{size:20,className:"mr-2"})," Adicionar Produto"]})]}),l.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:[l.jsx("div",{className:"p-4 bg-white border-b border-slate-100",children:l.jsxs("div",{className:"relative max-w-md",children:[l.jsx(Ay,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:18}),l.jsx("input",{type:"text",placeholder:"Buscar código, marca...",value:s,onChange:h=>i(h.target.value),className:"w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-[#4A3AFF]"})]})}),l.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar",children:l.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[l.jsx("th",{className:"py-4 px-6 w-24",children:"Cód."}),l.jsx("th",{className:"py-4 px-6",children:"Produto"}),l.jsx("th",{className:"py-4 px-6",children:"Categoria"}),l.jsx("th",{className:"py-4 px-6 text-right",children:"Venda"}),l.jsx("th",{className:"py-4 px-6 text-center w-28",children:"Qtd"}),l.jsx("th",{className:"py-4 px-6 text-center",children:"Ações"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-50",children:t.filter(h=>{var f,v;return((f=h.codigo)==null?void 0:f.toLowerCase().includes(s.toLowerCase()))||((v=h.marca)==null?void 0:v.toLowerCase().includes(s.toLowerCase()))}).map(h=>l.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[l.jsx("td",{className:"py-4 px-6 font-mono text-[12px] font-bold text-slate-400",children:h.codigo}),l.jsx("td",{className:"py-4 px-6",children:l.jsxs("div",{className:"font-bold text-[14px]",children:[h.marca," ",l.jsx("span",{className:"font-normal text-slate-500",children:h.modelo})]})}),l.jsx("td",{className:"py-4 px-6 text-[13px]",children:l.jsx("span",{className:"bg-slate-100 px-3 py-1.5 rounded-lg font-medium",children:h.categoria})}),l.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-emerald-600",children:se(h.venda)}),l.jsx("td",{className:"py-4 px-6 text-center",children:l.jsx("span",{className:`inline-flex items-center justify-center w-10 h-10 rounded-xl text-[14px] font-bold ${Number(h.qtd)<Number(h.min)?"bg-rose-50 text-rose-600":"bg-slate-50 text-slate-700"}`,children:h.qtd})}),l.jsxs("td",{className:"py-4 px-6 text-center",children:[l.jsx("button",{onClick:()=>{a(h),u(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:l.jsx(Nl,{size:16})}),l.jsx("button",{onClick:()=>r(h.id).catch(f=>alert(f.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:l.jsx(kl,{size:16})})]})]},h.id))})]})})]}),l.jsx(bl,{open:c,onClose:()=>{u(!1),a(null)},title:o?"Editar Produto":"Novo Produto",width:"max-w-3xl",children:l.jsx(_I,{data:o,fornecedores:e,onSave:d,onClose:()=>{u(!1),a(null)}})})]})}function xI({data:t,onSave:e,onClose:n}){const r=()=>({esf:"",cil:"",eixo:"",dnp:"",add:"",altura:""}),s=()=>({medico:"",crm:"",dataReceita:"",obs:"",od:r(),oe:r(),longe:{od:r(),oe:r()},perto:{od:r(),oe:r()}}),i=()=>({nome:"",cpf:"",tel:"",nasc:"",email:"",endereco:{cep:"",logradouro:"",numero:"",complemento:"",bairro:"",cidade:"",estado:""},prescricao:s()}),[o,a]=I.useState(i()),[c,u]=I.useState("");I.useEffect(()=>{var C,p,m,g;if(t){const x=t.prescricao||s();a({...i(),...t,endereco:{...i().endereco,...t.endereco||{}},prescricao:{...s(),...x,od:{...r(),...x.od||{}},oe:{...r(),...x.oe||{}},longe:{od:{...r(),...((C=x.longe)==null?void 0:C.od)||{}},oe:{...r(),...((p=x.longe)==null?void 0:p.oe)||{}}},perto:{od:{...r(),...((m=x.perto)==null?void 0:m.od)||{}},oe:{...r(),...((g=x.perto)==null?void 0:g.oe)||{}}}}})}else a(i())},[t]);const d=(C,p)=>a(m=>({...m,[C]:p})),h=(C,p,m)=>a(g=>({...g,[C]:{...g[C],[p]:m}})),f=(C,p,m,g)=>a(x=>({...x,prescricao:{...x.prescricao,[C]:{...x.prescricao[C],[p]:{...x.prescricao[C][p],[m]:g}}}})),v="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-[14px] outline-none focus:border-[#4A3AFF]",_="text-[12px] font-bold text-slate-500 uppercase mb-2 block",y=async C=>{C.preventDefault(),u("");try{await e(o)}catch(p){u((p==null?void 0:p.message)||"Não foi possível salvar o cliente.")}};return l.jsxs("form",{onSubmit:y,className:"flex flex-col",children:[l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{children:[l.jsxs("h3",{className:"text-[13px] font-bold text-indigo-500 uppercase mb-4 flex items-center gap-2",children:[l.jsx(oo,{size:16})," Dados Pessoais"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:_,children:"Nome Completo"}),l.jsx("input",{required:!0,value:o.nome,onChange:C=>d("nome",C.target.value),className:v})]}),l.jsxs("div",{children:[l.jsx("label",{className:_,children:"WhatsApp"}),l.jsx("input",{required:!0,value:o.tel,onChange:C=>d("tel",C.target.value),className:v,placeholder:"(00) 00000-0000"})]}),l.jsxs("div",{children:[l.jsx("label",{className:_,children:"CPF / CNPJ"}),l.jsx("input",{value:o.cpf,onChange:C=>d("cpf",C.target.value),className:v})]}),l.jsxs("div",{children:[l.jsx("label",{className:_,children:"Nascimento"}),l.jsx("input",{type:"date",value:o.nasc,onChange:C=>d("nasc",C.target.value),className:v})]}),l.jsxs("div",{className:"md:col-span-2",children:[l.jsx("label",{className:_,children:"E-mail"}),l.jsx("input",{type:"email",value:o.email,onChange:C=>d("email",C.target.value),className:v})]})]})]}),l.jsxs("div",{className:"border-t pt-6",children:[l.jsxs("h3",{className:"text-[13px] font-bold text-slate-500 uppercase mb-4 flex items-center gap-2",children:[l.jsx(sI,{size:16})," Endereço"]}),l.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[["cep","CEP"],["logradouro","Logradouro"],["numero","Número"],["complemento","Complemento"],["bairro","Bairro"],["cidade","Cidade"],["estado","UF"]].map(([C,p])=>l.jsxs("div",{className:C==="logradouro"?"col-span-2":"",children:[l.jsx("label",{className:_,children:p}),l.jsx("input",{value:o.endereco[C]||"",onChange:m=>h("endereco",C,m.target.value),className:v})]},C))})]}),l.jsxs("div",{className:"border-t pt-6",children:[l.jsxs("h3",{className:"text-[13px] font-bold text-emerald-500 uppercase mb-4 flex items-center gap-2",children:[l.jsx(nI,{size:16})," Receituário Ótico"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 mb-5",children:[l.jsxs("div",{children:[l.jsx("label",{className:_,children:"Médico Oftalmologista"}),l.jsx("input",{value:o.prescricao.medico,onChange:C=>a(p=>({...p,prescricao:{...p.prescricao,medico:C.target.value}})),className:v})]}),l.jsxs("div",{children:[l.jsx("label",{className:_,children:"CRM"}),l.jsx("input",{value:o.prescricao.crm,onChange:C=>a(p=>({...p,prescricao:{...p.prescricao,crm:C.target.value}})),className:v})]}),l.jsxs("div",{children:[l.jsx("label",{className:_,children:"Data da Receita"}),l.jsx("input",{type:"date",value:o.prescricao.dataReceita,onChange:C=>a(p=>({...p,prescricao:{...p.prescricao,dataReceita:C.target.value}})),className:v})]}),l.jsxs("div",{children:[l.jsx("label",{className:_,children:"Observações"}),l.jsx("input",{value:o.prescricao.obs,onChange:C=>a(p=>({...p,prescricao:{...p.prescricao,obs:C.target.value}})),className:v})]})]}),["longe","perto"].map(C=>l.jsxs("div",{className:"mb-5 overflow-x-auto",children:[l.jsx("h4",{className:"font-bold text-slate-600 mb-2",children:C==="longe"?"Visão de Longe":"Visão de Perto"}),l.jsxs("div",{className:"min-w-[650px] grid grid-cols-7 gap-2 text-center",children:[l.jsx("div",{className:"text-left text-xs font-bold text-slate-400",children:"Olho"}),["Esférico","Cilíndrico","Eixo","DNP","Adição","Altura"].map(p=>l.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase",children:p},p)),["od","oe"].flatMap(p=>[l.jsx("div",{className:"text-left font-bold text-[#4A3AFF] uppercase",children:p},`${C}-${p}-label`),...["esf","cil","eixo","dnp","add","altura"].map(m=>l.jsx("input",{value:o.prescricao[C][p][m],onChange:g=>f(C,p,m,g.target.value),className:"w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 rounded-xl px-2 py-2 text-center text-sm",placeholder:"-"},`${C}-${p}-${m}`))])]})]},C))]})]}),c&&l.jsx("p",{className:"mt-4 rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-600",children:c}),l.jsxs("div",{className:"mt-8 border-t flex justify-end gap-3 pt-4",children:[l.jsx("button",{type:"button",onClick:n,className:"px-6 py-3 rounded-xl font-bold bg-slate-100 text-slate-600",children:"Cancelar"}),l.jsx("button",{type:"submit",className:"px-8 py-3 rounded-xl font-bold bg-[#4A3AFF] text-white",children:"Salvar Ficha"})]})]})}function wI(){const{clientes:t,salvarCliente:e,excluirCliente:n,vendas:r,ordensServico:s}=pt(),[i,o]=ts.useState(null),[a,c]=ts.useState(!1),u=async d=>{await e(d,i==null?void 0:i.id),c(!1),o(null)};return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Clientes & Receitas"}),l.jsx("p",{className:"text-slate-500",children:"Gestão de contatos e prontuários óticos."})]}),l.jsxs("button",{onClick:()=>{o(null),c(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center shadow-md",children:[l.jsx(io,{size:20,className:"mr-2"})," Novo Cliente"]})]}),l.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:l.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar p-2",children:l.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase tracking-wider font-semibold sticky top-0 bg-white",children:[l.jsx("th",{className:"py-4 px-6",children:"Cliente / CPF"}),l.jsx("th",{className:"py-4 px-6",children:"Contato"}),l.jsx("th",{className:"py-4 px-6",children:"Médico Responsável"}),l.jsx("th",{className:"py-4 px-6 text-center w-24",children:"Ações"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-50",children:t.map(d=>{var h;return l.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[l.jsxs("td",{className:"py-4 px-6",children:[l.jsx("div",{className:"font-bold text-[14px]",children:d.nome}),l.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:d.cpf||"Sem CPF"})]}),l.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[l.jsx("a",{href:`https://wa.me/${(d.tel||"").replace(/\D/g,"")}`,target:"_blank",rel:"noreferrer",className:"text-emerald-600 hover:underline",children:d.tel}),l.jsxs("div",{className:"text-[11px] text-slate-400 mt-1",children:[r.filter(f=>f.cliId===d.id).length," compra(s) · ",s.filter(f=>f.clienteId===d.id).length," OS"]})]}),l.jsx("td",{className:"py-4 px-6",children:l.jsx("div",{className:"text-[14px] font-medium text-slate-700",children:((h=d.prescricao)==null?void 0:h.medico)||"Não informado"})}),l.jsx("td",{className:"py-4 px-6 text-center",children:l.jsxs("div",{className:"flex justify-center gap-2",children:[l.jsx("button",{onClick:()=>{o(d),c(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:l.jsx(Nl,{size:16})}),l.jsx("button",{onClick:()=>n(d.id).catch(f=>alert(f.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:l.jsx(kl,{size:16})})]})})]},d.id)})})]})})}),l.jsx(bl,{open:a,onClose:()=>{c(!1),o(null)},title:i?"Editar Cliente":"Novo Cliente",width:"max-w-4xl",children:l.jsx(xI,{data:i,onSave:u,onClose:()=>{c(!1),o(null)}})})]})}function CI(){const{orcamentos:t,clientes:e,setActiveTab:n,converterOrcamentoParaOs:r}=pt();return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Orçamentos"}),l.jsx("p",{className:"text-slate-500",children:"Negociações salvas via PDV."})]}),l.jsxs("button",{onClick:()=>n("vendas"),className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[l.jsx(io,{size:20,className:"mr-2"})," Novo via PDV"]})]}),l.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:l.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar p-2",children:l.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[l.jsx("th",{className:"py-4 px-6",children:"Data / Cliente"}),l.jsx("th",{className:"py-4 px-6",children:"Itens"}),l.jsx("th",{className:"py-4 px-6 text-right",children:"Total"}),l.jsx("th",{className:"py-4 px-6 text-center w-24",children:"Ações"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-50",children:t.map(s=>{var i,o;return l.jsxs("tr",{className:"hover:bg-slate-50 transition-colors group",children:[l.jsxs("td",{className:"py-4 px-6",children:[l.jsx("div",{className:"font-bold text-[14px]",children:((i=e.find(a=>a.id===s.cliId))==null?void 0:i.nome)||"Desconhecido"}),l.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:new Date(s.data).toLocaleDateString("pt-BR")})]}),l.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[((o=s.itens)==null?void 0:o.length)||0," produto(s)"]}),l.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-[#4A3AFF]",children:se(s.total)}),l.jsx("td",{className:"py-4 px-6 text-center",children:l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{onClick:()=>r(s).then(()=>n("ordens")).catch(a=>alert(a.message)),className:"px-3 py-2 rounded-xl text-xs font-bold text-[#4A3AFF] hover:bg-indigo-50",children:"Converter em OS"}),l.jsx("button",{className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:l.jsx(kl,{size:16})})]})})]},s.id)})})]})})})]})}function EI(){const{vendas:t,clientes:e,contas:n,caixas:r}=pt(),s=n.filter(u=>u.tipo==="pagar"),i=n.filter(u=>u.tipo==="receber"),o=s.reduce((u,d)=>u+Number(d.valor||0),0),a=i.reduce((u,d)=>u+Number(d.valor||0),0),c=r.reduce((u,d)=>u+ur(d.lancamentos).filter(h=>h.tipo!=="entrada").reduce((h,f)=>h+Number(f.valor||0),0),0);return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8",children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Financeiro (DRE)"}),l.jsx("p",{className:"text-slate-500",children:"Análise de lucratividade real e CMV."})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4",children:[l.jsx(Ht,{title:"Faturamento Bruto",value:se(t.reduce((u,d)=>u+(d.total||0),0)),icon:Va}),l.jsx(Ht,{title:"CMV (Custo dos Produtos)",value:se(t.reduce((u,d)=>u+(d.custoBase||0),0)),icon:aI,color:"text-rose-500"}),l.jsx(Ht,{title:"Lucro Bruto",value:se(t.reduce((u,d)=>u+(d.total||0),0)-t.reduce((u,d)=>u+(d.custoBase||0),0)),icon:Fu,bg:"bg-[#4A3AFF]/10",color:"text-[#4A3AFF]",border:"border-[#4A3AFF]/20"}),l.jsx(Ht,{title:"A Pagar",value:se(o),subtitle:`${s.length} lançamentos`,icon:Fu,color:"text-rose-500"}),l.jsx(Ht,{title:"A Receber",value:se(a),subtitle:`${i.length} lançamentos`,icon:Va,color:"text-emerald-500"})]}),l.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm p-5 mt-6",children:[l.jsx("h3",{className:"font-bold mb-4",children:"Fluxo de caixa consolidado"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Vendas realizadas"}),l.jsx("p",{className:"text-xl font-black text-emerald-500",children:se(t.reduce((u,d)=>u+Number(d.total||0),0))})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Saídas e sangrias"}),l.jsx("p",{className:"text-xl font-black text-rose-500",children:se(c)})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Saldo operacional"}),l.jsx("p",{className:"text-xl font-black text-[#4A3AFF]",children:se(t.reduce((u,d)=>u+Number(d.total||0),0)-c)})]})]})]}),l.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2 mt-8 flex-1 flex flex-col min-h-[300px]",children:[l.jsx("div",{className:"p-5 flex-shrink-0",children:l.jsx("h3",{className:"font-bold text-[16px]",children:"Últimas Vendas"})}),l.jsx("div",{className:"overflow-x-auto overflow-y-auto flex-1 custom-scrollbar",children:l.jsxs("table",{className:"w-full text-left min-w-[800px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[l.jsx("th",{className:"py-4 px-6",children:"Data"}),l.jsx("th",{className:"py-4 px-6",children:"Cliente"}),l.jsx("th",{className:"py-4 px-6",children:"Pagamento"}),l.jsx("th",{className:"py-4 px-6 text-right",children:"Total"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-50",children:t.slice().sort((u,d)=>new Date(d.data).getTime()-new Date(u.data).getTime()).slice(0,10).map(u=>{var d;return l.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[l.jsx("td",{className:"py-4 px-6 text-[14px] text-slate-700",children:new Date(u.data).toLocaleDateString("pt-BR")}),l.jsx("td",{className:"py-4 px-6 text-[14px] font-bold",children:((d=e.find(h=>h.id===u.cliId))==null?void 0:d.nome)||"Balcão"}),l.jsx("td",{className:"py-4 px-6 text-[14px]",children:l.jsx("span",{className:"bg-slate-100 px-3 py-1.5 rounded-lg font-medium",children:u.pag})}),l.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-[#4A3AFF]",children:se(u.total)})]},u.id)})})]})})]})]})}function SI({config:t,initialData:e,onSave:n,onClose:r}){const[s,i]=I.useState(e||t.defaultData),[o,a]=I.useState(""),c=(f,v)=>i(_=>({..._,[f]:v})),u="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 text-[15px] outline-none focus:border-[#4A3AFF] transition-all text-slate-900 dark:text-white",d="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2 block",h=async f=>{f.preventDefault(),a("");try{await n(s)}catch(v){a((v==null?void 0:v.message)||"Não foi possível salvar o registro.")}};return l.jsxs("form",{onSubmit:h,children:[l.jsx("div",{className:"space-y-4 mb-6",children:t.fields.map(f=>l.jsxs("div",{children:[l.jsxs("label",{className:d,children:[f.label," ",f.required&&"*"]}),f.type==="select"?l.jsxs("select",{required:f.required,value:s[f.name]||"",onChange:v=>c(f.name,v.target.value),className:u,children:[l.jsx("option",{value:"",children:"Selecione..."}),f.options.map(v=>l.jsx("option",{value:v.val,children:v.label},v.val))]}):l.jsx("input",{type:f.type,step:f.step,required:f.required,value:s[f.name]||"",onChange:v=>c(f.name,v.target.value),className:u})]},f.name))}),o&&l.jsx("p",{className:"mb-4 rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-600",children:o}),l.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700",children:[l.jsx("button",{type:"button",onClick:r,className:"px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors",children:"Cancelar"}),l.jsx("button",{type:"submit",className:"px-6 py-3 rounded-xl bg-[#4A3AFF] text-white font-bold hover:bg-[#3d2ee6] shadow-md transition-all",children:"Salvar"})]})]})}function NI({activeTab:t}){const{fornecedores:e,contas:n,categorias:r,usuarios:s,salvarCadastro:i,excluirCadastro:o}=pt(),[a,c]=ts.useState(null),[u,d]=ts.useState(!1),f=(()=>{switch(t){case"fornecedores":return e;case"contas":return n;case"categorias":return r;case"usuarios":return s;default:return[]}})(),_={fornecedores:{defaultData:{razaoSocial:"",nomeFantasia:"",cnpj:"",inscricaoEstadual:"",telefone:"",email:"",contatoComercial:"",categoriaFornecimento:"Armações",prazoEntrega:"",condicoesComerciais:"",parceriaAtiva:!0,enderecoCep:"",enderecoLogradouro:"",enderecoNumero:"",enderecoComplemento:"",enderecoBairro:"",enderecoCidade:"",enderecoEstado:""},fields:[{name:"razaoSocial",label:"Razão Social",type:"text",required:!0},{name:"nomeFantasia",label:"Nome Fantasia",type:"text"},{name:"cnpj",label:"CNPJ",type:"text"},{name:"inscricaoEstadual",label:"Inscrição Estadual",type:"text"},{name:"telefone",label:"Telefone",type:"text"},{name:"email",label:"E-mail",type:"email"},{name:"contatoComercial",label:"Contato Comercial",type:"text"},{name:"categoriaFornecimento",label:"Categoria de Fornecimento",type:"select",options:[{val:"Armações",label:"Armações"},{val:"Lentes de Contato",label:"Lentes de Contato"},{val:"Lentes Oftálmicas",label:"Lentes Oftálmicas"},{val:"Insumos/Laboratório",label:"Insumos/Laboratório"}]},{name:"prazoEntrega",label:"Prazo padrão (dias)",type:"number"},{name:"condicoesComerciais",label:"Condições Comerciais",type:"text"},{name:"enderecoCep",label:"CEP",type:"text"},{name:"enderecoLogradouro",label:"Logradouro",type:"text"},{name:"enderecoNumero",label:"Número",type:"text"},{name:"enderecoComplemento",label:"Complemento",type:"text"},{name:"enderecoBairro",label:"Bairro",type:"text"},{name:"enderecoCidade",label:"Cidade",type:"text"},{name:"enderecoEstado",label:"UF",type:"text"}]},contas:{defaultData:{descricao:"",tipo:"pagar",valor:"",vencimento:"",fornecedorId:"",formaPagamento:"PIX",status:"pendente"},fields:[{name:"descricao",label:"Descrição",type:"text",required:!0},{name:"tipo",label:"Tipo",type:"select",required:!0,options:[{val:"pagar",label:"A pagar"},{val:"receber",label:"A receber"}]},{name:"valor",label:"Valor",type:"number",step:"0.01",required:!0},{name:"vencimento",label:"Vencimento",type:"date"},{name:"fornecedorId",label:"Fornecedor vinculado",type:"text"},{name:"formaPagamento",label:"Forma de pagamento",type:"select",options:[{val:"PIX",label:"PIX"},{val:"cartao",label:"Cartão"},{val:"crediario",label:"Crediário próprio"},{val:"dinheiro",label:"Dinheiro"}]},{name:"status",label:"Status",type:"select",options:[{val:"pendente",label:"Pendente"},{val:"pago",label:"Pago/Recebido"}]}]},categorias:{defaultData:{nome:""},fields:[{name:"nome",label:"Nome",type:"text",required:!0}]},usuarios:{defaultData:{nome:"",email:"",perfil:"vendedor"},fields:[{name:"nome",label:"Nome",type:"text",required:!0},{name:"email",label:"E-mail",type:"email",required:!0},{name:"perfil",label:"Perfil",type:"select",required:!0,options:[{val:"vendedor",label:"Vendedor"},{val:"admin",label:"Administrador"}]}]}}[t],y=t,C=async p=>{await i(y,p,a==null?void 0:a.id),d(!1),c(null)};return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2 capitalize",children:t}),l.jsx("p",{className:"text-slate-500",children:"Gestão completa liberada."})]}),l.jsxs("button",{onClick:()=>{c(null),d(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[l.jsx(io,{size:20,className:"mr-2"})," Adicionar"]})]}),l.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2 flex-1 flex flex-col min-h-[400px]",children:l.jsx("div",{className:"overflow-x-auto overflow-y-auto flex-1 custom-scrollbar",children:l.jsxs("table",{className:"w-full text-left min-w-[600px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[l.jsx("th",{className:"py-4 px-6",children:"Registro Principal"}),l.jsx("th",{className:"py-4 px-6",children:"Detalhes"}),l.jsx("th",{className:"py-4 px-6 text-center",children:"Ações"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-50",children:f==null?void 0:f.map(p=>l.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[l.jsxs("td",{className:"py-4 px-6",children:[l.jsx("div",{className:"font-bold text-[14px]",children:p.nome||p.razaoSocial||p.descricao}),l.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:p.cnpj||p.email||p.nomeFantasia||(p.vencimento?`Venc: ${new Date(p.vencimento).toLocaleDateString("pt-BR")}`:"")})]}),l.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[p.valor?l.jsx("span",{className:`font-extrabold ${p.tipo==="pagar"?"text-rose-500":"text-emerald-500"}`,children:se(p.valor)}):p.contato||p.telefone||p.categoriaFornecimento||p.perfil||p.descricao||"-",t==="fornecedores"&&l.jsxs("span",{className:"block text-[11px] text-slate-400 mt-1",children:[n.filter(m=>m.fornecedorId===p.id).length," compra(s) vinculada(s)"]})]}),l.jsx("td",{className:"py-4 px-6 text-center",children:l.jsxs("div",{className:"flex justify-center gap-2",children:[l.jsx("button",{onClick:()=>{c(p),d(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:l.jsx(Nl,{size:16})}),l.jsx("button",{onClick:()=>o(y,p.id).catch(m=>alert(m.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:l.jsx(kl,{size:16})})]})})]},p.id))})]})})}),l.jsx(bl,{open:u,onClose:()=>{d(!1),c(null)},title:a?`Editar ${t}`:`Novo ${t}`,children:l.jsx(SI,{config:_,initialData:a,onSave:C,onClose:()=>{d(!1),c(null)}})})]})}const kI={aguardando_montagem:"Aguardando Montagem",em_laboratorio:"Em Laboratório",pronto_retirada:"Pronto para Retirada",entregue:"Entregue",cancelada:"Cancelada"},sm=t=>ur(t.itens);function bI(){const{ordensServico:t,clientes:e,produtos:n,salvarOrdemServico:r}=pt(),[s,i]=I.useState(null),[o,a]=I.useState(!1),[c,u]=I.useState(null),d=p=>{i(p||null),u(p?{...p,itens:ur(p.itens)}:{clienteId:"",status:"aguardando_montagem",previsaoEntrega:"",observacoes:"",receitaId:"",itens:[{produtoId:"",descricao:"",qtd:1,valor:0,tratamento:""}]}),a(!0)},h=(p,m,g)=>u(x=>({...x,itens:x.itens.map((k,w)=>w===p?{...k,[m]:g}:k)})),f=(p,m)=>{const g=n.find(x=>x.id===m);h(p,"produtoId",m),g&&u(x=>({...x,itens:x.itens.map((k,w)=>w===p?{...k,produtoId:m,descricao:`${g.marca} ${g.modelo}`.trim(),valor:Number(g.venda)||0}:k)}))},v=(p,m)=>{r({...p,status:m,atualizadoEm:new Date().toISOString()},p.id).catch(g=>{y((g==null?void 0:g.message)||"Não foi possível atualizar o status da OS.")})},[_,y]=I.useState(""),C=async p=>{p.preventDefault(),y("");try{if(!c.clienteId)throw new Error("Selecione um cliente.");await r({...c,criadoEm:(s==null?void 0:s.criadoEm)||new Date().toISOString(),atualizadoEm:new Date().toISOString()},s==null?void 0:s.id),a(!1)}catch(m){y((m==null?void 0:m.message)||"Não foi possível salvar a ordem de serviço.")}};return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8 flex justify-between items-center gap-4",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Ordens de Serviço"}),l.jsx("p",{className:"text-slate-500",children:"Acompanhe montagem, laboratório e retirada."})]}),l.jsxs("button",{onClick:()=>d(),className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[l.jsx(io,{size:20,className:"mr-2"})," Nova OS"]})]}),l.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm flex-1 overflow-auto p-2",children:l.jsxs("table",{className:"w-full text-left min-w-[800px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold",children:[l.jsx("th",{className:"py-4 px-6",children:"Cliente"}),l.jsx("th",{className:"py-4 px-6",children:"Itens"}),l.jsx("th",{className:"py-4 px-6",children:"Previsão"}),l.jsx("th",{className:"py-4 px-6",children:"Status"}),l.jsx("th",{className:"py-4 px-6 text-right",children:"Total"}),l.jsx("th",{className:"py-4 px-6",children:"Ações"})]})}),l.jsxs("tbody",{className:"divide-y divide-slate-50",children:[t.map(p=>{var m;return l.jsxs("tr",{className:"hover:bg-slate-50 dark:hover:bg-slate-700/30",children:[l.jsx("td",{className:"py-4 px-6 font-bold",children:((m=e.find(g=>g.id===p.clienteId))==null?void 0:m.nome)||"Cliente não encontrado"}),l.jsxs("td",{className:"py-4 px-6",children:[sm(p).length," item(ns)"]}),l.jsx("td",{className:"py-4 px-6",children:p.previsaoEntrega?new Date(p.previsaoEntrega).toLocaleDateString("pt-BR"):"-"}),l.jsx("td",{className:"py-4 px-6",children:l.jsxs("select",{value:p.status||"aguardando_montagem",onChange:g=>v(p,g.target.value),className:"bg-slate-100 rounded-lg px-2 py-1 text-xs font-bold",children:[l.jsx("option",{value:"aguardando_montagem",children:"Aguardando Montagem"}),l.jsx("option",{value:"em_laboratorio",children:"Em Laboratório"}),l.jsx("option",{value:"pronto_retirada",children:"Pronto para Retirada"}),l.jsx("option",{value:"entregue",children:"Entregue"}),l.jsx("option",{value:"cancelada",children:"Cancelada"})]})}),l.jsx("td",{className:"py-4 px-6 text-right font-bold",children:se(sm(p).reduce((g,x)=>g+Number(x.valor||0)*Number(x.qtd||0),0))}),l.jsx("td",{className:"py-4 px-6",children:l.jsx("button",{onClick:()=>d(p),className:"p-2 text-slate-400 hover:text-[#4A3AFF]",children:l.jsx(Nl,{size:16})})})]},p.id)}),t.length===0&&l.jsx("tr",{children:l.jsxs("td",{colSpan:6,className:"text-center py-12 text-slate-400",children:[l.jsx(by,{className:"mx-auto mb-3"}),"Nenhuma ordem de serviço cadastrada."]})})]})]})}),l.jsx(bl,{open:o,onClose:()=>a(!1),title:s?"Editar Ordem de Serviço":"Nova Ordem de Serviço",width:"max-w-4xl",children:c&&l.jsxs("form",{onSubmit:C,className:"space-y-5",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[l.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase",children:["Cliente",l.jsxs("select",{required:!0,value:c.clienteId,onChange:p=>u({...c,clienteId:p.target.value}),className:"mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3",children:[l.jsx("option",{value:"",children:"Selecione"}),e.map(p=>l.jsx("option",{value:p.id,children:p.nome},p.id))]})]}),l.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase",children:["Status",l.jsx("select",{value:c.status,onChange:p=>u({...c,status:p.target.value}),className:"mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3",children:Object.entries(kI).map(([p,m])=>l.jsx("option",{value:p,children:m},p))})]}),l.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase",children:["Previsão de entrega",l.jsx("input",{type:"date",value:c.previsaoEntrega,onChange:p=>u({...c,previsaoEntrega:p.target.value}),className:"mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"})]})]}),l.jsxs("div",{className:"border-t pt-4",children:[l.jsxs("div",{className:"flex justify-between items-center mb-3",children:[l.jsx("h3",{className:"font-bold",children:"Armação, lentes e tratamentos"}),l.jsx("button",{type:"button",onClick:()=>u({...c,itens:[...c.itens,{produtoId:"",descricao:"",qtd:1,valor:0,tratamento:""}]}),className:"text-sm font-bold text-[#4A3AFF]",children:"+ Adicionar item"})]}),c.itens.map((p,m)=>l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-2 mb-3",children:[l.jsxs("select",{value:p.produtoId,onChange:g=>f(m,g.target.value),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3",children:[l.jsx("option",{value:"",children:"Produto do estoque"}),n.map(g=>l.jsxs("option",{value:g.id,children:[g.marca," ",g.modelo," (",g.categoria,")"]},g.id))]}),l.jsx("input",{placeholder:"Descrição",value:p.descricao,onChange:g=>h(m,"descricao",g.target.value),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"}),l.jsx("input",{placeholder:"Tratamento",value:p.tratamento,onChange:g=>h(m,"tratamento",g.target.value),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"}),l.jsx("input",{type:"number",min:"1",value:p.qtd,onChange:g=>h(m,"qtd",Number(g.target.value)),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"}),l.jsx("input",{type:"number",step:"0.01",value:p.valor,onChange:g=>h(m,"valor",Number(g.target.value)),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"})]},m))]}),l.jsx("textarea",{placeholder:"Observações da montagem ou laboratório",value:c.observacoes||"",onChange:p=>u({...c,observacoes:p.target.value}),className:"w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 min-h-24"}),_&&l.jsx("p",{className:"rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-600",children:_}),l.jsxs("div",{className:"flex justify-end gap-3",children:[l.jsx("button",{type:"button",onClick:()=>a(!1),className:"px-5 py-3 rounded-xl bg-slate-100 font-bold",children:"Cancelar"}),l.jsx("button",{type:"submit",className:"px-5 py-3 rounded-xl bg-[#4A3AFF] text-white font-bold",children:"Salvar OS"})]})]})})]})}const II=[{icon:jy,titulo:"1. Comece pelo caixa",passos:["Acesse Caixa Diário.","Informe o fundo inicial e clique em Abrir Caixa.","Registre entradas, saídas e sangrias durante o dia.","Feche o caixa ao final da operação e confira o saldo."]},{icon:jh,titulo:"2. Registre uma venda",passos:["Abra o PDV com o caixa aberto.","Pesquise e selecione os produtos do estoque.","Vincule o cliente, escolha a forma de pagamento e aplique descontos.","Clique em Vender para baixar o estoque e registrar a venda."]},{icon:oo,titulo:"3. Cadastre clientes e receitas",passos:["Abra Clientes e clique em Novo Cliente.","Preencha dados pessoais, endereço e contato.","Registre a receita de longe e perto com médico, CRM e data.","Use o WhatsApp e o histórico do cliente para acompanhar o atendimento."]},{icon:Sl,titulo:"4. Organize o estoque",passos:["Cadastre produtos por categoria.","Informe custo, venda, estoque mínimo e fornecedor.","Use os alertas de estoque crítico para planejar reposições.","Mantenha tratamentos e especificações preenchidos para o laboratório."]},{icon:by,titulo:"5. Acompanhe uma OS",passos:["Crie uma OS ou converta um orçamento aprovado.","Selecione armação, lentes e tratamentos.","Atualize o status: montagem, laboratório, pronto ou entregue.","Informe previsão de entrega e observações para a equipe."]},{icon:Gb,titulo:"6. Controle o financeiro",passos:["Lance contas a pagar e receber.","Vincule despesas aos fornecedores quando aplicável.","Acompanhe faturamento, CMV, lucro e fluxo de caixa.","Use o DRE para conferir o resultado da operação."]}];function TI(){return l.jsxs("div",{className:"mx-auto flex w-full max-w-6xl flex-col gap-8",children:[l.jsxs("header",{children:[l.jsxs("div",{className:"mb-3 flex items-center gap-3 text-[#4A3AFF]",children:[l.jsx(Kb,{size:24}),l.jsx("span",{className:"text-xs font-bold uppercase tracking-[0.2em]",children:"Central de treinamento"})]}),l.jsx("h1",{className:"text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl",children:"Ajuda e treinamento"}),l.jsx("p",{className:"mt-2 max-w-2xl text-slate-500",children:"Aprenda o fluxo recomendado para operar a VISTTA com segurança e manter os dados da ótica organizados."})]}),l.jsx("section",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:II.map(({icon:t,titulo:e,passos:n})=>l.jsxs("article",{className:"rounded-2xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800",children:[l.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[l.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-[#4A3AFF] dark:bg-indigo-900/30",children:l.jsx(t,{size:20})}),l.jsx("h2",{className:"font-bold text-slate-900 dark:text-white",children:e})]}),l.jsx("ol",{className:"space-y-2 text-sm text-slate-600 dark:text-slate-300",children:n.map(r=>l.jsxs("li",{className:"flex gap-2",children:[l.jsx(Xb,{size:16,className:"mt-0.5 shrink-0 text-emerald-500"}),r]},r))})]},e))}),l.jsxs("section",{className:"rounded-2xl border border-indigo-100 bg-indigo-50 p-6 dark:border-indigo-900/50 dark:bg-indigo-950/30",children:[l.jsx("h2",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"Suporte"}),l.jsx("p",{className:"mt-1 text-sm text-slate-600 dark:text-slate-300",children:"Envie sua dúvida com o nome da ótica, usuário e uma descrição do que aconteceu."}),l.jsxs("div",{className:"mt-5 flex flex-col gap-3 sm:flex-row",children:[l.jsxs("a",{href:"mailto:icaroprojetos7@gmail.com",className:"inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#4A3AFF] shadow-sm hover:bg-slate-50 dark:bg-slate-800",children:[l.jsx(Py,{size:18})," icaroprojetos7@gmail.com"]}),l.jsxs("a",{href:"https://www.linkedin.com/in/7icaaro",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] px-4 py-3 text-sm font-bold text-white hover:bg-[#0959a8]",children:[l.jsx(rI,{size:18})," LinkedIn de suporte"]})]})]})]})}function PI(){const{configurarOtica:t}=pt(),[e,n]=I.useState(""),[r,s]=I.useState(""),[i,o]=I.useState(!1),a=async c=>{c.preventDefault();const u=e.trim();if(!u){s("Informe o nome da sua ótica.");return}s(""),o(!0);try{await t(u)}catch(d){s((d==null?void 0:d.message)||"Não foi possível salvar os dados da ótica.")}finally{o(!1)}};return l.jsx("div",{className:"flex min-h-screen w-full items-center justify-center bg-slate-50 p-6 dark:bg-slate-900",children:l.jsxs("div",{className:"w-full max-w-[480px] rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_8px_40px_rgb(0,0,0,0.04)] dark:border-slate-700 dark:bg-slate-800 sm:p-10",children:[l.jsx("div",{className:"mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-[#4A3AFF] dark:bg-indigo-900/30",children:l.jsx(Qb,{size:26})}),l.jsx("h1",{className:"text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl",children:"Vamos configurar sua ótica"}),l.jsx("p",{className:"mt-3 text-[15px] leading-relaxed text-slate-500",children:"Para começar, informe o nome da sua ótica."}),l.jsxs("form",{onSubmit:a,className:"mt-8 space-y-5",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"nome-otica",className:"mb-2 block text-[11px] font-bold uppercase tracking-wider text-slate-500",children:"Nome da ótica"}),l.jsx("input",{id:"nome-otica",autoFocus:!0,required:!0,value:e,onChange:c=>n(c.target.value),placeholder:"Digite o nome da sua ótica",className:"w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] outline-none transition-all focus:border-[#5235ff] focus:ring-1 focus:ring-[#5235ff] dark:border-slate-700 dark:bg-slate-900 dark:text-white"})]}),r&&l.jsx("p",{className:"rounded-xl border border-rose-100 bg-rose-50 p-3 text-sm font-semibold text-rose-600",children:r}),l.jsxs("button",{type:"submit",disabled:i,className:"flex w-full items-center justify-center gap-2 rounded-xl bg-[#5235ff] py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-[#4323ec] disabled:opacity-60",children:[i?"Salvando...":"Continuar"," ",!i&&l.jsx(qb,{size:18})]})]})]})})}function AI(){const{activeTab:t,user:e,loadingAuth:n,setActiveTab:r,carrinho:s,userRole:i,dadosEmpresa:o,empresaId:a,databaseError:c,logout:u}=pt(),[d,h]=I.useState(!1),[f,v]=I.useState(!1);I.useEffect(()=>{const y=localStorage.getItem("otica_theme")==="dark";v(y),document.documentElement.classList.toggle("dark",y)},[]);const _=()=>{const y=!f;v(y),localStorage.setItem("otica_theme",y?"dark":"light"),document.documentElement.classList.toggle("dark",y)};return n?l.jsx("div",{className:"flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-900",children:l.jsx("p",{className:"text-slate-500 font-medium",children:"Iniciando VISTTA ERP..."})}):e?a?l.jsxs("div",{className:"flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden",children:[l.jsx(fI,{}),l.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden relative pb-[70px] md:pb-0",children:[c&&l.jsx("div",{className:"absolute top-0 left-0 right-0 z-50 bg-rose-600 text-white px-4 py-2 text-center text-sm font-semibold",children:c}),l.jsx("button",{onClick:_,className:"absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-[#4A3AFF] shadow-sm",title:"Alternar tema",children:f?l.jsx(uI,{size:18}):l.jsx(oI,{size:18})}),l.jsxs("main",{className:"flex-1 overflow-y-auto p-4 pt-16 sm:pt-10 sm:p-10 lg:p-12 relative z-10 custom-scrollbar h-full",children:[t==="dashboard"&&l.jsx(mI,{}),t==="vendas"&&l.jsx(gI,{}),t==="caixa"&&l.jsx(vI,{}),t==="estoque"&&l.jsx(yI,{}),t==="clientes"&&l.jsx(wI,{}),t==="orcamentos"&&l.jsx(CI,{}),t==="ordens"&&l.jsx(bI,{}),t==="ajuda"&&l.jsx(TI,{}),t==="financeiro"&&l.jsx(EI,{}),["fornecedores","contas","categorias","usuarios"].includes(t)&&l.jsx(NI,{activeTab:t})]}),l.jsxs("div",{className:"md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex items-center h-[70px] z-[55]",children:[l.jsx($s,{icon:Iy,label:"Início",active:t==="dashboard",onClick:()=>r("dashboard")}),l.jsx($s,{icon:jh,label:"PDV",active:t==="vendas",onClick:()=>r("vendas"),badge:s.length}),l.jsx($s,{icon:Sl,label:"Estoque",active:t==="estoque",onClick:()=>r("estoque")}),l.jsx($s,{icon:oo,label:"Clientes",active:t==="clientes",onClick:()=>r("clientes")}),l.jsx($s,{icon:iI,label:"Menu",active:d,onClick:()=>h(!d)})]}),d&&l.jsx("div",{className:"md:hidden fixed inset-0 z-[70] bg-slate-900/60",onClick:()=>h(!1),children:l.jsxs("div",{className:"absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-white dark:bg-slate-800 shadow-2xl p-5",onClick:y=>y.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between mb-8",children:[l.jsx("span",{className:"font-bold truncate text-slate-900 dark:text-white",children:(o==null?void 0:o.nome)||"Minha Ótica"}),l.jsx("button",{onClick:()=>h(!1),className:"text-slate-400",children:"Fechar"})]}),l.jsx("div",{className:"space-y-2",children:[["caixa","Caixa Diário"],["orcamentos","Orçamentos"],["ordens","Ordens de Serviço"],["categorias","Categorias"],["ajuda","Ajuda e Treinamento"],...i==="admin"?[["financeiro","Financeiro"],["contas","Contas"],["fornecedores","Fornecedores"],["usuarios","Usuários"]]:[]].map(([y,C])=>l.jsx("button",{onClick:()=>{r(y),h(!1)},className:"w-full text-left px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700",children:C},y))}),l.jsxs("button",{onClick:()=>u().catch(y=>console.error("Não foi possível sair:",y)),className:"mt-6 flex w-full items-center gap-3 border-t border-slate-100 px-4 pt-5 text-left font-bold text-rose-500 dark:border-slate-700",children:[l.jsx(Ty,{size:18})," Sair da conta"]})]})})]})]}):l.jsx(PI,{}):l.jsx(pI,{})}function $s({icon:t,label:e,active:n,onClick:r,badge:s=0}){return l.jsxs("button",{onClick:r,className:`flex-1 h-full flex flex-col items-center justify-center gap-1 text-[10px] relative ${n?"text-[#4A3AFF] font-bold":"text-slate-400"}`,children:[l.jsx(t,{size:22}),s>0&&l.jsx("span",{className:"absolute top-1 right-3 bg-rose-500 text-white text-[10px] rounded-full px-1.5",children:s}),l.jsx("span",{children:e})]})}function RI(){return l.jsx(Wb,{children:l.jsx(AI,{})})}class jI extends ts.Component{constructor(){super(...arguments);jl(this,"state",{hasError:!1,message:""});jl(this,"reload",()=>{this.setState({hasError:!1,message:""}),window.location.reload()})}static getDerivedStateFromError(n){return{hasError:!0,message:n.message||"Erro inesperado ao renderizar a aplicação."}}componentDidCatch(n,r){console.error("Erro de renderização do VISTTA:",n,r.componentStack)}render(){return this.state.hasError?l.jsx("div",{className:"flex min-h-screen items-center justify-center bg-slate-50 p-6 text-center",children:l.jsxs("div",{className:"max-w-md rounded-3xl bg-white p-8 shadow-lg",children:[l.jsx("h1",{className:"mb-3 text-xl font-bold text-slate-900",children:"Ocorreu um erro inesperado"}),l.jsx("p",{className:"mb-6 text-sm text-slate-500",children:"A tela foi protegida para evitar uma falha silenciosa. Recarregue e tente novamente."}),l.jsx("p",{className:"mb-6 break-words rounded-xl bg-rose-50 p-3 text-left text-xs text-rose-700",children:this.state.message}),l.jsx("button",{onClick:this.reload,className:"rounded-xl bg-[#4A3AFF] px-5 py-3 font-bold text-white",children:"Recarregar aplicação"})]})}):this.props.children}}xc.createRoot(document.getElementById("root")).render(l.jsx(ts.StrictMode,{children:l.jsx(jI,{children:l.jsx(RI,{})})}));
