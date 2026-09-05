var Ky=Object.defineProperty;var Qy=(t,e,n)=>e in t?Ky(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Rl=(t,e,n)=>Qy(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Yy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var im={exports:{}},Ba={},om={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),Xy=Symbol.for("react.portal"),Jy=Symbol.for("react.fragment"),Zy=Symbol.for("react.strict_mode"),e0=Symbol.for("react.profiler"),t0=Symbol.for("react.provider"),n0=Symbol.for("react.context"),r0=Symbol.for("react.forward_ref"),s0=Symbol.for("react.suspense"),i0=Symbol.for("react.memo"),o0=Symbol.for("react.lazy"),Lh=Symbol.iterator;function a0(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var am={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lm=Object.assign,cm={};function ps(t,e,n){this.props=t,this.context=e,this.refs=cm,this.updater=n||am}ps.prototype.isReactComponent={};ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function um(){}um.prototype=ps.prototype;function Uu(t,e,n){this.props=t,this.context=e,this.refs=cm,this.updater=n||am}var zu=Uu.prototype=new um;zu.constructor=Uu;lm(zu,ps.prototype);zu.isPureReactComponent=!0;var Fh=Array.isArray,dm=Object.prototype.hasOwnProperty,Vu={current:null},hm={key:!0,ref:!0,__self:!0,__source:!0};function fm(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)dm.call(e,r)&&!hm.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];s.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Vi,type:t,key:i,ref:o,props:s,_owner:Vu.current}}function l0(t,e){return{$$typeof:Vi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vi}function c0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uh=/\/+/g;function jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?c0(""+t.key):e.toString(36)}function Po(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vi:case Xy:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+jl(o,0):r,Fh(s)?(n="",t!=null&&(n=t.replace(Uh,"$&/")+"/"),Po(s,e,n,"",function(u){return u})):s!=null&&(Bu(s)&&(s=l0(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Uh,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Fh(t))for(var a=0;a<t.length;a++){i=t[a];var c=r+jl(i,a);o+=Po(i,e,n,c,s)}else if(c=a0(t),typeof c=="function")for(t=c.call(t),a=0;!(i=t.next()).done;)i=i.value,c=r+jl(i,a++),o+=Po(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function lo(t,e,n){if(t==null)return t;var r=[],s=0;return Po(t,r,"","",function(i){return e.call(n,i,s++)}),r}function u0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Be={current:null},Ao={transition:null},d0={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:Vu};function pm(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:lo,forEach:function(t,e,n){lo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return lo(t,function(){e++}),e},toArray:function(t){return lo(t,function(e){return e})||[]},only:function(t){if(!Bu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=ps;B.Fragment=Jy;B.Profiler=e0;B.PureComponent=Uu;B.StrictMode=Zy;B.Suspense=s0;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d0;B.act=pm;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=lm({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Vu.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)dm.call(e,c)&&!hm.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vi,type:t.type,key:s,ref:i,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:n0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:t0,_context:t},t.Consumer=t};B.createElement=fm;B.createFactory=function(t){var e=fm.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:r0,render:t}};B.isValidElement=Bu;B.lazy=function(t){return{$$typeof:o0,_payload:{_status:-1,_result:t},_init:u0}};B.memo=function(t,e){return{$$typeof:i0,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=Ao.transition;Ao.transition={};try{t()}finally{Ao.transition=e}};B.unstable_act=pm;B.useCallback=function(t,e){return Be.current.useCallback(t,e)};B.useContext=function(t){return Be.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Be.current.useDeferredValue(t)};B.useEffect=function(t,e){return Be.current.useEffect(t,e)};B.useId=function(){return Be.current.useId()};B.useImperativeHandle=function(t,e,n){return Be.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Be.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Be.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Be.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Be.current.useReducer(t,e,n)};B.useRef=function(t){return Be.current.useRef(t)};B.useState=function(t){return Be.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Be.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Be.current.useTransition()};B.version="18.3.1";om.exports=B;var I=om.exports;const es=Yy(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0=I,f0=Symbol.for("react.element"),p0=Symbol.for("react.fragment"),m0=Object.prototype.hasOwnProperty,g0=h0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v0={key:!0,ref:!0,__self:!0,__source:!0};function mm(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)m0.call(e,r)&&!v0.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:f0,type:t,key:i,ref:o,props:s,_owner:g0.current}}Ba.Fragment=p0;Ba.jsx=mm;Ba.jsxs=mm;im.exports=Ba;var l=im.exports,yc={},gm={exports:{}},nt={},vm={exports:{}},_m={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,D){var M=P.length;P.push(D);e:for(;0<M;){var ae=M-1>>>1,ge=P[ae];if(0<s(ge,D))P[ae]=D,P[M]=ge,M=ae;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],M=P.pop();if(M!==D){P[0]=M;e:for(var ae=0,ge=P.length,Ut=ge>>>1;ae<Ut;){var Tt=2*(ae+1)-1,Ir=P[Tt],zt=Tt+1,Kn=P[zt];if(0>s(Ir,M))zt<ge&&0>s(Kn,Ir)?(P[ae]=Kn,P[zt]=M,ae=zt):(P[ae]=Ir,P[Tt]=M,ae=Tt);else if(zt<ge&&0>s(Kn,M))P[ae]=Kn,P[zt]=M,ae=zt;else break e}}return D}function s(P,D){var M=P.sortIndex-D.sortIndex;return M!==0?M:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],u=[],d=1,f=null,h=3,v=!1,_=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,e(c,D);else break;D=n(u)}}function y(P){if(x=!1,g(P),!_)if(n(c)!==null)_=!0,ks(k);else{var D=n(u);D!==null&&bs(y,D.startTime-P)}}function k(P,D){_=!1,x&&(x=!1,p(T),T=-1),v=!0;var M=h;try{for(g(D),f=n(c);f!==null&&(!(f.expirationTime>D)||P&&!Ye());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,h=f.priorityLevel;var ge=ae(f.expirationTime<=D);D=t.unstable_now(),typeof ge=="function"?f.callback=ge:f===n(c)&&r(c),g(D)}else r(c);f=n(c)}if(f!==null)var Ut=!0;else{var Tt=n(u);Tt!==null&&bs(y,Tt.startTime-D),Ut=!1}return Ut}finally{f=null,h=M,v=!1}}var w=!1,N=null,T=-1,q=5,L=-1;function Ye(){return!(t.unstable_now()-L<q)}function qn(){if(N!==null){var P=t.unstable_now();L=P;var D=!0;try{D=N(!0,P)}finally{D?Gn():(w=!1,N=null)}}else w=!1}var Gn;if(typeof m=="function")Gn=function(){m(qn)};else if(typeof MessageChannel<"u"){var oo=new MessageChannel,Il=oo.port2;oo.port1.onmessage=qn,Gn=function(){Il.postMessage(null)}}else Gn=function(){C(qn,0)};function ks(P){N=P,w||(w=!0,Gn())}function bs(P,D){T=C(function(){P(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,ks(k))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var M=h;h=D;try{return P()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=h;h=P;try{return D()}finally{h=M}},t.unstable_scheduleCallback=function(P,D,M){var ae=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ae+M:ae):M=ae,P){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=M+ge,P={id:d++,callback:D,priorityLevel:P,startTime:M,expirationTime:ge,sortIndex:-1},M>ae?(P.sortIndex=M,e(u,P),n(c)===null&&P===n(u)&&(x?(p(T),T=-1):x=!0,bs(y,M-ae))):(P.sortIndex=ge,e(c,P),_||v||(_=!0,ks(k))),P},t.unstable_shouldYield=Ye,t.unstable_wrapCallback=function(P){var D=h;return function(){var M=h;h=D;try{return P.apply(this,arguments)}finally{h=M}}}})(_m);vm.exports=_m;var _0=vm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0=I,et=_0;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ym=new Set,di={};function Er(t,e){ts(t,e),ts(t+"Capture",e)}function ts(t,e){for(di[t]=e,t=0;t<e.length;t++)ym.add(e[t])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xc=Object.prototype.hasOwnProperty,x0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zh={},Vh={};function w0(t){return xc.call(Vh,t)?!0:xc.call(zh,t)?!1:x0.test(t)?Vh[t]=!0:(zh[t]=!0,!1)}function C0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E0(t,e,n,r){if(e===null||typeof e>"u"||C0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function We(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new We(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new We(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new We(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new We(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new We(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new We(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new We(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new We(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new We(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wu=/[\-:]([a-z])/g;function $u(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wu,$u);Ae[e]=new We(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wu,$u);Ae[e]=new We(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wu,$u);Ae[e]=new We(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new We(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new We(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hu(t,e,n,r){var s=Ae.hasOwnProperty(e)?Ae[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E0(e,n,s,r)&&(n=null),r||s===null?w0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ln=y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),Ar=Symbol.for("react.portal"),Rr=Symbol.for("react.fragment"),qu=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),xm=Symbol.for("react.provider"),wm=Symbol.for("react.context"),Gu=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Ec=Symbol.for("react.suspense_list"),Ku=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),Cm=Symbol.for("react.offscreen"),Bh=Symbol.iterator;function Ps(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,Ol;function $s(t){if(Ol===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ol=e&&e[1]||""}return`
`+Ol+t}var Dl=!1;function Ml(t,e){if(!t||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function S0(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=Ml(t.type,!1),t;case 11:return t=Ml(t.type.render,!1),t;case 1:return t=Ml(t.type,!0),t;default:return""}}function Sc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rr:return"Fragment";case Ar:return"Portal";case wc:return"Profiler";case qu:return"StrictMode";case Cc:return"Suspense";case Ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wm:return(t.displayName||"Context")+".Consumer";case xm:return(t._context.displayName||"Context")+".Provider";case Gu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ku:return e=t.displayName||null,e!==null?e:Sc(t.type)||"Memo";case dn:e=t._payload,t=t._init;try{return Sc(t(e))}catch{}}return null}function N0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sc(e);case 8:return e===qu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function On(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Em(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function k0(t){var e=Em(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uo(t){t._valueTracker||(t._valueTracker=k0(t))}function Sm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Em(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Go(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nc(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=On(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Nm(t,e){e=e.checked,e!=null&&Hu(t,"checked",e,!1)}function kc(t,e){Nm(t,e);var n=On(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&bc(t,e.type,On(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $h(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bc(t,e,n){(e!=="number"||Go(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function $r(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+On(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ic(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Hs(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:On(n)}}function km(t,e){var n=On(e.value),r=On(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ho,Im=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ho.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function hi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b0=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){b0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function Tm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function Pm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Tm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var I0=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pc(t,e){if(e){if(I0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Ac(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rc=null;function Qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jc=null,Hr=null,qr=null;function Gh(t){if(t=$i(t)){if(typeof jc!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Ga(e),jc(t.stateNode,t.type,e))}}function Am(t){Hr?qr?qr.push(t):qr=[t]:Hr=t}function Rm(){if(Hr){var t=Hr,e=qr;if(qr=Hr=null,Gh(t),e)for(t=0;t<e.length;t++)Gh(e[t])}}function jm(t,e){return t(e)}function Om(){}var Ll=!1;function Dm(t,e,n){if(Ll)return t(e,n);Ll=!0;try{return jm(t,e,n)}finally{Ll=!1,(Hr!==null||qr!==null)&&(Om(),Rm())}}function fi(t,e){var n=t.stateNode;if(n===null)return null;var r=Ga(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Oc=!1;if(en)try{var As={};Object.defineProperty(As,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{Oc=!1}function T0(t,e,n,r,s,i,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Xs=!1,Ko=null,Qo=!1,Dc=null,P0={onError:function(t){Xs=!0,Ko=t}};function A0(t,e,n,r,s,i,o,a,c){Xs=!1,Ko=null,T0.apply(P0,arguments)}function R0(t,e,n,r,s,i,o,a,c){if(A0.apply(this,arguments),Xs){if(Xs){var u=Ko;Xs=!1,Ko=null}else throw Error(E(198));Qo||(Qo=!0,Dc=u)}}function Sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kh(t){if(Sr(t)!==t)throw Error(E(188))}function j0(t){var e=t.alternate;if(!e){if(e=Sr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Kh(s),t;if(i===r)return Kh(s),e;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Lm(t){return t=j0(t),t!==null?Fm(t):null}function Fm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fm(t);if(e!==null)return e;t=t.sibling}return null}var Um=et.unstable_scheduleCallback,Qh=et.unstable_cancelCallback,O0=et.unstable_shouldYield,D0=et.unstable_requestPaint,me=et.unstable_now,M0=et.unstable_getCurrentPriorityLevel,Yu=et.unstable_ImmediatePriority,zm=et.unstable_UserBlockingPriority,Yo=et.unstable_NormalPriority,L0=et.unstable_LowPriority,Vm=et.unstable_IdlePriority,Wa=null,jt=null;function F0(t){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Wa,t,void 0,(t.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:V0,U0=Math.log,z0=Math.LN2;function V0(t){return t>>>=0,t===0?32:31-(U0(t)/z0|0)|0}var fo=64,po=4194304;function qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=qs(a):(i&=o,i!==0&&(r=qs(i)))}else o=n&~s,o!==0?r=qs(o):i!==0&&(r=qs(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Et(e),s=1<<n,r|=t[n],e&=~s;return r}function B0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Et(i),a=1<<o,c=s[o];c===-1?(!(a&n)||a&r)&&(s[o]=B0(a,e)):c<=e&&(t.expiredLanes|=a),i&=~a}}function Mc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bm(){var t=fo;return fo<<=1,!(fo&4194240)&&(fo=64),t}function Fl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Et(e),t[e]=n}function $0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Et(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Xu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Et(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var G=0;function Wm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $m,Ju,Hm,qm,Gm,Lc=!1,mo=[],wn=null,Cn=null,En=null,pi=new Map,mi=new Map,fn=[],H0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yh(t,e){switch(t){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":pi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(e.pointerId)}}function Rs(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=$i(e),e!==null&&Ju(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function q0(t,e,n,r,s){switch(e){case"focusin":return wn=Rs(wn,t,e,n,r,s),!0;case"dragenter":return Cn=Rs(Cn,t,e,n,r,s),!0;case"mouseover":return En=Rs(En,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return pi.set(i,Rs(pi.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,mi.set(i,Rs(mi.get(i)||null,t,e,n,r,s)),!0}return!1}function Km(t){var e=nr(t.target);if(e!==null){var n=Sr(e);if(n!==null){if(e=n.tag,e===13){if(e=Mm(n),e!==null){t.blockedOn=e,Gm(t.priority,function(){Hm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rc=r,n.target.dispatchEvent(r),Rc=null}else return e=$i(n),e!==null&&Ju(e),t.blockedOn=n,!1;e.shift()}return!0}function Xh(t,e,n){Ro(t)&&n.delete(e)}function G0(){Lc=!1,wn!==null&&Ro(wn)&&(wn=null),Cn!==null&&Ro(Cn)&&(Cn=null),En!==null&&Ro(En)&&(En=null),pi.forEach(Xh),mi.forEach(Xh)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,Lc||(Lc=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,G0)))}function gi(t){function e(s){return js(s,t)}if(0<mo.length){js(mo[0],t);for(var n=1;n<mo.length;n++){var r=mo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wn!==null&&js(wn,t),Cn!==null&&js(Cn,t),En!==null&&js(En,t),pi.forEach(e),mi.forEach(e),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)Km(n),n.blockedOn===null&&fn.shift()}var Gr=ln.ReactCurrentBatchConfig,Jo=!0;function K0(t,e,n,r){var s=G,i=Gr.transition;Gr.transition=null;try{G=1,Zu(t,e,n,r)}finally{G=s,Gr.transition=i}}function Q0(t,e,n,r){var s=G,i=Gr.transition;Gr.transition=null;try{G=4,Zu(t,e,n,r)}finally{G=s,Gr.transition=i}}function Zu(t,e,n,r){if(Jo){var s=Fc(t,e,n,r);if(s===null)Kl(t,e,r,Zo,n),Yh(t,r);else if(q0(s,t,e,n,r))r.stopPropagation();else if(Yh(t,r),e&4&&-1<H0.indexOf(t)){for(;s!==null;){var i=$i(s);if(i!==null&&$m(i),i=Fc(t,e,n,r),i===null&&Kl(t,e,r,Zo,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Kl(t,e,r,null,n)}}var Zo=null;function Fc(t,e,n,r){if(Zo=null,t=Qu(r),t=nr(t),t!==null)if(e=Sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zo=t,null}function Qm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(M0()){case Yu:return 1;case zm:return 4;case Yo:case L0:return 16;case Vm:return 536870912;default:return 16}default:return 16}}var _n=null,ed=null,jo=null;function Ym(){if(jo)return jo;var t,e=ed,n=e.length,r,s="value"in _n?_n.value:_n.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return jo=s.slice(t,1<r?1-r:void 0)}function Oo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function go(){return!0}function Jh(){return!1}function rt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?go:Jh,this.isPropagationStopped=Jh,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rt(ms),Wi=ue({},ms,{view:0,detail:0}),Y0=rt(Wi),Ul,zl,Os,$a=ue({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(Ul=t.screenX-Os.screenX,zl=t.screenY-Os.screenY):zl=Ul=0,Os=t),Ul)},movementY:function(t){return"movementY"in t?t.movementY:zl}}),Zh=rt($a),X0=ue({},$a,{dataTransfer:0}),J0=rt(X0),Z0=ue({},Wi,{relatedTarget:0}),Vl=rt(Z0),ex=ue({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),tx=rt(ex),nx=ue({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rx=rt(nx),sx=ue({},ms,{data:0}),ef=rt(sx),ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ax[t])?!!e[t]:!1}function nd(){return lx}var cx=ue({},Wi,{key:function(t){if(t.key){var e=ix[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ox[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nd,charCode:function(t){return t.type==="keypress"?Oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ux=rt(cx),dx=ue({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tf=rt(dx),hx=ue({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nd}),fx=rt(hx),px=ue({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),mx=rt(px),gx=ue({},$a,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vx=rt(gx),_x=[9,13,27,32],rd=en&&"CompositionEvent"in window,Js=null;en&&"documentMode"in document&&(Js=document.documentMode);var yx=en&&"TextEvent"in window&&!Js,Xm=en&&(!rd||Js&&8<Js&&11>=Js),nf=" ",rf=!1;function Jm(t,e){switch(t){case"keyup":return _x.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function xx(t,e){switch(t){case"compositionend":return Zm(e);case"keypress":return e.which!==32?null:(rf=!0,nf);case"textInput":return t=e.data,t===nf&&rf?null:t;default:return null}}function wx(t,e){if(jr)return t==="compositionend"||!rd&&Jm(t,e)?(t=Ym(),jo=ed=_n=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xm&&e.locale!=="ko"?null:e.data;default:return null}}var Cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Cx[t.type]:e==="textarea"}function eg(t,e,n,r){Am(r),e=ea(e,"onChange"),0<e.length&&(n=new td("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zs=null,vi=null;function Ex(t){dg(t,0)}function Ha(t){var e=Mr(t);if(Sm(e))return t}function Sx(t,e){if(t==="change")return e}var tg=!1;if(en){var Bl;if(en){var Wl="oninput"in document;if(!Wl){var of=document.createElement("div");of.setAttribute("oninput","return;"),Wl=typeof of.oninput=="function"}Bl=Wl}else Bl=!1;tg=Bl&&(!document.documentMode||9<document.documentMode)}function af(){Zs&&(Zs.detachEvent("onpropertychange",ng),vi=Zs=null)}function ng(t){if(t.propertyName==="value"&&Ha(vi)){var e=[];eg(e,vi,t,Qu(t)),Dm(Ex,e)}}function Nx(t,e,n){t==="focusin"?(af(),Zs=e,vi=n,Zs.attachEvent("onpropertychange",ng)):t==="focusout"&&af()}function kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ha(vi)}function bx(t,e){if(t==="click")return Ha(e)}function Ix(t,e){if(t==="input"||t==="change")return Ha(e)}function Tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bt=typeof Object.is=="function"?Object.is:Tx;function _i(t,e){if(bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!xc.call(e,s)||!bt(t[s],e[s]))return!1}return!0}function lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cf(t,e){var n=lf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lf(n)}}function rg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sg(){for(var t=window,e=Go();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Go(t.document)}return e}function sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Px(t){var e=sg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rg(n.ownerDocument.documentElement,n)){if(r!==null&&sd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=cf(n,i);var o=cf(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ax=en&&"documentMode"in document&&11>=document.documentMode,Or=null,Uc=null,ei=null,zc=!1;function uf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zc||Or==null||Or!==Go(r)||(r=Or,"selectionStart"in r&&sd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ei&&_i(ei,r)||(ei=r,r=ea(Uc,"onSelect"),0<r.length&&(e=new td("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Or)))}function vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Dr={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},$l={},ig={};en&&(ig=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function qa(t){if($l[t])return $l[t];if(!Dr[t])return t;var e=Dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ig)return $l[t]=e[n];return t}var og=qa("animationend"),ag=qa("animationiteration"),lg=qa("animationstart"),cg=qa("transitionend"),ug=new Map,df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(t,e){ug.set(t,e),Er(e,[t])}for(var Hl=0;Hl<df.length;Hl++){var ql=df[Hl],Rx=ql.toLowerCase(),jx=ql[0].toUpperCase()+ql.slice(1);zn(Rx,"on"+jx)}zn(og,"onAnimationEnd");zn(ag,"onAnimationIteration");zn(lg,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(cg,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function hf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,R0(r,e,void 0,t),t.currentTarget=null}function dg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&s.isPropagationStopped())break e;hf(s,a,u),i=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&s.isPropagationStopped())break e;hf(s,a,u),i=c}}}if(Qo)throw t=Dc,Qo=!1,Dc=null,t}function ne(t,e){var n=e[Hc];n===void 0&&(n=e[Hc]=new Set);var r=t+"__bubble";n.has(r)||(hg(e,t,2,!1),n.add(r))}function Gl(t,e,n){var r=0;e&&(r|=4),hg(n,t,r,e)}var _o="_reactListening"+Math.random().toString(36).slice(2);function yi(t){if(!t[_o]){t[_o]=!0,ym.forEach(function(n){n!=="selectionchange"&&(Ox.has(n)||Gl(n,!1,t),Gl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_o]||(e[_o]=!0,Gl("selectionchange",!1,e))}}function hg(t,e,n,r){switch(Qm(e)){case 1:var s=K0;break;case 4:s=Q0;break;default:s=Zu}n=s.bind(null,e,n,t),s=void 0,!Oc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Kl(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;a!==null;){if(o=nr(a),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Dm(function(){var u=i,d=Qu(n),f=[];e:{var h=ug.get(t);if(h!==void 0){var v=td,_=t;switch(t){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":v=ux;break;case"focusin":_="focus",v=Vl;break;case"focusout":_="blur",v=Vl;break;case"beforeblur":case"afterblur":v=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=fx;break;case og:case ag:case lg:v=tx;break;case cg:v=mx;break;case"scroll":v=Y0;break;case"wheel":v=vx;break;case"copy":case"cut":case"paste":v=rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=tf}var x=(e&4)!==0,C=!x&&t==="scroll",p=x?h!==null?h+"Capture":null:h;x=[];for(var m=u,g;m!==null;){g=m;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,p!==null&&(y=fi(m,p),y!=null&&x.push(xi(m,y,g)))),C)break;m=m.return}0<x.length&&(h=new v(h,_,null,n,d),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==Rc&&(_=n.relatedTarget||n.fromElement)&&(nr(_)||_[tn]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?nr(_):null,_!==null&&(C=Sr(_),_!==C||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(x=Zh,y="onMouseLeave",p="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=tf,y="onPointerLeave",p="onPointerEnter",m="pointer"),C=v==null?h:Mr(v),g=_==null?h:Mr(_),h=new x(y,m+"leave",v,n,d),h.target=C,h.relatedTarget=g,y=null,nr(d)===u&&(x=new x(p,m+"enter",_,n,d),x.target=g,x.relatedTarget=C,y=x),C=y,v&&_)t:{for(x=v,p=_,m=0,g=x;g;g=Tr(g))m++;for(g=0,y=p;y;y=Tr(y))g++;for(;0<m-g;)x=Tr(x),m--;for(;0<g-m;)p=Tr(p),g--;for(;m--;){if(x===p||p!==null&&x===p.alternate)break t;x=Tr(x),p=Tr(p)}x=null}else x=null;v!==null&&ff(f,h,v,x,!1),_!==null&&C!==null&&ff(f,C,_,x,!0)}}e:{if(h=u?Mr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var k=Sx;else if(sf(h))if(tg)k=Ix;else{k=kx;var w=Nx}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=bx);if(k&&(k=k(t,u))){eg(f,k,n,d);break e}w&&w(t,h,u),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&bc(h,"number",h.value)}switch(w=u?Mr(u):window,t){case"focusin":(sf(w)||w.contentEditable==="true")&&(Or=w,Uc=u,ei=null);break;case"focusout":ei=Uc=Or=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,uf(f,n,d);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":uf(f,n,d)}var N;if(rd)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else jr?Jm(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Xm&&n.locale!=="ko"&&(jr||T!=="onCompositionStart"?T==="onCompositionEnd"&&jr&&(N=Ym()):(_n=d,ed="value"in _n?_n.value:_n.textContent,jr=!0)),w=ea(u,T),0<w.length&&(T=new ef(T,t,null,n,d),f.push({event:T,listeners:w}),N?T.data=N:(N=Zm(n),N!==null&&(T.data=N)))),(N=yx?xx(t,n):wx(t,n))&&(u=ea(u,"onBeforeInput"),0<u.length&&(d=new ef("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=N))}dg(f,e)})}function xi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ea(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=fi(t,n),i!=null&&r.unshift(xi(t,i,s)),i=fi(t,e),i!=null&&r.push(xi(t,i,s))),t=t.return}return r}function Tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ff(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,s?(c=fi(n,i),c!=null&&o.unshift(xi(n,c,a))):s||(c=fi(n,i),c!=null&&o.push(xi(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Dx=/\r\n?/g,Mx=/\u0000|\uFFFD/g;function pf(t){return(typeof t=="string"?t:""+t).replace(Dx,`
`).replace(Mx,"")}function yo(t,e,n){if(e=pf(e),pf(t)!==e&&n)throw Error(E(425))}function ta(){}var Vc=null,Bc=null;function Wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,Lx=typeof clearTimeout=="function"?clearTimeout:void 0,mf=typeof Promise=="function"?Promise:void 0,Fx=typeof queueMicrotask=="function"?queueMicrotask:typeof mf<"u"?function(t){return mf.resolve(null).then(t).catch(Ux)}:$c;function Ux(t){setTimeout(function(){throw t})}function Ql(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),gi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);gi(e)}function Sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),Rt="__reactFiber$"+gs,wi="__reactProps$"+gs,tn="__reactContainer$"+gs,Hc="__reactEvents$"+gs,zx="__reactListeners$"+gs,Vx="__reactHandles$"+gs;function nr(t){var e=t[Rt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tn]||n[Rt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gf(t);t!==null;){if(n=t[Rt])return n;t=gf(t)}return e}t=n,n=t.parentNode}return null}function $i(t){return t=t[Rt]||t[tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Ga(t){return t[wi]||null}var qc=[],Lr=-1;function Vn(t){return{current:t}}function re(t){0>Lr||(t.current=qc[Lr],qc[Lr]=null,Lr--)}function te(t,e){Lr++,qc[Lr]=t.current,t.current=e}var Dn={},Me=Vn(Dn),Ge=Vn(!1),dr=Dn;function ns(t,e){var n=t.type.contextTypes;if(!n)return Dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ke(t){return t=t.childContextTypes,t!=null}function na(){re(Ge),re(Me)}function vf(t,e,n){if(Me.current!==Dn)throw Error(E(168));te(Me,e),te(Ge,n)}function fg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(E(108,N0(t)||"Unknown",s));return ue({},n,r)}function ra(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,dr=Me.current,te(Me,t),te(Ge,Ge.current),!0}function _f(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=fg(t,e,dr),r.__reactInternalMemoizedMergedChildContext=t,re(Ge),re(Me),te(Me,t)):re(Ge),te(Ge,n)}var Wt=null,Ka=!1,Yl=!1;function pg(t){Wt===null?Wt=[t]:Wt.push(t)}function Bx(t){Ka=!0,pg(t)}function Bn(){if(!Yl&&Wt!==null){Yl=!0;var t=0,e=G;try{var n=Wt;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wt=null,Ka=!1}catch(s){throw Wt!==null&&(Wt=Wt.slice(t+1)),Um(Yu,Bn),s}finally{G=e,Yl=!1}}return null}var Fr=[],Ur=0,sa=null,ia=0,it=[],ot=0,hr=null,qt=1,Gt="";function Xn(t,e){Fr[Ur++]=ia,Fr[Ur++]=sa,sa=t,ia=e}function mg(t,e,n){it[ot++]=qt,it[ot++]=Gt,it[ot++]=hr,hr=t;var r=qt;t=Gt;var s=32-Et(r)-1;r&=~(1<<s),n+=1;var i=32-Et(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,qt=1<<32-Et(e)+s|n<<s|r,Gt=i+t}else qt=1<<i|n<<s|r,Gt=t}function id(t){t.return!==null&&(Xn(t,1),mg(t,1,0))}function od(t){for(;t===sa;)sa=Fr[--Ur],Fr[Ur]=null,ia=Fr[--Ur],Fr[Ur]=null;for(;t===hr;)hr=it[--ot],it[ot]=null,Gt=it[--ot],it[ot]=null,qt=it[--ot],it[ot]=null}var Ze=null,Je=null,ie=!1,xt=null;function gg(t,e){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Je=Sn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:qt,overflow:Gt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ze=t,Je=null,!0):!1;default:return!1}}function Gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kc(t){if(ie){var e=Je;if(e){var n=e;if(!yf(t,e)){if(Gc(t))throw Error(E(418));e=Sn(n.nextSibling);var r=Ze;e&&yf(t,e)?gg(r,n):(t.flags=t.flags&-4097|2,ie=!1,Ze=t)}}else{if(Gc(t))throw Error(E(418));t.flags=t.flags&-4097|2,ie=!1,Ze=t}}}function xf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function xo(t){if(t!==Ze)return!1;if(!ie)return xf(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wc(t.type,t.memoizedProps)),e&&(e=Je)){if(Gc(t))throw vg(),Error(E(418));for(;e;)gg(t,e),e=Sn(e.nextSibling)}if(xf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Je=Sn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Je=null}}else Je=Ze?Sn(t.stateNode.nextSibling):null;return!0}function vg(){for(var t=Je;t;)t=Sn(t.nextSibling)}function rs(){Je=Ze=null,ie=!1}function ad(t){xt===null?xt=[t]:xt.push(t)}var Wx=ln.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function wo(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wf(t){var e=t._init;return e(t._payload)}function _g(t){function e(p,m){if(t){var g=p.deletions;g===null?(p.deletions=[m],p.flags|=16):g.push(m)}}function n(p,m){if(!t)return null;for(;m!==null;)e(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function s(p,m){return p=In(p,m),p.index=0,p.sibling=null,p}function i(p,m,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<m?(p.flags|=2,m):g):(p.flags|=2,m)):(p.flags|=1048576,m)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,m,g,y){return m===null||m.tag!==6?(m=rc(g,p.mode,y),m.return=p,m):(m=s(m,g),m.return=p,m)}function c(p,m,g,y){var k=g.type;return k===Rr?d(p,m,g.props.children,y,g.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===dn&&wf(k)===m.type)?(y=s(m,g.props),y.ref=Ds(p,m,g),y.return=p,y):(y=Vo(g.type,g.key,g.props,null,p.mode,y),y.ref=Ds(p,m,g),y.return=p,y)}function u(p,m,g,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=sc(g,p.mode,y),m.return=p,m):(m=s(m,g.children||[]),m.return=p,m)}function d(p,m,g,y,k){return m===null||m.tag!==7?(m=lr(g,p.mode,y,k),m.return=p,m):(m=s(m,g),m.return=p,m)}function f(p,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=rc(""+m,p.mode,g),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case co:return g=Vo(m.type,m.key,m.props,null,p.mode,g),g.ref=Ds(p,null,m),g.return=p,g;case Ar:return m=sc(m,p.mode,g),m.return=p,m;case dn:var y=m._init;return f(p,y(m._payload),g)}if(Hs(m)||Ps(m))return m=lr(m,p.mode,g,null),m.return=p,m;wo(p,m)}return null}function h(p,m,g,y){var k=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(p,m,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case co:return g.key===k?c(p,m,g,y):null;case Ar:return g.key===k?u(p,m,g,y):null;case dn:return k=g._init,h(p,m,k(g._payload),y)}if(Hs(g)||Ps(g))return k!==null?null:d(p,m,g,y,null);wo(p,g)}return null}function v(p,m,g,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(g)||null,a(m,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case co:return p=p.get(y.key===null?g:y.key)||null,c(m,p,y,k);case Ar:return p=p.get(y.key===null?g:y.key)||null,u(m,p,y,k);case dn:var w=y._init;return v(p,m,g,w(y._payload),k)}if(Hs(y)||Ps(y))return p=p.get(g)||null,d(m,p,y,k,null);wo(m,y)}return null}function _(p,m,g,y){for(var k=null,w=null,N=m,T=m=0,q=null;N!==null&&T<g.length;T++){N.index>T?(q=N,N=null):q=N.sibling;var L=h(p,N,g[T],y);if(L===null){N===null&&(N=q);break}t&&N&&L.alternate===null&&e(p,N),m=i(L,m,T),w===null?k=L:w.sibling=L,w=L,N=q}if(T===g.length)return n(p,N),ie&&Xn(p,T),k;if(N===null){for(;T<g.length;T++)N=f(p,g[T],y),N!==null&&(m=i(N,m,T),w===null?k=N:w.sibling=N,w=N);return ie&&Xn(p,T),k}for(N=r(p,N);T<g.length;T++)q=v(N,p,T,g[T],y),q!==null&&(t&&q.alternate!==null&&N.delete(q.key===null?T:q.key),m=i(q,m,T),w===null?k=q:w.sibling=q,w=q);return t&&N.forEach(function(Ye){return e(p,Ye)}),ie&&Xn(p,T),k}function x(p,m,g,y){var k=Ps(g);if(typeof k!="function")throw Error(E(150));if(g=k.call(g),g==null)throw Error(E(151));for(var w=k=null,N=m,T=m=0,q=null,L=g.next();N!==null&&!L.done;T++,L=g.next()){N.index>T?(q=N,N=null):q=N.sibling;var Ye=h(p,N,L.value,y);if(Ye===null){N===null&&(N=q);break}t&&N&&Ye.alternate===null&&e(p,N),m=i(Ye,m,T),w===null?k=Ye:w.sibling=Ye,w=Ye,N=q}if(L.done)return n(p,N),ie&&Xn(p,T),k;if(N===null){for(;!L.done;T++,L=g.next())L=f(p,L.value,y),L!==null&&(m=i(L,m,T),w===null?k=L:w.sibling=L,w=L);return ie&&Xn(p,T),k}for(N=r(p,N);!L.done;T++,L=g.next())L=v(N,p,T,L.value,y),L!==null&&(t&&L.alternate!==null&&N.delete(L.key===null?T:L.key),m=i(L,m,T),w===null?k=L:w.sibling=L,w=L);return t&&N.forEach(function(qn){return e(p,qn)}),ie&&Xn(p,T),k}function C(p,m,g,y){if(typeof g=="object"&&g!==null&&g.type===Rr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case co:e:{for(var k=g.key,w=m;w!==null;){if(w.key===k){if(k=g.type,k===Rr){if(w.tag===7){n(p,w.sibling),m=s(w,g.props.children),m.return=p,p=m;break e}}else if(w.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===dn&&wf(k)===w.type){n(p,w.sibling),m=s(w,g.props),m.ref=Ds(p,w,g),m.return=p,p=m;break e}n(p,w);break}else e(p,w);w=w.sibling}g.type===Rr?(m=lr(g.props.children,p.mode,y,g.key),m.return=p,p=m):(y=Vo(g.type,g.key,g.props,null,p.mode,y),y.ref=Ds(p,m,g),y.return=p,p=y)}return o(p);case Ar:e:{for(w=g.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(p,m.sibling),m=s(m,g.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else e(p,m);m=m.sibling}m=sc(g,p.mode,y),m.return=p,p=m}return o(p);case dn:return w=g._init,C(p,m,w(g._payload),y)}if(Hs(g))return _(p,m,g,y);if(Ps(g))return x(p,m,g,y);wo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(p,m.sibling),m=s(m,g),m.return=p,p=m):(n(p,m),m=rc(g,p.mode,y),m.return=p,p=m),o(p)):n(p,m)}return C}var ss=_g(!0),yg=_g(!1),oa=Vn(null),aa=null,zr=null,ld=null;function cd(){ld=zr=aa=null}function ud(t){var e=oa.current;re(oa),t._currentValue=e}function Qc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Kr(t,e){aa=t,ld=zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(He=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(ld!==t)if(t={context:t,memoizedValue:e,next:null},zr===null){if(aa===null)throw Error(E(308));zr=t,aa.dependencies={lanes:0,firstContext:t}}else zr=zr.next=t;return e}var rr=null;function dd(t){rr===null?rr=[t]:rr.push(t)}function xg(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,dd(e)):(n.next=s.next,s.next=n),e.interleaved=n,nn(t,r)}function nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hn=!1;function hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,nn(t,n)}return s=r.interleaved,s===null?(e.next=e,dd(r)):(e.next=s.next,s.next=e),r.interleaved=e,nn(t,n)}function Do(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xu(t,n)}}function Cf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function la(t,e,n,r){var s=t.updateQueue;hn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(i!==null){var f=s.baseState;o=0,d=u=c=null,a=i;do{var h=a.lane,v=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,v=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(v,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(v,f,h):_,h==null)break e;f=ue({},f,h);break e;case 2:hn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=s.effects,h===null?s.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,c=f):d=d.next=v,o|=h;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;h=a,a=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(d===null&&(c=f),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);pr|=o,t.lanes=o,t.memoizedState=f}}function Ef(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(E(191,s));s.call(r)}}}var Hi={},Ot=Vn(Hi),Ci=Vn(Hi),Ei=Vn(Hi);function sr(t){if(t===Hi)throw Error(E(174));return t}function fd(t,e){switch(te(Ei,e),te(Ci,t),te(Ot,Hi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tc(e,t)}re(Ot),te(Ot,e)}function is(){re(Ot),re(Ci),re(Ei)}function Cg(t){sr(Ei.current);var e=sr(Ot.current),n=Tc(e,t.type);e!==n&&(te(Ci,t),te(Ot,n))}function pd(t){Ci.current===t&&(re(Ot),re(Ci))}var le=Vn(0);function ca(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xl=[];function md(){for(var t=0;t<Xl.length;t++)Xl[t]._workInProgressVersionPrimary=null;Xl.length=0}var Mo=ln.ReactCurrentDispatcher,Jl=ln.ReactCurrentBatchConfig,fr=0,ce=null,ye=null,Ee=null,ua=!1,ti=!1,Si=0,$x=0;function je(){throw Error(E(321))}function gd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bt(t[n],e[n]))return!1;return!0}function vd(t,e,n,r,s,i){if(fr=i,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mo.current=t===null||t.memoizedState===null?Kx:Qx,t=n(r,s),ti){i=0;do{if(ti=!1,Si=0,25<=i)throw Error(E(301));i+=1,Ee=ye=null,e.updateQueue=null,Mo.current=Yx,t=n(r,s)}while(ti)}if(Mo.current=da,e=ye!==null&&ye.next!==null,fr=0,Ee=ye=ce=null,ua=!1,e)throw Error(E(300));return t}function _d(){var t=Si!==0;return Si=0,t}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ce.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function ht(){if(ye===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=Ee===null?ce.memoizedState:Ee.next;if(e!==null)Ee=e,ye=t;else{if(t===null)throw Error(E(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ee===null?ce.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function Ni(t,e){return typeof e=="function"?e(t):e}function Zl(t){var e=ht(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ye,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,c=null,u=i;do{var d=u.lane;if((fr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=f,o=r):c=c.next=f,ce.lanes|=d,pr|=d}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=a,bt(r,e.memoizedState)||(He=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ce.lanes|=i,pr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ec(t){var e=ht(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);bt(i,e.memoizedState)||(He=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Eg(){}function Sg(t,e){var n=ce,r=ht(),s=e(),i=!bt(r.memoizedState,s);if(i&&(r.memoizedState=s,He=!0),r=r.queue,yd(bg.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,ki(9,kg.bind(null,n,r,s,e),void 0,null),Ne===null)throw Error(E(349));fr&30||Ng(n,e,s)}return s}function Ng(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kg(t,e,n,r){e.value=n,e.getSnapshot=r,Ig(e)&&Tg(t)}function bg(t,e,n){return n(function(){Ig(e)&&Tg(t)})}function Ig(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bt(t,n)}catch{return!0}}function Tg(t){var e=nn(t,1);e!==null&&St(e,t,1,-1)}function Sf(t){var e=At();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:t},e.queue=t,t=t.dispatch=Gx.bind(null,ce,t),[e.memoizedState,t]}function ki(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Pg(){return ht().memoizedState}function Lo(t,e,n,r){var s=At();ce.flags|=t,s.memoizedState=ki(1|e,n,void 0,r===void 0?null:r)}function Qa(t,e,n,r){var s=ht();r=r===void 0?null:r;var i=void 0;if(ye!==null){var o=ye.memoizedState;if(i=o.destroy,r!==null&&gd(r,o.deps)){s.memoizedState=ki(e,n,i,r);return}}ce.flags|=t,s.memoizedState=ki(1|e,n,i,r)}function Nf(t,e){return Lo(8390656,8,t,e)}function yd(t,e){return Qa(2048,8,t,e)}function Ag(t,e){return Qa(4,2,t,e)}function Rg(t,e){return Qa(4,4,t,e)}function jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Og(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4,4,jg.bind(null,e,t),n)}function xd(){}function Dg(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Mg(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Lg(t,e,n){return fr&21?(bt(n,e)||(n=Bm(),ce.lanes|=n,pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,He=!0),t.memoizedState=n)}function Hx(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=Jl.transition;Jl.transition={};try{t(!1),e()}finally{G=n,Jl.transition=r}}function Fg(){return ht().memoizedState}function qx(t,e,n){var r=bn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ug(t))zg(e,n);else if(n=xg(t,e,n,r),n!==null){var s=Ue();St(n,t,r,s),Vg(n,e,r)}}function Gx(t,e,n){var r=bn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ug(t))zg(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,bt(a,o)){var c=e.interleaved;c===null?(s.next=s,dd(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=xg(t,e,s,r),n!==null&&(s=Ue(),St(n,t,r,s),Vg(n,e,r))}}function Ug(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function zg(t,e){ti=ua=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xu(t,n)}}var da={readContext:dt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Kx={readContext:dt,useCallback:function(t,e){return At().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:Nf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lo(4194308,4,jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lo(4,2,t,e)},useMemo:function(t,e){var n=At();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=At();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qx.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var e=At();return t={current:t},e.memoizedState=t},useState:Sf,useDebugValue:xd,useDeferredValue:function(t){return At().memoizedState=t},useTransition:function(){var t=Sf(!1),e=t[0];return t=Hx.bind(null,t[1]),At().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ce,s=At();if(ie){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),Ne===null)throw Error(E(349));fr&30||Ng(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Nf(bg.bind(null,r,i,t),[t]),r.flags|=2048,ki(9,kg.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=At(),e=Ne.identifierPrefix;if(ie){var n=Gt,r=qt;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Si++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Qx={readContext:dt,useCallback:Dg,useContext:dt,useEffect:yd,useImperativeHandle:Og,useInsertionEffect:Ag,useLayoutEffect:Rg,useMemo:Mg,useReducer:Zl,useRef:Pg,useState:function(){return Zl(Ni)},useDebugValue:xd,useDeferredValue:function(t){var e=ht();return Lg(e,ye.memoizedState,t)},useTransition:function(){var t=Zl(Ni)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Eg,useSyncExternalStore:Sg,useId:Fg,unstable_isNewReconciler:!1},Yx={readContext:dt,useCallback:Dg,useContext:dt,useEffect:yd,useImperativeHandle:Og,useInsertionEffect:Ag,useLayoutEffect:Rg,useMemo:Mg,useReducer:ec,useRef:Pg,useState:function(){return ec(Ni)},useDebugValue:xd,useDeferredValue:function(t){var e=ht();return ye===null?e.memoizedState=t:Lg(e,ye.memoizedState,t)},useTransition:function(){var t=ec(Ni)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Eg,useSyncExternalStore:Sg,useId:Fg,unstable_isNewReconciler:!1};function _t(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ya={isMounted:function(t){return(t=t._reactInternals)?Sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ue(),s=bn(t),i=Jt(r,s);i.payload=e,n!=null&&(i.callback=n),e=Nn(t,i,s),e!==null&&(St(e,t,s,r),Do(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ue(),s=bn(t),i=Jt(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Nn(t,i,s),e!==null&&(St(e,t,s,r),Do(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ue(),r=bn(t),s=Jt(n,r);s.tag=2,e!=null&&(s.callback=e),e=Nn(t,s,r),e!==null&&(St(e,t,r,n),Do(e,t,r))}};function kf(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!_i(n,r)||!_i(s,i):!0}function Bg(t,e,n){var r=!1,s=Dn,i=e.contextType;return typeof i=="object"&&i!==null?i=dt(i):(s=Ke(e)?dr:Me.current,r=e.contextTypes,i=(r=r!=null)?ns(t,s):Dn),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ya,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function bf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ya.enqueueReplaceState(e,e.state,null)}function Xc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},hd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=dt(i):(i=Ke(e)?dr:Me.current,s.context=ns(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Yc(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ya.enqueueReplaceState(s,s.state,null),la(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function os(t,e){try{var n="",r=e;do n+=S0(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Xx=typeof WeakMap=="function"?WeakMap:Map;function Wg(t,e,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fa||(fa=!0,lu=r),Jc(t,e)},n}function $g(t,e,n){n=Jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Jc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Jc(t,e),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function If(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Xx;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=dw.bind(null,t,e,n),e.then(t,t))}function Tf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pf(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jt(-1,1),e.tag=2,Nn(n,e,1))),n.lanes|=1),t)}var Jx=ln.ReactCurrentOwner,He=!1;function Le(t,e,n,r){e.child=t===null?yg(e,null,n,r):ss(e,t.child,n,r)}function Af(t,e,n,r,s){n=n.render;var i=e.ref;return Kr(e,s),r=vd(t,e,n,r,i,s),n=_d(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rn(t,e,s)):(ie&&n&&id(e),e.flags|=1,Le(t,e,r,s),e.child)}function Rf(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Id(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Hg(t,e,i,r,s)):(t=Vo(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:_i,n(o,r)&&t.ref===e.ref)return rn(t,e,s)}return e.flags|=1,t=In(i,r),t.ref=e.ref,t.return=e,e.child=t}function Hg(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(_i(i,r)&&t.ref===e.ref)if(He=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(He=!0);else return e.lanes=t.lanes,rn(t,e,s)}return Zc(t,e,n,r,s)}function qg(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Br,Xe),Xe|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(Br,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(Br,Xe),Xe|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,te(Br,Xe),Xe|=r;return Le(t,e,s,n),e.child}function Gg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zc(t,e,n,r,s){var i=Ke(n)?dr:Me.current;return i=ns(e,i),Kr(e,s),n=vd(t,e,n,r,i,s),r=_d(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rn(t,e,s)):(ie&&r&&id(e),e.flags|=1,Le(t,e,n,s),e.child)}function jf(t,e,n,r,s){if(Ke(n)){var i=!0;ra(e)}else i=!1;if(Kr(e,s),e.stateNode===null)Fo(t,e),Bg(e,n,r),Xc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Ke(n)?dr:Me.current,u=ns(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==u)&&bf(e,o,r,u),hn=!1;var h=e.memoizedState;o.state=h,la(e,r,o,s),c=e.memoizedState,a!==r||h!==c||Ge.current||hn?(typeof d=="function"&&(Yc(e,n,d,r),c=e.memoizedState),(a=hn||kf(e,n,a,r,h,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,wg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:_t(e.type,a),o.props=u,f=e.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=dt(c):(c=Ke(n)?dr:Me.current,c=ns(e,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==c)&&bf(e,o,r,c),hn=!1,h=e.memoizedState,o.state=h,la(e,r,o,s);var _=e.memoizedState;a!==f||h!==_||Ge.current||hn?(typeof v=="function"&&(Yc(e,n,v,r),_=e.memoizedState),(u=hn||kf(e,n,u,r,h,_,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return eu(t,e,n,r,i,s)}function eu(t,e,n,r,s,i){Gg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&_f(e,n,!1),rn(t,e,i);r=e.stateNode,Jx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ss(e,t.child,null,i),e.child=ss(e,null,a,i)):Le(t,e,a,i),e.memoizedState=r.state,s&&_f(e,n,!0),e.child}function Kg(t){var e=t.stateNode;e.pendingContext?vf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vf(t,e.context,!1),fd(t,e.containerInfo)}function Of(t,e,n,r,s){return rs(),ad(s),e.flags|=256,Le(t,e,n,r),e.child}var tu={dehydrated:null,treeContext:null,retryLane:0};function nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qg(t,e,n){var r=e.pendingProps,s=le.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),te(le,s&1),t===null)return Kc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Za(o,r,0,null),t=lr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=nu(n),e.memoizedState=tu,t):wd(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Zx(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=In(s,c),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=In(a,i):(i=lr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?nu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=tu,r}return i=t.child,t=i.sibling,r=In(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wd(t,e){return e=Za({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Co(t,e,n,r){return r!==null&&ad(r),ss(e,t.child,null,n),t=wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zx(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=tc(Error(E(422))),Co(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Za({mode:"visible",children:r.children},s,0,null),i=lr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ss(e,t.child,null,o),e.child.memoizedState=nu(o),e.memoizedState=tu,i);if(!(e.mode&1))return Co(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(E(419)),r=tc(i,r,void 0),Co(t,e,o,r)}if(a=(o&t.childLanes)!==0,He||a){if(r=Ne,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,nn(t,s),St(r,t,s,-1))}return bd(),r=tc(Error(E(421))),Co(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=hw.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Je=Sn(s.nextSibling),Ze=e,ie=!0,xt=null,t!==null&&(it[ot++]=qt,it[ot++]=Gt,it[ot++]=hr,qt=t.id,Gt=t.overflow,hr=e),e=wd(e,r.children),e.flags|=4096,e)}function Df(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qc(t.return,e,n)}function nc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Yg(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Le(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Df(t,n,e);else if(t.tag===19)Df(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(te(le,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ca(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),nc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ca(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}nc(e,!0,n,null,i);break;case"together":nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ew(t,e,n){switch(e.tag){case 3:Kg(e),rs();break;case 5:Cg(e);break;case 1:Ke(e.type)&&ra(e);break;case 4:fd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;te(oa,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(te(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?Qg(t,e,n):(te(le,le.current&1),t=rn(t,e,n),t!==null?t.sibling:null);te(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Yg(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),te(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,qg(t,e,n)}return rn(t,e,n)}var Xg,ru,Jg,Zg;Xg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ru=function(){};Jg=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,sr(Ot.current);var i=null;switch(n){case"input":s=Nc(t,s),r=Nc(t,r),i=[];break;case"select":s=ue({},s,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":s=Ic(t,s),r=Ic(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ta)}Pc(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(di.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(di.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ne("scroll",t),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};Zg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ms(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tw(t,e,n){var r=e.pendingProps;switch(od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(e),null;case 1:return Ke(e.type)&&na(),Oe(e),null;case 3:return r=e.stateNode,is(),re(Ge),re(Me),md(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xt!==null&&(du(xt),xt=null))),ru(t,e),Oe(e),null;case 5:pd(e);var s=sr(Ei.current);if(n=e.type,t!==null&&e.stateNode!=null)Jg(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Oe(e),null}if(t=sr(Ot.current),xo(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Rt]=e,r[wi]=i,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(s=0;s<Gs.length;s++)ne(Gs[s],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Wh(r,i),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ne("invalid",r);break;case"textarea":Hh(r,i),ne("invalid",r)}Pc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&yo(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&yo(r.textContent,a,t),s=["children",""+a]):di.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":uo(r),$h(r,i,!0);break;case"textarea":uo(r),qh(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ta)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rt]=e,t[wi]=r,Xg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ac(n,r),n){case"dialog":ne("cancel",t),ne("close",t),s=r;break;case"iframe":case"object":case"embed":ne("load",t),s=r;break;case"video":case"audio":for(s=0;s<Gs.length;s++)ne(Gs[s],t);s=r;break;case"source":ne("error",t),s=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),s=r;break;case"details":ne("toggle",t),s=r;break;case"input":Wh(t,r),s=Nc(t,r),ne("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ue({},r,{value:void 0}),ne("invalid",t);break;case"textarea":Hh(t,r),s=Ic(t,r),ne("invalid",t);break;default:s=r}Pc(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?Pm(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Im(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&hi(t,c):typeof c=="number"&&hi(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(di.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ne("scroll",t):c!=null&&Hu(t,i,c,o))}switch(n){case"input":uo(t),$h(t,r,!1);break;case"textarea":uo(t),qh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+On(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?$r(t,!!r.multiple,i,!1):r.defaultValue!=null&&$r(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Oe(e),null;case 6:if(t&&e.stateNode!=null)Zg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=sr(Ei.current),sr(Ot.current),xo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rt]=e,(i=r.nodeValue!==n)&&(t=Ze,t!==null))switch(t.tag){case 3:yo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yo(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=e,e.stateNode=r}return Oe(e),null;case 13:if(re(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&Je!==null&&e.mode&1&&!(e.flags&128))vg(),rs(),e.flags|=98560,i=!1;else if(i=xo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(E(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[Rt]=e}else rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Oe(e),i=!1}else xt!==null&&(du(xt),xt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?we===0&&(we=3):bd())),e.updateQueue!==null&&(e.flags|=4),Oe(e),null);case 4:return is(),ru(t,e),t===null&&yi(e.stateNode.containerInfo),Oe(e),null;case 10:return ud(e.type._context),Oe(e),null;case 17:return Ke(e.type)&&na(),Oe(e),null;case 19:if(re(le),i=e.memoizedState,i===null)return Oe(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ms(i,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ca(t),o!==null){for(e.flags|=128,Ms(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return te(le,le.current&1|2),e.child}t=t.sibling}i.tail!==null&&me()>as&&(e.flags|=128,r=!0,Ms(i,!1),e.lanes=4194304)}else{if(!r)if(t=ca(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ms(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ie)return Oe(e),null}else 2*me()-i.renderingStartTime>as&&n!==1073741824&&(e.flags|=128,r=!0,Ms(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=me(),e.sibling=null,n=le.current,te(le,r?n&1|2:n&1),e):(Oe(e),null);case 22:case 23:return kd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xe&1073741824&&(Oe(e),e.subtreeFlags&6&&(e.flags|=8192)):Oe(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function nw(t,e){switch(od(e),e.tag){case 1:return Ke(e.type)&&na(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return is(),re(Ge),re(Me),md(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pd(e),null;case 13:if(re(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(le),null;case 4:return is(),null;case 10:return ud(e.type._context),null;case 22:case 23:return kd(),null;case 24:return null;default:return null}}var Eo=!1,De=!1,rw=typeof WeakSet=="function"?WeakSet:Set,A=null;function Vr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function su(t,e,n){try{n()}catch(r){he(t,e,r)}}var Mf=!1;function sw(t,e){if(Vc=Jo,t=sg(),sd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,u=0,d=0,f=t,h=null;t:for(;;){for(var v;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===t)break t;if(h===n&&++u===s&&(a=o),h===i&&++d===r&&(c=o),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bc={focusedElem:t,selectionRange:n},Jo=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,C=_.memoizedState,p=e.stateNode,m=p.getSnapshotBeforeUpdate(e.elementType===e.type?x:_t(e.type,x),C);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){he(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return _=Mf,Mf=!1,_}function ni(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&su(e,n,i)}s=s.next}while(s!==r)}}function Xa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function iu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ev(t){var e=t.alternate;e!==null&&(t.alternate=null,ev(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rt],delete e[wi],delete e[Hc],delete e[zx],delete e[Vx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tv(t){return t.tag===5||t.tag===3||t.tag===4}function Lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ou(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ta));else if(r!==4&&(t=t.child,t!==null))for(ou(t,e,n),t=t.sibling;t!==null;)ou(t,e,n),t=t.sibling}function au(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(au(t,e,n),t=t.sibling;t!==null;)au(t,e,n),t=t.sibling}var Ie=null,yt=!1;function cn(t,e,n){for(n=n.child;n!==null;)nv(t,e,n),n=n.sibling}function nv(t,e,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Wa,n)}catch{}switch(n.tag){case 5:De||Vr(n,e);case 6:var r=Ie,s=yt;Ie=null,cn(t,e,n),Ie=r,yt=s,Ie!==null&&(yt?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(yt?(t=Ie,n=n.stateNode,t.nodeType===8?Ql(t.parentNode,n):t.nodeType===1&&Ql(t,n),gi(t)):Ql(Ie,n.stateNode));break;case 4:r=Ie,s=yt,Ie=n.stateNode.containerInfo,yt=!0,cn(t,e,n),Ie=r,yt=s;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&su(n,e,o),s=s.next}while(s!==r)}cn(t,e,n);break;case 1:if(!De&&(Vr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,e,a)}cn(t,e,n);break;case 21:cn(t,e,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,cn(t,e,n),De=r):cn(t,e,n);break;default:cn(t,e,n)}}function Ff(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rw),e.forEach(function(r){var s=fw.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,yt=!1;break e;case 3:Ie=a.stateNode.containerInfo,yt=!0;break e;case 4:Ie=a.stateNode.containerInfo,yt=!0;break e}a=a.return}if(Ie===null)throw Error(E(160));nv(i,o,s),Ie=null,yt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){he(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rv(e,t),e=e.sibling}function rv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vt(e,t),Pt(t),r&4){try{ni(3,t,t.return),Xa(3,t)}catch(x){he(t,t.return,x)}try{ni(5,t,t.return)}catch(x){he(t,t.return,x)}}break;case 1:vt(e,t),Pt(t),r&512&&n!==null&&Vr(n,n.return);break;case 5:if(vt(e,t),Pt(t),r&512&&n!==null&&Vr(n,n.return),t.flags&32){var s=t.stateNode;try{hi(s,"")}catch(x){he(t,t.return,x)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Nm(s,i),Ac(a,o);var u=Ac(a,i);for(o=0;o<c.length;o+=2){var d=c[o],f=c[o+1];d==="style"?Pm(s,f):d==="dangerouslySetInnerHTML"?Im(s,f):d==="children"?hi(s,f):Hu(s,d,f,u)}switch(a){case"input":kc(s,i);break;case"textarea":km(s,i);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?$r(s,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?$r(s,!!i.multiple,i.defaultValue,!0):$r(s,!!i.multiple,i.multiple?[]:"",!1))}s[wi]=i}catch(x){he(t,t.return,x)}}break;case 6:if(vt(e,t),Pt(t),r&4){if(t.stateNode===null)throw Error(E(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(x){he(t,t.return,x)}}break;case 3:if(vt(e,t),Pt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gi(e.containerInfo)}catch(x){he(t,t.return,x)}break;case 4:vt(e,t),Pt(t);break;case 13:vt(e,t),Pt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Sd=me())),r&4&&Ff(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(De=(u=De)||d,vt(e,t),De=u):vt(e,t),Pt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(f=A=d;A!==null;){switch(h=A,v=h.child,h.tag){case 0:case 11:case 14:case 15:ni(4,h,h.return);break;case 1:Vr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){he(r,n,x)}}break;case 5:Vr(h,h.return);break;case 22:if(h.memoizedState!==null){zf(f);continue}}v!==null?(v.return=h,A=v):zf(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{s=f.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Tm("display",o))}catch(x){he(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){he(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vt(e,t),Pt(t),r&4&&Ff(t);break;case 21:break;default:vt(e,t),Pt(t)}}function Pt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tv(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(hi(s,""),r.flags&=-33);var i=Lf(t);au(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lf(t);ou(t,a,o);break;default:throw Error(E(161))}}catch(c){he(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iw(t,e,n){A=t,sv(t)}function sv(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var s=A,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Eo;if(!o){var a=s.alternate,c=a!==null&&a.memoizedState!==null||De;a=Eo;var u=De;if(Eo=o,(De=c)&&!u)for(A=s;A!==null;)o=A,c=o.child,o.tag===22&&o.memoizedState!==null?Vf(s):c!==null?(c.return=o,A=c):Vf(s);for(;i!==null;)A=i,sv(i),i=i.sibling;A=s,Eo=a,De=u}Uf(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,A=i):Uf(t)}}function Uf(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:De||Xa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!De)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:_t(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ef(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ef(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&gi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}De||e.flags&512&&iu(e)}catch(h){he(e,e.return,h)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function zf(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Vf(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xa(4,e)}catch(c){he(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){he(e,s,c)}}var i=e.return;try{iu(e)}catch(c){he(e,i,c)}break;case 5:var o=e.return;try{iu(e)}catch(c){he(e,o,c)}}}catch(c){he(e,e.return,c)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var ow=Math.ceil,ha=ln.ReactCurrentDispatcher,Cd=ln.ReactCurrentOwner,ut=ln.ReactCurrentBatchConfig,W=0,Ne=null,_e=null,Pe=0,Xe=0,Br=Vn(0),we=0,bi=null,pr=0,Ja=0,Ed=0,ri=null,$e=null,Sd=0,as=1/0,Vt=null,fa=!1,lu=null,kn=null,So=!1,yn=null,pa=0,si=0,cu=null,Uo=-1,zo=0;function Ue(){return W&6?me():Uo!==-1?Uo:Uo=me()}function bn(t){return t.mode&1?W&2&&Pe!==0?Pe&-Pe:Wx.transition!==null?(zo===0&&(zo=Bm()),zo):(t=G,t!==0||(t=window.event,t=t===void 0?16:Qm(t.type)),t):1}function St(t,e,n,r){if(50<si)throw si=0,cu=null,Error(E(185));Bi(t,n,r),(!(W&2)||t!==Ne)&&(t===Ne&&(!(W&2)&&(Ja|=n),we===4&&pn(t,Pe)),Qe(t,r),n===1&&W===0&&!(e.mode&1)&&(as=me()+500,Ka&&Bn()))}function Qe(t,e){var n=t.callbackNode;W0(t,e);var r=Xo(t,t===Ne?Pe:0);if(r===0)n!==null&&Qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qh(n),e===1)t.tag===0?Bx(Bf.bind(null,t)):pg(Bf.bind(null,t)),Fx(function(){!(W&6)&&Bn()}),n=null;else{switch(Wm(r)){case 1:n=Yu;break;case 4:n=zm;break;case 16:n=Yo;break;case 536870912:n=Vm;break;default:n=Yo}n=hv(n,iv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function iv(t,e){if(Uo=-1,zo=0,W&6)throw Error(E(327));var n=t.callbackNode;if(Qr()&&t.callbackNode!==n)return null;var r=Xo(t,t===Ne?Pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ma(t,r);else{e=r;var s=W;W|=2;var i=av();(Ne!==t||Pe!==e)&&(Vt=null,as=me()+500,ar(t,e));do try{cw();break}catch(a){ov(t,a)}while(!0);cd(),ha.current=i,W=s,_e!==null?e=0:(Ne=null,Pe=0,e=we)}if(e!==0){if(e===2&&(s=Mc(t),s!==0&&(r=s,e=uu(t,s))),e===1)throw n=bi,ar(t,0),pn(t,r),Qe(t,me()),n;if(e===6)pn(t,r);else{if(s=t.current.alternate,!(r&30)&&!aw(s)&&(e=ma(t,r),e===2&&(i=Mc(t),i!==0&&(r=i,e=uu(t,i))),e===1))throw n=bi,ar(t,0),pn(t,r),Qe(t,me()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Jn(t,$e,Vt);break;case 3:if(pn(t,r),(r&130023424)===r&&(e=Sd+500-me(),10<e)){if(Xo(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ue(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=$c(Jn.bind(null,t,$e,Vt),e);break}Jn(t,$e,Vt);break;case 4:if(pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Et(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ow(r/1960))-r,10<r){t.timeoutHandle=$c(Jn.bind(null,t,$e,Vt),r);break}Jn(t,$e,Vt);break;case 5:Jn(t,$e,Vt);break;default:throw Error(E(329))}}}return Qe(t,me()),t.callbackNode===n?iv.bind(null,t):null}function uu(t,e){var n=ri;return t.current.memoizedState.isDehydrated&&(ar(t,e).flags|=256),t=ma(t,e),t!==2&&(e=$e,$e=n,e!==null&&du(e)),t}function du(t){$e===null?$e=t:$e.push.apply($e,t)}function aw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!bt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pn(t,e){for(e&=~Ed,e&=~Ja,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Et(e),r=1<<n;t[n]=-1,e&=~r}}function Bf(t){if(W&6)throw Error(E(327));Qr();var e=Xo(t,0);if(!(e&1))return Qe(t,me()),null;var n=ma(t,e);if(t.tag!==0&&n===2){var r=Mc(t);r!==0&&(e=r,n=uu(t,r))}if(n===1)throw n=bi,ar(t,0),pn(t,e),Qe(t,me()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jn(t,$e,Vt),Qe(t,me()),null}function Nd(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(as=me()+500,Ka&&Bn())}}function mr(t){yn!==null&&yn.tag===0&&!(W&6)&&Qr();var e=W;W|=1;var n=ut.transition,r=G;try{if(ut.transition=null,G=1,t)return t()}finally{G=r,ut.transition=n,W=e,!(W&6)&&Bn()}}function kd(){Xe=Br.current,re(Br)}function ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Lx(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(od(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:is(),re(Ge),re(Me),md();break;case 5:pd(r);break;case 4:is();break;case 13:re(le);break;case 19:re(le);break;case 10:ud(r.type._context);break;case 22:case 23:kd()}n=n.return}if(Ne=t,_e=t=In(t.current,null),Pe=Xe=e,we=0,bi=null,Ed=Ja=pr=0,$e=ri=null,rr!==null){for(e=0;e<rr.length;e++)if(n=rr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}rr=null}return t}function ov(t,e){do{var n=_e;try{if(cd(),Mo.current=da,ua){for(var r=ce.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ua=!1}if(fr=0,Ee=ye=ce=null,ti=!1,Si=0,Cd.current=null,n===null||n.return===null){we=1,bi=e,_e=null;break}e:{var i=t,o=n.return,a=n,c=e;if(e=Pe,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Tf(o);if(v!==null){v.flags&=-257,Pf(v,o,a,i,e),v.mode&1&&If(i,u,e),e=v,c=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(c),e.updateQueue=x}else _.add(c);break e}else{if(!(e&1)){If(i,u,e),bd();break e}c=Error(E(426))}}else if(ie&&a.mode&1){var C=Tf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Pf(C,o,a,i,e),ad(os(c,a));break e}}i=c=os(c,a),we!==4&&(we=2),ri===null?ri=[i]:ri.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var p=Wg(i,c,e);Cf(i,p);break e;case 1:a=c;var m=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(kn===null||!kn.has(g)))){i.flags|=65536,e&=-e,i.lanes|=e;var y=$g(i,a,e);Cf(i,y);break e}}i=i.return}while(i!==null)}cv(n)}catch(k){e=k,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function av(){var t=ha.current;return ha.current=da,t===null?da:t}function bd(){(we===0||we===3||we===2)&&(we=4),Ne===null||!(pr&268435455)&&!(Ja&268435455)||pn(Ne,Pe)}function ma(t,e){var n=W;W|=2;var r=av();(Ne!==t||Pe!==e)&&(Vt=null,ar(t,e));do try{lw();break}catch(s){ov(t,s)}while(!0);if(cd(),W=n,ha.current=r,_e!==null)throw Error(E(261));return Ne=null,Pe=0,we}function lw(){for(;_e!==null;)lv(_e)}function cw(){for(;_e!==null&&!O0();)lv(_e)}function lv(t){var e=dv(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?cv(t):_e=e,Cd.current=null}function cv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nw(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,_e=null;return}}else if(n=tw(n,e,Xe),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);we===0&&(we=5)}function Jn(t,e,n){var r=G,s=ut.transition;try{ut.transition=null,G=1,uw(t,e,n,r)}finally{ut.transition=s,G=r}return null}function uw(t,e,n,r){do Qr();while(yn!==null);if(W&6)throw Error(E(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if($0(t,i),t===Ne&&(_e=Ne=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,hv(Yo,function(){return Qr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ut.transition,ut.transition=null;var o=G;G=1;var a=W;W|=4,Cd.current=null,sw(t,n),rv(n,t),Px(Bc),Jo=!!Vc,Bc=Vc=null,t.current=n,iw(n),D0(),W=a,G=o,ut.transition=i}else t.current=n;if(So&&(So=!1,yn=t,pa=s),i=t.pendingLanes,i===0&&(kn=null),F0(n.stateNode),Qe(t,me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(fa)throw fa=!1,t=lu,lu=null,t;return pa&1&&t.tag!==0&&Qr(),i=t.pendingLanes,i&1?t===cu?si++:(si=0,cu=t):si=0,Bn(),null}function Qr(){if(yn!==null){var t=Wm(pa),e=ut.transition,n=G;try{if(ut.transition=null,G=16>t?16:t,yn===null)var r=!1;else{if(t=yn,yn=null,pa=0,W&6)throw Error(E(331));var s=W;for(W|=4,A=t.current;A!==null;){var i=A,o=i.child;if(A.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:ni(8,d,i)}var f=d.child;if(f!==null)f.return=d,A=f;else for(;A!==null;){d=A;var h=d.sibling,v=d.return;if(ev(d),d===u){A=null;break}if(h!==null){h.return=v,A=h;break}A=v}}}var _=i.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}A=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,A=o;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ni(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,A=p;break e}A=i.return}}var m=t.current;for(A=m;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=m;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xa(9,a)}}catch(k){he(a,a.return,k)}if(a===o){A=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,A=y;break e}A=a.return}}if(W=s,Bn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Wa,t)}catch{}r=!0}return r}finally{G=n,ut.transition=e}}return!1}function Wf(t,e,n){e=os(n,e),e=Wg(t,e,1),t=Nn(t,e,1),e=Ue(),t!==null&&(Bi(t,1,e),Qe(t,e))}function he(t,e,n){if(t.tag===3)Wf(t,t,n);else for(;e!==null;){if(e.tag===3){Wf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){t=os(n,t),t=$g(e,t,1),e=Nn(e,t,1),t=Ue(),e!==null&&(Bi(e,1,t),Qe(e,t));break}}e=e.return}}function dw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ue(),t.pingedLanes|=t.suspendedLanes&n,Ne===t&&(Pe&n)===n&&(we===4||we===3&&(Pe&130023424)===Pe&&500>me()-Sd?ar(t,0):Ed|=n),Qe(t,e)}function uv(t,e){e===0&&(t.mode&1?(e=po,po<<=1,!(po&130023424)&&(po=4194304)):e=1);var n=Ue();t=nn(t,e),t!==null&&(Bi(t,e,n),Qe(t,n))}function hw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uv(t,n)}function fw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),uv(t,n)}var dv;dv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)He=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return He=!1,ew(t,e,n);He=!!(t.flags&131072)}else He=!1,ie&&e.flags&1048576&&mg(e,ia,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fo(t,e),t=e.pendingProps;var s=ns(e,Me.current);Kr(e,n),s=vd(null,e,r,t,s,n);var i=_d();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)?(i=!0,ra(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,hd(e),s.updater=Ya,e.stateNode=s,s._reactInternals=e,Xc(e,r,t,n),e=eu(null,e,r,!0,i,n)):(e.tag=0,ie&&i&&id(e),Le(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fo(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=mw(r),t=_t(r,t),s){case 0:e=Zc(null,e,r,t,n);break e;case 1:e=jf(null,e,r,t,n);break e;case 11:e=Af(null,e,r,t,n);break e;case 14:e=Rf(null,e,r,_t(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:_t(r,s),Zc(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:_t(r,s),jf(t,e,r,s,n);case 3:e:{if(Kg(e),t===null)throw Error(E(387));r=e.pendingProps,i=e.memoizedState,s=i.element,wg(t,e),la(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=os(Error(E(423)),e),e=Of(t,e,r,n,s);break e}else if(r!==s){s=os(Error(E(424)),e),e=Of(t,e,r,n,s);break e}else for(Je=Sn(e.stateNode.containerInfo.firstChild),Ze=e,ie=!0,xt=null,n=yg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rs(),r===s){e=rn(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return Cg(e),t===null&&Kc(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Wc(r,s)?o=null:i!==null&&Wc(r,i)&&(e.flags|=32),Gg(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&Kc(e),null;case 13:return Qg(t,e,n);case 4:return fd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ss(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:_t(r,s),Af(t,e,r,s,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,te(oa,r._currentValue),r._currentValue=o,i!==null)if(bt(i.value,o)){if(i.children===s.children&&!Ge.current){e=rn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Jt(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Qc(i.return,n,e),a.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qc(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Le(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Kr(e,n),s=dt(s),r=r(s),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,s=_t(r,e.pendingProps),s=_t(r.type,s),Rf(t,e,r,s,n);case 15:return Hg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:_t(r,s),Fo(t,e),e.tag=1,Ke(r)?(t=!0,ra(e)):t=!1,Kr(e,n),Bg(e,r,s),Xc(e,r,s,n),eu(null,e,r,!0,t,n);case 19:return Yg(t,e,n);case 22:return qg(t,e,n)}throw Error(E(156,e.tag))};function hv(t,e){return Um(t,e)}function pw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(t,e,n,r){return new pw(t,e,n,r)}function Id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mw(t){if(typeof t=="function")return Id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gu)return 11;if(t===Ku)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=at(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vo(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Id(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rr:return lr(n.children,s,i,e);case qu:o=8,s|=8;break;case wc:return t=at(12,n,e,s|2),t.elementType=wc,t.lanes=i,t;case Cc:return t=at(13,n,e,s),t.elementType=Cc,t.lanes=i,t;case Ec:return t=at(19,n,e,s),t.elementType=Ec,t.lanes=i,t;case Cm:return Za(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xm:o=10;break e;case wm:o=9;break e;case Gu:o=11;break e;case Ku:o=14;break e;case dn:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=at(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function lr(t,e,n,r){return t=at(7,t,r,e),t.lanes=n,t}function Za(t,e,n,r){return t=at(22,t,r,e),t.elementType=Cm,t.lanes=n,t.stateNode={isHidden:!1},t}function rc(t,e,n){return t=at(6,t,null,e),t.lanes=n,t}function sc(t,e,n){return e=at(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gw(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fl(0),this.expirationTimes=Fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Td(t,e,n,r,s,i,o,a,c){return t=new gw(t,e,n,a,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=at(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hd(i),t}function vw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ar,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fv(t){if(!t)return Dn;t=t._reactInternals;e:{if(Sr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Ke(n))return fg(t,n,e)}return e}function pv(t,e,n,r,s,i,o,a,c){return t=Td(n,r,!0,t,s,i,o,a,c),t.context=fv(null),n=t.current,r=Ue(),s=bn(n),i=Jt(r,s),i.callback=e??null,Nn(n,i,s),t.current.lanes=s,Bi(t,s,r),Qe(t,r),t}function el(t,e,n,r){var s=e.current,i=Ue(),o=bn(s);return n=fv(n),e.context===null?e.context=n:e.pendingContext=n,e=Jt(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nn(s,e,o),t!==null&&(St(t,s,o,i),Do(t,s,o)),o}function ga(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $f(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pd(t,e){$f(t,e),(t=t.alternate)&&$f(t,e)}function _w(){return null}var mv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ad(t){this._internalRoot=t}tl.prototype.render=Ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));el(t,e,null,null)};tl.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mr(function(){el(null,t,null,null)}),e[tn]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var e=qm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fn.length&&e!==0&&e<fn[n].priority;n++);fn.splice(n,0,t),n===0&&Km(t)}};function Rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hf(){}function yw(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=ga(o);i.call(u)}}var o=pv(e,r,t,0,null,!1,!1,"",Hf);return t._reactRootContainer=o,t[tn]=o.current,yi(t.nodeType===8?t.parentNode:t),mr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=ga(c);a.call(u)}}var c=Td(t,0,!1,null,null,!1,!1,"",Hf);return t._reactRootContainer=c,t[tn]=c.current,yi(t.nodeType===8?t.parentNode:t),mr(function(){el(e,c,n,r)}),c}function rl(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var c=ga(o);a.call(c)}}el(e,o,t,s)}else o=yw(n,e,t,s,r);return ga(o)}$m=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qs(e.pendingLanes);n!==0&&(Xu(e,n|1),Qe(e,me()),!(W&6)&&(as=me()+500,Bn()))}break;case 13:mr(function(){var r=nn(t,1);if(r!==null){var s=Ue();St(r,t,1,s)}}),Pd(t,1)}};Ju=function(t){if(t.tag===13){var e=nn(t,134217728);if(e!==null){var n=Ue();St(e,t,134217728,n)}Pd(t,134217728)}};Hm=function(t){if(t.tag===13){var e=bn(t),n=nn(t,e);if(n!==null){var r=Ue();St(n,t,e,r)}Pd(t,e)}};qm=function(){return G};Gm=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};jc=function(t,e,n){switch(e){case"input":if(kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ga(r);if(!s)throw Error(E(90));Sm(r),kc(r,s)}}}break;case"textarea":km(t,n);break;case"select":e=n.value,e!=null&&$r(t,!!n.multiple,e,!1)}};jm=Nd;Om=mr;var xw={usingClientEntryPoint:!1,Events:[$i,Mr,Ga,Am,Rm,Nd]},Ls={findFiberByHostInstance:nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ww={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||_w,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{Wa=No.inject(ww),jt=No}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xw;nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(e))throw Error(E(200));return vw(t,e,null,n)};nt.createRoot=function(t,e){if(!Rd(t))throw Error(E(299));var n=!1,r="",s=mv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Td(t,1,!1,null,null,n,!1,r,s),t[tn]=e.current,yi(t.nodeType===8?t.parentNode:t),new Ad(e)};nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Lm(e),t=t===null?null:t.stateNode,t};nt.flushSync=function(t){return mr(t)};nt.hydrate=function(t,e,n){if(!nl(e))throw Error(E(200));return rl(null,t,e,!0,n)};nt.hydrateRoot=function(t,e,n){if(!Rd(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=mv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pv(e,null,t,1,n??null,s,!1,i,o),t[tn]=e.current,yi(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new tl(e)};nt.render=function(t,e,n){if(!nl(e))throw Error(E(200));return rl(null,t,e,!1,n)};nt.unmountComponentAtNode=function(t){if(!nl(t))throw Error(E(40));return t._reactRootContainer?(mr(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[tn]=null})}),!0):!1};nt.unstable_batchedUpdates=Nd;nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return rl(t,e,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gv)}catch(t){console.error(t)}}gv(),gm.exports=nt;var Cw=gm.exports,qf=Cw;yc.createRoot=qf.createRoot,yc.hydrateRoot=qf.hydrateRoot;var Gf={};/**
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
 */const S=function(t,e){if(!t)throw vs(e)},vs=function(t){return new Error("Firebase Database ("+vv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const _v=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ew=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|u>>6,v=u&63;c||(v=64,o||(h=64)),r.push(n[d],n[f],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_v(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ew(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new Sw;const h=i<<2|a>>4;if(r.push(h),u!==64){const v=a<<4&240|u>>2;if(r.push(v),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yv=function(t){const e=_v(t);return jd.encodeByteArray(e,!0)},va=function(t){return yv(t).replace(/\./g,"")},_a=function(t){try{return jd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Nw(t){return xv(void 0,t)}function xv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!kw(n)||(t[n]=xv(t[n],e[n]));return t}function kw(t){return t!=="__proto__"}/**
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
 */function bw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Iw=()=>bw().__FIREBASE_DEFAULTS__,Tw=()=>{if(typeof process>"u"||typeof Gf>"u")return;const t=Gf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Pw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_a(t[1]);return e&&JSON.parse(e)},Od=()=>{try{return Iw()||Tw()||Pw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wv=t=>{var e,n;return(n=(e=Od())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Aw=t=>{const e=wv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Cv=()=>{var t;return(t=Od())===null||t===void 0?void 0:t.config},Ev=t=>{var e;return(e=Od())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Rw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[va(JSON.stringify(n)),va(JSON.stringify(o)),""].join(".")}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function jw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ow(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dw(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mw(){return vv.NODE_ADMIN===!0}function Lw(){try{return typeof indexedDB=="object"}catch{return!1}}function Fw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Uw="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Uw,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qi.prototype.create)}}class qi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zw(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Wn(s,a,r)}}function zw(t,e){return t.replace(Vw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Vw=/\{\$([^}]+)}/g;/**
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
 */function Ii(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
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
 */const Nv=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Ii(_a(i[0])||""),n=Ii(_a(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Bw=function(t){const e=Nv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ww=function(t){const e=Nv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function It(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function hu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ya(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function xa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Kf(i)&&Kf(o)){if(!xa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Kf(t){return t!==null&&typeof t=="object"}/**
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
 */function ys(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class $w{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),d=1518500249):(u=i^o^a,d=1859775393):f<60?(u=i&o|a&(i|o),d=2400959708):(u=i^o^a,d=3395469782);const h=(s<<5|s>>>27)+u+c+d+r[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Hw(t,e){const n=new qw(t,e);return n.subscribe.bind(n)}class qw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ic),s.error===void 0&&(s.error=ic),s.complete===void 0&&(s.complete=ic);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ic(){}function sl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Kw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},il=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class Qw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _s;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xw(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yw(t){return t===Zn?void 0:t}function Xw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Jw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const Zw={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},e1=X.INFO,t1={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},n1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=t1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Md{constructor(e){this.name=e,this._logLevel=e1,this._logHandler=n1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const r1=(t,e)=>e.some(n=>t instanceof n);let Qf,Yf;function s1(){return Qf||(Qf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function i1(){return Yf||(Yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kv=new WeakMap,fu=new WeakMap,bv=new WeakMap,oc=new WeakMap,Ld=new WeakMap;function o1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kv.set(n,t)}).catch(()=>{}),Ld.set(e,t),e}function a1(t){if(fu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fu.set(t,e)}let pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function l1(t){pu=t(pu)}function c1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ac(this),e,...n);return bv.set(r,e.sort?e.sort():[e]),Tn(r)}:i1().includes(t)?function(...e){return t.apply(ac(this),e),Tn(kv.get(this))}:function(...e){return Tn(t.apply(ac(this),e))}}function u1(t){return typeof t=="function"?c1(t):(t instanceof IDBTransaction&&a1(t),r1(t,s1())?new Proxy(t,pu):t)}function Tn(t){if(t instanceof IDBRequest)return o1(t);if(oc.has(t))return oc.get(t);const e=u1(t);return e!==t&&(oc.set(t,e),Ld.set(e,t)),e}const ac=t=>Ld.get(t);function d1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Tn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Tn(o.result),c.oldVersion,c.newVersion,Tn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const h1=["get","getKey","getAll","getAllKeys","count"],f1=["put","add","delete","clear"],lc=new Map;function Xf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lc.get(e))return lc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=f1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||h1.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return lc.set(e,i),i}l1(t=>({...t,get:(e,n,r)=>Xf(e,n)||t.get(e,n,r),has:(e,n)=>!!Xf(e,n)||t.has(e,n)}));/**
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
 */class p1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(m1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function m1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mu="@firebase/app",Jf="0.10.13";/**
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
 */const sn=new Md("@firebase/app"),g1="@firebase/app-compat",v1="@firebase/analytics-compat",_1="@firebase/analytics",y1="@firebase/app-check-compat",x1="@firebase/app-check",w1="@firebase/auth",C1="@firebase/auth-compat",E1="@firebase/database",S1="@firebase/data-connect",N1="@firebase/database-compat",k1="@firebase/functions",b1="@firebase/functions-compat",I1="@firebase/installations",T1="@firebase/installations-compat",P1="@firebase/messaging",A1="@firebase/messaging-compat",R1="@firebase/performance",j1="@firebase/performance-compat",O1="@firebase/remote-config",D1="@firebase/remote-config-compat",M1="@firebase/storage",L1="@firebase/storage-compat",F1="@firebase/firestore",U1="@firebase/vertexai-preview",z1="@firebase/firestore-compat",V1="firebase",B1="10.14.1";/**
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
 */const gu="[DEFAULT]",W1={[mu]:"fire-core",[g1]:"fire-core-compat",[_1]:"fire-analytics",[v1]:"fire-analytics-compat",[x1]:"fire-app-check",[y1]:"fire-app-check-compat",[w1]:"fire-auth",[C1]:"fire-auth-compat",[E1]:"fire-rtdb",[S1]:"fire-data-connect",[N1]:"fire-rtdb-compat",[k1]:"fire-fn",[b1]:"fire-fn-compat",[I1]:"fire-iid",[T1]:"fire-iid-compat",[P1]:"fire-fcm",[A1]:"fire-fcm-compat",[R1]:"fire-perf",[j1]:"fire-perf-compat",[O1]:"fire-rc",[D1]:"fire-rc-compat",[M1]:"fire-gcs",[L1]:"fire-gcs-compat",[F1]:"fire-fst",[z1]:"fire-fst-compat",[U1]:"fire-vertex","fire-js":"fire-js",[V1]:"fire-js-all"};/**
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
 */const wa=new Map,$1=new Map,vu=new Map;function Zf(t,e){try{t.container.addComponent(e)}catch(n){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ls(t){const e=t.name;if(vu.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;vu.set(e,t);for(const n of wa.values())Zf(n,t);for(const n of $1.values())Zf(n,t);return!0}function Fd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function lt(t){return t.settings!==void 0}/**
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
 */const H1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new qi("app","Firebase",H1);/**
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
 */class q1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=B1;function Iv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Pn.create("bad-app-name",{appName:String(s)});if(n||(n=Cv()),!n)throw Pn.create("no-options");const i=wa.get(s);if(i){if(xa(n,i.options)&&xa(r,i.config))return i;throw Pn.create("duplicate-app",{appName:s})}const o=new Jw(s);for(const c of vu.values())o.addComponent(c);const a=new q1(n,r,o);return wa.set(s,a),a}function Tv(t=gu){const e=wa.get(t);if(!e&&t===gu&&Cv())return Iv();if(!e)throw Pn.create("no-app",{appName:t});return e}function An(t,e,n){var r;let s=(r=W1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(a.join(" "));return}ls(new vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const G1="firebase-heartbeat-database",K1=1,Ti="firebase-heartbeat-store";let cc=null;function Pv(){return cc||(cc=d1(G1,K1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),cc}async function Q1(t){try{const n=(await Pv()).transaction(Ti),r=await n.objectStore(Ti).get(Av(t));return await n.done,r}catch(e){if(e instanceof Wn)sn.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(n.message)}}}async function ep(t,e){try{const r=(await Pv()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(e,Av(t)),await r.done}catch(n){if(n instanceof Wn)sn.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(r.message)}}}function Av(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Y1=1024,X1=30*24*60*60*1e3;class J1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=X1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tp(),{heartbeatsToSend:r,unsentEntries:s}=Z1(this._heartbeatsCache.heartbeats),i=va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return sn.warn(n),""}}}function tp(){return new Date().toISOString().substring(0,10)}function Z1(t,e=Y1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),np(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),np(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lw()?Fw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Q1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function np(t){return va(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tC(t){ls(new vr("platform-logger",e=>new p1(e),"PRIVATE")),ls(new vr("heartbeat",e=>new J1(e),"PRIVATE")),An(mu,Jf,t),An(mu,Jf,"esm2017"),An("fire-js","")}tC("");var rp={};const sp="@firebase/database",ip="1.0.8";/**
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
 */let Rv="";function nC(t){Rv=t}/**
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
 */class rC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ii(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class sC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return It(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const jv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new rC(e)}}catch{}return new sC},ir=jv("localStorage"),iC=jv("sessionStorage");/**
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
 */const Yr=new Md("@firebase/database"),Ov=function(){let t=1;return function(){return t++}}(),Dv=function(t){const e=Kw(t),n=new $w;n.update(e);const r=n.digest();return jd.encodeByteArray(r)},Gi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Gi.apply(null,r):typeof r=="object"?e+=xe(r):e+=r,e+=" "}return e};let ii=null,op=!0;const oC=function(t,e){S(!0,"Can't turn on custom loggers persistently."),Yr.logLevel=X.VERBOSE,ii=Yr.log.bind(Yr)},Te=function(...t){if(op===!0&&(op=!1,ii===null&&iC.get("logging_enabled")===!0&&oC()),ii){const e=Gi.apply(null,t);ii(e)}},Ki=function(t){return function(...e){Te(t,...e)}},_u=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gi(...t);Yr.error(e)},on=function(...t){const e=`FIREBASE FATAL ERROR: ${Gi(...t)}`;throw Yr.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+Gi(...t);Yr.warn(e)},aC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ud=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},lC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_r="[MIN_NAME]",Mn="[MAX_NAME]",Nr=function(t,e){if(t===e)return 0;if(t===_r||e===Mn)return-1;if(e===_r||t===Mn)return 1;{const n=ap(t),r=ap(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},cC=function(t,e){return t===e?0:t<e?-1:1},Fs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},zd=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=xe(e[r]),n+=":",n+=zd(t[e[r]]);return n+="}",n},Mv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Lv=function(t){S(!Ud(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,c;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const d=u.join("");let f="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},uC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const fC=new RegExp("^-?(0*)\\d{1,10}$"),pC=-2147483648,mC=2147483647,ap=function(t){if(fC.test(t)){const e=Number(t);if(e>=pC&&e<=mC)return e}return null},ws=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},gC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class vC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _C{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class Bo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bo.OWNER="owner";/**
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
 */const Vd="5",Fv="v",Uv="s",zv="r",Vv="f",Bv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wv="ls",$v="p",yu="ac",Hv="websocket",qv="long_polling";/**
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
 */class Gv{constructor(e,n,r,s,i=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Kv(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===Hv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===qv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yC(t)&&(n.ns=t.namespace);const s=[];return Re(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class xC{constructor(){this.counters_={}}incrementCounter(e,n=1){It(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Nw(this.counters_)}}/**
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
 */const uc={},dc={};function Bd(t){const e=t.toString();return uc[e]||(uc[e]=new xC),uc[e]}function wC(t,e){const n=t.toString();return dc[n]||(dc[n]=e()),dc[n]}/**
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
 */class CC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ws(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const lp="start",EC="close",SC="pLPCommand",NC="pRTLPCB",Qv="id",Yv="pw",Xv="ser",kC="cb",bC="seg",IC="ts",TC="d",PC="dframe",Jv=1870,Zv=30,AC=Jv-Zv,RC=25e3,jC=3e4;class Wr{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ki(e),this.stats_=Bd(n),this.urlFn=c=>(this.appCheckToken&&(c[yu]=this.appCheckToken),Kv(n,qv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new CC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jC)),lC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wd((...i)=>{const[o,a,c,u,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===lp)this.id=a,this.password=c;else if(o===EC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[lp]="t",r[Xv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[kC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Fv]=Vd,this.transportSessionId&&(r[Uv]=this.transportSessionId),this.lastSessionId&&(r[Wv]=this.lastSessionId),this.applicationId&&(r[$v]=this.applicationId),this.appCheckToken&&(r[yu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Bv.test(location.hostname)&&(r[zv]=Vv);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wr.forceAllow_=!0}static forceDisallow(){Wr.forceDisallow_=!0}static isAvailable(){return Wr.forceAllow_?!0:!Wr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uC()&&!dC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=yv(n),s=Mv(r,AC);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[PC]="t",r[Qv]=e,r[Yv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wd{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ov(),window[SC+this.uniqueCallbackIdentifier]=e,window[NC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Te("frame writing exception"),a.stack&&Te(a.stack),Te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Qv]=this.myID,e[Yv]=this.myPW,e[Xv]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zv+r.length<=Jv;){const o=this.pendingSegs.shift();r=r+"&"+bC+s+"="+o.seg+"&"+IC+s+"="+o.ts+"&"+TC+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(RC)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const OC=16384,DC=45e3;let Ca=null;typeof MozWebSocket<"u"?Ca=MozWebSocket:typeof WebSocket<"u"&&(Ca=WebSocket);class wt{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ki(this.connId),this.stats_=Bd(n),this.connURL=wt.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Fv]=Vd,typeof location<"u"&&location.hostname&&Bv.test(location.hostname)&&(o[zv]=Vv),n&&(o[Uv]=n),r&&(o[Wv]=r),s&&(o[yu]=s),i&&(o[$v]=i),Kv(e,Hv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ir.set("previous_websocket_failure",!0);try{let r;Mw(),this.mySock=new Ca(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){wt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ca!==null&&!wt.forceDisallow_}static previouslyFailed(){return ir.isInMemoryStorage||ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ii(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Mv(n,OC);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(DC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}wt.responsesRequiredToBeHealthy=2;wt.healthyTimeout=3e4;/**
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
 */class Pi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Wr,wt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=wt&&wt.isAvailable();let r=n&&!wt.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[wt];else{const s=this.transports_=[];for(const i of Pi.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Pi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Pi.globalTransportInitialized_=!1;/**
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
 */const MC=6e4,LC=5e3,FC=10*1024,UC=100*1024,hc="t",cp="d",zC="s",up="r",VC="e",dp="o",hp="a",fp="n",pp="p",BC="h";class WC{constructor(e,n,r,s,i,o,a,c,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ki("c:"+this.id+":"),this.transportManager_=new Pi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=oi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>UC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>FC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hc in e){const n=e[hc];n===hp?this.upgradeIfSecondaryHealthy_():n===up?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fs("t",e),r=Fs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fs("t",e),r=Fs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fs(hc,e);if(cp in e){const r=e[cp];if(n===BC){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===fp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zC?this.onConnectionShutdown_(r):n===up?this.onReset_(r):n===VC?_u("Server Error: "+r):n===dp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_u("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vd!==r&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),oi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(MC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(LC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ea extends t_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Dd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ea}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const mp=32,gp=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new K("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ln(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function $d(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $C(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ai(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function n_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function fe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new K(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Fe(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function HC(t,e){const n=Ai(t,0),r=Ai(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=Nr(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Hd(t,e){if(Ln(t)!==Ln(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ct(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ln(t)>Ln(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class qC{constructor(e,n){this.errorPrefix_=n,this.parts_=Ai(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=il(this.parts_[r]);r_(this)}}function GC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=il(e),r_(t)}function KC(t){const e=t.parts_.pop();t.byteLength_-=il(e),t.parts_.length>0&&(t.byteLength_-=1)}function r_(t){if(t.byteLength_>gp)throw new Error(t.errorPrefix_+"has a key path longer than "+gp+" bytes ("+t.byteLength_+").");if(t.parts_.length>mp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+mp+") or object contains a cycle "+er(t))}function er(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class qd extends t_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new qd}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Us=1e3,QC=60*5*1e3,vp=30*1e3,YC=1.3,XC=3e4,JC="server_kill",_p=3;class Zt extends e_{constructor(e,n,r,s,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Zt.nextPersistentConnectionId_++,this.log_=Ki("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Us,this.maxReconnectDelay_=QC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ea.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(xe(i)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new _s,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;Zt.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&It(e,"w")){const r=gr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ww(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Bw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):_u("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>XC&&(this.reconnectDelay_=Us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*YC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Zt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},u=function(f){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new WC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{ze(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(JC)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ze(f),c())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hu(this.interruptReasons_)&&(this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>zd(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_p&&(this.reconnectDelay_=vp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_p&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Rv.replace(/\./g,"-")]=1,Dd()?e["framework.cordova"]=1:Sv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ea.getInstance().currentlyOnline();return hu(this.interruptReasons_)&&e}}Zt.nextPersistentConnectionId_=0;Zt.nextConnectionId_=0;/**
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
 */let ko;class s_ extends ol{static get __EMPTY_NODE(){return ko}static set __EMPTY_NODE(e){ko=e}compare(e,n){return Nr(e.name,n.name)}isDefinedOn(e){throw vs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(Mn,ko)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,ko)}toString(){return".key"}}const cr=new s_;/**
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
 */class bo{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Se.RED,this.left=s??qe.EMPTY_NODE,this.right=i??qe.EMPTY_NODE}copy(e,n,r,s,i){return new Se(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class ZC{copy(e,n,r,s,i){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,n=qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bo(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new ZC;/**
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
 */function eE(t,e){return Nr(t.name,e.name)}function Gd(t,e){return Nr(t,e)}/**
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
 */let xu;function tE(t){xu=t}const i_=function(t){return typeof t=="number"?"number:"+Lv(t):"string:"+t},o_=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&It(e,".sv"),"Priority must be a string or number.")}else S(t===xu||t.isEmpty(),"priority of unexpected type.");S(t===xu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let yp;class Ce{constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),o_(this.priorityNode_)}static set __childrenNodeConstructor(e){yp=e}static get __childrenNodeConstructor(){return yp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:U(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||Ln(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+i_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Lv(this.value_):e+=this.value_,this.lazyHash_=Dv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ce.VALUE_TYPE_ORDER.indexOf(n),i=Ce.VALUE_TYPE_ORDER.indexOf(r);return S(s>=0,"Unknown leaf type: "+n),S(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let a_,l_;function nE(t){a_=t}function rE(t){l_=t}class sE extends ol{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Nr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(Mn,new Ce("[PRIORITY-POST]",l_))}makePost(e,n){const r=a_(e);return new V(n,new Ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const oe=new sE;/**
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
 */const iE=Math.log(2);class oE{constructor(e){const n=i=>parseInt(Math.log(i)/iE,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sa=function(t,e,n,r){t.sort(e);const s=function(c,u){const d=u-c;let f,h;if(d===0)return null;if(d===1)return f=t[c],h=n?n(f):f,new Se(h,f.node,Se.BLACK,null,null);{const v=parseInt(d/2,10)+c,_=s(c,v),x=s(v+1,u);return f=t[v],h=n?n(f):f,new Se(h,f.node,Se.BLACK,_,x)}},i=function(c){let u=null,d=null,f=t.length;const h=function(_,x){const C=f-_,p=f;f-=_;const m=s(C+1,p),g=t[C],y=n?n(g):g;v(new Se(y,g.node,x,null,m))},v=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<c.count;++_){const x=c.nextBitIsOne(),C=Math.pow(2,c.count-(_+1));x?h(C,Se.BLACK):(h(C,Se.BLACK),h(C,Se.RED))}return d},o=new oE(t.length),a=i(o);return new qe(r||e,a)};/**
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
 */let fc;const Pr={};class Kt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Pr&&oe,"ChildrenNode.ts has not been loaded"),fc=fc||new Kt({".priority":Pr},{".priority":oe}),fc}get(e){const n=gr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qe?n:null}hasIndex(e){return It(this.indexSet_,e.toString())}addIndex(e,n){S(e!==cr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(V.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Sa(r,e.getCompare()):a=Pr;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new Kt(d,u)}addToIndexes(e,n){const r=ya(this.indexes_,(s,i)=>{const o=gr(this.indexSet_,i);if(S(o,"Missing index implementation for "+i),s===Pr)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(V.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),Sa(a,o.getCompare())}else return Pr;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new V(e.name,a))),c.insert(e,e.node)}});return new Kt(r,this.indexSet_)}removeFromIndexes(e,n){const r=ya(this.indexes_,s=>{if(s===Pr)return s;{const i=n.get(e.name);return i?s.remove(new V(e.name,i)):s}});return new Kt(r,this.indexSet_)}}/**
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
 */let zs;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&o_(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zs||(zs=new j(new qe(Gd),null,Kt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zs}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?zs:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new V(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?zs:this.priorityNode_;return new j(s,o,i)}}updateChild(e,n){const r=U(e);if(r===null)return n;{S(U(e)!==".priority"||Ln(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ee(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(oe,(o,a)=>{n[o]=a.val(e),r++,i&&j.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+i_(this.getPriority().val())+":"),this.forEachChild(oe,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Dv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new V(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,V.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qi?-1:0}withIndex(e){if(e===cr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===cr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(oe),s=n.getIterator(oe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===cr?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class aE extends j{constructor(){super(new qe(Gd),j.EMPTY_NODE,Kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Qi=new aE;Object.defineProperties(V,{MIN:{value:new V(_r,j.EMPTY_NODE)},MAX:{value:new V(Mn,Qi)}});s_.__EMPTY_NODE=j.EMPTY_NODE;Ce.__childrenNodeConstructor=j;tE(Qi);rE(Qi);/**
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
 */const lE=!0;function ve(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,ve(e))}if(!(t instanceof Array)&&lE){const n=[];let r=!1;if(Re(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=ve(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new V(o,c)))}}),n.length===0)return j.EMPTY_NODE;const i=Sa(n,eE,o=>o.name,Gd);if(r){const o=Sa(n,oe.getCompare());return new j(i,ve(e),new Kt({".priority":o},{".priority":oe}))}else return new j(i,ve(e),Kt.Default)}else{let n=j.EMPTY_NODE;return Re(t,(r,s)=>{if(It(t,r)&&r.substring(0,1)!=="."){const i=ve(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(ve(e))}}nE(ve);/**
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
 */class Kd extends ol{constructor(e){super(),this.indexPath_=e,S(!z(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Nr(e.name,n.name):i}makePost(e,n){const r=ve(e),s=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new V(n,s)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Qi);return new V(Mn,e)}toString(){return Ai(this.indexPath_,0).join("/")}}/**
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
 */class cE extends ol{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Nr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const r=ve(e);return new V(n,r)}toString(){return".value"}}const c_=new cE;/**
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
 */function u_(t){return{type:"value",snapshotNode:t}}function cs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ri(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ji(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function uE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Qd{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ri(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(cs(n,r)):o.trackChildChange(ji(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(oe,(s,i)=>{n.hasChild(s)||r.trackChildChange(Ri(s,i))}),n.isLeafNode()||n.forEachChild(oe,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(ji(s,i,o))}else r.trackChildChange(cs(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Oi{constructor(e){this.indexedFilter_=new Qd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Oi.getStartPost_(e),this.endPost_=Oi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new V(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(j.EMPTY_NODE);const i=this;return n.forEachChild(oe,(o,a)=>{i.matches(new V(o,a))||(s=s.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class dE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Oi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new V(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=j.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(j.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,v)=>f(v,h)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const c=new V(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(n)){const f=a.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const v=h==null?1:o(h,c);if(d&&!r.isEmpty()&&v>=0)return i!=null&&i.trackChildChange(ji(n,r,f)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Ri(n,f));const x=a.updateImmediateChild(n,j.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(i!=null&&i.trackChildChange(cs(h.name,h.node)),x.updateImmediateChild(h.name,h.node)):x}}else return r.isEmpty()?e:d&&o(u,c)>=0?(i!=null&&(i.trackChildChange(Ri(u.name,u.node)),i.trackChildChange(cs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
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
 */class Yd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_r}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new Yd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hE(t){return t.loadsAllData()?new Qd(t.getIndex()):t.hasLimit()?new dE(t):new Oi(t)}function fE(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function pE(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function mE(t,e){const n=t.copy();return n.index_=e,n}function xp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===c_?n="$value":t.index_===cr?n="$key":(S(t.index_ instanceof Kd,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
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
 */class Na extends e_{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ki("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Na.getListenId_(e,r),a={};this.listens_[o]=a;const c=xp(e._queryParams);this.restRequest_(i+".json",c,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,r),gr(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",s(h,null)}})}unlisten(e,n){const r=Na.getListenId_(e,n);delete this.listens_[r]}get(e){const n=xp(e._queryParams),r=e._path.toString(),s=new _s;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ys(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ii(a.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class gE{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ka(){return{value:null,children:new Map}}function d_(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,ka());const s=t.children.get(r);e=ee(e),d_(s,e,n)}}function wu(t,e,n){t.value!==null?n(e,t.value):vE(t,(r,s)=>{const i=new K(e.toString()+"/"+r);wu(s,i,n)})}function vE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class _E{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const Cp=10*1e3,yE=30*1e3,xE=5*60*1e3;class wE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new _E(e);const r=Cp+(yE-Cp)*Math.random();oi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Re(e,(s,i)=>{i>0&&It(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),oi(this.reportStats_.bind(this),Math.floor(Math.random()*2*xE))}}/**
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
 */var Ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ct||(Ct={}));function Xd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Jd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ba{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ct.ACK_USER_WRITE,this.source=Xd()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new ba($(),n,this.revert)}}else return S(U(this.path)===e,"operationForChild called for unrelated child."),new ba(ee(this.path),this.affectedTree,this.revert)}}/**
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
 */class Di{constructor(e,n){this.source=e,this.path=n,this.type=Ct.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Di(this.source,$()):new Di(this.source,ee(this.path))}}/**
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
 */class yr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ct.OVERWRITE}operationForChild(e){return z(this.path)?new yr(this.source,$(),this.snap.getImmediateChild(e)):new yr(this.source,ee(this.path),this.snap)}}/**
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
 */class us{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ct.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new yr(this.source,$(),n.value):new us(this.source,$(),n)}else return S(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new us(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class CE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function EE(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(uE(o.childName,o.snapshotNode))}),Vs(t,s,"child_removed",e,r,n),Vs(t,s,"child_added",e,r,n),Vs(t,s,"child_moved",i,r,n),Vs(t,s,"child_changed",e,r,n),Vs(t,s,"value",e,r,n),s}function Vs(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,c)=>NE(t,a,c)),o.forEach(a=>{const c=SE(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function SE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function NE(t,e,n){if(e.childName==null||n.childName==null)throw vs("Should only compare child_ events.");const r=new V(e.childName,e.snapshotNode),s=new V(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function al(t,e){return{eventCache:t,serverCache:e}}function ai(t,e,n,r){return al(new Fn(e,n,r),t.serverCache)}function h_(t,e,n,r){return al(t.eventCache,new Fn(e,n,r))}function Ia(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let pc;const kE=()=>(pc||(pc=new qe(cC)),pc);class Z{constructor(e,n=kE()){this.value=e,this.children=n}static fromObject(e){let n=new Z(null);return Re(e,(r,s)=>{n=n.set(new K(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(z(e))return null;{const r=U(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ee(e),n);return i!=null?{path:fe(new K(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(ee(e)):new Z(null)}}set(e,n){if(z(e))return new Z(n,this.children);{const r=U(e),i=(this.children.get(r)||new Z(null)).set(ee(e),n),o=this.children.insert(r,i);return new Z(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const s=r.remove(ee(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Z(null):new Z(this.value,i)}else return this}}get(e){if(z(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(ee(e)):null}}setTree(e,n){if(z(e))return n;{const r=U(e),i=(this.children.get(r)||new Z(null)).setTree(ee(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Z(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(fe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(z(e))return null;{const i=U(e),o=this.children.get(i);return o?o.findOnPath_(ee(e),fe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const s=U(e),i=this.children.get(s);return i?i.foreachOnPath_(ee(e),fe(n,s),r):new Z(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(fe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Nt{constructor(e){this.writeTree_=e}static empty(){return new Nt(new Z(null))}}function li(t,e,n){if(z(e))return new Nt(new Z(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Fe(s,e);return i=i.updateChild(o,n),new Nt(t.writeTree_.set(s,i))}else{const s=new Z(n),i=t.writeTree_.setTree(e,s);return new Nt(i)}}}function Cu(t,e,n){let r=t;return Re(n,(s,i)=>{r=li(r,fe(e,s),i)}),r}function Ep(t,e){if(z(e))return Nt.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new Nt(n)}}function Eu(t,e){return kr(t,e)!=null}function kr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function Sp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(r,s)=>{e.push(new V(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new V(r,s.value))}),e}function Rn(t,e){if(z(e))return t;{const n=kr(t,e);return n!=null?new Nt(new Z(n)):new Nt(t.writeTree_.subtree(e))}}function Su(t){return t.writeTree_.isEmpty()}function ds(t,e){return f_($(),t.writeTree_,e)}function f_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(S(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=f_(fe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(fe(t,".priority"),r)),n}}/**
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
 */function ll(t,e){return v_(e,t)}function bE(t,e,n,r,s){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=li(t.visibleWrites,e,n)),t.lastWriteId=r}function IE(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Cu(t.visibleWrites,e,n),t.lastWriteId=r}function TE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function PE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&AE(a,r.path)?s=!1:ct(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return RE(t),!0;if(r.snap)t.visibleWrites=Ep(t.visibleWrites,r.path);else{const a=r.children;Re(a,c=>{t.visibleWrites=Ep(t.visibleWrites,fe(r.path,c))})}return!0}else return!1}function AE(t,e){if(t.snap)return ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ct(fe(t.path,n),e))return!0;return!1}function RE(t){t.visibleWrites=p_(t.allWrites,jE,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jE(t){return t.visible}function p_(t,e,n){let r=Nt.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)ct(n,o)?(a=Fe(n,o),r=li(r,a,i.snap)):ct(o,n)&&(a=Fe(o,n),r=li(r,$(),i.snap.getChild(a)));else if(i.children){if(ct(n,o))a=Fe(n,o),r=Cu(r,a,i.children);else if(ct(o,n))if(a=Fe(o,n),z(a))r=Cu(r,$(),i.children);else{const c=gr(i.children,U(a));if(c){const u=c.getChild(ee(a));r=li(r,$(),u)}}}else throw vs("WriteRecord should have .snap or .children")}}return r}function m_(t,e,n,r,s){if(!r&&!s){const i=kr(t.visibleWrites,e);if(i!=null)return i;{const o=Rn(t.visibleWrites,e);if(Su(o))return n;if(n==null&&!Eu(o,$()))return null;{const a=n||j.EMPTY_NODE;return ds(o,a)}}}else{const i=Rn(t.visibleWrites,e);if(!s&&Su(i))return n;if(!s&&n==null&&!Eu(i,$()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(ct(u.path,e)||ct(e,u.path))},a=p_(t.allWrites,o,e),c=n||j.EMPTY_NODE;return ds(a,c)}}}function OE(t,e,n){let r=j.EMPTY_NODE;const s=kr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(oe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Rn(t.visibleWrites,e);return n.forEachChild(oe,(o,a)=>{const c=ds(Rn(i,new K(o)),a);r=r.updateImmediateChild(o,c)}),Sp(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Rn(t.visibleWrites,e);return Sp(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function DE(t,e,n,r,s){S(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=fe(e,n);if(Eu(t.visibleWrites,i))return null;{const o=Rn(t.visibleWrites,i);return Su(o)?s.getChild(n):ds(o,s.getChild(n))}}function ME(t,e,n,r){const s=fe(e,n),i=kr(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Rn(t.visibleWrites,s);return ds(o,r.getNode().getImmediateChild(n))}else return null}function LE(t,e){return kr(t.visibleWrites,e)}function FE(t,e,n,r,s,i,o){let a;const c=Rn(t.visibleWrites,e),u=kr(c,$());if(u!=null)a=u;else if(n!=null)a=ds(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),h=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=h.getNext();for(;v&&d.length<s;)f(v,r)!==0&&d.push(v),v=h.getNext();return d}else return[]}function UE(){return{visibleWrites:Nt.empty(),allWrites:[],lastWriteId:-1}}function Ta(t,e,n,r){return m_(t.writeTree,t.treePath,e,n,r)}function eh(t,e){return OE(t.writeTree,t.treePath,e)}function Np(t,e,n,r){return DE(t.writeTree,t.treePath,e,n,r)}function Pa(t,e){return LE(t.writeTree,fe(t.treePath,e))}function zE(t,e,n,r,s,i){return FE(t.writeTree,t.treePath,e,n,r,s,i)}function th(t,e,n){return ME(t.writeTree,t.treePath,e,n)}function g_(t,e){return v_(fe(t.treePath,e),t.writeTree)}function v_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class VE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,ji(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Ri(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,cs(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,ji(r,e.snapshotNode,s.oldSnap));else throw vs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class BE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const __=new BE;class nh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return th(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),i=zE(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function WE(t){return{filter:t}}function $E(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function HE(t,e,n,r,s){const i=new VE;let o,a;if(n.type===Ct.OVERWRITE){const u=n;u.source.fromUser?o=Nu(t,e,u.path,u.snap,r,s,i):(S(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=Aa(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===Ct.MERGE){const u=n;u.source.fromUser?o=GE(t,e,u.path,u.children,r,s,i):(S(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=ku(t,e,u.path,u.children,r,s,a,i))}else if(n.type===Ct.ACK_USER_WRITE){const u=n;u.revert?o=YE(t,e,u.path,r,s,i):o=KE(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Ct.LISTEN_COMPLETE)o=QE(t,e,n.path,r,i);else throw vs("Unknown operation type: "+n.type);const c=i.getChanges();return qE(e,o,c),{viewCache:o,changes:c}}function qE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Ia(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(u_(Ia(e)))}}function y_(t,e,n,r,s,i){const o=e.eventCache;if(Pa(r,n)!=null)return e;{let a,c;if(z(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=xr(e),d=u instanceof j?u:j.EMPTY_NODE,f=eh(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=Ta(r,xr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=U(n);if(u===".priority"){S(Ln(n)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const f=Np(r,n,d,c);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=ee(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const h=Np(r,n,o.getNode(),c);h!=null?f=o.getNode().getImmediateChild(u).updateChild(d,h):f=o.getNode().getImmediateChild(u)}else f=th(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,d,s,i):a=o.getNode()}}return ai(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Aa(t,e,n,r,s,i,o,a){const c=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=d.updateFullNode(c.getNode(),r,null);else if(d.filtersNodes()&&!c.isFiltered()){const v=c.getNode().updateChild(n,r);u=d.updateFullNode(c.getNode(),v,null)}else{const v=U(n);if(!c.isCompleteForPath(n)&&Ln(n)>1)return e;const _=ee(n),C=c.getNode().getImmediateChild(v).updateChild(_,r);v===".priority"?u=d.updatePriority(c.getNode(),C):u=d.updateChild(c.getNode(),v,C,_,__,null)}const f=h_(e,u,c.isFullyInitialized()||z(n),d.filtersNodes()),h=new nh(s,f,i);return y_(t,f,n,s,h,a)}function Nu(t,e,n,r,s,i,o){const a=e.eventCache;let c,u;const d=new nh(s,e,i);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=ai(e,u,!0,t.filter.filtersNodes());else{const f=U(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),c=ai(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=ee(n),v=a.getNode().getImmediateChild(f);let _;if(z(h))_=r;else{const x=d.getCompleteChild(f);x!=null?$d(h)===".priority"&&x.getChild(n_(h)).isEmpty()?_=x:_=x.updateChild(h,r):_=j.EMPTY_NODE}if(v.equals(_))c=e;else{const x=t.filter.updateChild(a.getNode(),f,_,h,d,o);c=ai(e,x,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function kp(t,e){return t.eventCache.isCompleteForChild(e)}function GE(t,e,n,r,s,i,o){let a=e;return r.foreach((c,u)=>{const d=fe(n,c);kp(e,U(d))&&(a=Nu(t,a,d,u,s,i,o))}),r.foreach((c,u)=>{const d=fe(n,c);kp(e,U(d))||(a=Nu(t,a,d,u,s,i,o))}),a}function bp(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function ku(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;z(n)?u=r:u=new Z(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,h)=>{if(d.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),_=bp(t,v,h);c=Aa(t,c,new K(f),_,s,i,o,a)}}),u.children.inorderTraversal((f,h)=>{const v=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!d.hasChild(f)&&!v){const _=e.serverCache.getNode().getImmediateChild(f),x=bp(t,_,h);c=Aa(t,c,new K(f),x,s,i,o,a)}}),c}function KE(t,e,n,r,s,i,o){if(Pa(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(z(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Aa(t,e,n,c.getNode().getChild(n),s,i,a,o);if(z(n)){let u=new Z(null);return c.getNode().forEachChild(cr,(d,f)=>{u=u.set(new K(d),f)}),ku(t,e,n,u,s,i,a,o)}else return e}else{let u=new Z(null);return r.foreach((d,f)=>{const h=fe(n,d);c.isCompleteForPath(h)&&(u=u.set(d,c.getNode().getChild(h)))}),ku(t,e,n,u,s,i,a,o)}}function QE(t,e,n,r,s){const i=e.serverCache,o=h_(e,i.getNode(),i.isFullyInitialized()||z(n),i.isFiltered());return y_(t,o,n,r,__,s)}function YE(t,e,n,r,s,i){let o;if(Pa(r,n)!=null)return e;{const a=new nh(r,e,s),c=e.eventCache.getNode();let u;if(z(n)||U(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ta(r,xr(e));else{const f=e.serverCache.getNode();S(f instanceof j,"serverChildren would be complete if leaf node"),d=eh(r,f)}d=d,u=t.filter.updateFullNode(c,d,i)}else{const d=U(n);let f=th(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),f!=null?u=t.filter.updateChild(c,d,f,ee(n),a,i):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(c,d,j.EMPTY_NODE,ee(n),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ta(r,xr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Pa(r,$())!=null,ai(e,u,o,t.filter.filtersNodes())}}/**
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
 */class XE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Qd(r.getIndex()),i=hE(r);this.processor_=WE(i);const o=n.serverCache,a=n.eventCache,c=s.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(j.EMPTY_NODE,a.getNode(),null),d=new Fn(c,o.isFullyInitialized(),s.filtersNodes()),f=new Fn(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=al(f,d),this.eventGenerator_=new CE(this.query_)}get query(){return this.query_}}function JE(t){return t.viewCache_.serverCache.getNode()}function ZE(t){return Ia(t.viewCache_)}function eS(t,e){const n=xr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function Ip(t){return t.eventRegistrations_.length===0}function tS(t,e){t.eventRegistrations_.push(e)}function Tp(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Pp(t,e,n,r){e.type===Ct.MERGE&&e.source.queryId!==null&&(S(xr(t.viewCache_),"We should always have a full cache before handling merges"),S(Ia(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=HE(t.processor_,s,e,n,r);return $E(t.processor_,i.viewCache),S(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,x_(t,i.changes,i.viewCache.eventCache.getNode(),null)}function nS(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(i,o)=>{r.push(cs(i,o))}),n.isFullyInitialized()&&r.push(u_(n.getNode())),x_(t,r,n.getNode(),e)}function x_(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return EE(t.eventGenerator_,e,n,s)}/**
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
 */let Ra;class w_{constructor(){this.views=new Map}}function rS(t){S(!Ra,"__referenceConstructor has already been defined"),Ra=t}function sS(){return S(Ra,"Reference.ts has not been loaded"),Ra}function iS(t){return t.views.size===0}function rh(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return S(i!=null,"SyncTree gave us an op for an invalid query."),Pp(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Pp(o,e,n,r));return i}}function C_(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Ta(n,s?r:null),c=!1;a?c=!0:r instanceof j?(a=eh(n,r),c=!1):(a=j.EMPTY_NODE,c=!1);const u=al(new Fn(a,c,!1),new Fn(r,s,!1));return new XE(e,u)}return o}function oS(t,e,n,r,s,i){const o=C_(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),tS(o,n),nS(o,n)}function aS(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=Un(t);if(s==="default")for(const[c,u]of t.views.entries())o=o.concat(Tp(u,n,r)),Ip(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||i.push(u.query));else{const c=t.views.get(s);c&&(o=o.concat(Tp(c,n,r)),Ip(c)&&(t.views.delete(s),c.query._queryParams.loadsAllData()||i.push(c.query)))}return a&&!Un(t)&&i.push(new(sS())(e._repo,e._path)),{removed:i,events:o}}function E_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function jn(t,e){let n=null;for(const r of t.views.values())n=n||eS(r,e);return n}function S_(t,e){if(e._queryParams.loadsAllData())return cl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function N_(t,e){return S_(t,e)!=null}function Un(t){return cl(t)!=null}function cl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ja;function lS(t){S(!ja,"__referenceConstructor has already been defined"),ja=t}function cS(){return S(ja,"Reference.ts has not been loaded"),ja}let uS=1;class Ap{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=UE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sh(t,e,n,r,s){return bE(t.pendingWriteTree_,e,n,r,s),s?Cs(t,new yr(Xd(),e,n)):[]}function dS(t,e,n,r){IE(t.pendingWriteTree_,e,n,r);const s=Z.fromObject(n);return Cs(t,new us(Xd(),e,s))}function xn(t,e,n=!1){const r=TE(t.pendingWriteTree_,e);if(PE(t.pendingWriteTree_,e)){let i=new Z(null);return r.snap!=null?i=i.set($(),!0):Re(r.children,o=>{i=i.set(new K(o),!0)}),Cs(t,new ba(r.path,i,n))}else return[]}function Yi(t,e,n){return Cs(t,new yr(Jd(),e,n))}function hS(t,e,n){const r=Z.fromObject(n);return Cs(t,new us(Jd(),e,r))}function fS(t,e){return Cs(t,new Di(Jd(),e))}function pS(t,e,n){const r=ih(t,n);if(r){const s=oh(r),i=s.path,o=s.queryId,a=Fe(i,e),c=new Di(Zd(o),a);return ah(t,i,c)}else return[]}function Oa(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||N_(o,e))){const c=aS(o,e,n,r);iS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=c.removed;if(a=c.events,!s){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(h,v)=>Un(v));if(d&&!f){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const v=vS(h);for(let _=0;_<v.length;++_){const x=v[_],C=x.query,p=T_(t,x);t.listenProvider_.startListening(ci(C),Mi(t,C),p.hashFn,p.onComplete)}}}!f&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(ci(e),null):u.forEach(h=>{const v=t.queryToTagMap.get(dl(h));t.listenProvider_.stopListening(ci(h),v)}))}_S(t,u)}return a}function k_(t,e,n,r){const s=ih(t,r);if(s!=null){const i=oh(s),o=i.path,a=i.queryId,c=Fe(o,e),u=new yr(Zd(a),c,n);return ah(t,o,u)}else return[]}function mS(t,e,n,r){const s=ih(t,r);if(s){const i=oh(s),o=i.path,a=i.queryId,c=Fe(o,e),u=Z.fromObject(n),d=new us(Zd(a),c,u);return ah(t,o,d)}else return[]}function bu(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,v)=>{const _=Fe(h,s);i=i||jn(v,_),o=o||Un(v)});let a=t.syncPointTree_.get(s);a?(o=o||Un(a),i=i||jn(a,$())):(a=new w_,t.syncPointTree_=t.syncPointTree_.set(s,a));let c;i!=null?c=!0:(c=!1,i=j.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((v,_)=>{const x=jn(_,$());x&&(i=i.updateImmediateChild(v,x))}));const u=N_(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=dl(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const v=yS();t.queryToTagMap.set(h,v),t.tagToQueryMap.set(v,h)}const d=ll(t.pendingWriteTree_,s);let f=oS(a,e,n,d,i,c);if(!u&&!o&&!r){const h=S_(a,e);f=f.concat(xS(t,e,h))}return f}function ul(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Fe(o,e),u=jn(a,c);if(u)return u});return m_(s,e,i,n,!0)}function gS(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const f=Fe(u,n);r=r||jn(d,f)});let s=t.syncPointTree_.get(n);s?r=r||jn(s,$()):(s=new w_,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Fn(r,!0,!1):null,a=ll(t.pendingWriteTree_,e._path),c=C_(s,e,a,i?o.getNode():j.EMPTY_NODE,i);return ZE(c)}function Cs(t,e){return b_(e,t.syncPointTree_,null,ll(t.pendingWriteTree_,$()))}function b_(t,e,n,r){if(z(t.path))return I_(t,e,n,r);{const s=e.get($());n==null&&s!=null&&(n=jn(s,$()));let i=[];const o=U(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,d=g_(r,o);i=i.concat(b_(a,c,u,d))}return s&&(i=i.concat(rh(s,t,r,n))),i}}function I_(t,e,n,r){const s=e.get($());n==null&&s!=null&&(n=jn(s,$()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=g_(r,o),d=t.operationForChild(o);d&&(i=i.concat(I_(d,a,c,u)))}),s&&(i=i.concat(rh(s,t,r,n))),i}function T_(t,e){const n=e.query,r=Mi(t,n);return{hashFn:()=>(JE(e)||j.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?pS(t,n._path,r):fS(t,n._path);{const i=hC(s,n);return Oa(t,n,null,i)}}}}function Mi(t,e){const n=dl(e);return t.queryToTagMap.get(n)}function dl(t){return t._path.toString()+"$"+t._queryIdentifier}function ih(t,e){return t.tagToQueryMap.get(e)}function oh(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function ah(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const s=ll(t.pendingWriteTree_,e);return rh(r,n,s,null)}function vS(t){return t.fold((e,n,r)=>{if(n&&Un(n))return[cl(n)];{let s=[];return n&&(s=E_(n)),Re(r,(i,o)=>{s=s.concat(o)}),s}})}function ci(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(cS())(t._repo,t._path):t}function _S(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=dl(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function yS(){return uS++}function xS(t,e,n){const r=e._path,s=Mi(t,e),i=T_(t,n),o=t.listenProvider_.startListening(ci(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)S(!Un(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((u,d,f)=>{if(!z(u)&&d&&Un(d))return[cl(d).query];{let h=[];return d&&(h=h.concat(E_(d).map(v=>v.query))),Re(f,(v,_)=>{h=h.concat(_)}),h}});for(let u=0;u<c.length;++u){const d=c[u];t.listenProvider_.stopListening(ci(d),Mi(t,d))}}return o}/**
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
 */class lh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new lh(n)}node(){return this.node_}}class ch{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new ch(this.syncTree_,n)}node(){return ul(this.syncTree_,this.path_)}}const wS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Rp=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return CS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ES(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},CS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},ES=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const s=e.node();if(S(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},P_=function(t,e,n,r){return dh(e,new ch(n,t),r)},uh=function(t,e,n){return dh(t,new lh(e),n)};function dh(t,e,n){const r=t.getPriority().val(),s=Rp(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Rp(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ce(a,ve(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ce(s))),o.forEachChild(oe,(a,c)=>{const u=dh(c,e.getImmediateChild(a),n);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class hh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function hl(t,e){let n=e instanceof K?e:new K(e),r=t,s=U(n);for(;s!==null;){const i=gr(r.node.children,s)||{children:{},childCount:0};r=new hh(s,r,i),n=ee(n),s=U(n)}return r}function br(t){return t.node.value}function fh(t,e){t.node.value=e,Iu(t)}function A_(t){return t.node.childCount>0}function SS(t){return br(t)===void 0&&!A_(t)}function fl(t,e){Re(t.node.children,(n,r)=>{e(new hh(n,t,r))})}function R_(t,e,n,r){n&&e(t),fl(t,s=>{R_(s,e,!0)})}function NS(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Xi(t){return new K(t.parent===null?t.name:Xi(t.parent)+"/"+t.name)}function Iu(t){t.parent!==null&&kS(t.parent,t.name,t)}function kS(t,e,n){const r=SS(n),s=It(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Iu(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Iu(t))}/**
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
 */const bS=/[\[\].#$\/\u0000-\u001F\u007F]/,IS=/[\[\].#$\u0000-\u001F\u007F]/,mc=10*1024*1024,ph=function(t){return typeof t=="string"&&t.length!==0&&!bS.test(t)},j_=function(t){return typeof t=="string"&&t.length!==0&&!IS.test(t)},TS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),j_(t)},Da=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ud(t)||t&&typeof t=="object"&&It(t,".sv")},mh=function(t,e,n,r){r&&e===void 0||Ji(sl(t,"value"),e,n)},Ji=function(t,e,n){const r=n instanceof K?new qC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+er(r));if(typeof e=="function")throw new Error(t+"contains a function "+er(r)+" with contents = "+e.toString());if(Ud(e))throw new Error(t+"contains "+e.toString()+" "+er(r));if(typeof e=="string"&&e.length>mc/3&&il(e)>mc)throw new Error(t+"contains a string greater than "+mc+" utf8 bytes "+er(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Re(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!ph(o)))throw new Error(t+" contains an invalid key ("+o+") "+er(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);GC(r,o),Ji(t,a,r),KC(r)}),s&&i)throw new Error(t+' contains ".value" child '+er(r)+" in addition to actual children.")}},PS=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Ai(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!ph(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(HC);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&ct(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},AS=function(t,e,n,r){const s=sl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Re(e,(o,a)=>{const c=new K(o);if(Ji(s,a,fe(n,c)),$d(c)===".priority"&&!Da(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(c)}),PS(s,i)},gh=function(t,e,n,r){if(!j_(n))throw new Error(sl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},RS=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gh(t,e,n)},pl=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},jS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ph(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!TS(n))throw new Error(sl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class OS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ml(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Hd(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function O_(t,e,n){ml(t,n),D_(t,r=>Hd(r,e))}function tt(t,e,n){ml(t,n),D_(t,r=>ct(r,e)||ct(e,r))}function D_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(DS(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function DS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ii&&Te("event: "+n.toString()),ws(r)}}}/**
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
 */const MS="repo_interrupt",LS=25;class FS{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new OS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ka(),this.transactionQueueTree_=new hh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function US(t,e,n){if(t.stats_=Bd(t.repoInfo_),t.forceRestClient_||gC())t.server_=new Na(t.repoInfo_,(r,s,i,o)=>{jp(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Op(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Zt(t.repoInfo_,e,(r,s,i,o)=>{jp(t,r,s,i,o)},r=>{Op(t,r)},r=>{zS(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=wC(t.repoInfo_,()=>new wE(t.stats_,t.server_)),t.infoData_=new gE,t.infoSyncTree_=new Ap({startListening:(r,s,i,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Yi(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),vh(t,"connected",!1),t.serverSyncTree_=new Ap({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,c)=>{const u=o(a,c);tt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function M_(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zi(t){return wS({timestamp:M_(t)})}function jp(t,e,n,r,s){t.dataUpdateCount++;const i=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const c=ya(n,u=>ve(u));o=mS(t.serverSyncTree_,i,c,s)}else{const c=ve(n);o=k_(t.serverSyncTree_,i,c,s)}else if(r){const c=ya(n,u=>ve(u));o=hS(t.serverSyncTree_,i,c)}else{const c=ve(n);o=Yi(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=hs(t,i)),tt(t.eventQueue_,a,o)}function Op(t,e){vh(t,"connected",e),e===!1&&$S(t)}function zS(t,e){Re(e,(n,r)=>{vh(t,n,r)})}function vh(t,e,n){const r=new K("/.info/"+e),s=ve(n);t.infoData_.updateSnapshot(r,s);const i=Yi(t.infoSyncTree_,r,s);tt(t.eventQueue_,r,i)}function gl(t){return t.nextWriteId_++}function VS(t,e,n){const r=gS(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=ve(s).withIndex(e._queryParams.getIndex());bu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Yi(t.serverSyncTree_,e._path,i);else{const a=Mi(t.serverSyncTree_,e);o=k_(t.serverSyncTree_,e._path,i,a)}return tt(t.eventQueue_,e._path,o),Oa(t.serverSyncTree_,e,n,null,!0),i},s=>(Es(t,"get for query "+xe(e)+" failed: "+s),Promise.reject(new Error(s))))}function BS(t,e,n,r,s){Es(t,"set",{path:e.toString(),value:n,priority:r});const i=Zi(t),o=ve(n,r),a=ul(t.serverSyncTree_,e),c=uh(o,a,i),u=gl(t),d=sh(t.serverSyncTree_,e,c,u,!0);ml(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,v)=>{const _=h==="ok";_||ze("set at "+e+" failed: "+h);const x=xn(t.serverSyncTree_,u,!_);tt(t.eventQueue_,e,x),Tu(t,s,h,v)});const f=yh(t,e);hs(t,f),tt(t.eventQueue_,f,[])}function WS(t,e,n,r){Es(t,"update",{path:e.toString(),value:n});let s=!0;const i=Zi(t),o={};if(Re(n,(a,c)=>{s=!1,o[a]=P_(fe(e,a),ve(c),t.serverSyncTree_,i)}),s)Te("update() called with empty data.  Don't do anything."),Tu(t,r,"ok",void 0);else{const a=gl(t),c=dS(t.serverSyncTree_,e,o,a);ml(t.eventQueue_,c),t.server_.merge(e.toString(),n,(u,d)=>{const f=u==="ok";f||ze("update at "+e+" failed: "+u);const h=xn(t.serverSyncTree_,a,!f),v=h.length>0?hs(t,e):e;tt(t.eventQueue_,v,h),Tu(t,r,u,d)}),Re(n,u=>{const d=yh(t,fe(e,u));hs(t,d)}),tt(t.eventQueue_,e,[])}}function $S(t){Es(t,"onDisconnectEvents");const e=Zi(t),n=ka();wu(t.onDisconnect_,$(),(s,i)=>{const o=P_(s,i,t.serverSyncTree_,e);d_(n,s,o)});let r=[];wu(n,$(),(s,i)=>{r=r.concat(Yi(t.serverSyncTree_,s,i));const o=yh(t,s);hs(t,o)}),t.onDisconnect_=ka(),tt(t.eventQueue_,$(),r)}function HS(t,e,n){let r;U(e._path)===".info"?r=bu(t.infoSyncTree_,e,n):r=bu(t.serverSyncTree_,e,n),O_(t.eventQueue_,e._path,r)}function Dp(t,e,n){let r;U(e._path)===".info"?r=Oa(t.infoSyncTree_,e,n):r=Oa(t.serverSyncTree_,e,n),O_(t.eventQueue_,e._path,r)}function qS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(MS)}function Es(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function Tu(t,e,n,r){e&&ws(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function GS(t,e,n,r,s,i){Es(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:Ov(),applyLocally:i,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=_h(t,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ji("transaction failed: Data returned ",c,o.path),o.status=0;const u=hl(t.transactionQueueTree_,e),d=br(u)||[];d.push(o),fh(u,d);let f;typeof c=="object"&&c!==null&&It(c,".priority")?(f=gr(c,".priority"),S(Da(f),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):f=(ul(t.serverSyncTree_,e)||j.EMPTY_NODE).getPriority().val();const h=Zi(t),v=ve(c,f),_=uh(v,a,h);o.currentOutputSnapshotRaw=v,o.currentOutputSnapshotResolved=_,o.currentWriteId=gl(t);const x=sh(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);tt(t.eventQueue_,e,x),vl(t,t.transactionQueueTree_)}}function _h(t,e,n){return ul(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function vl(t,e=t.transactionQueueTree_){if(e||_l(t,e),br(e)){const n=F_(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&KS(t,Xi(e),n)}else A_(e)&&fl(e,n=>{vl(t,n)})}function KS(t,e,n){const r=n.map(u=>u.currentWriteId),s=_h(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const d=n[u];S(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Fe(e,d.path);i=i.updateChild(f,d.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,u=>{Es(t,"transaction put response",{path:c.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(xn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();_l(t,hl(t.transactionQueueTree_,e)),vl(t,t.transactionQueueTree_),tt(t.eventQueue_,e,d);for(let h=0;h<f.length;h++)ws(f[h])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{ze("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}hs(t,e)}},o)}function hs(t,e){const n=L_(t,e),r=Xi(n),s=F_(t,n);return QS(t,s,r),r}function QS(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=Fe(n,c.path);let d=!1,f;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,f=c.abortReason,s=s.concat(xn(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=LS)d=!0,f="maxretry",s=s.concat(xn(t.serverSyncTree_,c.currentWriteId,!0));else{const h=_h(t,c.path,o);c.currentInputSnapshot=h;const v=e[a].update(h.val());if(v!==void 0){Ji("transaction failed: Data returned ",v,c.path);let _=ve(v);typeof v=="object"&&v!=null&&It(v,".priority")||(_=_.updatePriority(h.getPriority()));const C=c.currentWriteId,p=Zi(t),m=uh(_,h,p);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=m,c.currentWriteId=gl(t),o.splice(o.indexOf(C),1),s=s.concat(sh(t.serverSyncTree_,c.path,m,c.currentWriteId,c.applyLocally)),s=s.concat(xn(t.serverSyncTree_,C,!0))}else d=!0,f="nodata",s=s.concat(xn(t.serverSyncTree_,c.currentWriteId,!0))}tt(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}_l(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ws(r[a]);vl(t,t.transactionQueueTree_)}function L_(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&br(r)===void 0;)r=hl(r,n),e=ee(e),n=U(e);return r}function F_(t,e){const n=[];return U_(t,e,n),n.sort((r,s)=>r.order-s.order),n}function U_(t,e,n){const r=br(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);fl(e,s=>{U_(t,s,n)})}function _l(t,e){const n=br(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,fh(e,n.length>0?n:void 0)}fl(e,r=>{_l(t,r)})}function yh(t,e){const n=Xi(L_(t,e)),r=hl(t.transactionQueueTree_,e);return NS(r,s=>{gc(t,s)}),gc(t,r),R_(r,s=>{gc(t,s)}),n}function gc(t,e){const n=br(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(xn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?fh(e,void 0):n.length=i+1,tt(t.eventQueue_,Xi(e),s);for(let o=0;o<r.length;o++)ws(r[o])}}/**
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
 */function YS(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function XS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mp=function(t,e){const n=JS(t),r=n.namespace;n.domain==="firebase.com"&&on(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&on("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||aC();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Gv(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new K(n.pathString)}},JS=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(s=YS(t.substring(d,f)));const h=XS(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=r}"ns"in h&&(i=h.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */const Lp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ZS=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=Lp.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Lp.charAt(e[s]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class eN{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class tN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ss{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return z(this._path)?null:$d(this._path)}get ref(){return new Lt(this._repo,this._path)}get _queryIdentifier(){const e=wp(this._queryParams),n=zd(e);return n==="{}"?"default":n}get _queryObject(){return wp(this._queryParams)}isEqual(e){if(e=ke(e),!(e instanceof Ss))return!1;const n=this._repo===e._repo,r=Hd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+$C(this._path)}}function nN(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function V_(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===cr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==_r)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==Mn)throw new Error(r);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===oe){if(e!=null&&!Da(e)||n!=null&&!Da(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(S(t.getIndex()instanceof Kd||t.getIndex()===c_,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function rN(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Lt extends Ss{constructor(e,n){super(e,n,new Yd,!1)}get parent(){const e=n_(this._path);return e===null?null:new Lt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class fs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=Li(this.ref,e);return new fs(this._node.getChild(n),r,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new fs(s,Li(this.ref,r),oe)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Q(t,e){return t=ke(t),t._checkNotDeleted("ref"),e!==void 0?Li(t._root,e):t._root}function Li(t,e){return t=ke(t),U(t._path)===null?RS("child","path",e):gh("child","path",e),new Lt(t._repo,fe(t._path,e))}function Bs(t,e){t=ke(t),pl("push",t._path),mh("push",e,t._path,!0);const n=M_(t._repo),r=ZS(n),s=Li(t,r),i=Li(t,r);let o;return e!=null?o=B_(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function sN(t){return pl("remove",t._path),B_(t,null)}function B_(t,e){t=ke(t),pl("set",t._path),mh("set",e,t._path,!1);const n=new _s;return BS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Bt(t,e){AS("update",e,t._path);const n=new _s;return WS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Pu(t){t=ke(t);const e=new z_(()=>{}),n=new yl(e);return VS(t._repo,t,n).then(r=>new fs(r,new Lt(t._repo,t._path),t._queryParams.getIndex()))}class yl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new eN("value",this,new fs(e.snapshotNode,new Lt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tN(this,e,n):null}matches(e){return e instanceof yl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function iN(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const c=n,u=(d,f)=>{Dp(t._repo,t,a),c(d,f)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new z_(n,i||void 0),a=new yl(o);return HS(t._repo,t,a),()=>Dp(t._repo,t,a)}function Au(t,e,n,r){return iN(t,"value",e,n,r)}class xh{}class oN extends xh{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){mh("startAt",this._value,e._path,!0);const n=pE(e._queryParams,this._value,this._key);if(rN(n),V_(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ss(e._repo,e._path,n,e._orderByCalled)}}function aN(t=null,e){return new oN(t,e)}class lN extends xh{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ss(e._repo,e._path,fE(e._queryParams,this._limit),e._orderByCalled)}}function cN(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new lN(t)}class uN extends xh{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){nN(e,"orderByChild");const n=new K(this._path);if(z(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Kd(n),s=mE(e._queryParams,r);return V_(s),new Ss(e._repo,e._path,s,!0)}}function dN(t){return gh("orderByChild","path",t),new uN(t)}function Fp(t,...e){let n=ke(t);for(const r of e)n=r._apply(n);return n}rS(Lt);lS(Lt);/**
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
 */const hN="FIREBASE_DATABASE_EMULATOR_HOST",Ru={};let fN=!1;function pN(t,e,n,r){t.repoInfo_=new Gv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function mN(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||on("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mp(i,s),a=o.repoInfo,c;typeof process<"u"&&rp&&(c=rp[hN]),c?(i=`http://${c}?ns=${a.namespace}`,o=Mp(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new _C(t.name,t.options,e);jS("Invalid Firebase Database URL",o),z(o.path)||on("Database URL must point to the root of a Firebase Database (not including a child path).");const d=vN(a,t,u,new vC(t.name,n));return new _N(d,t)}function gN(t,e){const n=Ru[e];(!n||n[t.key]!==t)&&on(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qS(t),delete n[t.key]}function vN(t,e,n,r){let s=Ru[e.name];s||(s={},Ru[e.name]=s);let i=s[t.toURLString()];return i&&on("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new FS(t,fN,n,r),s[t.toURLString()]=i,i}class _N{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(US(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&on("Cannot call "+e+" on a deleted database.")}}function yN(t=Tv(),e){const n=Fd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Aw("database");r&&xN(n,...r)}return n}function xN(t,e,n,r={}){t=ke(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&on("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&on('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Bo(Bo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Rw(r.mockUserToken,t.app.options.projectId);i=new Bo(o)}pN(s,e,n,i)}/**
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
 */function wN(t){nC(xs),ls(new vr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return mN(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),An(sp,ip,t),An(sp,ip,"esm2017")}/**
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
 */class CN{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function EN(t,e,n){var r;if(t=ke(t),pl("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const s=(r=void 0)!==null&&r!==void 0?r:!0,i=new _s,o=(c,u,d)=>{let f=null;c?i.reject(c):(f=new fs(d,new Lt(t._repo,t._path),oe),i.resolve(new CN(u,f)))},a=Au(t,()=>{});return GS(t._repo,t._path,e,o,a,s),i.promise}Zt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Zt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wN();function wh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function W_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SN=W_,$_=new qi("auth","Firebase",W_());/**
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
 */const Ma=new Md("@firebase/auth");function NN(t,...e){Ma.logLevel<=X.WARN&&Ma.warn(`Auth (${xs}): ${t}`,...e)}function Wo(t,...e){Ma.logLevel<=X.ERROR&&Ma.error(`Auth (${xs}): ${t}`,...e)}/**
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
 */function ft(t,...e){throw Eh(t,...e)}function kt(t,...e){return Eh(t,...e)}function Ch(t,e,n){const r=Object.assign(Object.assign({},SN()),{[e]:n});return new qi("auth","Firebase",r).create(e,{appName:t.name})}function Dt(t){return Ch(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function H_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ft(t,"argument-error"),Ch(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Eh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $_.create(t,...e)}function O(t,e,...n){if(!t)throw Eh(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wo(e),new Error(e)}function an(t,e){t||Qt(e)}/**
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
 */function ju(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kN(){return Up()==="http:"||Up()==="https:"}function Up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function bN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kN()||Ow()||"connection"in navigator)?navigator.onLine:!0}function IN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=Dd()||Sv()}get(){return bN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sh(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */const TN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PN=new eo(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hn(t,e,n,r,s={}){return G_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ys(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return jw()||(u.referrerPolicy="no-referrer"),q_.fetch()(K_(t,t.config.apiHost,n,a),u)})}async function G_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},TN),e);try{const s=new RN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Io(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Io(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ch(t,d,u);ft(t,d)}}catch(s){if(s instanceof Wn)throw s;ft(t,"network-request-failed",{message:String(s)})}}async function to(t,e,n,r,s={}){const i=await Hn(t,e,n,r,s);return"mfaPendingCredential"in i&&ft(t,"multi-factor-auth-required",{_serverResponse:i}),i}function K_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Sh(t.config,s):`${t.config.apiScheme}://${s}`}function AN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),PN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=kt(t,e,r);return s.customData._tokenResponse=n,s}function zp(t){return t!==void 0&&t.enterprise!==void 0}class jN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ON(t,e){return Hn(t,"GET","/v2/recaptchaConfig",$n(t,e))}/**
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
 */async function DN(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function Q_(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MN(t,e=!1){const n=ke(t),r=await n.getIdToken(e),s=Nh(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ui(vc(s.auth_time)),issuedAtTime:ui(vc(s.iat)),expirationTime:ui(vc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vc(t){return Number(t)*1e3}function Nh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wo("JWT malformed, contained fewer than 3 sections"),null;try{const s=_a(n);return s?JSON.parse(s):(Wo("Failed to decode base64 JWT payload"),null)}catch(s){return Wo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vp(t){const e=Nh(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&LN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class FN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ou{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function La(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fi(t,Q_(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Y_(i.providerUserInfo):[],a=zN(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ou(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function UN(t){const e=ke(t);await La(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Y_(t){return t.map(e=>{var{providerId:n}=e,r=wh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function VN(t,e){const n=await G_(t,{},async()=>{const r=ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=K_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",q_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BN(t,e){return Hn(t,"POST","/v2/accounts:revokeToken",$n(t,e))}/**
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
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=Vp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await VN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Xr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function un(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=wh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ou(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MN(this,e)}reload(){return UN(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await La(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await Fi(this,DN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:y,isAnonymous:k,providerData:w,stsTokenManager:N}=n;O(g&&N,e,"internal-error");const T=Xr.fromJSON(this.name,N);O(typeof g=="string",e,"internal-error"),un(f,e.name),un(h,e.name),O(typeof y=="boolean",e,"internal-error"),O(typeof k=="boolean",e,"internal-error"),un(v,e.name),un(_,e.name),un(x,e.name),un(C,e.name),un(p,e.name),un(m,e.name);const q=new Yt({uid:g,auth:e,email:h,emailVerified:y,displayName:f,isAnonymous:k,photoURL:_,phoneNumber:v,tenantId:x,stsTokenManager:T,createdAt:p,lastLoginAt:m});return w&&Array.isArray(w)&&(q.providerData=w.map(L=>Object.assign({},L))),C&&(q._redirectEventId=C),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new Xr;s.updateFromServerResponse(n);const i=new Yt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await La(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];O(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Y_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Xr;a.updateFromIdToken(r);const c=new Yt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ou(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */function $o(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$o(this.userKey,s.apiKey,i),this.fullPersistenceKey=$o("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(Xt(Wp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Xt(Wp);const o=$o(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const f=Yt._fromJSON(e,d);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Jr(i,e,r))}}/**
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
 */function $p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ty(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ry(e))return"Blackberry";if(sy(e))return"Webos";if(Z_(e))return"Safari";if((e.includes("chrome/")||ey(e))&&!e.includes("edge/"))return"Chrome";if(ny(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function J_(t=Ve()){return/firefox\//i.test(t)}function Z_(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ey(t=Ve()){return/crios\//i.test(t)}function ty(t=Ve()){return/iemobile/i.test(t)}function ny(t=Ve()){return/android/i.test(t)}function ry(t=Ve()){return/blackberry/i.test(t)}function sy(t=Ve()){return/webos/i.test(t)}function kh(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WN(t=Ve()){var e;return kh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $N(){return Dw()&&document.documentMode===10}function iy(t=Ve()){return kh(t)||ny(t)||sy(t)||ry(t)||/windows phone/i.test(t)||ty(t)}/**
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
 */function oy(t,e=[]){let n;switch(t){case"Browser":n=$p(Ve());break;case"Worker":n=`${$p(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
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
 */class HN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qN(t,e={}){return Hn(t,"GET","/v2/passwordPolicy",$n(t,e))}/**
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
 */const GN=6;class KN{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:GN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class QN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hp(this),this.idTokenSubscription=new Hp(this),this.beforeStateQueue=new HN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Q_(this,{idToken:e}),r=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await La(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(Dt(this));const n=e?ke(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qN(this),n=new KN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await BN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ft(t){return ke(t)}class Hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hw(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YN(t){xl=t}function ay(t){return xl.loadJS(t)}function XN(){return xl.recaptchaEnterpriseScript}function JN(){return xl.gapiScript}function ZN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ek="recaptcha-enterprise",tk="NO_RECAPTCHA";class nk{constructor(e){this.type=ek,this.auth=Ft(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ON(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new jN(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;zp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(tk)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&zp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=XN();c.length!==0&&(c+=a),ay(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function qp(t,e,n,r=!1){const s=new nk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Du(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await qp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function rk(t,e){const n=Fd(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xa(i,e??{}))return s;ft(s,"already-initialized")}return n.initialize({options:e})}function sk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ik(t,e,n){const r=Ft(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ly(e),{host:o,port:a}=ok(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ak()}function ly(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ok(t){const e=ly(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gp(o)}}}function Gp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ak(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function lk(t,e){return Hn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ck(t,e){return to(t,"POST","/v1/accounts:signInWithPassword",$n(t,e))}/**
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
 */async function uk(t,e){return to(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}async function dk(t,e){return to(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}/**
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
 */class Ui extends bh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ui(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ui(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Du(e,n,"signInWithPassword",ck);case"emailLink":return uk(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Du(e,r,"signUpPassword",lk);case"emailLink":return dk(e,{idToken:n,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zr(t,e){return to(t,"POST","/v1/accounts:signInWithIdp",$n(t,e))}/**
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
 */const hk="http://localhost";class wr extends bh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=wh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:hk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ys(n)}return e}}/**
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
 */function fk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pk(t){const e=Ks(Qs(t)).link,n=e?Ks(Qs(e)).deep_link_id:null,r=Ks(Qs(t)).deep_link_id;return(r?Ks(Qs(r)).link:null)||r||n||e||t}class Ih{constructor(e){var n,r,s,i,o,a;const c=Ks(Qs(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,f=fk((s=c.mode)!==null&&s!==void 0?s:null);O(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=pk(e);try{return new Ih(n)}catch{return null}}}/**
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
 */class Ns{constructor(){this.providerId=Ns.PROVIDER_ID}static credential(e,n){return Ui._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ih.parseLink(n);return O(r,"argument-error"),Ui._fromEmailAndCode(e,r.code,r.tenantId)}}Ns.PROVIDER_ID="password";Ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class no extends wl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mn extends no{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
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
 */class $t extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $t.credential(n,r)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
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
 */class gn extends no{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */class vn extends no{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
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
 */async function mk(t,e){return to(t,"POST","/v1/accounts:signUp",$n(t,e))}/**
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
 */class Fa extends Wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fa(e,n,r,s)}}function cy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fa._fromErrorAndOperation(t,i,e,r):i})}async function gk(t,e,n=!1){const r=await Fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",r)}/**
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
 */async function vk(t,e,n=!1){const{auth:r}=t;if(lt(r.app))return Promise.reject(Dt(r));const s="reauthenticate";try{const i=await Fi(t,cy(r,s,e,t),n);O(i.idToken,r,"internal-error");const o=Nh(i.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),Cr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),i}}/**
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
 */async function uy(t,e,n=!1){if(lt(t.app))return Promise.reject(Dt(t));const r="signIn",s=await cy(t,r,e),i=await Cr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _k(t,e){return uy(Ft(t),e)}/**
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
 */async function dy(t){const e=Ft(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yk(t,e,n){if(lt(t.app))return Promise.reject(Dt(t));const r=Ft(t),o=await Du(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mk).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&dy(t),c}),a=await Cr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function xk(t,e,n){return lt(t.app)?Promise.reject(Dt(t)):_k(ke(t),Ns.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dy(t),r})}function wk(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function Ck(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function Ek(t,e,n,r){return ke(t).onAuthStateChanged(e,n,r)}function Sk(t){return ke(t).signOut()}const Ua="__sak";/**
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
 */const Nk=1e3,kk=10;class fy extends hy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);$N()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Nk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fy.type="LOCAL";const bk=fy;/**
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
 */function Ik(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Ik(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cl.receivers=[];/**
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
 */function Th(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Tk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Th("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Mt(){return window}function Pk(t){Mt().location.href=t}/**
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
 */function gy(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function Ak(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jk(){return gy()?self:null}/**
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
 */const vy="firebaseLocalStorageDb",Ok=1,za="firebaseLocalStorage",_y="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function El(t,e){return t.transaction([za],e?"readwrite":"readonly").objectStore(za)}function Dk(){const t=indexedDB.deleteDatabase(vy);return new ro(t).toPromise()}function Mu(){const t=indexedDB.open(vy,Ok);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(za,{keyPath:_y})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(za)?e(r):(r.close(),await Dk(),e(await Mu()))})})}async function Qp(t,e,n){const r=El(t,!0).put({[_y]:e,value:n});return new ro(r).toPromise()}async function Mk(t,e){const n=El(t,!1).get(e),r=await new ro(n).toPromise();return r===void 0?null:r.value}function Yp(t,e){const n=El(t,!0).delete(e);return new ro(n).toPromise()}const Lk=800,Fk=3;class yy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Fk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cl._getInstance(jk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ak(),!this.activeServiceWorker)return;this.sender=new Tk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mu();return await Qp(e,Ua,"1"),await Yp(e,Ua),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Mk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=El(s,!1).getAll();return new ro(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yy.type="LOCAL";const Uk=yy;new eo(3e4,6e4);/**
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
 */function Ph(t,e){return e?Xt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ah extends bh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zk(t){return uy(t.auth,new Ah(t),t.bypassAuthState)}function Vk(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),vk(n,new Ah(t),t.bypassAuthState)}async function Bk(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),gk(n,new Ah(t),t.bypassAuthState)}/**
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
 */class xy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zk;case"linkViaPopup":case"linkViaRedirect":return Bk;case"reauthViaPopup":case"reauthViaRedirect":return Vk;default:ft(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Wk=new eo(2e3,1e4);async function $k(t,e,n){if(lt(t.app))return Promise.reject(kt(t,"operation-not-supported-in-this-environment"));const r=Ft(t);H_(t,e,wl);const s=Ph(r,n);return new or(r,"signInViaPopup",e,s).executeNotNull()}class or extends xy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=Th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wk.get())};e()}}or.currentPopupAction=null;/**
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
 */const Hk="pendingRedirect",Ho=new Map;class qk extends xy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ho.get(this.auth._key());if(!e){try{const r=await Gk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ho.set(this.auth._key(),e)}return this.bypassAuthState||Ho.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gk(t,e){const n=Cy(e),r=wy(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function Kk(t,e){return wy(t)._set(Cy(e),"true")}function Qk(t,e){Ho.set(t._key(),e)}function wy(t){return Xt(t._redirectPersistence)}function Cy(t){return $o(Hk,t.config.apiKey,t.name)}/**
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
 */function Yk(t,e,n){return Xk(t,e,n)}async function Xk(t,e,n){if(lt(t.app))return Promise.reject(Dt(t));const r=Ft(t);H_(t,e,wl),await r._initializationPromise;const s=Ph(r,n);return await Kk(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function Jk(t,e){return await Ft(t)._initializationPromise,Ey(t,e,!1)}async function Ey(t,e,n=!1){if(lt(t.app))return Promise.reject(Dt(t));const r=Ft(t),s=Ph(r,e),o=await new qk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Zk=10*60*1e3;class eb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xp(e))}saveEventToCache(e){this.cachedEventUids.add(Xp(e)),this.lastProcessedEventTime=Date.now()}}function Xp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sy(t);default:return!1}}/**
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
 */async function nb(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
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
 */const rb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sb=/^https?/;async function ib(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nb(t);for(const n of e)try{if(ob(n))return}catch{}ft(t,"unauthorized-domain")}function ob(t){const e=ju(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sb.test(n))return!1;if(rb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ab=new eo(3e4,6e4);function Jp(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lb(t){return new Promise((e,n)=>{var r,s,i;function o(){Jp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jp(),n(kt(t,"network-request-failed"))},timeout:ab.get()})}if(!((s=(r=Mt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Mt().gapi)===null||i===void 0)&&i.load)o();else{const a=ZN("iframefcb");return Mt()[a]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},ay(`${JN()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw qo=null,e})}let qo=null;function cb(t){return qo=qo||lb(t),qo}/**
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
 */const ub=new eo(5e3,15e3),db="__/auth/iframe",hb="emulator/auth/iframe",fb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mb(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sh(e,hb):`https://${t.config.authDomain}/${db}`,r={apiKey:e.apiKey,appName:t.name,v:xs},s=pb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ys(r).slice(1)}`}async function gb(t){const e=await cb(t),n=Mt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:mb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),a=Mt().setTimeout(()=>{i(o)},ub.get());function c(){Mt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const vb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_b=500,yb=600,xb="_blank",wb="http://localhost";class Zp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cb(t,e,n,r=_b,s=yb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vb),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ve().toLowerCase();n&&(a=ey(u)?xb:n),J_(u)&&(e=e||wb,c.scrollbars="yes");const d=Object.entries(c).reduce((h,[v,_])=>`${h}${v}=${_},`,"");if(WN(u)&&a!=="_self")return Eb(e||"",a),new Zp(null);const f=window.open(e||"",a,d);O(f,t,"popup-blocked");try{f.focus()}catch{}return new Zp(f)}function Eb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Sb="__/auth/handler",Nb="emulator/auth/handler",kb=encodeURIComponent("fac");async function em(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:s};if(e instanceof wl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof no){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await t._getAppCheckToken(),u=c?`#${kb}=${encodeURIComponent(c)}`:"";return`${bb(t)}?${ys(a).slice(1)}${u}`}function bb({config:t}){return t.emulator?Sh(t,Nb):`https://${t.authDomain}/${Sb}`}/**
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
 */const _c="webStorageSupport";class Ib{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=my,this._completeRedirectFn=Ey,this._overrideRedirectResult=Qk}async _openPopup(e,n,r,s){var i;an((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await em(e,n,r,ju(),s);return Cb(e,o,Th())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await em(e,n,r,ju(),s);return Pk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(an(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gb(e),r=new eb(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_c,{type:_c},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[_c];o!==void 0&&n(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ib(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iy()||Z_()||kh()}}const Tb=Ib;var tm="@firebase/auth",nm="1.7.9";/**
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
 */class Pb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ab(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rb(t){ls(new vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oy(t)},u=new QN(r,s,i,c);return sk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ls(new vr("auth-internal",e=>{const n=Ft(e.getProvider("auth").getImmediate());return(r=>new Pb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(tm,nm,Ab(t)),An(tm,nm,"esm2017")}/**
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
 */const jb=5*60,Ob=Ev("authIdTokenMaxAge")||jb;let rm=null;const Db=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ob)return;const s=n==null?void 0:n.token;rm!==s&&(rm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mb(t=Tv()){const e=Fd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rk(t,{popupRedirectResolver:Tb,persistence:[Uk,bk,my]}),r=Ev("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Db(i.toString());Ck(n,o,()=>o(n.currentUser)),wk(n,a=>o(a))}}const s=wv("auth");return s&&ik(n,`http://${s}`),n}function Lb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}YN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=kt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Lb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rb("Browser");var Fb="firebase",Ub="10.14.1";/**
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
 */An(Fb,Ub,"app");const zb={apiKey:"AIzaSyDJM-VHPdo2ipOFEecEFjxo5W_FQuQ3BAk",authDomain:"vistta-2e1df.firebaseapp.com",databaseURL:"https://vistta-2e1df-default-rtdb.firebaseio.com",projectId:"vistta-2e1df",storageBucket:"vistta-2e1df.firebasestorage.app",messagingSenderId:"13458811244",appId:"1:13458811244:web:e3517470970e9a45142b49",measurementId:"G-TJLG0CPZQM"},Ny=Iv(zb),tr=Mb(Ny),Y=yN(Ny),se=t=>Number(t||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),ur=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],ky=I.createContext(null),pt=()=>{const t=I.useContext(ky);if(!t)throw new Error("useAppContext deve ser usado dentro de um AppProvider");return t},Vb=({children:t})=>{const[e,n]=I.useState(null),[r,s]=I.useState(!0),[i,o]=I.useState(null),[a,c]=I.useState(null),[u,d]=I.useState(null),[f,h]=I.useState(null),[v,_]=I.useState("dashboard"),[x,C]=I.useState(""),[p,m]=I.useState([]),[g,y]=I.useState([]),[k,w]=I.useState([]),[N,T]=I.useState([]),[q,L]=I.useState([]),[Ye,qn]=I.useState([]),[Gn,oo]=I.useState([]),[Il,ks]=I.useState([]),[bs,P]=I.useState([]),[D,M]=I.useState([]),[ae,ge]=I.useState([]),[Ut,Tt]=I.useState(""),[Ir,zt]=I.useState("Pix"),[Kn,jh]=I.useState(0),mt=I.useMemo(()=>q.find(b=>b.status==="aberto"),[q]),Oh=I.useMemo(()=>mt?N.filter(b=>b.caixaId===mt.id):[],[N,mt]),Tl=I.useMemo(()=>Oh.reduce((b,R)=>b+(R.total||0),0),[Oh]),Is=()=>{if(!e)throw new Error("Usuário não autenticado. Entre novamente.");if(!a)throw new Error("Empresa não identificada.");return a},Dy=async b=>{const R=b.trim();if(!e)throw new Error("Usuário não autenticado.");if(!R)throw new Error("Informe o nome da ótica.");if(a)return;const J=Bs(Q(Y,"empresas"));if(!J.key)throw new Error("Não foi possível criar a empresa.");await Bt(Q(Y,`empresas/${J.key}/info`),{nome:R,criadoEm:new Date().toISOString(),criadoPor:e.uid}),await Bt(Q(Y,`users/${e.uid}`),{empresaId:J.key,role:"admin",email:e.email||""})},Ts=async(b,R,J)=>{const H=`empresas/${Is()}/${b}`;if(J){await Bt(Q(Y,`${H}/${J}`),R);return}const be=Bs(Q(Y,H));await Bt(Q(Y,`${H}/${be.key}`),R)},Pl=async(b,R)=>{const J=Is();await sN(Q(Y,`empresas/${J}/${b}/${R}`))};I.useEffect(()=>{let b,R;const J=()=>{b==null||b(),b=void 0,R&&clearTimeout(R),R=void 0},pe=Ek(tr,H=>{J(),H?(h(null),R=setTimeout(()=>{console.error("Tempo excedido ao carregar o perfil do usuário."),n(H),s(!1)},1e4),b=Au(Q(Y,`users/${H.uid}`),be=>{const de=be.val();c((de==null?void 0:de.empresaId)||null),o((de==null?void 0:de.role)||null),de!=null&&de.empresaId?Pu(Q(Y,`empresas/${de.empresaId}/info`)).then(gt=>{d(gt.exists()?gt.val():null)}).catch(gt=>{console.error("Não foi possível carregar os dados da empresa:",gt),h("Não foi possível carregar os dados da empresa.")}):d(null),n(H),s(!1),J()},be=>{console.error("Não foi possível carregar o perfil do usuário:",be),c(null),o(null),n(H),s(!1),J()})):(n(null),c(null),o(null),d(null),h(null),s(!1))});return()=>{J(),pe()}},[]),I.useEffect(()=>{if(!a)return;const b=`empresas/${a}`,R=new Date;R.setDate(1),R.setHours(0,0,0,0);const J=[{name:"produtos",setter:y,queryRef:Q(Y,`${b}/produtos`)},{name:"clientes",setter:w,queryRef:Q(Y,`${b}/clientes`)},{name:"fornecedores",setter:ks,queryRef:Q(Y,`${b}/fornecedores`)},{name:"contas",setter:P,queryRef:Q(Y,`${b}/contas`)},{name:"categorias",setter:M,queryRef:Q(Y,`${b}/categorias`)},{name:"usuarios",setter:ge,queryRef:Q(Y,`${b}/usuarios`)},{name:"orcamentos",setter:qn,queryRef:Q(Y,`${b}/orcamentos`)},{name:"ordensServico",setter:oo,queryRef:Q(Y,`${b}/ordensServico`)},{name:"vendas",setter:T,queryRef:Fp(Q(Y,`${b}/vendas`),dN("data"),aN(R.toISOString()))},{name:"caixas",setter:L,queryRef:Fp(Q(Y,`${b}/caixas`),cN(100))}];h(null);const pe=J.map(H=>Au(H.queryRef,be=>{const de=[];be.forEach(gt=>{const Qn=gt.val(),Yn=Qn&&typeof Qn=="object"?{id:gt.key,...Qn}:{id:gt.key,value:Qn};H.name==="caixas"&&(Yn.lancamentos=ur(Yn.lancamentos)),de.push(Yn)}),H.setter(de)},be=>{console.error(`Erro ao carregar ${H.name}:`,be),h(`Não foi possível carregar ${H.name}. Verifique as regras do Firebase.`)}));return()=>pe.forEach(H=>H())},[a]);const My=b=>{m(R=>{const J=R.findIndex(pe=>pe.id===b.id);if(J>-1){const pe=[...R];return pe[J].qtd=Math.min(pe[J].qtd+1,Number(b.qtd)),pe}return[...R,{...b,qtd:1}]})},Ly=b=>m(R=>R.filter(J=>J.id!==b)),Fy=async b=>{if(mt)throw new Error("Já existe um caixa aberto.");if(!Number.isFinite(b)||b<0)throw new Error("Informe um valor inicial válido.");await Ts("caixas",{dataAbertura:new Date().toISOString(),valorInicial:b,status:"aberto",operador:(e==null?void 0:e.email)||(e==null?void 0:e.uid)||"Operador"})},Uy=async()=>{const b=mt;if(!b)throw new Error("Nenhum caixa aberto.");const R=ur(b.lancamentos).reduce((J,pe)=>J+(pe.tipo==="entrada"?Number(pe.valor):-Number(pe.valor)),0);await Bt(Q(Y,`empresas/${Is()}/caixas/${b.id}`),{status:"fechado",dataFechamento:new Date().toISOString(),totalVendas:Tl,valorFinal:Number(b.valorInicial||0)+Tl+R})},zy=(b,R)=>Ts("produtos",b,R),Vy=b=>Pl("produtos",b),By=(b,R)=>Ts("clientes",b,R),Wy=b=>Pl("clientes",b),$y=(b,R,J)=>Ts(b,R,J),Hy=(b,R)=>Pl(b,R),Dh=(b,R)=>Ts("ordensServico",b,R),qy={user:e,loadingAuth:r,userRole:i,empresaId:a,dadosEmpresa:u,databaseError:f,configurarOtica:Dy,produtos:g,clientes:k,vendas:N,caixas:q,orcamentos:Ye,ordensServico:Gn,carrinho:p,fornecedores:Il,contas:bs,categorias:D,usuarios:ae,activeTab:v,setActiveTab:_,pdvSearch:x,setPdvSearch:C,abrirCaixa:Fy,fecharCaixa:Uy,salvarProduto:zy,excluirProduto:Vy,salvarCliente:By,excluirCliente:Wy,salvarCadastro:$y,excluirCadastro:Hy,salvarOrdemServico:Dh,converterOrcamentoParaOs:async b=>{await Dh({clienteId:b.cliId,orcamentoId:b.id,itens:ur(b.itens).map(R=>({produtoId:R.id,descricao:`${R.marca||""} ${R.modelo||""}`.trim(),qtd:Number(R.qtd)||1,valor:Number(R.venda)||0,tratamento:""})),status:"aguardando_montagem",criadoEm:new Date().toISOString(),atualizadoEm:new Date().toISOString()}),await Bt(Q(Y,`empresas/${Is()}/orcamentos/${b.id}`),{status:"aprovado"})},registrarLancamentoCaixa:async b=>{const R=mt;if(!R)throw new Error("Abra o caixa antes de registrar um lançamento.");if(!Number.isFinite(b.valor)||b.valor<=0)throw new Error("Informe um valor válido.");await Bs(Q(Y,`empresas/${Is()}/caixas/${R.id}/lancamentos`),{...b,data:new Date().toISOString(),operador:(e==null?void 0:e.email)||(e==null?void 0:e.uid)||"Operador"})},addToCart:My,removeFromCart:Ly,finalizarVenda:async(b=!1)=>{if(p.length===0||!a)return alert("Carrinho vazio!");if(!b&&!mt)return alert("Abra o caixa primeiro!");let R=p.reduce((H,be)=>H+Number(be.venda)*be.qtd,0),J=p.reduce((H,be)=>H+Number(be.custo)*be.qtd,0),pe=Math.max(0,Number(Kn)||0);pe=Math.min(pe,R);try{if(b){if(!Ut)return alert("Selecione um cliente para salvar o orçamento!");await Bs(Q(Y,`empresas/${a}/orcamentos`),{cliId:Ut,subtotal:R,desconto:pe,total:R-pe,itens:p.map(H=>({id:H.id,marca:H.marca,modelo:H.modelo,qtd:H.qtd,venda:H.venda})),data:new Date().toISOString(),status:"pendente"})}else{const H=p.map(async de=>{const gt=Q(Y,`empresas/${a}/produtos/${de.id}/qtd`),Qn=await Pu(gt),Yn=Number(Qn.val());if(!Qn.exists()||!Number.isFinite(Yn)||Yn<de.qtd)throw new Error(`Estoque insuficiente para ${de.marca} ${de.modelo}.`);const Al=await EN(gt,ao=>{if(ao===null)return ao;const Mh=Number(ao)-de.qtd;return Mh>=0?Mh:ao}),Gy=Number(Al.snapshot.val());if(!Al.committed||Gy!==Yn-de.qtd)throw new Error(`Não foi possível reservar o estoque de ${de.marca} ${de.modelo}.`);return Al});await Promise.all(H);const be=Bs(Q(Y,`empresas/${a}/vendas`));await Bt(Q(Y,`empresas/${a}/vendas/${be.key}`),{cliId:Ut,pag:Ir,subtotal:R,desconto:pe,total:R-pe,custoBase:J,itens:p.length,data:new Date().toISOString(),caixaId:mt==null?void 0:mt.id})}m([]),jh(0),Tt(""),alert(b?"Orçamento salvo!":"Venda concluída com sucesso!")}catch(H){alert("Erro ao finalizar: "+H.message)}},caixaAberto:mt,totalVendasCaixa:Tl,pdvCliente:Ut,setPdvCliente:Tt,pdvDesconto:Kn,setPdvDesconto:jh,pdvPagamento:Ir,setPdvPagamento:zt};return l.jsx(ky.Provider,{value:qy,children:t})};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=(t,e)=>{const n=I.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:a="",children:c,...u},d)=>I.createElement("svg",{ref:d,...Bb,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${Wb(t)}`,a].join(" "),...u},[...e.map(([f,h])=>I.createElement(f,h)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=F("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=F("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=F("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=F("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=F("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=F("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=F("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=F("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=F("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=F("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=F("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=F("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=F("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=F("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=F("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=F("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=F("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=F("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nI=F("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=F("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rI=F("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=F("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iI=F("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=F("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=F("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=F("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=F("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=F("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=F("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lI=F("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cI=F("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=F("Tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
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
 */const Ay=F("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dI=F("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=F("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=F("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=F("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Ht({title:t,value:e,subtitle:n,icon:r,bg:s="bg-white dark:bg-slate-800",color:i="text-slate-900 dark:text-white",border:o="border-slate-100 dark:border-slate-700"}){return l.jsxs("div",{className:`p-6 rounded-3xl border shadow-sm ${s} ${o}`,children:[l.jsx("div",{className:"flex items-start justify-between mb-4",children:l.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center ${s==="bg-white dark:bg-slate-800"?"bg-indigo-50 text-[#4A3AFF]":i.replace("text-","bg-").replace("500","100")+" "+i}`,children:l.jsx(r,{size:24})})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-1",children:t}),l.jsx("div",{className:`text-2xl font-black ${i}`,children:e}),n&&l.jsx("p",{className:"text-[12px] font-medium text-slate-400 mt-1",children:n})]})]})}function bl({open:t,onClose:e,title:n,width:r="max-w-md",children:s}){return t?l.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4",children:l.jsxs("div",{className:`bg-white rounded-[32px] w-full ${r} shadow-2xl flex flex-col max-h-[90vh] animate-fade-in`,children:[l.jsxs("div",{className:"flex justify-between items-center p-6 border-b border-slate-100",children:[l.jsx("h2",{className:"text-xl font-bold text-slate-800",children:n}),l.jsx("button",{onClick:e,className:"p-2 bg-slate-100 rounded-full text-slate-500 hover:text-rose-500 transition-colors",children:l.jsx(jy,{size:20})})]}),l.jsx("div",{className:"overflow-y-auto custom-scrollbar p-6",children:s})]})}):null}function Oy({className:t="",solidWhite:e=!1}){const n=e?"currentColor":"white",r=e?"currentColor":"#a094ff";return l.jsxs("svg",{viewBox:"0 0 120 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:[l.jsxs("g",{stroke:n,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"38",cy:"36",r:"14"}),l.jsx("path",{d:"M 28 26 Q 16 12 10 22"})]}),l.jsxs("g",{stroke:r,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"82",cy:"36",r:"14"}),l.jsx("path",{d:"M 92 26 Q 104 12 110 22"}),l.jsx("path",{d:"M 52 36 Q 60 28 68 36"})]})]})}function st({icon:t,label:e,active:n,onClick:r,badge:s,badgeColor:i}){return l.jsxs("button",{onClick:r,className:`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${n?"bg-indigo-50 text-[#4A3AFF] font-bold":"text-slate-500 hover:bg-slate-100 font-medium"}`,children:[l.jsxs("div",{className:"flex items-center",children:[l.jsx(t,{size:20,className:`mr-3 ${n?"text-[#4A3AFF]":"text-slate-400"}`}),e]}),s&&l.jsx("span",{className:`px-2 py-0.5 rounded-lg text-[11px] font-bold ${i}`,children:s})]})}function To({label:t}){return l.jsx("div",{className:"px-4 py-2 mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:t})}function hI(){var a,c;const{activeTab:t,setActiveTab:e,caixaAberto:n,orcamentos:r,userRole:s,dadosEmpresa:i,user:o}=pt();return l.jsxs("aside",{className:"hidden md:flex flex-col w-[270px] bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700/50 z-20 shadow-sm",children:[l.jsxs("div",{className:"h-[80px] flex items-center px-6 border-b border-slate-100 dark:border-slate-700/50 flex-shrink-0",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#4A3AFF] text-white flex items-center justify-center mr-3",children:l.jsx(Oy,{className:"w-7",solidWhite:!0})}),l.jsx("span",{className:"font-bold text-[18px] text-slate-900 dark:text-white truncate",title:i==null?void 0:i.nome,children:(i==null?void 0:i.nome)||"Minha Ótica"})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar",children:[l.jsx(st,{icon:Iy,label:"Dashboard",active:t==="dashboard",onClick:()=>e("dashboard")}),l.jsx(To,{label:"Operação"}),l.jsx(st,{icon:Ry,label:"Caixa Diário",active:t==="caixa",onClick:()=>e("caixa"),badge:n?"Aberto":"Fechado",badgeColor:n?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-500"}),l.jsx(st,{icon:Rh,label:"PDV",active:t==="vendas",onClick:()=>e("vendas")}),l.jsx(st,{icon:Fu,label:"Orçamentos",active:t==="orcamentos",onClick:()=>e("orcamentos"),badge:r.filter(u=>u.status==="pendente").length||null,badgeColor:"bg-amber-100 text-amber-700"}),l.jsx(st,{icon:Fu,label:"Ordens de Serviço",active:t==="ordens",onClick:()=>e("ordens")}),l.jsx(To,{label:"Cadastros"}),l.jsx(st,{icon:Sl,label:"Estoque",active:t==="estoque",onClick:()=>e("estoque")}),l.jsx(st,{icon:io,label:"Clientes",active:t==="clientes",onClick:()=>e("clientes")}),l.jsx(st,{icon:uI,label:"Categorias",active:t==="categorias",onClick:()=>e("categorias")}),s==="admin"&&l.jsxs(l.Fragment,{children:[l.jsx(To,{label:"Gestão (Admin)"}),l.jsx(st,{icon:Va,label:"DRE Financeiro",active:t==="financeiro",onClick:()=>e("financeiro")}),l.jsx(st,{icon:Lu,label:"Contas",active:t==="contas",onClick:()=>e("contas")}),l.jsx(st,{icon:dI,label:"Usuários",active:t==="usuarios",onClick:()=>e("usuarios")})]}),l.jsx(To,{label:"Suporte"}),l.jsx(st,{icon:Yb,label:"Ajuda e Treinamento",active:t==="ajuda",onClick:()=>e("ajuda")})]}),l.jsxs("div",{className:"p-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center min-w-0",children:[l.jsx("div",{className:"w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-[#4A3AFF] flex items-center justify-center font-bold mr-3",children:((a=o==null?void 0:o.email)==null?void 0:a.charAt(0).toUpperCase())||"U"}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"text-sm font-bold truncate text-slate-900 dark:text-white",children:((c=o==null?void 0:o.email)==null?void 0:c.split("@")[0])||"Usuário"}),l.jsx("div",{className:"text-[10px] text-slate-500 font-bold uppercase",children:s==="admin"?"Administrador":"Vendedor"})]})]}),l.jsx("button",{onClick:()=>Sk(tr).catch(u=>console.error("Não foi possível sair:",u)),className:"text-slate-400 hover:text-rose-500",title:"Sair",children:l.jsx(nI,{size:18})})]})]})}function fI(){const[t,e]=I.useState("login"),[n,r]=I.useState(!1),[s,i]=I.useState(""),[o,a]=I.useState(""),[c,u]=I.useState(""),[d,f]=I.useState(""),[h,v]=I.useState(!1),[_,x]=I.useState(!0),[C,p]=I.useState(!1),m=async w=>{const N=Q(Y,`users/${w.uid}`);(await Pu(N)).exists()||await Bt(N,{role:"admin",email:w.email||"",nome:w.displayName||""})};I.useEffect(()=>{let w=!0;return(async()=>{try{const T=await Jk(tr);if(!T||!w)return;r(!0),await m(T.user)}catch(T){w&&f(k(T))}finally{w&&r(!1)}})(),()=>{w=!1}},[]);const g=async w=>{w.preventDefault(),f(""),r(!0);try{if(t==="login")await xk(tr,s,o);else{if(o.length<6)throw new Error("A senha deve ter pelo menos 6 caracteres.");if(o!==c)throw new Error("As senhas não conferem.");if(!C)throw new Error("Aceite os Termos de Uso e a Política de Privacidade para continuar.");const N=await yk(tr,s,o);try{await Bt(Q(Y,`users/${N.user.uid}`),{role:"admin",email:s,nome:""})}catch{await N.user.delete(),f("Falha ao registrar empresa no banco.")}}}catch(N){f((N==null?void 0:N.message)||(t==="login"?"E-mail ou senha incorretos.":"Erro ao autenticar."))}finally{r(!1)}},y=async()=>{f(""),r(!0);const w=new $t;try{const N=await $k(tr,w);await m(N.user)}catch(N){if((N==null?void 0:N.code)==="auth/popup-blocked"||(N==null?void 0:N.code)==="auth/cancelled-popup-request")try{await Yk(tr,w);return}catch(T){f(k(T))}else f(k(N))}finally{r(!1)}};function k(w){return(w==null?void 0:w.code)==="auth/unauthorized-domain"?`Domínio não autorizado: ${window.location.hostname}. No Firebase Console, abra Authentication > Settings > Authorized domains e adicione este domínio.`:(w==null?void 0:w.code)==="auth/popup-blocked"?"O pop-up foi bloqueado. O login será redirecionado.":(w==null?void 0:w.code)==="auth/popup-closed-by-user"?"O login do Google foi cancelado.":(w==null?void 0:w.code)==="auth/operation-not-allowed"?"O provedor Google não está ativado no Firebase Authentication.":`Não foi possível entrar com Google: ${(w==null?void 0:w.message)||"erro desconhecido."}`}return l.jsxs("div",{className:"flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans overflow-hidden",children:[l.jsxs("div",{className:"hidden lg:flex w-[55%] bg-[#120D38] flex-col items-center justify-center p-12 text-white relative",children:[l.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#3b2b9a] rounded-full blur-[140px] opacity-60"}),l.jsx("div",{className:"absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#21146c] rounded-full blur-[140px] opacity-60"}),l.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center w-full max-w-2xl",children:[l.jsxs("div",{className:"mb-10 flex flex-col items-center",children:[l.jsx(Oy,{className:"w-36 h-auto mb-4 drop-shadow-2xl",solidWhite:!1}),l.jsx("h1",{className:"text-[56px] font-bold tracking-[0.2em] leading-none mb-3 text-white",children:"VISTTA"}),l.jsx("p",{className:"text-[#a094ff] tracking-[0.35em] text-[11px] uppercase font-semibold",children:"Gestão Inteligente para Óticas"}),l.jsx("div",{className:"w-12 h-[2px] bg-[#6552ff] mt-8 rounded-full"})]}),l.jsx("h2",{className:"text-[40px] font-normal mb-1 tracking-tight text-white/90",children:"Sua ótica. Uma plataforma."}),l.jsx("h2",{className:"text-[42px] font-bold text-[#7b66ff] mb-6 tracking-tight",children:"Mais controle."}),l.jsxs("div",{className:"flex items-start justify-center gap-8 mb-10 w-full",children:[l.jsxs("div",{className:"flex flex-col items-center flex-1 max-w-[180px]",children:[l.jsx(lI,{size:36,className:"text-[#7b66ff] mb-4"}),l.jsx("h3",{className:"text-[13px] font-semibold mb-2 text-white/90",children:"Gestão Multi-Loja"})]}),l.jsx("div",{className:"w-px h-24 bg-indigo-500/20 mt-4"}),l.jsxs("div",{className:"flex flex-col items-center flex-1 max-w-[180px]",children:[l.jsx(aI,{size:36,className:"text-[#7b66ff] mb-4"}),l.jsx("h3",{className:"text-[13px] font-semibold mb-2 text-white/90",children:"Estoque em tempo real"})]})]})]})]}),l.jsx("div",{className:"flex-1 lg:w-[45%] bg-[#F8FAFC] dark:bg-slate-900 flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-y-auto custom-scrollbar",children:l.jsx("div",{className:"w-full max-w-[460px]",children:l.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-100 p-8 sm:p-10 mb-8 w-full",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("h2",{className:"text-[26px] font-bold mb-2",children:t==="login"?"Bem-vindo de volta!":"Crie sua conta"}),t==="register"&&l.jsx("p",{className:"text-[15px] text-slate-500",children:"Comece a gerenciar sua ótica de forma inteligente."})]}),l.jsxs("form",{onSubmit:g,className:"space-y-5",children:[d&&l.jsxs("div",{className:"bg-rose-50 text-rose-600 p-3.5 rounded-xl text-sm font-bold flex gap-3 border border-rose-100",children:[l.jsx(Ay,{size:18}),l.jsx("span",{children:d})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"E-mail"}),l.jsxs("div",{className:"relative",children:[l.jsx(Ty,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),l.jsx("input",{type:"email",required:!0,value:s,onChange:w=>i(w.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Seu e-mail"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"Senha"}),l.jsxs("div",{className:"relative",children:[l.jsx(zi,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),l.jsx("input",{type:h?"text":"password",required:!0,value:o,onChange:w=>a(w.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-12 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Sua senha"}),l.jsx("button",{type:"button",onClick:()=>v(!h),className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-400",children:h?l.jsx(Jb,{size:18}):l.jsx(Zb,{size:18})})]})]}),t==="register"&&l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"Confirmar senha"}),l.jsxs("div",{className:"relative",children:[l.jsx(zi,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),l.jsx("input",{type:h?"text":"password",required:!0,value:c,onChange:w=>u(w.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Confirme sua senha"})]})]}),t==="register"&&l.jsxs("label",{className:"flex items-start gap-2 text-[13px] text-slate-500",children:[l.jsx("input",{type:"checkbox",checked:C,onChange:w=>p(w.target.checked),className:"mt-0.5 h-4 w-4 accent-[#5235ff]"}),l.jsxs("span",{children:["Aceito os ",l.jsx("a",{href:"#termos",className:"font-semibold text-[#5235ff] hover:underline",children:"Termos de Uso"})," e a ",l.jsx("a",{href:"#privacidade",className:"font-semibold text-[#5235ff] hover:underline",children:"Política de Privacidade"}),"."]})]}),l.jsx("button",{type:"submit",disabled:n,className:"w-full bg-[#5235ff] hover:bg-[#4323ec] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-4",children:n?"Aguarde...":t==="login"?"Entrar":"Criar minha conta"}),l.jsxs("div",{className:"my-5 flex items-center gap-3",children:[l.jsx("div",{className:"h-px flex-1 bg-slate-200"}),l.jsx("span",{className:"text-xs font-medium text-slate-400",children:"ou"}),l.jsx("div",{className:"h-px flex-1 bg-slate-200"})]}),l.jsxs("button",{type:"button",onClick:y,disabled:n,className:"w-full border border-slate-200 bg-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 mt-4 text-slate-700 hover:bg-slate-50 disabled:opacity-60",children:[l.jsxs("svg",{className:"h-5 w-5",viewBox:"0 0 24 24","aria-hidden":"true",children:[l.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),l.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),l.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),l.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Continuar com Google"]}),l.jsx("div",{className:"text-center mt-6",children:l.jsx("button",{type:"button",onClick:()=>e(t==="login"?"register":"login"),className:"text-sm font-bold text-[#5235ff] hover:underline",children:t==="login"?"Criar uma conta":"Fazer login"})})]})]})})})]})}function pI(){const{produtos:t,vendas:e,clientes:n,setActiveTab:r}=pt();return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsx("div",{className:"mb-8",children:l.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Painel Geral"})}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6",children:[l.jsx(Ht,{title:"Estoque Total",value:t.reduce((s,i)=>s+Number(i.qtd),0),subtitle:"unidades ativas",icon:Sl}),l.jsx(Ht,{title:"Vendas do Mês",value:se(e.reduce((s,i)=>s+(i.total||0),0)),icon:Va,color:"text-emerald-500"}),l.jsx(Ht,{title:"Clientes Base",value:n.length,icon:io}),l.jsx(Ht,{title:"Estoque Crítico",value:t.filter(s=>Number(s.qtd)<Number(s.min)).length,icon:Ay,bg:"bg-rose-50",color:"text-rose-500"})]})]})}function mI(){const{caixaAberto:t,pdvSearch:e,setPdvSearch:n,carrinho:r,addToCart:s,removeFromCart:i,pdvCliente:o,setPdvCliente:a,clientes:c,pdvDesconto:u,setPdvDesconto:d,pdvPagamento:f,setPdvPagamento:h,finalizarVenda:v,setActiveTab:_,produtos:x}=pt(),[C,p]=I.useState("produtos"),m=x.filter(g=>Number(g.qtd)>0&&((g.marca||"").toLowerCase().includes(e.toLowerCase())||(g.modelo||"").toLowerCase().includes(e.toLowerCase())||(g.codigo||"").toLowerCase().includes(e.toLowerCase())));return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsx("div",{className:"mb-6 flex justify-between items-end",children:l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Ponto de Venda"}),t?l.jsx("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold",children:"Caixa Aberto"}):l.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-xs font-bold",children:[l.jsx(zi,{size:12})," Caixa Fechado"]})]})}),t?l.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row gap-6",children:[l.jsxs("div",{className:"lg:w-[60%] bg-white rounded-3xl border border-slate-100 p-6 flex flex-col",children:[l.jsxs("div",{className:"relative mb-6",children:[l.jsx(Py,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:18}),l.jsx("input",{type:"text",placeholder:"Buscar por marca, modelo ou código...",value:e,onChange:g=>n(g.target.value),className:"w-full bg-slate-50 border rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:border-[#4A3AFF]"})]}),l.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5",children:m.map(g=>l.jsxs("div",{onClick:()=>s(g),className:"bg-slate-50 border rounded-2xl p-5 cursor-pointer hover:border-[#4A3AFF] transition-all flex flex-col group",children:[l.jsx("div",{className:"text-[11px] text-slate-400 font-mono mb-2",children:g.codigo}),l.jsxs("div",{className:"font-bold text-[15px] group-hover:text-[#4A3AFF]",children:[g.marca," ",g.modelo]}),l.jsx("div",{className:"text-[12px] text-slate-500 mb-4",children:g.categoria}),l.jsxs("div",{className:"mt-auto flex justify-between items-end",children:[l.jsx("span",{className:"font-extrabold text-emerald-600 text-lg",children:se(g.venda)}),l.jsxs("span",{className:"text-[11px] bg-white px-2 py-1 rounded-lg font-bold",children:["Est: ",g.qtd]})]})]},g.id))})]}),l.jsxs("div",{className:"lg:w-[40%] bg-white rounded-3xl border border-slate-100 p-6 flex flex-col",children:[l.jsx("h3",{className:"font-bold text-xl mb-5",children:"Carrinho"}),l.jsxs("div",{className:"mb-5",children:[l.jsx("label",{className:"block text-[12px] font-bold text-slate-500 uppercase mb-2",children:"Cliente Vinculado"}),l.jsxs("select",{value:o,onChange:g=>a(g.target.value),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]",children:[l.jsx("option",{value:"",children:"Consumidor Final (Balcão)"}),c.map(g=>l.jsx("option",{value:g.id,children:g.nome},g.id))]})]}),l.jsx("div",{className:"flex-1 overflow-y-auto space-y-3 mb-6 p-3 bg-slate-50 rounded-2xl border",children:r.map(g=>l.jsxs("div",{className:"flex justify-between items-center p-4 bg-white border rounded-xl",children:[l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"font-bold text-[14px]",children:[g.marca," ",g.modelo]}),l.jsxs("div",{className:"text-[12px] text-slate-500 mt-1",children:[l.jsxs("span",{className:"font-bold px-1.5 py-0.5 bg-slate-100 rounded mr-1",children:[g.qtd,"x"]})," ",se(g.venda)]})]}),l.jsx("div",{className:"font-extrabold text-[15px] mr-3",children:se(Number(g.venda)*g.qtd)}),l.jsx("button",{onClick:()=>i(g.id),className:"text-slate-300 hover:text-rose-500",children:l.jsx(jy,{size:18})})]},g.id))}),l.jsxs("div",{className:"pt-5 border-t",children:[l.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-bold text-slate-400 uppercase mb-2",children:"Desc (R$)"}),l.jsx("input",{type:"number",min:"0",value:u,onChange:g=>d(Number(g.target.value)),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-bold text-slate-400 uppercase mb-2",children:"Pagamento"}),l.jsxs("select",{value:f,onChange:g=>h(g.target.value),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]",children:[l.jsx("option",{children:"Pix"}),l.jsx("option",{children:"Crédito"}),l.jsx("option",{children:"Débito"}),l.jsx("option",{children:"Dinheiro"})]})]})]}),l.jsxs("div",{className:"flex justify-between items-end mb-6",children:[l.jsx("span",{className:"font-bold text-slate-500 text-[15px]",children:"Total Geral"}),l.jsx("span",{className:"text-4xl font-black text-[#4A3AFF]",children:se(Math.max(0,r.reduce((g,y)=>g+Number(y.venda)*y.qtd,0)-(Number(u)||0)))})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsxs("button",{onClick:()=>v(!0),className:"w-full border-2 border-slate-200 py-3.5 rounded-xl font-bold flex items-center justify-center",children:[l.jsx(Fu,{size:18,className:"mr-2"})," Orçamento"]}),l.jsxs("button",{onClick:()=>v(!1),className:"w-full bg-[#4A3AFF] text-white py-3.5 rounded-xl font-bold flex items-center justify-center",children:[l.jsx(Kb,{size:18,className:"mr-2"})," Vender"]})]})]})]})]}):l.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center",children:[l.jsx("div",{className:"w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-6",children:l.jsx(zi,{className:"w-10 h-10"})}),l.jsx("h2",{className:"text-2xl font-bold mb-3",children:"O Caixa está Fechado"}),l.jsx("p",{className:"text-slate-500 mb-8 max-w-md",children:"Para garantir a segurança financeira, é obrigatório abrir o caixa do dia antes de registrar qualquer venda."}),l.jsx("button",{onClick:()=>_("caixa"),className:"bg-[#4A3AFF] text-white px-8 py-3.5 rounded-xl font-bold",children:"Ir para o Controle de Caixa"})]})]})}function gI(){const{caixaAberto:t,totalVendasCaixa:e,caixas:n,abrirCaixa:r,fecharCaixa:s,registrarLancamentoCaixa:i}=pt(),[o,a]=I.useState("0"),[c,u]=I.useState(!1),[d,f]=I.useState({tipo:"saida",descricao:"",valor:""}),h=async _=>{u(!0);try{await _()}catch(x){alert(x.message||"Não foi possível atualizar o caixa.")}finally{u(!1)}},v=ur(t==null?void 0:t.lancamentos).reduce((_,x)=>_+(x.tipo==="entrada"?Number(x.valor):-Number(x.valor)),0);return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Caixa Diário"}),l.jsx("p",{className:"text-slate-500",children:"Abertura e fechamento de caixa para o PDV."})]}),t?l.jsx("button",{disabled:c,onClick:()=>h(s),className:"bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60",children:"Fechar Caixa"}):l.jsx("button",{disabled:c,onClick:()=>{const _=Number(o.replace(",","."));h(()=>r(_))},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60",children:"Abrir Caixa"})]}),t?l.jsxs("div",{className:"bg-white rounded-3xl p-8 mb-10 flex justify-between items-center shadow-sm border border-slate-100",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-emerald-500 font-bold uppercase text-xs mb-2",children:"Caixa Aberto"}),l.jsxs("p",{className:"text-slate-500",children:["Operador: ",l.jsx("span",{className:"font-bold text-slate-900",children:t.operador})]})]}),l.jsxs("div",{className:"flex gap-10",children:[l.jsxs("div",{className:"text-right",children:[l.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Fundo Inicial"}),l.jsx("p",{className:"text-2xl font-bold",children:se(t.valorInicial)})]}),l.jsxs("div",{className:"text-right",children:[l.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Vendas no Caixa"}),l.jsxs("p",{className:"text-2xl font-bold text-emerald-500",children:["+ ",se(e)]})]}),l.jsxs("div",{className:"text-right pl-10 border-l border-slate-100",children:[l.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Saldo Atual"}),l.jsx("p",{className:"text-4xl font-extrabold text-[#4A3AFF]",children:se((t.valorInicial||0)+e+v)})]})]}),l.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-100",children:[l.jsx("h3",{className:"font-bold mb-3",children:"Lançamento de caixa"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-3",children:[l.jsxs("select",{value:d.tipo,onChange:_=>f({...d,tipo:_.target.value}),className:"rounded-xl border border-slate-200 px-3 py-3",children:[l.jsx("option",{value:"entrada",children:"Entrada"}),l.jsx("option",{value:"saida",children:"Saída"}),l.jsx("option",{value:"sangria",children:"Sangria"})]}),l.jsx("input",{placeholder:"Descrição",value:d.descricao,onChange:_=>f({...d,descricao:_.target.value}),className:"rounded-xl border border-slate-200 px-3 py-3 sm:col-span-2"}),l.jsx("input",{type:"number",min:"0.01",step:"0.01",placeholder:"Valor",value:d.valor,onChange:_=>f({...d,valor:_.target.value}),className:"rounded-xl border border-slate-200 px-3 py-3"})]}),l.jsxs("button",{onClick:()=>h(async()=>{await i({tipo:d.tipo,descricao:d.descricao,valor:Number(d.valor)}),f({tipo:"saida",descricao:"",valor:""})}),className:"mt-3 text-sm font-bold text-[#4A3AFF] flex items-center gap-2",children:[l.jsx(Xb,{size:17})," Registrar lançamento"]})]})]}):l.jsxs("div",{className:"border-2 border-dashed border-slate-200 rounded-3xl p-16 mb-10 text-center flex flex-col items-center",children:[l.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 mb-5 shadow-sm border",children:l.jsx(zi,{size:24})}),l.jsx("h3",{className:"text-2xl font-bold text-slate-800 mb-3",children:"Caixa Fechado"}),l.jsx("p",{className:"text-slate-500 mb-8 max-w-md",children:"Nenhum caixa está aberto no momento. Abra o caixa para permitir novas vendas."}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3 mb-6",children:[l.jsx("label",{htmlFor:"valor-inicial",className:"text-sm font-bold text-slate-600",children:"Fundo inicial"}),l.jsx("input",{id:"valor-inicial",type:"number",min:"0",step:"0.01",value:o,onChange:_=>a(_.target.value),className:"w-36 bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-[#4A3AFF]"}),l.jsx("button",{disabled:c,onClick:()=>h(()=>r(Number(o.replace(",",".")))),className:"bg-[#4A3AFF] text-white px-5 py-2.5 rounded-xl font-bold disabled:opacity-60",children:c?"Abrindo...":"Abrir Caixa"})]})]}),l.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-auto p-5 flex-1",children:[l.jsx("h3",{className:"font-bold mb-4",children:"Histórico de caixas"}),l.jsxs("table",{className:"w-full text-left min-w-[650px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"text-xs text-slate-400 uppercase border-b",children:[l.jsx("th",{className:"py-3",children:"Abertura"}),l.jsx("th",{children:"Operador"}),l.jsx("th",{children:"Fundo"}),l.jsx("th",{children:"Vendas"}),l.jsx("th",{children:"Saldo final"})]})}),l.jsx("tbody",{children:n.filter(_=>_.status==="fechado").sort((_,x)=>new Date(x.dataAbertura).getTime()-new Date(_.dataAbertura).getTime()).map(_=>l.jsxs("tr",{className:"border-b border-slate-50",children:[l.jsx("td",{className:"py-3",children:new Date(_.dataAbertura).toLocaleDateString("pt-BR")}),l.jsx("td",{children:_.operador}),l.jsx("td",{children:se(_.valorInicial)}),l.jsx("td",{className:"text-emerald-500",children:se(_.totalVendas||0)}),l.jsx("td",{className:"font-bold",children:se(_.valorFinal||0)})]},_.id))})]})]})]})}function vI({data:t,onSave:e,onClose:n,fornecedores:r=[]}){const[s,i]=I.useState(t||{codigo:"",categoria:"Armações",marca:"",modelo:"",cor:"",tamanho:"",material:"",fornecedorId:"",tratamento:"",custo:"",venda:"",qtd:"",min:""}),[o,a]=I.useState(""),c=(h,v)=>i(_=>({..._,[h]:v})),u="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 text-[15px] outline-none focus:border-[#4A3AFF] transition-all text-slate-900 dark:text-white",d="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2 block",f=async h=>{h.preventDefault(),a("");try{await e(s)}catch(v){a((v==null?void 0:v.message)||"Não foi possível salvar o produto.")}};return l.jsxs("form",{onSubmit:f,children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[l.jsxs("div",{children:[l.jsx("label",{className:d,children:"SKU (Cód)"}),l.jsx("input",{required:!0,value:s.codigo,onChange:h=>c("codigo",h.target.value),className:u})]}),l.jsxs("div",{className:"sm:col-span-2",children:[l.jsx("label",{className:d,children:"Categoria"}),l.jsxs("select",{value:s.categoria,onChange:h=>c("categoria",h.target.value),className:u,children:[l.jsx("option",{children:"Armações"}),l.jsx("option",{children:"Lentes de Contato"}),l.jsx("option",{children:"Lentes Oftálmicas"}),l.jsx("option",{children:"Acessórios/Insumos"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Marca"}),l.jsx("input",{required:!0,value:s.marca,onChange:h=>c("marca",h.target.value),className:u})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Modelo"}),l.jsx("input",{value:s.modelo,onChange:h=>c("modelo",h.target.value),className:u})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Cor"}),l.jsx("input",{value:s.cor,onChange:h=>c("cor",h.target.value),className:u})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Tamanho"}),l.jsx("input",{value:s.tamanho,onChange:h=>c("tamanho",h.target.value),className:u,placeholder:"Ex: 54-18"})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Material"}),l.jsx("input",{value:s.material,onChange:h=>c("material",h.target.value),className:u})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Fornecedor"}),l.jsxs("select",{value:s.fornecedorId,onChange:h=>c("fornecedorId",h.target.value),className:u,children:[l.jsx("option",{value:"",children:"Sem fornecedor"}),r.map(h=>l.jsx("option",{value:h.id,children:h.nomeFantasia||h.razaoSocial||h.nome},h.id))]})]}),l.jsxs("div",{className:"sm:col-span-3",children:[l.jsx("label",{className:d,children:"Tratamento / Especificação"}),l.jsx("input",{value:s.tratamento,onChange:h=>c("tratamento",h.target.value),className:u,placeholder:"Antirreflexo, Transitions, multifocal..."})]}),l.jsx("div",{className:"sm:col-span-3 border-t border-slate-100 dark:border-slate-700 my-2"}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Custo (R$)"}),l.jsx("input",{type:"number",step:"0.01",required:!0,value:s.custo,onChange:h=>c("custo",h.target.value),className:u})]}),l.jsxs("div",{children:[l.jsx("label",{className:"text-[12px] font-bold text-emerald-500 uppercase tracking-wider mb-2 block",children:"Venda (R$)"}),l.jsx("input",{type:"number",step:"0.01",required:!0,value:s.venda,onChange:h=>c("venda",h.target.value),className:`${u} border-emerald-200 dark:border-emerald-800 focus:border-emerald-500 font-extrabold`})]}),l.jsxs("div",{children:[l.jsx("label",{className:d,children:"Estoque Atual"}),l.jsx("input",{type:"number",required:!0,value:s.qtd,onChange:h=>c("qtd",h.target.value),className:u})]}),l.jsxs("div",{children:[l.jsx("label",{className:"text-[12px] font-bold text-rose-500 uppercase tracking-wider mb-2 block",children:"Estoque Mín."}),l.jsx("input",{type:"number",required:!0,value:s.min,onChange:h=>c("min",h.target.value),className:`${u} border-rose-200 dark:border-rose-800 focus:border-rose-500`})]})]}),o&&l.jsx("p",{className:"mb-4 rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-600",children:o}),l.jsxs("div",{className:"pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-3 sm:gap-4",children:[l.jsx("button",{type:"button",onClick:n,className:"px-6 py-3.5 rounded-xl font-bold bg-slate-100 text-slate-600",children:"Cancelar"}),l.jsx("button",{type:"submit",className:"px-8 py-3.5 rounded-xl font-bold bg-[#4A3AFF] text-white",children:"Salvar Produto"})]})]})}function _I(){const{produtos:t,fornecedores:e,salvarProduto:n,excluirProduto:r}=pt(),[s,i]=I.useState(""),[o,a]=I.useState(null),[c,u]=I.useState(!1),d=async f=>{await n(f,o==null?void 0:o.id),u(!1),a(null)};return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Estoque"}),l.jsx("p",{className:"text-slate-500",children:"Gerencie produtos e níveis de inventário."})]}),l.jsxs("button",{onClick:()=>{a(null),u(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[l.jsx(so,{size:20,className:"mr-2"})," Adicionar Produto"]})]}),l.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:[l.jsx("div",{className:"p-4 bg-white border-b border-slate-100",children:l.jsxs("div",{className:"relative max-w-md",children:[l.jsx(Py,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:18}),l.jsx("input",{type:"text",placeholder:"Buscar código, marca...",value:s,onChange:f=>i(f.target.value),className:"w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-[#4A3AFF]"})]})}),l.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar",children:l.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[l.jsx("th",{className:"py-4 px-6 w-24",children:"Cód."}),l.jsx("th",{className:"py-4 px-6",children:"Produto"}),l.jsx("th",{className:"py-4 px-6",children:"Categoria"}),l.jsx("th",{className:"py-4 px-6 text-right",children:"Venda"}),l.jsx("th",{className:"py-4 px-6 text-center w-28",children:"Qtd"}),l.jsx("th",{className:"py-4 px-6 text-center",children:"Ações"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-50",children:t.filter(f=>{var h,v;return((h=f.codigo)==null?void 0:h.toLowerCase().includes(s.toLowerCase()))||((v=f.marca)==null?void 0:v.toLowerCase().includes(s.toLowerCase()))}).map(f=>l.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[l.jsx("td",{className:"py-4 px-6 font-mono text-[12px] font-bold text-slate-400",children:f.codigo}),l.jsx("td",{className:"py-4 px-6",children:l.jsxs("div",{className:"font-bold text-[14px]",children:[f.marca," ",l.jsx("span",{className:"font-normal text-slate-500",children:f.modelo})]})}),l.jsx("td",{className:"py-4 px-6 text-[13px]",children:l.jsx("span",{className:"bg-slate-100 px-3 py-1.5 rounded-lg font-medium",children:f.categoria})}),l.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-emerald-600",children:se(f.venda)}),l.jsx("td",{className:"py-4 px-6 text-center",children:l.jsx("span",{className:`inline-flex items-center justify-center w-10 h-10 rounded-xl text-[14px] font-bold ${Number(f.qtd)<Number(f.min)?"bg-rose-50 text-rose-600":"bg-slate-50 text-slate-700"}`,children:f.qtd})}),l.jsxs("td",{className:"py-4 px-6 text-center",children:[l.jsx("button",{onClick:()=>{a(f),u(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:l.jsx(Nl,{size:16})}),l.jsx("button",{onClick:()=>r(f.id).catch(h=>alert(h.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:l.jsx(kl,{size:16})})]})]},f.id))})]})})]}),l.jsx(bl,{open:c,onClose:()=>{u(!1),a(null)},title:o?"Editar Produto":"Novo Produto",width:"max-w-3xl",children:l.jsx(vI,{data:o,fornecedores:e,onSave:d,onClose:()=>{u(!1),a(null)}})})]})}function yI({data:t,onSave:e,onClose:n}){const r=()=>({esf:"",cil:"",eixo:"",dnp:"",add:"",altura:""}),s=()=>({medico:"",crm:"",dataReceita:"",obs:"",od:r(),oe:r(),longe:{od:r(),oe:r()},perto:{od:r(),oe:r()}}),i=()=>({nome:"",cpf:"",tel:"",nasc:"",email:"",endereco:{cep:"",logradouro:"",numero:"",complemento:"",bairro:"",cidade:"",estado:""},prescricao:s()}),[o,a]=I.useState(i()),[c,u]=I.useState("");I.useEffect(()=>{var C,p,m,g;if(t){const y=t.prescricao||s();a({...i(),...t,endereco:{...i().endereco,...t.endereco||{}},prescricao:{...s(),...y,od:{...r(),...y.od||{}},oe:{...r(),...y.oe||{}},longe:{od:{...r(),...((C=y.longe)==null?void 0:C.od)||{}},oe:{...r(),...((p=y.longe)==null?void 0:p.oe)||{}}},perto:{od:{...r(),...((m=y.perto)==null?void 0:m.od)||{}},oe:{...r(),...((g=y.perto)==null?void 0:g.oe)||{}}}}})}else a(i())},[t]);const d=(C,p)=>a(m=>({...m,[C]:p})),f=(C,p,m)=>a(g=>({...g,[C]:{...g[C],[p]:m}})),h=(C,p,m,g)=>a(y=>({...y,prescricao:{...y.prescricao,[C]:{...y.prescricao[C],[p]:{...y.prescricao[C][p],[m]:g}}}})),v="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-[14px] outline-none focus:border-[#4A3AFF]",_="text-[12px] font-bold text-slate-500 uppercase mb-2 block",x=async C=>{C.preventDefault(),u("");try{await e(o)}catch(p){u((p==null?void 0:p.message)||"Não foi possível salvar o cliente.")}};return l.jsxs("form",{onSubmit:x,className:"flex flex-col",children:[l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{children:[l.jsxs("h3",{className:"text-[13px] font-bold text-indigo-500 uppercase mb-4 flex items-center gap-2",children:[l.jsx(io,{size:16})," Dados Pessoais"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:_,children:"Nome Completo"}),l.jsx("input",{required:!0,value:o.nome,onChange:C=>d("nome",C.target.value),className:v})]}),l.jsxs("div",{children:[l.jsx("label",{className:_,children:"WhatsApp"}),l.jsx("input",{required:!0,value:o.tel,onChange:C=>d("tel",C.target.value),className:v,placeholder:"(00) 00000-0000"})]}),l.jsxs("div",{children:[l.jsx("label",{className:_,children:"CPF / CNPJ"}),l.jsx("input",{value:o.cpf,onChange:C=>d("cpf",C.target.value),className:v})]}),l.jsxs("div",{children:[l.jsx("label",{className:_,children:"Nascimento"}),l.jsx("input",{type:"date",value:o.nasc,onChange:C=>d("nasc",C.target.value),className:v})]}),l.jsxs("div",{className:"md:col-span-2",children:[l.jsx("label",{className:_,children:"E-mail"}),l.jsx("input",{type:"email",value:o.email,onChange:C=>d("email",C.target.value),className:v})]})]})]}),l.jsxs("div",{className:"border-t pt-6",children:[l.jsxs("h3",{className:"text-[13px] font-bold text-slate-500 uppercase mb-4 flex items-center gap-2",children:[l.jsx(rI,{size:16})," Endereço"]}),l.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[["cep","CEP"],["logradouro","Logradouro"],["numero","Número"],["complemento","Complemento"],["bairro","Bairro"],["cidade","Cidade"],["estado","UF"]].map(([C,p])=>l.jsxs("div",{className:C==="logradouro"?"col-span-2":"",children:[l.jsx("label",{className:_,children:p}),l.jsx("input",{value:o.endereco[C]||"",onChange:m=>f("endereco",C,m.target.value),className:v})]},C))})]}),l.jsxs("div",{className:"border-t pt-6",children:[l.jsxs("h3",{className:"text-[13px] font-bold text-emerald-500 uppercase mb-4 flex items-center gap-2",children:[l.jsx(eI,{size:16})," Receituário Ótico"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 mb-5",children:[l.jsxs("div",{children:[l.jsx("label",{className:_,children:"Médico Oftalmologista"}),l.jsx("input",{value:o.prescricao.medico,onChange:C=>a(p=>({...p,prescricao:{...p.prescricao,medico:C.target.value}})),className:v})]}),l.jsxs("div",{children:[l.jsx("label",{className:_,children:"CRM"}),l.jsx("input",{value:o.prescricao.crm,onChange:C=>a(p=>({...p,prescricao:{...p.prescricao,crm:C.target.value}})),className:v})]}),l.jsxs("div",{children:[l.jsx("label",{className:_,children:"Data da Receita"}),l.jsx("input",{type:"date",value:o.prescricao.dataReceita,onChange:C=>a(p=>({...p,prescricao:{...p.prescricao,dataReceita:C.target.value}})),className:v})]}),l.jsxs("div",{children:[l.jsx("label",{className:_,children:"Observações"}),l.jsx("input",{value:o.prescricao.obs,onChange:C=>a(p=>({...p,prescricao:{...p.prescricao,obs:C.target.value}})),className:v})]})]}),["longe","perto"].map(C=>l.jsxs("div",{className:"mb-5 overflow-x-auto",children:[l.jsx("h4",{className:"font-bold text-slate-600 mb-2",children:C==="longe"?"Visão de Longe":"Visão de Perto"}),l.jsxs("div",{className:"min-w-[650px] grid grid-cols-7 gap-2 text-center",children:[l.jsx("div",{className:"text-left text-xs font-bold text-slate-400",children:"Olho"}),["Esférico","Cilíndrico","Eixo","DNP","Adição","Altura"].map(p=>l.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase",children:p},p)),["od","oe"].flatMap(p=>[l.jsx("div",{className:"text-left font-bold text-[#4A3AFF] uppercase",children:p},`${C}-${p}-label`),...["esf","cil","eixo","dnp","add","altura"].map(m=>l.jsx("input",{value:o.prescricao[C][p][m],onChange:g=>h(C,p,m,g.target.value),className:"w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 rounded-xl px-2 py-2 text-center text-sm",placeholder:"-"},`${C}-${p}-${m}`))])]})]},C))]})]}),c&&l.jsx("p",{className:"mt-4 rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-600",children:c}),l.jsxs("div",{className:"mt-8 border-t flex justify-end gap-3 pt-4",children:[l.jsx("button",{type:"button",onClick:n,className:"px-6 py-3 rounded-xl font-bold bg-slate-100 text-slate-600",children:"Cancelar"}),l.jsx("button",{type:"submit",className:"px-8 py-3 rounded-xl font-bold bg-[#4A3AFF] text-white",children:"Salvar Ficha"})]})]})}function xI(){const{clientes:t,salvarCliente:e,excluirCliente:n,vendas:r,ordensServico:s}=pt(),[i,o]=es.useState(null),[a,c]=es.useState(!1),u=async d=>{await e(d,i==null?void 0:i.id),c(!1),o(null)};return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Clientes & Receitas"}),l.jsx("p",{className:"text-slate-500",children:"Gestão de contatos e prontuários óticos."})]}),l.jsxs("button",{onClick:()=>{o(null),c(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center shadow-md",children:[l.jsx(so,{size:20,className:"mr-2"})," Novo Cliente"]})]}),l.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:l.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar p-2",children:l.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase tracking-wider font-semibold sticky top-0 bg-white",children:[l.jsx("th",{className:"py-4 px-6",children:"Cliente / CPF"}),l.jsx("th",{className:"py-4 px-6",children:"Contato"}),l.jsx("th",{className:"py-4 px-6",children:"Médico Responsável"}),l.jsx("th",{className:"py-4 px-6 text-center w-24",children:"Ações"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-50",children:t.map(d=>{var f;return l.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[l.jsxs("td",{className:"py-4 px-6",children:[l.jsx("div",{className:"font-bold text-[14px]",children:d.nome}),l.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:d.cpf||"Sem CPF"})]}),l.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[l.jsx("a",{href:`https://wa.me/${(d.tel||"").replace(/\D/g,"")}`,target:"_blank",rel:"noreferrer",className:"text-emerald-600 hover:underline",children:d.tel}),l.jsxs("div",{className:"text-[11px] text-slate-400 mt-1",children:[r.filter(h=>h.cliId===d.id).length," compra(s) · ",s.filter(h=>h.clienteId===d.id).length," OS"]})]}),l.jsx("td",{className:"py-4 px-6",children:l.jsx("div",{className:"text-[14px] font-medium text-slate-700",children:((f=d.prescricao)==null?void 0:f.medico)||"Não informado"})}),l.jsx("td",{className:"py-4 px-6 text-center",children:l.jsxs("div",{className:"flex justify-center gap-2",children:[l.jsx("button",{onClick:()=>{o(d),c(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:l.jsx(Nl,{size:16})}),l.jsx("button",{onClick:()=>n(d.id).catch(h=>alert(h.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:l.jsx(kl,{size:16})})]})})]},d.id)})})]})})}),l.jsx(bl,{open:a,onClose:()=>{c(!1),o(null)},title:i?"Editar Cliente":"Novo Cliente",width:"max-w-4xl",children:l.jsx(yI,{data:i,onSave:u,onClose:()=>{c(!1),o(null)}})})]})}function wI(){const{orcamentos:t,clientes:e,setActiveTab:n,converterOrcamentoParaOs:r}=pt();return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Orçamentos"}),l.jsx("p",{className:"text-slate-500",children:"Negociações salvas via PDV."})]}),l.jsxs("button",{onClick:()=>n("vendas"),className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[l.jsx(so,{size:20,className:"mr-2"})," Novo via PDV"]})]}),l.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:l.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar p-2",children:l.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[l.jsx("th",{className:"py-4 px-6",children:"Data / Cliente"}),l.jsx("th",{className:"py-4 px-6",children:"Itens"}),l.jsx("th",{className:"py-4 px-6 text-right",children:"Total"}),l.jsx("th",{className:"py-4 px-6 text-center w-24",children:"Ações"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-50",children:t.map(s=>{var i,o;return l.jsxs("tr",{className:"hover:bg-slate-50 transition-colors group",children:[l.jsxs("td",{className:"py-4 px-6",children:[l.jsx("div",{className:"font-bold text-[14px]",children:((i=e.find(a=>a.id===s.cliId))==null?void 0:i.nome)||"Desconhecido"}),l.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:new Date(s.data).toLocaleDateString("pt-BR")})]}),l.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[((o=s.itens)==null?void 0:o.length)||0," produto(s)"]}),l.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-[#4A3AFF]",children:se(s.total)}),l.jsx("td",{className:"py-4 px-6 text-center",children:l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{onClick:()=>r(s).then(()=>n("ordens")).catch(a=>alert(a.message)),className:"px-3 py-2 rounded-xl text-xs font-bold text-[#4A3AFF] hover:bg-indigo-50",children:"Converter em OS"}),l.jsx("button",{className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:l.jsx(kl,{size:16})})]})})]},s.id)})})]})})})]})}function CI(){const{vendas:t,clientes:e,contas:n,caixas:r}=pt(),s=n.filter(u=>u.tipo==="pagar"),i=n.filter(u=>u.tipo==="receber"),o=s.reduce((u,d)=>u+Number(d.valor||0),0),a=i.reduce((u,d)=>u+Number(d.valor||0),0),c=r.reduce((u,d)=>u+ur(d.lancamentos).filter(f=>f.tipo!=="entrada").reduce((f,h)=>f+Number(h.valor||0),0),0);return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8",children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Financeiro (DRE)"}),l.jsx("p",{className:"text-slate-500",children:"Análise de lucratividade real e CMV."})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4",children:[l.jsx(Ht,{title:"Faturamento Bruto",value:se(t.reduce((u,d)=>u+(d.total||0),0)),icon:Va}),l.jsx(Ht,{title:"CMV (Custo dos Produtos)",value:se(t.reduce((u,d)=>u+(d.custoBase||0),0)),icon:oI,color:"text-rose-500"}),l.jsx(Ht,{title:"Lucro Bruto",value:se(t.reduce((u,d)=>u+(d.total||0),0)-t.reduce((u,d)=>u+(d.custoBase||0),0)),icon:Lu,bg:"bg-[#4A3AFF]/10",color:"text-[#4A3AFF]",border:"border-[#4A3AFF]/20"}),l.jsx(Ht,{title:"A Pagar",value:se(o),subtitle:`${s.length} lançamentos`,icon:Lu,color:"text-rose-500"}),l.jsx(Ht,{title:"A Receber",value:se(a),subtitle:`${i.length} lançamentos`,icon:Va,color:"text-emerald-500"})]}),l.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm p-5 mt-6",children:[l.jsx("h3",{className:"font-bold mb-4",children:"Fluxo de caixa consolidado"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Vendas realizadas"}),l.jsx("p",{className:"text-xl font-black text-emerald-500",children:se(t.reduce((u,d)=>u+Number(d.total||0),0))})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Saídas e sangrias"}),l.jsx("p",{className:"text-xl font-black text-rose-500",children:se(c)})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Saldo operacional"}),l.jsx("p",{className:"text-xl font-black text-[#4A3AFF]",children:se(t.reduce((u,d)=>u+Number(d.total||0),0)-c)})]})]})]}),l.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2 mt-8 flex-1 flex flex-col min-h-[300px]",children:[l.jsx("div",{className:"p-5 flex-shrink-0",children:l.jsx("h3",{className:"font-bold text-[16px]",children:"Últimas Vendas"})}),l.jsx("div",{className:"overflow-x-auto overflow-y-auto flex-1 custom-scrollbar",children:l.jsxs("table",{className:"w-full text-left min-w-[800px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[l.jsx("th",{className:"py-4 px-6",children:"Data"}),l.jsx("th",{className:"py-4 px-6",children:"Cliente"}),l.jsx("th",{className:"py-4 px-6",children:"Pagamento"}),l.jsx("th",{className:"py-4 px-6 text-right",children:"Total"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-50",children:t.slice().sort((u,d)=>new Date(d.data).getTime()-new Date(u.data).getTime()).slice(0,10).map(u=>{var d;return l.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[l.jsx("td",{className:"py-4 px-6 text-[14px] text-slate-700",children:new Date(u.data).toLocaleDateString("pt-BR")}),l.jsx("td",{className:"py-4 px-6 text-[14px] font-bold",children:((d=e.find(f=>f.id===u.cliId))==null?void 0:d.nome)||"Balcão"}),l.jsx("td",{className:"py-4 px-6 text-[14px]",children:l.jsx("span",{className:"bg-slate-100 px-3 py-1.5 rounded-lg font-medium",children:u.pag})}),l.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-[#4A3AFF]",children:se(u.total)})]},u.id)})})]})})]})]})}function EI({config:t,initialData:e,onSave:n,onClose:r}){const[s,i]=I.useState(e||t.defaultData),[o,a]=I.useState(""),c=(h,v)=>i(_=>({..._,[h]:v})),u="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 text-[15px] outline-none focus:border-[#4A3AFF] transition-all text-slate-900 dark:text-white",d="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2 block",f=async h=>{h.preventDefault(),a("");try{await n(s)}catch(v){a((v==null?void 0:v.message)||"Não foi possível salvar o registro.")}};return l.jsxs("form",{onSubmit:f,children:[l.jsx("div",{className:"space-y-4 mb-6",children:t.fields.map(h=>l.jsxs("div",{children:[l.jsxs("label",{className:d,children:[h.label," ",h.required&&"*"]}),h.type==="select"?l.jsxs("select",{required:h.required,value:s[h.name]||"",onChange:v=>c(h.name,v.target.value),className:u,children:[l.jsx("option",{value:"",children:"Selecione..."}),h.options.map(v=>l.jsx("option",{value:v.val,children:v.label},v.val))]}):l.jsx("input",{type:h.type,step:h.step,required:h.required,value:s[h.name]||"",onChange:v=>c(h.name,v.target.value),className:u})]},h.name))}),o&&l.jsx("p",{className:"mb-4 rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-600",children:o}),l.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700",children:[l.jsx("button",{type:"button",onClick:r,className:"px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors",children:"Cancelar"}),l.jsx("button",{type:"submit",className:"px-6 py-3 rounded-xl bg-[#4A3AFF] text-white font-bold hover:bg-[#3d2ee6] shadow-md transition-all",children:"Salvar"})]})]})}function SI({activeTab:t}){const{fornecedores:e,contas:n,categorias:r,usuarios:s,salvarCadastro:i,excluirCadastro:o}=pt(),[a,c]=es.useState(null),[u,d]=es.useState(!1),h=(()=>{switch(t){case"fornecedores":return e;case"contas":return n;case"categorias":return r;case"usuarios":return s;default:return[]}})(),_={fornecedores:{defaultData:{razaoSocial:"",nomeFantasia:"",cnpj:"",inscricaoEstadual:"",telefone:"",email:"",contatoComercial:"",categoriaFornecimento:"Armações",prazoEntrega:"",condicoesComerciais:"",parceriaAtiva:!0,enderecoCep:"",enderecoLogradouro:"",enderecoNumero:"",enderecoComplemento:"",enderecoBairro:"",enderecoCidade:"",enderecoEstado:""},fields:[{name:"razaoSocial",label:"Razão Social",type:"text",required:!0},{name:"nomeFantasia",label:"Nome Fantasia",type:"text"},{name:"cnpj",label:"CNPJ",type:"text"},{name:"inscricaoEstadual",label:"Inscrição Estadual",type:"text"},{name:"telefone",label:"Telefone",type:"text"},{name:"email",label:"E-mail",type:"email"},{name:"contatoComercial",label:"Contato Comercial",type:"text"},{name:"categoriaFornecimento",label:"Categoria de Fornecimento",type:"select",options:[{val:"Armações",label:"Armações"},{val:"Lentes de Contato",label:"Lentes de Contato"},{val:"Lentes Oftálmicas",label:"Lentes Oftálmicas"},{val:"Insumos/Laboratório",label:"Insumos/Laboratório"}]},{name:"prazoEntrega",label:"Prazo padrão (dias)",type:"number"},{name:"condicoesComerciais",label:"Condições Comerciais",type:"text"},{name:"enderecoCep",label:"CEP",type:"text"},{name:"enderecoLogradouro",label:"Logradouro",type:"text"},{name:"enderecoNumero",label:"Número",type:"text"},{name:"enderecoComplemento",label:"Complemento",type:"text"},{name:"enderecoBairro",label:"Bairro",type:"text"},{name:"enderecoCidade",label:"Cidade",type:"text"},{name:"enderecoEstado",label:"UF",type:"text"}]},contas:{defaultData:{descricao:"",tipo:"pagar",valor:"",vencimento:"",fornecedorId:"",formaPagamento:"PIX",status:"pendente"},fields:[{name:"descricao",label:"Descrição",type:"text",required:!0},{name:"tipo",label:"Tipo",type:"select",required:!0,options:[{val:"pagar",label:"A pagar"},{val:"receber",label:"A receber"}]},{name:"valor",label:"Valor",type:"number",step:"0.01",required:!0},{name:"vencimento",label:"Vencimento",type:"date"},{name:"fornecedorId",label:"Fornecedor vinculado",type:"text"},{name:"formaPagamento",label:"Forma de pagamento",type:"select",options:[{val:"PIX",label:"PIX"},{val:"cartao",label:"Cartão"},{val:"crediario",label:"Crediário próprio"},{val:"dinheiro",label:"Dinheiro"}]},{name:"status",label:"Status",type:"select",options:[{val:"pendente",label:"Pendente"},{val:"pago",label:"Pago/Recebido"}]}]},categorias:{defaultData:{nome:""},fields:[{name:"nome",label:"Nome",type:"text",required:!0}]},usuarios:{defaultData:{nome:"",email:"",perfil:"vendedor"},fields:[{name:"nome",label:"Nome",type:"text",required:!0},{name:"email",label:"E-mail",type:"email",required:!0},{name:"perfil",label:"Perfil",type:"select",required:!0,options:[{val:"vendedor",label:"Vendedor"},{val:"admin",label:"Administrador"}]}]}}[t],x=t,C=async p=>{await i(x,p,a==null?void 0:a.id),d(!1),c(null)};return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2 capitalize",children:t}),l.jsx("p",{className:"text-slate-500",children:"Gestão completa liberada."})]}),l.jsxs("button",{onClick:()=>{c(null),d(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[l.jsx(so,{size:20,className:"mr-2"})," Adicionar"]})]}),l.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2 flex-1 flex flex-col min-h-[400px]",children:l.jsx("div",{className:"overflow-x-auto overflow-y-auto flex-1 custom-scrollbar",children:l.jsxs("table",{className:"w-full text-left min-w-[600px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[l.jsx("th",{className:"py-4 px-6",children:"Registro Principal"}),l.jsx("th",{className:"py-4 px-6",children:"Detalhes"}),l.jsx("th",{className:"py-4 px-6 text-center",children:"Ações"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-50",children:h==null?void 0:h.map(p=>l.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[l.jsxs("td",{className:"py-4 px-6",children:[l.jsx("div",{className:"font-bold text-[14px]",children:p.nome||p.razaoSocial||p.descricao}),l.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:p.cnpj||p.email||p.nomeFantasia||(p.vencimento?`Venc: ${new Date(p.vencimento).toLocaleDateString("pt-BR")}`:"")})]}),l.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[p.valor?l.jsx("span",{className:`font-extrabold ${p.tipo==="pagar"?"text-rose-500":"text-emerald-500"}`,children:se(p.valor)}):p.contato||p.telefone||p.categoriaFornecimento||p.perfil||p.descricao||"-",t==="fornecedores"&&l.jsxs("span",{className:"block text-[11px] text-slate-400 mt-1",children:[n.filter(m=>m.fornecedorId===p.id).length," compra(s) vinculada(s)"]})]}),l.jsx("td",{className:"py-4 px-6 text-center",children:l.jsxs("div",{className:"flex justify-center gap-2",children:[l.jsx("button",{onClick:()=>{c(p),d(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:l.jsx(Nl,{size:16})}),l.jsx("button",{onClick:()=>o(x,p.id).catch(m=>alert(m.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:l.jsx(kl,{size:16})})]})})]},p.id))})]})})}),l.jsx(bl,{open:u,onClose:()=>{d(!1),c(null)},title:a?`Editar ${t}`:`Novo ${t}`,children:l.jsx(EI,{config:_,initialData:a,onSave:C,onClose:()=>{d(!1),c(null)}})})]})}const NI={aguardando_montagem:"Aguardando Montagem",em_laboratorio:"Em Laboratório",pronto_retirada:"Pronto para Retirada",entregue:"Entregue",cancelada:"Cancelada"},sm=t=>ur(t.itens);function kI(){const{ordensServico:t,clientes:e,produtos:n,salvarOrdemServico:r}=pt(),[s,i]=I.useState(null),[o,a]=I.useState(!1),[c,u]=I.useState(null),d=p=>{i(p||null),u(p?{...p,itens:ur(p.itens)}:{clienteId:"",status:"aguardando_montagem",previsaoEntrega:"",observacoes:"",receitaId:"",itens:[{produtoId:"",descricao:"",qtd:1,valor:0,tratamento:""}]}),a(!0)},f=(p,m,g)=>u(y=>({...y,itens:y.itens.map((k,w)=>w===p?{...k,[m]:g}:k)})),h=(p,m)=>{const g=n.find(y=>y.id===m);f(p,"produtoId",m),g&&u(y=>({...y,itens:y.itens.map((k,w)=>w===p?{...k,produtoId:m,descricao:`${g.marca} ${g.modelo}`.trim(),valor:Number(g.venda)||0}:k)}))},v=(p,m)=>{r({...p,status:m,atualizadoEm:new Date().toISOString()},p.id).catch(g=>{x((g==null?void 0:g.message)||"Não foi possível atualizar o status da OS.")})},[_,x]=I.useState(""),C=async p=>{p.preventDefault(),x("");try{if(!c.clienteId)throw new Error("Selecione um cliente.");await r({...c,criadoEm:(s==null?void 0:s.criadoEm)||new Date().toISOString(),atualizadoEm:new Date().toISOString()},s==null?void 0:s.id),a(!1)}catch(m){x((m==null?void 0:m.message)||"Não foi possível salvar a ordem de serviço.")}};return l.jsxs("div",{className:"flex flex-col h-full",children:[l.jsxs("div",{className:"mb-8 flex justify-between items-center gap-4",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Ordens de Serviço"}),l.jsx("p",{className:"text-slate-500",children:"Acompanhe montagem, laboratório e retirada."})]}),l.jsxs("button",{onClick:()=>d(),className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[l.jsx(so,{size:20,className:"mr-2"})," Nova OS"]})]}),l.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm flex-1 overflow-auto p-2",children:l.jsxs("table",{className:"w-full text-left min-w-[800px]",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold",children:[l.jsx("th",{className:"py-4 px-6",children:"Cliente"}),l.jsx("th",{className:"py-4 px-6",children:"Itens"}),l.jsx("th",{className:"py-4 px-6",children:"Previsão"}),l.jsx("th",{className:"py-4 px-6",children:"Status"}),l.jsx("th",{className:"py-4 px-6 text-right",children:"Total"}),l.jsx("th",{className:"py-4 px-6",children:"Ações"})]})}),l.jsxs("tbody",{className:"divide-y divide-slate-50",children:[t.map(p=>{var m;return l.jsxs("tr",{className:"hover:bg-slate-50 dark:hover:bg-slate-700/30",children:[l.jsx("td",{className:"py-4 px-6 font-bold",children:((m=e.find(g=>g.id===p.clienteId))==null?void 0:m.nome)||"Cliente não encontrado"}),l.jsxs("td",{className:"py-4 px-6",children:[sm(p).length," item(ns)"]}),l.jsx("td",{className:"py-4 px-6",children:p.previsaoEntrega?new Date(p.previsaoEntrega).toLocaleDateString("pt-BR"):"-"}),l.jsx("td",{className:"py-4 px-6",children:l.jsxs("select",{value:p.status||"aguardando_montagem",onChange:g=>v(p,g.target.value),className:"bg-slate-100 rounded-lg px-2 py-1 text-xs font-bold",children:[l.jsx("option",{value:"aguardando_montagem",children:"Aguardando Montagem"}),l.jsx("option",{value:"em_laboratorio",children:"Em Laboratório"}),l.jsx("option",{value:"pronto_retirada",children:"Pronto para Retirada"}),l.jsx("option",{value:"entregue",children:"Entregue"}),l.jsx("option",{value:"cancelada",children:"Cancelada"})]})}),l.jsx("td",{className:"py-4 px-6 text-right font-bold",children:se(sm(p).reduce((g,y)=>g+Number(y.valor||0)*Number(y.qtd||0),0))}),l.jsx("td",{className:"py-4 px-6",children:l.jsx("button",{onClick:()=>d(p),className:"p-2 text-slate-400 hover:text-[#4A3AFF]",children:l.jsx(Nl,{size:16})})})]},p.id)}),t.length===0&&l.jsx("tr",{children:l.jsxs("td",{colSpan:6,className:"text-center py-12 text-slate-400",children:[l.jsx(by,{className:"mx-auto mb-3"}),"Nenhuma ordem de serviço cadastrada."]})})]})]})}),l.jsx(bl,{open:o,onClose:()=>a(!1),title:s?"Editar Ordem de Serviço":"Nova Ordem de Serviço",width:"max-w-4xl",children:c&&l.jsxs("form",{onSubmit:C,className:"space-y-5",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[l.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase",children:["Cliente",l.jsxs("select",{required:!0,value:c.clienteId,onChange:p=>u({...c,clienteId:p.target.value}),className:"mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3",children:[l.jsx("option",{value:"",children:"Selecione"}),e.map(p=>l.jsx("option",{value:p.id,children:p.nome},p.id))]})]}),l.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase",children:["Status",l.jsx("select",{value:c.status,onChange:p=>u({...c,status:p.target.value}),className:"mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3",children:Object.entries(NI).map(([p,m])=>l.jsx("option",{value:p,children:m},p))})]}),l.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase",children:["Previsão de entrega",l.jsx("input",{type:"date",value:c.previsaoEntrega,onChange:p=>u({...c,previsaoEntrega:p.target.value}),className:"mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"})]})]}),l.jsxs("div",{className:"border-t pt-4",children:[l.jsxs("div",{className:"flex justify-between items-center mb-3",children:[l.jsx("h3",{className:"font-bold",children:"Armação, lentes e tratamentos"}),l.jsx("button",{type:"button",onClick:()=>u({...c,itens:[...c.itens,{produtoId:"",descricao:"",qtd:1,valor:0,tratamento:""}]}),className:"text-sm font-bold text-[#4A3AFF]",children:"+ Adicionar item"})]}),c.itens.map((p,m)=>l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-2 mb-3",children:[l.jsxs("select",{value:p.produtoId,onChange:g=>h(m,g.target.value),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3",children:[l.jsx("option",{value:"",children:"Produto do estoque"}),n.map(g=>l.jsxs("option",{value:g.id,children:[g.marca," ",g.modelo," (",g.categoria,")"]},g.id))]}),l.jsx("input",{placeholder:"Descrição",value:p.descricao,onChange:g=>f(m,"descricao",g.target.value),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"}),l.jsx("input",{placeholder:"Tratamento",value:p.tratamento,onChange:g=>f(m,"tratamento",g.target.value),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"}),l.jsx("input",{type:"number",min:"1",value:p.qtd,onChange:g=>f(m,"qtd",Number(g.target.value)),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"}),l.jsx("input",{type:"number",step:"0.01",value:p.valor,onChange:g=>f(m,"valor",Number(g.target.value)),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"})]},m))]}),l.jsx("textarea",{placeholder:"Observações da montagem ou laboratório",value:c.observacoes||"",onChange:p=>u({...c,observacoes:p.target.value}),className:"w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 min-h-24"}),_&&l.jsx("p",{className:"rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-600",children:_}),l.jsxs("div",{className:"flex justify-end gap-3",children:[l.jsx("button",{type:"button",onClick:()=>a(!1),className:"px-5 py-3 rounded-xl bg-slate-100 font-bold",children:"Cancelar"}),l.jsx("button",{type:"submit",className:"px-5 py-3 rounded-xl bg-[#4A3AFF] text-white font-bold",children:"Salvar OS"})]})]})})]})}const bI=[{icon:Ry,titulo:"1. Comece pelo caixa",passos:["Acesse Caixa Diário.","Informe o fundo inicial e clique em Abrir Caixa.","Registre entradas, saídas e sangrias durante o dia.","Feche o caixa ao final da operação e confira o saldo."]},{icon:Rh,titulo:"2. Registre uma venda",passos:["Abra o PDV com o caixa aberto.","Pesquise e selecione os produtos do estoque.","Vincule o cliente, escolha a forma de pagamento e aplique descontos.","Clique em Vender para baixar o estoque e registrar a venda."]},{icon:io,titulo:"3. Cadastre clientes e receitas",passos:["Abra Clientes e clique em Novo Cliente.","Preencha dados pessoais, endereço e contato.","Registre a receita de longe e perto com médico, CRM e data.","Use o WhatsApp e o histórico do cliente para acompanhar o atendimento."]},{icon:Sl,titulo:"4. Organize o estoque",passos:["Cadastre produtos por categoria.","Informe custo, venda, estoque mínimo e fornecedor.","Use os alertas de estoque crítico para planejar reposições.","Mantenha tratamentos e especificações preenchidos para o laboratório."]},{icon:by,titulo:"5. Acompanhe uma OS",passos:["Crie uma OS ou converta um orçamento aprovado.","Selecione armação, lentes e tratamentos.","Atualize o status: montagem, laboratório, pronto ou entregue.","Informe previsão de entrega e observações para a equipe."]},{icon:Hb,titulo:"6. Controle o financeiro",passos:["Lance contas a pagar e receber.","Vincule despesas aos fornecedores quando aplicável.","Acompanhe faturamento, CMV, lucro e fluxo de caixa.","Use o DRE para conferir o resultado da operação."]}];function II(){return l.jsxs("div",{className:"mx-auto flex w-full max-w-6xl flex-col gap-8",children:[l.jsxs("header",{children:[l.jsxs("div",{className:"mb-3 flex items-center gap-3 text-[#4A3AFF]",children:[l.jsx(qb,{size:24}),l.jsx("span",{className:"text-xs font-bold uppercase tracking-[0.2em]",children:"Central de treinamento"})]}),l.jsx("h1",{className:"text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl",children:"Ajuda e treinamento"}),l.jsx("p",{className:"mt-2 max-w-2xl text-slate-500",children:"Aprenda o fluxo recomendado para operar a VISTTA com segurança e manter os dados da ótica organizados."})]}),l.jsx("section",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:bI.map(({icon:t,titulo:e,passos:n})=>l.jsxs("article",{className:"rounded-2xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800",children:[l.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[l.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-[#4A3AFF] dark:bg-indigo-900/30",children:l.jsx(t,{size:20})}),l.jsx("h2",{className:"font-bold text-slate-900 dark:text-white",children:e})]}),l.jsx("ol",{className:"space-y-2 text-sm text-slate-600 dark:text-slate-300",children:n.map(r=>l.jsxs("li",{className:"flex gap-2",children:[l.jsx(Qb,{size:16,className:"mt-0.5 shrink-0 text-emerald-500"}),r]},r))})]},e))}),l.jsxs("section",{className:"rounded-2xl border border-indigo-100 bg-indigo-50 p-6 dark:border-indigo-900/50 dark:bg-indigo-950/30",children:[l.jsx("h2",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"Suporte"}),l.jsx("p",{className:"mt-1 text-sm text-slate-600 dark:text-slate-300",children:"Envie sua dúvida com o nome da ótica, usuário e uma descrição do que aconteceu."}),l.jsxs("div",{className:"mt-5 flex flex-col gap-3 sm:flex-row",children:[l.jsxs("a",{href:"mailto:icaroprojetos7@gmail.com",className:"inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#4A3AFF] shadow-sm hover:bg-slate-50 dark:bg-slate-800",children:[l.jsx(Ty,{size:18})," icaroprojetos7@gmail.com"]}),l.jsxs("a",{href:"https://www.linkedin.com/in/7icaaro",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] px-4 py-3 text-sm font-bold text-white hover:bg-[#0959a8]",children:[l.jsx(tI,{size:18})," LinkedIn de suporte"]})]})]})]})}function TI(){const{configurarOtica:t}=pt(),[e,n]=I.useState(""),[r,s]=I.useState(""),[i,o]=I.useState(!1),a=async c=>{c.preventDefault();const u=e.trim();if(!u){s("Informe o nome da sua ótica.");return}s(""),o(!0);try{await t(u)}catch(d){s((d==null?void 0:d.message)||"Não foi possível salvar os dados da ótica.")}finally{o(!1)}};return l.jsx("div",{className:"flex min-h-screen w-full items-center justify-center bg-slate-50 p-6 dark:bg-slate-900",children:l.jsxs("div",{className:"w-full max-w-[480px] rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_8px_40px_rgb(0,0,0,0.04)] dark:border-slate-700 dark:bg-slate-800 sm:p-10",children:[l.jsx("div",{className:"mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-[#4A3AFF] dark:bg-indigo-900/30",children:l.jsx(Gb,{size:26})}),l.jsx("h1",{className:"text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl",children:"Vamos configurar sua ótica"}),l.jsx("p",{className:"mt-3 text-[15px] leading-relaxed text-slate-500",children:"Para começar, informe o nome da sua ótica."}),l.jsxs("form",{onSubmit:a,className:"mt-8 space-y-5",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"nome-otica",className:"mb-2 block text-[11px] font-bold uppercase tracking-wider text-slate-500",children:"Nome da ótica"}),l.jsx("input",{id:"nome-otica",autoFocus:!0,required:!0,value:e,onChange:c=>n(c.target.value),placeholder:"Digite o nome da sua ótica",className:"w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] outline-none transition-all focus:border-[#5235ff] focus:ring-1 focus:ring-[#5235ff] dark:border-slate-700 dark:bg-slate-900 dark:text-white"})]}),r&&l.jsx("p",{className:"rounded-xl border border-rose-100 bg-rose-50 p-3 text-sm font-semibold text-rose-600",children:r}),l.jsxs("button",{type:"submit",disabled:i,className:"flex w-full items-center justify-center gap-2 rounded-xl bg-[#5235ff] py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-[#4323ec] disabled:opacity-60",children:[i?"Salvando...":"Continuar"," ",!i&&l.jsx($b,{size:18})]})]})]})})}function PI(){const{activeTab:t,user:e,loadingAuth:n,setActiveTab:r,carrinho:s,userRole:i,dadosEmpresa:o,empresaId:a,databaseError:c}=pt(),[u,d]=I.useState(!1),[f,h]=I.useState(!1);I.useEffect(()=>{const _=localStorage.getItem("otica_theme")==="dark";h(_),document.documentElement.classList.toggle("dark",_)},[]);const v=()=>{const _=!f;h(_),localStorage.setItem("otica_theme",_?"dark":"light"),document.documentElement.classList.toggle("dark",_)};return n?l.jsx("div",{className:"flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-900",children:l.jsx("p",{className:"text-slate-500 font-medium",children:"Iniciando VISTTA ERP..."})}):e?a?l.jsxs("div",{className:"flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden",children:[l.jsx(hI,{}),l.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden relative pb-[70px] md:pb-0",children:[c&&l.jsx("div",{className:"absolute top-0 left-0 right-0 z-50 bg-rose-600 text-white px-4 py-2 text-center text-sm font-semibold",children:c}),l.jsx("button",{onClick:v,className:"absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-[#4A3AFF] shadow-sm",title:"Alternar tema",children:f?l.jsx(cI,{size:18}):l.jsx(iI,{size:18})}),l.jsxs("main",{className:"flex-1 overflow-y-auto p-4 pt-16 sm:pt-10 sm:p-10 lg:p-12 relative z-10 custom-scrollbar h-full",children:[t==="dashboard"&&l.jsx(pI,{}),t==="vendas"&&l.jsx(mI,{}),t==="caixa"&&l.jsx(gI,{}),t==="estoque"&&l.jsx(_I,{}),t==="clientes"&&l.jsx(xI,{}),t==="orcamentos"&&l.jsx(wI,{}),t==="ordens"&&l.jsx(kI,{}),t==="ajuda"&&l.jsx(II,{}),t==="financeiro"&&l.jsx(CI,{}),["fornecedores","contas","categorias","usuarios"].includes(t)&&l.jsx(SI,{activeTab:t})]}),l.jsxs("div",{className:"md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex items-center h-[70px] z-[55]",children:[l.jsx(Ws,{icon:Iy,label:"Início",active:t==="dashboard",onClick:()=>r("dashboard")}),l.jsx(Ws,{icon:Rh,label:"PDV",active:t==="vendas",onClick:()=>r("vendas"),badge:s.length}),l.jsx(Ws,{icon:Sl,label:"Estoque",active:t==="estoque",onClick:()=>r("estoque")}),l.jsx(Ws,{icon:io,label:"Clientes",active:t==="clientes",onClick:()=>r("clientes")}),l.jsx(Ws,{icon:sI,label:"Menu",active:u,onClick:()=>d(!u)})]}),u&&l.jsx("div",{className:"md:hidden fixed inset-0 z-[70] bg-slate-900/60",onClick:()=>d(!1),children:l.jsxs("div",{className:"absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-white dark:bg-slate-800 shadow-2xl p-5",onClick:_=>_.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between mb-8",children:[l.jsx("span",{className:"font-bold truncate text-slate-900 dark:text-white",children:(o==null?void 0:o.nome)||"Minha Ótica"}),l.jsx("button",{onClick:()=>d(!1),className:"text-slate-400",children:"Fechar"})]}),l.jsx("div",{className:"space-y-2",children:[["caixa","Caixa Diário"],["orcamentos","Orçamentos"],["ordens","Ordens de Serviço"],["categorias","Categorias"],["ajuda","Ajuda e Treinamento"],...i==="admin"?[["financeiro","Financeiro"],["contas","Contas"],["fornecedores","Fornecedores"],["usuarios","Usuários"]]:[]].map(([_,x])=>l.jsx("button",{onClick:()=>{r(_),d(!1)},className:"w-full text-left px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700",children:x},_))})]})})]})]}):l.jsx(TI,{}):l.jsx(fI,{})}function Ws({icon:t,label:e,active:n,onClick:r,badge:s=0}){return l.jsxs("button",{onClick:r,className:`flex-1 h-full flex flex-col items-center justify-center gap-1 text-[10px] relative ${n?"text-[#4A3AFF] font-bold":"text-slate-400"}`,children:[l.jsx(t,{size:22}),s>0&&l.jsx("span",{className:"absolute top-1 right-3 bg-rose-500 text-white text-[10px] rounded-full px-1.5",children:s}),l.jsx("span",{children:e})]})}function AI(){return l.jsx(Vb,{children:l.jsx(PI,{})})}class RI extends es.Component{constructor(){super(...arguments);Rl(this,"state",{hasError:!1,message:""});Rl(this,"reload",()=>{this.setState({hasError:!1,message:""}),window.location.reload()})}static getDerivedStateFromError(n){return{hasError:!0,message:n.message||"Erro inesperado ao renderizar a aplicação."}}componentDidCatch(n,r){console.error("Erro de renderização do VISTTA:",n,r.componentStack)}render(){return this.state.hasError?l.jsx("div",{className:"flex min-h-screen items-center justify-center bg-slate-50 p-6 text-center",children:l.jsxs("div",{className:"max-w-md rounded-3xl bg-white p-8 shadow-lg",children:[l.jsx("h1",{className:"mb-3 text-xl font-bold text-slate-900",children:"Ocorreu um erro inesperado"}),l.jsx("p",{className:"mb-6 text-sm text-slate-500",children:"A tela foi protegida para evitar uma falha silenciosa. Recarregue e tente novamente."}),l.jsx("p",{className:"mb-6 break-words rounded-xl bg-rose-50 p-3 text-left text-xs text-rose-700",children:this.state.message}),l.jsx("button",{onClick:this.reload,className:"rounded-xl bg-[#4A3AFF] px-5 py-3 font-bold text-white",children:"Recarregar aplicação"})]})}):this.props.children}}yc.createRoot(document.getElementById("root")).render(l.jsx(es.StrictMode,{children:l.jsx(RI,{children:l.jsx(AI,{})})}));
