(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function My(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var em={exports:{}},Ma={},tm={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mi=Symbol.for("react.element"),Fy=Symbol.for("react.portal"),Uy=Symbol.for("react.fragment"),zy=Symbol.for("react.strict_mode"),Vy=Symbol.for("react.profiler"),Wy=Symbol.for("react.provider"),$y=Symbol.for("react.context"),By=Symbol.for("react.forward_ref"),Hy=Symbol.for("react.suspense"),qy=Symbol.for("react.memo"),Gy=Symbol.for("react.lazy"),jh=Symbol.iterator;function Ky(t){return t===null||typeof t!="object"?null:(t=jh&&t[jh]||t["@@iterator"],typeof t=="function"?t:null)}var nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rm=Object.assign,sm={};function us(t,e,n){this.props=t,this.context=e,this.refs=sm,this.updater=n||nm}us.prototype.isReactComponent={};us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function im(){}im.prototype=us.prototype;function Ou(t,e,n){this.props=t,this.context=e,this.refs=sm,this.updater=n||nm}var Du=Ou.prototype=new im;Du.constructor=Ou;rm(Du,us.prototype);Du.isPureReactComponent=!0;var Oh=Array.isArray,om=Object.prototype.hasOwnProperty,Lu={current:null},am={key:!0,ref:!0,__self:!0,__source:!0};function lm(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)om.call(e,r)&&!am.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Mi,type:t,key:i,ref:o,props:s,_owner:Lu.current}}function Qy(t,e){return{$$typeof:Mi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mi}function Yy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dh=/\/+/g;function Il(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yy(""+t.key):e.toString(36)}function So(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Mi:case Fy:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Il(o,0):r,Oh(s)?(n="",t!=null&&(n=t.replace(Dh,"$&/")+"/"),So(s,e,n,"",function(u){return u})):s!=null&&(Mu(s)&&(s=Qy(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Dh,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Oh(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+Il(i,a);o+=So(i,e,n,l,s)}else if(l=Ky(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+Il(i,a++),o+=So(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ro(t,e,n){if(t==null)return t;var r=[],s=0;return So(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Xy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},No={transition:null},Jy={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:No,ReactCurrentOwner:Lu};function cm(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:ro,forEach:function(t,e,n){ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ro(t,function(){e++}),e},toArray:function(t){return ro(t,function(e){return e})||[]},only:function(t){if(!Mu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=us;V.Fragment=Uy;V.Profiler=Vy;V.PureComponent=Ou;V.StrictMode=zy;V.Suspense=Hy;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jy;V.act=cm;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=rm({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Lu.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)om.call(e,l)&&!am.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Mi,type:t.type,key:s,ref:i,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:$y,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wy,_context:t},t.Consumer=t};V.createElement=lm;V.createFactory=function(t){var e=lm.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:By,render:t}};V.isValidElement=Mu;V.lazy=function(t){return{$$typeof:Gy,_payload:{_status:-1,_result:t},_init:Xy}};V.memo=function(t,e){return{$$typeof:qy,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=No.transition;No.transition={};try{t()}finally{No.transition=e}};V.unstable_act=cm;V.useCallback=function(t,e){return We.current.useCallback(t,e)};V.useContext=function(t){return We.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return We.current.useDeferredValue(t)};V.useEffect=function(t,e){return We.current.useEffect(t,e)};V.useId=function(){return We.current.useId()};V.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return We.current.useMemo(t,e)};V.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};V.useRef=function(t){return We.current.useRef(t)};V.useState=function(t){return We.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return We.current.useTransition()};V.version="18.3.1";tm.exports=V;var P=tm.exports;const ai=My(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy=P,e0=Symbol.for("react.element"),t0=Symbol.for("react.fragment"),n0=Object.prototype.hasOwnProperty,r0=Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s0={key:!0,ref:!0,__self:!0,__source:!0};function um(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)n0.call(e,r)&&!s0.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:e0,type:t,key:i,ref:o,props:s,_owner:r0.current}}Ma.Fragment=t0;Ma.jsx=um;Ma.jsxs=um;em.exports=Ma;var c=em.exports,pc={},dm={exports:{}},nt={},hm={exports:{}},fm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,D){var L=I.length;I.push(D);e:for(;0<L;){var oe=L-1>>>1,ge=I[oe];if(0<s(ge,D))I[oe]=D,I[L]=ge,L=oe;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var D=I[0],L=I.pop();if(L!==D){I[0]=L;e:for(var oe=0,ge=I.length,Lt=ge>>>1;oe<Lt;){var bt=2*(oe+1)-1,Sr=I[bt],Mt=bt+1,Kn=I[Mt];if(0>s(Sr,L))Mt<ge&&0>s(Kn,Sr)?(I[oe]=Kn,I[Mt]=L,oe=Mt):(I[oe]=Sr,I[bt]=L,oe=bt);else if(Mt<ge&&0>s(Kn,L))I[oe]=Kn,I[Mt]=L,oe=Mt;else break e}}return D}function s(I,D){var L=I.sortIndex-D.sortIndex;return L!==0?L:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,h=null,f=3,_=!1,p=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=I)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function x(I){if(y=!1,v(I),!p)if(n(l)!==null)p=!0,Cs(S);else{var D=n(u);D!==null&&Es(x,D.startTime-I)}}function S(I,D){p=!1,y&&(y=!1,m(R),R=-1),_=!0;var L=f;try{for(v(D),h=n(l);h!==null&&(!(h.expirationTime>D)||I&&!Ye());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var ge=oe(h.expirationTime<=D);D=t.unstable_now(),typeof ge=="function"?h.callback=ge:h===n(l)&&r(l),v(D)}else r(l);h=n(l)}if(h!==null)var Lt=!0;else{var bt=n(u);bt!==null&&Es(x,bt.startTime-D),Lt=!1}return Lt}finally{h=null,f=L,_=!1}}var T=!1,k=null,R=-1,K=5,M=-1;function Ye(){return!(t.unstable_now()-M<K)}function qn(){if(k!==null){var I=t.unstable_now();M=I;var D=!0;try{D=k(!0,I)}finally{D?Gn():(T=!1,k=null)}}else T=!1}var Gn;if(typeof g=="function")Gn=function(){g(qn)};else if(typeof MessageChannel<"u"){var to=new MessageChannel,Cl=to.port2;to.port1.onmessage=qn,Gn=function(){Cl.postMessage(null)}}else Gn=function(){C(qn,0)};function Cs(I){k=I,T||(T=!0,Gn())}function Es(I,D){R=C(function(){I(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){p||_||(p=!0,Cs(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var L=f;f=D;try{return I()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=f;f=I;try{return D()}finally{f=L}},t.unstable_scheduleCallback=function(I,D,L){var oe=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?oe+L:oe):L=oe,I){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=L+ge,I={id:d++,callback:D,priorityLevel:I,startTime:L,expirationTime:ge,sortIndex:-1},L>oe?(I.sortIndex=L,e(u,I),n(l)===null&&I===n(u)&&(y?(m(R),R=-1):y=!0,Es(x,L-oe))):(I.sortIndex=ge,e(l,I),p||_||(p=!0,Cs(S))),I},t.unstable_shouldYield=Ye,t.unstable_wrapCallback=function(I){var D=f;return function(){var L=f;f=D;try{return I.apply(this,arguments)}finally{f=L}}}})(fm);hm.exports=fm;var i0=hm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0=P,et=i0;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pm=new Set,li={};function yr(t,e){Xr(t,e),Xr(t+"Capture",e)}function Xr(t,e){for(li[t]=e,t=0;t<e.length;t++)pm.add(e[t])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mc=Object.prototype.hasOwnProperty,a0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lh={},Mh={};function l0(t){return mc.call(Mh,t)?!0:mc.call(Lh,t)?!1:a0.test(t)?Mh[t]=!0:(Lh[t]=!0,!1)}function c0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function u0(t,e,n,r){if(e===null||typeof e>"u"||c0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $e(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Re[t]=new $e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Re[e]=new $e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Re[t]=new $e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Re[t]=new $e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Re[t]=new $e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Re[t]=new $e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Re[t]=new $e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Re[t]=new $e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Re[t]=new $e(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fu=/[\-:]([a-z])/g;function Uu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fu,Uu);Re[e]=new $e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fu,Uu);Re[e]=new $e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fu,Uu);Re[e]=new $e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Re[t]=new $e(t,1,!1,t.toLowerCase(),null,!1,!1)});Re.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Re[t]=new $e(t,1,!1,t.toLowerCase(),null,!0,!0)});function zu(t,e,n,r){var s=Re.hasOwnProperty(e)?Re[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(u0(e,n,s,r)&&(n=null),r||s===null?l0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var on=o0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),Ir=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),gc=Symbol.for("react.profiler"),mm=Symbol.for("react.provider"),gm=Symbol.for("react.context"),Wu=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),_c=Symbol.for("react.suspense_list"),$u=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),vm=Symbol.for("react.offscreen"),Fh=Symbol.iterator;function ks(t){return t===null||typeof t!="object"?null:(t=Fh&&t[Fh]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,bl;function Us(t){if(bl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bl=e&&e[1]||""}return`
`+bl+t}var Tl=!1;function Pl(t,e){if(!t||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Us(t):""}function d0(t){switch(t.tag){case 5:return Us(t.type);case 16:return Us("Lazy");case 13:return Us("Suspense");case 19:return Us("SuspenseList");case 0:case 2:case 15:return t=Pl(t.type,!1),t;case 11:return t=Pl(t.type.render,!1),t;case 1:return t=Pl(t.type,!0),t;default:return""}}function yc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case br:return"Fragment";case Ir:return"Portal";case gc:return"Profiler";case Vu:return"StrictMode";case vc:return"Suspense";case _c:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gm:return(t.displayName||"Context")+".Consumer";case mm:return(t._context.displayName||"Context")+".Provider";case Wu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $u:return e=t.displayName||null,e!==null?e:yc(t.type)||"Memo";case un:e=t._payload,t=t._init;try{return yc(t(e))}catch{}}return null}function h0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yc(e);case 8:return e===Vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _m(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function f0(t){var e=_m(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function io(t){t._valueTracker||(t._valueTracker=f0(t))}function ym(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_m(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xc(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xm(t,e){e=e.checked,e!=null&&zu(t,"checked",e,!1)}function wc(t,e){xm(t,e);var n=jn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cc(t,e.type,jn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cc(t,e,n){(e!=="number"||Vo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zs=Array.isArray;function Vr(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jn(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ec(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(zs(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jn(n)}}function wm(t,e){var n=jn(e.value),r=jn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oo,Em=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ci(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p0=["Webkit","ms","Moz","O"];Object.keys(Hs).forEach(function(t){p0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hs[e]=Hs[t]})});function Sm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hs.hasOwnProperty(t)&&Hs[t]?(""+e).trim():e+"px"}function Nm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Sm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var m0=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nc(t,e){if(e){if(m0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ic=null;function Bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bc=null,Wr=null,$r=null;function $h(t){if(t=zi(t)){if(typeof bc!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Wa(e),bc(t.stateNode,t.type,e))}}function km(t){Wr?$r?$r.push(t):$r=[t]:Wr=t}function Im(){if(Wr){var t=Wr,e=$r;if($r=Wr=null,$h(t),e)for(t=0;t<e.length;t++)$h(e[t])}}function bm(t,e){return t(e)}function Tm(){}var Rl=!1;function Pm(t,e,n){if(Rl)return t(e,n);Rl=!0;try{return bm(t,e,n)}finally{Rl=!1,(Wr!==null||$r!==null)&&(Tm(),Im())}}function ui(t,e){var n=t.stateNode;if(n===null)return null;var r=Wa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Tc=!1;if(Jt)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){Tc=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{Tc=!1}function g0(t,e,n,r,s,i,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var qs=!1,Wo=null,$o=!1,Pc=null,v0={onError:function(t){qs=!0,Wo=t}};function _0(t,e,n,r,s,i,o,a,l){qs=!1,Wo=null,g0.apply(v0,arguments)}function y0(t,e,n,r,s,i,o,a,l){if(_0.apply(this,arguments),qs){if(qs){var u=Wo;qs=!1,Wo=null}else throw Error(w(198));$o||($o=!0,Pc=u)}}function xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bh(t){if(xr(t)!==t)throw Error(w(188))}function x0(t){var e=t.alternate;if(!e){if(e=xr(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Bh(s),t;if(i===r)return Bh(s),e;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Am(t){return t=x0(t),t!==null?jm(t):null}function jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jm(t);if(e!==null)return e;t=t.sibling}return null}var Om=et.unstable_scheduleCallback,Hh=et.unstable_cancelCallback,w0=et.unstable_shouldYield,C0=et.unstable_requestPaint,me=et.unstable_now,E0=et.unstable_getCurrentPriorityLevel,Hu=et.unstable_ImmediatePriority,Dm=et.unstable_UserBlockingPriority,Bo=et.unstable_NormalPriority,S0=et.unstable_LowPriority,Lm=et.unstable_IdlePriority,Fa=null,At=null;function N0(t){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Fa,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:b0,k0=Math.log,I0=Math.LN2;function b0(t){return t>>>=0,t===0?32:31-(k0(t)/I0|0)|0}var ao=64,lo=4194304;function Vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ho(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Vs(a):(i&=o,i!==0&&(r=Vs(i)))}else o=n&~s,o!==0?r=Vs(o):i!==0&&(r=Vs(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wt(e),s=1<<n,r|=t[n],e&=~s;return r}function T0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-wt(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=T0(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Rc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mm(){var t=ao;return ao<<=1,!(ao&4194240)&&(ao=64),t}function Al(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wt(e),t[e]=n}function R0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-wt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function qu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Q=0;function Fm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Um,Gu,zm,Vm,Wm,Ac=!1,co=[],xn=null,wn=null,Cn=null,di=new Map,hi=new Map,hn=[],A0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(t,e){switch(t){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":di.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(e.pointerId)}}function bs(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=zi(e),e!==null&&Gu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function j0(t,e,n,r,s){switch(e){case"focusin":return xn=bs(xn,t,e,n,r,s),!0;case"dragenter":return wn=bs(wn,t,e,n,r,s),!0;case"mouseover":return Cn=bs(Cn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return di.set(i,bs(di.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,hi.set(i,bs(hi.get(i)||null,t,e,n,r,s)),!0}return!1}function $m(t){var e=Zn(t.target);if(e!==null){var n=xr(e);if(n!==null){if(e=n.tag,e===13){if(e=Rm(n),e!==null){t.blockedOn=e,Wm(t.priority,function(){zm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ko(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ic=r,n.target.dispatchEvent(r),Ic=null}else return e=zi(n),e!==null&&Gu(e),t.blockedOn=n,!1;e.shift()}return!0}function Gh(t,e,n){ko(t)&&n.delete(e)}function O0(){Ac=!1,xn!==null&&ko(xn)&&(xn=null),wn!==null&&ko(wn)&&(wn=null),Cn!==null&&ko(Cn)&&(Cn=null),di.forEach(Gh),hi.forEach(Gh)}function Ts(t,e){t.blockedOn===e&&(t.blockedOn=null,Ac||(Ac=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,O0)))}function fi(t){function e(s){return Ts(s,t)}if(0<co.length){Ts(co[0],t);for(var n=1;n<co.length;n++){var r=co[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xn!==null&&Ts(xn,t),wn!==null&&Ts(wn,t),Cn!==null&&Ts(Cn,t),di.forEach(e),hi.forEach(e),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)$m(n),n.blockedOn===null&&hn.shift()}var Br=on.ReactCurrentBatchConfig,qo=!0;function D0(t,e,n,r){var s=Q,i=Br.transition;Br.transition=null;try{Q=1,Ku(t,e,n,r)}finally{Q=s,Br.transition=i}}function L0(t,e,n,r){var s=Q,i=Br.transition;Br.transition=null;try{Q=4,Ku(t,e,n,r)}finally{Q=s,Br.transition=i}}function Ku(t,e,n,r){if(qo){var s=jc(t,e,n,r);if(s===null)Wl(t,e,r,Go,n),qh(t,r);else if(j0(s,t,e,n,r))r.stopPropagation();else if(qh(t,r),e&4&&-1<A0.indexOf(t)){for(;s!==null;){var i=zi(s);if(i!==null&&Um(i),i=jc(t,e,n,r),i===null&&Wl(t,e,r,Go,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Wl(t,e,r,null,n)}}var Go=null;function jc(t,e,n,r){if(Go=null,t=Bu(r),t=Zn(t),t!==null)if(e=xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Go=t,null}function Bm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E0()){case Hu:return 1;case Dm:return 4;case Bo:case S0:return 16;case Lm:return 536870912;default:return 16}default:return 16}}var vn=null,Qu=null,Io=null;function Hm(){if(Io)return Io;var t,e=Qu,n=e.length,r,s="value"in vn?vn.value:vn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Io=s.slice(t,1<r?1-r:void 0)}function bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uo(){return!0}function Kh(){return!1}function rt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?uo:Kh,this.isPropagationStopped=Kh,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yu=rt(ds),Ui=ue({},ds,{view:0,detail:0}),M0=rt(Ui),jl,Ol,Ps,Ua=ue({},Ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ps&&(Ps&&t.type==="mousemove"?(jl=t.screenX-Ps.screenX,Ol=t.screenY-Ps.screenY):Ol=jl=0,Ps=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:Ol}}),Qh=rt(Ua),F0=ue({},Ua,{dataTransfer:0}),U0=rt(F0),z0=ue({},Ui,{relatedTarget:0}),Dl=rt(z0),V0=ue({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=rt(V0),$0=ue({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),B0=rt($0),H0=ue({},ds,{data:0}),Yh=rt(H0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K0[t])?!!e[t]:!1}function Xu(){return Q0}var Y0=ue({},Ui,{key:function(t){if(t.key){var e=q0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?G0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(t){return t.type==="keypress"?bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),X0=rt(Y0),J0=ue({},Ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=rt(J0),Z0=ue({},Ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),ex=rt(Z0),tx=ue({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),nx=rt(tx),rx=ue({},Ua,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=rt(rx),ix=[9,13,27,32],Ju=Jt&&"CompositionEvent"in window,Gs=null;Jt&&"documentMode"in document&&(Gs=document.documentMode);var ox=Jt&&"TextEvent"in window&&!Gs,qm=Jt&&(!Ju||Gs&&8<Gs&&11>=Gs),Jh=" ",Zh=!1;function Gm(t,e){switch(t){case"keyup":return ix.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Km(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function ax(t,e){switch(t){case"compositionend":return Km(e);case"keypress":return e.which!==32?null:(Zh=!0,Jh);case"textInput":return t=e.data,t===Jh&&Zh?null:t;default:return null}}function lx(t,e){if(Tr)return t==="compositionend"||!Ju&&Gm(t,e)?(t=Hm(),Io=Qu=vn=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qm&&e.locale!=="ko"?null:e.data;default:return null}}var cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cx[t.type]:e==="textarea"}function Qm(t,e,n,r){km(r),e=Ko(e,"onChange"),0<e.length&&(n=new Yu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ks=null,pi=null;function ux(t){og(t,0)}function za(t){var e=Ar(t);if(ym(e))return t}function dx(t,e){if(t==="change")return e}var Ym=!1;if(Jt){var Ll;if(Jt){var Ml="oninput"in document;if(!Ml){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),Ml=typeof tf.oninput=="function"}Ll=Ml}else Ll=!1;Ym=Ll&&(!document.documentMode||9<document.documentMode)}function nf(){Ks&&(Ks.detachEvent("onpropertychange",Xm),pi=Ks=null)}function Xm(t){if(t.propertyName==="value"&&za(pi)){var e=[];Qm(e,pi,t,Bu(t)),Pm(ux,e)}}function hx(t,e,n){t==="focusin"?(nf(),Ks=e,pi=n,Ks.attachEvent("onpropertychange",Xm)):t==="focusout"&&nf()}function fx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return za(pi)}function px(t,e){if(t==="click")return za(e)}function mx(t,e){if(t==="input"||t==="change")return za(e)}function gx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nt=typeof Object.is=="function"?Object.is:gx;function mi(t,e){if(Nt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!mc.call(e,s)||!Nt(t[s],e[s]))return!1}return!0}function rf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sf(t,e){var n=rf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rf(n)}}function Jm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zm(){for(var t=window,e=Vo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vo(t.document)}return e}function Zu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vx(t){var e=Zm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jm(n.ownerDocument.documentElement,n)){if(r!==null&&Zu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=sf(n,i);var o=sf(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _x=Jt&&"documentMode"in document&&11>=document.documentMode,Pr=null,Oc=null,Qs=null,Dc=!1;function of(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dc||Pr==null||Pr!==Vo(r)||(r=Pr,"selectionStart"in r&&Zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qs&&mi(Qs,r)||(Qs=r,r=Ko(Oc,"onSelect"),0<r.length&&(e=new Yu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Pr)))}function ho(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rr={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Fl={},eg={};Jt&&(eg=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Va(t){if(Fl[t])return Fl[t];if(!Rr[t])return t;var e=Rr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in eg)return Fl[t]=e[n];return t}var tg=Va("animationend"),ng=Va("animationiteration"),rg=Va("animationstart"),sg=Va("transitionend"),ig=new Map,af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(t,e){ig.set(t,e),yr(e,[t])}for(var Ul=0;Ul<af.length;Ul++){var zl=af[Ul],yx=zl.toLowerCase(),xx=zl[0].toUpperCase()+zl.slice(1);Un(yx,"on"+xx)}Un(tg,"onAnimationEnd");Un(ng,"onAnimationIteration");Un(rg,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(sg,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function lf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,y0(r,e,void 0,t),t.currentTarget=null}function og(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;lf(s,a,u),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;lf(s,a,u),i=l}}}if($o)throw t=Pc,$o=!1,Pc=null,t}function te(t,e){var n=e[zc];n===void 0&&(n=e[zc]=new Set);var r=t+"__bubble";n.has(r)||(ag(e,t,2,!1),n.add(r))}function Vl(t,e,n){var r=0;e&&(r|=4),ag(n,t,r,e)}var fo="_reactListening"+Math.random().toString(36).slice(2);function gi(t){if(!t[fo]){t[fo]=!0,pm.forEach(function(n){n!=="selectionchange"&&(wx.has(n)||Vl(n,!1,t),Vl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fo]||(e[fo]=!0,Vl("selectionchange",!1,e))}}function ag(t,e,n,r){switch(Bm(e)){case 1:var s=D0;break;case 4:s=L0;break;default:s=Ku}n=s.bind(null,e,n,t),s=void 0,!Tc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Wl(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=Zn(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Pm(function(){var u=i,d=Bu(n),h=[];e:{var f=ig.get(t);if(f!==void 0){var _=Yu,p=t;switch(t){case"keypress":if(bo(n)===0)break e;case"keydown":case"keyup":_=X0;break;case"focusin":p="focus",_=Dl;break;case"focusout":p="blur",_=Dl;break;case"beforeblur":case"afterblur":_=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=U0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=ex;break;case tg:case ng:case rg:_=W0;break;case sg:_=nx;break;case"scroll":_=M0;break;case"wheel":_=sx;break;case"copy":case"cut":case"paste":_=B0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Xh}var y=(e&4)!==0,C=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var g=u,v;g!==null;){v=g;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,m!==null&&(x=ui(g,m),x!=null&&y.push(vi(g,x,v)))),C)break;g=g.return}0<y.length&&(f=new _(f,p,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==Ic&&(p=n.relatedTarget||n.fromElement)&&(Zn(p)||p[Zt]))break e;if((_||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,_?(p=n.relatedTarget||n.toElement,_=u,p=p?Zn(p):null,p!==null&&(C=xr(p),p!==C||p.tag!==5&&p.tag!==6)&&(p=null)):(_=null,p=u),_!==p)){if(y=Qh,x="onMouseLeave",m="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Xh,x="onPointerLeave",m="onPointerEnter",g="pointer"),C=_==null?f:Ar(_),v=p==null?f:Ar(p),f=new y(x,g+"leave",_,n,d),f.target=C,f.relatedTarget=v,x=null,Zn(d)===u&&(y=new y(m,g+"enter",p,n,d),y.target=v,y.relatedTarget=C,x=y),C=x,_&&p)t:{for(y=_,m=p,g=0,v=y;v;v=Nr(v))g++;for(v=0,x=m;x;x=Nr(x))v++;for(;0<g-v;)y=Nr(y),g--;for(;0<v-g;)m=Nr(m),v--;for(;g--;){if(y===m||m!==null&&y===m.alternate)break t;y=Nr(y),m=Nr(m)}y=null}else y=null;_!==null&&cf(h,f,_,y,!1),p!==null&&C!==null&&cf(h,C,p,y,!0)}}e:{if(f=u?Ar(u):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var S=dx;else if(ef(f))if(Ym)S=mx;else{S=fx;var T=hx}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=px);if(S&&(S=S(t,u))){Qm(h,S,n,d);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Cc(f,"number",f.value)}switch(T=u?Ar(u):window,t){case"focusin":(ef(T)||T.contentEditable==="true")&&(Pr=T,Oc=u,Qs=null);break;case"focusout":Qs=Oc=Pr=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,of(h,n,d);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":of(h,n,d)}var k;if(Ju)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Tr?Gm(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(qm&&n.locale!=="ko"&&(Tr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Tr&&(k=Hm()):(vn=d,Qu="value"in vn?vn.value:vn.textContent,Tr=!0)),T=Ko(u,R),0<T.length&&(R=new Yh(R,t,null,n,d),h.push({event:R,listeners:T}),k?R.data=k:(k=Km(n),k!==null&&(R.data=k)))),(k=ox?ax(t,n):lx(t,n))&&(u=Ko(u,"onBeforeInput"),0<u.length&&(d=new Yh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=k))}og(h,e)})}function vi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ko(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ui(t,n),i!=null&&r.unshift(vi(t,i,s)),i=ui(t,e),i!=null&&r.push(vi(t,i,s))),t=t.return}return r}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cf(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,s?(l=ui(n,i),l!=null&&o.unshift(vi(n,l,a))):s||(l=ui(n,i),l!=null&&o.push(vi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Cx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function uf(t){return(typeof t=="string"?t:""+t).replace(Cx,`
`).replace(Ex,"")}function po(t,e,n){if(e=uf(e),uf(t)!==e&&n)throw Error(w(425))}function Qo(){}var Lc=null,Mc=null;function Fc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uc=typeof setTimeout=="function"?setTimeout:void 0,Sx=typeof clearTimeout=="function"?clearTimeout:void 0,df=typeof Promise=="function"?Promise:void 0,Nx=typeof queueMicrotask=="function"?queueMicrotask:typeof df<"u"?function(t){return df.resolve(null).then(t).catch(kx)}:Uc;function kx(t){setTimeout(function(){throw t})}function $l(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),fi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);fi(e)}function En(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var hs=Math.random().toString(36).slice(2),Rt="__reactFiber$"+hs,_i="__reactProps$"+hs,Zt="__reactContainer$"+hs,zc="__reactEvents$"+hs,Ix="__reactListeners$"+hs,bx="__reactHandles$"+hs;function Zn(t){var e=t[Rt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zt]||n[Rt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hf(t);t!==null;){if(n=t[Rt])return n;t=hf(t)}return e}t=n,n=t.parentNode}return null}function zi(t){return t=t[Rt]||t[Zt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ar(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Wa(t){return t[_i]||null}var Vc=[],jr=-1;function zn(t){return{current:t}}function ne(t){0>jr||(t.current=Vc[jr],Vc[jr]=null,jr--)}function ee(t,e){jr++,Vc[jr]=t.current,t.current=e}var On={},Le=zn(On),Ge=zn(!1),ar=On;function Jr(t,e){var n=t.type.contextTypes;if(!n)return On;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ke(t){return t=t.childContextTypes,t!=null}function Yo(){ne(Ge),ne(Le)}function ff(t,e,n){if(Le.current!==On)throw Error(w(168));ee(Le,e),ee(Ge,n)}function lg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(w(108,h0(t)||"Unknown",s));return ue({},n,r)}function Xo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,ar=Le.current,ee(Le,t),ee(Ge,Ge.current),!0}function pf(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=lg(t,e,ar),r.__reactInternalMemoizedMergedChildContext=t,ne(Ge),ne(Le),ee(Le,t)):ne(Ge),ee(Ge,n)}var Ut=null,$a=!1,Bl=!1;function cg(t){Ut===null?Ut=[t]:Ut.push(t)}function Tx(t){$a=!0,cg(t)}function Vn(){if(!Bl&&Ut!==null){Bl=!0;var t=0,e=Q;try{var n=Ut;for(Q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,$a=!1}catch(s){throw Ut!==null&&(Ut=Ut.slice(t+1)),Om(Hu,Vn),s}finally{Q=e,Bl=!1}}return null}var Or=[],Dr=0,Jo=null,Zo=0,st=[],it=0,lr=null,$t=1,Bt="";function Qn(t,e){Or[Dr++]=Zo,Or[Dr++]=Jo,Jo=t,Zo=e}function ug(t,e,n){st[it++]=$t,st[it++]=Bt,st[it++]=lr,lr=t;var r=$t;t=Bt;var s=32-wt(r)-1;r&=~(1<<s),n+=1;var i=32-wt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,$t=1<<32-wt(e)+s|n<<s|r,Bt=i+t}else $t=1<<i|n<<s|r,Bt=t}function ed(t){t.return!==null&&(Qn(t,1),ug(t,1,0))}function td(t){for(;t===Jo;)Jo=Or[--Dr],Or[Dr]=null,Zo=Or[--Dr],Or[Dr]=null;for(;t===lr;)lr=st[--it],st[it]=null,Bt=st[--it],st[it]=null,$t=st[--it],st[it]=null}var Ze=null,Je=null,se=!1,vt=null;function dg(t,e){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Je=En(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=lr!==null?{id:$t,overflow:Bt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ze=t,Je=null,!0):!1;default:return!1}}function Wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $c(t){if(se){var e=Je;if(e){var n=e;if(!mf(t,e)){if(Wc(t))throw Error(w(418));e=En(n.nextSibling);var r=Ze;e&&mf(t,e)?dg(r,n):(t.flags=t.flags&-4097|2,se=!1,Ze=t)}}else{if(Wc(t))throw Error(w(418));t.flags=t.flags&-4097|2,se=!1,Ze=t}}}function gf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function mo(t){if(t!==Ze)return!1;if(!se)return gf(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fc(t.type,t.memoizedProps)),e&&(e=Je)){if(Wc(t))throw hg(),Error(w(418));for(;e;)dg(t,e),e=En(e.nextSibling)}if(gf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Je=En(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Je=null}}else Je=Ze?En(t.stateNode.nextSibling):null;return!0}function hg(){for(var t=Je;t;)t=En(t.nextSibling)}function Zr(){Je=Ze=null,se=!1}function nd(t){vt===null?vt=[t]:vt.push(t)}var Px=on.ReactCurrentBatchConfig;function Rs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function go(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vf(t){var e=t._init;return e(t._payload)}function fg(t){function e(m,g){if(t){var v=m.deletions;v===null?(m.deletions=[g],m.flags|=16):v.push(g)}}function n(m,g){if(!t)return null;for(;g!==null;)e(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function s(m,g){return m=In(m,g),m.index=0,m.sibling=null,m}function i(m,g,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<g?(m.flags|=2,g):v):(m.flags|=2,g)):(m.flags|=1048576,g)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,g,v,x){return g===null||g.tag!==6?(g=Xl(v,m.mode,x),g.return=m,g):(g=s(g,v),g.return=m,g)}function l(m,g,v,x){var S=v.type;return S===br?d(m,g,v.props.children,x,v.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===un&&vf(S)===g.type)?(x=s(g,v.props),x.ref=Rs(m,g,v),x.return=m,x):(x=Do(v.type,v.key,v.props,null,m.mode,x),x.ref=Rs(m,g,v),x.return=m,x)}function u(m,g,v,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Jl(v,m.mode,x),g.return=m,g):(g=s(g,v.children||[]),g.return=m,g)}function d(m,g,v,x,S){return g===null||g.tag!==7?(g=ir(v,m.mode,x,S),g.return=m,g):(g=s(g,v),g.return=m,g)}function h(m,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Xl(""+g,m.mode,v),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case so:return v=Do(g.type,g.key,g.props,null,m.mode,v),v.ref=Rs(m,null,g),v.return=m,v;case Ir:return g=Jl(g,m.mode,v),g.return=m,g;case un:var x=g._init;return h(m,x(g._payload),v)}if(zs(g)||ks(g))return g=ir(g,m.mode,v,null),g.return=m,g;go(m,g)}return null}function f(m,g,v,x){var S=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(m,g,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case so:return v.key===S?l(m,g,v,x):null;case Ir:return v.key===S?u(m,g,v,x):null;case un:return S=v._init,f(m,g,S(v._payload),x)}if(zs(v)||ks(v))return S!==null?null:d(m,g,v,x,null);go(m,v)}return null}function _(m,g,v,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(v)||null,a(g,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case so:return m=m.get(x.key===null?v:x.key)||null,l(g,m,x,S);case Ir:return m=m.get(x.key===null?v:x.key)||null,u(g,m,x,S);case un:var T=x._init;return _(m,g,v,T(x._payload),S)}if(zs(x)||ks(x))return m=m.get(v)||null,d(g,m,x,S,null);go(g,x)}return null}function p(m,g,v,x){for(var S=null,T=null,k=g,R=g=0,K=null;k!==null&&R<v.length;R++){k.index>R?(K=k,k=null):K=k.sibling;var M=f(m,k,v[R],x);if(M===null){k===null&&(k=K);break}t&&k&&M.alternate===null&&e(m,k),g=i(M,g,R),T===null?S=M:T.sibling=M,T=M,k=K}if(R===v.length)return n(m,k),se&&Qn(m,R),S;if(k===null){for(;R<v.length;R++)k=h(m,v[R],x),k!==null&&(g=i(k,g,R),T===null?S=k:T.sibling=k,T=k);return se&&Qn(m,R),S}for(k=r(m,k);R<v.length;R++)K=_(k,m,R,v[R],x),K!==null&&(t&&K.alternate!==null&&k.delete(K.key===null?R:K.key),g=i(K,g,R),T===null?S=K:T.sibling=K,T=K);return t&&k.forEach(function(Ye){return e(m,Ye)}),se&&Qn(m,R),S}function y(m,g,v,x){var S=ks(v);if(typeof S!="function")throw Error(w(150));if(v=S.call(v),v==null)throw Error(w(151));for(var T=S=null,k=g,R=g=0,K=null,M=v.next();k!==null&&!M.done;R++,M=v.next()){k.index>R?(K=k,k=null):K=k.sibling;var Ye=f(m,k,M.value,x);if(Ye===null){k===null&&(k=K);break}t&&k&&Ye.alternate===null&&e(m,k),g=i(Ye,g,R),T===null?S=Ye:T.sibling=Ye,T=Ye,k=K}if(M.done)return n(m,k),se&&Qn(m,R),S;if(k===null){for(;!M.done;R++,M=v.next())M=h(m,M.value,x),M!==null&&(g=i(M,g,R),T===null?S=M:T.sibling=M,T=M);return se&&Qn(m,R),S}for(k=r(m,k);!M.done;R++,M=v.next())M=_(k,m,R,M.value,x),M!==null&&(t&&M.alternate!==null&&k.delete(M.key===null?R:M.key),g=i(M,g,R),T===null?S=M:T.sibling=M,T=M);return t&&k.forEach(function(qn){return e(m,qn)}),se&&Qn(m,R),S}function C(m,g,v,x){if(typeof v=="object"&&v!==null&&v.type===br&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case so:e:{for(var S=v.key,T=g;T!==null;){if(T.key===S){if(S=v.type,S===br){if(T.tag===7){n(m,T.sibling),g=s(T,v.props.children),g.return=m,m=g;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===un&&vf(S)===T.type){n(m,T.sibling),g=s(T,v.props),g.ref=Rs(m,T,v),g.return=m,m=g;break e}n(m,T);break}else e(m,T);T=T.sibling}v.type===br?(g=ir(v.props.children,m.mode,x,v.key),g.return=m,m=g):(x=Do(v.type,v.key,v.props,null,m.mode,x),x.ref=Rs(m,g,v),x.return=m,m=x)}return o(m);case Ir:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(m,g.sibling),g=s(g,v.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else e(m,g);g=g.sibling}g=Jl(v,m.mode,x),g.return=m,m=g}return o(m);case un:return T=v._init,C(m,g,T(v._payload),x)}if(zs(v))return p(m,g,v,x);if(ks(v))return y(m,g,v,x);go(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(m,g.sibling),g=s(g,v),g.return=m,m=g):(n(m,g),g=Xl(v,m.mode,x),g.return=m,m=g),o(m)):n(m,g)}return C}var es=fg(!0),pg=fg(!1),ea=zn(null),ta=null,Lr=null,rd=null;function sd(){rd=Lr=ta=null}function id(t){var e=ea.current;ne(ea),t._currentValue=e}function Bc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Hr(t,e){ta=t,rd=Lr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(He=!0),t.firstContext=null)}function ct(t){var e=t._currentValue;if(rd!==t)if(t={context:t,memoizedValue:e,next:null},Lr===null){if(ta===null)throw Error(w(308));Lr=t,ta.dependencies={lanes:0,firstContext:t}}else Lr=Lr.next=t;return e}var er=null;function od(t){er===null?er=[t]:er.push(t)}function mg(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,od(e)):(n.next=s.next,s.next=n),e.interleaved=n,en(t,r)}function en(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dn=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,en(t,n)}return s=r.interleaved,s===null?(e.next=e,od(r)):(e.next=s.next,s.next=e),r.interleaved=e,en(t,n)}function To(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qu(t,n)}}function _f(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function na(t,e,n,r){var s=t.updateQueue;dn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?i=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(i!==null){var h=s.baseState;o=0,d=u=l=null,a=i;do{var f=a.lane,_=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,y=a;switch(f=e,_=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){h=p.call(_,h,f);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,f=typeof p=="function"?p.call(_,h,f):p,f==null)break e;h=ue({},h,f);break e;case 2:dn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[a]:f.push(a))}else _={eventTime:_,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=_,l=h):d=d.next=_,o|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;f=a,a=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(d===null&&(l=h),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ur|=o,t.lanes=o,t.memoizedState=h}}function yf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(w(191,s));s.call(r)}}}var Vi={},jt=zn(Vi),yi=zn(Vi),xi=zn(Vi);function tr(t){if(t===Vi)throw Error(w(174));return t}function ld(t,e){switch(ee(xi,e),ee(yi,t),ee(jt,Vi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sc(e,t)}ne(jt),ee(jt,e)}function ts(){ne(jt),ne(yi),ne(xi)}function vg(t){tr(xi.current);var e=tr(jt.current),n=Sc(e,t.type);e!==n&&(ee(yi,t),ee(jt,n))}function cd(t){yi.current===t&&(ne(jt),ne(yi))}var le=zn(0);function ra(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hl=[];function ud(){for(var t=0;t<Hl.length;t++)Hl[t]._workInProgressVersionPrimary=null;Hl.length=0}var Po=on.ReactCurrentDispatcher,ql=on.ReactCurrentBatchConfig,cr=0,ce=null,ye=null,Ee=null,sa=!1,Ys=!1,wi=0,Rx=0;function je(){throw Error(w(321))}function dd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nt(t[n],e[n]))return!1;return!0}function hd(t,e,n,r,s,i){if(cr=i,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Po.current=t===null||t.memoizedState===null?Dx:Lx,t=n(r,s),Ys){i=0;do{if(Ys=!1,wi=0,25<=i)throw Error(w(301));i+=1,Ee=ye=null,e.updateQueue=null,Po.current=Mx,t=n(r,s)}while(Ys)}if(Po.current=ia,e=ye!==null&&ye.next!==null,cr=0,Ee=ye=ce=null,sa=!1,e)throw Error(w(300));return t}function fd(){var t=wi!==0;return wi=0,t}function Pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ce.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function ut(){if(ye===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=Ee===null?ce.memoizedState:Ee.next;if(e!==null)Ee=e,ye=t;else{if(t===null)throw Error(w(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ee===null?ce.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function Ci(t,e){return typeof e=="function"?e(t):e}function Gl(t){var e=ut(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ye,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,u=i;do{var d=u.lane;if((cr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ce.lanes|=d,ur|=d}u=u.next}while(u!==null&&u!==i);l===null?o=r:l.next=a,Nt(r,e.memoizedState)||(He=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ce.lanes|=i,ur|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Kl(t){var e=ut(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Nt(i,e.memoizedState)||(He=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function _g(){}function yg(t,e){var n=ce,r=ut(),s=e(),i=!Nt(r.memoizedState,s);if(i&&(r.memoizedState=s,He=!0),r=r.queue,pd(Cg.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Ei(9,wg.bind(null,n,r,s,e),void 0,null),Ne===null)throw Error(w(349));cr&30||xg(n,e,s)}return s}function xg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wg(t,e,n,r){e.value=n,e.getSnapshot=r,Eg(e)&&Sg(t)}function Cg(t,e,n){return n(function(){Eg(e)&&Sg(t)})}function Eg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nt(t,n)}catch{return!0}}function Sg(t){var e=en(t,1);e!==null&&Ct(e,t,1,-1)}function xf(t){var e=Pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:t},e.queue=t,t=t.dispatch=Ox.bind(null,ce,t),[e.memoizedState,t]}function Ei(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ng(){return ut().memoizedState}function Ro(t,e,n,r){var s=Pt();ce.flags|=t,s.memoizedState=Ei(1|e,n,void 0,r===void 0?null:r)}function Ba(t,e,n,r){var s=ut();r=r===void 0?null:r;var i=void 0;if(ye!==null){var o=ye.memoizedState;if(i=o.destroy,r!==null&&dd(r,o.deps)){s.memoizedState=Ei(e,n,i,r);return}}ce.flags|=t,s.memoizedState=Ei(1|e,n,i,r)}function wf(t,e){return Ro(8390656,8,t,e)}function pd(t,e){return Ba(2048,8,t,e)}function kg(t,e){return Ba(4,2,t,e)}function Ig(t,e){return Ba(4,4,t,e)}function bg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tg(t,e,n){return n=n!=null?n.concat([t]):null,Ba(4,4,bg.bind(null,e,t),n)}function md(){}function Pg(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Rg(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ag(t,e,n){return cr&21?(Nt(n,e)||(n=Mm(),ce.lanes|=n,ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,He=!0),t.memoizedState=n)}function Ax(t,e){var n=Q;Q=n!==0&&4>n?n:4,t(!0);var r=ql.transition;ql.transition={};try{t(!1),e()}finally{Q=n,ql.transition=r}}function jg(){return ut().memoizedState}function jx(t,e,n){var r=kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Og(t))Dg(e,n);else if(n=mg(t,e,n,r),n!==null){var s=Ue();Ct(n,t,r,s),Lg(n,e,r)}}function Ox(t,e,n){var r=kn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Og(t))Dg(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Nt(a,o)){var l=e.interleaved;l===null?(s.next=s,od(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=mg(t,e,s,r),n!==null&&(s=Ue(),Ct(n,t,r,s),Lg(n,e,r))}}function Og(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function Dg(t,e){Ys=sa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Lg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qu(t,n)}}var ia={readContext:ct,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Dx={readContext:ct,useCallback:function(t,e){return Pt().memoizedState=[t,e===void 0?null:e],t},useContext:ct,useEffect:wf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ro(4194308,4,bg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ro(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ro(4,2,t,e)},useMemo:function(t,e){var n=Pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jx.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var e=Pt();return t={current:t},e.memoizedState=t},useState:xf,useDebugValue:md,useDeferredValue:function(t){return Pt().memoizedState=t},useTransition:function(){var t=xf(!1),e=t[0];return t=Ax.bind(null,t[1]),Pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ce,s=Pt();if(se){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),Ne===null)throw Error(w(349));cr&30||xg(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,wf(Cg.bind(null,r,i,t),[t]),r.flags|=2048,Ei(9,wg.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Pt(),e=Ne.identifierPrefix;if(se){var n=Bt,r=$t;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Rx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lx={readContext:ct,useCallback:Pg,useContext:ct,useEffect:pd,useImperativeHandle:Tg,useInsertionEffect:kg,useLayoutEffect:Ig,useMemo:Rg,useReducer:Gl,useRef:Ng,useState:function(){return Gl(Ci)},useDebugValue:md,useDeferredValue:function(t){var e=ut();return Ag(e,ye.memoizedState,t)},useTransition:function(){var t=Gl(Ci)[0],e=ut().memoizedState;return[t,e]},useMutableSource:_g,useSyncExternalStore:yg,useId:jg,unstable_isNewReconciler:!1},Mx={readContext:ct,useCallback:Pg,useContext:ct,useEffect:pd,useImperativeHandle:Tg,useInsertionEffect:kg,useLayoutEffect:Ig,useMemo:Rg,useReducer:Kl,useRef:Ng,useState:function(){return Kl(Ci)},useDebugValue:md,useDeferredValue:function(t){var e=ut();return ye===null?e.memoizedState=t:Ag(e,ye.memoizedState,t)},useTransition:function(){var t=Kl(Ci)[0],e=ut().memoizedState;return[t,e]},useMutableSource:_g,useSyncExternalStore:yg,useId:jg,unstable_isNewReconciler:!1};function mt(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ha={isMounted:function(t){return(t=t._reactInternals)?xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ue(),s=kn(t),i=Qt(r,s);i.payload=e,n!=null&&(i.callback=n),e=Sn(t,i,s),e!==null&&(Ct(e,t,s,r),To(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ue(),s=kn(t),i=Qt(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Sn(t,i,s),e!==null&&(Ct(e,t,s,r),To(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ue(),r=kn(t),s=Qt(n,r);s.tag=2,e!=null&&(s.callback=e),e=Sn(t,s,r),e!==null&&(Ct(e,t,r,n),To(e,t,r))}};function Cf(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!mi(n,r)||!mi(s,i):!0}function Mg(t,e,n){var r=!1,s=On,i=e.contextType;return typeof i=="object"&&i!==null?i=ct(i):(s=Ke(e)?ar:Le.current,r=e.contextTypes,i=(r=r!=null)?Jr(t,s):On),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ha,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Ef(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ha.enqueueReplaceState(e,e.state,null)}function qc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},ad(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=ct(i):(i=Ke(e)?ar:Le.current,s.context=Jr(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Hc(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ha.enqueueReplaceState(s,s.state,null),na(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ns(t,e){try{var n="",r=e;do n+=d0(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Ql(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Fx=typeof WeakMap=="function"?WeakMap:Map;function Fg(t,e,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){aa||(aa=!0,ru=r),Gc(t,e)},n}function Ug(t,e,n){n=Qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Gc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Gc(t,e),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Fx;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Jx.bind(null,t,e,n),e.then(t,t))}function Nf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kf(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qt(-1,1),e.tag=2,Sn(n,e,1))),n.lanes|=1),t)}var Ux=on.ReactCurrentOwner,He=!1;function Me(t,e,n,r){e.child=t===null?pg(e,null,n,r):es(e,t.child,n,r)}function If(t,e,n,r,s){n=n.render;var i=e.ref;return Hr(e,s),r=hd(t,e,n,r,i,s),n=fd(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,tn(t,e,s)):(se&&n&&ed(e),e.flags|=1,Me(t,e,r,s),e.child)}function bf(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Ed(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,zg(t,e,i,r,s)):(t=Do(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(o,r)&&t.ref===e.ref)return tn(t,e,s)}return e.flags|=1,t=In(i,r),t.ref=e.ref,t.return=e,e.child=t}function zg(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(mi(i,r)&&t.ref===e.ref)if(He=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(He=!0);else return e.lanes=t.lanes,tn(t,e,s)}return Kc(t,e,n,r,s)}function Vg(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Fr,Xe),Xe|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Fr,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ee(Fr,Xe),Xe|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ee(Fr,Xe),Xe|=r;return Me(t,e,s,n),e.child}function Wg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kc(t,e,n,r,s){var i=Ke(n)?ar:Le.current;return i=Jr(e,i),Hr(e,s),n=hd(t,e,n,r,i,s),r=fd(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,tn(t,e,s)):(se&&r&&ed(e),e.flags|=1,Me(t,e,n,s),e.child)}function Tf(t,e,n,r,s){if(Ke(n)){var i=!0;Xo(e)}else i=!1;if(Hr(e,s),e.stateNode===null)Ao(t,e),Mg(e,n,r),qc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Ke(n)?ar:Le.current,u=Jr(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ef(e,o,r,u),dn=!1;var f=e.memoizedState;o.state=f,na(e,r,o,s),l=e.memoizedState,a!==r||f!==l||Ge.current||dn?(typeof d=="function"&&(Hc(e,n,d,r),l=e.memoizedState),(a=dn||Cf(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,gg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:mt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ct(l):(l=Ke(n)?ar:Le.current,l=Jr(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Ef(e,o,r,l),dn=!1,f=e.memoizedState,o.state=f,na(e,r,o,s);var p=e.memoizedState;a!==h||f!==p||Ge.current||dn?(typeof _=="function"&&(Hc(e,n,_,r),p=e.memoizedState),(u=dn||Cf(e,n,u,r,f,p,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Qc(t,e,n,r,i,s)}function Qc(t,e,n,r,s,i){Wg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&pf(e,n,!1),tn(t,e,i);r=e.stateNode,Ux.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=es(e,t.child,null,i),e.child=es(e,null,a,i)):Me(t,e,a,i),e.memoizedState=r.state,s&&pf(e,n,!0),e.child}function $g(t){var e=t.stateNode;e.pendingContext?ff(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ff(t,e.context,!1),ld(t,e.containerInfo)}function Pf(t,e,n,r,s){return Zr(),nd(s),e.flags|=256,Me(t,e,n,r),e.child}var Yc={dehydrated:null,treeContext:null,retryLane:0};function Xc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bg(t,e,n){var r=e.pendingProps,s=le.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ee(le,s&1),t===null)return $c(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ka(o,r,0,null),t=ir(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Xc(n),e.memoizedState=Yc,t):gd(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return zx(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=In(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=In(a,i):(i=ir(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Xc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Yc,r}return i=t.child,t=i.sibling,r=In(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gd(t,e){return e=Ka({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vo(t,e,n,r){return r!==null&&nd(r),es(e,t.child,null,n),t=gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zx(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Ql(Error(w(422))),vo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Ka({mode:"visible",children:r.children},s,0,null),i=ir(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&es(e,t.child,null,o),e.child.memoizedState=Xc(o),e.memoizedState=Yc,i);if(!(e.mode&1))return vo(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(w(419)),r=Ql(i,r,void 0),vo(t,e,o,r)}if(a=(o&t.childLanes)!==0,He||a){if(r=Ne,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,en(t,s),Ct(r,t,s,-1))}return Cd(),r=Ql(Error(w(421))),vo(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Zx.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Je=En(s.nextSibling),Ze=e,se=!0,vt=null,t!==null&&(st[it++]=$t,st[it++]=Bt,st[it++]=lr,$t=t.id,Bt=t.overflow,lr=e),e=gd(e,r.children),e.flags|=4096,e)}function Rf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bc(t.return,e,n)}function Yl(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Hg(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Me(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rf(t,n,e);else if(t.tag===19)Rf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(le,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ra(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Yl(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ra(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Yl(e,!0,n,null,i);break;case"together":Yl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ao(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Vx(t,e,n){switch(e.tag){case 3:$g(e),Zr();break;case 5:vg(e);break;case 1:Ke(e.type)&&Xo(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ee(ea,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?Bg(t,e,n):(ee(le,le.current&1),t=tn(t,e,n),t!==null?t.sibling:null);ee(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Hg(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ee(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,Vg(t,e,n)}return tn(t,e,n)}var qg,Jc,Gg,Kg;qg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jc=function(){};Gg=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,tr(jt.current);var i=null;switch(n){case"input":s=xc(t,s),r=xc(t,r),i=[];break;case"select":s=ue({},s,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":s=Ec(t,s),r=Ec(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qo)}Nc(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(li.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(li.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&te("scroll",t),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};Kg=function(t,e,n,r){n!==r&&(e.flags|=4)};function As(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Wx(t,e,n){var r=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(e),null;case 1:return Ke(e.type)&&Yo(),Oe(e),null;case 3:return r=e.stateNode,ts(),ne(Ge),ne(Le),ud(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(mo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vt!==null&&(ou(vt),vt=null))),Jc(t,e),Oe(e),null;case 5:cd(e);var s=tr(xi.current);if(n=e.type,t!==null&&e.stateNode!=null)Gg(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Oe(e),null}if(t=tr(jt.current),mo(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Rt]=e,r[_i]=i,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(s=0;s<Ws.length;s++)te(Ws[s],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Uh(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":Vh(r,i),te("invalid",r)}Nc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&po(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&po(r.textContent,a,t),s=["children",""+a]):li.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":io(r),zh(r,i,!0);break;case"textarea":io(r),Wh(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Qo)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rt]=e,t[_i]=r,qg(t,e,!1,!1),e.stateNode=t;e:{switch(o=kc(n,r),n){case"dialog":te("cancel",t),te("close",t),s=r;break;case"iframe":case"object":case"embed":te("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ws.length;s++)te(Ws[s],t);s=r;break;case"source":te("error",t),s=r;break;case"img":case"image":case"link":te("error",t),te("load",t),s=r;break;case"details":te("toggle",t),s=r;break;case"input":Uh(t,r),s=xc(t,r),te("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ue({},r,{value:void 0}),te("invalid",t);break;case"textarea":Vh(t,r),s=Ec(t,r),te("invalid",t);break;default:s=r}Nc(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Nm(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Em(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ci(t,l):typeof l=="number"&&ci(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(li.hasOwnProperty(i)?l!=null&&i==="onScroll"&&te("scroll",t):l!=null&&zu(t,i,l,o))}switch(n){case"input":io(t),zh(t,r,!1);break;case"textarea":io(t),Wh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jn(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Vr(t,!!r.multiple,i,!1):r.defaultValue!=null&&Vr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Oe(e),null;case 6:if(t&&e.stateNode!=null)Kg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=tr(xi.current),tr(jt.current),mo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rt]=e,(i=r.nodeValue!==n)&&(t=Ze,t!==null))switch(t.tag){case 3:po(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=e,e.stateNode=r}return Oe(e),null;case 13:if(ne(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&Je!==null&&e.mode&1&&!(e.flags&128))hg(),Zr(),e.flags|=98560,i=!1;else if(i=mo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(w(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Rt]=e}else Zr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Oe(e),i=!1}else vt!==null&&(ou(vt),vt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?we===0&&(we=3):Cd())),e.updateQueue!==null&&(e.flags|=4),Oe(e),null);case 4:return ts(),Jc(t,e),t===null&&gi(e.stateNode.containerInfo),Oe(e),null;case 10:return id(e.type._context),Oe(e),null;case 17:return Ke(e.type)&&Yo(),Oe(e),null;case 19:if(ne(le),i=e.memoizedState,i===null)return Oe(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)As(i,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ra(t),o!==null){for(e.flags|=128,As(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(le,le.current&1|2),e.child}t=t.sibling}i.tail!==null&&me()>rs&&(e.flags|=128,r=!0,As(i,!1),e.lanes=4194304)}else{if(!r)if(t=ra(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),As(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!se)return Oe(e),null}else 2*me()-i.renderingStartTime>rs&&n!==1073741824&&(e.flags|=128,r=!0,As(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=me(),e.sibling=null,n=le.current,ee(le,r?n&1|2:n&1),e):(Oe(e),null);case 22:case 23:return wd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xe&1073741824&&(Oe(e),e.subtreeFlags&6&&(e.flags|=8192)):Oe(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function $x(t,e){switch(td(e),e.tag){case 1:return Ke(e.type)&&Yo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ts(),ne(Ge),ne(Le),ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cd(e),null;case 13:if(ne(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Zr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(le),null;case 4:return ts(),null;case 10:return id(e.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var _o=!1,De=!1,Bx=typeof WeakSet=="function"?WeakSet:Set,b=null;function Mr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function Zc(t,e,n){try{n()}catch(r){he(t,e,r)}}var Af=!1;function Hx(t,e){if(Lc=qo,t=Zm(),Zu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var _;h!==n||s!==0&&h.nodeType!==3||(a=o+s),h!==i||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)f=h,h=_;for(;;){if(h===t)break t;if(f===n&&++u===s&&(a=o),f===i&&++d===r&&(l=o),(_=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mc={focusedElem:t,selectionRange:n},qo=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,C=p.memoizedState,m=e.stateNode,g=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:mt(e.type,y),C);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){he(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return p=Af,Af=!1,p}function Xs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Zc(e,n,i)}s=s.next}while(s!==r)}}function qa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function eu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qg(t){var e=t.alternate;e!==null&&(t.alternate=null,Qg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rt],delete e[_i],delete e[zc],delete e[Ix],delete e[bx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yg(t){return t.tag===5||t.tag===3||t.tag===4}function jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qo));else if(r!==4&&(t=t.child,t!==null))for(tu(t,e,n),t=t.sibling;t!==null;)tu(t,e,n),t=t.sibling}function nu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nu(t,e,n),t=t.sibling;t!==null;)nu(t,e,n),t=t.sibling}var be=null,gt=!1;function ln(t,e,n){for(n=n.child;n!==null;)Xg(t,e,n),n=n.sibling}function Xg(t,e,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Fa,n)}catch{}switch(n.tag){case 5:De||Mr(n,e);case 6:var r=be,s=gt;be=null,ln(t,e,n),be=r,gt=s,be!==null&&(gt?(t=be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(gt?(t=be,n=n.stateNode,t.nodeType===8?$l(t.parentNode,n):t.nodeType===1&&$l(t,n),fi(t)):$l(be,n.stateNode));break;case 4:r=be,s=gt,be=n.stateNode.containerInfo,gt=!0,ln(t,e,n),be=r,gt=s;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Zc(n,e,o),s=s.next}while(s!==r)}ln(t,e,n);break;case 1:if(!De&&(Mr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,e,a)}ln(t,e,n);break;case 21:ln(t,e,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,ln(t,e,n),De=r):ln(t,e,n);break;default:ln(t,e,n)}}function Of(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Bx),e.forEach(function(r){var s=ew.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,gt=!1;break e;case 3:be=a.stateNode.containerInfo,gt=!0;break e;case 4:be=a.stateNode.containerInfo,gt=!0;break e}a=a.return}if(be===null)throw Error(w(160));Xg(i,o,s),be=null,gt=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){he(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jg(e,t),e=e.sibling}function Jg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),Tt(t),r&4){try{Xs(3,t,t.return),qa(3,t)}catch(y){he(t,t.return,y)}try{Xs(5,t,t.return)}catch(y){he(t,t.return,y)}}break;case 1:ft(e,t),Tt(t),r&512&&n!==null&&Mr(n,n.return);break;case 5:if(ft(e,t),Tt(t),r&512&&n!==null&&Mr(n,n.return),t.flags&32){var s=t.stateNode;try{ci(s,"")}catch(y){he(t,t.return,y)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&xm(s,i),kc(a,o);var u=kc(a,i);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Nm(s,h):d==="dangerouslySetInnerHTML"?Em(s,h):d==="children"?ci(s,h):zu(s,d,h,u)}switch(a){case"input":wc(s,i);break;case"textarea":wm(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?Vr(s,!!i.multiple,_,!1):f!==!!i.multiple&&(i.defaultValue!=null?Vr(s,!!i.multiple,i.defaultValue,!0):Vr(s,!!i.multiple,i.multiple?[]:"",!1))}s[_i]=i}catch(y){he(t,t.return,y)}}break;case 6:if(ft(e,t),Tt(t),r&4){if(t.stateNode===null)throw Error(w(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(y){he(t,t.return,y)}}break;case 3:if(ft(e,t),Tt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(e.containerInfo)}catch(y){he(t,t.return,y)}break;case 4:ft(e,t),Tt(t);break;case 13:ft(e,t),Tt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(yd=me())),r&4&&Of(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(De=(u=De)||d,ft(e,t),De=u):ft(e,t),Tt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(b=t,d=t.child;d!==null;){for(h=b=d;b!==null;){switch(f=b,_=f.child,f.tag){case 0:case 11:case 14:case 15:Xs(4,f,f.return);break;case 1:Mr(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(y){he(r,n,y)}}break;case 5:Mr(f,f.return);break;case 22:if(f.memoizedState!==null){Lf(h);continue}}_!==null?(_.return=f,b=_):Lf(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{s=h.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sm("display",o))}catch(y){he(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){he(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ft(e,t),Tt(t),r&4&&Of(t);break;case 21:break;default:ft(e,t),Tt(t)}}function Tt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yg(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ci(s,""),r.flags&=-33);var i=jf(t);nu(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=jf(t);tu(t,a,o);break;default:throw Error(w(161))}}catch(l){he(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qx(t,e,n){b=t,Zg(t)}function Zg(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var s=b,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||_o;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||De;a=_o;var u=De;if(_o=o,(De=l)&&!u)for(b=s;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?Mf(s):l!==null?(l.return=o,b=l):Mf(s);for(;i!==null;)b=i,Zg(i),i=i.sibling;b=s,_o=a,De=u}Df(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,b=i):Df(t)}}function Df(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:De||qa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!De)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:mt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&yf(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&fi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}De||e.flags&512&&eu(e)}catch(f){he(e,e.return,f)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function Lf(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function Mf(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qa(4,e)}catch(l){he(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){he(e,s,l)}}var i=e.return;try{eu(e)}catch(l){he(e,i,l)}break;case 5:var o=e.return;try{eu(e)}catch(l){he(e,o,l)}}}catch(l){he(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var Gx=Math.ceil,oa=on.ReactCurrentDispatcher,vd=on.ReactCurrentOwner,lt=on.ReactCurrentBatchConfig,W=0,Ne=null,_e=null,Pe=0,Xe=0,Fr=zn(0),we=0,Si=null,ur=0,Ga=0,_d=0,Js=null,Be=null,yd=0,rs=1/0,Ft=null,aa=!1,ru=null,Nn=null,yo=!1,_n=null,la=0,Zs=0,su=null,jo=-1,Oo=0;function Ue(){return W&6?me():jo!==-1?jo:jo=me()}function kn(t){return t.mode&1?W&2&&Pe!==0?Pe&-Pe:Px.transition!==null?(Oo===0&&(Oo=Mm()),Oo):(t=Q,t!==0||(t=window.event,t=t===void 0?16:Bm(t.type)),t):1}function Ct(t,e,n,r){if(50<Zs)throw Zs=0,su=null,Error(w(185));Fi(t,n,r),(!(W&2)||t!==Ne)&&(t===Ne&&(!(W&2)&&(Ga|=n),we===4&&fn(t,Pe)),Qe(t,r),n===1&&W===0&&!(e.mode&1)&&(rs=me()+500,$a&&Vn()))}function Qe(t,e){var n=t.callbackNode;P0(t,e);var r=Ho(t,t===Ne?Pe:0);if(r===0)n!==null&&Hh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hh(n),e===1)t.tag===0?Tx(Ff.bind(null,t)):cg(Ff.bind(null,t)),Nx(function(){!(W&6)&&Vn()}),n=null;else{switch(Fm(r)){case 1:n=Hu;break;case 4:n=Dm;break;case 16:n=Bo;break;case 536870912:n=Lm;break;default:n=Bo}n=av(n,ev.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ev(t,e){if(jo=-1,Oo=0,W&6)throw Error(w(327));var n=t.callbackNode;if(qr()&&t.callbackNode!==n)return null;var r=Ho(t,t===Ne?Pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ca(t,r);else{e=r;var s=W;W|=2;var i=nv();(Ne!==t||Pe!==e)&&(Ft=null,rs=me()+500,sr(t,e));do try{Yx();break}catch(a){tv(t,a)}while(!0);sd(),oa.current=i,W=s,_e!==null?e=0:(Ne=null,Pe=0,e=we)}if(e!==0){if(e===2&&(s=Rc(t),s!==0&&(r=s,e=iu(t,s))),e===1)throw n=Si,sr(t,0),fn(t,r),Qe(t,me()),n;if(e===6)fn(t,r);else{if(s=t.current.alternate,!(r&30)&&!Kx(s)&&(e=ca(t,r),e===2&&(i=Rc(t),i!==0&&(r=i,e=iu(t,i))),e===1))throw n=Si,sr(t,0),fn(t,r),Qe(t,me()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Yn(t,Be,Ft);break;case 3:if(fn(t,r),(r&130023424)===r&&(e=yd+500-me(),10<e)){if(Ho(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ue(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Uc(Yn.bind(null,t,Be,Ft),e);break}Yn(t,Be,Ft);break;case 4:if(fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-wt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gx(r/1960))-r,10<r){t.timeoutHandle=Uc(Yn.bind(null,t,Be,Ft),r);break}Yn(t,Be,Ft);break;case 5:Yn(t,Be,Ft);break;default:throw Error(w(329))}}}return Qe(t,me()),t.callbackNode===n?ev.bind(null,t):null}function iu(t,e){var n=Js;return t.current.memoizedState.isDehydrated&&(sr(t,e).flags|=256),t=ca(t,e),t!==2&&(e=Be,Be=n,e!==null&&ou(e)),t}function ou(t){Be===null?Be=t:Be.push.apply(Be,t)}function Kx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Nt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fn(t,e){for(e&=~_d,e&=~Ga,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wt(e),r=1<<n;t[n]=-1,e&=~r}}function Ff(t){if(W&6)throw Error(w(327));qr();var e=Ho(t,0);if(!(e&1))return Qe(t,me()),null;var n=ca(t,e);if(t.tag!==0&&n===2){var r=Rc(t);r!==0&&(e=r,n=iu(t,r))}if(n===1)throw n=Si,sr(t,0),fn(t,e),Qe(t,me()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yn(t,Be,Ft),Qe(t,me()),null}function xd(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(rs=me()+500,$a&&Vn())}}function dr(t){_n!==null&&_n.tag===0&&!(W&6)&&qr();var e=W;W|=1;var n=lt.transition,r=Q;try{if(lt.transition=null,Q=1,t)return t()}finally{Q=r,lt.transition=n,W=e,!(W&6)&&Vn()}}function wd(){Xe=Fr.current,ne(Fr)}function sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Sx(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yo();break;case 3:ts(),ne(Ge),ne(Le),ud();break;case 5:cd(r);break;case 4:ts();break;case 13:ne(le);break;case 19:ne(le);break;case 10:id(r.type._context);break;case 22:case 23:wd()}n=n.return}if(Ne=t,_e=t=In(t.current,null),Pe=Xe=e,we=0,Si=null,_d=Ga=ur=0,Be=Js=null,er!==null){for(e=0;e<er.length;e++)if(n=er[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}er=null}return t}function tv(t,e){do{var n=_e;try{if(sd(),Po.current=ia,sa){for(var r=ce.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}sa=!1}if(cr=0,Ee=ye=ce=null,Ys=!1,wi=0,vd.current=null,n===null||n.return===null){we=1,Si=e,_e=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=Pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Nf(o);if(_!==null){_.flags&=-257,kf(_,o,a,i,e),_.mode&1&&Sf(i,u,e),e=_,l=u;var p=e.updateQueue;if(p===null){var y=new Set;y.add(l),e.updateQueue=y}else p.add(l);break e}else{if(!(e&1)){Sf(i,u,e),Cd();break e}l=Error(w(426))}}else if(se&&a.mode&1){var C=Nf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),kf(C,o,a,i,e),nd(ns(l,a));break e}}i=l=ns(l,a),we!==4&&(we=2),Js===null?Js=[i]:Js.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=Fg(i,l,e);_f(i,m);break e;case 1:a=l;var g=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Nn===null||!Nn.has(v)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=Ug(i,a,e);_f(i,x);break e}}i=i.return}while(i!==null)}sv(n)}catch(S){e=S,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function nv(){var t=oa.current;return oa.current=ia,t===null?ia:t}function Cd(){(we===0||we===3||we===2)&&(we=4),Ne===null||!(ur&268435455)&&!(Ga&268435455)||fn(Ne,Pe)}function ca(t,e){var n=W;W|=2;var r=nv();(Ne!==t||Pe!==e)&&(Ft=null,sr(t,e));do try{Qx();break}catch(s){tv(t,s)}while(!0);if(sd(),W=n,oa.current=r,_e!==null)throw Error(w(261));return Ne=null,Pe=0,we}function Qx(){for(;_e!==null;)rv(_e)}function Yx(){for(;_e!==null&&!w0();)rv(_e)}function rv(t){var e=ov(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?sv(t):_e=e,vd.current=null}function sv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$x(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,_e=null;return}}else if(n=Wx(n,e,Xe),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);we===0&&(we=5)}function Yn(t,e,n){var r=Q,s=lt.transition;try{lt.transition=null,Q=1,Xx(t,e,n,r)}finally{lt.transition=s,Q=r}return null}function Xx(t,e,n,r){do qr();while(_n!==null);if(W&6)throw Error(w(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(R0(t,i),t===Ne&&(_e=Ne=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,av(Bo,function(){return qr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=lt.transition,lt.transition=null;var o=Q;Q=1;var a=W;W|=4,vd.current=null,Hx(t,n),Jg(n,t),vx(Mc),qo=!!Lc,Mc=Lc=null,t.current=n,qx(n),C0(),W=a,Q=o,lt.transition=i}else t.current=n;if(yo&&(yo=!1,_n=t,la=s),i=t.pendingLanes,i===0&&(Nn=null),N0(n.stateNode),Qe(t,me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(aa)throw aa=!1,t=ru,ru=null,t;return la&1&&t.tag!==0&&qr(),i=t.pendingLanes,i&1?t===su?Zs++:(Zs=0,su=t):Zs=0,Vn(),null}function qr(){if(_n!==null){var t=Fm(la),e=lt.transition,n=Q;try{if(lt.transition=null,Q=16>t?16:t,_n===null)var r=!1;else{if(t=_n,_n=null,la=0,W&6)throw Error(w(331));var s=W;for(W|=4,b=t.current;b!==null;){var i=b,o=i.child;if(b.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var d=b;switch(d.tag){case 0:case 11:case 15:Xs(8,d,i)}var h=d.child;if(h!==null)h.return=d,b=h;else for(;b!==null;){d=b;var f=d.sibling,_=d.return;if(Qg(d),d===u){b=null;break}if(f!==null){f.return=_,b=f;break}b=_}}}var p=i.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}b=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,b=o;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xs(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,b=m;break e}b=i.return}}var g=t.current;for(b=g;b!==null;){o=b;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,b=v;else e:for(o=g;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qa(9,a)}}catch(S){he(a,a.return,S)}if(a===o){b=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,b=x;break e}b=a.return}}if(W=s,Vn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Fa,t)}catch{}r=!0}return r}finally{Q=n,lt.transition=e}}return!1}function Uf(t,e,n){e=ns(n,e),e=Fg(t,e,1),t=Sn(t,e,1),e=Ue(),t!==null&&(Fi(t,1,e),Qe(t,e))}function he(t,e,n){if(t.tag===3)Uf(t,t,n);else for(;e!==null;){if(e.tag===3){Uf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){t=ns(n,t),t=Ug(e,t,1),e=Sn(e,t,1),t=Ue(),e!==null&&(Fi(e,1,t),Qe(e,t));break}}e=e.return}}function Jx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ue(),t.pingedLanes|=t.suspendedLanes&n,Ne===t&&(Pe&n)===n&&(we===4||we===3&&(Pe&130023424)===Pe&&500>me()-yd?sr(t,0):_d|=n),Qe(t,e)}function iv(t,e){e===0&&(t.mode&1?(e=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):e=1);var n=Ue();t=en(t,e),t!==null&&(Fi(t,e,n),Qe(t,n))}function Zx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iv(t,n)}function ew(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),iv(t,n)}var ov;ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)He=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return He=!1,Vx(t,e,n);He=!!(t.flags&131072)}else He=!1,se&&e.flags&1048576&&ug(e,Zo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ao(t,e),t=e.pendingProps;var s=Jr(e,Le.current);Hr(e,n),s=hd(null,e,r,t,s,n);var i=fd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)?(i=!0,Xo(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ad(e),s.updater=Ha,e.stateNode=s,s._reactInternals=e,qc(e,r,t,n),e=Qc(null,e,r,!0,i,n)):(e.tag=0,se&&i&&ed(e),Me(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ao(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=nw(r),t=mt(r,t),s){case 0:e=Kc(null,e,r,t,n);break e;case 1:e=Tf(null,e,r,t,n);break e;case 11:e=If(null,e,r,t,n);break e;case 14:e=bf(null,e,r,mt(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mt(r,s),Kc(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mt(r,s),Tf(t,e,r,s,n);case 3:e:{if($g(e),t===null)throw Error(w(387));r=e.pendingProps,i=e.memoizedState,s=i.element,gg(t,e),na(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ns(Error(w(423)),e),e=Pf(t,e,r,n,s);break e}else if(r!==s){s=ns(Error(w(424)),e),e=Pf(t,e,r,n,s);break e}else for(Je=En(e.stateNode.containerInfo.firstChild),Ze=e,se=!0,vt=null,n=pg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zr(),r===s){e=tn(t,e,n);break e}Me(t,e,r,n)}e=e.child}return e;case 5:return vg(e),t===null&&$c(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Fc(r,s)?o=null:i!==null&&Fc(r,i)&&(e.flags|=32),Wg(t,e),Me(t,e,o,n),e.child;case 6:return t===null&&$c(e),null;case 13:return Bg(t,e,n);case 4:return ld(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=es(e,null,r,n):Me(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mt(r,s),If(t,e,r,s,n);case 7:return Me(t,e,e.pendingProps,n),e.child;case 8:return Me(t,e,e.pendingProps.children,n),e.child;case 12:return Me(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ee(ea,r._currentValue),r._currentValue=o,i!==null)if(Nt(i.value,o)){if(i.children===s.children&&!Ge.current){e=tn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Qt(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Bc(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bc(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Me(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Hr(e,n),s=ct(s),r=r(s),e.flags|=1,Me(t,e,r,n),e.child;case 14:return r=e.type,s=mt(r,e.pendingProps),s=mt(r.type,s),bf(t,e,r,s,n);case 15:return zg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mt(r,s),Ao(t,e),e.tag=1,Ke(r)?(t=!0,Xo(e)):t=!1,Hr(e,n),Mg(e,r,s),qc(e,r,s,n),Qc(null,e,r,!0,t,n);case 19:return Hg(t,e,n);case 22:return Vg(t,e,n)}throw Error(w(156,e.tag))};function av(t,e){return Om(t,e)}function tw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,e,n,r){return new tw(t,e,n,r)}function Ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nw(t){if(typeof t=="function")return Ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wu)return 11;if(t===$u)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Do(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Ed(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case br:return ir(n.children,s,i,e);case Vu:o=8,s|=8;break;case gc:return t=ot(12,n,e,s|2),t.elementType=gc,t.lanes=i,t;case vc:return t=ot(13,n,e,s),t.elementType=vc,t.lanes=i,t;case _c:return t=ot(19,n,e,s),t.elementType=_c,t.lanes=i,t;case vm:return Ka(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mm:o=10;break e;case gm:o=9;break e;case Wu:o=11;break e;case $u:o=14;break e;case un:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=ot(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ir(t,e,n,r){return t=ot(7,t,r,e),t.lanes=n,t}function Ka(t,e,n,r){return t=ot(22,t,r,e),t.elementType=vm,t.lanes=n,t.stateNode={isHidden:!1},t}function Xl(t,e,n){return t=ot(6,t,null,e),t.lanes=n,t}function Jl(t,e,n){return e=ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rw(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Al(0),this.expirationTimes=Al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Al(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Sd(t,e,n,r,s,i,o,a,l){return t=new rw(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=ot(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(i),t}function sw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ir,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function lv(t){if(!t)return On;t=t._reactInternals;e:{if(xr(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Ke(n))return lg(t,n,e)}return e}function cv(t,e,n,r,s,i,o,a,l){return t=Sd(n,r,!0,t,s,i,o,a,l),t.context=lv(null),n=t.current,r=Ue(),s=kn(n),i=Qt(r,s),i.callback=e??null,Sn(n,i,s),t.current.lanes=s,Fi(t,s,r),Qe(t,r),t}function Qa(t,e,n,r){var s=e.current,i=Ue(),o=kn(s);return n=lv(n),e.context===null?e.context=n:e.pendingContext=n,e=Qt(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sn(s,e,o),t!==null&&(Ct(t,s,o,i),To(t,s,o)),o}function ua(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nd(t,e){zf(t,e),(t=t.alternate)&&zf(t,e)}function iw(){return null}var uv=typeof reportError=="function"?reportError:function(t){console.error(t)};function kd(t){this._internalRoot=t}Ya.prototype.render=kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Qa(t,e,null,null)};Ya.prototype.unmount=kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;dr(function(){Qa(null,t,null,null)}),e[Zt]=null}};function Ya(t){this._internalRoot=t}Ya.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hn.length&&e!==0&&e<hn[n].priority;n++);hn.splice(n,0,t),n===0&&$m(t)}};function Id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vf(){}function ow(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=ua(o);i.call(u)}}var o=cv(e,r,t,0,null,!1,!1,"",Vf);return t._reactRootContainer=o,t[Zt]=o.current,gi(t.nodeType===8?t.parentNode:t),dr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=ua(l);a.call(u)}}var l=Sd(t,0,!1,null,null,!1,!1,"",Vf);return t._reactRootContainer=l,t[Zt]=l.current,gi(t.nodeType===8?t.parentNode:t),dr(function(){Qa(e,l,n,r)}),l}function Ja(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=ua(o);a.call(l)}}Qa(e,o,t,s)}else o=ow(n,e,t,s,r);return ua(o)}Um=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vs(e.pendingLanes);n!==0&&(qu(e,n|1),Qe(e,me()),!(W&6)&&(rs=me()+500,Vn()))}break;case 13:dr(function(){var r=en(t,1);if(r!==null){var s=Ue();Ct(r,t,1,s)}}),Nd(t,1)}};Gu=function(t){if(t.tag===13){var e=en(t,134217728);if(e!==null){var n=Ue();Ct(e,t,134217728,n)}Nd(t,134217728)}};zm=function(t){if(t.tag===13){var e=kn(t),n=en(t,e);if(n!==null){var r=Ue();Ct(n,t,e,r)}Nd(t,e)}};Vm=function(){return Q};Wm=function(t,e){var n=Q;try{return Q=t,e()}finally{Q=n}};bc=function(t,e,n){switch(e){case"input":if(wc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Wa(r);if(!s)throw Error(w(90));ym(r),wc(r,s)}}}break;case"textarea":wm(t,n);break;case"select":e=n.value,e!=null&&Vr(t,!!n.multiple,e,!1)}};bm=xd;Tm=dr;var aw={usingClientEntryPoint:!1,Events:[zi,Ar,Wa,km,Im,xd]},js={findFiberByHostInstance:Zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lw={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Am(t),t===null?null:t.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||iw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Fa=xo.inject(lw),At=xo}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aw;nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(e))throw Error(w(200));return sw(t,e,null,n)};nt.createRoot=function(t,e){if(!Id(t))throw Error(w(299));var n=!1,r="",s=uv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Sd(t,1,!1,null,null,n,!1,r,s),t[Zt]=e.current,gi(t.nodeType===8?t.parentNode:t),new kd(e)};nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Am(e),t=t===null?null:t.stateNode,t};nt.flushSync=function(t){return dr(t)};nt.hydrate=function(t,e,n){if(!Xa(e))throw Error(w(200));return Ja(null,t,e,!0,n)};nt.hydrateRoot=function(t,e,n){if(!Id(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=uv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cv(e,null,t,1,n??null,s,!1,i,o),t[Zt]=e.current,gi(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ya(e)};nt.render=function(t,e,n){if(!Xa(e))throw Error(w(200));return Ja(null,t,e,!1,n)};nt.unmountComponentAtNode=function(t){if(!Xa(t))throw Error(w(40));return t._reactRootContainer?(dr(function(){Ja(null,null,t,!1,function(){t._reactRootContainer=null,t[Zt]=null})}),!0):!1};nt.unstable_batchedUpdates=xd;nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xa(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Ja(t,e,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dv)}catch(t){console.error(t)}}dv(),dm.exports=nt;var cw=dm.exports,Wf=cw;pc.createRoot=Wf.createRoot,pc.hydrateRoot=Wf.hydrateRoot;var $f={};/**
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
 */const hv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw fs(e)},fs=function(t){return new Error("Firebase Database ("+hv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const fv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(f=64)),r.push(n[d],n[h],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new dw;const f=i<<2|a>>4;if(r.push(f),u!==64){const _=a<<4&240|u>>2;if(r.push(_),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pv=function(t){const e=fv(t);return bd.encodeByteArray(e,!0)},da=function(t){return pv(t).replace(/\./g,"")},ha=function(t){try{return bd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hw(t){return mv(void 0,t)}function mv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fw(n)||(t[n]=mv(t[n],e[n]));return t}function fw(t){return t!=="__proto__"}/**
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
 */function pw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mw=()=>pw().__FIREBASE_DEFAULTS__,gw=()=>{if(typeof process>"u"||typeof $f>"u")return;const t=$f.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ha(t[1]);return e&&JSON.parse(e)},Td=()=>{try{return mw()||gw()||vw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gv=t=>{var e,n;return(n=(e=Td())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_w=t=>{const e=gv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},vv=()=>{var t;return(t=Td())===null||t===void 0?void 0:t.config},_v=t=>{var e;return(e=Td())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ps{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function yw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[da(JSON.stringify(n)),da(JSON.stringify(o)),""].join(".")}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function xw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ww(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cw(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ew(){return hv.NODE_ADMIN===!0}function Sw(){try{return typeof indexedDB=="object"}catch{return!1}}function Nw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const kw="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kw,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Iw(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Wn(s,a,r)}}function Iw(t,e){return t.replace(bw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bw=/\{\$([^}]+)}/g;/**
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
 */function Ni(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
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
 */const xv=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Ni(ha(i[0])||""),n=Ni(ha(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Tw=function(t){const e=xv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Pw=function(t){const e=xv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function au(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fa(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function pa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bf(i)&&Bf(o)){if(!pa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bf(t){return t!==null&&typeof t=="object"}/**
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
 */function ms(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Bs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Rw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let h=0;h<80;h++){h<40?h<20?(u=a^i&(o^a),d=1518500249):(u=i^o^a,d=1859775393):h<60?(u=i&o|a&(i|o),d=2400959708):(u=i^o^a,d=3395469782);const f=(s<<5|s>>>27)+u+l+d+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Aw(t,e){const n=new jw(t,e);return n.subscribe.bind(n)}class jw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ow(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zl),s.error===void 0&&(s.error=Zl),s.complete===void 0&&(s.complete=Zl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ow(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zl(){}function Za(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Dw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},el=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Lw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ps;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fw(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mw(t){return t===Xn?void 0:t}function Fw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Uw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const zw={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Vw=X.INFO,Ww={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},$w=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ww[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rd{constructor(e){this.name=e,this._logLevel=Vw,this._logHandler=$w,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Bw=(t,e)=>e.some(n=>t instanceof n);let Hf,qf;function Hw(){return Hf||(Hf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qw(){return qf||(qf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wv=new WeakMap,lu=new WeakMap,Cv=new WeakMap,ec=new WeakMap,Ad=new WeakMap;function Gw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wv.set(n,t)}).catch(()=>{}),Ad.set(e,t),e}function Kw(t){if(lu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});lu.set(t,e)}let cu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qw(t){cu=t(cu)}function Yw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tc(this),e,...n);return Cv.set(r,e.sort?e.sort():[e]),bn(r)}:qw().includes(t)?function(...e){return t.apply(tc(this),e),bn(wv.get(this))}:function(...e){return bn(t.apply(tc(this),e))}}function Xw(t){return typeof t=="function"?Yw(t):(t instanceof IDBTransaction&&Kw(t),Bw(t,Hw())?new Proxy(t,cu):t)}function bn(t){if(t instanceof IDBRequest)return Gw(t);if(ec.has(t))return ec.get(t);const e=Xw(t);return e!==t&&(ec.set(t,e),Ad.set(e,t)),e}const tc=t=>Ad.get(t);function Jw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=bn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(bn(o.result),l.oldVersion,l.newVersion,bn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Zw=["get","getKey","getAll","getAllKeys","count"],e1=["put","add","delete","clear"],nc=new Map;function Gf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nc.get(e))return nc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=e1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zw.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return nc.set(e,i),i}Qw(t=>({...t,get:(e,n,r)=>Gf(e,n)||t.get(e,n,r),has:(e,n)=>!!Gf(e,n)||t.has(e,n)}));/**
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
 */class t1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(n1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function n1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uu="@firebase/app",Kf="0.10.13";/**
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
 */const nn=new Rd("@firebase/app"),r1="@firebase/app-compat",s1="@firebase/analytics-compat",i1="@firebase/analytics",o1="@firebase/app-check-compat",a1="@firebase/app-check",l1="@firebase/auth",c1="@firebase/auth-compat",u1="@firebase/database",d1="@firebase/data-connect",h1="@firebase/database-compat",f1="@firebase/functions",p1="@firebase/functions-compat",m1="@firebase/installations",g1="@firebase/installations-compat",v1="@firebase/messaging",_1="@firebase/messaging-compat",y1="@firebase/performance",x1="@firebase/performance-compat",w1="@firebase/remote-config",C1="@firebase/remote-config-compat",E1="@firebase/storage",S1="@firebase/storage-compat",N1="@firebase/firestore",k1="@firebase/vertexai-preview",I1="@firebase/firestore-compat",b1="firebase",T1="10.14.1";/**
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
 */const du="[DEFAULT]",P1={[uu]:"fire-core",[r1]:"fire-core-compat",[i1]:"fire-analytics",[s1]:"fire-analytics-compat",[a1]:"fire-app-check",[o1]:"fire-app-check-compat",[l1]:"fire-auth",[c1]:"fire-auth-compat",[u1]:"fire-rtdb",[d1]:"fire-data-connect",[h1]:"fire-rtdb-compat",[f1]:"fire-fn",[p1]:"fire-fn-compat",[m1]:"fire-iid",[g1]:"fire-iid-compat",[v1]:"fire-fcm",[_1]:"fire-fcm-compat",[y1]:"fire-perf",[x1]:"fire-perf-compat",[w1]:"fire-rc",[C1]:"fire-rc-compat",[E1]:"fire-gcs",[S1]:"fire-gcs-compat",[N1]:"fire-fst",[I1]:"fire-fst-compat",[k1]:"fire-vertex","fire-js":"fire-js",[b1]:"fire-js-all"};/**
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
 */const ma=new Map,R1=new Map,hu=new Map;function Qf(t,e){try{t.container.addComponent(e)}catch(n){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(hu.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;hu.set(e,t);for(const n of ma.values())Qf(n,t);for(const n of R1.values())Qf(n,t);return!0}function jd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yt(t){return t.settings!==void 0}/**
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
 */const A1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new Wi("app","Firebase",A1);/**
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
 */class j1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
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
 */const gs=T1;function Ev(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:du,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tn.create("bad-app-name",{appName:String(s)});if(n||(n=vv()),!n)throw Tn.create("no-options");const i=ma.get(s);if(i){if(pa(n,i.options)&&pa(r,i.config))return i;throw Tn.create("duplicate-app",{appName:s})}const o=new Uw(s);for(const l of hu.values())o.addComponent(l);const a=new j1(n,r,o);return ma.set(s,a),a}function Sv(t=du){const e=ma.get(t);if(!e&&t===du&&vv())return Ev();if(!e)throw Tn.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let s=(r=P1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(a.join(" "));return}ss(new fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const O1="firebase-heartbeat-database",D1=1,ki="firebase-heartbeat-store";let rc=null;function Nv(){return rc||(rc=Jw(O1,D1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ki)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),rc}async function L1(t){try{const n=(await Nv()).transaction(ki),r=await n.objectStore(ki).get(kv(t));return await n.done,r}catch(e){if(e instanceof Wn)nn.warn(e.message);else{const n=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nn.warn(n.message)}}}async function Yf(t,e){try{const r=(await Nv()).transaction(ki,"readwrite");await r.objectStore(ki).put(e,kv(t)),await r.done}catch(n){if(n instanceof Wn)nn.warn(n.message);else{const r=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nn.warn(r.message)}}}function kv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const M1=1024,F1=30*24*60*60*1e3;class U1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new V1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=F1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xf(),{heartbeatsToSend:r,unsentEntries:s}=z1(this._heartbeatsCache.heartbeats),i=da(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return nn.warn(n),""}}}function Xf(){return new Date().toISOString().substring(0,10)}function z1(t,e=M1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Jf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class V1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sw()?Nw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await L1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jf(t){return da(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function W1(t){ss(new fr("platform-logger",e=>new t1(e),"PRIVATE")),ss(new fr("heartbeat",e=>new U1(e),"PRIVATE")),Pn(uu,Kf,t),Pn(uu,Kf,"esm2017"),Pn("fire-js","")}W1("");var Zf={};const ep="@firebase/database",tp="1.0.8";/**
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
 */let Iv="";function $1(t){Iv=t}/**
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
 */class B1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ni(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class H1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const bv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new B1(e)}}catch{}return new H1},nr=bv("localStorage"),q1=bv("sessionStorage");/**
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
 */const Gr=new Rd("@firebase/database"),Tv=function(){let t=1;return function(){return t++}}(),Pv=function(t){const e=Dw(t),n=new Rw;n.update(e);const r=n.digest();return bd.encodeByteArray(r)},$i=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=$i.apply(null,r):typeof r=="object"?e+=xe(r):e+=r,e+=" "}return e};let ei=null,np=!0;const G1=function(t,e){E(!0,"Can't turn on custom loggers persistently."),Gr.logLevel=X.VERBOSE,ei=Gr.log.bind(Gr)},Te=function(...t){if(np===!0&&(np=!1,ei===null&&q1.get("logging_enabled")===!0&&G1()),ei){const e=$i.apply(null,t);ei(e)}},Bi=function(t){return function(...e){Te(t,...e)}},fu=function(...t){const e="FIREBASE INTERNAL ERROR: "+$i(...t);Gr.error(e)},rn=function(...t){const e=`FIREBASE FATAL ERROR: ${$i(...t)}`;throw Gr.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+$i(...t);Gr.warn(e)},K1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Od=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Q1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},pr="[MIN_NAME]",Dn="[MAX_NAME]",wr=function(t,e){if(t===e)return 0;if(t===pr||e===Dn)return-1;if(e===pr||t===Dn)return 1;{const n=rp(t),r=rp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Y1=function(t,e){return t===e?0:t<e?-1:1},Os=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},Dd=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=xe(e[r]),n+=":",n+=Dd(t[e[r]]);return n+="}",n},Rv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Ae(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Av=function(t){E(!Od(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const d=u.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},X1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},J1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Z1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const eC=new RegExp("^-?(0*)\\d{1,10}$"),tC=-2147483648,nC=2147483647,rp=function(t){if(eC.test(t)){const e=Number(t);if(e>=tC&&e<=nC)return e}return null},vs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},rC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ti=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class sC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class iC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class Lo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Lo.OWNER="owner";/**
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
 */const Ld="5",jv="v",Ov="s",Dv="r",Lv="f",Mv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fv="ls",Uv="p",pu="ac",zv="websocket",Vv="long_polling";/**
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
 */class Wv{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=nr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&nr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function oC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $v(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===zv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);oC(t)&&(n.ns=t.namespace);const s=[];return Ae(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class aC{constructor(){this.counters_={}}incrementCounter(e,n=1){kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hw(this.counters_)}}/**
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
 */const sc={},ic={};function Md(t){const e=t.toString();return sc[e]||(sc[e]=new aC),sc[e]}function lC(t,e){const n=t.toString();return ic[n]||(ic[n]=e()),ic[n]}/**
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
 */class cC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&vs(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const sp="start",uC="close",dC="pLPCommand",hC="pRTLPCB",Bv="id",Hv="pw",qv="ser",fC="cb",pC="seg",mC="ts",gC="d",vC="dframe",Gv=1870,Kv=30,_C=Gv-Kv,yC=25e3,xC=3e4;class Ur{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bi(e),this.stats_=Md(n),this.urlFn=l=>(this.appCheckToken&&(l[pu]=this.appCheckToken),$v(n,Vv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xC)),Q1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fd((...i)=>{const[o,a,l,u,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===sp)this.id=a,this.password=l;else if(o===uC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[sp]="t",r[qv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[fC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[jv]=Ld,this.transportSessionId&&(r[Ov]=this.transportSessionId),this.lastSessionId&&(r[Fv]=this.lastSessionId),this.applicationId&&(r[Uv]=this.applicationId),this.appCheckToken&&(r[pu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Mv.test(location.hostname)&&(r[Dv]=Lv);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ur.forceAllow_=!0}static forceDisallow(){Ur.forceDisallow_=!0}static isAvailable(){return Ur.forceAllow_?!0:!Ur.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!X1()&&!J1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pv(n),s=Rv(r,_C);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[vC]="t",r[Bv]=e,r[Hv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fd{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Tv(),window[dC+this.uniqueCallbackIdentifier]=e,window[hC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Te("frame writing exception"),a.stack&&Te(a.stack),Te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Bv]=this.myID,e[Hv]=this.myPW,e[qv]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Kv+r.length<=Gv;){const o=this.pendingSegs.shift();r=r+"&"+pC+s+"="+o.seg+"&"+mC+s+"="+o.ts+"&"+gC+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(yC)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const wC=16384,CC=45e3;let ga=null;typeof MozWebSocket<"u"?ga=MozWebSocket:typeof WebSocket<"u"&&(ga=WebSocket);class _t{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bi(this.connId),this.stats_=Md(n),this.connURL=_t.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[jv]=Ld,typeof location<"u"&&location.hostname&&Mv.test(location.hostname)&&(o[Dv]=Lv),n&&(o[Ov]=n),r&&(o[Fv]=r),s&&(o[pu]=s),i&&(o[Uv]=i),$v(e,zv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,nr.set("previous_websocket_failure",!0);try{let r;Ew(),this.mySock=new ga(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ga!==null&&!_t.forceDisallow_}static previouslyFailed(){return nr.isInMemoryStorage||nr.get("previous_websocket_failure")===!0}markConnectionHealthy(){nr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ni(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Rv(n,wC);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(CC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
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
 */class Ii{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ur,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_t&&_t.isAvailable();let r=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_t];else{const s=this.transports_=[];for(const i of Ii.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ii.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ii.globalTransportInitialized_=!1;/**
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
 */const EC=6e4,SC=5e3,NC=10*1024,kC=100*1024,oc="t",ip="d",IC="s",op="r",bC="e",ap="o",lp="a",cp="n",up="p",TC="h";class PC{constructor(e,n,r,s,i,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bi("c:"+this.id+":"),this.transportManager_=new Ii(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ti(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(oc in e){const n=e[oc];n===lp?this.upgradeIfSecondaryHealthy_():n===op?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ap&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Os("t",e),r=Os("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:up,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:lp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:cp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Os("t",e),r=Os("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Os(oc,e);if(ip in e){const r=e[ip];if(n===TC){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===cp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===IC?this.onConnectionShutdown_(r):n===op?this.onReset_(r):n===bC?fu("Server Error: "+r):n===ap?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ld!==r&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ti(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ti(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:up,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(nr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Qv{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Yv{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class va extends Yv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new va}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const dp=32,hp=768;class Y{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new Y("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ln(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Y(t.pieces_,e)}function Ud(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function RC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function bi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Xv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Y(e,0)}function fe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Y)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Y(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Fe(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function AC(t,e){const n=bi(t,0),r=bi(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=wr(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function zd(t,e){if(Ln(t)!==Ln(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function at(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ln(t)>Ln(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class jC{constructor(e,n){this.errorPrefix_=n,this.parts_=bi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=el(this.parts_[r]);Jv(this)}}function OC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=el(e),Jv(t)}function DC(t){const e=t.parts_.pop();t.byteLength_-=el(e),t.parts_.length>0&&(t.byteLength_-=1)}function Jv(t){if(t.byteLength_>hp)throw new Error(t.errorPrefix_+"has a key path longer than "+hp+" bytes ("+t.byteLength_+").");if(t.parts_.length>dp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dp+") or object contains a cycle "+Jn(t))}function Jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Vd extends Yv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Vd}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ds=1e3,LC=60*5*1e3,fp=30*1e3,MC=1.3,FC=3e4,UC="server_kill",pp=3;class Yt extends Qv{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Yt.nextPersistentConnectionId_++,this.log_=Bi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ds,this.maxReconnectDelay_=LC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&va.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(xe(i)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new ps,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;Yt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kt(e,"w")){const r=hr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Pw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=fp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Tw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):fu("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>FC&&(this.reconnectDelay_=Ds),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*MC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Yt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new PC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{ze(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(UC)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ze(h),l())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],au(this.interruptReasons_)&&(this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Dd(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Y(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=pp&&(this.reconnectDelay_=fp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=pp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Iv.replace(/\./g,"-")]=1,Pd()?e["framework.cordova"]=1:yv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=va.getInstance().currentlyOnline();return au(this.interruptReasons_)&&e}}Yt.nextPersistentConnectionId_=0;Yt.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class tl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(pr,e),s=new z(pr,n);return this.compare(r,s)!==0}minPost(){return z.MIN}}/**
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
 */let wo;class Zv extends tl{static get __EMPTY_NODE(){return wo}static set __EMPTY_NODE(e){wo=e}compare(e,n){return wr(e.name,n.name)}isDefinedOn(e){throw fs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(Dn,wo)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,wo)}toString(){return".key"}}const or=new Zv;/**
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
 */class Co{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Se.RED,this.left=s??qe.EMPTY_NODE,this.right=i??qe.EMPTY_NODE}copy(e,n,r,s,i){return new Se(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class zC{copy(e,n,r,s,i){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,n=qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Co(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Co(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Co(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Co(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new zC;/**
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
 */function VC(t,e){return wr(t.name,e.name)}function Wd(t,e){return wr(t,e)}/**
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
 */let mu;function WC(t){mu=t}const e_=function(t){return typeof t=="number"?"number:"+Av(t):"string:"+t},t_=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kt(e,".sv"),"Priority must be a string or number.")}else E(t===mu||t.isEmpty(),"priority of unexpected type.");E(t===mu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let mp;class Ce{constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),t_(this.priorityNode_)}static set __childrenNodeConstructor(e){mp=e}static get __childrenNodeConstructor(){return mp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||Ln(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+e_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Av(this.value_):e+=this.value_,this.lazyHash_=Pv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ce.VALUE_TYPE_ORDER.indexOf(n),i=Ce.VALUE_TYPE_ORDER.indexOf(r);return E(s>=0,"Unknown leaf type: "+n),E(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let n_,r_;function $C(t){n_=t}function BC(t){r_=t}class HC extends tl{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?wr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Dn,new Ce("[PRIORITY-POST]",r_))}makePost(e,n){const r=n_(e);return new z(n,new Ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new HC;/**
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
 */const qC=Math.log(2);class GC{constructor(e){const n=i=>parseInt(Math.log(i)/qC,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _a=function(t,e,n,r){t.sort(e);const s=function(l,u){const d=u-l;let h,f;if(d===0)return null;if(d===1)return h=t[l],f=n?n(h):h,new Se(f,h.node,Se.BLACK,null,null);{const _=parseInt(d/2,10)+l,p=s(l,_),y=s(_+1,u);return h=t[_],f=n?n(h):h,new Se(f,h.node,Se.BLACK,p,y)}},i=function(l){let u=null,d=null,h=t.length;const f=function(p,y){const C=h-p,m=h;h-=p;const g=s(C+1,m),v=t[C],x=n?n(v):v;_(new Se(x,v.node,y,null,g))},_=function(p){u?(u.left=p,u=p):(d=p,u=p)};for(let p=0;p<l.count;++p){const y=l.nextBitIsOne(),C=Math.pow(2,l.count-(p+1));y?f(C,Se.BLACK):(f(C,Se.BLACK),f(C,Se.RED))}return d},o=new GC(t.length),a=i(o);return new qe(r||e,a)};/**
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
 */let ac;const kr={};class Ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(kr&&ie,"ChildrenNode.ts has not been loaded"),ac=ac||new Ht({".priority":kr},{".priority":ie}),ac}get(e){const n=hr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qe?n:null}hasIndex(e){return kt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==or,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(z.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=_a(r,e.getCompare()):a=kr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Ht(d,u)}addToIndexes(e,n){const r=fa(this.indexes_,(s,i)=>{const o=hr(this.indexSet_,i);if(E(o,"Missing index implementation for "+i),s===kr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),_a(a,o.getCompare())}else return kr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new Ht(r,this.indexSet_)}removeFromIndexes(e,n){const r=fa(this.indexes_,s=>{if(s===kr)return s;{const i=n.get(e.name);return i?s.remove(new z(e.name,i)):s}});return new Ht(r,this.indexSet_)}}/**
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
 */let Ls;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&t_(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ls||(Ls=new A(new qe(Wd),null,Ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ls}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ls:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ls:this.priorityNode_;return new A(s,o,i)}}updateChild(e,n){const r=F(e);if(r===null)return n;{E(F(e)!==".priority"||Ln(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(ie,(o,a)=>{n[o]=a.val(e),r++,i&&A.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+e_(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Pv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new z(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,z.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hi?-1:0}withIndex(e){if(e===or||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===or||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),s=n.getIterator(ie);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===or?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class KC extends A{constructor(){super(new qe(Wd),A.EMPTY_NODE,Ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Hi=new KC;Object.defineProperties(z,{MIN:{value:new z(pr,A.EMPTY_NODE)},MAX:{value:new z(Dn,Hi)}});Zv.__EMPTY_NODE=A.EMPTY_NODE;Ce.__childrenNodeConstructor=A;WC(Hi);BC(Hi);/**
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
 */const QC=!0;function ve(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,ve(e))}if(!(t instanceof Array)&&QC){const n=[];let r=!1;if(Ae(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ve(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return A.EMPTY_NODE;const i=_a(n,VC,o=>o.name,Wd);if(r){const o=_a(n,ie.getCompare());return new A(i,ve(e),new Ht({".priority":o},{".priority":ie}))}else return new A(i,ve(e),Ht.Default)}else{let n=A.EMPTY_NODE;return Ae(t,(r,s)=>{if(kt(t,r)&&r.substring(0,1)!=="."){const i=ve(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(ve(e))}}$C(ve);/**
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
 */class $d extends tl{constructor(e){super(),this.indexPath_=e,E(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?wr(e.name,n.name):i}makePost(e,n){const r=ve(e),s=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,s)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Hi);return new z(Dn,e)}toString(){return bi(this.indexPath_,0).join("/")}}/**
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
 */class YC extends tl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?wr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=ve(e);return new z(n,r)}toString(){return".value"}}const s_=new YC;/**
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
 */function i_(t){return{type:"value",snapshotNode:t}}function is(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ti(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Pi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function XC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Bd{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ti(n,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(is(n,r)):o.trackChildChange(Pi(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(s,i)=>{n.hasChild(s)||r.trackChildChange(Ti(s,i))}),n.isLeafNode()||n.forEachChild(ie,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Pi(s,i,o))}else r.trackChildChange(is(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ri{constructor(e){this.indexedFilter_=new Bd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ri.getStartPost_(e),this.endPost_=Ri.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new z(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(A.EMPTY_NODE);const i=this;return n.forEachChild(ie,(o,a)=>{i.matches(new z(o,a))||(s=s.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class JC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ri(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new z(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=A.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(A.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const l=new z(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(d&&!r.isEmpty()&&_>=0)return i!=null&&i.trackChildChange(Pi(n,r,h)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Ti(n,h));const y=a.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(is(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:d&&o(u,l)>=0?(i!=null&&(i.trackChildChange(Ti(u.name,u.node)),i.trackChildChange(is(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
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
 */class Hd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new Hd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ZC(t){return t.loadsAllData()?new Bd(t.getIndex()):t.hasLimit()?new JC(t):new Ri(t)}function eE(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function tE(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function nE(t,e){const n=t.copy();return n.index_=e,n}function gp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===s_?n="$value":t.index_===or?n="$key":(E(t.index_ instanceof $d,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
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
 */class ya extends Qv{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Bi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ya.getListenId_(e,r),a={};this.listens_[o]=a;const l=gp(e._queryParams);this.restRequest_(i+".json",l,(u,d)=>{let h=d;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(i,h,!1,r),hr(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,n){const r=ya.getListenId_(e,n);delete this.listens_[r]}get(e){const n=gp(e._queryParams),r=e._path.toString(),s=new ps;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ms(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ni(a.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class rE{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function xa(){return{value:null,children:new Map}}function o_(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,xa());const s=t.children.get(r);e=Z(e),o_(s,e,n)}}function gu(t,e,n){t.value!==null?n(e,t.value):sE(t,(r,s)=>{const i=new Y(e.toString()+"/"+r);gu(s,i,n)})}function sE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class iE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ae(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const _p=10*1e3,oE=30*1e3,aE=5*60*1e3;class lE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new iE(e);const r=_p+(oE-_p)*Math.random();ti(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ae(e,(s,i)=>{i>0&&kt(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ti(this.reportStats_.bind(this),Math.floor(Math.random()*2*aE))}}/**
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
 */var xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xt||(xt={}));function qd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class wa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=xt.ACK_USER_WRITE,this.source=qd()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Y(e));return new wa(B(),n,this.revert)}}else return E(F(this.path)===e,"operationForChild called for unrelated child."),new wa(Z(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ai{constructor(e,n){this.source=e,this.path=n,this.type=xt.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new Ai(this.source,B()):new Ai(this.source,Z(this.path))}}/**
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
 */class mr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=xt.OVERWRITE}operationForChild(e){return U(this.path)?new mr(this.source,B(),this.snap.getImmediateChild(e)):new mr(this.source,Z(this.path),this.snap)}}/**
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
 */class os{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=xt.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new Y(e));return n.isEmpty()?null:n.value?new mr(this.source,B(),n.value):new os(this.source,B(),n)}else return E(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new os(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Mn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class cE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function uE(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(XC(o.childName,o.snapshotNode))}),Ms(t,s,"child_removed",e,r,n),Ms(t,s,"child_added",e,r,n),Ms(t,s,"child_moved",i,r,n),Ms(t,s,"child_changed",e,r,n),Ms(t,s,"value",e,r,n),s}function Ms(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>hE(t,a,l)),o.forEach(a=>{const l=dE(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function dE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hE(t,e,n){if(e.childName==null||n.childName==null)throw fs("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),s=new z(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function nl(t,e){return{eventCache:t,serverCache:e}}function ni(t,e,n,r){return nl(new Mn(e,n,r),t.serverCache)}function a_(t,e,n,r){return nl(t.eventCache,new Mn(e,n,r))}function Ca(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let lc;const fE=()=>(lc||(lc=new qe(Y1)),lc);class J{constructor(e,n=fE()){this.value=e,this.children=n}static fromObject(e){let n=new J(null);return Ae(e,(r,s)=>{n=n.set(new Y(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(U(e))return null;{const r=F(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Z(e),n);return i!=null?{path:fe(new Y(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new J(null)}}set(e,n){if(U(e))return new J(n,this.children);{const r=F(e),i=(this.children.get(r)||new J(null)).set(Z(e),n),o=this.children.insert(r,i);return new J(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const s=r.remove(Z(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new J(null):new J(this.value,i)}else return this}}get(e){if(U(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if(U(e))return n;{const r=F(e),i=(this.children.get(r)||new J(null)).setTree(Z(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new J(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(fe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(U(e))return null;{const i=F(e),o=this.children.get(i);return o?o.findOnPath_(Z(e),fe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const s=F(e),i=this.children.get(s);return i?i.foreachOnPath_(Z(e),fe(n,s),r):new J(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(fe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Et{constructor(e){this.writeTree_=e}static empty(){return new Et(new J(null))}}function ri(t,e,n){if(U(e))return new Et(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Fe(s,e);return i=i.updateChild(o,n),new Et(t.writeTree_.set(s,i))}else{const s=new J(n),i=t.writeTree_.setTree(e,s);return new Et(i)}}}function vu(t,e,n){let r=t;return Ae(n,(s,i)=>{r=ri(r,fe(e,s),i)}),r}function yp(t,e){if(U(e))return Et.empty();{const n=t.writeTree_.setTree(e,new J(null));return new Et(n)}}function _u(t,e){return Cr(t,e)!=null}function Cr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function xp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,s)=>{e.push(new z(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new z(r,s.value))}),e}function Rn(t,e){if(U(e))return t;{const n=Cr(t,e);return n!=null?new Et(new J(n)):new Et(t.writeTree_.subtree(e))}}function yu(t){return t.writeTree_.isEmpty()}function as(t,e){return l_(B(),t.writeTree_,e)}function l_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(E(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=l_(fe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(fe(t,".priority"),r)),n}}/**
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
 */function rl(t,e){return h_(e,t)}function pE(t,e,n,r,s){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ri(t.visibleWrites,e,n)),t.lastWriteId=r}function mE(t,e,n,r){E(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=vu(t.visibleWrites,e,n),t.lastWriteId=r}function gE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function vE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&_E(a,r.path)?s=!1:at(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return yE(t),!0;if(r.snap)t.visibleWrites=yp(t.visibleWrites,r.path);else{const a=r.children;Ae(a,l=>{t.visibleWrites=yp(t.visibleWrites,fe(r.path,l))})}return!0}else return!1}function _E(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(fe(t.path,n),e))return!0;return!1}function yE(t){t.visibleWrites=c_(t.allWrites,xE,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xE(t){return t.visible}function c_(t,e,n){let r=Et.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)at(n,o)?(a=Fe(n,o),r=ri(r,a,i.snap)):at(o,n)&&(a=Fe(o,n),r=ri(r,B(),i.snap.getChild(a)));else if(i.children){if(at(n,o))a=Fe(n,o),r=vu(r,a,i.children);else if(at(o,n))if(a=Fe(o,n),U(a))r=vu(r,B(),i.children);else{const l=hr(i.children,F(a));if(l){const u=l.getChild(Z(a));r=ri(r,B(),u)}}}else throw fs("WriteRecord should have .snap or .children")}}return r}function u_(t,e,n,r,s){if(!r&&!s){const i=Cr(t.visibleWrites,e);if(i!=null)return i;{const o=Rn(t.visibleWrites,e);if(yu(o))return n;if(n==null&&!_u(o,B()))return null;{const a=n||A.EMPTY_NODE;return as(o,a)}}}else{const i=Rn(t.visibleWrites,e);if(!s&&yu(i))return n;if(!s&&n==null&&!_u(i,B()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(at(u.path,e)||at(e,u.path))},a=c_(t.allWrites,o,e),l=n||A.EMPTY_NODE;return as(a,l)}}}function wE(t,e,n){let r=A.EMPTY_NODE;const s=Cr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ie,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Rn(t.visibleWrites,e);return n.forEachChild(ie,(o,a)=>{const l=as(Rn(i,new Y(o)),a);r=r.updateImmediateChild(o,l)}),xp(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Rn(t.visibleWrites,e);return xp(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function CE(t,e,n,r,s){E(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=fe(e,n);if(_u(t.visibleWrites,i))return null;{const o=Rn(t.visibleWrites,i);return yu(o)?s.getChild(n):as(o,s.getChild(n))}}function EE(t,e,n,r){const s=fe(e,n),i=Cr(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Rn(t.visibleWrites,s);return as(o,r.getNode().getImmediateChild(n))}else return null}function SE(t,e){return Cr(t.visibleWrites,e)}function NE(t,e,n,r,s,i,o){let a;const l=Rn(t.visibleWrites,e),u=Cr(l,B());if(u!=null)a=u;else if(n!=null)a=as(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=f.getNext();for(;_&&d.length<s;)h(_,r)!==0&&d.push(_),_=f.getNext();return d}else return[]}function kE(){return{visibleWrites:Et.empty(),allWrites:[],lastWriteId:-1}}function Ea(t,e,n,r){return u_(t.writeTree,t.treePath,e,n,r)}function Qd(t,e){return wE(t.writeTree,t.treePath,e)}function wp(t,e,n,r){return CE(t.writeTree,t.treePath,e,n,r)}function Sa(t,e){return SE(t.writeTree,fe(t.treePath,e))}function IE(t,e,n,r,s,i){return NE(t.writeTree,t.treePath,e,n,r,s,i)}function Yd(t,e,n){return EE(t.writeTree,t.treePath,e,n)}function d_(t,e){return h_(fe(t.treePath,e),t.writeTree)}function h_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class bE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Pi(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Ti(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,is(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Pi(r,e.snapshotNode,s.oldSnap));else throw fs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class TE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const f_=new TE;class Xd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Mn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gr(this.viewCache_),i=IE(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function PE(t){return{filter:t}}function RE(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function AE(t,e,n,r,s){const i=new bE;let o,a;if(n.type===xt.OVERWRITE){const u=n;u.source.fromUser?o=xu(t,e,u.path,u.snap,r,s,i):(E(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Na(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===xt.MERGE){const u=n;u.source.fromUser?o=OE(t,e,u.path,u.children,r,s,i):(E(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=wu(t,e,u.path,u.children,r,s,a,i))}else if(n.type===xt.ACK_USER_WRITE){const u=n;u.revert?o=ME(t,e,u.path,r,s,i):o=DE(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===xt.LISTEN_COMPLETE)o=LE(t,e,n.path,r,i);else throw fs("Unknown operation type: "+n.type);const l=i.getChanges();return jE(e,o,l),{viewCache:o,changes:l}}function jE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Ca(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(i_(Ca(e)))}}function p_(t,e,n,r,s,i){const o=e.eventCache;if(Sa(r,n)!=null)return e;{let a,l;if(U(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=gr(e),d=u instanceof A?u:A.EMPTY_NODE,h=Qd(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const u=Ea(r,gr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=F(n);if(u===".priority"){E(Ln(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=wp(r,n,d,l);h!=null?a=t.filter.updatePriority(d,h):a=o.getNode()}else{const d=Z(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=wp(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(u).updateChild(d,f):h=o.getNode().getImmediateChild(u)}else h=Yd(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,d,s,i):a=o.getNode()}}return ni(e,a,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Na(t,e,n,r,s,i,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),_,null)}else{const _=F(n);if(!l.isCompleteForPath(n)&&Ln(n)>1)return e;const p=Z(n),C=l.getNode().getImmediateChild(_).updateChild(p,r);_===".priority"?u=d.updatePriority(l.getNode(),C):u=d.updateChild(l.getNode(),_,C,p,f_,null)}const h=a_(e,u,l.isFullyInitialized()||U(n),d.filtersNodes()),f=new Xd(s,h,i);return p_(t,h,n,s,f,a)}function xu(t,e,n,r,s,i,o){const a=e.eventCache;let l,u;const d=new Xd(s,e,i);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ni(e,u,!0,t.filter.filtersNodes());else{const h=F(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ni(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=Z(n),_=a.getNode().getImmediateChild(h);let p;if(U(f))p=r;else{const y=d.getCompleteChild(h);y!=null?Ud(f)===".priority"&&y.getChild(Xv(f)).isEmpty()?p=y:p=y.updateChild(f,r):p=A.EMPTY_NODE}if(_.equals(p))l=e;else{const y=t.filter.updateChild(a.getNode(),h,p,f,d,o);l=ni(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Cp(t,e){return t.eventCache.isCompleteForChild(e)}function OE(t,e,n,r,s,i,o){let a=e;return r.foreach((l,u)=>{const d=fe(n,l);Cp(e,F(d))&&(a=xu(t,a,d,u,s,i,o))}),r.foreach((l,u)=>{const d=fe(n,l);Cp(e,F(d))||(a=xu(t,a,d,u,s,i,o))}),a}function Ep(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function wu(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;U(n)?u=r:u=new J(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),p=Ep(t,_,f);l=Na(t,l,new Y(h),p,s,i,o,a)}}),u.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!_){const p=e.serverCache.getNode().getImmediateChild(h),y=Ep(t,p,f);l=Na(t,l,new Y(h),y,s,i,o,a)}}),l}function DE(t,e,n,r,s,i,o){if(Sa(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(U(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Na(t,e,n,l.getNode().getChild(n),s,i,a,o);if(U(n)){let u=new J(null);return l.getNode().forEachChild(or,(d,h)=>{u=u.set(new Y(d),h)}),wu(t,e,n,u,s,i,a,o)}else return e}else{let u=new J(null);return r.foreach((d,h)=>{const f=fe(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),wu(t,e,n,u,s,i,a,o)}}function LE(t,e,n,r,s){const i=e.serverCache,o=a_(e,i.getNode(),i.isFullyInitialized()||U(n),i.isFiltered());return p_(t,o,n,r,f_,s)}function ME(t,e,n,r,s,i){let o;if(Sa(r,n)!=null)return e;{const a=new Xd(r,e,s),l=e.eventCache.getNode();let u;if(U(n)||F(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ea(r,gr(e));else{const h=e.serverCache.getNode();E(h instanceof A,"serverChildren would be complete if leaf node"),d=Qd(r,h)}d=d,u=t.filter.updateFullNode(l,d,i)}else{const d=F(n);let h=Yd(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?u=t.filter.updateChild(l,d,h,Z(n),a,i):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,A.EMPTY_NODE,Z(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ea(r,gr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Sa(r,B())!=null,ni(e,u,o,t.filter.filtersNodes())}}/**
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
 */class FE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Bd(r.getIndex()),i=ZC(r);this.processor_=PE(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(A.EMPTY_NODE,a.getNode(),null),d=new Mn(l,o.isFullyInitialized(),s.filtersNodes()),h=new Mn(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=nl(h,d),this.eventGenerator_=new cE(this.query_)}get query(){return this.query_}}function UE(t){return t.viewCache_.serverCache.getNode()}function zE(t){return Ca(t.viewCache_)}function VE(t,e){const n=gr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Sp(t){return t.eventRegistrations_.length===0}function WE(t,e){t.eventRegistrations_.push(e)}function Np(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function kp(t,e,n,r){e.type===xt.MERGE&&e.source.queryId!==null&&(E(gr(t.viewCache_),"We should always have a full cache before handling merges"),E(Ca(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=AE(t.processor_,s,e,n,r);return RE(t.processor_,i.viewCache),E(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,m_(t,i.changes,i.viewCache.eventCache.getNode(),null)}function $E(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(i,o)=>{r.push(is(i,o))}),n.isFullyInitialized()&&r.push(i_(n.getNode())),m_(t,r,n.getNode(),e)}function m_(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return uE(t.eventGenerator_,e,n,s)}/**
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
 */let ka;class g_{constructor(){this.views=new Map}}function BE(t){E(!ka,"__referenceConstructor has already been defined"),ka=t}function HE(){return E(ka,"Reference.ts has not been loaded"),ka}function qE(t){return t.views.size===0}function Jd(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return E(i!=null,"SyncTree gave us an op for an invalid query."),kp(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(kp(o,e,n,r));return i}}function v_(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Ea(n,s?r:null),l=!1;a?l=!0:r instanceof A?(a=Qd(n,r),l=!1):(a=A.EMPTY_NODE,l=!1);const u=nl(new Mn(a,l,!1),new Mn(r,s,!1));return new FE(e,u)}return o}function GE(t,e,n,r,s,i){const o=v_(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),WE(o,n),$E(o,n)}function KE(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=Fn(t);if(s==="default")for(const[l,u]of t.views.entries())o=o.concat(Np(u,n,r)),Sp(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=t.views.get(s);l&&(o=o.concat(Np(l,n,r)),Sp(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Fn(t)&&i.push(new(HE())(e._repo,e._path)),{removed:i,events:o}}function __(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function An(t,e){let n=null;for(const r of t.views.values())n=n||VE(r,e);return n}function y_(t,e){if(e._queryParams.loadsAllData())return sl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function x_(t,e){return y_(t,e)!=null}function Fn(t){return sl(t)!=null}function sl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ia;function QE(t){E(!Ia,"__referenceConstructor has already been defined"),Ia=t}function YE(){return E(Ia,"Reference.ts has not been loaded"),Ia}let XE=1;class Ip{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=kE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zd(t,e,n,r,s){return pE(t.pendingWriteTree_,e,n,r,s),s?_s(t,new mr(qd(),e,n)):[]}function JE(t,e,n,r){mE(t.pendingWriteTree_,e,n,r);const s=J.fromObject(n);return _s(t,new os(qd(),e,s))}function yn(t,e,n=!1){const r=gE(t.pendingWriteTree_,e);if(vE(t.pendingWriteTree_,e)){let i=new J(null);return r.snap!=null?i=i.set(B(),!0):Ae(r.children,o=>{i=i.set(new Y(o),!0)}),_s(t,new wa(r.path,i,n))}else return[]}function qi(t,e,n){return _s(t,new mr(Gd(),e,n))}function ZE(t,e,n){const r=J.fromObject(n);return _s(t,new os(Gd(),e,r))}function eS(t,e){return _s(t,new Ai(Gd(),e))}function tS(t,e,n){const r=eh(t,n);if(r){const s=th(r),i=s.path,o=s.queryId,a=Fe(i,e),l=new Ai(Kd(o),a);return nh(t,i,l)}else return[]}function ba(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||x_(o,e))){const l=KE(o,e,n,r);qE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!s){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(f,_)=>Fn(_));if(d&&!h){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const _=sS(f);for(let p=0;p<_.length;++p){const y=_[p],C=y.query,m=S_(t,y);t.listenProvider_.startListening(si(C),ji(t,C),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(si(e),null):u.forEach(f=>{const _=t.queryToTagMap.get(ol(f));t.listenProvider_.stopListening(si(f),_)}))}iS(t,u)}return a}function w_(t,e,n,r){const s=eh(t,r);if(s!=null){const i=th(s),o=i.path,a=i.queryId,l=Fe(o,e),u=new mr(Kd(a),l,n);return nh(t,o,u)}else return[]}function nS(t,e,n,r){const s=eh(t,r);if(s){const i=th(s),o=i.path,a=i.queryId,l=Fe(o,e),u=J.fromObject(n),d=new os(Kd(a),l,u);return nh(t,o,d)}else return[]}function Cu(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,_)=>{const p=Fe(f,s);i=i||An(_,p),o=o||Fn(_)});let a=t.syncPointTree_.get(s);a?(o=o||Fn(a),i=i||An(a,B())):(a=new g_,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=A.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,p)=>{const y=An(p,B());y&&(i=i.updateImmediateChild(_,y))}));const u=x_(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=ol(e);E(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=oS();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const d=rl(t.pendingWriteTree_,s);let h=GE(a,e,n,d,i,l);if(!u&&!o&&!r){const f=y_(a,e);h=h.concat(aS(t,e,f))}return h}function il(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Fe(o,e),u=An(a,l);if(u)return u});return u_(s,e,i,n,!0)}function rS(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const h=Fe(u,n);r=r||An(d,h)});let s=t.syncPointTree_.get(n);s?r=r||An(s,B()):(s=new g_,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Mn(r,!0,!1):null,a=rl(t.pendingWriteTree_,e._path),l=v_(s,e,a,i?o.getNode():A.EMPTY_NODE,i);return zE(l)}function _s(t,e){return C_(e,t.syncPointTree_,null,rl(t.pendingWriteTree_,B()))}function C_(t,e,n,r){if(U(t.path))return E_(t,e,n,r);{const s=e.get(B());n==null&&s!=null&&(n=An(s,B()));let i=[];const o=F(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=d_(r,o);i=i.concat(C_(a,l,u,d))}return s&&(i=i.concat(Jd(s,t,r,n))),i}}function E_(t,e,n,r){const s=e.get(B());n==null&&s!=null&&(n=An(s,B()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=d_(r,o),d=t.operationForChild(o);d&&(i=i.concat(E_(d,a,l,u)))}),s&&(i=i.concat(Jd(s,t,r,n))),i}function S_(t,e){const n=e.query,r=ji(t,n);return{hashFn:()=>(UE(e)||A.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?tS(t,n._path,r):eS(t,n._path);{const i=Z1(s,n);return ba(t,n,null,i)}}}}function ji(t,e){const n=ol(e);return t.queryToTagMap.get(n)}function ol(t){return t._path.toString()+"$"+t._queryIdentifier}function eh(t,e){return t.tagToQueryMap.get(e)}function th(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Y(t.substr(0,e))}}function nh(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const s=rl(t.pendingWriteTree_,e);return Jd(r,n,s,null)}function sS(t){return t.fold((e,n,r)=>{if(n&&Fn(n))return[sl(n)];{let s=[];return n&&(s=__(n)),Ae(r,(i,o)=>{s=s.concat(o)}),s}})}function si(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(YE())(t._repo,t._path):t}function iS(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=ol(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function oS(){return XE++}function aS(t,e,n){const r=e._path,s=ji(t,e),i=S_(t,n),o=t.listenProvider_.startListening(si(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)E(!Fn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,h)=>{if(!U(u)&&d&&Fn(d))return[sl(d).query];{let f=[];return d&&(f=f.concat(__(d).map(_=>_.query))),Ae(h,(_,p)=>{f=f.concat(p)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(si(d),ji(t,d))}}return o}/**
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
 */class rh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new rh(n)}node(){return this.node_}}class sh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new sh(this.syncTree_,n)}node(){return il(this.syncTree_,this.path_)}}const lS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bp=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return cS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return uS(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},cS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},uS=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const s=e.node();if(E(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},N_=function(t,e,n,r){return oh(e,new sh(n,t),r)},ih=function(t,e,n){return oh(t,new rh(e),n)};function oh(t,e,n){const r=t.getPriority().val(),s=bp(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=bp(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ce(a,ve(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ce(s))),o.forEachChild(ie,(a,l)=>{const u=oh(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class ah{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function al(t,e){let n=e instanceof Y?e:new Y(e),r=t,s=F(n);for(;s!==null;){const i=hr(r.node.children,s)||{children:{},childCount:0};r=new ah(s,r,i),n=Z(n),s=F(n)}return r}function Er(t){return t.node.value}function lh(t,e){t.node.value=e,Eu(t)}function k_(t){return t.node.childCount>0}function dS(t){return Er(t)===void 0&&!k_(t)}function ll(t,e){Ae(t.node.children,(n,r)=>{e(new ah(n,t,r))})}function I_(t,e,n,r){n&&e(t),ll(t,s=>{I_(s,e,!0)})}function hS(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Gi(t){return new Y(t.parent===null?t.name:Gi(t.parent)+"/"+t.name)}function Eu(t){t.parent!==null&&fS(t.parent,t.name,t)}function fS(t,e,n){const r=dS(n),s=kt(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Eu(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Eu(t))}/**
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
 */const pS=/[\[\].#$\/\u0000-\u001F\u007F]/,mS=/[\[\].#$\u0000-\u001F\u007F]/,cc=10*1024*1024,ch=function(t){return typeof t=="string"&&t.length!==0&&!pS.test(t)},b_=function(t){return typeof t=="string"&&t.length!==0&&!mS.test(t)},gS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),b_(t)},Ta=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Od(t)||t&&typeof t=="object"&&kt(t,".sv")},uh=function(t,e,n,r){r&&e===void 0||Ki(Za(t,"value"),e,n)},Ki=function(t,e,n){const r=n instanceof Y?new jC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Jn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Jn(r)+" with contents = "+e.toString());if(Od(e))throw new Error(t+"contains "+e.toString()+" "+Jn(r));if(typeof e=="string"&&e.length>cc/3&&el(e)>cc)throw new Error(t+"contains a string greater than "+cc+" utf8 bytes "+Jn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Ae(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!ch(o)))throw new Error(t+" contains an invalid key ("+o+") "+Jn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);OC(r,o),Ki(t,a,r),DC(r)}),s&&i)throw new Error(t+' contains ".value" child '+Jn(r)+" in addition to actual children.")}},vS=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=bi(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!ch(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(AC);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&at(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},_S=function(t,e,n,r){const s=Za(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Ae(e,(o,a)=>{const l=new Y(o);if(Ki(s,a,fe(n,l)),Ud(l)===".priority"&&!Ta(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),vS(s,i)},dh=function(t,e,n,r){if(!b_(n))throw new Error(Za(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yS=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dh(t,e,n)},cl=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},xS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ch(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!gS(n))throw new Error(Za(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class wS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ul(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!zd(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function T_(t,e,n){ul(t,n),P_(t,r=>zd(r,e))}function tt(t,e,n){ul(t,n),P_(t,r=>at(r,e)||at(e,r))}function P_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(CS(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function CS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ei&&Te("event: "+n.toString()),vs(r)}}}/**
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
 */const ES="repo_interrupt",SS=25;class NS{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xa(),this.transactionQueueTree_=new ah,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kS(t,e,n){if(t.stats_=Md(t.repoInfo_),t.forceRestClient_||rC())t.server_=new ya(t.repoInfo_,(r,s,i,o)=>{Tp(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Pp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yt(t.repoInfo_,e,(r,s,i,o)=>{Tp(t,r,s,i,o)},r=>{Pp(t,r)},r=>{IS(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=lC(t.repoInfo_,()=>new lE(t.stats_,t.server_)),t.infoData_=new rE,t.infoSyncTree_=new Ip({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=qi(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),hh(t,"connected",!1),t.serverSyncTree_=new Ip({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);tt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function R_(t){const n=t.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Qi(t){return lS({timestamp:R_(t)})}function Tp(t,e,n,r,s){t.dataUpdateCount++;const i=new Y(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=fa(n,u=>ve(u));o=nS(t.serverSyncTree_,i,l,s)}else{const l=ve(n);o=w_(t.serverSyncTree_,i,l,s)}else if(r){const l=fa(n,u=>ve(u));o=ZE(t.serverSyncTree_,i,l)}else{const l=ve(n);o=qi(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=ls(t,i)),tt(t.eventQueue_,a,o)}function Pp(t,e){hh(t,"connected",e),e===!1&&RS(t)}function IS(t,e){Ae(e,(n,r)=>{hh(t,n,r)})}function hh(t,e,n){const r=new Y("/.info/"+e),s=ve(n);t.infoData_.updateSnapshot(r,s);const i=qi(t.infoSyncTree_,r,s);tt(t.eventQueue_,r,i)}function dl(t){return t.nextWriteId_++}function bS(t,e,n){const r=rS(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=ve(s).withIndex(e._queryParams.getIndex());Cu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=qi(t.serverSyncTree_,e._path,i);else{const a=ji(t.serverSyncTree_,e);o=w_(t.serverSyncTree_,e._path,i,a)}return tt(t.eventQueue_,e._path,o),ba(t.serverSyncTree_,e,n,null,!0),i},s=>(ys(t,"get for query "+xe(e)+" failed: "+s),Promise.reject(new Error(s))))}function TS(t,e,n,r,s){ys(t,"set",{path:e.toString(),value:n,priority:r});const i=Qi(t),o=ve(n,r),a=il(t.serverSyncTree_,e),l=ih(o,a,i),u=dl(t),d=Zd(t.serverSyncTree_,e,l,u,!0);ul(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const p=f==="ok";p||ze("set at "+e+" failed: "+f);const y=yn(t.serverSyncTree_,u,!p);tt(t.eventQueue_,e,y),Su(t,s,f,_)});const h=ph(t,e);ls(t,h),tt(t.eventQueue_,h,[])}function PS(t,e,n,r){ys(t,"update",{path:e.toString(),value:n});let s=!0;const i=Qi(t),o={};if(Ae(n,(a,l)=>{s=!1,o[a]=N_(fe(e,a),ve(l),t.serverSyncTree_,i)}),s)Te("update() called with empty data.  Don't do anything."),Su(t,r,"ok",void 0);else{const a=dl(t),l=JE(t.serverSyncTree_,e,o,a);ul(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,d)=>{const h=u==="ok";h||ze("update at "+e+" failed: "+u);const f=yn(t.serverSyncTree_,a,!h),_=f.length>0?ls(t,e):e;tt(t.eventQueue_,_,f),Su(t,r,u,d)}),Ae(n,u=>{const d=ph(t,fe(e,u));ls(t,d)}),tt(t.eventQueue_,e,[])}}function RS(t){ys(t,"onDisconnectEvents");const e=Qi(t),n=xa();gu(t.onDisconnect_,B(),(s,i)=>{const o=N_(s,i,t.serverSyncTree_,e);o_(n,s,o)});let r=[];gu(n,B(),(s,i)=>{r=r.concat(qi(t.serverSyncTree_,s,i));const o=ph(t,s);ls(t,o)}),t.onDisconnect_=xa(),tt(t.eventQueue_,B(),r)}function AS(t,e,n){let r;F(e._path)===".info"?r=Cu(t.infoSyncTree_,e,n):r=Cu(t.serverSyncTree_,e,n),T_(t.eventQueue_,e._path,r)}function Rp(t,e,n){let r;F(e._path)===".info"?r=ba(t.infoSyncTree_,e,n):r=ba(t.serverSyncTree_,e,n),T_(t.eventQueue_,e._path,r)}function jS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ES)}function ys(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function Su(t,e,n,r){e&&vs(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function OS(t,e,n,r,s,i){ys(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:Tv(),applyLocally:i,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=fh(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ki("transaction failed: Data returned ",l,o.path),o.status=0;const u=al(t.transactionQueueTree_,e),d=Er(u)||[];d.push(o),lh(u,d);let h;typeof l=="object"&&l!==null&&kt(l,".priority")?(h=hr(l,".priority"),E(Ta(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(il(t.serverSyncTree_,e)||A.EMPTY_NODE).getPriority().val();const f=Qi(t),_=ve(l,h),p=ih(_,a,f);o.currentOutputSnapshotRaw=_,o.currentOutputSnapshotResolved=p,o.currentWriteId=dl(t);const y=Zd(t.serverSyncTree_,e,p,o.currentWriteId,o.applyLocally);tt(t.eventQueue_,e,y),hl(t,t.transactionQueueTree_)}}function fh(t,e,n){return il(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function hl(t,e=t.transactionQueueTree_){if(e||fl(t,e),Er(e)){const n=j_(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&DS(t,Gi(e),n)}else k_(e)&&ll(e,n=>{hl(t,n)})}function DS(t,e,n){const r=n.map(u=>u.currentWriteId),s=fh(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const d=n[u];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=Fe(e,d.path);i=i.updateChild(h,d.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{ys(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(yn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();fl(t,al(t.transactionQueueTree_,e)),hl(t,t.transactionQueueTree_),tt(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)vs(h[f])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ze("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}ls(t,e)}},o)}function ls(t,e){const n=A_(t,e),r=Gi(n),s=j_(t,n);return LS(t,s,r),r}function LS(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Fe(n,l.path);let d=!1,h;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,s=s.concat(yn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=SS)d=!0,h="maxretry",s=s.concat(yn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=fh(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Ki("transaction failed: Data returned ",_,l.path);let p=ve(_);typeof _=="object"&&_!=null&&kt(_,".priority")||(p=p.updatePriority(f.getPriority()));const C=l.currentWriteId,m=Qi(t),g=ih(p,f,m);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=g,l.currentWriteId=dl(t),o.splice(o.indexOf(C),1),s=s.concat(Zd(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),s=s.concat(yn(t.serverSyncTree_,C,!0))}else d=!0,h="nodata",s=s.concat(yn(t.serverSyncTree_,l.currentWriteId,!0))}tt(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}fl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)vs(r[a]);hl(t,t.transactionQueueTree_)}function A_(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&Er(r)===void 0;)r=al(r,n),e=Z(e),n=F(e);return r}function j_(t,e){const n=[];return O_(t,e,n),n.sort((r,s)=>r.order-s.order),n}function O_(t,e,n){const r=Er(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);ll(e,s=>{O_(t,s,n)})}function fl(t,e){const n=Er(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,lh(e,n.length>0?n:void 0)}ll(e,r=>{fl(t,r)})}function ph(t,e){const n=Gi(A_(t,e)),r=al(t.transactionQueueTree_,e);return hS(r,s=>{uc(t,s)}),uc(t,r),I_(r,s=>{uc(t,s)}),n}function uc(t,e){const n=Er(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(yn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?lh(e,void 0):n.length=i+1,tt(t.eventQueue_,Gi(e),s);for(let o=0;o<r.length;o++)vs(r[o])}}/**
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
 */function MS(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function FS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ap=function(t,e){const n=US(t),r=n.namespace;n.domain==="firebase.com"&&rn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&rn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||K1();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wv(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Y(n.pathString)}},US=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(s=MS(t.substring(d,h)));const f=FS(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */const jp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",zS=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=jp.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=jp.charAt(e[s]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class VS{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class WS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class D_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xs{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return U(this._path)?null:Ud(this._path)}get ref(){return new Dt(this._repo,this._path)}get _queryIdentifier(){const e=vp(this._queryParams),n=Dd(e);return n==="{}"?"default":n}get _queryObject(){return vp(this._queryParams)}isEqual(e){if(e=ke(e),!(e instanceof xs))return!1;const n=this._repo===e._repo,r=zd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+RC(this._path)}}function $S(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function L_(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===or){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==pr)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==Dn)throw new Error(r);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===ie){if(e!=null&&!Ta(e)||n!=null&&!Ta(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(E(t.getIndex()instanceof $d||t.getIndex()===s_,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function BS(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Dt extends xs{constructor(e,n){super(e,n,new Hd,!1)}get parent(){const e=Xv(this._path);return e===null?null:new Dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Y(e),r=Oi(this.ref,e);return new cs(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new cs(s,Oi(this.ref,r),ie)))}hasChild(e){const n=new Y(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function q(t,e){return t=ke(t),t._checkNotDeleted("ref"),e!==void 0?Oi(t._root,e):t._root}function Oi(t,e){return t=ke(t),F(t._path)===null?yS("child","path",e):dh("child","path",e),new Dt(t._repo,fe(t._path,e))}function zr(t,e){t=ke(t),cl("push",t._path),uh("push",e,t._path,!0);const n=R_(t._repo),r=zS(n),s=Oi(t,r),i=Oi(t,r);let o;return e!=null?o=M_(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function HS(t){return cl("remove",t._path),M_(t,null)}function M_(t,e){t=ke(t),cl("set",t._path),uh("set",e,t._path,!1);const n=new ps;return TS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function zt(t,e){_S("update",e,t._path);const n=new ps;return PS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Nu(t){t=ke(t);const e=new D_(()=>{}),n=new pl(e);return bS(t._repo,t,n).then(r=>new cs(r,new Dt(t._repo,t._path),t._queryParams.getIndex()))}class pl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new VS("value",this,new cs(e.snapshotNode,new Dt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new WS(this,e,n):null}matches(e){return e instanceof pl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function qS(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=n,u=(d,h)=>{Rp(t._repo,t,a),l(d,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new D_(n,i||void 0),a=new pl(o);return AS(t._repo,t,a),()=>Rp(t._repo,t,a)}function ku(t,e,n,r){return qS(t,"value",e,n,r)}class mh{}class GS extends mh{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){uh("startAt",this._value,e._path,!0);const n=tE(e._queryParams,this._value,this._key);if(BS(n),L_(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new xs(e._repo,e._path,n,e._orderByCalled)}}function KS(t=null,e){return new GS(t,e)}class QS extends mh{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new xs(e._repo,e._path,eE(e._queryParams,this._limit),e._orderByCalled)}}function YS(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new QS(t)}class XS extends mh{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){$S(e,"orderByChild");const n=new Y(this._path);if(U(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new $d(n),s=nE(e._queryParams,r);return L_(s),new xs(e._repo,e._path,s,!0)}}function JS(t){return dh("orderByChild","path",t),new XS(t)}function Op(t,...e){let n=ke(t);for(const r of e)n=r._apply(n);return n}BE(Dt);QE(Dt);/**
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
 */const ZS="FIREBASE_DATABASE_EMULATOR_HOST",Iu={};let eN=!1;function tN(t,e,n,r){t.repoInfo_=new Wv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function nN(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||rn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ap(i,s),a=o.repoInfo,l;typeof process<"u"&&Zf&&(l=Zf[ZS]),l?(i=`http://${l}?ns=${a.namespace}`,o=Ap(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new iC(t.name,t.options,e);xS("Invalid Firebase Database URL",o),U(o.path)||rn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=sN(a,t,u,new sC(t.name,n));return new iN(d,t)}function rN(t,e){const n=Iu[e];(!n||n[t.key]!==t)&&rn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jS(t),delete n[t.key]}function sN(t,e,n,r){let s=Iu[e.name];s||(s={},Iu[e.name]=s);let i=s[t.toURLString()];return i&&rn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new NS(t,eN,n,r),s[t.toURLString()]=i,i}class iN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rn("Cannot call "+e+" on a deleted database.")}}function oN(t=Sv(),e){const n=jd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=_w("database");r&&aN(n,...r)}return n}function aN(t,e,n,r={}){t=ke(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&rn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&rn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Lo(Lo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:yw(r.mockUserToken,t.app.options.projectId);i=new Lo(o)}tN(s,e,n,i)}/**
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
 */function lN(t){$1(gs),ss(new fr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return nN(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Pn(ep,tp,t),Pn(ep,tp,"esm2017")}/**
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
 */class cN{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function uN(t,e,n){var r;if(t=ke(t),cl("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const s=(r=void 0)!==null&&r!==void 0?r:!0,i=new ps,o=(l,u,d)=>{let h=null;l?i.reject(l):(h=new cs(d,new Dt(t._repo,t._path),ie),i.resolve(new cN(u,h)))},a=ku(t,()=>{});return OS(t._repo,t._path,e,o,a,s),i.promise}Yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};lN();function gh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function F_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dN=F_,U_=new Wi("auth","Firebase",F_());/**
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
 */const Pa=new Rd("@firebase/auth");function hN(t,...e){Pa.logLevel<=X.WARN&&Pa.warn(`Auth (${gs}): ${t}`,...e)}function Mo(t,...e){Pa.logLevel<=X.ERROR&&Pa.error(`Auth (${gs}): ${t}`,...e)}/**
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
 */function dt(t,...e){throw _h(t,...e)}function St(t,...e){return _h(t,...e)}function vh(t,e,n){const r=Object.assign(Object.assign({},dN()),{[e]:n});return new Wi("auth","Firebase",r).create(e,{appName:t.name})}function Xt(t){return vh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&dt(t,"argument-error"),vh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _h(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return U_.create(t,...e)}function O(t,e,...n){if(!t)throw _h(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mo(e),new Error(e)}function sn(t,e){t||qt(e)}/**
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
 */function bu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pN(){return Dp()==="http:"||Dp()==="https:"}function Dp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function mN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pN()||ww()||"connection"in navigator)?navigator.onLine:!0}function gN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=Pd()||yv()}get(){return mN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yh(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class z_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _N=new Yi(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bn(t,e,n,r,s={}){return V_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ms(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return xw()||(u.referrerPolicy="no-referrer"),z_.fetch()(W_(t,t.config.apiHost,n,a),u)})}async function V_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vN),e);try{const s=new xN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Eo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vh(t,d,u);dt(t,d)}}catch(s){if(s instanceof Wn)throw s;dt(t,"network-request-failed",{message:String(s)})}}async function Xi(t,e,n,r,s={}){const i=await Bn(t,e,n,r,s);return"mfaPendingCredential"in i&&dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function W_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?yh(t.config,s):`${t.config.apiScheme}://${s}`}function yN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),_N.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=St(t,e,r);return s.customData._tokenResponse=n,s}function Lp(t){return t!==void 0&&t.enterprise!==void 0}class wN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function CN(t,e){return Bn(t,"GET","/v2/recaptchaConfig",$n(t,e))}/**
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
 */async function EN(t,e){return Bn(t,"POST","/v1/accounts:delete",e)}async function $_(t,e){return Bn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SN(t,e=!1){const n=ke(t),r=await n.getIdToken(e),s=xh(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ii(dc(s.auth_time)),issuedAtTime:ii(dc(s.iat)),expirationTime:ii(dc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dc(t){return Number(t)*1e3}function xh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=ha(n);return s?JSON.parse(s):(Mo("Failed to decode base64 JWT payload"),null)}catch(s){return Mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Mp(t){const e=xh(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&NN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class kN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ra(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Di(t,$_(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?B_(i.providerUserInfo):[],a=bN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Tu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function IN(t){const e=ke(t);await Ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function B_(t){return t.map(e=>{var{providerId:n}=e,r=gh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function TN(t,e){const n=await V_(t,{},async()=>{const r=ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=W_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",z_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PN(t,e){return Bn(t,"POST","/v2/accounts:revokeToken",$n(t,e))}/**
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
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=Mp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await TN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Kr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
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
 */function cn(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Di(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SN(this,e)}reload(){return IN(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ra(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(Xt(this.auth));const e=await this.getIdToken();return await Di(this,EN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:x,isAnonymous:S,providerData:T,stsTokenManager:k}=n;O(v&&k,e,"internal-error");const R=Kr.fromJSON(this.name,k);O(typeof v=="string",e,"internal-error"),cn(h,e.name),cn(f,e.name),O(typeof x=="boolean",e,"internal-error"),O(typeof S=="boolean",e,"internal-error"),cn(_,e.name),cn(p,e.name),cn(y,e.name),cn(C,e.name),cn(m,e.name),cn(g,e.name);const K=new Gt({uid:v,auth:e,email:f,emailVerified:x,displayName:h,isAnonymous:S,photoURL:p,phoneNumber:_,tenantId:y,stsTokenManager:R,createdAt:m,lastLoginAt:g});return T&&Array.isArray(T)&&(K.providerData=T.map(M=>Object.assign({},M))),C&&(K._redirectEventId=C),K}static async _fromIdTokenResponse(e,n,r=!1){const s=new Kr;s.updateFromServerResponse(n);const i=new Gt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ra(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];O(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?B_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Kr;a.updateFromIdToken(r);const l=new Gt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Tu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Fp=new Map;function Kt(t){sn(t instanceof Function,"Expected a class definition");let e=Fp.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fp.set(t,e),e)}/**
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
 */class H_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}H_.type="NONE";const Up=H_;/**
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
 */function Fo(t,e,n){return`firebase:${t}:${e}:${n}`}class Qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qr(Kt(Up),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Kt(Up);const o=Fo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const h=Gt._fromJSON(e,d);u!==i&&(a=h),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Qr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Qr(i,e,r))}}/**
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
 */function zp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(X_(e))return"Blackberry";if(J_(e))return"Webos";if(G_(e))return"Safari";if((e.includes("chrome/")||K_(e))&&!e.includes("edge/"))return"Chrome";if(Y_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function q_(t=Ve()){return/firefox\//i.test(t)}function G_(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K_(t=Ve()){return/crios\//i.test(t)}function Q_(t=Ve()){return/iemobile/i.test(t)}function Y_(t=Ve()){return/android/i.test(t)}function X_(t=Ve()){return/blackberry/i.test(t)}function J_(t=Ve()){return/webos/i.test(t)}function wh(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RN(t=Ve()){var e;return wh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AN(){return Cw()&&document.documentMode===10}function Z_(t=Ve()){return wh(t)||Y_(t)||J_(t)||X_(t)||/windows phone/i.test(t)||Q_(t)}/**
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
 */function ey(t,e=[]){let n;switch(t){case"Browser":n=zp(Ve());break;case"Worker":n=`${zp(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${r}`}/**
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
 */class jN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ON(t,e={}){return Bn(t,"GET","/v2/passwordPolicy",$n(t,e))}/**
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
 */const DN=6;class LN{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:DN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class MN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vp(this),this.idTokenSubscription=new Vp(this),this.beforeStateQueue=new jN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $_(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ra(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(Xt(this));const n=e?ke(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(Xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(Xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ON(this),n=new LN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ey(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hn(t){return ke(t)}class Vp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Aw(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FN(t){ml=t}function ty(t){return ml.loadJS(t)}function UN(){return ml.recaptchaEnterpriseScript}function zN(){return ml.gapiScript}function VN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WN="recaptcha-enterprise",$N="NO_RECAPTCHA";class BN{constructor(e){this.type=WN,this.auth=Hn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{CN(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new wN(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Lp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o($N)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Lp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=UN();l.length!==0&&(l+=a),ty(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Wp(t,e,n,r=!1){const s=new BN(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Pu(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Wp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function HN(t,e){const n=jd(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(pa(i,e??{}))return s;dt(s,"already-initialized")}return n.initialize({options:e})}function qN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GN(t,e,n){const r=Hn(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ny(e),{host:o,port:a}=KN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),QN()}function ny(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KN(t){const e=ny(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$p(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$p(o)}}}function $p(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ch{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}async function YN(t,e){return Bn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function XN(t,e){return Xi(t,"POST","/v1/accounts:signInWithPassword",$n(t,e))}/**
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
 */async function JN(t,e){return Xi(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}async function ZN(t,e){return Xi(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}/**
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
 */class Li extends Ch{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Li(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Li(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pu(e,n,"signInWithPassword",XN);case"emailLink":return JN(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pu(e,r,"signUpPassword",YN);case"emailLink":return ZN(e,{idToken:n,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Yr(t,e){return Xi(t,"POST","/v1/accounts:signInWithIdp",$n(t,e))}/**
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
 */const ek="http://localhost";class vr extends Ch{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:ek,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ms(n)}return e}}/**
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
 */function tk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nk(t){const e=$s(Bs(t)).link,n=e?$s(Bs(e)).deep_link_id:null,r=$s(Bs(t)).deep_link_id;return(r?$s(Bs(r)).link:null)||r||n||e||t}class Eh{constructor(e){var n,r,s,i,o,a;const l=$s(Bs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=tk((s=l.mode)!==null&&s!==void 0?s:null);O(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=nk(e);try{return new Eh(n)}catch{return null}}}/**
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
 */class ws{constructor(){this.providerId=ws.PROVIDER_ID}static credential(e,n){return Li._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Eh.parseLink(n);return O(r,"argument-error"),Li._fromEmailAndCode(e,r.code,r.tenantId)}}ws.PROVIDER_ID="password";ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Sh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ji extends Sh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pn extends Ji{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
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
 */class Vt extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
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
 */class mn extends Ji{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class gn extends Ji{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */async function rk(t,e){return Xi(t,"POST","/v1/accounts:signUp",$n(t,e))}/**
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
 */class _r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Gt._fromIdTokenResponse(e,r,s),o=Bp(r);return new _r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bp(r);return new _r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Aa extends Wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Aa(e,n,r,s)}}function ry(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(t,i,e,r):i})}async function sk(t,e,n=!1){const r=await Di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _r._forOperation(t,"link",r)}/**
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
 */async function ik(t,e,n=!1){const{auth:r}=t;if(yt(r.app))return Promise.reject(Xt(r));const s="reauthenticate";try{const i=await Di(t,ry(r,s,e,t),n);O(i.idToken,r,"internal-error");const o=xh(i.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),_r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&dt(r,"user-mismatch"),i}}/**
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
 */async function sy(t,e,n=!1){if(yt(t.app))return Promise.reject(Xt(t));const r="signIn",s=await ry(t,r,e),i=await _r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ok(t,e){return sy(Hn(t),e)}/**
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
 */async function iy(t){const e=Hn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ak(t,e,n){if(yt(t.app))return Promise.reject(Xt(t));const r=Hn(t),o=await Pu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rk).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&iy(t),l}),a=await _r._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function lk(t,e,n){return yt(t.app)?Promise.reject(Xt(t)):ok(ke(t),ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iy(t),r})}function ck(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function uk(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function dk(t,e,n,r){return ke(t).onAuthStateChanged(e,n,r)}function hk(t){return ke(t).signOut()}const ja="__sak";/**
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
 */class oy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ja,"1"),this.storage.removeItem(ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const fk=1e3,pk=10;class ay extends oy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);AN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,pk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ay.type="LOCAL";const mk=ay;/**
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
 */class ly extends oy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ly.type="SESSION";const cy=ly;/**
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
 */function gk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new gl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await gk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gl.receivers=[];/**
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
 */function Nh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Nh("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ot(){return window}function _k(t){Ot().location.href=t}/**
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
 */function uy(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function yk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wk(){return uy()?self:null}/**
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
 */const dy="firebaseLocalStorageDb",Ck=1,Oa="firebaseLocalStorage",hy="fbase_key";class Zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vl(t,e){return t.transaction([Oa],e?"readwrite":"readonly").objectStore(Oa)}function Ek(){const t=indexedDB.deleteDatabase(dy);return new Zi(t).toPromise()}function Ru(){const t=indexedDB.open(dy,Ck);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Oa,{keyPath:hy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Oa)?e(r):(r.close(),await Ek(),e(await Ru()))})})}async function Hp(t,e,n){const r=vl(t,!0).put({[hy]:e,value:n});return new Zi(r).toPromise()}async function Sk(t,e){const n=vl(t,!1).get(e),r=await new Zi(n).toPromise();return r===void 0?null:r.value}function qp(t,e){const n=vl(t,!0).delete(e);return new Zi(n).toPromise()}const Nk=800,kk=3;class fy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ru(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gl._getInstance(wk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yk(),!this.activeServiceWorker)return;this.sender=new vk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ru();return await Hp(e,ja,"1"),await qp(e,ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Sk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=vl(s,!1).getAll();return new Zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fy.type="LOCAL";const Ik=fy;new Yi(3e4,6e4);/**
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
 */function py(t,e){return e?Kt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kh extends Ch{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bk(t){return sy(t.auth,new kh(t),t.bypassAuthState)}function Tk(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),ik(n,new kh(t),t.bypassAuthState)}async function Pk(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),sk(n,new kh(t),t.bypassAuthState)}/**
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
 */class my{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bk;case"linkViaPopup":case"linkViaRedirect":return Pk;case"reauthViaPopup":case"reauthViaRedirect":return Tk;default:dt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Rk=new Yi(2e3,1e4);async function Ak(t,e,n){if(yt(t.app))return Promise.reject(St(t,"operation-not-supported-in-this-environment"));const r=Hn(t);fN(t,e,Sh);const s=py(r,n);return new rr(r,"signInViaPopup",e,s).executeNotNull()}class rr extends my{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Nh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rk.get())};e()}}rr.currentPopupAction=null;/**
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
 */const jk="pendingRedirect",Uo=new Map;class Ok extends my{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Uo.get(this.auth._key());if(!e){try{const r=await Dk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uo.set(this.auth._key(),e)}return this.bypassAuthState||Uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dk(t,e){const n=Fk(e),r=Mk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Lk(t,e){Uo.set(t._key(),e)}function Mk(t){return Kt(t._redirectPersistence)}function Fk(t){return Fo(jk,t.config.apiKey,t.name)}async function Uk(t,e,n=!1){if(yt(t.app))return Promise.reject(Xt(t));const r=Hn(t),s=py(r,e),o=await new Ok(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const zk=10*60*1e3;class Vk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(St(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gp(e))}saveEventToCache(e){this.cachedEventUids.add(Gp(e)),this.lastProcessedEventTime=Date.now()}}function Gp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gy(t);default:return!1}}/**
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
 */async function $k(t,e={}){return Bn(t,"GET","/v1/projects",e)}/**
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
 */const Bk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hk=/^https?/;async function qk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $k(t);for(const n of e)try{if(Gk(n))return}catch{}dt(t,"unauthorized-domain")}function Gk(t){const e=bu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Hk.test(n))return!1;if(Bk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Kk=new Yi(3e4,6e4);function Kp(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qk(t){return new Promise((e,n)=>{var r,s,i;function o(){Kp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kp(),n(St(t,"network-request-failed"))},timeout:Kk.get()})}if(!((s=(r=Ot().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ot().gapi)===null||i===void 0)&&i.load)o();else{const a=VN("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},ty(`${zN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw zo=null,e})}let zo=null;function Yk(t){return zo=zo||Qk(t),zo}/**
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
 */const Xk=new Yi(5e3,15e3),Jk="__/auth/iframe",Zk="emulator/auth/iframe",eI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nI(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yh(e,Zk):`https://${t.config.authDomain}/${Jk}`,r={apiKey:e.apiKey,appName:t.name,v:gs},s=tI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ms(r).slice(1)}`}async function rI(t){const e=await Yk(t),n=Ot().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:nI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),a=Ot().setTimeout(()=>{i(o)},Xk.get());function l(){Ot().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const sI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iI=500,oI=600,aI="_blank",lI="http://localhost";class Qp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cI(t,e,n,r=iI,s=oI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sI),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ve().toLowerCase();n&&(a=K_(u)?aI:n),q_(u)&&(e=e||lI,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[_,p])=>`${f}${_}=${p},`,"");if(RN(u)&&a!=="_self")return uI(e||"",a),new Qp(null);const h=window.open(e||"",a,d);O(h,t,"popup-blocked");try{h.focus()}catch{}return new Qp(h)}function uI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dI="__/auth/handler",hI="emulator/auth/handler",fI=encodeURIComponent("fac");async function Yp(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gs,eventId:s};if(e instanceof Sh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",au(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Ji){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${fI}=${encodeURIComponent(l)}`:"";return`${pI(t)}?${ms(a).slice(1)}${u}`}function pI({config:t}){return t.emulator?yh(t,hI):`https://${t.authDomain}/${dI}`}/**
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
 */const hc="webStorageSupport";class mI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cy,this._completeRedirectFn=Uk,this._overrideRedirectResult=Lk}async _openPopup(e,n,r,s){var i;sn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Yp(e,n,r,bu(),s);return cI(e,o,Nh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Yp(e,n,r,bu(),s);return _k(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rI(e),r=new Vk(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hc,{type:hc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[hc];o!==void 0&&n(!!o),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Z_()||G_()||wh()}}const gI=mI;var Xp="@firebase/auth",Jp="1.7.9";/**
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
 */class vI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _I(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yI(t){ss(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ey(t)},u=new MN(r,s,i,l);return qN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ss(new fr("auth-internal",e=>{const n=Hn(e.getProvider("auth").getImmediate());return(r=>new vI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(Xp,Jp,_I(t)),Pn(Xp,Jp,"esm2017")}/**
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
 */const xI=5*60,wI=_v("authIdTokenMaxAge")||xI;let Zp=null;const CI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wI)return;const s=n==null?void 0:n.token;Zp!==s&&(Zp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function EI(t=Sv()){const e=jd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HN(t,{popupRedirectResolver:gI,persistence:[Ik,mk,cy]}),r=_v("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=CI(i.toString());uk(n,o,()=>o(n.currentUser)),ck(n,a=>o(a))}}const s=gv("auth");return s&&GN(n,`http://${s}`),n}function SI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}FN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=St("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",SI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yI("Browser");var NI="firebase",kI="10.14.1";/**
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
 */Pn(NI,kI,"app");const II={apiKey:"AIzaSyDJM-VHPdo2ipOFEecEFjxo5W_FQuQ3BAk",authDomain:"vistta-2e1df.firebaseapp.com",databaseURL:"https://vistta-2e1df-default-rtdb.firebaseio.com",projectId:"vistta-2e1df",storageBucket:"vistta-2e1df.firebasestorage.app",messagingSenderId:"13458811244",appId:"1:13458811244:web:e3517470970e9a45142b49",measurementId:"G-TJLG0CPZQM"},vy=Ev(II),oi=EI(vy),G=oN(vy),re=t=>Number(t||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),_y=P.createContext(null),It=()=>{const t=P.useContext(_y);if(!t)throw new Error("useAppContext deve ser usado dentro de um AppProvider");return t},bI=({children:t})=>{const[e,n]=P.useState(null),[r,s]=P.useState(!0),[i,o]=P.useState(null),[a,l]=P.useState(null),[u,d]=P.useState(null),[h,f]=P.useState(null),[_,p]=P.useState("dashboard"),[y,C]=P.useState(""),[m,g]=P.useState([]),[v,x]=P.useState([]),[S,T]=P.useState([]),[k,R]=P.useState([]),[K,M]=P.useState([]),[Ye,qn]=P.useState([]),[Gn,to]=P.useState([]),[Cl,Cs]=P.useState([]),[Es,I]=P.useState([]),[D,L]=P.useState([]),[oe,ge]=P.useState([]),[Lt,bt]=P.useState(""),[Sr,Mt]=P.useState("Pix"),[Kn,bh]=P.useState(0),ht=P.useMemo(()=>K.find(N=>N.status==="aberto"),[K]),Th=P.useMemo(()=>ht?k.filter(N=>N.caixaId===ht.id):[],[k,ht]),El=P.useMemo(()=>Th.reduce((N,j)=>N+(j.total||0),0),[Th]),Ss=()=>{if(!e)throw new Error("Usuário não autenticado. Entre novamente.");if(!a)throw new Error("Empresa não identificada.");return a},Ns=async(N,j,ae)=>{const H=`empresas/${Ss()}/${N}`;if(ae){await zt(q(G,`${H}/${ae}`),j);return}const Ie=zr(q(G,H));await zt(q(G,`${H}/${Ie.key}`),j)},Sl=async(N,j)=>{const ae=Ss();await HS(q(G,`empresas/${ae}/${N}/${j}`))};P.useEffect(()=>{let N,j;const ae=()=>{N==null||N(),N=void 0,j&&clearTimeout(j),j=void 0},pe=dk(oi,H=>{ae(),H?(f(null),j=setTimeout(()=>{console.error("Tempo excedido ao carregar o perfil do usuário."),n(H),s(!1)},1e4),N=ku(q(G,`users/${H.uid}`),Ie=>{const de=Ie.val();l((de==null?void 0:de.empresaId)||null),o((de==null?void 0:de.role)||null),de!=null&&de.empresaId?Nu(q(G,`empresas/${de.empresaId}/info`)).then(an=>{d(an.exists()?an.val():null)}):d(null),n(H),s(!1),ae()},Ie=>{console.error("Não foi possível carregar o perfil do usuário:",Ie),l(null),o(null),n(H),s(!1),ae()})):(n(null),l(null),o(null),d(null),f(null),s(!1))});return()=>{ae(),pe()}},[]),P.useEffect(()=>{if(!a)return;const N=`empresas/${a}`,j=new Date;j.setDate(1),j.setHours(0,0,0,0);const ae=[{name:"produtos",setter:x,queryRef:q(G,`${N}/produtos`)},{name:"clientes",setter:T,queryRef:q(G,`${N}/clientes`)},{name:"fornecedores",setter:Cs,queryRef:q(G,`${N}/fornecedores`)},{name:"contas",setter:I,queryRef:q(G,`${N}/contas`)},{name:"categorias",setter:L,queryRef:q(G,`${N}/categorias`)},{name:"usuarios",setter:ge,queryRef:q(G,`${N}/usuarios`)},{name:"orcamentos",setter:qn,queryRef:q(G,`${N}/orcamentos`)},{name:"ordensServico",setter:to,queryRef:q(G,`${N}/ordensServico`)},{name:"vendas",setter:R,queryRef:Op(q(G,`${N}/vendas`),JS("data"),KS(j.toISOString()))},{name:"caixas",setter:M,queryRef:Op(q(G,`${N}/caixas`),YS(100))}];f(null);const pe=ae.map(H=>ku(H.queryRef,Ie=>{const de=[];Ie.forEach(an=>{de.push({id:an.key,...an.val()})}),H.setter(de)},Ie=>{console.error(`Erro ao carregar ${H.name}:`,Ie),f(`Não foi possível carregar ${H.name}. Verifique as regras do Firebase.`)}));return()=>pe.forEach(H=>H())},[a]);const Ny=N=>{g(j=>{const ae=j.findIndex(pe=>pe.id===N.id);if(ae>-1){const pe=[...j];return pe[ae].qtd=Math.min(pe[ae].qtd+1,Number(N.qtd)),pe}return[...j,{...N,qtd:1}]})},ky=N=>g(j=>j.filter(ae=>ae.id!==N)),Iy=async N=>{if(ht)throw new Error("Já existe um caixa aberto.");if(!Number.isFinite(N)||N<0)throw new Error("Informe um valor inicial válido.");await Ns("caixas",{dataAbertura:new Date().toISOString(),valorInicial:N,status:"aberto",operador:(e==null?void 0:e.email)||(e==null?void 0:e.uid)||"Operador"})},by=async()=>{const N=ht;if(!N)throw new Error("Nenhum caixa aberto.");const j=(N.lancamentos||[]).reduce((ae,pe)=>ae+(pe.tipo==="entrada"?Number(pe.valor):-Number(pe.valor)),0);await zt(q(G,`empresas/${Ss()}/caixas/${N.id}`),{status:"fechado",dataFechamento:new Date().toISOString(),totalVendas:El,valorFinal:Number(N.valorInicial||0)+El+j})},Ty=(N,j)=>Ns("produtos",N,j),Py=N=>Sl("produtos",N),Ry=(N,j)=>Ns("clientes",N,j),Ay=N=>Sl("clientes",N),jy=(N,j,ae)=>Ns(N,j,ae),Oy=(N,j)=>Sl(N,j),Ph=(N,j)=>Ns("ordensServico",N,j),Dy={user:e,loadingAuth:r,userRole:i,empresaId:a,dadosEmpresa:u,databaseError:h,produtos:v,clientes:S,vendas:k,caixas:K,orcamentos:Ye,ordensServico:Gn,carrinho:m,fornecedores:Cl,contas:Es,categorias:D,usuarios:oe,activeTab:_,setActiveTab:p,pdvSearch:y,setPdvSearch:C,abrirCaixa:Iy,fecharCaixa:by,salvarProduto:Ty,excluirProduto:Py,salvarCliente:Ry,excluirCliente:Ay,salvarCadastro:jy,excluirCadastro:Oy,salvarOrdemServico:Ph,converterOrcamentoParaOs:async N=>{await Ph({clienteId:N.cliId,orcamentoId:N.id,itens:N.itens.map(j=>({produtoId:j.id,descricao:`${j.marca} ${j.modelo}`.trim(),qtd:j.qtd,valor:Number(j.venda)||0,tratamento:""})),status:"aguardando_montagem",criadoEm:new Date().toISOString(),atualizadoEm:new Date().toISOString()}),await zt(q(G,`empresas/${Ss()}/orcamentos/${N.id}`),{status:"aprovado"})},registrarLancamentoCaixa:async N=>{const j=ht;if(!j)throw new Error("Abra o caixa antes de registrar um lançamento.");if(!Number.isFinite(N.valor)||N.valor<=0)throw new Error("Informe um valor válido.");await zr(q(G,`empresas/${Ss()}/caixas/${j.id}/lancamentos`),{...N,data:new Date().toISOString(),operador:(e==null?void 0:e.email)||(e==null?void 0:e.uid)||"Operador"})},addToCart:Ny,removeFromCart:ky,finalizarVenda:async(N=!1)=>{if(m.length===0||!a)return alert("Carrinho vazio!");if(!N&&!ht)return alert("Abra o caixa primeiro!");let j=m.reduce((H,Ie)=>H+Number(Ie.venda)*Ie.qtd,0),ae=m.reduce((H,Ie)=>H+Number(Ie.custo)*Ie.qtd,0),pe=Math.max(0,Number(Kn)||0);pe=Math.min(pe,j);try{if(N){if(!Lt)return alert("Selecione um cliente para salvar o orçamento!");await zr(q(G,`empresas/${a}/orcamentos`),{cliId:Lt,subtotal:j,desconto:pe,total:j-pe,itens:m.map(H=>({id:H.id,marca:H.marca,modelo:H.modelo,qtd:H.qtd,venda:H.venda})),data:new Date().toISOString(),status:"pendente"})}else{const H=m.map(async de=>{const an=q(G,`empresas/${a}/produtos/${de.id}/qtd`),Rh=await Nu(an),Nl=Number(Rh.val());if(!Rh.exists()||!Number.isFinite(Nl)||Nl<de.qtd)throw new Error(`Estoque insuficiente para ${de.marca} ${de.modelo}.`);const kl=await uN(an,no=>{if(no===null)return no;const Ah=Number(no)-de.qtd;return Ah>=0?Ah:no}),Ly=Number(kl.snapshot.val());if(!kl.committed||Ly!==Nl-de.qtd)throw new Error(`Não foi possível reservar o estoque de ${de.marca} ${de.modelo}.`);return kl});await Promise.all(H);const Ie=zr(q(G,`empresas/${a}/vendas`));await zt(q(G,`empresas/${a}/vendas/${Ie.key}`),{cliId:Lt,pag:Sr,subtotal:j,desconto:pe,total:j-pe,custoBase:ae,itens:m.length,data:new Date().toISOString(),caixaId:ht==null?void 0:ht.id})}g([]),bh(0),bt(""),alert(N?"Orçamento salvo!":"Venda concluída com sucesso!")}catch(H){alert("Erro ao finalizar: "+H.message)}},caixaAberto:ht,totalVendasCaixa:El,pdvCliente:Lt,setPdvCliente:bt,pdvDesconto:Kn,setPdvDesconto:bh,pdvPagamento:Sr,setPdvPagamento:Mt};return c.jsx(_y.Provider,{value:Dy,children:t})};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var TI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(t,e)=>{const n=P.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:a="",children:l,...u},d)=>P.createElement("svg",{ref:d,...TI,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${PI(t)}`,a].join(" "),...u},[...e.map(([h,f])=>P.createElement(h,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=$("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=$("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RI=$("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AI=$("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=$("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=$("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=$("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=$("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=$("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MI=$("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=$("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=$("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=$("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=$("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=$("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=$("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=$("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=$("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=$("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=$("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=$("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=$("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=$("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=$("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=$("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=$("Tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=$("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=$("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=$("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=$("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=$("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QI=$("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=$("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Wt({title:t,value:e,subtitle:n,icon:r,bg:s="bg-white dark:bg-slate-800",color:i="text-slate-900 dark:text-white",border:o="border-slate-100 dark:border-slate-700"}){return c.jsxs("div",{className:`p-6 rounded-3xl border shadow-sm ${s} ${o}`,children:[c.jsx("div",{className:"flex items-start justify-between mb-4",children:c.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center ${s==="bg-white dark:bg-slate-800"?"bg-indigo-50 text-[#4A3AFF]":i.replace("text-","bg-").replace("500","100")+" "+i}`,children:c.jsx(r,{size:24})})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-1",children:t}),c.jsx("div",{className:`text-2xl font-black ${i}`,children:e}),n&&c.jsx("p",{className:"text-[12px] font-medium text-slate-400 mt-1",children:n})]})]})}function wl({open:t,onClose:e,title:n,width:r="max-w-md",children:s}){return t?c.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4",children:c.jsxs("div",{className:`bg-white rounded-[32px] w-full ${r} shadow-2xl flex flex-col max-h-[90vh] animate-fade-in`,children:[c.jsxs("div",{className:"flex justify-between items-center p-6 border-b border-slate-100",children:[c.jsx("h2",{className:"text-xl font-bold text-slate-800",children:n}),c.jsx("button",{onClick:e,className:"p-2 bg-slate-100 rounded-full text-slate-500 hover:text-rose-500 transition-colors",children:c.jsx(Ey,{size:20})})]}),c.jsx("div",{className:"overflow-y-auto custom-scrollbar p-6",children:s})]})}):null}function Sy({className:t="",solidWhite:e=!1}){const n=e?"currentColor":"white",r=e?"currentColor":"#a094ff";return c.jsxs("svg",{viewBox:"0 0 120 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:[c.jsxs("g",{stroke:n,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"38",cy:"36",r:"14"}),c.jsx("path",{d:"M 28 26 Q 16 12 10 22"})]}),c.jsxs("g",{stroke:r,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"82",cy:"36",r:"14"}),c.jsx("path",{d:"M 92 26 Q 104 12 110 22"}),c.jsx("path",{d:"M 52 36 Q 60 28 68 36"})]})]})}function pt({icon:t,label:e,active:n,onClick:r,badge:s,badgeColor:i}){return c.jsxs("button",{onClick:r,className:`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${n?"bg-indigo-50 text-[#4A3AFF] font-bold":"text-slate-500 hover:bg-slate-100 font-medium"}`,children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(t,{size:20,className:`mr-3 ${n?"text-[#4A3AFF]":"text-slate-400"}`}),e]}),s&&c.jsx("span",{className:`px-2 py-0.5 rounded-lg text-[11px] font-bold ${i}`,children:s})]})}function fc({label:t}){return c.jsx("div",{className:"px-4 py-2 mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:t})}function YI(){var a,l;const{activeTab:t,setActiveTab:e,caixaAberto:n,orcamentos:r,userRole:s,dadosEmpresa:i,user:o}=It();return c.jsxs("aside",{className:"hidden md:flex flex-col w-[270px] bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700/50 z-20 shadow-sm",children:[c.jsxs("div",{className:"h-[80px] flex items-center px-6 border-b border-slate-100 dark:border-slate-700/50 flex-shrink-0",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#4A3AFF] text-white flex items-center justify-center mr-3",children:c.jsx(Sy,{className:"w-7",solidWhite:!0})}),c.jsx("span",{className:"font-bold text-[18px] text-slate-900 dark:text-white truncate",title:i==null?void 0:i.nome,children:(i==null?void 0:i.nome)||"Minha Ótica"})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar",children:[c.jsx(pt,{icon:yy,label:"Dashboard",active:t==="dashboard",onClick:()=>e("dashboard")}),c.jsx(fc,{label:"Operação"}),c.jsx(pt,{icon:QI,label:"Caixa Diário",active:t==="caixa",onClick:()=>e("caixa"),badge:n?"Aberto":"Fechado",badgeColor:n?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-500"}),c.jsx(pt,{icon:wy,label:"PDV",active:t==="vendas",onClick:()=>e("vendas")}),c.jsx(pt,{icon:ju,label:"Orçamentos",active:t==="orcamentos",onClick:()=>e("orcamentos"),badge:r.filter(u=>u.status==="pendente").length||null,badgeColor:"bg-amber-100 text-amber-700"}),c.jsx(pt,{icon:ju,label:"Ordens de Serviço",active:t==="ordens",onClick:()=>e("ordens")}),c.jsx(fc,{label:"Cadastros"}),c.jsx(pt,{icon:Ih,label:"Estoque",active:t==="estoque",onClick:()=>e("estoque")}),c.jsx(pt,{icon:xl,label:"Clientes",active:t==="clientes",onClick:()=>e("clientes")}),c.jsx(pt,{icon:GI,label:"Categorias",active:t==="categorias",onClick:()=>e("categorias")}),s==="admin"&&c.jsxs(c.Fragment,{children:[c.jsx(fc,{label:"Gestão (Admin)"}),c.jsx(pt,{icon:La,label:"DRE Financeiro",active:t==="financeiro",onClick:()=>e("financeiro")}),c.jsx(pt,{icon:Au,label:"Contas",active:t==="contas",onClick:()=>e("contas")}),c.jsx(pt,{icon:KI,label:"Usuários",active:t==="usuarios",onClick:()=>e("usuarios")})]})]}),c.jsxs("div",{className:"p-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center min-w-0",children:[c.jsx("div",{className:"w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-[#4A3AFF] flex items-center justify-center font-bold mr-3",children:((a=o==null?void 0:o.email)==null?void 0:a.charAt(0).toUpperCase())||"U"}),c.jsxs("div",{className:"min-w-0",children:[c.jsx("div",{className:"text-sm font-bold truncate text-slate-900 dark:text-white",children:((l=o==null?void 0:o.email)==null?void 0:l.split("@")[0])||"Usuário"}),c.jsx("div",{className:"text-[10px] text-slate-500 font-bold uppercase",children:s==="admin"?"Administrador":"Vendedor"})]})]}),c.jsx("button",{onClick:()=>hk(oi),className:"text-slate-400 hover:text-rose-500",title:"Sair",children:c.jsx(FI,{size:18})})]})]})}function XI(){const[t,e]=P.useState("login"),[n,r]=P.useState(!1),[s,i]=P.useState(""),[o,a]=P.useState(""),[l,u]=P.useState(""),[d,h]=P.useState(""),[f,_]=P.useState(!1),[p,y]=P.useState(!0),C=async g=>{g.preventDefault(),h(""),r(!0);try{if(t==="login")await lk(oi,s,o);else{const v=await ak(oi,s,o);try{const S=zr(q(G,"empresas")).key;await zt(q(G,`empresas/${S}/info`),{nome:l||"Minha Ótica",criadoEm:new Date().toISOString(),criadoPor:v.user.uid}),await zt(q(G,`users/${v.user.uid}`),{empresaId:S,role:"admin",email:s})}catch{await v.user.delete(),h("Falha ao registrar empresa no banco.")}}}catch{h(t==="login"?"E-mail ou senha incorretos.":"Erro ao autenticar.")}finally{r(!1)}},m=async()=>{h(""),r(!0);const g=new Vt;try{const v=await Ak(oi,g),x=q(G,`users/${v.user.uid}`);if(!(await Nu(x)).exists()){const k=zr(q(G,"empresas")).key;await zt(q(G,`empresas/${k}/info`),{nome:v.user.displayName?`Ótica de ${v.user.displayName}`:"Minha Ótica",criadoEm:new Date().toISOString(),criadoPor:v.user.uid}),await zt(q(G,`users/${v.user.uid}`),{empresaId:k,role:"admin",email:v.user.email,nome:v.user.displayName})}}catch(v){h(`Erro Google: ${v.message}`)}finally{r(!1)}};return c.jsxs("div",{className:"flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans overflow-hidden",children:[c.jsxs("div",{className:"hidden lg:flex w-[55%] bg-[#120D38] flex-col items-center justify-center p-12 text-white relative",children:[c.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#3b2b9a] rounded-full blur-[140px] opacity-60"}),c.jsx("div",{className:"absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#21146c] rounded-full blur-[140px] opacity-60"}),c.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center w-full max-w-2xl",children:[c.jsxs("div",{className:"mb-10 flex flex-col items-center",children:[c.jsx(Sy,{className:"w-36 h-auto mb-4 drop-shadow-2xl",solidWhite:!1}),c.jsx("h1",{className:"text-[56px] font-bold tracking-[0.2em] leading-none mb-3 text-white",children:"VISTTA"}),c.jsx("p",{className:"text-[#a094ff] tracking-[0.35em] text-[11px] uppercase font-semibold",children:"Gestão Inteligente para Óticas"}),c.jsx("div",{className:"w-12 h-[2px] bg-[#6552ff] mt-8 rounded-full"})]}),c.jsx("h2",{className:"text-[40px] font-normal mb-1 tracking-tight text-white/90",children:"Sua ótica. Uma plataforma."}),c.jsx("h2",{className:"text-[42px] font-bold text-[#7b66ff] mb-6 tracking-tight",children:"Mais controle."}),c.jsxs("div",{className:"flex items-start justify-center gap-8 mb-16 w-full",children:[c.jsxs("div",{className:"flex flex-col items-center flex-1 max-w-[180px]",children:[c.jsx(HI,{size:36,className:"text-[#7b66ff] mb-4"}),c.jsx("h3",{className:"text-[14px] font-bold mb-2 text-white",children:"Gestão Multi-Loja"})]}),c.jsx("div",{className:"w-px h-24 bg-indigo-500/20 mt-4"}),c.jsxs("div",{className:"flex flex-col items-center flex-1 max-w-[180px]",children:[c.jsx(BI,{size:36,className:"text-[#7b66ff] mb-4"}),c.jsx("h3",{className:"text-[14px] font-bold mb-2 text-white",children:"Estoque em tempo real"})]})]})]})]}),c.jsx("div",{className:"flex-1 lg:w-[45%] bg-[#F8FAFC] dark:bg-slate-900 flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-y-auto custom-scrollbar",children:c.jsx("div",{className:"w-full max-w-[460px]",children:c.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-100 p-8 sm:p-10 mb-8 w-full",children:[c.jsx("div",{className:"text-center mb-8",children:c.jsx("h2",{className:"text-[26px] font-bold mb-2",children:t==="login"?"Bem-vindo de volta!":"Crie sua conta!"})}),c.jsxs("form",{onSubmit:C,className:"space-y-5",children:[d&&c.jsxs("div",{className:"bg-rose-50 text-rose-600 p-3.5 rounded-xl text-sm font-bold flex gap-3 border border-rose-100",children:[c.jsx(Cy,{size:18}),c.jsx("span",{children:d})]}),t==="register"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"Nome da Ótica"}),c.jsxs("div",{className:"relative",children:[c.jsx(RI,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",required:!0,value:l,onChange:g=>u(g.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Nome da ótica"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"E-mail"}),c.jsxs("div",{className:"relative",children:[c.jsx(UI,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"email",required:!0,value:s,onChange:g=>i(g.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Seu e-mail"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"Senha"}),c.jsxs("div",{className:"relative",children:[c.jsx(Da,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:f?"text":"password",required:!0,value:o,onChange:g=>a(g.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-12 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Sua senha"}),c.jsx("button",{type:"button",onClick:()=>_(!f),className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-400",children:f?c.jsx(DI,{size:18}):c.jsx(LI,{size:18})})]})]}),c.jsx("button",{type:"submit",disabled:n,className:"w-full bg-[#5235ff] hover:bg-[#4323ec] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-4",children:n?"Aguarde...":t==="login"?"Entrar":"Criar Conta"}),t==="login"&&c.jsx("button",{type:"button",onClick:m,className:"w-full border py-3.5 rounded-xl font-bold flex justify-center gap-3 mt-4 hover:bg-slate-50",children:"Entrar com Google"}),c.jsx("div",{className:"text-center mt-6",children:c.jsx("button",{type:"button",onClick:()=>e(t==="login"?"register":"login"),className:"text-sm font-bold text-[#5235ff] hover:underline",children:t==="login"?"Criar uma conta":"Fazer login"})})]})]})})})]})}function JI(){const{produtos:t,vendas:e,clientes:n,setActiveTab:r}=It();return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsx("div",{className:"mb-8",children:c.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Painel Geral"})}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6",children:[c.jsx(Wt,{title:"Estoque Total",value:t.reduce((s,i)=>s+Number(i.qtd),0),subtitle:"unidades ativas",icon:Ih}),c.jsx(Wt,{title:"Vendas do Mês",value:re(e.reduce((s,i)=>s+(i.total||0),0)),icon:La,color:"text-emerald-500"}),c.jsx(Wt,{title:"Clientes Base",value:n.length,icon:xl}),c.jsx(Wt,{title:"Estoque Crítico",value:t.filter(s=>Number(s.qtd)<Number(s.min)).length,icon:Cy,bg:"bg-rose-50",color:"text-rose-500"})]})]})}function ZI(){const{caixaAberto:t,pdvSearch:e,setPdvSearch:n,carrinho:r,addToCart:s,removeFromCart:i,pdvCliente:o,setPdvCliente:a,clientes:l,pdvDesconto:u,setPdvDesconto:d,pdvPagamento:h,setPdvPagamento:f,finalizarVenda:_,setActiveTab:p,produtos:y}=It(),[C,m]=P.useState("produtos"),g=y.filter(v=>Number(v.qtd)>0&&((v.marca||"").toLowerCase().includes(e.toLowerCase())||(v.modelo||"").toLowerCase().includes(e.toLowerCase())||(v.codigo||"").toLowerCase().includes(e.toLowerCase())));return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsx("div",{className:"mb-6 flex justify-between items-end",children:c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Ponto de Venda"}),t?c.jsx("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold",children:"Caixa Aberto"}):c.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-xs font-bold",children:[c.jsx(Da,{size:12})," Caixa Fechado"]})]})}),t?c.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row gap-6",children:[c.jsxs("div",{className:"lg:w-[60%] bg-white rounded-3xl border border-slate-100 p-6 flex flex-col",children:[c.jsxs("div",{className:"relative mb-6",children:[c.jsx(xy,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:18}),c.jsx("input",{type:"text",placeholder:"Buscar por marca, modelo ou código...",value:e,onChange:v=>n(v.target.value),className:"w-full bg-slate-50 border rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:border-[#4A3AFF]"})]}),c.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5",children:g.map(v=>c.jsxs("div",{onClick:()=>s(v),className:"bg-slate-50 border rounded-2xl p-5 cursor-pointer hover:border-[#4A3AFF] transition-all flex flex-col group",children:[c.jsx("div",{className:"text-[11px] text-slate-400 font-mono mb-2",children:v.codigo}),c.jsxs("div",{className:"font-bold text-[15px] group-hover:text-[#4A3AFF]",children:[v.marca," ",v.modelo]}),c.jsx("div",{className:"text-[12px] text-slate-500 mb-4",children:v.categoria}),c.jsxs("div",{className:"mt-auto flex justify-between items-end",children:[c.jsx("span",{className:"font-extrabold text-emerald-600 text-lg",children:re(v.venda)}),c.jsxs("span",{className:"text-[11px] bg-white px-2 py-1 rounded-lg font-bold",children:["Est: ",v.qtd]})]})]},v.id))})]}),c.jsxs("div",{className:"lg:w-[40%] bg-white rounded-3xl border border-slate-100 p-6 flex flex-col",children:[c.jsx("h3",{className:"font-bold text-xl mb-5",children:"Carrinho"}),c.jsxs("div",{className:"mb-5",children:[c.jsx("label",{className:"block text-[12px] font-bold text-slate-500 uppercase mb-2",children:"Cliente Vinculado"}),c.jsxs("select",{value:o,onChange:v=>a(v.target.value),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]",children:[c.jsx("option",{value:"",children:"Consumidor Final (Balcão)"}),l.map(v=>c.jsx("option",{value:v.id,children:v.nome},v.id))]})]}),c.jsx("div",{className:"flex-1 overflow-y-auto space-y-3 mb-6 p-3 bg-slate-50 rounded-2xl border",children:r.map(v=>c.jsxs("div",{className:"flex justify-between items-center p-4 bg-white border rounded-xl",children:[c.jsxs("div",{className:"flex-1",children:[c.jsxs("div",{className:"font-bold text-[14px]",children:[v.marca," ",v.modelo]}),c.jsxs("div",{className:"text-[12px] text-slate-500 mt-1",children:[c.jsxs("span",{className:"font-bold px-1.5 py-0.5 bg-slate-100 rounded mr-1",children:[v.qtd,"x"]})," ",re(v.venda)]})]}),c.jsx("div",{className:"font-extrabold text-[15px] mr-3",children:re(Number(v.venda)*v.qtd)}),c.jsx("button",{onClick:()=>i(v.id),className:"text-slate-300 hover:text-rose-500",children:c.jsx(Ey,{size:18})})]},v.id))}),c.jsxs("div",{className:"pt-5 border-t",children:[c.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-400 uppercase mb-2",children:"Desc (R$)"}),c.jsx("input",{type:"number",min:"0",value:u,onChange:v=>d(Number(v.target.value)),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-400 uppercase mb-2",children:"Pagamento"}),c.jsxs("select",{value:h,onChange:v=>f(v.target.value),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]",children:[c.jsx("option",{children:"Pix"}),c.jsx("option",{children:"Crédito"}),c.jsx("option",{children:"Débito"}),c.jsx("option",{children:"Dinheiro"})]})]})]}),c.jsxs("div",{className:"flex justify-between items-end mb-6",children:[c.jsx("span",{className:"font-bold text-slate-500 text-[15px]",children:"Total Geral"}),c.jsx("span",{className:"text-4xl font-black text-[#4A3AFF]",children:re(Math.max(0,r.reduce((v,x)=>v+Number(x.venda)*x.qtd,0)-(Number(u)||0)))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("button",{onClick:()=>_(!0),className:"w-full border-2 border-slate-200 py-3.5 rounded-xl font-bold flex items-center justify-center",children:[c.jsx(ju,{size:18,className:"mr-2"})," Orçamento"]}),c.jsxs("button",{onClick:()=>_(!1),className:"w-full bg-[#4A3AFF] text-white py-3.5 rounded-xl font-bold flex items-center justify-center",children:[c.jsx(AI,{size:18,className:"mr-2"})," Vender"]})]})]})]})]}):c.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center",children:[c.jsx("div",{className:"w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-6",children:c.jsx(Da,{className:"w-10 h-10"})}),c.jsx("h2",{className:"text-2xl font-bold mb-3",children:"O Caixa está Fechado"}),c.jsx("p",{className:"text-slate-500 mb-8 max-w-md",children:"Para garantir a segurança financeira, é obrigatório abrir o caixa do dia antes de registrar qualquer venda."}),c.jsx("button",{onClick:()=>p("caixa"),className:"bg-[#4A3AFF] text-white px-8 py-3.5 rounded-xl font-bold",children:"Ir para o Controle de Caixa"})]})]})}function eb(){const{caixaAberto:t,totalVendasCaixa:e,caixas:n,abrirCaixa:r,fecharCaixa:s,registrarLancamentoCaixa:i}=It(),[o,a]=P.useState("0"),[l,u]=P.useState(!1),[d,h]=P.useState({tipo:"saida",descricao:"",valor:""}),f=async p=>{u(!0);try{await p()}catch(y){alert(y.message||"Não foi possível atualizar o caixa.")}finally{u(!1)}},_=((t==null?void 0:t.lancamentos)||[]).reduce((p,y)=>p+(y.tipo==="entrada"?Number(y.valor):-Number(y.valor)),0);return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Caixa Diário"}),c.jsx("p",{className:"text-slate-500",children:"Abertura e fechamento de caixa para o PDV."})]}),t?c.jsx("button",{disabled:l,onClick:()=>f(s),className:"bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60",children:"Fechar Caixa"}):c.jsx("button",{disabled:l,onClick:()=>{const p=Number(o.replace(",","."));f(()=>r(p))},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60",children:"Abrir Caixa"})]}),t?c.jsxs("div",{className:"bg-white rounded-3xl p-8 mb-10 flex justify-between items-center shadow-sm border border-slate-100",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-emerald-500 font-bold uppercase text-xs mb-2",children:"Caixa Aberto"}),c.jsxs("p",{className:"text-slate-500",children:["Operador: ",c.jsx("span",{className:"font-bold text-slate-900",children:t.operador})]})]}),c.jsxs("div",{className:"flex gap-10",children:[c.jsxs("div",{className:"text-right",children:[c.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Fundo Inicial"}),c.jsx("p",{className:"text-2xl font-bold",children:re(t.valorInicial)})]}),c.jsxs("div",{className:"text-right",children:[c.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Vendas no Caixa"}),c.jsxs("p",{className:"text-2xl font-bold text-emerald-500",children:["+ ",re(e)]})]}),c.jsxs("div",{className:"text-right pl-10 border-l border-slate-100",children:[c.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Saldo Atual"}),c.jsx("p",{className:"text-4xl font-extrabold text-[#4A3AFF]",children:re((t.valorInicial||0)+e+_)})]})]}),c.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-100",children:[c.jsx("h3",{className:"font-bold mb-3",children:"Lançamento de caixa"}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-3",children:[c.jsxs("select",{value:d.tipo,onChange:p=>h({...d,tipo:p.target.value}),className:"rounded-xl border border-slate-200 px-3 py-3",children:[c.jsx("option",{value:"entrada",children:"Entrada"}),c.jsx("option",{value:"saida",children:"Saída"}),c.jsx("option",{value:"sangria",children:"Sangria"})]}),c.jsx("input",{placeholder:"Descrição",value:d.descricao,onChange:p=>h({...d,descricao:p.target.value}),className:"rounded-xl border border-slate-200 px-3 py-3 sm:col-span-2"}),c.jsx("input",{type:"number",min:"0.01",step:"0.01",placeholder:"Valor",value:d.valor,onChange:p=>h({...d,valor:p.target.value}),className:"rounded-xl border border-slate-200 px-3 py-3"})]}),c.jsxs("button",{onClick:()=>f(async()=>{await i({tipo:d.tipo,descricao:d.descricao,valor:Number(d.valor)}),h({tipo:"saida",descricao:"",valor:""})}),className:"mt-3 text-sm font-bold text-[#4A3AFF] flex items-center gap-2",children:[c.jsx(jI,{size:17})," Registrar lançamento"]})]})]}):c.jsxs("div",{className:"border-2 border-dashed border-slate-200 rounded-3xl p-16 mb-10 text-center flex flex-col items-center",children:[c.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 mb-5 shadow-sm border",children:c.jsx(Da,{size:24})}),c.jsx("h3",{className:"text-2xl font-bold text-slate-800 mb-3",children:"Caixa Fechado"}),c.jsx("p",{className:"text-slate-500 mb-8 max-w-md",children:"Nenhum caixa está aberto no momento. Abra o caixa para permitir novas vendas."}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3 mb-6",children:[c.jsx("label",{htmlFor:"valor-inicial",className:"text-sm font-bold text-slate-600",children:"Fundo inicial"}),c.jsx("input",{id:"valor-inicial",type:"number",min:"0",step:"0.01",value:o,onChange:p=>a(p.target.value),className:"w-36 bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-[#4A3AFF]"}),c.jsx("button",{disabled:l,onClick:()=>f(()=>r(Number(o.replace(",",".")))),className:"bg-[#4A3AFF] text-white px-5 py-2.5 rounded-xl font-bold disabled:opacity-60",children:l?"Abrindo...":"Abrir Caixa"})]})]}),c.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-auto p-5 flex-1",children:[c.jsx("h3",{className:"font-bold mb-4",children:"Histórico de caixas"}),c.jsxs("table",{className:"w-full text-left min-w-[650px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"text-xs text-slate-400 uppercase border-b",children:[c.jsx("th",{className:"py-3",children:"Abertura"}),c.jsx("th",{children:"Operador"}),c.jsx("th",{children:"Fundo"}),c.jsx("th",{children:"Vendas"}),c.jsx("th",{children:"Saldo final"})]})}),c.jsx("tbody",{children:n.filter(p=>p.status==="fechado").sort((p,y)=>new Date(y.dataAbertura).getTime()-new Date(p.dataAbertura).getTime()).map(p=>c.jsxs("tr",{className:"border-b border-slate-50",children:[c.jsx("td",{className:"py-3",children:new Date(p.dataAbertura).toLocaleDateString("pt-BR")}),c.jsx("td",{children:p.operador}),c.jsx("td",{children:re(p.valorInicial)}),c.jsx("td",{className:"text-emerald-500",children:re(p.totalVendas||0)}),c.jsx("td",{className:"font-bold",children:re(p.valorFinal||0)})]},p.id))})]})]})]})}function tb({data:t,onSave:e,onClose:n,fornecedores:r=[]}){const[s,i]=P.useState(t||{codigo:"",categoria:"Armações",marca:"",modelo:"",cor:"",tamanho:"",material:"",fornecedorId:"",tratamento:"",custo:"",venda:"",qtd:"",min:""}),o=(u,d)=>i(h=>({...h,[u]:d})),a="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 text-[15px] outline-none focus:border-[#4A3AFF] transition-all text-slate-900 dark:text-white",l="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2 block";return c.jsxs("form",{onSubmit:u=>{u.preventDefault(),e(s)},children:[c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:l,children:"SKU (Cód)"}),c.jsx("input",{required:!0,value:s.codigo,onChange:u=>o("codigo",u.target.value),className:a})]}),c.jsxs("div",{className:"sm:col-span-2",children:[c.jsx("label",{className:l,children:"Categoria"}),c.jsxs("select",{value:s.categoria,onChange:u=>o("categoria",u.target.value),className:a,children:[c.jsx("option",{children:"Armações"}),c.jsx("option",{children:"Lentes de Contato"}),c.jsx("option",{children:"Lentes Oftálmicas"}),c.jsx("option",{children:"Acessórios/Insumos"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Marca"}),c.jsx("input",{required:!0,value:s.marca,onChange:u=>o("marca",u.target.value),className:a})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Modelo"}),c.jsx("input",{value:s.modelo,onChange:u=>o("modelo",u.target.value),className:a})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Cor"}),c.jsx("input",{value:s.cor,onChange:u=>o("cor",u.target.value),className:a})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Tamanho"}),c.jsx("input",{value:s.tamanho,onChange:u=>o("tamanho",u.target.value),className:a,placeholder:"Ex: 54-18"})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Material"}),c.jsx("input",{value:s.material,onChange:u=>o("material",u.target.value),className:a})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Fornecedor"}),c.jsxs("select",{value:s.fornecedorId,onChange:u=>o("fornecedorId",u.target.value),className:a,children:[c.jsx("option",{value:"",children:"Sem fornecedor"}),r.map(u=>c.jsx("option",{value:u.id,children:u.nomeFantasia||u.razaoSocial||u.nome},u.id))]})]}),c.jsxs("div",{className:"sm:col-span-3",children:[c.jsx("label",{className:l,children:"Tratamento / Especificação"}),c.jsx("input",{value:s.tratamento,onChange:u=>o("tratamento",u.target.value),className:a,placeholder:"Antirreflexo, Transitions, multifocal..."})]}),c.jsx("div",{className:"sm:col-span-3 border-t border-slate-100 dark:border-slate-700 my-2"}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Custo (R$)"}),c.jsx("input",{type:"number",step:"0.01",required:!0,value:s.custo,onChange:u=>o("custo",u.target.value),className:a})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-[12px] font-bold text-emerald-500 uppercase tracking-wider mb-2 block",children:"Venda (R$)"}),c.jsx("input",{type:"number",step:"0.01",required:!0,value:s.venda,onChange:u=>o("venda",u.target.value),className:`${a} border-emerald-200 dark:border-emerald-800 focus:border-emerald-500 font-extrabold`})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Estoque Atual"}),c.jsx("input",{type:"number",required:!0,value:s.qtd,onChange:u=>o("qtd",u.target.value),className:a})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-[12px] font-bold text-rose-500 uppercase tracking-wider mb-2 block",children:"Estoque Mín."}),c.jsx("input",{type:"number",required:!0,value:s.min,onChange:u=>o("min",u.target.value),className:`${a} border-rose-200 dark:border-rose-800 focus:border-rose-500`})]})]}),c.jsxs("div",{className:"pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-3 sm:gap-4",children:[c.jsx("button",{type:"button",onClick:n,className:"px-6 py-3.5 rounded-xl font-bold bg-slate-100 text-slate-600",children:"Cancelar"}),c.jsx("button",{type:"submit",className:"px-8 py-3.5 rounded-xl font-bold bg-[#4A3AFF] text-white",children:"Salvar Produto"})]})]})}function nb(){const{produtos:t,fornecedores:e,salvarProduto:n,excluirProduto:r}=It(),[s,i]=P.useState(""),[o,a]=P.useState(null),[l,u]=P.useState(!1),d=async h=>{await n(h,o==null?void 0:o.id),u(!1),a(null)};return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Estoque"}),c.jsx("p",{className:"text-slate-500",children:"Gerencie produtos e níveis de inventário."})]}),c.jsxs("button",{onClick:()=>{a(null),u(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[c.jsx(eo,{size:20,className:"mr-2"})," Adicionar Produto"]})]}),c.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:[c.jsx("div",{className:"p-4 bg-white border-b border-slate-100",children:c.jsxs("div",{className:"relative max-w-md",children:[c.jsx(xy,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:18}),c.jsx("input",{type:"text",placeholder:"Buscar código, marca...",value:s,onChange:h=>i(h.target.value),className:"w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-[#4A3AFF]"})]})}),c.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar",children:c.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6 w-24",children:"Cód."}),c.jsx("th",{className:"py-4 px-6",children:"Produto"}),c.jsx("th",{className:"py-4 px-6",children:"Categoria"}),c.jsx("th",{className:"py-4 px-6 text-right",children:"Venda"}),c.jsx("th",{className:"py-4 px-6 text-center w-28",children:"Qtd"}),c.jsx("th",{className:"py-4 px-6 text-center",children:"Ações"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:t.filter(h=>{var f,_;return((f=h.codigo)==null?void 0:f.toLowerCase().includes(s.toLowerCase()))||((_=h.marca)==null?void 0:_.toLowerCase().includes(s.toLowerCase()))}).map(h=>c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[c.jsx("td",{className:"py-4 px-6 font-mono text-[12px] font-bold text-slate-400",children:h.codigo}),c.jsx("td",{className:"py-4 px-6",children:c.jsxs("div",{className:"font-bold text-[14px]",children:[h.marca," ",c.jsx("span",{className:"font-normal text-slate-500",children:h.modelo})]})}),c.jsx("td",{className:"py-4 px-6 text-[13px]",children:c.jsx("span",{className:"bg-slate-100 px-3 py-1.5 rounded-lg font-medium",children:h.categoria})}),c.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-emerald-600",children:re(h.venda)}),c.jsx("td",{className:"py-4 px-6 text-center",children:c.jsx("span",{className:`inline-flex items-center justify-center w-10 h-10 rounded-xl text-[14px] font-bold ${Number(h.qtd)<Number(h.min)?"bg-rose-50 text-rose-600":"bg-slate-50 text-slate-700"}`,children:h.qtd})}),c.jsxs("td",{className:"py-4 px-6 text-center",children:[c.jsx("button",{onClick:()=>{a(h),u(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:c.jsx(_l,{size:16})}),c.jsx("button",{onClick:()=>r(h.id).catch(f=>alert(f.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:c.jsx(yl,{size:16})})]})]},h.id))})]})})]}),c.jsx(wl,{open:l,onClose:()=>{u(!1),a(null)},title:o?"Editar Produto":"Novo Produto",width:"max-w-3xl",children:c.jsx(tb,{data:o,fornecedores:e,onSave:d,onClose:()=>{u(!1),a(null)}})})]})}function rb({data:t,onSave:e,onClose:n}){const r=()=>({esf:"",cil:"",eixo:"",dnp:"",add:"",altura:""}),s=()=>({medico:"",crm:"",dataReceita:"",obs:"",od:r(),oe:r(),longe:{od:r(),oe:r()},perto:{od:r(),oe:r()}}),i=()=>({nome:"",cpf:"",tel:"",nasc:"",email:"",endereco:{cep:"",logradouro:"",numero:"",complemento:"",bairro:"",cidade:"",estado:""},prescricao:s()}),[o,a]=P.useState(i());P.useEffect(()=>{var _,p,y,C;if(t){const m=t.prescricao||s();a({...i(),...t,endereco:{...i().endereco,...t.endereco||{}},prescricao:{...s(),...m,od:{...r(),...m.od||{}},oe:{...r(),...m.oe||{}},longe:{od:{...r(),...((_=m.longe)==null?void 0:_.od)||{}},oe:{...r(),...((p=m.longe)==null?void 0:p.oe)||{}}},perto:{od:{...r(),...((y=m.perto)==null?void 0:y.od)||{}},oe:{...r(),...((C=m.perto)==null?void 0:C.oe)||{}}}}})}else a(i())},[t]);const l=(_,p)=>a(y=>({...y,[_]:p})),u=(_,p,y)=>a(C=>({...C,[_]:{...C[_],[p]:y}})),d=(_,p,y,C)=>a(m=>({...m,prescricao:{...m.prescricao,[_]:{...m.prescricao[_],[p]:{...m.prescricao[_][p],[y]:C}}}})),h="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-[14px] outline-none focus:border-[#4A3AFF]",f="text-[12px] font-bold text-slate-500 uppercase mb-2 block";return c.jsxs("form",{onSubmit:_=>{_.preventDefault(),e(o)},className:"flex flex-col",children:[c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsxs("h3",{className:"text-[13px] font-bold text-indigo-500 uppercase mb-4 flex items-center gap-2",children:[c.jsx(xl,{size:16})," Dados Pessoais"]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:f,children:"Nome Completo"}),c.jsx("input",{required:!0,value:o.nome,onChange:_=>l("nome",_.target.value),className:h})]}),c.jsxs("div",{children:[c.jsx("label",{className:f,children:"WhatsApp"}),c.jsx("input",{required:!0,value:o.tel,onChange:_=>l("tel",_.target.value),className:h,placeholder:"(00) 00000-0000"})]}),c.jsxs("div",{children:[c.jsx("label",{className:f,children:"CPF / CNPJ"}),c.jsx("input",{value:o.cpf,onChange:_=>l("cpf",_.target.value),className:h})]}),c.jsxs("div",{children:[c.jsx("label",{className:f,children:"Nascimento"}),c.jsx("input",{type:"date",value:o.nasc,onChange:_=>l("nasc",_.target.value),className:h})]}),c.jsxs("div",{className:"md:col-span-2",children:[c.jsx("label",{className:f,children:"E-mail"}),c.jsx("input",{type:"email",value:o.email,onChange:_=>l("email",_.target.value),className:h})]})]})]}),c.jsxs("div",{className:"border-t pt-6",children:[c.jsxs("h3",{className:"text-[13px] font-bold text-slate-500 uppercase mb-4 flex items-center gap-2",children:[c.jsx(zI,{size:16})," Endereço"]}),c.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[["cep","CEP"],["logradouro","Logradouro"],["numero","Número"],["complemento","Complemento"],["bairro","Bairro"],["cidade","Cidade"],["estado","UF"]].map(([_,p])=>c.jsxs("div",{className:_==="logradouro"?"col-span-2":"",children:[c.jsx("label",{className:f,children:p}),c.jsx("input",{value:o.endereco[_]||"",onChange:y=>u("endereco",_,y.target.value),className:h})]},_))})]}),c.jsxs("div",{className:"border-t pt-6",children:[c.jsxs("h3",{className:"text-[13px] font-bold text-emerald-500 uppercase mb-4 flex items-center gap-2",children:[c.jsx(MI,{size:16})," Receituário Ótico"]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 mb-5",children:[c.jsxs("div",{children:[c.jsx("label",{className:f,children:"Médico Oftalmologista"}),c.jsx("input",{value:o.prescricao.medico,onChange:_=>a(p=>({...p,prescricao:{...p.prescricao,medico:_.target.value}})),className:h})]}),c.jsxs("div",{children:[c.jsx("label",{className:f,children:"CRM"}),c.jsx("input",{value:o.prescricao.crm,onChange:_=>a(p=>({...p,prescricao:{...p.prescricao,crm:_.target.value}})),className:h})]}),c.jsxs("div",{children:[c.jsx("label",{className:f,children:"Data da Receita"}),c.jsx("input",{type:"date",value:o.prescricao.dataReceita,onChange:_=>a(p=>({...p,prescricao:{...p.prescricao,dataReceita:_.target.value}})),className:h})]}),c.jsxs("div",{children:[c.jsx("label",{className:f,children:"Observações"}),c.jsx("input",{value:o.prescricao.obs,onChange:_=>a(p=>({...p,prescricao:{...p.prescricao,obs:_.target.value}})),className:h})]})]}),["longe","perto"].map(_=>c.jsxs("div",{className:"mb-5 overflow-x-auto",children:[c.jsx("h4",{className:"font-bold text-slate-600 mb-2",children:_==="longe"?"Visão de Longe":"Visão de Perto"}),c.jsxs("div",{className:"min-w-[650px] grid grid-cols-7 gap-2 text-center",children:[c.jsx("div",{className:"text-left text-xs font-bold text-slate-400",children:"Olho"}),["Esférico","Cilíndrico","Eixo","DNP","Adição","Altura"].map(p=>c.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase",children:p},p)),["od","oe"].flatMap(p=>[c.jsx("div",{className:"text-left font-bold text-[#4A3AFF] uppercase",children:p},`${_}-${p}-label`),...["esf","cil","eixo","dnp","add","altura"].map(y=>c.jsx("input",{value:o.prescricao[_][p][y],onChange:C=>d(_,p,y,C.target.value),className:"w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 rounded-xl px-2 py-2 text-center text-sm",placeholder:"-"},`${_}-${p}-${y}`))])]})]},_))]})]}),c.jsxs("div",{className:"mt-8 border-t flex justify-end gap-3 pt-4",children:[c.jsx("button",{type:"button",onClick:n,className:"px-6 py-3 rounded-xl font-bold bg-slate-100 text-slate-600",children:"Cancelar"}),c.jsx("button",{type:"submit",className:"px-8 py-3 rounded-xl font-bold bg-[#4A3AFF] text-white",children:"Salvar Ficha"})]})]})}function sb(){const{clientes:t,salvarCliente:e,excluirCliente:n,vendas:r,ordensServico:s}=It(),[i,o]=ai.useState(null),[a,l]=ai.useState(!1),u=async d=>{await e(d,i==null?void 0:i.id),l(!1),o(null)};return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Clientes & Receitas"}),c.jsx("p",{className:"text-slate-500",children:"Gestão de contatos e prontuários óticos."})]}),c.jsxs("button",{onClick:()=>{o(null),l(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center shadow-md",children:[c.jsx(eo,{size:20,className:"mr-2"})," Novo Cliente"]})]}),c.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:c.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar p-2",children:c.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase tracking-wider font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6",children:"Cliente / CPF"}),c.jsx("th",{className:"py-4 px-6",children:"Contato"}),c.jsx("th",{className:"py-4 px-6",children:"Médico Responsável"}),c.jsx("th",{className:"py-4 px-6 text-center w-24",children:"Ações"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:t.map(d=>{var h;return c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[c.jsxs("td",{className:"py-4 px-6",children:[c.jsx("div",{className:"font-bold text-[14px]",children:d.nome}),c.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:d.cpf||"Sem CPF"})]}),c.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[c.jsx("a",{href:`https://wa.me/${(d.tel||"").replace(/\D/g,"")}`,target:"_blank",rel:"noreferrer",className:"text-emerald-600 hover:underline",children:d.tel}),c.jsxs("div",{className:"text-[11px] text-slate-400 mt-1",children:[r.filter(f=>f.cliId===d.id).length," compra(s) · ",s.filter(f=>f.clienteId===d.id).length," OS"]})]}),c.jsx("td",{className:"py-4 px-6",children:c.jsx("div",{className:"text-[14px] font-medium text-slate-700",children:((h=d.prescricao)==null?void 0:h.medico)||"Não informado"})}),c.jsx("td",{className:"py-4 px-6 text-center",children:c.jsxs("div",{className:"flex justify-center gap-2",children:[c.jsx("button",{onClick:()=>{o(d),l(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:c.jsx(_l,{size:16})}),c.jsx("button",{onClick:()=>n(d.id).catch(f=>alert(f.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:c.jsx(yl,{size:16})})]})})]},d.id)})})]})})}),c.jsx(wl,{open:a,onClose:()=>{l(!1),o(null)},title:i?"Editar Cliente":"Novo Cliente",width:"max-w-4xl",children:c.jsx(rb,{data:i,onSave:u,onClose:()=>{l(!1),o(null)}})})]})}function ib(){const{orcamentos:t,clientes:e,setActiveTab:n,converterOrcamentoParaOs:r}=It();return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Orçamentos"}),c.jsx("p",{className:"text-slate-500",children:"Negociações salvas via PDV."})]}),c.jsxs("button",{onClick:()=>n("vendas"),className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[c.jsx(eo,{size:20,className:"mr-2"})," Novo via PDV"]})]}),c.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:c.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar p-2",children:c.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6",children:"Data / Cliente"}),c.jsx("th",{className:"py-4 px-6",children:"Itens"}),c.jsx("th",{className:"py-4 px-6 text-right",children:"Total"}),c.jsx("th",{className:"py-4 px-6 text-center w-24",children:"Ações"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:t.map(s=>{var i,o;return c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors group",children:[c.jsxs("td",{className:"py-4 px-6",children:[c.jsx("div",{className:"font-bold text-[14px]",children:((i=e.find(a=>a.id===s.cliId))==null?void 0:i.nome)||"Desconhecido"}),c.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:new Date(s.data).toLocaleDateString("pt-BR")})]}),c.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[((o=s.itens)==null?void 0:o.length)||0," produto(s)"]}),c.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-[#4A3AFF]",children:re(s.total)}),c.jsx("td",{className:"py-4 px-6 text-center",children:c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:()=>r(s).then(()=>n("ordens")).catch(a=>alert(a.message)),className:"px-3 py-2 rounded-xl text-xs font-bold text-[#4A3AFF] hover:bg-indigo-50",children:"Converter em OS"}),c.jsx("button",{className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:c.jsx(yl,{size:16})})]})})]},s.id)})})]})})})]})}function ob(){const{vendas:t,clientes:e,contas:n,caixas:r}=It(),s=n.filter(u=>u.tipo==="pagar"),i=n.filter(u=>u.tipo==="receber"),o=s.reduce((u,d)=>u+Number(d.valor||0),0),a=i.reduce((u,d)=>u+Number(d.valor||0),0),l=r.reduce((u,d)=>u+(d.lancamentos||[]).filter(h=>h.tipo!=="entrada").reduce((h,f)=>h+Number(f.valor||0),0),0);return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Financeiro (DRE)"}),c.jsx("p",{className:"text-slate-500",children:"Análise de lucratividade real e CMV."})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4",children:[c.jsx(Wt,{title:"Faturamento Bruto",value:re(t.reduce((u,d)=>u+(d.total||0),0)),icon:La}),c.jsx(Wt,{title:"CMV (Custo dos Produtos)",value:re(t.reduce((u,d)=>u+(d.custoBase||0),0)),icon:$I,color:"text-rose-500"}),c.jsx(Wt,{title:"Lucro Bruto",value:re(t.reduce((u,d)=>u+(d.total||0),0)-t.reduce((u,d)=>u+(d.custoBase||0),0)),icon:Au,bg:"bg-[#4A3AFF]/10",color:"text-[#4A3AFF]",border:"border-[#4A3AFF]/20"}),c.jsx(Wt,{title:"A Pagar",value:re(o),subtitle:`${s.length} lançamentos`,icon:Au,color:"text-rose-500"}),c.jsx(Wt,{title:"A Receber",value:re(a),subtitle:`${i.length} lançamentos`,icon:La,color:"text-emerald-500"})]}),c.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm p-5 mt-6",children:[c.jsx("h3",{className:"font-bold mb-4",children:"Fluxo de caixa consolidado"}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Vendas realizadas"}),c.jsx("p",{className:"text-xl font-black text-emerald-500",children:re(t.reduce((u,d)=>u+Number(d.total||0),0))})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Saídas e sangrias"}),c.jsx("p",{className:"text-xl font-black text-rose-500",children:re(l)})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Saldo operacional"}),c.jsx("p",{className:"text-xl font-black text-[#4A3AFF]",children:re(t.reduce((u,d)=>u+Number(d.total||0),0)-l)})]})]})]}),c.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2 mt-8 flex-1 flex flex-col min-h-[300px]",children:[c.jsx("div",{className:"p-5 flex-shrink-0",children:c.jsx("h3",{className:"font-bold text-[16px]",children:"Últimas Vendas"})}),c.jsx("div",{className:"overflow-x-auto overflow-y-auto flex-1 custom-scrollbar",children:c.jsxs("table",{className:"w-full text-left min-w-[800px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6",children:"Data"}),c.jsx("th",{className:"py-4 px-6",children:"Cliente"}),c.jsx("th",{className:"py-4 px-6",children:"Pagamento"}),c.jsx("th",{className:"py-4 px-6 text-right",children:"Total"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:t.slice().sort((u,d)=>new Date(d.data).getTime()-new Date(u.data).getTime()).slice(0,10).map(u=>{var d;return c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[c.jsx("td",{className:"py-4 px-6 text-[14px] text-slate-700",children:new Date(u.data).toLocaleDateString("pt-BR")}),c.jsx("td",{className:"py-4 px-6 text-[14px] font-bold",children:((d=e.find(h=>h.id===u.cliId))==null?void 0:d.nome)||"Balcão"}),c.jsx("td",{className:"py-4 px-6 text-[14px]",children:c.jsx("span",{className:"bg-slate-100 px-3 py-1.5 rounded-lg font-medium",children:u.pag})}),c.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-[#4A3AFF]",children:re(u.total)})]},u.id)})})]})})]})]})}function ab({config:t,initialData:e,onSave:n,onClose:r}){const[s,i]=P.useState(e||t.defaultData),o=(u,d)=>i(h=>({...h,[u]:d})),a="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 text-[15px] outline-none focus:border-[#4A3AFF] transition-all text-slate-900 dark:text-white",l="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2 block";return c.jsxs("form",{onSubmit:u=>{u.preventDefault(),n(s)},children:[c.jsx("div",{className:"space-y-4 mb-6",children:t.fields.map(u=>c.jsxs("div",{children:[c.jsxs("label",{className:l,children:[u.label," ",u.required&&"*"]}),u.type==="select"?c.jsxs("select",{required:u.required,value:s[u.name]||"",onChange:d=>o(u.name,d.target.value),className:a,children:[c.jsx("option",{value:"",children:"Selecione..."}),u.options.map(d=>c.jsx("option",{value:d.val,children:d.label},d.val))]}):c.jsx("input",{type:u.type,step:u.step,required:u.required,value:s[u.name]||"",onChange:d=>o(u.name,d.target.value),className:a})]},u.name))}),c.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700",children:[c.jsx("button",{type:"button",onClick:r,className:"px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors",children:"Cancelar"}),c.jsx("button",{type:"submit",className:"px-6 py-3 rounded-xl bg-[#4A3AFF] text-white font-bold hover:bg-[#3d2ee6] shadow-md transition-all",children:"Salvar"})]})]})}function lb({activeTab:t}){const{fornecedores:e,contas:n,categorias:r,usuarios:s,salvarCadastro:i,excluirCadastro:o}=It(),[a,l]=ai.useState(null),[u,d]=ai.useState(!1),f=(()=>{switch(t){case"fornecedores":return e;case"contas":return n;case"categorias":return r;case"usuarios":return s;default:return[]}})(),p={fornecedores:{defaultData:{razaoSocial:"",nomeFantasia:"",cnpj:"",inscricaoEstadual:"",telefone:"",email:"",contatoComercial:"",categoriaFornecimento:"Armações",prazoEntrega:"",condicoesComerciais:"",parceriaAtiva:!0,enderecoCep:"",enderecoLogradouro:"",enderecoNumero:"",enderecoComplemento:"",enderecoBairro:"",enderecoCidade:"",enderecoEstado:""},fields:[{name:"razaoSocial",label:"Razão Social",type:"text",required:!0},{name:"nomeFantasia",label:"Nome Fantasia",type:"text"},{name:"cnpj",label:"CNPJ",type:"text"},{name:"inscricaoEstadual",label:"Inscrição Estadual",type:"text"},{name:"telefone",label:"Telefone",type:"text"},{name:"email",label:"E-mail",type:"email"},{name:"contatoComercial",label:"Contato Comercial",type:"text"},{name:"categoriaFornecimento",label:"Categoria de Fornecimento",type:"select",options:[{val:"Armações",label:"Armações"},{val:"Lentes de Contato",label:"Lentes de Contato"},{val:"Lentes Oftálmicas",label:"Lentes Oftálmicas"},{val:"Insumos/Laboratório",label:"Insumos/Laboratório"}]},{name:"prazoEntrega",label:"Prazo padrão (dias)",type:"number"},{name:"condicoesComerciais",label:"Condições Comerciais",type:"text"},{name:"enderecoCep",label:"CEP",type:"text"},{name:"enderecoLogradouro",label:"Logradouro",type:"text"},{name:"enderecoNumero",label:"Número",type:"text"},{name:"enderecoComplemento",label:"Complemento",type:"text"},{name:"enderecoBairro",label:"Bairro",type:"text"},{name:"enderecoCidade",label:"Cidade",type:"text"},{name:"enderecoEstado",label:"UF",type:"text"}]},contas:{defaultData:{descricao:"",tipo:"pagar",valor:"",vencimento:"",fornecedorId:"",formaPagamento:"PIX",status:"pendente"},fields:[{name:"descricao",label:"Descrição",type:"text",required:!0},{name:"tipo",label:"Tipo",type:"select",required:!0,options:[{val:"pagar",label:"A pagar"},{val:"receber",label:"A receber"}]},{name:"valor",label:"Valor",type:"number",step:"0.01",required:!0},{name:"vencimento",label:"Vencimento",type:"date"},{name:"fornecedorId",label:"Fornecedor vinculado",type:"text"},{name:"formaPagamento",label:"Forma de pagamento",type:"select",options:[{val:"PIX",label:"PIX"},{val:"cartao",label:"Cartão"},{val:"crediario",label:"Crediário próprio"},{val:"dinheiro",label:"Dinheiro"}]},{name:"status",label:"Status",type:"select",options:[{val:"pendente",label:"Pendente"},{val:"pago",label:"Pago/Recebido"}]}]},categorias:{defaultData:{nome:""},fields:[{name:"nome",label:"Nome",type:"text",required:!0}]},usuarios:{defaultData:{nome:"",email:"",perfil:"vendedor"},fields:[{name:"nome",label:"Nome",type:"text",required:!0},{name:"email",label:"E-mail",type:"email",required:!0},{name:"perfil",label:"Perfil",type:"select",required:!0,options:[{val:"vendedor",label:"Vendedor"},{val:"admin",label:"Administrador"}]}]}}[t],y=t,C=async m=>{await i(y,m,a==null?void 0:a.id),d(!1),l(null)};return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2 capitalize",children:t}),c.jsx("p",{className:"text-slate-500",children:"Gestão completa liberada."})]}),c.jsxs("button",{onClick:()=>{l(null),d(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[c.jsx(eo,{size:20,className:"mr-2"})," Adicionar"]})]}),c.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2 flex-1 flex flex-col min-h-[400px]",children:c.jsx("div",{className:"overflow-x-auto overflow-y-auto flex-1 custom-scrollbar",children:c.jsxs("table",{className:"w-full text-left min-w-[600px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6",children:"Registro Principal"}),c.jsx("th",{className:"py-4 px-6",children:"Detalhes"}),c.jsx("th",{className:"py-4 px-6 text-center",children:"Ações"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:f==null?void 0:f.map(m=>c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[c.jsxs("td",{className:"py-4 px-6",children:[c.jsx("div",{className:"font-bold text-[14px]",children:m.nome||m.razaoSocial||m.descricao}),c.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:m.cnpj||m.email||m.nomeFantasia||(m.vencimento?`Venc: ${new Date(m.vencimento).toLocaleDateString("pt-BR")}`:"")})]}),c.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[m.valor?c.jsx("span",{className:`font-extrabold ${m.tipo==="pagar"?"text-rose-500":"text-emerald-500"}`,children:re(m.valor)}):m.contato||m.telefone||m.categoriaFornecimento||m.perfil||m.descricao||"-",t==="fornecedores"&&c.jsxs("span",{className:"block text-[11px] text-slate-400 mt-1",children:[n.filter(g=>g.fornecedorId===m.id).length," compra(s) vinculada(s)"]})]}),c.jsx("td",{className:"py-4 px-6 text-center",children:c.jsxs("div",{className:"flex justify-center gap-2",children:[c.jsx("button",{onClick:()=>{l(m),d(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:c.jsx(_l,{size:16})}),c.jsx("button",{onClick:()=>o(y,m.id).catch(g=>alert(g.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:c.jsx(yl,{size:16})})]})})]},m.id))})]})})}),c.jsx(wl,{open:u,onClose:()=>{d(!1),l(null)},title:a?`Editar ${t}`:`Novo ${t}`,children:c.jsx(ab,{config:p,initialData:a,onSave:C,onClose:()=>{d(!1),l(null)}})})]})}const cb={aguardando_montagem:"Aguardando Montagem",em_laboratorio:"Em Laboratório",pronto_retirada:"Pronto para Retirada",entregue:"Entregue",cancelada:"Cancelada"};function ub(){const{ordensServico:t,clientes:e,produtos:n,salvarOrdemServico:r}=It(),[s,i]=P.useState(null),[o,a]=P.useState(!1),[l,u]=P.useState(null),d=p=>{i(p||null),u(p?{...p}:{clienteId:"",status:"aguardando_montagem",previsaoEntrega:"",observacoes:"",receitaId:"",itens:[{produtoId:"",descricao:"",qtd:1,valor:0,tratamento:""}]}),a(!0)},h=(p,y,C)=>u(m=>({...m,itens:m.itens.map((g,v)=>v===p?{...g,[y]:C}:g)})),f=(p,y)=>{const C=n.find(m=>m.id===y);h(p,"produtoId",y),C&&u(m=>({...m,itens:m.itens.map((g,v)=>v===p?{...g,produtoId:y,descricao:`${C.marca} ${C.modelo}`.trim(),valor:Number(C.venda)||0}:g)}))},_=async p=>{p.preventDefault(),await r({...l,criadoEm:(s==null?void 0:s.criadoEm)||new Date().toISOString(),atualizadoEm:new Date().toISOString()},s==null?void 0:s.id),a(!1)};return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center gap-4",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Ordens de Serviço"}),c.jsx("p",{className:"text-slate-500",children:"Acompanhe montagem, laboratório e retirada."})]}),c.jsxs("button",{onClick:()=>d(),className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[c.jsx(eo,{size:20,className:"mr-2"})," Nova OS"]})]}),c.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm flex-1 overflow-auto p-2",children:c.jsxs("table",{className:"w-full text-left min-w-[800px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold",children:[c.jsx("th",{className:"py-4 px-6",children:"Cliente"}),c.jsx("th",{className:"py-4 px-6",children:"Itens"}),c.jsx("th",{className:"py-4 px-6",children:"Previsão"}),c.jsx("th",{className:"py-4 px-6",children:"Status"}),c.jsx("th",{className:"py-4 px-6 text-right",children:"Total"}),c.jsx("th",{className:"py-4 px-6",children:"Ações"})]})}),c.jsxs("tbody",{className:"divide-y divide-slate-50",children:[t.map(p=>{var y;return c.jsxs("tr",{className:"hover:bg-slate-50 dark:hover:bg-slate-700/30",children:[c.jsx("td",{className:"py-4 px-6 font-bold",children:((y=e.find(C=>C.id===p.clienteId))==null?void 0:y.nome)||"Cliente não encontrado"}),c.jsxs("td",{className:"py-4 px-6",children:[p.itens.length," item(ns)"]}),c.jsx("td",{className:"py-4 px-6",children:p.previsaoEntrega?new Date(p.previsaoEntrega).toLocaleDateString("pt-BR"):"-"}),c.jsx("td",{className:"py-4 px-6",children:c.jsxs("select",{value:p.status,onChange:C=>r({...p,status:C.target.value,atualizadoEm:new Date().toISOString()},p.id),className:"bg-slate-100 rounded-lg px-2 py-1 text-xs font-bold",children:[c.jsx("option",{value:"aguardando_montagem",children:"Aguardando Montagem"}),c.jsx("option",{value:"em_laboratorio",children:"Em Laboratório"}),c.jsx("option",{value:"pronto_retirada",children:"Pronto para Retirada"}),c.jsx("option",{value:"entregue",children:"Entregue"}),c.jsx("option",{value:"cancelada",children:"Cancelada"})]})}),c.jsx("td",{className:"py-4 px-6 text-right font-bold",children:re(p.itens.reduce((C,m)=>C+Number(m.valor||0)*Number(m.qtd||0),0))}),c.jsx("td",{className:"py-4 px-6",children:c.jsx("button",{onClick:()=>d(p),className:"p-2 text-slate-400 hover:text-[#4A3AFF]",children:c.jsx(_l,{size:16})})})]},p.id)}),t.length===0&&c.jsx("tr",{children:c.jsxs("td",{colSpan:6,className:"text-center py-12 text-slate-400",children:[c.jsx(OI,{className:"mx-auto mb-3"}),"Nenhuma ordem de serviço cadastrada."]})})]})]})}),c.jsx(wl,{open:o,onClose:()=>a(!1),title:s?"Editar Ordem de Serviço":"Nova Ordem de Serviço",width:"max-w-4xl",children:l&&c.jsxs("form",{onSubmit:_,className:"space-y-5",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase",children:["Cliente",c.jsxs("select",{required:!0,value:l.clienteId,onChange:p=>u({...l,clienteId:p.target.value}),className:"mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3",children:[c.jsx("option",{value:"",children:"Selecione"}),e.map(p=>c.jsx("option",{value:p.id,children:p.nome},p.id))]})]}),c.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase",children:["Status",c.jsx("select",{value:l.status,onChange:p=>u({...l,status:p.target.value}),className:"mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3",children:Object.entries(cb).map(([p,y])=>c.jsx("option",{value:p,children:y},p))})]}),c.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase",children:["Previsão de entrega",c.jsx("input",{type:"date",value:l.previsaoEntrega,onChange:p=>u({...l,previsaoEntrega:p.target.value}),className:"mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"})]})]}),c.jsxs("div",{className:"border-t pt-4",children:[c.jsxs("div",{className:"flex justify-between items-center mb-3",children:[c.jsx("h3",{className:"font-bold",children:"Armação, lentes e tratamentos"}),c.jsx("button",{type:"button",onClick:()=>u({...l,itens:[...l.itens,{produtoId:"",descricao:"",qtd:1,valor:0,tratamento:""}]}),className:"text-sm font-bold text-[#4A3AFF]",children:"+ Adicionar item"})]}),l.itens.map((p,y)=>c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-2 mb-3",children:[c.jsxs("select",{value:p.produtoId,onChange:C=>f(y,C.target.value),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3",children:[c.jsx("option",{value:"",children:"Produto do estoque"}),n.map(C=>c.jsxs("option",{value:C.id,children:[C.marca," ",C.modelo," (",C.categoria,")"]},C.id))]}),c.jsx("input",{placeholder:"Descrição",value:p.descricao,onChange:C=>h(y,"descricao",C.target.value),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"}),c.jsx("input",{placeholder:"Tratamento",value:p.tratamento,onChange:C=>h(y,"tratamento",C.target.value),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"}),c.jsx("input",{type:"number",min:"1",value:p.qtd,onChange:C=>h(y,"qtd",Number(C.target.value)),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"}),c.jsx("input",{type:"number",step:"0.01",value:p.valor,onChange:C=>h(y,"valor",Number(C.target.value)),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"})]},y))]}),c.jsx("textarea",{placeholder:"Observações da montagem ou laboratório",value:l.observacoes,onChange:p=>u({...l,observacoes:p.target.value}),className:"w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 min-h-24"}),c.jsxs("div",{className:"flex justify-end gap-3",children:[c.jsx("button",{type:"button",onClick:()=>a(!1),className:"px-5 py-3 rounded-xl bg-slate-100 font-bold",children:"Cancelar"}),c.jsx("button",{type:"submit",className:"px-5 py-3 rounded-xl bg-[#4A3AFF] text-white font-bold",children:"Salvar OS"})]})]})})]})}function db(){const{activeTab:t,user:e,loadingAuth:n,setActiveTab:r,carrinho:s,userRole:i,dadosEmpresa:o,empresaId:a,databaseError:l}=It(),[u,d]=P.useState(!1),[h,f]=P.useState(!1);P.useEffect(()=>{const p=localStorage.getItem("otica_theme")==="dark";f(p),document.documentElement.classList.toggle("dark",p)},[]);const _=()=>{const p=!h;f(p),localStorage.setItem("otica_theme",p?"dark":"light"),document.documentElement.classList.toggle("dark",p)};return n?c.jsx("div",{className:"flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-900",children:c.jsx("p",{className:"text-slate-500 font-medium",children:"Iniciando VISTTA ERP..."})}):e?a?c.jsxs("div",{className:"flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden",children:[c.jsx(YI,{}),c.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden relative pb-[70px] md:pb-0",children:[l&&c.jsx("div",{className:"absolute top-0 left-0 right-0 z-50 bg-rose-600 text-white px-4 py-2 text-center text-sm font-semibold",children:l}),c.jsx("button",{onClick:_,className:"absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-[#4A3AFF] shadow-sm",title:"Alternar tema",children:h?c.jsx(qI,{size:18}):c.jsx(WI,{size:18})}),c.jsxs("main",{className:"flex-1 overflow-y-auto p-4 pt-16 sm:pt-10 sm:p-10 lg:p-12 relative z-10 custom-scrollbar h-full",children:[t==="dashboard"&&c.jsx(JI,{}),t==="vendas"&&c.jsx(ZI,{}),t==="caixa"&&c.jsx(eb,{}),t==="estoque"&&c.jsx(nb,{}),t==="clientes"&&c.jsx(sb,{}),t==="orcamentos"&&c.jsx(ib,{}),t==="ordens"&&c.jsx(ub,{}),t==="financeiro"&&c.jsx(ob,{}),["fornecedores","contas","categorias","usuarios"].includes(t)&&c.jsx(lb,{activeTab:t})]}),c.jsxs("div",{className:"md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex items-center h-[70px] z-[55]",children:[c.jsx(Fs,{icon:yy,label:"Início",active:t==="dashboard",onClick:()=>r("dashboard")}),c.jsx(Fs,{icon:wy,label:"PDV",active:t==="vendas",onClick:()=>r("vendas"),badge:s.length}),c.jsx(Fs,{icon:Ih,label:"Estoque",active:t==="estoque",onClick:()=>r("estoque")}),c.jsx(Fs,{icon:xl,label:"Clientes",active:t==="clientes",onClick:()=>r("clientes")}),c.jsx(Fs,{icon:VI,label:"Menu",active:u,onClick:()=>d(!u)})]}),u&&c.jsx("div",{className:"md:hidden fixed inset-0 z-[70] bg-slate-900/60",onClick:()=>d(!1),children:c.jsxs("div",{className:"absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-white dark:bg-slate-800 shadow-2xl p-5",onClick:p=>p.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center justify-between mb-8",children:[c.jsx("span",{className:"font-bold truncate text-slate-900 dark:text-white",children:(o==null?void 0:o.nome)||"Minha Ótica"}),c.jsx("button",{onClick:()=>d(!1),className:"text-slate-400",children:"Fechar"})]}),c.jsx("div",{className:"space-y-2",children:[["caixa","Caixa Diário"],["orcamentos","Orçamentos"],["ordens","Ordens de Serviço"],["categorias","Categorias"],...i==="admin"?[["financeiro","Financeiro"],["contas","Contas"],["fornecedores","Fornecedores"],["usuarios","Usuários"]]:[]].map(([p,y])=>c.jsx("button",{onClick:()=>{r(p),d(!1)},className:"w-full text-left px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700",children:y},p))})]})})]})]}):c.jsx("div",{className:"flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-900 p-6 text-center",children:c.jsxs("div",{className:"max-w-md",children:[c.jsx("h2",{className:"text-xl font-bold text-slate-800 dark:text-white mb-3",children:"Perfil da empresa não configurado"}),c.jsx("p",{className:"text-slate-500 mb-6",children:"Sua conta foi autenticada, mas ainda não está vinculada a uma ótica. Saia e entre novamente ou tente recarregar."}),c.jsx("button",{onClick:()=>window.location.reload(),className:"px-5 py-3 rounded-xl bg-[#4A3AFF] text-white font-bold",children:"Tentar novamente"})]})}):c.jsx(XI,{})}function Fs({icon:t,label:e,active:n,onClick:r,badge:s=0}){return c.jsxs("button",{onClick:r,className:`flex-1 h-full flex flex-col items-center justify-center gap-1 text-[10px] relative ${n?"text-[#4A3AFF] font-bold":"text-slate-400"}`,children:[c.jsx(t,{size:22}),s>0&&c.jsx("span",{className:"absolute top-1 right-3 bg-rose-500 text-white text-[10px] rounded-full px-1.5",children:s}),c.jsx("span",{children:e})]})}function hb(){return c.jsx(bI,{children:c.jsx(db,{})})}pc.createRoot(document.getElementById("root")).render(c.jsx(ai.StrictMode,{children:c.jsx(hb,{})}));
